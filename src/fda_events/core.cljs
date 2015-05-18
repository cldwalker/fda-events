(ns fda-events.core
  (:require [clojure.browser.repl :as repl]
            [rum]
            [goog.net.XhrIo :as xhr]))

;; (repl/connect "http://localhost:9000/repl")

(enable-console-print!)

(def app-state (atom {:query ""}))

(defn submit-query [app event]
  (swap! app assoc :message "Submitted!")
  (xhr/send (str "https://api.fda.gov/drug/event.json?search=" (:query @app))
            (fn [xhr-event]
              (.log js/console "Response:" (js/JSON.parse (.getResponseText (.-target xhr-event))))
              (swap! app assoc :result (.getResponseText (.-target xhr-event)))))
  (.preventDefault event))

(rum/defc input < rum/cursored rum/cursored-watch [ref attributes]
  [:input (merge attributes {:type "text"
                             :value @ref
                             :on-change #(reset! ref (.. % -target -value))})])

(rum/defc query-form [app]
  [:form
   [:.row
    [:.small-8
     [:.row
      [:.small-9.columns
       (input (rum/cursor app [:query])
              {:type "text" :id "query" :placeholder "Query" :className "radius"})]
      [:.small-3.columns
       [:a.button.small.radius
        {:href "#" :onClick #(submit-query app %)}
        "Search"]]]]]])

(rum/defc fda-event-app < rum/reactive [app]
  (let [{:keys [message result]} (rum/react app)]
    [:div
     [:h2 "Search FDA Events!"]
     (when message
       [:div.alert-box.radius.small-6.columns {:data-alert true} message])
     (query-form app)
     (when result
       [:pre.panel.radius result])]))

(rum/mount (fda-event-app app-state) (.getElementById js/document "app"))
