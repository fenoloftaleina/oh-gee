goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33192 = coll;
var G__33193 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33192,G__33193) : shadow.dom.lazy_native_coll_seq.call(null,G__33192,G__33193));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__33216 = arguments.length;
switch (G__33216) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33218 = arguments.length;
switch (G__33218) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33221 = arguments.length;
switch (G__33221) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33223 = arguments.length;
switch (G__33223) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33246 = arguments.length;
switch (G__33246) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__33251 = document;
var G__33252 = shadow.dom.dom_node(el);
return goog.dom.contains(G__33251,G__33252);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__33262 = shadow.dom.dom_node(parent);
var G__33263 = shadow.dom.dom_node(el);
return goog.dom.contains(G__33262,G__33263);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__33273 = shadow.dom.dom_node(el);
var G__33274 = cls;
return goog.dom.classlist.add(G__33273,G__33274);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__33279 = shadow.dom.dom_node(el);
var G__33280 = cls;
return goog.dom.classlist.remove(G__33279,G__33280);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33282 = arguments.length;
switch (G__33282) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__33283 = shadow.dom.dom_node(el);
var G__33284 = cls;
return goog.dom.classlist.toggle(G__33283,G__33284);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33285){if((e33285 instanceof Object)){
var e = e33285;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33285;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33293 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33294 = null;
var count__33295 = (0);
var i__33296 = (0);
while(true){
if((i__33296 < count__33295)){
var el = chunk__33294.cljs$core$IIndexed$_nth$arity$2(null,i__33296);
var handler_33951__$1 = ((function (seq__33293,chunk__33294,count__33295,i__33296,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33293,chunk__33294,count__33295,i__33296,el))
;
var G__33306_33953 = el;
var G__33307_33954 = cljs.core.name(ev);
var G__33308_33955 = handler_33951__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33306_33953,G__33307_33954,G__33308_33955) : shadow.dom.dom_listen.call(null,G__33306_33953,G__33307_33954,G__33308_33955));


var G__33957 = seq__33293;
var G__33958 = chunk__33294;
var G__33959 = count__33295;
var G__33960 = (i__33296 + (1));
seq__33293 = G__33957;
chunk__33294 = G__33958;
count__33295 = G__33959;
i__33296 = G__33960;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33293);
if(temp__5735__auto__){
var seq__33293__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33293__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33293__$1);
var G__33961 = cljs.core.chunk_rest(seq__33293__$1);
var G__33962 = c__4550__auto__;
var G__33963 = cljs.core.count(c__4550__auto__);
var G__33964 = (0);
seq__33293 = G__33961;
chunk__33294 = G__33962;
count__33295 = G__33963;
i__33296 = G__33964;
continue;
} else {
var el = cljs.core.first(seq__33293__$1);
var handler_33965__$1 = ((function (seq__33293,chunk__33294,count__33295,i__33296,el,seq__33293__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33293,chunk__33294,count__33295,i__33296,el,seq__33293__$1,temp__5735__auto__))
;
var G__33309_33967 = el;
var G__33310_33968 = cljs.core.name(ev);
var G__33311_33969 = handler_33965__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33309_33967,G__33310_33968,G__33311_33969) : shadow.dom.dom_listen.call(null,G__33309_33967,G__33310_33968,G__33311_33969));


var G__33972 = cljs.core.next(seq__33293__$1);
var G__33973 = null;
var G__33974 = (0);
var G__33975 = (0);
seq__33293 = G__33972;
chunk__33294 = G__33973;
count__33295 = G__33974;
i__33296 = G__33975;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33313 = arguments.length;
switch (G__33313) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__33314 = shadow.dom.dom_node(el);
var G__33315 = cljs.core.name(ev);
var G__33316 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33314,G__33315,G__33316) : shadow.dom.dom_listen.call(null,G__33314,G__33315,G__33316));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__33321 = shadow.dom.dom_node(el);
var G__33322 = cljs.core.name(ev);
var G__33323 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__33321,G__33322,G__33323) : shadow.dom.dom_listen_remove.call(null,G__33321,G__33322,G__33323));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33324 = cljs.core.seq(events);
var chunk__33325 = null;
var count__33326 = (0);
var i__33327 = (0);
while(true){
if((i__33327 < count__33326)){
var vec__33337 = chunk__33325.cljs$core$IIndexed$_nth$arity$2(null,i__33327);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33337,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33337,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33986 = seq__33324;
var G__33987 = chunk__33325;
var G__33988 = count__33326;
var G__33989 = (i__33327 + (1));
seq__33324 = G__33986;
chunk__33325 = G__33987;
count__33326 = G__33988;
i__33327 = G__33989;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33324);
if(temp__5735__auto__){
var seq__33324__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33324__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33324__$1);
var G__33991 = cljs.core.chunk_rest(seq__33324__$1);
var G__33992 = c__4550__auto__;
var G__33993 = cljs.core.count(c__4550__auto__);
var G__33994 = (0);
seq__33324 = G__33991;
chunk__33325 = G__33992;
count__33326 = G__33993;
i__33327 = G__33994;
continue;
} else {
var vec__33341 = cljs.core.first(seq__33324__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33341,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33341,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33995 = cljs.core.next(seq__33324__$1);
var G__33996 = null;
var G__33997 = (0);
var G__33998 = (0);
seq__33324 = G__33995;
chunk__33325 = G__33996;
count__33326 = G__33997;
i__33327 = G__33998;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33345 = cljs.core.seq(styles);
var chunk__33346 = null;
var count__33347 = (0);
var i__33348 = (0);
while(true){
if((i__33348 < count__33347)){
var vec__33362 = chunk__33346.cljs$core$IIndexed$_nth$arity$2(null,i__33348);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33362,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33362,(1),null);
var G__33365_34001 = dom;
var G__33366_34002 = cljs.core.name(k);
var G__33367_34003 = (((v == null))?"":v);
goog.style.setStyle(G__33365_34001,G__33366_34002,G__33367_34003);


var G__34007 = seq__33345;
var G__34008 = chunk__33346;
var G__34009 = count__33347;
var G__34010 = (i__33348 + (1));
seq__33345 = G__34007;
chunk__33346 = G__34008;
count__33347 = G__34009;
i__33348 = G__34010;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33345);
if(temp__5735__auto__){
var seq__33345__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33345__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33345__$1);
var G__34025 = cljs.core.chunk_rest(seq__33345__$1);
var G__34026 = c__4550__auto__;
var G__34027 = cljs.core.count(c__4550__auto__);
var G__34028 = (0);
seq__33345 = G__34025;
chunk__33346 = G__34026;
count__33347 = G__34027;
i__33348 = G__34028;
continue;
} else {
var vec__33368 = cljs.core.first(seq__33345__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33368,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33368,(1),null);
var G__33371_34029 = dom;
var G__33372_34030 = cljs.core.name(k);
var G__33373_34031 = (((v == null))?"":v);
goog.style.setStyle(G__33371_34029,G__33372_34030,G__33373_34031);


var G__34032 = cljs.core.next(seq__33345__$1);
var G__34033 = null;
var G__34034 = (0);
var G__34035 = (0);
seq__33345 = G__34032;
chunk__33346 = G__34033;
count__33347 = G__34034;
i__33348 = G__34035;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33374_34036 = key;
var G__33374_34037__$1 = (((G__33374_34036 instanceof cljs.core.Keyword))?G__33374_34036.fqn:null);
switch (G__33374_34037__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_34045 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_34045,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_34045,"aria-");
}
})())){
el.setAttribute(ks_34045,value);
} else {
(el[ks_34045] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__33376 = shadow.dom.dom_node(el);
var G__33377 = cls;
return goog.dom.classlist.contains(G__33376,G__33377);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33390){
var map__33391 = p__33390;
var map__33391__$1 = (((((!((map__33391 == null))))?(((((map__33391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33391):map__33391);
var props = map__33391__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33391__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33395 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33395,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33395,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33395,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33398 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33398,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33398;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33400 = arguments.length;
switch (G__33400) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33403){
var vec__33404 = p__33403;
var seq__33405 = cljs.core.seq(vec__33404);
var first__33406 = cljs.core.first(seq__33405);
var seq__33405__$1 = cljs.core.next(seq__33405);
var nn = first__33406;
var first__33406__$1 = cljs.core.first(seq__33405__$1);
var seq__33405__$2 = cljs.core.next(seq__33405__$1);
var np = first__33406__$1;
var nc = seq__33405__$2;
var node = vec__33404;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33409 = nn;
var G__33410 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33409,G__33410) : create_fn.call(null,G__33409,G__33410));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33412 = nn;
var G__33413 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33412,G__33413) : create_fn.call(null,G__33412,G__33413));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33416 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33416,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33416,(1),null);
var seq__33419_34065 = cljs.core.seq(node_children);
var chunk__33420_34066 = null;
var count__33421_34067 = (0);
var i__33422_34068 = (0);
while(true){
if((i__33422_34068 < count__33421_34067)){
var child_struct_34069 = chunk__33420_34066.cljs$core$IIndexed$_nth$arity$2(null,i__33422_34068);
var children_34070 = shadow.dom.dom_node(child_struct_34069);
if(cljs.core.seq_QMARK_(children_34070)){
var seq__33451_34071 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34070));
var chunk__33453_34072 = null;
var count__33454_34073 = (0);
var i__33455_34074 = (0);
while(true){
if((i__33455_34074 < count__33454_34073)){
var child_34075 = chunk__33453_34072.cljs$core$IIndexed$_nth$arity$2(null,i__33455_34074);
if(cljs.core.truth_(child_34075)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34075);


var G__34076 = seq__33451_34071;
var G__34077 = chunk__33453_34072;
var G__34078 = count__33454_34073;
var G__34079 = (i__33455_34074 + (1));
seq__33451_34071 = G__34076;
chunk__33453_34072 = G__34077;
count__33454_34073 = G__34078;
i__33455_34074 = G__34079;
continue;
} else {
var G__34080 = seq__33451_34071;
var G__34081 = chunk__33453_34072;
var G__34082 = count__33454_34073;
var G__34083 = (i__33455_34074 + (1));
seq__33451_34071 = G__34080;
chunk__33453_34072 = G__34081;
count__33454_34073 = G__34082;
i__33455_34074 = G__34083;
continue;
}
} else {
var temp__5735__auto___34084 = cljs.core.seq(seq__33451_34071);
if(temp__5735__auto___34084){
var seq__33451_34087__$1 = temp__5735__auto___34084;
if(cljs.core.chunked_seq_QMARK_(seq__33451_34087__$1)){
var c__4550__auto___34088 = cljs.core.chunk_first(seq__33451_34087__$1);
var G__34092 = cljs.core.chunk_rest(seq__33451_34087__$1);
var G__34093 = c__4550__auto___34088;
var G__34094 = cljs.core.count(c__4550__auto___34088);
var G__34095 = (0);
seq__33451_34071 = G__34092;
chunk__33453_34072 = G__34093;
count__33454_34073 = G__34094;
i__33455_34074 = G__34095;
continue;
} else {
var child_34096 = cljs.core.first(seq__33451_34087__$1);
if(cljs.core.truth_(child_34096)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34096);


var G__34098 = cljs.core.next(seq__33451_34087__$1);
var G__34099 = null;
var G__34100 = (0);
var G__34101 = (0);
seq__33451_34071 = G__34098;
chunk__33453_34072 = G__34099;
count__33454_34073 = G__34100;
i__33455_34074 = G__34101;
continue;
} else {
var G__34103 = cljs.core.next(seq__33451_34087__$1);
var G__34104 = null;
var G__34105 = (0);
var G__34106 = (0);
seq__33451_34071 = G__34103;
chunk__33453_34072 = G__34104;
count__33454_34073 = G__34105;
i__33455_34074 = G__34106;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34070);
}


var G__34107 = seq__33419_34065;
var G__34108 = chunk__33420_34066;
var G__34109 = count__33421_34067;
var G__34110 = (i__33422_34068 + (1));
seq__33419_34065 = G__34107;
chunk__33420_34066 = G__34108;
count__33421_34067 = G__34109;
i__33422_34068 = G__34110;
continue;
} else {
var temp__5735__auto___34112 = cljs.core.seq(seq__33419_34065);
if(temp__5735__auto___34112){
var seq__33419_34113__$1 = temp__5735__auto___34112;
if(cljs.core.chunked_seq_QMARK_(seq__33419_34113__$1)){
var c__4550__auto___34115 = cljs.core.chunk_first(seq__33419_34113__$1);
var G__34116 = cljs.core.chunk_rest(seq__33419_34113__$1);
var G__34117 = c__4550__auto___34115;
var G__34118 = cljs.core.count(c__4550__auto___34115);
var G__34119 = (0);
seq__33419_34065 = G__34116;
chunk__33420_34066 = G__34117;
count__33421_34067 = G__34118;
i__33422_34068 = G__34119;
continue;
} else {
var child_struct_34120 = cljs.core.first(seq__33419_34113__$1);
var children_34121 = shadow.dom.dom_node(child_struct_34120);
if(cljs.core.seq_QMARK_(children_34121)){
var seq__33475_34122 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34121));
var chunk__33477_34123 = null;
var count__33478_34124 = (0);
var i__33479_34125 = (0);
while(true){
if((i__33479_34125 < count__33478_34124)){
var child_34128 = chunk__33477_34123.cljs$core$IIndexed$_nth$arity$2(null,i__33479_34125);
if(cljs.core.truth_(child_34128)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34128);


var G__34129 = seq__33475_34122;
var G__34130 = chunk__33477_34123;
var G__34131 = count__33478_34124;
var G__34132 = (i__33479_34125 + (1));
seq__33475_34122 = G__34129;
chunk__33477_34123 = G__34130;
count__33478_34124 = G__34131;
i__33479_34125 = G__34132;
continue;
} else {
var G__34133 = seq__33475_34122;
var G__34134 = chunk__33477_34123;
var G__34135 = count__33478_34124;
var G__34136 = (i__33479_34125 + (1));
seq__33475_34122 = G__34133;
chunk__33477_34123 = G__34134;
count__33478_34124 = G__34135;
i__33479_34125 = G__34136;
continue;
}
} else {
var temp__5735__auto___34138__$1 = cljs.core.seq(seq__33475_34122);
if(temp__5735__auto___34138__$1){
var seq__33475_34139__$1 = temp__5735__auto___34138__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33475_34139__$1)){
var c__4550__auto___34140 = cljs.core.chunk_first(seq__33475_34139__$1);
var G__34141 = cljs.core.chunk_rest(seq__33475_34139__$1);
var G__34142 = c__4550__auto___34140;
var G__34143 = cljs.core.count(c__4550__auto___34140);
var G__34144 = (0);
seq__33475_34122 = G__34141;
chunk__33477_34123 = G__34142;
count__33478_34124 = G__34143;
i__33479_34125 = G__34144;
continue;
} else {
var child_34145 = cljs.core.first(seq__33475_34139__$1);
if(cljs.core.truth_(child_34145)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34145);


var G__34147 = cljs.core.next(seq__33475_34139__$1);
var G__34148 = null;
var G__34149 = (0);
var G__34150 = (0);
seq__33475_34122 = G__34147;
chunk__33477_34123 = G__34148;
count__33478_34124 = G__34149;
i__33479_34125 = G__34150;
continue;
} else {
var G__34151 = cljs.core.next(seq__33475_34139__$1);
var G__34152 = null;
var G__34153 = (0);
var G__34154 = (0);
seq__33475_34122 = G__34151;
chunk__33477_34123 = G__34152;
count__33478_34124 = G__34153;
i__33479_34125 = G__34154;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34121);
}


var G__34156 = cljs.core.next(seq__33419_34113__$1);
var G__34157 = null;
var G__34158 = (0);
var G__34159 = (0);
seq__33419_34065 = G__34156;
chunk__33420_34066 = G__34157;
count__33421_34067 = G__34158;
i__33422_34068 = G__34159;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__33505 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__33505);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33511 = cljs.core.seq(node);
var chunk__33512 = null;
var count__33513 = (0);
var i__33514 = (0);
while(true){
if((i__33514 < count__33513)){
var n = chunk__33512.cljs$core$IIndexed$_nth$arity$2(null,i__33514);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34162 = seq__33511;
var G__34163 = chunk__33512;
var G__34164 = count__33513;
var G__34165 = (i__33514 + (1));
seq__33511 = G__34162;
chunk__33512 = G__34163;
count__33513 = G__34164;
i__33514 = G__34165;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33511);
if(temp__5735__auto__){
var seq__33511__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33511__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33511__$1);
var G__34167 = cljs.core.chunk_rest(seq__33511__$1);
var G__34168 = c__4550__auto__;
var G__34169 = cljs.core.count(c__4550__auto__);
var G__34170 = (0);
seq__33511 = G__34167;
chunk__33512 = G__34168;
count__33513 = G__34169;
i__33514 = G__34170;
continue;
} else {
var n = cljs.core.first(seq__33511__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34171 = cljs.core.next(seq__33511__$1);
var G__34172 = null;
var G__34173 = (0);
var G__34174 = (0);
seq__33511 = G__34171;
chunk__33512 = G__34172;
count__33513 = G__34173;
i__33514 = G__34174;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__33523 = shadow.dom.dom_node(new$);
var G__33524 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__33523,G__33524);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33528 = arguments.length;
switch (G__33528) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33536 = arguments.length;
switch (G__33536) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33550 = arguments.length;
switch (G__33550) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34202 = arguments.length;
var i__4731__auto___34203 = (0);
while(true){
if((i__4731__auto___34203 < len__4730__auto___34202)){
args__4736__auto__.push((arguments[i__4731__auto___34203]));

var G__34204 = (i__4731__auto___34203 + (1));
i__4731__auto___34203 = G__34204;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33568_34206 = cljs.core.seq(nodes);
var chunk__33569_34207 = null;
var count__33570_34208 = (0);
var i__33571_34209 = (0);
while(true){
if((i__33571_34209 < count__33570_34208)){
var node_34210 = chunk__33569_34207.cljs$core$IIndexed$_nth$arity$2(null,i__33571_34209);
fragment.appendChild(shadow.dom._to_dom(node_34210));


var G__34211 = seq__33568_34206;
var G__34212 = chunk__33569_34207;
var G__34213 = count__33570_34208;
var G__34214 = (i__33571_34209 + (1));
seq__33568_34206 = G__34211;
chunk__33569_34207 = G__34212;
count__33570_34208 = G__34213;
i__33571_34209 = G__34214;
continue;
} else {
var temp__5735__auto___34215 = cljs.core.seq(seq__33568_34206);
if(temp__5735__auto___34215){
var seq__33568_34219__$1 = temp__5735__auto___34215;
if(cljs.core.chunked_seq_QMARK_(seq__33568_34219__$1)){
var c__4550__auto___34220 = cljs.core.chunk_first(seq__33568_34219__$1);
var G__34221 = cljs.core.chunk_rest(seq__33568_34219__$1);
var G__34222 = c__4550__auto___34220;
var G__34223 = cljs.core.count(c__4550__auto___34220);
var G__34224 = (0);
seq__33568_34206 = G__34221;
chunk__33569_34207 = G__34222;
count__33570_34208 = G__34223;
i__33571_34209 = G__34224;
continue;
} else {
var node_34225 = cljs.core.first(seq__33568_34219__$1);
fragment.appendChild(shadow.dom._to_dom(node_34225));


var G__34226 = cljs.core.next(seq__33568_34219__$1);
var G__34227 = null;
var G__34228 = (0);
var G__34229 = (0);
seq__33568_34206 = G__34226;
chunk__33569_34207 = G__34227;
count__33570_34208 = G__34228;
i__33571_34209 = G__34229;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq33554){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33554));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33581_34230 = cljs.core.seq(scripts);
var chunk__33582_34231 = null;
var count__33583_34232 = (0);
var i__33584_34233 = (0);
while(true){
if((i__33584_34233 < count__33583_34232)){
var vec__33596_34234 = chunk__33582_34231.cljs$core$IIndexed$_nth$arity$2(null,i__33584_34233);
var script_tag_34235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33596_34234,(0),null);
var script_body_34236 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33596_34234,(1),null);
eval(script_body_34236);


var G__34237 = seq__33581_34230;
var G__34238 = chunk__33582_34231;
var G__34239 = count__33583_34232;
var G__34240 = (i__33584_34233 + (1));
seq__33581_34230 = G__34237;
chunk__33582_34231 = G__34238;
count__33583_34232 = G__34239;
i__33584_34233 = G__34240;
continue;
} else {
var temp__5735__auto___34241 = cljs.core.seq(seq__33581_34230);
if(temp__5735__auto___34241){
var seq__33581_34242__$1 = temp__5735__auto___34241;
if(cljs.core.chunked_seq_QMARK_(seq__33581_34242__$1)){
var c__4550__auto___34243 = cljs.core.chunk_first(seq__33581_34242__$1);
var G__34244 = cljs.core.chunk_rest(seq__33581_34242__$1);
var G__34245 = c__4550__auto___34243;
var G__34246 = cljs.core.count(c__4550__auto___34243);
var G__34247 = (0);
seq__33581_34230 = G__34244;
chunk__33582_34231 = G__34245;
count__33583_34232 = G__34246;
i__33584_34233 = G__34247;
continue;
} else {
var vec__33599_34248 = cljs.core.first(seq__33581_34242__$1);
var script_tag_34249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33599_34248,(0),null);
var script_body_34250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33599_34248,(1),null);
eval(script_body_34250);


var G__34251 = cljs.core.next(seq__33581_34242__$1);
var G__34252 = null;
var G__34253 = (0);
var G__34254 = (0);
seq__33581_34230 = G__34251;
chunk__33582_34231 = G__34252;
count__33583_34232 = G__34253;
i__33584_34233 = G__34254;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__33603){
var vec__33605 = p__33603;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33605,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33605,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__33612 = shadow.dom.dom_node(el);
var G__33613 = cls;
return goog.dom.getAncestorByClass(G__33612,G__33613);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33619 = arguments.length;
switch (G__33619) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__33621 = shadow.dom.dom_node(el);
var G__33622 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__33621,G__33622);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__33624 = shadow.dom.dom_node(el);
var G__33625 = cljs.core.name(tag);
var G__33626 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__33624,G__33625,G__33626);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__33628 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__33628);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__33633 = shadow.dom.dom_node(dom);
var G__33634 = value;
return goog.dom.forms.setValue(G__33633,G__33634);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33648 = cljs.core.seq(style_keys);
var chunk__33649 = null;
var count__33650 = (0);
var i__33651 = (0);
while(true){
if((i__33651 < count__33650)){
var it = chunk__33649.cljs$core$IIndexed$_nth$arity$2(null,i__33651);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34266 = seq__33648;
var G__34267 = chunk__33649;
var G__34268 = count__33650;
var G__34269 = (i__33651 + (1));
seq__33648 = G__34266;
chunk__33649 = G__34267;
count__33650 = G__34268;
i__33651 = G__34269;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33648);
if(temp__5735__auto__){
var seq__33648__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33648__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33648__$1);
var G__34270 = cljs.core.chunk_rest(seq__33648__$1);
var G__34271 = c__4550__auto__;
var G__34272 = cljs.core.count(c__4550__auto__);
var G__34273 = (0);
seq__33648 = G__34270;
chunk__33649 = G__34271;
count__33650 = G__34272;
i__33651 = G__34273;
continue;
} else {
var it = cljs.core.first(seq__33648__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34274 = cljs.core.next(seq__33648__$1);
var G__34275 = null;
var G__34276 = (0);
var G__34277 = (0);
seq__33648 = G__34274;
chunk__33649 = G__34275;
count__33650 = G__34276;
i__33651 = G__34277;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k33661,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__33672 = k33661;
var G__33672__$1 = (((G__33672 instanceof cljs.core.Keyword))?G__33672.fqn:null);
switch (G__33672__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33661,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__33673){
var vec__33674 = p__33673;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33674,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33674,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33660){
var self__ = this;
var G__33660__$1 = this;
return (new cljs.core.RecordIter((0),G__33660__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__33677 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__33677(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33662,other33663){
var self__ = this;
var this33662__$1 = this;
return (((!((other33663 == null)))) && ((this33662__$1.constructor === other33663.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33662__$1.x,other33663.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33662__$1.y,other33663.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33662__$1.__extmap,other33663.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__33660){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__33678 = cljs.core.keyword_identical_QMARK_;
var expr__33679 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__33681 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__33682 = expr__33679;
return (pred__33678.cljs$core$IFn$_invoke$arity$2 ? pred__33678.cljs$core$IFn$_invoke$arity$2(G__33681,G__33682) : pred__33678.call(null,G__33681,G__33682));
})())){
return (new shadow.dom.Coordinate(G__33660,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33683 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__33684 = expr__33679;
return (pred__33678.cljs$core$IFn$_invoke$arity$2 ? pred__33678.cljs$core$IFn$_invoke$arity$2(G__33683,G__33684) : pred__33678.call(null,G__33683,G__33684));
})())){
return (new shadow.dom.Coordinate(self__.x,G__33660,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__33660),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__33660){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33660,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33666){
var extmap__4424__auto__ = (function (){var G__33692 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33666,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33666)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33692);
} else {
return G__33692;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33666),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33666),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__33693 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__33693);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__33694 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__33694);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__33696 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__33696);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k33699,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__33708 = k33699;
var G__33708__$1 = (((G__33708 instanceof cljs.core.Keyword))?G__33708.fqn:null);
switch (G__33708__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33699,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__33712){
var vec__33714 = p__33712;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33714,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33714,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33698){
var self__ = this;
var G__33698__$1 = this;
return (new cljs.core.RecordIter((0),G__33698__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__33719 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__33719(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33700,other33701){
var self__ = this;
var this33700__$1 = this;
return (((!((other33701 == null)))) && ((this33700__$1.constructor === other33701.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33700__$1.w,other33701.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33700__$1.h,other33701.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33700__$1.__extmap,other33701.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__33698){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__33721 = cljs.core.keyword_identical_QMARK_;
var expr__33722 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__33724 = new cljs.core.Keyword(null,"w","w",354169001);
var G__33725 = expr__33722;
return (pred__33721.cljs$core$IFn$_invoke$arity$2 ? pred__33721.cljs$core$IFn$_invoke$arity$2(G__33724,G__33725) : pred__33721.call(null,G__33724,G__33725));
})())){
return (new shadow.dom.Size(G__33698,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33726 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__33727 = expr__33722;
return (pred__33721.cljs$core$IFn$_invoke$arity$2 ? pred__33721.cljs$core$IFn$_invoke$arity$2(G__33726,G__33727) : pred__33721.call(null,G__33726,G__33727));
})())){
return (new shadow.dom.Size(self__.w,G__33698,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__33698),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__33698){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33698,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33703){
var extmap__4424__auto__ = (function (){var G__33738 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33703,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33703)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33738);
} else {
return G__33738;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33703),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33703),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__33739 = shadow.dom.dom_node(el);
return goog.style.getSize(G__33739);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__34341 = (i + (1));
var G__34342 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34341;
ret = G__34342;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33749){
var vec__33750 = p__33749;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33750,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33750,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33757 = arguments.length;
switch (G__33757) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__33777_34348 = new_node;
var G__33778_34349 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__33777_34348,G__33778_34349);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__33779_34351 = new_node;
var G__33780_34352 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__33779_34351,G__33780_34352);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34354 = ps;
var G__34355 = (i + (1));
el__$1 = G__34354;
i = G__34355;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__33781 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__33781);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__33785 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__33785);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__33788 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__33788);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33790 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33790,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33790,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33790,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33793_34357 = cljs.core.seq(props);
var chunk__33794_34358 = null;
var count__33795_34359 = (0);
var i__33796_34360 = (0);
while(true){
if((i__33796_34360 < count__33795_34359)){
var vec__33803_34361 = chunk__33794_34358.cljs$core$IIndexed$_nth$arity$2(null,i__33796_34360);
var k_34362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33803_34361,(0),null);
var v_34363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33803_34361,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_34362);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34362),v_34363);


var G__34364 = seq__33793_34357;
var G__34365 = chunk__33794_34358;
var G__34366 = count__33795_34359;
var G__34367 = (i__33796_34360 + (1));
seq__33793_34357 = G__34364;
chunk__33794_34358 = G__34365;
count__33795_34359 = G__34366;
i__33796_34360 = G__34367;
continue;
} else {
var temp__5735__auto___34368 = cljs.core.seq(seq__33793_34357);
if(temp__5735__auto___34368){
var seq__33793_34369__$1 = temp__5735__auto___34368;
if(cljs.core.chunked_seq_QMARK_(seq__33793_34369__$1)){
var c__4550__auto___34370 = cljs.core.chunk_first(seq__33793_34369__$1);
var G__34371 = cljs.core.chunk_rest(seq__33793_34369__$1);
var G__34372 = c__4550__auto___34370;
var G__34373 = cljs.core.count(c__4550__auto___34370);
var G__34374 = (0);
seq__33793_34357 = G__34371;
chunk__33794_34358 = G__34372;
count__33795_34359 = G__34373;
i__33796_34360 = G__34374;
continue;
} else {
var vec__33806_34375 = cljs.core.first(seq__33793_34369__$1);
var k_34376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33806_34375,(0),null);
var v_34377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33806_34375,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_34376);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34376),v_34377);


var G__34378 = cljs.core.next(seq__33793_34369__$1);
var G__34379 = null;
var G__34380 = (0);
var G__34381 = (0);
seq__33793_34357 = G__34378;
chunk__33794_34358 = G__34379;
count__33795_34359 = G__34380;
i__33796_34360 = G__34381;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33810 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33810,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33810,(1),null);
var seq__33813_34382 = cljs.core.seq(node_children);
var chunk__33815_34383 = null;
var count__33816_34384 = (0);
var i__33817_34385 = (0);
while(true){
if((i__33817_34385 < count__33816_34384)){
var child_struct_34386 = chunk__33815_34383.cljs$core$IIndexed$_nth$arity$2(null,i__33817_34385);
if((!((child_struct_34386 == null)))){
if(typeof child_struct_34386 === 'string'){
var text_34387 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34387),child_struct_34386].join(''));
} else {
var children_34388 = shadow.dom.svg_node(child_struct_34386);
if(cljs.core.seq_QMARK_(children_34388)){
var seq__33843_34389 = cljs.core.seq(children_34388);
var chunk__33845_34390 = null;
var count__33846_34391 = (0);
var i__33847_34392 = (0);
while(true){
if((i__33847_34392 < count__33846_34391)){
var child_34393 = chunk__33845_34390.cljs$core$IIndexed$_nth$arity$2(null,i__33847_34392);
if(cljs.core.truth_(child_34393)){
node.appendChild(child_34393);


var G__34394 = seq__33843_34389;
var G__34395 = chunk__33845_34390;
var G__34396 = count__33846_34391;
var G__34397 = (i__33847_34392 + (1));
seq__33843_34389 = G__34394;
chunk__33845_34390 = G__34395;
count__33846_34391 = G__34396;
i__33847_34392 = G__34397;
continue;
} else {
var G__34398 = seq__33843_34389;
var G__34399 = chunk__33845_34390;
var G__34400 = count__33846_34391;
var G__34401 = (i__33847_34392 + (1));
seq__33843_34389 = G__34398;
chunk__33845_34390 = G__34399;
count__33846_34391 = G__34400;
i__33847_34392 = G__34401;
continue;
}
} else {
var temp__5735__auto___34402 = cljs.core.seq(seq__33843_34389);
if(temp__5735__auto___34402){
var seq__33843_34403__$1 = temp__5735__auto___34402;
if(cljs.core.chunked_seq_QMARK_(seq__33843_34403__$1)){
var c__4550__auto___34404 = cljs.core.chunk_first(seq__33843_34403__$1);
var G__34405 = cljs.core.chunk_rest(seq__33843_34403__$1);
var G__34406 = c__4550__auto___34404;
var G__34407 = cljs.core.count(c__4550__auto___34404);
var G__34408 = (0);
seq__33843_34389 = G__34405;
chunk__33845_34390 = G__34406;
count__33846_34391 = G__34407;
i__33847_34392 = G__34408;
continue;
} else {
var child_34409 = cljs.core.first(seq__33843_34403__$1);
if(cljs.core.truth_(child_34409)){
node.appendChild(child_34409);


var G__34410 = cljs.core.next(seq__33843_34403__$1);
var G__34411 = null;
var G__34412 = (0);
var G__34413 = (0);
seq__33843_34389 = G__34410;
chunk__33845_34390 = G__34411;
count__33846_34391 = G__34412;
i__33847_34392 = G__34413;
continue;
} else {
var G__34414 = cljs.core.next(seq__33843_34403__$1);
var G__34415 = null;
var G__34416 = (0);
var G__34417 = (0);
seq__33843_34389 = G__34414;
chunk__33845_34390 = G__34415;
count__33846_34391 = G__34416;
i__33847_34392 = G__34417;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34388);
}
}


var G__34422 = seq__33813_34382;
var G__34423 = chunk__33815_34383;
var G__34424 = count__33816_34384;
var G__34425 = (i__33817_34385 + (1));
seq__33813_34382 = G__34422;
chunk__33815_34383 = G__34423;
count__33816_34384 = G__34424;
i__33817_34385 = G__34425;
continue;
} else {
var G__34428 = seq__33813_34382;
var G__34429 = chunk__33815_34383;
var G__34430 = count__33816_34384;
var G__34431 = (i__33817_34385 + (1));
seq__33813_34382 = G__34428;
chunk__33815_34383 = G__34429;
count__33816_34384 = G__34430;
i__33817_34385 = G__34431;
continue;
}
} else {
var temp__5735__auto___34432 = cljs.core.seq(seq__33813_34382);
if(temp__5735__auto___34432){
var seq__33813_34433__$1 = temp__5735__auto___34432;
if(cljs.core.chunked_seq_QMARK_(seq__33813_34433__$1)){
var c__4550__auto___34434 = cljs.core.chunk_first(seq__33813_34433__$1);
var G__34435 = cljs.core.chunk_rest(seq__33813_34433__$1);
var G__34436 = c__4550__auto___34434;
var G__34437 = cljs.core.count(c__4550__auto___34434);
var G__34438 = (0);
seq__33813_34382 = G__34435;
chunk__33815_34383 = G__34436;
count__33816_34384 = G__34437;
i__33817_34385 = G__34438;
continue;
} else {
var child_struct_34439 = cljs.core.first(seq__33813_34433__$1);
if((!((child_struct_34439 == null)))){
if(typeof child_struct_34439 === 'string'){
var text_34440 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34440),child_struct_34439].join(''));
} else {
var children_34442 = shadow.dom.svg_node(child_struct_34439);
if(cljs.core.seq_QMARK_(children_34442)){
var seq__33857_34444 = cljs.core.seq(children_34442);
var chunk__33859_34445 = null;
var count__33860_34446 = (0);
var i__33861_34447 = (0);
while(true){
if((i__33861_34447 < count__33860_34446)){
var child_34448 = chunk__33859_34445.cljs$core$IIndexed$_nth$arity$2(null,i__33861_34447);
if(cljs.core.truth_(child_34448)){
node.appendChild(child_34448);


var G__34449 = seq__33857_34444;
var G__34450 = chunk__33859_34445;
var G__34451 = count__33860_34446;
var G__34452 = (i__33861_34447 + (1));
seq__33857_34444 = G__34449;
chunk__33859_34445 = G__34450;
count__33860_34446 = G__34451;
i__33861_34447 = G__34452;
continue;
} else {
var G__34453 = seq__33857_34444;
var G__34454 = chunk__33859_34445;
var G__34455 = count__33860_34446;
var G__34456 = (i__33861_34447 + (1));
seq__33857_34444 = G__34453;
chunk__33859_34445 = G__34454;
count__33860_34446 = G__34455;
i__33861_34447 = G__34456;
continue;
}
} else {
var temp__5735__auto___34457__$1 = cljs.core.seq(seq__33857_34444);
if(temp__5735__auto___34457__$1){
var seq__33857_34458__$1 = temp__5735__auto___34457__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33857_34458__$1)){
var c__4550__auto___34460 = cljs.core.chunk_first(seq__33857_34458__$1);
var G__34487 = cljs.core.chunk_rest(seq__33857_34458__$1);
var G__34488 = c__4550__auto___34460;
var G__34489 = cljs.core.count(c__4550__auto___34460);
var G__34490 = (0);
seq__33857_34444 = G__34487;
chunk__33859_34445 = G__34488;
count__33860_34446 = G__34489;
i__33861_34447 = G__34490;
continue;
} else {
var child_34492 = cljs.core.first(seq__33857_34458__$1);
if(cljs.core.truth_(child_34492)){
node.appendChild(child_34492);


var G__34493 = cljs.core.next(seq__33857_34458__$1);
var G__34494 = null;
var G__34495 = (0);
var G__34496 = (0);
seq__33857_34444 = G__34493;
chunk__33859_34445 = G__34494;
count__33860_34446 = G__34495;
i__33861_34447 = G__34496;
continue;
} else {
var G__34497 = cljs.core.next(seq__33857_34458__$1);
var G__34498 = null;
var G__34499 = (0);
var G__34500 = (0);
seq__33857_34444 = G__34497;
chunk__33859_34445 = G__34498;
count__33860_34446 = G__34499;
i__33861_34447 = G__34500;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34442);
}
}


var G__34502 = cljs.core.next(seq__33813_34433__$1);
var G__34503 = null;
var G__34504 = (0);
var G__34505 = (0);
seq__33813_34382 = G__34502;
chunk__33815_34383 = G__34503;
count__33816_34384 = G__34504;
i__33817_34385 = G__34505;
continue;
} else {
var G__34506 = cljs.core.next(seq__33813_34433__$1);
var G__34507 = null;
var G__34508 = (0);
var G__34509 = (0);
seq__33813_34382 = G__34506;
chunk__33815_34383 = G__34507;
count__33816_34384 = G__34508;
i__33817_34385 = G__34509;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__33874_34512 = shadow.dom._to_svg;
var G__33875_34513 = "string";
var G__33876_34514 = ((function (G__33874_34512,G__33875_34513){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__33874_34512,G__33875_34513))
;
goog.object.set(G__33874_34512,G__33875_34513,G__33876_34514);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__33884_34519 = shadow.dom._to_svg;
var G__33885_34520 = "null";
var G__33886_34521 = ((function (G__33884_34519,G__33885_34520){
return (function (_){
return null;
});})(G__33884_34519,G__33885_34520))
;
goog.object.set(G__33884_34519,G__33885_34520,G__33886_34521);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34523 = arguments.length;
var i__4731__auto___34524 = (0);
while(true){
if((i__4731__auto___34524 < len__4730__auto___34523)){
args__4736__auto__.push((arguments[i__4731__auto___34524]));

var G__34525 = (i__4731__auto___34524 + (1));
i__4731__auto___34524 = G__34525;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq33889){
var G__33890 = cljs.core.first(seq33889);
var seq33889__$1 = cljs.core.next(seq33889);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33890,seq33889__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33901 = arguments.length;
switch (G__33901) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__33902_34538 = shadow.dom.dom_node(el);
var G__33903_34539 = cljs.core.name(event);
var G__33904_34540 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33902_34538,G__33903_34539,G__33904_34540) : shadow.dom.dom_listen.call(null,G__33902_34538,G__33903_34539,G__33904_34540));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__30995__auto___34542 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30995__auto___34542,buf,chan,event_fn){
return (function (){
var f__30996__auto__ = (function (){var switch__30767__auto__ = ((function (c__30995__auto___34542,buf,chan,event_fn){
return (function (state_33909){
var state_val_33910 = (state_33909[(1)]);
if((state_val_33910 === (1))){
var state_33909__$1 = state_33909;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33909__$1,(2),once_or_cleanup);
} else {
if((state_val_33910 === (2))){
var inst_33906 = (state_33909[(2)]);
var inst_33907 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33909__$1 = (function (){var statearr_33912 = state_33909;
(statearr_33912[(7)] = inst_33906);

return statearr_33912;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33909__$1,inst_33907);
} else {
return null;
}
}
});})(c__30995__auto___34542,buf,chan,event_fn))
;
return ((function (switch__30767__auto__,c__30995__auto___34542,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__30768__auto__ = null;
var shadow$dom$state_machine__30768__auto____0 = (function (){
var statearr_33914 = [null,null,null,null,null,null,null,null];
(statearr_33914[(0)] = shadow$dom$state_machine__30768__auto__);

(statearr_33914[(1)] = (1));

return statearr_33914;
});
var shadow$dom$state_machine__30768__auto____1 = (function (state_33909){
while(true){
var ret_value__30769__auto__ = (function (){try{while(true){
var result__30770__auto__ = switch__30767__auto__(state_33909);
if(cljs.core.keyword_identical_QMARK_(result__30770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30770__auto__;
}
break;
}
}catch (e33915){if((e33915 instanceof Object)){
var ex__30771__auto__ = e33915;
var statearr_33916_34545 = state_33909;
(statearr_33916_34545[(5)] = ex__30771__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33915;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34547 = state_33909;
state_33909 = G__34547;
continue;
} else {
return ret_value__30769__auto__;
}
break;
}
});
shadow$dom$state_machine__30768__auto__ = function(state_33909){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30768__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30768__auto____1.call(this,state_33909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30768__auto____0;
shadow$dom$state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30768__auto____1;
return shadow$dom$state_machine__30768__auto__;
})()
;})(switch__30767__auto__,c__30995__auto___34542,buf,chan,event_fn))
})();
var state__30997__auto__ = (function (){var statearr_33917 = (f__30996__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30996__auto__.cljs$core$IFn$_invoke$arity$0() : f__30996__auto__.call(null));
(statearr_33917[(6)] = c__30995__auto___34542);

return statearr_33917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30997__auto__);
});})(c__30995__auto___34542,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
