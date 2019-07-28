goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__27109){
var map__27110 = p__27109;
var map__27110__$1 = (((((!((map__27110 == null))))?(((((map__27110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27110):map__27110);
var m = map__27110__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27110__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27110__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27112_27301 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27113_27302 = null;
var count__27114_27303 = (0);
var i__27115_27304 = (0);
while(true){
if((i__27115_27304 < count__27114_27303)){
var f_27305 = chunk__27113_27302.cljs$core$IIndexed$_nth$arity$2(null,i__27115_27304);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_27305], 0));


var G__27306 = seq__27112_27301;
var G__27307 = chunk__27113_27302;
var G__27308 = count__27114_27303;
var G__27309 = (i__27115_27304 + (1));
seq__27112_27301 = G__27306;
chunk__27113_27302 = G__27307;
count__27114_27303 = G__27308;
i__27115_27304 = G__27309;
continue;
} else {
var temp__5735__auto___27310 = cljs.core.seq(seq__27112_27301);
if(temp__5735__auto___27310){
var seq__27112_27311__$1 = temp__5735__auto___27310;
if(cljs.core.chunked_seq_QMARK_(seq__27112_27311__$1)){
var c__4550__auto___27312 = cljs.core.chunk_first(seq__27112_27311__$1);
var G__27313 = cljs.core.chunk_rest(seq__27112_27311__$1);
var G__27314 = c__4550__auto___27312;
var G__27315 = cljs.core.count(c__4550__auto___27312);
var G__27316 = (0);
seq__27112_27301 = G__27313;
chunk__27113_27302 = G__27314;
count__27114_27303 = G__27315;
i__27115_27304 = G__27316;
continue;
} else {
var f_27317 = cljs.core.first(seq__27112_27311__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_27317], 0));


var G__27318 = cljs.core.next(seq__27112_27311__$1);
var G__27319 = null;
var G__27320 = (0);
var G__27321 = (0);
seq__27112_27301 = G__27318;
chunk__27113_27302 = G__27319;
count__27114_27303 = G__27320;
i__27115_27304 = G__27321;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27330 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_27330], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_27330)))?cljs.core.second(arglists_27330):arglists_27330)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27121_27333 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27122_27334 = null;
var count__27123_27335 = (0);
var i__27124_27336 = (0);
while(true){
if((i__27124_27336 < count__27123_27335)){
var vec__27136_27337 = chunk__27122_27334.cljs$core$IIndexed$_nth$arity$2(null,i__27124_27336);
var name_27338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27136_27337,(0),null);
var map__27139_27339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27136_27337,(1),null);
var map__27139_27340__$1 = (((((!((map__27139_27339 == null))))?(((((map__27139_27339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27139_27339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27139_27339):map__27139_27339);
var doc_27341 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27139_27340__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27139_27340__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_27338], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_27342], 0));

if(cljs.core.truth_(doc_27341)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_27341], 0));
} else {
}


var G__27347 = seq__27121_27333;
var G__27348 = chunk__27122_27334;
var G__27349 = count__27123_27335;
var G__27350 = (i__27124_27336 + (1));
seq__27121_27333 = G__27347;
chunk__27122_27334 = G__27348;
count__27123_27335 = G__27349;
i__27124_27336 = G__27350;
continue;
} else {
var temp__5735__auto___27351 = cljs.core.seq(seq__27121_27333);
if(temp__5735__auto___27351){
var seq__27121_27352__$1 = temp__5735__auto___27351;
if(cljs.core.chunked_seq_QMARK_(seq__27121_27352__$1)){
var c__4550__auto___27353 = cljs.core.chunk_first(seq__27121_27352__$1);
var G__27354 = cljs.core.chunk_rest(seq__27121_27352__$1);
var G__27355 = c__4550__auto___27353;
var G__27356 = cljs.core.count(c__4550__auto___27353);
var G__27357 = (0);
seq__27121_27333 = G__27354;
chunk__27122_27334 = G__27355;
count__27123_27335 = G__27356;
i__27124_27336 = G__27357;
continue;
} else {
var vec__27145_27358 = cljs.core.first(seq__27121_27352__$1);
var name_27359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27145_27358,(0),null);
var map__27148_27360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27145_27358,(1),null);
var map__27148_27361__$1 = (((((!((map__27148_27360 == null))))?(((((map__27148_27360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27148_27360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27148_27360):map__27148_27360);
var doc_27362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27148_27361__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27363 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27148_27361__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_27359], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_27363], 0));

if(cljs.core.truth_(doc_27362)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_27362], 0));
} else {
}


var G__27365 = cljs.core.next(seq__27121_27352__$1);
var G__27366 = null;
var G__27367 = (0);
var G__27368 = (0);
seq__27121_27333 = G__27365;
chunk__27122_27334 = G__27366;
count__27123_27335 = G__27367;
i__27124_27336 = G__27368;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__27156 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__27157 = null;
var count__27158 = (0);
var i__27159 = (0);
while(true){
if((i__27159 < count__27158)){
var role = chunk__27157.cljs$core$IIndexed$_nth$arity$2(null,i__27159);
var temp__5735__auto___27370__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___27370__$1)){
var spec_27371 = temp__5735__auto___27370__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_27371)], 0));
} else {
}


var G__27372 = seq__27156;
var G__27373 = chunk__27157;
var G__27374 = count__27158;
var G__27375 = (i__27159 + (1));
seq__27156 = G__27372;
chunk__27157 = G__27373;
count__27158 = G__27374;
i__27159 = G__27375;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__27156);
if(temp__5735__auto____$1){
var seq__27156__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__27156__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__27156__$1);
var G__27376 = cljs.core.chunk_rest(seq__27156__$1);
var G__27377 = c__4550__auto__;
var G__27378 = cljs.core.count(c__4550__auto__);
var G__27379 = (0);
seq__27156 = G__27376;
chunk__27157 = G__27377;
count__27158 = G__27378;
i__27159 = G__27379;
continue;
} else {
var role = cljs.core.first(seq__27156__$1);
var temp__5735__auto___27380__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___27380__$2)){
var spec_27381 = temp__5735__auto___27380__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_27381)], 0));
} else {
}


var G__27382 = cljs.core.next(seq__27156__$1);
var G__27383 = null;
var G__27384 = (0);
var G__27385 = (0);
seq__27156 = G__27382;
chunk__27157 = G__27383;
count__27158 = G__27384;
i__27159 = G__27385;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__27387 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__27388 = cljs.core.ex_cause(t);
via = G__27387;
t = G__27388;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__27183 = datafied_throwable;
var map__27183__$1 = (((((!((map__27183 == null))))?(((((map__27183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27183):map__27183);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27183__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27183__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27183__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__27184 = cljs.core.last(via);
var map__27184__$1 = (((((!((map__27184 == null))))?(((((map__27184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27184):map__27184);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27184__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27184__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27184__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__27185 = data;
var map__27185__$1 = (((((!((map__27185 == null))))?(((((map__27185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27185):map__27185);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27185__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27185__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27185__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__27186 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__27186__$1 = (((((!((map__27186 == null))))?(((((map__27186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27186):map__27186);
var top_data = map__27186__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27186__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__27199 = phase;
var G__27199__$1 = (((G__27199 instanceof cljs.core.Keyword))?G__27199.fqn:null);
switch (G__27199__$1) {
case "read-source":
var map__27201 = data;
var map__27201__$1 = (((((!((map__27201 == null))))?(((((map__27201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27201):map__27201);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27201__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27201__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__27204 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__27204__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27204,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__27204);
var G__27204__$2 = (cljs.core.truth_((function (){var fexpr__27206 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27206.cljs$core$IFn$_invoke$arity$1 ? fexpr__27206.cljs$core$IFn$_invoke$arity$1(source) : fexpr__27206.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27204__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__27204__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27204__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__27204__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__27207 = top_data;
var G__27207__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27207,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__27207);
var G__27207__$2 = (cljs.core.truth_((function (){var fexpr__27210 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27210.cljs$core$IFn$_invoke$arity$1 ? fexpr__27210.cljs$core$IFn$_invoke$arity$1(source) : fexpr__27210.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27207__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__27207__$1);
var G__27207__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27207__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__27207__$2);
var G__27207__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27207__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__27207__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27207__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__27207__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__27211 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27211,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27211,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27211,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27211,(3),null);
var G__27214 = top_data;
var G__27214__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27214,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__27214);
var G__27214__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27214__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__27214__$1);
var G__27214__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27214__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__27214__$2);
var G__27214__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27214__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__27214__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27214__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__27214__$4;
}

break;
case "execution":
var vec__27223 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27223,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27223,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27223,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27223,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__27223,source__$1,method,file,line,G__27199,G__27199__$1,map__27183,map__27183__$1,via,trace,phase,map__27184,map__27184__$1,type,message,data,map__27185,map__27185__$1,problems,fn,caller,map__27186,map__27186__$1,top_data,source){
return (function (p1__27182_SHARP_){
var or__4131__auto__ = (p1__27182_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__27229 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27229.cljs$core$IFn$_invoke$arity$1 ? fexpr__27229.cljs$core$IFn$_invoke$arity$1(p1__27182_SHARP_) : fexpr__27229.call(null,p1__27182_SHARP_));
}
});})(vec__27223,source__$1,method,file,line,G__27199,G__27199__$1,map__27183,map__27183__$1,via,trace,phase,map__27184,map__27184__$1,type,message,data,map__27185,map__27185__$1,problems,fn,caller,map__27186,map__27186__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__27230 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__27230__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27230,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__27230);
var G__27230__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27230__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__27230__$1);
var G__27230__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27230__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__27230__$2);
var G__27230__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27230__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__27230__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27230__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__27230__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27199__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__27243){
var map__27244 = p__27243;
var map__27244__$1 = (((((!((map__27244 == null))))?(((((map__27244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27244):map__27244);
var triage_data = map__27244__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27244__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27244__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27244__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27244__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27244__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27244__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27244__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27244__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__27251 = phase;
var G__27251__$1 = (((G__27251 instanceof cljs.core.Keyword))?G__27251.fqn:null);
switch (G__27251__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__27252 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__27253 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27254 = loc;
var G__27255 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27257_27435 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27258_27436 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27259_27437 = true;
var _STAR_print_fn_STAR__temp_val__27260_27438 = ((function (_STAR_print_newline_STAR__orig_val__27257_27435,_STAR_print_fn_STAR__orig_val__27258_27436,_STAR_print_newline_STAR__temp_val__27259_27437,sb__4661__auto__,G__27252,G__27253,G__27254,G__27251,G__27251__$1,loc,class_name,simple_class,cause_type,format,map__27244,map__27244__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__27257_27435,_STAR_print_fn_STAR__orig_val__27258_27436,_STAR_print_newline_STAR__temp_val__27259_27437,sb__4661__auto__,G__27252,G__27253,G__27254,G__27251,G__27251__$1,loc,class_name,simple_class,cause_type,format,map__27244,map__27244__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27259_27437;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27260_27438;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__27257_27435,_STAR_print_fn_STAR__orig_val__27258_27436,_STAR_print_newline_STAR__temp_val__27259_27437,_STAR_print_fn_STAR__temp_val__27260_27438,sb__4661__auto__,G__27252,G__27253,G__27254,G__27251,G__27251__$1,loc,class_name,simple_class,cause_type,format,map__27244,map__27244__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__27257_27435,_STAR_print_fn_STAR__orig_val__27258_27436,_STAR_print_newline_STAR__temp_val__27259_27437,_STAR_print_fn_STAR__temp_val__27260_27438,sb__4661__auto__,G__27252,G__27253,G__27254,G__27251,G__27251__$1,loc,class_name,simple_class,cause_type,format,map__27244,map__27244__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__27239_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__27239_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__27257_27435,_STAR_print_fn_STAR__orig_val__27258_27436,_STAR_print_newline_STAR__temp_val__27259_27437,_STAR_print_fn_STAR__temp_val__27260_27438,sb__4661__auto__,G__27252,G__27253,G__27254,G__27251,G__27251__$1,loc,class_name,simple_class,cause_type,format,map__27244,map__27244__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__27257_27435,_STAR_print_fn_STAR__orig_val__27258_27436,_STAR_print_newline_STAR__temp_val__27259_27437,_STAR_print_fn_STAR__temp_val__27260_27438,sb__4661__auto__,G__27252,G__27253,G__27254,G__27251,G__27251__$1,loc,class_name,simple_class,cause_type,format,map__27244,map__27244__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27258_27436;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27257_27435;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__27252,G__27253,G__27254,G__27255) : format.call(null,G__27252,G__27253,G__27254,G__27255));

break;
case "macroexpansion":
var G__27264 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__27265 = cause_type;
var G__27266 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27267 = loc;
var G__27268 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27264,G__27265,G__27266,G__27267,G__27268) : format.call(null,G__27264,G__27265,G__27266,G__27267,G__27268));

break;
case "compile-syntax-check":
var G__27270 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__27271 = cause_type;
var G__27272 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27273 = loc;
var G__27274 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27270,G__27271,G__27272,G__27273,G__27274) : format.call(null,G__27270,G__27271,G__27272,G__27273,G__27274));

break;
case "compilation":
var G__27275 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__27276 = cause_type;
var G__27277 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27278 = loc;
var G__27279 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27275,G__27276,G__27277,G__27278,G__27279) : format.call(null,G__27275,G__27276,G__27277,G__27278,G__27279));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__27282 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__27283 = symbol;
var G__27284 = loc;
var G__27285 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27286_27450 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27287_27451 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27288_27452 = true;
var _STAR_print_fn_STAR__temp_val__27289_27453 = ((function (_STAR_print_newline_STAR__orig_val__27286_27450,_STAR_print_fn_STAR__orig_val__27287_27451,_STAR_print_newline_STAR__temp_val__27288_27452,sb__4661__auto__,G__27282,G__27283,G__27284,G__27251,G__27251__$1,loc,class_name,simple_class,cause_type,format,map__27244,map__27244__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__27286_27450,_STAR_print_fn_STAR__orig_val__27287_27451,_STAR_print_newline_STAR__temp_val__27288_27452,sb__4661__auto__,G__27282,G__27283,G__27284,G__27251,G__27251__$1,loc,class_name,simple_class,cause_type,format,map__27244,map__27244__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27288_27452;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27289_27453;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__27286_27450,_STAR_print_fn_STAR__orig_val__27287_27451,_STAR_print_newline_STAR__temp_val__27288_27452,_STAR_print_fn_STAR__temp_val__27289_27453,sb__4661__auto__,G__27282,G__27283,G__27284,G__27251,G__27251__$1,loc,class_name,simple_class,cause_type,format,map__27244,map__27244__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__27286_27450,_STAR_print_fn_STAR__orig_val__27287_27451,_STAR_print_newline_STAR__temp_val__27288_27452,_STAR_print_fn_STAR__temp_val__27289_27453,sb__4661__auto__,G__27282,G__27283,G__27284,G__27251,G__27251__$1,loc,class_name,simple_class,cause_type,format,map__27244,map__27244__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__27242_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__27242_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__27286_27450,_STAR_print_fn_STAR__orig_val__27287_27451,_STAR_print_newline_STAR__temp_val__27288_27452,_STAR_print_fn_STAR__temp_val__27289_27453,sb__4661__auto__,G__27282,G__27283,G__27284,G__27251,G__27251__$1,loc,class_name,simple_class,cause_type,format,map__27244,map__27244__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__27286_27450,_STAR_print_fn_STAR__orig_val__27287_27451,_STAR_print_newline_STAR__temp_val__27288_27452,_STAR_print_fn_STAR__temp_val__27289_27453,sb__4661__auto__,G__27282,G__27283,G__27284,G__27251,G__27251__$1,loc,class_name,simple_class,cause_type,format,map__27244,map__27244__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27287_27451;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27286_27450;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__27282,G__27283,G__27284,G__27285) : format.call(null,G__27282,G__27283,G__27284,G__27285));
} else {
var G__27291 = "Execution error%s at %s(%s).\n%s\n";
var G__27292 = cause_type;
var G__27293 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27294 = loc;
var G__27295 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27291,G__27292,G__27293,G__27294,G__27295) : format.call(null,G__27291,G__27292,G__27293,G__27294,G__27295));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27251__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
