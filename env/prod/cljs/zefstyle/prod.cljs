(ns zefstyle.prod
  (:require [zefstyle.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
