(ns fda-events.core
  (:require #_[clojure.browser.repl :as repl]
            [clojure.string :as cstr]
            [rum]
            [sablono.core :as sablono]
            [goog.net.XhrIo :as xhr]))

;; (repl/connect "http://localhost:9000/repl")

(enable-console-print!)

(def app-state (atom {:query ""}))

(defn fetch-query! [app query-map]
  (swap! app assoc :message (str "Submitted: " query-map))
  (let [url (str "https://api.fda.gov/drug/event.json?"
                 (cstr/join "&" (map (fn [[k v]] (str (name k) "=" v)) query-map)))]
    (xhr/send url
            (fn [xhr-event]
              (let [response (js/JSON.parse (.getResponseText (.-target xhr-event)))]
                (.log js/console (str "Response for " url ":") response)
                (swap! app assoc :result (js->clj response)))))))

(defn submit-query [app event]
  (fetch-query! app {:search (:query @app)})
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

(rum/defc fda-event-app < rum/reactive [app]
  (let [{:keys [message result]} (rum/react app)]
    [:div
     [:h2 "Search FDA Events!"]
     (when message
       [:div.alert-box.radius.small-6.columns {:data-alert true} message])
     (query-form app)
     (when result
       [:pre.panel.radius
        [:div (str "Count: " (get-in result ["meta" "results" "total"]))]
        (render-node app (get result "results") [])])]))

(rum/mount (fda-event-app app-state) (.getElementById js/document "app"))

(comment
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
