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
__webpack_require__("./resources/assets/scripts/parts/home.js");

/***/ }),

/***/ "./resources/assets/scripts/parts/home.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


jQuery(document).ready(function ($) {
    $("#home-slideshow > div:gt(0)").hide();

    setInterval(function () {
        $('#home-slideshow > div:first').fadeOut(1000).next().fadeIn(1000).end().appendTo('#home-slideshow');
    }, 4000);
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzJkYTFjYjg5OTk4MjQ4ODc4MWYiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2FtZC1vcHRpb25zLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9zY3JpcHRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvcGFydHMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3N0eWxlcy9hZG1pbi5zY3NzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvc3R5bGVzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvdmVuZG9yL2NvZHJvcHNNZW51L2pzL2NsYXNzaWUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy92ZW5kb3IvY29kcm9wc01lbnUvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9odG1sNVN0b3J5VGhlbWUvanMvanF1ZXJ5Lm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9odG1sNVN0b3J5VGhlbWUvanMvanF1ZXJ5LnNjcm9sbGV4Lm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9odG1sNVN0b3J5VGhlbWUvanMvanF1ZXJ5LnNjcm9sbHkubWluLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvdmVuZG9yL2h0bWw1U3RvcnlUaGVtZS9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvdmVuZG9yL2h0bWw1U3RvcnlUaGVtZS9qcy9za2VsLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9odG1sNVN0b3J5VGhlbWUvanMvdXRpbC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwialF1ZXJ5IiwiZG9jdW1lbnQiLCJyZWFkeSIsIiQiLCJoaWRlIiwic2V0SW50ZXJ2YWwiLCJmYWRlT3V0IiwibmV4dCIsImZhZGVJbiIsImVuZCIsImFwcGVuZFRvIiwid2luZG93IiwiY2xhc3NSZWciLCJjbGFzc05hbWUiLCJSZWdFeHAiLCJoYXNDbGFzcyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJkb2N1bWVudEVsZW1lbnQiLCJlbGVtIiwiYyIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiYWRkIiwicmVtb3ZlIiwidGVzdCIsInJlcGxhY2UiLCJ0b2dnbGVDbGFzcyIsImZuIiwiY2xhc3NpZSIsImhhcyIsInRvZ2dsZSIsImRlZmluZSIsImUiLCJib2R5RWwiLCJib2R5IiwiY29udGVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvcGVuYnRuIiwiZ2V0RWxlbWVudEJ5SWQiLCJjbG9zZWJ0biIsImlzT3BlbiIsImluaXQiLCJpbml0RXZlbnRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZU1lbnUiLCJldiIsInRhcmdldCIsInNldFRpbWVvdXQiLCJhIiwiYiIsIm1vZHVsZSIsImV4cG9ydHMiLCJFcnJvciIsImQiLCJzbGljZSIsImNvbmNhdCIsImYiLCJwdXNoIiwiZyIsImluZGV4T2YiLCJoIiwiaSIsInRvU3RyaW5nIiwiaiIsImhhc093blByb3BlcnR5IiwiayIsImwiLCJtIiwibiIsIm8iLCJwIiwicSIsInRvVXBwZXJDYXNlIiwicHJvdG90eXBlIiwianF1ZXJ5IiwiY29uc3RydWN0b3IiLCJzZWxlY3RvciIsImxlbmd0aCIsInRvQXJyYXkiLCJjYWxsIiwiZ2V0IiwicHVzaFN0YWNrIiwibWVyZ2UiLCJwcmV2T2JqZWN0IiwiY29udGV4dCIsImVhY2giLCJtYXAiLCJhcHBseSIsImFyZ3VtZW50cyIsImZpcnN0IiwiZXEiLCJsYXN0Iiwic29ydCIsInNwbGljZSIsImV4dGVuZCIsImlzRnVuY3Rpb24iLCJpc1BsYWluT2JqZWN0IiwiaXNBcnJheSIsImV4cGFuZG8iLCJNYXRoIiwicmFuZG9tIiwiaXNSZWFkeSIsImVycm9yIiwibm9vcCIsInR5cGUiLCJBcnJheSIsImlzV2luZG93IiwiaXNOdW1lcmljIiwicGFyc2VGbG9hdCIsImlzRW1wdHlPYmplY3QiLCJub2RlVHlwZSIsIm93bkxhc3QiLCJnbG9iYWxFdmFsIiwidHJpbSIsImV4ZWNTY3JpcHQiLCJldmFsIiwiY2FtZWxDYXNlIiwibm9kZU5hbWUiLCJ0b0xvd2VyQ2FzZSIsInIiLCJtYWtlQXJyYXkiLCJPYmplY3QiLCJpbkFycmF5IiwibWF4IiwiZ3JlcCIsImd1aWQiLCJwcm94eSIsIm5vdyIsIkRhdGUiLCJzdXBwb3J0Iiwic3BsaXQiLCJzIiwidCIsInUiLCJ2IiwidyIsIngiLCJ5IiwiaGEiLCJ6IiwiQSIsIkIiLCJDIiwiRCIsIkUiLCJGIiwicG9wIiwiRyIsIkgiLCJJIiwiSiIsIksiLCJMIiwiTSIsIk4iLCJPIiwiUCIsIlEiLCJSIiwiUyIsIlQiLCJVIiwiViIsIlciLCJYIiwiSUQiLCJDTEFTUyIsIlRBRyIsIkFUVFIiLCJQU0VVRE8iLCJDSElMRCIsImJvb2wiLCJuZWVkc0NvbnRleHQiLCJZIiwiWiIsIl8iLCJhYSIsImJhIiwiY2EiLCJkYSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImVhIiwiY2hpbGROb2RlcyIsImZhIiwiZ2EiLCJvd25lckRvY3VtZW50IiwiZXhlYyIsInBhcmVudE5vZGUiLCJpZCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInFzYSIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInJhIiwicGEiLCJqb2luIiwicXVlcnlTZWxlY3RvckFsbCIsInJlbW92ZUF0dHJpYnV0ZSIsImNhY2hlTGVuZ3RoIiwic2hpZnQiLCJpYSIsImphIiwiY3JlYXRlRWxlbWVudCIsInJlbW92ZUNoaWxkIiwia2EiLCJhdHRySGFuZGxlIiwibGEiLCJzb3VyY2VJbmRleCIsIm5leHRTaWJsaW5nIiwibWEiLCJuYSIsIm9hIiwiaXNYTUwiLCJzZXREb2N1bWVudCIsImRlZmF1bHRWaWV3IiwidG9wIiwiYXR0YWNoRXZlbnQiLCJhdHRyaWJ1dGVzIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVDb21tZW50IiwiZ2V0QnlJZCIsImdldEVsZW1lbnRzQnlOYW1lIiwiZmluZCIsImZpbHRlciIsImdldEF0dHJpYnV0ZU5vZGUiLCJ2YWx1ZSIsImlubmVySFRNTCIsIm1hdGNoZXNTZWxlY3RvciIsIm1hdGNoZXMiLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJtb3pNYXRjaGVzU2VsZWN0b3IiLCJvTWF0Y2hlc1NlbGVjdG9yIiwibXNNYXRjaGVzU2VsZWN0b3IiLCJkaXNjb25uZWN0ZWRNYXRjaCIsImNvbXBhcmVEb2N1bWVudFBvc2l0aW9uIiwic29ydERldGFjaGVkIiwidW5zaGlmdCIsImF0dHIiLCJzcGVjaWZpZWQiLCJ1bmlxdWVTb3J0IiwiZGV0ZWN0RHVwbGljYXRlcyIsInNvcnRTdGFibGUiLCJnZXRUZXh0IiwidGV4dENvbnRlbnQiLCJmaXJzdENoaWxkIiwibm9kZVZhbHVlIiwic2VsZWN0b3JzIiwiY3JlYXRlUHNldWRvIiwibWF0Y2giLCJyZWxhdGl2ZSIsImRpciIsInByZUZpbHRlciIsImxhc3RDaGlsZCIsInBzZXVkb3MiLCJzZXRGaWx0ZXJzIiwibm90IiwiaW5uZXJUZXh0IiwibGFuZyIsImxvY2F0aW9uIiwiaGFzaCIsInJvb3QiLCJmb2N1cyIsImFjdGl2ZUVsZW1lbnQiLCJoYXNGb2N1cyIsImhyZWYiLCJ0YWJJbmRleCIsImVuYWJsZWQiLCJkaXNhYmxlZCIsImNoZWNrZWQiLCJzZWxlY3RlZCIsInNlbGVjdGVkSW5kZXgiLCJlbXB0eSIsInBhcmVudCIsImhlYWRlciIsImlucHV0IiwiYnV0dG9uIiwidGV4dCIsImV2ZW4iLCJvZGQiLCJsdCIsImd0IiwibnRoIiwicmFkaW8iLCJjaGVja2JveCIsImZpbGUiLCJwYXNzd29yZCIsImltYWdlIiwic3VibWl0IiwicmVzZXQiLCJxYSIsImZpbHRlcnMiLCJ0b2tlbml6ZSIsInNhIiwidGEiLCJ1YSIsInZhIiwid2EiLCJ4YSIsInlhIiwiY29tcGlsZSIsInNlbGVjdCIsImRlZmF1bHRWYWx1ZSIsImV4cHIiLCJ1bmlxdWUiLCJpc1hNTERvYyIsImlzIiwiY2hhckF0IiwicGFyc2VIVE1MIiwiY2hpbGRyZW4iLCJjb250ZW50cyIsInByZXYiLCJzaWJsaW5nIiwiY2xvc2VzdCIsImluZGV4IiwicHJldkFsbCIsImFkZEJhY2siLCJwYXJlbnRzIiwicGFyZW50c1VudGlsIiwibmV4dEFsbCIsIm5leHRVbnRpbCIsInByZXZVbnRpbCIsInNpYmxpbmdzIiwiY29udGVudERvY3VtZW50IiwiY29udGVudFdpbmRvdyIsInJldmVyc2UiLCJDYWxsYmFja3MiLCJvbmNlIiwibWVtb3J5Iiwic3RvcE9uRmFsc2UiLCJkaXNhYmxlIiwibG9jayIsImxvY2tlZCIsImZpcmVXaXRoIiwiZmlyZSIsImZpcmVkIiwiRGVmZXJyZWQiLCJzdGF0ZSIsImFsd2F5cyIsImRvbmUiLCJmYWlsIiwidGhlbiIsInByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicHJvZ3Jlc3MiLCJub3RpZnkiLCJwaXBlIiwid2hlbiIsIm5vdGlmeVdpdGgiLCJyZXNvbHZlV2l0aCIsInJlYWR5V2FpdCIsImhvbGRSZWFkeSIsInRyaWdnZXJIYW5kbGVyIiwib2ZmIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRldGFjaEV2ZW50IiwiZXZlbnQiLCJyZWFkeVN0YXRlIiwiZnJhbWVFbGVtZW50IiwiZG9TY3JvbGwiLCJpbmxpbmVCbG9ja05lZWRzTGF5b3V0Iiwic3R5bGUiLCJjc3NUZXh0Iiwiem9vbSIsIm9mZnNldFdpZHRoIiwiZGVsZXRlRXhwYW5kbyIsImFjY2VwdERhdGEiLCJub0RhdGEiLCJwYXJzZUpTT04iLCJkYXRhIiwiY2FjaGUiLCJ0b0pTT04iLCJjbGVhbkRhdGEiLCJoYXNEYXRhIiwicmVtb3ZlRGF0YSIsIl9kYXRhIiwiX3JlbW92ZURhdGEiLCJuYW1lIiwicXVldWUiLCJkZXF1ZXVlIiwiX3F1ZXVlSG9va3MiLCJzdG9wIiwiY2xlYXJRdWV1ZSIsInNvdXJjZSIsImNzcyIsImFjY2VzcyIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJsZWFkaW5nV2hpdGVzcGFjZSIsInRib2R5IiwiaHRtbFNlcmlhbGl6ZSIsImh0bWw1Q2xvbmUiLCJjbG9uZU5vZGUiLCJvdXRlckhUTUwiLCJhcHBlbmRDaGVja2VkIiwibm9DbG9uZUNoZWNrZWQiLCJjaGVja0Nsb25lIiwibm9DbG9uZUV2ZW50IiwiY2xpY2siLCJjaGFuZ2UiLCJmb2N1c2luIiwiZ2xvYmFsIiwiaGFuZGxlciIsImV2ZW50cyIsImhhbmRsZSIsInRyaWdnZXJlZCIsImRpc3BhdGNoIiwic3BlY2lhbCIsImRlbGVnYXRlVHlwZSIsImJpbmRUeXBlIiwib3JpZ1R5cGUiLCJuYW1lc3BhY2UiLCJkZWxlZ2F0ZUNvdW50Iiwic2V0dXAiLCJ0ZWFyZG93biIsInJlbW92ZUV2ZW50IiwidHJpZ2dlciIsIkV2ZW50IiwiaXNUcmlnZ2VyIiwibmFtZXNwYWNlX3JlIiwicmVzdWx0Iiwibm9CdWJibGUiLCJwYXJlbnRXaW5kb3ciLCJpc1Byb3BhZ2F0aW9uU3RvcHBlZCIsInByZXZlbnREZWZhdWx0IiwiaXNEZWZhdWx0UHJldmVudGVkIiwiX2RlZmF1bHQiLCJmaXgiLCJkZWxlZ2F0ZVRhcmdldCIsInByZURpc3BhdGNoIiwiaGFuZGxlcnMiLCJjdXJyZW50VGFyZ2V0IiwiaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQiLCJoYW5kbGVPYmoiLCJzdG9wUHJvcGFnYXRpb24iLCJwb3N0RGlzcGF0Y2giLCJmaXhIb29rcyIsIm1vdXNlSG9va3MiLCJrZXlIb29rcyIsInByb3BzIiwic3JjRWxlbWVudCIsIm1ldGFLZXkiLCJ3aGljaCIsImNoYXJDb2RlIiwia2V5Q29kZSIsImZyb21FbGVtZW50IiwicGFnZVgiLCJjbGllbnRYIiwic2Nyb2xsTGVmdCIsImNsaWVudExlZnQiLCJwYWdlWSIsImNsaWVudFkiLCJzY3JvbGxUb3AiLCJjbGllbnRUb3AiLCJyZWxhdGVkVGFyZ2V0IiwidG9FbGVtZW50IiwibG9hZCIsImJsdXIiLCJiZWZvcmV1bmxvYWQiLCJvcmlnaW5hbEV2ZW50IiwicmV0dXJuVmFsdWUiLCJzaW11bGF0ZSIsImlzU2ltdWxhdGVkIiwiZGVmYXVsdFByZXZlbnRlZCIsInRpbWVTdGFtcCIsImNhbmNlbEJ1YmJsZSIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsIm1vdXNlZW50ZXIiLCJtb3VzZWxlYXZlIiwicG9pbnRlcmVudGVyIiwicG9pbnRlcmxlYXZlIiwic3VibWl0QnViYmxlcyIsImZvcm0iLCJfc3VibWl0X2J1YmJsZSIsImNoYW5nZUJ1YmJsZXMiLCJwcm9wZXJ0eU5hbWUiLCJfanVzdF9jaGFuZ2VkIiwiZm9jdXNpbkJ1YmJsZXMiLCJvbiIsIm9uZSIsIm9wdGlvbiIsImxlZ2VuZCIsImFyZWEiLCJwYXJhbSIsInRoZWFkIiwidHIiLCJjb2wiLCJ0ZCIsIm9wdGdyb3VwIiwidGZvb3QiLCJjb2xncm91cCIsImNhcHRpb24iLCJ0aCIsImRlZmF1bHRDaGVja2VkIiwiemEiLCJBYSIsIkJhIiwiZGVmYXVsdFNlbGVjdGVkIiwiY2xvbmUiLCJidWlsZEZyYWdtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJhcHBlbmQiLCJkb21NYW5pcCIsInByZXBlbmQiLCJpbnNlcnRCZWZvcmUiLCJiZWZvcmUiLCJhZnRlciIsIm9wdGlvbnMiLCJodG1sIiwicmVwbGFjZVdpdGgiLCJyZXBsYWNlQ2hpbGQiLCJkZXRhY2giLCJzcmMiLCJfZXZhbFVybCIsInByZXBlbmRUbyIsImluc2VydEFmdGVyIiwicmVwbGFjZUFsbCIsIkNhIiwiRGEiLCJFYSIsImdldERlZmF1bHRDb21wdXRlZFN0eWxlIiwiZGlzcGxheSIsIkZhIiwid3JpdGUiLCJjbG9zZSIsInNocmlua1dyYXBCbG9ja3MiLCJ3aWR0aCIsIkdhIiwiSGEiLCJJYSIsIkphIiwiS2EiLCJnZXRDb21wdXRlZFN0eWxlIiwib3BlbmVyIiwiZ2V0UHJvcGVydHlWYWx1ZSIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJjdXJyZW50U3R5bGUiLCJsZWZ0IiwicnVudGltZVN0eWxlIiwicGl4ZWxMZWZ0IiwiTGEiLCJtYXJnaW5SaWdodCIsIm9mZnNldEhlaWdodCIsIm9wYWNpdHkiLCJjc3NGbG9hdCIsImJhY2tncm91bmRDbGlwIiwiY2xlYXJDbG9uZVN0eWxlIiwiYm94U2l6aW5nIiwiTW96Qm94U2l6aW5nIiwiV2Via2l0Qm94U2l6aW5nIiwicmVsaWFibGVIaWRkZW5PZmZzZXRzIiwiYm94U2l6aW5nUmVsaWFibGUiLCJwaXhlbFBvc2l0aW9uIiwicmVsaWFibGVNYXJnaW5SaWdodCIsInN3YXAiLCJNYSIsIk5hIiwiT2EiLCJQYSIsIlFhIiwiUmEiLCJwb3NpdGlvbiIsInZpc2liaWxpdHkiLCJTYSIsImxldHRlclNwYWNpbmciLCJmb250V2VpZ2h0IiwiVGEiLCJVYSIsIlZhIiwiV2EiLCJYYSIsIllhIiwiY3NzSG9va3MiLCJjc3NOdW1iZXIiLCJjb2x1bW5Db3VudCIsImZpbGxPcGFjaXR5IiwiZmxleEdyb3ciLCJmbGV4U2hyaW5rIiwibGluZUhlaWdodCIsIm9yZGVyIiwib3JwaGFucyIsIndpZG93cyIsInpJbmRleCIsImNzc1Byb3BzIiwic2V0IiwiJDEiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYm9yZGVyIiwiZXhwYW5kIiwic2hvdyIsIlphIiwiVHdlZW4iLCJwcm9wIiwiZWFzaW5nIiwic3RhcnQiLCJjdXIiLCJ1bml0IiwicHJvcEhvb2tzIiwicnVuIiwiZHVyYXRpb24iLCJwb3MiLCJzdGVwIiwiZngiLCJsaW5lYXIiLCJzd2luZyIsImNvcyIsIlBJIiwiJGEiLCJfYSIsImFiIiwiYmIiLCJjYiIsImRiIiwiaWIiLCJlYiIsImNyZWF0ZVR3ZWVuIiwiZmIiLCJnYiIsImhlaWdodCIsImhiIiwidW5xdWV1ZWQiLCJvdmVyZmxvdyIsIm92ZXJmbG93WCIsIm92ZXJmbG93WSIsImhpZGRlbiIsImpiIiwia2IiLCJzdGFydFRpbWUiLCJ0d2VlbnMiLCJvcHRzIiwic3BlY2lhbEVhc2luZyIsIm9yaWdpbmFsUHJvcGVydGllcyIsIm9yaWdpbmFsT3B0aW9ucyIsInJlamVjdFdpdGgiLCJ0aW1lciIsImFuaW0iLCJjb21wbGV0ZSIsIkFuaW1hdGlvbiIsInR3ZWVuZXIiLCJwcmVmaWx0ZXIiLCJzcGVlZCIsInNwZWVkcyIsIm9sZCIsImZhZGVUbyIsImFuaW1hdGUiLCJmaW5pc2giLCJ0aW1lcnMiLCJzbGlkZURvd24iLCJzbGlkZVVwIiwic2xpZGVUb2dnbGUiLCJmYWRlVG9nZ2xlIiwidGljayIsImludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInNsb3ciLCJmYXN0IiwiZGVsYXkiLCJjbGVhclRpbWVvdXQiLCJnZXRTZXRBdHRyaWJ1dGUiLCJocmVmTm9ybWFsaXplZCIsImNoZWNrT24iLCJvcHRTZWxlY3RlZCIsImVuY3R5cGUiLCJvcHREaXNhYmxlZCIsInJhZGlvVmFsdWUiLCJsYiIsInZhbCIsInZhbEhvb2tzIiwic2Nyb2xsSGVpZ2h0IiwibWIiLCJuYiIsIm9iIiwicGIiLCJxYiIsInJiIiwicmVtb3ZlQXR0ciIsImF0dHJIb29rcyIsInByb3BGaXgiLCJzZXRBdHRyaWJ1dGVOb2RlIiwiY3JlYXRlQXR0cmlidXRlIiwiY29vcmRzIiwiY29udGVudGVkaXRhYmxlIiwic2IiLCJ0YiIsInJlbW92ZVByb3AiLCJwYXJzZUludCIsInViIiwiaG92ZXIiLCJiaW5kIiwidW5iaW5kIiwiZGVsZWdhdGUiLCJ1bmRlbGVnYXRlIiwidmIiLCJ3YiIsInhiIiwiSlNPTiIsInBhcnNlIiwiRnVuY3Rpb24iLCJwYXJzZVhNTCIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsIkFjdGl2ZVhPYmplY3QiLCJhc3luYyIsImxvYWRYTUwiLCJ5YiIsInpiIiwiQWIiLCJCYiIsIkNiIiwiRGIiLCJFYiIsIkZiIiwiR2IiLCJIYiIsIkliIiwiSmIiLCJLYiIsIkxiIiwiTWIiLCJkYXRhVHlwZXMiLCJOYiIsImFqYXhTZXR0aW5ncyIsImZsYXRPcHRpb25zIiwiT2IiLCJtaW1lVHlwZSIsImdldFJlc3BvbnNlSGVhZGVyIiwiY29udmVydGVycyIsIlBiIiwicmVzcG9uc2VGaWVsZHMiLCJkYXRhRmlsdGVyIiwiZGF0YVR5cGUiLCJhY3RpdmUiLCJsYXN0TW9kaWZpZWQiLCJldGFnIiwidXJsIiwiaXNMb2NhbCIsInByb2Nlc3NEYXRhIiwiY29udGVudFR5cGUiLCJhY2NlcHRzIiwieG1sIiwianNvbiIsImFqYXhTZXR1cCIsImFqYXhQcmVmaWx0ZXIiLCJhamF4VHJhbnNwb3J0IiwiYWpheCIsInN0YXR1c0NvZGUiLCJnZXRBbGxSZXNwb25zZUhlYWRlcnMiLCJzZXRSZXF1ZXN0SGVhZGVyIiwib3ZlcnJpZGVNaW1lVHlwZSIsInN0YXR1cyIsImFib3J0Iiwic3VjY2VzcyIsIm1ldGhvZCIsImNyb3NzRG9tYWluIiwidHJhZGl0aW9uYWwiLCJoYXNDb250ZW50IiwiaWZNb2RpZmllZCIsImhlYWRlcnMiLCJiZWZvcmVTZW5kIiwidGltZW91dCIsInNlbmQiLCJzdGF0dXNUZXh0IiwiZ2V0SlNPTiIsImdldFNjcmlwdCIsIndyYXBBbGwiLCJ3cmFwSW5uZXIiLCJ3cmFwIiwidW53cmFwIiwidmlzaWJsZSIsIlFiIiwiUmIiLCJTYiIsIlRiIiwiVWIiLCJWYiIsImVuY29kZVVSSUNvbXBvbmVudCIsInNlcmlhbGl6ZSIsInNlcmlhbGl6ZUFycmF5IiwieGhyIiwiWmIiLCIkYiIsIldiIiwiWGIiLCJZYiIsImNvcnMiLCJvcGVuIiwidXNlcm5hbWUiLCJ4aHJGaWVsZHMiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZXNwb25zZVRleHQiLCJYTUxIdHRwUmVxdWVzdCIsInNjcmlwdCIsImhlYWQiLCJzY3JpcHRDaGFyc2V0IiwiY2hhcnNldCIsIm9ubG9hZCIsIl9iIiwiYWMiLCJqc29ucCIsImpzb25wQ2FsbGJhY2siLCJiYyIsImFuaW1hdGVkIiwiY2MiLCJkYyIsIm9mZnNldCIsInNldE9mZnNldCIsInVzaW5nIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGFnZVlPZmZzZXQiLCJwYWdlWE9mZnNldCIsIm9mZnNldFBhcmVudCIsInNjcm9sbFRvIiwiSGVpZ2h0IiwiV2lkdGgiLCJzaXplIiwiYW5kU2VsZiIsImVjIiwiZmMiLCJub0NvbmZsaWN0Iiwic3Vic3RyaW5nIiwidGltZW91dElkIiwic2Nyb2xsZXgiLCJib3R0b20iLCJtb2RlIiwiZW50ZXIiLCJsZWF2ZSIsImluaXRpYWxpemUiLCJ0ZXJtaW5hdGUiLCJzY3JvbGwiLCIkZWxlbWVudCIsIm91dGVySGVpZ2h0IiwiZWxlbWVudCIsInVuc2Nyb2xsZXgiLCJhbmNob3IiLCJzY3JvbGx5IiwicG9sbE9uY2UiLCJza2VsIiwiYnJlYWtwb2ludHMiLCJ4bGFyZ2UiLCJsYXJnZSIsIm1lZGl1bSIsInNtYWxsIiwieHNtYWxsIiwieHhzbWFsbCIsIiR3aW5kb3ciLCIkYm9keSIsIiR3cmFwcGVyIiwicGxhY2Vob2xkZXIiLCJwcmlvcml0aXplIiwiYnJlYWtwb2ludCIsInZhcnMiLCJicm93c2VyIiwiZmxleGJveEZpeFRpbWVvdXRJZCIsIiR4IiwiY2FuVXNlIiwiJHRoaXMiLCIkaW1nIiwicG9zaXRpb25DbGFzcyIsIm1vYmlsZSIsImRlbHRhIiwiZGVsdGFYIiwibWluIiwiJGlubmVyIiwiZGlyZWN0aW9uIiwiX2dhbGxlcnlfbW92ZUludGVydmFsSWQiLCIkZ2FsbGVyeSIsIiRtb2RhbCIsIiRtb2RhbEltZyIsIl9sb2NrZWQiLCJicmVha3BvaW50SWRzIiwiaXNJbml0Iiwib2JqIiwiYXR0YWNobWVudHMiLCJzdGF0ZXMiLCJzZCIsInN0YXRlSGFuZGxlcnMiLCJzdGF0ZUlkIiwiRE9NUmVhZHkiLCJpdGVyYXRlIiwibWF0Y2hlc01lZGlhIiwibmV3U3R5bGUiLCJfY2FuVXNlIiwibWVkaWEiLCJ3YXNBY3RpdmUiLCJzeW5jIiwicG9sbCIsImFkZFN0YXRlSGFuZGxlciIsImNhbGxTdGF0ZUhhbmRsZXIiLCJjaGFuZ2VTdGF0ZSIsImxhc3RTdGF0ZUlkIiwiZGV0YWNoQWxsIiwiYXR0YWNoQWxsIiwiZ2VuZXJhdGVTdGF0ZUNvbmZpZyIsImdldFN0YXRlSWQiLCJfYXR0YWNoIiwiYXR0YWNoIiwidGFnTmFtZSIsInBlcm1hbmVudCIsInByaW9yaXR5IiwiYXR0YWNobWVudCIsIm5ld0F0dGFjaG1lbnQiLCJpbml0TWV0aG9kcyIsImluaXRWYXJzIiwib25yZXNpemUiLCJvbm9yaWVudGF0aW9uY2hhbmdlIiwic2VsZiIsIlR5cGVFcnJvciIsImFicyIsImtleXMiLCJtYXRjaE1lZGlhIiwic3R5bGVNZWRpYSIsIm1hdGNoTWVkaXVtIiwic3R5bGVTaGVldCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiYnJvd3NlclZlcnNpb24iLCJvcyIsIm9zVmVyc2lvbiIsIklFVmVyc2lvbiIsInRvdWNoIiwibXNNYXhUb3VjaFBvaW50cyIsIm5hdkxpc3QiLCJpbmRlbnQiLCJwYW5lbCIsInVzZXJDb25maWciLCJjb25maWciLCJoaWRlT25DbGljayIsImhpZGVPbkVzY2FwZSIsImhpZGVPblN3aXBlIiwicmVzZXRTY3JvbGwiLCJyZXNldEZvcm1zIiwic2lkZSIsInZpc2libGVDbGFzcyIsIl9oaWRlIiwidG91Y2hQb3NYIiwidG91Y2hlcyIsInRvdWNoUG9zWSIsImRpZmZYIiwiZGlmZlkiLCJ0cyIsImJvdW5kYXJ5IiwiJGVsZW1lbnRzIiwiY29uZGl0aW9uIiwia2V5IiwiJGUiLCIkcCIsIiRwYXJlbnQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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U0FBS0QsR0FBRzduQixJQUFILEVBQUw7O0FBRUE7QUFDQyxRQUFJOG5CLEdBQUd6MkIsTUFBSCxJQUFhLENBQWpCLEVBQ0M7O0FBRUg7QUFDQ3cyQixPQUFHbGIsU0FBSCxDQUFhb2IsT0FBYjs7QUFFRDtBQUNDRixPQUFHbGtCLElBQUgsQ0FBUWlrQixHQUFSLEVBQWFFLEVBQWI7QUFFRDs7QUFFRjtBQXJCQyxRQXNCSzs7QUFFSjtBQUNDLFNBQUlILFNBQUosRUFDQzs7QUFFRkcsVUFBS0QsR0FBR2xrQixJQUFILENBQVFpa0IsR0FBUixDQUFMOztBQUVBO0FBQ0NDLFFBQUdqYixXQUFILENBQWVrYixFQUFmOztBQUVEO0FBQ0NELFFBQUc3akIsVUFBSCxDQUFjNGpCLEdBQWQ7QUFFRDtBQUVGLEdBaEREO0FBa0RELEVBM0REO0FBNkRBLENBMWtCRCxFQTBrQkdyN0IsTUExa0JILEUiLCJmaWxlIjoiXFxqc1xcYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNzJkYTFjYjg5OTk4MjQ4ODc4MWYiLCIvKiBnbG9iYWxzIF9fd2VicGFja19hbWRfb3B0aW9uc19fICovXHJcbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX2FtZF9vcHRpb25zX187XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2FtZC1vcHRpb25zLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vYW1kLW9wdGlvbnMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0aWYoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uL3ZlbmRvci9odG1sNVN0b3J5VGhlbWUvanMvbWFpbicpO1xyXG5yZXF1aXJlKCcuLi92ZW5kb3IvY29kcm9wc01lbnUvanMvbWFpbicpO1xyXG5yZXF1aXJlKCcuL3BhcnRzL2hvbWUuanMnKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL3NjcmlwdHMvYXBwLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxualF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigkKSB7XHJcbiAgICAkKFwiI2hvbWUtc2xpZGVzaG93ID4gZGl2Omd0KDApXCIpLmhpZGUoKTtcclxuXHJcbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcjaG9tZS1zbGlkZXNob3cgPiBkaXY6Zmlyc3QnKVxyXG4gICAgICAgICAgICAuZmFkZU91dCgxMDAwKVxyXG4gICAgICAgICAgICAubmV4dCgpXHJcbiAgICAgICAgICAgIC5mYWRlSW4oMTAwMClcclxuICAgICAgICAgICAgLmVuZCgpXHJcbiAgICAgICAgICAgIC5hcHBlbmRUbygnI2hvbWUtc2xpZGVzaG93Jyk7XHJcbiAgICB9LCAgNDAwMCk7XHJcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvc2NyaXB0cy9wYXJ0cy9ob21lLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvc3R5bGVzL2FkbWluLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9zdHlsZXMvYWRtaW4uc2Nzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohXG4gKiBjbGFzc2llIC0gY2xhc3MgaGVscGVyIGZ1bmN0aW9uc1xuICogZnJvbSBib256byBodHRwczovL2dpdGh1Yi5jb20vZGVkL2JvbnpvXG4gKiBcbiAqIGNsYXNzaWUuaGFzKCBlbGVtLCAnbXktY2xhc3MnICkgLT4gdHJ1ZS9mYWxzZVxuICogY2xhc3NpZS5hZGQoIGVsZW0sICdteS1uZXctY2xhc3MnIClcbiAqIGNsYXNzaWUucmVtb3ZlKCBlbGVtLCAnbXktdW53YW50ZWQtY2xhc3MnIClcbiAqIGNsYXNzaWUudG9nZ2xlKCBlbGVtLCAnbXktY2xhc3MnIClcbiAqL1xuXG4vKmpzaGludCBicm93c2VyOiB0cnVlLCBzdHJpY3Q6IHRydWUsIHVuZGVmOiB0cnVlICovXG4vKmdsb2JhbCBkZWZpbmU6IGZhbHNlICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdyApIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyBjbGFzcyBoZWxwZXIgZnVuY3Rpb25zIGZyb20gYm9uem8gaHR0cHM6Ly9naXRodWIuY29tL2RlZC9ib256b1xuXG5mdW5jdGlvbiBjbGFzc1JlZyggY2xhc3NOYW1lICkge1xuICByZXR1cm4gbmV3IFJlZ0V4cChcIihefFxcXFxzKylcIiArIGNsYXNzTmFtZSArIFwiKFxcXFxzK3wkKVwiKTtcbn1cblxuLy8gY2xhc3NMaXN0IHN1cHBvcnQgZm9yIGNsYXNzIG1hbmFnZW1lbnRcbi8vIGFsdGhvIHRvIGJlIGZhaXIsIHRoZSBhcGkgc3Vja3MgYmVjYXVzZSBpdCB3b24ndCBhY2NlcHQgbXVsdGlwbGUgY2xhc3NlcyBhdCBvbmNlXG52YXIgaGFzQ2xhc3MsIGFkZENsYXNzLCByZW1vdmVDbGFzcztcblxuaWYgKCAnY2xhc3NMaXN0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgKSB7XG4gIGhhc0NsYXNzID0gZnVuY3Rpb24oIGVsZW0sIGMgKSB7XG4gICAgcmV0dXJuIGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCBjICk7XG4gIH07XG4gIGFkZENsYXNzID0gZnVuY3Rpb24oIGVsZW0sIGMgKSB7XG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKCBjICk7XG4gIH07XG4gIHJlbW92ZUNsYXNzID0gZnVuY3Rpb24oIGVsZW0sIGMgKSB7XG4gICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCBjICk7XG4gIH07XG59XG5lbHNlIHtcbiAgaGFzQ2xhc3MgPSBmdW5jdGlvbiggZWxlbSwgYyApIHtcbiAgICByZXR1cm4gY2xhc3NSZWcoIGMgKS50ZXN0KCBlbGVtLmNsYXNzTmFtZSApO1xuICB9O1xuICBhZGRDbGFzcyA9IGZ1bmN0aW9uKCBlbGVtLCBjICkge1xuICAgIGlmICggIWhhc0NsYXNzKCBlbGVtLCBjICkgKSB7XG4gICAgICBlbGVtLmNsYXNzTmFtZSA9IGVsZW0uY2xhc3NOYW1lICsgJyAnICsgYztcbiAgICB9XG4gIH07XG4gIHJlbW92ZUNsYXNzID0gZnVuY3Rpb24oIGVsZW0sIGMgKSB7XG4gICAgZWxlbS5jbGFzc05hbWUgPSBlbGVtLmNsYXNzTmFtZS5yZXBsYWNlKCBjbGFzc1JlZyggYyApLCAnICcgKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoIGVsZW0sIGMgKSB7XG4gIHZhciBmbiA9IGhhc0NsYXNzKCBlbGVtLCBjICkgPyByZW1vdmVDbGFzcyA6IGFkZENsYXNzO1xuICBmbiggZWxlbSwgYyApO1xufVxuXG52YXIgY2xhc3NpZSA9IHtcbiAgLy8gZnVsbCBuYW1lc1xuICBoYXNDbGFzczogaGFzQ2xhc3MsXG4gIGFkZENsYXNzOiBhZGRDbGFzcyxcbiAgcmVtb3ZlQ2xhc3M6IHJlbW92ZUNsYXNzLFxuICB0b2dnbGVDbGFzczogdG9nZ2xlQ2xhc3MsXG4gIC8vIHNob3J0IG5hbWVzXG4gIGhhczogaGFzQ2xhc3MsXG4gIGFkZDogYWRkQ2xhc3MsXG4gIHJlbW92ZTogcmVtb3ZlQ2xhc3MsXG4gIHRvZ2dsZTogdG9nZ2xlQ2xhc3Ncbn07XG5cbi8vIHRyYW5zcG9ydFxuaWYgKCB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gIC8vIEFNRFxuICBkZWZpbmUoIGNsYXNzaWUgKTtcbn0gZWxzZSB7XG4gIC8vIGJyb3dzZXIgZ2xvYmFsXG4gIHdpbmRvdy5jbGFzc2llID0gY2xhc3NpZTtcbn1cblxufSkoIHdpbmRvdyApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy92ZW5kb3IvY29kcm9wc01lbnUvanMvY2xhc3NpZS5qcyIsIi8qKlxuICogbWFpbi5qc1xuICogaHR0cDovL3d3dy5jb2Ryb3BzLmNvbVxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gKiBcbiAqIENvcHlyaWdodCAyMDE0LCBDb2Ryb3BzXG4gKiBodHRwOi8vd3d3LmNvZHJvcHMuY29tXG4gKi9cbnRyeSB7XG4gICAgd2luZG93LmNsYXNzaWUgPSByZXF1aXJlKCcuL2NsYXNzaWUnKTtcbn0gY2F0Y2ggKGUpIHt9XG5cbihmdW5jdGlvbigpIHtcblxuXHR2YXIgYm9keUVsID0gZG9jdW1lbnQuYm9keSxcblx0XHRjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5jb250ZW50LXdyYXAnICksXG5cdFx0b3BlbmJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnb3Blbi1idXR0b24nICksXG5cdFx0Y2xvc2VidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2Nsb3NlLWJ1dHRvbicgKSxcblx0XHRpc09wZW4gPSBmYWxzZTtcblxuXHRmdW5jdGlvbiBpbml0KCkge1xuXHRcdGluaXRFdmVudHMoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGluaXRFdmVudHMoKSB7XG5cdFx0b3BlbmJ0bi5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCB0b2dnbGVNZW51ICk7XG5cdFx0aWYoIGNsb3NlYnRuICkge1xuXHRcdFx0Y2xvc2VidG4uYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgdG9nZ2xlTWVudSApO1xuXHRcdH1cblxuXHRcdC8vIGNsb3NlIHRoZSBtZW51IGVsZW1lbnQgaWYgdGhlIHRhcmdldCBpdMK0cyBub3QgdGhlIG1lbnUgZWxlbWVudCBvciBvbmUgb2YgaXRzIGRlc2NlbmRhbnRzLi5cblx0XHRjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGZ1bmN0aW9uKGV2KSB7XG5cdFx0XHR2YXIgdGFyZ2V0ID0gZXYudGFyZ2V0O1xuXHRcdFx0aWYoIGlzT3BlbiAmJiB0YXJnZXQgIT09IG9wZW5idG4gKSB7XG5cdFx0XHRcdC8vIHRvZ2dsZU1lbnUoKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cblxuXHRmdW5jdGlvbiB0b2dnbGVNZW51KCkge1xuXHRcdGlmKCBpc09wZW4gKSB7XG5cdFx0XHRjbGFzc2llLnJlbW92ZSggYm9keUVsLCAnc2hvdy1tZW51JyApO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGNsYXNzaWUuYWRkKCBib2R5RWwsICdzaG93LW1lbnUnICk7XG5cdFx0fVxuXHRcdGlzT3BlbiA9ICFpc09wZW47XG5cdH1cblxuXHRpbml0KCk7XG5cblx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHR0b2dnbGVNZW51KCk7XG5cdH0sIDM1MCk7XG5cbn0pKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy92ZW5kb3IvY29kcm9wc01lbnUvanMvbWFpbi5qcyIsIi8qISBqUXVlcnkgdjEuMTEuMyB8IChjKSAyMDA1LCAyMDE1IGpRdWVyeSBGb3VuZGF0aW9uLCBJbmMuIHwganF1ZXJ5Lm9yZy9saWNlbnNlICovXG4hZnVuY3Rpb24oYSxiKXtcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9YS5kb2N1bWVudD9iKGEsITApOmZ1bmN0aW9uKGEpe2lmKCFhLmRvY3VtZW50KXRocm93IG5ldyBFcnJvcihcImpRdWVyeSByZXF1aXJlcyBhIHdpbmRvdyB3aXRoIGEgZG9jdW1lbnRcIik7cmV0dXJuIGIoYSl9OmIoYSl9KFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OnRoaXMsZnVuY3Rpb24oYSxiKXt2YXIgYz1bXSxkPWMuc2xpY2UsZT1jLmNvbmNhdCxmPWMucHVzaCxnPWMuaW5kZXhPZixoPXt9LGk9aC50b1N0cmluZyxqPWguaGFzT3duUHJvcGVydHksaz17fSxsPVwiMS4xMS4zXCIsbT1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgbS5mbi5pbml0KGEsYil9LG49L15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nLG89L14tbXMtLyxwPS8tKFtcXGRhLXpdKS9naSxxPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGIudG9VcHBlckNhc2UoKX07bS5mbj1tLnByb3RvdHlwZT17anF1ZXJ5OmwsY29uc3RydWN0b3I6bSxzZWxlY3RvcjpcIlwiLGxlbmd0aDowLHRvQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gZC5jYWxsKHRoaXMpfSxnZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPWE/MD5hP3RoaXNbYSt0aGlzLmxlbmd0aF06dGhpc1thXTpkLmNhbGwodGhpcyl9LHB1c2hTdGFjazpmdW5jdGlvbihhKXt2YXIgYj1tLm1lcmdlKHRoaXMuY29uc3RydWN0b3IoKSxhKTtyZXR1cm4gYi5wcmV2T2JqZWN0PXRoaXMsYi5jb250ZXh0PXRoaXMuY29udGV4dCxifSxlYWNoOmZ1bmN0aW9uKGEsYil7cmV0dXJuIG0uZWFjaCh0aGlzLGEsYil9LG1hcDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2sobS5tYXAodGhpcyxmdW5jdGlvbihiLGMpe3JldHVybiBhLmNhbGwoYixjLGIpfSkpfSxzbGljZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnB1c2hTdGFjayhkLmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9LGZpcnN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoMCl9LGxhc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgtMSl9LGVxOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMubGVuZ3RoLGM9K2ErKDA+YT9iOjApO3JldHVybiB0aGlzLnB1c2hTdGFjayhjPj0wJiZiPmM/W3RoaXNbY11dOltdKX0sZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHJldk9iamVjdHx8dGhpcy5jb25zdHJ1Y3RvcihudWxsKX0scHVzaDpmLHNvcnQ6Yy5zb3J0LHNwbGljZTpjLnNwbGljZX0sbS5leHRlbmQ9bS5mbi5leHRlbmQ9ZnVuY3Rpb24oKXt2YXIgYSxiLGMsZCxlLGYsZz1hcmd1bWVudHNbMF18fHt9LGg9MSxpPWFyZ3VtZW50cy5sZW5ndGgsaj0hMTtmb3IoXCJib29sZWFuXCI9PXR5cGVvZiBnJiYoaj1nLGc9YXJndW1lbnRzW2hdfHx7fSxoKyspLFwib2JqZWN0XCI9PXR5cGVvZiBnfHxtLmlzRnVuY3Rpb24oZyl8fChnPXt9KSxoPT09aSYmKGc9dGhpcyxoLS0pO2k+aDtoKyspaWYobnVsbCE9KGU9YXJndW1lbnRzW2hdKSlmb3IoZCBpbiBlKWE9Z1tkXSxjPWVbZF0sZyE9PWMmJihqJiZjJiYobS5pc1BsYWluT2JqZWN0KGMpfHwoYj1tLmlzQXJyYXkoYykpKT8oYj8oYj0hMSxmPWEmJm0uaXNBcnJheShhKT9hOltdKTpmPWEmJm0uaXNQbGFpbk9iamVjdChhKT9hOnt9LGdbZF09bS5leHRlbmQoaixmLGMpKTp2b2lkIDAhPT1jJiYoZ1tkXT1jKSk7cmV0dXJuIGd9LG0uZXh0ZW5kKHtleHBhbmRvOlwialF1ZXJ5XCIrKGwrTWF0aC5yYW5kb20oKSkucmVwbGFjZSgvXFxEL2csXCJcIiksaXNSZWFkeTohMCxlcnJvcjpmdW5jdGlvbihhKXt0aHJvdyBuZXcgRXJyb3IoYSl9LG5vb3A6ZnVuY3Rpb24oKXt9LGlzRnVuY3Rpb246ZnVuY3Rpb24oYSl7cmV0dXJuXCJmdW5jdGlvblwiPT09bS50eXBlKGEpfSxpc0FycmF5OkFycmF5LmlzQXJyYXl8fGZ1bmN0aW9uKGEpe3JldHVyblwiYXJyYXlcIj09PW0udHlwZShhKX0saXNXaW5kb3c6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPWEmJmE9PWEud2luZG93fSxpc051bWVyaWM6ZnVuY3Rpb24oYSl7cmV0dXJuIW0uaXNBcnJheShhKSYmYS1wYXJzZUZsb2F0KGEpKzE+PTB9LGlzRW1wdHlPYmplY3Q6ZnVuY3Rpb24oYSl7dmFyIGI7Zm9yKGIgaW4gYSlyZXR1cm4hMTtyZXR1cm4hMH0saXNQbGFpbk9iamVjdDpmdW5jdGlvbihhKXt2YXIgYjtpZighYXx8XCJvYmplY3RcIiE9PW0udHlwZShhKXx8YS5ub2RlVHlwZXx8bS5pc1dpbmRvdyhhKSlyZXR1cm4hMTt0cnl7aWYoYS5jb25zdHJ1Y3RvciYmIWouY2FsbChhLFwiY29uc3RydWN0b3JcIikmJiFqLmNhbGwoYS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUsXCJpc1Byb3RvdHlwZU9mXCIpKXJldHVybiExfWNhdGNoKGMpe3JldHVybiExfWlmKGsub3duTGFzdClmb3IoYiBpbiBhKXJldHVybiBqLmNhbGwoYSxiKTtmb3IoYiBpbiBhKTtyZXR1cm4gdm9pZCAwPT09Ynx8ai5jYWxsKGEsYil9LHR5cGU6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/YStcIlwiOlwib2JqZWN0XCI9PXR5cGVvZiBhfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBhP2hbaS5jYWxsKGEpXXx8XCJvYmplY3RcIjp0eXBlb2YgYX0sZ2xvYmFsRXZhbDpmdW5jdGlvbihiKXtiJiZtLnRyaW0oYikmJihhLmV4ZWNTY3JpcHR8fGZ1bmN0aW9uKGIpe2EuZXZhbC5jYWxsKGEsYil9KShiKX0sY2FtZWxDYXNlOmZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2UobyxcIm1zLVwiKS5yZXBsYWNlKHAscSl9LG5vZGVOYW1lOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGEubm9kZU5hbWUmJmEubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PWIudG9Mb3dlckNhc2UoKX0sZWFjaDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZT0wLGY9YS5sZW5ndGgsZz1yKGEpO2lmKGMpe2lmKGcpe2Zvcig7Zj5lO2UrKylpZihkPWIuYXBwbHkoYVtlXSxjKSxkPT09ITEpYnJlYWt9ZWxzZSBmb3IoZSBpbiBhKWlmKGQ9Yi5hcHBseShhW2VdLGMpLGQ9PT0hMSlicmVha31lbHNlIGlmKGcpe2Zvcig7Zj5lO2UrKylpZihkPWIuY2FsbChhW2VdLGUsYVtlXSksZD09PSExKWJyZWFrfWVsc2UgZm9yKGUgaW4gYSlpZihkPWIuY2FsbChhW2VdLGUsYVtlXSksZD09PSExKWJyZWFrO3JldHVybiBhfSx0cmltOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP1wiXCI6KGErXCJcIikucmVwbGFjZShuLFwiXCIpfSxtYWtlQXJyYXk6ZnVuY3Rpb24oYSxiKXt2YXIgYz1ifHxbXTtyZXR1cm4gbnVsbCE9YSYmKHIoT2JqZWN0KGEpKT9tLm1lcmdlKGMsXCJzdHJpbmdcIj09dHlwZW9mIGE/W2FdOmEpOmYuY2FsbChjLGEpKSxjfSxpbkFycmF5OmZ1bmN0aW9uKGEsYixjKXt2YXIgZDtpZihiKXtpZihnKXJldHVybiBnLmNhbGwoYixhLGMpO2ZvcihkPWIubGVuZ3RoLGM9Yz8wPmM/TWF0aC5tYXgoMCxkK2MpOmM6MDtkPmM7YysrKWlmKGMgaW4gYiYmYltjXT09PWEpcmV0dXJuIGN9cmV0dXJuLTF9LG1lcmdlOmZ1bmN0aW9uKGEsYil7dmFyIGM9K2IubGVuZ3RoLGQ9MCxlPWEubGVuZ3RoO3doaWxlKGM+ZClhW2UrK109YltkKytdO2lmKGMhPT1jKXdoaWxlKHZvaWQgMCE9PWJbZF0pYVtlKytdPWJbZCsrXTtyZXR1cm4gYS5sZW5ndGg9ZSxhfSxncmVwOmZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQsZT1bXSxmPTAsZz1hLmxlbmd0aCxoPSFjO2c+ZjtmKyspZD0hYihhW2ZdLGYpLGQhPT1oJiZlLnB1c2goYVtmXSk7cmV0dXJuIGV9LG1hcDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZj0wLGc9YS5sZW5ndGgsaD1yKGEpLGk9W107aWYoaClmb3IoO2c+ZjtmKyspZD1iKGFbZl0sZixjKSxudWxsIT1kJiZpLnB1c2goZCk7ZWxzZSBmb3IoZiBpbiBhKWQ9YihhW2ZdLGYsYyksbnVsbCE9ZCYmaS5wdXNoKGQpO3JldHVybiBlLmFwcGx5KFtdLGkpfSxndWlkOjEscHJveHk6ZnVuY3Rpb24oYSxiKXt2YXIgYyxlLGY7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGImJihmPWFbYl0sYj1hLGE9ZiksbS5pc0Z1bmN0aW9uKGEpPyhjPWQuY2FsbChhcmd1bWVudHMsMiksZT1mdW5jdGlvbigpe3JldHVybiBhLmFwcGx5KGJ8fHRoaXMsYy5jb25jYXQoZC5jYWxsKGFyZ3VtZW50cykpKX0sZS5ndWlkPWEuZ3VpZD1hLmd1aWR8fG0uZ3VpZCsrLGUpOnZvaWQgMH0sbm93OmZ1bmN0aW9uKCl7cmV0dXJuK25ldyBEYXRlfSxzdXBwb3J0Omt9KSxtLmVhY2goXCJCb29sZWFuIE51bWJlciBTdHJpbmcgRnVuY3Rpb24gQXJyYXkgRGF0ZSBSZWdFeHAgT2JqZWN0IEVycm9yXCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGEsYil7aFtcIltvYmplY3QgXCIrYitcIl1cIl09Yi50b0xvd2VyQ2FzZSgpfSk7ZnVuY3Rpb24gcihhKXt2YXIgYj1cImxlbmd0aFwiaW4gYSYmYS5sZW5ndGgsYz1tLnR5cGUoYSk7cmV0dXJuXCJmdW5jdGlvblwiPT09Y3x8bS5pc1dpbmRvdyhhKT8hMToxPT09YS5ub2RlVHlwZSYmYj8hMDpcImFycmF5XCI9PT1jfHwwPT09Ynx8XCJudW1iZXJcIj09dHlwZW9mIGImJmI+MCYmYi0xIGluIGF9dmFyIHM9ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGgsaSxqLGssbCxtLG4sbyxwLHEscixzLHQsdT1cInNpenpsZVwiKzEqbmV3IERhdGUsdj1hLmRvY3VtZW50LHc9MCx4PTAseT1oYSgpLHo9aGEoKSxBPWhhKCksQj1mdW5jdGlvbihhLGIpe3JldHVybiBhPT09YiYmKGw9ITApLDB9LEM9MTw8MzEsRD17fS5oYXNPd25Qcm9wZXJ0eSxFPVtdLEY9RS5wb3AsRz1FLnB1c2gsSD1FLnB1c2gsST1FLnNsaWNlLEo9ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MCxkPWEubGVuZ3RoO2Q+YztjKyspaWYoYVtjXT09PWIpcmV0dXJuIGM7cmV0dXJuLTF9LEs9XCJjaGVja2VkfHNlbGVjdGVkfGFzeW5jfGF1dG9mb2N1c3xhdXRvcGxheXxjb250cm9sc3xkZWZlcnxkaXNhYmxlZHxoaWRkZW58aXNtYXB8bG9vcHxtdWx0aXBsZXxvcGVufHJlYWRvbmx5fHJlcXVpcmVkfHNjb3BlZFwiLEw9XCJbXFxcXHgyMFxcXFx0XFxcXHJcXFxcblxcXFxmXVwiLE09XCIoPzpcXFxcXFxcXC58W1xcXFx3LV18W15cXFxceDAwLVxcXFx4YTBdKStcIixOPU0ucmVwbGFjZShcIndcIixcIncjXCIpLE89XCJcXFxcW1wiK0wrXCIqKFwiK00rXCIpKD86XCIrTCtcIiooWypeJHwhfl0/PSlcIitMK1wiKig/OicoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcInwoXCIrTitcIikpfClcIitMK1wiKlxcXFxdXCIsUD1cIjooXCIrTStcIikoPzpcXFxcKCgoJygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwiKXwoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKVtcXFxcXV18XCIrTytcIikqKXwuKilcXFxcKXwpXCIsUT1uZXcgUmVnRXhwKEwrXCIrXCIsXCJnXCIpLFI9bmV3IFJlZ0V4cChcIl5cIitMK1wiK3woKD86XnxbXlxcXFxcXFxcXSkoPzpcXFxcXFxcXC4pKilcIitMK1wiKyRcIixcImdcIiksUz1uZXcgUmVnRXhwKFwiXlwiK0wrXCIqLFwiK0wrXCIqXCIpLFQ9bmV3IFJlZ0V4cChcIl5cIitMK1wiKihbPit+XXxcIitMK1wiKVwiK0wrXCIqXCIpLFU9bmV3IFJlZ0V4cChcIj1cIitMK1wiKihbXlxcXFxdJ1xcXCJdKj8pXCIrTCtcIipcXFxcXVwiLFwiZ1wiKSxWPW5ldyBSZWdFeHAoUCksVz1uZXcgUmVnRXhwKFwiXlwiK04rXCIkXCIpLFg9e0lEOm5ldyBSZWdFeHAoXCJeIyhcIitNK1wiKVwiKSxDTEFTUzpuZXcgUmVnRXhwKFwiXlxcXFwuKFwiK00rXCIpXCIpLFRBRzpuZXcgUmVnRXhwKFwiXihcIitNLnJlcGxhY2UoXCJ3XCIsXCJ3KlwiKStcIilcIiksQVRUUjpuZXcgUmVnRXhwKFwiXlwiK08pLFBTRVVETzpuZXcgUmVnRXhwKFwiXlwiK1ApLENISUxEOm5ldyBSZWdFeHAoXCJeOihvbmx5fGZpcnN0fGxhc3R8bnRofG50aC1sYXN0KS0oY2hpbGR8b2YtdHlwZSkoPzpcXFxcKFwiK0wrXCIqKGV2ZW58b2RkfCgoWystXXwpKFxcXFxkKilufClcIitMK1wiKig/OihbKy1dfClcIitMK1wiKihcXFxcZCspfCkpXCIrTCtcIipcXFxcKXwpXCIsXCJpXCIpLGJvb2w6bmV3IFJlZ0V4cChcIl4oPzpcIitLK1wiKSRcIixcImlcIiksbmVlZHNDb250ZXh0Om5ldyBSZWdFeHAoXCJeXCIrTCtcIipbPit+XXw6KGV2ZW58b2RkfGVxfGd0fGx0fG50aHxmaXJzdHxsYXN0KSg/OlxcXFwoXCIrTCtcIiooKD86LVxcXFxkKT9cXFxcZCopXCIrTCtcIipcXFxcKXwpKD89W14tXXwkKVwiLFwiaVwiKX0sWT0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLFo9L15oXFxkJC9pLCQ9L15bXntdK1xce1xccypcXFtuYXRpdmUgXFx3LyxfPS9eKD86IyhbXFx3LV0rKXwoXFx3Kyl8XFwuKFtcXHctXSspKSQvLGFhPS9bK35dLyxiYT0vJ3xcXFxcL2csY2E9bmV3IFJlZ0V4cChcIlxcXFxcXFxcKFtcXFxcZGEtZl17MSw2fVwiK0wrXCI/fChcIitMK1wiKXwuKVwiLFwiaWdcIiksZGE9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPVwiMHhcIitiLTY1NTM2O3JldHVybiBkIT09ZHx8Yz9iOjA+ZD9TdHJpbmcuZnJvbUNoYXJDb2RlKGQrNjU1MzYpOlN0cmluZy5mcm9tQ2hhckNvZGUoZD4+MTB8NTUyOTYsMTAyMyZkfDU2MzIwKX0sZWE9ZnVuY3Rpb24oKXttKCl9O3RyeXtILmFwcGx5KEU9SS5jYWxsKHYuY2hpbGROb2Rlcyksdi5jaGlsZE5vZGVzKSxFW3YuY2hpbGROb2Rlcy5sZW5ndGhdLm5vZGVUeXBlfWNhdGNoKGZhKXtIPXthcHBseTpFLmxlbmd0aD9mdW5jdGlvbihhLGIpe0cuYXBwbHkoYSxJLmNhbGwoYikpfTpmdW5jdGlvbihhLGIpe3ZhciBjPWEubGVuZ3RoLGQ9MDt3aGlsZShhW2MrK109YltkKytdKTthLmxlbmd0aD1jLTF9fX1mdW5jdGlvbiBnYShhLGIsZCxlKXt2YXIgZixoLGosayxsLG8scixzLHcseDtpZigoYj9iLm93bmVyRG9jdW1lbnR8fGI6dikhPT1uJiZtKGIpLGI9Ynx8bixkPWR8fFtdLGs9Yi5ub2RlVHlwZSxcInN0cmluZ1wiIT10eXBlb2YgYXx8IWF8fDEhPT1rJiY5IT09ayYmMTEhPT1rKXJldHVybiBkO2lmKCFlJiZwKXtpZigxMSE9PWsmJihmPV8uZXhlYyhhKSkpaWYoaj1mWzFdKXtpZig5PT09ayl7aWYoaD1iLmdldEVsZW1lbnRCeUlkKGopLCFofHwhaC5wYXJlbnROb2RlKXJldHVybiBkO2lmKGguaWQ9PT1qKXJldHVybiBkLnB1c2goaCksZH1lbHNlIGlmKGIub3duZXJEb2N1bWVudCYmKGg9Yi5vd25lckRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGopKSYmdChiLGgpJiZoLmlkPT09ailyZXR1cm4gZC5wdXNoKGgpLGR9ZWxzZXtpZihmWzJdKXJldHVybiBILmFwcGx5KGQsYi5nZXRFbGVtZW50c0J5VGFnTmFtZShhKSksZDtpZigoaj1mWzNdKSYmYy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKXJldHVybiBILmFwcGx5KGQsYi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGopKSxkfWlmKGMucXNhJiYoIXF8fCFxLnRlc3QoYSkpKXtpZihzPXI9dSx3PWIseD0xIT09ayYmYSwxPT09ayYmXCJvYmplY3RcIiE9PWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKSl7bz1nKGEpLChyPWIuZ2V0QXR0cmlidXRlKFwiaWRcIikpP3M9ci5yZXBsYWNlKGJhLFwiXFxcXCQmXCIpOmIuc2V0QXR0cmlidXRlKFwiaWRcIixzKSxzPVwiW2lkPSdcIitzK1wiJ10gXCIsbD1vLmxlbmd0aDt3aGlsZShsLS0pb1tsXT1zK3JhKG9bbF0pO3c9YWEudGVzdChhKSYmcGEoYi5wYXJlbnROb2RlKXx8Yix4PW8uam9pbihcIixcIil9aWYoeCl0cnl7cmV0dXJuIEguYXBwbHkoZCx3LnF1ZXJ5U2VsZWN0b3JBbGwoeCkpLGR9Y2F0Y2goeSl7fWZpbmFsbHl7cnx8Yi5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKX19fXJldHVybiBpKGEucmVwbGFjZShSLFwiJDFcIiksYixkLGUpfWZ1bmN0aW9uIGhhKCl7dmFyIGE9W107ZnVuY3Rpb24gYihjLGUpe3JldHVybiBhLnB1c2goYytcIiBcIik+ZC5jYWNoZUxlbmd0aCYmZGVsZXRlIGJbYS5zaGlmdCgpXSxiW2MrXCIgXCJdPWV9cmV0dXJuIGJ9ZnVuY3Rpb24gaWEoYSl7cmV0dXJuIGFbdV09ITAsYX1mdW5jdGlvbiBqYShhKXt2YXIgYj1uLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dHJ5e3JldHVybiEhYShiKX1jYXRjaChjKXtyZXR1cm4hMX1maW5hbGx5e2IucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGIpLGI9bnVsbH19ZnVuY3Rpb24ga2EoYSxiKXt2YXIgYz1hLnNwbGl0KFwifFwiKSxlPWEubGVuZ3RoO3doaWxlKGUtLSlkLmF0dHJIYW5kbGVbY1tlXV09Yn1mdW5jdGlvbiBsYShhLGIpe3ZhciBjPWImJmEsZD1jJiYxPT09YS5ub2RlVHlwZSYmMT09PWIubm9kZVR5cGUmJih+Yi5zb3VyY2VJbmRleHx8QyktKH5hLnNvdXJjZUluZGV4fHxDKTtpZihkKXJldHVybiBkO2lmKGMpd2hpbGUoYz1jLm5leHRTaWJsaW5nKWlmKGM9PT1iKXJldHVybi0xO3JldHVybiBhPzE6LTF9ZnVuY3Rpb24gbWEoYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3ZhciBjPWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1jJiZiLnR5cGU9PT1hfX1mdW5jdGlvbiBuYShhKXtyZXR1cm4gZnVuY3Rpb24oYil7dmFyIGM9Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVybihcImlucHV0XCI9PT1jfHxcImJ1dHRvblwiPT09YykmJmIudHlwZT09PWF9fWZ1bmN0aW9uIG9hKGEpe3JldHVybiBpYShmdW5jdGlvbihiKXtyZXR1cm4gYj0rYixpYShmdW5jdGlvbihjLGQpe3ZhciBlLGY9YShbXSxjLmxlbmd0aCxiKSxnPWYubGVuZ3RoO3doaWxlKGctLSljW2U9ZltnXV0mJihjW2VdPSEoZFtlXT1jW2VdKSl9KX0pfWZ1bmN0aW9uIHBhKGEpe3JldHVybiBhJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRFbGVtZW50c0J5VGFnTmFtZSYmYX1jPWdhLnN1cHBvcnQ9e30sZj1nYS5pc1hNTD1mdW5jdGlvbihhKXt2YXIgYj1hJiYoYS5vd25lckRvY3VtZW50fHxhKS5kb2N1bWVudEVsZW1lbnQ7cmV0dXJuIGI/XCJIVE1MXCIhPT1iLm5vZGVOYW1lOiExfSxtPWdhLnNldERvY3VtZW50PWZ1bmN0aW9uKGEpe3ZhciBiLGUsZz1hP2Eub3duZXJEb2N1bWVudHx8YTp2O3JldHVybiBnIT09biYmOT09PWcubm9kZVR5cGUmJmcuZG9jdW1lbnRFbGVtZW50PyhuPWcsbz1nLmRvY3VtZW50RWxlbWVudCxlPWcuZGVmYXVsdFZpZXcsZSYmZSE9PWUudG9wJiYoZS5hZGRFdmVudExpc3RlbmVyP2UuYWRkRXZlbnRMaXN0ZW5lcihcInVubG9hZFwiLGVhLCExKTplLmF0dGFjaEV2ZW50JiZlLmF0dGFjaEV2ZW50KFwib251bmxvYWRcIixlYSkpLHA9IWYoZyksYy5hdHRyaWJ1dGVzPWphKGZ1bmN0aW9uKGEpe3JldHVybiBhLmNsYXNzTmFtZT1cImlcIiwhYS5nZXRBdHRyaWJ1dGUoXCJjbGFzc05hbWVcIil9KSxjLmdldEVsZW1lbnRzQnlUYWdOYW1lPWphKGZ1bmN0aW9uKGEpe3JldHVybiBhLmFwcGVuZENoaWxkKGcuY3JlYXRlQ29tbWVudChcIlwiKSksIWEuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpLmxlbmd0aH0pLGMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZT0kLnRlc3QoZy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKSxjLmdldEJ5SWQ9amEoZnVuY3Rpb24oYSl7cmV0dXJuIG8uYXBwZW5kQ2hpbGQoYSkuaWQ9dSwhZy5nZXRFbGVtZW50c0J5TmFtZXx8IWcuZ2V0RWxlbWVudHNCeU5hbWUodSkubGVuZ3RofSksYy5nZXRCeUlkPyhkLmZpbmQuSUQ9ZnVuY3Rpb24oYSxiKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgYi5nZXRFbGVtZW50QnlJZCYmcCl7dmFyIGM9Yi5nZXRFbGVtZW50QnlJZChhKTtyZXR1cm4gYyYmYy5wYXJlbnROb2RlP1tjXTpbXX19LGQuZmlsdGVyLklEPWZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShjYSxkYSk7cmV0dXJuIGZ1bmN0aW9uKGEpe3JldHVybiBhLmdldEF0dHJpYnV0ZShcImlkXCIpPT09Yn19KTooZGVsZXRlIGQuZmluZC5JRCxkLmZpbHRlci5JRD1mdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UoY2EsZGEpO3JldHVybiBmdW5jdGlvbihhKXt2YXIgYz1cInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRBdHRyaWJ1dGVOb2RlJiZhLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKTtyZXR1cm4gYyYmYy52YWx1ZT09PWJ9fSksZC5maW5kLlRBRz1jLmdldEVsZW1lbnRzQnlUYWdOYW1lP2Z1bmN0aW9uKGEsYil7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGIuZ2V0RWxlbWVudHNCeVRhZ05hbWU/Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShhKTpjLnFzYT9iLnF1ZXJ5U2VsZWN0b3JBbGwoYSk6dm9pZCAwfTpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9W10sZT0wLGY9Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShhKTtpZihcIipcIj09PWEpe3doaWxlKGM9ZltlKytdKTE9PT1jLm5vZGVUeXBlJiZkLnB1c2goYyk7cmV0dXJuIGR9cmV0dXJuIGZ9LGQuZmluZC5DTEFTUz1jLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJmZ1bmN0aW9uKGEsYil7cmV0dXJuIHA/Yi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGEpOnZvaWQgMH0scj1bXSxxPVtdLChjLnFzYT0kLnRlc3QoZy5xdWVyeVNlbGVjdG9yQWxsKSkmJihqYShmdW5jdGlvbihhKXtvLmFwcGVuZENoaWxkKGEpLmlubmVySFRNTD1cIjxhIGlkPSdcIit1K1wiJz48L2E+PHNlbGVjdCBpZD0nXCIrdStcIi1cXGZdJyBtc2FsbG93Y2FwdHVyZT0nJz48b3B0aW9uIHNlbGVjdGVkPScnPjwvb3B0aW9uPjwvc2VsZWN0PlwiLGEucXVlcnlTZWxlY3RvckFsbChcIlttc2FsbG93Y2FwdHVyZV49JyddXCIpLmxlbmd0aCYmcS5wdXNoKFwiWypeJF09XCIrTCtcIiooPzonJ3xcXFwiXFxcIilcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiW3NlbGVjdGVkXVwiKS5sZW5ndGh8fHEucHVzaChcIlxcXFxbXCIrTCtcIiooPzp2YWx1ZXxcIitLK1wiKVwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaWR+PVwiK3UrXCItXVwiKS5sZW5ndGh8fHEucHVzaChcIn49XCIpLGEucXVlcnlTZWxlY3RvckFsbChcIjpjaGVja2VkXCIpLmxlbmd0aHx8cS5wdXNoKFwiOmNoZWNrZWRcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiYSNcIit1K1wiKypcIikubGVuZ3RofHxxLnB1c2goXCIuIy4rWyt+XVwiKX0pLGphKGZ1bmN0aW9uKGEpe3ZhciBiPWcuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO2Iuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiaGlkZGVuXCIpLGEuYXBwZW5kQ2hpbGQoYikuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwiRFwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT1kXVwiKS5sZW5ndGgmJnEucHVzaChcIm5hbWVcIitMK1wiKlsqXiR8IX5dPz1cIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiOmVuYWJsZWRcIikubGVuZ3RofHxxLnB1c2goXCI6ZW5hYmxlZFwiLFwiOmRpc2FibGVkXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIiosOnhcIikscS5wdXNoKFwiLC4qOlwiKX0pKSwoYy5tYXRjaGVzU2VsZWN0b3I9JC50ZXN0KHM9by5tYXRjaGVzfHxvLndlYmtpdE1hdGNoZXNTZWxlY3Rvcnx8by5tb3pNYXRjaGVzU2VsZWN0b3J8fG8ub01hdGNoZXNTZWxlY3Rvcnx8by5tc01hdGNoZXNTZWxlY3RvcikpJiZqYShmdW5jdGlvbihhKXtjLmRpc2Nvbm5lY3RlZE1hdGNoPXMuY2FsbChhLFwiZGl2XCIpLHMuY2FsbChhLFwiW3MhPScnXTp4XCIpLHIucHVzaChcIiE9XCIsUCl9KSxxPXEubGVuZ3RoJiZuZXcgUmVnRXhwKHEuam9pbihcInxcIikpLHI9ci5sZW5ndGgmJm5ldyBSZWdFeHAoci5qb2luKFwifFwiKSksYj0kLnRlc3Qoby5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiksdD1ifHwkLnRlc3Qoby5jb250YWlucyk/ZnVuY3Rpb24oYSxiKXt2YXIgYz05PT09YS5ub2RlVHlwZT9hLmRvY3VtZW50RWxlbWVudDphLGQ9YiYmYi5wYXJlbnROb2RlO3JldHVybiBhPT09ZHx8ISghZHx8MSE9PWQubm9kZVR5cGV8fCEoYy5jb250YWlucz9jLmNvbnRhaW5zKGQpOmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24mJjE2JmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZCkpKX06ZnVuY3Rpb24oYSxiKXtpZihiKXdoaWxlKGI9Yi5wYXJlbnROb2RlKWlmKGI9PT1hKXJldHVybiEwO3JldHVybiExfSxCPWI/ZnVuY3Rpb24oYSxiKXtpZihhPT09YilyZXR1cm4gbD0hMCwwO3ZhciBkPSFhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uLSFiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uO3JldHVybiBkP2Q6KGQ9KGEub3duZXJEb2N1bWVudHx8YSk9PT0oYi5vd25lckRvY3VtZW50fHxiKT9hLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGIpOjEsMSZkfHwhYy5zb3J0RGV0YWNoZWQmJmIuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYSk9PT1kP2E9PT1nfHxhLm93bmVyRG9jdW1lbnQ9PT12JiZ0KHYsYSk/LTE6Yj09PWd8fGIub3duZXJEb2N1bWVudD09PXYmJnQodixiKT8xOms/SihrLGEpLUooayxiKTowOjQmZD8tMToxKX06ZnVuY3Rpb24oYSxiKXtpZihhPT09YilyZXR1cm4gbD0hMCwwO3ZhciBjLGQ9MCxlPWEucGFyZW50Tm9kZSxmPWIucGFyZW50Tm9kZSxoPVthXSxpPVtiXTtpZighZXx8IWYpcmV0dXJuIGE9PT1nPy0xOmI9PT1nPzE6ZT8tMTpmPzE6az9KKGssYSktSihrLGIpOjA7aWYoZT09PWYpcmV0dXJuIGxhKGEsYik7Yz1hO3doaWxlKGM9Yy5wYXJlbnROb2RlKWgudW5zaGlmdChjKTtjPWI7d2hpbGUoYz1jLnBhcmVudE5vZGUpaS51bnNoaWZ0KGMpO3doaWxlKGhbZF09PT1pW2RdKWQrKztyZXR1cm4gZD9sYShoW2RdLGlbZF0pOmhbZF09PT12Py0xOmlbZF09PT12PzE6MH0sZyk6bn0sZ2EubWF0Y2hlcz1mdW5jdGlvbihhLGIpe3JldHVybiBnYShhLG51bGwsbnVsbCxiKX0sZ2EubWF0Y2hlc1NlbGVjdG9yPWZ1bmN0aW9uKGEsYil7aWYoKGEub3duZXJEb2N1bWVudHx8YSkhPT1uJiZtKGEpLGI9Yi5yZXBsYWNlKFUsXCI9JyQxJ11cIiksISghYy5tYXRjaGVzU2VsZWN0b3J8fCFwfHxyJiZyLnRlc3QoYil8fHEmJnEudGVzdChiKSkpdHJ5e3ZhciBkPXMuY2FsbChhLGIpO2lmKGR8fGMuZGlzY29ubmVjdGVkTWF0Y2h8fGEuZG9jdW1lbnQmJjExIT09YS5kb2N1bWVudC5ub2RlVHlwZSlyZXR1cm4gZH1jYXRjaChlKXt9cmV0dXJuIGdhKGIsbixudWxsLFthXSkubGVuZ3RoPjB9LGdhLmNvbnRhaW5zPWZ1bmN0aW9uKGEsYil7cmV0dXJuKGEub3duZXJEb2N1bWVudHx8YSkhPT1uJiZtKGEpLHQoYSxiKX0sZ2EuYXR0cj1mdW5jdGlvbihhLGIpeyhhLm93bmVyRG9jdW1lbnR8fGEpIT09biYmbShhKTt2YXIgZT1kLmF0dHJIYW5kbGVbYi50b0xvd2VyQ2FzZSgpXSxmPWUmJkQuY2FsbChkLmF0dHJIYW5kbGUsYi50b0xvd2VyQ2FzZSgpKT9lKGEsYiwhcCk6dm9pZCAwO3JldHVybiB2b2lkIDAhPT1mP2Y6Yy5hdHRyaWJ1dGVzfHwhcD9hLmdldEF0dHJpYnV0ZShiKTooZj1hLmdldEF0dHJpYnV0ZU5vZGUoYikpJiZmLnNwZWNpZmllZD9mLnZhbHVlOm51bGx9LGdhLmVycm9yPWZ1bmN0aW9uKGEpe3Rocm93IG5ldyBFcnJvcihcIlN5bnRheCBlcnJvciwgdW5yZWNvZ25pemVkIGV4cHJlc3Npb246IFwiK2EpfSxnYS51bmlxdWVTb3J0PWZ1bmN0aW9uKGEpe3ZhciBiLGQ9W10sZT0wLGY9MDtpZihsPSFjLmRldGVjdER1cGxpY2F0ZXMsaz0hYy5zb3J0U3RhYmxlJiZhLnNsaWNlKDApLGEuc29ydChCKSxsKXt3aGlsZShiPWFbZisrXSliPT09YVtmXSYmKGU9ZC5wdXNoKGYpKTt3aGlsZShlLS0pYS5zcGxpY2UoZFtlXSwxKX1yZXR1cm4gaz1udWxsLGF9LGU9Z2EuZ2V0VGV4dD1mdW5jdGlvbihhKXt2YXIgYixjPVwiXCIsZD0wLGY9YS5ub2RlVHlwZTtpZihmKXtpZigxPT09Znx8OT09PWZ8fDExPT09Zil7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEudGV4dENvbnRlbnQpcmV0dXJuIGEudGV4dENvbnRlbnQ7Zm9yKGE9YS5maXJzdENoaWxkO2E7YT1hLm5leHRTaWJsaW5nKWMrPWUoYSl9ZWxzZSBpZigzPT09Znx8ND09PWYpcmV0dXJuIGEubm9kZVZhbHVlfWVsc2Ugd2hpbGUoYj1hW2QrK10pYys9ZShiKTtyZXR1cm4gY30sZD1nYS5zZWxlY3RvcnM9e2NhY2hlTGVuZ3RoOjUwLGNyZWF0ZVBzZXVkbzppYSxtYXRjaDpYLGF0dHJIYW5kbGU6e30sZmluZDp7fSxyZWxhdGl2ZTp7XCI+XCI6e2RpcjpcInBhcmVudE5vZGVcIixmaXJzdDohMH0sXCIgXCI6e2RpcjpcInBhcmVudE5vZGVcIn0sXCIrXCI6e2RpcjpcInByZXZpb3VzU2libGluZ1wiLGZpcnN0OiEwfSxcIn5cIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCJ9fSxwcmVGaWx0ZXI6e0FUVFI6ZnVuY3Rpb24oYSl7cmV0dXJuIGFbMV09YVsxXS5yZXBsYWNlKGNhLGRhKSxhWzNdPShhWzNdfHxhWzRdfHxhWzVdfHxcIlwiKS5yZXBsYWNlKGNhLGRhKSxcIn49XCI9PT1hWzJdJiYoYVszXT1cIiBcIithWzNdK1wiIFwiKSxhLnNsaWNlKDAsNCl9LENISUxEOmZ1bmN0aW9uKGEpe3JldHVybiBhWzFdPWFbMV0udG9Mb3dlckNhc2UoKSxcIm50aFwiPT09YVsxXS5zbGljZSgwLDMpPyhhWzNdfHxnYS5lcnJvcihhWzBdKSxhWzRdPSsoYVs0XT9hWzVdKyhhWzZdfHwxKToyKihcImV2ZW5cIj09PWFbM118fFwib2RkXCI9PT1hWzNdKSksYVs1XT0rKGFbN10rYVs4XXx8XCJvZGRcIj09PWFbM10pKTphWzNdJiZnYS5lcnJvcihhWzBdKSxhfSxQU0VVRE86ZnVuY3Rpb24oYSl7dmFyIGIsYz0hYVs2XSYmYVsyXTtyZXR1cm4gWC5DSElMRC50ZXN0KGFbMF0pP251bGw6KGFbM10/YVsyXT1hWzRdfHxhWzVdfHxcIlwiOmMmJlYudGVzdChjKSYmKGI9ZyhjLCEwKSkmJihiPWMuaW5kZXhPZihcIilcIixjLmxlbmd0aC1iKS1jLmxlbmd0aCkmJihhWzBdPWFbMF0uc2xpY2UoMCxiKSxhWzJdPWMuc2xpY2UoMCxiKSksYS5zbGljZSgwLDMpKX19LGZpbHRlcjp7VEFHOmZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShjYSxkYSkudG9Mb3dlckNhc2UoKTtyZXR1cm5cIipcIj09PWE/ZnVuY3Rpb24oKXtyZXR1cm4hMH06ZnVuY3Rpb24oYSl7cmV0dXJuIGEubm9kZU5hbWUmJmEubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PWJ9fSxDTEFTUzpmdW5jdGlvbihhKXt2YXIgYj15W2ErXCIgXCJdO3JldHVybiBifHwoYj1uZXcgUmVnRXhwKFwiKF58XCIrTCtcIilcIithK1wiKFwiK0wrXCJ8JClcIikpJiZ5KGEsZnVuY3Rpb24oYSl7cmV0dXJuIGIudGVzdChcInN0cmluZ1wiPT10eXBlb2YgYS5jbGFzc05hbWUmJmEuY2xhc3NOYW1lfHxcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRBdHRyaWJ1dGUmJmEuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIpfSl9LEFUVFI6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBmdW5jdGlvbihkKXt2YXIgZT1nYS5hdHRyKGQsYSk7cmV0dXJuIG51bGw9PWU/XCIhPVwiPT09YjpiPyhlKz1cIlwiLFwiPVwiPT09Yj9lPT09YzpcIiE9XCI9PT1iP2UhPT1jOlwiXj1cIj09PWI/YyYmMD09PWUuaW5kZXhPZihjKTpcIio9XCI9PT1iP2MmJmUuaW5kZXhPZihjKT4tMTpcIiQ9XCI9PT1iP2MmJmUuc2xpY2UoLWMubGVuZ3RoKT09PWM6XCJ+PVwiPT09Yj8oXCIgXCIrZS5yZXBsYWNlKFEsXCIgXCIpK1wiIFwiKS5pbmRleE9mKGMpPi0xOlwifD1cIj09PWI/ZT09PWN8fGUuc2xpY2UoMCxjLmxlbmd0aCsxKT09PWMrXCItXCI6ITEpOiEwfX0sQ0hJTEQ6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZj1cIm50aFwiIT09YS5zbGljZSgwLDMpLGc9XCJsYXN0XCIhPT1hLnNsaWNlKC00KSxoPVwib2YtdHlwZVwiPT09YjtyZXR1cm4gMT09PWQmJjA9PT1lP2Z1bmN0aW9uKGEpe3JldHVybiEhYS5wYXJlbnROb2RlfTpmdW5jdGlvbihiLGMsaSl7dmFyIGosayxsLG0sbixvLHA9ZiE9PWc/XCJuZXh0U2libGluZ1wiOlwicHJldmlvdXNTaWJsaW5nXCIscT1iLnBhcmVudE5vZGUscj1oJiZiLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkscz0haSYmIWg7aWYocSl7aWYoZil7d2hpbGUocCl7bD1iO3doaWxlKGw9bFtwXSlpZihoP2wubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXI6MT09PWwubm9kZVR5cGUpcmV0dXJuITE7bz1wPVwib25seVwiPT09YSYmIW8mJlwibmV4dFNpYmxpbmdcIn1yZXR1cm4hMH1pZihvPVtnP3EuZmlyc3RDaGlsZDpxLmxhc3RDaGlsZF0sZyYmcyl7az1xW3VdfHwocVt1XT17fSksaj1rW2FdfHxbXSxuPWpbMF09PT13JiZqWzFdLG09alswXT09PXcmJmpbMl0sbD1uJiZxLmNoaWxkTm9kZXNbbl07d2hpbGUobD0rK24mJmwmJmxbcF18fChtPW49MCl8fG8ucG9wKCkpaWYoMT09PWwubm9kZVR5cGUmJisrbSYmbD09PWIpe2tbYV09W3csbixtXTticmVha319ZWxzZSBpZihzJiYoaj0oYlt1XXx8KGJbdV09e30pKVthXSkmJmpbMF09PT13KW09alsxXTtlbHNlIHdoaWxlKGw9KytuJiZsJiZsW3BdfHwobT1uPTApfHxvLnBvcCgpKWlmKChoP2wubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXI6MT09PWwubm9kZVR5cGUpJiYrK20mJihzJiYoKGxbdV18fChsW3VdPXt9KSlbYV09W3csbV0pLGw9PT1iKSlicmVhaztyZXR1cm4gbS09ZSxtPT09ZHx8bSVkPT09MCYmbS9kPj0wfX19LFBTRVVETzpmdW5jdGlvbihhLGIpe3ZhciBjLGU9ZC5wc2V1ZG9zW2FdfHxkLnNldEZpbHRlcnNbYS50b0xvd2VyQ2FzZSgpXXx8Z2EuZXJyb3IoXCJ1bnN1cHBvcnRlZCBwc2V1ZG86IFwiK2EpO3JldHVybiBlW3VdP2UoYik6ZS5sZW5ndGg+MT8oYz1bYSxhLFwiXCIsYl0sZC5zZXRGaWx0ZXJzLmhhc093blByb3BlcnR5KGEudG9Mb3dlckNhc2UoKSk/aWEoZnVuY3Rpb24oYSxjKXt2YXIgZCxmPWUoYSxiKSxnPWYubGVuZ3RoO3doaWxlKGctLSlkPUooYSxmW2ddKSxhW2RdPSEoY1tkXT1mW2ddKX0pOmZ1bmN0aW9uKGEpe3JldHVybiBlKGEsMCxjKX0pOmV9fSxwc2V1ZG9zOntub3Q6aWEoZnVuY3Rpb24oYSl7dmFyIGI9W10sYz1bXSxkPWgoYS5yZXBsYWNlKFIsXCIkMVwiKSk7cmV0dXJuIGRbdV0/aWEoZnVuY3Rpb24oYSxiLGMsZSl7dmFyIGYsZz1kKGEsbnVsbCxlLFtdKSxoPWEubGVuZ3RoO3doaWxlKGgtLSkoZj1nW2hdKSYmKGFbaF09IShiW2hdPWYpKX0pOmZ1bmN0aW9uKGEsZSxmKXtyZXR1cm4gYlswXT1hLGQoYixudWxsLGYsYyksYlswXT1udWxsLCFjLnBvcCgpfX0pLGhhczppYShmdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oYil7cmV0dXJuIGdhKGEsYikubGVuZ3RoPjB9fSksY29udGFpbnM6aWEoZnVuY3Rpb24oYSl7cmV0dXJuIGE9YS5yZXBsYWNlKGNhLGRhKSxmdW5jdGlvbihiKXtyZXR1cm4oYi50ZXh0Q29udGVudHx8Yi5pbm5lclRleHR8fGUoYikpLmluZGV4T2YoYSk+LTF9fSksbGFuZzppYShmdW5jdGlvbihhKXtyZXR1cm4gVy50ZXN0KGF8fFwiXCIpfHxnYS5lcnJvcihcInVuc3VwcG9ydGVkIGxhbmc6IFwiK2EpLGE9YS5yZXBsYWNlKGNhLGRhKS50b0xvd2VyQ2FzZSgpLGZ1bmN0aW9uKGIpe3ZhciBjO2RvIGlmKGM9cD9iLmxhbmc6Yi5nZXRBdHRyaWJ1dGUoXCJ4bWw6bGFuZ1wiKXx8Yi5nZXRBdHRyaWJ1dGUoXCJsYW5nXCIpKXJldHVybiBjPWMudG9Mb3dlckNhc2UoKSxjPT09YXx8MD09PWMuaW5kZXhPZihhK1wiLVwiKTt3aGlsZSgoYj1iLnBhcmVudE5vZGUpJiYxPT09Yi5ub2RlVHlwZSk7cmV0dXJuITF9fSksdGFyZ2V0OmZ1bmN0aW9uKGIpe3ZhciBjPWEubG9jYXRpb24mJmEubG9jYXRpb24uaGFzaDtyZXR1cm4gYyYmYy5zbGljZSgxKT09PWIuaWR9LHJvb3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1vfSxmb2N1czpmdW5jdGlvbihhKXtyZXR1cm4gYT09PW4uYWN0aXZlRWxlbWVudCYmKCFuLmhhc0ZvY3VzfHxuLmhhc0ZvY3VzKCkpJiYhIShhLnR5cGV8fGEuaHJlZnx8fmEudGFiSW5kZXgpfSxlbmFibGVkOmZ1bmN0aW9uKGEpe3JldHVybiBhLmRpc2FibGVkPT09ITF9LGRpc2FibGVkOmZ1bmN0aW9uKGEpe3JldHVybiBhLmRpc2FibGVkPT09ITB9LGNoZWNrZWQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PWImJiEhYS5jaGVja2VkfHxcIm9wdGlvblwiPT09YiYmISFhLnNlbGVjdGVkfSxzZWxlY3RlZDpmdW5jdGlvbihhKXtyZXR1cm4gYS5wYXJlbnROb2RlJiZhLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCxhLnNlbGVjdGVkPT09ITB9LGVtcHR5OmZ1bmN0aW9uKGEpe2ZvcihhPWEuZmlyc3RDaGlsZDthO2E9YS5uZXh0U2libGluZylpZihhLm5vZGVUeXBlPDYpcmV0dXJuITE7cmV0dXJuITB9LHBhcmVudDpmdW5jdGlvbihhKXtyZXR1cm4hZC5wc2V1ZG9zLmVtcHR5KGEpfSxoZWFkZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIFoudGVzdChhLm5vZGVOYW1lKX0saW5wdXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIFkudGVzdChhLm5vZGVOYW1lKX0sYnV0dG9uOmZ1bmN0aW9uKGEpe3ZhciBiPWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1iJiZcImJ1dHRvblwiPT09YS50eXBlfHxcImJ1dHRvblwiPT09Yn0sdGV4dDpmdW5jdGlvbihhKXt2YXIgYjtyZXR1cm5cImlucHV0XCI9PT1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkmJlwidGV4dFwiPT09YS50eXBlJiYobnVsbD09KGI9YS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKXx8XCJ0ZXh0XCI9PT1iLnRvTG93ZXJDYXNlKCkpfSxmaXJzdDpvYShmdW5jdGlvbigpe3JldHVyblswXX0pLGxhc3Q6b2EoZnVuY3Rpb24oYSxiKXtyZXR1cm5bYi0xXX0pLGVxOm9hKGZ1bmN0aW9uKGEsYixjKXtyZXR1cm5bMD5jP2MrYjpjXX0pLGV2ZW46b2EoZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MDtiPmM7Yys9MilhLnB1c2goYyk7cmV0dXJuIGF9KSxvZGQ6b2EoZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MTtiPmM7Yys9MilhLnB1c2goYyk7cmV0dXJuIGF9KSxsdDpvYShmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkPTA+Yz9jK2I6YzstLWQ+PTA7KWEucHVzaChkKTtyZXR1cm4gYX0pLGd0Om9hKGZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQ9MD5jP2MrYjpjOysrZDxiOylhLnB1c2goZCk7cmV0dXJuIGF9KX19LGQucHNldWRvcy5udGg9ZC5wc2V1ZG9zLmVxO2ZvcihiIGlue3JhZGlvOiEwLGNoZWNrYm94OiEwLGZpbGU6ITAscGFzc3dvcmQ6ITAsaW1hZ2U6ITB9KWQucHNldWRvc1tiXT1tYShiKTtmb3IoYiBpbntzdWJtaXQ6ITAscmVzZXQ6ITB9KWQucHNldWRvc1tiXT1uYShiKTtmdW5jdGlvbiBxYSgpe31xYS5wcm90b3R5cGU9ZC5maWx0ZXJzPWQucHNldWRvcyxkLnNldEZpbHRlcnM9bmV3IHFhLGc9Z2EudG9rZW5pemU9ZnVuY3Rpb24oYSxiKXt2YXIgYyxlLGYsZyxoLGksaixrPXpbYStcIiBcIl07aWYoaylyZXR1cm4gYj8wOmsuc2xpY2UoMCk7aD1hLGk9W10saj1kLnByZUZpbHRlcjt3aGlsZShoKXsoIWN8fChlPVMuZXhlYyhoKSkpJiYoZSYmKGg9aC5zbGljZShlWzBdLmxlbmd0aCl8fGgpLGkucHVzaChmPVtdKSksYz0hMSwoZT1ULmV4ZWMoaCkpJiYoYz1lLnNoaWZ0KCksZi5wdXNoKHt2YWx1ZTpjLHR5cGU6ZVswXS5yZXBsYWNlKFIsXCIgXCIpfSksaD1oLnNsaWNlKGMubGVuZ3RoKSk7Zm9yKGcgaW4gZC5maWx0ZXIpIShlPVhbZ10uZXhlYyhoKSl8fGpbZ10mJiEoZT1qW2ddKGUpKXx8KGM9ZS5zaGlmdCgpLGYucHVzaCh7dmFsdWU6Yyx0eXBlOmcsbWF0Y2hlczplfSksaD1oLnNsaWNlKGMubGVuZ3RoKSk7aWYoIWMpYnJlYWt9cmV0dXJuIGI/aC5sZW5ndGg6aD9nYS5lcnJvcihhKTp6KGEsaSkuc2xpY2UoMCl9O2Z1bmN0aW9uIHJhKGEpe2Zvcih2YXIgYj0wLGM9YS5sZW5ndGgsZD1cIlwiO2M+YjtiKyspZCs9YVtiXS52YWx1ZTtyZXR1cm4gZH1mdW5jdGlvbiBzYShhLGIsYyl7dmFyIGQ9Yi5kaXIsZT1jJiZcInBhcmVudE5vZGVcIj09PWQsZj14Kys7cmV0dXJuIGIuZmlyc3Q/ZnVuY3Rpb24oYixjLGYpe3doaWxlKGI9YltkXSlpZigxPT09Yi5ub2RlVHlwZXx8ZSlyZXR1cm4gYShiLGMsZil9OmZ1bmN0aW9uKGIsYyxnKXt2YXIgaCxpLGo9W3csZl07aWYoZyl7d2hpbGUoYj1iW2RdKWlmKCgxPT09Yi5ub2RlVHlwZXx8ZSkmJmEoYixjLGcpKXJldHVybiEwfWVsc2Ugd2hpbGUoYj1iW2RdKWlmKDE9PT1iLm5vZGVUeXBlfHxlKXtpZihpPWJbdV18fChiW3VdPXt9KSwoaD1pW2RdKSYmaFswXT09PXcmJmhbMV09PT1mKXJldHVybiBqWzJdPWhbMl07aWYoaVtkXT1qLGpbMl09YShiLGMsZykpcmV0dXJuITB9fX1mdW5jdGlvbiB0YShhKXtyZXR1cm4gYS5sZW5ndGg+MT9mdW5jdGlvbihiLGMsZCl7dmFyIGU9YS5sZW5ndGg7d2hpbGUoZS0tKWlmKCFhW2VdKGIsYyxkKSlyZXR1cm4hMTtyZXR1cm4hMH06YVswXX1mdW5jdGlvbiB1YShhLGIsYyl7Zm9yKHZhciBkPTAsZT1iLmxlbmd0aDtlPmQ7ZCsrKWdhKGEsYltkXSxjKTtyZXR1cm4gY31mdW5jdGlvbiB2YShhLGIsYyxkLGUpe2Zvcih2YXIgZixnPVtdLGg9MCxpPWEubGVuZ3RoLGo9bnVsbCE9YjtpPmg7aCsrKShmPWFbaF0pJiYoIWN8fGMoZixkLGUpKSYmKGcucHVzaChmKSxqJiZiLnB1c2goaCkpO3JldHVybiBnfWZ1bmN0aW9uIHdhKGEsYixjLGQsZSxmKXtyZXR1cm4gZCYmIWRbdV0mJihkPXdhKGQpKSxlJiYhZVt1XSYmKGU9d2EoZSxmKSksaWEoZnVuY3Rpb24oZixnLGgsaSl7dmFyIGosayxsLG09W10sbj1bXSxvPWcubGVuZ3RoLHA9Znx8dWEoYnx8XCIqXCIsaC5ub2RlVHlwZT9baF06aCxbXSkscT0hYXx8IWYmJmI/cDp2YShwLG0sYSxoLGkpLHI9Yz9lfHwoZj9hOm98fGQpP1tdOmc6cTtpZihjJiZjKHEscixoLGkpLGQpe2o9dmEocixuKSxkKGosW10saCxpKSxrPWoubGVuZ3RoO3doaWxlKGstLSkobD1qW2tdKSYmKHJbbltrXV09IShxW25ba11dPWwpKX1pZihmKXtpZihlfHxhKXtpZihlKXtqPVtdLGs9ci5sZW5ndGg7d2hpbGUoay0tKShsPXJba10pJiZqLnB1c2gocVtrXT1sKTtlKG51bGwscj1bXSxqLGkpfWs9ci5sZW5ndGg7d2hpbGUoay0tKShsPXJba10pJiYoaj1lP0ooZixsKTptW2tdKT4tMSYmKGZbal09IShnW2pdPWwpKX19ZWxzZSByPXZhKHI9PT1nP3Iuc3BsaWNlKG8sci5sZW5ndGgpOnIpLGU/ZShudWxsLGcscixpKTpILmFwcGx5KGcscil9KX1mdW5jdGlvbiB4YShhKXtmb3IodmFyIGIsYyxlLGY9YS5sZW5ndGgsZz1kLnJlbGF0aXZlW2FbMF0udHlwZV0saD1nfHxkLnJlbGF0aXZlW1wiIFwiXSxpPWc/MTowLGs9c2EoZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1ifSxoLCEwKSxsPXNhKGZ1bmN0aW9uKGEpe3JldHVybiBKKGIsYSk+LTF9LGgsITApLG09W2Z1bmN0aW9uKGEsYyxkKXt2YXIgZT0hZyYmKGR8fGMhPT1qKXx8KChiPWMpLm5vZGVUeXBlP2soYSxjLGQpOmwoYSxjLGQpKTtyZXR1cm4gYj1udWxsLGV9XTtmPmk7aSsrKWlmKGM9ZC5yZWxhdGl2ZVthW2ldLnR5cGVdKW09W3NhKHRhKG0pLGMpXTtlbHNle2lmKGM9ZC5maWx0ZXJbYVtpXS50eXBlXS5hcHBseShudWxsLGFbaV0ubWF0Y2hlcyksY1t1XSl7Zm9yKGU9KytpO2Y+ZTtlKyspaWYoZC5yZWxhdGl2ZVthW2VdLnR5cGVdKWJyZWFrO3JldHVybiB3YShpPjEmJnRhKG0pLGk+MSYmcmEoYS5zbGljZSgwLGktMSkuY29uY2F0KHt2YWx1ZTpcIiBcIj09PWFbaS0yXS50eXBlP1wiKlwiOlwiXCJ9KSkucmVwbGFjZShSLFwiJDFcIiksYyxlPmkmJnhhKGEuc2xpY2UoaSxlKSksZj5lJiZ4YShhPWEuc2xpY2UoZSkpLGY+ZSYmcmEoYSkpfW0ucHVzaChjKX1yZXR1cm4gdGEobSl9ZnVuY3Rpb24geWEoYSxiKXt2YXIgYz1iLmxlbmd0aD4wLGU9YS5sZW5ndGg+MCxmPWZ1bmN0aW9uKGYsZyxoLGksayl7dmFyIGwsbSxvLHA9MCxxPVwiMFwiLHI9ZiYmW10scz1bXSx0PWosdT1mfHxlJiZkLmZpbmQuVEFHKFwiKlwiLGspLHY9dys9bnVsbD09dD8xOk1hdGgucmFuZG9tKCl8fC4xLHg9dS5sZW5ndGg7Zm9yKGsmJihqPWchPT1uJiZnKTtxIT09eCYmbnVsbCE9KGw9dVtxXSk7cSsrKXtpZihlJiZsKXttPTA7d2hpbGUobz1hW20rK10paWYobyhsLGcsaCkpe2kucHVzaChsKTticmVha31rJiYodz12KX1jJiYoKGw9IW8mJmwpJiZwLS0sZiYmci5wdXNoKGwpKX1pZihwKz1xLGMmJnEhPT1wKXttPTA7d2hpbGUobz1iW20rK10pbyhyLHMsZyxoKTtpZihmKXtpZihwPjApd2hpbGUocS0tKXJbcV18fHNbcV18fChzW3FdPUYuY2FsbChpKSk7cz12YShzKX1ILmFwcGx5KGkscyksayYmIWYmJnMubGVuZ3RoPjAmJnArYi5sZW5ndGg+MSYmZ2EudW5pcXVlU29ydChpKX1yZXR1cm4gayYmKHc9dixqPXQpLHJ9O3JldHVybiBjP2lhKGYpOmZ9cmV0dXJuIGg9Z2EuY29tcGlsZT1mdW5jdGlvbihhLGIpe3ZhciBjLGQ9W10sZT1bXSxmPUFbYStcIiBcIl07aWYoIWYpe2J8fChiPWcoYSkpLGM9Yi5sZW5ndGg7d2hpbGUoYy0tKWY9eGEoYltjXSksZlt1XT9kLnB1c2goZik6ZS5wdXNoKGYpO2Y9QShhLHlhKGUsZCkpLGYuc2VsZWN0b3I9YX1yZXR1cm4gZn0saT1nYS5zZWxlY3Q9ZnVuY3Rpb24oYSxiLGUsZil7dmFyIGksaixrLGwsbSxuPVwiZnVuY3Rpb25cIj09dHlwZW9mIGEmJmEsbz0hZiYmZyhhPW4uc2VsZWN0b3J8fGEpO2lmKGU9ZXx8W10sMT09PW8ubGVuZ3RoKXtpZihqPW9bMF09b1swXS5zbGljZSgwKSxqLmxlbmd0aD4yJiZcIklEXCI9PT0oaz1qWzBdKS50eXBlJiZjLmdldEJ5SWQmJjk9PT1iLm5vZGVUeXBlJiZwJiZkLnJlbGF0aXZlW2pbMV0udHlwZV0pe2lmKGI9KGQuZmluZC5JRChrLm1hdGNoZXNbMF0ucmVwbGFjZShjYSxkYSksYil8fFtdKVswXSwhYilyZXR1cm4gZTtuJiYoYj1iLnBhcmVudE5vZGUpLGE9YS5zbGljZShqLnNoaWZ0KCkudmFsdWUubGVuZ3RoKX1pPVgubmVlZHNDb250ZXh0LnRlc3QoYSk/MDpqLmxlbmd0aDt3aGlsZShpLS0pe2lmKGs9altpXSxkLnJlbGF0aXZlW2w9ay50eXBlXSlicmVhaztpZigobT1kLmZpbmRbbF0pJiYoZj1tKGsubWF0Y2hlc1swXS5yZXBsYWNlKGNhLGRhKSxhYS50ZXN0KGpbMF0udHlwZSkmJnBhKGIucGFyZW50Tm9kZSl8fGIpKSl7aWYoai5zcGxpY2UoaSwxKSxhPWYubGVuZ3RoJiZyYShqKSwhYSlyZXR1cm4gSC5hcHBseShlLGYpLGU7YnJlYWt9fX1yZXR1cm4obnx8aChhLG8pKShmLGIsIXAsZSxhYS50ZXN0KGEpJiZwYShiLnBhcmVudE5vZGUpfHxiKSxlfSxjLnNvcnRTdGFibGU9dS5zcGxpdChcIlwiKS5zb3J0KEIpLmpvaW4oXCJcIik9PT11LGMuZGV0ZWN0RHVwbGljYXRlcz0hIWwsbSgpLGMuc29ydERldGFjaGVkPWphKGZ1bmN0aW9uKGEpe3JldHVybiAxJmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24obi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKX0pLGphKGZ1bmN0aW9uKGEpe3JldHVybiBhLmlubmVySFRNTD1cIjxhIGhyZWY9JyMnPjwvYT5cIixcIiNcIj09PWEuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpfSl8fGthKFwidHlwZXxocmVmfGhlaWdodHx3aWR0aFwiLGZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gYz92b2lkIDA6YS5nZXRBdHRyaWJ1dGUoYixcInR5cGVcIj09PWIudG9Mb3dlckNhc2UoKT8xOjIpfSksYy5hdHRyaWJ1dGVzJiZqYShmdW5jdGlvbihhKXtyZXR1cm4gYS5pbm5lckhUTUw9XCI8aW5wdXQvPlwiLGEuZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiXCIpLFwiXCI9PT1hLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwidmFsdWVcIil9KXx8a2EoXCJ2YWx1ZVwiLGZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gY3x8XCJpbnB1dFwiIT09YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpP3ZvaWQgMDphLmRlZmF1bHRWYWx1ZX0pLGphKGZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpfSl8fGthKEssZnVuY3Rpb24oYSxiLGMpe3ZhciBkO3JldHVybiBjP3ZvaWQgMDphW2JdPT09ITA/Yi50b0xvd2VyQ2FzZSgpOihkPWEuZ2V0QXR0cmlidXRlTm9kZShiKSkmJmQuc3BlY2lmaWVkP2QudmFsdWU6bnVsbH0pLGdhfShhKTttLmZpbmQ9cyxtLmV4cHI9cy5zZWxlY3RvcnMsbS5leHByW1wiOlwiXT1tLmV4cHIucHNldWRvcyxtLnVuaXF1ZT1zLnVuaXF1ZVNvcnQsbS50ZXh0PXMuZ2V0VGV4dCxtLmlzWE1MRG9jPXMuaXNYTUwsbS5jb250YWlucz1zLmNvbnRhaW5zO3ZhciB0PW0uZXhwci5tYXRjaC5uZWVkc0NvbnRleHQsdT0vXjwoXFx3KylcXHMqXFwvPz4oPzo8XFwvXFwxPnwpJC8sdj0vXi5bXjojXFxbXFwuLF0qJC87ZnVuY3Rpb24gdyhhLGIsYyl7aWYobS5pc0Z1bmN0aW9uKGIpKXJldHVybiBtLmdyZXAoYSxmdW5jdGlvbihhLGQpe3JldHVybiEhYi5jYWxsKGEsZCxhKSE9PWN9KTtpZihiLm5vZGVUeXBlKXJldHVybiBtLmdyZXAoYSxmdW5jdGlvbihhKXtyZXR1cm4gYT09PWIhPT1jfSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGIpe2lmKHYudGVzdChiKSlyZXR1cm4gbS5maWx0ZXIoYixhLGMpO2I9bS5maWx0ZXIoYixhKX1yZXR1cm4gbS5ncmVwKGEsZnVuY3Rpb24oYSl7cmV0dXJuIG0uaW5BcnJheShhLGIpPj0wIT09Y30pfW0uZmlsdGVyPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1iWzBdO3JldHVybiBjJiYoYT1cIjpub3QoXCIrYStcIilcIiksMT09PWIubGVuZ3RoJiYxPT09ZC5ub2RlVHlwZT9tLmZpbmQubWF0Y2hlc1NlbGVjdG9yKGQsYSk/W2RdOltdOm0uZmluZC5tYXRjaGVzKGEsbS5ncmVwKGIsZnVuY3Rpb24oYSl7cmV0dXJuIDE9PT1hLm5vZGVUeXBlfSkpfSxtLmZuLmV4dGVuZCh7ZmluZDpmdW5jdGlvbihhKXt2YXIgYixjPVtdLGQ9dGhpcyxlPWQubGVuZ3RoO2lmKFwic3RyaW5nXCIhPXR5cGVvZiBhKXJldHVybiB0aGlzLnB1c2hTdGFjayhtKGEpLmZpbHRlcihmdW5jdGlvbigpe2ZvcihiPTA7ZT5iO2IrKylpZihtLmNvbnRhaW5zKGRbYl0sdGhpcykpcmV0dXJuITB9KSk7Zm9yKGI9MDtlPmI7YisrKW0uZmluZChhLGRbYl0sYyk7cmV0dXJuIGM9dGhpcy5wdXNoU3RhY2soZT4xP20udW5pcXVlKGMpOmMpLGMuc2VsZWN0b3I9dGhpcy5zZWxlY3Rvcj90aGlzLnNlbGVjdG9yK1wiIFwiK2E6YSxjfSxmaWx0ZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKHcodGhpcyxhfHxbXSwhMSkpfSxub3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKHcodGhpcyxhfHxbXSwhMCkpfSxpczpmdW5jdGlvbihhKXtyZXR1cm4hIXcodGhpcyxcInN0cmluZ1wiPT10eXBlb2YgYSYmdC50ZXN0KGEpP20oYSk6YXx8W10sITEpLmxlbmd0aH19KTt2YXIgeCx5PWEuZG9jdW1lbnQsej0vXig/OlxccyooPFtcXHdcXFddKz4pW14+XSp8IyhbXFx3LV0qKSkkLyxBPW0uZm4uaW5pdD1mdW5jdGlvbihhLGIpe3ZhciBjLGQ7aWYoIWEpcmV0dXJuIHRoaXM7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEpe2lmKGM9XCI8XCI9PT1hLmNoYXJBdCgwKSYmXCI+XCI9PT1hLmNoYXJBdChhLmxlbmd0aC0xKSYmYS5sZW5ndGg+PTM/W251bGwsYSxudWxsXTp6LmV4ZWMoYSksIWN8fCFjWzFdJiZiKXJldHVybiFifHxiLmpxdWVyeT8oYnx8eCkuZmluZChhKTp0aGlzLmNvbnN0cnVjdG9yKGIpLmZpbmQoYSk7aWYoY1sxXSl7aWYoYj1iIGluc3RhbmNlb2YgbT9iWzBdOmIsbS5tZXJnZSh0aGlzLG0ucGFyc2VIVE1MKGNbMV0sYiYmYi5ub2RlVHlwZT9iLm93bmVyRG9jdW1lbnR8fGI6eSwhMCkpLHUudGVzdChjWzFdKSYmbS5pc1BsYWluT2JqZWN0KGIpKWZvcihjIGluIGIpbS5pc0Z1bmN0aW9uKHRoaXNbY10pP3RoaXNbY10oYltjXSk6dGhpcy5hdHRyKGMsYltjXSk7cmV0dXJuIHRoaXN9aWYoZD15LmdldEVsZW1lbnRCeUlkKGNbMl0pLGQmJmQucGFyZW50Tm9kZSl7aWYoZC5pZCE9PWNbMl0pcmV0dXJuIHguZmluZChhKTt0aGlzLmxlbmd0aD0xLHRoaXNbMF09ZH1yZXR1cm4gdGhpcy5jb250ZXh0PXksdGhpcy5zZWxlY3Rvcj1hLHRoaXN9cmV0dXJuIGEubm9kZVR5cGU/KHRoaXMuY29udGV4dD10aGlzWzBdPWEsdGhpcy5sZW5ndGg9MSx0aGlzKTptLmlzRnVuY3Rpb24oYSk/XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHgucmVhZHk/eC5yZWFkeShhKTphKG0pOih2b2lkIDAhPT1hLnNlbGVjdG9yJiYodGhpcy5zZWxlY3Rvcj1hLnNlbGVjdG9yLHRoaXMuY29udGV4dD1hLmNvbnRleHQpLG0ubWFrZUFycmF5KGEsdGhpcykpfTtBLnByb3RvdHlwZT1tLmZuLHg9bSh5KTt2YXIgQj0vXig/OnBhcmVudHN8cHJldig/OlVudGlsfEFsbCkpLyxDPXtjaGlsZHJlbjohMCxjb250ZW50czohMCxuZXh0OiEwLHByZXY6ITB9O20uZXh0ZW5kKHtkaXI6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPVtdLGU9YVtiXTt3aGlsZShlJiY5IT09ZS5ub2RlVHlwZSYmKHZvaWQgMD09PWN8fDEhPT1lLm5vZGVUeXBlfHwhbShlKS5pcyhjKSkpMT09PWUubm9kZVR5cGUmJmQucHVzaChlKSxlPWVbYl07cmV0dXJuIGR9LHNpYmxpbmc6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9W107YTthPWEubmV4dFNpYmxpbmcpMT09PWEubm9kZVR5cGUmJmEhPT1iJiZjLnB1c2goYSk7cmV0dXJuIGN9fSksbS5mbi5leHRlbmQoe2hhczpmdW5jdGlvbihhKXt2YXIgYixjPW0oYSx0aGlzKSxkPWMubGVuZ3RoO3JldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbigpe2ZvcihiPTA7ZD5iO2IrKylpZihtLmNvbnRhaW5zKHRoaXMsY1tiXSkpcmV0dXJuITB9KX0sY2xvc2VzdDpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYyxkPTAsZT10aGlzLmxlbmd0aCxmPVtdLGc9dC50ZXN0KGEpfHxcInN0cmluZ1wiIT10eXBlb2YgYT9tKGEsYnx8dGhpcy5jb250ZXh0KTowO2U+ZDtkKyspZm9yKGM9dGhpc1tkXTtjJiZjIT09YjtjPWMucGFyZW50Tm9kZSlpZihjLm5vZGVUeXBlPDExJiYoZz9nLmluZGV4KGMpPi0xOjE9PT1jLm5vZGVUeXBlJiZtLmZpbmQubWF0Y2hlc1NlbGVjdG9yKGMsYSkpKXtmLnB1c2goYyk7YnJlYWt9cmV0dXJuIHRoaXMucHVzaFN0YWNrKGYubGVuZ3RoPjE/bS51bmlxdWUoZik6Zil9LGluZGV4OmZ1bmN0aW9uKGEpe3JldHVybiBhP1wic3RyaW5nXCI9PXR5cGVvZiBhP20uaW5BcnJheSh0aGlzWzBdLG0oYSkpOm0uaW5BcnJheShhLmpxdWVyeT9hWzBdOmEsdGhpcyk6dGhpc1swXSYmdGhpc1swXS5wYXJlbnROb2RlP3RoaXMuZmlyc3QoKS5wcmV2QWxsKCkubGVuZ3RoOi0xfSxhZGQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2sobS51bmlxdWUobS5tZXJnZSh0aGlzLmdldCgpLG0oYSxiKSkpKX0sYWRkQmFjazpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5hZGQobnVsbD09YT90aGlzLnByZXZPYmplY3Q6dGhpcy5wcmV2T2JqZWN0LmZpbHRlcihhKSl9fSk7ZnVuY3Rpb24gRChhLGIpe2RvIGE9YVtiXTt3aGlsZShhJiYxIT09YS5ub2RlVHlwZSk7cmV0dXJuIGF9bS5lYWNoKHtwYXJlbnQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5wYXJlbnROb2RlO3JldHVybiBiJiYxMSE9PWIubm9kZVR5cGU/YjpudWxsfSxwYXJlbnRzOmZ1bmN0aW9uKGEpe3JldHVybiBtLmRpcihhLFwicGFyZW50Tm9kZVwiKX0scGFyZW50c1VudGlsOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gbS5kaXIoYSxcInBhcmVudE5vZGVcIixjKX0sbmV4dDpmdW5jdGlvbihhKXtyZXR1cm4gRChhLFwibmV4dFNpYmxpbmdcIil9LHByZXY6ZnVuY3Rpb24oYSl7cmV0dXJuIEQoYSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dEFsbDpmdW5jdGlvbihhKXtyZXR1cm4gbS5kaXIoYSxcIm5leHRTaWJsaW5nXCIpfSxwcmV2QWxsOmZ1bmN0aW9uKGEpe3JldHVybiBtLmRpcihhLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0VW50aWw6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBtLmRpcihhLFwibmV4dFNpYmxpbmdcIixjKX0scHJldlVudGlsOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gbS5kaXIoYSxcInByZXZpb3VzU2libGluZ1wiLGMpfSxzaWJsaW5nczpmdW5jdGlvbihhKXtyZXR1cm4gbS5zaWJsaW5nKChhLnBhcmVudE5vZGV8fHt9KS5maXJzdENoaWxkLGEpfSxjaGlsZHJlbjpmdW5jdGlvbihhKXtyZXR1cm4gbS5zaWJsaW5nKGEuZmlyc3RDaGlsZCl9LGNvbnRlbnRzOmZ1bmN0aW9uKGEpe3JldHVybiBtLm5vZGVOYW1lKGEsXCJpZnJhbWVcIik/YS5jb250ZW50RG9jdW1lbnR8fGEuY29udGVudFdpbmRvdy5kb2N1bWVudDptLm1lcmdlKFtdLGEuY2hpbGROb2Rlcyl9fSxmdW5jdGlvbihhLGIpe20uZm5bYV09ZnVuY3Rpb24oYyxkKXt2YXIgZT1tLm1hcCh0aGlzLGIsYyk7cmV0dXJuXCJVbnRpbFwiIT09YS5zbGljZSgtNSkmJihkPWMpLGQmJlwic3RyaW5nXCI9PXR5cGVvZiBkJiYoZT1tLmZpbHRlcihkLGUpKSx0aGlzLmxlbmd0aD4xJiYoQ1thXXx8KGU9bS51bmlxdWUoZSkpLEIudGVzdChhKSYmKGU9ZS5yZXZlcnNlKCkpKSx0aGlzLnB1c2hTdGFjayhlKX19KTt2YXIgRT0vXFxTKy9nLEY9e307ZnVuY3Rpb24gRyhhKXt2YXIgYj1GW2FdPXt9O3JldHVybiBtLmVhY2goYS5tYXRjaChFKXx8W10sZnVuY3Rpb24oYSxjKXtiW2NdPSEwfSksYn1tLkNhbGxiYWNrcz1mdW5jdGlvbihhKXthPVwic3RyaW5nXCI9PXR5cGVvZiBhP0ZbYV18fEcoYSk6bS5leHRlbmQoe30sYSk7dmFyIGIsYyxkLGUsZixnLGg9W10saT0hYS5vbmNlJiZbXSxqPWZ1bmN0aW9uKGwpe2ZvcihjPWEubWVtb3J5JiZsLGQ9ITAsZj1nfHwwLGc9MCxlPWgubGVuZ3RoLGI9ITA7aCYmZT5mO2YrKylpZihoW2ZdLmFwcGx5KGxbMF0sbFsxXSk9PT0hMSYmYS5zdG9wT25GYWxzZSl7Yz0hMTticmVha31iPSExLGgmJihpP2kubGVuZ3RoJiZqKGkuc2hpZnQoKSk6Yz9oPVtdOmsuZGlzYWJsZSgpKX0saz17YWRkOmZ1bmN0aW9uKCl7aWYoaCl7dmFyIGQ9aC5sZW5ndGg7IWZ1bmN0aW9uIGYoYil7bS5lYWNoKGIsZnVuY3Rpb24oYixjKXt2YXIgZD1tLnR5cGUoYyk7XCJmdW5jdGlvblwiPT09ZD9hLnVuaXF1ZSYmay5oYXMoYyl8fGgucHVzaChjKTpjJiZjLmxlbmd0aCYmXCJzdHJpbmdcIiE9PWQmJmYoYyl9KX0oYXJndW1lbnRzKSxiP2U9aC5sZW5ndGg6YyYmKGc9ZCxqKGMpKX1yZXR1cm4gdGhpc30scmVtb3ZlOmZ1bmN0aW9uKCl7cmV0dXJuIGgmJm0uZWFjaChhcmd1bWVudHMsZnVuY3Rpb24oYSxjKXt2YXIgZDt3aGlsZSgoZD1tLmluQXJyYXkoYyxoLGQpKT4tMSloLnNwbGljZShkLDEpLGImJihlPj1kJiZlLS0sZj49ZCYmZi0tKX0pLHRoaXN9LGhhczpmdW5jdGlvbihhKXtyZXR1cm4gYT9tLmluQXJyYXkoYSxoKT4tMTohKCFofHwhaC5sZW5ndGgpfSxlbXB0eTpmdW5jdGlvbigpe3JldHVybiBoPVtdLGU9MCx0aGlzfSxkaXNhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIGg9aT1jPXZvaWQgMCx0aGlzfSxkaXNhYmxlZDpmdW5jdGlvbigpe3JldHVybiFofSxsb2NrOmZ1bmN0aW9uKCl7cmV0dXJuIGk9dm9pZCAwLGN8fGsuZGlzYWJsZSgpLHRoaXN9LGxvY2tlZDpmdW5jdGlvbigpe3JldHVybiFpfSxmaXJlV2l0aDpmdW5jdGlvbihhLGMpe3JldHVybiFofHxkJiYhaXx8KGM9Y3x8W10sYz1bYSxjLnNsaWNlP2Muc2xpY2UoKTpjXSxiP2kucHVzaChjKTpqKGMpKSx0aGlzfSxmaXJlOmZ1bmN0aW9uKCl7cmV0dXJuIGsuZmlyZVdpdGgodGhpcyxhcmd1bWVudHMpLHRoaXN9LGZpcmVkOmZ1bmN0aW9uKCl7cmV0dXJuISFkfX07cmV0dXJuIGt9LG0uZXh0ZW5kKHtEZWZlcnJlZDpmdW5jdGlvbihhKXt2YXIgYj1bW1wicmVzb2x2ZVwiLFwiZG9uZVwiLG0uQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksXCJyZXNvbHZlZFwiXSxbXCJyZWplY3RcIixcImZhaWxcIixtLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLFwicmVqZWN0ZWRcIl0sW1wibm90aWZ5XCIsXCJwcm9ncmVzc1wiLG0uQ2FsbGJhY2tzKFwibWVtb3J5XCIpXV0sYz1cInBlbmRpbmdcIixkPXtzdGF0ZTpmdW5jdGlvbigpe3JldHVybiBjfSxhbHdheXM6ZnVuY3Rpb24oKXtyZXR1cm4gZS5kb25lKGFyZ3VtZW50cykuZmFpbChhcmd1bWVudHMpLHRoaXN9LHRoZW46ZnVuY3Rpb24oKXt2YXIgYT1hcmd1bWVudHM7cmV0dXJuIG0uRGVmZXJyZWQoZnVuY3Rpb24oYyl7bS5lYWNoKGIsZnVuY3Rpb24oYixmKXt2YXIgZz1tLmlzRnVuY3Rpb24oYVtiXSkmJmFbYl07ZVtmWzFdXShmdW5jdGlvbigpe3ZhciBhPWcmJmcuYXBwbHkodGhpcyxhcmd1bWVudHMpO2EmJm0uaXNGdW5jdGlvbihhLnByb21pc2UpP2EucHJvbWlzZSgpLmRvbmUoYy5yZXNvbHZlKS5mYWlsKGMucmVqZWN0KS5wcm9ncmVzcyhjLm5vdGlmeSk6Y1tmWzBdK1wiV2l0aFwiXSh0aGlzPT09ZD9jLnByb21pc2UoKTp0aGlzLGc/W2FdOmFyZ3VtZW50cyl9KX0pLGE9bnVsbH0pLnByb21pc2UoKX0scHJvbWlzZTpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9YT9tLmV4dGVuZChhLGQpOmR9fSxlPXt9O3JldHVybiBkLnBpcGU9ZC50aGVuLG0uZWFjaChiLGZ1bmN0aW9uKGEsZil7dmFyIGc9ZlsyXSxoPWZbM107ZFtmWzFdXT1nLmFkZCxoJiZnLmFkZChmdW5jdGlvbigpe2M9aH0sYlsxXmFdWzJdLmRpc2FibGUsYlsyXVsyXS5sb2NrKSxlW2ZbMF1dPWZ1bmN0aW9uKCl7cmV0dXJuIGVbZlswXStcIldpdGhcIl0odGhpcz09PWU/ZDp0aGlzLGFyZ3VtZW50cyksdGhpc30sZVtmWzBdK1wiV2l0aFwiXT1nLmZpcmVXaXRofSksZC5wcm9taXNlKGUpLGEmJmEuY2FsbChlLGUpLGV9LHdoZW46ZnVuY3Rpb24oYSl7dmFyIGI9MCxjPWQuY2FsbChhcmd1bWVudHMpLGU9Yy5sZW5ndGgsZj0xIT09ZXx8YSYmbS5pc0Z1bmN0aW9uKGEucHJvbWlzZSk/ZTowLGc9MT09PWY/YTptLkRlZmVycmVkKCksaD1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGZ1bmN0aW9uKGUpe2JbYV09dGhpcyxjW2FdPWFyZ3VtZW50cy5sZW5ndGg+MT9kLmNhbGwoYXJndW1lbnRzKTplLGM9PT1pP2cubm90aWZ5V2l0aChiLGMpOi0tZnx8Zy5yZXNvbHZlV2l0aChiLGMpfX0saSxqLGs7aWYoZT4xKWZvcihpPW5ldyBBcnJheShlKSxqPW5ldyBBcnJheShlKSxrPW5ldyBBcnJheShlKTtlPmI7YisrKWNbYl0mJm0uaXNGdW5jdGlvbihjW2JdLnByb21pc2UpP2NbYl0ucHJvbWlzZSgpLmRvbmUoaChiLGssYykpLmZhaWwoZy5yZWplY3QpLnByb2dyZXNzKGgoYixqLGkpKTotLWY7cmV0dXJuIGZ8fGcucmVzb2x2ZVdpdGgoayxjKSxnLnByb21pc2UoKX19KTt2YXIgSDttLmZuLnJlYWR5PWZ1bmN0aW9uKGEpe3JldHVybiBtLnJlYWR5LnByb21pc2UoKS5kb25lKGEpLHRoaXN9LG0uZXh0ZW5kKHtpc1JlYWR5OiExLHJlYWR5V2FpdDoxLGhvbGRSZWFkeTpmdW5jdGlvbihhKXthP20ucmVhZHlXYWl0Kys6bS5yZWFkeSghMCl9LHJlYWR5OmZ1bmN0aW9uKGEpe2lmKGE9PT0hMD8hLS1tLnJlYWR5V2FpdDohbS5pc1JlYWR5KXtpZigheS5ib2R5KXJldHVybiBzZXRUaW1lb3V0KG0ucmVhZHkpO20uaXNSZWFkeT0hMCxhIT09ITAmJi0tbS5yZWFkeVdhaXQ+MHx8KEgucmVzb2x2ZVdpdGgoeSxbbV0pLG0uZm4udHJpZ2dlckhhbmRsZXImJihtKHkpLnRyaWdnZXJIYW5kbGVyKFwicmVhZHlcIiksbSh5KS5vZmYoXCJyZWFkeVwiKSkpfX19KTtmdW5jdGlvbiBJKCl7eS5hZGRFdmVudExpc3RlbmVyPyh5LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsSiwhMSksYS5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLEosITEpKTooeS5kZXRhY2hFdmVudChcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiLEopLGEuZGV0YWNoRXZlbnQoXCJvbmxvYWRcIixKKSl9ZnVuY3Rpb24gSigpeyh5LmFkZEV2ZW50TGlzdGVuZXJ8fFwibG9hZFwiPT09ZXZlbnQudHlwZXx8XCJjb21wbGV0ZVwiPT09eS5yZWFkeVN0YXRlKSYmKEkoKSxtLnJlYWR5KCkpfW0ucmVhZHkucHJvbWlzZT1mdW5jdGlvbihiKXtpZighSClpZihIPW0uRGVmZXJyZWQoKSxcImNvbXBsZXRlXCI9PT15LnJlYWR5U3RhdGUpc2V0VGltZW91dChtLnJlYWR5KTtlbHNlIGlmKHkuYWRkRXZlbnRMaXN0ZW5lcil5LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsSiwhMSksYS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLEosITEpO2Vsc2V7eS5hdHRhY2hFdmVudChcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiLEopLGEuYXR0YWNoRXZlbnQoXCJvbmxvYWRcIixKKTt2YXIgYz0hMTt0cnl7Yz1udWxsPT1hLmZyYW1lRWxlbWVudCYmeS5kb2N1bWVudEVsZW1lbnR9Y2F0Y2goZCl7fWMmJmMuZG9TY3JvbGwmJiFmdW5jdGlvbiBlKCl7aWYoIW0uaXNSZWFkeSl7dHJ5e2MuZG9TY3JvbGwoXCJsZWZ0XCIpfWNhdGNoKGEpe3JldHVybiBzZXRUaW1lb3V0KGUsNTApfUkoKSxtLnJlYWR5KCl9fSgpfXJldHVybiBILnByb21pc2UoYil9O3ZhciBLPVwidW5kZWZpbmVkXCIsTDtmb3IoTCBpbiBtKGspKWJyZWFrO2sub3duTGFzdD1cIjBcIiE9PUwsay5pbmxpbmVCbG9ja05lZWRzTGF5b3V0PSExLG0oZnVuY3Rpb24oKXt2YXIgYSxiLGMsZDtjPXkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdLGMmJmMuc3R5bGUmJihiPXkuY3JlYXRlRWxlbWVudChcImRpdlwiKSxkPXkuY3JlYXRlRWxlbWVudChcImRpdlwiKSxkLnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjphYnNvbHV0ZTtib3JkZXI6MDt3aWR0aDowO2hlaWdodDowO3RvcDowO2xlZnQ6LTk5OTlweFwiLGMuYXBwZW5kQ2hpbGQoZCkuYXBwZW5kQ2hpbGQoYiksdHlwZW9mIGIuc3R5bGUuem9vbSE9PUsmJihiLnN0eWxlLmNzc1RleHQ9XCJkaXNwbGF5OmlubGluZTttYXJnaW46MDtib3JkZXI6MDtwYWRkaW5nOjFweDt3aWR0aDoxcHg7em9vbToxXCIsay5pbmxpbmVCbG9ja05lZWRzTGF5b3V0PWE9Mz09PWIub2Zmc2V0V2lkdGgsYSYmKGMuc3R5bGUuem9vbT0xKSksYy5yZW1vdmVDaGlsZChkKSl9KSxmdW5jdGlvbigpe3ZhciBhPXkuY3JlYXRlRWxlbWVudChcImRpdlwiKTtpZihudWxsPT1rLmRlbGV0ZUV4cGFuZG8pe2suZGVsZXRlRXhwYW5kbz0hMDt0cnl7ZGVsZXRlIGEudGVzdH1jYXRjaChiKXtrLmRlbGV0ZUV4cGFuZG89ITF9fWE9bnVsbH0oKSxtLmFjY2VwdERhdGE9ZnVuY3Rpb24oYSl7dmFyIGI9bS5ub0RhdGFbKGEubm9kZU5hbWUrXCIgXCIpLnRvTG93ZXJDYXNlKCldLGM9K2Eubm9kZVR5cGV8fDE7cmV0dXJuIDEhPT1jJiY5IT09Yz8hMTohYnx8YiE9PSEwJiZhLmdldEF0dHJpYnV0ZShcImNsYXNzaWRcIik9PT1ifTt2YXIgTT0vXig/Olxce1tcXHdcXFddKlxcfXxcXFtbXFx3XFxXXSpcXF0pJC8sTj0vKFtBLVpdKS9nO2Z1bmN0aW9uIE8oYSxiLGMpe2lmKHZvaWQgMD09PWMmJjE9PT1hLm5vZGVUeXBlKXt2YXIgZD1cImRhdGEtXCIrYi5yZXBsYWNlKE4sXCItJDFcIikudG9Mb3dlckNhc2UoKTtpZihjPWEuZ2V0QXR0cmlidXRlKGQpLFwic3RyaW5nXCI9PXR5cGVvZiBjKXt0cnl7Yz1cInRydWVcIj09PWM/ITA6XCJmYWxzZVwiPT09Yz8hMTpcIm51bGxcIj09PWM/bnVsbDorYytcIlwiPT09Yz8rYzpNLnRlc3QoYyk/bS5wYXJzZUpTT04oYyk6Y31jYXRjaChlKXt9bS5kYXRhKGEsYixjKX1lbHNlIGM9dm9pZCAwfXJldHVybiBjfWZ1bmN0aW9uIFAoYSl7dmFyIGI7Zm9yKGIgaW4gYSlpZigoXCJkYXRhXCIhPT1ifHwhbS5pc0VtcHR5T2JqZWN0KGFbYl0pKSYmXCJ0b0pTT05cIiE9PWIpcmV0dXJuITE7XG5cbnJldHVybiEwfWZ1bmN0aW9uIFEoYSxiLGQsZSl7aWYobS5hY2NlcHREYXRhKGEpKXt2YXIgZixnLGg9bS5leHBhbmRvLGk9YS5ub2RlVHlwZSxqPWk/bS5jYWNoZTphLGs9aT9hW2hdOmFbaF0mJmg7aWYoayYmaltrXSYmKGV8fGpba10uZGF0YSl8fHZvaWQgMCE9PWR8fFwic3RyaW5nXCIhPXR5cGVvZiBiKXJldHVybiBrfHwoaz1pP2FbaF09Yy5wb3AoKXx8bS5ndWlkKys6aCksaltrXXx8KGpba109aT97fTp7dG9KU09OOm0ubm9vcH0pLChcIm9iamVjdFwiPT10eXBlb2YgYnx8XCJmdW5jdGlvblwiPT10eXBlb2YgYikmJihlP2pba109bS5leHRlbmQoaltrXSxiKTpqW2tdLmRhdGE9bS5leHRlbmQoaltrXS5kYXRhLGIpKSxnPWpba10sZXx8KGcuZGF0YXx8KGcuZGF0YT17fSksZz1nLmRhdGEpLHZvaWQgMCE9PWQmJihnW20uY2FtZWxDYXNlKGIpXT1kKSxcInN0cmluZ1wiPT10eXBlb2YgYj8oZj1nW2JdLG51bGw9PWYmJihmPWdbbS5jYW1lbENhc2UoYildKSk6Zj1nLGZ9fWZ1bmN0aW9uIFIoYSxiLGMpe2lmKG0uYWNjZXB0RGF0YShhKSl7dmFyIGQsZSxmPWEubm9kZVR5cGUsZz1mP20uY2FjaGU6YSxoPWY/YVttLmV4cGFuZG9dOm0uZXhwYW5kbztpZihnW2hdKXtpZihiJiYoZD1jP2dbaF06Z1toXS5kYXRhKSl7bS5pc0FycmF5KGIpP2I9Yi5jb25jYXQobS5tYXAoYixtLmNhbWVsQ2FzZSkpOmIgaW4gZD9iPVtiXTooYj1tLmNhbWVsQ2FzZShiKSxiPWIgaW4gZD9bYl06Yi5zcGxpdChcIiBcIikpLGU9Yi5sZW5ndGg7d2hpbGUoZS0tKWRlbGV0ZSBkW2JbZV1dO2lmKGM/IVAoZCk6IW0uaXNFbXB0eU9iamVjdChkKSlyZXR1cm59KGN8fChkZWxldGUgZ1toXS5kYXRhLFAoZ1toXSkpKSYmKGY/bS5jbGVhbkRhdGEoW2FdLCEwKTprLmRlbGV0ZUV4cGFuZG98fGchPWcud2luZG93P2RlbGV0ZSBnW2hdOmdbaF09bnVsbCl9fX1tLmV4dGVuZCh7Y2FjaGU6e30sbm9EYXRhOntcImFwcGxldCBcIjohMCxcImVtYmVkIFwiOiEwLFwib2JqZWN0IFwiOlwiY2xzaWQ6RDI3Q0RCNkUtQUU2RC0xMWNmLTk2QjgtNDQ0NTUzNTQwMDAwXCJ9LGhhc0RhdGE6ZnVuY3Rpb24oYSl7cmV0dXJuIGE9YS5ub2RlVHlwZT9tLmNhY2hlW2FbbS5leHBhbmRvXV06YVttLmV4cGFuZG9dLCEhYSYmIVAoYSl9LGRhdGE6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBRKGEsYixjKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihhLGIpe3JldHVybiBSKGEsYil9LF9kYXRhOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gUShhLGIsYywhMCl9LF9yZW1vdmVEYXRhOmZ1bmN0aW9uKGEsYil7cmV0dXJuIFIoYSxiLCEwKX19KSxtLmZuLmV4dGVuZCh7ZGF0YTpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmPXRoaXNbMF0sZz1mJiZmLmF0dHJpYnV0ZXM7aWYodm9pZCAwPT09YSl7aWYodGhpcy5sZW5ndGgmJihlPW0uZGF0YShmKSwxPT09Zi5ub2RlVHlwZSYmIW0uX2RhdGEoZixcInBhcnNlZEF0dHJzXCIpKSl7Yz1nLmxlbmd0aDt3aGlsZShjLS0pZ1tjXSYmKGQ9Z1tjXS5uYW1lLDA9PT1kLmluZGV4T2YoXCJkYXRhLVwiKSYmKGQ9bS5jYW1lbENhc2UoZC5zbGljZSg1KSksTyhmLGQsZVtkXSkpKTttLl9kYXRhKGYsXCJwYXJzZWRBdHRyc1wiLCEwKX1yZXR1cm4gZX1yZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgYT90aGlzLmVhY2goZnVuY3Rpb24oKXttLmRhdGEodGhpcyxhKX0pOmFyZ3VtZW50cy5sZW5ndGg+MT90aGlzLmVhY2goZnVuY3Rpb24oKXttLmRhdGEodGhpcyxhLGIpfSk6Zj9PKGYsYSxtLmRhdGEoZixhKSk6dm9pZCAwfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXttLnJlbW92ZURhdGEodGhpcyxhKX0pfX0pLG0uZXh0ZW5kKHtxdWV1ZTpmdW5jdGlvbihhLGIsYyl7dmFyIGQ7cmV0dXJuIGE/KGI9KGJ8fFwiZnhcIikrXCJxdWV1ZVwiLGQ9bS5fZGF0YShhLGIpLGMmJighZHx8bS5pc0FycmF5KGMpP2Q9bS5fZGF0YShhLGIsbS5tYWtlQXJyYXkoYykpOmQucHVzaChjKSksZHx8W10pOnZvaWQgMH0sZGVxdWV1ZTpmdW5jdGlvbihhLGIpe2I9Ynx8XCJmeFwiO3ZhciBjPW0ucXVldWUoYSxiKSxkPWMubGVuZ3RoLGU9Yy5zaGlmdCgpLGY9bS5fcXVldWVIb29rcyhhLGIpLGc9ZnVuY3Rpb24oKXttLmRlcXVldWUoYSxiKX07XCJpbnByb2dyZXNzXCI9PT1lJiYoZT1jLnNoaWZ0KCksZC0tKSxlJiYoXCJmeFwiPT09YiYmYy51bnNoaWZ0KFwiaW5wcm9ncmVzc1wiKSxkZWxldGUgZi5zdG9wLGUuY2FsbChhLGcsZikpLCFkJiZmJiZmLmVtcHR5LmZpcmUoKX0sX3F1ZXVlSG9va3M6ZnVuY3Rpb24oYSxiKXt2YXIgYz1iK1wicXVldWVIb29rc1wiO3JldHVybiBtLl9kYXRhKGEsYyl8fG0uX2RhdGEoYSxjLHtlbXB0eTptLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLmFkZChmdW5jdGlvbigpe20uX3JlbW92ZURhdGEoYSxiK1wicXVldWVcIiksbS5fcmVtb3ZlRGF0YShhLGMpfSl9KX19KSxtLmZuLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oYSxiKXt2YXIgYz0yO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBhJiYoYj1hLGE9XCJmeFwiLGMtLSksYXJndW1lbnRzLmxlbmd0aDxjP20ucXVldWUodGhpc1swXSxhKTp2b2lkIDA9PT1iP3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9bS5xdWV1ZSh0aGlzLGEsYik7bS5fcXVldWVIb29rcyh0aGlzLGEpLFwiZnhcIj09PWEmJlwiaW5wcm9ncmVzc1wiIT09Y1swXSYmbS5kZXF1ZXVlKHRoaXMsYSl9KX0sZGVxdWV1ZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7bS5kZXF1ZXVlKHRoaXMsYSl9KX0sY2xlYXJRdWV1ZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5xdWV1ZShhfHxcImZ4XCIsW10pfSxwcm9taXNlOmZ1bmN0aW9uKGEsYil7dmFyIGMsZD0xLGU9bS5EZWZlcnJlZCgpLGY9dGhpcyxnPXRoaXMubGVuZ3RoLGg9ZnVuY3Rpb24oKXstLWR8fGUucmVzb2x2ZVdpdGgoZixbZl0pfTtcInN0cmluZ1wiIT10eXBlb2YgYSYmKGI9YSxhPXZvaWQgMCksYT1hfHxcImZ4XCI7d2hpbGUoZy0tKWM9bS5fZGF0YShmW2ddLGErXCJxdWV1ZUhvb2tzXCIpLGMmJmMuZW1wdHkmJihkKyssYy5lbXB0eS5hZGQoaCkpO3JldHVybiBoKCksZS5wcm9taXNlKGIpfX0pO3ZhciBTPS9bKy1dPyg/OlxcZCpcXC58KVxcZCsoPzpbZUVdWystXT9cXGQrfCkvLnNvdXJjZSxUPVtcIlRvcFwiLFwiUmlnaHRcIixcIkJvdHRvbVwiLFwiTGVmdFwiXSxVPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGE9Ynx8YSxcIm5vbmVcIj09PW0uY3NzKGEsXCJkaXNwbGF5XCIpfHwhbS5jb250YWlucyhhLm93bmVyRG9jdW1lbnQsYSl9LFY9bS5hY2Nlc3M9ZnVuY3Rpb24oYSxiLGMsZCxlLGYsZyl7dmFyIGg9MCxpPWEubGVuZ3RoLGo9bnVsbD09YztpZihcIm9iamVjdFwiPT09bS50eXBlKGMpKXtlPSEwO2ZvcihoIGluIGMpbS5hY2Nlc3MoYSxiLGgsY1toXSwhMCxmLGcpfWVsc2UgaWYodm9pZCAwIT09ZCYmKGU9ITAsbS5pc0Z1bmN0aW9uKGQpfHwoZz0hMCksaiYmKGc/KGIuY2FsbChhLGQpLGI9bnVsbCk6KGo9YixiPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gai5jYWxsKG0oYSksYyl9KSksYikpZm9yKDtpPmg7aCsrKWIoYVtoXSxjLGc/ZDpkLmNhbGwoYVtoXSxoLGIoYVtoXSxjKSkpO3JldHVybiBlP2E6aj9iLmNhbGwoYSk6aT9iKGFbMF0sYyk6Zn0sVz0vXig/OmNoZWNrYm94fHJhZGlvKSQvaTshZnVuY3Rpb24oKXt2YXIgYT15LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxiPXkuY3JlYXRlRWxlbWVudChcImRpdlwiKSxjPXkuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO2lmKGIuaW5uZXJIVE1MPVwiICA8bGluay8+PHRhYmxlPjwvdGFibGU+PGEgaHJlZj0nL2EnPmE8L2E+PGlucHV0IHR5cGU9J2NoZWNrYm94Jy8+XCIsay5sZWFkaW5nV2hpdGVzcGFjZT0zPT09Yi5maXJzdENoaWxkLm5vZGVUeXBlLGsudGJvZHk9IWIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0Ym9keVwiKS5sZW5ndGgsay5odG1sU2VyaWFsaXplPSEhYi5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpbmtcIikubGVuZ3RoLGsuaHRtbDVDbG9uZT1cIjw6bmF2PjwvOm5hdj5cIiE9PXkuY3JlYXRlRWxlbWVudChcIm5hdlwiKS5jbG9uZU5vZGUoITApLm91dGVySFRNTCxhLnR5cGU9XCJjaGVja2JveFwiLGEuY2hlY2tlZD0hMCxjLmFwcGVuZENoaWxkKGEpLGsuYXBwZW5kQ2hlY2tlZD1hLmNoZWNrZWQsYi5pbm5lckhUTUw9XCI8dGV4dGFyZWE+eDwvdGV4dGFyZWE+XCIsay5ub0Nsb25lQ2hlY2tlZD0hIWIuY2xvbmVOb2RlKCEwKS5sYXN0Q2hpbGQuZGVmYXVsdFZhbHVlLGMuYXBwZW5kQ2hpbGQoYiksYi5pbm5lckhUTUw9XCI8aW5wdXQgdHlwZT0ncmFkaW8nIGNoZWNrZWQ9J2NoZWNrZWQnIG5hbWU9J3QnLz5cIixrLmNoZWNrQ2xvbmU9Yi5jbG9uZU5vZGUoITApLmNsb25lTm9kZSghMCkubGFzdENoaWxkLmNoZWNrZWQsay5ub0Nsb25lRXZlbnQ9ITAsYi5hdHRhY2hFdmVudCYmKGIuYXR0YWNoRXZlbnQoXCJvbmNsaWNrXCIsZnVuY3Rpb24oKXtrLm5vQ2xvbmVFdmVudD0hMX0pLGIuY2xvbmVOb2RlKCEwKS5jbGljaygpKSxudWxsPT1rLmRlbGV0ZUV4cGFuZG8pe2suZGVsZXRlRXhwYW5kbz0hMDt0cnl7ZGVsZXRlIGIudGVzdH1jYXRjaChkKXtrLmRlbGV0ZUV4cGFuZG89ITF9fX0oKSxmdW5jdGlvbigpe3ZhciBiLGMsZD15LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7Zm9yKGIgaW57c3VibWl0OiEwLGNoYW5nZTohMCxmb2N1c2luOiEwfSljPVwib25cIitiLChrW2IrXCJCdWJibGVzXCJdPWMgaW4gYSl8fChkLnNldEF0dHJpYnV0ZShjLFwidFwiKSxrW2IrXCJCdWJibGVzXCJdPWQuYXR0cmlidXRlc1tjXS5leHBhbmRvPT09ITEpO2Q9bnVsbH0oKTt2YXIgWD0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYSkkL2ksWT0vXmtleS8sWj0vXig/Om1vdXNlfHBvaW50ZXJ8Y29udGV4dG1lbnUpfGNsaWNrLywkPS9eKD86Zm9jdXNpbmZvY3VzfGZvY3Vzb3V0Ymx1cikkLyxfPS9eKFteLl0qKSg/OlxcLiguKyl8KSQvO2Z1bmN0aW9uIGFhKCl7cmV0dXJuITB9ZnVuY3Rpb24gYmEoKXtyZXR1cm4hMX1mdW5jdGlvbiBjYSgpe3RyeXtyZXR1cm4geS5hY3RpdmVFbGVtZW50fWNhdGNoKGEpe319bS5ldmVudD17Z2xvYmFsOnt9LGFkZDpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmLGcsaCxpLGosayxsLG4sbyxwLHEscj1tLl9kYXRhKGEpO2lmKHIpe2MuaGFuZGxlciYmKGk9YyxjPWkuaGFuZGxlcixlPWkuc2VsZWN0b3IpLGMuZ3VpZHx8KGMuZ3VpZD1tLmd1aWQrKyksKGc9ci5ldmVudHMpfHwoZz1yLmV2ZW50cz17fSksKGs9ci5oYW5kbGUpfHwoaz1yLmhhbmRsZT1mdW5jdGlvbihhKXtyZXR1cm4gdHlwZW9mIG09PT1LfHxhJiZtLmV2ZW50LnRyaWdnZXJlZD09PWEudHlwZT92b2lkIDA6bS5ldmVudC5kaXNwYXRjaC5hcHBseShrLmVsZW0sYXJndW1lbnRzKX0say5lbGVtPWEpLGI9KGJ8fFwiXCIpLm1hdGNoKEUpfHxbXCJcIl0saD1iLmxlbmd0aDt3aGlsZShoLS0pZj1fLmV4ZWMoYltoXSl8fFtdLG89cT1mWzFdLHA9KGZbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksbyYmKGo9bS5ldmVudC5zcGVjaWFsW29dfHx7fSxvPShlP2ouZGVsZWdhdGVUeXBlOmouYmluZFR5cGUpfHxvLGo9bS5ldmVudC5zcGVjaWFsW29dfHx7fSxsPW0uZXh0ZW5kKHt0eXBlOm8sb3JpZ1R5cGU6cSxkYXRhOmQsaGFuZGxlcjpjLGd1aWQ6Yy5ndWlkLHNlbGVjdG9yOmUsbmVlZHNDb250ZXh0OmUmJm0uZXhwci5tYXRjaC5uZWVkc0NvbnRleHQudGVzdChlKSxuYW1lc3BhY2U6cC5qb2luKFwiLlwiKX0saSksKG49Z1tvXSl8fChuPWdbb109W10sbi5kZWxlZ2F0ZUNvdW50PTAsai5zZXR1cCYmai5zZXR1cC5jYWxsKGEsZCxwLGspIT09ITF8fChhLmFkZEV2ZW50TGlzdGVuZXI/YS5hZGRFdmVudExpc3RlbmVyKG8saywhMSk6YS5hdHRhY2hFdmVudCYmYS5hdHRhY2hFdmVudChcIm9uXCIrbyxrKSkpLGouYWRkJiYoai5hZGQuY2FsbChhLGwpLGwuaGFuZGxlci5ndWlkfHwobC5oYW5kbGVyLmd1aWQ9Yy5ndWlkKSksZT9uLnNwbGljZShuLmRlbGVnYXRlQ291bnQrKywwLGwpOm4ucHVzaChsKSxtLmV2ZW50Lmdsb2JhbFtvXT0hMCk7YT1udWxsfX0scmVtb3ZlOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGYsZyxoLGksaixrLGwsbixvLHAscSxyPW0uaGFzRGF0YShhKSYmbS5fZGF0YShhKTtpZihyJiYoaz1yLmV2ZW50cykpe2I9KGJ8fFwiXCIpLm1hdGNoKEUpfHxbXCJcIl0saj1iLmxlbmd0aDt3aGlsZShqLS0paWYoaD1fLmV4ZWMoYltqXSl8fFtdLG89cT1oWzFdLHA9KGhbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksbyl7bD1tLmV2ZW50LnNwZWNpYWxbb118fHt9LG89KGQ/bC5kZWxlZ2F0ZVR5cGU6bC5iaW5kVHlwZSl8fG8sbj1rW29dfHxbXSxoPWhbMl0mJm5ldyBSZWdFeHAoXCIoXnxcXFxcLilcIitwLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKStcIihcXFxcLnwkKVwiKSxpPWY9bi5sZW5ndGg7d2hpbGUoZi0tKWc9bltmXSwhZSYmcSE9PWcub3JpZ1R5cGV8fGMmJmMuZ3VpZCE9PWcuZ3VpZHx8aCYmIWgudGVzdChnLm5hbWVzcGFjZSl8fGQmJmQhPT1nLnNlbGVjdG9yJiYoXCIqKlwiIT09ZHx8IWcuc2VsZWN0b3IpfHwobi5zcGxpY2UoZiwxKSxnLnNlbGVjdG9yJiZuLmRlbGVnYXRlQ291bnQtLSxsLnJlbW92ZSYmbC5yZW1vdmUuY2FsbChhLGcpKTtpJiYhbi5sZW5ndGgmJihsLnRlYXJkb3duJiZsLnRlYXJkb3duLmNhbGwoYSxwLHIuaGFuZGxlKSE9PSExfHxtLnJlbW92ZUV2ZW50KGEsbyxyLmhhbmRsZSksZGVsZXRlIGtbb10pfWVsc2UgZm9yKG8gaW4gayltLmV2ZW50LnJlbW92ZShhLG8rYltqXSxjLGQsITApO20uaXNFbXB0eU9iamVjdChrKSYmKGRlbGV0ZSByLmhhbmRsZSxtLl9yZW1vdmVEYXRhKGEsXCJldmVudHNcIikpfX0sdHJpZ2dlcjpmdW5jdGlvbihiLGMsZCxlKXt2YXIgZixnLGgsaSxrLGwsbixvPVtkfHx5XSxwPWouY2FsbChiLFwidHlwZVwiKT9iLnR5cGU6YixxPWouY2FsbChiLFwibmFtZXNwYWNlXCIpP2IubmFtZXNwYWNlLnNwbGl0KFwiLlwiKTpbXTtpZihoPWw9ZD1kfHx5LDMhPT1kLm5vZGVUeXBlJiY4IT09ZC5ub2RlVHlwZSYmISQudGVzdChwK20uZXZlbnQudHJpZ2dlcmVkKSYmKHAuaW5kZXhPZihcIi5cIik+PTAmJihxPXAuc3BsaXQoXCIuXCIpLHA9cS5zaGlmdCgpLHEuc29ydCgpKSxnPXAuaW5kZXhPZihcIjpcIik8MCYmXCJvblwiK3AsYj1iW20uZXhwYW5kb10/YjpuZXcgbS5FdmVudChwLFwib2JqZWN0XCI9PXR5cGVvZiBiJiZiKSxiLmlzVHJpZ2dlcj1lPzI6MyxiLm5hbWVzcGFjZT1xLmpvaW4oXCIuXCIpLGIubmFtZXNwYWNlX3JlPWIubmFtZXNwYWNlP25ldyBSZWdFeHAoXCIoXnxcXFxcLilcIitxLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKStcIihcXFxcLnwkKVwiKTpudWxsLGIucmVzdWx0PXZvaWQgMCxiLnRhcmdldHx8KGIudGFyZ2V0PWQpLGM9bnVsbD09Yz9bYl06bS5tYWtlQXJyYXkoYyxbYl0pLGs9bS5ldmVudC5zcGVjaWFsW3BdfHx7fSxlfHwhay50cmlnZ2VyfHxrLnRyaWdnZXIuYXBwbHkoZCxjKSE9PSExKSl7aWYoIWUmJiFrLm5vQnViYmxlJiYhbS5pc1dpbmRvdyhkKSl7Zm9yKGk9ay5kZWxlZ2F0ZVR5cGV8fHAsJC50ZXN0KGkrcCl8fChoPWgucGFyZW50Tm9kZSk7aDtoPWgucGFyZW50Tm9kZSlvLnB1c2goaCksbD1oO2w9PT0oZC5vd25lckRvY3VtZW50fHx5KSYmby5wdXNoKGwuZGVmYXVsdFZpZXd8fGwucGFyZW50V2luZG93fHxhKX1uPTA7d2hpbGUoKGg9b1tuKytdKSYmIWIuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSliLnR5cGU9bj4xP2k6ay5iaW5kVHlwZXx8cCxmPShtLl9kYXRhKGgsXCJldmVudHNcIil8fHt9KVtiLnR5cGVdJiZtLl9kYXRhKGgsXCJoYW5kbGVcIiksZiYmZi5hcHBseShoLGMpLGY9ZyYmaFtnXSxmJiZmLmFwcGx5JiZtLmFjY2VwdERhdGEoaCkmJihiLnJlc3VsdD1mLmFwcGx5KGgsYyksYi5yZXN1bHQ9PT0hMSYmYi5wcmV2ZW50RGVmYXVsdCgpKTtpZihiLnR5cGU9cCwhZSYmIWIuaXNEZWZhdWx0UHJldmVudGVkKCkmJighay5fZGVmYXVsdHx8ay5fZGVmYXVsdC5hcHBseShvLnBvcCgpLGMpPT09ITEpJiZtLmFjY2VwdERhdGEoZCkmJmcmJmRbcF0mJiFtLmlzV2luZG93KGQpKXtsPWRbZ10sbCYmKGRbZ109bnVsbCksbS5ldmVudC50cmlnZ2VyZWQ9cDt0cnl7ZFtwXSgpfWNhdGNoKHIpe31tLmV2ZW50LnRyaWdnZXJlZD12b2lkIDAsbCYmKGRbZ109bCl9cmV0dXJuIGIucmVzdWx0fX0sZGlzcGF0Y2g6ZnVuY3Rpb24oYSl7YT1tLmV2ZW50LmZpeChhKTt2YXIgYixjLGUsZixnLGg9W10saT1kLmNhbGwoYXJndW1lbnRzKSxqPShtLl9kYXRhKHRoaXMsXCJldmVudHNcIil8fHt9KVthLnR5cGVdfHxbXSxrPW0uZXZlbnQuc3BlY2lhbFthLnR5cGVdfHx7fTtpZihpWzBdPWEsYS5kZWxlZ2F0ZVRhcmdldD10aGlzLCFrLnByZURpc3BhdGNofHxrLnByZURpc3BhdGNoLmNhbGwodGhpcyxhKSE9PSExKXtoPW0uZXZlbnQuaGFuZGxlcnMuY2FsbCh0aGlzLGEsaiksYj0wO3doaWxlKChmPWhbYisrXSkmJiFhLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpe2EuY3VycmVudFRhcmdldD1mLmVsZW0sZz0wO3doaWxlKChlPWYuaGFuZGxlcnNbZysrXSkmJiFhLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCkpKCFhLm5hbWVzcGFjZV9yZXx8YS5uYW1lc3BhY2VfcmUudGVzdChlLm5hbWVzcGFjZSkpJiYoYS5oYW5kbGVPYmo9ZSxhLmRhdGE9ZS5kYXRhLGM9KChtLmV2ZW50LnNwZWNpYWxbZS5vcmlnVHlwZV18fHt9KS5oYW5kbGV8fGUuaGFuZGxlcikuYXBwbHkoZi5lbGVtLGkpLHZvaWQgMCE9PWMmJihhLnJlc3VsdD1jKT09PSExJiYoYS5wcmV2ZW50RGVmYXVsdCgpLGEuc3RvcFByb3BhZ2F0aW9uKCkpKX1yZXR1cm4gay5wb3N0RGlzcGF0Y2gmJmsucG9zdERpc3BhdGNoLmNhbGwodGhpcyxhKSxhLnJlc3VsdH19LGhhbmRsZXJzOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGYsZz1bXSxoPWIuZGVsZWdhdGVDb3VudCxpPWEudGFyZ2V0O2lmKGgmJmkubm9kZVR5cGUmJighYS5idXR0b258fFwiY2xpY2tcIiE9PWEudHlwZSkpZm9yKDtpIT10aGlzO2k9aS5wYXJlbnROb2RlfHx0aGlzKWlmKDE9PT1pLm5vZGVUeXBlJiYoaS5kaXNhYmxlZCE9PSEwfHxcImNsaWNrXCIhPT1hLnR5cGUpKXtmb3IoZT1bXSxmPTA7aD5mO2YrKylkPWJbZl0sYz1kLnNlbGVjdG9yK1wiIFwiLHZvaWQgMD09PWVbY10mJihlW2NdPWQubmVlZHNDb250ZXh0P20oYyx0aGlzKS5pbmRleChpKT49MDptLmZpbmQoYyx0aGlzLG51bGwsW2ldKS5sZW5ndGgpLGVbY10mJmUucHVzaChkKTtlLmxlbmd0aCYmZy5wdXNoKHtlbGVtOmksaGFuZGxlcnM6ZX0pfXJldHVybiBoPGIubGVuZ3RoJiZnLnB1c2goe2VsZW06dGhpcyxoYW5kbGVyczpiLnNsaWNlKGgpfSksZ30sZml4OmZ1bmN0aW9uKGEpe2lmKGFbbS5leHBhbmRvXSlyZXR1cm4gYTt2YXIgYixjLGQsZT1hLnR5cGUsZj1hLGc9dGhpcy5maXhIb29rc1tlXTtnfHwodGhpcy5maXhIb29rc1tlXT1nPVoudGVzdChlKT90aGlzLm1vdXNlSG9va3M6WS50ZXN0KGUpP3RoaXMua2V5SG9va3M6e30pLGQ9Zy5wcm9wcz90aGlzLnByb3BzLmNvbmNhdChnLnByb3BzKTp0aGlzLnByb3BzLGE9bmV3IG0uRXZlbnQoZiksYj1kLmxlbmd0aDt3aGlsZShiLS0pYz1kW2JdLGFbY109ZltjXTtyZXR1cm4gYS50YXJnZXR8fChhLnRhcmdldD1mLnNyY0VsZW1lbnR8fHkpLDM9PT1hLnRhcmdldC5ub2RlVHlwZSYmKGEudGFyZ2V0PWEudGFyZ2V0LnBhcmVudE5vZGUpLGEubWV0YUtleT0hIWEubWV0YUtleSxnLmZpbHRlcj9nLmZpbHRlcihhLGYpOmF9LHByb3BzOlwiYWx0S2V5IGJ1YmJsZXMgY2FuY2VsYWJsZSBjdHJsS2V5IGN1cnJlbnRUYXJnZXQgZXZlbnRQaGFzZSBtZXRhS2V5IHJlbGF0ZWRUYXJnZXQgc2hpZnRLZXkgdGFyZ2V0IHRpbWVTdGFtcCB2aWV3IHdoaWNoXCIuc3BsaXQoXCIgXCIpLGZpeEhvb2tzOnt9LGtleUhvb2tzOntwcm9wczpcImNoYXIgY2hhckNvZGUga2V5IGtleUNvZGVcIi5zcGxpdChcIiBcIiksZmlsdGVyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIG51bGw9PWEud2hpY2gmJihhLndoaWNoPW51bGwhPWIuY2hhckNvZGU/Yi5jaGFyQ29kZTpiLmtleUNvZGUpLGF9fSxtb3VzZUhvb2tzOntwcm9wczpcImJ1dHRvbiBidXR0b25zIGNsaWVudFggY2xpZW50WSBmcm9tRWxlbWVudCBvZmZzZXRYIG9mZnNldFkgcGFnZVggcGFnZVkgc2NyZWVuWCBzY3JlZW5ZIHRvRWxlbWVudFwiLnNwbGl0KFwiIFwiKSxmaWx0ZXI6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZj1iLmJ1dHRvbixnPWIuZnJvbUVsZW1lbnQ7cmV0dXJuIG51bGw9PWEucGFnZVgmJm51bGwhPWIuY2xpZW50WCYmKGQ9YS50YXJnZXQub3duZXJEb2N1bWVudHx8eSxlPWQuZG9jdW1lbnRFbGVtZW50LGM9ZC5ib2R5LGEucGFnZVg9Yi5jbGllbnRYKyhlJiZlLnNjcm9sbExlZnR8fGMmJmMuc2Nyb2xsTGVmdHx8MCktKGUmJmUuY2xpZW50TGVmdHx8YyYmYy5jbGllbnRMZWZ0fHwwKSxhLnBhZ2VZPWIuY2xpZW50WSsoZSYmZS5zY3JvbGxUb3B8fGMmJmMuc2Nyb2xsVG9wfHwwKS0oZSYmZS5jbGllbnRUb3B8fGMmJmMuY2xpZW50VG9wfHwwKSksIWEucmVsYXRlZFRhcmdldCYmZyYmKGEucmVsYXRlZFRhcmdldD1nPT09YS50YXJnZXQ/Yi50b0VsZW1lbnQ6ZyksYS53aGljaHx8dm9pZCAwPT09Znx8KGEud2hpY2g9MSZmPzE6MiZmPzM6NCZmPzI6MCksYX19LHNwZWNpYWw6e2xvYWQ6e25vQnViYmxlOiEwfSxmb2N1czp7dHJpZ2dlcjpmdW5jdGlvbigpe2lmKHRoaXMhPT1jYSgpJiZ0aGlzLmZvY3VzKXRyeXtyZXR1cm4gdGhpcy5mb2N1cygpLCExfWNhdGNoKGEpe319LGRlbGVnYXRlVHlwZTpcImZvY3VzaW5cIn0sYmx1cjp7dHJpZ2dlcjpmdW5jdGlvbigpe3JldHVybiB0aGlzPT09Y2EoKSYmdGhpcy5ibHVyPyh0aGlzLmJsdXIoKSwhMSk6dm9pZCAwfSxkZWxlZ2F0ZVR5cGU6XCJmb2N1c291dFwifSxjbGljazp7dHJpZ2dlcjpmdW5jdGlvbigpe3JldHVybiBtLm5vZGVOYW1lKHRoaXMsXCJpbnB1dFwiKSYmXCJjaGVja2JveFwiPT09dGhpcy50eXBlJiZ0aGlzLmNsaWNrPyh0aGlzLmNsaWNrKCksITEpOnZvaWQgMH0sX2RlZmF1bHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIG0ubm9kZU5hbWUoYS50YXJnZXQsXCJhXCIpfX0sYmVmb3JldW5sb2FkOntwb3N0RGlzcGF0Y2g6ZnVuY3Rpb24oYSl7dm9pZCAwIT09YS5yZXN1bHQmJmEub3JpZ2luYWxFdmVudCYmKGEub3JpZ2luYWxFdmVudC5yZXR1cm5WYWx1ZT1hLnJlc3VsdCl9fX0sc2ltdWxhdGU6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9bS5leHRlbmQobmV3IG0uRXZlbnQsYyx7dHlwZTphLGlzU2ltdWxhdGVkOiEwLG9yaWdpbmFsRXZlbnQ6e319KTtkP20uZXZlbnQudHJpZ2dlcihlLG51bGwsYik6bS5ldmVudC5kaXNwYXRjaC5jYWxsKGIsZSksZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSYmYy5wcmV2ZW50RGVmYXVsdCgpfX0sbS5yZW1vdmVFdmVudD15LnJlbW92ZUV2ZW50TGlzdGVuZXI/ZnVuY3Rpb24oYSxiLGMpe2EucmVtb3ZlRXZlbnRMaXN0ZW5lciYmYS5yZW1vdmVFdmVudExpc3RlbmVyKGIsYywhMSl9OmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1cIm9uXCIrYjthLmRldGFjaEV2ZW50JiYodHlwZW9mIGFbZF09PT1LJiYoYVtkXT1udWxsKSxhLmRldGFjaEV2ZW50KGQsYykpfSxtLkV2ZW50PWZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBtLkV2ZW50PyhhJiZhLnR5cGU/KHRoaXMub3JpZ2luYWxFdmVudD1hLHRoaXMudHlwZT1hLnR5cGUsdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9YS5kZWZhdWx0UHJldmVudGVkfHx2b2lkIDA9PT1hLmRlZmF1bHRQcmV2ZW50ZWQmJmEucmV0dXJuVmFsdWU9PT0hMT9hYTpiYSk6dGhpcy50eXBlPWEsYiYmbS5leHRlbmQodGhpcyxiKSx0aGlzLnRpbWVTdGFtcD1hJiZhLnRpbWVTdGFtcHx8bS5ub3coKSx2b2lkKHRoaXNbbS5leHBhbmRvXT0hMCkpOm5ldyBtLkV2ZW50KGEsYil9LG0uRXZlbnQucHJvdG90eXBlPXtpc0RlZmF1bHRQcmV2ZW50ZWQ6YmEsaXNQcm9wYWdhdGlvblN0b3BwZWQ6YmEsaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ6YmEscHJldmVudERlZmF1bHQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9YWEsYSYmKGEucHJldmVudERlZmF1bHQ/YS5wcmV2ZW50RGVmYXVsdCgpOmEucmV0dXJuVmFsdWU9ITEpfSxzdG9wUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZD1hYSxhJiYoYS5zdG9wUHJvcGFnYXRpb24mJmEuc3RvcFByb3BhZ2F0aW9uKCksYS5jYW5jZWxCdWJibGU9ITApfSxzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZD1hYSxhJiZhLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiYmYS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSx0aGlzLnN0b3BQcm9wYWdhdGlvbigpfX0sbS5lYWNoKHttb3VzZWVudGVyOlwibW91c2VvdmVyXCIsbW91c2VsZWF2ZTpcIm1vdXNlb3V0XCIscG9pbnRlcmVudGVyOlwicG9pbnRlcm92ZXJcIixwb2ludGVybGVhdmU6XCJwb2ludGVyb3V0XCJ9LGZ1bmN0aW9uKGEsYil7bS5ldmVudC5zcGVjaWFsW2FdPXtkZWxlZ2F0ZVR5cGU6YixiaW5kVHlwZTpiLGhhbmRsZTpmdW5jdGlvbihhKXt2YXIgYyxkPXRoaXMsZT1hLnJlbGF0ZWRUYXJnZXQsZj1hLmhhbmRsZU9iajtyZXR1cm4oIWV8fGUhPT1kJiYhbS5jb250YWlucyhkLGUpKSYmKGEudHlwZT1mLm9yaWdUeXBlLGM9Zi5oYW5kbGVyLmFwcGx5KHRoaXMsYXJndW1lbnRzKSxhLnR5cGU9YiksY319fSksay5zdWJtaXRCdWJibGVzfHwobS5ldmVudC5zcGVjaWFsLnN1Ym1pdD17c2V0dXA6ZnVuY3Rpb24oKXtyZXR1cm4gbS5ub2RlTmFtZSh0aGlzLFwiZm9ybVwiKT8hMTp2b2lkIG0uZXZlbnQuYWRkKHRoaXMsXCJjbGljay5fc3VibWl0IGtleXByZXNzLl9zdWJtaXRcIixmdW5jdGlvbihhKXt2YXIgYj1hLnRhcmdldCxjPW0ubm9kZU5hbWUoYixcImlucHV0XCIpfHxtLm5vZGVOYW1lKGIsXCJidXR0b25cIik/Yi5mb3JtOnZvaWQgMDtjJiYhbS5fZGF0YShjLFwic3VibWl0QnViYmxlc1wiKSYmKG0uZXZlbnQuYWRkKGMsXCJzdWJtaXQuX3N1Ym1pdFwiLGZ1bmN0aW9uKGEpe2EuX3N1Ym1pdF9idWJibGU9ITB9KSxtLl9kYXRhKGMsXCJzdWJtaXRCdWJibGVzXCIsITApKX0pfSxwb3N0RGlzcGF0Y2g6ZnVuY3Rpb24oYSl7YS5fc3VibWl0X2J1YmJsZSYmKGRlbGV0ZSBhLl9zdWJtaXRfYnViYmxlLHRoaXMucGFyZW50Tm9kZSYmIWEuaXNUcmlnZ2VyJiZtLmV2ZW50LnNpbXVsYXRlKFwic3VibWl0XCIsdGhpcy5wYXJlbnROb2RlLGEsITApKX0sdGVhcmRvd246ZnVuY3Rpb24oKXtyZXR1cm4gbS5ub2RlTmFtZSh0aGlzLFwiZm9ybVwiKT8hMTp2b2lkIG0uZXZlbnQucmVtb3ZlKHRoaXMsXCIuX3N1Ym1pdFwiKX19KSxrLmNoYW5nZUJ1YmJsZXN8fChtLmV2ZW50LnNwZWNpYWwuY2hhbmdlPXtzZXR1cDpmdW5jdGlvbigpe3JldHVybiBYLnRlc3QodGhpcy5ub2RlTmFtZSk/KChcImNoZWNrYm94XCI9PT10aGlzLnR5cGV8fFwicmFkaW9cIj09PXRoaXMudHlwZSkmJihtLmV2ZW50LmFkZCh0aGlzLFwicHJvcGVydHljaGFuZ2UuX2NoYW5nZVwiLGZ1bmN0aW9uKGEpe1wiY2hlY2tlZFwiPT09YS5vcmlnaW5hbEV2ZW50LnByb3BlcnR5TmFtZSYmKHRoaXMuX2p1c3RfY2hhbmdlZD0hMCl9KSxtLmV2ZW50LmFkZCh0aGlzLFwiY2xpY2suX2NoYW5nZVwiLGZ1bmN0aW9uKGEpe3RoaXMuX2p1c3RfY2hhbmdlZCYmIWEuaXNUcmlnZ2VyJiYodGhpcy5fanVzdF9jaGFuZ2VkPSExKSxtLmV2ZW50LnNpbXVsYXRlKFwiY2hhbmdlXCIsdGhpcyxhLCEwKX0pKSwhMSk6dm9pZCBtLmV2ZW50LmFkZCh0aGlzLFwiYmVmb3JlYWN0aXZhdGUuX2NoYW5nZVwiLGZ1bmN0aW9uKGEpe3ZhciBiPWEudGFyZ2V0O1gudGVzdChiLm5vZGVOYW1lKSYmIW0uX2RhdGEoYixcImNoYW5nZUJ1YmJsZXNcIikmJihtLmV2ZW50LmFkZChiLFwiY2hhbmdlLl9jaGFuZ2VcIixmdW5jdGlvbihhKXshdGhpcy5wYXJlbnROb2RlfHxhLmlzU2ltdWxhdGVkfHxhLmlzVHJpZ2dlcnx8bS5ldmVudC5zaW11bGF0ZShcImNoYW5nZVwiLHRoaXMucGFyZW50Tm9kZSxhLCEwKX0pLG0uX2RhdGEoYixcImNoYW5nZUJ1YmJsZXNcIiwhMCkpfSl9LGhhbmRsZTpmdW5jdGlvbihhKXt2YXIgYj1hLnRhcmdldDtyZXR1cm4gdGhpcyE9PWJ8fGEuaXNTaW11bGF0ZWR8fGEuaXNUcmlnZ2VyfHxcInJhZGlvXCIhPT1iLnR5cGUmJlwiY2hlY2tib3hcIiE9PWIudHlwZT9hLmhhbmRsZU9iai5oYW5kbGVyLmFwcGx5KHRoaXMsYXJndW1lbnRzKTp2b2lkIDB9LHRlYXJkb3duOmZ1bmN0aW9uKCl7cmV0dXJuIG0uZXZlbnQucmVtb3ZlKHRoaXMsXCIuX2NoYW5nZVwiKSwhWC50ZXN0KHRoaXMubm9kZU5hbWUpfX0pLGsuZm9jdXNpbkJ1YmJsZXN8fG0uZWFjaCh7Zm9jdXM6XCJmb2N1c2luXCIsYmx1cjpcImZvY3Vzb3V0XCJ9LGZ1bmN0aW9uKGEsYil7dmFyIGM9ZnVuY3Rpb24oYSl7bS5ldmVudC5zaW11bGF0ZShiLGEudGFyZ2V0LG0uZXZlbnQuZml4KGEpLCEwKX07bS5ldmVudC5zcGVjaWFsW2JdPXtzZXR1cDpmdW5jdGlvbigpe3ZhciBkPXRoaXMub3duZXJEb2N1bWVudHx8dGhpcyxlPW0uX2RhdGEoZCxiKTtlfHxkLmFkZEV2ZW50TGlzdGVuZXIoYSxjLCEwKSxtLl9kYXRhKGQsYiwoZXx8MCkrMSl9LHRlYXJkb3duOmZ1bmN0aW9uKCl7dmFyIGQ9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLGU9bS5fZGF0YShkLGIpLTE7ZT9tLl9kYXRhKGQsYixlKTooZC5yZW1vdmVFdmVudExpc3RlbmVyKGEsYywhMCksbS5fcmVtb3ZlRGF0YShkLGIpKX19fSksbS5mbi5leHRlbmQoe29uOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGYsZztpZihcIm9iamVjdFwiPT10eXBlb2YgYSl7XCJzdHJpbmdcIiE9dHlwZW9mIGImJihjPWN8fGIsYj12b2lkIDApO2ZvcihmIGluIGEpdGhpcy5vbihmLGIsYyxhW2ZdLGUpO3JldHVybiB0aGlzfWlmKG51bGw9PWMmJm51bGw9PWQ/KGQ9YixjPWI9dm9pZCAwKTpudWxsPT1kJiYoXCJzdHJpbmdcIj09dHlwZW9mIGI/KGQ9YyxjPXZvaWQgMCk6KGQ9YyxjPWIsYj12b2lkIDApKSxkPT09ITEpZD1iYTtlbHNlIGlmKCFkKXJldHVybiB0aGlzO3JldHVybiAxPT09ZSYmKGc9ZCxkPWZ1bmN0aW9uKGEpe3JldHVybiBtKCkub2ZmKGEpLGcuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxkLmd1aWQ9Zy5ndWlkfHwoZy5ndWlkPW0uZ3VpZCsrKSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7bS5ldmVudC5hZGQodGhpcyxhLGQsYyxiKX0pfSxvbmU6ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHRoaXMub24oYSxiLGMsZCwxKX0sb2ZmOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlO2lmKGEmJmEucHJldmVudERlZmF1bHQmJmEuaGFuZGxlT2JqKXJldHVybiBkPWEuaGFuZGxlT2JqLG0oYS5kZWxlZ2F0ZVRhcmdldCkub2ZmKGQubmFtZXNwYWNlP2Qub3JpZ1R5cGUrXCIuXCIrZC5uYW1lc3BhY2U6ZC5vcmlnVHlwZSxkLnNlbGVjdG9yLGQuaGFuZGxlciksdGhpcztpZihcIm9iamVjdFwiPT10eXBlb2YgYSl7Zm9yKGUgaW4gYSl0aGlzLm9mZihlLGIsYVtlXSk7cmV0dXJuIHRoaXN9cmV0dXJuKGI9PT0hMXx8XCJmdW5jdGlvblwiPT10eXBlb2YgYikmJihjPWIsYj12b2lkIDApLGM9PT0hMSYmKGM9YmEpLHRoaXMuZWFjaChmdW5jdGlvbigpe20uZXZlbnQucmVtb3ZlKHRoaXMsYSxjLGIpfSl9LHRyaWdnZXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7bS5ldmVudC50cmlnZ2VyKGEsYix0aGlzKX0pfSx0cmlnZ2VySGFuZGxlcjpmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXNbMF07cmV0dXJuIGM/bS5ldmVudC50cmlnZ2VyKGEsYixjLCEwKTp2b2lkIDB9fSk7ZnVuY3Rpb24gZGEoYSl7dmFyIGI9ZWEuc3BsaXQoXCJ8XCIpLGM9YS5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7aWYoYy5jcmVhdGVFbGVtZW50KXdoaWxlKGIubGVuZ3RoKWMuY3JlYXRlRWxlbWVudChiLnBvcCgpKTtyZXR1cm4gY312YXIgZWE9XCJhYmJyfGFydGljbGV8YXNpZGV8YXVkaW98YmRpfGNhbnZhc3xkYXRhfGRhdGFsaXN0fGRldGFpbHN8ZmlnY2FwdGlvbnxmaWd1cmV8Zm9vdGVyfGhlYWRlcnxoZ3JvdXB8bWFya3xtZXRlcnxuYXZ8b3V0cHV0fHByb2dyZXNzfHNlY3Rpb258c3VtbWFyeXx0aW1lfHZpZGVvXCIsZmE9LyBqUXVlcnlcXGQrPVwiKD86bnVsbHxcXGQrKVwiL2csZ2E9bmV3IFJlZ0V4cChcIjwoPzpcIitlYStcIilbXFxcXHMvPl1cIixcImlcIiksaGE9L15cXHMrLyxpYT0vPCg/IWFyZWF8YnJ8Y29sfGVtYmVkfGhyfGltZ3xpbnB1dHxsaW5rfG1ldGF8cGFyYW0pKChbXFx3Ol0rKVtePl0qKVxcLz4vZ2ksamE9LzwoW1xcdzpdKykvLGthPS88dGJvZHkvaSxsYT0vPHwmIz9cXHcrOy8sbWE9LzwoPzpzY3JpcHR8c3R5bGV8bGluaykvaSxuYT0vY2hlY2tlZFxccyooPzpbXj1dfD1cXHMqLmNoZWNrZWQuKS9pLG9hPS9eJHxcXC8oPzpqYXZhfGVjbWEpc2NyaXB0L2kscGE9L150cnVlXFwvKC4qKS8scWE9L15cXHMqPCEoPzpcXFtDREFUQVxcW3wtLSl8KD86XFxdXFxdfC0tKT5cXHMqJC9nLHJhPXtvcHRpb246WzEsXCI8c2VsZWN0IG11bHRpcGxlPSdtdWx0aXBsZSc+XCIsXCI8L3NlbGVjdD5cIl0sbGVnZW5kOlsxLFwiPGZpZWxkc2V0PlwiLFwiPC9maWVsZHNldD5cIl0sYXJlYTpbMSxcIjxtYXA+XCIsXCI8L21hcD5cIl0scGFyYW06WzEsXCI8b2JqZWN0PlwiLFwiPC9vYmplY3Q+XCJdLHRoZWFkOlsxLFwiPHRhYmxlPlwiLFwiPC90YWJsZT5cIl0sdHI6WzIsXCI8dGFibGU+PHRib2R5PlwiLFwiPC90Ym9keT48L3RhYmxlPlwiXSxjb2w6WzIsXCI8dGFibGU+PHRib2R5PjwvdGJvZHk+PGNvbGdyb3VwPlwiLFwiPC9jb2xncm91cD48L3RhYmxlPlwiXSx0ZDpbMyxcIjx0YWJsZT48dGJvZHk+PHRyPlwiLFwiPC90cj48L3Rib2R5PjwvdGFibGU+XCJdLF9kZWZhdWx0OmsuaHRtbFNlcmlhbGl6ZT9bMCxcIlwiLFwiXCJdOlsxLFwiWDxkaXY+XCIsXCI8L2Rpdj5cIl19LHNhPWRhKHkpLHRhPXNhLmFwcGVuZENoaWxkKHkuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7cmEub3B0Z3JvdXA9cmEub3B0aW9uLHJhLnRib2R5PXJhLnRmb290PXJhLmNvbGdyb3VwPXJhLmNhcHRpb249cmEudGhlYWQscmEudGg9cmEudGQ7ZnVuY3Rpb24gdWEoYSxiKXt2YXIgYyxkLGU9MCxmPXR5cGVvZiBhLmdldEVsZW1lbnRzQnlUYWdOYW1lIT09Sz9hLmdldEVsZW1lbnRzQnlUYWdOYW1lKGJ8fFwiKlwiKTp0eXBlb2YgYS5xdWVyeVNlbGVjdG9yQWxsIT09Sz9hLnF1ZXJ5U2VsZWN0b3JBbGwoYnx8XCIqXCIpOnZvaWQgMDtpZighZilmb3IoZj1bXSxjPWEuY2hpbGROb2Rlc3x8YTtudWxsIT0oZD1jW2VdKTtlKyspIWJ8fG0ubm9kZU5hbWUoZCxiKT9mLnB1c2goZCk6bS5tZXJnZShmLHVhKGQsYikpO3JldHVybiB2b2lkIDA9PT1ifHxiJiZtLm5vZGVOYW1lKGEsYik/bS5tZXJnZShbYV0sZik6Zn1mdW5jdGlvbiB2YShhKXtXLnRlc3QoYS50eXBlKSYmKGEuZGVmYXVsdENoZWNrZWQ9YS5jaGVja2VkKX1mdW5jdGlvbiB3YShhLGIpe3JldHVybiBtLm5vZGVOYW1lKGEsXCJ0YWJsZVwiKSYmbS5ub2RlTmFtZSgxMSE9PWIubm9kZVR5cGU/YjpiLmZpcnN0Q2hpbGQsXCJ0clwiKT9hLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGJvZHlcIilbMF18fGEuYXBwZW5kQ2hpbGQoYS5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKSk6YX1mdW5jdGlvbiB4YShhKXtyZXR1cm4gYS50eXBlPShudWxsIT09bS5maW5kLmF0dHIoYSxcInR5cGVcIikpK1wiL1wiK2EudHlwZSxhfWZ1bmN0aW9uIHlhKGEpe3ZhciBiPXBhLmV4ZWMoYS50eXBlKTtyZXR1cm4gYj9hLnR5cGU9YlsxXTphLnJlbW92ZUF0dHJpYnV0ZShcInR5cGVcIiksYX1mdW5jdGlvbiB6YShhLGIpe2Zvcih2YXIgYyxkPTA7bnVsbCE9KGM9YVtkXSk7ZCsrKW0uX2RhdGEoYyxcImdsb2JhbEV2YWxcIiwhYnx8bS5fZGF0YShiW2RdLFwiZ2xvYmFsRXZhbFwiKSl9ZnVuY3Rpb24gQWEoYSxiKXtpZigxPT09Yi5ub2RlVHlwZSYmbS5oYXNEYXRhKGEpKXt2YXIgYyxkLGUsZj1tLl9kYXRhKGEpLGc9bS5fZGF0YShiLGYpLGg9Zi5ldmVudHM7aWYoaCl7ZGVsZXRlIGcuaGFuZGxlLGcuZXZlbnRzPXt9O2ZvcihjIGluIGgpZm9yKGQ9MCxlPWhbY10ubGVuZ3RoO2U+ZDtkKyspbS5ldmVudC5hZGQoYixjLGhbY11bZF0pfWcuZGF0YSYmKGcuZGF0YT1tLmV4dGVuZCh7fSxnLmRhdGEpKX19ZnVuY3Rpb24gQmEoYSxiKXt2YXIgYyxkLGU7aWYoMT09PWIubm9kZVR5cGUpe2lmKGM9Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLCFrLm5vQ2xvbmVFdmVudCYmYlttLmV4cGFuZG9dKXtlPW0uX2RhdGEoYik7Zm9yKGQgaW4gZS5ldmVudHMpbS5yZW1vdmVFdmVudChiLGQsZS5oYW5kbGUpO2IucmVtb3ZlQXR0cmlidXRlKG0uZXhwYW5kbyl9XCJzY3JpcHRcIj09PWMmJmIudGV4dCE9PWEudGV4dD8oeGEoYikudGV4dD1hLnRleHQseWEoYikpOlwib2JqZWN0XCI9PT1jPyhiLnBhcmVudE5vZGUmJihiLm91dGVySFRNTD1hLm91dGVySFRNTCksay5odG1sNUNsb25lJiZhLmlubmVySFRNTCYmIW0udHJpbShiLmlubmVySFRNTCkmJihiLmlubmVySFRNTD1hLmlubmVySFRNTCkpOlwiaW5wdXRcIj09PWMmJlcudGVzdChhLnR5cGUpPyhiLmRlZmF1bHRDaGVja2VkPWIuY2hlY2tlZD1hLmNoZWNrZWQsYi52YWx1ZSE9PWEudmFsdWUmJihiLnZhbHVlPWEudmFsdWUpKTpcIm9wdGlvblwiPT09Yz9iLmRlZmF1bHRTZWxlY3RlZD1iLnNlbGVjdGVkPWEuZGVmYXVsdFNlbGVjdGVkOihcImlucHV0XCI9PT1jfHxcInRleHRhcmVhXCI9PT1jKSYmKGIuZGVmYXVsdFZhbHVlPWEuZGVmYXVsdFZhbHVlKX19bS5leHRlbmQoe2Nsb25lOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZyxoLGk9bS5jb250YWlucyhhLm93bmVyRG9jdW1lbnQsYSk7aWYoay5odG1sNUNsb25lfHxtLmlzWE1MRG9jKGEpfHwhZ2EudGVzdChcIjxcIithLm5vZGVOYW1lK1wiPlwiKT9mPWEuY2xvbmVOb2RlKCEwKToodGEuaW5uZXJIVE1MPWEub3V0ZXJIVE1MLHRhLnJlbW92ZUNoaWxkKGY9dGEuZmlyc3RDaGlsZCkpLCEoay5ub0Nsb25lRXZlbnQmJmsubm9DbG9uZUNoZWNrZWR8fDEhPT1hLm5vZGVUeXBlJiYxMSE9PWEubm9kZVR5cGV8fG0uaXNYTUxEb2MoYSkpKWZvcihkPXVhKGYpLGg9dWEoYSksZz0wO251bGwhPShlPWhbZ10pOysrZylkW2ddJiZCYShlLGRbZ10pO2lmKGIpaWYoYylmb3IoaD1ofHx1YShhKSxkPWR8fHVhKGYpLGc9MDtudWxsIT0oZT1oW2ddKTtnKyspQWEoZSxkW2ddKTtlbHNlIEFhKGEsZik7cmV0dXJuIGQ9dWEoZixcInNjcmlwdFwiKSxkLmxlbmd0aD4wJiZ6YShkLCFpJiZ1YShhLFwic2NyaXB0XCIpKSxkPWg9ZT1udWxsLGZ9LGJ1aWxkRnJhZ21lbnQ6ZnVuY3Rpb24oYSxiLGMsZCl7Zm9yKHZhciBlLGYsZyxoLGksaixsLG49YS5sZW5ndGgsbz1kYShiKSxwPVtdLHE9MDtuPnE7cSsrKWlmKGY9YVtxXSxmfHwwPT09ZilpZihcIm9iamVjdFwiPT09bS50eXBlKGYpKW0ubWVyZ2UocCxmLm5vZGVUeXBlP1tmXTpmKTtlbHNlIGlmKGxhLnRlc3QoZikpe2g9aHx8by5hcHBlbmRDaGlsZChiLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLGk9KGphLmV4ZWMoZil8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpLGw9cmFbaV18fHJhLl9kZWZhdWx0LGguaW5uZXJIVE1MPWxbMV0rZi5yZXBsYWNlKGlhLFwiPCQxPjwvJDI+XCIpK2xbMl0sZT1sWzBdO3doaWxlKGUtLSloPWgubGFzdENoaWxkO2lmKCFrLmxlYWRpbmdXaGl0ZXNwYWNlJiZoYS50ZXN0KGYpJiZwLnB1c2goYi5jcmVhdGVUZXh0Tm9kZShoYS5leGVjKGYpWzBdKSksIWsudGJvZHkpe2Y9XCJ0YWJsZVwiIT09aXx8a2EudGVzdChmKT9cIjx0YWJsZT5cIiE9PWxbMV18fGthLnRlc3QoZik/MDpoOmguZmlyc3RDaGlsZCxlPWYmJmYuY2hpbGROb2Rlcy5sZW5ndGg7d2hpbGUoZS0tKW0ubm9kZU5hbWUoaj1mLmNoaWxkTm9kZXNbZV0sXCJ0Ym9keVwiKSYmIWouY2hpbGROb2Rlcy5sZW5ndGgmJmYucmVtb3ZlQ2hpbGQoail9bS5tZXJnZShwLGguY2hpbGROb2RlcyksaC50ZXh0Q29udGVudD1cIlwiO3doaWxlKGguZmlyc3RDaGlsZCloLnJlbW92ZUNoaWxkKGguZmlyc3RDaGlsZCk7aD1vLmxhc3RDaGlsZH1lbHNlIHAucHVzaChiLmNyZWF0ZVRleHROb2RlKGYpKTtoJiZvLnJlbW92ZUNoaWxkKGgpLGsuYXBwZW5kQ2hlY2tlZHx8bS5ncmVwKHVhKHAsXCJpbnB1dFwiKSx2YSkscT0wO3doaWxlKGY9cFtxKytdKWlmKCghZHx8LTE9PT1tLmluQXJyYXkoZixkKSkmJihnPW0uY29udGFpbnMoZi5vd25lckRvY3VtZW50LGYpLGg9dWEoby5hcHBlbmRDaGlsZChmKSxcInNjcmlwdFwiKSxnJiZ6YShoKSxjKSl7ZT0wO3doaWxlKGY9aFtlKytdKW9hLnRlc3QoZi50eXBlfHxcIlwiKSYmYy5wdXNoKGYpfXJldHVybiBoPW51bGwsb30sY2xlYW5EYXRhOmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBkLGUsZixnLGg9MCxpPW0uZXhwYW5kbyxqPW0uY2FjaGUsbD1rLmRlbGV0ZUV4cGFuZG8sbj1tLmV2ZW50LnNwZWNpYWw7bnVsbCE9KGQ9YVtoXSk7aCsrKWlmKChifHxtLmFjY2VwdERhdGEoZCkpJiYoZj1kW2ldLGc9ZiYmaltmXSkpe2lmKGcuZXZlbnRzKWZvcihlIGluIGcuZXZlbnRzKW5bZV0/bS5ldmVudC5yZW1vdmUoZCxlKTptLnJlbW92ZUV2ZW50KGQsZSxnLmhhbmRsZSk7altmXSYmKGRlbGV0ZSBqW2ZdLGw/ZGVsZXRlIGRbaV06dHlwZW9mIGQucmVtb3ZlQXR0cmlidXRlIT09Sz9kLnJlbW92ZUF0dHJpYnV0ZShpKTpkW2ldPW51bGwsYy5wdXNoKGYpKX19fSksbS5mbi5leHRlbmQoe3RleHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIFYodGhpcyxmdW5jdGlvbihhKXtyZXR1cm4gdm9pZCAwPT09YT9tLnRleHQodGhpcyk6dGhpcy5lbXB0eSgpLmFwcGVuZCgodGhpc1swXSYmdGhpc1swXS5vd25lckRvY3VtZW50fHx5KS5jcmVhdGVUZXh0Tm9kZShhKSl9LG51bGwsYSxhcmd1bWVudHMubGVuZ3RoKX0sYXBwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZG9tTWFuaXAoYXJndW1lbnRzLGZ1bmN0aW9uKGEpe2lmKDE9PT10aGlzLm5vZGVUeXBlfHwxMT09PXRoaXMubm9kZVR5cGV8fDk9PT10aGlzLm5vZGVUeXBlKXt2YXIgYj13YSh0aGlzLGEpO2IuYXBwZW5kQ2hpbGQoYSl9fSl9LHByZXBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kb21NYW5pcChhcmd1bWVudHMsZnVuY3Rpb24oYSl7aWYoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpe3ZhciBiPXdhKHRoaXMsYSk7Yi5pbnNlcnRCZWZvcmUoYSxiLmZpcnN0Q2hpbGQpfX0pfSxiZWZvcmU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kb21NYW5pcChhcmd1bWVudHMsZnVuY3Rpb24oYSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsdGhpcyl9KX0sYWZ0ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kb21NYW5pcChhcmd1bWVudHMsZnVuY3Rpb24oYSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsdGhpcy5uZXh0U2libGluZyl9KX0scmVtb3ZlOmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjLGQ9YT9tLmZpbHRlcihhLHRoaXMpOnRoaXMsZT0wO251bGwhPShjPWRbZV0pO2UrKylifHwxIT09Yy5ub2RlVHlwZXx8bS5jbGVhbkRhdGEodWEoYykpLGMucGFyZW50Tm9kZSYmKGImJm0uY29udGFpbnMoYy5vd25lckRvY3VtZW50LGMpJiZ6YSh1YShjLFwic2NyaXB0XCIpKSxjLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYykpO3JldHVybiB0aGlzfSxlbXB0eTpmdW5jdGlvbigpe2Zvcih2YXIgYSxiPTA7bnVsbCE9KGE9dGhpc1tiXSk7YisrKXsxPT09YS5ub2RlVHlwZSYmbS5jbGVhbkRhdGEodWEoYSwhMSkpO3doaWxlKGEuZmlyc3RDaGlsZClhLnJlbW92ZUNoaWxkKGEuZmlyc3RDaGlsZCk7YS5vcHRpb25zJiZtLm5vZGVOYW1lKGEsXCJzZWxlY3RcIikmJihhLm9wdGlvbnMubGVuZ3RoPTApfXJldHVybiB0aGlzfSxjbG9uZTpmdW5jdGlvbihhLGIpe3JldHVybiBhPW51bGw9PWE/ITE6YSxiPW51bGw9PWI/YTpiLHRoaXMubWFwKGZ1bmN0aW9uKCl7cmV0dXJuIG0uY2xvbmUodGhpcyxhLGIpfSl9LGh0bWw6ZnVuY3Rpb24oYSl7cmV0dXJuIFYodGhpcyxmdW5jdGlvbihhKXt2YXIgYj10aGlzWzBdfHx7fSxjPTAsZD10aGlzLmxlbmd0aDtpZih2b2lkIDA9PT1hKXJldHVybiAxPT09Yi5ub2RlVHlwZT9iLmlubmVySFRNTC5yZXBsYWNlKGZhLFwiXCIpOnZvaWQgMDtpZighKFwic3RyaW5nXCIhPXR5cGVvZiBhfHxtYS50ZXN0KGEpfHwhay5odG1sU2VyaWFsaXplJiZnYS50ZXN0KGEpfHwhay5sZWFkaW5nV2hpdGVzcGFjZSYmaGEudGVzdChhKXx8cmFbKGphLmV4ZWMoYSl8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpXSkpe2E9YS5yZXBsYWNlKGlhLFwiPCQxPjwvJDI+XCIpO3RyeXtmb3IoO2Q+YztjKyspYj10aGlzW2NdfHx7fSwxPT09Yi5ub2RlVHlwZSYmKG0uY2xlYW5EYXRhKHVhKGIsITEpKSxiLmlubmVySFRNTD1hKTtiPTB9Y2F0Y2goZSl7fX1iJiZ0aGlzLmVtcHR5KCkuYXBwZW5kKGEpfSxudWxsLGEsYXJndW1lbnRzLmxlbmd0aCl9LHJlcGxhY2VXaXRoOmZ1bmN0aW9uKCl7dmFyIGE9YXJndW1lbnRzWzBdO3JldHVybiB0aGlzLmRvbU1hbmlwKGFyZ3VtZW50cyxmdW5jdGlvbihiKXthPXRoaXMucGFyZW50Tm9kZSxtLmNsZWFuRGF0YSh1YSh0aGlzKSksYSYmYS5yZXBsYWNlQ2hpbGQoYix0aGlzKX0pLGEmJihhLmxlbmd0aHx8YS5ub2RlVHlwZSk/dGhpczp0aGlzLnJlbW92ZSgpfSxkZXRhY2g6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucmVtb3ZlKGEsITApfSxkb21NYW5pcDpmdW5jdGlvbihhLGIpe2E9ZS5hcHBseShbXSxhKTt2YXIgYyxkLGYsZyxoLGksaj0wLGw9dGhpcy5sZW5ndGgsbj10aGlzLG89bC0xLHA9YVswXSxxPW0uaXNGdW5jdGlvbihwKTtpZihxfHxsPjEmJlwic3RyaW5nXCI9PXR5cGVvZiBwJiYhay5jaGVja0Nsb25lJiZuYS50ZXN0KHApKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYyl7dmFyIGQ9bi5lcShjKTtxJiYoYVswXT1wLmNhbGwodGhpcyxjLGQuaHRtbCgpKSksZC5kb21NYW5pcChhLGIpfSk7aWYobCYmKGk9bS5idWlsZEZyYWdtZW50KGEsdGhpc1swXS5vd25lckRvY3VtZW50LCExLHRoaXMpLGM9aS5maXJzdENoaWxkLDE9PT1pLmNoaWxkTm9kZXMubGVuZ3RoJiYoaT1jKSxjKSl7Zm9yKGc9bS5tYXAodWEoaSxcInNjcmlwdFwiKSx4YSksZj1nLmxlbmd0aDtsPmo7aisrKWQ9aSxqIT09byYmKGQ9bS5jbG9uZShkLCEwLCEwKSxmJiZtLm1lcmdlKGcsdWEoZCxcInNjcmlwdFwiKSkpLGIuY2FsbCh0aGlzW2pdLGQsaik7aWYoZilmb3IoaD1nW2cubGVuZ3RoLTFdLm93bmVyRG9jdW1lbnQsbS5tYXAoZyx5YSksaj0wO2Y+ajtqKyspZD1nW2pdLG9hLnRlc3QoZC50eXBlfHxcIlwiKSYmIW0uX2RhdGEoZCxcImdsb2JhbEV2YWxcIikmJm0uY29udGFpbnMoaCxkKSYmKGQuc3JjP20uX2V2YWxVcmwmJm0uX2V2YWxVcmwoZC5zcmMpOm0uZ2xvYmFsRXZhbCgoZC50ZXh0fHxkLnRleHRDb250ZW50fHxkLmlubmVySFRNTHx8XCJcIikucmVwbGFjZShxYSxcIlwiKSkpO2k9Yz1udWxsfXJldHVybiB0aGlzfX0pLG0uZWFjaCh7YXBwZW5kVG86XCJhcHBlbmRcIixwcmVwZW5kVG86XCJwcmVwZW5kXCIsaW5zZXJ0QmVmb3JlOlwiYmVmb3JlXCIsaW5zZXJ0QWZ0ZXI6XCJhZnRlclwiLHJlcGxhY2VBbGw6XCJyZXBsYWNlV2l0aFwifSxmdW5jdGlvbihhLGIpe20uZm5bYV09ZnVuY3Rpb24oYSl7Zm9yKHZhciBjLGQ9MCxlPVtdLGc9bShhKSxoPWcubGVuZ3RoLTE7aD49ZDtkKyspYz1kPT09aD90aGlzOnRoaXMuY2xvbmUoITApLG0oZ1tkXSlbYl0oYyksZi5hcHBseShlLGMuZ2V0KCkpO3JldHVybiB0aGlzLnB1c2hTdGFjayhlKX19KTt2YXIgQ2EsRGE9e307ZnVuY3Rpb24gRWEoYixjKXt2YXIgZCxlPW0oYy5jcmVhdGVFbGVtZW50KGIpKS5hcHBlbmRUbyhjLmJvZHkpLGY9YS5nZXREZWZhdWx0Q29tcHV0ZWRTdHlsZSYmKGQ9YS5nZXREZWZhdWx0Q29tcHV0ZWRTdHlsZShlWzBdKSk/ZC5kaXNwbGF5Om0uY3NzKGVbMF0sXCJkaXNwbGF5XCIpO3JldHVybiBlLmRldGFjaCgpLGZ9ZnVuY3Rpb24gRmEoYSl7dmFyIGI9eSxjPURhW2FdO3JldHVybiBjfHwoYz1FYShhLGIpLFwibm9uZVwiIT09YyYmY3x8KENhPShDYXx8bShcIjxpZnJhbWUgZnJhbWVib3JkZXI9JzAnIHdpZHRoPScwJyBoZWlnaHQ9JzAnLz5cIikpLmFwcGVuZFRvKGIuZG9jdW1lbnRFbGVtZW50KSxiPShDYVswXS5jb250ZW50V2luZG93fHxDYVswXS5jb250ZW50RG9jdW1lbnQpLmRvY3VtZW50LGIud3JpdGUoKSxiLmNsb3NlKCksYz1FYShhLGIpLENhLmRldGFjaCgpKSxEYVthXT1jKSxjfSFmdW5jdGlvbigpe3ZhciBhO2suc2hyaW5rV3JhcEJsb2Nrcz1mdW5jdGlvbigpe2lmKG51bGwhPWEpcmV0dXJuIGE7YT0hMTt2YXIgYixjLGQ7cmV0dXJuIGM9eS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0sYyYmYy5zdHlsZT8oYj15LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksZD15LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksZC5zdHlsZS5jc3NUZXh0PVwicG9zaXRpb246YWJzb2x1dGU7Ym9yZGVyOjA7d2lkdGg6MDtoZWlnaHQ6MDt0b3A6MDtsZWZ0Oi05OTk5cHhcIixjLmFwcGVuZENoaWxkKGQpLmFwcGVuZENoaWxkKGIpLHR5cGVvZiBiLnN0eWxlLnpvb20hPT1LJiYoYi5zdHlsZS5jc3NUZXh0PVwiLXdlYmtpdC1ib3gtc2l6aW5nOmNvbnRlbnQtYm94Oy1tb3otYm94LXNpemluZzpjb250ZW50LWJveDtib3gtc2l6aW5nOmNvbnRlbnQtYm94O2Rpc3BsYXk6YmxvY2s7bWFyZ2luOjA7Ym9yZGVyOjA7cGFkZGluZzoxcHg7d2lkdGg6MXB4O3pvb206MVwiLGIuYXBwZW5kQ2hpbGQoeS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKS5zdHlsZS53aWR0aD1cIjVweFwiLGE9MyE9PWIub2Zmc2V0V2lkdGgpLGMucmVtb3ZlQ2hpbGQoZCksYSk6dm9pZCAwfX0oKTt2YXIgR2E9L15tYXJnaW4vLEhhPW5ldyBSZWdFeHAoXCJeKFwiK1MrXCIpKD8hcHgpW2EteiVdKyRcIixcImlcIiksSWEsSmEsS2E9L14odG9wfHJpZ2h0fGJvdHRvbXxsZWZ0KSQvO2EuZ2V0Q29tcHV0ZWRTdHlsZT8oSWE9ZnVuY3Rpb24oYil7cmV0dXJuIGIub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5vcGVuZXI/Yi5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUoYixudWxsKTphLmdldENvbXB1dGVkU3R5bGUoYixudWxsKX0sSmE9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZixnLGg9YS5zdHlsZTtyZXR1cm4gYz1jfHxJYShhKSxnPWM/Yy5nZXRQcm9wZXJ0eVZhbHVlKGIpfHxjW2JdOnZvaWQgMCxjJiYoXCJcIiE9PWd8fG0uY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpfHwoZz1tLnN0eWxlKGEsYikpLEhhLnRlc3QoZykmJkdhLnRlc3QoYikmJihkPWgud2lkdGgsZT1oLm1pbldpZHRoLGY9aC5tYXhXaWR0aCxoLm1pbldpZHRoPWgubWF4V2lkdGg9aC53aWR0aD1nLGc9Yy53aWR0aCxoLndpZHRoPWQsaC5taW5XaWR0aD1lLGgubWF4V2lkdGg9ZikpLHZvaWQgMD09PWc/ZzpnK1wiXCJ9KTp5LmRvY3VtZW50RWxlbWVudC5jdXJyZW50U3R5bGUmJihJYT1mdW5jdGlvbihhKXtyZXR1cm4gYS5jdXJyZW50U3R5bGV9LEphPWZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZyxoPWEuc3R5bGU7cmV0dXJuIGM9Y3x8SWEoYSksZz1jP2NbYl06dm9pZCAwLG51bGw9PWcmJmgmJmhbYl0mJihnPWhbYl0pLEhhLnRlc3QoZykmJiFLYS50ZXN0KGIpJiYoZD1oLmxlZnQsZT1hLnJ1bnRpbWVTdHlsZSxmPWUmJmUubGVmdCxmJiYoZS5sZWZ0PWEuY3VycmVudFN0eWxlLmxlZnQpLGgubGVmdD1cImZvbnRTaXplXCI9PT1iP1wiMWVtXCI6ZyxnPWgucGl4ZWxMZWZ0K1wicHhcIixoLmxlZnQ9ZCxmJiYoZS5sZWZ0PWYpKSx2b2lkIDA9PT1nP2c6ZytcIlwifHxcImF1dG9cIn0pO2Z1bmN0aW9uIExhKGEsYil7cmV0dXJue2dldDpmdW5jdGlvbigpe3ZhciBjPWEoKTtpZihudWxsIT1jKXJldHVybiBjP3ZvaWQgZGVsZXRlIHRoaXMuZ2V0Oih0aGlzLmdldD1iKS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX0hZnVuY3Rpb24oKXt2YXIgYixjLGQsZSxmLGcsaDtpZihiPXkuY3JlYXRlRWxlbWVudChcImRpdlwiKSxiLmlubmVySFRNTD1cIiAgPGxpbmsvPjx0YWJsZT48L3RhYmxlPjxhIGhyZWY9Jy9hJz5hPC9hPjxpbnB1dCB0eXBlPSdjaGVja2JveCcvPlwiLGQ9Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShcImFcIilbMF0sYz1kJiZkLnN0eWxlKXtjLmNzc1RleHQ9XCJmbG9hdDpsZWZ0O29wYWNpdHk6LjVcIixrLm9wYWNpdHk9XCIwLjVcIj09PWMub3BhY2l0eSxrLmNzc0Zsb2F0PSEhYy5jc3NGbG9hdCxiLnN0eWxlLmJhY2tncm91bmRDbGlwPVwiY29udGVudC1ib3hcIixiLmNsb25lTm9kZSghMCkuc3R5bGUuYmFja2dyb3VuZENsaXA9XCJcIixrLmNsZWFyQ2xvbmVTdHlsZT1cImNvbnRlbnQtYm94XCI9PT1iLnN0eWxlLmJhY2tncm91bmRDbGlwLGsuYm94U2l6aW5nPVwiXCI9PT1jLmJveFNpemluZ3x8XCJcIj09PWMuTW96Qm94U2l6aW5nfHxcIlwiPT09Yy5XZWJraXRCb3hTaXppbmcsbS5leHRlbmQoayx7cmVsaWFibGVIaWRkZW5PZmZzZXRzOmZ1bmN0aW9uKCl7cmV0dXJuIG51bGw9PWcmJmkoKSxnfSxib3hTaXppbmdSZWxpYWJsZTpmdW5jdGlvbigpe3JldHVybiBudWxsPT1mJiZpKCksZn0scGl4ZWxQb3NpdGlvbjpmdW5jdGlvbigpe3JldHVybiBudWxsPT1lJiZpKCksZX0scmVsaWFibGVNYXJnaW5SaWdodDpmdW5jdGlvbigpe3JldHVybiBudWxsPT1oJiZpKCksaH19KTtmdW5jdGlvbiBpKCl7dmFyIGIsYyxkLGk7Yz15LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXSxjJiZjLnN0eWxlJiYoYj15LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksZD15LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksZC5zdHlsZS5jc3NUZXh0PVwicG9zaXRpb246YWJzb2x1dGU7Ym9yZGVyOjA7d2lkdGg6MDtoZWlnaHQ6MDt0b3A6MDtsZWZ0Oi05OTk5cHhcIixjLmFwcGVuZENoaWxkKGQpLmFwcGVuZENoaWxkKGIpLGIuc3R5bGUuY3NzVGV4dD1cIi13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94Oy1tb3otYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OmJsb2NrO21hcmdpbi10b3A6MSU7dG9wOjElO2JvcmRlcjoxcHg7cGFkZGluZzoxcHg7d2lkdGg6NHB4O3Bvc2l0aW9uOmFic29sdXRlXCIsZT1mPSExLGg9ITAsYS5nZXRDb21wdXRlZFN0eWxlJiYoZT1cIjElXCIhPT0oYS5nZXRDb21wdXRlZFN0eWxlKGIsbnVsbCl8fHt9KS50b3AsZj1cIjRweFwiPT09KGEuZ2V0Q29tcHV0ZWRTdHlsZShiLG51bGwpfHx7d2lkdGg6XCI0cHhcIn0pLndpZHRoLGk9Yi5hcHBlbmRDaGlsZCh5LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLGkuc3R5bGUuY3NzVGV4dD1iLnN0eWxlLmNzc1RleHQ9XCItd2Via2l0LWJveC1zaXppbmc6Y29udGVudC1ib3g7LW1vei1ib3gtc2l6aW5nOmNvbnRlbnQtYm94O2JveC1zaXppbmc6Y29udGVudC1ib3g7ZGlzcGxheTpibG9jazttYXJnaW46MDtib3JkZXI6MDtwYWRkaW5nOjBcIixpLnN0eWxlLm1hcmdpblJpZ2h0PWkuc3R5bGUud2lkdGg9XCIwXCIsYi5zdHlsZS53aWR0aD1cIjFweFwiLGg9IXBhcnNlRmxvYXQoKGEuZ2V0Q29tcHV0ZWRTdHlsZShpLG51bGwpfHx7fSkubWFyZ2luUmlnaHQpLGIucmVtb3ZlQ2hpbGQoaSkpLGIuaW5uZXJIVE1MPVwiPHRhYmxlPjx0cj48dGQ+PC90ZD48dGQ+dDwvdGQ+PC90cj48L3RhYmxlPlwiLGk9Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRkXCIpLGlbMF0uc3R5bGUuY3NzVGV4dD1cIm1hcmdpbjowO2JvcmRlcjowO3BhZGRpbmc6MDtkaXNwbGF5Om5vbmVcIixnPTA9PT1pWzBdLm9mZnNldEhlaWdodCxnJiYoaVswXS5zdHlsZS5kaXNwbGF5PVwiXCIsaVsxXS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLGc9MD09PWlbMF0ub2Zmc2V0SGVpZ2h0KSxjLnJlbW92ZUNoaWxkKGQpKX19fSgpLG0uc3dhcD1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZSxmLGc9e307Zm9yKGYgaW4gYilnW2ZdPWEuc3R5bGVbZl0sYS5zdHlsZVtmXT1iW2ZdO2U9Yy5hcHBseShhLGR8fFtdKTtmb3IoZiBpbiBiKWEuc3R5bGVbZl09Z1tmXTtyZXR1cm4gZX07dmFyIE1hPS9hbHBoYVxcKFteKV0qXFwpL2ksTmE9L29wYWNpdHlcXHMqPVxccyooW14pXSopLyxPYT0vXihub25lfHRhYmxlKD8hLWNbZWFdKS4rKS8sUGE9bmV3IFJlZ0V4cChcIl4oXCIrUytcIikoLiopJFwiLFwiaVwiKSxRYT1uZXcgUmVnRXhwKFwiXihbKy1dKT0oXCIrUytcIilcIixcImlcIiksUmE9e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix2aXNpYmlsaXR5OlwiaGlkZGVuXCIsZGlzcGxheTpcImJsb2NrXCJ9LFNhPXtsZXR0ZXJTcGFjaW5nOlwiMFwiLGZvbnRXZWlnaHQ6XCI0MDBcIn0sVGE9W1wiV2Via2l0XCIsXCJPXCIsXCJNb3pcIixcIm1zXCJdO2Z1bmN0aW9uIFVhKGEsYil7aWYoYiBpbiBhKXJldHVybiBiO3ZhciBjPWIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrYi5zbGljZSgxKSxkPWIsZT1UYS5sZW5ndGg7d2hpbGUoZS0tKWlmKGI9VGFbZV0rYyxiIGluIGEpcmV0dXJuIGI7cmV0dXJuIGR9ZnVuY3Rpb24gVmEoYSxiKXtmb3IodmFyIGMsZCxlLGY9W10sZz0wLGg9YS5sZW5ndGg7aD5nO2crKylkPWFbZ10sZC5zdHlsZSYmKGZbZ109bS5fZGF0YShkLFwib2xkZGlzcGxheVwiKSxjPWQuc3R5bGUuZGlzcGxheSxiPyhmW2ddfHxcIm5vbmVcIiE9PWN8fChkLnN0eWxlLmRpc3BsYXk9XCJcIiksXCJcIj09PWQuc3R5bGUuZGlzcGxheSYmVShkKSYmKGZbZ109bS5fZGF0YShkLFwib2xkZGlzcGxheVwiLEZhKGQubm9kZU5hbWUpKSkpOihlPVUoZCksKGMmJlwibm9uZVwiIT09Y3x8IWUpJiZtLl9kYXRhKGQsXCJvbGRkaXNwbGF5XCIsZT9jOm0uY3NzKGQsXCJkaXNwbGF5XCIpKSkpO2ZvcihnPTA7aD5nO2crKylkPWFbZ10sZC5zdHlsZSYmKGImJlwibm9uZVwiIT09ZC5zdHlsZS5kaXNwbGF5JiZcIlwiIT09ZC5zdHlsZS5kaXNwbGF5fHwoZC5zdHlsZS5kaXNwbGF5PWI/ZltnXXx8XCJcIjpcIm5vbmVcIikpO3JldHVybiBhfWZ1bmN0aW9uIFdhKGEsYixjKXt2YXIgZD1QYS5leGVjKGIpO3JldHVybiBkP01hdGgubWF4KDAsZFsxXS0oY3x8MCkpKyhkWzJdfHxcInB4XCIpOmJ9ZnVuY3Rpb24gWGEoYSxiLGMsZCxlKXtmb3IodmFyIGY9Yz09PShkP1wiYm9yZGVyXCI6XCJjb250ZW50XCIpPzQ6XCJ3aWR0aFwiPT09Yj8xOjAsZz0wOzQ+ZjtmKz0yKVwibWFyZ2luXCI9PT1jJiYoZys9bS5jc3MoYSxjK1RbZl0sITAsZSkpLGQ/KFwiY29udGVudFwiPT09YyYmKGctPW0uY3NzKGEsXCJwYWRkaW5nXCIrVFtmXSwhMCxlKSksXCJtYXJnaW5cIiE9PWMmJihnLT1tLmNzcyhhLFwiYm9yZGVyXCIrVFtmXStcIldpZHRoXCIsITAsZSkpKTooZys9bS5jc3MoYSxcInBhZGRpbmdcIitUW2ZdLCEwLGUpLFwicGFkZGluZ1wiIT09YyYmKGcrPW0uY3NzKGEsXCJib3JkZXJcIitUW2ZdK1wiV2lkdGhcIiwhMCxlKSkpO3JldHVybiBnfWZ1bmN0aW9uIFlhKGEsYixjKXt2YXIgZD0hMCxlPVwid2lkdGhcIj09PWI/YS5vZmZzZXRXaWR0aDphLm9mZnNldEhlaWdodCxmPUlhKGEpLGc9ay5ib3hTaXppbmcmJlwiYm9yZGVyLWJveFwiPT09bS5jc3MoYSxcImJveFNpemluZ1wiLCExLGYpO2lmKDA+PWV8fG51bGw9PWUpe2lmKGU9SmEoYSxiLGYpLCgwPmV8fG51bGw9PWUpJiYoZT1hLnN0eWxlW2JdKSxIYS50ZXN0KGUpKXJldHVybiBlO2Q9ZyYmKGsuYm94U2l6aW5nUmVsaWFibGUoKXx8ZT09PWEuc3R5bGVbYl0pLGU9cGFyc2VGbG9hdChlKXx8MH1yZXR1cm4gZStYYShhLGIsY3x8KGc/XCJib3JkZXJcIjpcImNvbnRlbnRcIiksZCxmKStcInB4XCJ9bS5leHRlbmQoe2Nzc0hvb2tzOntvcGFjaXR5OntnZXQ6ZnVuY3Rpb24oYSxiKXtpZihiKXt2YXIgYz1KYShhLFwib3BhY2l0eVwiKTtyZXR1cm5cIlwiPT09Yz9cIjFcIjpjfX19fSxjc3NOdW1iZXI6e2NvbHVtbkNvdW50OiEwLGZpbGxPcGFjaXR5OiEwLGZsZXhHcm93OiEwLGZsZXhTaHJpbms6ITAsZm9udFdlaWdodDohMCxsaW5lSGVpZ2h0OiEwLG9wYWNpdHk6ITAsb3JkZXI6ITAsb3JwaGFuczohMCx3aWRvd3M6ITAsekluZGV4OiEwLHpvb206ITB9LGNzc1Byb3BzOntcImZsb2F0XCI6ay5jc3NGbG9hdD9cImNzc0Zsb2F0XCI6XCJzdHlsZUZsb2F0XCJ9LHN0eWxlOmZ1bmN0aW9uKGEsYixjLGQpe2lmKGEmJjMhPT1hLm5vZGVUeXBlJiY4IT09YS5ub2RlVHlwZSYmYS5zdHlsZSl7dmFyIGUsZixnLGg9bS5jYW1lbENhc2UoYiksaT1hLnN0eWxlO2lmKGI9bS5jc3NQcm9wc1toXXx8KG0uY3NzUHJvcHNbaF09VWEoaSxoKSksZz1tLmNzc0hvb2tzW2JdfHxtLmNzc0hvb2tzW2hdLHZvaWQgMD09PWMpcmV0dXJuIGcmJlwiZ2V0XCJpbiBnJiZ2b2lkIDAhPT0oZT1nLmdldChhLCExLGQpKT9lOmlbYl07aWYoZj10eXBlb2YgYyxcInN0cmluZ1wiPT09ZiYmKGU9UWEuZXhlYyhjKSkmJihjPShlWzFdKzEpKmVbMl0rcGFyc2VGbG9hdChtLmNzcyhhLGIpKSxmPVwibnVtYmVyXCIpLG51bGwhPWMmJmM9PT1jJiYoXCJudW1iZXJcIiE9PWZ8fG0uY3NzTnVtYmVyW2hdfHwoYys9XCJweFwiKSxrLmNsZWFyQ2xvbmVTdHlsZXx8XCJcIiE9PWN8fDAhPT1iLmluZGV4T2YoXCJiYWNrZ3JvdW5kXCIpfHwoaVtiXT1cImluaGVyaXRcIiksIShnJiZcInNldFwiaW4gZyYmdm9pZCAwPT09KGM9Zy5zZXQoYSxjLGQpKSkpKXRyeXtpW2JdPWN9Y2F0Y2goail7fX19LGNzczpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZSxmLGcsaD1tLmNhbWVsQ2FzZShiKTtyZXR1cm4gYj1tLmNzc1Byb3BzW2hdfHwobS5jc3NQcm9wc1toXT1VYShhLnN0eWxlLGgpKSxnPW0uY3NzSG9va3NbYl18fG0uY3NzSG9va3NbaF0sZyYmXCJnZXRcImluIGcmJihmPWcuZ2V0KGEsITAsYykpLHZvaWQgMD09PWYmJihmPUphKGEsYixkKSksXCJub3JtYWxcIj09PWYmJmIgaW4gU2EmJihmPVNhW2JdKSxcIlwiPT09Y3x8Yz8oZT1wYXJzZUZsb2F0KGYpLGM9PT0hMHx8bS5pc051bWVyaWMoZSk/ZXx8MDpmKTpmfX0pLG0uZWFjaChbXCJoZWlnaHRcIixcIndpZHRoXCJdLGZ1bmN0aW9uKGEsYil7bS5jc3NIb29rc1tiXT17Z2V0OmZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4gYz9PYS50ZXN0KG0uY3NzKGEsXCJkaXNwbGF5XCIpKSYmMD09PWEub2Zmc2V0V2lkdGg/bS5zd2FwKGEsUmEsZnVuY3Rpb24oKXtyZXR1cm4gWWEoYSxiLGQpfSk6WWEoYSxiLGQpOnZvaWQgMH0sc2V0OmZ1bmN0aW9uKGEsYyxkKXt2YXIgZT1kJiZJYShhKTtyZXR1cm4gV2EoYSxjLGQ/WGEoYSxiLGQsay5ib3hTaXppbmcmJlwiYm9yZGVyLWJveFwiPT09bS5jc3MoYSxcImJveFNpemluZ1wiLCExLGUpLGUpOjApfX19KSxrLm9wYWNpdHl8fChtLmNzc0hvb2tzLm9wYWNpdHk9e2dldDpmdW5jdGlvbihhLGIpe3JldHVybiBOYS50ZXN0KChiJiZhLmN1cnJlbnRTdHlsZT9hLmN1cnJlbnRTdHlsZS5maWx0ZXI6YS5zdHlsZS5maWx0ZXIpfHxcIlwiKT8uMDEqcGFyc2VGbG9hdChSZWdFeHAuJDEpK1wiXCI6Yj9cIjFcIjpcIlwifSxzZXQ6ZnVuY3Rpb24oYSxiKXt2YXIgYz1hLnN0eWxlLGQ9YS5jdXJyZW50U3R5bGUsZT1tLmlzTnVtZXJpYyhiKT9cImFscGhhKG9wYWNpdHk9XCIrMTAwKmIrXCIpXCI6XCJcIixmPWQmJmQuZmlsdGVyfHxjLmZpbHRlcnx8XCJcIjtjLnpvb209MSwoYj49MXx8XCJcIj09PWIpJiZcIlwiPT09bS50cmltKGYucmVwbGFjZShNYSxcIlwiKSkmJmMucmVtb3ZlQXR0cmlidXRlJiYoYy5yZW1vdmVBdHRyaWJ1dGUoXCJmaWx0ZXJcIiksXCJcIj09PWJ8fGQmJiFkLmZpbHRlcil8fChjLmZpbHRlcj1NYS50ZXN0KGYpP2YucmVwbGFjZShNYSxlKTpmK1wiIFwiK2UpfX0pLG0uY3NzSG9va3MubWFyZ2luUmlnaHQ9TGEoay5yZWxpYWJsZU1hcmdpblJpZ2h0LGZ1bmN0aW9uKGEsYil7cmV0dXJuIGI/bS5zd2FwKGEse2Rpc3BsYXk6XCJpbmxpbmUtYmxvY2tcIn0sSmEsW2EsXCJtYXJnaW5SaWdodFwiXSk6dm9pZCAwfSksbS5lYWNoKHttYXJnaW46XCJcIixwYWRkaW5nOlwiXCIsYm9yZGVyOlwiV2lkdGhcIn0sZnVuY3Rpb24oYSxiKXttLmNzc0hvb2tzW2ErYl09e2V4cGFuZDpmdW5jdGlvbihjKXtmb3IodmFyIGQ9MCxlPXt9LGY9XCJzdHJpbmdcIj09dHlwZW9mIGM/Yy5zcGxpdChcIiBcIik6W2NdOzQ+ZDtkKyspZVthK1RbZF0rYl09ZltkXXx8ZltkLTJdfHxmWzBdO3JldHVybiBlfX0sR2EudGVzdChhKXx8KG0uY3NzSG9va3NbYStiXS5zZXQ9V2EpfSksbS5mbi5leHRlbmQoe2NzczpmdW5jdGlvbihhLGIpe3JldHVybiBWKHRoaXMsZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZj17fSxnPTA7aWYobS5pc0FycmF5KGIpKXtmb3IoZD1JYShhKSxlPWIubGVuZ3RoO2U+ZztnKyspZltiW2ddXT1tLmNzcyhhLGJbZ10sITEsZCk7cmV0dXJuIGZ9cmV0dXJuIHZvaWQgMCE9PWM/bS5zdHlsZShhLGIsYyk6bS5jc3MoYSxiKX0sYSxiLGFyZ3VtZW50cy5sZW5ndGg+MSl9LHNob3c6ZnVuY3Rpb24oKXtyZXR1cm4gVmEodGhpcywhMCl9LGhpZGU6ZnVuY3Rpb24oKXtyZXR1cm4gVmEodGhpcyl9LHRvZ2dsZTpmdW5jdGlvbihhKXtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGE/YT90aGlzLnNob3coKTp0aGlzLmhpZGUoKTp0aGlzLmVhY2goZnVuY3Rpb24oKXtVKHRoaXMpP20odGhpcykuc2hvdygpOm0odGhpcykuaGlkZSgpfSl9fSk7ZnVuY3Rpb24gWmEoYSxiLGMsZCxlKXtcbnJldHVybiBuZXcgWmEucHJvdG90eXBlLmluaXQoYSxiLGMsZCxlKX1tLlR3ZWVuPVphLFphLnByb3RvdHlwZT17Y29uc3RydWN0b3I6WmEsaW5pdDpmdW5jdGlvbihhLGIsYyxkLGUsZil7dGhpcy5lbGVtPWEsdGhpcy5wcm9wPWMsdGhpcy5lYXNpbmc9ZXx8XCJzd2luZ1wiLHRoaXMub3B0aW9ucz1iLHRoaXMuc3RhcnQ9dGhpcy5ub3c9dGhpcy5jdXIoKSx0aGlzLmVuZD1kLHRoaXMudW5pdD1mfHwobS5jc3NOdW1iZXJbY10/XCJcIjpcInB4XCIpfSxjdXI6ZnVuY3Rpb24oKXt2YXIgYT1aYS5wcm9wSG9va3NbdGhpcy5wcm9wXTtyZXR1cm4gYSYmYS5nZXQ/YS5nZXQodGhpcyk6WmEucHJvcEhvb2tzLl9kZWZhdWx0LmdldCh0aGlzKX0scnVuOmZ1bmN0aW9uKGEpe3ZhciBiLGM9WmEucHJvcEhvb2tzW3RoaXMucHJvcF07cmV0dXJuIHRoaXMub3B0aW9ucy5kdXJhdGlvbj90aGlzLnBvcz1iPW0uZWFzaW5nW3RoaXMuZWFzaW5nXShhLHRoaXMub3B0aW9ucy5kdXJhdGlvbiphLDAsMSx0aGlzLm9wdGlvbnMuZHVyYXRpb24pOnRoaXMucG9zPWI9YSx0aGlzLm5vdz0odGhpcy5lbmQtdGhpcy5zdGFydCkqYit0aGlzLnN0YXJ0LHRoaXMub3B0aW9ucy5zdGVwJiZ0aGlzLm9wdGlvbnMuc3RlcC5jYWxsKHRoaXMuZWxlbSx0aGlzLm5vdyx0aGlzKSxjJiZjLnNldD9jLnNldCh0aGlzKTpaYS5wcm9wSG9va3MuX2RlZmF1bHQuc2V0KHRoaXMpLHRoaXN9fSxaYS5wcm90b3R5cGUuaW5pdC5wcm90b3R5cGU9WmEucHJvdG90eXBlLFphLnByb3BIb29rcz17X2RlZmF1bHQ6e2dldDpmdW5jdGlvbihhKXt2YXIgYjtyZXR1cm4gbnVsbD09YS5lbGVtW2EucHJvcF18fGEuZWxlbS5zdHlsZSYmbnVsbCE9YS5lbGVtLnN0eWxlW2EucHJvcF0/KGI9bS5jc3MoYS5lbGVtLGEucHJvcCxcIlwiKSxiJiZcImF1dG9cIiE9PWI/YjowKTphLmVsZW1bYS5wcm9wXX0sc2V0OmZ1bmN0aW9uKGEpe20uZnguc3RlcFthLnByb3BdP20uZnguc3RlcFthLnByb3BdKGEpOmEuZWxlbS5zdHlsZSYmKG51bGwhPWEuZWxlbS5zdHlsZVttLmNzc1Byb3BzW2EucHJvcF1dfHxtLmNzc0hvb2tzW2EucHJvcF0pP20uc3R5bGUoYS5lbGVtLGEucHJvcCxhLm5vdythLnVuaXQpOmEuZWxlbVthLnByb3BdPWEubm93fX19LFphLnByb3BIb29rcy5zY3JvbGxUb3A9WmEucHJvcEhvb2tzLnNjcm9sbExlZnQ9e3NldDpmdW5jdGlvbihhKXthLmVsZW0ubm9kZVR5cGUmJmEuZWxlbS5wYXJlbnROb2RlJiYoYS5lbGVtW2EucHJvcF09YS5ub3cpfX0sbS5lYXNpbmc9e2xpbmVhcjpmdW5jdGlvbihhKXtyZXR1cm4gYX0sc3dpbmc6ZnVuY3Rpb24oYSl7cmV0dXJuLjUtTWF0aC5jb3MoYSpNYXRoLlBJKS8yfX0sbS5meD1aYS5wcm90b3R5cGUuaW5pdCxtLmZ4LnN0ZXA9e307dmFyICRhLF9hLGFiPS9eKD86dG9nZ2xlfHNob3d8aGlkZSkkLyxiYj1uZXcgUmVnRXhwKFwiXig/OihbKy1dKT18KShcIitTK1wiKShbYS16JV0qKSRcIixcImlcIiksY2I9L3F1ZXVlSG9va3MkLyxkYj1baWJdLGViPXtcIipcIjpbZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLmNyZWF0ZVR3ZWVuKGEsYiksZD1jLmN1cigpLGU9YmIuZXhlYyhiKSxmPWUmJmVbM118fChtLmNzc051bWJlclthXT9cIlwiOlwicHhcIiksZz0obS5jc3NOdW1iZXJbYV18fFwicHhcIiE9PWYmJitkKSYmYmIuZXhlYyhtLmNzcyhjLmVsZW0sYSkpLGg9MSxpPTIwO2lmKGcmJmdbM10hPT1mKXtmPWZ8fGdbM10sZT1lfHxbXSxnPStkfHwxO2RvIGg9aHx8XCIuNVwiLGcvPWgsbS5zdHlsZShjLmVsZW0sYSxnK2YpO3doaWxlKGghPT0oaD1jLmN1cigpL2QpJiYxIT09aCYmLS1pKX1yZXR1cm4gZSYmKGc9Yy5zdGFydD0rZ3x8K2R8fDAsYy51bml0PWYsYy5lbmQ9ZVsxXT9nKyhlWzFdKzEpKmVbMl06K2VbMl0pLGN9XX07ZnVuY3Rpb24gZmIoKXtyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpeyRhPXZvaWQgMH0pLCRhPW0ubm93KCl9ZnVuY3Rpb24gZ2IoYSxiKXt2YXIgYyxkPXtoZWlnaHQ6YX0sZT0wO2ZvcihiPWI/MTowOzQ+ZTtlKz0yLWIpYz1UW2VdLGRbXCJtYXJnaW5cIitjXT1kW1wicGFkZGluZ1wiK2NdPWE7cmV0dXJuIGImJihkLm9wYWNpdHk9ZC53aWR0aD1hKSxkfWZ1bmN0aW9uIGhiKGEsYixjKXtmb3IodmFyIGQsZT0oZWJbYl18fFtdKS5jb25jYXQoZWJbXCIqXCJdKSxmPTAsZz1lLmxlbmd0aDtnPmY7ZisrKWlmKGQ9ZVtmXS5jYWxsKGMsYixhKSlyZXR1cm4gZH1mdW5jdGlvbiBpYihhLGIsYyl7dmFyIGQsZSxmLGcsaCxpLGosbCxuPXRoaXMsbz17fSxwPWEuc3R5bGUscT1hLm5vZGVUeXBlJiZVKGEpLHI9bS5fZGF0YShhLFwiZnhzaG93XCIpO2MucXVldWV8fChoPW0uX3F1ZXVlSG9va3MoYSxcImZ4XCIpLG51bGw9PWgudW5xdWV1ZWQmJihoLnVucXVldWVkPTAsaT1oLmVtcHR5LmZpcmUsaC5lbXB0eS5maXJlPWZ1bmN0aW9uKCl7aC51bnF1ZXVlZHx8aSgpfSksaC51bnF1ZXVlZCsrLG4uYWx3YXlzKGZ1bmN0aW9uKCl7bi5hbHdheXMoZnVuY3Rpb24oKXtoLnVucXVldWVkLS0sbS5xdWV1ZShhLFwiZnhcIikubGVuZ3RofHxoLmVtcHR5LmZpcmUoKX0pfSkpLDE9PT1hLm5vZGVUeXBlJiYoXCJoZWlnaHRcImluIGJ8fFwid2lkdGhcImluIGIpJiYoYy5vdmVyZmxvdz1bcC5vdmVyZmxvdyxwLm92ZXJmbG93WCxwLm92ZXJmbG93WV0saj1tLmNzcyhhLFwiZGlzcGxheVwiKSxsPVwibm9uZVwiPT09aj9tLl9kYXRhKGEsXCJvbGRkaXNwbGF5XCIpfHxGYShhLm5vZGVOYW1lKTpqLFwiaW5saW5lXCI9PT1sJiZcIm5vbmVcIj09PW0uY3NzKGEsXCJmbG9hdFwiKSYmKGsuaW5saW5lQmxvY2tOZWVkc0xheW91dCYmXCJpbmxpbmVcIiE9PUZhKGEubm9kZU5hbWUpP3Auem9vbT0xOnAuZGlzcGxheT1cImlubGluZS1ibG9ja1wiKSksYy5vdmVyZmxvdyYmKHAub3ZlcmZsb3c9XCJoaWRkZW5cIixrLnNocmlua1dyYXBCbG9ja3MoKXx8bi5hbHdheXMoZnVuY3Rpb24oKXtwLm92ZXJmbG93PWMub3ZlcmZsb3dbMF0scC5vdmVyZmxvd1g9Yy5vdmVyZmxvd1sxXSxwLm92ZXJmbG93WT1jLm92ZXJmbG93WzJdfSkpO2ZvcihkIGluIGIpaWYoZT1iW2RdLGFiLmV4ZWMoZSkpe2lmKGRlbGV0ZSBiW2RdLGY9Znx8XCJ0b2dnbGVcIj09PWUsZT09PShxP1wiaGlkZVwiOlwic2hvd1wiKSl7aWYoXCJzaG93XCIhPT1lfHwhcnx8dm9pZCAwPT09cltkXSljb250aW51ZTtxPSEwfW9bZF09ciYmcltkXXx8bS5zdHlsZShhLGQpfWVsc2Ugaj12b2lkIDA7aWYobS5pc0VtcHR5T2JqZWN0KG8pKVwiaW5saW5lXCI9PT0oXCJub25lXCI9PT1qP0ZhKGEubm9kZU5hbWUpOmopJiYocC5kaXNwbGF5PWopO2Vsc2V7cj9cImhpZGRlblwiaW4gciYmKHE9ci5oaWRkZW4pOnI9bS5fZGF0YShhLFwiZnhzaG93XCIse30pLGYmJihyLmhpZGRlbj0hcSkscT9tKGEpLnNob3coKTpuLmRvbmUoZnVuY3Rpb24oKXttKGEpLmhpZGUoKX0pLG4uZG9uZShmdW5jdGlvbigpe3ZhciBiO20uX3JlbW92ZURhdGEoYSxcImZ4c2hvd1wiKTtmb3IoYiBpbiBvKW0uc3R5bGUoYSxiLG9bYl0pfSk7Zm9yKGQgaW4gbylnPWhiKHE/cltkXTowLGQsbiksZCBpbiByfHwocltkXT1nLnN0YXJ0LHEmJihnLmVuZD1nLnN0YXJ0LGcuc3RhcnQ9XCJ3aWR0aFwiPT09ZHx8XCJoZWlnaHRcIj09PWQ/MTowKSl9fWZ1bmN0aW9uIGpiKGEsYil7dmFyIGMsZCxlLGYsZztmb3IoYyBpbiBhKWlmKGQ9bS5jYW1lbENhc2UoYyksZT1iW2RdLGY9YVtjXSxtLmlzQXJyYXkoZikmJihlPWZbMV0sZj1hW2NdPWZbMF0pLGMhPT1kJiYoYVtkXT1mLGRlbGV0ZSBhW2NdKSxnPW0uY3NzSG9va3NbZF0sZyYmXCJleHBhbmRcImluIGcpe2Y9Zy5leHBhbmQoZiksZGVsZXRlIGFbZF07Zm9yKGMgaW4gZiljIGluIGF8fChhW2NdPWZbY10sYltjXT1lKX1lbHNlIGJbZF09ZX1mdW5jdGlvbiBrYihhLGIsYyl7dmFyIGQsZSxmPTAsZz1kYi5sZW5ndGgsaD1tLkRlZmVycmVkKCkuYWx3YXlzKGZ1bmN0aW9uKCl7ZGVsZXRlIGkuZWxlbX0pLGk9ZnVuY3Rpb24oKXtpZihlKXJldHVybiExO2Zvcih2YXIgYj0kYXx8ZmIoKSxjPU1hdGgubWF4KDAsai5zdGFydFRpbWUrai5kdXJhdGlvbi1iKSxkPWMvai5kdXJhdGlvbnx8MCxmPTEtZCxnPTAsaT1qLnR3ZWVucy5sZW5ndGg7aT5nO2crKylqLnR3ZWVuc1tnXS5ydW4oZik7cmV0dXJuIGgubm90aWZ5V2l0aChhLFtqLGYsY10pLDE+ZiYmaT9jOihoLnJlc29sdmVXaXRoKGEsW2pdKSwhMSl9LGo9aC5wcm9taXNlKHtlbGVtOmEscHJvcHM6bS5leHRlbmQoe30sYiksb3B0czptLmV4dGVuZCghMCx7c3BlY2lhbEVhc2luZzp7fX0sYyksb3JpZ2luYWxQcm9wZXJ0aWVzOmIsb3JpZ2luYWxPcHRpb25zOmMsc3RhcnRUaW1lOiRhfHxmYigpLGR1cmF0aW9uOmMuZHVyYXRpb24sdHdlZW5zOltdLGNyZWF0ZVR3ZWVuOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9bS5Ud2VlbihhLGoub3B0cyxiLGMsai5vcHRzLnNwZWNpYWxFYXNpbmdbYl18fGoub3B0cy5lYXNpbmcpO3JldHVybiBqLnR3ZWVucy5wdXNoKGQpLGR9LHN0b3A6ZnVuY3Rpb24oYil7dmFyIGM9MCxkPWI/ai50d2VlbnMubGVuZ3RoOjA7aWYoZSlyZXR1cm4gdGhpcztmb3IoZT0hMDtkPmM7YysrKWoudHdlZW5zW2NdLnJ1bigxKTtyZXR1cm4gYj9oLnJlc29sdmVXaXRoKGEsW2osYl0pOmgucmVqZWN0V2l0aChhLFtqLGJdKSx0aGlzfX0pLGs9ai5wcm9wcztmb3IoamIoayxqLm9wdHMuc3BlY2lhbEVhc2luZyk7Zz5mO2YrKylpZihkPWRiW2ZdLmNhbGwoaixhLGssai5vcHRzKSlyZXR1cm4gZDtyZXR1cm4gbS5tYXAoayxoYixqKSxtLmlzRnVuY3Rpb24oai5vcHRzLnN0YXJ0KSYmai5vcHRzLnN0YXJ0LmNhbGwoYSxqKSxtLmZ4LnRpbWVyKG0uZXh0ZW5kKGkse2VsZW06YSxhbmltOmoscXVldWU6ai5vcHRzLnF1ZXVlfSkpLGoucHJvZ3Jlc3Moai5vcHRzLnByb2dyZXNzKS5kb25lKGoub3B0cy5kb25lLGoub3B0cy5jb21wbGV0ZSkuZmFpbChqLm9wdHMuZmFpbCkuYWx3YXlzKGoub3B0cy5hbHdheXMpfW0uQW5pbWF0aW9uPW0uZXh0ZW5kKGtiLHt0d2VlbmVyOmZ1bmN0aW9uKGEsYil7bS5pc0Z1bmN0aW9uKGEpPyhiPWEsYT1bXCIqXCJdKTphPWEuc3BsaXQoXCIgXCIpO2Zvcih2YXIgYyxkPTAsZT1hLmxlbmd0aDtlPmQ7ZCsrKWM9YVtkXSxlYltjXT1lYltjXXx8W10sZWJbY10udW5zaGlmdChiKX0scHJlZmlsdGVyOmZ1bmN0aW9uKGEsYil7Yj9kYi51bnNoaWZ0KGEpOmRiLnB1c2goYSl9fSksbS5zcGVlZD1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9YSYmXCJvYmplY3RcIj09dHlwZW9mIGE/bS5leHRlbmQoe30sYSk6e2NvbXBsZXRlOmN8fCFjJiZifHxtLmlzRnVuY3Rpb24oYSkmJmEsZHVyYXRpb246YSxlYXNpbmc6YyYmYnx8YiYmIW0uaXNGdW5jdGlvbihiKSYmYn07cmV0dXJuIGQuZHVyYXRpb249bS5meC5vZmY/MDpcIm51bWJlclwiPT10eXBlb2YgZC5kdXJhdGlvbj9kLmR1cmF0aW9uOmQuZHVyYXRpb24gaW4gbS5meC5zcGVlZHM/bS5meC5zcGVlZHNbZC5kdXJhdGlvbl06bS5meC5zcGVlZHMuX2RlZmF1bHQsKG51bGw9PWQucXVldWV8fGQucXVldWU9PT0hMCkmJihkLnF1ZXVlPVwiZnhcIiksZC5vbGQ9ZC5jb21wbGV0ZSxkLmNvbXBsZXRlPWZ1bmN0aW9uKCl7bS5pc0Z1bmN0aW9uKGQub2xkKSYmZC5vbGQuY2FsbCh0aGlzKSxkLnF1ZXVlJiZtLmRlcXVldWUodGhpcyxkLnF1ZXVlKX0sZH0sbS5mbi5leHRlbmQoe2ZhZGVUbzpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gdGhpcy5maWx0ZXIoVSkuY3NzKFwib3BhY2l0eVwiLDApLnNob3coKS5lbmQoKS5hbmltYXRlKHtvcGFjaXR5OmJ9LGEsYyxkKX0sYW5pbWF0ZTpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1tLmlzRW1wdHlPYmplY3QoYSksZj1tLnNwZWVkKGIsYyxkKSxnPWZ1bmN0aW9uKCl7dmFyIGI9a2IodGhpcyxtLmV4dGVuZCh7fSxhKSxmKTsoZXx8bS5fZGF0YSh0aGlzLFwiZmluaXNoXCIpKSYmYi5zdG9wKCEwKX07cmV0dXJuIGcuZmluaXNoPWcsZXx8Zi5xdWV1ZT09PSExP3RoaXMuZWFjaChnKTp0aGlzLnF1ZXVlKGYucXVldWUsZyl9LHN0b3A6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWZ1bmN0aW9uKGEpe3ZhciBiPWEuc3RvcDtkZWxldGUgYS5zdG9wLGIoYyl9O3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBhJiYoYz1iLGI9YSxhPXZvaWQgMCksYiYmYSE9PSExJiZ0aGlzLnF1ZXVlKGF8fFwiZnhcIixbXSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9ITAsZT1udWxsIT1hJiZhK1wicXVldWVIb29rc1wiLGY9bS50aW1lcnMsZz1tLl9kYXRhKHRoaXMpO2lmKGUpZ1tlXSYmZ1tlXS5zdG9wJiZkKGdbZV0pO2Vsc2UgZm9yKGUgaW4gZylnW2VdJiZnW2VdLnN0b3AmJmNiLnRlc3QoZSkmJmQoZ1tlXSk7Zm9yKGU9Zi5sZW5ndGg7ZS0tOylmW2VdLmVsZW0hPT10aGlzfHxudWxsIT1hJiZmW2VdLnF1ZXVlIT09YXx8KGZbZV0uYW5pbS5zdG9wKGMpLGI9ITEsZi5zcGxpY2UoZSwxKSk7KGJ8fCFjKSYmbS5kZXF1ZXVlKHRoaXMsYSl9KX0sZmluaXNoOmZ1bmN0aW9uKGEpe3JldHVybiBhIT09ITEmJihhPWF8fFwiZnhcIiksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGIsYz1tLl9kYXRhKHRoaXMpLGQ9Y1thK1wicXVldWVcIl0sZT1jW2ErXCJxdWV1ZUhvb2tzXCJdLGY9bS50aW1lcnMsZz1kP2QubGVuZ3RoOjA7Zm9yKGMuZmluaXNoPSEwLG0ucXVldWUodGhpcyxhLFtdKSxlJiZlLnN0b3AmJmUuc3RvcC5jYWxsKHRoaXMsITApLGI9Zi5sZW5ndGg7Yi0tOylmW2JdLmVsZW09PT10aGlzJiZmW2JdLnF1ZXVlPT09YSYmKGZbYl0uYW5pbS5zdG9wKCEwKSxmLnNwbGljZShiLDEpKTtmb3IoYj0wO2c+YjtiKyspZFtiXSYmZFtiXS5maW5pc2gmJmRbYl0uZmluaXNoLmNhbGwodGhpcyk7ZGVsZXRlIGMuZmluaXNofSl9fSksbS5lYWNoKFtcInRvZ2dsZVwiLFwic2hvd1wiLFwiaGlkZVwiXSxmdW5jdGlvbihhLGIpe3ZhciBjPW0uZm5bYl07bS5mbltiXT1mdW5jdGlvbihhLGQsZSl7cmV0dXJuIG51bGw9PWF8fFwiYm9vbGVhblwiPT10eXBlb2YgYT9jLmFwcGx5KHRoaXMsYXJndW1lbnRzKTp0aGlzLmFuaW1hdGUoZ2IoYiwhMCksYSxkLGUpfX0pLG0uZWFjaCh7c2xpZGVEb3duOmdiKFwic2hvd1wiKSxzbGlkZVVwOmdiKFwiaGlkZVwiKSxzbGlkZVRvZ2dsZTpnYihcInRvZ2dsZVwiKSxmYWRlSW46e29wYWNpdHk6XCJzaG93XCJ9LGZhZGVPdXQ6e29wYWNpdHk6XCJoaWRlXCJ9LGZhZGVUb2dnbGU6e29wYWNpdHk6XCJ0b2dnbGVcIn19LGZ1bmN0aW9uKGEsYil7bS5mblthXT1mdW5jdGlvbihhLGMsZCl7cmV0dXJuIHRoaXMuYW5pbWF0ZShiLGEsYyxkKX19KSxtLnRpbWVycz1bXSxtLmZ4LnRpY2s9ZnVuY3Rpb24oKXt2YXIgYSxiPW0udGltZXJzLGM9MDtmb3IoJGE9bS5ub3coKTtjPGIubGVuZ3RoO2MrKylhPWJbY10sYSgpfHxiW2NdIT09YXx8Yi5zcGxpY2UoYy0tLDEpO2IubGVuZ3RofHxtLmZ4LnN0b3AoKSwkYT12b2lkIDB9LG0uZngudGltZXI9ZnVuY3Rpb24oYSl7bS50aW1lcnMucHVzaChhKSxhKCk/bS5meC5zdGFydCgpOm0udGltZXJzLnBvcCgpfSxtLmZ4LmludGVydmFsPTEzLG0uZnguc3RhcnQ9ZnVuY3Rpb24oKXtfYXx8KF9hPXNldEludGVydmFsKG0uZngudGljayxtLmZ4LmludGVydmFsKSl9LG0uZnguc3RvcD1mdW5jdGlvbigpe2NsZWFySW50ZXJ2YWwoX2EpLF9hPW51bGx9LG0uZnguc3BlZWRzPXtzbG93OjYwMCxmYXN0OjIwMCxfZGVmYXVsdDo0MDB9LG0uZm4uZGVsYXk9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT1tLmZ4P20uZnguc3BlZWRzW2FdfHxhOmEsYj1ifHxcImZ4XCIsdGhpcy5xdWV1ZShiLGZ1bmN0aW9uKGIsYyl7dmFyIGQ9c2V0VGltZW91dChiLGEpO2Muc3RvcD1mdW5jdGlvbigpe2NsZWFyVGltZW91dChkKX19KX0sZnVuY3Rpb24oKXt2YXIgYSxiLGMsZCxlO2I9eS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGIuc2V0QXR0cmlidXRlKFwiY2xhc3NOYW1lXCIsXCJ0XCIpLGIuaW5uZXJIVE1MPVwiICA8bGluay8+PHRhYmxlPjwvdGFibGU+PGEgaHJlZj0nL2EnPmE8L2E+PGlucHV0IHR5cGU9J2NoZWNrYm94Jy8+XCIsZD1iLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYVwiKVswXSxjPXkuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKSxlPWMuYXBwZW5kQ2hpbGQoeS5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpKSxhPWIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKVswXSxkLnN0eWxlLmNzc1RleHQ9XCJ0b3A6MXB4XCIsay5nZXRTZXRBdHRyaWJ1dGU9XCJ0XCIhPT1iLmNsYXNzTmFtZSxrLnN0eWxlPS90b3AvLnRlc3QoZC5nZXRBdHRyaWJ1dGUoXCJzdHlsZVwiKSksay5ocmVmTm9ybWFsaXplZD1cIi9hXCI9PT1kLmdldEF0dHJpYnV0ZShcImhyZWZcIiksay5jaGVja09uPSEhYS52YWx1ZSxrLm9wdFNlbGVjdGVkPWUuc2VsZWN0ZWQsay5lbmN0eXBlPSEheS5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKS5lbmN0eXBlLGMuZGlzYWJsZWQ9ITAsay5vcHREaXNhYmxlZD0hZS5kaXNhYmxlZCxhPXkuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGEuc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIlwiKSxrLmlucHV0PVwiXCI9PT1hLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpLGEudmFsdWU9XCJ0XCIsYS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJyYWRpb1wiKSxrLnJhZGlvVmFsdWU9XCJ0XCI9PT1hLnZhbHVlfSgpO3ZhciBsYj0vXFxyL2c7bS5mbi5leHRlbmQoe3ZhbDpmdW5jdGlvbihhKXt2YXIgYixjLGQsZT10aGlzWzBdO3tpZihhcmd1bWVudHMubGVuZ3RoKXJldHVybiBkPW0uaXNGdW5jdGlvbihhKSx0aGlzLmVhY2goZnVuY3Rpb24oYyl7dmFyIGU7MT09PXRoaXMubm9kZVR5cGUmJihlPWQ/YS5jYWxsKHRoaXMsYyxtKHRoaXMpLnZhbCgpKTphLG51bGw9PWU/ZT1cIlwiOlwibnVtYmVyXCI9PXR5cGVvZiBlP2UrPVwiXCI6bS5pc0FycmF5KGUpJiYoZT1tLm1hcChlLGZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP1wiXCI6YStcIlwifSkpLGI9bS52YWxIb29rc1t0aGlzLnR5cGVdfHxtLnZhbEhvb2tzW3RoaXMubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0sYiYmXCJzZXRcImluIGImJnZvaWQgMCE9PWIuc2V0KHRoaXMsZSxcInZhbHVlXCIpfHwodGhpcy52YWx1ZT1lKSl9KTtpZihlKXJldHVybiBiPW0udmFsSG9va3NbZS50eXBlXXx8bS52YWxIb29rc1tlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldLGImJlwiZ2V0XCJpbiBiJiZ2b2lkIDAhPT0oYz1iLmdldChlLFwidmFsdWVcIikpP2M6KGM9ZS52YWx1ZSxcInN0cmluZ1wiPT10eXBlb2YgYz9jLnJlcGxhY2UobGIsXCJcIik6bnVsbD09Yz9cIlwiOmMpfX19KSxtLmV4dGVuZCh7dmFsSG9va3M6e29wdGlvbjp7Z2V0OmZ1bmN0aW9uKGEpe3ZhciBiPW0uZmluZC5hdHRyKGEsXCJ2YWx1ZVwiKTtyZXR1cm4gbnVsbCE9Yj9iOm0udHJpbShtLnRleHQoYSkpfX0sc2VsZWN0OntnZXQ6ZnVuY3Rpb24oYSl7Zm9yKHZhciBiLGMsZD1hLm9wdGlvbnMsZT1hLnNlbGVjdGVkSW5kZXgsZj1cInNlbGVjdC1vbmVcIj09PWEudHlwZXx8MD5lLGc9Zj9udWxsOltdLGg9Zj9lKzE6ZC5sZW5ndGgsaT0wPmU/aDpmP2U6MDtoPmk7aSsrKWlmKGM9ZFtpXSwhKCFjLnNlbGVjdGVkJiZpIT09ZXx8KGsub3B0RGlzYWJsZWQ/Yy5kaXNhYmxlZDpudWxsIT09Yy5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSl8fGMucGFyZW50Tm9kZS5kaXNhYmxlZCYmbS5ub2RlTmFtZShjLnBhcmVudE5vZGUsXCJvcHRncm91cFwiKSkpe2lmKGI9bShjKS52YWwoKSxmKXJldHVybiBiO2cucHVzaChiKX1yZXR1cm4gZ30sc2V0OmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlPWEub3B0aW9ucyxmPW0ubWFrZUFycmF5KGIpLGc9ZS5sZW5ndGg7d2hpbGUoZy0tKWlmKGQ9ZVtnXSxtLmluQXJyYXkobS52YWxIb29rcy5vcHRpb24uZ2V0KGQpLGYpPj0wKXRyeXtkLnNlbGVjdGVkPWM9ITB9Y2F0Y2goaCl7ZC5zY3JvbGxIZWlnaHR9ZWxzZSBkLnNlbGVjdGVkPSExO3JldHVybiBjfHwoYS5zZWxlY3RlZEluZGV4PS0xKSxlfX19fSksbS5lYWNoKFtcInJhZGlvXCIsXCJjaGVja2JveFwiXSxmdW5jdGlvbigpe20udmFsSG9va3NbdGhpc109e3NldDpmdW5jdGlvbihhLGIpe3JldHVybiBtLmlzQXJyYXkoYik/YS5jaGVja2VkPW0uaW5BcnJheShtKGEpLnZhbCgpLGIpPj0wOnZvaWQgMH19LGsuY2hlY2tPbnx8KG0udmFsSG9va3NbdGhpc10uZ2V0PWZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT09YS5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKT9cIm9uXCI6YS52YWx1ZX0pfSk7dmFyIG1iLG5iLG9iPW0uZXhwci5hdHRySGFuZGxlLHBiPS9eKD86Y2hlY2tlZHxzZWxlY3RlZCkkL2kscWI9ay5nZXRTZXRBdHRyaWJ1dGUscmI9ay5pbnB1dDttLmZuLmV4dGVuZCh7YXR0cjpmdW5jdGlvbihhLGIpe3JldHVybiBWKHRoaXMsbS5hdHRyLGEsYixhcmd1bWVudHMubGVuZ3RoPjEpfSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXttLnJlbW92ZUF0dHIodGhpcyxhKX0pfX0pLG0uZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGY9YS5ub2RlVHlwZTtpZihhJiYzIT09ZiYmOCE9PWYmJjIhPT1mKXJldHVybiB0eXBlb2YgYS5nZXRBdHRyaWJ1dGU9PT1LP20ucHJvcChhLGIsYyk6KDE9PT1mJiZtLmlzWE1MRG9jKGEpfHwoYj1iLnRvTG93ZXJDYXNlKCksZD1tLmF0dHJIb29rc1tiXXx8KG0uZXhwci5tYXRjaC5ib29sLnRlc3QoYik/bmI6bWIpKSx2b2lkIDA9PT1jP2QmJlwiZ2V0XCJpbiBkJiZudWxsIT09KGU9ZC5nZXQoYSxiKSk/ZTooZT1tLmZpbmQuYXR0cihhLGIpLG51bGw9PWU/dm9pZCAwOmUpOm51bGwhPT1jP2QmJlwic2V0XCJpbiBkJiZ2b2lkIDAhPT0oZT1kLnNldChhLGMsYikpP2U6KGEuc2V0QXR0cmlidXRlKGIsYytcIlwiKSxjKTp2b2lkIG0ucmVtb3ZlQXR0cihhLGIpKX0scmVtb3ZlQXR0cjpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZT0wLGY9YiYmYi5tYXRjaChFKTtpZihmJiYxPT09YS5ub2RlVHlwZSl3aGlsZShjPWZbZSsrXSlkPW0ucHJvcEZpeFtjXXx8YyxtLmV4cHIubWF0Y2guYm9vbC50ZXN0KGMpP3JiJiZxYnx8IXBiLnRlc3QoYyk/YVtkXT0hMTphW20uY2FtZWxDYXNlKFwiZGVmYXVsdC1cIitjKV09YVtkXT0hMTptLmF0dHIoYSxjLFwiXCIpLGEucmVtb3ZlQXR0cmlidXRlKHFiP2M6ZCl9LGF0dHJIb29rczp7dHlwZTp7c2V0OmZ1bmN0aW9uKGEsYil7aWYoIWsucmFkaW9WYWx1ZSYmXCJyYWRpb1wiPT09YiYmbS5ub2RlTmFtZShhLFwiaW5wdXRcIikpe3ZhciBjPWEudmFsdWU7cmV0dXJuIGEuc2V0QXR0cmlidXRlKFwidHlwZVwiLGIpLGMmJihhLnZhbHVlPWMpLGJ9fX19fSksbmI9e3NldDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGI9PT0hMT9tLnJlbW92ZUF0dHIoYSxjKTpyYiYmcWJ8fCFwYi50ZXN0KGMpP2Euc2V0QXR0cmlidXRlKCFxYiYmbS5wcm9wRml4W2NdfHxjLGMpOmFbbS5jYW1lbENhc2UoXCJkZWZhdWx0LVwiK2MpXT1hW2NdPSEwLGN9fSxtLmVhY2gobS5leHByLm1hdGNoLmJvb2wuc291cmNlLm1hdGNoKC9cXHcrL2cpLGZ1bmN0aW9uKGEsYil7dmFyIGM9b2JbYl18fG0uZmluZC5hdHRyO29iW2JdPXJiJiZxYnx8IXBiLnRlc3QoYik/ZnVuY3Rpb24oYSxiLGQpe3ZhciBlLGY7cmV0dXJuIGR8fChmPW9iW2JdLG9iW2JdPWUsZT1udWxsIT1jKGEsYixkKT9iLnRvTG93ZXJDYXNlKCk6bnVsbCxvYltiXT1mKSxlfTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGM/dm9pZCAwOmFbbS5jYW1lbENhc2UoXCJkZWZhdWx0LVwiK2IpXT9iLnRvTG93ZXJDYXNlKCk6bnVsbH19KSxyYiYmcWJ8fChtLmF0dHJIb29rcy52YWx1ZT17c2V0OmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gbS5ub2RlTmFtZShhLFwiaW5wdXRcIik/dm9pZChhLmRlZmF1bHRWYWx1ZT1iKTptYiYmbWIuc2V0KGEsYixjKX19KSxxYnx8KG1iPXtzZXQ6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWEuZ2V0QXR0cmlidXRlTm9kZShjKTtyZXR1cm4gZHx8YS5zZXRBdHRyaWJ1dGVOb2RlKGQ9YS5vd25lckRvY3VtZW50LmNyZWF0ZUF0dHJpYnV0ZShjKSksZC52YWx1ZT1iKz1cIlwiLFwidmFsdWVcIj09PWN8fGI9PT1hLmdldEF0dHJpYnV0ZShjKT9iOnZvaWQgMH19LG9iLmlkPW9iLm5hbWU9b2IuY29vcmRzPWZ1bmN0aW9uKGEsYixjKXt2YXIgZDtyZXR1cm4gYz92b2lkIDA6KGQ9YS5nZXRBdHRyaWJ1dGVOb2RlKGIpKSYmXCJcIiE9PWQudmFsdWU/ZC52YWx1ZTpudWxsfSxtLnZhbEhvb2tzLmJ1dHRvbj17Z2V0OmZ1bmN0aW9uKGEsYil7dmFyIGM9YS5nZXRBdHRyaWJ1dGVOb2RlKGIpO3JldHVybiBjJiZjLnNwZWNpZmllZD9jLnZhbHVlOnZvaWQgMH0sc2V0Om1iLnNldH0sbS5hdHRySG9va3MuY29udGVudGVkaXRhYmxlPXtzZXQ6ZnVuY3Rpb24oYSxiLGMpe21iLnNldChhLFwiXCI9PT1iPyExOmIsYyl9fSxtLmVhY2goW1wid2lkdGhcIixcImhlaWdodFwiXSxmdW5jdGlvbihhLGIpe20uYXR0ckhvb2tzW2JdPXtzZXQ6ZnVuY3Rpb24oYSxjKXtyZXR1cm5cIlwiPT09Yz8oYS5zZXRBdHRyaWJ1dGUoYixcImF1dG9cIiksYyk6dm9pZCAwfX19KSksay5zdHlsZXx8KG0uYXR0ckhvb2tzLnN0eWxlPXtnZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGEuc3R5bGUuY3NzVGV4dHx8dm9pZCAwfSxzZXQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS5zdHlsZS5jc3NUZXh0PWIrXCJcIn19KTt2YXIgc2I9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9ufG9iamVjdCkkL2ksdGI9L14oPzphfGFyZWEpJC9pO20uZm4uZXh0ZW5kKHtwcm9wOmZ1bmN0aW9uKGEsYil7cmV0dXJuIFYodGhpcyxtLnByb3AsYSxiLGFyZ3VtZW50cy5sZW5ndGg+MSl9LHJlbW92ZVByb3A6ZnVuY3Rpb24oYSl7cmV0dXJuIGE9bS5wcm9wRml4W2FdfHxhLHRoaXMuZWFjaChmdW5jdGlvbigpe3RyeXt0aGlzW2FdPXZvaWQgMCxkZWxldGUgdGhpc1thXX1jYXRjaChiKXt9fSl9fSksbS5leHRlbmQoe3Byb3BGaXg6e1wiZm9yXCI6XCJodG1sRm9yXCIsXCJjbGFzc1wiOlwiY2xhc3NOYW1lXCJ9LHByb3A6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZixnPWEubm9kZVR5cGU7aWYoYSYmMyE9PWcmJjghPT1nJiYyIT09ZylyZXR1cm4gZj0xIT09Z3x8IW0uaXNYTUxEb2MoYSksZiYmKGI9bS5wcm9wRml4W2JdfHxiLGU9bS5wcm9wSG9va3NbYl0pLHZvaWQgMCE9PWM/ZSYmXCJzZXRcImluIGUmJnZvaWQgMCE9PShkPWUuc2V0KGEsYyxiKSk/ZDphW2JdPWM6ZSYmXCJnZXRcImluIGUmJm51bGwhPT0oZD1lLmdldChhLGIpKT9kOmFbYl19LHByb3BIb29rczp7dGFiSW5kZXg6e2dldDpmdW5jdGlvbihhKXt2YXIgYj1tLmZpbmQuYXR0cihhLFwidGFiaW5kZXhcIik7cmV0dXJuIGI/cGFyc2VJbnQoYiwxMCk6c2IudGVzdChhLm5vZGVOYW1lKXx8dGIudGVzdChhLm5vZGVOYW1lKSYmYS5ocmVmPzA6LTF9fX19KSxrLmhyZWZOb3JtYWxpemVkfHxtLmVhY2goW1wiaHJlZlwiLFwic3JjXCJdLGZ1bmN0aW9uKGEsYil7bS5wcm9wSG9va3NbYl09e2dldDpmdW5jdGlvbihhKXtyZXR1cm4gYS5nZXRBdHRyaWJ1dGUoYiw0KX19fSksay5vcHRTZWxlY3RlZHx8KG0ucHJvcEhvb2tzLnNlbGVjdGVkPXtnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5wYXJlbnROb2RlO3JldHVybiBiJiYoYi5zZWxlY3RlZEluZGV4LGIucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgpLG51bGx9fSksbS5lYWNoKFtcInRhYkluZGV4XCIsXCJyZWFkT25seVwiLFwibWF4TGVuZ3RoXCIsXCJjZWxsU3BhY2luZ1wiLFwiY2VsbFBhZGRpbmdcIixcInJvd1NwYW5cIixcImNvbFNwYW5cIixcInVzZU1hcFwiLFwiZnJhbWVCb3JkZXJcIixcImNvbnRlbnRFZGl0YWJsZVwiXSxmdW5jdGlvbigpe20ucHJvcEZpeFt0aGlzLnRvTG93ZXJDYXNlKCldPXRoaXN9KSxrLmVuY3R5cGV8fChtLnByb3BGaXguZW5jdHlwZT1cImVuY29kaW5nXCIpO3ZhciB1Yj0vW1xcdFxcclxcblxcZl0vZzttLmZuLmV4dGVuZCh7YWRkQ2xhc3M6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGg9MCxpPXRoaXMubGVuZ3RoLGo9XCJzdHJpbmdcIj09dHlwZW9mIGEmJmE7aWYobS5pc0Z1bmN0aW9uKGEpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYil7bSh0aGlzKS5hZGRDbGFzcyhhLmNhbGwodGhpcyxiLHRoaXMuY2xhc3NOYW1lKSl9KTtpZihqKWZvcihiPShhfHxcIlwiKS5tYXRjaChFKXx8W107aT5oO2grKylpZihjPXRoaXNbaF0sZD0xPT09Yy5ub2RlVHlwZSYmKGMuY2xhc3NOYW1lPyhcIiBcIitjLmNsYXNzTmFtZStcIiBcIikucmVwbGFjZSh1YixcIiBcIik6XCIgXCIpKXtmPTA7d2hpbGUoZT1iW2YrK10pZC5pbmRleE9mKFwiIFwiK2UrXCIgXCIpPDAmJihkKz1lK1wiIFwiKTtnPW0udHJpbShkKSxjLmNsYXNzTmFtZSE9PWcmJihjLmNsYXNzTmFtZT1nKX1yZXR1cm4gdGhpc30scmVtb3ZlQ2xhc3M6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGg9MCxpPXRoaXMubGVuZ3RoLGo9MD09PWFyZ3VtZW50cy5sZW5ndGh8fFwic3RyaW5nXCI9PXR5cGVvZiBhJiZhO2lmKG0uaXNGdW5jdGlvbihhKSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGIpe20odGhpcykucmVtb3ZlQ2xhc3MoYS5jYWxsKHRoaXMsYix0aGlzLmNsYXNzTmFtZSkpfSk7aWYoailmb3IoYj0oYXx8XCJcIikubWF0Y2goRSl8fFtdO2k+aDtoKyspaWYoYz10aGlzW2hdLGQ9MT09PWMubm9kZVR5cGUmJihjLmNsYXNzTmFtZT8oXCIgXCIrYy5jbGFzc05hbWUrXCIgXCIpLnJlcGxhY2UodWIsXCIgXCIpOlwiXCIpKXtmPTA7d2hpbGUoZT1iW2YrK10pd2hpbGUoZC5pbmRleE9mKFwiIFwiK2UrXCIgXCIpPj0wKWQ9ZC5yZXBsYWNlKFwiIFwiK2UrXCIgXCIsXCIgXCIpO2c9YT9tLnRyaW0oZCk6XCJcIixjLmNsYXNzTmFtZSE9PWcmJihjLmNsYXNzTmFtZT1nKX1yZXR1cm4gdGhpc30sdG9nZ2xlQ2xhc3M6ZnVuY3Rpb24oYSxiKXt2YXIgYz10eXBlb2YgYTtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGImJlwic3RyaW5nXCI9PT1jP2I/dGhpcy5hZGRDbGFzcyhhKTp0aGlzLnJlbW92ZUNsYXNzKGEpOnRoaXMuZWFjaChtLmlzRnVuY3Rpb24oYSk/ZnVuY3Rpb24oYyl7bSh0aGlzKS50b2dnbGVDbGFzcyhhLmNhbGwodGhpcyxjLHRoaXMuY2xhc3NOYW1lLGIpLGIpfTpmdW5jdGlvbigpe2lmKFwic3RyaW5nXCI9PT1jKXt2YXIgYixkPTAsZT1tKHRoaXMpLGY9YS5tYXRjaChFKXx8W107d2hpbGUoYj1mW2QrK10pZS5oYXNDbGFzcyhiKT9lLnJlbW92ZUNsYXNzKGIpOmUuYWRkQ2xhc3MoYil9ZWxzZShjPT09S3x8XCJib29sZWFuXCI9PT1jKSYmKHRoaXMuY2xhc3NOYW1lJiZtLl9kYXRhKHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIsdGhpcy5jbGFzc05hbWUpLHRoaXMuY2xhc3NOYW1lPXRoaXMuY2xhc3NOYW1lfHxhPT09ITE/XCJcIjptLl9kYXRhKHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIpfHxcIlwiKX0pfSxoYXNDbGFzczpmdW5jdGlvbihhKXtmb3IodmFyIGI9XCIgXCIrYStcIiBcIixjPTAsZD10aGlzLmxlbmd0aDtkPmM7YysrKWlmKDE9PT10aGlzW2NdLm5vZGVUeXBlJiYoXCIgXCIrdGhpc1tjXS5jbGFzc05hbWUrXCIgXCIpLnJlcGxhY2UodWIsXCIgXCIpLmluZGV4T2YoYik+PTApcmV0dXJuITA7cmV0dXJuITF9fSksbS5lYWNoKFwiYmx1ciBmb2N1cyBmb2N1c2luIGZvY3Vzb3V0IGxvYWQgcmVzaXplIHNjcm9sbCB1bmxvYWQgY2xpY2sgZGJsY2xpY2sgbW91c2Vkb3duIG1vdXNldXAgbW91c2Vtb3ZlIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgY2hhbmdlIHNlbGVjdCBzdWJtaXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBlcnJvciBjb250ZXh0bWVudVwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihhLGIpe20uZm5bYl09ZnVuY3Rpb24oYSxjKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD4wP3RoaXMub24oYixudWxsLGEsYyk6dGhpcy50cmlnZ2VyKGIpfX0pLG0uZm4uZXh0ZW5kKHtob3ZlcjpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm1vdXNlZW50ZXIoYSkubW91c2VsZWF2ZShifHxhKX0sYmluZDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHRoaXMub24oYSxudWxsLGIsYyl9LHVuYmluZDpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm9mZihhLG51bGwsYil9LGRlbGVnYXRlOmZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiB0aGlzLm9uKGIsYSxjLGQpfSx1bmRlbGVnYXRlOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gMT09PWFyZ3VtZW50cy5sZW5ndGg/dGhpcy5vZmYoYSxcIioqXCIpOnRoaXMub2ZmKGIsYXx8XCIqKlwiLGMpfX0pO3ZhciB2Yj1tLm5vdygpLHdiPS9cXD8vLHhiPS8oLCl8KFxcW3x7KXwofXxdKXxcIig/OlteXCJcXFxcXFxyXFxuXXxcXFxcW1wiXFxcXFxcL2JmbnJ0XXxcXFxcdVtcXGRhLWZBLUZdezR9KSpcIlxccyo6P3x0cnVlfGZhbHNlfG51bGx8LT8oPyEwXFxkKVxcZCsoPzpcXC5cXGQrfCkoPzpbZUVdWystXT9cXGQrfCkvZzttLnBhcnNlSlNPTj1mdW5jdGlvbihiKXtpZihhLkpTT04mJmEuSlNPTi5wYXJzZSlyZXR1cm4gYS5KU09OLnBhcnNlKGIrXCJcIik7dmFyIGMsZD1udWxsLGU9bS50cmltKGIrXCJcIik7cmV0dXJuIGUmJiFtLnRyaW0oZS5yZXBsYWNlKHhiLGZ1bmN0aW9uKGEsYixlLGYpe3JldHVybiBjJiZiJiYoZD0wKSwwPT09ZD9hOihjPWV8fGIsZCs9IWYtIWUsXCJcIil9KSk/RnVuY3Rpb24oXCJyZXR1cm4gXCIrZSkoKTptLmVycm9yKFwiSW52YWxpZCBKU09OOiBcIitiKX0sbS5wYXJzZVhNTD1mdW5jdGlvbihiKXt2YXIgYyxkO2lmKCFifHxcInN0cmluZ1wiIT10eXBlb2YgYilyZXR1cm4gbnVsbDt0cnl7YS5ET01QYXJzZXI/KGQ9bmV3IERPTVBhcnNlcixjPWQucGFyc2VGcm9tU3RyaW5nKGIsXCJ0ZXh0L3htbFwiKSk6KGM9bmV3IEFjdGl2ZVhPYmplY3QoXCJNaWNyb3NvZnQuWE1MRE9NXCIpLGMuYXN5bmM9XCJmYWxzZVwiLGMubG9hZFhNTChiKSl9Y2F0Y2goZSl7Yz12b2lkIDB9cmV0dXJuIGMmJmMuZG9jdW1lbnRFbGVtZW50JiYhYy5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhcnNlcmVycm9yXCIpLmxlbmd0aHx8bS5lcnJvcihcIkludmFsaWQgWE1MOiBcIitiKSxjfTt2YXIgeWIsemIsQWI9LyMuKiQvLEJiPS8oWz8mXSlfPVteJl0qLyxDYj0vXiguKj8pOlsgXFx0XSooW15cXHJcXG5dKilcXHI/JC9nbSxEYj0vXig/OmFib3V0fGFwcHxhcHAtc3RvcmFnZXwuKy1leHRlbnNpb258ZmlsZXxyZXN8d2lkZ2V0KTokLyxFYj0vXig/OkdFVHxIRUFEKSQvLEZiPS9eXFwvXFwvLyxHYj0vXihbXFx3ListXSs6KSg/OlxcL1xcLyg/OlteXFwvPyNdKkB8KShbXlxcLz8jOl0qKSg/OjooXFxkKyl8KXwpLyxIYj17fSxJYj17fSxKYj1cIiovXCIuY29uY2F0KFwiKlwiKTt0cnl7emI9bG9jYXRpb24uaHJlZn1jYXRjaChLYil7emI9eS5jcmVhdGVFbGVtZW50KFwiYVwiKSx6Yi5ocmVmPVwiXCIsemI9emIuaHJlZn15Yj1HYi5leGVjKHpiLnRvTG93ZXJDYXNlKCkpfHxbXTtmdW5jdGlvbiBMYihhKXtyZXR1cm4gZnVuY3Rpb24oYixjKXtcInN0cmluZ1wiIT10eXBlb2YgYiYmKGM9YixiPVwiKlwiKTt2YXIgZCxlPTAsZj1iLnRvTG93ZXJDYXNlKCkubWF0Y2goRSl8fFtdO2lmKG0uaXNGdW5jdGlvbihjKSl3aGlsZShkPWZbZSsrXSlcIitcIj09PWQuY2hhckF0KDApPyhkPWQuc2xpY2UoMSl8fFwiKlwiLChhW2RdPWFbZF18fFtdKS51bnNoaWZ0KGMpKTooYVtkXT1hW2RdfHxbXSkucHVzaChjKX19ZnVuY3Rpb24gTWIoYSxiLGMsZCl7dmFyIGU9e30sZj1hPT09SWI7ZnVuY3Rpb24gZyhoKXt2YXIgaTtyZXR1cm4gZVtoXT0hMCxtLmVhY2goYVtoXXx8W10sZnVuY3Rpb24oYSxoKXt2YXIgaj1oKGIsYyxkKTtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2Yganx8Znx8ZVtqXT9mPyEoaT1qKTp2b2lkIDA6KGIuZGF0YVR5cGVzLnVuc2hpZnQoaiksZyhqKSwhMSl9KSxpfXJldHVybiBnKGIuZGF0YVR5cGVzWzBdKXx8IWVbXCIqXCJdJiZnKFwiKlwiKX1mdW5jdGlvbiBOYihhLGIpe3ZhciBjLGQsZT1tLmFqYXhTZXR0aW5ncy5mbGF0T3B0aW9uc3x8e307Zm9yKGQgaW4gYil2b2lkIDAhPT1iW2RdJiYoKGVbZF0/YTpjfHwoYz17fSkpW2RdPWJbZF0pO3JldHVybiBjJiZtLmV4dGVuZCghMCxhLGMpLGF9ZnVuY3Rpb24gT2IoYSxiLGMpe3ZhciBkLGUsZixnLGg9YS5jb250ZW50cyxpPWEuZGF0YVR5cGVzO3doaWxlKFwiKlwiPT09aVswXSlpLnNoaWZ0KCksdm9pZCAwPT09ZSYmKGU9YS5taW1lVHlwZXx8Yi5nZXRSZXNwb25zZUhlYWRlcihcIkNvbnRlbnQtVHlwZVwiKSk7aWYoZSlmb3IoZyBpbiBoKWlmKGhbZ10mJmhbZ10udGVzdChlKSl7aS51bnNoaWZ0KGcpO2JyZWFrfWlmKGlbMF1pbiBjKWY9aVswXTtlbHNle2ZvcihnIGluIGMpe2lmKCFpWzBdfHxhLmNvbnZlcnRlcnNbZytcIiBcIitpWzBdXSl7Zj1nO2JyZWFrfWR8fChkPWcpfWY9Znx8ZH1yZXR1cm4gZj8oZiE9PWlbMF0mJmkudW5zaGlmdChmKSxjW2ZdKTp2b2lkIDB9ZnVuY3Rpb24gUGIoYSxiLGMsZCl7dmFyIGUsZixnLGgsaSxqPXt9LGs9YS5kYXRhVHlwZXMuc2xpY2UoKTtpZihrWzFdKWZvcihnIGluIGEuY29udmVydGVycylqW2cudG9Mb3dlckNhc2UoKV09YS5jb252ZXJ0ZXJzW2ddO2Y9ay5zaGlmdCgpO3doaWxlKGYpaWYoYS5yZXNwb25zZUZpZWxkc1tmXSYmKGNbYS5yZXNwb25zZUZpZWxkc1tmXV09YiksIWkmJmQmJmEuZGF0YUZpbHRlciYmKGI9YS5kYXRhRmlsdGVyKGIsYS5kYXRhVHlwZSkpLGk9ZixmPWsuc2hpZnQoKSlpZihcIipcIj09PWYpZj1pO2Vsc2UgaWYoXCIqXCIhPT1pJiZpIT09Zil7aWYoZz1qW2krXCIgXCIrZl18fGpbXCIqIFwiK2ZdLCFnKWZvcihlIGluIGopaWYoaD1lLnNwbGl0KFwiIFwiKSxoWzFdPT09ZiYmKGc9altpK1wiIFwiK2hbMF1dfHxqW1wiKiBcIitoWzBdXSkpe2c9PT0hMD9nPWpbZV06altlXSE9PSEwJiYoZj1oWzBdLGsudW5zaGlmdChoWzFdKSk7YnJlYWt9aWYoZyE9PSEwKWlmKGcmJmFbXCJ0aHJvd3NcIl0pYj1nKGIpO2Vsc2UgdHJ5e2I9ZyhiKX1jYXRjaChsKXtyZXR1cm57c3RhdGU6XCJwYXJzZXJlcnJvclwiLGVycm9yOmc/bDpcIk5vIGNvbnZlcnNpb24gZnJvbSBcIitpK1wiIHRvIFwiK2Z9fX1yZXR1cm57c3RhdGU6XCJzdWNjZXNzXCIsZGF0YTpifX1tLmV4dGVuZCh7YWN0aXZlOjAsbGFzdE1vZGlmaWVkOnt9LGV0YWc6e30sYWpheFNldHRpbmdzOnt1cmw6emIsdHlwZTpcIkdFVFwiLGlzTG9jYWw6RGIudGVzdCh5YlsxXSksZ2xvYmFsOiEwLHByb2Nlc3NEYXRhOiEwLGFzeW5jOiEwLGNvbnRlbnRUeXBlOlwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04XCIsYWNjZXB0czp7XCIqXCI6SmIsdGV4dDpcInRleHQvcGxhaW5cIixodG1sOlwidGV4dC9odG1sXCIseG1sOlwiYXBwbGljYXRpb24veG1sLCB0ZXh0L3htbFwiLGpzb246XCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHRcIn0sY29udGVudHM6e3htbDoveG1sLyxodG1sOi9odG1sLyxqc29uOi9qc29uL30scmVzcG9uc2VGaWVsZHM6e3htbDpcInJlc3BvbnNlWE1MXCIsdGV4dDpcInJlc3BvbnNlVGV4dFwiLGpzb246XCJyZXNwb25zZUpTT05cIn0sY29udmVydGVyczp7XCIqIHRleHRcIjpTdHJpbmcsXCJ0ZXh0IGh0bWxcIjohMCxcInRleHQganNvblwiOm0ucGFyc2VKU09OLFwidGV4dCB4bWxcIjptLnBhcnNlWE1MfSxmbGF0T3B0aW9uczp7dXJsOiEwLGNvbnRleHQ6ITB9fSxhamF4U2V0dXA6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYj9OYihOYihhLG0uYWpheFNldHRpbmdzKSxiKTpOYihtLmFqYXhTZXR0aW5ncyxhKX0sYWpheFByZWZpbHRlcjpMYihIYiksYWpheFRyYW5zcG9ydDpMYihJYiksYWpheDpmdW5jdGlvbihhLGIpe1wib2JqZWN0XCI9PXR5cGVvZiBhJiYoYj1hLGE9dm9pZCAwKSxiPWJ8fHt9O3ZhciBjLGQsZSxmLGcsaCxpLGosaz1tLmFqYXhTZXR1cCh7fSxiKSxsPWsuY29udGV4dHx8ayxuPWsuY29udGV4dCYmKGwubm9kZVR5cGV8fGwuanF1ZXJ5KT9tKGwpOm0uZXZlbnQsbz1tLkRlZmVycmVkKCkscD1tLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLHE9ay5zdGF0dXNDb2RlfHx7fSxyPXt9LHM9e30sdD0wLHU9XCJjYW5jZWxlZFwiLHY9e3JlYWR5U3RhdGU6MCxnZXRSZXNwb25zZUhlYWRlcjpmdW5jdGlvbihhKXt2YXIgYjtpZigyPT09dCl7aWYoIWope2o9e307d2hpbGUoYj1DYi5leGVjKGYpKWpbYlsxXS50b0xvd2VyQ2FzZSgpXT1iWzJdfWI9althLnRvTG93ZXJDYXNlKCldfXJldHVybiBudWxsPT1iP251bGw6Yn0sZ2V0QWxsUmVzcG9uc2VIZWFkZXJzOmZ1bmN0aW9uKCl7cmV0dXJuIDI9PT10P2Y6bnVsbH0sc2V0UmVxdWVzdEhlYWRlcjpmdW5jdGlvbihhLGIpe3ZhciBjPWEudG9Mb3dlckNhc2UoKTtyZXR1cm4gdHx8KGE9c1tjXT1zW2NdfHxhLHJbYV09YiksdGhpc30sb3ZlcnJpZGVNaW1lVHlwZTpmdW5jdGlvbihhKXtyZXR1cm4gdHx8KGsubWltZVR5cGU9YSksdGhpc30sc3RhdHVzQ29kZTpmdW5jdGlvbihhKXt2YXIgYjtpZihhKWlmKDI+dClmb3IoYiBpbiBhKXFbYl09W3FbYl0sYVtiXV07ZWxzZSB2LmFsd2F5cyhhW3Yuc3RhdHVzXSk7cmV0dXJuIHRoaXN9LGFib3J0OmZ1bmN0aW9uKGEpe3ZhciBiPWF8fHU7cmV0dXJuIGkmJmkuYWJvcnQoYikseCgwLGIpLHRoaXN9fTtpZihvLnByb21pc2UodikuY29tcGxldGU9cC5hZGQsdi5zdWNjZXNzPXYuZG9uZSx2LmVycm9yPXYuZmFpbCxrLnVybD0oKGF8fGsudXJsfHx6YikrXCJcIikucmVwbGFjZShBYixcIlwiKS5yZXBsYWNlKEZiLHliWzFdK1wiLy9cIiksay50eXBlPWIubWV0aG9kfHxiLnR5cGV8fGsubWV0aG9kfHxrLnR5cGUsay5kYXRhVHlwZXM9bS50cmltKGsuZGF0YVR5cGV8fFwiKlwiKS50b0xvd2VyQ2FzZSgpLm1hdGNoKEUpfHxbXCJcIl0sbnVsbD09ay5jcm9zc0RvbWFpbiYmKGM9R2IuZXhlYyhrLnVybC50b0xvd2VyQ2FzZSgpKSxrLmNyb3NzRG9tYWluPSEoIWN8fGNbMV09PT15YlsxXSYmY1syXT09PXliWzJdJiYoY1szXXx8KFwiaHR0cDpcIj09PWNbMV0/XCI4MFwiOlwiNDQzXCIpKT09PSh5YlszXXx8KFwiaHR0cDpcIj09PXliWzFdP1wiODBcIjpcIjQ0M1wiKSkpKSxrLmRhdGEmJmsucHJvY2Vzc0RhdGEmJlwic3RyaW5nXCIhPXR5cGVvZiBrLmRhdGEmJihrLmRhdGE9bS5wYXJhbShrLmRhdGEsay50cmFkaXRpb25hbCkpLE1iKEhiLGssYix2KSwyPT09dClyZXR1cm4gdjtoPW0uZXZlbnQmJmsuZ2xvYmFsLGgmJjA9PT1tLmFjdGl2ZSsrJiZtLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RhcnRcIiksay50eXBlPWsudHlwZS50b1VwcGVyQ2FzZSgpLGsuaGFzQ29udGVudD0hRWIudGVzdChrLnR5cGUpLGU9ay51cmwsay5oYXNDb250ZW50fHwoay5kYXRhJiYoZT1rLnVybCs9KHdiLnRlc3QoZSk/XCImXCI6XCI/XCIpK2suZGF0YSxkZWxldGUgay5kYXRhKSxrLmNhY2hlPT09ITEmJihrLnVybD1CYi50ZXN0KGUpP2UucmVwbGFjZShCYixcIiQxXz1cIit2YisrKTplKyh3Yi50ZXN0KGUpP1wiJlwiOlwiP1wiKStcIl89XCIrdmIrKykpLGsuaWZNb2RpZmllZCYmKG0ubGFzdE1vZGlmaWVkW2VdJiZ2LnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Nb2RpZmllZC1TaW5jZVwiLG0ubGFzdE1vZGlmaWVkW2VdKSxtLmV0YWdbZV0mJnYuc2V0UmVxdWVzdEhlYWRlcihcIklmLU5vbmUtTWF0Y2hcIixtLmV0YWdbZV0pKSwoay5kYXRhJiZrLmhhc0NvbnRlbnQmJmsuY29udGVudFR5cGUhPT0hMXx8Yi5jb250ZW50VHlwZSkmJnYuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLGsuY29udGVudFR5cGUpLHYuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLGsuZGF0YVR5cGVzWzBdJiZrLmFjY2VwdHNbay5kYXRhVHlwZXNbMF1dP2suYWNjZXB0c1trLmRhdGFUeXBlc1swXV0rKFwiKlwiIT09ay5kYXRhVHlwZXNbMF0/XCIsIFwiK0piK1wiOyBxPTAuMDFcIjpcIlwiKTprLmFjY2VwdHNbXCIqXCJdKTtmb3IoZCBpbiBrLmhlYWRlcnMpdi5zZXRSZXF1ZXN0SGVhZGVyKGQsay5oZWFkZXJzW2RdKTtpZihrLmJlZm9yZVNlbmQmJihrLmJlZm9yZVNlbmQuY2FsbChsLHYsayk9PT0hMXx8Mj09PXQpKXJldHVybiB2LmFib3J0KCk7dT1cImFib3J0XCI7Zm9yKGQgaW57c3VjY2VzczoxLGVycm9yOjEsY29tcGxldGU6MX0pdltkXShrW2RdKTtpZihpPU1iKEliLGssYix2KSl7di5yZWFkeVN0YXRlPTEsaCYmbi50cmlnZ2VyKFwiYWpheFNlbmRcIixbdixrXSksay5hc3luYyYmay50aW1lb3V0PjAmJihnPXNldFRpbWVvdXQoZnVuY3Rpb24oKXt2LmFib3J0KFwidGltZW91dFwiKX0say50aW1lb3V0KSk7dHJ5e3Q9MSxpLnNlbmQocix4KX1jYXRjaCh3KXtpZighKDI+dCkpdGhyb3cgdzt4KC0xLHcpfX1lbHNlIHgoLTEsXCJObyBUcmFuc3BvcnRcIik7ZnVuY3Rpb24geChhLGIsYyxkKXt2YXIgaixyLHMsdSx3LHg9YjsyIT09dCYmKHQ9MixnJiZjbGVhclRpbWVvdXQoZyksaT12b2lkIDAsZj1kfHxcIlwiLHYucmVhZHlTdGF0ZT1hPjA/NDowLGo9YT49MjAwJiYzMDA+YXx8MzA0PT09YSxjJiYodT1PYihrLHYsYykpLHU9UGIoayx1LHYsaiksaj8oay5pZk1vZGlmaWVkJiYodz12LmdldFJlc3BvbnNlSGVhZGVyKFwiTGFzdC1Nb2RpZmllZFwiKSx3JiYobS5sYXN0TW9kaWZpZWRbZV09dyksdz12LmdldFJlc3BvbnNlSGVhZGVyKFwiZXRhZ1wiKSx3JiYobS5ldGFnW2VdPXcpKSwyMDQ9PT1hfHxcIkhFQURcIj09PWsudHlwZT94PVwibm9jb250ZW50XCI6MzA0PT09YT94PVwibm90bW9kaWZpZWRcIjooeD11LnN0YXRlLHI9dS5kYXRhLHM9dS5lcnJvcixqPSFzKSk6KHM9eCwoYXx8IXgpJiYoeD1cImVycm9yXCIsMD5hJiYoYT0wKSkpLHYuc3RhdHVzPWEsdi5zdGF0dXNUZXh0PShifHx4KStcIlwiLGo/by5yZXNvbHZlV2l0aChsLFtyLHgsdl0pOm8ucmVqZWN0V2l0aChsLFt2LHgsc10pLHYuc3RhdHVzQ29kZShxKSxxPXZvaWQgMCxoJiZuLnRyaWdnZXIoaj9cImFqYXhTdWNjZXNzXCI6XCJhamF4RXJyb3JcIixbdixrLGo/cjpzXSkscC5maXJlV2l0aChsLFt2LHhdKSxoJiYobi50cmlnZ2VyKFwiYWpheENvbXBsZXRlXCIsW3Ysa10pLC0tbS5hY3RpdmV8fG0uZXZlbnQudHJpZ2dlcihcImFqYXhTdG9wXCIpKSl9cmV0dXJuIHZ9LGdldEpTT046ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBtLmdldChhLGIsYyxcImpzb25cIil9LGdldFNjcmlwdDpmdW5jdGlvbihhLGIpe3JldHVybiBtLmdldChhLHZvaWQgMCxiLFwic2NyaXB0XCIpfX0pLG0uZWFjaChbXCJnZXRcIixcInBvc3RcIl0sZnVuY3Rpb24oYSxiKXttW2JdPWZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBtLmlzRnVuY3Rpb24oYykmJihlPWV8fGQsZD1jLGM9dm9pZCAwKSxtLmFqYXgoe3VybDphLHR5cGU6YixkYXRhVHlwZTplLGRhdGE6YyxzdWNjZXNzOmR9KX19KSxtLl9ldmFsVXJsPWZ1bmN0aW9uKGEpe3JldHVybiBtLmFqYXgoe3VybDphLHR5cGU6XCJHRVRcIixkYXRhVHlwZTpcInNjcmlwdFwiLGFzeW5jOiExLGdsb2JhbDohMSxcInRocm93c1wiOiEwfSl9LG0uZm4uZXh0ZW5kKHt3cmFwQWxsOmZ1bmN0aW9uKGEpe2lmKG0uaXNGdW5jdGlvbihhKSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGIpe20odGhpcykud3JhcEFsbChhLmNhbGwodGhpcyxiKSl9KTtpZih0aGlzWzBdKXt2YXIgYj1tKGEsdGhpc1swXS5vd25lckRvY3VtZW50KS5lcSgwKS5jbG9uZSghMCk7dGhpc1swXS5wYXJlbnROb2RlJiZiLmluc2VydEJlZm9yZSh0aGlzWzBdKSxiLm1hcChmdW5jdGlvbigpe3ZhciBhPXRoaXM7d2hpbGUoYS5maXJzdENoaWxkJiYxPT09YS5maXJzdENoaWxkLm5vZGVUeXBlKWE9YS5maXJzdENoaWxkO3JldHVybiBhfSkuYXBwZW5kKHRoaXMpfXJldHVybiB0aGlzfSx3cmFwSW5uZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChtLmlzRnVuY3Rpb24oYSk/ZnVuY3Rpb24oYil7bSh0aGlzKS53cmFwSW5uZXIoYS5jYWxsKHRoaXMsYikpfTpmdW5jdGlvbigpe3ZhciBiPW0odGhpcyksYz1iLmNvbnRlbnRzKCk7Yy5sZW5ndGg/Yy53cmFwQWxsKGEpOmIuYXBwZW5kKGEpfSl9LHdyYXA6ZnVuY3Rpb24oYSl7dmFyIGI9bS5pc0Z1bmN0aW9uKGEpO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYyl7bSh0aGlzKS53cmFwQWxsKGI/YS5jYWxsKHRoaXMsYyk6YSl9KX0sdW53cmFwOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucGFyZW50KCkuZWFjaChmdW5jdGlvbigpe20ubm9kZU5hbWUodGhpcyxcImJvZHlcIil8fG0odGhpcykucmVwbGFjZVdpdGgodGhpcy5jaGlsZE5vZGVzKX0pLmVuZCgpfX0pLG0uZXhwci5maWx0ZXJzLmhpZGRlbj1mdW5jdGlvbihhKXtyZXR1cm4gYS5vZmZzZXRXaWR0aDw9MCYmYS5vZmZzZXRIZWlnaHQ8PTB8fCFrLnJlbGlhYmxlSGlkZGVuT2Zmc2V0cygpJiZcIm5vbmVcIj09PShhLnN0eWxlJiZhLnN0eWxlLmRpc3BsYXl8fG0uY3NzKGEsXCJkaXNwbGF5XCIpKX0sbS5leHByLmZpbHRlcnMudmlzaWJsZT1mdW5jdGlvbihhKXtyZXR1cm4hbS5leHByLmZpbHRlcnMuaGlkZGVuKGEpfTt2YXIgUWI9LyUyMC9nLFJiPS9cXFtcXF0kLyxTYj0vXFxyP1xcbi9nLFRiPS9eKD86c3VibWl0fGJ1dHRvbnxpbWFnZXxyZXNldHxmaWxlKSQvaSxVYj0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxrZXlnZW4pL2k7ZnVuY3Rpb24gVmIoYSxiLGMsZCl7dmFyIGU7aWYobS5pc0FycmF5KGIpKW0uZWFjaChiLGZ1bmN0aW9uKGIsZSl7Y3x8UmIudGVzdChhKT9kKGEsZSk6VmIoYStcIltcIisoXCJvYmplY3RcIj09dHlwZW9mIGU/YjpcIlwiKStcIl1cIixlLGMsZCl9KTtlbHNlIGlmKGN8fFwib2JqZWN0XCIhPT1tLnR5cGUoYikpZChhLGIpO2Vsc2UgZm9yKGUgaW4gYilWYihhK1wiW1wiK2UrXCJdXCIsYltlXSxjLGQpfW0ucGFyYW09ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPVtdLGU9ZnVuY3Rpb24oYSxiKXtiPW0uaXNGdW5jdGlvbihiKT9iKCk6bnVsbD09Yj9cIlwiOmIsZFtkLmxlbmd0aF09ZW5jb2RlVVJJQ29tcG9uZW50KGEpK1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudChiKX07aWYodm9pZCAwPT09YiYmKGI9bS5hamF4U2V0dGluZ3MmJm0uYWpheFNldHRpbmdzLnRyYWRpdGlvbmFsKSxtLmlzQXJyYXkoYSl8fGEuanF1ZXJ5JiYhbS5pc1BsYWluT2JqZWN0KGEpKW0uZWFjaChhLGZ1bmN0aW9uKCl7ZSh0aGlzLm5hbWUsdGhpcy52YWx1ZSl9KTtlbHNlIGZvcihjIGluIGEpVmIoYyxhW2NdLGIsZSk7cmV0dXJuIGQuam9pbihcIiZcIikucmVwbGFjZShRYixcIitcIil9LG0uZm4uZXh0ZW5kKHtzZXJpYWxpemU6ZnVuY3Rpb24oKXtyZXR1cm4gbS5wYXJhbSh0aGlzLnNlcmlhbGl6ZUFycmF5KCkpfSxzZXJpYWxpemVBcnJheTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBhPW0ucHJvcCh0aGlzLFwiZWxlbWVudHNcIik7cmV0dXJuIGE/bS5tYWtlQXJyYXkoYSk6dGhpc30pLmZpbHRlcihmdW5jdGlvbigpe3ZhciBhPXRoaXMudHlwZTtyZXR1cm4gdGhpcy5uYW1lJiYhbSh0aGlzKS5pcyhcIjpkaXNhYmxlZFwiKSYmVWIudGVzdCh0aGlzLm5vZGVOYW1lKSYmIVRiLnRlc3QoYSkmJih0aGlzLmNoZWNrZWR8fCFXLnRlc3QoYSkpfSkubWFwKGZ1bmN0aW9uKGEsYil7dmFyIGM9bSh0aGlzKS52YWwoKTtyZXR1cm4gbnVsbD09Yz9udWxsOm0uaXNBcnJheShjKT9tLm1hcChjLGZ1bmN0aW9uKGEpe3JldHVybntuYW1lOmIubmFtZSx2YWx1ZTphLnJlcGxhY2UoU2IsXCJcXHJcXG5cIil9fSk6e25hbWU6Yi5uYW1lLHZhbHVlOmMucmVwbGFjZShTYixcIlxcclxcblwiKX19KS5nZXQoKX19KSxtLmFqYXhTZXR0aW5ncy54aHI9dm9pZCAwIT09YS5BY3RpdmVYT2JqZWN0P2Z1bmN0aW9uKCl7cmV0dXJuIXRoaXMuaXNMb2NhbCYmL14oZ2V0fHBvc3R8aGVhZHxwdXR8ZGVsZXRlfG9wdGlvbnMpJC9pLnRlc3QodGhpcy50eXBlKSYmWmIoKXx8JGIoKX06WmI7dmFyIFdiPTAsWGI9e30sWWI9bS5hamF4U2V0dGluZ3MueGhyKCk7YS5hdHRhY2hFdmVudCYmYS5hdHRhY2hFdmVudChcIm9udW5sb2FkXCIsZnVuY3Rpb24oKXtmb3IodmFyIGEgaW4gWGIpWGJbYV0odm9pZCAwLCEwKX0pLGsuY29ycz0hIVliJiZcIndpdGhDcmVkZW50aWFsc1wiaW4gWWIsWWI9ay5hamF4PSEhWWIsWWImJm0uYWpheFRyYW5zcG9ydChmdW5jdGlvbihhKXtpZighYS5jcm9zc0RvbWFpbnx8ay5jb3JzKXt2YXIgYjtyZXR1cm57c2VuZDpmdW5jdGlvbihjLGQpe3ZhciBlLGY9YS54aHIoKSxnPSsrV2I7aWYoZi5vcGVuKGEudHlwZSxhLnVybCxhLmFzeW5jLGEudXNlcm5hbWUsYS5wYXNzd29yZCksYS54aHJGaWVsZHMpZm9yKGUgaW4gYS54aHJGaWVsZHMpZltlXT1hLnhockZpZWxkc1tlXTthLm1pbWVUeXBlJiZmLm92ZXJyaWRlTWltZVR5cGUmJmYub3ZlcnJpZGVNaW1lVHlwZShhLm1pbWVUeXBlKSxhLmNyb3NzRG9tYWlufHxjW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXXx8KGNbXCJYLVJlcXVlc3RlZC1XaXRoXCJdPVwiWE1MSHR0cFJlcXVlc3RcIik7Zm9yKGUgaW4gYyl2b2lkIDAhPT1jW2VdJiZmLnNldFJlcXVlc3RIZWFkZXIoZSxjW2VdK1wiXCIpO2Yuc2VuZChhLmhhc0NvbnRlbnQmJmEuZGF0YXx8bnVsbCksYj1mdW5jdGlvbihjLGUpe3ZhciBoLGksajtpZihiJiYoZXx8ND09PWYucmVhZHlTdGF0ZSkpaWYoZGVsZXRlIFhiW2ddLGI9dm9pZCAwLGYub25yZWFkeXN0YXRlY2hhbmdlPW0ubm9vcCxlKTQhPT1mLnJlYWR5U3RhdGUmJmYuYWJvcnQoKTtlbHNle2o9e30saD1mLnN0YXR1cyxcInN0cmluZ1wiPT10eXBlb2YgZi5yZXNwb25zZVRleHQmJihqLnRleHQ9Zi5yZXNwb25zZVRleHQpO3RyeXtpPWYuc3RhdHVzVGV4dH1jYXRjaChrKXtpPVwiXCJ9aHx8IWEuaXNMb2NhbHx8YS5jcm9zc0RvbWFpbj8xMjIzPT09aCYmKGg9MjA0KTpoPWoudGV4dD8yMDA6NDA0fWomJmQoaCxpLGosZi5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSl9LGEuYXN5bmM/ND09PWYucmVhZHlTdGF0ZT9zZXRUaW1lb3V0KGIpOmYub25yZWFkeXN0YXRlY2hhbmdlPVhiW2ddPWI6YigpfSxhYm9ydDpmdW5jdGlvbigpe2ImJmIodm9pZCAwLCEwKX19fX0pO2Z1bmN0aW9uIFpiKCl7dHJ5e3JldHVybiBuZXcgYS5YTUxIdHRwUmVxdWVzdH1jYXRjaChiKXt9fWZ1bmN0aW9uICRiKCl7dHJ5e3JldHVybiBuZXcgYS5BY3RpdmVYT2JqZWN0KFwiTWljcm9zb2Z0LlhNTEhUVFBcIil9Y2F0Y2goYil7fX1tLmFqYXhTZXR1cCh7YWNjZXB0czp7c2NyaXB0OlwidGV4dC9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9lY21hc2NyaXB0LCBhcHBsaWNhdGlvbi94LWVjbWFzY3JpcHRcIn0sY29udGVudHM6e3NjcmlwdDovKD86amF2YXxlY21hKXNjcmlwdC99LGNvbnZlcnRlcnM6e1widGV4dCBzY3JpcHRcIjpmdW5jdGlvbihhKXtyZXR1cm4gbS5nbG9iYWxFdmFsKGEpLGF9fX0pLG0uYWpheFByZWZpbHRlcihcInNjcmlwdFwiLGZ1bmN0aW9uKGEpe3ZvaWQgMD09PWEuY2FjaGUmJihhLmNhY2hlPSExKSxhLmNyb3NzRG9tYWluJiYoYS50eXBlPVwiR0VUXCIsYS5nbG9iYWw9ITEpfSksbS5hamF4VHJhbnNwb3J0KFwic2NyaXB0XCIsZnVuY3Rpb24oYSl7aWYoYS5jcm9zc0RvbWFpbil7dmFyIGIsYz15LmhlYWR8fG0oXCJoZWFkXCIpWzBdfHx5LmRvY3VtZW50RWxlbWVudDtyZXR1cm57c2VuZDpmdW5jdGlvbihkLGUpe2I9eS5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpLGIuYXN5bmM9ITAsYS5zY3JpcHRDaGFyc2V0JiYoYi5jaGFyc2V0PWEuc2NyaXB0Q2hhcnNldCksYi5zcmM9YS51cmwsYi5vbmxvYWQ9Yi5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oYSxjKXsoY3x8IWIucmVhZHlTdGF0ZXx8L2xvYWRlZHxjb21wbGV0ZS8udGVzdChiLnJlYWR5U3RhdGUpKSYmKGIub25sb2FkPWIub25yZWFkeXN0YXRlY2hhbmdlPW51bGwsYi5wYXJlbnROb2RlJiZiLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYiksYj1udWxsLGN8fGUoMjAwLFwic3VjY2Vzc1wiKSl9LGMuaW5zZXJ0QmVmb3JlKGIsYy5maXJzdENoaWxkKX0sYWJvcnQ6ZnVuY3Rpb24oKXtiJiZiLm9ubG9hZCh2b2lkIDAsITApfX19fSk7dmFyIF9iPVtdLGFjPS8oPSlcXD8oPz0mfCQpfFxcP1xcPy87bS5hamF4U2V0dXAoe2pzb25wOlwiY2FsbGJhY2tcIixqc29ucENhbGxiYWNrOmZ1bmN0aW9uKCl7dmFyIGE9X2IucG9wKCl8fG0uZXhwYW5kbytcIl9cIit2YisrO3JldHVybiB0aGlzW2FdPSEwLGF9fSksbS5hamF4UHJlZmlsdGVyKFwianNvbiBqc29ucFwiLGZ1bmN0aW9uKGIsYyxkKXt2YXIgZSxmLGcsaD1iLmpzb25wIT09ITEmJihhYy50ZXN0KGIudXJsKT9cInVybFwiOlwic3RyaW5nXCI9PXR5cGVvZiBiLmRhdGEmJiEoYi5jb250ZW50VHlwZXx8XCJcIikuaW5kZXhPZihcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKSYmYWMudGVzdChiLmRhdGEpJiZcImRhdGFcIik7cmV0dXJuIGh8fFwianNvbnBcIj09PWIuZGF0YVR5cGVzWzBdPyhlPWIuanNvbnBDYWxsYmFjaz1tLmlzRnVuY3Rpb24oYi5qc29ucENhbGxiYWNrKT9iLmpzb25wQ2FsbGJhY2soKTpiLmpzb25wQ2FsbGJhY2ssaD9iW2hdPWJbaF0ucmVwbGFjZShhYyxcIiQxXCIrZSk6Yi5qc29ucCE9PSExJiYoYi51cmwrPSh3Yi50ZXN0KGIudXJsKT9cIiZcIjpcIj9cIikrYi5qc29ucCtcIj1cIitlKSxiLmNvbnZlcnRlcnNbXCJzY3JpcHQganNvblwiXT1mdW5jdGlvbigpe3JldHVybiBnfHxtLmVycm9yKGUrXCIgd2FzIG5vdCBjYWxsZWRcIiksZ1swXX0sYi5kYXRhVHlwZXNbMF09XCJqc29uXCIsZj1hW2VdLGFbZV09ZnVuY3Rpb24oKXtnPWFyZ3VtZW50c30sZC5hbHdheXMoZnVuY3Rpb24oKXthW2VdPWYsYltlXSYmKGIuanNvbnBDYWxsYmFjaz1jLmpzb25wQ2FsbGJhY2ssX2IucHVzaChlKSksZyYmbS5pc0Z1bmN0aW9uKGYpJiZmKGdbMF0pLGc9Zj12b2lkIDB9KSxcInNjcmlwdFwiKTp2b2lkIDB9KSxtLnBhcnNlSFRNTD1mdW5jdGlvbihhLGIsYyl7aWYoIWF8fFwic3RyaW5nXCIhPXR5cGVvZiBhKXJldHVybiBudWxsO1wiYm9vbGVhblwiPT10eXBlb2YgYiYmKGM9YixiPSExKSxiPWJ8fHk7dmFyIGQ9dS5leGVjKGEpLGU9IWMmJltdO3JldHVybiBkP1tiLmNyZWF0ZUVsZW1lbnQoZFsxXSldOihkPW0uYnVpbGRGcmFnbWVudChbYV0sYixlKSxlJiZlLmxlbmd0aCYmbShlKS5yZW1vdmUoKSxtLm1lcmdlKFtdLGQuY2hpbGROb2RlcykpfTt2YXIgYmM9bS5mbi5sb2FkO20uZm4ubG9hZD1mdW5jdGlvbihhLGIsYyl7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGEmJmJjKXJldHVybiBiYy5hcHBseSh0aGlzLGFyZ3VtZW50cyk7dmFyIGQsZSxmLGc9dGhpcyxoPWEuaW5kZXhPZihcIiBcIik7cmV0dXJuIGg+PTAmJihkPW0udHJpbShhLnNsaWNlKGgsYS5sZW5ndGgpKSxhPWEuc2xpY2UoMCxoKSksbS5pc0Z1bmN0aW9uKGIpPyhjPWIsYj12b2lkIDApOmImJlwib2JqZWN0XCI9PXR5cGVvZiBiJiYoZj1cIlBPU1RcIiksZy5sZW5ndGg+MCYmbS5hamF4KHt1cmw6YSx0eXBlOmYsZGF0YVR5cGU6XCJodG1sXCIsZGF0YTpifSkuZG9uZShmdW5jdGlvbihhKXtlPWFyZ3VtZW50cyxnLmh0bWwoZD9tKFwiPGRpdj5cIikuYXBwZW5kKG0ucGFyc2VIVE1MKGEpKS5maW5kKGQpOmEpfSkuY29tcGxldGUoYyYmZnVuY3Rpb24oYSxiKXtnLmVhY2goYyxlfHxbYS5yZXNwb25zZVRleHQsYixhXSl9KSx0aGlzfSxtLmVhY2goW1wiYWpheFN0YXJ0XCIsXCJhamF4U3RvcFwiLFwiYWpheENvbXBsZXRlXCIsXCJhamF4RXJyb3JcIixcImFqYXhTdWNjZXNzXCIsXCJhamF4U2VuZFwiXSxmdW5jdGlvbihhLGIpe20uZm5bYl09ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMub24oYixhKX19KSxtLmV4cHIuZmlsdGVycy5hbmltYXRlZD1mdW5jdGlvbihhKXtyZXR1cm4gbS5ncmVwKG0udGltZXJzLGZ1bmN0aW9uKGIpe3JldHVybiBhPT09Yi5lbGVtfSkubGVuZ3RofTt2YXIgY2M9YS5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7ZnVuY3Rpb24gZGMoYSl7cmV0dXJuIG0uaXNXaW5kb3coYSk/YTo5PT09YS5ub2RlVHlwZT9hLmRlZmF1bHRWaWV3fHxhLnBhcmVudFdpbmRvdzohMX1tLm9mZnNldD17c2V0T2Zmc2V0OmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZyxoLGksaixrPW0uY3NzKGEsXCJwb3NpdGlvblwiKSxsPW0oYSksbj17fTtcInN0YXRpY1wiPT09ayYmKGEuc3R5bGUucG9zaXRpb249XCJyZWxhdGl2ZVwiKSxoPWwub2Zmc2V0KCksZj1tLmNzcyhhLFwidG9wXCIpLGk9bS5jc3MoYSxcImxlZnRcIiksaj0oXCJhYnNvbHV0ZVwiPT09a3x8XCJmaXhlZFwiPT09aykmJm0uaW5BcnJheShcImF1dG9cIixbZixpXSk+LTEsaj8oZD1sLnBvc2l0aW9uKCksZz1kLnRvcCxlPWQubGVmdCk6KGc9cGFyc2VGbG9hdChmKXx8MCxlPXBhcnNlRmxvYXQoaSl8fDApLG0uaXNGdW5jdGlvbihiKSYmKGI9Yi5jYWxsKGEsYyxoKSksbnVsbCE9Yi50b3AmJihuLnRvcD1iLnRvcC1oLnRvcCtnKSxudWxsIT1iLmxlZnQmJihuLmxlZnQ9Yi5sZWZ0LWgubGVmdCtlKSxcInVzaW5nXCJpbiBiP2IudXNpbmcuY2FsbChhLG4pOmwuY3NzKG4pfX0sbS5mbi5leHRlbmQoe29mZnNldDpmdW5jdGlvbihhKXtpZihhcmd1bWVudHMubGVuZ3RoKXJldHVybiB2b2lkIDA9PT1hP3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKGIpe20ub2Zmc2V0LnNldE9mZnNldCh0aGlzLGEsYil9KTt2YXIgYixjLGQ9e3RvcDowLGxlZnQ6MH0sZT10aGlzWzBdLGY9ZSYmZS5vd25lckRvY3VtZW50O2lmKGYpcmV0dXJuIGI9Zi5kb2N1bWVudEVsZW1lbnQsbS5jb250YWlucyhiLGUpPyh0eXBlb2YgZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QhPT1LJiYoZD1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKSxjPWRjKGYpLHt0b3A6ZC50b3ArKGMucGFnZVlPZmZzZXR8fGIuc2Nyb2xsVG9wKS0oYi5jbGllbnRUb3B8fDApLGxlZnQ6ZC5sZWZ0KyhjLnBhZ2VYT2Zmc2V0fHxiLnNjcm9sbExlZnQpLShiLmNsaWVudExlZnR8fDApfSk6ZH0scG9zaXRpb246ZnVuY3Rpb24oKXtpZih0aGlzWzBdKXt2YXIgYSxiLGM9e3RvcDowLGxlZnQ6MH0sZD10aGlzWzBdO3JldHVyblwiZml4ZWRcIj09PW0uY3NzKGQsXCJwb3NpdGlvblwiKT9iPWQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk6KGE9dGhpcy5vZmZzZXRQYXJlbnQoKSxiPXRoaXMub2Zmc2V0KCksbS5ub2RlTmFtZShhWzBdLFwiaHRtbFwiKXx8KGM9YS5vZmZzZXQoKSksYy50b3ArPW0uY3NzKGFbMF0sXCJib3JkZXJUb3BXaWR0aFwiLCEwKSxjLmxlZnQrPW0uY3NzKGFbMF0sXCJib3JkZXJMZWZ0V2lkdGhcIiwhMCkpLHt0b3A6Yi50b3AtYy50b3AtbS5jc3MoZCxcIm1hcmdpblRvcFwiLCEwKSxsZWZ0OmIubGVmdC1jLmxlZnQtbS5jc3MoZCxcIm1hcmdpbkxlZnRcIiwhMCl9fX0sb2Zmc2V0UGFyZW50OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vZmZzZXRQYXJlbnR8fGNjO3doaWxlKGEmJiFtLm5vZGVOYW1lKGEsXCJodG1sXCIpJiZcInN0YXRpY1wiPT09bS5jc3MoYSxcInBvc2l0aW9uXCIpKWE9YS5vZmZzZXRQYXJlbnQ7cmV0dXJuIGF8fGNjfSl9fSksbS5lYWNoKHtzY3JvbGxMZWZ0OlwicGFnZVhPZmZzZXRcIixzY3JvbGxUb3A6XCJwYWdlWU9mZnNldFwifSxmdW5jdGlvbihhLGIpe3ZhciBjPS9ZLy50ZXN0KGIpO20uZm5bYV09ZnVuY3Rpb24oZCl7cmV0dXJuIFYodGhpcyxmdW5jdGlvbihhLGQsZSl7dmFyIGY9ZGMoYSk7cmV0dXJuIHZvaWQgMD09PWU/Zj9iIGluIGY/ZltiXTpmLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtkXTphW2RdOnZvaWQoZj9mLnNjcm9sbFRvKGM/bShmKS5zY3JvbGxMZWZ0KCk6ZSxjP2U6bShmKS5zY3JvbGxUb3AoKSk6YVtkXT1lKX0sYSxkLGFyZ3VtZW50cy5sZW5ndGgsbnVsbCl9fSksbS5lYWNoKFtcInRvcFwiLFwibGVmdFwiXSxmdW5jdGlvbihhLGIpe20uY3NzSG9va3NbYl09TGEoay5waXhlbFBvc2l0aW9uLGZ1bmN0aW9uKGEsYyl7cmV0dXJuIGM/KGM9SmEoYSxiKSxIYS50ZXN0KGMpP20oYSkucG9zaXRpb24oKVtiXStcInB4XCI6Yyk6dm9pZCAwfSl9KSxtLmVhY2goe0hlaWdodDpcImhlaWdodFwiLFdpZHRoOlwid2lkdGhcIn0sZnVuY3Rpb24oYSxiKXttLmVhY2goe3BhZGRpbmc6XCJpbm5lclwiK2EsY29udGVudDpiLFwiXCI6XCJvdXRlclwiK2F9LGZ1bmN0aW9uKGMsZCl7bS5mbltkXT1mdW5jdGlvbihkLGUpe3ZhciBmPWFyZ3VtZW50cy5sZW5ndGgmJihjfHxcImJvb2xlYW5cIiE9dHlwZW9mIGQpLGc9Y3x8KGQ9PT0hMHx8ZT09PSEwP1wibWFyZ2luXCI6XCJib3JkZXJcIik7cmV0dXJuIFYodGhpcyxmdW5jdGlvbihiLGMsZCl7dmFyIGU7cmV0dXJuIG0uaXNXaW5kb3coYik/Yi5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnRbXCJjbGllbnRcIithXTo5PT09Yi5ub2RlVHlwZT8oZT1iLmRvY3VtZW50RWxlbWVudCxNYXRoLm1heChiLmJvZHlbXCJzY3JvbGxcIithXSxlW1wic2Nyb2xsXCIrYV0sYi5ib2R5W1wib2Zmc2V0XCIrYV0sZVtcIm9mZnNldFwiK2FdLGVbXCJjbGllbnRcIithXSkpOnZvaWQgMD09PWQ/bS5jc3MoYixjLGcpOm0uc3R5bGUoYixjLGQsZyl9LGIsZj9kOnZvaWQgMCxmLG51bGwpfX0pfSksbS5mbi5zaXplPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubGVuZ3RofSxtLmZuLmFuZFNlbGY9bS5mbi5hZGRCYWNrLFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZCYmZGVmaW5lKFwianF1ZXJ5XCIsW10sZnVuY3Rpb24oKXtyZXR1cm4gbX0pO3ZhciBlYz1hLmpRdWVyeSxmYz1hLiQ7cmV0dXJuIG0ubm9Db25mbGljdD1mdW5jdGlvbihiKXtyZXR1cm4gYS4kPT09bSYmKGEuJD1mYyksYiYmYS5qUXVlcnk9PT1tJiYoYS5qUXVlcnk9ZWMpLG19LHR5cGVvZiBiPT09SyYmKGEualF1ZXJ5PWEuJD1tKSxtfSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9odG1sNVN0b3J5VGhlbWUvanMvanF1ZXJ5Lm1pbi5qcyIsIi8qIGpxdWVyeS5zY3JvbGxleCB2MC4yLjEgfCAoYykgQGFqbGtuIHwgZ2l0aHViLmNvbS9hamxrbi9qcXVlcnkuc2Nyb2xsZXggfCBNSVQgbGljZW5zZWQgKi9cclxuIWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUodCxlLG4pe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0JiYoXCIlXCI9PXQuc2xpY2UoLTEpP3Q9cGFyc2VJbnQodC5zdWJzdHJpbmcoMCx0Lmxlbmd0aC0xKSkvMTAwKmU6XCJ2aFwiPT10LnNsaWNlKC0yKT90PXBhcnNlSW50KHQuc3Vic3RyaW5nKDAsdC5sZW5ndGgtMikpLzEwMCpuOlwicHhcIj09dC5zbGljZSgtMikmJih0PXBhcnNlSW50KHQuc3Vic3RyaW5nKDAsdC5sZW5ndGgtMikpKSksdH12YXIgbj10KHdpbmRvdyksaT0xLG89e307bi5vbihcInNjcm9sbFwiLGZ1bmN0aW9uKCl7dmFyIGU9bi5zY3JvbGxUb3AoKTt0Lm1hcChvLGZ1bmN0aW9uKHQpe3dpbmRvdy5jbGVhclRpbWVvdXQodC50aW1lb3V0SWQpLHQudGltZW91dElkPXdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dC5oYW5kbGVyKGUpfSx0Lm9wdGlvbnMuZGVsYXkpfSl9KS5vbihcImxvYWRcIixmdW5jdGlvbigpe24udHJpZ2dlcihcInNjcm9sbFwiKX0pLGpRdWVyeS5mbi5zY3JvbGxleD1mdW5jdGlvbihsKXt2YXIgcz10KHRoaXMpO2lmKDA9PXRoaXMubGVuZ3RoKXJldHVybiBzO2lmKHRoaXMubGVuZ3RoPjEpe2Zvcih2YXIgcj0wO3I8dGhpcy5sZW5ndGg7cisrKXQodGhpc1tyXSkuc2Nyb2xsZXgobCk7cmV0dXJuIHN9aWYocy5kYXRhKFwiX3Njcm9sbGV4SWRcIikpcmV0dXJuIHM7dmFyIGEsdSxoLGMscDtzd2l0Y2goYT1pKyssdT1qUXVlcnkuZXh0ZW5kKHt0b3A6MCxib3R0b206MCxkZWxheTowLG1vZGU6XCJkZWZhdWx0XCIsZW50ZXI6bnVsbCxsZWF2ZTpudWxsLGluaXRpYWxpemU6bnVsbCx0ZXJtaW5hdGU6bnVsbCxzY3JvbGw6bnVsbH0sbCksdS5tb2RlKXtjYXNlXCJ0b3BcIjpoPWZ1bmN0aW9uKHQsZSxuLGksbyl7cmV0dXJuIHQ+PWkmJm8+PXR9O2JyZWFrO2Nhc2VcImJvdHRvbVwiOmg9ZnVuY3Rpb24odCxlLG4saSxvKXtyZXR1cm4gbj49aSYmbz49bn07YnJlYWs7Y2FzZVwibWlkZGxlXCI6aD1mdW5jdGlvbih0LGUsbixpLG8pe3JldHVybiBlPj1pJiZvPj1lfTticmVhaztjYXNlXCJ0b3Atb25seVwiOmg9ZnVuY3Rpb24odCxlLG4saSxvKXtyZXR1cm4gaT49dCYmbj49aX07YnJlYWs7Y2FzZVwiYm90dG9tLW9ubHlcIjpoPWZ1bmN0aW9uKHQsZSxuLGksbyl7cmV0dXJuIG4+PW8mJm8+PXR9O2JyZWFrO2RlZmF1bHQ6Y2FzZVwiZGVmYXVsdFwiOmg9ZnVuY3Rpb24odCxlLG4saSxvKXtyZXR1cm4gbj49aSYmbz49dH19cmV0dXJuIGM9ZnVuY3Rpb24odCl7dmFyIGksbyxsLHMscixhLHU9dGhpcy5zdGF0ZSxoPSExLGM9dGhpcy4kZWxlbWVudC5vZmZzZXQoKTtpPW4uaGVpZ2h0KCksbz10K2kvMixsPXQraSxzPXRoaXMuJGVsZW1lbnQub3V0ZXJIZWlnaHQoKSxyPWMudG9wK2UodGhpcy5vcHRpb25zLnRvcCxzLGkpLGE9Yy50b3Arcy1lKHRoaXMub3B0aW9ucy5ib3R0b20scyxpKSxoPXRoaXMudGVzdCh0LG8sbCxyLGEpLGghPXUmJih0aGlzLnN0YXRlPWgsaD90aGlzLm9wdGlvbnMuZW50ZXImJnRoaXMub3B0aW9ucy5lbnRlci5hcHBseSh0aGlzLmVsZW1lbnQpOnRoaXMub3B0aW9ucy5sZWF2ZSYmdGhpcy5vcHRpb25zLmxlYXZlLmFwcGx5KHRoaXMuZWxlbWVudCkpLHRoaXMub3B0aW9ucy5zY3JvbGwmJnRoaXMub3B0aW9ucy5zY3JvbGwuYXBwbHkodGhpcy5lbGVtZW50LFsoby1yKS8oYS1yKV0pfSxwPXtpZDphLG9wdGlvbnM6dSx0ZXN0OmgsaGFuZGxlcjpjLHN0YXRlOm51bGwsZWxlbWVudDp0aGlzLCRlbGVtZW50OnMsdGltZW91dElkOm51bGx9LG9bYV09cCxzLmRhdGEoXCJfc2Nyb2xsZXhJZFwiLHAuaWQpLHAub3B0aW9ucy5pbml0aWFsaXplJiZwLm9wdGlvbnMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzKSxzfSxqUXVlcnkuZm4udW5zY3JvbGxleD1mdW5jdGlvbigpe3ZhciBlPXQodGhpcyk7aWYoMD09dGhpcy5sZW5ndGgpcmV0dXJuIGU7aWYodGhpcy5sZW5ndGg+MSl7Zm9yKHZhciBuPTA7bjx0aGlzLmxlbmd0aDtuKyspdCh0aGlzW25dKS51bnNjcm9sbGV4KCk7cmV0dXJuIGV9dmFyIGksbDtyZXR1cm4oaT1lLmRhdGEoXCJfc2Nyb2xsZXhJZFwiKSk/KGw9b1tpXSx3aW5kb3cuY2xlYXJUaW1lb3V0KGwudGltZW91dElkKSxkZWxldGUgb1tpXSxlLnJlbW92ZURhdGEoXCJfc2Nyb2xsZXhJZFwiKSxsLm9wdGlvbnMudGVybWluYXRlJiZsLm9wdGlvbnMudGVybWluYXRlLmFwcGx5KHRoaXMpLGUpOmV9fShqUXVlcnkpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvdmVuZG9yL2h0bWw1U3RvcnlUaGVtZS9qcy9qcXVlcnkuc2Nyb2xsZXgubWluLmpzIiwiLyoganF1ZXJ5LnNjcm9sbHkgdjEuMC4wLWRldiB8IChjKSBAYWpsa24gfCBNSVQgbGljZW5zZWQgKi9cclxuKGZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHUocyxvKXt2YXIgdSxhLGY7aWYoKHU9ZShzKSlbdF09PTApcmV0dXJuIG47YT11W2ldKClbcl07c3dpdGNoKG8uYW5jaG9yKXtjYXNlXCJtaWRkbGVcIjpmPWEtKGUod2luZG93KS5oZWlnaHQoKS11Lm91dGVySGVpZ2h0KCkpLzI7YnJlYWs7ZGVmYXVsdDpjYXNlIHI6Zj1NYXRoLm1heChhLDApfXJldHVybiB0eXBlb2Ygb1tpXT09XCJmdW5jdGlvblwiP2YtPW9baV0oKTpmLT1vW2ldLGZ9dmFyIHQ9XCJsZW5ndGhcIixuPW51bGwscj1cInRvcFwiLGk9XCJvZmZzZXRcIixzPVwiY2xpY2suc2Nyb2xseVwiLG89ZSh3aW5kb3cpO2UuZm4uc2Nyb2xseT1mdW5jdGlvbihpKXt2YXIgbyxhLGYsbCxjPWUodGhpcyk7aWYodGhpc1t0XT09MClyZXR1cm4gYztpZih0aGlzW3RdPjEpe2ZvcihvPTA7bzx0aGlzW3RdO28rKyllKHRoaXNbb10pLnNjcm9sbHkoaSk7cmV0dXJuIGN9bD1uLGY9Yy5hdHRyKFwiaHJlZlwiKTtpZihmLmNoYXJBdCgwKSE9XCIjXCJ8fGZbdF08MilyZXR1cm4gYzthPWpRdWVyeS5leHRlbmQoe2FuY2hvcjpyLGVhc2luZzpcInN3aW5nXCIsb2Zmc2V0OjAscGFyZW50OmUoXCJib2R5LGh0bWxcIikscG9sbE9uY2U6ITEsc3BlZWQ6MWUzfSxpKSxhLnBvbGxPbmNlJiYobD11KGYsYSkpLGMub2ZmKHMpLm9uKHMsZnVuY3Rpb24oZSl7dmFyIHQ9bCE9PW4/bDp1KGYsYSk7dCE9PW4mJihlLnByZXZlbnREZWZhdWx0KCksYS5wYXJlbnQuc3RvcCgpLmFuaW1hdGUoe3Njcm9sbFRvcDp0fSxhLnNwZWVkLGEuZWFzaW5nKSl9KX19KShqUXVlcnkpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvdmVuZG9yL2h0bWw1U3RvcnlUaGVtZS9qcy9qcXVlcnkuc2Nyb2xseS5taW4uanMiLCIvKlxyXG5cdFN0b3J5IGJ5IEhUTUw1IFVQXHJcblx0aHRtbDV1cC5uZXQgfCBAYWpsa25cclxuXHRGcmVlIGZvciBwZXJzb25hbCBhbmQgY29tbWVyY2lhbCB1c2UgdW5kZXIgdGhlIENDQSAzLjAgbGljZW5zZSAoaHRtbDV1cC5uZXQvbGljZW5zZSlcclxuKi9cclxudHJ5IHtcclxuICAgIHdpbmRvdy4kID0gd2luZG93LmpRdWVyeSA9IHJlcXVpcmUoJy4vanF1ZXJ5Lm1pbicpO1xyXG59IGNhdGNoIChlKSB7fVxyXG5cclxucmVxdWlyZSgnLi9qcXVlcnkuc2Nyb2xsZXgubWluJyk7XHJcbnJlcXVpcmUoJy4vanF1ZXJ5LnNjcm9sbHkubWluJyk7XHJcbmNvbnN0IHNrZWwgPSByZXF1aXJlKCcuL3NrZWwubWluJyk7XHJcbnJlcXVpcmUoJy4vdXRpbCcpO1xyXG5cclxuKGZ1bmN0aW9uKCQpIHtcclxuXHJcblx0c2tlbC5icmVha3BvaW50cyh7XHJcblx0XHR4bGFyZ2U6ICcobWF4LXdpZHRoOiAxNjgwcHgpJyxcclxuXHRcdGxhcmdlOiAnKG1heC13aWR0aDogMTI4MHB4KScsXHJcblx0XHRtZWRpdW06ICcobWF4LXdpZHRoOiA5ODBweCknLFxyXG5cdFx0c21hbGw6ICcobWF4LXdpZHRoOiA3MzZweCknLFxyXG5cdFx0eHNtYWxsOiAnKG1heC13aWR0aDogNDgwcHgpJyxcclxuXHRcdHh4c21hbGw6ICcobWF4LXdpZHRoOiAzNjBweCknXHJcblx0fSk7XHJcblxyXG5cdCQoZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0dmFyXHQkd2luZG93ID0gJCh3aW5kb3cpLFxyXG5cdFx0XHQkYm9keSA9ICQoJ2JvZHknKSxcclxuXHRcdFx0JHdyYXBwZXIgPSAkKCcjd3JhcHBlcicpO1xyXG5cclxuXHRcdC8vIERpc2FibGUgYW5pbWF0aW9ucy90cmFuc2l0aW9ucyB1bnRpbCB0aGUgcGFnZSBoYXMgbG9hZGVkLlxyXG5cdFx0XHQkYm9keS5hZGRDbGFzcygnaXMtbG9hZGluZycpO1xyXG5cclxuXHRcdFx0JHdpbmRvdy5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0JGJvZHkucmVtb3ZlQ2xhc3MoJ2lzLWxvYWRpbmcnKTtcclxuXHRcdFx0XHR9LCAxMDApO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHQvLyBGaXg6IFBsYWNlaG9sZGVyIHBvbHlmaWxsLlxyXG5cdFx0XHQkKCdmb3JtJykucGxhY2Vob2xkZXIoKTtcclxuXHJcblx0XHQvLyBQcmlvcml0aXplIFwiaW1wb3J0YW50XCIgZWxlbWVudHMgb24gbWVkaXVtLlxyXG5cdFx0XHRza2VsLm9uKCcrbWVkaXVtIC1tZWRpdW0nLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQkLnByaW9yaXRpemUoXHJcblx0XHRcdFx0XHQnLmltcG9ydGFudFxcXFwyOCBtZWRpdW1cXFxcMjknLFxyXG5cdFx0XHRcdFx0c2tlbC5icmVha3BvaW50KCdtZWRpdW0nKS5hY3RpdmVcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHQvLyBCcm93c2VyIGZpeGVzLlxyXG5cclxuXHRcdFx0Ly8gSUU6IEZsZXhib3ggbWluLWhlaWdodCBidWcuXHJcblx0XHRcdFx0aWYgKHNrZWwudmFycy5icm93c2VyID09ICdpZScpXHJcblx0XHRcdFx0XHQoZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgZmxleGJveEZpeFRpbWVvdXRJZDtcclxuXHJcblx0XHRcdFx0XHRcdCR3aW5kb3cub24oJ3Jlc2l6ZS5mbGV4Ym94LWZpeCcsIGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHR2YXIgJHggPSAkKCcuZnVsbHNjcmVlbicpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRjbGVhclRpbWVvdXQoZmxleGJveEZpeFRpbWVvdXRJZCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGZsZXhib3hGaXhUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGlmICgkeC5wcm9wKCdzY3JvbGxIZWlnaHQnKSA+ICR3aW5kb3cuaGVpZ2h0KCkpXHJcblx0XHRcdFx0XHRcdFx0XHRcdCR4LmNzcygnaGVpZ2h0JywgJ2F1dG8nKTtcclxuXHRcdFx0XHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0JHguY3NzKCdoZWlnaHQnLCAnMTAwdmgnKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0fSwgMjUwKTtcclxuXHJcblx0XHRcdFx0XHRcdH0pLnRyaWdnZXJIYW5kbGVyKCdyZXNpemUuZmxleGJveC1maXgnKTtcclxuXHJcblx0XHRcdFx0XHR9KSgpO1xyXG5cclxuXHRcdFx0Ly8gT2JqZWN0IGZpdCB3b3JrYXJvdW5kLlxyXG5cdFx0XHRcdGlmICghc2tlbC5jYW5Vc2UoJ29iamVjdC1maXQnKSlcclxuXHRcdFx0XHRcdChmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdFx0XHRcdCQoJy5iYW5uZXIgLmltYWdlLCAuc3BvdGxpZ2h0IC5pbWFnZScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyksXHJcblx0XHRcdFx0XHRcdFx0XHQkaW1nID0gJHRoaXMuY2hpbGRyZW4oJ2ltZycpLFxyXG5cdFx0XHRcdFx0XHRcdFx0cG9zaXRpb25DbGFzcyA9ICR0aGlzLnBhcmVudCgpLmF0dHIoJ2NsYXNzJykubWF0Y2goL2ltYWdlLXBvc2l0aW9uLShbYS16XSspLyk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vIFNldCBpbWFnZS5cclxuXHRcdFx0XHRcdFx0XHRcdCR0aGlzXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCAndXJsKFwiJyArICRpbWcuYXR0cignc3JjJykgKyAnXCIpJylcclxuXHRcdFx0XHRcdFx0XHRcdFx0LmNzcygnYmFja2dyb3VuZC1yZXBlYXQnLCAnbm8tcmVwZWF0JylcclxuXHRcdFx0XHRcdFx0XHRcdFx0LmNzcygnYmFja2dyb3VuZC1zaXplJywgJ2NvdmVyJyk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vIFNldCBwb3NpdGlvbi5cclxuXHRcdFx0XHRcdFx0XHRcdHN3aXRjaCAocG9zaXRpb25DbGFzcy5sZW5ndGggPiAxID8gcG9zaXRpb25DbGFzc1sxXSA6ICcnKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjYXNlICdsZWZ0JzpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQkdGhpcy5jc3MoJ2JhY2tncm91bmQtcG9zaXRpb24nLCAnbGVmdCcpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSAncmlnaHQnOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCR0aGlzLmNzcygnYmFja2dyb3VuZC1wb3NpdGlvbicsICdyaWdodCcpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSAnY2VudGVyJzpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQkdGhpcy5jc3MoJ2JhY2tncm91bmQtcG9zaXRpb24nLCAnY2VudGVyJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHQvLyBIaWRlIG9yaWdpbmFsLlxyXG5cdFx0XHRcdFx0XHRcdFx0JGltZy5jc3MoJ29wYWNpdHknLCAnMCcpO1xyXG5cclxuXHRcdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0fSkoKTtcclxuXHJcblx0XHQvLyBTbW9vdGggc2Nyb2xsLlxyXG5cdFx0XHQkKCcuc21vb3RoLXNjcm9sbCcpLnNjcm9sbHkoKTtcclxuXHRcdFx0JCgnLnNtb290aC1zY3JvbGwtbWlkZGxlJykuc2Nyb2xseSh7IGFuY2hvcjogJ21pZGRsZScgfSk7XHJcblxyXG5cdFx0Ly8gV3JhcHBlci5cclxuXHRcdFx0JHdyYXBwZXIuY2hpbGRyZW4oKVxyXG5cdFx0XHRcdC5zY3JvbGxleCh7XHJcblx0XHRcdFx0XHR0b3A6XHRcdCczMHZoJyxcclxuXHRcdFx0XHRcdGJvdHRvbTpcdFx0JzMwdmgnLFxyXG5cdFx0XHRcdFx0aW5pdGlhbGl6ZTpcdGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdpcy1pbmFjdGl2ZScpO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHRlcm1pbmF0ZTpcdGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdpcy1pbmFjdGl2ZScpO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGVudGVyOlx0XHRmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKS5yZW1vdmVDbGFzcygnaXMtaW5hY3RpdmUnKTtcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRsZWF2ZTpcdFx0ZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKCR0aGlzLmhhc0NsYXNzKCdvbnNjcm9sbC1iaWRpcmVjdGlvbmFsJykpXHJcblx0XHRcdFx0XHRcdFx0JHRoaXMuYWRkQ2xhc3MoJ2lzLWluYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdC8vIEl0ZW1zLlxyXG5cdFx0XHQkKCcuaXRlbXMnKVxyXG5cdFx0XHRcdC5zY3JvbGxleCh7XHJcblx0XHRcdFx0XHR0b3A6XHRcdCczMHZoJyxcclxuXHRcdFx0XHRcdGJvdHRvbTpcdFx0JzMwdmgnLFxyXG5cdFx0XHRcdFx0ZGVsYXk6XHRcdDUwLFxyXG5cdFx0XHRcdFx0aW5pdGlhbGl6ZTpcdGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdpcy1pbmFjdGl2ZScpO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHRlcm1pbmF0ZTpcdGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdpcy1pbmFjdGl2ZScpO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGVudGVyOlx0XHRmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKS5yZW1vdmVDbGFzcygnaXMtaW5hY3RpdmUnKTtcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRsZWF2ZTpcdFx0ZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKCR0aGlzLmhhc0NsYXNzKCdvbnNjcm9sbC1iaWRpcmVjdGlvbmFsJykpXHJcblx0XHRcdFx0XHRcdFx0JHRoaXMuYWRkQ2xhc3MoJ2lzLWluYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LmNoaWxkcmVuKClcclxuXHRcdFx0XHRcdC53cmFwSW5uZXIoJzxkaXYgY2xhc3M9XCJpbm5lclwiPjwvZGl2PicpO1xyXG5cclxuXHRcdC8vIEdhbGxlcnkuXHJcblx0XHRcdCQoJy5nYWxsZXJ5JylcclxuXHRcdFx0XHQud3JhcElubmVyKCc8ZGl2IGNsYXNzPVwiaW5uZXJcIj48L2Rpdj4nKVxyXG5cdFx0XHRcdC5wcmVwZW5kKHNrZWwudmFycy5tb2JpbGUgPyAnJyA6ICc8ZGl2IGNsYXNzPVwiZm9yd2FyZFwiPjwvZGl2PjxkaXYgY2xhc3M9XCJiYWNrd2FyZFwiPjwvZGl2PicpXHJcblx0XHRcdFx0LnNjcm9sbGV4KHtcclxuXHRcdFx0XHRcdHRvcDpcdFx0JzMwdmgnLFxyXG5cdFx0XHRcdFx0Ym90dG9tOlx0XHQnMzB2aCcsXHJcblx0XHRcdFx0XHRkZWxheTpcdFx0NTAsXHJcblx0XHRcdFx0XHRpbml0aWFsaXplOlx0ZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2lzLWluYWN0aXZlJyk7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0dGVybWluYXRlOlx0ZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoJ2lzLWluYWN0aXZlJyk7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZW50ZXI6XHRcdGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdpcy1pbmFjdGl2ZScpO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGxlYXZlOlx0XHRmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdFx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoJHRoaXMuaGFzQ2xhc3MoJ29uc2Nyb2xsLWJpZGlyZWN0aW9uYWwnKSlcclxuXHRcdFx0XHRcdFx0XHQkdGhpcy5hZGRDbGFzcygnaXMtaW5hY3RpdmUnKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuY2hpbGRyZW4oJy5pbm5lcicpXHJcblx0XHRcdFx0XHQvLy5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpXHJcblx0XHRcdFx0XHQuY3NzKCdvdmVyZmxvdy15Jywgc2tlbC52YXJzLm1vYmlsZSA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nKVxyXG5cdFx0XHRcdFx0LmNzcygnb3ZlcmZsb3cteCcsIHNrZWwudmFycy5tb2JpbGUgPyAnc2Nyb2xsJyA6ICdoaWRkZW4nKVxyXG5cdFx0XHRcdFx0LnNjcm9sbExlZnQoMCk7XHJcblxyXG5cdFx0XHQvLyBTdHlsZSAjMS5cclxuXHRcdFx0XHQvLyAuLi5cclxuXHJcblx0XHRcdC8vIFN0eWxlICMyLlxyXG5cdFx0XHRcdCQoJy5nYWxsZXJ5JylcclxuXHRcdFx0XHRcdC5vbignd2hlZWwnLCAnLmlubmVyJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcblx0XHRcdFx0XHRcdHZhclx0JHRoaXMgPSAkKHRoaXMpLFxyXG5cdFx0XHRcdFx0XHRcdGRlbHRhID0gKGV2ZW50Lm9yaWdpbmFsRXZlbnQuZGVsdGFYICogMTApO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gQ2FwIGRlbHRhLlxyXG5cdFx0XHRcdFx0XHRcdGlmIChkZWx0YSA+IDApXHJcblx0XHRcdFx0XHRcdFx0XHRkZWx0YSA9IE1hdGgubWluKDI1LCBkZWx0YSk7XHJcblx0XHRcdFx0XHRcdFx0ZWxzZSBpZiAoZGVsdGEgPCAwKVxyXG5cdFx0XHRcdFx0XHRcdFx0ZGVsdGEgPSBNYXRoLm1heCgtMjUsIGRlbHRhKTtcclxuXHJcblx0XHRcdFx0XHRcdC8vIFNjcm9sbC5cclxuXHRcdFx0XHRcdFx0XHQkdGhpcy5zY3JvbGxMZWZ0KCAkdGhpcy5zY3JvbGxMZWZ0KCkgKyBkZWx0YSApO1xyXG5cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQub24oJ21vdXNlZW50ZXInLCAnLmZvcndhcmQsIC5iYWNrd2FyZCcsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG5cdFx0XHRcdFx0XHRcdCRpbm5lciA9ICR0aGlzLnNpYmxpbmdzKCcuaW5uZXInKSxcclxuXHRcdFx0XHRcdFx0XHRkaXJlY3Rpb24gPSAoJHRoaXMuaGFzQ2xhc3MoJ2ZvcndhcmQnKSA/IDEgOiAtMSk7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBDbGVhciBtb3ZlIGludGVydmFsLlxyXG5cdFx0XHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy5fZ2FsbGVyeV9tb3ZlSW50ZXJ2YWxJZCk7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBTdGFydCBpbnRlcnZhbC5cclxuXHRcdFx0XHRcdFx0XHR0aGlzLl9nYWxsZXJ5X21vdmVJbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQkaW5uZXIuc2Nyb2xsTGVmdCggJGlubmVyLnNjcm9sbExlZnQoKSArICg1ICogZGlyZWN0aW9uKSApO1xyXG5cdFx0XHRcdFx0XHRcdH0sIDEwKTtcclxuXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0Lm9uKCdtb3VzZWxlYXZlJywgJy5mb3J3YXJkLCAuYmFja3dhcmQnLCBmdW5jdGlvbihldmVudCkge1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gQ2xlYXIgbW92ZSBpbnRlcnZhbC5cclxuXHRcdFx0XHRcdFx0XHRjbGVhckludGVydmFsKHRoaXMuX2dhbGxlcnlfbW92ZUludGVydmFsSWQpO1xyXG5cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Ly8gTGlnaHRib3guXHJcblx0XHRcdFx0JCgnLmdhbGxlcnkubGlnaHRib3gnKVxyXG5cdFx0XHRcdFx0Lm9uKCdjbGljaycsICdhJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcblx0XHRcdFx0XHRcdHZhciAkYSA9ICQodGhpcyksXHJcblx0XHRcdFx0XHRcdFx0JGdhbGxlcnkgPSAkYS5wYXJlbnRzKCcuZ2FsbGVyeScpLFxyXG5cdFx0XHRcdFx0XHRcdCRtb2RhbCA9ICRnYWxsZXJ5LmNoaWxkcmVuKCcubW9kYWwnKSxcclxuXHRcdFx0XHRcdFx0XHQkbW9kYWxJbWcgPSAkbW9kYWwuZmluZCgnaW1nJyksXHJcblx0XHRcdFx0XHRcdFx0aHJlZiA9ICRhLmF0dHIoJ2hyZWYnKTtcclxuXHJcblx0XHRcdFx0XHRcdC8vIE5vdCBhbiBpbWFnZT8gQmFpbC5cclxuXHRcdFx0XHRcdFx0XHRpZiAoIWhyZWYubWF0Y2goL1xcLihqcGd8Z2lmfHBuZ3xtcDQpJC8pKVxyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gUHJldmVudCBkZWZhdWx0LlxyXG5cdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBMb2NrZWQ/IEJhaWwuXHJcblx0XHRcdFx0XHRcdFx0aWYgKCRtb2RhbFswXS5fbG9ja2VkKVxyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gTG9jay5cclxuXHRcdFx0XHRcdFx0XHQkbW9kYWxbMF0uX2xvY2tlZCA9IHRydWU7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBTZXQgc3JjLlxyXG5cdFx0XHRcdFx0XHRcdCRtb2RhbEltZy5hdHRyKCdzcmMnLCBocmVmKTtcclxuXHJcblx0XHRcdFx0XHRcdC8vIFNldCB2aXNpYmxlLlxyXG5cdFx0XHRcdFx0XHRcdCRtb2RhbC5hZGRDbGFzcygndmlzaWJsZScpO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gRm9jdXMuXHJcblx0XHRcdFx0XHRcdFx0JG1vZGFsLmZvY3VzKCk7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBEZWxheS5cclxuXHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdC8vIFVubG9jay5cclxuXHRcdFx0XHRcdFx0XHRcdFx0JG1vZGFsWzBdLl9sb2NrZWQgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0XHRcdFx0fSwgNjAwKTtcclxuXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0Lm9uKCdjbGljaycsICcubW9kYWwnLCBmdW5jdGlvbihldmVudCkge1xyXG5cclxuXHRcdFx0XHRcdFx0dmFyICRtb2RhbCA9ICQodGhpcyksXHJcblx0XHRcdFx0XHRcdFx0JG1vZGFsSW1nID0gJG1vZGFsLmZpbmQoJ2ltZycpO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gTG9ja2VkPyBCYWlsLlxyXG5cdFx0XHRcdFx0XHRcdGlmICgkbW9kYWxbMF0uX2xvY2tlZClcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdFx0XHRcdC8vIEFscmVhZHkgaGlkZGVuPyBCYWlsLlxyXG5cdFx0XHRcdFx0XHRcdGlmICghJG1vZGFsLmhhc0NsYXNzKCd2aXNpYmxlJykpXHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBMb2NrLlxyXG5cdFx0XHRcdFx0XHRcdCRtb2RhbFswXS5fbG9ja2VkID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0XHRcdC8vIENsZWFyIHZpc2libGUsIGxvYWRlZC5cclxuXHRcdFx0XHRcdFx0XHQkbW9kYWxcclxuXHRcdFx0XHRcdFx0XHRcdC5yZW1vdmVDbGFzcygnbG9hZGVkJylcclxuXHJcblx0XHRcdFx0XHRcdC8vIERlbGF5LlxyXG5cdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0JG1vZGFsXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5yZW1vdmVDbGFzcygndmlzaWJsZScpXHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdC8vIENsZWFyIHNyYy5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQkbW9kYWxJbWcuYXR0cignc3JjJywgJycpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gVW5sb2NrLlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCRtb2RhbFswXS5fbG9ja2VkID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBGb2N1cy5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQkYm9keS5mb2N1cygpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdH0sIDQ3NSk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdH0sIDEyNSk7XHJcblxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdC5vbigna2V5cHJlc3MnLCAnLm1vZGFsJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcblx0XHRcdFx0XHRcdHZhciAkbW9kYWwgPSAkKHRoaXMpO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gRXNjYXBlPyBIaWRlIG1vZGFsLlxyXG5cdFx0XHRcdFx0XHRcdGlmIChldmVudC5rZXlDb2RlID09IDI3KVxyXG5cdFx0XHRcdFx0XHRcdFx0JG1vZGFsLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdC5wcmVwZW5kKCc8ZGl2IGNsYXNzPVwibW9kYWxcIiB0YWJJbmRleD1cIi0xXCI+PGRpdiBjbGFzcz1cImlubmVyXCI+PGltZyBzcmM9XCJcIiAvPjwvZGl2PjwvZGl2PicpXHJcblx0XHRcdFx0XHRcdC5maW5kKCdpbWcnKVxyXG5cdFx0XHRcdFx0XHRcdC5vbignbG9hZCcsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0dmFyICRtb2RhbEltZyA9ICQodGhpcyksXHJcblx0XHRcdFx0XHRcdFx0XHRcdCRtb2RhbCA9ICRtb2RhbEltZy5wYXJlbnRzKCcubW9kYWwnKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gTm8gbG9uZ2VyIHZpc2libGU/IEJhaWwuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCEkbW9kYWwuaGFzQ2xhc3MoJ3Zpc2libGUnKSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdC8vIFNldCBsb2FkZWQuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0JG1vZGFsLmFkZENsYXNzKCdsb2FkZWQnKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHR9LCAyNzUpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KShqUXVlcnkpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL3ZlbmRvci9odG1sNVN0b3J5VGhlbWUvanMvbWFpbi5qcyIsIi8qIHNrZWwuanMgdjMuMC4xIHwgKGMpIHNrZWwuaW8gfCBNSVQgbGljZW5zZWQgKi9cclxudmFyIHNrZWw9ZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgdD17YnJlYWtwb2ludElkczpudWxsLGV2ZW50czp7fSxpc0luaXQ6ITEsb2JqOnthdHRhY2htZW50czp7fSxicmVha3BvaW50czp7fSxoZWFkOm51bGwsc3RhdGVzOnt9fSxzZDpcIi9cIixzdGF0ZTpudWxsLHN0YXRlSGFuZGxlcnM6e30sc3RhdGVJZDpcIlwiLHZhcnM6e30sRE9NUmVhZHk6bnVsbCxpbmRleE9mOm51bGwsaXNBcnJheTpudWxsLGl0ZXJhdGU6bnVsbCxtYXRjaGVzTWVkaWE6bnVsbCxleHRlbmQ6ZnVuY3Rpb24oZSxuKXt0Lml0ZXJhdGUobixmdW5jdGlvbihpKXt0LmlzQXJyYXkobltpXSk/KHQuaXNBcnJheShlW2ldKXx8KGVbaV09W10pLHQuZXh0ZW5kKGVbaV0sbltpXSkpOlwib2JqZWN0XCI9PXR5cGVvZiBuW2ldPyhcIm9iamVjdFwiIT10eXBlb2YgZVtpXSYmKGVbaV09e30pLHQuZXh0ZW5kKGVbaV0sbltpXSkpOmVbaV09bltpXX0pfSxuZXdTdHlsZTpmdW5jdGlvbih0KXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7cmV0dXJuIGUudHlwZT1cInRleHQvY3NzXCIsZS5pbm5lckhUTUw9dCxlfSxfY2FuVXNlOm51bGwsY2FuVXNlOmZ1bmN0aW9uKGUpe3QuX2NhblVzZXx8KHQuX2NhblVzZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTt2YXIgbj10Ll9jYW5Vc2Uuc3R5bGUsaT1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Uuc2xpY2UoMSk7cmV0dXJuIGUgaW4gbnx8XCJNb3pcIitpIGluIG58fFwiV2Via2l0XCIraSBpbiBufHxcIk9cIitpIGluIG58fFwibXNcIitpIGluIG59LG9uOmZ1bmN0aW9uKGUsbil7dmFyIGk9ZS5zcGxpdCgvW1xcc10rLyk7cmV0dXJuIHQuaXRlcmF0ZShpLGZ1bmN0aW9uKGUpe3ZhciBhPWlbZV07aWYodC5pc0luaXQpe2lmKFwiaW5pdFwiPT1hKXJldHVybiB2b2lkIG4oKTtpZihcImNoYW5nZVwiPT1hKW4oKTtlbHNle3ZhciByPWEuY2hhckF0KDApO2lmKFwiK1wiPT1yfHxcIiFcIj09cil7dmFyIG89YS5zdWJzdHJpbmcoMSk7aWYobyBpbiB0Lm9iai5icmVha3BvaW50cylpZihcIitcIj09ciYmdC5vYmouYnJlYWtwb2ludHNbb10uYWN0aXZlKW4oKTtlbHNlIGlmKFwiIVwiPT1yJiYhdC5vYmouYnJlYWtwb2ludHNbb10uYWN0aXZlKXJldHVybiB2b2lkIG4oKX19fXQuZXZlbnRzW2FdfHwodC5ldmVudHNbYV09W10pLHQuZXZlbnRzW2FdLnB1c2gobil9KSx0fSx0cmlnZ2VyOmZ1bmN0aW9uKGUpe3JldHVybiB0LmV2ZW50c1tlXSYmMCE9dC5ldmVudHNbZV0ubGVuZ3RoPyh0Lml0ZXJhdGUodC5ldmVudHNbZV0sZnVuY3Rpb24obil7dC5ldmVudHNbZV1bbl0oKX0pLHQpOnZvaWQgMH0sYnJlYWtwb2ludDpmdW5jdGlvbihlKXtyZXR1cm4gdC5vYmouYnJlYWtwb2ludHNbZV19LGJyZWFrcG9pbnRzOmZ1bmN0aW9uKGUpe2Z1bmN0aW9uIG4odCxlKXt0aGlzLm5hbWU9dGhpcy5pZD10LHRoaXMubWVkaWE9ZSx0aGlzLmFjdGl2ZT0hMSx0aGlzLndhc0FjdGl2ZT0hMX1yZXR1cm4gbi5wcm90b3R5cGUubWF0Y2hlcz1mdW5jdGlvbigpe3JldHVybiB0Lm1hdGNoZXNNZWRpYSh0aGlzLm1lZGlhKX0sbi5wcm90b3R5cGUuc3luYz1mdW5jdGlvbigpe3RoaXMud2FzQWN0aXZlPXRoaXMuYWN0aXZlLHRoaXMuYWN0aXZlPXRoaXMubWF0Y2hlcygpfSx0Lml0ZXJhdGUoZSxmdW5jdGlvbihpKXt0Lm9iai5icmVha3BvaW50c1tpXT1uZXcgbihpLGVbaV0pfSksd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXt0LnBvbGwoKX0sMCksdH0sYWRkU3RhdGVIYW5kbGVyOmZ1bmN0aW9uKGUsbil7dC5zdGF0ZUhhbmRsZXJzW2VdPW59LGNhbGxTdGF0ZUhhbmRsZXI6ZnVuY3Rpb24oZSl7dmFyIG49dC5zdGF0ZUhhbmRsZXJzW2VdKCk7dC5pdGVyYXRlKG4sZnVuY3Rpb24oZSl7dC5zdGF0ZS5hdHRhY2htZW50cy5wdXNoKG5bZV0pfSl9LGNoYW5nZVN0YXRlOmZ1bmN0aW9uKGUpe3QuaXRlcmF0ZSh0Lm9iai5icmVha3BvaW50cyxmdW5jdGlvbihlKXt0Lm9iai5icmVha3BvaW50c1tlXS5zeW5jKCl9KSx0LnZhcnMubGFzdFN0YXRlSWQ9dC5zdGF0ZUlkLHQuc3RhdGVJZD1lLHQuYnJlYWtwb2ludElkcz10LnN0YXRlSWQ9PT10LnNkP1tdOnQuc3RhdGVJZC5zdWJzdHJpbmcoMSkuc3BsaXQodC5zZCksdC5vYmouc3RhdGVzW3Quc3RhdGVJZF0/dC5zdGF0ZT10Lm9iai5zdGF0ZXNbdC5zdGF0ZUlkXToodC5vYmouc3RhdGVzW3Quc3RhdGVJZF09e2F0dGFjaG1lbnRzOltdfSx0LnN0YXRlPXQub2JqLnN0YXRlc1t0LnN0YXRlSWRdLHQuaXRlcmF0ZSh0LnN0YXRlSGFuZGxlcnMsdC5jYWxsU3RhdGVIYW5kbGVyKSksdC5kZXRhY2hBbGwodC5zdGF0ZS5hdHRhY2htZW50cyksdC5hdHRhY2hBbGwodC5zdGF0ZS5hdHRhY2htZW50cyksdC52YXJzLnN0YXRlSWQ9dC5zdGF0ZUlkLHQudmFycy5zdGF0ZT10LnN0YXRlLHQudHJpZ2dlcihcImNoYW5nZVwiKSx0Lml0ZXJhdGUodC5vYmouYnJlYWtwb2ludHMsZnVuY3Rpb24oZSl7dC5vYmouYnJlYWtwb2ludHNbZV0uYWN0aXZlP3Qub2JqLmJyZWFrcG9pbnRzW2VdLndhc0FjdGl2ZXx8dC50cmlnZ2VyKFwiK1wiK2UpOnQub2JqLmJyZWFrcG9pbnRzW2VdLndhc0FjdGl2ZSYmdC50cmlnZ2VyKFwiLVwiK2UpfSl9LGdlbmVyYXRlU3RhdGVDb25maWc6ZnVuY3Rpb24oZSxuKXt2YXIgaT17fTtyZXR1cm4gdC5leHRlbmQoaSxlKSx0Lml0ZXJhdGUodC5icmVha3BvaW50SWRzLGZ1bmN0aW9uKGUpe3QuZXh0ZW5kKGksblt0LmJyZWFrcG9pbnRJZHNbZV1dKX0pLGl9LGdldFN0YXRlSWQ6ZnVuY3Rpb24oKXt2YXIgZT1cIlwiO3JldHVybiB0Lml0ZXJhdGUodC5vYmouYnJlYWtwb2ludHMsZnVuY3Rpb24obil7dmFyIGk9dC5vYmouYnJlYWtwb2ludHNbbl07aS5tYXRjaGVzKCkmJihlKz10LnNkK2kuaWQpfSksZX0scG9sbDpmdW5jdGlvbigpe3ZhciBlPVwiXCI7ZT10LmdldFN0YXRlSWQoKSxcIlwiPT09ZSYmKGU9dC5zZCksZSE9PXQuc3RhdGVJZCYmdC5jaGFuZ2VTdGF0ZShlKX0sX2F0dGFjaDpudWxsLGF0dGFjaDpmdW5jdGlvbihlKXt2YXIgbj10Lm9iai5oZWFkLGk9ZS5lbGVtZW50O3JldHVybiBpLnBhcmVudE5vZGUmJmkucGFyZW50Tm9kZS50YWdOYW1lPyExOih0Ll9hdHRhY2h8fCh0Ll9hdHRhY2g9bi5maXJzdENoaWxkKSxuLmluc2VydEJlZm9yZShpLHQuX2F0dGFjaC5uZXh0U2libGluZyksZS5wZXJtYW5lbnQmJih0Ll9hdHRhY2g9aSksITApfSxhdHRhY2hBbGw6ZnVuY3Rpb24oZSl7dmFyIG49W107dC5pdGVyYXRlKGUsZnVuY3Rpb24odCl7bltlW3RdLnByaW9yaXR5XXx8KG5bZVt0XS5wcmlvcml0eV09W10pLG5bZVt0XS5wcmlvcml0eV0ucHVzaChlW3RdKX0pLG4ucmV2ZXJzZSgpLHQuaXRlcmF0ZShuLGZ1bmN0aW9uKGUpe3QuaXRlcmF0ZShuW2VdLGZ1bmN0aW9uKGkpe3QuYXR0YWNoKG5bZV1baV0pfSl9KX0sZGV0YWNoOmZ1bmN0aW9uKHQpe3ZhciBlPXQuZWxlbWVudDtyZXR1cm4gdC5wZXJtYW5lbnR8fCFlLnBhcmVudE5vZGV8fGUucGFyZW50Tm9kZSYmIWUucGFyZW50Tm9kZS50YWdOYW1lPyExOihlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSksITApfSxkZXRhY2hBbGw6ZnVuY3Rpb24oZSl7dmFyIG49e307dC5pdGVyYXRlKGUsZnVuY3Rpb24odCl7bltlW3RdLmlkXT0hMH0pLHQuaXRlcmF0ZSh0Lm9iai5hdHRhY2htZW50cyxmdW5jdGlvbihlKXtlIGluIG58fHQuZGV0YWNoKHQub2JqLmF0dGFjaG1lbnRzW2VdKX0pfSxhdHRhY2htZW50OmZ1bmN0aW9uKGUpe3JldHVybiBlIGluIHQub2JqLmF0dGFjaG1lbnRzP3Qub2JqLmF0dGFjaG1lbnRzW2VdOm51bGx9LG5ld0F0dGFjaG1lbnQ6ZnVuY3Rpb24oZSxuLGksYSl7cmV0dXJuIHQub2JqLmF0dGFjaG1lbnRzW2VdPXtpZDplLGVsZW1lbnQ6bixwcmlvcml0eTppLHBlcm1hbmVudDphfX0saW5pdDpmdW5jdGlvbigpe3QuaW5pdE1ldGhvZHMoKSx0LmluaXRWYXJzKCksdC5pbml0RXZlbnRzKCksdC5vYmouaGVhZD1kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0sdC5pc0luaXQ9ITAsdC50cmlnZ2VyKFwiaW5pdFwiKX0saW5pdEV2ZW50czpmdW5jdGlvbigpe3Qub24oXCJyZXNpemVcIixmdW5jdGlvbigpe3QucG9sbCgpfSksdC5vbihcIm9yaWVudGF0aW9uQ2hhbmdlXCIsZnVuY3Rpb24oKXt0LnBvbGwoKX0pLHQuRE9NUmVhZHkoZnVuY3Rpb24oKXt0LnRyaWdnZXIoXCJyZWFkeVwiKX0pLHdpbmRvdy5vbmxvYWQmJnQub24oXCJsb2FkXCIsd2luZG93Lm9ubG9hZCksd2luZG93Lm9ubG9hZD1mdW5jdGlvbigpe3QudHJpZ2dlcihcImxvYWRcIil9LHdpbmRvdy5vbnJlc2l6ZSYmdC5vbihcInJlc2l6ZVwiLHdpbmRvdy5vbnJlc2l6ZSksd2luZG93Lm9ucmVzaXplPWZ1bmN0aW9uKCl7dC50cmlnZ2VyKFwicmVzaXplXCIpfSx3aW5kb3cub25vcmllbnRhdGlvbmNoYW5nZSYmdC5vbihcIm9yaWVudGF0aW9uQ2hhbmdlXCIsd2luZG93Lm9ub3JpZW50YXRpb25jaGFuZ2UpLHdpbmRvdy5vbm9yaWVudGF0aW9uY2hhbmdlPWZ1bmN0aW9uKCl7dC50cmlnZ2VyKFwib3JpZW50YXRpb25DaGFuZ2VcIil9fSxpbml0TWV0aG9kczpmdW5jdGlvbigpe2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXI/IWZ1bmN0aW9uKGUsbil7dC5ET01SZWFkeT1uKCl9KFwiZG9tcmVhZHlcIixmdW5jdGlvbigpe2Z1bmN0aW9uIHQodCl7Zm9yKHI9MTt0PW4uc2hpZnQoKTspdCgpfXZhciBlLG49W10saT1kb2N1bWVudCxhPVwiRE9NQ29udGVudExvYWRlZFwiLHI9L15sb2FkZWR8XmMvLnRlc3QoaS5yZWFkeVN0YXRlKTtyZXR1cm4gaS5hZGRFdmVudExpc3RlbmVyKGEsZT1mdW5jdGlvbigpe2kucmVtb3ZlRXZlbnRMaXN0ZW5lcihhLGUpLHQoKX0pLGZ1bmN0aW9uKHQpe3I/dCgpOm4ucHVzaCh0KX19KTohZnVuY3Rpb24oZSxuKXt0LkRPTVJlYWR5PW4oKX0oXCJkb21yZWFkeVwiLGZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUodCl7Zm9yKGg9MTt0PWkuc2hpZnQoKTspdCgpfXZhciBuLGk9W10sYT0hMSxyPWRvY3VtZW50LG89ci5kb2N1bWVudEVsZW1lbnQscz1vLmRvU2Nyb2xsLGM9XCJET01Db250ZW50TG9hZGVkXCIsZD1cImFkZEV2ZW50TGlzdGVuZXJcIix1PVwib25yZWFkeXN0YXRlY2hhbmdlXCIsbD1cInJlYWR5U3RhdGVcIixmPXM/L15sb2FkZWR8XmMvOi9ebG9hZGVkfGMvLGg9Zi50ZXN0KHJbbF0pO3JldHVybiByW2RdJiZyW2RdKGMsbj1mdW5jdGlvbigpe3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihjLG4sYSksZSgpfSxhKSxzJiZyLmF0dGFjaEV2ZW50KHUsbj1mdW5jdGlvbigpey9eYy8udGVzdChyW2xdKSYmKHIuZGV0YWNoRXZlbnQodSxuKSxlKCkpfSksdD1zP2Z1bmN0aW9uKGUpe3NlbGYhPXRvcD9oP2UoKTppLnB1c2goZSk6ZnVuY3Rpb24oKXt0cnl7by5kb1Njcm9sbChcImxlZnRcIil9Y2F0Y2gobil7cmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKXt0KGUpfSw1MCl9ZSgpfSgpfTpmdW5jdGlvbih0KXtoP3QoKTppLnB1c2godCl9fSksQXJyYXkucHJvdG90eXBlLmluZGV4T2Y/dC5pbmRleE9mPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQuaW5kZXhPZihlKX06dC5pbmRleE9mPWZ1bmN0aW9uKHQsZSl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpcmV0dXJuIHQuaW5kZXhPZihlKTt2YXIgbixpLGE9ZT9lOjA7aWYoIXRoaXMpdGhyb3cgbmV3IFR5cGVFcnJvcjtpZihpPXRoaXMubGVuZ3RoLDA9PT1pfHxhPj1pKXJldHVybi0xO2ZvcigwPmEmJihhPWktTWF0aC5hYnMoYSkpLG49YTtpPm47bisrKWlmKHRoaXNbbl09PT10KXJldHVybiBuO3JldHVybi0xfSxBcnJheS5pc0FycmF5P3QuaXNBcnJheT1mdW5jdGlvbih0KXtyZXR1cm4gQXJyYXkuaXNBcnJheSh0KX06dC5pc0FycmF5PWZ1bmN0aW9uKHQpe3JldHVyblwiW29iamVjdCBBcnJheV1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KX0sT2JqZWN0LmtleXM/dC5pdGVyYXRlPWZ1bmN0aW9uKHQsZSl7aWYoIXQpcmV0dXJuW107dmFyIG4saT1PYmplY3Qua2V5cyh0KTtmb3Iobj0wO2lbbl0mJmUoaVtuXSx0W2lbbl1dKSE9PSExO24rKyk7fTp0Lml0ZXJhdGU9ZnVuY3Rpb24odCxlKXtpZighdClyZXR1cm5bXTt2YXIgbjtmb3IobiBpbiB0KWlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LG4pJiZlKG4sdFtuXSk9PT0hMSlicmVha30sd2luZG93Lm1hdGNoTWVkaWE/dC5tYXRjaGVzTWVkaWE9ZnVuY3Rpb24odCl7cmV0dXJuXCJcIj09dD8hMDp3aW5kb3cubWF0Y2hNZWRpYSh0KS5tYXRjaGVzfTp3aW5kb3cuc3R5bGVNZWRpYXx8d2luZG93Lm1lZGlhP3QubWF0Y2hlc01lZGlhPWZ1bmN0aW9uKHQpe2lmKFwiXCI9PXQpcmV0dXJuITA7dmFyIGU9d2luZG93LnN0eWxlTWVkaWF8fHdpbmRvdy5tZWRpYTtyZXR1cm4gZS5tYXRjaE1lZGl1bSh0fHxcImFsbFwiKX06d2luZG93LmdldENvbXB1dGVkU3R5bGU/dC5tYXRjaGVzTWVkaWE9ZnVuY3Rpb24odCl7aWYoXCJcIj09dClyZXR1cm4hMDt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiksbj1kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKVswXSxpPW51bGw7ZS50eXBlPVwidGV4dC9jc3NcIixlLmlkPVwibWF0Y2htZWRpYWpzLXRlc3RcIixuLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGUsbiksaT1cImdldENvbXB1dGVkU3R5bGVcImluIHdpbmRvdyYmd2luZG93LmdldENvbXB1dGVkU3R5bGUoZSxudWxsKXx8ZS5jdXJyZW50U3R5bGU7dmFyIGE9XCJAbWVkaWEgXCIrdCtcInsgI21hdGNobWVkaWFqcy10ZXN0IHsgd2lkdGg6IDFweDsgfSB9XCI7cmV0dXJuIGUuc3R5bGVTaGVldD9lLnN0eWxlU2hlZXQuY3NzVGV4dD1hOmUudGV4dENvbnRlbnQ9YSxcIjFweFwiPT09aS53aWR0aH06dC5tYXRjaGVzTWVkaWE9ZnVuY3Rpb24odCl7aWYoXCJcIj09dClyZXR1cm4hMDt2YXIgZSxuLGksYSxyPXtcIm1pbi13aWR0aFwiOm51bGwsXCJtYXgtd2lkdGhcIjpudWxsfSxvPSExO2ZvcihpPXQuc3BsaXQoL1xccythbmRcXHMrLyksZT0wO2U8aS5sZW5ndGg7ZSsrKW49aVtlXSxcIihcIj09bi5jaGFyQXQoMCkmJihuPW4uc3Vic3RyaW5nKDEsbi5sZW5ndGgtMSksYT1uLnNwbGl0KC86XFxzKy8pLDI9PWEubGVuZ3RoJiYoclthWzBdLnJlcGxhY2UoL15cXHMrfFxccyskL2csXCJcIildPXBhcnNlSW50KGFbMV0pLG89ITApKTtpZighbylyZXR1cm4hMTt2YXIgcz1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsYz1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O3JldHVybiBudWxsIT09cltcIm1pbi13aWR0aFwiXSYmczxyW1wibWluLXdpZHRoXCJdfHxudWxsIT09cltcIm1heC13aWR0aFwiXSYmcz5yW1wibWF4LXdpZHRoXCJdfHxudWxsIT09cltcIm1pbi1oZWlnaHRcIl0mJmM8cltcIm1pbi1oZWlnaHRcIl18fG51bGwhPT1yW1wibWF4LWhlaWdodFwiXSYmYz5yW1wibWF4LWhlaWdodFwiXT8hMTohMH0sbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvTVNJRSAoWzAtOV0rKS8pJiZSZWdFeHAuJDE8OSYmKHQubmV3U3R5bGU9ZnVuY3Rpb24odCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7cmV0dXJuIGUuaW5uZXJIVE1MPScmbmJzcDs8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+Jyt0K1wiPC9zdHlsZT5cIixlfSl9LGluaXRWYXJzOmZ1bmN0aW9uKCl7dmFyIGUsbixpLGE9bmF2aWdhdG9yLnVzZXJBZ2VudDtlPVwib3RoZXJcIixuPTAsaT1bW1wiZmlyZWZveFwiLC9GaXJlZm94XFwvKFswLTlcXC5dKykvXSxbXCJiYlwiLC9CbGFja0JlcnJ5LitWZXJzaW9uXFwvKFswLTlcXC5dKykvXSxbXCJiYlwiLC9CQlswLTldKy4rVmVyc2lvblxcLyhbMC05XFwuXSspL10sW1wib3BlcmFcIiwvT1BSXFwvKFswLTlcXC5dKykvXSxbXCJvcGVyYVwiLC9PcGVyYVxcLyhbMC05XFwuXSspL10sW1wiZWRnZVwiLC9FZGdlXFwvKFswLTlcXC5dKykvXSxbXCJzYWZhcmlcIiwvVmVyc2lvblxcLyhbMC05XFwuXSspLitTYWZhcmkvXSxbXCJjaHJvbWVcIiwvQ2hyb21lXFwvKFswLTlcXC5dKykvXSxbXCJpZVwiLC9NU0lFIChbMC05XSspL10sW1wiaWVcIiwvVHJpZGVudFxcLy4rcnY6KFswLTldKykvXV0sdC5pdGVyYXRlKGksZnVuY3Rpb24odCxpKXtyZXR1cm4gYS5tYXRjaChpWzFdKT8oZT1pWzBdLG49cGFyc2VGbG9hdChSZWdFeHAuJDEpLCExKTp2b2lkIDB9KSx0LnZhcnMuYnJvd3Nlcj1lLHQudmFycy5icm93c2VyVmVyc2lvbj1uLGU9XCJvdGhlclwiLG49MCxpPVtbXCJpb3NcIiwvKFswLTlfXSspIGxpa2UgTWFjIE9TIFgvLGZ1bmN0aW9uKHQpe3JldHVybiB0LnJlcGxhY2UoXCJfXCIsXCIuXCIpLnJlcGxhY2UoXCJfXCIsXCJcIil9XSxbXCJpb3NcIiwvQ1BVIGxpa2UgTWFjIE9TIFgvLGZ1bmN0aW9uKHQpe3JldHVybiAwfV0sW1wid3BcIiwvV2luZG93cyBQaG9uZSAoWzAtOVxcLl0rKS8sbnVsbF0sW1wiYW5kcm9pZFwiLC9BbmRyb2lkIChbMC05XFwuXSspLyxudWxsXSxbXCJtYWNcIiwvTWFjaW50b3NoLitNYWMgT1MgWCAoWzAtOV9dKykvLGZ1bmN0aW9uKHQpe3JldHVybiB0LnJlcGxhY2UoXCJfXCIsXCIuXCIpLnJlcGxhY2UoXCJfXCIsXCJcIil9XSxbXCJ3aW5kb3dzXCIsL1dpbmRvd3MgTlQgKFswLTlcXC5dKykvLG51bGxdLFtcImJiXCIsL0JsYWNrQmVycnkuK1ZlcnNpb25cXC8oWzAtOVxcLl0rKS8sbnVsbF0sW1wiYmJcIiwvQkJbMC05XSsuK1ZlcnNpb25cXC8oWzAtOVxcLl0rKS8sbnVsbF1dLHQuaXRlcmF0ZShpLGZ1bmN0aW9uKHQsaSl7cmV0dXJuIGEubWF0Y2goaVsxXSk/KGU9aVswXSxuPXBhcnNlRmxvYXQoaVsyXT9pWzJdKFJlZ0V4cC4kMSk6UmVnRXhwLiQxKSwhMSk6dm9pZCAwfSksdC52YXJzLm9zPWUsdC52YXJzLm9zVmVyc2lvbj1uLHQudmFycy5JRVZlcnNpb249XCJpZVwiPT10LnZhcnMuYnJvd3Nlcj90LnZhcnMuYnJvd3NlclZlcnNpb246OTksdC52YXJzLnRvdWNoPVwid3BcIj09dC52YXJzLm9zP25hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzPjA6ISEoXCJvbnRvdWNoc3RhcnRcImluIHdpbmRvdyksdC52YXJzLm1vYmlsZT1cIndwXCI9PXQudmFycy5vc3x8XCJhbmRyb2lkXCI9PXQudmFycy5vc3x8XCJpb3NcIj09dC52YXJzLm9zfHxcImJiXCI9PXQudmFycy5vc319O3JldHVybiB0LmluaXQoKSx0fSgpOyFmdW5jdGlvbih0LGUpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sZSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9ZSgpOnQuc2tlbD1lKCl9KHRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gc2tlbH0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy92ZW5kb3IvaHRtbDVTdG9yeVRoZW1lL2pzL3NrZWwubWluLmpzIiwiKGZ1bmN0aW9uKCQpIHtcclxuXHJcblx0LyoqXHJcblx0ICogR2VuZXJhdGUgYW4gaW5kZW50ZWQgbGlzdCBvZiBsaW5rcyBmcm9tIGEgbmF2LiBNZWFudCBmb3IgdXNlIHdpdGggcGFuZWwoKS5cclxuXHQgKiBAcmV0dXJuIHtqUXVlcnl9IGpRdWVyeSBvYmplY3QuXHJcblx0ICovXHJcblx0JC5mbi5uYXZMaXN0ID0gZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0dmFyXHQkdGhpcyA9ICQodGhpcyk7XHJcblx0XHRcdCRhID0gJHRoaXMuZmluZCgnYScpLFxyXG5cdFx0XHRiID0gW107XHJcblxyXG5cdFx0JGEuZWFjaChmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdHZhclx0JHRoaXMgPSAkKHRoaXMpLFxyXG5cdFx0XHRcdGluZGVudCA9IE1hdGgubWF4KDAsICR0aGlzLnBhcmVudHMoJ2xpJykubGVuZ3RoIC0gMSksXHJcblx0XHRcdFx0aHJlZiA9ICR0aGlzLmF0dHIoJ2hyZWYnKSxcclxuXHRcdFx0XHR0YXJnZXQgPSAkdGhpcy5hdHRyKCd0YXJnZXQnKTtcclxuXHJcblx0XHRcdGIucHVzaChcclxuXHRcdFx0XHQnPGEgJyArXHJcblx0XHRcdFx0XHQnY2xhc3M9XCJsaW5rIGRlcHRoLScgKyBpbmRlbnQgKyAnXCInICtcclxuXHRcdFx0XHRcdCggKHR5cGVvZiB0YXJnZXQgIT09ICd1bmRlZmluZWQnICYmIHRhcmdldCAhPSAnJykgPyAnIHRhcmdldD1cIicgKyB0YXJnZXQgKyAnXCInIDogJycpICtcclxuXHRcdFx0XHRcdCggKHR5cGVvZiBocmVmICE9PSAndW5kZWZpbmVkJyAmJiBocmVmICE9ICcnKSA/ICcgaHJlZj1cIicgKyBocmVmICsgJ1wiJyA6ICcnKSArXHJcblx0XHRcdFx0Jz4nICtcclxuXHRcdFx0XHRcdCc8c3BhbiBjbGFzcz1cImluZGVudC0nICsgaW5kZW50ICsgJ1wiPjwvc3Bhbj4nICtcclxuXHRcdFx0XHRcdCR0aGlzLnRleHQoKSArXHJcblx0XHRcdFx0JzwvYT4nXHJcblx0XHRcdCk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIGIuam9pbignJyk7XHJcblxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFBhbmVsLWlmeSBhbiBlbGVtZW50LlxyXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSB1c2VyQ29uZmlnIFVzZXIgY29uZmlnLlxyXG5cdCAqIEByZXR1cm4ge2pRdWVyeX0galF1ZXJ5IG9iamVjdC5cclxuXHQgKi9cclxuXHQkLmZuLnBhbmVsID0gZnVuY3Rpb24odXNlckNvbmZpZykge1xyXG5cclxuXHRcdC8vIE5vIGVsZW1lbnRzP1xyXG5cdFx0XHRpZiAodGhpcy5sZW5ndGggPT0gMClcclxuXHRcdFx0XHRyZXR1cm4gJHRoaXM7XHJcblxyXG5cdFx0Ly8gTXVsdGlwbGUgZWxlbWVudHM/XHJcblx0XHRcdGlmICh0aGlzLmxlbmd0aCA+IDEpIHtcclxuXHJcblx0XHRcdFx0Zm9yICh2YXIgaT0wOyBpIDwgdGhpcy5sZW5ndGg7IGkrKylcclxuXHRcdFx0XHRcdCQodGhpc1tpXSkucGFuZWwodXNlckNvbmZpZyk7XHJcblxyXG5cdFx0XHRcdHJldHVybiAkdGhpcztcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHQvLyBWYXJzLlxyXG5cdFx0XHR2YXJcdCR0aGlzID0gJCh0aGlzKSxcclxuXHRcdFx0XHQkYm9keSA9ICQoJ2JvZHknKSxcclxuXHRcdFx0XHQkd2luZG93ID0gJCh3aW5kb3cpLFxyXG5cdFx0XHRcdGlkID0gJHRoaXMuYXR0cignaWQnKSxcclxuXHRcdFx0XHRjb25maWc7XHJcblxyXG5cdFx0Ly8gQ29uZmlnLlxyXG5cdFx0XHRjb25maWcgPSAkLmV4dGVuZCh7XHJcblxyXG5cdFx0XHRcdC8vIERlbGF5LlxyXG5cdFx0XHRcdFx0ZGVsYXk6IDAsXHJcblxyXG5cdFx0XHRcdC8vIEhpZGUgcGFuZWwgb24gbGluayBjbGljay5cclxuXHRcdFx0XHRcdGhpZGVPbkNsaWNrOiBmYWxzZSxcclxuXHJcblx0XHRcdFx0Ly8gSGlkZSBwYW5lbCBvbiBlc2NhcGUga2V5cHJlc3MuXHJcblx0XHRcdFx0XHRoaWRlT25Fc2NhcGU6IGZhbHNlLFxyXG5cclxuXHRcdFx0XHQvLyBIaWRlIHBhbmVsIG9uIHN3aXBlLlxyXG5cdFx0XHRcdFx0aGlkZU9uU3dpcGU6IGZhbHNlLFxyXG5cclxuXHRcdFx0XHQvLyBSZXNldCBzY3JvbGwgcG9zaXRpb24gb24gaGlkZS5cclxuXHRcdFx0XHRcdHJlc2V0U2Nyb2xsOiBmYWxzZSxcclxuXHJcblx0XHRcdFx0Ly8gUmVzZXQgZm9ybXMgb24gaGlkZS5cclxuXHRcdFx0XHRcdHJlc2V0Rm9ybXM6IGZhbHNlLFxyXG5cclxuXHRcdFx0XHQvLyBTaWRlIG9mIHZpZXdwb3J0IHRoZSBwYW5lbCB3aWxsIGFwcGVhci5cclxuXHRcdFx0XHRcdHNpZGU6IG51bGwsXHJcblxyXG5cdFx0XHRcdC8vIFRhcmdldCBlbGVtZW50IGZvciBcImNsYXNzXCIuXHJcblx0XHRcdFx0XHR0YXJnZXQ6ICR0aGlzLFxyXG5cclxuXHRcdFx0XHQvLyBDbGFzcyB0byB0b2dnbGUuXHJcblx0XHRcdFx0XHR2aXNpYmxlQ2xhc3M6ICd2aXNpYmxlJ1xyXG5cclxuXHRcdFx0fSwgdXNlckNvbmZpZyk7XHJcblxyXG5cdFx0XHQvLyBFeHBhbmQgXCJ0YXJnZXRcIiBpZiBpdCdzIG5vdCBhIGpRdWVyeSBvYmplY3QgYWxyZWFkeS5cclxuXHRcdFx0XHRpZiAodHlwZW9mIGNvbmZpZy50YXJnZXQgIT0gJ2pRdWVyeScpXHJcblx0XHRcdFx0XHRjb25maWcudGFyZ2V0ID0gJChjb25maWcudGFyZ2V0KTtcclxuXHJcblx0XHQvLyBQYW5lbC5cclxuXHJcblx0XHRcdC8vIE1ldGhvZHMuXHJcblx0XHRcdFx0JHRoaXMuX2hpZGUgPSBmdW5jdGlvbihldmVudCkge1xyXG5cclxuXHRcdFx0XHRcdC8vIEFscmVhZHkgaGlkZGVuPyBCYWlsLlxyXG5cdFx0XHRcdFx0XHRpZiAoIWNvbmZpZy50YXJnZXQuaGFzQ2xhc3MoY29uZmlnLnZpc2libGVDbGFzcykpXHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0XHRcdC8vIElmIGFuIGV2ZW50IHdhcyBwcm92aWRlZCwgY2FuY2VsIGl0LlxyXG5cdFx0XHRcdFx0XHRpZiAoZXZlbnQpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvLyBIaWRlLlxyXG5cdFx0XHRcdFx0XHRjb25maWcudGFyZ2V0LnJlbW92ZUNsYXNzKGNvbmZpZy52aXNpYmxlQ2xhc3MpO1xyXG5cclxuXHRcdFx0XHRcdC8vIFBvc3QtaGlkZSBzdHVmZi5cclxuXHRcdFx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vIFJlc2V0IHNjcm9sbCBwb3NpdGlvbi5cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChjb25maWcucmVzZXRTY3JvbGwpXHJcblx0XHRcdFx0XHRcdFx0XHRcdCR0aGlzLnNjcm9sbFRvcCgwKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0Ly8gUmVzZXQgZm9ybXMuXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoY29uZmlnLnJlc2V0Rm9ybXMpXHJcblx0XHRcdFx0XHRcdFx0XHRcdCR0aGlzLmZpbmQoJ2Zvcm0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucmVzZXQoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0XHR9LCBjb25maWcuZGVsYXkpO1xyXG5cclxuXHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0Ly8gVmVuZG9yIGZpeGVzLlxyXG5cdFx0XHRcdCR0aGlzXHJcblx0XHRcdFx0XHQuY3NzKCctbXMtb3ZlcmZsb3ctc3R5bGUnLCAnLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyJylcclxuXHRcdFx0XHRcdC5jc3MoJy13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nJywgJ3RvdWNoJyk7XHJcblxyXG5cdFx0XHQvLyBIaWRlIG9uIGNsaWNrLlxyXG5cdFx0XHRcdGlmIChjb25maWcuaGlkZU9uQ2xpY2spIHtcclxuXHJcblx0XHRcdFx0XHQkdGhpcy5maW5kKCdhJylcclxuXHRcdFx0XHRcdFx0LmNzcygnLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yJywgJ3JnYmEoMCwwLDAsMCknKTtcclxuXHJcblx0XHRcdFx0XHQkdGhpc1xyXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgJ2EnLCBmdW5jdGlvbihldmVudCkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHR2YXIgJGEgPSAkKHRoaXMpLFxyXG5cdFx0XHRcdFx0XHRcdFx0aHJlZiA9ICRhLmF0dHIoJ2hyZWYnKSxcclxuXHRcdFx0XHRcdFx0XHRcdHRhcmdldCA9ICRhLmF0dHIoJ3RhcmdldCcpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAoIWhyZWYgfHwgaHJlZiA9PSAnIycgfHwgaHJlZiA9PSAnJyB8fCBocmVmID09ICcjJyArIGlkKVxyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0XHRcdFx0XHQvLyBDYW5jZWwgb3JpZ2luYWwgZXZlbnQuXHJcblx0XHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vIEhpZGUgcGFuZWwuXHJcblx0XHRcdFx0XHRcdFx0XHQkdGhpcy5faGlkZSgpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHQvLyBSZWRpcmVjdCB0byBocmVmLlxyXG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAodGFyZ2V0ID09ICdfYmxhbmsnKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5vcGVuKGhyZWYpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSBocmVmO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdH0sIGNvbmZpZy5kZWxheSArIDEwKTtcclxuXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBFdmVudDogVG91Y2ggc3R1ZmYuXHJcblx0XHRcdFx0JHRoaXMub24oJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbihldmVudCkge1xyXG5cclxuXHRcdFx0XHRcdCR0aGlzLnRvdWNoUG9zWCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlc1swXS5wYWdlWDtcclxuXHRcdFx0XHRcdCR0aGlzLnRvdWNoUG9zWSA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlc1swXS5wYWdlWTtcclxuXHJcblx0XHRcdFx0fSlcclxuXHJcblx0XHRcdFx0JHRoaXMub24oJ3RvdWNobW92ZScsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCR0aGlzLnRvdWNoUG9zWCA9PT0gbnVsbFxyXG5cdFx0XHRcdFx0fHxcdCR0aGlzLnRvdWNoUG9zWSA9PT0gbnVsbClcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0XHRcdHZhclx0ZGlmZlggPSAkdGhpcy50b3VjaFBvc1ggLSBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF0ucGFnZVgsXHJcblx0XHRcdFx0XHRcdGRpZmZZID0gJHRoaXMudG91Y2hQb3NZIC0gZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdLnBhZ2VZLFxyXG5cdFx0XHRcdFx0XHR0aCA9ICR0aGlzLm91dGVySGVpZ2h0KCksXHJcblx0XHRcdFx0XHRcdHRzID0gKCR0aGlzLmdldCgwKS5zY3JvbGxIZWlnaHQgLSAkdGhpcy5zY3JvbGxUb3AoKSk7XHJcblxyXG5cdFx0XHRcdFx0Ly8gSGlkZSBvbiBzd2lwZT9cclxuXHRcdFx0XHRcdFx0aWYgKGNvbmZpZy5oaWRlT25Td2lwZSkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHR2YXIgcmVzdWx0ID0gZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0XHRib3VuZGFyeSA9IDIwLFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGVsdGEgPSA1MDtcclxuXHJcblx0XHRcdFx0XHRcdFx0c3dpdGNoIChjb25maWcuc2lkZSkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgJ2xlZnQnOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQgPSAoZGlmZlkgPCBib3VuZGFyeSAmJiBkaWZmWSA+ICgtMSAqIGJvdW5kYXJ5KSkgJiYgKGRpZmZYID4gZGVsdGEpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRjYXNlICdyaWdodCc6XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdCA9IChkaWZmWSA8IGJvdW5kYXJ5ICYmIGRpZmZZID4gKC0xICogYm91bmRhcnkpKSAmJiAoZGlmZlggPCAoLTEgKiBkZWx0YSkpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRjYXNlICd0b3AnOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQgPSAoZGlmZlggPCBib3VuZGFyeSAmJiBkaWZmWCA+ICgtMSAqIGJvdW5kYXJ5KSkgJiYgKGRpZmZZID4gZGVsdGEpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRjYXNlICdib3R0b20nOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQgPSAoZGlmZlggPCBib3VuZGFyeSAmJiBkaWZmWCA+ICgtMSAqIGJvdW5kYXJ5KSkgJiYgKGRpZmZZIDwgKC0xICogZGVsdGEpKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKHJlc3VsdCkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdCR0aGlzLnRvdWNoUG9zWCA9IG51bGw7XHJcblx0XHRcdFx0XHRcdFx0XHQkdGhpcy50b3VjaFBvc1kgPSBudWxsO1xyXG5cdFx0XHRcdFx0XHRcdFx0JHRoaXMuX2hpZGUoKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvLyBQcmV2ZW50IHZlcnRpY2FsIHNjcm9sbGluZyBwYXN0IHRoZSB0b3Agb3IgYm90dG9tLlxyXG5cdFx0XHRcdFx0XHRpZiAoKCR0aGlzLnNjcm9sbFRvcCgpIDwgMCAmJiBkaWZmWSA8IDApXHJcblx0XHRcdFx0XHRcdHx8ICh0cyA+ICh0aCAtIDIpICYmIHRzIDwgKHRoICsgMikgJiYgZGlmZlkgPiAwKSkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vIEV2ZW50OiBQcmV2ZW50IGNlcnRhaW4gZXZlbnRzIGluc2lkZSB0aGUgcGFuZWwgZnJvbSBidWJibGluZy5cclxuXHRcdFx0XHQkdGhpcy5vbignY2xpY2sgdG91Y2hlbmQgdG91Y2hzdGFydCB0b3VjaG1vdmUnLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHQvLyBFdmVudDogSGlkZSBwYW5lbCBpZiBhIGNoaWxkIGFuY2hvciB0YWcgcG9pbnRpbmcgdG8gaXRzIElEIGlzIGNsaWNrZWQuXHJcblx0XHRcdFx0JHRoaXMub24oJ2NsaWNrJywgJ2FbaHJlZj1cIiMnICsgaWQgKyAnXCJdJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG5cdFx0XHRcdFx0Y29uZmlnLnRhcmdldC5yZW1vdmVDbGFzcyhjb25maWcudmlzaWJsZUNsYXNzKTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0Ly8gQm9keS5cclxuXHJcblx0XHRcdC8vIEV2ZW50OiBIaWRlIHBhbmVsIG9uIGJvZHkgY2xpY2svdGFwLlxyXG5cdFx0XHRcdCRib2R5Lm9uKCdjbGljayB0b3VjaGVuZCcsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0XHQkdGhpcy5faGlkZShldmVudCk7XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHQvLyBFdmVudDogVG9nZ2xlLlxyXG5cdFx0XHRcdCRib2R5Lm9uKCdjbGljaycsICdhW2hyZWY9XCIjJyArIGlkICsgJ1wiXScsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdFx0XHRcdGNvbmZpZy50YXJnZXQudG9nZ2xlQ2xhc3MoY29uZmlnLnZpc2libGVDbGFzcyk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdC8vIFdpbmRvdy5cclxuXHJcblx0XHRcdC8vIEV2ZW50OiBIaWRlIG9uIEVTQy5cclxuXHRcdFx0XHRpZiAoY29uZmlnLmhpZGVPbkVzY2FwZSlcclxuXHRcdFx0XHRcdCR3aW5kb3cub24oJ2tleWRvd24nLCBmdW5jdGlvbihldmVudCkge1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKGV2ZW50LmtleUNvZGUgPT0gMjcpXHJcblx0XHRcdFx0XHRcdFx0JHRoaXMuX2hpZGUoZXZlbnQpO1xyXG5cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiAkdGhpcztcclxuXHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQXBwbHkgXCJwbGFjZWhvbGRlclwiIGF0dHJpYnV0ZSBwb2x5ZmlsbCB0byBvbmUgb3IgbW9yZSBmb3Jtcy5cclxuXHQgKiBAcmV0dXJuIHtqUXVlcnl9IGpRdWVyeSBvYmplY3QuXHJcblx0ICovXHJcblx0JC5mbi5wbGFjZWhvbGRlciA9IGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdC8vIEJyb3dzZXIgbmF0aXZlbHkgc3VwcG9ydHMgcGxhY2Vob2xkZXJzPyBCYWlsLlxyXG5cdFx0XHRpZiAodHlwZW9mIChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKS5wbGFjZWhvbGRlciAhPSAndW5kZWZpbmVkJylcclxuXHRcdFx0XHRyZXR1cm4gJCh0aGlzKTtcclxuXHJcblx0XHQvLyBObyBlbGVtZW50cz9cclxuXHRcdFx0aWYgKHRoaXMubGVuZ3RoID09IDApXHJcblx0XHRcdFx0cmV0dXJuICR0aGlzO1xyXG5cclxuXHRcdC8vIE11bHRpcGxlIGVsZW1lbnRzP1xyXG5cdFx0XHRpZiAodGhpcy5sZW5ndGggPiAxKSB7XHJcblxyXG5cdFx0XHRcdGZvciAodmFyIGk9MDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspXHJcblx0XHRcdFx0XHQkKHRoaXNbaV0pLnBsYWNlaG9sZGVyKCk7XHJcblxyXG5cdFx0XHRcdHJldHVybiAkdGhpcztcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHQvLyBWYXJzLlxyXG5cdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuXHRcdC8vIFRleHQsIFRleHRBcmVhLlxyXG5cdFx0XHQkdGhpcy5maW5kKCdpbnB1dFt0eXBlPXRleHRdLHRleHRhcmVhJylcclxuXHRcdFx0XHQuZWFjaChmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdFx0XHR2YXIgaSA9ICQodGhpcyk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGkudmFsKCkgPT0gJydcclxuXHRcdFx0XHRcdHx8ICBpLnZhbCgpID09IGkuYXR0cigncGxhY2Vob2xkZXInKSlcclxuXHRcdFx0XHRcdFx0aVxyXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygncG9seWZpbGwtcGxhY2Vob2xkZXInKVxyXG5cdFx0XHRcdFx0XHRcdC52YWwoaS5hdHRyKCdwbGFjZWhvbGRlcicpKTtcclxuXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQub24oJ2JsdXInLCBmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdFx0XHR2YXIgaSA9ICQodGhpcyk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGkuYXR0cignbmFtZScpLm1hdGNoKC8tcG9seWZpbGwtZmllbGQkLykpXHJcblx0XHRcdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdFx0XHRpZiAoaS52YWwoKSA9PSAnJylcclxuXHRcdFx0XHRcdFx0aVxyXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygncG9seWZpbGwtcGxhY2Vob2xkZXInKVxyXG5cdFx0XHRcdFx0XHRcdC52YWwoaS5hdHRyKCdwbGFjZWhvbGRlcicpKTtcclxuXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQub24oJ2ZvY3VzJywgZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdFx0dmFyIGkgPSAkKHRoaXMpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChpLmF0dHIoJ25hbWUnKS5tYXRjaCgvLXBvbHlmaWxsLWZpZWxkJC8pKVxyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRcdFx0aWYgKGkudmFsKCkgPT0gaS5hdHRyKCdwbGFjZWhvbGRlcicpKVxyXG5cdFx0XHRcdFx0XHRpXHJcblx0XHRcdFx0XHRcdFx0LnJlbW92ZUNsYXNzKCdwb2x5ZmlsbC1wbGFjZWhvbGRlcicpXHJcblx0XHRcdFx0XHRcdFx0LnZhbCgnJyk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdC8vIFBhc3N3b3JkLlxyXG5cdFx0XHQkdGhpcy5maW5kKCdpbnB1dFt0eXBlPXBhc3N3b3JkXScpXHJcblx0XHRcdFx0LmVhY2goZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdFx0dmFyIGkgPSAkKHRoaXMpO1xyXG5cdFx0XHRcdFx0dmFyIHggPSAkKFxyXG5cdFx0XHRcdFx0XHRcdFx0JCgnPGRpdj4nKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuYXBwZW5kKGkuY2xvbmUoKSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0LnJlbW92ZSgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5odG1sKClcclxuXHRcdFx0XHRcdFx0XHRcdFx0LnJlcGxhY2UoL3R5cGU9XCJwYXNzd29yZFwiL2ksICd0eXBlPVwidGV4dFwiJylcclxuXHRcdFx0XHRcdFx0XHRcdFx0LnJlcGxhY2UoL3R5cGU9cGFzc3dvcmQvaSwgJ3R5cGU9dGV4dCcpXHJcblx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChpLmF0dHIoJ2lkJykgIT0gJycpXHJcblx0XHRcdFx0XHRcdHguYXR0cignaWQnLCBpLmF0dHIoJ2lkJykgKyAnLXBvbHlmaWxsLWZpZWxkJyk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGkuYXR0cignbmFtZScpICE9ICcnKVxyXG5cdFx0XHRcdFx0XHR4LmF0dHIoJ25hbWUnLCBpLmF0dHIoJ25hbWUnKSArICctcG9seWZpbGwtZmllbGQnKTtcclxuXHJcblx0XHRcdFx0XHR4LmFkZENsYXNzKCdwb2x5ZmlsbC1wbGFjZWhvbGRlcicpXHJcblx0XHRcdFx0XHRcdC52YWwoeC5hdHRyKCdwbGFjZWhvbGRlcicpKS5pbnNlcnRBZnRlcihpKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoaS52YWwoKSA9PSAnJylcclxuXHRcdFx0XHRcdFx0aS5oaWRlKCk7XHJcblx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdHguaGlkZSgpO1xyXG5cclxuXHRcdFx0XHRcdGlcclxuXHRcdFx0XHRcdFx0Lm9uKCdibHVyJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0dmFyIHggPSBpLnBhcmVudCgpLmZpbmQoJ2lucHV0W25hbWU9JyArIGkuYXR0cignbmFtZScpICsgJy1wb2x5ZmlsbC1maWVsZF0nKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKGkudmFsKCkgPT0gJycpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRpLmhpZGUoKTtcclxuXHRcdFx0XHRcdFx0XHRcdHguc2hvdygpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHR4XHJcblx0XHRcdFx0XHRcdC5vbignZm9jdXMnLCBmdW5jdGlvbihldmVudCkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR2YXIgaSA9IHgucGFyZW50KCkuZmluZCgnaW5wdXRbbmFtZT0nICsgeC5hdHRyKCduYW1lJykucmVwbGFjZSgnLXBvbHlmaWxsLWZpZWxkJywgJycpICsgJ10nKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0eC5oaWRlKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlcclxuXHRcdFx0XHRcdFx0XHRcdC5zaG93KClcclxuXHRcdFx0XHRcdFx0XHRcdC5mb2N1cygpO1xyXG5cclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0Lm9uKCdrZXlwcmVzcycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRcdFx0eC52YWwoJycpO1xyXG5cclxuXHRcdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdC8vIEV2ZW50cy5cclxuXHRcdFx0JHRoaXNcclxuXHRcdFx0XHQub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0XHRcdCR0aGlzLmZpbmQoJ2lucHV0W3R5cGU9dGV4dF0saW5wdXRbdHlwZT1wYXNzd29yZF0sdGV4dGFyZWEnKVxyXG5cdFx0XHRcdFx0XHQuZWFjaChmdW5jdGlvbihldmVudCkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHR2YXIgaSA9ICQodGhpcyk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmIChpLmF0dHIoJ25hbWUnKS5tYXRjaCgvLXBvbHlmaWxsLWZpZWxkJC8pKVxyXG5cdFx0XHRcdFx0XHRcdFx0aS5hdHRyKCduYW1lJywgJycpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAoaS52YWwoKSA9PSBpLmF0dHIoJ3BsYWNlaG9sZGVyJykpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRpLnJlbW92ZUNsYXNzKCdwb2x5ZmlsbC1wbGFjZWhvbGRlcicpO1xyXG5cdFx0XHRcdFx0XHRcdFx0aS52YWwoJycpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQub24oJ3Jlc2V0JywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0XHRcdCR0aGlzLmZpbmQoJ3NlbGVjdCcpXHJcblx0XHRcdFx0XHRcdC52YWwoJCgnb3B0aW9uOmZpcnN0JykudmFsKCkpO1xyXG5cclxuXHRcdFx0XHRcdCR0aGlzLmZpbmQoJ2lucHV0LHRleHRhcmVhJylcclxuXHRcdFx0XHRcdFx0LmVhY2goZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHZhciBpID0gJCh0aGlzKSxcclxuXHRcdFx0XHRcdFx0XHRcdHg7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGkucmVtb3ZlQ2xhc3MoJ3BvbHlmaWxsLXBsYWNlaG9sZGVyJyk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHN3aXRjaCAodGhpcy50eXBlKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAnc3VibWl0JzpcclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgJ3Jlc2V0JzpcclxuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAncGFzc3dvcmQnOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpLnZhbChpLmF0dHIoJ2RlZmF1bHRWYWx1ZScpKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdHggPSBpLnBhcmVudCgpLmZpbmQoJ2lucHV0W25hbWU9JyArIGkuYXR0cignbmFtZScpICsgJy1wb2x5ZmlsbC1maWVsZF0nKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChpLnZhbCgpID09ICcnKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aS5oaWRlKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eC5zaG93KCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aS5zaG93KCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eC5oaWRlKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgJ2NoZWNrYm94JzpcclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgJ3JhZGlvJzpcclxuXHRcdFx0XHRcdFx0XHRcdFx0aS5hdHRyKCdjaGVja2VkJywgaS5hdHRyKCdkZWZhdWx0VmFsdWUnKSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgJ3RleHQnOlxyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAndGV4dGFyZWEnOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpLnZhbChpLmF0dHIoJ2RlZmF1bHRWYWx1ZScpKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChpLnZhbCgpID09ICcnKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aS5hZGRDbGFzcygncG9seWZpbGwtcGxhY2Vob2xkZXInKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpLnZhbChpLmF0dHIoJ3BsYWNlaG9sZGVyJykpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpLnZhbChpLmF0dHIoJ2RlZmF1bHRWYWx1ZScpKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiAkdGhpcztcclxuXHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogTW92ZXMgZWxlbWVudHMgdG8vZnJvbSB0aGUgZmlyc3QgcG9zaXRpb25zIG9mIHRoZWlyIHJlc3BlY3RpdmUgcGFyZW50cy5cclxuXHQgKiBAcGFyYW0ge2pRdWVyeX0gJGVsZW1lbnRzIEVsZW1lbnRzIChvciBzZWxlY3RvcikgdG8gbW92ZS5cclxuXHQgKiBAcGFyYW0ge2Jvb2x9IGNvbmRpdGlvbiBJZiB0cnVlLCBtb3ZlcyBlbGVtZW50cyB0byB0aGUgdG9wLiBPdGhlcndpc2UsIG1vdmVzIGVsZW1lbnRzIGJhY2sgdG8gdGhlaXIgb3JpZ2luYWwgbG9jYXRpb25zLlxyXG5cdCAqL1xyXG5cdCQucHJpb3JpdGl6ZSA9IGZ1bmN0aW9uKCRlbGVtZW50cywgY29uZGl0aW9uKSB7XHJcblxyXG5cdFx0dmFyIGtleSA9ICdfX3ByaW9yaXRpemUnO1xyXG5cclxuXHRcdC8vIEV4cGFuZCAkZWxlbWVudHMgaWYgaXQncyBub3QgYWxyZWFkeSBhIGpRdWVyeSBvYmplY3QuXHJcblx0XHRcdGlmICh0eXBlb2YgJGVsZW1lbnRzICE9ICdqUXVlcnknKVxyXG5cdFx0XHRcdCRlbGVtZW50cyA9ICQoJGVsZW1lbnRzKTtcclxuXHJcblx0XHQvLyBTdGVwIHRocm91Z2ggZWxlbWVudHMuXHJcblx0XHRcdCRlbGVtZW50cy5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0XHR2YXJcdCRlID0gJCh0aGlzKSwgJHAsXHJcblx0XHRcdFx0XHQkcGFyZW50ID0gJGUucGFyZW50KCk7XHJcblxyXG5cdFx0XHRcdC8vIE5vIHBhcmVudD8gQmFpbC5cclxuXHRcdFx0XHRcdGlmICgkcGFyZW50Lmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRcdC8vIE5vdCBtb3ZlZD8gTW92ZSBpdC5cclxuXHRcdFx0XHRcdGlmICghJGUuZGF0YShrZXkpKSB7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBDb25kaXRpb24gaXMgZmFsc2U/IEJhaWwuXHJcblx0XHRcdFx0XHRcdFx0aWYgKCFjb25kaXRpb24pXHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBHZXQgcGxhY2Vob2xkZXIgKHdoaWNoIHdpbGwgc2VydmUgYXMgb3VyIHBvaW50IG9mIHJlZmVyZW5jZSBmb3Igd2hlbiB0aGlzIGVsZW1lbnQgbmVlZHMgdG8gbW92ZSBiYWNrKS5cclxuXHRcdFx0XHRcdFx0XHQkcCA9ICRlLnByZXYoKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0Ly8gQ291bGRuJ3QgZmluZCBhbnl0aGluZz8gTWVhbnMgdGhpcyBlbGVtZW50J3MgYWxyZWFkeSBhdCB0aGUgdG9wLCBzbyBiYWlsLlxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCRwLmxlbmd0aCA9PSAwKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBNb3ZlIGVsZW1lbnQgdG8gdG9wIG9mIHBhcmVudC5cclxuXHRcdFx0XHRcdFx0XHQkZS5wcmVwZW5kVG8oJHBhcmVudCk7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBNYXJrIGVsZW1lbnQgYXMgbW92ZWQuXHJcblx0XHRcdFx0XHRcdFx0JGUuZGF0YShrZXksICRwKTtcclxuXHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIE1vdmVkIGFscmVhZHk/XHJcblx0XHRcdFx0XHRlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRcdC8vIENvbmRpdGlvbiBpcyB0cnVlPyBCYWlsLlxyXG5cdFx0XHRcdFx0XHRcdGlmIChjb25kaXRpb24pXHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0XHRcdFx0XHQkcCA9ICRlLmRhdGEoa2V5KTtcclxuXHJcblx0XHRcdFx0XHRcdC8vIE1vdmUgZWxlbWVudCBiYWNrIHRvIGl0cyBvcmlnaW5hbCBsb2NhdGlvbiAodXNpbmcgb3VyIHBsYWNlaG9sZGVyKS5cclxuXHRcdFx0XHRcdFx0XHQkZS5pbnNlcnRBZnRlcigkcCk7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBVbm1hcmsgZWxlbWVudCBhcyBtb3ZlZC5cclxuXHRcdFx0XHRcdFx0XHQkZS5yZW1vdmVEYXRhKGtleSk7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSk7XHJcblxyXG5cdH07XHJcblxyXG59KShqUXVlcnkpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvdmVuZG9yL2h0bWw1U3RvcnlUaGVtZS9qcy91dGlsLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==