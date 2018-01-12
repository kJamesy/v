/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/amd-options.js":
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./resources/assets/scripts/app.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./resources/assets/vendor/html5StoryTheme/js/main.js");
__webpack_require__("./resources/assets/vendor/codropsMenu/js/main.js");

/***/ }),

/***/ "./resources/assets/styles/admin.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/styles/app.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendor/codropsMenu/js/classie.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

(function (window) {

  'use strict';

  // class helper functions from bonzo https://github.com/ded/bonzo

  function classReg(className) {
    return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
  }

  // classList support for class management
  // altho to be fair, the api sucks because it won't accept multiple classes at once
  var hasClass, addClass, removeClass;

  if ('classList' in document.documentElement) {
    hasClass = function hasClass(elem, c) {
      return elem.classList.contains(c);
    };
    addClass = function addClass(elem, c) {
      elem.classList.add(c);
    };
    removeClass = function removeClass(elem, c) {
      elem.classList.remove(c);
    };
  } else {
    hasClass = function hasClass(elem, c) {
      return classReg(c).test(elem.className);
    };
    addClass = function addClass(elem, c) {
      if (!hasClass(elem, c)) {
        elem.className = elem.className + ' ' + c;
      }
    };
    removeClass = function removeClass(elem, c) {
      elem.className = elem.className.replace(classReg(c), ' ');
    };
  }

  function toggleClass(elem, c) {
    var fn = hasClass(elem, c) ? removeClass : addClass;
    fn(elem, c);
  }

  var classie = {
    // full names
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass,
    // short names
    has: hasClass,
    add: addClass,
    remove: removeClass,
    toggle: toggleClass
  };

  // transport
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (classie),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    // browser global
    window.classie = classie;
  }
})(window);

/***/ }),

/***/ "./resources/assets/vendor/codropsMenu/js/main.js":
/***/ (function(module, exports, __webpack_require__) {

/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
try {
	window.classie = __webpack_require__("./resources/assets/vendor/codropsMenu/js/classie.js");
} catch (e) {}

(function () {

	var bodyEl = document.body,
	    content = document.querySelector('.content-wrap'),
	    openbtn = document.getElementById('open-button'),
	    closebtn = document.getElementById('close-button'),
	    isOpen = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		openbtn.addEventListener('click', toggleMenu);
		if (closebtn) {
			closebtn.addEventListener('click', toggleMenu);
		}

		// close the menu element if the target it´s not the menu element or one of its descendants..
		content.addEventListener('click', function (ev) {
			var target = ev.target;
			if (isOpen && target !== openbtn) {
				// toggleMenu();
			}
		});
	}

	function toggleMenu() {
		if (isOpen) {
			classie.remove(bodyEl, 'show-menu');
		} else {
			classie.add(bodyEl, 'show-menu');
		}
		isOpen = !isOpen;
	}

	init();

	setTimeout(function () {
		toggleMenu();
	}, 350);
})();

/***/ }),

/***/ "./resources/assets/vendor/html5StoryTheme/js/jquery.min.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function (a, b) {
  "object" == ( false ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
  } : b(a);
}("undefined" != typeof window ? window : this, function (a, b) {
  var c = [],
      d = c.slice,
      e = c.concat,
      f = c.push,
      g = c.indexOf,
      h = {},
      i = h.toString,
      j = h.hasOwnProperty,
      k = {},
      l = "1.11.3",
      m = function m(a, b) {
    return new m.fn.init(a, b);
  },
      n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      o = /^-ms-/,
      p = /-([\da-z])/gi,
      q = function q(a, b) {
    return b.toUpperCase();
  };m.fn = m.prototype = { jquery: l, constructor: m, selector: "", length: 0, toArray: function toArray() {
      return d.call(this);
    }, get: function get(a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this);
    }, pushStack: function pushStack(a) {
      var b = m.merge(this.constructor(), a);return b.prevObject = this, b.context = this.context, b;
    }, each: function each(a, b) {
      return m.each(this, a, b);
    }, map: function map(a) {
      return this.pushStack(m.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    }, slice: function slice() {
      return this.pushStack(d.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(a) {
      var b = this.length,
          c = +a + (0 > a ? b : 0);return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor(null);
    }, push: f, sort: c.sort, splice: c.splice }, m.extend = m.fn.extend = function () {
    var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == (typeof g === "undefined" ? "undefined" : _typeof(g)) || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
      if (null != (e = arguments[h])) for (d in e) {
        a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
      }
    }return g;
  }, m.extend({ expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
      throw new Error(a);
    }, noop: function noop() {}, isFunction: function isFunction(a) {
      return "function" === m.type(a);
    }, isArray: Array.isArray || function (a) {
      return "array" === m.type(a);
    }, isWindow: function isWindow(a) {
      return null != a && a == a.window;
    }, isNumeric: function isNumeric(a) {
      return !m.isArray(a) && a - parseFloat(a) + 1 >= 0;
    }, isEmptyObject: function isEmptyObject(a) {
      var b;for (b in a) {
        return !1;
      }return !0;
    }, isPlainObject: function isPlainObject(a) {
      var b;if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a)) return !1;try {
        if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (c) {
        return !1;
      }if (k.ownLast) for (b in a) {
        return j.call(a, b);
      }for (b in a) {}return void 0 === b || j.call(a, b);
    }, type: function type(a) {
      return null == a ? a + "" : "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a ? h[i.call(a)] || "object" : typeof a === "undefined" ? "undefined" : _typeof(a);
    }, globalEval: function globalEval(b) {
      b && m.trim(b) && (a.execScript || function (b) {
        a.eval.call(a, b);
      })(b);
    }, camelCase: function camelCase(a) {
      return a.replace(o, "ms-").replace(p, q);
    }, nodeName: function nodeName(a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    }, each: function each(a, b, c) {
      var d,
          e = 0,
          f = a.length,
          g = r(a);if (c) {
        if (g) {
          for (; f > e; e++) {
            if (d = b.apply(a[e], c), d === !1) break;
          }
        } else for (e in a) {
          if (d = b.apply(a[e], c), d === !1) break;
        }
      } else if (g) {
        for (; f > e; e++) {
          if (d = b.call(a[e], e, a[e]), d === !1) break;
        }
      } else for (e in a) {
        if (d = b.call(a[e], e, a[e]), d === !1) break;
      }return a;
    }, trim: function trim(a) {
      return null == a ? "" : (a + "").replace(n, "");
    }, makeArray: function makeArray(a, b) {
      var c = b || [];return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c;
    }, inArray: function inArray(a, b, c) {
      var d;if (b) {
        if (g) return g.call(b, a, c);for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) {
          if (c in b && b[c] === a) return c;
        }
      }return -1;
    }, merge: function merge(a, b) {
      var c = +b.length,
          d = 0,
          e = a.length;while (c > d) {
        a[e++] = b[d++];
      }if (c !== c) while (void 0 !== b[d]) {
        a[e++] = b[d++];
      }return a.length = e, a;
    }, grep: function grep(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
        d = !b(a[f], f), d !== h && e.push(a[f]);
      }return e;
    }, map: function map(a, b, c) {
      var d,
          f = 0,
          g = a.length,
          h = r(a),
          i = [];if (h) for (; g > f; f++) {
        d = b(a[f], f, c), null != d && i.push(d);
      } else for (f in a) {
        d = b(a[f], f, c), null != d && i.push(d);
      }return e.apply([], i);
    }, guid: 1, proxy: function proxy(a, b) {
      var c, e, f;return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function e() {
        return a.apply(b || this, c.concat(d.call(arguments)));
      }, e.guid = a.guid = a.guid || m.guid++, e) : void 0;
    }, now: function now() {
      return +new Date();
    }, support: k }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
    h["[object " + b + "]"] = b.toLowerCase();
  });function r(a) {
    var b = "length" in a && a.length,
        c = m.type(a);return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
  }var s = function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u = "sizzle" + 1 * new Date(),
        v = a.document,
        w = 0,
        x = 0,
        y = ha(),
        z = ha(),
        A = ha(),
        B = function B(a, b) {
      return a === b && (l = !0), 0;
    },
        C = 1 << 31,
        D = {}.hasOwnProperty,
        E = [],
        F = E.pop,
        G = E.push,
        H = E.push,
        I = E.slice,
        J = function J(a, b) {
      for (var c = 0, d = a.length; d > c; c++) {
        if (a[c] === b) return c;
      }return -1;
    },
        K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        L = "[\\x20\\t\\r\\n\\f]",
        M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        N = M.replace("w", "w#"),
        O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
        P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
        Q = new RegExp(L + "+", "g"),
        R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
        S = new RegExp("^" + L + "*," + L + "*"),
        T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
        U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
        V = new RegExp(P),
        W = new RegExp("^" + N + "$"),
        X = { ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M.replace("w", "w*") + ")"), ATTR: new RegExp("^" + O), PSEUDO: new RegExp("^" + P), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), bool: new RegExp("^(?:" + K + ")$", "i"), needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i") },
        Y = /^(?:input|select|textarea|button)$/i,
        Z = /^h\d$/i,
        $ = /^[^{]+\{\s*\[native \w/,
        _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        aa = /[+~]/,
        ba = /'|\\/g,
        ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
        da = function da(a, b, c) {
      var d = "0x" + b - 65536;return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
    },
        ea = function ea() {
      m();
    };try {
      H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
    } catch (fa) {
      H = { apply: E.length ? function (a, b) {
          G.apply(a, I.call(b));
        } : function (a, b) {
          var c = a.length,
              d = 0;while (a[c++] = b[d++]) {}a.length = c - 1;
        } };
    }function ga(a, b, d, e) {
      var f, h, j, k, l, o, r, s, w, x;if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;if (!e && p) {
        if (11 !== k && (f = _.exec(a))) if (j = f[1]) {
          if (9 === k) {
            if (h = b.getElementById(j), !h || !h.parentNode) return d;if (h.id === j) return d.push(h), d;
          } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d;
        } else {
          if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d;
        }if (c.qsa && (!q || !q.test(a))) {
          if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
            o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;while (l--) {
              o[l] = s + ra(o[l]);
            }w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",");
          }if (x) try {
            return H.apply(d, w.querySelectorAll(x)), d;
          } catch (y) {} finally {
            r || b.removeAttribute("id");
          }
        }
      }return i(a.replace(R, "$1"), b, d, e);
    }function ha() {
      var a = [];function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
      }return b;
    }function ia(a) {
      return a[u] = !0, a;
    }function ja(a) {
      var b = n.createElement("div");try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null;
      }
    }function ka(a, b) {
      var c = a.split("|"),
          e = a.length;while (e--) {
        d.attrHandle[c[e]] = b;
      }
    }function la(a, b) {
      var c = b && a,
          d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);if (d) return d;if (c) while (c = c.nextSibling) {
        if (c === b) return -1;
      }return a ? 1 : -1;
    }function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
      };
    }function na(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
      };
    }function oa(a) {
      return ia(function (b) {
        return b = +b, ia(function (c, d) {
          var e,
              f = a([], c.length, b),
              g = f.length;while (g--) {
            c[e = f[g]] && (c[e] = !(d[e] = c[e]));
          }
        });
      });
    }function pa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }c = ga.support = {}, f = ga.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;return b ? "HTML" !== b.nodeName : !1;
    }, m = ga.setDocument = function (a) {
      var b,
          e,
          g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function (a) {
        return a.className = "i", !a.getAttribute("className");
      }), c.getElementsByTagName = ja(function (a) {
        return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length;
      }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function (a) {
        return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length;
      }), c.getById ? (d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = b.getElementById(a);return c && c.parentNode ? [c] : [];
        }
      }, d.filter.ID = function (a) {
        var b = a.replace(ca, da);return function (a) {
          return a.getAttribute("id") === b;
        };
      }) : (delete d.find.ID, d.filter.ID = function (a) {
        var b = a.replace(ca, da);return function (a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
        };
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
      } : function (a, b) {
        var c,
            d = [],
            e = 0,
            f = b.getElementsByTagName(a);if ("*" === a) {
          while (c = f[e++]) {
            1 === c.nodeType && d.push(c);
          }return d;
        }return f;
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        return p ? b.getElementsByClassName(a) : void 0;
      }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function (a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
      }), ja(function (a) {
        var b = g.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
      })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
        c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P);
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
      } : function (a, b) {
        if (b) while (b = b.parentNode) {
          if (b === a) return !0;
        }return !1;
      }, B = b ? function (a, b) {
        if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
      } : function (a, b) {
        if (a === b) return l = !0, 0;var c,
            d = 0,
            e = a.parentNode,
            f = b.parentNode,
            h = [a],
            i = [b];if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;if (e === f) return la(a, b);c = a;while (c = c.parentNode) {
          h.unshift(c);
        }c = b;while (c = c.parentNode) {
          i.unshift(c);
        }while (h[d] === i[d]) {
          d++;
        }return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0;
      }, g) : n;
    }, ga.matches = function (a, b) {
      return ga(a, null, null, b);
    }, ga.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
        var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
      } catch (e) {}return ga(b, n, null, [a]).length > 0;
    }, ga.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b);
    }, ga.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
          f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
    }, ga.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }, ga.uniqueSort = function (a) {
      var b,
          d = [],
          e = 0,
          f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) {
          b === a[f] && (e = d.push(f));
        }while (e--) {
          a.splice(d[e], 1);
        }
      }return k = null, a;
    }, e = ga.getText = function (a) {
      var b,
          c = "",
          d = 0,
          f = a.nodeType;if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) {
            c += e(a);
          }
        } else if (3 === f || 4 === f) return a.nodeValue;
      } else while (b = a[d++]) {
        c += e(b);
      }return c;
    }, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: X, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
          return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
        }, CHILD: function CHILD(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a;
        }, PSEUDO: function PSEUDO(a) {
          var b,
              c = !a[6] && a[2];return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
        } }, filter: { TAG: function TAG(a) {
          var b = a.replace(ca, da).toLowerCase();return "*" === a ? function () {
            return !0;
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b;
          };
        }, CLASS: function CLASS(a) {
          var b = y[a + " "];return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(a, b, c) {
          return function (d) {
            var e = ga.attr(d, a);return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
          };
        }, CHILD: function CHILD(a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode;
          } : function (b, c, i) {
            var j,
                k,
                l,
                m,
                n,
                o,
                p = f !== g ? "nextSibling" : "previousSibling",
                q = b.parentNode,
                r = h && b.nodeName.toLowerCase(),
                s = !i && !h;if (q) {
              if (f) {
                while (p) {
                  l = b;while (l = l[p]) {
                    if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                  }o = p = "only" === a && !o && "nextSibling";
                }return !0;
              }if (o = [g ? q.firstChild : q.lastChild], g && s) {
                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
                  if (1 === l.nodeType && ++m && l === b) {
                    k[a] = [w, n, m];break;
                  }
                }
              } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
                if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break;
              }return m -= e, m === d || m % d === 0 && m / d >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(a, b) {
          var c,
              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
            var d,
                f = e(a, b),
                g = f.length;while (g--) {
              d = J(a, f[g]), a[d] = !(c[d] = f[g]);
            }
          }) : function (a) {
            return e(a, 0, c);
          }) : e;
        } }, pseudos: { not: ia(function (a) {
          var b = [],
              c = [],
              d = h(a.replace(R, "$1"));return d[u] ? ia(function (a, b, c, e) {
            var f,
                g = d(a, null, e, []),
                h = a.length;while (h--) {
              (f = g[h]) && (a[h] = !(b[h] = f));
            }
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
          };
        }), has: ia(function (a) {
          return function (b) {
            return ga(a, b).length > 0;
          };
        }), contains: ia(function (a) {
          return a = a.replace(ca, da), function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
          };
        }), lang: ia(function (a) {
          return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(), function (b) {
            var c;do {
              if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
            } while ((b = b.parentNode) && 1 === b.nodeType);return !1;
          };
        }), target: function target(b) {
          var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
        }, root: function root(a) {
          return a === o;
        }, focus: function focus(a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
        }, enabled: function enabled(a) {
          return a.disabled === !1;
        }, disabled: function disabled(a) {
          return a.disabled === !0;
        }, checked: function checked(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
        }, selected: function selected(a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
        }, empty: function empty(a) {
          for (a = a.firstChild; a; a = a.nextSibling) {
            if (a.nodeType < 6) return !1;
          }return !0;
        }, parent: function parent(a) {
          return !d.pseudos.empty(a);
        }, header: function header(a) {
          return Z.test(a.nodeName);
        }, input: function input(a) {
          return Y.test(a.nodeName);
        }, button: function button(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
        }, text: function text(a) {
          var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
        }, first: oa(function () {
          return [0];
        }), last: oa(function (a, b) {
          return [b - 1];
        }), eq: oa(function (a, b, c) {
          return [0 > c ? c + b : c];
        }), even: oa(function (a, b) {
          for (var c = 0; b > c; c += 2) {
            a.push(c);
          }return a;
        }), odd: oa(function (a, b) {
          for (var c = 1; b > c; c += 2) {
            a.push(c);
          }return a;
        }), lt: oa(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; --d >= 0;) {
            a.push(d);
          }return a;
        }), gt: oa(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; ++d < b;) {
            a.push(d);
          }return a;
        }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      d.pseudos[b] = ma(b);
    }for (b in { submit: !0, reset: !0 }) {
      d.pseudos[b] = na(b);
    }function qa() {}qa.prototype = d.filters = d.pseudos, d.setFilters = new qa(), g = ga.tokenize = function (a, b) {
      var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
        (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(R, " ") }), h = h.slice(c.length));for (g in d.filter) {
          !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
        }if (!c) break;
      }return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
    };function ra(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) {
        d += a[b].value;
      }return d;
    }function sa(a, b, c) {
      var d = b.dir,
          e = c && "parentNode" === d,
          f = x++;return b.first ? function (b, c, f) {
        while (b = b[d]) {
          if (1 === b.nodeType || e) return a(b, c, f);
        }
      } : function (b, c, g) {
        var h,
            i,
            j = [w, f];if (g) {
          while (b = b[d]) {
            if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
          }
        } else while (b = b[d]) {
          if (1 === b.nodeType || e) {
            if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];if (i[d] = j, j[2] = a(b, c, g)) return !0;
          }
        }
      };
    }function ta(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;while (e--) {
          if (!a[e](b, c, d)) return !1;
        }return !0;
      } : a[0];
    }function ua(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) {
        ga(a, b[d], c);
      }return c;
    }function va(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
        (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
      }return g;
    }function wa(a, b, c, d, e, f) {
      return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function (f, g, h, i) {
        var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || ua(b || "*", h.nodeType ? [h] : h, []),
            q = !a || !f && b ? p : va(p, m, a, h, i),
            r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
          j = va(r, n), d(j, [], h, i), k = j.length;while (k--) {
            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
        }if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;while (k--) {
                (l = r[k]) && j.push(q[k] = l);
              }e(null, r = [], j, i);
            }k = r.length;while (k--) {
              (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
            }
          }
        } else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
      });
    }function xa(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function (a) {
        return a === b;
      }, h, !0), l = sa(function (a) {
        return J(b, a) > -1;
      }, h, !0), m = [function (a, c, d) {
        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
      }]; f > i; i++) {
        if (c = d.relative[a[i].type]) m = [sa(ta(m), c)];else {
          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
            for (e = ++i; f > e; e++) {
              if (d.relative[a[e].type]) break;
            }return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a));
          }m.push(c);
        }
      }return ta(m);
    }function ya(a, b) {
      var c = b.length > 0,
          e = a.length > 0,
          f = function f(_f, g, h, i, k) {
        var l,
            m,
            o,
            p = 0,
            q = "0",
            r = _f && [],
            s = [],
            t = j,
            u = _f || e && d.find.TAG("*", k),
            v = w += null == t ? 1 : Math.random() || .1,
            x = u.length;for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
          if (e && l) {
            m = 0;while (o = a[m++]) {
              if (o(l, g, h)) {
                i.push(l);break;
              }
            }k && (w = v);
          }c && ((l = !o && l) && p--, _f && r.push(l));
        }if (p += q, c && q !== p) {
          m = 0;while (o = b[m++]) {
            o(r, s, g, h);
          }if (_f) {
            if (p > 0) while (q--) {
              r[q] || s[q] || (s[q] = F.call(i));
            }s = va(s);
          }H.apply(i, s), k && !_f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i);
        }return k && (w = v, j = t), r;
      };return c ? ia(f) : f;
    }return h = ga.compile = function (a, b) {
      var c,
          d = [],
          e = [],
          f = A[a + " "];if (!f) {
        b || (b = g(a)), c = b.length;while (c--) {
          f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
        }f = A(a, ya(e, d)), f.selector = a;
      }return f;
    }, i = ga.select = function (a, b, e, f) {
      var i,
          j,
          k,
          l,
          m,
          n = "function" == typeof a && a,
          o = !f && g(a = n.selector || a);if (e = e || [], 1 === o.length) {
        if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
          if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b) return e;n && (b = b.parentNode), a = a.slice(j.shift().value.length);
        }i = X.needsContext.test(a) ? 0 : j.length;while (i--) {
          if (k = j[i], d.relative[l = k.type]) break;if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
            if (j.splice(i, 1), a = f.length && ra(j), !a) return H.apply(e, f), e;break;
          }
        }
      }return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e;
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("div"));
    }), ja(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
    }) || ka("type|href|height|width", function (a, b, c) {
      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
    }), c.attributes && ja(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
    }) || ka("value", function (a, b, c) {
      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
    }), ja(function (a) {
      return null == a.getAttribute("disabled");
    }) || ka(K, function (a, b, c) {
      var d;return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
    }), ga;
  }(a);m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;var t = m.expr.match.needsContext,
      u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      v = /^.[^:#\[\.,]*$/;function w(a, b, c) {
    if (m.isFunction(b)) return m.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c;
    });if (b.nodeType) return m.grep(a, function (a) {
      return a === b !== c;
    });if ("string" == typeof b) {
      if (v.test(b)) return m.filter(b, a, c);b = m.filter(b, a);
    }return m.grep(a, function (a) {
      return m.inArray(a, b) >= 0 !== c;
    });
  }m.filter = function (a, b, c) {
    var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function (a) {
      return 1 === a.nodeType;
    }));
  }, m.fn.extend({ find: function find(a) {
      var b,
          c = [],
          d = this,
          e = d.length;if ("string" != typeof a) return this.pushStack(m(a).filter(function () {
        for (b = 0; e > b; b++) {
          if (m.contains(d[b], this)) return !0;
        }
      }));for (b = 0; e > b; b++) {
        m.find(a, d[b], c);
      }return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c;
    }, filter: function filter(a) {
      return this.pushStack(w(this, a || [], !1));
    }, not: function not(a) {
      return this.pushStack(w(this, a || [], !0));
    }, is: function is(a) {
      return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length;
    } });var x,
      y = a.document,
      z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      A = m.fn.init = function (a, b) {
    var c, d;if (!a) return this;if ("string" == typeof a) {
      if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);if (c[1]) {
        if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b)) for (c in b) {
          m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
        }return this;
      }if (d = y.getElementById(c[2]), d && d.parentNode) {
        if (d.id !== c[2]) return x.find(a);this.length = 1, this[0] = d;
      }return this.context = y, this.selector = a, this;
    }return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this));
  };A.prototype = m.fn, x = m(y);var B = /^(?:parents|prev(?:Until|All))/,
      C = { children: !0, contents: !0, next: !0, prev: !0 };m.extend({ dir: function dir(a, b, c) {
      var d = [],
          e = a[b];while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c))) {
        1 === e.nodeType && d.push(e), e = e[b];
      }return d;
    }, sibling: function sibling(a, b) {
      for (var c = []; a; a = a.nextSibling) {
        1 === a.nodeType && a !== b && c.push(a);
      }return c;
    } }), m.fn.extend({ has: function has(a) {
      var b,
          c = m(a, this),
          d = c.length;return this.filter(function () {
        for (b = 0; d > b; b++) {
          if (m.contains(this, c[b])) return !0;
        }
      });
    }, closest: function closest(a, b) {
      for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++) {
        for (c = this[d]; c && c !== b; c = c.parentNode) {
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
            f.push(c);break;
          }
        }
      }return this.pushStack(f.length > 1 ? m.unique(f) : f);
    }, index: function index(a) {
      return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(a, b) {
      return this.pushStack(m.unique(m.merge(this.get(), m(a, b))));
    }, addBack: function addBack(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    } });function D(a, b) {
    do {
      a = a[b];
    } while (a && 1 !== a.nodeType);return a;
  }m.each({ parent: function parent(a) {
      var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
    }, parents: function parents(a) {
      return m.dir(a, "parentNode");
    }, parentsUntil: function parentsUntil(a, b, c) {
      return m.dir(a, "parentNode", c);
    }, next: function next(a) {
      return D(a, "nextSibling");
    }, prev: function prev(a) {
      return D(a, "previousSibling");
    }, nextAll: function nextAll(a) {
      return m.dir(a, "nextSibling");
    }, prevAll: function prevAll(a) {
      return m.dir(a, "previousSibling");
    }, nextUntil: function nextUntil(a, b, c) {
      return m.dir(a, "nextSibling", c);
    }, prevUntil: function prevUntil(a, b, c) {
      return m.dir(a, "previousSibling", c);
    }, siblings: function siblings(a) {
      return m.sibling((a.parentNode || {}).firstChild, a);
    }, children: function children(a) {
      return m.sibling(a.firstChild);
    }, contents: function contents(a) {
      return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes);
    } }, function (a, b) {
    m.fn[a] = function (c, d) {
      var e = m.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e);
    };
  });var E = /\S+/g,
      F = {};function G(a) {
    var b = F[a] = {};return m.each(a.match(E) || [], function (a, c) {
      b[c] = !0;
    }), b;
  }m.Callbacks = function (a) {
    a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);var b,
        c,
        d,
        e,
        f,
        g,
        h = [],
        i = !a.once && [],
        j = function j(l) {
      for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++) {
        if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
          c = !1;break;
        }
      }b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable());
    },
        k = { add: function add() {
        if (h) {
          var d = h.length;!function f(b) {
            m.each(b, function (b, c) {
              var d = m.type(c);"function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c);
            });
          }(arguments), b ? e = h.length : c && (g = d, j(c));
        }return this;
      }, remove: function remove() {
        return h && m.each(arguments, function (a, c) {
          var d;while ((d = m.inArray(c, h, d)) > -1) {
            h.splice(d, 1), b && (e >= d && e--, f >= d && f--);
          }
        }), this;
      }, has: function has(a) {
        return a ? m.inArray(a, h) > -1 : !(!h || !h.length);
      }, empty: function empty() {
        return h = [], e = 0, this;
      }, disable: function disable() {
        return h = i = c = void 0, this;
      }, disabled: function disabled() {
        return !h;
      }, lock: function lock() {
        return i = void 0, c || k.disable(), this;
      }, locked: function locked() {
        return !i;
      }, fireWith: function fireWith(a, c) {
        return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this;
      }, fire: function fire() {
        return k.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!d;
      } };return k;
  }, m.extend({ Deferred: function Deferred(a) {
      var b = [["resolve", "done", m.Callbacks("once memory"), "resolved"], ["reject", "fail", m.Callbacks("once memory"), "rejected"], ["notify", "progress", m.Callbacks("memory")]],
          c = "pending",
          d = { state: function state() {
          return c;
        }, always: function always() {
          return e.done(arguments).fail(arguments), this;
        }, then: function then() {
          var a = arguments;return m.Deferred(function (c) {
            m.each(b, function (b, f) {
              var g = m.isFunction(a[b]) && a[b];e[f[1]](function () {
                var a = g && g.apply(this, arguments);a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
              });
            }), a = null;
          }).promise();
        }, promise: function promise(a) {
          return null != a ? m.extend(a, d) : d;
        } },
          e = {};return d.pipe = d.then, m.each(b, function (a, f) {
        var g = f[2],
            h = f[3];d[f[1]] = g.add, h && g.add(function () {
          c = h;
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
          return e[f[0] + "With"](this === e ? d : this, arguments), this;
        }, e[f[0] + "With"] = g.fireWith;
      }), d.promise(e), a && a.call(e, e), e;
    }, when: function when(a) {
      var b = 0,
          c = d.call(arguments),
          e = c.length,
          f = 1 !== e || a && m.isFunction(a.promise) ? e : 0,
          g = 1 === f ? a : m.Deferred(),
          h = function h(a, b, c) {
        return function (e) {
          b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
        };
      },
          i,
          j,
          k;if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) {
        c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
      }return f || g.resolveWith(k, c), g.promise();
    } });var H;m.fn.ready = function (a) {
    return m.ready.promise().done(a), this;
  }, m.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(a) {
      a ? m.readyWait++ : m.ready(!0);
    }, ready: function ready(a) {
      if (a === !0 ? ! --m.readyWait : !m.isReady) {
        if (!y.body) return setTimeout(m.ready);m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready")));
      }
    } });function I() {
    y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J));
  }function J() {
    (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready());
  }m.ready.promise = function (b) {
    if (!H) if (H = m.Deferred(), "complete" === y.readyState) setTimeout(m.ready);else if (y.addEventListener) y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1);else {
      y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);var c = !1;try {
        c = null == a.frameElement && y.documentElement;
      } catch (d) {}c && c.doScroll && !function e() {
        if (!m.isReady) {
          try {
            c.doScroll("left");
          } catch (a) {
            return setTimeout(e, 50);
          }I(), m.ready();
        }
      }();
    }return H.promise(b);
  };var K = "undefined",
      L;for (L in m(k)) {
    break;
  }k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function () {
    var a, b, c, d;c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), _typeof(b.style.zoom) !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d));
  }), function () {
    var a = y.createElement("div");if (null == k.deleteExpando) {
      k.deleteExpando = !0;try {
        delete a.test;
      } catch (b) {
        k.deleteExpando = !1;
      }
    }a = null;
  }(), m.acceptData = function (a) {
    var b = m.noData[(a.nodeName + " ").toLowerCase()],
        c = +a.nodeType || 1;return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b;
  };var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      N = /([A-Z])/g;function O(a, b, c) {
    if (void 0 === c && 1 === a.nodeType) {
      var d = "data-" + b.replace(N, "-$1").toLowerCase();if (c = a.getAttribute(d), "string" == typeof c) {
        try {
          c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c;
        } catch (e) {}m.data(a, b, c);
      } else c = void 0;
    }return c;
  }function P(a) {
    var b;for (b in a) {
      if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
    }return !0;
  }function Q(a, b, d, e) {
    if (m.acceptData(a)) {
      var f,
          g,
          h = m.expando,
          i = a.nodeType,
          j = i ? m.cache : a,
          k = i ? a[h] : a[h] && h;if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : { toJSON: m.noop }), ("object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f;
    }
  }function R(a, b, c) {
    if (m.acceptData(a)) {
      var d,
          e,
          f = a.nodeType,
          g = f ? m.cache : a,
          h = f ? a[m.expando] : m.expando;if (g[h]) {
        if (b && (d = c ? g[h] : g[h].data)) {
          m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;while (e--) {
            delete d[b[e]];
          }if (c ? !P(d) : !m.isEmptyObject(d)) return;
        }(c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null);
      }
    }
  }m.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function hasData(a) {
      return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a);
    }, data: function data(a, b, c) {
      return Q(a, b, c);
    }, removeData: function removeData(a, b) {
      return R(a, b);
    }, _data: function _data(a, b, c) {
      return Q(a, b, c, !0);
    }, _removeData: function _removeData(a, b) {
      return R(a, b, !0);
    } }), m.fn.extend({ data: function data(a, b) {
      var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;if (void 0 === a) {
        if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
          c = g.length;while (c--) {
            g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d])));
          }m._data(f, "parsedAttrs", !0);
        }return e;
      }return "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? this.each(function () {
        m.data(this, a);
      }) : arguments.length > 1 ? this.each(function () {
        m.data(this, a, b);
      }) : f ? O(f, a, m.data(f, a)) : void 0;
    }, removeData: function removeData(a) {
      return this.each(function () {
        m.removeData(this, a);
      });
    } }), m.extend({ queue: function queue(a, b, c) {
      var d;return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0;
    }, dequeue: function dequeue(a, b) {
      b = b || "fx";var c = m.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = m._queueHooks(a, b),
          g = function g() {
        m.dequeue(a, b);
      };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    }, _queueHooks: function _queueHooks(a, b) {
      var c = b + "queueHooks";return m._data(a, c) || m._data(a, c, { empty: m.Callbacks("once memory").add(function () {
          m._removeData(a, b + "queue"), m._removeData(a, c);
        }) });
    } }), m.fn.extend({ queue: function queue(a, b) {
      var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = m.queue(this, a, b);m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a);
      });
    }, dequeue: function dequeue(a) {
      return this.each(function () {
        m.dequeue(this, a);
      });
    }, clearQueue: function clearQueue(a) {
      return this.queue(a || "fx", []);
    }, promise: function promise(a, b) {
      var c,
          d = 1,
          e = m.Deferred(),
          f = this,
          g = this.length,
          h = function h() {
        --d || e.resolveWith(f, [f]);
      };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) {
        c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      }return h(), e.promise(b);
    } });var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      T = ["Top", "Right", "Bottom", "Left"],
      U = function U(a, b) {
    return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a);
  },
      V = m.access = function (a, b, c, d, e, f, g) {
    var h = 0,
        i = a.length,
        j = null == c;if ("object" === m.type(c)) {
      e = !0;for (h in c) {
        m.access(a, b, h, c[h], !0, f, g);
      }
    } else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b2, c) {
      return j.call(m(a), c);
    })), b)) for (; i > h; h++) {
      b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    }return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  },
      W = /^(?:checkbox|radio)$/i;!function () {
    var a = y.createElement("input"),
        b = y.createElement("div"),
        c = y.createDocumentFragment();if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function () {
      k.noCloneEvent = !1;
    }), b.cloneNode(!0).click()), null == k.deleteExpando) {
      k.deleteExpando = !0;try {
        delete b.test;
      } catch (d) {
        k.deleteExpando = !1;
      }
    }
  }(), function () {
    var b,
        c,
        d = y.createElement("div");for (b in { submit: !0, change: !0, focusin: !0 }) {
      c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1);
    }d = null;
  }();var X = /^(?:input|select|textarea)$/i,
      Y = /^key/,
      Z = /^(?:mouse|pointer|contextmenu)|click/,
      $ = /^(?:focusinfocus|focusoutblur)$/,
      _ = /^([^.]*)(?:\.(.+)|)$/;function aa() {
    return !0;
  }function ba() {
    return !1;
  }function ca() {
    try {
      return y.activeElement;
    } catch (a) {}
  }m.event = { global: {}, add: function add(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          n,
          o,
          p,
          q,
          r = m._data(a);if (r) {
        c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) {
          return (typeof m === "undefined" ? "undefined" : _typeof(m)) === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments);
        }, k.elem = a), b = (b || "").match(E) || [""], h = b.length;while (h--) {
          f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && m.expr.match.needsContext.test(e), namespace: p.join(".") }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0);
        }a = null;
      }
    }, remove: function remove(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          n,
          o,
          p,
          q,
          r = m.hasData(a) && m._data(a);if (r && (k = r.events)) {
        b = (b || "").match(E) || [""], j = b.length;while (j--) {
          if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
            l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;while (f--) {
              g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));
            }i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o]);
          } else for (o in k) {
            m.event.remove(a, o + b[j], c, d, !0);
          }
        }m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"));
      }
    }, trigger: function trigger(b, c, d, e) {
      var f,
          g,
          h,
          i,
          k,
          l,
          n,
          o = [d || y],
          p = j.call(b, "type") ? b.type : b,
          q = j.call(b, "namespace") ? b.namespace.split(".") : [];if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
        if (!e && !k.noBubble && !m.isWindow(d)) {
          for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode) {
            o.push(h), l = h;
          }l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a);
        }n = 0;while ((h = o[n++]) && !b.isPropagationStopped()) {
          b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
        }if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
          l = d[g], l && (d[g] = null), m.event.triggered = p;try {
            d[p]();
          } catch (r) {}m.event.triggered = void 0, l && (d[g] = l);
        }return b.result;
      }
    }, dispatch: function dispatch(a) {
      a = m.event.fix(a);var b,
          c,
          e,
          f,
          g,
          h = [],
          i = d.call(arguments),
          j = (m._data(this, "events") || {})[a.type] || [],
          k = m.event.special[a.type] || {};if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
        h = m.event.handlers.call(this, a, j), b = 0;while ((f = h[b++]) && !a.isPropagationStopped()) {
          a.currentTarget = f.elem, g = 0;while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped()) {
            (!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()));
          }
        }return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    }, handlers: function handlers(a, b) {
      var c,
          d,
          e,
          f,
          g = [],
          h = b.delegateCount,
          i = a.target;if (h && i.nodeType && (!a.button || "click" !== a.type)) for (; i != this; i = i.parentNode || this) {
        if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
          for (e = [], f = 0; h > f; f++) {
            d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d);
          }e.length && g.push({ elem: i, handlers: e });
        }
      }return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
    }, fix: function fix(a) {
      if (a[m.expando]) return a;var b,
          c,
          d,
          e = a.type,
          f = a,
          g = this.fixHooks[e];g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length;while (b--) {
        c = d[b], a[c] = f[c];
      }return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a;
    }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function filter(a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
      } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function filter(a, b) {
        var c,
            d,
            e,
            f = b.button,
            g = b.fromElement;return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a;
      } }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          if (this !== ca() && this.focus) try {
            return this.focus(), !1;
          } catch (a) {}
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          return this === ca() && this.blur ? (this.blur(), !1) : void 0;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0;
        }, _default: function _default(a) {
          return m.nodeName(a.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
        } } }, simulate: function simulate(a, b, c, d) {
      var e = m.extend(new m.Event(), c, { type: a, isSimulated: !0, originalEvent: {} });d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
    } }, m.removeEvent = y.removeEventListener ? function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c, !1);
  } : function (a, b, c) {
    var d = "on" + b;a.detachEvent && (_typeof(a[d]) === K && (a[d] = null), a.detachEvent(d, c));
  }, m.Event = function (a, b) {
    return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? aa : ba) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void (this[m.expando] = !0)) : new m.Event(a, b);
  }, m.Event.prototype = { isDefaultPrevented: ba, isPropagationStopped: ba, isImmediatePropagationStopped: ba, preventDefault: function preventDefault() {
      var a = this.originalEvent;this.isDefaultPrevented = aa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
    }, stopPropagation: function stopPropagation() {
      var a = this.originalEvent;this.isPropagationStopped = aa, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0);
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var a = this.originalEvent;this.isImmediatePropagationStopped = aa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation();
    } }, m.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
    m.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
        var c,
            d = this,
            e = a.relatedTarget,
            f = a.handleObj;return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
      } };
  }), k.submitBubbles || (m.event.special.submit = { setup: function setup() {
      return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function (a) {
        var b = a.target,
            c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function (a) {
          a._submit_bubble = !0;
        }), m._data(c, "submitBubbles", !0));
      });
    }, postDispatch: function postDispatch(a) {
      a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0));
    }, teardown: function teardown() {
      return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit");
    } }), k.changeBubbles || (m.event.special.change = { setup: function setup() {
      return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function (a) {
        "checked" === a.originalEvent.propertyName && (this._just_changed = !0);
      }), m.event.add(this, "click._change", function (a) {
        this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0);
      })), !1) : void m.event.add(this, "beforeactivate._change", function (a) {
        var b = a.target;X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function (a) {
          !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0);
        }), m._data(b, "changeBubbles", !0));
      });
    }, handle: function handle(a) {
      var b = a.target;return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0;
    }, teardown: function teardown() {
      return m.event.remove(this, "._change"), !X.test(this.nodeName);
    } }), k.focusinBubbles || m.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
    var c = function c(a) {
      m.event.simulate(b, a.target, m.event.fix(a), !0);
    };m.event.special[b] = { setup: function setup() {
        var d = this.ownerDocument || this,
            e = m._data(d, b);e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1);
      }, teardown: function teardown() {
        var d = this.ownerDocument || this,
            e = m._data(d, b) - 1;e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b));
      } };
  }), m.fn.extend({ on: function on(a, b, c, d, e) {
      var f, g;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
        "string" != typeof b && (c = c || b, b = void 0);for (f in a) {
          this.on(f, b, c, a[f], e);
        }return this;
      }if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = ba;else if (!d) return this;return 1 === e && (g = d, d = function d(a) {
        return m().off(a), g.apply(this, arguments);
      }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function () {
        m.event.add(this, a, d, c, b);
      });
    }, one: function one(a, b, c, d) {
      return this.on(a, b, c, d, 1);
    }, off: function off(a, b, c) {
      var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
        for (e in a) {
          this.off(e, b, a[e]);
        }return this;
      }return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = ba), this.each(function () {
        m.event.remove(this, a, c, b);
      });
    }, trigger: function trigger(a, b) {
      return this.each(function () {
        m.event.trigger(a, b, this);
      });
    }, triggerHandler: function triggerHandler(a, b) {
      var c = this[0];return c ? m.event.trigger(a, b, c, !0) : void 0;
    } });function da(a) {
    var b = ea.split("|"),
        c = a.createDocumentFragment();if (c.createElement) while (b.length) {
      c.createElement(b.pop());
    }return c;
  }var ea = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
      fa = / jQuery\d+="(?:null|\d+)"/g,
      ga = new RegExp("<(?:" + ea + ")[\\s/>]", "i"),
      ha = /^\s+/,
      ia = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      ja = /<([\w:]+)/,
      ka = /<tbody/i,
      la = /<|&#?\w+;/,
      ma = /<(?:script|style|link)/i,
      na = /checked\s*(?:[^=]|=\s*.checked.)/i,
      oa = /^$|\/(?:java|ecma)script/i,
      pa = /^true\/(.*)/,
      qa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      ra = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] },
      sa = da(y),
      ta = sa.appendChild(y.createElement("div"));ra.optgroup = ra.option, ra.tbody = ra.tfoot = ra.colgroup = ra.caption = ra.thead, ra.th = ra.td;function ua(a, b) {
    var c,
        d,
        e = 0,
        f = _typeof(a.getElementsByTagName) !== K ? a.getElementsByTagName(b || "*") : _typeof(a.querySelectorAll) !== K ? a.querySelectorAll(b || "*") : void 0;if (!f) for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) {
      !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ua(d, b));
    }return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f;
  }function va(a) {
    W.test(a.type) && (a.defaultChecked = a.checked);
  }function wa(a, b) {
    return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
  }function xa(a) {
    return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a;
  }function ya(a) {
    var b = pa.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
  }function za(a, b) {
    for (var c, d = 0; null != (c = a[d]); d++) {
      m._data(c, "globalEval", !b || m._data(b[d], "globalEval"));
    }
  }function Aa(a, b) {
    if (1 === b.nodeType && m.hasData(a)) {
      var c,
          d,
          e,
          f = m._data(a),
          g = m._data(b, f),
          h = f.events;if (h) {
        delete g.handle, g.events = {};for (c in h) {
          for (d = 0, e = h[c].length; e > d; d++) {
            m.event.add(b, c, h[c][d]);
          }
        }
      }g.data && (g.data = m.extend({}, g.data));
    }
  }function Ba(a, b) {
    var c, d, e;if (1 === b.nodeType) {
      if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
        e = m._data(b);for (d in e.events) {
          m.removeEvent(b, d, e.handle);
        }b.removeAttribute(m.expando);
      }"script" === c && b.text !== a.text ? (xa(b).text = a.text, ya(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
    }
  }m.extend({ clone: function clone(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i = m.contains(a.ownerDocument, a);if (k.html5Clone || m.isXMLDoc(a) || !ga.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ta.innerHTML = a.outerHTML, ta.removeChild(f = ta.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a))) for (d = ua(f), h = ua(a), g = 0; null != (e = h[g]); ++g) {
        d[g] && Ba(e, d[g]);
      }if (b) if (c) for (h = h || ua(a), d = d || ua(f), g = 0; null != (e = h[g]); g++) {
        Aa(e, d[g]);
      } else Aa(a, f);return d = ua(f, "script"), d.length > 0 && za(d, !i && ua(a, "script")), d = h = e = null, f;
    }, buildFragment: function buildFragment(a, b, c, d) {
      for (var e, f, g, h, i, j, l, n = a.length, o = da(b), p = [], q = 0; n > q; q++) {
        if (f = a[q], f || 0 === f) if ("object" === m.type(f)) m.merge(p, f.nodeType ? [f] : f);else if (la.test(f)) {
          h = h || o.appendChild(b.createElement("div")), i = (ja.exec(f) || ["", ""])[1].toLowerCase(), l = ra[i] || ra._default, h.innerHTML = l[1] + f.replace(ia, "<$1></$2>") + l[2], e = l[0];while (e--) {
            h = h.lastChild;
          }if (!k.leadingWhitespace && ha.test(f) && p.push(b.createTextNode(ha.exec(f)[0])), !k.tbody) {
            f = "table" !== i || ka.test(f) ? "<table>" !== l[1] || ka.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;while (e--) {
              m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
            }
          }m.merge(p, h.childNodes), h.textContent = "";while (h.firstChild) {
            h.removeChild(h.firstChild);
          }h = o.lastChild;
        } else p.push(b.createTextNode(f));
      }h && o.removeChild(h), k.appendChecked || m.grep(ua(p, "input"), va), q = 0;while (f = p[q++]) {
        if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ua(o.appendChild(f), "script"), g && za(h), c)) {
          e = 0;while (f = h[e++]) {
            oa.test(f.type || "") && c.push(f);
          }
        }
      }return h = null, o;
    }, cleanData: function cleanData(a, b) {
      for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++) {
        if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) {
          if (g.events) for (e in g.events) {
            n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
          }j[f] && (delete j[f], l ? delete d[i] : _typeof(d.removeAttribute) !== K ? d.removeAttribute(i) : d[i] = null, c.push(f));
        }
      }
    } }), m.fn.extend({ text: function text(a) {
      return V(this, function (a) {
        return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a));
      }, null, a, arguments.length);
    }, append: function append() {
      return this.domManip(arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = wa(this, a);b.appendChild(a);
        }
      });
    }, prepend: function prepend() {
      return this.domManip(arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = wa(this, a);b.insertBefore(a, b.firstChild);
        }
      });
    }, before: function before() {
      return this.domManip(arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    }, after: function after() {
      return this.domManip(arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    }, remove: function remove(a, b) {
      for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++) {
        b || 1 !== c.nodeType || m.cleanData(ua(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && za(ua(c, "script")), c.parentNode.removeChild(c));
      }return this;
    }, empty: function empty() {
      for (var a, b = 0; null != (a = this[b]); b++) {
        1 === a.nodeType && m.cleanData(ua(a, !1));while (a.firstChild) {
          a.removeChild(a.firstChild);
        }a.options && m.nodeName(a, "select") && (a.options.length = 0);
      }return this;
    }, clone: function clone(a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
        return m.clone(this, a, b);
      });
    }, html: function html(a) {
      return V(this, function (a) {
        var b = this[0] || {},
            c = 0,
            d = this.length;if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(fa, "") : void 0;if (!("string" != typeof a || ma.test(a) || !k.htmlSerialize && ga.test(a) || !k.leadingWhitespace && ha.test(a) || ra[(ja.exec(a) || ["", ""])[1].toLowerCase()])) {
          a = a.replace(ia, "<$1></$2>");try {
            for (; d > c; c++) {
              b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ua(b, !1)), b.innerHTML = a);
            }b = 0;
          } catch (e) {}
        }b && this.empty().append(a);
      }, null, a, arguments.length);
    }, replaceWith: function replaceWith() {
      var a = arguments[0];return this.domManip(arguments, function (b) {
        a = this.parentNode, m.cleanData(ua(this)), a && a.replaceChild(b, this);
      }), a && (a.length || a.nodeType) ? this : this.remove();
    }, detach: function detach(a) {
      return this.remove(a, !0);
    }, domManip: function domManip(a, b) {
      a = e.apply([], a);var c,
          d,
          f,
          g,
          h,
          i,
          j = 0,
          l = this.length,
          n = this,
          o = l - 1,
          p = a[0],
          q = m.isFunction(p);if (q || l > 1 && "string" == typeof p && !k.checkClone && na.test(p)) return this.each(function (c) {
        var d = n.eq(c);q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
      });if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
        for (g = m.map(ua(i, "script"), xa), f = g.length; l > j; j++) {
          d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ua(d, "script"))), b.call(this[j], d, j);
        }if (f) for (h = g[g.length - 1].ownerDocument, m.map(g, ya), j = 0; f > j; j++) {
          d = g[j], oa.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qa, "")));
        }i = c = null;
      }return this;
    } }), m.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
    m.fn[a] = function (a) {
      for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++) {
        c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get());
      }return this.pushStack(e);
    };
  });var Ca,
      Da = {};function Ea(b, c) {
    var d,
        e = m(c.createElement(b)).appendTo(c.body),
        f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");return e.detach(), f;
  }function Fa(a) {
    var b = y,
        c = Da[a];return c || (c = Ea(a, b), "none" !== c && c || (Ca = (Ca || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ca[0].contentWindow || Ca[0].contentDocument).document, b.write(), b.close(), c = Ea(a, b), Ca.detach()), Da[a] = c), c;
  }!function () {
    var a;k.shrinkWrapBlocks = function () {
      if (null != a) return a;a = !1;var b, c, d;return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), _typeof(b.style.zoom) !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0;
    };
  }();var Ga = /^margin/,
      Ha = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
      Ia,
      Ja,
      Ka = /^(top|right|bottom|left)$/;a.getComputedStyle ? (Ia = function Ia(b) {
    return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null);
  }, Ja = function Ja(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;return c = c || Ia(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Ha.test(g) && Ga.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + "";
  }) : y.documentElement.currentStyle && (Ia = function Ia(a) {
    return a.currentStyle;
  }, Ja = function Ja(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;return c = c || Ia(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Ha.test(g) && !Ka.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto";
  });function La(a, b) {
    return { get: function get() {
        var c = a();if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments);
      } };
  }!function () {
    var b, c, d, e, f, g, h;if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = d && d.style) {
      var _i = function _i() {
        var b, c, d, i;c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, f = "4px" === (a.getComputedStyle(b, null) || { width: "4px" }).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight), b.removeChild(i)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), c.removeChild(d));
      };

      c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, { reliableHiddenOffsets: function reliableHiddenOffsets() {
          return null == g && _i(), g;
        }, boxSizingReliable: function boxSizingReliable() {
          return null == f && _i(), f;
        }, pixelPosition: function pixelPosition() {
          return null == e && _i(), e;
        }, reliableMarginRight: function reliableMarginRight() {
          return null == h && _i(), h;
        } });
    }
  }(), m.swap = function (a, b, c, d) {
    var e,
        f,
        g = {};for (f in b) {
      g[f] = a.style[f], a.style[f] = b[f];
    }e = c.apply(a, d || []);for (f in b) {
      a.style[f] = g[f];
    }return e;
  };var Ma = /alpha\([^)]*\)/i,
      Na = /opacity\s*=\s*([^)]*)/,
      Oa = /^(none|table(?!-c[ea]).+)/,
      Pa = new RegExp("^(" + S + ")(.*)$", "i"),
      Qa = new RegExp("^([+-])=(" + S + ")", "i"),
      Ra = { position: "absolute", visibility: "hidden", display: "block" },
      Sa = { letterSpacing: "0", fontWeight: "400" },
      Ta = ["Webkit", "O", "Moz", "ms"];function Ua(a, b) {
    if (b in a) return b;var c = b.charAt(0).toUpperCase() + b.slice(1),
        d = b,
        e = Ta.length;while (e--) {
      if (b = Ta[e] + c, b in a) return b;
    }return d;
  }function Va(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) {
      d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fa(d.nodeName)))) : (e = U(d), (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
    }for (g = 0; h > g; g++) {
      d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
    }return a;
  }function Wa(a, b, c) {
    var d = Pa.exec(b);return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
  }function Xa(a, b, c, d, e) {
    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
      "margin" === c && (g += m.css(a, c + T[f], !0, e)), d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)));
    }return g;
  }function Ya(a, b, c) {
    var d = !0,
        e = "width" === b ? a.offsetWidth : a.offsetHeight,
        f = Ia(a),
        g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);if (0 >= e || null == e) {
      if (e = Ja(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ha.test(e)) return e;d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
    }return e + Xa(a, b, c || (g ? "border" : "content"), d, f) + "px";
  }m.extend({ cssHooks: { opacity: { get: function get(a, b) {
          if (b) {
            var c = Ja(a, "opacity");return "" === c ? "1" : c;
          }
        } } }, cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": k.cssFloat ? "cssFloat" : "styleFloat" }, style: function style(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
            f,
            g,
            h = m.camelCase(b),
            i = a.style;if (b = m.cssProps[h] || (m.cssProps[h] = Ua(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];if (f = typeof c === "undefined" ? "undefined" : _typeof(c), "string" === f && (e = Qa.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
          i[b] = c;
        } catch (j) {}
      }
    }, css: function css(a, b, c, d) {
      var e,
          f,
          g,
          h = m.camelCase(b);return b = m.cssProps[h] || (m.cssProps[h] = Ua(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Ja(a, b, d)), "normal" === f && b in Sa && (f = Sa[b]), "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f;
    } }), m.each(["height", "width"], function (a, b) {
    m.cssHooks[b] = { get: function get(a, c, d) {
        return c ? Oa.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Ra, function () {
          return Ya(a, b, d);
        }) : Ya(a, b, d) : void 0;
      }, set: function set(a, c, d) {
        var e = d && Ia(a);return Wa(a, c, d ? Xa(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0);
      } };
  }), k.opacity || (m.cssHooks.opacity = { get: function get(a, b) {
      return Na.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "";
    }, set: function set(a, b) {
      var c = a.style,
          d = a.currentStyle,
          e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
          f = d && d.filter || c.filter || "";c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Ma, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Ma.test(f) ? f.replace(Ma, e) : f + " " + e);
    } }), m.cssHooks.marginRight = La(k.reliableMarginRight, function (a, b) {
    return b ? m.swap(a, { display: "inline-block" }, Ja, [a, "marginRight"]) : void 0;
  }), m.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
    m.cssHooks[a + b] = { expand: function expand(c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
          e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
        }return e;
      } }, Ga.test(a) || (m.cssHooks[a + b].set = Wa);
  }), m.fn.extend({ css: function css(a, b) {
      return V(this, function (a, b, c) {
        var d,
            e,
            f = {},
            g = 0;if (m.isArray(b)) {
          for (d = Ia(a), e = b.length; e > g; g++) {
            f[b[g]] = m.css(a, b[g], !1, d);
          }return f;
        }return void 0 !== c ? m.style(a, b, c) : m.css(a, b);
      }, a, b, arguments.length > 1);
    }, show: function show() {
      return Va(this, !0);
    }, hide: function hide() {
      return Va(this);
    }, toggle: function toggle(a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        U(this) ? m(this).show() : m(this).hide();
      });
    } });function Za(a, b, c, d, e) {
    return new Za.prototype.init(a, b, c, d, e);
  }m.Tween = Za, Za.prototype = { constructor: Za, init: function init(a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px");
    }, cur: function cur() {
      var a = Za.propHooks[this.prop];return a && a.get ? a.get(this) : Za.propHooks._default.get(this);
    }, run: function run(a) {
      var b,
          c = Za.propHooks[this.prop];return this.options.duration ? this.pos = b = m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Za.propHooks._default.set(this), this;
    } }, Za.prototype.init.prototype = Za.prototype, Za.propHooks = { _default: { get: function get(a) {
        var b;return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop];
      }, set: function set(a) {
        m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
      } } }, Za.propHooks.scrollTop = Za.propHooks.scrollLeft = { set: function set(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    } }, m.easing = { linear: function linear(a) {
      return a;
    }, swing: function swing(a) {
      return .5 - Math.cos(a * Math.PI) / 2;
    } }, m.fx = Za.prototype.init, m.fx.step = {};var $a,
      _a,
      ab = /^(?:toggle|show|hide)$/,
      bb = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
      cb = /queueHooks$/,
      db = [ib],
      eb = { "*": [function (a, b) {
      var c = this.createTween(a, b),
          d = c.cur(),
          e = bb.exec(b),
          f = e && e[3] || (m.cssNumber[a] ? "" : "px"),
          g = (m.cssNumber[a] || "px" !== f && +d) && bb.exec(m.css(c.elem, a)),
          h = 1,
          i = 20;if (g && g[3] !== f) {
        f = f || g[3], e = e || [], g = +d || 1;do {
          h = h || ".5", g /= h, m.style(c.elem, a, g + f);
        } while (h !== (h = c.cur() / d) && 1 !== h && --i);
      }return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c;
    }] };function fb() {
    return setTimeout(function () {
      $a = void 0;
    }), $a = m.now();
  }function gb(a, b) {
    var c,
        d = { height: a },
        e = 0;for (b = b ? 1 : 0; 4 > e; e += 2 - b) {
      c = T[e], d["margin" + c] = d["padding" + c] = a;
    }return b && (d.opacity = d.width = a), d;
  }function hb(a, b, c) {
    for (var d, e = (eb[b] || []).concat(eb["*"]), f = 0, g = e.length; g > f; f++) {
      if (d = e[f].call(c, b, a)) return d;
    }
  }function ib(a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        l,
        n = this,
        o = {},
        p = a.style,
        q = a.nodeType && U(a),
        r = m._data(a, "fxshow");c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
      h.unqueued || i();
    }), h.unqueued++, n.always(function () {
      n.always(function () {
        h.unqueued--, m.queue(a, "fx").length || h.empty.fire();
      });
    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fa(a.nodeName) : j, "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fa(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function () {
      p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2];
    }));for (d in b) {
      if (e = b[d], ab.exec(e)) {
        if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
          if ("show" !== e || !r || void 0 === r[d]) continue;q = !0;
        }o[d] = r && r[d] || m.style(a, d);
      } else j = void 0;
    }if (m.isEmptyObject(o)) "inline" === ("none" === j ? Fa(a.nodeName) : j) && (p.display = j);else {
      r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), q ? m(a).show() : n.done(function () {
        m(a).hide();
      }), n.done(function () {
        var b;m._removeData(a, "fxshow");for (b in o) {
          m.style(a, b, o[b]);
        }
      });for (d in o) {
        g = hb(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0));
      }
    }
  }function jb(a, b) {
    var c, d, e, f, g;for (c in a) {
      if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) {
        f = g.expand(f), delete a[d];for (c in f) {
          c in a || (a[c] = f[c], b[c] = e);
        }
      } else b[d] = e;
    }
  }function kb(a, b, c) {
    var d,
        e,
        f = 0,
        g = db.length,
        h = m.Deferred().always(function () {
      delete i.elem;
    }),
        i = function i() {
      if (e) return !1;for (var b = $a || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
        j.tweens[g].run(f);
      }return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
    },
        j = h.promise({ elem: a, props: m.extend({}, b), opts: m.extend(!0, { specialEasing: {} }, c), originalProperties: b, originalOptions: c, startTime: $a || fb(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
        var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
      }, stop: function stop(b) {
        var c = 0,
            d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; d > c; c++) {
          j.tweens[c].run(1);
        }return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
      } }),
        k = j.props;for (jb(k, j.opts.specialEasing); g > f; f++) {
      if (d = db[f].call(j, a, k, j.opts)) return d;
    }return m.map(k, hb, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
  }m.Animation = m.extend(kb, { tweener: function tweener(a, b) {
      m.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");for (var c, d = 0, e = a.length; e > d; d++) {
        c = a[d], eb[c] = eb[c] || [], eb[c].unshift(b);
      }
    }, prefilter: function prefilter(a, b) {
      b ? db.unshift(a) : db.push(a);
    } }), m.speed = function (a, b, c) {
    var d = a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? m.extend({}, a) : { complete: c || !c && b || m.isFunction(a) && a, duration: a, easing: c && b || b && !m.isFunction(b) && b };return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
      m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue);
    }, d;
  }, m.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
      return this.filter(U).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
    }, animate: function animate(a, b, c, d) {
      var e = m.isEmptyObject(a),
          f = m.speed(b, c, d),
          g = function g() {
        var b = kb(this, m.extend({}, a), f);(e || m._data(this, "finish")) && b.stop(!0);
      };return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
    }, stop: function stop(a, b, c) {
      var d = function d(a) {
        var b = a.stop;delete a.stop, b(c);
      };return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
        var b = !0,
            e = null != a && a + "queueHooks",
            f = m.timers,
            g = m._data(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
          g[e] && g[e].stop && cb.test(e) && d(g[e]);
        }for (e = f.length; e--;) {
          f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
        }(b || !c) && m.dequeue(this, a);
      });
    }, finish: function finish(a) {
      return a !== !1 && (a = a || "fx"), this.each(function () {
        var b,
            c = m._data(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = m.timers,
            g = d ? d.length : 0;for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
          f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
        }for (b = 0; g > b; b++) {
          d[b] && d[b].finish && d[b].finish.call(this);
        }delete c.finish;
      });
    } }), m.each(["toggle", "show", "hide"], function (a, b) {
    var c = m.fn[b];m.fn[b] = function (a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e);
    };
  }), m.each({ slideDown: gb("show"), slideUp: gb("hide"), slideToggle: gb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
    m.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d);
    };
  }), m.timers = [], m.fx.tick = function () {
    var a,
        b = m.timers,
        c = 0;for ($a = m.now(); c < b.length; c++) {
      a = b[c], a() || b[c] !== a || b.splice(c--, 1);
    }b.length || m.fx.stop(), $a = void 0;
  }, m.fx.timer = function (a) {
    m.timers.push(a), a() ? m.fx.start() : m.timers.pop();
  }, m.fx.interval = 13, m.fx.start = function () {
    _a || (_a = setInterval(m.fx.tick, m.fx.interval));
  }, m.fx.stop = function () {
    clearInterval(_a), _a = null;
  }, m.fx.speeds = { slow: 600, fast: 200, _default: 400 }, m.fn.delay = function (a, b) {
    return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
      var d = setTimeout(b, a);c.stop = function () {
        clearTimeout(d);
      };
    });
  }, function () {
    var a, b, c, d, e;b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value;
  }();var lb = /\r/g;m.fn.extend({ val: function val(a) {
      var b,
          c,
          d,
          e = this[0];{
        if (arguments.length) return d = m.isFunction(a), this.each(function (c) {
          var e;1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function (a) {
            return null == a ? "" : a + "";
          })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
        });if (e) return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(lb, "") : null == c ? "" : c);
      }
    } }), m.extend({ valHooks: { option: { get: function get(a) {
          var b = m.find.attr(a, "value");return null != b ? b : m.trim(m.text(a));
        } }, select: { get: function get(a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
            if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
              if (b = m(c).val(), f) return b;g.push(b);
            }
          }return g;
        }, set: function set(a, b) {
          var c,
              d,
              e = a.options,
              f = m.makeArray(b),
              g = e.length;while (g--) {
            if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0) try {
              d.selected = c = !0;
            } catch (h) {
              d.scrollHeight;
            } else d.selected = !1;
          }return c || (a.selectedIndex = -1), e;
        } } } }), m.each(["radio", "checkbox"], function () {
    m.valHooks[this] = { set: function set(a, b) {
        return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0;
      } }, k.checkOn || (m.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    });
  });var mb,
      nb,
      ob = m.expr.attrHandle,
      pb = /^(?:checked|selected)$/i,
      qb = k.getSetAttribute,
      rb = k.input;m.fn.extend({ attr: function attr(a, b) {
      return V(this, m.attr, a, b, arguments.length > 1);
    }, removeAttr: function removeAttr(a) {
      return this.each(function () {
        m.removeAttr(this, a);
      });
    } }), m.extend({ attr: function attr(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (a && 3 !== f && 8 !== f && 2 !== f) return _typeof(a.getAttribute) === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nb : mb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void m.removeAttr(a, b));
    }, removeAttr: function removeAttr(a, b) {
      var c,
          d,
          e = 0,
          f = b && b.match(E);if (f && 1 === a.nodeType) while (c = f[e++]) {
        d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rb && qb || !pb.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), a.removeAttribute(qb ? c : d);
      }
    }, attrHooks: { type: { set: function set(a, b) {
          if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
            var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
          }
        } } } }), nb = { set: function set(a, b, c) {
      return b === !1 ? m.removeAttr(a, c) : rb && qb || !pb.test(c) ? a.setAttribute(!qb && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, c;
    } }, m.each(m.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = ob[b] || m.find.attr;ob[b] = rb && qb || !pb.test(b) ? function (a, b, d) {
      var e, f;return d || (f = ob[b], ob[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, ob[b] = f), e;
    } : function (a, b, c) {
      return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null;
    };
  }), rb && qb || (m.attrHooks.value = { set: function set(a, b, c) {
      return m.nodeName(a, "input") ? void (a.defaultValue = b) : mb && mb.set(a, b, c);
    } }), qb || (mb = { set: function set(a, b, c) {
      var d = a.getAttributeNode(c);return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0;
    } }, ob.id = ob.name = ob.coords = function (a, b, c) {
    var d;return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null;
  }, m.valHooks.button = { get: function get(a, b) {
      var c = a.getAttributeNode(b);return c && c.specified ? c.value : void 0;
    }, set: mb.set }, m.attrHooks.contenteditable = { set: function set(a, b, c) {
      mb.set(a, "" === b ? !1 : b, c);
    } }, m.each(["width", "height"], function (a, b) {
    m.attrHooks[b] = { set: function set(a, c) {
        return "" === c ? (a.setAttribute(b, "auto"), c) : void 0;
      } };
  })), k.style || (m.attrHooks.style = { get: function get(a) {
      return a.style.cssText || void 0;
    }, set: function set(a, b) {
      return a.style.cssText = b + "";
    } });var sb = /^(?:input|select|textarea|button|object)$/i,
      tb = /^(?:a|area)$/i;m.fn.extend({ prop: function prop(a, b) {
      return V(this, m.prop, a, b, arguments.length > 1);
    }, removeProp: function removeProp(a) {
      return a = m.propFix[a] || a, this.each(function () {
        try {
          this[a] = void 0, delete this[a];
        } catch (b) {}
      });
    } }), m.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function prop(a, b, c) {
      var d,
          e,
          f,
          g = a.nodeType;if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
    }, propHooks: { tabIndex: { get: function get(a) {
          var b = m.find.attr(a, "tabindex");return b ? parseInt(b, 10) : sb.test(a.nodeName) || tb.test(a.nodeName) && a.href ? 0 : -1;
        } } } }), k.hrefNormalized || m.each(["href", "src"], function (a, b) {
    m.propHooks[b] = { get: function get(a) {
        return a.getAttribute(b, 4);
      } };
  }), k.optSelected || (m.propHooks.selected = { get: function get(a) {
      var b = a.parentNode;return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null;
    } }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    m.propFix[this.toLowerCase()] = this;
  }), k.enctype || (m.propFix.enctype = "encoding");var ub = /[\t\r\n\f]/g;m.fn.extend({ addClass: function addClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h = 0,
          i = this.length,
          j = "string" == typeof a && a;if (m.isFunction(a)) return this.each(function (b) {
        m(this).addClass(a.call(this, b, this.className));
      });if (j) for (b = (a || "").match(E) || []; i > h; h++) {
        if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ub, " ") : " ")) {
          f = 0;while (e = b[f++]) {
            d.indexOf(" " + e + " ") < 0 && (d += e + " ");
          }g = m.trim(d), c.className !== g && (c.className = g);
        }
      }return this;
    }, removeClass: function removeClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h = 0,
          i = this.length,
          j = 0 === arguments.length || "string" == typeof a && a;if (m.isFunction(a)) return this.each(function (b) {
        m(this).removeClass(a.call(this, b, this.className));
      });if (j) for (b = (a || "").match(E) || []; i > h; h++) {
        if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ub, " ") : "")) {
          f = 0;while (e = b[f++]) {
            while (d.indexOf(" " + e + " ") >= 0) {
              d = d.replace(" " + e + " ", " ");
            }
          }g = a ? m.trim(d) : "", c.className !== g && (c.className = g);
        }
      }return this;
    }, toggleClass: function toggleClass(a, b) {
      var c = typeof a === "undefined" ? "undefined" : _typeof(a);return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function (c) {
        m(this).toggleClass(a.call(this, c, this.className, b), b);
      } : function () {
        if ("string" === c) {
          var b,
              d = 0,
              e = m(this),
              f = a.match(E) || [];while (b = f[d++]) {
            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
          }
        } else (c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "");
      });
    }, hasClass: function hasClass(a) {
      for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) {
        if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ub, " ").indexOf(b) >= 0) return !0;
      }return !1;
    } }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
    m.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    };
  }), m.fn.extend({ hover: function hover(a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    }, bind: function bind(a, b, c) {
      return this.on(a, null, b, c);
    }, unbind: function unbind(a, b) {
      return this.off(a, null, b);
    }, delegate: function delegate(a, b, c, d) {
      return this.on(b, a, c, d);
    }, undelegate: function undelegate(a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
    } });var vb = m.now(),
      wb = /\?/,
      xb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON = function (b) {
    if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");var c,
        d = null,
        e = m.trim(b + "");return e && !m.trim(e.replace(xb, function (a, b, e, f) {
      return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "");
    })) ? Function("return " + e)() : m.error("Invalid JSON: " + b);
  }, m.parseXML = function (b) {
    var c, d;if (!b || "string" != typeof b) return null;try {
      a.DOMParser ? (d = new DOMParser(), c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b));
    } catch (e) {
      c = void 0;
    }return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c;
  };var yb,
      zb,
      Ab = /#.*$/,
      Bb = /([?&])_=[^&]*/,
      Cb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      Db = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Eb = /^(?:GET|HEAD)$/,
      Fb = /^\/\//,
      Gb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      Hb = {},
      Ib = {},
      Jb = "*/".concat("*");try {
    zb = location.href;
  } catch (Kb) {
    zb = y.createElement("a"), zb.href = "", zb = zb.href;
  }yb = Gb.exec(zb.toLowerCase()) || [];function Lb(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");var d,
          e = 0,
          f = b.toLowerCase().match(E) || [];if (m.isFunction(c)) while (d = f[e++]) {
        "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
      }
    };
  }function Mb(a, b, c, d) {
    var e = {},
        f = a === Ib;function g(h) {
      var i;return e[h] = !0, m.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }return g(b.dataTypes[0]) || !e["*"] && g("*");
  }function Nb(a, b) {
    var c,
        d,
        e = m.ajaxSettings.flatOptions || {};for (d in b) {
      void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
    }return c && m.extend(!0, a, c), a;
  }function Ob(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.contents,
        i = a.dataTypes;while ("*" === i[0]) {
      i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
    }if (e) for (g in h) {
      if (h[g] && h[g].test(e)) {
        i.unshift(g);break;
      }
    }if (i[0] in c) f = i[0];else {
      for (g in c) {
        if (!i[0] || a.converters[g + " " + i[0]]) {
          f = g;break;
        }d || (d = g);
      }f = f || d;
    }return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }function Pb(a, b, c, d) {
    var e,
        f,
        g,
        h,
        i,
        j = {},
        k = a.dataTypes.slice();if (k[1]) for (g in a.converters) {
      j[g.toLowerCase()] = a.converters[g];
    }f = k.shift();while (f) {
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
        if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
          }
        }if (g !== !0) if (g && a["throws"]) b = g(b);else try {
          b = g(b);
        } catch (l) {
          return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
        }
      }
    }return { state: "success", data: b };
  }m.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: zb, type: "GET", isLocal: Db.test(yb[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Jb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": m.parseJSON, "text xml": m.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
      return b ? Nb(Nb(a, m.ajaxSettings), b) : Nb(m.ajaxSettings, a);
    }, ajaxPrefilter: Lb(Hb), ajaxTransport: Lb(Ib), ajax: function ajax(a, b) {
      "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) && (b = a, a = void 0), b = b || {};var c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = m.ajaxSetup({}, b),
          l = k.context || k,
          n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event,
          o = m.Deferred(),
          p = m.Callbacks("once memory"),
          q = k.statusCode || {},
          r = {},
          s = {},
          t = 0,
          u = "canceled",
          v = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
          var b;if (2 === t) {
            if (!j) {
              j = {};while (b = Cb.exec(f)) {
                j[b[1].toLowerCase()] = b[2];
              }
            }b = j[a.toLowerCase()];
          }return null == b ? null : b;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return 2 === t ? f : null;
        }, setRequestHeader: function setRequestHeader(a, b) {
          var c = a.toLowerCase();return t || (a = s[c] = s[c] || a, r[a] = b), this;
        }, overrideMimeType: function overrideMimeType(a) {
          return t || (k.mimeType = a), this;
        }, statusCode: function statusCode(a) {
          var b;if (a) if (2 > t) for (b in a) {
            q[b] = [q[b], a[b]];
          } else v.always(a[v.status]);return this;
        }, abort: function abort(a) {
          var b = a || u;return i && i.abort(b), x(0, b), this;
        } };if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zb) + "").replace(Ab, "").replace(Fb, yb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (c = Gb.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yb[1] && c[2] === yb[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yb[3] || ("http:" === yb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mb(Hb, k, b, v), 2 === t) return v;h = m.event && k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Eb.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wb.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Bb.test(e) ? e.replace(Bb, "$1_=" + vb++) : e + (wb.test(e) ? "&" : "?") + "_=" + vb++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jb + "; q=0.01" : "") : k.accepts["*"]);for (d in k.headers) {
        v.setRequestHeader(d, k.headers[d]);
      }if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();u = "abort";for (d in { success: 1, error: 1, complete: 1 }) {
        v[d](k[d]);
      }if (i = Mb(Ib, k, b, v)) {
        v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
          v.abort("timeout");
        }, k.timeout));try {
          t = 1, i.send(r, x);
        } catch (w) {
          if (!(2 > t)) throw w;x(-1, w);
        }
      } else x(-1, "No Transport");function x(a, b, c, d) {
        var j,
            r,
            s,
            u,
            w,
            x = b;2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Ob(k, v, c)), u = Pb(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop")));
      }return v;
    }, getJSON: function getJSON(a, b, c) {
      return m.get(a, b, c, "json");
    }, getScript: function getScript(a, b) {
      return m.get(a, void 0, b, "script");
    } }), m.each(["get", "post"], function (a, b) {
    m[b] = function (a, c, d, e) {
      return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({ url: a, type: b, dataType: e, data: c, success: d });
    };
  }), m._evalUrl = function (a) {
    return m.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 });
  }, m.fn.extend({ wrapAll: function wrapAll(a) {
      if (m.isFunction(a)) return this.each(function (b) {
        m(this).wrapAll(a.call(this, b));
      });if (this[0]) {
        var b = m(a, this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
          var a = this;while (a.firstChild && 1 === a.firstChild.nodeType) {
            a = a.firstChild;
          }return a;
        }).append(this);
      }return this;
    }, wrapInner: function wrapInner(a) {
      return this.each(m.isFunction(a) ? function (b) {
        m(this).wrapInner(a.call(this, b));
      } : function () {
        var b = m(this),
            c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
      });
    }, wrap: function wrap(a) {
      var b = m.isFunction(a);return this.each(function (c) {
        m(this).wrapAll(b ? a.call(this, c) : a);
      });
    }, unwrap: function unwrap() {
      return this.parent().each(function () {
        m.nodeName(this, "body") || m(this).replaceWith(this.childNodes);
      }).end();
    } }), m.expr.filters.hidden = function (a) {
    return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"));
  }, m.expr.filters.visible = function (a) {
    return !m.expr.filters.hidden(a);
  };var Qb = /%20/g,
      Rb = /\[\]$/,
      Sb = /\r?\n/g,
      Tb = /^(?:submit|button|image|reset|file)$/i,
      Ub = /^(?:input|select|textarea|keygen)/i;function Vb(a, b, c, d) {
    var e;if (m.isArray(b)) m.each(b, function (b, e) {
      c || Rb.test(a) ? d(a, e) : Vb(a + "[" + ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? b : "") + "]", e, c, d);
    });else if (c || "object" !== m.type(b)) d(a, b);else for (e in b) {
      Vb(a + "[" + e + "]", b[e], c, d);
    }
  }m.param = function (a, b) {
    var c,
        d = [],
        e = function e(a, b) {
      b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
    };if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a)) m.each(a, function () {
      e(this.name, this.value);
    });else for (c in a) {
      Vb(c, a[c], b, e);
    }return d.join("&").replace(Qb, "+");
  }, m.fn.extend({ serialize: function serialize() {
      return m.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var a = m.prop(this, "elements");return a ? m.makeArray(a) : this;
      }).filter(function () {
        var a = this.type;return this.name && !m(this).is(":disabled") && Ub.test(this.nodeName) && !Tb.test(a) && (this.checked || !W.test(a));
      }).map(function (a, b) {
        var c = m(this).val();return null == c ? null : m.isArray(c) ? m.map(c, function (a) {
          return { name: b.name, value: a.replace(Sb, "\r\n") };
        }) : { name: b.name, value: c.replace(Sb, "\r\n") };
      }).get();
    } }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
    return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zb() || $b();
  } : Zb;var Wb = 0,
      Xb = {},
      Yb = m.ajaxSettings.xhr();a.attachEvent && a.attachEvent("onunload", function () {
    for (var a in Xb) {
      Xb[a](void 0, !0);
    }
  }), k.cors = !!Yb && "withCredentials" in Yb, Yb = k.ajax = !!Yb, Yb && m.ajaxTransport(function (a) {
    if (!a.crossDomain || k.cors) {
      var _b3;return { send: function send(c, d) {
          var e,
              f = a.xhr(),
              g = ++Wb;if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) {
            f[e] = a.xhrFields[e];
          }a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");for (e in c) {
            void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
          }f.send(a.hasContent && a.data || null), _b3 = function b(c, e) {
            var h, i, j;if (_b3 && (e || 4 === f.readyState)) if (delete Xb[g], _b3 = void 0, f.onreadystatechange = m.noop, e) 4 !== f.readyState && f.abort();else {
              j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);try {
                i = f.statusText;
              } catch (k) {
                i = "";
              }h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404;
            }j && d(h, i, j, f.getAllResponseHeaders());
          }, a.async ? 4 === f.readyState ? setTimeout(_b3) : f.onreadystatechange = Xb[g] = _b3 : _b3();
        }, abort: function abort() {
          _b3 && _b3(void 0, !0);
        } };
    }
  });function Zb() {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  }function $b() {
    try {
      return new a.ActiveXObject("Microsoft.XMLHTTP");
    } catch (b) {}
  }m.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function textScript(a) {
        return m.globalEval(a), a;
      } } }), m.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1);
  }), m.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b,
          c = y.head || m("head")[0] || y.documentElement;return { send: function send(d, e) {
          b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
            (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"));
          }, c.insertBefore(b, c.firstChild);
        }, abort: function abort() {
          b && b.onload(void 0, !0);
        } };
    }
  });var _b = [],
      ac = /(=)\?(?=&|$)|\?\?/;m.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var a = _b.pop() || m.expando + "_" + vb++;return this[a] = !0, a;
    } }), m.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e,
        f,
        g,
        h = b.jsonp !== !1 && (ac.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ac.test(b.data) && "data");return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ac, "$1" + e) : b.jsonp !== !1 && (b.url += (wb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || m.error(e + " was not called"), g[0];
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments;
    }, d.always(function () {
      a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _b.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0;
    }), "script") : void 0;
  }), m.parseHTML = function (a, b, c) {
    if (!a || "string" != typeof a) return null;"boolean" == typeof b && (c = b, b = !1), b = b || y;var d = u.exec(a),
        e = !c && [];return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes));
  };var bc = m.fn.load;m.fn.load = function (a, b, c) {
    if ("string" != typeof a && bc) return bc.apply(this, arguments);var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (f = "POST"), g.length > 0 && m.ajax({ url: a, type: f, dataType: "html", data: b }).done(function (a) {
      e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a);
    }).complete(c && function (a, b) {
      g.each(c, e || [a.responseText, b, a]);
    }), this;
  }, m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    m.fn[b] = function (a) {
      return this.on(b, a);
    };
  }), m.expr.filters.animated = function (a) {
    return m.grep(m.timers, function (b) {
      return a === b.elem;
    }).length;
  };var cc = a.document.documentElement;function dc(a) {
    return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1;
  }m.offset = { setOffset: function setOffset(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = m.css(a, "position"),
          l = m(a),
          n = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n);
    } }, m.fn.extend({ offset: function offset(a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        m.offset.setOffset(this, a, b);
      });var b,
          c,
          d = { top: 0, left: 0 },
          e = this[0],
          f = e && e.ownerDocument;if (f) return b = f.documentElement, m.contains(b, e) ? (_typeof(e.getBoundingClientRect) !== K && (d = e.getBoundingClientRect()), c = dc(f), { top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0), left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0) }) : d;
    }, position: function position() {
      if (this[0]) {
        var a,
            b,
            c = { top: 0, left: 0 },
            d = this[0];return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), c.left += m.css(a[0], "borderLeftWidth", !0)), { top: b.top - c.top - m.css(d, "marginTop", !0), left: b.left - c.left - m.css(d, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        var a = this.offsetParent || cc;while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position")) {
          a = a.offsetParent;
        }return a || cc;
      });
    } }), m.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
    var c = /Y/.test(b);m.fn[a] = function (d) {
      return V(this, function (a, d, e) {
        var f = dc(a);return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e);
      }, a, d, arguments.length, null);
    };
  }), m.each(["top", "left"], function (a, b) {
    m.cssHooks[b] = La(k.pixelPosition, function (a, c) {
      return c ? (c = Ja(a, b), Ha.test(c) ? m(a).position()[b] + "px" : c) : void 0;
    });
  }), m.each({ Height: "height", Width: "width" }, function (a, b) {
    m.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
      m.fn[d] = function (d, e) {
        var f = arguments.length && (c || "boolean" != typeof d),
            g = c || (d === !0 || e === !0 ? "margin" : "border");return V(this, function (b, c, d) {
          var e;return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g);
        }, b, f ? d : void 0, f, null);
      };
    });
  }), m.fn.size = function () {
    return this.length;
  }, m.fn.andSelf = m.fn.addBack, "function" == "function" && __webpack_require__("./node_modules/webpack/buildin/amd-options.js") && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return m;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var ec = a.jQuery,
      fc = a.$;return m.noConflict = function (b) {
    return a.$ === m && (a.$ = fc), b && a.jQuery === m && (a.jQuery = ec), m;
  }, (typeof b === "undefined" ? "undefined" : _typeof(b)) === K && (a.jQuery = a.$ = m), m;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./resources/assets/vendor/html5StoryTheme/js/jquery.scrollex.min.js":
/***/ (function(module, exports) {

/* jquery.scrollex v0.2.1 | (c) @ajlkn | github.com/ajlkn/jquery.scrollex | MIT licensed */
!function (t) {
  function e(t, e, n) {
    return "string" == typeof t && ("%" == t.slice(-1) ? t = parseInt(t.substring(0, t.length - 1)) / 100 * e : "vh" == t.slice(-2) ? t = parseInt(t.substring(0, t.length - 2)) / 100 * n : "px" == t.slice(-2) && (t = parseInt(t.substring(0, t.length - 2)))), t;
  }var n = t(window),
      i = 1,
      o = {};n.on("scroll", function () {
    var e = n.scrollTop();t.map(o, function (t) {
      window.clearTimeout(t.timeoutId), t.timeoutId = window.setTimeout(function () {
        t.handler(e);
      }, t.options.delay);
    });
  }).on("load", function () {
    n.trigger("scroll");
  }), jQuery.fn.scrollex = function (l) {
    var s = t(this);if (0 == this.length) return s;if (this.length > 1) {
      for (var r = 0; r < this.length; r++) {
        t(this[r]).scrollex(l);
      }return s;
    }if (s.data("_scrollexId")) return s;var a, u, h, c, p;switch (a = i++, u = jQuery.extend({ top: 0, bottom: 0, delay: 0, mode: "default", enter: null, leave: null, initialize: null, terminate: null, scroll: null }, l), u.mode) {case "top":
        h = function h(t, e, n, i, o) {
          return t >= i && o >= t;
        };break;case "bottom":
        h = function h(t, e, n, i, o) {
          return n >= i && o >= n;
        };break;case "middle":
        h = function h(t, e, n, i, o) {
          return e >= i && o >= e;
        };break;case "top-only":
        h = function h(t, e, n, i, o) {
          return i >= t && n >= i;
        };break;case "bottom-only":
        h = function h(t, e, n, i, o) {
          return n >= o && o >= t;
        };break;default:case "default":
        h = function h(t, e, n, i, o) {
          return n >= i && o >= t;
        };}return c = function c(t) {
      var i,
          o,
          l,
          s,
          r,
          a,
          u = this.state,
          h = !1,
          c = this.$element.offset();i = n.height(), o = t + i / 2, l = t + i, s = this.$element.outerHeight(), r = c.top + e(this.options.top, s, i), a = c.top + s - e(this.options.bottom, s, i), h = this.test(t, o, l, r, a), h != u && (this.state = h, h ? this.options.enter && this.options.enter.apply(this.element) : this.options.leave && this.options.leave.apply(this.element)), this.options.scroll && this.options.scroll.apply(this.element, [(o - r) / (a - r)]);
    }, p = { id: a, options: u, test: h, handler: c, state: null, element: this, $element: s, timeoutId: null }, o[a] = p, s.data("_scrollexId", p.id), p.options.initialize && p.options.initialize.apply(this), s;
  }, jQuery.fn.unscrollex = function () {
    var e = t(this);if (0 == this.length) return e;if (this.length > 1) {
      for (var n = 0; n < this.length; n++) {
        t(this[n]).unscrollex();
      }return e;
    }var i, l;return (i = e.data("_scrollexId")) ? (l = o[i], window.clearTimeout(l.timeoutId), delete o[i], e.removeData("_scrollexId"), l.options.terminate && l.options.terminate.apply(this), e) : e;
  };
}(jQuery);

/***/ }),

/***/ "./resources/assets/vendor/html5StoryTheme/js/jquery.scrolly.min.js":
/***/ (function(module, exports) {

/* jquery.scrolly v1.0.0-dev | (c) @ajlkn | MIT licensed */
(function (e) {
  function u(s, o) {
    var u, a, f;if ((u = e(s))[t] == 0) return n;a = u[i]()[r];switch (o.anchor) {case "middle":
        f = a - (e(window).height() - u.outerHeight()) / 2;break;default:case r:
        f = Math.max(a, 0);}return typeof o[i] == "function" ? f -= o[i]() : f -= o[i], f;
  }var t = "length",
      n = null,
      r = "top",
      i = "offset",
      s = "click.scrolly",
      o = e(window);e.fn.scrolly = function (i) {
    var o,
        a,
        f,
        l,
        c = e(this);if (this[t] == 0) return c;if (this[t] > 1) {
      for (o = 0; o < this[t]; o++) {
        e(this[o]).scrolly(i);
      }return c;
    }l = n, f = c.attr("href");if (f.charAt(0) != "#" || f[t] < 2) return c;a = jQuery.extend({ anchor: r, easing: "swing", offset: 0, parent: e("body,html"), pollOnce: !1, speed: 1e3 }, i), a.pollOnce && (l = u(f, a)), c.off(s).on(s, function (e) {
      var t = l !== n ? l : u(f, a);t !== n && (e.preventDefault(), a.parent.stop().animate({ scrollTop: t }, a.speed, a.easing));
    });
  };
})(jQuery);

/***/ }),

/***/ "./resources/assets/vendor/html5StoryTheme/js/main.js":
/***/ (function(module, exports, __webpack_require__) {

/*
	Story by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
try {
	window.$ = window.jQuery = __webpack_require__("./resources/assets/vendor/html5StoryTheme/js/jquery.min.js");
} catch (e) {}

__webpack_require__("./resources/assets/vendor/html5StoryTheme/js/jquery.scrollex.min.js");
__webpack_require__("./resources/assets/vendor/html5StoryTheme/js/jquery.scrolly.min.js");
var skel = __webpack_require__("./resources/assets/vendor/html5StoryTheme/js/skel.min.js");
__webpack_require__("./resources/assets/vendor/html5StoryTheme/js/util.js");

(function ($) {

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)',
		xxsmall: '(max-width: 360px)'
	});

	$(function () {

		var $window = $(window),
		    $body = $('body'),
		    $wrapper = $('#wrapper');

		// Disable animations/transitions until the page has loaded.
		$body.addClass('is-loading');

		$window.on('load', function () {
			window.setTimeout(function () {
				$body.removeClass('is-loading');
			}, 100);
		});

		// Fix: Placeholder polyfill.
		$('form').placeholder();

		// Prioritize "important" elements on medium.
		skel.on('+medium -medium', function () {
			$.prioritize('.important\\28 medium\\29', skel.breakpoint('medium').active);
		});

		// Browser fixes.

		// IE: Flexbox min-height bug.
		if (skel.vars.browser == 'ie') (function () {

			var flexboxFixTimeoutId;

			$window.on('resize.flexbox-fix', function () {

				var $x = $('.fullscreen');

				clearTimeout(flexboxFixTimeoutId);

				flexboxFixTimeoutId = setTimeout(function () {

					if ($x.prop('scrollHeight') > $window.height()) $x.css('height', 'auto');else $x.css('height', '100vh');
				}, 250);
			}).triggerHandler('resize.flexbox-fix');
		})();

		// Object fit workaround.
		if (!skel.canUse('object-fit')) (function () {

			$('.banner .image, .spotlight .image').each(function () {

				var $this = $(this),
				    $img = $this.children('img'),
				    positionClass = $this.parent().attr('class').match(/image-position-([a-z]+)/);

				// Set image.
				$this.css('background-image', 'url("' + $img.attr('src') + '")').css('background-repeat', 'no-repeat').css('background-size', 'cover');

				// Set position.
				switch (positionClass.length > 1 ? positionClass[1] : '') {

					case 'left':
						$this.css('background-position', 'left');
						break;

					case 'right':
						$this.css('background-position', 'right');
						break;

					default:
					case 'center':
						$this.css('background-position', 'center');
						break;

				}

				// Hide original.
				$img.css('opacity', '0');
			});
		})();

		// Smooth scroll.
		$('.smooth-scroll').scrolly();
		$('.smooth-scroll-middle').scrolly({ anchor: 'middle' });

		// Wrapper.
		$wrapper.children().scrollex({
			top: '30vh',
			bottom: '30vh',
			initialize: function initialize() {
				$(this).addClass('is-inactive');
			},
			terminate: function terminate() {
				$(this).removeClass('is-inactive');
			},
			enter: function enter() {
				$(this).removeClass('is-inactive');
			},
			leave: function leave() {

				var $this = $(this);

				if ($this.hasClass('onscroll-bidirectional')) $this.addClass('is-inactive');
			}
		});

		// Items.
		$('.items').scrollex({
			top: '30vh',
			bottom: '30vh',
			delay: 50,
			initialize: function initialize() {
				$(this).addClass('is-inactive');
			},
			terminate: function terminate() {
				$(this).removeClass('is-inactive');
			},
			enter: function enter() {
				$(this).removeClass('is-inactive');
			},
			leave: function leave() {

				var $this = $(this);

				if ($this.hasClass('onscroll-bidirectional')) $this.addClass('is-inactive');
			}
		}).children().wrapInner('<div class="inner"></div>');

		// Gallery.
		$('.gallery').wrapInner('<div class="inner"></div>').prepend(skel.vars.mobile ? '' : '<div class="forward"></div><div class="backward"></div>').scrollex({
			top: '30vh',
			bottom: '30vh',
			delay: 50,
			initialize: function initialize() {
				$(this).addClass('is-inactive');
			},
			terminate: function terminate() {
				$(this).removeClass('is-inactive');
			},
			enter: function enter() {
				$(this).removeClass('is-inactive');
			},
			leave: function leave() {

				var $this = $(this);

				if ($this.hasClass('onscroll-bidirectional')) $this.addClass('is-inactive');
			}
		}).children('.inner')
		//.css('overflow', 'hidden')
		.css('overflow-y', skel.vars.mobile ? 'visible' : 'hidden').css('overflow-x', skel.vars.mobile ? 'scroll' : 'hidden').scrollLeft(0);

		// Style #1.
		// ...

		// Style #2.
		$('.gallery').on('wheel', '.inner', function (event) {

			var $this = $(this),
			    delta = event.originalEvent.deltaX * 10;

			// Cap delta.
			if (delta > 0) delta = Math.min(25, delta);else if (delta < 0) delta = Math.max(-25, delta);

			// Scroll.
			$this.scrollLeft($this.scrollLeft() + delta);
		}).on('mouseenter', '.forward, .backward', function (event) {

			var $this = $(this),
			    $inner = $this.siblings('.inner'),
			    direction = $this.hasClass('forward') ? 1 : -1;

			// Clear move interval.
			clearInterval(this._gallery_moveIntervalId);

			// Start interval.
			this._gallery_moveIntervalId = setInterval(function () {
				$inner.scrollLeft($inner.scrollLeft() + 5 * direction);
			}, 10);
		}).on('mouseleave', '.forward, .backward', function (event) {

			// Clear move interval.
			clearInterval(this._gallery_moveIntervalId);
		});

		// Lightbox.
		$('.gallery.lightbox').on('click', 'a', function (event) {

			var $a = $(this),
			    $gallery = $a.parents('.gallery'),
			    $modal = $gallery.children('.modal'),
			    $modalImg = $modal.find('img'),
			    href = $a.attr('href');

			// Not an image? Bail.
			if (!href.match(/\.(jpg|gif|png|mp4)$/)) return;

			// Prevent default.
			event.preventDefault();
			event.stopPropagation();

			// Locked? Bail.
			if ($modal[0]._locked) return;

			// Lock.
			$modal[0]._locked = true;

			// Set src.
			$modalImg.attr('src', href);

			// Set visible.
			$modal.addClass('visible');

			// Focus.
			$modal.focus();

			// Delay.
			setTimeout(function () {

				// Unlock.
				$modal[0]._locked = false;
			}, 600);
		}).on('click', '.modal', function (event) {

			var $modal = $(this),
			    $modalImg = $modal.find('img');

			// Locked? Bail.
			if ($modal[0]._locked) return;

			// Already hidden? Bail.
			if (!$modal.hasClass('visible')) return;

			// Lock.
			$modal[0]._locked = true;

			// Clear visible, loaded.
			$modal.removeClass('loaded');

			// Delay.
			setTimeout(function () {

				$modal.removeClass('visible');

				setTimeout(function () {

					// Clear src.
					$modalImg.attr('src', '');

					// Unlock.
					$modal[0]._locked = false;

					// Focus.
					$body.focus();
				}, 475);
			}, 125);
		}).on('keypress', '.modal', function (event) {

			var $modal = $(this);

			// Escape? Hide modal.
			if (event.keyCode == 27) $modal.trigger('click');
		}).prepend('<div class="modal" tabIndex="-1"><div class="inner"><img src="" /></div></div>').find('img').on('load', function (event) {

			var $modalImg = $(this),
			    $modal = $modalImg.parents('.modal');

			setTimeout(function () {

				// No longer visible? Bail.
				if (!$modal.hasClass('visible')) return;

				// Set loaded.
				$modal.addClass('loaded');
			}, 275);
		});
	});
})(jQuery);

/***/ }),

/***/ "./resources/assets/vendor/html5StoryTheme/js/skel.min.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* skel.js v3.0.1 | (c) skel.io | MIT licensed */
var skel = function () {
  "use strict";
  var t = { breakpointIds: null, events: {}, isInit: !1, obj: { attachments: {}, breakpoints: {}, head: null, states: {} }, sd: "/", state: null, stateHandlers: {}, stateId: "", vars: {}, DOMReady: null, indexOf: null, isArray: null, iterate: null, matchesMedia: null, extend: function extend(e, n) {
      t.iterate(n, function (i) {
        t.isArray(n[i]) ? (t.isArray(e[i]) || (e[i] = []), t.extend(e[i], n[i])) : "object" == _typeof(n[i]) ? ("object" != _typeof(e[i]) && (e[i] = {}), t.extend(e[i], n[i])) : e[i] = n[i];
      });
    }, newStyle: function newStyle(t) {
      var e = document.createElement("style");return e.type = "text/css", e.innerHTML = t, e;
    }, _canUse: null, canUse: function canUse(e) {
      t._canUse || (t._canUse = document.createElement("div"));var n = t._canUse.style,
          i = e.charAt(0).toUpperCase() + e.slice(1);return e in n || "Moz" + i in n || "Webkit" + i in n || "O" + i in n || "ms" + i in n;
    }, on: function on(e, n) {
      var i = e.split(/[\s]+/);return t.iterate(i, function (e) {
        var a = i[e];if (t.isInit) {
          if ("init" == a) return void n();if ("change" == a) n();else {
            var r = a.charAt(0);if ("+" == r || "!" == r) {
              var o = a.substring(1);if (o in t.obj.breakpoints) if ("+" == r && t.obj.breakpoints[o].active) n();else if ("!" == r && !t.obj.breakpoints[o].active) return void n();
            }
          }
        }t.events[a] || (t.events[a] = []), t.events[a].push(n);
      }), t;
    }, trigger: function trigger(e) {
      return t.events[e] && 0 != t.events[e].length ? (t.iterate(t.events[e], function (n) {
        t.events[e][n]();
      }), t) : void 0;
    }, breakpoint: function breakpoint(e) {
      return t.obj.breakpoints[e];
    }, breakpoints: function breakpoints(e) {
      function n(t, e) {
        this.name = this.id = t, this.media = e, this.active = !1, this.wasActive = !1;
      }return n.prototype.matches = function () {
        return t.matchesMedia(this.media);
      }, n.prototype.sync = function () {
        this.wasActive = this.active, this.active = this.matches();
      }, t.iterate(e, function (i) {
        t.obj.breakpoints[i] = new n(i, e[i]);
      }), window.setTimeout(function () {
        t.poll();
      }, 0), t;
    }, addStateHandler: function addStateHandler(e, n) {
      t.stateHandlers[e] = n;
    }, callStateHandler: function callStateHandler(e) {
      var n = t.stateHandlers[e]();t.iterate(n, function (e) {
        t.state.attachments.push(n[e]);
      });
    }, changeState: function changeState(e) {
      t.iterate(t.obj.breakpoints, function (e) {
        t.obj.breakpoints[e].sync();
      }), t.vars.lastStateId = t.stateId, t.stateId = e, t.breakpointIds = t.stateId === t.sd ? [] : t.stateId.substring(1).split(t.sd), t.obj.states[t.stateId] ? t.state = t.obj.states[t.stateId] : (t.obj.states[t.stateId] = { attachments: [] }, t.state = t.obj.states[t.stateId], t.iterate(t.stateHandlers, t.callStateHandler)), t.detachAll(t.state.attachments), t.attachAll(t.state.attachments), t.vars.stateId = t.stateId, t.vars.state = t.state, t.trigger("change"), t.iterate(t.obj.breakpoints, function (e) {
        t.obj.breakpoints[e].active ? t.obj.breakpoints[e].wasActive || t.trigger("+" + e) : t.obj.breakpoints[e].wasActive && t.trigger("-" + e);
      });
    }, generateStateConfig: function generateStateConfig(e, n) {
      var i = {};return t.extend(i, e), t.iterate(t.breakpointIds, function (e) {
        t.extend(i, n[t.breakpointIds[e]]);
      }), i;
    }, getStateId: function getStateId() {
      var e = "";return t.iterate(t.obj.breakpoints, function (n) {
        var i = t.obj.breakpoints[n];i.matches() && (e += t.sd + i.id);
      }), e;
    }, poll: function poll() {
      var e = "";e = t.getStateId(), "" === e && (e = t.sd), e !== t.stateId && t.changeState(e);
    }, _attach: null, attach: function attach(e) {
      var n = t.obj.head,
          i = e.element;return i.parentNode && i.parentNode.tagName ? !1 : (t._attach || (t._attach = n.firstChild), n.insertBefore(i, t._attach.nextSibling), e.permanent && (t._attach = i), !0);
    }, attachAll: function attachAll(e) {
      var n = [];t.iterate(e, function (t) {
        n[e[t].priority] || (n[e[t].priority] = []), n[e[t].priority].push(e[t]);
      }), n.reverse(), t.iterate(n, function (e) {
        t.iterate(n[e], function (i) {
          t.attach(n[e][i]);
        });
      });
    }, detach: function detach(t) {
      var e = t.element;return t.permanent || !e.parentNode || e.parentNode && !e.parentNode.tagName ? !1 : (e.parentNode.removeChild(e), !0);
    }, detachAll: function detachAll(e) {
      var n = {};t.iterate(e, function (t) {
        n[e[t].id] = !0;
      }), t.iterate(t.obj.attachments, function (e) {
        e in n || t.detach(t.obj.attachments[e]);
      });
    }, attachment: function attachment(e) {
      return e in t.obj.attachments ? t.obj.attachments[e] : null;
    }, newAttachment: function newAttachment(e, n, i, a) {
      return t.obj.attachments[e] = { id: e, element: n, priority: i, permanent: a };
    }, init: function init() {
      t.initMethods(), t.initVars(), t.initEvents(), t.obj.head = document.getElementsByTagName("head")[0], t.isInit = !0, t.trigger("init");
    }, initEvents: function initEvents() {
      t.on("resize", function () {
        t.poll();
      }), t.on("orientationChange", function () {
        t.poll();
      }), t.DOMReady(function () {
        t.trigger("ready");
      }), window.onload && t.on("load", window.onload), window.onload = function () {
        t.trigger("load");
      }, window.onresize && t.on("resize", window.onresize), window.onresize = function () {
        t.trigger("resize");
      }, window.onorientationchange && t.on("orientationChange", window.onorientationchange), window.onorientationchange = function () {
        t.trigger("orientationChange");
      };
    }, initMethods: function initMethods() {
      document.addEventListener ? !function (e, n) {
        t.DOMReady = n();
      }("domready", function () {
        function t(t) {
          for (r = 1; t = n.shift();) {
            t();
          }
        }var _e,
            n = [],
            i = document,
            a = "DOMContentLoaded",
            r = /^loaded|^c/.test(i.readyState);return i.addEventListener(a, _e = function e() {
          i.removeEventListener(a, _e), t();
        }), function (t) {
          r ? t() : n.push(t);
        };
      }) : !function (e, n) {
        t.DOMReady = n();
      }("domready", function (t) {
        function e(t) {
          for (h = 1; t = i.shift();) {
            t();
          }
        }var _n2,
            i = [],
            a = !1,
            r = document,
            o = r.documentElement,
            s = o.doScroll,
            c = "DOMContentLoaded",
            d = "addEventListener",
            u = "onreadystatechange",
            l = "readyState",
            f = s ? /^loaded|^c/ : /^loaded|c/,
            h = f.test(r[l]);return r[d] && r[d](c, _n2 = function n() {
          r.removeEventListener(c, _n2, a), e();
        }, a), s && r.attachEvent(u, _n2 = function _n() {
          /^c/.test(r[l]) && (r.detachEvent(u, _n2), e());
        }), t = s ? function (e) {
          self != top ? h ? e() : i.push(e) : function () {
            try {
              o.doScroll("left");
            } catch (n) {
              return setTimeout(function () {
                t(e);
              }, 50);
            }e();
          }();
        } : function (t) {
          h ? t() : i.push(t);
        };
      }), Array.prototype.indexOf ? t.indexOf = function (t, e) {
        return t.indexOf(e);
      } : t.indexOf = function (t, e) {
        if ("string" == typeof t) return t.indexOf(e);var n,
            i,
            a = e ? e : 0;if (!this) throw new TypeError();if (i = this.length, 0 === i || a >= i) return -1;for (0 > a && (a = i - Math.abs(a)), n = a; i > n; n++) {
          if (this[n] === t) return n;
        }return -1;
      }, Array.isArray ? t.isArray = function (t) {
        return Array.isArray(t);
      } : t.isArray = function (t) {
        return "[object Array]" === Object.prototype.toString.call(t);
      }, Object.keys ? t.iterate = function (t, e) {
        if (!t) return [];var n,
            i = Object.keys(t);for (n = 0; i[n] && e(i[n], t[i[n]]) !== !1; n++) {}
      } : t.iterate = function (t, e) {
        if (!t) return [];var n;for (n in t) {
          if (Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]) === !1) break;
        }
      }, window.matchMedia ? t.matchesMedia = function (t) {
        return "" == t ? !0 : window.matchMedia(t).matches;
      } : window.styleMedia || window.media ? t.matchesMedia = function (t) {
        if ("" == t) return !0;var e = window.styleMedia || window.media;return e.matchMedium(t || "all");
      } : window.getComputedStyle ? t.matchesMedia = function (t) {
        if ("" == t) return !0;var e = document.createElement("style"),
            n = document.getElementsByTagName("script")[0],
            i = null;e.type = "text/css", e.id = "matchmediajs-test", n.parentNode.insertBefore(e, n), i = "getComputedStyle" in window && window.getComputedStyle(e, null) || e.currentStyle;var a = "@media " + t + "{ #matchmediajs-test { width: 1px; } }";return e.styleSheet ? e.styleSheet.cssText = a : e.textContent = a, "1px" === i.width;
      } : t.matchesMedia = function (t) {
        if ("" == t) return !0;var e,
            n,
            i,
            a,
            r = { "min-width": null, "max-width": null },
            o = !1;for (i = t.split(/\s+and\s+/), e = 0; e < i.length; e++) {
          n = i[e], "(" == n.charAt(0) && (n = n.substring(1, n.length - 1), a = n.split(/:\s+/), 2 == a.length && (r[a[0].replace(/^\s+|\s+$/g, "")] = parseInt(a[1]), o = !0));
        }if (!o) return !1;var s = document.documentElement.clientWidth,
            c = document.documentElement.clientHeight;return null !== r["min-width"] && s < r["min-width"] || null !== r["max-width"] && s > r["max-width"] || null !== r["min-height"] && c < r["min-height"] || null !== r["max-height"] && c > r["max-height"] ? !1 : !0;
      }, navigator.userAgent.match(/MSIE ([0-9]+)/) && RegExp.$1 < 9 && (t.newStyle = function (t) {
        var e = document.createElement("span");return e.innerHTML = '&nbsp;<style type="text/css">' + t + "</style>", e;
      });
    }, initVars: function initVars() {
      var e,
          n,
          i,
          a = navigator.userAgent;e = "other", n = 0, i = [["firefox", /Firefox\/([0-9\.]+)/], ["bb", /BlackBerry.+Version\/([0-9\.]+)/], ["bb", /BB[0-9]+.+Version\/([0-9\.]+)/], ["opera", /OPR\/([0-9\.]+)/], ["opera", /Opera\/([0-9\.]+)/], ["edge", /Edge\/([0-9\.]+)/], ["safari", /Version\/([0-9\.]+).+Safari/], ["chrome", /Chrome\/([0-9\.]+)/], ["ie", /MSIE ([0-9]+)/], ["ie", /Trident\/.+rv:([0-9]+)/]], t.iterate(i, function (t, i) {
        return a.match(i[1]) ? (e = i[0], n = parseFloat(RegExp.$1), !1) : void 0;
      }), t.vars.browser = e, t.vars.browserVersion = n, e = "other", n = 0, i = [["ios", /([0-9_]+) like Mac OS X/, function (t) {
        return t.replace("_", ".").replace("_", "");
      }], ["ios", /CPU like Mac OS X/, function (t) {
        return 0;
      }], ["wp", /Windows Phone ([0-9\.]+)/, null], ["android", /Android ([0-9\.]+)/, null], ["mac", /Macintosh.+Mac OS X ([0-9_]+)/, function (t) {
        return t.replace("_", ".").replace("_", "");
      }], ["windows", /Windows NT ([0-9\.]+)/, null], ["bb", /BlackBerry.+Version\/([0-9\.]+)/, null], ["bb", /BB[0-9]+.+Version\/([0-9\.]+)/, null]], t.iterate(i, function (t, i) {
        return a.match(i[1]) ? (e = i[0], n = parseFloat(i[2] ? i[2](RegExp.$1) : RegExp.$1), !1) : void 0;
      }), t.vars.os = e, t.vars.osVersion = n, t.vars.IEVersion = "ie" == t.vars.browser ? t.vars.browserVersion : 99, t.vars.touch = "wp" == t.vars.os ? navigator.msMaxTouchPoints > 0 : !!("ontouchstart" in window), t.vars.mobile = "wp" == t.vars.os || "android" == t.vars.os || "ios" == t.vars.os || "bb" == t.vars.os;
    } };return t.init(), t;
}();!function (t, e) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = e() : t.skel = e();
}(this, function () {
  return skel;
});

/***/ }),

/***/ "./resources/assets/vendor/html5StoryTheme/js/util.js":
/***/ (function(module, exports) {

(function ($) {

	/**
  * Generate an indented list of links from a nav. Meant for use with panel().
  * @return {jQuery} jQuery object.
  */
	$.fn.navList = function () {

		var $this = $(this);
		$a = $this.find('a'), b = [];

		$a.each(function () {

			var $this = $(this),
			    indent = Math.max(0, $this.parents('li').length - 1),
			    href = $this.attr('href'),
			    target = $this.attr('target');

			b.push('<a ' + 'class="link depth-' + indent + '"' + (typeof target !== 'undefined' && target != '' ? ' target="' + target + '"' : '') + (typeof href !== 'undefined' && href != '' ? ' href="' + href + '"' : '') + '>' + '<span class="indent-' + indent + '"></span>' + $this.text() + '</a>');
		});

		return b.join('');
	};

	/**
  * Panel-ify an element.
  * @param {object} userConfig User config.
  * @return {jQuery} jQuery object.
  */
	$.fn.panel = function (userConfig) {

		// No elements?
		if (this.length == 0) return $this;

		// Multiple elements?
		if (this.length > 1) {

			for (var i = 0; i < this.length; i++) {
				$(this[i]).panel(userConfig);
			}return $this;
		}

		// Vars.
		var $this = $(this),
		    $body = $('body'),
		    $window = $(window),
		    id = $this.attr('id'),
		    config;

		// Config.
		config = $.extend({

			// Delay.
			delay: 0,

			// Hide panel on link click.
			hideOnClick: false,

			// Hide panel on escape keypress.
			hideOnEscape: false,

			// Hide panel on swipe.
			hideOnSwipe: false,

			// Reset scroll position on hide.
			resetScroll: false,

			// Reset forms on hide.
			resetForms: false,

			// Side of viewport the panel will appear.
			side: null,

			// Target element for "class".
			target: $this,

			// Class to toggle.
			visibleClass: 'visible'

		}, userConfig);

		// Expand "target" if it's not a jQuery object already.
		if (typeof config.target != 'jQuery') config.target = $(config.target);

		// Panel.

		// Methods.
		$this._hide = function (event) {

			// Already hidden? Bail.
			if (!config.target.hasClass(config.visibleClass)) return;

			// If an event was provided, cancel it.
			if (event) {

				event.preventDefault();
				event.stopPropagation();
			}

			// Hide.
			config.target.removeClass(config.visibleClass);

			// Post-hide stuff.
			window.setTimeout(function () {

				// Reset scroll position.
				if (config.resetScroll) $this.scrollTop(0);

				// Reset forms.
				if (config.resetForms) $this.find('form').each(function () {
					this.reset();
				});
			}, config.delay);
		};

		// Vendor fixes.
		$this.css('-ms-overflow-style', '-ms-autohiding-scrollbar').css('-webkit-overflow-scrolling', 'touch');

		// Hide on click.
		if (config.hideOnClick) {

			$this.find('a').css('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');

			$this.on('click', 'a', function (event) {

				var $a = $(this),
				    href = $a.attr('href'),
				    target = $a.attr('target');

				if (!href || href == '#' || href == '' || href == '#' + id) return;

				// Cancel original event.
				event.preventDefault();
				event.stopPropagation();

				// Hide panel.
				$this._hide();

				// Redirect to href.
				window.setTimeout(function () {

					if (target == '_blank') window.open(href);else window.location.href = href;
				}, config.delay + 10);
			});
		}

		// Event: Touch stuff.
		$this.on('touchstart', function (event) {

			$this.touchPosX = event.originalEvent.touches[0].pageX;
			$this.touchPosY = event.originalEvent.touches[0].pageY;
		});

		$this.on('touchmove', function (event) {

			if ($this.touchPosX === null || $this.touchPosY === null) return;

			var diffX = $this.touchPosX - event.originalEvent.touches[0].pageX,
			    diffY = $this.touchPosY - event.originalEvent.touches[0].pageY,
			    th = $this.outerHeight(),
			    ts = $this.get(0).scrollHeight - $this.scrollTop();

			// Hide on swipe?
			if (config.hideOnSwipe) {

				var result = false,
				    boundary = 20,
				    delta = 50;

				switch (config.side) {

					case 'left':
						result = diffY < boundary && diffY > -1 * boundary && diffX > delta;
						break;

					case 'right':
						result = diffY < boundary && diffY > -1 * boundary && diffX < -1 * delta;
						break;

					case 'top':
						result = diffX < boundary && diffX > -1 * boundary && diffY > delta;
						break;

					case 'bottom':
						result = diffX < boundary && diffX > -1 * boundary && diffY < -1 * delta;
						break;

					default:
						break;

				}

				if (result) {

					$this.touchPosX = null;
					$this.touchPosY = null;
					$this._hide();

					return false;
				}
			}

			// Prevent vertical scrolling past the top or bottom.
			if ($this.scrollTop() < 0 && diffY < 0 || ts > th - 2 && ts < th + 2 && diffY > 0) {

				event.preventDefault();
				event.stopPropagation();
			}
		});

		// Event: Prevent certain events inside the panel from bubbling.
		$this.on('click touchend touchstart touchmove', function (event) {
			event.stopPropagation();
		});

		// Event: Hide panel if a child anchor tag pointing to its ID is clicked.
		$this.on('click', 'a[href="#' + id + '"]', function (event) {

			event.preventDefault();
			event.stopPropagation();

			config.target.removeClass(config.visibleClass);
		});

		// Body.

		// Event: Hide panel on body click/tap.
		$body.on('click touchend', function (event) {
			$this._hide(event);
		});

		// Event: Toggle.
		$body.on('click', 'a[href="#' + id + '"]', function (event) {

			event.preventDefault();
			event.stopPropagation();

			config.target.toggleClass(config.visibleClass);
		});

		// Window.

		// Event: Hide on ESC.
		if (config.hideOnEscape) $window.on('keydown', function (event) {

			if (event.keyCode == 27) $this._hide(event);
		});

		return $this;
	};

	/**
  * Apply "placeholder" attribute polyfill to one or more forms.
  * @return {jQuery} jQuery object.
  */
	$.fn.placeholder = function () {

		// Browser natively supports placeholders? Bail.
		if (typeof document.createElement('input').placeholder != 'undefined') return $(this);

		// No elements?
		if (this.length == 0) return $this;

		// Multiple elements?
		if (this.length > 1) {

			for (var i = 0; i < this.length; i++) {
				$(this[i]).placeholder();
			}return $this;
		}

		// Vars.
		var $this = $(this);

		// Text, TextArea.
		$this.find('input[type=text],textarea').each(function () {

			var i = $(this);

			if (i.val() == '' || i.val() == i.attr('placeholder')) i.addClass('polyfill-placeholder').val(i.attr('placeholder'));
		}).on('blur', function () {

			var i = $(this);

			if (i.attr('name').match(/-polyfill-field$/)) return;

			if (i.val() == '') i.addClass('polyfill-placeholder').val(i.attr('placeholder'));
		}).on('focus', function () {

			var i = $(this);

			if (i.attr('name').match(/-polyfill-field$/)) return;

			if (i.val() == i.attr('placeholder')) i.removeClass('polyfill-placeholder').val('');
		});

		// Password.
		$this.find('input[type=password]').each(function () {

			var i = $(this);
			var x = $($('<div>').append(i.clone()).remove().html().replace(/type="password"/i, 'type="text"').replace(/type=password/i, 'type=text'));

			if (i.attr('id') != '') x.attr('id', i.attr('id') + '-polyfill-field');

			if (i.attr('name') != '') x.attr('name', i.attr('name') + '-polyfill-field');

			x.addClass('polyfill-placeholder').val(x.attr('placeholder')).insertAfter(i);

			if (i.val() == '') i.hide();else x.hide();

			i.on('blur', function (event) {

				event.preventDefault();

				var x = i.parent().find('input[name=' + i.attr('name') + '-polyfill-field]');

				if (i.val() == '') {

					i.hide();
					x.show();
				}
			});

			x.on('focus', function (event) {

				event.preventDefault();

				var i = x.parent().find('input[name=' + x.attr('name').replace('-polyfill-field', '') + ']');

				x.hide();

				i.show().focus();
			}).on('keypress', function (event) {

				event.preventDefault();
				x.val('');
			});
		});

		// Events.
		$this.on('submit', function () {

			$this.find('input[type=text],input[type=password],textarea').each(function (event) {

				var i = $(this);

				if (i.attr('name').match(/-polyfill-field$/)) i.attr('name', '');

				if (i.val() == i.attr('placeholder')) {

					i.removeClass('polyfill-placeholder');
					i.val('');
				}
			});
		}).on('reset', function (event) {

			event.preventDefault();

			$this.find('select').val($('option:first').val());

			$this.find('input,textarea').each(function () {

				var i = $(this),
				    x;

				i.removeClass('polyfill-placeholder');

				switch (this.type) {

					case 'submit':
					case 'reset':
						break;

					case 'password':
						i.val(i.attr('defaultValue'));

						x = i.parent().find('input[name=' + i.attr('name') + '-polyfill-field]');

						if (i.val() == '') {
							i.hide();
							x.show();
						} else {
							i.show();
							x.hide();
						}

						break;

					case 'checkbox':
					case 'radio':
						i.attr('checked', i.attr('defaultValue'));
						break;

					case 'text':
					case 'textarea':
						i.val(i.attr('defaultValue'));

						if (i.val() == '') {
							i.addClass('polyfill-placeholder');
							i.val(i.attr('placeholder'));
						}

						break;

					default:
						i.val(i.attr('defaultValue'));
						break;

				}
			});
		});

		return $this;
	};

	/**
  * Moves elements to/from the first positions of their respective parents.
  * @param {jQuery} $elements Elements (or selector) to move.
  * @param {bool} condition If true, moves elements to the top. Otherwise, moves elements back to their original locations.
  */
	$.prioritize = function ($elements, condition) {

		var key = '__prioritize';

		// Expand $elements if it's not already a jQuery object.
		if (typeof $elements != 'jQuery') $elements = $($elements);

		// Step through elements.
		$elements.each(function () {

			var $e = $(this),
			    $p,
			    $parent = $e.parent();

			// No parent? Bail.
			if ($parent.length == 0) return;

			// Not moved? Move it.
			if (!$e.data(key)) {

				// Condition is false? Bail.
				if (!condition) return;

				// Get placeholder (which will serve as our point of reference for when this element needs to move back).
				$p = $e.prev();

				// Couldn't find anything? Means this element's already at the top, so bail.
				if ($p.length == 0) return;

				// Move element to top of parent.
				$e.prependTo($parent);

				// Mark element as moved.
				$e.data(key, $p);
			}

			// Moved already?
			else {

					// Condition is true? Bail.
					if (condition) return;

					$p = $e.data(key);

					// Move element back to its original location (using our placeholder).
					$e.insertAfter($p);

					// Unmark element as moved.
					$e.removeData(key);
				}
		});
	};
})(jQuery);

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./resources/assets/scripts/app.js");
__webpack_require__("./resources/assets/styles/app.scss");
module.exports = __webpack_require__("./resources/assets/styles/admin.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWNmNmJmY2Y2ZGJkODg1MmQ0NDQiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2FtZC1vcHRpb25zLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zY3JpcHRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3N0eWxlcy9hZG1pbi5zY3NzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvc3R5bGVzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvdmVuZG9yL2NvZHJvcHNNZW51L2pzL2NsYXNzaWUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy92ZW5kb3IvY29kcm9wc01lbnUvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9odG1sNVN0b3J5VGhlbWUvanMvanF1ZXJ5Lm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9odG1sNVN0b3J5VGhlbWUvanMvanF1ZXJ5LnNjcm9sbGV4Lm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9odG1sNVN0b3J5VGhlbWUvanMvanF1ZXJ5LnNjcm9sbHkubWluLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvdmVuZG9yL2h0bWw1U3RvcnlUaGVtZS9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvdmVuZG9yL2h0bWw1U3RvcnlUaGVtZS9qcy9za2VsLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9odG1sNVN0b3J5VGhlbWUvanMvdXRpbC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwid2luZG93IiwiY2xhc3NSZWciLCJjbGFzc05hbWUiLCJSZWdFeHAiLCJoYXNDbGFzcyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImVsZW0iLCJjIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJhZGQiLCJyZW1vdmUiLCJ0ZXN0IiwicmVwbGFjZSIsInRvZ2dsZUNsYXNzIiwiZm4iLCJjbGFzc2llIiwiaGFzIiwidG9nZ2xlIiwiZGVmaW5lIiwiZSIsImJvZHlFbCIsImJvZHkiLCJjb250ZW50IiwicXVlcnlTZWxlY3RvciIsIm9wZW5idG4iLCJnZXRFbGVtZW50QnlJZCIsImNsb3NlYnRuIiwiaXNPcGVuIiwiaW5pdCIsImluaXRFdmVudHMiLCJhZGRFdmVudExpc3RlbmVyIiwidG9nZ2xlTWVudSIsImV2IiwidGFyZ2V0Iiwic2V0VGltZW91dCIsImEiLCJiIiwibW9kdWxlIiwiZXhwb3J0cyIsIkVycm9yIiwiZCIsInNsaWNlIiwiY29uY2F0IiwiZiIsInB1c2giLCJnIiwiaW5kZXhPZiIsImgiLCJpIiwidG9TdHJpbmciLCJqIiwiaGFzT3duUHJvcGVydHkiLCJrIiwibCIsIm0iLCJuIiwibyIsInAiLCJxIiwidG9VcHBlckNhc2UiLCJwcm90b3R5cGUiLCJqcXVlcnkiLCJjb25zdHJ1Y3RvciIsInNlbGVjdG9yIiwibGVuZ3RoIiwidG9BcnJheSIsImNhbGwiLCJnZXQiLCJwdXNoU3RhY2siLCJtZXJnZSIsInByZXZPYmplY3QiLCJjb250ZXh0IiwiZWFjaCIsIm1hcCIsImFwcGx5IiwiYXJndW1lbnRzIiwiZmlyc3QiLCJlcSIsImxhc3QiLCJlbmQiLCJzb3J0Iiwic3BsaWNlIiwiZXh0ZW5kIiwiaXNGdW5jdGlvbiIsImlzUGxhaW5PYmplY3QiLCJpc0FycmF5IiwiZXhwYW5kbyIsIk1hdGgiLCJyYW5kb20iLCJpc1JlYWR5IiwiZXJyb3IiLCJub29wIiwidHlwZSIsIkFycmF5IiwiaXNXaW5kb3ciLCJpc051bWVyaWMiLCJwYXJzZUZsb2F0IiwiaXNFbXB0eU9iamVjdCIsIm5vZGVUeXBlIiwib3duTGFzdCIsImdsb2JhbEV2YWwiLCJ0cmltIiwiZXhlY1NjcmlwdCIsImV2YWwiLCJjYW1lbENhc2UiLCJub2RlTmFtZSIsInRvTG93ZXJDYXNlIiwiciIsIm1ha2VBcnJheSIsIk9iamVjdCIsImluQXJyYXkiLCJtYXgiLCJncmVwIiwiZ3VpZCIsInByb3h5Iiwibm93IiwiRGF0ZSIsInN1cHBvcnQiLCJzcGxpdCIsInMiLCJ0IiwidSIsInYiLCJ3IiwieCIsInkiLCJoYSIsInoiLCJBIiwiQiIsIkMiLCJEIiwiRSIsIkYiLCJwb3AiLCJHIiwiSCIsIkkiLCJKIiwiSyIsIkwiLCJNIiwiTiIsIk8iLCJQIiwiUSIsIlIiLCJTIiwiVCIsIlUiLCJWIiwiVyIsIlgiLCJJRCIsIkNMQVNTIiwiVEFHIiwiQVRUUiIsIlBTRVVETyIsIkNISUxEIiwiYm9vbCIsIm5lZWRzQ29udGV4dCIsIlkiLCJaIiwiJCIsIl8iLCJhYSIsImJhIiwiY2EiLCJkYSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImVhIiwiY2hpbGROb2RlcyIsImZhIiwiZ2EiLCJvd25lckRvY3VtZW50IiwiZXhlYyIsInBhcmVudE5vZGUiLCJpZCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInFzYSIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInJhIiwicGEiLCJqb2luIiwicXVlcnlTZWxlY3RvckFsbCIsInJlbW92ZUF0dHJpYnV0ZSIsImNhY2hlTGVuZ3RoIiwic2hpZnQiLCJpYSIsImphIiwiY3JlYXRlRWxlbWVudCIsInJlbW92ZUNoaWxkIiwia2EiLCJhdHRySGFuZGxlIiwibGEiLCJzb3VyY2VJbmRleCIsIm5leHRTaWJsaW5nIiwibWEiLCJuYSIsIm9hIiwiaXNYTUwiLCJzZXREb2N1bWVudCIsImRlZmF1bHRWaWV3IiwidG9wIiwiYXR0YWNoRXZlbnQiLCJhdHRyaWJ1dGVzIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVDb21tZW50IiwiZ2V0QnlJZCIsImdldEVsZW1lbnRzQnlOYW1lIiwiZmluZCIsImZpbHRlciIsImdldEF0dHJpYnV0ZU5vZGUiLCJ2YWx1ZSIsImlubmVySFRNTCIsIm1hdGNoZXNTZWxlY3RvciIsIm1hdGNoZXMiLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJtb3pNYXRjaGVzU2VsZWN0b3IiLCJvTWF0Y2hlc1NlbGVjdG9yIiwibXNNYXRjaGVzU2VsZWN0b3IiLCJkaXNjb25uZWN0ZWRNYXRjaCIsImNvbXBhcmVEb2N1bWVudFBvc2l0aW9uIiwic29ydERldGFjaGVkIiwidW5zaGlmdCIsImF0dHIiLCJzcGVjaWZpZWQiLCJ1bmlxdWVTb3J0IiwiZGV0ZWN0RHVwbGljYXRlcyIsInNvcnRTdGFibGUiLCJnZXRUZXh0IiwidGV4dENvbnRlbnQiLCJmaXJzdENoaWxkIiwibm9kZVZhbHVlIiwic2VsZWN0b3JzIiwiY3JlYXRlUHNldWRvIiwibWF0Y2giLCJyZWxhdGl2ZSIsImRpciIsInByZUZpbHRlciIsImxhc3RDaGlsZCIsInBzZXVkb3MiLCJzZXRGaWx0ZXJzIiwibm90IiwiaW5uZXJUZXh0IiwibGFuZyIsImxvY2F0aW9uIiwiaGFzaCIsInJvb3QiLCJmb2N1cyIsImFjdGl2ZUVsZW1lbnQiLCJoYXNGb2N1cyIsImhyZWYiLCJ0YWJJbmRleCIsImVuYWJsZWQiLCJkaXNhYmxlZCIsImNoZWNrZWQiLCJzZWxlY3RlZCIsInNlbGVjdGVkSW5kZXgiLCJlbXB0eSIsInBhcmVudCIsImhlYWRlciIsImlucHV0IiwiYnV0dG9uIiwidGV4dCIsImV2ZW4iLCJvZGQiLCJsdCIsImd0IiwibnRoIiwicmFkaW8iLCJjaGVja2JveCIsImZpbGUiLCJwYXNzd29yZCIsImltYWdlIiwic3VibWl0IiwicmVzZXQiLCJxYSIsImZpbHRlcnMiLCJ0b2tlbml6ZSIsInNhIiwidGEiLCJ1YSIsInZhIiwid2EiLCJ4YSIsInlhIiwiY29tcGlsZSIsInNlbGVjdCIsImRlZmF1bHRWYWx1ZSIsImV4cHIiLCJ1bmlxdWUiLCJpc1hNTERvYyIsImlzIiwiY2hhckF0IiwicGFyc2VIVE1MIiwicmVhZHkiLCJjaGlsZHJlbiIsImNvbnRlbnRzIiwibmV4dCIsInByZXYiLCJzaWJsaW5nIiwiY2xvc2VzdCIsImluZGV4IiwicHJldkFsbCIsImFkZEJhY2siLCJwYXJlbnRzIiwicGFyZW50c1VudGlsIiwibmV4dEFsbCIsIm5leHRVbnRpbCIsInByZXZVbnRpbCIsInNpYmxpbmdzIiwiY29udGVudERvY3VtZW50IiwiY29udGVudFdpbmRvdyIsInJldmVyc2UiLCJDYWxsYmFja3MiLCJvbmNlIiwibWVtb3J5Iiwic3RvcE9uRmFsc2UiLCJkaXNhYmxlIiwibG9jayIsImxvY2tlZCIsImZpcmVXaXRoIiwiZmlyZSIsImZpcmVkIiwiRGVmZXJyZWQiLCJzdGF0ZSIsImFsd2F5cyIsImRvbmUiLCJmYWlsIiwidGhlbiIsInByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicHJvZ3Jlc3MiLCJub3RpZnkiLCJwaXBlIiwid2hlbiIsIm5vdGlmeVdpdGgiLCJyZXNvbHZlV2l0aCIsInJlYWR5V2FpdCIsImhvbGRSZWFkeSIsInRyaWdnZXJIYW5kbGVyIiwib2ZmIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRldGFjaEV2ZW50IiwiZXZlbnQiLCJyZWFkeVN0YXRlIiwiZnJhbWVFbGVtZW50IiwiZG9TY3JvbGwiLCJpbmxpbmVCbG9ja05lZWRzTGF5b3V0Iiwic3R5bGUiLCJjc3NUZXh0Iiwiem9vbSIsIm9mZnNldFdpZHRoIiwiZGVsZXRlRXhwYW5kbyIsImFjY2VwdERhdGEiLCJub0RhdGEiLCJwYXJzZUpTT04iLCJkYXRhIiwiY2FjaGUiLCJ0b0pTT04iLCJjbGVhbkRhdGEiLCJoYXNEYXRhIiwicmVtb3ZlRGF0YSIsIl9kYXRhIiwiX3JlbW92ZURhdGEiLCJuYW1lIiwicXVldWUiLCJkZXF1ZXVlIiwiX3F1ZXVlSG9va3MiLCJzdG9wIiwiY2xlYXJRdWV1ZSIsInNvdXJjZSIsImNzcyIsImFjY2VzcyIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJsZWFkaW5nV2hpdGVzcGFjZSIsInRib2R5IiwiaHRtbFNlcmlhbGl6ZSIsImh0bWw1Q2xvbmUiLCJjbG9uZU5vZGUiLCJvdXRlckhUTUwiLCJhcHBlbmRDaGVja2VkIiwibm9DbG9uZUNoZWNrZWQiLCJjaGVja0Nsb25lIiwibm9DbG9uZUV2ZW50IiwiY2xpY2siLCJjaGFuZ2UiLCJmb2N1c2luIiwiZ2xvYmFsIiwiaGFuZGxlciIsImV2ZW50cyIsImhhbmRsZSIsInRyaWdnZXJlZCIsImRpc3BhdGNoIiwic3BlY2lhbCIsImRlbGVnYXRlVHlwZSIsImJpbmRUeXBlIiwib3JpZ1R5cGUiLCJuYW1lc3BhY2UiLCJkZWxlZ2F0ZUNvdW50Iiwic2V0dXAiLCJ0ZWFyZG93biIsInJlbW92ZUV2ZW50IiwidHJpZ2dlciIsIkV2ZW50IiwiaXNUcmlnZ2VyIiwibmFtZXNwYWNlX3JlIiwicmVzdWx0Iiwibm9CdWJibGUiLCJwYXJlbnRXaW5kb3ciLCJpc1Byb3BhZ2F0aW9uU3RvcHBlZCIsInByZXZlbnREZWZhdWx0IiwiaXNEZWZhdWx0UHJldmVudGVkIiwiX2RlZmF1bHQiLCJmaXgiLCJkZWxlZ2F0ZVRhcmdldCIsInByZURpc3BhdGNoIiwiaGFuZGxlcnMiLCJjdXJyZW50VGFyZ2V0IiwiaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQiLCJoYW5kbGVPYmoiLCJzdG9wUHJvcGFnYXRpb24iLCJwb3N0RGlzcGF0Y2giLCJmaXhIb29rcyIsIm1vdXNlSG9va3MiLCJrZXlIb29rcyIsInByb3BzIiwic3JjRWxlbWVudCIsIm1ldGFLZXkiLCJ3aGljaCIsImNoYXJDb2RlIiwia2V5Q29kZSIsImZyb21FbGVtZW50IiwicGFnZVgiLCJjbGllbnRYIiwic2Nyb2xsTGVmdCIsImNsaWVudExlZnQiLCJwYWdlWSIsImNsaWVudFkiLCJzY3JvbGxUb3AiLCJjbGllbnRUb3AiLCJyZWxhdGVkVGFyZ2V0IiwidG9FbGVtZW50IiwibG9hZCIsImJsdXIiLCJiZWZvcmV1bmxvYWQiLCJvcmlnaW5hbEV2ZW50IiwicmV0dXJuVmFsdWUiLCJzaW11bGF0ZSIsImlzU2ltdWxhdGVkIiwiZGVmYXVsdFByZXZlbnRlZCIsInRpbWVTdGFtcCIsImNhbmNlbEJ1YmJsZSIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsIm1vdXNlZW50ZXIiLCJtb3VzZWxlYXZlIiwicG9pbnRlcmVudGVyIiwicG9pbnRlcmxlYXZlIiwic3VibWl0QnViYmxlcyIsImZvcm0iLCJfc3VibWl0X2J1YmJsZSIsImNoYW5nZUJ1YmJsZXMiLCJwcm9wZXJ0eU5hbWUiLCJfanVzdF9jaGFuZ2VkIiwiZm9jdXNpbkJ1YmJsZXMiLCJvbiIsIm9uZSIsIm9wdGlvbiIsImxlZ2VuZCIsImFyZWEiLCJwYXJhbSIsInRoZWFkIiwidHIiLCJjb2wiLCJ0ZCIsIm9wdGdyb3VwIiwidGZvb3QiLCJjb2xncm91cCIsImNhcHRpb24iLCJ0aCIsImRlZmF1bHRDaGVja2VkIiwiemEiLCJBYSIsIkJhIiwiZGVmYXVsdFNlbGVjdGVkIiwiY2xvbmUiLCJidWlsZEZyYWdtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJhcHBlbmQiLCJkb21NYW5pcCIsInByZXBlbmQiLCJpbnNlcnRCZWZvcmUiLCJiZWZvcmUiLCJhZnRlciIsIm9wdGlvbnMiLCJodG1sIiwicmVwbGFjZVdpdGgiLCJyZXBsYWNlQ2hpbGQiLCJkZXRhY2giLCJzcmMiLCJfZXZhbFVybCIsImFwcGVuZFRvIiwicHJlcGVuZFRvIiwiaW5zZXJ0QWZ0ZXIiLCJyZXBsYWNlQWxsIiwiQ2EiLCJEYSIsIkVhIiwiZ2V0RGVmYXVsdENvbXB1dGVkU3R5bGUiLCJkaXNwbGF5IiwiRmEiLCJ3cml0ZSIsImNsb3NlIiwic2hyaW5rV3JhcEJsb2NrcyIsIndpZHRoIiwiR2EiLCJIYSIsIklhIiwiSmEiLCJLYSIsImdldENvbXB1dGVkU3R5bGUiLCJvcGVuZXIiLCJnZXRQcm9wZXJ0eVZhbHVlIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsImN1cnJlbnRTdHlsZSIsImxlZnQiLCJydW50aW1lU3R5bGUiLCJwaXhlbExlZnQiLCJMYSIsIm1hcmdpblJpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwib3BhY2l0eSIsImNzc0Zsb2F0IiwiYmFja2dyb3VuZENsaXAiLCJjbGVhckNsb25lU3R5bGUiLCJib3hTaXppbmciLCJNb3pCb3hTaXppbmciLCJXZWJraXRCb3hTaXppbmciLCJyZWxpYWJsZUhpZGRlbk9mZnNldHMiLCJib3hTaXppbmdSZWxpYWJsZSIsInBpeGVsUG9zaXRpb24iLCJyZWxpYWJsZU1hcmdpblJpZ2h0Iiwic3dhcCIsIk1hIiwiTmEiLCJPYSIsIlBhIiwiUWEiLCJSYSIsInBvc2l0aW9uIiwidmlzaWJpbGl0eSIsIlNhIiwibGV0dGVyU3BhY2luZyIsImZvbnRXZWlnaHQiLCJUYSIsIlVhIiwiVmEiLCJXYSIsIlhhIiwiWWEiLCJjc3NIb29rcyIsImNzc051bWJlciIsImNvbHVtbkNvdW50IiwiZmlsbE9wYWNpdHkiLCJmbGV4R3JvdyIsImZsZXhTaHJpbmsiLCJsaW5lSGVpZ2h0Iiwib3JkZXIiLCJvcnBoYW5zIiwid2lkb3dzIiwiekluZGV4IiwiY3NzUHJvcHMiLCJzZXQiLCIkMSIsIm1hcmdpbiIsInBhZGRpbmciLCJib3JkZXIiLCJleHBhbmQiLCJzaG93IiwiaGlkZSIsIlphIiwiVHdlZW4iLCJwcm9wIiwiZWFzaW5nIiwic3RhcnQiLCJjdXIiLCJ1bml0IiwicHJvcEhvb2tzIiwicnVuIiwiZHVyYXRpb24iLCJwb3MiLCJzdGVwIiwiZngiLCJsaW5lYXIiLCJzd2luZyIsImNvcyIsIlBJIiwiJGEiLCJfYSIsImFiIiwiYmIiLCJjYiIsImRiIiwiaWIiLCJlYiIsImNyZWF0ZVR3ZWVuIiwiZmIiLCJnYiIsImhlaWdodCIsImhiIiwidW5xdWV1ZWQiLCJvdmVyZmxvdyIsIm92ZXJmbG93WCIsIm92ZXJmbG93WSIsImhpZGRlbiIsImpiIiwia2IiLCJzdGFydFRpbWUiLCJ0d2VlbnMiLCJvcHRzIiwic3BlY2lhbEVhc2luZyIsIm9yaWdpbmFsUHJvcGVydGllcyIsIm9yaWdpbmFsT3B0aW9ucyIsInJlamVjdFdpdGgiLCJ0aW1lciIsImFuaW0iLCJjb21wbGV0ZSIsIkFuaW1hdGlvbiIsInR3ZWVuZXIiLCJwcmVmaWx0ZXIiLCJzcGVlZCIsInNwZWVkcyIsIm9sZCIsImZhZGVUbyIsImFuaW1hdGUiLCJmaW5pc2giLCJ0aW1lcnMiLCJzbGlkZURvd24iLCJzbGlkZVVwIiwic2xpZGVUb2dnbGUiLCJmYWRlSW4iLCJmYWRlT3V0IiwiZmFkZVRvZ2dsZSIsInRpY2siLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInNsb3ciLCJmYXN0IiwiZGVsYXkiLCJjbGVhclRpbWVvdXQiLCJnZXRTZXRBdHRyaWJ1dGUiLCJocmVmTm9ybWFsaXplZCIsImNoZWNrT24iLCJvcHRTZWxlY3RlZCIsImVuY3R5cGUiLCJvcHREaXNhYmxlZCIsInJhZGlvVmFsdWUiLCJsYiIsInZhbCIsInZhbEhvb2tzIiwic2Nyb2xsSGVpZ2h0IiwibWIiLCJuYiIsIm9iIiwicGIiLCJxYiIsInJiIiwicmVtb3ZlQXR0ciIsImF0dHJIb29rcyIsInByb3BGaXgiLCJzZXRBdHRyaWJ1dGVOb2RlIiwiY3JlYXRlQXR0cmlidXRlIiwiY29vcmRzIiwiY29udGVudGVkaXRhYmxlIiwic2IiLCJ0YiIsInJlbW92ZVByb3AiLCJwYXJzZUludCIsInViIiwiaG92ZXIiLCJiaW5kIiwidW5iaW5kIiwiZGVsZWdhdGUiLCJ1bmRlbGVnYXRlIiwidmIiLCJ3YiIsInhiIiwiSlNPTiIsInBhcnNlIiwiRnVuY3Rpb24iLCJwYXJzZVhNTCIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsIkFjdGl2ZVhPYmplY3QiLCJhc3luYyIsImxvYWRYTUwiLCJ5YiIsInpiIiwiQWIiLCJCYiIsIkNiIiwiRGIiLCJFYiIsIkZiIiwiR2IiLCJIYiIsIkliIiwiSmIiLCJLYiIsIkxiIiwiTWIiLCJkYXRhVHlwZXMiLCJOYiIsImFqYXhTZXR0aW5ncyIsImZsYXRPcHRpb25zIiwiT2IiLCJtaW1lVHlwZSIsImdldFJlc3BvbnNlSGVhZGVyIiwiY29udmVydGVycyIsIlBiIiwicmVzcG9uc2VGaWVsZHMiLCJkYXRhRmlsdGVyIiwiZGF0YVR5cGUiLCJhY3RpdmUiLCJsYXN0TW9kaWZpZWQiLCJldGFnIiwidXJsIiwiaXNMb2NhbCIsInByb2Nlc3NEYXRhIiwiY29udGVudFR5cGUiLCJhY2NlcHRzIiwieG1sIiwianNvbiIsImFqYXhTZXR1cCIsImFqYXhQcmVmaWx0ZXIiLCJhamF4VHJhbnNwb3J0IiwiYWpheCIsInN0YXR1c0NvZGUiLCJnZXRBbGxSZXNwb25zZUhlYWRlcnMiLCJzZXRSZXF1ZXN0SGVhZGVyIiwib3ZlcnJpZGVNaW1lVHlwZSIsInN0YXR1cyIsImFib3J0Iiwic3VjY2VzcyIsIm1ldGhvZCIsImNyb3NzRG9tYWluIiwidHJhZGl0aW9uYWwiLCJoYXNDb250ZW50IiwiaWZNb2RpZmllZCIsImhlYWRlcnMiLCJiZWZvcmVTZW5kIiwidGltZW91dCIsInNlbmQiLCJzdGF0dXNUZXh0IiwiZ2V0SlNPTiIsImdldFNjcmlwdCIsIndyYXBBbGwiLCJ3cmFwSW5uZXIiLCJ3cmFwIiwidW53cmFwIiwidmlzaWJsZSIsIlFiIiwiUmIiLCJTYiIsIlRiIiwiVWIiLCJWYiIsImVuY29kZVVSSUNvbXBvbmVudCIsInNlcmlhbGl6ZSIsInNlcmlhbGl6ZUFycmF5IiwieGhyIiwiWmIiLCIkYiIsIldiIiwiWGIiLCJZYiIsImNvcnMiLCJvcGVuIiwidXNlcm5hbWUiLCJ4aHJGaWVsZHMiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZXNwb25zZVRleHQiLCJYTUxIdHRwUmVxdWVzdCIsInNjcmlwdCIsImhlYWQiLCJzY3JpcHRDaGFyc2V0IiwiY2hhcnNldCIsIm9ubG9hZCIsIl9iIiwiYWMiLCJqc29ucCIsImpzb25wQ2FsbGJhY2siLCJiYyIsImFuaW1hdGVkIiwiY2MiLCJkYyIsIm9mZnNldCIsInNldE9mZnNldCIsInVzaW5nIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGFnZVlPZmZzZXQiLCJwYWdlWE9mZnNldCIsIm9mZnNldFBhcmVudCIsInNjcm9sbFRvIiwiSGVpZ2h0IiwiV2lkdGgiLCJzaXplIiwiYW5kU2VsZiIsImVjIiwialF1ZXJ5IiwiZmMiLCJub0NvbmZsaWN0Iiwic3Vic3RyaW5nIiwidGltZW91dElkIiwic2Nyb2xsZXgiLCJib3R0b20iLCJtb2RlIiwiZW50ZXIiLCJsZWF2ZSIsImluaXRpYWxpemUiLCJ0ZXJtaW5hdGUiLCJzY3JvbGwiLCIkZWxlbWVudCIsIm91dGVySGVpZ2h0IiwiZWxlbWVudCIsInVuc2Nyb2xsZXgiLCJhbmNob3IiLCJzY3JvbGx5IiwicG9sbE9uY2UiLCJza2VsIiwiYnJlYWtwb2ludHMiLCJ4bGFyZ2UiLCJsYXJnZSIsIm1lZGl1bSIsInNtYWxsIiwieHNtYWxsIiwieHhzbWFsbCIsIiR3aW5kb3ciLCIkYm9keSIsIiR3cmFwcGVyIiwicGxhY2Vob2xkZXIiLCJwcmlvcml0aXplIiwiYnJlYWtwb2ludCIsInZhcnMiLCJicm93c2VyIiwiZmxleGJveEZpeFRpbWVvdXRJZCIsIiR4IiwiY2FuVXNlIiwiJHRoaXMiLCIkaW1nIiwicG9zaXRpb25DbGFzcyIsIm1vYmlsZSIsImRlbHRhIiwiZGVsdGFYIiwibWluIiwiJGlubmVyIiwiZGlyZWN0aW9uIiwiX2dhbGxlcnlfbW92ZUludGVydmFsSWQiLCIkZ2FsbGVyeSIsIiRtb2RhbCIsIiRtb2RhbEltZyIsIl9sb2NrZWQiLCJicmVha3BvaW50SWRzIiwiaXNJbml0Iiwib2JqIiwiYXR0YWNobWVudHMiLCJzdGF0ZXMiLCJzZCIsInN0YXRlSGFuZGxlcnMiLCJzdGF0ZUlkIiwiRE9NUmVhZHkiLCJpdGVyYXRlIiwibWF0Y2hlc01lZGlhIiwibmV3U3R5bGUiLCJfY2FuVXNlIiwibWVkaWEiLCJ3YXNBY3RpdmUiLCJzeW5jIiwicG9sbCIsImFkZFN0YXRlSGFuZGxlciIsImNhbGxTdGF0ZUhhbmRsZXIiLCJjaGFuZ2VTdGF0ZSIsImxhc3RTdGF0ZUlkIiwiZGV0YWNoQWxsIiwiYXR0YWNoQWxsIiwiZ2VuZXJhdGVTdGF0ZUNvbmZpZyIsImdldFN0YXRlSWQiLCJfYXR0YWNoIiwiYXR0YWNoIiwidGFnTmFtZSIsInBlcm1hbmVudCIsInByaW9yaXR5IiwiYXR0YWNobWVudCIsIm5ld0F0dGFjaG1lbnQiLCJpbml0TWV0aG9kcyIsImluaXRWYXJzIiwib25yZXNpemUiLCJvbm9yaWVudGF0aW9uY2hhbmdlIiwic2VsZiIsIlR5cGVFcnJvciIsImFicyIsImtleXMiLCJtYXRjaE1lZGlhIiwic3R5bGVNZWRpYSIsIm1hdGNoTWVkaXVtIiwic3R5bGVTaGVldCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiYnJvd3NlclZlcnNpb24iLCJvcyIsIm9zVmVyc2lvbiIsIklFVmVyc2lvbiIsInRvdWNoIiwibXNNYXhUb3VjaFBvaW50cyIsIm5hdkxpc3QiLCJpbmRlbnQiLCJwYW5lbCIsInVzZXJDb25maWciLCJjb25maWciLCJoaWRlT25DbGljayIsImhpZGVPbkVzY2FwZSIsImhpZGVPblN3aXBlIiwicmVzZXRTY3JvbGwiLCJyZXNldEZvcm1zIiwic2lkZSIsInZpc2libGVDbGFzcyIsIl9oaWRlIiwidG91Y2hQb3NYIiwidG91Y2hlcyIsInRvdWNoUG9zWSIsImRpZmZYIiwiZGlmZlkiLCJ0cyIsImJvdW5kYXJ5IiwiJGVsZW1lbnRzIiwiY29uZGl0aW9uIiwia2V5IiwiJGUiLCIkcCIsIiRwYXJlbnQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFD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dGIsV0FBSCxDQUFldWIsRUFBZjs7QUFFRDtBQUNDRCxRQUFHbmtCLFVBQUgsQ0FBY2trQixHQUFkO0FBRUQ7QUFFRixHQWhERDtBQWtERCxFQTNERDtBQTZEQSxDQTFrQkQsRUEwa0JHakksTUExa0JILEUiLCJmaWxlIjoiXFxqc1xcYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOWNmNmJmY2Y2ZGJkODg1MmQ0NDQiLCIvKiBnbG9iYWxzIF9fd2VicGFja19hbWRfb3B0aW9uc19fICovXHJcbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX2FtZF9vcHRpb25zX187XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2FtZC1vcHRpb25zLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vYW1kLW9wdGlvbnMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0aWYoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uL3ZlbmRvci9odG1sNVN0b3J5VGhlbWUvanMvbWFpbicpO1xyXG5yZXF1aXJlKCcuLi92ZW5kb3IvY29kcm9wc01lbnUvanMvbWFpbicpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvc2NyaXB0cy9hcHAuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9zdHlsZXMvYWRtaW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL3N0eWxlcy9hZG1pbi5zY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL3N0eWxlcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL3N0eWxlcy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiFcbiAqIGNsYXNzaWUgLSBjbGFzcyBoZWxwZXIgZnVuY3Rpb25zXG4gKiBmcm9tIGJvbnpvIGh0dHBzOi8vZ2l0aHViLmNvbS9kZWQvYm9uem9cbiAqIFxuICogY2xhc3NpZS5oYXMoIGVsZW0sICdteS1jbGFzcycgKSAtPiB0cnVlL2ZhbHNlXG4gKiBjbGFzc2llLmFkZCggZWxlbSwgJ215LW5ldy1jbGFzcycgKVxuICogY2xhc3NpZS5yZW1vdmUoIGVsZW0sICdteS11bndhbnRlZC1jbGFzcycgKVxuICogY2xhc3NpZS50b2dnbGUoIGVsZW0sICdteS1jbGFzcycgKVxuICovXG5cbi8qanNoaW50IGJyb3dzZXI6IHRydWUsIHN0cmljdDogdHJ1ZSwgdW5kZWY6IHRydWUgKi9cbi8qZ2xvYmFsIGRlZmluZTogZmFsc2UgKi9cblxuKCBmdW5jdGlvbiggd2luZG93ICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbi8vIGNsYXNzIGhlbHBlciBmdW5jdGlvbnMgZnJvbSBib256byBodHRwczovL2dpdGh1Yi5jb20vZGVkL2JvbnpvXG5cbmZ1bmN0aW9uIGNsYXNzUmVnKCBjbGFzc05hbWUgKSB7XG4gIHJldHVybiBuZXcgUmVnRXhwKFwiKF58XFxcXHMrKVwiICsgY2xhc3NOYW1lICsgXCIoXFxcXHMrfCQpXCIpO1xufVxuXG4vLyBjbGFzc0xpc3Qgc3VwcG9ydCBmb3IgY2xhc3MgbWFuYWdlbWVudFxuLy8gYWx0aG8gdG8gYmUgZmFpciwgdGhlIGFwaSBzdWNrcyBiZWNhdXNlIGl0IHdvbid0IGFjY2VwdCBtdWx0aXBsZSBjbGFzc2VzIGF0IG9uY2VcbnZhciBoYXNDbGFzcywgYWRkQ2xhc3MsIHJlbW92ZUNsYXNzO1xuXG5pZiAoICdjbGFzc0xpc3QnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCApIHtcbiAgaGFzQ2xhc3MgPSBmdW5jdGlvbiggZWxlbSwgYyApIHtcbiAgICByZXR1cm4gZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoIGMgKTtcbiAgfTtcbiAgYWRkQ2xhc3MgPSBmdW5jdGlvbiggZWxlbSwgYyApIHtcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoIGMgKTtcbiAgfTtcbiAgcmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbiggZWxlbSwgYyApIHtcbiAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoIGMgKTtcbiAgfTtcbn1cbmVsc2Uge1xuICBoYXNDbGFzcyA9IGZ1bmN0aW9uKCBlbGVtLCBjICkge1xuICAgIHJldHVybiBjbGFzc1JlZyggYyApLnRlc3QoIGVsZW0uY2xhc3NOYW1lICk7XG4gIH07XG4gIGFkZENsYXNzID0gZnVuY3Rpb24oIGVsZW0sIGMgKSB7XG4gICAgaWYgKCAhaGFzQ2xhc3MoIGVsZW0sIGMgKSApIHtcbiAgICAgIGVsZW0uY2xhc3NOYW1lID0gZWxlbS5jbGFzc05hbWUgKyAnICcgKyBjO1xuICAgIH1cbiAgfTtcbiAgcmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbiggZWxlbSwgYyApIHtcbiAgICBlbGVtLmNsYXNzTmFtZSA9IGVsZW0uY2xhc3NOYW1lLnJlcGxhY2UoIGNsYXNzUmVnKCBjICksICcgJyApO1xuICB9O1xufVxuXG5mdW5jdGlvbiB0b2dnbGVDbGFzcyggZWxlbSwgYyApIHtcbiAgdmFyIGZuID0gaGFzQ2xhc3MoIGVsZW0sIGMgKSA/IHJlbW92ZUNsYXNzIDogYWRkQ2xhc3M7XG4gIGZuKCBlbGVtLCBjICk7XG59XG5cbnZhciBjbGFzc2llID0ge1xuICAvLyBmdWxsIG5hbWVzXG4gIGhhc0NsYXNzOiBoYXNDbGFzcyxcbiAgYWRkQ2xhc3M6IGFkZENsYXNzLFxuICByZW1vdmVDbGFzczogcmVtb3ZlQ2xhc3MsXG4gIHRvZ2dsZUNsYXNzOiB0b2dnbGVDbGFzcyxcbiAgLy8gc2hvcnQgbmFtZXNcbiAgaGFzOiBoYXNDbGFzcyxcbiAgYWRkOiBhZGRDbGFzcyxcbiAgcmVtb3ZlOiByZW1vdmVDbGFzcyxcbiAgdG9nZ2xlOiB0b2dnbGVDbGFzc1xufTtcblxuLy8gdHJhbnNwb3J0XG5pZiAoIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgLy8gQU1EXG4gIGRlZmluZSggY2xhc3NpZSApO1xufSBlbHNlIHtcbiAgLy8gYnJvd3NlciBnbG9iYWxcbiAgd2luZG93LmNsYXNzaWUgPSBjbGFzc2llO1xufVxuXG59KSggd2luZG93ICk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9jb2Ryb3BzTWVudS9qcy9jbGFzc2llLmpzIiwiLyoqXG4gKiBtYWluLmpzXG4gKiBodHRwOi8vd3d3LmNvZHJvcHMuY29tXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAqIFxuICogQ29weXJpZ2h0IDIwMTQsIENvZHJvcHNcbiAqIGh0dHA6Ly93d3cuY29kcm9wcy5jb21cbiAqL1xudHJ5IHtcbiAgICB3aW5kb3cuY2xhc3NpZSA9IHJlcXVpcmUoJy4vY2xhc3NpZScpO1xufSBjYXRjaCAoZSkge31cblxuKGZ1bmN0aW9uKCkge1xuXG5cdHZhciBib2R5RWwgPSBkb2N1bWVudC5ib2R5LFxuXHRcdGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLmNvbnRlbnQtd3JhcCcgKSxcblx0XHRvcGVuYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdvcGVuLWJ1dHRvbicgKSxcblx0XHRjbG9zZWJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnY2xvc2UtYnV0dG9uJyApLFxuXHRcdGlzT3BlbiA9IGZhbHNlO1xuXG5cdGZ1bmN0aW9uIGluaXQoKSB7XG5cdFx0aW5pdEV2ZW50cygpO1xuXHR9XG5cblx0ZnVuY3Rpb24gaW5pdEV2ZW50cygpIHtcblx0XHRvcGVuYnRuLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIHRvZ2dsZU1lbnUgKTtcblx0XHRpZiggY2xvc2VidG4gKSB7XG5cdFx0XHRjbG9zZWJ0bi5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCB0b2dnbGVNZW51ICk7XG5cdFx0fVxuXG5cdFx0Ly8gY2xvc2UgdGhlIG1lbnUgZWxlbWVudCBpZiB0aGUgdGFyZ2V0IGl0wrRzIG5vdCB0aGUgbWVudSBlbGVtZW50IG9yIG9uZSBvZiBpdHMgZGVzY2VuZGFudHMuLlxuXHRcdGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgZnVuY3Rpb24oZXYpIHtcblx0XHRcdHZhciB0YXJnZXQgPSBldi50YXJnZXQ7XG5cdFx0XHRpZiggaXNPcGVuICYmIHRhcmdldCAhPT0gb3BlbmJ0biApIHtcblx0XHRcdFx0Ly8gdG9nZ2xlTWVudSgpO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHRvZ2dsZU1lbnUoKSB7XG5cdFx0aWYoIGlzT3BlbiApIHtcblx0XHRcdGNsYXNzaWUucmVtb3ZlKCBib2R5RWwsICdzaG93LW1lbnUnICk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0Y2xhc3NpZS5hZGQoIGJvZHlFbCwgJ3Nob3ctbWVudScgKTtcblx0XHR9XG5cdFx0aXNPcGVuID0gIWlzT3Blbjtcblx0fVxuXG5cdGluaXQoKTtcblxuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdHRvZ2dsZU1lbnUoKTtcblx0fSwgMzUwKTtcblxufSkoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9jb2Ryb3BzTWVudS9qcy9tYWluLmpzIiwiLyohIGpRdWVyeSB2MS4xMS4zIHwgKGMpIDIwMDUsIDIwMTUgalF1ZXJ5IEZvdW5kYXRpb24sIEluYy4gfCBqcXVlcnkub3JnL2xpY2Vuc2UgKi9cbiFmdW5jdGlvbihhLGIpe1wib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1hLmRvY3VtZW50P2IoYSwhMCk6ZnVuY3Rpb24oYSl7aWYoIWEuZG9jdW1lbnQpdGhyb3cgbmV3IEVycm9yKFwialF1ZXJ5IHJlcXVpcmVzIGEgd2luZG93IHdpdGggYSBkb2N1bWVudFwiKTtyZXR1cm4gYihhKX06YihhKX0oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6dGhpcyxmdW5jdGlvbihhLGIpe3ZhciBjPVtdLGQ9Yy5zbGljZSxlPWMuY29uY2F0LGY9Yy5wdXNoLGc9Yy5pbmRleE9mLGg9e30saT1oLnRvU3RyaW5nLGo9aC5oYXNPd25Qcm9wZXJ0eSxrPXt9LGw9XCIxLjExLjNcIixtPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyBtLmZuLmluaXQoYSxiKX0sbj0vXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2csbz0vXi1tcy0vLHA9Ly0oW1xcZGEtel0pL2dpLHE9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYi50b1VwcGVyQ2FzZSgpfTttLmZuPW0ucHJvdG90eXBlPXtqcXVlcnk6bCxjb25zdHJ1Y3RvcjptLHNlbGVjdG9yOlwiXCIsbGVuZ3RoOjAsdG9BcnJheTpmdW5jdGlvbigpe3JldHVybiBkLmNhbGwodGhpcyl9LGdldDpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9YT8wPmE/dGhpc1thK3RoaXMubGVuZ3RoXTp0aGlzW2FdOmQuY2FsbCh0aGlzKX0scHVzaFN0YWNrOmZ1bmN0aW9uKGEpe3ZhciBiPW0ubWVyZ2UodGhpcy5jb25zdHJ1Y3RvcigpLGEpO3JldHVybiBiLnByZXZPYmplY3Q9dGhpcyxiLmNvbnRleHQ9dGhpcy5jb250ZXh0LGJ9LGVhY2g6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbS5lYWNoKHRoaXMsYSxiKX0sbWFwOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnB1c2hTdGFjayhtLm1hcCh0aGlzLGZ1bmN0aW9uKGIsYyl7cmV0dXJuIGEuY2FsbChiLGMsYil9KSl9LHNsaWNlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGQuYXBwbHkodGhpcyxhcmd1bWVudHMpKX0sZmlyc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgwKX0sbGFzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKC0xKX0sZXE6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5sZW5ndGgsYz0rYSsoMD5hP2I6MCk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGM+PTAmJmI+Yz9bdGhpc1tjXV06W10pfSxlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wcmV2T2JqZWN0fHx0aGlzLmNvbnN0cnVjdG9yKG51bGwpfSxwdXNoOmYsc29ydDpjLnNvcnQsc3BsaWNlOmMuc3BsaWNlfSxtLmV4dGVuZD1tLmZuLmV4dGVuZD1mdW5jdGlvbigpe3ZhciBhLGIsYyxkLGUsZixnPWFyZ3VtZW50c1swXXx8e30saD0xLGk9YXJndW1lbnRzLmxlbmd0aCxqPSExO2ZvcihcImJvb2xlYW5cIj09dHlwZW9mIGcmJihqPWcsZz1hcmd1bWVudHNbaF18fHt9LGgrKyksXCJvYmplY3RcIj09dHlwZW9mIGd8fG0uaXNGdW5jdGlvbihnKXx8KGc9e30pLGg9PT1pJiYoZz10aGlzLGgtLSk7aT5oO2grKylpZihudWxsIT0oZT1hcmd1bWVudHNbaF0pKWZvcihkIGluIGUpYT1nW2RdLGM9ZVtkXSxnIT09YyYmKGomJmMmJihtLmlzUGxhaW5PYmplY3QoYyl8fChiPW0uaXNBcnJheShjKSkpPyhiPyhiPSExLGY9YSYmbS5pc0FycmF5KGEpP2E6W10pOmY9YSYmbS5pc1BsYWluT2JqZWN0KGEpP2E6e30sZ1tkXT1tLmV4dGVuZChqLGYsYykpOnZvaWQgMCE9PWMmJihnW2RdPWMpKTtyZXR1cm4gZ30sbS5leHRlbmQoe2V4cGFuZG86XCJqUXVlcnlcIisobCtNYXRoLnJhbmRvbSgpKS5yZXBsYWNlKC9cXEQvZyxcIlwiKSxpc1JlYWR5OiEwLGVycm9yOmZ1bmN0aW9uKGEpe3Rocm93IG5ldyBFcnJvcihhKX0sbm9vcDpmdW5jdGlvbigpe30saXNGdW5jdGlvbjpmdW5jdGlvbihhKXtyZXR1cm5cImZ1bmN0aW9uXCI9PT1tLnR5cGUoYSl9LGlzQXJyYXk6QXJyYXkuaXNBcnJheXx8ZnVuY3Rpb24oYSl7cmV0dXJuXCJhcnJheVwiPT09bS50eXBlKGEpfSxpc1dpbmRvdzpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9YSYmYT09YS53aW5kb3d9LGlzTnVtZXJpYzpmdW5jdGlvbihhKXtyZXR1cm4hbS5pc0FycmF5KGEpJiZhLXBhcnNlRmxvYXQoYSkrMT49MH0saXNFbXB0eU9iamVjdDpmdW5jdGlvbihhKXt2YXIgYjtmb3IoYiBpbiBhKXJldHVybiExO3JldHVybiEwfSxpc1BsYWluT2JqZWN0OmZ1bmN0aW9uKGEpe3ZhciBiO2lmKCFhfHxcIm9iamVjdFwiIT09bS50eXBlKGEpfHxhLm5vZGVUeXBlfHxtLmlzV2luZG93KGEpKXJldHVybiExO3RyeXtpZihhLmNvbnN0cnVjdG9yJiYhai5jYWxsKGEsXCJjb25zdHJ1Y3RvclwiKSYmIWouY2FsbChhLmNvbnN0cnVjdG9yLnByb3RvdHlwZSxcImlzUHJvdG90eXBlT2ZcIikpcmV0dXJuITF9Y2F0Y2goYyl7cmV0dXJuITF9aWYoay5vd25MYXN0KWZvcihiIGluIGEpcmV0dXJuIGouY2FsbChhLGIpO2ZvcihiIGluIGEpO3JldHVybiB2b2lkIDA9PT1ifHxqLmNhbGwoYSxiKX0sdHlwZTpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9hK1wiXCI6XCJvYmplY3RcIj09dHlwZW9mIGF8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGE/aFtpLmNhbGwoYSldfHxcIm9iamVjdFwiOnR5cGVvZiBhfSxnbG9iYWxFdmFsOmZ1bmN0aW9uKGIpe2ImJm0udHJpbShiKSYmKGEuZXhlY1NjcmlwdHx8ZnVuY3Rpb24oYil7YS5ldmFsLmNhbGwoYSxiKX0pKGIpfSxjYW1lbENhc2U6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVwbGFjZShvLFwibXMtXCIpLnJlcGxhY2UocCxxKX0sbm9kZU5hbWU6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09Yi50b0xvd2VyQ2FzZSgpfSxlYWNoOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlPTAsZj1hLmxlbmd0aCxnPXIoYSk7aWYoYyl7aWYoZyl7Zm9yKDtmPmU7ZSsrKWlmKGQ9Yi5hcHBseShhW2VdLGMpLGQ9PT0hMSlicmVha31lbHNlIGZvcihlIGluIGEpaWYoZD1iLmFwcGx5KGFbZV0sYyksZD09PSExKWJyZWFrfWVsc2UgaWYoZyl7Zm9yKDtmPmU7ZSsrKWlmKGQ9Yi5jYWxsKGFbZV0sZSxhW2VdKSxkPT09ITEpYnJlYWt9ZWxzZSBmb3IoZSBpbiBhKWlmKGQ9Yi5jYWxsKGFbZV0sZSxhW2VdKSxkPT09ITEpYnJlYWs7cmV0dXJuIGF9LHRyaW06ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/XCJcIjooYStcIlwiKS5yZXBsYWNlKG4sXCJcIil9LG1ha2VBcnJheTpmdW5jdGlvbihhLGIpe3ZhciBjPWJ8fFtdO3JldHVybiBudWxsIT1hJiYocihPYmplY3QoYSkpP20ubWVyZ2UoYyxcInN0cmluZ1wiPT10eXBlb2YgYT9bYV06YSk6Zi5jYWxsKGMsYSkpLGN9LGluQXJyYXk6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkO2lmKGIpe2lmKGcpcmV0dXJuIGcuY2FsbChiLGEsYyk7Zm9yKGQ9Yi5sZW5ndGgsYz1jPzA+Yz9NYXRoLm1heCgwLGQrYyk6YzowO2Q+YztjKyspaWYoYyBpbiBiJiZiW2NdPT09YSlyZXR1cm4gY31yZXR1cm4tMX0sbWVyZ2U6ZnVuY3Rpb24oYSxiKXt2YXIgYz0rYi5sZW5ndGgsZD0wLGU9YS5sZW5ndGg7d2hpbGUoYz5kKWFbZSsrXT1iW2QrK107aWYoYyE9PWMpd2hpbGUodm9pZCAwIT09YltkXSlhW2UrK109YltkKytdO3JldHVybiBhLmxlbmd0aD1lLGF9LGdyZXA6ZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZCxlPVtdLGY9MCxnPWEubGVuZ3RoLGg9IWM7Zz5mO2YrKylkPSFiKGFbZl0sZiksZCE9PWgmJmUucHVzaChhW2ZdKTtyZXR1cm4gZX0sbWFwOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxmPTAsZz1hLmxlbmd0aCxoPXIoYSksaT1bXTtpZihoKWZvcig7Zz5mO2YrKylkPWIoYVtmXSxmLGMpLG51bGwhPWQmJmkucHVzaChkKTtlbHNlIGZvcihmIGluIGEpZD1iKGFbZl0sZixjKSxudWxsIT1kJiZpLnB1c2goZCk7cmV0dXJuIGUuYXBwbHkoW10saSl9LGd1aWQ6MSxwcm94eTpmdW5jdGlvbihhLGIpe3ZhciBjLGUsZjtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgYiYmKGY9YVtiXSxiPWEsYT1mKSxtLmlzRnVuY3Rpb24oYSk/KGM9ZC5jYWxsKGFyZ3VtZW50cywyKSxlPWZ1bmN0aW9uKCl7cmV0dXJuIGEuYXBwbHkoYnx8dGhpcyxjLmNvbmNhdChkLmNhbGwoYXJndW1lbnRzKSkpfSxlLmd1aWQ9YS5ndWlkPWEuZ3VpZHx8bS5ndWlkKyssZSk6dm9pZCAwfSxub3c6ZnVuY3Rpb24oKXtyZXR1cm4rbmV3IERhdGV9LHN1cHBvcnQ6a30pLG0uZWFjaChcIkJvb2xlYW4gTnVtYmVyIFN0cmluZyBGdW5jdGlvbiBBcnJheSBEYXRlIFJlZ0V4cCBPYmplY3QgRXJyb3JcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oYSxiKXtoW1wiW29iamVjdCBcIitiK1wiXVwiXT1iLnRvTG93ZXJDYXNlKCl9KTtmdW5jdGlvbiByKGEpe3ZhciBiPVwibGVuZ3RoXCJpbiBhJiZhLmxlbmd0aCxjPW0udHlwZShhKTtyZXR1cm5cImZ1bmN0aW9uXCI9PT1jfHxtLmlzV2luZG93KGEpPyExOjE9PT1hLm5vZGVUeXBlJiZiPyEwOlwiYXJyYXlcIj09PWN8fDA9PT1ifHxcIm51bWJlclwiPT10eXBlb2YgYiYmYj4wJiZiLTEgaW4gYX12YXIgcz1mdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmLGcsaCxpLGosayxsLG0sbixvLHAscSxyLHMsdCx1PVwic2l6emxlXCIrMSpuZXcgRGF0ZSx2PWEuZG9jdW1lbnQsdz0wLHg9MCx5PWhhKCksej1oYSgpLEE9aGEoKSxCPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGE9PT1iJiYobD0hMCksMH0sQz0xPDwzMSxEPXt9Lmhhc093blByb3BlcnR5LEU9W10sRj1FLnBvcCxHPUUucHVzaCxIPUUucHVzaCxJPUUuc2xpY2UsSj1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0wLGQ9YS5sZW5ndGg7ZD5jO2MrKylpZihhW2NdPT09YilyZXR1cm4gYztyZXR1cm4tMX0sSz1cImNoZWNrZWR8c2VsZWN0ZWR8YXN5bmN8YXV0b2ZvY3VzfGF1dG9wbGF5fGNvbnRyb2xzfGRlZmVyfGRpc2FibGVkfGhpZGRlbnxpc21hcHxsb29wfG11bHRpcGxlfG9wZW58cmVhZG9ubHl8cmVxdWlyZWR8c2NvcGVkXCIsTD1cIltcXFxceDIwXFxcXHRcXFxcclxcXFxuXFxcXGZdXCIsTT1cIig/OlxcXFxcXFxcLnxbXFxcXHctXXxbXlxcXFx4MDAtXFxcXHhhMF0pK1wiLE49TS5yZXBsYWNlKFwid1wiLFwidyNcIiksTz1cIlxcXFxbXCIrTCtcIiooXCIrTStcIikoPzpcIitMK1wiKihbKl4kfCF+XT89KVwiK0wrXCIqKD86JygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwifChcIitOK1wiKSl8KVwiK0wrXCIqXFxcXF1cIixQPVwiOihcIitNK1wiKSg/OlxcXFwoKCgnKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCIpfCgoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpW1xcXFxdXXxcIitPK1wiKSopfC4qKVxcXFwpfClcIixRPW5ldyBSZWdFeHAoTCtcIitcIixcImdcIiksUj1uZXcgUmVnRXhwKFwiXlwiK0wrXCIrfCgoPzpefFteXFxcXFxcXFxdKSg/OlxcXFxcXFxcLikqKVwiK0wrXCIrJFwiLFwiZ1wiKSxTPW5ldyBSZWdFeHAoXCJeXCIrTCtcIiosXCIrTCtcIipcIiksVD1uZXcgUmVnRXhwKFwiXlwiK0wrXCIqKFs+K35dfFwiK0wrXCIpXCIrTCtcIipcIiksVT1uZXcgUmVnRXhwKFwiPVwiK0wrXCIqKFteXFxcXF0nXFxcIl0qPylcIitMK1wiKlxcXFxdXCIsXCJnXCIpLFY9bmV3IFJlZ0V4cChQKSxXPW5ldyBSZWdFeHAoXCJeXCIrTitcIiRcIiksWD17SUQ6bmV3IFJlZ0V4cChcIl4jKFwiK00rXCIpXCIpLENMQVNTOm5ldyBSZWdFeHAoXCJeXFxcXC4oXCIrTStcIilcIiksVEFHOm5ldyBSZWdFeHAoXCJeKFwiK00ucmVwbGFjZShcIndcIixcIncqXCIpK1wiKVwiKSxBVFRSOm5ldyBSZWdFeHAoXCJeXCIrTyksUFNFVURPOm5ldyBSZWdFeHAoXCJeXCIrUCksQ0hJTEQ6bmV3IFJlZ0V4cChcIl46KG9ubHl8Zmlyc3R8bGFzdHxudGh8bnRoLWxhc3QpLShjaGlsZHxvZi10eXBlKSg/OlxcXFwoXCIrTCtcIiooZXZlbnxvZGR8KChbKy1dfCkoXFxcXGQqKW58KVwiK0wrXCIqKD86KFsrLV18KVwiK0wrXCIqKFxcXFxkKyl8KSlcIitMK1wiKlxcXFwpfClcIixcImlcIiksYm9vbDpuZXcgUmVnRXhwKFwiXig/OlwiK0srXCIpJFwiLFwiaVwiKSxuZWVkc0NvbnRleHQ6bmV3IFJlZ0V4cChcIl5cIitMK1wiKls+K35dfDooZXZlbnxvZGR8ZXF8Z3R8bHR8bnRofGZpcnN0fGxhc3QpKD86XFxcXChcIitMK1wiKigoPzotXFxcXGQpP1xcXFxkKilcIitMK1wiKlxcXFwpfCkoPz1bXi1dfCQpXCIsXCJpXCIpfSxZPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2ksWj0vXmhcXGQkL2ksJD0vXltee10rXFx7XFxzKlxcW25hdGl2ZSBcXHcvLF89L14oPzojKFtcXHctXSspfChcXHcrKXxcXC4oW1xcdy1dKykpJC8sYWE9L1srfl0vLGJhPS8nfFxcXFwvZyxjYT1uZXcgUmVnRXhwKFwiXFxcXFxcXFwoW1xcXFxkYS1mXXsxLDZ9XCIrTCtcIj98KFwiK0wrXCIpfC4pXCIsXCJpZ1wiKSxkYT1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9XCIweFwiK2ItNjU1MzY7cmV0dXJuIGQhPT1kfHxjP2I6MD5kP1N0cmluZy5mcm9tQ2hhckNvZGUoZCs2NTUzNik6U3RyaW5nLmZyb21DaGFyQ29kZShkPj4xMHw1NTI5NiwxMDIzJmR8NTYzMjApfSxlYT1mdW5jdGlvbigpe20oKX07dHJ5e0guYXBwbHkoRT1JLmNhbGwodi5jaGlsZE5vZGVzKSx2LmNoaWxkTm9kZXMpLEVbdi5jaGlsZE5vZGVzLmxlbmd0aF0ubm9kZVR5cGV9Y2F0Y2goZmEpe0g9e2FwcGx5OkUubGVuZ3RoP2Z1bmN0aW9uKGEsYil7Ry5hcHBseShhLEkuY2FsbChiKSl9OmZ1bmN0aW9uKGEsYil7dmFyIGM9YS5sZW5ndGgsZD0wO3doaWxlKGFbYysrXT1iW2QrK10pO2EubGVuZ3RoPWMtMX19fWZ1bmN0aW9uIGdhKGEsYixkLGUpe3ZhciBmLGgsaixrLGwsbyxyLHMsdyx4O2lmKChiP2Iub3duZXJEb2N1bWVudHx8Yjp2KSE9PW4mJm0oYiksYj1ifHxuLGQ9ZHx8W10saz1iLm5vZGVUeXBlLFwic3RyaW5nXCIhPXR5cGVvZiBhfHwhYXx8MSE9PWsmJjkhPT1rJiYxMSE9PWspcmV0dXJuIGQ7aWYoIWUmJnApe2lmKDExIT09ayYmKGY9Xy5leGVjKGEpKSlpZihqPWZbMV0pe2lmKDk9PT1rKXtpZihoPWIuZ2V0RWxlbWVudEJ5SWQoaiksIWh8fCFoLnBhcmVudE5vZGUpcmV0dXJuIGQ7aWYoaC5pZD09PWopcmV0dXJuIGQucHVzaChoKSxkfWVsc2UgaWYoYi5vd25lckRvY3VtZW50JiYoaD1iLm93bmVyRG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaikpJiZ0KGIsaCkmJmguaWQ9PT1qKXJldHVybiBkLnB1c2goaCksZH1lbHNle2lmKGZbMl0pcmV0dXJuIEguYXBwbHkoZCxiLmdldEVsZW1lbnRzQnlUYWdOYW1lKGEpKSxkO2lmKChqPWZbM10pJiZjLmdldEVsZW1lbnRzQnlDbGFzc05hbWUpcmV0dXJuIEguYXBwbHkoZCxiLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoaikpLGR9aWYoYy5xc2EmJighcXx8IXEudGVzdChhKSkpe2lmKHM9cj11LHc9Yix4PTEhPT1rJiZhLDE9PT1rJiZcIm9iamVjdFwiIT09Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKXtvPWcoYSksKHI9Yi5nZXRBdHRyaWJ1dGUoXCJpZFwiKSk/cz1yLnJlcGxhY2UoYmEsXCJcXFxcJCZcIik6Yi5zZXRBdHRyaWJ1dGUoXCJpZFwiLHMpLHM9XCJbaWQ9J1wiK3MrXCInXSBcIixsPW8ubGVuZ3RoO3doaWxlKGwtLSlvW2xdPXMrcmEob1tsXSk7dz1hYS50ZXN0KGEpJiZwYShiLnBhcmVudE5vZGUpfHxiLHg9by5qb2luKFwiLFwiKX1pZih4KXRyeXtyZXR1cm4gSC5hcHBseShkLHcucXVlcnlTZWxlY3RvckFsbCh4KSksZH1jYXRjaCh5KXt9ZmluYWxseXtyfHxiLnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpfX19cmV0dXJuIGkoYS5yZXBsYWNlKFIsXCIkMVwiKSxiLGQsZSl9ZnVuY3Rpb24gaGEoKXt2YXIgYT1bXTtmdW5jdGlvbiBiKGMsZSl7cmV0dXJuIGEucHVzaChjK1wiIFwiKT5kLmNhY2hlTGVuZ3RoJiZkZWxldGUgYlthLnNoaWZ0KCldLGJbYytcIiBcIl09ZX1yZXR1cm4gYn1mdW5jdGlvbiBpYShhKXtyZXR1cm4gYVt1XT0hMCxhfWZ1bmN0aW9uIGphKGEpe3ZhciBiPW4uY3JlYXRlRWxlbWVudChcImRpdlwiKTt0cnl7cmV0dXJuISFhKGIpfWNhdGNoKGMpe3JldHVybiExfWZpbmFsbHl7Yi5wYXJlbnROb2RlJiZiLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYiksYj1udWxsfX1mdW5jdGlvbiBrYShhLGIpe3ZhciBjPWEuc3BsaXQoXCJ8XCIpLGU9YS5sZW5ndGg7d2hpbGUoZS0tKWQuYXR0ckhhbmRsZVtjW2VdXT1ifWZ1bmN0aW9uIGxhKGEsYil7dmFyIGM9YiYmYSxkPWMmJjE9PT1hLm5vZGVUeXBlJiYxPT09Yi5ub2RlVHlwZSYmKH5iLnNvdXJjZUluZGV4fHxDKS0ofmEuc291cmNlSW5kZXh8fEMpO2lmKGQpcmV0dXJuIGQ7aWYoYyl3aGlsZShjPWMubmV4dFNpYmxpbmcpaWYoYz09PWIpcmV0dXJuLTE7cmV0dXJuIGE/MTotMX1mdW5jdGlvbiBtYShhKXtyZXR1cm4gZnVuY3Rpb24oYil7dmFyIGM9Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PWMmJmIudHlwZT09PWF9fWZ1bmN0aW9uIG5hKGEpe3JldHVybiBmdW5jdGlvbihiKXt2YXIgYz1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuKFwiaW5wdXRcIj09PWN8fFwiYnV0dG9uXCI9PT1jKSYmYi50eXBlPT09YX19ZnVuY3Rpb24gb2EoYSl7cmV0dXJuIGlhKGZ1bmN0aW9uKGIpe3JldHVybiBiPStiLGlhKGZ1bmN0aW9uKGMsZCl7dmFyIGUsZj1hKFtdLGMubGVuZ3RoLGIpLGc9Zi5sZW5ndGg7d2hpbGUoZy0tKWNbZT1mW2ddXSYmKGNbZV09IShkW2VdPWNbZV0pKX0pfSl9ZnVuY3Rpb24gcGEoYSl7cmV0dXJuIGEmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmdldEVsZW1lbnRzQnlUYWdOYW1lJiZhfWM9Z2Euc3VwcG9ydD17fSxmPWdhLmlzWE1MPWZ1bmN0aW9uKGEpe3ZhciBiPWEmJihhLm93bmVyRG9jdW1lbnR8fGEpLmRvY3VtZW50RWxlbWVudDtyZXR1cm4gYj9cIkhUTUxcIiE9PWIubm9kZU5hbWU6ITF9LG09Z2Euc2V0RG9jdW1lbnQ9ZnVuY3Rpb24oYSl7dmFyIGIsZSxnPWE/YS5vd25lckRvY3VtZW50fHxhOnY7cmV0dXJuIGchPT1uJiY5PT09Zy5ub2RlVHlwZSYmZy5kb2N1bWVudEVsZW1lbnQ/KG49ZyxvPWcuZG9jdW1lbnRFbGVtZW50LGU9Zy5kZWZhdWx0VmlldyxlJiZlIT09ZS50b3AmJihlLmFkZEV2ZW50TGlzdGVuZXI/ZS5hZGRFdmVudExpc3RlbmVyKFwidW5sb2FkXCIsZWEsITEpOmUuYXR0YWNoRXZlbnQmJmUuYXR0YWNoRXZlbnQoXCJvbnVubG9hZFwiLGVhKSkscD0hZihnKSxjLmF0dHJpYnV0ZXM9amEoZnVuY3Rpb24oYSl7cmV0dXJuIGEuY2xhc3NOYW1lPVwiaVwiLCFhLmdldEF0dHJpYnV0ZShcImNsYXNzTmFtZVwiKX0pLGMuZ2V0RWxlbWVudHNCeVRhZ05hbWU9amEoZnVuY3Rpb24oYSl7cmV0dXJuIGEuYXBwZW5kQ2hpbGQoZy5jcmVhdGVDb21tZW50KFwiXCIpKSwhYS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIipcIikubGVuZ3RofSksYy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lPSQudGVzdChnLmdldEVsZW1lbnRzQnlDbGFzc05hbWUpLGMuZ2V0QnlJZD1qYShmdW5jdGlvbihhKXtyZXR1cm4gby5hcHBlbmRDaGlsZChhKS5pZD11LCFnLmdldEVsZW1lbnRzQnlOYW1lfHwhZy5nZXRFbGVtZW50c0J5TmFtZSh1KS5sZW5ndGh9KSxjLmdldEJ5SWQ/KGQuZmluZC5JRD1mdW5jdGlvbihhLGIpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBiLmdldEVsZW1lbnRCeUlkJiZwKXt2YXIgYz1iLmdldEVsZW1lbnRCeUlkKGEpO3JldHVybiBjJiZjLnBhcmVudE5vZGU/W2NdOltdfX0sZC5maWx0ZXIuSUQ9ZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKGNhLGRhKTtyZXR1cm4gZnVuY3Rpb24oYSl7cmV0dXJuIGEuZ2V0QXR0cmlidXRlKFwiaWRcIik9PT1ifX0pOihkZWxldGUgZC5maW5kLklELGQuZmlsdGVyLklEPWZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShjYSxkYSk7cmV0dXJuIGZ1bmN0aW9uKGEpe3ZhciBjPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmdldEF0dHJpYnV0ZU5vZGUmJmEuZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpO3JldHVybiBjJiZjLnZhbHVlPT09Yn19KSxkLmZpbmQuVEFHPWMuZ2V0RWxlbWVudHNCeVRhZ05hbWU/ZnVuY3Rpb24oYSxiKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgYi5nZXRFbGVtZW50c0J5VGFnTmFtZT9iLmdldEVsZW1lbnRzQnlUYWdOYW1lKGEpOmMucXNhP2IucXVlcnlTZWxlY3RvckFsbChhKTp2b2lkIDB9OmZ1bmN0aW9uKGEsYil7dmFyIGMsZD1bXSxlPTAsZj1iLmdldEVsZW1lbnRzQnlUYWdOYW1lKGEpO2lmKFwiKlwiPT09YSl7d2hpbGUoYz1mW2UrK10pMT09PWMubm9kZVR5cGUmJmQucHVzaChjKTtyZXR1cm4gZH1yZXR1cm4gZn0sZC5maW5kLkNMQVNTPWMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmZnVuY3Rpb24oYSxiKXtyZXR1cm4gcD9iLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYSk6dm9pZCAwfSxyPVtdLHE9W10sKGMucXNhPSQudGVzdChnLnF1ZXJ5U2VsZWN0b3JBbGwpKSYmKGphKGZ1bmN0aW9uKGEpe28uYXBwZW5kQ2hpbGQoYSkuaW5uZXJIVE1MPVwiPGEgaWQ9J1wiK3UrXCInPjwvYT48c2VsZWN0IGlkPSdcIit1K1wiLVxcZl0nIG1zYWxsb3djYXB0dXJlPScnPjxvcHRpb24gc2VsZWN0ZWQ9Jyc+PC9vcHRpb24+PC9zZWxlY3Q+XCIsYS5xdWVyeVNlbGVjdG9yQWxsKFwiW21zYWxsb3djYXB0dXJlXj0nJ11cIikubGVuZ3RoJiZxLnB1c2goXCJbKl4kXT1cIitMK1wiKig/OicnfFxcXCJcXFwiKVwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbc2VsZWN0ZWRdXCIpLmxlbmd0aHx8cS5wdXNoKFwiXFxcXFtcIitMK1wiKig/OnZhbHVlfFwiK0srXCIpXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIltpZH49XCIrdStcIi1dXCIpLmxlbmd0aHx8cS5wdXNoKFwifj1cIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiOmNoZWNrZWRcIikubGVuZ3RofHxxLnB1c2goXCI6Y2hlY2tlZFwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhI1wiK3UrXCIrKlwiKS5sZW5ndGh8fHEucHVzaChcIi4jLitbK35dXCIpfSksamEoZnVuY3Rpb24oYSl7dmFyIGI9Zy5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7Yi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJoaWRkZW5cIiksYS5hcHBlbmRDaGlsZChiKS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJEXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIltuYW1lPWRdXCIpLmxlbmd0aCYmcS5wdXNoKFwibmFtZVwiK0wrXCIqWypeJHwhfl0/PVwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6ZW5hYmxlZFwiKS5sZW5ndGh8fHEucHVzaChcIjplbmFibGVkXCIsXCI6ZGlzYWJsZWRcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiKiw6eFwiKSxxLnB1c2goXCIsLio6XCIpfSkpLChjLm1hdGNoZXNTZWxlY3Rvcj0kLnRlc3Qocz1vLm1hdGNoZXN8fG8ud2Via2l0TWF0Y2hlc1NlbGVjdG9yfHxvLm1vek1hdGNoZXNTZWxlY3Rvcnx8by5vTWF0Y2hlc1NlbGVjdG9yfHxvLm1zTWF0Y2hlc1NlbGVjdG9yKSkmJmphKGZ1bmN0aW9uKGEpe2MuZGlzY29ubmVjdGVkTWF0Y2g9cy5jYWxsKGEsXCJkaXZcIikscy5jYWxsKGEsXCJbcyE9JyddOnhcIiksci5wdXNoKFwiIT1cIixQKX0pLHE9cS5sZW5ndGgmJm5ldyBSZWdFeHAocS5qb2luKFwifFwiKSkscj1yLmxlbmd0aCYmbmV3IFJlZ0V4cChyLmpvaW4oXCJ8XCIpKSxiPSQudGVzdChvLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKSx0PWJ8fCQudGVzdChvLmNvbnRhaW5zKT9mdW5jdGlvbihhLGIpe3ZhciBjPTk9PT1hLm5vZGVUeXBlP2EuZG9jdW1lbnRFbGVtZW50OmEsZD1iJiZiLnBhcmVudE5vZGU7cmV0dXJuIGE9PT1kfHwhKCFkfHwxIT09ZC5ub2RlVHlwZXx8IShjLmNvbnRhaW5zP2MuY29udGFpbnMoZCk6YS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiYmMTYmYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihkKSkpfTpmdW5jdGlvbihhLGIpe2lmKGIpd2hpbGUoYj1iLnBhcmVudE5vZGUpaWYoYj09PWEpcmV0dXJuITA7cmV0dXJuITF9LEI9Yj9mdW5jdGlvbihhLGIpe2lmKGE9PT1iKXJldHVybiBsPSEwLDA7dmFyIGQ9IWEuY29tcGFyZURvY3VtZW50UG9zaXRpb24tIWIuY29tcGFyZURvY3VtZW50UG9zaXRpb247cmV0dXJuIGQ/ZDooZD0oYS5vd25lckRvY3VtZW50fHxhKT09PShiLm93bmVyRG9jdW1lbnR8fGIpP2EuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYik6MSwxJmR8fCFjLnNvcnREZXRhY2hlZCYmYi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihhKT09PWQ/YT09PWd8fGEub3duZXJEb2N1bWVudD09PXYmJnQodixhKT8tMTpiPT09Z3x8Yi5vd25lckRvY3VtZW50PT09diYmdCh2LGIpPzE6az9KKGssYSktSihrLGIpOjA6NCZkPy0xOjEpfTpmdW5jdGlvbihhLGIpe2lmKGE9PT1iKXJldHVybiBsPSEwLDA7dmFyIGMsZD0wLGU9YS5wYXJlbnROb2RlLGY9Yi5wYXJlbnROb2RlLGg9W2FdLGk9W2JdO2lmKCFlfHwhZilyZXR1cm4gYT09PWc/LTE6Yj09PWc/MTplPy0xOmY/MTprP0ooayxhKS1KKGssYik6MDtpZihlPT09ZilyZXR1cm4gbGEoYSxiKTtjPWE7d2hpbGUoYz1jLnBhcmVudE5vZGUpaC51bnNoaWZ0KGMpO2M9Yjt3aGlsZShjPWMucGFyZW50Tm9kZSlpLnVuc2hpZnQoYyk7d2hpbGUoaFtkXT09PWlbZF0pZCsrO3JldHVybiBkP2xhKGhbZF0saVtkXSk6aFtkXT09PXY/LTE6aVtkXT09PXY/MTowfSxnKTpufSxnYS5tYXRjaGVzPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGdhKGEsbnVsbCxudWxsLGIpfSxnYS5tYXRjaGVzU2VsZWN0b3I9ZnVuY3Rpb24oYSxiKXtpZigoYS5vd25lckRvY3VtZW50fHxhKSE9PW4mJm0oYSksYj1iLnJlcGxhY2UoVSxcIj0nJDEnXVwiKSwhKCFjLm1hdGNoZXNTZWxlY3Rvcnx8IXB8fHImJnIudGVzdChiKXx8cSYmcS50ZXN0KGIpKSl0cnl7dmFyIGQ9cy5jYWxsKGEsYik7aWYoZHx8Yy5kaXNjb25uZWN0ZWRNYXRjaHx8YS5kb2N1bWVudCYmMTEhPT1hLmRvY3VtZW50Lm5vZGVUeXBlKXJldHVybiBkfWNhdGNoKGUpe31yZXR1cm4gZ2EoYixuLG51bGwsW2FdKS5sZW5ndGg+MH0sZ2EuY29udGFpbnM9ZnVuY3Rpb24oYSxiKXtyZXR1cm4oYS5vd25lckRvY3VtZW50fHxhKSE9PW4mJm0oYSksdChhLGIpfSxnYS5hdHRyPWZ1bmN0aW9uKGEsYil7KGEub3duZXJEb2N1bWVudHx8YSkhPT1uJiZtKGEpO3ZhciBlPWQuYXR0ckhhbmRsZVtiLnRvTG93ZXJDYXNlKCldLGY9ZSYmRC5jYWxsKGQuYXR0ckhhbmRsZSxiLnRvTG93ZXJDYXNlKCkpP2UoYSxiLCFwKTp2b2lkIDA7cmV0dXJuIHZvaWQgMCE9PWY/ZjpjLmF0dHJpYnV0ZXN8fCFwP2EuZ2V0QXR0cmlidXRlKGIpOihmPWEuZ2V0QXR0cmlidXRlTm9kZShiKSkmJmYuc3BlY2lmaWVkP2YudmFsdWU6bnVsbH0sZ2EuZXJyb3I9ZnVuY3Rpb24oYSl7dGhyb3cgbmV3IEVycm9yKFwiU3ludGF4IGVycm9yLCB1bnJlY29nbml6ZWQgZXhwcmVzc2lvbjogXCIrYSl9LGdhLnVuaXF1ZVNvcnQ9ZnVuY3Rpb24oYSl7dmFyIGIsZD1bXSxlPTAsZj0wO2lmKGw9IWMuZGV0ZWN0RHVwbGljYXRlcyxrPSFjLnNvcnRTdGFibGUmJmEuc2xpY2UoMCksYS5zb3J0KEIpLGwpe3doaWxlKGI9YVtmKytdKWI9PT1hW2ZdJiYoZT1kLnB1c2goZikpO3doaWxlKGUtLSlhLnNwbGljZShkW2VdLDEpfXJldHVybiBrPW51bGwsYX0sZT1nYS5nZXRUZXh0PWZ1bmN0aW9uKGEpe3ZhciBiLGM9XCJcIixkPTAsZj1hLm5vZGVUeXBlO2lmKGYpe2lmKDE9PT1mfHw5PT09Znx8MTE9PT1mKXtpZihcInN0cmluZ1wiPT10eXBlb2YgYS50ZXh0Q29udGVudClyZXR1cm4gYS50ZXh0Q29udGVudDtmb3IoYT1hLmZpcnN0Q2hpbGQ7YTthPWEubmV4dFNpYmxpbmcpYys9ZShhKX1lbHNlIGlmKDM9PT1mfHw0PT09ZilyZXR1cm4gYS5ub2RlVmFsdWV9ZWxzZSB3aGlsZShiPWFbZCsrXSljKz1lKGIpO3JldHVybiBjfSxkPWdhLnNlbGVjdG9ycz17Y2FjaGVMZW5ndGg6NTAsY3JlYXRlUHNldWRvOmlhLG1hdGNoOlgsYXR0ckhhbmRsZTp7fSxmaW5kOnt9LHJlbGF0aXZlOntcIj5cIjp7ZGlyOlwicGFyZW50Tm9kZVwiLGZpcnN0OiEwfSxcIiBcIjp7ZGlyOlwicGFyZW50Tm9kZVwifSxcIitcIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCIsZmlyc3Q6ITB9LFwiflwiOntkaXI6XCJwcmV2aW91c1NpYmxpbmdcIn19LHByZUZpbHRlcjp7QVRUUjpmdW5jdGlvbihhKXtyZXR1cm4gYVsxXT1hWzFdLnJlcGxhY2UoY2EsZGEpLGFbM109KGFbM118fGFbNF18fGFbNV18fFwiXCIpLnJlcGxhY2UoY2EsZGEpLFwifj1cIj09PWFbMl0mJihhWzNdPVwiIFwiK2FbM10rXCIgXCIpLGEuc2xpY2UoMCw0KX0sQ0hJTEQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGFbMV09YVsxXS50b0xvd2VyQ2FzZSgpLFwibnRoXCI9PT1hWzFdLnNsaWNlKDAsMyk/KGFbM118fGdhLmVycm9yKGFbMF0pLGFbNF09KyhhWzRdP2FbNV0rKGFbNl18fDEpOjIqKFwiZXZlblwiPT09YVszXXx8XCJvZGRcIj09PWFbM10pKSxhWzVdPSsoYVs3XSthWzhdfHxcIm9kZFwiPT09YVszXSkpOmFbM10mJmdhLmVycm9yKGFbMF0pLGF9LFBTRVVETzpmdW5jdGlvbihhKXt2YXIgYixjPSFhWzZdJiZhWzJdO3JldHVybiBYLkNISUxELnRlc3QoYVswXSk/bnVsbDooYVszXT9hWzJdPWFbNF18fGFbNV18fFwiXCI6YyYmVi50ZXN0KGMpJiYoYj1nKGMsITApKSYmKGI9Yy5pbmRleE9mKFwiKVwiLGMubGVuZ3RoLWIpLWMubGVuZ3RoKSYmKGFbMF09YVswXS5zbGljZSgwLGIpLGFbMl09Yy5zbGljZSgwLGIpKSxhLnNsaWNlKDAsMykpfX0sZmlsdGVyOntUQUc6ZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKGNhLGRhKS50b0xvd2VyQ2FzZSgpO3JldHVyblwiKlwiPT09YT9mdW5jdGlvbigpe3JldHVybiEwfTpmdW5jdGlvbihhKXtyZXR1cm4gYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09Yn19LENMQVNTOmZ1bmN0aW9uKGEpe3ZhciBiPXlbYStcIiBcIl07cmV0dXJuIGJ8fChiPW5ldyBSZWdFeHAoXCIoXnxcIitMK1wiKVwiK2ErXCIoXCIrTCtcInwkKVwiKSkmJnkoYSxmdW5jdGlvbihhKXtyZXR1cm4gYi50ZXN0KFwic3RyaW5nXCI9PXR5cGVvZiBhLmNsYXNzTmFtZSYmYS5jbGFzc05hbWV8fFwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmdldEF0dHJpYnV0ZSYmYS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIil9KX0sQVRUUjpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGZ1bmN0aW9uKGQpe3ZhciBlPWdhLmF0dHIoZCxhKTtyZXR1cm4gbnVsbD09ZT9cIiE9XCI9PT1iOmI/KGUrPVwiXCIsXCI9XCI9PT1iP2U9PT1jOlwiIT1cIj09PWI/ZSE9PWM6XCJePVwiPT09Yj9jJiYwPT09ZS5pbmRleE9mKGMpOlwiKj1cIj09PWI/YyYmZS5pbmRleE9mKGMpPi0xOlwiJD1cIj09PWI/YyYmZS5zbGljZSgtYy5sZW5ndGgpPT09YzpcIn49XCI9PT1iPyhcIiBcIitlLnJlcGxhY2UoUSxcIiBcIikrXCIgXCIpLmluZGV4T2YoYyk+LTE6XCJ8PVwiPT09Yj9lPT09Y3x8ZS5zbGljZSgwLGMubGVuZ3RoKzEpPT09YytcIi1cIjohMSk6ITB9fSxDSElMRDpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmPVwibnRoXCIhPT1hLnNsaWNlKDAsMyksZz1cImxhc3RcIiE9PWEuc2xpY2UoLTQpLGg9XCJvZi10eXBlXCI9PT1iO3JldHVybiAxPT09ZCYmMD09PWU/ZnVuY3Rpb24oYSl7cmV0dXJuISFhLnBhcmVudE5vZGV9OmZ1bmN0aW9uKGIsYyxpKXt2YXIgaixrLGwsbSxuLG8scD1mIT09Zz9cIm5leHRTaWJsaW5nXCI6XCJwcmV2aW91c1NpYmxpbmdcIixxPWIucGFyZW50Tm9kZSxyPWgmJmIubm9kZU5hbWUudG9Mb3dlckNhc2UoKSxzPSFpJiYhaDtpZihxKXtpZihmKXt3aGlsZShwKXtsPWI7d2hpbGUobD1sW3BdKWlmKGg/bC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09cjoxPT09bC5ub2RlVHlwZSlyZXR1cm4hMTtvPXA9XCJvbmx5XCI9PT1hJiYhbyYmXCJuZXh0U2libGluZ1wifXJldHVybiEwfWlmKG89W2c/cS5maXJzdENoaWxkOnEubGFzdENoaWxkXSxnJiZzKXtrPXFbdV18fChxW3VdPXt9KSxqPWtbYV18fFtdLG49alswXT09PXcmJmpbMV0sbT1qWzBdPT09dyYmalsyXSxsPW4mJnEuY2hpbGROb2Rlc1tuXTt3aGlsZShsPSsrbiYmbCYmbFtwXXx8KG09bj0wKXx8by5wb3AoKSlpZigxPT09bC5ub2RlVHlwZSYmKyttJiZsPT09Yil7a1thXT1bdyxuLG1dO2JyZWFrfX1lbHNlIGlmKHMmJihqPShiW3VdfHwoYlt1XT17fSkpW2FdKSYmalswXT09PXcpbT1qWzFdO2Vsc2Ugd2hpbGUobD0rK24mJmwmJmxbcF18fChtPW49MCl8fG8ucG9wKCkpaWYoKGg/bC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09cjoxPT09bC5ub2RlVHlwZSkmJisrbSYmKHMmJigobFt1XXx8KGxbdV09e30pKVthXT1bdyxtXSksbD09PWIpKWJyZWFrO3JldHVybiBtLT1lLG09PT1kfHxtJWQ9PT0wJiZtL2Q+PTB9fX0sUFNFVURPOmZ1bmN0aW9uKGEsYil7dmFyIGMsZT1kLnBzZXVkb3NbYV18fGQuc2V0RmlsdGVyc1thLnRvTG93ZXJDYXNlKCldfHxnYS5lcnJvcihcInVuc3VwcG9ydGVkIHBzZXVkbzogXCIrYSk7cmV0dXJuIGVbdV0/ZShiKTplLmxlbmd0aD4xPyhjPVthLGEsXCJcIixiXSxkLnNldEZpbHRlcnMuaGFzT3duUHJvcGVydHkoYS50b0xvd2VyQ2FzZSgpKT9pYShmdW5jdGlvbihhLGMpe3ZhciBkLGY9ZShhLGIpLGc9Zi5sZW5ndGg7d2hpbGUoZy0tKWQ9SihhLGZbZ10pLGFbZF09IShjW2RdPWZbZ10pfSk6ZnVuY3Rpb24oYSl7cmV0dXJuIGUoYSwwLGMpfSk6ZX19LHBzZXVkb3M6e25vdDppYShmdW5jdGlvbihhKXt2YXIgYj1bXSxjPVtdLGQ9aChhLnJlcGxhY2UoUixcIiQxXCIpKTtyZXR1cm4gZFt1XT9pYShmdW5jdGlvbihhLGIsYyxlKXt2YXIgZixnPWQoYSxudWxsLGUsW10pLGg9YS5sZW5ndGg7d2hpbGUoaC0tKShmPWdbaF0pJiYoYVtoXT0hKGJbaF09ZikpfSk6ZnVuY3Rpb24oYSxlLGYpe3JldHVybiBiWzBdPWEsZChiLG51bGwsZixjKSxiWzBdPW51bGwsIWMucG9wKCl9fSksaGFzOmlhKGZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihiKXtyZXR1cm4gZ2EoYSxiKS5sZW5ndGg+MH19KSxjb250YWluczppYShmdW5jdGlvbihhKXtyZXR1cm4gYT1hLnJlcGxhY2UoY2EsZGEpLGZ1bmN0aW9uKGIpe3JldHVybihiLnRleHRDb250ZW50fHxiLmlubmVyVGV4dHx8ZShiKSkuaW5kZXhPZihhKT4tMX19KSxsYW5nOmlhKGZ1bmN0aW9uKGEpe3JldHVybiBXLnRlc3QoYXx8XCJcIil8fGdhLmVycm9yKFwidW5zdXBwb3J0ZWQgbGFuZzogXCIrYSksYT1hLnJlcGxhY2UoY2EsZGEpLnRvTG93ZXJDYXNlKCksZnVuY3Rpb24oYil7dmFyIGM7ZG8gaWYoYz1wP2IubGFuZzpiLmdldEF0dHJpYnV0ZShcInhtbDpsYW5nXCIpfHxiLmdldEF0dHJpYnV0ZShcImxhbmdcIikpcmV0dXJuIGM9Yy50b0xvd2VyQ2FzZSgpLGM9PT1hfHwwPT09Yy5pbmRleE9mKGErXCItXCIpO3doaWxlKChiPWIucGFyZW50Tm9kZSkmJjE9PT1iLm5vZGVUeXBlKTtyZXR1cm4hMX19KSx0YXJnZXQ6ZnVuY3Rpb24oYil7dmFyIGM9YS5sb2NhdGlvbiYmYS5sb2NhdGlvbi5oYXNoO3JldHVybiBjJiZjLnNsaWNlKDEpPT09Yi5pZH0scm9vdDpmdW5jdGlvbihhKXtyZXR1cm4gYT09PW99LGZvY3VzOmZ1bmN0aW9uKGEpe3JldHVybiBhPT09bi5hY3RpdmVFbGVtZW50JiYoIW4uaGFzRm9jdXN8fG4uaGFzRm9jdXMoKSkmJiEhKGEudHlwZXx8YS5ocmVmfHx+YS50YWJJbmRleCl9LGVuYWJsZWQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGEuZGlzYWJsZWQ9PT0hMX0sZGlzYWJsZWQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGEuZGlzYWJsZWQ9PT0hMH0sY2hlY2tlZDpmdW5jdGlvbihhKXt2YXIgYj1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09YiYmISFhLmNoZWNrZWR8fFwib3B0aW9uXCI9PT1iJiYhIWEuc2VsZWN0ZWR9LHNlbGVjdGVkOmZ1bmN0aW9uKGEpe3JldHVybiBhLnBhcmVudE5vZGUmJmEucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4LGEuc2VsZWN0ZWQ9PT0hMH0sZW1wdHk6ZnVuY3Rpb24oYSl7Zm9yKGE9YS5maXJzdENoaWxkO2E7YT1hLm5leHRTaWJsaW5nKWlmKGEubm9kZVR5cGU8NilyZXR1cm4hMTtyZXR1cm4hMH0scGFyZW50OmZ1bmN0aW9uKGEpe3JldHVybiFkLnBzZXVkb3MuZW1wdHkoYSl9LGhlYWRlcjpmdW5jdGlvbihhKXtyZXR1cm4gWi50ZXN0KGEubm9kZU5hbWUpfSxpbnB1dDpmdW5jdGlvbihhKXtyZXR1cm4gWS50ZXN0KGEubm9kZU5hbWUpfSxidXR0b246ZnVuY3Rpb24oYSl7dmFyIGI9YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PWImJlwiYnV0dG9uXCI9PT1hLnR5cGV8fFwiYnV0dG9uXCI9PT1ifSx0ZXh0OmZ1bmN0aW9uKGEpe3ZhciBiO3JldHVyblwiaW5wdXRcIj09PWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKSYmXCJ0ZXh0XCI9PT1hLnR5cGUmJihudWxsPT0oYj1hLmdldEF0dHJpYnV0ZShcInR5cGVcIikpfHxcInRleHRcIj09PWIudG9Mb3dlckNhc2UoKSl9LGZpcnN0Om9hKGZ1bmN0aW9uKCl7cmV0dXJuWzBdfSksbGFzdDpvYShmdW5jdGlvbihhLGIpe3JldHVybltiLTFdfSksZXE6b2EoZnVuY3Rpb24oYSxiLGMpe3JldHVyblswPmM/YytiOmNdfSksZXZlbjpvYShmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0wO2I+YztjKz0yKWEucHVzaChjKTtyZXR1cm4gYX0pLG9kZDpvYShmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0xO2I+YztjKz0yKWEucHVzaChjKTtyZXR1cm4gYX0pLGx0Om9hKGZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQ9MD5jP2MrYjpjOy0tZD49MDspYS5wdXNoKGQpO3JldHVybiBhfSksZ3Q6b2EoZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZD0wPmM/YytiOmM7KytkPGI7KWEucHVzaChkKTtyZXR1cm4gYX0pfX0sZC5wc2V1ZG9zLm50aD1kLnBzZXVkb3MuZXE7Zm9yKGIgaW57cmFkaW86ITAsY2hlY2tib3g6ITAsZmlsZTohMCxwYXNzd29yZDohMCxpbWFnZTohMH0pZC5wc2V1ZG9zW2JdPW1hKGIpO2ZvcihiIGlue3N1Ym1pdDohMCxyZXNldDohMH0pZC5wc2V1ZG9zW2JdPW5hKGIpO2Z1bmN0aW9uIHFhKCl7fXFhLnByb3RvdHlwZT1kLmZpbHRlcnM9ZC5wc2V1ZG9zLGQuc2V0RmlsdGVycz1uZXcgcWEsZz1nYS50b2tlbml6ZT1mdW5jdGlvbihhLGIpe3ZhciBjLGUsZixnLGgsaSxqLGs9elthK1wiIFwiXTtpZihrKXJldHVybiBiPzA6ay5zbGljZSgwKTtoPWEsaT1bXSxqPWQucHJlRmlsdGVyO3doaWxlKGgpeyghY3x8KGU9Uy5leGVjKGgpKSkmJihlJiYoaD1oLnNsaWNlKGVbMF0ubGVuZ3RoKXx8aCksaS5wdXNoKGY9W10pKSxjPSExLChlPVQuZXhlYyhoKSkmJihjPWUuc2hpZnQoKSxmLnB1c2goe3ZhbHVlOmMsdHlwZTplWzBdLnJlcGxhY2UoUixcIiBcIil9KSxoPWguc2xpY2UoYy5sZW5ndGgpKTtmb3IoZyBpbiBkLmZpbHRlcikhKGU9WFtnXS5leGVjKGgpKXx8altnXSYmIShlPWpbZ10oZSkpfHwoYz1lLnNoaWZ0KCksZi5wdXNoKHt2YWx1ZTpjLHR5cGU6ZyxtYXRjaGVzOmV9KSxoPWguc2xpY2UoYy5sZW5ndGgpKTtpZighYylicmVha31yZXR1cm4gYj9oLmxlbmd0aDpoP2dhLmVycm9yKGEpOnooYSxpKS5zbGljZSgwKX07ZnVuY3Rpb24gcmEoYSl7Zm9yKHZhciBiPTAsYz1hLmxlbmd0aCxkPVwiXCI7Yz5iO2IrKylkKz1hW2JdLnZhbHVlO3JldHVybiBkfWZ1bmN0aW9uIHNhKGEsYixjKXt2YXIgZD1iLmRpcixlPWMmJlwicGFyZW50Tm9kZVwiPT09ZCxmPXgrKztyZXR1cm4gYi5maXJzdD9mdW5jdGlvbihiLGMsZil7d2hpbGUoYj1iW2RdKWlmKDE9PT1iLm5vZGVUeXBlfHxlKXJldHVybiBhKGIsYyxmKX06ZnVuY3Rpb24oYixjLGcpe3ZhciBoLGksaj1bdyxmXTtpZihnKXt3aGlsZShiPWJbZF0paWYoKDE9PT1iLm5vZGVUeXBlfHxlKSYmYShiLGMsZykpcmV0dXJuITB9ZWxzZSB3aGlsZShiPWJbZF0paWYoMT09PWIubm9kZVR5cGV8fGUpe2lmKGk9Ylt1XXx8KGJbdV09e30pLChoPWlbZF0pJiZoWzBdPT09dyYmaFsxXT09PWYpcmV0dXJuIGpbMl09aFsyXTtpZihpW2RdPWosalsyXT1hKGIsYyxnKSlyZXR1cm4hMH19fWZ1bmN0aW9uIHRhKGEpe3JldHVybiBhLmxlbmd0aD4xP2Z1bmN0aW9uKGIsYyxkKXt2YXIgZT1hLmxlbmd0aDt3aGlsZShlLS0paWYoIWFbZV0oYixjLGQpKXJldHVybiExO3JldHVybiEwfTphWzBdfWZ1bmN0aW9uIHVhKGEsYixjKXtmb3IodmFyIGQ9MCxlPWIubGVuZ3RoO2U+ZDtkKyspZ2EoYSxiW2RdLGMpO3JldHVybiBjfWZ1bmN0aW9uIHZhKGEsYixjLGQsZSl7Zm9yKHZhciBmLGc9W10saD0wLGk9YS5sZW5ndGgsaj1udWxsIT1iO2k+aDtoKyspKGY9YVtoXSkmJighY3x8YyhmLGQsZSkpJiYoZy5wdXNoKGYpLGomJmIucHVzaChoKSk7cmV0dXJuIGd9ZnVuY3Rpb24gd2EoYSxiLGMsZCxlLGYpe3JldHVybiBkJiYhZFt1XSYmKGQ9d2EoZCkpLGUmJiFlW3VdJiYoZT13YShlLGYpKSxpYShmdW5jdGlvbihmLGcsaCxpKXt2YXIgaixrLGwsbT1bXSxuPVtdLG89Zy5sZW5ndGgscD1mfHx1YShifHxcIipcIixoLm5vZGVUeXBlP1toXTpoLFtdKSxxPSFhfHwhZiYmYj9wOnZhKHAsbSxhLGgsaSkscj1jP2V8fChmP2E6b3x8ZCk/W106ZzpxO2lmKGMmJmMocSxyLGgsaSksZCl7aj12YShyLG4pLGQoaixbXSxoLGkpLGs9ai5sZW5ndGg7d2hpbGUoay0tKShsPWpba10pJiYocltuW2tdXT0hKHFbbltrXV09bCkpfWlmKGYpe2lmKGV8fGEpe2lmKGUpe2o9W10saz1yLmxlbmd0aDt3aGlsZShrLS0pKGw9cltrXSkmJmoucHVzaChxW2tdPWwpO2UobnVsbCxyPVtdLGosaSl9az1yLmxlbmd0aDt3aGlsZShrLS0pKGw9cltrXSkmJihqPWU/SihmLGwpOm1ba10pPi0xJiYoZltqXT0hKGdbal09bCkpfX1lbHNlIHI9dmEocj09PWc/ci5zcGxpY2UobyxyLmxlbmd0aCk6ciksZT9lKG51bGwsZyxyLGkpOkguYXBwbHkoZyxyKX0pfWZ1bmN0aW9uIHhhKGEpe2Zvcih2YXIgYixjLGUsZj1hLmxlbmd0aCxnPWQucmVsYXRpdmVbYVswXS50eXBlXSxoPWd8fGQucmVsYXRpdmVbXCIgXCJdLGk9Zz8xOjAsaz1zYShmdW5jdGlvbihhKXtyZXR1cm4gYT09PWJ9LGgsITApLGw9c2EoZnVuY3Rpb24oYSl7cmV0dXJuIEooYixhKT4tMX0saCwhMCksbT1bZnVuY3Rpb24oYSxjLGQpe3ZhciBlPSFnJiYoZHx8YyE9PWopfHwoKGI9Yykubm9kZVR5cGU/ayhhLGMsZCk6bChhLGMsZCkpO3JldHVybiBiPW51bGwsZX1dO2Y+aTtpKyspaWYoYz1kLnJlbGF0aXZlW2FbaV0udHlwZV0pbT1bc2EodGEobSksYyldO2Vsc2V7aWYoYz1kLmZpbHRlclthW2ldLnR5cGVdLmFwcGx5KG51bGwsYVtpXS5tYXRjaGVzKSxjW3VdKXtmb3IoZT0rK2k7Zj5lO2UrKylpZihkLnJlbGF0aXZlW2FbZV0udHlwZV0pYnJlYWs7cmV0dXJuIHdhKGk+MSYmdGEobSksaT4xJiZyYShhLnNsaWNlKDAsaS0xKS5jb25jYXQoe3ZhbHVlOlwiIFwiPT09YVtpLTJdLnR5cGU/XCIqXCI6XCJcIn0pKS5yZXBsYWNlKFIsXCIkMVwiKSxjLGU+aSYmeGEoYS5zbGljZShpLGUpKSxmPmUmJnhhKGE9YS5zbGljZShlKSksZj5lJiZyYShhKSl9bS5wdXNoKGMpfXJldHVybiB0YShtKX1mdW5jdGlvbiB5YShhLGIpe3ZhciBjPWIubGVuZ3RoPjAsZT1hLmxlbmd0aD4wLGY9ZnVuY3Rpb24oZixnLGgsaSxrKXt2YXIgbCxtLG8scD0wLHE9XCIwXCIscj1mJiZbXSxzPVtdLHQ9aix1PWZ8fGUmJmQuZmluZC5UQUcoXCIqXCIsayksdj13Kz1udWxsPT10PzE6TWF0aC5yYW5kb20oKXx8LjEseD11Lmxlbmd0aDtmb3IoayYmKGo9ZyE9PW4mJmcpO3EhPT14JiZudWxsIT0obD11W3FdKTtxKyspe2lmKGUmJmwpe209MDt3aGlsZShvPWFbbSsrXSlpZihvKGwsZyxoKSl7aS5wdXNoKGwpO2JyZWFrfWsmJih3PXYpfWMmJigobD0hbyYmbCkmJnAtLSxmJiZyLnB1c2gobCkpfWlmKHArPXEsYyYmcSE9PXApe209MDt3aGlsZShvPWJbbSsrXSlvKHIscyxnLGgpO2lmKGYpe2lmKHA+MCl3aGlsZShxLS0pcltxXXx8c1txXXx8KHNbcV09Ri5jYWxsKGkpKTtzPXZhKHMpfUguYXBwbHkoaSxzKSxrJiYhZiYmcy5sZW5ndGg+MCYmcCtiLmxlbmd0aD4xJiZnYS51bmlxdWVTb3J0KGkpfXJldHVybiBrJiYodz12LGo9dCkscn07cmV0dXJuIGM/aWEoZik6Zn1yZXR1cm4gaD1nYS5jb21waWxlPWZ1bmN0aW9uKGEsYil7dmFyIGMsZD1bXSxlPVtdLGY9QVthK1wiIFwiXTtpZighZil7Ynx8KGI9ZyhhKSksYz1iLmxlbmd0aDt3aGlsZShjLS0pZj14YShiW2NdKSxmW3VdP2QucHVzaChmKTplLnB1c2goZik7Zj1BKGEseWEoZSxkKSksZi5zZWxlY3Rvcj1hfXJldHVybiBmfSxpPWdhLnNlbGVjdD1mdW5jdGlvbihhLGIsZSxmKXt2YXIgaSxqLGssbCxtLG49XCJmdW5jdGlvblwiPT10eXBlb2YgYSYmYSxvPSFmJiZnKGE9bi5zZWxlY3Rvcnx8YSk7aWYoZT1lfHxbXSwxPT09by5sZW5ndGgpe2lmKGo9b1swXT1vWzBdLnNsaWNlKDApLGoubGVuZ3RoPjImJlwiSURcIj09PShrPWpbMF0pLnR5cGUmJmMuZ2V0QnlJZCYmOT09PWIubm9kZVR5cGUmJnAmJmQucmVsYXRpdmVbalsxXS50eXBlXSl7aWYoYj0oZC5maW5kLklEKGsubWF0Y2hlc1swXS5yZXBsYWNlKGNhLGRhKSxiKXx8W10pWzBdLCFiKXJldHVybiBlO24mJihiPWIucGFyZW50Tm9kZSksYT1hLnNsaWNlKGouc2hpZnQoKS52YWx1ZS5sZW5ndGgpfWk9WC5uZWVkc0NvbnRleHQudGVzdChhKT8wOmoubGVuZ3RoO3doaWxlKGktLSl7aWYoaz1qW2ldLGQucmVsYXRpdmVbbD1rLnR5cGVdKWJyZWFrO2lmKChtPWQuZmluZFtsXSkmJihmPW0oay5tYXRjaGVzWzBdLnJlcGxhY2UoY2EsZGEpLGFhLnRlc3QoalswXS50eXBlKSYmcGEoYi5wYXJlbnROb2RlKXx8YikpKXtpZihqLnNwbGljZShpLDEpLGE9Zi5sZW5ndGgmJnJhKGopLCFhKXJldHVybiBILmFwcGx5KGUsZiksZTticmVha319fXJldHVybihufHxoKGEsbykpKGYsYiwhcCxlLGFhLnRlc3QoYSkmJnBhKGIucGFyZW50Tm9kZSl8fGIpLGV9LGMuc29ydFN0YWJsZT11LnNwbGl0KFwiXCIpLnNvcnQoQikuam9pbihcIlwiKT09PXUsYy5kZXRlY3REdXBsaWNhdGVzPSEhbCxtKCksYy5zb3J0RGV0YWNoZWQ9amEoZnVuY3Rpb24oYSl7cmV0dXJuIDEmYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihuLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpfSksamEoZnVuY3Rpb24oYSl7cmV0dXJuIGEuaW5uZXJIVE1MPVwiPGEgaHJlZj0nIyc+PC9hPlwiLFwiI1wiPT09YS5maXJzdENoaWxkLmdldEF0dHJpYnV0ZShcImhyZWZcIil9KXx8a2EoXCJ0eXBlfGhyZWZ8aGVpZ2h0fHdpZHRoXCIsZnVuY3Rpb24oYSxiLGMpe3JldHVybiBjP3ZvaWQgMDphLmdldEF0dHJpYnV0ZShiLFwidHlwZVwiPT09Yi50b0xvd2VyQ2FzZSgpPzE6Mil9KSxjLmF0dHJpYnV0ZXMmJmphKGZ1bmN0aW9uKGEpe3JldHVybiBhLmlubmVySFRNTD1cIjxpbnB1dC8+XCIsYS5maXJzdENoaWxkLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsXCJcIiksXCJcIj09PWEuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKX0pfHxrYShcInZhbHVlXCIsZnVuY3Rpb24oYSxiLGMpe3JldHVybiBjfHxcImlucHV0XCIhPT1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk/dm9pZCAwOmEuZGVmYXVsdFZhbHVlfSksamEoZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWEuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIil9KXx8a2EoSyxmdW5jdGlvbihhLGIsYyl7dmFyIGQ7cmV0dXJuIGM/dm9pZCAwOmFbYl09PT0hMD9iLnRvTG93ZXJDYXNlKCk6KGQ9YS5nZXRBdHRyaWJ1dGVOb2RlKGIpKSYmZC5zcGVjaWZpZWQ/ZC52YWx1ZTpudWxsfSksZ2F9KGEpO20uZmluZD1zLG0uZXhwcj1zLnNlbGVjdG9ycyxtLmV4cHJbXCI6XCJdPW0uZXhwci5wc2V1ZG9zLG0udW5pcXVlPXMudW5pcXVlU29ydCxtLnRleHQ9cy5nZXRUZXh0LG0uaXNYTUxEb2M9cy5pc1hNTCxtLmNvbnRhaW5zPXMuY29udGFpbnM7dmFyIHQ9bS5leHByLm1hdGNoLm5lZWRzQ29udGV4dCx1PS9ePChcXHcrKVxccypcXC8/Pig/OjxcXC9cXDE+fCkkLyx2PS9eLlteOiNcXFtcXC4sXSokLztmdW5jdGlvbiB3KGEsYixjKXtpZihtLmlzRnVuY3Rpb24oYikpcmV0dXJuIG0uZ3JlcChhLGZ1bmN0aW9uKGEsZCl7cmV0dXJuISFiLmNhbGwoYSxkLGEpIT09Y30pO2lmKGIubm9kZVR5cGUpcmV0dXJuIG0uZ3JlcChhLGZ1bmN0aW9uKGEpe3JldHVybiBhPT09YiE9PWN9KTtpZihcInN0cmluZ1wiPT10eXBlb2YgYil7aWYodi50ZXN0KGIpKXJldHVybiBtLmZpbHRlcihiLGEsYyk7Yj1tLmZpbHRlcihiLGEpfXJldHVybiBtLmdyZXAoYSxmdW5jdGlvbihhKXtyZXR1cm4gbS5pbkFycmF5KGEsYik+PTAhPT1jfSl9bS5maWx0ZXI9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWJbMF07cmV0dXJuIGMmJihhPVwiOm5vdChcIithK1wiKVwiKSwxPT09Yi5sZW5ndGgmJjE9PT1kLm5vZGVUeXBlP20uZmluZC5tYXRjaGVzU2VsZWN0b3IoZCxhKT9bZF06W106bS5maW5kLm1hdGNoZXMoYSxtLmdyZXAoYixmdW5jdGlvbihhKXtyZXR1cm4gMT09PWEubm9kZVR5cGV9KSl9LG0uZm4uZXh0ZW5kKHtmaW5kOmZ1bmN0aW9uKGEpe3ZhciBiLGM9W10sZD10aGlzLGU9ZC5sZW5ndGg7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGEpcmV0dXJuIHRoaXMucHVzaFN0YWNrKG0oYSkuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKGI9MDtlPmI7YisrKWlmKG0uY29udGFpbnMoZFtiXSx0aGlzKSlyZXR1cm4hMH0pKTtmb3IoYj0wO2U+YjtiKyspbS5maW5kKGEsZFtiXSxjKTtyZXR1cm4gYz10aGlzLnB1c2hTdGFjayhlPjE/bS51bmlxdWUoYyk6YyksYy5zZWxlY3Rvcj10aGlzLnNlbGVjdG9yP3RoaXMuc2VsZWN0b3IrXCIgXCIrYTphLGN9LGZpbHRlcjpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2sodyh0aGlzLGF8fFtdLCExKSl9LG5vdDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2sodyh0aGlzLGF8fFtdLCEwKSl9LGlzOmZ1bmN0aW9uKGEpe3JldHVybiEhdyh0aGlzLFwic3RyaW5nXCI9PXR5cGVvZiBhJiZ0LnRlc3QoYSk/bShhKTphfHxbXSwhMSkubGVuZ3RofX0pO3ZhciB4LHk9YS5kb2N1bWVudCx6PS9eKD86XFxzKig8W1xcd1xcV10rPilbXj5dKnwjKFtcXHctXSopKSQvLEE9bS5mbi5pbml0PWZ1bmN0aW9uKGEsYil7dmFyIGMsZDtpZighYSlyZXR1cm4gdGhpcztpZihcInN0cmluZ1wiPT10eXBlb2YgYSl7aWYoYz1cIjxcIj09PWEuY2hhckF0KDApJiZcIj5cIj09PWEuY2hhckF0KGEubGVuZ3RoLTEpJiZhLmxlbmd0aD49Mz9bbnVsbCxhLG51bGxdOnouZXhlYyhhKSwhY3x8IWNbMV0mJmIpcmV0dXJuIWJ8fGIuanF1ZXJ5PyhifHx4KS5maW5kKGEpOnRoaXMuY29uc3RydWN0b3IoYikuZmluZChhKTtpZihjWzFdKXtpZihiPWIgaW5zdGFuY2VvZiBtP2JbMF06YixtLm1lcmdlKHRoaXMsbS5wYXJzZUhUTUwoY1sxXSxiJiZiLm5vZGVUeXBlP2Iub3duZXJEb2N1bWVudHx8Yjp5LCEwKSksdS50ZXN0KGNbMV0pJiZtLmlzUGxhaW5PYmplY3QoYikpZm9yKGMgaW4gYiltLmlzRnVuY3Rpb24odGhpc1tjXSk/dGhpc1tjXShiW2NdKTp0aGlzLmF0dHIoYyxiW2NdKTtyZXR1cm4gdGhpc31pZihkPXkuZ2V0RWxlbWVudEJ5SWQoY1syXSksZCYmZC5wYXJlbnROb2RlKXtpZihkLmlkIT09Y1syXSlyZXR1cm4geC5maW5kKGEpO3RoaXMubGVuZ3RoPTEsdGhpc1swXT1kfXJldHVybiB0aGlzLmNvbnRleHQ9eSx0aGlzLnNlbGVjdG9yPWEsdGhpc31yZXR1cm4gYS5ub2RlVHlwZT8odGhpcy5jb250ZXh0PXRoaXNbMF09YSx0aGlzLmxlbmd0aD0xLHRoaXMpOm0uaXNGdW5jdGlvbihhKT9cInVuZGVmaW5lZFwiIT10eXBlb2YgeC5yZWFkeT94LnJlYWR5KGEpOmEobSk6KHZvaWQgMCE9PWEuc2VsZWN0b3ImJih0aGlzLnNlbGVjdG9yPWEuc2VsZWN0b3IsdGhpcy5jb250ZXh0PWEuY29udGV4dCksbS5tYWtlQXJyYXkoYSx0aGlzKSl9O0EucHJvdG90eXBlPW0uZm4seD1tKHkpO3ZhciBCPS9eKD86cGFyZW50c3xwcmV2KD86VW50aWx8QWxsKSkvLEM9e2NoaWxkcmVuOiEwLGNvbnRlbnRzOiEwLG5leHQ6ITAscHJldjohMH07bS5leHRlbmQoe2RpcjpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9W10sZT1hW2JdO3doaWxlKGUmJjkhPT1lLm5vZGVUeXBlJiYodm9pZCAwPT09Y3x8MSE9PWUubm9kZVR5cGV8fCFtKGUpLmlzKGMpKSkxPT09ZS5ub2RlVHlwZSYmZC5wdXNoKGUpLGU9ZVtiXTtyZXR1cm4gZH0sc2libGluZzpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz1bXTthO2E9YS5uZXh0U2libGluZykxPT09YS5ub2RlVHlwZSYmYSE9PWImJmMucHVzaChhKTtyZXR1cm4gY319KSxtLmZuLmV4dGVuZCh7aGFzOmZ1bmN0aW9uKGEpe3ZhciBiLGM9bShhLHRoaXMpLGQ9Yy5sZW5ndGg7cmV0dXJuIHRoaXMuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKGI9MDtkPmI7YisrKWlmKG0uY29udGFpbnModGhpcyxjW2JdKSlyZXR1cm4hMH0pfSxjbG9zZXN0OmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjLGQ9MCxlPXRoaXMubGVuZ3RoLGY9W10sZz10LnRlc3QoYSl8fFwic3RyaW5nXCIhPXR5cGVvZiBhP20oYSxifHx0aGlzLmNvbnRleHQpOjA7ZT5kO2QrKylmb3IoYz10aGlzW2RdO2MmJmMhPT1iO2M9Yy5wYXJlbnROb2RlKWlmKGMubm9kZVR5cGU8MTEmJihnP2cuaW5kZXgoYyk+LTE6MT09PWMubm9kZVR5cGUmJm0uZmluZC5tYXRjaGVzU2VsZWN0b3IoYyxhKSkpe2YucHVzaChjKTticmVha31yZXR1cm4gdGhpcy5wdXNoU3RhY2soZi5sZW5ndGg+MT9tLnVuaXF1ZShmKTpmKX0saW5kZXg6ZnVuY3Rpb24oYSl7cmV0dXJuIGE/XCJzdHJpbmdcIj09dHlwZW9mIGE/bS5pbkFycmF5KHRoaXNbMF0sbShhKSk6bS5pbkFycmF5KGEuanF1ZXJ5P2FbMF06YSx0aGlzKTp0aGlzWzBdJiZ0aGlzWzBdLnBhcmVudE5vZGU/dGhpcy5maXJzdCgpLnByZXZBbGwoKS5sZW5ndGg6LTF9LGFkZDpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLnB1c2hTdGFjayhtLnVuaXF1ZShtLm1lcmdlKHRoaXMuZ2V0KCksbShhLGIpKSkpfSxhZGRCYWNrOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmFkZChudWxsPT1hP3RoaXMucHJldk9iamVjdDp0aGlzLnByZXZPYmplY3QuZmlsdGVyKGEpKX19KTtmdW5jdGlvbiBEKGEsYil7ZG8gYT1hW2JdO3doaWxlKGEmJjEhPT1hLm5vZGVUeXBlKTtyZXR1cm4gYX1tLmVhY2goe3BhcmVudDpmdW5jdGlvbihhKXt2YXIgYj1hLnBhcmVudE5vZGU7cmV0dXJuIGImJjExIT09Yi5ub2RlVHlwZT9iOm51bGx9LHBhcmVudHM6ZnVuY3Rpb24oYSl7cmV0dXJuIG0uZGlyKGEsXCJwYXJlbnROb2RlXCIpfSxwYXJlbnRzVW50aWw6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBtLmRpcihhLFwicGFyZW50Tm9kZVwiLGMpfSxuZXh0OmZ1bmN0aW9uKGEpe3JldHVybiBEKGEsXCJuZXh0U2libGluZ1wiKX0scHJldjpmdW5jdGlvbihhKXtyZXR1cm4gRChhLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0QWxsOmZ1bmN0aW9uKGEpe3JldHVybiBtLmRpcihhLFwibmV4dFNpYmxpbmdcIil9LHByZXZBbGw6ZnVuY3Rpb24oYSl7cmV0dXJuIG0uZGlyKGEsXCJwcmV2aW91c1NpYmxpbmdcIil9LG5leHRVbnRpbDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIG0uZGlyKGEsXCJuZXh0U2libGluZ1wiLGMpfSxwcmV2VW50aWw6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBtLmRpcihhLFwicHJldmlvdXNTaWJsaW5nXCIsYyl9LHNpYmxpbmdzOmZ1bmN0aW9uKGEpe3JldHVybiBtLnNpYmxpbmcoKGEucGFyZW50Tm9kZXx8e30pLmZpcnN0Q2hpbGQsYSl9LGNoaWxkcmVuOmZ1bmN0aW9uKGEpe3JldHVybiBtLnNpYmxpbmcoYS5maXJzdENoaWxkKX0sY29udGVudHM6ZnVuY3Rpb24oYSl7cmV0dXJuIG0ubm9kZU5hbWUoYSxcImlmcmFtZVwiKT9hLmNvbnRlbnREb2N1bWVudHx8YS5jb250ZW50V2luZG93LmRvY3VtZW50Om0ubWVyZ2UoW10sYS5jaGlsZE5vZGVzKX19LGZ1bmN0aW9uKGEsYil7bS5mblthXT1mdW5jdGlvbihjLGQpe3ZhciBlPW0ubWFwKHRoaXMsYixjKTtyZXR1cm5cIlVudGlsXCIhPT1hLnNsaWNlKC01KSYmKGQ9YyksZCYmXCJzdHJpbmdcIj09dHlwZW9mIGQmJihlPW0uZmlsdGVyKGQsZSkpLHRoaXMubGVuZ3RoPjEmJihDW2FdfHwoZT1tLnVuaXF1ZShlKSksQi50ZXN0KGEpJiYoZT1lLnJldmVyc2UoKSkpLHRoaXMucHVzaFN0YWNrKGUpfX0pO3ZhciBFPS9cXFMrL2csRj17fTtmdW5jdGlvbiBHKGEpe3ZhciBiPUZbYV09e307cmV0dXJuIG0uZWFjaChhLm1hdGNoKEUpfHxbXSxmdW5jdGlvbihhLGMpe2JbY109ITB9KSxifW0uQ2FsbGJhY2tzPWZ1bmN0aW9uKGEpe2E9XCJzdHJpbmdcIj09dHlwZW9mIGE/RlthXXx8RyhhKTptLmV4dGVuZCh7fSxhKTt2YXIgYixjLGQsZSxmLGcsaD1bXSxpPSFhLm9uY2UmJltdLGo9ZnVuY3Rpb24obCl7Zm9yKGM9YS5tZW1vcnkmJmwsZD0hMCxmPWd8fDAsZz0wLGU9aC5sZW5ndGgsYj0hMDtoJiZlPmY7ZisrKWlmKGhbZl0uYXBwbHkobFswXSxsWzFdKT09PSExJiZhLnN0b3BPbkZhbHNlKXtjPSExO2JyZWFrfWI9ITEsaCYmKGk/aS5sZW5ndGgmJmooaS5zaGlmdCgpKTpjP2g9W106ay5kaXNhYmxlKCkpfSxrPXthZGQ6ZnVuY3Rpb24oKXtpZihoKXt2YXIgZD1oLmxlbmd0aDshZnVuY3Rpb24gZihiKXttLmVhY2goYixmdW5jdGlvbihiLGMpe3ZhciBkPW0udHlwZShjKTtcImZ1bmN0aW9uXCI9PT1kP2EudW5pcXVlJiZrLmhhcyhjKXx8aC5wdXNoKGMpOmMmJmMubGVuZ3RoJiZcInN0cmluZ1wiIT09ZCYmZihjKX0pfShhcmd1bWVudHMpLGI/ZT1oLmxlbmd0aDpjJiYoZz1kLGooYykpfXJldHVybiB0aGlzfSxyZW1vdmU6ZnVuY3Rpb24oKXtyZXR1cm4gaCYmbS5lYWNoKGFyZ3VtZW50cyxmdW5jdGlvbihhLGMpe3ZhciBkO3doaWxlKChkPW0uaW5BcnJheShjLGgsZCkpPi0xKWguc3BsaWNlKGQsMSksYiYmKGU+PWQmJmUtLSxmPj1kJiZmLS0pfSksdGhpc30saGFzOmZ1bmN0aW9uKGEpe3JldHVybiBhP20uaW5BcnJheShhLGgpPi0xOiEoIWh8fCFoLmxlbmd0aCl9LGVtcHR5OmZ1bmN0aW9uKCl7cmV0dXJuIGg9W10sZT0wLHRoaXN9LGRpc2FibGU6ZnVuY3Rpb24oKXtyZXR1cm4gaD1pPWM9dm9pZCAwLHRoaXN9LGRpc2FibGVkOmZ1bmN0aW9uKCl7cmV0dXJuIWh9LGxvY2s6ZnVuY3Rpb24oKXtyZXR1cm4gaT12b2lkIDAsY3x8ay5kaXNhYmxlKCksdGhpc30sbG9ja2VkOmZ1bmN0aW9uKCl7cmV0dXJuIWl9LGZpcmVXaXRoOmZ1bmN0aW9uKGEsYyl7cmV0dXJuIWh8fGQmJiFpfHwoYz1jfHxbXSxjPVthLGMuc2xpY2U/Yy5zbGljZSgpOmNdLGI/aS5wdXNoKGMpOmooYykpLHRoaXN9LGZpcmU6ZnVuY3Rpb24oKXtyZXR1cm4gay5maXJlV2l0aCh0aGlzLGFyZ3VtZW50cyksdGhpc30sZmlyZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hIWR9fTtyZXR1cm4ga30sbS5leHRlbmQoe0RlZmVycmVkOmZ1bmN0aW9uKGEpe3ZhciBiPVtbXCJyZXNvbHZlXCIsXCJkb25lXCIsbS5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxcInJlc29sdmVkXCJdLFtcInJlamVjdFwiLFwiZmFpbFwiLG0uQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksXCJyZWplY3RlZFwiXSxbXCJub3RpZnlcIixcInByb2dyZXNzXCIsbS5DYWxsYmFja3MoXCJtZW1vcnlcIildXSxjPVwicGVuZGluZ1wiLGQ9e3N0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuIGN9LGFsd2F5czpmdW5jdGlvbigpe3JldHVybiBlLmRvbmUoYXJndW1lbnRzKS5mYWlsKGFyZ3VtZW50cyksdGhpc30sdGhlbjpmdW5jdGlvbigpe3ZhciBhPWFyZ3VtZW50cztyZXR1cm4gbS5EZWZlcnJlZChmdW5jdGlvbihjKXttLmVhY2goYixmdW5jdGlvbihiLGYpe3ZhciBnPW0uaXNGdW5jdGlvbihhW2JdKSYmYVtiXTtlW2ZbMV1dKGZ1bmN0aW9uKCl7dmFyIGE9ZyYmZy5hcHBseSh0aGlzLGFyZ3VtZW50cyk7YSYmbS5pc0Z1bmN0aW9uKGEucHJvbWlzZSk/YS5wcm9taXNlKCkuZG9uZShjLnJlc29sdmUpLmZhaWwoYy5yZWplY3QpLnByb2dyZXNzKGMubm90aWZ5KTpjW2ZbMF0rXCJXaXRoXCJdKHRoaXM9PT1kP2MucHJvbWlzZSgpOnRoaXMsZz9bYV06YXJndW1lbnRzKX0pfSksYT1udWxsfSkucHJvbWlzZSgpfSxwcm9taXNlOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hP20uZXh0ZW5kKGEsZCk6ZH19LGU9e307cmV0dXJuIGQucGlwZT1kLnRoZW4sbS5lYWNoKGIsZnVuY3Rpb24oYSxmKXt2YXIgZz1mWzJdLGg9ZlszXTtkW2ZbMV1dPWcuYWRkLGgmJmcuYWRkKGZ1bmN0aW9uKCl7Yz1ofSxiWzFeYV1bMl0uZGlzYWJsZSxiWzJdWzJdLmxvY2spLGVbZlswXV09ZnVuY3Rpb24oKXtyZXR1cm4gZVtmWzBdK1wiV2l0aFwiXSh0aGlzPT09ZT9kOnRoaXMsYXJndW1lbnRzKSx0aGlzfSxlW2ZbMF0rXCJXaXRoXCJdPWcuZmlyZVdpdGh9KSxkLnByb21pc2UoZSksYSYmYS5jYWxsKGUsZSksZX0sd2hlbjpmdW5jdGlvbihhKXt2YXIgYj0wLGM9ZC5jYWxsKGFyZ3VtZW50cyksZT1jLmxlbmd0aCxmPTEhPT1lfHxhJiZtLmlzRnVuY3Rpb24oYS5wcm9taXNlKT9lOjAsZz0xPT09Zj9hOm0uRGVmZXJyZWQoKSxoPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gZnVuY3Rpb24oZSl7YlthXT10aGlzLGNbYV09YXJndW1lbnRzLmxlbmd0aD4xP2QuY2FsbChhcmd1bWVudHMpOmUsYz09PWk/Zy5ub3RpZnlXaXRoKGIsYyk6LS1mfHxnLnJlc29sdmVXaXRoKGIsYyl9fSxpLGosaztpZihlPjEpZm9yKGk9bmV3IEFycmF5KGUpLGo9bmV3IEFycmF5KGUpLGs9bmV3IEFycmF5KGUpO2U+YjtiKyspY1tiXSYmbS5pc0Z1bmN0aW9uKGNbYl0ucHJvbWlzZSk/Y1tiXS5wcm9taXNlKCkuZG9uZShoKGIsayxjKSkuZmFpbChnLnJlamVjdCkucHJvZ3Jlc3MoaChiLGosaSkpOi0tZjtyZXR1cm4gZnx8Zy5yZXNvbHZlV2l0aChrLGMpLGcucHJvbWlzZSgpfX0pO3ZhciBIO20uZm4ucmVhZHk9ZnVuY3Rpb24oYSl7cmV0dXJuIG0ucmVhZHkucHJvbWlzZSgpLmRvbmUoYSksdGhpc30sbS5leHRlbmQoe2lzUmVhZHk6ITEscmVhZHlXYWl0OjEsaG9sZFJlYWR5OmZ1bmN0aW9uKGEpe2E/bS5yZWFkeVdhaXQrKzptLnJlYWR5KCEwKX0scmVhZHk6ZnVuY3Rpb24oYSl7aWYoYT09PSEwPyEtLW0ucmVhZHlXYWl0OiFtLmlzUmVhZHkpe2lmKCF5LmJvZHkpcmV0dXJuIHNldFRpbWVvdXQobS5yZWFkeSk7bS5pc1JlYWR5PSEwLGEhPT0hMCYmLS1tLnJlYWR5V2FpdD4wfHwoSC5yZXNvbHZlV2l0aCh5LFttXSksbS5mbi50cmlnZ2VySGFuZGxlciYmKG0oeSkudHJpZ2dlckhhbmRsZXIoXCJyZWFkeVwiKSxtKHkpLm9mZihcInJlYWR5XCIpKSl9fX0pO2Z1bmN0aW9uIEkoKXt5LmFkZEV2ZW50TGlzdGVuZXI/KHkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixKLCExKSxhLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsSiwhMSkpOih5LmRldGFjaEV2ZW50KFwib25yZWFkeXN0YXRlY2hhbmdlXCIsSiksYS5kZXRhY2hFdmVudChcIm9ubG9hZFwiLEopKX1mdW5jdGlvbiBKKCl7KHkuYWRkRXZlbnRMaXN0ZW5lcnx8XCJsb2FkXCI9PT1ldmVudC50eXBlfHxcImNvbXBsZXRlXCI9PT15LnJlYWR5U3RhdGUpJiYoSSgpLG0ucmVhZHkoKSl9bS5yZWFkeS5wcm9taXNlPWZ1bmN0aW9uKGIpe2lmKCFIKWlmKEg9bS5EZWZlcnJlZCgpLFwiY29tcGxldGVcIj09PXkucmVhZHlTdGF0ZSlzZXRUaW1lb3V0KG0ucmVhZHkpO2Vsc2UgaWYoeS5hZGRFdmVudExpc3RlbmVyKXkuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixKLCExKSxhLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsSiwhMSk7ZWxzZXt5LmF0dGFjaEV2ZW50KFwib25yZWFkeXN0YXRlY2hhbmdlXCIsSiksYS5hdHRhY2hFdmVudChcIm9ubG9hZFwiLEopO3ZhciBjPSExO3RyeXtjPW51bGw9PWEuZnJhbWVFbGVtZW50JiZ5LmRvY3VtZW50RWxlbWVudH1jYXRjaChkKXt9YyYmYy5kb1Njcm9sbCYmIWZ1bmN0aW9uIGUoKXtpZighbS5pc1JlYWR5KXt0cnl7Yy5kb1Njcm9sbChcImxlZnRcIil9Y2F0Y2goYSl7cmV0dXJuIHNldFRpbWVvdXQoZSw1MCl9SSgpLG0ucmVhZHkoKX19KCl9cmV0dXJuIEgucHJvbWlzZShiKX07dmFyIEs9XCJ1bmRlZmluZWRcIixMO2ZvcihMIGluIG0oaykpYnJlYWs7ay5vd25MYXN0PVwiMFwiIT09TCxrLmlubGluZUJsb2NrTmVlZHNMYXlvdXQ9ITEsbShmdW5jdGlvbigpe3ZhciBhLGIsYyxkO2M9eS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0sYyYmYy5zdHlsZSYmKGI9eS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGQ9eS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGQuc3R5bGUuY3NzVGV4dD1cInBvc2l0aW9uOmFic29sdXRlO2JvcmRlcjowO3dpZHRoOjA7aGVpZ2h0OjA7dG9wOjA7bGVmdDotOTk5OXB4XCIsYy5hcHBlbmRDaGlsZChkKS5hcHBlbmRDaGlsZChiKSx0eXBlb2YgYi5zdHlsZS56b29tIT09SyYmKGIuc3R5bGUuY3NzVGV4dD1cImRpc3BsYXk6aW5saW5lO21hcmdpbjowO2JvcmRlcjowO3BhZGRpbmc6MXB4O3dpZHRoOjFweDt6b29tOjFcIixrLmlubGluZUJsb2NrTmVlZHNMYXlvdXQ9YT0zPT09Yi5vZmZzZXRXaWR0aCxhJiYoYy5zdHlsZS56b29tPTEpKSxjLnJlbW92ZUNoaWxkKGQpKX0pLGZ1bmN0aW9uKCl7dmFyIGE9eS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2lmKG51bGw9PWsuZGVsZXRlRXhwYW5kbyl7ay5kZWxldGVFeHBhbmRvPSEwO3RyeXtkZWxldGUgYS50ZXN0fWNhdGNoKGIpe2suZGVsZXRlRXhwYW5kbz0hMX19YT1udWxsfSgpLG0uYWNjZXB0RGF0YT1mdW5jdGlvbihhKXt2YXIgYj1tLm5vRGF0YVsoYS5ub2RlTmFtZStcIiBcIikudG9Mb3dlckNhc2UoKV0sYz0rYS5ub2RlVHlwZXx8MTtyZXR1cm4gMSE9PWMmJjkhPT1jPyExOiFifHxiIT09ITAmJmEuZ2V0QXR0cmlidXRlKFwiY2xhc3NpZFwiKT09PWJ9O3ZhciBNPS9eKD86XFx7W1xcd1xcV10qXFx9fFxcW1tcXHdcXFddKlxcXSkkLyxOPS8oW0EtWl0pL2c7ZnVuY3Rpb24gTyhhLGIsYyl7aWYodm9pZCAwPT09YyYmMT09PWEubm9kZVR5cGUpe3ZhciBkPVwiZGF0YS1cIitiLnJlcGxhY2UoTixcIi0kMVwiKS50b0xvd2VyQ2FzZSgpO2lmKGM9YS5nZXRBdHRyaWJ1dGUoZCksXCJzdHJpbmdcIj09dHlwZW9mIGMpe3RyeXtjPVwidHJ1ZVwiPT09Yz8hMDpcImZhbHNlXCI9PT1jPyExOlwibnVsbFwiPT09Yz9udWxsOitjK1wiXCI9PT1jPytjOk0udGVzdChjKT9tLnBhcnNlSlNPTihjKTpjfWNhdGNoKGUpe31tLmRhdGEoYSxiLGMpfWVsc2UgYz12b2lkIDB9cmV0dXJuIGN9ZnVuY3Rpb24gUChhKXt2YXIgYjtmb3IoYiBpbiBhKWlmKChcImRhdGFcIiE9PWJ8fCFtLmlzRW1wdHlPYmplY3QoYVtiXSkpJiZcInRvSlNPTlwiIT09YilyZXR1cm4hMTtcblxucmV0dXJuITB9ZnVuY3Rpb24gUShhLGIsZCxlKXtpZihtLmFjY2VwdERhdGEoYSkpe3ZhciBmLGcsaD1tLmV4cGFuZG8saT1hLm5vZGVUeXBlLGo9aT9tLmNhY2hlOmEsaz1pP2FbaF06YVtoXSYmaDtpZihrJiZqW2tdJiYoZXx8altrXS5kYXRhKXx8dm9pZCAwIT09ZHx8XCJzdHJpbmdcIiE9dHlwZW9mIGIpcmV0dXJuIGt8fChrPWk/YVtoXT1jLnBvcCgpfHxtLmd1aWQrKzpoKSxqW2tdfHwoaltrXT1pP3t9Ont0b0pTT046bS5ub29wfSksKFwib2JqZWN0XCI9PXR5cGVvZiBifHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBiKSYmKGU/altrXT1tLmV4dGVuZChqW2tdLGIpOmpba10uZGF0YT1tLmV4dGVuZChqW2tdLmRhdGEsYikpLGc9altrXSxlfHwoZy5kYXRhfHwoZy5kYXRhPXt9KSxnPWcuZGF0YSksdm9pZCAwIT09ZCYmKGdbbS5jYW1lbENhc2UoYildPWQpLFwic3RyaW5nXCI9PXR5cGVvZiBiPyhmPWdbYl0sbnVsbD09ZiYmKGY9Z1ttLmNhbWVsQ2FzZShiKV0pKTpmPWcsZn19ZnVuY3Rpb24gUihhLGIsYyl7aWYobS5hY2NlcHREYXRhKGEpKXt2YXIgZCxlLGY9YS5ub2RlVHlwZSxnPWY/bS5jYWNoZTphLGg9Zj9hW20uZXhwYW5kb106bS5leHBhbmRvO2lmKGdbaF0pe2lmKGImJihkPWM/Z1toXTpnW2hdLmRhdGEpKXttLmlzQXJyYXkoYik/Yj1iLmNvbmNhdChtLm1hcChiLG0uY2FtZWxDYXNlKSk6YiBpbiBkP2I9W2JdOihiPW0uY2FtZWxDYXNlKGIpLGI9YiBpbiBkP1tiXTpiLnNwbGl0KFwiIFwiKSksZT1iLmxlbmd0aDt3aGlsZShlLS0pZGVsZXRlIGRbYltlXV07aWYoYz8hUChkKTohbS5pc0VtcHR5T2JqZWN0KGQpKXJldHVybn0oY3x8KGRlbGV0ZSBnW2hdLmRhdGEsUChnW2hdKSkpJiYoZj9tLmNsZWFuRGF0YShbYV0sITApOmsuZGVsZXRlRXhwYW5kb3x8ZyE9Zy53aW5kb3c/ZGVsZXRlIGdbaF06Z1toXT1udWxsKX19fW0uZXh0ZW5kKHtjYWNoZTp7fSxub0RhdGE6e1wiYXBwbGV0IFwiOiEwLFwiZW1iZWQgXCI6ITAsXCJvYmplY3QgXCI6XCJjbHNpZDpEMjdDREI2RS1BRTZELTExY2YtOTZCOC00NDQ1NTM1NDAwMDBcIn0saGFzRGF0YTpmdW5jdGlvbihhKXtyZXR1cm4gYT1hLm5vZGVUeXBlP20uY2FjaGVbYVttLmV4cGFuZG9dXTphW20uZXhwYW5kb10sISFhJiYhUChhKX0sZGF0YTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIFEoYSxiLGMpfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGEsYil7cmV0dXJuIFIoYSxiKX0sX2RhdGE6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBRKGEsYixjLCEwKX0sX3JlbW92ZURhdGE6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gUihhLGIsITApfX0pLG0uZm4uZXh0ZW5kKHtkYXRhOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGY9dGhpc1swXSxnPWYmJmYuYXR0cmlidXRlcztpZih2b2lkIDA9PT1hKXtpZih0aGlzLmxlbmd0aCYmKGU9bS5kYXRhKGYpLDE9PT1mLm5vZGVUeXBlJiYhbS5fZGF0YShmLFwicGFyc2VkQXR0cnNcIikpKXtjPWcubGVuZ3RoO3doaWxlKGMtLSlnW2NdJiYoZD1nW2NdLm5hbWUsMD09PWQuaW5kZXhPZihcImRhdGEtXCIpJiYoZD1tLmNhbWVsQ2FzZShkLnNsaWNlKDUpKSxPKGYsZCxlW2RdKSkpO20uX2RhdGEoZixcInBhcnNlZEF0dHJzXCIsITApfXJldHVybiBlfXJldHVyblwib2JqZWN0XCI9PXR5cGVvZiBhP3RoaXMuZWFjaChmdW5jdGlvbigpe20uZGF0YSh0aGlzLGEpfSk6YXJndW1lbnRzLmxlbmd0aD4xP3RoaXMuZWFjaChmdW5jdGlvbigpe20uZGF0YSh0aGlzLGEsYil9KTpmP08oZixhLG0uZGF0YShmLGEpKTp2b2lkIDB9LHJlbW92ZURhdGE6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe20ucmVtb3ZlRGF0YSh0aGlzLGEpfSl9fSksbS5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKGEsYixjKXt2YXIgZDtyZXR1cm4gYT8oYj0oYnx8XCJmeFwiKStcInF1ZXVlXCIsZD1tLl9kYXRhKGEsYiksYyYmKCFkfHxtLmlzQXJyYXkoYyk/ZD1tLl9kYXRhKGEsYixtLm1ha2VBcnJheShjKSk6ZC5wdXNoKGMpKSxkfHxbXSk6dm9pZCAwfSxkZXF1ZXVlOmZ1bmN0aW9uKGEsYil7Yj1ifHxcImZ4XCI7dmFyIGM9bS5xdWV1ZShhLGIpLGQ9Yy5sZW5ndGgsZT1jLnNoaWZ0KCksZj1tLl9xdWV1ZUhvb2tzKGEsYiksZz1mdW5jdGlvbigpe20uZGVxdWV1ZShhLGIpfTtcImlucHJvZ3Jlc3NcIj09PWUmJihlPWMuc2hpZnQoKSxkLS0pLGUmJihcImZ4XCI9PT1iJiZjLnVuc2hpZnQoXCJpbnByb2dyZXNzXCIpLGRlbGV0ZSBmLnN0b3AsZS5jYWxsKGEsZyxmKSksIWQmJmYmJmYuZW1wdHkuZmlyZSgpfSxfcXVldWVIb29rczpmdW5jdGlvbihhLGIpe3ZhciBjPWIrXCJxdWV1ZUhvb2tzXCI7cmV0dXJuIG0uX2RhdGEoYSxjKXx8bS5fZGF0YShhLGMse2VtcHR5Om0uQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIikuYWRkKGZ1bmN0aW9uKCl7bS5fcmVtb3ZlRGF0YShhLGIrXCJxdWV1ZVwiKSxtLl9yZW1vdmVEYXRhKGEsYyl9KX0pfX0pLG0uZm4uZXh0ZW5kKHtxdWV1ZTpmdW5jdGlvbihhLGIpe3ZhciBjPTI7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGEmJihiPWEsYT1cImZ4XCIsYy0tKSxhcmd1bWVudHMubGVuZ3RoPGM/bS5xdWV1ZSh0aGlzWzBdLGEpOnZvaWQgMD09PWI/dGhpczp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYz1tLnF1ZXVlKHRoaXMsYSxiKTttLl9xdWV1ZUhvb2tzKHRoaXMsYSksXCJmeFwiPT09YSYmXCJpbnByb2dyZXNzXCIhPT1jWzBdJiZtLmRlcXVldWUodGhpcyxhKX0pfSxkZXF1ZXVlOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXttLmRlcXVldWUodGhpcyxhKX0pfSxjbGVhclF1ZXVlOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnF1ZXVlKGF8fFwiZnhcIixbXSl9LHByb21pc2U6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPTEsZT1tLkRlZmVycmVkKCksZj10aGlzLGc9dGhpcy5sZW5ndGgsaD1mdW5jdGlvbigpey0tZHx8ZS5yZXNvbHZlV2l0aChmLFtmXSl9O1wic3RyaW5nXCIhPXR5cGVvZiBhJiYoYj1hLGE9dm9pZCAwKSxhPWF8fFwiZnhcIjt3aGlsZShnLS0pYz1tLl9kYXRhKGZbZ10sYStcInF1ZXVlSG9va3NcIiksYyYmYy5lbXB0eSYmKGQrKyxjLmVtcHR5LmFkZChoKSk7cmV0dXJuIGgoKSxlLnByb21pc2UoYil9fSk7dmFyIFM9L1srLV0/KD86XFxkKlxcLnwpXFxkKyg/OltlRV1bKy1dP1xcZCt8KS8uc291cmNlLFQ9W1wiVG9wXCIsXCJSaWdodFwiLFwiQm90dG9tXCIsXCJMZWZ0XCJdLFU9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT1ifHxhLFwibm9uZVwiPT09bS5jc3MoYSxcImRpc3BsYXlcIil8fCFtLmNvbnRhaW5zKGEub3duZXJEb2N1bWVudCxhKX0sVj1tLmFjY2Vzcz1mdW5jdGlvbihhLGIsYyxkLGUsZixnKXt2YXIgaD0wLGk9YS5sZW5ndGgsaj1udWxsPT1jO2lmKFwib2JqZWN0XCI9PT1tLnR5cGUoYykpe2U9ITA7Zm9yKGggaW4gYyltLmFjY2VzcyhhLGIsaCxjW2hdLCEwLGYsZyl9ZWxzZSBpZih2b2lkIDAhPT1kJiYoZT0hMCxtLmlzRnVuY3Rpb24oZCl8fChnPSEwKSxqJiYoZz8oYi5jYWxsKGEsZCksYj1udWxsKTooaj1iLGI9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBqLmNhbGwobShhKSxjKX0pKSxiKSlmb3IoO2k+aDtoKyspYihhW2hdLGMsZz9kOmQuY2FsbChhW2hdLGgsYihhW2hdLGMpKSk7cmV0dXJuIGU/YTpqP2IuY2FsbChhKTppP2IoYVswXSxjKTpmfSxXPS9eKD86Y2hlY2tib3h8cmFkaW8pJC9pOyFmdW5jdGlvbigpe3ZhciBhPXkuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGI9eS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGM9eS5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7aWYoYi5pbm5lckhUTUw9XCIgIDxsaW5rLz48dGFibGU+PC90YWJsZT48YSBocmVmPScvYSc+YTwvYT48aW5wdXQgdHlwZT0nY2hlY2tib3gnLz5cIixrLmxlYWRpbmdXaGl0ZXNwYWNlPTM9PT1iLmZpcnN0Q2hpbGQubm9kZVR5cGUsay50Ym9keT0hYi5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRib2R5XCIpLmxlbmd0aCxrLmh0bWxTZXJpYWxpemU9ISFiLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGlua1wiKS5sZW5ndGgsay5odG1sNUNsb25lPVwiPDpuYXY+PC86bmF2PlwiIT09eS5jcmVhdGVFbGVtZW50KFwibmF2XCIpLmNsb25lTm9kZSghMCkub3V0ZXJIVE1MLGEudHlwZT1cImNoZWNrYm94XCIsYS5jaGVja2VkPSEwLGMuYXBwZW5kQ2hpbGQoYSksay5hcHBlbmRDaGVja2VkPWEuY2hlY2tlZCxiLmlubmVySFRNTD1cIjx0ZXh0YXJlYT54PC90ZXh0YXJlYT5cIixrLm5vQ2xvbmVDaGVja2VkPSEhYi5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5kZWZhdWx0VmFsdWUsYy5hcHBlbmRDaGlsZChiKSxiLmlubmVySFRNTD1cIjxpbnB1dCB0eXBlPSdyYWRpbycgY2hlY2tlZD0nY2hlY2tlZCcgbmFtZT0ndCcvPlwiLGsuY2hlY2tDbG9uZT1iLmNsb25lTm9kZSghMCkuY2xvbmVOb2RlKCEwKS5sYXN0Q2hpbGQuY2hlY2tlZCxrLm5vQ2xvbmVFdmVudD0hMCxiLmF0dGFjaEV2ZW50JiYoYi5hdHRhY2hFdmVudChcIm9uY2xpY2tcIixmdW5jdGlvbigpe2subm9DbG9uZUV2ZW50PSExfSksYi5jbG9uZU5vZGUoITApLmNsaWNrKCkpLG51bGw9PWsuZGVsZXRlRXhwYW5kbyl7ay5kZWxldGVFeHBhbmRvPSEwO3RyeXtkZWxldGUgYi50ZXN0fWNhdGNoKGQpe2suZGVsZXRlRXhwYW5kbz0hMX19fSgpLGZ1bmN0aW9uKCl7dmFyIGIsYyxkPXkuY3JlYXRlRWxlbWVudChcImRpdlwiKTtmb3IoYiBpbntzdWJtaXQ6ITAsY2hhbmdlOiEwLGZvY3VzaW46ITB9KWM9XCJvblwiK2IsKGtbYitcIkJ1YmJsZXNcIl09YyBpbiBhKXx8KGQuc2V0QXR0cmlidXRlKGMsXCJ0XCIpLGtbYitcIkJ1YmJsZXNcIl09ZC5hdHRyaWJ1dGVzW2NdLmV4cGFuZG89PT0hMSk7ZD1udWxsfSgpO3ZhciBYPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhKSQvaSxZPS9ea2V5LyxaPS9eKD86bW91c2V8cG9pbnRlcnxjb250ZXh0bWVudSl8Y2xpY2svLCQ9L14oPzpmb2N1c2luZm9jdXN8Zm9jdXNvdXRibHVyKSQvLF89L14oW14uXSopKD86XFwuKC4rKXwpJC87ZnVuY3Rpb24gYWEoKXtyZXR1cm4hMH1mdW5jdGlvbiBiYSgpe3JldHVybiExfWZ1bmN0aW9uIGNhKCl7dHJ5e3JldHVybiB5LmFjdGl2ZUVsZW1lbnR9Y2F0Y2goYSl7fX1tLmV2ZW50PXtnbG9iYWw6e30sYWRkOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGYsZyxoLGksaixrLGwsbixvLHAscSxyPW0uX2RhdGEoYSk7aWYocil7Yy5oYW5kbGVyJiYoaT1jLGM9aS5oYW5kbGVyLGU9aS5zZWxlY3RvciksYy5ndWlkfHwoYy5ndWlkPW0uZ3VpZCsrKSwoZz1yLmV2ZW50cyl8fChnPXIuZXZlbnRzPXt9KSwoaz1yLmhhbmRsZSl8fChrPXIuaGFuZGxlPWZ1bmN0aW9uKGEpe3JldHVybiB0eXBlb2YgbT09PUt8fGEmJm0uZXZlbnQudHJpZ2dlcmVkPT09YS50eXBlP3ZvaWQgMDptLmV2ZW50LmRpc3BhdGNoLmFwcGx5KGsuZWxlbSxhcmd1bWVudHMpfSxrLmVsZW09YSksYj0oYnx8XCJcIikubWF0Y2goRSl8fFtcIlwiXSxoPWIubGVuZ3RoO3doaWxlKGgtLSlmPV8uZXhlYyhiW2hdKXx8W10sbz1xPWZbMV0scD0oZlsyXXx8XCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSxvJiYoaj1tLmV2ZW50LnNwZWNpYWxbb118fHt9LG89KGU/ai5kZWxlZ2F0ZVR5cGU6ai5iaW5kVHlwZSl8fG8saj1tLmV2ZW50LnNwZWNpYWxbb118fHt9LGw9bS5leHRlbmQoe3R5cGU6byxvcmlnVHlwZTpxLGRhdGE6ZCxoYW5kbGVyOmMsZ3VpZDpjLmd1aWQsc2VsZWN0b3I6ZSxuZWVkc0NvbnRleHQ6ZSYmbS5leHByLm1hdGNoLm5lZWRzQ29udGV4dC50ZXN0KGUpLG5hbWVzcGFjZTpwLmpvaW4oXCIuXCIpfSxpKSwobj1nW29dKXx8KG49Z1tvXT1bXSxuLmRlbGVnYXRlQ291bnQ9MCxqLnNldHVwJiZqLnNldHVwLmNhbGwoYSxkLHAsaykhPT0hMXx8KGEuYWRkRXZlbnRMaXN0ZW5lcj9hLmFkZEV2ZW50TGlzdGVuZXIobyxrLCExKTphLmF0dGFjaEV2ZW50JiZhLmF0dGFjaEV2ZW50KFwib25cIitvLGspKSksai5hZGQmJihqLmFkZC5jYWxsKGEsbCksbC5oYW5kbGVyLmd1aWR8fChsLmhhbmRsZXIuZ3VpZD1jLmd1aWQpKSxlP24uc3BsaWNlKG4uZGVsZWdhdGVDb3VudCsrLDAsbCk6bi5wdXNoKGwpLG0uZXZlbnQuZ2xvYmFsW29dPSEwKTthPW51bGx9fSxyZW1vdmU6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZixnLGgsaSxqLGssbCxuLG8scCxxLHI9bS5oYXNEYXRhKGEpJiZtLl9kYXRhKGEpO2lmKHImJihrPXIuZXZlbnRzKSl7Yj0oYnx8XCJcIikubWF0Y2goRSl8fFtcIlwiXSxqPWIubGVuZ3RoO3doaWxlKGotLSlpZihoPV8uZXhlYyhiW2pdKXx8W10sbz1xPWhbMV0scD0oaFsyXXx8XCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSxvKXtsPW0uZXZlbnQuc3BlY2lhbFtvXXx8e30sbz0oZD9sLmRlbGVnYXRlVHlwZTpsLmJpbmRUeXBlKXx8byxuPWtbb118fFtdLGg9aFsyXSYmbmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK3Auam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpLGk9Zj1uLmxlbmd0aDt3aGlsZShmLS0pZz1uW2ZdLCFlJiZxIT09Zy5vcmlnVHlwZXx8YyYmYy5ndWlkIT09Zy5ndWlkfHxoJiYhaC50ZXN0KGcubmFtZXNwYWNlKXx8ZCYmZCE9PWcuc2VsZWN0b3ImJihcIioqXCIhPT1kfHwhZy5zZWxlY3Rvcil8fChuLnNwbGljZShmLDEpLGcuc2VsZWN0b3ImJm4uZGVsZWdhdGVDb3VudC0tLGwucmVtb3ZlJiZsLnJlbW92ZS5jYWxsKGEsZykpO2kmJiFuLmxlbmd0aCYmKGwudGVhcmRvd24mJmwudGVhcmRvd24uY2FsbChhLHAsci5oYW5kbGUpIT09ITF8fG0ucmVtb3ZlRXZlbnQoYSxvLHIuaGFuZGxlKSxkZWxldGUga1tvXSl9ZWxzZSBmb3IobyBpbiBrKW0uZXZlbnQucmVtb3ZlKGEsbytiW2pdLGMsZCwhMCk7bS5pc0VtcHR5T2JqZWN0KGspJiYoZGVsZXRlIHIuaGFuZGxlLG0uX3JlbW92ZURhdGEoYSxcImV2ZW50c1wiKSl9fSx0cmlnZ2VyOmZ1bmN0aW9uKGIsYyxkLGUpe3ZhciBmLGcsaCxpLGssbCxuLG89W2R8fHldLHA9ai5jYWxsKGIsXCJ0eXBlXCIpP2IudHlwZTpiLHE9ai5jYWxsKGIsXCJuYW1lc3BhY2VcIik/Yi5uYW1lc3BhY2Uuc3BsaXQoXCIuXCIpOltdO2lmKGg9bD1kPWR8fHksMyE9PWQubm9kZVR5cGUmJjghPT1kLm5vZGVUeXBlJiYhJC50ZXN0KHArbS5ldmVudC50cmlnZ2VyZWQpJiYocC5pbmRleE9mKFwiLlwiKT49MCYmKHE9cC5zcGxpdChcIi5cIikscD1xLnNoaWZ0KCkscS5zb3J0KCkpLGc9cC5pbmRleE9mKFwiOlwiKTwwJiZcIm9uXCIrcCxiPWJbbS5leHBhbmRvXT9iOm5ldyBtLkV2ZW50KHAsXCJvYmplY3RcIj09dHlwZW9mIGImJmIpLGIuaXNUcmlnZ2VyPWU/MjozLGIubmFtZXNwYWNlPXEuam9pbihcIi5cIiksYi5uYW1lc3BhY2VfcmU9Yi5uYW1lc3BhY2U/bmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK3Euam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpOm51bGwsYi5yZXN1bHQ9dm9pZCAwLGIudGFyZ2V0fHwoYi50YXJnZXQ9ZCksYz1udWxsPT1jP1tiXTptLm1ha2VBcnJheShjLFtiXSksaz1tLmV2ZW50LnNwZWNpYWxbcF18fHt9LGV8fCFrLnRyaWdnZXJ8fGsudHJpZ2dlci5hcHBseShkLGMpIT09ITEpKXtpZighZSYmIWsubm9CdWJibGUmJiFtLmlzV2luZG93KGQpKXtmb3IoaT1rLmRlbGVnYXRlVHlwZXx8cCwkLnRlc3QoaStwKXx8KGg9aC5wYXJlbnROb2RlKTtoO2g9aC5wYXJlbnROb2RlKW8ucHVzaChoKSxsPWg7bD09PShkLm93bmVyRG9jdW1lbnR8fHkpJiZvLnB1c2gobC5kZWZhdWx0Vmlld3x8bC5wYXJlbnRXaW5kb3d8fGEpfW49MDt3aGlsZSgoaD1vW24rK10pJiYhYi5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKWIudHlwZT1uPjE/aTprLmJpbmRUeXBlfHxwLGY9KG0uX2RhdGEoaCxcImV2ZW50c1wiKXx8e30pW2IudHlwZV0mJm0uX2RhdGEoaCxcImhhbmRsZVwiKSxmJiZmLmFwcGx5KGgsYyksZj1nJiZoW2ddLGYmJmYuYXBwbHkmJm0uYWNjZXB0RGF0YShoKSYmKGIucmVzdWx0PWYuYXBwbHkoaCxjKSxiLnJlc3VsdD09PSExJiZiLnByZXZlbnREZWZhdWx0KCkpO2lmKGIudHlwZT1wLCFlJiYhYi5pc0RlZmF1bHRQcmV2ZW50ZWQoKSYmKCFrLl9kZWZhdWx0fHxrLl9kZWZhdWx0LmFwcGx5KG8ucG9wKCksYyk9PT0hMSkmJm0uYWNjZXB0RGF0YShkKSYmZyYmZFtwXSYmIW0uaXNXaW5kb3coZCkpe2w9ZFtnXSxsJiYoZFtnXT1udWxsKSxtLmV2ZW50LnRyaWdnZXJlZD1wO3RyeXtkW3BdKCl9Y2F0Y2gocil7fW0uZXZlbnQudHJpZ2dlcmVkPXZvaWQgMCxsJiYoZFtnXT1sKX1yZXR1cm4gYi5yZXN1bHR9fSxkaXNwYXRjaDpmdW5jdGlvbihhKXthPW0uZXZlbnQuZml4KGEpO3ZhciBiLGMsZSxmLGcsaD1bXSxpPWQuY2FsbChhcmd1bWVudHMpLGo9KG0uX2RhdGEodGhpcyxcImV2ZW50c1wiKXx8e30pW2EudHlwZV18fFtdLGs9bS5ldmVudC5zcGVjaWFsW2EudHlwZV18fHt9O2lmKGlbMF09YSxhLmRlbGVnYXRlVGFyZ2V0PXRoaXMsIWsucHJlRGlzcGF0Y2h8fGsucHJlRGlzcGF0Y2guY2FsbCh0aGlzLGEpIT09ITEpe2g9bS5ldmVudC5oYW5kbGVycy5jYWxsKHRoaXMsYSxqKSxiPTA7d2hpbGUoKGY9aFtiKytdKSYmIWEuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSl7YS5jdXJyZW50VGFyZ2V0PWYuZWxlbSxnPTA7d2hpbGUoKGU9Zi5oYW5kbGVyc1tnKytdKSYmIWEuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKSkoIWEubmFtZXNwYWNlX3JlfHxhLm5hbWVzcGFjZV9yZS50ZXN0KGUubmFtZXNwYWNlKSkmJihhLmhhbmRsZU9iaj1lLGEuZGF0YT1lLmRhdGEsYz0oKG0uZXZlbnQuc3BlY2lhbFtlLm9yaWdUeXBlXXx8e30pLmhhbmRsZXx8ZS5oYW5kbGVyKS5hcHBseShmLmVsZW0saSksdm9pZCAwIT09YyYmKGEucmVzdWx0PWMpPT09ITEmJihhLnByZXZlbnREZWZhdWx0KCksYS5zdG9wUHJvcGFnYXRpb24oKSkpfXJldHVybiBrLnBvc3REaXNwYXRjaCYmay5wb3N0RGlzcGF0Y2guY2FsbCh0aGlzLGEpLGEucmVzdWx0fX0saGFuZGxlcnM6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZixnPVtdLGg9Yi5kZWxlZ2F0ZUNvdW50LGk9YS50YXJnZXQ7aWYoaCYmaS5ub2RlVHlwZSYmKCFhLmJ1dHRvbnx8XCJjbGlja1wiIT09YS50eXBlKSlmb3IoO2khPXRoaXM7aT1pLnBhcmVudE5vZGV8fHRoaXMpaWYoMT09PWkubm9kZVR5cGUmJihpLmRpc2FibGVkIT09ITB8fFwiY2xpY2tcIiE9PWEudHlwZSkpe2ZvcihlPVtdLGY9MDtoPmY7ZisrKWQ9YltmXSxjPWQuc2VsZWN0b3IrXCIgXCIsdm9pZCAwPT09ZVtjXSYmKGVbY109ZC5uZWVkc0NvbnRleHQ/bShjLHRoaXMpLmluZGV4KGkpPj0wOm0uZmluZChjLHRoaXMsbnVsbCxbaV0pLmxlbmd0aCksZVtjXSYmZS5wdXNoKGQpO2UubGVuZ3RoJiZnLnB1c2goe2VsZW06aSxoYW5kbGVyczplfSl9cmV0dXJuIGg8Yi5sZW5ndGgmJmcucHVzaCh7ZWxlbTp0aGlzLGhhbmRsZXJzOmIuc2xpY2UoaCl9KSxnfSxmaXg6ZnVuY3Rpb24oYSl7aWYoYVttLmV4cGFuZG9dKXJldHVybiBhO3ZhciBiLGMsZCxlPWEudHlwZSxmPWEsZz10aGlzLmZpeEhvb2tzW2VdO2d8fCh0aGlzLmZpeEhvb2tzW2VdPWc9Wi50ZXN0KGUpP3RoaXMubW91c2VIb29rczpZLnRlc3QoZSk/dGhpcy5rZXlIb29rczp7fSksZD1nLnByb3BzP3RoaXMucHJvcHMuY29uY2F0KGcucHJvcHMpOnRoaXMucHJvcHMsYT1uZXcgbS5FdmVudChmKSxiPWQubGVuZ3RoO3doaWxlKGItLSljPWRbYl0sYVtjXT1mW2NdO3JldHVybiBhLnRhcmdldHx8KGEudGFyZ2V0PWYuc3JjRWxlbWVudHx8eSksMz09PWEudGFyZ2V0Lm5vZGVUeXBlJiYoYS50YXJnZXQ9YS50YXJnZXQucGFyZW50Tm9kZSksYS5tZXRhS2V5PSEhYS5tZXRhS2V5LGcuZmlsdGVyP2cuZmlsdGVyKGEsZik6YX0scHJvcHM6XCJhbHRLZXkgYnViYmxlcyBjYW5jZWxhYmxlIGN0cmxLZXkgY3VycmVudFRhcmdldCBldmVudFBoYXNlIG1ldGFLZXkgcmVsYXRlZFRhcmdldCBzaGlmdEtleSB0YXJnZXQgdGltZVN0YW1wIHZpZXcgd2hpY2hcIi5zcGxpdChcIiBcIiksZml4SG9va3M6e30sa2V5SG9va3M6e3Byb3BzOlwiY2hhciBjaGFyQ29kZSBrZXkga2V5Q29kZVwiLnNwbGl0KFwiIFwiKSxmaWx0ZXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbnVsbD09YS53aGljaCYmKGEud2hpY2g9bnVsbCE9Yi5jaGFyQ29kZT9iLmNoYXJDb2RlOmIua2V5Q29kZSksYX19LG1vdXNlSG9va3M6e3Byb3BzOlwiYnV0dG9uIGJ1dHRvbnMgY2xpZW50WCBjbGllbnRZIGZyb21FbGVtZW50IG9mZnNldFggb2Zmc2V0WSBwYWdlWCBwYWdlWSBzY3JlZW5YIHNjcmVlblkgdG9FbGVtZW50XCIuc3BsaXQoXCIgXCIpLGZpbHRlcjpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmPWIuYnV0dG9uLGc9Yi5mcm9tRWxlbWVudDtyZXR1cm4gbnVsbD09YS5wYWdlWCYmbnVsbCE9Yi5jbGllbnRYJiYoZD1hLnRhcmdldC5vd25lckRvY3VtZW50fHx5LGU9ZC5kb2N1bWVudEVsZW1lbnQsYz1kLmJvZHksYS5wYWdlWD1iLmNsaWVudFgrKGUmJmUuc2Nyb2xsTGVmdHx8YyYmYy5zY3JvbGxMZWZ0fHwwKS0oZSYmZS5jbGllbnRMZWZ0fHxjJiZjLmNsaWVudExlZnR8fDApLGEucGFnZVk9Yi5jbGllbnRZKyhlJiZlLnNjcm9sbFRvcHx8YyYmYy5zY3JvbGxUb3B8fDApLShlJiZlLmNsaWVudFRvcHx8YyYmYy5jbGllbnRUb3B8fDApKSwhYS5yZWxhdGVkVGFyZ2V0JiZnJiYoYS5yZWxhdGVkVGFyZ2V0PWc9PT1hLnRhcmdldD9iLnRvRWxlbWVudDpnKSxhLndoaWNofHx2b2lkIDA9PT1mfHwoYS53aGljaD0xJmY/MToyJmY/Mzo0JmY/MjowKSxhfX0sc3BlY2lhbDp7bG9hZDp7bm9CdWJibGU6ITB9LGZvY3VzOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7aWYodGhpcyE9PWNhKCkmJnRoaXMuZm9jdXMpdHJ5e3JldHVybiB0aGlzLmZvY3VzKCksITF9Y2F0Y2goYSl7fX0sZGVsZWdhdGVUeXBlOlwiZm9jdXNpblwifSxibHVyOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXM9PT1jYSgpJiZ0aGlzLmJsdXI/KHRoaXMuYmx1cigpLCExKTp2b2lkIDB9LGRlbGVnYXRlVHlwZTpcImZvY3Vzb3V0XCJ9LGNsaWNrOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7cmV0dXJuIG0ubm9kZU5hbWUodGhpcyxcImlucHV0XCIpJiZcImNoZWNrYm94XCI9PT10aGlzLnR5cGUmJnRoaXMuY2xpY2s/KHRoaXMuY2xpY2soKSwhMSk6dm9pZCAwfSxfZGVmYXVsdDpmdW5jdGlvbihhKXtyZXR1cm4gbS5ub2RlTmFtZShhLnRhcmdldCxcImFcIil9fSxiZWZvcmV1bmxvYWQ6e3Bvc3REaXNwYXRjaDpmdW5jdGlvbihhKXt2b2lkIDAhPT1hLnJlc3VsdCYmYS5vcmlnaW5hbEV2ZW50JiYoYS5vcmlnaW5hbEV2ZW50LnJldHVyblZhbHVlPWEucmVzdWx0KX19fSxzaW11bGF0ZTpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1tLmV4dGVuZChuZXcgbS5FdmVudCxjLHt0eXBlOmEsaXNTaW11bGF0ZWQ6ITAsb3JpZ2luYWxFdmVudDp7fX0pO2Q/bS5ldmVudC50cmlnZ2VyKGUsbnVsbCxiKTptLmV2ZW50LmRpc3BhdGNoLmNhbGwoYixlKSxlLmlzRGVmYXVsdFByZXZlbnRlZCgpJiZjLnByZXZlbnREZWZhdWx0KCl9fSxtLnJlbW92ZUV2ZW50PXkucmVtb3ZlRXZlbnRMaXN0ZW5lcj9mdW5jdGlvbihhLGIsYyl7YS5yZW1vdmVFdmVudExpc3RlbmVyJiZhLnJlbW92ZUV2ZW50TGlzdGVuZXIoYixjLCExKX06ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPVwib25cIitiO2EuZGV0YWNoRXZlbnQmJih0eXBlb2YgYVtkXT09PUsmJihhW2RdPW51bGwpLGEuZGV0YWNoRXZlbnQoZCxjKSl9LG0uRXZlbnQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcyBpbnN0YW5jZW9mIG0uRXZlbnQ/KGEmJmEudHlwZT8odGhpcy5vcmlnaW5hbEV2ZW50PWEsdGhpcy50eXBlPWEudHlwZSx0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1hLmRlZmF1bHRQcmV2ZW50ZWR8fHZvaWQgMD09PWEuZGVmYXVsdFByZXZlbnRlZCYmYS5yZXR1cm5WYWx1ZT09PSExP2FhOmJhKTp0aGlzLnR5cGU9YSxiJiZtLmV4dGVuZCh0aGlzLGIpLHRoaXMudGltZVN0YW1wPWEmJmEudGltZVN0YW1wfHxtLm5vdygpLHZvaWQodGhpc1ttLmV4cGFuZG9dPSEwKSk6bmV3IG0uRXZlbnQoYSxiKX0sbS5FdmVudC5wcm90b3R5cGU9e2lzRGVmYXVsdFByZXZlbnRlZDpiYSxpc1Byb3BhZ2F0aW9uU3RvcHBlZDpiYSxpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZDpiYSxwcmV2ZW50RGVmYXVsdDpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1hYSxhJiYoYS5wcmV2ZW50RGVmYXVsdD9hLnByZXZlbnREZWZhdWx0KCk6YS5yZXR1cm5WYWx1ZT0hMSl9LHN0b3BQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkPWFhLGEmJihhLnN0b3BQcm9wYWdhdGlvbiYmYS5zdG9wUHJvcGFnYXRpb24oKSxhLmNhbmNlbEJ1YmJsZT0hMCl9LHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkPWFhLGEmJmEuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uJiZhLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpLHRoaXMuc3RvcFByb3BhZ2F0aW9uKCl9fSxtLmVhY2goe21vdXNlZW50ZXI6XCJtb3VzZW92ZXJcIixtb3VzZWxlYXZlOlwibW91c2VvdXRcIixwb2ludGVyZW50ZXI6XCJwb2ludGVyb3ZlclwiLHBvaW50ZXJsZWF2ZTpcInBvaW50ZXJvdXRcIn0sZnVuY3Rpb24oYSxiKXttLmV2ZW50LnNwZWNpYWxbYV09e2RlbGVnYXRlVHlwZTpiLGJpbmRUeXBlOmIsaGFuZGxlOmZ1bmN0aW9uKGEpe3ZhciBjLGQ9dGhpcyxlPWEucmVsYXRlZFRhcmdldCxmPWEuaGFuZGxlT2JqO3JldHVybighZXx8ZSE9PWQmJiFtLmNvbnRhaW5zKGQsZSkpJiYoYS50eXBlPWYub3JpZ1R5cGUsYz1mLmhhbmRsZXIuYXBwbHkodGhpcyxhcmd1bWVudHMpLGEudHlwZT1iKSxjfX19KSxrLnN1Ym1pdEJ1YmJsZXN8fChtLmV2ZW50LnNwZWNpYWwuc3VibWl0PXtzZXR1cDpmdW5jdGlvbigpe3JldHVybiBtLm5vZGVOYW1lKHRoaXMsXCJmb3JtXCIpPyExOnZvaWQgbS5ldmVudC5hZGQodGhpcyxcImNsaWNrLl9zdWJtaXQga2V5cHJlc3MuX3N1Ym1pdFwiLGZ1bmN0aW9uKGEpe3ZhciBiPWEudGFyZ2V0LGM9bS5ub2RlTmFtZShiLFwiaW5wdXRcIil8fG0ubm9kZU5hbWUoYixcImJ1dHRvblwiKT9iLmZvcm06dm9pZCAwO2MmJiFtLl9kYXRhKGMsXCJzdWJtaXRCdWJibGVzXCIpJiYobS5ldmVudC5hZGQoYyxcInN1Ym1pdC5fc3VibWl0XCIsZnVuY3Rpb24oYSl7YS5fc3VibWl0X2J1YmJsZT0hMH0pLG0uX2RhdGEoYyxcInN1Ym1pdEJ1YmJsZXNcIiwhMCkpfSl9LHBvc3REaXNwYXRjaDpmdW5jdGlvbihhKXthLl9zdWJtaXRfYnViYmxlJiYoZGVsZXRlIGEuX3N1Ym1pdF9idWJibGUsdGhpcy5wYXJlbnROb2RlJiYhYS5pc1RyaWdnZXImJm0uZXZlbnQuc2ltdWxhdGUoXCJzdWJtaXRcIix0aGlzLnBhcmVudE5vZGUsYSwhMCkpfSx0ZWFyZG93bjpmdW5jdGlvbigpe3JldHVybiBtLm5vZGVOYW1lKHRoaXMsXCJmb3JtXCIpPyExOnZvaWQgbS5ldmVudC5yZW1vdmUodGhpcyxcIi5fc3VibWl0XCIpfX0pLGsuY2hhbmdlQnViYmxlc3x8KG0uZXZlbnQuc3BlY2lhbC5jaGFuZ2U9e3NldHVwOmZ1bmN0aW9uKCl7cmV0dXJuIFgudGVzdCh0aGlzLm5vZGVOYW1lKT8oKFwiY2hlY2tib3hcIj09PXRoaXMudHlwZXx8XCJyYWRpb1wiPT09dGhpcy50eXBlKSYmKG0uZXZlbnQuYWRkKHRoaXMsXCJwcm9wZXJ0eWNoYW5nZS5fY2hhbmdlXCIsZnVuY3Rpb24oYSl7XCJjaGVja2VkXCI9PT1hLm9yaWdpbmFsRXZlbnQucHJvcGVydHlOYW1lJiYodGhpcy5fanVzdF9jaGFuZ2VkPSEwKX0pLG0uZXZlbnQuYWRkKHRoaXMsXCJjbGljay5fY2hhbmdlXCIsZnVuY3Rpb24oYSl7dGhpcy5fanVzdF9jaGFuZ2VkJiYhYS5pc1RyaWdnZXImJih0aGlzLl9qdXN0X2NoYW5nZWQ9ITEpLG0uZXZlbnQuc2ltdWxhdGUoXCJjaGFuZ2VcIix0aGlzLGEsITApfSkpLCExKTp2b2lkIG0uZXZlbnQuYWRkKHRoaXMsXCJiZWZvcmVhY3RpdmF0ZS5fY2hhbmdlXCIsZnVuY3Rpb24oYSl7dmFyIGI9YS50YXJnZXQ7WC50ZXN0KGIubm9kZU5hbWUpJiYhbS5fZGF0YShiLFwiY2hhbmdlQnViYmxlc1wiKSYmKG0uZXZlbnQuYWRkKGIsXCJjaGFuZ2UuX2NoYW5nZVwiLGZ1bmN0aW9uKGEpeyF0aGlzLnBhcmVudE5vZGV8fGEuaXNTaW11bGF0ZWR8fGEuaXNUcmlnZ2VyfHxtLmV2ZW50LnNpbXVsYXRlKFwiY2hhbmdlXCIsdGhpcy5wYXJlbnROb2RlLGEsITApfSksbS5fZGF0YShiLFwiY2hhbmdlQnViYmxlc1wiLCEwKSl9KX0saGFuZGxlOmZ1bmN0aW9uKGEpe3ZhciBiPWEudGFyZ2V0O3JldHVybiB0aGlzIT09Ynx8YS5pc1NpbXVsYXRlZHx8YS5pc1RyaWdnZXJ8fFwicmFkaW9cIiE9PWIudHlwZSYmXCJjaGVja2JveFwiIT09Yi50eXBlP2EuaGFuZGxlT2JqLmhhbmRsZXIuYXBwbHkodGhpcyxhcmd1bWVudHMpOnZvaWQgMH0sdGVhcmRvd246ZnVuY3Rpb24oKXtyZXR1cm4gbS5ldmVudC5yZW1vdmUodGhpcyxcIi5fY2hhbmdlXCIpLCFYLnRlc3QodGhpcy5ub2RlTmFtZSl9fSksay5mb2N1c2luQnViYmxlc3x8bS5lYWNoKHtmb2N1czpcImZvY3VzaW5cIixibHVyOlwiZm9jdXNvdXRcIn0sZnVuY3Rpb24oYSxiKXt2YXIgYz1mdW5jdGlvbihhKXttLmV2ZW50LnNpbXVsYXRlKGIsYS50YXJnZXQsbS5ldmVudC5maXgoYSksITApfTttLmV2ZW50LnNwZWNpYWxbYl09e3NldHVwOmZ1bmN0aW9uKCl7dmFyIGQ9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLGU9bS5fZGF0YShkLGIpO2V8fGQuYWRkRXZlbnRMaXN0ZW5lcihhLGMsITApLG0uX2RhdGEoZCxiLChlfHwwKSsxKX0sdGVhcmRvd246ZnVuY3Rpb24oKXt2YXIgZD10aGlzLm93bmVyRG9jdW1lbnR8fHRoaXMsZT1tLl9kYXRhKGQsYiktMTtlP20uX2RhdGEoZCxiLGUpOihkLnJlbW92ZUV2ZW50TGlzdGVuZXIoYSxjLCEwKSxtLl9yZW1vdmVEYXRhKGQsYikpfX19KSxtLmZuLmV4dGVuZCh7b246ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZixnO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBhKXtcInN0cmluZ1wiIT10eXBlb2YgYiYmKGM9Y3x8YixiPXZvaWQgMCk7Zm9yKGYgaW4gYSl0aGlzLm9uKGYsYixjLGFbZl0sZSk7cmV0dXJuIHRoaXN9aWYobnVsbD09YyYmbnVsbD09ZD8oZD1iLGM9Yj12b2lkIDApOm51bGw9PWQmJihcInN0cmluZ1wiPT10eXBlb2YgYj8oZD1jLGM9dm9pZCAwKTooZD1jLGM9YixiPXZvaWQgMCkpLGQ9PT0hMSlkPWJhO2Vsc2UgaWYoIWQpcmV0dXJuIHRoaXM7cmV0dXJuIDE9PT1lJiYoZz1kLGQ9ZnVuY3Rpb24oYSl7cmV0dXJuIG0oKS5vZmYoYSksZy5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LGQuZ3VpZD1nLmd1aWR8fChnLmd1aWQ9bS5ndWlkKyspKSx0aGlzLmVhY2goZnVuY3Rpb24oKXttLmV2ZW50LmFkZCh0aGlzLGEsZCxjLGIpfSl9LG9uZTpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gdGhpcy5vbihhLGIsYyxkLDEpfSxvZmY6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGU7aWYoYSYmYS5wcmV2ZW50RGVmYXVsdCYmYS5oYW5kbGVPYmopcmV0dXJuIGQ9YS5oYW5kbGVPYmosbShhLmRlbGVnYXRlVGFyZ2V0KS5vZmYoZC5uYW1lc3BhY2U/ZC5vcmlnVHlwZStcIi5cIitkLm5hbWVzcGFjZTpkLm9yaWdUeXBlLGQuc2VsZWN0b3IsZC5oYW5kbGVyKSx0aGlzO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBhKXtmb3IoZSBpbiBhKXRoaXMub2ZmKGUsYixhW2VdKTtyZXR1cm4gdGhpc31yZXR1cm4oYj09PSExfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBiKSYmKGM9YixiPXZvaWQgMCksYz09PSExJiYoYz1iYSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7bS5ldmVudC5yZW1vdmUodGhpcyxhLGMsYil9KX0sdHJpZ2dlcjpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXttLmV2ZW50LnRyaWdnZXIoYSxiLHRoaXMpfSl9LHRyaWdnZXJIYW5kbGVyOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpc1swXTtyZXR1cm4gYz9tLmV2ZW50LnRyaWdnZXIoYSxiLGMsITApOnZvaWQgMH19KTtmdW5jdGlvbiBkYShhKXt2YXIgYj1lYS5zcGxpdChcInxcIiksYz1hLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtpZihjLmNyZWF0ZUVsZW1lbnQpd2hpbGUoYi5sZW5ndGgpYy5jcmVhdGVFbGVtZW50KGIucG9wKCkpO3JldHVybiBjfXZhciBlYT1cImFiYnJ8YXJ0aWNsZXxhc2lkZXxhdWRpb3xiZGl8Y2FudmFzfGRhdGF8ZGF0YWxpc3R8ZGV0YWlsc3xmaWdjYXB0aW9ufGZpZ3VyZXxmb290ZXJ8aGVhZGVyfGhncm91cHxtYXJrfG1ldGVyfG5hdnxvdXRwdXR8cHJvZ3Jlc3N8c2VjdGlvbnxzdW1tYXJ5fHRpbWV8dmlkZW9cIixmYT0vIGpRdWVyeVxcZCs9XCIoPzpudWxsfFxcZCspXCIvZyxnYT1uZXcgUmVnRXhwKFwiPCg/OlwiK2VhK1wiKVtcXFxccy8+XVwiLFwiaVwiKSxoYT0vXlxccysvLGlhPS88KD8hYXJlYXxicnxjb2x8ZW1iZWR8aHJ8aW1nfGlucHV0fGxpbmt8bWV0YXxwYXJhbSkoKFtcXHc6XSspW14+XSopXFwvPi9naSxqYT0vPChbXFx3Ol0rKS8sa2E9Lzx0Ym9keS9pLGxhPS88fCYjP1xcdys7LyxtYT0vPCg/OnNjcmlwdHxzdHlsZXxsaW5rKS9pLG5hPS9jaGVja2VkXFxzKig/OltePV18PVxccyouY2hlY2tlZC4pL2ksb2E9L14kfFxcLyg/OmphdmF8ZWNtYSlzY3JpcHQvaSxwYT0vXnRydWVcXC8oLiopLyxxYT0vXlxccyo8ISg/OlxcW0NEQVRBXFxbfC0tKXwoPzpcXF1cXF18LS0pPlxccyokL2cscmE9e29wdGlvbjpbMSxcIjxzZWxlY3QgbXVsdGlwbGU9J211bHRpcGxlJz5cIixcIjwvc2VsZWN0PlwiXSxsZWdlbmQ6WzEsXCI8ZmllbGRzZXQ+XCIsXCI8L2ZpZWxkc2V0PlwiXSxhcmVhOlsxLFwiPG1hcD5cIixcIjwvbWFwPlwiXSxwYXJhbTpbMSxcIjxvYmplY3Q+XCIsXCI8L29iamVjdD5cIl0sdGhlYWQ6WzEsXCI8dGFibGU+XCIsXCI8L3RhYmxlPlwiXSx0cjpbMixcIjx0YWJsZT48dGJvZHk+XCIsXCI8L3Rib2R5PjwvdGFibGU+XCJdLGNvbDpbMixcIjx0YWJsZT48dGJvZHk+PC90Ym9keT48Y29sZ3JvdXA+XCIsXCI8L2NvbGdyb3VwPjwvdGFibGU+XCJdLHRkOlszLFwiPHRhYmxlPjx0Ym9keT48dHI+XCIsXCI8L3RyPjwvdGJvZHk+PC90YWJsZT5cIl0sX2RlZmF1bHQ6ay5odG1sU2VyaWFsaXplP1swLFwiXCIsXCJcIl06WzEsXCJYPGRpdj5cIixcIjwvZGl2PlwiXX0sc2E9ZGEoeSksdGE9c2EuYXBwZW5kQ2hpbGQoeS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtyYS5vcHRncm91cD1yYS5vcHRpb24scmEudGJvZHk9cmEudGZvb3Q9cmEuY29sZ3JvdXA9cmEuY2FwdGlvbj1yYS50aGVhZCxyYS50aD1yYS50ZDtmdW5jdGlvbiB1YShhLGIpe3ZhciBjLGQsZT0wLGY9dHlwZW9mIGEuZ2V0RWxlbWVudHNCeVRhZ05hbWUhPT1LP2EuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYnx8XCIqXCIpOnR5cGVvZiBhLnF1ZXJ5U2VsZWN0b3JBbGwhPT1LP2EucXVlcnlTZWxlY3RvckFsbChifHxcIipcIik6dm9pZCAwO2lmKCFmKWZvcihmPVtdLGM9YS5jaGlsZE5vZGVzfHxhO251bGwhPShkPWNbZV0pO2UrKykhYnx8bS5ub2RlTmFtZShkLGIpP2YucHVzaChkKTptLm1lcmdlKGYsdWEoZCxiKSk7cmV0dXJuIHZvaWQgMD09PWJ8fGImJm0ubm9kZU5hbWUoYSxiKT9tLm1lcmdlKFthXSxmKTpmfWZ1bmN0aW9uIHZhKGEpe1cudGVzdChhLnR5cGUpJiYoYS5kZWZhdWx0Q2hlY2tlZD1hLmNoZWNrZWQpfWZ1bmN0aW9uIHdhKGEsYil7cmV0dXJuIG0ubm9kZU5hbWUoYSxcInRhYmxlXCIpJiZtLm5vZGVOYW1lKDExIT09Yi5ub2RlVHlwZT9iOmIuZmlyc3RDaGlsZCxcInRyXCIpP2EuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0Ym9keVwiKVswXXx8YS5hcHBlbmRDaGlsZChhLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpKTphfWZ1bmN0aW9uIHhhKGEpe3JldHVybiBhLnR5cGU9KG51bGwhPT1tLmZpbmQuYXR0cihhLFwidHlwZVwiKSkrXCIvXCIrYS50eXBlLGF9ZnVuY3Rpb24geWEoYSl7dmFyIGI9cGEuZXhlYyhhLnR5cGUpO3JldHVybiBiP2EudHlwZT1iWzFdOmEucmVtb3ZlQXR0cmlidXRlKFwidHlwZVwiKSxhfWZ1bmN0aW9uIHphKGEsYil7Zm9yKHZhciBjLGQ9MDtudWxsIT0oYz1hW2RdKTtkKyspbS5fZGF0YShjLFwiZ2xvYmFsRXZhbFwiLCFifHxtLl9kYXRhKGJbZF0sXCJnbG9iYWxFdmFsXCIpKX1mdW5jdGlvbiBBYShhLGIpe2lmKDE9PT1iLm5vZGVUeXBlJiZtLmhhc0RhdGEoYSkpe3ZhciBjLGQsZSxmPW0uX2RhdGEoYSksZz1tLl9kYXRhKGIsZiksaD1mLmV2ZW50cztpZihoKXtkZWxldGUgZy5oYW5kbGUsZy5ldmVudHM9e307Zm9yKGMgaW4gaClmb3IoZD0wLGU9aFtjXS5sZW5ndGg7ZT5kO2QrKyltLmV2ZW50LmFkZChiLGMsaFtjXVtkXSl9Zy5kYXRhJiYoZy5kYXRhPW0uZXh0ZW5kKHt9LGcuZGF0YSkpfX1mdW5jdGlvbiBCYShhLGIpe3ZhciBjLGQsZTtpZigxPT09Yi5ub2RlVHlwZSl7aWYoYz1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCksIWsubm9DbG9uZUV2ZW50JiZiW20uZXhwYW5kb10pe2U9bS5fZGF0YShiKTtmb3IoZCBpbiBlLmV2ZW50cyltLnJlbW92ZUV2ZW50KGIsZCxlLmhhbmRsZSk7Yi5yZW1vdmVBdHRyaWJ1dGUobS5leHBhbmRvKX1cInNjcmlwdFwiPT09YyYmYi50ZXh0IT09YS50ZXh0Pyh4YShiKS50ZXh0PWEudGV4dCx5YShiKSk6XCJvYmplY3RcIj09PWM/KGIucGFyZW50Tm9kZSYmKGIub3V0ZXJIVE1MPWEub3V0ZXJIVE1MKSxrLmh0bWw1Q2xvbmUmJmEuaW5uZXJIVE1MJiYhbS50cmltKGIuaW5uZXJIVE1MKSYmKGIuaW5uZXJIVE1MPWEuaW5uZXJIVE1MKSk6XCJpbnB1dFwiPT09YyYmVy50ZXN0KGEudHlwZSk/KGIuZGVmYXVsdENoZWNrZWQ9Yi5jaGVja2VkPWEuY2hlY2tlZCxiLnZhbHVlIT09YS52YWx1ZSYmKGIudmFsdWU9YS52YWx1ZSkpOlwib3B0aW9uXCI9PT1jP2IuZGVmYXVsdFNlbGVjdGVkPWIuc2VsZWN0ZWQ9YS5kZWZhdWx0U2VsZWN0ZWQ6KFwiaW5wdXRcIj09PWN8fFwidGV4dGFyZWFcIj09PWMpJiYoYi5kZWZhdWx0VmFsdWU9YS5kZWZhdWx0VmFsdWUpfX1tLmV4dGVuZCh7Y2xvbmU6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZixnLGgsaT1tLmNvbnRhaW5zKGEub3duZXJEb2N1bWVudCxhKTtpZihrLmh0bWw1Q2xvbmV8fG0uaXNYTUxEb2MoYSl8fCFnYS50ZXN0KFwiPFwiK2Eubm9kZU5hbWUrXCI+XCIpP2Y9YS5jbG9uZU5vZGUoITApOih0YS5pbm5lckhUTUw9YS5vdXRlckhUTUwsdGEucmVtb3ZlQ2hpbGQoZj10YS5maXJzdENoaWxkKSksIShrLm5vQ2xvbmVFdmVudCYmay5ub0Nsb25lQ2hlY2tlZHx8MSE9PWEubm9kZVR5cGUmJjExIT09YS5ub2RlVHlwZXx8bS5pc1hNTERvYyhhKSkpZm9yKGQ9dWEoZiksaD11YShhKSxnPTA7bnVsbCE9KGU9aFtnXSk7KytnKWRbZ10mJkJhKGUsZFtnXSk7aWYoYilpZihjKWZvcihoPWh8fHVhKGEpLGQ9ZHx8dWEoZiksZz0wO251bGwhPShlPWhbZ10pO2crKylBYShlLGRbZ10pO2Vsc2UgQWEoYSxmKTtyZXR1cm4gZD11YShmLFwic2NyaXB0XCIpLGQubGVuZ3RoPjAmJnphKGQsIWkmJnVhKGEsXCJzY3JpcHRcIikpLGQ9aD1lPW51bGwsZn0sYnVpbGRGcmFnbWVudDpmdW5jdGlvbihhLGIsYyxkKXtmb3IodmFyIGUsZixnLGgsaSxqLGwsbj1hLmxlbmd0aCxvPWRhKGIpLHA9W10scT0wO24+cTtxKyspaWYoZj1hW3FdLGZ8fDA9PT1mKWlmKFwib2JqZWN0XCI9PT1tLnR5cGUoZikpbS5tZXJnZShwLGYubm9kZVR5cGU/W2ZdOmYpO2Vsc2UgaWYobGEudGVzdChmKSl7aD1ofHxvLmFwcGVuZENoaWxkKGIuY3JlYXRlRWxlbWVudChcImRpdlwiKSksaT0oamEuZXhlYyhmKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCksbD1yYVtpXXx8cmEuX2RlZmF1bHQsaC5pbm5lckhUTUw9bFsxXStmLnJlcGxhY2UoaWEsXCI8JDE+PC8kMj5cIikrbFsyXSxlPWxbMF07d2hpbGUoZS0tKWg9aC5sYXN0Q2hpbGQ7aWYoIWsubGVhZGluZ1doaXRlc3BhY2UmJmhhLnRlc3QoZikmJnAucHVzaChiLmNyZWF0ZVRleHROb2RlKGhhLmV4ZWMoZilbMF0pKSwhay50Ym9keSl7Zj1cInRhYmxlXCIhPT1pfHxrYS50ZXN0KGYpP1wiPHRhYmxlPlwiIT09bFsxXXx8a2EudGVzdChmKT8wOmg6aC5maXJzdENoaWxkLGU9ZiYmZi5jaGlsZE5vZGVzLmxlbmd0aDt3aGlsZShlLS0pbS5ub2RlTmFtZShqPWYuY2hpbGROb2Rlc1tlXSxcInRib2R5XCIpJiYhai5jaGlsZE5vZGVzLmxlbmd0aCYmZi5yZW1vdmVDaGlsZChqKX1tLm1lcmdlKHAsaC5jaGlsZE5vZGVzKSxoLnRleHRDb250ZW50PVwiXCI7d2hpbGUoaC5maXJzdENoaWxkKWgucmVtb3ZlQ2hpbGQoaC5maXJzdENoaWxkKTtoPW8ubGFzdENoaWxkfWVsc2UgcC5wdXNoKGIuY3JlYXRlVGV4dE5vZGUoZikpO2gmJm8ucmVtb3ZlQ2hpbGQoaCksay5hcHBlbmRDaGVja2VkfHxtLmdyZXAodWEocCxcImlucHV0XCIpLHZhKSxxPTA7d2hpbGUoZj1wW3ErK10paWYoKCFkfHwtMT09PW0uaW5BcnJheShmLGQpKSYmKGc9bS5jb250YWlucyhmLm93bmVyRG9jdW1lbnQsZiksaD11YShvLmFwcGVuZENoaWxkKGYpLFwic2NyaXB0XCIpLGcmJnphKGgpLGMpKXtlPTA7d2hpbGUoZj1oW2UrK10pb2EudGVzdChmLnR5cGV8fFwiXCIpJiZjLnB1c2goZil9cmV0dXJuIGg9bnVsbCxvfSxjbGVhbkRhdGE6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGQsZSxmLGcsaD0wLGk9bS5leHBhbmRvLGo9bS5jYWNoZSxsPWsuZGVsZXRlRXhwYW5kbyxuPW0uZXZlbnQuc3BlY2lhbDtudWxsIT0oZD1hW2hdKTtoKyspaWYoKGJ8fG0uYWNjZXB0RGF0YShkKSkmJihmPWRbaV0sZz1mJiZqW2ZdKSl7aWYoZy5ldmVudHMpZm9yKGUgaW4gZy5ldmVudHMpbltlXT9tLmV2ZW50LnJlbW92ZShkLGUpOm0ucmVtb3ZlRXZlbnQoZCxlLGcuaGFuZGxlKTtqW2ZdJiYoZGVsZXRlIGpbZl0sbD9kZWxldGUgZFtpXTp0eXBlb2YgZC5yZW1vdmVBdHRyaWJ1dGUhPT1LP2QucmVtb3ZlQXR0cmlidXRlKGkpOmRbaV09bnVsbCxjLnB1c2goZikpfX19KSxtLmZuLmV4dGVuZCh7dGV4dDpmdW5jdGlvbihhKXtyZXR1cm4gVih0aGlzLGZ1bmN0aW9uKGEpe3JldHVybiB2b2lkIDA9PT1hP20udGV4dCh0aGlzKTp0aGlzLmVtcHR5KCkuYXBwZW5kKCh0aGlzWzBdJiZ0aGlzWzBdLm93bmVyRG9jdW1lbnR8fHkpLmNyZWF0ZVRleHROb2RlKGEpKX0sbnVsbCxhLGFyZ3VtZW50cy5sZW5ndGgpfSxhcHBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kb21NYW5pcChhcmd1bWVudHMsZnVuY3Rpb24oYSl7aWYoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpe3ZhciBiPXdhKHRoaXMsYSk7Yi5hcHBlbmRDaGlsZChhKX19KX0scHJlcGVuZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmRvbU1hbmlwKGFyZ3VtZW50cyxmdW5jdGlvbihhKXtpZigxPT09dGhpcy5ub2RlVHlwZXx8MTE9PT10aGlzLm5vZGVUeXBlfHw5PT09dGhpcy5ub2RlVHlwZSl7dmFyIGI9d2EodGhpcyxhKTtiLmluc2VydEJlZm9yZShhLGIuZmlyc3RDaGlsZCl9fSl9LGJlZm9yZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmRvbU1hbmlwKGFyZ3VtZW50cyxmdW5jdGlvbihhKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSx0aGlzKX0pfSxhZnRlcjpmdW5jdGlvbigpe3JldHVybiB0aGlzLmRvbU1hbmlwKGFyZ3VtZW50cyxmdW5jdGlvbihhKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSx0aGlzLm5leHRTaWJsaW5nKX0pfSxyZW1vdmU6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGMsZD1hP20uZmlsdGVyKGEsdGhpcyk6dGhpcyxlPTA7bnVsbCE9KGM9ZFtlXSk7ZSsrKWJ8fDEhPT1jLm5vZGVUeXBlfHxtLmNsZWFuRGF0YSh1YShjKSksYy5wYXJlbnROb2RlJiYoYiYmbS5jb250YWlucyhjLm93bmVyRG9jdW1lbnQsYykmJnphKHVhKGMsXCJzY3JpcHRcIikpLGMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjKSk7cmV0dXJuIHRoaXN9LGVtcHR5OmZ1bmN0aW9uKCl7Zm9yKHZhciBhLGI9MDtudWxsIT0oYT10aGlzW2JdKTtiKyspezE9PT1hLm5vZGVUeXBlJiZtLmNsZWFuRGF0YSh1YShhLCExKSk7d2hpbGUoYS5maXJzdENoaWxkKWEucmVtb3ZlQ2hpbGQoYS5maXJzdENoaWxkKTthLm9wdGlvbnMmJm0ubm9kZU5hbWUoYSxcInNlbGVjdFwiKSYmKGEub3B0aW9ucy5sZW5ndGg9MCl9cmV0dXJuIHRoaXN9LGNsb25lOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGE9bnVsbD09YT8hMTphLGI9bnVsbD09Yj9hOmIsdGhpcy5tYXAoZnVuY3Rpb24oKXtyZXR1cm4gbS5jbG9uZSh0aGlzLGEsYil9KX0saHRtbDpmdW5jdGlvbihhKXtyZXR1cm4gVih0aGlzLGZ1bmN0aW9uKGEpe3ZhciBiPXRoaXNbMF18fHt9LGM9MCxkPXRoaXMubGVuZ3RoO2lmKHZvaWQgMD09PWEpcmV0dXJuIDE9PT1iLm5vZGVUeXBlP2IuaW5uZXJIVE1MLnJlcGxhY2UoZmEsXCJcIik6dm9pZCAwO2lmKCEoXCJzdHJpbmdcIiE9dHlwZW9mIGF8fG1hLnRlc3QoYSl8fCFrLmh0bWxTZXJpYWxpemUmJmdhLnRlc3QoYSl8fCFrLmxlYWRpbmdXaGl0ZXNwYWNlJiZoYS50ZXN0KGEpfHxyYVsoamEuZXhlYyhhKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCldKSl7YT1hLnJlcGxhY2UoaWEsXCI8JDE+PC8kMj5cIik7dHJ5e2Zvcig7ZD5jO2MrKyliPXRoaXNbY118fHt9LDE9PT1iLm5vZGVUeXBlJiYobS5jbGVhbkRhdGEodWEoYiwhMSkpLGIuaW5uZXJIVE1MPWEpO2I9MH1jYXRjaChlKXt9fWImJnRoaXMuZW1wdHkoKS5hcHBlbmQoYSl9LG51bGwsYSxhcmd1bWVudHMubGVuZ3RoKX0scmVwbGFjZVdpdGg6ZnVuY3Rpb24oKXt2YXIgYT1hcmd1bWVudHNbMF07cmV0dXJuIHRoaXMuZG9tTWFuaXAoYXJndW1lbnRzLGZ1bmN0aW9uKGIpe2E9dGhpcy5wYXJlbnROb2RlLG0uY2xlYW5EYXRhKHVhKHRoaXMpKSxhJiZhLnJlcGxhY2VDaGlsZChiLHRoaXMpfSksYSYmKGEubGVuZ3RofHxhLm5vZGVUeXBlKT90aGlzOnRoaXMucmVtb3ZlKCl9LGRldGFjaDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5yZW1vdmUoYSwhMCl9LGRvbU1hbmlwOmZ1bmN0aW9uKGEsYil7YT1lLmFwcGx5KFtdLGEpO3ZhciBjLGQsZixnLGgsaSxqPTAsbD10aGlzLmxlbmd0aCxuPXRoaXMsbz1sLTEscD1hWzBdLHE9bS5pc0Z1bmN0aW9uKHApO2lmKHF8fGw+MSYmXCJzdHJpbmdcIj09dHlwZW9mIHAmJiFrLmNoZWNrQ2xvbmUmJm5hLnRlc3QocCkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihjKXt2YXIgZD1uLmVxKGMpO3EmJihhWzBdPXAuY2FsbCh0aGlzLGMsZC5odG1sKCkpKSxkLmRvbU1hbmlwKGEsYil9KTtpZihsJiYoaT1tLmJ1aWxkRnJhZ21lbnQoYSx0aGlzWzBdLm93bmVyRG9jdW1lbnQsITEsdGhpcyksYz1pLmZpcnN0Q2hpbGQsMT09PWkuY2hpbGROb2Rlcy5sZW5ndGgmJihpPWMpLGMpKXtmb3IoZz1tLm1hcCh1YShpLFwic2NyaXB0XCIpLHhhKSxmPWcubGVuZ3RoO2w+ajtqKyspZD1pLGohPT1vJiYoZD1tLmNsb25lKGQsITAsITApLGYmJm0ubWVyZ2UoZyx1YShkLFwic2NyaXB0XCIpKSksYi5jYWxsKHRoaXNbal0sZCxqKTtpZihmKWZvcihoPWdbZy5sZW5ndGgtMV0ub3duZXJEb2N1bWVudCxtLm1hcChnLHlhKSxqPTA7Zj5qO2orKylkPWdbal0sb2EudGVzdChkLnR5cGV8fFwiXCIpJiYhbS5fZGF0YShkLFwiZ2xvYmFsRXZhbFwiKSYmbS5jb250YWlucyhoLGQpJiYoZC5zcmM/bS5fZXZhbFVybCYmbS5fZXZhbFVybChkLnNyYyk6bS5nbG9iYWxFdmFsKChkLnRleHR8fGQudGV4dENvbnRlbnR8fGQuaW5uZXJIVE1MfHxcIlwiKS5yZXBsYWNlKHFhLFwiXCIpKSk7aT1jPW51bGx9cmV0dXJuIHRoaXN9fSksbS5lYWNoKHthcHBlbmRUbzpcImFwcGVuZFwiLHByZXBlbmRUbzpcInByZXBlbmRcIixpbnNlcnRCZWZvcmU6XCJiZWZvcmVcIixpbnNlcnRBZnRlcjpcImFmdGVyXCIscmVwbGFjZUFsbDpcInJlcGxhY2VXaXRoXCJ9LGZ1bmN0aW9uKGEsYil7bS5mblthXT1mdW5jdGlvbihhKXtmb3IodmFyIGMsZD0wLGU9W10sZz1tKGEpLGg9Zy5sZW5ndGgtMTtoPj1kO2QrKyljPWQ9PT1oP3RoaXM6dGhpcy5jbG9uZSghMCksbShnW2RdKVtiXShjKSxmLmFwcGx5KGUsYy5nZXQoKSk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGUpfX0pO3ZhciBDYSxEYT17fTtmdW5jdGlvbiBFYShiLGMpe3ZhciBkLGU9bShjLmNyZWF0ZUVsZW1lbnQoYikpLmFwcGVuZFRvKGMuYm9keSksZj1hLmdldERlZmF1bHRDb21wdXRlZFN0eWxlJiYoZD1hLmdldERlZmF1bHRDb21wdXRlZFN0eWxlKGVbMF0pKT9kLmRpc3BsYXk6bS5jc3MoZVswXSxcImRpc3BsYXlcIik7cmV0dXJuIGUuZGV0YWNoKCksZn1mdW5jdGlvbiBGYShhKXt2YXIgYj15LGM9RGFbYV07cmV0dXJuIGN8fChjPUVhKGEsYiksXCJub25lXCIhPT1jJiZjfHwoQ2E9KENhfHxtKFwiPGlmcmFtZSBmcmFtZWJvcmRlcj0nMCcgd2lkdGg9JzAnIGhlaWdodD0nMCcvPlwiKSkuYXBwZW5kVG8oYi5kb2N1bWVudEVsZW1lbnQpLGI9KENhWzBdLmNvbnRlbnRXaW5kb3d8fENhWzBdLmNvbnRlbnREb2N1bWVudCkuZG9jdW1lbnQsYi53cml0ZSgpLGIuY2xvc2UoKSxjPUVhKGEsYiksQ2EuZGV0YWNoKCkpLERhW2FdPWMpLGN9IWZ1bmN0aW9uKCl7dmFyIGE7ay5zaHJpbmtXcmFwQmxvY2tzPWZ1bmN0aW9uKCl7aWYobnVsbCE9YSlyZXR1cm4gYTthPSExO3ZhciBiLGMsZDtyZXR1cm4gYz15LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXSxjJiZjLnN0eWxlPyhiPXkuY3JlYXRlRWxlbWVudChcImRpdlwiKSxkPXkuY3JlYXRlRWxlbWVudChcImRpdlwiKSxkLnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjphYnNvbHV0ZTtib3JkZXI6MDt3aWR0aDowO2hlaWdodDowO3RvcDowO2xlZnQ6LTk5OTlweFwiLGMuYXBwZW5kQ2hpbGQoZCkuYXBwZW5kQ2hpbGQoYiksdHlwZW9mIGIuc3R5bGUuem9vbSE9PUsmJihiLnN0eWxlLmNzc1RleHQ9XCItd2Via2l0LWJveC1zaXppbmc6Y29udGVudC1ib3g7LW1vei1ib3gtc2l6aW5nOmNvbnRlbnQtYm94O2JveC1zaXppbmc6Y29udGVudC1ib3g7ZGlzcGxheTpibG9jazttYXJnaW46MDtib3JkZXI6MDtwYWRkaW5nOjFweDt3aWR0aDoxcHg7em9vbToxXCIsYi5hcHBlbmRDaGlsZCh5LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLnN0eWxlLndpZHRoPVwiNXB4XCIsYT0zIT09Yi5vZmZzZXRXaWR0aCksYy5yZW1vdmVDaGlsZChkKSxhKTp2b2lkIDB9fSgpO3ZhciBHYT0vXm1hcmdpbi8sSGE9bmV3IFJlZ0V4cChcIl4oXCIrUytcIikoPyFweClbYS16JV0rJFwiLFwiaVwiKSxJYSxKYSxLYT0vXih0b3B8cmlnaHR8Ym90dG9tfGxlZnQpJC87YS5nZXRDb21wdXRlZFN0eWxlPyhJYT1mdW5jdGlvbihiKXtyZXR1cm4gYi5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3Lm9wZW5lcj9iLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShiLG51bGwpOmEuZ2V0Q29tcHV0ZWRTdHlsZShiLG51bGwpfSxKYT1mdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmLGcsaD1hLnN0eWxlO3JldHVybiBjPWN8fElhKGEpLGc9Yz9jLmdldFByb3BlcnR5VmFsdWUoYil8fGNbYl06dm9pZCAwLGMmJihcIlwiIT09Z3x8bS5jb250YWlucyhhLm93bmVyRG9jdW1lbnQsYSl8fChnPW0uc3R5bGUoYSxiKSksSGEudGVzdChnKSYmR2EudGVzdChiKSYmKGQ9aC53aWR0aCxlPWgubWluV2lkdGgsZj1oLm1heFdpZHRoLGgubWluV2lkdGg9aC5tYXhXaWR0aD1oLndpZHRoPWcsZz1jLndpZHRoLGgud2lkdGg9ZCxoLm1pbldpZHRoPWUsaC5tYXhXaWR0aD1mKSksdm9pZCAwPT09Zz9nOmcrXCJcIn0pOnkuZG9jdW1lbnRFbGVtZW50LmN1cnJlbnRTdHlsZSYmKElhPWZ1bmN0aW9uKGEpe3JldHVybiBhLmN1cnJlbnRTdHlsZX0sSmE9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZixnLGg9YS5zdHlsZTtyZXR1cm4gYz1jfHxJYShhKSxnPWM/Y1tiXTp2b2lkIDAsbnVsbD09ZyYmaCYmaFtiXSYmKGc9aFtiXSksSGEudGVzdChnKSYmIUthLnRlc3QoYikmJihkPWgubGVmdCxlPWEucnVudGltZVN0eWxlLGY9ZSYmZS5sZWZ0LGYmJihlLmxlZnQ9YS5jdXJyZW50U3R5bGUubGVmdCksaC5sZWZ0PVwiZm9udFNpemVcIj09PWI/XCIxZW1cIjpnLGc9aC5waXhlbExlZnQrXCJweFwiLGgubGVmdD1kLGYmJihlLmxlZnQ9ZikpLHZvaWQgMD09PWc/ZzpnK1wiXCJ8fFwiYXV0b1wifSk7ZnVuY3Rpb24gTGEoYSxiKXtyZXR1cm57Z2V0OmZ1bmN0aW9uKCl7dmFyIGM9YSgpO2lmKG51bGwhPWMpcmV0dXJuIGM/dm9pZCBkZWxldGUgdGhpcy5nZXQ6KHRoaXMuZ2V0PWIpLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fSFmdW5jdGlvbigpe3ZhciBiLGMsZCxlLGYsZyxoO2lmKGI9eS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGIuaW5uZXJIVE1MPVwiICA8bGluay8+PHRhYmxlPjwvdGFibGU+PGEgaHJlZj0nL2EnPmE8L2E+PGlucHV0IHR5cGU9J2NoZWNrYm94Jy8+XCIsZD1iLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYVwiKVswXSxjPWQmJmQuc3R5bGUpe2MuY3NzVGV4dD1cImZsb2F0OmxlZnQ7b3BhY2l0eTouNVwiLGsub3BhY2l0eT1cIjAuNVwiPT09Yy5vcGFjaXR5LGsuY3NzRmxvYXQ9ISFjLmNzc0Zsb2F0LGIuc3R5bGUuYmFja2dyb3VuZENsaXA9XCJjb250ZW50LWJveFwiLGIuY2xvbmVOb2RlKCEwKS5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cIlwiLGsuY2xlYXJDbG9uZVN0eWxlPVwiY29udGVudC1ib3hcIj09PWIuc3R5bGUuYmFja2dyb3VuZENsaXAsay5ib3hTaXppbmc9XCJcIj09PWMuYm94U2l6aW5nfHxcIlwiPT09Yy5Nb3pCb3hTaXppbmd8fFwiXCI9PT1jLldlYmtpdEJveFNpemluZyxtLmV4dGVuZChrLHtyZWxpYWJsZUhpZGRlbk9mZnNldHM6ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbD09ZyYmaSgpLGd9LGJveFNpemluZ1JlbGlhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIG51bGw9PWYmJmkoKSxmfSxwaXhlbFBvc2l0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuIG51bGw9PWUmJmkoKSxlfSxyZWxpYWJsZU1hcmdpblJpZ2h0OmZ1bmN0aW9uKCl7cmV0dXJuIG51bGw9PWgmJmkoKSxofX0pO2Z1bmN0aW9uIGkoKXt2YXIgYixjLGQsaTtjPXkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdLGMmJmMuc3R5bGUmJihiPXkuY3JlYXRlRWxlbWVudChcImRpdlwiKSxkPXkuY3JlYXRlRWxlbWVudChcImRpdlwiKSxkLnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjphYnNvbHV0ZTtib3JkZXI6MDt3aWR0aDowO2hlaWdodDowO3RvcDowO2xlZnQ6LTk5OTlweFwiLGMuYXBwZW5kQ2hpbGQoZCkuYXBwZW5kQ2hpbGQoYiksYi5zdHlsZS5jc3NUZXh0PVwiLXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7LW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6YmxvY2s7bWFyZ2luLXRvcDoxJTt0b3A6MSU7Ym9yZGVyOjFweDtwYWRkaW5nOjFweDt3aWR0aDo0cHg7cG9zaXRpb246YWJzb2x1dGVcIixlPWY9ITEsaD0hMCxhLmdldENvbXB1dGVkU3R5bGUmJihlPVwiMSVcIiE9PShhLmdldENvbXB1dGVkU3R5bGUoYixudWxsKXx8e30pLnRvcCxmPVwiNHB4XCI9PT0oYS5nZXRDb21wdXRlZFN0eWxlKGIsbnVsbCl8fHt3aWR0aDpcIjRweFwifSkud2lkdGgsaT1iLmFwcGVuZENoaWxkKHkuY3JlYXRlRWxlbWVudChcImRpdlwiKSksaS5zdHlsZS5jc3NUZXh0PWIuc3R5bGUuY3NzVGV4dD1cIi13ZWJraXQtYm94LXNpemluZzpjb250ZW50LWJveDstbW96LWJveC1zaXppbmc6Y29udGVudC1ib3g7Ym94LXNpemluZzpjb250ZW50LWJveDtkaXNwbGF5OmJsb2NrO21hcmdpbjowO2JvcmRlcjowO3BhZGRpbmc6MFwiLGkuc3R5bGUubWFyZ2luUmlnaHQ9aS5zdHlsZS53aWR0aD1cIjBcIixiLnN0eWxlLndpZHRoPVwiMXB4XCIsaD0hcGFyc2VGbG9hdCgoYS5nZXRDb21wdXRlZFN0eWxlKGksbnVsbCl8fHt9KS5tYXJnaW5SaWdodCksYi5yZW1vdmVDaGlsZChpKSksYi5pbm5lckhUTUw9XCI8dGFibGU+PHRyPjx0ZD48L3RkPjx0ZD50PC90ZD48L3RyPjwvdGFibGU+XCIsaT1iLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGRcIiksaVswXS5zdHlsZS5jc3NUZXh0PVwibWFyZ2luOjA7Ym9yZGVyOjA7cGFkZGluZzowO2Rpc3BsYXk6bm9uZVwiLGc9MD09PWlbMF0ub2Zmc2V0SGVpZ2h0LGcmJihpWzBdLnN0eWxlLmRpc3BsYXk9XCJcIixpWzFdLnN0eWxlLmRpc3BsYXk9XCJub25lXCIsZz0wPT09aVswXS5vZmZzZXRIZWlnaHQpLGMucmVtb3ZlQ2hpbGQoZCkpfX19KCksbS5zd2FwPWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlLGYsZz17fTtmb3IoZiBpbiBiKWdbZl09YS5zdHlsZVtmXSxhLnN0eWxlW2ZdPWJbZl07ZT1jLmFwcGx5KGEsZHx8W10pO2ZvcihmIGluIGIpYS5zdHlsZVtmXT1nW2ZdO3JldHVybiBlfTt2YXIgTWE9L2FscGhhXFwoW14pXSpcXCkvaSxOYT0vb3BhY2l0eVxccyo9XFxzKihbXildKikvLE9hPS9eKG5vbmV8dGFibGUoPyEtY1tlYV0pLispLyxQYT1uZXcgUmVnRXhwKFwiXihcIitTK1wiKSguKikkXCIsXCJpXCIpLFFhPW5ldyBSZWdFeHAoXCJeKFsrLV0pPShcIitTK1wiKVwiLFwiaVwiKSxSYT17cG9zaXRpb246XCJhYnNvbHV0ZVwiLHZpc2liaWxpdHk6XCJoaWRkZW5cIixkaXNwbGF5OlwiYmxvY2tcIn0sU2E9e2xldHRlclNwYWNpbmc6XCIwXCIsZm9udFdlaWdodDpcIjQwMFwifSxUYT1bXCJXZWJraXRcIixcIk9cIixcIk1velwiLFwibXNcIl07ZnVuY3Rpb24gVWEoYSxiKXtpZihiIGluIGEpcmV0dXJuIGI7dmFyIGM9Yi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStiLnNsaWNlKDEpLGQ9YixlPVRhLmxlbmd0aDt3aGlsZShlLS0paWYoYj1UYVtlXStjLGIgaW4gYSlyZXR1cm4gYjtyZXR1cm4gZH1mdW5jdGlvbiBWYShhLGIpe2Zvcih2YXIgYyxkLGUsZj1bXSxnPTAsaD1hLmxlbmd0aDtoPmc7ZysrKWQ9YVtnXSxkLnN0eWxlJiYoZltnXT1tLl9kYXRhKGQsXCJvbGRkaXNwbGF5XCIpLGM9ZC5zdHlsZS5kaXNwbGF5LGI/KGZbZ118fFwibm9uZVwiIT09Y3x8KGQuc3R5bGUuZGlzcGxheT1cIlwiKSxcIlwiPT09ZC5zdHlsZS5kaXNwbGF5JiZVKGQpJiYoZltnXT1tLl9kYXRhKGQsXCJvbGRkaXNwbGF5XCIsRmEoZC5ub2RlTmFtZSkpKSk6KGU9VShkKSwoYyYmXCJub25lXCIhPT1jfHwhZSkmJm0uX2RhdGEoZCxcIm9sZGRpc3BsYXlcIixlP2M6bS5jc3MoZCxcImRpc3BsYXlcIikpKSk7Zm9yKGc9MDtoPmc7ZysrKWQ9YVtnXSxkLnN0eWxlJiYoYiYmXCJub25lXCIhPT1kLnN0eWxlLmRpc3BsYXkmJlwiXCIhPT1kLnN0eWxlLmRpc3BsYXl8fChkLnN0eWxlLmRpc3BsYXk9Yj9mW2ddfHxcIlwiOlwibm9uZVwiKSk7cmV0dXJuIGF9ZnVuY3Rpb24gV2EoYSxiLGMpe3ZhciBkPVBhLmV4ZWMoYik7cmV0dXJuIGQ/TWF0aC5tYXgoMCxkWzFdLShjfHwwKSkrKGRbMl18fFwicHhcIik6Yn1mdW5jdGlvbiBYYShhLGIsYyxkLGUpe2Zvcih2YXIgZj1jPT09KGQ/XCJib3JkZXJcIjpcImNvbnRlbnRcIik/NDpcIndpZHRoXCI9PT1iPzE6MCxnPTA7ND5mO2YrPTIpXCJtYXJnaW5cIj09PWMmJihnKz1tLmNzcyhhLGMrVFtmXSwhMCxlKSksZD8oXCJjb250ZW50XCI9PT1jJiYoZy09bS5jc3MoYSxcInBhZGRpbmdcIitUW2ZdLCEwLGUpKSxcIm1hcmdpblwiIT09YyYmKGctPW0uY3NzKGEsXCJib3JkZXJcIitUW2ZdK1wiV2lkdGhcIiwhMCxlKSkpOihnKz1tLmNzcyhhLFwicGFkZGluZ1wiK1RbZl0sITAsZSksXCJwYWRkaW5nXCIhPT1jJiYoZys9bS5jc3MoYSxcImJvcmRlclwiK1RbZl0rXCJXaWR0aFwiLCEwLGUpKSk7cmV0dXJuIGd9ZnVuY3Rpb24gWWEoYSxiLGMpe3ZhciBkPSEwLGU9XCJ3aWR0aFwiPT09Yj9hLm9mZnNldFdpZHRoOmEub2Zmc2V0SGVpZ2h0LGY9SWEoYSksZz1rLmJveFNpemluZyYmXCJib3JkZXItYm94XCI9PT1tLmNzcyhhLFwiYm94U2l6aW5nXCIsITEsZik7aWYoMD49ZXx8bnVsbD09ZSl7aWYoZT1KYShhLGIsZiksKDA+ZXx8bnVsbD09ZSkmJihlPWEuc3R5bGVbYl0pLEhhLnRlc3QoZSkpcmV0dXJuIGU7ZD1nJiYoay5ib3hTaXppbmdSZWxpYWJsZSgpfHxlPT09YS5zdHlsZVtiXSksZT1wYXJzZUZsb2F0KGUpfHwwfXJldHVybiBlK1hhKGEsYixjfHwoZz9cImJvcmRlclwiOlwiY29udGVudFwiKSxkLGYpK1wicHhcIn1tLmV4dGVuZCh7Y3NzSG9va3M6e29wYWNpdHk6e2dldDpmdW5jdGlvbihhLGIpe2lmKGIpe3ZhciBjPUphKGEsXCJvcGFjaXR5XCIpO3JldHVyblwiXCI9PT1jP1wiMVwiOmN9fX19LGNzc051bWJlcjp7Y29sdW1uQ291bnQ6ITAsZmlsbE9wYWNpdHk6ITAsZmxleEdyb3c6ITAsZmxleFNocmluazohMCxmb250V2VpZ2h0OiEwLGxpbmVIZWlnaHQ6ITAsb3BhY2l0eTohMCxvcmRlcjohMCxvcnBoYW5zOiEwLHdpZG93czohMCx6SW5kZXg6ITAsem9vbTohMH0sY3NzUHJvcHM6e1wiZmxvYXRcIjprLmNzc0Zsb2F0P1wiY3NzRmxvYXRcIjpcInN0eWxlRmxvYXRcIn0sc3R5bGU6ZnVuY3Rpb24oYSxiLGMsZCl7aWYoYSYmMyE9PWEubm9kZVR5cGUmJjghPT1hLm5vZGVUeXBlJiZhLnN0eWxlKXt2YXIgZSxmLGcsaD1tLmNhbWVsQ2FzZShiKSxpPWEuc3R5bGU7aWYoYj1tLmNzc1Byb3BzW2hdfHwobS5jc3NQcm9wc1toXT1VYShpLGgpKSxnPW0uY3NzSG9va3NbYl18fG0uY3NzSG9va3NbaF0sdm9pZCAwPT09YylyZXR1cm4gZyYmXCJnZXRcImluIGcmJnZvaWQgMCE9PShlPWcuZ2V0KGEsITEsZCkpP2U6aVtiXTtpZihmPXR5cGVvZiBjLFwic3RyaW5nXCI9PT1mJiYoZT1RYS5leGVjKGMpKSYmKGM9KGVbMV0rMSkqZVsyXStwYXJzZUZsb2F0KG0uY3NzKGEsYikpLGY9XCJudW1iZXJcIiksbnVsbCE9YyYmYz09PWMmJihcIm51bWJlclwiIT09Znx8bS5jc3NOdW1iZXJbaF18fChjKz1cInB4XCIpLGsuY2xlYXJDbG9uZVN0eWxlfHxcIlwiIT09Y3x8MCE9PWIuaW5kZXhPZihcImJhY2tncm91bmRcIil8fChpW2JdPVwiaW5oZXJpdFwiKSwhKGcmJlwic2V0XCJpbiBnJiZ2b2lkIDA9PT0oYz1nLnNldChhLGMsZCkpKSkpdHJ5e2lbYl09Y31jYXRjaChqKXt9fX0sY3NzOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlLGYsZyxoPW0uY2FtZWxDYXNlKGIpO3JldHVybiBiPW0uY3NzUHJvcHNbaF18fChtLmNzc1Byb3BzW2hdPVVhKGEuc3R5bGUsaCkpLGc9bS5jc3NIb29rc1tiXXx8bS5jc3NIb29rc1toXSxnJiZcImdldFwiaW4gZyYmKGY9Zy5nZXQoYSwhMCxjKSksdm9pZCAwPT09ZiYmKGY9SmEoYSxiLGQpKSxcIm5vcm1hbFwiPT09ZiYmYiBpbiBTYSYmKGY9U2FbYl0pLFwiXCI9PT1jfHxjPyhlPXBhcnNlRmxvYXQoZiksYz09PSEwfHxtLmlzTnVtZXJpYyhlKT9lfHwwOmYpOmZ9fSksbS5lYWNoKFtcImhlaWdodFwiLFwid2lkdGhcIl0sZnVuY3Rpb24oYSxiKXttLmNzc0hvb2tzW2JdPXtnZXQ6ZnVuY3Rpb24oYSxjLGQpe3JldHVybiBjP09hLnRlc3QobS5jc3MoYSxcImRpc3BsYXlcIikpJiYwPT09YS5vZmZzZXRXaWR0aD9tLnN3YXAoYSxSYSxmdW5jdGlvbigpe3JldHVybiBZYShhLGIsZCl9KTpZYShhLGIsZCk6dm9pZCAwfSxzZXQ6ZnVuY3Rpb24oYSxjLGQpe3ZhciBlPWQmJklhKGEpO3JldHVybiBXYShhLGMsZD9YYShhLGIsZCxrLmJveFNpemluZyYmXCJib3JkZXItYm94XCI9PT1tLmNzcyhhLFwiYm94U2l6aW5nXCIsITEsZSksZSk6MCl9fX0pLGsub3BhY2l0eXx8KG0uY3NzSG9va3Mub3BhY2l0eT17Z2V0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIE5hLnRlc3QoKGImJmEuY3VycmVudFN0eWxlP2EuY3VycmVudFN0eWxlLmZpbHRlcjphLnN0eWxlLmZpbHRlcil8fFwiXCIpPy4wMSpwYXJzZUZsb2F0KFJlZ0V4cC4kMSkrXCJcIjpiP1wiMVwiOlwiXCJ9LHNldDpmdW5jdGlvbihhLGIpe3ZhciBjPWEuc3R5bGUsZD1hLmN1cnJlbnRTdHlsZSxlPW0uaXNOdW1lcmljKGIpP1wiYWxwaGEob3BhY2l0eT1cIisxMDAqYitcIilcIjpcIlwiLGY9ZCYmZC5maWx0ZXJ8fGMuZmlsdGVyfHxcIlwiO2Muem9vbT0xLChiPj0xfHxcIlwiPT09YikmJlwiXCI9PT1tLnRyaW0oZi5yZXBsYWNlKE1hLFwiXCIpKSYmYy5yZW1vdmVBdHRyaWJ1dGUmJihjLnJlbW92ZUF0dHJpYnV0ZShcImZpbHRlclwiKSxcIlwiPT09Ynx8ZCYmIWQuZmlsdGVyKXx8KGMuZmlsdGVyPU1hLnRlc3QoZik/Zi5yZXBsYWNlKE1hLGUpOmYrXCIgXCIrZSl9fSksbS5jc3NIb29rcy5tYXJnaW5SaWdodD1MYShrLnJlbGlhYmxlTWFyZ2luUmlnaHQsZnVuY3Rpb24oYSxiKXtyZXR1cm4gYj9tLnN3YXAoYSx7ZGlzcGxheTpcImlubGluZS1ibG9ja1wifSxKYSxbYSxcIm1hcmdpblJpZ2h0XCJdKTp2b2lkIDB9KSxtLmVhY2goe21hcmdpbjpcIlwiLHBhZGRpbmc6XCJcIixib3JkZXI6XCJXaWR0aFwifSxmdW5jdGlvbihhLGIpe20uY3NzSG9va3NbYStiXT17ZXhwYW5kOmZ1bmN0aW9uKGMpe2Zvcih2YXIgZD0wLGU9e30sZj1cInN0cmluZ1wiPT10eXBlb2YgYz9jLnNwbGl0KFwiIFwiKTpbY107ND5kO2QrKyllW2ErVFtkXStiXT1mW2RdfHxmW2QtMl18fGZbMF07cmV0dXJuIGV9fSxHYS50ZXN0KGEpfHwobS5jc3NIb29rc1thK2JdLnNldD1XYSl9KSxtLmZuLmV4dGVuZCh7Y3NzOmZ1bmN0aW9uKGEsYil7cmV0dXJuIFYodGhpcyxmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmPXt9LGc9MDtpZihtLmlzQXJyYXkoYikpe2ZvcihkPUlhKGEpLGU9Yi5sZW5ndGg7ZT5nO2crKylmW2JbZ11dPW0uY3NzKGEsYltnXSwhMSxkKTtyZXR1cm4gZn1yZXR1cm4gdm9pZCAwIT09Yz9tLnN0eWxlKGEsYixjKTptLmNzcyhhLGIpfSxhLGIsYXJndW1lbnRzLmxlbmd0aD4xKX0sc2hvdzpmdW5jdGlvbigpe3JldHVybiBWYSh0aGlzLCEwKX0saGlkZTpmdW5jdGlvbigpe3JldHVybiBWYSh0aGlzKX0sdG9nZ2xlOmZ1bmN0aW9uKGEpe3JldHVyblwiYm9vbGVhblwiPT10eXBlb2YgYT9hP3RoaXMuc2hvdygpOnRoaXMuaGlkZSgpOnRoaXMuZWFjaChmdW5jdGlvbigpe1UodGhpcyk/bSh0aGlzKS5zaG93KCk6bSh0aGlzKS5oaWRlKCl9KX19KTtmdW5jdGlvbiBaYShhLGIsYyxkLGUpe1xucmV0dXJuIG5ldyBaYS5wcm90b3R5cGUuaW5pdChhLGIsYyxkLGUpfW0uVHdlZW49WmEsWmEucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpaYSxpbml0OmZ1bmN0aW9uKGEsYixjLGQsZSxmKXt0aGlzLmVsZW09YSx0aGlzLnByb3A9Yyx0aGlzLmVhc2luZz1lfHxcInN3aW5nXCIsdGhpcy5vcHRpb25zPWIsdGhpcy5zdGFydD10aGlzLm5vdz10aGlzLmN1cigpLHRoaXMuZW5kPWQsdGhpcy51bml0PWZ8fChtLmNzc051bWJlcltjXT9cIlwiOlwicHhcIil9LGN1cjpmdW5jdGlvbigpe3ZhciBhPVphLnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiBhJiZhLmdldD9hLmdldCh0aGlzKTpaYS5wcm9wSG9va3MuX2RlZmF1bHQuZ2V0KHRoaXMpfSxydW46ZnVuY3Rpb24oYSl7dmFyIGIsYz1aYS5wcm9wSG9va3NbdGhpcy5wcm9wXTtyZXR1cm4gdGhpcy5vcHRpb25zLmR1cmF0aW9uP3RoaXMucG9zPWI9bS5lYXNpbmdbdGhpcy5lYXNpbmddKGEsdGhpcy5vcHRpb25zLmR1cmF0aW9uKmEsMCwxLHRoaXMub3B0aW9ucy5kdXJhdGlvbik6dGhpcy5wb3M9Yj1hLHRoaXMubm93PSh0aGlzLmVuZC10aGlzLnN0YXJ0KSpiK3RoaXMuc3RhcnQsdGhpcy5vcHRpb25zLnN0ZXAmJnRoaXMub3B0aW9ucy5zdGVwLmNhbGwodGhpcy5lbGVtLHRoaXMubm93LHRoaXMpLGMmJmMuc2V0P2Muc2V0KHRoaXMpOlphLnByb3BIb29rcy5fZGVmYXVsdC5zZXQodGhpcyksdGhpc319LFphLnByb3RvdHlwZS5pbml0LnByb3RvdHlwZT1aYS5wcm90b3R5cGUsWmEucHJvcEhvb2tzPXtfZGVmYXVsdDp7Z2V0OmZ1bmN0aW9uKGEpe3ZhciBiO3JldHVybiBudWxsPT1hLmVsZW1bYS5wcm9wXXx8YS5lbGVtLnN0eWxlJiZudWxsIT1hLmVsZW0uc3R5bGVbYS5wcm9wXT8oYj1tLmNzcyhhLmVsZW0sYS5wcm9wLFwiXCIpLGImJlwiYXV0b1wiIT09Yj9iOjApOmEuZWxlbVthLnByb3BdfSxzZXQ6ZnVuY3Rpb24oYSl7bS5meC5zdGVwW2EucHJvcF0/bS5meC5zdGVwW2EucHJvcF0oYSk6YS5lbGVtLnN0eWxlJiYobnVsbCE9YS5lbGVtLnN0eWxlW20uY3NzUHJvcHNbYS5wcm9wXV18fG0uY3NzSG9va3NbYS5wcm9wXSk/bS5zdHlsZShhLmVsZW0sYS5wcm9wLGEubm93K2EudW5pdCk6YS5lbGVtW2EucHJvcF09YS5ub3d9fX0sWmEucHJvcEhvb2tzLnNjcm9sbFRvcD1aYS5wcm9wSG9va3Muc2Nyb2xsTGVmdD17c2V0OmZ1bmN0aW9uKGEpe2EuZWxlbS5ub2RlVHlwZSYmYS5lbGVtLnBhcmVudE5vZGUmJihhLmVsZW1bYS5wcm9wXT1hLm5vdyl9fSxtLmVhc2luZz17bGluZWFyOmZ1bmN0aW9uKGEpe3JldHVybiBhfSxzd2luZzpmdW5jdGlvbihhKXtyZXR1cm4uNS1NYXRoLmNvcyhhKk1hdGguUEkpLzJ9fSxtLmZ4PVphLnByb3RvdHlwZS5pbml0LG0uZnguc3RlcD17fTt2YXIgJGEsX2EsYWI9L14oPzp0b2dnbGV8c2hvd3xoaWRlKSQvLGJiPW5ldyBSZWdFeHAoXCJeKD86KFsrLV0pPXwpKFwiK1MrXCIpKFthLXolXSopJFwiLFwiaVwiKSxjYj0vcXVldWVIb29rcyQvLGRiPVtpYl0sZWI9e1wiKlwiOltmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMuY3JlYXRlVHdlZW4oYSxiKSxkPWMuY3VyKCksZT1iYi5leGVjKGIpLGY9ZSYmZVszXXx8KG0uY3NzTnVtYmVyW2FdP1wiXCI6XCJweFwiKSxnPShtLmNzc051bWJlclthXXx8XCJweFwiIT09ZiYmK2QpJiZiYi5leGVjKG0uY3NzKGMuZWxlbSxhKSksaD0xLGk9MjA7aWYoZyYmZ1szXSE9PWYpe2Y9Znx8Z1szXSxlPWV8fFtdLGc9K2R8fDE7ZG8gaD1ofHxcIi41XCIsZy89aCxtLnN0eWxlKGMuZWxlbSxhLGcrZik7d2hpbGUoaCE9PShoPWMuY3VyKCkvZCkmJjEhPT1oJiYtLWkpfXJldHVybiBlJiYoZz1jLnN0YXJ0PStnfHwrZHx8MCxjLnVuaXQ9ZixjLmVuZD1lWzFdP2crKGVbMV0rMSkqZVsyXTorZVsyXSksY31dfTtmdW5jdGlvbiBmYigpe3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7JGE9dm9pZCAwfSksJGE9bS5ub3coKX1mdW5jdGlvbiBnYihhLGIpe3ZhciBjLGQ9e2hlaWdodDphfSxlPTA7Zm9yKGI9Yj8xOjA7ND5lO2UrPTItYiljPVRbZV0sZFtcIm1hcmdpblwiK2NdPWRbXCJwYWRkaW5nXCIrY109YTtyZXR1cm4gYiYmKGQub3BhY2l0eT1kLndpZHRoPWEpLGR9ZnVuY3Rpb24gaGIoYSxiLGMpe2Zvcih2YXIgZCxlPShlYltiXXx8W10pLmNvbmNhdChlYltcIipcIl0pLGY9MCxnPWUubGVuZ3RoO2c+ZjtmKyspaWYoZD1lW2ZdLmNhbGwoYyxiLGEpKXJldHVybiBkfWZ1bmN0aW9uIGliKGEsYixjKXt2YXIgZCxlLGYsZyxoLGksaixsLG49dGhpcyxvPXt9LHA9YS5zdHlsZSxxPWEubm9kZVR5cGUmJlUoYSkscj1tLl9kYXRhKGEsXCJmeHNob3dcIik7Yy5xdWV1ZXx8KGg9bS5fcXVldWVIb29rcyhhLFwiZnhcIiksbnVsbD09aC51bnF1ZXVlZCYmKGgudW5xdWV1ZWQ9MCxpPWguZW1wdHkuZmlyZSxoLmVtcHR5LmZpcmU9ZnVuY3Rpb24oKXtoLnVucXVldWVkfHxpKCl9KSxoLnVucXVldWVkKyssbi5hbHdheXMoZnVuY3Rpb24oKXtuLmFsd2F5cyhmdW5jdGlvbigpe2gudW5xdWV1ZWQtLSxtLnF1ZXVlKGEsXCJmeFwiKS5sZW5ndGh8fGguZW1wdHkuZmlyZSgpfSl9KSksMT09PWEubm9kZVR5cGUmJihcImhlaWdodFwiaW4gYnx8XCJ3aWR0aFwiaW4gYikmJihjLm92ZXJmbG93PVtwLm92ZXJmbG93LHAub3ZlcmZsb3dYLHAub3ZlcmZsb3dZXSxqPW0uY3NzKGEsXCJkaXNwbGF5XCIpLGw9XCJub25lXCI9PT1qP20uX2RhdGEoYSxcIm9sZGRpc3BsYXlcIil8fEZhKGEubm9kZU5hbWUpOmosXCJpbmxpbmVcIj09PWwmJlwibm9uZVwiPT09bS5jc3MoYSxcImZsb2F0XCIpJiYoay5pbmxpbmVCbG9ja05lZWRzTGF5b3V0JiZcImlubGluZVwiIT09RmEoYS5ub2RlTmFtZSk/cC56b29tPTE6cC5kaXNwbGF5PVwiaW5saW5lLWJsb2NrXCIpKSxjLm92ZXJmbG93JiYocC5vdmVyZmxvdz1cImhpZGRlblwiLGsuc2hyaW5rV3JhcEJsb2NrcygpfHxuLmFsd2F5cyhmdW5jdGlvbigpe3Aub3ZlcmZsb3c9Yy5vdmVyZmxvd1swXSxwLm92ZXJmbG93WD1jLm92ZXJmbG93WzFdLHAub3ZlcmZsb3dZPWMub3ZlcmZsb3dbMl19KSk7Zm9yKGQgaW4gYilpZihlPWJbZF0sYWIuZXhlYyhlKSl7aWYoZGVsZXRlIGJbZF0sZj1mfHxcInRvZ2dsZVwiPT09ZSxlPT09KHE/XCJoaWRlXCI6XCJzaG93XCIpKXtpZihcInNob3dcIiE9PWV8fCFyfHx2b2lkIDA9PT1yW2RdKWNvbnRpbnVlO3E9ITB9b1tkXT1yJiZyW2RdfHxtLnN0eWxlKGEsZCl9ZWxzZSBqPXZvaWQgMDtpZihtLmlzRW1wdHlPYmplY3QobykpXCJpbmxpbmVcIj09PShcIm5vbmVcIj09PWo/RmEoYS5ub2RlTmFtZSk6aikmJihwLmRpc3BsYXk9aik7ZWxzZXtyP1wiaGlkZGVuXCJpbiByJiYocT1yLmhpZGRlbik6cj1tLl9kYXRhKGEsXCJmeHNob3dcIix7fSksZiYmKHIuaGlkZGVuPSFxKSxxP20oYSkuc2hvdygpOm4uZG9uZShmdW5jdGlvbigpe20oYSkuaGlkZSgpfSksbi5kb25lKGZ1bmN0aW9uKCl7dmFyIGI7bS5fcmVtb3ZlRGF0YShhLFwiZnhzaG93XCIpO2ZvcihiIGluIG8pbS5zdHlsZShhLGIsb1tiXSl9KTtmb3IoZCBpbiBvKWc9aGIocT9yW2RdOjAsZCxuKSxkIGluIHJ8fChyW2RdPWcuc3RhcnQscSYmKGcuZW5kPWcuc3RhcnQsZy5zdGFydD1cIndpZHRoXCI9PT1kfHxcImhlaWdodFwiPT09ZD8xOjApKX19ZnVuY3Rpb24gamIoYSxiKXt2YXIgYyxkLGUsZixnO2ZvcihjIGluIGEpaWYoZD1tLmNhbWVsQ2FzZShjKSxlPWJbZF0sZj1hW2NdLG0uaXNBcnJheShmKSYmKGU9ZlsxXSxmPWFbY109ZlswXSksYyE9PWQmJihhW2RdPWYsZGVsZXRlIGFbY10pLGc9bS5jc3NIb29rc1tkXSxnJiZcImV4cGFuZFwiaW4gZyl7Zj1nLmV4cGFuZChmKSxkZWxldGUgYVtkXTtmb3IoYyBpbiBmKWMgaW4gYXx8KGFbY109ZltjXSxiW2NdPWUpfWVsc2UgYltkXT1lfWZ1bmN0aW9uIGtiKGEsYixjKXt2YXIgZCxlLGY9MCxnPWRiLmxlbmd0aCxoPW0uRGVmZXJyZWQoKS5hbHdheXMoZnVuY3Rpb24oKXtkZWxldGUgaS5lbGVtfSksaT1mdW5jdGlvbigpe2lmKGUpcmV0dXJuITE7Zm9yKHZhciBiPSRhfHxmYigpLGM9TWF0aC5tYXgoMCxqLnN0YXJ0VGltZStqLmR1cmF0aW9uLWIpLGQ9Yy9qLmR1cmF0aW9ufHwwLGY9MS1kLGc9MCxpPWoudHdlZW5zLmxlbmd0aDtpPmc7ZysrKWoudHdlZW5zW2ddLnJ1bihmKTtyZXR1cm4gaC5ub3RpZnlXaXRoKGEsW2osZixjXSksMT5mJiZpP2M6KGgucmVzb2x2ZVdpdGgoYSxbal0pLCExKX0saj1oLnByb21pc2Uoe2VsZW06YSxwcm9wczptLmV4dGVuZCh7fSxiKSxvcHRzOm0uZXh0ZW5kKCEwLHtzcGVjaWFsRWFzaW5nOnt9fSxjKSxvcmlnaW5hbFByb3BlcnRpZXM6YixvcmlnaW5hbE9wdGlvbnM6YyxzdGFydFRpbWU6JGF8fGZiKCksZHVyYXRpb246Yy5kdXJhdGlvbix0d2VlbnM6W10sY3JlYXRlVHdlZW46ZnVuY3Rpb24oYixjKXt2YXIgZD1tLlR3ZWVuKGEsai5vcHRzLGIsYyxqLm9wdHMuc3BlY2lhbEVhc2luZ1tiXXx8ai5vcHRzLmVhc2luZyk7cmV0dXJuIGoudHdlZW5zLnB1c2goZCksZH0sc3RvcDpmdW5jdGlvbihiKXt2YXIgYz0wLGQ9Yj9qLnR3ZWVucy5sZW5ndGg6MDtpZihlKXJldHVybiB0aGlzO2ZvcihlPSEwO2Q+YztjKyspai50d2VlbnNbY10ucnVuKDEpO3JldHVybiBiP2gucmVzb2x2ZVdpdGgoYSxbaixiXSk6aC5yZWplY3RXaXRoKGEsW2osYl0pLHRoaXN9fSksaz1qLnByb3BzO2ZvcihqYihrLGoub3B0cy5zcGVjaWFsRWFzaW5nKTtnPmY7ZisrKWlmKGQ9ZGJbZl0uY2FsbChqLGEsayxqLm9wdHMpKXJldHVybiBkO3JldHVybiBtLm1hcChrLGhiLGopLG0uaXNGdW5jdGlvbihqLm9wdHMuc3RhcnQpJiZqLm9wdHMuc3RhcnQuY2FsbChhLGopLG0uZngudGltZXIobS5leHRlbmQoaSx7ZWxlbTphLGFuaW06aixxdWV1ZTpqLm9wdHMucXVldWV9KSksai5wcm9ncmVzcyhqLm9wdHMucHJvZ3Jlc3MpLmRvbmUoai5vcHRzLmRvbmUsai5vcHRzLmNvbXBsZXRlKS5mYWlsKGoub3B0cy5mYWlsKS5hbHdheXMoai5vcHRzLmFsd2F5cyl9bS5BbmltYXRpb249bS5leHRlbmQoa2Ise3R3ZWVuZXI6ZnVuY3Rpb24oYSxiKXttLmlzRnVuY3Rpb24oYSk/KGI9YSxhPVtcIipcIl0pOmE9YS5zcGxpdChcIiBcIik7Zm9yKHZhciBjLGQ9MCxlPWEubGVuZ3RoO2U+ZDtkKyspYz1hW2RdLGViW2NdPWViW2NdfHxbXSxlYltjXS51bnNoaWZ0KGIpfSxwcmVmaWx0ZXI6ZnVuY3Rpb24oYSxiKXtiP2RiLnVuc2hpZnQoYSk6ZGIucHVzaChhKX19KSxtLnNwZWVkPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1hJiZcIm9iamVjdFwiPT10eXBlb2YgYT9tLmV4dGVuZCh7fSxhKTp7Y29tcGxldGU6Y3x8IWMmJmJ8fG0uaXNGdW5jdGlvbihhKSYmYSxkdXJhdGlvbjphLGVhc2luZzpjJiZifHxiJiYhbS5pc0Z1bmN0aW9uKGIpJiZifTtyZXR1cm4gZC5kdXJhdGlvbj1tLmZ4Lm9mZj8wOlwibnVtYmVyXCI9PXR5cGVvZiBkLmR1cmF0aW9uP2QuZHVyYXRpb246ZC5kdXJhdGlvbiBpbiBtLmZ4LnNwZWVkcz9tLmZ4LnNwZWVkc1tkLmR1cmF0aW9uXTptLmZ4LnNwZWVkcy5fZGVmYXVsdCwobnVsbD09ZC5xdWV1ZXx8ZC5xdWV1ZT09PSEwKSYmKGQucXVldWU9XCJmeFwiKSxkLm9sZD1kLmNvbXBsZXRlLGQuY29tcGxldGU9ZnVuY3Rpb24oKXttLmlzRnVuY3Rpb24oZC5vbGQpJiZkLm9sZC5jYWxsKHRoaXMpLGQucXVldWUmJm0uZGVxdWV1ZSh0aGlzLGQucXVldWUpfSxkfSxtLmZuLmV4dGVuZCh7ZmFkZVRvOmZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiB0aGlzLmZpbHRlcihVKS5jc3MoXCJvcGFjaXR5XCIsMCkuc2hvdygpLmVuZCgpLmFuaW1hdGUoe29wYWNpdHk6Yn0sYSxjLGQpfSxhbmltYXRlOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPW0uaXNFbXB0eU9iamVjdChhKSxmPW0uc3BlZWQoYixjLGQpLGc9ZnVuY3Rpb24oKXt2YXIgYj1rYih0aGlzLG0uZXh0ZW5kKHt9LGEpLGYpOyhlfHxtLl9kYXRhKHRoaXMsXCJmaW5pc2hcIikpJiZiLnN0b3AoITApfTtyZXR1cm4gZy5maW5pc2g9ZyxlfHxmLnF1ZXVlPT09ITE/dGhpcy5lYWNoKGcpOnRoaXMucXVldWUoZi5xdWV1ZSxnKX0sc3RvcDpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9ZnVuY3Rpb24oYSl7dmFyIGI9YS5zdG9wO2RlbGV0ZSBhLnN0b3AsYihjKX07cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGEmJihjPWIsYj1hLGE9dm9pZCAwKSxiJiZhIT09ITEmJnRoaXMucXVldWUoYXx8XCJmeFwiLFtdKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYj0hMCxlPW51bGwhPWEmJmErXCJxdWV1ZUhvb2tzXCIsZj1tLnRpbWVycyxnPW0uX2RhdGEodGhpcyk7aWYoZSlnW2VdJiZnW2VdLnN0b3AmJmQoZ1tlXSk7ZWxzZSBmb3IoZSBpbiBnKWdbZV0mJmdbZV0uc3RvcCYmY2IudGVzdChlKSYmZChnW2VdKTtmb3IoZT1mLmxlbmd0aDtlLS07KWZbZV0uZWxlbSE9PXRoaXN8fG51bGwhPWEmJmZbZV0ucXVldWUhPT1hfHwoZltlXS5hbmltLnN0b3AoYyksYj0hMSxmLnNwbGljZShlLDEpKTsoYnx8IWMpJiZtLmRlcXVldWUodGhpcyxhKX0pfSxmaW5pc2g6ZnVuY3Rpb24oYSl7cmV0dXJuIGEhPT0hMSYmKGE9YXx8XCJmeFwiKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYixjPW0uX2RhdGEodGhpcyksZD1jW2ErXCJxdWV1ZVwiXSxlPWNbYStcInF1ZXVlSG9va3NcIl0sZj1tLnRpbWVycyxnPWQ/ZC5sZW5ndGg6MDtmb3IoYy5maW5pc2g9ITAsbS5xdWV1ZSh0aGlzLGEsW10pLGUmJmUuc3RvcCYmZS5zdG9wLmNhbGwodGhpcywhMCksYj1mLmxlbmd0aDtiLS07KWZbYl0uZWxlbT09PXRoaXMmJmZbYl0ucXVldWU9PT1hJiYoZltiXS5hbmltLnN0b3AoITApLGYuc3BsaWNlKGIsMSkpO2ZvcihiPTA7Zz5iO2IrKylkW2JdJiZkW2JdLmZpbmlzaCYmZFtiXS5maW5pc2guY2FsbCh0aGlzKTtkZWxldGUgYy5maW5pc2h9KX19KSxtLmVhY2goW1widG9nZ2xlXCIsXCJzaG93XCIsXCJoaWRlXCJdLGZ1bmN0aW9uKGEsYil7dmFyIGM9bS5mbltiXTttLmZuW2JdPWZ1bmN0aW9uKGEsZCxlKXtyZXR1cm4gbnVsbD09YXx8XCJib29sZWFuXCI9PXR5cGVvZiBhP2MuYXBwbHkodGhpcyxhcmd1bWVudHMpOnRoaXMuYW5pbWF0ZShnYihiLCEwKSxhLGQsZSl9fSksbS5lYWNoKHtzbGlkZURvd246Z2IoXCJzaG93XCIpLHNsaWRlVXA6Z2IoXCJoaWRlXCIpLHNsaWRlVG9nZ2xlOmdiKFwidG9nZ2xlXCIpLGZhZGVJbjp7b3BhY2l0eTpcInNob3dcIn0sZmFkZU91dDp7b3BhY2l0eTpcImhpZGVcIn0sZmFkZVRvZ2dsZTp7b3BhY2l0eTpcInRvZ2dsZVwifX0sZnVuY3Rpb24oYSxiKXttLmZuW2FdPWZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4gdGhpcy5hbmltYXRlKGIsYSxjLGQpfX0pLG0udGltZXJzPVtdLG0uZngudGljaz1mdW5jdGlvbigpe3ZhciBhLGI9bS50aW1lcnMsYz0wO2ZvcigkYT1tLm5vdygpO2M8Yi5sZW5ndGg7YysrKWE9YltjXSxhKCl8fGJbY10hPT1hfHxiLnNwbGljZShjLS0sMSk7Yi5sZW5ndGh8fG0uZnguc3RvcCgpLCRhPXZvaWQgMH0sbS5meC50aW1lcj1mdW5jdGlvbihhKXttLnRpbWVycy5wdXNoKGEpLGEoKT9tLmZ4LnN0YXJ0KCk6bS50aW1lcnMucG9wKCl9LG0uZnguaW50ZXJ2YWw9MTMsbS5meC5zdGFydD1mdW5jdGlvbigpe19hfHwoX2E9c2V0SW50ZXJ2YWwobS5meC50aWNrLG0uZnguaW50ZXJ2YWwpKX0sbS5meC5zdG9wPWZ1bmN0aW9uKCl7Y2xlYXJJbnRlcnZhbChfYSksX2E9bnVsbH0sbS5meC5zcGVlZHM9e3Nsb3c6NjAwLGZhc3Q6MjAwLF9kZWZhdWx0OjQwMH0sbS5mbi5kZWxheT1mdW5jdGlvbihhLGIpe3JldHVybiBhPW0uZng/bS5meC5zcGVlZHNbYV18fGE6YSxiPWJ8fFwiZnhcIix0aGlzLnF1ZXVlKGIsZnVuY3Rpb24oYixjKXt2YXIgZD1zZXRUaW1lb3V0KGIsYSk7Yy5zdG9wPWZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KGQpfX0pfSxmdW5jdGlvbigpe3ZhciBhLGIsYyxkLGU7Yj15LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksYi5zZXRBdHRyaWJ1dGUoXCJjbGFzc05hbWVcIixcInRcIiksYi5pbm5lckhUTUw9XCIgIDxsaW5rLz48dGFibGU+PC90YWJsZT48YSBocmVmPScvYSc+YTwvYT48aW5wdXQgdHlwZT0nY2hlY2tib3gnLz5cIixkPWIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJhXCIpWzBdLGM9eS5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpLGU9Yy5hcHBlbmRDaGlsZCh5LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIikpLGE9Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpWzBdLGQuc3R5bGUuY3NzVGV4dD1cInRvcDoxcHhcIixrLmdldFNldEF0dHJpYnV0ZT1cInRcIiE9PWIuY2xhc3NOYW1lLGsuc3R5bGU9L3RvcC8udGVzdChkLmdldEF0dHJpYnV0ZShcInN0eWxlXCIpKSxrLmhyZWZOb3JtYWxpemVkPVwiL2FcIj09PWQuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxrLmNoZWNrT249ISFhLnZhbHVlLGsub3B0U2VsZWN0ZWQ9ZS5zZWxlY3RlZCxrLmVuY3R5cGU9ISF5LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpLmVuY3R5cGUsYy5kaXNhYmxlZD0hMCxrLm9wdERpc2FibGVkPSFlLmRpc2FibGVkLGE9eS5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiXCIpLGsuaW5wdXQ9XCJcIj09PWEuZ2V0QXR0cmlidXRlKFwidmFsdWVcIiksYS52YWx1ZT1cInRcIixhLnNldEF0dHJpYnV0ZShcInR5cGVcIixcInJhZGlvXCIpLGsucmFkaW9WYWx1ZT1cInRcIj09PWEudmFsdWV9KCk7dmFyIGxiPS9cXHIvZzttLmZuLmV4dGVuZCh7dmFsOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlPXRoaXNbMF07e2lmKGFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIGQ9bS5pc0Z1bmN0aW9uKGEpLHRoaXMuZWFjaChmdW5jdGlvbihjKXt2YXIgZTsxPT09dGhpcy5ub2RlVHlwZSYmKGU9ZD9hLmNhbGwodGhpcyxjLG0odGhpcykudmFsKCkpOmEsbnVsbD09ZT9lPVwiXCI6XCJudW1iZXJcIj09dHlwZW9mIGU/ZSs9XCJcIjptLmlzQXJyYXkoZSkmJihlPW0ubWFwKGUsZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/XCJcIjphK1wiXCJ9KSksYj1tLnZhbEhvb2tzW3RoaXMudHlwZV18fG0udmFsSG9va3NbdGhpcy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSxiJiZcInNldFwiaW4gYiYmdm9pZCAwIT09Yi5zZXQodGhpcyxlLFwidmFsdWVcIil8fCh0aGlzLnZhbHVlPWUpKX0pO2lmKGUpcmV0dXJuIGI9bS52YWxIb29rc1tlLnR5cGVdfHxtLnZhbEhvb2tzW2Uubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0sYiYmXCJnZXRcImluIGImJnZvaWQgMCE9PShjPWIuZ2V0KGUsXCJ2YWx1ZVwiKSk/YzooYz1lLnZhbHVlLFwic3RyaW5nXCI9PXR5cGVvZiBjP2MucmVwbGFjZShsYixcIlwiKTpudWxsPT1jP1wiXCI6Yyl9fX0pLG0uZXh0ZW5kKHt2YWxIb29rczp7b3B0aW9uOntnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9bS5maW5kLmF0dHIoYSxcInZhbHVlXCIpO3JldHVybiBudWxsIT1iP2I6bS50cmltKG0udGV4dChhKSl9fSxzZWxlY3Q6e2dldDpmdW5jdGlvbihhKXtmb3IodmFyIGIsYyxkPWEub3B0aW9ucyxlPWEuc2VsZWN0ZWRJbmRleCxmPVwic2VsZWN0LW9uZVwiPT09YS50eXBlfHwwPmUsZz1mP251bGw6W10saD1mP2UrMTpkLmxlbmd0aCxpPTA+ZT9oOmY/ZTowO2g+aTtpKyspaWYoYz1kW2ldLCEoIWMuc2VsZWN0ZWQmJmkhPT1lfHwoay5vcHREaXNhYmxlZD9jLmRpc2FibGVkOm51bGwhPT1jLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpKXx8Yy5wYXJlbnROb2RlLmRpc2FibGVkJiZtLm5vZGVOYW1lKGMucGFyZW50Tm9kZSxcIm9wdGdyb3VwXCIpKSl7aWYoYj1tKGMpLnZhbCgpLGYpcmV0dXJuIGI7Zy5wdXNoKGIpfXJldHVybiBnfSxzZXQ6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGU9YS5vcHRpb25zLGY9bS5tYWtlQXJyYXkoYiksZz1lLmxlbmd0aDt3aGlsZShnLS0paWYoZD1lW2ddLG0uaW5BcnJheShtLnZhbEhvb2tzLm9wdGlvbi5nZXQoZCksZik+PTApdHJ5e2Quc2VsZWN0ZWQ9Yz0hMH1jYXRjaChoKXtkLnNjcm9sbEhlaWdodH1lbHNlIGQuc2VsZWN0ZWQ9ITE7cmV0dXJuIGN8fChhLnNlbGVjdGVkSW5kZXg9LTEpLGV9fX19KSxtLmVhY2goW1wicmFkaW9cIixcImNoZWNrYm94XCJdLGZ1bmN0aW9uKCl7bS52YWxIb29rc1t0aGlzXT17c2V0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIG0uaXNBcnJheShiKT9hLmNoZWNrZWQ9bS5pbkFycmF5KG0oYSkudmFsKCksYik+PTA6dm9pZCAwfX0say5jaGVja09ufHwobS52YWxIb29rc1t0aGlzXS5nZXQ9ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PT1hLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpP1wib25cIjphLnZhbHVlfSl9KTt2YXIgbWIsbmIsb2I9bS5leHByLmF0dHJIYW5kbGUscGI9L14oPzpjaGVja2VkfHNlbGVjdGVkKSQvaSxxYj1rLmdldFNldEF0dHJpYnV0ZSxyYj1rLmlucHV0O20uZm4uZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIFYodGhpcyxtLmF0dHIsYSxiLGFyZ3VtZW50cy5sZW5ndGg+MSl9LHJlbW92ZUF0dHI6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe20ucmVtb3ZlQXR0cih0aGlzLGEpfSl9fSksbS5leHRlbmQoe2F0dHI6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZj1hLm5vZGVUeXBlO2lmKGEmJjMhPT1mJiY4IT09ZiYmMiE9PWYpcmV0dXJuIHR5cGVvZiBhLmdldEF0dHJpYnV0ZT09PUs/bS5wcm9wKGEsYixjKTooMT09PWYmJm0uaXNYTUxEb2MoYSl8fChiPWIudG9Mb3dlckNhc2UoKSxkPW0uYXR0ckhvb2tzW2JdfHwobS5leHByLm1hdGNoLmJvb2wudGVzdChiKT9uYjptYikpLHZvaWQgMD09PWM/ZCYmXCJnZXRcImluIGQmJm51bGwhPT0oZT1kLmdldChhLGIpKT9lOihlPW0uZmluZC5hdHRyKGEsYiksbnVsbD09ZT92b2lkIDA6ZSk6bnVsbCE9PWM/ZCYmXCJzZXRcImluIGQmJnZvaWQgMCE9PShlPWQuc2V0KGEsYyxiKSk/ZTooYS5zZXRBdHRyaWJ1dGUoYixjK1wiXCIpLGMpOnZvaWQgbS5yZW1vdmVBdHRyKGEsYikpfSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlPTAsZj1iJiZiLm1hdGNoKEUpO2lmKGYmJjE9PT1hLm5vZGVUeXBlKXdoaWxlKGM9ZltlKytdKWQ9bS5wcm9wRml4W2NdfHxjLG0uZXhwci5tYXRjaC5ib29sLnRlc3QoYyk/cmImJnFifHwhcGIudGVzdChjKT9hW2RdPSExOmFbbS5jYW1lbENhc2UoXCJkZWZhdWx0LVwiK2MpXT1hW2RdPSExOm0uYXR0cihhLGMsXCJcIiksYS5yZW1vdmVBdHRyaWJ1dGUocWI/YzpkKX0sYXR0ckhvb2tzOnt0eXBlOntzZXQ6ZnVuY3Rpb24oYSxiKXtpZighay5yYWRpb1ZhbHVlJiZcInJhZGlvXCI9PT1iJiZtLm5vZGVOYW1lKGEsXCJpbnB1dFwiKSl7dmFyIGM9YS52YWx1ZTtyZXR1cm4gYS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsYiksYyYmKGEudmFsdWU9YyksYn19fX19KSxuYj17c2V0OmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gYj09PSExP20ucmVtb3ZlQXR0cihhLGMpOnJiJiZxYnx8IXBiLnRlc3QoYyk/YS5zZXRBdHRyaWJ1dGUoIXFiJiZtLnByb3BGaXhbY118fGMsYyk6YVttLmNhbWVsQ2FzZShcImRlZmF1bHQtXCIrYyldPWFbY109ITAsY319LG0uZWFjaChtLmV4cHIubWF0Y2guYm9vbC5zb3VyY2UubWF0Y2goL1xcdysvZyksZnVuY3Rpb24oYSxiKXt2YXIgYz1vYltiXXx8bS5maW5kLmF0dHI7b2JbYl09cmImJnFifHwhcGIudGVzdChiKT9mdW5jdGlvbihhLGIsZCl7dmFyIGUsZjtyZXR1cm4gZHx8KGY9b2JbYl0sb2JbYl09ZSxlPW51bGwhPWMoYSxiLGQpP2IudG9Mb3dlckNhc2UoKTpudWxsLG9iW2JdPWYpLGV9OmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gYz92b2lkIDA6YVttLmNhbWVsQ2FzZShcImRlZmF1bHQtXCIrYildP2IudG9Mb3dlckNhc2UoKTpudWxsfX0pLHJiJiZxYnx8KG0uYXR0ckhvb2tzLnZhbHVlPXtzZXQ6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBtLm5vZGVOYW1lKGEsXCJpbnB1dFwiKT92b2lkKGEuZGVmYXVsdFZhbHVlPWIpOm1iJiZtYi5zZXQoYSxiLGMpfX0pLHFifHwobWI9e3NldDpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9YS5nZXRBdHRyaWJ1dGVOb2RlKGMpO3JldHVybiBkfHxhLnNldEF0dHJpYnV0ZU5vZGUoZD1hLm93bmVyRG9jdW1lbnQuY3JlYXRlQXR0cmlidXRlKGMpKSxkLnZhbHVlPWIrPVwiXCIsXCJ2YWx1ZVwiPT09Y3x8Yj09PWEuZ2V0QXR0cmlidXRlKGMpP2I6dm9pZCAwfX0sb2IuaWQ9b2IubmFtZT1vYi5jb29yZHM9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkO3JldHVybiBjP3ZvaWQgMDooZD1hLmdldEF0dHJpYnV0ZU5vZGUoYikpJiZcIlwiIT09ZC52YWx1ZT9kLnZhbHVlOm51bGx9LG0udmFsSG9va3MuYnV0dG9uPXtnZXQ6ZnVuY3Rpb24oYSxiKXt2YXIgYz1hLmdldEF0dHJpYnV0ZU5vZGUoYik7cmV0dXJuIGMmJmMuc3BlY2lmaWVkP2MudmFsdWU6dm9pZCAwfSxzZXQ6bWIuc2V0fSxtLmF0dHJIb29rcy5jb250ZW50ZWRpdGFibGU9e3NldDpmdW5jdGlvbihhLGIsYyl7bWIuc2V0KGEsXCJcIj09PWI/ITE6YixjKX19LG0uZWFjaChbXCJ3aWR0aFwiLFwiaGVpZ2h0XCJdLGZ1bmN0aW9uKGEsYil7bS5hdHRySG9va3NbYl09e3NldDpmdW5jdGlvbihhLGMpe3JldHVyblwiXCI9PT1jPyhhLnNldEF0dHJpYnV0ZShiLFwiYXV0b1wiKSxjKTp2b2lkIDB9fX0pKSxrLnN0eWxlfHwobS5hdHRySG9va3Muc3R5bGU9e2dldDpmdW5jdGlvbihhKXtyZXR1cm4gYS5zdHlsZS5jc3NUZXh0fHx2b2lkIDB9LHNldDpmdW5jdGlvbihhLGIpe3JldHVybiBhLnN0eWxlLmNzc1RleHQ9YitcIlwifX0pO3ZhciBzYj0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b258b2JqZWN0KSQvaSx0Yj0vXig/OmF8YXJlYSkkL2k7bS5mbi5leHRlbmQoe3Byb3A6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gVih0aGlzLG0ucHJvcCxhLGIsYXJndW1lbnRzLmxlbmd0aD4xKX0scmVtb3ZlUHJvcDpmdW5jdGlvbihhKXtyZXR1cm4gYT1tLnByb3BGaXhbYV18fGEsdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dHJ5e3RoaXNbYV09dm9pZCAwLGRlbGV0ZSB0aGlzW2FdfWNhdGNoKGIpe319KX19KSxtLmV4dGVuZCh7cHJvcEZpeDp7XCJmb3JcIjpcImh0bWxGb3JcIixcImNsYXNzXCI6XCJjbGFzc05hbWVcIn0scHJvcDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmLGc9YS5ub2RlVHlwZTtpZihhJiYzIT09ZyYmOCE9PWcmJjIhPT1nKXJldHVybiBmPTEhPT1nfHwhbS5pc1hNTERvYyhhKSxmJiYoYj1tLnByb3BGaXhbYl18fGIsZT1tLnByb3BIb29rc1tiXSksdm9pZCAwIT09Yz9lJiZcInNldFwiaW4gZSYmdm9pZCAwIT09KGQ9ZS5zZXQoYSxjLGIpKT9kOmFbYl09YzplJiZcImdldFwiaW4gZSYmbnVsbCE9PShkPWUuZ2V0KGEsYikpP2Q6YVtiXX0scHJvcEhvb2tzOnt0YWJJbmRleDp7Z2V0OmZ1bmN0aW9uKGEpe3ZhciBiPW0uZmluZC5hdHRyKGEsXCJ0YWJpbmRleFwiKTtyZXR1cm4gYj9wYXJzZUludChiLDEwKTpzYi50ZXN0KGEubm9kZU5hbWUpfHx0Yi50ZXN0KGEubm9kZU5hbWUpJiZhLmhyZWY/MDotMX19fX0pLGsuaHJlZk5vcm1hbGl6ZWR8fG0uZWFjaChbXCJocmVmXCIsXCJzcmNcIl0sZnVuY3Rpb24oYSxiKXttLnByb3BIb29rc1tiXT17Z2V0OmZ1bmN0aW9uKGEpe3JldHVybiBhLmdldEF0dHJpYnV0ZShiLDQpfX19KSxrLm9wdFNlbGVjdGVkfHwobS5wcm9wSG9va3Muc2VsZWN0ZWQ9e2dldDpmdW5jdGlvbihhKXt2YXIgYj1hLnBhcmVudE5vZGU7cmV0dXJuIGImJihiLnNlbGVjdGVkSW5kZXgsYi5wYXJlbnROb2RlJiZiLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCksbnVsbH19KSxtLmVhY2goW1widGFiSW5kZXhcIixcInJlYWRPbmx5XCIsXCJtYXhMZW5ndGhcIixcImNlbGxTcGFjaW5nXCIsXCJjZWxsUGFkZGluZ1wiLFwicm93U3BhblwiLFwiY29sU3BhblwiLFwidXNlTWFwXCIsXCJmcmFtZUJvcmRlclwiLFwiY29udGVudEVkaXRhYmxlXCJdLGZ1bmN0aW9uKCl7bS5wcm9wRml4W3RoaXMudG9Mb3dlckNhc2UoKV09dGhpc30pLGsuZW5jdHlwZXx8KG0ucHJvcEZpeC5lbmN0eXBlPVwiZW5jb2RpbmdcIik7dmFyIHViPS9bXFx0XFxyXFxuXFxmXS9nO20uZm4uZXh0ZW5kKHthZGRDbGFzczpmdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmLGcsaD0wLGk9dGhpcy5sZW5ndGgsaj1cInN0cmluZ1wiPT10eXBlb2YgYSYmYTtpZihtLmlzRnVuY3Rpb24oYSkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihiKXttKHRoaXMpLmFkZENsYXNzKGEuY2FsbCh0aGlzLGIsdGhpcy5jbGFzc05hbWUpKX0pO2lmKGopZm9yKGI9KGF8fFwiXCIpLm1hdGNoKEUpfHxbXTtpPmg7aCsrKWlmKGM9dGhpc1toXSxkPTE9PT1jLm5vZGVUeXBlJiYoYy5jbGFzc05hbWU/KFwiIFwiK2MuY2xhc3NOYW1lK1wiIFwiKS5yZXBsYWNlKHViLFwiIFwiKTpcIiBcIikpe2Y9MDt3aGlsZShlPWJbZisrXSlkLmluZGV4T2YoXCIgXCIrZStcIiBcIik8MCYmKGQrPWUrXCIgXCIpO2c9bS50cmltKGQpLGMuY2xhc3NOYW1lIT09ZyYmKGMuY2xhc3NOYW1lPWcpfXJldHVybiB0aGlzfSxyZW1vdmVDbGFzczpmdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmLGcsaD0wLGk9dGhpcy5sZW5ndGgsaj0wPT09YXJndW1lbnRzLmxlbmd0aHx8XCJzdHJpbmdcIj09dHlwZW9mIGEmJmE7aWYobS5pc0Z1bmN0aW9uKGEpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYil7bSh0aGlzKS5yZW1vdmVDbGFzcyhhLmNhbGwodGhpcyxiLHRoaXMuY2xhc3NOYW1lKSl9KTtpZihqKWZvcihiPShhfHxcIlwiKS5tYXRjaChFKXx8W107aT5oO2grKylpZihjPXRoaXNbaF0sZD0xPT09Yy5ub2RlVHlwZSYmKGMuY2xhc3NOYW1lPyhcIiBcIitjLmNsYXNzTmFtZStcIiBcIikucmVwbGFjZSh1YixcIiBcIik6XCJcIikpe2Y9MDt3aGlsZShlPWJbZisrXSl3aGlsZShkLmluZGV4T2YoXCIgXCIrZStcIiBcIik+PTApZD1kLnJlcGxhY2UoXCIgXCIrZStcIiBcIixcIiBcIik7Zz1hP20udHJpbShkKTpcIlwiLGMuY2xhc3NOYW1lIT09ZyYmKGMuY2xhc3NOYW1lPWcpfXJldHVybiB0aGlzfSx0b2dnbGVDbGFzczpmdW5jdGlvbihhLGIpe3ZhciBjPXR5cGVvZiBhO3JldHVyblwiYm9vbGVhblwiPT10eXBlb2YgYiYmXCJzdHJpbmdcIj09PWM/Yj90aGlzLmFkZENsYXNzKGEpOnRoaXMucmVtb3ZlQ2xhc3MoYSk6dGhpcy5lYWNoKG0uaXNGdW5jdGlvbihhKT9mdW5jdGlvbihjKXttKHRoaXMpLnRvZ2dsZUNsYXNzKGEuY2FsbCh0aGlzLGMsdGhpcy5jbGFzc05hbWUsYiksYil9OmZ1bmN0aW9uKCl7aWYoXCJzdHJpbmdcIj09PWMpe3ZhciBiLGQ9MCxlPW0odGhpcyksZj1hLm1hdGNoKEUpfHxbXTt3aGlsZShiPWZbZCsrXSllLmhhc0NsYXNzKGIpP2UucmVtb3ZlQ2xhc3MoYik6ZS5hZGRDbGFzcyhiKX1lbHNlKGM9PT1LfHxcImJvb2xlYW5cIj09PWMpJiYodGhpcy5jbGFzc05hbWUmJm0uX2RhdGEodGhpcyxcIl9fY2xhc3NOYW1lX19cIix0aGlzLmNsYXNzTmFtZSksdGhpcy5jbGFzc05hbWU9dGhpcy5jbGFzc05hbWV8fGE9PT0hMT9cIlwiOm0uX2RhdGEodGhpcyxcIl9fY2xhc3NOYW1lX19cIil8fFwiXCIpfSl9LGhhc0NsYXNzOmZ1bmN0aW9uKGEpe2Zvcih2YXIgYj1cIiBcIithK1wiIFwiLGM9MCxkPXRoaXMubGVuZ3RoO2Q+YztjKyspaWYoMT09PXRoaXNbY10ubm9kZVR5cGUmJihcIiBcIit0aGlzW2NdLmNsYXNzTmFtZStcIiBcIikucmVwbGFjZSh1YixcIiBcIikuaW5kZXhPZihiKT49MClyZXR1cm4hMDtyZXR1cm4hMX19KSxtLmVhY2goXCJibHVyIGZvY3VzIGZvY3VzaW4gZm9jdXNvdXQgbG9hZCByZXNpemUgc2Nyb2xsIHVubG9hZCBjbGljayBkYmxjbGljayBtb3VzZWRvd24gbW91c2V1cCBtb3VzZW1vdmUgbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBjaGFuZ2Ugc2VsZWN0IHN1Ym1pdCBrZXlkb3duIGtleXByZXNzIGtleXVwIGVycm9yIGNvbnRleHRtZW51XCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGEsYil7bS5mbltiXT1mdW5jdGlvbihhLGMpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPjA/dGhpcy5vbihiLG51bGwsYSxjKTp0aGlzLnRyaWdnZXIoYil9fSksbS5mbi5leHRlbmQoe2hvdmVyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMubW91c2VlbnRlcihhKS5tb3VzZWxlYXZlKGJ8fGEpfSxiaW5kOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdGhpcy5vbihhLG51bGwsYixjKX0sdW5iaW5kOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMub2ZmKGEsbnVsbCxiKX0sZGVsZWdhdGU6ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHRoaXMub24oYixhLGMsZCl9LHVuZGVsZWdhdGU6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiAxPT09YXJndW1lbnRzLmxlbmd0aD90aGlzLm9mZihhLFwiKipcIik6dGhpcy5vZmYoYixhfHxcIioqXCIsYyl9fSk7dmFyIHZiPW0ubm93KCksd2I9L1xcPy8seGI9LygsKXwoXFxbfHspfCh9fF0pfFwiKD86W15cIlxcXFxcXHJcXG5dfFxcXFxbXCJcXFxcXFwvYmZucnRdfFxcXFx1W1xcZGEtZkEtRl17NH0pKlwiXFxzKjo/fHRydWV8ZmFsc2V8bnVsbHwtPyg/ITBcXGQpXFxkKyg/OlxcLlxcZCt8KSg/OltlRV1bKy1dP1xcZCt8KS9nO20ucGFyc2VKU09OPWZ1bmN0aW9uKGIpe2lmKGEuSlNPTiYmYS5KU09OLnBhcnNlKXJldHVybiBhLkpTT04ucGFyc2UoYitcIlwiKTt2YXIgYyxkPW51bGwsZT1tLnRyaW0oYitcIlwiKTtyZXR1cm4gZSYmIW0udHJpbShlLnJlcGxhY2UoeGIsZnVuY3Rpb24oYSxiLGUsZil7cmV0dXJuIGMmJmImJihkPTApLDA9PT1kP2E6KGM9ZXx8YixkKz0hZi0hZSxcIlwiKX0pKT9GdW5jdGlvbihcInJldHVybiBcIitlKSgpOm0uZXJyb3IoXCJJbnZhbGlkIEpTT046IFwiK2IpfSxtLnBhcnNlWE1MPWZ1bmN0aW9uKGIpe3ZhciBjLGQ7aWYoIWJ8fFwic3RyaW5nXCIhPXR5cGVvZiBiKXJldHVybiBudWxsO3RyeXthLkRPTVBhcnNlcj8oZD1uZXcgRE9NUGFyc2VyLGM9ZC5wYXJzZUZyb21TdHJpbmcoYixcInRleHQveG1sXCIpKTooYz1uZXcgQWN0aXZlWE9iamVjdChcIk1pY3Jvc29mdC5YTUxET01cIiksYy5hc3luYz1cImZhbHNlXCIsYy5sb2FkWE1MKGIpKX1jYXRjaChlKXtjPXZvaWQgMH1yZXR1cm4gYyYmYy5kb2N1bWVudEVsZW1lbnQmJiFjLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicGFyc2VyZXJyb3JcIikubGVuZ3RofHxtLmVycm9yKFwiSW52YWxpZCBYTUw6IFwiK2IpLGN9O3ZhciB5Yix6YixBYj0vIy4qJC8sQmI9LyhbPyZdKV89W14mXSovLENiPS9eKC4qPyk6WyBcXHRdKihbXlxcclxcbl0qKVxccj8kL2dtLERiPS9eKD86YWJvdXR8YXBwfGFwcC1zdG9yYWdlfC4rLWV4dGVuc2lvbnxmaWxlfHJlc3x3aWRnZXQpOiQvLEViPS9eKD86R0VUfEhFQUQpJC8sRmI9L15cXC9cXC8vLEdiPS9eKFtcXHcuKy1dKzopKD86XFwvXFwvKD86W15cXC8/I10qQHwpKFteXFwvPyM6XSopKD86OihcXGQrKXwpfCkvLEhiPXt9LEliPXt9LEpiPVwiKi9cIi5jb25jYXQoXCIqXCIpO3RyeXt6Yj1sb2NhdGlvbi5ocmVmfWNhdGNoKEtiKXt6Yj15LmNyZWF0ZUVsZW1lbnQoXCJhXCIpLHpiLmhyZWY9XCJcIix6Yj16Yi5ocmVmfXliPUdiLmV4ZWMoemIudG9Mb3dlckNhc2UoKSl8fFtdO2Z1bmN0aW9uIExiKGEpe3JldHVybiBmdW5jdGlvbihiLGMpe1wic3RyaW5nXCIhPXR5cGVvZiBiJiYoYz1iLGI9XCIqXCIpO3ZhciBkLGU9MCxmPWIudG9Mb3dlckNhc2UoKS5tYXRjaChFKXx8W107aWYobS5pc0Z1bmN0aW9uKGMpKXdoaWxlKGQ9ZltlKytdKVwiK1wiPT09ZC5jaGFyQXQoMCk/KGQ9ZC5zbGljZSgxKXx8XCIqXCIsKGFbZF09YVtkXXx8W10pLnVuc2hpZnQoYykpOihhW2RdPWFbZF18fFtdKS5wdXNoKGMpfX1mdW5jdGlvbiBNYihhLGIsYyxkKXt2YXIgZT17fSxmPWE9PT1JYjtmdW5jdGlvbiBnKGgpe3ZhciBpO3JldHVybiBlW2hdPSEwLG0uZWFjaChhW2hdfHxbXSxmdW5jdGlvbihhLGgpe3ZhciBqPWgoYixjLGQpO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBqfHxmfHxlW2pdP2Y/IShpPWopOnZvaWQgMDooYi5kYXRhVHlwZXMudW5zaGlmdChqKSxnKGopLCExKX0pLGl9cmV0dXJuIGcoYi5kYXRhVHlwZXNbMF0pfHwhZVtcIipcIl0mJmcoXCIqXCIpfWZ1bmN0aW9uIE5iKGEsYil7dmFyIGMsZCxlPW0uYWpheFNldHRpbmdzLmZsYXRPcHRpb25zfHx7fTtmb3IoZCBpbiBiKXZvaWQgMCE9PWJbZF0mJigoZVtkXT9hOmN8fChjPXt9KSlbZF09YltkXSk7cmV0dXJuIGMmJm0uZXh0ZW5kKCEwLGEsYyksYX1mdW5jdGlvbiBPYihhLGIsYyl7dmFyIGQsZSxmLGcsaD1hLmNvbnRlbnRzLGk9YS5kYXRhVHlwZXM7d2hpbGUoXCIqXCI9PT1pWzBdKWkuc2hpZnQoKSx2b2lkIDA9PT1lJiYoZT1hLm1pbWVUeXBlfHxiLmdldFJlc3BvbnNlSGVhZGVyKFwiQ29udGVudC1UeXBlXCIpKTtpZihlKWZvcihnIGluIGgpaWYoaFtnXSYmaFtnXS50ZXN0KGUpKXtpLnVuc2hpZnQoZyk7YnJlYWt9aWYoaVswXWluIGMpZj1pWzBdO2Vsc2V7Zm9yKGcgaW4gYyl7aWYoIWlbMF18fGEuY29udmVydGVyc1tnK1wiIFwiK2lbMF1dKXtmPWc7YnJlYWt9ZHx8KGQ9Zyl9Zj1mfHxkfXJldHVybiBmPyhmIT09aVswXSYmaS51bnNoaWZ0KGYpLGNbZl0pOnZvaWQgMH1mdW5jdGlvbiBQYihhLGIsYyxkKXt2YXIgZSxmLGcsaCxpLGo9e30saz1hLmRhdGFUeXBlcy5zbGljZSgpO2lmKGtbMV0pZm9yKGcgaW4gYS5jb252ZXJ0ZXJzKWpbZy50b0xvd2VyQ2FzZSgpXT1hLmNvbnZlcnRlcnNbZ107Zj1rLnNoaWZ0KCk7d2hpbGUoZilpZihhLnJlc3BvbnNlRmllbGRzW2ZdJiYoY1thLnJlc3BvbnNlRmllbGRzW2ZdXT1iKSwhaSYmZCYmYS5kYXRhRmlsdGVyJiYoYj1hLmRhdGFGaWx0ZXIoYixhLmRhdGFUeXBlKSksaT1mLGY9ay5zaGlmdCgpKWlmKFwiKlwiPT09ZilmPWk7ZWxzZSBpZihcIipcIiE9PWkmJmkhPT1mKXtpZihnPWpbaStcIiBcIitmXXx8altcIiogXCIrZl0sIWcpZm9yKGUgaW4gailpZihoPWUuc3BsaXQoXCIgXCIpLGhbMV09PT1mJiYoZz1qW2krXCIgXCIraFswXV18fGpbXCIqIFwiK2hbMF1dKSl7Zz09PSEwP2c9altlXTpqW2VdIT09ITAmJihmPWhbMF0say51bnNoaWZ0KGhbMV0pKTticmVha31pZihnIT09ITApaWYoZyYmYVtcInRocm93c1wiXSliPWcoYik7ZWxzZSB0cnl7Yj1nKGIpfWNhdGNoKGwpe3JldHVybntzdGF0ZTpcInBhcnNlcmVycm9yXCIsZXJyb3I6Zz9sOlwiTm8gY29udmVyc2lvbiBmcm9tIFwiK2krXCIgdG8gXCIrZn19fXJldHVybntzdGF0ZTpcInN1Y2Nlc3NcIixkYXRhOmJ9fW0uZXh0ZW5kKHthY3RpdmU6MCxsYXN0TW9kaWZpZWQ6e30sZXRhZzp7fSxhamF4U2V0dGluZ3M6e3VybDp6Yix0eXBlOlwiR0VUXCIsaXNMb2NhbDpEYi50ZXN0KHliWzFdKSxnbG9iYWw6ITAscHJvY2Vzc0RhdGE6ITAsYXN5bmM6ITAsY29udGVudFR5cGU6XCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLThcIixhY2NlcHRzOntcIipcIjpKYix0ZXh0OlwidGV4dC9wbGFpblwiLGh0bWw6XCJ0ZXh0L2h0bWxcIix4bWw6XCJhcHBsaWNhdGlvbi94bWwsIHRleHQveG1sXCIsanNvbjpcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdFwifSxjb250ZW50czp7eG1sOi94bWwvLGh0bWw6L2h0bWwvLGpzb246L2pzb24vfSxyZXNwb25zZUZpZWxkczp7eG1sOlwicmVzcG9uc2VYTUxcIix0ZXh0OlwicmVzcG9uc2VUZXh0XCIsanNvbjpcInJlc3BvbnNlSlNPTlwifSxjb252ZXJ0ZXJzOntcIiogdGV4dFwiOlN0cmluZyxcInRleHQgaHRtbFwiOiEwLFwidGV4dCBqc29uXCI6bS5wYXJzZUpTT04sXCJ0ZXh0IHhtbFwiOm0ucGFyc2VYTUx9LGZsYXRPcHRpb25zOnt1cmw6ITAsY29udGV4dDohMH19LGFqYXhTZXR1cDpmdW5jdGlvbihhLGIpe3JldHVybiBiP05iKE5iKGEsbS5hamF4U2V0dGluZ3MpLGIpOk5iKG0uYWpheFNldHRpbmdzLGEpfSxhamF4UHJlZmlsdGVyOkxiKEhiKSxhamF4VHJhbnNwb3J0OkxiKEliKSxhamF4OmZ1bmN0aW9uKGEsYil7XCJvYmplY3RcIj09dHlwZW9mIGEmJihiPWEsYT12b2lkIDApLGI9Ynx8e307dmFyIGMsZCxlLGYsZyxoLGksaixrPW0uYWpheFNldHVwKHt9LGIpLGw9ay5jb250ZXh0fHxrLG49ay5jb250ZXh0JiYobC5ub2RlVHlwZXx8bC5qcXVlcnkpP20obCk6bS5ldmVudCxvPW0uRGVmZXJyZWQoKSxwPW0uQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIikscT1rLnN0YXR1c0NvZGV8fHt9LHI9e30scz17fSx0PTAsdT1cImNhbmNlbGVkXCIsdj17cmVhZHlTdGF0ZTowLGdldFJlc3BvbnNlSGVhZGVyOmZ1bmN0aW9uKGEpe3ZhciBiO2lmKDI9PT10KXtpZighail7aj17fTt3aGlsZShiPUNiLmV4ZWMoZikpaltiWzFdLnRvTG93ZXJDYXNlKCldPWJbMl19Yj1qW2EudG9Mb3dlckNhc2UoKV19cmV0dXJuIG51bGw9PWI/bnVsbDpifSxnZXRBbGxSZXNwb25zZUhlYWRlcnM6ZnVuY3Rpb24oKXtyZXR1cm4gMj09PXQ/ZjpudWxsfSxzZXRSZXF1ZXN0SGVhZGVyOmZ1bmN0aW9uKGEsYil7dmFyIGM9YS50b0xvd2VyQ2FzZSgpO3JldHVybiB0fHwoYT1zW2NdPXNbY118fGEsclthXT1iKSx0aGlzfSxvdmVycmlkZU1pbWVUeXBlOmZ1bmN0aW9uKGEpe3JldHVybiB0fHwoay5taW1lVHlwZT1hKSx0aGlzfSxzdGF0dXNDb2RlOmZ1bmN0aW9uKGEpe3ZhciBiO2lmKGEpaWYoMj50KWZvcihiIGluIGEpcVtiXT1bcVtiXSxhW2JdXTtlbHNlIHYuYWx3YXlzKGFbdi5zdGF0dXNdKTtyZXR1cm4gdGhpc30sYWJvcnQ6ZnVuY3Rpb24oYSl7dmFyIGI9YXx8dTtyZXR1cm4gaSYmaS5hYm9ydChiKSx4KDAsYiksdGhpc319O2lmKG8ucHJvbWlzZSh2KS5jb21wbGV0ZT1wLmFkZCx2LnN1Y2Nlc3M9di5kb25lLHYuZXJyb3I9di5mYWlsLGsudXJsPSgoYXx8ay51cmx8fHpiKStcIlwiKS5yZXBsYWNlKEFiLFwiXCIpLnJlcGxhY2UoRmIseWJbMV0rXCIvL1wiKSxrLnR5cGU9Yi5tZXRob2R8fGIudHlwZXx8ay5tZXRob2R8fGsudHlwZSxrLmRhdGFUeXBlcz1tLnRyaW0oay5kYXRhVHlwZXx8XCIqXCIpLnRvTG93ZXJDYXNlKCkubWF0Y2goRSl8fFtcIlwiXSxudWxsPT1rLmNyb3NzRG9tYWluJiYoYz1HYi5leGVjKGsudXJsLnRvTG93ZXJDYXNlKCkpLGsuY3Jvc3NEb21haW49ISghY3x8Y1sxXT09PXliWzFdJiZjWzJdPT09eWJbMl0mJihjWzNdfHwoXCJodHRwOlwiPT09Y1sxXT9cIjgwXCI6XCI0NDNcIikpPT09KHliWzNdfHwoXCJodHRwOlwiPT09eWJbMV0/XCI4MFwiOlwiNDQzXCIpKSkpLGsuZGF0YSYmay5wcm9jZXNzRGF0YSYmXCJzdHJpbmdcIiE9dHlwZW9mIGsuZGF0YSYmKGsuZGF0YT1tLnBhcmFtKGsuZGF0YSxrLnRyYWRpdGlvbmFsKSksTWIoSGIsayxiLHYpLDI9PT10KXJldHVybiB2O2g9bS5ldmVudCYmay5nbG9iYWwsaCYmMD09PW0uYWN0aXZlKysmJm0uZXZlbnQudHJpZ2dlcihcImFqYXhTdGFydFwiKSxrLnR5cGU9ay50eXBlLnRvVXBwZXJDYXNlKCksay5oYXNDb250ZW50PSFFYi50ZXN0KGsudHlwZSksZT1rLnVybCxrLmhhc0NvbnRlbnR8fChrLmRhdGEmJihlPWsudXJsKz0od2IudGVzdChlKT9cIiZcIjpcIj9cIikray5kYXRhLGRlbGV0ZSBrLmRhdGEpLGsuY2FjaGU9PT0hMSYmKGsudXJsPUJiLnRlc3QoZSk/ZS5yZXBsYWNlKEJiLFwiJDFfPVwiK3ZiKyspOmUrKHdiLnRlc3QoZSk/XCImXCI6XCI/XCIpK1wiXz1cIit2YisrKSksay5pZk1vZGlmaWVkJiYobS5sYXN0TW9kaWZpZWRbZV0mJnYuc2V0UmVxdWVzdEhlYWRlcihcIklmLU1vZGlmaWVkLVNpbmNlXCIsbS5sYXN0TW9kaWZpZWRbZV0pLG0uZXRhZ1tlXSYmdi5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTm9uZS1NYXRjaFwiLG0uZXRhZ1tlXSkpLChrLmRhdGEmJmsuaGFzQ29udGVudCYmay5jb250ZW50VHlwZSE9PSExfHxiLmNvbnRlbnRUeXBlKSYmdi5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsay5jb250ZW50VHlwZSksdi5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsay5kYXRhVHlwZXNbMF0mJmsuYWNjZXB0c1trLmRhdGFUeXBlc1swXV0/ay5hY2NlcHRzW2suZGF0YVR5cGVzWzBdXSsoXCIqXCIhPT1rLmRhdGFUeXBlc1swXT9cIiwgXCIrSmIrXCI7IHE9MC4wMVwiOlwiXCIpOmsuYWNjZXB0c1tcIipcIl0pO2ZvcihkIGluIGsuaGVhZGVycyl2LnNldFJlcXVlc3RIZWFkZXIoZCxrLmhlYWRlcnNbZF0pO2lmKGsuYmVmb3JlU2VuZCYmKGsuYmVmb3JlU2VuZC5jYWxsKGwsdixrKT09PSExfHwyPT09dCkpcmV0dXJuIHYuYWJvcnQoKTt1PVwiYWJvcnRcIjtmb3IoZCBpbntzdWNjZXNzOjEsZXJyb3I6MSxjb21wbGV0ZToxfSl2W2RdKGtbZF0pO2lmKGk9TWIoSWIsayxiLHYpKXt2LnJlYWR5U3RhdGU9MSxoJiZuLnRyaWdnZXIoXCJhamF4U2VuZFwiLFt2LGtdKSxrLmFzeW5jJiZrLnRpbWVvdXQ+MCYmKGc9c2V0VGltZW91dChmdW5jdGlvbigpe3YuYWJvcnQoXCJ0aW1lb3V0XCIpfSxrLnRpbWVvdXQpKTt0cnl7dD0xLGkuc2VuZChyLHgpfWNhdGNoKHcpe2lmKCEoMj50KSl0aHJvdyB3O3goLTEsdyl9fWVsc2UgeCgtMSxcIk5vIFRyYW5zcG9ydFwiKTtmdW5jdGlvbiB4KGEsYixjLGQpe3ZhciBqLHIscyx1LHcseD1iOzIhPT10JiYodD0yLGcmJmNsZWFyVGltZW91dChnKSxpPXZvaWQgMCxmPWR8fFwiXCIsdi5yZWFkeVN0YXRlPWE+MD80OjAsaj1hPj0yMDAmJjMwMD5hfHwzMDQ9PT1hLGMmJih1PU9iKGssdixjKSksdT1QYihrLHUsdixqKSxqPyhrLmlmTW9kaWZpZWQmJih3PXYuZ2V0UmVzcG9uc2VIZWFkZXIoXCJMYXN0LU1vZGlmaWVkXCIpLHcmJihtLmxhc3RNb2RpZmllZFtlXT13KSx3PXYuZ2V0UmVzcG9uc2VIZWFkZXIoXCJldGFnXCIpLHcmJihtLmV0YWdbZV09dykpLDIwND09PWF8fFwiSEVBRFwiPT09ay50eXBlP3g9XCJub2NvbnRlbnRcIjozMDQ9PT1hP3g9XCJub3Rtb2RpZmllZFwiOih4PXUuc3RhdGUscj11LmRhdGEscz11LmVycm9yLGo9IXMpKToocz14LChhfHwheCkmJih4PVwiZXJyb3JcIiwwPmEmJihhPTApKSksdi5zdGF0dXM9YSx2LnN0YXR1c1RleHQ9KGJ8fHgpK1wiXCIsaj9vLnJlc29sdmVXaXRoKGwsW3IseCx2XSk6by5yZWplY3RXaXRoKGwsW3YseCxzXSksdi5zdGF0dXNDb2RlKHEpLHE9dm9pZCAwLGgmJm4udHJpZ2dlcihqP1wiYWpheFN1Y2Nlc3NcIjpcImFqYXhFcnJvclwiLFt2LGssaj9yOnNdKSxwLmZpcmVXaXRoKGwsW3YseF0pLGgmJihuLnRyaWdnZXIoXCJhamF4Q29tcGxldGVcIixbdixrXSksLS1tLmFjdGl2ZXx8bS5ldmVudC50cmlnZ2VyKFwiYWpheFN0b3BcIikpKX1yZXR1cm4gdn0sZ2V0SlNPTjpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIG0uZ2V0KGEsYixjLFwianNvblwiKX0sZ2V0U2NyaXB0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIG0uZ2V0KGEsdm9pZCAwLGIsXCJzY3JpcHRcIil9fSksbS5lYWNoKFtcImdldFwiLFwicG9zdFwiXSxmdW5jdGlvbihhLGIpe21bYl09ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIG0uaXNGdW5jdGlvbihjKSYmKGU9ZXx8ZCxkPWMsYz12b2lkIDApLG0uYWpheCh7dXJsOmEsdHlwZTpiLGRhdGFUeXBlOmUsZGF0YTpjLHN1Y2Nlc3M6ZH0pfX0pLG0uX2V2YWxVcmw9ZnVuY3Rpb24oYSl7cmV0dXJuIG0uYWpheCh7dXJsOmEsdHlwZTpcIkdFVFwiLGRhdGFUeXBlOlwic2NyaXB0XCIsYXN5bmM6ITEsZ2xvYmFsOiExLFwidGhyb3dzXCI6ITB9KX0sbS5mbi5leHRlbmQoe3dyYXBBbGw6ZnVuY3Rpb24oYSl7aWYobS5pc0Z1bmN0aW9uKGEpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYil7bSh0aGlzKS53cmFwQWxsKGEuY2FsbCh0aGlzLGIpKX0pO2lmKHRoaXNbMF0pe3ZhciBiPW0oYSx0aGlzWzBdLm93bmVyRG9jdW1lbnQpLmVxKDApLmNsb25lKCEwKTt0aGlzWzBdLnBhcmVudE5vZGUmJmIuaW5zZXJ0QmVmb3JlKHRoaXNbMF0pLGIubWFwKGZ1bmN0aW9uKCl7dmFyIGE9dGhpczt3aGlsZShhLmZpcnN0Q2hpbGQmJjE9PT1hLmZpcnN0Q2hpbGQubm9kZVR5cGUpYT1hLmZpcnN0Q2hpbGQ7cmV0dXJuIGF9KS5hcHBlbmQodGhpcyl9cmV0dXJuIHRoaXN9LHdyYXBJbm5lcjpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKG0uaXNGdW5jdGlvbihhKT9mdW5jdGlvbihiKXttKHRoaXMpLndyYXBJbm5lcihhLmNhbGwodGhpcyxiKSl9OmZ1bmN0aW9uKCl7dmFyIGI9bSh0aGlzKSxjPWIuY29udGVudHMoKTtjLmxlbmd0aD9jLndyYXBBbGwoYSk6Yi5hcHBlbmQoYSl9KX0sd3JhcDpmdW5jdGlvbihhKXt2YXIgYj1tLmlzRnVuY3Rpb24oYSk7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihjKXttKHRoaXMpLndyYXBBbGwoYj9hLmNhbGwodGhpcyxjKTphKX0pfSx1bndyYXA6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wYXJlbnQoKS5lYWNoKGZ1bmN0aW9uKCl7bS5ub2RlTmFtZSh0aGlzLFwiYm9keVwiKXx8bSh0aGlzKS5yZXBsYWNlV2l0aCh0aGlzLmNoaWxkTm9kZXMpfSkuZW5kKCl9fSksbS5leHByLmZpbHRlcnMuaGlkZGVuPWZ1bmN0aW9uKGEpe3JldHVybiBhLm9mZnNldFdpZHRoPD0wJiZhLm9mZnNldEhlaWdodDw9MHx8IWsucmVsaWFibGVIaWRkZW5PZmZzZXRzKCkmJlwibm9uZVwiPT09KGEuc3R5bGUmJmEuc3R5bGUuZGlzcGxheXx8bS5jc3MoYSxcImRpc3BsYXlcIikpfSxtLmV4cHIuZmlsdGVycy52aXNpYmxlPWZ1bmN0aW9uKGEpe3JldHVybiFtLmV4cHIuZmlsdGVycy5oaWRkZW4oYSl9O3ZhciBRYj0vJTIwL2csUmI9L1xcW1xcXSQvLFNiPS9cXHI/XFxuL2csVGI9L14oPzpzdWJtaXR8YnV0dG9ufGltYWdlfHJlc2V0fGZpbGUpJC9pLFViPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGtleWdlbikvaTtmdW5jdGlvbiBWYihhLGIsYyxkKXt2YXIgZTtpZihtLmlzQXJyYXkoYikpbS5lYWNoKGIsZnVuY3Rpb24oYixlKXtjfHxSYi50ZXN0KGEpP2QoYSxlKTpWYihhK1wiW1wiKyhcIm9iamVjdFwiPT10eXBlb2YgZT9iOlwiXCIpK1wiXVwiLGUsYyxkKX0pO2Vsc2UgaWYoY3x8XCJvYmplY3RcIiE9PW0udHlwZShiKSlkKGEsYik7ZWxzZSBmb3IoZSBpbiBiKVZiKGErXCJbXCIrZStcIl1cIixiW2VdLGMsZCl9bS5wYXJhbT1mdW5jdGlvbihhLGIpe3ZhciBjLGQ9W10sZT1mdW5jdGlvbihhLGIpe2I9bS5pc0Z1bmN0aW9uKGIpP2IoKTpudWxsPT1iP1wiXCI6YixkW2QubGVuZ3RoXT1lbmNvZGVVUklDb21wb25lbnQoYSkrXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGIpfTtpZih2b2lkIDA9PT1iJiYoYj1tLmFqYXhTZXR0aW5ncyYmbS5hamF4U2V0dGluZ3MudHJhZGl0aW9uYWwpLG0uaXNBcnJheShhKXx8YS5qcXVlcnkmJiFtLmlzUGxhaW5PYmplY3QoYSkpbS5lYWNoKGEsZnVuY3Rpb24oKXtlKHRoaXMubmFtZSx0aGlzLnZhbHVlKX0pO2Vsc2UgZm9yKGMgaW4gYSlWYihjLGFbY10sYixlKTtyZXR1cm4gZC5qb2luKFwiJlwiKS5yZXBsYWNlKFFiLFwiK1wiKX0sbS5mbi5leHRlbmQoe3NlcmlhbGl6ZTpmdW5jdGlvbigpe3JldHVybiBtLnBhcmFtKHRoaXMuc2VyaWFsaXplQXJyYXkoKSl9LHNlcmlhbGl6ZUFycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7dmFyIGE9bS5wcm9wKHRoaXMsXCJlbGVtZW50c1wiKTtyZXR1cm4gYT9tLm1ha2VBcnJheShhKTp0aGlzfSkuZmlsdGVyKGZ1bmN0aW9uKCl7dmFyIGE9dGhpcy50eXBlO3JldHVybiB0aGlzLm5hbWUmJiFtKHRoaXMpLmlzKFwiOmRpc2FibGVkXCIpJiZVYi50ZXN0KHRoaXMubm9kZU5hbWUpJiYhVGIudGVzdChhKSYmKHRoaXMuY2hlY2tlZHx8IVcudGVzdChhKSl9KS5tYXAoZnVuY3Rpb24oYSxiKXt2YXIgYz1tKHRoaXMpLnZhbCgpO3JldHVybiBudWxsPT1jP251bGw6bS5pc0FycmF5KGMpP20ubWFwKGMsZnVuY3Rpb24oYSl7cmV0dXJue25hbWU6Yi5uYW1lLHZhbHVlOmEucmVwbGFjZShTYixcIlxcclxcblwiKX19KTp7bmFtZTpiLm5hbWUsdmFsdWU6Yy5yZXBsYWNlKFNiLFwiXFxyXFxuXCIpfX0pLmdldCgpfX0pLG0uYWpheFNldHRpbmdzLnhocj12b2lkIDAhPT1hLkFjdGl2ZVhPYmplY3Q/ZnVuY3Rpb24oKXtyZXR1cm4hdGhpcy5pc0xvY2FsJiYvXihnZXR8cG9zdHxoZWFkfHB1dHxkZWxldGV8b3B0aW9ucykkL2kudGVzdCh0aGlzLnR5cGUpJiZaYigpfHwkYigpfTpaYjt2YXIgV2I9MCxYYj17fSxZYj1tLmFqYXhTZXR0aW5ncy54aHIoKTthLmF0dGFjaEV2ZW50JiZhLmF0dGFjaEV2ZW50KFwib251bmxvYWRcIixmdW5jdGlvbigpe2Zvcih2YXIgYSBpbiBYYilYYlthXSh2b2lkIDAsITApfSksay5jb3JzPSEhWWImJlwid2l0aENyZWRlbnRpYWxzXCJpbiBZYixZYj1rLmFqYXg9ISFZYixZYiYmbS5hamF4VHJhbnNwb3J0KGZ1bmN0aW9uKGEpe2lmKCFhLmNyb3NzRG9tYWlufHxrLmNvcnMpe3ZhciBiO3JldHVybntzZW5kOmZ1bmN0aW9uKGMsZCl7dmFyIGUsZj1hLnhocigpLGc9KytXYjtpZihmLm9wZW4oYS50eXBlLGEudXJsLGEuYXN5bmMsYS51c2VybmFtZSxhLnBhc3N3b3JkKSxhLnhockZpZWxkcylmb3IoZSBpbiBhLnhockZpZWxkcylmW2VdPWEueGhyRmllbGRzW2VdO2EubWltZVR5cGUmJmYub3ZlcnJpZGVNaW1lVHlwZSYmZi5vdmVycmlkZU1pbWVUeXBlKGEubWltZVR5cGUpLGEuY3Jvc3NEb21haW58fGNbXCJYLVJlcXVlc3RlZC1XaXRoXCJdfHwoY1tcIlgtUmVxdWVzdGVkLVdpdGhcIl09XCJYTUxIdHRwUmVxdWVzdFwiKTtmb3IoZSBpbiBjKXZvaWQgMCE9PWNbZV0mJmYuc2V0UmVxdWVzdEhlYWRlcihlLGNbZV0rXCJcIik7Zi5zZW5kKGEuaGFzQ29udGVudCYmYS5kYXRhfHxudWxsKSxiPWZ1bmN0aW9uKGMsZSl7dmFyIGgsaSxqO2lmKGImJihlfHw0PT09Zi5yZWFkeVN0YXRlKSlpZihkZWxldGUgWGJbZ10sYj12b2lkIDAsZi5vbnJlYWR5c3RhdGVjaGFuZ2U9bS5ub29wLGUpNCE9PWYucmVhZHlTdGF0ZSYmZi5hYm9ydCgpO2Vsc2V7aj17fSxoPWYuc3RhdHVzLFwic3RyaW5nXCI9PXR5cGVvZiBmLnJlc3BvbnNlVGV4dCYmKGoudGV4dD1mLnJlc3BvbnNlVGV4dCk7dHJ5e2k9Zi5zdGF0dXNUZXh0fWNhdGNoKGspe2k9XCJcIn1ofHwhYS5pc0xvY2FsfHxhLmNyb3NzRG9tYWluPzEyMjM9PT1oJiYoaD0yMDQpOmg9ai50ZXh0PzIwMDo0MDR9aiYmZChoLGksaixmLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKX0sYS5hc3luYz80PT09Zi5yZWFkeVN0YXRlP3NldFRpbWVvdXQoYik6Zi5vbnJlYWR5c3RhdGVjaGFuZ2U9WGJbZ109YjpiKCl9LGFib3J0OmZ1bmN0aW9uKCl7YiYmYih2b2lkIDAsITApfX19fSk7ZnVuY3Rpb24gWmIoKXt0cnl7cmV0dXJuIG5ldyBhLlhNTEh0dHBSZXF1ZXN0fWNhdGNoKGIpe319ZnVuY3Rpb24gJGIoKXt0cnl7cmV0dXJuIG5ldyBhLkFjdGl2ZVhPYmplY3QoXCJNaWNyb3NvZnQuWE1MSFRUUFwiKX1jYXRjaChiKXt9fW0uYWpheFNldHVwKHthY2NlcHRzOntzY3JpcHQ6XCJ0ZXh0L2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2VjbWFzY3JpcHQsIGFwcGxpY2F0aW9uL3gtZWNtYXNjcmlwdFwifSxjb250ZW50czp7c2NyaXB0Oi8oPzpqYXZhfGVjbWEpc2NyaXB0L30sY29udmVydGVyczp7XCJ0ZXh0IHNjcmlwdFwiOmZ1bmN0aW9uKGEpe3JldHVybiBtLmdsb2JhbEV2YWwoYSksYX19fSksbS5hamF4UHJlZmlsdGVyKFwic2NyaXB0XCIsZnVuY3Rpb24oYSl7dm9pZCAwPT09YS5jYWNoZSYmKGEuY2FjaGU9ITEpLGEuY3Jvc3NEb21haW4mJihhLnR5cGU9XCJHRVRcIixhLmdsb2JhbD0hMSl9KSxtLmFqYXhUcmFuc3BvcnQoXCJzY3JpcHRcIixmdW5jdGlvbihhKXtpZihhLmNyb3NzRG9tYWluKXt2YXIgYixjPXkuaGVhZHx8bShcImhlYWRcIilbMF18fHkuZG9jdW1lbnRFbGVtZW50O3JldHVybntzZW5kOmZ1bmN0aW9uKGQsZSl7Yj15LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiksYi5hc3luYz0hMCxhLnNjcmlwdENoYXJzZXQmJihiLmNoYXJzZXQ9YS5zY3JpcHRDaGFyc2V0KSxiLnNyYz1hLnVybCxiLm9ubG9hZD1iLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbihhLGMpeyhjfHwhYi5yZWFkeVN0YXRlfHwvbG9hZGVkfGNvbXBsZXRlLy50ZXN0KGIucmVhZHlTdGF0ZSkpJiYoYi5vbmxvYWQ9Yi5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCxiLnBhcmVudE5vZGUmJmIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiKSxiPW51bGwsY3x8ZSgyMDAsXCJzdWNjZXNzXCIpKX0sYy5pbnNlcnRCZWZvcmUoYixjLmZpcnN0Q2hpbGQpfSxhYm9ydDpmdW5jdGlvbigpe2ImJmIub25sb2FkKHZvaWQgMCwhMCl9fX19KTt2YXIgX2I9W10sYWM9Lyg9KVxcPyg/PSZ8JCl8XFw/XFw/LzttLmFqYXhTZXR1cCh7anNvbnA6XCJjYWxsYmFja1wiLGpzb25wQ2FsbGJhY2s6ZnVuY3Rpb24oKXt2YXIgYT1fYi5wb3AoKXx8bS5leHBhbmRvK1wiX1wiK3ZiKys7cmV0dXJuIHRoaXNbYV09ITAsYX19KSxtLmFqYXhQcmVmaWx0ZXIoXCJqc29uIGpzb25wXCIsZnVuY3Rpb24oYixjLGQpe3ZhciBlLGYsZyxoPWIuanNvbnAhPT0hMSYmKGFjLnRlc3QoYi51cmwpP1widXJsXCI6XCJzdHJpbmdcIj09dHlwZW9mIGIuZGF0YSYmIShiLmNvbnRlbnRUeXBlfHxcIlwiKS5pbmRleE9mKFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpJiZhYy50ZXN0KGIuZGF0YSkmJlwiZGF0YVwiKTtyZXR1cm4gaHx8XCJqc29ucFwiPT09Yi5kYXRhVHlwZXNbMF0/KGU9Yi5qc29ucENhbGxiYWNrPW0uaXNGdW5jdGlvbihiLmpzb25wQ2FsbGJhY2spP2IuanNvbnBDYWxsYmFjaygpOmIuanNvbnBDYWxsYmFjayxoP2JbaF09YltoXS5yZXBsYWNlKGFjLFwiJDFcIitlKTpiLmpzb25wIT09ITEmJihiLnVybCs9KHdiLnRlc3QoYi51cmwpP1wiJlwiOlwiP1wiKStiLmpzb25wK1wiPVwiK2UpLGIuY29udmVydGVyc1tcInNjcmlwdCBqc29uXCJdPWZ1bmN0aW9uKCl7cmV0dXJuIGd8fG0uZXJyb3IoZStcIiB3YXMgbm90IGNhbGxlZFwiKSxnWzBdfSxiLmRhdGFUeXBlc1swXT1cImpzb25cIixmPWFbZV0sYVtlXT1mdW5jdGlvbigpe2c9YXJndW1lbnRzfSxkLmFsd2F5cyhmdW5jdGlvbigpe2FbZV09ZixiW2VdJiYoYi5qc29ucENhbGxiYWNrPWMuanNvbnBDYWxsYmFjayxfYi5wdXNoKGUpKSxnJiZtLmlzRnVuY3Rpb24oZikmJmYoZ1swXSksZz1mPXZvaWQgMH0pLFwic2NyaXB0XCIpOnZvaWQgMH0pLG0ucGFyc2VIVE1MPWZ1bmN0aW9uKGEsYixjKXtpZighYXx8XCJzdHJpbmdcIiE9dHlwZW9mIGEpcmV0dXJuIG51bGw7XCJib29sZWFuXCI9PXR5cGVvZiBiJiYoYz1iLGI9ITEpLGI9Ynx8eTt2YXIgZD11LmV4ZWMoYSksZT0hYyYmW107cmV0dXJuIGQ/W2IuY3JlYXRlRWxlbWVudChkWzFdKV06KGQ9bS5idWlsZEZyYWdtZW50KFthXSxiLGUpLGUmJmUubGVuZ3RoJiZtKGUpLnJlbW92ZSgpLG0ubWVyZ2UoW10sZC5jaGlsZE5vZGVzKSl9O3ZhciBiYz1tLmZuLmxvYWQ7bS5mbi5sb2FkPWZ1bmN0aW9uKGEsYixjKXtpZihcInN0cmluZ1wiIT10eXBlb2YgYSYmYmMpcmV0dXJuIGJjLmFwcGx5KHRoaXMsYXJndW1lbnRzKTt2YXIgZCxlLGYsZz10aGlzLGg9YS5pbmRleE9mKFwiIFwiKTtyZXR1cm4gaD49MCYmKGQ9bS50cmltKGEuc2xpY2UoaCxhLmxlbmd0aCkpLGE9YS5zbGljZSgwLGgpKSxtLmlzRnVuY3Rpb24oYik/KGM9YixiPXZvaWQgMCk6YiYmXCJvYmplY3RcIj09dHlwZW9mIGImJihmPVwiUE9TVFwiKSxnLmxlbmd0aD4wJiZtLmFqYXgoe3VybDphLHR5cGU6ZixkYXRhVHlwZTpcImh0bWxcIixkYXRhOmJ9KS5kb25lKGZ1bmN0aW9uKGEpe2U9YXJndW1lbnRzLGcuaHRtbChkP20oXCI8ZGl2PlwiKS5hcHBlbmQobS5wYXJzZUhUTUwoYSkpLmZpbmQoZCk6YSl9KS5jb21wbGV0ZShjJiZmdW5jdGlvbihhLGIpe2cuZWFjaChjLGV8fFthLnJlc3BvbnNlVGV4dCxiLGFdKX0pLHRoaXN9LG0uZWFjaChbXCJhamF4U3RhcnRcIixcImFqYXhTdG9wXCIsXCJhamF4Q29tcGxldGVcIixcImFqYXhFcnJvclwiLFwiYWpheFN1Y2Nlc3NcIixcImFqYXhTZW5kXCJdLGZ1bmN0aW9uKGEsYil7bS5mbltiXT1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5vbihiLGEpfX0pLG0uZXhwci5maWx0ZXJzLmFuaW1hdGVkPWZ1bmN0aW9uKGEpe3JldHVybiBtLmdyZXAobS50aW1lcnMsZnVuY3Rpb24oYil7cmV0dXJuIGE9PT1iLmVsZW19KS5sZW5ndGh9O3ZhciBjYz1hLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtmdW5jdGlvbiBkYyhhKXtyZXR1cm4gbS5pc1dpbmRvdyhhKT9hOjk9PT1hLm5vZGVUeXBlP2EuZGVmYXVsdFZpZXd8fGEucGFyZW50V2luZG93OiExfW0ub2Zmc2V0PXtzZXRPZmZzZXQ6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZixnLGgsaSxqLGs9bS5jc3MoYSxcInBvc2l0aW9uXCIpLGw9bShhKSxuPXt9O1wic3RhdGljXCI9PT1rJiYoYS5zdHlsZS5wb3NpdGlvbj1cInJlbGF0aXZlXCIpLGg9bC5vZmZzZXQoKSxmPW0uY3NzKGEsXCJ0b3BcIiksaT1tLmNzcyhhLFwibGVmdFwiKSxqPShcImFic29sdXRlXCI9PT1rfHxcImZpeGVkXCI9PT1rKSYmbS5pbkFycmF5KFwiYXV0b1wiLFtmLGldKT4tMSxqPyhkPWwucG9zaXRpb24oKSxnPWQudG9wLGU9ZC5sZWZ0KTooZz1wYXJzZUZsb2F0KGYpfHwwLGU9cGFyc2VGbG9hdChpKXx8MCksbS5pc0Z1bmN0aW9uKGIpJiYoYj1iLmNhbGwoYSxjLGgpKSxudWxsIT1iLnRvcCYmKG4udG9wPWIudG9wLWgudG9wK2cpLG51bGwhPWIubGVmdCYmKG4ubGVmdD1iLmxlZnQtaC5sZWZ0K2UpLFwidXNpbmdcImluIGI/Yi51c2luZy5jYWxsKGEsbik6bC5jc3Mobil9fSxtLmZuLmV4dGVuZCh7b2Zmc2V0OmZ1bmN0aW9uKGEpe2lmKGFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHZvaWQgMD09PWE/dGhpczp0aGlzLmVhY2goZnVuY3Rpb24oYil7bS5vZmZzZXQuc2V0T2Zmc2V0KHRoaXMsYSxiKX0pO3ZhciBiLGMsZD17dG9wOjAsbGVmdDowfSxlPXRoaXNbMF0sZj1lJiZlLm93bmVyRG9jdW1lbnQ7aWYoZilyZXR1cm4gYj1mLmRvY3VtZW50RWxlbWVudCxtLmNvbnRhaW5zKGIsZSk/KHR5cGVvZiBlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCE9PUsmJihkPWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpLGM9ZGMoZikse3RvcDpkLnRvcCsoYy5wYWdlWU9mZnNldHx8Yi5zY3JvbGxUb3ApLShiLmNsaWVudFRvcHx8MCksbGVmdDpkLmxlZnQrKGMucGFnZVhPZmZzZXR8fGIuc2Nyb2xsTGVmdCktKGIuY2xpZW50TGVmdHx8MCl9KTpkfSxwb3NpdGlvbjpmdW5jdGlvbigpe2lmKHRoaXNbMF0pe3ZhciBhLGIsYz17dG9wOjAsbGVmdDowfSxkPXRoaXNbMF07cmV0dXJuXCJmaXhlZFwiPT09bS5jc3MoZCxcInBvc2l0aW9uXCIpP2I9ZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTooYT10aGlzLm9mZnNldFBhcmVudCgpLGI9dGhpcy5vZmZzZXQoKSxtLm5vZGVOYW1lKGFbMF0sXCJodG1sXCIpfHwoYz1hLm9mZnNldCgpKSxjLnRvcCs9bS5jc3MoYVswXSxcImJvcmRlclRvcFdpZHRoXCIsITApLGMubGVmdCs9bS5jc3MoYVswXSxcImJvcmRlckxlZnRXaWR0aFwiLCEwKSkse3RvcDpiLnRvcC1jLnRvcC1tLmNzcyhkLFwibWFyZ2luVG9wXCIsITApLGxlZnQ6Yi5sZWZ0LWMubGVmdC1tLmNzcyhkLFwibWFyZ2luTGVmdFwiLCEwKX19fSxvZmZzZXRQYXJlbnQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9mZnNldFBhcmVudHx8Y2M7d2hpbGUoYSYmIW0ubm9kZU5hbWUoYSxcImh0bWxcIikmJlwic3RhdGljXCI9PT1tLmNzcyhhLFwicG9zaXRpb25cIikpYT1hLm9mZnNldFBhcmVudDtyZXR1cm4gYXx8Y2N9KX19KSxtLmVhY2goe3Njcm9sbExlZnQ6XCJwYWdlWE9mZnNldFwiLHNjcm9sbFRvcDpcInBhZ2VZT2Zmc2V0XCJ9LGZ1bmN0aW9uKGEsYil7dmFyIGM9L1kvLnRlc3QoYik7bS5mblthXT1mdW5jdGlvbihkKXtyZXR1cm4gVih0aGlzLGZ1bmN0aW9uKGEsZCxlKXt2YXIgZj1kYyhhKTtyZXR1cm4gdm9pZCAwPT09ZT9mP2IgaW4gZj9mW2JdOmYuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W2RdOmFbZF06dm9pZChmP2Yuc2Nyb2xsVG8oYz9tKGYpLnNjcm9sbExlZnQoKTplLGM/ZTptKGYpLnNjcm9sbFRvcCgpKTphW2RdPWUpfSxhLGQsYXJndW1lbnRzLmxlbmd0aCxudWxsKX19KSxtLmVhY2goW1widG9wXCIsXCJsZWZ0XCJdLGZ1bmN0aW9uKGEsYil7bS5jc3NIb29rc1tiXT1MYShrLnBpeGVsUG9zaXRpb24sZnVuY3Rpb24oYSxjKXtyZXR1cm4gYz8oYz1KYShhLGIpLEhhLnRlc3QoYyk/bShhKS5wb3NpdGlvbigpW2JdK1wicHhcIjpjKTp2b2lkIDB9KX0pLG0uZWFjaCh7SGVpZ2h0OlwiaGVpZ2h0XCIsV2lkdGg6XCJ3aWR0aFwifSxmdW5jdGlvbihhLGIpe20uZWFjaCh7cGFkZGluZzpcImlubmVyXCIrYSxjb250ZW50OmIsXCJcIjpcIm91dGVyXCIrYX0sZnVuY3Rpb24oYyxkKXttLmZuW2RdPWZ1bmN0aW9uKGQsZSl7dmFyIGY9YXJndW1lbnRzLmxlbmd0aCYmKGN8fFwiYm9vbGVhblwiIT10eXBlb2YgZCksZz1jfHwoZD09PSEwfHxlPT09ITA/XCJtYXJnaW5cIjpcImJvcmRlclwiKTtyZXR1cm4gVih0aGlzLGZ1bmN0aW9uKGIsYyxkKXt2YXIgZTtyZXR1cm4gbS5pc1dpbmRvdyhiKT9iLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtcImNsaWVudFwiK2FdOjk9PT1iLm5vZGVUeXBlPyhlPWIuZG9jdW1lbnRFbGVtZW50LE1hdGgubWF4KGIuYm9keVtcInNjcm9sbFwiK2FdLGVbXCJzY3JvbGxcIithXSxiLmJvZHlbXCJvZmZzZXRcIithXSxlW1wib2Zmc2V0XCIrYV0sZVtcImNsaWVudFwiK2FdKSk6dm9pZCAwPT09ZD9tLmNzcyhiLGMsZyk6bS5zdHlsZShiLGMsZCxnKX0sYixmP2Q6dm9pZCAwLGYsbnVsbCl9fSl9KSxtLmZuLnNpemU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5sZW5ndGh9LG0uZm4uYW5kU2VsZj1tLmZuLmFkZEJhY2ssXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kJiZkZWZpbmUoXCJqcXVlcnlcIixbXSxmdW5jdGlvbigpe3JldHVybiBtfSk7dmFyIGVjPWEualF1ZXJ5LGZjPWEuJDtyZXR1cm4gbS5ub0NvbmZsaWN0PWZ1bmN0aW9uKGIpe3JldHVybiBhLiQ9PT1tJiYoYS4kPWZjKSxiJiZhLmpRdWVyeT09PW0mJihhLmpRdWVyeT1lYyksbX0sdHlwZW9mIGI9PT1LJiYoYS5qUXVlcnk9YS4kPW0pLG19KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvdmVuZG9yL2h0bWw1U3RvcnlUaGVtZS9qcy9qcXVlcnkubWluLmpzIiwiLyoganF1ZXJ5LnNjcm9sbGV4IHYwLjIuMSB8IChjKSBAYWpsa24gfCBnaXRodWIuY29tL2FqbGtuL2pxdWVyeS5zY3JvbGxleCB8IE1JVCBsaWNlbnNlZCAqL1xyXG4hZnVuY3Rpb24odCl7ZnVuY3Rpb24gZSh0LGUsbil7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHQmJihcIiVcIj09dC5zbGljZSgtMSk/dD1wYXJzZUludCh0LnN1YnN0cmluZygwLHQubGVuZ3RoLTEpKS8xMDAqZTpcInZoXCI9PXQuc2xpY2UoLTIpP3Q9cGFyc2VJbnQodC5zdWJzdHJpbmcoMCx0Lmxlbmd0aC0yKSkvMTAwKm46XCJweFwiPT10LnNsaWNlKC0yKSYmKHQ9cGFyc2VJbnQodC5zdWJzdHJpbmcoMCx0Lmxlbmd0aC0yKSkpKSx0fXZhciBuPXQod2luZG93KSxpPTEsbz17fTtuLm9uKFwic2Nyb2xsXCIsZnVuY3Rpb24oKXt2YXIgZT1uLnNjcm9sbFRvcCgpO3QubWFwKG8sZnVuY3Rpb24odCl7d2luZG93LmNsZWFyVGltZW91dCh0LnRpbWVvdXRJZCksdC50aW1lb3V0SWQ9d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXt0LmhhbmRsZXIoZSl9LHQub3B0aW9ucy5kZWxheSl9KX0pLm9uKFwibG9hZFwiLGZ1bmN0aW9uKCl7bi50cmlnZ2VyKFwic2Nyb2xsXCIpfSksalF1ZXJ5LmZuLnNjcm9sbGV4PWZ1bmN0aW9uKGwpe3ZhciBzPXQodGhpcyk7aWYoMD09dGhpcy5sZW5ndGgpcmV0dXJuIHM7aWYodGhpcy5sZW5ndGg+MSl7Zm9yKHZhciByPTA7cjx0aGlzLmxlbmd0aDtyKyspdCh0aGlzW3JdKS5zY3JvbGxleChsKTtyZXR1cm4gc31pZihzLmRhdGEoXCJfc2Nyb2xsZXhJZFwiKSlyZXR1cm4gczt2YXIgYSx1LGgsYyxwO3N3aXRjaChhPWkrKyx1PWpRdWVyeS5leHRlbmQoe3RvcDowLGJvdHRvbTowLGRlbGF5OjAsbW9kZTpcImRlZmF1bHRcIixlbnRlcjpudWxsLGxlYXZlOm51bGwsaW5pdGlhbGl6ZTpudWxsLHRlcm1pbmF0ZTpudWxsLHNjcm9sbDpudWxsfSxsKSx1Lm1vZGUpe2Nhc2VcInRvcFwiOmg9ZnVuY3Rpb24odCxlLG4saSxvKXtyZXR1cm4gdD49aSYmbz49dH07YnJlYWs7Y2FzZVwiYm90dG9tXCI6aD1mdW5jdGlvbih0LGUsbixpLG8pe3JldHVybiBuPj1pJiZvPj1ufTticmVhaztjYXNlXCJtaWRkbGVcIjpoPWZ1bmN0aW9uKHQsZSxuLGksbyl7cmV0dXJuIGU+PWkmJm8+PWV9O2JyZWFrO2Nhc2VcInRvcC1vbmx5XCI6aD1mdW5jdGlvbih0LGUsbixpLG8pe3JldHVybiBpPj10JiZuPj1pfTticmVhaztjYXNlXCJib3R0b20tb25seVwiOmg9ZnVuY3Rpb24odCxlLG4saSxvKXtyZXR1cm4gbj49byYmbz49dH07YnJlYWs7ZGVmYXVsdDpjYXNlXCJkZWZhdWx0XCI6aD1mdW5jdGlvbih0LGUsbixpLG8pe3JldHVybiBuPj1pJiZvPj10fX1yZXR1cm4gYz1mdW5jdGlvbih0KXt2YXIgaSxvLGwscyxyLGEsdT10aGlzLnN0YXRlLGg9ITEsYz10aGlzLiRlbGVtZW50Lm9mZnNldCgpO2k9bi5oZWlnaHQoKSxvPXQraS8yLGw9dCtpLHM9dGhpcy4kZWxlbWVudC5vdXRlckhlaWdodCgpLHI9Yy50b3ArZSh0aGlzLm9wdGlvbnMudG9wLHMsaSksYT1jLnRvcCtzLWUodGhpcy5vcHRpb25zLmJvdHRvbSxzLGkpLGg9dGhpcy50ZXN0KHQsbyxsLHIsYSksaCE9dSYmKHRoaXMuc3RhdGU9aCxoP3RoaXMub3B0aW9ucy5lbnRlciYmdGhpcy5vcHRpb25zLmVudGVyLmFwcGx5KHRoaXMuZWxlbWVudCk6dGhpcy5vcHRpb25zLmxlYXZlJiZ0aGlzLm9wdGlvbnMubGVhdmUuYXBwbHkodGhpcy5lbGVtZW50KSksdGhpcy5vcHRpb25zLnNjcm9sbCYmdGhpcy5vcHRpb25zLnNjcm9sbC5hcHBseSh0aGlzLmVsZW1lbnQsWyhvLXIpLyhhLXIpXSl9LHA9e2lkOmEsb3B0aW9uczp1LHRlc3Q6aCxoYW5kbGVyOmMsc3RhdGU6bnVsbCxlbGVtZW50OnRoaXMsJGVsZW1lbnQ6cyx0aW1lb3V0SWQ6bnVsbH0sb1thXT1wLHMuZGF0YShcIl9zY3JvbGxleElkXCIscC5pZCkscC5vcHRpb25zLmluaXRpYWxpemUmJnAub3B0aW9ucy5pbml0aWFsaXplLmFwcGx5KHRoaXMpLHN9LGpRdWVyeS5mbi51bnNjcm9sbGV4PWZ1bmN0aW9uKCl7dmFyIGU9dCh0aGlzKTtpZigwPT10aGlzLmxlbmd0aClyZXR1cm4gZTtpZih0aGlzLmxlbmd0aD4xKXtmb3IodmFyIG49MDtuPHRoaXMubGVuZ3RoO24rKyl0KHRoaXNbbl0pLnVuc2Nyb2xsZXgoKTtyZXR1cm4gZX12YXIgaSxsO3JldHVybihpPWUuZGF0YShcIl9zY3JvbGxleElkXCIpKT8obD1vW2ldLHdpbmRvdy5jbGVhclRpbWVvdXQobC50aW1lb3V0SWQpLGRlbGV0ZSBvW2ldLGUucmVtb3ZlRGF0YShcIl9zY3JvbGxleElkXCIpLGwub3B0aW9ucy50ZXJtaW5hdGUmJmwub3B0aW9ucy50ZXJtaW5hdGUuYXBwbHkodGhpcyksZSk6ZX19KGpRdWVyeSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy92ZW5kb3IvaHRtbDVTdG9yeVRoZW1lL2pzL2pxdWVyeS5zY3JvbGxleC5taW4uanMiLCIvKiBqcXVlcnkuc2Nyb2xseSB2MS4wLjAtZGV2IHwgKGMpIEBhamxrbiB8IE1JVCBsaWNlbnNlZCAqL1xyXG4oZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdShzLG8pe3ZhciB1LGEsZjtpZigodT1lKHMpKVt0XT09MClyZXR1cm4gbjthPXVbaV0oKVtyXTtzd2l0Y2goby5hbmNob3Ipe2Nhc2VcIm1pZGRsZVwiOmY9YS0oZSh3aW5kb3cpLmhlaWdodCgpLXUub3V0ZXJIZWlnaHQoKSkvMjticmVhaztkZWZhdWx0OmNhc2UgcjpmPU1hdGgubWF4KGEsMCl9cmV0dXJuIHR5cGVvZiBvW2ldPT1cImZ1bmN0aW9uXCI/Zi09b1tpXSgpOmYtPW9baV0sZn12YXIgdD1cImxlbmd0aFwiLG49bnVsbCxyPVwidG9wXCIsaT1cIm9mZnNldFwiLHM9XCJjbGljay5zY3JvbGx5XCIsbz1lKHdpbmRvdyk7ZS5mbi5zY3JvbGx5PWZ1bmN0aW9uKGkpe3ZhciBvLGEsZixsLGM9ZSh0aGlzKTtpZih0aGlzW3RdPT0wKXJldHVybiBjO2lmKHRoaXNbdF0+MSl7Zm9yKG89MDtvPHRoaXNbdF07bysrKWUodGhpc1tvXSkuc2Nyb2xseShpKTtyZXR1cm4gY31sPW4sZj1jLmF0dHIoXCJocmVmXCIpO2lmKGYuY2hhckF0KDApIT1cIiNcInx8Zlt0XTwyKXJldHVybiBjO2E9alF1ZXJ5LmV4dGVuZCh7YW5jaG9yOnIsZWFzaW5nOlwic3dpbmdcIixvZmZzZXQ6MCxwYXJlbnQ6ZShcImJvZHksaHRtbFwiKSxwb2xsT25jZTohMSxzcGVlZDoxZTN9LGkpLGEucG9sbE9uY2UmJihsPXUoZixhKSksYy5vZmYocykub24ocyxmdW5jdGlvbihlKXt2YXIgdD1sIT09bj9sOnUoZixhKTt0IT09biYmKGUucHJldmVudERlZmF1bHQoKSxhLnBhcmVudC5zdG9wKCkuYW5pbWF0ZSh7c2Nyb2xsVG9wOnR9LGEuc3BlZWQsYS5lYXNpbmcpKX0pfX0pKGpRdWVyeSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy92ZW5kb3IvaHRtbDVTdG9yeVRoZW1lL2pzL2pxdWVyeS5zY3JvbGx5Lm1pbi5qcyIsIi8qXHJcblx0U3RvcnkgYnkgSFRNTDUgVVBcclxuXHRodG1sNXVwLm5ldCB8IEBhamxrblxyXG5cdEZyZWUgZm9yIHBlcnNvbmFsIGFuZCBjb21tZXJjaWFsIHVzZSB1bmRlciB0aGUgQ0NBIDMuMCBsaWNlbnNlIChodG1sNXVwLm5ldC9saWNlbnNlKVxyXG4qL1xyXG50cnkge1xyXG4gICAgd2luZG93LiQgPSB3aW5kb3cualF1ZXJ5ID0gcmVxdWlyZSgnLi9qcXVlcnkubWluJyk7XHJcbn0gY2F0Y2ggKGUpIHt9XHJcblxyXG5yZXF1aXJlKCcuL2pxdWVyeS5zY3JvbGxleC5taW4nKTtcclxucmVxdWlyZSgnLi9qcXVlcnkuc2Nyb2xseS5taW4nKTtcclxuY29uc3Qgc2tlbCA9IHJlcXVpcmUoJy4vc2tlbC5taW4nKTtcclxucmVxdWlyZSgnLi91dGlsJyk7XHJcblxyXG4oZnVuY3Rpb24oJCkge1xyXG5cclxuXHRza2VsLmJyZWFrcG9pbnRzKHtcclxuXHRcdHhsYXJnZTogJyhtYXgtd2lkdGg6IDE2ODBweCknLFxyXG5cdFx0bGFyZ2U6ICcobWF4LXdpZHRoOiAxMjgwcHgpJyxcclxuXHRcdG1lZGl1bTogJyhtYXgtd2lkdGg6IDk4MHB4KScsXHJcblx0XHRzbWFsbDogJyhtYXgtd2lkdGg6IDczNnB4KScsXHJcblx0XHR4c21hbGw6ICcobWF4LXdpZHRoOiA0ODBweCknLFxyXG5cdFx0eHhzbWFsbDogJyhtYXgtd2lkdGg6IDM2MHB4KSdcclxuXHR9KTtcclxuXHJcblx0JChmdW5jdGlvbigpIHtcclxuXHJcblx0XHR2YXJcdCR3aW5kb3cgPSAkKHdpbmRvdyksXHJcblx0XHRcdCRib2R5ID0gJCgnYm9keScpLFxyXG5cdFx0XHQkd3JhcHBlciA9ICQoJyN3cmFwcGVyJyk7XHJcblxyXG5cdFx0Ly8gRGlzYWJsZSBhbmltYXRpb25zL3RyYW5zaXRpb25zIHVudGlsIHRoZSBwYWdlIGhhcyBsb2FkZWQuXHJcblx0XHRcdCRib2R5LmFkZENsYXNzKCdpcy1sb2FkaW5nJyk7XHJcblxyXG5cdFx0XHQkd2luZG93Lm9uKCdsb2FkJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHQkYm9keS5yZW1vdmVDbGFzcygnaXMtbG9hZGluZycpO1xyXG5cdFx0XHRcdH0sIDEwMCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdC8vIEZpeDogUGxhY2Vob2xkZXIgcG9seWZpbGwuXHJcblx0XHRcdCQoJ2Zvcm0nKS5wbGFjZWhvbGRlcigpO1xyXG5cclxuXHRcdC8vIFByaW9yaXRpemUgXCJpbXBvcnRhbnRcIiBlbGVtZW50cyBvbiBtZWRpdW0uXHJcblx0XHRcdHNrZWwub24oJyttZWRpdW0gLW1lZGl1bScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdCQucHJpb3JpdGl6ZShcclxuXHRcdFx0XHRcdCcuaW1wb3J0YW50XFxcXDI4IG1lZGl1bVxcXFwyOScsXHJcblx0XHRcdFx0XHRza2VsLmJyZWFrcG9pbnQoJ21lZGl1bScpLmFjdGl2ZVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdC8vIEJyb3dzZXIgZml4ZXMuXHJcblxyXG5cdFx0XHQvLyBJRTogRmxleGJveCBtaW4taGVpZ2h0IGJ1Zy5cclxuXHRcdFx0XHRpZiAoc2tlbC52YXJzLmJyb3dzZXIgPT0gJ2llJylcclxuXHRcdFx0XHRcdChmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdFx0XHRcdHZhciBmbGV4Ym94Rml4VGltZW91dElkO1xyXG5cclxuXHRcdFx0XHRcdFx0JHdpbmRvdy5vbigncmVzaXplLmZsZXhib3gtZml4JywgZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHZhciAkeCA9ICQoJy5mdWxsc2NyZWVuJyk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGNsZWFyVGltZW91dChmbGV4Ym94Rml4VGltZW91dElkKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0ZmxleGJveEZpeFRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCR4LnByb3AoJ3Njcm9sbEhlaWdodCcpID4gJHdpbmRvdy5oZWlnaHQoKSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0JHguY3NzKCdoZWlnaHQnLCAnYXV0bycpO1xyXG5cdFx0XHRcdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQkeC5jc3MoJ2hlaWdodCcsICcxMDB2aCcpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR9LCAyNTApO1xyXG5cclxuXHRcdFx0XHRcdFx0fSkudHJpZ2dlckhhbmRsZXIoJ3Jlc2l6ZS5mbGV4Ym94LWZpeCcpO1xyXG5cclxuXHRcdFx0XHRcdH0pKCk7XHJcblxyXG5cdFx0XHQvLyBPYmplY3QgZml0IHdvcmthcm91bmQuXHJcblx0XHRcdFx0aWYgKCFza2VsLmNhblVzZSgnb2JqZWN0LWZpdCcpKVxyXG5cdFx0XHRcdFx0KGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0XHRcdFx0JCgnLmJhbm5lciAuaW1hZ2UsIC5zcG90bGlnaHQgLmltYWdlJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKSxcclxuXHRcdFx0XHRcdFx0XHRcdCRpbWcgPSAkdGhpcy5jaGlsZHJlbignaW1nJyksXHJcblx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbkNsYXNzID0gJHRoaXMucGFyZW50KCkuYXR0cignY2xhc3MnKS5tYXRjaCgvaW1hZ2UtcG9zaXRpb24tKFthLXpdKykvKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0Ly8gU2V0IGltYWdlLlxyXG5cdFx0XHRcdFx0XHRcdFx0JHRoaXNcclxuXHRcdFx0XHRcdFx0XHRcdFx0LmNzcygnYmFja2dyb3VuZC1pbWFnZScsICd1cmwoXCInICsgJGltZy5hdHRyKCdzcmMnKSArICdcIiknKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuY3NzKCdiYWNrZ3JvdW5kLXJlcGVhdCcsICduby1yZXBlYXQnKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuY3NzKCdiYWNrZ3JvdW5kLXNpemUnLCAnY292ZXInKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0Ly8gU2V0IHBvc2l0aW9uLlxyXG5cdFx0XHRcdFx0XHRcdFx0c3dpdGNoIChwb3NpdGlvbkNsYXNzLmxlbmd0aCA+IDEgPyBwb3NpdGlvbkNsYXNzWzFdIDogJycpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgJ2xlZnQnOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCR0aGlzLmNzcygnYmFja2dyb3VuZC1wb3NpdGlvbicsICdsZWZ0Jyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjYXNlICdyaWdodCc6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0JHRoaXMuY3NzKCdiYWNrZ3JvdW5kLXBvc2l0aW9uJywgJ3JpZ2h0Jyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjYXNlICdjZW50ZXInOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCR0aGlzLmNzcygnYmFja2dyb3VuZC1wb3NpdGlvbicsICdjZW50ZXInKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vIEhpZGUgb3JpZ2luYWwuXHJcblx0XHRcdFx0XHRcdFx0XHQkaW1nLmNzcygnb3BhY2l0eScsICcwJyk7XHJcblxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHR9KSgpO1xyXG5cclxuXHRcdC8vIFNtb290aCBzY3JvbGwuXHJcblx0XHRcdCQoJy5zbW9vdGgtc2Nyb2xsJykuc2Nyb2xseSgpO1xyXG5cdFx0XHQkKCcuc21vb3RoLXNjcm9sbC1taWRkbGUnKS5zY3JvbGx5KHsgYW5jaG9yOiAnbWlkZGxlJyB9KTtcclxuXHJcblx0XHQvLyBXcmFwcGVyLlxyXG5cdFx0XHQkd3JhcHBlci5jaGlsZHJlbigpXHJcblx0XHRcdFx0LnNjcm9sbGV4KHtcclxuXHRcdFx0XHRcdHRvcDpcdFx0JzMwdmgnLFxyXG5cdFx0XHRcdFx0Ym90dG9tOlx0XHQnMzB2aCcsXHJcblx0XHRcdFx0XHRpbml0aWFsaXplOlx0ZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2lzLWluYWN0aXZlJyk7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0dGVybWluYXRlOlx0ZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoJ2lzLWluYWN0aXZlJyk7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZW50ZXI6XHRcdGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdpcy1pbmFjdGl2ZScpO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGxlYXZlOlx0XHRmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdFx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoJHRoaXMuaGFzQ2xhc3MoJ29uc2Nyb2xsLWJpZGlyZWN0aW9uYWwnKSlcclxuXHRcdFx0XHRcdFx0XHQkdGhpcy5hZGRDbGFzcygnaXMtaW5hY3RpdmUnKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0Ly8gSXRlbXMuXHJcblx0XHRcdCQoJy5pdGVtcycpXHJcblx0XHRcdFx0LnNjcm9sbGV4KHtcclxuXHRcdFx0XHRcdHRvcDpcdFx0JzMwdmgnLFxyXG5cdFx0XHRcdFx0Ym90dG9tOlx0XHQnMzB2aCcsXHJcblx0XHRcdFx0XHRkZWxheTpcdFx0NTAsXHJcblx0XHRcdFx0XHRpbml0aWFsaXplOlx0ZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2lzLWluYWN0aXZlJyk7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0dGVybWluYXRlOlx0ZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoJ2lzLWluYWN0aXZlJyk7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZW50ZXI6XHRcdGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdpcy1pbmFjdGl2ZScpO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGxlYXZlOlx0XHRmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdFx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoJHRoaXMuaGFzQ2xhc3MoJ29uc2Nyb2xsLWJpZGlyZWN0aW9uYWwnKSlcclxuXHRcdFx0XHRcdFx0XHQkdGhpcy5hZGRDbGFzcygnaXMtaW5hY3RpdmUnKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuY2hpbGRyZW4oKVxyXG5cdFx0XHRcdFx0LndyYXBJbm5lcignPGRpdiBjbGFzcz1cImlubmVyXCI+PC9kaXY+Jyk7XHJcblxyXG5cdFx0Ly8gR2FsbGVyeS5cclxuXHRcdFx0JCgnLmdhbGxlcnknKVxyXG5cdFx0XHRcdC53cmFwSW5uZXIoJzxkaXYgY2xhc3M9XCJpbm5lclwiPjwvZGl2PicpXHJcblx0XHRcdFx0LnByZXBlbmQoc2tlbC52YXJzLm1vYmlsZSA/ICcnIDogJzxkaXYgY2xhc3M9XCJmb3J3YXJkXCI+PC9kaXY+PGRpdiBjbGFzcz1cImJhY2t3YXJkXCI+PC9kaXY+JylcclxuXHRcdFx0XHQuc2Nyb2xsZXgoe1xyXG5cdFx0XHRcdFx0dG9wOlx0XHQnMzB2aCcsXHJcblx0XHRcdFx0XHRib3R0b206XHRcdCczMHZoJyxcclxuXHRcdFx0XHRcdGRlbGF5Olx0XHQ1MCxcclxuXHRcdFx0XHRcdGluaXRpYWxpemU6XHRmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcygnaXMtaW5hY3RpdmUnKTtcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR0ZXJtaW5hdGU6XHRmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKS5yZW1vdmVDbGFzcygnaXMtaW5hY3RpdmUnKTtcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRlbnRlcjpcdFx0ZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoJ2lzLWluYWN0aXZlJyk7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0bGVhdmU6XHRcdGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0XHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcblx0XHRcdFx0XHRcdGlmICgkdGhpcy5oYXNDbGFzcygnb25zY3JvbGwtYmlkaXJlY3Rpb25hbCcpKVxyXG5cdFx0XHRcdFx0XHRcdCR0aGlzLmFkZENsYXNzKCdpcy1pbmFjdGl2ZScpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5jaGlsZHJlbignLmlubmVyJylcclxuXHRcdFx0XHRcdC8vLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJylcclxuXHRcdFx0XHRcdC5jc3MoJ292ZXJmbG93LXknLCBza2VsLnZhcnMubW9iaWxlID8gJ3Zpc2libGUnIDogJ2hpZGRlbicpXHJcblx0XHRcdFx0XHQuY3NzKCdvdmVyZmxvdy14Jywgc2tlbC52YXJzLm1vYmlsZSA/ICdzY3JvbGwnIDogJ2hpZGRlbicpXHJcblx0XHRcdFx0XHQuc2Nyb2xsTGVmdCgwKTtcclxuXHJcblx0XHRcdC8vIFN0eWxlICMxLlxyXG5cdFx0XHRcdC8vIC4uLlxyXG5cclxuXHRcdFx0Ly8gU3R5bGUgIzIuXHJcblx0XHRcdFx0JCgnLmdhbGxlcnknKVxyXG5cdFx0XHRcdFx0Lm9uKCd3aGVlbCcsICcuaW5uZXInLCBmdW5jdGlvbihldmVudCkge1xyXG5cclxuXHRcdFx0XHRcdFx0dmFyXHQkdGhpcyA9ICQodGhpcyksXHJcblx0XHRcdFx0XHRcdFx0ZGVsdGEgPSAoZXZlbnQub3JpZ2luYWxFdmVudC5kZWx0YVggKiAxMCk7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBDYXAgZGVsdGEuXHJcblx0XHRcdFx0XHRcdFx0aWYgKGRlbHRhID4gMClcclxuXHRcdFx0XHRcdFx0XHRcdGRlbHRhID0gTWF0aC5taW4oMjUsIGRlbHRhKTtcclxuXHRcdFx0XHRcdFx0XHRlbHNlIGlmIChkZWx0YSA8IDApXHJcblx0XHRcdFx0XHRcdFx0XHRkZWx0YSA9IE1hdGgubWF4KC0yNSwgZGVsdGEpO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gU2Nyb2xsLlxyXG5cdFx0XHRcdFx0XHRcdCR0aGlzLnNjcm9sbExlZnQoICR0aGlzLnNjcm9sbExlZnQoKSArIGRlbHRhICk7XHJcblxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdC5vbignbW91c2VlbnRlcicsICcuZm9yd2FyZCwgLmJhY2t3YXJkJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcblx0XHRcdFx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyksXHJcblx0XHRcdFx0XHRcdFx0JGlubmVyID0gJHRoaXMuc2libGluZ3MoJy5pbm5lcicpLFxyXG5cdFx0XHRcdFx0XHRcdGRpcmVjdGlvbiA9ICgkdGhpcy5oYXNDbGFzcygnZm9yd2FyZCcpID8gMSA6IC0xKTtcclxuXHJcblx0XHRcdFx0XHRcdC8vIENsZWFyIG1vdmUgaW50ZXJ2YWwuXHJcblx0XHRcdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLl9nYWxsZXJ5X21vdmVJbnRlcnZhbElkKTtcclxuXHJcblx0XHRcdFx0XHRcdC8vIFN0YXJ0IGludGVydmFsLlxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuX2dhbGxlcnlfbW92ZUludGVydmFsSWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRcdCRpbm5lci5zY3JvbGxMZWZ0KCAkaW5uZXIuc2Nyb2xsTGVmdCgpICsgKDUgKiBkaXJlY3Rpb24pICk7XHJcblx0XHRcdFx0XHRcdFx0fSwgMTApO1xyXG5cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQub24oJ21vdXNlbGVhdmUnLCAnLmZvcndhcmQsIC5iYWNrd2FyZCcsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBDbGVhciBtb3ZlIGludGVydmFsLlxyXG5cdFx0XHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy5fZ2FsbGVyeV9tb3ZlSW50ZXJ2YWxJZCk7XHJcblxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHQvLyBMaWdodGJveC5cclxuXHRcdFx0XHQkKCcuZ2FsbGVyeS5saWdodGJveCcpXHJcblx0XHRcdFx0XHQub24oJ2NsaWNrJywgJ2EnLCBmdW5jdGlvbihldmVudCkge1xyXG5cclxuXHRcdFx0XHRcdFx0dmFyICRhID0gJCh0aGlzKSxcclxuXHRcdFx0XHRcdFx0XHQkZ2FsbGVyeSA9ICRhLnBhcmVudHMoJy5nYWxsZXJ5JyksXHJcblx0XHRcdFx0XHRcdFx0JG1vZGFsID0gJGdhbGxlcnkuY2hpbGRyZW4oJy5tb2RhbCcpLFxyXG5cdFx0XHRcdFx0XHRcdCRtb2RhbEltZyA9ICRtb2RhbC5maW5kKCdpbWcnKSxcclxuXHRcdFx0XHRcdFx0XHRocmVmID0gJGEuYXR0cignaHJlZicpO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gTm90IGFuIGltYWdlPyBCYWlsLlxyXG5cdFx0XHRcdFx0XHRcdGlmICghaHJlZi5tYXRjaCgvXFwuKGpwZ3xnaWZ8cG5nfG1wNCkkLykpXHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBQcmV2ZW50IGRlZmF1bHQuXHJcblx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblx0XHRcdFx0XHRcdC8vIExvY2tlZD8gQmFpbC5cclxuXHRcdFx0XHRcdFx0XHRpZiAoJG1vZGFsWzBdLl9sb2NrZWQpXHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBMb2NrLlxyXG5cdFx0XHRcdFx0XHRcdCRtb2RhbFswXS5fbG9ja2VkID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0XHRcdC8vIFNldCBzcmMuXHJcblx0XHRcdFx0XHRcdFx0JG1vZGFsSW1nLmF0dHIoJ3NyYycsIGhyZWYpO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gU2V0IHZpc2libGUuXHJcblx0XHRcdFx0XHRcdFx0JG1vZGFsLmFkZENsYXNzKCd2aXNpYmxlJyk7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBGb2N1cy5cclxuXHRcdFx0XHRcdFx0XHQkbW9kYWwuZm9jdXMoKTtcclxuXHJcblx0XHRcdFx0XHRcdC8vIERlbGF5LlxyXG5cdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gVW5sb2NrLlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQkbW9kYWxbMF0uX2xvY2tlZCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR9LCA2MDApO1xyXG5cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQub24oJ2NsaWNrJywgJy5tb2RhbCcsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgJG1vZGFsID0gJCh0aGlzKSxcclxuXHRcdFx0XHRcdFx0XHQkbW9kYWxJbWcgPSAkbW9kYWwuZmluZCgnaW1nJyk7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBMb2NrZWQ/IEJhaWwuXHJcblx0XHRcdFx0XHRcdFx0aWYgKCRtb2RhbFswXS5fbG9ja2VkKVxyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gQWxyZWFkeSBoaWRkZW4/IEJhaWwuXHJcblx0XHRcdFx0XHRcdFx0aWYgKCEkbW9kYWwuaGFzQ2xhc3MoJ3Zpc2libGUnKSlcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdFx0XHRcdC8vIExvY2suXHJcblx0XHRcdFx0XHRcdFx0JG1vZGFsWzBdLl9sb2NrZWQgPSB0cnVlO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gQ2xlYXIgdmlzaWJsZSwgbG9hZGVkLlxyXG5cdFx0XHRcdFx0XHRcdCRtb2RhbFxyXG5cdFx0XHRcdFx0XHRcdFx0LnJlbW92ZUNsYXNzKCdsb2FkZWQnKVxyXG5cclxuXHRcdFx0XHRcdFx0Ly8gRGVsYXkuXHJcblx0XHRcdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHQkbW9kYWxcclxuXHRcdFx0XHRcdFx0XHRcdFx0LnJlbW92ZUNsYXNzKCd2aXNpYmxlJylcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gQ2xlYXIgc3JjLlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCRtb2RhbEltZy5hdHRyKCdzcmMnLCAnJyk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBVbmxvY2suXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0JG1vZGFsWzBdLl9sb2NrZWQgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdC8vIEZvY3VzLlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCRib2R5LmZvY3VzKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0fSwgNDc1KTtcclxuXHJcblx0XHRcdFx0XHRcdFx0fSwgMTI1KTtcclxuXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0Lm9uKCdrZXlwcmVzcycsICcubW9kYWwnLCBmdW5jdGlvbihldmVudCkge1xyXG5cclxuXHRcdFx0XHRcdFx0dmFyICRtb2RhbCA9ICQodGhpcyk7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBFc2NhcGU/IEhpZGUgbW9kYWwuXHJcblx0XHRcdFx0XHRcdFx0aWYgKGV2ZW50LmtleUNvZGUgPT0gMjcpXHJcblx0XHRcdFx0XHRcdFx0XHQkbW9kYWwudHJpZ2dlcignY2xpY2snKTtcclxuXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0LnByZXBlbmQoJzxkaXYgY2xhc3M9XCJtb2RhbFwiIHRhYkluZGV4PVwiLTFcIj48ZGl2IGNsYXNzPVwiaW5uZXJcIj48aW1nIHNyYz1cIlwiIC8+PC9kaXY+PC9kaXY+JylcclxuXHRcdFx0XHRcdFx0LmZpbmQoJ2ltZycpXHJcblx0XHRcdFx0XHRcdFx0Lm9uKCdsb2FkJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgJG1vZGFsSW1nID0gJCh0aGlzKSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0JG1vZGFsID0gJG1vZGFsSW1nLnBhcmVudHMoJy5tb2RhbCcpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBObyBsb25nZXIgdmlzaWJsZT8gQmFpbC5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoISRtb2RhbC5oYXNDbGFzcygndmlzaWJsZScpKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gU2V0IGxvYWRlZC5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQkbW9kYWwuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdH0sIDI3NSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGpRdWVyeSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvdmVuZG9yL2h0bWw1U3RvcnlUaGVtZS9qcy9tYWluLmpzIiwiLyogc2tlbC5qcyB2My4wLjEgfCAoYykgc2tlbC5pbyB8IE1JVCBsaWNlbnNlZCAqL1xyXG52YXIgc2tlbD1mdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciB0PXticmVha3BvaW50SWRzOm51bGwsZXZlbnRzOnt9LGlzSW5pdDohMSxvYmo6e2F0dGFjaG1lbnRzOnt9LGJyZWFrcG9pbnRzOnt9LGhlYWQ6bnVsbCxzdGF0ZXM6e319LHNkOlwiL1wiLHN0YXRlOm51bGwsc3RhdGVIYW5kbGVyczp7fSxzdGF0ZUlkOlwiXCIsdmFyczp7fSxET01SZWFkeTpudWxsLGluZGV4T2Y6bnVsbCxpc0FycmF5Om51bGwsaXRlcmF0ZTpudWxsLG1hdGNoZXNNZWRpYTpudWxsLGV4dGVuZDpmdW5jdGlvbihlLG4pe3QuaXRlcmF0ZShuLGZ1bmN0aW9uKGkpe3QuaXNBcnJheShuW2ldKT8odC5pc0FycmF5KGVbaV0pfHwoZVtpXT1bXSksdC5leHRlbmQoZVtpXSxuW2ldKSk6XCJvYmplY3RcIj09dHlwZW9mIG5baV0/KFwib2JqZWN0XCIhPXR5cGVvZiBlW2ldJiYoZVtpXT17fSksdC5leHRlbmQoZVtpXSxuW2ldKSk6ZVtpXT1uW2ldfSl9LG5ld1N0eWxlOmZ1bmN0aW9uKHQpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtyZXR1cm4gZS50eXBlPVwidGV4dC9jc3NcIixlLmlubmVySFRNTD10LGV9LF9jYW5Vc2U6bnVsbCxjYW5Vc2U6ZnVuY3Rpb24oZSl7dC5fY2FuVXNlfHwodC5fY2FuVXNlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO3ZhciBuPXQuX2NhblVzZS5zdHlsZSxpPWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrZS5zbGljZSgxKTtyZXR1cm4gZSBpbiBufHxcIk1velwiK2kgaW4gbnx8XCJXZWJraXRcIitpIGluIG58fFwiT1wiK2kgaW4gbnx8XCJtc1wiK2kgaW4gbn0sb246ZnVuY3Rpb24oZSxuKXt2YXIgaT1lLnNwbGl0KC9bXFxzXSsvKTtyZXR1cm4gdC5pdGVyYXRlKGksZnVuY3Rpb24oZSl7dmFyIGE9aVtlXTtpZih0LmlzSW5pdCl7aWYoXCJpbml0XCI9PWEpcmV0dXJuIHZvaWQgbigpO2lmKFwiY2hhbmdlXCI9PWEpbigpO2Vsc2V7dmFyIHI9YS5jaGFyQXQoMCk7aWYoXCIrXCI9PXJ8fFwiIVwiPT1yKXt2YXIgbz1hLnN1YnN0cmluZygxKTtpZihvIGluIHQub2JqLmJyZWFrcG9pbnRzKWlmKFwiK1wiPT1yJiZ0Lm9iai5icmVha3BvaW50c1tvXS5hY3RpdmUpbigpO2Vsc2UgaWYoXCIhXCI9PXImJiF0Lm9iai5icmVha3BvaW50c1tvXS5hY3RpdmUpcmV0dXJuIHZvaWQgbigpfX19dC5ldmVudHNbYV18fCh0LmV2ZW50c1thXT1bXSksdC5ldmVudHNbYV0ucHVzaChuKX0pLHR9LHRyaWdnZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIHQuZXZlbnRzW2VdJiYwIT10LmV2ZW50c1tlXS5sZW5ndGg/KHQuaXRlcmF0ZSh0LmV2ZW50c1tlXSxmdW5jdGlvbihuKXt0LmV2ZW50c1tlXVtuXSgpfSksdCk6dm9pZCAwfSxicmVha3BvaW50OmZ1bmN0aW9uKGUpe3JldHVybiB0Lm9iai5icmVha3BvaW50c1tlXX0sYnJlYWtwb2ludHM6ZnVuY3Rpb24oZSl7ZnVuY3Rpb24gbih0LGUpe3RoaXMubmFtZT10aGlzLmlkPXQsdGhpcy5tZWRpYT1lLHRoaXMuYWN0aXZlPSExLHRoaXMud2FzQWN0aXZlPSExfXJldHVybiBuLnByb3RvdHlwZS5tYXRjaGVzPWZ1bmN0aW9uKCl7cmV0dXJuIHQubWF0Y2hlc01lZGlhKHRoaXMubWVkaWEpfSxuLnByb3RvdHlwZS5zeW5jPWZ1bmN0aW9uKCl7dGhpcy53YXNBY3RpdmU9dGhpcy5hY3RpdmUsdGhpcy5hY3RpdmU9dGhpcy5tYXRjaGVzKCl9LHQuaXRlcmF0ZShlLGZ1bmN0aW9uKGkpe3Qub2JqLmJyZWFrcG9pbnRzW2ldPW5ldyBuKGksZVtpXSl9KSx3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe3QucG9sbCgpfSwwKSx0fSxhZGRTdGF0ZUhhbmRsZXI6ZnVuY3Rpb24oZSxuKXt0LnN0YXRlSGFuZGxlcnNbZV09bn0sY2FsbFN0YXRlSGFuZGxlcjpmdW5jdGlvbihlKXt2YXIgbj10LnN0YXRlSGFuZGxlcnNbZV0oKTt0Lml0ZXJhdGUobixmdW5jdGlvbihlKXt0LnN0YXRlLmF0dGFjaG1lbnRzLnB1c2gobltlXSl9KX0sY2hhbmdlU3RhdGU6ZnVuY3Rpb24oZSl7dC5pdGVyYXRlKHQub2JqLmJyZWFrcG9pbnRzLGZ1bmN0aW9uKGUpe3Qub2JqLmJyZWFrcG9pbnRzW2VdLnN5bmMoKX0pLHQudmFycy5sYXN0U3RhdGVJZD10LnN0YXRlSWQsdC5zdGF0ZUlkPWUsdC5icmVha3BvaW50SWRzPXQuc3RhdGVJZD09PXQuc2Q/W106dC5zdGF0ZUlkLnN1YnN0cmluZygxKS5zcGxpdCh0LnNkKSx0Lm9iai5zdGF0ZXNbdC5zdGF0ZUlkXT90LnN0YXRlPXQub2JqLnN0YXRlc1t0LnN0YXRlSWRdOih0Lm9iai5zdGF0ZXNbdC5zdGF0ZUlkXT17YXR0YWNobWVudHM6W119LHQuc3RhdGU9dC5vYmouc3RhdGVzW3Quc3RhdGVJZF0sdC5pdGVyYXRlKHQuc3RhdGVIYW5kbGVycyx0LmNhbGxTdGF0ZUhhbmRsZXIpKSx0LmRldGFjaEFsbCh0LnN0YXRlLmF0dGFjaG1lbnRzKSx0LmF0dGFjaEFsbCh0LnN0YXRlLmF0dGFjaG1lbnRzKSx0LnZhcnMuc3RhdGVJZD10LnN0YXRlSWQsdC52YXJzLnN0YXRlPXQuc3RhdGUsdC50cmlnZ2VyKFwiY2hhbmdlXCIpLHQuaXRlcmF0ZSh0Lm9iai5icmVha3BvaW50cyxmdW5jdGlvbihlKXt0Lm9iai5icmVha3BvaW50c1tlXS5hY3RpdmU/dC5vYmouYnJlYWtwb2ludHNbZV0ud2FzQWN0aXZlfHx0LnRyaWdnZXIoXCIrXCIrZSk6dC5vYmouYnJlYWtwb2ludHNbZV0ud2FzQWN0aXZlJiZ0LnRyaWdnZXIoXCItXCIrZSl9KX0sZ2VuZXJhdGVTdGF0ZUNvbmZpZzpmdW5jdGlvbihlLG4pe3ZhciBpPXt9O3JldHVybiB0LmV4dGVuZChpLGUpLHQuaXRlcmF0ZSh0LmJyZWFrcG9pbnRJZHMsZnVuY3Rpb24oZSl7dC5leHRlbmQoaSxuW3QuYnJlYWtwb2ludElkc1tlXV0pfSksaX0sZ2V0U3RhdGVJZDpmdW5jdGlvbigpe3ZhciBlPVwiXCI7cmV0dXJuIHQuaXRlcmF0ZSh0Lm9iai5icmVha3BvaW50cyxmdW5jdGlvbihuKXt2YXIgaT10Lm9iai5icmVha3BvaW50c1tuXTtpLm1hdGNoZXMoKSYmKGUrPXQuc2QraS5pZCl9KSxlfSxwb2xsOmZ1bmN0aW9uKCl7dmFyIGU9XCJcIjtlPXQuZ2V0U3RhdGVJZCgpLFwiXCI9PT1lJiYoZT10LnNkKSxlIT09dC5zdGF0ZUlkJiZ0LmNoYW5nZVN0YXRlKGUpfSxfYXR0YWNoOm51bGwsYXR0YWNoOmZ1bmN0aW9uKGUpe3ZhciBuPXQub2JqLmhlYWQsaT1lLmVsZW1lbnQ7cmV0dXJuIGkucGFyZW50Tm9kZSYmaS5wYXJlbnROb2RlLnRhZ05hbWU/ITE6KHQuX2F0dGFjaHx8KHQuX2F0dGFjaD1uLmZpcnN0Q2hpbGQpLG4uaW5zZXJ0QmVmb3JlKGksdC5fYXR0YWNoLm5leHRTaWJsaW5nKSxlLnBlcm1hbmVudCYmKHQuX2F0dGFjaD1pKSwhMCl9LGF0dGFjaEFsbDpmdW5jdGlvbihlKXt2YXIgbj1bXTt0Lml0ZXJhdGUoZSxmdW5jdGlvbih0KXtuW2VbdF0ucHJpb3JpdHldfHwobltlW3RdLnByaW9yaXR5XT1bXSksbltlW3RdLnByaW9yaXR5XS5wdXNoKGVbdF0pfSksbi5yZXZlcnNlKCksdC5pdGVyYXRlKG4sZnVuY3Rpb24oZSl7dC5pdGVyYXRlKG5bZV0sZnVuY3Rpb24oaSl7dC5hdHRhY2gobltlXVtpXSl9KX0pfSxkZXRhY2g6ZnVuY3Rpb24odCl7dmFyIGU9dC5lbGVtZW50O3JldHVybiB0LnBlcm1hbmVudHx8IWUucGFyZW50Tm9kZXx8ZS5wYXJlbnROb2RlJiYhZS5wYXJlbnROb2RlLnRhZ05hbWU/ITE6KGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKSwhMCl9LGRldGFjaEFsbDpmdW5jdGlvbihlKXt2YXIgbj17fTt0Lml0ZXJhdGUoZSxmdW5jdGlvbih0KXtuW2VbdF0uaWRdPSEwfSksdC5pdGVyYXRlKHQub2JqLmF0dGFjaG1lbnRzLGZ1bmN0aW9uKGUpe2UgaW4gbnx8dC5kZXRhY2godC5vYmouYXR0YWNobWVudHNbZV0pfSl9LGF0dGFjaG1lbnQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGUgaW4gdC5vYmouYXR0YWNobWVudHM/dC5vYmouYXR0YWNobWVudHNbZV06bnVsbH0sbmV3QXR0YWNobWVudDpmdW5jdGlvbihlLG4saSxhKXtyZXR1cm4gdC5vYmouYXR0YWNobWVudHNbZV09e2lkOmUsZWxlbWVudDpuLHByaW9yaXR5OmkscGVybWFuZW50OmF9fSxpbml0OmZ1bmN0aW9uKCl7dC5pbml0TWV0aG9kcygpLHQuaW5pdFZhcnMoKSx0LmluaXRFdmVudHMoKSx0Lm9iai5oZWFkPWRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXSx0LmlzSW5pdD0hMCx0LnRyaWdnZXIoXCJpbml0XCIpfSxpbml0RXZlbnRzOmZ1bmN0aW9uKCl7dC5vbihcInJlc2l6ZVwiLGZ1bmN0aW9uKCl7dC5wb2xsKCl9KSx0Lm9uKFwib3JpZW50YXRpb25DaGFuZ2VcIixmdW5jdGlvbigpe3QucG9sbCgpfSksdC5ET01SZWFkeShmdW5jdGlvbigpe3QudHJpZ2dlcihcInJlYWR5XCIpfSksd2luZG93Lm9ubG9hZCYmdC5vbihcImxvYWRcIix3aW5kb3cub25sb2FkKSx3aW5kb3cub25sb2FkPWZ1bmN0aW9uKCl7dC50cmlnZ2VyKFwibG9hZFwiKX0sd2luZG93Lm9ucmVzaXplJiZ0Lm9uKFwicmVzaXplXCIsd2luZG93Lm9ucmVzaXplKSx3aW5kb3cub25yZXNpemU9ZnVuY3Rpb24oKXt0LnRyaWdnZXIoXCJyZXNpemVcIil9LHdpbmRvdy5vbm9yaWVudGF0aW9uY2hhbmdlJiZ0Lm9uKFwib3JpZW50YXRpb25DaGFuZ2VcIix3aW5kb3cub25vcmllbnRhdGlvbmNoYW5nZSksd2luZG93Lm9ub3JpZW50YXRpb25jaGFuZ2U9ZnVuY3Rpb24oKXt0LnRyaWdnZXIoXCJvcmllbnRhdGlvbkNoYW5nZVwiKX19LGluaXRNZXRob2RzOmZ1bmN0aW9uKCl7ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcj8hZnVuY3Rpb24oZSxuKXt0LkRPTVJlYWR5PW4oKX0oXCJkb21yZWFkeVwiLGZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0KXtmb3Iocj0xO3Q9bi5zaGlmdCgpOyl0KCl9dmFyIGUsbj1bXSxpPWRvY3VtZW50LGE9XCJET01Db250ZW50TG9hZGVkXCIscj0vXmxvYWRlZHxeYy8udGVzdChpLnJlYWR5U3RhdGUpO3JldHVybiBpLmFkZEV2ZW50TGlzdGVuZXIoYSxlPWZ1bmN0aW9uKCl7aS5yZW1vdmVFdmVudExpc3RlbmVyKGEsZSksdCgpfSksZnVuY3Rpb24odCl7cj90KCk6bi5wdXNoKHQpfX0pOiFmdW5jdGlvbihlLG4pe3QuRE9NUmVhZHk9bigpfShcImRvbXJlYWR5XCIsZnVuY3Rpb24odCl7ZnVuY3Rpb24gZSh0KXtmb3IoaD0xO3Q9aS5zaGlmdCgpOyl0KCl9dmFyIG4saT1bXSxhPSExLHI9ZG9jdW1lbnQsbz1yLmRvY3VtZW50RWxlbWVudCxzPW8uZG9TY3JvbGwsYz1cIkRPTUNvbnRlbnRMb2FkZWRcIixkPVwiYWRkRXZlbnRMaXN0ZW5lclwiLHU9XCJvbnJlYWR5c3RhdGVjaGFuZ2VcIixsPVwicmVhZHlTdGF0ZVwiLGY9cz8vXmxvYWRlZHxeYy86L15sb2FkZWR8Yy8saD1mLnRlc3QocltsXSk7cmV0dXJuIHJbZF0mJnJbZF0oYyxuPWZ1bmN0aW9uKCl7ci5yZW1vdmVFdmVudExpc3RlbmVyKGMsbixhKSxlKCl9LGEpLHMmJnIuYXR0YWNoRXZlbnQodSxuPWZ1bmN0aW9uKCl7L15jLy50ZXN0KHJbbF0pJiYoci5kZXRhY2hFdmVudCh1LG4pLGUoKSl9KSx0PXM/ZnVuY3Rpb24oZSl7c2VsZiE9dG9wP2g/ZSgpOmkucHVzaChlKTpmdW5jdGlvbigpe3RyeXtvLmRvU2Nyb2xsKFwibGVmdFwiKX1jYXRjaChuKXtyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe3QoZSl9LDUwKX1lKCl9KCl9OmZ1bmN0aW9uKHQpe2g/dCgpOmkucHVzaCh0KX19KSxBcnJheS5wcm90b3R5cGUuaW5kZXhPZj90LmluZGV4T2Y9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC5pbmRleE9mKGUpfTp0LmluZGV4T2Y9ZnVuY3Rpb24odCxlKXtpZihcInN0cmluZ1wiPT10eXBlb2YgdClyZXR1cm4gdC5pbmRleE9mKGUpO3ZhciBuLGksYT1lP2U6MDtpZighdGhpcyl0aHJvdyBuZXcgVHlwZUVycm9yO2lmKGk9dGhpcy5sZW5ndGgsMD09PWl8fGE+PWkpcmV0dXJuLTE7Zm9yKDA+YSYmKGE9aS1NYXRoLmFicyhhKSksbj1hO2k+bjtuKyspaWYodGhpc1tuXT09PXQpcmV0dXJuIG47cmV0dXJuLTF9LEFycmF5LmlzQXJyYXk/dC5pc0FycmF5PWZ1bmN0aW9uKHQpe3JldHVybiBBcnJheS5pc0FycmF5KHQpfTp0LmlzQXJyYXk9ZnVuY3Rpb24odCl7cmV0dXJuXCJbb2JqZWN0IEFycmF5XVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpfSxPYmplY3Qua2V5cz90Lml0ZXJhdGU9ZnVuY3Rpb24odCxlKXtpZighdClyZXR1cm5bXTt2YXIgbixpPU9iamVjdC5rZXlzKHQpO2ZvcihuPTA7aVtuXSYmZShpW25dLHRbaVtuXV0pIT09ITE7bisrKTt9OnQuaXRlcmF0ZT1mdW5jdGlvbih0LGUpe2lmKCF0KXJldHVybltdO3ZhciBuO2ZvcihuIGluIHQpaWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsbikmJmUobix0W25dKT09PSExKWJyZWFrfSx3aW5kb3cubWF0Y2hNZWRpYT90Lm1hdGNoZXNNZWRpYT1mdW5jdGlvbih0KXtyZXR1cm5cIlwiPT10PyEwOndpbmRvdy5tYXRjaE1lZGlhKHQpLm1hdGNoZXN9OndpbmRvdy5zdHlsZU1lZGlhfHx3aW5kb3cubWVkaWE/dC5tYXRjaGVzTWVkaWE9ZnVuY3Rpb24odCl7aWYoXCJcIj09dClyZXR1cm4hMDt2YXIgZT13aW5kb3cuc3R5bGVNZWRpYXx8d2luZG93Lm1lZGlhO3JldHVybiBlLm1hdGNoTWVkaXVtKHR8fFwiYWxsXCIpfTp3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZT90Lm1hdGNoZXNNZWRpYT1mdW5jdGlvbih0KXtpZihcIlwiPT10KXJldHVybiEwO3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKSxuPWRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpWzBdLGk9bnVsbDtlLnR5cGU9XCJ0ZXh0L2Nzc1wiLGUuaWQ9XCJtYXRjaG1lZGlhanMtdGVzdFwiLG4ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZSxuKSxpPVwiZ2V0Q29tcHV0ZWRTdHlsZVwiaW4gd2luZG93JiZ3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlLG51bGwpfHxlLmN1cnJlbnRTdHlsZTt2YXIgYT1cIkBtZWRpYSBcIit0K1wieyAjbWF0Y2htZWRpYWpzLXRlc3QgeyB3aWR0aDogMXB4OyB9IH1cIjtyZXR1cm4gZS5zdHlsZVNoZWV0P2Uuc3R5bGVTaGVldC5jc3NUZXh0PWE6ZS50ZXh0Q29udGVudD1hLFwiMXB4XCI9PT1pLndpZHRofTp0Lm1hdGNoZXNNZWRpYT1mdW5jdGlvbih0KXtpZihcIlwiPT10KXJldHVybiEwO3ZhciBlLG4saSxhLHI9e1wibWluLXdpZHRoXCI6bnVsbCxcIm1heC13aWR0aFwiOm51bGx9LG89ITE7Zm9yKGk9dC5zcGxpdCgvXFxzK2FuZFxccysvKSxlPTA7ZTxpLmxlbmd0aDtlKyspbj1pW2VdLFwiKFwiPT1uLmNoYXJBdCgwKSYmKG49bi5zdWJzdHJpbmcoMSxuLmxlbmd0aC0xKSxhPW4uc3BsaXQoLzpcXHMrLyksMj09YS5sZW5ndGgmJihyW2FbMF0ucmVwbGFjZSgvXlxccyt8XFxzKyQvZyxcIlwiKV09cGFyc2VJbnQoYVsxXSksbz0hMCkpO2lmKCFvKXJldHVybiExO3ZhciBzPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCxjPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7cmV0dXJuIG51bGwhPT1yW1wibWluLXdpZHRoXCJdJiZzPHJbXCJtaW4td2lkdGhcIl18fG51bGwhPT1yW1wibWF4LXdpZHRoXCJdJiZzPnJbXCJtYXgtd2lkdGhcIl18fG51bGwhPT1yW1wibWluLWhlaWdodFwiXSYmYzxyW1wibWluLWhlaWdodFwiXXx8bnVsbCE9PXJbXCJtYXgtaGVpZ2h0XCJdJiZjPnJbXCJtYXgtaGVpZ2h0XCJdPyExOiEwfSxuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9NU0lFIChbMC05XSspLykmJlJlZ0V4cC4kMTw5JiYodC5uZXdTdHlsZT1mdW5jdGlvbih0KXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtyZXR1cm4gZS5pbm5lckhUTUw9JyZuYnNwOzxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj4nK3QrXCI8L3N0eWxlPlwiLGV9KX0saW5pdFZhcnM6ZnVuY3Rpb24oKXt2YXIgZSxuLGksYT1uYXZpZ2F0b3IudXNlckFnZW50O2U9XCJvdGhlclwiLG49MCxpPVtbXCJmaXJlZm94XCIsL0ZpcmVmb3hcXC8oWzAtOVxcLl0rKS9dLFtcImJiXCIsL0JsYWNrQmVycnkuK1ZlcnNpb25cXC8oWzAtOVxcLl0rKS9dLFtcImJiXCIsL0JCWzAtOV0rLitWZXJzaW9uXFwvKFswLTlcXC5dKykvXSxbXCJvcGVyYVwiLC9PUFJcXC8oWzAtOVxcLl0rKS9dLFtcIm9wZXJhXCIsL09wZXJhXFwvKFswLTlcXC5dKykvXSxbXCJlZGdlXCIsL0VkZ2VcXC8oWzAtOVxcLl0rKS9dLFtcInNhZmFyaVwiLC9WZXJzaW9uXFwvKFswLTlcXC5dKykuK1NhZmFyaS9dLFtcImNocm9tZVwiLC9DaHJvbWVcXC8oWzAtOVxcLl0rKS9dLFtcImllXCIsL01TSUUgKFswLTldKykvXSxbXCJpZVwiLC9UcmlkZW50XFwvLitydjooWzAtOV0rKS9dXSx0Lml0ZXJhdGUoaSxmdW5jdGlvbih0LGkpe3JldHVybiBhLm1hdGNoKGlbMV0pPyhlPWlbMF0sbj1wYXJzZUZsb2F0KFJlZ0V4cC4kMSksITEpOnZvaWQgMH0pLHQudmFycy5icm93c2VyPWUsdC52YXJzLmJyb3dzZXJWZXJzaW9uPW4sZT1cIm90aGVyXCIsbj0wLGk9W1tcImlvc1wiLC8oWzAtOV9dKykgbGlrZSBNYWMgT1MgWC8sZnVuY3Rpb24odCl7cmV0dXJuIHQucmVwbGFjZShcIl9cIixcIi5cIikucmVwbGFjZShcIl9cIixcIlwiKX1dLFtcImlvc1wiLC9DUFUgbGlrZSBNYWMgT1MgWC8sZnVuY3Rpb24odCl7cmV0dXJuIDB9XSxbXCJ3cFwiLC9XaW5kb3dzIFBob25lIChbMC05XFwuXSspLyxudWxsXSxbXCJhbmRyb2lkXCIsL0FuZHJvaWQgKFswLTlcXC5dKykvLG51bGxdLFtcIm1hY1wiLC9NYWNpbnRvc2guK01hYyBPUyBYIChbMC05X10rKS8sZnVuY3Rpb24odCl7cmV0dXJuIHQucmVwbGFjZShcIl9cIixcIi5cIikucmVwbGFjZShcIl9cIixcIlwiKX1dLFtcIndpbmRvd3NcIiwvV2luZG93cyBOVCAoWzAtOVxcLl0rKS8sbnVsbF0sW1wiYmJcIiwvQmxhY2tCZXJyeS4rVmVyc2lvblxcLyhbMC05XFwuXSspLyxudWxsXSxbXCJiYlwiLC9CQlswLTldKy4rVmVyc2lvblxcLyhbMC05XFwuXSspLyxudWxsXV0sdC5pdGVyYXRlKGksZnVuY3Rpb24odCxpKXtyZXR1cm4gYS5tYXRjaChpWzFdKT8oZT1pWzBdLG49cGFyc2VGbG9hdChpWzJdP2lbMl0oUmVnRXhwLiQxKTpSZWdFeHAuJDEpLCExKTp2b2lkIDB9KSx0LnZhcnMub3M9ZSx0LnZhcnMub3NWZXJzaW9uPW4sdC52YXJzLklFVmVyc2lvbj1cImllXCI9PXQudmFycy5icm93c2VyP3QudmFycy5icm93c2VyVmVyc2lvbjo5OSx0LnZhcnMudG91Y2g9XCJ3cFwiPT10LnZhcnMub3M/bmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHM+MDohIShcIm9udG91Y2hzdGFydFwiaW4gd2luZG93KSx0LnZhcnMubW9iaWxlPVwid3BcIj09dC52YXJzLm9zfHxcImFuZHJvaWRcIj09dC52YXJzLm9zfHxcImlvc1wiPT10LnZhcnMub3N8fFwiYmJcIj09dC52YXJzLm9zfX07cmV0dXJuIHQuaW5pdCgpLHR9KCk7IWZ1bmN0aW9uKHQsZSl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxlKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1lKCk6dC5za2VsPWUoKX0odGhpcyxmdW5jdGlvbigpe3JldHVybiBza2VsfSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9odG1sNVN0b3J5VGhlbWUvanMvc2tlbC5taW4uanMiLCIoZnVuY3Rpb24oJCkge1xyXG5cclxuXHQvKipcclxuXHQgKiBHZW5lcmF0ZSBhbiBpbmRlbnRlZCBsaXN0IG9mIGxpbmtzIGZyb20gYSBuYXYuIE1lYW50IGZvciB1c2Ugd2l0aCBwYW5lbCgpLlxyXG5cdCAqIEByZXR1cm4ge2pRdWVyeX0galF1ZXJ5IG9iamVjdC5cclxuXHQgKi9cclxuXHQkLmZuLm5hdkxpc3QgPSBmdW5jdGlvbigpIHtcclxuXHJcblx0XHR2YXJcdCR0aGlzID0gJCh0aGlzKTtcclxuXHRcdFx0JGEgPSAkdGhpcy5maW5kKCdhJyksXHJcblx0XHRcdGIgPSBbXTtcclxuXHJcblx0XHQkYS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0dmFyXHQkdGhpcyA9ICQodGhpcyksXHJcblx0XHRcdFx0aW5kZW50ID0gTWF0aC5tYXgoMCwgJHRoaXMucGFyZW50cygnbGknKS5sZW5ndGggLSAxKSxcclxuXHRcdFx0XHRocmVmID0gJHRoaXMuYXR0cignaHJlZicpLFxyXG5cdFx0XHRcdHRhcmdldCA9ICR0aGlzLmF0dHIoJ3RhcmdldCcpO1xyXG5cclxuXHRcdFx0Yi5wdXNoKFxyXG5cdFx0XHRcdCc8YSAnICtcclxuXHRcdFx0XHRcdCdjbGFzcz1cImxpbmsgZGVwdGgtJyArIGluZGVudCArICdcIicgK1xyXG5cdFx0XHRcdFx0KCAodHlwZW9mIHRhcmdldCAhPT0gJ3VuZGVmaW5lZCcgJiYgdGFyZ2V0ICE9ICcnKSA/ICcgdGFyZ2V0PVwiJyArIHRhcmdldCArICdcIicgOiAnJykgK1xyXG5cdFx0XHRcdFx0KCAodHlwZW9mIGhyZWYgIT09ICd1bmRlZmluZWQnICYmIGhyZWYgIT0gJycpID8gJyBocmVmPVwiJyArIGhyZWYgKyAnXCInIDogJycpICtcclxuXHRcdFx0XHQnPicgK1xyXG5cdFx0XHRcdFx0JzxzcGFuIGNsYXNzPVwiaW5kZW50LScgKyBpbmRlbnQgKyAnXCI+PC9zcGFuPicgK1xyXG5cdFx0XHRcdFx0JHRoaXMudGV4dCgpICtcclxuXHRcdFx0XHQnPC9hPidcclxuXHRcdFx0KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRyZXR1cm4gYi5qb2luKCcnKTtcclxuXHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogUGFuZWwtaWZ5IGFuIGVsZW1lbnQuXHJcblx0ICogQHBhcmFtIHtvYmplY3R9IHVzZXJDb25maWcgVXNlciBjb25maWcuXHJcblx0ICogQHJldHVybiB7alF1ZXJ5fSBqUXVlcnkgb2JqZWN0LlxyXG5cdCAqL1xyXG5cdCQuZm4ucGFuZWwgPSBmdW5jdGlvbih1c2VyQ29uZmlnKSB7XHJcblxyXG5cdFx0Ly8gTm8gZWxlbWVudHM/XHJcblx0XHRcdGlmICh0aGlzLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRcdHJldHVybiAkdGhpcztcclxuXHJcblx0XHQvLyBNdWx0aXBsZSBlbGVtZW50cz9cclxuXHRcdFx0aWYgKHRoaXMubGVuZ3RoID4gMSkge1xyXG5cclxuXHRcdFx0XHRmb3IgKHZhciBpPTA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKVxyXG5cdFx0XHRcdFx0JCh0aGlzW2ldKS5wYW5lbCh1c2VyQ29uZmlnKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuICR0aGlzO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdC8vIFZhcnMuXHJcblx0XHRcdHZhclx0JHRoaXMgPSAkKHRoaXMpLFxyXG5cdFx0XHRcdCRib2R5ID0gJCgnYm9keScpLFxyXG5cdFx0XHRcdCR3aW5kb3cgPSAkKHdpbmRvdyksXHJcblx0XHRcdFx0aWQgPSAkdGhpcy5hdHRyKCdpZCcpLFxyXG5cdFx0XHRcdGNvbmZpZztcclxuXHJcblx0XHQvLyBDb25maWcuXHJcblx0XHRcdGNvbmZpZyA9ICQuZXh0ZW5kKHtcclxuXHJcblx0XHRcdFx0Ly8gRGVsYXkuXHJcblx0XHRcdFx0XHRkZWxheTogMCxcclxuXHJcblx0XHRcdFx0Ly8gSGlkZSBwYW5lbCBvbiBsaW5rIGNsaWNrLlxyXG5cdFx0XHRcdFx0aGlkZU9uQ2xpY2s6IGZhbHNlLFxyXG5cclxuXHRcdFx0XHQvLyBIaWRlIHBhbmVsIG9uIGVzY2FwZSBrZXlwcmVzcy5cclxuXHRcdFx0XHRcdGhpZGVPbkVzY2FwZTogZmFsc2UsXHJcblxyXG5cdFx0XHRcdC8vIEhpZGUgcGFuZWwgb24gc3dpcGUuXHJcblx0XHRcdFx0XHRoaWRlT25Td2lwZTogZmFsc2UsXHJcblxyXG5cdFx0XHRcdC8vIFJlc2V0IHNjcm9sbCBwb3NpdGlvbiBvbiBoaWRlLlxyXG5cdFx0XHRcdFx0cmVzZXRTY3JvbGw6IGZhbHNlLFxyXG5cclxuXHRcdFx0XHQvLyBSZXNldCBmb3JtcyBvbiBoaWRlLlxyXG5cdFx0XHRcdFx0cmVzZXRGb3JtczogZmFsc2UsXHJcblxyXG5cdFx0XHRcdC8vIFNpZGUgb2Ygdmlld3BvcnQgdGhlIHBhbmVsIHdpbGwgYXBwZWFyLlxyXG5cdFx0XHRcdFx0c2lkZTogbnVsbCxcclxuXHJcblx0XHRcdFx0Ly8gVGFyZ2V0IGVsZW1lbnQgZm9yIFwiY2xhc3NcIi5cclxuXHRcdFx0XHRcdHRhcmdldDogJHRoaXMsXHJcblxyXG5cdFx0XHRcdC8vIENsYXNzIHRvIHRvZ2dsZS5cclxuXHRcdFx0XHRcdHZpc2libGVDbGFzczogJ3Zpc2libGUnXHJcblxyXG5cdFx0XHR9LCB1c2VyQ29uZmlnKTtcclxuXHJcblx0XHRcdC8vIEV4cGFuZCBcInRhcmdldFwiIGlmIGl0J3Mgbm90IGEgalF1ZXJ5IG9iamVjdCBhbHJlYWR5LlxyXG5cdFx0XHRcdGlmICh0eXBlb2YgY29uZmlnLnRhcmdldCAhPSAnalF1ZXJ5JylcclxuXHRcdFx0XHRcdGNvbmZpZy50YXJnZXQgPSAkKGNvbmZpZy50YXJnZXQpO1xyXG5cclxuXHRcdC8vIFBhbmVsLlxyXG5cclxuXHRcdFx0Ly8gTWV0aG9kcy5cclxuXHRcdFx0XHQkdGhpcy5faGlkZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG5cdFx0XHRcdFx0Ly8gQWxyZWFkeSBoaWRkZW4/IEJhaWwuXHJcblx0XHRcdFx0XHRcdGlmICghY29uZmlnLnRhcmdldC5oYXNDbGFzcyhjb25maWcudmlzaWJsZUNsYXNzKSlcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRcdFx0Ly8gSWYgYW4gZXZlbnQgd2FzIHByb3ZpZGVkLCBjYW5jZWwgaXQuXHJcblx0XHRcdFx0XHRcdGlmIChldmVudCkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vIEhpZGUuXHJcblx0XHRcdFx0XHRcdGNvbmZpZy50YXJnZXQucmVtb3ZlQ2xhc3MoY29uZmlnLnZpc2libGVDbGFzcyk7XHJcblxyXG5cdFx0XHRcdFx0Ly8gUG9zdC1oaWRlIHN0dWZmLlxyXG5cdFx0XHRcdFx0XHR3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0Ly8gUmVzZXQgc2Nyb2xsIHBvc2l0aW9uLlxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGNvbmZpZy5yZXNldFNjcm9sbClcclxuXHRcdFx0XHRcdFx0XHRcdFx0JHRoaXMuc2Nyb2xsVG9wKDApO1xyXG5cclxuXHRcdFx0XHRcdFx0XHQvLyBSZXNldCBmb3Jtcy5cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChjb25maWcucmVzZXRGb3JtcylcclxuXHRcdFx0XHRcdFx0XHRcdFx0JHRoaXMuZmluZCgnZm9ybScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5yZXNldCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRcdH0sIGNvbmZpZy5kZWxheSk7XHJcblxyXG5cdFx0XHRcdH07XHJcblxyXG5cdFx0XHQvLyBWZW5kb3IgZml4ZXMuXHJcblx0XHRcdFx0JHRoaXNcclxuXHRcdFx0XHRcdC5jc3MoJy1tcy1vdmVyZmxvdy1zdHlsZScsICctbXMtYXV0b2hpZGluZy1zY3JvbGxiYXInKVxyXG5cdFx0XHRcdFx0LmNzcygnLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmcnLCAndG91Y2gnKTtcclxuXHJcblx0XHRcdC8vIEhpZGUgb24gY2xpY2suXHJcblx0XHRcdFx0aWYgKGNvbmZpZy5oaWRlT25DbGljaykge1xyXG5cclxuXHRcdFx0XHRcdCR0aGlzLmZpbmQoJ2EnKVxyXG5cdFx0XHRcdFx0XHQuY3NzKCctd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3InLCAncmdiYSgwLDAsMCwwKScpO1xyXG5cclxuXHRcdFx0XHRcdCR0aGlzXHJcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCAnYScsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHZhciAkYSA9ICQodGhpcyksXHJcblx0XHRcdFx0XHRcdFx0XHRocmVmID0gJGEuYXR0cignaHJlZicpLFxyXG5cdFx0XHRcdFx0XHRcdFx0dGFyZ2V0ID0gJGEuYXR0cigndGFyZ2V0Jyk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmICghaHJlZiB8fCBocmVmID09ICcjJyB8fCBocmVmID09ICcnIHx8IGhyZWYgPT0gJyMnICsgaWQpXHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vIENhbmNlbCBvcmlnaW5hbCBldmVudC5cclxuXHRcdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0Ly8gSGlkZSBwYW5lbC5cclxuXHRcdFx0XHRcdFx0XHRcdCR0aGlzLl9oaWRlKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vIFJlZGlyZWN0IHRvIGhyZWYuXHJcblx0XHRcdFx0XHRcdFx0XHR3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmICh0YXJnZXQgPT0gJ19ibGFuaycpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93Lm9wZW4oaHJlZik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IGhyZWY7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0fSwgY29uZmlnLmRlbGF5ICsgMTApO1xyXG5cclxuXHRcdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdC8vIEV2ZW50OiBUb3VjaCBzdHVmZi5cclxuXHRcdFx0XHQkdGhpcy5vbigndG91Y2hzdGFydCcsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG5cdFx0XHRcdFx0JHRoaXMudG91Y2hQb3NYID0gZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdLnBhZ2VYO1xyXG5cdFx0XHRcdFx0JHRoaXMudG91Y2hQb3NZID0gZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdLnBhZ2VZO1xyXG5cclxuXHRcdFx0XHR9KVxyXG5cclxuXHRcdFx0XHQkdGhpcy5vbigndG91Y2htb3ZlJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcblx0XHRcdFx0XHRpZiAoJHRoaXMudG91Y2hQb3NYID09PSBudWxsXHJcblx0XHRcdFx0XHR8fFx0JHRoaXMudG91Y2hQb3NZID09PSBudWxsKVxyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRcdFx0dmFyXHRkaWZmWCA9ICR0aGlzLnRvdWNoUG9zWCAtIGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlc1swXS5wYWdlWCxcclxuXHRcdFx0XHRcdFx0ZGlmZlkgPSAkdGhpcy50b3VjaFBvc1kgLSBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF0ucGFnZVksXHJcblx0XHRcdFx0XHRcdHRoID0gJHRoaXMub3V0ZXJIZWlnaHQoKSxcclxuXHRcdFx0XHRcdFx0dHMgPSAoJHRoaXMuZ2V0KDApLnNjcm9sbEhlaWdodCAtICR0aGlzLnNjcm9sbFRvcCgpKTtcclxuXHJcblx0XHRcdFx0XHQvLyBIaWRlIG9uIHN3aXBlP1xyXG5cdFx0XHRcdFx0XHRpZiAoY29uZmlnLmhpZGVPblN3aXBlKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHZhciByZXN1bHQgPSBmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHRcdGJvdW5kYXJ5ID0gMjAsXHJcblx0XHRcdFx0XHRcdFx0XHRkZWx0YSA9IDUwO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRzd2l0Y2ggKGNvbmZpZy5zaWRlKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAnbGVmdCc6XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdCA9IChkaWZmWSA8IGJvdW5kYXJ5ICYmIGRpZmZZID4gKC0xICogYm91bmRhcnkpKSAmJiAoZGlmZlggPiBkZWx0YSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgJ3JpZ2h0JzpcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0ID0gKGRpZmZZIDwgYm91bmRhcnkgJiYgZGlmZlkgPiAoLTEgKiBib3VuZGFyeSkpICYmIChkaWZmWCA8ICgtMSAqIGRlbHRhKSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgJ3RvcCc6XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdCA9IChkaWZmWCA8IGJvdW5kYXJ5ICYmIGRpZmZYID4gKC0xICogYm91bmRhcnkpKSAmJiAoZGlmZlkgPiBkZWx0YSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgJ2JvdHRvbSc6XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdCA9IChkaWZmWCA8IGJvdW5kYXJ5ICYmIGRpZmZYID4gKC0xICogYm91bmRhcnkpKSAmJiAoZGlmZlkgPCAoLTEgKiBkZWx0YSkpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAocmVzdWx0KSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0JHRoaXMudG91Y2hQb3NYID0gbnVsbDtcclxuXHRcdFx0XHRcdFx0XHRcdCR0aGlzLnRvdWNoUG9zWSA9IG51bGw7XHJcblx0XHRcdFx0XHRcdFx0XHQkdGhpcy5faGlkZSgpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vIFByZXZlbnQgdmVydGljYWwgc2Nyb2xsaW5nIHBhc3QgdGhlIHRvcCBvciBib3R0b20uXHJcblx0XHRcdFx0XHRcdGlmICgoJHRoaXMuc2Nyb2xsVG9wKCkgPCAwICYmIGRpZmZZIDwgMClcclxuXHRcdFx0XHRcdFx0fHwgKHRzID4gKHRoIC0gMikgJiYgdHMgPCAodGggKyAyKSAmJiBkaWZmWSA+IDApKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Ly8gRXZlbnQ6IFByZXZlbnQgY2VydGFpbiBldmVudHMgaW5zaWRlIHRoZSBwYW5lbCBmcm9tIGJ1YmJsaW5nLlxyXG5cdFx0XHRcdCR0aGlzLm9uKCdjbGljayB0b3VjaGVuZCB0b3VjaHN0YXJ0IHRvdWNobW92ZScsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vIEV2ZW50OiBIaWRlIHBhbmVsIGlmIGEgY2hpbGQgYW5jaG9yIHRhZyBwb2ludGluZyB0byBpdHMgSUQgaXMgY2xpY2tlZC5cclxuXHRcdFx0XHQkdGhpcy5vbignY2xpY2snLCAnYVtocmVmPVwiIycgKyBpZCArICdcIl0nLCBmdW5jdGlvbihldmVudCkge1xyXG5cclxuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblx0XHRcdFx0XHRjb25maWcudGFyZ2V0LnJlbW92ZUNsYXNzKGNvbmZpZy52aXNpYmxlQ2xhc3MpO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHQvLyBCb2R5LlxyXG5cclxuXHRcdFx0Ly8gRXZlbnQ6IEhpZGUgcGFuZWwgb24gYm9keSBjbGljay90YXAuXHJcblx0XHRcdFx0JGJvZHkub24oJ2NsaWNrIHRvdWNoZW5kJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0XHRcdCR0aGlzLl9oaWRlKGV2ZW50KTtcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vIEV2ZW50OiBUb2dnbGUuXHJcblx0XHRcdFx0JGJvZHkub24oJ2NsaWNrJywgJ2FbaHJlZj1cIiMnICsgaWQgKyAnXCJdJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG5cdFx0XHRcdFx0Y29uZmlnLnRhcmdldC50b2dnbGVDbGFzcyhjb25maWcudmlzaWJsZUNsYXNzKTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0Ly8gV2luZG93LlxyXG5cclxuXHRcdFx0Ly8gRXZlbnQ6IEhpZGUgb24gRVNDLlxyXG5cdFx0XHRcdGlmIChjb25maWcuaGlkZU9uRXNjYXBlKVxyXG5cdFx0XHRcdFx0JHdpbmRvdy5vbigna2V5ZG93bicsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoZXZlbnQua2V5Q29kZSA9PSAyNylcclxuXHRcdFx0XHRcdFx0XHQkdGhpcy5faGlkZShldmVudCk7XHJcblxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuICR0aGlzO1xyXG5cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBBcHBseSBcInBsYWNlaG9sZGVyXCIgYXR0cmlidXRlIHBvbHlmaWxsIHRvIG9uZSBvciBtb3JlIGZvcm1zLlxyXG5cdCAqIEByZXR1cm4ge2pRdWVyeX0galF1ZXJ5IG9iamVjdC5cclxuXHQgKi9cclxuXHQkLmZuLnBsYWNlaG9sZGVyID0gZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0Ly8gQnJvd3NlciBuYXRpdmVseSBzdXBwb3J0cyBwbGFjZWhvbGRlcnM/IEJhaWwuXHJcblx0XHRcdGlmICh0eXBlb2YgKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpLnBsYWNlaG9sZGVyICE9ICd1bmRlZmluZWQnKVxyXG5cdFx0XHRcdHJldHVybiAkKHRoaXMpO1xyXG5cclxuXHRcdC8vIE5vIGVsZW1lbnRzP1xyXG5cdFx0XHRpZiAodGhpcy5sZW5ndGggPT0gMClcclxuXHRcdFx0XHRyZXR1cm4gJHRoaXM7XHJcblxyXG5cdFx0Ly8gTXVsdGlwbGUgZWxlbWVudHM/XHJcblx0XHRcdGlmICh0aGlzLmxlbmd0aCA+IDEpIHtcclxuXHJcblx0XHRcdFx0Zm9yICh2YXIgaT0wOyBpIDwgdGhpcy5sZW5ndGg7IGkrKylcclxuXHRcdFx0XHRcdCQodGhpc1tpXSkucGxhY2Vob2xkZXIoKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuICR0aGlzO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdC8vIFZhcnMuXHJcblx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG5cdFx0Ly8gVGV4dCwgVGV4dEFyZWEuXHJcblx0XHRcdCR0aGlzLmZpbmQoJ2lucHV0W3R5cGU9dGV4dF0sdGV4dGFyZWEnKVxyXG5cdFx0XHRcdC5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0XHRcdHZhciBpID0gJCh0aGlzKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoaS52YWwoKSA9PSAnJ1xyXG5cdFx0XHRcdFx0fHwgIGkudmFsKCkgPT0gaS5hdHRyKCdwbGFjZWhvbGRlcicpKVxyXG5cdFx0XHRcdFx0XHRpXHJcblx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdwb2x5ZmlsbC1wbGFjZWhvbGRlcicpXHJcblx0XHRcdFx0XHRcdFx0LnZhbChpLmF0dHIoJ3BsYWNlaG9sZGVyJykpO1xyXG5cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5vbignYmx1cicsIGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0XHRcdHZhciBpID0gJCh0aGlzKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoaS5hdHRyKCduYW1lJykubWF0Y2goLy1wb2x5ZmlsbC1maWVsZCQvKSlcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0XHRcdGlmIChpLnZhbCgpID09ICcnKVxyXG5cdFx0XHRcdFx0XHRpXHJcblx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdwb2x5ZmlsbC1wbGFjZWhvbGRlcicpXHJcblx0XHRcdFx0XHRcdFx0LnZhbChpLmF0dHIoJ3BsYWNlaG9sZGVyJykpO1xyXG5cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5vbignZm9jdXMnLCBmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdFx0XHR2YXIgaSA9ICQodGhpcyk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGkuYXR0cignbmFtZScpLm1hdGNoKC8tcG9seWZpbGwtZmllbGQkLykpXHJcblx0XHRcdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdFx0XHRpZiAoaS52YWwoKSA9PSBpLmF0dHIoJ3BsYWNlaG9sZGVyJykpXHJcblx0XHRcdFx0XHRcdGlcclxuXHRcdFx0XHRcdFx0XHQucmVtb3ZlQ2xhc3MoJ3BvbHlmaWxsLXBsYWNlaG9sZGVyJylcclxuXHRcdFx0XHRcdFx0XHQudmFsKCcnKTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0Ly8gUGFzc3dvcmQuXHJcblx0XHRcdCR0aGlzLmZpbmQoJ2lucHV0W3R5cGU9cGFzc3dvcmRdJylcclxuXHRcdFx0XHQuZWFjaChmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdFx0XHR2YXIgaSA9ICQodGhpcyk7XHJcblx0XHRcdFx0XHR2YXIgeCA9ICQoXHJcblx0XHRcdFx0XHRcdFx0XHQkKCc8ZGl2PicpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5hcHBlbmQoaS5jbG9uZSgpKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQucmVtb3ZlKClcclxuXHRcdFx0XHRcdFx0XHRcdFx0Lmh0bWwoKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQucmVwbGFjZSgvdHlwZT1cInBhc3N3b3JkXCIvaSwgJ3R5cGU9XCJ0ZXh0XCInKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQucmVwbGFjZSgvdHlwZT1wYXNzd29yZC9pLCAndHlwZT10ZXh0JylcclxuXHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGkuYXR0cignaWQnKSAhPSAnJylcclxuXHRcdFx0XHRcdFx0eC5hdHRyKCdpZCcsIGkuYXR0cignaWQnKSArICctcG9seWZpbGwtZmllbGQnKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoaS5hdHRyKCduYW1lJykgIT0gJycpXHJcblx0XHRcdFx0XHRcdHguYXR0cignbmFtZScsIGkuYXR0cignbmFtZScpICsgJy1wb2x5ZmlsbC1maWVsZCcpO1xyXG5cclxuXHRcdFx0XHRcdHguYWRkQ2xhc3MoJ3BvbHlmaWxsLXBsYWNlaG9sZGVyJylcclxuXHRcdFx0XHRcdFx0LnZhbCh4LmF0dHIoJ3BsYWNlaG9sZGVyJykpLmluc2VydEFmdGVyKGkpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChpLnZhbCgpID09ICcnKVxyXG5cdFx0XHRcdFx0XHRpLmhpZGUoKTtcclxuXHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0eC5oaWRlKCk7XHJcblxyXG5cdFx0XHRcdFx0aVxyXG5cdFx0XHRcdFx0XHQub24oJ2JsdXInLCBmdW5jdGlvbihldmVudCkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR2YXIgeCA9IGkucGFyZW50KCkuZmluZCgnaW5wdXRbbmFtZT0nICsgaS5hdHRyKCduYW1lJykgKyAnLXBvbHlmaWxsLWZpZWxkXScpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAoaS52YWwoKSA9PSAnJykge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGkuaGlkZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0eC5zaG93KCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdHhcclxuXHRcdFx0XHRcdFx0Lm9uKCdmb2N1cycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHZhciBpID0geC5wYXJlbnQoKS5maW5kKCdpbnB1dFtuYW1lPScgKyB4LmF0dHIoJ25hbWUnKS5yZXBsYWNlKCctcG9seWZpbGwtZmllbGQnLCAnJykgKyAnXScpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR4LmhpZGUoKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0aVxyXG5cdFx0XHRcdFx0XHRcdFx0LnNob3coKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmZvY3VzKCk7XHJcblxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHQub24oJ2tleXByZXNzJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRcdFx0XHR4LnZhbCgnJyk7XHJcblxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0Ly8gRXZlbnRzLlxyXG5cdFx0XHQkdGhpc1xyXG5cdFx0XHRcdC5vbignc3VibWl0JywgZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdFx0JHRoaXMuZmluZCgnaW5wdXRbdHlwZT10ZXh0XSxpbnB1dFt0eXBlPXBhc3N3b3JkXSx0ZXh0YXJlYScpXHJcblx0XHRcdFx0XHRcdC5lYWNoKGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHZhciBpID0gJCh0aGlzKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKGkuYXR0cignbmFtZScpLm1hdGNoKC8tcG9seWZpbGwtZmllbGQkLykpXHJcblx0XHRcdFx0XHRcdFx0XHRpLmF0dHIoJ25hbWUnLCAnJyk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmIChpLnZhbCgpID09IGkuYXR0cigncGxhY2Vob2xkZXInKSkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGkucmVtb3ZlQ2xhc3MoJ3BvbHlmaWxsLXBsYWNlaG9sZGVyJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRpLnZhbCgnJyk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5vbigncmVzZXQnLCBmdW5jdGlvbihldmVudCkge1xyXG5cclxuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRcdFx0JHRoaXMuZmluZCgnc2VsZWN0JylcclxuXHRcdFx0XHRcdFx0LnZhbCgkKCdvcHRpb246Zmlyc3QnKS52YWwoKSk7XHJcblxyXG5cdFx0XHRcdFx0JHRoaXMuZmluZCgnaW5wdXQsdGV4dGFyZWEnKVxyXG5cdFx0XHRcdFx0XHQuZWFjaChmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0dmFyIGkgPSAkKHRoaXMpLFxyXG5cdFx0XHRcdFx0XHRcdFx0eDtcclxuXHJcblx0XHRcdFx0XHRcdFx0aS5yZW1vdmVDbGFzcygncG9seWZpbGwtcGxhY2Vob2xkZXInKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0c3dpdGNoICh0aGlzLnR5cGUpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRjYXNlICdzdWJtaXQnOlxyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAncmVzZXQnOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRjYXNlICdwYXNzd29yZCc6XHJcblx0XHRcdFx0XHRcdFx0XHRcdGkudmFsKGkuYXR0cignZGVmYXVsdFZhbHVlJykpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0eCA9IGkucGFyZW50KCkuZmluZCgnaW5wdXRbbmFtZT0nICsgaS5hdHRyKCduYW1lJykgKyAnLXBvbHlmaWxsLWZpZWxkXScpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGkudmFsKCkgPT0gJycpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpLmhpZGUoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR4LnNob3coKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpLnNob3coKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR4LmhpZGUoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAnY2hlY2tib3gnOlxyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAncmFkaW8nOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpLmF0dHIoJ2NoZWNrZWQnLCBpLmF0dHIoJ2RlZmF1bHRWYWx1ZScpKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAndGV4dCc6XHJcblx0XHRcdFx0XHRcdFx0XHRjYXNlICd0ZXh0YXJlYSc6XHJcblx0XHRcdFx0XHRcdFx0XHRcdGkudmFsKGkuYXR0cignZGVmYXVsdFZhbHVlJykpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGkudmFsKCkgPT0gJycpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpLmFkZENsYXNzKCdwb2x5ZmlsbC1wbGFjZWhvbGRlcicpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGkudmFsKGkuYXR0cigncGxhY2Vob2xkZXInKSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRcdFx0XHRcdGkudmFsKGkuYXR0cignZGVmYXVsdFZhbHVlJykpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuICR0aGlzO1xyXG5cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBNb3ZlcyBlbGVtZW50cyB0by9mcm9tIHRoZSBmaXJzdCBwb3NpdGlvbnMgb2YgdGhlaXIgcmVzcGVjdGl2ZSBwYXJlbnRzLlxyXG5cdCAqIEBwYXJhbSB7alF1ZXJ5fSAkZWxlbWVudHMgRWxlbWVudHMgKG9yIHNlbGVjdG9yKSB0byBtb3ZlLlxyXG5cdCAqIEBwYXJhbSB7Ym9vbH0gY29uZGl0aW9uIElmIHRydWUsIG1vdmVzIGVsZW1lbnRzIHRvIHRoZSB0b3AuIE90aGVyd2lzZSwgbW92ZXMgZWxlbWVudHMgYmFjayB0byB0aGVpciBvcmlnaW5hbCBsb2NhdGlvbnMuXHJcblx0ICovXHJcblx0JC5wcmlvcml0aXplID0gZnVuY3Rpb24oJGVsZW1lbnRzLCBjb25kaXRpb24pIHtcclxuXHJcblx0XHR2YXIga2V5ID0gJ19fcHJpb3JpdGl6ZSc7XHJcblxyXG5cdFx0Ly8gRXhwYW5kICRlbGVtZW50cyBpZiBpdCdzIG5vdCBhbHJlYWR5IGEgalF1ZXJ5IG9iamVjdC5cclxuXHRcdFx0aWYgKHR5cGVvZiAkZWxlbWVudHMgIT0gJ2pRdWVyeScpXHJcblx0XHRcdFx0JGVsZW1lbnRzID0gJCgkZWxlbWVudHMpO1xyXG5cclxuXHRcdC8vIFN0ZXAgdGhyb3VnaCBlbGVtZW50cy5cclxuXHRcdFx0JGVsZW1lbnRzLmVhY2goZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdHZhclx0JGUgPSAkKHRoaXMpLCAkcCxcclxuXHRcdFx0XHRcdCRwYXJlbnQgPSAkZS5wYXJlbnQoKTtcclxuXHJcblx0XHRcdFx0Ly8gTm8gcGFyZW50PyBCYWlsLlxyXG5cdFx0XHRcdFx0aWYgKCRwYXJlbnQubGVuZ3RoID09IDApXHJcblx0XHRcdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdFx0Ly8gTm90IG1vdmVkPyBNb3ZlIGl0LlxyXG5cdFx0XHRcdFx0aWYgKCEkZS5kYXRhKGtleSkpIHtcclxuXHJcblx0XHRcdFx0XHRcdC8vIENvbmRpdGlvbiBpcyBmYWxzZT8gQmFpbC5cclxuXHRcdFx0XHRcdFx0XHRpZiAoIWNvbmRpdGlvbilcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdFx0XHRcdC8vIEdldCBwbGFjZWhvbGRlciAod2hpY2ggd2lsbCBzZXJ2ZSBhcyBvdXIgcG9pbnQgb2YgcmVmZXJlbmNlIGZvciB3aGVuIHRoaXMgZWxlbWVudCBuZWVkcyB0byBtb3ZlIGJhY2spLlxyXG5cdFx0XHRcdFx0XHRcdCRwID0gJGUucHJldigpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHQvLyBDb3VsZG4ndCBmaW5kIGFueXRoaW5nPyBNZWFucyB0aGlzIGVsZW1lbnQncyBhbHJlYWR5IGF0IHRoZSB0b3AsIHNvIGJhaWwuXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoJHAubGVuZ3RoID09IDApXHJcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdFx0XHRcdC8vIE1vdmUgZWxlbWVudCB0byB0b3Agb2YgcGFyZW50LlxyXG5cdFx0XHRcdFx0XHRcdCRlLnByZXBlbmRUbygkcGFyZW50KTtcclxuXHJcblx0XHRcdFx0XHRcdC8vIE1hcmsgZWxlbWVudCBhcyBtb3ZlZC5cclxuXHRcdFx0XHRcdFx0XHQkZS5kYXRhKGtleSwgJHApO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gTW92ZWQgYWxyZWFkeT9cclxuXHRcdFx0XHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gQ29uZGl0aW9uIGlzIHRydWU/IEJhaWwuXHJcblx0XHRcdFx0XHRcdFx0aWYgKGNvbmRpdGlvbilcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdFx0XHRcdCRwID0gJGUuZGF0YShrZXkpO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gTW92ZSBlbGVtZW50IGJhY2sgdG8gaXRzIG9yaWdpbmFsIGxvY2F0aW9uICh1c2luZyBvdXIgcGxhY2Vob2xkZXIpLlxyXG5cdFx0XHRcdFx0XHRcdCRlLmluc2VydEFmdGVyKCRwKTtcclxuXHJcblx0XHRcdFx0XHRcdC8vIFVubWFyayBlbGVtZW50IGFzIG1vdmVkLlxyXG5cdFx0XHRcdFx0XHRcdCRlLnJlbW92ZURhdGEoa2V5KTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0fTtcclxuXHJcbn0pKGpRdWVyeSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy92ZW5kb3IvaHRtbDVTdG9yeVRoZW1lL2pzL3V0aWwuanMiXSwic291cmNlUm9vdCI6IiJ9