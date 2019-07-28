goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35466 = arguments.length;
var i__4731__auto___35467 = (0);
while(true){
if((i__4731__auto___35467 < len__4730__auto___35466)){
args__4736__auto__.push((arguments[i__4731__auto___35467]));

var G__35468 = (i__4731__auto___35467 + (1));
i__4731__auto___35467 = G__35468;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35299){
var G__35300 = cljs.core.first(seq35299);
var seq35299__$1 = cljs.core.next(seq35299);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35300,seq35299__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__35315){
var map__35316 = p__35315;
var map__35316__$1 = (((((!((map__35316 == null))))?(((((map__35316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35316):map__35316);
var src = map__35316__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35316__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35316__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35321 = cljs.core.seq(sources);
var chunk__35322 = null;
var count__35323 = (0);
var i__35324 = (0);
while(true){
if((i__35324 < count__35323)){
var map__35329 = chunk__35322.cljs$core$IIndexed$_nth$arity$2(null,i__35324);
var map__35329__$1 = (((((!((map__35329 == null))))?(((((map__35329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35329):map__35329);
var src = map__35329__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35329__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35329__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35329__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35329__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__35469 = seq__35321;
var G__35470 = chunk__35322;
var G__35471 = count__35323;
var G__35472 = (i__35324 + (1));
seq__35321 = G__35469;
chunk__35322 = G__35470;
count__35323 = G__35471;
i__35324 = G__35472;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35321);
if(temp__5735__auto__){
var seq__35321__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35321__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35321__$1);
var G__35473 = cljs.core.chunk_rest(seq__35321__$1);
var G__35474 = c__4550__auto__;
var G__35475 = cljs.core.count(c__4550__auto__);
var G__35476 = (0);
seq__35321 = G__35473;
chunk__35322 = G__35474;
count__35323 = G__35475;
i__35324 = G__35476;
continue;
} else {
var map__35333 = cljs.core.first(seq__35321__$1);
var map__35333__$1 = (((((!((map__35333 == null))))?(((((map__35333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35333):map__35333);
var src = map__35333__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35333__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35333__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35333__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35333__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__35477 = cljs.core.next(seq__35321__$1);
var G__35478 = null;
var G__35479 = (0);
var G__35480 = (0);
seq__35321 = G__35477;
chunk__35322 = G__35478;
count__35323 = G__35479;
i__35324 = G__35480;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35336 = cljs.core.seq(js_requires);
var chunk__35337 = null;
var count__35338 = (0);
var i__35339 = (0);
while(true){
if((i__35339 < count__35338)){
var js_ns = chunk__35337.cljs$core$IIndexed$_nth$arity$2(null,i__35339);
var require_str_35481 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35481);


var G__35482 = seq__35336;
var G__35483 = chunk__35337;
var G__35484 = count__35338;
var G__35485 = (i__35339 + (1));
seq__35336 = G__35482;
chunk__35337 = G__35483;
count__35338 = G__35484;
i__35339 = G__35485;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35336);
if(temp__5735__auto__){
var seq__35336__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35336__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35336__$1);
var G__35486 = cljs.core.chunk_rest(seq__35336__$1);
var G__35487 = c__4550__auto__;
var G__35488 = cljs.core.count(c__4550__auto__);
var G__35489 = (0);
seq__35336 = G__35486;
chunk__35337 = G__35487;
count__35338 = G__35488;
i__35339 = G__35489;
continue;
} else {
var js_ns = cljs.core.first(seq__35336__$1);
var require_str_35490 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35490);


var G__35491 = cljs.core.next(seq__35336__$1);
var G__35492 = null;
var G__35493 = (0);
var G__35494 = (0);
seq__35336 = G__35491;
chunk__35337 = G__35492;
count__35338 = G__35493;
i__35339 = G__35494;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__35341 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__35341) : callback.call(null,G__35341));
} else {
var G__35342 = shadow.cljs.devtools.client.env.files_url();
var G__35343 = ((function (G__35342){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__35342))
;
var G__35344 = "POST";
var G__35345 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__35346 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__35342,G__35343,G__35344,G__35345,G__35346);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__35348){
var map__35349 = p__35348;
var map__35349__$1 = (((((!((map__35349 == null))))?(((((map__35349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35349):map__35349);
var msg = map__35349__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35349__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35349__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__35351 = info;
var map__35351__$1 = (((((!((map__35351 == null))))?(((((map__35351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35351):map__35351);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35351__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35351__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__35351,map__35351__$1,sources,compiled,map__35349,map__35349__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35353(s__35354){
return (new cljs.core.LazySeq(null,((function (map__35351,map__35351__$1,sources,compiled,map__35349,map__35349__$1,msg,info,reload_info){
return (function (){
var s__35354__$1 = s__35354;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35354__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__35359 = cljs.core.first(xs__6292__auto__);
var map__35359__$1 = (((((!((map__35359 == null))))?(((((map__35359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35359):map__35359);
var src = map__35359__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35359__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35359__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__35354__$1,map__35359,map__35359__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35351,map__35351__$1,sources,compiled,map__35349,map__35349__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35353_$_iter__35355(s__35356){
return (new cljs.core.LazySeq(null,((function (s__35354__$1,map__35359,map__35359__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35351,map__35351__$1,sources,compiled,map__35349,map__35349__$1,msg,info,reload_info){
return (function (){
var s__35356__$1 = s__35356;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35356__$1);
if(temp__5735__auto____$1){
var s__35356__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35356__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__35356__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__35358 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__35357 = (0);
while(true){
if((i__35357 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__35357);
cljs.core.chunk_append(b__35358,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35495 = (i__35357 + (1));
i__35357 = G__35495;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35358),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35353_$_iter__35355(cljs.core.chunk_rest(s__35356__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35358),null);
}
} else {
var warning = cljs.core.first(s__35356__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35353_$_iter__35355(cljs.core.rest(s__35356__$2)));
}
} else {
return null;
}
break;
}
});})(s__35354__$1,map__35359,map__35359__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35351,map__35351__$1,sources,compiled,map__35349,map__35349__$1,msg,info,reload_info))
,null,null));
});})(s__35354__$1,map__35359,map__35359__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35351,map__35351__$1,sources,compiled,map__35349,map__35349__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35353(cljs.core.rest(s__35354__$1)));
} else {
var G__35496 = cljs.core.rest(s__35354__$1);
s__35354__$1 = G__35496;
continue;
}
} else {
var G__35497 = cljs.core.rest(s__35354__$1);
s__35354__$1 = G__35497;
continue;
}
} else {
return null;
}
break;
}
});})(map__35351,map__35351__$1,sources,compiled,map__35349,map__35349__$1,msg,info,reload_info))
,null,null));
});})(map__35351,map__35351__$1,sources,compiled,map__35349,map__35349__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__35361_35498 = cljs.core.seq(warnings);
var chunk__35362_35499 = null;
var count__35363_35500 = (0);
var i__35364_35501 = (0);
while(true){
if((i__35364_35501 < count__35363_35500)){
var map__35369_35502 = chunk__35362_35499.cljs$core$IIndexed$_nth$arity$2(null,i__35364_35501);
var map__35369_35503__$1 = (((((!((map__35369_35502 == null))))?(((((map__35369_35502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35369_35502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35369_35502):map__35369_35502);
var w_35504 = map__35369_35503__$1;
var msg_35505__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35369_35503__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35506 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35369_35503__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35507 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35369_35503__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35508 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35369_35503__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35508)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35506),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35507),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35505__$1)].join(''));


var G__35509 = seq__35361_35498;
var G__35510 = chunk__35362_35499;
var G__35511 = count__35363_35500;
var G__35512 = (i__35364_35501 + (1));
seq__35361_35498 = G__35509;
chunk__35362_35499 = G__35510;
count__35363_35500 = G__35511;
i__35364_35501 = G__35512;
continue;
} else {
var temp__5735__auto___35513 = cljs.core.seq(seq__35361_35498);
if(temp__5735__auto___35513){
var seq__35361_35514__$1 = temp__5735__auto___35513;
if(cljs.core.chunked_seq_QMARK_(seq__35361_35514__$1)){
var c__4550__auto___35515 = cljs.core.chunk_first(seq__35361_35514__$1);
var G__35516 = cljs.core.chunk_rest(seq__35361_35514__$1);
var G__35517 = c__4550__auto___35515;
var G__35518 = cljs.core.count(c__4550__auto___35515);
var G__35519 = (0);
seq__35361_35498 = G__35516;
chunk__35362_35499 = G__35517;
count__35363_35500 = G__35518;
i__35364_35501 = G__35519;
continue;
} else {
var map__35371_35520 = cljs.core.first(seq__35361_35514__$1);
var map__35371_35521__$1 = (((((!((map__35371_35520 == null))))?(((((map__35371_35520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35371_35520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35371_35520):map__35371_35520);
var w_35522 = map__35371_35521__$1;
var msg_35523__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35371_35521__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35524 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35371_35521__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35525 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35371_35521__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35526 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35371_35521__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35526)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35524),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35525),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35523__$1)].join(''));


var G__35527 = cljs.core.next(seq__35361_35514__$1);
var G__35528 = null;
var G__35529 = (0);
var G__35530 = (0);
seq__35361_35498 = G__35527;
chunk__35362_35499 = G__35528;
count__35363_35500 = G__35529;
i__35364_35501 = G__35530;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__35351,map__35351__$1,sources,compiled,warnings,map__35349,map__35349__$1,msg,info,reload_info){
return (function (p__35374){
var map__35376 = p__35374;
var map__35376__$1 = (((((!((map__35376 == null))))?(((((map__35376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35376):map__35376);
var src = map__35376__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35376__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35376__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__35351,map__35351__$1,sources,compiled,warnings,map__35349,map__35349__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__35351,map__35351__$1,sources,compiled,warnings,map__35349,map__35349__$1,msg,info,reload_info){
return (function (p__35378){
var map__35379 = p__35378;
var map__35379__$1 = (((((!((map__35379 == null))))?(((((map__35379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35379):map__35379);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35379__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__35351,map__35351__$1,sources,compiled,warnings,map__35349,map__35349__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__35351,map__35351__$1,sources,compiled,warnings,map__35349,map__35349__$1,msg,info,reload_info){
return (function (p__35381){
var map__35382 = p__35381;
var map__35382__$1 = (((((!((map__35382 == null))))?(((((map__35382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35382):map__35382);
var rc = map__35382__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35382__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__35351,map__35351__$1,sources,compiled,warnings,map__35349,map__35349__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__35351,map__35351__$1,sources,compiled,warnings,map__35349,map__35349__$1,msg,info,reload_info){
return (function (p1__35347_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35347_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__35351,map__35351__$1,sources,compiled,warnings,map__35349,map__35349__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__35384){
var map__35385 = p__35384;
var map__35385__$1 = (((((!((map__35385 == null))))?(((((map__35385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35385):map__35385);
var msg = map__35385__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35385__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35387 = cljs.core.seq(updates);
var chunk__35389 = null;
var count__35390 = (0);
var i__35391 = (0);
while(true){
if((i__35391 < count__35390)){
var path = chunk__35389.cljs$core$IIndexed$_nth$arity$2(null,i__35391);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35417_35531 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35420_35532 = null;
var count__35421_35533 = (0);
var i__35422_35534 = (0);
while(true){
if((i__35422_35534 < count__35421_35533)){
var node_35535 = chunk__35420_35532.cljs$core$IIndexed$_nth$arity$2(null,i__35422_35534);
var path_match_35536 = shadow.cljs.devtools.client.browser.match_paths(node_35535.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35536)){
var new_link_35537 = (function (){var G__35427 = node_35535.cloneNode(true);
G__35427.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35536),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35427;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35536], 0));

goog.dom.insertSiblingAfter(new_link_35537,node_35535);

goog.dom.removeNode(node_35535);


var G__35538 = seq__35417_35531;
var G__35539 = chunk__35420_35532;
var G__35540 = count__35421_35533;
var G__35541 = (i__35422_35534 + (1));
seq__35417_35531 = G__35538;
chunk__35420_35532 = G__35539;
count__35421_35533 = G__35540;
i__35422_35534 = G__35541;
continue;
} else {
var G__35542 = seq__35417_35531;
var G__35543 = chunk__35420_35532;
var G__35544 = count__35421_35533;
var G__35545 = (i__35422_35534 + (1));
seq__35417_35531 = G__35542;
chunk__35420_35532 = G__35543;
count__35421_35533 = G__35544;
i__35422_35534 = G__35545;
continue;
}
} else {
var temp__5735__auto___35546 = cljs.core.seq(seq__35417_35531);
if(temp__5735__auto___35546){
var seq__35417_35547__$1 = temp__5735__auto___35546;
if(cljs.core.chunked_seq_QMARK_(seq__35417_35547__$1)){
var c__4550__auto___35548 = cljs.core.chunk_first(seq__35417_35547__$1);
var G__35549 = cljs.core.chunk_rest(seq__35417_35547__$1);
var G__35550 = c__4550__auto___35548;
var G__35551 = cljs.core.count(c__4550__auto___35548);
var G__35552 = (0);
seq__35417_35531 = G__35549;
chunk__35420_35532 = G__35550;
count__35421_35533 = G__35551;
i__35422_35534 = G__35552;
continue;
} else {
var node_35553 = cljs.core.first(seq__35417_35547__$1);
var path_match_35554 = shadow.cljs.devtools.client.browser.match_paths(node_35553.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35554)){
var new_link_35555 = (function (){var G__35428 = node_35553.cloneNode(true);
G__35428.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35554),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35428;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35554], 0));

goog.dom.insertSiblingAfter(new_link_35555,node_35553);

goog.dom.removeNode(node_35553);


var G__35556 = cljs.core.next(seq__35417_35547__$1);
var G__35557 = null;
var G__35558 = (0);
var G__35559 = (0);
seq__35417_35531 = G__35556;
chunk__35420_35532 = G__35557;
count__35421_35533 = G__35558;
i__35422_35534 = G__35559;
continue;
} else {
var G__35560 = cljs.core.next(seq__35417_35547__$1);
var G__35561 = null;
var G__35562 = (0);
var G__35563 = (0);
seq__35417_35531 = G__35560;
chunk__35420_35532 = G__35561;
count__35421_35533 = G__35562;
i__35422_35534 = G__35563;
continue;
}
}
} else {
}
}
break;
}


var G__35564 = seq__35387;
var G__35565 = chunk__35389;
var G__35566 = count__35390;
var G__35567 = (i__35391 + (1));
seq__35387 = G__35564;
chunk__35389 = G__35565;
count__35390 = G__35566;
i__35391 = G__35567;
continue;
} else {
var G__35568 = seq__35387;
var G__35569 = chunk__35389;
var G__35570 = count__35390;
var G__35571 = (i__35391 + (1));
seq__35387 = G__35568;
chunk__35389 = G__35569;
count__35390 = G__35570;
i__35391 = G__35571;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35387);
if(temp__5735__auto__){
var seq__35387__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35387__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35387__$1);
var G__35572 = cljs.core.chunk_rest(seq__35387__$1);
var G__35573 = c__4550__auto__;
var G__35574 = cljs.core.count(c__4550__auto__);
var G__35575 = (0);
seq__35387 = G__35572;
chunk__35389 = G__35573;
count__35390 = G__35574;
i__35391 = G__35575;
continue;
} else {
var path = cljs.core.first(seq__35387__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35429_35576 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35432_35577 = null;
var count__35433_35578 = (0);
var i__35434_35579 = (0);
while(true){
if((i__35434_35579 < count__35433_35578)){
var node_35580 = chunk__35432_35577.cljs$core$IIndexed$_nth$arity$2(null,i__35434_35579);
var path_match_35581 = shadow.cljs.devtools.client.browser.match_paths(node_35580.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35581)){
var new_link_35582 = (function (){var G__35439 = node_35580.cloneNode(true);
G__35439.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35581),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35439;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35581], 0));

goog.dom.insertSiblingAfter(new_link_35582,node_35580);

goog.dom.removeNode(node_35580);


var G__35583 = seq__35429_35576;
var G__35584 = chunk__35432_35577;
var G__35585 = count__35433_35578;
var G__35586 = (i__35434_35579 + (1));
seq__35429_35576 = G__35583;
chunk__35432_35577 = G__35584;
count__35433_35578 = G__35585;
i__35434_35579 = G__35586;
continue;
} else {
var G__35587 = seq__35429_35576;
var G__35588 = chunk__35432_35577;
var G__35589 = count__35433_35578;
var G__35590 = (i__35434_35579 + (1));
seq__35429_35576 = G__35587;
chunk__35432_35577 = G__35588;
count__35433_35578 = G__35589;
i__35434_35579 = G__35590;
continue;
}
} else {
var temp__5735__auto___35591__$1 = cljs.core.seq(seq__35429_35576);
if(temp__5735__auto___35591__$1){
var seq__35429_35592__$1 = temp__5735__auto___35591__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35429_35592__$1)){
var c__4550__auto___35593 = cljs.core.chunk_first(seq__35429_35592__$1);
var G__35594 = cljs.core.chunk_rest(seq__35429_35592__$1);
var G__35595 = c__4550__auto___35593;
var G__35596 = cljs.core.count(c__4550__auto___35593);
var G__35597 = (0);
seq__35429_35576 = G__35594;
chunk__35432_35577 = G__35595;
count__35433_35578 = G__35596;
i__35434_35579 = G__35597;
continue;
} else {
var node_35598 = cljs.core.first(seq__35429_35592__$1);
var path_match_35599 = shadow.cljs.devtools.client.browser.match_paths(node_35598.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35599)){
var new_link_35600 = (function (){var G__35440 = node_35598.cloneNode(true);
G__35440.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35599),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35440;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35599], 0));

goog.dom.insertSiblingAfter(new_link_35600,node_35598);

goog.dom.removeNode(node_35598);


var G__35601 = cljs.core.next(seq__35429_35592__$1);
var G__35602 = null;
var G__35603 = (0);
var G__35604 = (0);
seq__35429_35576 = G__35601;
chunk__35432_35577 = G__35602;
count__35433_35578 = G__35603;
i__35434_35579 = G__35604;
continue;
} else {
var G__35605 = cljs.core.next(seq__35429_35592__$1);
var G__35606 = null;
var G__35607 = (0);
var G__35608 = (0);
seq__35429_35576 = G__35605;
chunk__35432_35577 = G__35606;
count__35433_35578 = G__35607;
i__35434_35579 = G__35608;
continue;
}
}
} else {
}
}
break;
}


var G__35609 = cljs.core.next(seq__35387__$1);
var G__35610 = null;
var G__35611 = (0);
var G__35612 = (0);
seq__35387 = G__35609;
chunk__35389 = G__35610;
count__35390 = G__35611;
i__35391 = G__35612;
continue;
} else {
var G__35613 = cljs.core.next(seq__35387__$1);
var G__35614 = null;
var G__35615 = (0);
var G__35616 = (0);
seq__35387 = G__35613;
chunk__35389 = G__35614;
count__35390 = G__35615;
i__35391 = G__35616;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__35441){
var map__35442 = p__35441;
var map__35442__$1 = (((((!((map__35442 == null))))?(((((map__35442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35442):map__35442);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35442__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35442__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__35442,map__35442__$1,id,js){
return (function (){
return eval(js);
});})(map__35442,map__35442__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__35444){
var map__35445 = p__35444;
var map__35445__$1 = (((((!((map__35445 == null))))?(((((map__35445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35445):map__35445);
var msg = map__35445__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35445__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35445__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35445__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35445__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__35445,map__35445__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__35447){
var map__35448 = p__35447;
var map__35448__$1 = (((((!((map__35448 == null))))?(((((map__35448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35448):map__35448);
var src = map__35448__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35448__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__35445,map__35445__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__35445,map__35445__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__35445,map__35445__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__35450){
var map__35451 = p__35450;
var map__35451__$1 = (((((!((map__35451 == null))))?(((((map__35451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35451):map__35451);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35451__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35451__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__35451,map__35451__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__35451,map__35451__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__35453){
var map__35454 = p__35453;
var map__35454__$1 = (((((!((map__35454 == null))))?(((((map__35454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35454):map__35454);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35454__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35454__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__35456){
var map__35457 = p__35456;
var map__35457__$1 = (((((!((map__35457 == null))))?(((((map__35457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35457):map__35457);
var msg = map__35457__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35457__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__35459 = type;
var G__35459__$1 = (((G__35459 instanceof cljs.core.Keyword))?G__35459.fqn:null);
switch (G__35459__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "repl/session-start":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
return shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__35460 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__35461 = ((function (G__35460){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__35460))
;
var G__35462 = "POST";
var G__35463 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__35464 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__35460,G__35461,G__35462,G__35463,G__35464);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e35465){var e = e35465;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___35618 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___35618)){
var s_35619 = temp__5735__auto___35618;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_35619.onclose = ((function (s_35619,temp__5735__auto___35618){
return (function (e){
return null;
});})(s_35619,temp__5735__auto___35618))
;

s_35619.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
