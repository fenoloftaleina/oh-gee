goog.provide('cljs_webgl.buffers');
goog.require('cljs.core');
goog.require('cljs_webgl.context');
goog.require('cljs_webgl.typed_arrays');
goog.require('cljs_webgl.constants.capability');
goog.require('cljs_webgl.constants.clear_buffer_mask');
goog.require('cljs_webgl.constants.buffer_object');
goog.require('cljs_webgl.constants.texture_target');
goog.require('cljs_webgl.constants.texture_unit');
goog.require('cljs_webgl.constants.data_type');
goog.require('cljs_webgl.shaders');
/**
 * Creates a new buffer with initialized `data`.
 * 
 *   `data` must be a typed-array
 * 
 *   `target` may be `cljs-webgl.constants.buffer-object/array-buffer` or `cljs-webgl.constants.buffer-object/element-array-buffer`
 * 
 *   `usage` may be `cljs-webgl.constants.buffer-object/static-draw` or `cljs-webgl.constants.buffer-object/dynamic-draw`
 * 
 *   `item-size` [optional] will set the item size as an attribute on the buffer, and the calculate the number of items accordingly.
 * 
 *   Relevant OpenGL ES reference pages:
 * 
 *   * [glGenBuffers(Similar to createBuffer)](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glGenBuffers.xml)
 *   * [glBindBuffer](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glBindBuffer.xml)
 *   * [glBufferData](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glBufferData.xml)
 */
cljs_webgl.buffers.create_buffer = (function cljs_webgl$buffers$create_buffer(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25563 = arguments.length;
var i__4731__auto___25564 = (0);
while(true){
if((i__4731__auto___25564 < len__4730__auto___25563)){
args__4736__auto__.push((arguments[i__4731__auto___25564]));

var G__25565 = (i__4731__auto___25564 + (1));
i__4731__auto___25564 = G__25565;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return cljs_webgl.buffers.create_buffer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

cljs_webgl.buffers.create_buffer.cljs$core$IFn$_invoke$arity$variadic = (function (gl_context,data,target,usage,p__25411){
var vec__25412 = p__25411;
var item_size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25412,(0),null);
var buffer = gl_context.createBuffer();
gl_context.bindBuffer(target,buffer);

gl_context.bufferData(target,data,usage);

if(cljs.core.truth_(item_size)){
buffer.itemSize = item_size;

buffer.numItems = cljs.core.quot(data.length,item_size);
} else {
}

return buffer;
});

cljs_webgl.buffers.create_buffer.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
cljs_webgl.buffers.create_buffer.cljs$lang$applyTo = (function (seq25403){
var G__25404 = cljs.core.first(seq25403);
var seq25403__$1 = cljs.core.next(seq25403);
var G__25405 = cljs.core.first(seq25403__$1);
var seq25403__$2 = cljs.core.next(seq25403__$1);
var G__25406 = cljs.core.first(seq25403__$2);
var seq25403__$3 = cljs.core.next(seq25403__$2);
var G__25407 = cljs.core.first(seq25403__$3);
var seq25403__$4 = cljs.core.next(seq25403__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25404,G__25405,G__25406,G__25407,seq25403__$4);
});

/**
 * Clears the color buffer with specified `red`, `green`, `blue` and `alpha` values.
 * 
 *   Relevant OpenGL ES reference pages:
 * 
 *   * [glClearColor](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glClearColor.xml)
 *   * [glClear](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glClear.xml)
 */
cljs_webgl.buffers.clear_color_buffer = (function cljs_webgl$buffers$clear_color_buffer(gl_context,red,green,blue,alpha){
gl_context.clearColor(red,green,blue,alpha);

gl_context.clear(cljs_webgl.constants.clear_buffer_mask.color_buffer_bit);

return gl_context;
});
/**
 * Clears the depth buffer with specified `depth` value.
 * 
 *   Relevant OpenGL ES reference pages:
 * 
 *   * [glClearDepthf](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glClearDepthf.xml)
 *   * [glClear](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glClear.xml)
 */
cljs_webgl.buffers.clear_depth_buffer = (function cljs_webgl$buffers$clear_depth_buffer(gl_context,depth){
gl_context.clearDepth(depth);

gl_context.clear(cljs_webgl.constants.clear_buffer_mask.depth_buffer_bit);

return gl_context;
});
/**
 * Clears the stencil buffer with specified `index` value.
 * 
 *   Relevant OpenGL ES reference pages:
 * 
 *   * [glClearStencil](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glClearStencil.xml)
 *   * [glClear](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glClear.xml)
 */
cljs_webgl.buffers.clear_stencil_buffer = (function cljs_webgl$buffers$clear_stencil_buffer(gl_context,index){
gl_context.clearStencil(index);

gl_context.clear(cljs_webgl.constants.clear_buffer_mask.stencil_buffer_bit);

return gl_context;
});
cljs_webgl.buffers.set_uniform = (function cljs_webgl$buffers$set_uniform(gl_context,shader,p__25418){
var map__25419 = p__25418;
var map__25419__$1 = (((((!((map__25419 == null))))?(((((map__25419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25419):map__25419);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25419__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25419__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25419__$1,new cljs.core.Keyword(null,"values","values",372645556));
var transpose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25419__$1,new cljs.core.Keyword(null,"transpose","transpose",-474726680));
var uniform_location = cljs_webgl.shaders.get_uniform_location(gl_context,shader,name);
var G__25426 = type;
var G__25426__$1 = (((G__25426 instanceof cljs.core.Keyword))?G__25426.fqn:null);
switch (G__25426__$1) {
case "bool":
return gl_context.uniform1fv(uniform_location,values);

break;
case "bvec2":
return gl_context.uniform2fv(uniform_location,values);

break;
case "bvec3":
return gl_context.uniform3fv(uniform_location,values);

break;
case "bvec4":
return gl_context.uniform4fv(uniform_location,values);

break;
case "float":
return gl_context.uniform1fv(uniform_location,values);

break;
case "vec2":
return gl_context.uniform2fv(uniform_location,values);

break;
case "vec3":
return gl_context.uniform3fv(uniform_location,values);

break;
case "vec4":
return gl_context.uniform4fv(uniform_location,values);

break;
case "int":
return gl_context.uniform1iv(uniform_location,values);

break;
case "ivec2":
return gl_context.uniform2iv(uniform_location,values);

break;
case "ivec3":
return gl_context.uniform3iv(uniform_location,values);

break;
case "ivec4":
return gl_context.uniform4iv(uniform_location,values);

break;
case "mat2":
return gl_context.uniformMatrix2fv(uniform_location,transpose,values);

break;
case "mat3":
return gl_context.uniformMatrix3fv(uniform_location,transpose,values);

break;
case "mat4":
return gl_context.uniformMatrix4fv(uniform_location,transpose,values);

break;
default:
return null;

}
});
cljs_webgl.buffers.set_attribute = (function cljs_webgl$buffers$set_attribute(gl_context,p__25430){
var map__25435 = p__25430;
var map__25435__$1 = (((((!((map__25435 == null))))?(((((map__25435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25435):map__25435);
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25435__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
var location = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25435__$1,new cljs.core.Keyword(null,"location","location",1815599388));
var components_per_vertex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25435__$1,new cljs.core.Keyword(null,"components-per-vertex","components-per-vertex",426723635));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25435__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var normalized_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25435__$1,new cljs.core.Keyword(null,"normalized?","normalized?",1246099953));
var stride = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25435__$1,new cljs.core.Keyword(null,"stride","stride",-1172818435));
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25435__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
gl_context.bindBuffer(cljs_webgl.constants.buffer_object.array_buffer,buffer);

gl_context.enableVertexAttribArray(location);

return gl_context.vertexAttribPointer(location,(function (){var or__4131__auto__ = components_per_vertex;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return buffer.itemSize;
}
})(),(function (){var or__4131__auto__ = type;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs_webgl.constants.data_type.float$;
}
})(),(function (){var or__4131__auto__ = normalized_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return false;
}
})(),(function (){var or__4131__auto__ = stride;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})(),(function (){var or__4131__auto__ = offset;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})());
});
cljs_webgl.buffers.set_texture = (function cljs_webgl$buffers$set_texture(gl_context,shader,p__25461){
var map__25466 = p__25461;
var map__25466__$1 = (((((!((map__25466 == null))))?(((((map__25466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25466):map__25466);
var texture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25466__$1,new cljs.core.Keyword(null,"texture","texture",-266291651));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25466__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var texture_unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25466__$1,new cljs.core.Keyword(null,"texture-unit","texture-unit",-731109059));
var unit = (cljs.core.truth_(texture_unit)?(cljs_webgl.constants.texture_unit.texture0 + texture_unit):cljs_webgl.constants.texture_unit.texture0);
var uniform_index = (function (){var or__4131__auto__ = texture_unit;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})();
gl_context.activeTexture(cljs_webgl.constants.texture_unit.texture0);

gl_context.bindTexture(cljs_webgl.constants.texture_target.texture_2d,texture);

return gl_context.uniform1i(cljs_webgl.shaders.get_uniform_location(gl_context,shader,name),(0));
});
cljs_webgl.buffers.default_capabilities = cljs.core.PersistentHashMap.fromArrays([cljs_webgl.constants.capability.stencil_test,cljs_webgl.constants.capability.dither,cljs_webgl.constants.capability.depth_test,cljs_webgl.constants.capability.blend,cljs_webgl.constants.capability.scissor_test,cljs_webgl.constants.capability.sample_alpha_to_coverage,cljs_webgl.constants.capability.polygon_offset_fill,cljs_webgl.constants.capability.cull_face,cljs_webgl.constants.capability.sample_coverage],[false,true,false,false,false,false,false,false,false]);
/**
 * Enables/disables according to `enabled?` a given server-side GL `capability`
 * 
 * The valid values for `capability` are: `cljs-webgl.constants.capability/blend`,
 * `cljs-webgl.constants.capability/cull-face`, `cljs-webgl.constants.capability/depth-test`, `cljs-webgl.constants.capability/dither`,
 * `cljs-webgl.constants.capability/polygon-offset-fill`, `cljs-webgl.constants.capability/sample-alpha-to-coverage`,
 * `cljs-webgl.constants.capability/sample-coverage`, `cljs-webgl.constants.capability/scissor-test`,
 * `cljs-webgl.constants.capability/stencil-test`
 * 
 * Relevant OpenGL ES reference pages:
 * 
 * * [glEnable](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glEnable.xml)
 * * [glDisable](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glDisable.xml)
 */
cljs_webgl.buffers.set_capability = (function cljs_webgl$buffers$set_capability(gl_context,capability,enabled_QMARK_){
if(cljs.core.truth_(enabled_QMARK_)){
gl_context.enable(capability);
} else {
gl_context.disable(capability);
}

return gl_context;
});
/**
 * Sets `gl-context` viewport according to `viewport` which is expected to have the form:
 * 
 *   {:x,
 * :y,
 * :width,
 * :height}
 * 
 *   Relevant OpenGL ES reference pages:
 * 
 *   * [viewport](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glViewport.xml)
 */
cljs_webgl.buffers.set_viewport = (function cljs_webgl$buffers$set_viewport(gl_context,p__25489){
var map__25490 = p__25489;
var map__25490__$1 = (((((!((map__25490 == null))))?(((((map__25490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25490):map__25490);
var viewport = map__25490__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25490__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25490__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25490__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25490__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return gl_context.viewport(x,y,width,height);
});
cljs_webgl.buffers.draw_BANG_ = (function cljs_webgl$buffers$draw_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25581 = arguments.length;
var i__4731__auto___25582 = (0);
while(true){
if((i__4731__auto___25582 < len__4730__auto___25581)){
args__4736__auto__.push((arguments[i__4731__auto___25582]));

var G__25583 = (i__4731__auto___25582 + (1));
i__4731__auto___25582 = G__25583;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs_webgl.buffers.draw_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs_webgl.buffers.draw_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (gl_context,p__25499){
var map__25500 = p__25499;
var map__25500__$1 = (((((!((map__25500 == null))))?(((((map__25500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25500):map__25500);
var opts = map__25500__$1;
var textures = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25500__$1,new cljs.core.Keyword(null,"textures","textures",560681081));
var first = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25500__$1,new cljs.core.Keyword(null,"first","first",-644103046));
var viewport = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25500__$1,new cljs.core.Keyword(null,"viewport","viewport",443342715));
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25500__$1,new cljs.core.Keyword(null,"attributes","attributes",-74013604));
var shader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25500__$1,new cljs.core.Keyword(null,"shader","shader",1492833021));
var capabilities = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25500__$1,new cljs.core.Keyword(null,"capabilities","capabilities",212739361));
var blend_function = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25500__$1,new cljs.core.Keyword(null,"blend-function","blend-function",1123696099));
var uniforms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25500__$1,new cljs.core.Keyword(null,"uniforms","uniforms",-782808153));
var element_array = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25500__$1,new cljs.core.Keyword(null,"element-array","element-array",38145164));
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25500__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var draw_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25500__$1,new cljs.core.Keyword(null,"draw-mode","draw-mode",-1830018794));
cljs_webgl.buffers.set_viewport(gl_context,(function (){var or__4131__auto__ = viewport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),cljs_webgl.context.get_drawing_buffer_width(gl_context),new cljs.core.Keyword(null,"height","height",1025178622),cljs_webgl.context.get_drawing_buffer_height(gl_context)], null);
}
})());

gl_context.useProgram(shader);

var seq__25502_25584 = cljs.core.seq(uniforms);
var chunk__25503_25585 = null;
var count__25504_25586 = (0);
var i__25505_25587 = (0);
while(true){
if((i__25505_25587 < count__25504_25586)){
var u_25588 = chunk__25503_25585.cljs$core$IIndexed$_nth$arity$2(null,i__25505_25587);
cljs_webgl.buffers.set_uniform(gl_context,shader,u_25588);


var G__25589 = seq__25502_25584;
var G__25590 = chunk__25503_25585;
var G__25591 = count__25504_25586;
var G__25592 = (i__25505_25587 + (1));
seq__25502_25584 = G__25589;
chunk__25503_25585 = G__25590;
count__25504_25586 = G__25591;
i__25505_25587 = G__25592;
continue;
} else {
var temp__5735__auto___25593 = cljs.core.seq(seq__25502_25584);
if(temp__5735__auto___25593){
var seq__25502_25594__$1 = temp__5735__auto___25593;
if(cljs.core.chunked_seq_QMARK_(seq__25502_25594__$1)){
var c__4550__auto___25595 = cljs.core.chunk_first(seq__25502_25594__$1);
var G__25596 = cljs.core.chunk_rest(seq__25502_25594__$1);
var G__25597 = c__4550__auto___25595;
var G__25598 = cljs.core.count(c__4550__auto___25595);
var G__25599 = (0);
seq__25502_25584 = G__25596;
chunk__25503_25585 = G__25597;
count__25504_25586 = G__25598;
i__25505_25587 = G__25599;
continue;
} else {
var u_25600 = cljs.core.first(seq__25502_25594__$1);
cljs_webgl.buffers.set_uniform(gl_context,shader,u_25600);


var G__25601 = cljs.core.next(seq__25502_25594__$1);
var G__25602 = null;
var G__25603 = (0);
var G__25604 = (0);
seq__25502_25584 = G__25601;
chunk__25503_25585 = G__25602;
count__25504_25586 = G__25603;
i__25505_25587 = G__25604;
continue;
}
} else {
}
}
break;
}

var seq__25519_25605 = cljs.core.seq(attributes);
var chunk__25520_25606 = null;
var count__25521_25607 = (0);
var i__25522_25608 = (0);
while(true){
if((i__25522_25608 < count__25521_25607)){
var a_25609 = chunk__25520_25606.cljs$core$IIndexed$_nth$arity$2(null,i__25522_25608);
cljs_webgl.buffers.set_attribute(gl_context,a_25609);


var G__25610 = seq__25519_25605;
var G__25611 = chunk__25520_25606;
var G__25612 = count__25521_25607;
var G__25613 = (i__25522_25608 + (1));
seq__25519_25605 = G__25610;
chunk__25520_25606 = G__25611;
count__25521_25607 = G__25612;
i__25522_25608 = G__25613;
continue;
} else {
var temp__5735__auto___25614 = cljs.core.seq(seq__25519_25605);
if(temp__5735__auto___25614){
var seq__25519_25615__$1 = temp__5735__auto___25614;
if(cljs.core.chunked_seq_QMARK_(seq__25519_25615__$1)){
var c__4550__auto___25616 = cljs.core.chunk_first(seq__25519_25615__$1);
var G__25617 = cljs.core.chunk_rest(seq__25519_25615__$1);
var G__25618 = c__4550__auto___25616;
var G__25619 = cljs.core.count(c__4550__auto___25616);
var G__25620 = (0);
seq__25519_25605 = G__25617;
chunk__25520_25606 = G__25618;
count__25521_25607 = G__25619;
i__25522_25608 = G__25620;
continue;
} else {
var a_25621 = cljs.core.first(seq__25519_25615__$1);
cljs_webgl.buffers.set_attribute(gl_context,a_25621);


var G__25622 = cljs.core.next(seq__25519_25615__$1);
var G__25623 = null;
var G__25624 = (0);
var G__25625 = (0);
seq__25519_25605 = G__25622;
chunk__25520_25606 = G__25623;
count__25521_25607 = G__25624;
i__25522_25608 = G__25625;
continue;
}
} else {
}
}
break;
}

var seq__25523_25626 = cljs.core.seq(textures);
var chunk__25524_25627 = null;
var count__25525_25628 = (0);
var i__25526_25629 = (0);
while(true){
if((i__25526_25629 < count__25525_25628)){
var t_25630 = chunk__25524_25627.cljs$core$IIndexed$_nth$arity$2(null,i__25526_25629);
cljs_webgl.buffers.set_texture(gl_context,shader,t_25630);


var G__25631 = seq__25523_25626;
var G__25632 = chunk__25524_25627;
var G__25633 = count__25525_25628;
var G__25634 = (i__25526_25629 + (1));
seq__25523_25626 = G__25631;
chunk__25524_25627 = G__25632;
count__25525_25628 = G__25633;
i__25526_25629 = G__25634;
continue;
} else {
var temp__5735__auto___25635 = cljs.core.seq(seq__25523_25626);
if(temp__5735__auto___25635){
var seq__25523_25636__$1 = temp__5735__auto___25635;
if(cljs.core.chunked_seq_QMARK_(seq__25523_25636__$1)){
var c__4550__auto___25637 = cljs.core.chunk_first(seq__25523_25636__$1);
var G__25638 = cljs.core.chunk_rest(seq__25523_25636__$1);
var G__25639 = c__4550__auto___25637;
var G__25640 = cljs.core.count(c__4550__auto___25637);
var G__25641 = (0);
seq__25523_25626 = G__25638;
chunk__25524_25627 = G__25639;
count__25525_25628 = G__25640;
i__25526_25629 = G__25641;
continue;
} else {
var t_25642 = cljs.core.first(seq__25523_25636__$1);
cljs_webgl.buffers.set_texture(gl_context,shader,t_25642);


var G__25643 = cljs.core.next(seq__25523_25636__$1);
var G__25644 = null;
var G__25645 = (0);
var G__25646 = (0);
seq__25523_25626 = G__25643;
chunk__25524_25627 = G__25644;
count__25525_25628 = G__25645;
i__25526_25629 = G__25646;
continue;
}
} else {
}
}
break;
}

var seq__25527_25647 = cljs.core.seq(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_webgl.buffers.default_capabilities,capabilities], 0)));
var chunk__25528_25648 = null;
var count__25529_25649 = (0);
var i__25530_25650 = (0);
while(true){
if((i__25530_25650 < count__25529_25649)){
var vec__25537_25651 = chunk__25528_25648.cljs$core$IIndexed$_nth$arity$2(null,i__25530_25650);
var capability_25652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25537_25651,(0),null);
var enabled_QMARK__25653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25537_25651,(1),null);
cljs_webgl.buffers.set_capability(gl_context,capability_25652,enabled_QMARK__25653);


var G__25654 = seq__25527_25647;
var G__25655 = chunk__25528_25648;
var G__25656 = count__25529_25649;
var G__25657 = (i__25530_25650 + (1));
seq__25527_25647 = G__25654;
chunk__25528_25648 = G__25655;
count__25529_25649 = G__25656;
i__25530_25650 = G__25657;
continue;
} else {
var temp__5735__auto___25658 = cljs.core.seq(seq__25527_25647);
if(temp__5735__auto___25658){
var seq__25527_25659__$1 = temp__5735__auto___25658;
if(cljs.core.chunked_seq_QMARK_(seq__25527_25659__$1)){
var c__4550__auto___25660 = cljs.core.chunk_first(seq__25527_25659__$1);
var G__25661 = cljs.core.chunk_rest(seq__25527_25659__$1);
var G__25662 = c__4550__auto___25660;
var G__25663 = cljs.core.count(c__4550__auto___25660);
var G__25664 = (0);
seq__25527_25647 = G__25661;
chunk__25528_25648 = G__25662;
count__25529_25649 = G__25663;
i__25530_25650 = G__25664;
continue;
} else {
var vec__25540_25665 = cljs.core.first(seq__25527_25659__$1);
var capability_25666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25540_25665,(0),null);
var enabled_QMARK__25667 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25540_25665,(1),null);
cljs_webgl.buffers.set_capability(gl_context,capability_25666,enabled_QMARK__25667);


var G__25668 = cljs.core.next(seq__25527_25659__$1);
var G__25669 = null;
var G__25670 = (0);
var G__25671 = (0);
seq__25527_25647 = G__25668;
chunk__25528_25648 = G__25669;
count__25529_25649 = G__25670;
i__25530_25650 = G__25671;
continue;
}
} else {
}
}
break;
}

if((element_array == null)){
gl_context.drawArrays(draw_mode,(function (){var or__4131__auto__ = first;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})(),count);
} else {
gl_context.bindBuffer(cljs_webgl.constants.buffer_object.element_array_buffer,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(element_array));

gl_context.drawElements(draw_mode,count,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(element_array),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(element_array));
}

var seq__25543_25672 = cljs.core.seq(attributes);
var chunk__25544_25673 = null;
var count__25545_25674 = (0);
var i__25546_25675 = (0);
while(true){
if((i__25546_25675 < count__25545_25674)){
var a_25676 = chunk__25544_25673.cljs$core$IIndexed$_nth$arity$2(null,i__25546_25675);
gl_context.disableVertexAttribArray(new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(a_25676));


var G__25677 = seq__25543_25672;
var G__25678 = chunk__25544_25673;
var G__25679 = count__25545_25674;
var G__25680 = (i__25546_25675 + (1));
seq__25543_25672 = G__25677;
chunk__25544_25673 = G__25678;
count__25545_25674 = G__25679;
i__25546_25675 = G__25680;
continue;
} else {
var temp__5735__auto___25681 = cljs.core.seq(seq__25543_25672);
if(temp__5735__auto___25681){
var seq__25543_25682__$1 = temp__5735__auto___25681;
if(cljs.core.chunked_seq_QMARK_(seq__25543_25682__$1)){
var c__4550__auto___25683 = cljs.core.chunk_first(seq__25543_25682__$1);
var G__25684 = cljs.core.chunk_rest(seq__25543_25682__$1);
var G__25685 = c__4550__auto___25683;
var G__25686 = cljs.core.count(c__4550__auto___25683);
var G__25687 = (0);
seq__25543_25672 = G__25684;
chunk__25544_25673 = G__25685;
count__25545_25674 = G__25686;
i__25546_25675 = G__25687;
continue;
} else {
var a_25688 = cljs.core.first(seq__25543_25682__$1);
gl_context.disableVertexAttribArray(new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(a_25688));


var G__25689 = cljs.core.next(seq__25543_25682__$1);
var G__25690 = null;
var G__25691 = (0);
var G__25692 = (0);
seq__25543_25672 = G__25689;
chunk__25544_25673 = G__25690;
count__25545_25674 = G__25691;
i__25546_25675 = G__25692;
continue;
}
} else {
}
}
break;
}

var seq__25547_25693 = cljs.core.seq(blend_function);
var chunk__25548_25694 = null;
var count__25549_25695 = (0);
var i__25550_25696 = (0);
while(true){
if((i__25550_25696 < count__25549_25695)){
var vec__25557_25697 = chunk__25548_25694.cljs$core$IIndexed$_nth$arity$2(null,i__25550_25696);
var k_25698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25557_25697,(0),null);
var v_25699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25557_25697,(1),null);
gl_context.blendFunc(k_25698,v_25699);


var G__25700 = seq__25547_25693;
var G__25701 = chunk__25548_25694;
var G__25702 = count__25549_25695;
var G__25703 = (i__25550_25696 + (1));
seq__25547_25693 = G__25700;
chunk__25548_25694 = G__25701;
count__25549_25695 = G__25702;
i__25550_25696 = G__25703;
continue;
} else {
var temp__5735__auto___25704 = cljs.core.seq(seq__25547_25693);
if(temp__5735__auto___25704){
var seq__25547_25705__$1 = temp__5735__auto___25704;
if(cljs.core.chunked_seq_QMARK_(seq__25547_25705__$1)){
var c__4550__auto___25706 = cljs.core.chunk_first(seq__25547_25705__$1);
var G__25707 = cljs.core.chunk_rest(seq__25547_25705__$1);
var G__25708 = c__4550__auto___25706;
var G__25709 = cljs.core.count(c__4550__auto___25706);
var G__25710 = (0);
seq__25547_25693 = G__25707;
chunk__25548_25694 = G__25708;
count__25549_25695 = G__25709;
i__25550_25696 = G__25710;
continue;
} else {
var vec__25560_25711 = cljs.core.first(seq__25547_25705__$1);
var k_25712 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25560_25711,(0),null);
var v_25713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25560_25711,(1),null);
gl_context.blendFunc(k_25712,v_25713);


var G__25714 = cljs.core.next(seq__25547_25705__$1);
var G__25715 = null;
var G__25716 = (0);
var G__25717 = (0);
seq__25547_25693 = G__25714;
chunk__25548_25694 = G__25715;
count__25549_25695 = G__25716;
i__25550_25696 = G__25717;
continue;
}
} else {
}
}
break;
}

return gl_context;
});

cljs_webgl.buffers.draw_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_webgl.buffers.draw_BANG_.cljs$lang$applyTo = (function (seq25497){
var G__25498 = cljs.core.first(seq25497);
var seq25497__$1 = cljs.core.next(seq25497);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25498,seq25497__$1);
});


//# sourceMappingURL=cljs_webgl.buffers.js.map
