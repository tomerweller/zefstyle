// Compiled by ClojureScript 1.9.36 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__21674__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_32471 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_32471){
return (function (){
var _STAR_always_update_STAR_32472 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_32472;
}});})(_STAR_always_update_STAR_32471))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_32471;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args32473 = [];
var len__22749__auto___32476 = arguments.length;
var i__22750__auto___32477 = (0);
while(true){
if((i__22750__auto___32477 < len__22749__auto___32476)){
args32473.push((arguments[i__22750__auto___32477]));

var G__32478 = (i__22750__auto___32477 + (1));
i__22750__auto___32477 = G__32478;
continue;
} else {
}
break;
}

var G__32475 = args32473.length;
switch (G__32475) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32473.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__32484_32488 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__32485_32489 = null;
var count__32486_32490 = (0);
var i__32487_32491 = (0);
while(true){
if((i__32487_32491 < count__32486_32490)){
var v_32492 = cljs.core._nth.call(null,chunk__32485_32489,i__32487_32491);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_32492);

var G__32493 = seq__32484_32488;
var G__32494 = chunk__32485_32489;
var G__32495 = count__32486_32490;
var G__32496 = (i__32487_32491 + (1));
seq__32484_32488 = G__32493;
chunk__32485_32489 = G__32494;
count__32486_32490 = G__32495;
i__32487_32491 = G__32496;
continue;
} else {
var temp__4657__auto___32497 = cljs.core.seq.call(null,seq__32484_32488);
if(temp__4657__auto___32497){
var seq__32484_32498__$1 = temp__4657__auto___32497;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32484_32498__$1)){
var c__22485__auto___32499 = cljs.core.chunk_first.call(null,seq__32484_32498__$1);
var G__32500 = cljs.core.chunk_rest.call(null,seq__32484_32498__$1);
var G__32501 = c__22485__auto___32499;
var G__32502 = cljs.core.count.call(null,c__22485__auto___32499);
var G__32503 = (0);
seq__32484_32488 = G__32500;
chunk__32485_32489 = G__32501;
count__32486_32490 = G__32502;
i__32487_32491 = G__32503;
continue;
} else {
var v_32504 = cljs.core.first.call(null,seq__32484_32498__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_32504);

var G__32505 = cljs.core.next.call(null,seq__32484_32498__$1);
var G__32506 = null;
var G__32507 = (0);
var G__32508 = (0);
seq__32484_32488 = G__32505;
chunk__32485_32489 = G__32506;
count__32486_32490 = G__32507;
i__32487_32491 = G__32508;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map