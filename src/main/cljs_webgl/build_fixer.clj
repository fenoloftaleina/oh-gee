(ns cljs-webgl.build-fixer)

(defn go
  {:shadow.build/stage :flush}
  [build-state & args]
  (let [main-js-filepath "public/js/main.js"]
    (spit main-js-filepath
          (-> main-js-filepath
              slurp
              (clojure.string/replace #"\/js\/cljs-runtime\/" "js/cljs-runtime/"))))
  build-state)
