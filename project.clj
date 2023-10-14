(defproject zefstyle "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.11.1"]
                 [org.clojure/clojurescript "1.11.60"]
                 [reagent "1.1.1" :exclusions [cljsjs/react cljsjs/react-dom]]]

  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-figwheel "0.5.21-SNAPSHOT"]]

  :clean-targets ^{:protect false}

  [:target-path
   [:cljsbuild :builds :app :compiler :output-dir]
   [:cljsbuild :builds :app :compiler :output-to]]

  :resource-paths ["public"]

  :figwheel {:http-server-root "."
             :nrepl-port 7002
             :nrepl-middleware [cider.piggieback/wrap-cljs-repl]
             :css-dirs ["public/css"]}

  :cljsbuild {:builds {:app
                       {:source-paths ["src" "env/dev/cljs"]
                        :compiler
                        {:main "zefstyle.dev"
                         :output-to "public/js/app.js"
                         :output-dir "public/js/out"
                         :asset-path   "js/out"
                         :source-map true
                         :infer-externs true
                         :npm-deps false
                         :foreign-libs [{:file "public/js/bundle.js"
                                         :provides ["react" "react-dom" "react-player"]
                                         :global-exports {react React
                                                          react-dom ReactDOM
                                                          react-player ReactPlayer}}]
                         :optimizations :none
                         :pretty-print  true}
                        :figwheel
                        {:on-jsload "zefstyle.core/mount-root"
                         :open-urls ["http://localhost:3449/index.html"]}}
                       :release
                       {:source-paths ["src" "env/prod/cljs"]
                        :compiler
                        {:output-to "public/js/app.js"
                         :output-dir "target/release"
                         :optimizations :advanced
                         :infer-externs true
                         :npm-deps false
                         :externs ["cljsjs/react/common/react.ext.js"
                                   "cljsjs/react-dom/common/react-dom-server.ext.js"
                                   "cljsjs/react-dom/common/react-dom.ext.js"]
                         :foreign-libs [{:file "public/js/bundle.js"
                                         :provides ["react" "react-dom" "react-player"]
                                         :global-exports {react React
                                                          react-dom ReactDOM
                                                          react-player ReactPlayer}}]
                         :pretty-print false}}}}

  :aliases {"release" ["do" "clean" ["cljsbuild" "once" "release"]]}

  :profiles {:dev {:source-paths ["src" "env/dev/clj" "env/dev/cljs"]
                   :dependencies [[binaryage/devtools "1.0.6"]
                                  [figwheel-sidecar "0.5.21-SNAPSHOT"]
                                  [nrepl "1.0.0"]
                                  [cider/piggieback "0.5.3"]]}})
