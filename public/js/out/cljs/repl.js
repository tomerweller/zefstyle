// Compiled by ClojureScript 1.9.36 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29655){
var map__29680 = p__29655;
var map__29680__$1 = ((((!((map__29680 == null)))?((((map__29680.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29680.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29680):map__29680);
var m = map__29680__$1;
var n = cljs.core.get.call(null,map__29680__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__29680__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29682_29704 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29683_29705 = null;
var count__29684_29706 = (0);
var i__29685_29707 = (0);
while(true){
if((i__29685_29707 < count__29684_29706)){
var f_29708 = cljs.core._nth.call(null,chunk__29683_29705,i__29685_29707);
cljs.core.println.call(null,"  ",f_29708);

var G__29709 = seq__29682_29704;
var G__29710 = chunk__29683_29705;
var G__29711 = count__29684_29706;
var G__29712 = (i__29685_29707 + (1));
seq__29682_29704 = G__29709;
chunk__29683_29705 = G__29710;
count__29684_29706 = G__29711;
i__29685_29707 = G__29712;
continue;
} else {
var temp__4657__auto___29713 = cljs.core.seq.call(null,seq__29682_29704);
if(temp__4657__auto___29713){
var seq__29682_29714__$1 = temp__4657__auto___29713;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29682_29714__$1)){
var c__22485__auto___29715 = cljs.core.chunk_first.call(null,seq__29682_29714__$1);
var G__29716 = cljs.core.chunk_rest.call(null,seq__29682_29714__$1);
var G__29717 = c__22485__auto___29715;
var G__29718 = cljs.core.count.call(null,c__22485__auto___29715);
var G__29719 = (0);
seq__29682_29704 = G__29716;
chunk__29683_29705 = G__29717;
count__29684_29706 = G__29718;
i__29685_29707 = G__29719;
continue;
} else {
var f_29720 = cljs.core.first.call(null,seq__29682_29714__$1);
cljs.core.println.call(null,"  ",f_29720);

var G__29721 = cljs.core.next.call(null,seq__29682_29714__$1);
var G__29722 = null;
var G__29723 = (0);
var G__29724 = (0);
seq__29682_29704 = G__29721;
chunk__29683_29705 = G__29722;
count__29684_29706 = G__29723;
i__29685_29707 = G__29724;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29725 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__21674__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__21674__auto__)){
return or__21674__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29725);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29725)))?cljs.core.second.call(null,arglists_29725):arglists_29725));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29686_29726 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29687_29727 = null;
var count__29688_29728 = (0);
var i__29689_29729 = (0);
while(true){
if((i__29689_29729 < count__29688_29728)){
var vec__29690_29730 = cljs.core._nth.call(null,chunk__29687_29727,i__29689_29729);
var name_29731 = cljs.core.nth.call(null,vec__29690_29730,(0),null);
var map__29693_29732 = cljs.core.nth.call(null,vec__29690_29730,(1),null);
var map__29693_29733__$1 = ((((!((map__29693_29732 == null)))?((((map__29693_29732.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29693_29732.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29693_29732):map__29693_29732);
var doc_29734 = cljs.core.get.call(null,map__29693_29733__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29735 = cljs.core.get.call(null,map__29693_29733__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29731);

cljs.core.println.call(null," ",arglists_29735);

if(cljs.core.truth_(doc_29734)){
cljs.core.println.call(null," ",doc_29734);
} else {
}

var G__29736 = seq__29686_29726;
var G__29737 = chunk__29687_29727;
var G__29738 = count__29688_29728;
var G__29739 = (i__29689_29729 + (1));
seq__29686_29726 = G__29736;
chunk__29687_29727 = G__29737;
count__29688_29728 = G__29738;
i__29689_29729 = G__29739;
continue;
} else {
var temp__4657__auto___29740 = cljs.core.seq.call(null,seq__29686_29726);
if(temp__4657__auto___29740){
var seq__29686_29741__$1 = temp__4657__auto___29740;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29686_29741__$1)){
var c__22485__auto___29742 = cljs.core.chunk_first.call(null,seq__29686_29741__$1);
var G__29743 = cljs.core.chunk_rest.call(null,seq__29686_29741__$1);
var G__29744 = c__22485__auto___29742;
var G__29745 = cljs.core.count.call(null,c__22485__auto___29742);
var G__29746 = (0);
seq__29686_29726 = G__29743;
chunk__29687_29727 = G__29744;
count__29688_29728 = G__29745;
i__29689_29729 = G__29746;
continue;
} else {
var vec__29695_29747 = cljs.core.first.call(null,seq__29686_29741__$1);
var name_29748 = cljs.core.nth.call(null,vec__29695_29747,(0),null);
var map__29698_29749 = cljs.core.nth.call(null,vec__29695_29747,(1),null);
var map__29698_29750__$1 = ((((!((map__29698_29749 == null)))?((((map__29698_29749.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29698_29749.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29698_29749):map__29698_29749);
var doc_29751 = cljs.core.get.call(null,map__29698_29750__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29752 = cljs.core.get.call(null,map__29698_29750__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29748);

cljs.core.println.call(null," ",arglists_29752);

if(cljs.core.truth_(doc_29751)){
cljs.core.println.call(null," ",doc_29751);
} else {
}

var G__29753 = cljs.core.next.call(null,seq__29686_29741__$1);
var G__29754 = null;
var G__29755 = (0);
var G__29756 = (0);
seq__29686_29726 = G__29753;
chunk__29687_29727 = G__29754;
count__29688_29728 = G__29755;
i__29689_29729 = G__29756;
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
var specs = cljs.spec.fn_specs.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,cljs.core.vals.call(null,specs)))){
cljs.core.print.call(null,"Spec");

return cljs.core.run_BANG_.call(null,((function (specs,map__29680,map__29680__$1,m,n,nm){
return (function (p__29700){
var vec__29701 = p__29700;
var role = cljs.core.nth.call(null,vec__29701,(0),null);
var spec = cljs.core.nth.call(null,vec__29701,(1),null);
if(cljs.core.truth_((function (){var and__21662__auto__ = spec;
if(cljs.core.truth_(and__21662__auto__)){
return !(cljs.core._EQ_.call(null,spec,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582)));
} else {
return and__21662__auto__;
}
})())){
return cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec));
} else {
return null;
}
});})(specs,map__29680,map__29680__$1,m,n,nm))
,specs);
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map