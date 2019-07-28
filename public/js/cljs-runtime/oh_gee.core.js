goog.provide('oh_gee.core');
goog.require('cljs.core');
goog.require('cljs_webgl.common');
goog.require('cljs_webgl.context');
goog.require('cljs_webgl.shaders');
goog.require('cljs_webgl.constants.draw_mode');
goog.require('cljs_webgl.constants.data_type');
goog.require('cljs_webgl.constants.buffer_object');
goog.require('cljs_webgl.constants.shader');
goog.require('cljs_webgl.buffers');
goog.require('cljs_webgl.typed_arrays');
oh_gee.core.w = window.innerWidth;
oh_gee.core.h = window.innerHeight;
oh_gee.core.vertex_shader_source = "\n  precision mediump float;\n\n  attribute vec3 aVertexPosition;\n  //attribute vec4 aVertexColor;\n\n  uniform mat4 uMVMatrix;\n  uniform mat4 uPMatrix;\n\n  uniform float frame;\n\n  //varying vec4 vColor;\n\n  void main(void) {\n  vec3 pos;\n  pos = aVertexPosition;\n  pos.x = pos.x + 50.0 * sin(frame * pos.y * 0.08);\n  //pos.y = pos.y + sin(frame * pos.x * 0.00005);\n  gl_Position = uPMatrix * uMVMatrix * vec4(pos, 1.0);\n  //vColor = aVertexColor;\n  }\n  ";
oh_gee.core.fragment_shader_source = "precision mediump float;\n   uniform float frame;\n   uniform float w;\n   uniform float h;\n\n   //varying vec4 vColor;\n\n   void main() {\n     vec3 pos = vec3(gl_PointCoord.xy, 0);\n     float f = frame;\n     float a = 0.5; //pow(sin(50.0 * pos.y) * sin(50.0 * pos.x), 2.0) + pow(sin(frame * 0.3), 2.0) + 0.1;\n     gl_FragColor.r = sin(pos.x * 4.1) * sin(pos.y * 4.1);\n     gl_FragColor.g = a;\n     gl_FragColor.b = a;\n     gl_FragColor.a = 1.0;\n   }";
oh_gee.core.canvas = document.getElementById("canvas");
oh_gee.core.gl = cljs_webgl.context.get_context.cljs$core$IFn$_invoke$arity$1(oh_gee.core.canvas);
oh_gee.core.shader = cljs_webgl.shaders.create_program.cljs$core$IFn$_invoke$arity$variadic(oh_gee.core.gl,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_webgl.shaders.create_shader(oh_gee.core.gl,cljs_webgl.constants.shader.vertex_shader,oh_gee.core.vertex_shader_source),cljs_webgl.shaders.create_shader(oh_gee.core.gl,cljs_webgl.constants.shader.fragment_shader,oh_gee.core.fragment_shader_source)], 0));
oh_gee.core.parts = (10000);
oh_gee.core.vertex_buffer = cljs_webgl.buffers.create_buffer(oh_gee.core.gl,cljs_webgl.typed_arrays.float32(cljs.core.flatten((function (){var iter__4523__auto__ = (function oh_gee$core$iter__26004(s__26005){
return (new cljs.core.LazySeq(null,(function (){
var s__26005__$1 = s__26005;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26005__$1);
if(temp__5735__auto__){
var s__26005__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26005__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__26005__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__26007 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__26006 = (0);
while(true){
if((i__26006 < size__4522__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__26006);
var a = (i / (100));
cljs.core.chunk_append(b__26007,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,(1.0 + a),0.0,-1.0,(1.0 + a),0.0,1.0,(-1.0 + a),0.0,-1.0,(-1.0 + a),0.0], null));

var G__26015 = (i__26006 + (1));
i__26006 = G__26015;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26007),oh_gee$core$iter__26004(cljs.core.chunk_rest(s__26005__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26007),null);
}
} else {
var i = cljs.core.first(s__26005__$2);
var a = (i / (100));
return cljs.core.cons(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,(1.0 + a),0.0,-1.0,(1.0 + a),0.0,1.0,(-1.0 + a),0.0,-1.0,(-1.0 + a),0.0], null),oh_gee$core$iter__26004(cljs.core.rest(s__26005__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(oh_gee.core.parts));
})())),cljs_webgl.constants.buffer_object.array_buffer,cljs_webgl.constants.buffer_object.static_draw);
oh_gee.core.element_buffer = cljs_webgl.buffers.create_buffer(oh_gee.core.gl,cljs_webgl.typed_arrays.unsigned_int16(cljs.core.flatten((function (){var iter__4523__auto__ = (function oh_gee$core$iter__26008(s__26009){
return (new cljs.core.LazySeq(null,(function (){
var s__26009__$1 = s__26009;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26009__$1);
if(temp__5735__auto__){
var s__26009__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26009__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__26009__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__26011 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__26010 = (0);
while(true){
if((i__26010 < size__4522__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__26010);
cljs.core.chunk_append(b__26011,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(i * (4))),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(2),(1),(3)], null)));

var G__26016 = (i__26010 + (1));
i__26010 = G__26016;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26011),oh_gee$core$iter__26008(cljs.core.chunk_rest(s__26009__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26011),null);
}
} else {
var i = cljs.core.first(s__26009__$2);
return cljs.core.cons(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(i * (4))),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(2),(1),(3)], null)),oh_gee$core$iter__26008(cljs.core.rest(s__26009__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(oh_gee.core.parts));
})())),cljs_webgl.constants.buffer_object.element_array_buffer,cljs_webgl.constants.buffer_object.static_draw);
oh_gee.core.draw = (function oh_gee$core$draw(frame,last_dt,dt){
var maybe_new_last_dt = (((cljs.core.mod(frame,(300)) === (0)))?(function (){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"something","something",295416317),dt,last_dt,(300000.0 / (dt - last_dt))], 0));

return dt;
})()
:last_dt);
var triangles_count = ((6) * oh_gee.core.parts);
cljs_webgl.buffers.draw_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs_webgl.buffers.clear_color_buffer(oh_gee.core.gl,(0),(0),(0),(1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shader","shader",1492833021),oh_gee.core.shader,new cljs.core.Keyword(null,"draw-mode","draw-mode",-1830018794),cljs_webgl.constants.draw_mode.triangles,new cljs.core.Keyword(null,"count","count",2139924085),triangles_count,new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"buffer","buffer",617295198),oh_gee.core.vertex_buffer,new cljs.core.Keyword(null,"location","location",1815599388),cljs_webgl.shaders.get_attrib_location(oh_gee.core.gl,oh_gee.core.shader,"aVertexPosition"),new cljs.core.Keyword(null,"components-per-vertex","components-per-vertex",426723635),(3),new cljs.core.Keyword(null,"type","type",1174270348),cljs_webgl.constants.data_type.float$], null)], null),new cljs.core.Keyword(null,"uniforms","uniforms",-782808153),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"frame",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"values","values",372645556),cljs_webgl.typed_arrays.float32(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frame], null))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"w",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"values","values",372645556),cljs_webgl.typed_arrays.float32(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [oh_gee.core.w], null))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"h",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"values","values",372645556),cljs_webgl.typed_arrays.float32(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [oh_gee.core.h], null))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"uPMatrix",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mat4","mat4",-237531594),new cljs.core.Keyword(null,"values","values",372645556),cljs_webgl.common.get_perspective_matrix(oh_gee.core.gl)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"uMVMatrix",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mat4","mat4",-237531594),new cljs.core.Keyword(null,"values","values",372645556),cljs_webgl.common.get_position_matrix(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-5.5,-50.0,-100.0], null))], null)], null),new cljs.core.Keyword(null,"element-array","element-array",38145164),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"buffer","buffer",617295198),oh_gee.core.element_buffer,new cljs.core.Keyword(null,"count","count",2139924085),triangles_count,new cljs.core.Keyword(null,"type","type",1174270348),cljs_webgl.constants.data_type.unsigned_short,new cljs.core.Keyword(null,"offset","offset",296498311),(0)], null)], 0));

return window.requestAnimationFrame(((function (maybe_new_last_dt,triangles_count){
return (function (time_elapsed){
var G__26012 = (frame + (1));
var G__26013 = maybe_new_last_dt;
var G__26014 = time_elapsed;
return (oh_gee.core.draw.cljs$core$IFn$_invoke$arity$3 ? oh_gee.core.draw.cljs$core$IFn$_invoke$arity$3(G__26012,G__26013,G__26014) : oh_gee.core.draw.call(null,G__26012,G__26013,G__26014));
});})(maybe_new_last_dt,triangles_count))
);
});
oh_gee.core.init = (function oh_gee$core$init(){
oh_gee.core.canvas.width = oh_gee.core.w;

oh_gee.core.canvas.height = oh_gee.core.h;

return window.requestAnimationFrame((function (time_elapsed){
return oh_gee.core.draw((0),(0),time_elapsed);
}));
});

//# sourceMappingURL=oh_gee.core.js.map
