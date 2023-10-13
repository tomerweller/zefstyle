(ns zefstyle.core
  (:require [reagent.core :as r]
            [reagent.dom :as d]))

;; -------------------------
;; Views

(defn home-page []
  [:div
   [:h2 "Zef Style"]
   [:> js/ReactPlayer {:url "https://youtu.be/uMK0prafzw0"}]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
