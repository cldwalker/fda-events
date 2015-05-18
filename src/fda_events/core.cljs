(ns fda-events.core
  (:require [clojure.browser.repl :as repl]
            [rum]))

;; (repl/connect "http://localhost:9000/repl")

(enable-console-print!)

(def app-state (atom {}))

(defn submit-query [app event]
  (swap! app assoc :message "Submitted!")
  (.preventDefault event))

(rum/defc query-form [app]
  [:form
   [:.row
    [:.small-8
     [:.row
      [:.small-9.columns
       [:input.radius {:type "text" :id "query" :placeholder "Query"}]]
      [:.small-3.columns
       [:a.button.small.radius
        {:href "#" :onClick #(submit-query app %)}
        "Search"]]]]]])

(rum/defc fda-event-app < rum/reactive [app]
  (let [{:keys [message]} (rum/react app)]
    [:div
     [:h2 "Search FDA Events!"]
     (when message
       [:div.alert-box.radius.small-6.columns {:data-alert true} message])
     (query-form app)]))

(rum/mount (fda-event-app app-state) (.getElementById js/document "app"))
