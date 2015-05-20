// Compiled by ClojureScript 0.0-3149 {:optimize-constants true, :static-fns true}
goog.provide('clojure.set');
goog.require('cljs.core');
clojure.set.bubble_max_key = (function clojure$set$bubble_max_key(k,coll){

var max = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,k,coll);
return cljs.core.cons(max,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (max){
return (function (p1__13462_SHARP_){
return (max === p1__13462_SHARP_);
});})(max))
,coll));
});
/**
 * Return a set that is the union of the input sets
 * @param {...*} var_args
 */
clojure.set.union = (function() {
var clojure$set$union = null;
var clojure$set$union__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var clojure$set$union__1 = (function (s1){
return s1;
});
var clojure$set$union__2 = (function (s1,s2){
if((cljs.core.count(s1) < cljs.core.count(s2))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,s2,s1);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,s1,s2);
}
});
var clojure$set$union__3 = (function() { 
var G__13463__delegate = function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key(cljs.core.count,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(sets,s2,cljs.core.array_seq([s1], 0)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.first(bubbled_sets),cljs.core.rest(bubbled_sets));
};
var G__13463 = function (s1,s2,var_args){
var sets = null;
if (arguments.length > 2) {
var G__13464__i = 0, G__13464__a = new Array(arguments.length -  2);
while (G__13464__i < G__13464__a.length) {G__13464__a[G__13464__i] = arguments[G__13464__i + 2]; ++G__13464__i;}
  sets = new cljs.core.IndexedSeq(G__13464__a,0);
} 
return G__13463__delegate.call(this,s1,s2,sets);};
G__13463.cljs$lang$maxFixedArity = 2;
G__13463.cljs$lang$applyTo = (function (arglist__13465){
var s1 = cljs.core.first(arglist__13465);
arglist__13465 = cljs.core.next(arglist__13465);
var s2 = cljs.core.first(arglist__13465);
var sets = cljs.core.rest(arglist__13465);
return G__13463__delegate(s1,s2,sets);
});
G__13463.cljs$core$IFn$_invoke$arity$variadic = G__13463__delegate;
return G__13463;
})()
;
clojure$set$union = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 0:
return clojure$set$union__0.call(this);
case 1:
return clojure$set$union__1.call(this,s1);
case 2:
return clojure$set$union__2.call(this,s1,s2);
default:
var G__13466 = null;
if (arguments.length > 2) {
var G__13467__i = 0, G__13467__a = new Array(arguments.length -  2);
while (G__13467__i < G__13467__a.length) {G__13467__a[G__13467__i] = arguments[G__13467__i + 2]; ++G__13467__i;}
G__13466 = new cljs.core.IndexedSeq(G__13467__a,0);
}
return clojure$set$union__3.cljs$core$IFn$_invoke$arity$variadic(s1,s2, G__13466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$set$union.cljs$lang$maxFixedArity = 2;
clojure$set$union.cljs$lang$applyTo = clojure$set$union__3.cljs$lang$applyTo;
clojure$set$union.cljs$core$IFn$_invoke$arity$0 = clojure$set$union__0;
clojure$set$union.cljs$core$IFn$_invoke$arity$1 = clojure$set$union__1;
clojure$set$union.cljs$core$IFn$_invoke$arity$2 = clojure$set$union__2;
clojure$set$union.cljs$core$IFn$_invoke$arity$variadic = clojure$set$union__3.cljs$core$IFn$_invoke$arity$variadic;
return clojure$set$union;
})()
;
/**
 * Return a set that is the intersection of the input sets
 * @param {...*} var_args
 */
clojure.set.intersection = (function() {
var clojure$set$intersection = null;
var clojure$set$intersection__1 = (function (s1){
return s1;
});
var clojure$set$intersection__2 = (function (s1,s2){
while(true){
if((cljs.core.count(s2) < cljs.core.count(s1))){
var G__13469 = s2;
var G__13470 = s1;
s1 = G__13469;
s2 = G__13470;
continue;
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (s1,s2){
return (function (result,item){
if(cljs.core.contains_QMARK_(s2,item)){
return result;
} else {
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(result,item);
}
});})(s1,s2))
,s1,s1);
}
break;
}
});
var clojure$set$intersection__3 = (function() { 
var G__13471__delegate = function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key((function (p1__13468_SHARP_){
return (- cljs.core.count(p1__13468_SHARP_));
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(sets,s2,cljs.core.array_seq([s1], 0)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure$set$intersection,cljs.core.first(bubbled_sets),cljs.core.rest(bubbled_sets));
};
var G__13471 = function (s1,s2,var_args){
var sets = null;
if (arguments.length > 2) {
var G__13472__i = 0, G__13472__a = new Array(arguments.length -  2);
while (G__13472__i < G__13472__a.length) {G__13472__a[G__13472__i] = arguments[G__13472__i + 2]; ++G__13472__i;}
  sets = new cljs.core.IndexedSeq(G__13472__a,0);
} 
return G__13471__delegate.call(this,s1,s2,sets);};
G__13471.cljs$lang$maxFixedArity = 2;
G__13471.cljs$lang$applyTo = (function (arglist__13473){
var s1 = cljs.core.first(arglist__13473);
arglist__13473 = cljs.core.next(arglist__13473);
var s2 = cljs.core.first(arglist__13473);
var sets = cljs.core.rest(arglist__13473);
return G__13471__delegate(s1,s2,sets);
});
G__13471.cljs$core$IFn$_invoke$arity$variadic = G__13471__delegate;
return G__13471;
})()
;
clojure$set$intersection = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 1:
return clojure$set$intersection__1.call(this,s1);
case 2:
return clojure$set$intersection__2.call(this,s1,s2);
default:
var G__13474 = null;
if (arguments.length > 2) {
var G__13475__i = 0, G__13475__a = new Array(arguments.length -  2);
while (G__13475__i < G__13475__a.length) {G__13475__a[G__13475__i] = arguments[G__13475__i + 2]; ++G__13475__i;}
G__13474 = new cljs.core.IndexedSeq(G__13475__a,0);
}
return clojure$set$intersection__3.cljs$core$IFn$_invoke$arity$variadic(s1,s2, G__13474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$set$intersection.cljs$lang$maxFixedArity = 2;
clojure$set$intersection.cljs$lang$applyTo = clojure$set$intersection__3.cljs$lang$applyTo;
clojure$set$intersection.cljs$core$IFn$_invoke$arity$1 = clojure$set$intersection__1;
clojure$set$intersection.cljs$core$IFn$_invoke$arity$2 = clojure$set$intersection__2;
clojure$set$intersection.cljs$core$IFn$_invoke$arity$variadic = clojure$set$intersection__3.cljs$core$IFn$_invoke$arity$variadic;
return clojure$set$intersection;
})()
;
/**
 * Return a set that is the first set without elements of the remaining sets
 * @param {...*} var_args
 */
clojure.set.difference = (function() {
var clojure$set$difference = null;
var clojure$set$difference__1 = (function (s1){
return s1;
});
var clojure$set$difference__2 = (function (s1,s2){
if((cljs.core.count(s1) < cljs.core.count(s2))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,item){
if(cljs.core.contains_QMARK_(s2,item)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(result,item);
} else {
return result;
}
}),s1,s1);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,s1,s2);
}
});
var clojure$set$difference__3 = (function() { 
var G__13476__delegate = function (s1,s2,sets){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure$set$difference,s1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sets,s2));
};
var G__13476 = function (s1,s2,var_args){
var sets = null;
if (arguments.length > 2) {
var G__13477__i = 0, G__13477__a = new Array(arguments.length -  2);
while (G__13477__i < G__13477__a.length) {G__13477__a[G__13477__i] = arguments[G__13477__i + 2]; ++G__13477__i;}
  sets = new cljs.core.IndexedSeq(G__13477__a,0);
} 
return G__13476__delegate.call(this,s1,s2,sets);};
G__13476.cljs$lang$maxFixedArity = 2;
G__13476.cljs$lang$applyTo = (function (arglist__13478){
var s1 = cljs.core.first(arglist__13478);
arglist__13478 = cljs.core.next(arglist__13478);
var s2 = cljs.core.first(arglist__13478);
var sets = cljs.core.rest(arglist__13478);
return G__13476__delegate(s1,s2,sets);
});
G__13476.cljs$core$IFn$_invoke$arity$variadic = G__13476__delegate;
return G__13476;
})()
;
clojure$set$difference = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case 1:
return clojure$set$difference__1.call(this,s1);
case 2:
return clojure$set$difference__2.call(this,s1,s2);
default:
var G__13479 = null;
if (arguments.length > 2) {
var G__13480__i = 0, G__13480__a = new Array(arguments.length -  2);
while (G__13480__i < G__13480__a.length) {G__13480__a[G__13480__i] = arguments[G__13480__i + 2]; ++G__13480__i;}
G__13479 = new cljs.core.IndexedSeq(G__13480__a,0);
}
return clojure$set$difference__3.cljs$core$IFn$_invoke$arity$variadic(s1,s2, G__13479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$set$difference.cljs$lang$maxFixedArity = 2;
clojure$set$difference.cljs$lang$applyTo = clojure$set$difference__3.cljs$lang$applyTo;
clojure$set$difference.cljs$core$IFn$_invoke$arity$1 = clojure$set$difference__1;
clojure$set$difference.cljs$core$IFn$_invoke$arity$2 = clojure$set$difference__2;
clojure$set$difference.cljs$core$IFn$_invoke$arity$variadic = clojure$set$difference__3.cljs$core$IFn$_invoke$arity$variadic;
return clojure$set$difference;
})()
;
/**
 * Returns a set of the elements for which pred is true
 */
clojure.set.select = (function clojure$set$select(pred,xset){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,k){
if(cljs.core.truth_((function (){var G__13482 = k;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__13482) : pred.call(null,G__13482));
})())){
return s;
} else {
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(s,k);
}
}),xset,xset);
});
/**
 * Returns a rel of the elements of xrel with only the keys in ks
 */
clojure.set.project = (function clojure$set$project(xrel,ks){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13483_SHARP_){
return cljs.core.select_keys(p1__13483_SHARP_,ks);
}),xrel));
});
/**
 * Returns the map with the keys in kmap renamed to the vals in kmap
 */
clojure.set.rename_keys = (function clojure$set$rename_keys(map,kmap){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__13486){
var vec__13487 = p__13486;
var old = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13487,(0),null);
var new$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13487,(1),null);
if(cljs.core.contains_QMARK_(map,old)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new$,cljs.core.get.cljs$core$IFn$_invoke$arity$2(map,old));
} else {
return m;
}
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,map,cljs.core.keys(kmap)),kmap);
});
/**
 * Returns a rel of the maps in xrel with the keys in kmap renamed to the vals in kmap
 */
clojure.set.rename = (function clojure$set$rename(xrel,kmap){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13488_SHARP_){
return clojure.set.rename_keys(p1__13488_SHARP_,kmap);
}),xrel));
});
/**
 * Returns a map of the distinct values of ks in the xrel mapped to a
 * set of the maps in xrel with the corresponding values of ks.
 */
clojure.set.index = (function clojure$set$index(xrel,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,x){
var ik = cljs.core.select_keys(x,ks);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,ik,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,ik,cljs.core.PersistentHashSet.EMPTY),x));
}),cljs.core.PersistentArrayMap.EMPTY,xrel);
});
/**
 * Returns the map with the vals mapped to the keys.
 */
clojure.set.map_invert = (function clojure$set$map_invert(m){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,p__13491){
var vec__13492 = p__13491;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13492,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13492,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,v,k);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
/**
 * When passed 2 rels, returns the rel corresponding to the natural
 * join. When passed an additional keymap, joins on the corresponding
 * keys.
 */
clojure.set.join = (function() {
var clojure$set$join = null;
var clojure$set$join__2 = (function (xrel,yrel){
if((cljs.core.seq(xrel)) && (cljs.core.seq(yrel))){
var ks = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(cljs.core.first(xrel))),cljs.core.set(cljs.core.keys(cljs.core.first(yrel))));
var vec__13501 = (((cljs.core.count(xrel) <= cljs.core.count(yrel)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel], null));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13501,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13501,(1),null);
var idx = clojure.set.index(r,ks);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ks,vec__13501,r,s,idx){
return (function (ret,x){
var found = (function (){var G__13502 = cljs.core.select_keys(x,ks);
return (idx.cljs$core$IFn$_invoke$arity$1 ? idx.cljs$core$IFn$_invoke$arity$1(G__13502) : idx.call(null,G__13502));
})();
if(cljs.core.truth_(found)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (found,ks,vec__13501,r,s,idx){
return (function (p1__13493_SHARP_,p2__13494_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__13493_SHARP_,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p2__13494_SHARP_,x], 0)));
});})(found,ks,vec__13501,r,s,idx))
,ret,found);
} else {
return ret;
}
});})(ks,vec__13501,r,s,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
});
var clojure$set$join__3 = (function (xrel,yrel,km){
var vec__13503 = (((cljs.core.count(xrel) <= cljs.core.count(yrel)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel,clojure.set.map_invert(km)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel,km], null));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13503,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13503,(1),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13503,(2),null);
var idx = clojure.set.index(r,cljs.core.vals(k));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__13503,r,s,k,idx){
return (function (ret,x){
var found = (function (){var G__13504 = clojure.set.rename_keys(cljs.core.select_keys(x,cljs.core.keys(k)),k);
return (idx.cljs$core$IFn$_invoke$arity$1 ? idx.cljs$core$IFn$_invoke$arity$1(G__13504) : idx.call(null,G__13504));
})();
if(cljs.core.truth_(found)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (found,vec__13503,r,s,k,idx){
return (function (p1__13495_SHARP_,p2__13496_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__13495_SHARP_,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p2__13496_SHARP_,x], 0)));
});})(found,vec__13503,r,s,k,idx))
,ret,found);
} else {
return ret;
}
});})(vec__13503,r,s,k,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
});
clojure$set$join = function(xrel,yrel,km){
switch(arguments.length){
case 2:
return clojure$set$join__2.call(this,xrel,yrel);
case 3:
return clojure$set$join__3.call(this,xrel,yrel,km);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$set$join.cljs$core$IFn$_invoke$arity$2 = clojure$set$join__2;
clojure$set$join.cljs$core$IFn$_invoke$arity$3 = clojure$set$join__3;
return clojure$set$join;
})()
;
/**
 * Is set1 a subset of set2?
 */
clojure.set.subset_QMARK_ = (function clojure$set$subset_QMARK_(set1,set2){
return ((cljs.core.count(set1) <= cljs.core.count(set2))) && (cljs.core.every_QMARK_((function (p1__13505_SHARP_){
return cljs.core.contains_QMARK_(set2,p1__13505_SHARP_);
}),set1));
});
/**
 * Is set1 a superset of set2?
 */
clojure.set.superset_QMARK_ = (function clojure$set$superset_QMARK_(set1,set2){
return ((cljs.core.count(set1) >= cljs.core.count(set2))) && (cljs.core.every_QMARK_((function (p1__13506_SHARP_){
return cljs.core.contains_QMARK_(set1,p1__13506_SHARP_);
}),set2));
});
