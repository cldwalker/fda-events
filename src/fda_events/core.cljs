(ns fda-events.core
  (:require #_[clojure.browser.repl :as repl]
            [clojure.string :as cstr]
            [rum]
            [sablono.core :as sablono]
            [goog.net.XhrIo :as xhr]))

;; (repl/connect "http://localhost:9000/repl")

(enable-console-print!)

(def app-state (atom {:query ""}))
(def query-history (atom {}))

(defn fetch-query!
  ([app query-map]
   (fetch-query! app query-map (fn [resp]
                                 (swap! app assoc :result
                                        {:result (get resp "results")
                                         :count (get-in resp ["meta" "results" "total"])}))))
  ([app query-map cb]
   (swap! app assoc :message (str "Submitted: " query-map))
   (let [url (str "https://api.fda.gov/drug/event.json?"
                  (cstr/join "&" (map (fn [[k v]] (str (name k) "=" v)) query-map)))]
     (if-let [history-result (get @query-history query-map)]
       (cb history-result)
       (xhr/send url
                 (fn [xhr-event]
                   (let [raw-response (js/JSON.parse (.getResponseText (.-target xhr-event)))
                         resp (js->clj raw-response)]
                     (.log js/console (str "Response for " url ":") raw-response)
                     (cb resp)
                     ;; Should pass query-history in as arg
                     (swap! query-history assoc query-map resp))))))))

(defn submit-query [app event]
  (fetch-query! app {:search (:query @app)})
  (when (re-find #"extras" js/window.location.search)
    (fetch-query! app
                  {:search (:query @app) :count "patient.reaction.reactionmeddrapt.exact"}
                  (fn [resp]
                    (swap! app assoc :reactions (get resp "results")))))
  (.preventDefault event))

(rum/defc input < rum/cursored rum/cursored-watch [ref attributes]
  [:input (merge attributes {:type "text"
                             :value @ref
                             :on-change #(reset! ref (.. % -target -value))})])

(rum/defc query-form [app]
  [:form {:onSubmit #(submit-query app %)}
   [:.row
    [:.small-8
     [:.row
      [:.small-9.columns
       (input (rum/cursor app [:query])
              {:type "text" :id "query" :placeholder "Query" :className "radius" :autoFocus true})]
      [:.small-3.columns
       [:a.button.small.radius
        {:href "#" :onClick #(submit-query app %)}
        "Search"]]]]]])

(defn count-query [app tree-location event]
  (fetch-query! app {:search (:query @app) :count (cstr/join "." (conj tree-location "exact"))})
  (.preventDefault event))

(defn query-this-value [app tree-location value event]
  (swap! app assoc :query (str (:query @app) " AND " (cstr/join "." tree-location) ":" value))
  (fetch-query! app {:search (:query @app)})
  (.preventDefault event))

(defn render-node [app value tree-location]
  (cond
   (and (vector? value) (every? map? value))
    (map-indexed #(apply js/TreeView #js {:nodeLabel (str "Array " %1)}
                         (render-node app %2 tree-location))
                 value)

   (vector? value)
   (map #(sablono/html [:div %]) value)

   (map? value)
   (map (fn [[k v]]
           (if (or (map? v) (vector? v))
             (apply js/TreeView #js {:nodeLabel (name k) :defaultCollapsed true} (render-node app v (conj tree-location k)))
             (sablono/html (apply vector :div [:span (str (name k) ": " (pr-str v))]
                                  [" ["
                                   [:a {:href "#" :onClick #(count-query app (conj tree-location k) %)} "Counts"]
                                   " | "
                                   [:a {:href "#" :onClick #(query-this-value app (conj tree-location k) v %)} "Query this value"]
                                   "]"]))))
         value)

    :else
   [(pr-str value)]))

(defn history-query [app query-map event]
  (fetch-query! app query-map)
  (.preventDefault event))

(rum/defc fda-event-app < rum/reactive [app]
  (let [{:keys [message result reactions]} (rum/react app)]
    [:div
     [:.row
      [:h2 "Search FDA Events!"]
      (when message
        [:div.alert-box.radius.small-6.columns.success {:data-alert true} message])
      (query-form app)]
     [:.row
      [:.large-9.columns
       (when result [:h5 "Results"])
       (when result
         [:pre.panel.radius
          [:div (str "Count: " (:count result))]
          (render-node app (:result result) [])])
       (when (seq reactions)
         [:div
          [:h5 "Reactions"]
          (let [max-count (apply max (map #(get % "count") reactions))]
            (map #(vector :div
                          [:meter {:value (get % "count") :max max-count}]
                          (str " " (get % "count") " - " (get % "term")))
                 reactions))])]
      (when (seq @query-history)
        [:aside.large-3.columns
         [:h5 "History"]
         [:ul.panel.side-nav
          (map #(vector :li [:a {:href "#" :onClick (partial history-query app (key %))} (pr-str (key %))])
               @query-history)]])]]))

(rum/mount (fda-event-app app-state) (.getElementById js/document "app"))

(comment
  (add-watch app-state :watch-changes
             (fn [k a old new]
               (prn "APP update" (keys new) new)))

  (js/setTimeout
   (fn []
     (swap! app-state assoc :result
            [{:num 102
              :string "blarg"
              :foo [1 2 3]
              :receiver {:org "name" :bar {:a 1}}}
             {:num 103
              :string "blurg"
              :receiver {:org "foo"}}]))
   1000))
