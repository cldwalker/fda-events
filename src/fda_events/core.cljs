(ns fda-events.core
  (:require [clojure.browser.repl :as repl]
            [rum]
            [sablono.core :as sablono]
            [goog.net.XhrIo :as xhr]))

;; (repl/connect "http://localhost:9000/repl")

(enable-console-print!)

(def app-state (atom {:query ""}))

(defn submit-query [app event]
  (swap! app assoc :message "Submitted!")
  (xhr/send (str "https://api.fda.gov/drug/event.json?search=" (:query @app))
            (fn [xhr-event]
              (let [response (js/JSON.parse (.getResponseText (.-target xhr-event)))]
                (.log js/console "Response:" response)
                (swap! app assoc :result (get (js->clj response) "results")))))
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

(defn render-node [value]
  (cond
   (and (vector? value) (every? map? value))
    (map-indexed #(apply js/TreeView #js {:nodeLabel (str "Array " %1)}
                         (render-node %2))
                 value)

   (vector? value)
   (map #(sablono/html [:div %]) value)

   (map? value)
   (map (fn [[k v]]
           (if (or (map? v) (vector? v))
             (apply js/TreeView #js {:nodeLabel (name k) :defaultCollapsed true} (render-node v))
             (sablono/html [:div (str (name k) ": " (pr-str v))])))
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
       [:pre.panel.radius (render-node result)])]))

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
