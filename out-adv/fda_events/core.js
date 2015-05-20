// Compiled by ClojureScript 0.0-3149 {:optimize-constants true, :static-fns true}
goog.provide('fda_events.core');
goog.require('cljs.core');
goog.require('goog.net.XhrIo');
goog.require('sablono.core');
goog.require('rum');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_();
fda_events.core.app_state = (function (){var G__6588 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$query,""], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__6588) : cljs.core.atom.call(null,G__6588));
})();
fda_events.core.query_history = (function (){var G__6589 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__6589) : cljs.core.atom.call(null,G__6589));
})();
fda_events.core.fetch_query_BANG_ = (function() {
var fda_events$core$fetch_query_BANG_ = null;
var fda_events$core$fetch_query_BANG___2 = (function (app,query_map){
return fda_events$core$fetch_query_BANG_.cljs$core$IFn$_invoke$arity$3(app,query_map,(function (resp){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app,cljs.core.assoc,cljs.core.constant$keyword$result,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$result,cljs.core.get.cljs$core$IFn$_invoke$arity$2(resp,"results"),cljs.core.constant$keyword$count,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(resp,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["meta","results","total"], null))], null));
}));
});
var fda_events$core$fetch_query_BANG___3 = (function (app,query_map,cb){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app,cljs.core.assoc,cljs.core.constant$keyword$message,[cljs.core.str("Submitted: "),cljs.core.str(query_map)].join(''));

var url = [cljs.core.str("https://api.fda.gov/drug/event.json?"),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__6601){
var vec__6602 = p__6601;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6602,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6602,(1),null);
return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str(v)].join('');
}),query_map)))].join('');
var temp__4124__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__6603 = fda_events.core.query_history;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__6603) : cljs.core.deref.call(null,G__6603));
})(),query_map);
if(cljs.core.truth_(temp__4124__auto__)){
var history_result = temp__4124__auto__;
var G__6604 = history_result;
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__6604) : cb.call(null,G__6604));
} else {
var G__6605 = url;
var G__6606 = ((function (G__6605,temp__4124__auto__,url){
return (function (xhr_event){
var raw_response = (function (){var G__6607 = xhr_event.target.getResponseText();
return JSON.parse(G__6607);
})();
var resp = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(raw_response);
console.log([cljs.core.str("Response for "),cljs.core.str(url),cljs.core.str(":")].join(''),raw_response);

var G__6608_6609 = resp;
(cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__6608_6609) : cb.call(null,G__6608_6609));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(fda_events.core.query_history,cljs.core.assoc,query_map,resp);
});})(G__6605,temp__4124__auto__,url))
;
return goog.net.XhrIo.send(G__6605,G__6606);
}
});
fda_events$core$fetch_query_BANG_ = function(app,query_map,cb){
switch(arguments.length){
case 2:
return fda_events$core$fetch_query_BANG___2.call(this,app,query_map);
case 3:
return fda_events$core$fetch_query_BANG___3.call(this,app,query_map,cb);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fda_events$core$fetch_query_BANG_.cljs$core$IFn$_invoke$arity$2 = fda_events$core$fetch_query_BANG___2;
fda_events$core$fetch_query_BANG_.cljs$core$IFn$_invoke$arity$3 = fda_events$core$fetch_query_BANG___3;
return fda_events$core$fetch_query_BANG_;
})()
;
fda_events.core.submit_query = (function fda_events$core$submit_query(app,event){
fda_events.core.fetch_query_BANG_.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$search,cljs.core.constant$keyword$query.cljs$core$IFn$_invoke$arity$1((function (){var G__6612 = app;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__6612) : cljs.core.deref.call(null,G__6612));
})())], null));

if(cljs.core.truth_(cljs.core.re_find(/extras/,window.location.search))){
fda_events.core.fetch_query_BANG_.cljs$core$IFn$_invoke$arity$3(app,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$search,cljs.core.constant$keyword$query.cljs$core$IFn$_invoke$arity$1((function (){var G__6613 = app;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__6613) : cljs.core.deref.call(null,G__6613));
})()),cljs.core.constant$keyword$count,"patient.reaction.reactionmeddrapt.exact"], null),(function (resp){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app,cljs.core.assoc,cljs.core.constant$keyword$reactions,cljs.core.get.cljs$core$IFn$_invoke$arity$2(resp,"results"));
}));
} else {
}

return event.preventDefault();
});
var render_fn__6415__auto___6619 = (function (ref,attributes){
var attrs6615 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attributes,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$type,"text",cljs.core.constant$keyword$value,(function (){var G__6616 = ref;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__6616) : cljs.core.deref.call(null,G__6616));
})(),cljs.core.constant$keyword$on_DASH_change,(function (p1__6614_SHARP_){
var G__6617 = ref;
var G__6618 = p1__6614_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__6617,G__6618) : cljs.core.reset_BANG_.call(null,G__6617,G__6618));
})], null)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.interpreter.create_element,"input",((cljs.core.map_QMARK_(attrs6615))?sablono.interpreter.attributes(attrs6615):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs6615))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs6615)], null))));
});
var render_mixin__6416__auto___6620 = rum.render__GT_mixin(render_fn__6415__auto___6619);
var class__6417__auto___6621 = rum.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__6416__auto___6620], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.cursored,rum.cursored_watch], null)),"input");
var ctor__6418__auto___6622 = ((function (render_fn__6415__auto___6619,render_mixin__6416__auto___6620,class__6417__auto___6621){
return (function() { 
var G__6623__delegate = function (args__6419__auto__){
var state__6420__auto__ = rum.args__GT_state(args__6419__auto__);
return rum.element.cljs$core$IFn$_invoke$arity$variadic(class__6417__auto___6621,state__6420__auto__,cljs.core.array_seq([null], 0));
};
var G__6623 = function (var_args){
var args__6419__auto__ = null;
if (arguments.length > 0) {
var G__6624__i = 0, G__6624__a = new Array(arguments.length -  0);
while (G__6624__i < G__6624__a.length) {G__6624__a[G__6624__i] = arguments[G__6624__i + 0]; ++G__6624__i;}
  args__6419__auto__ = new cljs.core.IndexedSeq(G__6624__a,0);
} 
return G__6623__delegate.call(this,args__6419__auto__);};
G__6623.cljs$lang$maxFixedArity = 0;
G__6623.cljs$lang$applyTo = (function (arglist__6625){
var args__6419__auto__ = cljs.core.seq(arglist__6625);
return G__6623__delegate(args__6419__auto__);
});
G__6623.cljs$core$IFn$_invoke$arity$variadic = G__6623__delegate;
return G__6623;
})()
;})(render_fn__6415__auto___6619,render_mixin__6416__auto___6620,class__6417__auto___6621))
;
fda_events.core.input = cljs.core.with_meta(ctor__6418__auto___6622,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$rum_SLASH_class,class__6417__auto___6621], null));
var render_fn__6415__auto___6650 = (function (app){
var G__6629 = "form";
var G__6630 = {"onSubmit": ((function (G__6629){
return (function (p1__6626_SHARP_){
return fda_events.core.submit_query(app,p1__6626_SHARP_);
});})(G__6629))
};
var G__6631 = (function (){var G__6632 = "div";
var G__6633 = {"className": "row"};
var G__6634 = (function (){var G__6635 = "div";
var G__6636 = {"className": "small-8"};
var G__6637 = (function (){var G__6638 = "div";
var G__6639 = {"className": "row"};
var G__6640 = (function (){var attrs6628 = (function (){var G__6642 = rum.cursor(app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$query], null));
var G__6643 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$type,"text",cljs.core.constant$keyword$id,"query",cljs.core.constant$keyword$placeholder,"Query",cljs.core.constant$keyword$className,"radius",cljs.core.constant$keyword$autoFocus,true], null);
return (fda_events.core.input.cljs$core$IFn$_invoke$arity$2 ? fda_events.core.input.cljs$core$IFn$_invoke$arity$2(G__6642,G__6643) : fda_events.core.input.call(null,G__6642,G__6643));
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs6628))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["small-9","columns"], null)], null),attrs6628], 0))):{"className": "small-9 columns"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs6628))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs6628)], null))));
})();
var G__6641 = (function (){var G__6644 = "div";
var G__6645 = {"className": "small-3 columns"};
var G__6646 = (function (){var G__6647 = "a";
var G__6648 = {"className": "button small radius", "href": "#", "onClick": ((function (G__6647,G__6644,G__6645,G__6638,G__6639,G__6640,G__6635,G__6636,G__6632,G__6633,G__6629,G__6630){
return (function (p1__6627_SHARP_){
return fda_events.core.submit_query(app,p1__6627_SHARP_);
});})(G__6647,G__6644,G__6645,G__6638,G__6639,G__6640,G__6635,G__6636,G__6632,G__6633,G__6629,G__6630))
};
var G__6649 = "Search";
return React.createElement(G__6647,G__6648,G__6649);
})();
return React.createElement(G__6644,G__6645,G__6646);
})();
return React.createElement(G__6638,G__6639,G__6640,G__6641);
})();
return React.createElement(G__6635,G__6636,G__6637);
})();
return React.createElement(G__6632,G__6633,G__6634);
})();
return React.createElement(G__6629,G__6630,G__6631);
});
var render_mixin__6416__auto___6651 = rum.render__GT_mixin(render_fn__6415__auto___6650);
var class__6417__auto___6652 = rum.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__6416__auto___6651], null),null),"query-form");
var ctor__6418__auto___6653 = ((function (render_fn__6415__auto___6650,render_mixin__6416__auto___6651,class__6417__auto___6652){
return (function() { 
var G__6654__delegate = function (args__6419__auto__){
var state__6420__auto__ = rum.args__GT_state(args__6419__auto__);
return rum.element.cljs$core$IFn$_invoke$arity$variadic(class__6417__auto___6652,state__6420__auto__,cljs.core.array_seq([null], 0));
};
var G__6654 = function (var_args){
var args__6419__auto__ = null;
if (arguments.length > 0) {
var G__6655__i = 0, G__6655__a = new Array(arguments.length -  0);
while (G__6655__i < G__6655__a.length) {G__6655__a[G__6655__i] = arguments[G__6655__i + 0]; ++G__6655__i;}
  args__6419__auto__ = new cljs.core.IndexedSeq(G__6655__a,0);
} 
return G__6654__delegate.call(this,args__6419__auto__);};
G__6654.cljs$lang$maxFixedArity = 0;
G__6654.cljs$lang$applyTo = (function (arglist__6656){
var args__6419__auto__ = cljs.core.seq(arglist__6656);
return G__6654__delegate(args__6419__auto__);
});
G__6654.cljs$core$IFn$_invoke$arity$variadic = G__6654__delegate;
return G__6654;
})()
;})(render_fn__6415__auto___6650,render_mixin__6416__auto___6651,class__6417__auto___6652))
;
fda_events.core.query_form = cljs.core.with_meta(ctor__6418__auto___6653,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$rum_SLASH_class,class__6417__auto___6652], null));
fda_events.core.count_query = (function fda_events$core$count_query(app,tree_location,event){
fda_events.core.fetch_query_BANG_.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$search,cljs.core.constant$keyword$query.cljs$core$IFn$_invoke$arity$1((function (){var G__6658 = app;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__6658) : cljs.core.deref.call(null,G__6658));
})()),cljs.core.constant$keyword$count,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tree_location,"exact"))], null));

return event.preventDefault();
});
fda_events.core.query_this_value = (function fda_events$core$query_this_value(app,tree_location,value,event){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app,cljs.core.assoc,cljs.core.constant$keyword$query,[cljs.core.str(cljs.core.constant$keyword$query.cljs$core$IFn$_invoke$arity$1((function (){var G__6661 = app;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__6661) : cljs.core.deref.call(null,G__6661));
})())),cljs.core.str(" AND "),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",tree_location)),cljs.core.str(":"),cljs.core.str(value)].join(''));

fda_events.core.fetch_query_BANG_.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$search,cljs.core.constant$keyword$query.cljs$core$IFn$_invoke$arity$1((function (){var G__6662 = app;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__6662) : cljs.core.deref.call(null,G__6662));
})())], null));

return event.preventDefault();
});
fda_events.core.render_node = (function fda_events$core$render_node(app,value,tree_location){
if((cljs.core.vector_QMARK_(value)) && (cljs.core.every_QMARK_(cljs.core.map_QMARK_,value))){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__6663_SHARP_,p2__6664_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(TreeView,{"nodeLabel": [cljs.core.str("Array "),cljs.core.str(p1__6663_SHARP_)].join('')},fda_events$core$render_node(app,p2__6664_SHARP_,tree_location));
}),value);
} else {
if(cljs.core.vector_QMARK_(value)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__6665_SHARP_){
var attrs6677 = p1__6665_SHARP_;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs6677))?sablono.interpreter.attributes(attrs6677):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs6677))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs6677)], null))));
}),value);
} else {
if(cljs.core.map_QMARK_(value)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__6678){
var vec__6679 = p__6678;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6679,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6679,(1),null);
if((cljs.core.map_QMARK_(v)) || (cljs.core.vector_QMARK_(v))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(TreeView,{"defaultCollapsed": true, "nodeLabel": cljs.core.name(k)},fda_events$core$render_node(app,v,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tree_location,k)));
} else {
return sablono.interpreter.interpret(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,cljs.core.constant$keyword$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$span,[cljs.core.str(cljs.core.name(k)),cljs.core.str(": "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v], 0)))].join('')], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [" [",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$href,"#",cljs.core.constant$keyword$onClick,((function (vec__6679,k,v){
return (function (p1__6666_SHARP_){
return fda_events.core.count_query(app,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tree_location,k),p1__6666_SHARP_);
});})(vec__6679,k,v))
], null),"Counts"], null)," | ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$href,"#",cljs.core.constant$keyword$onClick,((function (vec__6679,k,v){
return (function (p1__6667_SHARP_){
return fda_events.core.query_this_value(app,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tree_location,k),v,p1__6667_SHARP_);
});})(vec__6679,k,v))
], null),"Query this value"], null),"]"], null)));
}
}),value);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))], null);

}
}
}
});
fda_events.core.history_query = (function fda_events$core$history_query(app,query_map,event){
fda_events.core.fetch_query_BANG_.cljs$core$IFn$_invoke$arity$2(app,query_map);

return event.preventDefault();
});
var render_fn__6415__auto___6687 = (function (app){
return sablono.interpreter.interpret((function (){var map__6683 = rum.react(app);
var map__6683__$1 = ((cljs.core.seq_QMARK_(map__6683))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6683):map__6683);
var reactions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6683__$1,cljs.core.constant$keyword$reactions);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6683__$1,cljs.core.constant$keyword$result);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6683__$1,cljs.core.constant$keyword$message);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h2,"Search FDA Events!"], null),(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$alert_DASH_box$radius$small_DASH_6$columns$success,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$data_DASH_alert,true], null),message], null):null),(function (){var G__6684 = app;
return (fda_events.core.query_form.cljs$core$IFn$_invoke$arity$1 ? fda_events.core.query_form.cljs$core$IFn$_invoke$arity$1(G__6684) : fda_events.core.query_form.call(null,G__6684));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$$row,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$$large_DASH_9$columns,(cljs.core.truth_(result)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h5,"Results"], null):null),(cljs.core.truth_(result)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$pre$panel$radius,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,[cljs.core.str("Count: "),cljs.core.str(cljs.core.constant$keyword$count.cljs$core$IFn$_invoke$arity$1(result))].join('')], null),fda_events.core.render_node(app,cljs.core.constant$keyword$result.cljs$core$IFn$_invoke$arity$1(result),cljs.core.PersistentVector.EMPTY)], null):null),((cljs.core.seq(reactions))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h5,"Reactions"], null),(function (){var max_count = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__6683,map__6683__$1,reactions,result,message){
return (function (p1__6680_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__6680_SHARP_,"count");
});})(map__6683,map__6683__$1,reactions,result,message))
,reactions));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (max_count,map__6683,map__6683__$1,reactions,result,message){
return (function (p1__6681_SHARP_){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$meter,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$value,cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__6681_SHARP_,"count"),cljs.core.constant$keyword$max,max_count], null)], null),[cljs.core.str(" "),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__6681_SHARP_,"count")),cljs.core.str(" - "),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__6681_SHARP_,"term"))].join('')],null));
});})(max_count,map__6683,map__6683__$1,reactions,result,message))
,reactions);
})()], null):null)], null),((cljs.core.seq((function (){var G__6685 = fda_events.core.query_history;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__6685) : cljs.core.deref.call(null,G__6685));
})()))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$aside$large_DASH_3$columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h5,"History"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ul$panel$side_DASH_nav,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__6683,map__6683__$1,reactions,result,message){
return (function (p1__6682_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$href,"#",cljs.core.constant$keyword$onClick,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(fda_events.core.history_query,app,cljs.core.key(p1__6682_SHARP_))], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.key(p1__6682_SHARP_)], 0))], null)],null));
});})(map__6683,map__6683__$1,reactions,result,message))
,(function (){var G__6686 = fda_events.core.query_history;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__6686) : cljs.core.deref.call(null,G__6686));
})())], null)], null):null)], null)], null);
})());
});
var render_mixin__6416__auto___6688 = rum.render__GT_mixin(render_fn__6415__auto___6687);
var class__6417__auto___6689 = rum.build_class(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__6416__auto___6688], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.reactive], null)),"fda-event-app");
var ctor__6418__auto___6690 = ((function (render_fn__6415__auto___6687,render_mixin__6416__auto___6688,class__6417__auto___6689){
return (function() { 
var G__6691__delegate = function (args__6419__auto__){
var state__6420__auto__ = rum.args__GT_state(args__6419__auto__);
return rum.element.cljs$core$IFn$_invoke$arity$variadic(class__6417__auto___6689,state__6420__auto__,cljs.core.array_seq([null], 0));
};
var G__6691 = function (var_args){
var args__6419__auto__ = null;
if (arguments.length > 0) {
var G__6692__i = 0, G__6692__a = new Array(arguments.length -  0);
while (G__6692__i < G__6692__a.length) {G__6692__a[G__6692__i] = arguments[G__6692__i + 0]; ++G__6692__i;}
  args__6419__auto__ = new cljs.core.IndexedSeq(G__6692__a,0);
} 
return G__6691__delegate.call(this,args__6419__auto__);};
G__6691.cljs$lang$maxFixedArity = 0;
G__6691.cljs$lang$applyTo = (function (arglist__6693){
var args__6419__auto__ = cljs.core.seq(arglist__6693);
return G__6691__delegate(args__6419__auto__);
});
G__6691.cljs$core$IFn$_invoke$arity$variadic = G__6691__delegate;
return G__6691;
})()
;})(render_fn__6415__auto___6687,render_mixin__6416__auto___6688,class__6417__auto___6689))
;
fda_events.core.fda_event_app = cljs.core.with_meta(ctor__6418__auto___6690,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$rum_SLASH_class,class__6417__auto___6689], null));
rum.mount((function (){var G__6694 = fda_events.core.app_state;
return (fda_events.core.fda_event_app.cljs$core$IFn$_invoke$arity$1 ? fda_events.core.fda_event_app.cljs$core$IFn$_invoke$arity$1(G__6694) : fda_events.core.fda_event_app.call(null,G__6694));
})(),document.getElementById("app"));
