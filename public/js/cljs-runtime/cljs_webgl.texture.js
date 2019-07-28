goog.provide('cljs_webgl.texture');
goog.require('cljs.core');
goog.require('cljs_webgl.constants.texture_target');
goog.require('cljs_webgl.constants.texture_parameter_name');
goog.require('cljs_webgl.constants.parameter_name');
goog.require('cljs_webgl.constants.webgl');
goog.require('cljs_webgl.constants.texture_filter');
goog.require('cljs_webgl.constants.pixel_format');
goog.require('cljs_webgl.constants.data_type');
/**
 * Related OpenGL ES reference pages:
 *   [glPixelStorei](http://www.khronos.org/opengles/sdk/docs/man/xhtml/glPixelStorei.xml)
 */
cljs_webgl.texture.default_pixel_store_modes = cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs_webgl.constants.webgl.unpack_flip_y_webgl,false,cljs_webgl.constants.webgl.unpack_premultiply_alpha_webgl,false,cljs_webgl.constants.webgl.unpack_colorspace_conversion_webgl,false,cljs_webgl.constants.parameter_name.unpack_alignment,(4),cljs_webgl.constants.parameter_name.pack_alignment,(4)]);
/**
 * Valid values for `target` are: `cljs-webgl.constants.texture-target/texture-2d` and
 *   `texture-cube-map`. The default value is `texture-2d`.
 */
cljs_webgl.texture.create_texture = (function cljs_webgl$texture$create_texture(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25423 = arguments.length;
var i__4731__auto___25424 = (0);
while(true){
if((i__4731__auto___25424 < len__4730__auto___25423)){
args__4736__auto__.push((arguments[i__4731__auto___25424]));

var G__25425 = (i__4731__auto___25424 + (1));
i__4731__auto___25424 = G__25425;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs_webgl.texture.create_texture.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs_webgl.texture.create_texture.cljs$core$IFn$_invoke$arity$variadic = (function (gl_context,p__25370){
var map__25371 = p__25370;
var map__25371__$1 = (((((!((map__25371 == null))))?(((((map__25371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25371):map__25371);
var opts = map__25371__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25371__$1,new cljs.core.Keyword(null,"target","target",253001721));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25371__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var data_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25371__$1,new cljs.core.Keyword(null,"data-type","data-type",-326421468));
var generate_mipmaps_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25371__$1,new cljs.core.Keyword(null,"generate-mipmaps?","generate-mipmaps?",-1559457203));
var level_of_detail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25371__$1,new cljs.core.Keyword(null,"level-of-detail","level-of-detail",1817545009));
var pixel_store_modes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25371__$1,new cljs.core.Keyword(null,"pixel-store-modes","pixel-store-modes",1198746295));
var internal_pixel_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25371__$1,new cljs.core.Keyword(null,"internal-pixel-format","internal-pixel-format",-618695817));
var pixel_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25371__$1,new cljs.core.Keyword(null,"pixel-format","pixel-format",-1609978632));
var image = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25371__$1,new cljs.core.Keyword(null,"image","image",-58725096));
var texture = gl_context.createTexture();
var target__$1 = (function (){var or__4131__auto__ = target;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs_webgl.constants.texture_target.texture_2d;
}
})();
var pixel_store_modes__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_webgl.texture.default_pixel_store_modes,pixel_store_modes], 0));
gl_context.bindTexture(target__$1,texture);

var seq__25377_25437 = cljs.core.seq(pixel_store_modes__$1);
var chunk__25378_25438 = null;
var count__25379_25439 = (0);
var i__25380_25440 = (0);
while(true){
if((i__25380_25440 < count__25379_25439)){
var vec__25387_25448 = chunk__25378_25438.cljs$core$IIndexed$_nth$arity$2(null,i__25380_25440);
var parameter_25449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25387_25448,(0),null);
var value_25450 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25387_25448,(1),null);
gl_context.pixelStorei(parameter_25449,value_25450);


var G__25462 = seq__25377_25437;
var G__25463 = chunk__25378_25438;
var G__25464 = count__25379_25439;
var G__25465 = (i__25380_25440 + (1));
seq__25377_25437 = G__25462;
chunk__25378_25438 = G__25463;
count__25379_25439 = G__25464;
i__25380_25440 = G__25465;
continue;
} else {
var temp__5735__auto___25468 = cljs.core.seq(seq__25377_25437);
if(temp__5735__auto___25468){
var seq__25377_25469__$1 = temp__5735__auto___25468;
if(cljs.core.chunked_seq_QMARK_(seq__25377_25469__$1)){
var c__4550__auto___25470 = cljs.core.chunk_first(seq__25377_25469__$1);
var G__25471 = cljs.core.chunk_rest(seq__25377_25469__$1);
var G__25472 = c__4550__auto___25470;
var G__25473 = cljs.core.count(c__4550__auto___25470);
var G__25474 = (0);
seq__25377_25437 = G__25471;
chunk__25378_25438 = G__25472;
count__25379_25439 = G__25473;
i__25380_25440 = G__25474;
continue;
} else {
var vec__25390_25475 = cljs.core.first(seq__25377_25469__$1);
var parameter_25476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25390_25475,(0),null);
var value_25477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25390_25475,(1),null);
gl_context.pixelStorei(parameter_25476,value_25477);


var G__25478 = cljs.core.next(seq__25377_25469__$1);
var G__25479 = null;
var G__25480 = (0);
var G__25481 = (0);
seq__25377_25437 = G__25478;
chunk__25378_25438 = G__25479;
count__25379_25439 = G__25480;
i__25380_25440 = G__25481;
continue;
}
} else {
}
}
break;
}

gl_context.texImage2D(target__$1,(function (){var or__4131__auto__ = level_of_detail;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})(),(function (){var or__4131__auto__ = internal_pixel_format;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs_webgl.constants.pixel_format.rgba;
}
})(),(function (){var or__4131__auto__ = pixel_format;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs_webgl.constants.pixel_format.rgba;
}
})(),cljs_webgl.constants.data_type.unsigned_byte,image);

var seq__25393_25482 = cljs.core.seq(parameters);
var chunk__25394_25483 = null;
var count__25395_25484 = (0);
var i__25396_25485 = (0);
while(true){
if((i__25396_25485 < count__25395_25484)){
var vec__25408_25486 = chunk__25394_25483.cljs$core$IIndexed$_nth$arity$2(null,i__25396_25485);
var k_25487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25408_25486,(0),null);
var v_25488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25408_25486,(1),null);
gl_context.texParameteri(target__$1,k_25487,v_25488);


var G__25492 = seq__25393_25482;
var G__25493 = chunk__25394_25483;
var G__25494 = count__25395_25484;
var G__25495 = (i__25396_25485 + (1));
seq__25393_25482 = G__25492;
chunk__25394_25483 = G__25493;
count__25395_25484 = G__25494;
i__25396_25485 = G__25495;
continue;
} else {
var temp__5735__auto___25496 = cljs.core.seq(seq__25393_25482);
if(temp__5735__auto___25496){
var seq__25393_25506__$1 = temp__5735__auto___25496;
if(cljs.core.chunked_seq_QMARK_(seq__25393_25506__$1)){
var c__4550__auto___25507 = cljs.core.chunk_first(seq__25393_25506__$1);
var G__25508 = cljs.core.chunk_rest(seq__25393_25506__$1);
var G__25509 = c__4550__auto___25507;
var G__25510 = cljs.core.count(c__4550__auto___25507);
var G__25511 = (0);
seq__25393_25482 = G__25508;
chunk__25394_25483 = G__25509;
count__25395_25484 = G__25510;
i__25396_25485 = G__25511;
continue;
} else {
var vec__25415_25512 = cljs.core.first(seq__25393_25506__$1);
var k_25513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25415_25512,(0),null);
var v_25514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25415_25512,(1),null);
gl_context.texParameteri(target__$1,k_25513,v_25514);


var G__25515 = cljs.core.next(seq__25393_25506__$1);
var G__25516 = null;
var G__25517 = (0);
var G__25518 = (0);
seq__25393_25482 = G__25515;
chunk__25394_25483 = G__25516;
count__25395_25484 = G__25517;
i__25396_25485 = G__25518;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(generate_mipmaps_QMARK_)){
gl_context.generateMipmap(target__$1);
} else {
}

gl_context.bindTexture(target__$1,null);

return texture;
});

cljs_webgl.texture.create_texture.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_webgl.texture.create_texture.cljs$lang$applyTo = (function (seq25367){
var G__25369 = cljs.core.first(seq25367);
var seq25367__$1 = cljs.core.next(seq25367);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25369,seq25367__$1);
});


//# sourceMappingURL=cljs_webgl.texture.js.map
