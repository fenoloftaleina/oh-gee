goog.provide('cljs_webgl.common');
goog.require('cljs.core');
var module$node_modules$gl_matrix$cjs$index=shadow.js.require("module$node_modules$gl_matrix$cjs$index", {});
goog.require('cljs_webgl.buffers');
goog.require('cljs_webgl.context');
goog.require('cljs_webgl.shaders');
goog.require('cljs_webgl.texture');
goog.require('cljs_webgl.constants.texture_parameter_name');
goog.require('cljs_webgl.constants.texture_filter');
goog.require('cljs_webgl.constants.webgl');
goog.require('cljs_webgl.typed_arrays');
cljs.core.enable_console_print_BANG_();
cljs_webgl.common.init_gl = (function cljs_webgl$common$init_gl(canvas){
var gl = cljs_webgl.context.get_context.cljs$core$IFn$_invoke$arity$1(canvas);
if(cljs.core.truth_(gl)){
} else {
throw (new Error("Could not initialize WebGL"));
}

return gl;
});
cljs_webgl.common.init_shaders = (function cljs_webgl$common$init_shaders(gl){
var fragment_shader = cljs_webgl.shaders.get_shader(gl,"shader-fs");
var vertex_shader = cljs_webgl.shaders.get_shader(gl,"shader-vs");
return cljs_webgl.shaders.create_program.cljs$core$IFn$_invoke$arity$variadic(gl,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fragment_shader,vertex_shader], 0));
});
cljs_webgl.common.get_perspective_matrix = (function cljs_webgl$common$get_perspective_matrix(gl){
var map__25553 = cljs_webgl.context.get_viewport(gl);
var map__25553__$1 = (((((!((map__25553 == null))))?(((((map__25553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25553):map__25553);
var viewport_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25553__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var viewport_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25553__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return module$node_modules$gl_matrix$cjs$index.mat4.perspective(module$node_modules$gl_matrix$cjs$index.mat4.create(),(45),(viewport_width / viewport_height),0.1,100.0);
});
cljs_webgl.common.get_position_matrix = (function cljs_webgl$common$get_position_matrix(v){
var m = module$node_modules$gl_matrix$cjs$index.mat4.create();
module$node_modules$gl_matrix$cjs$index.mat4.identity(m);

return module$node_modules$gl_matrix$cjs$index.mat4.translate(m,m,cljs.core.clj__GT_js(v));
});
cljs_webgl.common.deg__GT_rad = (function cljs_webgl$common$deg__GT_rad(degrees){
return ((degrees * Math.PI) / (180));
});
cljs_webgl.common.animate = (function cljs_webgl$common$animate(draw_fn){
var loop = (function cljs_webgl$common$animate_$_loop(frame){
return (function (){
window.requestAnimFrame(cljs_webgl$common$animate_$_loop((frame + (1))));

return (draw_fn.cljs$core$IFn$_invoke$arity$1 ? draw_fn.cljs$core$IFn$_invoke$arity$1(frame) : draw_fn.call(null,frame));
});
});
var fexpr__25555 = loop((0));
return (fexpr__25555.cljs$core$IFn$_invoke$arity$0 ? fexpr__25555.cljs$core$IFn$_invoke$arity$0() : fexpr__25555.call(null));
});
/**
 * 
 */
cljs_webgl.common.load_image = (function cljs_webgl$common$load_image(url,callback_fn){
var img = (new Image());
img.onload = ((function (img){
return (function (){
return (callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(img) : callback_fn.call(null,img));
});})(img))
;

img.crossOrigin = "anonymous";

return img.src = url;
});
/**
 * Loads the texture from the given URL. Note that the image is loaded in the background,
 * and the returned texture will not immediately be fully initialized.
 */
cljs_webgl.common.load_texture = (function cljs_webgl$common$load_texture(gl_context,url,callback_fn){
return cljs_webgl.common.load_image(url,(function (img){
var G__25556 = cljs_webgl.texture.create_texture.cljs$core$IFn$_invoke$arity$variadic(gl_context,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"image","image",-58725096),img,new cljs.core.Keyword(null,"pixel-store-modes","pixel-store-modes",1198746295),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs_webgl.constants.webgl.unpack_flip_y_webgl,true]),new cljs.core.Keyword(null,"parameters","parameters",-1229919748),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs_webgl.constants.texture_parameter_name.texture_mag_filter,cljs_webgl.constants.texture_filter.nearest,cljs_webgl.constants.texture_parameter_name.texture_min_filter,cljs_webgl.constants.texture_filter.nearest])], 0));
return (callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__25556) : callback_fn.call(null,G__25556));
}));
});
cljs_webgl.common.checked_QMARK_ = (function cljs_webgl$common$checked_QMARK_(element_id){
return document.getElementById(element_id).checked;
});
cljs_webgl.common.get_float = (function cljs_webgl$common$get_float(element_id){
return parseFloat(document.getElementById(element_id).value);
});
cljs_webgl.common.ambient_color = (function cljs_webgl$common$ambient_color(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"uAmbientColor",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"vec3","vec3",1116680488),new cljs.core.Keyword(null,"values","values",372645556),cljs_webgl.typed_arrays.float32(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_webgl.common.get_float("ambientR"),cljs_webgl.common.get_float("ambientG"),cljs_webgl.common.get_float("ambientB")], null))], null);
});
cljs_webgl.common.directional_color = (function cljs_webgl$common$directional_color(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"uDirectionalColor",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"vec3","vec3",1116680488),new cljs.core.Keyword(null,"values","values",372645556),cljs_webgl.typed_arrays.float32(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_webgl.common.get_float("directionalR"),cljs_webgl.common.get_float("directionalG"),cljs_webgl.common.get_float("directionalB")], null))], null);
});
cljs_webgl.common.lighting_direction = (function cljs_webgl$common$lighting_direction(){
var lighting_dir = cljs_webgl.typed_arrays.float32(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_webgl.common.get_float("lightDirectionX"),cljs_webgl.common.get_float("lightDirectionY"),cljs_webgl.common.get_float("lightDirectionZ")], null));
var adjusted_dir = module$node_modules$gl_matrix$cjs$index.vec3.create();
module$node_modules$gl_matrix$cjs$index.vec3.normalize(adjusted_dir,lighting_dir);

module$node_modules$gl_matrix$cjs$index.vec3.scale(adjusted_dir,adjusted_dir,-1.0);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"uLightingDirection",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"vec3","vec3",1116680488),new cljs.core.Keyword(null,"values","values",372645556),adjusted_dir], null);
});
cljs_webgl.common.blending = (function cljs_webgl$common$blending(use_blending_QMARK_){
if(cljs.core.truth_(use_blending_QMARK_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"uAlpha",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"values","values",372645556),cljs_webgl.typed_arrays.float32(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_webgl.common.get_float("alpha")], null))], null)], null);
} else {
return null;
}
});
cljs_webgl.common.lighting = (function cljs_webgl$common$lighting(use_lighting_QMARK_){
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"uUseLighting",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.Keyword(null,"values","values",372645556),cljs_webgl.typed_arrays.int32(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(use_lighting_QMARK_)?(1):(0))], null))], null),(cljs.core.truth_(use_lighting_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_webgl.common.ambient_color(),cljs_webgl.common.lighting_direction(),cljs_webgl.common.directional_color()], null):null));
});

//# sourceMappingURL=cljs_webgl.common.js.map
