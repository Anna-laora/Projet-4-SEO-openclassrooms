!(function (e, t) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (n, e) {
  var r = [],
    i = r.slice,
    o = r.push,
    s = r.indexOf,
    a = {},
    u = a.toString,
    l = a.hasOwnProperty,
    c = "".trim,
    p = {},
    f = n.document,
    h = function (e, t) {
      return new h.fn.init(e, t);
    },
    d = /^-ms-/,
    g = /-([\da-z])/gi;
  function m(e) {
    var t = e.length,
      n = h.type(e);
    return (
      !("function" === n || h.isWindow(e)) &&
      ((1 === e.nodeType && !!t) ||
        "array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (h.fn = h.prototype =
    {
      jquery: "2.1.0",
      constructor: h,
      selector: "",
      length: 0,
      toArray: function () {
        return i.call(this);
      },
      get: function (e) {
        return null != e
          ? e < 0
            ? this[e + this.length]
            : this[e]
          : i.call(this);
      },
      pushStack: function (e) {
        return (
          ((e = h.merge(this.constructor(), e)).prevObject = this),
          (e.context = this.context),
          e
        );
      },
      each: function (e, t) {
        return h.each(this, e, t);
      },
      map: function (n) {
        return this.pushStack(
          h.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(i.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          e = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= e && e < t ? [this[e]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor(null);
      },
      push: o,
      sort: r.sort,
      splice: r.splice,
    }),
    (h.extend = h.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o = arguments[0] || {},
          s = 1,
          a = arguments.length,
          u = !1;
        for (
          "boolean" == typeof o && ((u = o), (o = arguments[s] || {}), s++),
            "object" == typeof o || h.isFunction(o) || (o = {}),
            s === a && ((o = this), s--);
          s < a;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (i = o[t]),
                (n = e[t]),
                o !== n &&
                  (u && n && (h.isPlainObject(n) || (r = h.isArray(n)))
                    ? ((i = r
                        ? ((r = !1), i && h.isArray(i) ? i : [])
                        : i && h.isPlainObject(i)
                        ? i
                        : {}),
                      (o[t] = h.extend(u, i, n)))
                    : void 0 !== n && (o[t] = n));
        return o;
      }),
    h.extend({
      expando: "jQuery" + ("2.1.0" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isFunction: function (e) {
        return "function" === h.type(e);
      },
      isArray: Array.isArray,
      isWindow: function (e) {
        return null != e && e === e.window;
      },
      isNumeric: function (e) {
        return 0 <= e - parseFloat(e);
      },
      isPlainObject: function (e) {
        if ("object" !== h.type(e) || e.nodeType || h.isWindow(e)) return !1;
        try {
          if (
            e.constructor &&
            !l.call(e.constructor.prototype, "isPrototypeOf")
          )
            return !1;
        } catch (e) {
          return !1;
        }
        return !0;
      },
      isEmptyObject: function (e) {
        for (var t in e) return !1;
        return !0;
      },
      type: function (e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? a[u.call(e)] || "object"
          : typeof e;
      },
      globalEval: function (e) {
        var t,
          n = eval;
        (e = h.trim(e)) &&
          (1 === e.indexOf("use strict")
            ? (((t = f.createElement("script")).text = e),
              f.head.appendChild(t).parentNode.removeChild(t))
            : n(e));
      },
      camelCase: function (e) {
        return e.replace(d, "ms-").replace(g, t);
      },
      nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      },
      each: function (e, t, n) {
        var r = 0,
          i = e.length,
          o = m(e);
        if (n) {
          if (o) for (; r < i && !1 !== t.apply(e[r], n); r++);
          else for (r in e) if (!1 === t.apply(e[r], n)) break;
        } else if (o) for (; r < i && !1 !== t.call(e[r], r, e[r]); r++);
        else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : c.call(e);
      },
      makeArray: function (e, t) {
        return (
          (t = t || []),
          null != e &&
            (m(Object(e))
              ? h.merge(t, "string" == typeof e ? [e] : e)
              : o.call(t, e)),
          t
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : s.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, s = !n; i < o; i++)
          !t(e[i], i) != s && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i = 0,
          o = e.length,
          s = [];
        if (m(e)) for (; i < o; i++) null != (r = t(e[i], i, n)) && s.push(r);
        else for (i in e) null != (r = t(e[i], i, n)) && s.push(r);
        return t.apply([], s);
      },
      guid: 1,
      proxy: function (e, t) {
        var n, r, i;
        return (
          "string" == typeof t && ((n = e[t]), (t = e), (e = n)),
          h.isFunction(e)
            ? ((r = i.call(arguments, 2)),
              ((i = function () {
                return e.apply(t || this, r.concat(i.call(arguments)));
              }).guid = e.guid =
                e.guid || h.guid++),
              i)
            : void 0
        );
      },
      now: Date.now,
      support: p,
    }),
    h.each(
      "Boolean Number String Function Array Date RegExp Object Error".split(
        " "
      ),
      function (e, t) {
        a["[object " + t + "]"] = t.toLowerCase();
      }
    ),
    (M = (function (n) {
      var e,
        d,
        b,
        o,
        t,
        h,
        w,
        l,
        c,
        g,
        T,
        r,
        m,
        v,
        i,
        s,
        y,
        C = "sizzle" + -new Date(),
        x = n.document,
        N = 0,
        f = 0,
        a = re(),
        p = re(),
        u = re(),
        k = function (e, t) {
          return e === t && (c = !0), 0;
        },
        E = "undefined",
        D = -2147483648,
        j = {}.hasOwnProperty,
        S = [],
        A = S.pop,
        L = S.push,
        q = S.push,
        H = S.slice,
        O =
          S.indexOf ||
          function (e) {
            for (var t = 0, n = this.length; t < n; t++)
              if (this[t] === e) return t;
            return -1;
          },
        F =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        P = "[\\x20\\t\\r\\n\\f]",
        M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        R = M.replace("w", "w#"),
        W =
          "\\[" +
          P +
          "*(" +
          M +
          ")" +
          P +
          "*(?:([*^$|!~]?=)" +
          P +
          "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" +
          R +
          ")|)|)" +
          P +
          "*\\]",
        $ =
          ":(" +
          M +
          ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" +
          W.replace(3, 8) +
          ")*)|.*)\\)|)",
        B = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
        I = new RegExp("^" + P + "*," + P + "*"),
        _ = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
        X = new RegExp("=" + P + "*([^\\]'\"]*?)" + P + "*\\]", "g"),
        z = new RegExp($),
        U = new RegExp("^" + R + "$"),
        V = {
          ID: new RegExp("^#(" + M + ")"),
          CLASS: new RegExp("^\\.(" + M + ")"),
          TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
          ATTR: new RegExp("^" + W),
          PSEUDO: new RegExp("^" + $),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              P +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              P +
              "*(?:([+-]|)" +
              P +
              "*(\\d+)|))" +
              P +
              "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + F + ")$", "i"),
          needsContext: new RegExp(
            "^" +
              P +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              P +
              "*((?:-\\d)?\\d*)" +
              P +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        Y = /^(?:input|select|textarea|button)$/i,
        G = /^h\d$/i,
        Q = /^[^{]+\{\s*\[native \w/,
        J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        K = /[+~]/,
        Z = /'|\\/g,
        ee = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
        te = function (e, t, n) {
          var r = "0x" + t - 65536;
          return r != r || n
            ? t
            : r < 0
            ? String.fromCharCode(65536 + r)
            : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
        };
      try {
        q.apply((S = H.call(x.childNodes)), x.childNodes),
          S[x.childNodes.length].nodeType;
      } catch (e) {
        q = {
          apply: S.length
            ? function (e, t) {
                L.apply(e, H.call(t));
              }
            : function (e, t) {
                for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                e.length = n - 1;
              },
        };
      }
      function ne(e, t, n, r) {
        var i, o, s, a, u, l, c, f, p;
        if (
          ((t ? t.ownerDocument || t : x) !== T && g(t),
          (n = n || []),
          !e || "string" != typeof e)
        )
          return n;
        if (1 !== (s = (t = t || T).nodeType) && 9 !== s) return [];
        if (m && !r) {
          if ((i = J.exec(e)))
            if ((l = i[1])) {
              if (9 === s) {
                if (!(o = t.getElementById(l)) || !o.parentNode) return n;
                if (o.id === l) return n.push(o), n;
              } else if (
                t.ownerDocument &&
                (o = t.ownerDocument.getElementById(l)) &&
                y(t, o) &&
                o.id === l
              )
                return n.push(o), n;
            } else {
              if (i[2]) return q.apply(n, t.getElementsByTagName(e)), n;
              if (
                (l = i[3]) &&
                d.getElementsByClassName &&
                t.getElementsByClassName
              )
                return q.apply(n, t.getElementsByClassName(l)), n;
            }
          if (d.qsa && (!v || !v.test(e))) {
            if (
              ((c = l = C),
              (f = t),
              (p = 9 === s && e),
              1 === s && "object" !== t.nodeName.toLowerCase())
            ) {
              for (
                u = fe(e),
                  (l = t.getAttribute("id"))
                    ? (c = l.replace(Z, "\\$&"))
                    : t.setAttribute("id", c),
                  c = "[id='" + c + "'] ",
                  a = u.length;
                a--;

              )
                u[a] = c + pe(u[a]);
              (f = (K.test(e) && le(t.parentNode)) || t), (p = u.join(","));
            }
            if (p)
              try {
                return q.apply(n, f.querySelectorAll(p)), n;
              } catch (e) {
              } finally {
                l || t.removeAttribute("id");
              }
          }
        }
        return (function (e, t, n, r) {
          var i,
            o,
            s,
            a,
            u,
            l = fe(e);
          if (!r && 1 === l.length) {
            if (
              2 < (o = l[0] = l[0].slice(0)).length &&
              "ID" === (s = o[0]).type &&
              d.getById &&
              9 === t.nodeType &&
              m &&
              b.relative[o[1].type]
            ) {
              if (!(t = (b.find.ID(s.matches[0].replace(ee, te), t) || [])[0]))
                return n;
              e = e.slice(o.shift().value.length);
            }
            for (
              i = V.needsContext.test(e) ? 0 : o.length;
              i-- && ((s = o[i]), !b.relative[(a = s.type)]);

            )
              if (
                (u = b.find[a]) &&
                (r = u(
                  s.matches[0].replace(ee, te),
                  (K.test(o[0].type) && le(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(i, 1), !(e = r.length && pe(o))))
                  return q.apply(n, r), n;
                break;
              }
          }
          return h(e, l)(r, t, !m, n, (K.test(e) && le(t.parentNode)) || t), n;
        })(e.replace(B, "$1"), t, n, r);
      }
      function re() {
        var n = [];
        function r(e, t) {
          return (
            n.push(e + " ") > b.cacheLength && delete r[n.shift()],
            (r[e + " "] = t)
          );
        }
        return r;
      }
      function ie(e) {
        return (e[C] = !0), e;
      }
      function oe(e) {
        var t = T.createElement("div");
        try {
          return !!e(t);
        } catch (e) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), (t = null);
        }
      }
      function se(e, t) {
        for (var n = e.split("|"), r = e.length; r--; ) b.attrHandle[n[r]] = t;
      }
      function ae(e, t) {
        var n = t && e,
          r =
            n &&
            1 === e.nodeType &&
            1 === t.nodeType &&
            (~t.sourceIndex || D) - (~e.sourceIndex || D);
        if (r) return r;
        if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
        return e ? 1 : -1;
      }
      function ue(s) {
        return ie(function (o) {
          return (
            (o = +o),
            ie(function (e, t) {
              for (var n, r = s([], e.length, o), i = r.length; i--; )
                e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
            })
          );
        });
      }
      function le(e) {
        return e && typeof e.getElementsByTagName !== E && e;
      }
      for (e in ((d = ne.support = {}),
      (t = ne.isXML =
        function (e) {
          return (
            !!(e = e && (e.ownerDocument || e).documentElement) &&
            "HTML" !== e.nodeName
          );
        }),
      (g = ne.setDocument =
        function (e) {
          var u = e ? e.ownerDocument || e : x,
            e = u.defaultView;
          return u !== T && 9 === u.nodeType && u.documentElement
            ? ((r = (T = u).documentElement),
              (m = !t(u)),
              e &&
                e !== e.top &&
                (e.addEventListener
                  ? e.addEventListener(
                      "unload",
                      function () {
                        g();
                      },
                      !1
                    )
                  : e.attachEvent &&
                    e.attachEvent("onunload", function () {
                      g();
                    })),
              (d.attributes = oe(function (e) {
                return (e.className = "i"), !e.getAttribute("className");
              })),
              (d.getElementsByTagName = oe(function (e) {
                return (
                  e.appendChild(u.createComment("")),
                  !e.getElementsByTagName("*").length
                );
              })),
              (d.getElementsByClassName =
                Q.test(u.getElementsByClassName) &&
                oe(function (e) {
                  return (
                    (e.innerHTML =
                      "<div class='a'></div><div class='a i'></div>"),
                    (e.firstChild.className = "i"),
                    2 === e.getElementsByClassName("i").length
                  );
                })),
              (d.getById = oe(function (e) {
                return (
                  (r.appendChild(e).id = C),
                  !u.getElementsByName || !u.getElementsByName(C).length
                );
              })),
              d.getById
                ? ((b.find.ID = function (e, t) {
                    if (typeof t.getElementById !== E && m)
                      return (e = t.getElementById(e)) && e.parentNode
                        ? [e]
                        : [];
                  }),
                  (b.filter.ID = function (e) {
                    var t = e.replace(ee, te);
                    return function (e) {
                      return e.getAttribute("id") === t;
                    };
                  }))
                : (delete b.find.ID,
                  (b.filter.ID = function (e) {
                    var t = e.replace(ee, te);
                    return function (e) {
                      return (
                        (e =
                          typeof e.getAttributeNode !== E &&
                          e.getAttributeNode("id")) && e.value === t
                      );
                    };
                  })),
              (b.find.TAG = d.getElementsByTagName
                ? function (e, t) {
                    return typeof t.getElementsByTagName !== E
                      ? t.getElementsByTagName(e)
                      : void 0;
                  }
                : function (e, t) {
                    var n,
                      r = [],
                      i = 0,
                      o = t.getElementsByTagName(e);
                    if ("*" !== e) return o;
                    for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                    return r;
                  }),
              (b.find.CLASS =
                d.getElementsByClassName &&
                function (e, t) {
                  return typeof t.getElementsByClassName !== E && m
                    ? t.getElementsByClassName(e)
                    : void 0;
                }),
              (i = []),
              (v = []),
              (d.qsa = Q.test(u.querySelectorAll)) &&
                (oe(function (e) {
                  (e.innerHTML =
                    "<select t=''><option selected=''></option></select>"),
                    e.querySelectorAll("[t^='']").length &&
                      v.push("[*^$]=" + P + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length ||
                      v.push("\\[" + P + "*(?:value|" + F + ")"),
                    e.querySelectorAll(":checked").length || v.push(":checked");
                }),
                oe(function (e) {
                  var t = u.createElement("input");
                  t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length &&
                      v.push("name" + P + "*[*^$|!~]?="),
                    e.querySelectorAll(":enabled").length ||
                      v.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    v.push(",.*:");
                })),
              (d.matchesSelector = Q.test(
                (s =
                  r.webkitMatchesSelector ||
                  r.mozMatchesSelector ||
                  r.oMatchesSelector ||
                  r.msMatchesSelector)
              )) &&
                oe(function (e) {
                  (d.disconnectedMatch = s.call(e, "div")),
                    s.call(e, "[s!='']:x"),
                    i.push("!=", $);
                }),
              (v = v.length && new RegExp(v.join("|"))),
              (i = i.length && new RegExp(i.join("|"))),
              (e = Q.test(r.compareDocumentPosition)),
              (y =
                e || Q.test(r.contains)
                  ? function (e, t) {
                      var n = 9 === e.nodeType ? e.documentElement : e;
                      return (
                        e === (t = t && t.parentNode) ||
                        !(
                          !t ||
                          1 !== t.nodeType ||
                          !(n.contains
                            ? n.contains(t)
                            : e.compareDocumentPosition &&
                              16 & e.compareDocumentPosition(t))
                        )
                      );
                    }
                  : function (e, t) {
                      if (t)
                        for (; (t = t.parentNode); ) if (t === e) return !0;
                      return !1;
                    }),
              (k = e
                ? function (e, t) {
                    if (e === t) return (c = !0), 0;
                    var n =
                      !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return (
                      n ||
                      (1 &
                        (n =
                          (e.ownerDocument || e) === (t.ownerDocument || t)
                            ? e.compareDocumentPosition(t)
                            : 1) ||
                      (!d.sortDetached && t.compareDocumentPosition(e) === n)
                        ? e === u || (e.ownerDocument === x && y(x, e))
                          ? -1
                          : t === u || (t.ownerDocument === x && y(x, t))
                          ? 1
                          : l
                          ? O.call(l, e) - O.call(l, t)
                          : 0
                        : 4 & n
                        ? -1
                        : 1)
                    );
                  }
                : function (e, t) {
                    if (e === t) return (c = !0), 0;
                    var n,
                      r = 0,
                      i = e.parentNode,
                      o = t.parentNode,
                      s = [e],
                      a = [t];
                    if (!i || !o)
                      return e === u
                        ? -1
                        : t === u
                        ? 1
                        : i
                        ? -1
                        : o
                        ? 1
                        : l
                        ? O.call(l, e) - O.call(l, t)
                        : 0;
                    if (i === o) return ae(e, t);
                    for (n = e; (n = n.parentNode); ) s.unshift(n);
                    for (n = t; (n = n.parentNode); ) a.unshift(n);
                    for (; s[r] === a[r]; ) r++;
                    return r
                      ? ae(s[r], a[r])
                      : s[r] === x
                      ? -1
                      : a[r] === x
                      ? 1
                      : 0;
                  }),
              u)
            : T;
        }),
      (ne.matches = function (e, t) {
        return ne(e, null, null, t);
      }),
      (ne.matchesSelector = function (e, t) {
        if (
          ((e.ownerDocument || e) !== T && g(e),
          (t = t.replace(X, "='$1']")),
          !(!d.matchesSelector || !m || (i && i.test(t)) || (v && v.test(t))))
        )
          try {
            var n = s.call(e, t);
            if (
              n ||
              d.disconnectedMatch ||
              (e.document && 11 !== e.document.nodeType)
            )
              return n;
          } catch (e) {}
        return 0 < ne(t, T, null, [e]).length;
      }),
      (ne.contains = function (e, t) {
        return (e.ownerDocument || e) !== T && g(e), y(e, t);
      }),
      (ne.attr = function (e, t) {
        (e.ownerDocument || e) !== T && g(e);
        var n = b.attrHandle[t.toLowerCase()];
        return void 0 !==
          (n =
            n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !m) : void 0)
          ? n
          : d.attributes || !m
          ? e.getAttribute(t)
          : (n = e.getAttributeNode(t)) && n.specified
          ? n.value
          : null;
      }),
      (ne.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }),
      (ne.uniqueSort = function (e) {
        var t,
          n = [],
          r = 0,
          i = 0;
        if (
          ((c = !d.detectDuplicates),
          (l = !d.sortStable && e.slice(0)),
          e.sort(k),
          c)
        ) {
          for (; (t = e[i++]); ) t === e[i] && (r = n.push(i));
          for (; r--; ) e.splice(n[r], 1);
        }
        return (l = null), e;
      }),
      (o = ne.getText =
        function (e) {
          var t,
            n = "",
            r = 0,
            i = e.nodeType;
          if (i) {
            if (1 === i || 9 === i || 11 === i) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
            } else if (3 === i || 4 === i) return e.nodeValue;
          } else for (; (t = e[r++]); ) n += o(t);
          return n;
        }),
      ((b = ne.selectors =
        {
          cacheLength: 50,
          createPseudo: ie,
          match: V,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (e) {
              return (
                (e[1] = e[1].replace(ee, te)),
                (e[3] = (e[4] || e[5] || "").replace(ee, te)),
                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                e.slice(0, 4)
              );
            },
            CHILD: function (e) {
              return (
                (e[1] = e[1].toLowerCase()),
                "nth" === e[1].slice(0, 3)
                  ? (e[3] || ne.error(e[0]),
                    (e[4] = +(e[4]
                      ? e[5] + (e[6] || 1)
                      : 2 * ("even" === e[3] || "odd" === e[3]))),
                    (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                  : e[3] && ne.error(e[0]),
                e
              );
            },
            PSEUDO: function (e) {
              var t,
                n = !e[5] && e[2];
              return V.CHILD.test(e[0])
                ? null
                : (e[3] && void 0 !== e[4]
                    ? (e[2] = e[4])
                    : n &&
                      z.test(n) &&
                      (t = fe(n, !0)) &&
                      (t = n.indexOf(")", n.length - t) - n.length) &&
                      ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                  e.slice(0, 3));
            },
          },
          filter: {
            TAG: function (e) {
              var t = e.replace(ee, te).toLowerCase();
              return "*" === e
                ? function () {
                    return !0;
                  }
                : function (e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
            },
            CLASS: function (e) {
              var t = a[e + " "];
              return (
                t ||
                ((t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")),
                a(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      (typeof e.getAttribute !== E &&
                        e.getAttribute("class")) ||
                      ""
                  );
                }))
              );
            },
            ATTR: function (t, n, r) {
              return function (e) {
                return null == (e = ne.attr(e, t))
                  ? "!=" === n
                  : !n ||
                      ((e += ""),
                      "=" === n
                        ? e === r
                        : "!=" === n
                        ? e !== r
                        : "^=" === n
                        ? r && 0 === e.indexOf(r)
                        : "*=" === n
                        ? r && -1 < e.indexOf(r)
                        : "$=" === n
                        ? r && e.slice(-r.length) === r
                        : "~=" === n
                        ? -1 < (" " + e + " ").indexOf(r)
                        : "|=" === n &&
                          (e === r || e.slice(0, r.length + 1) === r + "-"));
              };
            },
            CHILD: function (d, e, t, h, g) {
              var m = "nth" !== d.slice(0, 3),
                v = "last" !== d.slice(-4),
                y = "of-type" === e;
              return 1 === h && 0 === g
                ? function (e) {
                    return !!e.parentNode;
                  }
                : function (e, t, n) {
                    var r,
                      i,
                      o,
                      s,
                      a,
                      u,
                      l = m != v ? "nextSibling" : "previousSibling",
                      c = e.parentNode,
                      f = y && e.nodeName.toLowerCase(),
                      p = !n && !y;
                    if (c) {
                      if (m) {
                        for (; l; ) {
                          for (o = e; (o = o[l]); )
                            if (
                              y
                                ? o.nodeName.toLowerCase() === f
                                : 1 === o.nodeType
                            )
                              return !1;
                          u = l = "only" === d && !u && "nextSibling";
                        }
                        return !0;
                      }
                      if (((u = [v ? c.firstChild : c.lastChild]), v && p)) {
                        for (
                          a =
                            (r = (i = c[C] || (c[C] = {}))[d] || [])[0] === N &&
                            r[1],
                            s = r[0] === N && r[2],
                            o = a && c.childNodes[a];
                          (o = (++a && o && o[l]) || (s = a = 0) || u.pop());

                        )
                          if (1 === o.nodeType && ++s && o === e) {
                            i[d] = [N, a, s];
                            break;
                          }
                      } else if (
                        p &&
                        (r = (e[C] || (e[C] = {}))[d]) &&
                        r[0] === N
                      )
                        s = r[1];
                      else
                        for (
                          ;
                          (o = (++a && o && o[l]) || (s = a = 0) || u.pop()) &&
                          ((y
                            ? o.nodeName.toLowerCase() !== f
                            : 1 !== o.nodeType) ||
                            !++s ||
                            (p && ((o[C] || (o[C] = {}))[d] = [N, s]),
                            o !== e));

                        );
                      return (s -= g) === h || (s % h == 0 && 0 <= s / h);
                    }
                  };
            },
            PSEUDO: function (e, o) {
              var t,
                s =
                  b.pseudos[e] ||
                  b.setFilters[e.toLowerCase()] ||
                  ne.error("unsupported pseudo: " + e);
              return s[C]
                ? s(o)
                : 1 < s.length
                ? ((t = [e, e, "", o]),
                  b.setFilters.hasOwnProperty(e.toLowerCase())
                    ? ie(function (e, t) {
                        for (var n, r = s(e, o), i = r.length; i--; )
                          e[(n = O.call(e, r[i]))] = !(t[n] = r[i]);
                      })
                    : function (e) {
                        return s(e, 0, t);
                      })
                : s;
            },
          },
          pseudos: {
            not: ie(function (e) {
              var r = [],
                i = [],
                a = h(e.replace(B, "$1"));
              return a[C]
                ? ie(function (e, t, n, r) {
                    for (var i, o = a(e, null, r, []), s = e.length; s--; )
                      (i = o[s]) && (e[s] = !(t[s] = i));
                  })
                : function (e, t, n) {
                    return (r[0] = e), a(r, null, n, i), !i.pop();
                  };
            }),
            has: ie(function (t) {
              return function (e) {
                return 0 < ne(t, e).length;
              };
            }),
            contains: ie(function (t) {
              return function (e) {
                return -1 < (e.textContent || e.innerText || o(e)).indexOf(t);
              };
            }),
            lang: ie(function (n) {
              return (
                U.test(n || "") || ne.error("unsupported lang: " + n),
                (n = n.replace(ee, te).toLowerCase()),
                function (e) {
                  var t;
                  do {
                    if (
                      (t = m
                        ? e.lang
                        : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                    )
                      return (
                        (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                      );
                  } while ((e = e.parentNode) && 1 === e.nodeType);
                  return !1;
                }
              );
            }),
            target: function (e) {
              var t = n.location && n.location.hash;
              return t && t.slice(1) === e.id;
            },
            root: function (e) {
              return e === r;
            },
            focus: function (e) {
              return (
                e === T.activeElement &&
                (!T.hasFocus || T.hasFocus()) &&
                !!(e.type || e.href || ~e.tabIndex)
              );
            },
            enabled: function (e) {
              return !1 === e.disabled;
            },
            disabled: function (e) {
              return !0 === e.disabled;
            },
            checked: function (e) {
              var t = e.nodeName.toLowerCase();
              return (
                ("input" === t && !!e.checked) ||
                ("option" === t && !!e.selected)
              );
            },
            selected: function (e) {
              return (
                e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
              );
            },
            empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0;
            },
            parent: function (e) {
              return !b.pseudos.empty(e);
            },
            header: function (e) {
              return G.test(e.nodeName);
            },
            input: function (e) {
              return Y.test(e.nodeName);
            },
            button: function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t && "button" === e.type) || "button" === t;
            },
            text: function (e) {
              return (
                "input" === e.nodeName.toLowerCase() &&
                "text" === e.type &&
                (null == (e = e.getAttribute("type")) ||
                  "text" === e.toLowerCase())
              );
            },
            first: ue(function () {
              return [0];
            }),
            last: ue(function (e, t) {
              return [t - 1];
            }),
            eq: ue(function (e, t, n) {
              return [n < 0 ? n + t : n];
            }),
            even: ue(function (e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);
              return e;
            }),
            odd: ue(function (e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);
              return e;
            }),
            lt: ue(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; 0 <= --r; ) e.push(r);
              return e;
            }),
            gt: ue(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
              return e;
            }),
          },
        }).pseudos.nth = b.pseudos.eq),
      { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
        b.pseudos[e] = (function (t) {
          return function (e) {
            return "input" === e.nodeName.toLowerCase() && e.type === t;
          };
        })(e);
      for (e in { submit: !0, reset: !0 })
        b.pseudos[e] = (function (n) {
          return function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t || "button" === t) && e.type === n;
          };
        })(e);
      function ce() {}
      function fe(e, t) {
        var n,
          r,
          i,
          o,
          s,
          a,
          u,
          l = p[e + " "];
        if (l) return t ? 0 : l.slice(0);
        for (s = e, a = [], u = b.preFilter; s; ) {
          for (o in ((n && !(r = I.exec(s))) ||
            (r && (s = s.slice(r[0].length) || s), a.push((i = []))),
          (n = !1),
          (r = _.exec(s)) &&
            ((n = r.shift()),
            i.push({ value: n, type: r[0].replace(B, " ") }),
            (s = s.slice(n.length))),
          b.filter))
            !(r = V[o].exec(s)) ||
              (u[o] && !(r = u[o](r))) ||
              ((n = r.shift()),
              i.push({ value: n, type: o, matches: r }),
              (s = s.slice(n.length)));
          if (!n) break;
        }
        return t ? s.length : s ? ne.error(e) : p(e, a).slice(0);
      }
      function pe(e) {
        for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
        return r;
      }
      function de(s, e, t) {
        var a = e.dir,
          u = t && "parentNode" === a,
          l = f++;
        return e.first
          ? function (e, t, n) {
              for (; (e = e[a]); ) if (1 === e.nodeType || u) return s(e, t, n);
            }
          : function (e, t, n) {
              var r,
                i,
                o = [N, l];
              if (n) {
                for (; (e = e[a]); )
                  if ((1 === e.nodeType || u) && s(e, t, n)) return !0;
              } else
                for (; (e = e[a]); )
                  if (1 === e.nodeType || u) {
                    if (
                      (r = (i = e[C] || (e[C] = {}))[a]) &&
                      r[0] === N &&
                      r[1] === l
                    )
                      return (o[2] = r[2]);
                    if (((i[a] = o)[2] = s(e, t, n))) return !0;
                  }
            };
      }
      function he(i) {
        return 1 < i.length
          ? function (e, t, n) {
              for (var r = i.length; r--; ) if (!i[r](e, t, n)) return !1;
              return !0;
            }
          : i[0];
      }
      function ge(e, t, n, r, i) {
        for (var o, s = [], a = 0, u = e.length, l = null != t; a < u; a++)
          !(o = e[a]) || (n && !n(o, r, i)) || (s.push(o), l && t.push(a));
        return s;
      }
      return (
        (ce.prototype = b.filters = b.pseudos),
        (b.setFilters = new ce()),
        (h = ne.compile =
          function (e, t) {
            var m,
              v,
              y,
              x,
              n,
              r = [],
              i = [],
              o = u[e + " "];
            if (!o) {
              for (n = (t = t || fe(e)).length; n--; )
                ((o = (function e(t) {
                  for (
                    var r,
                      n,
                      i,
                      o = t.length,
                      s = b.relative[t[0].type],
                      a = s || b.relative[" "],
                      u = s ? 1 : 0,
                      l = de(
                        function (e) {
                          return e === r;
                        },
                        a,
                        !0
                      ),
                      c = de(
                        function (e) {
                          return -1 < O.call(r, e);
                        },
                        a,
                        !0
                      ),
                      f = [
                        function (e, t, n) {
                          return (
                            (!s && (n || t !== w)) ||
                            ((r = t).nodeType ? l : c)(e, t, n)
                          );
                        },
                      ];
                    u < o;
                    u++
                  )
                    if ((n = b.relative[t[u].type])) f = [de(he(f), n)];
                    else {
                      if (
                        (n = b.filter[t[u].type].apply(null, t[u].matches))[C]
                      ) {
                        for (i = ++u; i < o && !b.relative[t[i].type]; i++);
                        return (function e(d, h, g, m, v, t) {
                          return (
                            m && !m[C] && (m = e(m)),
                            v && !v[C] && (v = e(v, t)),
                            ie(function (e, t, n, r) {
                              var i,
                                o,
                                s,
                                a = [],
                                u = [],
                                l = t.length,
                                c =
                                  e ||
                                  (function (e, t, n) {
                                    for (var r = 0, i = t.length; r < i; r++)
                                      ne(e, t[r], n);
                                    return n;
                                  })(h || "*", n.nodeType ? [n] : n, []),
                                f = !d || (!e && h) ? c : ge(c, a, d, n, r),
                                p = g ? (v || (e ? d : l || m) ? [] : t) : f;
                              if ((g && g(f, p, n, r), m))
                                for (
                                  i = ge(p, u), m(i, [], n, r), o = i.length;
                                  o--;

                                )
                                  (s = i[o]) && (p[u[o]] = !(f[u[o]] = s));
                              if (e) {
                                if (v || d) {
                                  if (v) {
                                    for (i = [], o = p.length; o--; )
                                      (s = p[o]) && i.push((f[o] = s));
                                    v(null, (p = []), i, r);
                                  }
                                  for (o = p.length; o--; )
                                    (s = p[o]) &&
                                      -1 < (i = v ? O.call(e, s) : a[o]) &&
                                      (e[i] = !(t[i] = s));
                                }
                              } else (p = ge(p === t ? p.splice(l, p.length) : p)), v ? v(null, t, p, r) : q.apply(t, p);
                            })
                          );
                        })(
                          1 < u && he(f),
                          1 < u &&
                            pe(
                              t
                                .slice(0, u - 1)
                                .concat({
                                  value: " " === t[u - 2].type ? "*" : "",
                                })
                            ).replace(B, "$1"),
                          n,
                          u < i && e(t.slice(u, i)),
                          i < o && e((t = t.slice(i))),
                          i < o && pe(t)
                        );
                      }
                      f.push(n);
                    }
                  return he(f);
                })(t[n]))[C]
                  ? r
                  : i
                ).push(o);
              o = u(
                e,
                ((y = 0 < (v = r).length),
                (x = 0 < (m = i).length),
                (e = function (e, t, n, r, i) {
                  var o,
                    s,
                    a,
                    u = 0,
                    l = "0",
                    c = e && [],
                    f = [],
                    p = w,
                    d = e || (x && b.find.TAG("*", i)),
                    h = (N += null == p ? 1 : Math.random() || 0.1),
                    g = d.length;
                  for (
                    i && (w = t !== T && t);
                    l !== g && null != (o = d[l]);
                    l++
                  ) {
                    if (x && o) {
                      for (s = 0; (a = m[s++]); )
                        if (a(o, t, n)) {
                          r.push(o);
                          break;
                        }
                      i && (N = h);
                    }
                    y && ((o = !a && o) && u--, e && c.push(o));
                  }
                  if (((u += l), y && l !== u)) {
                    for (s = 0; (a = v[s++]); ) a(c, f, t, n);
                    if (e) {
                      if (0 < u)
                        for (; l--; ) c[l] || f[l] || (f[l] = A.call(r));
                      f = ge(f);
                    }
                    q.apply(r, f),
                      i &&
                        !e &&
                        0 < f.length &&
                        1 < u + v.length &&
                        ne.uniqueSort(r);
                  }
                  return i && ((N = h), (w = p)), c;
                }),
                y ? ie(e) : e)
              );
            }
            return o;
          }),
        (d.sortStable = C.split("").sort(k).join("") === C),
        (d.detectDuplicates = !!c),
        g(),
        (d.sortDetached = oe(function (e) {
          return 1 & e.compareDocumentPosition(T.createElement("div"));
        })),
        oe(function (e) {
          return (
            (e.innerHTML = "<a href='#'></a>"),
            "#" === e.firstChild.getAttribute("href")
          );
        }) ||
          se("type|href|height|width", function (e, t, n) {
            return n
              ? void 0
              : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
          }),
        (d.attributes &&
          oe(function (e) {
            return (
              (e.innerHTML = "<input/>"),
              e.firstChild.setAttribute("value", ""),
              "" === e.firstChild.getAttribute("value")
            );
          })) ||
          se("value", function (e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase()
              ? void 0
              : e.defaultValue;
          }),
        oe(function (e) {
          return null == e.getAttribute("disabled");
        }) ||
          se(F, function (e, t, n) {
            return n
              ? void 0
              : !0 === e[t]
              ? t.toLowerCase()
              : (t = e.getAttributeNode(t)) && t.specified
              ? t.value
              : null;
          }),
        ne
      );
    })(n)),
    (h.find = M),
    (h.expr = M.selectors),
    (h.expr[":"] = h.expr.pseudos),
    (h.unique = M.uniqueSort),
    (h.text = M.getText),
    (h.isXMLDoc = M.isXML),
    (h.contains = M.contains);
  var v = h.expr.match.needsContext,
    y = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    x = /^.[^:#\[\.,]*$/;
  function b(e, t, n) {
    if (h.isFunction(t))
      return h.grep(e, function (e, t) {
        return !!t.call(e, t, e) !== n;
      });
    if (t.nodeType)
      return h.grep(e, function (e) {
        return (e === t) !== n;
      });
    if ("string" == typeof t) {
      if (x.test(t)) return h.filter(t, e, n);
      t = h.filter(t, e);
    }
    return h.grep(e, function (e) {
      return 0 <= s.call(t, e) !== n;
    });
  }
  (h.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? h.find.matchesSelector(r, e)
          ? [r]
          : []
        : h.find.matches(
            e,
            h.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    h.fn.extend({
      find: function (e) {
        var t,
          n = this.length,
          r = [],
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            h(e).filter(function () {
              for (t = 0; t < n; t++) if (h.contains(i[t], this)) return !0;
            })
          );
        for (t = 0; t < n; t++) h.find(e, i[t], r);
        return (
          ((r = this.pushStack(1 < n ? h.unique(r) : r)).selector = this
            .selector
            ? this.selector + " " + e
            : e),
          r
        );
      },
      filter: function (e) {
        return this.pushStack(b(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(b(this, e || [], !0));
      },
      is: function (e) {
        return !!b(this, "string" == typeof e && v.test(e) ? h(e) : e || [], !1)
          .length;
      },
    });
  var w,
    T = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  ((h.fn.init = function (e, t) {
    var n, r;
    if (!e) return this;
    if ("string" != typeof e)
      return e.nodeType
        ? ((this.context = this[0] = e), (this.length = 1), this)
        : h.isFunction(e)
        ? void 0 !== w.ready
          ? w.ready(e)
          : e(h)
        : (void 0 !== e.selector &&
            ((this.selector = e.selector), (this.context = e.context)),
          h.makeArray(e, this));
    if (
      !(n =
        "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
          ? [null, e, null]
          : T.exec(e)) ||
      (!n[1] && t)
    )
      return (!t || t.jquery ? t || w : this.constructor(t)).find(e);
    if (n[1]) {
      if (
        ((t = t instanceof h ? t[0] : t),
        h.merge(
          this,
          h.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : f, !0)
        ),
        y.test(n[1]) && h.isPlainObject(t))
      )
        for (n in t) h.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
      return this;
    }
    return (
      (r = f.getElementById(n[2])) &&
        r.parentNode &&
        ((this.length = 1), (this[0] = r)),
      (this.context = f),
      (this.selector = e),
      this
    );
  }).prototype = h.fn),
    (w = h(f));
  var C = /^(?:parents|prev(?:Until|All))/,
    N = { children: !0, contents: !0, next: !0, prev: !0 };
  function k(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  h.extend({
    dir: function (e, t, n) {
      for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (i && h(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    sibling: function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
  }),
    h.fn.extend({
      has: function (e) {
        var t = h(e, this),
          n = t.length;
        return this.filter(function () {
          for (var e = 0; e < n; e++) if (h.contains(this, t[e])) return !0;
        });
      },
      closest: function (e, t) {
        for (
          var n,
            r = 0,
            i = this.length,
            o = [],
            s = v.test(e) || "string" != typeof e ? h(e, t || this.context) : 0;
          r < i;
          r++
        )
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (s
                ? -1 < s.index(n)
                : 1 === n.nodeType && h.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
        return this.pushStack(1 < o.length ? h.unique(o) : o);
      },
      index: function (e) {
        return e
          ? "string" == typeof e
            ? s.call(h(e), this[0])
            : s.call(this, e.jquery ? e[0] : e)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (e, t) {
        return this.pushStack(h.unique(h.merge(this.get(), h(e, t))));
      },
      addBack: function (e) {
        return this.add(
          null == e ? this.prevObject : this.prevObject.filter(e)
        );
      },
    }),
    h.each(
      {
        parent: function (e) {
          return (e = e.parentNode) && 11 !== e.nodeType ? e : null;
        },
        parents: function (e) {
          return h.dir(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return h.dir(e, "parentNode", n);
        },
        next: function (e) {
          return k(e, "nextSibling");
        },
        prev: function (e) {
          return k(e, "previousSibling");
        },
        nextAll: function (e) {
          return h.dir(e, "nextSibling");
        },
        prevAll: function (e) {
          return h.dir(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return h.dir(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return h.dir(e, "previousSibling", n);
        },
        siblings: function (e) {
          return h.sibling((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return h.sibling(e.firstChild);
        },
        contents: function (e) {
          return e.contentDocument || h.merge([], e.childNodes);
        },
      },
      function (r, i) {
        h.fn[r] = function (e, t) {
          var n = h.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = h.filter(t, n)),
            1 < this.length && (N[r] || h.unique(n), C.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var E = /\S+/g,
    D = {};
  function j() {
    f.removeEventListener("DOMContentLoaded", j, !1),
      n.removeEventListener("load", j, !1),
      h.ready();
  }
  (h.Callbacks = function (i) {
    i =
      "string" == typeof i
        ? D[i] ||
          ((n = D[i] = {}),
          h.each(i.match(E) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : h.extend({}, i);
    var n,
      t,
      r,
      o,
      s,
      a,
      u,
      l = [],
      c = !i.once && [],
      f = function (e) {
        for (
          t = i.memory && e, r = !0, u = s || 0, s = 0, a = l.length, o = !0;
          l && u < a;
          u++
        )
          if (!1 === l[u].apply(e[0], e[1]) && i.stopOnFalse) {
            t = !1;
            break;
          }
        (o = !1),
          l && (c ? c.length && f(c.shift()) : t ? (l = []) : p.disable());
      },
      p = {
        add: function () {
          var e;
          return (
            l &&
              ((e = l.length),
              (function r(e) {
                h.each(e, function (e, t) {
                  var n = h.type(t);
                  "function" === n
                    ? (i.unique && p.has(t)) || l.push(t)
                    : t && t.length && "string" !== n && r(t);
                });
              })(arguments),
              o ? (a = l.length) : t && ((s = e), f(t))),
            this
          );
        },
        remove: function () {
          return (
            l &&
              h.each(arguments, function (e, t) {
                for (var n; -1 < (n = h.inArray(t, l, n)); )
                  l.splice(n, 1), o && (n <= a && a--, n <= u && u--);
              }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < h.inArray(e, l) : !(!l || !l.length);
        },
        empty: function () {
          return (l = []), (a = 0), this;
        },
        disable: function () {
          return (l = c = t = void 0), this;
        },
        disabled: function () {
          return !l;
        },
        lock: function () {
          return (c = void 0), t || p.disable(), this;
        },
        locked: function () {
          return !c;
        },
        fireWith: function (e, t) {
          return (
            !l ||
              (r && !c) ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              o ? c.push(t) : f(t)),
            this
          );
        },
        fire: function () {
          return p.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!r;
        },
      };
    return p;
  }),
    h.extend({
      Deferred: function (e) {
        var o = [
            ["resolve", "done", h.Callbacks("once memory"), "resolved"],
            ["reject", "fail", h.Callbacks("once memory"), "rejected"],
            ["notify", "progress", h.Callbacks("memory")],
          ],
          i = "pending",
          s = {
            state: function () {
              return i;
            },
            always: function () {
              return a.done(arguments).fail(arguments), this;
            },
            then: function () {
              var i = arguments;
              return h
                .Deferred(function (r) {
                  h.each(o, function (e, t) {
                    var n = h.isFunction(i[e]) && i[e];
                    a[t[1]](function () {
                      var e = n && n.apply(this, arguments);
                      e && h.isFunction(e.promise)
                        ? e
                            .promise()
                            .done(r.resolve)
                            .fail(r.reject)
                            .progress(r.notify)
                        : r[t[0] + "With"](
                            this === s ? r.promise() : this,
                            n ? [e] : arguments
                          );
                    });
                  }),
                    (i = null);
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? h.extend(e, s) : s;
            },
          },
          a = {};
        return (
          (s.pipe = s.then),
          h.each(o, function (e, t) {
            var n = t[2],
              r = t[3];
            (s[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[1 ^ e][2].disable,
                  o[2][2].lock
                ),
              (a[t[0]] = function () {
                return a[t[0] + "With"](this === a ? s : this, arguments), this;
              }),
              (a[t[0] + "With"] = n.fireWith);
          }),
          s.promise(a),
          e && e.call(a, a),
          a
        );
      },
      when: function (e) {
        function t(t, n, r) {
          return function (e) {
            (n[t] = this),
              (r[t] = 1 < arguments.length ? e.call(arguments) : e),
              r === i ? l.notifyWith(n, r) : --u || l.resolveWith(n, r);
          };
        }
        var i,
          n,
          r,
          o = 0,
          s = e.call(arguments),
          a = s.length,
          u = 1 !== a || (e && h.isFunction(e.promise)) ? a : 0,
          l = 1 === u ? e : h.Deferred();
        if (1 < a)
          for (i = new Array(a), n = new Array(a), r = new Array(a); o < a; o++)
            s[o] && h.isFunction(s[o].promise)
              ? s[o]
                  .promise()
                  .done(t(o, r, s))
                  .fail(l.reject)
                  .progress(t(o, n, i))
              : --u;
        return u || l.resolveWith(r, s), l.promise();
      },
    }),
    (h.fn.ready = function (e) {
      return h.ready.promise().done(e), this;
    }),
    h.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (e) {
        e ? h.readyWait++ : h.ready(!0);
      },
      ready: function (e) {
        (!0 === e ? --h.readyWait : h.isReady) ||
          ((h.isReady = !0) !== e && 0 < --h.readyWait) ||
          (le.resolveWith(f, [h]),
          h.fn.trigger && h(f).trigger("ready").off("ready"));
      },
    }),
    (h.ready.promise = function (e) {
      return (
        le ||
          ((le = h.Deferred()),
          "complete" === f.readyState
            ? setTimeout(h.ready)
            : (f.addEventListener("DOMContentLoaded", j, !1),
              e.addEventListener("load", j, !1))),
        le.promise(e)
      );
    }),
    h.ready.promise();
  var S = (h.access = function (e, t, n, r, i, o, s) {
    var a = 0,
      u = e.length,
      l = null == n;
    if ("object" === h.type(n))
      for (a in ((i = !0), n)) h.access(e, t, a, n[a], !0, o, s);
    else if (
      void 0 !== r &&
      ((i = !0),
      h.isFunction(r) || (s = !0),
      l &&
        (t = s
          ? (t.call(e, r), null)
          : ((l = t),
            function (e, t, n) {
              return l.call(h(e), n);
            })),
      t)
    )
      for (; a < u; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  });
  function A() {
    Object.defineProperty((this.cache = {}), 0, {
      get: function () {
        return {};
      },
    }),
      (this.expando = h.expando + Math.random());
  }
  (h.acceptData = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  }),
    (A.uid = 1),
    (A.accepts = h.acceptData),
    (A.prototype = {
      key: function (t) {
        if (!A.accepts(t)) return 0;
        var n = {},
          r = t[this.expando];
        if (!r) {
          r = A.uid++;
          try {
            (n[this.expando] = { value: r }), Object.defineProperties(t, n);
          } catch (e) {
            (n[this.expando] = r), h.extend(t, n);
          }
        }
        return this.cache[r] || (this.cache[r] = {}), r;
      },
      set: function (e, t, n) {
        var r,
          e = this.key(e),
          i = this.cache[e];
        if ("string" == typeof t) i[t] = n;
        else if (h.isEmptyObject(i)) h.extend(this.cache[e], t);
        else for (r in t) i[r] = t[r];
        return i;
      },
      get: function (e, t) {
        return (e = this.cache[this.key(e)]), void 0 === t ? e : e[t];
      },
      access: function (e, t, n) {
        var r;
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? void 0 !== (r = this.get(e, t))
            ? r
            : this.get(e, h.camelCase(t))
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r,
          e = this.key(e),
          i = this.cache[e];
        if (void 0 === t) this.cache[e] = {};
        else
          for (
            n = (r = h.isArray(t)
              ? t.concat(t.map(h.camelCase))
              : ((e = h.camelCase(t)),
                (t in i) ? [t, e] : ((r = e) in i) ? [r] : r.match(E) || []))
              .length;
            n--;

          )
            delete i[r[n]];
      },
      hasData: function (e) {
        return !h.isEmptyObject(this.cache[e[this.expando]] || {});
      },
      discard: function (e) {
        e[this.expando] && delete this.cache[e[this.expando]];
      },
    });
  var L = new A(),
    q = new A(),
    H = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    O = /([A-Z])/g;
  function F(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(O, "-$1").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            "true" === n ||
            ("false" !== n &&
              ("null" === n
                ? null
                : +n + "" === n
                ? +n
                : H.test(n)
                ? h.parseJSON(n)
                : n));
        } catch (e) {}
        q.set(e, t, n);
      } else n = void 0;
    return n;
  }
  function P(e, t) {
    return (
      (e = t || e),
      "none" === h.css(e, "display") || !h.contains(e.ownerDocument, e)
    );
  }
  h.extend({
    hasData: function (e) {
      return q.hasData(e) || L.hasData(e);
    },
    data: function (e, t, n) {
      return q.access(e, t, n);
    },
    removeData: function (e, t) {
      q.remove(e, t);
    },
    _data: function (e, t, n) {
      return L.access(e, t, n);
    },
    _removeData: function (e, t) {
      L.remove(e, t);
    },
  }),
    h.fn.extend({
      data: function (r, e) {
        var t,
          n,
          i,
          o = this[0],
          s = o && o.attributes;
        if (void 0 !== r)
          return "object" == typeof r
            ? this.each(function () {
                q.set(this, r);
              })
            : S(
                this,
                function (t) {
                  var e,
                    n = h.camelCase(r);
                  if (o && void 0 === t) {
                    if (
                      void 0 !== (e = q.get(o, r)) ||
                      void 0 !== (e = q.get(o, n)) ||
                      void 0 !== (e = F(o, n, void 0))
                    )
                      return e;
                  } else
                    this.each(function () {
                      var e = q.get(this, n);
                      q.set(this, n, t),
                        -1 !== r.indexOf("-") &&
                          void 0 !== e &&
                          q.set(this, r, t);
                    });
                },
                null,
                e,
                1 < arguments.length,
                null,
                !0
              );
        if (
          this.length &&
          ((i = q.get(o)), 1 === o.nodeType && !L.get(o, "hasDataAttrs"))
        ) {
          for (t = s.length; t--; )
            0 === (n = s[t].name).indexOf("data-") &&
              F(o, (n = h.camelCase(n.slice(5))), i[n]);
          L.set(o, "hasDataAttrs", !0);
        }
        return i;
      },
      removeData: function (e) {
        return this.each(function () {
          q.remove(this, e);
        });
      },
    }),
    h.extend({
      queue: function (e, t, n) {
        var r;
        return e
          ? ((t = (t || "fx") + "queue"),
            (r = L.get(e, t)),
            n &&
              (!r || h.isArray(n)
                ? (r = L.access(e, t, h.makeArray(n)))
                : r.push(n)),
            r || [])
          : void 0;
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = h.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = h._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                h.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          L.get(e, n) ||
          L.access(e, n, {
            empty: h.Callbacks("once memory").add(function () {
              L.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    h.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? h.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = h.queue(this, t, n);
                h._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && h.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          h.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        function n() {
          --i || o.resolveWith(s, [s]);
        }
        var r,
          i = 1,
          o = h.Deferred(),
          s = this,
          a = this.length;
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          a--;

        )
          (r = L.get(s[a], e + "queueHooks")) &&
            r.empty &&
            (i++, r.empty.add(n));
        return n(), o.promise(t);
      },
    });
  var M = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    R = ["Top", "Right", "Bottom", "Left"],
    W = /^(?:checkbox|radio)$/i;
  ((e = f
    .createDocumentFragment()
    .appendChild(f.createElement("div"))).innerHTML =
    "<input type='radio' checked='checked' name='t'/>"),
    (p.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (e.innerHTML = "<textarea>x</textarea>"),
    (p.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue);
  var $ = "undefined";
  p.focusinBubbles = "onfocusin" in n;
  var B = /^key/,
    I = /^(?:mouse|contextmenu)|click/,
    _ = /^(?:focusinfocus|focusoutblur)$/,
    X = /^([^.]*)(?:\.(.+)|)$/;
  function z() {
    return !0;
  }
  function U() {
    return !1;
  }
  function V() {
    try {
      return f.activeElement;
    } catch (e) {}
  }
  (h.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        s,
        a,
        u,
        l,
        c,
        f,
        p,
        d,
        h = L.get(t);
      if (h)
        for (
          n.handler && ((n = (o = n).handler), (i = o.selector)),
            n.guid || (n.guid = r.guid++),
            (a = h.events) || (a = h.events = {}),
            (s = h.handle) ||
              (s = h.handle =
                function (e) {
                  return r.event.triggered !== e.type
                    ? r.event.dispatch.apply(t, arguments)
                    : void 0;
                }),
            u = (e = (e || "").match(E) || [""]).length;
          u--;

        )
          (f = d = (l = X.exec(e[u]) || [])[1]),
            (p = (l[2] || "").split(".").sort()),
            f &&
              ((c = r.event.special[f] || {}),
              (f = (i ? c.delegateType : c.bindType) || f),
              (c = r.event.special[f] || {}),
              (l = r.extend(
                {
                  type: f,
                  origType: d,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && r.expr.match.needsContext.test(i),
                  namespace: p.join("."),
                },
                o
              )),
              (d = a[f]) ||
                (((d = a[f] = []).delegateCount = 0),
                (c.setup && !1 !== c.setup.call(t, r, p, s)) ||
                  (t.addEventListener && t.addEventListener(f, s, !1))),
              c.add &&
                (c.add.call(t, l), l.handler.guid || (l.handler.guid = n.guid)),
              i ? d.splice(d.delegateCount++, 0, l) : d.push(l),
              (r.event.global[f] = !0));
    },
    remove: function (e, t, n, r, i) {
      var o,
        s,
        a,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        m = L.hasData(e) && L.get(e);
      if (m && (u = m.events)) {
        for (l = (t = (t || "").match(E) || [""]).length; l--; )
          if (
            ((d = g = (a = X.exec(t[l]) || [])[1]),
            (h = (a[2] || "").split(".").sort()),
            d)
          ) {
            for (
              f = s.event.special[d] || {},
                p = u[(d = (r ? f.delegateType : f.bindType) || d)] || [],
                a =
                  a[2] &&
                  new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                s = o = p.length;
              o--;

            )
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (a && !a.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            s &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, m.handle)) ||
                s.removeEvent(e, d, m.handle),
              delete u[d]);
          } else for (d in u) s.event.remove(e, d + t[l], n, r, !0);
        s.isEmptyObject(u) && (delete m.handle, L.remove(e, "events"));
      }
    },
    trigger: function (e, t, n, r) {
      var i,
        o,
        s,
        a,
        u,
        l,
        c = [n || i],
        f = r.call(e, "type") ? e.type : e,
        p = r.call(e, "namespace") ? e.namespace.split(".") : [],
        d = (o = n = n || i);
      if (
        3 !== n.nodeType &&
        8 !== n.nodeType &&
        !_.test(f + h.event.triggered) &&
        (0 <= f.indexOf(".") && ((f = (p = f.split(".")).shift()), p.sort()),
        (a = f.indexOf(":") < 0 && "on" + f),
        ((e = e[h.expando]
          ? e
          : new h.Event(f, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
        (e.namespace = p.join(".")),
        (e.namespace_re = e.namespace
          ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)")
          : null),
        (e.result = void 0),
        e.target || (e.target = n),
        (t = null == t ? [e] : h.makeArray(t, [e])),
        (l = h.event.special[f] || {}),
        r || !l.trigger || !1 !== l.trigger.apply(n, t))
      ) {
        if (!r && !l.noBubble && !h.isWindow(n)) {
          for (
            s = l.delegateType || f, _.test(s + f) || (d = d.parentNode);
            d;
            d = d.parentNode
          )
            c.push(d), (o = d);
          o === (n.ownerDocument || i) &&
            c.push(o.defaultView || o.parentWindow || e);
        }
        for (i = 0; (d = c[i++]) && !e.isPropagationStopped(); )
          (e.type = 1 < i ? s : l.bindType || f),
            (u = (L.get(d, "events") || {})[e.type] && L.get(d, "handle")) &&
              u.apply(d, t),
            (u = a && d[a]) &&
              u.apply &&
              h.acceptData(d) &&
              ((e.result = u.apply(d, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = f),
          r ||
            e.isDefaultPrevented() ||
            (l._default && !1 !== l._default.apply(c.pop(), t)) ||
            !h.acceptData(n) ||
            (a &&
              h.isFunction(n[f]) &&
              !h.isWindow(n) &&
              ((o = n[a]) && (n[a] = null),
              n[(h.event.triggered = f)](),
              (h.event.triggered = void 0),
              o && (n[a] = o))),
          e.result
        );
      }
    },
    dispatch: function (e) {
      e = h.event.fix(e);
      var t,
        n,
        r,
        i,
        o,
        s = u.call(arguments),
        a = (L.get(this, "events") || {})[e.type] || [],
        u = h.event.special[e.type] || {};
      if (
        (((s[0] = e).delegateTarget = this),
        !u.preDispatch || !1 !== u.preDispatch.call(this, e))
      ) {
        for (
          o = h.event.handlers.call(this, e, a), t = 0;
          (r = o[t++]) && !e.isPropagationStopped();

        )
          for (
            e.currentTarget = r.elem, n = 0;
            (i = r.handlers[n++]) && !e.isImmediatePropagationStopped();

          )
            (e.namespace_re && !e.namespace_re.test(i.namespace)) ||
              ((e.handleObj = i),
              (e.data = i.data),
              void 0 !==
                (i = (
                  (h.event.special[i.origType] || {}).handle || i.handler
                ).apply(r.elem, s)) &&
                !1 === (e.result = i) &&
                (e.preventDefault(), e.stopPropagation()));
        return u.postDispatch && u.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        s = [],
        a = t.delegateCount,
        u = e.target;
      if (a && u.nodeType && (!e.button || "click" !== e.type))
        for (; u !== this; u = u.parentNode || this)
          if (!0 !== u.disabled || "click" !== e.type) {
            for (r = [], n = 0; n < a; n++)
              void 0 === r[(i = (o = t[n]).selector + " ")] &&
                (r[i] = o.needsContext
                  ? 0 <= h(i, this).index(u)
                  : h.find(i, this, null, [u]).length),
                r[i] && r.push(o);
            r.length && s.push({ elem: u, handlers: r });
          }
      return a < t.length && s.push({ elem: this, handlers: t.slice(a) }), s;
    },
    props:
      "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (e, t) {
        return (
          null == e.which &&
            (e.which = null != t.charCode ? t.charCode : t.keyCode),
          e
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (e, t) {
        var n,
          r,
          i = t.button;
        return (
          null == e.pageX &&
            null != t.clientX &&
            ((n = (r = e.target.ownerDocument || f).documentElement),
            (r = r.body),
            (e.pageX =
              t.clientX +
              ((n && n.scrollLeft) || (r && r.scrollLeft) || 0) -
              ((n && n.clientLeft) || (r && r.clientLeft) || 0)),
            (e.pageY =
              t.clientY +
              ((n && n.scrollTop) || (r && r.scrollTop) || 0) -
              ((n && n.clientTop) || (r && r.clientTop) || 0))),
          e.which ||
            void 0 === i ||
            (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0),
          e
        );
      },
    },
    fix: function (e) {
      if (e[h.expando]) return e;
      var t,
        n,
        r,
        i = e.type,
        o = e,
        s = this.fixHooks[i];
      for (
        s ||
          (this.fixHooks[i] = s =
            I.test(i) ? this.mouseHooks : B.test(i) ? this.keyHooks : {}),
          r = s.props ? this.props.concat(s.props) : this.props,
          e = new h.Event(o),
          t = r.length;
        t--;

      )
        e[(n = r[t])] = o[n];
      return (
        e.target || (e.target = f),
        3 === e.target.nodeType && (e.target = e.target.parentNode),
        s.filter ? s.filter(e, o) : e
      );
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          return this !== V() && this.focus ? (this.focus(), !1) : void 0;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === V() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          return "checkbox" === this.type &&
            this.click &&
            h.nodeName(this, "input")
            ? (this.click(), !1)
            : void 0;
        },
        _default: function (e) {
          return h.nodeName(e.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && (e.originalEvent.returnValue = e.result);
        },
      },
    },
    simulate: function (e, t, n, r) {
      (e = h.extend(new h.Event(), n, {
        type: e,
        isSimulated: !0,
        originalEvent: {},
      })),
        r ? h.event.trigger(e, null, t) : h.event.dispatch.call(t, e),
        e.isDefaultPrevented() && n.preventDefault();
    },
  }),
    (h.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n, !1);
    }),
    (h.Event = function (e, t) {
      return this instanceof h.Event
        ? (e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented &&
                  e.getPreventDefault &&
                  e.getPreventDefault())
                  ? z
                  : U))
            : (this.type = e),
          t && h.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || h.now()),
          void (this[h.expando] = !0))
        : new h.Event(e, t);
    }),
    (h.Event.prototype = {
      isDefaultPrevented: U,
      isPropagationStopped: U,
      isImmediatePropagationStopped: U,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = z),
          e && e.preventDefault && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = z),
          e && e.stopPropagation && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        (this.isImmediatePropagationStopped = z), this.stopPropagation();
      },
    }),
    h.each(
      { mouseenter: "mouseover", mouseleave: "mouseout" },
      function (e, i) {
        h.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || h.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      }
    ),
    p.focusinBubbles ||
      h.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
        function i(e) {
          h.event.simulate(r, e.target, h.event.fix(e), !0);
        }
        h.event.special[r] = {
          setup: function () {
            var e = this.ownerDocument || this,
              t = L.access(e, r);
            t || e.addEventListener(n, i, !0), L.access(e, r, (t || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this,
              t = L.access(e, r) - 1;
            t
              ? L.access(e, r, t)
              : (e.removeEventListener(n, i, !0), L.remove(e, r));
          },
        };
      }),
    h.fn.extend({
      on: function (e, t, n, r, i) {
        var o, s;
        if ("object" == typeof e) {
          for (s in ("string" != typeof t && ((n = n || t), (t = void 0)), e))
            this.on(s, t, n, e[s], i);
          return this;
        }
        if (
          (null == n && null == r
            ? ((r = t), (n = t = void 0))
            : null == r &&
              ("string" == typeof t
                ? ((r = n), (n = void 0))
                : ((r = n), (n = t), (t = void 0))),
          !1 === r)
        )
          r = U;
        else if (!r) return this;
        return (
          1 === i &&
            ((o = r),
            ((r = function (e) {
              return h().off(e), o.apply(this, arguments);
            }).guid = o.guid || (o.guid = h.guid++))),
          this.each(function () {
            h.event.add(this, e, r, n, t);
          })
        );
      },
      one: function (e, t, n, r) {
        return this.on(e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            h(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" != typeof e)
          return (
            (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
            !1 === n && (n = U),
            this.each(function () {
              h.event.remove(this, e, n, t);
            })
          );
        for (i in e) this.off(i, t, e[i]);
        return this;
      },
      trigger: function (e, t) {
        return this.each(function () {
          h.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        return n ? h.event.trigger(e, t, n, !0) : void 0;
      },
    });
  var Y =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    G = /<([\w:]+)/,
    Q = /<|&#?\w+;/,
    J = /<(?:script|style|link)/i,
    K = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Z = /^$|\/(?:java|ecma)script/i,
    ee = /^true\/(.*)/,
    te = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    ne = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  function re(e, t) {
    return h.nodeName(e, "table") &&
      h.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr")
      ? e.getElementsByTagName("tbody")[0] ||
          e.appendChild(e.ownerDocument.createElement("tbody"))
      : e;
  }
  function ie(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function oe(e) {
    var t = ee.exec(e.type);
    return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
  }
  function se(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      L.set(e[n], "globalEval", !t || L.get(t[n], "globalEval"));
  }
  function ae(e, t) {
    var n, r, i, o, s, a;
    if (1 === t.nodeType) {
      if (
        L.hasData(e) &&
        ((o = L.access(e)), (s = L.set(t, o)), (a = o.events))
      )
        for (i in (delete s.handle, (s.events = {}), a))
          for (n = 0, r = a[i].length; n < r; n++) h.event.add(t, i, a[i][n]);
      q.hasData(e) && ((e = q.access(e)), (e = h.extend({}, e)), q.set(t, e));
    }
  }
  function ue(e, t) {
    var n = e.getElementsByTagName
      ? e.getElementsByTagName(t || "*")
      : e.querySelectorAll
      ? e.querySelectorAll(t || "*")
      : [];
    return void 0 === t || (t && h.nodeName(e, t)) ? h.merge([e], n) : n;
  }
  (ne.optgroup = ne.option),
    (ne.tbody = ne.tfoot = ne.colgroup = ne.caption = ne.thead),
    (ne.th = ne.td),
    h.extend({
      clone: function (e, t, n) {
        var r,
          i,
          o,
          s,
          a,
          u,
          l,
          c = e.cloneNode(!0),
          f = h.contains(e.ownerDocument, e);
        if (
          !(
            p.noCloneChecked ||
            (1 !== e.nodeType && 11 !== e.nodeType) ||
            h.isXMLDoc(e)
          )
        )
          for (s = ue(c), r = 0, i = (o = ue(e)).length; r < i; r++)
            (a = o[r]),
              "input" === (l = (u = s[r]).nodeName.toLowerCase()) &&
              W.test(a.type)
                ? (u.checked = a.checked)
                : ("input" !== l && "textarea" !== l) ||
                  (u.defaultValue = a.defaultValue);
        if (t)
          if (n)
            for (
              o = o || ue(e), s = s || ue(c), r = 0, i = o.length;
              r < i;
              r++
            )
              ae(o[r], s[r]);
          else ae(e, c);
        return (
          0 < (s = ue(c, "script")).length && se(s, !f && ue(e, "script")), c
        );
      },
      buildFragment: function (e, t, n, r) {
        for (
          var i,
            o,
            s,
            a,
            u,
            l = t.createDocumentFragment(),
            c = [],
            f = 0,
            p = e.length;
          f < p;
          f++
        )
          if ((i = e[f]) || 0 === i)
            if ("object" === h.type(i)) h.merge(c, i.nodeType ? [i] : i);
            else if (Q.test(i)) {
              for (
                o = o || l.appendChild(t.createElement("div")),
                  s =
                    ne[(G.exec(i) || ["", ""])[1].toLowerCase()] || ne._default,
                  o.innerHTML = s[1] + i.replace(Y, "<$1></$2>") + s[2],
                  u = s[0];
                u--;

              )
                o = o.lastChild;
              h.merge(c, o.childNodes), ((o = l.firstChild).textContent = "");
            } else c.push(t.createTextNode(i));
        for (l.textContent = "", f = 0; (i = c[f++]); )
          if (
            (!r || -1 === h.inArray(i, r)) &&
            ((a = h.contains(i.ownerDocument, i)),
            (o = ue(l.appendChild(i), "script")),
            a && se(o),
            n)
          )
            for (u = 0; (i = o[u++]); ) Z.test(i.type || "") && n.push(i);
        return l;
      },
      cleanData: function (e) {
        for (
          var t, n, r, i, o, s, a = h.event.special, u = 0;
          void 0 !== (n = e[u]);
          u++
        ) {
          if (h.acceptData(n) && (o = n[L.expando]) && (t = L.cache[o])) {
            if ((r = Object.keys(t.events || {})).length)
              for (s = 0; void 0 !== (i = r[s]); s++)
                a[i] ? h.event.remove(n, i) : h.removeEvent(n, i, t.handle);
            L.cache[o] && delete L.cache[o];
          }
          delete q.cache[n[q.expando]];
        }
      },
    }),
    h.fn.extend({
      text: function (e) {
        return S(
          this,
          function (e) {
            return void 0 === e
              ? h.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return this.domManip(arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            re(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return this.domManip(arguments, function (e) {
          var t;
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            (t = re(this, e)).insertBefore(e, t.firstChild);
        });
      },
      before: function () {
        return this.domManip(arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return this.domManip(arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      remove: function (e, t) {
        for (
          var n, r = e ? h.filter(e, this) : this, i = 0;
          null != (n = r[i]);
          i++
        )
          t || 1 !== n.nodeType || h.cleanData(ue(n)),
            n.parentNode &&
              (t && h.contains(n.ownerDocument, n) && se(ue(n, "script")),
              n.parentNode.removeChild(n));
        return this;
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (h.cleanData(ue(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return h.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return S(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !J.test(e) &&
              !ne[(G.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = e.replace(Y, "<$1></$2>");
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (h.cleanData(ue(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var t = arguments[0];
        return (
          this.domManip(arguments, function (e) {
            (t = this.parentNode),
              h.cleanData(ue(this)),
              t && t.replaceChild(e, this);
          }),
          t && (t.length || t.nodeType) ? this : this.remove()
        );
      },
      detach: function (e) {
        return this.remove(e, !0);
      },
      domManip: function (n, r) {
        n = n.apply([], n);
        var e,
          t,
          i,
          o,
          s,
          a,
          u = 0,
          l = this.length,
          c = this,
          f = l - 1,
          p = n[0],
          d = h.isFunction(p);
        if (d || (1 < l && "string" == typeof p && !f.checkClone && K.test(p)))
          return this.each(function (e) {
            var t = c.eq(e);
            d && (n[0] = p.call(this, e, t.html())), t.domManip(n, r);
          });
        if (
          l &&
          ((t = (e = h.buildFragment(n, this[0].ownerDocument, !1, this))
            .firstChild),
          1 === e.childNodes.length && (e = t),
          t)
        ) {
          for (o = (i = h.map(ue(e, "script"), ie)).length; u < l; u++)
            (s = e),
              u !== f &&
                ((s = h.clone(s, !0, !0)), o && h.merge(i, ue(s, "script"))),
              r.call(this[u], s, u);
          if (o)
            for (
              a = i[i.length - 1].ownerDocument, h.map(i, oe), u = 0;
              u < o;
              u++
            )
              (s = i[u]),
                Z.test(s.type || "") &&
                  !L.access(s, "globalEval") &&
                  h.contains(a, s) &&
                  (s.src
                    ? h._evalUrl && h._evalUrl(s.src)
                    : h.globalEval(s.textContent.replace(te, "")));
        }
        return this;
      },
    }),
    h.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, s) {
        h.fn[e] = function (e) {
          for (var t, n = [], r = h(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              h(r[o])[s](t),
              i.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var le,
    ce,
    fe = {};
  function pe(e, t) {
    return (
      (e = h(t.createElement(e)).appendTo(t.body)),
      (t = n.getDefaultComputedStyle
        ? n.getDefaultComputedStyle(e[0]).display
        : h.css(e[0], "display")),
      e.detach(),
      t
    );
  }
  function de(e) {
    var t = f,
      n = fe[e];
    return (
      n ||
        (("none" !== (n = pe(e, t)) && n) ||
          ((t = (ce = (
            ce || h("<iframe frameborder='0' width='0' height='0'/>")
          ).appendTo(t.documentElement))[0].contentDocument).write(),
          t.close(),
          (n = pe(e, t)),
          ce.detach()),
        (fe[e] = n)),
      n
    );
  }
  var he,
    ge,
    me,
    ve,
    ye,
    xe = /^margin/,
    be = new RegExp("^(" + M + ")(?!px)[a-z%]+$", "i"),
    we = function (e) {
      return e.ownerDocument.defaultView.getComputedStyle(e, null);
    };
  function Te(e, t, n) {
    var r,
      i,
      o = e.style;
    return (
      (n = n || we(e)) && (i = n.getPropertyValue(t) || n[t]),
      n &&
        ("" !== i || h.contains(e.ownerDocument, e) || (i = h.style(e, t)),
        be.test(i) &&
          xe.test(t) &&
          ((r = o.width),
          (e = o.minWidth),
          (t = o.maxWidth),
          (o.minWidth = o.maxWidth = o.width = i),
          (i = n.width),
          (o.width = r),
          (o.minWidth = e),
          (o.maxWidth = t))),
      void 0 !== i ? i + "" : i
    );
  }
  function Ce(e, t) {
    return {
      get: function () {
        return e()
          ? void delete this.get
          : (this.get = t).apply(this, arguments);
      },
    };
  }
  function Ne() {
    (ye.style.cssText =
      "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%"),
      me.appendChild(ve);
    var e = ye.getComputedStyle(ye, null);
    (he = "1%" !== e.top), (ge = "4px" === e.width), me.removeChild(ve);
  }
  (me = f.documentElement),
    (ve = f.createElement("div")),
    ((ye = f.createElement("div")).style.backgroundClip = "content-box"),
    (ye.cloneNode(!0).style.backgroundClip = ""),
    (p.clearCloneStyle = "content-box" === ye.style.backgroundClip),
    (ve.style.cssText =
      "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px"),
    ve.appendChild(ye),
    ye.getComputedStyle &&
      h.extend(p, {
        pixelPosition: function () {
          return Ne(), he;
        },
        boxSizingReliable: function () {
          return null == ge && Ne(), ge;
        },
        reliableMarginRight: function () {
          var e = ye.appendChild(f.createElement("div"));
          return (
            (e.style.cssText = ye.style.cssText =
              "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box"),
            (e.style.marginRight = e.style.width = "0"),
            (ye.style.width = "1px"),
            me.appendChild(ve),
            (e = !parseFloat(ye.getComputedStyle(e, null).marginRight)),
            me.removeChild(ve),
            (ye.innerHTML = ""),
            e
          );
        },
      }),
    (h.swap = function (e, t, n, r) {
      var i,
        o = {};
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((r = n.apply(e, r || [])), t)) e.style[i] = o[i];
      return r;
    });
  var ke = /^(none|table(?!-c[ea]).+)/,
    Ee = new RegExp("^(" + M + ")(.*)$", "i"),
    De = new RegExp("^([+-])=(" + M + ")", "i"),
    je = { position: "absolute", visibility: "hidden", display: "block" },
    Se = { letterSpacing: 0, fontWeight: 400 },
    Ae = ["Webkit", "O", "Moz", "ms"];
  function Le(e, t) {
    if (t in e) return t;
    for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Ae.length; i--; )
      if ((t = Ae[i] + n) in e) return t;
    return r;
  }
  function qe(e, t, n) {
    var r = Ee.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
  }
  function He(e, t, n, r, i) {
    for (
      var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
        s = 0;
      o < 4;
      o += 2
    )
      "margin" === n && (s += h.css(e, n + R[o], !0, i)),
        r
          ? ("content" === n && (s -= h.css(e, "padding" + R[o], !0, i)),
            "margin" !== n && (s -= h.css(e, "border" + R[o] + "Width", !0, i)))
          : ((s += h.css(e, "padding" + R[o], !0, i)),
            "padding" !== n &&
              (s += h.css(e, "border" + R[o] + "Width", !0, i)));
    return s;
  }
  function Oe(e, t, n) {
    var r = !0,
      i = "width" === t ? e.offsetWidth : e.offsetHeight,
      o = we(e),
      s = "border-box" === h.css(e, "boxSizing", !1, o);
    if (i <= 0 || null == i) {
      if (
        (((i = Te(e, t, o)) < 0 || null == i) && (i = e.style[t]), be.test(i))
      )
        return i;
      (r = s && (p.boxSizingReliable() || i === e.style[t])),
        (i = parseFloat(i) || 0);
    }
    return i + He(e, t, n || (s ? "border" : "content"), r, o) + "px";
  }
  function Fe(e, t) {
    for (var n, r, i, o = [], s = 0, a = e.length; s < a; s++)
      (r = e[s]).style &&
        ((o[s] = L.get(r, "olddisplay")),
        (n = r.style.display),
        t
          ? (o[s] || "none" !== n || (r.style.display = ""),
            "" === r.style.display &&
              P(r) &&
              (o[s] = L.access(r, "olddisplay", de(r.nodeName))))
          : o[s] ||
            ((i = P(r)),
            ((n && "none" !== n) || !i) &&
              L.set(r, "olddisplay", i ? n : h.css(r, "display"))));
    for (s = 0; s < a; s++)
      (r = e[s]).style &&
        ((t && "none" !== r.style.display && "" !== r.style.display) ||
          (r.style.display = t ? o[s] || "" : "none"));
    return e;
  }
  function Pe(e, t, n, r, i) {
    return new Pe.prototype.init(e, t, n, r, i);
  }
  h.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) return "" === (e = Te(e, "opacity")) ? "1" : e;
        },
      },
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: "cssFloat" },
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          s,
          a = h.camelCase(t),
          u = e.style;
        return (
          (t = h.cssProps[a] || (h.cssProps[a] = Le(u, a))),
          (s = h.cssHooks[t] || h.cssHooks[a]),
          void 0 === n
            ? s && "get" in s && void 0 !== (i = s.get(e, !1, r))
              ? i
              : u[t]
            : ("string" == (o = typeof n) &&
                (i = De.exec(n)) &&
                ((n = (i[1] + 1) * i[2] + parseFloat(h.css(e, t))),
                (o = "number")),
              void (
                null != n &&
                n == n &&
                ("number" !== o || h.cssNumber[a] || (n += "px"),
                p.clearCloneStyle ||
                  "" !== n ||
                  0 !== t.indexOf("background") ||
                  (u[t] = "inherit"),
                (s && "set" in s && void 0 === (n = s.set(e, n, r))) ||
                  ((u[t] = ""), (u[t] = n)))
              ))
        );
      }
    },
    css: function (e, t, n, r) {
      var i,
        o = h.camelCase(t);
      return (
        (t = h.cssProps[o] || (h.cssProps[o] = Le(e.style, o))),
        (o = h.cssHooks[t] || h.cssHooks[o]) &&
          "get" in o &&
          (i = o.get(e, !0, n)),
        void 0 === i && (i = Te(e, t, r)),
        "normal" === i && t in Se && (i = Se[t]),
        "" === n || n
          ? ((t = parseFloat(i)), !0 === n || h.isNumeric(t) ? t || 0 : i)
          : i
      );
    },
  }),
    h.each(["height", "width"], function (e, i) {
      h.cssHooks[i] = {
        get: function (e, t, n) {
          return t
            ? 0 === e.offsetWidth && ke.test(h.css(e, "display"))
              ? h.swap(e, je, function () {
                  return Oe(e, i, n);
                })
              : Oe(e, i, n)
            : void 0;
        },
        set: function (e, t, n) {
          var r = n && we(e);
          return qe(
            0,
            t,
            n
              ? He(e, i, n, "border-box" === h.css(e, "boxSizing", !1, r), r)
              : 0
          );
        },
      };
    }),
    (h.cssHooks.marginRight = Ce(p.reliableMarginRight, function (e, t) {
      return t
        ? h.swap(e, { display: "inline-block" }, Te, [e, "marginRight"])
        : void 0;
    })),
    h.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
      (h.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[i + R[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        xe.test(i) || (h.cssHooks[i + o].set = qe);
    }),
    h.fn.extend({
      css: function (e, t) {
        return S(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              s = 0;
            if (h.isArray(t)) {
              for (r = we(e), i = t.length; s < i; s++)
                o[t[s]] = h.css(e, t[s], !1, r);
              return o;
            }
            return void 0 !== n ? h.style(e, t, n) : h.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
      show: function () {
        return Fe(this, !0);
      },
      hide: function () {
        return Fe(this);
      },
      toggle: function (e) {
        return "boolean" == typeof e
          ? e
            ? this.show()
            : this.hide()
          : this.each(function () {
              P(this) ? h(this).show() : h(this).hide();
            });
      },
    }),
    ((h.Tween = Pe).prototype = {
      constructor: Pe,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || "swing"),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (h.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = Pe.propHooks[this.prop];
        return (e && e.get ? e : Pe.propHooks._default).get(this);
      },
      run: function (e) {
        var t = Pe.propHooks[this.prop];
        return (
          (this.pos = e =
            this.options.duration
              ? h.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                )
              : e),
          (this.now = (this.end - this.start) * e + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          (t && t.set ? t : Pe.propHooks._default).set(this),
          this
        );
      },
    }),
    (Pe.prototype.init.prototype = Pe.prototype),
    (Pe.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return null == e.elem[e.prop] ||
            (e.elem.style && null != e.elem.style[e.prop])
            ? (t = h.css(e.elem, e.prop, "")) && "auto" !== t
              ? t
              : 0
            : e.elem[e.prop];
        },
        set: function (e) {
          h.fx.step[e.prop]
            ? h.fx.step[e.prop](e)
            : e.elem.style &&
              (null != e.elem.style[h.cssProps[e.prop]] || h.cssHooks[e.prop])
            ? h.style(e.elem, e.prop, e.now + e.unit)
            : (e.elem[e.prop] = e.now);
        },
      },
    }),
    (Pe.propHooks.scrollTop = Pe.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (h.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
    }),
    (h.fx = Pe.prototype.init),
    (h.fx.step = {});
  var Me,
    Re,
    We = /^(?:toggle|show|hide)$/,
    $e = new RegExp("^(?:([+-])=|)(" + M + ")([a-z%]*)$", "i"),
    Be = /queueHooks$/,
    Ie = [
      function (t, e, n) {
        var r,
          i,
          o,
          s,
          a,
          u,
          l,
          c = this,
          f = {},
          p = t.style,
          d = t.nodeType && P(t),
          h = L.get(t, "fxshow");
        for (r in (n.queue ||
          (null == (a = u._queueHooks(t, "fx")).unqueued &&
            ((a.unqueued = 0),
            (u = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || u();
            })),
          a.unqueued++,
          c.always(function () {
            c.always(function () {
              a.unqueued--, u.queue(t, "fx").length || a.empty.fire();
            });
          })),
        1 === t.nodeType &&
          ("height" in e || "width" in e) &&
          ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
          "none" === (l = u.css(t, "display")) && (l = de(t.nodeName)),
          "inline" === l &&
            "none" === u.css(t, "float") &&
            (p.display = "inline-block")),
        n.overflow &&
          ((p.overflow = "hidden"),
          c.always(function () {
            (p.overflow = n.overflow[0]),
              (p.overflowX = n.overflow[1]),
              (p.overflowY = n.overflow[2]);
          })),
        e))
          if (((i = e[r]), We.exec(i))) {
            if (
              (delete e[r],
              (o = o || "toggle" === i),
              i === (d ? "hide" : "show"))
            ) {
              if ("show" !== i || !h || void 0 === h[r]) continue;
              d = !0;
            }
            f[r] = (h && h[r]) || u.style(t, r);
          }
        if (!u.isEmptyObject(f))
          for (r in (h
            ? "hidden" in h && (d = h.hidden)
            : (h = L.access(t, "fxshow", {})),
          o && (h.hidden = !d),
          d
            ? u(t).show()
            : c.done(function () {
                u(t).hide();
              }),
          c.done(function () {
            for (var e in (L.remove(t, "fxshow"), f)) u.style(t, e, f[e]);
          }),
          f))
            (s = Ue(d ? h[r] : 0, r, c)),
              r in h ||
                ((h[r] = s.start),
                d &&
                  ((s.end = s.start),
                  (s.start = "width" === r || "height" === r ? 1 : 0)));
      },
    ],
    _e = {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t),
            r = n.cur(),
            i = ((t = $e.exec(t)) && t[3]) || (h.cssNumber[e] ? "" : "px"),
            o =
              (h.cssNumber[e] || ("px" !== i && +r)) &&
              $e.exec(h.css(n.elem, e)),
            s = 1,
            a = 20;
          if (o && o[3] !== i)
            for (
              i = i || o[3], t = t || [], o = +r || 1;
              (o /= s = s || ".5"),
                h.style(n.elem, e, o + i),
                s !== (s = n.cur() / r) && 1 !== s && --a;

            );
          return (
            t &&
              ((o = n.start = +o || +r || 0),
              (n.unit = i),
              (n.end = t[1] ? o + (t[1] + 1) * t[2] : +t[2])),
            n
          );
        },
      ],
    };
  function Xe() {
    return (
      setTimeout(function () {
        Me = void 0;
      }),
      (Me = h.now())
    );
  }
  function ze(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = R[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function Ue(e, t, n) {
    for (
      var r, i = (_e[t] || []).concat(_e["*"]), o = 0, s = i.length;
      o < s;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function Ve(e, t, n) {
    var r,
      i,
      o = 0,
      s = Ie.length,
      a = h.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        for (
          var e = Me || Xe(),
            t =
              1 -
              ((e = Math.max(0, l.startTime + l.duration - e)) / l.duration ||
                0),
            n = 0,
            r = l.tweens.length;
          n < r;
          n++
        )
          l.tweens[n].run(t);
        return (
          a.notifyWith(e, [l, t, e]),
          t < 1 && r ? e : (a.resolveWith(e, [l]), !1)
        );
      },
      l = a.promise({
        elem: e,
        props: h.extend({}, t),
        opts: h.extend(!0, { specialEasing: {} }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: Me || Xe(),
        duration: n.duration,
        tweens: [],
        createTween: function (e, t) {
          return (
            (e = h.Tween(
              e,
              l.opts,
              e,
              t,
              l.opts.specialEasing[e] || l.opts.easing
            )),
            l.tweens.push(e),
            e
          );
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (i) return this;
          for (i = !0; t < n; t++) l.tweens[t].run(1);
          return e ? a.resolveWith(e, [l, e]) : a.rejectWith(e, [l, e]), this;
        },
      }),
      c = l.props;
    for (
      (function (e, t) {
        var n, r, i, o, s;
        for (n in e)
          if (
            ((i = t[(r = h.camelCase(n))]),
            (o = e[n]),
            h.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (s = h.cssHooks[r]),
            s && ("expand" in s))
          )
            for (n in ((o = s.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      o < s;
      o++
    )
      if ((r = Ie[o].call(l, e, c, l.opts))) return r;
    return (
      h.map(c, Ue, l),
      h.isFunction(l.opts.start) && l.opts.start.call(e, l),
      h.fx.timer(h.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always)
    );
  }
  (h.Animation = h.extend(Ve, {
    tweener: function (e, t) {
      for (
        var n,
          r = 0,
          i = (e = h.isFunction(e) ? ((t = e), ["*"]) : e.split(" ")).length;
        r < i;
        r++
      )
        (_e[(n = e[r])] = _e[n] || []), _e[n].unshift(t);
    },
    prefilter: function (e, t) {
      t ? Ie.unshift(e) : Ie.push(e);
    },
  })),
    (h.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? h.extend({}, e)
          : {
              complete: n || (!n && t) || (h.isFunction(e) && e),
              duration: e,
              easing: (n && t) || (t && !h.isFunction(t) && t),
            };
      return (
        (r.duration = h.fx.off
          ? 0
          : "number" == typeof r.duration
          ? r.duration
          : r.duration in h.fx.speeds
          ? h.fx.speeds[r.duration]
          : h.fx.speeds._default),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          h.isFunction(r.old) && r.old.call(this),
            r.queue && h.dequeue(this, r.queue);
        }),
        r
      );
    }),
    h.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(P)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        var i = h.isEmptyObject(t),
          o = h.speed(e, n, r);
        return (
          ((r = function () {
            var e = Ve(this, h.extend({}, t), o);
            (i || L.get(this, "finish")) && e.stop(!0);
          }).finish = r),
          i || !1 === o.queue ? this.each(r) : this.queue(o.queue, r)
        );
      },
      stop: function (i, e, o) {
        function s(e) {
          var t = e.stop;
          delete e.stop, t(o);
        }
        return (
          "string" != typeof i && ((o = e), (e = i), (i = void 0)),
          e && !1 !== i && this.queue(i || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = h.timers,
              r = L.get(this);
            if (t) r[t] && r[t].stop && s(r[t]);
            else for (t in r) r[t] && r[t].stop && Be.test(t) && s(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || h.dequeue(this, i);
          })
        );
      },
      finish: function (s) {
        return (
          !1 !== s && (s = s || "fx"),
          this.each(function () {
            var e,
              t = L.get(this),
              n = t[s + "queue"],
              r = t[s + "queueHooks"],
              i = h.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                h.queue(this, s, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === s &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    h.each(["toggle", "show", "hide"], function (e, r) {
      var i = h.fn[r];
      h.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? i.apply(this, arguments)
          : this.animate(ze(r, !0), e, t, n);
      };
    }),
    h.each(
      {
        slideDown: ze("show"),
        slideUp: ze("hide"),
        slideToggle: ze("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, r) {
        h.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (h.timers = []),
    (h.fx.tick = function () {
      var e,
        t = 0,
        n = h.timers;
      for (Me = h.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || h.fx.stop(), (Me = void 0);
    }),
    (h.fx.timer = function (e) {
      h.timers.push(e), e() ? h.fx.start() : h.timers.pop();
    }),
    (h.fx.interval = 13),
    (h.fx.start = function () {
      Re = Re || setInterval(h.fx.tick, h.fx.interval);
    }),
    (h.fx.stop = function () {
      clearInterval(Re), (Re = null);
    }),
    (h.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (h.fn.delay = function (r, e) {
      return (
        (r = (h.fx && h.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = setTimeout(e, r);
          t.stop = function () {
            clearTimeout(n);
          };
        })
      );
    }),
    (n = f.createElement("input")),
    (r = (e = f.createElement("select")).appendChild(
      f.createElement("option")
    )),
    (n.type = "checkbox"),
    (p.checkOn = "" !== n.value),
    (p.optSelected = r.selected),
    (e.disabled = !0),
    (p.optDisabled = !r.disabled),
    ((n = f.createElement("input")).value = "t"),
    (n.type = "radio"),
    (p.radioValue = "t" === n.value);
  var Ye,
    Ge = h.expr.attrHandle;
  h.fn.extend({
    attr: function (e, t) {
      return S(this, h.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        h.removeAttr(this, e);
      });
    },
  }),
    h.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (e && 3 !== o && 8 !== o && 2 !== o)
          return typeof e.getAttribute == $
            ? h.prop(e, t, n)
            : ((1 === o && h.isXMLDoc(e)) ||
                ((t = t.toLowerCase()),
                (r =
                  h.attrHooks[t] || (h.expr.match.bool.test(t) ? Ye : void 0))),
              void 0 === n
                ? (r && "get" in r && null !== (i = r.get(e, t))) ||
                  null != (i = h.find.attr(e, t))
                  ? i
                  : void 0
                : null !== n
                ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                  ? i
                  : (e.setAttribute(t, n + ""), n)
                : void h.removeAttr(e, t));
      },
      removeAttr: function (e, t) {
        var n,
          r,
          i = 0,
          o = t && t.match(E);
        if (o && 1 === e.nodeType)
          for (; (n = o[i++]); )
            (r = h.propFix[n] || n),
              h.expr.match.bool.test(n) && (e[r] = !1),
              e.removeAttribute(n);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!p.radioValue && "radio" === t && h.nodeName(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
    }),
    (Ye = {
      set: function (e, t, n) {
        return !1 === t ? h.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    h.each(h.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var o = Ge[t] || h.find.attr;
      Ge[t] = function (e, t, n) {
        var r, i;
        return (
          n ||
            ((i = Ge[t]),
            (Ge[t] = r),
            (r = null != o(e, t, n) ? t.toLowerCase() : null),
            (Ge[t] = i)),
          r
        );
      };
    });
  var Qe = /^(?:input|select|textarea|button)$/i;
  h.fn.extend({
    prop: function (e, t) {
      return S(this, h.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[h.propFix[e] || e];
      });
    },
  }),
    h.extend({
      propFix: { for: "htmlFor", class: "className" },
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (e && 3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && h.isXMLDoc(e)) ||
              ((t = h.propFix[t] || t), (i = h.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            return e.hasAttribute("tabindex") || Qe.test(e.nodeName) || e.href
              ? e.tabIndex
              : -1;
          },
        },
      },
    }),
    p.optSelected ||
      (h.propHooks.selected = {
        get: function (e) {
          return (
            (e = e.parentNode) && e.parentNode && e.parentNode.selectedIndex,
            null
          );
        },
      }),
    h.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        h.propFix[this.toLowerCase()] = this;
      }
    );
  var Je = /[\t\r\n\f]/g;
  h.fn.extend({
    addClass: function (t) {
      var e,
        n,
        r,
        i,
        o,
        s,
        a = 0,
        u = this.length;
      if (h.isFunction(t))
        return this.each(function (e) {
          h(this).addClass(t.call(this, e, this.className));
        });
      if ("string" == typeof t && t)
        for (e = (t || "").match(E) || []; a < u; a++)
          if (
            (r =
              1 === (n = this[a]).nodeType &&
              (n.className ? (" " + n.className + " ").replace(Je, " ") : " "))
          ) {
            for (o = 0; (i = e[o++]); )
              r.indexOf(" " + i + " ") < 0 && (r += i + " ");
            (s = h.trim(r)), n.className !== s && (n.className = s);
          }
      return this;
    },
    removeClass: function (t) {
      var e,
        n,
        r,
        i,
        o,
        s,
        a = 0 === arguments.length || ("string" == typeof t && t),
        u = 0,
        l = this.length;
      if (h.isFunction(t))
        return this.each(function (e) {
          h(this).removeClass(t.call(this, e, this.className));
        });
      if (a)
        for (e = (t || "").match(E) || []; u < l; u++)
          if (
            (r =
              1 === (n = this[u]).nodeType &&
              (n.className ? (" " + n.className + " ").replace(Je, " ") : ""))
          ) {
            for (o = 0; (i = e[o++]); )
              for (; 0 <= r.indexOf(" " + i + " "); )
                r = r.replace(" " + i + " ", " ");
            (s = t ? h.trim(r) : ""), n.className !== s && (n.className = s);
          }
      return this;
    },
    toggleClass: function (i, t) {
      var o = typeof i;
      return "boolean" == typeof t && "string" == o
        ? t
          ? this.addClass(i)
          : this.removeClass(i)
        : this.each(
            h.isFunction(i)
              ? function (e) {
                  h(this).toggleClass(i.call(this, e, this.className, t), t);
                }
              : function () {
                  if ("string" == o)
                    for (
                      var e, t = 0, n = h(this), r = i.match(E) || [];
                      (e = r[t++]);

                    )
                      n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                  else
                    (o != $ && "boolean" != o) ||
                      (this.className &&
                        L.set(this, "__className__", this.className),
                      (this.className =
                        (!this.className &&
                          !1 !== i &&
                          L.get(this, "__className__")) ||
                        ""));
                }
          );
    },
    hasClass: function (e) {
      for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++)
        if (
          1 === this[n].nodeType &&
          0 <= (" " + this[n].className + " ").replace(Je, " ").indexOf(t)
        )
          return !0;
      return !1;
    },
  });
  var Ke = /\r/g;
  h.fn.extend({
    val: function (t) {
      var n,
        e,
        r,
        i = this[0];
      return arguments.length
        ? ((r = h.isFunction(t)),
          this.each(function (e) {
            1 === this.nodeType &&
              (null == (e = r ? t.call(this, e, h(this).val()) : t)
                ? (e = "")
                : "number" == typeof e
                ? (e += "")
                : h.isArray(e) &&
                  (e = h.map(e, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((n =
                h.valHooks[this.type] ||
                h.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in n &&
                void 0 !== n.set(this, e, "value")) ||
                (this.value = e));
          }))
        : i
        ? (n = h.valHooks[i.type] || h.valHooks[i.nodeName.toLowerCase()]) &&
          "get" in n &&
          void 0 !== (e = n.get(i, "value"))
          ? e
          : "string" == typeof (e = i.value)
          ? e.replace(Ke, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    h.extend({
      valHooks: {
        select: {
          get: function (e) {
            for (
              var t,
                n = e.options,
                r = e.selectedIndex,
                i = "select-one" === e.type || r < 0,
                o = i ? null : [],
                s = i ? r + 1 : n.length,
                a = r < 0 ? s : i ? r : 0;
              a < s;
              a++
            )
              if (
                !(
                  (!(t = n[a]).selected && a !== r) ||
                  (p.optDisabled
                    ? t.disabled
                    : null !== t.getAttribute("disabled")) ||
                  (t.parentNode.disabled &&
                    h.nodeName(t.parentNode, "optgroup"))
                )
              ) {
                if (((t = h(t).val()), i)) return t;
                o.push(t);
              }
            return o;
          },
          set: function (e, t) {
            for (
              var n, r, i = e.options, o = h.makeArray(t), s = i.length;
              s--;

            )
              ((r = i[s]).selected = 0 <= h.inArray(h(r).val(), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    h.each(["radio", "checkbox"], function () {
      (h.valHooks[this] = {
        set: function (e, t) {
          return h.isArray(t)
            ? (e.checked = 0 <= h.inArray(h(e).val(), t))
            : void 0;
        },
      }),
        p.checkOn ||
          (h.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    h.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (e, n) {
        h.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    ),
    h.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
    });
  var Ze = h.now(),
    et = /\?/;
  (h.parseJSON = function (e) {
    return JSON.parse(e + "");
  }),
    (h.parseXML = function (e) {
      var t;
      if (!e || "string" != typeof e) return null;
      try {
        t = new DOMParser().parseFromString(e, "text/xml");
      } catch (e) {
        t = void 0;
      }
      return (
        (t && !t.getElementsByTagName("parsererror").length) ||
          h.error("Invalid XML: " + e),
        t
      );
    });
  var tt,
    nt,
    rt = /#.*$/,
    it = /([?&])_=[^&]*/,
    ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    st = /^(?:GET|HEAD)$/,
    at = /^\/\//,
    ut = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    lt = {},
    ct = {},
    ft = "*/".concat("*");
  try {
    nt = location.href;
  } catch (e) {
    ((nt = f.createElement("a")).href = ""), (nt = nt.href);
  }
  function pt() {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        r = 0,
        i = e.toLowerCase().match(E) || [];
      if (h.isFunction(t))
        for (; (n = i[r++]); )
          "+" === n[0]
            ? (n[(n = n.slice(1) || "*")] = n[n] || []).unshift(t)
            : (n[n] = n[n] || []).push(t);
    };
  }
  function dt(t, e, n, r) {
    var i = {},
      o = t === ct;
    function s(e) {
      var n;
      return (
        (i[e] = !0),
        h.each(t[e] || [], function (e, t) {
          return "string" != typeof (e = t(t, e, r)) || o || i[e]
            ? o
              ? !(n = e)
              : void 0
            : (t.dataTypes.unshift(e), s(e), !1);
        }),
        n
      );
    }
    return s(e.dataTypes[0]) || (!i["*"] && s("*"));
  }
  function ht(e, t) {
    var n,
      r,
      i = h.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : (r = r || {}))[n] = t[n]);
    return r && h.extend(!0, e, r), e;
  }
  (tt = ut.exec(nt.toLowerCase()) || []),
    h.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: nt,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            tt[1]
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": ft,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /xml/, html: /html/, json: /json/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": h.parseJSON,
          "text xml": h.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? ht(ht(e, h.ajaxSettings), t) : ht(h.ajaxSettings, e);
      },
      ajaxPrefilter: pt(),
      ajaxTransport: pt(),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var u,
          l,
          c,
          n,
          f,
          p,
          r,
          d = m.ajaxSetup({}, t),
          h = d.context || d,
          g = d.context && (h.nodeType || h.jquery) ? m(h) : m.event,
          m = m.Deferred(),
          v = m.Callbacks("once memory"),
          y = d.statusCode || {},
          i = {},
          o = {},
          x = 0,
          s = "canceled",
          b = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (2 === x) {
                if (!n)
                  for (n = {}; (t = ot.exec(c)); ) n[t[1].toLowerCase()] = t[2];
                t = n[e.toLowerCase()];
              }
              return null == t ? null : t;
            },
            getAllResponseHeaders: function () {
              return 2 === x ? c : null;
            },
            setRequestHeader: function (e, t) {
              var n = e.toLowerCase();
              return x || (i[(e = o[n] = o[n] || e)] = t), this;
            },
            overrideMimeType: function (e) {
              return x || (d.mimeType = e), this;
            },
            statusCode: function (e) {
              if (e)
                if (x < 2) for (var t in e) y[t] = [y[t], e[t]];
                else b.always(e[b.status]);
              return this;
            },
            abort: function (e) {
              return (e = e || s), u && u.abort(e), a(0, e), this;
            },
          };
        if (
          ((m.promise(b).complete = v.add),
          (b.success = b.done),
          (b.error = b.fail),
          (d.url = ((e || d.url || nt) + "")
            .replace(rt, "")
            .replace(at, tt[1] + "//")),
          (d.type = t.method || t.type || d.method || d.type),
          (d.dataTypes = m
            .trim(d.dataType || "*")
            .toLowerCase()
            .match(E) || [""]),
          null == d.crossDomain &&
            ((e = ut.exec(d.url.toLowerCase())),
            (d.crossDomain = !(
              !e ||
              (e[1] === tt[1] &&
                e[2] === tt[2] &&
                (e[3] || ("http:" === e[1] ? "80" : "443")) ===
                  (tt[3] || ("http:" === tt[1] ? "80" : "443")))
            ))),
          d.data &&
            d.processData &&
            "string" != typeof d.data &&
            (d.data = m.param(d.data, d.traditional)),
          dt(lt, d, 0, b),
          2 === x)
        )
          return b;
        for (r in ((p = d.global) &&
          0 == m.active++ &&
          m.event.trigger("ajaxStart"),
        (d.type = d.type.toUpperCase()),
        (d.hasContent = !st.test(d.type)),
        (l = d.url),
        d.hasContent ||
          (d.data &&
            ((l = d.url += (et.test(l) ? "&" : "?") + d.data), delete d.data),
          !1 === d.cache &&
            (d.url = it.test(l)
              ? l.replace(it, "$1_=" + Ze++)
              : l + (et.test(l) ? "&" : "?") + "_=" + Ze++)),
        d.ifModified &&
          (m.lastModified[l] &&
            b.setRequestHeader("If-Modified-Since", m.lastModified[l]),
          m.etag[l] && b.setRequestHeader("If-None-Match", m.etag[l])),
        ((d.data && d.hasContent && !1 !== d.contentType) || t.contentType) &&
          b.setRequestHeader("Content-Type", d.contentType),
        b.setRequestHeader(
          "Accept",
          d.dataTypes[0] && d.accepts[d.dataTypes[0]]
            ? d.accepts[d.dataTypes[0]] +
                ("*" !== d.dataTypes[0] ? ", " + ft + "; q=0.01" : "")
            : d.accepts["*"]
        ),
        d.headers))
          b.setRequestHeader(r, d.headers[r]);
        if (d.beforeSend && (!1 === d.beforeSend.call(h, b, d) || 2 === x))
          return b.abort();
        for (r in ((s = "abort"), { success: 1, error: 1, complete: 1 }))
          b[r](d[r]);
        if ((u = dt(ct, d, 0, b))) {
          (b.readyState = 1),
            p && g.trigger("ajaxSend", [b, d]),
            d.async &&
              0 < d.timeout &&
              (f = setTimeout(function () {
                b.abort("timeout");
              }, d.timeout));
          try {
            (x = 1), u.send(i, a);
          } catch (e) {
            if (!(x < 2)) throw e;
            a(-1, e);
          }
        } else a(-1, "No Transport");
        function a(e, t, n, r) {
          var i,
            o,
            s,
            a = t;
          2 !== x &&
            ((x = 2),
            f && clearTimeout(f),
            (u = void 0),
            (c = r || ""),
            (b.readyState = 0 < e ? 4 : 0),
            (r = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                for (
                  var r, i, o, s, a = e.contents, u = e.dataTypes;
                  "*" === u[0];

                )
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                  for (i in a)
                    if (a[i] && a[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                      o = i;
                      break;
                    }
                    s = s || i;
                  }
                  o = o || s;
                }
                return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0;
              })(d, b, n)),
            (s = (function (e, t, n, r) {
              var i,
                o,
                s,
                a,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
              for (o = c.shift(); o; )
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ("*" === o) o = u;
                  else if ("*" !== u && u !== o) {
                    if (!(s = l[u + " " + o] || l["* " + o]))
                      for (i in l)
                        if (
                          (a = i.split(" "))[1] === o &&
                          (s = l[u + " " + a[0]] || l["* " + a[0]])
                        ) {
                          !0 === s
                            ? (s = l[i])
                            : !0 !== l[i] && ((o = a[0]), c.unshift(a[1]));
                          break;
                        }
                    if (!0 !== s)
                      if (s && e.throws) t = s(t);
                      else
                        try {
                          t = s(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: s
                              ? e
                              : "No conversion from " + u + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(d, s, b, r)),
            r
              ? (d.ifModified &&
                  ((n = b.getResponseHeader("Last-Modified")) &&
                    (m.lastModified[l] = n),
                  (n = b.getResponseHeader("etag")) && (m.etag[l] = n)),
                204 === e || "HEAD" === d.type
                  ? (a = "nocontent")
                  : 304 === e
                  ? (a = "notmodified")
                  : ((a = s.state), (i = s.data), (r = !(o = s.error))))
              : ((o = a), (!e && a) || ((a = "error"), e < 0 && (e = 0))),
            (b.status = e),
            (b.statusText = (t || a) + ""),
            r ? m.resolveWith(h, [i, a, b]) : m.rejectWith(h, [b, a, o]),
            b.statusCode(y),
            (y = void 0),
            p && g.trigger(r ? "ajaxSuccess" : "ajaxError", [b, d, r ? i : o]),
            v.fireWith(h, [b, a]),
            p &&
              (g.trigger("ajaxComplete", [b, d]),
              --m.active || m.event.trigger("ajaxStop")));
        }
        return b;
      },
      getJSON: function (e, t, n) {
        return h.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return h.get(e, void 0, t, "script");
      },
    }),
    h.each(["get", "post"], function (e, i) {
      h[i] = function (e, t, n, r) {
        return (
          h.isFunction(t) && ((r = r || n), (n = t), (t = void 0)),
          h.ajax({ url: e, type: i, dataType: r, data: t, success: n })
        );
      };
    }),
    h.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        h.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    (h._evalUrl = function (e) {
      return h.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    h.fn.extend({
      wrapAll: function (t) {
        var e;
        return h.isFunction(t)
          ? this.each(function (e) {
              h(this).wrapAll(t.call(this, e));
            })
          : (this[0] &&
              ((e = h(t, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && e.insertBefore(this[0]),
              e
                .map(function () {
                  for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                  return e;
                })
                .append(this)),
            this);
      },
      wrapInner: function (n) {
        return this.each(
          h.isFunction(n)
            ? function (e) {
                h(this).wrapInner(n.call(this, e));
              }
            : function () {
                var e = h(this),
                  t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n);
              }
        );
      },
      wrap: function (t) {
        var n = h.isFunction(t);
        return this.each(function (e) {
          h(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            h.nodeName(this, "body") || h(this).replaceWith(this.childNodes);
          })
          .end();
      },
    }),
    (h.expr.filters.hidden = function (e) {
      return e.offsetWidth <= 0 && e.offsetHeight <= 0;
    }),
    (h.expr.filters.visible = function (e) {
      return !h.expr.filters.hidden(e);
    });
  var gt = /%20/g,
    mt = /\[\]$/,
    vt = /\r?\n/g,
    yt = /^(?:submit|button|image|reset|file)$/i,
    xt = /^(?:input|select|textarea|keygen)/i;
  (h.param = function (e, t) {
    function n(e, t) {
      (t = h.isFunction(t) ? t() : null == t ? "" : t),
        (i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t));
    }
    var r,
      i = [];
    if (
      (void 0 === t && (t = h.ajaxSettings && h.ajaxSettings.traditional),
      h.isArray(e) || (e.jquery && !h.isPlainObject(e)))
    )
      h.each(e, function () {
        n(this.name, this.value);
      });
    else
      for (r in e)
        !(function n(e, t, r, i) {
          if (h.isArray(t))
            h.each(t, function (e, t) {
              r || mt.test(t)
                ? i(t, t)
                : n(t + "[" + ("object" == typeof t ? e : "") + "]", t, r, i);
            });
          else if (r || "object" !== h.type(t)) i(e, t);
          else for (var o in t) n(e + "[" + o + "]", t[o], r, i);
        })(r, e[r], t, n);
    return i.join("&").replace(gt, "+");
  }),
    h.fn.extend({
      serialize: function () {
        return h.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = h.prop(this, "elements");
          return e ? h.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !h(this).is(":disabled") &&
              xt.test(this.nodeName) &&
              !yt.test(e) &&
              (this.checked || !W.test(e))
            );
          })
          .map(function (e, t) {
            var n = h(this).val();
            return null == n
              ? null
              : h.isArray(n)
              ? h.map(n, function (e) {
                  return { name: t.name, value: e.replace(vt, "\r\n") };
                })
              : { name: t.name, value: n.replace(vt, "\r\n") };
          })
          .get();
      },
    }),
    (h.ajaxSettings.xhr = function () {
      try {
        return new XMLHttpRequest();
      } catch (e) {}
    });
  var bt = 0,
    wt = {},
    Tt = { 0: 200, 1223: 204 },
    Ct = h.ajaxSettings.xhr();
  n.ActiveXObject &&
    h(n).on("unload", function () {
      for (var e in wt) wt[e]();
    }),
    (p.cors = !!Ct && "withCredentials" in Ct),
    (p.ajax = Ct = !!Ct),
    h.ajaxTransport(function (o) {
      var s;
      return p.cors || (Ct && !o.crossDomain)
        ? {
            send: function (e, t) {
              var n,
                r = o.xhr(),
                i = ++bt;
              if (
                (r.open(o.type, o.url, o.async, o.username, o.password),
                o.xhrFields)
              )
                for (n in o.xhrFields) r[n] = o.xhrFields[n];
              for (n in (o.mimeType &&
                r.overrideMimeType &&
                r.overrideMimeType(o.mimeType),
              o.crossDomain ||
                e["X-Requested-With"] ||
                (e["X-Requested-With"] = "XMLHttpRequest"),
              e))
                r.setRequestHeader(n, e[n]);
              (s = function (e) {
                return function () {
                  s &&
                    (delete wt[i],
                    (s = r.onload = r.onerror = null),
                    "abort" === e
                      ? r.abort()
                      : "error" === e
                      ? t(r.status, r.statusText)
                      : t(
                          Tt[r.status] || r.status,
                          r.statusText,
                          "string" == typeof r.responseText
                            ? { text: r.responseText }
                            : void 0,
                          r.getAllResponseHeaders()
                        ));
                };
              }),
                (r.onload = s()),
                (r.onerror = s("error")),
                (s = wt[i] = s("abort")),
                r.send((o.hasContent && o.data) || null);
            },
            abort: function () {
              s && s();
            },
          }
        : void 0;
    }),
    h.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /(?:java|ecma)script/ },
      converters: {
        "text script": function (e) {
          return h.globalEval(e), e;
        },
      },
    }),
    h.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    h.ajaxTransport("script", function (n) {
      var r, i;
      if (n.crossDomain)
        return {
          send: function (e, t) {
            (r = h("<script>")
              .prop({ async: !0, charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (i = function (e) {
                  r.remove(),
                    (i = null),
                    e && t("error" === e.type ? 404 : 200, e.type);
                })
              )),
              f.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var Nt = [],
    kt = /(=)\?(?=&|$)|\?\?/;
  h.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Nt.pop() || h.expando + "_" + Ze++;
      return (this[e] = !0), e;
    },
  }),
    h.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
        i,
        o,
        s =
          !1 !== e.jsonp &&
          (kt.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              !(e.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
              kt.test(e.data) &&
              "data");
      return s || "jsonp" === e.dataTypes[0]
        ? ((r = e.jsonpCallback =
            h.isFunction(e.jsonpCallback)
              ? e.jsonpCallback()
              : e.jsonpCallback),
          s
            ? (e[s] = e[s].replace(kt, "$1" + r))
            : !1 !== e.jsonp &&
              (e.url += (et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return o || h.error(r + " was not called"), o[0];
          }),
          (e.dataTypes[0] = "json"),
          (i = e[r]),
          (e[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            (e[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), Nt.push(r)),
              o && h.isFunction(i) && i(o[0]),
              (o = i = void 0);
          }),
          "script")
        : void 0;
    }),
    (h.parseHTML = function (e, t, n) {
      if (!e || "string" != typeof e) return null;
      "boolean" == typeof t && ((n = t), (t = !1)), (t = t || f);
      var r = y.exec(e),
        n = !n && [];
      return r
        ? [t.createElement(r[1])]
        : ((r = h.buildFragment([e], t, n)),
          n && n.length && h(n).remove(),
          h.merge([], r.childNodes));
    });
  var Et = h.fn.load;
  (h.fn.load = function (e, t, n) {
    if ("string" != typeof e && Et) return Et.apply(this, arguments);
    var r,
      i,
      o,
      s = this,
      a = e.indexOf(" ");
    return (
      0 <= a && ((r = e.slice(a)), (e = e.slice(0, a))),
      h.isFunction(t)
        ? ((n = t), (t = void 0))
        : t && "object" == typeof t && (i = "POST"),
      0 < s.length &&
        h
          .ajax({ url: e, type: i, dataType: "html", data: t })
          .done(function (e) {
            (o = arguments),
              s.html(r ? h("<div>").append(h.parseHTML(e)).find(r) : e);
          })
          .complete(
            n &&
              function (e, t) {
                s.each(n, o || [e.responseText, t, e]);
              }
          ),
      this
    );
  }),
    (h.expr.filters.animated = function (t) {
      return h.grep(h.timers, function (e) {
        return t === e.elem;
      }).length;
    });
  var Dt = n.document.documentElement;
  function jt(e) {
    return h.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
  }
  (h.offset = {
    setOffset: function (e, t, n) {
      var r,
        i,
        o,
        s,
        a = h.css(e, "position"),
        u = h(e),
        l = {};
      "static" === a && (e.style.position = "relative"),
        (o = u.offset()),
        (r = h.css(e, "top")),
        (s = h.css(e, "left")),
        (s =
          ("absolute" === a || "fixed" === a) && -1 < (r + s).indexOf("auto")
            ? ((i = (a = u.position()).top), a.left)
            : ((i = parseFloat(r) || 0), parseFloat(s) || 0)),
        h.isFunction(t) && (t = t.call(e, n, o)),
        null != t.top && (l.top = t.top - o.top + i),
        null != t.left && (l.left = t.left - o.left + s),
        "using" in t ? t.using.call(e, l) : u.css(l);
    },
  }),
    h.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                h.offset.setOffset(this, t, e);
              });
        var e,
          n = this[0],
          r = { top: 0, left: 0 },
          i = n && n.ownerDocument;
        return i
          ? ((e = i.documentElement),
            h.contains(e, n)
              ? (typeof n.getBoundingClientRect != $ &&
                  (r = n.getBoundingClientRect()),
                (i = jt(i)),
                {
                  top: r.top + i.pageYOffset - e.clientTop,
                  left: r.left + i.pageXOffset - e.clientLeft,
                })
              : r)
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n = this[0],
            r = { top: 0, left: 0 };
          return (
            "fixed" === h.css(n, "position")
              ? (t = n.getBoundingClientRect())
              : ((e = this.offsetParent()),
                (t = this.offset()),
                h.nodeName(e[0], "html") || (r = e.offset()),
                (r.top += h.css(e[0], "borderTopWidth", !0)),
                (r.left += h.css(e[0], "borderLeftWidth", !0))),
            {
              top: t.top - r.top - h.css(n, "marginTop", !0),
              left: t.left - r.left - h.css(n, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent || Dt;
            e && !h.nodeName(e, "html") && "static" === h.css(e, "position");

          )
            e = e.offsetParent;
          return e || Dt;
        });
      },
    }),
    h.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, i) {
        var o = "pageYOffset" === i;
        h.fn[t] = function (e) {
          return S(
            this,
            function (e, t, n) {
              var r = jt(e);
              return void 0 === n
                ? r
                  ? r[i]
                  : e[t]
                : void (r
                    ? r.scrollTo(o ? n.pageXOffset : n, o ? n : n.pageYOffset)
                    : (e[t] = n));
            },
            t,
            e,
            arguments.length,
            null
          );
        };
      }
    ),
    h.each(["top", "left"], function (e, n) {
      h.cssHooks[n] = Ce(p.pixelPosition, function (e, t) {
        return t
          ? ((t = Te(e, n)), be.test(t) ? h(e).position()[n] + "px" : t)
          : void 0;
      });
    }),
    h.each({ Height: "height", Width: "width" }, function (o, s) {
      h.each(
        { padding: "inner" + o, content: s, "": "outer" + o },
        function (r, e) {
          h.fn[e] = function (e, t) {
            var n = arguments.length && (r || "boolean" != typeof e),
              i = r || (!0 === e || !0 === t ? "margin" : "border");
            return S(
              this,
              function (e, t, n) {
                var r;
                return h.isWindow(e)
                  ? e.document.documentElement["client" + o]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement),
                    Math.max(
                      e.body["scroll" + o],
                      r["scroll" + o],
                      e.body["offset" + o],
                      r["offset" + o],
                      r["client" + o]
                    ))
                  : void 0 === n
                  ? h.css(e, t, i)
                  : h.style(e, t, n, i);
              },
              s,
              n ? e : void 0,
              n,
              null
            );
          };
        }
      );
    }),
    (h.fn.size = function () {
      return this.length;
    }),
    (h.fn.andSelf = h.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return h;
      });
  var St = n.jQuery,
    At = n.$;
  return (
    (h.noConflict = function (e) {
      return e.$ === h && (e.$ = At), e && e.jQuery === h && (e.jQuery = St), h;
    }),
    typeof e == $ && (n.jQuery = n.$ = h),
    h
  );
});
