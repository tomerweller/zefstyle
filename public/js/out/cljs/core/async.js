// Compiled by ClojureScript 1.9.36 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args24623 = [];
var len__22749__auto___24629 = arguments.length;
var i__22750__auto___24630 = (0);
while(true){
if((i__22750__auto___24630 < len__22749__auto___24629)){
args24623.push((arguments[i__22750__auto___24630]));

var G__24631 = (i__22750__auto___24630 + (1));
i__22750__auto___24630 = G__24631;
continue;
} else {
}
break;
}

var G__24625 = args24623.length;
switch (G__24625) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24623.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async24626 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24626 = (function (f,blockable,meta24627){
this.f = f;
this.blockable = blockable;
this.meta24627 = meta24627;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24626.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24628,meta24627__$1){
var self__ = this;
var _24628__$1 = this;
return (new cljs.core.async.t_cljs$core$async24626(self__.f,self__.blockable,meta24627__$1));
});

cljs.core.async.t_cljs$core$async24626.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24628){
var self__ = this;
var _24628__$1 = this;
return self__.meta24627;
});

cljs.core.async.t_cljs$core$async24626.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24626.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24626.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24626.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24626.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24627","meta24627",-943373179,null)], null);
});

cljs.core.async.t_cljs$core$async24626.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24626.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24626";

cljs.core.async.t_cljs$core$async24626.cljs$lang$ctorPrWriter = (function (this__22280__auto__,writer__22281__auto__,opt__22282__auto__){
return cljs.core._write.call(null,writer__22281__auto__,"cljs.core.async/t_cljs$core$async24626");
});

cljs.core.async.__GT_t_cljs$core$async24626 = (function cljs$core$async$__GT_t_cljs$core$async24626(f__$1,blockable__$1,meta24627){
return (new cljs.core.async.t_cljs$core$async24626(f__$1,blockable__$1,meta24627));
});

}

return (new cljs.core.async.t_cljs$core$async24626(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var args24635 = [];
var len__22749__auto___24638 = arguments.length;
var i__22750__auto___24639 = (0);
while(true){
if((i__22750__auto___24639 < len__22749__auto___24638)){
args24635.push((arguments[i__22750__auto___24639]));

var G__24640 = (i__22750__auto___24639 + (1));
i__22750__auto___24639 = G__24640;
continue;
} else {
}
break;
}

var G__24637 = args24635.length;
switch (G__24637) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24635.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var args24642 = [];
var len__22749__auto___24645 = arguments.length;
var i__22750__auto___24646 = (0);
while(true){
if((i__22750__auto___24646 < len__22749__auto___24645)){
args24642.push((arguments[i__22750__auto___24646]));

var G__24647 = (i__22750__auto___24646 + (1));
i__22750__auto___24646 = G__24647;
continue;
} else {
}
break;
}

var G__24644 = args24642.length;
switch (G__24644) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24642.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var args24649 = [];
var len__22749__auto___24652 = arguments.length;
var i__22750__auto___24653 = (0);
while(true){
if((i__22750__auto___24653 < len__22749__auto___24652)){
args24649.push((arguments[i__22750__auto___24653]));

var G__24654 = (i__22750__auto___24653 + (1));
i__22750__auto___24653 = G__24654;
continue;
} else {
}
break;
}

var G__24651 = args24649.length;
switch (G__24651) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24649.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24656 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24656);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24656,ret){
return (function (){
return fn1.call(null,val_24656);
});})(val_24656,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args24657 = [];
var len__22749__auto___24660 = arguments.length;
var i__22750__auto___24661 = (0);
while(true){
if((i__22750__auto___24661 < len__22749__auto___24660)){
args24657.push((arguments[i__22750__auto___24661]));

var G__24662 = (i__22750__auto___24661 + (1));
i__22750__auto___24661 = G__24662;
continue;
} else {
}
break;
}

var G__24659 = args24657.length;
switch (G__24659) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24657.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__22589__auto___24664 = n;
var x_24665 = (0);
while(true){
if((x_24665 < n__22589__auto___24664)){
(a[x_24665] = (0));

var G__24666 = (x_24665 + (1));
x_24665 = G__24666;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__24667 = (i + (1));
i = G__24667;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async24671 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24671 = (function (alt_flag,flag,meta24672){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta24672 = meta24672;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24673,meta24672__$1){
var self__ = this;
var _24673__$1 = this;
return (new cljs.core.async.t_cljs$core$async24671(self__.alt_flag,self__.flag,meta24672__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24671.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24673){
var self__ = this;
var _24673__$1 = this;
return self__.meta24672;
});})(flag))
;

cljs.core.async.t_cljs$core$async24671.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24671.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24671.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24671.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24671.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24672","meta24672",1751495393,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24671.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24671.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24671";

cljs.core.async.t_cljs$core$async24671.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__22280__auto__,writer__22281__auto__,opt__22282__auto__){
return cljs.core._write.call(null,writer__22281__auto__,"cljs.core.async/t_cljs$core$async24671");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async24671 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24671(alt_flag__$1,flag__$1,meta24672){
return (new cljs.core.async.t_cljs$core$async24671(alt_flag__$1,flag__$1,meta24672));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24671(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24677 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24677 = (function (alt_handler,flag,cb,meta24678){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta24678 = meta24678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24679,meta24678__$1){
var self__ = this;
var _24679__$1 = this;
return (new cljs.core.async.t_cljs$core$async24677(self__.alt_handler,self__.flag,self__.cb,meta24678__$1));
});

cljs.core.async.t_cljs$core$async24677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24679){
var self__ = this;
var _24679__$1 = this;
return self__.meta24678;
});

cljs.core.async.t_cljs$core$async24677.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24677.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24677.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24677.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24677.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24678","meta24678",-2133885863,null)], null);
});

cljs.core.async.t_cljs$core$async24677.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24677.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24677";

cljs.core.async.t_cljs$core$async24677.cljs$lang$ctorPrWriter = (function (this__22280__auto__,writer__22281__auto__,opt__22282__auto__){
return cljs.core._write.call(null,writer__22281__auto__,"cljs.core.async/t_cljs$core$async24677");
});

cljs.core.async.__GT_t_cljs$core$async24677 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24677(alt_handler__$1,flag__$1,cb__$1,meta24678){
return (new cljs.core.async.t_cljs$core$async24677(alt_handler__$1,flag__$1,cb__$1,meta24678));
});

}

return (new cljs.core.async.t_cljs$core$async24677(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24680_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24680_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24681_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24681_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__21674__auto__ = wport;
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24682 = (i + (1));
i = G__24682;
continue;
}
} else {
return null;
}
break;
}
})();
var or__21674__auto__ = ret;
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__21662__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__21662__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__21662__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__22756__auto__ = [];
var len__22749__auto___24688 = arguments.length;
var i__22750__auto___24689 = (0);
while(true){
if((i__22750__auto___24689 < len__22749__auto___24688)){
args__22756__auto__.push((arguments[i__22750__auto___24689]));

var G__24690 = (i__22750__auto___24689 + (1));
i__22750__auto___24689 = G__24690;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((1) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22757__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24685){
var map__24686 = p__24685;
var map__24686__$1 = ((((!((map__24686 == null)))?((((map__24686.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24686.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24686):map__24686);
var opts = map__24686__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24683){
var G__24684 = cljs.core.first.call(null,seq24683);
var seq24683__$1 = cljs.core.next.call(null,seq24683);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24684,seq24683__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var args24691 = [];
var len__22749__auto___24741 = arguments.length;
var i__22750__auto___24742 = (0);
while(true){
if((i__22750__auto___24742 < len__22749__auto___24741)){
args24691.push((arguments[i__22750__auto___24742]));

var G__24743 = (i__22750__auto___24742 + (1));
i__22750__auto___24742 = G__24743;
continue;
} else {
}
break;
}

var G__24693 = args24691.length;
switch (G__24693) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24691.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24577__auto___24745 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto___24745){
return (function (){
var f__24578__auto__ = (function (){var switch__24465__auto__ = ((function (c__24577__auto___24745){
return (function (state_24717){
var state_val_24718 = (state_24717[(1)]);
if((state_val_24718 === (7))){
var inst_24713 = (state_24717[(2)]);
var state_24717__$1 = state_24717;
var statearr_24719_24746 = state_24717__$1;
(statearr_24719_24746[(2)] = inst_24713);

(statearr_24719_24746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24718 === (1))){
var state_24717__$1 = state_24717;
var statearr_24720_24747 = state_24717__$1;
(statearr_24720_24747[(2)] = null);

(statearr_24720_24747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24718 === (4))){
var inst_24696 = (state_24717[(7)]);
var inst_24696__$1 = (state_24717[(2)]);
var inst_24697 = (inst_24696__$1 == null);
var state_24717__$1 = (function (){var statearr_24721 = state_24717;
(statearr_24721[(7)] = inst_24696__$1);

return statearr_24721;
})();
if(cljs.core.truth_(inst_24697)){
var statearr_24722_24748 = state_24717__$1;
(statearr_24722_24748[(1)] = (5));

} else {
var statearr_24723_24749 = state_24717__$1;
(statearr_24723_24749[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24718 === (13))){
var state_24717__$1 = state_24717;
var statearr_24724_24750 = state_24717__$1;
(statearr_24724_24750[(2)] = null);

(statearr_24724_24750[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24718 === (6))){
var inst_24696 = (state_24717[(7)]);
var state_24717__$1 = state_24717;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24717__$1,(11),to,inst_24696);
} else {
if((state_val_24718 === (3))){
var inst_24715 = (state_24717[(2)]);
var state_24717__$1 = state_24717;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24717__$1,inst_24715);
} else {
if((state_val_24718 === (12))){
var state_24717__$1 = state_24717;
var statearr_24725_24751 = state_24717__$1;
(statearr_24725_24751[(2)] = null);

(statearr_24725_24751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24718 === (2))){
var state_24717__$1 = state_24717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24717__$1,(4),from);
} else {
if((state_val_24718 === (11))){
var inst_24706 = (state_24717[(2)]);
var state_24717__$1 = state_24717;
if(cljs.core.truth_(inst_24706)){
var statearr_24726_24752 = state_24717__$1;
(statearr_24726_24752[(1)] = (12));

} else {
var statearr_24727_24753 = state_24717__$1;
(statearr_24727_24753[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24718 === (9))){
var state_24717__$1 = state_24717;
var statearr_24728_24754 = state_24717__$1;
(statearr_24728_24754[(2)] = null);

(statearr_24728_24754[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24718 === (5))){
var state_24717__$1 = state_24717;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24729_24755 = state_24717__$1;
(statearr_24729_24755[(1)] = (8));

} else {
var statearr_24730_24756 = state_24717__$1;
(statearr_24730_24756[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24718 === (14))){
var inst_24711 = (state_24717[(2)]);
var state_24717__$1 = state_24717;
var statearr_24731_24757 = state_24717__$1;
(statearr_24731_24757[(2)] = inst_24711);

(statearr_24731_24757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24718 === (10))){
var inst_24703 = (state_24717[(2)]);
var state_24717__$1 = state_24717;
var statearr_24732_24758 = state_24717__$1;
(statearr_24732_24758[(2)] = inst_24703);

(statearr_24732_24758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24718 === (8))){
var inst_24700 = cljs.core.async.close_BANG_.call(null,to);
var state_24717__$1 = state_24717;
var statearr_24733_24759 = state_24717__$1;
(statearr_24733_24759[(2)] = inst_24700);

(statearr_24733_24759[(1)] = (10));


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
});})(c__24577__auto___24745))
;
return ((function (switch__24465__auto__,c__24577__auto___24745){
return (function() {
var cljs$core$async$state_machine__24466__auto__ = null;
var cljs$core$async$state_machine__24466__auto____0 = (function (){
var statearr_24737 = [null,null,null,null,null,null,null,null];
(statearr_24737[(0)] = cljs$core$async$state_machine__24466__auto__);

(statearr_24737[(1)] = (1));

return statearr_24737;
});
var cljs$core$async$state_machine__24466__auto____1 = (function (state_24717){
while(true){
var ret_value__24467__auto__ = (function (){try{while(true){
var result__24468__auto__ = switch__24465__auto__.call(null,state_24717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24468__auto__;
}
break;
}
}catch (e24738){if((e24738 instanceof Object)){
var ex__24469__auto__ = e24738;
var statearr_24739_24760 = state_24717;
(statearr_24739_24760[(5)] = ex__24469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24761 = state_24717;
state_24717 = G__24761;
continue;
} else {
return ret_value__24467__auto__;
}
break;
}
});
cljs$core$async$state_machine__24466__auto__ = function(state_24717){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24466__auto____1.call(this,state_24717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24466__auto____0;
cljs$core$async$state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24466__auto____1;
return cljs$core$async$state_machine__24466__auto__;
})()
;})(switch__24465__auto__,c__24577__auto___24745))
})();
var state__24579__auto__ = (function (){var statearr_24740 = f__24578__auto__.call(null);
(statearr_24740[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24577__auto___24745);

return statearr_24740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto___24745))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__24949){
var vec__24950 = p__24949;
var v = cljs.core.nth.call(null,vec__24950,(0),null);
var p = cljs.core.nth.call(null,vec__24950,(1),null);
var job = vec__24950;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24577__auto___25136 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto___25136,res,vec__24950,v,p,job,jobs,results){
return (function (){
var f__24578__auto__ = (function (){var switch__24465__auto__ = ((function (c__24577__auto___25136,res,vec__24950,v,p,job,jobs,results){
return (function (state_24957){
var state_val_24958 = (state_24957[(1)]);
if((state_val_24958 === (1))){
var state_24957__$1 = state_24957;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24957__$1,(2),res,v);
} else {
if((state_val_24958 === (2))){
var inst_24954 = (state_24957[(2)]);
var inst_24955 = cljs.core.async.close_BANG_.call(null,res);
var state_24957__$1 = (function (){var statearr_24959 = state_24957;
(statearr_24959[(7)] = inst_24954);

return statearr_24959;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24957__$1,inst_24955);
} else {
return null;
}
}
});})(c__24577__auto___25136,res,vec__24950,v,p,job,jobs,results))
;
return ((function (switch__24465__auto__,c__24577__auto___25136,res,vec__24950,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24466__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24466__auto____0 = (function (){
var statearr_24963 = [null,null,null,null,null,null,null,null];
(statearr_24963[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24466__auto__);

(statearr_24963[(1)] = (1));

return statearr_24963;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24466__auto____1 = (function (state_24957){
while(true){
var ret_value__24467__auto__ = (function (){try{while(true){
var result__24468__auto__ = switch__24465__auto__.call(null,state_24957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24468__auto__;
}
break;
}
}catch (e24964){if((e24964 instanceof Object)){
var ex__24469__auto__ = e24964;
var statearr_24965_25137 = state_24957;
(statearr_24965_25137[(5)] = ex__24469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25138 = state_24957;
state_24957 = G__25138;
continue;
} else {
return ret_value__24467__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24466__auto__ = function(state_24957){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24466__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24466__auto____1.call(this,state_24957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24466__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24466__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24466__auto__;
})()
;})(switch__24465__auto__,c__24577__auto___25136,res,vec__24950,v,p,job,jobs,results))
})();
var state__24579__auto__ = (function (){var statearr_24966 = f__24578__auto__.call(null);
(statearr_24966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24577__auto___25136);

return statearr_24966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto___25136,res,vec__24950,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24967){
var vec__24968 = p__24967;
var v = cljs.core.nth.call(null,vec__24968,(0),null);
var p = cljs.core.nth.call(null,vec__24968,(1),null);
var job = vec__24968;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__22589__auto___25139 = n;
var __25140 = (0);
while(true){
if((__25140 < n__22589__auto___25139)){
var G__24971_25141 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24971_25141) {
case "compute":
var c__24577__auto___25143 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25140,c__24577__auto___25143,G__24971_25141,n__22589__auto___25139,jobs,results,process,async){
return (function (){
var f__24578__auto__ = (function (){var switch__24465__auto__ = ((function (__25140,c__24577__auto___25143,G__24971_25141,n__22589__auto___25139,jobs,results,process,async){
return (function (state_24984){
var state_val_24985 = (state_24984[(1)]);
if((state_val_24985 === (1))){
var state_24984__$1 = state_24984;
var statearr_24986_25144 = state_24984__$1;
(statearr_24986_25144[(2)] = null);

(statearr_24986_25144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24985 === (2))){
var state_24984__$1 = state_24984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24984__$1,(4),jobs);
} else {
if((state_val_24985 === (3))){
var inst_24982 = (state_24984[(2)]);
var state_24984__$1 = state_24984;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24984__$1,inst_24982);
} else {
if((state_val_24985 === (4))){
var inst_24974 = (state_24984[(2)]);
var inst_24975 = process.call(null,inst_24974);
var state_24984__$1 = state_24984;
if(cljs.core.truth_(inst_24975)){
var statearr_24987_25145 = state_24984__$1;
(statearr_24987_25145[(1)] = (5));

} else {
var statearr_24988_25146 = state_24984__$1;
(statearr_24988_25146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24985 === (5))){
var state_24984__$1 = state_24984;
var statearr_24989_25147 = state_24984__$1;
(statearr_24989_25147[(2)] = null);

(statearr_24989_25147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24985 === (6))){
var state_24984__$1 = state_24984;
var statearr_24990_25148 = state_24984__$1;
(statearr_24990_25148[(2)] = null);

(statearr_24990_25148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24985 === (7))){
var inst_24980 = (state_24984[(2)]);
var state_24984__$1 = state_24984;
var statearr_24991_25149 = state_24984__$1;
(statearr_24991_25149[(2)] = inst_24980);

(statearr_24991_25149[(1)] = (3));


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
});})(__25140,c__24577__auto___25143,G__24971_25141,n__22589__auto___25139,jobs,results,process,async))
;
return ((function (__25140,switch__24465__auto__,c__24577__auto___25143,G__24971_25141,n__22589__auto___25139,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24466__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24466__auto____0 = (function (){
var statearr_24995 = [null,null,null,null,null,null,null];
(statearr_24995[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24466__auto__);

(statearr_24995[(1)] = (1));

return statearr_24995;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24466__auto____1 = (function (state_24984){
while(true){
var ret_value__24467__auto__ = (function (){try{while(true){
var result__24468__auto__ = switch__24465__auto__.call(null,state_24984);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24468__auto__;
}
break;
}
}catch (e24996){if((e24996 instanceof Object)){
var ex__24469__auto__ = e24996;
var statearr_24997_25150 = state_24984;
(statearr_24997_25150[(5)] = ex__24469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25151 = state_24984;
state_24984 = G__25151;
continue;
} else {
return ret_value__24467__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24466__auto__ = function(state_24984){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24466__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24466__auto____1.call(this,state_24984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24466__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24466__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24466__auto__;
})()
;})(__25140,switch__24465__auto__,c__24577__auto___25143,G__24971_25141,n__22589__auto___25139,jobs,results,process,async))
})();
var state__24579__auto__ = (function (){var statearr_24998 = f__24578__auto__.call(null);
(statearr_24998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24577__auto___25143);

return statearr_24998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(__25140,c__24577__auto___25143,G__24971_25141,n__22589__auto___25139,jobs,results,process,async))
);


break;
case "async":
var c__24577__auto___25152 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25140,c__24577__auto___25152,G__24971_25141,n__22589__auto___25139,jobs,results,process,async){
return (function (){
var f__24578__auto__ = (function (){var switch__24465__auto__ = ((function (__25140,c__24577__auto___25152,G__24971_25141,n__22589__auto___25139,jobs,results,process,async){
return (function (state_25011){
var state_val_25012 = (state_25011[(1)]);
if((state_val_25012 === (1))){
var state_25011__$1 = state_25011;
var statearr_25013_25153 = state_25011__$1;
(statearr_25013_25153[(2)] = null);

(statearr_25013_25153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25012 === (2))){
var state_25011__$1 = state_25011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25011__$1,(4),jobs);
} else {
if((state_val_25012 === (3))){
var inst_25009 = (state_25011[(2)]);
var state_25011__$1 = state_25011;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25011__$1,inst_25009);
} else {
if((state_val_25012 === (4))){
var inst_25001 = (state_25011[(2)]);
var inst_25002 = async.call(null,inst_25001);
var state_25011__$1 = state_25011;
if(cljs.core.truth_(inst_25002)){
var statearr_25014_25154 = state_25011__$1;
(statearr_25014_25154[(1)] = (5));

} else {
var statearr_25015_25155 = state_25011__$1;
(statearr_25015_25155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25012 === (5))){
var state_25011__$1 = state_25011;
var statearr_25016_25156 = state_25011__$1;
(statearr_25016_25156[(2)] = null);

(statearr_25016_25156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25012 === (6))){
var state_25011__$1 = state_25011;
var statearr_25017_25157 = state_25011__$1;
(statearr_25017_25157[(2)] = null);

(statearr_25017_25157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25012 === (7))){
var inst_25007 = (state_25011[(2)]);
var state_25011__$1 = state_25011;
var statearr_25018_25158 = state_25011__$1;
(statearr_25018_25158[(2)] = inst_25007);

(statearr_25018_25158[(1)] = (3));


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
});})(__25140,c__24577__auto___25152,G__24971_25141,n__22589__auto___25139,jobs,results,process,async))
;
return ((function (__25140,switch__24465__auto__,c__24577__auto___25152,G__24971_25141,n__22589__auto___25139,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24466__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24466__auto____0 = (function (){
var statearr_25022 = [null,null,null,null,null,null,null];
(statearr_25022[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24466__auto__);

(statearr_25022[(1)] = (1));

return statearr_25022;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24466__auto____1 = (function (state_25011){
while(true){
var ret_value__24467__auto__ = (function (){try{while(true){
var result__24468__auto__ = switch__24465__auto__.call(null,state_25011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24468__auto__;
}
break;
}
}catch (e25023){if((e25023 instanceof Object)){
var ex__24469__auto__ = e25023;
var statearr_25024_25159 = state_25011;
(statearr_25024_25159[(5)] = ex__24469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25160 = state_25011;
state_25011 = G__25160;
continue;
} else {
return ret_value__24467__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24466__auto__ = function(state_25011){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24466__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24466__auto____1.call(this,state_25011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24466__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24466__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24466__auto__;
})()
;})(__25140,switch__24465__auto__,c__24577__auto___25152,G__24971_25141,n__22589__auto___25139,jobs,results,process,async))
})();
var state__24579__auto__ = (function (){var statearr_25025 = f__24578__auto__.call(null);
(statearr_25025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24577__auto___25152);

return statearr_25025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(__25140,c__24577__auto___25152,G__24971_25141,n__22589__auto___25139,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25161 = (__25140 + (1));
__25140 = G__25161;
continue;
} else {
}
break;
}

var c__24577__auto___25162 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto___25162,jobs,results,process,async){
return (function (){
var f__24578__auto__ = (function (){var switch__24465__auto__ = ((function (c__24577__auto___25162,jobs,results,process,async){
return (function (state_25047){
var state_val_25048 = (state_25047[(1)]);
if((state_val_25048 === (1))){
var state_25047__$1 = state_25047;
var statearr_25049_25163 = state_25047__$1;
(statearr_25049_25163[(2)] = null);

(statearr_25049_25163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25048 === (2))){
var state_25047__$1 = state_25047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25047__$1,(4),from);
} else {
if((state_val_25048 === (3))){
var inst_25045 = (state_25047[(2)]);
var state_25047__$1 = state_25047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25047__$1,inst_25045);
} else {
if((state_val_25048 === (4))){
var inst_25028 = (state_25047[(7)]);
var inst_25028__$1 = (state_25047[(2)]);
var inst_25029 = (inst_25028__$1 == null);
var state_25047__$1 = (function (){var statearr_25050 = state_25047;
(statearr_25050[(7)] = inst_25028__$1);

return statearr_25050;
})();
if(cljs.core.truth_(inst_25029)){
var statearr_25051_25164 = state_25047__$1;
(statearr_25051_25164[(1)] = (5));

} else {
var statearr_25052_25165 = state_25047__$1;
(statearr_25052_25165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25048 === (5))){
var inst_25031 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25047__$1 = state_25047;
var statearr_25053_25166 = state_25047__$1;
(statearr_25053_25166[(2)] = inst_25031);

(statearr_25053_25166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25048 === (6))){
var inst_25028 = (state_25047[(7)]);
var inst_25033 = (state_25047[(8)]);
var inst_25033__$1 = cljs.core.async.chan.call(null,(1));
var inst_25034 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25035 = [inst_25028,inst_25033__$1];
var inst_25036 = (new cljs.core.PersistentVector(null,2,(5),inst_25034,inst_25035,null));
var state_25047__$1 = (function (){var statearr_25054 = state_25047;
(statearr_25054[(8)] = inst_25033__$1);

return statearr_25054;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25047__$1,(8),jobs,inst_25036);
} else {
if((state_val_25048 === (7))){
var inst_25043 = (state_25047[(2)]);
var state_25047__$1 = state_25047;
var statearr_25055_25167 = state_25047__$1;
(statearr_25055_25167[(2)] = inst_25043);

(statearr_25055_25167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25048 === (8))){
var inst_25033 = (state_25047[(8)]);
var inst_25038 = (state_25047[(2)]);
var state_25047__$1 = (function (){var statearr_25056 = state_25047;
(statearr_25056[(9)] = inst_25038);

return statearr_25056;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25047__$1,(9),results,inst_25033);
} else {
if((state_val_25048 === (9))){
var inst_25040 = (state_25047[(2)]);
var state_25047__$1 = (function (){var statearr_25057 = state_25047;
(statearr_25057[(10)] = inst_25040);

return statearr_25057;
})();
var statearr_25058_25168 = state_25047__$1;
(statearr_25058_25168[(2)] = null);

(statearr_25058_25168[(1)] = (2));


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
});})(c__24577__auto___25162,jobs,results,process,async))
;
return ((function (switch__24465__auto__,c__24577__auto___25162,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24466__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24466__auto____0 = (function (){
var statearr_25062 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25062[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24466__auto__);

(statearr_25062[(1)] = (1));

return statearr_25062;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24466__auto____1 = (function (state_25047){
while(true){
var ret_value__24467__auto__ = (function (){try{while(true){
var result__24468__auto__ = switch__24465__auto__.call(null,state_25047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24468__auto__;
}
break;
}
}catch (e25063){if((e25063 instanceof Object)){
var ex__24469__auto__ = e25063;
var statearr_25064_25169 = state_25047;
(statearr_25064_25169[(5)] = ex__24469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25170 = state_25047;
state_25047 = G__25170;
continue;
} else {
return ret_value__24467__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24466__auto__ = function(state_25047){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24466__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24466__auto____1.call(this,state_25047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24466__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24466__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24466__auto__;
})()
;})(switch__24465__auto__,c__24577__auto___25162,jobs,results,process,async))
})();
var state__24579__auto__ = (function (){var statearr_25065 = f__24578__auto__.call(null);
(statearr_25065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24577__auto___25162);

return statearr_25065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto___25162,jobs,results,process,async))
);


var c__24577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto__,jobs,results,process,async){
return (function (){
var f__24578__auto__ = (function (){var switch__24465__auto__ = ((function (c__24577__auto__,jobs,results,process,async){
return (function (state_25103){
var state_val_25104 = (state_25103[(1)]);
if((state_val_25104 === (7))){
var inst_25099 = (state_25103[(2)]);
var state_25103__$1 = state_25103;
var statearr_25105_25171 = state_25103__$1;
(statearr_25105_25171[(2)] = inst_25099);

(statearr_25105_25171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25104 === (20))){
var state_25103__$1 = state_25103;
var statearr_25106_25172 = state_25103__$1;
(statearr_25106_25172[(2)] = null);

(statearr_25106_25172[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25104 === (1))){
var state_25103__$1 = state_25103;
var statearr_25107_25173 = state_25103__$1;
(statearr_25107_25173[(2)] = null);

(statearr_25107_25173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25104 === (4))){
var inst_25068 = (state_25103[(7)]);
var inst_25068__$1 = (state_25103[(2)]);
var inst_25069 = (inst_25068__$1 == null);
var state_25103__$1 = (function (){var statearr_25108 = state_25103;
(statearr_25108[(7)] = inst_25068__$1);

return statearr_25108;
})();
if(cljs.core.truth_(inst_25069)){
var statearr_25109_25174 = state_25103__$1;
(statearr_25109_25174[(1)] = (5));

} else {
var statearr_25110_25175 = state_25103__$1;
(statearr_25110_25175[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25104 === (15))){
var inst_25081 = (state_25103[(8)]);
var state_25103__$1 = state_25103;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25103__$1,(18),to,inst_25081);
} else {
if((state_val_25104 === (21))){
var inst_25094 = (state_25103[(2)]);
var state_25103__$1 = state_25103;
var statearr_25111_25176 = state_25103__$1;
(statearr_25111_25176[(2)] = inst_25094);

(statearr_25111_25176[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25104 === (13))){
var inst_25096 = (state_25103[(2)]);
var state_25103__$1 = (function (){var statearr_25112 = state_25103;
(statearr_25112[(9)] = inst_25096);

return statearr_25112;
})();
var statearr_25113_25177 = state_25103__$1;
(statearr_25113_25177[(2)] = null);

(statearr_25113_25177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25104 === (6))){
var inst_25068 = (state_25103[(7)]);
var state_25103__$1 = state_25103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25103__$1,(11),inst_25068);
} else {
if((state_val_25104 === (17))){
var inst_25089 = (state_25103[(2)]);
var state_25103__$1 = state_25103;
if(cljs.core.truth_(inst_25089)){
var statearr_25114_25178 = state_25103__$1;
(statearr_25114_25178[(1)] = (19));

} else {
var statearr_25115_25179 = state_25103__$1;
(statearr_25115_25179[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25104 === (3))){
var inst_25101 = (state_25103[(2)]);
var state_25103__$1 = state_25103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25103__$1,inst_25101);
} else {
if((state_val_25104 === (12))){
var inst_25078 = (state_25103[(10)]);
var state_25103__$1 = state_25103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25103__$1,(14),inst_25078);
} else {
if((state_val_25104 === (2))){
var state_25103__$1 = state_25103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25103__$1,(4),results);
} else {
if((state_val_25104 === (19))){
var state_25103__$1 = state_25103;
var statearr_25116_25180 = state_25103__$1;
(statearr_25116_25180[(2)] = null);

(statearr_25116_25180[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25104 === (11))){
var inst_25078 = (state_25103[(2)]);
var state_25103__$1 = (function (){var statearr_25117 = state_25103;
(statearr_25117[(10)] = inst_25078);

return statearr_25117;
})();
var statearr_25118_25181 = state_25103__$1;
(statearr_25118_25181[(2)] = null);

(statearr_25118_25181[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25104 === (9))){
var state_25103__$1 = state_25103;
var statearr_25119_25182 = state_25103__$1;
(statearr_25119_25182[(2)] = null);

(statearr_25119_25182[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25104 === (5))){
var state_25103__$1 = state_25103;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25120_25183 = state_25103__$1;
(statearr_25120_25183[(1)] = (8));

} else {
var statearr_25121_25184 = state_25103__$1;
(statearr_25121_25184[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25104 === (14))){
var inst_25081 = (state_25103[(8)]);
var inst_25083 = (state_25103[(11)]);
var inst_25081__$1 = (state_25103[(2)]);
var inst_25082 = (inst_25081__$1 == null);
var inst_25083__$1 = cljs.core.not.call(null,inst_25082);
var state_25103__$1 = (function (){var statearr_25122 = state_25103;
(statearr_25122[(8)] = inst_25081__$1);

(statearr_25122[(11)] = inst_25083__$1);

return statearr_25122;
})();
if(inst_25083__$1){
var statearr_25123_25185 = state_25103__$1;
(statearr_25123_25185[(1)] = (15));

} else {
var statearr_25124_25186 = state_25103__$1;
(statearr_25124_25186[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25104 === (16))){
var inst_25083 = (state_25103[(11)]);
var state_25103__$1 = state_25103;
var statearr_25125_25187 = state_25103__$1;
(statearr_25125_25187[(2)] = inst_25083);

(statearr_25125_25187[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25104 === (10))){
var inst_25075 = (state_25103[(2)]);
var state_25103__$1 = state_25103;
var statearr_25126_25188 = state_25103__$1;
(statearr_25126_25188[(2)] = inst_25075);

(statearr_25126_25188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25104 === (18))){
var inst_25086 = (state_25103[(2)]);
var state_25103__$1 = state_25103;
var statearr_25127_25189 = state_25103__$1;
(statearr_25127_25189[(2)] = inst_25086);

(statearr_25127_25189[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25104 === (8))){
var inst_25072 = cljs.core.async.close_BANG_.call(null,to);
var state_25103__$1 = state_25103;
var statearr_25128_25190 = state_25103__$1;
(statearr_25128_25190[(2)] = inst_25072);

(statearr_25128_25190[(1)] = (10));


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
});})(c__24577__auto__,jobs,results,process,async))
;
return ((function (switch__24465__auto__,c__24577__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24466__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24466__auto____0 = (function (){
var statearr_25132 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25132[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24466__auto__);

(statearr_25132[(1)] = (1));

return statearr_25132;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24466__auto____1 = (function (state_25103){
while(true){
var ret_value__24467__auto__ = (function (){try{while(true){
var result__24468__auto__ = switch__24465__auto__.call(null,state_25103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24468__auto__;
}
break;
}
}catch (e25133){if((e25133 instanceof Object)){
var ex__24469__auto__ = e25133;
var statearr_25134_25191 = state_25103;
(statearr_25134_25191[(5)] = ex__24469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25192 = state_25103;
state_25103 = G__25192;
continue;
} else {
return ret_value__24467__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24466__auto__ = function(state_25103){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24466__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24466__auto____1.call(this,state_25103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24466__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24466__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24466__auto__;
})()
;})(switch__24465__auto__,c__24577__auto__,jobs,results,process,async))
})();
var state__24579__auto__ = (function (){var statearr_25135 = f__24578__auto__.call(null);
(statearr_25135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24577__auto__);

return statearr_25135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto__,jobs,results,process,async))
);

return c__24577__auto__;
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
var args25193 = [];
var len__22749__auto___25196 = arguments.length;
var i__22750__auto___25197 = (0);
while(true){
if((i__22750__auto___25197 < len__22749__auto___25196)){
args25193.push((arguments[i__22750__auto___25197]));

var G__25198 = (i__22750__auto___25197 + (1));
i__22750__auto___25197 = G__25198;
continue;
} else {
}
break;
}

var G__25195 = args25193.length;
switch (G__25195) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25193.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var args25200 = [];
var len__22749__auto___25203 = arguments.length;
var i__22750__auto___25204 = (0);
while(true){
if((i__22750__auto___25204 < len__22749__auto___25203)){
args25200.push((arguments[i__22750__auto___25204]));

var G__25205 = (i__22750__auto___25204 + (1));
i__22750__auto___25204 = G__25205;
continue;
} else {
}
break;
}

var G__25202 = args25200.length;
switch (G__25202) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25200.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var args25207 = [];
var len__22749__auto___25260 = arguments.length;
var i__22750__auto___25261 = (0);
while(true){
if((i__22750__auto___25261 < len__22749__auto___25260)){
args25207.push((arguments[i__22750__auto___25261]));

var G__25262 = (i__22750__auto___25261 + (1));
i__22750__auto___25261 = G__25262;
continue;
} else {
}
break;
}

var G__25209 = args25207.length;
switch (G__25209) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25207.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24577__auto___25264 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto___25264,tc,fc){
return (function (){
var f__24578__auto__ = (function (){var switch__24465__auto__ = ((function (c__24577__auto___25264,tc,fc){
return (function (state_25235){
var state_val_25236 = (state_25235[(1)]);
if((state_val_25236 === (7))){
var inst_25231 = (state_25235[(2)]);
var state_25235__$1 = state_25235;
var statearr_25237_25265 = state_25235__$1;
(statearr_25237_25265[(2)] = inst_25231);

(statearr_25237_25265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (1))){
var state_25235__$1 = state_25235;
var statearr_25238_25266 = state_25235__$1;
(statearr_25238_25266[(2)] = null);

(statearr_25238_25266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (4))){
var inst_25212 = (state_25235[(7)]);
var inst_25212__$1 = (state_25235[(2)]);
var inst_25213 = (inst_25212__$1 == null);
var state_25235__$1 = (function (){var statearr_25239 = state_25235;
(statearr_25239[(7)] = inst_25212__$1);

return statearr_25239;
})();
if(cljs.core.truth_(inst_25213)){
var statearr_25240_25267 = state_25235__$1;
(statearr_25240_25267[(1)] = (5));

} else {
var statearr_25241_25268 = state_25235__$1;
(statearr_25241_25268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (13))){
var state_25235__$1 = state_25235;
var statearr_25242_25269 = state_25235__$1;
(statearr_25242_25269[(2)] = null);

(statearr_25242_25269[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (6))){
var inst_25212 = (state_25235[(7)]);
var inst_25218 = p.call(null,inst_25212);
var state_25235__$1 = state_25235;
if(cljs.core.truth_(inst_25218)){
var statearr_25243_25270 = state_25235__$1;
(statearr_25243_25270[(1)] = (9));

} else {
var statearr_25244_25271 = state_25235__$1;
(statearr_25244_25271[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (3))){
var inst_25233 = (state_25235[(2)]);
var state_25235__$1 = state_25235;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25235__$1,inst_25233);
} else {
if((state_val_25236 === (12))){
var state_25235__$1 = state_25235;
var statearr_25245_25272 = state_25235__$1;
(statearr_25245_25272[(2)] = null);

(statearr_25245_25272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (2))){
var state_25235__$1 = state_25235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25235__$1,(4),ch);
} else {
if((state_val_25236 === (11))){
var inst_25212 = (state_25235[(7)]);
var inst_25222 = (state_25235[(2)]);
var state_25235__$1 = state_25235;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25235__$1,(8),inst_25222,inst_25212);
} else {
if((state_val_25236 === (9))){
var state_25235__$1 = state_25235;
var statearr_25246_25273 = state_25235__$1;
(statearr_25246_25273[(2)] = tc);

(statearr_25246_25273[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (5))){
var inst_25215 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25216 = cljs.core.async.close_BANG_.call(null,fc);
var state_25235__$1 = (function (){var statearr_25247 = state_25235;
(statearr_25247[(8)] = inst_25215);

return statearr_25247;
})();
var statearr_25248_25274 = state_25235__$1;
(statearr_25248_25274[(2)] = inst_25216);

(statearr_25248_25274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (14))){
var inst_25229 = (state_25235[(2)]);
var state_25235__$1 = state_25235;
var statearr_25249_25275 = state_25235__$1;
(statearr_25249_25275[(2)] = inst_25229);

(statearr_25249_25275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (10))){
var state_25235__$1 = state_25235;
var statearr_25250_25276 = state_25235__$1;
(statearr_25250_25276[(2)] = fc);

(statearr_25250_25276[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25236 === (8))){
var inst_25224 = (state_25235[(2)]);
var state_25235__$1 = state_25235;
if(cljs.core.truth_(inst_25224)){
var statearr_25251_25277 = state_25235__$1;
(statearr_25251_25277[(1)] = (12));

} else {
var statearr_25252_25278 = state_25235__$1;
(statearr_25252_25278[(1)] = (13));

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
});})(c__24577__auto___25264,tc,fc))
;
return ((function (switch__24465__auto__,c__24577__auto___25264,tc,fc){
return (function() {
var cljs$core$async$state_machine__24466__auto__ = null;
var cljs$core$async$state_machine__24466__auto____0 = (function (){
var statearr_25256 = [null,null,null,null,null,null,null,null,null];
(statearr_25256[(0)] = cljs$core$async$state_machine__24466__auto__);

(statearr_25256[(1)] = (1));

return statearr_25256;
});
var cljs$core$async$state_machine__24466__auto____1 = (function (state_25235){
while(true){
var ret_value__24467__auto__ = (function (){try{while(true){
var result__24468__auto__ = switch__24465__auto__.call(null,state_25235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24468__auto__;
}
break;
}
}catch (e25257){if((e25257 instanceof Object)){
var ex__24469__auto__ = e25257;
var statearr_25258_25279 = state_25235;
(statearr_25258_25279[(5)] = ex__24469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25280 = state_25235;
state_25235 = G__25280;
continue;
} else {
return ret_value__24467__auto__;
}
break;
}
});
cljs$core$async$state_machine__24466__auto__ = function(state_25235){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24466__auto____1.call(this,state_25235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24466__auto____0;
cljs$core$async$state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24466__auto____1;
return cljs$core$async$state_machine__24466__auto__;
})()
;})(switch__24465__auto__,c__24577__auto___25264,tc,fc))
})();
var state__24579__auto__ = (function (){var statearr_25259 = f__24578__auto__.call(null);
(statearr_25259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24577__auto___25264);

return statearr_25259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto___25264,tc,fc))
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
var c__24577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto__){
return (function (){
var f__24578__auto__ = (function (){var switch__24465__auto__ = ((function (c__24577__auto__){
return (function (state_25344){
var state_val_25345 = (state_25344[(1)]);
if((state_val_25345 === (7))){
var inst_25340 = (state_25344[(2)]);
var state_25344__$1 = state_25344;
var statearr_25346_25367 = state_25344__$1;
(statearr_25346_25367[(2)] = inst_25340);

(statearr_25346_25367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25345 === (1))){
var inst_25324 = init;
var state_25344__$1 = (function (){var statearr_25347 = state_25344;
(statearr_25347[(7)] = inst_25324);

return statearr_25347;
})();
var statearr_25348_25368 = state_25344__$1;
(statearr_25348_25368[(2)] = null);

(statearr_25348_25368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25345 === (4))){
var inst_25327 = (state_25344[(8)]);
var inst_25327__$1 = (state_25344[(2)]);
var inst_25328 = (inst_25327__$1 == null);
var state_25344__$1 = (function (){var statearr_25349 = state_25344;
(statearr_25349[(8)] = inst_25327__$1);

return statearr_25349;
})();
if(cljs.core.truth_(inst_25328)){
var statearr_25350_25369 = state_25344__$1;
(statearr_25350_25369[(1)] = (5));

} else {
var statearr_25351_25370 = state_25344__$1;
(statearr_25351_25370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25345 === (6))){
var inst_25324 = (state_25344[(7)]);
var inst_25331 = (state_25344[(9)]);
var inst_25327 = (state_25344[(8)]);
var inst_25331__$1 = f.call(null,inst_25324,inst_25327);
var inst_25332 = cljs.core.reduced_QMARK_.call(null,inst_25331__$1);
var state_25344__$1 = (function (){var statearr_25352 = state_25344;
(statearr_25352[(9)] = inst_25331__$1);

return statearr_25352;
})();
if(inst_25332){
var statearr_25353_25371 = state_25344__$1;
(statearr_25353_25371[(1)] = (8));

} else {
var statearr_25354_25372 = state_25344__$1;
(statearr_25354_25372[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25345 === (3))){
var inst_25342 = (state_25344[(2)]);
var state_25344__$1 = state_25344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25344__$1,inst_25342);
} else {
if((state_val_25345 === (2))){
var state_25344__$1 = state_25344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25344__$1,(4),ch);
} else {
if((state_val_25345 === (9))){
var inst_25331 = (state_25344[(9)]);
var inst_25324 = inst_25331;
var state_25344__$1 = (function (){var statearr_25355 = state_25344;
(statearr_25355[(7)] = inst_25324);

return statearr_25355;
})();
var statearr_25356_25373 = state_25344__$1;
(statearr_25356_25373[(2)] = null);

(statearr_25356_25373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25345 === (5))){
var inst_25324 = (state_25344[(7)]);
var state_25344__$1 = state_25344;
var statearr_25357_25374 = state_25344__$1;
(statearr_25357_25374[(2)] = inst_25324);

(statearr_25357_25374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25345 === (10))){
var inst_25338 = (state_25344[(2)]);
var state_25344__$1 = state_25344;
var statearr_25358_25375 = state_25344__$1;
(statearr_25358_25375[(2)] = inst_25338);

(statearr_25358_25375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25345 === (8))){
var inst_25331 = (state_25344[(9)]);
var inst_25334 = cljs.core.deref.call(null,inst_25331);
var state_25344__$1 = state_25344;
var statearr_25359_25376 = state_25344__$1;
(statearr_25359_25376[(2)] = inst_25334);

(statearr_25359_25376[(1)] = (10));


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
});})(c__24577__auto__))
;
return ((function (switch__24465__auto__,c__24577__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24466__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24466__auto____0 = (function (){
var statearr_25363 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25363[(0)] = cljs$core$async$reduce_$_state_machine__24466__auto__);

(statearr_25363[(1)] = (1));

return statearr_25363;
});
var cljs$core$async$reduce_$_state_machine__24466__auto____1 = (function (state_25344){
while(true){
var ret_value__24467__auto__ = (function (){try{while(true){
var result__24468__auto__ = switch__24465__auto__.call(null,state_25344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24468__auto__;
}
break;
}
}catch (e25364){if((e25364 instanceof Object)){
var ex__24469__auto__ = e25364;
var statearr_25365_25377 = state_25344;
(statearr_25365_25377[(5)] = ex__24469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25378 = state_25344;
state_25344 = G__25378;
continue;
} else {
return ret_value__24467__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24466__auto__ = function(state_25344){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24466__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24466__auto____1.call(this,state_25344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24466__auto____0;
cljs$core$async$reduce_$_state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24466__auto____1;
return cljs$core$async$reduce_$_state_machine__24466__auto__;
})()
;})(switch__24465__auto__,c__24577__auto__))
})();
var state__24579__auto__ = (function (){var statearr_25366 = f__24578__auto__.call(null);
(statearr_25366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24577__auto__);

return statearr_25366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto__))
);

return c__24577__auto__;
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
var args25379 = [];
var len__22749__auto___25431 = arguments.length;
var i__22750__auto___25432 = (0);
while(true){
if((i__22750__auto___25432 < len__22749__auto___25431)){
args25379.push((arguments[i__22750__auto___25432]));

var G__25433 = (i__22750__auto___25432 + (1));
i__22750__auto___25432 = G__25433;
continue;
} else {
}
break;
}

var G__25381 = args25379.length;
switch (G__25381) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25379.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto__){
return (function (){
var f__24578__auto__ = (function (){var switch__24465__auto__ = ((function (c__24577__auto__){
return (function (state_25406){
var state_val_25407 = (state_25406[(1)]);
if((state_val_25407 === (7))){
var inst_25388 = (state_25406[(2)]);
var state_25406__$1 = state_25406;
var statearr_25408_25435 = state_25406__$1;
(statearr_25408_25435[(2)] = inst_25388);

(statearr_25408_25435[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25407 === (1))){
var inst_25382 = cljs.core.seq.call(null,coll);
var inst_25383 = inst_25382;
var state_25406__$1 = (function (){var statearr_25409 = state_25406;
(statearr_25409[(7)] = inst_25383);

return statearr_25409;
})();
var statearr_25410_25436 = state_25406__$1;
(statearr_25410_25436[(2)] = null);

(statearr_25410_25436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25407 === (4))){
var inst_25383 = (state_25406[(7)]);
var inst_25386 = cljs.core.first.call(null,inst_25383);
var state_25406__$1 = state_25406;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25406__$1,(7),ch,inst_25386);
} else {
if((state_val_25407 === (13))){
var inst_25400 = (state_25406[(2)]);
var state_25406__$1 = state_25406;
var statearr_25411_25437 = state_25406__$1;
(statearr_25411_25437[(2)] = inst_25400);

(statearr_25411_25437[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25407 === (6))){
var inst_25391 = (state_25406[(2)]);
var state_25406__$1 = state_25406;
if(cljs.core.truth_(inst_25391)){
var statearr_25412_25438 = state_25406__$1;
(statearr_25412_25438[(1)] = (8));

} else {
var statearr_25413_25439 = state_25406__$1;
(statearr_25413_25439[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25407 === (3))){
var inst_25404 = (state_25406[(2)]);
var state_25406__$1 = state_25406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25406__$1,inst_25404);
} else {
if((state_val_25407 === (12))){
var state_25406__$1 = state_25406;
var statearr_25414_25440 = state_25406__$1;
(statearr_25414_25440[(2)] = null);

(statearr_25414_25440[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25407 === (2))){
var inst_25383 = (state_25406[(7)]);
var state_25406__$1 = state_25406;
if(cljs.core.truth_(inst_25383)){
var statearr_25415_25441 = state_25406__$1;
(statearr_25415_25441[(1)] = (4));

} else {
var statearr_25416_25442 = state_25406__$1;
(statearr_25416_25442[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25407 === (11))){
var inst_25397 = cljs.core.async.close_BANG_.call(null,ch);
var state_25406__$1 = state_25406;
var statearr_25417_25443 = state_25406__$1;
(statearr_25417_25443[(2)] = inst_25397);

(statearr_25417_25443[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25407 === (9))){
var state_25406__$1 = state_25406;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25418_25444 = state_25406__$1;
(statearr_25418_25444[(1)] = (11));

} else {
var statearr_25419_25445 = state_25406__$1;
(statearr_25419_25445[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25407 === (5))){
var inst_25383 = (state_25406[(7)]);
var state_25406__$1 = state_25406;
var statearr_25420_25446 = state_25406__$1;
(statearr_25420_25446[(2)] = inst_25383);

(statearr_25420_25446[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25407 === (10))){
var inst_25402 = (state_25406[(2)]);
var state_25406__$1 = state_25406;
var statearr_25421_25447 = state_25406__$1;
(statearr_25421_25447[(2)] = inst_25402);

(statearr_25421_25447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25407 === (8))){
var inst_25383 = (state_25406[(7)]);
var inst_25393 = cljs.core.next.call(null,inst_25383);
var inst_25383__$1 = inst_25393;
var state_25406__$1 = (function (){var statearr_25422 = state_25406;
(statearr_25422[(7)] = inst_25383__$1);

return statearr_25422;
})();
var statearr_25423_25448 = state_25406__$1;
(statearr_25423_25448[(2)] = null);

(statearr_25423_25448[(1)] = (2));


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
});})(c__24577__auto__))
;
return ((function (switch__24465__auto__,c__24577__auto__){
return (function() {
var cljs$core$async$state_machine__24466__auto__ = null;
var cljs$core$async$state_machine__24466__auto____0 = (function (){
var statearr_25427 = [null,null,null,null,null,null,null,null];
(statearr_25427[(0)] = cljs$core$async$state_machine__24466__auto__);

(statearr_25427[(1)] = (1));

return statearr_25427;
});
var cljs$core$async$state_machine__24466__auto____1 = (function (state_25406){
while(true){
var ret_value__24467__auto__ = (function (){try{while(true){
var result__24468__auto__ = switch__24465__auto__.call(null,state_25406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24468__auto__;
}
break;
}
}catch (e25428){if((e25428 instanceof Object)){
var ex__24469__auto__ = e25428;
var statearr_25429_25449 = state_25406;
(statearr_25429_25449[(5)] = ex__24469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25450 = state_25406;
state_25406 = G__25450;
continue;
} else {
return ret_value__24467__auto__;
}
break;
}
});
cljs$core$async$state_machine__24466__auto__ = function(state_25406){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24466__auto____1.call(this,state_25406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24466__auto____0;
cljs$core$async$state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24466__auto____1;
return cljs$core$async$state_machine__24466__auto__;
})()
;})(switch__24465__auto__,c__24577__auto__))
})();
var state__24579__auto__ = (function (){var statearr_25430 = f__24578__auto__.call(null);
(statearr_25430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24577__auto__);

return statearr_25430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto__))
);

return c__24577__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__22337__auto__ = (((_ == null))?null:_);
var m__22338__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,_);
} else {
var m__22338__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__22337__auto__ = (((m == null))?null:m);
var m__22338__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__22338__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__22337__auto__ = (((m == null))?null:m);
var m__22338__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,m,ch);
} else {
var m__22338__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__22337__auto__ = (((m == null))?null:m);
var m__22338__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,m);
} else {
var m__22338__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25676 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25676 = (function (mult,ch,cs,meta25677){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta25677 = meta25677;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25678,meta25677__$1){
var self__ = this;
var _25678__$1 = this;
return (new cljs.core.async.t_cljs$core$async25676(self__.mult,self__.ch,self__.cs,meta25677__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25676.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25678){
var self__ = this;
var _25678__$1 = this;
return self__.meta25677;
});})(cs))
;

cljs.core.async.t_cljs$core$async25676.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25676.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25676.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async25676.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25676.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25676.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25676.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25677","meta25677",-268626116,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25676.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25676.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25676";

cljs.core.async.t_cljs$core$async25676.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__22280__auto__,writer__22281__auto__,opt__22282__auto__){
return cljs.core._write.call(null,writer__22281__auto__,"cljs.core.async/t_cljs$core$async25676");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async25676 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25676(mult__$1,ch__$1,cs__$1,meta25677){
return (new cljs.core.async.t_cljs$core$async25676(mult__$1,ch__$1,cs__$1,meta25677));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25676(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__24577__auto___25901 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto___25901,cs,m,dchan,dctr,done){
return (function (){
var f__24578__auto__ = (function (){var switch__24465__auto__ = ((function (c__24577__auto___25901,cs,m,dchan,dctr,done){
return (function (state_25813){
var state_val_25814 = (state_25813[(1)]);
if((state_val_25814 === (7))){
var inst_25809 = (state_25813[(2)]);
var state_25813__$1 = state_25813;
var statearr_25815_25902 = state_25813__$1;
(statearr_25815_25902[(2)] = inst_25809);

(statearr_25815_25902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (20))){
var inst_25712 = (state_25813[(7)]);
var inst_25724 = cljs.core.first.call(null,inst_25712);
var inst_25725 = cljs.core.nth.call(null,inst_25724,(0),null);
var inst_25726 = cljs.core.nth.call(null,inst_25724,(1),null);
var state_25813__$1 = (function (){var statearr_25816 = state_25813;
(statearr_25816[(8)] = inst_25725);

return statearr_25816;
})();
if(cljs.core.truth_(inst_25726)){
var statearr_25817_25903 = state_25813__$1;
(statearr_25817_25903[(1)] = (22));

} else {
var statearr_25818_25904 = state_25813__$1;
(statearr_25818_25904[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (27))){
var inst_25756 = (state_25813[(9)]);
var inst_25761 = (state_25813[(10)]);
var inst_25754 = (state_25813[(11)]);
var inst_25681 = (state_25813[(12)]);
var inst_25761__$1 = cljs.core._nth.call(null,inst_25754,inst_25756);
var inst_25762 = cljs.core.async.put_BANG_.call(null,inst_25761__$1,inst_25681,done);
var state_25813__$1 = (function (){var statearr_25819 = state_25813;
(statearr_25819[(10)] = inst_25761__$1);

return statearr_25819;
})();
if(cljs.core.truth_(inst_25762)){
var statearr_25820_25905 = state_25813__$1;
(statearr_25820_25905[(1)] = (30));

} else {
var statearr_25821_25906 = state_25813__$1;
(statearr_25821_25906[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (1))){
var state_25813__$1 = state_25813;
var statearr_25822_25907 = state_25813__$1;
(statearr_25822_25907[(2)] = null);

(statearr_25822_25907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (24))){
var inst_25712 = (state_25813[(7)]);
var inst_25731 = (state_25813[(2)]);
var inst_25732 = cljs.core.next.call(null,inst_25712);
var inst_25690 = inst_25732;
var inst_25691 = null;
var inst_25692 = (0);
var inst_25693 = (0);
var state_25813__$1 = (function (){var statearr_25823 = state_25813;
(statearr_25823[(13)] = inst_25693);

(statearr_25823[(14)] = inst_25692);

(statearr_25823[(15)] = inst_25691);

(statearr_25823[(16)] = inst_25731);

(statearr_25823[(17)] = inst_25690);

return statearr_25823;
})();
var statearr_25824_25908 = state_25813__$1;
(statearr_25824_25908[(2)] = null);

(statearr_25824_25908[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (39))){
var state_25813__$1 = state_25813;
var statearr_25828_25909 = state_25813__$1;
(statearr_25828_25909[(2)] = null);

(statearr_25828_25909[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (4))){
var inst_25681 = (state_25813[(12)]);
var inst_25681__$1 = (state_25813[(2)]);
var inst_25682 = (inst_25681__$1 == null);
var state_25813__$1 = (function (){var statearr_25829 = state_25813;
(statearr_25829[(12)] = inst_25681__$1);

return statearr_25829;
})();
if(cljs.core.truth_(inst_25682)){
var statearr_25830_25910 = state_25813__$1;
(statearr_25830_25910[(1)] = (5));

} else {
var statearr_25831_25911 = state_25813__$1;
(statearr_25831_25911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (15))){
var inst_25693 = (state_25813[(13)]);
var inst_25692 = (state_25813[(14)]);
var inst_25691 = (state_25813[(15)]);
var inst_25690 = (state_25813[(17)]);
var inst_25708 = (state_25813[(2)]);
var inst_25709 = (inst_25693 + (1));
var tmp25825 = inst_25692;
var tmp25826 = inst_25691;
var tmp25827 = inst_25690;
var inst_25690__$1 = tmp25827;
var inst_25691__$1 = tmp25826;
var inst_25692__$1 = tmp25825;
var inst_25693__$1 = inst_25709;
var state_25813__$1 = (function (){var statearr_25832 = state_25813;
(statearr_25832[(13)] = inst_25693__$1);

(statearr_25832[(14)] = inst_25692__$1);

(statearr_25832[(15)] = inst_25691__$1);

(statearr_25832[(18)] = inst_25708);

(statearr_25832[(17)] = inst_25690__$1);

return statearr_25832;
})();
var statearr_25833_25912 = state_25813__$1;
(statearr_25833_25912[(2)] = null);

(statearr_25833_25912[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (21))){
var inst_25735 = (state_25813[(2)]);
var state_25813__$1 = state_25813;
var statearr_25837_25913 = state_25813__$1;
(statearr_25837_25913[(2)] = inst_25735);

(statearr_25837_25913[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (31))){
var inst_25761 = (state_25813[(10)]);
var inst_25765 = done.call(null,null);
var inst_25766 = cljs.core.async.untap_STAR_.call(null,m,inst_25761);
var state_25813__$1 = (function (){var statearr_25838 = state_25813;
(statearr_25838[(19)] = inst_25765);

return statearr_25838;
})();
var statearr_25839_25914 = state_25813__$1;
(statearr_25839_25914[(2)] = inst_25766);

(statearr_25839_25914[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (32))){
var inst_25756 = (state_25813[(9)]);
var inst_25755 = (state_25813[(20)]);
var inst_25753 = (state_25813[(21)]);
var inst_25754 = (state_25813[(11)]);
var inst_25768 = (state_25813[(2)]);
var inst_25769 = (inst_25756 + (1));
var tmp25834 = inst_25755;
var tmp25835 = inst_25753;
var tmp25836 = inst_25754;
var inst_25753__$1 = tmp25835;
var inst_25754__$1 = tmp25836;
var inst_25755__$1 = tmp25834;
var inst_25756__$1 = inst_25769;
var state_25813__$1 = (function (){var statearr_25840 = state_25813;
(statearr_25840[(9)] = inst_25756__$1);

(statearr_25840[(22)] = inst_25768);

(statearr_25840[(20)] = inst_25755__$1);

(statearr_25840[(21)] = inst_25753__$1);

(statearr_25840[(11)] = inst_25754__$1);

return statearr_25840;
})();
var statearr_25841_25915 = state_25813__$1;
(statearr_25841_25915[(2)] = null);

(statearr_25841_25915[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (40))){
var inst_25781 = (state_25813[(23)]);
var inst_25785 = done.call(null,null);
var inst_25786 = cljs.core.async.untap_STAR_.call(null,m,inst_25781);
var state_25813__$1 = (function (){var statearr_25842 = state_25813;
(statearr_25842[(24)] = inst_25785);

return statearr_25842;
})();
var statearr_25843_25916 = state_25813__$1;
(statearr_25843_25916[(2)] = inst_25786);

(statearr_25843_25916[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (33))){
var inst_25772 = (state_25813[(25)]);
var inst_25774 = cljs.core.chunked_seq_QMARK_.call(null,inst_25772);
var state_25813__$1 = state_25813;
if(inst_25774){
var statearr_25844_25917 = state_25813__$1;
(statearr_25844_25917[(1)] = (36));

} else {
var statearr_25845_25918 = state_25813__$1;
(statearr_25845_25918[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (13))){
var inst_25702 = (state_25813[(26)]);
var inst_25705 = cljs.core.async.close_BANG_.call(null,inst_25702);
var state_25813__$1 = state_25813;
var statearr_25846_25919 = state_25813__$1;
(statearr_25846_25919[(2)] = inst_25705);

(statearr_25846_25919[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (22))){
var inst_25725 = (state_25813[(8)]);
var inst_25728 = cljs.core.async.close_BANG_.call(null,inst_25725);
var state_25813__$1 = state_25813;
var statearr_25847_25920 = state_25813__$1;
(statearr_25847_25920[(2)] = inst_25728);

(statearr_25847_25920[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (36))){
var inst_25772 = (state_25813[(25)]);
var inst_25776 = cljs.core.chunk_first.call(null,inst_25772);
var inst_25777 = cljs.core.chunk_rest.call(null,inst_25772);
var inst_25778 = cljs.core.count.call(null,inst_25776);
var inst_25753 = inst_25777;
var inst_25754 = inst_25776;
var inst_25755 = inst_25778;
var inst_25756 = (0);
var state_25813__$1 = (function (){var statearr_25848 = state_25813;
(statearr_25848[(9)] = inst_25756);

(statearr_25848[(20)] = inst_25755);

(statearr_25848[(21)] = inst_25753);

(statearr_25848[(11)] = inst_25754);

return statearr_25848;
})();
var statearr_25849_25921 = state_25813__$1;
(statearr_25849_25921[(2)] = null);

(statearr_25849_25921[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (41))){
var inst_25772 = (state_25813[(25)]);
var inst_25788 = (state_25813[(2)]);
var inst_25789 = cljs.core.next.call(null,inst_25772);
var inst_25753 = inst_25789;
var inst_25754 = null;
var inst_25755 = (0);
var inst_25756 = (0);
var state_25813__$1 = (function (){var statearr_25850 = state_25813;
(statearr_25850[(9)] = inst_25756);

(statearr_25850[(27)] = inst_25788);

(statearr_25850[(20)] = inst_25755);

(statearr_25850[(21)] = inst_25753);

(statearr_25850[(11)] = inst_25754);

return statearr_25850;
})();
var statearr_25851_25922 = state_25813__$1;
(statearr_25851_25922[(2)] = null);

(statearr_25851_25922[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (43))){
var state_25813__$1 = state_25813;
var statearr_25852_25923 = state_25813__$1;
(statearr_25852_25923[(2)] = null);

(statearr_25852_25923[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (29))){
var inst_25797 = (state_25813[(2)]);
var state_25813__$1 = state_25813;
var statearr_25853_25924 = state_25813__$1;
(statearr_25853_25924[(2)] = inst_25797);

(statearr_25853_25924[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (44))){
var inst_25806 = (state_25813[(2)]);
var state_25813__$1 = (function (){var statearr_25854 = state_25813;
(statearr_25854[(28)] = inst_25806);

return statearr_25854;
})();
var statearr_25855_25925 = state_25813__$1;
(statearr_25855_25925[(2)] = null);

(statearr_25855_25925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (6))){
var inst_25745 = (state_25813[(29)]);
var inst_25744 = cljs.core.deref.call(null,cs);
var inst_25745__$1 = cljs.core.keys.call(null,inst_25744);
var inst_25746 = cljs.core.count.call(null,inst_25745__$1);
var inst_25747 = cljs.core.reset_BANG_.call(null,dctr,inst_25746);
var inst_25752 = cljs.core.seq.call(null,inst_25745__$1);
var inst_25753 = inst_25752;
var inst_25754 = null;
var inst_25755 = (0);
var inst_25756 = (0);
var state_25813__$1 = (function (){var statearr_25856 = state_25813;
(statearr_25856[(9)] = inst_25756);

(statearr_25856[(30)] = inst_25747);

(statearr_25856[(20)] = inst_25755);

(statearr_25856[(29)] = inst_25745__$1);

(statearr_25856[(21)] = inst_25753);

(statearr_25856[(11)] = inst_25754);

return statearr_25856;
})();
var statearr_25857_25926 = state_25813__$1;
(statearr_25857_25926[(2)] = null);

(statearr_25857_25926[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (28))){
var inst_25772 = (state_25813[(25)]);
var inst_25753 = (state_25813[(21)]);
var inst_25772__$1 = cljs.core.seq.call(null,inst_25753);
var state_25813__$1 = (function (){var statearr_25858 = state_25813;
(statearr_25858[(25)] = inst_25772__$1);

return statearr_25858;
})();
if(inst_25772__$1){
var statearr_25859_25927 = state_25813__$1;
(statearr_25859_25927[(1)] = (33));

} else {
var statearr_25860_25928 = state_25813__$1;
(statearr_25860_25928[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (25))){
var inst_25756 = (state_25813[(9)]);
var inst_25755 = (state_25813[(20)]);
var inst_25758 = (inst_25756 < inst_25755);
var inst_25759 = inst_25758;
var state_25813__$1 = state_25813;
if(cljs.core.truth_(inst_25759)){
var statearr_25861_25929 = state_25813__$1;
(statearr_25861_25929[(1)] = (27));

} else {
var statearr_25862_25930 = state_25813__$1;
(statearr_25862_25930[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (34))){
var state_25813__$1 = state_25813;
var statearr_25863_25931 = state_25813__$1;
(statearr_25863_25931[(2)] = null);

(statearr_25863_25931[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (17))){
var state_25813__$1 = state_25813;
var statearr_25864_25932 = state_25813__$1;
(statearr_25864_25932[(2)] = null);

(statearr_25864_25932[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (3))){
var inst_25811 = (state_25813[(2)]);
var state_25813__$1 = state_25813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25813__$1,inst_25811);
} else {
if((state_val_25814 === (12))){
var inst_25740 = (state_25813[(2)]);
var state_25813__$1 = state_25813;
var statearr_25865_25933 = state_25813__$1;
(statearr_25865_25933[(2)] = inst_25740);

(statearr_25865_25933[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (2))){
var state_25813__$1 = state_25813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25813__$1,(4),ch);
} else {
if((state_val_25814 === (23))){
var state_25813__$1 = state_25813;
var statearr_25866_25934 = state_25813__$1;
(statearr_25866_25934[(2)] = null);

(statearr_25866_25934[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (35))){
var inst_25795 = (state_25813[(2)]);
var state_25813__$1 = state_25813;
var statearr_25867_25935 = state_25813__$1;
(statearr_25867_25935[(2)] = inst_25795);

(statearr_25867_25935[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (19))){
var inst_25712 = (state_25813[(7)]);
var inst_25716 = cljs.core.chunk_first.call(null,inst_25712);
var inst_25717 = cljs.core.chunk_rest.call(null,inst_25712);
var inst_25718 = cljs.core.count.call(null,inst_25716);
var inst_25690 = inst_25717;
var inst_25691 = inst_25716;
var inst_25692 = inst_25718;
var inst_25693 = (0);
var state_25813__$1 = (function (){var statearr_25868 = state_25813;
(statearr_25868[(13)] = inst_25693);

(statearr_25868[(14)] = inst_25692);

(statearr_25868[(15)] = inst_25691);

(statearr_25868[(17)] = inst_25690);

return statearr_25868;
})();
var statearr_25869_25936 = state_25813__$1;
(statearr_25869_25936[(2)] = null);

(statearr_25869_25936[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (11))){
var inst_25712 = (state_25813[(7)]);
var inst_25690 = (state_25813[(17)]);
var inst_25712__$1 = cljs.core.seq.call(null,inst_25690);
var state_25813__$1 = (function (){var statearr_25870 = state_25813;
(statearr_25870[(7)] = inst_25712__$1);

return statearr_25870;
})();
if(inst_25712__$1){
var statearr_25871_25937 = state_25813__$1;
(statearr_25871_25937[(1)] = (16));

} else {
var statearr_25872_25938 = state_25813__$1;
(statearr_25872_25938[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (9))){
var inst_25742 = (state_25813[(2)]);
var state_25813__$1 = state_25813;
var statearr_25873_25939 = state_25813__$1;
(statearr_25873_25939[(2)] = inst_25742);

(statearr_25873_25939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (5))){
var inst_25688 = cljs.core.deref.call(null,cs);
var inst_25689 = cljs.core.seq.call(null,inst_25688);
var inst_25690 = inst_25689;
var inst_25691 = null;
var inst_25692 = (0);
var inst_25693 = (0);
var state_25813__$1 = (function (){var statearr_25874 = state_25813;
(statearr_25874[(13)] = inst_25693);

(statearr_25874[(14)] = inst_25692);

(statearr_25874[(15)] = inst_25691);

(statearr_25874[(17)] = inst_25690);

return statearr_25874;
})();
var statearr_25875_25940 = state_25813__$1;
(statearr_25875_25940[(2)] = null);

(statearr_25875_25940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (14))){
var state_25813__$1 = state_25813;
var statearr_25876_25941 = state_25813__$1;
(statearr_25876_25941[(2)] = null);

(statearr_25876_25941[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (45))){
var inst_25803 = (state_25813[(2)]);
var state_25813__$1 = state_25813;
var statearr_25877_25942 = state_25813__$1;
(statearr_25877_25942[(2)] = inst_25803);

(statearr_25877_25942[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (26))){
var inst_25745 = (state_25813[(29)]);
var inst_25799 = (state_25813[(2)]);
var inst_25800 = cljs.core.seq.call(null,inst_25745);
var state_25813__$1 = (function (){var statearr_25878 = state_25813;
(statearr_25878[(31)] = inst_25799);

return statearr_25878;
})();
if(inst_25800){
var statearr_25879_25943 = state_25813__$1;
(statearr_25879_25943[(1)] = (42));

} else {
var statearr_25880_25944 = state_25813__$1;
(statearr_25880_25944[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (16))){
var inst_25712 = (state_25813[(7)]);
var inst_25714 = cljs.core.chunked_seq_QMARK_.call(null,inst_25712);
var state_25813__$1 = state_25813;
if(inst_25714){
var statearr_25881_25945 = state_25813__$1;
(statearr_25881_25945[(1)] = (19));

} else {
var statearr_25882_25946 = state_25813__$1;
(statearr_25882_25946[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (38))){
var inst_25792 = (state_25813[(2)]);
var state_25813__$1 = state_25813;
var statearr_25883_25947 = state_25813__$1;
(statearr_25883_25947[(2)] = inst_25792);

(statearr_25883_25947[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (30))){
var state_25813__$1 = state_25813;
var statearr_25884_25948 = state_25813__$1;
(statearr_25884_25948[(2)] = null);

(statearr_25884_25948[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (10))){
var inst_25693 = (state_25813[(13)]);
var inst_25691 = (state_25813[(15)]);
var inst_25701 = cljs.core._nth.call(null,inst_25691,inst_25693);
var inst_25702 = cljs.core.nth.call(null,inst_25701,(0),null);
var inst_25703 = cljs.core.nth.call(null,inst_25701,(1),null);
var state_25813__$1 = (function (){var statearr_25885 = state_25813;
(statearr_25885[(26)] = inst_25702);

return statearr_25885;
})();
if(cljs.core.truth_(inst_25703)){
var statearr_25886_25949 = state_25813__$1;
(statearr_25886_25949[(1)] = (13));

} else {
var statearr_25887_25950 = state_25813__$1;
(statearr_25887_25950[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (18))){
var inst_25738 = (state_25813[(2)]);
var state_25813__$1 = state_25813;
var statearr_25888_25951 = state_25813__$1;
(statearr_25888_25951[(2)] = inst_25738);

(statearr_25888_25951[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (42))){
var state_25813__$1 = state_25813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25813__$1,(45),dchan);
} else {
if((state_val_25814 === (37))){
var inst_25781 = (state_25813[(23)]);
var inst_25772 = (state_25813[(25)]);
var inst_25681 = (state_25813[(12)]);
var inst_25781__$1 = cljs.core.first.call(null,inst_25772);
var inst_25782 = cljs.core.async.put_BANG_.call(null,inst_25781__$1,inst_25681,done);
var state_25813__$1 = (function (){var statearr_25889 = state_25813;
(statearr_25889[(23)] = inst_25781__$1);

return statearr_25889;
})();
if(cljs.core.truth_(inst_25782)){
var statearr_25890_25952 = state_25813__$1;
(statearr_25890_25952[(1)] = (39));

} else {
var statearr_25891_25953 = state_25813__$1;
(statearr_25891_25953[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25814 === (8))){
var inst_25693 = (state_25813[(13)]);
var inst_25692 = (state_25813[(14)]);
var inst_25695 = (inst_25693 < inst_25692);
var inst_25696 = inst_25695;
var state_25813__$1 = state_25813;
if(cljs.core.truth_(inst_25696)){
var statearr_25892_25954 = state_25813__$1;
(statearr_25892_25954[(1)] = (10));

} else {
var statearr_25893_25955 = state_25813__$1;
(statearr_25893_25955[(1)] = (11));

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
});})(c__24577__auto___25901,cs,m,dchan,dctr,done))
;
return ((function (switch__24465__auto__,c__24577__auto___25901,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24466__auto__ = null;
var cljs$core$async$mult_$_state_machine__24466__auto____0 = (function (){
var statearr_25897 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25897[(0)] = cljs$core$async$mult_$_state_machine__24466__auto__);

(statearr_25897[(1)] = (1));

return statearr_25897;
});
var cljs$core$async$mult_$_state_machine__24466__auto____1 = (function (state_25813){
while(true){
var ret_value__24467__auto__ = (function (){try{while(true){
var result__24468__auto__ = switch__24465__auto__.call(null,state_25813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24468__auto__;
}
break;
}
}catch (e25898){if((e25898 instanceof Object)){
var ex__24469__auto__ = e25898;
var statearr_25899_25956 = state_25813;
(statearr_25899_25956[(5)] = ex__24469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25957 = state_25813;
state_25813 = G__25957;
continue;
} else {
return ret_value__24467__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24466__auto__ = function(state_25813){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24466__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24466__auto____1.call(this,state_25813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24466__auto____0;
cljs$core$async$mult_$_state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24466__auto____1;
return cljs$core$async$mult_$_state_machine__24466__auto__;
})()
;})(switch__24465__auto__,c__24577__auto___25901,cs,m,dchan,dctr,done))
})();
var state__24579__auto__ = (function (){var statearr_25900 = f__24578__auto__.call(null);
(statearr_25900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24577__auto___25901);

return statearr_25900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto___25901,cs,m,dchan,dctr,done))
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
var args25958 = [];
var len__22749__auto___25961 = arguments.length;
var i__22750__auto___25962 = (0);
while(true){
if((i__22750__auto___25962 < len__22749__auto___25961)){
args25958.push((arguments[i__22750__auto___25962]));

var G__25963 = (i__22750__auto___25962 + (1));
i__22750__auto___25962 = G__25963;
continue;
} else {
}
break;
}

var G__25960 = args25958.length;
switch (G__25960) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25958.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__22337__auto__ = (((m == null))?null:m);
var m__22338__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,m,ch);
} else {
var m__22338__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__22337__auto__ = (((m == null))?null:m);
var m__22338__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,m,ch);
} else {
var m__22338__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__22337__auto__ = (((m == null))?null:m);
var m__22338__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,m);
} else {
var m__22338__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__22337__auto__ = (((m == null))?null:m);
var m__22338__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,m,state_map);
} else {
var m__22338__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__22337__auto__ = (((m == null))?null:m);
var m__22338__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,m,mode);
} else {
var m__22338__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__22756__auto__ = [];
var len__22749__auto___25975 = arguments.length;
var i__22750__auto___25976 = (0);
while(true){
if((i__22750__auto___25976 < len__22749__auto___25975)){
args__22756__auto__.push((arguments[i__22750__auto___25976]));

var G__25977 = (i__22750__auto___25976 + (1));
i__22750__auto___25976 = G__25977;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((3) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22757__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25969){
var map__25970 = p__25969;
var map__25970__$1 = ((((!((map__25970 == null)))?((((map__25970.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25970.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25970):map__25970);
var opts = map__25970__$1;
var statearr_25972_25978 = state;
(statearr_25972_25978[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__25970,map__25970__$1,opts){
return (function (val){
var statearr_25973_25979 = state;
(statearr_25973_25979[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25970,map__25970__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_25974_25980 = state;
(statearr_25974_25980[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25965){
var G__25966 = cljs.core.first.call(null,seq25965);
var seq25965__$1 = cljs.core.next.call(null,seq25965);
var G__25967 = cljs.core.first.call(null,seq25965__$1);
var seq25965__$2 = cljs.core.next.call(null,seq25965__$1);
var G__25968 = cljs.core.first.call(null,seq25965__$2);
var seq25965__$3 = cljs.core.next.call(null,seq25965__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25966,G__25967,G__25968,seq25965__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async26146 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26146 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26147){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta26147 = meta26147;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26148,meta26147__$1){
var self__ = this;
var _26148__$1 = this;
return (new cljs.core.async.t_cljs$core$async26146(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26147__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26146.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26148){
var self__ = this;
var _26148__$1 = this;
return self__.meta26147;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26146.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26146.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26146.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async26146.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26146.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26146.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26146.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26146.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26146.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta26147","meta26147",-82244978,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26146.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26146.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26146";

cljs.core.async.t_cljs$core$async26146.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__22280__auto__,writer__22281__auto__,opt__22282__auto__){
return cljs.core._write.call(null,writer__22281__auto__,"cljs.core.async/t_cljs$core$async26146");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async26146 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async26146(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26147){
return (new cljs.core.async.t_cljs$core$async26146(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26147));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async26146(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24577__auto___26311 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto___26311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24578__auto__ = (function (){var switch__24465__auto__ = ((function (c__24577__auto___26311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26248){
var state_val_26249 = (state_26248[(1)]);
if((state_val_26249 === (7))){
var inst_26164 = (state_26248[(2)]);
var state_26248__$1 = state_26248;
var statearr_26250_26312 = state_26248__$1;
(statearr_26250_26312[(2)] = inst_26164);

(statearr_26250_26312[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (20))){
var inst_26176 = (state_26248[(7)]);
var state_26248__$1 = state_26248;
var statearr_26251_26313 = state_26248__$1;
(statearr_26251_26313[(2)] = inst_26176);

(statearr_26251_26313[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (27))){
var state_26248__$1 = state_26248;
var statearr_26252_26314 = state_26248__$1;
(statearr_26252_26314[(2)] = null);

(statearr_26252_26314[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (1))){
var inst_26152 = (state_26248[(8)]);
var inst_26152__$1 = calc_state.call(null);
var inst_26154 = (inst_26152__$1 == null);
var inst_26155 = cljs.core.not.call(null,inst_26154);
var state_26248__$1 = (function (){var statearr_26253 = state_26248;
(statearr_26253[(8)] = inst_26152__$1);

return statearr_26253;
})();
if(inst_26155){
var statearr_26254_26315 = state_26248__$1;
(statearr_26254_26315[(1)] = (2));

} else {
var statearr_26255_26316 = state_26248__$1;
(statearr_26255_26316[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (24))){
var inst_26199 = (state_26248[(9)]);
var inst_26208 = (state_26248[(10)]);
var inst_26222 = (state_26248[(11)]);
var inst_26222__$1 = inst_26199.call(null,inst_26208);
var state_26248__$1 = (function (){var statearr_26256 = state_26248;
(statearr_26256[(11)] = inst_26222__$1);

return statearr_26256;
})();
if(cljs.core.truth_(inst_26222__$1)){
var statearr_26257_26317 = state_26248__$1;
(statearr_26257_26317[(1)] = (29));

} else {
var statearr_26258_26318 = state_26248__$1;
(statearr_26258_26318[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (4))){
var inst_26167 = (state_26248[(2)]);
var state_26248__$1 = state_26248;
if(cljs.core.truth_(inst_26167)){
var statearr_26259_26319 = state_26248__$1;
(statearr_26259_26319[(1)] = (8));

} else {
var statearr_26260_26320 = state_26248__$1;
(statearr_26260_26320[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (15))){
var inst_26193 = (state_26248[(2)]);
var state_26248__$1 = state_26248;
if(cljs.core.truth_(inst_26193)){
var statearr_26261_26321 = state_26248__$1;
(statearr_26261_26321[(1)] = (19));

} else {
var statearr_26262_26322 = state_26248__$1;
(statearr_26262_26322[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (21))){
var inst_26198 = (state_26248[(12)]);
var inst_26198__$1 = (state_26248[(2)]);
var inst_26199 = cljs.core.get.call(null,inst_26198__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26200 = cljs.core.get.call(null,inst_26198__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26201 = cljs.core.get.call(null,inst_26198__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26248__$1 = (function (){var statearr_26263 = state_26248;
(statearr_26263[(12)] = inst_26198__$1);

(statearr_26263[(13)] = inst_26200);

(statearr_26263[(9)] = inst_26199);

return statearr_26263;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26248__$1,(22),inst_26201);
} else {
if((state_val_26249 === (31))){
var inst_26230 = (state_26248[(2)]);
var state_26248__$1 = state_26248;
if(cljs.core.truth_(inst_26230)){
var statearr_26264_26323 = state_26248__$1;
(statearr_26264_26323[(1)] = (32));

} else {
var statearr_26265_26324 = state_26248__$1;
(statearr_26265_26324[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (32))){
var inst_26207 = (state_26248[(14)]);
var state_26248__$1 = state_26248;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26248__$1,(35),out,inst_26207);
} else {
if((state_val_26249 === (33))){
var inst_26198 = (state_26248[(12)]);
var inst_26176 = inst_26198;
var state_26248__$1 = (function (){var statearr_26266 = state_26248;
(statearr_26266[(7)] = inst_26176);

return statearr_26266;
})();
var statearr_26267_26325 = state_26248__$1;
(statearr_26267_26325[(2)] = null);

(statearr_26267_26325[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (13))){
var inst_26176 = (state_26248[(7)]);
var inst_26183 = inst_26176.cljs$lang$protocol_mask$partition0$;
var inst_26184 = (inst_26183 & (64));
var inst_26185 = inst_26176.cljs$core$ISeq$;
var inst_26186 = (inst_26184) || (inst_26185);
var state_26248__$1 = state_26248;
if(cljs.core.truth_(inst_26186)){
var statearr_26268_26326 = state_26248__$1;
(statearr_26268_26326[(1)] = (16));

} else {
var statearr_26269_26327 = state_26248__$1;
(statearr_26269_26327[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (22))){
var inst_26207 = (state_26248[(14)]);
var inst_26208 = (state_26248[(10)]);
var inst_26206 = (state_26248[(2)]);
var inst_26207__$1 = cljs.core.nth.call(null,inst_26206,(0),null);
var inst_26208__$1 = cljs.core.nth.call(null,inst_26206,(1),null);
var inst_26209 = (inst_26207__$1 == null);
var inst_26210 = cljs.core._EQ_.call(null,inst_26208__$1,change);
var inst_26211 = (inst_26209) || (inst_26210);
var state_26248__$1 = (function (){var statearr_26270 = state_26248;
(statearr_26270[(14)] = inst_26207__$1);

(statearr_26270[(10)] = inst_26208__$1);

return statearr_26270;
})();
if(cljs.core.truth_(inst_26211)){
var statearr_26271_26328 = state_26248__$1;
(statearr_26271_26328[(1)] = (23));

} else {
var statearr_26272_26329 = state_26248__$1;
(statearr_26272_26329[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (36))){
var inst_26198 = (state_26248[(12)]);
var inst_26176 = inst_26198;
var state_26248__$1 = (function (){var statearr_26273 = state_26248;
(statearr_26273[(7)] = inst_26176);

return statearr_26273;
})();
var statearr_26274_26330 = state_26248__$1;
(statearr_26274_26330[(2)] = null);

(statearr_26274_26330[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (29))){
var inst_26222 = (state_26248[(11)]);
var state_26248__$1 = state_26248;
var statearr_26275_26331 = state_26248__$1;
(statearr_26275_26331[(2)] = inst_26222);

(statearr_26275_26331[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (6))){
var state_26248__$1 = state_26248;
var statearr_26276_26332 = state_26248__$1;
(statearr_26276_26332[(2)] = false);

(statearr_26276_26332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (28))){
var inst_26218 = (state_26248[(2)]);
var inst_26219 = calc_state.call(null);
var inst_26176 = inst_26219;
var state_26248__$1 = (function (){var statearr_26277 = state_26248;
(statearr_26277[(15)] = inst_26218);

(statearr_26277[(7)] = inst_26176);

return statearr_26277;
})();
var statearr_26278_26333 = state_26248__$1;
(statearr_26278_26333[(2)] = null);

(statearr_26278_26333[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (25))){
var inst_26244 = (state_26248[(2)]);
var state_26248__$1 = state_26248;
var statearr_26279_26334 = state_26248__$1;
(statearr_26279_26334[(2)] = inst_26244);

(statearr_26279_26334[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (34))){
var inst_26242 = (state_26248[(2)]);
var state_26248__$1 = state_26248;
var statearr_26280_26335 = state_26248__$1;
(statearr_26280_26335[(2)] = inst_26242);

(statearr_26280_26335[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (17))){
var state_26248__$1 = state_26248;
var statearr_26281_26336 = state_26248__$1;
(statearr_26281_26336[(2)] = false);

(statearr_26281_26336[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (3))){
var state_26248__$1 = state_26248;
var statearr_26282_26337 = state_26248__$1;
(statearr_26282_26337[(2)] = false);

(statearr_26282_26337[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (12))){
var inst_26246 = (state_26248[(2)]);
var state_26248__$1 = state_26248;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26248__$1,inst_26246);
} else {
if((state_val_26249 === (2))){
var inst_26152 = (state_26248[(8)]);
var inst_26157 = inst_26152.cljs$lang$protocol_mask$partition0$;
var inst_26158 = (inst_26157 & (64));
var inst_26159 = inst_26152.cljs$core$ISeq$;
var inst_26160 = (inst_26158) || (inst_26159);
var state_26248__$1 = state_26248;
if(cljs.core.truth_(inst_26160)){
var statearr_26283_26338 = state_26248__$1;
(statearr_26283_26338[(1)] = (5));

} else {
var statearr_26284_26339 = state_26248__$1;
(statearr_26284_26339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (23))){
var inst_26207 = (state_26248[(14)]);
var inst_26213 = (inst_26207 == null);
var state_26248__$1 = state_26248;
if(cljs.core.truth_(inst_26213)){
var statearr_26285_26340 = state_26248__$1;
(statearr_26285_26340[(1)] = (26));

} else {
var statearr_26286_26341 = state_26248__$1;
(statearr_26286_26341[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (35))){
var inst_26233 = (state_26248[(2)]);
var state_26248__$1 = state_26248;
if(cljs.core.truth_(inst_26233)){
var statearr_26287_26342 = state_26248__$1;
(statearr_26287_26342[(1)] = (36));

} else {
var statearr_26288_26343 = state_26248__$1;
(statearr_26288_26343[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (19))){
var inst_26176 = (state_26248[(7)]);
var inst_26195 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26176);
var state_26248__$1 = state_26248;
var statearr_26289_26344 = state_26248__$1;
(statearr_26289_26344[(2)] = inst_26195);

(statearr_26289_26344[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (11))){
var inst_26176 = (state_26248[(7)]);
var inst_26180 = (inst_26176 == null);
var inst_26181 = cljs.core.not.call(null,inst_26180);
var state_26248__$1 = state_26248;
if(inst_26181){
var statearr_26290_26345 = state_26248__$1;
(statearr_26290_26345[(1)] = (13));

} else {
var statearr_26291_26346 = state_26248__$1;
(statearr_26291_26346[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (9))){
var inst_26152 = (state_26248[(8)]);
var state_26248__$1 = state_26248;
var statearr_26292_26347 = state_26248__$1;
(statearr_26292_26347[(2)] = inst_26152);

(statearr_26292_26347[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (5))){
var state_26248__$1 = state_26248;
var statearr_26293_26348 = state_26248__$1;
(statearr_26293_26348[(2)] = true);

(statearr_26293_26348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (14))){
var state_26248__$1 = state_26248;
var statearr_26294_26349 = state_26248__$1;
(statearr_26294_26349[(2)] = false);

(statearr_26294_26349[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (26))){
var inst_26208 = (state_26248[(10)]);
var inst_26215 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26208);
var state_26248__$1 = state_26248;
var statearr_26295_26350 = state_26248__$1;
(statearr_26295_26350[(2)] = inst_26215);

(statearr_26295_26350[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (16))){
var state_26248__$1 = state_26248;
var statearr_26296_26351 = state_26248__$1;
(statearr_26296_26351[(2)] = true);

(statearr_26296_26351[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (38))){
var inst_26238 = (state_26248[(2)]);
var state_26248__$1 = state_26248;
var statearr_26297_26352 = state_26248__$1;
(statearr_26297_26352[(2)] = inst_26238);

(statearr_26297_26352[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (30))){
var inst_26200 = (state_26248[(13)]);
var inst_26199 = (state_26248[(9)]);
var inst_26208 = (state_26248[(10)]);
var inst_26225 = cljs.core.empty_QMARK_.call(null,inst_26199);
var inst_26226 = inst_26200.call(null,inst_26208);
var inst_26227 = cljs.core.not.call(null,inst_26226);
var inst_26228 = (inst_26225) && (inst_26227);
var state_26248__$1 = state_26248;
var statearr_26298_26353 = state_26248__$1;
(statearr_26298_26353[(2)] = inst_26228);

(statearr_26298_26353[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (10))){
var inst_26152 = (state_26248[(8)]);
var inst_26172 = (state_26248[(2)]);
var inst_26173 = cljs.core.get.call(null,inst_26172,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26174 = cljs.core.get.call(null,inst_26172,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26175 = cljs.core.get.call(null,inst_26172,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26176 = inst_26152;
var state_26248__$1 = (function (){var statearr_26299 = state_26248;
(statearr_26299[(16)] = inst_26174);

(statearr_26299[(17)] = inst_26173);

(statearr_26299[(7)] = inst_26176);

(statearr_26299[(18)] = inst_26175);

return statearr_26299;
})();
var statearr_26300_26354 = state_26248__$1;
(statearr_26300_26354[(2)] = null);

(statearr_26300_26354[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (18))){
var inst_26190 = (state_26248[(2)]);
var state_26248__$1 = state_26248;
var statearr_26301_26355 = state_26248__$1;
(statearr_26301_26355[(2)] = inst_26190);

(statearr_26301_26355[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (37))){
var state_26248__$1 = state_26248;
var statearr_26302_26356 = state_26248__$1;
(statearr_26302_26356[(2)] = null);

(statearr_26302_26356[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26249 === (8))){
var inst_26152 = (state_26248[(8)]);
var inst_26169 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26152);
var state_26248__$1 = state_26248;
var statearr_26303_26357 = state_26248__$1;
(statearr_26303_26357[(2)] = inst_26169);

(statearr_26303_26357[(1)] = (10));


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
});})(c__24577__auto___26311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24465__auto__,c__24577__auto___26311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24466__auto__ = null;
var cljs$core$async$mix_$_state_machine__24466__auto____0 = (function (){
var statearr_26307 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26307[(0)] = cljs$core$async$mix_$_state_machine__24466__auto__);

(statearr_26307[(1)] = (1));

return statearr_26307;
});
var cljs$core$async$mix_$_state_machine__24466__auto____1 = (function (state_26248){
while(true){
var ret_value__24467__auto__ = (function (){try{while(true){
var result__24468__auto__ = switch__24465__auto__.call(null,state_26248);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24468__auto__;
}
break;
}
}catch (e26308){if((e26308 instanceof Object)){
var ex__24469__auto__ = e26308;
var statearr_26309_26358 = state_26248;
(statearr_26309_26358[(5)] = ex__24469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26248);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26359 = state_26248;
state_26248 = G__26359;
continue;
} else {
return ret_value__24467__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24466__auto__ = function(state_26248){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24466__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24466__auto____1.call(this,state_26248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24466__auto____0;
cljs$core$async$mix_$_state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24466__auto____1;
return cljs$core$async$mix_$_state_machine__24466__auto__;
})()
;})(switch__24465__auto__,c__24577__auto___26311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24579__auto__ = (function (){var statearr_26310 = f__24578__auto__.call(null);
(statearr_26310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24577__auto___26311);

return statearr_26310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto___26311,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__22337__auto__ = (((p == null))?null:p);
var m__22338__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__22338__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__22337__auto__ = (((p == null))?null:p);
var m__22338__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,p,v,ch);
} else {
var m__22338__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args26360 = [];
var len__22749__auto___26363 = arguments.length;
var i__22750__auto___26364 = (0);
while(true){
if((i__22750__auto___26364 < len__22749__auto___26363)){
args26360.push((arguments[i__22750__auto___26364]));

var G__26365 = (i__22750__auto___26364 + (1));
i__22750__auto___26364 = G__26365;
continue;
} else {
}
break;
}

var G__26362 = args26360.length;
switch (G__26362) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26360.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__22337__auto__ = (((p == null))?null:p);
var m__22338__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,p);
} else {
var m__22338__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__22337__auto__ = (((p == null))?null:p);
var m__22338__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22337__auto__)]);
if(!((m__22338__auto__ == null))){
return m__22338__auto__.call(null,p,v);
} else {
var m__22338__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22338__auto____$1 == null))){
return m__22338__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var args26368 = [];
var len__22749__auto___26493 = arguments.length;
var i__22750__auto___26494 = (0);
while(true){
if((i__22750__auto___26494 < len__22749__auto___26493)){
args26368.push((arguments[i__22750__auto___26494]));

var G__26495 = (i__22750__auto___26494 + (1));
i__22750__auto___26494 = G__26495;
continue;
} else {
}
break;
}

var G__26370 = args26368.length;
switch (G__26370) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26368.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__21674__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__21674__auto__,mults){
return (function (p1__26367_SHARP_){
if(cljs.core.truth_(p1__26367_SHARP_.call(null,topic))){
return p1__26367_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26367_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__21674__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async26371 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26371 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26372){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26372 = meta26372;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26373,meta26372__$1){
var self__ = this;
var _26373__$1 = this;
return (new cljs.core.async.t_cljs$core$async26371(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26372__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26371.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26373){
var self__ = this;
var _26373__$1 = this;
return self__.meta26372;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26371.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26371.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26371.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async26371.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26371.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26371.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26371.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26371.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26372","meta26372",853510743,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26371.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26371.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26371";

cljs.core.async.t_cljs$core$async26371.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__22280__auto__,writer__22281__auto__,opt__22282__auto__){
return cljs.core._write.call(null,writer__22281__auto__,"cljs.core.async/t_cljs$core$async26371");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async26371 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26371(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26372){
return (new cljs.core.async.t_cljs$core$async26371(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26372));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26371(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24577__auto___26497 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto___26497,mults,ensure_mult,p){
return (function (){
var f__24578__auto__ = (function (){var switch__24465__auto__ = ((function (c__24577__auto___26497,mults,ensure_mult,p){
return (function (state_26445){
var state_val_26446 = (state_26445[(1)]);
if((state_val_26446 === (7))){
var inst_26441 = (state_26445[(2)]);
var state_26445__$1 = state_26445;
var statearr_26447_26498 = state_26445__$1;
(statearr_26447_26498[(2)] = inst_26441);

(statearr_26447_26498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (20))){
var state_26445__$1 = state_26445;
var statearr_26448_26499 = state_26445__$1;
(statearr_26448_26499[(2)] = null);

(statearr_26448_26499[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (1))){
var state_26445__$1 = state_26445;
var statearr_26449_26500 = state_26445__$1;
(statearr_26449_26500[(2)] = null);

(statearr_26449_26500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (24))){
var inst_26424 = (state_26445[(7)]);
var inst_26433 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26424);
var state_26445__$1 = state_26445;
var statearr_26450_26501 = state_26445__$1;
(statearr_26450_26501[(2)] = inst_26433);

(statearr_26450_26501[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (4))){
var inst_26376 = (state_26445[(8)]);
var inst_26376__$1 = (state_26445[(2)]);
var inst_26377 = (inst_26376__$1 == null);
var state_26445__$1 = (function (){var statearr_26451 = state_26445;
(statearr_26451[(8)] = inst_26376__$1);

return statearr_26451;
})();
if(cljs.core.truth_(inst_26377)){
var statearr_26452_26502 = state_26445__$1;
(statearr_26452_26502[(1)] = (5));

} else {
var statearr_26453_26503 = state_26445__$1;
(statearr_26453_26503[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (15))){
var inst_26418 = (state_26445[(2)]);
var state_26445__$1 = state_26445;
var statearr_26454_26504 = state_26445__$1;
(statearr_26454_26504[(2)] = inst_26418);

(statearr_26454_26504[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (21))){
var inst_26438 = (state_26445[(2)]);
var state_26445__$1 = (function (){var statearr_26455 = state_26445;
(statearr_26455[(9)] = inst_26438);

return statearr_26455;
})();
var statearr_26456_26505 = state_26445__$1;
(statearr_26456_26505[(2)] = null);

(statearr_26456_26505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (13))){
var inst_26400 = (state_26445[(10)]);
var inst_26402 = cljs.core.chunked_seq_QMARK_.call(null,inst_26400);
var state_26445__$1 = state_26445;
if(inst_26402){
var statearr_26457_26506 = state_26445__$1;
(statearr_26457_26506[(1)] = (16));

} else {
var statearr_26458_26507 = state_26445__$1;
(statearr_26458_26507[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (22))){
var inst_26430 = (state_26445[(2)]);
var state_26445__$1 = state_26445;
if(cljs.core.truth_(inst_26430)){
var statearr_26459_26508 = state_26445__$1;
(statearr_26459_26508[(1)] = (23));

} else {
var statearr_26460_26509 = state_26445__$1;
(statearr_26460_26509[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (6))){
var inst_26426 = (state_26445[(11)]);
var inst_26424 = (state_26445[(7)]);
var inst_26376 = (state_26445[(8)]);
var inst_26424__$1 = topic_fn.call(null,inst_26376);
var inst_26425 = cljs.core.deref.call(null,mults);
var inst_26426__$1 = cljs.core.get.call(null,inst_26425,inst_26424__$1);
var state_26445__$1 = (function (){var statearr_26461 = state_26445;
(statearr_26461[(11)] = inst_26426__$1);

(statearr_26461[(7)] = inst_26424__$1);

return statearr_26461;
})();
if(cljs.core.truth_(inst_26426__$1)){
var statearr_26462_26510 = state_26445__$1;
(statearr_26462_26510[(1)] = (19));

} else {
var statearr_26463_26511 = state_26445__$1;
(statearr_26463_26511[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (25))){
var inst_26435 = (state_26445[(2)]);
var state_26445__$1 = state_26445;
var statearr_26464_26512 = state_26445__$1;
(statearr_26464_26512[(2)] = inst_26435);

(statearr_26464_26512[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (17))){
var inst_26400 = (state_26445[(10)]);
var inst_26409 = cljs.core.first.call(null,inst_26400);
var inst_26410 = cljs.core.async.muxch_STAR_.call(null,inst_26409);
var inst_26411 = cljs.core.async.close_BANG_.call(null,inst_26410);
var inst_26412 = cljs.core.next.call(null,inst_26400);
var inst_26386 = inst_26412;
var inst_26387 = null;
var inst_26388 = (0);
var inst_26389 = (0);
var state_26445__$1 = (function (){var statearr_26465 = state_26445;
(statearr_26465[(12)] = inst_26386);

(statearr_26465[(13)] = inst_26387);

(statearr_26465[(14)] = inst_26411);

(statearr_26465[(15)] = inst_26388);

(statearr_26465[(16)] = inst_26389);

return statearr_26465;
})();
var statearr_26466_26513 = state_26445__$1;
(statearr_26466_26513[(2)] = null);

(statearr_26466_26513[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (3))){
var inst_26443 = (state_26445[(2)]);
var state_26445__$1 = state_26445;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26445__$1,inst_26443);
} else {
if((state_val_26446 === (12))){
var inst_26420 = (state_26445[(2)]);
var state_26445__$1 = state_26445;
var statearr_26467_26514 = state_26445__$1;
(statearr_26467_26514[(2)] = inst_26420);

(statearr_26467_26514[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (2))){
var state_26445__$1 = state_26445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26445__$1,(4),ch);
} else {
if((state_val_26446 === (23))){
var state_26445__$1 = state_26445;
var statearr_26468_26515 = state_26445__$1;
(statearr_26468_26515[(2)] = null);

(statearr_26468_26515[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (19))){
var inst_26426 = (state_26445[(11)]);
var inst_26376 = (state_26445[(8)]);
var inst_26428 = cljs.core.async.muxch_STAR_.call(null,inst_26426);
var state_26445__$1 = state_26445;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26445__$1,(22),inst_26428,inst_26376);
} else {
if((state_val_26446 === (11))){
var inst_26386 = (state_26445[(12)]);
var inst_26400 = (state_26445[(10)]);
var inst_26400__$1 = cljs.core.seq.call(null,inst_26386);
var state_26445__$1 = (function (){var statearr_26469 = state_26445;
(statearr_26469[(10)] = inst_26400__$1);

return statearr_26469;
})();
if(inst_26400__$1){
var statearr_26470_26516 = state_26445__$1;
(statearr_26470_26516[(1)] = (13));

} else {
var statearr_26471_26517 = state_26445__$1;
(statearr_26471_26517[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (9))){
var inst_26422 = (state_26445[(2)]);
var state_26445__$1 = state_26445;
var statearr_26472_26518 = state_26445__$1;
(statearr_26472_26518[(2)] = inst_26422);

(statearr_26472_26518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (5))){
var inst_26383 = cljs.core.deref.call(null,mults);
var inst_26384 = cljs.core.vals.call(null,inst_26383);
var inst_26385 = cljs.core.seq.call(null,inst_26384);
var inst_26386 = inst_26385;
var inst_26387 = null;
var inst_26388 = (0);
var inst_26389 = (0);
var state_26445__$1 = (function (){var statearr_26473 = state_26445;
(statearr_26473[(12)] = inst_26386);

(statearr_26473[(13)] = inst_26387);

(statearr_26473[(15)] = inst_26388);

(statearr_26473[(16)] = inst_26389);

return statearr_26473;
})();
var statearr_26474_26519 = state_26445__$1;
(statearr_26474_26519[(2)] = null);

(statearr_26474_26519[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (14))){
var state_26445__$1 = state_26445;
var statearr_26478_26520 = state_26445__$1;
(statearr_26478_26520[(2)] = null);

(statearr_26478_26520[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (16))){
var inst_26400 = (state_26445[(10)]);
var inst_26404 = cljs.core.chunk_first.call(null,inst_26400);
var inst_26405 = cljs.core.chunk_rest.call(null,inst_26400);
var inst_26406 = cljs.core.count.call(null,inst_26404);
var inst_26386 = inst_26405;
var inst_26387 = inst_26404;
var inst_26388 = inst_26406;
var inst_26389 = (0);
var state_26445__$1 = (function (){var statearr_26479 = state_26445;
(statearr_26479[(12)] = inst_26386);

(statearr_26479[(13)] = inst_26387);

(statearr_26479[(15)] = inst_26388);

(statearr_26479[(16)] = inst_26389);

return statearr_26479;
})();
var statearr_26480_26521 = state_26445__$1;
(statearr_26480_26521[(2)] = null);

(statearr_26480_26521[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (10))){
var inst_26386 = (state_26445[(12)]);
var inst_26387 = (state_26445[(13)]);
var inst_26388 = (state_26445[(15)]);
var inst_26389 = (state_26445[(16)]);
var inst_26394 = cljs.core._nth.call(null,inst_26387,inst_26389);
var inst_26395 = cljs.core.async.muxch_STAR_.call(null,inst_26394);
var inst_26396 = cljs.core.async.close_BANG_.call(null,inst_26395);
var inst_26397 = (inst_26389 + (1));
var tmp26475 = inst_26386;
var tmp26476 = inst_26387;
var tmp26477 = inst_26388;
var inst_26386__$1 = tmp26475;
var inst_26387__$1 = tmp26476;
var inst_26388__$1 = tmp26477;
var inst_26389__$1 = inst_26397;
var state_26445__$1 = (function (){var statearr_26481 = state_26445;
(statearr_26481[(12)] = inst_26386__$1);

(statearr_26481[(13)] = inst_26387__$1);

(statearr_26481[(15)] = inst_26388__$1);

(statearr_26481[(17)] = inst_26396);

(statearr_26481[(16)] = inst_26389__$1);

return statearr_26481;
})();
var statearr_26482_26522 = state_26445__$1;
(statearr_26482_26522[(2)] = null);

(statearr_26482_26522[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (18))){
var inst_26415 = (state_26445[(2)]);
var state_26445__$1 = state_26445;
var statearr_26483_26523 = state_26445__$1;
(statearr_26483_26523[(2)] = inst_26415);

(statearr_26483_26523[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26446 === (8))){
var inst_26388 = (state_26445[(15)]);
var inst_26389 = (state_26445[(16)]);
var inst_26391 = (inst_26389 < inst_26388);
var inst_26392 = inst_26391;
var state_26445__$1 = state_26445;
if(cljs.core.truth_(inst_26392)){
var statearr_26484_26524 = state_26445__$1;
(statearr_26484_26524[(1)] = (10));

} else {
var statearr_26485_26525 = state_26445__$1;
(statearr_26485_26525[(1)] = (11));

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
});})(c__24577__auto___26497,mults,ensure_mult,p))
;
return ((function (switch__24465__auto__,c__24577__auto___26497,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24466__auto__ = null;
var cljs$core$async$state_machine__24466__auto____0 = (function (){
var statearr_26489 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26489[(0)] = cljs$core$async$state_machine__24466__auto__);

(statearr_26489[(1)] = (1));

return statearr_26489;
});
var cljs$core$async$state_machine__24466__auto____1 = (function (state_26445){
while(true){
var ret_value__24467__auto__ = (function (){try{while(true){
var result__24468__auto__ = switch__24465__auto__.call(null,state_26445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24468__auto__;
}
break;
}
}catch (e26490){if((e26490 instanceof Object)){
var ex__24469__auto__ = e26490;
var statearr_26491_26526 = state_26445;
(statearr_26491_26526[(5)] = ex__24469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26527 = state_26445;
state_26445 = G__26527;
continue;
} else {
return ret_value__24467__auto__;
}
break;
}
});
cljs$core$async$state_machine__24466__auto__ = function(state_26445){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24466__auto____1.call(this,state_26445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24466__auto____0;
cljs$core$async$state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24466__auto____1;
return cljs$core$async$state_machine__24466__auto__;
})()
;})(switch__24465__auto__,c__24577__auto___26497,mults,ensure_mult,p))
})();
var state__24579__auto__ = (function (){var statearr_26492 = f__24578__auto__.call(null);
(statearr_26492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24577__auto___26497);

return statearr_26492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto___26497,mults,ensure_mult,p))
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
var args26528 = [];
var len__22749__auto___26531 = arguments.length;
var i__22750__auto___26532 = (0);
while(true){
if((i__22750__auto___26532 < len__22749__auto___26531)){
args26528.push((arguments[i__22750__auto___26532]));

var G__26533 = (i__22750__auto___26532 + (1));
i__22750__auto___26532 = G__26533;
continue;
} else {
}
break;
}

var G__26530 = args26528.length;
switch (G__26530) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26528.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args26535 = [];
var len__22749__auto___26538 = arguments.length;
var i__22750__auto___26539 = (0);
while(true){
if((i__22750__auto___26539 < len__22749__auto___26538)){
args26535.push((arguments[i__22750__auto___26539]));

var G__26540 = (i__22750__auto___26539 + (1));
i__22750__auto___26539 = G__26540;
continue;
} else {
}
break;
}

var G__26537 = args26535.length;
switch (G__26537) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26535.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var args26542 = [];
var len__22749__auto___26613 = arguments.length;
var i__22750__auto___26614 = (0);
while(true){
if((i__22750__auto___26614 < len__22749__auto___26613)){
args26542.push((arguments[i__22750__auto___26614]));

var G__26615 = (i__22750__auto___26614 + (1));
i__22750__auto___26614 = G__26615;
continue;
} else {
}
break;
}

var G__26544 = args26542.length;
switch (G__26544) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26542.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__24577__auto___26617 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto___26617,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24578__auto__ = (function (){var switch__24465__auto__ = ((function (c__24577__auto___26617,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26583){
var state_val_26584 = (state_26583[(1)]);
if((state_val_26584 === (7))){
var state_26583__$1 = state_26583;
var statearr_26585_26618 = state_26583__$1;
(statearr_26585_26618[(2)] = null);

(statearr_26585_26618[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26584 === (1))){
var state_26583__$1 = state_26583;
var statearr_26586_26619 = state_26583__$1;
(statearr_26586_26619[(2)] = null);

(statearr_26586_26619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26584 === (4))){
var inst_26547 = (state_26583[(7)]);
var inst_26549 = (inst_26547 < cnt);
var state_26583__$1 = state_26583;
if(cljs.core.truth_(inst_26549)){
var statearr_26587_26620 = state_26583__$1;
(statearr_26587_26620[(1)] = (6));

} else {
var statearr_26588_26621 = state_26583__$1;
(statearr_26588_26621[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26584 === (15))){
var inst_26579 = (state_26583[(2)]);
var state_26583__$1 = state_26583;
var statearr_26589_26622 = state_26583__$1;
(statearr_26589_26622[(2)] = inst_26579);

(statearr_26589_26622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26584 === (13))){
var inst_26572 = cljs.core.async.close_BANG_.call(null,out);
var state_26583__$1 = state_26583;
var statearr_26590_26623 = state_26583__$1;
(statearr_26590_26623[(2)] = inst_26572);

(statearr_26590_26623[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26584 === (6))){
var state_26583__$1 = state_26583;
var statearr_26591_26624 = state_26583__$1;
(statearr_26591_26624[(2)] = null);

(statearr_26591_26624[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26584 === (3))){
var inst_26581 = (state_26583[(2)]);
var state_26583__$1 = state_26583;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26583__$1,inst_26581);
} else {
if((state_val_26584 === (12))){
var inst_26569 = (state_26583[(8)]);
var inst_26569__$1 = (state_26583[(2)]);
var inst_26570 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26569__$1);
var state_26583__$1 = (function (){var statearr_26592 = state_26583;
(statearr_26592[(8)] = inst_26569__$1);

return statearr_26592;
})();
if(cljs.core.truth_(inst_26570)){
var statearr_26593_26625 = state_26583__$1;
(statearr_26593_26625[(1)] = (13));

} else {
var statearr_26594_26626 = state_26583__$1;
(statearr_26594_26626[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26584 === (2))){
var inst_26546 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26547 = (0);
var state_26583__$1 = (function (){var statearr_26595 = state_26583;
(statearr_26595[(7)] = inst_26547);

(statearr_26595[(9)] = inst_26546);

return statearr_26595;
})();
var statearr_26596_26627 = state_26583__$1;
(statearr_26596_26627[(2)] = null);

(statearr_26596_26627[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26584 === (11))){
var inst_26547 = (state_26583[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26583,(10),Object,null,(9));
var inst_26556 = chs__$1.call(null,inst_26547);
var inst_26557 = done.call(null,inst_26547);
var inst_26558 = cljs.core.async.take_BANG_.call(null,inst_26556,inst_26557);
var state_26583__$1 = state_26583;
var statearr_26597_26628 = state_26583__$1;
(statearr_26597_26628[(2)] = inst_26558);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26583__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26584 === (9))){
var inst_26547 = (state_26583[(7)]);
var inst_26560 = (state_26583[(2)]);
var inst_26561 = (inst_26547 + (1));
var inst_26547__$1 = inst_26561;
var state_26583__$1 = (function (){var statearr_26598 = state_26583;
(statearr_26598[(10)] = inst_26560);

(statearr_26598[(7)] = inst_26547__$1);

return statearr_26598;
})();
var statearr_26599_26629 = state_26583__$1;
(statearr_26599_26629[(2)] = null);

(statearr_26599_26629[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26584 === (5))){
var inst_26567 = (state_26583[(2)]);
var state_26583__$1 = (function (){var statearr_26600 = state_26583;
(statearr_26600[(11)] = inst_26567);

return statearr_26600;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26583__$1,(12),dchan);
} else {
if((state_val_26584 === (14))){
var inst_26569 = (state_26583[(8)]);
var inst_26574 = cljs.core.apply.call(null,f,inst_26569);
var state_26583__$1 = state_26583;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26583__$1,(16),out,inst_26574);
} else {
if((state_val_26584 === (16))){
var inst_26576 = (state_26583[(2)]);
var state_26583__$1 = (function (){var statearr_26601 = state_26583;
(statearr_26601[(12)] = inst_26576);

return statearr_26601;
})();
var statearr_26602_26630 = state_26583__$1;
(statearr_26602_26630[(2)] = null);

(statearr_26602_26630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26584 === (10))){
var inst_26551 = (state_26583[(2)]);
var inst_26552 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26583__$1 = (function (){var statearr_26603 = state_26583;
(statearr_26603[(13)] = inst_26551);

return statearr_26603;
})();
var statearr_26604_26631 = state_26583__$1;
(statearr_26604_26631[(2)] = inst_26552);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26583__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26584 === (8))){
var inst_26565 = (state_26583[(2)]);
var state_26583__$1 = state_26583;
var statearr_26605_26632 = state_26583__$1;
(statearr_26605_26632[(2)] = inst_26565);

(statearr_26605_26632[(1)] = (5));


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
});})(c__24577__auto___26617,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24465__auto__,c__24577__auto___26617,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24466__auto__ = null;
var cljs$core$async$state_machine__24466__auto____0 = (function (){
var statearr_26609 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26609[(0)] = cljs$core$async$state_machine__24466__auto__);

(statearr_26609[(1)] = (1));

return statearr_26609;
});
var cljs$core$async$state_machine__24466__auto____1 = (function (state_26583){
while(true){
var ret_value__24467__auto__ = (function (){try{while(true){
var result__24468__auto__ = switch__24465__auto__.call(null,state_26583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24468__auto__;
}
break;
}
}catch (e26610){if((e26610 instanceof Object)){
var ex__24469__auto__ = e26610;
var statearr_26611_26633 = state_26583;
(statearr_26611_26633[(5)] = ex__24469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26610;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26634 = state_26583;
state_26583 = G__26634;
continue;
} else {
return ret_value__24467__auto__;
}
break;
}
});
cljs$core$async$state_machine__24466__auto__ = function(state_26583){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24466__auto____1.call(this,state_26583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24466__auto____0;
cljs$core$async$state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24466__auto____1;
return cljs$core$async$state_machine__24466__auto__;
})()
;})(switch__24465__auto__,c__24577__auto___26617,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24579__auto__ = (function (){var statearr_26612 = f__24578__auto__.call(null);
(statearr_26612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24577__auto___26617);

return statearr_26612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto___26617,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args26636 = [];
var len__22749__auto___26694 = arguments.length;
var i__22750__auto___26695 = (0);
while(true){
if((i__22750__auto___26695 < len__22749__auto___26694)){
args26636.push((arguments[i__22750__auto___26695]));

var G__26696 = (i__22750__auto___26695 + (1));
i__22750__auto___26695 = G__26696;
continue;
} else {
}
break;
}

var G__26638 = args26636.length;
switch (G__26638) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26636.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24577__auto___26698 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto___26698,out){
return (function (){
var f__24578__auto__ = (function (){var switch__24465__auto__ = ((function (c__24577__auto___26698,out){
return (function (state_26670){
var state_val_26671 = (state_26670[(1)]);
if((state_val_26671 === (7))){
var inst_26650 = (state_26670[(7)]);
var inst_26649 = (state_26670[(8)]);
var inst_26649__$1 = (state_26670[(2)]);
var inst_26650__$1 = cljs.core.nth.call(null,inst_26649__$1,(0),null);
var inst_26651 = cljs.core.nth.call(null,inst_26649__$1,(1),null);
var inst_26652 = (inst_26650__$1 == null);
var state_26670__$1 = (function (){var statearr_26672 = state_26670;
(statearr_26672[(9)] = inst_26651);

(statearr_26672[(7)] = inst_26650__$1);

(statearr_26672[(8)] = inst_26649__$1);

return statearr_26672;
})();
if(cljs.core.truth_(inst_26652)){
var statearr_26673_26699 = state_26670__$1;
(statearr_26673_26699[(1)] = (8));

} else {
var statearr_26674_26700 = state_26670__$1;
(statearr_26674_26700[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26671 === (1))){
var inst_26639 = cljs.core.vec.call(null,chs);
var inst_26640 = inst_26639;
var state_26670__$1 = (function (){var statearr_26675 = state_26670;
(statearr_26675[(10)] = inst_26640);

return statearr_26675;
})();
var statearr_26676_26701 = state_26670__$1;
(statearr_26676_26701[(2)] = null);

(statearr_26676_26701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26671 === (4))){
var inst_26640 = (state_26670[(10)]);
var state_26670__$1 = state_26670;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26670__$1,(7),inst_26640);
} else {
if((state_val_26671 === (6))){
var inst_26666 = (state_26670[(2)]);
var state_26670__$1 = state_26670;
var statearr_26677_26702 = state_26670__$1;
(statearr_26677_26702[(2)] = inst_26666);

(statearr_26677_26702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26671 === (3))){
var inst_26668 = (state_26670[(2)]);
var state_26670__$1 = state_26670;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26670__$1,inst_26668);
} else {
if((state_val_26671 === (2))){
var inst_26640 = (state_26670[(10)]);
var inst_26642 = cljs.core.count.call(null,inst_26640);
var inst_26643 = (inst_26642 > (0));
var state_26670__$1 = state_26670;
if(cljs.core.truth_(inst_26643)){
var statearr_26679_26703 = state_26670__$1;
(statearr_26679_26703[(1)] = (4));

} else {
var statearr_26680_26704 = state_26670__$1;
(statearr_26680_26704[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26671 === (11))){
var inst_26640 = (state_26670[(10)]);
var inst_26659 = (state_26670[(2)]);
var tmp26678 = inst_26640;
var inst_26640__$1 = tmp26678;
var state_26670__$1 = (function (){var statearr_26681 = state_26670;
(statearr_26681[(11)] = inst_26659);

(statearr_26681[(10)] = inst_26640__$1);

return statearr_26681;
})();
var statearr_26682_26705 = state_26670__$1;
(statearr_26682_26705[(2)] = null);

(statearr_26682_26705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26671 === (9))){
var inst_26650 = (state_26670[(7)]);
var state_26670__$1 = state_26670;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26670__$1,(11),out,inst_26650);
} else {
if((state_val_26671 === (5))){
var inst_26664 = cljs.core.async.close_BANG_.call(null,out);
var state_26670__$1 = state_26670;
var statearr_26683_26706 = state_26670__$1;
(statearr_26683_26706[(2)] = inst_26664);

(statearr_26683_26706[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26671 === (10))){
var inst_26662 = (state_26670[(2)]);
var state_26670__$1 = state_26670;
var statearr_26684_26707 = state_26670__$1;
(statearr_26684_26707[(2)] = inst_26662);

(statearr_26684_26707[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26671 === (8))){
var inst_26651 = (state_26670[(9)]);
var inst_26650 = (state_26670[(7)]);
var inst_26640 = (state_26670[(10)]);
var inst_26649 = (state_26670[(8)]);
var inst_26654 = (function (){var cs = inst_26640;
var vec__26645 = inst_26649;
var v = inst_26650;
var c = inst_26651;
return ((function (cs,vec__26645,v,c,inst_26651,inst_26650,inst_26640,inst_26649,state_val_26671,c__24577__auto___26698,out){
return (function (p1__26635_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26635_SHARP_);
});
;})(cs,vec__26645,v,c,inst_26651,inst_26650,inst_26640,inst_26649,state_val_26671,c__24577__auto___26698,out))
})();
var inst_26655 = cljs.core.filterv.call(null,inst_26654,inst_26640);
var inst_26640__$1 = inst_26655;
var state_26670__$1 = (function (){var statearr_26685 = state_26670;
(statearr_26685[(10)] = inst_26640__$1);

return statearr_26685;
})();
var statearr_26686_26708 = state_26670__$1;
(statearr_26686_26708[(2)] = null);

(statearr_26686_26708[(1)] = (2));


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
});})(c__24577__auto___26698,out))
;
return ((function (switch__24465__auto__,c__24577__auto___26698,out){
return (function() {
var cljs$core$async$state_machine__24466__auto__ = null;
var cljs$core$async$state_machine__24466__auto____0 = (function (){
var statearr_26690 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26690[(0)] = cljs$core$async$state_machine__24466__auto__);

(statearr_26690[(1)] = (1));

return statearr_26690;
});
var cljs$core$async$state_machine__24466__auto____1 = (function (state_26670){
while(true){
var ret_value__24467__auto__ = (function (){try{while(true){
var result__24468__auto__ = switch__24465__auto__.call(null,state_26670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24468__auto__;
}
break;
}
}catch (e26691){if((e26691 instanceof Object)){
var ex__24469__auto__ = e26691;
var statearr_26692_26709 = state_26670;
(statearr_26692_26709[(5)] = ex__24469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26710 = state_26670;
state_26670 = G__26710;
continue;
} else {
return ret_value__24467__auto__;
}
break;
}
});
cljs$core$async$state_machine__24466__auto__ = function(state_26670){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24466__auto____1.call(this,state_26670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24466__auto____0;
cljs$core$async$state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24466__auto____1;
return cljs$core$async$state_machine__24466__auto__;
})()
;})(switch__24465__auto__,c__24577__auto___26698,out))
})();
var state__24579__auto__ = (function (){var statearr_26693 = f__24578__auto__.call(null);
(statearr_26693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24577__auto___26698);

return statearr_26693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto___26698,out))
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args26711 = [];
var len__22749__auto___26760 = arguments.length;
var i__22750__auto___26761 = (0);
while(true){
if((i__22750__auto___26761 < len__22749__auto___26760)){
args26711.push((arguments[i__22750__auto___26761]));

var G__26762 = (i__22750__auto___26761 + (1));
i__22750__auto___26761 = G__26762;
continue;
} else {
}
break;
}

var G__26713 = args26711.length;
switch (G__26713) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26711.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24577__auto___26764 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto___26764,out){
return (function (){
var f__24578__auto__ = (function (){var switch__24465__auto__ = ((function (c__24577__auto___26764,out){
return (function (state_26737){
var state_val_26738 = (state_26737[(1)]);
if((state_val_26738 === (7))){
var inst_26719 = (state_26737[(7)]);
var inst_26719__$1 = (state_26737[(2)]);
var inst_26720 = (inst_26719__$1 == null);
var inst_26721 = cljs.core.not.call(null,inst_26720);
var state_26737__$1 = (function (){var statearr_26739 = state_26737;
(statearr_26739[(7)] = inst_26719__$1);

return statearr_26739;
})();
if(inst_26721){
var statearr_26740_26765 = state_26737__$1;
(statearr_26740_26765[(1)] = (8));

} else {
var statearr_26741_26766 = state_26737__$1;
(statearr_26741_26766[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26738 === (1))){
var inst_26714 = (0);
var state_26737__$1 = (function (){var statearr_26742 = state_26737;
(statearr_26742[(8)] = inst_26714);

return statearr_26742;
})();
var statearr_26743_26767 = state_26737__$1;
(statearr_26743_26767[(2)] = null);

(statearr_26743_26767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26738 === (4))){
var state_26737__$1 = state_26737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26737__$1,(7),ch);
} else {
if((state_val_26738 === (6))){
var inst_26732 = (state_26737[(2)]);
var state_26737__$1 = state_26737;
var statearr_26744_26768 = state_26737__$1;
(statearr_26744_26768[(2)] = inst_26732);

(statearr_26744_26768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26738 === (3))){
var inst_26734 = (state_26737[(2)]);
var inst_26735 = cljs.core.async.close_BANG_.call(null,out);
var state_26737__$1 = (function (){var statearr_26745 = state_26737;
(statearr_26745[(9)] = inst_26734);

return statearr_26745;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26737__$1,inst_26735);
} else {
if((state_val_26738 === (2))){
var inst_26714 = (state_26737[(8)]);
var inst_26716 = (inst_26714 < n);
var state_26737__$1 = state_26737;
if(cljs.core.truth_(inst_26716)){
var statearr_26746_26769 = state_26737__$1;
(statearr_26746_26769[(1)] = (4));

} else {
var statearr_26747_26770 = state_26737__$1;
(statearr_26747_26770[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26738 === (11))){
var inst_26714 = (state_26737[(8)]);
var inst_26724 = (state_26737[(2)]);
var inst_26725 = (inst_26714 + (1));
var inst_26714__$1 = inst_26725;
var state_26737__$1 = (function (){var statearr_26748 = state_26737;
(statearr_26748[(8)] = inst_26714__$1);

(statearr_26748[(10)] = inst_26724);

return statearr_26748;
})();
var statearr_26749_26771 = state_26737__$1;
(statearr_26749_26771[(2)] = null);

(statearr_26749_26771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26738 === (9))){
var state_26737__$1 = state_26737;
var statearr_26750_26772 = state_26737__$1;
(statearr_26750_26772[(2)] = null);

(statearr_26750_26772[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26738 === (5))){
var state_26737__$1 = state_26737;
var statearr_26751_26773 = state_26737__$1;
(statearr_26751_26773[(2)] = null);

(statearr_26751_26773[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26738 === (10))){
var inst_26729 = (state_26737[(2)]);
var state_26737__$1 = state_26737;
var statearr_26752_26774 = state_26737__$1;
(statearr_26752_26774[(2)] = inst_26729);

(statearr_26752_26774[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26738 === (8))){
var inst_26719 = (state_26737[(7)]);
var state_26737__$1 = state_26737;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26737__$1,(11),out,inst_26719);
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
});})(c__24577__auto___26764,out))
;
return ((function (switch__24465__auto__,c__24577__auto___26764,out){
return (function() {
var cljs$core$async$state_machine__24466__auto__ = null;
var cljs$core$async$state_machine__24466__auto____0 = (function (){
var statearr_26756 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26756[(0)] = cljs$core$async$state_machine__24466__auto__);

(statearr_26756[(1)] = (1));

return statearr_26756;
});
var cljs$core$async$state_machine__24466__auto____1 = (function (state_26737){
while(true){
var ret_value__24467__auto__ = (function (){try{while(true){
var result__24468__auto__ = switch__24465__auto__.call(null,state_26737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24468__auto__;
}
break;
}
}catch (e26757){if((e26757 instanceof Object)){
var ex__24469__auto__ = e26757;
var statearr_26758_26775 = state_26737;
(statearr_26758_26775[(5)] = ex__24469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26776 = state_26737;
state_26737 = G__26776;
continue;
} else {
return ret_value__24467__auto__;
}
break;
}
});
cljs$core$async$state_machine__24466__auto__ = function(state_26737){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24466__auto____1.call(this,state_26737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24466__auto____0;
cljs$core$async$state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24466__auto____1;
return cljs$core$async$state_machine__24466__auto__;
})()
;})(switch__24465__auto__,c__24577__auto___26764,out))
})();
var state__24579__auto__ = (function (){var statearr_26759 = f__24578__auto__.call(null);
(statearr_26759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24577__auto___26764);

return statearr_26759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto___26764,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26784 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26784 = (function (map_LT_,f,ch,meta26785){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26785 = meta26785;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26786,meta26785__$1){
var self__ = this;
var _26786__$1 = this;
return (new cljs.core.async.t_cljs$core$async26784(self__.map_LT_,self__.f,self__.ch,meta26785__$1));
});

cljs.core.async.t_cljs$core$async26784.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26786){
var self__ = this;
var _26786__$1 = this;
return self__.meta26785;
});

cljs.core.async.t_cljs$core$async26784.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26784.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26784.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26784.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26784.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26787 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26787 = (function (map_LT_,f,ch,meta26785,_,fn1,meta26788){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26785 = meta26785;
this._ = _;
this.fn1 = fn1;
this.meta26788 = meta26788;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26789,meta26788__$1){
var self__ = this;
var _26789__$1 = this;
return (new cljs.core.async.t_cljs$core$async26787(self__.map_LT_,self__.f,self__.ch,self__.meta26785,self__._,self__.fn1,meta26788__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26787.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26789){
var self__ = this;
var _26789__$1 = this;
return self__.meta26788;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26787.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26787.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26787.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26787.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26777_SHARP_){
return f1.call(null,(((p1__26777_SHARP_ == null))?null:self__.f.call(null,p1__26777_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26787.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26785","meta26785",61297858,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26784","cljs.core.async/t_cljs$core$async26784",1901693313,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26788","meta26788",-1596918922,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26787.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26787.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26787";

cljs.core.async.t_cljs$core$async26787.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__22280__auto__,writer__22281__auto__,opt__22282__auto__){
return cljs.core._write.call(null,writer__22281__auto__,"cljs.core.async/t_cljs$core$async26787");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async26787 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26787(map_LT___$1,f__$1,ch__$1,meta26785__$1,___$2,fn1__$1,meta26788){
return (new cljs.core.async.t_cljs$core$async26787(map_LT___$1,f__$1,ch__$1,meta26785__$1,___$2,fn1__$1,meta26788));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26787(self__.map_LT_,self__.f,self__.ch,self__.meta26785,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__21662__auto__ = ret;
if(cljs.core.truth_(and__21662__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__21662__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async26784.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26784.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26784.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26785","meta26785",61297858,null)], null);
});

cljs.core.async.t_cljs$core$async26784.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26784.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26784";

cljs.core.async.t_cljs$core$async26784.cljs$lang$ctorPrWriter = (function (this__22280__auto__,writer__22281__auto__,opt__22282__auto__){
return cljs.core._write.call(null,writer__22281__auto__,"cljs.core.async/t_cljs$core$async26784");
});

cljs.core.async.__GT_t_cljs$core$async26784 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26784(map_LT___$1,f__$1,ch__$1,meta26785){
return (new cljs.core.async.t_cljs$core$async26784(map_LT___$1,f__$1,ch__$1,meta26785));
});

}

return (new cljs.core.async.t_cljs$core$async26784(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26793 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26793 = (function (map_GT_,f,ch,meta26794){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta26794 = meta26794;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26795,meta26794__$1){
var self__ = this;
var _26795__$1 = this;
return (new cljs.core.async.t_cljs$core$async26793(self__.map_GT_,self__.f,self__.ch,meta26794__$1));
});

cljs.core.async.t_cljs$core$async26793.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26795){
var self__ = this;
var _26795__$1 = this;
return self__.meta26794;
});

cljs.core.async.t_cljs$core$async26793.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26793.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26793.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26793.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26793.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26793.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26793.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26794","meta26794",-1050717068,null)], null);
});

cljs.core.async.t_cljs$core$async26793.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26793.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26793";

cljs.core.async.t_cljs$core$async26793.cljs$lang$ctorPrWriter = (function (this__22280__auto__,writer__22281__auto__,opt__22282__auto__){
return cljs.core._write.call(null,writer__22281__auto__,"cljs.core.async/t_cljs$core$async26793");
});

cljs.core.async.__GT_t_cljs$core$async26793 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26793(map_GT___$1,f__$1,ch__$1,meta26794){
return (new cljs.core.async.t_cljs$core$async26793(map_GT___$1,f__$1,ch__$1,meta26794));
});

}

return (new cljs.core.async.t_cljs$core$async26793(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26799 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26799 = (function (filter_GT_,p,ch,meta26800){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta26800 = meta26800;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26801,meta26800__$1){
var self__ = this;
var _26801__$1 = this;
return (new cljs.core.async.t_cljs$core$async26799(self__.filter_GT_,self__.p,self__.ch,meta26800__$1));
});

cljs.core.async.t_cljs$core$async26799.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26801){
var self__ = this;
var _26801__$1 = this;
return self__.meta26800;
});

cljs.core.async.t_cljs$core$async26799.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26799.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26799.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26799.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26799.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26799.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26799.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26799.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26800","meta26800",-228972584,null)], null);
});

cljs.core.async.t_cljs$core$async26799.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26799.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26799";

cljs.core.async.t_cljs$core$async26799.cljs$lang$ctorPrWriter = (function (this__22280__auto__,writer__22281__auto__,opt__22282__auto__){
return cljs.core._write.call(null,writer__22281__auto__,"cljs.core.async/t_cljs$core$async26799");
});

cljs.core.async.__GT_t_cljs$core$async26799 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26799(filter_GT___$1,p__$1,ch__$1,meta26800){
return (new cljs.core.async.t_cljs$core$async26799(filter_GT___$1,p__$1,ch__$1,meta26800));
});

}

return (new cljs.core.async.t_cljs$core$async26799(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args26802 = [];
var len__22749__auto___26846 = arguments.length;
var i__22750__auto___26847 = (0);
while(true){
if((i__22750__auto___26847 < len__22749__auto___26846)){
args26802.push((arguments[i__22750__auto___26847]));

var G__26848 = (i__22750__auto___26847 + (1));
i__22750__auto___26847 = G__26848;
continue;
} else {
}
break;
}

var G__26804 = args26802.length;
switch (G__26804) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26802.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24577__auto___26850 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto___26850,out){
return (function (){
var f__24578__auto__ = (function (){var switch__24465__auto__ = ((function (c__24577__auto___26850,out){
return (function (state_26825){
var state_val_26826 = (state_26825[(1)]);
if((state_val_26826 === (7))){
var inst_26821 = (state_26825[(2)]);
var state_26825__$1 = state_26825;
var statearr_26827_26851 = state_26825__$1;
(statearr_26827_26851[(2)] = inst_26821);

(statearr_26827_26851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26826 === (1))){
var state_26825__$1 = state_26825;
var statearr_26828_26852 = state_26825__$1;
(statearr_26828_26852[(2)] = null);

(statearr_26828_26852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26826 === (4))){
var inst_26807 = (state_26825[(7)]);
var inst_26807__$1 = (state_26825[(2)]);
var inst_26808 = (inst_26807__$1 == null);
var state_26825__$1 = (function (){var statearr_26829 = state_26825;
(statearr_26829[(7)] = inst_26807__$1);

return statearr_26829;
})();
if(cljs.core.truth_(inst_26808)){
var statearr_26830_26853 = state_26825__$1;
(statearr_26830_26853[(1)] = (5));

} else {
var statearr_26831_26854 = state_26825__$1;
(statearr_26831_26854[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26826 === (6))){
var inst_26807 = (state_26825[(7)]);
var inst_26812 = p.call(null,inst_26807);
var state_26825__$1 = state_26825;
if(cljs.core.truth_(inst_26812)){
var statearr_26832_26855 = state_26825__$1;
(statearr_26832_26855[(1)] = (8));

} else {
var statearr_26833_26856 = state_26825__$1;
(statearr_26833_26856[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26826 === (3))){
var inst_26823 = (state_26825[(2)]);
var state_26825__$1 = state_26825;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26825__$1,inst_26823);
} else {
if((state_val_26826 === (2))){
var state_26825__$1 = state_26825;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26825__$1,(4),ch);
} else {
if((state_val_26826 === (11))){
var inst_26815 = (state_26825[(2)]);
var state_26825__$1 = state_26825;
var statearr_26834_26857 = state_26825__$1;
(statearr_26834_26857[(2)] = inst_26815);

(statearr_26834_26857[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26826 === (9))){
var state_26825__$1 = state_26825;
var statearr_26835_26858 = state_26825__$1;
(statearr_26835_26858[(2)] = null);

(statearr_26835_26858[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26826 === (5))){
var inst_26810 = cljs.core.async.close_BANG_.call(null,out);
var state_26825__$1 = state_26825;
var statearr_26836_26859 = state_26825__$1;
(statearr_26836_26859[(2)] = inst_26810);

(statearr_26836_26859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26826 === (10))){
var inst_26818 = (state_26825[(2)]);
var state_26825__$1 = (function (){var statearr_26837 = state_26825;
(statearr_26837[(8)] = inst_26818);

return statearr_26837;
})();
var statearr_26838_26860 = state_26825__$1;
(statearr_26838_26860[(2)] = null);

(statearr_26838_26860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26826 === (8))){
var inst_26807 = (state_26825[(7)]);
var state_26825__$1 = state_26825;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26825__$1,(11),out,inst_26807);
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
});})(c__24577__auto___26850,out))
;
return ((function (switch__24465__auto__,c__24577__auto___26850,out){
return (function() {
var cljs$core$async$state_machine__24466__auto__ = null;
var cljs$core$async$state_machine__24466__auto____0 = (function (){
var statearr_26842 = [null,null,null,null,null,null,null,null,null];
(statearr_26842[(0)] = cljs$core$async$state_machine__24466__auto__);

(statearr_26842[(1)] = (1));

return statearr_26842;
});
var cljs$core$async$state_machine__24466__auto____1 = (function (state_26825){
while(true){
var ret_value__24467__auto__ = (function (){try{while(true){
var result__24468__auto__ = switch__24465__auto__.call(null,state_26825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24468__auto__;
}
break;
}
}catch (e26843){if((e26843 instanceof Object)){
var ex__24469__auto__ = e26843;
var statearr_26844_26861 = state_26825;
(statearr_26844_26861[(5)] = ex__24469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26862 = state_26825;
state_26825 = G__26862;
continue;
} else {
return ret_value__24467__auto__;
}
break;
}
});
cljs$core$async$state_machine__24466__auto__ = function(state_26825){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24466__auto____1.call(this,state_26825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24466__auto____0;
cljs$core$async$state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24466__auto____1;
return cljs$core$async$state_machine__24466__auto__;
})()
;})(switch__24465__auto__,c__24577__auto___26850,out))
})();
var state__24579__auto__ = (function (){var statearr_26845 = f__24578__auto__.call(null);
(statearr_26845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24577__auto___26850);

return statearr_26845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto___26850,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args26863 = [];
var len__22749__auto___26866 = arguments.length;
var i__22750__auto___26867 = (0);
while(true){
if((i__22750__auto___26867 < len__22749__auto___26866)){
args26863.push((arguments[i__22750__auto___26867]));

var G__26868 = (i__22750__auto___26867 + (1));
i__22750__auto___26867 = G__26868;
continue;
} else {
}
break;
}

var G__26865 = args26863.length;
switch (G__26865) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26863.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__24577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto__){
return (function (){
var f__24578__auto__ = (function (){var switch__24465__auto__ = ((function (c__24577__auto__){
return (function (state_27035){
var state_val_27036 = (state_27035[(1)]);
if((state_val_27036 === (7))){
var inst_27031 = (state_27035[(2)]);
var state_27035__$1 = state_27035;
var statearr_27037_27078 = state_27035__$1;
(statearr_27037_27078[(2)] = inst_27031);

(statearr_27037_27078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27036 === (20))){
var inst_27001 = (state_27035[(7)]);
var inst_27012 = (state_27035[(2)]);
var inst_27013 = cljs.core.next.call(null,inst_27001);
var inst_26987 = inst_27013;
var inst_26988 = null;
var inst_26989 = (0);
var inst_26990 = (0);
var state_27035__$1 = (function (){var statearr_27038 = state_27035;
(statearr_27038[(8)] = inst_27012);

(statearr_27038[(9)] = inst_26987);

(statearr_27038[(10)] = inst_26990);

(statearr_27038[(11)] = inst_26989);

(statearr_27038[(12)] = inst_26988);

return statearr_27038;
})();
var statearr_27039_27079 = state_27035__$1;
(statearr_27039_27079[(2)] = null);

(statearr_27039_27079[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27036 === (1))){
var state_27035__$1 = state_27035;
var statearr_27040_27080 = state_27035__$1;
(statearr_27040_27080[(2)] = null);

(statearr_27040_27080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27036 === (4))){
var inst_26976 = (state_27035[(13)]);
var inst_26976__$1 = (state_27035[(2)]);
var inst_26977 = (inst_26976__$1 == null);
var state_27035__$1 = (function (){var statearr_27041 = state_27035;
(statearr_27041[(13)] = inst_26976__$1);

return statearr_27041;
})();
if(cljs.core.truth_(inst_26977)){
var statearr_27042_27081 = state_27035__$1;
(statearr_27042_27081[(1)] = (5));

} else {
var statearr_27043_27082 = state_27035__$1;
(statearr_27043_27082[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27036 === (15))){
var state_27035__$1 = state_27035;
var statearr_27047_27083 = state_27035__$1;
(statearr_27047_27083[(2)] = null);

(statearr_27047_27083[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27036 === (21))){
var state_27035__$1 = state_27035;
var statearr_27048_27084 = state_27035__$1;
(statearr_27048_27084[(2)] = null);

(statearr_27048_27084[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27036 === (13))){
var inst_26987 = (state_27035[(9)]);
var inst_26990 = (state_27035[(10)]);
var inst_26989 = (state_27035[(11)]);
var inst_26988 = (state_27035[(12)]);
var inst_26997 = (state_27035[(2)]);
var inst_26998 = (inst_26990 + (1));
var tmp27044 = inst_26987;
var tmp27045 = inst_26989;
var tmp27046 = inst_26988;
var inst_26987__$1 = tmp27044;
var inst_26988__$1 = tmp27046;
var inst_26989__$1 = tmp27045;
var inst_26990__$1 = inst_26998;
var state_27035__$1 = (function (){var statearr_27049 = state_27035;
(statearr_27049[(14)] = inst_26997);

(statearr_27049[(9)] = inst_26987__$1);

(statearr_27049[(10)] = inst_26990__$1);

(statearr_27049[(11)] = inst_26989__$1);

(statearr_27049[(12)] = inst_26988__$1);

return statearr_27049;
})();
var statearr_27050_27085 = state_27035__$1;
(statearr_27050_27085[(2)] = null);

(statearr_27050_27085[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27036 === (22))){
var state_27035__$1 = state_27035;
var statearr_27051_27086 = state_27035__$1;
(statearr_27051_27086[(2)] = null);

(statearr_27051_27086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27036 === (6))){
var inst_26976 = (state_27035[(13)]);
var inst_26985 = f.call(null,inst_26976);
var inst_26986 = cljs.core.seq.call(null,inst_26985);
var inst_26987 = inst_26986;
var inst_26988 = null;
var inst_26989 = (0);
var inst_26990 = (0);
var state_27035__$1 = (function (){var statearr_27052 = state_27035;
(statearr_27052[(9)] = inst_26987);

(statearr_27052[(10)] = inst_26990);

(statearr_27052[(11)] = inst_26989);

(statearr_27052[(12)] = inst_26988);

return statearr_27052;
})();
var statearr_27053_27087 = state_27035__$1;
(statearr_27053_27087[(2)] = null);

(statearr_27053_27087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27036 === (17))){
var inst_27001 = (state_27035[(7)]);
var inst_27005 = cljs.core.chunk_first.call(null,inst_27001);
var inst_27006 = cljs.core.chunk_rest.call(null,inst_27001);
var inst_27007 = cljs.core.count.call(null,inst_27005);
var inst_26987 = inst_27006;
var inst_26988 = inst_27005;
var inst_26989 = inst_27007;
var inst_26990 = (0);
var state_27035__$1 = (function (){var statearr_27054 = state_27035;
(statearr_27054[(9)] = inst_26987);

(statearr_27054[(10)] = inst_26990);

(statearr_27054[(11)] = inst_26989);

(statearr_27054[(12)] = inst_26988);

return statearr_27054;
})();
var statearr_27055_27088 = state_27035__$1;
(statearr_27055_27088[(2)] = null);

(statearr_27055_27088[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27036 === (3))){
var inst_27033 = (state_27035[(2)]);
var state_27035__$1 = state_27035;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27035__$1,inst_27033);
} else {
if((state_val_27036 === (12))){
var inst_27021 = (state_27035[(2)]);
var state_27035__$1 = state_27035;
var statearr_27056_27089 = state_27035__$1;
(statearr_27056_27089[(2)] = inst_27021);

(statearr_27056_27089[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27036 === (2))){
var state_27035__$1 = state_27035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27035__$1,(4),in$);
} else {
if((state_val_27036 === (23))){
var inst_27029 = (state_27035[(2)]);
var state_27035__$1 = state_27035;
var statearr_27057_27090 = state_27035__$1;
(statearr_27057_27090[(2)] = inst_27029);

(statearr_27057_27090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27036 === (19))){
var inst_27016 = (state_27035[(2)]);
var state_27035__$1 = state_27035;
var statearr_27058_27091 = state_27035__$1;
(statearr_27058_27091[(2)] = inst_27016);

(statearr_27058_27091[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27036 === (11))){
var inst_26987 = (state_27035[(9)]);
var inst_27001 = (state_27035[(7)]);
var inst_27001__$1 = cljs.core.seq.call(null,inst_26987);
var state_27035__$1 = (function (){var statearr_27059 = state_27035;
(statearr_27059[(7)] = inst_27001__$1);

return statearr_27059;
})();
if(inst_27001__$1){
var statearr_27060_27092 = state_27035__$1;
(statearr_27060_27092[(1)] = (14));

} else {
var statearr_27061_27093 = state_27035__$1;
(statearr_27061_27093[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27036 === (9))){
var inst_27023 = (state_27035[(2)]);
var inst_27024 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27035__$1 = (function (){var statearr_27062 = state_27035;
(statearr_27062[(15)] = inst_27023);

return statearr_27062;
})();
if(cljs.core.truth_(inst_27024)){
var statearr_27063_27094 = state_27035__$1;
(statearr_27063_27094[(1)] = (21));

} else {
var statearr_27064_27095 = state_27035__$1;
(statearr_27064_27095[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27036 === (5))){
var inst_26979 = cljs.core.async.close_BANG_.call(null,out);
var state_27035__$1 = state_27035;
var statearr_27065_27096 = state_27035__$1;
(statearr_27065_27096[(2)] = inst_26979);

(statearr_27065_27096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27036 === (14))){
var inst_27001 = (state_27035[(7)]);
var inst_27003 = cljs.core.chunked_seq_QMARK_.call(null,inst_27001);
var state_27035__$1 = state_27035;
if(inst_27003){
var statearr_27066_27097 = state_27035__$1;
(statearr_27066_27097[(1)] = (17));

} else {
var statearr_27067_27098 = state_27035__$1;
(statearr_27067_27098[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27036 === (16))){
var inst_27019 = (state_27035[(2)]);
var state_27035__$1 = state_27035;
var statearr_27068_27099 = state_27035__$1;
(statearr_27068_27099[(2)] = inst_27019);

(statearr_27068_27099[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27036 === (10))){
var inst_26990 = (state_27035[(10)]);
var inst_26988 = (state_27035[(12)]);
var inst_26995 = cljs.core._nth.call(null,inst_26988,inst_26990);
var state_27035__$1 = state_27035;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27035__$1,(13),out,inst_26995);
} else {
if((state_val_27036 === (18))){
var inst_27001 = (state_27035[(7)]);
var inst_27010 = cljs.core.first.call(null,inst_27001);
var state_27035__$1 = state_27035;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27035__$1,(20),out,inst_27010);
} else {
if((state_val_27036 === (8))){
var inst_26990 = (state_27035[(10)]);
var inst_26989 = (state_27035[(11)]);
var inst_26992 = (inst_26990 < inst_26989);
var inst_26993 = inst_26992;
var state_27035__$1 = state_27035;
if(cljs.core.truth_(inst_26993)){
var statearr_27069_27100 = state_27035__$1;
(statearr_27069_27100[(1)] = (10));

} else {
var statearr_27070_27101 = state_27035__$1;
(statearr_27070_27101[(1)] = (11));

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
});})(c__24577__auto__))
;
return ((function (switch__24465__auto__,c__24577__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24466__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24466__auto____0 = (function (){
var statearr_27074 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27074[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24466__auto__);

(statearr_27074[(1)] = (1));

return statearr_27074;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24466__auto____1 = (function (state_27035){
while(true){
var ret_value__24467__auto__ = (function (){try{while(true){
var result__24468__auto__ = switch__24465__auto__.call(null,state_27035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24468__auto__;
}
break;
}
}catch (e27075){if((e27075 instanceof Object)){
var ex__24469__auto__ = e27075;
var statearr_27076_27102 = state_27035;
(statearr_27076_27102[(5)] = ex__24469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27103 = state_27035;
state_27035 = G__27103;
continue;
} else {
return ret_value__24467__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24466__auto__ = function(state_27035){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24466__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24466__auto____1.call(this,state_27035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24466__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24466__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24466__auto__;
})()
;})(switch__24465__auto__,c__24577__auto__))
})();
var state__24579__auto__ = (function (){var statearr_27077 = f__24578__auto__.call(null);
(statearr_27077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24577__auto__);

return statearr_27077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto__))
);

return c__24577__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args27104 = [];
var len__22749__auto___27107 = arguments.length;
var i__22750__auto___27108 = (0);
while(true){
if((i__22750__auto___27108 < len__22749__auto___27107)){
args27104.push((arguments[i__22750__auto___27108]));

var G__27109 = (i__22750__auto___27108 + (1));
i__22750__auto___27108 = G__27109;
continue;
} else {
}
break;
}

var G__27106 = args27104.length;
switch (G__27106) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27104.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args27111 = [];
var len__22749__auto___27114 = arguments.length;
var i__22750__auto___27115 = (0);
while(true){
if((i__22750__auto___27115 < len__22749__auto___27114)){
args27111.push((arguments[i__22750__auto___27115]));

var G__27116 = (i__22750__auto___27115 + (1));
i__22750__auto___27115 = G__27116;
continue;
} else {
}
break;
}

var G__27113 = args27111.length;
switch (G__27113) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27111.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args27118 = [];
var len__22749__auto___27169 = arguments.length;
var i__22750__auto___27170 = (0);
while(true){
if((i__22750__auto___27170 < len__22749__auto___27169)){
args27118.push((arguments[i__22750__auto___27170]));

var G__27171 = (i__22750__auto___27170 + (1));
i__22750__auto___27170 = G__27171;
continue;
} else {
}
break;
}

var G__27120 = args27118.length;
switch (G__27120) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27118.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24577__auto___27173 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto___27173,out){
return (function (){
var f__24578__auto__ = (function (){var switch__24465__auto__ = ((function (c__24577__auto___27173,out){
return (function (state_27144){
var state_val_27145 = (state_27144[(1)]);
if((state_val_27145 === (7))){
var inst_27139 = (state_27144[(2)]);
var state_27144__$1 = state_27144;
var statearr_27146_27174 = state_27144__$1;
(statearr_27146_27174[(2)] = inst_27139);

(statearr_27146_27174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27145 === (1))){
var inst_27121 = null;
var state_27144__$1 = (function (){var statearr_27147 = state_27144;
(statearr_27147[(7)] = inst_27121);

return statearr_27147;
})();
var statearr_27148_27175 = state_27144__$1;
(statearr_27148_27175[(2)] = null);

(statearr_27148_27175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27145 === (4))){
var inst_27124 = (state_27144[(8)]);
var inst_27124__$1 = (state_27144[(2)]);
var inst_27125 = (inst_27124__$1 == null);
var inst_27126 = cljs.core.not.call(null,inst_27125);
var state_27144__$1 = (function (){var statearr_27149 = state_27144;
(statearr_27149[(8)] = inst_27124__$1);

return statearr_27149;
})();
if(inst_27126){
var statearr_27150_27176 = state_27144__$1;
(statearr_27150_27176[(1)] = (5));

} else {
var statearr_27151_27177 = state_27144__$1;
(statearr_27151_27177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27145 === (6))){
var state_27144__$1 = state_27144;
var statearr_27152_27178 = state_27144__$1;
(statearr_27152_27178[(2)] = null);

(statearr_27152_27178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27145 === (3))){
var inst_27141 = (state_27144[(2)]);
var inst_27142 = cljs.core.async.close_BANG_.call(null,out);
var state_27144__$1 = (function (){var statearr_27153 = state_27144;
(statearr_27153[(9)] = inst_27141);

return statearr_27153;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27144__$1,inst_27142);
} else {
if((state_val_27145 === (2))){
var state_27144__$1 = state_27144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27144__$1,(4),ch);
} else {
if((state_val_27145 === (11))){
var inst_27124 = (state_27144[(8)]);
var inst_27133 = (state_27144[(2)]);
var inst_27121 = inst_27124;
var state_27144__$1 = (function (){var statearr_27154 = state_27144;
(statearr_27154[(7)] = inst_27121);

(statearr_27154[(10)] = inst_27133);

return statearr_27154;
})();
var statearr_27155_27179 = state_27144__$1;
(statearr_27155_27179[(2)] = null);

(statearr_27155_27179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27145 === (9))){
var inst_27124 = (state_27144[(8)]);
var state_27144__$1 = state_27144;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27144__$1,(11),out,inst_27124);
} else {
if((state_val_27145 === (5))){
var inst_27124 = (state_27144[(8)]);
var inst_27121 = (state_27144[(7)]);
var inst_27128 = cljs.core._EQ_.call(null,inst_27124,inst_27121);
var state_27144__$1 = state_27144;
if(inst_27128){
var statearr_27157_27180 = state_27144__$1;
(statearr_27157_27180[(1)] = (8));

} else {
var statearr_27158_27181 = state_27144__$1;
(statearr_27158_27181[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27145 === (10))){
var inst_27136 = (state_27144[(2)]);
var state_27144__$1 = state_27144;
var statearr_27159_27182 = state_27144__$1;
(statearr_27159_27182[(2)] = inst_27136);

(statearr_27159_27182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27145 === (8))){
var inst_27121 = (state_27144[(7)]);
var tmp27156 = inst_27121;
var inst_27121__$1 = tmp27156;
var state_27144__$1 = (function (){var statearr_27160 = state_27144;
(statearr_27160[(7)] = inst_27121__$1);

return statearr_27160;
})();
var statearr_27161_27183 = state_27144__$1;
(statearr_27161_27183[(2)] = null);

(statearr_27161_27183[(1)] = (2));


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
});})(c__24577__auto___27173,out))
;
return ((function (switch__24465__auto__,c__24577__auto___27173,out){
return (function() {
var cljs$core$async$state_machine__24466__auto__ = null;
var cljs$core$async$state_machine__24466__auto____0 = (function (){
var statearr_27165 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27165[(0)] = cljs$core$async$state_machine__24466__auto__);

(statearr_27165[(1)] = (1));

return statearr_27165;
});
var cljs$core$async$state_machine__24466__auto____1 = (function (state_27144){
while(true){
var ret_value__24467__auto__ = (function (){try{while(true){
var result__24468__auto__ = switch__24465__auto__.call(null,state_27144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24468__auto__;
}
break;
}
}catch (e27166){if((e27166 instanceof Object)){
var ex__24469__auto__ = e27166;
var statearr_27167_27184 = state_27144;
(statearr_27167_27184[(5)] = ex__24469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27185 = state_27144;
state_27144 = G__27185;
continue;
} else {
return ret_value__24467__auto__;
}
break;
}
});
cljs$core$async$state_machine__24466__auto__ = function(state_27144){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24466__auto____1.call(this,state_27144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24466__auto____0;
cljs$core$async$state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24466__auto____1;
return cljs$core$async$state_machine__24466__auto__;
})()
;})(switch__24465__auto__,c__24577__auto___27173,out))
})();
var state__24579__auto__ = (function (){var statearr_27168 = f__24578__auto__.call(null);
(statearr_27168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24577__auto___27173);

return statearr_27168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto___27173,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args27186 = [];
var len__22749__auto___27256 = arguments.length;
var i__22750__auto___27257 = (0);
while(true){
if((i__22750__auto___27257 < len__22749__auto___27256)){
args27186.push((arguments[i__22750__auto___27257]));

var G__27258 = (i__22750__auto___27257 + (1));
i__22750__auto___27257 = G__27258;
continue;
} else {
}
break;
}

var G__27188 = args27186.length;
switch (G__27188) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27186.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24577__auto___27260 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto___27260,out){
return (function (){
var f__24578__auto__ = (function (){var switch__24465__auto__ = ((function (c__24577__auto___27260,out){
return (function (state_27226){
var state_val_27227 = (state_27226[(1)]);
if((state_val_27227 === (7))){
var inst_27222 = (state_27226[(2)]);
var state_27226__$1 = state_27226;
var statearr_27228_27261 = state_27226__$1;
(statearr_27228_27261[(2)] = inst_27222);

(statearr_27228_27261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (1))){
var inst_27189 = (new Array(n));
var inst_27190 = inst_27189;
var inst_27191 = (0);
var state_27226__$1 = (function (){var statearr_27229 = state_27226;
(statearr_27229[(7)] = inst_27191);

(statearr_27229[(8)] = inst_27190);

return statearr_27229;
})();
var statearr_27230_27262 = state_27226__$1;
(statearr_27230_27262[(2)] = null);

(statearr_27230_27262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (4))){
var inst_27194 = (state_27226[(9)]);
var inst_27194__$1 = (state_27226[(2)]);
var inst_27195 = (inst_27194__$1 == null);
var inst_27196 = cljs.core.not.call(null,inst_27195);
var state_27226__$1 = (function (){var statearr_27231 = state_27226;
(statearr_27231[(9)] = inst_27194__$1);

return statearr_27231;
})();
if(inst_27196){
var statearr_27232_27263 = state_27226__$1;
(statearr_27232_27263[(1)] = (5));

} else {
var statearr_27233_27264 = state_27226__$1;
(statearr_27233_27264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (15))){
var inst_27216 = (state_27226[(2)]);
var state_27226__$1 = state_27226;
var statearr_27234_27265 = state_27226__$1;
(statearr_27234_27265[(2)] = inst_27216);

(statearr_27234_27265[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (13))){
var state_27226__$1 = state_27226;
var statearr_27235_27266 = state_27226__$1;
(statearr_27235_27266[(2)] = null);

(statearr_27235_27266[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (6))){
var inst_27191 = (state_27226[(7)]);
var inst_27212 = (inst_27191 > (0));
var state_27226__$1 = state_27226;
if(cljs.core.truth_(inst_27212)){
var statearr_27236_27267 = state_27226__$1;
(statearr_27236_27267[(1)] = (12));

} else {
var statearr_27237_27268 = state_27226__$1;
(statearr_27237_27268[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (3))){
var inst_27224 = (state_27226[(2)]);
var state_27226__$1 = state_27226;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27226__$1,inst_27224);
} else {
if((state_val_27227 === (12))){
var inst_27190 = (state_27226[(8)]);
var inst_27214 = cljs.core.vec.call(null,inst_27190);
var state_27226__$1 = state_27226;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27226__$1,(15),out,inst_27214);
} else {
if((state_val_27227 === (2))){
var state_27226__$1 = state_27226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27226__$1,(4),ch);
} else {
if((state_val_27227 === (11))){
var inst_27206 = (state_27226[(2)]);
var inst_27207 = (new Array(n));
var inst_27190 = inst_27207;
var inst_27191 = (0);
var state_27226__$1 = (function (){var statearr_27238 = state_27226;
(statearr_27238[(7)] = inst_27191);

(statearr_27238[(8)] = inst_27190);

(statearr_27238[(10)] = inst_27206);

return statearr_27238;
})();
var statearr_27239_27269 = state_27226__$1;
(statearr_27239_27269[(2)] = null);

(statearr_27239_27269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (9))){
var inst_27190 = (state_27226[(8)]);
var inst_27204 = cljs.core.vec.call(null,inst_27190);
var state_27226__$1 = state_27226;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27226__$1,(11),out,inst_27204);
} else {
if((state_val_27227 === (5))){
var inst_27199 = (state_27226[(11)]);
var inst_27191 = (state_27226[(7)]);
var inst_27190 = (state_27226[(8)]);
var inst_27194 = (state_27226[(9)]);
var inst_27198 = (inst_27190[inst_27191] = inst_27194);
var inst_27199__$1 = (inst_27191 + (1));
var inst_27200 = (inst_27199__$1 < n);
var state_27226__$1 = (function (){var statearr_27240 = state_27226;
(statearr_27240[(11)] = inst_27199__$1);

(statearr_27240[(12)] = inst_27198);

return statearr_27240;
})();
if(cljs.core.truth_(inst_27200)){
var statearr_27241_27270 = state_27226__$1;
(statearr_27241_27270[(1)] = (8));

} else {
var statearr_27242_27271 = state_27226__$1;
(statearr_27242_27271[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (14))){
var inst_27219 = (state_27226[(2)]);
var inst_27220 = cljs.core.async.close_BANG_.call(null,out);
var state_27226__$1 = (function (){var statearr_27244 = state_27226;
(statearr_27244[(13)] = inst_27219);

return statearr_27244;
})();
var statearr_27245_27272 = state_27226__$1;
(statearr_27245_27272[(2)] = inst_27220);

(statearr_27245_27272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (10))){
var inst_27210 = (state_27226[(2)]);
var state_27226__$1 = state_27226;
var statearr_27246_27273 = state_27226__$1;
(statearr_27246_27273[(2)] = inst_27210);

(statearr_27246_27273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27227 === (8))){
var inst_27199 = (state_27226[(11)]);
var inst_27190 = (state_27226[(8)]);
var tmp27243 = inst_27190;
var inst_27190__$1 = tmp27243;
var inst_27191 = inst_27199;
var state_27226__$1 = (function (){var statearr_27247 = state_27226;
(statearr_27247[(7)] = inst_27191);

(statearr_27247[(8)] = inst_27190__$1);

return statearr_27247;
})();
var statearr_27248_27274 = state_27226__$1;
(statearr_27248_27274[(2)] = null);

(statearr_27248_27274[(1)] = (2));


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
});})(c__24577__auto___27260,out))
;
return ((function (switch__24465__auto__,c__24577__auto___27260,out){
return (function() {
var cljs$core$async$state_machine__24466__auto__ = null;
var cljs$core$async$state_machine__24466__auto____0 = (function (){
var statearr_27252 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27252[(0)] = cljs$core$async$state_machine__24466__auto__);

(statearr_27252[(1)] = (1));

return statearr_27252;
});
var cljs$core$async$state_machine__24466__auto____1 = (function (state_27226){
while(true){
var ret_value__24467__auto__ = (function (){try{while(true){
var result__24468__auto__ = switch__24465__auto__.call(null,state_27226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24468__auto__;
}
break;
}
}catch (e27253){if((e27253 instanceof Object)){
var ex__24469__auto__ = e27253;
var statearr_27254_27275 = state_27226;
(statearr_27254_27275[(5)] = ex__24469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27276 = state_27226;
state_27226 = G__27276;
continue;
} else {
return ret_value__24467__auto__;
}
break;
}
});
cljs$core$async$state_machine__24466__auto__ = function(state_27226){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24466__auto____1.call(this,state_27226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24466__auto____0;
cljs$core$async$state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24466__auto____1;
return cljs$core$async$state_machine__24466__auto__;
})()
;})(switch__24465__auto__,c__24577__auto___27260,out))
})();
var state__24579__auto__ = (function (){var statearr_27255 = f__24578__auto__.call(null);
(statearr_27255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24577__auto___27260);

return statearr_27255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto___27260,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args27277 = [];
var len__22749__auto___27351 = arguments.length;
var i__22750__auto___27352 = (0);
while(true){
if((i__22750__auto___27352 < len__22749__auto___27351)){
args27277.push((arguments[i__22750__auto___27352]));

var G__27353 = (i__22750__auto___27352 + (1));
i__22750__auto___27352 = G__27353;
continue;
} else {
}
break;
}

var G__27279 = args27277.length;
switch (G__27279) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27277.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24577__auto___27355 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto___27355,out){
return (function (){
var f__24578__auto__ = (function (){var switch__24465__auto__ = ((function (c__24577__auto___27355,out){
return (function (state_27321){
var state_val_27322 = (state_27321[(1)]);
if((state_val_27322 === (7))){
var inst_27317 = (state_27321[(2)]);
var state_27321__$1 = state_27321;
var statearr_27323_27356 = state_27321__$1;
(statearr_27323_27356[(2)] = inst_27317);

(statearr_27323_27356[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27322 === (1))){
var inst_27280 = [];
var inst_27281 = inst_27280;
var inst_27282 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27321__$1 = (function (){var statearr_27324 = state_27321;
(statearr_27324[(7)] = inst_27282);

(statearr_27324[(8)] = inst_27281);

return statearr_27324;
})();
var statearr_27325_27357 = state_27321__$1;
(statearr_27325_27357[(2)] = null);

(statearr_27325_27357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27322 === (4))){
var inst_27285 = (state_27321[(9)]);
var inst_27285__$1 = (state_27321[(2)]);
var inst_27286 = (inst_27285__$1 == null);
var inst_27287 = cljs.core.not.call(null,inst_27286);
var state_27321__$1 = (function (){var statearr_27326 = state_27321;
(statearr_27326[(9)] = inst_27285__$1);

return statearr_27326;
})();
if(inst_27287){
var statearr_27327_27358 = state_27321__$1;
(statearr_27327_27358[(1)] = (5));

} else {
var statearr_27328_27359 = state_27321__$1;
(statearr_27328_27359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27322 === (15))){
var inst_27311 = (state_27321[(2)]);
var state_27321__$1 = state_27321;
var statearr_27329_27360 = state_27321__$1;
(statearr_27329_27360[(2)] = inst_27311);

(statearr_27329_27360[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27322 === (13))){
var state_27321__$1 = state_27321;
var statearr_27330_27361 = state_27321__$1;
(statearr_27330_27361[(2)] = null);

(statearr_27330_27361[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27322 === (6))){
var inst_27281 = (state_27321[(8)]);
var inst_27306 = inst_27281.length;
var inst_27307 = (inst_27306 > (0));
var state_27321__$1 = state_27321;
if(cljs.core.truth_(inst_27307)){
var statearr_27331_27362 = state_27321__$1;
(statearr_27331_27362[(1)] = (12));

} else {
var statearr_27332_27363 = state_27321__$1;
(statearr_27332_27363[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27322 === (3))){
var inst_27319 = (state_27321[(2)]);
var state_27321__$1 = state_27321;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27321__$1,inst_27319);
} else {
if((state_val_27322 === (12))){
var inst_27281 = (state_27321[(8)]);
var inst_27309 = cljs.core.vec.call(null,inst_27281);
var state_27321__$1 = state_27321;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27321__$1,(15),out,inst_27309);
} else {
if((state_val_27322 === (2))){
var state_27321__$1 = state_27321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27321__$1,(4),ch);
} else {
if((state_val_27322 === (11))){
var inst_27285 = (state_27321[(9)]);
var inst_27289 = (state_27321[(10)]);
var inst_27299 = (state_27321[(2)]);
var inst_27300 = [];
var inst_27301 = inst_27300.push(inst_27285);
var inst_27281 = inst_27300;
var inst_27282 = inst_27289;
var state_27321__$1 = (function (){var statearr_27333 = state_27321;
(statearr_27333[(7)] = inst_27282);

(statearr_27333[(8)] = inst_27281);

(statearr_27333[(11)] = inst_27299);

(statearr_27333[(12)] = inst_27301);

return statearr_27333;
})();
var statearr_27334_27364 = state_27321__$1;
(statearr_27334_27364[(2)] = null);

(statearr_27334_27364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27322 === (9))){
var inst_27281 = (state_27321[(8)]);
var inst_27297 = cljs.core.vec.call(null,inst_27281);
var state_27321__$1 = state_27321;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27321__$1,(11),out,inst_27297);
} else {
if((state_val_27322 === (5))){
var inst_27285 = (state_27321[(9)]);
var inst_27282 = (state_27321[(7)]);
var inst_27289 = (state_27321[(10)]);
var inst_27289__$1 = f.call(null,inst_27285);
var inst_27290 = cljs.core._EQ_.call(null,inst_27289__$1,inst_27282);
var inst_27291 = cljs.core.keyword_identical_QMARK_.call(null,inst_27282,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27292 = (inst_27290) || (inst_27291);
var state_27321__$1 = (function (){var statearr_27335 = state_27321;
(statearr_27335[(10)] = inst_27289__$1);

return statearr_27335;
})();
if(cljs.core.truth_(inst_27292)){
var statearr_27336_27365 = state_27321__$1;
(statearr_27336_27365[(1)] = (8));

} else {
var statearr_27337_27366 = state_27321__$1;
(statearr_27337_27366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27322 === (14))){
var inst_27314 = (state_27321[(2)]);
var inst_27315 = cljs.core.async.close_BANG_.call(null,out);
var state_27321__$1 = (function (){var statearr_27339 = state_27321;
(statearr_27339[(13)] = inst_27314);

return statearr_27339;
})();
var statearr_27340_27367 = state_27321__$1;
(statearr_27340_27367[(2)] = inst_27315);

(statearr_27340_27367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27322 === (10))){
var inst_27304 = (state_27321[(2)]);
var state_27321__$1 = state_27321;
var statearr_27341_27368 = state_27321__$1;
(statearr_27341_27368[(2)] = inst_27304);

(statearr_27341_27368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27322 === (8))){
var inst_27285 = (state_27321[(9)]);
var inst_27281 = (state_27321[(8)]);
var inst_27289 = (state_27321[(10)]);
var inst_27294 = inst_27281.push(inst_27285);
var tmp27338 = inst_27281;
var inst_27281__$1 = tmp27338;
var inst_27282 = inst_27289;
var state_27321__$1 = (function (){var statearr_27342 = state_27321;
(statearr_27342[(7)] = inst_27282);

(statearr_27342[(8)] = inst_27281__$1);

(statearr_27342[(14)] = inst_27294);

return statearr_27342;
})();
var statearr_27343_27369 = state_27321__$1;
(statearr_27343_27369[(2)] = null);

(statearr_27343_27369[(1)] = (2));


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
});})(c__24577__auto___27355,out))
;
return ((function (switch__24465__auto__,c__24577__auto___27355,out){
return (function() {
var cljs$core$async$state_machine__24466__auto__ = null;
var cljs$core$async$state_machine__24466__auto____0 = (function (){
var statearr_27347 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27347[(0)] = cljs$core$async$state_machine__24466__auto__);

(statearr_27347[(1)] = (1));

return statearr_27347;
});
var cljs$core$async$state_machine__24466__auto____1 = (function (state_27321){
while(true){
var ret_value__24467__auto__ = (function (){try{while(true){
var result__24468__auto__ = switch__24465__auto__.call(null,state_27321);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24468__auto__;
}
break;
}
}catch (e27348){if((e27348 instanceof Object)){
var ex__24469__auto__ = e27348;
var statearr_27349_27370 = state_27321;
(statearr_27349_27370[(5)] = ex__24469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27371 = state_27321;
state_27321 = G__27371;
continue;
} else {
return ret_value__24467__auto__;
}
break;
}
});
cljs$core$async$state_machine__24466__auto__ = function(state_27321){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24466__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24466__auto____1.call(this,state_27321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24466__auto____0;
cljs$core$async$state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24466__auto____1;
return cljs$core$async$state_machine__24466__auto__;
})()
;})(switch__24465__auto__,c__24577__auto___27355,out))
})();
var state__24579__auto__ = (function (){var statearr_27350 = f__24578__auto__.call(null);
(statearr_27350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24577__auto___27355);

return statearr_27350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto___27355,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map