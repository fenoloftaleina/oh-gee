goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31074 = arguments.length;
switch (G__31074) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31075 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31075 = (function (f,blockable,meta31076){
this.f = f;
this.blockable = blockable;
this.meta31076 = meta31076;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31075.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31077,meta31076__$1){
var self__ = this;
var _31077__$1 = this;
return (new cljs.core.async.t_cljs$core$async31075(self__.f,self__.blockable,meta31076__$1));
});

cljs.core.async.t_cljs$core$async31075.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31077){
var self__ = this;
var _31077__$1 = this;
return self__.meta31076;
});

cljs.core.async.t_cljs$core$async31075.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31075.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31075.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31075.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31075.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31076","meta31076",-1873807337,null)], null);
});

cljs.core.async.t_cljs$core$async31075.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31075.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31075";

cljs.core.async.t_cljs$core$async31075.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31075");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31075.
 */
cljs.core.async.__GT_t_cljs$core$async31075 = (function cljs$core$async$__GT_t_cljs$core$async31075(f__$1,blockable__$1,meta31076){
return (new cljs.core.async.t_cljs$core$async31075(f__$1,blockable__$1,meta31076));
});

}

return (new cljs.core.async.t_cljs$core$async31075(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__31090 = arguments.length;
switch (G__31090) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__31101 = arguments.length;
switch (G__31101) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__31106 = arguments.length;
switch (G__31106) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_33181 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33181) : fn1.call(null,val_33181));
} else {
cljs.core.async.impl.dispatch.run(((function (val_33181,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33181) : fn1.call(null,val_33181));
});})(val_33181,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__31134 = arguments.length;
switch (G__31134) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5733__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___33191 = n;
var x_33194 = (0);
while(true){
if((x_33194 < n__4607__auto___33191)){
(a[x_33194] = x_33194);

var G__33195 = (x_33194 + (1));
x_33194 = G__33195;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31148 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31148 = (function (flag,meta31149){
this.flag = flag;
this.meta31149 = meta31149;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31150,meta31149__$1){
var self__ = this;
var _31150__$1 = this;
return (new cljs.core.async.t_cljs$core$async31148(self__.flag,meta31149__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31148.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31150){
var self__ = this;
var _31150__$1 = this;
return self__.meta31149;
});})(flag))
;

cljs.core.async.t_cljs$core$async31148.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31148.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31148.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31148.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31148.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31149","meta31149",-739672363,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31148.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31148.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31148";

cljs.core.async.t_cljs$core$async31148.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31148");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31148.
 */
cljs.core.async.__GT_t_cljs$core$async31148 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31148(flag__$1,meta31149){
return (new cljs.core.async.t_cljs$core$async31148(flag__$1,meta31149));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31148(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31164 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31164 = (function (flag,cb,meta31165){
this.flag = flag;
this.cb = cb;
this.meta31165 = meta31165;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31166,meta31165__$1){
var self__ = this;
var _31166__$1 = this;
return (new cljs.core.async.t_cljs$core$async31164(self__.flag,self__.cb,meta31165__$1));
});

cljs.core.async.t_cljs$core$async31164.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31166){
var self__ = this;
var _31166__$1 = this;
return self__.meta31165;
});

cljs.core.async.t_cljs$core$async31164.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31164.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async31164.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31164.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31164.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31165","meta31165",345924979,null)], null);
});

cljs.core.async.t_cljs$core$async31164.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31164.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31164";

cljs.core.async.t_cljs$core$async31164.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31164");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31164.
 */
cljs.core.async.__GT_t_cljs$core$async31164 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31164(flag__$1,cb__$1,meta31165){
return (new cljs.core.async.t_cljs$core$async31164(flag__$1,cb__$1,meta31165));
});

}

return (new cljs.core.async.t_cljs$core$async31164(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31168_SHARP_){
var G__31190 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31168_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31190) : fret.call(null,G__31190));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31169_SHARP_){
var G__31191 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31169_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31191) : fret.call(null,G__31191));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33247 = (i + (1));
i = G__33247;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33264 = arguments.length;
var i__4731__auto___33265 = (0);
while(true){
if((i__4731__auto___33265 < len__4730__auto___33264)){
args__4736__auto__.push((arguments[i__4731__auto___33265]));

var G__33269 = (i__4731__auto___33265 + (1));
i__4731__auto___33265 = G__33269;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31198){
var map__31199 = p__31198;
var map__31199__$1 = (((((!((map__31199 == null))))?(((((map__31199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31199):map__31199);
var opts = map__31199__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31196){
var G__31197 = cljs.core.first(seq31196);
var seq31196__$1 = cljs.core.next(seq31196);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31197,seq31196__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__31210 = arguments.length;
switch (G__31210) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30995__auto___33287 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30995__auto___33287){
return (function (){
var f__30996__auto__ = (function (){var switch__30767__auto__ = ((function (c__30995__auto___33287){
return (function (state_31260){
var state_val_31261 = (state_31260[(1)]);
if((state_val_31261 === (7))){
var inst_31256 = (state_31260[(2)]);
var state_31260__$1 = state_31260;
var statearr_31263_33288 = state_31260__$1;
(statearr_31263_33288[(2)] = inst_31256);

(statearr_31263_33288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31261 === (1))){
var state_31260__$1 = state_31260;
var statearr_31264_33289 = state_31260__$1;
(statearr_31264_33289[(2)] = null);

(statearr_31264_33289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31261 === (4))){
var inst_31239 = (state_31260[(7)]);
var inst_31239__$1 = (state_31260[(2)]);
var inst_31240 = (inst_31239__$1 == null);
var state_31260__$1 = (function (){var statearr_31266 = state_31260;
(statearr_31266[(7)] = inst_31239__$1);

return statearr_31266;
})();
if(cljs.core.truth_(inst_31240)){
var statearr_31267_33290 = state_31260__$1;
(statearr_31267_33290[(1)] = (5));

} else {
var statearr_31268_33291 = state_31260__$1;
(statearr_31268_33291[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31261 === (13))){
var state_31260__$1 = state_31260;
var statearr_31269_33292 = state_31260__$1;
(statearr_31269_33292[(2)] = null);

(statearr_31269_33292[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31261 === (6))){
var inst_31239 = (state_31260[(7)]);
var state_31260__$1 = state_31260;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31260__$1,(11),to,inst_31239);
} else {
if((state_val_31261 === (3))){
var inst_31258 = (state_31260[(2)]);
var state_31260__$1 = state_31260;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31260__$1,inst_31258);
} else {
if((state_val_31261 === (12))){
var state_31260__$1 = state_31260;
var statearr_31270_33297 = state_31260__$1;
(statearr_31270_33297[(2)] = null);

(statearr_31270_33297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31261 === (2))){
var state_31260__$1 = state_31260;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31260__$1,(4),from);
} else {
if((state_val_31261 === (11))){
var inst_31249 = (state_31260[(2)]);
var state_31260__$1 = state_31260;
if(cljs.core.truth_(inst_31249)){
var statearr_31271_33301 = state_31260__$1;
(statearr_31271_33301[(1)] = (12));

} else {
var statearr_31272_33302 = state_31260__$1;
(statearr_31272_33302[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31261 === (9))){
var state_31260__$1 = state_31260;
var statearr_31273_33317 = state_31260__$1;
(statearr_31273_33317[(2)] = null);

(statearr_31273_33317[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31261 === (5))){
var state_31260__$1 = state_31260;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31274_33318 = state_31260__$1;
(statearr_31274_33318[(1)] = (8));

} else {
var statearr_31275_33319 = state_31260__$1;
(statearr_31275_33319[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31261 === (14))){
var inst_31254 = (state_31260[(2)]);
var state_31260__$1 = state_31260;
var statearr_31276_33320 = state_31260__$1;
(statearr_31276_33320[(2)] = inst_31254);

(statearr_31276_33320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31261 === (10))){
var inst_31246 = (state_31260[(2)]);
var state_31260__$1 = state_31260;
var statearr_31277_33331 = state_31260__$1;
(statearr_31277_33331[(2)] = inst_31246);

(statearr_31277_33331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31261 === (8))){
var inst_31243 = cljs.core.async.close_BANG_(to);
var state_31260__$1 = state_31260;
var statearr_31278_33332 = state_31260__$1;
(statearr_31278_33332[(2)] = inst_31243);

(statearr_31278_33332[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30995__auto___33287))
;
return ((function (switch__30767__auto__,c__30995__auto___33287){
return (function() {
var cljs$core$async$state_machine__30768__auto__ = null;
var cljs$core$async$state_machine__30768__auto____0 = (function (){
var statearr_31279 = [null,null,null,null,null,null,null,null];
(statearr_31279[(0)] = cljs$core$async$state_machine__30768__auto__);

(statearr_31279[(1)] = (1));

return statearr_31279;
});
var cljs$core$async$state_machine__30768__auto____1 = (function (state_31260){
while(true){
var ret_value__30769__auto__ = (function (){try{while(true){
var result__30770__auto__ = switch__30767__auto__(state_31260);
if(cljs.core.keyword_identical_QMARK_(result__30770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30770__auto__;
}
break;
}
}catch (e31280){if((e31280 instanceof Object)){
var ex__30771__auto__ = e31280;
var statearr_31281_33336 = state_31260;
(statearr_31281_33336[(5)] = ex__30771__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31280;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33340 = state_31260;
state_31260 = G__33340;
continue;
} else {
return ret_value__30769__auto__;
}
break;
}
});
cljs$core$async$state_machine__30768__auto__ = function(state_31260){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30768__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30768__auto____1.call(this,state_31260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30768__auto____0;
cljs$core$async$state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30768__auto____1;
return cljs$core$async$state_machine__30768__auto__;
})()
;})(switch__30767__auto__,c__30995__auto___33287))
})();
var state__30997__auto__ = (function (){var statearr_31282 = (f__30996__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30996__auto__.cljs$core$IFn$_invoke$arity$0() : f__30996__auto__.call(null));
(statearr_31282[(6)] = c__30995__auto___33287);

return statearr_31282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30997__auto__);
});})(c__30995__auto___33287))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__31284){
var vec__31285 = p__31284;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31285,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31285,(1),null);
var job = vec__31285;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30995__auto___33344 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30995__auto___33344,res,vec__31285,v,p,job,jobs,results){
return (function (){
var f__30996__auto__ = (function (){var switch__30767__auto__ = ((function (c__30995__auto___33344,res,vec__31285,v,p,job,jobs,results){
return (function (state_31292){
var state_val_31293 = (state_31292[(1)]);
if((state_val_31293 === (1))){
var state_31292__$1 = state_31292;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31292__$1,(2),res,v);
} else {
if((state_val_31293 === (2))){
var inst_31289 = (state_31292[(2)]);
var inst_31290 = cljs.core.async.close_BANG_(res);
var state_31292__$1 = (function (){var statearr_31294 = state_31292;
(statearr_31294[(7)] = inst_31289);

return statearr_31294;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31292__$1,inst_31290);
} else {
return null;
}
}
});})(c__30995__auto___33344,res,vec__31285,v,p,job,jobs,results))
;
return ((function (switch__30767__auto__,c__30995__auto___33344,res,vec__31285,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____0 = (function (){
var statearr_31295 = [null,null,null,null,null,null,null,null];
(statearr_31295[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__);

(statearr_31295[(1)] = (1));

return statearr_31295;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____1 = (function (state_31292){
while(true){
var ret_value__30769__auto__ = (function (){try{while(true){
var result__30770__auto__ = switch__30767__auto__(state_31292);
if(cljs.core.keyword_identical_QMARK_(result__30770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30770__auto__;
}
break;
}
}catch (e31296){if((e31296 instanceof Object)){
var ex__30771__auto__ = e31296;
var statearr_31297_33361 = state_31292;
(statearr_31297_33361[(5)] = ex__30771__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31296;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33375 = state_31292;
state_31292 = G__33375;
continue;
} else {
return ret_value__30769__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__ = function(state_31292){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____1.call(this,state_31292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__;
})()
;})(switch__30767__auto__,c__30995__auto___33344,res,vec__31285,v,p,job,jobs,results))
})();
var state__30997__auto__ = (function (){var statearr_31298 = (f__30996__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30996__auto__.cljs$core$IFn$_invoke$arity$0() : f__30996__auto__.call(null));
(statearr_31298[(6)] = c__30995__auto___33344);

return statearr_31298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30997__auto__);
});})(c__30995__auto___33344,res,vec__31285,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31299){
var vec__31300 = p__31299;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31300,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31300,(1),null);
var job = vec__31300;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___33378 = n;
var __33379 = (0);
while(true){
if((__33379 < n__4607__auto___33378)){
var G__31303_33380 = type;
var G__31303_33381__$1 = (((G__31303_33380 instanceof cljs.core.Keyword))?G__31303_33380.fqn:null);
switch (G__31303_33381__$1) {
case "compute":
var c__30995__auto___33383 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33379,c__30995__auto___33383,G__31303_33380,G__31303_33381__$1,n__4607__auto___33378,jobs,results,process,async){
return (function (){
var f__30996__auto__ = (function (){var switch__30767__auto__ = ((function (__33379,c__30995__auto___33383,G__31303_33380,G__31303_33381__$1,n__4607__auto___33378,jobs,results,process,async){
return (function (state_31317){
var state_val_31318 = (state_31317[(1)]);
if((state_val_31318 === (1))){
var state_31317__$1 = state_31317;
var statearr_31319_33384 = state_31317__$1;
(statearr_31319_33384[(2)] = null);

(statearr_31319_33384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31318 === (2))){
var state_31317__$1 = state_31317;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31317__$1,(4),jobs);
} else {
if((state_val_31318 === (3))){
var inst_31315 = (state_31317[(2)]);
var state_31317__$1 = state_31317;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31317__$1,inst_31315);
} else {
if((state_val_31318 === (4))){
var inst_31307 = (state_31317[(2)]);
var inst_31308 = process(inst_31307);
var state_31317__$1 = state_31317;
if(cljs.core.truth_(inst_31308)){
var statearr_31320_33385 = state_31317__$1;
(statearr_31320_33385[(1)] = (5));

} else {
var statearr_31321_33386 = state_31317__$1;
(statearr_31321_33386[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31318 === (5))){
var state_31317__$1 = state_31317;
var statearr_31322_33387 = state_31317__$1;
(statearr_31322_33387[(2)] = null);

(statearr_31322_33387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31318 === (6))){
var state_31317__$1 = state_31317;
var statearr_31323_33388 = state_31317__$1;
(statearr_31323_33388[(2)] = null);

(statearr_31323_33388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31318 === (7))){
var inst_31313 = (state_31317[(2)]);
var state_31317__$1 = state_31317;
var statearr_31324_33389 = state_31317__$1;
(statearr_31324_33389[(2)] = inst_31313);

(statearr_31324_33389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33379,c__30995__auto___33383,G__31303_33380,G__31303_33381__$1,n__4607__auto___33378,jobs,results,process,async))
;
return ((function (__33379,switch__30767__auto__,c__30995__auto___33383,G__31303_33380,G__31303_33381__$1,n__4607__auto___33378,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____0 = (function (){
var statearr_31325 = [null,null,null,null,null,null,null];
(statearr_31325[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__);

(statearr_31325[(1)] = (1));

return statearr_31325;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____1 = (function (state_31317){
while(true){
var ret_value__30769__auto__ = (function (){try{while(true){
var result__30770__auto__ = switch__30767__auto__(state_31317);
if(cljs.core.keyword_identical_QMARK_(result__30770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30770__auto__;
}
break;
}
}catch (e31326){if((e31326 instanceof Object)){
var ex__30771__auto__ = e31326;
var statearr_31327_33392 = state_31317;
(statearr_31327_33392[(5)] = ex__30771__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31326;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33394 = state_31317;
state_31317 = G__33394;
continue;
} else {
return ret_value__30769__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__ = function(state_31317){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____1.call(this,state_31317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__;
})()
;})(__33379,switch__30767__auto__,c__30995__auto___33383,G__31303_33380,G__31303_33381__$1,n__4607__auto___33378,jobs,results,process,async))
})();
var state__30997__auto__ = (function (){var statearr_31328 = (f__30996__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30996__auto__.cljs$core$IFn$_invoke$arity$0() : f__30996__auto__.call(null));
(statearr_31328[(6)] = c__30995__auto___33383);

return statearr_31328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30997__auto__);
});})(__33379,c__30995__auto___33383,G__31303_33380,G__31303_33381__$1,n__4607__auto___33378,jobs,results,process,async))
);


break;
case "async":
var c__30995__auto___33401 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33379,c__30995__auto___33401,G__31303_33380,G__31303_33381__$1,n__4607__auto___33378,jobs,results,process,async){
return (function (){
var f__30996__auto__ = (function (){var switch__30767__auto__ = ((function (__33379,c__30995__auto___33401,G__31303_33380,G__31303_33381__$1,n__4607__auto___33378,jobs,results,process,async){
return (function (state_31341){
var state_val_31342 = (state_31341[(1)]);
if((state_val_31342 === (1))){
var state_31341__$1 = state_31341;
var statearr_31343_33402 = state_31341__$1;
(statearr_31343_33402[(2)] = null);

(statearr_31343_33402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31342 === (2))){
var state_31341__$1 = state_31341;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31341__$1,(4),jobs);
} else {
if((state_val_31342 === (3))){
var inst_31339 = (state_31341[(2)]);
var state_31341__$1 = state_31341;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31341__$1,inst_31339);
} else {
if((state_val_31342 === (4))){
var inst_31331 = (state_31341[(2)]);
var inst_31332 = async(inst_31331);
var state_31341__$1 = state_31341;
if(cljs.core.truth_(inst_31332)){
var statearr_31345_33407 = state_31341__$1;
(statearr_31345_33407[(1)] = (5));

} else {
var statearr_31346_33408 = state_31341__$1;
(statearr_31346_33408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31342 === (5))){
var state_31341__$1 = state_31341;
var statearr_31347_33411 = state_31341__$1;
(statearr_31347_33411[(2)] = null);

(statearr_31347_33411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31342 === (6))){
var state_31341__$1 = state_31341;
var statearr_31348_33414 = state_31341__$1;
(statearr_31348_33414[(2)] = null);

(statearr_31348_33414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31342 === (7))){
var inst_31337 = (state_31341[(2)]);
var state_31341__$1 = state_31341;
var statearr_31349_33415 = state_31341__$1;
(statearr_31349_33415[(2)] = inst_31337);

(statearr_31349_33415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33379,c__30995__auto___33401,G__31303_33380,G__31303_33381__$1,n__4607__auto___33378,jobs,results,process,async))
;
return ((function (__33379,switch__30767__auto__,c__30995__auto___33401,G__31303_33380,G__31303_33381__$1,n__4607__auto___33378,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____0 = (function (){
var statearr_31350 = [null,null,null,null,null,null,null];
(statearr_31350[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__);

(statearr_31350[(1)] = (1));

return statearr_31350;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____1 = (function (state_31341){
while(true){
var ret_value__30769__auto__ = (function (){try{while(true){
var result__30770__auto__ = switch__30767__auto__(state_31341);
if(cljs.core.keyword_identical_QMARK_(result__30770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30770__auto__;
}
break;
}
}catch (e31351){if((e31351 instanceof Object)){
var ex__30771__auto__ = e31351;
var statearr_31352_33423 = state_31341;
(statearr_31352_33423[(5)] = ex__30771__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31351;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33430 = state_31341;
state_31341 = G__33430;
continue;
} else {
return ret_value__30769__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__ = function(state_31341){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____1.call(this,state_31341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__;
})()
;})(__33379,switch__30767__auto__,c__30995__auto___33401,G__31303_33380,G__31303_33381__$1,n__4607__auto___33378,jobs,results,process,async))
})();
var state__30997__auto__ = (function (){var statearr_31353 = (f__30996__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30996__auto__.cljs$core$IFn$_invoke$arity$0() : f__30996__auto__.call(null));
(statearr_31353[(6)] = c__30995__auto___33401);

return statearr_31353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30997__auto__);
});})(__33379,c__30995__auto___33401,G__31303_33380,G__31303_33381__$1,n__4607__auto___33378,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31303_33381__$1)].join('')));

}

var G__33431 = (__33379 + (1));
__33379 = G__33431;
continue;
} else {
}
break;
}

var c__30995__auto___33432 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30995__auto___33432,jobs,results,process,async){
return (function (){
var f__30996__auto__ = (function (){var switch__30767__auto__ = ((function (c__30995__auto___33432,jobs,results,process,async){
return (function (state_31375){
var state_val_31376 = (state_31375[(1)]);
if((state_val_31376 === (7))){
var inst_31371 = (state_31375[(2)]);
var state_31375__$1 = state_31375;
var statearr_31377_33433 = state_31375__$1;
(statearr_31377_33433[(2)] = inst_31371);

(statearr_31377_33433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (1))){
var state_31375__$1 = state_31375;
var statearr_31378_33434 = state_31375__$1;
(statearr_31378_33434[(2)] = null);

(statearr_31378_33434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (4))){
var inst_31356 = (state_31375[(7)]);
var inst_31356__$1 = (state_31375[(2)]);
var inst_31357 = (inst_31356__$1 == null);
var state_31375__$1 = (function (){var statearr_31379 = state_31375;
(statearr_31379[(7)] = inst_31356__$1);

return statearr_31379;
})();
if(cljs.core.truth_(inst_31357)){
var statearr_31380_33435 = state_31375__$1;
(statearr_31380_33435[(1)] = (5));

} else {
var statearr_31381_33436 = state_31375__$1;
(statearr_31381_33436[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (6))){
var inst_31356 = (state_31375[(7)]);
var inst_31361 = (state_31375[(8)]);
var inst_31361__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31362 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31363 = [inst_31356,inst_31361__$1];
var inst_31364 = (new cljs.core.PersistentVector(null,2,(5),inst_31362,inst_31363,null));
var state_31375__$1 = (function (){var statearr_31382 = state_31375;
(statearr_31382[(8)] = inst_31361__$1);

return statearr_31382;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31375__$1,(8),jobs,inst_31364);
} else {
if((state_val_31376 === (3))){
var inst_31373 = (state_31375[(2)]);
var state_31375__$1 = state_31375;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31375__$1,inst_31373);
} else {
if((state_val_31376 === (2))){
var state_31375__$1 = state_31375;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31375__$1,(4),from);
} else {
if((state_val_31376 === (9))){
var inst_31368 = (state_31375[(2)]);
var state_31375__$1 = (function (){var statearr_31384 = state_31375;
(statearr_31384[(9)] = inst_31368);

return statearr_31384;
})();
var statearr_31385_33448 = state_31375__$1;
(statearr_31385_33448[(2)] = null);

(statearr_31385_33448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (5))){
var inst_31359 = cljs.core.async.close_BANG_(jobs);
var state_31375__$1 = state_31375;
var statearr_31386_33450 = state_31375__$1;
(statearr_31386_33450[(2)] = inst_31359);

(statearr_31386_33450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31376 === (8))){
var inst_31361 = (state_31375[(8)]);
var inst_31366 = (state_31375[(2)]);
var state_31375__$1 = (function (){var statearr_31387 = state_31375;
(statearr_31387[(10)] = inst_31366);

return statearr_31387;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31375__$1,(9),results,inst_31361);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__30995__auto___33432,jobs,results,process,async))
;
return ((function (switch__30767__auto__,c__30995__auto___33432,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____0 = (function (){
var statearr_31388 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31388[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__);

(statearr_31388[(1)] = (1));

return statearr_31388;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____1 = (function (state_31375){
while(true){
var ret_value__30769__auto__ = (function (){try{while(true){
var result__30770__auto__ = switch__30767__auto__(state_31375);
if(cljs.core.keyword_identical_QMARK_(result__30770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30770__auto__;
}
break;
}
}catch (e31389){if((e31389 instanceof Object)){
var ex__30771__auto__ = e31389;
var statearr_31390_33460 = state_31375;
(statearr_31390_33460[(5)] = ex__30771__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31389;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33462 = state_31375;
state_31375 = G__33462;
continue;
} else {
return ret_value__30769__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__ = function(state_31375){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____1.call(this,state_31375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__;
})()
;})(switch__30767__auto__,c__30995__auto___33432,jobs,results,process,async))
})();
var state__30997__auto__ = (function (){var statearr_31391 = (f__30996__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30996__auto__.cljs$core$IFn$_invoke$arity$0() : f__30996__auto__.call(null));
(statearr_31391[(6)] = c__30995__auto___33432);

return statearr_31391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30997__auto__);
});})(c__30995__auto___33432,jobs,results,process,async))
);


var c__30995__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30995__auto__,jobs,results,process,async){
return (function (){
var f__30996__auto__ = (function (){var switch__30767__auto__ = ((function (c__30995__auto__,jobs,results,process,async){
return (function (state_31429){
var state_val_31430 = (state_31429[(1)]);
if((state_val_31430 === (7))){
var inst_31425 = (state_31429[(2)]);
var state_31429__$1 = state_31429;
var statearr_31431_33464 = state_31429__$1;
(statearr_31431_33464[(2)] = inst_31425);

(statearr_31431_33464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (20))){
var state_31429__$1 = state_31429;
var statearr_31432_33469 = state_31429__$1;
(statearr_31432_33469[(2)] = null);

(statearr_31432_33469[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (1))){
var state_31429__$1 = state_31429;
var statearr_31433_33472 = state_31429__$1;
(statearr_31433_33472[(2)] = null);

(statearr_31433_33472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (4))){
var inst_31394 = (state_31429[(7)]);
var inst_31394__$1 = (state_31429[(2)]);
var inst_31395 = (inst_31394__$1 == null);
var state_31429__$1 = (function (){var statearr_31437 = state_31429;
(statearr_31437[(7)] = inst_31394__$1);

return statearr_31437;
})();
if(cljs.core.truth_(inst_31395)){
var statearr_31438_33473 = state_31429__$1;
(statearr_31438_33473[(1)] = (5));

} else {
var statearr_31439_33474 = state_31429__$1;
(statearr_31439_33474[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (15))){
var inst_31407 = (state_31429[(8)]);
var state_31429__$1 = state_31429;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31429__$1,(18),to,inst_31407);
} else {
if((state_val_31430 === (21))){
var inst_31420 = (state_31429[(2)]);
var state_31429__$1 = state_31429;
var statearr_31440_33481 = state_31429__$1;
(statearr_31440_33481[(2)] = inst_31420);

(statearr_31440_33481[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (13))){
var inst_31422 = (state_31429[(2)]);
var state_31429__$1 = (function (){var statearr_31441 = state_31429;
(statearr_31441[(9)] = inst_31422);

return statearr_31441;
})();
var statearr_31442_33482 = state_31429__$1;
(statearr_31442_33482[(2)] = null);

(statearr_31442_33482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (6))){
var inst_31394 = (state_31429[(7)]);
var state_31429__$1 = state_31429;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31429__$1,(11),inst_31394);
} else {
if((state_val_31430 === (17))){
var inst_31415 = (state_31429[(2)]);
var state_31429__$1 = state_31429;
if(cljs.core.truth_(inst_31415)){
var statearr_31443_33502 = state_31429__$1;
(statearr_31443_33502[(1)] = (19));

} else {
var statearr_31444_33504 = state_31429__$1;
(statearr_31444_33504[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (3))){
var inst_31427 = (state_31429[(2)]);
var state_31429__$1 = state_31429;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31429__$1,inst_31427);
} else {
if((state_val_31430 === (12))){
var inst_31404 = (state_31429[(10)]);
var state_31429__$1 = state_31429;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31429__$1,(14),inst_31404);
} else {
if((state_val_31430 === (2))){
var state_31429__$1 = state_31429;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31429__$1,(4),results);
} else {
if((state_val_31430 === (19))){
var state_31429__$1 = state_31429;
var statearr_31445_33507 = state_31429__$1;
(statearr_31445_33507[(2)] = null);

(statearr_31445_33507[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (11))){
var inst_31404 = (state_31429[(2)]);
var state_31429__$1 = (function (){var statearr_31446 = state_31429;
(statearr_31446[(10)] = inst_31404);

return statearr_31446;
})();
var statearr_31447_33509 = state_31429__$1;
(statearr_31447_33509[(2)] = null);

(statearr_31447_33509[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (9))){
var state_31429__$1 = state_31429;
var statearr_31448_33510 = state_31429__$1;
(statearr_31448_33510[(2)] = null);

(statearr_31448_33510[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (5))){
var state_31429__$1 = state_31429;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31449_33515 = state_31429__$1;
(statearr_31449_33515[(1)] = (8));

} else {
var statearr_31450_33516 = state_31429__$1;
(statearr_31450_33516[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (14))){
var inst_31409 = (state_31429[(11)]);
var inst_31407 = (state_31429[(8)]);
var inst_31407__$1 = (state_31429[(2)]);
var inst_31408 = (inst_31407__$1 == null);
var inst_31409__$1 = cljs.core.not(inst_31408);
var state_31429__$1 = (function (){var statearr_31453 = state_31429;
(statearr_31453[(11)] = inst_31409__$1);

(statearr_31453[(8)] = inst_31407__$1);

return statearr_31453;
})();
if(inst_31409__$1){
var statearr_31454_33517 = state_31429__$1;
(statearr_31454_33517[(1)] = (15));

} else {
var statearr_31455_33518 = state_31429__$1;
(statearr_31455_33518[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (16))){
var inst_31409 = (state_31429[(11)]);
var state_31429__$1 = state_31429;
var statearr_31459_33519 = state_31429__$1;
(statearr_31459_33519[(2)] = inst_31409);

(statearr_31459_33519[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (10))){
var inst_31401 = (state_31429[(2)]);
var state_31429__$1 = state_31429;
var statearr_31460_33520 = state_31429__$1;
(statearr_31460_33520[(2)] = inst_31401);

(statearr_31460_33520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (18))){
var inst_31412 = (state_31429[(2)]);
var state_31429__$1 = state_31429;
var statearr_31461_33521 = state_31429__$1;
(statearr_31461_33521[(2)] = inst_31412);

(statearr_31461_33521[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (8))){
var inst_31398 = cljs.core.async.close_BANG_(to);
var state_31429__$1 = state_31429;
var statearr_31462_33522 = state_31429__$1;
(statearr_31462_33522[(2)] = inst_31398);

(statearr_31462_33522[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30995__auto__,jobs,results,process,async))
;
return ((function (switch__30767__auto__,c__30995__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____0 = (function (){
var statearr_31463 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31463[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__);

(statearr_31463[(1)] = (1));

return statearr_31463;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____1 = (function (state_31429){
while(true){
var ret_value__30769__auto__ = (function (){try{while(true){
var result__30770__auto__ = switch__30767__auto__(state_31429);
if(cljs.core.keyword_identical_QMARK_(result__30770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30770__auto__;
}
break;
}
}catch (e31464){if((e31464 instanceof Object)){
var ex__30771__auto__ = e31464;
var statearr_31465_33525 = state_31429;
(statearr_31465_33525[(5)] = ex__30771__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31464;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33526 = state_31429;
state_31429 = G__33526;
continue;
} else {
return ret_value__30769__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__ = function(state_31429){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____1.call(this,state_31429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30768__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30768__auto__;
})()
;})(switch__30767__auto__,c__30995__auto__,jobs,results,process,async))
})();
var state__30997__auto__ = (function (){var statearr_31468 = (f__30996__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30996__auto__.cljs$core$IFn$_invoke$arity$0() : f__30996__auto__.call(null));
(statearr_31468[(6)] = c__30995__auto__);

return statearr_31468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30997__auto__);
});})(c__30995__auto__,jobs,results,process,async))
);

return c__30995__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__31473 = arguments.length;
switch (G__31473) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__31490 = arguments.length;
switch (G__31490) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__31492 = arguments.length;
switch (G__31492) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30995__auto___33564 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30995__auto___33564,tc,fc){
return (function (){
var f__30996__auto__ = (function (){var switch__30767__auto__ = ((function (c__30995__auto___33564,tc,fc){
return (function (state_31518){
var state_val_31519 = (state_31518[(1)]);
if((state_val_31519 === (7))){
var inst_31514 = (state_31518[(2)]);
var state_31518__$1 = state_31518;
var statearr_31520_33566 = state_31518__$1;
(statearr_31520_33566[(2)] = inst_31514);

(statearr_31520_33566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (1))){
var state_31518__$1 = state_31518;
var statearr_31521_33567 = state_31518__$1;
(statearr_31521_33567[(2)] = null);

(statearr_31521_33567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (4))){
var inst_31495 = (state_31518[(7)]);
var inst_31495__$1 = (state_31518[(2)]);
var inst_31496 = (inst_31495__$1 == null);
var state_31518__$1 = (function (){var statearr_31522 = state_31518;
(statearr_31522[(7)] = inst_31495__$1);

return statearr_31522;
})();
if(cljs.core.truth_(inst_31496)){
var statearr_31523_33572 = state_31518__$1;
(statearr_31523_33572[(1)] = (5));

} else {
var statearr_31524_33573 = state_31518__$1;
(statearr_31524_33573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (13))){
var state_31518__$1 = state_31518;
var statearr_31525_33574 = state_31518__$1;
(statearr_31525_33574[(2)] = null);

(statearr_31525_33574[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (6))){
var inst_31495 = (state_31518[(7)]);
var inst_31501 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31495) : p.call(null,inst_31495));
var state_31518__$1 = state_31518;
if(cljs.core.truth_(inst_31501)){
var statearr_31526_33575 = state_31518__$1;
(statearr_31526_33575[(1)] = (9));

} else {
var statearr_31527_33576 = state_31518__$1;
(statearr_31527_33576[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (3))){
var inst_31516 = (state_31518[(2)]);
var state_31518__$1 = state_31518;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31518__$1,inst_31516);
} else {
if((state_val_31519 === (12))){
var state_31518__$1 = state_31518;
var statearr_31528_33577 = state_31518__$1;
(statearr_31528_33577[(2)] = null);

(statearr_31528_33577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (2))){
var state_31518__$1 = state_31518;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31518__$1,(4),ch);
} else {
if((state_val_31519 === (11))){
var inst_31495 = (state_31518[(7)]);
var inst_31505 = (state_31518[(2)]);
var state_31518__$1 = state_31518;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31518__$1,(8),inst_31505,inst_31495);
} else {
if((state_val_31519 === (9))){
var state_31518__$1 = state_31518;
var statearr_31531_33578 = state_31518__$1;
(statearr_31531_33578[(2)] = tc);

(statearr_31531_33578[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (5))){
var inst_31498 = cljs.core.async.close_BANG_(tc);
var inst_31499 = cljs.core.async.close_BANG_(fc);
var state_31518__$1 = (function (){var statearr_31532 = state_31518;
(statearr_31532[(8)] = inst_31498);

return statearr_31532;
})();
var statearr_31533_33579 = state_31518__$1;
(statearr_31533_33579[(2)] = inst_31499);

(statearr_31533_33579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (14))){
var inst_31512 = (state_31518[(2)]);
var state_31518__$1 = state_31518;
var statearr_31534_33580 = state_31518__$1;
(statearr_31534_33580[(2)] = inst_31512);

(statearr_31534_33580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (10))){
var state_31518__$1 = state_31518;
var statearr_31535_33585 = state_31518__$1;
(statearr_31535_33585[(2)] = fc);

(statearr_31535_33585[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31519 === (8))){
var inst_31507 = (state_31518[(2)]);
var state_31518__$1 = state_31518;
if(cljs.core.truth_(inst_31507)){
var statearr_31536_33589 = state_31518__$1;
(statearr_31536_33589[(1)] = (12));

} else {
var statearr_31537_33590 = state_31518__$1;
(statearr_31537_33590[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30995__auto___33564,tc,fc))
;
return ((function (switch__30767__auto__,c__30995__auto___33564,tc,fc){
return (function() {
var cljs$core$async$state_machine__30768__auto__ = null;
var cljs$core$async$state_machine__30768__auto____0 = (function (){
var statearr_31538 = [null,null,null,null,null,null,null,null,null];
(statearr_31538[(0)] = cljs$core$async$state_machine__30768__auto__);

(statearr_31538[(1)] = (1));

return statearr_31538;
});
var cljs$core$async$state_machine__30768__auto____1 = (function (state_31518){
while(true){
var ret_value__30769__auto__ = (function (){try{while(true){
var result__30770__auto__ = switch__30767__auto__(state_31518);
if(cljs.core.keyword_identical_QMARK_(result__30770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30770__auto__;
}
break;
}
}catch (e31539){if((e31539 instanceof Object)){
var ex__30771__auto__ = e31539;
var statearr_31540_33594 = state_31518;
(statearr_31540_33594[(5)] = ex__30771__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31539;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33595 = state_31518;
state_31518 = G__33595;
continue;
} else {
return ret_value__30769__auto__;
}
break;
}
});
cljs$core$async$state_machine__30768__auto__ = function(state_31518){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30768__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30768__auto____1.call(this,state_31518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30768__auto____0;
cljs$core$async$state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30768__auto____1;
return cljs$core$async$state_machine__30768__auto__;
})()
;})(switch__30767__auto__,c__30995__auto___33564,tc,fc))
})();
var state__30997__auto__ = (function (){var statearr_31541 = (f__30996__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30996__auto__.cljs$core$IFn$_invoke$arity$0() : f__30996__auto__.call(null));
(statearr_31541[(6)] = c__30995__auto___33564);

return statearr_31541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30997__auto__);
});})(c__30995__auto___33564,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30995__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30995__auto__){
return (function (){
var f__30996__auto__ = (function (){var switch__30767__auto__ = ((function (c__30995__auto__){
return (function (state_31563){
var state_val_31564 = (state_31563[(1)]);
if((state_val_31564 === (7))){
var inst_31559 = (state_31563[(2)]);
var state_31563__$1 = state_31563;
var statearr_31565_33602 = state_31563__$1;
(statearr_31565_33602[(2)] = inst_31559);

(statearr_31565_33602[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (1))){
var inst_31543 = init;
var state_31563__$1 = (function (){var statearr_31566 = state_31563;
(statearr_31566[(7)] = inst_31543);

return statearr_31566;
})();
var statearr_31567_33604 = state_31563__$1;
(statearr_31567_33604[(2)] = null);

(statearr_31567_33604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (4))){
var inst_31546 = (state_31563[(8)]);
var inst_31546__$1 = (state_31563[(2)]);
var inst_31547 = (inst_31546__$1 == null);
var state_31563__$1 = (function (){var statearr_31568 = state_31563;
(statearr_31568[(8)] = inst_31546__$1);

return statearr_31568;
})();
if(cljs.core.truth_(inst_31547)){
var statearr_31569_33608 = state_31563__$1;
(statearr_31569_33608[(1)] = (5));

} else {
var statearr_31570_33609 = state_31563__$1;
(statearr_31570_33609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (6))){
var inst_31543 = (state_31563[(7)]);
var inst_31546 = (state_31563[(8)]);
var inst_31550 = (state_31563[(9)]);
var inst_31550__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31543,inst_31546) : f.call(null,inst_31543,inst_31546));
var inst_31551 = cljs.core.reduced_QMARK_(inst_31550__$1);
var state_31563__$1 = (function (){var statearr_31573 = state_31563;
(statearr_31573[(9)] = inst_31550__$1);

return statearr_31573;
})();
if(inst_31551){
var statearr_31574_33610 = state_31563__$1;
(statearr_31574_33610[(1)] = (8));

} else {
var statearr_31575_33611 = state_31563__$1;
(statearr_31575_33611[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (3))){
var inst_31561 = (state_31563[(2)]);
var state_31563__$1 = state_31563;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31563__$1,inst_31561);
} else {
if((state_val_31564 === (2))){
var state_31563__$1 = state_31563;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31563__$1,(4),ch);
} else {
if((state_val_31564 === (9))){
var inst_31550 = (state_31563[(9)]);
var inst_31543 = inst_31550;
var state_31563__$1 = (function (){var statearr_31576 = state_31563;
(statearr_31576[(7)] = inst_31543);

return statearr_31576;
})();
var statearr_31577_33629 = state_31563__$1;
(statearr_31577_33629[(2)] = null);

(statearr_31577_33629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (5))){
var inst_31543 = (state_31563[(7)]);
var state_31563__$1 = state_31563;
var statearr_31578_33635 = state_31563__$1;
(statearr_31578_33635[(2)] = inst_31543);

(statearr_31578_33635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (10))){
var inst_31557 = (state_31563[(2)]);
var state_31563__$1 = state_31563;
var statearr_31579_33636 = state_31563__$1;
(statearr_31579_33636[(2)] = inst_31557);

(statearr_31579_33636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31564 === (8))){
var inst_31550 = (state_31563[(9)]);
var inst_31553 = cljs.core.deref(inst_31550);
var state_31563__$1 = state_31563;
var statearr_31585_33637 = state_31563__$1;
(statearr_31585_33637[(2)] = inst_31553);

(statearr_31585_33637[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__30995__auto__))
;
return ((function (switch__30767__auto__,c__30995__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30768__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30768__auto____0 = (function (){
var statearr_31586 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31586[(0)] = cljs$core$async$reduce_$_state_machine__30768__auto__);

(statearr_31586[(1)] = (1));

return statearr_31586;
});
var cljs$core$async$reduce_$_state_machine__30768__auto____1 = (function (state_31563){
while(true){
var ret_value__30769__auto__ = (function (){try{while(true){
var result__30770__auto__ = switch__30767__auto__(state_31563);
if(cljs.core.keyword_identical_QMARK_(result__30770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30770__auto__;
}
break;
}
}catch (e31593){if((e31593 instanceof Object)){
var ex__30771__auto__ = e31593;
var statearr_31599_33638 = state_31563;
(statearr_31599_33638[(5)] = ex__30771__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31593;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33639 = state_31563;
state_31563 = G__33639;
continue;
} else {
return ret_value__30769__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30768__auto__ = function(state_31563){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30768__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30768__auto____1.call(this,state_31563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30768__auto____0;
cljs$core$async$reduce_$_state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30768__auto____1;
return cljs$core$async$reduce_$_state_machine__30768__auto__;
})()
;})(switch__30767__auto__,c__30995__auto__))
})();
var state__30997__auto__ = (function (){var statearr_31601 = (f__30996__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30996__auto__.cljs$core$IFn$_invoke$arity$0() : f__30996__auto__.call(null));
(statearr_31601[(6)] = c__30995__auto__);

return statearr_31601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30997__auto__);
});})(c__30995__auto__))
);

return c__30995__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30995__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30995__auto__,f__$1){
return (function (){
var f__30996__auto__ = (function (){var switch__30767__auto__ = ((function (c__30995__auto__,f__$1){
return (function (state_31611){
var state_val_31612 = (state_31611[(1)]);
if((state_val_31612 === (1))){
var inst_31606 = cljs.core.async.reduce(f__$1,init,ch);
var state_31611__$1 = state_31611;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31611__$1,(2),inst_31606);
} else {
if((state_val_31612 === (2))){
var inst_31608 = (state_31611[(2)]);
var inst_31609 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31608) : f__$1.call(null,inst_31608));
var state_31611__$1 = state_31611;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31611__$1,inst_31609);
} else {
return null;
}
}
});})(c__30995__auto__,f__$1))
;
return ((function (switch__30767__auto__,c__30995__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__30768__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30768__auto____0 = (function (){
var statearr_31613 = [null,null,null,null,null,null,null];
(statearr_31613[(0)] = cljs$core$async$transduce_$_state_machine__30768__auto__);

(statearr_31613[(1)] = (1));

return statearr_31613;
});
var cljs$core$async$transduce_$_state_machine__30768__auto____1 = (function (state_31611){
while(true){
var ret_value__30769__auto__ = (function (){try{while(true){
var result__30770__auto__ = switch__30767__auto__(state_31611);
if(cljs.core.keyword_identical_QMARK_(result__30770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30770__auto__;
}
break;
}
}catch (e31614){if((e31614 instanceof Object)){
var ex__30771__auto__ = e31614;
var statearr_31615_33644 = state_31611;
(statearr_31615_33644[(5)] = ex__30771__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31614;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33645 = state_31611;
state_31611 = G__33645;
continue;
} else {
return ret_value__30769__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30768__auto__ = function(state_31611){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30768__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30768__auto____1.call(this,state_31611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30768__auto____0;
cljs$core$async$transduce_$_state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30768__auto____1;
return cljs$core$async$transduce_$_state_machine__30768__auto__;
})()
;})(switch__30767__auto__,c__30995__auto__,f__$1))
})();
var state__30997__auto__ = (function (){var statearr_31616 = (f__30996__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30996__auto__.cljs$core$IFn$_invoke$arity$0() : f__30996__auto__.call(null));
(statearr_31616[(6)] = c__30995__auto__);

return statearr_31616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30997__auto__);
});})(c__30995__auto__,f__$1))
);

return c__30995__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31618 = arguments.length;
switch (G__31618) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30995__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30995__auto__){
return (function (){
var f__30996__auto__ = (function (){var switch__30767__auto__ = ((function (c__30995__auto__){
return (function (state_31643){
var state_val_31644 = (state_31643[(1)]);
if((state_val_31644 === (7))){
var inst_31625 = (state_31643[(2)]);
var state_31643__$1 = state_31643;
var statearr_31646_33647 = state_31643__$1;
(statearr_31646_33647[(2)] = inst_31625);

(statearr_31646_33647[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (1))){
var inst_31619 = cljs.core.seq(coll);
var inst_31620 = inst_31619;
var state_31643__$1 = (function (){var statearr_31649 = state_31643;
(statearr_31649[(7)] = inst_31620);

return statearr_31649;
})();
var statearr_31650_33652 = state_31643__$1;
(statearr_31650_33652[(2)] = null);

(statearr_31650_33652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (4))){
var inst_31620 = (state_31643[(7)]);
var inst_31623 = cljs.core.first(inst_31620);
var state_31643__$1 = state_31643;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31643__$1,(7),ch,inst_31623);
} else {
if((state_val_31644 === (13))){
var inst_31637 = (state_31643[(2)]);
var state_31643__$1 = state_31643;
var statearr_31651_33653 = state_31643__$1;
(statearr_31651_33653[(2)] = inst_31637);

(statearr_31651_33653[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (6))){
var inst_31628 = (state_31643[(2)]);
var state_31643__$1 = state_31643;
if(cljs.core.truth_(inst_31628)){
var statearr_31652_33654 = state_31643__$1;
(statearr_31652_33654[(1)] = (8));

} else {
var statearr_31653_33655 = state_31643__$1;
(statearr_31653_33655[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (3))){
var inst_31641 = (state_31643[(2)]);
var state_31643__$1 = state_31643;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31643__$1,inst_31641);
} else {
if((state_val_31644 === (12))){
var state_31643__$1 = state_31643;
var statearr_31657_33656 = state_31643__$1;
(statearr_31657_33656[(2)] = null);

(statearr_31657_33656[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (2))){
var inst_31620 = (state_31643[(7)]);
var state_31643__$1 = state_31643;
if(cljs.core.truth_(inst_31620)){
var statearr_31660_33657 = state_31643__$1;
(statearr_31660_33657[(1)] = (4));

} else {
var statearr_31661_33658 = state_31643__$1;
(statearr_31661_33658[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (11))){
var inst_31634 = cljs.core.async.close_BANG_(ch);
var state_31643__$1 = state_31643;
var statearr_31662_33659 = state_31643__$1;
(statearr_31662_33659[(2)] = inst_31634);

(statearr_31662_33659[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (9))){
var state_31643__$1 = state_31643;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31663_33664 = state_31643__$1;
(statearr_31663_33664[(1)] = (11));

} else {
var statearr_31664_33665 = state_31643__$1;
(statearr_31664_33665[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (5))){
var inst_31620 = (state_31643[(7)]);
var state_31643__$1 = state_31643;
var statearr_31665_33667 = state_31643__$1;
(statearr_31665_33667[(2)] = inst_31620);

(statearr_31665_33667[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (10))){
var inst_31639 = (state_31643[(2)]);
var state_31643__$1 = state_31643;
var statearr_31666_33668 = state_31643__$1;
(statearr_31666_33668[(2)] = inst_31639);

(statearr_31666_33668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31644 === (8))){
var inst_31620 = (state_31643[(7)]);
var inst_31630 = cljs.core.next(inst_31620);
var inst_31620__$1 = inst_31630;
var state_31643__$1 = (function (){var statearr_31667 = state_31643;
(statearr_31667[(7)] = inst_31620__$1);

return statearr_31667;
})();
var statearr_31668_33669 = state_31643__$1;
(statearr_31668_33669[(2)] = null);

(statearr_31668_33669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30995__auto__))
;
return ((function (switch__30767__auto__,c__30995__auto__){
return (function() {
var cljs$core$async$state_machine__30768__auto__ = null;
var cljs$core$async$state_machine__30768__auto____0 = (function (){
var statearr_31669 = [null,null,null,null,null,null,null,null];
(statearr_31669[(0)] = cljs$core$async$state_machine__30768__auto__);

(statearr_31669[(1)] = (1));

return statearr_31669;
});
var cljs$core$async$state_machine__30768__auto____1 = (function (state_31643){
while(true){
var ret_value__30769__auto__ = (function (){try{while(true){
var result__30770__auto__ = switch__30767__auto__(state_31643);
if(cljs.core.keyword_identical_QMARK_(result__30770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30770__auto__;
}
break;
}
}catch (e31670){if((e31670 instanceof Object)){
var ex__30771__auto__ = e31670;
var statearr_31671_33670 = state_31643;
(statearr_31671_33670[(5)] = ex__30771__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31670;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33671 = state_31643;
state_31643 = G__33671;
continue;
} else {
return ret_value__30769__auto__;
}
break;
}
});
cljs$core$async$state_machine__30768__auto__ = function(state_31643){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30768__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30768__auto____1.call(this,state_31643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30768__auto____0;
cljs$core$async$state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30768__auto____1;
return cljs$core$async$state_machine__30768__auto__;
})()
;})(switch__30767__auto__,c__30995__auto__))
})();
var state__30997__auto__ = (function (){var statearr_31672 = (f__30996__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30996__auto__.cljs$core$IFn$_invoke$arity$0() : f__30996__auto__.call(null));
(statearr_31672[(6)] = c__30995__auto__);

return statearr_31672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30997__auto__);
});})(c__30995__auto__))
);

return c__30995__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31685 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31685 = (function (ch,cs,meta31686){
this.ch = ch;
this.cs = cs;
this.meta31686 = meta31686;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31687,meta31686__$1){
var self__ = this;
var _31687__$1 = this;
return (new cljs.core.async.t_cljs$core$async31685(self__.ch,self__.cs,meta31686__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31685.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31687){
var self__ = this;
var _31687__$1 = this;
return self__.meta31686;
});})(cs))
;

cljs.core.async.t_cljs$core$async31685.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31685.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31685.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31685.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31685.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31685.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31685.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31686","meta31686",-1666551992,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31685.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31685.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31685";

cljs.core.async.t_cljs$core$async31685.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31685");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31685.
 */
cljs.core.async.__GT_t_cljs$core$async31685 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31685(ch__$1,cs__$1,meta31686){
return (new cljs.core.async.t_cljs$core$async31685(ch__$1,cs__$1,meta31686));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31685(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__30995__auto___33685 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30995__auto___33685,cs,m,dchan,dctr,done){
return (function (){
var f__30996__auto__ = (function (){var switch__30767__auto__ = ((function (c__30995__auto___33685,cs,m,dchan,dctr,done){
return (function (state_31826){
var state_val_31827 = (state_31826[(1)]);
if((state_val_31827 === (7))){
var inst_31822 = (state_31826[(2)]);
var state_31826__$1 = state_31826;
var statearr_31828_33686 = state_31826__$1;
(statearr_31828_33686[(2)] = inst_31822);

(statearr_31828_33686[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (20))){
var inst_31724 = (state_31826[(7)]);
var inst_31736 = cljs.core.first(inst_31724);
var inst_31737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31736,(0),null);
var inst_31738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31736,(1),null);
var state_31826__$1 = (function (){var statearr_31829 = state_31826;
(statearr_31829[(8)] = inst_31737);

return statearr_31829;
})();
if(cljs.core.truth_(inst_31738)){
var statearr_31830_33687 = state_31826__$1;
(statearr_31830_33687[(1)] = (22));

} else {
var statearr_31831_33688 = state_31826__$1;
(statearr_31831_33688[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (27))){
var inst_31773 = (state_31826[(9)]);
var inst_31768 = (state_31826[(10)]);
var inst_31766 = (state_31826[(11)]);
var inst_31693 = (state_31826[(12)]);
var inst_31773__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31766,inst_31768);
var inst_31774 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31773__$1,inst_31693,done);
var state_31826__$1 = (function (){var statearr_31832 = state_31826;
(statearr_31832[(9)] = inst_31773__$1);

return statearr_31832;
})();
if(cljs.core.truth_(inst_31774)){
var statearr_31833_33689 = state_31826__$1;
(statearr_31833_33689[(1)] = (30));

} else {
var statearr_31834_33690 = state_31826__$1;
(statearr_31834_33690[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (1))){
var state_31826__$1 = state_31826;
var statearr_31835_33691 = state_31826__$1;
(statearr_31835_33691[(2)] = null);

(statearr_31835_33691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (24))){
var inst_31724 = (state_31826[(7)]);
var inst_31743 = (state_31826[(2)]);
var inst_31744 = cljs.core.next(inst_31724);
var inst_31702 = inst_31744;
var inst_31703 = null;
var inst_31704 = (0);
var inst_31705 = (0);
var state_31826__$1 = (function (){var statearr_31836 = state_31826;
(statearr_31836[(13)] = inst_31702);

(statearr_31836[(14)] = inst_31704);

(statearr_31836[(15)] = inst_31705);

(statearr_31836[(16)] = inst_31703);

(statearr_31836[(17)] = inst_31743);

return statearr_31836;
})();
var statearr_31837_33695 = state_31826__$1;
(statearr_31837_33695[(2)] = null);

(statearr_31837_33695[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (39))){
var state_31826__$1 = state_31826;
var statearr_31842_33697 = state_31826__$1;
(statearr_31842_33697[(2)] = null);

(statearr_31842_33697[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (4))){
var inst_31693 = (state_31826[(12)]);
var inst_31693__$1 = (state_31826[(2)]);
var inst_31694 = (inst_31693__$1 == null);
var state_31826__$1 = (function (){var statearr_31843 = state_31826;
(statearr_31843[(12)] = inst_31693__$1);

return statearr_31843;
})();
if(cljs.core.truth_(inst_31694)){
var statearr_31844_33702 = state_31826__$1;
(statearr_31844_33702[(1)] = (5));

} else {
var statearr_31845_33704 = state_31826__$1;
(statearr_31845_33704[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (15))){
var inst_31702 = (state_31826[(13)]);
var inst_31704 = (state_31826[(14)]);
var inst_31705 = (state_31826[(15)]);
var inst_31703 = (state_31826[(16)]);
var inst_31720 = (state_31826[(2)]);
var inst_31721 = (inst_31705 + (1));
var tmp31839 = inst_31702;
var tmp31840 = inst_31704;
var tmp31841 = inst_31703;
var inst_31702__$1 = tmp31839;
var inst_31703__$1 = tmp31841;
var inst_31704__$1 = tmp31840;
var inst_31705__$1 = inst_31721;
var state_31826__$1 = (function (){var statearr_31846 = state_31826;
(statearr_31846[(13)] = inst_31702__$1);

(statearr_31846[(18)] = inst_31720);

(statearr_31846[(14)] = inst_31704__$1);

(statearr_31846[(15)] = inst_31705__$1);

(statearr_31846[(16)] = inst_31703__$1);

return statearr_31846;
})();
var statearr_31847_33705 = state_31826__$1;
(statearr_31847_33705[(2)] = null);

(statearr_31847_33705[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (21))){
var inst_31747 = (state_31826[(2)]);
var state_31826__$1 = state_31826;
var statearr_31851_33706 = state_31826__$1;
(statearr_31851_33706[(2)] = inst_31747);

(statearr_31851_33706[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (31))){
var inst_31773 = (state_31826[(9)]);
var inst_31777 = done(null);
var inst_31778 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31773);
var state_31826__$1 = (function (){var statearr_31852 = state_31826;
(statearr_31852[(19)] = inst_31777);

return statearr_31852;
})();
var statearr_31853_33707 = state_31826__$1;
(statearr_31853_33707[(2)] = inst_31778);

(statearr_31853_33707[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (32))){
var inst_31768 = (state_31826[(10)]);
var inst_31766 = (state_31826[(11)]);
var inst_31767 = (state_31826[(20)]);
var inst_31765 = (state_31826[(21)]);
var inst_31780 = (state_31826[(2)]);
var inst_31781 = (inst_31768 + (1));
var tmp31848 = inst_31766;
var tmp31849 = inst_31767;
var tmp31850 = inst_31765;
var inst_31765__$1 = tmp31850;
var inst_31766__$1 = tmp31848;
var inst_31767__$1 = tmp31849;
var inst_31768__$1 = inst_31781;
var state_31826__$1 = (function (){var statearr_31854 = state_31826;
(statearr_31854[(10)] = inst_31768__$1);

(statearr_31854[(11)] = inst_31766__$1);

(statearr_31854[(20)] = inst_31767__$1);

(statearr_31854[(22)] = inst_31780);

(statearr_31854[(21)] = inst_31765__$1);

return statearr_31854;
})();
var statearr_31855_33709 = state_31826__$1;
(statearr_31855_33709[(2)] = null);

(statearr_31855_33709[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (40))){
var inst_31794 = (state_31826[(23)]);
var inst_31798 = done(null);
var inst_31799 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31794);
var state_31826__$1 = (function (){var statearr_31856 = state_31826;
(statearr_31856[(24)] = inst_31798);

return statearr_31856;
})();
var statearr_31857_33710 = state_31826__$1;
(statearr_31857_33710[(2)] = inst_31799);

(statearr_31857_33710[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (33))){
var inst_31784 = (state_31826[(25)]);
var inst_31786 = cljs.core.chunked_seq_QMARK_(inst_31784);
var state_31826__$1 = state_31826;
if(inst_31786){
var statearr_31858_33711 = state_31826__$1;
(statearr_31858_33711[(1)] = (36));

} else {
var statearr_31859_33713 = state_31826__$1;
(statearr_31859_33713[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (13))){
var inst_31714 = (state_31826[(26)]);
var inst_31717 = cljs.core.async.close_BANG_(inst_31714);
var state_31826__$1 = state_31826;
var statearr_31860_33717 = state_31826__$1;
(statearr_31860_33717[(2)] = inst_31717);

(statearr_31860_33717[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (22))){
var inst_31737 = (state_31826[(8)]);
var inst_31740 = cljs.core.async.close_BANG_(inst_31737);
var state_31826__$1 = state_31826;
var statearr_31861_33718 = state_31826__$1;
(statearr_31861_33718[(2)] = inst_31740);

(statearr_31861_33718[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (36))){
var inst_31784 = (state_31826[(25)]);
var inst_31788 = cljs.core.chunk_first(inst_31784);
var inst_31789 = cljs.core.chunk_rest(inst_31784);
var inst_31790 = cljs.core.count(inst_31788);
var inst_31765 = inst_31789;
var inst_31766 = inst_31788;
var inst_31767 = inst_31790;
var inst_31768 = (0);
var state_31826__$1 = (function (){var statearr_31862 = state_31826;
(statearr_31862[(10)] = inst_31768);

(statearr_31862[(11)] = inst_31766);

(statearr_31862[(20)] = inst_31767);

(statearr_31862[(21)] = inst_31765);

return statearr_31862;
})();
var statearr_31863_33720 = state_31826__$1;
(statearr_31863_33720[(2)] = null);

(statearr_31863_33720[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (41))){
var inst_31784 = (state_31826[(25)]);
var inst_31801 = (state_31826[(2)]);
var inst_31802 = cljs.core.next(inst_31784);
var inst_31765 = inst_31802;
var inst_31766 = null;
var inst_31767 = (0);
var inst_31768 = (0);
var state_31826__$1 = (function (){var statearr_31864 = state_31826;
(statearr_31864[(27)] = inst_31801);

(statearr_31864[(10)] = inst_31768);

(statearr_31864[(11)] = inst_31766);

(statearr_31864[(20)] = inst_31767);

(statearr_31864[(21)] = inst_31765);

return statearr_31864;
})();
var statearr_31865_33728 = state_31826__$1;
(statearr_31865_33728[(2)] = null);

(statearr_31865_33728[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (43))){
var state_31826__$1 = state_31826;
var statearr_31866_33729 = state_31826__$1;
(statearr_31866_33729[(2)] = null);

(statearr_31866_33729[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (29))){
var inst_31810 = (state_31826[(2)]);
var state_31826__$1 = state_31826;
var statearr_31867_33730 = state_31826__$1;
(statearr_31867_33730[(2)] = inst_31810);

(statearr_31867_33730[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (44))){
var inst_31819 = (state_31826[(2)]);
var state_31826__$1 = (function (){var statearr_31868 = state_31826;
(statearr_31868[(28)] = inst_31819);

return statearr_31868;
})();
var statearr_31869_33731 = state_31826__$1;
(statearr_31869_33731[(2)] = null);

(statearr_31869_33731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (6))){
var inst_31757 = (state_31826[(29)]);
var inst_31756 = cljs.core.deref(cs);
var inst_31757__$1 = cljs.core.keys(inst_31756);
var inst_31758 = cljs.core.count(inst_31757__$1);
var inst_31759 = cljs.core.reset_BANG_(dctr,inst_31758);
var inst_31764 = cljs.core.seq(inst_31757__$1);
var inst_31765 = inst_31764;
var inst_31766 = null;
var inst_31767 = (0);
var inst_31768 = (0);
var state_31826__$1 = (function (){var statearr_31870 = state_31826;
(statearr_31870[(30)] = inst_31759);

(statearr_31870[(10)] = inst_31768);

(statearr_31870[(11)] = inst_31766);

(statearr_31870[(20)] = inst_31767);

(statearr_31870[(29)] = inst_31757__$1);

(statearr_31870[(21)] = inst_31765);

return statearr_31870;
})();
var statearr_31871_33732 = state_31826__$1;
(statearr_31871_33732[(2)] = null);

(statearr_31871_33732[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (28))){
var inst_31784 = (state_31826[(25)]);
var inst_31765 = (state_31826[(21)]);
var inst_31784__$1 = cljs.core.seq(inst_31765);
var state_31826__$1 = (function (){var statearr_31872 = state_31826;
(statearr_31872[(25)] = inst_31784__$1);

return statearr_31872;
})();
if(inst_31784__$1){
var statearr_31873_33733 = state_31826__$1;
(statearr_31873_33733[(1)] = (33));

} else {
var statearr_31874_33734 = state_31826__$1;
(statearr_31874_33734[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (25))){
var inst_31768 = (state_31826[(10)]);
var inst_31767 = (state_31826[(20)]);
var inst_31770 = (inst_31768 < inst_31767);
var inst_31771 = inst_31770;
var state_31826__$1 = state_31826;
if(cljs.core.truth_(inst_31771)){
var statearr_31875_33735 = state_31826__$1;
(statearr_31875_33735[(1)] = (27));

} else {
var statearr_31876_33736 = state_31826__$1;
(statearr_31876_33736[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (34))){
var state_31826__$1 = state_31826;
var statearr_31877_33737 = state_31826__$1;
(statearr_31877_33737[(2)] = null);

(statearr_31877_33737[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (17))){
var state_31826__$1 = state_31826;
var statearr_31878_33740 = state_31826__$1;
(statearr_31878_33740[(2)] = null);

(statearr_31878_33740[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (3))){
var inst_31824 = (state_31826[(2)]);
var state_31826__$1 = state_31826;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31826__$1,inst_31824);
} else {
if((state_val_31827 === (12))){
var inst_31752 = (state_31826[(2)]);
var state_31826__$1 = state_31826;
var statearr_31879_33741 = state_31826__$1;
(statearr_31879_33741[(2)] = inst_31752);

(statearr_31879_33741[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (2))){
var state_31826__$1 = state_31826;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31826__$1,(4),ch);
} else {
if((state_val_31827 === (23))){
var state_31826__$1 = state_31826;
var statearr_31880_33742 = state_31826__$1;
(statearr_31880_33742[(2)] = null);

(statearr_31880_33742[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (35))){
var inst_31808 = (state_31826[(2)]);
var state_31826__$1 = state_31826;
var statearr_31881_33743 = state_31826__$1;
(statearr_31881_33743[(2)] = inst_31808);

(statearr_31881_33743[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (19))){
var inst_31724 = (state_31826[(7)]);
var inst_31728 = cljs.core.chunk_first(inst_31724);
var inst_31729 = cljs.core.chunk_rest(inst_31724);
var inst_31730 = cljs.core.count(inst_31728);
var inst_31702 = inst_31729;
var inst_31703 = inst_31728;
var inst_31704 = inst_31730;
var inst_31705 = (0);
var state_31826__$1 = (function (){var statearr_31882 = state_31826;
(statearr_31882[(13)] = inst_31702);

(statearr_31882[(14)] = inst_31704);

(statearr_31882[(15)] = inst_31705);

(statearr_31882[(16)] = inst_31703);

return statearr_31882;
})();
var statearr_31883_33748 = state_31826__$1;
(statearr_31883_33748[(2)] = null);

(statearr_31883_33748[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (11))){
var inst_31702 = (state_31826[(13)]);
var inst_31724 = (state_31826[(7)]);
var inst_31724__$1 = cljs.core.seq(inst_31702);
var state_31826__$1 = (function (){var statearr_31884 = state_31826;
(statearr_31884[(7)] = inst_31724__$1);

return statearr_31884;
})();
if(inst_31724__$1){
var statearr_31885_33753 = state_31826__$1;
(statearr_31885_33753[(1)] = (16));

} else {
var statearr_31886_33754 = state_31826__$1;
(statearr_31886_33754[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (9))){
var inst_31754 = (state_31826[(2)]);
var state_31826__$1 = state_31826;
var statearr_31887_33755 = state_31826__$1;
(statearr_31887_33755[(2)] = inst_31754);

(statearr_31887_33755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (5))){
var inst_31700 = cljs.core.deref(cs);
var inst_31701 = cljs.core.seq(inst_31700);
var inst_31702 = inst_31701;
var inst_31703 = null;
var inst_31704 = (0);
var inst_31705 = (0);
var state_31826__$1 = (function (){var statearr_31888 = state_31826;
(statearr_31888[(13)] = inst_31702);

(statearr_31888[(14)] = inst_31704);

(statearr_31888[(15)] = inst_31705);

(statearr_31888[(16)] = inst_31703);

return statearr_31888;
})();
var statearr_31889_33758 = state_31826__$1;
(statearr_31889_33758[(2)] = null);

(statearr_31889_33758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (14))){
var state_31826__$1 = state_31826;
var statearr_31890_33759 = state_31826__$1;
(statearr_31890_33759[(2)] = null);

(statearr_31890_33759[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (45))){
var inst_31816 = (state_31826[(2)]);
var state_31826__$1 = state_31826;
var statearr_31897_33760 = state_31826__$1;
(statearr_31897_33760[(2)] = inst_31816);

(statearr_31897_33760[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (26))){
var inst_31757 = (state_31826[(29)]);
var inst_31812 = (state_31826[(2)]);
var inst_31813 = cljs.core.seq(inst_31757);
var state_31826__$1 = (function (){var statearr_31898 = state_31826;
(statearr_31898[(31)] = inst_31812);

return statearr_31898;
})();
if(inst_31813){
var statearr_31899_33761 = state_31826__$1;
(statearr_31899_33761[(1)] = (42));

} else {
var statearr_31900_33762 = state_31826__$1;
(statearr_31900_33762[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (16))){
var inst_31724 = (state_31826[(7)]);
var inst_31726 = cljs.core.chunked_seq_QMARK_(inst_31724);
var state_31826__$1 = state_31826;
if(inst_31726){
var statearr_31901_33763 = state_31826__$1;
(statearr_31901_33763[(1)] = (19));

} else {
var statearr_31902_33764 = state_31826__$1;
(statearr_31902_33764[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (38))){
var inst_31805 = (state_31826[(2)]);
var state_31826__$1 = state_31826;
var statearr_31903_33765 = state_31826__$1;
(statearr_31903_33765[(2)] = inst_31805);

(statearr_31903_33765[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (30))){
var state_31826__$1 = state_31826;
var statearr_31904_33766 = state_31826__$1;
(statearr_31904_33766[(2)] = null);

(statearr_31904_33766[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (10))){
var inst_31705 = (state_31826[(15)]);
var inst_31703 = (state_31826[(16)]);
var inst_31713 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31703,inst_31705);
var inst_31714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31713,(0),null);
var inst_31715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31713,(1),null);
var state_31826__$1 = (function (){var statearr_31905 = state_31826;
(statearr_31905[(26)] = inst_31714);

return statearr_31905;
})();
if(cljs.core.truth_(inst_31715)){
var statearr_31906_33767 = state_31826__$1;
(statearr_31906_33767[(1)] = (13));

} else {
var statearr_31907_33768 = state_31826__$1;
(statearr_31907_33768[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (18))){
var inst_31750 = (state_31826[(2)]);
var state_31826__$1 = state_31826;
var statearr_31908_33769 = state_31826__$1;
(statearr_31908_33769[(2)] = inst_31750);

(statearr_31908_33769[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (42))){
var state_31826__$1 = state_31826;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31826__$1,(45),dchan);
} else {
if((state_val_31827 === (37))){
var inst_31794 = (state_31826[(23)]);
var inst_31784 = (state_31826[(25)]);
var inst_31693 = (state_31826[(12)]);
var inst_31794__$1 = cljs.core.first(inst_31784);
var inst_31795 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31794__$1,inst_31693,done);
var state_31826__$1 = (function (){var statearr_31909 = state_31826;
(statearr_31909[(23)] = inst_31794__$1);

return statearr_31909;
})();
if(cljs.core.truth_(inst_31795)){
var statearr_31910_33770 = state_31826__$1;
(statearr_31910_33770[(1)] = (39));

} else {
var statearr_31911_33771 = state_31826__$1;
(statearr_31911_33771[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (8))){
var inst_31704 = (state_31826[(14)]);
var inst_31705 = (state_31826[(15)]);
var inst_31707 = (inst_31705 < inst_31704);
var inst_31708 = inst_31707;
var state_31826__$1 = state_31826;
if(cljs.core.truth_(inst_31708)){
var statearr_31912_33772 = state_31826__$1;
(statearr_31912_33772[(1)] = (10));

} else {
var statearr_31913_33773 = state_31826__$1;
(statearr_31913_33773[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30995__auto___33685,cs,m,dchan,dctr,done))
;
return ((function (switch__30767__auto__,c__30995__auto___33685,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30768__auto__ = null;
var cljs$core$async$mult_$_state_machine__30768__auto____0 = (function (){
var statearr_31918 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31918[(0)] = cljs$core$async$mult_$_state_machine__30768__auto__);

(statearr_31918[(1)] = (1));

return statearr_31918;
});
var cljs$core$async$mult_$_state_machine__30768__auto____1 = (function (state_31826){
while(true){
var ret_value__30769__auto__ = (function (){try{while(true){
var result__30770__auto__ = switch__30767__auto__(state_31826);
if(cljs.core.keyword_identical_QMARK_(result__30770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30770__auto__;
}
break;
}
}catch (e31921){if((e31921 instanceof Object)){
var ex__30771__auto__ = e31921;
var statearr_31924_33774 = state_31826;
(statearr_31924_33774[(5)] = ex__30771__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31921;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33775 = state_31826;
state_31826 = G__33775;
continue;
} else {
return ret_value__30769__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30768__auto__ = function(state_31826){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30768__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30768__auto____1.call(this,state_31826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30768__auto____0;
cljs$core$async$mult_$_state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30768__auto____1;
return cljs$core$async$mult_$_state_machine__30768__auto__;
})()
;})(switch__30767__auto__,c__30995__auto___33685,cs,m,dchan,dctr,done))
})();
var state__30997__auto__ = (function (){var statearr_31925 = (f__30996__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30996__auto__.cljs$core$IFn$_invoke$arity$0() : f__30996__auto__.call(null));
(statearr_31925[(6)] = c__30995__auto___33685);

return statearr_31925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30997__auto__);
});})(c__30995__auto___33685,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31927 = arguments.length;
switch (G__31927) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33782 = arguments.length;
var i__4731__auto___33783 = (0);
while(true){
if((i__4731__auto___33783 < len__4730__auto___33782)){
args__4736__auto__.push((arguments[i__4731__auto___33783]));

var G__33784 = (i__4731__auto___33783 + (1));
i__4731__auto___33783 = G__33784;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31951){
var map__31952 = p__31951;
var map__31952__$1 = (((((!((map__31952 == null))))?(((((map__31952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31952):map__31952);
var opts = map__31952__$1;
var statearr_31954_33786 = state;
(statearr_31954_33786[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts(((function (map__31952,map__31952__$1,opts){
return (function (val){
var statearr_31955_33787 = state;
(statearr_31955_33787[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__31952,map__31952__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_31956_33789 = state;
(statearr_31956_33789[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31946){
var G__31947 = cljs.core.first(seq31946);
var seq31946__$1 = cljs.core.next(seq31946);
var G__31948 = cljs.core.first(seq31946__$1);
var seq31946__$2 = cljs.core.next(seq31946__$1);
var G__31949 = cljs.core.first(seq31946__$2);
var seq31946__$3 = cljs.core.next(seq31946__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31947,G__31948,G__31949,seq31946__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31957 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31957 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31958){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31958 = meta31958;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31959,meta31958__$1){
var self__ = this;
var _31959__$1 = this;
return (new cljs.core.async.t_cljs$core$async31957(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31958__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31957.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31959){
var self__ = this;
var _31959__$1 = this;
return self__.meta31958;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31957.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31957.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31957.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31957.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31957.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31957.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31957.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31957.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31957.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31958","meta31958",219323704,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31957.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31957.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31957";

cljs.core.async.t_cljs$core$async31957.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31957");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31957.
 */
cljs.core.async.__GT_t_cljs$core$async31957 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31957(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31958){
return (new cljs.core.async.t_cljs$core$async31957(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31958));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31957(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30995__auto___33825 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30995__auto___33825,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30996__auto__ = (function (){var switch__30767__auto__ = ((function (c__30995__auto___33825,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32066){
var state_val_32067 = (state_32066[(1)]);
if((state_val_32067 === (7))){
var inst_31976 = (state_32066[(2)]);
var state_32066__$1 = state_32066;
var statearr_32096_33826 = state_32066__$1;
(statearr_32096_33826[(2)] = inst_31976);

(statearr_32096_33826[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (20))){
var inst_31988 = (state_32066[(7)]);
var state_32066__$1 = state_32066;
var statearr_32097_33827 = state_32066__$1;
(statearr_32097_33827[(2)] = inst_31988);

(statearr_32097_33827[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (27))){
var state_32066__$1 = state_32066;
var statearr_32098_33828 = state_32066__$1;
(statearr_32098_33828[(2)] = null);

(statearr_32098_33828[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (1))){
var inst_31963 = (state_32066[(8)]);
var inst_31963__$1 = calc_state();
var inst_31965 = (inst_31963__$1 == null);
var inst_31966 = cljs.core.not(inst_31965);
var state_32066__$1 = (function (){var statearr_32099 = state_32066;
(statearr_32099[(8)] = inst_31963__$1);

return statearr_32099;
})();
if(inst_31966){
var statearr_32100_33829 = state_32066__$1;
(statearr_32100_33829[(1)] = (2));

} else {
var statearr_32101_33830 = state_32066__$1;
(statearr_32101_33830[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (24))){
var inst_32012 = (state_32066[(9)]);
var inst_32026 = (state_32066[(10)]);
var inst_32040 = (state_32066[(11)]);
var inst_32040__$1 = (inst_32012.cljs$core$IFn$_invoke$arity$1 ? inst_32012.cljs$core$IFn$_invoke$arity$1(inst_32026) : inst_32012.call(null,inst_32026));
var state_32066__$1 = (function (){var statearr_32102 = state_32066;
(statearr_32102[(11)] = inst_32040__$1);

return statearr_32102;
})();
if(cljs.core.truth_(inst_32040__$1)){
var statearr_32103_33831 = state_32066__$1;
(statearr_32103_33831[(1)] = (29));

} else {
var statearr_32104_33832 = state_32066__$1;
(statearr_32104_33832[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (4))){
var inst_31979 = (state_32066[(2)]);
var state_32066__$1 = state_32066;
if(cljs.core.truth_(inst_31979)){
var statearr_32105_33833 = state_32066__$1;
(statearr_32105_33833[(1)] = (8));

} else {
var statearr_32106_33834 = state_32066__$1;
(statearr_32106_33834[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (15))){
var inst_32006 = (state_32066[(2)]);
var state_32066__$1 = state_32066;
if(cljs.core.truth_(inst_32006)){
var statearr_32107_33841 = state_32066__$1;
(statearr_32107_33841[(1)] = (19));

} else {
var statearr_32108_33842 = state_32066__$1;
(statearr_32108_33842[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (21))){
var inst_32011 = (state_32066[(12)]);
var inst_32011__$1 = (state_32066[(2)]);
var inst_32012 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32011__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32013 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32011__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32014 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32011__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32066__$1 = (function (){var statearr_32109 = state_32066;
(statearr_32109[(12)] = inst_32011__$1);

(statearr_32109[(9)] = inst_32012);

(statearr_32109[(13)] = inst_32013);

return statearr_32109;
})();
return cljs.core.async.ioc_alts_BANG_(state_32066__$1,(22),inst_32014);
} else {
if((state_val_32067 === (31))){
var inst_32048 = (state_32066[(2)]);
var state_32066__$1 = state_32066;
if(cljs.core.truth_(inst_32048)){
var statearr_32115_33849 = state_32066__$1;
(statearr_32115_33849[(1)] = (32));

} else {
var statearr_32116_33850 = state_32066__$1;
(statearr_32116_33850[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (32))){
var inst_32020 = (state_32066[(14)]);
var state_32066__$1 = state_32066;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32066__$1,(35),out,inst_32020);
} else {
if((state_val_32067 === (33))){
var inst_32011 = (state_32066[(12)]);
var inst_31988 = inst_32011;
var state_32066__$1 = (function (){var statearr_32117 = state_32066;
(statearr_32117[(7)] = inst_31988);

return statearr_32117;
})();
var statearr_32118_33851 = state_32066__$1;
(statearr_32118_33851[(2)] = null);

(statearr_32118_33851[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (13))){
var inst_31988 = (state_32066[(7)]);
var inst_31995 = inst_31988.cljs$lang$protocol_mask$partition0$;
var inst_31996 = (inst_31995 & (64));
var inst_31997 = inst_31988.cljs$core$ISeq$;
var inst_31998 = (cljs.core.PROTOCOL_SENTINEL === inst_31997);
var inst_31999 = ((inst_31996) || (inst_31998));
var state_32066__$1 = state_32066;
if(cljs.core.truth_(inst_31999)){
var statearr_32120_33852 = state_32066__$1;
(statearr_32120_33852[(1)] = (16));

} else {
var statearr_32121_33853 = state_32066__$1;
(statearr_32121_33853[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (22))){
var inst_32020 = (state_32066[(14)]);
var inst_32026 = (state_32066[(10)]);
var inst_32019 = (state_32066[(2)]);
var inst_32020__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32019,(0),null);
var inst_32026__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32019,(1),null);
var inst_32027 = (inst_32020__$1 == null);
var inst_32028 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32026__$1,change);
var inst_32029 = ((inst_32027) || (inst_32028));
var state_32066__$1 = (function (){var statearr_32122 = state_32066;
(statearr_32122[(14)] = inst_32020__$1);

(statearr_32122[(10)] = inst_32026__$1);

return statearr_32122;
})();
if(cljs.core.truth_(inst_32029)){
var statearr_32123_33854 = state_32066__$1;
(statearr_32123_33854[(1)] = (23));

} else {
var statearr_32124_33855 = state_32066__$1;
(statearr_32124_33855[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (36))){
var inst_32011 = (state_32066[(12)]);
var inst_31988 = inst_32011;
var state_32066__$1 = (function (){var statearr_32125 = state_32066;
(statearr_32125[(7)] = inst_31988);

return statearr_32125;
})();
var statearr_32126_33856 = state_32066__$1;
(statearr_32126_33856[(2)] = null);

(statearr_32126_33856[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (29))){
var inst_32040 = (state_32066[(11)]);
var state_32066__$1 = state_32066;
var statearr_32127_33863 = state_32066__$1;
(statearr_32127_33863[(2)] = inst_32040);

(statearr_32127_33863[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (6))){
var state_32066__$1 = state_32066;
var statearr_32128_33864 = state_32066__$1;
(statearr_32128_33864[(2)] = false);

(statearr_32128_33864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (28))){
var inst_32036 = (state_32066[(2)]);
var inst_32037 = calc_state();
var inst_31988 = inst_32037;
var state_32066__$1 = (function (){var statearr_32129 = state_32066;
(statearr_32129[(15)] = inst_32036);

(statearr_32129[(7)] = inst_31988);

return statearr_32129;
})();
var statearr_32130_33865 = state_32066__$1;
(statearr_32130_33865[(2)] = null);

(statearr_32130_33865[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (25))){
var inst_32062 = (state_32066[(2)]);
var state_32066__$1 = state_32066;
var statearr_32131_33866 = state_32066__$1;
(statearr_32131_33866[(2)] = inst_32062);

(statearr_32131_33866[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (34))){
var inst_32060 = (state_32066[(2)]);
var state_32066__$1 = state_32066;
var statearr_32132_33867 = state_32066__$1;
(statearr_32132_33867[(2)] = inst_32060);

(statearr_32132_33867[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (17))){
var state_32066__$1 = state_32066;
var statearr_32136_33868 = state_32066__$1;
(statearr_32136_33868[(2)] = false);

(statearr_32136_33868[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (3))){
var state_32066__$1 = state_32066;
var statearr_32137_33869 = state_32066__$1;
(statearr_32137_33869[(2)] = false);

(statearr_32137_33869[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (12))){
var inst_32064 = (state_32066[(2)]);
var state_32066__$1 = state_32066;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32066__$1,inst_32064);
} else {
if((state_val_32067 === (2))){
var inst_31963 = (state_32066[(8)]);
var inst_31968 = inst_31963.cljs$lang$protocol_mask$partition0$;
var inst_31969 = (inst_31968 & (64));
var inst_31970 = inst_31963.cljs$core$ISeq$;
var inst_31971 = (cljs.core.PROTOCOL_SENTINEL === inst_31970);
var inst_31972 = ((inst_31969) || (inst_31971));
var state_32066__$1 = state_32066;
if(cljs.core.truth_(inst_31972)){
var statearr_32140_33870 = state_32066__$1;
(statearr_32140_33870[(1)] = (5));

} else {
var statearr_32141_33871 = state_32066__$1;
(statearr_32141_33871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (23))){
var inst_32020 = (state_32066[(14)]);
var inst_32031 = (inst_32020 == null);
var state_32066__$1 = state_32066;
if(cljs.core.truth_(inst_32031)){
var statearr_32142_33872 = state_32066__$1;
(statearr_32142_33872[(1)] = (26));

} else {
var statearr_32143_33873 = state_32066__$1;
(statearr_32143_33873[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (35))){
var inst_32051 = (state_32066[(2)]);
var state_32066__$1 = state_32066;
if(cljs.core.truth_(inst_32051)){
var statearr_32144_33877 = state_32066__$1;
(statearr_32144_33877[(1)] = (36));

} else {
var statearr_32148_33878 = state_32066__$1;
(statearr_32148_33878[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (19))){
var inst_31988 = (state_32066[(7)]);
var inst_32008 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31988);
var state_32066__$1 = state_32066;
var statearr_32149_33879 = state_32066__$1;
(statearr_32149_33879[(2)] = inst_32008);

(statearr_32149_33879[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (11))){
var inst_31988 = (state_32066[(7)]);
var inst_31992 = (inst_31988 == null);
var inst_31993 = cljs.core.not(inst_31992);
var state_32066__$1 = state_32066;
if(inst_31993){
var statearr_32150_33880 = state_32066__$1;
(statearr_32150_33880[(1)] = (13));

} else {
var statearr_32151_33881 = state_32066__$1;
(statearr_32151_33881[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (9))){
var inst_31963 = (state_32066[(8)]);
var state_32066__$1 = state_32066;
var statearr_32152_33882 = state_32066__$1;
(statearr_32152_33882[(2)] = inst_31963);

(statearr_32152_33882[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (5))){
var state_32066__$1 = state_32066;
var statearr_32153_33883 = state_32066__$1;
(statearr_32153_33883[(2)] = true);

(statearr_32153_33883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (14))){
var state_32066__$1 = state_32066;
var statearr_32156_33887 = state_32066__$1;
(statearr_32156_33887[(2)] = false);

(statearr_32156_33887[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (26))){
var inst_32026 = (state_32066[(10)]);
var inst_32033 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32026);
var state_32066__$1 = state_32066;
var statearr_32157_33888 = state_32066__$1;
(statearr_32157_33888[(2)] = inst_32033);

(statearr_32157_33888[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (16))){
var state_32066__$1 = state_32066;
var statearr_32161_33891 = state_32066__$1;
(statearr_32161_33891[(2)] = true);

(statearr_32161_33891[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (38))){
var inst_32056 = (state_32066[(2)]);
var state_32066__$1 = state_32066;
var statearr_32162_33892 = state_32066__$1;
(statearr_32162_33892[(2)] = inst_32056);

(statearr_32162_33892[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (30))){
var inst_32012 = (state_32066[(9)]);
var inst_32013 = (state_32066[(13)]);
var inst_32026 = (state_32066[(10)]);
var inst_32043 = cljs.core.empty_QMARK_(inst_32012);
var inst_32044 = (inst_32013.cljs$core$IFn$_invoke$arity$1 ? inst_32013.cljs$core$IFn$_invoke$arity$1(inst_32026) : inst_32013.call(null,inst_32026));
var inst_32045 = cljs.core.not(inst_32044);
var inst_32046 = ((inst_32043) && (inst_32045));
var state_32066__$1 = state_32066;
var statearr_32163_33893 = state_32066__$1;
(statearr_32163_33893[(2)] = inst_32046);

(statearr_32163_33893[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (10))){
var inst_31963 = (state_32066[(8)]);
var inst_31984 = (state_32066[(2)]);
var inst_31985 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31984,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31986 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31984,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31987 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31984,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31988 = inst_31963;
var state_32066__$1 = (function (){var statearr_32168 = state_32066;
(statearr_32168[(16)] = inst_31986);

(statearr_32168[(7)] = inst_31988);

(statearr_32168[(17)] = inst_31987);

(statearr_32168[(18)] = inst_31985);

return statearr_32168;
})();
var statearr_32169_33894 = state_32066__$1;
(statearr_32169_33894[(2)] = null);

(statearr_32169_33894[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (18))){
var inst_32003 = (state_32066[(2)]);
var state_32066__$1 = state_32066;
var statearr_32174_33895 = state_32066__$1;
(statearr_32174_33895[(2)] = inst_32003);

(statearr_32174_33895[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (37))){
var state_32066__$1 = state_32066;
var statearr_32175_33896 = state_32066__$1;
(statearr_32175_33896[(2)] = null);

(statearr_32175_33896[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (8))){
var inst_31963 = (state_32066[(8)]);
var inst_31981 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31963);
var state_32066__$1 = state_32066;
var statearr_32176_33897 = state_32066__$1;
(statearr_32176_33897[(2)] = inst_31981);

(statearr_32176_33897[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30995__auto___33825,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30767__auto__,c__30995__auto___33825,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30768__auto__ = null;
var cljs$core$async$mix_$_state_machine__30768__auto____0 = (function (){
var statearr_32177 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32177[(0)] = cljs$core$async$mix_$_state_machine__30768__auto__);

(statearr_32177[(1)] = (1));

return statearr_32177;
});
var cljs$core$async$mix_$_state_machine__30768__auto____1 = (function (state_32066){
while(true){
var ret_value__30769__auto__ = (function (){try{while(true){
var result__30770__auto__ = switch__30767__auto__(state_32066);
if(cljs.core.keyword_identical_QMARK_(result__30770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30770__auto__;
}
break;
}
}catch (e32178){if((e32178 instanceof Object)){
var ex__30771__auto__ = e32178;
var statearr_32179_33898 = state_32066;
(statearr_32179_33898[(5)] = ex__30771__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32066);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32178;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33899 = state_32066;
state_32066 = G__33899;
continue;
} else {
return ret_value__30769__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30768__auto__ = function(state_32066){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30768__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30768__auto____1.call(this,state_32066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30768__auto____0;
cljs$core$async$mix_$_state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30768__auto____1;
return cljs$core$async$mix_$_state_machine__30768__auto__;
})()
;})(switch__30767__auto__,c__30995__auto___33825,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30997__auto__ = (function (){var statearr_32180 = (f__30996__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30996__auto__.cljs$core$IFn$_invoke$arity$0() : f__30996__auto__.call(null));
(statearr_32180[(6)] = c__30995__auto___33825);

return statearr_32180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30997__auto__);
});})(c__30995__auto___33825,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32182 = arguments.length;
switch (G__32182) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__32185 = arguments.length;
switch (G__32185) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__32183_SHARP_){
if(cljs.core.truth_((p1__32183_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32183_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32183_SHARP_.call(null,topic)))){
return p1__32183_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32183_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32195 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32195 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32196){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32196 = meta32196;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32197,meta32196__$1){
var self__ = this;
var _32197__$1 = this;
return (new cljs.core.async.t_cljs$core$async32195(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32196__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32195.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32197){
var self__ = this;
var _32197__$1 = this;
return self__.meta32196;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32195.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32195.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32195.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32195.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32195.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32195.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32195.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32195.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32196","meta32196",226475912,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32195.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32195.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32195";

cljs.core.async.t_cljs$core$async32195.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32195");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32195.
 */
cljs.core.async.__GT_t_cljs$core$async32195 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32195(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32196){
return (new cljs.core.async.t_cljs$core$async32195(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32196));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32195(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30995__auto___33918 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30995__auto___33918,mults,ensure_mult,p){
return (function (){
var f__30996__auto__ = (function (){var switch__30767__auto__ = ((function (c__30995__auto___33918,mults,ensure_mult,p){
return (function (state_32273){
var state_val_32274 = (state_32273[(1)]);
if((state_val_32274 === (7))){
var inst_32269 = (state_32273[(2)]);
var state_32273__$1 = state_32273;
var statearr_32275_33919 = state_32273__$1;
(statearr_32275_33919[(2)] = inst_32269);

(statearr_32275_33919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32274 === (20))){
var state_32273__$1 = state_32273;
var statearr_32276_33920 = state_32273__$1;
(statearr_32276_33920[(2)] = null);

(statearr_32276_33920[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32274 === (1))){
var state_32273__$1 = state_32273;
var statearr_32277_33921 = state_32273__$1;
(statearr_32277_33921[(2)] = null);

(statearr_32277_33921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32274 === (24))){
var inst_32252 = (state_32273[(7)]);
var inst_32261 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32252);
var state_32273__$1 = state_32273;
var statearr_32278_33922 = state_32273__$1;
(statearr_32278_33922[(2)] = inst_32261);

(statearr_32278_33922[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32274 === (4))){
var inst_32204 = (state_32273[(8)]);
var inst_32204__$1 = (state_32273[(2)]);
var inst_32205 = (inst_32204__$1 == null);
var state_32273__$1 = (function (){var statearr_32279 = state_32273;
(statearr_32279[(8)] = inst_32204__$1);

return statearr_32279;
})();
if(cljs.core.truth_(inst_32205)){
var statearr_32280_33923 = state_32273__$1;
(statearr_32280_33923[(1)] = (5));

} else {
var statearr_32281_33924 = state_32273__$1;
(statearr_32281_33924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32274 === (15))){
var inst_32246 = (state_32273[(2)]);
var state_32273__$1 = state_32273;
var statearr_32282_33925 = state_32273__$1;
(statearr_32282_33925[(2)] = inst_32246);

(statearr_32282_33925[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32274 === (21))){
var inst_32266 = (state_32273[(2)]);
var state_32273__$1 = (function (){var statearr_32283 = state_32273;
(statearr_32283[(9)] = inst_32266);

return statearr_32283;
})();
var statearr_32284_33926 = state_32273__$1;
(statearr_32284_33926[(2)] = null);

(statearr_32284_33926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32274 === (13))){
var inst_32228 = (state_32273[(10)]);
var inst_32230 = cljs.core.chunked_seq_QMARK_(inst_32228);
var state_32273__$1 = state_32273;
if(inst_32230){
var statearr_32285_33927 = state_32273__$1;
(statearr_32285_33927[(1)] = (16));

} else {
var statearr_32286_33928 = state_32273__$1;
(statearr_32286_33928[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32274 === (22))){
var inst_32258 = (state_32273[(2)]);
var state_32273__$1 = state_32273;
if(cljs.core.truth_(inst_32258)){
var statearr_32287_33931 = state_32273__$1;
(statearr_32287_33931[(1)] = (23));

} else {
var statearr_32288_33932 = state_32273__$1;
(statearr_32288_33932[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32274 === (6))){
var inst_32204 = (state_32273[(8)]);
var inst_32252 = (state_32273[(7)]);
var inst_32254 = (state_32273[(11)]);
var inst_32252__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32204) : topic_fn.call(null,inst_32204));
var inst_32253 = cljs.core.deref(mults);
var inst_32254__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32253,inst_32252__$1);
var state_32273__$1 = (function (){var statearr_32289 = state_32273;
(statearr_32289[(7)] = inst_32252__$1);

(statearr_32289[(11)] = inst_32254__$1);

return statearr_32289;
})();
if(cljs.core.truth_(inst_32254__$1)){
var statearr_32290_33934 = state_32273__$1;
(statearr_32290_33934[(1)] = (19));

} else {
var statearr_32291_33935 = state_32273__$1;
(statearr_32291_33935[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32274 === (25))){
var inst_32263 = (state_32273[(2)]);
var state_32273__$1 = state_32273;
var statearr_32292_33937 = state_32273__$1;
(statearr_32292_33937[(2)] = inst_32263);

(statearr_32292_33937[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32274 === (17))){
var inst_32228 = (state_32273[(10)]);
var inst_32237 = cljs.core.first(inst_32228);
var inst_32238 = cljs.core.async.muxch_STAR_(inst_32237);
var inst_32239 = cljs.core.async.close_BANG_(inst_32238);
var inst_32240 = cljs.core.next(inst_32228);
var inst_32214 = inst_32240;
var inst_32215 = null;
var inst_32216 = (0);
var inst_32217 = (0);
var state_32273__$1 = (function (){var statearr_32295 = state_32273;
(statearr_32295[(12)] = inst_32214);

(statearr_32295[(13)] = inst_32216);

(statearr_32295[(14)] = inst_32217);

(statearr_32295[(15)] = inst_32215);

(statearr_32295[(16)] = inst_32239);

return statearr_32295;
})();
var statearr_32297_33938 = state_32273__$1;
(statearr_32297_33938[(2)] = null);

(statearr_32297_33938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32274 === (3))){
var inst_32271 = (state_32273[(2)]);
var state_32273__$1 = state_32273;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32273__$1,inst_32271);
} else {
if((state_val_32274 === (12))){
var inst_32248 = (state_32273[(2)]);
var state_32273__$1 = state_32273;
var statearr_32298_33939 = state_32273__$1;
(statearr_32298_33939[(2)] = inst_32248);

(statearr_32298_33939[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32274 === (2))){
var state_32273__$1 = state_32273;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32273__$1,(4),ch);
} else {
if((state_val_32274 === (23))){
var state_32273__$1 = state_32273;
var statearr_32299_33940 = state_32273__$1;
(statearr_32299_33940[(2)] = null);

(statearr_32299_33940[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32274 === (19))){
var inst_32204 = (state_32273[(8)]);
var inst_32254 = (state_32273[(11)]);
var inst_32256 = cljs.core.async.muxch_STAR_(inst_32254);
var state_32273__$1 = state_32273;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32273__$1,(22),inst_32256,inst_32204);
} else {
if((state_val_32274 === (11))){
var inst_32214 = (state_32273[(12)]);
var inst_32228 = (state_32273[(10)]);
var inst_32228__$1 = cljs.core.seq(inst_32214);
var state_32273__$1 = (function (){var statearr_32300 = state_32273;
(statearr_32300[(10)] = inst_32228__$1);

return statearr_32300;
})();
if(inst_32228__$1){
var statearr_32301_33941 = state_32273__$1;
(statearr_32301_33941[(1)] = (13));

} else {
var statearr_32303_33942 = state_32273__$1;
(statearr_32303_33942[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32274 === (9))){
var inst_32250 = (state_32273[(2)]);
var state_32273__$1 = state_32273;
var statearr_32307_33943 = state_32273__$1;
(statearr_32307_33943[(2)] = inst_32250);

(statearr_32307_33943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32274 === (5))){
var inst_32211 = cljs.core.deref(mults);
var inst_32212 = cljs.core.vals(inst_32211);
var inst_32213 = cljs.core.seq(inst_32212);
var inst_32214 = inst_32213;
var inst_32215 = null;
var inst_32216 = (0);
var inst_32217 = (0);
var state_32273__$1 = (function (){var statearr_32310 = state_32273;
(statearr_32310[(12)] = inst_32214);

(statearr_32310[(13)] = inst_32216);

(statearr_32310[(14)] = inst_32217);

(statearr_32310[(15)] = inst_32215);

return statearr_32310;
})();
var statearr_32312_33947 = state_32273__$1;
(statearr_32312_33947[(2)] = null);

(statearr_32312_33947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32274 === (14))){
var state_32273__$1 = state_32273;
var statearr_32316_33949 = state_32273__$1;
(statearr_32316_33949[(2)] = null);

(statearr_32316_33949[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32274 === (16))){
var inst_32228 = (state_32273[(10)]);
var inst_32232 = cljs.core.chunk_first(inst_32228);
var inst_32233 = cljs.core.chunk_rest(inst_32228);
var inst_32234 = cljs.core.count(inst_32232);
var inst_32214 = inst_32233;
var inst_32215 = inst_32232;
var inst_32216 = inst_32234;
var inst_32217 = (0);
var state_32273__$1 = (function (){var statearr_32317 = state_32273;
(statearr_32317[(12)] = inst_32214);

(statearr_32317[(13)] = inst_32216);

(statearr_32317[(14)] = inst_32217);

(statearr_32317[(15)] = inst_32215);

return statearr_32317;
})();
var statearr_32318_33956 = state_32273__$1;
(statearr_32318_33956[(2)] = null);

(statearr_32318_33956[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32274 === (10))){
var inst_32214 = (state_32273[(12)]);
var inst_32216 = (state_32273[(13)]);
var inst_32217 = (state_32273[(14)]);
var inst_32215 = (state_32273[(15)]);
var inst_32222 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32215,inst_32217);
var inst_32223 = cljs.core.async.muxch_STAR_(inst_32222);
var inst_32224 = cljs.core.async.close_BANG_(inst_32223);
var inst_32225 = (inst_32217 + (1));
var tmp32313 = inst_32214;
var tmp32314 = inst_32216;
var tmp32315 = inst_32215;
var inst_32214__$1 = tmp32313;
var inst_32215__$1 = tmp32315;
var inst_32216__$1 = tmp32314;
var inst_32217__$1 = inst_32225;
var state_32273__$1 = (function (){var statearr_32319 = state_32273;
(statearr_32319[(12)] = inst_32214__$1);

(statearr_32319[(17)] = inst_32224);

(statearr_32319[(13)] = inst_32216__$1);

(statearr_32319[(14)] = inst_32217__$1);

(statearr_32319[(15)] = inst_32215__$1);

return statearr_32319;
})();
var statearr_32320_33970 = state_32273__$1;
(statearr_32320_33970[(2)] = null);

(statearr_32320_33970[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32274 === (18))){
var inst_32243 = (state_32273[(2)]);
var state_32273__$1 = state_32273;
var statearr_32321_33977 = state_32273__$1;
(statearr_32321_33977[(2)] = inst_32243);

(statearr_32321_33977[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32274 === (8))){
var inst_32216 = (state_32273[(13)]);
var inst_32217 = (state_32273[(14)]);
var inst_32219 = (inst_32217 < inst_32216);
var inst_32220 = inst_32219;
var state_32273__$1 = state_32273;
if(cljs.core.truth_(inst_32220)){
var statearr_32322_33978 = state_32273__$1;
(statearr_32322_33978[(1)] = (10));

} else {
var statearr_32323_33979 = state_32273__$1;
(statearr_32323_33979[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30995__auto___33918,mults,ensure_mult,p))
;
return ((function (switch__30767__auto__,c__30995__auto___33918,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30768__auto__ = null;
var cljs$core$async$state_machine__30768__auto____0 = (function (){
var statearr_32324 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32324[(0)] = cljs$core$async$state_machine__30768__auto__);

(statearr_32324[(1)] = (1));

return statearr_32324;
});
var cljs$core$async$state_machine__30768__auto____1 = (function (state_32273){
while(true){
var ret_value__30769__auto__ = (function (){try{while(true){
var result__30770__auto__ = switch__30767__auto__(state_32273);
if(cljs.core.keyword_identical_QMARK_(result__30770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30770__auto__;
}
break;
}
}catch (e32325){if((e32325 instanceof Object)){
var ex__30771__auto__ = e32325;
var statearr_32326_33980 = state_32273;
(statearr_32326_33980[(5)] = ex__30771__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32325;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33981 = state_32273;
state_32273 = G__33981;
continue;
} else {
return ret_value__30769__auto__;
}
break;
}
});
cljs$core$async$state_machine__30768__auto__ = function(state_32273){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30768__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30768__auto____1.call(this,state_32273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30768__auto____0;
cljs$core$async$state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30768__auto____1;
return cljs$core$async$state_machine__30768__auto__;
})()
;})(switch__30767__auto__,c__30995__auto___33918,mults,ensure_mult,p))
})();
var state__30997__auto__ = (function (){var statearr_32327 = (f__30996__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30996__auto__.cljs$core$IFn$_invoke$arity$0() : f__30996__auto__.call(null));
(statearr_32327[(6)] = c__30995__auto___33918);

return statearr_32327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30997__auto__);
});})(c__30995__auto___33918,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32329 = arguments.length;
switch (G__32329) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32331 = arguments.length;
switch (G__32331) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32333 = arguments.length;
switch (G__32333) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__30995__auto___34014 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30995__auto___34014,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30996__auto__ = (function (){var switch__30767__auto__ = ((function (c__30995__auto___34014,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32372){
var state_val_32373 = (state_32372[(1)]);
if((state_val_32373 === (7))){
var state_32372__$1 = state_32372;
var statearr_32374_34015 = state_32372__$1;
(statearr_32374_34015[(2)] = null);

(statearr_32374_34015[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32373 === (1))){
var state_32372__$1 = state_32372;
var statearr_32375_34016 = state_32372__$1;
(statearr_32375_34016[(2)] = null);

(statearr_32375_34016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32373 === (4))){
var inst_32336 = (state_32372[(7)]);
var inst_32338 = (inst_32336 < cnt);
var state_32372__$1 = state_32372;
if(cljs.core.truth_(inst_32338)){
var statearr_32376_34017 = state_32372__$1;
(statearr_32376_34017[(1)] = (6));

} else {
var statearr_32377_34018 = state_32372__$1;
(statearr_32377_34018[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32373 === (15))){
var inst_32368 = (state_32372[(2)]);
var state_32372__$1 = state_32372;
var statearr_32378_34019 = state_32372__$1;
(statearr_32378_34019[(2)] = inst_32368);

(statearr_32378_34019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32373 === (13))){
var inst_32361 = cljs.core.async.close_BANG_(out);
var state_32372__$1 = state_32372;
var statearr_32379_34020 = state_32372__$1;
(statearr_32379_34020[(2)] = inst_32361);

(statearr_32379_34020[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32373 === (6))){
var state_32372__$1 = state_32372;
var statearr_32380_34021 = state_32372__$1;
(statearr_32380_34021[(2)] = null);

(statearr_32380_34021[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32373 === (3))){
var inst_32370 = (state_32372[(2)]);
var state_32372__$1 = state_32372;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32372__$1,inst_32370);
} else {
if((state_val_32373 === (12))){
var inst_32358 = (state_32372[(8)]);
var inst_32358__$1 = (state_32372[(2)]);
var inst_32359 = cljs.core.some(cljs.core.nil_QMARK_,inst_32358__$1);
var state_32372__$1 = (function (){var statearr_32381 = state_32372;
(statearr_32381[(8)] = inst_32358__$1);

return statearr_32381;
})();
if(cljs.core.truth_(inst_32359)){
var statearr_32382_34043 = state_32372__$1;
(statearr_32382_34043[(1)] = (13));

} else {
var statearr_32383_34044 = state_32372__$1;
(statearr_32383_34044[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32373 === (2))){
var inst_32335 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32336 = (0);
var state_32372__$1 = (function (){var statearr_32384 = state_32372;
(statearr_32384[(9)] = inst_32335);

(statearr_32384[(7)] = inst_32336);

return statearr_32384;
})();
var statearr_32385_34046 = state_32372__$1;
(statearr_32385_34046[(2)] = null);

(statearr_32385_34046[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32373 === (11))){
var inst_32336 = (state_32372[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_32372,(10),Object,null,(9));
var inst_32345 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32336) : chs__$1.call(null,inst_32336));
var inst_32346 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32336) : done.call(null,inst_32336));
var inst_32347 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32345,inst_32346);
var state_32372__$1 = state_32372;
var statearr_32386_34047 = state_32372__$1;
(statearr_32386_34047[(2)] = inst_32347);


cljs.core.async.impl.ioc_helpers.process_exception(state_32372__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32373 === (9))){
var inst_32336 = (state_32372[(7)]);
var inst_32349 = (state_32372[(2)]);
var inst_32350 = (inst_32336 + (1));
var inst_32336__$1 = inst_32350;
var state_32372__$1 = (function (){var statearr_32387 = state_32372;
(statearr_32387[(7)] = inst_32336__$1);

(statearr_32387[(10)] = inst_32349);

return statearr_32387;
})();
var statearr_32388_34048 = state_32372__$1;
(statearr_32388_34048[(2)] = null);

(statearr_32388_34048[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32373 === (5))){
var inst_32356 = (state_32372[(2)]);
var state_32372__$1 = (function (){var statearr_32389 = state_32372;
(statearr_32389[(11)] = inst_32356);

return statearr_32389;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32372__$1,(12),dchan);
} else {
if((state_val_32373 === (14))){
var inst_32358 = (state_32372[(8)]);
var inst_32363 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32358);
var state_32372__$1 = state_32372;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32372__$1,(16),out,inst_32363);
} else {
if((state_val_32373 === (16))){
var inst_32365 = (state_32372[(2)]);
var state_32372__$1 = (function (){var statearr_32390 = state_32372;
(statearr_32390[(12)] = inst_32365);

return statearr_32390;
})();
var statearr_32391_34053 = state_32372__$1;
(statearr_32391_34053[(2)] = null);

(statearr_32391_34053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32373 === (10))){
var inst_32340 = (state_32372[(2)]);
var inst_32341 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32372__$1 = (function (){var statearr_32392 = state_32372;
(statearr_32392[(13)] = inst_32340);

return statearr_32392;
})();
var statearr_32393_34054 = state_32372__$1;
(statearr_32393_34054[(2)] = inst_32341);


cljs.core.async.impl.ioc_helpers.process_exception(state_32372__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32373 === (8))){
var inst_32354 = (state_32372[(2)]);
var state_32372__$1 = state_32372;
var statearr_32394_34055 = state_32372__$1;
(statearr_32394_34055[(2)] = inst_32354);

(statearr_32394_34055[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30995__auto___34014,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30767__auto__,c__30995__auto___34014,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30768__auto__ = null;
var cljs$core$async$state_machine__30768__auto____0 = (function (){
var statearr_32395 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32395[(0)] = cljs$core$async$state_machine__30768__auto__);

(statearr_32395[(1)] = (1));

return statearr_32395;
});
var cljs$core$async$state_machine__30768__auto____1 = (function (state_32372){
while(true){
var ret_value__30769__auto__ = (function (){try{while(true){
var result__30770__auto__ = switch__30767__auto__(state_32372);
if(cljs.core.keyword_identical_QMARK_(result__30770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30770__auto__;
}
break;
}
}catch (e32396){if((e32396 instanceof Object)){
var ex__30771__auto__ = e32396;
var statearr_32397_34059 = state_32372;
(statearr_32397_34059[(5)] = ex__30771__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32396;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34061 = state_32372;
state_32372 = G__34061;
continue;
} else {
return ret_value__30769__auto__;
}
break;
}
});
cljs$core$async$state_machine__30768__auto__ = function(state_32372){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30768__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30768__auto____1.call(this,state_32372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30768__auto____0;
cljs$core$async$state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30768__auto____1;
return cljs$core$async$state_machine__30768__auto__;
})()
;})(switch__30767__auto__,c__30995__auto___34014,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30997__auto__ = (function (){var statearr_32398 = (f__30996__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30996__auto__.cljs$core$IFn$_invoke$arity$0() : f__30996__auto__.call(null));
(statearr_32398[(6)] = c__30995__auto___34014);

return statearr_32398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30997__auto__);
});})(c__30995__auto___34014,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32402 = arguments.length;
switch (G__32402) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30995__auto___34086 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30995__auto___34086,out){
return (function (){
var f__30996__auto__ = (function (){var switch__30767__auto__ = ((function (c__30995__auto___34086,out){
return (function (state_32434){
var state_val_32435 = (state_32434[(1)]);
if((state_val_32435 === (7))){
var inst_32414 = (state_32434[(7)]);
var inst_32413 = (state_32434[(8)]);
var inst_32413__$1 = (state_32434[(2)]);
var inst_32414__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32413__$1,(0),null);
var inst_32415 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32413__$1,(1),null);
var inst_32416 = (inst_32414__$1 == null);
var state_32434__$1 = (function (){var statearr_32436 = state_32434;
(statearr_32436[(7)] = inst_32414__$1);

(statearr_32436[(9)] = inst_32415);

(statearr_32436[(8)] = inst_32413__$1);

return statearr_32436;
})();
if(cljs.core.truth_(inst_32416)){
var statearr_32437_34097 = state_32434__$1;
(statearr_32437_34097[(1)] = (8));

} else {
var statearr_32438_34102 = state_32434__$1;
(statearr_32438_34102[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32435 === (1))){
var inst_32403 = cljs.core.vec(chs);
var inst_32404 = inst_32403;
var state_32434__$1 = (function (){var statearr_32439 = state_32434;
(statearr_32439[(10)] = inst_32404);

return statearr_32439;
})();
var statearr_32440_34111 = state_32434__$1;
(statearr_32440_34111[(2)] = null);

(statearr_32440_34111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32435 === (4))){
var inst_32404 = (state_32434[(10)]);
var state_32434__$1 = state_32434;
return cljs.core.async.ioc_alts_BANG_(state_32434__$1,(7),inst_32404);
} else {
if((state_val_32435 === (6))){
var inst_32430 = (state_32434[(2)]);
var state_32434__$1 = state_32434;
var statearr_32441_34114 = state_32434__$1;
(statearr_32441_34114[(2)] = inst_32430);

(statearr_32441_34114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32435 === (3))){
var inst_32432 = (state_32434[(2)]);
var state_32434__$1 = state_32434;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32434__$1,inst_32432);
} else {
if((state_val_32435 === (2))){
var inst_32404 = (state_32434[(10)]);
var inst_32406 = cljs.core.count(inst_32404);
var inst_32407 = (inst_32406 > (0));
var state_32434__$1 = state_32434;
if(cljs.core.truth_(inst_32407)){
var statearr_32443_34126 = state_32434__$1;
(statearr_32443_34126[(1)] = (4));

} else {
var statearr_32444_34127 = state_32434__$1;
(statearr_32444_34127[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32435 === (11))){
var inst_32404 = (state_32434[(10)]);
var inst_32423 = (state_32434[(2)]);
var tmp32442 = inst_32404;
var inst_32404__$1 = tmp32442;
var state_32434__$1 = (function (){var statearr_32445 = state_32434;
(statearr_32445[(10)] = inst_32404__$1);

(statearr_32445[(11)] = inst_32423);

return statearr_32445;
})();
var statearr_32446_34137 = state_32434__$1;
(statearr_32446_34137[(2)] = null);

(statearr_32446_34137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32435 === (9))){
var inst_32414 = (state_32434[(7)]);
var state_32434__$1 = state_32434;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32434__$1,(11),out,inst_32414);
} else {
if((state_val_32435 === (5))){
var inst_32428 = cljs.core.async.close_BANG_(out);
var state_32434__$1 = state_32434;
var statearr_32447_34146 = state_32434__$1;
(statearr_32447_34146[(2)] = inst_32428);

(statearr_32447_34146[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32435 === (10))){
var inst_32426 = (state_32434[(2)]);
var state_32434__$1 = state_32434;
var statearr_32448_34155 = state_32434__$1;
(statearr_32448_34155[(2)] = inst_32426);

(statearr_32448_34155[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32435 === (8))){
var inst_32414 = (state_32434[(7)]);
var inst_32404 = (state_32434[(10)]);
var inst_32415 = (state_32434[(9)]);
var inst_32413 = (state_32434[(8)]);
var inst_32418 = (function (){var cs = inst_32404;
var vec__32409 = inst_32413;
var v = inst_32414;
var c = inst_32415;
return ((function (cs,vec__32409,v,c,inst_32414,inst_32404,inst_32415,inst_32413,state_val_32435,c__30995__auto___34086,out){
return (function (p1__32399_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32399_SHARP_);
});
;})(cs,vec__32409,v,c,inst_32414,inst_32404,inst_32415,inst_32413,state_val_32435,c__30995__auto___34086,out))
})();
var inst_32419 = cljs.core.filterv(inst_32418,inst_32404);
var inst_32404__$1 = inst_32419;
var state_32434__$1 = (function (){var statearr_32449 = state_32434;
(statearr_32449[(10)] = inst_32404__$1);

return statearr_32449;
})();
var statearr_32450_34160 = state_32434__$1;
(statearr_32450_34160[(2)] = null);

(statearr_32450_34160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30995__auto___34086,out))
;
return ((function (switch__30767__auto__,c__30995__auto___34086,out){
return (function() {
var cljs$core$async$state_machine__30768__auto__ = null;
var cljs$core$async$state_machine__30768__auto____0 = (function (){
var statearr_32451 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32451[(0)] = cljs$core$async$state_machine__30768__auto__);

(statearr_32451[(1)] = (1));

return statearr_32451;
});
var cljs$core$async$state_machine__30768__auto____1 = (function (state_32434){
while(true){
var ret_value__30769__auto__ = (function (){try{while(true){
var result__30770__auto__ = switch__30767__auto__(state_32434);
if(cljs.core.keyword_identical_QMARK_(result__30770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30770__auto__;
}
break;
}
}catch (e32452){if((e32452 instanceof Object)){
var ex__30771__auto__ = e32452;
var statearr_32453_34161 = state_32434;
(statearr_32453_34161[(5)] = ex__30771__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32452;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34166 = state_32434;
state_32434 = G__34166;
continue;
} else {
return ret_value__30769__auto__;
}
break;
}
});
cljs$core$async$state_machine__30768__auto__ = function(state_32434){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30768__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30768__auto____1.call(this,state_32434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30768__auto____0;
cljs$core$async$state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30768__auto____1;
return cljs$core$async$state_machine__30768__auto__;
})()
;})(switch__30767__auto__,c__30995__auto___34086,out))
})();
var state__30997__auto__ = (function (){var statearr_32455 = (f__30996__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30996__auto__.cljs$core$IFn$_invoke$arity$0() : f__30996__auto__.call(null));
(statearr_32455[(6)] = c__30995__auto___34086);

return statearr_32455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30997__auto__);
});})(c__30995__auto___34086,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32458 = arguments.length;
switch (G__32458) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30995__auto___34178 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30995__auto___34178,out){
return (function (){
var f__30996__auto__ = (function (){var switch__30767__auto__ = ((function (c__30995__auto___34178,out){
return (function (state_32482){
var state_val_32483 = (state_32482[(1)]);
if((state_val_32483 === (7))){
var inst_32464 = (state_32482[(7)]);
var inst_32464__$1 = (state_32482[(2)]);
var inst_32465 = (inst_32464__$1 == null);
var inst_32466 = cljs.core.not(inst_32465);
var state_32482__$1 = (function (){var statearr_32492 = state_32482;
(statearr_32492[(7)] = inst_32464__$1);

return statearr_32492;
})();
if(inst_32466){
var statearr_32493_34181 = state_32482__$1;
(statearr_32493_34181[(1)] = (8));

} else {
var statearr_32494_34182 = state_32482__$1;
(statearr_32494_34182[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32483 === (1))){
var inst_32459 = (0);
var state_32482__$1 = (function (){var statearr_32495 = state_32482;
(statearr_32495[(8)] = inst_32459);

return statearr_32495;
})();
var statearr_32497_34184 = state_32482__$1;
(statearr_32497_34184[(2)] = null);

(statearr_32497_34184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32483 === (4))){
var state_32482__$1 = state_32482;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32482__$1,(7),ch);
} else {
if((state_val_32483 === (6))){
var inst_32477 = (state_32482[(2)]);
var state_32482__$1 = state_32482;
var statearr_32503_34185 = state_32482__$1;
(statearr_32503_34185[(2)] = inst_32477);

(statearr_32503_34185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32483 === (3))){
var inst_32479 = (state_32482[(2)]);
var inst_32480 = cljs.core.async.close_BANG_(out);
var state_32482__$1 = (function (){var statearr_32506 = state_32482;
(statearr_32506[(9)] = inst_32479);

return statearr_32506;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32482__$1,inst_32480);
} else {
if((state_val_32483 === (2))){
var inst_32459 = (state_32482[(8)]);
var inst_32461 = (inst_32459 < n);
var state_32482__$1 = state_32482;
if(cljs.core.truth_(inst_32461)){
var statearr_32507_34187 = state_32482__$1;
(statearr_32507_34187[(1)] = (4));

} else {
var statearr_32508_34188 = state_32482__$1;
(statearr_32508_34188[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32483 === (11))){
var inst_32459 = (state_32482[(8)]);
var inst_32469 = (state_32482[(2)]);
var inst_32470 = (inst_32459 + (1));
var inst_32459__$1 = inst_32470;
var state_32482__$1 = (function (){var statearr_32512 = state_32482;
(statearr_32512[(8)] = inst_32459__$1);

(statearr_32512[(10)] = inst_32469);

return statearr_32512;
})();
var statearr_32513_34189 = state_32482__$1;
(statearr_32513_34189[(2)] = null);

(statearr_32513_34189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32483 === (9))){
var state_32482__$1 = state_32482;
var statearr_32514_34191 = state_32482__$1;
(statearr_32514_34191[(2)] = null);

(statearr_32514_34191[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32483 === (5))){
var state_32482__$1 = state_32482;
var statearr_32515_34192 = state_32482__$1;
(statearr_32515_34192[(2)] = null);

(statearr_32515_34192[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32483 === (10))){
var inst_32474 = (state_32482[(2)]);
var state_32482__$1 = state_32482;
var statearr_32516_34193 = state_32482__$1;
(statearr_32516_34193[(2)] = inst_32474);

(statearr_32516_34193[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32483 === (8))){
var inst_32464 = (state_32482[(7)]);
var state_32482__$1 = state_32482;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32482__$1,(11),out,inst_32464);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30995__auto___34178,out))
;
return ((function (switch__30767__auto__,c__30995__auto___34178,out){
return (function() {
var cljs$core$async$state_machine__30768__auto__ = null;
var cljs$core$async$state_machine__30768__auto____0 = (function (){
var statearr_32517 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32517[(0)] = cljs$core$async$state_machine__30768__auto__);

(statearr_32517[(1)] = (1));

return statearr_32517;
});
var cljs$core$async$state_machine__30768__auto____1 = (function (state_32482){
while(true){
var ret_value__30769__auto__ = (function (){try{while(true){
var result__30770__auto__ = switch__30767__auto__(state_32482);
if(cljs.core.keyword_identical_QMARK_(result__30770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30770__auto__;
}
break;
}
}catch (e32518){if((e32518 instanceof Object)){
var ex__30771__auto__ = e32518;
var statearr_32519_34201 = state_32482;
(statearr_32519_34201[(5)] = ex__30771__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32518;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34205 = state_32482;
state_32482 = G__34205;
continue;
} else {
return ret_value__30769__auto__;
}
break;
}
});
cljs$core$async$state_machine__30768__auto__ = function(state_32482){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30768__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30768__auto____1.call(this,state_32482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30768__auto____0;
cljs$core$async$state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30768__auto____1;
return cljs$core$async$state_machine__30768__auto__;
})()
;})(switch__30767__auto__,c__30995__auto___34178,out))
})();
var state__30997__auto__ = (function (){var statearr_32520 = (f__30996__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30996__auto__.cljs$core$IFn$_invoke$arity$0() : f__30996__auto__.call(null));
(statearr_32520[(6)] = c__30995__auto___34178);

return statearr_32520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30997__auto__);
});})(c__30995__auto___34178,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32522 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32522 = (function (f,ch,meta32523){
this.f = f;
this.ch = ch;
this.meta32523 = meta32523;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32524,meta32523__$1){
var self__ = this;
var _32524__$1 = this;
return (new cljs.core.async.t_cljs$core$async32522(self__.f,self__.ch,meta32523__$1));
});

cljs.core.async.t_cljs$core$async32522.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32524){
var self__ = this;
var _32524__$1 = this;
return self__.meta32523;
});

cljs.core.async.t_cljs$core$async32522.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32522.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32522.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async32522.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32522.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32535 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32535 = (function (f,ch,meta32523,_,fn1,meta32536){
this.f = f;
this.ch = ch;
this.meta32523 = meta32523;
this._ = _;
this.fn1 = fn1;
this.meta32536 = meta32536;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32537,meta32536__$1){
var self__ = this;
var _32537__$1 = this;
return (new cljs.core.async.t_cljs$core$async32535(self__.f,self__.ch,self__.meta32523,self__._,self__.fn1,meta32536__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32535.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32537){
var self__ = this;
var _32537__$1 = this;
return self__.meta32536;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32535.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32535.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32535.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32535.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32521_SHARP_){
var G__32547 = (((p1__32521_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32521_SHARP_) : self__.f.call(null,p1__32521_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32547) : f1.call(null,G__32547));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32535.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32523","meta32523",884640823,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32522","cljs.core.async/t_cljs$core$async32522",566363136,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32536","meta32536",-1809644186,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32535.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32535.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32535";

cljs.core.async.t_cljs$core$async32535.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32535");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32535.
 */
cljs.core.async.__GT_t_cljs$core$async32535 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32535(f__$1,ch__$1,meta32523__$1,___$2,fn1__$1,meta32536){
return (new cljs.core.async.t_cljs$core$async32535(f__$1,ch__$1,meta32523__$1,___$2,fn1__$1,meta32536));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32535(self__.f,self__.ch,self__.meta32523,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32551 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32551) : self__.f.call(null,G__32551));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32522.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32522.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32522.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32523","meta32523",884640823,null)], null);
});

cljs.core.async.t_cljs$core$async32522.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32522.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32522";

cljs.core.async.t_cljs$core$async32522.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32522");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32522.
 */
cljs.core.async.__GT_t_cljs$core$async32522 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32522(f__$1,ch__$1,meta32523){
return (new cljs.core.async.t_cljs$core$async32522(f__$1,ch__$1,meta32523));
});

}

return (new cljs.core.async.t_cljs$core$async32522(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32552 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32552 = (function (f,ch,meta32553){
this.f = f;
this.ch = ch;
this.meta32553 = meta32553;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32554,meta32553__$1){
var self__ = this;
var _32554__$1 = this;
return (new cljs.core.async.t_cljs$core$async32552(self__.f,self__.ch,meta32553__$1));
});

cljs.core.async.t_cljs$core$async32552.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32554){
var self__ = this;
var _32554__$1 = this;
return self__.meta32553;
});

cljs.core.async.t_cljs$core$async32552.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32552.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32552.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32552.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32552.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32552.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async32552.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32553","meta32553",-270231369,null)], null);
});

cljs.core.async.t_cljs$core$async32552.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32552.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32552";

cljs.core.async.t_cljs$core$async32552.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32552");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32552.
 */
cljs.core.async.__GT_t_cljs$core$async32552 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32552(f__$1,ch__$1,meta32553){
return (new cljs.core.async.t_cljs$core$async32552(f__$1,ch__$1,meta32553));
});

}

return (new cljs.core.async.t_cljs$core$async32552(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32587 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32587 = (function (p,ch,meta32588){
this.p = p;
this.ch = ch;
this.meta32588 = meta32588;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32587.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32589,meta32588__$1){
var self__ = this;
var _32589__$1 = this;
return (new cljs.core.async.t_cljs$core$async32587(self__.p,self__.ch,meta32588__$1));
});

cljs.core.async.t_cljs$core$async32587.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32589){
var self__ = this;
var _32589__$1 = this;
return self__.meta32588;
});

cljs.core.async.t_cljs$core$async32587.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32587.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32587.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async32587.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32587.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32587.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32587.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32587.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32588","meta32588",-1751436326,null)], null);
});

cljs.core.async.t_cljs$core$async32587.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32587.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32587";

cljs.core.async.t_cljs$core$async32587.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32587");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32587.
 */
cljs.core.async.__GT_t_cljs$core$async32587 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32587(p__$1,ch__$1,meta32588){
return (new cljs.core.async.t_cljs$core$async32587(p__$1,ch__$1,meta32588));
});

}

return (new cljs.core.async.t_cljs$core$async32587(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32611 = arguments.length;
switch (G__32611) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30995__auto___34283 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30995__auto___34283,out){
return (function (){
var f__30996__auto__ = (function (){var switch__30767__auto__ = ((function (c__30995__auto___34283,out){
return (function (state_32640){
var state_val_32641 = (state_32640[(1)]);
if((state_val_32641 === (7))){
var inst_32636 = (state_32640[(2)]);
var state_32640__$1 = state_32640;
var statearr_32653_34284 = state_32640__$1;
(statearr_32653_34284[(2)] = inst_32636);

(statearr_32653_34284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32641 === (1))){
var state_32640__$1 = state_32640;
var statearr_32654_34285 = state_32640__$1;
(statearr_32654_34285[(2)] = null);

(statearr_32654_34285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32641 === (4))){
var inst_32622 = (state_32640[(7)]);
var inst_32622__$1 = (state_32640[(2)]);
var inst_32623 = (inst_32622__$1 == null);
var state_32640__$1 = (function (){var statearr_32674 = state_32640;
(statearr_32674[(7)] = inst_32622__$1);

return statearr_32674;
})();
if(cljs.core.truth_(inst_32623)){
var statearr_32679_34286 = state_32640__$1;
(statearr_32679_34286[(1)] = (5));

} else {
var statearr_32680_34287 = state_32640__$1;
(statearr_32680_34287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32641 === (6))){
var inst_32622 = (state_32640[(7)]);
var inst_32627 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32622) : p.call(null,inst_32622));
var state_32640__$1 = state_32640;
if(cljs.core.truth_(inst_32627)){
var statearr_32682_34288 = state_32640__$1;
(statearr_32682_34288[(1)] = (8));

} else {
var statearr_32683_34289 = state_32640__$1;
(statearr_32683_34289[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32641 === (3))){
var inst_32638 = (state_32640[(2)]);
var state_32640__$1 = state_32640;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32640__$1,inst_32638);
} else {
if((state_val_32641 === (2))){
var state_32640__$1 = state_32640;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32640__$1,(4),ch);
} else {
if((state_val_32641 === (11))){
var inst_32630 = (state_32640[(2)]);
var state_32640__$1 = state_32640;
var statearr_32694_34291 = state_32640__$1;
(statearr_32694_34291[(2)] = inst_32630);

(statearr_32694_34291[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32641 === (9))){
var state_32640__$1 = state_32640;
var statearr_32696_34293 = state_32640__$1;
(statearr_32696_34293[(2)] = null);

(statearr_32696_34293[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32641 === (5))){
var inst_32625 = cljs.core.async.close_BANG_(out);
var state_32640__$1 = state_32640;
var statearr_32699_34294 = state_32640__$1;
(statearr_32699_34294[(2)] = inst_32625);

(statearr_32699_34294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32641 === (10))){
var inst_32633 = (state_32640[(2)]);
var state_32640__$1 = (function (){var statearr_32701 = state_32640;
(statearr_32701[(8)] = inst_32633);

return statearr_32701;
})();
var statearr_32703_34295 = state_32640__$1;
(statearr_32703_34295[(2)] = null);

(statearr_32703_34295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32641 === (8))){
var inst_32622 = (state_32640[(7)]);
var state_32640__$1 = state_32640;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32640__$1,(11),out,inst_32622);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30995__auto___34283,out))
;
return ((function (switch__30767__auto__,c__30995__auto___34283,out){
return (function() {
var cljs$core$async$state_machine__30768__auto__ = null;
var cljs$core$async$state_machine__30768__auto____0 = (function (){
var statearr_32706 = [null,null,null,null,null,null,null,null,null];
(statearr_32706[(0)] = cljs$core$async$state_machine__30768__auto__);

(statearr_32706[(1)] = (1));

return statearr_32706;
});
var cljs$core$async$state_machine__30768__auto____1 = (function (state_32640){
while(true){
var ret_value__30769__auto__ = (function (){try{while(true){
var result__30770__auto__ = switch__30767__auto__(state_32640);
if(cljs.core.keyword_identical_QMARK_(result__30770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30770__auto__;
}
break;
}
}catch (e32707){if((e32707 instanceof Object)){
var ex__30771__auto__ = e32707;
var statearr_32708_34298 = state_32640;
(statearr_32708_34298[(5)] = ex__30771__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32707;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34299 = state_32640;
state_32640 = G__34299;
continue;
} else {
return ret_value__30769__auto__;
}
break;
}
});
cljs$core$async$state_machine__30768__auto__ = function(state_32640){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30768__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30768__auto____1.call(this,state_32640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30768__auto____0;
cljs$core$async$state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30768__auto____1;
return cljs$core$async$state_machine__30768__auto__;
})()
;})(switch__30767__auto__,c__30995__auto___34283,out))
})();
var state__30997__auto__ = (function (){var statearr_32715 = (f__30996__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30996__auto__.cljs$core$IFn$_invoke$arity$0() : f__30996__auto__.call(null));
(statearr_32715[(6)] = c__30995__auto___34283);

return statearr_32715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30997__auto__);
});})(c__30995__auto___34283,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32721 = arguments.length;
switch (G__32721) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30995__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30995__auto__){
return (function (){
var f__30996__auto__ = (function (){var switch__30767__auto__ = ((function (c__30995__auto__){
return (function (state_32822){
var state_val_32823 = (state_32822[(1)]);
if((state_val_32823 === (7))){
var inst_32817 = (state_32822[(2)]);
var state_32822__$1 = state_32822;
var statearr_32824_34306 = state_32822__$1;
(statearr_32824_34306[(2)] = inst_32817);

(statearr_32824_34306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (20))){
var inst_32782 = (state_32822[(7)]);
var inst_32798 = (state_32822[(2)]);
var inst_32799 = cljs.core.next(inst_32782);
var inst_32768 = inst_32799;
var inst_32769 = null;
var inst_32770 = (0);
var inst_32771 = (0);
var state_32822__$1 = (function (){var statearr_32829 = state_32822;
(statearr_32829[(8)] = inst_32771);

(statearr_32829[(9)] = inst_32798);

(statearr_32829[(10)] = inst_32769);

(statearr_32829[(11)] = inst_32770);

(statearr_32829[(12)] = inst_32768);

return statearr_32829;
})();
var statearr_32832_34308 = state_32822__$1;
(statearr_32832_34308[(2)] = null);

(statearr_32832_34308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (1))){
var state_32822__$1 = state_32822;
var statearr_32835_34309 = state_32822__$1;
(statearr_32835_34309[(2)] = null);

(statearr_32835_34309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (4))){
var inst_32753 = (state_32822[(13)]);
var inst_32753__$1 = (state_32822[(2)]);
var inst_32754 = (inst_32753__$1 == null);
var state_32822__$1 = (function (){var statearr_32837 = state_32822;
(statearr_32837[(13)] = inst_32753__$1);

return statearr_32837;
})();
if(cljs.core.truth_(inst_32754)){
var statearr_32839_34314 = state_32822__$1;
(statearr_32839_34314[(1)] = (5));

} else {
var statearr_32840_34315 = state_32822__$1;
(statearr_32840_34315[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (15))){
var state_32822__$1 = state_32822;
var statearr_32844_34316 = state_32822__$1;
(statearr_32844_34316[(2)] = null);

(statearr_32844_34316[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (21))){
var state_32822__$1 = state_32822;
var statearr_32845_34317 = state_32822__$1;
(statearr_32845_34317[(2)] = null);

(statearr_32845_34317[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (13))){
var inst_32771 = (state_32822[(8)]);
var inst_32769 = (state_32822[(10)]);
var inst_32770 = (state_32822[(11)]);
var inst_32768 = (state_32822[(12)]);
var inst_32778 = (state_32822[(2)]);
var inst_32779 = (inst_32771 + (1));
var tmp32841 = inst_32769;
var tmp32842 = inst_32770;
var tmp32843 = inst_32768;
var inst_32768__$1 = tmp32843;
var inst_32769__$1 = tmp32841;
var inst_32770__$1 = tmp32842;
var inst_32771__$1 = inst_32779;
var state_32822__$1 = (function (){var statearr_32849 = state_32822;
(statearr_32849[(8)] = inst_32771__$1);

(statearr_32849[(14)] = inst_32778);

(statearr_32849[(10)] = inst_32769__$1);

(statearr_32849[(11)] = inst_32770__$1);

(statearr_32849[(12)] = inst_32768__$1);

return statearr_32849;
})();
var statearr_32850_34318 = state_32822__$1;
(statearr_32850_34318[(2)] = null);

(statearr_32850_34318[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (22))){
var state_32822__$1 = state_32822;
var statearr_32874_34319 = state_32822__$1;
(statearr_32874_34319[(2)] = null);

(statearr_32874_34319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (6))){
var inst_32753 = (state_32822[(13)]);
var inst_32762 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32753) : f.call(null,inst_32753));
var inst_32763 = cljs.core.seq(inst_32762);
var inst_32768 = inst_32763;
var inst_32769 = null;
var inst_32770 = (0);
var inst_32771 = (0);
var state_32822__$1 = (function (){var statearr_32876 = state_32822;
(statearr_32876[(8)] = inst_32771);

(statearr_32876[(10)] = inst_32769);

(statearr_32876[(11)] = inst_32770);

(statearr_32876[(12)] = inst_32768);

return statearr_32876;
})();
var statearr_32877_34320 = state_32822__$1;
(statearr_32877_34320[(2)] = null);

(statearr_32877_34320[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (17))){
var inst_32782 = (state_32822[(7)]);
var inst_32787 = cljs.core.chunk_first(inst_32782);
var inst_32789 = cljs.core.chunk_rest(inst_32782);
var inst_32790 = cljs.core.count(inst_32787);
var inst_32768 = inst_32789;
var inst_32769 = inst_32787;
var inst_32770 = inst_32790;
var inst_32771 = (0);
var state_32822__$1 = (function (){var statearr_32878 = state_32822;
(statearr_32878[(8)] = inst_32771);

(statearr_32878[(10)] = inst_32769);

(statearr_32878[(11)] = inst_32770);

(statearr_32878[(12)] = inst_32768);

return statearr_32878;
})();
var statearr_32879_34321 = state_32822__$1;
(statearr_32879_34321[(2)] = null);

(statearr_32879_34321[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (3))){
var inst_32819 = (state_32822[(2)]);
var state_32822__$1 = state_32822;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32822__$1,inst_32819);
} else {
if((state_val_32823 === (12))){
var inst_32807 = (state_32822[(2)]);
var state_32822__$1 = state_32822;
var statearr_32883_34323 = state_32822__$1;
(statearr_32883_34323[(2)] = inst_32807);

(statearr_32883_34323[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (2))){
var state_32822__$1 = state_32822;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32822__$1,(4),in$);
} else {
if((state_val_32823 === (23))){
var inst_32815 = (state_32822[(2)]);
var state_32822__$1 = state_32822;
var statearr_32888_34324 = state_32822__$1;
(statearr_32888_34324[(2)] = inst_32815);

(statearr_32888_34324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (19))){
var inst_32802 = (state_32822[(2)]);
var state_32822__$1 = state_32822;
var statearr_32891_34325 = state_32822__$1;
(statearr_32891_34325[(2)] = inst_32802);

(statearr_32891_34325[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (11))){
var inst_32782 = (state_32822[(7)]);
var inst_32768 = (state_32822[(12)]);
var inst_32782__$1 = cljs.core.seq(inst_32768);
var state_32822__$1 = (function (){var statearr_32894 = state_32822;
(statearr_32894[(7)] = inst_32782__$1);

return statearr_32894;
})();
if(inst_32782__$1){
var statearr_32895_34326 = state_32822__$1;
(statearr_32895_34326[(1)] = (14));

} else {
var statearr_32896_34327 = state_32822__$1;
(statearr_32896_34327[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (9))){
var inst_32809 = (state_32822[(2)]);
var inst_32810 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32822__$1 = (function (){var statearr_32897 = state_32822;
(statearr_32897[(15)] = inst_32809);

return statearr_32897;
})();
if(cljs.core.truth_(inst_32810)){
var statearr_32898_34328 = state_32822__$1;
(statearr_32898_34328[(1)] = (21));

} else {
var statearr_32899_34329 = state_32822__$1;
(statearr_32899_34329[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (5))){
var inst_32756 = cljs.core.async.close_BANG_(out);
var state_32822__$1 = state_32822;
var statearr_32901_34335 = state_32822__$1;
(statearr_32901_34335[(2)] = inst_32756);

(statearr_32901_34335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (14))){
var inst_32782 = (state_32822[(7)]);
var inst_32785 = cljs.core.chunked_seq_QMARK_(inst_32782);
var state_32822__$1 = state_32822;
if(inst_32785){
var statearr_32906_34338 = state_32822__$1;
(statearr_32906_34338[(1)] = (17));

} else {
var statearr_32907_34339 = state_32822__$1;
(statearr_32907_34339[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (16))){
var inst_32805 = (state_32822[(2)]);
var state_32822__$1 = state_32822;
var statearr_32908_34340 = state_32822__$1;
(statearr_32908_34340[(2)] = inst_32805);

(statearr_32908_34340[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (10))){
var inst_32771 = (state_32822[(8)]);
var inst_32769 = (state_32822[(10)]);
var inst_32776 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32769,inst_32771);
var state_32822__$1 = state_32822;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32822__$1,(13),out,inst_32776);
} else {
if((state_val_32823 === (18))){
var inst_32782 = (state_32822[(7)]);
var inst_32796 = cljs.core.first(inst_32782);
var state_32822__$1 = state_32822;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32822__$1,(20),out,inst_32796);
} else {
if((state_val_32823 === (8))){
var inst_32771 = (state_32822[(8)]);
var inst_32770 = (state_32822[(11)]);
var inst_32773 = (inst_32771 < inst_32770);
var inst_32774 = inst_32773;
var state_32822__$1 = state_32822;
if(cljs.core.truth_(inst_32774)){
var statearr_32913_34343 = state_32822__$1;
(statearr_32913_34343[(1)] = (10));

} else {
var statearr_32914_34344 = state_32822__$1;
(statearr_32914_34344[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30995__auto__))
;
return ((function (switch__30767__auto__,c__30995__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30768__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30768__auto____0 = (function (){
var statearr_32917 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32917[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30768__auto__);

(statearr_32917[(1)] = (1));

return statearr_32917;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30768__auto____1 = (function (state_32822){
while(true){
var ret_value__30769__auto__ = (function (){try{while(true){
var result__30770__auto__ = switch__30767__auto__(state_32822);
if(cljs.core.keyword_identical_QMARK_(result__30770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30770__auto__;
}
break;
}
}catch (e32919){if((e32919 instanceof Object)){
var ex__30771__auto__ = e32919;
var statearr_32920_34346 = state_32822;
(statearr_32920_34346[(5)] = ex__30771__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32919;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34347 = state_32822;
state_32822 = G__34347;
continue;
} else {
return ret_value__30769__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30768__auto__ = function(state_32822){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30768__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30768__auto____1.call(this,state_32822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30768__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30768__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30768__auto__;
})()
;})(switch__30767__auto__,c__30995__auto__))
})();
var state__30997__auto__ = (function (){var statearr_32921 = (f__30996__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30996__auto__.cljs$core$IFn$_invoke$arity$0() : f__30996__auto__.call(null));
(statearr_32921[(6)] = c__30995__auto__);

return statearr_32921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30997__auto__);
});})(c__30995__auto__))
);

return c__30995__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32927 = arguments.length;
switch (G__32927) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32930 = arguments.length;
switch (G__32930) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32945 = arguments.length;
switch (G__32945) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30995__auto___34466 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30995__auto___34466,out){
return (function (){
var f__30996__auto__ = (function (){var switch__30767__auto__ = ((function (c__30995__auto___34466,out){
return (function (state_32969){
var state_val_32970 = (state_32969[(1)]);
if((state_val_32970 === (7))){
var inst_32964 = (state_32969[(2)]);
var state_32969__$1 = state_32969;
var statearr_32971_34471 = state_32969__$1;
(statearr_32971_34471[(2)] = inst_32964);

(statearr_32971_34471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32970 === (1))){
var inst_32946 = null;
var state_32969__$1 = (function (){var statearr_32972 = state_32969;
(statearr_32972[(7)] = inst_32946);

return statearr_32972;
})();
var statearr_32973_34472 = state_32969__$1;
(statearr_32973_34472[(2)] = null);

(statearr_32973_34472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32970 === (4))){
var inst_32949 = (state_32969[(8)]);
var inst_32949__$1 = (state_32969[(2)]);
var inst_32950 = (inst_32949__$1 == null);
var inst_32951 = cljs.core.not(inst_32950);
var state_32969__$1 = (function (){var statearr_32974 = state_32969;
(statearr_32974[(8)] = inst_32949__$1);

return statearr_32974;
})();
if(inst_32951){
var statearr_32975_34473 = state_32969__$1;
(statearr_32975_34473[(1)] = (5));

} else {
var statearr_32976_34474 = state_32969__$1;
(statearr_32976_34474[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32970 === (6))){
var state_32969__$1 = state_32969;
var statearr_32977_34475 = state_32969__$1;
(statearr_32977_34475[(2)] = null);

(statearr_32977_34475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32970 === (3))){
var inst_32966 = (state_32969[(2)]);
var inst_32967 = cljs.core.async.close_BANG_(out);
var state_32969__$1 = (function (){var statearr_32978 = state_32969;
(statearr_32978[(9)] = inst_32966);

return statearr_32978;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32969__$1,inst_32967);
} else {
if((state_val_32970 === (2))){
var state_32969__$1 = state_32969;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32969__$1,(4),ch);
} else {
if((state_val_32970 === (11))){
var inst_32949 = (state_32969[(8)]);
var inst_32958 = (state_32969[(2)]);
var inst_32946 = inst_32949;
var state_32969__$1 = (function (){var statearr_32979 = state_32969;
(statearr_32979[(10)] = inst_32958);

(statearr_32979[(7)] = inst_32946);

return statearr_32979;
})();
var statearr_32980_34476 = state_32969__$1;
(statearr_32980_34476[(2)] = null);

(statearr_32980_34476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32970 === (9))){
var inst_32949 = (state_32969[(8)]);
var state_32969__$1 = state_32969;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32969__$1,(11),out,inst_32949);
} else {
if((state_val_32970 === (5))){
var inst_32949 = (state_32969[(8)]);
var inst_32946 = (state_32969[(7)]);
var inst_32953 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32949,inst_32946);
var state_32969__$1 = state_32969;
if(inst_32953){
var statearr_32982_34477 = state_32969__$1;
(statearr_32982_34477[(1)] = (8));

} else {
var statearr_32983_34478 = state_32969__$1;
(statearr_32983_34478[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32970 === (10))){
var inst_32961 = (state_32969[(2)]);
var state_32969__$1 = state_32969;
var statearr_32984_34479 = state_32969__$1;
(statearr_32984_34479[(2)] = inst_32961);

(statearr_32984_34479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32970 === (8))){
var inst_32946 = (state_32969[(7)]);
var tmp32981 = inst_32946;
var inst_32946__$1 = tmp32981;
var state_32969__$1 = (function (){var statearr_32985 = state_32969;
(statearr_32985[(7)] = inst_32946__$1);

return statearr_32985;
})();
var statearr_32986_34480 = state_32969__$1;
(statearr_32986_34480[(2)] = null);

(statearr_32986_34480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30995__auto___34466,out))
;
return ((function (switch__30767__auto__,c__30995__auto___34466,out){
return (function() {
var cljs$core$async$state_machine__30768__auto__ = null;
var cljs$core$async$state_machine__30768__auto____0 = (function (){
var statearr_32987 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32987[(0)] = cljs$core$async$state_machine__30768__auto__);

(statearr_32987[(1)] = (1));

return statearr_32987;
});
var cljs$core$async$state_machine__30768__auto____1 = (function (state_32969){
while(true){
var ret_value__30769__auto__ = (function (){try{while(true){
var result__30770__auto__ = switch__30767__auto__(state_32969);
if(cljs.core.keyword_identical_QMARK_(result__30770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30770__auto__;
}
break;
}
}catch (e32988){if((e32988 instanceof Object)){
var ex__30771__auto__ = e32988;
var statearr_32989_34481 = state_32969;
(statearr_32989_34481[(5)] = ex__30771__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32988;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34482 = state_32969;
state_32969 = G__34482;
continue;
} else {
return ret_value__30769__auto__;
}
break;
}
});
cljs$core$async$state_machine__30768__auto__ = function(state_32969){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30768__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30768__auto____1.call(this,state_32969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30768__auto____0;
cljs$core$async$state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30768__auto____1;
return cljs$core$async$state_machine__30768__auto__;
})()
;})(switch__30767__auto__,c__30995__auto___34466,out))
})();
var state__30997__auto__ = (function (){var statearr_32990 = (f__30996__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30996__auto__.cljs$core$IFn$_invoke$arity$0() : f__30996__auto__.call(null));
(statearr_32990[(6)] = c__30995__auto___34466);

return statearr_32990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30997__auto__);
});})(c__30995__auto___34466,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32992 = arguments.length;
switch (G__32992) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30995__auto___34486 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30995__auto___34486,out){
return (function (){
var f__30996__auto__ = (function (){var switch__30767__auto__ = ((function (c__30995__auto___34486,out){
return (function (state_33030){
var state_val_33031 = (state_33030[(1)]);
if((state_val_33031 === (7))){
var inst_33026 = (state_33030[(2)]);
var state_33030__$1 = state_33030;
var statearr_33032_34491 = state_33030__$1;
(statearr_33032_34491[(2)] = inst_33026);

(statearr_33032_34491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (1))){
var inst_32993 = (new Array(n));
var inst_32994 = inst_32993;
var inst_32995 = (0);
var state_33030__$1 = (function (){var statearr_33033 = state_33030;
(statearr_33033[(7)] = inst_32995);

(statearr_33033[(8)] = inst_32994);

return statearr_33033;
})();
var statearr_33034_34501 = state_33030__$1;
(statearr_33034_34501[(2)] = null);

(statearr_33034_34501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (4))){
var inst_32998 = (state_33030[(9)]);
var inst_32998__$1 = (state_33030[(2)]);
var inst_32999 = (inst_32998__$1 == null);
var inst_33000 = cljs.core.not(inst_32999);
var state_33030__$1 = (function (){var statearr_33035 = state_33030;
(statearr_33035[(9)] = inst_32998__$1);

return statearr_33035;
})();
if(inst_33000){
var statearr_33036_34511 = state_33030__$1;
(statearr_33036_34511[(1)] = (5));

} else {
var statearr_33037_34515 = state_33030__$1;
(statearr_33037_34515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (15))){
var inst_33020 = (state_33030[(2)]);
var state_33030__$1 = state_33030;
var statearr_33038_34517 = state_33030__$1;
(statearr_33038_34517[(2)] = inst_33020);

(statearr_33038_34517[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (13))){
var state_33030__$1 = state_33030;
var statearr_33039_34518 = state_33030__$1;
(statearr_33039_34518[(2)] = null);

(statearr_33039_34518[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (6))){
var inst_32995 = (state_33030[(7)]);
var inst_33016 = (inst_32995 > (0));
var state_33030__$1 = state_33030;
if(cljs.core.truth_(inst_33016)){
var statearr_33040_34526 = state_33030__$1;
(statearr_33040_34526[(1)] = (12));

} else {
var statearr_33041_34527 = state_33030__$1;
(statearr_33041_34527[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (3))){
var inst_33028 = (state_33030[(2)]);
var state_33030__$1 = state_33030;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33030__$1,inst_33028);
} else {
if((state_val_33031 === (12))){
var inst_32994 = (state_33030[(8)]);
var inst_33018 = cljs.core.vec(inst_32994);
var state_33030__$1 = state_33030;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33030__$1,(15),out,inst_33018);
} else {
if((state_val_33031 === (2))){
var state_33030__$1 = state_33030;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33030__$1,(4),ch);
} else {
if((state_val_33031 === (11))){
var inst_33010 = (state_33030[(2)]);
var inst_33011 = (new Array(n));
var inst_32994 = inst_33011;
var inst_32995 = (0);
var state_33030__$1 = (function (){var statearr_33042 = state_33030;
(statearr_33042[(7)] = inst_32995);

(statearr_33042[(10)] = inst_33010);

(statearr_33042[(8)] = inst_32994);

return statearr_33042;
})();
var statearr_33043_34528 = state_33030__$1;
(statearr_33043_34528[(2)] = null);

(statearr_33043_34528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (9))){
var inst_32994 = (state_33030[(8)]);
var inst_33008 = cljs.core.vec(inst_32994);
var state_33030__$1 = state_33030;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33030__$1,(11),out,inst_33008);
} else {
if((state_val_33031 === (5))){
var inst_33003 = (state_33030[(11)]);
var inst_32995 = (state_33030[(7)]);
var inst_32994 = (state_33030[(8)]);
var inst_32998 = (state_33030[(9)]);
var inst_33002 = (inst_32994[inst_32995] = inst_32998);
var inst_33003__$1 = (inst_32995 + (1));
var inst_33004 = (inst_33003__$1 < n);
var state_33030__$1 = (function (){var statearr_33048 = state_33030;
(statearr_33048[(11)] = inst_33003__$1);

(statearr_33048[(12)] = inst_33002);

return statearr_33048;
})();
if(cljs.core.truth_(inst_33004)){
var statearr_33049_34532 = state_33030__$1;
(statearr_33049_34532[(1)] = (8));

} else {
var statearr_33050_34533 = state_33030__$1;
(statearr_33050_34533[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (14))){
var inst_33023 = (state_33030[(2)]);
var inst_33024 = cljs.core.async.close_BANG_(out);
var state_33030__$1 = (function (){var statearr_33055 = state_33030;
(statearr_33055[(13)] = inst_33023);

return statearr_33055;
})();
var statearr_33056_34535 = state_33030__$1;
(statearr_33056_34535[(2)] = inst_33024);

(statearr_33056_34535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (10))){
var inst_33014 = (state_33030[(2)]);
var state_33030__$1 = state_33030;
var statearr_33057_34536 = state_33030__$1;
(statearr_33057_34536[(2)] = inst_33014);

(statearr_33057_34536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33031 === (8))){
var inst_33003 = (state_33030[(11)]);
var inst_32994 = (state_33030[(8)]);
var tmp33051 = inst_32994;
var inst_32994__$1 = tmp33051;
var inst_32995 = inst_33003;
var state_33030__$1 = (function (){var statearr_33058 = state_33030;
(statearr_33058[(7)] = inst_32995);

(statearr_33058[(8)] = inst_32994__$1);

return statearr_33058;
})();
var statearr_33059_34537 = state_33030__$1;
(statearr_33059_34537[(2)] = null);

(statearr_33059_34537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30995__auto___34486,out))
;
return ((function (switch__30767__auto__,c__30995__auto___34486,out){
return (function() {
var cljs$core$async$state_machine__30768__auto__ = null;
var cljs$core$async$state_machine__30768__auto____0 = (function (){
var statearr_33060 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33060[(0)] = cljs$core$async$state_machine__30768__auto__);

(statearr_33060[(1)] = (1));

return statearr_33060;
});
var cljs$core$async$state_machine__30768__auto____1 = (function (state_33030){
while(true){
var ret_value__30769__auto__ = (function (){try{while(true){
var result__30770__auto__ = switch__30767__auto__(state_33030);
if(cljs.core.keyword_identical_QMARK_(result__30770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30770__auto__;
}
break;
}
}catch (e33061){if((e33061 instanceof Object)){
var ex__30771__auto__ = e33061;
var statearr_33062_34541 = state_33030;
(statearr_33062_34541[(5)] = ex__30771__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33061;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34543 = state_33030;
state_33030 = G__34543;
continue;
} else {
return ret_value__30769__auto__;
}
break;
}
});
cljs$core$async$state_machine__30768__auto__ = function(state_33030){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30768__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30768__auto____1.call(this,state_33030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30768__auto____0;
cljs$core$async$state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30768__auto____1;
return cljs$core$async$state_machine__30768__auto__;
})()
;})(switch__30767__auto__,c__30995__auto___34486,out))
})();
var state__30997__auto__ = (function (){var statearr_33063 = (f__30996__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30996__auto__.cljs$core$IFn$_invoke$arity$0() : f__30996__auto__.call(null));
(statearr_33063[(6)] = c__30995__auto___34486);

return statearr_33063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30997__auto__);
});})(c__30995__auto___34486,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33065 = arguments.length;
switch (G__33065) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30995__auto___34555 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30995__auto___34555,out){
return (function (){
var f__30996__auto__ = (function (){var switch__30767__auto__ = ((function (c__30995__auto___34555,out){
return (function (state_33109){
var state_val_33110 = (state_33109[(1)]);
if((state_val_33110 === (7))){
var inst_33105 = (state_33109[(2)]);
var state_33109__$1 = state_33109;
var statearr_33111_34556 = state_33109__$1;
(statearr_33111_34556[(2)] = inst_33105);

(statearr_33111_34556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (1))){
var inst_33066 = [];
var inst_33067 = inst_33066;
var inst_33068 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33109__$1 = (function (){var statearr_33112 = state_33109;
(statearr_33112[(7)] = inst_33067);

(statearr_33112[(8)] = inst_33068);

return statearr_33112;
})();
var statearr_33113_34560 = state_33109__$1;
(statearr_33113_34560[(2)] = null);

(statearr_33113_34560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (4))){
var inst_33073 = (state_33109[(9)]);
var inst_33073__$1 = (state_33109[(2)]);
var inst_33074 = (inst_33073__$1 == null);
var inst_33075 = cljs.core.not(inst_33074);
var state_33109__$1 = (function (){var statearr_33114 = state_33109;
(statearr_33114[(9)] = inst_33073__$1);

return statearr_33114;
})();
if(inst_33075){
var statearr_33115_34564 = state_33109__$1;
(statearr_33115_34564[(1)] = (5));

} else {
var statearr_33116_34565 = state_33109__$1;
(statearr_33116_34565[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (15))){
var inst_33099 = (state_33109[(2)]);
var state_33109__$1 = state_33109;
var statearr_33117_34566 = state_33109__$1;
(statearr_33117_34566[(2)] = inst_33099);

(statearr_33117_34566[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (13))){
var state_33109__$1 = state_33109;
var statearr_33118_34567 = state_33109__$1;
(statearr_33118_34567[(2)] = null);

(statearr_33118_34567[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (6))){
var inst_33067 = (state_33109[(7)]);
var inst_33094 = inst_33067.length;
var inst_33095 = (inst_33094 > (0));
var state_33109__$1 = state_33109;
if(cljs.core.truth_(inst_33095)){
var statearr_33119_34575 = state_33109__$1;
(statearr_33119_34575[(1)] = (12));

} else {
var statearr_33120_34576 = state_33109__$1;
(statearr_33120_34576[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (3))){
var inst_33107 = (state_33109[(2)]);
var state_33109__$1 = state_33109;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33109__$1,inst_33107);
} else {
if((state_val_33110 === (12))){
var inst_33067 = (state_33109[(7)]);
var inst_33097 = cljs.core.vec(inst_33067);
var state_33109__$1 = state_33109;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33109__$1,(15),out,inst_33097);
} else {
if((state_val_33110 === (2))){
var state_33109__$1 = state_33109;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33109__$1,(4),ch);
} else {
if((state_val_33110 === (11))){
var inst_33073 = (state_33109[(9)]);
var inst_33077 = (state_33109[(10)]);
var inst_33087 = (state_33109[(2)]);
var inst_33088 = [];
var inst_33089 = inst_33088.push(inst_33073);
var inst_33067 = inst_33088;
var inst_33068 = inst_33077;
var state_33109__$1 = (function (){var statearr_33121 = state_33109;
(statearr_33121[(11)] = inst_33089);

(statearr_33121[(7)] = inst_33067);

(statearr_33121[(8)] = inst_33068);

(statearr_33121[(12)] = inst_33087);

return statearr_33121;
})();
var statearr_33128_34579 = state_33109__$1;
(statearr_33128_34579[(2)] = null);

(statearr_33128_34579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (9))){
var inst_33067 = (state_33109[(7)]);
var inst_33085 = cljs.core.vec(inst_33067);
var state_33109__$1 = state_33109;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33109__$1,(11),out,inst_33085);
} else {
if((state_val_33110 === (5))){
var inst_33073 = (state_33109[(9)]);
var inst_33068 = (state_33109[(8)]);
var inst_33077 = (state_33109[(10)]);
var inst_33077__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33073) : f.call(null,inst_33073));
var inst_33078 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33077__$1,inst_33068);
var inst_33079 = cljs.core.keyword_identical_QMARK_(inst_33068,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33080 = ((inst_33078) || (inst_33079));
var state_33109__$1 = (function (){var statearr_33129 = state_33109;
(statearr_33129[(10)] = inst_33077__$1);

return statearr_33129;
})();
if(cljs.core.truth_(inst_33080)){
var statearr_33130_34584 = state_33109__$1;
(statearr_33130_34584[(1)] = (8));

} else {
var statearr_33131_34585 = state_33109__$1;
(statearr_33131_34585[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (14))){
var inst_33102 = (state_33109[(2)]);
var inst_33103 = cljs.core.async.close_BANG_(out);
var state_33109__$1 = (function (){var statearr_33133 = state_33109;
(statearr_33133[(13)] = inst_33102);

return statearr_33133;
})();
var statearr_33134_34587 = state_33109__$1;
(statearr_33134_34587[(2)] = inst_33103);

(statearr_33134_34587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (10))){
var inst_33092 = (state_33109[(2)]);
var state_33109__$1 = state_33109;
var statearr_33135_34588 = state_33109__$1;
(statearr_33135_34588[(2)] = inst_33092);

(statearr_33135_34588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (8))){
var inst_33073 = (state_33109[(9)]);
var inst_33067 = (state_33109[(7)]);
var inst_33077 = (state_33109[(10)]);
var inst_33082 = inst_33067.push(inst_33073);
var tmp33132 = inst_33067;
var inst_33067__$1 = tmp33132;
var inst_33068 = inst_33077;
var state_33109__$1 = (function (){var statearr_33136 = state_33109;
(statearr_33136[(7)] = inst_33067__$1);

(statearr_33136[(8)] = inst_33068);

(statearr_33136[(14)] = inst_33082);

return statearr_33136;
})();
var statearr_33137_34590 = state_33109__$1;
(statearr_33137_34590[(2)] = null);

(statearr_33137_34590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30995__auto___34555,out))
;
return ((function (switch__30767__auto__,c__30995__auto___34555,out){
return (function() {
var cljs$core$async$state_machine__30768__auto__ = null;
var cljs$core$async$state_machine__30768__auto____0 = (function (){
var statearr_33138 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33138[(0)] = cljs$core$async$state_machine__30768__auto__);

(statearr_33138[(1)] = (1));

return statearr_33138;
});
var cljs$core$async$state_machine__30768__auto____1 = (function (state_33109){
while(true){
var ret_value__30769__auto__ = (function (){try{while(true){
var result__30770__auto__ = switch__30767__auto__(state_33109);
if(cljs.core.keyword_identical_QMARK_(result__30770__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30770__auto__;
}
break;
}
}catch (e33139){if((e33139 instanceof Object)){
var ex__30771__auto__ = e33139;
var statearr_33140_34592 = state_33109;
(statearr_33140_34592[(5)] = ex__30771__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33139;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30769__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34593 = state_33109;
state_33109 = G__34593;
continue;
} else {
return ret_value__30769__auto__;
}
break;
}
});
cljs$core$async$state_machine__30768__auto__ = function(state_33109){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30768__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30768__auto____1.call(this,state_33109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30768__auto____0;
cljs$core$async$state_machine__30768__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30768__auto____1;
return cljs$core$async$state_machine__30768__auto__;
})()
;})(switch__30767__auto__,c__30995__auto___34555,out))
})();
var state__30997__auto__ = (function (){var statearr_33141 = (f__30996__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30996__auto__.cljs$core$IFn$_invoke$arity$0() : f__30996__auto__.call(null));
(statearr_33141[(6)] = c__30995__auto___34555);

return statearr_33141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30997__auto__);
});})(c__30995__auto___34555,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
