import { r as __toESM, t as __commonJSMin } from "./rolldown-runtime-CPHnOetI.js";
import * as React$1 from "react";
import React, { Component, PureComponent, cloneElement, isValidElement, useEffect, useState } from "react";
import * as ReactDOM from "react-dom";
import { createPortal } from "react-dom";
//#region node_modules/lodash/noop.js
var require_noop = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* This method returns `undefined`.
	*
	* @static
	* @memberOf _
	* @since 2.3.0
	* @category Util
	* @example
	*
	* _.times(2, _.noop);
	* // => [undefined, undefined]
	*/
	function noop() {}
	module.exports = noop;
}));
//#endregion
//#region node_modules/lodash/isArray.js
var require_isArray = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = Array.isArray;
}));
//#endregion
//#region node_modules/lodash/_freeGlobal.js
var require__freeGlobal = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = typeof global == "object" && global && global.Object === Object && global;
}));
//#endregion
//#region node_modules/lodash/_root.js
var require__root = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var freeGlobal = require__freeGlobal();
	/** Detect free variable `self`. */
	var freeSelf = typeof self == "object" && self && self.Object === Object && self;
	module.exports = freeGlobal || freeSelf || Function("return this")();
}));
//#endregion
//#region node_modules/lodash/_Symbol.js
var require__Symbol = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__root().Symbol;
}));
//#endregion
//#region node_modules/lodash/_getRawTag.js
var require__getRawTag = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Symbol = require__Symbol();
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	/**
	* Used to resolve the
	* [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	* of values.
	*/
	var nativeObjectToString = objectProto.toString;
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : void 0;
	/**
	* A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	*
	* @private
	* @param {*} value The value to query.
	* @returns {string} Returns the raw `toStringTag`.
	*/
	function getRawTag(value) {
		var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
		try {
			value[symToStringTag] = void 0;
			var unmasked = true;
		} catch (e) {}
		var result = nativeObjectToString.call(value);
		if (unmasked) {
			if (isOwn) value[symToStringTag] = tag;
			else delete value[symToStringTag];
		}
		return result;
	}
	module.exports = getRawTag;
}));
//#endregion
//#region node_modules/lodash/_objectToString.js
var require__objectToString = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Used to resolve the
	* [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	* of values.
	*/
	var nativeObjectToString = Object.prototype.toString;
	/**
	* Converts `value` to a string using `Object.prototype.toString`.
	*
	* @private
	* @param {*} value The value to convert.
	* @returns {string} Returns the converted string.
	*/
	function objectToString(value) {
		return nativeObjectToString.call(value);
	}
	module.exports = objectToString;
}));
//#endregion
//#region node_modules/lodash/_baseGetTag.js
var require__baseGetTag = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Symbol = require__Symbol();
	var getRawTag = require__getRawTag();
	var objectToString = require__objectToString();
	/** `Object#toString` result references. */
	var nullTag = "[object Null]";
	var undefinedTag = "[object Undefined]";
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : void 0;
	/**
	* The base implementation of `getTag` without fallbacks for buggy environments.
	*
	* @private
	* @param {*} value The value to query.
	* @returns {string} Returns the `toStringTag`.
	*/
	function baseGetTag(value) {
		if (value == null) return value === void 0 ? undefinedTag : nullTag;
		return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
	}
	module.exports = baseGetTag;
}));
//#endregion
//#region node_modules/lodash/isObjectLike.js
var require_isObjectLike = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Checks if `value` is object-like. A value is object-like if it's not `null`
	* and has a `typeof` result of "object".
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	* @example
	*
	* _.isObjectLike({});
	* // => true
	*
	* _.isObjectLike([1, 2, 3]);
	* // => true
	*
	* _.isObjectLike(_.noop);
	* // => false
	*
	* _.isObjectLike(null);
	* // => false
	*/
	function isObjectLike(value) {
		return value != null && typeof value == "object";
	}
	module.exports = isObjectLike;
}));
//#endregion
//#region node_modules/lodash/isSymbol.js
var require_isSymbol = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseGetTag = require__baseGetTag();
	var isObjectLike = require_isObjectLike();
	/** `Object#toString` result references. */
	var symbolTag = "[object Symbol]";
	/**
	* Checks if `value` is classified as a `Symbol` primitive or object.
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	* @example
	*
	* _.isSymbol(Symbol.iterator);
	* // => true
	*
	* _.isSymbol('abc');
	* // => false
	*/
	function isSymbol(value) {
		return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
	}
	module.exports = isSymbol;
}));
//#endregion
//#region node_modules/lodash/_isKey.js
var require__isKey = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isArray = require_isArray();
	var isSymbol = require_isSymbol();
	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
	var reIsPlainProp = /^\w*$/;
	/**
	* Checks if `value` is a property name and not a property path.
	*
	* @private
	* @param {*} value The value to check.
	* @param {Object} [object] The object to query keys on.
	* @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	*/
	function isKey(value, object) {
		if (isArray(value)) return false;
		var type = typeof value;
		if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) return true;
		return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
	}
	module.exports = isKey;
}));
//#endregion
//#region node_modules/lodash/isObject.js
var require_isObject = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Checks if `value` is the
	* [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	* of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is an object, else `false`.
	* @example
	*
	* _.isObject({});
	* // => true
	*
	* _.isObject([1, 2, 3]);
	* // => true
	*
	* _.isObject(_.noop);
	* // => true
	*
	* _.isObject(null);
	* // => false
	*/
	function isObject(value) {
		var type = typeof value;
		return value != null && (type == "object" || type == "function");
	}
	module.exports = isObject;
}));
//#endregion
//#region node_modules/lodash/isFunction.js
var require_isFunction = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseGetTag = require__baseGetTag();
	var isObject = require_isObject();
	/** `Object#toString` result references. */
	var asyncTag = "[object AsyncFunction]";
	var funcTag = "[object Function]";
	var genTag = "[object GeneratorFunction]";
	var proxyTag = "[object Proxy]";
	/**
	* Checks if `value` is classified as a `Function` object.
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a function, else `false`.
	* @example
	*
	* _.isFunction(_);
	* // => true
	*
	* _.isFunction(/abc/);
	* // => false
	*/
	function isFunction(value) {
		if (!isObject(value)) return false;
		var tag = baseGetTag(value);
		return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}
	module.exports = isFunction;
}));
//#endregion
//#region node_modules/lodash/_coreJsData.js
var require__coreJsData = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__root()["__core-js_shared__"];
}));
//#endregion
//#region node_modules/lodash/_isMasked.js
var require__isMasked = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var coreJsData = require__coreJsData();
	/** Used to detect methods masquerading as native. */
	var maskSrcKey = function() {
		var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
		return uid ? "Symbol(src)_1." + uid : "";
	}();
	/**
	* Checks if `func` has its source masked.
	*
	* @private
	* @param {Function} func The function to check.
	* @returns {boolean} Returns `true` if `func` is masked, else `false`.
	*/
	function isMasked(func) {
		return !!maskSrcKey && maskSrcKey in func;
	}
	module.exports = isMasked;
}));
//#endregion
//#region node_modules/lodash/_toSource.js
var require__toSource = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;
	/**
	* Converts `func` to its source code.
	*
	* @private
	* @param {Function} func The function to convert.
	* @returns {string} Returns the source code.
	*/
	function toSource(func) {
		if (func != null) {
			try {
				return funcToString.call(func);
			} catch (e) {}
			try {
				return func + "";
			} catch (e) {}
		}
		return "";
	}
	module.exports = toSource;
}));
//#endregion
//#region node_modules/lodash/_baseIsNative.js
var require__baseIsNative = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isFunction = require_isFunction();
	var isMasked = require__isMasked();
	var isObject = require_isObject();
	var toSource = require__toSource();
	/**
	* Used to match `RegExp`
	* [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	*/
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	/** Used for built-in method references. */
	var funcProto = Function.prototype;
	var objectProto = Object.prototype;
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	/** Used to detect if a method is native. */
	var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
	/**
	* The base implementation of `_.isNative` without bad shim checks.
	*
	* @private
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a native function,
	*  else `false`.
	*/
	function baseIsNative(value) {
		if (!isObject(value) || isMasked(value)) return false;
		return (isFunction(value) ? reIsNative : reIsHostCtor).test(toSource(value));
	}
	module.exports = baseIsNative;
}));
//#endregion
//#region node_modules/lodash/_getValue.js
var require__getValue = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Gets the value at `key` of `object`.
	*
	* @private
	* @param {Object} [object] The object to query.
	* @param {string} key The key of the property to get.
	* @returns {*} Returns the property value.
	*/
	function getValue(object, key) {
		return object == null ? void 0 : object[key];
	}
	module.exports = getValue;
}));
//#endregion
//#region node_modules/lodash/_getNative.js
var require__getNative = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseIsNative = require__baseIsNative();
	var getValue = require__getValue();
	/**
	* Gets the native function at `key` of `object`.
	*
	* @private
	* @param {Object} object The object to query.
	* @param {string} key The key of the method to get.
	* @returns {*} Returns the function if it's native, else `undefined`.
	*/
	function getNative(object, key) {
		var value = getValue(object, key);
		return baseIsNative(value) ? value : void 0;
	}
	module.exports = getNative;
}));
//#endregion
//#region node_modules/lodash/_nativeCreate.js
var require__nativeCreate = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__getNative()(Object, "create");
}));
//#endregion
//#region node_modules/lodash/_hashClear.js
var require__hashClear = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var nativeCreate = require__nativeCreate();
	/**
	* Removes all key-value entries from the hash.
	*
	* @private
	* @name clear
	* @memberOf Hash
	*/
	function hashClear() {
		this.__data__ = nativeCreate ? nativeCreate(null) : {};
		this.size = 0;
	}
	module.exports = hashClear;
}));
//#endregion
//#region node_modules/lodash/_hashDelete.js
var require__hashDelete = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Removes `key` and its value from the hash.
	*
	* @private
	* @name delete
	* @memberOf Hash
	* @param {Object} hash The hash to modify.
	* @param {string} key The key of the value to remove.
	* @returns {boolean} Returns `true` if the entry was removed, else `false`.
	*/
	function hashDelete(key) {
		var result = this.has(key) && delete this.__data__[key];
		this.size -= result ? 1 : 0;
		return result;
	}
	module.exports = hashDelete;
}));
//#endregion
//#region node_modules/lodash/_hashGet.js
var require__hashGet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var nativeCreate = require__nativeCreate();
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = "__lodash_hash_undefined__";
	/** Used to check objects for own properties. */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	* Gets the hash value for `key`.
	*
	* @private
	* @name get
	* @memberOf Hash
	* @param {string} key The key of the value to get.
	* @returns {*} Returns the entry value.
	*/
	function hashGet(key) {
		var data = this.__data__;
		if (nativeCreate) {
			var result = data[key];
			return result === HASH_UNDEFINED ? void 0 : result;
		}
		return hasOwnProperty.call(data, key) ? data[key] : void 0;
	}
	module.exports = hashGet;
}));
//#endregion
//#region node_modules/lodash/_hashHas.js
var require__hashHas = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var nativeCreate = require__nativeCreate();
	/** Used to check objects for own properties. */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	* Checks if a hash value for `key` exists.
	*
	* @private
	* @name has
	* @memberOf Hash
	* @param {string} key The key of the entry to check.
	* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	*/
	function hashHas(key) {
		var data = this.__data__;
		return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
	}
	module.exports = hashHas;
}));
//#endregion
//#region node_modules/lodash/_hashSet.js
var require__hashSet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var nativeCreate = require__nativeCreate();
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = "__lodash_hash_undefined__";
	/**
	* Sets the hash `key` to `value`.
	*
	* @private
	* @name set
	* @memberOf Hash
	* @param {string} key The key of the value to set.
	* @param {*} value The value to set.
	* @returns {Object} Returns the hash instance.
	*/
	function hashSet(key, value) {
		var data = this.__data__;
		this.size += this.has(key) ? 0 : 1;
		data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
		return this;
	}
	module.exports = hashSet;
}));
//#endregion
//#region node_modules/lodash/_Hash.js
var require__Hash = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var hashClear = require__hashClear();
	var hashDelete = require__hashDelete();
	var hashGet = require__hashGet();
	var hashHas = require__hashHas();
	var hashSet = require__hashSet();
	/**
	* Creates a hash object.
	*
	* @private
	* @constructor
	* @param {Array} [entries] The key-value pairs to cache.
	*/
	function Hash(entries) {
		var index = -1, length = entries == null ? 0 : entries.length;
		this.clear();
		while (++index < length) {
			var entry = entries[index];
			this.set(entry[0], entry[1]);
		}
	}
	Hash.prototype.clear = hashClear;
	Hash.prototype["delete"] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;
	module.exports = Hash;
}));
//#endregion
//#region node_modules/lodash/_listCacheClear.js
var require__listCacheClear = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Removes all key-value entries from the list cache.
	*
	* @private
	* @name clear
	* @memberOf ListCache
	*/
	function listCacheClear() {
		this.__data__ = [];
		this.size = 0;
	}
	module.exports = listCacheClear;
}));
//#endregion
//#region node_modules/lodash/eq.js
var require_eq = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Performs a
	* [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	* comparison between two values to determine if they are equivalent.
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Lang
	* @param {*} value The value to compare.
	* @param {*} other The other value to compare.
	* @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	* @example
	*
	* var object = { 'a': 1 };
	* var other = { 'a': 1 };
	*
	* _.eq(object, object);
	* // => true
	*
	* _.eq(object, other);
	* // => false
	*
	* _.eq('a', 'a');
	* // => true
	*
	* _.eq('a', Object('a'));
	* // => false
	*
	* _.eq(NaN, NaN);
	* // => true
	*/
	function eq(value, other) {
		return value === other || value !== value && other !== other;
	}
	module.exports = eq;
}));
//#endregion
//#region node_modules/lodash/_assocIndexOf.js
var require__assocIndexOf = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var eq = require_eq();
	/**
	* Gets the index at which the `key` is found in `array` of key-value pairs.
	*
	* @private
	* @param {Array} array The array to inspect.
	* @param {*} key The key to search for.
	* @returns {number} Returns the index of the matched value, else `-1`.
	*/
	function assocIndexOf(array, key) {
		var length = array.length;
		while (length--) if (eq(array[length][0], key)) return length;
		return -1;
	}
	module.exports = assocIndexOf;
}));
//#endregion
//#region node_modules/lodash/_listCacheDelete.js
var require__listCacheDelete = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var assocIndexOf = require__assocIndexOf();
	/** Built-in value references. */
	var splice = Array.prototype.splice;
	/**
	* Removes `key` and its value from the list cache.
	*
	* @private
	* @name delete
	* @memberOf ListCache
	* @param {string} key The key of the value to remove.
	* @returns {boolean} Returns `true` if the entry was removed, else `false`.
	*/
	function listCacheDelete(key) {
		var data = this.__data__, index = assocIndexOf(data, key);
		if (index < 0) return false;
		if (index == data.length - 1) data.pop();
		else splice.call(data, index, 1);
		--this.size;
		return true;
	}
	module.exports = listCacheDelete;
}));
//#endregion
//#region node_modules/lodash/_listCacheGet.js
var require__listCacheGet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var assocIndexOf = require__assocIndexOf();
	/**
	* Gets the list cache value for `key`.
	*
	* @private
	* @name get
	* @memberOf ListCache
	* @param {string} key The key of the value to get.
	* @returns {*} Returns the entry value.
	*/
	function listCacheGet(key) {
		var data = this.__data__, index = assocIndexOf(data, key);
		return index < 0 ? void 0 : data[index][1];
	}
	module.exports = listCacheGet;
}));
//#endregion
//#region node_modules/lodash/_listCacheHas.js
var require__listCacheHas = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var assocIndexOf = require__assocIndexOf();
	/**
	* Checks if a list cache value for `key` exists.
	*
	* @private
	* @name has
	* @memberOf ListCache
	* @param {string} key The key of the entry to check.
	* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	*/
	function listCacheHas(key) {
		return assocIndexOf(this.__data__, key) > -1;
	}
	module.exports = listCacheHas;
}));
//#endregion
//#region node_modules/lodash/_listCacheSet.js
var require__listCacheSet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var assocIndexOf = require__assocIndexOf();
	/**
	* Sets the list cache `key` to `value`.
	*
	* @private
	* @name set
	* @memberOf ListCache
	* @param {string} key The key of the value to set.
	* @param {*} value The value to set.
	* @returns {Object} Returns the list cache instance.
	*/
	function listCacheSet(key, value) {
		var data = this.__data__, index = assocIndexOf(data, key);
		if (index < 0) {
			++this.size;
			data.push([key, value]);
		} else data[index][1] = value;
		return this;
	}
	module.exports = listCacheSet;
}));
//#endregion
//#region node_modules/lodash/_ListCache.js
var require__ListCache = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var listCacheClear = require__listCacheClear();
	var listCacheDelete = require__listCacheDelete();
	var listCacheGet = require__listCacheGet();
	var listCacheHas = require__listCacheHas();
	var listCacheSet = require__listCacheSet();
	/**
	* Creates an list cache object.
	*
	* @private
	* @constructor
	* @param {Array} [entries] The key-value pairs to cache.
	*/
	function ListCache(entries) {
		var index = -1, length = entries == null ? 0 : entries.length;
		this.clear();
		while (++index < length) {
			var entry = entries[index];
			this.set(entry[0], entry[1]);
		}
	}
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype["delete"] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;
	module.exports = ListCache;
}));
//#endregion
//#region node_modules/lodash/_Map.js
var require__Map = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__getNative()(require__root(), "Map");
}));
//#endregion
//#region node_modules/lodash/_mapCacheClear.js
var require__mapCacheClear = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Hash = require__Hash();
	var ListCache = require__ListCache();
	var Map = require__Map();
	/**
	* Removes all key-value entries from the map.
	*
	* @private
	* @name clear
	* @memberOf MapCache
	*/
	function mapCacheClear() {
		this.size = 0;
		this.__data__ = {
			"hash": new Hash(),
			"map": new (Map || ListCache)(),
			"string": new Hash()
		};
	}
	module.exports = mapCacheClear;
}));
//#endregion
//#region node_modules/lodash/_isKeyable.js
var require__isKeyable = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Checks if `value` is suitable for use as unique object key.
	*
	* @private
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	*/
	function isKeyable(value) {
		var type = typeof value;
		return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
	}
	module.exports = isKeyable;
}));
//#endregion
//#region node_modules/lodash/_getMapData.js
var require__getMapData = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isKeyable = require__isKeyable();
	/**
	* Gets the data for `map`.
	*
	* @private
	* @param {Object} map The map to query.
	* @param {string} key The reference key.
	* @returns {*} Returns the map data.
	*/
	function getMapData(map, key) {
		var data = map.__data__;
		return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
	}
	module.exports = getMapData;
}));
//#endregion
//#region node_modules/lodash/_mapCacheDelete.js
var require__mapCacheDelete = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var getMapData = require__getMapData();
	/**
	* Removes `key` and its value from the map.
	*
	* @private
	* @name delete
	* @memberOf MapCache
	* @param {string} key The key of the value to remove.
	* @returns {boolean} Returns `true` if the entry was removed, else `false`.
	*/
	function mapCacheDelete(key) {
		var result = getMapData(this, key)["delete"](key);
		this.size -= result ? 1 : 0;
		return result;
	}
	module.exports = mapCacheDelete;
}));
//#endregion
//#region node_modules/lodash/_mapCacheGet.js
var require__mapCacheGet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var getMapData = require__getMapData();
	/**
	* Gets the map value for `key`.
	*
	* @private
	* @name get
	* @memberOf MapCache
	* @param {string} key The key of the value to get.
	* @returns {*} Returns the entry value.
	*/
	function mapCacheGet(key) {
		return getMapData(this, key).get(key);
	}
	module.exports = mapCacheGet;
}));
//#endregion
//#region node_modules/lodash/_mapCacheHas.js
var require__mapCacheHas = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var getMapData = require__getMapData();
	/**
	* Checks if a map value for `key` exists.
	*
	* @private
	* @name has
	* @memberOf MapCache
	* @param {string} key The key of the entry to check.
	* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	*/
	function mapCacheHas(key) {
		return getMapData(this, key).has(key);
	}
	module.exports = mapCacheHas;
}));
//#endregion
//#region node_modules/lodash/_mapCacheSet.js
var require__mapCacheSet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var getMapData = require__getMapData();
	/**
	* Sets the map `key` to `value`.
	*
	* @private
	* @name set
	* @memberOf MapCache
	* @param {string} key The key of the value to set.
	* @param {*} value The value to set.
	* @returns {Object} Returns the map cache instance.
	*/
	function mapCacheSet(key, value) {
		var data = getMapData(this, key), size = data.size;
		data.set(key, value);
		this.size += data.size == size ? 0 : 1;
		return this;
	}
	module.exports = mapCacheSet;
}));
//#endregion
//#region node_modules/lodash/_MapCache.js
var require__MapCache = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var mapCacheClear = require__mapCacheClear();
	var mapCacheDelete = require__mapCacheDelete();
	var mapCacheGet = require__mapCacheGet();
	var mapCacheHas = require__mapCacheHas();
	var mapCacheSet = require__mapCacheSet();
	/**
	* Creates a map cache object to store key-value pairs.
	*
	* @private
	* @constructor
	* @param {Array} [entries] The key-value pairs to cache.
	*/
	function MapCache(entries) {
		var index = -1, length = entries == null ? 0 : entries.length;
		this.clear();
		while (++index < length) {
			var entry = entries[index];
			this.set(entry[0], entry[1]);
		}
	}
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype["delete"] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;
	module.exports = MapCache;
}));
//#endregion
//#region node_modules/lodash/memoize.js
var require_memoize = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var MapCache = require__MapCache();
	/** Error message constants. */
	var FUNC_ERROR_TEXT = "Expected a function";
	/**
	* Creates a function that memoizes the result of `func`. If `resolver` is
	* provided, it determines the cache key for storing the result based on the
	* arguments provided to the memoized function. By default, the first argument
	* provided to the memoized function is used as the map cache key. The `func`
	* is invoked with the `this` binding of the memoized function.
	*
	* **Note:** The cache is exposed as the `cache` property on the memoized
	* function. Its creation may be customized by replacing the `_.memoize.Cache`
	* constructor with one whose instances implement the
	* [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	* method interface of `clear`, `delete`, `get`, `has`, and `set`.
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @category Function
	* @param {Function} func The function to have its output memoized.
	* @param {Function} [resolver] The function to resolve the cache key.
	* @returns {Function} Returns the new memoized function.
	* @example
	*
	* var object = { 'a': 1, 'b': 2 };
	* var other = { 'c': 3, 'd': 4 };
	*
	* var values = _.memoize(_.values);
	* values(object);
	* // => [1, 2]
	*
	* values(other);
	* // => [3, 4]
	*
	* object.a = 2;
	* values(object);
	* // => [1, 2]
	*
	* // Modify the result cache.
	* values.cache.set(object, ['a', 'b']);
	* values(object);
	* // => ['a', 'b']
	*
	* // Replace `_.memoize.Cache`.
	* _.memoize.Cache = WeakMap;
	*/
	function memoize(func, resolver) {
		if (typeof func != "function" || resolver != null && typeof resolver != "function") throw new TypeError(FUNC_ERROR_TEXT);
		var memoized = function() {
			var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
			if (cache.has(key)) return cache.get(key);
			var result = func.apply(this, args);
			memoized.cache = cache.set(key, result) || cache;
			return result;
		};
		memoized.cache = new (memoize.Cache || MapCache)();
		return memoized;
	}
	memoize.Cache = MapCache;
	module.exports = memoize;
}));
//#endregion
//#region node_modules/lodash/_memoizeCapped.js
var require__memoizeCapped = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var memoize = require_memoize();
	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;
	/**
	* A specialized version of `_.memoize` which clears the memoized function's
	* cache when it exceeds `MAX_MEMOIZE_SIZE`.
	*
	* @private
	* @param {Function} func The function to have its output memoized.
	* @returns {Function} Returns the new memoized function.
	*/
	function memoizeCapped(func) {
		var result = memoize(func, function(key) {
			if (cache.size === MAX_MEMOIZE_SIZE) cache.clear();
			return key;
		});
		var cache = result.cache;
		return result;
	}
	module.exports = memoizeCapped;
}));
//#endregion
//#region node_modules/lodash/_stringToPath.js
var require__stringToPath = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var memoizeCapped = require__memoizeCapped();
	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;
	module.exports = memoizeCapped(function(string) {
		var result = [];
		if (string.charCodeAt(0) === 46) result.push("");
		string.replace(rePropName, function(match, number, quote, subString) {
			result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
		});
		return result;
	});
}));
//#endregion
//#region node_modules/lodash/_arrayMap.js
var require__arrayMap = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* A specialized version of `_.map` for arrays without support for iteratee
	* shorthands.
	*
	* @private
	* @param {Array} [array] The array to iterate over.
	* @param {Function} iteratee The function invoked per iteration.
	* @returns {Array} Returns the new mapped array.
	*/
	function arrayMap(array, iteratee) {
		var index = -1, length = array == null ? 0 : array.length, result = Array(length);
		while (++index < length) result[index] = iteratee(array[index], index, array);
		return result;
	}
	module.exports = arrayMap;
}));
//#endregion
//#region node_modules/lodash/_baseToString.js
var require__baseToString = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Symbol = require__Symbol();
	var arrayMap = require__arrayMap();
	var isArray = require_isArray();
	var isSymbol = require_isSymbol();
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : void 0;
	var symbolToString = symbolProto ? symbolProto.toString : void 0;
	/**
	* The base implementation of `_.toString` which doesn't convert nullish
	* values to empty strings.
	*
	* @private
	* @param {*} value The value to process.
	* @returns {string} Returns the string.
	*/
	function baseToString(value) {
		if (typeof value == "string") return value;
		if (isArray(value)) return arrayMap(value, baseToString) + "";
		if (isSymbol(value)) return symbolToString ? symbolToString.call(value) : "";
		var result = value + "";
		return result == "0" && 1 / value == -INFINITY ? "-0" : result;
	}
	module.exports = baseToString;
}));
//#endregion
//#region node_modules/lodash/toString.js
var require_toString = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseToString = require__baseToString();
	/**
	* Converts `value` to a string. An empty string is returned for `null`
	* and `undefined` values. The sign of `-0` is preserved.
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Lang
	* @param {*} value The value to convert.
	* @returns {string} Returns the converted string.
	* @example
	*
	* _.toString(null);
	* // => ''
	*
	* _.toString(-0);
	* // => '-0'
	*
	* _.toString([1, 2, 3]);
	* // => '1,2,3'
	*/
	function toString(value) {
		return value == null ? "" : baseToString(value);
	}
	module.exports = toString;
}));
//#endregion
//#region node_modules/lodash/_castPath.js
var require__castPath = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isArray = require_isArray();
	var isKey = require__isKey();
	var stringToPath = require__stringToPath();
	var toString = require_toString();
	/**
	* Casts `value` to a path array if it's not one.
	*
	* @private
	* @param {*} value The value to inspect.
	* @param {Object} [object] The object to query keys on.
	* @returns {Array} Returns the cast property path array.
	*/
	function castPath(value, object) {
		if (isArray(value)) return value;
		return isKey(value, object) ? [value] : stringToPath(toString(value));
	}
	module.exports = castPath;
}));
//#endregion
//#region node_modules/lodash/_toKey.js
var require__toKey = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isSymbol = require_isSymbol();
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	/**
	* Converts `value` to a string key if it's not a string or symbol.
	*
	* @private
	* @param {*} value The value to inspect.
	* @returns {string|symbol} Returns the key.
	*/
	function toKey(value) {
		if (typeof value == "string" || isSymbol(value)) return value;
		var result = value + "";
		return result == "0" && 1 / value == -INFINITY ? "-0" : result;
	}
	module.exports = toKey;
}));
//#endregion
//#region node_modules/lodash/_baseGet.js
var require__baseGet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var castPath = require__castPath();
	var toKey = require__toKey();
	/**
	* The base implementation of `_.get` without support for default values.
	*
	* @private
	* @param {Object} object The object to query.
	* @param {Array|string} path The path of the property to get.
	* @returns {*} Returns the resolved value.
	*/
	function baseGet(object, path) {
		path = castPath(path, object);
		var index = 0, length = path.length;
		while (object != null && index < length) object = object[toKey(path[index++])];
		return index && index == length ? object : void 0;
	}
	module.exports = baseGet;
}));
//#endregion
//#region node_modules/lodash/get.js
var require_get = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseGet = require__baseGet();
	/**
	* Gets the value at `path` of `object`. If the resolved value is
	* `undefined`, the `defaultValue` is returned in its place.
	*
	* @static
	* @memberOf _
	* @since 3.7.0
	* @category Object
	* @param {Object} object The object to query.
	* @param {Array|string} path The path of the property to get.
	* @param {*} [defaultValue] The value returned for `undefined` resolved values.
	* @returns {*} Returns the resolved value.
	* @example
	*
	* var object = { 'a': [{ 'b': { 'c': 3 } }] };
	*
	* _.get(object, 'a[0].b.c');
	* // => 3
	*
	* _.get(object, ['a', '0', 'b', 'c']);
	* // => 3
	*
	* _.get(object, 'a.b.c', 'default');
	* // => 'default'
	*/
	function get(object, path, defaultValue) {
		var result = object == null ? void 0 : baseGet(object, path);
		return result === void 0 ? defaultValue : result;
	}
	module.exports = get;
}));
//#endregion
//#region node_modules/@douyinfe/semi-foundation/lib/es/utils/log.js
var import_noop = /* @__PURE__ */ __toESM(require_noop());
var import_get = /* @__PURE__ */ __toESM(require_get());
var log = function(text) {
	if ((0, import_get.default)(process, "env.NODE_ENV") === "development") {
		for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) rest[_key - 1] = arguments[_key];
		console.log(text, ...rest);
	}
};
//#endregion
//#region node_modules/@douyinfe/semi-foundation/lib/es/base/foundation.js
/**
* The Semi Foundation / Adapter architecture split was inspired by Material Component For Web. （https://github.com/material-components/material-components-web）
* We re-implemented our own code based on the principle and added more functions we need according to actual needs.
*
*/
var BaseFoundation = class BaseFoundation {
	/** @return enum{css className} */
	/* istanbul ignore next */
	static get cssClasses() {
		return {};
	}
	/** @return enum{strings} */
	/* istanbul ignore next */
	static get strings() {
		return {};
	}
	/** @return enum{numbers} */
	/* istanbul ignore next */
	static get numbers() {
		return {};
	}
	static get defaultAdapter() {
		return {
			getProp: import_noop.default,
			getProps: import_noop.default,
			getState: import_noop.default,
			getStates: import_noop.default,
			setState: import_noop.default,
			getContext: import_noop.default,
			getContexts: import_noop.default,
			getCache: import_noop.default,
			setCache: import_noop.default,
			getCaches: import_noop.default,
			stopPropagation: import_noop.default,
			persistEvent: import_noop.default
		};
	}
	constructor(adapter) {
		this._adapter = Object.assign(Object.assign({}, BaseFoundation.defaultAdapter), adapter);
	}
	getProp(key) {
		return this._adapter.getProp(key);
	}
	getProps() {
		return this._adapter.getProps();
	}
	getState(key) {
		return this._adapter.getState(key);
	}
	getStates() {
		return this._adapter.getStates();
	}
	setState(states, cb) {
		return this._adapter.setState(Object.assign({}, states), cb);
	}
	getContext(key) {
		return this._adapter.getContext(key);
	}
	/* istanbul ignore next */
	getContexts() {
		return this._adapter.getContexts();
	}
	/* istanbul ignore next */
	getCaches() {
		return this._adapter.getCaches();
	}
	getCache(key) {
		return this._adapter.getCache(key);
	}
	setCache(key, value) {
		return key && this._adapter.setCache(key, value);
	}
	stopPropagation(e) {
		this._adapter.stopPropagation(e);
	}
	_isControlledComponent() {
		return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "value") in this.getProps();
	}
	_isInProps(key) {
		return key in this.getProps();
	}
	init(lifecycle) {}
	destroy() {}
	/* istanbul ignore next */
	log(text) {
		for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) rest[_key - 1] = arguments[_key];
		log(text, ...rest);
	}
	_persistEvent(e) {
		this._adapter.persistEvent(e);
	}
};
//#endregion
//#region node_modules/@douyinfe/semi-foundation/lib/es/utils/getDataAttr.js
function getDataAttr(props) {
	return Object.keys(props).reduce((prev, key) => {
		if (key.substr(0, 5) === "data-") prev[key] = props[key];
		return prev;
	}, {});
}
//#endregion
//#region node_modules/@douyinfe/semi-ui/lib/es/_base/baseComponent.js
/**
* The Semi Foundation / Adapter architecture split was inspired by Material Component For Web. （https://github.com/material-components/material-components-web）
* We re-implemented our own code based on the principle and added more functions we need according to actual needs.
*/
var { hasOwnProperty } = Object.prototype;
var BaseComponent = class extends Component {
	constructor(props) {
		super(props);
		this.isControlled = (key) => Boolean(key && this.props && typeof this.props === "object" && hasOwnProperty.call(this.props, key));
		this.setStateAsync = (state) => {
			return new Promise((resolve) => {
				this.setState(state, resolve);
			});
		};
		this.cache = {};
		this.foundation = null;
	}
	componentDidMount() {
		this.foundation && typeof this.foundation.init === "function" && this.foundation.init();
	}
	componentWillUnmount() {
		this.foundation && typeof this.foundation.destroy === "function" && this.foundation.destroy();
		this.cache = {};
	}
	get adapter() {
		return {
			getContext: (key) => {
				if (this.context && key) return this.context[key];
			},
			getContexts: () => this.context,
			getProp: (key) => this.props[key],
			getProps: () => this.props,
			getState: (key) => this.state[key],
			getStates: () => this.state,
			setState: (states, cb) => this.setState(Object.assign({}, states), cb),
			getCache: (key) => key && this.cache[key],
			getCaches: () => this.cache,
			setCache: (key, value) => key && (this.cache[key] = value),
			stopPropagation: (e) => {
				try {
					e.stopPropagation();
					e.nativeEvent && e.nativeEvent.stopImmediatePropagation();
				} catch (error) {}
			},
			persistEvent: (e) => {
				e && e.persist && typeof e.persist === "function" && e.persist();
			}
		};
	}
	log(text) {
		for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) rest[_key - 1] = arguments[_key];
		return log(text, ...rest);
	}
	getDataAttr() {
		return getDataAttr(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.props);
	}
};
BaseComponent.propTypes = {};
BaseComponent.defaultProps = {};
//#endregion
//#region node_modules/lodash/now.js
var require_now = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var root = require__root();
	/**
	* Gets the timestamp of the number of milliseconds that have elapsed since
	* the Unix epoch (1 January 1970 00:00:00 UTC).
	*
	* @static
	* @memberOf _
	* @since 2.4.0
	* @category Date
	* @returns {number} Returns the timestamp.
	* @example
	*
	* _.defer(function(stamp) {
	*   console.log(_.now() - stamp);
	* }, _.now());
	* // => Logs the number of milliseconds it took for the deferred invocation.
	*/
	var now = function() {
		return root.Date.now();
	};
	module.exports = now;
}));
//#endregion
//#region node_modules/lodash/_trimmedEndIndex.js
var require__trimmedEndIndex = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** Used to match a single whitespace character. */
	var reWhitespace = /\s/;
	/**
	* Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
	* character of `string`.
	*
	* @private
	* @param {string} string The string to inspect.
	* @returns {number} Returns the index of the last non-whitespace character.
	*/
	function trimmedEndIndex(string) {
		var index = string.length;
		while (index-- && reWhitespace.test(string.charAt(index)));
		return index;
	}
	module.exports = trimmedEndIndex;
}));
//#endregion
//#region node_modules/lodash/_baseTrim.js
var require__baseTrim = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var trimmedEndIndex = require__trimmedEndIndex();
	/** Used to match leading whitespace. */
	var reTrimStart = /^\s+/;
	/**
	* The base implementation of `_.trim`.
	*
	* @private
	* @param {string} string The string to trim.
	* @returns {string} Returns the trimmed string.
	*/
	function baseTrim(string) {
		return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
	}
	module.exports = baseTrim;
}));
//#endregion
//#region node_modules/lodash/toNumber.js
var require_toNumber = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseTrim = require__baseTrim();
	var isObject = require_isObject();
	var isSymbol = require_isSymbol();
	/** Used as references for various `Number` constants. */
	var NAN = NaN;
	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;
	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;
	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;
	/**
	* Converts `value` to a number.
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Lang
	* @param {*} value The value to process.
	* @returns {number} Returns the number.
	* @example
	*
	* _.toNumber(3.2);
	* // => 3.2
	*
	* _.toNumber(Number.MIN_VALUE);
	* // => 5e-324
	*
	* _.toNumber(Infinity);
	* // => Infinity
	*
	* _.toNumber('3.2');
	* // => 3.2
	*/
	function toNumber(value) {
		if (typeof value == "number") return value;
		if (isSymbol(value)) return NAN;
		if (isObject(value)) {
			var other = typeof value.valueOf == "function" ? value.valueOf() : value;
			value = isObject(other) ? other + "" : other;
		}
		if (typeof value != "string") return value === 0 ? value : +value;
		value = baseTrim(value);
		var isBinary = reIsBinary.test(value);
		return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
	}
	module.exports = toNumber;
}));
//#endregion
//#region node_modules/lodash/debounce.js
var require_debounce = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isObject = require_isObject();
	var now = require_now();
	var toNumber = require_toNumber();
	/** Error message constants. */
	var FUNC_ERROR_TEXT = "Expected a function";
	var nativeMax = Math.max;
	var nativeMin = Math.min;
	/**
	* Creates a debounced function that delays invoking `func` until after `wait`
	* milliseconds have elapsed since the last time the debounced function was
	* invoked. The debounced function comes with a `cancel` method to cancel
	* delayed `func` invocations and a `flush` method to immediately invoke them.
	* Provide `options` to indicate whether `func` should be invoked on the
	* leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	* with the last arguments provided to the debounced function. Subsequent
	* calls to the debounced function return the result of the last `func`
	* invocation.
	*
	* **Note:** If `leading` and `trailing` options are `true`, `func` is
	* invoked on the trailing edge of the timeout only if the debounced function
	* is invoked more than once during the `wait` timeout.
	*
	* If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	* until to the next tick, similar to `setTimeout` with a timeout of `0`.
	*
	* See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	* for details over the differences between `_.debounce` and `_.throttle`.
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @category Function
	* @param {Function} func The function to debounce.
	* @param {number} [wait=0] The number of milliseconds to delay.
	* @param {Object} [options={}] The options object.
	* @param {boolean} [options.leading=false]
	*  Specify invoking on the leading edge of the timeout.
	* @param {number} [options.maxWait]
	*  The maximum time `func` is allowed to be delayed before it's invoked.
	* @param {boolean} [options.trailing=true]
	*  Specify invoking on the trailing edge of the timeout.
	* @returns {Function} Returns the new debounced function.
	* @example
	*
	* // Avoid costly calculations while the window size is in flux.
	* jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	*
	* // Invoke `sendMail` when clicked, debouncing subsequent calls.
	* jQuery(element).on('click', _.debounce(sendMail, 300, {
	*   'leading': true,
	*   'trailing': false
	* }));
	*
	* // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	* var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	* var source = new EventSource('/stream');
	* jQuery(source).on('message', debounced);
	*
	* // Cancel the trailing debounced invocation.
	* jQuery(window).on('popstate', debounced.cancel);
	*/
	function debounce(func, wait, options) {
		var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
		if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
		wait = toNumber(wait) || 0;
		if (isObject(options)) {
			leading = !!options.leading;
			maxing = "maxWait" in options;
			maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
			trailing = "trailing" in options ? !!options.trailing : trailing;
		}
		function invokeFunc(time) {
			var args = lastArgs, thisArg = lastThis;
			lastArgs = lastThis = void 0;
			lastInvokeTime = time;
			result = func.apply(thisArg, args);
			return result;
		}
		function leadingEdge(time) {
			lastInvokeTime = time;
			timerId = setTimeout(timerExpired, wait);
			return leading ? invokeFunc(time) : result;
		}
		function remainingWait(time) {
			var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
			return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
		}
		function shouldInvoke(time) {
			var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
			return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
		}
		function timerExpired() {
			var time = now();
			if (shouldInvoke(time)) return trailingEdge(time);
			timerId = setTimeout(timerExpired, remainingWait(time));
		}
		function trailingEdge(time) {
			timerId = void 0;
			if (trailing && lastArgs) return invokeFunc(time);
			lastArgs = lastThis = void 0;
			return result;
		}
		function cancel() {
			if (timerId !== void 0) clearTimeout(timerId);
			lastInvokeTime = 0;
			lastArgs = lastCallTime = lastThis = timerId = void 0;
		}
		function flush() {
			return timerId === void 0 ? result : trailingEdge(now());
		}
		function debounced() {
			var time = now(), isInvoking = shouldInvoke(time);
			lastArgs = arguments;
			lastThis = this;
			lastCallTime = time;
			if (isInvoking) {
				if (timerId === void 0) return leadingEdge(lastCallTime);
				if (maxing) {
					clearTimeout(timerId);
					timerId = setTimeout(timerExpired, wait);
					return invokeFunc(lastCallTime);
				}
			}
			if (timerId === void 0) timerId = setTimeout(timerExpired, wait);
			return result;
		}
		debounced.cancel = cancel;
		debounced.flush = flush;
		return debounced;
	}
	module.exports = debounce;
}));
//#endregion
//#region node_modules/lodash/throttle.js
var require_throttle = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var debounce = require_debounce();
	var isObject = require_isObject();
	/** Error message constants. */
	var FUNC_ERROR_TEXT = "Expected a function";
	/**
	* Creates a throttled function that only invokes `func` at most once per
	* every `wait` milliseconds. The throttled function comes with a `cancel`
	* method to cancel delayed `func` invocations and a `flush` method to
	* immediately invoke them. Provide `options` to indicate whether `func`
	* should be invoked on the leading and/or trailing edge of the `wait`
	* timeout. The `func` is invoked with the last arguments provided to the
	* throttled function. Subsequent calls to the throttled function return the
	* result of the last `func` invocation.
	*
	* **Note:** If `leading` and `trailing` options are `true`, `func` is
	* invoked on the trailing edge of the timeout only if the throttled function
	* is invoked more than once during the `wait` timeout.
	*
	* If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	* until to the next tick, similar to `setTimeout` with a timeout of `0`.
	*
	* See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	* for details over the differences between `_.throttle` and `_.debounce`.
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @category Function
	* @param {Function} func The function to throttle.
	* @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	* @param {Object} [options={}] The options object.
	* @param {boolean} [options.leading=true]
	*  Specify invoking on the leading edge of the timeout.
	* @param {boolean} [options.trailing=true]
	*  Specify invoking on the trailing edge of the timeout.
	* @returns {Function} Returns the new throttled function.
	* @example
	*
	* // Avoid excessively updating the position while scrolling.
	* jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	*
	* // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
	* var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
	* jQuery(element).on('click', throttled);
	*
	* // Cancel the trailing throttled invocation.
	* jQuery(window).on('popstate', throttled.cancel);
	*/
	function throttle(func, wait, options) {
		var leading = true, trailing = true;
		if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
		if (isObject(options)) {
			leading = "leading" in options ? !!options.leading : leading;
			trailing = "trailing" in options ? !!options.trailing : trailing;
		}
		return debounce(func, wait, {
			"leading": leading,
			"maxWait": wait,
			"trailing": trailing
		});
	}
	module.exports = throttle;
}));
//#endregion
//#region node_modules/classnames/index.js
var require_classnames = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
	*/
	(function() {
		"use strict";
		var hasOwn = {}.hasOwnProperty;
		function classNames() {
			var classes = "";
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (arg) classes = appendClass(classes, parseValue(arg));
			}
			return classes;
		}
		function parseValue(arg) {
			if (typeof arg === "string" || typeof arg === "number") return arg;
			if (typeof arg !== "object") return "";
			if (Array.isArray(arg)) return classNames.apply(null, arg);
			if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) return arg.toString();
			var classes = "";
			for (var key in arg) if (hasOwn.call(arg, key) && arg[key]) classes = appendClass(classes, key);
			return classes;
		}
		function appendClass(value, newClass) {
			if (!newClass) return value;
			if (value) return value + " " + newClass;
			return value + newClass;
		}
		if (typeof module !== "undefined" && module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else if (typeof define === "function" && typeof define.amd === "object" && define.amd) define("classnames", [], function() {
			return classNames;
		});
		else window.classNames = classNames;
	})();
}));
//#endregion
//#region node_modules/prop-types/lib/ReactPropTypesSecret.js
/**
* Copyright (c) 2013-present, Facebook, Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_ReactPropTypesSecret = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
}));
//#endregion
//#region node_modules/prop-types/factoryWithThrowingShims.js
/**
* Copyright (c) 2013-present, Facebook, Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_factoryWithThrowingShims = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var ReactPropTypesSecret = require_ReactPropTypesSecret();
	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;
	module.exports = function() {
		function shim(props, propName, componentName, location, propFullName, secret) {
			if (secret === ReactPropTypesSecret) return;
			var err = /* @__PURE__ */ new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
			err.name = "Invariant Violation";
			throw err;
		}
		shim.isRequired = shim;
		function getShim() {
			return shim;
		}
		var ReactPropTypes = {
			array: shim,
			bigint: shim,
			bool: shim,
			func: shim,
			number: shim,
			object: shim,
			string: shim,
			symbol: shim,
			any: shim,
			arrayOf: getShim,
			element: shim,
			elementType: shim,
			instanceOf: getShim,
			node: shim,
			objectOf: getShim,
			oneOf: getShim,
			oneOfType: getShim,
			shape: getShim,
			exact: getShim,
			checkPropTypes: emptyFunctionWithReset,
			resetWarningCache: emptyFunction
		};
		ReactPropTypes.PropTypes = ReactPropTypes;
		return ReactPropTypes;
	};
}));
//#endregion
//#region node_modules/prop-types/index.js
var require_prop_types = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_factoryWithThrowingShims()();
}));
//#endregion
//#region node_modules/@douyinfe/semi-foundation/lib/es/base/env.js
var BASE_CLASS_PREFIX$1 = "semi";
//#endregion
//#region node_modules/lodash/_stackClear.js
var require__stackClear = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var ListCache = require__ListCache();
	/**
	* Removes all key-value entries from the stack.
	*
	* @private
	* @name clear
	* @memberOf Stack
	*/
	function stackClear() {
		this.__data__ = new ListCache();
		this.size = 0;
	}
	module.exports = stackClear;
}));
//#endregion
//#region node_modules/lodash/_stackDelete.js
var require__stackDelete = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Removes `key` and its value from the stack.
	*
	* @private
	* @name delete
	* @memberOf Stack
	* @param {string} key The key of the value to remove.
	* @returns {boolean} Returns `true` if the entry was removed, else `false`.
	*/
	function stackDelete(key) {
		var data = this.__data__, result = data["delete"](key);
		this.size = data.size;
		return result;
	}
	module.exports = stackDelete;
}));
//#endregion
//#region node_modules/lodash/_stackGet.js
var require__stackGet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Gets the stack value for `key`.
	*
	* @private
	* @name get
	* @memberOf Stack
	* @param {string} key The key of the value to get.
	* @returns {*} Returns the entry value.
	*/
	function stackGet(key) {
		return this.__data__.get(key);
	}
	module.exports = stackGet;
}));
//#endregion
//#region node_modules/lodash/_stackHas.js
var require__stackHas = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Checks if a stack value for `key` exists.
	*
	* @private
	* @name has
	* @memberOf Stack
	* @param {string} key The key of the entry to check.
	* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	*/
	function stackHas(key) {
		return this.__data__.has(key);
	}
	module.exports = stackHas;
}));
//#endregion
//#region node_modules/lodash/_stackSet.js
var require__stackSet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var ListCache = require__ListCache();
	var Map = require__Map();
	var MapCache = require__MapCache();
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	/**
	* Sets the stack `key` to `value`.
	*
	* @private
	* @name set
	* @memberOf Stack
	* @param {string} key The key of the value to set.
	* @param {*} value The value to set.
	* @returns {Object} Returns the stack cache instance.
	*/
	function stackSet(key, value) {
		var data = this.__data__;
		if (data instanceof ListCache) {
			var pairs = data.__data__;
			if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
				pairs.push([key, value]);
				this.size = ++data.size;
				return this;
			}
			data = this.__data__ = new MapCache(pairs);
		}
		data.set(key, value);
		this.size = data.size;
		return this;
	}
	module.exports = stackSet;
}));
//#endregion
//#region node_modules/lodash/_Stack.js
var require__Stack = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var ListCache = require__ListCache();
	var stackClear = require__stackClear();
	var stackDelete = require__stackDelete();
	var stackGet = require__stackGet();
	var stackHas = require__stackHas();
	var stackSet = require__stackSet();
	/**
	* Creates a stack cache object to store key-value pairs.
	*
	* @private
	* @constructor
	* @param {Array} [entries] The key-value pairs to cache.
	*/
	function Stack(entries) {
		var data = this.__data__ = new ListCache(entries);
		this.size = data.size;
	}
	Stack.prototype.clear = stackClear;
	Stack.prototype["delete"] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;
	module.exports = Stack;
}));
//#endregion
//#region node_modules/lodash/_arrayEach.js
var require__arrayEach = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* A specialized version of `_.forEach` for arrays without support for
	* iteratee shorthands.
	*
	* @private
	* @param {Array} [array] The array to iterate over.
	* @param {Function} iteratee The function invoked per iteration.
	* @returns {Array} Returns `array`.
	*/
	function arrayEach(array, iteratee) {
		var index = -1, length = array == null ? 0 : array.length;
		while (++index < length) if (iteratee(array[index], index, array) === false) break;
		return array;
	}
	module.exports = arrayEach;
}));
//#endregion
//#region node_modules/lodash/_defineProperty.js
var require__defineProperty = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var getNative = require__getNative();
	module.exports = function() {
		try {
			var func = getNative(Object, "defineProperty");
			func({}, "", {});
			return func;
		} catch (e) {}
	}();
}));
//#endregion
//#region node_modules/lodash/_baseAssignValue.js
var require__baseAssignValue = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var defineProperty = require__defineProperty();
	/**
	* The base implementation of `assignValue` and `assignMergeValue` without
	* value checks.
	*
	* @private
	* @param {Object} object The object to modify.
	* @param {string} key The key of the property to assign.
	* @param {*} value The value to assign.
	*/
	function baseAssignValue(object, key, value) {
		if (key == "__proto__" && defineProperty) defineProperty(object, key, {
			"configurable": true,
			"enumerable": true,
			"value": value,
			"writable": true
		});
		else object[key] = value;
	}
	module.exports = baseAssignValue;
}));
//#endregion
//#region node_modules/lodash/_assignValue.js
var require__assignValue = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseAssignValue = require__baseAssignValue();
	var eq = require_eq();
	/** Used to check objects for own properties. */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	* Assigns `value` to `key` of `object` if the existing value is not equivalent
	* using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	* for equality comparisons.
	*
	* @private
	* @param {Object} object The object to modify.
	* @param {string} key The key of the property to assign.
	* @param {*} value The value to assign.
	*/
	function assignValue(object, key, value) {
		var objValue = object[key];
		if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) baseAssignValue(object, key, value);
	}
	module.exports = assignValue;
}));
//#endregion
//#region node_modules/lodash/_copyObject.js
var require__copyObject = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var assignValue = require__assignValue();
	var baseAssignValue = require__baseAssignValue();
	/**
	* Copies properties of `source` to `object`.
	*
	* @private
	* @param {Object} source The object to copy properties from.
	* @param {Array} props The property identifiers to copy.
	* @param {Object} [object={}] The object to copy properties to.
	* @param {Function} [customizer] The function to customize copied values.
	* @returns {Object} Returns `object`.
	*/
	function copyObject(source, props, object, customizer) {
		var isNew = !object;
		object || (object = {});
		var index = -1, length = props.length;
		while (++index < length) {
			var key = props[index];
			var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
			if (newValue === void 0) newValue = source[key];
			if (isNew) baseAssignValue(object, key, newValue);
			else assignValue(object, key, newValue);
		}
		return object;
	}
	module.exports = copyObject;
}));
//#endregion
//#region node_modules/lodash/_baseTimes.js
var require__baseTimes = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* The base implementation of `_.times` without support for iteratee shorthands
	* or max array length checks.
	*
	* @private
	* @param {number} n The number of times to invoke `iteratee`.
	* @param {Function} iteratee The function invoked per iteration.
	* @returns {Array} Returns the array of results.
	*/
	function baseTimes(n, iteratee) {
		var index = -1, result = Array(n);
		while (++index < n) result[index] = iteratee(index);
		return result;
	}
	module.exports = baseTimes;
}));
//#endregion
//#region node_modules/lodash/_baseIsArguments.js
var require__baseIsArguments = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseGetTag = require__baseGetTag();
	var isObjectLike = require_isObjectLike();
	/** `Object#toString` result references. */
	var argsTag = "[object Arguments]";
	/**
	* The base implementation of `_.isArguments`.
	*
	* @private
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is an `arguments` object,
	*/
	function baseIsArguments(value) {
		return isObjectLike(value) && baseGetTag(value) == argsTag;
	}
	module.exports = baseIsArguments;
}));
//#endregion
//#region node_modules/lodash/isArguments.js
var require_isArguments = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseIsArguments = require__baseIsArguments();
	var isObjectLike = require_isObjectLike();
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	module.exports = baseIsArguments(function() {
		return arguments;
	}()) ? baseIsArguments : function(value) {
		return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
	};
}));
//#endregion
//#region node_modules/lodash/stubFalse.js
var require_stubFalse = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* This method returns `false`.
	*
	* @static
	* @memberOf _
	* @since 4.13.0
	* @category Util
	* @returns {boolean} Returns `false`.
	* @example
	*
	* _.times(2, _.stubFalse);
	* // => [false, false]
	*/
	function stubFalse() {
		return false;
	}
	module.exports = stubFalse;
}));
//#endregion
//#region node_modules/lodash/isBuffer.js
var require_isBuffer = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var root = require__root();
	var stubFalse = require_stubFalse();
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
	/** Built-in value references. */
	var Buffer = freeModule && freeModule.exports === freeExports ? root.Buffer : void 0;
	module.exports = (Buffer ? Buffer.isBuffer : void 0) || stubFalse;
}));
//#endregion
//#region node_modules/lodash/_isIndex.js
var require__isIndex = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	/**
	* Checks if `value` is a valid array-like index.
	*
	* @private
	* @param {*} value The value to check.
	* @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	* @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	*/
	function isIndex(value, length) {
		var type = typeof value;
		length = length == null ? MAX_SAFE_INTEGER : length;
		return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
	}
	module.exports = isIndex;
}));
//#endregion
//#region node_modules/lodash/isLength.js
var require_isLength = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	/**
	* Checks if `value` is a valid array-like length.
	*
	* **Note:** This method is loosely based on
	* [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	* @example
	*
	* _.isLength(3);
	* // => true
	*
	* _.isLength(Number.MIN_VALUE);
	* // => false
	*
	* _.isLength(Infinity);
	* // => false
	*
	* _.isLength('3');
	* // => false
	*/
	function isLength(value) {
		return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	module.exports = isLength;
}));
//#endregion
//#region node_modules/lodash/_baseIsTypedArray.js
var require__baseIsTypedArray = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseGetTag = require__baseGetTag();
	var isLength = require_isLength();
	var isObjectLike = require_isObjectLike();
	/** `Object#toString` result references. */
	var argsTag = "[object Arguments]";
	var arrayTag = "[object Array]";
	var boolTag = "[object Boolean]";
	var dateTag = "[object Date]";
	var errorTag = "[object Error]";
	var funcTag = "[object Function]";
	var mapTag = "[object Map]";
	var numberTag = "[object Number]";
	var objectTag = "[object Object]";
	var regexpTag = "[object RegExp]";
	var setTag = "[object Set]";
	var stringTag = "[object String]";
	var weakMapTag = "[object WeakMap]";
	var arrayBufferTag = "[object ArrayBuffer]";
	var dataViewTag = "[object DataView]";
	var float32Tag = "[object Float32Array]";
	var float64Tag = "[object Float64Array]";
	var int8Tag = "[object Int8Array]";
	var int16Tag = "[object Int16Array]";
	var int32Tag = "[object Int32Array]";
	var uint8Tag = "[object Uint8Array]";
	var uint8ClampedTag = "[object Uint8ClampedArray]";
	var uint16Tag = "[object Uint16Array]";
	var uint32Tag = "[object Uint32Array]";
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
	/**
	* The base implementation of `_.isTypedArray` without Node.js optimizations.
	*
	* @private
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	*/
	function baseIsTypedArray(value) {
		return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}
	module.exports = baseIsTypedArray;
}));
//#endregion
//#region node_modules/lodash/_baseUnary.js
var require__baseUnary = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* The base implementation of `_.unary` without support for storing metadata.
	*
	* @private
	* @param {Function} func The function to cap arguments for.
	* @returns {Function} Returns the new capped function.
	*/
	function baseUnary(func) {
		return function(value) {
			return func(value);
		};
	}
	module.exports = baseUnary;
}));
//#endregion
//#region node_modules/lodash/_nodeUtil.js
var require__nodeUtil = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var freeGlobal = require__freeGlobal();
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
	/** Detect free variable `process` from Node.js. */
	var freeProcess = freeModule && freeModule.exports === freeExports && freeGlobal.process;
	module.exports = function() {
		try {
			var types = freeModule && freeModule.require && freeModule.require("util").types;
			if (types) return types;
			return freeProcess && freeProcess.binding && freeProcess.binding("util");
		} catch (e) {}
	}();
}));
//#endregion
//#region node_modules/lodash/isTypedArray.js
var require_isTypedArray = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseIsTypedArray = require__baseIsTypedArray();
	var baseUnary = require__baseUnary();
	var nodeUtil = require__nodeUtil();
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
	module.exports = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
}));
//#endregion
//#region node_modules/lodash/_arrayLikeKeys.js
var require__arrayLikeKeys = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseTimes = require__baseTimes();
	var isArguments = require_isArguments();
	var isArray = require_isArray();
	var isBuffer = require_isBuffer();
	var isIndex = require__isIndex();
	var isTypedArray = require_isTypedArray();
	/** Used to check objects for own properties. */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	* Creates an array of the enumerable property names of the array-like `value`.
	*
	* @private
	* @param {*} value The value to query.
	* @param {boolean} inherited Specify returning inherited property names.
	* @returns {Array} Returns the array of property names.
	*/
	function arrayLikeKeys(value, inherited) {
		var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
		for (var key in value) if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) result.push(key);
		return result;
	}
	module.exports = arrayLikeKeys;
}));
//#endregion
//#region node_modules/lodash/_isPrototype.js
var require__isPrototype = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	/**
	* Checks if `value` is likely a prototype object.
	*
	* @private
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	*/
	function isPrototype(value) {
		var Ctor = value && value.constructor;
		return value === (typeof Ctor == "function" && Ctor.prototype || objectProto);
	}
	module.exports = isPrototype;
}));
//#endregion
//#region node_modules/lodash/_overArg.js
var require__overArg = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Creates a unary function that invokes `func` with its argument transformed.
	*
	* @private
	* @param {Function} func The function to wrap.
	* @param {Function} transform The argument transform.
	* @returns {Function} Returns the new function.
	*/
	function overArg(func, transform) {
		return function(arg) {
			return func(transform(arg));
		};
	}
	module.exports = overArg;
}));
//#endregion
//#region node_modules/lodash/_nativeKeys.js
var require__nativeKeys = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__overArg()(Object.keys, Object);
}));
//#endregion
//#region node_modules/lodash/_baseKeys.js
var require__baseKeys = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isPrototype = require__isPrototype();
	var nativeKeys = require__nativeKeys();
	/** Used to check objects for own properties. */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	* The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	*
	* @private
	* @param {Object} object The object to query.
	* @returns {Array} Returns the array of property names.
	*/
	function baseKeys(object) {
		if (!isPrototype(object)) return nativeKeys(object);
		var result = [];
		for (var key in Object(object)) if (hasOwnProperty.call(object, key) && key != "constructor") result.push(key);
		return result;
	}
	module.exports = baseKeys;
}));
//#endregion
//#region node_modules/lodash/isArrayLike.js
var require_isArrayLike = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isFunction = require_isFunction();
	var isLength = require_isLength();
	/**
	* Checks if `value` is array-like. A value is considered array-like if it's
	* not a function and has a `value.length` that's an integer greater than or
	* equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	* @example
	*
	* _.isArrayLike([1, 2, 3]);
	* // => true
	*
	* _.isArrayLike(document.body.children);
	* // => true
	*
	* _.isArrayLike('abc');
	* // => true
	*
	* _.isArrayLike(_.noop);
	* // => false
	*/
	function isArrayLike(value) {
		return value != null && isLength(value.length) && !isFunction(value);
	}
	module.exports = isArrayLike;
}));
//#endregion
//#region node_modules/lodash/keys.js
var require_keys = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var arrayLikeKeys = require__arrayLikeKeys();
	var baseKeys = require__baseKeys();
	var isArrayLike = require_isArrayLike();
	/**
	* Creates an array of the own enumerable property names of `object`.
	*
	* **Note:** Non-object values are coerced to objects. See the
	* [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	* for more details.
	*
	* @static
	* @since 0.1.0
	* @memberOf _
	* @category Object
	* @param {Object} object The object to query.
	* @returns {Array} Returns the array of property names.
	* @example
	*
	* function Foo() {
	*   this.a = 1;
	*   this.b = 2;
	* }
	*
	* Foo.prototype.c = 3;
	*
	* _.keys(new Foo);
	* // => ['a', 'b'] (iteration order is not guaranteed)
	*
	* _.keys('hi');
	* // => ['0', '1']
	*/
	function keys(object) {
		return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}
	module.exports = keys;
}));
//#endregion
//#region node_modules/lodash/_baseAssign.js
var require__baseAssign = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var copyObject = require__copyObject();
	var keys = require_keys();
	/**
	* The base implementation of `_.assign` without support for multiple sources
	* or `customizer` functions.
	*
	* @private
	* @param {Object} object The destination object.
	* @param {Object} source The source object.
	* @returns {Object} Returns `object`.
	*/
	function baseAssign(object, source) {
		return object && copyObject(source, keys(source), object);
	}
	module.exports = baseAssign;
}));
//#endregion
//#region node_modules/lodash/_nativeKeysIn.js
var require__nativeKeysIn = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* This function is like
	* [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	* except that it includes inherited enumerable properties.
	*
	* @private
	* @param {Object} object The object to query.
	* @returns {Array} Returns the array of property names.
	*/
	function nativeKeysIn(object) {
		var result = [];
		if (object != null) for (var key in Object(object)) result.push(key);
		return result;
	}
	module.exports = nativeKeysIn;
}));
//#endregion
//#region node_modules/lodash/_baseKeysIn.js
var require__baseKeysIn = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isObject = require_isObject();
	var isPrototype = require__isPrototype();
	var nativeKeysIn = require__nativeKeysIn();
	/** Used to check objects for own properties. */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	* The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	*
	* @private
	* @param {Object} object The object to query.
	* @returns {Array} Returns the array of property names.
	*/
	function baseKeysIn(object) {
		if (!isObject(object)) return nativeKeysIn(object);
		var isProto = isPrototype(object), result = [];
		for (var key in object) if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) result.push(key);
		return result;
	}
	module.exports = baseKeysIn;
}));
//#endregion
//#region node_modules/lodash/keysIn.js
var require_keysIn = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var arrayLikeKeys = require__arrayLikeKeys();
	var baseKeysIn = require__baseKeysIn();
	var isArrayLike = require_isArrayLike();
	/**
	* Creates an array of the own and inherited enumerable property names of `object`.
	*
	* **Note:** Non-object values are coerced to objects.
	*
	* @static
	* @memberOf _
	* @since 3.0.0
	* @category Object
	* @param {Object} object The object to query.
	* @returns {Array} Returns the array of property names.
	* @example
	*
	* function Foo() {
	*   this.a = 1;
	*   this.b = 2;
	* }
	*
	* Foo.prototype.c = 3;
	*
	* _.keysIn(new Foo);
	* // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	*/
	function keysIn(object) {
		return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}
	module.exports = keysIn;
}));
//#endregion
//#region node_modules/lodash/_baseAssignIn.js
var require__baseAssignIn = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var copyObject = require__copyObject();
	var keysIn = require_keysIn();
	/**
	* The base implementation of `_.assignIn` without support for multiple sources
	* or `customizer` functions.
	*
	* @private
	* @param {Object} object The destination object.
	* @param {Object} source The source object.
	* @returns {Object} Returns `object`.
	*/
	function baseAssignIn(object, source) {
		return object && copyObject(source, keysIn(source), object);
	}
	module.exports = baseAssignIn;
}));
//#endregion
//#region node_modules/lodash/_cloneBuffer.js
var require__cloneBuffer = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var root = require__root();
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
	/** Built-in value references. */
	var Buffer = freeModule && freeModule.exports === freeExports ? root.Buffer : void 0;
	var allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
	/**
	* Creates a clone of  `buffer`.
	*
	* @private
	* @param {Buffer} buffer The buffer to clone.
	* @param {boolean} [isDeep] Specify a deep clone.
	* @returns {Buffer} Returns the cloned buffer.
	*/
	function cloneBuffer(buffer, isDeep) {
		if (isDeep) return buffer.slice();
		var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
		buffer.copy(result);
		return result;
	}
	module.exports = cloneBuffer;
}));
//#endregion
//#region node_modules/lodash/_copyArray.js
var require__copyArray = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Copies the values of `source` to `array`.
	*
	* @private
	* @param {Array} source The array to copy values from.
	* @param {Array} [array=[]] The array to copy values to.
	* @returns {Array} Returns `array`.
	*/
	function copyArray(source, array) {
		var index = -1, length = source.length;
		array || (array = Array(length));
		while (++index < length) array[index] = source[index];
		return array;
	}
	module.exports = copyArray;
}));
//#endregion
//#region node_modules/lodash/_arrayFilter.js
var require__arrayFilter = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* A specialized version of `_.filter` for arrays without support for
	* iteratee shorthands.
	*
	* @private
	* @param {Array} [array] The array to iterate over.
	* @param {Function} predicate The function invoked per iteration.
	* @returns {Array} Returns the new filtered array.
	*/
	function arrayFilter(array, predicate) {
		var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
		while (++index < length) {
			var value = array[index];
			if (predicate(value, index, array)) result[resIndex++] = value;
		}
		return result;
	}
	module.exports = arrayFilter;
}));
//#endregion
//#region node_modules/lodash/stubArray.js
var require_stubArray = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* This method returns a new empty array.
	*
	* @static
	* @memberOf _
	* @since 4.13.0
	* @category Util
	* @returns {Array} Returns the new empty array.
	* @example
	*
	* var arrays = _.times(2, _.stubArray);
	*
	* console.log(arrays);
	* // => [[], []]
	*
	* console.log(arrays[0] === arrays[1]);
	* // => false
	*/
	function stubArray() {
		return [];
	}
	module.exports = stubArray;
}));
//#endregion
//#region node_modules/lodash/_getSymbols.js
var require__getSymbols = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var arrayFilter = require__arrayFilter();
	var stubArray = require_stubArray();
	/** Built-in value references. */
	var propertyIsEnumerable = Object.prototype.propertyIsEnumerable;
	var nativeGetSymbols = Object.getOwnPropertySymbols;
	module.exports = !nativeGetSymbols ? stubArray : function(object) {
		if (object == null) return [];
		object = Object(object);
		return arrayFilter(nativeGetSymbols(object), function(symbol) {
			return propertyIsEnumerable.call(object, symbol);
		});
	};
}));
//#endregion
//#region node_modules/lodash/_copySymbols.js
var require__copySymbols = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var copyObject = require__copyObject();
	var getSymbols = require__getSymbols();
	/**
	* Copies own symbols of `source` to `object`.
	*
	* @private
	* @param {Object} source The object to copy symbols from.
	* @param {Object} [object={}] The object to copy symbols to.
	* @returns {Object} Returns `object`.
	*/
	function copySymbols(source, object) {
		return copyObject(source, getSymbols(source), object);
	}
	module.exports = copySymbols;
}));
//#endregion
//#region node_modules/lodash/_arrayPush.js
var require__arrayPush = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Appends the elements of `values` to `array`.
	*
	* @private
	* @param {Array} array The array to modify.
	* @param {Array} values The values to append.
	* @returns {Array} Returns `array`.
	*/
	function arrayPush(array, values) {
		var index = -1, length = values.length, offset = array.length;
		while (++index < length) array[offset + index] = values[index];
		return array;
	}
	module.exports = arrayPush;
}));
//#endregion
//#region node_modules/lodash/_getPrototype.js
var require__getPrototype = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__overArg()(Object.getPrototypeOf, Object);
}));
//#endregion
//#region node_modules/lodash/_getSymbolsIn.js
var require__getSymbolsIn = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var arrayPush = require__arrayPush();
	var getPrototype = require__getPrototype();
	var getSymbols = require__getSymbols();
	var stubArray = require_stubArray();
	module.exports = !Object.getOwnPropertySymbols ? stubArray : function(object) {
		var result = [];
		while (object) {
			arrayPush(result, getSymbols(object));
			object = getPrototype(object);
		}
		return result;
	};
}));
//#endregion
//#region node_modules/lodash/_copySymbolsIn.js
var require__copySymbolsIn = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var copyObject = require__copyObject();
	var getSymbolsIn = require__getSymbolsIn();
	/**
	* Copies own and inherited symbols of `source` to `object`.
	*
	* @private
	* @param {Object} source The object to copy symbols from.
	* @param {Object} [object={}] The object to copy symbols to.
	* @returns {Object} Returns `object`.
	*/
	function copySymbolsIn(source, object) {
		return copyObject(source, getSymbolsIn(source), object);
	}
	module.exports = copySymbolsIn;
}));
//#endregion
//#region node_modules/lodash/_baseGetAllKeys.js
var require__baseGetAllKeys = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var arrayPush = require__arrayPush();
	var isArray = require_isArray();
	/**
	* The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	* `keysFunc` and `symbolsFunc` to get the enumerable property names and
	* symbols of `object`.
	*
	* @private
	* @param {Object} object The object to query.
	* @param {Function} keysFunc The function to get the keys of `object`.
	* @param {Function} symbolsFunc The function to get the symbols of `object`.
	* @returns {Array} Returns the array of property names and symbols.
	*/
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
		var result = keysFunc(object);
		return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}
	module.exports = baseGetAllKeys;
}));
//#endregion
//#region node_modules/lodash/_getAllKeys.js
var require__getAllKeys = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseGetAllKeys = require__baseGetAllKeys();
	var getSymbols = require__getSymbols();
	var keys = require_keys();
	/**
	* Creates an array of own enumerable property names and symbols of `object`.
	*
	* @private
	* @param {Object} object The object to query.
	* @returns {Array} Returns the array of property names and symbols.
	*/
	function getAllKeys(object) {
		return baseGetAllKeys(object, keys, getSymbols);
	}
	module.exports = getAllKeys;
}));
//#endregion
//#region node_modules/lodash/_getAllKeysIn.js
var require__getAllKeysIn = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseGetAllKeys = require__baseGetAllKeys();
	var getSymbolsIn = require__getSymbolsIn();
	var keysIn = require_keysIn();
	/**
	* Creates an array of own and inherited enumerable property names and
	* symbols of `object`.
	*
	* @private
	* @param {Object} object The object to query.
	* @returns {Array} Returns the array of property names and symbols.
	*/
	function getAllKeysIn(object) {
		return baseGetAllKeys(object, keysIn, getSymbolsIn);
	}
	module.exports = getAllKeysIn;
}));
//#endregion
//#region node_modules/lodash/_DataView.js
var require__DataView = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__getNative()(require__root(), "DataView");
}));
//#endregion
//#region node_modules/lodash/_Promise.js
var require__Promise = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__getNative()(require__root(), "Promise");
}));
//#endregion
//#region node_modules/lodash/_Set.js
var require__Set = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__getNative()(require__root(), "Set");
}));
//#endregion
//#region node_modules/lodash/_WeakMap.js
var require__WeakMap = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__getNative()(require__root(), "WeakMap");
}));
//#endregion
//#region node_modules/lodash/_getTag.js
var require__getTag = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var DataView = require__DataView();
	var Map = require__Map();
	var Promise = require__Promise();
	var Set = require__Set();
	var WeakMap = require__WeakMap();
	var baseGetTag = require__baseGetTag();
	var toSource = require__toSource();
	/** `Object#toString` result references. */
	var mapTag = "[object Map]";
	var objectTag = "[object Object]";
	var promiseTag = "[object Promise]";
	var setTag = "[object Set]";
	var weakMapTag = "[object WeakMap]";
	var dataViewTag = "[object DataView]";
	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView);
	var mapCtorString = toSource(Map);
	var promiseCtorString = toSource(Promise);
	var setCtorString = toSource(Set);
	var weakMapCtorString = toSource(WeakMap);
	/**
	* Gets the `toStringTag` of `value`.
	*
	* @private
	* @param {*} value The value to query.
	* @returns {string} Returns the `toStringTag`.
	*/
	var getTag = baseGetTag;
	if (DataView && getTag(new DataView(/* @__PURE__ */ new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) getTag = function(value) {
		var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
		if (ctorString) switch (ctorString) {
			case dataViewCtorString: return dataViewTag;
			case mapCtorString: return mapTag;
			case promiseCtorString: return promiseTag;
			case setCtorString: return setTag;
			case weakMapCtorString: return weakMapTag;
		}
		return result;
	};
	module.exports = getTag;
}));
//#endregion
//#region node_modules/lodash/_initCloneArray.js
var require__initCloneArray = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** Used to check objects for own properties. */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	* Initializes an array clone.
	*
	* @private
	* @param {Array} array The array to clone.
	* @returns {Array} Returns the initialized clone.
	*/
	function initCloneArray(array) {
		var length = array.length, result = new array.constructor(length);
		if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
			result.index = array.index;
			result.input = array.input;
		}
		return result;
	}
	module.exports = initCloneArray;
}));
//#endregion
//#region node_modules/lodash/_Uint8Array.js
var require__Uint8Array = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__root().Uint8Array;
}));
//#endregion
//#region node_modules/lodash/_cloneArrayBuffer.js
var require__cloneArrayBuffer = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Uint8Array = require__Uint8Array();
	/**
	* Creates a clone of `arrayBuffer`.
	*
	* @private
	* @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	* @returns {ArrayBuffer} Returns the cloned array buffer.
	*/
	function cloneArrayBuffer(arrayBuffer) {
		var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
		new Uint8Array(result).set(new Uint8Array(arrayBuffer));
		return result;
	}
	module.exports = cloneArrayBuffer;
}));
//#endregion
//#region node_modules/lodash/_cloneDataView.js
var require__cloneDataView = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var cloneArrayBuffer = require__cloneArrayBuffer();
	/**
	* Creates a clone of `dataView`.
	*
	* @private
	* @param {Object} dataView The data view to clone.
	* @param {boolean} [isDeep] Specify a deep clone.
	* @returns {Object} Returns the cloned data view.
	*/
	function cloneDataView(dataView, isDeep) {
		var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
		return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}
	module.exports = cloneDataView;
}));
//#endregion
//#region node_modules/lodash/_cloneRegExp.js
var require__cloneRegExp = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;
	/**
	* Creates a clone of `regexp`.
	*
	* @private
	* @param {Object} regexp The regexp to clone.
	* @returns {Object} Returns the cloned regexp.
	*/
	function cloneRegExp(regexp) {
		var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
		result.lastIndex = regexp.lastIndex;
		return result;
	}
	module.exports = cloneRegExp;
}));
//#endregion
//#region node_modules/lodash/_cloneSymbol.js
var require__cloneSymbol = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Symbol = require__Symbol();
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : void 0;
	var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
	/**
	* Creates a clone of the `symbol` object.
	*
	* @private
	* @param {Object} symbol The symbol object to clone.
	* @returns {Object} Returns the cloned symbol object.
	*/
	function cloneSymbol(symbol) {
		return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	}
	module.exports = cloneSymbol;
}));
//#endregion
//#region node_modules/lodash/_cloneTypedArray.js
var require__cloneTypedArray = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var cloneArrayBuffer = require__cloneArrayBuffer();
	/**
	* Creates a clone of `typedArray`.
	*
	* @private
	* @param {Object} typedArray The typed array to clone.
	* @param {boolean} [isDeep] Specify a deep clone.
	* @returns {Object} Returns the cloned typed array.
	*/
	function cloneTypedArray(typedArray, isDeep) {
		var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
		return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}
	module.exports = cloneTypedArray;
}));
//#endregion
//#region node_modules/lodash/_initCloneByTag.js
var require__initCloneByTag = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var cloneArrayBuffer = require__cloneArrayBuffer();
	var cloneDataView = require__cloneDataView();
	var cloneRegExp = require__cloneRegExp();
	var cloneSymbol = require__cloneSymbol();
	var cloneTypedArray = require__cloneTypedArray();
	/** `Object#toString` result references. */
	var boolTag = "[object Boolean]";
	var dateTag = "[object Date]";
	var mapTag = "[object Map]";
	var numberTag = "[object Number]";
	var regexpTag = "[object RegExp]";
	var setTag = "[object Set]";
	var stringTag = "[object String]";
	var symbolTag = "[object Symbol]";
	var arrayBufferTag = "[object ArrayBuffer]";
	var dataViewTag = "[object DataView]";
	var float32Tag = "[object Float32Array]";
	var float64Tag = "[object Float64Array]";
	var int8Tag = "[object Int8Array]";
	var int16Tag = "[object Int16Array]";
	var int32Tag = "[object Int32Array]";
	var uint8Tag = "[object Uint8Array]";
	var uint8ClampedTag = "[object Uint8ClampedArray]";
	var uint16Tag = "[object Uint16Array]";
	var uint32Tag = "[object Uint32Array]";
	/**
	* Initializes an object clone based on its `toStringTag`.
	*
	* **Note:** This function only supports cloning values with tags of
	* `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
	*
	* @private
	* @param {Object} object The object to clone.
	* @param {string} tag The `toStringTag` of the object to clone.
	* @param {boolean} [isDeep] Specify a deep clone.
	* @returns {Object} Returns the initialized clone.
	*/
	function initCloneByTag(object, tag, isDeep) {
		var Ctor = object.constructor;
		switch (tag) {
			case arrayBufferTag: return cloneArrayBuffer(object);
			case boolTag:
			case dateTag: return new Ctor(+object);
			case dataViewTag: return cloneDataView(object, isDeep);
			case float32Tag:
			case float64Tag:
			case int8Tag:
			case int16Tag:
			case int32Tag:
			case uint8Tag:
			case uint8ClampedTag:
			case uint16Tag:
			case uint32Tag: return cloneTypedArray(object, isDeep);
			case mapTag: return new Ctor();
			case numberTag:
			case stringTag: return new Ctor(object);
			case regexpTag: return cloneRegExp(object);
			case setTag: return new Ctor();
			case symbolTag: return cloneSymbol(object);
		}
	}
	module.exports = initCloneByTag;
}));
//#endregion
//#region node_modules/lodash/_baseCreate.js
var require__baseCreate = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isObject = require_isObject();
	/** Built-in value references. */
	var objectCreate = Object.create;
	module.exports = function() {
		function object() {}
		return function(proto) {
			if (!isObject(proto)) return {};
			if (objectCreate) return objectCreate(proto);
			object.prototype = proto;
			var result = new object();
			object.prototype = void 0;
			return result;
		};
	}();
}));
//#endregion
//#region node_modules/lodash/_initCloneObject.js
var require__initCloneObject = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseCreate = require__baseCreate();
	var getPrototype = require__getPrototype();
	var isPrototype = require__isPrototype();
	/**
	* Initializes an object clone.
	*
	* @private
	* @param {Object} object The object to clone.
	* @returns {Object} Returns the initialized clone.
	*/
	function initCloneObject(object) {
		return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
	}
	module.exports = initCloneObject;
}));
//#endregion
//#region node_modules/lodash/_baseIsMap.js
var require__baseIsMap = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var getTag = require__getTag();
	var isObjectLike = require_isObjectLike();
	/** `Object#toString` result references. */
	var mapTag = "[object Map]";
	/**
	* The base implementation of `_.isMap` without Node.js optimizations.
	*
	* @private
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a map, else `false`.
	*/
	function baseIsMap(value) {
		return isObjectLike(value) && getTag(value) == mapTag;
	}
	module.exports = baseIsMap;
}));
//#endregion
//#region node_modules/lodash/isMap.js
var require_isMap = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseIsMap = require__baseIsMap();
	var baseUnary = require__baseUnary();
	var nodeUtil = require__nodeUtil();
	var nodeIsMap = nodeUtil && nodeUtil.isMap;
	module.exports = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
}));
//#endregion
//#region node_modules/lodash/_baseIsSet.js
var require__baseIsSet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var getTag = require__getTag();
	var isObjectLike = require_isObjectLike();
	/** `Object#toString` result references. */
	var setTag = "[object Set]";
	/**
	* The base implementation of `_.isSet` without Node.js optimizations.
	*
	* @private
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a set, else `false`.
	*/
	function baseIsSet(value) {
		return isObjectLike(value) && getTag(value) == setTag;
	}
	module.exports = baseIsSet;
}));
//#endregion
//#region node_modules/lodash/isSet.js
var require_isSet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseIsSet = require__baseIsSet();
	var baseUnary = require__baseUnary();
	var nodeUtil = require__nodeUtil();
	var nodeIsSet = nodeUtil && nodeUtil.isSet;
	module.exports = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
}));
//#endregion
//#region node_modules/lodash/_baseClone.js
var require__baseClone = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Stack = require__Stack();
	var arrayEach = require__arrayEach();
	var assignValue = require__assignValue();
	var baseAssign = require__baseAssign();
	var baseAssignIn = require__baseAssignIn();
	var cloneBuffer = require__cloneBuffer();
	var copyArray = require__copyArray();
	var copySymbols = require__copySymbols();
	var copySymbolsIn = require__copySymbolsIn();
	var getAllKeys = require__getAllKeys();
	var getAllKeysIn = require__getAllKeysIn();
	var getTag = require__getTag();
	var initCloneArray = require__initCloneArray();
	var initCloneByTag = require__initCloneByTag();
	var initCloneObject = require__initCloneObject();
	var isArray = require_isArray();
	var isBuffer = require_isBuffer();
	var isMap = require_isMap();
	var isObject = require_isObject();
	var isSet = require_isSet();
	var keys = require_keys();
	var keysIn = require_keysIn();
	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1;
	var CLONE_FLAT_FLAG = 2;
	var CLONE_SYMBOLS_FLAG = 4;
	/** `Object#toString` result references. */
	var argsTag = "[object Arguments]";
	var arrayTag = "[object Array]";
	var boolTag = "[object Boolean]";
	var dateTag = "[object Date]";
	var errorTag = "[object Error]";
	var funcTag = "[object Function]";
	var genTag = "[object GeneratorFunction]";
	var mapTag = "[object Map]";
	var numberTag = "[object Number]";
	var objectTag = "[object Object]";
	var regexpTag = "[object RegExp]";
	var setTag = "[object Set]";
	var stringTag = "[object String]";
	var symbolTag = "[object Symbol]";
	var weakMapTag = "[object WeakMap]";
	var arrayBufferTag = "[object ArrayBuffer]";
	var dataViewTag = "[object DataView]";
	var float32Tag = "[object Float32Array]";
	var float64Tag = "[object Float64Array]";
	var int8Tag = "[object Int8Array]";
	var int16Tag = "[object Int16Array]";
	var int32Tag = "[object Int32Array]";
	var uint8Tag = "[object Uint8Array]";
	var uint8ClampedTag = "[object Uint8ClampedArray]";
	var uint16Tag = "[object Uint16Array]";
	var uint32Tag = "[object Uint32Array]";
	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
	/**
	* The base implementation of `_.clone` and `_.cloneDeep` which tracks
	* traversed objects.
	*
	* @private
	* @param {*} value The value to clone.
	* @param {boolean} bitmask The bitmask flags.
	*  1 - Deep clone
	*  2 - Flatten inherited properties
	*  4 - Clone symbols
	* @param {Function} [customizer] The function to customize cloning.
	* @param {string} [key] The key of `value`.
	* @param {Object} [object] The parent object of `value`.
	* @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	* @returns {*} Returns the cloned value.
	*/
	function baseClone(value, bitmask, customizer, key, object, stack) {
		var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
		if (customizer) result = object ? customizer(value, key, object, stack) : customizer(value);
		if (result !== void 0) return result;
		if (!isObject(value)) return value;
		var isArr = isArray(value);
		if (isArr) {
			result = initCloneArray(value);
			if (!isDeep) return copyArray(value, result);
		} else {
			var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
			if (isBuffer(value)) return cloneBuffer(value, isDeep);
			if (tag == objectTag || tag == argsTag || isFunc && !object) {
				result = isFlat || isFunc ? {} : initCloneObject(value);
				if (!isDeep) return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
			} else {
				if (!cloneableTags[tag]) return object ? value : {};
				result = initCloneByTag(value, tag, isDeep);
			}
		}
		stack || (stack = new Stack());
		var stacked = stack.get(value);
		if (stacked) return stacked;
		stack.set(value, result);
		if (isSet(value)) value.forEach(function(subValue) {
			result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
		});
		else if (isMap(value)) value.forEach(function(subValue, key) {
			result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
		});
		var props = isArr ? void 0 : (isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys)(value);
		arrayEach(props || value, function(subValue, key) {
			if (props) {
				key = subValue;
				subValue = value[key];
			}
			assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
		});
		return result;
	}
	module.exports = baseClone;
}));
//#endregion
//#region node_modules/lodash/last.js
var require_last = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Gets the last element of `array`.
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @category Array
	* @param {Array} array The array to query.
	* @returns {*} Returns the last element of `array`.
	* @example
	*
	* _.last([1, 2, 3]);
	* // => 3
	*/
	function last(array) {
		var length = array == null ? 0 : array.length;
		return length ? array[length - 1] : void 0;
	}
	module.exports = last;
}));
//#endregion
//#region node_modules/lodash/_baseSlice.js
var require__baseSlice = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* The base implementation of `_.slice` without an iteratee call guard.
	*
	* @private
	* @param {Array} array The array to slice.
	* @param {number} [start=0] The start position.
	* @param {number} [end=array.length] The end position.
	* @returns {Array} Returns the slice of `array`.
	*/
	function baseSlice(array, start, end) {
		var index = -1, length = array.length;
		if (start < 0) start = -start > length ? 0 : length + start;
		end = end > length ? length : end;
		if (end < 0) end += length;
		length = start > end ? 0 : end - start >>> 0;
		start >>>= 0;
		var result = Array(length);
		while (++index < length) result[index] = array[index + start];
		return result;
	}
	module.exports = baseSlice;
}));
//#endregion
//#region node_modules/lodash/_parent.js
var require__parent = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseGet = require__baseGet();
	var baseSlice = require__baseSlice();
	/**
	* Gets the parent value at `path` of `object`.
	*
	* @private
	* @param {Object} object The object to query.
	* @param {Array} path The path to get the parent value of.
	* @returns {*} Returns the parent value.
	*/
	function parent(object, path) {
		return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
	}
	module.exports = parent;
}));
//#endregion
//#region node_modules/lodash/_baseUnset.js
var require__baseUnset = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var castPath = require__castPath();
	var last = require_last();
	var parent = require__parent();
	var toKey = require__toKey();
	/** Used to check objects for own properties. */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	* The base implementation of `_.unset`.
	*
	* @private
	* @param {Object} object The object to modify.
	* @param {Array|string} path The property path to unset.
	* @returns {boolean} Returns `true` if the property is deleted, else `false`.
	*/
	function baseUnset(object, path) {
		path = castPath(path, object);
		var index = -1, length = path.length;
		if (!length) return true;
		while (++index < length) {
			var key = toKey(path[index]);
			if (key === "__proto__" && !hasOwnProperty.call(object, "__proto__")) return false;
			if ((key === "constructor" || key === "prototype") && index < length - 1) return false;
		}
		var obj = parent(object, path);
		return obj == null || delete obj[toKey(last(path))];
	}
	module.exports = baseUnset;
}));
//#endregion
//#region node_modules/lodash/isPlainObject.js
var require_isPlainObject = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseGetTag = require__baseGetTag();
	var getPrototype = require__getPrototype();
	var isObjectLike = require_isObjectLike();
	/** `Object#toString` result references. */
	var objectTag = "[object Object]";
	/** Used for built-in method references. */
	var funcProto = Function.prototype;
	var objectProto = Object.prototype;
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);
	/**
	* Checks if `value` is a plain object, that is, an object created by the
	* `Object` constructor or one with a `[[Prototype]]` of `null`.
	*
	* @static
	* @memberOf _
	* @since 0.8.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	* @example
	*
	* function Foo() {
	*   this.a = 1;
	* }
	*
	* _.isPlainObject(new Foo);
	* // => false
	*
	* _.isPlainObject([1, 2, 3]);
	* // => false
	*
	* _.isPlainObject({ 'x': 0, 'y': 0 });
	* // => true
	*
	* _.isPlainObject(Object.create(null));
	* // => true
	*/
	function isPlainObject(value) {
		if (!isObjectLike(value) || baseGetTag(value) != objectTag) return false;
		var proto = getPrototype(value);
		if (proto === null) return true;
		var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
		return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
	}
	module.exports = isPlainObject;
}));
//#endregion
//#region node_modules/lodash/_customOmitClone.js
var require__customOmitClone = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isPlainObject = require_isPlainObject();
	/**
	* Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
	* objects.
	*
	* @private
	* @param {*} value The value to inspect.
	* @param {string} key The key of the property to inspect.
	* @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
	*/
	function customOmitClone(value) {
		return isPlainObject(value) ? void 0 : value;
	}
	module.exports = customOmitClone;
}));
//#endregion
//#region node_modules/lodash/_isFlattenable.js
var require__isFlattenable = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Symbol = require__Symbol();
	var isArguments = require_isArguments();
	var isArray = require_isArray();
	/** Built-in value references. */
	var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : void 0;
	/**
	* Checks if `value` is a flattenable `arguments` object or array.
	*
	* @private
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	*/
	function isFlattenable(value) {
		return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
	}
	module.exports = isFlattenable;
}));
//#endregion
//#region node_modules/lodash/_baseFlatten.js
var require__baseFlatten = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var arrayPush = require__arrayPush();
	var isFlattenable = require__isFlattenable();
	/**
	* The base implementation of `_.flatten` with support for restricting flattening.
	*
	* @private
	* @param {Array} array The array to flatten.
	* @param {number} depth The maximum recursion depth.
	* @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	* @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	* @param {Array} [result=[]] The initial result value.
	* @returns {Array} Returns the new flattened array.
	*/
	function baseFlatten(array, depth, predicate, isStrict, result) {
		var index = -1, length = array.length;
		predicate || (predicate = isFlattenable);
		result || (result = []);
		while (++index < length) {
			var value = array[index];
			if (depth > 0 && predicate(value)) {
				if (depth > 1) baseFlatten(value, depth - 1, predicate, isStrict, result);
				else arrayPush(result, value);
			} else if (!isStrict) result[result.length] = value;
		}
		return result;
	}
	module.exports = baseFlatten;
}));
//#endregion
//#region node_modules/lodash/flatten.js
var require_flatten = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseFlatten = require__baseFlatten();
	/**
	* Flattens `array` a single level deep.
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @category Array
	* @param {Array} array The array to flatten.
	* @returns {Array} Returns the new flattened array.
	* @example
	*
	* _.flatten([1, [2, [3, [4]], 5]]);
	* // => [1, 2, [3, [4]], 5]
	*/
	function flatten(array) {
		return (array == null ? 0 : array.length) ? baseFlatten(array, 1) : [];
	}
	module.exports = flatten;
}));
//#endregion
//#region node_modules/lodash/_apply.js
var require__apply = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* A faster alternative to `Function#apply`, this function invokes `func`
	* with the `this` binding of `thisArg` and the arguments of `args`.
	*
	* @private
	* @param {Function} func The function to invoke.
	* @param {*} thisArg The `this` binding of `func`.
	* @param {Array} args The arguments to invoke `func` with.
	* @returns {*} Returns the result of `func`.
	*/
	function apply(func, thisArg, args) {
		switch (args.length) {
			case 0: return func.call(thisArg);
			case 1: return func.call(thisArg, args[0]);
			case 2: return func.call(thisArg, args[0], args[1]);
			case 3: return func.call(thisArg, args[0], args[1], args[2]);
		}
		return func.apply(thisArg, args);
	}
	module.exports = apply;
}));
//#endregion
//#region node_modules/lodash/_overRest.js
var require__overRest = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var apply = require__apply();
	var nativeMax = Math.max;
	/**
	* A specialized version of `baseRest` which transforms the rest array.
	*
	* @private
	* @param {Function} func The function to apply a rest parameter to.
	* @param {number} [start=func.length-1] The start position of the rest parameter.
	* @param {Function} transform The rest array transform.
	* @returns {Function} Returns the new function.
	*/
	function overRest(func, start, transform) {
		start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
		return function() {
			var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
			while (++index < length) array[index] = args[start + index];
			index = -1;
			var otherArgs = Array(start + 1);
			while (++index < start) otherArgs[index] = args[index];
			otherArgs[start] = transform(array);
			return apply(func, this, otherArgs);
		};
	}
	module.exports = overRest;
}));
//#endregion
//#region node_modules/lodash/constant.js
var require_constant = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Creates a function that returns `value`.
	*
	* @static
	* @memberOf _
	* @since 2.4.0
	* @category Util
	* @param {*} value The value to return from the new function.
	* @returns {Function} Returns the new constant function.
	* @example
	*
	* var objects = _.times(2, _.constant({ 'a': 1 }));
	*
	* console.log(objects);
	* // => [{ 'a': 1 }, { 'a': 1 }]
	*
	* console.log(objects[0] === objects[1]);
	* // => true
	*/
	function constant(value) {
		return function() {
			return value;
		};
	}
	module.exports = constant;
}));
//#endregion
//#region node_modules/lodash/identity.js
var require_identity = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* This method returns the first argument it receives.
	*
	* @static
	* @since 0.1.0
	* @memberOf _
	* @category Util
	* @param {*} value Any value.
	* @returns {*} Returns `value`.
	* @example
	*
	* var object = { 'a': 1 };
	*
	* console.log(_.identity(object) === object);
	* // => true
	*/
	function identity(value) {
		return value;
	}
	module.exports = identity;
}));
//#endregion
//#region node_modules/lodash/_baseSetToString.js
var require__baseSetToString = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var constant = require_constant();
	var defineProperty = require__defineProperty();
	var identity = require_identity();
	module.exports = !defineProperty ? identity : function(func, string) {
		return defineProperty(func, "toString", {
			"configurable": true,
			"enumerable": false,
			"value": constant(string),
			"writable": true
		});
	};
}));
//#endregion
//#region node_modules/lodash/_shortOut.js
var require__shortOut = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 800;
	var HOT_SPAN = 16;
	var nativeNow = Date.now;
	/**
	* Creates a function that'll short out and invoke `identity` instead
	* of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	* milliseconds.
	*
	* @private
	* @param {Function} func The function to restrict.
	* @returns {Function} Returns the new shortable function.
	*/
	function shortOut(func) {
		var count = 0, lastCalled = 0;
		return function() {
			var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
			lastCalled = stamp;
			if (remaining > 0) {
				if (++count >= HOT_COUNT) return arguments[0];
			} else count = 0;
			return func.apply(void 0, arguments);
		};
	}
	module.exports = shortOut;
}));
//#endregion
//#region node_modules/lodash/_setToString.js
var require__setToString = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseSetToString = require__baseSetToString();
	module.exports = require__shortOut()(baseSetToString);
}));
//#endregion
//#region node_modules/lodash/_flatRest.js
var require__flatRest = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var flatten = require_flatten();
	var overRest = require__overRest();
	var setToString = require__setToString();
	/**
	* A specialized version of `baseRest` which flattens the rest array.
	*
	* @private
	* @param {Function} func The function to apply a rest parameter to.
	* @returns {Function} Returns the new function.
	*/
	function flatRest(func) {
		return setToString(overRest(func, void 0, flatten), func + "");
	}
	module.exports = flatRest;
}));
//#endregion
//#region node_modules/lodash/omit.js
var require_omit = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var arrayMap = require__arrayMap();
	var baseClone = require__baseClone();
	var baseUnset = require__baseUnset();
	var castPath = require__castPath();
	var copyObject = require__copyObject();
	var customOmitClone = require__customOmitClone();
	var flatRest = require__flatRest();
	var getAllKeysIn = require__getAllKeysIn();
	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1;
	var CLONE_FLAT_FLAG = 2;
	var CLONE_SYMBOLS_FLAG = 4;
	module.exports = flatRest(function(object, paths) {
		var result = {};
		if (object == null) return result;
		var isDeep = false;
		paths = arrayMap(paths, function(path) {
			path = castPath(path, object);
			isDeep || (isDeep = path.length > 1);
			return path;
		});
		copyObject(object, getAllKeysIn(object), result);
		if (isDeep) result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
		var length = paths.length;
		while (length--) baseUnset(result, paths[length]);
		return result;
	});
}));
//#endregion
//#region node_modules/@douyinfe/semi-foundation/lib/es/typography/constants.js
var import_isFunction = /* @__PURE__ */ __toESM(require_isFunction());
var import_throttle = /* @__PURE__ */ __toESM(require_throttle());
var import_classnames = /* @__PURE__ */ __toESM(require_classnames());
var import_prop_types = /* @__PURE__ */ __toESM(require_prop_types());
var import_omit = /* @__PURE__ */ __toESM(require_omit());
var cssClasses$4 = { PREFIX: `${BASE_CLASS_PREFIX$1}-typography` };
var strings$4 = {
	WEIGHT: [
		"light",
		"regular",
		"medium",
		"semibold",
		"bold",
		"default"
	],
	TYPE: [
		"primary",
		"secondary",
		"danger",
		"warning",
		"success",
		"tertiary",
		"quaternary"
	],
	SIZE: [
		"normal",
		"small",
		"inherit"
	],
	SPACING: ["normal", "extended"],
	HEADING: [
		1,
		2,
		3,
		4,
		5,
		6
	],
	RULE: [
		"text",
		"numbers",
		"bytes-decimal",
		"bytes-binary",
		"percentages",
		"exponential"
	],
	TRUNCATE: [
		"ceil",
		"floor",
		"round"
	]
};
//#endregion
//#region node_modules/lodash/_baseSet.js
var require__baseSet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var assignValue = require__assignValue();
	var castPath = require__castPath();
	var isIndex = require__isIndex();
	var isObject = require_isObject();
	var toKey = require__toKey();
	/**
	* The base implementation of `_.set`.
	*
	* @private
	* @param {Object} object The object to modify.
	* @param {Array|string} path The path of the property to set.
	* @param {*} value The value to set.
	* @param {Function} [customizer] The function to customize path creation.
	* @returns {Object} Returns `object`.
	*/
	function baseSet(object, path, value, customizer) {
		if (!isObject(object)) return object;
		path = castPath(path, object);
		var index = -1, length = path.length, lastIndex = length - 1, nested = object;
		while (nested != null && ++index < length) {
			var key = toKey(path[index]), newValue = value;
			if (key === "__proto__" || key === "constructor" || key === "prototype") return object;
			if (index != lastIndex) {
				var objValue = nested[key];
				newValue = customizer ? customizer(objValue, key, nested) : void 0;
				if (newValue === void 0) newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
			}
			assignValue(nested, key, newValue);
			nested = nested[key];
		}
		return object;
	}
	module.exports = baseSet;
}));
//#endregion
//#region node_modules/lodash/set.js
var require_set = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseSet = require__baseSet();
	/**
	* Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
	* it's created. Arrays are created for missing index properties while objects
	* are created for all other missing properties. Use `_.setWith` to customize
	* `path` creation.
	*
	* **Note:** This method mutates `object`.
	*
	* @static
	* @memberOf _
	* @since 3.7.0
	* @category Object
	* @param {Object} object The object to modify.
	* @param {Array|string} path The path of the property to set.
	* @param {*} value The value to set.
	* @returns {Object} Returns `object`.
	* @example
	*
	* var object = { 'a': [{ 'b': { 'c': 3 } }] };
	*
	* _.set(object, 'a[0].b.c', 4);
	* console.log(object.a[0].b.c);
	* // => 4
	*
	* _.set(object, ['x', '0', 'y', 'z'], 5);
	* console.log(object.x[0].y.z);
	* // => 5
	*/
	function set(object, path, value) {
		return object == null ? object : baseSet(object, path, value);
	}
	module.exports = set;
}));
//#endregion
//#region node_modules/lodash/cloneDeepWith.js
var require_cloneDeepWith = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseClone = require__baseClone();
	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1;
	var CLONE_SYMBOLS_FLAG = 4;
	/**
	* This method is like `_.cloneWith` except that it recursively clones `value`.
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Lang
	* @param {*} value The value to recursively clone.
	* @param {Function} [customizer] The function to customize cloning.
	* @returns {*} Returns the deep cloned value.
	* @see _.cloneWith
	* @example
	*
	* function customizer(value) {
	*   if (_.isElement(value)) {
	*     return value.cloneNode(true);
	*   }
	* }
	*
	* var el = _.cloneDeepWith(document.body, customizer);
	*
	* console.log(el === document.body);
	* // => false
	* console.log(el.nodeName);
	* // => 'BODY'
	* console.log(el.childNodes.length);
	* // => 20
	*/
	function cloneDeepWith(value, customizer) {
		customizer = typeof customizer == "function" ? customizer : void 0;
		return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
	}
	module.exports = cloneDeepWith;
}));
//#endregion
//#region node_modules/@douyinfe/semi-foundation/lib/es/utils/warning.js
var import_set = /* @__PURE__ */ __toESM(require_set());
var import_cloneDeepWith = /* @__PURE__ */ __toESM(require_cloneDeepWith());
function warning(flag, info) {
	if (flag) console.warn(`Warning: ${info}`);
}
//#endregion
//#region node_modules/@douyinfe/semi-foundation/lib/es/utils/isElement.js
/* istanbul ignore next */
function isElement(obj) {
	try {
		return obj instanceof HTMLElement;
	} catch (e) {
		return typeof obj === "object" && obj.nodeType === 1 && typeof obj.style === "object" && typeof obj.ownerDocument === "object";
	}
}
//#endregion
//#region node_modules/@douyinfe/semi-foundation/lib/es/utils/dom.js
/**
*
* @param {HTMLElement} parentNode
* @param  {...HTMLElement} nodes
*
* @param {HTMLElement}
*/
function append(parentNode) {
	for (var _len = arguments.length, nodes = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) nodes[_key - 1] = arguments[_key];
	for (const node of nodes) parentNode.appendChild(node);
	return parentNode;
}
/**
*
* @param {HTMLElement} parentNode
* @param  {...HTMLElement} nodes
*
* @param {HTMLElement}
*/
function prepend(parentNode) {
	for (var _len2 = arguments.length, nodes = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) nodes[_key2 - 1] = arguments[_key2];
	if (parentNode.children && parentNode.children.length) {
		const firstNode = parentNode.children[0];
		for (const node of nodes) parentNode.insertBefore(node, firstNode);
	} else append(parentNode, ...nodes);
	return parentNode;
}
/**
*
* @param {DOMRect} domRect
* @returns {object|undefined}
*/
function convertDOMRectToObject(domRect) {
	if (domRect && typeof domRect === "object") {
		if (typeof domRect.toJSON === "function") return domRect.toJSON();
		else return [
			"left",
			"top",
			"right",
			"bottom",
			"width",
			"height"
		].reduce((obj, key) => {
			obj[key] = domRect[key];
			return obj;
		}, {});
	}
}
//#endregion
//#region node_modules/@douyinfe/semi-ui/lib/es/_utils/semi-global.js
var SemiGlobal = class {
	constructor() {
		this.config = {};
	}
};
var semi_global_default = new SemiGlobal();
//#endregion
//#region node_modules/@douyinfe/semi-ui/lib/es/_utils/index.js
var __awaiter$1 = function(thisArg, _arguments, P, generator) {
	function adopt(value) {
		return value instanceof P ? value : new P(function(resolve) {
			resolve(value);
		});
	}
	return new (P || (P = Promise))(function(resolve, reject) {
		function fulfilled(value) {
			try {
				step(generator.next(value));
			} catch (e) {
				reject(e);
			}
		}
		function rejected(value) {
			try {
				step(generator["throw"](value));
			} catch (e) {
				reject(e);
			}
		}
		function step(result) {
			result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
		}
		step((generator = generator.apply(thisArg, _arguments || [])).next());
	});
};
/**
* stop propagation
*
* @param {React.MouseEvent<HTMLElement>} e React mouse event object
* @param {boolean} noImmediate Skip stopping immediate propagation
*/
function stopPropagation(e, noImmediate) {
	if (e && typeof e.stopPropagation === "function") e.stopPropagation();
	if (!noImmediate && e.nativeEvent && typeof e.nativeEvent.stopImmediatePropagation === "function") e.nativeEvent.stopImmediatePropagation();
}
function cloneDeep(value, customizer) {
	return (0, import_cloneDeepWith.default)(value, (v) => {
		if (typeof customizer === "function") return customizer(v);
		if (typeof v === "function" || /*#__PURE__*/ React.isValidElement(v)) return v;
		if (Object.prototype.toString.call(v) === "[object Error]") return v;
		if (Array.isArray(v) && v.length === 0) {
			const keys = Object.keys(v);
			if (keys.length) {
				const newArray = [];
				keys.forEach((key) => {
					(0, import_set.default)(newArray, key, v[key]);
				});
				try {
					warning((0, import_get.default)(process, "env.NODE_ENV") !== "production", `[Semi] You may use an out-of-bounds array. In some cases, your program may not behave as expected.
                    The maximum length of an array is 4294967295.
                    Please check whether the array subscript in your data exceeds the maximum value of the JS array subscript`);
				} catch (e) {}
				return newArray;
			} else return;
		}
	});
}
/**
* register matchFn and unMatchFn callback while media query
* @param {string} media media string
* @param {object} param param object
* @returns function
*/
var registerMediaQuery = (media, _ref) => {
	let { match, unmatch, callInInit = true } = _ref;
	if (typeof window !== "undefined") {
		const mediaQueryList = window.matchMedia(media);
		function handlerMediaChange(e) {
			if (e.matches) match && match(e);
			else unmatch && unmatch(e);
		}
		callInInit && handlerMediaChange(mediaQueryList);
		if (Object.prototype.hasOwnProperty.call(mediaQueryList, "addEventListener")) {
			mediaQueryList.addEventListener("change", handlerMediaChange);
			return () => mediaQueryList.removeEventListener("change", handlerMediaChange);
		}
		mediaQueryList.addListener(handlerMediaChange);
		return () => mediaQueryList.removeListener(handlerMediaChange);
	}
	return () => void 0;
};
/**
* Determine whether the incoming element is a built-in icon
* @param icon 元素
* @returns boolean
*/
var isSemiIcon = (icon) => /*#__PURE__*/ React.isValidElement(icon) && (0, import_get.default)(icon.type, "elementType") === "Icon";
function getActiveElement() {
	return document ? document.activeElement : null;
}
function getFocusableElements(node) {
	if (!isElement(node)) return [];
	const focusableSelectorsStr = [
		"input:not([disabled]):not([tabindex='-1'])",
		"textarea:not([disabled]):not([tabindex='-1'])",
		"button:not([disabled]):not([tabindex='-1'])",
		"a[href]:not([tabindex='-1'])",
		"select:not([disabled]):not([tabindex='-1'])",
		"area[href]:not([tabindex='-1'])",
		"iframe:not([tabindex='-1'])",
		"object:not([tabindex='-1'])",
		"*[tabindex]:not([tabindex='-1'])",
		"*[contenteditable]:not([tabindex='-1'])"
	].join(",");
	return Array.from(node.querySelectorAll(focusableSelectorsStr));
}
function runAfterTicks(func, numberOfTicks) {
	return __awaiter$1(this, void 0, void 0, function* () {
		if (numberOfTicks === 0) {
			yield func();
			return;
		} else {
			yield new Promise((resolve) => {
				setTimeout(() => __awaiter$1(this, void 0, void 0, function* () {
					yield runAfterTicks(func, numberOfTicks - 1);
					resolve();
				}), 0);
			});
			return;
		}
	});
}
function getScrollbarWidth() {
	if (globalThis && Object.prototype.toString.call(globalThis) === "[object Window]") return window.innerWidth - document.documentElement.clientWidth;
	return 0;
}
function getDefaultPropsFromGlobalConfig(componentName) {
	let semiDefaultProps = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
	const getFromGlobalConfig = () => {
		var _a, _b;
		return ((_b = (_a = semi_global_default === null || semi_global_default === void 0 ? void 0 : semi_global_default.config) === null || _a === void 0 ? void 0 : _a.overrideDefaultProps) === null || _b === void 0 ? void 0 : _b[componentName]) || {};
	};
	const hasOwn = (target, key) => Object.prototype.hasOwnProperty.call(target, key);
	return new Proxy(Object.assign({}, semiDefaultProps), {
		get(target, key, receiver) {
			const defaultPropsFromGlobal = getFromGlobalConfig();
			const targetDescriptor = Reflect.getOwnPropertyDescriptor(target, key);
			if (targetDescriptor && !targetDescriptor.configurable && !targetDescriptor.writable) return Reflect.get(target, key, receiver);
			if (hasOwn(defaultPropsFromGlobal, key)) return Reflect.get(defaultPropsFromGlobal, key);
			return Reflect.get(target, key, receiver);
		},
		set(target, key, value, receiver) {
			return Reflect.set(target, key, value, receiver);
		},
		ownKeys(target) {
			if (!Reflect.isExtensible(target)) return Reflect.ownKeys(target);
			const defaultPropsFromGlobal = getFromGlobalConfig();
			return Array.from(/* @__PURE__ */ new Set([...Reflect.ownKeys(target), ...Reflect.ownKeys(defaultPropsFromGlobal)]));
		},
		getOwnPropertyDescriptor(target, key) {
			const defaultPropsFromGlobal = getFromGlobalConfig();
			const targetDescriptor = Reflect.getOwnPropertyDescriptor(target, key);
			if (targetDescriptor && !targetDescriptor.configurable) return targetDescriptor;
			if (!targetDescriptor && !Reflect.isExtensible(target)) return;
			const globalDescriptor = Reflect.getOwnPropertyDescriptor(defaultPropsFromGlobal, key);
			if (globalDescriptor) return {
				configurable: true,
				enumerable: globalDescriptor.enumerable,
				writable: true,
				value: Reflect.get(defaultPropsFromGlobal, key)
			};
			return targetDescriptor;
		}
	});
}
//#endregion
//#region node_modules/@douyinfe/semi-ui/lib/es/typography/typography.js
var __rest$12 = function(s, e) {
	var t = {};
	for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	if (s != null && typeof Object.getOwnPropertySymbols === "function") {
		for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	}
	return t;
};
var prefixCls$3 = cssClasses$4.PREFIX;
var Typography$1 = class extends PureComponent {
	render() {
		const _a = this.props, { component, className, children, forwardRef } = _a, rest = __rest$12(_a, [
			"component",
			"className",
			"children",
			"forwardRef"
		]);
		const Component = component;
		const classNames = (0, import_classnames.default)(prefixCls$3, className);
		return /*#__PURE__*/ React.createElement(Component, Object.assign({
			className: classNames,
			ref: forwardRef
		}, (0, import_omit.default)(rest, "tooltipRef")), children);
	}
};
Typography$1.__SemiComponentName__ = "Typography";
Typography$1.defaultProps = getDefaultPropsFromGlobalConfig(Typography$1.__SemiComponentName__, {
	component: "article",
	style: {},
	className: ""
});
Typography$1.propTypes = {
	component: import_prop_types.default.string,
	style: import_prop_types.default.object,
	className: import_prop_types.default.string
};
//#endregion
//#region node_modules/lodash/isNull.js
var require_isNull = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Checks if `value` is `null`.
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is `null`, else `false`.
	* @example
	*
	* _.isNull(null);
	* // => true
	*
	* _.isNull(void 0);
	* // => false
	*/
	function isNull(value) {
		return value === null;
	}
	module.exports = isNull;
}));
//#endregion
//#region node_modules/lodash/isString.js
var require_isString = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseGetTag = require__baseGetTag();
	var isArray = require_isArray();
	var isObjectLike = require_isObjectLike();
	/** `Object#toString` result references. */
	var stringTag = "[object String]";
	/**
	* Checks if `value` is classified as a `String` primitive or object.
	*
	* @static
	* @since 0.1.0
	* @memberOf _
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a string, else `false`.
	* @example
	*
	* _.isString('abc');
	* // => true
	*
	* _.isString(1);
	* // => false
	*/
	function isString(value) {
		return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
	}
	module.exports = isString;
}));
//#endregion
//#region node_modules/lodash/_assignMergeValue.js
var require__assignMergeValue = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseAssignValue = require__baseAssignValue();
	var eq = require_eq();
	/**
	* This function is like `assignValue` except that it doesn't assign
	* `undefined` values.
	*
	* @private
	* @param {Object} object The object to modify.
	* @param {string} key The key of the property to assign.
	* @param {*} value The value to assign.
	*/
	function assignMergeValue(object, key, value) {
		if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) baseAssignValue(object, key, value);
	}
	module.exports = assignMergeValue;
}));
//#endregion
//#region node_modules/lodash/_createBaseFor.js
var require__createBaseFor = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Creates a base function for methods like `_.forIn` and `_.forOwn`.
	*
	* @private
	* @param {boolean} [fromRight] Specify iterating from right to left.
	* @returns {Function} Returns the new base function.
	*/
	function createBaseFor(fromRight) {
		return function(object, iteratee, keysFunc) {
			var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
			while (length--) {
				var key = props[fromRight ? length : ++index];
				if (iteratee(iterable[key], key, iterable) === false) break;
			}
			return object;
		};
	}
	module.exports = createBaseFor;
}));
//#endregion
//#region node_modules/lodash/_baseFor.js
var require__baseFor = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require__createBaseFor()();
}));
//#endregion
//#region node_modules/lodash/isArrayLikeObject.js
var require_isArrayLikeObject = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isArrayLike = require_isArrayLike();
	var isObjectLike = require_isObjectLike();
	/**
	* This method is like `_.isArrayLike` except that it also checks if `value`
	* is an object.
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is an array-like object,
	*  else `false`.
	* @example
	*
	* _.isArrayLikeObject([1, 2, 3]);
	* // => true
	*
	* _.isArrayLikeObject(document.body.children);
	* // => true
	*
	* _.isArrayLikeObject('abc');
	* // => false
	*
	* _.isArrayLikeObject(_.noop);
	* // => false
	*/
	function isArrayLikeObject(value) {
		return isObjectLike(value) && isArrayLike(value);
	}
	module.exports = isArrayLikeObject;
}));
//#endregion
//#region node_modules/lodash/_safeGet.js
var require__safeGet = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Gets the value at `key`, unless `key` is "__proto__" or "constructor".
	*
	* @private
	* @param {Object} object The object to query.
	* @param {string} key The key of the property to get.
	* @returns {*} Returns the property value.
	*/
	function safeGet(object, key) {
		if (key === "constructor" && typeof object[key] === "function") return;
		if (key == "__proto__") return;
		return object[key];
	}
	module.exports = safeGet;
}));
//#endregion
//#region node_modules/lodash/toPlainObject.js
var require_toPlainObject = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var copyObject = require__copyObject();
	var keysIn = require_keysIn();
	/**
	* Converts `value` to a plain object flattening inherited enumerable string
	* keyed properties of `value` to own properties of the plain object.
	*
	* @static
	* @memberOf _
	* @since 3.0.0
	* @category Lang
	* @param {*} value The value to convert.
	* @returns {Object} Returns the converted plain object.
	* @example
	*
	* function Foo() {
	*   this.b = 2;
	* }
	*
	* Foo.prototype.c = 3;
	*
	* _.assign({ 'a': 1 }, new Foo);
	* // => { 'a': 1, 'b': 2 }
	*
	* _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	* // => { 'a': 1, 'b': 2, 'c': 3 }
	*/
	function toPlainObject(value) {
		return copyObject(value, keysIn(value));
	}
	module.exports = toPlainObject;
}));
//#endregion
//#region node_modules/lodash/_baseMergeDeep.js
var require__baseMergeDeep = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var assignMergeValue = require__assignMergeValue();
	var cloneBuffer = require__cloneBuffer();
	var cloneTypedArray = require__cloneTypedArray();
	var copyArray = require__copyArray();
	var initCloneObject = require__initCloneObject();
	var isArguments = require_isArguments();
	var isArray = require_isArray();
	var isArrayLikeObject = require_isArrayLikeObject();
	var isBuffer = require_isBuffer();
	var isFunction = require_isFunction();
	var isObject = require_isObject();
	var isPlainObject = require_isPlainObject();
	var isTypedArray = require_isTypedArray();
	var safeGet = require__safeGet();
	var toPlainObject = require_toPlainObject();
	/**
	* A specialized version of `baseMerge` for arrays and objects which performs
	* deep merges and tracks traversed objects enabling objects with circular
	* references to be merged.
	*
	* @private
	* @param {Object} object The destination object.
	* @param {Object} source The source object.
	* @param {string} key The key of the value to merge.
	* @param {number} srcIndex The index of `source`.
	* @param {Function} mergeFunc The function to merge values.
	* @param {Function} [customizer] The function to customize assigned values.
	* @param {Object} [stack] Tracks traversed source values and their merged
	*  counterparts.
	*/
	function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
		var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
		if (stacked) {
			assignMergeValue(object, key, stacked);
			return;
		}
		var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
		var isCommon = newValue === void 0;
		if (isCommon) {
			var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
			newValue = srcValue;
			if (isArr || isBuff || isTyped) {
				if (isArray(objValue)) newValue = objValue;
				else if (isArrayLikeObject(objValue)) newValue = copyArray(objValue);
				else if (isBuff) {
					isCommon = false;
					newValue = cloneBuffer(srcValue, true);
				} else if (isTyped) {
					isCommon = false;
					newValue = cloneTypedArray(srcValue, true);
				} else newValue = [];
			} else if (isPlainObject(srcValue) || isArguments(srcValue)) {
				newValue = objValue;
				if (isArguments(objValue)) newValue = toPlainObject(objValue);
				else if (!isObject(objValue) || isFunction(objValue)) newValue = initCloneObject(srcValue);
			} else isCommon = false;
		}
		if (isCommon) {
			stack.set(srcValue, newValue);
			mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
			stack["delete"](srcValue);
		}
		assignMergeValue(object, key, newValue);
	}
	module.exports = baseMergeDeep;
}));
//#endregion
//#region node_modules/lodash/_baseMerge.js
var require__baseMerge = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Stack = require__Stack();
	var assignMergeValue = require__assignMergeValue();
	var baseFor = require__baseFor();
	var baseMergeDeep = require__baseMergeDeep();
	var isObject = require_isObject();
	var keysIn = require_keysIn();
	var safeGet = require__safeGet();
	/**
	* The base implementation of `_.merge` without support for multiple sources.
	*
	* @private
	* @param {Object} object The destination object.
	* @param {Object} source The source object.
	* @param {number} srcIndex The index of `source`.
	* @param {Function} [customizer] The function to customize merged values.
	* @param {Object} [stack] Tracks traversed source values and their merged
	*  counterparts.
	*/
	function baseMerge(object, source, srcIndex, customizer, stack) {
		if (object === source) return;
		baseFor(source, function(srcValue, key) {
			stack || (stack = new Stack());
			if (isObject(srcValue)) baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
			else {
				var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
				if (newValue === void 0) newValue = srcValue;
				assignMergeValue(object, key, newValue);
			}
		}, keysIn);
	}
	module.exports = baseMerge;
}));
//#endregion
//#region node_modules/lodash/_baseRest.js
var require__baseRest = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var identity = require_identity();
	var overRest = require__overRest();
	var setToString = require__setToString();
	/**
	* The base implementation of `_.rest` which doesn't validate or coerce arguments.
	*
	* @private
	* @param {Function} func The function to apply a rest parameter to.
	* @param {number} [start=func.length-1] The start position of the rest parameter.
	* @returns {Function} Returns the new function.
	*/
	function baseRest(func, start) {
		return setToString(overRest(func, start, identity), func + "");
	}
	module.exports = baseRest;
}));
//#endregion
//#region node_modules/lodash/_isIterateeCall.js
var require__isIterateeCall = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var eq = require_eq();
	var isArrayLike = require_isArrayLike();
	var isIndex = require__isIndex();
	var isObject = require_isObject();
	/**
	* Checks if the given arguments are from an iteratee call.
	*
	* @private
	* @param {*} value The potential iteratee value argument.
	* @param {*} index The potential iteratee index or key argument.
	* @param {*} object The potential iteratee object argument.
	* @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	*  else `false`.
	*/
	function isIterateeCall(value, index, object) {
		if (!isObject(object)) return false;
		var type = typeof index;
		if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) return eq(object[index], value);
		return false;
	}
	module.exports = isIterateeCall;
}));
//#endregion
//#region node_modules/lodash/_createAssigner.js
var require__createAssigner = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseRest = require__baseRest();
	var isIterateeCall = require__isIterateeCall();
	/**
	* Creates a function like `_.assign`.
	*
	* @private
	* @param {Function} assigner The function to assign values.
	* @returns {Function} Returns the new assigner function.
	*/
	function createAssigner(assigner) {
		return baseRest(function(object, sources) {
			var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
			customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
			if (guard && isIterateeCall(sources[0], sources[1], guard)) {
				customizer = length < 3 ? void 0 : customizer;
				length = 1;
			}
			object = Object(object);
			while (++index < length) {
				var source = sources[index];
				if (source) assigner(object, source, index, customizer);
			}
			return object;
		});
	}
	module.exports = createAssigner;
}));
//#endregion
//#region node_modules/lodash/merge.js
var require_merge = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseMerge = require__baseMerge();
	module.exports = require__createAssigner()(function(object, source, srcIndex) {
		baseMerge(object, source, srcIndex);
	});
}));
//#endregion
//#region node_modules/lodash/isUndefined.js
var require_isUndefined = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Checks if `value` is `undefined`.
	*
	* @static
	* @since 0.1.0
	* @memberOf _
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
	* @example
	*
	* _.isUndefined(void 0);
	* // => true
	*
	* _.isUndefined(null);
	* // => false
	*/
	function isUndefined(value) {
		return value === void 0;
	}
	module.exports = isUndefined;
}));
//#endregion
//#region node_modules/lodash/_setCacheAdd.js
var require__setCacheAdd = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = "__lodash_hash_undefined__";
	/**
	* Adds `value` to the array cache.
	*
	* @private
	* @name add
	* @memberOf SetCache
	* @alias push
	* @param {*} value The value to cache.
	* @returns {Object} Returns the cache instance.
	*/
	function setCacheAdd(value) {
		this.__data__.set(value, HASH_UNDEFINED);
		return this;
	}
	module.exports = setCacheAdd;
}));
//#endregion
//#region node_modules/lodash/_setCacheHas.js
var require__setCacheHas = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Checks if `value` is in the array cache.
	*
	* @private
	* @name has
	* @memberOf SetCache
	* @param {*} value The value to search for.
	* @returns {boolean} Returns `true` if `value` is found, else `false`.
	*/
	function setCacheHas(value) {
		return this.__data__.has(value);
	}
	module.exports = setCacheHas;
}));
//#endregion
//#region node_modules/lodash/_SetCache.js
var require__SetCache = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var MapCache = require__MapCache();
	var setCacheAdd = require__setCacheAdd();
	var setCacheHas = require__setCacheHas();
	/**
	*
	* Creates an array cache object to store unique values.
	*
	* @private
	* @constructor
	* @param {Array} [values] The values to cache.
	*/
	function SetCache(values) {
		var index = -1, length = values == null ? 0 : values.length;
		this.__data__ = new MapCache();
		while (++index < length) this.add(values[index]);
	}
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;
	module.exports = SetCache;
}));
//#endregion
//#region node_modules/lodash/_arraySome.js
var require__arraySome = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* A specialized version of `_.some` for arrays without support for iteratee
	* shorthands.
	*
	* @private
	* @param {Array} [array] The array to iterate over.
	* @param {Function} predicate The function invoked per iteration.
	* @returns {boolean} Returns `true` if any element passes the predicate check,
	*  else `false`.
	*/
	function arraySome(array, predicate) {
		var index = -1, length = array == null ? 0 : array.length;
		while (++index < length) if (predicate(array[index], index, array)) return true;
		return false;
	}
	module.exports = arraySome;
}));
//#endregion
//#region node_modules/lodash/_cacheHas.js
var require__cacheHas = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Checks if a `cache` value for `key` exists.
	*
	* @private
	* @param {Object} cache The cache to query.
	* @param {string} key The key of the entry to check.
	* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	*/
	function cacheHas(cache, key) {
		return cache.has(key);
	}
	module.exports = cacheHas;
}));
//#endregion
//#region node_modules/lodash/_equalArrays.js
var require__equalArrays = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var SetCache = require__SetCache();
	var arraySome = require__arraySome();
	var cacheHas = require__cacheHas();
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;
	var COMPARE_UNORDERED_FLAG = 2;
	/**
	* A specialized version of `baseIsEqualDeep` for arrays with support for
	* partial deep comparisons.
	*
	* @private
	* @param {Array} array The array to compare.
	* @param {Array} other The other array to compare.
	* @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	* @param {Function} customizer The function to customize comparisons.
	* @param {Function} equalFunc The function to determine equivalents of values.
	* @param {Object} stack Tracks traversed `array` and `other` objects.
	* @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	*/
	function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
		var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
		if (arrLength != othLength && !(isPartial && othLength > arrLength)) return false;
		var arrStacked = stack.get(array);
		var othStacked = stack.get(other);
		if (arrStacked && othStacked) return arrStacked == other && othStacked == array;
		var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
		stack.set(array, other);
		stack.set(other, array);
		while (++index < arrLength) {
			var arrValue = array[index], othValue = other[index];
			if (customizer) var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
			if (compared !== void 0) {
				if (compared) continue;
				result = false;
				break;
			}
			if (seen) {
				if (!arraySome(other, function(othValue, othIndex) {
					if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) return seen.push(othIndex);
				})) {
					result = false;
					break;
				}
			} else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
				result = false;
				break;
			}
		}
		stack["delete"](array);
		stack["delete"](other);
		return result;
	}
	module.exports = equalArrays;
}));
//#endregion
//#region node_modules/lodash/_mapToArray.js
var require__mapToArray = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Converts `map` to its key-value pairs.
	*
	* @private
	* @param {Object} map The map to convert.
	* @returns {Array} Returns the key-value pairs.
	*/
	function mapToArray(map) {
		var index = -1, result = Array(map.size);
		map.forEach(function(value, key) {
			result[++index] = [key, value];
		});
		return result;
	}
	module.exports = mapToArray;
}));
//#endregion
//#region node_modules/lodash/_setToArray.js
var require__setToArray = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Converts `set` to an array of its values.
	*
	* @private
	* @param {Object} set The set to convert.
	* @returns {Array} Returns the values.
	*/
	function setToArray(set) {
		var index = -1, result = Array(set.size);
		set.forEach(function(value) {
			result[++index] = value;
		});
		return result;
	}
	module.exports = setToArray;
}));
//#endregion
//#region node_modules/lodash/_equalByTag.js
var require__equalByTag = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Symbol = require__Symbol();
	var Uint8Array = require__Uint8Array();
	var eq = require_eq();
	var equalArrays = require__equalArrays();
	var mapToArray = require__mapToArray();
	var setToArray = require__setToArray();
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;
	var COMPARE_UNORDERED_FLAG = 2;
	/** `Object#toString` result references. */
	var boolTag = "[object Boolean]";
	var dateTag = "[object Date]";
	var errorTag = "[object Error]";
	var mapTag = "[object Map]";
	var numberTag = "[object Number]";
	var regexpTag = "[object RegExp]";
	var setTag = "[object Set]";
	var stringTag = "[object String]";
	var symbolTag = "[object Symbol]";
	var arrayBufferTag = "[object ArrayBuffer]";
	var dataViewTag = "[object DataView]";
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : void 0;
	var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
	/**
	* A specialized version of `baseIsEqualDeep` for comparing objects of
	* the same `toStringTag`.
	*
	* **Note:** This function only supports comparing values with tags of
	* `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	*
	* @private
	* @param {Object} object The object to compare.
	* @param {Object} other The other object to compare.
	* @param {string} tag The `toStringTag` of the objects to compare.
	* @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	* @param {Function} customizer The function to customize comparisons.
	* @param {Function} equalFunc The function to determine equivalents of values.
	* @param {Object} stack Tracks traversed `object` and `other` objects.
	* @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	*/
	function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
		switch (tag) {
			case dataViewTag:
				if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) return false;
				object = object.buffer;
				other = other.buffer;
			case arrayBufferTag:
				if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) return false;
				return true;
			case boolTag:
			case dateTag:
			case numberTag: return eq(+object, +other);
			case errorTag: return object.name == other.name && object.message == other.message;
			case regexpTag:
			case stringTag: return object == other + "";
			case mapTag: var convert = mapToArray;
			case setTag:
				var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
				convert || (convert = setToArray);
				if (object.size != other.size && !isPartial) return false;
				var stacked = stack.get(object);
				if (stacked) return stacked == other;
				bitmask |= COMPARE_UNORDERED_FLAG;
				stack.set(object, other);
				var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
				stack["delete"](object);
				return result;
			case symbolTag: if (symbolValueOf) return symbolValueOf.call(object) == symbolValueOf.call(other);
		}
		return false;
	}
	module.exports = equalByTag;
}));
//#endregion
//#region node_modules/lodash/_equalObjects.js
var require__equalObjects = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var getAllKeys = require__getAllKeys();
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;
	/** Used to check objects for own properties. */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	* A specialized version of `baseIsEqualDeep` for objects with support for
	* partial deep comparisons.
	*
	* @private
	* @param {Object} object The object to compare.
	* @param {Object} other The other object to compare.
	* @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	* @param {Function} customizer The function to customize comparisons.
	* @param {Function} equalFunc The function to determine equivalents of values.
	* @param {Object} stack Tracks traversed `object` and `other` objects.
	* @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	*/
	function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
		var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length;
		if (objLength != getAllKeys(other).length && !isPartial) return false;
		var index = objLength;
		while (index--) {
			var key = objProps[index];
			if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) return false;
		}
		var objStacked = stack.get(object);
		var othStacked = stack.get(other);
		if (objStacked && othStacked) return objStacked == other && othStacked == object;
		var result = true;
		stack.set(object, other);
		stack.set(other, object);
		var skipCtor = isPartial;
		while (++index < objLength) {
			key = objProps[index];
			var objValue = object[key], othValue = other[key];
			if (customizer) var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
			if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
				result = false;
				break;
			}
			skipCtor || (skipCtor = key == "constructor");
		}
		if (result && !skipCtor) {
			var objCtor = object.constructor, othCtor = other.constructor;
			if (objCtor != othCtor && "constructor" in object && "constructor" in other && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) result = false;
		}
		stack["delete"](object);
		stack["delete"](other);
		return result;
	}
	module.exports = equalObjects;
}));
//#endregion
//#region node_modules/lodash/_baseIsEqualDeep.js
var require__baseIsEqualDeep = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Stack = require__Stack();
	var equalArrays = require__equalArrays();
	var equalByTag = require__equalByTag();
	var equalObjects = require__equalObjects();
	var getTag = require__getTag();
	var isArray = require_isArray();
	var isBuffer = require_isBuffer();
	var isTypedArray = require_isTypedArray();
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;
	/** `Object#toString` result references. */
	var argsTag = "[object Arguments]";
	var arrayTag = "[object Array]";
	var objectTag = "[object Object]";
	/** Used to check objects for own properties. */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	* A specialized version of `baseIsEqual` for arrays and objects which performs
	* deep comparisons and tracks traversed objects enabling objects with circular
	* references to be compared.
	*
	* @private
	* @param {Object} object The object to compare.
	* @param {Object} other The other object to compare.
	* @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	* @param {Function} customizer The function to customize comparisons.
	* @param {Function} equalFunc The function to determine equivalents of values.
	* @param {Object} [stack] Tracks traversed `object` and `other` objects.
	* @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	*/
	function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
		var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
		objTag = objTag == argsTag ? objectTag : objTag;
		othTag = othTag == argsTag ? objectTag : othTag;
		var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
		if (isSameTag && isBuffer(object)) {
			if (!isBuffer(other)) return false;
			objIsArr = true;
			objIsObj = false;
		}
		if (isSameTag && !objIsObj) {
			stack || (stack = new Stack());
			return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
		}
		if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
			var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
			if (objIsWrapped || othIsWrapped) {
				var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
				stack || (stack = new Stack());
				return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
			}
		}
		if (!isSameTag) return false;
		stack || (stack = new Stack());
		return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}
	module.exports = baseIsEqualDeep;
}));
//#endregion
//#region node_modules/lodash/_baseIsEqual.js
var require__baseIsEqual = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseIsEqualDeep = require__baseIsEqualDeep();
	var isObjectLike = require_isObjectLike();
	/**
	* The base implementation of `_.isEqual` which supports partial comparisons
	* and tracks traversed objects.
	*
	* @private
	* @param {*} value The value to compare.
	* @param {*} other The other value to compare.
	* @param {boolean} bitmask The bitmask flags.
	*  1 - Unordered comparison
	*  2 - Partial comparison
	* @param {Function} [customizer] The function to customize comparisons.
	* @param {Object} [stack] Tracks traversed `value` and `other` objects.
	* @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	*/
	function baseIsEqual(value, other, bitmask, customizer, stack) {
		if (value === other) return true;
		if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) return value !== value && other !== other;
		return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	}
	module.exports = baseIsEqual;
}));
//#endregion
//#region node_modules/lodash/isEqual.js
var require_isEqual = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseIsEqual = require__baseIsEqual();
	/**
	* Performs a deep comparison between two values to determine if they are
	* equivalent.
	*
	* **Note:** This method supports comparing arrays, array buffers, booleans,
	* date objects, error objects, maps, numbers, `Object` objects, regexes,
	* sets, strings, symbols, and typed arrays. `Object` objects are compared
	* by their own, not inherited, enumerable properties. Functions and DOM
	* nodes are compared by strict equality, i.e. `===`.
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @category Lang
	* @param {*} value The value to compare.
	* @param {*} other The other value to compare.
	* @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	* @example
	*
	* var object = { 'a': 1 };
	* var other = { 'a': 1 };
	*
	* _.isEqual(object, other);
	* // => true
	*
	* object === other;
	* // => false
	*/
	function isEqual(value, other) {
		return baseIsEqual(value, other);
	}
	module.exports = isEqual;
}));
//#endregion
//#region node_modules/lodash/isEmpty.js
var require_isEmpty = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseKeys = require__baseKeys();
	var getTag = require__getTag();
	var isArguments = require_isArguments();
	var isArray = require_isArray();
	var isArrayLike = require_isArrayLike();
	var isBuffer = require_isBuffer();
	var isPrototype = require__isPrototype();
	var isTypedArray = require_isTypedArray();
	/** `Object#toString` result references. */
	var mapTag = "[object Map]";
	var setTag = "[object Set]";
	/** Used to check objects for own properties. */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	* Checks if `value` is an empty object, collection, map, or set.
	*
	* Objects are considered empty if they have no own enumerable string keyed
	* properties.
	*
	* Array-like values such as `arguments` objects, arrays, buffers, strings, or
	* jQuery-like collections are considered empty if they have a `length` of `0`.
	* Similarly, maps and sets are considered empty if they have a `size` of `0`.
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is empty, else `false`.
	* @example
	*
	* _.isEmpty(null);
	* // => true
	*
	* _.isEmpty(true);
	* // => true
	*
	* _.isEmpty(1);
	* // => true
	*
	* _.isEmpty([1, 2, 3]);
	* // => false
	*
	* _.isEmpty({ 'a': 1 });
	* // => false
	*/
	function isEmpty(value) {
		if (value == null) return true;
		if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) return !value.length;
		var tag = getTag(value);
		if (tag == mapTag || tag == setTag) return !value.size;
		if (isPrototype(value)) return !baseKeys(value).length;
		for (var key in value) if (hasOwnProperty.call(value, key)) return false;
		return true;
	}
	module.exports = isEmpty;
}));
//#endregion
//#region node_modules/lodash/_baseForOwn.js
var require__baseForOwn = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseFor = require__baseFor();
	var keys = require_keys();
	/**
	* The base implementation of `_.forOwn` without support for iteratee shorthands.
	*
	* @private
	* @param {Object} object The object to iterate over.
	* @param {Function} iteratee The function invoked per iteration.
	* @returns {Object} Returns `object`.
	*/
	function baseForOwn(object, iteratee) {
		return object && baseFor(object, iteratee, keys);
	}
	module.exports = baseForOwn;
}));
//#endregion
//#region node_modules/lodash/_createBaseEach.js
var require__createBaseEach = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isArrayLike = require_isArrayLike();
	/**
	* Creates a `baseEach` or `baseEachRight` function.
	*
	* @private
	* @param {Function} eachFunc The function to iterate over a collection.
	* @param {boolean} [fromRight] Specify iterating from right to left.
	* @returns {Function} Returns the new base function.
	*/
	function createBaseEach(eachFunc, fromRight) {
		return function(collection, iteratee) {
			if (collection == null) return collection;
			if (!isArrayLike(collection)) return eachFunc(collection, iteratee);
			var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
			while (fromRight ? index-- : ++index < length) if (iteratee(iterable[index], index, iterable) === false) break;
			return collection;
		};
	}
	module.exports = createBaseEach;
}));
//#endregion
//#region node_modules/lodash/_baseEach.js
var require__baseEach = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseForOwn = require__baseForOwn();
	module.exports = require__createBaseEach()(baseForOwn);
}));
//#endregion
//#region node_modules/lodash/_castFunction.js
var require__castFunction = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var identity = require_identity();
	/**
	* Casts `value` to `identity` if it's not a function.
	*
	* @private
	* @param {*} value The value to inspect.
	* @returns {Function} Returns cast function.
	*/
	function castFunction(value) {
		return typeof value == "function" ? value : identity;
	}
	module.exports = castFunction;
}));
//#endregion
//#region node_modules/lodash/forEach.js
var require_forEach = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var arrayEach = require__arrayEach();
	var baseEach = require__baseEach();
	var castFunction = require__castFunction();
	var isArray = require_isArray();
	/**
	* Iterates over elements of `collection` and invokes `iteratee` for each element.
	* The iteratee is invoked with three arguments: (value, index|key, collection).
	* Iteratee functions may exit iteration early by explicitly returning `false`.
	*
	* **Note:** As with other "Collections" methods, objects with a "length"
	* property are iterated like arrays. To avoid this behavior use `_.forIn`
	* or `_.forOwn` for object iteration.
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @alias each
	* @category Collection
	* @param {Array|Object} collection The collection to iterate over.
	* @param {Function} [iteratee=_.identity] The function invoked per iteration.
	* @returns {Array|Object} Returns `collection`.
	* @see _.forEachRight
	* @example
	*
	* _.forEach([1, 2], function(value) {
	*   console.log(value);
	* });
	* // => Logs `1` then `2`.
	*
	* _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
	*   console.log(key);
	* });
	* // => Logs 'a' then 'b' (iteration order is not guaranteed).
	*/
	function forEach(collection, iteratee) {
		return (isArray(collection) ? arrayEach : baseEach)(collection, castFunction(iteratee));
	}
	module.exports = forEach;
}));
//#endregion
//#region node_modules/lodash/each.js
var require_each = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_forEach();
}));
//#endregion
//#region node_modules/@douyinfe/semi-foundation/lib/es/utils/isNullOrUndefined.js
/**
* Whether null or undefined
* @param {*} value
* @returns  {boolean}
*/
function isNullOrUndefined(value) {
	return value === null || value === void 0;
}
//#endregion
//#region node_modules/@douyinfe/semi-foundation/lib/es/utils/Event.js
var import_isEqual = /* @__PURE__ */ __toESM(require_isEqual());
var import_isEmpty = /* @__PURE__ */ __toESM(require_isEmpty());
var import_each = /* @__PURE__ */ __toESM(require_each());
var Event = class {
	constructor() {
		this._eventMap = /* @__PURE__ */ new Map();
	}
	on(event, callback) {
		if (event && typeof callback === "function") {
			this._eventMap.has(event) || this._eventMap.set(event, []);
			this._eventMap.get(event).push(callback);
		}
		return this;
	}
	once(event, callback) {
		var _this = this;
		if (event && typeof callback === "function") {
			const fn = function() {
				callback(...arguments);
				_this.off(event, fn);
			};
			this.on(event, fn);
		}
	}
	off(event, callback) {
		if (event) {
			if (typeof callback === "function") {
				const callbacks = this._eventMap.get(event);
				if (Array.isArray(callbacks) && callbacks.length) {
					let index = -1;
					while ((index = callbacks.findIndex((cb) => cb === callback)) > -1) callbacks.splice(index, 1);
				}
			} else if (isNullOrUndefined(callback)) this._eventMap.delete(event);
		}
		return this;
	}
	emit(event) {
		for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) args[_key - 1] = arguments[_key];
		if (!this._eventMap.has(event)) return false;
		[...this._eventMap.get(event)].forEach((callback) => callback(...args));
		return true;
	}
};
//#endregion
//#region node_modules/@douyinfe/semi-foundation/lib/es/utils/a11y.js
function handlePrevent(event) {
	event.stopPropagation();
	event.preventDefault();
}
//#endregion
//#region node_modules/@douyinfe/semi-foundation/lib/es/tooltip/foundation.js
var REGS = {
	TOP: /top/i,
	RIGHT: /right/i,
	BOTTOM: /bottom/i,
	LEFT: /left/i
};
var defaultRect = {
	left: 0,
	top: 0,
	height: 0,
	width: 0,
	scrollLeft: 0,
	scrollTop: 0
};
var Tooltip$1 = class extends BaseFoundation {
	constructor(adapter) {
		var _this;
		super(Object.assign({}, adapter));
		_this = this;
		this.removePortal = () => {
			this._adapter.removePortal();
		};
		this.setDisplayNone = (displayNone, cb) => {
			this._adapter.setDisplayNone(displayNone, cb);
		};
		this.updateStateIfCursorOnTrigger = (trigger) => {
			var _a, _b;
			if ((_a = trigger === null || trigger === void 0 ? void 0 : trigger.matches) === null || _a === void 0 ? void 0 : _a.call(trigger, ":hover")) {
				const eventNames = this._adapter.getEventName();
				const triggerEventSet = this.getState("triggerEventSet");
				(_b = triggerEventSet[eventNames.mouseEnter]) === null || _b === void 0 || _b.call(triggerEventSet);
			}
		};
		this.onResize = () => {
			if (!this.getState("visible")) return;
			this.calcPosition();
		};
		this.delayShow = () => {
			const mouseEnterDelay = this.getProp("mouseEnterDelay");
			this.clearDelayTimer();
			if (mouseEnterDelay > 0) this._timer = setTimeout(() => {
				this.show();
				this.clearDelayTimer();
			}, mouseEnterDelay);
			else this.show();
		};
		this.show = () => {
			this._initContainerPosition();
			if (this._adapter.getAnimatingState()) return;
			const content = this.getProp("content");
			const trigger = this.getProp("trigger");
			const clickTriggerToHide = this.getProp("clickTriggerToHide");
			const { visible, displayNone } = this.getStates();
			if (displayNone) this.setDisplayNone(false);
			if (visible) return;
			this.clearDelayTimer();
			/**
			* If you emit an event in setState callback, you need to place the event listener function before setState to execute.
			* This is to avoid event registration being executed later than setState callback when setState is executed in setTimeout.
			* internal-issues:1402#note_38969412
			*/
			this._adapter.on("portalInserted", () => {
				this.calcPosition();
			});
			if (trigger === "hover") {
				const checkTriggerIsHover = () => {
					var _a;
					const triggerDOM = this._adapter.getTriggerDOM();
					if (trigger && !((_a = triggerDOM === null || triggerDOM === void 0 ? void 0 : triggerDOM.matches) === null || _a === void 0 ? void 0 : _a.call(triggerDOM, ":hover"))) this.hide();
					this._adapter.off("portalInserted", checkTriggerIsHover);
				};
				this._adapter.on("portalInserted", checkTriggerIsHover);
			}
			this._adapter.on("positionUpdated", () => {
				this._togglePortalVisible(true);
			});
			this._adapter.insertPortal(content, {
				left: -9999,
				top: -9999
			});
			if (trigger === "custom") this._adapter.registerClickOutsideHandler(() => {});
			/**
			* trigger类型是click时，仅当portal被插入显示后，才绑定clickOutsideHandler
			* 因为handler需要绑定在document上。如果在constructor阶段绑定
			* 当一个页面中有多个容器实例时，一次click会触发多个容器的handler
			*
			* When the trigger type is click, clickOutsideHandler is bound only after the portal is inserted and displayed
			* Because the handler needs to be bound to the document. If you bind during the constructor phase
			* When there are multiple container instances in a page, one click triggers the handler of multiple containers
			*/
			if (trigger === "click" || clickTriggerToHide || trigger === "contextMenu") this._adapter.registerClickOutsideHandler(this.hide);
			this._bindScrollEvent();
			this._bindResizeEvent();
		};
		/**
		* 耦合的东西比较多，稍微罗列一下：
		*
		* - 根据 trigger 和 wrapper 的 boundingClient 计算当前的 left、top、transform-origin
		* - 根据当前的 position 和 wrapper 的 boundingClient 决定是否需要自动调整位置
		* - 根据当前的 position、trigger 的 boundingClient 以及 motion.handleStyle 调整当前的 style
		*
		* There are many coupling things, a little list:
		*
		* - calculate the current left, top, and transfer-origin according to the boundingClient of trigger and wrapper
		* - decide whether to automatically adjust the position according to the current position and the boundingClient of wrapper
		* - adjust the current style according to the current position, the boundingClient of trigger and motion.handle Style
		*/
		this.calcPosition = function(triggerRect, wrapperRect, containerRect) {
			let shouldUpdatePos = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
			triggerRect = ((0, import_isEmpty.default)(triggerRect) ? _this._adapter.getTriggerBounding() : triggerRect) || Object.assign({}, defaultRect);
			containerRect = ((0, import_isEmpty.default)(containerRect) ? _this._adapter.getPopupContainerRect() : containerRect) || Object.assign({}, defaultRect);
			wrapperRect = ((0, import_isEmpty.default)(wrapperRect) ? _this._adapter.getWrapperBounding() : wrapperRect) || Object.assign({}, defaultRect);
			let style = _this.calcPosStyle({
				triggerRect,
				wrapperRect,
				containerRect
			});
			let position = _this.getProp("position");
			if (_this.getProp("autoAdjustOverflow")) {
				const { position: adjustedPos, isHeightOverFlow, isWidthOverFlow } = _this.adjustPosIfNeed(position, style, triggerRect, wrapperRect, containerRect);
				if (position !== adjustedPos || isHeightOverFlow || isWidthOverFlow) {
					position = adjustedPos;
					style = _this.calcPosStyle({
						triggerRect,
						wrapperRect,
						containerRect,
						position,
						spacing: null,
						isOverFlow: [isHeightOverFlow, isWidthOverFlow]
					});
				}
			}
			if (shouldUpdatePos && _this._mounted) _this._adapter.setPosition(Object.assign(Object.assign({}, style), { position }));
			return style;
		};
		this.delayHide = () => {
			const mouseLeaveDelay = this.getProp("mouseLeaveDelay");
			this.clearDelayTimer();
			if (mouseLeaveDelay > 0) this._timer = setTimeout(() => {
				this.hide();
				this.clearDelayTimer();
			}, mouseLeaveDelay);
			else this.hide();
		};
		this.hide = () => {
			this.clearDelayTimer();
			this._togglePortalVisible(false);
			this._adapter.off("portalInserted");
			this._adapter.off("positionUpdated");
		};
		this.handleContainerKeydown = (event) => {
			const { guardFocus, closeOnEsc } = this.getProps();
			switch (event && event.key) {
				case "Escape":
					closeOnEsc && this._handleEscKeyDown(event);
					break;
				case "Tab": if (guardFocus) {
					const container = this._adapter.getContainer();
					const focusableElements = this._adapter.getFocusableElements(container);
					if (focusableElements.length) {
						if (event.shiftKey) this._handleContainerShiftTabKeyDown(focusableElements, event);
						else this._handleContainerTabKeyDown(focusableElements, event);
					}
				}
			}
		};
		this._timer = null;
	}
	init() {
		const { wrapperId } = this.getProps();
		this._mounted = true;
		this._bindEvent();
		this._shouldShow();
		if (!wrapperId) this._adapter.setId();
	}
	destroy() {
		this._mounted = false;
		this.unBindEvent();
	}
	_bindEvent() {
		const trigger = this.getProp("trigger");
		const { triggerEventSet, portalEventSet } = this._generateEvent(trigger);
		this._bindTriggerEvent(triggerEventSet);
		this._bindPortalEvent(portalEventSet);
		this._bindResizeEvent();
	}
	unBindEvent() {
		this._adapter.unregisterClickOutsideHandler();
		this.unBindResizeEvent();
		this.unBindScrollEvent();
		clearTimeout(this._timer);
	}
	_bindTriggerEvent(triggerEventSet) {
		this._adapter.registerTriggerEvent(triggerEventSet);
	}
	_bindPortalEvent(portalEventSet) {
		this._adapter.registerPortalEvent(portalEventSet);
	}
	_bindResizeEvent() {
		this._adapter.registerResizeHandler(this.onResize);
	}
	unBindResizeEvent() {
		this._adapter.unregisterResizeHandler(this.onResize);
	}
	_adjustPos() {
		let position = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
		let isVertical = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
		let adjustType = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "reverse";
		let concatPos = arguments.length > 3 ? arguments[3] : void 0;
		switch (adjustType) {
			case "reverse": return this._reversePos(position, isVertical);
			case "expand": return this._expandPos(position, concatPos);
			case "reduce": return this._reducePos(position);
			default: return this._reversePos(position, isVertical);
		}
	}
	_reversePos() {
		let position = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
		if (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false) {
			if (REGS.TOP.test(position)) return position.replace("top", "bottom").replace("Top", "Bottom");
			else if (REGS.BOTTOM.test(position)) return position.replace("bottom", "top").replace("Bottom", "Top");
		} else if (REGS.LEFT.test(position)) return position.replace("left", "right").replace("Left", "Right");
		else if (REGS.RIGHT.test(position)) return position.replace("right", "left").replace("Right", "Left");
		return position;
	}
	_expandPos() {
		let position = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
		let concatPos = arguments.length > 1 ? arguments[1] : void 0;
		return position.concat(concatPos);
	}
	_reducePos() {
		let position = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
		const found = [
			"Top",
			"Bottom",
			"Left",
			"Right"
		].find((pos) => position.endsWith(pos));
		return found ? position.replace(found, "") : position;
	}
	clearDelayTimer() {
		if (this._timer) {
			clearTimeout(this._timer);
			this._timer = null;
		}
	}
	_generateEvent(types) {
		const eventNames = this._adapter.getEventName();
		const triggerEventSet = { [eventNames.keydown]: (event) => {
			this._handleTriggerKeydown(event);
		} };
		let portalEventSet = {};
		switch (types) {
			case "focus":
				triggerEventSet[eventNames.focus] = () => {
					this.getProp("condition") !== false && this.delayShow();
				};
				triggerEventSet[eventNames.blur] = () => {
					this.delayHide();
				};
				portalEventSet = triggerEventSet;
				break;
			case "click":
				triggerEventSet[eventNames.click] = () => {
					this.getProp("condition") !== false && this.show();
				};
				portalEventSet = {};
				break;
			case "hover":
				triggerEventSet[eventNames.mouseEnter] = () => {
					this.setCache("isClickToHide", false);
					this.getProp("condition") !== false && this.delayShow();
				};
				triggerEventSet[eventNames.mouseLeave] = () => {
					this.delayHide();
				};
				triggerEventSet[eventNames.focus] = () => {
					const { disableFocusListener } = this.getProps();
					this.getProp("condition") !== false && !disableFocusListener && this.delayShow();
				};
				triggerEventSet[eventNames.blur] = () => {
					const { disableFocusListener } = this.getProps();
					!disableFocusListener && this.delayHide();
				};
				portalEventSet = Object.assign({}, triggerEventSet);
				if (this.getProp("clickToHide")) {
					portalEventSet[eventNames.click] = () => {
						this.setCache("isClickToHide", true);
						this.hide();
					};
					portalEventSet[eventNames.mouseEnter] = () => {
						if (this.getCache("isClickToHide")) return;
						this.getProp("condition") !== false && this.delayShow();
					};
				}
				break;
			case "custom": break;
			case "contextMenu": triggerEventSet[eventNames.contextMenu] = (e) => {
				if (this.getProp("condition") === false) return;
				e.preventDefault();
				this.show();
			};
		}
		return {
			triggerEventSet,
			portalEventSet
		};
	}
	_shouldShow() {
		if (this.getProp("visible")) this.show();
	}
	_togglePortalVisible(isVisible) {
		const nowVisible = this.getState("visible");
		const isInsert = this.getState("isInsert");
		if (nowVisible !== isVisible || isInsert !== isVisible) this._adapter.togglePortalVisible(isVisible, () => {
			if (isVisible) this._adapter.setInitialFocus();
			this._adapter.notifyVisibleChange(isVisible);
		});
	}
	_roundPixel(pixel) {
		if (typeof pixel === "number") return Math.round(pixel);
		return pixel;
	}
	calcTransformOrigin(position, triggerRect, translateX, translateY) {
		if (position && triggerRect && translateX != null && translateY != null) {
			if (this.getProp("transformFromCenter")) {
				if (["topLeft", "bottomLeft"].includes(position)) return `${this._roundPixel(triggerRect.width / 2)}px ${-translateY * 100}%`;
				if (["topRight", "bottomRight"].includes(position)) return `calc(100% - ${this._roundPixel(triggerRect.width / 2)}px) ${-translateY * 100}%`;
				if (["leftTop", "rightTop"].includes(position)) return `${-translateX * 100}% ${this._roundPixel(triggerRect.height / 2)}px`;
				if (["leftBottom", "rightBottom"].includes(position)) return `${-translateX * 100}% calc(100% - ${this._roundPixel(triggerRect.height / 2)}px)`;
			}
			return `${-translateX * 100}% ${-translateY * 100}%`;
		}
		return null;
	}
	calcPosStyle(props) {
		var _a;
		const { spacing, isOverFlow } = props;
		const { innerWidth } = window;
		const triggerRect = ((0, import_isEmpty.default)(props.triggerRect) ? props.triggerRect : this._adapter.getTriggerBounding()) || Object.assign({}, defaultRect);
		const containerRect = ((0, import_isEmpty.default)(props.containerRect) ? props.containerRect : this._adapter.getPopupContainerRect()) || Object.assign({}, defaultRect);
		const wrapperRect = ((0, import_isEmpty.default)(props.wrapperRect) ? props.wrapperRect : this._adapter.getWrapperBounding()) || Object.assign({}, defaultRect);
		const position = props.position != null ? props.position : this.getProp("position");
		const RAW_SPACING = spacing != null ? spacing : this.getProp("spacing");
		const { arrowPointAtCenter, showArrow, arrowBounding } = this.getProps();
		const pointAtCenter = showArrow && arrowPointAtCenter;
		let SPACING = RAW_SPACING;
		let ANO_SPACING = 0;
		if (typeof RAW_SPACING !== "number") {
			const isTopOrBottom = position.includes("top") || position.includes("bottom");
			SPACING = isTopOrBottom ? RAW_SPACING.y : RAW_SPACING.x;
			ANO_SPACING = isTopOrBottom ? RAW_SPACING.x : RAW_SPACING.y;
		}
		const horizontalArrowWidth = (0, import_get.default)(arrowBounding, "width", 24);
		const verticalArrowHeight = (0, import_get.default)(arrowBounding, "width", 24);
		const arrowOffsetY = (0, import_get.default)(arrowBounding, "offsetY", 0);
		const positionOffsetX = 6;
		const positionOffsetY = 6;
		let left;
		let top;
		let translateX = 0;
		let translateY = 0;
		const middleX = triggerRect.left + triggerRect.width / 2;
		const middleY = triggerRect.top + triggerRect.height / 2;
		const offsetXWithArrow = positionOffsetX + horizontalArrowWidth / 2;
		const offsetYWithArrow = positionOffsetY + verticalArrowHeight / 2;
		const heightDifference = wrapperRect.height - containerRect.height;
		const widthDifference = wrapperRect.width - containerRect.width;
		const offsetHeight = heightDifference > 0 ? heightDifference : 0;
		const offsetWidth = widthDifference > 0 ? widthDifference : 0;
		const isHeightOverFlow = isOverFlow && isOverFlow[0];
		const isWidthOverFlow = isOverFlow && isOverFlow[1];
		const isTriggerNearLeft = middleX - containerRect.left < containerRect.right - middleX;
		const isTriggerNearTop = middleY - containerRect.top < containerRect.bottom - middleY;
		const isWrapperWidthOverflow = wrapperRect.width > innerWidth;
		const scaled = Math.abs((wrapperRect === null || wrapperRect === void 0 ? void 0 : wrapperRect.width) - ((_a = this._adapter.getContainer()) === null || _a === void 0 ? void 0 : _a.clientWidth)) > 1;
		if (scaled) SPACING = SPACING * wrapperRect.width / this._adapter.getContainer().clientWidth;
		switch (position) {
			case "top":
				left = isWidthOverFlow ? isTriggerNearLeft ? containerRect.left + wrapperRect.width / 2 : containerRect.right - wrapperRect.width / 2 + offsetWidth : middleX + ANO_SPACING;
				top = isHeightOverFlow ? containerRect.top : triggerRect.top - SPACING;
				translateX = -.5;
				translateY = isHeightOverFlow ? 0 : -1;
				break;
			case "topLeft":
				left = isWidthOverFlow ? isWrapperWidthOverflow ? containerRect.left : containerRect.right - wrapperRect.width : pointAtCenter ? middleX - offsetXWithArrow + ANO_SPACING : triggerRect.left + ANO_SPACING;
				top = isHeightOverFlow ? containerRect.top : triggerRect.top - SPACING;
				translateY = isHeightOverFlow ? 0 : -1;
				break;
			case "topRight":
				left = isWidthOverFlow ? containerRect.right + offsetWidth : pointAtCenter ? middleX + offsetXWithArrow + ANO_SPACING : triggerRect.right + ANO_SPACING;
				top = isHeightOverFlow ? containerRect.top : triggerRect.top - SPACING;
				translateY = isHeightOverFlow ? 0 : -1;
				translateX = -1;
				break;
			case "left":
				left = isWidthOverFlow ? containerRect.left : triggerRect.left - SPACING;
				top = isHeightOverFlow ? isTriggerNearTop ? containerRect.top + wrapperRect.height / 2 : containerRect.bottom - wrapperRect.height / 2 + offsetHeight : middleY + ANO_SPACING;
				translateX = isWidthOverFlow ? 0 : -1;
				translateY = -.5;
				break;
			case "leftTop":
				left = isWidthOverFlow ? containerRect.left : triggerRect.left - SPACING;
				top = isHeightOverFlow ? containerRect.top : pointAtCenter ? middleY - offsetYWithArrow + ANO_SPACING : triggerRect.top + ANO_SPACING;
				translateX = isWidthOverFlow ? 0 : -1;
				break;
			case "leftBottom":
				left = isWidthOverFlow ? containerRect.left : triggerRect.left - SPACING;
				top = isHeightOverFlow ? containerRect.bottom : pointAtCenter ? middleY + offsetYWithArrow + ANO_SPACING : triggerRect.bottom + ANO_SPACING;
				translateX = isWidthOverFlow ? 0 : -1;
				translateY = -1;
				break;
			case "bottom":
				left = isWidthOverFlow ? isTriggerNearLeft ? containerRect.left + wrapperRect.width / 2 : containerRect.right - wrapperRect.width / 2 + offsetWidth : middleX + ANO_SPACING;
				top = isHeightOverFlow ? containerRect.bottom : triggerRect.top + triggerRect.height + SPACING;
				translateX = -.5;
				translateY = isHeightOverFlow ? -1 : 0;
				break;
			case "bottomLeft":
				left = isWidthOverFlow ? isWrapperWidthOverflow ? containerRect.left : containerRect.right - wrapperRect.width : pointAtCenter ? middleX - offsetXWithArrow + ANO_SPACING : triggerRect.left + ANO_SPACING;
				top = isHeightOverFlow ? containerRect.bottom : triggerRect.top + triggerRect.height + SPACING;
				translateY = isHeightOverFlow ? -1 : 0;
				break;
			case "bottomRight":
				left = isWidthOverFlow ? containerRect.right + offsetWidth : pointAtCenter ? middleX + offsetXWithArrow + ANO_SPACING : triggerRect.right + ANO_SPACING;
				top = isHeightOverFlow ? containerRect.bottom : triggerRect.top + triggerRect.height + SPACING;
				translateX = -1;
				translateY = isHeightOverFlow ? -1 : 0;
				break;
			case "right":
				left = isWidthOverFlow ? containerRect.right : triggerRect.right + SPACING;
				top = isHeightOverFlow ? isTriggerNearTop ? containerRect.top + wrapperRect.height / 2 : containerRect.bottom - wrapperRect.height / 2 + offsetHeight : middleY + ANO_SPACING;
				translateX = isWidthOverFlow ? -1 : 0;
				translateY = -.5;
				break;
			case "rightTop":
				left = isWidthOverFlow ? containerRect.right : triggerRect.right + SPACING;
				top = isHeightOverFlow ? containerRect.top : pointAtCenter ? middleY - offsetYWithArrow + ANO_SPACING : triggerRect.top + ANO_SPACING;
				translateX = isWidthOverFlow ? -1 : 0;
				break;
			case "rightBottom":
				left = isWidthOverFlow ? containerRect.right : triggerRect.right + SPACING;
				top = isHeightOverFlow ? containerRect.bottom : pointAtCenter ? middleY + offsetYWithArrow + ANO_SPACING : triggerRect.bottom + ANO_SPACING;
				translateX = isWidthOverFlow ? -1 : 0;
				translateY = -1;
				break;
			case "leftTopOver":
				left = isWidthOverFlow ? containerRect.left : triggerRect.left - SPACING;
				top = isHeightOverFlow ? containerRect.top : triggerRect.top - SPACING;
				break;
			case "rightTopOver":
				left = isWidthOverFlow ? containerRect.right : triggerRect.right + SPACING;
				top = isHeightOverFlow ? containerRect.top : triggerRect.top - SPACING;
				translateX = -1;
				break;
			case "leftBottomOver":
				left = isWidthOverFlow ? containerRect.left : triggerRect.left - SPACING;
				top = isHeightOverFlow ? containerRect.bottom : triggerRect.bottom + SPACING;
				translateY = -1;
				break;
			case "rightBottomOver":
				left = isWidthOverFlow ? containerRect.right : triggerRect.right + SPACING;
				top = isHeightOverFlow ? containerRect.bottom : triggerRect.bottom + SPACING;
				translateX = -1;
				translateY = -1;
		}
		const transformOrigin = this.calcTransformOrigin(position, triggerRect, translateX, translateY);
		const _containerIsBody = this._adapter.containerIsBody();
		left = left - containerRect.left;
		top = top - containerRect.top;
		if (scaled) left /= wrapperRect.width / this._adapter.getContainer().clientWidth;
		if (scaled) top /= wrapperRect.height / this._adapter.getContainer().clientHeight;
		/**
		* container为body时，如果position不为relative或absolute，这时trigger计算出的top/left会根据html定位（initial containing block）
		* 此时如果body有margin，则计算出的位置相对于body会有问题 fix issue #1368
		*
		* When container is body, if position is not relative or absolute, then the top/left calculated by trigger will be positioned according to html
		* At this time, if the body has a margin, the calculated position will have a problem relative to the body fix issue #1368
		*/
		if (_containerIsBody && !this._adapter.containerIsRelativeOrAbsolute()) {
			const documentEleRect = this._adapter.getDocumentElementBounding();
			left += containerRect.left - documentEleRect.left;
			top += containerRect.top - documentEleRect.top;
		}
		left = _containerIsBody ? left : left + containerRect.scrollLeft;
		top = _containerIsBody ? top : top + containerRect.scrollTop;
		const triggerHeight = triggerRect.height;
		if (this.getProp("showArrow") && !arrowPointAtCenter && triggerHeight <= (verticalArrowHeight / 2 + arrowOffsetY) * 2) {
			const offsetY = triggerHeight / 2 - (arrowOffsetY + verticalArrowHeight / 2);
			if ((position.includes("Top") || position.includes("Bottom")) && !position.includes("Over")) top = position.includes("Top") ? top + offsetY : top - offsetY;
		}
		let cssArrowOffsetX;
		let cssArrowOffsetY;
		if (showArrow) {
			if ([
				"top",
				"bottom",
				"left",
				"right"
			].includes(position)) {
				if (arrowPointAtCenter) {
					if ((position === "top" || position === "bottom") && wrapperRect.width > 0) {
						const arrowOffsetPercent = (middleX - left) / wrapperRect.width + .5;
						const minOffset = (horizontalArrowWidth / 2 + positionOffsetX) / wrapperRect.width;
						const maxOffset = 1 - minOffset;
						const clampedOffset = Math.max(minOffset, Math.min(maxOffset, arrowOffsetPercent));
						if (Math.abs(clampedOffset - .5) > .01) cssArrowOffsetX = `${clampedOffset * 100}%`;
					}
					if ((position === "left" || position === "right") && wrapperRect.height > 0) {
						const arrowOffsetPercent = (middleY - top) / wrapperRect.height + .5;
						const minOffset = (verticalArrowHeight / 2 + positionOffsetY) / wrapperRect.height;
						const maxOffset = 1 - minOffset;
						const clampedOffset = Math.max(minOffset, Math.min(maxOffset, arrowOffsetPercent));
						if (Math.abs(clampedOffset - .5) > .01) cssArrowOffsetY = `${clampedOffset * 100}%`;
					}
				} else {
					if ((position === "top" || position === "bottom") && wrapperRect.width > 0) {
						const offsetXWithArrow = positionOffsetX + horizontalArrowWidth / 2;
						if (isTriggerNearLeft) cssArrowOffsetX = `${offsetXWithArrow / wrapperRect.width * 100}%`;
						else cssArrowOffsetX = `${(wrapperRect.width - offsetXWithArrow) / wrapperRect.width * 100}%`;
					}
					if ((position === "left" || position === "right") && wrapperRect.height > 0) {
						const offsetYWithArrow = positionOffsetY + verticalArrowHeight / 2;
						if (isTriggerNearTop) cssArrowOffsetY = `${offsetYWithArrow / wrapperRect.height * 100}%`;
						else cssArrowOffsetY = `${(wrapperRect.height - offsetYWithArrow) / wrapperRect.height * 100}%`;
					}
				}
			}
		}
		const style = {
			left: this._roundPixel(left),
			top: this._roundPixel(top)
		};
		if (cssArrowOffsetX) style["--semi-tooltip-arrow-offset-x"] = cssArrowOffsetX;
		if (cssArrowOffsetY) style["--semi-tooltip-arrow-offset-y"] = cssArrowOffsetY;
		let transform = "";
		if (translateX != null) {
			transform += `translateX(${translateX * 100}%) `;
			Object.defineProperty(style, "translateX", {
				enumerable: false,
				value: translateX
			});
		}
		if (translateY != null) {
			transform += `translateY(${translateY * 100}%) `;
			Object.defineProperty(style, "translateY", {
				enumerable: false,
				value: translateY
			});
		}
		if (transformOrigin != null) style.transformOrigin = transformOrigin;
		if (transform) style.transform = transform;
		return style;
	}
	isLR() {
		let position = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
		return position.includes("left") || position.includes("right");
	}
	isTB() {
		let position = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
		return position.includes("top") || position.includes("bottom");
	}
	isReverse(rowSpace, reverseSpace, size) {
		return rowSpace < size && reverseSpace > size;
	}
	isOverFlow(rowSpace, reverseSpace, size) {
		return rowSpace < size && reverseSpace < size;
	}
	isHalfOverFlow(posSpace, negSpace, size) {
		return posSpace < size || negSpace < size;
	}
	isHalfAllEnough(posSpace, negSpace, size) {
		return posSpace >= size || negSpace >= size;
	}
	getReverse(viewOverFlow, containerOverFlow, shouldReverseView, shouldReverseContainer) {
		/**
		* 基于视口和容器一起判断，以下几种情况允许从原方向转到反方向，以判断是否应该由top->bottom为例子
		*
		* 1. 视口上下空间不足 且 容器上空间❌下空间✅
		* 2. 视口上空间❌下空间✅
		*
		* Based on the judgment of the viewport and the container, the following situations are allowed to turn from the original direction to the opposite direction
		* to judge whether it should be top->bottom as an example
		* 1. There is insufficient space above and below the viewport and the space above the container ❌ the space below ✅
		* 2. The space above the viewport ❌ the space below ✅ and the space above and below the container is insufficient
		* 3. Viewport upper space ❌ lower space✅ and container upper space ❌ lower space✅
		*/
		return viewOverFlow && shouldReverseContainer || shouldReverseView;
	}
	adjustPosIfNeed(position, style, triggerRect, wrapperRect, containerRect) {
		const { innerWidth, innerHeight } = window;
		const { margin } = this.getProps();
		const marginLeft = typeof margin === "number" ? margin : margin.marginLeft;
		const marginTop = typeof margin === "number" ? margin : margin.marginTop;
		const marginRight = typeof margin === "number" ? margin : margin.marginRight;
		const marginBottom = typeof margin === "number" ? margin : margin.marginBottom;
		let isHeightOverFlow = false;
		let isWidthOverFlow = false;
		const raw_spacing = this.getProp("spacing");
		let spacing = raw_spacing;
		let ano_spacing = 0;
		if (typeof raw_spacing !== "number") {
			const isTopOrBottom = position.includes("top") || position.includes("bottom");
			spacing = isTopOrBottom ? raw_spacing.y : raw_spacing.x;
			ano_spacing = isTopOrBottom ? raw_spacing.x : raw_spacing.y;
		}
		if (wrapperRect.width > 0 && wrapperRect.height > 0) {
			const clientLeft = triggerRect.left;
			const clientRight = triggerRect.right;
			const clientTop = triggerRect.top;
			const clientBottom = triggerRect.bottom;
			const restClientLeft = innerWidth - clientLeft;
			const restClientTop = innerHeight - clientTop;
			const restClientRight = innerWidth - clientRight;
			const restClientBottom = innerHeight - clientBottom;
			const widthIsBigger = wrapperRect.width > triggerRect.width;
			const heightIsBigger = wrapperRect.height > triggerRect.height;
			const shouldViewReverseTop = clientTop - marginTop < wrapperRect.height + spacing && restClientBottom - marginBottom > wrapperRect.height + spacing;
			const shouldViewReverseLeft = clientLeft - marginLeft < wrapperRect.width + spacing && restClientRight - marginRight > wrapperRect.width + spacing;
			const shouldViewReverseBottom = restClientBottom - marginBottom < wrapperRect.height + spacing && clientTop - marginTop > wrapperRect.height + spacing;
			const shouldViewReverseRight = restClientRight - marginRight < wrapperRect.width + spacing && clientLeft - marginLeft > wrapperRect.width + spacing;
			restClientTop - marginBottom < wrapperRect.height + spacing && (clientBottom - marginTop, wrapperRect.height + spacing);
			clientBottom - marginTop < wrapperRect.height + spacing && (restClientTop - marginBottom, wrapperRect.height + spacing);
			const shouldViewReverseTopSide = restClientTop < wrapperRect.height + ano_spacing && clientBottom > wrapperRect.height + ano_spacing;
			const shouldViewReverseBottomSide = clientBottom < wrapperRect.height + ano_spacing && restClientTop > wrapperRect.height + ano_spacing;
			const shouldViewReverseLeftSide = restClientLeft < wrapperRect.width + ano_spacing && clientRight > wrapperRect.width + ano_spacing;
			const shouldViewReverseRightSide = clientRight < wrapperRect.width + ano_spacing && restClientLeft > wrapperRect.width + ano_spacing;
			const shouldReverseTopOver = restClientTop < wrapperRect.height + spacing && clientBottom > wrapperRect.height + spacing;
			const shouldReverseBottomOver = clientBottom < wrapperRect.height + spacing && restClientTop > wrapperRect.height + spacing;
			const shouldReverseLeftOver = restClientLeft < wrapperRect.width && clientRight > wrapperRect.width;
			const shouldReverseRightOver = clientRight < wrapperRect.width && restClientLeft > wrapperRect.width;
			const clientTopInContainer = clientTop - containerRect.top;
			const clientLeftInContainer = clientLeft - containerRect.left;
			const clientBottomInContainer = clientTopInContainer + triggerRect.height;
			const clientRightInContainer = clientLeftInContainer + triggerRect.width;
			const restClientBottomInContainer = containerRect.bottom - clientBottom;
			const restClientRightInContainer = containerRect.right - clientRight;
			const restClientTopInContainer = restClientBottomInContainer + triggerRect.height;
			const restClientLeftInContainer = restClientRightInContainer + triggerRect.width;
			const shouldContainerReverseTop = this.isReverse(clientTopInContainer - marginTop, restClientBottomInContainer - marginBottom, wrapperRect.height + spacing);
			const shouldContainerReverseLeft = this.isReverse(clientLeftInContainer - marginLeft, restClientRightInContainer - marginRight, wrapperRect.width + spacing);
			const shouldContainerReverseBottom = this.isReverse(restClientBottomInContainer - marginBottom, clientTopInContainer - marginTop, wrapperRect.height + spacing);
			const shouldContainerReverseRight = this.isReverse(restClientRightInContainer - marginRight, clientLeftInContainer - marginLeft, wrapperRect.width + spacing);
			this.isReverse(restClientTopInContainer - marginBottom, clientBottomInContainer - marginTop, wrapperRect.height + spacing);
			this.isReverse(clientBottomInContainer - marginTop, restClientTopInContainer - marginBottom, wrapperRect.height + spacing);
			const shouldContainerReverseTopSide = this.isReverse(restClientTopInContainer, clientBottomInContainer, wrapperRect.height + ano_spacing);
			const shouldContainerReverseBottomSide = this.isReverse(clientBottomInContainer, restClientTopInContainer, wrapperRect.height + ano_spacing);
			const shouldContainerReverseLeftSide = this.isReverse(restClientLeftInContainer, clientRightInContainer, wrapperRect.width + ano_spacing);
			const shouldContainerReverseRightSide = this.isReverse(clientRightInContainer, restClientLeftInContainer, wrapperRect.width + ano_spacing);
			const halfHeight = triggerRect.height / 2;
			const halfWidth = triggerRect.width / 2;
			const isViewYOverFlow = this.isOverFlow(clientTop - marginTop, restClientBottom - marginBottom, wrapperRect.height + spacing);
			const isViewXOverFlow = this.isOverFlow(clientLeft - marginLeft, restClientRight - marginRight, wrapperRect.width + spacing);
			const isViewYOverFlowSide = this.isOverFlow(clientBottom - marginTop, restClientTop - marginBottom, wrapperRect.height + spacing);
			const isViewXOverFlowSide = this.isOverFlow(clientRight - marginLeft, restClientLeft - marginRight, wrapperRect.width + spacing);
			const isViewYOverFlowSideHalf = this.isHalfOverFlow(clientBottom - halfHeight, restClientTop - halfHeight, (wrapperRect.height + ano_spacing) / 2);
			const isViewXOverFlowSideHalf = this.isHalfOverFlow(clientRight - halfWidth, restClientLeft - halfWidth, (wrapperRect.width + ano_spacing) / 2);
			const isViewYEnoughSideHalf = this.isHalfAllEnough(clientBottom - halfHeight, restClientTop - halfHeight, (wrapperRect.height + ano_spacing) / 2);
			const isViewXEnoughSideHalf = this.isHalfAllEnough(clientRight - halfWidth, restClientLeft - halfWidth, (wrapperRect.width + ano_spacing) / 2);
			const isContainerYOverFlow = this.isOverFlow(clientTopInContainer - marginTop, restClientBottomInContainer - marginBottom, wrapperRect.height + spacing);
			const isContainerXOverFlow = this.isOverFlow(clientLeftInContainer - marginLeft, restClientRightInContainer - marginRight, wrapperRect.width + spacing);
			const isContainerYOverFlowSide = this.isOverFlow(clientBottomInContainer - marginTop, restClientTopInContainer - marginBottom, wrapperRect.height + spacing);
			const isContainerXOverFlowSide = this.isOverFlow(clientRightInContainer - marginLeft, restClientLeftInContainer - marginRight, wrapperRect.width + spacing);
			const isContainerYOverFlowSideHalf = this.isHalfOverFlow(clientBottomInContainer - halfHeight, restClientTopInContainer - halfHeight, (wrapperRect.height + ano_spacing) / 2);
			const isContainerXOverFlowSideHalf = this.isHalfOverFlow(clientRightInContainer - halfWidth, restClientLeftInContainer - halfWidth, (wrapperRect.width + ano_spacing) / 2);
			const isContainerYEnoughSideHalf = this.isHalfAllEnough(clientBottomInContainer - halfHeight, restClientTopInContainer - halfHeight, (wrapperRect.height + ano_spacing) / 2);
			const isContainerXEnoughSideHalf = this.isHalfAllEnough(clientRightInContainer - halfWidth, restClientLeftInContainer - halfWidth, (wrapperRect.width + ano_spacing) / 2);
			const shouldReverseTop = this.getReverse(isViewYOverFlow, isContainerYOverFlow, shouldViewReverseTop, shouldContainerReverseTop);
			const shouldReverseLeft = this.getReverse(isViewXOverFlow, isContainerXOverFlow, shouldViewReverseLeft, shouldContainerReverseLeft);
			const shouldReverseBottom = this.getReverse(isViewYOverFlow, isContainerYOverFlow, shouldViewReverseBottom, shouldContainerReverseBottom);
			const shouldReverseRight = this.getReverse(isViewXOverFlow, isContainerXOverFlow, shouldViewReverseRight, shouldContainerReverseRight);
			const shouldReverseTopSide = this.getReverse(isViewYOverFlowSide, isContainerYOverFlowSide, shouldViewReverseTopSide, shouldContainerReverseTopSide);
			const shouldReverseBottomSide = this.getReverse(isViewYOverFlowSide, isContainerYOverFlowSide, shouldViewReverseBottomSide, shouldContainerReverseBottomSide);
			const shouldReverseLeftSide = this.getReverse(isViewXOverFlowSide, isContainerXOverFlowSide, shouldViewReverseLeftSide, shouldContainerReverseLeftSide);
			const shouldReverseRightSide = this.getReverse(isViewXOverFlowSide, isContainerXOverFlowSide, shouldViewReverseRightSide, shouldContainerReverseRightSide);
			const isYOverFlowSideHalf = isViewYOverFlowSideHalf && isContainerYOverFlowSideHalf;
			const isXOverFlowSideHalf = isViewXOverFlowSideHalf && isContainerXOverFlowSideHalf;
			switch (position) {
				case "top":
					if (shouldReverseTop) position = this._adjustPos(position, true);
					if (isXOverFlowSideHalf && (shouldReverseLeftSide || shouldReverseRightSide)) position = this._adjustPos(position, true, "expand", shouldReverseLeftSide ? "Right" : "Left");
					break;
				case "topLeft":
					if (shouldReverseTop) position = this._adjustPos(position, true);
					if (shouldReverseLeftSide && widthIsBigger) position = this._adjustPos(position);
					if (isWidthOverFlow && (isViewXEnoughSideHalf || isContainerXEnoughSideHalf)) position = this._adjustPos(position, true, "reduce");
					break;
				case "topRight":
					if (shouldReverseTop) position = this._adjustPos(position, true);
					if (shouldReverseRightSide && widthIsBigger) position = this._adjustPos(position);
					if (isWidthOverFlow && (isViewXEnoughSideHalf || isContainerXEnoughSideHalf)) position = this._adjustPos(position, true, "reduce");
					break;
				case "left":
					if (shouldReverseLeft) position = this._adjustPos(position);
					if (isYOverFlowSideHalf && (shouldReverseTopSide || shouldReverseBottomSide)) position = this._adjustPos(position, false, "expand", shouldReverseTopSide ? "Bottom" : "Top");
					break;
				case "leftTop":
					if (shouldReverseLeft) position = this._adjustPos(position);
					if (shouldReverseTopSide && heightIsBigger) position = this._adjustPos(position, true);
					if (isHeightOverFlow && (isViewYEnoughSideHalf || isContainerYEnoughSideHalf)) position = this._adjustPos(position, false, "reduce");
					break;
				case "leftBottom":
					if (shouldReverseLeft) position = this._adjustPos(position);
					if (shouldReverseBottomSide && heightIsBigger) position = this._adjustPos(position, true);
					if (isHeightOverFlow && (isViewYEnoughSideHalf || isContainerYEnoughSideHalf)) position = this._adjustPos(position, false, "reduce");
					break;
				case "bottom":
					if (shouldReverseBottom) position = this._adjustPos(position, true);
					if (isXOverFlowSideHalf && (shouldReverseLeftSide || shouldReverseRightSide)) position = this._adjustPos(position, true, "expand", shouldReverseLeftSide ? "Right" : "Left");
					break;
				case "bottomLeft":
					if (shouldReverseBottom) position = this._adjustPos(position, true);
					if (shouldReverseLeftSide && widthIsBigger) position = this._adjustPos(position);
					if (isWidthOverFlow && (isViewXEnoughSideHalf || isContainerXEnoughSideHalf)) position = this._adjustPos(position, true, "reduce");
					break;
				case "bottomRight":
					if (shouldReverseBottom) position = this._adjustPos(position, true);
					if (shouldReverseRightSide && widthIsBigger) position = this._adjustPos(position);
					if (isWidthOverFlow && (isViewXEnoughSideHalf || isContainerXEnoughSideHalf)) position = this._adjustPos(position, true, "reduce");
					break;
				case "right":
					if (shouldReverseRight) position = this._adjustPos(position);
					if (isYOverFlowSideHalf && (shouldReverseTopSide || shouldReverseBottomSide)) position = this._adjustPos(position, false, "expand", shouldReverseTopSide ? "Bottom" : "Top");
					break;
				case "rightTop":
					if (shouldReverseRight) position = this._adjustPos(position);
					if (shouldReverseTopSide && heightIsBigger) position = this._adjustPos(position, true);
					if (isHeightOverFlow && (isViewYEnoughSideHalf || isContainerYEnoughSideHalf)) position = this._adjustPos(position, false, "reduce");
					break;
				case "rightBottom":
					if (shouldReverseRight) position = this._adjustPos(position);
					if (shouldReverseBottomSide && heightIsBigger) position = this._adjustPos(position, true);
					if (isHeightOverFlow && (isViewYEnoughSideHalf || isContainerYEnoughSideHalf)) position = this._adjustPos(position, false, "reduce");
					break;
				case "leftTopOver":
					if (shouldReverseTopOver) position = this._adjustPos(position, true);
					if (shouldReverseLeftOver) position = this._adjustPos(position);
					break;
				case "leftBottomOver":
					if (shouldReverseBottomOver) position = this._adjustPos(position, true);
					if (shouldReverseLeftOver) position = this._adjustPos(position);
					break;
				case "rightTopOver":
					if (shouldReverseTopOver) position = this._adjustPos(position, true);
					if (shouldReverseRightOver) position = this._adjustPos(position);
					break;
				case "rightBottomOver":
					if (shouldReverseBottomOver) position = this._adjustPos(position, true);
					if (shouldReverseRightOver) position = this._adjustPos(position);
			}
			if (this.isTB(position)) {
				isHeightOverFlow = isViewYOverFlow && isContainerYOverFlow;
				if (position === "top" || position === "bottom") isWidthOverFlow = isViewXOverFlowSideHalf && isContainerXOverFlowSideHalf || clientRight < 0 || restClientRight < 0;
				else isWidthOverFlow = isViewXOverFlowSide && isContainerXOverFlowSide || clientRight < 0 || restClientRight < 0;
			}
			if (this.isLR(position)) {
				isWidthOverFlow = isViewXOverFlow && isContainerXOverFlow;
				if (position === "left" || position === "right") isHeightOverFlow = isViewYOverFlowSideHalf && isContainerYOverFlowSideHalf || clientTop < 0 || restClientTop < 0;
				else isHeightOverFlow = isViewYOverFlowSide && isContainerYOverFlowSide || clientTop < 0 || restClientTop < 0;
			}
		}
		return {
			position,
			isHeightOverFlow,
			isWidthOverFlow
		};
	}
	_bindScrollEvent() {
		this._adapter.registerScrollHandler(() => this.calcPosition());
	}
	unBindScrollEvent() {
		this._adapter.unregisterScrollHandler();
	}
	_initContainerPosition() {
		if (this._adapter.getContainerPosition() || !this._adapter.containerIsBody()) return;
		this._adapter.updateContainerPosition();
	}
	_handleTriggerKeydown(event) {
		const { closeOnEsc, disableArrowKeyDown } = this.getProps();
		const container = this._adapter.getContainer();
		const focusableElements = this._adapter.getFocusableElements(container);
		const focusableNum = focusableElements.length;
		switch (event && event.key) {
			case "Escape":
				handlePrevent(event);
				closeOnEsc && this._handleEscKeyDown(event);
				break;
			case "ArrowUp":
				!disableArrowKeyDown && focusableNum && this._handleTriggerArrowUpKeydown(focusableElements, event);
				break;
			case "ArrowDown": !disableArrowKeyDown && focusableNum && this._handleTriggerArrowDownKeydown(focusableElements, event);
		}
	}
	/**
	* focus trigger
	*
	* when trigger is 'focus' or 'hover', onFocus is bind to show popup
	* if we focus trigger, popup will show again
	*
	* 如果 trigger 是 focus 或者 hover，则它绑定了 onFocus，这里我们如果重新 focus 的话，popup 会再次打开
	* 因此 returnFocusOnClose 只支持 click trigger
	*/
	focusTrigger() {
		const { trigger, returnFocusOnClose, preventScroll } = this.getProps();
		if (returnFocusOnClose && trigger !== "custom") {
			const triggerNode = this._adapter.getTriggerNode();
			if (triggerNode && "focus" in triggerNode) triggerNode.focus({ preventScroll });
		}
	}
	_handleEscKeyDown(event) {
		const { trigger } = this.getProps();
		if (trigger !== "custom") {
			this.focusTrigger();
			this.hide();
		}
		this._adapter.notifyEscKeydown(event);
	}
	_handleContainerTabKeyDown(focusableElements, event) {
		const { preventScroll } = this.getProps();
		const activeElement = this._adapter.getActiveElement();
		if (focusableElements[focusableElements.length - 1] === activeElement) {
			focusableElements[0].focus({ preventScroll });
			event.preventDefault();
		}
	}
	_handleContainerShiftTabKeyDown(focusableElements, event) {
		const { preventScroll } = this.getProps();
		const activeElement = this._adapter.getActiveElement();
		if (focusableElements[0] === activeElement) {
			focusableElements[focusableElements.length - 1].focus({ preventScroll });
			event.preventDefault();
		}
	}
	_handleTriggerArrowDownKeydown(focusableElements, event) {
		const { preventScroll } = this.getProps();
		focusableElements[0].focus({ preventScroll });
		event.preventDefault();
	}
	_handleTriggerArrowUpKeydown(focusableElements, event) {
		const { preventScroll } = this.getProps();
		focusableElements[focusableElements.length - 1].focus({ preventScroll });
		event.preventDefault();
	}
};
//#endregion
//#region node_modules/@douyinfe/semi-foundation/lib/es/tooltip/constants.js
var cssClasses$3 = { PREFIX: `${BASE_CLASS_PREFIX$1}-tooltip` };
var strings$3 = {
	POSITION_SET: [
		"top",
		"topLeft",
		"topRight",
		"left",
		"leftTop",
		"leftBottom",
		"right",
		"rightTop",
		"rightBottom",
		"bottom",
		"bottomLeft",
		"bottomRight",
		"leftTopOver",
		"rightTopOver",
		"leftBottomOver",
		"rightBottomOver"
	],
	TRIGGER_SET: [
		"hover",
		"focus",
		"click",
		"custom",
		"contextMenu"
	],
	STATUS_DISABLED: "disabled",
	STATUS_LOADING: "loading"
};
var numbers$1 = {
	ARROW_BOUNDING: {
		offsetX: 0,
		offsetY: 2,
		width: 24,
		height: 7
	},
	DEFAULT_Z_INDEX: 1060,
	MOUSE_ENTER_DELAY: 50,
	MOUSE_LEAVE_DELAY: 50,
	SPACING: 8,
	MARGIN: 0
};
//#endregion
//#region node_modules/@douyinfe/semi-foundation/lib/es/utils/uuid.js
function getUuid(prefix) {
	return `${prefix}-${(/* @__PURE__ */ new Date()).getTime()}-${Math.random()}`;
}
function getUuidv4() {
	var _a, _b;
	try {
		return (_b = (_a = crypto === null || crypto === void 0 ? void 0 : crypto.randomUUID) === null || _a === void 0 ? void 0 : _a.call(crypto)) !== null && _b !== void 0 ? _b : String(-99990013e3).replace(/[018]/g, (c) => (Number(c) ^ crypto.getRandomValues(/* @__PURE__ */ new Uint8Array(1))[0] & 15 >> Number(c) / 4).toString(16));
	} catch (err) {
		return getUuid("semi");
	}
}
/**
* Get a random id with prefix, it not strictly guarantee id uniqueness
*
* Note: the return value of getUuid is too long, we need a short one
*
* @example
* getUuidShort({ prefix: 'semi' }) => 'semi-46dinzc'
* getUuidShort({ prefix: '' }) => '0eer2i0'
* getUuidShort({ prefix: 'semi', length: 4 }) => 'semi-8jts'
*/
function getUuidShort$1() {
	const { prefix = "", length = 7 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
	const characters = "0123456789abcdefghijklmnopqrstuvwxyz";
	const total = 36;
	let randomId = "";
	for (let i = 0; i < length; i++) {
		const random = Math.floor(Math.random() * total);
		randomId += characters.charAt(random);
	}
	return prefix ? `${prefix}-${randomId}` : randomId;
}
//#endregion
//#region node_modules/@douyinfe/semi-ui/lib/es/_utils/reactRender.js
var fullClone = Object.assign({}, ReactDOM);
var legacyRender = fullClone.render;
var legacyUnmount = fullClone.unmountComponentAtNode;
var legacyFindDOMNode = fullClone.findDOMNode;
var { version } = ReactDOM;
var mainVersion = Number((version || "").split(".")[0]);
var hasWarnedVersionMismatch = false;
function checkVersionCompatibility() {
	var _a;
	if (hasWarnedVersionMismatch) return;
	if (mainVersion < 18 && typeof ((_a = semi_global_default.config) === null || _a === void 0 ? void 0 : _a.createRoot) === "function") {
		hasWarnedVersionMismatch = true;
		console.warn(`[Semi UI] createRoot was injected but React version is ${version} (< 18). This configuration is unusual and may cause unexpected behavior.`);
	}
}
function toggleWarning(skip) {
	var _a;
	const internals = (_a = fullClone.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) !== null && _a !== void 0 ? _a : fullClone.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	if (internals && typeof internals === "object") internals.usingClientEntryPoint = skip;
}
/**
* Resolve `createRoot` with 3-level fallback:
* 1. semiGlobal.config.createRoot (user injection, required for React 19)
* 2. fullClone.createRoot (auto-discovery from react-dom default export, works in React 18)
* 3. undefined → triggers console.error guiding user to inject
*/
function resolveCreateRoot() {
	var _a;
	if (typeof ((_a = semi_global_default.config) === null || _a === void 0 ? void 0 : _a.createRoot) === "function") return semi_global_default.config.createRoot;
	if (typeof fullClone.createRoot === "function") return fullClone.createRoot;
}
var hasWarnedCreateRoot = false;
function warnCreateRootNotFound() {
	if (hasWarnedCreateRoot) return;
	hasWarnedCreateRoot = true;
	console.error("[Semi UI] createRoot is not available. If you are using React 19, please inject createRoot before using Semi components. For details, see: https://semi.design/zh-CN/ecosystem/react19\n[Semi UI] createRoot 不可用。如果您正在使用 React 19，请在使用 Semi 组件前注入 createRoot。详情请参阅：https://semi.design/zh-CN/ecosystem/react19");
}
var MARK = "__semi_react_root__";
function render(node, container) {
	checkVersionCompatibility();
	const createRoot = resolveCreateRoot();
	if (createRoot) {
		toggleWarning(true);
		const root = container[MARK] || createRoot(container);
		toggleWarning(false);
		root.render(node);
		container[MARK] = root;
	} else if (legacyRender) legacyRender(node, container);
	else warnCreateRootNotFound();
}
function unmount(container) {
	if (container[MARK]) {
		container[MARK].unmount();
		delete container[MARK];
	} else if (legacyUnmount) legacyUnmount(container);
}
/**
* React 19+ fallback for findDOMNode: traverse React Fiber tree downward
* from a class component instance to find the first DOM element.
*
* Uses React internal Fiber structure (_reactInternals). If React changes
* its internals in future versions, this will safely return null without
* throwing errors, falling back to the warning path in resolveDOM.
*/
function findDOMFromFiber(instance) {
	var _a;
	try {
		const fiber = (_a = instance === null || instance === void 0 ? void 0 : instance._reactInternals) !== null && _a !== void 0 ? _a : instance === null || instance === void 0 ? void 0 : instance._reactInternalFiber;
		if (!fiber || typeof fiber !== "object") return null;
		let node = fiber.child;
		let iterations = 0;
		const MAX_ITERATIONS = 50;
		while (node && iterations < MAX_ITERATIONS) {
			iterations++;
			if (node.stateNode instanceof Element) return node.stateNode;
			if (node.child) {
				node = node.child;
				continue;
			}
			while (node && !node.sibling) {
				if (node === fiber) return null;
				node = node.return;
			}
			if (node && node !== fiber) node = node.sibling;
			else break;
		}
	} catch (e) {}
	return null;
}
/**
* React 16/17/18: use ReactDOM.findDOMNode to resolve real DOM from component instance.
* React 19: findDOMNode is removed; traverse Fiber tree to find DOM node.
*
* 注意：findDOMNode 可能返回 Text 节点，但我们只返回 Element 类型以保证类型安全。
*/
function resolveDOM(instance) {
	if (!instance) return null;
	if (instance instanceof Element) return instance;
	if (legacyFindDOMNode) try {
		const node = legacyFindDOMNode(instance);
		if (node instanceof Element) return node;
		return null;
	} catch (e) {
		return null;
	}
	return findDOMFromFiber(instance);
}
/**
* React 16/17/18: ref is a top-level property on the element (element.ref).
* React 19: ref is moved into element.props.ref.
*
* 使用版本检测来确定 ref 的位置，避免在 React 18 中错误地读取 props.ref。
*/
function getRef(element) {
	var _a, _b, _c;
	if (!element) return null;
	if (mainVersion >= 19) return (_b = (_a = element.props) === null || _a === void 0 ? void 0 : _a.ref) !== null && _b !== void 0 ? _b : null;
	return (_c = element.ref) !== null && _c !== void 0 ? _c : null;
}
//#endregion
//#region node_modules/@douyinfe/semi-ui/lib/es/configProvider/context.js
var ConfigContext = /*#__PURE__*/ React.createContext({});
//#endregion
//#region node_modules/@douyinfe/semi-ui/lib/es/_portal/index.js
var defaultGetContainer$1 = () => document.body;
var Portal = class extends PureComponent {
	constructor(props, context) {
		var _this;
		super(props);
		_this = this;
		this.initContainer = function(context) {
			let catchError = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
			var _a, _b;
			try {
				let container = void 0;
				if (!_this.el || !((_a = _this.state) === null || _a === void 0 ? void 0 : _a.container) || !Array.from(_this.state.container.childNodes).includes(_this.el)) {
					if (!_this.el) _this.el = document.createElement("div");
					const portalContainer = (_this.props.getPopupContainer || context.getPopupContainer || defaultGetContainer$1)();
					portalContainer.appendChild(_this.el);
					_this.addStyle(_this.props.style);
					_this.addClass(_this.props.prefixCls, context, _this.props.className);
					container = portalContainer;
					return container;
				}
			} catch (e) {
				if (!catchError) throw e;
			}
			return (_b = _this.state) === null || _b === void 0 ? void 0 : _b.container;
		};
		this.addStyle = function() {
			let style = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
			if (_this.el) for (const key of Object.keys(style)) _this.el.style[key] = style[key];
		};
		this.addClass = function(prefixCls) {
			const { direction } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _this.context;
			for (var _len = arguments.length, classNames = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) classNames[_key - 2] = arguments[_key];
			const cls = (0, import_classnames.default)(prefixCls, ...classNames, { [`${prefixCls}-rtl`]: direction === "rtl" });
			if (_this.el) _this.el.className = cls;
		};
		this.state = { container: this.initContainer(context, true) };
	}
	componentDidMount() {
		const container = this.initContainer(this.context);
		if (container !== this.state.container) this.setState({ container });
	}
	componentDidUpdate(prevProps) {
		const { didUpdate } = this.props;
		if (didUpdate) didUpdate(prevProps);
	}
	componentWillUnmount() {
		const { container } = this.state;
		if (container) container.removeChild(this.el);
	}
	render() {
		const { state, props } = this;
		if (state.container) return /*#__PURE__*/ createPortal(props.children, this.el);
		return null;
	}
};
Portal.contextType = ConfigContext;
Portal.defaultProps = { prefixCls: `${BASE_CLASS_PREFIX$1}-portal` };
Portal.propTypes = {
	children: import_prop_types.default.node,
	prefixCls: import_prop_types.default.string,
	getPopupContainer: import_prop_types.default.func,
	className: import_prop_types.default.string,
	didUpdate: import_prop_types.default.func
};
//#endregion
//#region node_modules/@douyinfe/semi-ui/lib/es/tooltip/TriangleArrow.js
var __rest$11 = function(s, e) {
	var t = {};
	for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	if (s != null && typeof Object.getOwnPropertySymbols === "function") {
		for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	}
	return t;
};
var TriangleArrow = (props) => {
	const { className, style } = props, restProps = __rest$11(props, ["className", "style"]);
	return /*#__PURE__*/ React.createElement("svg", Object.assign({
		"aria-hidden": true,
		className,
		style
	}, restProps, {
		width: "24",
		height: "7",
		viewBox: "0 0 24 7",
		fill: "currentColor",
		xmlns: "http://www.w3.org/2000/svg"
	}), /*#__PURE__*/ React.createElement("path", { d: "M24 0V1C20 1 18.5 2 16.5 4C14.5 6 14 7 12 7C10 7 9.5 6 7.5 4C5.5 2 4 1 0 1V0H24Z" }));
};
//#endregion
//#region node_modules/@douyinfe/semi-ui/lib/es/tooltip/TriangleArrowVertical.js
var __rest$10 = function(s, e) {
	var t = {};
	for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	if (s != null && typeof Object.getOwnPropertySymbols === "function") {
		for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	}
	return t;
};
var TriangleArrowVertical = (props) => {
	const { className, style } = props, restProps = __rest$10(props, ["className", "style"]);
	return /*#__PURE__*/ React.createElement("svg", Object.assign({
		"aria-hidden": true,
		className,
		style
	}, restProps, {
		width: "7",
		height: "24",
		xmlns: "http://www.w3.org/2000/svg",
		fill: "currentColor"
	}), /*#__PURE__*/ React.createElement("path", { d: "M0 0L1 0C1 4, 2 5.5, 4 7.5S7,10 7,12S6 14.5, 4 16.5S1,20 1,24L0 24L0 0z" }));
};
//#endregion
//#region node_modules/@douyinfe/semi-ui/lib/es/tooltip/ArrowBoundingShape.js
var ArrowBoundingShape_default = import_prop_types.default.shape({
	offsetX: import_prop_types.default.number,
	offsetY: import_prop_types.default.number,
	width: import_prop_types.default.number,
	height: import_prop_types.default.number
});
//#endregion
//#region node_modules/@douyinfe/semi-ui/lib/es/_cssAnimation/index.js
var CSSAnimation = class extends React.Component {
	constructor(props) {
		super(props);
		this.handleAnimationStart = () => {
			var _a, _b;
			(_b = (_a = this.props).onAnimationStart) === null || _b === void 0 || _b.call(_a);
		};
		this.handleAnimationEnd = () => {
			this.setState({
				currentClassName: this.props.endClassName,
				extraStyle: { animationFillMode: this.props.fillMode },
				isAnimating: false
			}, () => {
				var _a, _b;
				(_b = (_a = this.props).onAnimationEnd) === null || _b === void 0 || _b.call(_a, false);
			});
		};
		this.state = {
			currentClassName: this.props.startClassName,
			extraStyle: { animationFillMode: this.props.fillMode },
			isAnimating: true
		};
	}
	componentDidMount() {
		var _a, _b, _c, _d;
		(_b = (_a = this.props).onAnimationStart) === null || _b === void 0 || _b.call(_a);
		if (!this.props.motion) {
			(_d = (_c = this.props).onAnimationEnd) === null || _d === void 0 || _d.call(_c, false);
			this.setState({ isAnimating: false });
		}
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		const changedKeys = Object.keys(this.props).filter((key) => !(0, import_isEqual.default)(this.props[key], prevProps[key]));
		if (changedKeys.includes("animationState")) {}
		if (changedKeys.includes("startClassName") || changedKeys.includes("replayKey") || changedKeys.includes("motion")) this.setState({
			currentClassName: this.props.startClassName,
			extraStyle: { animationFillMode: this.props.fillMode },
			isAnimating: true
		}, () => {
			var _a, _b, _c, _d;
			(_b = (_a = this.props).onAnimationStart) === null || _b === void 0 || _b.call(_a);
			if (!this.props.motion) {
				(_d = (_c = this.props).onAnimationEnd) === null || _d === void 0 || _d.call(_c, this.state.isAnimating);
				this.setState({ isAnimating: false });
			}
		});
	}
	render() {
		var _a;
		if (this.props.motion) return this.props.children({
			animationClassName: (_a = this.state.currentClassName) !== null && _a !== void 0 ? _a : "",
			animationStyle: this.state.extraStyle,
			animationEventsNeedBind: {
				onAnimationStart: this.handleAnimationStart,
				onAnimationEnd: this.handleAnimationEnd
			},
			isAnimating: this.state.isAnimating
		});
		else return this.props.children({
			animationClassName: "",
			animationStyle: {},
			animationEventsNeedBind: {},
			isAnimating: this.state.isAnimating
		});
	}
};
CSSAnimation.defaultProps = {
	motion: true,
	replayKey: ""
};
//#endregion
//#region node_modules/@douyinfe/semi-ui/lib/es/tooltip/index.js
var __rest$9 = function(s, e) {
	var t = {};
	for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	if (s != null && typeof Object.getOwnPropertySymbols === "function") {
		for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	}
	return t;
};
var prefix = cssClasses$3.PREFIX;
var positionSet$1 = strings$3.POSITION_SET;
var triggerSet$1 = strings$3.TRIGGER_SET;
var blockDisplays = [
	"flex",
	"block",
	"table",
	"flow-root",
	"grid"
];
var defaultGetContainer = () => document.body;
var Tooltip = class extends BaseComponent {
	constructor(props) {
		super(props);
		this.isAnimating = false;
		this.cachedLatestTransitionState = "enter";
		this.setContainerEl = (node) => this.containerEl = { current: node };
		this.disconnectPopupResizeObserver = () => {
			var _a;
			clearTimeout(this.popupResizeTimer);
			(_a = this.popupResizeObserver) === null || _a === void 0 || _a.disconnect();
			this.popupResizeObserver = null;
		};
		this.isSpecial = (elem) => {
			if (isElement(elem)) return Boolean(elem.disabled);
			else if (/*#__PURE__*/ isValidElement(elem)) {
				if ((0, import_get.default)(elem, "props.disabled")) return strings$3.STATUS_DISABLED;
				const loading = (0, import_get.default)(elem, "props.loading");
				const isButton = !(0, import_isEmpty.default)(elem) && !(0, import_isEmpty.default)(elem.type) && ((0, import_get.default)(elem, "type.elementType") === "Button" || (0, import_get.default)(elem, "type.elementType") === "IconButton");
				if (loading && isButton) return strings$3.STATUS_LOADING;
			}
			return false;
		};
		this.didLeave = () => {
			this.disconnectPopupResizeObserver();
			if (this.props.keepDOM) this.foundation.setDisplayNone(true);
			else this.foundation.removePortal();
			this.foundation.unBindEvent();
		};
		this.renderIcon = () => {
			const { placement } = this.state;
			const { showArrow, prefixCls, style } = this.props;
			let icon = null;
			const triangleCls = (0, import_classnames.default)([`${prefixCls}-icon-arrow`]);
			const bgColor = (0, import_get.default)(style, "backgroundColor");
			const iconComponent = (placement === null || placement === void 0 ? void 0 : placement.includes("left")) || (placement === null || placement === void 0 ? void 0 : placement.includes("right")) ? /*#__PURE__*/ React.createElement(TriangleArrowVertical, null) : /*#__PURE__*/ React.createElement(TriangleArrow, null);
			if (showArrow) {
				if (/*#__PURE__*/ isValidElement(showArrow)) icon = showArrow;
				else icon = /*#__PURE__*/ React.cloneElement(iconComponent, {
					className: triangleCls,
					style: {
						color: bgColor,
						fill: "currentColor"
					}
				});
			}
			return icon;
		};
		this.handlePortalInnerClick = (e) => {
			if (this.props.clickToHide) this.foundation.hide();
			if (this.props.stopPropagation) stopPropagation(e);
		};
		this.handlePortalMouseDown = (e) => {
			if (this.props.stopPropagation) stopPropagation(e);
		};
		this.handlePortalFocus = (e) => {
			if (this.props.stopPropagation) stopPropagation(e);
		};
		this.handlePortalBlur = (e) => {
			if (this.props.stopPropagation) stopPropagation(e);
		};
		this.handlePortalInnerKeyDown = (e) => {
			this.foundation.handleContainerKeydown(e);
		};
		this.renderContentNode = (content) => {
			const contentProps = { initialFocusRef: this.initialFocusRef };
			return !(0, import_isFunction.default)(content) ? content : content(contentProps);
		};
		this.renderPortal = () => {
			const { containerStyle = {}, visible, portalEventSet, placement, displayNone, transitionState, id, isPositionUpdated } = this.state;
			const { prefixCls, content, showArrow, style, motion, role, zIndex } = this.props;
			const contentNode = this.renderContentNode(content);
			const { className: propClassName } = this.props;
			const direction = this.context.direction;
			const className = (0, import_classnames.default)(propClassName, {
				[`${prefixCls}-wrapper`]: true,
				[`${prefixCls}-wrapper-show`]: visible,
				[`${prefixCls}-with-arrow`]: Boolean(showArrow),
				[`${prefixCls}-rtl`]: direction === "rtl"
			});
			const icon = this.renderIcon();
			const portalInnerStyle = (0, import_omit.default)(containerStyle, motion ? ["transformOrigin"] : void 0);
			const transformOrigin = (0, import_get.default)(containerStyle, "transformOrigin");
			const arrowOffsetX = (0, import_get.default)(containerStyle, "--semi-tooltip-arrow-offset-x");
			const arrowOffsetY = (0, import_get.default)(containerStyle, "--semi-tooltip-arrow-offset-y");
			const wrapperArrowStyle = Object.assign(Object.assign({}, arrowOffsetX ? { "--semi-tooltip-arrow-offset-x": arrowOffsetX } : {}), arrowOffsetY ? { "--semi-tooltip-arrow-offset-y": arrowOffsetY } : {});
			const userOpacity = (0, import_get.default)(style, "opacity", null);
			const opacity = userOpacity ? userOpacity : 1;
			const inner = /*#__PURE__*/ React.createElement(CSSAnimation, {
				fillMode: "forwards",
				animationState: transitionState,
				motion: motion && isPositionUpdated,
				startClassName: transitionState === "enter" ? `${prefix}-animation-show` : `${prefix}-animation-hide`,
				onAnimationStart: () => this.isAnimating = true,
				onAnimationEnd: () => {
					var _a, _b;
					if (transitionState === "leave") {
						this.didLeave();
						(_b = (_a = this.props).afterClose) === null || _b === void 0 || _b.call(_a);
					}
					this.isAnimating = false;
				}
			}, (_ref) => {
				let { animationStyle, animationClassName, animationEventsNeedBind } = _ref;
				return /*#__PURE__*/ React.createElement("div", Object.assign({
					className: (0, import_classnames.default)(className, animationClassName),
					style: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, animationStyle), displayNone ? { display: "none" } : {}), { transformOrigin }), style), wrapperArrowStyle), userOpacity ? { opacity: isPositionUpdated ? opacity : "0" } : {})
				}, portalEventSet, animationEventsNeedBind, {
					role,
					"x-placement": placement,
					id
				}), /*#__PURE__*/ React.createElement("div", { className: `${prefix}-content` }, contentNode), icon);
			});
			return /*#__PURE__*/ React.createElement(Portal, {
				getPopupContainer: this.props.getPopupContainer,
				style: { zIndex }
			}, /*#__PURE__*/ React.createElement("div", {
				tabIndex: -1,
				className: `${BASE_CLASS_PREFIX$1}-portal-inner`,
				style: portalInnerStyle,
				ref: this.setContainerEl,
				onClick: this.handlePortalInnerClick,
				onFocus: this.handlePortalFocus,
				onBlur: this.handlePortalBlur,
				onMouseDown: this.handlePortalMouseDown,
				onKeyDown: this.handlePortalInnerKeyDown
			}, inner));
		};
		this.wrapSpan = (elem) => {
			const { wrapperClassName } = this.props;
			const display = (0, import_get.default)(elem, "props.style.display");
			const block = (0, import_get.default)(elem, "props.block");
			const isStringElem = typeof elem == "string";
			const style = {};
			if (!isStringElem) style.display = "inline-block";
			if (block || blockDisplays.includes(display)) style.width = "100%";
			return /*#__PURE__*/ React.createElement("span", {
				className: wrapperClassName,
				style
			}, elem);
		};
		this.mergeEvents = (rawEvents, events) => {
			const mergedEvents = {};
			(0, import_each.default)(events, (handler, key) => {
				if (typeof handler === "function") mergedEvents[key] = function() {
					handler(...arguments);
					if (rawEvents && typeof rawEvents[key] === "function") rawEvents[key](...arguments);
				};
			});
			return mergedEvents;
		};
		this.getPopupId = () => {
			return this.state.id;
		};
		this.state = {
			visible: false,
			/**
			*
			* Note: The transitionState parameter is equivalent to isInsert
			*/
			transitionState: "",
			triggerEventSet: {},
			portalEventSet: {},
			containerStyle: {},
			isInsert: false,
			placement: props.position || "top",
			transitionStyle: {},
			isPositionUpdated: false,
			id: props.wrapperId,
			displayNone: false
		};
		this.foundation = new Tooltip$1(this.adapter);
		this.eventManager = new Event();
		this.triggerEl = /*#__PURE__*/ React.createRef();
		this.containerEl = /*#__PURE__*/ React.createRef();
		this.initialFocusRef = /*#__PURE__*/ React.createRef();
		this.clickOutsideHandler = null;
		this.resizeHandler = null;
		this.isWrapped = false;
		this.containerPosition = void 0;
	}
	get adapter() {
		var _this = this;
		return Object.assign(Object.assign({}, super.adapter), {
			on: function() {
				return _this.eventManager.on(...arguments);
			},
			off: function() {
				return _this.eventManager.off(...arguments);
			},
			getAnimatingState: () => this.isAnimating,
			insertPortal: (content, _a) => {
				var { position } = _a, containerStyle = __rest$9(_a, ["position"]);
				this.cachedLatestTransitionState = "enter";
				this.disconnectPopupResizeObserver();
				this.setState({
					isInsert: true,
					transitionState: "enter",
					containerStyle: Object.assign(Object.assign({}, this.state.containerStyle), containerStyle),
					isPositionUpdated: false
				}, () => {
					var _a;
					const emit = () => {
						if (this.cachedLatestTransitionState === "enter") this.eventManager.emit("portalInserted");
					};
					const el = (_a = this.containerEl) === null || _a === void 0 ? void 0 : _a.current;
					if (el && typeof ResizeObserver !== "undefined") {
						let emitted = false;
						let lastWidth = el.offsetWidth;
						let lastHeight = el.offsetHeight;
						const emitOnce = () => {
							if (!emitted) {
								emitted = true;
								emit();
							}
						};
						const ro = new ResizeObserver(() => {
							const width = el.offsetWidth;
							const height = el.offsetHeight;
							if (width <= 0 || height <= 0) return;
							const sizeChanged = width !== lastWidth || height !== lastHeight;
							lastWidth = width;
							lastHeight = height;
							if (!emitted) emitOnce();
							else if (sizeChanged && this.cachedLatestTransitionState === "enter") {
								clearTimeout(this.popupResizeTimer);
								this.popupResizeTimer = setTimeout(() => {
									if (this.cachedLatestTransitionState === "enter") this.foundation.calcPosition();
								}, 0);
							}
						});
						this.popupResizeObserver = ro;
						ro.observe(el);
						if (lastWidth > 0 && lastHeight > 0) emitOnce();
						setTimeout(() => {
							if (!emitted) emitOnce();
						}, 50);
						return;
					}
					if (el && el.offsetWidth > 0 && el.offsetHeight > 0) emit();
					else setTimeout(emit, 0);
				});
			},
			removePortal: () => {
				this.disconnectPopupResizeObserver();
				this.setState({
					isInsert: false,
					isPositionUpdated: false
				});
			},
			getEventName: () => ({
				mouseEnter: "onMouseEnter",
				mouseLeave: "onMouseLeave",
				mouseOut: "onMouseOut",
				mouseOver: "onMouseOver",
				click: "onClick",
				focus: "onFocus",
				blur: "onBlur",
				keydown: "onKeyDown",
				contextMenu: "onContextMenu"
			}),
			registerTriggerEvent: (triggerEventSet) => {
				this.setState({ triggerEventSet });
			},
			registerPortalEvent: (portalEventSet) => {
				this.setState({ portalEventSet });
			},
			getTriggerBounding: () => {
				const triggerDOM = this.adapter.getTriggerNode();
				this.triggerEl.current = triggerDOM;
				return triggerDOM && triggerDOM.getBoundingClientRect();
			},
			getPopupContainerRect: () => {
				const container = this.getPopupContainer();
				let rect = null;
				if (container && isElement(container)) {
					const boundingRect = convertDOMRectToObject(container.getBoundingClientRect());
					rect = Object.assign(Object.assign({}, boundingRect), {
						scrollLeft: container.scrollLeft,
						scrollTop: container.scrollTop
					});
				}
				return rect;
			},
			containerIsBody: () => {
				return this.getPopupContainer() === document.body;
			},
			containerIsRelative: () => {
				const container = this.getPopupContainer();
				return window.getComputedStyle(container).getPropertyValue("position") === "relative";
			},
			containerIsRelativeOrAbsolute: () => ["relative", "absolute"].includes(this.containerPosition),
			getWrapperBounding: () => {
				const el = this.containerEl && this.containerEl.current;
				return el && el.getBoundingClientRect();
			},
			getDocumentElementBounding: () => document.documentElement.getBoundingClientRect(),
			setPosition: (_a) => {
				var { position } = _a, style = __rest$9(_a, ["position"]);
				this.setState({
					containerStyle: Object.assign(Object.assign({}, this.state.containerStyle), style),
					placement: position,
					isPositionUpdated: true
				}, () => {
					this.eventManager.emit("positionUpdated");
				});
			},
			setDisplayNone: (displayNone, cb) => {
				this.setState({ displayNone }, cb);
			},
			updatePlacementAttr: (placement) => {
				this.setState({ placement });
			},
			togglePortalVisible: (visible, cb) => {
				const willUpdateStates = {};
				willUpdateStates.transitionState = visible ? "enter" : "leave";
				willUpdateStates.visible = visible;
				this.cachedLatestTransitionState = willUpdateStates.transitionState;
				this.mounted && this.setState(willUpdateStates, () => {
					cb();
				});
			},
			registerClickOutsideHandler: (cb) => {
				if (this.clickOutsideHandler) this.adapter.unregisterClickOutsideHandler();
				this.clickOutsideHandler = (e) => {
					var _a;
					if (!this.mounted) return false;
					let el = this.triggerEl && this.triggerEl.current;
					let popupEl = this.containerEl && this.containerEl.current;
					el = (_a = resolveDOM(el)) !== null && _a !== void 0 ? _a : el;
					const target = e.target;
					const path = e.composedPath && e.composedPath() || [target];
					const isClickTriggerToHide = this.props.clickTriggerToHide ? el && el.contains(target) || path.includes(el) : false;
					if (el && !el.contains(target) && popupEl && !popupEl.contains(target) && !(path.includes(popupEl) || path.includes(el)) || isClickTriggerToHide) {
						this.props.onClickOutSide(e);
						cb();
					}
				};
				window.addEventListener("mousedown", this.clickOutsideHandler);
			},
			unregisterClickOutsideHandler: () => {
				if (this.clickOutsideHandler) {
					window.removeEventListener("mousedown", this.clickOutsideHandler);
					this.clickOutsideHandler = null;
				}
			},
			registerResizeHandler: (cb) => {
				if (this.resizeHandler) this.adapter.unregisterResizeHandler();
				this.resizeHandler = (0, import_throttle.default)((e) => {
					if (!this.mounted) return false;
					cb(e);
				}, 10);
				window.addEventListener("resize", this.resizeHandler, false);
			},
			unregisterResizeHandler: () => {
				if (this.resizeHandler) {
					window.removeEventListener("resize", this.resizeHandler, false);
					this.resizeHandler = null;
				}
			},
			notifyVisibleChange: (visible) => {
				this.props.onVisibleChange(visible);
			},
			registerScrollHandler: (rePositionCb) => {
				if (this.scrollHandler) this.adapter.unregisterScrollHandler();
				this.scrollHandler = (0, import_throttle.default)((e) => {
					if (!this.mounted) return false;
					const triggerDOM = this.adapter.getTriggerNode();
					if (e.target.contains(triggerDOM)) rePositionCb({
						x: e.target.scrollLeft,
						y: e.target.scrollTop
					});
				}, 10);
				window.addEventListener("scroll", this.scrollHandler, true);
			},
			unregisterScrollHandler: () => {
				if (this.scrollHandler) {
					window.removeEventListener("scroll", this.scrollHandler, true);
					this.scrollHandler = null;
				}
			},
			canMotion: () => Boolean(this.props.motion),
			updateContainerPosition: () => {
				const positionInBody = document.body.getAttribute("data-position");
				if (positionInBody) {
					this.containerPosition = positionInBody;
					return;
				}
				requestAnimationFrame(() => {
					const container = this.getPopupContainer();
					if (container && isElement(container)) {
						const position = window.getComputedStyle(container).getPropertyValue("position");
						document.body.setAttribute("data-position", position);
						this.containerPosition = position;
					}
				});
			},
			getContainerPosition: () => this.containerPosition,
			getContainer: () => this.containerEl && this.containerEl.current,
			getTriggerNode: () => {
				let triggerDOM = this.triggerEl.current;
				if (!isElement(triggerDOM)) {
					const resolved = resolveDOM(triggerDOM);
					if (resolved) triggerDOM = resolved;
					else {
						if (triggerDOM) warning(true, "[Semi Tooltip] The trigger element's ref did not return a DOM node. Please ensure the trigger component forwards ref correctly.");
						return null;
					}
				}
				return triggerDOM;
			},
			getFocusableElements: (node) => {
				return getFocusableElements(node);
			},
			getActiveElement: () => {
				return getActiveElement();
			},
			setInitialFocus: () => {
				const { preventScroll } = this.props;
				const focusRefNode = (0, import_get.default)(this, "initialFocusRef.current");
				if (focusRefNode && "focus" in focusRefNode) focusRefNode.focus({ preventScroll });
			},
			notifyEscKeydown: (event) => {
				this.props.onEscKeyDown(event);
			},
			setId: () => {
				this.setState({ id: getUuidShort$1() });
			},
			getTriggerDOM: () => {
				if (this.triggerEl.current) return resolveDOM(this.triggerEl.current);
				return null;
			}
		});
	}
	componentDidMount() {
		this.mounted = true;
		this.getPopupContainer = this.props.getPopupContainer || this.context.getPopupContainer || defaultGetContainer;
		this.foundation.init();
		runAfterTicks(() => {
			let triggerEle = this.triggerEl.current;
			if (triggerEle && !(triggerEle instanceof HTMLElement)) triggerEle = resolveDOM(triggerEle);
			this.foundation.updateStateIfCursorOnTrigger(triggerEle);
		}, 1);
	}
	componentWillUnmount() {
		this.mounted = false;
		this.disconnectPopupResizeObserver();
		this.foundation.destroy();
	}
	/**
	* focus on tooltip trigger
	*/
	focusTrigger() {
		this.foundation.focusTrigger();
	}
	/** for transition - end */
	rePosition() {
		return this.foundation.calcPosition();
	}
	componentDidUpdate(prevProps, prevState) {
		warning(this.props.mouseLeaveDelay < this.props.mouseEnterDelay, "[Semi Tooltip] 'mouseLeaveDelay' cannot be less than 'mouseEnterDelay', which may cause the dropdown layer to not be hidden.");
		if (prevProps.visible !== this.props.visible) {
			if (["hover", "focus"].includes(this.props.trigger)) this.props.visible ? this.foundation.delayShow() : this.foundation.delayHide();
			else this.props.visible ? this.foundation.show() : this.foundation.hide();
		}
		if (!(0, import_isEqual.default)(prevProps.rePosKey, this.props.rePosKey)) this.rePosition();
	}
	render() {
		const { isInsert, triggerEventSet, visible, id } = this.state;
		const { wrapWhenSpecial, role, trigger } = this.props;
		let { children } = this.props;
		const childrenStyle = Object.assign({}, (0, import_get.default)(children, "props.style"));
		const extraStyle = {};
		if (wrapWhenSpecial) {
			const isSpecial = this.isSpecial(children);
			if (isSpecial) {
				childrenStyle.pointerEvents = "none";
				if (isSpecial === strings$3.STATUS_DISABLED) extraStyle.cursor = "not-allowed";
				children = /*#__PURE__*/ cloneElement(children, { style: childrenStyle });
				if (trigger !== "custom") children = this.wrapSpan(children);
				this.isWrapped = true;
			} else if (!/*#__PURE__*/ isValidElement(children)) {
				children = this.wrapSpan(children);
				this.isWrapped = true;
			}
		}
		let ariaAttribute = {};
		if (role === "dialog") {
			ariaAttribute["aria-expanded"] = visible ? "true" : "false";
			ariaAttribute["aria-haspopup"] = "dialog";
			ariaAttribute["aria-controls"] = id;
		} else ariaAttribute["aria-describedby"] = id;
		const newChild = /*#__PURE__*/ React.cloneElement(children, Object.assign(Object.assign(Object.assign(Object.assign({}, ariaAttribute), children.props), this.mergeEvents(children.props, triggerEventSet)), {
			style: Object.assign(Object.assign({}, (0, import_get.default)(children, "props.style")), extraStyle),
			className: (0, import_classnames.default)((0, import_get.default)(children, "props.className")),
			ref: (node) => {
				const { tooltipRef } = children.props;
				if (tooltipRef) this.triggerEl.current = tooltipRef.current;
				else this.triggerEl.current = node;
				const ref = getRef(children);
				if (typeof ref === "function") ref(node);
				else if (ref && typeof ref === "object") ref.current = node;
			},
			tabIndex: children.props.tabIndex || 0,
			"data-popupid": id
		}));
		return /*#__PURE__*/ React.createElement(React.Fragment, null, isInsert ? this.renderPortal() : null, newChild);
	}
};
Tooltip.contextType = ConfigContext;
Tooltip.propTypes = {
	children: import_prop_types.default.node,
	motion: import_prop_types.default.bool,
	autoAdjustOverflow: import_prop_types.default.bool,
	position: import_prop_types.default.oneOf(positionSet$1),
	getPopupContainer: import_prop_types.default.func,
	mouseEnterDelay: import_prop_types.default.number,
	mouseLeaveDelay: import_prop_types.default.number,
	trigger: import_prop_types.default.oneOf(triggerSet$1).isRequired,
	className: import_prop_types.default.string,
	wrapperClassName: import_prop_types.default.string,
	clickToHide: import_prop_types.default.bool,
	clickTriggerToHide: import_prop_types.default.bool,
	visible: import_prop_types.default.bool,
	style: import_prop_types.default.object,
	content: import_prop_types.default.oneOfType([import_prop_types.default.node, import_prop_types.default.func]),
	prefixCls: import_prop_types.default.string,
	onVisibleChange: import_prop_types.default.func,
	onClickOutSide: import_prop_types.default.func,
	spacing: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.object]),
	margin: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.object]),
	showArrow: import_prop_types.default.oneOfType([import_prop_types.default.bool, import_prop_types.default.node]),
	zIndex: import_prop_types.default.number,
	rePosKey: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.number]),
	arrowBounding: ArrowBoundingShape_default,
	transformFromCenter: import_prop_types.default.bool,
	arrowPointAtCenter: import_prop_types.default.bool,
	stopPropagation: import_prop_types.default.bool,
	role: import_prop_types.default.string,
	wrapWhenSpecial: import_prop_types.default.bool,
	guardFocus: import_prop_types.default.bool,
	returnFocusOnClose: import_prop_types.default.bool,
	preventScroll: import_prop_types.default.bool,
	keepDOM: import_prop_types.default.bool,
	condition: import_prop_types.default.bool
};
Tooltip.__SemiComponentName__ = "Tooltip";
Tooltip.defaultProps = getDefaultPropsFromGlobalConfig(Tooltip.__SemiComponentName__, {
	arrowBounding: numbers$1.ARROW_BOUNDING,
	autoAdjustOverflow: true,
	arrowPointAtCenter: true,
	trigger: "hover",
	transformFromCenter: true,
	position: "top",
	prefixCls: prefix,
	role: "tooltip",
	mouseEnterDelay: numbers$1.MOUSE_ENTER_DELAY,
	mouseLeaveDelay: numbers$1.MOUSE_LEAVE_DELAY,
	motion: true,
	onVisibleChange: import_noop.default,
	onClickOutSide: import_noop.default,
	spacing: numbers$1.SPACING,
	margin: numbers$1.MARGIN,
	showArrow: true,
	wrapWhenSpecial: true,
	zIndex: numbers$1.DEFAULT_Z_INDEX,
	closeOnEsc: false,
	guardFocus: false,
	returnFocusOnClose: false,
	onEscKeyDown: import_noop.default,
	disableFocusListener: false,
	disableArrowKeyDown: false,
	keepDOM: false,
	condition: true
});
//#endregion
//#region node_modules/copy-text-to-clipboard/index.js
var require_copy_text_to_clipboard = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var copyTextToClipboard = (input, { target = document.body } = {}) => {
		const element = document.createElement("textarea");
		const previouslyFocusedElement = document.activeElement;
		element.value = input;
		element.setAttribute("readonly", "");
		element.style.contain = "strict";
		element.style.position = "absolute";
		element.style.left = "-9999px";
		element.style.fontSize = "12pt";
		const selection = document.getSelection();
		let originalRange = false;
		if (selection.rangeCount > 0) originalRange = selection.getRangeAt(0);
		target.append(element);
		element.select();
		element.selectionStart = 0;
		element.selectionEnd = input.length;
		let isSuccess = false;
		try {
			isSuccess = document.execCommand("copy");
		} catch (_) {}
		element.remove();
		if (originalRange) {
			selection.removeAllRanges();
			selection.addRange(originalRange);
		}
		if (previouslyFocusedElement) previouslyFocusedElement.focus();
		return isSuccess;
	};
	module.exports = copyTextToClipboard;
	module.exports.default = copyTextToClipboard;
}));
//#endregion
//#region node_modules/@douyinfe/semi-foundation/lib/es/utils/function.js
/**
* no operation
*/
function noop() {}
//#endregion
//#region node_modules/@douyinfe/semi-ui/lib/es/locale/context.js
var import_isNull = /* @__PURE__ */ __toESM(require_isNull());
var import_isString = /* @__PURE__ */ __toESM(require_isString());
var import_merge = /* @__PURE__ */ __toESM(require_merge());
var import_isUndefined = /* @__PURE__ */ __toESM(require_isUndefined());
var import_copy_text_to_clipboard = /* @__PURE__ */ __toESM(require_copy_text_to_clipboard());
var LocaleContext = /*#__PURE__*/ React.createContext(null);
//#endregion
//#region node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js
function buildFormatLongFn(args) {
	return function() {
		var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		var width = options.width ? String(options.width) : args.defaultWidth;
		return args.formats[width] || args.formats[args.defaultWidth];
	};
}
//#endregion
//#region node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js
function buildLocalizeFn(args) {
	return function(dirtyIndex, options) {
		var context = options !== null && options !== void 0 && options.context ? String(options.context) : "standalone";
		var valuesArray;
		if (context === "formatting" && args.formattingValues) {
			var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
			var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
			valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
		} else {
			var _defaultWidth = args.defaultWidth;
			var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
			valuesArray = args.values[_width] || args.values[_defaultWidth];
		}
		var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
		return valuesArray[index];
	};
}
//#endregion
//#region node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js
function buildMatchFn(args) {
	return function(string) {
		var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		var width = options.width;
		var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
		var matchResult = string.match(matchPattern);
		if (!matchResult) return null;
		var matchedString = matchResult[0];
		var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
		var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function(pattern) {
			return pattern.test(matchedString);
		}) : findKey(parsePatterns, function(pattern) {
			return pattern.test(matchedString);
		});
		var value = args.valueCallback ? args.valueCallback(key) : key;
		value = options.valueCallback ? options.valueCallback(value) : value;
		var rest = string.slice(matchedString.length);
		return {
			value,
			rest
		};
	};
}
function findKey(object, predicate) {
	for (var key in object) if (object.hasOwnProperty(key) && predicate(object[key])) return key;
}
function findIndex(array, predicate) {
	for (var key = 0; key < array.length; key++) if (predicate(array[key])) return key;
}
//#endregion
//#region node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js
function buildMatchPatternFn(args) {
	return function(string) {
		var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		var matchResult = string.match(args.matchPattern);
		if (!matchResult) return null;
		var matchedString = matchResult[0];
		var parseResult = string.match(args.parsePattern);
		if (!parseResult) return null;
		var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
		value = options.valueCallback ? options.valueCallback(value) : value;
		var rest = string.slice(matchedString.length);
		return {
			value,
			rest
		};
	};
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
	"@babel/helpers - typeof";
	return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
		return typeof o;
	} : function(o) {
		return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
	}, _typeof(o);
}
//#endregion
//#region node_modules/date-fns/esm/_lib/toInteger/index.js
function toInteger(dirtyNumber) {
	if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) return NaN;
	var number = Number(dirtyNumber);
	if (isNaN(number)) return number;
	return number < 0 ? Math.ceil(number) : Math.floor(number);
}
//#endregion
//#region node_modules/date-fns/esm/_lib/requiredArgs/index.js
function requiredArgs(required, args) {
	if (args.length < required) throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
}
//#endregion
//#region node_modules/date-fns/esm/toDate/index.js
/**
* @name toDate
* @category Common Helpers
* @summary Convert the given argument to an instance of Date.
*
* @description
* Convert the given argument to an instance of Date.
*
* If the argument is an instance of Date, the function returns its clone.
*
* If the argument is a number, it is treated as a timestamp.
*
* If the argument is none of the above, the function returns Invalid Date.
*
* **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
*
* @param {Date|Number} argument - the value to convert
* @returns {Date} the parsed date in the local time zone
* @throws {TypeError} 1 argument required
*
* @example
* // Clone the date:
* const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
* //=> Tue Feb 11 2014 11:30:30
*
* @example
* // Convert the timestamp to date:
* const result = toDate(1392098430000)
* //=> Tue Feb 11 2014 11:30:30
*/
function toDate(argument) {
	requiredArgs(1, arguments);
	var argStr = Object.prototype.toString.call(argument);
	if (argument instanceof Date || _typeof(argument) === "object" && argStr === "[object Date]") return new Date(argument.getTime());
	else if (typeof argument === "number" || argStr === "[object Number]") return new Date(argument);
	else {
		if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
			console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
			console.warn((/* @__PURE__ */ new Error()).stack);
		}
		return /* @__PURE__ */ new Date(NaN);
	}
}
//#endregion
//#region node_modules/date-fns/esm/_lib/defaultOptions/index.js
var defaultOptions = {};
function getDefaultOptions() {
	return defaultOptions;
}
//#endregion
//#region node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js
function startOfUTCWeek(dirtyDate, options) {
	var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
	requiredArgs(1, arguments);
	var defaultOptions = getDefaultOptions();
	var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);
	if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
	var date = toDate(dirtyDate);
	var day = date.getUTCDay();
	var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
	date.setUTCDate(date.getUTCDate() - diff);
	date.setUTCHours(0, 0, 0, 0);
	return date;
}
//#endregion
//#region node_modules/date-fns/esm/_lib/isSameUTCWeek/index.js
function isSameUTCWeek(dirtyDateLeft, dirtyDateRight, options) {
	requiredArgs(2, arguments);
	var dateLeftStartOfWeek = startOfUTCWeek(dirtyDateLeft, options);
	var dateRightStartOfWeek = startOfUTCWeek(dirtyDateRight, options);
	return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}
//#endregion
//#region node_modules/date-fns/esm/locale/zh-CN/_lib/formatDistance/index.js
var formatDistanceLocale = {
	lessThanXSeconds: {
		one: "不到 1 秒",
		other: "不到 {{count}} 秒"
	},
	xSeconds: {
		one: "1 秒",
		other: "{{count}} 秒"
	},
	halfAMinute: "半分钟",
	lessThanXMinutes: {
		one: "不到 1 分钟",
		other: "不到 {{count}} 分钟"
	},
	xMinutes: {
		one: "1 分钟",
		other: "{{count}} 分钟"
	},
	xHours: {
		one: "1 小时",
		other: "{{count}} 小时"
	},
	aboutXHours: {
		one: "大约 1 小时",
		other: "大约 {{count}} 小时"
	},
	xDays: {
		one: "1 天",
		other: "{{count}} 天"
	},
	aboutXWeeks: {
		one: "大约 1 个星期",
		other: "大约 {{count}} 个星期"
	},
	xWeeks: {
		one: "1 个星期",
		other: "{{count}} 个星期"
	},
	aboutXMonths: {
		one: "大约 1 个月",
		other: "大约 {{count}} 个月"
	},
	xMonths: {
		one: "1 个月",
		other: "{{count}} 个月"
	},
	aboutXYears: {
		one: "大约 1 年",
		other: "大约 {{count}} 年"
	},
	xYears: {
		one: "1 年",
		other: "{{count}} 年"
	},
	overXYears: {
		one: "超过 1 年",
		other: "超过 {{count}} 年"
	},
	almostXYears: {
		one: "将近 1 年",
		other: "将近 {{count}} 年"
	}
};
var formatDistance = function formatDistance(token, count, options) {
	var result;
	var tokenValue = formatDistanceLocale[token];
	if (typeof tokenValue === "string") result = tokenValue;
	else if (count === 1) result = tokenValue.one;
	else result = tokenValue.other.replace("{{count}}", String(count));
	if (options !== null && options !== void 0 && options.addSuffix) {
		if (options.comparison && options.comparison > 0) return result + "内";
		else return result + "前";
	}
	return result;
};
//#endregion
//#region node_modules/date-fns/esm/locale/zh-CN/_lib/formatLong/index.js
var formatLong = {
	date: buildFormatLongFn({
		formats: {
			full: "y'年'M'月'd'日' EEEE",
			long: "y'年'M'月'd'日'",
			medium: "yyyy-MM-dd",
			short: "yy-MM-dd"
		},
		defaultWidth: "full"
	}),
	time: buildFormatLongFn({
		formats: {
			full: "zzzz a h:mm:ss",
			long: "z a h:mm:ss",
			medium: "a h:mm:ss",
			short: "a h:mm"
		},
		defaultWidth: "full"
	}),
	dateTime: buildFormatLongFn({
		formats: {
			full: "{{date}} {{time}}",
			long: "{{date}} {{time}}",
			medium: "{{date}} {{time}}",
			short: "{{date}} {{time}}"
		},
		defaultWidth: "full"
	})
};
//#endregion
//#region node_modules/date-fns/esm/locale/zh-CN/_lib/formatRelative/index.js
function checkWeek(date, baseDate, options) {
	var baseFormat = "eeee p";
	if (isSameUTCWeek(date, baseDate, options)) return baseFormat;
	else if (date.getTime() > baseDate.getTime()) return "'下个'" + baseFormat;
	return "'上个'" + baseFormat;
}
var formatRelativeLocale = {
	lastWeek: checkWeek,
	yesterday: "'昨天' p",
	today: "'今天' p",
	tomorrow: "'明天' p",
	nextWeek: checkWeek,
	other: "PP p"
};
//#endregion
//#region node_modules/date-fns/esm/locale/zh-CN/index.js
/**
* @type {Locale}
* @category Locales
* @summary Chinese Simplified locale.
* @language Chinese Simplified
* @iso-639-2 zho
* @author Changyu Geng [@KingMario]{@link https://github.com/KingMario}
* @author Song Shuoyun [@fnlctrl]{@link https://github.com/fnlctrl}
* @author sabrinaM [@sabrinamiao]{@link https://github.com/sabrinamiao}
* @author Carney Wu [@cubicwork]{@link https://github.com/cubicwork}
* @author Terrence Lam [@skyuplam]{@link https://github.com/skyuplam}
*/
var locale = {
	code: "zh-CN",
	formatDistance,
	formatLong,
	formatRelative: function formatRelative(token, date, baseDate, options) {
		var format = formatRelativeLocale[token];
		if (typeof format === "function") return format(date, baseDate, options);
		return format;
	},
	localize: {
		ordinalNumber: function ordinalNumber(dirtyNumber, options) {
			var number = Number(dirtyNumber);
			switch (options === null || options === void 0 ? void 0 : options.unit) {
				case "date": return number.toString() + "日";
				case "hour": return number.toString() + "时";
				case "minute": return number.toString() + "分";
				case "second": return number.toString() + "秒";
				default: return "第 " + number.toString();
			}
		},
		era: buildLocalizeFn({
			values: {
				narrow: ["前", "公元"],
				abbreviated: ["前", "公元"],
				wide: ["公元前", "公元"]
			},
			defaultWidth: "wide"
		}),
		quarter: buildLocalizeFn({
			values: {
				narrow: [
					"1",
					"2",
					"3",
					"4"
				],
				abbreviated: [
					"第一季",
					"第二季",
					"第三季",
					"第四季"
				],
				wide: [
					"第一季度",
					"第二季度",
					"第三季度",
					"第四季度"
				]
			},
			defaultWidth: "wide",
			argumentCallback: function argumentCallback(quarter) {
				return quarter - 1;
			}
		}),
		month: buildLocalizeFn({
			values: {
				narrow: [
					"一",
					"二",
					"三",
					"四",
					"五",
					"六",
					"七",
					"八",
					"九",
					"十",
					"十一",
					"十二"
				],
				abbreviated: [
					"1月",
					"2月",
					"3月",
					"4月",
					"5月",
					"6月",
					"7月",
					"8月",
					"9月",
					"10月",
					"11月",
					"12月"
				],
				wide: [
					"一月",
					"二月",
					"三月",
					"四月",
					"五月",
					"六月",
					"七月",
					"八月",
					"九月",
					"十月",
					"十一月",
					"十二月"
				]
			},
			defaultWidth: "wide"
		}),
		day: buildLocalizeFn({
			values: {
				narrow: [
					"日",
					"一",
					"二",
					"三",
					"四",
					"五",
					"六"
				],
				short: [
					"日",
					"一",
					"二",
					"三",
					"四",
					"五",
					"六"
				],
				abbreviated: [
					"周日",
					"周一",
					"周二",
					"周三",
					"周四",
					"周五",
					"周六"
				],
				wide: [
					"星期日",
					"星期一",
					"星期二",
					"星期三",
					"星期四",
					"星期五",
					"星期六"
				]
			},
			defaultWidth: "wide"
		}),
		dayPeriod: buildLocalizeFn({
			values: {
				narrow: {
					am: "上",
					pm: "下",
					midnight: "凌晨",
					noon: "午",
					morning: "早",
					afternoon: "下午",
					evening: "晚",
					night: "夜"
				},
				abbreviated: {
					am: "上午",
					pm: "下午",
					midnight: "凌晨",
					noon: "中午",
					morning: "早晨",
					afternoon: "中午",
					evening: "晚上",
					night: "夜间"
				},
				wide: {
					am: "上午",
					pm: "下午",
					midnight: "凌晨",
					noon: "中午",
					morning: "早晨",
					afternoon: "中午",
					evening: "晚上",
					night: "夜间"
				}
			},
			defaultWidth: "wide",
			formattingValues: {
				narrow: {
					am: "上",
					pm: "下",
					midnight: "凌晨",
					noon: "午",
					morning: "早",
					afternoon: "下午",
					evening: "晚",
					night: "夜"
				},
				abbreviated: {
					am: "上午",
					pm: "下午",
					midnight: "凌晨",
					noon: "中午",
					morning: "早晨",
					afternoon: "中午",
					evening: "晚上",
					night: "夜间"
				},
				wide: {
					am: "上午",
					pm: "下午",
					midnight: "凌晨",
					noon: "中午",
					morning: "早晨",
					afternoon: "中午",
					evening: "晚上",
					night: "夜间"
				}
			},
			defaultFormattingWidth: "wide"
		})
	},
	match: {
		ordinalNumber: buildMatchPatternFn({
			matchPattern: /^(第\s*)?\d+(日|时|分|秒)?/i,
			parsePattern: /\d+/i,
			valueCallback: function valueCallback(value) {
				return parseInt(value, 10);
			}
		}),
		era: buildMatchFn({
			matchPatterns: {
				narrow: /^(前)/i,
				abbreviated: /^(前)/i,
				wide: /^(公元前|公元)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [/^(前)/i, /^(公元)/i] },
			defaultParseWidth: "any"
		}),
		quarter: buildMatchFn({
			matchPatterns: {
				narrow: /^[1234]/i,
				abbreviated: /^第[一二三四]刻/i,
				wide: /^第[一二三四]刻钟/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [
				/(1|一)/i,
				/(2|二)/i,
				/(3|三)/i,
				/(4|四)/i
			] },
			defaultParseWidth: "any",
			valueCallback: function valueCallback(index) {
				return index + 1;
			}
		}),
		month: buildMatchFn({
			matchPatterns: {
				narrow: /^(一|二|三|四|五|六|七|八|九|十[二一])/i,
				abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,
				wide: /^(一|二|三|四|五|六|七|八|九|十[二一])月/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^一/i,
					/^二/i,
					/^三/i,
					/^四/i,
					/^五/i,
					/^六/i,
					/^七/i,
					/^八/i,
					/^九/i,
					/^十(?!(一|二))/i,
					/^十一/i,
					/^十二/i
				],
				any: [
					/^一|1/i,
					/^二|2/i,
					/^三|3/i,
					/^四|4/i,
					/^五|5/i,
					/^六|6/i,
					/^七|7/i,
					/^八|8/i,
					/^九|9/i,
					/^十(?!(一|二))|10/i,
					/^十一|11/i,
					/^十二|12/i
				]
			},
			defaultParseWidth: "any"
		}),
		day: buildMatchFn({
			matchPatterns: {
				narrow: /^[一二三四五六日]/i,
				short: /^[一二三四五六日]/i,
				abbreviated: /^周[一二三四五六日]/i,
				wide: /^星期[一二三四五六日]/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [
				/日/i,
				/一/i,
				/二/i,
				/三/i,
				/四/i,
				/五/i,
				/六/i
			] },
			defaultParseWidth: "any"
		}),
		dayPeriod: buildMatchFn({
			matchPatterns: { any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i },
			defaultMatchWidth: "any",
			parsePatterns: { any: {
				am: /^上午?/i,
				pm: /^下午?/i,
				midnight: /^午夜/i,
				noon: /^[中正]午/i,
				morning: /^早上/i,
				afternoon: /^下午/i,
				evening: /^晚上?/i,
				night: /^凌晨/i
			} },
			defaultParseWidth: "any"
		})
	},
	options: {
		weekStartsOn: 1,
		firstWeekContainsDate: 4
	}
};
//#endregion
//#region node_modules/@douyinfe/semi-ui/lib/es/locale/source/zh_CN.js
var local = {
	code: "zh-CN",
	currency: "CNY",
	dateFnsLocale: locale,
	Pagination: {
		pageSize: "每页条数：${pageSize}",
		total: "总页数：${total}",
		jumpTo: "跳至",
		page: "页"
	},
	Modal: {
		confirm: "确定",
		cancel: "取消"
	},
	Tabs: { more: "更多" },
	TimePicker: {
		placeholder: {
			time: "请选择时间",
			timeRange: "请选择时间范围"
		},
		begin: "开始时间",
		end: "结束时间",
		hour: "时",
		minute: "分",
		second: "秒",
		AM: "上午",
		PM: "下午"
	},
	DatePicker: {
		placeholder: {
			date: "请选择日期",
			dateTime: "请选择日期及时间",
			dateRange: ["开始日期", "结束日期"],
			dateTimeRange: ["开始日期", "结束日期"],
			monthRange: ["开始月份", "结束月份"]
		},
		presets: "快捷选择",
		footer: {
			confirm: "确定",
			cancel: "取消"
		},
		selectDate: "返回选择日期",
		selectTime: "选择时间",
		year: "年",
		month: "月",
		day: "日",
		monthText: "${year}年 ${month}",
		months: {
			1: "1月",
			2: "2月",
			3: "3月",
			4: "4月",
			5: "5月",
			6: "6月",
			7: "7月",
			8: "8月",
			9: "9月",
			10: "10月",
			11: "11月",
			12: "12月"
		},
		fullMonths: {
			1: "1",
			2: "2",
			3: "3",
			4: "4",
			5: "5",
			6: "6",
			7: "7",
			8: "8",
			9: "9",
			10: "10",
			11: "11",
			12: "12"
		},
		weeks: {
			Mon: "一",
			Tue: "二",
			Wed: "三",
			Thu: "四",
			Fri: "五",
			Sat: "六",
			Sun: "日"
		},
		localeFormatToken: { FORMAT_SWITCH_DATE: "yyyy-MM-dd" }
	},
	Navigation: {
		collapseText: "收起侧边栏",
		expandText: "展开侧边栏"
	},
	Popconfirm: {
		confirm: "确定",
		cancel: "取消"
	},
	Table: {
		emptyText: "暂无数据",
		pageText: "显示第 ${currentStart} 条-第 ${currentEnd} 条，共 ${total} 条",
		descend: "点击降序",
		ascend: "点击升序",
		cancelSort: "取消排序",
		confirmFilter: "确定",
		resetFilter: "重置"
	},
	Select: {
		emptyText: "暂无数据",
		createText: "创建"
	},
	Cascader: { emptyText: "暂无数据" },
	Tree: {
		emptyText: "暂无数据",
		searchPlaceholder: "搜索"
	},
	List: { emptyText: "暂无数据" },
	Calendar: {
		allDay: "全天",
		AM: "上午${time}时",
		PM: "下午${time}时",
		datestring: "日",
		remaining: "还有${remained}项"
	},
	Upload: {
		mainText: "点击上传文件或拖拽文件到这里",
		illegalTips: "不支持此类型文件",
		legalTips: "松手开始上传",
		retry: "重试",
		replace: "替换文件",
		clear: "清空",
		selectedFiles: "已选择文件",
		illegalSize: "文件尺寸不合法",
		fail: "上传失败",
		cropTitle: "裁切图片",
		cropOk: "确定",
		cropCancel: "取消"
	},
	TreeSelect: { searchPlaceholder: "搜索" },
	Typography: {
		copy: "复制",
		copied: "复制成功",
		expand: "展开",
		collapse: "收起"
	},
	Transfer: {
		emptyLeft: "暂无数据",
		emptySearch: "无搜索结果",
		emptyRight: "暂无内容，可从左侧勾选",
		placeholder: "搜索",
		clear: "清空",
		selectAll: "全选",
		clearSelectAll: "取消全选",
		total: "总个数：${total}",
		selected: "已选个数：${total}"
	},
	Form: { optional: "（可选）" },
	Image: {
		preview: "预览",
		loading: "加载中",
		loadError: "加载失败",
		prevTip: "上一张",
		nextTip: "下一张",
		zoomInTip: "放大",
		zoomOutTip: "缩小",
		rotateTip: "旋转",
		downloadTip: "下载",
		adaptiveTip: "适应页面",
		originTip: "原始尺寸"
	},
	Chat: {
		deleteConfirm: "确认删除该会话吗？",
		clearContext: "上下文已清除",
		copySuccess: "复制成功",
		stop: "停止",
		copy: "复制",
		copied: "复制成功",
		dropAreaText: "将文件放到这里"
	},
	UserGuide: {
		skip: "跳过",
		next: "下一步",
		prev: "上一步",
		finish: "完成"
	},
	InputNumber: {},
	JsonViewer: {
		search: "查找",
		replace: "替换",
		replaceAll: "全部替换"
	},
	VideoPlayer: {
		rateChange: "切换速率至 ${rate}",
		qualityChange: "切换清晰度至${quality}",
		routeChange: "切换线路至${route}",
		mirror: "镜像",
		cancelMirror: "取消镜像",
		loading: "加载中...",
		stall: "加载失败",
		noResource: "暂无资源",
		videoError: "视频加载错误"
	},
	AIChatDialogue: {
		delete: "删除",
		deleteConfirm: "确认要删除吗？",
		deleteContent: "删除后将无法恢复！",
		copySuccess: "复制成功",
		loading: "请稍候...",
		reasoning: {
			completed: "已思考完成",
			thinking: "正在思考中..."
		},
		annotationText: "篇资料"
	},
	Feedback: {
		submit: "提交",
		cancel: "取消"
	},
	AIChatInput: {
		template: "模板",
		configure: "配置",
		selected: "已选 ${count} 个"
	},
	Sidebar: {
		linkAddSuccess: "已添加链接",
		linkRemoveSuccess: "已移除链接",
		enterLinkAddress: "输入链接地址",
		validateFailInfo: "验证失败，请重新上传",
		uploadFailInfo: "上传失败，请重试",
		uploadImgInfo: "点击上传图片或者拖拽图片到这里",
		defaultMcpInfo: "预设 MCP，不可关闭",
		searchPlaceholder: "请输入",
		emptyCustomMcpInfo: "暂无自定义 MCP",
		newMcpAdd: "自定义 MCP",
		mcpConfigure: "MCP 配置",
		annotationTitle: "参考来源",
		activeMCPNumber: "已激活 MCP 数:",
		copySuccess: "复制成功"
	},
	AudioPlayer: {
		backward: "后退 ${skipDuration} 秒",
		forward: "前进 ${skipDuration} 秒",
		prev: "上一首",
		next: "下一首",
		loop: "循环播放",
		volume: "音量",
		mediaError: "音频加载失败"
	}
};
//#endregion
//#region node_modules/@douyinfe/semi-ui/lib/es/locale/localeConsumer.js
var LocaleConsumer = class extends Component {
	renderChildren(localeData, children) {
		const { componentName } = this.props;
		let locale = localeData;
		if (!(localeData === null || localeData === void 0 ? void 0 : localeData.code)) locale = local;
		/**
		* dateFnsLocale is used to format the date into a local date
		* example:
		*  import { zhCN } from "date-fns/locale";
		*  format(new Date("2021-04-29"), "yyyy-MM-dd EEEE")
		*      => '2021-04-29 Thursday' (默认 locale 为 en-US)
		*  format(new Date('2021-04-29'), "yyyy-MM-dd EEEE", { locale: zhCN })
		*      => '2021-04-29 星期四'
		*/
		const defaultFnsLocale = (0, import_get.default)(local, "dateFnsLocale");
		const dateFnsLocale = (0, import_get.default)(locale, "dateFnsLocale", defaultFnsLocale);
		const currency = (0, import_get.default)(locale, "currency");
		return children(locale[componentName], locale.code, dateFnsLocale, currency);
	}
	render() {
		const { children } = this.props;
		return /*#__PURE__*/ React.createElement(ConfigContext.Consumer, null, (_ref) => {
			let { locale } = _ref;
			return /*#__PURE__*/ React.createElement(LocaleContext.Consumer, null, (localeData) => this.renderChildren(locale || localeData, children));
		});
	}
};
LocaleConsumer.propTypes = {
	componentName: import_prop_types.default.string.isRequired,
	children: import_prop_types.default.any
};
LocaleConsumer.defaultProps = { componentName: "" };
//#endregion
//#region node_modules/@douyinfe/semi-icons/lib/es/env.js
var BASE_CLASS_PREFIX = "semi";
//#endregion
//#region node_modules/@douyinfe/semi-icons/lib/es/components/Icon.js
var __rest$8 = function(s, e) {
	var t = {};
	for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	if (s != null && typeof Object.getOwnPropertySymbols === "function") {
		for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	}
	return t;
};
var Icon$1 = /*#__PURE__*/ React.forwardRef((props, ref) => {
	const { svg, spin = false, rotate, style, className, prefixCls = BASE_CLASS_PREFIX, type, size = "default", fill } = props, restProps = __rest$8(props, [
		"svg",
		"spin",
		"rotate",
		"style",
		"className",
		"prefixCls",
		"type",
		"size",
		"fill"
	]);
	const classes = (0, import_classnames.default)(`${prefixCls}-icon`, {
		[`${prefixCls}-icon-extra-small`]: size === "extra-small",
		[`${prefixCls}-icon-small`]: size === "small",
		[`${prefixCls}-icon-default`]: size === "default",
		[`${prefixCls}-icon-large`]: size === "large",
		[`${prefixCls}-icon-extra-large`]: size === "extra-large",
		[`${prefixCls}-icon-spinning`]: spin === true,
		[`${prefixCls}-icon-${type}`]: Boolean(type)
	}, className);
	const outerStyle = {};
	if (Number.isSafeInteger(rotate)) outerStyle.transform = `rotate(${rotate}deg)`;
	Object.assign(outerStyle, style);
	return /*#__PURE__*/ React.createElement("span", Object.assign({
		role: "img",
		ref,
		"aria-label": type,
		className: classes,
		style: outerStyle
	}, restProps), fill ? /*#__PURE__*/ React.cloneElement(svg, { fill }) : svg);
});
Icon$1.elementType = "Icon";
var convertIcon = (Svg, iconType) => {
	const InnerIcon = /*#__PURE__*/ React.forwardRef((props, ref) => /*#__PURE__*/ React.createElement(Icon$1, Object.assign({
		svg: /*#__PURE__*/ React.createElement(Svg),
		type: iconType,
		ref
	}, props)));
	InnerIcon.elementType = "Icon";
	return InnerIcon;
};
//#endregion
//#region node_modules/@douyinfe/semi-icons/lib/es/utils.js
/**
* Get a random id with prefix, it not strictly guarantee id uniqueness
*
* Note: the return value of getUuid is too long, we need a short one
*
* @example
* getUuidShort({ prefix: 'semi' }) => 'semi-46dinzc'
* getUuidShort({ prefix: '' }) => '0eer2i0'
* getUuidShort({ prefix: 'semi', length: 4 }) => 'semi-8jts'
*/
function getUuidShort() {
	const { prefix = "", length = 7 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
	const characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ";
	const total = 62;
	let randomId = "";
	for (let i = 0; i < length; i++) {
		const random = Math.floor(Math.random() * total);
		randomId += characters.charAt(random);
	}
	return prefix ? `${prefix}-${randomId}` : randomId;
}
function getFillColor(fill, num) {
	if (typeof fill === "string") return new Array(num).fill(fill);
	else if (Array.isArray(fill)) {
		const fillLength = fill.length;
		let result = fill;
		if (fillLength < num) {
			let i = 0;
			result = [];
			while (i < num) {
				result.push(fill[i % fillLength]);
				i++;
			}
			return result;
		} else if (fillLength > num) result = fill.slice(0, num);
		if (num === 4) return result.reverse();
		return result;
	}
	if (num === 2) return ["rgba(166,71,255)", "currentColor"];
	return [
		"rgba(233,69,255)",
		"rgba(166,71,255)",
		"rgba(107,97,255)",
		"rgba(46,140,255)"
	];
}
//#endregion
//#region node_modules/@douyinfe/semi-icons/lib/es/icons/IconAILoading.js
var __rest$7 = function(s, e) {
	var t = {};
	for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	if (s != null && typeof Object.getOwnPropertySymbols === "function") {
		for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	}
	return t;
};
function SvgComponent$7(props) {
	const { fill } = props, rest = __rest$7(props, ["fill"]);
	const id = getUuidShort({ prefix: "semi-ai-loading" });
	const [stop1, stop2, stop3, stop4] = getFillColor(fill, 4);
	return /*#__PURE__*/ React$1.createElement("svg", Object.assign({
		viewBox: "0 0 16 16",
		width: "1em",
		height: "1em",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		focusable: false,
		"aria-hidden": true
	}, rest), /*#__PURE__*/ React$1.createElement("path", {
		d: "M15.1112 7.99978C15.1112 4.07242 11.9275 0.888672 8.00009 0.888672C5.18219 0.888672 2.74711 2.52771 1.59619 4.90445",
		stroke: `url(#${id})`,
		strokeWidth: "1.77778",
		strokeLinecap: "round"
	}), /*#__PURE__*/ React$1.createElement("defs", null, /*#__PURE__*/ React$1.createElement("linearGradient", {
		id,
		x1: "16",
		y1: "8",
		x2: "2.68594",
		y2: "11.022",
		gradientUnits: "userSpaceOnUse"
	}, /*#__PURE__*/ React$1.createElement("stop", { stopColor: stop1 }), /*#__PURE__*/ React$1.createElement("stop", {
		offset: "0.3",
		stopColor: stop2
	}), /*#__PURE__*/ React$1.createElement("stop", {
		offset: "0.6",
		stopColor: stop3
	}), /*#__PURE__*/ React$1.createElement("stop", {
		offset: "1",
		stopColor: stop4,
		stopOpacity: "0"
	}))));
}
var IconComponent$7 = convertIcon(SvgComponent$7, "ai_loading");
//#endregion
//#region node_modules/@douyinfe/semi-icons/lib/es/icons/IconAlertCircle.js
function SvgComponent$6(props) {
	return /*#__PURE__*/ React$1.createElement("svg", Object.assign({
		viewBox: "0 0 24 24",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		focusable: false,
		"aria-hidden": true
	}, props), /*#__PURE__*/ React$1.createElement("path", {
		fillRule: "evenodd",
		clipRule: "evenodd",
		d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-9.5 5.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM12 5a1.9 1.9 0 0 0-1.89 2l.3 5.5a1.59 1.59 0 0 0 3.17 0l.3-5.5c.07-1.09-.8-2-1.88-2Z",
		fill: "currentColor"
	}));
}
var IconComponent$6 = convertIcon(SvgComponent$6, "alert_circle");
//#endregion
//#region node_modules/@douyinfe/semi-icons/lib/es/icons/IconAlertTriangle.js
function SvgComponent$5(props) {
	return /*#__PURE__*/ React$1.createElement("svg", Object.assign({
		viewBox: "0 0 24 24",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		focusable: false,
		"aria-hidden": true
	}, props), /*#__PURE__*/ React$1.createElement("path", {
		fillRule: "evenodd",
		clipRule: "evenodd",
		d: "m10.23 2.4-8.7 16.67A2 2 0 0 0 3.3 22h17.4a2 2 0 0 0 1.77-2.93L13.77 2.4a2 2 0 0 0-3.54 0ZM13.14 14a1.15 1.15 0 0 1-2.28 0l-.58-4.03a1.73 1.73 0 1 1 3.44 0l-.58 4.03Zm.36 4.49a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
		fill: "currentColor"
	}));
}
var IconComponent$5 = convertIcon(SvgComponent$5, "alert_triangle");
//#endregion
//#region node_modules/@douyinfe/semi-icons/lib/es/icons/IconClose.js
function SvgComponent$4(props) {
	return /*#__PURE__*/ React$1.createElement("svg", Object.assign({
		viewBox: "0 0 24 24",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		focusable: false,
		"aria-hidden": true
	}, props), /*#__PURE__*/ React$1.createElement("path", {
		d: "M17.66 19.78a1.5 1.5 0 0 0 2.12-2.12L14.12 12l5.66-5.66a1.5 1.5 0 0 0-2.12-2.12L12 9.88 6.34 4.22a1.5 1.5 0 1 0-2.12 2.12L9.88 12l-5.66 5.66a1.5 1.5 0 0 0 2.12 2.12L12 14.12l5.66 5.66Z",
		fill: "currentColor"
	}));
}
var IconComponent$4 = convertIcon(SvgComponent$4, "close");
//#endregion
//#region node_modules/@douyinfe/semi-icons/lib/es/icons/IconCopy.js
function SvgComponent$3(props) {
	return /*#__PURE__*/ React$1.createElement("svg", Object.assign({
		viewBox: "0 0 24 24",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		focusable: false,
		"aria-hidden": true
	}, props), /*#__PURE__*/ React$1.createElement("path", {
		d: "M7 4c0-1.1.9-2 2-2h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-1V8c0-2-1-3-3-3H7V4Z",
		fill: "currentColor"
	}), /*#__PURE__*/ React$1.createElement("path", {
		d: "M5 7a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H5Z",
		fill: "currentColor"
	}));
}
var IconComponent$3 = convertIcon(SvgComponent$3, "copy");
//#endregion
//#region node_modules/@douyinfe/semi-icons/lib/es/icons/IconInfoCircle.js
function SvgComponent$2(props) {
	return /*#__PURE__*/ React$1.createElement("svg", Object.assign({
		viewBox: "0 0 24 24",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		focusable: false,
		"aria-hidden": true
	}, props), /*#__PURE__*/ React$1.createElement("path", {
		fillRule: "evenodd",
		clipRule: "evenodd",
		d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm2-16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-5 3.75c0-.41.34-.75.75-.75h2.75a1 1 0 0 1 1 1v5.5h.75a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5h.75v-5h-.75a.75.75 0 0 1-.75-.75Z",
		fill: "currentColor"
	}));
}
var IconComponent$2 = convertIcon(SvgComponent$2, "info_circle");
//#endregion
//#region node_modules/@douyinfe/semi-icons/lib/es/icons/IconTick.js
function SvgComponent$1(props) {
	return /*#__PURE__*/ React$1.createElement("svg", Object.assign({
		viewBox: "0 0 24 24",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		focusable: false,
		"aria-hidden": true
	}, props), /*#__PURE__*/ React$1.createElement("path", {
		fillRule: "evenodd",
		clipRule: "evenodd",
		d: "M21.35 4.27c.68.47.86 1.4.38 2.08l-10 14.5a1.5 1.5 0 0 1-2.33.17l-6.5-7a1.5 1.5 0 0 1 2.2-2.04l5.23 5.63 8.94-12.96a1.5 1.5 0 0 1 2.08-.38Z",
		fill: "currentColor"
	}));
}
var IconComponent$1 = convertIcon(SvgComponent$1, "tick");
//#endregion
//#region node_modules/@douyinfe/semi-icons/lib/es/icons/IconTickCircle.js
function SvgComponent(props) {
	return /*#__PURE__*/ React$1.createElement("svg", Object.assign({
		viewBox: "0 0 24 24",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		width: "1em",
		height: "1em",
		focusable: false,
		"aria-hidden": true
	}, props), /*#__PURE__*/ React$1.createElement("path", {
		fillRule: "evenodd",
		clipRule: "evenodd",
		d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm5.88-13.18-6.2 7.6a1.5 1.5 0 0 1-2.37 0l-3.5-4a1.5 1.5 0 1 1 2.37-1.84l2.3 2.46L15.5 8a1.5 1.5 0 1 1 2.38 1.82Z",
		fill: "currentColor"
	}));
}
var IconComponent = convertIcon(SvgComponent, "tick_circle");
//#endregion
//#region node_modules/@douyinfe/semi-foundation/lib/es/utils/keyCode.js
/**
* @ignore
* some key-codes definition and utils from closure-library
*/
var keyCode = {
	/**
	* MAC_ENTER
	*/
	MAC_ENTER: 3,
	/**
	* BACKSPACE
	*/
	BACKSPACE: 8,
	/**
	* TAB
	*/
	TAB: 9,
	/**
	* NUMLOCK on FF/Safari Mac
	*/
	NUM_CENTER: 12,
	/**
	* ENTER
	*/
	ENTER: 13,
	/**
	* SHIFT
	*/
	SHIFT: 16,
	/**
	* CTRL
	*/
	CTRL: 17,
	/**
	* ALT
	*/
	ALT: 18,
	/**
	* PAUSE
	*/
	PAUSE: 19,
	/**
	* CAPS_LOCK
	*/
	CAPS_LOCK: 20,
	/**
	* ESC
	*/
	ESC: 27,
	/**
	* SPACE
	*/
	SPACE: 32,
	/**
	* PAGE_UP
	*/
	PAGE_UP: 33,
	/**
	* PAGE_DOWN
	*/
	PAGE_DOWN: 34,
	/**
	* END
	*/
	END: 35,
	/**
	* HOME
	*/
	HOME: 36,
	/**
	* LEFT
	*/
	LEFT: 37,
	/**
	* UP
	*/
	UP: 38,
	/**
	* RIGHT
	*/
	RIGHT: 39,
	/**
	* DOWN
	*/
	DOWN: 40,
	/**
	* PRINT_SCREEN
	*/
	PRINT_SCREEN: 44,
	/**
	* INSERT
	*/
	INSERT: 45,
	/**
	* DELETE
	*/
	DELETE: 46,
	/**
	* ZERO
	*/
	ZERO: 48,
	/**
	* ONE
	*/
	ONE: 49,
	/**
	* TWO
	*/
	TWO: 50,
	/**
	* THREE
	*/
	THREE: 51,
	/**
	* FOUR
	*/
	FOUR: 52,
	/**
	* FIVE
	*/
	FIVE: 53,
	/**
	* SIX
	*/
	SIX: 54,
	/**
	* SEVEN
	*/
	SEVEN: 55,
	/**
	* EIGHT
	*/
	EIGHT: 56,
	/**
	* NINE
	*/
	NINE: 57,
	/**
	* QUESTION_MARK
	*/
	QUESTION_MARK: 63,
	/**
	* A
	*/
	A: 65,
	/**
	* B
	*/
	B: 66,
	/**
	* C
	*/
	C: 67,
	/**
	* D
	*/
	D: 68,
	/**
	* E
	*/
	E: 69,
	/**
	* F
	*/
	F: 70,
	/**
	* G
	*/
	G: 71,
	/**
	* H
	*/
	H: 72,
	/**
	* I
	*/
	I: 73,
	/**
	* J
	*/
	J: 74,
	/**
	* K
	*/
	K: 75,
	/**
	* L
	*/
	L: 76,
	/**
	* M
	*/
	M: 77,
	/**
	* N
	*/
	N: 78,
	/**
	* O
	*/
	O: 79,
	/**
	* P
	*/
	P: 80,
	/**
	* Q
	*/
	Q: 81,
	/**
	* R
	*/
	R: 82,
	/**
	* S
	*/
	S: 83,
	/**
	* T
	*/
	T: 84,
	/**
	* U
	*/
	U: 85,
	/**
	* V
	*/
	V: 86,
	/**
	* W
	*/
	W: 87,
	/**
	* X
	*/
	X: 88,
	/**
	* Y
	*/
	Y: 89,
	/**
	* Z
	*/
	Z: 90,
	/**
	* META
	*/
	META: 91,
	/**
	* WIN_KEY_RIGHT
	*/
	WIN_KEY_RIGHT: 92,
	/**
	* CONTEXT_MENU
	*/
	CONTEXT_MENU: 93,
	/**
	* NUM_ZERO
	*/
	NUM_ZERO: 96,
	/**
	* NUM_ONE
	*/
	NUM_ONE: 97,
	/**
	* NUM_TWO
	*/
	NUM_TWO: 98,
	/**
	* NUM_THREE
	*/
	NUM_THREE: 99,
	/**
	* NUM_FOUR
	*/
	NUM_FOUR: 100,
	/**
	* NUM_FIVE
	*/
	NUM_FIVE: 101,
	/**
	* NUM_SIX
	*/
	NUM_SIX: 102,
	/**
	* NUM_SEVEN
	*/
	NUM_SEVEN: 103,
	/**
	* NUM_EIGHT
	*/
	NUM_EIGHT: 104,
	/**
	* NUM_NINE
	*/
	NUM_NINE: 105,
	/**
	* NUM_MULTIPLY
	*/
	NUM_MULTIPLY: 106,
	/**
	* NUM_PLUS
	*/
	NUM_PLUS: 107,
	/**
	* NUM_MINUS
	*/
	NUM_MINUS: 109,
	/**
	* NUM_PERIOD
	*/
	NUM_PERIOD: 110,
	/**
	* NUM_DIVISION
	*/
	NUM_DIVISION: 111,
	/**
	* F1
	*/
	F1: 112,
	/**
	* F2
	*/
	F2: 113,
	/**
	* F3
	*/
	F3: 114,
	/**
	* F4
	*/
	F4: 115,
	/**
	* F5
	*/
	F5: 116,
	/**
	* F6
	*/
	F6: 117,
	/**
	* F7
	*/
	F7: 118,
	/**
	* F8
	*/
	F8: 119,
	/**
	* F9
	*/
	F9: 120,
	/**
	* F10
	*/
	F10: 121,
	/**
	* F11
	*/
	F11: 122,
	/**
	* F12
	*/
	F12: 123,
	/**
	* NUMLOCK
	*/
	NUMLOCK: 144,
	/**
	* SEMICOLON
	*/
	SEMICOLON: 186,
	/**
	* DASH
	*/
	DASH: 189,
	/**
	* EQUALS
	*/
	EQUALS: 187,
	/**
	* COMMA
	*/
	COMMA: 188,
	/**
	* PERIOD
	*/
	PERIOD: 190,
	/**
	* SLASH
	*/
	SLASH: 191,
	/**
	* APOSTROPHE
	*/
	APOSTROPHE: 192,
	/**
	* SINGLE_QUOTE
	*/
	SINGLE_QUOTE: 222,
	/**
	* OPEN_SQUARE_BRACKET
	*/
	OPEN_SQUARE_BRACKET: 219,
	/**
	* BACKSLASH
	*/
	BACKSLASH: 220,
	/**
	* CLOSE_SQUARE_BRACKET
	*/
	CLOSE_SQUARE_BRACKET: 221,
	/**
	* WIN_KEY
	*/
	WIN_KEY: 224,
	/**
	* MAC_FF_META
	*/
	MAC_FF_META: 224,
	/**
	* WIN_IME
	*/
	WIN_IME: 229
};
var ENTER_KEY = "Enter";
var ESC_KEY = "Escape";
//#endregion
//#region node_modules/@douyinfe/semi-foundation/lib/es/utils/isEnterPress.js
function isEnterPress(e) {
	return (0, import_get.default)(e, "key") === "Enter" ? true : false;
}
//#endregion
//#region node_modules/@douyinfe/semi-ui/lib/es/typography/copyable.js
var prefixCls$2 = cssClasses$4.PREFIX;
var Copyable = class extends React.PureComponent {
	constructor(props) {
		super(props);
		this.copy = (e) => {
			const { content, duration, onCopy } = this.props;
			const res = (0, import_copy_text_to_clipboard.default)(content);
			onCopy && onCopy(e, content, res);
			this.setCopied(content, duration);
		};
		this.setCopied = (item, timer) => {
			this.setState({
				copied: true,
				item
			});
			this._timeId = setTimeout(() => {
				this.resetCopied();
			}, timer * 1e3);
		};
		this.resetCopied = () => {
			if (this._timeId) {
				clearTimeout(this._timeId);
				this._timeId = null;
				this.setState({
					copied: false,
					item: ""
				});
			}
		};
		this.renderSuccessTip = () => {
			const { successTip } = this.props;
			if (typeof successTip !== "undefined") return successTip;
			return /*#__PURE__*/ React.createElement(LocaleConsumer, { componentName: "Typography" }, (locale) => /*#__PURE__*/ React.createElement("span", null, /*#__PURE__*/ React.createElement(IconComponent$1, null), locale.copied));
		};
		this.renderCopyIcon = () => {
			const { icon } = this.props;
			const copyProps = {
				role: "button",
				tabIndex: 0,
				onClick: this.copy,
				onKeyPress: (e) => isEnterPress(e) && this.copy(e)
			};
			const defaultIcon = /*#__PURE__*/ React.createElement("a", { className: `${prefixCls$2}-action-copy-icon` }, /*#__PURE__*/ React.createElement(IconComponent$3, Object.assign({ onClick: this.copy }, copyProps)));
			return /*#__PURE__*/ React.isValidElement(icon) ? /*#__PURE__*/ React.cloneElement(icon, copyProps) : defaultIcon;
		};
		this.state = {
			copied: false,
			item: ""
		};
	}
	componentWillUnmount() {
		if (this._timeId) {
			clearTimeout(this._timeId);
			this._timeId = null;
		}
	}
	render() {
		const { style, className, forwardRef, copyTip, render } = this.props;
		const { copied } = this.state;
		const finalCls = (0, import_classnames.default)(className, {
			[`${prefixCls$2}-action-copy`]: !copied,
			[`${prefixCls$2}-action-copied`]: copied
		});
		if (render) return render(copied, this.copy, this.props);
		return /*#__PURE__*/ React.createElement(LocaleConsumer, { componentName: "Typography" }, (locale) => /*#__PURE__*/ React.createElement("span", {
			style: Object.assign({ marginLeft: "4px" }, style),
			className: finalCls,
			ref: forwardRef
		}, copied ? this.renderSuccessTip() : /*#__PURE__*/ React.createElement(Tooltip, { content: typeof copyTip !== "undefined" ? copyTip : locale.copy }, this.renderCopyIcon())));
	}
};
Copyable.propTypes = {
	content: import_prop_types.default.string,
	onCopy: import_prop_types.default.func,
	successTip: import_prop_types.default.node,
	copyTip: import_prop_types.default.node,
	duration: import_prop_types.default.number,
	style: import_prop_types.default.object,
	className: import_prop_types.default.string,
	icon: import_prop_types.default.node
};
Copyable.defaultProps = {
	content: "",
	onCopy: noop,
	duration: 3,
	style: {},
	className: ""
};
//#endregion
//#region node_modules/@douyinfe/semi-foundation/lib/es/popover/constants.js
var cssClasses$2 = {
	PREFIX: `${BASE_CLASS_PREFIX$1}-popover`,
	ARROW: `${BASE_CLASS_PREFIX$1}-popover-icon-arrow`
};
var strings$2 = {
	POSITION_SET: [
		"top",
		"topLeft",
		"topRight",
		"left",
		"leftTop",
		"leftBottom",
		"right",
		"rightTop",
		"rightBottom",
		"bottom",
		"bottomLeft",
		"bottomRight",
		"leftTopOver",
		"rightTopOver"
	],
	TRIGGER_SET: [
		"hover",
		"focus",
		"click",
		"custom",
		"contextMenu"
	],
	DEFAULT_ARROW_STYLE: {
		borderOpacity: "1",
		backgroundColor: "var(--semi-color-bg-3)",
		borderColor: "var(--semi-color-border)"
	}
};
var numbers = {
	ARROW_BOUNDING: Object.assign(Object.assign({}, numbers$1.ARROW_BOUNDING), {
		offsetY: 6,
		offsetX: 0,
		height: 8
	}),
	SPACING: 4,
	SPACING_WITH_ARROW: 10,
	DEFAULT_Z_INDEX: 1030
};
//#endregion
//#region node_modules/@douyinfe/semi-ui/lib/es/popover/Arrow.js
var __rest$6 = function(s, e) {
	var t = {};
	for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	if (s != null && typeof Object.getOwnPropertySymbols === "function") {
		for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	}
	return t;
};
var Arrow = function() {
	let props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
	const { position = "", className, arrowStyle, popStyle } = props, rest = __rest$6(props, [
		"position",
		"className",
		"arrowStyle",
		"popStyle"
	]);
	const isVertical = position.indexOf("top") === 0 || position.indexOf("bottom") === 0;
	const cls = (0, import_classnames.default)(className, cssClasses$2.ARROW);
	const borderOpacity = (0, import_get.default)(arrowStyle, "borderOpacity");
	const bgColor = (0, import_get.default)(arrowStyle, "backgroundColor", (0, import_get.default)(popStyle, "backgroundColor"));
	const borderColor = (0, import_get.default)(arrowStyle, "borderColor", (0, import_get.default)(popStyle, "borderColor"));
	const wrapProps = Object.assign(Object.assign({}, rest), {
		width: numbers.ARROW_BOUNDING.width,
		height: numbers.ARROW_BOUNDING.height,
		xmlns: "http://www.w3.org/2000/svg",
		className: cls
	});
	return isVertical ? /*#__PURE__*/ React.createElement("svg", Object.assign({}, wrapProps), /*#__PURE__*/ React.createElement("path", {
		d: "M0 0.5L0 1.5C4 1.5, 5.5 3, 7.5 5S10,8 12,8S14.5 7, 16.5 5S20,1.5 24,1.5L24 0.5L0 0.5z",
		style: {
			fill: borderColor,
			opacity: borderOpacity
		}
	}), /*#__PURE__*/ React.createElement("path", {
		d: "M0 0L0 1C4 1, 5.5 2, 7.5 4S10,7 12,7S14.5  6, 16.5 4S20,1 24,1L24 0L0 0z",
		style: { fill: bgColor }
	})) : /*#__PURE__*/ React.createElement("svg", Object.assign({}, wrapProps), /*#__PURE__*/ React.createElement("path", {
		d: "M0.5 0L1.5 0C1.5 4, 3 5.5, 5 7.5S8,10 8,12S7 14.5, 5 16.5S1.5,20 1.5,24L0.5 24L0.5 0z",
		style: {
			fill: borderColor,
			opacity: borderOpacity
		}
	}), /*#__PURE__*/ React.createElement("path", {
		d: "M0 0L1 0C1 4, 2 5.5, 4 7.5S7,10 7,12S6 14.5, 4 16.5S1,20 1,24L0 24L0 0z",
		style: { fill: bgColor }
	}));
};
//#endregion
//#region node_modules/@douyinfe/semi-ui/lib/es/popover/index.js
var __rest$5 = function(s, e) {
	var t = {};
	for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	if (s != null && typeof Object.getOwnPropertySymbols === "function") {
		for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	}
	return t;
};
var positionSet = strings$2.POSITION_SET;
var triggerSet = strings$2.TRIGGER_SET;
var Popover = class extends React.PureComponent {
	constructor(props) {
		super(props);
		/**
		* focus on tooltip trigger
		*/
		this.focusTrigger = () => {
			var _a;
			(_a = this.tooltipRef.current) === null || _a === void 0 || _a.focusTrigger();
		};
		this.renderPopCard = (_ref) => {
			let { initialFocusRef } = _ref;
			const { content, contentClassName, prefixCls } = this.props;
			const { direction } = this.context;
			const popCardCls = (0, import_classnames.default)(prefixCls, contentClassName, { [`${prefixCls}-rtl`]: direction === "rtl" });
			const contentNode = this.renderContentNode({
				initialFocusRef,
				content
			});
			return /*#__PURE__*/ React.createElement("div", { className: popCardCls }, /*#__PURE__*/ React.createElement("div", { className: `${prefixCls}-content` }, contentNode));
		};
		this.renderContentNode = (props) => {
			const { initialFocusRef, content } = props;
			const contentProps = { initialFocusRef };
			return !(0, import_isFunction.default)(content) ? content : content(contentProps);
		};
		this.tooltipRef = /*#__PURE__*/ React.createRef();
	}
	render() {
		const _a = this.props, { children, prefixCls, showArrow, arrowStyle = {}, arrowBounding, position, style, trigger } = _a, attr = __rest$5(_a, [
			"children",
			"prefixCls",
			"showArrow",
			"arrowStyle",
			"arrowBounding",
			"position",
			"style",
			"trigger"
		]);
		let { spacing } = this.props;
		const arrowProps = {
			position,
			className: "",
			popStyle: style,
			arrowStyle
		};
		const arrow = showArrow ? /*#__PURE__*/ React.createElement(Arrow, Object.assign({}, arrowProps)) : false;
		if (isNullOrUndefined(spacing)) spacing = showArrow ? numbers.SPACING_WITH_ARROW : numbers.SPACING;
		const role = trigger === "click" || trigger === "custom" ? "dialog" : "tooltip";
		return /*#__PURE__*/ React.createElement(Tooltip, Object.assign({
			guardFocus: true,
			ref: this.tooltipRef
		}, attr, {
			trigger,
			position,
			style,
			content: this.renderPopCard,
			prefixCls,
			spacing,
			showArrow: arrow,
			arrowBounding,
			role
		}), children);
	}
};
Popover.contextType = ConfigContext;
Popover.propTypes = {
	children: import_prop_types.default.node,
	content: import_prop_types.default.oneOfType([import_prop_types.default.node, import_prop_types.default.func]),
	visible: import_prop_types.default.bool,
	autoAdjustOverflow: import_prop_types.default.bool,
	motion: import_prop_types.default.bool,
	position: import_prop_types.default.oneOf(positionSet),
	margin: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.object]),
	mouseEnterDelay: import_prop_types.default.number,
	mouseLeaveDelay: import_prop_types.default.number,
	trigger: import_prop_types.default.oneOf(triggerSet).isRequired,
	contentClassName: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.array]),
	onVisibleChange: import_prop_types.default.func,
	onClickOutSide: import_prop_types.default.func,
	style: import_prop_types.default.object,
	spacing: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.object]),
	zIndex: import_prop_types.default.number,
	showArrow: import_prop_types.default.bool,
	arrowStyle: import_prop_types.default.shape({
		borderColor: import_prop_types.default.string,
		backgroundColor: import_prop_types.default.string,
		borderOpacity: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.number])
	}),
	arrowPointAtCenter: import_prop_types.default.bool,
	arrowBounding: import_prop_types.default.object,
	prefixCls: import_prop_types.default.string,
	guardFocus: import_prop_types.default.bool,
	disableArrowKeyDown: import_prop_types.default.bool,
	condition: import_prop_types.default.bool
};
Popover.__SemiComponentName__ = "Popover";
Popover.defaultProps = getDefaultPropsFromGlobalConfig(Popover.__SemiComponentName__, {
	arrowBounding: numbers.ARROW_BOUNDING,
	showArrow: false,
	autoAdjustOverflow: true,
	zIndex: numbers.DEFAULT_Z_INDEX,
	motion: true,
	trigger: "hover",
	cancelText: "No",
	okText: "Yes",
	position: "bottom",
	prefixCls: cssClasses$2.PREFIX,
	onClickOutSide: import_noop.default,
	onEscKeyDown: import_noop.default,
	closeOnEsc: true,
	returnFocusOnClose: true,
	guardFocus: true,
	disableFocusListener: true
});
//#endregion
//#region node_modules/@douyinfe/semi-ui/lib/es/typography/util.js
/**
* The logic of JS for text truncation is referenced from antd typography
* https://github.com/ant-design/ant-design/blob/master/components/typography/util.tsx
*
* For more thinking and analysis about this function, please refer to Feishu document
* https://bytedance.feishu.cn/docs/doccnqovjjyoKm2U5O13bj30aTh
*/
var ellipsisContainer;
function pxToNumber(value) {
	if (!value) return 0;
	const match = value.match(/^\d*(\.\d*)?/);
	return match ? Number(match[0]) : 0;
}
function styleToString(style) {
	return Array.prototype.slice.apply(style).map((name) => `${name}: ${style.getPropertyValue(name)};`).join("");
}
var getRenderText = function(originEle, rows) {
	let content = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
	let fixedContent = arguments.length > 3 ? arguments[3] : void 0;
	let ellipsisStr = arguments.length > 4 ? arguments[4] : void 0;
	let suffix = arguments.length > 5 ? arguments[5] : void 0;
	let ellipsisPos = arguments.length > 6 ? arguments[6] : void 0;
	let isStrong = arguments.length > 7 ? arguments[7] : void 0;
	if (content.length === 0) return "";
	if (!ellipsisContainer) {
		ellipsisContainer = document.createElement("div");
		ellipsisContainer.setAttribute("aria-hidden", "true");
		document.body.appendChild(ellipsisContainer);
	}
	const originStyle = window.getComputedStyle(originEle);
	const originCSS = styleToString(originStyle);
	const lineHeight = pxToNumber(originStyle.lineHeight);
	const maxHeight = Math.round(lineHeight * (rows + 1) + pxToNumber(originStyle.paddingTop) + pxToNumber(originStyle.paddingBottom));
	ellipsisContainer.setAttribute("style", originCSS);
	ellipsisContainer.style.position = "fixed";
	ellipsisContainer.style.left = "0";
	if (originStyle.getPropertyValue("width") === "auto" && originEle.offsetWidth) ellipsisContainer.style.width = `${originEle.offsetWidth}px`;
	ellipsisContainer.style.height = "auto";
	ellipsisContainer.style.top = "-999999px";
	ellipsisContainer.style.zIndex = "-1000";
	isStrong && (ellipsisContainer.style.fontWeight = "600");
	ellipsisContainer.style.textOverflow = "clip";
	ellipsisContainer.style.webkitLineClamp = "none";
	ellipsisContainer.innerHTML = "";
	function inRange() {
		const widthInRange = ellipsisContainer.scrollWidth <= ellipsisContainer.offsetWidth;
		const heightInRange = ellipsisContainer.scrollHeight < maxHeight;
		return rows === 1 ? widthInRange && heightInRange : heightInRange;
	}
	const ellipsisContentHolder = document.createElement("span");
	const textNode = document.createTextNode(content);
	ellipsisContentHolder.appendChild(textNode);
	if (suffix.length > 0) {
		const ellipsisTextNode = document.createTextNode(suffix);
		ellipsisContentHolder.appendChild(ellipsisTextNode);
	}
	ellipsisContainer.appendChild(ellipsisContentHolder);
	Object.values((0, import_omit.default)(fixedContent, "expand")).map((node) => node && ellipsisContainer.appendChild(node.cloneNode(true)));
	function appendExpandNode() {
		ellipsisContainer.innerHTML = "";
		ellipsisContainer.appendChild(ellipsisContentHolder);
		Object.values(fixedContent).map((node) => node && ellipsisContainer.appendChild(node.cloneNode(true)));
	}
	function getCurrentText(text, pos) {
		const end = text.length;
		if (!pos) return ellipsisStr;
		if (ellipsisPos === "end") return text.slice(0, pos) + ellipsisStr;
		return text.slice(0, pos) + ellipsisStr + text.slice(end - pos, end);
	}
	function measureText(textNode, fullText) {
		let startLoc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
		let endLoc = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : fullText.length;
		let lastSuccessLoc = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
		const midLoc = Math.floor((startLoc + endLoc) / 2);
		textNode.textContent = getCurrentText(fullText, midLoc);
		if (startLoc >= endLoc - 1 && endLoc > 0) for (let step = endLoc; step >= startLoc; step -= 1) {
			const currentStepText = getCurrentText(fullText, step);
			textNode.textContent = currentStepText;
			if (inRange()) return currentStepText;
		}
		else if (endLoc === 0) return ellipsisStr;
		if (inRange()) return measureText(textNode, fullText, midLoc, endLoc, midLoc);
		return measureText(textNode, fullText, startLoc, midLoc, lastSuccessLoc);
	}
	let resText = content;
	if (!inRange()) {
		appendExpandNode();
		resText = measureText(textNode, content, 0, ellipsisPos === "middle" ? Math.floor(content.length / 2) : content.length);
	}
	ellipsisContainer.innerHTML = "";
	return resText;
};
//#endregion
//#region node_modules/@douyinfe/semi-ui/lib/es/typography/context.js
var SizeContext = /*#__PURE__*/ React.createContext("normal");
//#endregion
//#region node_modules/@douyinfe/semi-ui/lib/es/resizeObserver/index.js
var ObserverProperty;
(function(ObserverProperty) {
	ObserverProperty["Width"] = "width";
	ObserverProperty["Height"] = "height";
	ObserverProperty["All"] = "all";
})(ObserverProperty || (ObserverProperty = {}));
var ReactResizeObserver = class extends BaseComponent {
	constructor(props) {
		var _this;
		super(props);
		_this = this;
		this.formerPropertyValue = /* @__PURE__ */ new Map();
		this.getElement = () => {
			try {
				const node = this.childNode || this;
				return resolveDOM(node) || (node instanceof Element ? node : null);
			} catch (error) {
				return null;
			}
		};
		this.handleResizeEventTriggered = (entries) => {
			var _a, _b, _c, _d;
			if (this.props.observerProperty === ObserverProperty.All) (_b = (_a = this.props).onResize) === null || _b === void 0 || _b.call(_a, entries);
			else {
				const finalEntries = [];
				for (const entry of entries) if (this.formerPropertyValue.has(entry.target)) {
					if (entry.contentRect[this.props.observerProperty] !== this.formerPropertyValue.get(entry.target)) {
						this.formerPropertyValue.set(entry.target, entry.contentRect[this.props.observerProperty]);
						finalEntries.push(entry);
					}
				} else {
					this.formerPropertyValue.set(entry.target, entry.contentRect[this.props.observerProperty]);
					finalEntries.push(entry);
				}
				if (finalEntries.length > 0) (_d = (_c = this.props).onResize) === null || _d === void 0 || _d.call(_c, finalEntries);
			}
		};
		this.observeElement = function() {
			let force = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
			const element = _this.getElement();
			if (!_this.observer) _this.observer = new ResizeObserver(_this.handleResizeEventTriggered);
			if (!(element && element instanceof Element)) {
				_this.observer.disconnect();
				return;
			}
			if (element === _this.element && !force) return;
			else {
				_this.observer.disconnect();
				_this.element = element;
			}
			_this.observer.observe(element);
			if (_this.props.observeParent && element.parentNode && element.parentNode.ownerDocument && element.parentNode.ownerDocument.defaultView && element.parentNode instanceof element.parentNode.ownerDocument.defaultView.HTMLElement) {
				_this._parentNode = element.parentNode;
				_this.observer.observe(_this._parentNode);
			}
		};
		this.mergeRef = (ref, node) => {
			this.childNode = node;
			if (typeof ref === "function") ref(node);
			else if (typeof ref === "object" && ref && "current" in ref) ref.current = node;
		};
		if (globalThis["ResizeObserver"]) this.observer = new ResizeObserver(this.handleResizeEventTriggered);
	}
	componentDidMount() {
		var _a;
		(_a = this.observeElement) === null || _a === void 0 || _a.call(this);
	}
	componentDidUpdate(prevProps) {
		var _a;
		(_a = this.observeElement) === null || _a === void 0 || _a.call(this, this.props.observeParent !== prevProps.observeParent);
	}
	componentWillUnmount() {
		if (this.observer) {
			this.observer.disconnect();
			this.observer = null;
			this.element = null;
		}
	}
	render() {
		const child = React.Children.only(this.props.children);
		const ref = getRef(child);
		return /*#__PURE__*/ React.cloneElement(child, { ref: (node) => this.mergeRef(ref, node) });
	}
};
ReactResizeObserver.propTypes = {
	onResize: import_prop_types.default.func,
	observeParent: import_prop_types.default.bool,
	observerProperty: import_prop_types.default.string,
	delayTick: import_prop_types.default.number
};
ReactResizeObserver.defaultProps = {
	onResize: () => {},
	observeParent: false,
	observerProperty: "all",
	delayTick: 0
};
//#endregion
//#region node_modules/@douyinfe/semi-ui/lib/es/typography/base.js
var __awaiter = function(thisArg, _arguments, P, generator) {
	function adopt(value) {
		return value instanceof P ? value : new P(function(resolve) {
			resolve(value);
		});
	}
	return new (P || (P = Promise))(function(resolve, reject) {
		function fulfilled(value) {
			try {
				step(generator.next(value));
			} catch (e) {
				reject(e);
			}
		}
		function rejected(value) {
			try {
				step(generator["throw"](value));
			} catch (e) {
				reject(e);
			}
		}
		function step(result) {
			result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
		}
		step((generator = generator.apply(thisArg, _arguments || [])).next());
	});
};
var __rest$4 = function(s, e) {
	var t = {};
	for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	if (s != null && typeof Object.getOwnPropertySymbols === "function") {
		for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	}
	return t;
};
var prefixCls$1 = cssClasses$4.PREFIX;
var ELLIPSIS_STR = "...";
var wrapperDecorations = (props, content) => {
	const { mark, code, underline, strong, link, disabled } = props;
	let wrapped = content;
	const wrap = (isNeeded, tag) => {
		let wrapProps = {};
		if (!isNeeded) return;
		if (typeof isNeeded === "object") wrapProps = Object.assign({}, isNeeded);
		wrapped = /*#__PURE__*/ React.createElement(tag, wrapProps, wrapped);
	};
	wrap(mark, "mark");
	wrap(code, "code");
	wrap(underline && !link, "u");
	wrap(strong, "strong");
	wrap(props.delete, "del");
	wrap(link, disabled ? "span" : "a");
	return wrapped;
};
var Base = class extends Component {
	constructor(props) {
		super(props);
		this.observerTakingEffect = false;
		this.onResize = (entries) => __awaiter(this, void 0, void 0, function* () {
			if (this.rafId) window.cancelAnimationFrame(this.rafId);
			return new Promise((resolve) => {
				this.rafId = window.requestAnimationFrame(() => __awaiter(this, void 0, void 0, function* () {
					yield this.getEllipsisState();
					resolve();
				}));
			});
		});
		this.canUseCSSEllipsis = () => {
			const { copyable } = this.props;
			const { expandable, expandText, pos, suffix } = this.getEllipsisOpt();
			return !expandable && (0, import_isUndefined.default)(expandText) && !copyable && pos === "end" && !suffix.length;
		};
		/**
		* whether truncated
		*  rows < = 1 if there is overflow content, return true
		*  rows > 1 if there is overflow height, return true
		* @param {Number} rows
		* @returns {Boolean}
		*/
		this.shouldTruncated = (rows) => {
			if (!rows || rows < 1) return false;
			return rows <= 1 ? this.compareSingleRow() : this.wrapperRef.current.scrollHeight > this.wrapperRef.current.offsetHeight;
		};
		/**
		* 通过将 content 给到 Range 对象，借助 Range 的 getBoundingClientRect 拿到 content 的准确 width
		* 不受 css ellipsis 与否的影响
		* By giving the content to the Range object, get the exact width of the content with the help of Range's getBoundingClientRect
		* Not affected by css ellipsis or not
		* https://github.com/DouyinFE/semi-design/issues/1731
		* https://github.com/DouyinFE/semi-design/issues/2350
		*/
		this.compareSingleRow = () => {
			if (!(document && document.createRange)) return false;
			const containerNode = this.wrapperRef.current;
			const containerRectWidth = containerNode.getBoundingClientRect().width;
			const computedStyle = window.getComputedStyle(containerNode);
			const paddingLeft = parseFloat(computedStyle.paddingLeft) || 0;
			const paddingRight = parseFloat(computedStyle.paddingRight) || 0;
			const borderLeft = parseFloat(computedStyle.borderLeftWidth) || 0;
			const borderRight = parseFloat(computedStyle.borderRightWidth) || 0;
			const contentAreaWidth = Math.max(0, containerRectWidth - paddingLeft - paddingRight - borderLeft - borderRight);
			const childNodes = Array.from(containerNode.childNodes);
			const range = document.createRange();
			const contentWidth = childNodes.reduce((acc, node) => {
				var _a;
				range.selectNodeContents(node);
				return acc + ((_a = range.getBoundingClientRect().width) !== null && _a !== void 0 ? _a : 0);
			}, 0);
			range.detach();
			return contentWidth > contentAreaWidth;
		};
		this.showTooltip = () => {
			var _a, _b;
			const { isOverflowed, isTruncated, expanded } = this.state;
			const { showTooltip, expandable, expandText } = this.getEllipsisOpt();
			const canUseCSSEllipsis = this.canUseCSSEllipsis();
			const overflowed = !expanded && (canUseCSSEllipsis ? isOverflowed : isTruncated);
			const show = !expandable && (0, import_isUndefined.default)(expandText) && overflowed && showTooltip;
			if (!show) return show;
			const defaultOpts = { type: "tooltip" };
			if (typeof showTooltip === "object") {
				if (showTooltip.type && showTooltip.type.toLowerCase() === "popover") return (0, import_merge.default)({ opts: { showArrow: true } }, showTooltip, { opts: { className: (0, import_classnames.default)({
					[`${prefixCls$1}-ellipsis-popover`]: true,
					[(_a = showTooltip === null || showTooltip === void 0 ? void 0 : showTooltip.opts) === null || _a === void 0 ? void 0 : _a.className]: Boolean((_b = showTooltip === null || showTooltip === void 0 ? void 0 : showTooltip.opts) === null || _b === void 0 ? void 0 : _b.className)
				}) } });
				return Object.assign(Object.assign({}, defaultOpts), showTooltip);
			}
			return defaultOpts;
		};
		this.onHover = () => {
			if (this.canUseCSSEllipsis()) {
				const { rows, suffix, pos } = this.getEllipsisOpt();
				const updateOverflow = this.shouldTruncated(rows);
				this.setState({
					isOverflowed: updateOverflow,
					isTruncated: false
				});
				return;
			}
		};
		this.getEllipsisState = () => __awaiter(this, void 0, void 0, function* () {
			const { rows, suffix, pos, showTooltip } = this.getEllipsisOpt();
			const { children, strong } = this.props;
			if (!this.wrapperRef || !this.wrapperRef.current) {
				yield this.onResize();
				return;
			}
			const { expanded } = this.state;
			if (this.canUseCSSEllipsis()) {
				if (showTooltip) {
					const updateOverflow = this.shouldTruncated(rows);
					return new Promise((resolve) => {
						this.setState({
							isOverflowed: updateOverflow,
							isTruncated: false
						}, resolve);
					});
				}
				return;
			}
			if ((0, import_isNull.default)(children)) return new Promise((resolve) => {
				this.setState({
					isTruncated: false,
					isOverflowed: false
				}, resolve);
			});
			warning("children" in this.props && typeof children !== "string", "[Semi Typography] Only children with pure text could be used with ellipsis at this moment.");
			if (!rows || rows < 0 || expanded) return;
			const extraNode = {
				expand: this.expandRef.current,
				copy: this.copyRef && this.copyRef.current
			};
			const realChildren = Array.isArray(children) ? children.join("") : String(children);
			const content = getRenderText(this.wrapperRef.current, rows, realChildren, extraNode, ELLIPSIS_STR, suffix, pos, strong);
			return new Promise((resolve) => {
				this.setState({
					isOverflowed: false,
					ellipsisContent: content,
					isTruncated: realChildren !== content
				}, resolve);
			});
		});
		/**
		* Triggered when the fold button is clicked to save the latest expanded state
		* @param {Event} e
		*/
		this.toggleOverflow = (e) => {
			const { onExpand, expandable, collapsible } = this.getEllipsisOpt();
			const { expanded } = this.state;
			onExpand && onExpand(!expanded, e);
			if (expandable && !expanded || collapsible && expanded) this.setState({ expanded: !expanded });
		};
		this.getEllipsisOpt = () => {
			const { ellipsis } = this.props;
			if (!ellipsis) return {};
			return Object.assign({
				rows: 1,
				expandable: false,
				pos: "end",
				suffix: "",
				showTooltip: false,
				collapsible: false,
				expandText: ellipsis.expandable ? this.expandStr : void 0,
				collapseText: ellipsis.collapsible ? this.collapseStr : void 0
			}, typeof ellipsis === "object" ? ellipsis : null);
		};
		this.renderExpandable = () => {
			const { expanded, isTruncated } = this.state;
			if (!isTruncated) return null;
			const { expandText, expandable, collapseText, collapsible } = this.getEllipsisOpt();
			const noExpandText = !expandable && (0, import_isUndefined.default)(expandText);
			const noCollapseText = !collapsible && (0, import_isUndefined.default)(collapseText);
			let text;
			if (!expanded && !noExpandText) text = expandText;
			else if (expanded && !noCollapseText) text = collapseText;
			if (!noExpandText || !noCollapseText) return /*#__PURE__*/ React.createElement("a", {
				role: "button",
				tabIndex: 0,
				className: `${prefixCls$1}-ellipsis-expand`,
				key: "expand",
				ref: this.expandRef,
				"aria-label": text,
				onClick: this.toggleOverflow,
				onKeyPress: (e) => isEnterPress(e) && this.toggleOverflow(e)
			}, text);
			return null;
		};
		/**
		* 获取文本的缩略class和style
		*
		* 截断类型：
		*  - 当设置中间截断（pos='middle')、可展开（expandable)、有后缀（suffix 非空）、可复制（copyable），启用 JS 截断策略
		*  - 非以上场景，启用 CSS 截断策略
		* 相关变量
		*  props:
		*      - ellipsis:
		*          - rows
		*          - expandable
		*          - pos
		*          - suffix
		*  state:
		*      - isOverflowed，文本是否处于overflow状态
		*      - expanded，文本是否处于折叠状态
		*      - isTruncated，文本是否被js截断
		*
		* Get the abbreviated class and style of the text
		*
		* Truncation type:
		*  -When setting middle ellipsis (pos='middle')、expandable、suffix is not empty、copyable, the JS ellipsis strategy is enabled
		*  -Otherwise, enable the CSS ellipsis strategy
		* related variables
		*  props:
		*      -ellipsis:
		*          -rows
		*          -expandable
		*          -pos
		*          -suffix
		*  state:
		*      -isOverflowed, whether the text is in an overflow state
		*      -expanded, whether the text is in a collapsed state
		*      -isTruncated, whether the text is truncated by js
		* @returns {Object}
		*/
		this.getEllipsisStyle = () => {
			const { ellipsis, component } = this.props;
			if (!ellipsis) return {
				ellipsisCls: "",
				ellipsisStyle: {}
			};
			const { rows } = this.getEllipsisOpt();
			const { expanded } = this.state;
			const useCSS = !expanded && this.canUseCSSEllipsis();
			return {
				ellipsisCls: (0, import_classnames.default)({
					[`${prefixCls$1}-ellipsis`]: true,
					[`${prefixCls$1}-ellipsis-single-line`]: rows === 1,
					[`${prefixCls$1}-ellipsis-multiple-line`]: rows > 1,
					[`${prefixCls$1}-ellipsis-multiple-line-text`]: rows > 1 && component === "span",
					[`${prefixCls$1}-ellipsis-overflow-ellipsis`]: rows === 1 && useCSS,
					[`${prefixCls$1}-ellipsis-overflow-ellipsis-text`]: rows === 1 && useCSS && component === "span"
				}),
				ellipsisStyle: useCSS && rows > 1 ? { WebkitLineClamp: rows } : {}
			};
		};
		this.renderEllipsisText = (opt) => {
			const { suffix } = opt;
			const { children } = this.props;
			const { isTruncated, expanded, ellipsisContent } = this.state;
			if (expanded || !isTruncated) return /*#__PURE__*/ React.createElement("span", { onMouseEnter: this.onHover }, children, suffix && suffix.length ? suffix : null);
			return /*#__PURE__*/ React.createElement("span", { onMouseEnter: this.onHover }, ellipsisContent, suffix);
		};
		this.state = {
			editable: false,
			copied: false,
			isOverflowed: false,
			ellipsisContent: props.children,
			expanded: false,
			isTruncated: false,
			prevChildren: null
		};
		this.wrapperRef = /*#__PURE__*/ React.createRef();
		this.expandRef = /*#__PURE__*/ React.createRef();
		this.copyRef = /*#__PURE__*/ React.createRef();
	}
	componentDidMount() {
		if (this.props.ellipsis) this.onResize().then(() => runAfterTicks(() => this.observerTakingEffect = true, 1));
	}
	static getDerivedStateFromProps(props, prevState) {
		const { prevChildren } = prevState;
		const newState = {};
		newState.prevChildren = props.children;
		if (props.ellipsis && prevChildren !== props.children) {
			newState.isOverflowed = false;
			newState.ellipsisContent = props.children;
			newState.expanded = false;
			newState.isTruncated = true;
		}
		return newState;
	}
	componentDidUpdate(prevProps) {
		if (this.props.children !== prevProps.children) {
			this.forceUpdate();
			if (this.props.ellipsis) this.onResize();
		}
	}
	componentWillUnmount() {
		if (this.rafId) window.cancelAnimationFrame(this.rafId);
	}
	renderOperations() {
		return /*#__PURE__*/ React.createElement(React.Fragment, null, this.renderExpandable(), this.renderCopy());
	}
	renderCopy() {
		var _a;
		const { copyable, children } = this.props;
		if (!copyable) return null;
		const willCopyContent = (_a = copyable === null || copyable === void 0 ? void 0 : copyable.content) !== null && _a !== void 0 ? _a : children;
		let copyContent;
		let hasObject = false;
		if (Array.isArray(willCopyContent)) {
			copyContent = "";
			willCopyContent.forEach((value) => {
				if (typeof value === "object") hasObject = true;
				copyContent += String(value);
			});
		} else if (typeof willCopyContent !== "object") copyContent = String(willCopyContent);
		else {
			hasObject = true;
			copyContent = String(willCopyContent);
		}
		warning(hasObject, "Content to be copied in Typography is a object, it will case a [object Object] mistake when copy to clipboard.");
		const copyConfig = Object.assign({
			content: copyContent,
			duration: 3
		}, typeof copyable === "object" ? copyable : null);
		return /*#__PURE__*/ React.createElement(Copyable, Object.assign({}, copyConfig, { forwardRef: this.copyRef }));
	}
	renderIcon() {
		const { icon, size } = this.props;
		const realSize = size === "inherit" ? this.context : size;
		if (!icon) return null;
		const iconSize = realSize === "small" ? "small" : "default";
		return /*#__PURE__*/ React.createElement("span", {
			className: `${prefixCls$1}-icon`,
			"x-semi-prop": "icon"
		}, isSemiIcon(icon) ? /*#__PURE__*/ React.cloneElement(icon, { size: iconSize }) : icon);
	}
	renderContent() {
		const _a = this.props, { component, children, className, type, spacing, disabled, style, ellipsis, icon, size, link, heading, weight } = _a, rest = __rest$4(_a, [
			"component",
			"children",
			"className",
			"type",
			"spacing",
			"disabled",
			"style",
			"ellipsis",
			"icon",
			"size",
			"link",
			"heading",
			"weight"
		]);
		const textProps = (0, import_omit.default)(rest, [
			"strong",
			"editable",
			"mark",
			"copyable",
			"underline",
			"code",
			"delete"
		]);
		const realSize = size === "inherit" ? this.context : size;
		const iconNode = this.renderIcon();
		const ellipsisOpt = this.getEllipsisOpt();
		const { ellipsisCls, ellipsisStyle } = this.getEllipsisStyle();
		let textNode = ellipsis ? this.renderEllipsisText(ellipsisOpt) : children;
		const linkCls = (0, import_classnames.default)({
			[`${prefixCls$1}-link-text`]: link,
			[`${prefixCls$1}-link-underline`]: this.props.underline && link
		});
		textNode = wrapperDecorations(this.props, /*#__PURE__*/ React.createElement(React.Fragment, null, iconNode, this.props.link ? /*#__PURE__*/ React.createElement("span", { className: linkCls }, textNode) : textNode));
		const isHeader = (0, import_isString.default)(heading) && /^h[1-6]$/.test(heading);
		const wrapperCls = (0, import_classnames.default)(className, ellipsisCls, {
			[`${prefixCls$1}-${type}`]: type && !link,
			[`${prefixCls$1}-${realSize}`]: realSize,
			[`${prefixCls$1}-link`]: link,
			[`${prefixCls$1}-disabled`]: disabled,
			[`${prefixCls$1}-${spacing}`]: spacing,
			[`${prefixCls$1}-${heading}`]: isHeader,
			[`${prefixCls$1}-${heading}-weight-${weight}`]: isHeader && weight && isNaN(Number(weight))
		});
		const textStyle = Object.assign(Object.assign({}, isNaN(Number(weight)) ? {} : { fontWeight: weight }), style);
		return /*#__PURE__*/ React.createElement(Typography$1, Object.assign({
			tooltipRef: this.wrapperRef,
			className: wrapperCls,
			style: Object.assign(Object.assign({}, textStyle), ellipsisStyle),
			component,
			forwardRef: this.wrapperRef
		}, textProps), textNode, this.renderOperations());
	}
	renderTipWrapper() {
		const { children } = this.props;
		const showTooltip = this.showTooltip();
		const content = this.renderContent();
		if (showTooltip) {
			const { type, opts, renderTooltip } = showTooltip;
			if ((0, import_isFunction.default)(renderTooltip)) return renderTooltip(children, content);
			else if (type.toLowerCase() === "popover") return /*#__PURE__*/ React.createElement(Popover, Object.assign({
				content: children,
				position: "top"
			}, opts), content);
			return /*#__PURE__*/ React.createElement(Tooltip, Object.assign({
				content: children,
				position: "top"
			}, opts), content);
		} else return content;
	}
	render() {
		var _this = this;
		const { size } = this.props;
		const realSize = size === "inherit" ? this.context : size;
		const content = /*#__PURE__*/ React.createElement(SizeContext.Provider, { value: realSize }, /*#__PURE__*/ React.createElement(LocaleConsumer, { componentName: "Typography" }, (locale) => {
			this.expandStr = locale.expand;
			this.collapseStr = locale.collapse;
			return this.renderTipWrapper();
		}));
		if (this.props.ellipsis) return /*#__PURE__*/ React.createElement(ReactResizeObserver, {
			onResize: function() {
				if (_this.observerTakingEffect) _this.onResize(...arguments);
			},
			observeParent: true,
			observerProperty: ObserverProperty.Width
		}, content);
		return content;
	}
};
Base.propTypes = {
	children: import_prop_types.default.node,
	copyable: import_prop_types.default.oneOfType([import_prop_types.default.shape({
		text: import_prop_types.default.string,
		onCopy: import_prop_types.default.func,
		successTip: import_prop_types.default.node,
		copyTip: import_prop_types.default.node
	}), import_prop_types.default.bool]),
	delete: import_prop_types.default.bool,
	disabled: import_prop_types.default.bool,
	ellipsis: import_prop_types.default.oneOfType([import_prop_types.default.shape({
		rows: import_prop_types.default.number,
		expandable: import_prop_types.default.bool,
		expandText: import_prop_types.default.string,
		onExpand: import_prop_types.default.func,
		suffix: import_prop_types.default.string,
		showTooltip: import_prop_types.default.oneOfType([import_prop_types.default.shape({
			type: import_prop_types.default.string,
			opts: import_prop_types.default.object
		}), import_prop_types.default.bool]),
		collapsible: import_prop_types.default.bool,
		collapseText: import_prop_types.default.string,
		pos: import_prop_types.default.oneOf(["end", "middle"])
	}), import_prop_types.default.bool]),
	mark: import_prop_types.default.bool,
	underline: import_prop_types.default.bool,
	link: import_prop_types.default.oneOfType([import_prop_types.default.object, import_prop_types.default.bool]),
	spacing: import_prop_types.default.oneOf(strings$4.SPACING),
	strong: import_prop_types.default.bool,
	size: import_prop_types.default.oneOf(strings$4.SIZE),
	type: import_prop_types.default.oneOf(strings$4.TYPE),
	style: import_prop_types.default.object,
	className: import_prop_types.default.string,
	icon: import_prop_types.default.oneOfType([import_prop_types.default.node, import_prop_types.default.string]),
	heading: import_prop_types.default.string,
	component: import_prop_types.default.string
};
Base.defaultProps = {
	children: null,
	copyable: false,
	delete: false,
	disabled: false,
	ellipsis: false,
	icon: "",
	mark: false,
	underline: false,
	strong: false,
	link: false,
	type: "primary",
	spacing: "normal",
	size: "normal",
	style: {},
	className: ""
};
Base.contextType = SizeContext;
//#endregion
//#region node_modules/@douyinfe/semi-ui/lib/es/typography/text.js
var Text = class extends PureComponent {
	render() {
		return /*#__PURE__*/ React.createElement(Base, Object.assign({ component: "span" }, this.props));
	}
};
Text.propTypes = {
	copyable: import_prop_types.default.oneOfType([import_prop_types.default.object, import_prop_types.default.bool]),
	delete: import_prop_types.default.bool,
	disabled: import_prop_types.default.bool,
	icon: import_prop_types.default.oneOfType([import_prop_types.default.node, import_prop_types.default.string]),
	ellipsis: import_prop_types.default.oneOfType([import_prop_types.default.object, import_prop_types.default.bool]),
	mark: import_prop_types.default.bool,
	underline: import_prop_types.default.bool,
	link: import_prop_types.default.oneOfType([import_prop_types.default.object, import_prop_types.default.bool]),
	strong: import_prop_types.default.bool,
	type: import_prop_types.default.oneOf(strings$4.TYPE),
	size: import_prop_types.default.oneOf(strings$4.SIZE),
	style: import_prop_types.default.object,
	className: import_prop_types.default.string,
	code: import_prop_types.default.bool,
	component: import_prop_types.default.string,
	weight: import_prop_types.default.number
};
Text.defaultProps = {
	copyable: false,
	delete: false,
	disabled: false,
	icon: "",
	ellipsis: false,
	mark: false,
	underline: false,
	strong: false,
	link: false,
	type: "primary",
	style: {},
	size: "normal",
	className: ""
};
//#endregion
//#region node_modules/@douyinfe/semi-ui/lib/es/typography/title.js
var __rest$3 = function(s, e) {
	var t = {};
	for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	if (s != null && typeof Object.getOwnPropertySymbols === "function") {
		for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	}
	return t;
};
var Title = class extends PureComponent {
	render() {
		const _a = this.props, { heading } = _a, rest = __rest$3(_a, ["heading"]);
		const component = strings$4.HEADING.indexOf(heading) !== -1 ? `h${heading}` : "h1";
		return /*#__PURE__*/ React.createElement(Base, Object.assign({
			component,
			heading: component
		}, rest));
	}
};
Title.propTypes = {
	copyable: import_prop_types.default.oneOfType([import_prop_types.default.object, import_prop_types.default.bool]),
	delete: import_prop_types.default.bool,
	disabled: import_prop_types.default.bool,
	ellipsis: import_prop_types.default.oneOfType([import_prop_types.default.object, import_prop_types.default.bool]),
	mark: import_prop_types.default.bool,
	link: import_prop_types.default.oneOfType([import_prop_types.default.object, import_prop_types.default.bool]),
	underline: import_prop_types.default.bool,
	strong: import_prop_types.default.bool,
	type: import_prop_types.default.oneOf(strings$4.TYPE),
	heading: import_prop_types.default.oneOf(strings$4.HEADING),
	style: import_prop_types.default.object,
	className: import_prop_types.default.string,
	component: import_prop_types.default.string,
	weight: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(strings$4.WEIGHT), import_prop_types.default.number])
};
Title.defaultProps = {
	copyable: false,
	delete: false,
	disabled: false,
	ellipsis: false,
	mark: false,
	underline: false,
	strong: false,
	link: false,
	type: "primary",
	heading: 1,
	style: {},
	className: ""
};
//#endregion
//#region node_modules/@douyinfe/semi-ui/lib/es/typography/paragraph.js
var prefixCls = cssClasses$4.PREFIX;
var Paragraph = class extends PureComponent {
	render() {
		const { className } = this.props;
		const paragraphCls = (0, import_classnames.default)(className, `${prefixCls}-paragraph`);
		return /*#__PURE__*/ React.createElement(Base, Object.assign({ component: "p" }, this.props, { className: paragraphCls }));
	}
};
Paragraph.propTypes = {
	copyable: import_prop_types.default.oneOfType([import_prop_types.default.object, import_prop_types.default.bool]),
	delete: import_prop_types.default.bool,
	disabled: import_prop_types.default.bool,
	ellipsis: import_prop_types.default.oneOfType([import_prop_types.default.object, import_prop_types.default.bool]),
	mark: import_prop_types.default.bool,
	link: import_prop_types.default.oneOfType([import_prop_types.default.object, import_prop_types.default.bool]),
	underline: import_prop_types.default.bool,
	strong: import_prop_types.default.bool,
	type: import_prop_types.default.oneOf(strings$4.TYPE),
	size: import_prop_types.default.oneOf(strings$4.SIZE),
	spacing: import_prop_types.default.oneOf(strings$4.SPACING),
	style: import_prop_types.default.object,
	className: import_prop_types.default.string,
	component: import_prop_types.default.string
};
Paragraph.defaultProps = {
	copyable: false,
	delete: false,
	disabled: false,
	ellipsis: false,
	mark: false,
	underline: false,
	strong: false,
	link: false,
	type: "primary",
	size: "normal",
	spacing: "normal",
	style: {},
	className: ""
};
//#endregion
//#region node_modules/@douyinfe/semi-foundation/lib/es/typography/formatNumeral.js
var FormatNumeral = class {
	constructor(content, rule, precision, truncate, parser) {
		this.ruleMethods = {
			"bytes-decimal": (value) => {
				const units = [
					"B",
					"KB",
					"MB",
					"GB",
					"TB",
					"PB",
					"EB",
					"ZB",
					"YB"
				];
				let i = 0;
				while (value >= 1e3) {
					value /= 1e3;
					i++;
				}
				return `${this.truncatePrecision(value)} ${units[i]}`;
			},
			"bytes-binary": (value) => {
				const units = [
					"B",
					"KiB",
					"MiB",
					"GiB",
					"TiB",
					"PiB",
					"EiB",
					"ZiB",
					"YiB"
				];
				let i = 0;
				while (value >= 1024) {
					value /= 1024;
					i++;
				}
				return `${this.truncatePrecision(value)} ${units[i]}`;
			},
			percentages: (value) => {
				return `${this.truncatePrecision(value * 100)}%`;
			},
			exponential: (value) => {
				const vArr = value.toExponential(this.precision + 2).split("e");
				return `${this.truncatePrecision(Number(vArr[0]))}e${vArr[1]}`;
			}
		};
		this.truncateMethods = {
			ceil: Math.ceil,
			floor: Math.floor,
			round: Math.round
		};
		this.isDiyParser = typeof parser !== "undefined";
		this.content = content;
		this.rule = rule;
		this.precision = precision;
		this.truncate = truncate;
		this.parser = parser;
	}
	format() {
		if (this.isDiyParser) return this.parser(this.content);
		if (this.rule === "text") return extractNumbers(this.content).map((item) => checkIsNumeral(item) ? this.truncatePrecision(item) : item).join("");
		if (this.rule === "numbers") return extractNumbers(this.content).filter((item) => checkIsNumeral(item)).map((item) => this.truncatePrecision(item)).join(",");
		return extractNumbers(this.content).map((item) => checkIsNumeral(item) ? this.ruleMethods[this.rule](Number(item)) : item).join("");
	}
	truncatePrecision(content) {
		const cTruncated = this.truncateMethods[this.truncate](Number(content) * Math.pow(10, this.precision)) / Math.pow(10, this.precision);
		const cArr = cTruncated.toString().split(".");
		if (cArr.length === 1) return cTruncated.toFixed(this.precision);
		const cTLength = cArr[1].length;
		if (cTLength < this.precision) return `${cArr[0]}.${cArr[1]}${"0".repeat(this.precision - cTLength)}`;
		return cTruncated.toString();
	}
};
function extractNumbers(content) {
	return content.match(/(-?[0-9]*\.?[0-9]+([eE]-?[0-9]+)?)|([^-\d\.]+)/g) || [];
}
function checkIsNumeral(str) {
	return !(isNaN(Number(str)) || str.replace(/\s+/g, "") === "");
}
//#endregion
//#region node_modules/@douyinfe/semi-ui/lib/es/typography/numeral.js
var Numeral = class extends PureComponent {
	formatNodeDFS(node) {
		if (!Array.isArray(node)) node = [node];
		node = node.map((item) => {
			if (typeof item === "string" || typeof item === "number") return new FormatNumeral(String(item), this.props.rule, this.props.precision, this.props.truncate, this.props.parser).format();
			if (typeof item === "function") return this.formatNodeDFS(item());
			if (typeof item === "object" && "children" in item["props"]) return Object.assign(Object.assign({}, item), { props: Object.assign(Object.assign({}, item["props"]), { children: this.formatNodeDFS(item["props"]["children"]) }) });
			return item;
		});
		return node.length === 1 ? node[0] : node;
	}
	render() {
		const baseProps = Object.assign({}, this.props);
		delete baseProps.rule;
		delete baseProps.parser;
		baseProps.children = this.formatNodeDFS(this.props.children);
		return /*#__PURE__*/ React.createElement(Base, Object.assign({ component: "span" }, baseProps));
	}
};
Numeral.propTypes = {
	rule: import_prop_types.default.oneOf(strings$4.RULE),
	precision: import_prop_types.default.number,
	truncate: import_prop_types.default.oneOf(strings$4.TRUNCATE),
	parser: import_prop_types.default.func,
	copyable: import_prop_types.default.oneOfType([import_prop_types.default.object, import_prop_types.default.bool]),
	delete: import_prop_types.default.bool,
	disabled: import_prop_types.default.bool,
	icon: import_prop_types.default.oneOfType([import_prop_types.default.node, import_prop_types.default.string]),
	mark: import_prop_types.default.bool,
	underline: import_prop_types.default.bool,
	link: import_prop_types.default.oneOfType([import_prop_types.default.object, import_prop_types.default.bool]),
	strong: import_prop_types.default.bool,
	type: import_prop_types.default.oneOf(strings$4.TYPE),
	size: import_prop_types.default.oneOf(strings$4.SIZE),
	style: import_prop_types.default.object,
	className: import_prop_types.default.string,
	code: import_prop_types.default.bool,
	component: import_prop_types.default.string
};
Numeral.defaultProps = {
	rule: "text",
	precision: 0,
	truncate: "round",
	parser: void 0,
	copyable: false,
	delete: false,
	icon: "",
	mark: false,
	underline: false,
	strong: false,
	link: false,
	type: "primary",
	style: {},
	size: "normal",
	className: ""
};
//#endregion
//#region node_modules/@douyinfe/semi-ui/lib/es/typography/index.js
var Typography = Typography$1;
Typography.Text = Text;
Typography.Title = Title;
Typography.Paragraph = Paragraph;
Typography.Numeral = Numeral;
//#endregion
//#region node_modules/@douyinfe/semi-ui/lib/es/spin/icon.js
var __rest$2 = function(s, e) {
	var t = {};
	for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	if (s != null && typeof Object.getOwnPropertySymbols === "function") {
		for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	}
	return t;
};
function Icon() {
	let props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
	const { id: propsId, className, customIconCls } = props, rest = __rest$2(props, [
		"id",
		"className",
		"customIconCls"
	]);
	const globalIndicator = (0, import_get.default)(semi_global_default, "config.overrideDefaultProps.Spin.indicator");
	if (globalIndicator && /*#__PURE__*/ React.isValidElement(globalIndicator)) return /*#__PURE__*/ React.cloneElement(globalIndicator, { className: (0, import_classnames.default)({
		[customIconCls]: customIconCls,
		[className]: className
	}) });
	/**
	* NOTE(SSR / Next.js):
	* We must keep the original SVG implementation based on <linearGradient> + url(#id).
	* However, generating ids via module-level counters or random values during render can
	* cause hydration mismatch (server/client ids differ).
	*
	* Strategy:
	* - On SSR and the client's initial render, use a stable fallback id to keep markup identical.
	* - After mount (client-only), replace it with an instance-unique id to avoid cross-instance
	*   collisions where one Spin could affect another via duplicate ids.
	*
	* If consumers pass `props.id`, we treat it as a stable explicit seed.
	*/
	const fallbackId = "linearGradient-semi-spin";
	const [gradientId, setGradientId] = useState(() => {
		if (!isNullOrUndefined(propsId)) return `linearGradient-${propsId}`;
		return fallbackId;
	});
	useEffect(() => {
		if (!isNullOrUndefined(propsId)) {
			setGradientId(`linearGradient-${propsId}`);
			return;
		}
		const unique = getUuidShort$1({ prefix: "semi-spin-gradient" });
		setGradientId(`linearGradient-${unique}`);
	}, [propsId]);
	return /*#__PURE__*/ React.createElement("svg", Object.assign({}, rest, {
		className,
		width: "48",
		height: "48",
		viewBox: "0 0 36 36",
		version: "1.1",
		xmlns: "http://www.w3.org/2000/svg",
		"aria-hidden": true,
		"data-icon": "spin"
	}), /*#__PURE__*/ React.createElement("defs", null, /*#__PURE__*/ React.createElement("linearGradient", {
		x1: "0%",
		y1: "100%",
		x2: "100%",
		y2: "100%",
		id: gradientId
	}, /*#__PURE__*/ React.createElement("stop", {
		stopColor: "currentColor",
		stopOpacity: "0",
		offset: "0%"
	}), /*#__PURE__*/ React.createElement("stop", {
		stopColor: "currentColor",
		stopOpacity: "0.50",
		offset: "39.9430698%"
	}), /*#__PURE__*/ React.createElement("stop", {
		stopColor: "currentColor",
		offset: "100%"
	}))), /*#__PURE__*/ React.createElement("g", {
		stroke: "none",
		strokeWidth: "1",
		fill: "none",
		fillRule: "evenodd"
	}, /*#__PURE__*/ React.createElement("rect", {
		fillOpacity: "0.01",
		fill: "none",
		x: "0",
		y: "0",
		width: "36",
		height: "36"
	}), /*#__PURE__*/ React.createElement("path", {
		d: "M34,18 C34,9.163444 26.836556,2 18,2 C11.6597233,2 6.18078805,5.68784135 3.59122325,11.0354951",
		stroke: `url(#${gradientId})`,
		strokeWidth: "4",
		strokeLinecap: "round"
	})));
}
//#endregion
//#region node_modules/@douyinfe/semi-foundation/lib/es/button/constants.js
var cssClasses$1 = { PREFIX: `${BASE_CLASS_PREFIX$1}-button` };
var strings$1 = {
	sizes: [
		"default",
		"small",
		"large"
	],
	iconPositions: ["left", "right"],
	htmlTypes: [
		"button",
		"reset",
		"submit"
	],
	btnTypes: [
		"primary",
		"secondary",
		"tertiary",
		"warning",
		"danger"
	],
	themes: [
		"solid",
		"borderless",
		"light",
		"outline"
	],
	DEFAULT_ICON_SIZE: "default",
	DEFAULT_ICON_POSITION: "left"
};
`${BASE_CLASS_PREFIX$1}`;
var strings = {
	SIZE: [
		"extra-small",
		"small",
		"default",
		"large",
		"extra-large",
		"custom"
	],
	ICON_PREFIX: "semi-icon-"
};
//#endregion
//#region node_modules/@douyinfe/semi-ui/lib/es/button/Button.js
var __rest$1 = function(s, e) {
	var t = {};
	for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	if (s != null && typeof Object.getOwnPropertySymbols === "function") {
		for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	}
	return t;
};
var btnSizes = strings$1.sizes;
var { htmlTypes, btnTypes } = strings$1;
var Button$1 = class extends PureComponent {
	render() {
		const _a = this.props, { children, block, htmlType, loading, circle, className, style, disabled, size, theme, type, colorful, prefixCls, iconPosition } = _a, attr = __rest$1(_a, [
			"children",
			"block",
			"htmlType",
			"loading",
			"circle",
			"className",
			"style",
			"disabled",
			"size",
			"theme",
			"type",
			"colorful",
			"prefixCls",
			"iconPosition"
		]);
		const baseProps = Object.assign(Object.assign({ disabled }, (0, import_omit.default)(attr, ["x-semi-children-alias"])), {
			className: (0, import_classnames.default)(prefixCls, {
				[`${prefixCls}-${type}`]: !disabled && type,
				[`${prefixCls}-disabled`]: disabled,
				[`${prefixCls}-size-large`]: size === "large",
				[`${prefixCls}-size-small`]: size === "small",
				[`${prefixCls}-block`]: block,
				[`${prefixCls}-circle`]: circle,
				[`${prefixCls}-${theme}`]: theme,
				[`${prefixCls}-${type}-disabled`]: disabled && type,
				[`${prefixCls}-colorful`]: colorful
			}, className),
			type: htmlType,
			"aria-disabled": disabled
		});
		const xSemiProps = {};
		if (!(className && className.includes("-with-icon"))) xSemiProps["x-semi-prop"] = this.props["x-semi-children-alias"] || "children";
		return /*#__PURE__*/ React.createElement("button", Object.assign({}, baseProps, {
			onClick: this.props.onClick,
			onMouseDown: this.props.onMouseDown,
			style
		}), /*#__PURE__*/ React.createElement("span", Object.assign({
			className: (0, import_classnames.default)(`${prefixCls}-content`, this.props.contentClassName),
			onClick: (e) => disabled && e.stopPropagation()
		}, xSemiProps), children));
	}
};
Button$1.defaultProps = {
	disabled: false,
	size: "default",
	type: "primary",
	theme: "light",
	block: false,
	htmlType: "button",
	onMouseDown: noop,
	onClick: noop,
	onMouseEnter: noop,
	onMouseLeave: noop,
	colorful: false,
	prefixCls: cssClasses$1.PREFIX
};
Button$1.propTypes = {
	children: import_prop_types.default.node,
	disabled: import_prop_types.default.bool,
	prefixCls: import_prop_types.default.string,
	style: import_prop_types.default.object,
	size: import_prop_types.default.oneOf(btnSizes),
	type: import_prop_types.default.oneOf(btnTypes),
	block: import_prop_types.default.bool,
	onClick: import_prop_types.default.func,
	onMouseDown: import_prop_types.default.func,
	circle: import_prop_types.default.bool,
	loading: import_prop_types.default.bool,
	htmlType: import_prop_types.default.oneOf(htmlTypes),
	theme: import_prop_types.default.oneOf(strings$1.themes),
	className: import_prop_types.default.string,
	onMouseEnter: import_prop_types.default.func,
	onMouseLeave: import_prop_types.default.func,
	"aria-label": import_prop_types.default.string,
	contentClassName: import_prop_types.default.string
};
//#endregion
//#region node_modules/@douyinfe/semi-ui/lib/es/iconButton/index.js
var __rest = function(s, e) {
	var t = {};
	for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	if (s != null && typeof Object.getOwnPropertySymbols === "function") {
		for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	}
	return t;
};
var iconSizes = strings.SIZE;
var IconButton = class extends PureComponent {
	render() {
		const _a = this.props, { children: originChildren, iconPosition, iconSize, iconStyle, style: originStyle, icon, noHorizontalPadding, theme, className, prefixCls, loading } = _a, otherProps = __rest(_a, [
			"children",
			"iconPosition",
			"iconSize",
			"iconStyle",
			"style",
			"icon",
			"noHorizontalPadding",
			"theme",
			"className",
			"prefixCls",
			"loading"
		]);
		const style = Object.assign({}, originStyle);
		const { colorful, type, disabled } = otherProps;
		if (Array.isArray(noHorizontalPadding)) {
			noHorizontalPadding.includes("left") && (style.paddingLeft = 0);
			noHorizontalPadding.includes("right") && (style.paddingRight = 0);
		} else if (noHorizontalPadding === true) {
			style.paddingLeft = 0;
			style.paddingRight = 0;
		} else if (typeof noHorizontalPadding === "string") {
			noHorizontalPadding === "left" && (style.paddingLeft = 0);
			noHorizontalPadding === "right" && (style.paddingRight = 0);
		}
		let finalChildren = null;
		let IconElem = null;
		if (loading && !otherProps.disabled) {
			if (colorful && [
				"light",
				"outline",
				"borderless"
			].includes(theme) || theme === "solid" && type === "tertiary") IconElem = /*#__PURE__*/ React.createElement(IconComponent$7, { className: `${prefixCls}-content-loading-icon` });
			else IconElem = /*#__PURE__*/ React.createElement(Icon, null);
		} else if (/*#__PURE__*/ React.isValidElement(icon)) {
			if (colorful) {
				const multipleColor = theme === "solid" && type === "tertiary" || type === "primary" && ["light", "borderless"].includes(theme);
				const twoColor = type === "tertiary" && [
					"light",
					"borderless",
					"outline"
				].includes(theme);
				if (multipleColor) {
					let fill;
					if (disabled) fill = new Array(4).fill("var(--semi-color-disabled-text)");
					else fill = [
						"var(--semi-button-colorful-multiple-fill-0)",
						"var(--semi-button-colorful-multiple-fill-1)",
						"var(--semi-button-colorful-multiple-fill-2)",
						"var(--semi-button-colorful-multiple-fill-3)"
					];
					IconElem = /*#__PURE__*/ React.cloneElement(icon, { fill });
				} else if (twoColor) {
					let fill;
					if (disabled) fill = new Array(2).fill("var(--semi-color-disabled-text)");
					else fill = ["var(--semi-button-colorful-fill-primary)", "var(--semi-button-colorful-fill-secondary)"];
					IconElem = /*#__PURE__*/ React.cloneElement(icon, { fill });
				} else IconElem = icon;
			} else IconElem = icon;
		}
		const btnTextCls = (0, import_classnames.default)({
			[`${prefixCls}-content-left`]: iconPosition === "right",
			[`${prefixCls}-content-right`]: iconPosition === "left"
		});
		const xSemiProp = this.props["x-semi-children-alias"] || "children";
		const children = originChildren != null ? /*#__PURE__*/ React.createElement("span", {
			className: btnTextCls,
			"x-semi-prop": xSemiProp
		}, originChildren) : null;
		if (iconPosition === "left") finalChildren = /*#__PURE__*/ React.createElement(React.Fragment, null, IconElem, children);
		else finalChildren = /*#__PURE__*/ React.createElement(React.Fragment, null, children, IconElem);
		const iconBtnCls = (0, import_classnames.default)(className, `${prefixCls}-with-icon`, {
			[`${prefixCls}-with-icon-only`]: children == null || children === "",
			[`${prefixCls}-loading`]: loading
		});
		return /*#__PURE__*/ React.createElement(Button$1, Object.assign({}, otherProps, {
			className: iconBtnCls,
			theme,
			style
		}), finalChildren);
	}
};
IconButton.defaultProps = {
	iconPosition: strings$1.DEFAULT_ICON_POSITION,
	prefixCls: cssClasses$1.PREFIX,
	loading: false,
	noHorizontalPadding: false,
	onMouseEnter: import_noop.default,
	onMouseLeave: import_noop.default
};
IconButton.elementType = "IconButton";
IconButton.propTypes = {
	iconStyle: import_prop_types.default.object,
	style: import_prop_types.default.object,
	loading: import_prop_types.default.bool,
	prefixCls: import_prop_types.default.string,
	icon: import_prop_types.default.oneOfType([
		import_prop_types.default.object,
		import_prop_types.default.string,
		import_prop_types.default.node
	]),
	iconSize: import_prop_types.default.oneOf(iconSizes),
	noHorizontalPadding: import_prop_types.default.oneOfType([
		import_prop_types.default.bool,
		import_prop_types.default.string,
		import_prop_types.default.array
	]),
	children: import_prop_types.default.node,
	theme: import_prop_types.default.string,
	iconPosition: import_prop_types.default.oneOf(strings$1.iconPositions),
	className: import_prop_types.default.string,
	onMouseEnter: import_prop_types.default.func,
	onMouseLeave: import_prop_types.default.func
};
//#endregion
//#region node_modules/@douyinfe/semi-ui/lib/es/button/index.js
var Button = class extends React.PureComponent {
	constructor() {
		let props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		super(props);
	}
	render() {
		const props = Object.assign({}, this.props);
		const hasIcon = Boolean(props.icon);
		const isLoading = Boolean(props.loading);
		const isDisabled = Boolean(props.disabled);
		if (hasIcon || isLoading && !isDisabled) return /*#__PURE__*/ React.createElement(IconButton, Object.assign({}, props));
		else return /*#__PURE__*/ React.createElement(Button$1, Object.assign({}, props));
	}
};
Button.__SemiComponentName__ = "Button";
Button.propTypes = Object.assign(Object.assign({}, Button$1.propTypes), IconButton.propTypes);
Button.defaultProps = getDefaultPropsFromGlobalConfig(Button.__SemiComponentName__);
Button.elementType = "Button";
//#endregion
export { require__castFunction as $, require_prop_types as $t, requiredArgs as A, require__flatRest as At, Portal as B, require_isArrayLike as Bt, IconComponent$6 as C, prepend as Ct, startOfUTCWeek as D, require_set as Dt, locale as E, require_cloneDeepWith as Et, buildLocalizeFn as F, require__baseSlice as Ft, unmount as G, require__isIndex as Gt, getRef as H, require__nodeUtil as Ht, buildFormatLongFn as I, require_isSet as It, getUuidv4 as J, require__baseTimes as Jt, getUuid as K, require_stubFalse as Kt, noop as L, require__Set as Lt, _typeof as M, require__baseFlatten as Mt, buildMatchPatternFn as N, require_isPlainObject as Nt, getDefaultOptions as O, require__baseSet as Ot, buildMatchFn as P, require__baseUnset as Pt, isNullOrUndefined as Q, BASE_CLASS_PREFIX$1 as Qt, Tooltip as R, require__copyArray as Rt, IconComponent$5 as S, require_noop as Sn, append as St, LocaleConsumer as T, warning as Tt, render as U, require__baseUnary as Ut, ConfigContext as V, require__isPrototype as Vt, resolveDOM as W, require_isLength as Wt, handlePrevent as X, require__assignValue as Xt, strings$3 as Y, require__copyObject as Yt, Event as Z, require__Stack as Zt, keyCode as _, require__isKey as _n, getFocusableElements as _t, Icon as a, getDataAttr as an, require__cacheHas as at, IconComponent$2 as b, require__baseGetTag as bn, registerMediaQuery as bt, Text as c, require__baseGet as cn, require__createAssigner as ct, Popover as d, require_toString as dn, require_isArrayLikeObject as dt, require_classnames as en, require__baseEach as et, numbers as f, require__baseToString as fn, require_isString as ft, ESC_KEY as g, require_isObject as gn, getDefaultPropsFromGlobalConfig as gt, ENTER_KEY as h, require_isFunction as hn, getActiveElement as ht, strings$1 as i, BaseComponent as in, require__setToArray as it, toInteger as j, require_identity as jt, toDate as k, require_omit as kt, ObserverProperty as l, require__toKey as ln, require__isIterateeCall as lt, isEnterPress as m, require__stringToPath as mn, cloneDeep as mt, IconButton as n, require_debounce as nn, require_isEqual as nt, Typography as o, BaseFoundation as on, require__SetCache as ot, strings$2 as p, require__arrayMap as pn, require_isNull as pt, getUuidShort$1 as q, require_isArguments as qt, cssClasses$1 as r, require_toNumber as rn, require__baseIsEqual as rt, Paragraph as s, require_get as sn, require_isUndefined as st, Button as t, require_throttle as tn, require_isEmpty as tt, ReactResizeObserver as u, require__castPath as un, require__baseRest as ut, IconComponent as v, require_isSymbol as vn, getScrollbarWidth as vt, convertIcon as w, isElement as wt, IconComponent$4 as x, require_isArray as xn, semi_global_default as xt, IconComponent$1 as y, require_isObjectLike as yn, isSemiIcon as yt, CSSAnimation as z, require_keys as zt };

//# sourceMappingURL=es-ncBGSQcY.js.map