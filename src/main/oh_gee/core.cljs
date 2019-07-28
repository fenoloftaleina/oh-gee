(ns oh-gee.core
  (:require [cljs-webgl.common :as common]
            [cljs-webgl.context :as context]
            [cljs-webgl.shaders :as shaders]
            [cljs-webgl.constants.draw-mode :as draw-mode]
            [cljs-webgl.constants.data-type :as data-type]
            [cljs-webgl.constants.buffer-object :as buffer-object]
            [cljs-webgl.constants.shader :as shader]
            [cljs-webgl.buffers :as buffers]
            [cljs-webgl.typed-arrays :as ta]))

(def w js/window.innerWidth)
(def h js/window.innerHeight)

(def vertex-shader-source
  "
  precision mediump float;

  attribute vec3 aVertexPosition;
  //attribute vec4 aVertexColor;

  uniform mat4 uMVMatrix;
  uniform mat4 uPMatrix;

  uniform float frame;

  //varying vec4 vColor;

  void main(void) {
  vec3 pos;
  pos = aVertexPosition;
  pos.x = pos.x + 50.0 * sin(frame * pos.y * 0.08);
  //pos.y = pos.y + sin(frame * pos.x * 0.00005);
  gl_Position = uPMatrix * uMVMatrix * vec4(pos, 1.0);
  //vColor = aVertexColor;
  }
  ")

(def fragment-shader-source
  "precision mediump float;
   uniform float frame;
   uniform float w;
   uniform float h;

   //varying vec4 vColor;

   void main() {
     vec3 pos = vec3(gl_PointCoord.xy, 0);
     float f = frame;
     float a = 0.5; //pow(sin(50.0 * pos.y) * sin(50.0 * pos.x), 2.0) + pow(sin(frame * 0.3), 2.0) + 0.1;
     gl_FragColor.r = sin(pos.x * 4.1) * sin(pos.y * 4.1);
     gl_FragColor.g = a;
     gl_FragColor.b = a;
     gl_FragColor.a = 1.0;
   }")

(def canvas (.getElementById js/document "canvas"))
(def gl (context/get-context canvas))
(def shader (shaders/create-program gl
                                    (shaders/create-shader gl shader/vertex-shader vertex-shader-source)
                                    (shaders/create-shader gl shader/fragment-shader fragment-shader-source)))
(def parts 10000)
(def vertex-buffer (buffers/create-buffer gl (ta/float32
                                               (flatten
                                                 (for [i (range parts)
                                                       :let [a (/ i 100)]]
                                                   [1.0 (+ 1.0 a) 0.0
                                                    -1.0 (+ 1.0 a) 0.0
                                                    1.0 (+ -1.0 a) 0.0
                                                    -1.0 (+ -1.0 a) 0.0]
                                                   ))
                                               )
                                          buffer-object/array-buffer
                                          buffer-object/static-draw))
;; vertex-color-buffer (buffers/create-buffer gl (ta/float32 [0.1 0.1 0.0 1.0
;;                                                      0.1 0.9 0.0 1.0
;;                                                      0.1 0.1 0.9 1.0
;;                                                      0.1 0.1 0.0 1.0])
;;                                      buffer-object/array-buffer
;;                                      buffer-object/static-draw)
(def element-buffer (buffers/create-buffer gl (ta/unsigned-int16
                                                (flatten
                                                  (for [i (range parts)]
                                                    (mapv (partial + (* i 4))
                                                          [0 1 2 2 1 3])))
                                                )
                                           buffer-object/element-array-buffer
                                           buffer-object/static-draw))

(defn draw [frame last-dt dt]
  (let [maybe-new-last-dt (if (zero? (mod frame 300))
                            (do
                              (prn :something
                                   dt
                                   last-dt
                                   (/ 300000.0 (- dt last-dt))
                                   )
                              dt)
                            last-dt)
        triangles-count (* 6 parts)]
    (-> gl
        (buffers/clear-color-buffer 0 0 0 1)
        (buffers/draw! :shader shader
                       :draw-mode draw-mode/triangles
                       :count triangles-count

                       :attributes
                       [{:buffer vertex-buffer
                         :location (shaders/get-attrib-location gl shader "aVertexPosition")
                         :components-per-vertex 3
                         :type data-type/float}
                        ;; {:buffer vertex-color-buffer
                        ;;  :location (shaders/get-attrib-location gl shader "aVertexColor")
                        ;;  :components-per-vertex 4
                        ;;  :type data-type/float}
                        ]

                       :uniforms
                       [{:name "frame" :type :float :values (ta/float32 [(float frame)])}
                        {:name "w" :type :float :values (ta/float32 [w])}
                        {:name "h" :type :float :values (ta/float32 [h])}
                        {:name "uPMatrix" :type :mat4 :values (common/get-perspective-matrix gl)}
                        {:name "uMVMatrix" :type :mat4 :values (common/get-position-matrix [-5.5 -50.0 -100.0])}
                        ]

                       :element-array
                       {:buffer element-buffer
                        :count triangles-count
                        :type data-type/unsigned-short
                        :offset 0}))

    (.requestAnimationFrame js/window (fn [time-elapsed] (draw (inc frame)
                                                               maybe-new-last-dt
                                                               time-elapsed)))))

(defn init []
  (set! (.-width canvas) w)
  (set! (.-height canvas) h)
  (.requestAnimationFrame js/window (fn [time-elapsed] (draw 0 0 time-elapsed))))
