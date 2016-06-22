// Compiled by ClojureScript 1.9.36 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__21674__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__21674__auto__){
return or__21674__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__21674__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27408_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27408_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__27413 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27414 = null;
var count__27415 = (0);
var i__27416 = (0);
while(true){
if((i__27416 < count__27415)){
var n = cljs.core._nth.call(null,chunk__27414,i__27416);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27417 = seq__27413;
var G__27418 = chunk__27414;
var G__27419 = count__27415;
var G__27420 = (i__27416 + (1));
seq__27413 = G__27417;
chunk__27414 = G__27418;
count__27415 = G__27419;
i__27416 = G__27420;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27413);
if(temp__4657__auto__){
var seq__27413__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27413__$1)){
var c__22485__auto__ = cljs.core.chunk_first.call(null,seq__27413__$1);
var G__27421 = cljs.core.chunk_rest.call(null,seq__27413__$1);
var G__27422 = c__22485__auto__;
var G__27423 = cljs.core.count.call(null,c__22485__auto__);
var G__27424 = (0);
seq__27413 = G__27421;
chunk__27414 = G__27422;
count__27415 = G__27423;
i__27416 = G__27424;
continue;
} else {
var n = cljs.core.first.call(null,seq__27413__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27425 = cljs.core.next.call(null,seq__27413__$1);
var G__27426 = null;
var G__27427 = (0);
var G__27428 = (0);
seq__27413 = G__27425;
chunk__27414 = G__27426;
count__27415 = G__27427;
i__27416 = G__27428;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__27479_27490 = cljs.core.seq.call(null,deps);
var chunk__27480_27491 = null;
var count__27481_27492 = (0);
var i__27482_27493 = (0);
while(true){
if((i__27482_27493 < count__27481_27492)){
var dep_27494 = cljs.core._nth.call(null,chunk__27480_27491,i__27482_27493);
topo_sort_helper_STAR_.call(null,dep_27494,(depth + (1)),state);

var G__27495 = seq__27479_27490;
var G__27496 = chunk__27480_27491;
var G__27497 = count__27481_27492;
var G__27498 = (i__27482_27493 + (1));
seq__27479_27490 = G__27495;
chunk__27480_27491 = G__27496;
count__27481_27492 = G__27497;
i__27482_27493 = G__27498;
continue;
} else {
var temp__4657__auto___27499 = cljs.core.seq.call(null,seq__27479_27490);
if(temp__4657__auto___27499){
var seq__27479_27500__$1 = temp__4657__auto___27499;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27479_27500__$1)){
var c__22485__auto___27501 = cljs.core.chunk_first.call(null,seq__27479_27500__$1);
var G__27502 = cljs.core.chunk_rest.call(null,seq__27479_27500__$1);
var G__27503 = c__22485__auto___27501;
var G__27504 = cljs.core.count.call(null,c__22485__auto___27501);
var G__27505 = (0);
seq__27479_27490 = G__27502;
chunk__27480_27491 = G__27503;
count__27481_27492 = G__27504;
i__27482_27493 = G__27505;
continue;
} else {
var dep_27506 = cljs.core.first.call(null,seq__27479_27500__$1);
topo_sort_helper_STAR_.call(null,dep_27506,(depth + (1)),state);

var G__27507 = cljs.core.next.call(null,seq__27479_27500__$1);
var G__27508 = null;
var G__27509 = (0);
var G__27510 = (0);
seq__27479_27490 = G__27507;
chunk__27480_27491 = G__27508;
count__27481_27492 = G__27509;
i__27482_27493 = G__27510;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27483){
var vec__27487 = p__27483;
var seq__27488 = cljs.core.seq.call(null,vec__27487);
var first__27489 = cljs.core.first.call(null,seq__27488);
var seq__27488__$1 = cljs.core.next.call(null,seq__27488);
var x = first__27489;
var xs = seq__27488__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27487,seq__27488,first__27489,seq__27488__$1,x,xs,get_deps__$1){
return (function (p1__27429_SHARP_){
return clojure.set.difference.call(null,p1__27429_SHARP_,x);
});})(vec__27487,seq__27488,first__27489,seq__27488__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__27523 = cljs.core.seq.call(null,provides);
var chunk__27524 = null;
var count__27525 = (0);
var i__27526 = (0);
while(true){
if((i__27526 < count__27525)){
var prov = cljs.core._nth.call(null,chunk__27524,i__27526);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27527_27535 = cljs.core.seq.call(null,requires);
var chunk__27528_27536 = null;
var count__27529_27537 = (0);
var i__27530_27538 = (0);
while(true){
if((i__27530_27538 < count__27529_27537)){
var req_27539 = cljs.core._nth.call(null,chunk__27528_27536,i__27530_27538);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27539,prov);

var G__27540 = seq__27527_27535;
var G__27541 = chunk__27528_27536;
var G__27542 = count__27529_27537;
var G__27543 = (i__27530_27538 + (1));
seq__27527_27535 = G__27540;
chunk__27528_27536 = G__27541;
count__27529_27537 = G__27542;
i__27530_27538 = G__27543;
continue;
} else {
var temp__4657__auto___27544 = cljs.core.seq.call(null,seq__27527_27535);
if(temp__4657__auto___27544){
var seq__27527_27545__$1 = temp__4657__auto___27544;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27527_27545__$1)){
var c__22485__auto___27546 = cljs.core.chunk_first.call(null,seq__27527_27545__$1);
var G__27547 = cljs.core.chunk_rest.call(null,seq__27527_27545__$1);
var G__27548 = c__22485__auto___27546;
var G__27549 = cljs.core.count.call(null,c__22485__auto___27546);
var G__27550 = (0);
seq__27527_27535 = G__27547;
chunk__27528_27536 = G__27548;
count__27529_27537 = G__27549;
i__27530_27538 = G__27550;
continue;
} else {
var req_27551 = cljs.core.first.call(null,seq__27527_27545__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27551,prov);

var G__27552 = cljs.core.next.call(null,seq__27527_27545__$1);
var G__27553 = null;
var G__27554 = (0);
var G__27555 = (0);
seq__27527_27535 = G__27552;
chunk__27528_27536 = G__27553;
count__27529_27537 = G__27554;
i__27530_27538 = G__27555;
continue;
}
} else {
}
}
break;
}

var G__27556 = seq__27523;
var G__27557 = chunk__27524;
var G__27558 = count__27525;
var G__27559 = (i__27526 + (1));
seq__27523 = G__27556;
chunk__27524 = G__27557;
count__27525 = G__27558;
i__27526 = G__27559;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27523);
if(temp__4657__auto__){
var seq__27523__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27523__$1)){
var c__22485__auto__ = cljs.core.chunk_first.call(null,seq__27523__$1);
var G__27560 = cljs.core.chunk_rest.call(null,seq__27523__$1);
var G__27561 = c__22485__auto__;
var G__27562 = cljs.core.count.call(null,c__22485__auto__);
var G__27563 = (0);
seq__27523 = G__27560;
chunk__27524 = G__27561;
count__27525 = G__27562;
i__27526 = G__27563;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27523__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27531_27564 = cljs.core.seq.call(null,requires);
var chunk__27532_27565 = null;
var count__27533_27566 = (0);
var i__27534_27567 = (0);
while(true){
if((i__27534_27567 < count__27533_27566)){
var req_27568 = cljs.core._nth.call(null,chunk__27532_27565,i__27534_27567);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27568,prov);

var G__27569 = seq__27531_27564;
var G__27570 = chunk__27532_27565;
var G__27571 = count__27533_27566;
var G__27572 = (i__27534_27567 + (1));
seq__27531_27564 = G__27569;
chunk__27532_27565 = G__27570;
count__27533_27566 = G__27571;
i__27534_27567 = G__27572;
continue;
} else {
var temp__4657__auto___27573__$1 = cljs.core.seq.call(null,seq__27531_27564);
if(temp__4657__auto___27573__$1){
var seq__27531_27574__$1 = temp__4657__auto___27573__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27531_27574__$1)){
var c__22485__auto___27575 = cljs.core.chunk_first.call(null,seq__27531_27574__$1);
var G__27576 = cljs.core.chunk_rest.call(null,seq__27531_27574__$1);
var G__27577 = c__22485__auto___27575;
var G__27578 = cljs.core.count.call(null,c__22485__auto___27575);
var G__27579 = (0);
seq__27531_27564 = G__27576;
chunk__27532_27565 = G__27577;
count__27533_27566 = G__27578;
i__27534_27567 = G__27579;
continue;
} else {
var req_27580 = cljs.core.first.call(null,seq__27531_27574__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27580,prov);

var G__27581 = cljs.core.next.call(null,seq__27531_27574__$1);
var G__27582 = null;
var G__27583 = (0);
var G__27584 = (0);
seq__27531_27564 = G__27581;
chunk__27532_27565 = G__27582;
count__27533_27566 = G__27583;
i__27534_27567 = G__27584;
continue;
}
} else {
}
}
break;
}

var G__27585 = cljs.core.next.call(null,seq__27523__$1);
var G__27586 = null;
var G__27587 = (0);
var G__27588 = (0);
seq__27523 = G__27585;
chunk__27524 = G__27586;
count__27525 = G__27587;
i__27526 = G__27588;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__27593_27597 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27594_27598 = null;
var count__27595_27599 = (0);
var i__27596_27600 = (0);
while(true){
if((i__27596_27600 < count__27595_27599)){
var ns_27601 = cljs.core._nth.call(null,chunk__27594_27598,i__27596_27600);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27601);

var G__27602 = seq__27593_27597;
var G__27603 = chunk__27594_27598;
var G__27604 = count__27595_27599;
var G__27605 = (i__27596_27600 + (1));
seq__27593_27597 = G__27602;
chunk__27594_27598 = G__27603;
count__27595_27599 = G__27604;
i__27596_27600 = G__27605;
continue;
} else {
var temp__4657__auto___27606 = cljs.core.seq.call(null,seq__27593_27597);
if(temp__4657__auto___27606){
var seq__27593_27607__$1 = temp__4657__auto___27606;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27593_27607__$1)){
var c__22485__auto___27608 = cljs.core.chunk_first.call(null,seq__27593_27607__$1);
var G__27609 = cljs.core.chunk_rest.call(null,seq__27593_27607__$1);
var G__27610 = c__22485__auto___27608;
var G__27611 = cljs.core.count.call(null,c__22485__auto___27608);
var G__27612 = (0);
seq__27593_27597 = G__27609;
chunk__27594_27598 = G__27610;
count__27595_27599 = G__27611;
i__27596_27600 = G__27612;
continue;
} else {
var ns_27613 = cljs.core.first.call(null,seq__27593_27607__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27613);

var G__27614 = cljs.core.next.call(null,seq__27593_27607__$1);
var G__27615 = null;
var G__27616 = (0);
var G__27617 = (0);
seq__27593_27597 = G__27614;
chunk__27594_27598 = G__27615;
count__27595_27599 = G__27616;
i__27596_27600 = G__27617;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__21674__auto__ = goog.require__;
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__27618__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27618 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27619__i = 0, G__27619__a = new Array(arguments.length -  0);
while (G__27619__i < G__27619__a.length) {G__27619__a[G__27619__i] = arguments[G__27619__i + 0]; ++G__27619__i;}
  args = new cljs.core.IndexedSeq(G__27619__a,0);
} 
return G__27618__delegate.call(this,args);};
G__27618.cljs$lang$maxFixedArity = 0;
G__27618.cljs$lang$applyTo = (function (arglist__27620){
var args = cljs.core.seq(arglist__27620);
return G__27618__delegate(args);
});
G__27618.cljs$core$IFn$_invoke$arity$variadic = G__27618__delegate;
return G__27618;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27622 = cljs.core._EQ_;
var expr__27623 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27622.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27623))){
var path_parts = ((function (pred__27622,expr__27623){
return (function (p1__27621_SHARP_){
return clojure.string.split.call(null,p1__27621_SHARP_,/[\/\\]/);
});})(pred__27622,expr__27623))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__27622,expr__27623){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27625){if((e27625 instanceof Error)){
var e = e27625;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27625;

}
}})());
});
;})(path_parts,sep,root,pred__27622,expr__27623))
} else {
if(cljs.core.truth_(pred__27622.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27623))){
return ((function (pred__27622,expr__27623){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__27622,expr__27623){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__27622,expr__27623))
);

return deferred.addErrback(((function (deferred,pred__27622,expr__27623){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__27622,expr__27623))
);
});
;})(pred__27622,expr__27623))
} else {
return ((function (pred__27622,expr__27623){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27622,expr__27623))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27626,callback){
var map__27629 = p__27626;
var map__27629__$1 = ((((!((map__27629 == null)))?((((map__27629.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27629.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27629):map__27629);
var file_msg = map__27629__$1;
var request_url = cljs.core.get.call(null,map__27629__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__27629,map__27629__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27629,map__27629__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__24577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto__){
return (function (){
var f__24578__auto__ = (function (){var switch__24465__auto__ = ((function (c__24577__auto__){
return (function (state_27653){
var state_val_27654 = (state_27653[(1)]);
if((state_val_27654 === (7))){
var inst_27649 = (state_27653[(2)]);
var state_27653__$1 = state_27653;
var statearr_27655_27675 = state_27653__$1;
(statearr_27655_27675[(2)] = inst_27649);

(statearr_27655_27675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (1))){
var state_27653__$1 = state_27653;
var statearr_27656_27676 = state_27653__$1;
(statearr_27656_27676[(2)] = null);

(statearr_27656_27676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (4))){
var inst_27633 = (state_27653[(7)]);
var inst_27633__$1 = (state_27653[(2)]);
var state_27653__$1 = (function (){var statearr_27657 = state_27653;
(statearr_27657[(7)] = inst_27633__$1);

return statearr_27657;
})();
if(cljs.core.truth_(inst_27633__$1)){
var statearr_27658_27677 = state_27653__$1;
(statearr_27658_27677[(1)] = (5));

} else {
var statearr_27659_27678 = state_27653__$1;
(statearr_27659_27678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (6))){
var state_27653__$1 = state_27653;
var statearr_27660_27679 = state_27653__$1;
(statearr_27660_27679[(2)] = null);

(statearr_27660_27679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (3))){
var inst_27651 = (state_27653[(2)]);
var state_27653__$1 = state_27653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27653__$1,inst_27651);
} else {
if((state_val_27654 === (2))){
var state_27653__$1 = state_27653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27653__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27654 === (11))){
var inst_27645 = (state_27653[(2)]);
var state_27653__$1 = (function (){var statearr_27661 = state_27653;
(statearr_27661[(8)] = inst_27645);

return statearr_27661;
})();
var statearr_27662_27680 = state_27653__$1;
(statearr_27662_27680[(2)] = null);

(statearr_27662_27680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (9))){
var inst_27639 = (state_27653[(9)]);
var inst_27637 = (state_27653[(10)]);
var inst_27641 = inst_27639.call(null,inst_27637);
var state_27653__$1 = state_27653;
var statearr_27663_27681 = state_27653__$1;
(statearr_27663_27681[(2)] = inst_27641);

(statearr_27663_27681[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (5))){
var inst_27633 = (state_27653[(7)]);
var inst_27635 = figwheel.client.file_reloading.blocking_load.call(null,inst_27633);
var state_27653__$1 = state_27653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27653__$1,(8),inst_27635);
} else {
if((state_val_27654 === (10))){
var inst_27637 = (state_27653[(10)]);
var inst_27643 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27637);
var state_27653__$1 = state_27653;
var statearr_27664_27682 = state_27653__$1;
(statearr_27664_27682[(2)] = inst_27643);

(statearr_27664_27682[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27654 === (8))){
var inst_27633 = (state_27653[(7)]);
var inst_27639 = (state_27653[(9)]);
var inst_27637 = (state_27653[(2)]);
var inst_27638 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27639__$1 = cljs.core.get.call(null,inst_27638,inst_27633);
var state_27653__$1 = (function (){var statearr_27665 = state_27653;
(statearr_27665[(9)] = inst_27639__$1);

(statearr_27665[(10)] = inst_27637);

return statearr_27665;
})();
if(cljs.core.truth_(inst_27639__$1)){
var statearr_27666_27683 = state_27653__$1;
(statearr_27666_27683[(1)] = (9));

} else {
var statearr_27667_27684 = state_27653__$1;
(statearr_27667_27684[(1)] = (10));

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
});})(c__24577__auto__))
;
return ((function (switch__24465__auto__,c__24577__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24466__auto__ = null;
var figwheel$client$file_reloading$state_machine__24466__auto____0 = (function (){
var statearr_27671 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27671[(0)] = figwheel$client$file_reloading$state_machine__24466__auto__);

(statearr_27671[(1)] = (1));

return statearr_27671;
});
var figwheel$client$file_reloading$state_machine__24466__auto____1 = (function (state_27653){
while(true){
var ret_value__24467__auto__ = (function (){try{while(true){
var result__24468__auto__ = switch__24465__auto__.call(null,state_27653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24468__auto__;
}
break;
}
}catch (e27672){if((e27672 instanceof Object)){
var ex__24469__auto__ = e27672;
var statearr_27673_27685 = state_27653;
(statearr_27673_27685[(5)] = ex__24469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27686 = state_27653;
state_27653 = G__27686;
continue;
} else {
return ret_value__24467__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24466__auto__ = function(state_27653){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24466__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24466__auto____1.call(this,state_27653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24466__auto____0;
figwheel$client$file_reloading$state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24466__auto____1;
return figwheel$client$file_reloading$state_machine__24466__auto__;
})()
;})(switch__24465__auto__,c__24577__auto__))
})();
var state__24579__auto__ = (function (){var statearr_27674 = f__24578__auto__.call(null);
(statearr_27674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24577__auto__);

return statearr_27674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto__))
);

return c__24577__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27687,callback){
var map__27690 = p__27687;
var map__27690__$1 = ((((!((map__27690 == null)))?((((map__27690.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27690.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27690):map__27690);
var file_msg = map__27690__$1;
var namespace = cljs.core.get.call(null,map__27690__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27690,map__27690__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27690,map__27690__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27692){
var map__27695 = p__27692;
var map__27695__$1 = ((((!((map__27695 == null)))?((((map__27695.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27695.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27695):map__27695);
var file_msg = map__27695__$1;
var namespace = cljs.core.get.call(null,map__27695__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__21662__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__21662__auto__){
var or__21674__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
var or__21674__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21674__auto____$1)){
return or__21674__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__21662__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27697,callback){
var map__27700 = p__27697;
var map__27700__$1 = ((((!((map__27700 == null)))?((((map__27700.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27700.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27700):map__27700);
var file_msg = map__27700__$1;
var request_url = cljs.core.get.call(null,map__27700__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27700__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__24577__auto___27804 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto___27804,out){
return (function (){
var f__24578__auto__ = (function (){var switch__24465__auto__ = ((function (c__24577__auto___27804,out){
return (function (state_27786){
var state_val_27787 = (state_27786[(1)]);
if((state_val_27787 === (1))){
var inst_27760 = cljs.core.seq.call(null,files);
var inst_27761 = cljs.core.first.call(null,inst_27760);
var inst_27762 = cljs.core.next.call(null,inst_27760);
var inst_27763 = files;
var state_27786__$1 = (function (){var statearr_27788 = state_27786;
(statearr_27788[(7)] = inst_27762);

(statearr_27788[(8)] = inst_27761);

(statearr_27788[(9)] = inst_27763);

return statearr_27788;
})();
var statearr_27789_27805 = state_27786__$1;
(statearr_27789_27805[(2)] = null);

(statearr_27789_27805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27787 === (2))){
var inst_27769 = (state_27786[(10)]);
var inst_27763 = (state_27786[(9)]);
var inst_27768 = cljs.core.seq.call(null,inst_27763);
var inst_27769__$1 = cljs.core.first.call(null,inst_27768);
var inst_27770 = cljs.core.next.call(null,inst_27768);
var inst_27771 = (inst_27769__$1 == null);
var inst_27772 = cljs.core.not.call(null,inst_27771);
var state_27786__$1 = (function (){var statearr_27790 = state_27786;
(statearr_27790[(11)] = inst_27770);

(statearr_27790[(10)] = inst_27769__$1);

return statearr_27790;
})();
if(inst_27772){
var statearr_27791_27806 = state_27786__$1;
(statearr_27791_27806[(1)] = (4));

} else {
var statearr_27792_27807 = state_27786__$1;
(statearr_27792_27807[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27787 === (3))){
var inst_27784 = (state_27786[(2)]);
var state_27786__$1 = state_27786;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27786__$1,inst_27784);
} else {
if((state_val_27787 === (4))){
var inst_27769 = (state_27786[(10)]);
var inst_27774 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27769);
var state_27786__$1 = state_27786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27786__$1,(7),inst_27774);
} else {
if((state_val_27787 === (5))){
var inst_27780 = cljs.core.async.close_BANG_.call(null,out);
var state_27786__$1 = state_27786;
var statearr_27793_27808 = state_27786__$1;
(statearr_27793_27808[(2)] = inst_27780);

(statearr_27793_27808[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27787 === (6))){
var inst_27782 = (state_27786[(2)]);
var state_27786__$1 = state_27786;
var statearr_27794_27809 = state_27786__$1;
(statearr_27794_27809[(2)] = inst_27782);

(statearr_27794_27809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27787 === (7))){
var inst_27770 = (state_27786[(11)]);
var inst_27776 = (state_27786[(2)]);
var inst_27777 = cljs.core.async.put_BANG_.call(null,out,inst_27776);
var inst_27763 = inst_27770;
var state_27786__$1 = (function (){var statearr_27795 = state_27786;
(statearr_27795[(9)] = inst_27763);

(statearr_27795[(12)] = inst_27777);

return statearr_27795;
})();
var statearr_27796_27810 = state_27786__$1;
(statearr_27796_27810[(2)] = null);

(statearr_27796_27810[(1)] = (2));


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
});})(c__24577__auto___27804,out))
;
return ((function (switch__24465__auto__,c__24577__auto___27804,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24466__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24466__auto____0 = (function (){
var statearr_27800 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27800[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24466__auto__);

(statearr_27800[(1)] = (1));

return statearr_27800;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24466__auto____1 = (function (state_27786){
while(true){
var ret_value__24467__auto__ = (function (){try{while(true){
var result__24468__auto__ = switch__24465__auto__.call(null,state_27786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24468__auto__;
}
break;
}
}catch (e27801){if((e27801 instanceof Object)){
var ex__24469__auto__ = e27801;
var statearr_27802_27811 = state_27786;
(statearr_27802_27811[(5)] = ex__24469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27812 = state_27786;
state_27786 = G__27812;
continue;
} else {
return ret_value__24467__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24466__auto__ = function(state_27786){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24466__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24466__auto____1.call(this,state_27786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24466__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24466__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24466__auto__;
})()
;})(switch__24465__auto__,c__24577__auto___27804,out))
})();
var state__24579__auto__ = (function (){var statearr_27803 = f__24578__auto__.call(null);
(statearr_27803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24577__auto___27804);

return statearr_27803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto___27804,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27813,opts){
var map__27817 = p__27813;
var map__27817__$1 = ((((!((map__27817 == null)))?((((map__27817.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27817.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27817):map__27817);
var eval_body__$1 = cljs.core.get.call(null,map__27817__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27817__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__21662__auto__ = eval_body__$1;
if(cljs.core.truth_(and__21662__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__21662__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27819){var e = e27819;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__27820_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27820_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__27829){
var vec__27830 = p__27829;
var k = cljs.core.nth.call(null,vec__27830,(0),null);
var v = cljs.core.nth.call(null,vec__27830,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27833){
var vec__27834 = p__27833;
var k = cljs.core.nth.call(null,vec__27834,(0),null);
var v = cljs.core.nth.call(null,vec__27834,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27840,p__27841){
var map__28088 = p__27840;
var map__28088__$1 = ((((!((map__28088 == null)))?((((map__28088.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28088.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28088):map__28088);
var opts = map__28088__$1;
var before_jsload = cljs.core.get.call(null,map__28088__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28088__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28088__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28089 = p__27841;
var map__28089__$1 = ((((!((map__28089 == null)))?((((map__28089.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28089.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28089):map__28089);
var msg = map__28089__$1;
var files = cljs.core.get.call(null,map__28089__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28089__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28089__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24577__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24577__auto__,map__28088,map__28088__$1,opts,before_jsload,on_jsload,reload_dependents,map__28089,map__28089__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24578__auto__ = (function (){var switch__24465__auto__ = ((function (c__24577__auto__,map__28088,map__28088__$1,opts,before_jsload,on_jsload,reload_dependents,map__28089,map__28089__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28242){
var state_val_28243 = (state_28242[(1)]);
if((state_val_28243 === (7))){
var inst_28104 = (state_28242[(7)]);
var inst_28103 = (state_28242[(8)]);
var inst_28106 = (state_28242[(9)]);
var inst_28105 = (state_28242[(10)]);
var inst_28111 = cljs.core._nth.call(null,inst_28104,inst_28106);
var inst_28112 = figwheel.client.file_reloading.eval_body.call(null,inst_28111,opts);
var inst_28113 = (inst_28106 + (1));
var tmp28244 = inst_28104;
var tmp28245 = inst_28103;
var tmp28246 = inst_28105;
var inst_28103__$1 = tmp28245;
var inst_28104__$1 = tmp28244;
var inst_28105__$1 = tmp28246;
var inst_28106__$1 = inst_28113;
var state_28242__$1 = (function (){var statearr_28247 = state_28242;
(statearr_28247[(11)] = inst_28112);

(statearr_28247[(7)] = inst_28104__$1);

(statearr_28247[(8)] = inst_28103__$1);

(statearr_28247[(9)] = inst_28106__$1);

(statearr_28247[(10)] = inst_28105__$1);

return statearr_28247;
})();
var statearr_28248_28334 = state_28242__$1;
(statearr_28248_28334[(2)] = null);

(statearr_28248_28334[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (20))){
var inst_28146 = (state_28242[(12)]);
var inst_28154 = figwheel.client.file_reloading.sort_files.call(null,inst_28146);
var state_28242__$1 = state_28242;
var statearr_28249_28335 = state_28242__$1;
(statearr_28249_28335[(2)] = inst_28154);

(statearr_28249_28335[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (27))){
var state_28242__$1 = state_28242;
var statearr_28250_28336 = state_28242__$1;
(statearr_28250_28336[(2)] = null);

(statearr_28250_28336[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (1))){
var inst_28095 = (state_28242[(13)]);
var inst_28092 = before_jsload.call(null,files);
var inst_28093 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28094 = (function (){return ((function (inst_28095,inst_28092,inst_28093,state_val_28243,c__24577__auto__,map__28088,map__28088__$1,opts,before_jsload,on_jsload,reload_dependents,map__28089,map__28089__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27837_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27837_SHARP_);
});
;})(inst_28095,inst_28092,inst_28093,state_val_28243,c__24577__auto__,map__28088,map__28088__$1,opts,before_jsload,on_jsload,reload_dependents,map__28089,map__28089__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28095__$1 = cljs.core.filter.call(null,inst_28094,files);
var inst_28096 = cljs.core.not_empty.call(null,inst_28095__$1);
var state_28242__$1 = (function (){var statearr_28251 = state_28242;
(statearr_28251[(14)] = inst_28092);

(statearr_28251[(13)] = inst_28095__$1);

(statearr_28251[(15)] = inst_28093);

return statearr_28251;
})();
if(cljs.core.truth_(inst_28096)){
var statearr_28252_28337 = state_28242__$1;
(statearr_28252_28337[(1)] = (2));

} else {
var statearr_28253_28338 = state_28242__$1;
(statearr_28253_28338[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (24))){
var state_28242__$1 = state_28242;
var statearr_28254_28339 = state_28242__$1;
(statearr_28254_28339[(2)] = null);

(statearr_28254_28339[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (39))){
var inst_28196 = (state_28242[(16)]);
var state_28242__$1 = state_28242;
var statearr_28255_28340 = state_28242__$1;
(statearr_28255_28340[(2)] = inst_28196);

(statearr_28255_28340[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (46))){
var inst_28237 = (state_28242[(2)]);
var state_28242__$1 = state_28242;
var statearr_28256_28341 = state_28242__$1;
(statearr_28256_28341[(2)] = inst_28237);

(statearr_28256_28341[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (4))){
var inst_28140 = (state_28242[(2)]);
var inst_28141 = cljs.core.List.EMPTY;
var inst_28142 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28141);
var inst_28143 = (function (){return ((function (inst_28140,inst_28141,inst_28142,state_val_28243,c__24577__auto__,map__28088,map__28088__$1,opts,before_jsload,on_jsload,reload_dependents,map__28089,map__28089__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27838_SHARP_){
var and__21662__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27838_SHARP_);
if(cljs.core.truth_(and__21662__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27838_SHARP_));
} else {
return and__21662__auto__;
}
});
;})(inst_28140,inst_28141,inst_28142,state_val_28243,c__24577__auto__,map__28088,map__28088__$1,opts,before_jsload,on_jsload,reload_dependents,map__28089,map__28089__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28144 = cljs.core.filter.call(null,inst_28143,files);
var inst_28145 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28146 = cljs.core.concat.call(null,inst_28144,inst_28145);
var state_28242__$1 = (function (){var statearr_28257 = state_28242;
(statearr_28257[(17)] = inst_28140);

(statearr_28257[(12)] = inst_28146);

(statearr_28257[(18)] = inst_28142);

return statearr_28257;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28258_28342 = state_28242__$1;
(statearr_28258_28342[(1)] = (16));

} else {
var statearr_28259_28343 = state_28242__$1;
(statearr_28259_28343[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (15))){
var inst_28130 = (state_28242[(2)]);
var state_28242__$1 = state_28242;
var statearr_28260_28344 = state_28242__$1;
(statearr_28260_28344[(2)] = inst_28130);

(statearr_28260_28344[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (21))){
var inst_28156 = (state_28242[(19)]);
var inst_28156__$1 = (state_28242[(2)]);
var inst_28157 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28156__$1);
var state_28242__$1 = (function (){var statearr_28261 = state_28242;
(statearr_28261[(19)] = inst_28156__$1);

return statearr_28261;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28242__$1,(22),inst_28157);
} else {
if((state_val_28243 === (31))){
var inst_28240 = (state_28242[(2)]);
var state_28242__$1 = state_28242;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28242__$1,inst_28240);
} else {
if((state_val_28243 === (32))){
var inst_28196 = (state_28242[(16)]);
var inst_28201 = inst_28196.cljs$lang$protocol_mask$partition0$;
var inst_28202 = (inst_28201 & (64));
var inst_28203 = inst_28196.cljs$core$ISeq$;
var inst_28204 = (inst_28202) || (inst_28203);
var state_28242__$1 = state_28242;
if(cljs.core.truth_(inst_28204)){
var statearr_28262_28345 = state_28242__$1;
(statearr_28262_28345[(1)] = (35));

} else {
var statearr_28263_28346 = state_28242__$1;
(statearr_28263_28346[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (40))){
var inst_28217 = (state_28242[(20)]);
var inst_28216 = (state_28242[(2)]);
var inst_28217__$1 = cljs.core.get.call(null,inst_28216,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28218 = cljs.core.get.call(null,inst_28216,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28219 = cljs.core.not_empty.call(null,inst_28217__$1);
var state_28242__$1 = (function (){var statearr_28264 = state_28242;
(statearr_28264[(21)] = inst_28218);

(statearr_28264[(20)] = inst_28217__$1);

return statearr_28264;
})();
if(cljs.core.truth_(inst_28219)){
var statearr_28265_28347 = state_28242__$1;
(statearr_28265_28347[(1)] = (41));

} else {
var statearr_28266_28348 = state_28242__$1;
(statearr_28266_28348[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (33))){
var state_28242__$1 = state_28242;
var statearr_28267_28349 = state_28242__$1;
(statearr_28267_28349[(2)] = false);

(statearr_28267_28349[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (13))){
var inst_28116 = (state_28242[(22)]);
var inst_28120 = cljs.core.chunk_first.call(null,inst_28116);
var inst_28121 = cljs.core.chunk_rest.call(null,inst_28116);
var inst_28122 = cljs.core.count.call(null,inst_28120);
var inst_28103 = inst_28121;
var inst_28104 = inst_28120;
var inst_28105 = inst_28122;
var inst_28106 = (0);
var state_28242__$1 = (function (){var statearr_28268 = state_28242;
(statearr_28268[(7)] = inst_28104);

(statearr_28268[(8)] = inst_28103);

(statearr_28268[(9)] = inst_28106);

(statearr_28268[(10)] = inst_28105);

return statearr_28268;
})();
var statearr_28269_28350 = state_28242__$1;
(statearr_28269_28350[(2)] = null);

(statearr_28269_28350[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (22))){
var inst_28159 = (state_28242[(23)]);
var inst_28156 = (state_28242[(19)]);
var inst_28164 = (state_28242[(24)]);
var inst_28160 = (state_28242[(25)]);
var inst_28159__$1 = (state_28242[(2)]);
var inst_28160__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28159__$1);
var inst_28161 = (function (){var all_files = inst_28156;
var res_SINGLEQUOTE_ = inst_28159__$1;
var res = inst_28160__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28159,inst_28156,inst_28164,inst_28160,inst_28159__$1,inst_28160__$1,state_val_28243,c__24577__auto__,map__28088,map__28088__$1,opts,before_jsload,on_jsload,reload_dependents,map__28089,map__28089__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27839_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27839_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28159,inst_28156,inst_28164,inst_28160,inst_28159__$1,inst_28160__$1,state_val_28243,c__24577__auto__,map__28088,map__28088__$1,opts,before_jsload,on_jsload,reload_dependents,map__28089,map__28089__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28162 = cljs.core.filter.call(null,inst_28161,inst_28159__$1);
var inst_28163 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28164__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28163);
var inst_28165 = cljs.core.not_empty.call(null,inst_28164__$1);
var state_28242__$1 = (function (){var statearr_28270 = state_28242;
(statearr_28270[(23)] = inst_28159__$1);

(statearr_28270[(26)] = inst_28162);

(statearr_28270[(24)] = inst_28164__$1);

(statearr_28270[(25)] = inst_28160__$1);

return statearr_28270;
})();
if(cljs.core.truth_(inst_28165)){
var statearr_28271_28351 = state_28242__$1;
(statearr_28271_28351[(1)] = (23));

} else {
var statearr_28272_28352 = state_28242__$1;
(statearr_28272_28352[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (36))){
var state_28242__$1 = state_28242;
var statearr_28273_28353 = state_28242__$1;
(statearr_28273_28353[(2)] = false);

(statearr_28273_28353[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (41))){
var inst_28217 = (state_28242[(20)]);
var inst_28221 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28222 = cljs.core.map.call(null,inst_28221,inst_28217);
var inst_28223 = cljs.core.pr_str.call(null,inst_28222);
var inst_28224 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_28223)].join('');
var inst_28225 = figwheel.client.utils.log.call(null,inst_28224);
var state_28242__$1 = state_28242;
var statearr_28274_28354 = state_28242__$1;
(statearr_28274_28354[(2)] = inst_28225);

(statearr_28274_28354[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (43))){
var inst_28218 = (state_28242[(21)]);
var inst_28228 = (state_28242[(2)]);
var inst_28229 = cljs.core.not_empty.call(null,inst_28218);
var state_28242__$1 = (function (){var statearr_28275 = state_28242;
(statearr_28275[(27)] = inst_28228);

return statearr_28275;
})();
if(cljs.core.truth_(inst_28229)){
var statearr_28276_28355 = state_28242__$1;
(statearr_28276_28355[(1)] = (44));

} else {
var statearr_28277_28356 = state_28242__$1;
(statearr_28277_28356[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (29))){
var inst_28196 = (state_28242[(16)]);
var inst_28159 = (state_28242[(23)]);
var inst_28156 = (state_28242[(19)]);
var inst_28162 = (state_28242[(26)]);
var inst_28164 = (state_28242[(24)]);
var inst_28160 = (state_28242[(25)]);
var inst_28192 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28195 = (function (){var all_files = inst_28156;
var res_SINGLEQUOTE_ = inst_28159;
var res = inst_28160;
var files_not_loaded = inst_28162;
var dependencies_that_loaded = inst_28164;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28196,inst_28159,inst_28156,inst_28162,inst_28164,inst_28160,inst_28192,state_val_28243,c__24577__auto__,map__28088,map__28088__$1,opts,before_jsload,on_jsload,reload_dependents,map__28089,map__28089__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28194){
var map__28278 = p__28194;
var map__28278__$1 = ((((!((map__28278 == null)))?((((map__28278.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28278.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28278):map__28278);
var namespace = cljs.core.get.call(null,map__28278__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28196,inst_28159,inst_28156,inst_28162,inst_28164,inst_28160,inst_28192,state_val_28243,c__24577__auto__,map__28088,map__28088__$1,opts,before_jsload,on_jsload,reload_dependents,map__28089,map__28089__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28196__$1 = cljs.core.group_by.call(null,inst_28195,inst_28162);
var inst_28198 = (inst_28196__$1 == null);
var inst_28199 = cljs.core.not.call(null,inst_28198);
var state_28242__$1 = (function (){var statearr_28280 = state_28242;
(statearr_28280[(16)] = inst_28196__$1);

(statearr_28280[(28)] = inst_28192);

return statearr_28280;
})();
if(inst_28199){
var statearr_28281_28357 = state_28242__$1;
(statearr_28281_28357[(1)] = (32));

} else {
var statearr_28282_28358 = state_28242__$1;
(statearr_28282_28358[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (44))){
var inst_28218 = (state_28242[(21)]);
var inst_28231 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28218);
var inst_28232 = cljs.core.pr_str.call(null,inst_28231);
var inst_28233 = [cljs.core.str("not required: "),cljs.core.str(inst_28232)].join('');
var inst_28234 = figwheel.client.utils.log.call(null,inst_28233);
var state_28242__$1 = state_28242;
var statearr_28283_28359 = state_28242__$1;
(statearr_28283_28359[(2)] = inst_28234);

(statearr_28283_28359[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (6))){
var inst_28137 = (state_28242[(2)]);
var state_28242__$1 = state_28242;
var statearr_28284_28360 = state_28242__$1;
(statearr_28284_28360[(2)] = inst_28137);

(statearr_28284_28360[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (28))){
var inst_28162 = (state_28242[(26)]);
var inst_28189 = (state_28242[(2)]);
var inst_28190 = cljs.core.not_empty.call(null,inst_28162);
var state_28242__$1 = (function (){var statearr_28285 = state_28242;
(statearr_28285[(29)] = inst_28189);

return statearr_28285;
})();
if(cljs.core.truth_(inst_28190)){
var statearr_28286_28361 = state_28242__$1;
(statearr_28286_28361[(1)] = (29));

} else {
var statearr_28287_28362 = state_28242__$1;
(statearr_28287_28362[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (25))){
var inst_28160 = (state_28242[(25)]);
var inst_28176 = (state_28242[(2)]);
var inst_28177 = cljs.core.not_empty.call(null,inst_28160);
var state_28242__$1 = (function (){var statearr_28288 = state_28242;
(statearr_28288[(30)] = inst_28176);

return statearr_28288;
})();
if(cljs.core.truth_(inst_28177)){
var statearr_28289_28363 = state_28242__$1;
(statearr_28289_28363[(1)] = (26));

} else {
var statearr_28290_28364 = state_28242__$1;
(statearr_28290_28364[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (34))){
var inst_28211 = (state_28242[(2)]);
var state_28242__$1 = state_28242;
if(cljs.core.truth_(inst_28211)){
var statearr_28291_28365 = state_28242__$1;
(statearr_28291_28365[(1)] = (38));

} else {
var statearr_28292_28366 = state_28242__$1;
(statearr_28292_28366[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (17))){
var state_28242__$1 = state_28242;
var statearr_28293_28367 = state_28242__$1;
(statearr_28293_28367[(2)] = recompile_dependents);

(statearr_28293_28367[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (3))){
var state_28242__$1 = state_28242;
var statearr_28294_28368 = state_28242__$1;
(statearr_28294_28368[(2)] = null);

(statearr_28294_28368[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (12))){
var inst_28133 = (state_28242[(2)]);
var state_28242__$1 = state_28242;
var statearr_28295_28369 = state_28242__$1;
(statearr_28295_28369[(2)] = inst_28133);

(statearr_28295_28369[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (2))){
var inst_28095 = (state_28242[(13)]);
var inst_28102 = cljs.core.seq.call(null,inst_28095);
var inst_28103 = inst_28102;
var inst_28104 = null;
var inst_28105 = (0);
var inst_28106 = (0);
var state_28242__$1 = (function (){var statearr_28296 = state_28242;
(statearr_28296[(7)] = inst_28104);

(statearr_28296[(8)] = inst_28103);

(statearr_28296[(9)] = inst_28106);

(statearr_28296[(10)] = inst_28105);

return statearr_28296;
})();
var statearr_28297_28370 = state_28242__$1;
(statearr_28297_28370[(2)] = null);

(statearr_28297_28370[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (23))){
var inst_28159 = (state_28242[(23)]);
var inst_28156 = (state_28242[(19)]);
var inst_28162 = (state_28242[(26)]);
var inst_28164 = (state_28242[(24)]);
var inst_28160 = (state_28242[(25)]);
var inst_28167 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28169 = (function (){var all_files = inst_28156;
var res_SINGLEQUOTE_ = inst_28159;
var res = inst_28160;
var files_not_loaded = inst_28162;
var dependencies_that_loaded = inst_28164;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28159,inst_28156,inst_28162,inst_28164,inst_28160,inst_28167,state_val_28243,c__24577__auto__,map__28088,map__28088__$1,opts,before_jsload,on_jsload,reload_dependents,map__28089,map__28089__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28168){
var map__28298 = p__28168;
var map__28298__$1 = ((((!((map__28298 == null)))?((((map__28298.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28298.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28298):map__28298);
var request_url = cljs.core.get.call(null,map__28298__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28159,inst_28156,inst_28162,inst_28164,inst_28160,inst_28167,state_val_28243,c__24577__auto__,map__28088,map__28088__$1,opts,before_jsload,on_jsload,reload_dependents,map__28089,map__28089__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28170 = cljs.core.reverse.call(null,inst_28164);
var inst_28171 = cljs.core.map.call(null,inst_28169,inst_28170);
var inst_28172 = cljs.core.pr_str.call(null,inst_28171);
var inst_28173 = figwheel.client.utils.log.call(null,inst_28172);
var state_28242__$1 = (function (){var statearr_28300 = state_28242;
(statearr_28300[(31)] = inst_28167);

return statearr_28300;
})();
var statearr_28301_28371 = state_28242__$1;
(statearr_28301_28371[(2)] = inst_28173);

(statearr_28301_28371[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (35))){
var state_28242__$1 = state_28242;
var statearr_28302_28372 = state_28242__$1;
(statearr_28302_28372[(2)] = true);

(statearr_28302_28372[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (19))){
var inst_28146 = (state_28242[(12)]);
var inst_28152 = figwheel.client.file_reloading.expand_files.call(null,inst_28146);
var state_28242__$1 = state_28242;
var statearr_28303_28373 = state_28242__$1;
(statearr_28303_28373[(2)] = inst_28152);

(statearr_28303_28373[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (11))){
var state_28242__$1 = state_28242;
var statearr_28304_28374 = state_28242__$1;
(statearr_28304_28374[(2)] = null);

(statearr_28304_28374[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (9))){
var inst_28135 = (state_28242[(2)]);
var state_28242__$1 = state_28242;
var statearr_28305_28375 = state_28242__$1;
(statearr_28305_28375[(2)] = inst_28135);

(statearr_28305_28375[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (5))){
var inst_28106 = (state_28242[(9)]);
var inst_28105 = (state_28242[(10)]);
var inst_28108 = (inst_28106 < inst_28105);
var inst_28109 = inst_28108;
var state_28242__$1 = state_28242;
if(cljs.core.truth_(inst_28109)){
var statearr_28306_28376 = state_28242__$1;
(statearr_28306_28376[(1)] = (7));

} else {
var statearr_28307_28377 = state_28242__$1;
(statearr_28307_28377[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (14))){
var inst_28116 = (state_28242[(22)]);
var inst_28125 = cljs.core.first.call(null,inst_28116);
var inst_28126 = figwheel.client.file_reloading.eval_body.call(null,inst_28125,opts);
var inst_28127 = cljs.core.next.call(null,inst_28116);
var inst_28103 = inst_28127;
var inst_28104 = null;
var inst_28105 = (0);
var inst_28106 = (0);
var state_28242__$1 = (function (){var statearr_28308 = state_28242;
(statearr_28308[(7)] = inst_28104);

(statearr_28308[(32)] = inst_28126);

(statearr_28308[(8)] = inst_28103);

(statearr_28308[(9)] = inst_28106);

(statearr_28308[(10)] = inst_28105);

return statearr_28308;
})();
var statearr_28309_28378 = state_28242__$1;
(statearr_28309_28378[(2)] = null);

(statearr_28309_28378[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (45))){
var state_28242__$1 = state_28242;
var statearr_28310_28379 = state_28242__$1;
(statearr_28310_28379[(2)] = null);

(statearr_28310_28379[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (26))){
var inst_28159 = (state_28242[(23)]);
var inst_28156 = (state_28242[(19)]);
var inst_28162 = (state_28242[(26)]);
var inst_28164 = (state_28242[(24)]);
var inst_28160 = (state_28242[(25)]);
var inst_28179 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28181 = (function (){var all_files = inst_28156;
var res_SINGLEQUOTE_ = inst_28159;
var res = inst_28160;
var files_not_loaded = inst_28162;
var dependencies_that_loaded = inst_28164;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28159,inst_28156,inst_28162,inst_28164,inst_28160,inst_28179,state_val_28243,c__24577__auto__,map__28088,map__28088__$1,opts,before_jsload,on_jsload,reload_dependents,map__28089,map__28089__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28180){
var map__28311 = p__28180;
var map__28311__$1 = ((((!((map__28311 == null)))?((((map__28311.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28311.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28311):map__28311);
var namespace = cljs.core.get.call(null,map__28311__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28311__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28159,inst_28156,inst_28162,inst_28164,inst_28160,inst_28179,state_val_28243,c__24577__auto__,map__28088,map__28088__$1,opts,before_jsload,on_jsload,reload_dependents,map__28089,map__28089__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28182 = cljs.core.map.call(null,inst_28181,inst_28160);
var inst_28183 = cljs.core.pr_str.call(null,inst_28182);
var inst_28184 = figwheel.client.utils.log.call(null,inst_28183);
var inst_28185 = (function (){var all_files = inst_28156;
var res_SINGLEQUOTE_ = inst_28159;
var res = inst_28160;
var files_not_loaded = inst_28162;
var dependencies_that_loaded = inst_28164;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28159,inst_28156,inst_28162,inst_28164,inst_28160,inst_28179,inst_28181,inst_28182,inst_28183,inst_28184,state_val_28243,c__24577__auto__,map__28088,map__28088__$1,opts,before_jsload,on_jsload,reload_dependents,map__28089,map__28089__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28159,inst_28156,inst_28162,inst_28164,inst_28160,inst_28179,inst_28181,inst_28182,inst_28183,inst_28184,state_val_28243,c__24577__auto__,map__28088,map__28088__$1,opts,before_jsload,on_jsload,reload_dependents,map__28089,map__28089__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28186 = setTimeout(inst_28185,(10));
var state_28242__$1 = (function (){var statearr_28313 = state_28242;
(statearr_28313[(33)] = inst_28179);

(statearr_28313[(34)] = inst_28184);

return statearr_28313;
})();
var statearr_28314_28380 = state_28242__$1;
(statearr_28314_28380[(2)] = inst_28186);

(statearr_28314_28380[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (16))){
var state_28242__$1 = state_28242;
var statearr_28315_28381 = state_28242__$1;
(statearr_28315_28381[(2)] = reload_dependents);

(statearr_28315_28381[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (38))){
var inst_28196 = (state_28242[(16)]);
var inst_28213 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28196);
var state_28242__$1 = state_28242;
var statearr_28316_28382 = state_28242__$1;
(statearr_28316_28382[(2)] = inst_28213);

(statearr_28316_28382[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (30))){
var state_28242__$1 = state_28242;
var statearr_28317_28383 = state_28242__$1;
(statearr_28317_28383[(2)] = null);

(statearr_28317_28383[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (10))){
var inst_28116 = (state_28242[(22)]);
var inst_28118 = cljs.core.chunked_seq_QMARK_.call(null,inst_28116);
var state_28242__$1 = state_28242;
if(inst_28118){
var statearr_28318_28384 = state_28242__$1;
(statearr_28318_28384[(1)] = (13));

} else {
var statearr_28319_28385 = state_28242__$1;
(statearr_28319_28385[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (18))){
var inst_28150 = (state_28242[(2)]);
var state_28242__$1 = state_28242;
if(cljs.core.truth_(inst_28150)){
var statearr_28320_28386 = state_28242__$1;
(statearr_28320_28386[(1)] = (19));

} else {
var statearr_28321_28387 = state_28242__$1;
(statearr_28321_28387[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (42))){
var state_28242__$1 = state_28242;
var statearr_28322_28388 = state_28242__$1;
(statearr_28322_28388[(2)] = null);

(statearr_28322_28388[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (37))){
var inst_28208 = (state_28242[(2)]);
var state_28242__$1 = state_28242;
var statearr_28323_28389 = state_28242__$1;
(statearr_28323_28389[(2)] = inst_28208);

(statearr_28323_28389[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28243 === (8))){
var inst_28103 = (state_28242[(8)]);
var inst_28116 = (state_28242[(22)]);
var inst_28116__$1 = cljs.core.seq.call(null,inst_28103);
var state_28242__$1 = (function (){var statearr_28324 = state_28242;
(statearr_28324[(22)] = inst_28116__$1);

return statearr_28324;
})();
if(inst_28116__$1){
var statearr_28325_28390 = state_28242__$1;
(statearr_28325_28390[(1)] = (10));

} else {
var statearr_28326_28391 = state_28242__$1;
(statearr_28326_28391[(1)] = (11));

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
}
});})(c__24577__auto__,map__28088,map__28088__$1,opts,before_jsload,on_jsload,reload_dependents,map__28089,map__28089__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24465__auto__,c__24577__auto__,map__28088,map__28088__$1,opts,before_jsload,on_jsload,reload_dependents,map__28089,map__28089__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24466__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24466__auto____0 = (function (){
var statearr_28330 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28330[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24466__auto__);

(statearr_28330[(1)] = (1));

return statearr_28330;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24466__auto____1 = (function (state_28242){
while(true){
var ret_value__24467__auto__ = (function (){try{while(true){
var result__24468__auto__ = switch__24465__auto__.call(null,state_28242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24468__auto__;
}
break;
}
}catch (e28331){if((e28331 instanceof Object)){
var ex__24469__auto__ = e28331;
var statearr_28332_28392 = state_28242;
(statearr_28332_28392[(5)] = ex__24469__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28393 = state_28242;
state_28242 = G__28393;
continue;
} else {
return ret_value__24467__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24466__auto__ = function(state_28242){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24466__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24466__auto____1.call(this,state_28242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24466__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24466__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24466__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24466__auto__;
})()
;})(switch__24465__auto__,c__24577__auto__,map__28088,map__28088__$1,opts,before_jsload,on_jsload,reload_dependents,map__28089,map__28089__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24579__auto__ = (function (){var statearr_28333 = f__24578__auto__.call(null);
(statearr_28333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24577__auto__);

return statearr_28333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24579__auto__);
});})(c__24577__auto__,map__28088,map__28088__$1,opts,before_jsload,on_jsload,reload_dependents,map__28089,map__28089__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24577__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28396,link){
var map__28399 = p__28396;
var map__28399__$1 = ((((!((map__28399 == null)))?((((map__28399.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28399.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28399):map__28399);
var file = cljs.core.get.call(null,map__28399__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__28399,map__28399__$1,file){
return (function (p1__28394_SHARP_,p2__28395_SHARP_){
if(cljs.core._EQ_.call(null,p1__28394_SHARP_,p2__28395_SHARP_)){
return p1__28394_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__28399,map__28399__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28405){
var map__28406 = p__28405;
var map__28406__$1 = ((((!((map__28406 == null)))?((((map__28406.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28406.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28406):map__28406);
var match_length = cljs.core.get.call(null,map__28406__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28406__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28401_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28401_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args28408 = [];
var len__22749__auto___28411 = arguments.length;
var i__22750__auto___28412 = (0);
while(true){
if((i__22750__auto___28412 < len__22749__auto___28411)){
args28408.push((arguments[i__22750__auto___28412]));

var G__28413 = (i__22750__auto___28412 + (1));
i__22750__auto___28412 = G__28413;
continue;
} else {
}
break;
}

var G__28410 = args28408.length;
switch (G__28410) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28408.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28415_SHARP_,p2__28416_SHARP_){
return cljs.core.assoc.call(null,p1__28415_SHARP_,cljs.core.get.call(null,p2__28416_SHARP_,key),p2__28416_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__28417){
var map__28420 = p__28417;
var map__28420__$1 = ((((!((map__28420 == null)))?((((map__28420.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28420.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28420):map__28420);
var f_data = map__28420__$1;
var file = cljs.core.get.call(null,map__28420__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28422,files_msg){
var map__28429 = p__28422;
var map__28429__$1 = ((((!((map__28429 == null)))?((((map__28429.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28429.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28429):map__28429);
var opts = map__28429__$1;
var on_cssload = cljs.core.get.call(null,map__28429__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__28431_28435 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__28432_28436 = null;
var count__28433_28437 = (0);
var i__28434_28438 = (0);
while(true){
if((i__28434_28438 < count__28433_28437)){
var f_28439 = cljs.core._nth.call(null,chunk__28432_28436,i__28434_28438);
figwheel.client.file_reloading.reload_css_file.call(null,f_28439);

var G__28440 = seq__28431_28435;
var G__28441 = chunk__28432_28436;
var G__28442 = count__28433_28437;
var G__28443 = (i__28434_28438 + (1));
seq__28431_28435 = G__28440;
chunk__28432_28436 = G__28441;
count__28433_28437 = G__28442;
i__28434_28438 = G__28443;
continue;
} else {
var temp__4657__auto___28444 = cljs.core.seq.call(null,seq__28431_28435);
if(temp__4657__auto___28444){
var seq__28431_28445__$1 = temp__4657__auto___28444;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28431_28445__$1)){
var c__22485__auto___28446 = cljs.core.chunk_first.call(null,seq__28431_28445__$1);
var G__28447 = cljs.core.chunk_rest.call(null,seq__28431_28445__$1);
var G__28448 = c__22485__auto___28446;
var G__28449 = cljs.core.count.call(null,c__22485__auto___28446);
var G__28450 = (0);
seq__28431_28435 = G__28447;
chunk__28432_28436 = G__28448;
count__28433_28437 = G__28449;
i__28434_28438 = G__28450;
continue;
} else {
var f_28451 = cljs.core.first.call(null,seq__28431_28445__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_28451);

var G__28452 = cljs.core.next.call(null,seq__28431_28445__$1);
var G__28453 = null;
var G__28454 = (0);
var G__28455 = (0);
seq__28431_28435 = G__28452;
chunk__28432_28436 = G__28453;
count__28433_28437 = G__28454;
i__28434_28438 = G__28455;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__28429,map__28429__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__28429,map__28429__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map