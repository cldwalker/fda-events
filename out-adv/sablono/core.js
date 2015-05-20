// Compiled by ClojureScript 0.0-3149 {:optimize-constants true, :static-fns true}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__13172__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__13171 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13171,(0),null);
var body = cljs.core.nthnext(vec__13171,(1));
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__13172 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13173__i = 0, G__13173__a = new Array(arguments.length -  0);
while (G__13173__i < G__13173__a.length) {G__13173__a[G__13173__i] = arguments[G__13173__i + 0]; ++G__13173__i;}
  args = new cljs.core.IndexedSeq(G__13173__a,0);
} 
return G__13172__delegate.call(this,args);};
G__13172.cljs$lang$maxFixedArity = 0;
G__13172.cljs$lang$applyTo = (function (arglist__13174){
var args = cljs.core.seq(arglist__13174);
return G__13172__delegate(args);
});
G__13172.cljs$core$IFn$_invoke$arity$variadic = G__13172__delegate;
return G__13172;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4277__auto__ = (function sablono$core$update_arglists_$_iter__13181(s__13182){
return (new cljs.core.LazySeq(null,(function (){
var s__13182__$1 = s__13182;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__13182__$1);
if(temp__4126__auto__){
var s__13182__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13182__$2)){
var c__4275__auto__ = cljs.core.chunk_first(s__13182__$2);
var size__4276__auto__ = cljs.core.count(c__4275__auto__);
var b__13184 = cljs.core.chunk_buffer(size__4276__auto__);
if((function (){var i__13183 = (0);
while(true){
if((i__13183 < size__4276__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4275__auto__,i__13183);
cljs.core.chunk_append(b__13184,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__13187 = (i__13183 + (1));
i__13183 = G__13187;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13184),sablono$core$update_arglists_$_iter__13181(cljs.core.chunk_rest(s__13182__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13184),null);
}
} else {
var args = cljs.core.first(s__13182__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__13181(cljs.core.rest(s__13182__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4277__auto__(arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
var G__13189 = element;
return React.renderToString(G__13189);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
var G__13191 = element;
return React.renderToStaticMarkup(G__13191);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 * @param {...*} var_args
 */
sablono.core.include_css = (function() { 
var sablono$core$include_css__delegate = function (styles){
var iter__4277__auto__ = (function sablono$core$include_css_$_iter__13198(s__13199){
return (new cljs.core.LazySeq(null,(function (){
var s__13199__$1 = s__13199;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__13199__$1);
if(temp__4126__auto__){
var s__13199__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13199__$2)){
var c__4275__auto__ = cljs.core.chunk_first(s__13199__$2);
var size__4276__auto__ = cljs.core.count(c__4275__auto__);
var b__13201 = cljs.core.chunk_buffer(size__4276__auto__);
if((function (){var i__13200 = (0);
while(true){
if((i__13200 < size__4276__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4275__auto__,i__13200);
cljs.core.chunk_append(b__13201,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$type,"text/css",cljs.core.constant$keyword$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$rel,"stylesheet"], null)], null));

var G__13204 = (i__13200 + (1));
i__13200 = G__13204;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13201),sablono$core$include_css_$_iter__13198(cljs.core.chunk_rest(s__13199__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13201),null);
}
} else {
var style = cljs.core.first(s__13199__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$type,"text/css",cljs.core.constant$keyword$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$rel,"stylesheet"], null)], null),sablono$core$include_css_$_iter__13198(cljs.core.rest(s__13199__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4277__auto__(styles);
};
var sablono$core$include_css = function (var_args){
var styles = null;
if (arguments.length > 0) {
var G__13205__i = 0, G__13205__a = new Array(arguments.length -  0);
while (G__13205__i < G__13205__a.length) {G__13205__a[G__13205__i] = arguments[G__13205__i + 0]; ++G__13205__i;}
  styles = new cljs.core.IndexedSeq(G__13205__a,0);
} 
return sablono$core$include_css__delegate.call(this,styles);};
sablono$core$include_css.cljs$lang$maxFixedArity = 0;
sablono$core$include_css.cljs$lang$applyTo = (function (arglist__13206){
var styles = cljs.core.seq(arglist__13206);
return sablono$core$include_css__delegate(styles);
});
sablono$core$include_css.cljs$core$IFn$_invoke$arity$variadic = sablono$core$include_css__delegate;
return sablono$core$include_css;
})()
;
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__13211 = (function (){return goog.dom.getDocument();
})().body;
var G__13212 = (function (){var G__13213 = "script";
var G__13214 = {"src": src};
return goog.dom.createDom(G__13213,G__13214);
})();
return goog.dom.appendChild(G__13211,G__13212);
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 * @param {...*} var_args
 */
sablono.core.link_to13215 = (function() { 
var sablono$core$link_to13215__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var sablono$core$link_to13215 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
var G__13216__i = 0, G__13216__a = new Array(arguments.length -  1);
while (G__13216__i < G__13216__a.length) {G__13216__a[G__13216__i] = arguments[G__13216__i + 1]; ++G__13216__i;}
  content = new cljs.core.IndexedSeq(G__13216__a,0);
} 
return sablono$core$link_to13215__delegate.call(this,url,content);};
sablono$core$link_to13215.cljs$lang$maxFixedArity = 1;
sablono$core$link_to13215.cljs$lang$applyTo = (function (arglist__13217){
var url = cljs.core.first(arglist__13217);
var content = cljs.core.rest(arglist__13217);
return sablono$core$link_to13215__delegate(url,content);
});
sablono$core$link_to13215.cljs$core$IFn$_invoke$arity$variadic = sablono$core$link_to13215__delegate;
return sablono$core$link_to13215;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to13215);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 * address. If no content provided use the e-mail address as content.
 * @param {...*} var_args
 */
sablono.core.mail_to13218 = (function() { 
var sablono$core$mail_to13218__delegate = function (e_mail,p__13219){
var vec__13221 = p__13219;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13221,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$href,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3935__auto__ = content;
if(cljs.core.truth_(or__3935__auto__)){
return or__3935__auto__;
} else {
return e_mail;
}
})()], null);
};
var sablono$core$mail_to13218 = function (e_mail,var_args){
var p__13219 = null;
if (arguments.length > 1) {
var G__13222__i = 0, G__13222__a = new Array(arguments.length -  1);
while (G__13222__i < G__13222__a.length) {G__13222__a[G__13222__i] = arguments[G__13222__i + 1]; ++G__13222__i;}
  p__13219 = new cljs.core.IndexedSeq(G__13222__a,0);
} 
return sablono$core$mail_to13218__delegate.call(this,e_mail,p__13219);};
sablono$core$mail_to13218.cljs$lang$maxFixedArity = 1;
sablono$core$mail_to13218.cljs$lang$applyTo = (function (arglist__13223){
var e_mail = cljs.core.first(arglist__13223);
var p__13219 = cljs.core.rest(arglist__13223);
return sablono$core$mail_to13218__delegate(e_mail,p__13219);
});
sablono$core$mail_to13218.cljs$core$IFn$_invoke$arity$variadic = sablono$core$mail_to13218__delegate;
return sablono$core$mail_to13218;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to13218);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list13224 = (function sablono$core$unordered_list13224(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ul,(function (){var iter__4277__auto__ = (function sablono$core$unordered_list13224_$_iter__13231(s__13232){
return (new cljs.core.LazySeq(null,(function (){
var s__13232__$1 = s__13232;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__13232__$1);
if(temp__4126__auto__){
var s__13232__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13232__$2)){
var c__4275__auto__ = cljs.core.chunk_first(s__13232__$2);
var size__4276__auto__ = cljs.core.count(c__4275__auto__);
var b__13234 = cljs.core.chunk_buffer(size__4276__auto__);
if((function (){var i__13233 = (0);
while(true){
if((i__13233 < size__4276__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4275__auto__,i__13233);
cljs.core.chunk_append(b__13234,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,x], null));

var G__13237 = (i__13233 + (1));
i__13233 = G__13237;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13234),sablono$core$unordered_list13224_$_iter__13231(cljs.core.chunk_rest(s__13232__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13234),null);
}
} else {
var x = cljs.core.first(s__13232__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,x], null),sablono$core$unordered_list13224_$_iter__13231(cljs.core.rest(s__13232__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4277__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list13224);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list13238 = (function sablono$core$ordered_list13238(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$ol,(function (){var iter__4277__auto__ = (function sablono$core$ordered_list13238_$_iter__13245(s__13246){
return (new cljs.core.LazySeq(null,(function (){
var s__13246__$1 = s__13246;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__13246__$1);
if(temp__4126__auto__){
var s__13246__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13246__$2)){
var c__4275__auto__ = cljs.core.chunk_first(s__13246__$2);
var size__4276__auto__ = cljs.core.count(c__4275__auto__);
var b__13248 = cljs.core.chunk_buffer(size__4276__auto__);
if((function (){var i__13247 = (0);
while(true){
if((i__13247 < size__4276__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4275__auto__,i__13247);
cljs.core.chunk_append(b__13248,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,x], null));

var G__13251 = (i__13247 + (1));
i__13247 = G__13251;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13248),sablono$core$ordered_list13238_$_iter__13245(cljs.core.chunk_rest(s__13246__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13248),null);
}
} else {
var x = cljs.core.first(s__13246__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$li,x], null),sablono$core$ordered_list13238_$_iter__13245(cljs.core.rest(s__13246__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4277__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list13238);
/**
 * Create an image element.
 */
sablono.core.image13252 = (function() {
var sablono$core$image13252 = null;
var sablono$core$image13252__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var sablono$core$image13252__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$alt,alt], null)], null);
});
sablono$core$image13252 = function(src,alt){
switch(arguments.length){
case 1:
return sablono$core$image13252__1.call(this,src);
case 2:
return sablono$core$image13252__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$image13252.cljs$core$IFn$_invoke$arity$1 = sablono$core$image13252__1;
sablono$core$image13252.cljs$core$IFn$_invoke$arity$2 = sablono$core$image13252__2;
return sablono$core$image13252;
})()
;

sablono.core.image = sablono.core.wrap_attrs(sablono.core.image13252);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__13253_SHARP_,p2__13254_SHARP_){
return [cljs.core.str(p1__13253_SHARP_),cljs.core.str("["),cljs.core.str(p2__13254_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__13255_SHARP_,p2__13256_SHARP_){
return [cljs.core.str(p1__13255_SHARP_),cljs.core.str("-"),cljs.core.str(p2__13256_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$type,type,cljs.core.constant$keyword$name,sablono.core.make_name(name),cljs.core.constant$keyword$id,sablono.core.make_id(name),cljs.core.constant$keyword$value,value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field13257 = (function() {
var sablono$core$color_field13257 = null;
var sablono$core$color_field13257__1 = (function (name__6135__auto__){
return sablono$core$color_field13257.cljs$core$IFn$_invoke$arity$2(name__6135__auto__,null);
});
var sablono$core$color_field13257__2 = (function (name__6135__auto__,value__6136__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__6135__auto__,value__6136__auto__);
});
sablono$core$color_field13257 = function(name__6135__auto__,value__6136__auto__){
switch(arguments.length){
case 1:
return sablono$core$color_field13257__1.call(this,name__6135__auto__);
case 2:
return sablono$core$color_field13257__2.call(this,name__6135__auto__,value__6136__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$color_field13257.cljs$core$IFn$_invoke$arity$1 = sablono$core$color_field13257__1;
sablono$core$color_field13257.cljs$core$IFn$_invoke$arity$2 = sablono$core$color_field13257__2;
return sablono$core$color_field13257;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field13257);

/**
 * Creates a date input field.
 */
sablono.core.date_field13260 = (function() {
var sablono$core$date_field13260 = null;
var sablono$core$date_field13260__1 = (function (name__6135__auto__){
return sablono$core$date_field13260.cljs$core$IFn$_invoke$arity$2(name__6135__auto__,null);
});
var sablono$core$date_field13260__2 = (function (name__6135__auto__,value__6136__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__6135__auto__,value__6136__auto__);
});
sablono$core$date_field13260 = function(name__6135__auto__,value__6136__auto__){
switch(arguments.length){
case 1:
return sablono$core$date_field13260__1.call(this,name__6135__auto__);
case 2:
return sablono$core$date_field13260__2.call(this,name__6135__auto__,value__6136__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$date_field13260.cljs$core$IFn$_invoke$arity$1 = sablono$core$date_field13260__1;
sablono$core$date_field13260.cljs$core$IFn$_invoke$arity$2 = sablono$core$date_field13260__2;
return sablono$core$date_field13260;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field13260);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field13263 = (function() {
var sablono$core$datetime_field13263 = null;
var sablono$core$datetime_field13263__1 = (function (name__6135__auto__){
return sablono$core$datetime_field13263.cljs$core$IFn$_invoke$arity$2(name__6135__auto__,null);
});
var sablono$core$datetime_field13263__2 = (function (name__6135__auto__,value__6136__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__6135__auto__,value__6136__auto__);
});
sablono$core$datetime_field13263 = function(name__6135__auto__,value__6136__auto__){
switch(arguments.length){
case 1:
return sablono$core$datetime_field13263__1.call(this,name__6135__auto__);
case 2:
return sablono$core$datetime_field13263__2.call(this,name__6135__auto__,value__6136__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$datetime_field13263.cljs$core$IFn$_invoke$arity$1 = sablono$core$datetime_field13263__1;
sablono$core$datetime_field13263.cljs$core$IFn$_invoke$arity$2 = sablono$core$datetime_field13263__2;
return sablono$core$datetime_field13263;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field13263);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field13266 = (function() {
var sablono$core$datetime_local_field13266 = null;
var sablono$core$datetime_local_field13266__1 = (function (name__6135__auto__){
return sablono$core$datetime_local_field13266.cljs$core$IFn$_invoke$arity$2(name__6135__auto__,null);
});
var sablono$core$datetime_local_field13266__2 = (function (name__6135__auto__,value__6136__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__6135__auto__,value__6136__auto__);
});
sablono$core$datetime_local_field13266 = function(name__6135__auto__,value__6136__auto__){
switch(arguments.length){
case 1:
return sablono$core$datetime_local_field13266__1.call(this,name__6135__auto__);
case 2:
return sablono$core$datetime_local_field13266__2.call(this,name__6135__auto__,value__6136__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$datetime_local_field13266.cljs$core$IFn$_invoke$arity$1 = sablono$core$datetime_local_field13266__1;
sablono$core$datetime_local_field13266.cljs$core$IFn$_invoke$arity$2 = sablono$core$datetime_local_field13266__2;
return sablono$core$datetime_local_field13266;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field13266);

/**
 * Creates a email input field.
 */
sablono.core.email_field13269 = (function() {
var sablono$core$email_field13269 = null;
var sablono$core$email_field13269__1 = (function (name__6135__auto__){
return sablono$core$email_field13269.cljs$core$IFn$_invoke$arity$2(name__6135__auto__,null);
});
var sablono$core$email_field13269__2 = (function (name__6135__auto__,value__6136__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__6135__auto__,value__6136__auto__);
});
sablono$core$email_field13269 = function(name__6135__auto__,value__6136__auto__){
switch(arguments.length){
case 1:
return sablono$core$email_field13269__1.call(this,name__6135__auto__);
case 2:
return sablono$core$email_field13269__2.call(this,name__6135__auto__,value__6136__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$email_field13269.cljs$core$IFn$_invoke$arity$1 = sablono$core$email_field13269__1;
sablono$core$email_field13269.cljs$core$IFn$_invoke$arity$2 = sablono$core$email_field13269__2;
return sablono$core$email_field13269;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field13269);

/**
 * Creates a file input field.
 */
sablono.core.file_field13272 = (function() {
var sablono$core$file_field13272 = null;
var sablono$core$file_field13272__1 = (function (name__6135__auto__){
return sablono$core$file_field13272.cljs$core$IFn$_invoke$arity$2(name__6135__auto__,null);
});
var sablono$core$file_field13272__2 = (function (name__6135__auto__,value__6136__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__6135__auto__,value__6136__auto__);
});
sablono$core$file_field13272 = function(name__6135__auto__,value__6136__auto__){
switch(arguments.length){
case 1:
return sablono$core$file_field13272__1.call(this,name__6135__auto__);
case 2:
return sablono$core$file_field13272__2.call(this,name__6135__auto__,value__6136__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$file_field13272.cljs$core$IFn$_invoke$arity$1 = sablono$core$file_field13272__1;
sablono$core$file_field13272.cljs$core$IFn$_invoke$arity$2 = sablono$core$file_field13272__2;
return sablono$core$file_field13272;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field13272);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field13275 = (function() {
var sablono$core$hidden_field13275 = null;
var sablono$core$hidden_field13275__1 = (function (name__6135__auto__){
return sablono$core$hidden_field13275.cljs$core$IFn$_invoke$arity$2(name__6135__auto__,null);
});
var sablono$core$hidden_field13275__2 = (function (name__6135__auto__,value__6136__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__6135__auto__,value__6136__auto__);
});
sablono$core$hidden_field13275 = function(name__6135__auto__,value__6136__auto__){
switch(arguments.length){
case 1:
return sablono$core$hidden_field13275__1.call(this,name__6135__auto__);
case 2:
return sablono$core$hidden_field13275__2.call(this,name__6135__auto__,value__6136__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$hidden_field13275.cljs$core$IFn$_invoke$arity$1 = sablono$core$hidden_field13275__1;
sablono$core$hidden_field13275.cljs$core$IFn$_invoke$arity$2 = sablono$core$hidden_field13275__2;
return sablono$core$hidden_field13275;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field13275);

/**
 * Creates a month input field.
 */
sablono.core.month_field13278 = (function() {
var sablono$core$month_field13278 = null;
var sablono$core$month_field13278__1 = (function (name__6135__auto__){
return sablono$core$month_field13278.cljs$core$IFn$_invoke$arity$2(name__6135__auto__,null);
});
var sablono$core$month_field13278__2 = (function (name__6135__auto__,value__6136__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__6135__auto__,value__6136__auto__);
});
sablono$core$month_field13278 = function(name__6135__auto__,value__6136__auto__){
switch(arguments.length){
case 1:
return sablono$core$month_field13278__1.call(this,name__6135__auto__);
case 2:
return sablono$core$month_field13278__2.call(this,name__6135__auto__,value__6136__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$month_field13278.cljs$core$IFn$_invoke$arity$1 = sablono$core$month_field13278__1;
sablono$core$month_field13278.cljs$core$IFn$_invoke$arity$2 = sablono$core$month_field13278__2;
return sablono$core$month_field13278;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field13278);

/**
 * Creates a number input field.
 */
sablono.core.number_field13281 = (function() {
var sablono$core$number_field13281 = null;
var sablono$core$number_field13281__1 = (function (name__6135__auto__){
return sablono$core$number_field13281.cljs$core$IFn$_invoke$arity$2(name__6135__auto__,null);
});
var sablono$core$number_field13281__2 = (function (name__6135__auto__,value__6136__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__6135__auto__,value__6136__auto__);
});
sablono$core$number_field13281 = function(name__6135__auto__,value__6136__auto__){
switch(arguments.length){
case 1:
return sablono$core$number_field13281__1.call(this,name__6135__auto__);
case 2:
return sablono$core$number_field13281__2.call(this,name__6135__auto__,value__6136__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$number_field13281.cljs$core$IFn$_invoke$arity$1 = sablono$core$number_field13281__1;
sablono$core$number_field13281.cljs$core$IFn$_invoke$arity$2 = sablono$core$number_field13281__2;
return sablono$core$number_field13281;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field13281);

/**
 * Creates a password input field.
 */
sablono.core.password_field13284 = (function() {
var sablono$core$password_field13284 = null;
var sablono$core$password_field13284__1 = (function (name__6135__auto__){
return sablono$core$password_field13284.cljs$core$IFn$_invoke$arity$2(name__6135__auto__,null);
});
var sablono$core$password_field13284__2 = (function (name__6135__auto__,value__6136__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__6135__auto__,value__6136__auto__);
});
sablono$core$password_field13284 = function(name__6135__auto__,value__6136__auto__){
switch(arguments.length){
case 1:
return sablono$core$password_field13284__1.call(this,name__6135__auto__);
case 2:
return sablono$core$password_field13284__2.call(this,name__6135__auto__,value__6136__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$password_field13284.cljs$core$IFn$_invoke$arity$1 = sablono$core$password_field13284__1;
sablono$core$password_field13284.cljs$core$IFn$_invoke$arity$2 = sablono$core$password_field13284__2;
return sablono$core$password_field13284;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field13284);

/**
 * Creates a range input field.
 */
sablono.core.range_field13287 = (function() {
var sablono$core$range_field13287 = null;
var sablono$core$range_field13287__1 = (function (name__6135__auto__){
return sablono$core$range_field13287.cljs$core$IFn$_invoke$arity$2(name__6135__auto__,null);
});
var sablono$core$range_field13287__2 = (function (name__6135__auto__,value__6136__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__6135__auto__,value__6136__auto__);
});
sablono$core$range_field13287 = function(name__6135__auto__,value__6136__auto__){
switch(arguments.length){
case 1:
return sablono$core$range_field13287__1.call(this,name__6135__auto__);
case 2:
return sablono$core$range_field13287__2.call(this,name__6135__auto__,value__6136__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$range_field13287.cljs$core$IFn$_invoke$arity$1 = sablono$core$range_field13287__1;
sablono$core$range_field13287.cljs$core$IFn$_invoke$arity$2 = sablono$core$range_field13287__2;
return sablono$core$range_field13287;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field13287);

/**
 * Creates a search input field.
 */
sablono.core.search_field13290 = (function() {
var sablono$core$search_field13290 = null;
var sablono$core$search_field13290__1 = (function (name__6135__auto__){
return sablono$core$search_field13290.cljs$core$IFn$_invoke$arity$2(name__6135__auto__,null);
});
var sablono$core$search_field13290__2 = (function (name__6135__auto__,value__6136__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__6135__auto__,value__6136__auto__);
});
sablono$core$search_field13290 = function(name__6135__auto__,value__6136__auto__){
switch(arguments.length){
case 1:
return sablono$core$search_field13290__1.call(this,name__6135__auto__);
case 2:
return sablono$core$search_field13290__2.call(this,name__6135__auto__,value__6136__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$search_field13290.cljs$core$IFn$_invoke$arity$1 = sablono$core$search_field13290__1;
sablono$core$search_field13290.cljs$core$IFn$_invoke$arity$2 = sablono$core$search_field13290__2;
return sablono$core$search_field13290;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field13290);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field13293 = (function() {
var sablono$core$tel_field13293 = null;
var sablono$core$tel_field13293__1 = (function (name__6135__auto__){
return sablono$core$tel_field13293.cljs$core$IFn$_invoke$arity$2(name__6135__auto__,null);
});
var sablono$core$tel_field13293__2 = (function (name__6135__auto__,value__6136__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__6135__auto__,value__6136__auto__);
});
sablono$core$tel_field13293 = function(name__6135__auto__,value__6136__auto__){
switch(arguments.length){
case 1:
return sablono$core$tel_field13293__1.call(this,name__6135__auto__);
case 2:
return sablono$core$tel_field13293__2.call(this,name__6135__auto__,value__6136__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$tel_field13293.cljs$core$IFn$_invoke$arity$1 = sablono$core$tel_field13293__1;
sablono$core$tel_field13293.cljs$core$IFn$_invoke$arity$2 = sablono$core$tel_field13293__2;
return sablono$core$tel_field13293;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field13293);

/**
 * Creates a text input field.
 */
sablono.core.text_field13296 = (function() {
var sablono$core$text_field13296 = null;
var sablono$core$text_field13296__1 = (function (name__6135__auto__){
return sablono$core$text_field13296.cljs$core$IFn$_invoke$arity$2(name__6135__auto__,null);
});
var sablono$core$text_field13296__2 = (function (name__6135__auto__,value__6136__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__6135__auto__,value__6136__auto__);
});
sablono$core$text_field13296 = function(name__6135__auto__,value__6136__auto__){
switch(arguments.length){
case 1:
return sablono$core$text_field13296__1.call(this,name__6135__auto__);
case 2:
return sablono$core$text_field13296__2.call(this,name__6135__auto__,value__6136__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$text_field13296.cljs$core$IFn$_invoke$arity$1 = sablono$core$text_field13296__1;
sablono$core$text_field13296.cljs$core$IFn$_invoke$arity$2 = sablono$core$text_field13296__2;
return sablono$core$text_field13296;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field13296);

/**
 * Creates a time input field.
 */
sablono.core.time_field13299 = (function() {
var sablono$core$time_field13299 = null;
var sablono$core$time_field13299__1 = (function (name__6135__auto__){
return sablono$core$time_field13299.cljs$core$IFn$_invoke$arity$2(name__6135__auto__,null);
});
var sablono$core$time_field13299__2 = (function (name__6135__auto__,value__6136__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__6135__auto__,value__6136__auto__);
});
sablono$core$time_field13299 = function(name__6135__auto__,value__6136__auto__){
switch(arguments.length){
case 1:
return sablono$core$time_field13299__1.call(this,name__6135__auto__);
case 2:
return sablono$core$time_field13299__2.call(this,name__6135__auto__,value__6136__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$time_field13299.cljs$core$IFn$_invoke$arity$1 = sablono$core$time_field13299__1;
sablono$core$time_field13299.cljs$core$IFn$_invoke$arity$2 = sablono$core$time_field13299__2;
return sablono$core$time_field13299;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field13299);

/**
 * Creates a url input field.
 */
sablono.core.url_field13302 = (function() {
var sablono$core$url_field13302 = null;
var sablono$core$url_field13302__1 = (function (name__6135__auto__){
return sablono$core$url_field13302.cljs$core$IFn$_invoke$arity$2(name__6135__auto__,null);
});
var sablono$core$url_field13302__2 = (function (name__6135__auto__,value__6136__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__6135__auto__,value__6136__auto__);
});
sablono$core$url_field13302 = function(name__6135__auto__,value__6136__auto__){
switch(arguments.length){
case 1:
return sablono$core$url_field13302__1.call(this,name__6135__auto__);
case 2:
return sablono$core$url_field13302__2.call(this,name__6135__auto__,value__6136__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$url_field13302.cljs$core$IFn$_invoke$arity$1 = sablono$core$url_field13302__1;
sablono$core$url_field13302.cljs$core$IFn$_invoke$arity$2 = sablono$core$url_field13302__2;
return sablono$core$url_field13302;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field13302);

/**
 * Creates a week input field.
 */
sablono.core.week_field13305 = (function() {
var sablono$core$week_field13305 = null;
var sablono$core$week_field13305__1 = (function (name__6135__auto__){
return sablono$core$week_field13305.cljs$core$IFn$_invoke$arity$2(name__6135__auto__,null);
});
var sablono$core$week_field13305__2 = (function (name__6135__auto__,value__6136__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__6135__auto__,value__6136__auto__);
});
sablono$core$week_field13305 = function(name__6135__auto__,value__6136__auto__){
switch(arguments.length){
case 1:
return sablono$core$week_field13305__1.call(this,name__6135__auto__);
case 2:
return sablono$core$week_field13305__2.call(this,name__6135__auto__,value__6136__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$week_field13305.cljs$core$IFn$_invoke$arity$1 = sablono$core$week_field13305__1;
sablono$core$week_field13305.cljs$core$IFn$_invoke$arity$2 = sablono$core$week_field13305__2;
return sablono$core$week_field13305;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field13305);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box13308 = (function() {
var sablono$core$check_box13308 = null;
var sablono$core$check_box13308__1 = (function (name){
return sablono$core$check_box13308.cljs$core$IFn$_invoke$arity$2(name,null);
});
var sablono$core$check_box13308__2 = (function (name,checked_QMARK_){
return sablono$core$check_box13308.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var sablono$core$check_box13308__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$type,"checkbox",cljs.core.constant$keyword$name,sablono.core.make_name(name),cljs.core.constant$keyword$id,sablono.core.make_id(name),cljs.core.constant$keyword$value,value,cljs.core.constant$keyword$checked,checked_QMARK_], null)], null);
});
sablono$core$check_box13308 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return sablono$core$check_box13308__1.call(this,name);
case 2:
return sablono$core$check_box13308__2.call(this,name,checked_QMARK_);
case 3:
return sablono$core$check_box13308__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$check_box13308.cljs$core$IFn$_invoke$arity$1 = sablono$core$check_box13308__1;
sablono$core$check_box13308.cljs$core$IFn$_invoke$arity$2 = sablono$core$check_box13308__2;
sablono$core$check_box13308.cljs$core$IFn$_invoke$arity$3 = sablono$core$check_box13308__3;
return sablono$core$check_box13308;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box13308);
/**
 * Creates a radio button.
 */
sablono.core.radio_button13314 = (function() {
var sablono$core$radio_button13314 = null;
var sablono$core$radio_button13314__1 = (function (group){
return sablono$core$radio_button13314.cljs$core$IFn$_invoke$arity$2(group,null);
});
var sablono$core$radio_button13314__2 = (function (group,checked_QMARK_){
return sablono$core$radio_button13314.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var sablono$core$radio_button13314__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$type,"radio",cljs.core.constant$keyword$name,sablono.core.make_name(group),cljs.core.constant$keyword$id,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$value,value,cljs.core.constant$keyword$checked,checked_QMARK_], null)], null);
});
sablono$core$radio_button13314 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return sablono$core$radio_button13314__1.call(this,group);
case 2:
return sablono$core$radio_button13314__2.call(this,group,checked_QMARK_);
case 3:
return sablono$core$radio_button13314__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$radio_button13314.cljs$core$IFn$_invoke$arity$1 = sablono$core$radio_button13314__1;
sablono$core$radio_button13314.cljs$core$IFn$_invoke$arity$2 = sablono$core$radio_button13314__2;
sablono$core$radio_button13314.cljs$core$IFn$_invoke$arity$3 = sablono$core$radio_button13314__3;
return sablono$core$radio_button13314;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button13314);
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options13320 = (function() {
var sablono$core$select_options13320 = null;
var sablono$core$select_options13320__1 = (function (coll){
return sablono$core$select_options13320.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var sablono$core$select_options13320__2 = (function (coll,selected){
var iter__4277__auto__ = (function sablono$core$select_options13320_$_iter__13341(s__13342){
return (new cljs.core.LazySeq(null,(function (){
var s__13342__$1 = s__13342;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__13342__$1);
if(temp__4126__auto__){
var s__13342__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13342__$2)){
var c__4275__auto__ = cljs.core.chunk_first(s__13342__$2);
var size__4276__auto__ = cljs.core.count(c__4275__auto__);
var b__13344 = cljs.core.chunk_buffer(size__4276__auto__);
if((function (){var i__13343 = (0);
while(true){
if((i__13343 < size__4276__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4275__auto__,i__13343);
cljs.core.chunk_append(b__13344,((cljs.core.sequential_QMARK_(x))?(function (){var vec__13349 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13349,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13349,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13349,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$optgroup,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$label,text], null),sablono$core$select_options13320.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$value,val,cljs.core.constant$keyword$selected,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$disabled,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$selected,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));

var G__13351 = (i__13343 + (1));
i__13343 = G__13351;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13344),sablono$core$select_options13320_$_iter__13341(cljs.core.chunk_rest(s__13342__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13344),null);
}
} else {
var x = cljs.core.first(s__13342__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__13350 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13350,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13350,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13350,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$optgroup,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$label,text], null),sablono$core$select_options13320.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$value,val,cljs.core.constant$keyword$selected,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$disabled,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$selected,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),sablono$core$select_options13320_$_iter__13341(cljs.core.rest(s__13342__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4277__auto__(coll);
});
sablono$core$select_options13320 = function(coll,selected){
switch(arguments.length){
case 1:
return sablono$core$select_options13320__1.call(this,coll);
case 2:
return sablono$core$select_options13320__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$select_options13320.cljs$core$IFn$_invoke$arity$1 = sablono$core$select_options13320__1;
sablono$core$select_options13320.cljs$core$IFn$_invoke$arity$2 = sablono$core$select_options13320__2;
return sablono$core$select_options13320;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options13320);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down13352 = (function() {
var sablono$core$drop_down13352 = null;
var sablono$core$drop_down13352__2 = (function (name,options){
return sablono$core$drop_down13352.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var sablono$core$drop_down13352__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$name,sablono.core.make_name(name),cljs.core.constant$keyword$id,sablono.core.make_id(name)], null),(function (){var G__13358 = options;
var G__13359 = selected;
return (sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(G__13358,G__13359) : sablono.core.select_options.call(null,G__13358,G__13359));
})()], null);
});
sablono$core$drop_down13352 = function(name,options,selected){
switch(arguments.length){
case 2:
return sablono$core$drop_down13352__2.call(this,name,options);
case 3:
return sablono$core$drop_down13352__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$drop_down13352.cljs$core$IFn$_invoke$arity$2 = sablono$core$drop_down13352__2;
sablono$core$drop_down13352.cljs$core$IFn$_invoke$arity$3 = sablono$core$drop_down13352__3;
return sablono$core$drop_down13352;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down13352);
/**
 * Creates a text area element.
 */
sablono.core.text_area13360 = (function() {
var sablono$core$text_area13360 = null;
var sablono$core$text_area13360__1 = (function (name){
return sablono$core$text_area13360.cljs$core$IFn$_invoke$arity$2(name,null);
});
var sablono$core$text_area13360__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$name,sablono.core.make_name(name),cljs.core.constant$keyword$id,sablono.core.make_id(name),cljs.core.constant$keyword$value,value], null)], null);
});
sablono$core$text_area13360 = function(name,value){
switch(arguments.length){
case 1:
return sablono$core$text_area13360__1.call(this,name);
case 2:
return sablono$core$text_area13360__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sablono$core$text_area13360.cljs$core$IFn$_invoke$arity$1 = sablono$core$text_area13360__1;
sablono$core$text_area13360.cljs$core$IFn$_invoke$arity$2 = sablono$core$text_area13360__2;
return sablono$core$text_area13360;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area13360);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label13363 = (function sablono$core$label13363(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label13363);
/**
 * Creates a submit button.
 */
sablono.core.submit_button13364 = (function sablono$core$submit_button13364(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$type,"submit",cljs.core.constant$keyword$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button13364);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button13365 = (function sablono$core$reset_button13365(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$type,"reset",cljs.core.constant$keyword$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button13365);
/**
 * Create a form that points to a particular method and route.
 * e.g. (form-to [:put "/post"]
 * ...)
 * @param {...*} var_args
 */
sablono.core.form_to13366 = (function() { 
var sablono$core$form_to13366__delegate = function (p__13367,body){
var vec__13371 = p__13367;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13371,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13371,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$get,null,cljs.core.constant$keyword$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$method,method_str,cljs.core.constant$keyword$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$method,"POST",cljs.core.constant$keyword$action,action_uri], null),(function (){var G__13372 = "_method";
var G__13373 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2(G__13372,G__13373) : sablono.core.hidden_field.call(null,G__13372,G__13373));
})()], null)),body));
};
var sablono$core$form_to13366 = function (p__13367,var_args){
var body = null;
if (arguments.length > 1) {
var G__13374__i = 0, G__13374__a = new Array(arguments.length -  1);
while (G__13374__i < G__13374__a.length) {G__13374__a[G__13374__i] = arguments[G__13374__i + 1]; ++G__13374__i;}
  body = new cljs.core.IndexedSeq(G__13374__a,0);
} 
return sablono$core$form_to13366__delegate.call(this,p__13367,body);};
sablono$core$form_to13366.cljs$lang$maxFixedArity = 1;
sablono$core$form_to13366.cljs$lang$applyTo = (function (arglist__13375){
var p__13367 = cljs.core.first(arglist__13375);
var body = cljs.core.rest(arglist__13375);
return sablono$core$form_to13366__delegate(p__13367,body);
});
sablono$core$form_to13366.cljs$core$IFn$_invoke$arity$variadic = sablono$core$form_to13366__delegate;
return sablono$core$form_to13366;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to13366);
