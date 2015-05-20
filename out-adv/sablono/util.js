// Compiled by ClojureScript 0.0-3149 {:optimize-constants true, :static-fns true}
goog.provide('sablono.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('goog.Uri');
sablono.util._STAR_base_url_STAR_ = null;

sablono.util.ToString = (function (){var obj13431 = {};
return obj13431;
})();

/**
 * Convert a value into a string.
 */
sablono.util.to_str = (function sablono$util$to_str(x){
if((function (){var and__3927__auto__ = x;
if(and__3927__auto__){
return x.sablono$util$ToString$to_str$arity$1;
} else {
return and__3927__auto__;
}
})()){
return x.sablono$util$ToString$to_str$arity$1(x);
} else {
var x__4199__auto__ = (((x == null))?null:x);
return (function (){var or__3935__auto__ = (sablono.util.to_str[(function (){var G__13435 = x__4199__auto__;
return goog.typeOf(G__13435);
})()]);
if(or__3935__auto__){
return or__3935__auto__;
} else {
var or__3935__auto____$1 = (sablono.util.to_str["_"]);
if(or__3935__auto____$1){
return or__3935__auto____$1;
} else {
throw cljs.core.missing_protocol("ToString.to-str",x);
}
}
})().call(null,x);
}
});


sablono.util.ToURI = (function (){var obj13437 = {};
return obj13437;
})();

/**
 * Convert a value into a URI.
 */
sablono.util.to_uri = (function sablono$util$to_uri(x){
if((function (){var and__3927__auto__ = x;
if(and__3927__auto__){
return x.sablono$util$ToURI$to_uri$arity$1;
} else {
return and__3927__auto__;
}
})()){
return x.sablono$util$ToURI$to_uri$arity$1(x);
} else {
var x__4199__auto__ = (((x == null))?null:x);
return (function (){var or__3935__auto__ = (sablono.util.to_uri[(function (){var G__13441 = x__4199__auto__;
return goog.typeOf(G__13441);
})()]);
if(or__3935__auto__){
return or__3935__auto__;
} else {
var or__3935__auto____$1 = (sablono.util.to_uri["_"]);
if(or__3935__auto____$1){
return or__3935__auto____$1;
} else {
throw cljs.core.missing_protocol("ToURI.to-uri",x);
}
}
})().call(null,x);
}
});

/**
 * Converts its arguments into a string using to-str.
 * @param {...*} var_args
 */
sablono.util.as_str = (function() { 
var sablono$util$as_str__delegate = function (xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(sablono.util.to_str,xs));
};
var sablono$util$as_str = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__13442__i = 0, G__13442__a = new Array(arguments.length -  0);
while (G__13442__i < G__13442__a.length) {G__13442__a[G__13442__i] = arguments[G__13442__i + 0]; ++G__13442__i;}
  xs = new cljs.core.IndexedSeq(G__13442__a,0);
} 
return sablono$util$as_str__delegate.call(this,xs);};
sablono$util$as_str.cljs$lang$maxFixedArity = 0;
sablono$util$as_str.cljs$lang$applyTo = (function (arglist__13443){
var xs = cljs.core.seq(arglist__13443);
return sablono$util$as_str__delegate(xs);
});
sablono$util$as_str.cljs$core$IFn$_invoke$arity$variadic = sablono$util$as_str__delegate;
return sablono$util$as_str;
})()
;
/**
 * Returns camel case version of the key, e.g. :http-equiv becomes :httpEquiv.
 */
sablono.util.camel_case = (function sablono$util$camel_case(k){
if(cljs.core.truth_(k)){
var vec__13445 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(k),/-/);
var first_word = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13445,(0),null);
var words = cljs.core.nthnext(vec__13445,(1));
if((cljs.core.empty_QMARK_(words)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("aria",first_word)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("data",first_word))){
return k;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,words),first_word)));
}
} else {
return null;
}
});
/**
 * Recursively transforms all map keys into camel case.
 */
sablono.util.camel_case_keys = (function sablono$util$camel_case_keys(m){
if(cljs.core.map_QMARK_(m)){
var ks = cljs.core.keys(m);
var kmap = cljs.core.zipmap(ks,cljs.core.map.cljs$core$IFn$_invoke$arity$2(sablono.util.camel_case,ks));
var G__13447 = clojure.set.rename_keys(m,kmap);
var G__13447__$1 = ((cljs.core.map_QMARK_(cljs.core.constant$keyword$style.cljs$core$IFn$_invoke$arity$1(m)))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__13447,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$style], null),sablono$util$camel_case_keys):G__13447);
return G__13447__$1;
} else {
return m;
}
});
/**
 * Converts all HTML attributes to their DOM equivalents.
 */
sablono.util.html_to_dom_attrs = (function sablono$util$html_to_dom_attrs(attrs){
return clojure.set.rename_keys(sablono.util.camel_case_keys(attrs),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$class,cljs.core.constant$keyword$className,cljs.core.constant$keyword$for,cljs.core.constant$keyword$htmlFor], null));
});
/**
 * Removes all map entries where the value of the entry is empty.
 */
sablono.util.compact_map = (function sablono$util$compact_map(m){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,k){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k);
if(cljs.core.empty_QMARK_(v)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return m__$1;
}
}),m,cljs.core.keys(m));
});
/**
 * Like clojure.core/merge but concatenate :class entries.
 * @param {...*} var_args
 */
sablono.util.merge_with_class = (function() { 
var sablono$util$merge_with_class__delegate = function (maps){
var classes = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__13448_SHARP_){
if(cljs.core.list_QMARK_(p1__13448_SHARP_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13448_SHARP_], null);
} else {
if(cljs.core.sequential_QMARK_(p1__13448_SHARP_)){
return p1__13448_SHARP_;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13448_SHARP_], null);

}
}
}),cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$class,maps)], 0))));
var maps__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,maps);
if(cljs.core.empty_QMARK_(classes)){
return maps__$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(maps__$1,cljs.core.constant$keyword$class,classes);
}
};
var sablono$util$merge_with_class = function (var_args){
var maps = null;
if (arguments.length > 0) {
var G__13449__i = 0, G__13449__a = new Array(arguments.length -  0);
while (G__13449__i < G__13449__a.length) {G__13449__a[G__13449__i] = arguments[G__13449__i + 0]; ++G__13449__i;}
  maps = new cljs.core.IndexedSeq(G__13449__a,0);
} 
return sablono$util$merge_with_class__delegate.call(this,maps);};
sablono$util$merge_with_class.cljs$lang$maxFixedArity = 0;
sablono$util$merge_with_class.cljs$lang$applyTo = (function (arglist__13450){
var maps = cljs.core.seq(arglist__13450);
return sablono$util$merge_with_class__delegate(maps);
});
sablono$util$merge_with_class.cljs$core$IFn$_invoke$arity$variadic = sablono$util$merge_with_class__delegate;
return sablono$util$merge_with_class;
})()
;
/**
 * Strip the # and . characters from the beginning of `s`.
 */
sablono.util.strip_css = (function sablono$util$strip_css(s){
if(cljs.core.truth_(s)){
return clojure.string.replace(s,/^[.#]/,"");
} else {
return null;
}
});
/**
 * Match `s` as a CSS tag and return a vector of tag name, CSS id and
 * CSS classes.
 */
sablono.util.match_tag = (function sablono$util$match_tag(s){
var matches = cljs.core.re_seq(/[#.]?[^#.]+/,cljs.core.name(s));
var vec__13454 = ((cljs.core.empty_QMARK_(matches))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Can't match CSS tag: "),cljs.core.str(s)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$tag,s], null))})():(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["#",null,".",null], null), null).call(null,cljs.core.ffirst(matches)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["div",matches], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(matches),cljs.core.rest(matches)], null)
));
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13454,(0),null);
var names = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13454,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag_name,cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(sablono.util.strip_css,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (matches,vec__13454,tag_name,names){
return (function (p1__13451_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.first(p1__13451_SHARP_));
});})(matches,vec__13454,tag_name,names))
,names))),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(sablono.util.strip_css,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (matches,vec__13454,tag_name,names){
return (function (p1__13452_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(".",cljs.core.first(p1__13452_SHARP_));
});})(matches,vec__13454,tag_name,names))
,names)))], null);
});
/**
 * Ensure an element vector is of the form [tag-name attrs content].
 */
sablono.util.normalize_element = (function sablono$util$normalize_element(p__13455){
var vec__13458 = p__13455;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13458,(0),null);
var content = cljs.core.nthnext(vec__13458,(1));
if(!(((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string'))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str(tag),cljs.core.str(" is not a valid element name.")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$tag,tag,cljs.core.constant$keyword$content,content], null));
} else {
}

var vec__13459 = sablono.util.match_tag(tag);
var tag__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13459,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13459,(1),null);
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13459,(2),null);
var tag_attrs = sablono.util.compact_map(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$id,id,cljs.core.constant$keyword$class,class$], null));
var map_attrs = cljs.core.first(content);
if(cljs.core.map_QMARK_(map_attrs)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([tag_attrs,map_attrs], 0)),cljs.core.next(content)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,tag_attrs,content], null);
}
});
/**
 * Join the `classes` with a whitespace.
 */
sablono.util.join_classes = (function sablono$util$join_classes(classes){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.flatten(classes));
});
/**
 * Return true if the element `type` needs to be wrapped.
 */
sablono.util.wrapped_type_QMARK_ = (function sablono$util$wrapped_type_QMARK_(type){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$textarea,null,cljs.core.constant$keyword$option,null,cljs.core.constant$keyword$input,null], null), null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type));
});
/**
 * Return the symbol of a fn that build a React element.
 */
sablono.util.react_fn = (function sablono$util$react_fn(type){
if(sablono.util.wrapped_type_QMARK_(type)){
return new cljs.core.Symbol("sablono.interpreter","create-element","sablono.interpreter/create-element",748785555,null);
} else {
return new cljs.core.Symbol("js","React.createElement","js/React.createElement",1766367641,null);
}
});
/**
 * Returns a regular expression that matches the HTML attribute `attr`
 * and it's value.
 */
sablono.util.attr_pattern = (function sablono$util$attr_pattern(attr){
return cljs.core.re_pattern([cljs.core.str("\\s+"),cljs.core.str(cljs.core.name(attr)),cljs.core.str("\\s*=\\s*['\"][^\"']+['\"]")].join(''));
});
/**
 * Strip the HTML attribute `attr` and it's value from the string `s`.
 */
sablono.util.strip_attr = (function sablono$util$strip_attr(s,attr){
if(cljs.core.truth_(s)){
return clojure.string.replace(s,sablono.util.attr_pattern(attr),"");
} else {
return null;
}
});
/**
 * Strip the outer HTML tag from the string `s`.
 */
sablono.util.strip_outer = (function sablono$util$strip_outer(s){
if(cljs.core.truth_(s)){
return clojure.string.replace(clojure.string.replace(s,/^\s*<[^>]+>\s*/,""),/\s*<\/[^>]+>\s*$/,"");
} else {
return null;
}
});
(sablono.util.ToString["_"] = true);

(sablono.util.to_str["_"] = (function (x){
return [cljs.core.str(x)].join('');
}));

(sablono.util.ToString["number"] = true);

(sablono.util.to_str["number"] = (function (x){
return [cljs.core.str(x)].join('');
}));

(sablono.util.ToString["null"] = true);

(sablono.util.to_str["null"] = (function (_){
return "";
}));

goog.Uri.prototype.sablono$util$ToString$ = true;

goog.Uri.prototype.sablono$util$ToString$to_str$arity$1 = (function (x){
var x__$1 = this;
if(cljs.core.truth_((function (){var or__3935__auto__ = x__$1.hasDomain();
if(cljs.core.truth_(or__3935__auto__)){
return or__3935__auto__;
} else {
return ((x__$1.getPath() == null)) || (cljs.core.not(cljs.core.re_matches(/^\/.*/,x__$1.getPath())));
}
})())){
return [cljs.core.str(x__$1)].join('');
} else {
var base = [cljs.core.str(sablono.util._STAR_base_url_STAR_)].join('');
if(cljs.core.truth_(cljs.core.re_matches(/.*\/$/,base))){
return [cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(base,(0),(cljs.core.count(base) - (1)))),cljs.core.str(x__$1)].join('');
} else {
return [cljs.core.str(base),cljs.core.str(x__$1)].join('');
}
}
});

cljs.core.Keyword.prototype.sablono$util$ToString$ = true;

cljs.core.Keyword.prototype.sablono$util$ToString$to_str$arity$1 = (function (x){
var x__$1 = this;
return cljs.core.name(x__$1);
});
(sablono.util.ToURI["_"] = true);

(sablono.util.to_uri["_"] = (function (x){
return (new goog.Uri([cljs.core.str(x)].join('')));
}));

goog.Uri.prototype.sablono$util$ToURI$ = true;

goog.Uri.prototype.sablono$util$ToURI$to_uri$arity$1 = (function (x){
var x__$1 = this;
return x__$1;
});
