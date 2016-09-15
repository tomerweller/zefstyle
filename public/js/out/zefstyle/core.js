// Compiled by ClojureScript 1.9.36 {}
goog.provide('zefstyle.core');
goog.require('cljs.core');
goog.require('reagent.core');
zefstyle.core.home_page = (function zefstyle$core$home_page(){
var react_player = (window["deps"]["react-player"]);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Zef Style"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),react_player,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),"https://youtu.be/uMK0prafzw0"], null)], null)], null);
});
zefstyle.core.mount_root = (function zefstyle$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zefstyle.core.home_page], null),document.getElementById("app"));
});
zefstyle.core.init_BANG_ = (function zefstyle$core$init_BANG_(){
return zefstyle.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map