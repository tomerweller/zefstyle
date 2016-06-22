// Compiled by ClojureScript 1.9.36 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.4-SNAPSHOT";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args31645 = [];
var len__22749__auto___31648 = arguments.length;
var i__22750__auto___31649 = (0);
while(true){
if((i__22750__auto___31649 < len__22749__auto___31648)){
args31645.push((arguments[i__22750__auto___31649]));

var G__31650 = (i__22750__auto___31649 + (1));
i__22750__auto___31649 = G__31650;
continue;
} else {
}
break;
}

var G__31647 = args31645.length;
switch (G__31647) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31645.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__22756__auto__ = [];
var len__22749__auto___31653 = arguments.length;
var i__22750__auto___31654 = (0);
while(true){
if((i__22750__auto___31654 < len__22749__auto___31653)){
args__22756__auto__.push((arguments[i__22750__auto___31654]));

var G__31655 = (i__22750__auto___31654 + (1));
i__22750__auto___31654 = G__31655;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31652){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31652));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__22756__auto__ = [];
var len__22749__auto___31657 = arguments.length;
var i__22750__auto___31658 = (0);
while(true){
if((i__22750__auto___31658 < len__22749__auto___31657)){
args__22756__auto__.push((arguments[i__22750__auto___31658]));

var G__31659 = (i__22750__auto___31658 + (1));
i__22750__auto___31658 = G__31659;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31656){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31656));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__31660 = cljs.core._EQ_;
var expr__31661 = (function (){var or__21674__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e31664){if((e31664 instanceof Error)){
var e = e31664;
return false;
} else {
throw e31664;

}
}})();
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__31660.call(null,"true",expr__31661))){
return true;
} else {
if(cljs.core.truth_(pred__31660.call(null,"false",expr__31661))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__31661)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e31666){if((e31666 instanceof Error)){
var e = e31666;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e31666;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31667){
var map__31670 = p__31667;
var map__31670__$1 = ((((!((map__31670 == null)))?((((map__31670.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31670.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31670):map__31670);
var message = cljs.core.get.call(null,map__31670__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31670__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__21674__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__21662__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__21662__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__21662__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__24577__auto___31832 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto___31832,ch){
return (function (){
var f__24578__auto__ = (function (){var switch__24465__auto__ = ((function (c__24577__auto___31832,ch){
return (function (state_31801){
var state_val_31802 = (state_31801[(1)]);
if((state_val_31802 === (7))){
var inst_31797 = (state_31801[(2)]);
var state_31801__$1 = state_31801;
var statearr_31803_31833 = state_31801__$1;
(statearr_31803_31833[(2)] = inst_31797);

(statearr_31803_31833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31802 === (1))){
var state_31801__$1 = state_31801;
var statearr_31804_31834 = state_31801__$1;
(statearr_31804_31834[(2)] = null);

(statearr_31804_31834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31802 === (4))){
var inst_31754 = (state_31801[(7)]);
var inst_31754__$1 = (state_31801[(2)]);
var state_31801__$1 = (function (){var statearr_31805 = state_31801;
(statearr_31805[(7)] = inst_31754__$1);

return statearr_31805;
})();
if(cljs.core.truth_(inst_31754__$1)){
var statearr_31806_31835 = state_31801__$1;
(statearr_31806_31835[(1)] = (5));

} else {
var statearr_31807_31836 = state_31801__$1;
(statearr_31807_31836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31802 === (15))){
var inst_31761 = (state_31801[(8)]);
var inst_31776 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31761);
var inst_31777 = cljs.core.first.call(null,inst_31776);
var inst_31778 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31777);
var inst_31779 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_31778)].join('');
var inst_31780 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31779);
var state_31801__$1 = state_31801;
var statearr_31808_31837 = state_31801__$1;
(statearr_31808_31837[(2)] = inst_31780);

(statearr_31808_31837[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31802 === (13))){
var inst_31785 = (state_31801[(2)]);
var state_31801__$1 = state_31801;
var statearr_31809_31838 = state_31801__$1;
(statearr_31809_31838[(2)] = inst_31785);

(statearr_31809_31838[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31802 === (6))){
var state_31801__$1 = state_31801;
var statearr_31810_31839 = state_31801__$1;
(statearr_31810_31839[(2)] = null);

(statearr_31810_31839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31802 === (17))){
var inst_31783 = (state_31801[(2)]);
var state_31801__$1 = state_31801;
var statearr_31811_31840 = state_31801__$1;
(statearr_31811_31840[(2)] = inst_31783);

(statearr_31811_31840[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31802 === (3))){
var inst_31799 = (state_31801[(2)]);
var state_31801__$1 = state_31801;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31801__$1,inst_31799);
} else {
if((state_val_31802 === (12))){
var inst_31760 = (state_31801[(9)]);
var inst_31774 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31760,opts);
var state_31801__$1 = state_31801;
if(cljs.core.truth_(inst_31774)){
var statearr_31812_31841 = state_31801__$1;
(statearr_31812_31841[(1)] = (15));

} else {
var statearr_31813_31842 = state_31801__$1;
(statearr_31813_31842[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31802 === (2))){
var state_31801__$1 = state_31801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31801__$1,(4),ch);
} else {
if((state_val_31802 === (11))){
var inst_31761 = (state_31801[(8)]);
var inst_31766 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31767 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31761);
var inst_31768 = cljs.core.async.timeout.call(null,(1000));
var inst_31769 = [inst_31767,inst_31768];
var inst_31770 = (new cljs.core.PersistentVector(null,2,(5),inst_31766,inst_31769,null));
var state_31801__$1 = state_31801;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31801__$1,(14),inst_31770);
} else {
if((state_val_31802 === (9))){
var inst_31761 = (state_31801[(8)]);
var inst_31787 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31788 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31761);
var inst_31789 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31788);
var inst_31790 = [cljs.core.str("Not loading: "),cljs.core.str(inst_31789)].join('');
var inst_31791 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31790);
var state_31801__$1 = (function (){var statearr_31814 = state_31801;
(statearr_31814[(10)] = inst_31787);

return statearr_31814;
})();
var statearr_31815_31843 = state_31801__$1;
(statearr_31815_31843[(2)] = inst_31791);

(statearr_31815_31843[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31802 === (5))){
var inst_31754 = (state_31801[(7)]);
var inst_31756 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31757 = (new cljs.core.PersistentArrayMap(null,2,inst_31756,null));
var inst_31758 = (new cljs.core.PersistentHashSet(null,inst_31757,null));
var inst_31759 = figwheel.client.focus_msgs.call(null,inst_31758,inst_31754);
var inst_31760 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31759);
var inst_31761 = cljs.core.first.call(null,inst_31759);
var inst_31762 = figwheel.client.autoload_QMARK_.call(null);
var state_31801__$1 = (function (){var statearr_31816 = state_31801;
(statearr_31816[(8)] = inst_31761);

(statearr_31816[(9)] = inst_31760);

return statearr_31816;
})();
if(cljs.core.truth_(inst_31762)){
var statearr_31817_31844 = state_31801__$1;
(statearr_31817_31844[(1)] = (8));

} else {
var statearr_31818_31845 = state_31801__$1;
(statearr_31818_31845[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31802 === (14))){
var inst_31772 = (state_31801[(2)]);
var state_31801__$1 = state_31801;
var statearr_31819_31846 = state_31801__$1;
(statearr_31819_31846[(2)] = inst_31772);

(statearr_31819_31846[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31802 === (16))){
var state_31801__$1 = state_31801;
var statearr_31820_31847 = state_31801__$1;
(statearr_31820_31847[(2)] = null);

(statearr_31820_31847[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31802 === (10))){
var inst_31793 = (state_31801[(2)]);
var state_31801__$1 = (function (){var statearr_31821 = state_31801;
(statearr_31821[(11)] = inst_31793);

return statearr_31821;
})();
var statearr_31822_31848 = state_31801__$1;
(statearr_31822_31848[(2)] = null);

(statearr_31822_31848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31802 === (8))){
var inst_31760 = (state_31801[(9)]);
var inst_31764 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31760,opts);
var state_31801__$1 = state_31801;
if(cljs.core.truth_(inst_31764)){
var statearr_31823_31849 = state_31801__$1;
(statearr_31823_31849[(1)] = (11));

} else {
var statearr_31824_31850 = state_31801__$1;
(statearr_31824_31850[(1)] = (12));

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
});})(c__24577__auto___31832,ch))
;
return ((function (switch__24465__auto__,c__24577__auto___31832,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24466__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24466__auto____0 = (function (){
var statearr_31828 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31828[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24466__auto__);

(statearr_31828[(1)] = (1));

return statearr_31828;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24466__auto____1 = (function (state_31801){
while(true){
var ret_value__24467__auto__ = (function (){try{while(true){
var result__24468__auto__ = switch__24465__auto__.call(null,state_31801);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24468__auto__;
}
break;
}
}catch (e31829){if((e31829 instanceof Object)){
var ex__24469__auto__ = e31829;
var statearr_31830_31851 = state_31801;
(statearr_31830_31851[(5)] = ex__24469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31852 = state_31801;
state_31801 = G__31852;
continue;
} else {
return ret_value__24467__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24466__auto__ = function(state_31801){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24466__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24466__auto____1.call(this,state_31801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24466__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24466__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24466__auto__;
})()
;})(switch__24465__auto__,c__24577__auto___31832,ch))
})();
var state__24579__auto__ = (function (){var statearr_31831 = f__24578__auto__.call(null);
(statearr_31831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24577__auto___31832);

return statearr_31831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto___31832,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31853_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31853_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
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
}
});
var base_path_31856 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31856){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e31855){if((e31855 instanceof Error)){
var e = e31855;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31856], null));
} else {
var e = e31855;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_31856))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31857){
var map__31866 = p__31857;
var map__31866__$1 = ((((!((map__31866 == null)))?((((map__31866.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31866.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31866):map__31866);
var opts = map__31866__$1;
var build_id = cljs.core.get.call(null,map__31866__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31866,map__31866__$1,opts,build_id){
return (function (p__31868){
var vec__31869 = p__31868;
var seq__31870 = cljs.core.seq.call(null,vec__31869);
var first__31871 = cljs.core.first.call(null,seq__31870);
var seq__31870__$1 = cljs.core.next.call(null,seq__31870);
var map__31872 = first__31871;
var map__31872__$1 = ((((!((map__31872 == null)))?((((map__31872.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31872.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31872):map__31872);
var msg = map__31872__$1;
var msg_name = cljs.core.get.call(null,map__31872__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31870__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31869,seq__31870,first__31871,seq__31870__$1,map__31872,map__31872__$1,msg,msg_name,_,map__31866,map__31866__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31869,seq__31870,first__31871,seq__31870__$1,map__31872,map__31872__$1,msg,msg_name,_,map__31866,map__31866__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31866,map__31866__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31880){
var vec__31881 = p__31880;
var seq__31882 = cljs.core.seq.call(null,vec__31881);
var first__31883 = cljs.core.first.call(null,seq__31882);
var seq__31882__$1 = cljs.core.next.call(null,seq__31882);
var map__31884 = first__31883;
var map__31884__$1 = ((((!((map__31884 == null)))?((((map__31884.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31884.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31884):map__31884);
var msg = map__31884__$1;
var msg_name = cljs.core.get.call(null,map__31884__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31882__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31886){
var map__31898 = p__31886;
var map__31898__$1 = ((((!((map__31898 == null)))?((((map__31898.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31898.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31898):map__31898);
var on_compile_warning = cljs.core.get.call(null,map__31898__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31898__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31898,map__31898__$1,on_compile_warning,on_compile_fail){
return (function (p__31900){
var vec__31901 = p__31900;
var seq__31902 = cljs.core.seq.call(null,vec__31901);
var first__31903 = cljs.core.first.call(null,seq__31902);
var seq__31902__$1 = cljs.core.next.call(null,seq__31902);
var map__31904 = first__31903;
var map__31904__$1 = ((((!((map__31904 == null)))?((((map__31904.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31904.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31904):map__31904);
var msg = map__31904__$1;
var msg_name = cljs.core.get.call(null,map__31904__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31902__$1;
var pred__31906 = cljs.core._EQ_;
var expr__31907 = msg_name;
if(cljs.core.truth_(pred__31906.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31907))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31906.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31907))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31898,map__31898__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24578__auto__ = (function (){var switch__24465__auto__ = ((function (c__24577__auto__,msg_hist,msg_names,msg){
return (function (state_32115){
var state_val_32116 = (state_32115[(1)]);
if((state_val_32116 === (7))){
var inst_32043 = (state_32115[(2)]);
var state_32115__$1 = state_32115;
if(cljs.core.truth_(inst_32043)){
var statearr_32117_32163 = state_32115__$1;
(statearr_32117_32163[(1)] = (8));

} else {
var statearr_32118_32164 = state_32115__$1;
(statearr_32118_32164[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32116 === (20))){
var inst_32109 = (state_32115[(2)]);
var state_32115__$1 = state_32115;
var statearr_32119_32165 = state_32115__$1;
(statearr_32119_32165[(2)] = inst_32109);

(statearr_32119_32165[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32116 === (27))){
var inst_32105 = (state_32115[(2)]);
var state_32115__$1 = state_32115;
var statearr_32120_32166 = state_32115__$1;
(statearr_32120_32166[(2)] = inst_32105);

(statearr_32120_32166[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32116 === (1))){
var inst_32036 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_32115__$1 = state_32115;
if(cljs.core.truth_(inst_32036)){
var statearr_32121_32167 = state_32115__$1;
(statearr_32121_32167[(1)] = (2));

} else {
var statearr_32122_32168 = state_32115__$1;
(statearr_32122_32168[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32116 === (24))){
var inst_32107 = (state_32115[(2)]);
var state_32115__$1 = state_32115;
var statearr_32123_32169 = state_32115__$1;
(statearr_32123_32169[(2)] = inst_32107);

(statearr_32123_32169[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32116 === (4))){
var inst_32113 = (state_32115[(2)]);
var state_32115__$1 = state_32115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32115__$1,inst_32113);
} else {
if((state_val_32116 === (15))){
var inst_32111 = (state_32115[(2)]);
var state_32115__$1 = state_32115;
var statearr_32124_32170 = state_32115__$1;
(statearr_32124_32170[(2)] = inst_32111);

(statearr_32124_32170[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32116 === (21))){
var inst_32070 = (state_32115[(2)]);
var state_32115__$1 = state_32115;
var statearr_32125_32171 = state_32115__$1;
(statearr_32125_32171[(2)] = inst_32070);

(statearr_32125_32171[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32116 === (31))){
var inst_32094 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_32115__$1 = state_32115;
if(cljs.core.truth_(inst_32094)){
var statearr_32126_32172 = state_32115__$1;
(statearr_32126_32172[(1)] = (34));

} else {
var statearr_32127_32173 = state_32115__$1;
(statearr_32127_32173[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32116 === (32))){
var inst_32103 = (state_32115[(2)]);
var state_32115__$1 = state_32115;
var statearr_32128_32174 = state_32115__$1;
(statearr_32128_32174[(2)] = inst_32103);

(statearr_32128_32174[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32116 === (33))){
var inst_32092 = (state_32115[(2)]);
var state_32115__$1 = state_32115;
var statearr_32129_32175 = state_32115__$1;
(statearr_32129_32175[(2)] = inst_32092);

(statearr_32129_32175[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32116 === (13))){
var inst_32057 = figwheel.client.heads_up.clear.call(null);
var state_32115__$1 = state_32115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32115__$1,(16),inst_32057);
} else {
if((state_val_32116 === (22))){
var inst_32074 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32075 = figwheel.client.heads_up.append_warning_message.call(null,inst_32074);
var state_32115__$1 = state_32115;
var statearr_32130_32176 = state_32115__$1;
(statearr_32130_32176[(2)] = inst_32075);

(statearr_32130_32176[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32116 === (36))){
var inst_32101 = (state_32115[(2)]);
var state_32115__$1 = state_32115;
var statearr_32131_32177 = state_32115__$1;
(statearr_32131_32177[(2)] = inst_32101);

(statearr_32131_32177[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32116 === (29))){
var inst_32085 = (state_32115[(2)]);
var state_32115__$1 = state_32115;
var statearr_32132_32178 = state_32115__$1;
(statearr_32132_32178[(2)] = inst_32085);

(statearr_32132_32178[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32116 === (6))){
var inst_32038 = (state_32115[(7)]);
var state_32115__$1 = state_32115;
var statearr_32133_32179 = state_32115__$1;
(statearr_32133_32179[(2)] = inst_32038);

(statearr_32133_32179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32116 === (28))){
var inst_32081 = (state_32115[(2)]);
var inst_32082 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32083 = figwheel.client.heads_up.display_warning.call(null,inst_32082);
var state_32115__$1 = (function (){var statearr_32134 = state_32115;
(statearr_32134[(8)] = inst_32081);

return statearr_32134;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32115__$1,(29),inst_32083);
} else {
if((state_val_32116 === (25))){
var inst_32079 = figwheel.client.heads_up.clear.call(null);
var state_32115__$1 = state_32115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32115__$1,(28),inst_32079);
} else {
if((state_val_32116 === (34))){
var inst_32096 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32115__$1 = state_32115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32115__$1,(37),inst_32096);
} else {
if((state_val_32116 === (17))){
var inst_32063 = (state_32115[(2)]);
var state_32115__$1 = state_32115;
var statearr_32135_32180 = state_32115__$1;
(statearr_32135_32180[(2)] = inst_32063);

(statearr_32135_32180[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32116 === (3))){
var inst_32055 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_32115__$1 = state_32115;
if(cljs.core.truth_(inst_32055)){
var statearr_32136_32181 = state_32115__$1;
(statearr_32136_32181[(1)] = (13));

} else {
var statearr_32137_32182 = state_32115__$1;
(statearr_32137_32182[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32116 === (12))){
var inst_32051 = (state_32115[(2)]);
var state_32115__$1 = state_32115;
var statearr_32138_32183 = state_32115__$1;
(statearr_32138_32183[(2)] = inst_32051);

(statearr_32138_32183[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32116 === (2))){
var inst_32038 = (state_32115[(7)]);
var inst_32038__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_32115__$1 = (function (){var statearr_32139 = state_32115;
(statearr_32139[(7)] = inst_32038__$1);

return statearr_32139;
})();
if(cljs.core.truth_(inst_32038__$1)){
var statearr_32140_32184 = state_32115__$1;
(statearr_32140_32184[(1)] = (5));

} else {
var statearr_32141_32185 = state_32115__$1;
(statearr_32141_32185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32116 === (23))){
var inst_32077 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_32115__$1 = state_32115;
if(cljs.core.truth_(inst_32077)){
var statearr_32142_32186 = state_32115__$1;
(statearr_32142_32186[(1)] = (25));

} else {
var statearr_32143_32187 = state_32115__$1;
(statearr_32143_32187[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32116 === (35))){
var state_32115__$1 = state_32115;
var statearr_32144_32188 = state_32115__$1;
(statearr_32144_32188[(2)] = null);

(statearr_32144_32188[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32116 === (19))){
var inst_32072 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_32115__$1 = state_32115;
if(cljs.core.truth_(inst_32072)){
var statearr_32145_32189 = state_32115__$1;
(statearr_32145_32189[(1)] = (22));

} else {
var statearr_32146_32190 = state_32115__$1;
(statearr_32146_32190[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32116 === (11))){
var inst_32047 = (state_32115[(2)]);
var state_32115__$1 = state_32115;
var statearr_32147_32191 = state_32115__$1;
(statearr_32147_32191[(2)] = inst_32047);

(statearr_32147_32191[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32116 === (9))){
var inst_32049 = figwheel.client.heads_up.clear.call(null);
var state_32115__$1 = state_32115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32115__$1,(12),inst_32049);
} else {
if((state_val_32116 === (5))){
var inst_32040 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_32115__$1 = state_32115;
var statearr_32148_32192 = state_32115__$1;
(statearr_32148_32192[(2)] = inst_32040);

(statearr_32148_32192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32116 === (14))){
var inst_32065 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_32115__$1 = state_32115;
if(cljs.core.truth_(inst_32065)){
var statearr_32149_32193 = state_32115__$1;
(statearr_32149_32193[(1)] = (18));

} else {
var statearr_32150_32194 = state_32115__$1;
(statearr_32150_32194[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32116 === (26))){
var inst_32087 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_32115__$1 = state_32115;
if(cljs.core.truth_(inst_32087)){
var statearr_32151_32195 = state_32115__$1;
(statearr_32151_32195[(1)] = (30));

} else {
var statearr_32152_32196 = state_32115__$1;
(statearr_32152_32196[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32116 === (16))){
var inst_32059 = (state_32115[(2)]);
var inst_32060 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32061 = figwheel.client.heads_up.display_exception.call(null,inst_32060);
var state_32115__$1 = (function (){var statearr_32153 = state_32115;
(statearr_32153[(9)] = inst_32059);

return statearr_32153;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32115__$1,(17),inst_32061);
} else {
if((state_val_32116 === (30))){
var inst_32089 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32090 = figwheel.client.heads_up.display_warning.call(null,inst_32089);
var state_32115__$1 = state_32115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32115__$1,(33),inst_32090);
} else {
if((state_val_32116 === (10))){
var inst_32053 = (state_32115[(2)]);
var state_32115__$1 = state_32115;
var statearr_32154_32197 = state_32115__$1;
(statearr_32154_32197[(2)] = inst_32053);

(statearr_32154_32197[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32116 === (18))){
var inst_32067 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32068 = figwheel.client.heads_up.display_exception.call(null,inst_32067);
var state_32115__$1 = state_32115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32115__$1,(21),inst_32068);
} else {
if((state_val_32116 === (37))){
var inst_32098 = (state_32115[(2)]);
var state_32115__$1 = state_32115;
var statearr_32155_32198 = state_32115__$1;
(statearr_32155_32198[(2)] = inst_32098);

(statearr_32155_32198[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32116 === (8))){
var inst_32045 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32115__$1 = state_32115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32115__$1,(11),inst_32045);
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
});})(c__24577__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24465__auto__,c__24577__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24466__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24466__auto____0 = (function (){
var statearr_32159 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32159[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24466__auto__);

(statearr_32159[(1)] = (1));

return statearr_32159;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24466__auto____1 = (function (state_32115){
while(true){
var ret_value__24467__auto__ = (function (){try{while(true){
var result__24468__auto__ = switch__24465__auto__.call(null,state_32115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24468__auto__;
}
break;
}
}catch (e32160){if((e32160 instanceof Object)){
var ex__24469__auto__ = e32160;
var statearr_32161_32199 = state_32115;
(statearr_32161_32199[(5)] = ex__24469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32200 = state_32115;
state_32115 = G__32200;
continue;
} else {
return ret_value__24467__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24466__auto__ = function(state_32115){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24466__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24466__auto____1.call(this,state_32115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24466__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24466__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24466__auto__;
})()
;})(switch__24465__auto__,c__24577__auto__,msg_hist,msg_names,msg))
})();
var state__24579__auto__ = (function (){var statearr_32162 = f__24578__auto__.call(null);
(statearr_32162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24577__auto__);

return statearr_32162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto__,msg_hist,msg_names,msg))
);

return c__24577__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24577__auto___32263 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto___32263,ch){
return (function (){
var f__24578__auto__ = (function (){var switch__24465__auto__ = ((function (c__24577__auto___32263,ch){
return (function (state_32246){
var state_val_32247 = (state_32246[(1)]);
if((state_val_32247 === (1))){
var state_32246__$1 = state_32246;
var statearr_32248_32264 = state_32246__$1;
(statearr_32248_32264[(2)] = null);

(statearr_32248_32264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (2))){
var state_32246__$1 = state_32246;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32246__$1,(4),ch);
} else {
if((state_val_32247 === (3))){
var inst_32244 = (state_32246[(2)]);
var state_32246__$1 = state_32246;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32246__$1,inst_32244);
} else {
if((state_val_32247 === (4))){
var inst_32234 = (state_32246[(7)]);
var inst_32234__$1 = (state_32246[(2)]);
var state_32246__$1 = (function (){var statearr_32249 = state_32246;
(statearr_32249[(7)] = inst_32234__$1);

return statearr_32249;
})();
if(cljs.core.truth_(inst_32234__$1)){
var statearr_32250_32265 = state_32246__$1;
(statearr_32250_32265[(1)] = (5));

} else {
var statearr_32251_32266 = state_32246__$1;
(statearr_32251_32266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (5))){
var inst_32234 = (state_32246[(7)]);
var inst_32236 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_32234);
var state_32246__$1 = state_32246;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32246__$1,(8),inst_32236);
} else {
if((state_val_32247 === (6))){
var state_32246__$1 = state_32246;
var statearr_32252_32267 = state_32246__$1;
(statearr_32252_32267[(2)] = null);

(statearr_32252_32267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (7))){
var inst_32242 = (state_32246[(2)]);
var state_32246__$1 = state_32246;
var statearr_32253_32268 = state_32246__$1;
(statearr_32253_32268[(2)] = inst_32242);

(statearr_32253_32268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (8))){
var inst_32238 = (state_32246[(2)]);
var state_32246__$1 = (function (){var statearr_32254 = state_32246;
(statearr_32254[(8)] = inst_32238);

return statearr_32254;
})();
var statearr_32255_32269 = state_32246__$1;
(statearr_32255_32269[(2)] = null);

(statearr_32255_32269[(1)] = (2));


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
});})(c__24577__auto___32263,ch))
;
return ((function (switch__24465__auto__,c__24577__auto___32263,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24466__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24466__auto____0 = (function (){
var statearr_32259 = [null,null,null,null,null,null,null,null,null];
(statearr_32259[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24466__auto__);

(statearr_32259[(1)] = (1));

return statearr_32259;
});
var figwheel$client$heads_up_plugin_$_state_machine__24466__auto____1 = (function (state_32246){
while(true){
var ret_value__24467__auto__ = (function (){try{while(true){
var result__24468__auto__ = switch__24465__auto__.call(null,state_32246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24468__auto__;
}
break;
}
}catch (e32260){if((e32260 instanceof Object)){
var ex__24469__auto__ = e32260;
var statearr_32261_32270 = state_32246;
(statearr_32261_32270[(5)] = ex__24469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32271 = state_32246;
state_32246 = G__32271;
continue;
} else {
return ret_value__24467__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24466__auto__ = function(state_32246){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24466__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24466__auto____1.call(this,state_32246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24466__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24466__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24466__auto__;
})()
;})(switch__24465__auto__,c__24577__auto___32263,ch))
})();
var state__24579__auto__ = (function (){var statearr_32262 = f__24578__auto__.call(null);
(statearr_32262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24577__auto___32263);

return statearr_32262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto___32263,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto__){
return (function (){
var f__24578__auto__ = (function (){var switch__24465__auto__ = ((function (c__24577__auto__){
return (function (state_32292){
var state_val_32293 = (state_32292[(1)]);
if((state_val_32293 === (1))){
var inst_32287 = cljs.core.async.timeout.call(null,(3000));
var state_32292__$1 = state_32292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32292__$1,(2),inst_32287);
} else {
if((state_val_32293 === (2))){
var inst_32289 = (state_32292[(2)]);
var inst_32290 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_32292__$1 = (function (){var statearr_32294 = state_32292;
(statearr_32294[(7)] = inst_32289);

return statearr_32294;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32292__$1,inst_32290);
} else {
return null;
}
}
});})(c__24577__auto__))
;
return ((function (switch__24465__auto__,c__24577__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24466__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24466__auto____0 = (function (){
var statearr_32298 = [null,null,null,null,null,null,null,null];
(statearr_32298[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24466__auto__);

(statearr_32298[(1)] = (1));

return statearr_32298;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24466__auto____1 = (function (state_32292){
while(true){
var ret_value__24467__auto__ = (function (){try{while(true){
var result__24468__auto__ = switch__24465__auto__.call(null,state_32292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24468__auto__;
}
break;
}
}catch (e32299){if((e32299 instanceof Object)){
var ex__24469__auto__ = e32299;
var statearr_32300_32302 = state_32292;
(statearr_32300_32302[(5)] = ex__24469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32303 = state_32292;
state_32292 = G__32303;
continue;
} else {
return ret_value__24467__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24466__auto__ = function(state_32292){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24466__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24466__auto____1.call(this,state_32292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24466__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24466__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24466__auto__;
})()
;})(switch__24465__auto__,c__24577__auto__))
})();
var state__24579__auto__ = (function (){var statearr_32301 = f__24578__auto__.call(null);
(statearr_32301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24577__auto__);

return statearr_32301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto__))
);

return c__24577__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__24578__auto__ = (function (){var switch__24465__auto__ = ((function (c__24577__auto__,figwheel_version,temp__4657__auto__){
return (function (state_32326){
var state_val_32327 = (state_32326[(1)]);
if((state_val_32327 === (1))){
var inst_32320 = cljs.core.async.timeout.call(null,(2000));
var state_32326__$1 = state_32326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32326__$1,(2),inst_32320);
} else {
if((state_val_32327 === (2))){
var inst_32322 = (state_32326[(2)]);
var inst_32323 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_32324 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_32323);
var state_32326__$1 = (function (){var statearr_32328 = state_32326;
(statearr_32328[(7)] = inst_32322);

return statearr_32328;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32326__$1,inst_32324);
} else {
return null;
}
}
});})(c__24577__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__24465__auto__,c__24577__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24466__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24466__auto____0 = (function (){
var statearr_32332 = [null,null,null,null,null,null,null,null];
(statearr_32332[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24466__auto__);

(statearr_32332[(1)] = (1));

return statearr_32332;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24466__auto____1 = (function (state_32326){
while(true){
var ret_value__24467__auto__ = (function (){try{while(true){
var result__24468__auto__ = switch__24465__auto__.call(null,state_32326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24468__auto__;
}
break;
}
}catch (e32333){if((e32333 instanceof Object)){
var ex__24469__auto__ = e32333;
var statearr_32334_32336 = state_32326;
(statearr_32334_32336[(5)] = ex__24469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32337 = state_32326;
state_32326 = G__32337;
continue;
} else {
return ret_value__24467__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24466__auto__ = function(state_32326){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24466__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24466__auto____1.call(this,state_32326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24466__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24466__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24466__auto__;
})()
;})(switch__24465__auto__,c__24577__auto__,figwheel_version,temp__4657__auto__))
})();
var state__24579__auto__ = (function (){var statearr_32335 = f__24578__auto__.call(null);
(statearr_32335[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24577__auto__);

return statearr_32335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto__,figwheel_version,temp__4657__auto__))
);

return c__24577__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__32338){
var map__32342 = p__32338;
var map__32342__$1 = ((((!((map__32342 == null)))?((((map__32342.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32342.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32342):map__32342);
var file = cljs.core.get.call(null,map__32342__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__32342__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__32342__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__32344 = "";
var G__32344__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__32344),cljs.core.str("file "),cljs.core.str(file)].join(''):G__32344);
var G__32344__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__32344__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__32344__$1);
if(cljs.core.truth_((function (){var and__21662__auto__ = line;
if(cljs.core.truth_(and__21662__auto__)){
return column;
} else {
return and__21662__auto__;
}
})())){
return [cljs.core.str(G__32344__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__32344__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__32345){
var map__32352 = p__32345;
var map__32352__$1 = ((((!((map__32352 == null)))?((((map__32352.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32352.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32352):map__32352);
var ed = map__32352__$1;
var formatted_exception = cljs.core.get.call(null,map__32352__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__32352__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__32352__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__32354_32358 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__32355_32359 = null;
var count__32356_32360 = (0);
var i__32357_32361 = (0);
while(true){
if((i__32357_32361 < count__32356_32360)){
var msg_32362 = cljs.core._nth.call(null,chunk__32355_32359,i__32357_32361);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32362);

var G__32363 = seq__32354_32358;
var G__32364 = chunk__32355_32359;
var G__32365 = count__32356_32360;
var G__32366 = (i__32357_32361 + (1));
seq__32354_32358 = G__32363;
chunk__32355_32359 = G__32364;
count__32356_32360 = G__32365;
i__32357_32361 = G__32366;
continue;
} else {
var temp__4657__auto___32367 = cljs.core.seq.call(null,seq__32354_32358);
if(temp__4657__auto___32367){
var seq__32354_32368__$1 = temp__4657__auto___32367;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32354_32368__$1)){
var c__22485__auto___32369 = cljs.core.chunk_first.call(null,seq__32354_32368__$1);
var G__32370 = cljs.core.chunk_rest.call(null,seq__32354_32368__$1);
var G__32371 = c__22485__auto___32369;
var G__32372 = cljs.core.count.call(null,c__22485__auto___32369);
var G__32373 = (0);
seq__32354_32358 = G__32370;
chunk__32355_32359 = G__32371;
count__32356_32360 = G__32372;
i__32357_32361 = G__32373;
continue;
} else {
var msg_32374 = cljs.core.first.call(null,seq__32354_32368__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32374);

var G__32375 = cljs.core.next.call(null,seq__32354_32368__$1);
var G__32376 = null;
var G__32377 = (0);
var G__32378 = (0);
seq__32354_32358 = G__32375;
chunk__32355_32359 = G__32376;
count__32356_32360 = G__32377;
i__32357_32361 = G__32378;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__32379){
var map__32382 = p__32379;
var map__32382__$1 = ((((!((map__32382 == null)))?((((map__32382.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32382.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32382):map__32382);
var w = map__32382__$1;
var message = cljs.core.get.call(null,map__32382__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"public/js/out/figwheel/client.cljs",33,1,323,323,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"public/js/out/figwheel/client.cljs",30,1,315,315,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__21662__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__21662__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__21662__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__32394 = cljs.core.seq.call(null,plugins);
var chunk__32395 = null;
var count__32396 = (0);
var i__32397 = (0);
while(true){
if((i__32397 < count__32396)){
var vec__32398 = cljs.core._nth.call(null,chunk__32395,i__32397);
var k = cljs.core.nth.call(null,vec__32398,(0),null);
var plugin = cljs.core.nth.call(null,vec__32398,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32404 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32394,chunk__32395,count__32396,i__32397,pl_32404,vec__32398,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_32404.call(null,msg_hist);
});})(seq__32394,chunk__32395,count__32396,i__32397,pl_32404,vec__32398,k,plugin))
);
} else {
}

var G__32405 = seq__32394;
var G__32406 = chunk__32395;
var G__32407 = count__32396;
var G__32408 = (i__32397 + (1));
seq__32394 = G__32405;
chunk__32395 = G__32406;
count__32396 = G__32407;
i__32397 = G__32408;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32394);
if(temp__4657__auto__){
var seq__32394__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32394__$1)){
var c__22485__auto__ = cljs.core.chunk_first.call(null,seq__32394__$1);
var G__32409 = cljs.core.chunk_rest.call(null,seq__32394__$1);
var G__32410 = c__22485__auto__;
var G__32411 = cljs.core.count.call(null,c__22485__auto__);
var G__32412 = (0);
seq__32394 = G__32409;
chunk__32395 = G__32410;
count__32396 = G__32411;
i__32397 = G__32412;
continue;
} else {
var vec__32401 = cljs.core.first.call(null,seq__32394__$1);
var k = cljs.core.nth.call(null,vec__32401,(0),null);
var plugin = cljs.core.nth.call(null,vec__32401,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32413 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32394,chunk__32395,count__32396,i__32397,pl_32413,vec__32401,k,plugin,seq__32394__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_32413.call(null,msg_hist);
});})(seq__32394,chunk__32395,count__32396,i__32397,pl_32413,vec__32401,k,plugin,seq__32394__$1,temp__4657__auto__))
);
} else {
}

var G__32414 = cljs.core.next.call(null,seq__32394__$1);
var G__32415 = null;
var G__32416 = (0);
var G__32417 = (0);
seq__32394 = G__32414;
chunk__32395 = G__32415;
count__32396 = G__32416;
i__32397 = G__32417;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args32418 = [];
var len__22749__auto___32425 = arguments.length;
var i__22750__auto___32426 = (0);
while(true){
if((i__22750__auto___32426 < len__22749__auto___32425)){
args32418.push((arguments[i__22750__auto___32426]));

var G__32427 = (i__22750__auto___32426 + (1));
i__22750__auto___32426 = G__32427;
continue;
} else {
}
break;
}

var G__32420 = args32418.length;
switch (G__32420) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32418.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__32421_32429 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__32422_32430 = null;
var count__32423_32431 = (0);
var i__32424_32432 = (0);
while(true){
if((i__32424_32432 < count__32423_32431)){
var msg_32433 = cljs.core._nth.call(null,chunk__32422_32430,i__32424_32432);
figwheel.client.socket.handle_incoming_message.call(null,msg_32433);

var G__32434 = seq__32421_32429;
var G__32435 = chunk__32422_32430;
var G__32436 = count__32423_32431;
var G__32437 = (i__32424_32432 + (1));
seq__32421_32429 = G__32434;
chunk__32422_32430 = G__32435;
count__32423_32431 = G__32436;
i__32424_32432 = G__32437;
continue;
} else {
var temp__4657__auto___32438 = cljs.core.seq.call(null,seq__32421_32429);
if(temp__4657__auto___32438){
var seq__32421_32439__$1 = temp__4657__auto___32438;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32421_32439__$1)){
var c__22485__auto___32440 = cljs.core.chunk_first.call(null,seq__32421_32439__$1);
var G__32441 = cljs.core.chunk_rest.call(null,seq__32421_32439__$1);
var G__32442 = c__22485__auto___32440;
var G__32443 = cljs.core.count.call(null,c__22485__auto___32440);
var G__32444 = (0);
seq__32421_32429 = G__32441;
chunk__32422_32430 = G__32442;
count__32423_32431 = G__32443;
i__32424_32432 = G__32444;
continue;
} else {
var msg_32445 = cljs.core.first.call(null,seq__32421_32439__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_32445);

var G__32446 = cljs.core.next.call(null,seq__32421_32439__$1);
var G__32447 = null;
var G__32448 = (0);
var G__32449 = (0);
seq__32421_32429 = G__32446;
chunk__32422_32430 = G__32447;
count__32423_32431 = G__32448;
i__32424_32432 = G__32449;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__22756__auto__ = [];
var len__22749__auto___32454 = arguments.length;
var i__22750__auto___32455 = (0);
while(true){
if((i__22750__auto___32455 < len__22749__auto___32454)){
args__22756__auto__.push((arguments[i__22750__auto___32455]));

var G__32456 = (i__22750__auto___32455 + (1));
i__22750__auto___32455 = G__32456;
continue;
} else {
}
break;
}

var argseq__22757__auto__ = ((((0) < args__22756__auto__.length))?(new cljs.core.IndexedSeq(args__22756__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__22757__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__32451){
var map__32452 = p__32451;
var map__32452__$1 = ((((!((map__32452 == null)))?((((map__32452.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32452.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32452):map__32452);
var opts = map__32452__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq32450){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32450));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e32458){if((e32458 instanceof Error)){
var e = e32458;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e32458;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__32462){
var map__32463 = p__32462;
var map__32463__$1 = ((((!((map__32463 == null)))?((((map__32463.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32463.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32463):map__32463);
var msg_name = cljs.core.get.call(null,map__32463__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map