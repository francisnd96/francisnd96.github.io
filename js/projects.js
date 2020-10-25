!function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (C, e) {
    "use strict";
    var t = [], E = C.document, r = Object.getPrototypeOf, s = t.slice, g = t.concat, u = t.push, i = t.indexOf, n = {},
        o = n.toString, h = n.hasOwnProperty, a = h.toString, c = a.call(Object), v = {};

    function m(e, t) {
        var n = (t = t || E).createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
    }

    var l = "3.2.1", k = function (e, t) {
        return new k.fn.init(e, t)
    }, f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, d = /-([a-z])/g, y = function (e, t) {
        return t.toUpperCase()
    };

    function x(e) {
        var t = !!e && "length" in e && e.length, n = k.type(e);
        return "function" !== n && !k.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }

    k.fn = k.prototype = {
        jquery: l, constructor: k, length: 0, toArray: function () {
            return s.call(this)
        }, get: function (e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        }, pushStack: function (e) {
            var t = k.merge(this.constructor(), e);
            return t.prevObject = this, t
        }, each: function (e) {
            return k.each(this, e)
        }, map: function (n) {
            return this.pushStack(k.map(this, function (e, t) {
                return n.call(e, t, e)
            }))
        }, slice: function () {
            return this.pushStack(s.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: u, sort: t.sort, splice: t.splice
    }, k.extend = k.fn.extend = function () {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || k.isFunction(a) || (a = {}), s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) n = a[t], a !== (r = e[t]) && (c && r && (k.isPlainObject(r) || (i = Array.isArray(r))) ? (o = i ? (i = !1, n && Array.isArray(n) ? n : []) : n && k.isPlainObject(n) ? n : {}, a[t] = k.extend(c, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, k.extend({
        expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isFunction: function (e) {
            return "function" === k.type(e)
        }, isWindow: function (e) {
            return null != e && e === e.window
        }, isNumeric: function (e) {
            var t = k.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }, isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e) || (t = r(e)) && ("function" != typeof (n = h.call(t, "constructor") && t.constructor) || a.call(n) !== c))
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
        }, globalEval: function (e) {
            m(e)
        }, camelCase: function (e) {
            return e.replace(p, "ms-").replace(d, y)
        }, each: function (e, t) {
            var n, r = 0;
            if (x(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++) ; else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(f, "")
        }, makeArray: function (e, t) {
            var n = t || [];
            return null != e && (x(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
        }, inArray: function (e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        }, merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        }, grep: function (e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) != a && r.push(e[i]);
            return r
        }, map: function (e, t, n) {
            var r, i, o = 0, a = [];
            if (x(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i); else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g.apply([], a)
        }, guid: 1, proxy: function (e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t], t = e, e = n), k.isFunction(e)) return r = s.call(arguments, 2), (i = function () {
                return e.apply(t || this, r.concat(s.call(arguments)))
            }).guid = e.guid = e.guid || k.guid++, i
        }, now: Date.now, support: v
    }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var b = function (n) {
        var e, d, b, o, i, h, f, g, w, u, c, T, C, a, E, v, s, l, m, k = "sizzle" + 1 * new Date, y = n.document, S = 0,
            r = 0, p = ae(), x = ae(), j = ae(), N = function (e, t) {
                return e === t && (c = !0), 0
            }, D = {}.hasOwnProperty, t = [], A = t.pop, q = t.push, L = t.push, H = t.slice, F = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                return -1
            },
            O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            P = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            $ = "\\[" + P + "*(" + R + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + P + "*\\]",
            M = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + $ + ")*)|.*)\\)|)",
            I = new RegExp(P + "+", "g"), W = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
            B = new RegExp("^" + P + "*," + P + "*"), _ = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
            z = new RegExp("=" + P + "*([^\\]'\"]*?)" + P + "*\\]", "g"), U = new RegExp(M),
            X = new RegExp("^" + R + "$"), V = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + $),
                PSEUDO: new RegExp("^" + M),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + O + ")$", "i"),
                needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
            }, G = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Q = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, K = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"), ee = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r != r || n ? t : r < 0 ? String.fromCharCode(65536 + r) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function (e, t) {
                return t ? "\0" === e ? "?" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }, re = function () {
                T()
            }, ie = ye(function (e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {dir: "parentNode", next: "legend"});
        try {
            L.apply(t = H.call(y.childNodes), y.childNodes), t[y.childNodes.length].nodeType
        } catch (e) {
            L = {
                apply: t.length ? function (e, t) {
                    q.apply(e, H.call(t))
                } : function (e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];) ;
                    e.length = n - 1
                }
            }
        }

        function oe(e, t, n, r) {
            var i, o, a, s, u, c, l, f = t && t.ownerDocument, p = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && ((t ? t.ownerDocument || t : y) !== C && T(t), t = t || C, E)) {
                if (11 !== p && (u = J.exec(e))) if (i = u[1]) {
                    if (9 === p) {
                        if (!(a = t.getElementById(i))) return n;
                        if (a.id === i) return n.push(a), n
                    } else if (f && (a = f.getElementById(i)) && m(t, a) && a.id === i) return n.push(a), n
                } else {
                    if (u[2]) return L.apply(n, t.getElementsByTagName(e)), n;
                    if ((i = u[3]) && d.getElementsByClassName && t.getElementsByClassName) return L.apply(n, t.getElementsByClassName(i)), n
                }
                if (d.qsa && !j[e + " "] && (!v || !v.test(e))) {
                    if (1 !== p) f = t, l = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(te, ne) : t.setAttribute("id", s = k), o = (c = h(e)).length; o--;) c[o] = "#" + s + " " + me(c[o]);
                        l = c.join(","), f = K.test(e) && ge(t.parentNode) || t
                    }
                    if (l) try {
                        return L.apply(n, f.querySelectorAll(l)), n
                    } catch (e) {
                    } finally {
                        s === k && t.removeAttribute("id")
                    }
                }
            }
            return g(e.replace(W, "$1"), t, n, r)
        }

        function ae() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function se(e) {
            return e[k] = !0, e
        }

        function ue(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ce(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) b.attrHandle[n[r]] = t
        }

        function le(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) for (; n = n.nextSibling;) if (n === t) return -1;
            return e ? 1 : -1
        }

        function fe(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function pe(n) {
            return function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function de(t) {
            return function (e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ie(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function he(a) {
            return se(function (o) {
                return o = +o, se(function (e, t) {
                    for (var n, r = a([], e.length, o), i = r.length; i--;) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ge(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        for (e in d = oe.support = {}, i = oe.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, T = oe.setDocument = function (e) {
            var t, n, r = e ? e.ownerDocument || e : y;
            return r !== C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), y !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", re, !1) : n.attachEvent && n.attachEvent("onunload", re)), d.attributes = ue(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), d.getElementsByTagName = ue(function (e) {
                return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
            }), d.getElementsByClassName = Q.test(C.getElementsByClassName), d.getById = ue(function (e) {
                return a.appendChild(e).id = k, !C.getElementsByName || !C.getElementsByName(k).length
            }), d.getById ? (b.filter.ID = function (e) {
                var t = e.replace(Z, ee);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, b.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (b.filter.ID = function (e) {
                var n = e.replace(Z, ee);
                return function (e) {
                    var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }, b.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && E) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        for (i = t.getElementsByName(e), r = 0; o = i[r++];) if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" !== e) return o;
                for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                return r
            }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
                if (void 0 !== t.getElementsByClassName && E) return t.getElementsByClassName(e)
            }, s = [], v = [], (d.qsa = Q.test(C.querySelectorAll)) && (ue(function (e) {
                a.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + P + "*(?:value|" + O + ")"), e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + k + "+*").length || v.push(".#.+[+~]")
            }), ue(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + P + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
            })), (d.matchesSelector = Q.test(l = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ue(function (e) {
                d.disconnectedMatch = l.call(e, "*"), l.call(e, "[s!='']:x"), s.push("!=", M)
            }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = Q.test(a.compareDocumentPosition), m = t || Q.test(a.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return !0;
                return !1
            }, N = t ? function (e, t) {
                if (e === t) return c = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === y && m(y, e) ? -1 : t === C || t.ownerDocument === y && m(y, t) ? 1 : u ? F(u, e) - F(u, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return c = !0, 0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? F(u, e) - F(u, t) : 0;
                if (i === o) return le(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) s.unshift(n);
                for (; a[r] === s[r];) r++;
                return r ? le(a[r], s[r]) : a[r] === y ? -1 : s[r] === y ? 1 : 0
            }), C
        }, oe.matches = function (e, t) {
            return oe(e, null, null, t)
        }, oe.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== C && T(e), t = t.replace(z, "='$1']"), d.matchesSelector && E && !j[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
                var n = l.call(e, t);
                if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (e) {
            }
            return 0 < oe(t, C, null, [e]).length
        }, oe.contains = function (e, t) {
            return (e.ownerDocument || e) !== C && T(e), m(e, t)
        }, oe.attr = function (e, t) {
            (e.ownerDocument || e) !== C && T(e);
            var n = b.attrHandle[t.toLowerCase()],
                r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
            return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, oe.escape = function (e) {
            return (e + "").replace(te, ne)
        }, oe.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, oe.uniqueSort = function (e) {
            var t, n = [], r = 0, i = 0;
            if (c = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(N), c) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return u = null, e
        }, o = oe.getText = function (e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else for (; t = e[r++];) n += o(t);
            return n
        }, (b = oe.selectors = {
            cacheLength: 50,
            createPseudo: se,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(Z, ee).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = p[e + " "];
                    return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && p(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                }, ATTR: function (n, r, i) {
                    return function (e) {
                        var t = oe.attr(e, n);
                        return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(I, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                    }
                }, CHILD: function (h, e, t, g, v) {
                    var m = "nth" !== h.slice(0, 3), y = "last" !== h.slice(-4), x = "of-type" === e;
                    return 1 === g && 0 === v ? function (e) {
                        return !!e.parentNode
                    } : function (e, t, n) {
                        var r, i, o, a, s, u, c = m != y ? "nextSibling" : "previousSibling", l = e.parentNode,
                            f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1;
                        if (l) {
                            if (m) {
                                for (; c;) {
                                    for (a = e; a = a[c];) if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                    u = c = "only" === h && !u && "nextSibling"
                                }
                                return !0
                            }
                            if (u = [y ? l.firstChild : l.lastChild], y && p) {
                                for (d = (s = (r = (i = (o = (a = l)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2], a = s && l.childNodes[s]; a = ++s && a && a[c] || (d = s = 0) || u.pop();) if (1 === a.nodeType && ++d && a === e) {
                                    i[h] = [S, s, d];
                                    break
                                }
                            } else if (p && (d = s = (r = (i = (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]), !1 === d) for (; (a = ++s && a && a[c] || (d = s = 0) || u.pop()) && ((x ? a.nodeName.toLowerCase() !== f : 1 !== a.nodeType) || !++d || (p && ((i = (o = a[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [S, d]), a !== e));) ;
                            return (d -= v) === g || d % g == 0 && 0 <= d / g
                        }
                    }
                }, PSEUDO: function (e, o) {
                    var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    return a[k] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, t) {
                        for (var n, r = a(e, o), i = r.length; i--;) e[n = F(e, r[i])] = !(t[n] = r[i])
                    }) : function (e) {
                        return a(e, 0, t)
                    }) : a
                }
            },
            pseudos: {
                not: se(function (e) {
                    var r = [], i = [], s = f(e.replace(W, "$1"));
                    return s[k] ? se(function (e, t, n, r) {
                        for (var i, o = s(e, null, r, []), a = e.length; a--;) (i = o[a]) && (e[a] = !(t[a] = i))
                    }) : function (e, t, n) {
                        return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                    }
                }), has: se(function (t) {
                    return function (e) {
                        return 0 < oe(t, e).length
                    }
                }), contains: se(function (t) {
                    return t = t.replace(Z, ee), function (e) {
                        return -1 < (e.textContent || e.innerText || o(e)).indexOf(t)
                    }
                }), lang: se(function (n) {
                    return X.test(n || "") || oe.error("unsupported lang: " + n), n = n.replace(Z, ee).toLowerCase(), function (e) {
                        var t;
                        do {
                            if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }), target: function (e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                }, root: function (e) {
                    return e === a
                }, focus: function (e) {
                    return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: de(!1), disabled: de(!0), checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0
                }, parent: function (e) {
                    return !b.pseudos.empty(e)
                }, header: function (e) {
                    return Y.test(e.nodeName)
                }, input: function (e) {
                    return G.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: he(function () {
                    return [0]
                }), last: he(function (e, t) {
                    return [t - 1]
                }), eq: he(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }), even: he(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }), odd: he(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }), lt: he(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; 0 <= --r;) e.push(r);
                    return e
                }), gt: he(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }).pseudos.nth = b.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) b.pseudos[e] = fe(e);
        for (e in{submit: !0, reset: !0}) b.pseudos[e] = pe(e);

        function ve() {
        }

        function me(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function ye(s, e, t) {
            var u = e.dir, c = e.next, l = c || u, f = t && "parentNode" === l, p = r++;
            return e.first ? function (e, t, n) {
                for (; e = e[u];) if (1 === e.nodeType || f) return s(e, t, n);
                return !1
            } : function (e, t, n) {
                var r, i, o, a = [S, p];
                if (n) {
                    for (; e = e[u];) if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                } else for (; e = e[u];) if (1 === e.nodeType || f) if (i = (o = e[k] || (e[k] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), c && c === e.nodeName.toLowerCase()) e = e[u] || e; else {
                    if ((r = i[l]) && r[0] === S && r[1] === p) return a[2] = r[2];
                    if ((i[l] = a)[2] = s(e, t, n)) return !0
                }
                return !1
            }
        }

        function xe(i) {
            return 1 < i.length ? function (e, t, n) {
                for (var r = i.length; r--;) if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function be(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, c = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), c && t.push(s)));
            return a
        }

        function we(d, h, g, v, m, e) {
            return v && !v[k] && (v = we(v)), m && !m[k] && (m = we(m, e)), se(function (e, t, n, r) {
                var i, o, a, s = [], u = [], c = t.length, l = e || function (e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []), f = !d || !e && h ? l : be(l, s, d, n, r),
                    p = g ? m || (e ? d : c || v) ? [] : t : f;
                if (g && g(f, p, n, r), v) for (i = be(p, u), v(i, [], n, r), o = i.length; o--;) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
                if (e) {
                    if (m || d) {
                        if (m) {
                            for (i = [], o = p.length; o--;) (a = p[o]) && i.push(f[o] = a);
                            m(null, p = [], i, r)
                        }
                        for (o = p.length; o--;) (a = p[o]) && -1 < (i = m ? F(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else p = be(p === t ? p.splice(c, p.length) : p), m ? m(null, t, p, r) : L.apply(t, p)
            })
        }

        function Te(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = ye(function (e) {
                return e === i
            }, a, !0), c = ye(function (e) {
                return -1 < F(i, e)
            }, a, !0), l = [function (e, t, n) {
                var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : c(e, t, n));
                return i = null, r
            }]; s < r; s++) if (t = b.relative[e[s].type]) l = [ye(xe(l), t)]; else {
                if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
                    for (n = ++s; n < r && !b.relative[e[n].type]; n++) ;
                    return we(1 < s && xe(l), 1 < s && me(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(W, "$1"), t, s < n && Te(e.slice(s, n)), n < r && Te(e = e.slice(n)), n < r && me(e))
                }
                l.push(t)
            }
            return xe(l)
        }

        return ve.prototype = b.filters = b.pseudos, b.setFilters = new ve, h = oe.tokenize = function (e, t) {
            var n, r, i, o, a, s, u, c = x[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (a = e, s = [], u = b.preFilter; a;) {
                for (o in n && !(r = B.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = _.exec(a)) && (n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace(W, " ")
                }), a = a.slice(n.length)), b.filter) !(r = V[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? oe.error(e) : x(e, s).slice(0)
        }, f = oe.compile = function (e, t) {
            var n, r = [], i = [], o = j[e + " "];
            if (!o) {
                for (t || (t = h(e)), n = t.length; n--;) (o = Te(t[n]))[k] ? r.push(o) : i.push(o);
                (o = j(e, function (v, m) {
                    var y = 0 < m.length, x = 0 < v.length, e = function (e, t, n, r, i) {
                        var o, a, s, u = 0, c = "0", l = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i),
                            h = S += null == p ? 1 : Math.random() || .1, g = d.length;
                        for (i && (w = t === C || t || i); c !== g && null != (o = d[c]); c++) {
                            if (x && o) {
                                for (a = 0, t || o.ownerDocument === C || (T(o), n = !E); s = v[a++];) if (s(o, t || C, n)) {
                                    r.push(o);
                                    break
                                }
                                i && (S = h)
                            }
                            y && ((o = !s && o) && u--, e && l.push(o))
                        }
                        if (u += c, y && c !== u) {
                            for (a = 0; s = m[a++];) s(l, f, t, n);
                            if (e) {
                                if (0 < u) for (; c--;) l[c] || f[c] || (f[c] = A.call(r));
                                f = be(f)
                            }
                            L.apply(r, f), i && !e && 0 < f.length && 1 < u + m.length && oe.uniqueSort(r)
                        }
                        return i && (S = h, w = p), l
                    };
                    return y ? se(e) : e
                }(i, r))).selector = e
            }
            return o
        }, g = oe.select = function (e, t, n, r) {
            var i, o, a, s, u, c = "function" == typeof e && e, l = !r && h(e = c.selector || e);
            if (n = n || [], 1 === l.length) {
                if (2 < (o = l[0] = l[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(Z, ee), t) || [])[0])) return n;
                    c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = V.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !b.relative[s = a.type]);) if ((u = b.find[s]) && (r = u(a.matches[0].replace(Z, ee), K.test(o[0].type) && ge(t.parentNode) || t))) {
                    if (o.splice(i, 1), !(e = r.length && me(o))) return L.apply(n, r), n;
                    break
                }
            }
            return (c || f(e, l))(r, t, !E, n, !t || K.test(e) && ge(t.parentNode) || t), n
        }, d.sortStable = k.split("").sort(N).join("") === k, d.detectDuplicates = !!c, T(), d.sortDetached = ue(function (e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }), ue(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ce("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), d.attributes && ue(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ce("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ue(function (e) {
            return null == e.getAttribute("disabled")
        }) || ce(O, function (e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), oe
    }(C);
    k.find = b, k.expr = b.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = b.uniqueSort, k.text = b.getText, k.isXMLDoc = b.isXML, k.contains = b.contains, k.escapeSelector = b.escape;
    var w = function (e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
            if (i && k(e).is(n)) break;
            r.push(e)
        }
        return r
    }, T = function (e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }, S = k.expr.match.needsContext;

    function j(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i, D = /^.[^:#\[\.,]*$/;

    function A(e, n, r) {
        return k.isFunction(n) ? k.grep(e, function (e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? k.grep(e, function (e) {
            return e === n !== r
        }) : "string" != typeof n ? k.grep(e, function (e) {
            return -1 < i.call(n, e) !== r
        }) : D.test(n) ? k.filter(n, e, r) : (n = k.filter(n, e), k.grep(e, function (e) {
            return -1 < i.call(n, e) !== r && 1 === e.nodeType
        }))
    }

    k.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, k.fn.extend({
        find: function (e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e) return this.pushStack(k(e).filter(function () {
                for (t = 0; t < r; t++) if (k.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) k.find(e, i[t], n);
            return 1 < r ? k.uniqueSort(n) : n
        }, filter: function (e) {
            return this.pushStack(A(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(A(this, e || [], !0))
        }, is: function (e) {
            return !!A(this, "string" == typeof e && S.test(e) ? k(e) : e || [], !1).length
        }
    });
    var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (k.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || q, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : k.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this);
        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (r[1]) {
            if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && k.isPlainObject(t)) for (r in t) k.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this
        }
        return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
    }).prototype = k.fn, q = k(E);
    var H = /^(?:parents|prev(?:Until|All))/, F = {children: !0, contents: !0, next: !0, prev: !0};

    function O(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;) ;
        return e
    }

    k.fn.extend({
        has: function (e) {
            var t = k(e, this), n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (k.contains(this, t[e])) return !0
            })
        }, closest: function (e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && k(e);
            if (!S.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
                o.push(n);
                break
            }
            return this.pushStack(1 < o.length ? k.uniqueSort(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), k.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return w(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return w(e, "parentNode", n)
        }, next: function (e) {
            return O(e, "nextSibling")
        }, prev: function (e) {
            return O(e, "previousSibling")
        }, nextAll: function (e) {
            return w(e, "nextSibling")
        }, prevAll: function (e) {
            return w(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return w(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return w(e, "previousSibling", n)
        }, siblings: function (e) {
            return T((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return T(e.firstChild)
        }, contents: function (e) {
            return j(e, "iframe") ? e.contentDocument : (j(e, "template") && (e = e.content || e), k.merge([], e.childNodes))
        }
    }, function (r, i) {
        k.fn[r] = function (e, t) {
            var n = k.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = k.filter(t, n)), 1 < this.length && (F[r] || k.uniqueSort(n), H.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;

    function R(e) {
        return e
    }

    function $(e) {
        throw e
    }

    function M(e, t, n, r) {
        var i;
        try {
            e && k.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && k.isFunction(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    k.Callbacks = function (r) {
        r = "string" == typeof r ? function (e) {
            var n = {};
            return k.each(e.match(P) || [], function (e, t) {
                n[t] = !0
            }), n
        }(r) : k.extend({}, r);
        var n, e, t, i, o = [], a = [], s = -1, u = function () {
            for (i = i || r.once, t = n = !0; a.length; s = -1) for (e = a.shift(); ++s < o.length;) !1 === o[s].apply(e[0], e[1]) && r.stopOnFalse && (s = o.length, e = !1);
            r.memory || (e = !1), n = !1, i && (o = e ? [] : "")
        }, c = {
            add: function () {
                return o && (e && !n && (s = o.length - 1, a.push(e)), function n(e) {
                    k.each(e, function (e, t) {
                        k.isFunction(t) ? r.unique && c.has(t) || o.push(t) : t && t.length && "string" !== k.type(t) && n(t)
                    })
                }(arguments), e && !n && u()), this
            }, remove: function () {
                return k.each(arguments, function (e, t) {
                    for (var n; -1 < (n = k.inArray(t, o, n));) o.splice(n, 1), n <= s && s--
                }), this
            }, has: function (e) {
                return e ? -1 < k.inArray(e, o) : 0 < o.length
            }, empty: function () {
                return o && (o = []), this
            }, disable: function () {
                return i = a = [], o = e = "", this
            }, disabled: function () {
                return !o
            }, lock: function () {
                return i = a = [], e || n || (o = e = ""), this
            }, locked: function () {
                return !!i
            }, fireWith: function (e, t) {
                return i || (t = [e, (t = t || []).slice ? t.slice() : t], a.push(t), n || u()), this
            }, fire: function () {
                return c.fireWith(this, arguments), this
            }, fired: function () {
                return !!t
            }
        };
        return c
    }, k.extend({
        Deferred: function (e) {
            var o = [["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2], ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]],
                i = "pending", a = {
                    state: function () {
                        return i
                    }, always: function () {
                        return s.done(arguments).fail(arguments), this
                    }, catch: function (e) {
                        return a.then(null, e)
                    }, pipe: function () {
                        var i = arguments;
                        return k.Deferred(function (r) {
                            k.each(o, function (e, t) {
                                var n = k.isFunction(i[t[4]]) && i[t[4]];
                                s[t[1]](function () {
                                    var e = n && n.apply(this, arguments);
                                    e && k.isFunction(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    }, then: function (t, n, r) {
                        var u = 0;

                        function c(i, o, a, s) {
                            return function () {
                                var n = this, r = arguments, e = function () {
                                    var e, t;
                                    if (!(i < u)) {
                                        if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                        t = e && ("object" == typeof e || "function" == typeof e) && e.then, k.isFunction(t) ? s ? t.call(e, c(u, o, R, s), c(u, o, $, s)) : (u++, t.call(e, c(u, o, R, s), c(u, o, $, s), c(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                    }
                                }, t = s ? e : function () {
                                    try {
                                        e()
                                    } catch (e) {
                                        k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== $ && (n = void 0, r = [e]), o.rejectWith(n, r))
                                    }
                                };
                                i ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }

                        return k.Deferred(function (e) {
                            o[0][3].add(c(0, e, k.isFunction(r) ? r : R, e.notifyWith)), o[1][3].add(c(0, e, k.isFunction(t) ? t : R)), o[2][3].add(c(0, e, k.isFunction(n) ? n : $))
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? k.extend(e, a) : a
                    }
                }, s = {};
            return k.each(o, function (e, t) {
                var n = t[2], r = t[5];
                a[t[1]] = n.add, r && n.add(function () {
                    i = r
                }, o[3 - e][2].disable, o[0][2].lock), n.add(t[3].fire), s[t[0]] = function () {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        }, when: function (e) {
            var n = arguments.length, t = n, r = Array(t), i = s.call(arguments), o = k.Deferred(), a = function (t) {
                return function (e) {
                    r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
                }
            };
            if (n <= 1 && (M(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || k.isFunction(i[t] && i[t].then))) return o.then();
            for (; t--;) M(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var I = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    k.Deferred.exceptionHook = function (e, t) {
        C.console && C.console.warn && e && I.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, k.readyException = function (e) {
        C.setTimeout(function () {
            throw e
        })
    };
    var W = k.Deferred();

    function B() {
        E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), k.ready()
    }

    k.fn.ready = function (e) {
        return W.then(e).catch(function (e) {
            k.readyException(e)
        }), this
    }, k.extend({
        isReady: !1, readyWait: 1, ready: function (e) {
            (!0 === e ? --k.readyWait : k.isReady) || ((k.isReady = !0) !== e && 0 < --k.readyWait || W.resolveWith(E, [k]))
        }
    }), k.ready.then = W.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(k.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
    var _ = function (e, t, n, r, i, o, a) {
        var s = 0, u = e.length, c = null == n;
        if ("object" === k.type(n)) for (s in i = !0, n) _(e, t, s, n[s], !0, o, a); else if (void 0 !== r && (i = !0, k.isFunction(r) || (a = !0), c && (t = a ? (t.call(e, r), null) : (c = t, function (e, t, n) {
            return c.call(k(e), n)
        })), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : c ? t.call(e) : u ? t(e[0], n) : o
    }, z = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function U() {
        this.expando = k.expando + U.uid++
    }

    U.uid = 1, U.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, z(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        }, set: function (e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[k.camelCase(t)] = n; else for (r in t) i[k.camelCase(r)] = t[r];
            return i
        }, get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][k.camelCase(t)]
        }, access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        }, remove: function (e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(k.camelCase) : (t = k.camelCase(t)) in r ? [t] : t.match(P) || []).length;
                    for (; n--;) delete r[t[n]]
                }
                (void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        }, hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !k.isEmptyObject(t)
        }
    };
    var X = new U, V = new U, G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Y = /[A-Z]/g;

    function Q(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(Y, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
            try {
                n = function (e) {
                    return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : G.test(e) ? JSON.parse(e) : e)
                }(n)
            } catch (e) {
            }
            V.set(e, t, n)
        } else n = void 0;
        return n
    }

    k.extend({
        hasData: function (e) {
            return V.hasData(e) || X.hasData(e)
        }, data: function (e, t, n) {
            return V.access(e, t, n)
        }, removeData: function (e, t) {
            V.remove(e, t)
        }, _data: function (e, t, n) {
            return X.access(e, t, n)
        }, _removeData: function (e, t) {
            X.remove(e, t)
        }
    }), k.fn.extend({
        data: function (n, e) {
            var t, r, i, o = this[0], a = o && o.attributes;
            if (void 0 !== n) return "object" == typeof n ? this.each(function () {
                V.set(this, n)
            }) : _(this, function (e) {
                var t;
                if (o && void 0 === e) {
                    if (void 0 !== (t = V.get(o, n))) return t;
                    if (void 0 !== (t = Q(o, n))) return t
                } else this.each(function () {
                    V.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (i = V.get(o), 1 === o.nodeType && !X.get(o, "hasDataAttrs"))) {
                for (t = a.length; t--;) a[t] && (0 === (r = a[t].name).indexOf("data-") && (r = k.camelCase(r.slice(5)), Q(o, r, i[r])));
                X.set(o, "hasDataAttrs", !0)
            }
            return i
        }, removeData: function (e) {
            return this.each(function () {
                V.remove(this, e)
            })
        }
    }), k.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = X.get(e, t), n && (!r || Array.isArray(n) ? r = X.access(e, t, k.makeArray(n)) : r.push(n)), r || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = k.queue(e, t), r = n.length, i = n.shift(), o = k._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
                k.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return X.get(e, n) || X.access(e, n, {
                empty: k.Callbacks("once memory").add(function () {
                    X.remove(e, [t + "queue", n])
                })
            })
        }
    }), k.fn.extend({
        queue: function (t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function () {
                var e = k.queue(this, t, n);
                k._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                k.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, r = 1, i = k.Deferred(), o = this, a = this.length, s = function () {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) (n = X.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var J = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, K = new RegExp("^(?:([+-])=|)(" + J + ")([a-z%]*)$", "i"),
        Z = ["Top", "Right", "Bottom", "Left"], ee = function (e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && k.contains(e.ownerDocument, e) && "none" === k.css(e, "display")
        }, te = function (e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
            return i
        };

    function ne(e, t, n, r) {
        var i, o = 1, a = 20, s = r ? function () {
                return r.cur()
            } : function () {
                return k.css(e, t, "")
            }, u = s(), c = n && n[3] || (k.cssNumber[t] ? "" : "px"),
            l = (k.cssNumber[t] || "px" !== c && +u) && K.exec(k.css(e, t));
        if (l && l[3] !== c) for (c = c || l[3], n = n || [], l = +u || 1; l /= o = o || ".5", k.style(e, t, l + c), o !== (o = s() / u) && 1 !== o && --a;) ;
        return n && (l = +l || +u || 0, i = n[1] ? l + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, r.start = l, r.end = i)), i
    }

    var re = {};

    function ie(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++) (r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = X.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ee(r) && (i[o] = (f = c = u = void 0, c = (s = r).ownerDocument, l = s.nodeName, (f = re[l]) || (u = c.body.appendChild(c.createElement(l)), f = k.css(u, "display"), u.parentNode.removeChild(u), "none" === f && (f = "block"), re[l] = f)))) : "none" !== n && (i[o] = "none", X.set(r, "display", n)));
        var s, u, c, l, f;
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e
    }

    k.fn.extend({
        show: function () {
            return ie(this, !0)
        }, hide: function () {
            return ie(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                ee(this) ? k(this).show() : k(this).hide()
            })
        }
    });
    var oe = /^(?:checkbox|radio)$/i, ae = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, se = /^$|\/(?:java|ecma)script/i, ue = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function ce(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && j(e, t) ? k.merge([e], n) : n
    }

    function le(e, t) {
        for (var n = 0, r = e.length; n < r; n++) X.set(e[n], "globalEval", !t || X.get(t[n], "globalEval"))
    }

    ue.optgroup = ue.option, ue.tbody = ue.tfoot = ue.colgroup = ue.caption = ue.thead, ue.th = ue.td;
    var fe, pe, de = /<|&#?\w+;/;

    function he(e, t, n, r, i) {
        for (var o, a, s, u, c, l, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ("object" === k.type(o)) k.merge(p, o.nodeType ? [o] : o); else if (de.test(o)) {
            for (a = a || f.appendChild(t.createElement("div")), s = (ae.exec(o) || ["", ""])[1].toLowerCase(), u = ue[s] || ue._default, a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2], l = u[0]; l--;) a = a.lastChild;
            k.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        for (f.textContent = "", d = 0; o = p[d++];) if (r && -1 < k.inArray(o, r)) i && i.push(o); else if (c = k.contains(o.ownerDocument, o), a = ce(f.appendChild(o), "script"), c && le(a), n) for (l = 0; o = a[l++];) se.test(o.type || "") && n.push(o);
        return f
    }

    fe = E.createDocumentFragment().appendChild(E.createElement("div")), (pe = E.createElement("input")).setAttribute("type", "radio"), pe.setAttribute("checked", "checked"), pe.setAttribute("name", "t"), fe.appendChild(pe), v.checkClone = fe.cloneNode(!0).cloneNode(!0).lastChild.checked, fe.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!fe.cloneNode(!0).lastChild.defaultValue;
    var ge = E.documentElement, ve = /^key/, me = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ye = /^([^.]*)(?:\.(.+)|)/;

    function xe() {
        return !0
    }

    function be() {
        return !1
    }

    function we() {
        try {
            return E.activeElement
        } catch (e) {
        }
    }

    function Te(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in"string" != typeof n && (r = r || n, n = void 0), t) Te(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = be; else if (!i) return e;
        return 1 === o && (a = i, (i = function (e) {
            return k().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = k.guid++)), e.each(function () {
            k.event.add(this, t, i, r, n)
        })
    }

    k.event = {
        global: {}, add: function (t, e, n, r, i) {
            var o, a, s, u, c, l, f, p, d, h, g, v = X.get(t);
            if (v) for (n.handler && (n = (o = n).handler, i = o.selector), i && k.find.matchesSelector(ge, i), n.guid || (n.guid = k.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function (e) {
                return void 0 !== k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0
            }), c = (e = (e || "").match(P) || [""]).length; c--;) d = g = (s = ye.exec(e[c]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = k.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = k.event.special[d] || {}, l = k.extend({
                type: d,
                origType: g,
                data: r,
                handler: n,
                guid: n.guid,
                selector: i,
                needsContext: i && k.expr.match.needsContext.test(i),
                namespace: h.join(".")
            }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, l), l.handler.guid || (l.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, l) : p.push(l), k.event.global[d] = !0)
        }, remove: function (e, t, n, r, i) {
            var o, a, s, u, c, l, f, p, d, h, g, v = X.hasData(e) && X.get(e);
            if (v && (u = v.events)) {
                for (c = (t = (t || "").match(P) || [""]).length; c--;) if (d = g = (s = ye.exec(t[c]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                    for (f = k.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) l = p[o], !i && g !== l.origType || n && n.guid !== l.guid || s && !s.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (p.splice(o, 1), l.selector && p.delegateCount--, f.remove && f.remove.call(e, l));
                    a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || k.removeEvent(e, d, v.handle), delete u[d])
                } else for (d in u) k.event.remove(e, d + t[c], n, r, !0);
                k.isEmptyObject(u) && X.remove(e, "handle events")
            }
        }, dispatch: function (e) {
            var t, n, r, i, o, a, s = k.event.fix(e), u = new Array(arguments.length),
                c = (X.get(this, "events") || {})[s.type] || [], l = k.event.special[s.type] || {};
            for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
            if (s.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, s)) {
                for (a = k.event.handlers.call(this, s, c), t = 0; (i = a[t++]) && !s.isPropagationStopped();) for (s.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((k.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, s), s.result
            }
        }, handlers: function (e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, c = e.target;
            if (u && c.nodeType && !("click" === e.type && 1 <= e.button)) for (; c !== this; c = c.parentNode || this) if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < k(i, this).index(c) : k.find(i, this, null, [c]).length), a[i] && o.push(r);
                o.length && s.push({elem: c, handlers: o})
            }
            return c = this, u < t.length && s.push({elem: c, handlers: t.slice(u)}), s
        }, addProp: function (t, e) {
            Object.defineProperty(k.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: k.isFunction(e) ? function () {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function (e) {
                    Object.defineProperty(this, t, {enumerable: !0, configurable: !0, writable: !0, value: e})
                }
            })
        }, fix: function (e) {
            return e[k.expando] ? e : new k.Event(e)
        }, special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== we() && this.focus) return this.focus(), !1
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === we() && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && j(this, "input")) return this.click(), !1
                }, _default: function (e) {
                    return j(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, k.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, k.Event = function (e, t) {
        return this instanceof k.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? xe : be, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && k.extend(this, t), this.timeStamp = e && e.timeStamp || k.now(), void (this[k.expando] = !0)) : new k.Event(e, t)
    }, k.Event.prototype = {
        constructor: k.Event,
        isDefaultPrevented: be,
        isPropagationStopped: be,
        isImmediatePropagationStopped: be,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = xe, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = xe, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = xe, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, k.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && ve.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && me.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, k.event.addProp), k.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, i) {
        k.event.special[e] = {
            delegateType: i, bindType: i, handle: function (e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || k.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), k.fn.extend({
        on: function (e, t, n, r) {
            return Te(this, e, t, n, r)
        }, one: function (e, t, n, r) {
            return Te(this, e, t, n, r, 1)
        }, off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = be), this.each(function () {
                k.event.remove(this, e, n, t)
            });
            for (i in e) this.off(i, t, e[i]);
            return this
        }
    });
    var Ce = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ee = /<script|<style|<link/i, ke = /checked\s*(?:[^=]|=\s*.checked.)/i, Se = /^true\/(.*)/,
        je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Ne(e, t) {
        return j(e, "table") && j(11 !== t.nodeType ? t : t.firstChild, "tr") && k(">tbody", e)[0] || e
    }

    function De(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Ae(e) {
        var t = Se.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function qe(e, t) {
        var n, r, i, o, a, s, u, c;
        if (1 === t.nodeType) {
            if (X.hasData(e) && (o = X.access(e), a = X.set(t, o), c = o.events)) for (i in delete a.handle, a.events = {}, c) for (n = 0, r = c[i].length; n < r; n++) k.event.add(t, i, c[i][n]);
            V.hasData(e) && (s = V.access(e), u = k.extend({}, s), V.set(t, u))
        }
    }

    function Le(n, r, i, o) {
        r = g.apply([], r);
        var e, t, a, s, u, c, l = 0, f = n.length, p = f - 1, d = r[0], h = k.isFunction(d);
        if (h || 1 < f && "string" == typeof d && !v.checkClone && ke.test(d)) return n.each(function (e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), Le(t, r, i, o)
        });
        if (f && (t = (e = he(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = k.map(ce(e, "script"), De)).length; l < f; l++) u = e, l !== p && (u = k.clone(u, !0, !0), s && k.merge(a, ce(u, "script"))), i.call(n[l], u, l);
            if (s) for (c = a[a.length - 1].ownerDocument, k.map(a, Ae), l = 0; l < s; l++) u = a[l], se.test(u.type || "") && !X.access(u, "globalEval") && k.contains(c, u) && (u.src ? k._evalUrl && k._evalUrl(u.src) : m(u.textContent.replace(je, ""), c))
        }
        return n
    }

    function He(e, t, n) {
        for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || k.cleanData(ce(r)), r.parentNode && (n && k.contains(r.ownerDocument, r) && le(ce(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    k.extend({
        htmlPrefilter: function (e) {
            return e.replace(Ce, "<$1></$2>")
        }, clone: function (e, t, n) {
            var r, i, o, a, s, u, c, l = e.cloneNode(!0), f = k.contains(e.ownerDocument, e);
            if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e))) for (a = ce(l), r = 0, i = (o = ce(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (c = u.nodeName.toLowerCase()) && oe.test(s.type) ? u.checked = s.checked : "input" !== c && "textarea" !== c || (u.defaultValue = s.defaultValue);
            if (t) if (n) for (o = o || ce(e), a = a || ce(l), r = 0, i = o.length; r < i; r++) qe(o[r], a[r]); else qe(e, l);
            return 0 < (a = ce(l, "script")).length && le(a, !f && ce(e, "script")), l
        }, cleanData: function (e) {
            for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++) if (z(n)) {
                if (t = n[X.expando]) {
                    if (t.events) for (r in t.events) i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
                    n[X.expando] = void 0
                }
                n[V.expando] && (n[V.expando] = void 0)
            }
        }
    }), k.fn.extend({
        detach: function (e) {
            return He(this, e, !0)
        }, remove: function (e) {
            return He(this, e)
        }, text: function (e) {
            return _(this, function (e) {
                return void 0 === e ? k.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        }, append: function () {
            return Le(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ne(this, e).appendChild(e)
            })
        }, prepend: function () {
            return Le(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Ne(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return Le(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return Le(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (k.cleanData(ce(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return k.clone(this, e, t)
            })
        }, html: function (e) {
            return _(this, function (e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ee.test(e) && !ue[(ae.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = k.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (k.cleanData(ce(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var n = [];
            return Le(this, arguments, function (e) {
                var t = this.parentNode;
                k.inArray(this, n) < 0 && (k.cleanData(ce(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), k.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, a) {
        k.fn[e] = function (e) {
            for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), k(r[o])[a](t), u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Fe = /^margin/, Oe = new RegExp("^(" + J + ")(?!px)[a-z%]+$", "i"), Pe = function (e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = C), t.getComputedStyle(e)
    };

    function Re(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Pe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || k.contains(e.ownerDocument, e) || (a = k.style(e, t)), !v.pixelMarginRight() && Oe.test(a) && Fe.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function $e(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    !function () {
        function e() {
            if (a) {
                a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", ge.appendChild(o);
                var e = C.getComputedStyle(a);
                t = "1%" !== e.top, i = "2px" === e.marginLeft, n = "4px" === e.width, a.style.marginRight = "50%", r = "4px" === e.marginRight, ge.removeChild(o), a = null
            }
        }

        var t, n, r, i, o = E.createElement("div"), a = E.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(a), k.extend(v, {
            pixelPosition: function () {
                return e(), t
            }, boxSizingReliable: function () {
                return e(), n
            }, pixelMarginRight: function () {
                return e(), r
            }, reliableMarginLeft: function () {
                return e(), i
            }
        }))
    }();
    var Me = /^(none|table(?!-c[ea]).+)/, Ie = /^--/,
        We = {position: "absolute", visibility: "hidden", display: "block"},
        Be = {letterSpacing: "0", fontWeight: "400"}, _e = ["Webkit", "Moz", "ms"], ze = E.createElement("div").style;

    function Ue(e) {
        var t = k.cssProps[e];
        return t || (t = k.cssProps[e] = function (e) {
            if (e in ze) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = _e.length; n--;) if ((e = _e[n] + t) in ze) return e
        }(e) || e), t
    }

    function Xe(e, t, n) {
        var r = K.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Ve(e, t, n, r, i) {
        var o, a = 0;
        for (o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2) "margin" === n && (a += k.css(e, n + Z[o], !0, i)), r ? ("content" === n && (a -= k.css(e, "padding" + Z[o], !0, i)), "margin" !== n && (a -= k.css(e, "border" + Z[o] + "Width", !0, i))) : (a += k.css(e, "padding" + Z[o], !0, i), "padding" !== n && (a += k.css(e, "border" + Z[o] + "Width", !0, i)));
        return a
    }

    function Ge(e, t, n) {
        var r, i = Pe(e), o = Re(e, t, i), a = "border-box" === k.css(e, "boxSizing", !1, i);
        return Oe.test(o) ? o : (r = a && (v.boxSizingReliable() || o === e.style[t]), "auto" === o && (o = e["offset" + t[0].toUpperCase() + t.slice(1)]), (o = parseFloat(o) || 0) + Ve(e, t, n || (a ? "border" : "content"), r, i) + "px")
    }

    function Ye(e, t, n, r, i) {
        return new Ye.prototype.init(e, t, n, r, i)
    }

    k.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Re(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {float: "cssFloat"},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = k.camelCase(t), u = Ie.test(t), c = e.style;
                return u || (t = Ue(s)), a = k.cssHooks[t] || k.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : c[t] : ("string" === (o = typeof n) && (i = K.exec(n)) && i[1] && (n = ne(e, t, i), o = "number"), void (null != n && n == n && ("number" === o && (n += i && i[3] || (k.cssNumber[s] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? c.setProperty(t, n) : c[t] = n))))
            }
        },
        css: function (e, t, n, r) {
            var i, o, a, s = k.camelCase(t);
            return Ie.test(t) || (t = Ue(s)), (a = k.cssHooks[t] || k.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Re(e, t, r)), "normal" === i && t in Be && (i = Be[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), k.each(["height", "width"], function (e, a) {
        k.cssHooks[a] = {
            get: function (e, t, n) {
                if (t) return !Me.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ge(e, a, n) : te(e, We, function () {
                    return Ge(e, a, n)
                })
            }, set: function (e, t, n) {
                var r, i = n && Pe(e), o = n && Ve(e, a, n, "border-box" === k.css(e, "boxSizing", !1, i), i);
                return o && (r = K.exec(t)) && "px" !== (r[3] || "px") && (e.style[a] = t, t = k.css(e, a)), Xe(0, t, o)
            }
        }
    }), k.cssHooks.marginLeft = $e(v.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(Re(e, "marginLeft")) || e.getBoundingClientRect().left - te(e, {marginLeft: 0}, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), k.each({margin: "", padding: "", border: "Width"}, function (i, o) {
        k.cssHooks[i + o] = {
            expand: function (e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + Z[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, Fe.test(i) || (k.cssHooks[i + o].set = Xe)
    }), k.fn.extend({
        css: function (e, t) {
            return _(this, function (e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = Pe(e), i = t.length; a < i; a++) o[t[a]] = k.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? k.style(e, t, n) : k.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((k.Tween = Ye).prototype = {
        constructor: Ye, init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || k.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (k.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = Ye.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ye.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = Ye.propHooks[this.prop];
            return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ye.propHooks._default.set(this), this
        }
    }).init.prototype = Ye.prototype, (Ye.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            }, set: function (e) {
                k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[k.cssProps[e.prop]] && !k.cssHooks[e.prop] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = Ye.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, k.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
    }, k.fx = Ye.prototype.init, k.fx.step = {};
    var Qe, Je, Ke, Ze, et = /^(?:toggle|show|hide)$/, tt = /queueHooks$/;

    function nt() {
        Je && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(nt) : C.setTimeout(nt, k.fx.interval), k.fx.tick())
    }

    function rt() {
        return C.setTimeout(function () {
            Qe = void 0
        }), Qe = k.now()
    }

    function it(e, t) {
        var n, r = 0, i = {height: e};
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = Z[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function ot(e, t, n) {
        for (var r, i = (at.tweeners[t] || []).concat(at.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r
    }

    function at(o, e, t) {
        var n, a, r = 0, i = at.prefilters.length, s = k.Deferred().always(function () {
            delete u.elem
        }), u = function () {
            if (a) return !1;
            for (var e = Qe || rt(), t = Math.max(0, c.startTime + c.duration - e), n = 1 - (t / c.duration || 0), r = 0, i = c.tweens.length; r < i; r++) c.tweens[r].run(n);
            return s.notifyWith(o, [c, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [c, 1, 0]), s.resolveWith(o, [c]), !1)
        }, c = s.promise({
            elem: o,
            props: k.extend({}, e),
            opts: k.extend(!0, {specialEasing: {}, easing: k.easing._default}, t),
            originalProperties: e,
            originalOptions: t,
            startTime: Qe || rt(),
            duration: t.duration,
            tweens: [],
            createTween: function (e, t) {
                var n = k.Tween(o, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                return c.tweens.push(n), n
            },
            stop: function (e) {
                var t = 0, n = e ? c.tweens.length : 0;
                if (a) return this;
                for (a = !0; t < n; t++) c.tweens[t].run(1);
                return e ? (s.notifyWith(o, [c, 1, 0]), s.resolveWith(o, [c, e])) : s.rejectWith(o, [c, e]), this
            }
        }), l = c.props;
        for (function (e, t) {
            var n, r, i, o, a;
            for (n in e) if (i = t[r = k.camelCase(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = k.cssHooks[r]) && "expand" in a) for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i); else t[r] = i
        }(l, c.opts.specialEasing); r < i; r++) if (n = at.prefilters[r].call(c, o, l, c.opts)) return k.isFunction(n.stop) && (k._queueHooks(c.elem, c.opts.queue).stop = k.proxy(n.stop, n)), n;
        return k.map(l, ot, c), k.isFunction(c.opts.start) && c.opts.start.call(o, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), k.fx.timer(k.extend(u, {
            elem: o,
            anim: c,
            queue: c.opts.queue
        })), c
    }

    k.Animation = k.extend(at, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return ne(n.elem, e, K.exec(t), n), n
            }]
        }, tweener: function (e, t) {
            for (var n, r = 0, i = (e = k.isFunction(e) ? (t = e, ["*"]) : e.match(P)).length; r < i; r++) n = e[r], at.tweeners[n] = at.tweeners[n] || [], at.tweeners[n].unshift(t)
        }, prefilters: [function (e, t, n) {
            var r, i, o, a, s, u, c, l, f = "width" in t || "height" in t, p = this, d = {}, h = e.style,
                g = e.nodeType && ee(e), v = X.get(e, "fxshow");
            for (r in n.queue || (null == (a = k._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                a.unqueued || s()
            }), a.unqueued++, p.always(function () {
                p.always(function () {
                    a.unqueued--, k.queue(e, "fx").length || a.empty.fire()
                })
            })), t) if (i = t[r], et.test(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                    if ("show" !== i || !v || void 0 === v[r]) continue;
                    g = !0
                }
                d[r] = v && v[r] || k.style(e, r)
            }
            if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = v && v.display) && (c = X.get(e, "display")), "none" === (l = k.css(e, "display")) && (c ? l = c : (ie([e], !0), c = e.style.display || c, l = k.css(e, "display"), ie([e]))), ("inline" === l || "inline-block" === l && null != c) && "none" === k.css(e, "float") && (u || (p.done(function () {
                h.display = c
            }), null == c && (l = h.display, c = "none" === l ? "" : l)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = X.access(e, "fxshow", {display: c}), o && (v.hidden = !g), g && ie([e], !0), p.done(function () {
                for (r in g || ie([e]), X.remove(e, "fxshow"), d) k.style(e, r, d[r])
            })), u = ot(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
        }], prefilter: function (e, t) {
            t ? at.prefilters.unshift(e) : at.prefilters.push(e)
        }
    }), k.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? k.extend({}, e) : {
            complete: n || !n && t || k.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !k.isFunction(t) && t
        };
        return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            k.isFunction(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue)
        }, r
    }, k.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(ee).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (t, e, n, r) {
            var i = k.isEmptyObject(t), o = k.speed(e, n, r), a = function () {
                var e = at(this, k.extend({}, t), o);
                (i || X.get(this, "finish")) && e.stop(!0)
            };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        }, stop: function (i, e, o) {
            var a = function (e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function () {
                var e = !0, t = null != i && i + "queueHooks", n = k.timers, r = X.get(this);
                if (t) r[t] && r[t].stop && a(r[t]); else for (t in r) r[t] && r[t].stop && tt.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || k.dequeue(this, i)
            })
        }, finish: function (a) {
            return !1 !== a && (a = a || "fx"), this.each(function () {
                var e, t = X.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = k.timers, o = n ? n.length : 0;
                for (t.finish = !0, k.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), k.each(["toggle", "show", "hide"], function (e, r) {
        var i = k.fn[r];
        k.fn[r] = function (e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(it(r, !0), e, t, n)
        }
    }), k.each({
        slideDown: it("show"),
        slideUp: it("hide"),
        slideToggle: it("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, r) {
        k.fn[e] = function (e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), k.timers = [], k.fx.tick = function () {
        var e, t = 0, n = k.timers;
        for (Qe = k.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || k.fx.stop(), Qe = void 0
    }, k.fx.timer = function (e) {
        k.timers.push(e), k.fx.start()
    }, k.fx.interval = 13, k.fx.start = function () {
        Je || (Je = !0, nt())
    }, k.fx.stop = function () {
        Je = null
    }, k.fx.speeds = {slow: 600, fast: 200, _default: 400}, k.fn.delay = function (r, e) {
        return r = k.fx && k.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function () {
                C.clearTimeout(n)
            }
        })
    }, Ke = E.createElement("input"), Ze = E.createElement("select").appendChild(E.createElement("option")), Ke.type = "checkbox", v.checkOn = "" !== Ke.value, v.optSelected = Ze.selected, (Ke = E.createElement("input")).value = "t", Ke.type = "radio", v.radioValue = "t" === Ke.value;
    var st, ut = k.expr.attrHandle;
    k.fn.extend({
        attr: function (e, t) {
            return _(this, k.attr, e, t, 1 < arguments.length)
        }, removeAttr: function (e) {
            return this.each(function () {
                k.removeAttr(this, e)
            })
        }
    }), k.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? st : void 0)), void 0 !== n ? null === n ? void k.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!v.radioValue && "radio" === t && j(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var n, r = 0, i = t && t.match(P);
            if (i && 1 === e.nodeType) for (; n = i[r++];) e.removeAttribute(n)
        }
    }), st = {
        set: function (e, t, n) {
            return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var a = ut[t] || k.find.attr;
        ut[t] = function (e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = ut[o], ut[o] = r, r = null != a(e, t, n) ? o : null, ut[o] = i), r
        }
    });
    var ct = /^(?:input|select|textarea|button)$/i, lt = /^(?:a|area)$/i;

    function ft(e) {
        return (e.match(P) || []).join(" ")
    }

    function pt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    k.fn.extend({
        prop: function (e, t) {
            return _(this, k.prop, e, t, 1 < arguments.length)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[k.propFix[e] || e]
            })
        }
    }), k.extend({
        prop: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t, i = k.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = k.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ct.test(e.nodeName) || lt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {for: "htmlFor", class: "className"}
    }), v.optSelected || (k.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }, set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        k.propFix[this.toLowerCase()] = this
    }), k.fn.extend({
        addClass: function (t) {
            var e, n, r, i, o, a, s, u = 0;
            if (k.isFunction(t)) return this.each(function (e) {
                k(this).addClass(t.call(this, e, pt(this)))
            });
            if ("string" == typeof t && t) for (e = t.match(P) || []; n = this[u++];) if (i = pt(n), r = 1 === n.nodeType && " " + ft(i) + " ") {
                for (a = 0; o = e[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                i !== (s = ft(r)) && n.setAttribute("class", s)
            }
            return this
        }, removeClass: function (t) {
            var e, n, r, i, o, a, s, u = 0;
            if (k.isFunction(t)) return this.each(function (e) {
                k(this).removeClass(t.call(this, e, pt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t) for (e = t.match(P) || []; n = this[u++];) if (i = pt(n), r = 1 === n.nodeType && " " + ft(i) + " ") {
                for (a = 0; o = e[a++];) for (; -1 < r.indexOf(" " + o + " ");) r = r.replace(" " + o + " ", " ");
                i !== (s = ft(r)) && n.setAttribute("class", s)
            }
            return this
        }, toggleClass: function (i, t) {
            var o = typeof i;
            return "boolean" == typeof t && "string" == o ? t ? this.addClass(i) : this.removeClass(i) : k.isFunction(i) ? this.each(function (e) {
                k(this).toggleClass(i.call(this, e, pt(this), t), t)
            }) : this.each(function () {
                var e, t, n, r;
                if ("string" == o) for (t = 0, n = k(this), r = i.match(P) || []; e = r[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e); else void 0 !== i && "boolean" != o || ((e = pt(this)) && X.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : X.get(this, "__className__") || ""))
            })
        }, hasClass: function (e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];) if (1 === n.nodeType && -1 < (" " + ft(pt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var dt = /\r/g;
    k.fn.extend({
        val: function (n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = k.isFunction(n), this.each(function (e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, k(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = k.map(t, function (e) {
                    return null == e ? "" : e + ""
                })), (r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(dt, "") : null == e ? "" : e : void 0
        }
    }), k.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = k.find.attr(e, "value");
                    return null != t ? t : ft(k.text(e))
                }
            }, select: {
                get: function (e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !j(n.parentNode, "optgroup"))) {
                        if (t = k(n).val(), a) return t;
                        s.push(t)
                    }
                    return s
                }, set: function (e, t) {
                    for (var n, r, i = e.options, o = k.makeArray(t), a = i.length; a--;) ((r = i[a]).selected = -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), k.each(["radio", "checkbox"], function () {
        k.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = -1 < k.inArray(k(e).val(), t)
            }
        }, v.checkOn || (k.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var ht = /^(?:focusinfocus|focusoutblur)$/;
    k.extend(k.event, {
        trigger: function (e, t, n, r) {
            var i, o, a, s, u, c, l, f = [n || E], p = h.call(e, "type") ? e.type : e,
                d = h.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !ht.test(p + k.event.triggered) && (-1 < p.indexOf(".") && (p = (d = p.split(".")).shift(), d.sort()), u = p.indexOf(":") < 0 && "on" + p, (e = e[k.expando] ? e : new k.Event(p, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = d.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : k.makeArray(t, [e]), l = k.event.special[p] || {}, r || !l.trigger || !1 !== l.trigger.apply(n, t))) {
                if (!r && !l.noBubble && !k.isWindow(n)) {
                    for (s = l.delegateType || p, ht.test(s + p) || (o = o.parentNode); o; o = o.parentNode) f.push(o), a = o;
                    a === (n.ownerDocument || E) && f.push(a.defaultView || a.parentWindow || C)
                }
                for (i = 0; (o = f[i++]) && !e.isPropagationStopped();) e.type = 1 < i ? s : l.bindType || p, (c = (X.get(o, "events") || {})[e.type] && X.get(o, "handle")) && c.apply(o, t), (c = u && o[u]) && c.apply && z(o) && (e.result = c.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = p, r || e.isDefaultPrevented() || l._default && !1 !== l._default.apply(f.pop(), t) || !z(n) || u && k.isFunction(n[p]) && !k.isWindow(n) && ((a = n[u]) && (n[u] = null), n[k.event.triggered = p](), k.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        }, simulate: function (e, t, n) {
            var r = k.extend(new k.Event, n, {type: e, isSimulated: !0});
            k.event.trigger(r, null, t)
        }
    }), k.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                k.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return k.event.trigger(e, t, n, !0)
        }
    }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
        k.fn[n] = function (e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), k.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), v.focusin = "onfocusin" in C, v.focusin || k.each({focus: "focusin", blur: "focusout"}, function (n, r) {
        var i = function (e) {
            k.event.simulate(r, e.target, k.event.fix(e))
        };
        k.event.special[r] = {
            setup: function () {
                var e = this.ownerDocument || this, t = X.access(e, r);
                t || e.addEventListener(n, i, !0), X.access(e, r, (t || 0) + 1)
            }, teardown: function () {
                var e = this.ownerDocument || this, t = X.access(e, r) - 1;
                t ? X.access(e, r, t) : (e.removeEventListener(n, i, !0), X.remove(e, r))
            }
        }
    });
    var gt = C.location, vt = k.now(), mt = /\?/;
    k.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e), t
    };
    var yt = /\[\]$/, xt = /\r?\n/g, bt = /^(?:submit|button|image|reset|file)$/i,
        wt = /^(?:input|select|textarea|keygen)/i;

    function Tt(n, e, r, i) {
        var t;
        if (Array.isArray(e)) k.each(e, function (e, t) {
            r || yt.test(n) ? i(n, t) : Tt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        }); else if (r || "object" !== k.type(e)) i(n, e); else for (t in e) Tt(n + "[" + t + "]", e[t], r, i)
    }

    k.param = function (e, t) {
        var n, r = [], i = function (e, t) {
            var n = k.isFunction(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function () {
            i(this.name, this.value)
        }); else for (n in e) Tt(n, e[n], t, i);
        return r.join("&")
    }, k.fn.extend({
        serialize: function () {
            return k.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = k.prop(this, "elements");
                return e ? k.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !k(this).is(":disabled") && wt.test(this.nodeName) && !bt.test(e) && (this.checked || !oe.test(e))
            }).map(function (e, t) {
                var n = k(this).val();
                return null == n ? null : Array.isArray(n) ? k.map(n, function (e) {
                    return {name: t.name, value: e.replace(xt, "\r\n")}
                }) : {name: t.name, value: n.replace(xt, "\r\n")}
            }).get()
        }
    });
    var Ct = /%20/g, Et = /#.*$/, kt = /([?&])_=[^&]*/, St = /^(.*?):[ \t]*([^\r\n]*)$/gm, jt = /^(?:GET|HEAD)$/,
        Nt = /^\/\//, Dt = {}, At = {}, qt = "*/".concat("*"), Lt = E.createElement("a");

    function Ht(o) {
        return function (e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0, i = e.toLowerCase().match(P) || [];
            if (k.isFunction(t)) for (; n = i[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function Ft(t, i, o, a) {
        var s = {}, u = t === At;

        function c(e) {
            var r;
            return s[e] = !0, k.each(t[e] || [], function (e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), c(n), !1)
            }), r
        }

        return c(i.dataTypes[0]) || !s["*"] && c("*")
    }

    function Ot(e, t) {
        var n, r, i = k.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && k.extend(!0, e, r), e
    }

    Lt.href = gt.href, k.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: gt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(gt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": qt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": k.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? Ot(Ot(e, k.ajaxSettings), t) : Ot(k.ajaxSettings, e)
        },
        ajaxPrefilter: Ht(Dt),
        ajaxTransport: Ht(At),
        ajax: function (e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var l, f, p, n, d, r, h, g, i, o, v = k.ajaxSetup({}, t), m = v.context || v,
                y = v.context && (m.nodeType || m.jquery) ? k(m) : k.event, x = k.Deferred(),
                b = k.Callbacks("once memory"), w = v.statusCode || {}, a = {}, s = {}, u = "canceled", T = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (h) {
                            if (!n) for (n = {}; t = St.exec(p);) n[t[1].toLowerCase()] = t[2];
                            t = n[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    }, getAllResponseHeaders: function () {
                        return h ? p : null
                    }, setRequestHeader: function (e, t) {
                        return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                    }, overrideMimeType: function (e) {
                        return null == h && (v.mimeType = e), this
                    }, statusCode: function (e) {
                        var t;
                        if (e) if (h) T.always(e[T.status]); else for (t in e) w[t] = [w[t], e[t]];
                        return this
                    }, abort: function (e) {
                        var t = e || u;
                        return l && l.abort(t), c(0, t), this
                    }
                };
            if (x.promise(T), v.url = ((e || v.url || gt.href) + "").replace(Nt, gt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = v.url, r.href = r.href, v.crossDomain = Lt.protocol + "//" + Lt.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = k.param(v.data, v.traditional)), Ft(Dt, v, t, T), h) return T;
            for (i in(g = k.event && v.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !jt.test(v.type), f = v.url.replace(Et, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Ct, "+")) : (o = v.url.slice(f.length), v.data && (f += (mt.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(kt, "$1"), o = (mt.test(f) ? "&" : "?") + "_=" + vt++ + o), v.url = f + o), v.ifModified && (k.lastModified[f] && T.setRequestHeader("If-Modified-Since", k.lastModified[f]), k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + qt + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(m, T, v) || h)) return T.abort();
            if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), l = Ft(At, v, t, T)) {
                if (T.readyState = 1, g && y.trigger("ajaxSend", [T, v]), h) return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function () {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1, l.send(a, c)
                } catch (e) {
                    if (h) throw e;
                    c(-1, e)
                }
            } else c(-1, "No Transport");

            function c(e, t, n, r) {
                var i, o, a, s, u, c = t;
                h || (h = !0, d && C.clearTimeout(d), l = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
                    for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r) for (i in s) if (s[i] && s[i].test(r)) {
                        u.unshift(i);
                        break
                    }
                    if (u[0] in n) o = u[0]; else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(v, T, n)), s = function (e, t, n, r) {
                    var i, o, a, s, u, c = {}, l = e.dataTypes.slice();
                    if (l[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
                    for (o = l.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = l.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
                        if (!(a = c[u + " " + o] || c["* " + o])) for (i in c) if ((s = i.split(" "))[1] === o && (a = c[u + " " + s[0]] || c["* " + s[0]])) {
                            !0 === a ? a = c[i] : !0 !== c[i] && (o = s[0], l.unshift(s[1]));
                            break
                        }
                        if (!0 !== a) if (a && e.throws) t = a(t); else try {
                            t = a(t)
                        } catch (e) {
                            return {state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o}
                        }
                    }
                    return {state: "success", data: t}
                }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (k.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (k.etag[f] = u)), 204 === e || "HEAD" === v.type ? c = "nocontent" : 304 === e ? c = "notmodified" : (c = s.state, o = s.data, i = !(a = s.error))) : (a = c, !e && c || (c = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || c) + "", i ? x.resolveWith(m, [o, c, T]) : x.rejectWith(m, [T, c, a]), T.statusCode(w), w = void 0, g && y.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(m, [T, c]), g && (y.trigger("ajaxComplete", [T, v]), --k.active || k.event.trigger("ajaxStop")))
            }

            return T
        },
        getJSON: function (e, t, n) {
            return k.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return k.get(e, void 0, t, "script")
        }
    }), k.each(["get", "post"], function (e, i) {
        k[i] = function (e, t, n, r) {
            return k.isFunction(t) && (r = r || n, n = t, t = void 0), k.ajax(k.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, k.isPlainObject(e) && e))
        }
    }), k._evalUrl = function (e) {
        return k.ajax({url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
    }, k.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (k.isFunction(e) && (e = e.call(this[0])), t = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        }, wrapInner: function (n) {
            return k.isFunction(n) ? this.each(function (e) {
                k(this).wrapInner(n.call(this, e))
            }) : this.each(function () {
                var e = k(this), t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        }, wrap: function (t) {
            var n = k.isFunction(t);
            return this.each(function (e) {
                k(this).wrapAll(n ? t.call(this, e) : t)
            })
        }, unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                k(this).replaceWith(this.childNodes)
            }), this
        }
    }), k.expr.pseudos.hidden = function (e) {
        return !k.expr.pseudos.visible(e)
    }, k.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, k.ajaxSettings.xhr = function () {
        try {
            return new C.XMLHttpRequest
        } catch (e) {
        }
    };
    var Pt = {0: 200, 1223: 204}, Rt = k.ajaxSettings.xhr();
    v.cors = !!Rt && "withCredentials" in Rt, v.ajax = Rt = !!Rt, k.ajaxTransport(function (i) {
        var o, a;
        if (v.cors || Rt && !i.crossDomain) return {
            send: function (e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function (e) {
                    return function () {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Pt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {binary: r.response} : {text: r.responseText}, r.getAllResponseHeaders()))
                    }
                }, r.onload = o(), a = r.onerror = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
                    4 === r.readyState && C.setTimeout(function () {
                        o && a()
                    })
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (o) throw e
                }
            }, abort: function () {
                o && o()
            }
        }
    }), k.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), k.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (e) {
                return k.globalEval(e), e
            }
        }
    }), k.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), k.ajaxTransport("script", function (n) {
        var r, i;
        if (n.crossDomain) return {
            send: function (e, t) {
                r = k("<script>").prop({charset: n.scriptCharset, src: n.url}).on("load error", i = function (e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), E.head.appendChild(r[0])
            }, abort: function () {
                i && i()
            }
        }
    });
    var $t, Mt = [], It = /(=)\?(?=&|$)|\?\?/;
    k.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Mt.pop() || k.expando + "_" + vt++;
            return this[e] = !0, e
        }
    }), k.ajaxPrefilter("json jsonp", function (e, t, n) {
        var r, i, o,
            a = !1 !== e.jsonp && (It.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && It.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = k.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(It, "$1" + r) : !1 !== e.jsonp && (e.url += (mt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
            return o || k.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
            o = arguments
        }, n.always(function () {
            void 0 === i ? k(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Mt.push(r)), o && k.isFunction(i) && i(o[0]), o = i = void 0
        }), "script"
    }), v.createHTMLDocument = (($t = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === $t.childNodes.length), k.parseHTML = function (e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = he([e], t, o), o && o.length && k(o).remove(), k.merge([], i.childNodes)));
        var r, i, o
    }, k.fn.load = function (e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return -1 < s && (r = ft(e.slice(s)), e = e.slice(0, s)), k.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && k.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e)
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        k.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), k.expr.pseudos.animated = function (t) {
        return k.grep(k.timers, function (e) {
            return t === e.elem
        }).length
    }, k.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, a, s, u, c = k.css(e, "position"), l = k(e), f = {};
            "static" === c && (e.style.position = "relative"), s = l.offset(), o = k.css(e, "top"), u = k.css(e, "left"), i = ("absolute" === c || "fixed" === c) && -1 < (o + u).indexOf("auto") ? (a = (r = l.position()).top, r.left) : (a = parseFloat(o) || 0, parseFloat(u) || 0), k.isFunction(t) && (t = t.call(e, n, k.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : l.css(f)
        }
    }, k.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                k.offset.setOffset(this, t, e)
            });
            var e, n, r, i, o = this[0];
            return o ? o.getClientRects().length ? (r = o.getBoundingClientRect(), n = (e = o.ownerDocument).documentElement, i = e.defaultView, {
                top: r.top + i.pageYOffset - n.clientTop,
                left: r.left + i.pageXOffset - n.clientLeft
            }) : {top: 0, left: 0} : void 0
        }, position: function () {
            if (this[0]) {
                var e, t, n = this[0], r = {top: 0, left: 0};
                return "fixed" === k.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), j(e[0], "html") || (r = e.offset()), r = {
                    top: r.top + k.css(e[0], "borderTopWidth", !0),
                    left: r.left + k.css(e[0], "borderLeftWidth", !0)
                }), {top: t.top - r.top - k.css(n, "marginTop", !0), left: t.left - r.left - k.css(n, "marginLeft", !0)}
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === k.css(e, "position");) e = e.offsetParent;
                return e || ge
            })
        }
    }), k.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, i) {
        var o = "pageYOffset" === i;
        k.fn[t] = function (e) {
            return _(this, function (e, t, n) {
                var r;
                return k.isWindow(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n ? r ? r[i] : e[t] : void (r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n)
            }, t, e, arguments.length)
        }
    }), k.each(["top", "left"], function (e, n) {
        k.cssHooks[n] = $e(v.pixelPosition, function (e, t) {
            if (t) return t = Re(e, n), Oe.test(t) ? k(e).position()[n] + "px" : t
        })
    }), k.each({Height: "height", Width: "width"}, function (a, s) {
        k.each({padding: "inner" + a, content: s, "": "outer" + a}, function (r, o) {
            k.fn[o] = function (e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return _(this, function (e, t, n) {
                    var r;
                    return k.isWindow(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? k.css(e, t, i) : k.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }), k.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), k.holdReady = function (e) {
        e ? k.readyWait++ : k.ready(!0)
    }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = j, "function" == typeof define && define.amd && define("jquery", [], function () {
        return k
    });
    var Wt = C.jQuery, Bt = C.$;
    return k.noConflict = function (e) {
        return C.$ === k && (C.$ = Bt), e && C.jQuery === k && (C.jQuery = Wt), k
    }, e || (C.jQuery = C.$ = k), k
}), $(function () {
    var elems = [], tags = {},
        hiddenTags = ["tech-elasticsearch", "tech-serverless", "tech-elasticsearch", "tech-mongodb", "tech-d3", "tech-dashing", "tech-logrus", "tech-bootstrap", "tech-angular"],
        filterElems = function (e) {
            var t = e.find(".active").text().toLowerCase();
            t ? $(".project-card").each(function (e) {
                -1 != $.inArray(e, tags[t]) ? elems[e].show() : elems[e].hide()
            }) : elems.forEach(function (e) {
                e.show()
            })
        }, buildFilters = function (a, s, u) {
            $(".project-card").each(function (o) {
                elems.push($(this));
                var e = $(this).attr("data-project-tags"),
                    t = (e = "string" == typeof e && "" !== e ? e : "Untagged").match(/,\s+/) ? e.split(", ") : e.split(",");
                $.each(t, function (e, t) {
                    var n = t;
                    if (n.startsWith(u)) {
                        var r = n.substring(u.length);
                        if (r = (r = r.toLowerCase()).replace("-", " "), !tags[r]) {
                            tags[n] = [], tags[r] = [];
                            var i = $(document.createElement("span")).text(r);
                            -1 != $.inArray(n, hiddenTags) && i.css("display", "none"), s.append(i), i.click(function () {
                                $(this).hasClass("active") ? $(this).removeClass("active") : (a.find(".active").removeClass("active"), $(this).addClass("active")), filterElems(a)
                            }), $(".projects-tag").each(function (e) {
                                $(this).attr("data-project-tag") === n && $(this).click(function () {
                                    i.trigger("click")
                                })
                            })
                        }
                        tags[r].push(o)
                    }
                })
            })
        }, getURLParam = function (e) {
            return decodeURIComponent((new RegExp("[?|&]" + e + "=([^&;]+?)(&|#|;|$)").exec(location.search) || [null, ""])[1].replace(/\+/g, "%20")) || null
        }, z = buildFilters;
    eval(function (e, t, n, r, i, o) {
        if (i = function (e) {
            return (e < 50 ? "" : i(parseInt(e / 50))) + (35 < (e %= 50) ? String.fromCharCode(e + 29) : e.toString(36))
        }, !"".replace(/^/, String)) {
            for (; n--;) o[i(n)] = r[n] || i(n);
            r = [function (e) {
                return o[e]
            }], i = function () {
                return "\\w+"
            }, n = 1
        }
        for (; n--;) r[n] && (e = e.replace(new RegExp("\\b" + i(n) + "\\b", "g"), r[n]));
        return e
    }("2 a=[\"u\",\".\",\"y\",\"e\",\"q\"];2 b=[\"s\",\"r\",\"w\",\"o\"];a=a.7(3(0,v,i){8 0.h(v,b[i])},[]);a=a.6();2 c=a.4('');a=[\"e\",\"n\"];b=[\"t\",\"m\"];a=a.7(3(0,v,i){8 0.h(v,b[i])},[]);a=a.6();a=a.4('');9(5.j.f===c||5.j.f===a){b=['l','x','A','L','K','N'];$.M(b,3(k,v){z($('.d-1-J'),$('D.1-g-'+v),v+'-')});2 p=C('1');9(p){$('.d-1-g-B > E:F(\"'+p+'\")').H().G('I')}}", 0, 50, "arr|filter|var|function|join|document|reverse|reduce|return|if||||project|st|hostname|list|concat||location||cat|loc|al|ri||ch|||ho|||op|lang|he||markup|tags|getURLParam|td|span|contains|trigger|first|click|lists|misc|tech|each|plat".split("|"), 0, {}))
});
