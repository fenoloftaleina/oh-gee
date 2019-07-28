goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__33044){
var vec__33045 = p__33044;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33045,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33045,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__33052 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33052,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33052,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33052,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__33071 = arguments.length;
switch (G__33071) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__33122_33224 = clojure.data.equality_partition;
var G__33123_33225 = "null";
var G__33124_33226 = ((function (G__33122_33224,G__33123_33225){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__33122_33224,G__33123_33225))
;
goog.object.set(G__33122_33224,G__33123_33225,G__33124_33226);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__33125_33227 = clojure.data.equality_partition;
var G__33126_33228 = "string";
var G__33127_33229 = ((function (G__33125_33227,G__33126_33228){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__33125_33227,G__33126_33228))
;
goog.object.set(G__33125_33227,G__33126_33228,G__33127_33229);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__33143_33230 = clojure.data.equality_partition;
var G__33144_33231 = "number";
var G__33145_33232 = ((function (G__33143_33230,G__33144_33231){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__33143_33230,G__33144_33231))
;
goog.object.set(G__33143_33230,G__33144_33231,G__33145_33232);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__33162_33233 = clojure.data.equality_partition;
var G__33163_33234 = "array";
var G__33164_33235 = ((function (G__33162_33233,G__33163_33234){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__33162_33233,G__33163_33234))
;
goog.object.set(G__33162_33233,G__33163_33234,G__33164_33235);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__33168_33236 = clojure.data.equality_partition;
var G__33169_33237 = "function";
var G__33170_33238 = ((function (G__33168_33236,G__33169_33237){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__33168_33236,G__33169_33237))
;
goog.object.set(G__33168_33236,G__33169_33237,G__33170_33238);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__33173_33239 = clojure.data.equality_partition;
var G__33174_33240 = "boolean";
var G__33175_33241 = ((function (G__33173_33239,G__33174_33240){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__33173_33239,G__33174_33240))
;
goog.object.set(G__33173_33239,G__33174_33240,G__33175_33241);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__33177_33242 = clojure.data.equality_partition;
var G__33178_33243 = "_";
var G__33179_33244 = ((function (G__33177_33242,G__33178_33243){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__33177_33242,G__33178_33243))
;
goog.object.set(G__33177_33242,G__33178_33243,G__33179_33244);
goog.object.set(clojure.data.Diff,"null",true);

var G__33185_33248 = clojure.data.diff_similar;
var G__33186_33249 = "null";
var G__33187_33250 = ((function (G__33185_33248,G__33186_33249){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__33185_33248,G__33186_33249))
;
goog.object.set(G__33185_33248,G__33186_33249,G__33187_33250);

goog.object.set(clojure.data.Diff,"string",true);

var G__33188_33253 = clojure.data.diff_similar;
var G__33189_33254 = "string";
var G__33190_33255 = ((function (G__33188_33253,G__33189_33254){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__33188_33253,G__33189_33254))
;
goog.object.set(G__33188_33253,G__33189_33254,G__33190_33255);

goog.object.set(clojure.data.Diff,"number",true);

var G__33196_33256 = clojure.data.diff_similar;
var G__33197_33257 = "number";
var G__33198_33258 = ((function (G__33196_33256,G__33197_33257){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__33196_33256,G__33197_33257))
;
goog.object.set(G__33196_33256,G__33197_33257,G__33198_33258);

goog.object.set(clojure.data.Diff,"array",true);

var G__33199_33259 = clojure.data.diff_similar;
var G__33200_33260 = "array";
var G__33201_33261 = ((function (G__33199_33259,G__33200_33260){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__33199_33259,G__33200_33260))
;
goog.object.set(G__33199_33259,G__33200_33260,G__33201_33261);

goog.object.set(clojure.data.Diff,"function",true);

var G__33202_33266 = clojure.data.diff_similar;
var G__33203_33267 = "function";
var G__33204_33268 = ((function (G__33202_33266,G__33203_33267){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__33202_33266,G__33203_33267))
;
goog.object.set(G__33202_33266,G__33203_33267,G__33204_33268);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__33205_33270 = clojure.data.diff_similar;
var G__33206_33271 = "boolean";
var G__33207_33272 = ((function (G__33205_33270,G__33206_33271){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__33205_33270,G__33206_33271))
;
goog.object.set(G__33205_33270,G__33206_33271,G__33207_33272);

goog.object.set(clojure.data.Diff,"_",true);

var G__33208_33275 = clojure.data.diff_similar;
var G__33209_33276 = "_";
var G__33210_33277 = ((function (G__33208_33275,G__33209_33276){
return (function (a,b){
var fexpr__33212 = (function (){var G__33213 = clojure.data.equality_partition(a);
var G__33213__$1 = (((G__33213 instanceof cljs.core.Keyword))?G__33213.fqn:null);
switch (G__33213__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33213__$1)].join('')));

}
})();
return (fexpr__33212.cljs$core$IFn$_invoke$arity$2 ? fexpr__33212.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__33212.call(null,a,b));
});})(G__33208_33275,G__33209_33276))
;
goog.object.set(G__33208_33275,G__33209_33276,G__33210_33277);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
