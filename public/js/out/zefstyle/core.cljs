(ns zefstyle.core
  (:require [reagent.core :as reagent :refer [atom]]))

;; -------------------------
;; Views


(defn home-page []
  (let [react-player (aget js/window "deps" "react-player")]
    [:div
     [:h2 "Zef Style"]
     [:> react-player {:url "https://youtu.be/uMK0prafzw0"}]]))

;; -------------------------
;; Initialize app

(defn mount-root []
  (reagent/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))