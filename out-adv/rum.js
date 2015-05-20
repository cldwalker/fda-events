// Compiled by ClojureScript 0.0-3149 {:optimize-constants true, :static-fns true}
goog.provide('rum');
goog.require('cljs.core');
goog.require('sablono.core');
cljs.core.enable_console_print_BANG_();
var last_id_6697 = cljs.core.volatile_BANG_((0));
rum.next_id = ((function (last_id_6697){
return (function rum$next_id(){
return last_id_6697.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(last_id_6697.cljs$core$IDeref$_deref$arity$1(null) + (1)));
});})(last_id_6697))
;
rum.state = (function rum$state(comp){
return (comp.props[":rum/state"]);
});
rum.id = (function rum$id(comp){
return cljs.core.constant$keyword$rum_SLASH_id.cljs$core$IFn$_invoke$arity$1((function (){var G__6699 = rum.state(comp);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__6699) : cljs.core.deref.call(null,G__6699));
})());
});
rum.fns = (function rum$fns(fn_key,classes){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(fn_key,classes));
});
/**
 * @param {...*} var_args
 */
rum.call_all = (function() { 
var rum$call_all__delegate = function (state,fns,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state__$1,fn){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(fn,state__$1,args);
}),state,fns);
};
var rum$call_all = function (state,fns,var_args){
var args = null;
if (arguments.length > 2) {
var G__6700__i = 0, G__6700__a = new Array(arguments.length -  2);
while (G__6700__i < G__6700__a.length) {G__6700__a[G__6700__i] = arguments[G__6700__i + 2]; ++G__6700__i;}
  args = new cljs.core.IndexedSeq(G__6700__a,0);
} 
return rum$call_all__delegate.call(this,state,fns,args);};
rum$call_all.cljs$lang$maxFixedArity = 2;
rum$call_all.cljs$lang$applyTo = (function (arglist__6701){
var state = cljs.core.first(arglist__6701);
arglist__6701 = cljs.core.next(arglist__6701);
var fns = cljs.core.first(arglist__6701);
var args = cljs.core.rest(arglist__6701);
return rum$call_all__delegate(state,fns,args);
});
rum$call_all.cljs$core$IFn$_invoke$arity$variadic = rum$call_all__delegate;
return rum$call_all;
})()
;
rum.build_class = (function rum$build_class(classes,display_name){
var init = rum.fns(cljs.core.constant$keyword$init,classes);
var will_mount = rum.fns(cljs.core.constant$keyword$will_DASH_mount,classes);
var did_mount = rum.fns(cljs.core.constant$keyword$did_DASH_mount,classes);
var transfer_state = rum.fns(cljs.core.constant$keyword$transfer_DASH_state,classes);
var should_update = rum.fns(cljs.core.constant$keyword$should_DASH_update,classes);
var will_update = rum.fns(cljs.core.constant$keyword$will_DASH_update,classes);
var render = cljs.core.first(rum.fns(cljs.core.constant$keyword$render,classes));
var wrapped_render = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render){
return (function (p1__6703_SHARP_,p2__6702_SHARP_){
var G__6721 = p1__6703_SHARP_;
return (p2__6702_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__6702_SHARP_.cljs$core$IFn$_invoke$arity$1(G__6721) : p2__6702_SHARP_.call(null,G__6721));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render))
,render,rum.fns(cljs.core.constant$keyword$wrap_DASH_render,classes));
var did_update = rum.fns(cljs.core.constant$keyword$did_DASH_update,classes);
var will_unmount = rum.fns(cljs.core.constant$keyword$will_DASH_unmount,classes);
var props__GT_state = ((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount){
return (function (props){
return rum.call_all.cljs$core$IFn$_invoke$arity$variadic((props[":rum/state"]),init,cljs.core.array_seq([props], 0));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount))
;
var G__6722 = {"componentDidUpdate": ((cljs.core.empty_QMARK_(did_update))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state){
return (function (_,___$1){
var this$ = this;
return cljs.core._vreset_BANG_(rum.state(this$),rum.call_all(cljs.core._deref(rum.state(this$)),did_update));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state))
), "displayName": display_name, "componentWillUnmount": ((cljs.core.empty_QMARK_(will_unmount))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.state(this$),rum.call_all(cljs.core._deref(rum.state(this$)),will_unmount));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state))
), "componentWillReceiveProps": ((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state){
return (function (next_props){
var this$ = this;
var old_state = (function (){var G__6723 = rum.state(this$);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__6723) : cljs.core.deref.call(null,G__6723));
})();
var next_state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$rum_SLASH_react_DASH_component,this$,cljs.core.constant$keyword$rum_SLASH_id,cljs.core.constant$keyword$rum_SLASH_id.cljs$core$IFn$_invoke$arity$1(old_state)], null),props__GT_state(next_props)], 0));
var next_state__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (old_state,next_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state){
return (function (p1__6705_SHARP_,p2__6704_SHARP_){
var G__6724 = old_state;
var G__6725 = p1__6705_SHARP_;
return (p2__6704_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p2__6704_SHARP_.cljs$core$IFn$_invoke$arity$2(G__6724,G__6725) : p2__6704_SHARP_.call(null,G__6724,G__6725));
});})(old_state,next_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state))
,next_state,transfer_state);
return (next_props[":rum/state"] = cljs.core.volatile_BANG_(next_state__$1));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state))
, "shouldComponentUpdate": ((cljs.core.empty_QMARK_(should_update))?cljs.core.constantly(true):((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state){
return (function (next_props,_){
var this$ = this;
var old_state = (function (){var G__6726 = rum.state(this$);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__6726) : cljs.core.deref.call(null,G__6726));
})();
var new_state = (function (){var G__6727 = (next_props[":rum/state"]);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__6727) : cljs.core.deref.call(null,G__6727));
})();
var or__3935__auto__ = cljs.core.some(((function (old_state,new_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state){
return (function (p1__6706_SHARP_){
var G__6730 = old_state;
var G__6731 = new_state;
return (p1__6706_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__6706_SHARP_.cljs$core$IFn$_invoke$arity$2(G__6730,G__6731) : p1__6706_SHARP_.call(null,G__6730,G__6731));
});})(old_state,new_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state))
,should_update);
if(cljs.core.truth_(or__3935__auto__)){
return or__3935__auto__;
} else {
return false;
}
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state))
), "render": ((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state){
return (function (){
var this$ = this;
var state = rum.state(this$);
var vec__6732 = (function (){var G__6733 = (function (){var G__6734 = state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__6734) : cljs.core.deref.call(null,G__6734));
})();
return (wrapped_render.cljs$core$IFn$_invoke$arity$1 ? wrapped_render.cljs$core$IFn$_invoke$arity$1(G__6733) : wrapped_render.call(null,G__6733));
})();
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6732,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6732,(1),null);
cljs.core.vreset_BANG_(state,next_state);

return dom;
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state))
, "componentWillUpdate": ((cljs.core.empty_QMARK_(will_update))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state){
return (function (next_props,_){
var this$ = this;
var new_state = (next_props[":rum/state"]);
return cljs.core._vreset_BANG_(new_state,rum.call_all(cljs.core._deref(new_state),will_update));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state))
), "getInitialState": ((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state){
return (function (){
var this$ = this;
var props = this$.props;
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$rum_SLASH_react_DASH_component,this$,cljs.core.constant$keyword$rum_SLASH_id,rum.next_id()], null),props__GT_state(props)], 0));
return (props[":rum/state"] = cljs.core.volatile_BANG_(state));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state))
, "componentDidMount": ((cljs.core.empty_QMARK_(did_mount))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.state(this$),rum.call_all(cljs.core._deref(rum.state(this$)),did_mount));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state))
), "componentWillMount": ((cljs.core.empty_QMARK_(will_mount))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.state(this$),rum.call_all(cljs.core._deref(rum.state(this$)),will_mount));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state))
)};
return React.createClass(G__6722);
});
rum.schedule = (function (){var and__3927__auto__ = typeof window !== 'undefined';
if(and__3927__auto__){
var or__3935__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__3935__auto__)){
return or__3935__auto__;
} else {
var or__3935__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__3935__auto____$1)){
return or__3935__auto____$1;
} else {
var or__3935__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__3935__auto____$2)){
return or__3935__auto____$2;
} else {
var or__3935__auto____$3 = window.msRequestAnimationFrame;
if(cljs.core.truth_(or__3935__auto____$3)){
return or__3935__auto____$3;
} else {
return ((function (or__3935__auto____$3,or__3935__auto____$2,or__3935__auto____$1,or__3935__auto__,and__3927__auto__){
return (function (p1__6735_SHARP_){
var G__6738 = p1__6735_SHARP_;
var G__6739 = (16);
return setTimeout(G__6738,G__6739);
});
;})(or__3935__auto____$3,or__3935__auto____$2,or__3935__auto____$1,or__3935__auto__,and__3927__auto__))
}
}
}
}
} else {
return and__3927__auto__;
}
})();
rum.compare_by = (function rum$compare_by(keyfn){
return (function (x,y){
return cljs.core.compare((function (){var G__6742 = x;
return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__6742) : keyfn.call(null,G__6742));
})(),(function (){var G__6743 = y;
return (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(G__6743) : keyfn.call(null,G__6743));
})());
});
});
rum.empty_queue = cljs.core.sorted_set_by(rum.compare_by(rum.id));
rum.render_queue = cljs.core.volatile_BANG_(rum.empty_queue);
rum.render = (function rum$render(){
var queue = (function (){var G__6751 = rum.render_queue;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__6751) : cljs.core.deref.call(null,G__6751));
})();
cljs.core.vreset_BANG_(rum.render_queue,rum.empty_queue);

var seq__6752 = cljs.core.seq(queue);
var chunk__6754 = null;
var count__6755 = (0);
var i__6756 = (0);
while(true){
if((i__6756 < count__6755)){
var comp = chunk__6754.cljs$core$IIndexed$_nth$arity$2(null,i__6756);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__6758 = seq__6752;
var G__6759 = chunk__6754;
var G__6760 = count__6755;
var G__6761 = (i__6756 + (1));
seq__6752 = G__6758;
chunk__6754 = G__6759;
count__6755 = G__6760;
i__6756 = G__6761;
continue;
} else {
var G__6762 = seq__6752;
var G__6763 = chunk__6754;
var G__6764 = count__6755;
var G__6765 = (i__6756 + (1));
seq__6752 = G__6762;
chunk__6754 = G__6763;
count__6755 = G__6764;
i__6756 = G__6765;
continue;
}
} else {
var temp__4126__auto__ = cljs.core.seq(seq__6752);
if(temp__4126__auto__){
var seq__6752__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6752__$1)){
var c__4304__auto__ = cljs.core.chunk_first(seq__6752__$1);
var G__6766 = cljs.core.chunk_rest(seq__6752__$1);
var G__6767 = c__4304__auto__;
var G__6768 = cljs.core.count(c__4304__auto__);
var G__6769 = (0);
seq__6752 = G__6766;
chunk__6754 = G__6767;
count__6755 = G__6768;
i__6756 = G__6769;
continue;
} else {
var comp = cljs.core.first(seq__6752__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__6770 = cljs.core.next(seq__6752__$1);
var G__6771 = null;
var G__6772 = (0);
var G__6773 = (0);
seq__6752 = G__6770;
chunk__6754 = G__6771;
count__6755 = G__6772;
i__6756 = G__6773;
continue;
} else {
var G__6774 = cljs.core.next(seq__6752__$1);
var G__6775 = null;
var G__6776 = (0);
var G__6777 = (0);
seq__6752 = G__6774;
chunk__6754 = G__6775;
count__6755 = G__6776;
i__6756 = G__6777;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.request_render = (function rum$request_render(component){
if(cljs.core.empty_QMARK_((function (){var G__6780 = rum.render_queue;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__6780) : cljs.core.deref.call(null,G__6780));
})())){
var G__6781_6782 = rum.render;
(rum.schedule.cljs$core$IFn$_invoke$arity$1 ? rum.schedule.cljs$core$IFn$_invoke$arity$1(G__6781_6782) : rum.schedule.call(null,G__6781_6782));
} else {
}

return cljs.core._vreset_BANG_(rum.render_queue,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(rum.render_queue),component));
});
rum.mount = (function rum$mount(component,node){
var G__6785 = component;
var G__6786 = node;
return React.render(G__6785,G__6786);
});
rum.render__GT_mixin = (function rum$render__GT_mixin(render_fn){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$render,(function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn,cljs.core.constant$keyword$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)),state], null);
})], null);
});
rum.render_state__GT_mixin = (function rum$render_state__GT_mixin(render_fn){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$render,(function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(render_fn,state,cljs.core.constant$keyword$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)),state], null);
})], null);
});
rum.args__GT_state = (function rum$args__GT_state(args){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$rum_SLASH_args,args], null);
});
/**
 * @param {...*} var_args
 */
rum.element = (function() { 
var rum$element__delegate = function (class$,state,p__6787){
var vec__6791 = p__6787;
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6791,(0),null);
var props__$1 = (function (){var or__3935__auto__ = props;
if(cljs.core.truth_(or__3935__auto__)){
return or__3935__auto__;
} else {
return {};
}
})();
(props__$1[":rum/state"] = state);

var G__6792 = class$;
var G__6793 = props__$1;
return React.createElement(G__6792,G__6793);
};
var rum$element = function (class$,state,var_args){
var p__6787 = null;
if (arguments.length > 2) {
var G__6794__i = 0, G__6794__a = new Array(arguments.length -  2);
while (G__6794__i < G__6794__a.length) {G__6794__a[G__6794__i] = arguments[G__6794__i + 2]; ++G__6794__i;}
  p__6787 = new cljs.core.IndexedSeq(G__6794__a,0);
} 
return rum$element__delegate.call(this,class$,state,p__6787);};
rum$element.cljs$lang$maxFixedArity = 2;
rum$element.cljs$lang$applyTo = (function (arglist__6795){
var class$ = cljs.core.first(arglist__6795);
arglist__6795 = cljs.core.next(arglist__6795);
var state = cljs.core.first(arglist__6795);
var p__6787 = cljs.core.rest(arglist__6795);
return rum$element__delegate(class$,state,p__6787);
});
rum$element.cljs$core$IFn$_invoke$arity$variadic = rum$element__delegate;
return rum$element;
})()
;
rum.ctor__GT_class = (function rum$ctor__GT_class(ctor){
return cljs.core.constant$keyword$rum_SLASH_class.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(ctor));
});
rum.static$ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$should_DASH_update,(function (old_state,new_state){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(old_state),cljs.core.constant$keyword$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Adds an atom to component’s state that can be used as local state.
 * Atom is stored under key `:rum/local`.
 * Component will be automatically re-rendered if atom’s value changes
 * @param {...*} var_args
 */
rum.local = (function() { 
var rum$local__delegate = function (initial,p__6796){
var vec__6800 = p__6796;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6800,(0),null);
var key__$1 = (function (){var or__3935__auto__ = key;
if(cljs.core.truth_(or__3935__auto__)){
return or__3935__auto__;
} else {
return cljs.core.constant$keyword$rum_SLASH_local;
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$transfer_DASH_state,((function (key__$1,vec__6800,key){
return (function (old,new$){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new$,key__$1,(function (){var G__6801 = key__$1;
return (old.cljs$core$IFn$_invoke$arity$1 ? old.cljs$core$IFn$_invoke$arity$1(G__6801) : old.call(null,G__6801));
})());
});})(key__$1,vec__6800,key))
,cljs.core.constant$keyword$will_DASH_mount,((function (key__$1,vec__6800,key){
return (function (state){
var local_state = (function (){var G__6802 = initial;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__6802) : cljs.core.atom.call(null,G__6802));
})();
var component = cljs.core.constant$keyword$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch(local_state,key__$1,((function (local_state,component,key__$1,vec__6800,key){
return (function (_,___$1,___$2,___$3){
return rum.request_render(component);
});})(local_state,component,key__$1,vec__6800,key))
);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,key__$1,local_state);
});})(key__$1,vec__6800,key))
], null);
};
var rum$local = function (initial,var_args){
var p__6796 = null;
if (arguments.length > 1) {
var G__6803__i = 0, G__6803__a = new Array(arguments.length -  1);
while (G__6803__i < G__6803__a.length) {G__6803__a[G__6803__i] = arguments[G__6803__i + 1]; ++G__6803__i;}
  p__6796 = new cljs.core.IndexedSeq(G__6803__a,0);
} 
return rum$local__delegate.call(this,initial,p__6796);};
rum$local.cljs$lang$maxFixedArity = 1;
rum$local.cljs$lang$applyTo = (function (arglist__6804){
var initial = cljs.core.first(arglist__6804);
var p__6796 = cljs.core.rest(arglist__6804);
return rum$local__delegate(initial,p__6796);
});
rum$local.cljs$core$IFn$_invoke$arity$variadic = rum$local__delegate;
return rum$local;
})()
;
rum.reactive_key = (function rum$reactive_key(state){
return [cljs.core.str(":rum/reactive-"),cljs.core.str(cljs.core.constant$keyword$rum_SLASH_id.cljs$core$IFn$_invoke$arity$1(state))].join('');
});
rum.reactive = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$transfer_DASH_state,(function (old,new$){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new$,cljs.core.constant$keyword$rum_SLASH_refs,cljs.core.constant$keyword$rum_SLASH_refs.cljs$core$IFn$_invoke$arity$1(old));
}),cljs.core.constant$keyword$wrap_DASH_render,(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_6805 = rum._STAR_reactions_STAR_;
rum._STAR_reactions_STAR_ = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);

try{var comp = cljs.core.constant$keyword$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = cljs.core.constant$keyword$rum_SLASH_refs.cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__6806 = (function (){var G__6807 = state;
return (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(G__6807) : render_fn.call(null,G__6807));
})();
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6806,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6806,(1),null);
var new_reactions = (function (){var G__6808 = rum._STAR_reactions_STAR_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__6808) : cljs.core.deref.call(null,G__6808));
})();
var key = rum.reactive_key(state);
var seq__6809_6821 = cljs.core.seq(old_reactions);
var chunk__6810_6822 = null;
var count__6811_6823 = (0);
var i__6812_6824 = (0);
while(true){
if((i__6812_6824 < count__6811_6823)){
var ref_6825 = chunk__6810_6822.cljs$core$IIndexed$_nth$arity$2(null,i__6812_6824);
if(cljs.core.contains_QMARK_(new_reactions,ref_6825)){
} else {
cljs.core.remove_watch(ref_6825,key);
}

var G__6826 = seq__6809_6821;
var G__6827 = chunk__6810_6822;
var G__6828 = count__6811_6823;
var G__6829 = (i__6812_6824 + (1));
seq__6809_6821 = G__6826;
chunk__6810_6822 = G__6827;
count__6811_6823 = G__6828;
i__6812_6824 = G__6829;
continue;
} else {
var temp__4126__auto___6830 = cljs.core.seq(seq__6809_6821);
if(temp__4126__auto___6830){
var seq__6809_6831__$1 = temp__4126__auto___6830;
if(cljs.core.chunked_seq_QMARK_(seq__6809_6831__$1)){
var c__4304__auto___6832 = cljs.core.chunk_first(seq__6809_6831__$1);
var G__6833 = cljs.core.chunk_rest(seq__6809_6831__$1);
var G__6834 = c__4304__auto___6832;
var G__6835 = cljs.core.count(c__4304__auto___6832);
var G__6836 = (0);
seq__6809_6821 = G__6833;
chunk__6810_6822 = G__6834;
count__6811_6823 = G__6835;
i__6812_6824 = G__6836;
continue;
} else {
var ref_6837 = cljs.core.first(seq__6809_6831__$1);
if(cljs.core.contains_QMARK_(new_reactions,ref_6837)){
} else {
cljs.core.remove_watch(ref_6837,key);
}

var G__6838 = cljs.core.next(seq__6809_6831__$1);
var G__6839 = null;
var G__6840 = (0);
var G__6841 = (0);
seq__6809_6821 = G__6838;
chunk__6810_6822 = G__6839;
count__6811_6823 = G__6840;
i__6812_6824 = G__6841;
continue;
}
} else {
}
}
break;
}

var seq__6813_6842 = cljs.core.seq(new_reactions);
var chunk__6814_6843 = null;
var count__6815_6844 = (0);
var i__6816_6845 = (0);
while(true){
if((i__6816_6845 < count__6815_6844)){
var ref_6846 = chunk__6814_6843.cljs$core$IIndexed$_nth$arity$2(null,i__6816_6845);
if(cljs.core.contains_QMARK_(old_reactions,ref_6846)){
} else {
cljs.core.add_watch(ref_6846,key,((function (seq__6813_6842,chunk__6814_6843,count__6815_6844,i__6816_6845,ref_6846,comp,old_reactions,vec__6806,dom,next_state,new_reactions,key,_STAR_reactions_STAR_6805){
return (function (_,___$1,___$2,___$3){
return rum.request_render(comp);
});})(seq__6813_6842,chunk__6814_6843,count__6815_6844,i__6816_6845,ref_6846,comp,old_reactions,vec__6806,dom,next_state,new_reactions,key,_STAR_reactions_STAR_6805))
);
}

var G__6847 = seq__6813_6842;
var G__6848 = chunk__6814_6843;
var G__6849 = count__6815_6844;
var G__6850 = (i__6816_6845 + (1));
seq__6813_6842 = G__6847;
chunk__6814_6843 = G__6848;
count__6815_6844 = G__6849;
i__6816_6845 = G__6850;
continue;
} else {
var temp__4126__auto___6851 = cljs.core.seq(seq__6813_6842);
if(temp__4126__auto___6851){
var seq__6813_6852__$1 = temp__4126__auto___6851;
if(cljs.core.chunked_seq_QMARK_(seq__6813_6852__$1)){
var c__4304__auto___6853 = cljs.core.chunk_first(seq__6813_6852__$1);
var G__6854 = cljs.core.chunk_rest(seq__6813_6852__$1);
var G__6855 = c__4304__auto___6853;
var G__6856 = cljs.core.count(c__4304__auto___6853);
var G__6857 = (0);
seq__6813_6842 = G__6854;
chunk__6814_6843 = G__6855;
count__6815_6844 = G__6856;
i__6816_6845 = G__6857;
continue;
} else {
var ref_6858 = cljs.core.first(seq__6813_6852__$1);
if(cljs.core.contains_QMARK_(old_reactions,ref_6858)){
} else {
cljs.core.add_watch(ref_6858,key,((function (seq__6813_6842,chunk__6814_6843,count__6815_6844,i__6816_6845,ref_6858,seq__6813_6852__$1,temp__4126__auto___6851,comp,old_reactions,vec__6806,dom,next_state,new_reactions,key,_STAR_reactions_STAR_6805){
return (function (_,___$1,___$2,___$3){
return rum.request_render(comp);
});})(seq__6813_6842,chunk__6814_6843,count__6815_6844,i__6816_6845,ref_6858,seq__6813_6852__$1,temp__4126__auto___6851,comp,old_reactions,vec__6806,dom,next_state,new_reactions,key,_STAR_reactions_STAR_6805))
);
}

var G__6859 = cljs.core.next(seq__6813_6852__$1);
var G__6860 = null;
var G__6861 = (0);
var G__6862 = (0);
seq__6813_6842 = G__6859;
chunk__6814_6843 = G__6860;
count__6815_6844 = G__6861;
i__6816_6845 = G__6862;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(next_state,cljs.core.constant$keyword$rum_SLASH_refs,new_reactions)], null);
}finally {rum._STAR_reactions_STAR_ = _STAR_reactions_STAR_6805;
}});
}),cljs.core.constant$keyword$will_DASH_unmount,(function (state){
var key_6863 = rum.reactive_key(state);
var seq__6817_6864 = cljs.core.seq(cljs.core.constant$keyword$rum_SLASH_refs.cljs$core$IFn$_invoke$arity$1(state));
var chunk__6818_6865 = null;
var count__6819_6866 = (0);
var i__6820_6867 = (0);
while(true){
if((i__6820_6867 < count__6819_6866)){
var ref_6868 = chunk__6818_6865.cljs$core$IIndexed$_nth$arity$2(null,i__6820_6867);
cljs.core.remove_watch(ref_6868,key_6863);

var G__6869 = seq__6817_6864;
var G__6870 = chunk__6818_6865;
var G__6871 = count__6819_6866;
var G__6872 = (i__6820_6867 + (1));
seq__6817_6864 = G__6869;
chunk__6818_6865 = G__6870;
count__6819_6866 = G__6871;
i__6820_6867 = G__6872;
continue;
} else {
var temp__4126__auto___6873 = cljs.core.seq(seq__6817_6864);
if(temp__4126__auto___6873){
var seq__6817_6874__$1 = temp__4126__auto___6873;
if(cljs.core.chunked_seq_QMARK_(seq__6817_6874__$1)){
var c__4304__auto___6875 = cljs.core.chunk_first(seq__6817_6874__$1);
var G__6876 = cljs.core.chunk_rest(seq__6817_6874__$1);
var G__6877 = c__4304__auto___6875;
var G__6878 = cljs.core.count(c__4304__auto___6875);
var G__6879 = (0);
seq__6817_6864 = G__6876;
chunk__6818_6865 = G__6877;
count__6819_6866 = G__6878;
i__6820_6867 = G__6879;
continue;
} else {
var ref_6880 = cljs.core.first(seq__6817_6874__$1);
cljs.core.remove_watch(ref_6880,key_6863);

var G__6881 = cljs.core.next(seq__6817_6874__$1);
var G__6882 = null;
var G__6883 = (0);
var G__6884 = (0);
seq__6817_6864 = G__6881;
chunk__6818_6865 = G__6882;
count__6819_6866 = G__6883;
i__6820_6867 = G__6884;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.constant$keyword$rum_SLASH_refs);
})], null);
rum.react = (function rum$react(ref){
cljs.core._vreset_BANG_(rum._STAR_reactions_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(rum._STAR_reactions_STAR_),ref));

var G__6886 = ref;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__6886) : cljs.core.deref.call(null,G__6886));
});

/**
* @constructor
*/
rum.LensCursor = (function (parent,getter,setter){
this.parent = parent;
this.getter = getter;
this.setter = setter;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
rum.LensCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write(writer,"#<Cursor: ");

cljs.core.pr_writer(cljs.core._deref(this$__$1),writer,opts);

return cljs.core._write(writer,">");
});

rum.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_(this$__$1,(function (){var G__6887 = cljs.core._deref(this$__$1);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__6887) : f.call(null,G__6887));
})());
});

rum.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_(this$__$1,(function (){var G__6888 = cljs.core._deref(this$__$1);
var G__6889 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__6888,G__6889) : f.call(null,G__6888,G__6889));
})());
});

rum.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_(this$__$1,(function (){var G__6890 = cljs.core._deref(this$__$1);
var G__6891 = a;
var G__6892 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__6890,G__6891,G__6892) : f.call(null,G__6890,G__6891,G__6892));
})());
});

rum.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_(this$__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core._deref(this$__$1),a,b,xs));
});

rum.LensCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (_,new_value){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.parent,self__.setter,new_value);

return new_value;
});

rum.LensCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__6893 = this$__$1;
return goog.getUid(G__6893);
});

rum.LensCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
cljs.core.add_watch(self__.parent,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,key),this$__$1),((function (this$__$1){
return (function (_,___$1,oldp,newp){
var old = (function (){var G__6894 = oldp;
return (self__.getter.cljs$core$IFn$_invoke$arity$1 ? self__.getter.cljs$core$IFn$_invoke$arity$1(G__6894) : self__.getter.call(null,G__6894));
})();
var new$ = (function (){var G__6895 = newp;
return (self__.getter.cljs$core$IFn$_invoke$arity$1 ? self__.getter.cljs$core$IFn$_invoke$arity$1(G__6895) : self__.getter.call(null,G__6895));
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
var G__6896 = key;
var G__6897 = this$__$1;
var G__6898 = old;
var G__6899 = new$;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__6896,G__6897,G__6898,G__6899) : f.call(null,G__6896,G__6897,G__6898,G__6899));
} else {
return null;
}
});})(this$__$1))
);

return this$__$1;
});

rum.LensCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
cljs.core.remove_watch(self__.parent,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,key),this$__$1));

return this$__$1;
});

rum.LensCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__6900 = cljs.core._deref(self__.parent);
return (self__.getter.cljs$core$IFn$_invoke$arity$1 ? self__.getter.cljs$core$IFn$_invoke$arity$1(G__6900) : self__.getter.call(null,G__6900));
});

rum.LensCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (this$__$1 === other);
});

rum.LensCursor.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return this$.cljs$core$IEquiv$_equiv$arity$2(null,other);
});

rum.LensCursor.cljs$lang$type = true;

rum.LensCursor.cljs$lang$ctorStr = "rum/LensCursor";

rum.LensCursor.cljs$lang$ctorPrWriter = (function (this__4150__auto__,writer__4151__auto__,opt__4152__auto__){
return cljs.core._write(writer__4151__auto__,"rum/LensCursor");
});

rum.__GT_LensCursor = (function rum$__GT_LensCursor(parent,getter,setter){
return (new rum.LensCursor(parent,getter,setter));
});

rum.cursor = (function rum$cursor(ref,path){
var getter = (function (p1__6901_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__6901_SHARP_,path);
});
var setter = ((function (getter){
return (function (p1__6902_SHARP_,p2__6903_SHARP_){
return cljs.core.assoc_in(p1__6902_SHARP_,path,p2__6903_SHARP_);
});})(getter))
;
if((ref instanceof rum.LensCursor)){
return (new rum.LensCursor(ref.parent,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(getter,ref.getter),((function (getter,setter){
return (function (where,what){
var focus = ref.getter.call(null,where);
var focus__$1 = setter(focus,what);
var focus__$2 = ref.setter.call(null,where,focus__$1);
return focus__$2;
});})(getter,setter))
));
} else {
return (new rum.LensCursor(ref,getter,setter));
}
});
rum.deref_args = (function rum$deref_args(xs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6904_SHARP_){
if((function (){var G__6907 = p1__6904_SHARP_;
if(G__6907){
var bit__4229__auto__ = (G__6907.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4229__auto__) || (G__6907.cljs$core$IDeref$)){
return true;
} else {
if((!G__6907.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__6907);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__6907);
}
})()){
var G__6908 = p1__6904_SHARP_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__6908) : cljs.core.deref.call(null,G__6908));
} else {
return p1__6904_SHARP_;
}
}),xs);
});
rum.cursored = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$transfer_DASH_state,(function (old,new$){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new$,cljs.core.constant$keyword$rum_SLASH_om_DASH_args,cljs.core.constant$keyword$rum_SLASH_om_DASH_args.cljs$core$IFn$_invoke$arity$1(old));
}),cljs.core.constant$keyword$should_DASH_update,(function (old_state,new_state){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$rum_SLASH_om_DASH_args.cljs$core$IFn$_invoke$arity$1(old_state),rum.deref_args(cljs.core.constant$keyword$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(new_state)));
}),cljs.core.constant$keyword$wrap_DASH_render,(function (render_fn){
return (function (state){
var vec__6909 = (function (){var G__6910 = state;
return (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(G__6910) : render_fn.call(null,G__6910));
})();
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6909,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6909,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(next_state,cljs.core.constant$keyword$rum_SLASH_om_DASH_args,rum.deref_args(cljs.core.constant$keyword$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)))], null);
});
})], null);
rum.cursored_key = (function rum$cursored_key(state){
return [cljs.core.str(":rum/cursored-"),cljs.core.str(cljs.core.constant$keyword$rum_SLASH_id.cljs$core$IFn$_invoke$arity$1(state))].join('');
});
rum.cursored_watch = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$did_DASH_mount,(function (state){
var seq__6911_6927 = cljs.core.seq(cljs.core.constant$keyword$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state));
var chunk__6913_6928 = null;
var count__6914_6929 = (0);
var i__6915_6930 = (0);
while(true){
if((i__6915_6930 < count__6914_6929)){
var arg_6931 = chunk__6913_6928.cljs$core$IIndexed$_nth$arity$2(null,i__6915_6930);
if((function (){var G__6917 = arg_6931;
if(G__6917){
var bit__4229__auto__ = (G__6917.cljs$lang$protocol_mask$partition1$ & (2));
if((bit__4229__auto__) || (G__6917.cljs$core$IWatchable$)){
return true;
} else {
if((!G__6917.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,G__6917);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,G__6917);
}
})()){
cljs.core.add_watch(arg_6931,rum.cursored_key(state),((function (seq__6911_6927,chunk__6913_6928,count__6914_6929,i__6915_6930,arg_6931){
return (function (_,___$1,___$2,___$3){
return rum.request_render(cljs.core.constant$keyword$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state));
});})(seq__6911_6927,chunk__6913_6928,count__6914_6929,i__6915_6930,arg_6931))
);

var G__6932 = seq__6911_6927;
var G__6933 = chunk__6913_6928;
var G__6934 = count__6914_6929;
var G__6935 = (i__6915_6930 + (1));
seq__6911_6927 = G__6932;
chunk__6913_6928 = G__6933;
count__6914_6929 = G__6934;
i__6915_6930 = G__6935;
continue;
} else {
var G__6936 = seq__6911_6927;
var G__6937 = chunk__6913_6928;
var G__6938 = count__6914_6929;
var G__6939 = (i__6915_6930 + (1));
seq__6911_6927 = G__6936;
chunk__6913_6928 = G__6937;
count__6914_6929 = G__6938;
i__6915_6930 = G__6939;
continue;
}
} else {
var temp__4126__auto___6940 = cljs.core.seq(seq__6911_6927);
if(temp__4126__auto___6940){
var seq__6911_6941__$1 = temp__4126__auto___6940;
if(cljs.core.chunked_seq_QMARK_(seq__6911_6941__$1)){
var c__4304__auto___6942 = cljs.core.chunk_first(seq__6911_6941__$1);
var G__6943 = cljs.core.chunk_rest(seq__6911_6941__$1);
var G__6944 = c__4304__auto___6942;
var G__6945 = cljs.core.count(c__4304__auto___6942);
var G__6946 = (0);
seq__6911_6927 = G__6943;
chunk__6913_6928 = G__6944;
count__6914_6929 = G__6945;
i__6915_6930 = G__6946;
continue;
} else {
var arg_6947 = cljs.core.first(seq__6911_6941__$1);
if((function (){var G__6918 = arg_6947;
if(G__6918){
var bit__4229__auto__ = (G__6918.cljs$lang$protocol_mask$partition1$ & (2));
if((bit__4229__auto__) || (G__6918.cljs$core$IWatchable$)){
return true;
} else {
if((!G__6918.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,G__6918);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,G__6918);
}
})()){
cljs.core.add_watch(arg_6947,rum.cursored_key(state),((function (seq__6911_6927,chunk__6913_6928,count__6914_6929,i__6915_6930,arg_6947,seq__6911_6941__$1,temp__4126__auto___6940){
return (function (_,___$1,___$2,___$3){
return rum.request_render(cljs.core.constant$keyword$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state));
});})(seq__6911_6927,chunk__6913_6928,count__6914_6929,i__6915_6930,arg_6947,seq__6911_6941__$1,temp__4126__auto___6940))
);

var G__6948 = cljs.core.next(seq__6911_6941__$1);
var G__6949 = null;
var G__6950 = (0);
var G__6951 = (0);
seq__6911_6927 = G__6948;
chunk__6913_6928 = G__6949;
count__6914_6929 = G__6950;
i__6915_6930 = G__6951;
continue;
} else {
var G__6952 = cljs.core.next(seq__6911_6941__$1);
var G__6953 = null;
var G__6954 = (0);
var G__6955 = (0);
seq__6911_6927 = G__6952;
chunk__6913_6928 = G__6953;
count__6914_6929 = G__6954;
i__6915_6930 = G__6955;
continue;
}
}
} else {
}
}
break;
}

return state;
}),cljs.core.constant$keyword$will_DASH_unmount,(function (state){
var seq__6919_6956 = cljs.core.seq(cljs.core.constant$keyword$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state));
var chunk__6921_6957 = null;
var count__6922_6958 = (0);
var i__6923_6959 = (0);
while(true){
if((i__6923_6959 < count__6922_6958)){
var arg_6960 = chunk__6921_6957.cljs$core$IIndexed$_nth$arity$2(null,i__6923_6959);
if((function (){var G__6925 = arg_6960;
if(G__6925){
var bit__4229__auto__ = (G__6925.cljs$lang$protocol_mask$partition1$ & (2));
if((bit__4229__auto__) || (G__6925.cljs$core$IWatchable$)){
return true;
} else {
if((!G__6925.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,G__6925);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,G__6925);
}
})()){
cljs.core.remove_watch(arg_6960,rum.cursored_key(state));

var G__6961 = seq__6919_6956;
var G__6962 = chunk__6921_6957;
var G__6963 = count__6922_6958;
var G__6964 = (i__6923_6959 + (1));
seq__6919_6956 = G__6961;
chunk__6921_6957 = G__6962;
count__6922_6958 = G__6963;
i__6923_6959 = G__6964;
continue;
} else {
var G__6965 = seq__6919_6956;
var G__6966 = chunk__6921_6957;
var G__6967 = count__6922_6958;
var G__6968 = (i__6923_6959 + (1));
seq__6919_6956 = G__6965;
chunk__6921_6957 = G__6966;
count__6922_6958 = G__6967;
i__6923_6959 = G__6968;
continue;
}
} else {
var temp__4126__auto___6969 = cljs.core.seq(seq__6919_6956);
if(temp__4126__auto___6969){
var seq__6919_6970__$1 = temp__4126__auto___6969;
if(cljs.core.chunked_seq_QMARK_(seq__6919_6970__$1)){
var c__4304__auto___6971 = cljs.core.chunk_first(seq__6919_6970__$1);
var G__6972 = cljs.core.chunk_rest(seq__6919_6970__$1);
var G__6973 = c__4304__auto___6971;
var G__6974 = cljs.core.count(c__4304__auto___6971);
var G__6975 = (0);
seq__6919_6956 = G__6972;
chunk__6921_6957 = G__6973;
count__6922_6958 = G__6974;
i__6923_6959 = G__6975;
continue;
} else {
var arg_6976 = cljs.core.first(seq__6919_6970__$1);
if((function (){var G__6926 = arg_6976;
if(G__6926){
var bit__4229__auto__ = (G__6926.cljs$lang$protocol_mask$partition1$ & (2));
if((bit__4229__auto__) || (G__6926.cljs$core$IWatchable$)){
return true;
} else {
if((!G__6926.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,G__6926);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,G__6926);
}
})()){
cljs.core.remove_watch(arg_6976,rum.cursored_key(state));

var G__6977 = cljs.core.next(seq__6919_6970__$1);
var G__6978 = null;
var G__6979 = (0);
var G__6980 = (0);
seq__6919_6956 = G__6977;
chunk__6921_6957 = G__6978;
count__6922_6958 = G__6979;
i__6923_6959 = G__6980;
continue;
} else {
var G__6981 = cljs.core.next(seq__6919_6970__$1);
var G__6982 = null;
var G__6983 = (0);
var G__6984 = (0);
seq__6919_6956 = G__6981;
chunk__6921_6957 = G__6982;
count__6922_6958 = G__6983;
i__6923_6959 = G__6984;
continue;
}
}
} else {
}
}
break;
}

return state;
})], null);
