// Compiled by ClojureScript 0.0-3149 {:optimize-constants true, :static-fns true}
goog.provide('sablono.interpreter');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('sablono.util');
goog.require('clojure.string');

sablono.interpreter.IInterpreter = (function (){var obj13401 = {};
return obj13401;
})();

/**
 * Interpret a Clojure data structure as a React fn call.
 */
sablono.interpreter.interpret = (function sablono$interpreter$interpret(this$){
if((function (){var and__3927__auto__ = this$;
if(and__3927__auto__){
return this$.sablono$interpreter$IInterpreter$interpret$arity$1;
} else {
return and__3927__auto__;
}
})()){
return this$.sablono$interpreter$IInterpreter$interpret$arity$1(this$);
} else {
var x__4199__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3935__auto__ = (sablono.interpreter.interpret[(function (){var G__13405 = x__4199__auto__;
return goog.typeOf(G__13405);
})()]);
if(or__3935__auto__){
return or__3935__auto__;
} else {
var or__3935__auto____$1 = (sablono.interpreter.interpret["_"]);
if(or__3935__auto____$1){
return or__3935__auto____$1;
} else {
throw cljs.core.missing_protocol("IInterpreter.interpret",this$);
}
}
})().call(null,this$);
}
});

sablono.interpreter.wrap_form_element = (function sablono$interpreter$wrap_form_element(ctor,display_name){
var G__13413 = (function (){var G__13414 = {"render": (function (){
var this$ = this;
var props = {};
var G__13416_13420 = props;
var G__13417_13421 = this$.props;
var G__13418_13422 = {"children": (this$.props["children"]), "onChange": (this$["onChange"]), "value": (this$.state["value"])};
goog.object.extend(G__13416_13420,G__13417_13421,G__13418_13422);

var G__13419 = props;
return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__13419) : ctor.call(null,G__13419));
}), "componentWillReceiveProps": (function (new_props){
var this$ = this;
return this$.setState({"value": (new_props["value"])});
}), "onChange": (function (e){
var this$ = this;
var handler = (this$.props["onChange"]);
if((handler == null)){
return null;
} else {
var G__13415_13423 = e;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__13415_13423) : handler.call(null,G__13415_13423));

return this$.setState({"value": e.target.value});
}
}), "getInitialState": (function (){
var this$ = this;
return {"value": (this$.props["value"])};
}), "getDisplayName": (function (){
return cljs.core.name(display_name);
})};
return React.createClass(G__13414);
})();
return React.createFactory(G__13413);
});
sablono.interpreter.input = sablono.interpreter.wrap_form_element(React.DOM.input,"input");
sablono.interpreter.option = sablono.interpreter.wrap_form_element(React.DOM.option,"option");
sablono.interpreter.textarea = sablono.interpreter.wrap_form_element(React.DOM.textarea,"textarea");
/**
 * @param {...*} var_args
 */
sablono.interpreter.create_element = (function() { 
var sablono$interpreter$create_element__delegate = function (type,props,children){
return ((sablono.util.wrapped_type_QMARK_(type))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$input,sablono.interpreter.input,cljs.core.constant$keyword$option,sablono.interpreter.option,cljs.core.constant$keyword$textarea,sablono.interpreter.textarea], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type)):cljs.core.partial.cljs$core$IFn$_invoke$arity$2(React.createElement,cljs.core.name(type))).call(null,props,(((cljs.core.sequential_QMARK_(children)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(children))))?cljs.core.first(children):children));
};
var sablono$interpreter$create_element = function (type,props,var_args){
var children = null;
if (arguments.length > 2) {
var G__13424__i = 0, G__13424__a = new Array(arguments.length -  2);
while (G__13424__i < G__13424__a.length) {G__13424__a[G__13424__i] = arguments[G__13424__i + 2]; ++G__13424__i;}
  children = new cljs.core.IndexedSeq(G__13424__a,0);
} 
return sablono$interpreter$create_element__delegate.call(this,type,props,children);};
sablono$interpreter$create_element.cljs$lang$maxFixedArity = 2;
sablono$interpreter$create_element.cljs$lang$applyTo = (function (arglist__13425){
var type = cljs.core.first(arglist__13425);
arglist__13425 = cljs.core.next(arglist__13425);
var props = cljs.core.first(arglist__13425);
var children = cljs.core.rest(arglist__13425);
return sablono$interpreter$create_element__delegate(type,props,children);
});
sablono$interpreter$create_element.cljs$core$IFn$_invoke$arity$variadic = sablono$interpreter$create_element__delegate;
return sablono$interpreter$create_element;
})()
;
sablono.interpreter.attributes = (function sablono$interpreter$attributes(attrs){
var attrs__$1 = cljs.core.clj__GT_js(sablono.util.html_to_dom_attrs(attrs));
var class$ = attrs__$1.className;
var class$__$1 = ((cljs.core.array_QMARK_(class$))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",class$):class$);
if(cljs.core.truth_(clojure.string.blank_QMARK_(class$__$1))){
delete attrs__$1["className"];
} else {
attrs__$1.className = class$__$1;
}

return attrs__$1;
});
/**
 * Render an element vector as a HTML element.
 */
sablono.interpreter.element = (function sablono$interpreter$element(element__$1){
var vec__13427 = sablono.util.normalize_element(element__$1);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13427,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13427,(1),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13427,(2),null);
var js_attrs = sablono.interpreter.attributes(attrs);
if((cljs.core.sequential_QMARK_(content)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(content)))){
return sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic(type,js_attrs,cljs.core.array_seq([sablono.interpreter.interpret(cljs.core.first(content))], 0));
} else {
if(cljs.core.truth_(content)){
return sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic(type,js_attrs,cljs.core.array_seq([sablono.interpreter.interpret(content)], 0));
} else {
return sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic(type,js_attrs,cljs.core.array_seq([null], 0));

}
}
});
sablono.interpreter.interpret_seq = (function sablono$interpreter$interpret_seq(s){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(sablono.interpreter.interpret,s));
});
(sablono.interpreter.IInterpreter["null"] = true);

(sablono.interpreter.interpret["null"] = (function (this$){
return null;
}));

(sablono.interpreter.IInterpreter["_"] = true);

(sablono.interpreter.interpret["_"] = (function (this$){
return this$;
}));

cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.element(this$__$1);
});

cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.element(this$__$1);
});

cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.List.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.List.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$ = true;

cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});
