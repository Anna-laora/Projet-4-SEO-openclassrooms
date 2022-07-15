!(function (a, b) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = a.document
        ? b(a, !0)
        : function (a) {
            if (!a.document)
              throw new Error("jQuery requires a window with a document");
            return b(a);
          })
    : b(a);
})("undefined" != typeof window ? window : this, function (a, b) {
  var c = [],
    d = c.slice,
    e = c.concat,
    f = c.push,
    g = c.indexOf,
    h = {},
    i = h.toString,
    j = h.hasOwnProperty,
    k = "".trim,
    l = {},
    m = a.document,
    n = "2.1.0",
    o = function (a, b) {
      return new o.fn.init(a, b);
    },
    p = /^-ms-/,
    q = /-([\da-z])/gi,
    r = function (b, a) {
      return a.toUpperCase();
    };
  function s(a) {
    var b = a.length,
      c = o.type(a);
    return (
      !("function" === c || o.isWindow(a)) &&
      ((1 === a.nodeType && !!b) ||
        "array" === c ||
        0 === b ||
        ("number" == typeof b && b > 0 && b - 1 in a))
    );
  }
  (o.fn = o.prototype =
    {
      jquery: n,
      constructor: o,
      selector: "",
      length: 0,
      toArray: function () {
        return d.call(this);
      },
      get: function (a) {
        return null != a
          ? 0 > a
            ? this[a + this.length]
            : this[a]
          : d.call(this);
      },
      pushStack: function (b) {
        var a = o.merge(this.constructor(), b);
        return (a.prevObject = this), (a.context = this.context), a;
      },
      each: function (a, b) {
        return o.each(this, a, b);
      },
      map: function (a) {
        return this.pushStack(
          o.map(this, function (b, c) {
            return a.call(b, c, b);
          })
        );
      },
      slice: function () {
        return this.pushStack(d.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (b) {
        var c = this.length,
          a = +b + (0 > b ? c : 0);
        return this.pushStack(a >= 0 && c > a ? [this[a]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor(null);
      },
      push: f,
      sort: c.sort,
      splice: c.splice,
    }),
    (o.extend = o.fn.extend =
      function () {
        var f,
          e,
          c,
          b,
          g,
          h,
          a = arguments[0] || {},
          d = 1,
          j = arguments.length,
          i = !1;
        for (
          "boolean" == typeof a && ((i = a), (a = arguments[d] || {}), d++),
            "object" == typeof a || o.isFunction(a) || (a = {}),
            d === j && ((a = this), d--);
          j > d;
          d++
        )
          if (null != (f = arguments[d]))
            for (e in f)
              (c = a[e]),
                (b = f[e]),
                a !== b &&
                  (i && b && (o.isPlainObject(b) || (g = o.isArray(b)))
                    ? (g
                        ? ((g = !1), (h = c && o.isArray(c) ? c : []))
                        : (h = c && o.isPlainObject(c) ? c : {}),
                      (a[e] = o.extend(i, h, b)))
                    : void 0 !== b && (a[e] = b));
        return a;
      }),
    o.extend({
      expando: "jQuery" + (n + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (a) {
        throw new Error(a);
      },
      noop: function () {},
      isFunction: function (a) {
        return "function" === o.type(a);
      },
      isArray: Array.isArray,
      isWindow: function (a) {
        return null != a && a === a.window;
      },
      isNumeric: function (a) {
        return a - parseFloat(a) >= 0;
      },
      isPlainObject: function (a) {
        if ("object" !== o.type(a) || a.nodeType || o.isWindow(a)) return !1;
        try {
          if (
            a.constructor &&
            !j.call(a.constructor.prototype, "isPrototypeOf")
          )
            return !1;
        } catch (b) {
          return !1;
        }
        return !0;
      },
      isEmptyObject: function (a) {
        var b;
        for (b in a) return !1;
        return !0;
      },
      type: function (a) {
        return null == a
          ? a + ""
          : "object" == typeof a || "function" == typeof a
          ? h[i.call(a)] || "object"
          : typeof a;
      },
      globalEval: function (a) {
        var b,
          c = eval;
        (a = o.trim(a)) &&
          (1 === a.indexOf("use strict")
            ? (((b = m.createElement("script")).text = a),
              m.head.appendChild(b).parentNode.removeChild(b))
            : c(a));
      },
      camelCase: function (a) {
        return a.replace(p, "ms-").replace(q, r);
      },
      nodeName: function (a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
      },
      each: function (b, c, d) {
        var a = 0,
          e = b.length,
          f = s(b);
        if (d) {
          if (f) for (; e > a && !1 !== c.apply(b[a], d); a++);
          else for (a in b) if (!1 === c.apply(b[a], d)) break;
        } else if (f) for (; e > a && !1 !== c.call(b[a], a, b[a]); a++);
        else for (a in b) if (!1 === c.call(b[a], a, b[a])) break;
        return b;
      },
      trim: function (a) {
        return null == a ? "" : k.call(a);
      },
      makeArray: function (a, c) {
        var b = c || [];
        return (
          null != a &&
            (s(Object(a))
              ? o.merge(b, "string" == typeof a ? [a] : a)
              : f.call(b, a)),
          b
        );
      },
      inArray: function (b, a, c) {
        return null == a ? -1 : g.call(a, b, c);
      },
      merge: function (a, c) {
        for (var e = +c.length, b = 0, d = a.length; e > b; b++) a[d++] = c[b];
        return (a.length = d), a;
      },
      grep: function (b, d, e) {
        for (var c = [], a = 0, f = b.length, g = !e; f > a; a++)
          !d(b[a], a) !== g && c.push(b[a]);
        return c;
      },
      map: function (b, e, f) {
        var c,
          a = 0,
          g = b.length,
          h = s(b),
          d = [];
        if (h) for (; g > a; a++) null != (c = e(b[a], a, f)) && d.push(c);
        else for (a in b) null != (c = e(b[a], a, f)) && d.push(c);
        return e.apply([], d);
      },
      guid: 1,
      proxy: function (a, b) {
        var c, e, d;
        return (
          "string" == typeof b && ((c = a[b]), (b = a), (a = c)),
          o.isFunction(a)
            ? ((e = d.call(arguments, 2)),
              ((d = function () {
                return a.apply(b || this, e.concat(d.call(arguments)));
              }).guid = a.guid =
                a.guid || o.guid++),
              d)
            : void 0
        );
      },
      now: Date.now,
      support: l,
    }),
    o.each(
      "Boolean Number String Function Array Date RegExp Object Error".split(
        " "
      ),
      function (b, a) {
        h["[object " + a + "]"] = a.toLowerCase();
      }
    );
  var t = (function (u) {
    var f,
      h,
      c,
      v,
      w,
      x,
      E,
      F,
      y,
      m,
      G,
      H,
      I,
      J,
      K,
      L,
      M,
      n = "sizzle" + -new Date(),
      k = u.document,
      N = 0,
      O = 0,
      P = al(),
      Q = al(),
      R = al(),
      z = function (a, b) {
        return a === b && (y = !0), 0;
      },
      S = "undefined",
      T = -2147483648,
      U = {}.hasOwnProperty,
      d = [],
      V = d.pop,
      W = d.push,
      o = d.push,
      A = d.slice,
      X =
        d.indexOf ||
        function (b) {
          for (var a = 0, c = this.length; c > a; a++)
            if (this[a] === b) return a;
          return -1;
        },
      p =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      a = "[\\x20\\t\\r\\n\\f]",
      g = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      q = g.replace("w", "w#"),
      r =
        "\\[" +
        a +
        "*(" +
        g +
        ")" +
        a +
        "*(?:([*^$|!~]?=)" +
        a +
        "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" +
        q +
        ")|)|)" +
        a +
        "*\\]",
      s =
        ":(" +
        g +
        ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" +
        r.replace(3, 8) +
        ")*)|.*)\\)|)",
      Y = new RegExp("^" + a + "+|((?:^|[^\\\\])(?:\\\\.)*)" + a + "+$", "g"),
      Z = new RegExp("^" + a + "*," + a + "*"),
      aa = new RegExp("^" + a + "*([>+~]|" + a + ")" + a + "*"),
      ab = new RegExp("=" + a + "*([^\\]'\"]*?)" + a + "*\\]", "g"),
      ac = new RegExp(s),
      ad = new RegExp("^" + q + "$"),
      B = {
        ID: new RegExp("^#(" + g + ")"),
        CLASS: new RegExp("^\\.(" + g + ")"),
        TAG: new RegExp("^(" + g.replace("w", "w*") + ")"),
        ATTR: new RegExp("^" + r),
        PSEUDO: new RegExp("^" + s),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            a +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            a +
            "*(?:([+-]|)" +
            a +
            "*(\\d+)|))" +
            a +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + p + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            a +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            a +
            "*((?:-\\d)?\\d*)" +
            a +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      ae = /^(?:input|select|textarea|button)$/i,
      af = /^h\d$/i,
      ag = /^[^{]+\{\s*\[native \w/,
      ah = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      $ = /[+~]/,
      _ = /'|\\/g,
      ai = new RegExp("\\\\([\\da-f]{1,6}" + a + "?|(" + a + ")|.)", "ig"),
      aj = function (d, b, c) {
        var a = "0x" + b - 65536;
        return a != a || c
          ? b
          : 0 > a
          ? String.fromCharCode(a + 65536)
          : String.fromCharCode((a >> 10) | 55296, (1023 & a) | 56320);
      };
    try {
      o.apply((d = A.call(k.childNodes)), k.childNodes),
        d[k.childNodes.length].nodeType;
    } catch (ak) {
      o = {
        apply: d.length
          ? function (a, b) {
              W.apply(a, A.call(b));
            }
          : function (a, c) {
              for (var b = a.length, d = 0; (a[b++] = c[d++]); );
              a.length = b - 1;
            },
      };
    }
    function b(c, a, b, s) {
      var j, d, e, g, l, i, p, f, r, q;
      if (
        ((a ? a.ownerDocument || a : k) !== G && m(a),
        (a = a || G),
        (b = b || []),
        !c || "string" != typeof c)
      )
        return b;
      if (1 !== (g = a.nodeType) && 9 !== g) return [];
      if (I && !s) {
        if ((j = ah.exec(c))) {
          if ((e = j[1])) {
            if (9 === g) {
              if (!(d = a.getElementById(e)) || !d.parentNode) return b;
              if (d.id === e) return b.push(d), b;
            } else if (
              a.ownerDocument &&
              (d = a.ownerDocument.getElementById(e)) &&
              M(a, d) &&
              d.id === e
            )
              return b.push(d), b;
          } else {
            if (j[2]) return o.apply(b, a.getElementsByTagName(c)), b;
            if (
              (e = j[3]) &&
              h.getElementsByClassName &&
              a.getElementsByClassName
            )
              return o.apply(b, a.getElementsByClassName(e)), b;
          }
        }
        if (h.qsa && (!J || !J.test(c))) {
          if (
            ((f = p = n),
            (r = a),
            (q = 9 === g && c),
            1 === g && "object" !== a.nodeName.toLowerCase())
          ) {
            for (
              i = ao(c),
                (p = a.getAttribute("id"))
                  ? (f = p.replace(_, "\\$&"))
                  : a.setAttribute("id", f),
                f = "[id='" + f + "'] ",
                l = i.length;
              l--;

            )
              i[l] = f + ap(i[l]);
            (r = ($.test(c) && an(a.parentNode)) || a), (q = i.join(","));
          }
          if (q)
            try {
              return o.apply(b, r.querySelectorAll(q)), b;
            } catch (t) {
            } finally {
              p || a.removeAttribute("id");
            }
        }
      }
      return aw(c.replace(Y, "$1"), a, b, s);
    }
    function al() {
      var b = [];
      function a(d, e) {
        return (
          b.push(d + " ") > c.cacheLength && delete a[b.shift()],
          (a[d + " "] = e)
        );
      }
      return a;
    }
    function i(a) {
      return (a[n] = !0), a;
    }
    function j(b) {
      var a = G.createElement("div");
      try {
        return !!b(a);
      } catch (c) {
        return !1;
      } finally {
        a.parentNode && a.parentNode.removeChild(a), (a = null);
      }
    }
    function l(a, d) {
      for (var e = a.split("|"), b = a.length; b--; ) c.attrHandle[e[b]] = d;
    }
    function am(b, c) {
      var a = c && b,
        d =
          a &&
          1 === b.nodeType &&
          1 === c.nodeType &&
          (~c.sourceIndex || T) - (~b.sourceIndex || T);
      if (d) return d;
      if (a) {
        for (; (a = a.nextSibling); ) if (a === c) return -1;
      }
      return b ? 1 : -1;
    }
    function C(a) {
      return function (b) {
        return "input" === b.nodeName.toLowerCase() && b.type === a;
      };
    }
    function D(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a;
      };
    }
    function e(a) {
      return i(function (b) {
        return (
          (b = +b),
          i(function (c, g) {
            for (var d, e = a([], c.length, b), f = e.length; f--; )
              c[(d = e[f])] && (c[d] = !(g[d] = c[d]));
          })
        );
      });
    }
    function an(a) {
      return a && typeof a.getElementsByTagName !== S && a;
    }
    for (f in ((h = b.support = {}),
    (w = b.isXML =
      function (a) {
        var b = a && (a.ownerDocument || a).documentElement;
        return !!b && "HTML" !== b.nodeName;
      }),
    (m = b.setDocument =
      function (e) {
        var f,
          b = e ? e.ownerDocument || e : k,
          d = b.defaultView;
        return b !== G && 9 === b.nodeType && b.documentElement
          ? ((G = b),
            (H = b.documentElement),
            (I = !w(b)),
            d &&
              d !== d.top &&
              (d.addEventListener
                ? d.addEventListener(
                    "unload",
                    function () {
                      m();
                    },
                    !1
                  )
                : d.attachEvent &&
                  d.attachEvent("onunload", function () {
                    m();
                  })),
            (h.attributes = j(function (a) {
              return (a.className = "i"), !a.getAttribute("className");
            })),
            (h.getElementsByTagName = j(function (a) {
              return (
                a.appendChild(b.createComment("")),
                !a.getElementsByTagName("*").length
              );
            })),
            (h.getElementsByClassName =
              ag.test(b.getElementsByClassName) &&
              j(function (a) {
                return (
                  (a.innerHTML =
                    "<div class='a'></div><div class='a i'></div>"),
                  (a.firstChild.className = "i"),
                  2 === a.getElementsByClassName("i").length
                );
              })),
            (h.getById = j(function (a) {
              return (
                (H.appendChild(a).id = n),
                !b.getElementsByName || !b.getElementsByName(n).length
              );
            })),
            h.getById
              ? ((c.find.ID = function (c, b) {
                  if (typeof b.getElementById !== S && I) {
                    var a = b.getElementById(c);
                    return a && a.parentNode ? [a] : [];
                  }
                }),
                (c.filter.ID = function (a) {
                  var b = a.replace(ai, aj);
                  return function (a) {
                    return a.getAttribute("id") === b;
                  };
                }))
              : (delete c.find.ID,
                (c.filter.ID = function (a) {
                  var b = a.replace(ai, aj);
                  return function (a) {
                    var c =
                      typeof a.getAttributeNode !== S &&
                      a.getAttributeNode("id");
                    return c && c.value === b;
                  };
                })),
            (c.find.TAG = h.getElementsByTagName
              ? function (b, a) {
                  return typeof a.getElementsByTagName !== S
                    ? a.getElementsByTagName(b)
                    : void 0;
                }
              : function (b, e) {
                  var a,
                    c = [],
                    f = 0,
                    d = e.getElementsByTagName(b);
                  if ("*" === b) {
                    for (; (a = d[f++]); ) 1 === a.nodeType && c.push(a);
                    return c;
                  }
                  return d;
                }),
            (c.find.CLASS =
              h.getElementsByClassName &&
              function (b, a) {
                return typeof a.getElementsByClassName !== S && I
                  ? a.getElementsByClassName(b)
                  : void 0;
              }),
            (K = []),
            (J = []),
            (h.qsa = ag.test(b.querySelectorAll)) &&
              (j(function (b) {
                (b.innerHTML =
                  "<select t=''><option selected=''></option></select>"),
                  b.querySelectorAll("[t^='']").length &&
                    J.push("[*^$]=" + a + "*(?:''|\"\")"),
                  b.querySelectorAll("[selected]").length ||
                    J.push("\\[" + a + "*(?:value|" + p + ")"),
                  b.querySelectorAll(":checked").length || J.push(":checked");
              }),
              j(function (c) {
                var d = b.createElement("input");
                d.setAttribute("type", "hidden"),
                  c.appendChild(d).setAttribute("name", "D"),
                  c.querySelectorAll("[name=d]").length &&
                    J.push("name" + a + "*[*^$|!~]?="),
                  c.querySelectorAll(":enabled").length ||
                    J.push(":enabled", ":disabled"),
                  c.querySelectorAll("*,:x"),
                  J.push(",.*:");
              })),
            (h.matchesSelector = ag.test(
              (L =
                H.webkitMatchesSelector ||
                H.mozMatchesSelector ||
                H.oMatchesSelector ||
                H.msMatchesSelector)
            )) &&
              j(function (a) {
                (h.disconnectedMatch = L.call(a, "div")),
                  L.call(a, "[s!='']:x"),
                  K.push("!=", s);
              }),
            (J = J.length && new RegExp(J.join("|"))),
            (K = K.length && new RegExp(K.join("|"))),
            (f = ag.test(H.compareDocumentPosition)),
            (M =
              f || ag.test(H.contains)
                ? function (a, c) {
                    var d = 9 === a.nodeType ? a.documentElement : a,
                      b = c && c.parentNode;
                    return (
                      a === b ||
                      !(
                        !b ||
                        1 !== b.nodeType ||
                        !(d.contains
                          ? d.contains(b)
                          : a.compareDocumentPosition &&
                            16 & a.compareDocumentPosition(b))
                      )
                    );
                  }
                : function (b, a) {
                    if (a) {
                      for (; (a = a.parentNode); ) if (a === b) return !0;
                    }
                    return !1;
                  }),
            (z = f
              ? function (a, c) {
                  if (a === c) return (y = !0), 0;
                  var d =
                    !a.compareDocumentPosition - !c.compareDocumentPosition;
                  return (
                    d ||
                    (1 &
                      (d =
                        (a.ownerDocument || a) === (c.ownerDocument || c)
                          ? a.compareDocumentPosition(c)
                          : 1) ||
                    (!h.sortDetached && c.compareDocumentPosition(a) === d)
                      ? a === b || (a.ownerDocument === k && M(k, a))
                        ? -1
                        : c === b || (c.ownerDocument === k && M(k, c))
                        ? 1
                        : F
                        ? X.call(F, a) - X.call(F, c)
                        : 0
                      : 4 & d
                      ? -1
                      : 1)
                  );
                }
              : function (d, e) {
                  if (d === e) return (y = !0), 0;
                  var a,
                    c = 0,
                    h = d.parentNode,
                    i = e.parentNode,
                    f = [d],
                    g = [e];
                  if (!h || !i)
                    return d === b
                      ? -1
                      : e === b
                      ? 1
                      : h
                      ? -1
                      : i
                      ? 1
                      : F
                      ? X.call(F, d) - X.call(F, e)
                      : 0;
                  if (h === i) return am(d, e);
                  for (a = d; (a = a.parentNode); ) f.unshift(a);
                  for (a = e; (a = a.parentNode); ) g.unshift(a);
                  for (; f[c] === g[c]; ) c++;
                  return c
                    ? am(f[c], g[c])
                    : f[c] === k
                    ? -1
                    : g[c] === k
                    ? 1
                    : 0;
                }),
            b)
          : G;
      }),
    (b.matches = function (a, c) {
      return b(a, null, null, c);
    }),
    (b.matchesSelector = function (a, c) {
      if (
        ((a.ownerDocument || a) !== G && m(a),
        (c = c.replace(ab, "='$1']")),
        !(!h.matchesSelector || !I || (K && K.test(c)) || (J && J.test(c))))
      )
        try {
          var d = L.call(a, c);
          if (
            d ||
            h.disconnectedMatch ||
            (a.document && 11 !== a.document.nodeType)
          )
            return d;
        } catch (e) {}
      return b(c, G, null, [a]).length > 0;
    }),
    (b.contains = function (a, b) {
      return (a.ownerDocument || a) !== G && m(a), M(a, b);
    }),
    (b.attr = function (a, b) {
      (a.ownerDocument || a) !== G && m(a);
      var e = c.attrHandle[b.toLowerCase()],
        d = e && U.call(c.attrHandle, b.toLowerCase()) ? e(a, b, !I) : void 0;
      return void 0 !== d
        ? d
        : h.attributes || !I
        ? a.getAttribute(b)
        : (d = a.getAttributeNode(b)) && d.specified
        ? d.value
        : null;
    }),
    (b.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }),
    (b.uniqueSort = function (a) {
      var d,
        e = [],
        b = 0,
        c = 0;
      if (
        ((y = !h.detectDuplicates),
        (F = !h.sortStable && a.slice(0)),
        a.sort(z),
        y)
      ) {
        for (; (d = a[c++]); ) d === a[c] && (b = e.push(c));
        for (; b--; ) a.splice(e[b], 1);
      }
      return (F = null), a;
    }),
    (v = b.getText =
      function (a) {
        var d,
          c = "",
          e = 0,
          b = a.nodeType;
        if (b) {
          if (1 === b || 9 === b || 11 === b) {
            if ("string" == typeof a.textContent) return a.textContent;
            for (a = a.firstChild; a; a = a.nextSibling) c += v(a);
          } else if (3 === b || 4 === b) return a.nodeValue;
        } else for (; (d = a[e++]); ) c += v(d);
        return c;
      }),
    (c = b.selectors =
      {
        cacheLength: 50,
        createPseudo: i,
        match: B,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (a) {
            return (
              (a[1] = a[1].replace(ai, aj)),
              (a[3] = (a[4] || a[5] || "").replace(ai, aj)),
              "~=" === a[2] && (a[3] = " " + a[3] + " "),
              a.slice(0, 4)
            );
          },
          CHILD: function (a) {
            return (
              (a[1] = a[1].toLowerCase()),
              "nth" === a[1].slice(0, 3)
                ? (a[3] || b.error(a[0]),
                  (a[4] = +(a[4]
                    ? a[5] + (a[6] || 1)
                    : 2 * ("even" === a[3] || "odd" === a[3]))),
                  (a[5] = +(a[7] + a[8] || "odd" === a[3])))
                : a[3] && b.error(a[0]),
              a
            );
          },
          PSEUDO: function (a) {
            var c,
              b = !a[5] && a[2];
            return B.CHILD.test(a[0])
              ? null
              : (a[3] && void 0 !== a[4]
                  ? (a[2] = a[4])
                  : b &&
                    ac.test(b) &&
                    (c = ao(b, !0)) &&
                    (c = b.indexOf(")", b.length - c) - b.length) &&
                    ((a[0] = a[0].slice(0, c)), (a[2] = b.slice(0, c))),
                a.slice(0, 3));
          },
        },
        filter: {
          TAG: function (a) {
            var b = a.replace(ai, aj).toLowerCase();
            return "*" === a
              ? function () {
                  return !0;
                }
              : function (a) {
                  return a.nodeName && a.nodeName.toLowerCase() === b;
                };
          },
          CLASS: function (b) {
            var c = P[b + " "];
            return (
              c ||
              ((c = new RegExp("(^|" + a + ")" + b + "(" + a + "|$)")),
              P(b, function (a) {
                return c.test(
                  ("string" == typeof a.className && a.className) ||
                    (typeof a.getAttribute !== S && a.getAttribute("class")) ||
                    ""
                );
              }))
            );
          },
          ATTR: function (a, c, d) {
            return function (f) {
              var e = b.attr(f, a);
              return null == e
                ? "!=" === c
                : !c ||
                    ((e += ""),
                    "=" === c
                      ? e === d
                      : "!=" === c
                      ? e !== d
                      : "^=" === c
                      ? d && 0 === e.indexOf(d)
                      : "*=" === c
                      ? d && e.indexOf(d) > -1
                      : "$=" === c
                      ? d && e.slice(-d.length) === d
                      : "~=" === c
                      ? (" " + e + " ").indexOf(d) > -1
                      : "|=" === c &&
                        (e === d || e.slice(0, d.length + 1) === d + "-"));
            };
          },
          CHILD: function (a, b, e, c, d) {
            var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;
            return 1 === c && 0 === d
              ? function (a) {
                  return !!a.parentNode;
                }
              : function (j, t, s) {
                  var k,
                    q,
                    b,
                    e,
                    i,
                    m,
                    o = f !== g ? "nextSibling" : "previousSibling",
                    l = j.parentNode,
                    r = h && j.nodeName.toLowerCase(),
                    p = !s && !h;
                  if (l) {
                    if (f) {
                      for (; o; ) {
                        for (b = j; (b = b[o]); )
                          if (
                            h
                              ? b.nodeName.toLowerCase() === r
                              : 1 === b.nodeType
                          )
                            return !1;
                        m = o = "only" === a && !m && "nextSibling";
                      }
                      return !0;
                    }
                    if (((m = [g ? l.firstChild : l.lastChild]), g && p)) {
                      for (
                        i =
                          (k = (q = l[n] || (l[n] = {}))[a] || [])[0] === N &&
                          k[1],
                          e = k[0] === N && k[2],
                          b = i && l.childNodes[i];
                        (b = (++i && b && b[o]) || (e = i = 0) || m.pop());

                      )
                        if (1 === b.nodeType && ++e && b === j) {
                          q[a] = [N, i, e];
                          break;
                        }
                    } else if (
                      p &&
                      (k = (j[n] || (j[n] = {}))[a]) &&
                      k[0] === N
                    )
                      e = k[1];
                    else
                      for (
                        ;
                        (b = (++i && b && b[o]) || (e = i = 0) || m.pop()) &&
                        (!(
                          (h
                            ? b.nodeName.toLowerCase() === r
                            : 1 === b.nodeType) && ++e
                        ) ||
                          (p && ((b[n] || (b[n] = {}))[a] = [N, e]), b !== j));

                      );
                    return (e -= d) === c || (e % c == 0 && e / c >= 0);
                  }
                };
          },
          PSEUDO: function (a, e) {
            var f,
              d =
                c.pseudos[a] ||
                c.setFilters[a.toLowerCase()] ||
                b.error("unsupported pseudo: " + a);
            return d[n]
              ? d(e)
              : d.length > 1
              ? ((f = [a, a, "", e]),
                c.setFilters.hasOwnProperty(a.toLowerCase())
                  ? i(function (a, g) {
                      for (var b, c = d(a, e), f = c.length; f--; )
                        (b = X.call(a, c[f])), (a[b] = !(g[b] = c[f]));
                    })
                  : function (a) {
                      return d(a, 0, f);
                    })
              : d;
          },
        },
        pseudos: {
          not: i(function (a) {
            var c = [],
              d = [],
              b = x(a.replace(Y, "$1"));
            return b[n]
              ? i(function (c, e, h, f) {
                  for (var d, g = b(c, null, f, []), a = c.length; a--; )
                    (d = g[a]) && (c[a] = !(e[a] = d));
                })
              : function (a, f, e) {
                  return (c[0] = a), b(c, null, e, d), !d.pop();
                };
          }),
          has: i(function (a) {
            return function (c) {
              return b(a, c).length > 0;
            };
          }),
          contains: i(function (a) {
            return function (b) {
              return (b.textContent || b.innerText || v(b)).indexOf(a) > -1;
            };
          }),
          lang: i(function (a) {
            return (
              ad.test(a || "") || b.error("unsupported lang: " + a),
              (a = a.replace(ai, aj).toLowerCase()),
              function (b) {
                var c;
                do
                  if (
                    (c = I
                      ? b.lang
                      : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                  )
                    return (
                      (c = c.toLowerCase()) === a || 0 === c.indexOf(a + "-")
                    );
                while ((b = b.parentNode) && 1 === b.nodeType);
                return !1;
              }
            );
          }),
          target: function (b) {
            var a = u.location && u.location.hash;
            return a && a.slice(1) === b.id;
          },
          root: function (a) {
            return a === H;
          },
          focus: function (a) {
            return (
              a === G.activeElement &&
              (!G.hasFocus || G.hasFocus()) &&
              !!(a.type || a.href || ~a.tabIndex)
            );
          },
          enabled: function (a) {
            return !1 === a.disabled;
          },
          disabled: function (a) {
            return !0 === a.disabled;
          },
          checked: function (a) {
            var b = a.nodeName.toLowerCase();
            return (
              ("input" === b && !!a.checked) || ("option" === b && !!a.selected)
            );
          },
          selected: function (a) {
            return (
              a.parentNode && a.parentNode.selectedIndex, !0 === a.selected
            );
          },
          empty: function (a) {
            for (a = a.firstChild; a; a = a.nextSibling)
              if (a.nodeType < 6) return !1;
            return !0;
          },
          parent: function (a) {
            return !c.pseudos.empty(a);
          },
          header: function (a) {
            return af.test(a.nodeName);
          },
          input: function (a) {
            return ae.test(a.nodeName);
          },
          button: function (a) {
            var b = a.nodeName.toLowerCase();
            return ("input" === b && "button" === a.type) || "button" === b;
          },
          text: function (a) {
            var b;
            return (
              "input" === a.nodeName.toLowerCase() &&
              "text" === a.type &&
              (null == (b = a.getAttribute("type")) ||
                "text" === b.toLowerCase())
            );
          },
          first: e(function () {
            return [0];
          }),
          last: e(function (b, a) {
            return [a - 1];
          }),
          eq: e(function (c, b, a) {
            return [0 > a ? a + b : a];
          }),
          even: e(function (b, c) {
            for (var a = 0; c > a; a += 2) b.push(a);
            return b;
          }),
          odd: e(function (b, c) {
            for (var a = 1; c > a; a += 2) b.push(a);
            return b;
          }),
          lt: e(function (b, d, a) {
            for (var c = 0 > a ? a + d : a; --c >= 0; ) b.push(c);
            return b;
          }),
          gt: e(function (b, c, a) {
            for (var d = 0 > a ? a + c : a; ++d < c; ) b.push(d);
            return b;
          }),
        },
      }),
    (c.pseudos.nth = c.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      c.pseudos[f] = C(f);
    for (f in { submit: !0, reset: !0 }) c.pseudos[f] = D(f);
    function t() {}
    function ao(g, k) {
      var e,
        d,
        h,
        f,
        a,
        i,
        j,
        l = Q[g + " "];
      if (l) return k ? 0 : l.slice(0);
      for (a = g, i = [], j = c.preFilter; a; ) {
        for (f in ((!e || (d = Z.exec(a))) &&
          (d && (a = a.slice(d[0].length) || a), i.push((h = []))),
        (e = !1),
        (d = aa.exec(a)) &&
          ((e = d.shift()),
          h.push({ value: e, type: d[0].replace(Y, " ") }),
          (a = a.slice(e.length))),
        c.filter))
          (d = B[f].exec(a)) &&
            (!j[f] || (d = j[f](d))) &&
            ((e = d.shift()),
            h.push({ value: e, type: f, matches: d }),
            (a = a.slice(e.length)));
        if (!e) break;
      }
      return k ? a.length : a ? b.error(g) : Q(g, i).slice(0);
    }
    function ap(b) {
      for (var a = 0, d = b.length, c = ""; d > a; a++) c += b[a].value;
      return c;
    }
    function aq(d, a, b) {
      var c = a.dir,
        e = b && "parentNode" === c,
        f = O++;
      return a.first
        ? function (a, b, f) {
            for (; (a = a[c]); ) if (1 === a.nodeType || e) return d(a, b, f);
          }
        : function (a, i, g) {
            var b,
              j,
              h = [N, f];
            if (g) {
              for (; (a = a[c]); )
                if ((1 === a.nodeType || e) && d(a, i, g)) return !0;
            } else
              for (; (a = a[c]); )
                if (1 === a.nodeType || e) {
                  if (
                    (b = (j = a[n] || (a[n] = {}))[c]) &&
                    b[0] === N &&
                    b[1] === f
                  )
                    return (h[2] = b[2]);
                  if (((j[c] = h), (h[2] = d(a, i, g)))) return !0;
                }
          };
    }
    function ar(a) {
      return a.length > 1
        ? function (c, d, e) {
            for (var b = a.length; b--; ) if (!a[b](c, d, e)) return !1;
            return !0;
          }
        : a[0];
    }
    function as(c, d, e, g, h) {
      for (var b, f = [], a = 0, i = c.length, j = null != d; i > a; a++)
        (b = c[a]) && (!e || e(b, g, h)) && (f.push(b), j && d.push(a));
      return f;
    }
    function at(d, e, f, a, b, c) {
      return (
        a && !a[n] && (a = at(a)),
        b && !b[n] && (b = at(b, c)),
        i(function (j, k, l, m) {
          var h,
            g,
            i,
            q = [],
            p = [],
            r = k.length,
            s = j || av(e || "*", l.nodeType ? [l] : l, []),
            n = d && (j || !e) ? as(s, q, d, l, m) : s,
            c = f ? (b || (j ? d : r || a) ? [] : k) : n;
          if ((f && f(n, c, l, m), a))
            for (h = as(c, p), a(h, [], l, m), g = h.length; g--; )
              (i = h[g]) && (c[p[g]] = !(n[p[g]] = i));
          if (j) {
            if (b || d) {
              if (b) {
                for (h = [], g = c.length; g--; )
                  (i = c[g]) && h.push((n[g] = i));
                b(null, (c = []), h, m);
              }
              for (g = c.length; g--; )
                (i = c[g]) &&
                  (h = b ? X.call(j, i) : q[g]) > -1 &&
                  (j[h] = !(k[h] = i));
            }
          } else (c = as(c === k ? c.splice(r, c.length) : c)), b ? b(null, k, c, m) : o.apply(k, c);
        })
      );
    }
    function au(a) {
      for (
        var j,
          e,
          d,
          g = a.length,
          h = c.relative[a[0].type],
          i = h || c.relative[" "],
          b = h ? 1 : 0,
          k = aq(
            function (a) {
              return a === j;
            },
            i,
            !0
          ),
          l = aq(
            function (a) {
              return X.call(j, a) > -1;
            },
            i,
            !0
          ),
          f = [
            function (c, a, b) {
              return (
                (!h && (b || a !== E)) ||
                ((j = a).nodeType ? k(c, a, b) : l(c, a, b))
              );
            },
          ];
        g > b;
        b++
      )
        if ((e = c.relative[a[b].type])) f = [aq(ar(f), e)];
        else {
          if ((e = c.filter[a[b].type].apply(null, a[b].matches))[n]) {
            for (d = ++b; g > d && !c.relative[a[d].type]; d++);
            return at(
              b > 1 && ar(f),
              b > 1 &&
                ap(
                  a
                    .slice(0, b - 1)
                    .concat({ value: " " === a[b - 2].type ? "*" : "" })
                ).replace(Y, "$1"),
              e,
              d > b && au(a.slice(b, d)),
              g > d && au((a = a.slice(d))),
              g > d && ap(a)
            );
          }
          f.push(e);
        }
      return ar(f);
    }
    function av(e, c, d) {
      for (var a = 0, f = c.length; f > a; a++) b(e, c[a], d);
      return d;
    }
    function aw(d, b, e, f) {
      var i,
        a,
        g,
        k,
        l,
        j = ao(d);
      if (!f && 1 === j.length) {
        if (
          (a = j[0] = j[0].slice(0)).length > 2 &&
          "ID" === (g = a[0]).type &&
          h.getById &&
          9 === b.nodeType &&
          I &&
          c.relative[a[1].type]
        ) {
          if (!(b = (c.find.ID(g.matches[0].replace(ai, aj), b) || [])[0]))
            return e;
          d = d.slice(a.shift().value.length);
        }
        for (
          i = B.needsContext.test(d) ? 0 : a.length;
          i-- && ((g = a[i]), !c.relative[(k = g.type)]);

        )
          if (
            (l = c.find[k]) &&
            (f = l(
              g.matches[0].replace(ai, aj),
              ($.test(a[0].type) && an(b.parentNode)) || b
            ))
          ) {
            if ((a.splice(i, 1), !(d = f.length && ap(a))))
              return o.apply(e, f), e;
            break;
          }
      }
      return x(d, j)(f, b, !I, e, ($.test(d) && an(b.parentNode)) || b), e;
    }
    return (
      (t.prototype = c.filters = c.pseudos),
      (c.setFilters = new t()),
      (x = b.compile =
        function (e, d) {
          var h,
            m,
            j,
            p,
            f,
            g,
            k = [],
            l = [],
            a = R[e + " "];
          if (!a) {
            for (d || (d = ao(e)), g = d.length; g--; )
              (a = au(d[g]))[n] ? k.push(a) : l.push(a);
            a = R(
              e,
              ((h = l),
              (j = (m = k).length > 0),
              (p = h.length > 0),
              (f = function (f, l, s, n, g) {
                var d,
                  q,
                  i,
                  k = 0,
                  a = "0",
                  r = f && [],
                  e = [],
                  t = E,
                  u = f || (p && c.find.TAG("*", g)),
                  v = (N += null == t ? 1 : Math.random() || 0.1),
                  w = u.length;
                for (
                  g && (E = l !== G && l);
                  a !== w && null != (d = u[a]);
                  a++
                ) {
                  if (p && d) {
                    for (q = 0; (i = h[q++]); )
                      if (i(d, l, s)) {
                        n.push(d);
                        break;
                      }
                    g && (N = v);
                  }
                  j && ((d = !i && d) && k--, f && r.push(d));
                }
                if (((k += a), j && a !== k)) {
                  for (q = 0; (i = m[q++]); ) i(r, e, l, s);
                  if (f) {
                    if (k > 0) for (; a--; ) r[a] || e[a] || (e[a] = V.call(n));
                    e = as(e);
                  }
                  o.apply(n, e),
                    g &&
                      !f &&
                      e.length > 0 &&
                      k + m.length > 1 &&
                      b.uniqueSort(n);
                }
                return g && ((N = v), (E = t)), r;
              }),
              j ? i(f) : f)
            );
          }
          return a;
        }),
      (h.sortStable = n.split("").sort(z).join("") === n),
      (h.detectDuplicates = !!y),
      m(),
      (h.sortDetached = j(function (a) {
        return 1 & a.compareDocumentPosition(G.createElement("div"));
      })),
      j(function (a) {
        return (
          (a.innerHTML = "<a href='#'></a>"),
          "#" === a.firstChild.getAttribute("href")
        );
      }) ||
        l("type|href|height|width", function (b, a, c) {
          return c
            ? void 0
            : b.getAttribute(a, "type" === a.toLowerCase() ? 1 : 2);
        }),
      (h.attributes &&
        j(function (a) {
          return (
            (a.innerHTML = "<input/>"),
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
          );
        })) ||
        l("value", function (a, c, b) {
          return b || "input" !== a.nodeName.toLowerCase()
            ? void 0
            : a.defaultValue;
        }),
      j(function (a) {
        return null == a.getAttribute("disabled");
      }) ||
        l(p, function (c, a, d) {
          var b;
          return d
            ? void 0
            : !0 === c[a]
            ? a.toLowerCase()
            : (b = c.getAttributeNode(a)) && b.specified
            ? b.value
            : null;
        }),
      b
    );
  })(a);
  (o.find = t),
    (o.expr = t.selectors),
    (o.expr[":"] = o.expr.pseudos),
    (o.unique = t.uniqueSort),
    (o.text = t.getText),
    (o.isXMLDoc = t.isXML),
    (o.contains = t.contains);
  var u = o.expr.match.needsContext,
    v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    w = /^.[^:#\[\.,]*$/;
  function x(a, b, c) {
    if (o.isFunction(b))
      return o.grep(a, function (a, b) {
        return !!b.call(a, b, a) !== c;
      });
    if (b.nodeType)
      return o.grep(a, function (a) {
        return (a === b) !== c;
      });
    if ("string" == typeof b) {
      if (w.test(b)) return o.filter(b, a, c);
      b = o.filter(b, a);
    }
    return o.grep(a, function (a) {
      return g.call(b, a) >= 0 !== c;
    });
  }
  (o.filter = function (a, b, d) {
    var c = b[0];
    return (
      d && (a = ":not(" + a + ")"),
      1 === b.length && 1 === c.nodeType
        ? o.find.matchesSelector(c, a)
          ? [c]
          : []
        : o.find.matches(
            a,
            o.grep(b, function (a) {
              return 1 === a.nodeType;
            })
          )
    );
  }),
    o.fn.extend({
      find: function (a) {
        var c,
          d = this.length,
          b = [],
          e = this;
        if ("string" != typeof a)
          return this.pushStack(
            o(a).filter(function () {
              for (c = 0; d > c; c++) if (o.contains(e[c], this)) return !0;
            })
          );
        for (c = 0; d > c; c++) o.find(a, e[c], b);
        return (
          ((b = this.pushStack(d > 1 ? o.unique(b) : b)).selector = this
            .selector
            ? this.selector + " " + a
            : a),
          b
        );
      },
      filter: function (a) {
        return this.pushStack(x(this, a || [], !1));
      },
      not: function (a) {
        return this.pushStack(x(this, a || [], !0));
      },
      is: function (a) {
        return !!x(this, "string" == typeof a && u.test(a) ? o(a) : a || [], !1)
          .length;
      },
    });
  var y,
    z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  ((o.fn.init = function (a, b) {
    var c, d;
    if (!a) return this;
    if ("string" == typeof a) {
      if (
        !(c =
          "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3
            ? [null, a, null]
            : z.exec(a)) ||
        (!c[1] && b)
      )
        return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
      if (c[1]) {
        if (
          ((b = b instanceof o ? b[0] : b),
          o.merge(
            this,
            o.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : m, !0)
          ),
          v.test(c[1]) && o.isPlainObject(b))
        )
          for (c in b)
            o.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
        return this;
      }
      return (
        (d = m.getElementById(c[2])) &&
          d.parentNode &&
          ((this.length = 1), (this[0] = d)),
        (this.context = m),
        (this.selector = a),
        this
      );
    }
    return a.nodeType
      ? ((this.context = this[0] = a), (this.length = 1), this)
      : o.isFunction(a)
      ? void 0 !== y.ready
        ? y.ready(a)
        : a(o)
      : (void 0 !== a.selector &&
          ((this.selector = a.selector), (this.context = a.context)),
        o.makeArray(a, this));
  }).prototype = o.fn),
    (y = o(m));
  var B = /^(?:parents|prev(?:Until|All))/,
    C = { children: !0, contents: !0, next: !0, prev: !0 };
  function D(a, b) {
    for (; (a = a[b]) && 1 !== a.nodeType; );
    return a;
  }
  o.extend({
    dir: function (a, d, b) {
      for (var c = [], e = void 0 !== b; (a = a[d]) && 9 !== a.nodeType; )
        if (1 === a.nodeType) {
          if (e && o(a).is(b)) break;
          c.push(a);
        }
      return c;
    },
    sibling: function (a, c) {
      for (var b = []; a; a = a.nextSibling)
        1 === a.nodeType && a !== c && b.push(a);
      return b;
    },
  }),
    o.fn.extend({
      has: function (a) {
        var b = o(a, this),
          c = b.length;
        return this.filter(function () {
          for (var a = 0; c > a; a++) if (o.contains(this, b[a])) return !0;
        });
      },
      closest: function (b, e) {
        for (
          var a,
            d = 0,
            g = this.length,
            c = [],
            f = u.test(b) || "string" != typeof b ? o(b, e || this.context) : 0;
          g > d;
          d++
        )
          for (a = this[d]; a && a !== e; a = a.parentNode)
            if (
              a.nodeType < 11 &&
              (f
                ? f.index(a) > -1
                : 1 === a.nodeType && o.find.matchesSelector(a, b))
            ) {
              c.push(a);
              break;
            }
        return this.pushStack(c.length > 1 ? o.unique(c) : c);
      },
      index: function (a) {
        return a
          ? "string" == typeof a
            ? g.call(o(a), this[0])
            : g.call(this, a.jquery ? a[0] : a)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (a, b) {
        return this.pushStack(o.unique(o.merge(this.get(), o(a, b))));
      },
      addBack: function (a) {
        return this.add(
          null == a ? this.prevObject : this.prevObject.filter(a)
        );
      },
    }),
    o.each(
      {
        parent: function (b) {
          var a = b.parentNode;
          return a && 11 !== a.nodeType ? a : null;
        },
        parents: function (a) {
          return o.dir(a, "parentNode");
        },
        parentsUntil: function (a, c, b) {
          return o.dir(a, "parentNode", b);
        },
        next: function (a) {
          return D(a, "nextSibling");
        },
        prev: function (a) {
          return D(a, "previousSibling");
        },
        nextAll: function (a) {
          return o.dir(a, "nextSibling");
        },
        prevAll: function (a) {
          return o.dir(a, "previousSibling");
        },
        nextUntil: function (a, c, b) {
          return o.dir(a, "nextSibling", b);
        },
        prevUntil: function (a, c, b) {
          return o.dir(a, "previousSibling", b);
        },
        siblings: function (a) {
          return o.sibling((a.parentNode || {}).firstChild, a);
        },
        children: function (a) {
          return o.sibling(a.firstChild);
        },
        contents: function (a) {
          return a.contentDocument || o.merge([], a.childNodes);
        },
      },
      function (a, b) {
        o.fn[a] = function (e, d) {
          var c = o.map(this, b, e);
          return (
            "Until" !== a.slice(-5) && (d = e),
            d && "string" == typeof d && (c = o.filter(d, c)),
            this.length > 1 && (C[a] || o.unique(c), B.test(a) && c.reverse()),
            this.pushStack(c)
          );
        };
      }
    );
  var E = /\S+/g,
    F = {};
  function I() {
    m.removeEventListener("DOMContentLoaded", I, !1),
      a.removeEventListener("load", I, !1),
      o.ready();
  }
  (o.Callbacks = function (a) {
    a =
      "string" == typeof a
        ? F[a] ||
          ((d = F[(c = a)] = {}),
          o.each(c.match(E) || [], function (b, a) {
            d[a] = !0;
          }),
          d)
        : o.extend({}, a);
    var c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k = [],
      l = !a.once && [],
      m = function (c) {
        for (
          e = a.memory && c, f = !0, j = h || 0, h = 0, i = k.length, g = !0;
          k && i > j;
          j++
        )
          if (!1 === k[j].apply(c[0], c[1]) && a.stopOnFalse) {
            e = !1;
            break;
          }
        (g = !1),
          k && (l ? l.length && m(l.shift()) : e ? (k = []) : b.disable());
      },
      b = {
        add: function () {
          if (k) {
            var c = k.length;
            (function d(c) {
              o.each(c, function (f, c) {
                var e = o.type(c);
                "function" === e
                  ? (a.unique && b.has(c)) || k.push(c)
                  : c && c.length && "string" !== e && d(c);
              });
            })(arguments),
              g ? (i = k.length) : e && ((h = c), m(e));
          }
          return this;
        },
        remove: function () {
          return (
            k &&
              o.each(arguments, function (c, b) {
                for (var a; (a = o.inArray(b, k, a)) > -1; )
                  k.splice(a, 1), g && (i >= a && i--, j >= a && j--);
              }),
            this
          );
        },
        has: function (a) {
          return a ? o.inArray(a, k) > -1 : !(!k || !k.length);
        },
        empty: function () {
          return (k = []), (i = 0), this;
        },
        disable: function () {
          return (k = l = e = void 0), this;
        },
        disabled: function () {
          return !k;
        },
        lock: function () {
          return (l = void 0), e || b.disable(), this;
        },
        locked: function () {
          return !l;
        },
        fireWith: function (b, a) {
          return (
            k &&
              (!f || l) &&
              ((a = [b, (a = a || []).slice ? a.slice() : a]),
              g ? l.push(a) : m(a)),
            this
          );
        },
        fire: function () {
          return b.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!f;
        },
      };
    return b;
  }),
    o.extend({
      Deferred: function (c) {
        var d = [
            ["resolve", "done", o.Callbacks("once memory"), "resolved"],
            ["reject", "fail", o.Callbacks("once memory"), "rejected"],
            ["notify", "progress", o.Callbacks("memory")],
          ],
          e = "pending",
          b = {
            state: function () {
              return e;
            },
            always: function () {
              return a.done(arguments).fail(arguments), this;
            },
            then: function () {
              var c = arguments;
              return o
                .Deferred(function (e) {
                  o.each(d, function (d, f) {
                    var g = o.isFunction(c[d]) && c[d];
                    a[f[1]](function () {
                      var a = g && g.apply(this, arguments);
                      a && o.isFunction(a.promise)
                        ? a
                            .promise()
                            .done(e.resolve)
                            .fail(e.reject)
                            .progress(e.notify)
                        : e[f[0] + "With"](
                            this === b ? e.promise() : this,
                            g ? [a] : arguments
                          );
                    });
                  }),
                    (c = null);
                })
                .promise();
            },
            promise: function (a) {
              return null != a ? o.extend(a, b) : b;
            },
          },
          a = {};
        return (
          (b.pipe = b.then),
          o.each(d, function (g, c) {
            var f = c[2],
              h = c[3];
            (b[c[1]] = f.add),
              h &&
                f.add(
                  function () {
                    e = h;
                  },
                  d[1 ^ g][2].disable,
                  d[2][2].lock
                ),
              (a[c[0]] = function () {
                return a[c[0] + "With"](this === a ? b : this, arguments), this;
              }),
              (a[c[0] + "With"] = f.fireWith);
          }),
          b.promise(a),
          c && c.call(a, a),
          a
        );
      },
      when: function (d) {
        var h,
          i,
          e,
          a = 0,
          c = d.call(arguments),
          b = c.length,
          f = 1 !== b || (d && o.isFunction(d.promise)) ? b : 0,
          g = 1 === f ? d : o.Deferred(),
          j = function (a, b, c) {
            return function (d) {
              (b[a] = this),
                (c[a] = arguments.length > 1 ? d.call(arguments) : d),
                c === h ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
            };
          };
        if (b > 1)
          for (h = new Array(b), i = new Array(b), e = new Array(b); b > a; a++)
            c[a] && o.isFunction(c[a].promise)
              ? c[a]
                  .promise()
                  .done(j(a, e, c))
                  .fail(g.reject)
                  .progress(j(a, i, h))
              : --f;
        return f || g.resolveWith(e, c), g.promise();
      },
    }),
    (o.fn.ready = function (a) {
      return o.ready.promise().done(a), this;
    }),
    o.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (a) {
        a ? o.readyWait++ : o.ready(!0);
      },
      ready: function (a) {
        (!0 === a ? --o.readyWait : o.isReady) ||
          ((o.isReady = !0),
          (!0 !== a && --o.readyWait > 0) ||
            (H.resolveWith(m, [o]),
            o.fn.trigger && o(m).trigger("ready").off("ready")));
      },
    }),
    (o.ready.promise = function (a) {
      return (
        H ||
          ((H = o.Deferred()),
          "complete" === m.readyState
            ? setTimeout(o.ready)
            : (m.addEventListener("DOMContentLoaded", I, !1),
              a.addEventListener("load", I, !1))),
        H.promise(a)
      );
    }),
    o.ready.promise();
  var J = (o.access = function (b, a, d, e, g, i, f) {
    var c = 0,
      j = b.length,
      h = null == d;
    if ("object" === o.type(d))
      for (c in ((g = !0), d)) o.access(b, a, c, d[c], !0, i, f);
    else if (
      void 0 !== e &&
      ((g = !0),
      o.isFunction(e) || (f = !0),
      h &&
        (f
          ? (a.call(b, e), (a = null))
          : ((h = a),
            (a = function (a, c, b) {
              return h.call(o(a), b);
            }))),
      a)
    )
      for (; j > c; c++) a(b[c], d, f ? e : e.call(b[c], c, a(b[c], d)));
    return g ? b : h ? a.call(b) : j ? a(b[0], d) : i;
  });
  function K() {
    Object.defineProperty((this.cache = {}), 0, {
      get: function () {
        return {};
      },
    }),
      (this.expando = o.expando + Math.random());
  }
  (o.acceptData = function (a) {
    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
  }),
    (K.uid = 1),
    (K.accepts = o.acceptData),
    (K.prototype = {
      key: function (b) {
        if (!K.accepts(b)) return 0;
        var c = {},
          a = b[this.expando];
        if (!a) {
          a = K.uid++;
          try {
            (c[this.expando] = { value: a }), Object.defineProperties(b, c);
          } catch (d) {
            (c[this.expando] = a), o.extend(b, c);
          }
        }
        return this.cache[a] || (this.cache[a] = {}), a;
      },
      set: function (e, a, f) {
        var c,
          d = this.key(e),
          b = this.cache[d];
        if ("string" == typeof a) b[a] = f;
        else if (o.isEmptyObject(b)) o.extend(this.cache[d], a);
        else for (c in a) b[c] = a[c];
        return b;
      },
      get: function (c, a) {
        var b = this.cache[this.key(c)];
        return void 0 === a ? b : b[a];
      },
      access: function (c, a, b) {
        var d;
        return void 0 === a || (a && "string" == typeof a && void 0 === b)
          ? void 0 !== (d = this.get(c, a))
            ? d
            : this.get(c, o.camelCase(a))
          : (this.set(c, a, b), void 0 !== b ? b : a);
      },
      remove: function (g, a) {
        var c,
          b,
          d,
          f = this.key(g),
          e = this.cache[f];
        if (void 0 === a) this.cache[f] = {};
        else
          for (
            o.isArray(a)
              ? (b = a.concat(a.map(o.camelCase)))
              : ((d = o.camelCase(a)),
                (b =
                  (a in e) ? [a, d] : ((b = d) in e) ? [b] : b.match(E) || [])),
              c = b.length;
            c--;

          )
            delete e[b[c]];
      },
      hasData: function (a) {
        return !o.isEmptyObject(this.cache[a[this.expando]] || {});
      },
      discard: function (a) {
        a[this.expando] && delete this.cache[a[this.expando]];
      },
    });
  var L = new K(),
    M = new K(),
    N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    O = /([A-Z])/g;
  function P(a, b, c) {
    var d;
    if (void 0 === c && 1 === a.nodeType) {
      if (
        ((d = "data-" + b.replace(O, "-$1").toLowerCase()),
        "string" == typeof (c = a.getAttribute(d)))
      ) {
        try {
          c =
            "true" === c ||
            ("false" !== c &&
              ("null" === c
                ? null
                : +c + "" === c
                ? +c
                : N.test(c)
                ? o.parseJSON(c)
                : c));
        } catch (e) {}
        M.set(a, b, c);
      } else c = void 0;
    }
    return c;
  }
  o.extend({
    hasData: function (a) {
      return M.hasData(a) || L.hasData(a);
    },
    data: function (a, b, c) {
      return M.access(a, b, c);
    },
    removeData: function (a, b) {
      M.remove(a, b);
    },
    _data: function (a, b, c) {
      return L.access(a, b, c);
    },
    _removeData: function (a, b) {
      L.remove(a, b);
    },
  }),
    o.fn.extend({
      data: function (e, g) {
        var c,
          b,
          d,
          a = this[0],
          f = a && a.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((d = M.get(a)), 1 === a.nodeType && !L.get(a, "hasDataAttrs"))
          ) {
            for (c = f.length; c--; )
              0 === (b = f[c].name).indexOf("data-") &&
                P(a, (b = o.camelCase(b.slice(5))), d[b]);
            L.set(a, "hasDataAttrs", !0);
          }
          return d;
        }
        return "object" == typeof e
          ? this.each(function () {
              M.set(this, e);
            })
          : J(
              this,
              function (d) {
                var b,
                  c = o.camelCase(e);
                if (a && void 0 === d) {
                  if (
                    void 0 !== (b = M.get(a, e)) ||
                    void 0 !== (b = M.get(a, c)) ||
                    void 0 !== (b = P(a, c, void 0))
                  )
                    return b;
                } else
                  this.each(function () {
                    var a = M.get(this, c);
                    M.set(this, c, d),
                      -1 !== e.indexOf("-") &&
                        void 0 !== a &&
                        M.set(this, e, d);
                  });
              },
              null,
              g,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (a) {
        return this.each(function () {
          M.remove(this, a);
        });
      },
    }),
    o.extend({
      queue: function (d, b, c) {
        var a;
        return d
          ? ((b = (b || "fx") + "queue"),
            (a = L.get(d, b)),
            c &&
              (!a || o.isArray(c)
                ? (a = L.access(d, b, o.makeArray(c)))
                : a.push(c)),
            a || [])
          : void 0;
      },
      dequeue: function (e, a) {
        a = a || "fx";
        var b = o.queue(e, a),
          f = b.length,
          c = b.shift(),
          d = o._queueHooks(e, a),
          g = function () {
            o.dequeue(e, a);
          };
        "inprogress" === c && ((c = b.shift()), f--),
          c &&
            ("fx" === a && b.unshift("inprogress"),
            delete d.stop,
            c.call(e, g, d)),
          !f && d && d.empty.fire();
      },
      _queueHooks: function (a, c) {
        var b = c + "queueHooks";
        return (
          L.get(a, b) ||
          L.access(a, b, {
            empty: o.Callbacks("once memory").add(function () {
              L.remove(a, [c + "queue", b]);
            }),
          })
        );
      },
    }),
    o.fn.extend({
      queue: function (a, b) {
        var c = 2;
        return (
          "string" != typeof a && ((b = a), (a = "fx"), c--),
          arguments.length < c
            ? o.queue(this[0], a)
            : void 0 === b
            ? this
            : this.each(function () {
                var c = o.queue(this, a, b);
                o._queueHooks(this, a),
                  "fx" === a && "inprogress" !== c[0] && o.dequeue(this, a);
              })
        );
      },
      dequeue: function (a) {
        return this.each(function () {
          o.dequeue(this, a);
        });
      },
      clearQueue: function (a) {
        return this.queue(a || "fx", []);
      },
      promise: function (a, c) {
        var b,
          f = 1,
          g = o.Deferred(),
          h = this,
          d = this.length,
          e = function () {
            --f || g.resolveWith(h, [h]);
          };
        for (
          "string" != typeof a && ((c = a), (a = void 0)), a = a || "fx";
          d--;

        )
          (b = L.get(h[d], a + "queueHooks")) &&
            b.empty &&
            (f++, b.empty.add(e));
        return e(), g.promise(c);
      },
    });
  var b,
    Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    R = ["Top", "Right", "Bottom", "Left"],
    S = function (a, b) {
      return (
        (a = b || a),
        "none" === o.css(a, "display") || !o.contains(a.ownerDocument, a)
      );
    },
    T = /^(?:checkbox|radio)$/i;
  ((b = m
    .createDocumentFragment()
    .appendChild(m.createElement("div"))).innerHTML =
    "<input type='radio' checked='checked' name='t'/>"),
    (l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (b.innerHTML = "<textarea>x</textarea>"),
    (l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue);
  var U = "undefined";
  l.focusinBubbles = "onfocusin" in a;
  var V = /^key/,
    W = /^(?:mouse|contextmenu)|click/,
    X = /^(?:focusinfocus|focusoutblur)$/,
    Y = /^([^.]*)(?:\.(.+)|)$/;
  function Z() {
    return !0;
  }
  function $() {
    return !1;
  }
  function _() {
    try {
      return m.activeElement;
    } catch (a) {}
  }
  (o.event = {
    global: {},
    add: function (f, k, b, o, d) {
      var l,
        i,
        p,
        j,
        m,
        e,
        c,
        g,
        a,
        n,
        q,
        h = L.get(f);
      if (h)
        for (
          b.handler && ((b = (l = b).handler), (d = l.selector)),
            b.guid || (b.guid = o.guid++),
            (j = h.events) || (j = h.events = {}),
            (i = h.handle) ||
              (i = h.handle =
                function (a) {
                  return "function" !== U && o.event.triggered !== a.type
                    ? o.event.dispatch.apply(f, arguments)
                    : void 0;
                }),
            m = (k = (k || "").match(E) || [""]).length;
          m--;

        )
          (a = q = (p = Y.exec(k[m]) || [])[1]),
            (n = (p[2] || "").split(".").sort()),
            a &&
              ((c = o.event.special[a] || {}),
              (a = (d ? c.delegateType : c.bindType) || a),
              (c = o.event.special[a] || {}),
              (e = o.extend(
                {
                  type: a,
                  origType: q,
                  data: o,
                  handler: b,
                  guid: b.guid,
                  selector: d,
                  needsContext: d && o.expr.match.needsContext.test(d),
                  namespace: n.join("."),
                },
                l
              )),
              (g = j[a]) ||
                (((g = j[a] = []).delegateCount = 0),
                (c.setup && !1 !== c.setup.call(f, o, n, i)) ||
                  (f.addEventListener && f.addEventListener(a, i, !1))),
              c.add &&
                (c.add.call(f, e), e.handler.guid || (e.handler.guid = b.guid)),
              d ? g.splice(g.delegateCount++, 0, e) : g.push(e),
              (o.event.global[a] = !0));
    },
    remove: function (c, j, m, g, q) {
      var k,
        o,
        e,
        h,
        l,
        b,
        d,
        f,
        a,
        n,
        p,
        i = L.hasData(c) && L.get(c);
      if (i && (h = i.events)) {
        for (l = (j = (j || "").match(E) || [""]).length; l--; )
          if (
            ((a = p = (e = Y.exec(j[l]) || [])[1]),
            (n = (e[2] || "").split(".").sort()),
            a)
          ) {
            for (
              d = o.event.special[a] || {},
                f = h[(a = (g ? d.delegateType : d.bindType) || a)] || [],
                e =
                  e[2] &&
                  new RegExp("(^|\\.)" + n.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                o = k = f.length;
              k--;

            )
              (b = f[k]),
                (!q && p !== b.origType) ||
                  (m && m.guid !== b.guid) ||
                  (e && !e.test(b.namespace)) ||
                  (g && g !== b.selector && ("**" !== g || !b.selector)) ||
                  (f.splice(k, 1),
                  b.selector && f.delegateCount--,
                  d.remove && d.remove.call(c, b));
            o &&
              !f.length &&
              ((d.teardown && !1 !== d.teardown.call(c, n, i.handle)) ||
                o.removeEvent(c, a, i.handle),
              delete h[a]);
          } else for (a in h) o.event.remove(c, a + j[l], m, g, !0);
        o.isEmptyObject(h) && (delete i.handle, L.remove(c, "events"));
      }
    },
    trigger: function (a, g, b, j) {
      var m,
        c,
        e,
        n,
        h,
        i,
        f,
        k = [b || m],
        d = j.call(a, "type") ? a.type : a,
        l = j.call(a, "namespace") ? a.namespace.split(".") : [];
      if (
        ((c = e = b = b || m),
        3 !== b.nodeType &&
          8 !== b.nodeType &&
          !X.test(d + o.event.triggered) &&
          (d.indexOf(".") >= 0 && ((d = (l = d.split(".")).shift()), l.sort()),
          (h = 0 > d.indexOf(":") && "on" + d),
          ((a = a[o.expando]
            ? a
            : new o.Event(d, "object" == typeof a && a)).isTrigger = j ? 2 : 3),
          (a.namespace = l.join(".")),
          (a.namespace_re = a.namespace
            ? new RegExp("(^|\\.)" + l.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (a.result = void 0),
          a.target || (a.target = b),
          (g = null == g ? [a] : o.makeArray(g, [a])),
          (f = o.event.special[d] || {}),
          j || !f.trigger || !1 !== f.trigger.apply(b, g)))
      ) {
        if (!j && !f.noBubble && !o.isWindow(b)) {
          for (
            n = f.delegateType || d, X.test(n + d) || (c = c.parentNode);
            c;
            c = c.parentNode
          )
            k.push(c), (e = c);
          e === (b.ownerDocument || m) &&
            k.push(e.defaultView || e.parentWindow || a);
        }
        for (m = 0; (c = k[m++]) && !a.isPropagationStopped(); )
          (a.type = m > 1 ? n : f.bindType || d),
            (i = (L.get(c, "events") || {})[a.type] && L.get(c, "handle")) &&
              i.apply(c, g),
            (i = h && c[h]) &&
              i.apply &&
              o.acceptData(c) &&
              ((a.result = i.apply(c, g)),
              !1 === a.result && a.preventDefault());
        return (
          (a.type = d),
          j ||
            a.isDefaultPrevented() ||
            (f._default && !1 !== f._default.apply(k.pop(), g)) ||
            !o.acceptData(b) ||
            (h &&
              o.isFunction(b[d]) &&
              !o.isWindow(b) &&
              ((e = b[h]) && (b[h] = null),
              (o.event.triggered = d),
              b[d](),
              (o.event.triggered = void 0),
              e && (b[h] = e))),
          a.result
        );
      }
    },
    dispatch: function (a) {
      a = o.event.fix(a);
      var e,
        f,
        g,
        c,
        b,
        h = [],
        i = d.call(arguments),
        j = (L.get(this, "events") || {})[a.type] || [],
        d = o.event.special[a.type] || {};
      if (
        ((i[0] = a),
        (a.delegateTarget = this),
        !d.preDispatch || !1 !== d.preDispatch.call(this, a))
      ) {
        for (
          h = o.event.handlers.call(this, a, j), e = 0;
          (c = h[e++]) && !a.isPropagationStopped();

        )
          for (
            a.currentTarget = c.elem, f = 0;
            (b = c.handlers[f++]) && !a.isImmediatePropagationStopped();

          )
            (!a.namespace_re || a.namespace_re.test(b.namespace)) &&
              ((a.handleObj = b),
              (a.data = b.data),
              void 0 !==
                (g = (
                  (o.event.special[b.origType] || {}).handle || b.handler
                ).apply(c.elem, i)) &&
                !1 === (a.result = g) &&
                (a.preventDefault(), a.stopPropagation()));
        return d.postDispatch && d.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function (d, e) {
      var f,
        b,
        c,
        h,
        i = [],
        g = e.delegateCount,
        a = d.target;
      if (g && a.nodeType && (!d.button || "click" !== d.type)) {
        for (; a !== this; a = a.parentNode || this)
          if (!0 !== a.disabled || "click" !== d.type) {
            for (b = [], f = 0; g > f; f++)
              void 0 === b[(c = (h = e[f]).selector + " ")] &&
                (b[c] = h.needsContext
                  ? o(c, this).index(a) >= 0
                  : o.find(c, this, null, [a]).length),
                b[c] && b.push(h);
            b.length && i.push({ elem: a, handlers: b });
          }
      }
      return g < e.length && i.push({ elem: this, handlers: e.slice(g) }), i;
    },
    props:
      "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (a, b) {
        return (
          null == a.which &&
            (a.which = null != b.charCode ? b.charCode : b.keyCode),
          a
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (c, d) {
        var f,
          a,
          b,
          e = d.button;
        return (
          null == c.pageX &&
            null != d.clientX &&
            ((a = (f = c.target.ownerDocument || m).documentElement),
            (b = f.body),
            (c.pageX =
              d.clientX +
              ((a && a.scrollLeft) || (b && b.scrollLeft) || 0) -
              ((a && a.clientLeft) || (b && b.clientLeft) || 0)),
            (c.pageY =
              d.clientY +
              ((a && a.scrollTop) || (b && b.scrollTop) || 0) -
              ((a && a.clientTop) || (b && b.clientTop) || 0))),
          c.which ||
            void 0 === e ||
            (c.which = 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0),
          c
        );
      },
    },
    fix: function (a) {
      if (a[o.expando]) return a;
      var d,
        g,
        e,
        c = a.type,
        f = a,
        b = this.fixHooks[c];
      for (
        b ||
          (this.fixHooks[c] = b =
            W.test(c) ? this.mouseHooks : V.test(c) ? this.keyHooks : {}),
          e = b.props ? this.props.concat(b.props) : this.props,
          a = new o.Event(f),
          d = e.length;
        d--;

      )
        a[(g = e[d])] = f[g];
      return (
        a.target || (a.target = m),
        3 === a.target.nodeType && (a.target = a.target.parentNode),
        b.filter ? b.filter(a, f) : a
      );
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          return this !== _() && this.focus ? (this.focus(), !1) : void 0;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === _() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          return "checkbox" === this.type &&
            this.click &&
            o.nodeName(this, "input")
            ? (this.click(), !1)
            : void 0;
        },
        _default: function (a) {
          return o.nodeName(a.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result && (a.originalEvent.returnValue = a.result);
        },
      },
    },
    simulate: function (d, b, c, e) {
      var a = o.extend(new o.Event(), c, {
        type: d,
        isSimulated: !0,
        originalEvent: {},
      });
      e ? o.event.trigger(a, null, b) : o.event.dispatch.call(b, a),
        a.isDefaultPrevented() && c.preventDefault();
    },
  }),
    (o.removeEvent = function (a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c, !1);
    }),
    (o.Event = function (a, b) {
      return this instanceof o.Event
        ? (a && a.type
            ? ((this.originalEvent = a),
              (this.type = a.type),
              (this.isDefaultPrevented =
                a.defaultPrevented ||
                (void 0 === a.defaultPrevented &&
                  a.getPreventDefault &&
                  a.getPreventDefault())
                  ? Z
                  : $))
            : (this.type = a),
          b && o.extend(this, b),
          (this.timeStamp = (a && a.timeStamp) || o.now()),
          void (this[o.expando] = !0))
        : new o.Event(a, b);
    }),
    (o.Event.prototype = {
      isDefaultPrevented: $,
      isPropagationStopped: $,
      isImmediatePropagationStopped: $,
      preventDefault: function () {
        var a = this.originalEvent;
        (this.isDefaultPrevented = Z),
          a && a.preventDefault && a.preventDefault();
      },
      stopPropagation: function () {
        var a = this.originalEvent;
        (this.isPropagationStopped = Z),
          a && a.stopPropagation && a.stopPropagation();
      },
      stopImmediatePropagation: function () {
        (this.isImmediatePropagationStopped = Z), this.stopPropagation();
      },
    }),
    o.each(
      { mouseenter: "mouseover", mouseleave: "mouseout" },
      function (b, a) {
        o.event.special[b] = {
          delegateType: a,
          bindType: a,
          handle: function (b) {
            var d,
              c = b.relatedTarget,
              e = b.handleObj;
            return (
              (c && (c === this || o.contains(this, c))) ||
                ((b.type = e.origType),
                (d = e.handler.apply(this, arguments)),
                (b.type = a)),
              d
            );
          },
        };
      }
    ),
    l.focusinBubbles ||
      o.each({ focus: "focusin", blur: "focusout" }, function (b, a) {
        var c = function (b) {
          o.event.simulate(a, b.target, o.event.fix(b), !0);
        };
        o.event.special[a] = {
          setup: function () {
            var d = this.ownerDocument || this,
              e = L.access(d, a);
            e || d.addEventListener(b, c, !0), L.access(d, a, (e || 0) + 1);
          },
          teardown: function () {
            var d = this.ownerDocument || this,
              e = L.access(d, a) - 1;
            e
              ? L.access(d, a, e)
              : (d.removeEventListener(b, c, !0), L.remove(d, a));
          },
        };
      }),
    o.fn.extend({
      on: function (d, b, c, a, g) {
        var e, f;
        if ("object" == typeof d) {
          for (f in ("string" != typeof b && ((c = c || b), (b = void 0)), d))
            this.on(f, b, c, d[f], g);
          return this;
        }
        if (
          (null == c && null == a
            ? ((a = b), (c = b = void 0))
            : null == a &&
              ("string" == typeof b
                ? ((a = c), (c = void 0))
                : ((a = c), (c = b), (b = void 0))),
          !1 === a)
        )
          a = $;
        else if (!a) return this;
        return (
          1 === g &&
            ((e = a),
            ((a = function (a) {
              return o().off(a), e.apply(this, arguments);
            }).guid = e.guid || (e.guid = o.guid++))),
          this.each(function () {
            o.event.add(this, d, a, c, b);
          })
        );
      },
      one: function (a, b, c, d) {
        return this.on(a, b, c, d, 1);
      },
      off: function (a, c, d) {
        var b, e;
        if (a && a.preventDefault && a.handleObj)
          return (
            (b = a.handleObj),
            o(a.delegateTarget).off(
              b.namespace ? b.origType + "." + b.namespace : b.origType,
              b.selector,
              b.handler
            ),
            this
          );
        if ("object" == typeof a) {
          for (e in a) this.off(e, c, a[e]);
          return this;
        }
        return (
          (!1 === c || "function" == typeof c) && ((d = c), (c = void 0)),
          !1 === d && (d = $),
          this.each(function () {
            o.event.remove(this, a, d, c);
          })
        );
      },
      trigger: function (a, b) {
        return this.each(function () {
          o.event.trigger(a, b, this);
        });
      },
      triggerHandler: function (b, c) {
        var a = this[0];
        return a ? o.event.trigger(b, c, a, !0) : void 0;
      },
    });
  var ab =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    bb = /<([\w:]+)/,
    cb = /<|&#?\w+;/,
    db = /<(?:script|style|link)/i,
    eb = /checked\s*(?:[^=]|=\s*.checked.)/i,
    fb = /^$|\/(?:java|ecma)script/i,
    gb = /^true\/(.*)/,
    hb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    ib = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  function jb(a, b) {
    return o.nodeName(a, "table") &&
      o.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr")
      ? a.getElementsByTagName("tbody")[0] ||
          a.appendChild(a.ownerDocument.createElement("tbody"))
      : a;
  }
  function kb(a) {
    return (a.type = (null !== a.getAttribute("type")) + "/" + a.type), a;
  }
  function lb(a) {
    var b = gb.exec(a.type);
    return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
  }
  function mb(a, b) {
    for (var c = 0, d = a.length; d > c; c++)
      L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"));
  }
  function nb(a, b) {
    var c, d, e, f, g, h, i, j;
    if (1 === b.nodeType) {
      if (
        L.hasData(a) &&
        ((f = L.access(a)), (g = L.set(b, f)), (j = f.events))
      )
        for (e in (delete g.handle, (g.events = {}), j))
          for (c = 0, d = j[e].length; d > c; c++) o.event.add(b, e, j[e][c]);
      M.hasData(a) && ((h = M.access(a)), (i = o.extend({}, h)), M.set(b, i));
    }
  }
  function ob(a, b) {
    var c = a.getElementsByTagName
      ? a.getElementsByTagName(b || "*")
      : a.querySelectorAll
      ? a.querySelectorAll(b || "*")
      : [];
    return void 0 === b || (b && o.nodeName(a, b)) ? o.merge([a], c) : c;
  }
  function pb(a, b) {
    var c = b.nodeName.toLowerCase();
    "input" === c && T.test(a.type)
      ? (b.checked = a.checked)
      : ("input" === c || "textarea" === c) &&
        (b.defaultValue = a.defaultValue);
  }
  (ib.optgroup = ib.option),
    (ib.tbody = ib.tfoot = ib.colgroup = ib.caption = ib.thead),
    (ib.th = ib.td),
    o.extend({
      clone: function (a, g, h) {
        var b,
          f,
          c,
          d,
          e = a.cloneNode(!0),
          i = o.contains(a.ownerDocument, a);
        if (
          !(
            l.noCloneChecked ||
            (1 !== a.nodeType && 11 !== a.nodeType) ||
            o.isXMLDoc(a)
          )
        )
          for (d = ob(e), c = ob(a), b = 0, f = c.length; f > b; b++)
            pb(c[b], d[b]);
        if (g) {
          if (h)
            for (
              c = c || ob(a), d = d || ob(e), b = 0, f = c.length;
              f > b;
              b++
            )
              nb(c[b], d[b]);
          else nb(a, e);
        }
        return (
          (d = ob(e, "script")).length > 0 && mb(d, !i && ob(a, "script")), e
        );
      },
      buildFragment: function (i, h, j, k) {
        for (
          var a,
            b,
            e,
            l,
            f,
            c = h.createDocumentFragment(),
            g = [],
            d = 0,
            m = i.length;
          m > d;
          d++
        )
          if ((a = i[d]) || 0 === a) {
            if ("object" === o.type(a)) o.merge(g, a.nodeType ? [a] : a);
            else if (cb.test(a)) {
              for (
                b = b || c.appendChild(h.createElement("div")),
                  e =
                    ib[(bb.exec(a) || ["", ""])[1].toLowerCase()] ||
                    ib._default,
                  b.innerHTML = e[1] + a.replace(ab, "<$1></$2>") + e[2],
                  f = e[0];
                f--;

              )
                b = b.lastChild;
              o.merge(g, b.childNodes), ((b = c.firstChild).textContent = "");
            } else g.push(h.createTextNode(a));
          }
        for (c.textContent = "", d = 0; (a = g[d++]); )
          if (
            (!k || -1 === o.inArray(a, k)) &&
            ((l = o.contains(a.ownerDocument, a)),
            (b = ob(c.appendChild(a), "script")),
            l && mb(b),
            j)
          )
            for (f = 0; (a = b[f++]); ) fb.test(a.type || "") && j.push(a);
        return c;
      },
      cleanData: function (h) {
        for (
          var d, a, f, b, c, e, i = o.event.special, g = 0;
          void 0 !== (a = h[g]);
          g++
        ) {
          if (o.acceptData(a) && (c = a[L.expando]) && (d = L.cache[c])) {
            if ((f = Object.keys(d.events || {})).length)
              for (e = 0; void 0 !== (b = f[e]); e++)
                i[b] ? o.event.remove(a, b) : o.removeEvent(a, b, d.handle);
            L.cache[c] && delete L.cache[c];
          }
          delete M.cache[a[M.expando]];
        }
      },
    }),
    o.fn.extend({
      text: function (a) {
        return J(
          this,
          function (a) {
            return void 0 === a
              ? o.text(this)
              : this.empty().each(function () {
                  (1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType) &&
                    (this.textContent = a);
                });
          },
          null,
          a,
          arguments.length
        );
      },
      append: function () {
        return this.domManip(arguments, function (a) {
          (1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType) &&
            jb(this, a).appendChild(a);
        });
      },
      prepend: function () {
        return this.domManip(arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = jb(this, a);
            b.insertBefore(a, b.firstChild);
          }
        });
      },
      before: function () {
        return this.domManip(arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this);
        });
      },
      after: function () {
        return this.domManip(arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
        });
      },
      remove: function (b, c) {
        for (
          var a, e = b ? o.filter(b, this) : this, d = 0;
          null != (a = e[d]);
          d++
        )
          c || 1 !== a.nodeType || o.cleanData(ob(a)),
            a.parentNode &&
              (c && o.contains(a.ownerDocument, a) && mb(ob(a, "script")),
              a.parentNode.removeChild(a));
        return this;
      },
      empty: function () {
        for (var a, b = 0; null != (a = this[b]); b++)
          1 === a.nodeType && (o.cleanData(ob(a, !1)), (a.textContent = ""));
        return this;
      },
      clone: function (a, b) {
        return (
          (a = null != a && a),
          (b = null == b ? a : b),
          this.map(function () {
            return o.clone(this, a, b);
          })
        );
      },
      html: function (a) {
        return J(
          this,
          function (a) {
            var b = this[0] || {},
              c = 0,
              d = this.length;
            if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
            if (
              "string" == typeof a &&
              !db.test(a) &&
              !ib[(bb.exec(a) || ["", ""])[1].toLowerCase()]
            ) {
              a = a.replace(ab, "<$1></$2>");
              try {
                for (; d > c; c++)
                  (b = this[c] || {}),
                    1 === b.nodeType &&
                      (o.cleanData(ob(b, !1)), (b.innerHTML = a));
                b = 0;
              } catch (e) {}
            }
            b && this.empty().append(a);
          },
          null,
          a,
          arguments.length
        );
      },
      replaceWith: function () {
        var a = arguments[0];
        return (
          this.domManip(arguments, function (b) {
            (a = this.parentNode),
              o.cleanData(ob(this)),
              a && a.replaceChild(b, this);
          }),
          a && (a.length || a.nodeType) ? this : this.remove()
        );
      },
      detach: function (a) {
        return this.remove(a, !0);
      },
      domManip: function (e, k) {
        e = e.apply([], e);
        var d,
          h,
          c,
          f,
          a,
          j,
          b = 0,
          g = this.length,
          n = this,
          l = g - 1,
          i = e[0],
          m = o.isFunction(i);
        if (m || (g > 1 && "string" == typeof i && !l.checkClone && eb.test(i)))
          return this.each(function (a) {
            var b = n.eq(a);
            m && (e[0] = i.call(this, a, b.html())), b.domManip(e, k);
          });
        if (
          g &&
          ((h = (d = o.buildFragment(e, this[0].ownerDocument, !1, this))
            .firstChild),
          1 === d.childNodes.length && (d = h),
          h)
        ) {
          for (f = (c = o.map(ob(d, "script"), kb)).length; g > b; b++)
            (a = d),
              b !== l &&
                ((a = o.clone(a, !0, !0)), f && o.merge(c, ob(a, "script"))),
              k.call(this[b], a, b);
          if (f)
            for (
              j = c[c.length - 1].ownerDocument, o.map(c, lb), b = 0;
              f > b;
              b++
            )
              (a = c[b]),
                fb.test(a.type || "") &&
                  !L.access(a, "globalEval") &&
                  o.contains(j, a) &&
                  (a.src
                    ? o._evalUrl && o._evalUrl(a.src)
                    : o.globalEval(a.textContent.replace(hb, "")));
        }
        return this;
      },
    }),
    o.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (a, b) {
        o.fn[a] = function (g) {
          for (var c, d = [], e = o(g), f = e.length - 1, a = 0; f >= a; a++)
            (c = a === f ? this : this.clone(!0)),
              o(e[a])[b](c),
              f.apply(d, c.get());
          return this.pushStack(d);
        };
      }
    );
  var H,
    qb,
    rb = {};
  function sb(b, c) {
    var d = o(c.createElement(b)).appendTo(c.body),
      e = a.getDefaultComputedStyle
        ? a.getDefaultComputedStyle(d[0]).display
        : o.css(d[0], "display");
    return d.detach(), e;
  }
  function tb(a) {
    var b = m,
      c = rb[a];
    return (
      c ||
        (("none" !== (c = sb(a, b)) && c) ||
          ((b = (qb = (
            qb || o("<iframe frameborder='0' width='0' height='0'/>")
          ).appendTo(b.documentElement))[0].contentDocument).write(),
          b.close(),
          (c = sb(a, b)),
          qb.detach()),
        (rb[a] = c)),
      c
    );
  }
  var ub = /^margin/,
    vb = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
    wb = function (a) {
      return a.ownerDocument.defaultView.getComputedStyle(a, null);
    };
  function xb(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.style;
    return (
      (c = c || wb(a)) && (g = c.getPropertyValue(b) || c[b]),
      c &&
        ("" !== g || o.contains(a.ownerDocument, a) || (g = o.style(a, b)),
        vb.test(g) &&
          ub.test(b) &&
          ((d = h.width),
          (e = h.minWidth),
          (f = h.maxWidth),
          (h.minWidth = h.maxWidth = h.width = g),
          (g = c.width),
          (h.width = d),
          (h.minWidth = e),
          (h.maxWidth = f))),
      void 0 !== g ? g + "" : g
    );
  }
  function yb(a, b) {
    return {
      get: function () {
        return a()
          ? void delete this.get
          : (this.get = b).apply(this, arguments);
      },
    };
  }
  !(function () {
    var c,
      d,
      e = m.documentElement,
      b = m.createElement("div"),
      a = m.createElement("div");
    function f() {
      (a.style.cssText =
        "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%"),
        e.appendChild(b);
      var f = a.getComputedStyle(a, null);
      (c = "1%" !== f.top), (d = "4px" === f.width), e.removeChild(b);
    }
    (a.style.backgroundClip = "content-box"),
      (a.cloneNode(!0).style.backgroundClip = ""),
      (l.clearCloneStyle = "content-box" === a.style.backgroundClip),
      (b.style.cssText =
        "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px"),
      b.appendChild(a),
      a.getComputedStyle &&
        o.extend(l, {
          pixelPosition: function () {
            return f(), c;
          },
          boxSizingReliable: function () {
            return null == d && f(), d;
          },
          reliableMarginRight: function () {
            var d,
              c = a.appendChild(m.createElement("div"));
            return (
              (c.style.cssText = a.style.cssText =
                "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box"),
              (c.style.marginRight = c.style.width = "0"),
              (a.style.width = "1px"),
              e.appendChild(b),
              (d = !parseFloat(a.getComputedStyle(c, null).marginRight)),
              e.removeChild(b),
              (a.innerHTML = ""),
              d
            );
          },
        });
  })(),
    (o.swap = function (b, c, f, g) {
      var d,
        a,
        e = {};
      for (a in c) (e[a] = b.style[a]), (b.style[a] = c[a]);
      for (a in ((d = f.apply(b, g || [])), c)) b.style[a] = e[a];
      return d;
    });
  var zb = /^(none|table(?!-c[ea]).+)/,
    Ab = new RegExp("^(" + Q + ")(.*)$", "i"),
    Bb = new RegExp("^([+-])=(" + Q + ")", "i"),
    Cb = { position: "absolute", visibility: "hidden", display: "block" },
    Db = { letterSpacing: 0, fontWeight: 400 },
    Eb = ["Webkit", "O", "Moz", "ms"];
  function Fb(a, b) {
    if (b in a) return b;
    for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Eb.length; e--; )
      if ((b = Eb[e] + c) in a) return b;
    return d;
  }
  function Gb(a, b, c) {
    var d = Ab.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
  }
  function Hb(a, b, c, d, e) {
    for (
      var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0,
        g = 0;
      4 > f;
      f += 2
    )
      "margin" === c && (g += o.css(a, c + R[f], !0, e)),
        d
          ? ("content" === c && (g -= o.css(a, "padding" + R[f], !0, e)),
            "margin" !== c && (g -= o.css(a, "border" + R[f] + "Width", !0, e)))
          : ((g += o.css(a, "padding" + R[f], !0, e)),
            "padding" !== c &&
              (g += o.css(a, "border" + R[f] + "Width", !0, e)));
    return g;
  }
  function Ib(a, b, c) {
    var d = !0,
      e = "width" === b ? a.offsetWidth : a.offsetHeight,
      f = wb(a),
      g = "border-box" === o.css(a, "boxSizing", !1, f);
    if (0 >= e || null == e) {
      if (
        ((0 > (e = xb(a, b, f)) || null == e) && (e = a.style[b]), vb.test(e))
      )
        return e;
      (d = g && (l.boxSizingReliable() || e === a.style[b])),
        (e = parseFloat(e) || 0);
    }
    return e + Hb(a, b, c || (g ? "border" : "content"), d, f) + "px";
  }
  function Jb(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
      (d = a[g]).style &&
        ((f[g] = L.get(d, "olddisplay")),
        (c = d.style.display),
        b
          ? (f[g] || "none" !== c || (d.style.display = ""),
            "" === d.style.display &&
              S(d) &&
              (f[g] = L.access(d, "olddisplay", tb(d.nodeName))))
          : f[g] ||
            ((e = S(d)),
            ((c && "none" !== c) || !e) &&
              L.set(d, "olddisplay", e ? c : o.css(d, "display"))));
    for (g = 0; h > g; g++)
      (d = a[g]).style &&
        ((b && "none" !== d.style.display && "" !== d.style.display) ||
          (d.style.display = b ? f[g] || "" : "none"));
    return a;
  }
  function Kb(a, b, c, d, e) {
    return new Kb.prototype.init(a, b, c, d, e);
  }
  o.extend({
    cssHooks: {
      opacity: {
        get: function (b, c) {
          if (c) {
            var a = xb(b, "opacity");
            return "" === a ? "1" : a;
          }
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
    style: function (c, b, a, i) {
      if (c && 3 !== c.nodeType && 8 !== c.nodeType && c.style) {
        var e,
          h,
          d,
          f = o.camelCase(b),
          g = c.style;
        return (
          (b = o.cssProps[f] || (o.cssProps[f] = Fb(g, f))),
          (d = o.cssHooks[b] || o.cssHooks[f]),
          void 0 === a
            ? d && "get" in d && void 0 !== (e = d.get(c, !1, i))
              ? e
              : g[b]
            : ("string" == (h = typeof a) &&
                (e = Bb.exec(a)) &&
                ((a = (e[1] + 1) * e[2] + parseFloat(o.css(c, b))),
                (h = "number")),
              void (
                null != a &&
                a == a &&
                ("number" !== h || o.cssNumber[f] || (a += "px"),
                l.clearCloneStyle ||
                  "" !== a ||
                  0 !== b.indexOf("background") ||
                  (g[b] = "inherit"),
                (d && "set" in d && void 0 === (a = d.set(c, a, i))) ||
                  ((g[b] = ""), (g[b] = a)))
              ))
        );
      }
    },
    css: function (f, b, c, h) {
      var a,
        g,
        d,
        e = o.camelCase(b);
      return (
        (b = o.cssProps[e] || (o.cssProps[e] = Fb(f.style, e))),
        (d = o.cssHooks[b] || o.cssHooks[e]),
        d && "get" in d && (a = d.get(f, !0, c)),
        void 0 === a && (a = xb(f, b, h)),
        "normal" === a && b in Db && (a = Db[b]),
        "" === c || c
          ? ((g = parseFloat(a)), !0 === c || o.isNumeric(g) ? g || 0 : a)
          : a
      );
    },
  }),
    o.each(["height", "width"], function (b, a) {
      o.cssHooks[a] = {
        get: function (b, c, d) {
          return c
            ? 0 === b.offsetWidth && zb.test(o.css(b, "display"))
              ? o.swap(b, Cb, function () {
                  return Ib(b, a, d);
                })
              : Ib(b, a, d)
            : void 0;
        },
        set: function (b, e, c) {
          var d = c && wb(b);
          return Gb(
            b,
            e,
            c
              ? Hb(b, a, c, "border-box" === o.css(b, "boxSizing", !1, d), d)
              : 0
          );
        },
      };
    }),
    (o.cssHooks.marginRight = yb(l.reliableMarginRight, function (a, b) {
      return b
        ? o.swap(a, { display: "inline-block" }, xb, [a, "marginRight"])
        : void 0;
    })),
    o.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
      (o.cssHooks[a + b] = {
        expand: function (d) {
          for (
            var c = 0, f = {}, e = "string" == typeof d ? d.split(" ") : [d];
            4 > c;
            c++
          )
            f[a + R[c] + b] = e[c] || e[c - 2] || e[0];
          return f;
        },
      }),
        ub.test(a) || (o.cssHooks[a + b].set = Gb);
    }),
    o.fn.extend({
      css: function (a, b) {
        return J(
          this,
          function (b, a, d) {
            var e,
              f,
              g = {},
              c = 0;
            if (o.isArray(a)) {
              for (e = wb(b), f = a.length; f > c; c++)
                g[a[c]] = o.css(b, a[c], !1, e);
              return g;
            }
            return void 0 !== d ? o.style(b, a, d) : o.css(b, a);
          },
          a,
          b,
          arguments.length > 1
        );
      },
      show: function () {
        return Jb(this, !0);
      },
      hide: function () {
        return Jb(this);
      },
      toggle: function (a) {
        return "boolean" == typeof a
          ? a
            ? this.show()
            : this.hide()
          : this.each(function () {
              S(this) ? o(this).show() : o(this).hide();
            });
      },
    }),
    (o.Tween = Kb),
    (Kb.prototype = {
      constructor: Kb,
      init: function (b, c, a, d, e, f) {
        (this.elem = b),
          (this.prop = a),
          (this.easing = e || "swing"),
          (this.options = c),
          (this.start = this.now = this.cur()),
          (this.end = d),
          (this.unit = f || (o.cssNumber[a] ? "" : "px"));
      },
      cur: function () {
        var a = Kb.propHooks[this.prop];
        return a && a.get ? a.get(this) : Kb.propHooks._default.get(this);
      },
      run: function (a) {
        var c,
          b = Kb.propHooks[this.prop];
        return (
          (this.pos = c =
            this.options.duration
              ? o.easing[this.easing](
                  a,
                  this.options.duration * a,
                  0,
                  1,
                  this.options.duration
                )
              : a),
          (this.now = (this.end - this.start) * c + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          b && b.set ? b.set(this) : Kb.propHooks._default.set(this),
          this
        );
      },
    }),
    (Kb.prototype.init.prototype = Kb.prototype),
    (Kb.propHooks = {
      _default: {
        get: function (a) {
          var b;
          return null == a.elem[a.prop] ||
            (a.elem.style && null != a.elem.style[a.prop])
            ? (b = o.css(a.elem, a.prop, "")) && "auto" !== b
              ? b
              : 0
            : a.elem[a.prop];
        },
        set: function (a) {
          o.fx.step[a.prop]
            ? o.fx.step[a.prop](a)
            : a.elem.style &&
              (null != a.elem.style[o.cssProps[a.prop]] || o.cssHooks[a.prop])
            ? o.style(a.elem, a.prop, a.now + a.unit)
            : (a.elem[a.prop] = a.now);
        },
      },
    }),
    (Kb.propHooks.scrollTop = Kb.propHooks.scrollLeft =
      {
        set: function (a) {
          a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        },
      }),
    (o.easing = {
      linear: function (a) {
        return a;
      },
      swing: function (a) {
        return 0.5 - Math.cos(a * Math.PI) / 2;
      },
    }),
    (o.fx = Kb.prototype.init),
    (o.fx.step = {});
  var Lb,
    Mb,
    Nb = /^(?:toggle|show|hide)$/,
    Ob = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
    Pb = /queueHooks$/,
    Qb = [
      function (b, e, k) {
        var a,
          f,
          l,
          g,
          h,
          o,
          m,
          i = this,
          n = {},
          j = b.style,
          d = b.nodeType && S(b),
          c = L.get(b, "fxshow");
        for (a in (k.queue ||
          (null == (h = o._queueHooks(b, "fx")).unqueued &&
            ((h.unqueued = 0),
            (o = h.empty.fire),
            (h.empty.fire = function () {
              h.unqueued || o();
            })),
          h.unqueued++,
          i.always(function () {
            i.always(function () {
              h.unqueued--, o.queue(b, "fx").length || h.empty.fire();
            });
          })),
        1 === b.nodeType &&
          ("height" in e || "width" in e) &&
          ((k.overflow = [j.overflow, j.overflowX, j.overflowY]),
          "none" === (m = o.css(b, "display")) && (m = tb(b.nodeName)),
          "inline" === m &&
            "none" === o.css(b, "float") &&
            (j.display = "inline-block")),
        k.overflow &&
          ((j.overflow = "hidden"),
          i.always(function () {
            (j.overflow = k.overflow[0]),
              (j.overflowX = k.overflow[1]),
              (j.overflowY = k.overflow[2]);
          })),
        e))
          if (((f = e[a]), Nb.exec(f))) {
            if (
              (delete e[a],
              (l = l || "toggle" === f),
              f === (d ? "hide" : "show"))
            ) {
              if ("show" !== f || !c || void 0 === c[a]) continue;
              d = !0;
            }
            n[a] = (c && c[a]) || o.style(b, a);
          }
        if (!o.isEmptyObject(n))
          for (a in (c
            ? "hidden" in c && (d = c.hidden)
            : (c = L.access(b, "fxshow", {})),
          l && (c.hidden = !d),
          d
            ? o(b).show()
            : i.done(function () {
                o(b).hide();
              }),
          i.done(function () {
            var a;
            for (a in (L.remove(b, "fxshow"), n)) o.style(b, a, n[a]);
          }),
          n))
            (g = Ub(d ? c[a] : 0, a, i)),
              a in c ||
                ((c[a] = g.start),
                d &&
                  ((g.end = g.start),
                  (g.start = "width" === a || "height" === a ? 1 : 0)));
      },
    ],
    Rb = {
      "*": [
        function (e, h) {
          var c = this.createTween(e, h),
            g = c.cur(),
            a = Ob.exec(h),
            d = (a && a[3]) || (o.cssNumber[e] ? "" : "px"),
            b =
              (o.cssNumber[e] || ("px" !== d && +g)) &&
              Ob.exec(o.css(c.elem, e)),
            f = 1,
            i = 20;
          if (b && b[3] !== d) {
            (d = d || b[3]), (a = a || []), (b = +g || 1);
            do (b /= f = f || ".5"), o.style(c.elem, e, b + d);
            while (f !== (f = c.cur() / g) && 1 !== f && --i);
          }
          return (
            a &&
              ((b = c.start = +b || +g || 0),
              (c.unit = d),
              (c.end = a[1] ? b + (a[1] + 1) * a[2] : +a[2])),
            c
          );
        },
      ],
    };
  function Sb() {
    return (
      setTimeout(function () {
        Lb = void 0;
      }),
      (Lb = o.now())
    );
  }
  function Tb(a, b) {
    var c,
      d = 0,
      e = { height: a };
    for (b = b ? 1 : 0; 4 > d; d += 2 - b)
      e["margin" + (c = R[d])] = e["padding" + c] = a;
    return b && (e.opacity = e.width = a), e;
  }
  function Ub(a, b, c) {
    for (
      var d, e = (Rb[b] || []).concat(Rb["*"]), f = 0, g = e.length;
      g > f;
      f++
    )
      if ((d = e[f].call(c, b, a))) return d;
  }
  function Xb(a, b, c) {
    var d,
      e,
      f = 0,
      g = Qb.length,
      h = o.Deferred().always(function () {
        delete i.elem;
      }),
      i = function () {
        if (e) return !1;
        for (
          var e = Lb || Sb(),
            a = Math.max(0, j.startTime + j.duration - e),
            f = a / j.duration || 0,
            b = 1 - f,
            c = 0,
            d = j.tweens.length;
          d > c;
          c++
        )
          j.tweens[c].run(b);
        return (
          h.notifyWith(a, [j, b, a]),
          1 > b && d ? a : (h.resolveWith(a, [j]), !1)
        );
      },
      j = h.promise({
        elem: a,
        props: o.extend({}, b),
        opts: o.extend(!0, { specialEasing: {} }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: Lb || Sb(),
        duration: c.duration,
        tweens: [],
        createTween: function (a, c) {
          var b = o.Tween(
            a,
            j.opts,
            a,
            c,
            j.opts.specialEasing[a] || j.opts.easing
          );
          return j.tweens.push(b), b;
        },
        stop: function (a) {
          var b = 0,
            c = a ? j.tweens.length : 0;
          if (e) return this;
          for (e = !0; c > b; b++) j.tweens[b].run(1);
          return a ? h.resolveWith(a, [j, a]) : h.rejectWith(a, [j, a]), this;
        },
      }),
      k = j.props;
    for (
      (function (c, g) {
        var a, d, e, b, f;
        for (a in c)
          if (
            ((e = g[(d = o.camelCase(a))]),
            (b = c[a]),
            o.isArray(b) && ((e = b[1]), (b = c[a] = b[0])),
            a !== d && ((c[d] = b), delete c[a]),
            (f = o.cssHooks[d]),
            f && ("expand" in f))
          )
            for (a in ((b = f.expand(b)), delete c[d], b))
              (a in c) || ((c[a] = b[a]), (g[a] = e));
          else g[d] = e;
      })(k, j.opts.specialEasing);
      g > f;
      f++
    )
      if ((d = Qb[f].call(j, a, k, j.opts))) return d;
    return (
      o.map(k, Ub, j),
      o.isFunction(j.opts.start) && j.opts.start.call(a, j),
      o.fx.timer(o.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
      j
        .progress(j.opts.progress)
        .done(j.opts.done, j.opts.complete)
        .fail(j.opts.fail)
        .always(j.opts.always)
    );
  }
  (o.Animation = o.extend(Xb, {
    tweener: function (a, d) {
      o.isFunction(a) ? ((d = a), (a = ["*"])) : (a = a.split(" "));
      for (var b, c = 0, e = a.length; e > c; c++)
        (Rb[(b = a[c])] = Rb[b] || []), Rb[b].unshift(d);
    },
    prefilter: function (a, b) {
      b ? Qb.unshift(a) : Qb.push(a);
    },
  })),
    (o.speed = function (b, c, d) {
      var a =
        b && "object" == typeof b
          ? o.extend({}, b)
          : {
              complete: d || (!d && c) || (o.isFunction(b) && b),
              duration: b,
              easing: (d && c) || (c && !o.isFunction(c) && c),
            };
      return (
        (a.duration = o.fx.off
          ? 0
          : "number" == typeof a.duration
          ? a.duration
          : a.duration in o.fx.speeds
          ? o.fx.speeds[a.duration]
          : o.fx.speeds._default),
        (null == a.queue || !0 === a.queue) && (a.queue = "fx"),
        (a.old = a.complete),
        (a.complete = function () {
          o.isFunction(a.old) && a.old.call(this),
            a.queue && o.dequeue(this, a.queue);
        }),
        a
      );
    }),
    o.fn.extend({
      fadeTo: function (a, b, c, d) {
        return this.filter(S)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: b }, a, c, d);
      },
      animate: function (c, d, e, f) {
        var g = o.isEmptyObject(c),
          b = o.speed(d, e, f),
          a = function () {
            var a = Xb(this, o.extend({}, c), b);
            (g || L.get(this, "finish")) && a.stop(!0);
          };
        return (
          (a.finish = a),
          g || !1 === b.queue ? this.each(a) : this.queue(b.queue, a)
        );
      },
      stop: function (a, b, c) {
        var d = function (a) {
          var b = a.stop;
          delete a.stop, b(c);
        };
        return (
          "string" != typeof a && ((c = b), (b = a), (a = void 0)),
          b && !1 !== a && this.queue(a || "fx", []),
          this.each(function () {
            var g = !0,
              b = null != a && a + "queueHooks",
              f = o.timers,
              e = L.get(this);
            if (b) e[b] && e[b].stop && d(e[b]);
            else for (b in e) e[b] && e[b].stop && Pb.test(b) && d(e[b]);
            for (b = f.length; b--; )
              f[b].elem !== this ||
                (null != a && f[b].queue !== a) ||
                (f[b].anim.stop(c), (g = !1), f.splice(b, 1));
            (g || !c) && o.dequeue(this, a);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var b,
              e = L.get(this),
              c = e[a + "queue"],
              f = e[a + "queueHooks"],
              d = o.timers,
              g = c ? c.length : 0;
            for (
              e.finish = !0,
                o.queue(this, a, []),
                f && f.stop && f.stop.call(this, !0),
                b = d.length;
              b--;

            )
              d[b].elem === this &&
                d[b].queue === a &&
                (d[b].anim.stop(!0), d.splice(b, 1));
            for (b = 0; g > b; b++)
              c[b] && c[b].finish && c[b].finish.call(this);
            delete e.finish;
          })
        );
      },
    }),
    o.each(["toggle", "show", "hide"], function (b, a) {
      var c = o.fn[a];
      o.fn[a] = function (b, d, e) {
        return null == b || "boolean" == typeof b
          ? c.apply(this, arguments)
          : this.animate(Tb(a, !0), b, d, e);
      };
    }),
    o.each(
      {
        slideDown: Tb("show"),
        slideUp: Tb("hide"),
        slideToggle: Tb("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (a, b) {
        o.fn[a] = function (a, c, d) {
          return this.animate(b, a, c, d);
        };
      }
    ),
    (o.timers = []),
    (o.fx.tick = function () {
      var c,
        a = 0,
        b = o.timers;
      for (Lb = o.now(); a < b.length; a++)
        (c = b[a])() || b[a] !== c || b.splice(a--, 1);
      b.length || o.fx.stop(), (Lb = void 0);
    }),
    (o.fx.timer = function (a) {
      o.timers.push(a), a() ? o.fx.start() : o.timers.pop();
    }),
    (o.fx.interval = 13),
    (o.fx.start = function () {
      Mb || (Mb = setInterval(o.fx.tick, o.fx.interval));
    }),
    (o.fx.stop = function () {
      clearInterval(Mb), (Mb = null);
    }),
    (o.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (o.fn.delay = function (a, b) {
      return (
        (a = (o.fx && o.fx.speeds[a]) || a),
        (b = b || "fx"),
        this.queue(b, function (b, c) {
          var d = setTimeout(b, a);
          c.stop = function () {
            clearTimeout(d);
          };
        })
      );
    }),
    (a = m.createElement("input")),
    (b = m.createElement("select")),
    (c = b.appendChild(m.createElement("option"))),
    (a.type = "checkbox"),
    (l.checkOn = "" !== a.value),
    (l.optSelected = c.selected),
    (b.disabled = !0),
    (l.optDisabled = !c.disabled),
    ((a = m.createElement("input")).value = "t"),
    (a.type = "radio"),
    (l.radioValue = "t" === a.value);
  var a,
    b,
    c,
    Yb,
    Zb,
    $b = o.expr.attrHandle;
  o.fn.extend({
    attr: function (a, b) {
      return J(this, o.attr, a, b, arguments.length > 1);
    },
    removeAttr: function (a) {
      return this.each(function () {
        o.removeAttr(this, a);
      });
    },
  }),
    o.extend({
      attr: function (a, b, d) {
        var c,
          e,
          f = a.nodeType;
        if (a && 3 !== f && 8 !== f && 2 !== f)
          return typeof a.getAttribute === U
            ? o.prop(a, b, d)
            : ((1 === f && o.isXMLDoc(a)) ||
                ((b = b.toLowerCase()),
                (c = o.attrHooks[b] || (o.expr.match.bool.test(b) ? Zb : Yb))),
              void 0 === d
                ? c && "get" in c && null !== (e = c.get(a, b))
                  ? e
                  : null == (e = o.find.attr(a, b))
                  ? void 0
                  : e
                : null !== d
                ? c && "set" in c && void 0 !== (e = c.set(a, d, b))
                  ? e
                  : (a.setAttribute(b, d + ""), d)
                : void o.removeAttr(a, b));
      },
      removeAttr: function (b, c) {
        var a,
          d,
          f = 0,
          e = c && c.match(E);
        if (e && 1 === b.nodeType)
          for (; (a = e[f++]); )
            (d = o.propFix[a] || a),
              o.expr.match.bool.test(a) && (b[d] = !1),
              b.removeAttribute(a);
      },
      attrHooks: {
        type: {
          set: function (a, b) {
            if (!l.radioValue && "radio" === b && o.nodeName(a, "input")) {
              var c = a.value;
              return a.setAttribute("type", b), c && (a.value = c), b;
            }
          },
        },
      },
    }),
    (Zb = {
      set: function (b, c, a) {
        return !1 === c ? o.removeAttr(b, a) : b.setAttribute(a, a), a;
      },
    }),
    o.each(o.expr.match.bool.source.match(/\w+/g), function (b, a) {
      var c = $b[a] || o.find.attr;
      $b[a] = function (f, a, d) {
        var b, e;
        return (
          d ||
            ((e = $b[a]),
            ($b[a] = b),
            (b = null != c(f, a, d) ? a.toLowerCase() : null),
            ($b[a] = e)),
          b
        );
      };
    });
  var _b = /^(?:input|select|textarea|button)$/i;
  o.fn.extend({
    prop: function (a, b) {
      return J(this, o.prop, a, b, arguments.length > 1);
    },
    removeProp: function (a) {
      return this.each(function () {
        delete this[o.propFix[a] || a];
      });
    },
  }),
    o.extend({
      propFix: { for: "htmlFor", class: "className" },
      prop: function (b, a, f) {
        var d,
          c,
          e = b.nodeType;
        if (b && 3 !== e && 8 !== e && 2 !== e)
          return (
            (1 === e && o.isXMLDoc(b)) ||
              ((a = o.propFix[a] || a), (c = o.propHooks[a])),
            void 0 !== f
              ? c && "set" in c && void 0 !== (d = c.set(b, f, a))
                ? d
                : (b[a] = f)
              : c && "get" in c && null !== (d = c.get(b, a))
              ? d
              : b[a]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (a) {
            return a.hasAttribute("tabindex") || _b.test(a.nodeName) || a.href
              ? a.tabIndex
              : -1;
          },
        },
      },
    }),
    l.optSelected ||
      (o.propHooks.selected = {
        get: function (b) {
          var a = b.parentNode;
          return a && a.parentNode && a.parentNode.selectedIndex, null;
        },
      }),
    o.each(
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
        o.propFix[this.toLowerCase()] = this;
      }
    );
  var ac = /[\t\r\n\f]/g;
  o.fn.extend({
    addClass: function (b) {
      var g,
        a,
        c,
        d,
        h,
        e,
        f = 0,
        i = this.length;
      if (o.isFunction(b))
        return this.each(function (a) {
          o(this).addClass(b.call(this, a, this.className));
        });
      if ("string" == typeof b && b) {
        for (g = (b || "").match(E) || []; i > f; f++)
          if (
            (c =
              1 === (a = this[f]).nodeType &&
              (a.className ? (" " + a.className + " ").replace(ac, " ") : " "))
          ) {
            for (h = 0; (d = g[h++]); )
              0 > c.indexOf(" " + d + " ") && (c += d + " ");
            (e = o.trim(c)), a.className !== e && (a.className = e);
          }
      }
      return this;
    },
    removeClass: function (a) {
      var g,
        b,
        c,
        d,
        h,
        e,
        i = 0 === arguments.length || ("string" == typeof a && a),
        f = 0,
        j = this.length;
      if (o.isFunction(a))
        return this.each(function (b) {
          o(this).removeClass(a.call(this, b, this.className));
        });
      if (i) {
        for (g = (a || "").match(E) || []; j > f; f++)
          if (
            (c =
              1 === (b = this[f]).nodeType &&
              (b.className ? (" " + b.className + " ").replace(ac, " ") : ""))
          ) {
            for (h = 0; (d = g[h++]); )
              for (; c.indexOf(" " + d + " ") >= 0; )
                c = c.replace(" " + d + " ", " ");
            (e = a ? o.trim(c) : ""), b.className !== e && (b.className = e);
          }
      }
      return this;
    },
    toggleClass: function (a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c
        ? b
          ? this.addClass(a)
          : this.removeClass(a)
        : this.each(
            o.isFunction(a)
              ? function (c) {
                  o(this).toggleClass(a.call(this, c, this.className, b), b);
                }
              : function () {
                  if ("string" === c)
                    for (
                      var b, e = 0, d = o(this), f = a.match(E) || [];
                      (b = f[e++]);

                    )
                      d.hasClass(b) ? d.removeClass(b) : d.addClass(b);
                  else
                    (c === U || "boolean" === c) &&
                      (this.className &&
                        L.set(this, "__className__", this.className),
                      (this.className =
                        this.className || !1 === a
                          ? ""
                          : L.get(this, "__className__") || ""));
                }
          );
    },
    hasClass: function (b) {
      for (var c = " " + b + " ", a = 0, d = this.length; d > a; a++)
        if (
          1 === this[a].nodeType &&
          (" " + this[a].className + " ").replace(ac, " ").indexOf(c) >= 0
        )
          return !0;
      return !1;
    },
  });
  var bc = /\r/g;
  o.fn.extend({
    val: function (d) {
      var c,
        a,
        e,
        b = this[0];
      return arguments.length
        ? ((e = o.isFunction(d)),
          this.each(function (b) {
            var a;
            1 === this.nodeType &&
              (null == (a = e ? d.call(this, b, o(this).val()) : d)
                ? (a = "")
                : "number" == typeof a
                ? (a += "")
                : o.isArray(a) &&
                  (a = o.map(a, function (a) {
                    return null == a ? "" : a + "";
                  })),
              ((c =
                o.valHooks[this.type] ||
                o.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in c &&
                void 0 !== c.set(this, a, "value")) ||
                (this.value = a));
          }))
        : b
        ? (c = o.valHooks[b.type] || o.valHooks[b.nodeName.toLowerCase()]) &&
          "get" in c &&
          void 0 !== (a = c.get(b, "value"))
          ? a
          : "string" == typeof (a = b.value)
          ? a.replace(bc, "")
          : null == a
          ? ""
          : a
        : void 0;
    },
  }),
    o.extend({
      valHooks: {
        select: {
          get: function (e) {
            for (
              var f,
                a,
                g = e.options,
                b = e.selectedIndex,
                c = "select-one" === e.type || 0 > b,
                h = c ? null : [],
                i = c ? b + 1 : g.length,
                d = 0 > b ? i : c ? b : 0;
              i > d;
              d++
            )
              if (
                !(
                  (!(a = g[d]).selected && d !== b) ||
                  (l.optDisabled
                    ? a.disabled
                    : null !== a.getAttribute("disabled")) ||
                  (a.parentNode.disabled &&
                    o.nodeName(a.parentNode, "optgroup"))
                )
              ) {
                if (((f = o(a).val()), c)) return f;
                h.push(f);
              }
            return h;
          },
          set: function (a, g) {
            for (
              var b, c, d = a.options, e = o.makeArray(g), f = d.length;
              f--;

            )
              ((c = d[f]).selected = o.inArray(o(c).val(), e) >= 0) && (b = !0);
            return b || (a.selectedIndex = -1), e;
          },
        },
      },
    }),
    o.each(["radio", "checkbox"], function () {
      (o.valHooks[this] = {
        set: function (a, b) {
          return o.isArray(b)
            ? (a.checked = o.inArray(o(a).val(), b) >= 0)
            : void 0;
        },
      }),
        l.checkOn ||
          (o.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value;
          });
    }),
    o.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (b, a) {
        o.fn[a] = function (b, c) {
          return arguments.length > 0
            ? this.on(a, null, b, c)
            : this.trigger(a);
        };
      }
    ),
    o.fn.extend({
      hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a);
      },
      bind: function (a, b, c) {
        return this.on(a, null, b, c);
      },
      unbind: function (a, b) {
        return this.off(a, null, b);
      },
      delegate: function (a, b, c, d) {
        return this.on(b, a, c, d);
      },
      undelegate: function (a, b, c) {
        return 1 === arguments.length
          ? this.off(a, "**")
          : this.off(b, a || "**", c);
      },
    });
  var cc = o.now(),
    dc = /\?/;
  (o.parseJSON = function (a) {
    return JSON.parse(a + "");
  }),
    (o.parseXML = function (b) {
      var a;
      if (!b || "string" != typeof b) return null;
      try {
        a = new DOMParser().parseFromString(b, "text/xml");
      } catch (c) {
        a = void 0;
      }
      return (
        (!a || a.getElementsByTagName("parsererror").length) &&
          o.error("Invalid XML: " + b),
        a
      );
    });
  var ec,
    fc,
    gc = /#.*$/,
    hc = /([?&])_=[^&]*/,
    ic = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    kc = /^(?:GET|HEAD)$/,
    lc = /^\/\//,
    mc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    nc = {},
    oc = {},
    pc = "*/".concat("*");
  try {
    fc = location.href;
  } catch (qc) {
    ((fc = m.createElement("a")).href = ""), (fc = fc.href);
  }
  function rc(a) {
    return function (b, c) {
      "string" != typeof b && ((c = b), (b = "*"));
      var a,
        d = 0,
        e = b.toLowerCase().match(E) || [];
      if (o.isFunction(c))
        for (; (a = e[d++]); )
          "+" === a[0]
            ? (a[(a = a.slice(1) || "*")] = a[a] || []).unshift(c)
            : (a[a] = a[a] || []).push(c);
    };
  }
  function sc(a, b, c, d) {
    var e = {},
      f = a === oc;
    function g(h) {
      var i;
      return (
        (e[h] = !0),
        o.each(a[h] || [], function (c, b) {
          var a = b(b, c, d);
          return "string" != typeof a || f || e[a]
            ? f
              ? !(i = a)
              : void 0
            : (b.dataTypes.unshift(a), g(a), !1);
        }),
        i
      );
    }
    return g(b.dataTypes[0]) || (!e["*"] && g("*"));
  }
  function tc(a, b) {
    var c,
      d,
      e = o.ajaxSettings.flatOptions || {};
    for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    return d && o.extend(!0, a, d), a;
  }
  (ec = mc.exec(fc.toLowerCase()) || []),
    o.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: fc,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            ec[1]
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": pc,
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
          "text json": o.parseJSON,
          "text xml": o.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (a, b) {
        return b ? tc(tc(a, o.ajaxSettings), b) : tc(o.ajaxSettings, a);
      },
      ajaxPrefilter: rc(nc),
      ajaxTransport: rc(oc),
      ajax: function (g, d) {
        "object" == typeof g && ((d = g), (g = void 0)), (d = d || {});
        var j,
          c,
          s,
          t,
          m,
          e,
          k,
          f,
          a = o.ajaxSetup({}, d),
          h = a.context || a,
          n = a.context && (h.nodeType || h.jquery) ? o(h) : o.event,
          o = o.Deferred(),
          p = o.Callbacks("once memory"),
          u = a.statusCode || {},
          q = {},
          v = {},
          i = 0,
          r = "canceled",
          b = {
            readyState: 0,
            getResponseHeader: function (b) {
              var a;
              if (2 === i) {
                if (!t)
                  for (t = {}; (a = ic.exec(s)); ) t[a[1].toLowerCase()] = a[2];
                a = t[b.toLowerCase()];
              }
              return null == a ? null : a;
            },
            getAllResponseHeaders: function () {
              return 2 === i ? s : null;
            },
            setRequestHeader: function (a, c) {
              var b = a.toLowerCase();
              return i || (q[(a = v[b] = v[b] || a)] = c), this;
            },
            overrideMimeType: function (b) {
              return i || (a.mimeType = b), this;
            },
            statusCode: function (a) {
              var c;
              if (a) {
                if (2 > i) for (c in a) u[c] = [u[c], a[c]];
                else b.always(a[b.status]);
              }
              return this;
            },
            abort: function (b) {
              var a = b || r;
              return j && j.abort(a), w(0, a), this;
            },
          };
        if (
          ((o.promise(b).complete = p.add),
          (b.success = b.done),
          (b.error = b.fail),
          (a.url = ((g || a.url || fc) + "")
            .replace(gc, "")
            .replace(lc, ec[1] + "//")),
          (a.type = d.method || d.type || a.method || a.type),
          (a.dataTypes = o
            .trim(a.dataType || "*")
            .toLowerCase()
            .match(E) || [""]),
          null == a.crossDomain &&
            ((e = mc.exec(a.url.toLowerCase())),
            (a.crossDomain = !(
              !e ||
              (e[1] === ec[1] &&
                e[2] === ec[2] &&
                (e[3] || ("http:" === e[1] ? "80" : "443")) ===
                  (ec[3] || ("http:" === ec[1] ? "80" : "443")))
            ))),
          a.data &&
            a.processData &&
            "string" != typeof a.data &&
            (a.data = o.param(a.data, a.traditional)),
          sc(nc, a, d, b),
          2 === i)
        )
          return b;
        for (f in ((k = a.global) &&
          0 == o.active++ &&
          o.event.trigger("ajaxStart"),
        (a.type = a.type.toUpperCase()),
        (a.hasContent = !kc.test(a.type)),
        (c = a.url),
        a.hasContent ||
          (a.data &&
            ((c = a.url += (dc.test(c) ? "&" : "?") + a.data), delete a.data),
          !1 === a.cache &&
            (a.url = hc.test(c)
              ? c.replace(hc, "$1_=" + cc++)
              : c + (dc.test(c) ? "&" : "?") + "_=" + cc++)),
        a.ifModified &&
          (o.lastModified[c] &&
            b.setRequestHeader("If-Modified-Since", o.lastModified[c]),
          o.etag[c] && b.setRequestHeader("If-None-Match", o.etag[c])),
        ((a.data && a.hasContent && !1 !== a.contentType) || d.contentType) &&
          b.setRequestHeader("Content-Type", a.contentType),
        b.setRequestHeader(
          "Accept",
          a.dataTypes[0] && a.accepts[a.dataTypes[0]]
            ? a.accepts[a.dataTypes[0]] +
                ("*" !== a.dataTypes[0] ? ", " + pc + "; q=0.01" : "")
            : a.accepts["*"]
        ),
        a.headers))
          b.setRequestHeader(f, a.headers[f]);
        if (a.beforeSend && (!1 === a.beforeSend.call(h, b, a) || 2 === i))
          return b.abort();
        for (f in ((r = "abort"), { success: 1, error: 1, complete: 1 }))
          b[f](a[f]);
        if ((j = sc(oc, a, d, b))) {
          (b.readyState = 1),
            k && n.trigger("ajaxSend", [b, a]),
            a.async &&
              a.timeout > 0 &&
              (m = setTimeout(function () {
                b.abort("timeout");
              }, a.timeout));
          try {
            (i = 1), j.send(q, w);
          } catch (l) {
            if (!(2 > i)) throw l;
            w(-1, l);
          }
        } else w(-1, "No Transport");
        function w(d, t, v, w) {
          var f,
            r,
            l,
            g,
            q,
            e = t;
          2 !== i &&
            ((i = 2),
            m && clearTimeout(m),
            (j = void 0),
            (s = w || ""),
            (b.readyState = d > 0 ? 4 : 0),
            (f = (d >= 200 && 300 > d) || 304 === d),
            v &&
              (g = (function (d, i, f) {
                for (
                  var e, b, c, g, h = d.contents, a = d.dataTypes;
                  "*" === a[0];

                )
                  a.shift(),
                    void 0 === e &&
                      (e = d.mimeType || i.getResponseHeader("Content-Type"));
                if (e) {
                  for (b in h)
                    if (h[b] && h[b].test(e)) {
                      a.unshift(b);
                      break;
                    }
                }
                if (a[0] in f) c = a[0];
                else {
                  for (b in f) {
                    if (!a[0] || d.converters[b + " " + a[0]]) {
                      c = b;
                      break;
                    }
                    g || (g = b);
                  }
                  c = c || g;
                }
                return c ? (c !== a[0] && a.unshift(c), f[c]) : void 0;
              })(a, b, v)),
            (g = (function (c, d, j, k) {
              var h,
                a,
                b,
                g,
                e,
                f = {},
                i = c.dataTypes.slice();
              if (i[1])
                for (b in c.converters) f[b.toLowerCase()] = c.converters[b];
              for (a = i.shift(); a; )
                if (
                  (c.responseFields[a] && (j[c.responseFields[a]] = d),
                  !e && k && c.dataFilter && (d = c.dataFilter(d, c.dataType)),
                  (e = a),
                  (a = i.shift()))
                ) {
                  if ("*" === a) a = e;
                  else if ("*" !== e && e !== a) {
                    if (!(b = f[e + " " + a] || f["* " + a])) {
                      for (h in f)
                        if (
                          (g = h.split(" "))[1] === a &&
                          (b = f[e + " " + g[0]] || f["* " + g[0]])
                        ) {
                          !0 === b
                            ? (b = f[h])
                            : !0 !== f[h] && ((a = g[0]), i.unshift(g[1]));
                          break;
                        }
                    }
                    if (!0 !== b) {
                      if (b && c.throws) d = b(d);
                      else
                        try {
                          d = b(d);
                        } catch (l) {
                          return {
                            state: "parsererror",
                            error: b
                              ? l
                              : "No conversion from " + e + " to " + a,
                          };
                        }
                    }
                  }
                }
              return { state: "success", data: d };
            })(a, g, b, f)),
            f
              ? (a.ifModified &&
                  ((q = b.getResponseHeader("Last-Modified")) &&
                    (o.lastModified[c] = q),
                  (q = b.getResponseHeader("etag")) && (o.etag[c] = q)),
                204 === d || "HEAD" === a.type
                  ? (e = "nocontent")
                  : 304 === d
                  ? (e = "notmodified")
                  : ((e = g.state), (r = g.data), (l = g.error), (f = !l)))
              : ((l = e), (d || !e) && ((e = "error"), 0 > d && (d = 0))),
            (b.status = d),
            (b.statusText = (t || e) + ""),
            f ? o.resolveWith(h, [r, e, b]) : o.rejectWith(h, [b, e, l]),
            b.statusCode(u),
            (u = void 0),
            k && n.trigger(f ? "ajaxSuccess" : "ajaxError", [b, a, f ? r : l]),
            p.fireWith(h, [b, e]),
            k &&
              (n.trigger("ajaxComplete", [b, a]),
              --o.active || o.event.trigger("ajaxStop")));
        }
        return b;
      },
      getJSON: function (a, b, c) {
        return o.get(a, b, c, "json");
      },
      getScript: function (a, b) {
        return o.get(a, void 0, b, "script");
      },
    }),
    o.each(["get", "post"], function (b, a) {
      o[a] = function (e, b, c, d) {
        return (
          o.isFunction(b) && ((d = d || c), (c = b), (b = void 0)),
          o.ajax({ url: e, type: a, dataType: d, data: b, success: c })
        );
      };
    }),
    o.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (b, a) {
        o.fn[a] = function (b) {
          return this.on(a, b);
        };
      }
    ),
    (o._evalUrl = function (a) {
      return o.ajax({
        url: a,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    o.fn.extend({
      wrapAll: function (b) {
        var a;
        return o.isFunction(b)
          ? this.each(function (a) {
              o(this).wrapAll(b.call(this, a));
            })
          : (this[0] &&
              ((a = o(b, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && a.insertBefore(this[0]),
              a
                .map(function () {
                  for (var a = this; a.firstElementChild; )
                    a = a.firstElementChild;
                  return a;
                })
                .append(this)),
            this);
      },
      wrapInner: function (a) {
        return this.each(
          o.isFunction(a)
            ? function (b) {
                o(this).wrapInner(a.call(this, b));
              }
            : function () {
                var b = o(this),
                  c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
              }
        );
      },
      wrap: function (a) {
        var b = o.isFunction(a);
        return this.each(function (c) {
          o(this).wrapAll(b ? a.call(this, c) : a);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            o.nodeName(this, "body") || o(this).replaceWith(this.childNodes);
          })
          .end();
      },
    }),
    (o.expr.filters.hidden = function (a) {
      return a.offsetWidth <= 0 && a.offsetHeight <= 0;
    }),
    (o.expr.filters.visible = function (a) {
      return !o.expr.filters.hidden(a);
    });
  var wc = /%20/g,
    xc = /\[\]$/,
    yc = /\r?\n/g,
    zc = /^(?:submit|button|image|reset|file)$/i,
    Ac = /^(?:input|select|textarea|keygen)/i;
  function Bc(a, b, c, d) {
    var e;
    if (o.isArray(b))
      o.each(b, function (b, a) {
        c || xc.test(a)
          ? d(a, a)
          : Bc(a + "[" + ("object" == typeof a ? b : "") + "]", a, c, d);
      });
    else if (c || "object" !== o.type(b)) d(a, b);
    else for (e in b) Bc(a + "[" + e + "]", b[e], c, d);
  }
  (o.param = function (a, b) {
    var c,
      d = [],
      e = function (b, a) {
        (a = o.isFunction(a) ? a() : null == a ? "" : a),
          (d[d.length] = encodeURIComponent(b) + "=" + encodeURIComponent(a));
      };
    if (
      (void 0 === b && (b = o.ajaxSettings && o.ajaxSettings.traditional),
      o.isArray(a) || (a.jquery && !o.isPlainObject(a)))
    )
      o.each(a, function () {
        e(this.name, this.value);
      });
    else for (c in a) Bc(c, a[c], b, e);
    return d.join("&").replace(wc, "+");
  }),
    o.fn.extend({
      serialize: function () {
        return o.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var a = o.prop(this, "elements");
          return a ? o.makeArray(a) : this;
        })
          .filter(function () {
            var a = this.type;
            return (
              this.name &&
              !o(this).is(":disabled") &&
              Ac.test(this.nodeName) &&
              !zc.test(a) &&
              (this.checked || !T.test(a))
            );
          })
          .map(function (c, b) {
            var a = o(this).val();
            return null == a
              ? null
              : o.isArray(a)
              ? o.map(a, function (a) {
                  return { name: b.name, value: a.replace(yc, "\r\n") };
                })
              : { name: b.name, value: a.replace(yc, "\r\n") };
          })
          .get();
      },
    }),
    (o.ajaxSettings.xhr = function () {
      try {
        return new XMLHttpRequest();
      } catch (a) {}
    });
  var Cc = 0,
    Dc = {},
    Ec = { 0: 200, 1223: 204 },
    Fc = o.ajaxSettings.xhr();
  a.ActiveXObject &&
    o(a).on("unload", function () {
      for (var a in Dc) Dc[a]();
    }),
    (l.cors = !!Fc && "withCredentials" in Fc),
    (l.ajax = Fc = !!Fc),
    o.ajaxTransport(function (a) {
      var b;
      return l.cors || (Fc && !a.crossDomain)
        ? {
            send: function (e, g) {
              var d,
                c = a.xhr(),
                f = ++Cc;
              if (
                (c.open(a.type, a.url, a.async, a.username, a.password),
                a.xhrFields)
              )
                for (d in a.xhrFields) c[d] = a.xhrFields[d];
              for (d in (a.mimeType &&
                c.overrideMimeType &&
                c.overrideMimeType(a.mimeType),
              a.crossDomain ||
                e["X-Requested-With"] ||
                (e["X-Requested-With"] = "XMLHttpRequest"),
              e))
                c.setRequestHeader(d, e[d]);
              (b = function (a) {
                return function () {
                  b &&
                    (delete Dc[f],
                    (b = c.onload = c.onerror = null),
                    "abort" === a
                      ? c.abort()
                      : "error" === a
                      ? g(c.status, c.statusText)
                      : g(
                          Ec[c.status] || c.status,
                          c.statusText,
                          "string" == typeof c.responseText
                            ? { text: c.responseText }
                            : void 0,
                          c.getAllResponseHeaders()
                        ));
                };
              }),
                (c.onload = b()),
                (c.onerror = b("error")),
                (b = Dc[f] = b("abort")),
                c.send((a.hasContent && a.data) || null);
            },
            abort: function () {
              b && b();
            },
          }
        : void 0;
    }),
    o.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /(?:java|ecma)script/ },
      converters: {
        "text script": function (a) {
          return o.globalEval(a), a;
        },
      },
    }),
    o.ajaxPrefilter("script", function (a) {
      void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }),
    o.ajaxTransport("script", function (a) {
      if (a.crossDomain) {
        var b, c;
        return {
          send: function (d, e) {
            (b = o("<script>")
              .prop({ async: !0, charset: a.scriptCharset, src: a.url })
              .on(
                "load error",
                (c = function (a) {
                  b.remove(),
                    (c = null),
                    a && e("error" === a.type ? 404 : 200, a.type);
                })
              )),
              m.head.appendChild(b[0]);
          },
          abort: function () {
            c && c();
          },
        };
      }
    });
  var Gc = [],
    Hc = /(=)\?(?=&|$)|\?\?/;
  o.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var a = Gc.pop() || o.expando + "_" + cc++;
      return (this[a] = !0), a;
    },
  }),
    o.ajaxPrefilter("json jsonp", function (a, f, d) {
      var b,
        e,
        g,
        c =
          !1 !== a.jsonp &&
          (Hc.test(a.url)
            ? "url"
            : "string" == typeof a.data &&
              !(a.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
              Hc.test(a.data) &&
              "data");
      return c || "jsonp" === a.dataTypes[0]
        ? ((b = a.jsonpCallback =
            o.isFunction(a.jsonpCallback)
              ? a.jsonpCallback()
              : a.jsonpCallback),
          c
            ? (a[c] = a[c].replace(Hc, "$1" + b))
            : !1 !== a.jsonp &&
              (a.url += (dc.test(a.url) ? "&" : "?") + a.jsonp + "=" + b),
          (a.converters["script json"] = function () {
            return g || o.error(b + " was not called"), g[0];
          }),
          (a.dataTypes[0] = "json"),
          (e = a[b]),
          (a[b] = function () {
            g = arguments;
          }),
          d.always(function () {
            (a[b] = e),
              a[b] && ((a.jsonpCallback = f.jsonpCallback), Gc.push(b)),
              g && o.isFunction(e) && e(g[0]),
              (g = e = void 0);
          }),
          "script")
        : void 0;
    }),
    (o.parseHTML = function (b, a, e) {
      if (!b || "string" != typeof b) return null;
      "boolean" == typeof a && ((e = a), (a = !1)), (a = a || m);
      var c = v.exec(b),
        d = !e && [];
      return c
        ? [a.createElement(c[1])]
        : ((c = o.buildFragment([b], a, d)),
          d && d.length && o(d).remove(),
          o.merge([], c.childNodes));
    });
  var Ic = o.fn.load;
  (o.fn.load = function (a, b, d) {
    if ("string" != typeof a && Ic) return Ic.apply(this, arguments);
    var f,
      e,
      h,
      g = this,
      c = a.indexOf(" ");
    return (
      c >= 0 && ((f = a.slice(c)), (a = a.slice(0, c))),
      o.isFunction(b)
        ? ((d = b), (b = void 0))
        : b && "object" == typeof b && (e = "POST"),
      g.length > 0 &&
        o
          .ajax({ url: a, type: e, dataType: "html", data: b })
          .done(function (a) {
            (h = arguments),
              g.html(f ? o("<div>").append(o.parseHTML(a)).find(f) : a);
          })
          .complete(
            d &&
              function (a, b) {
                g.each(d, h || [a.responseText, b, a]);
              }
          ),
      this
    );
  }),
    (o.expr.filters.animated = function (a) {
      return o.grep(o.timers, function (b) {
        return a === b.elem;
      }).length;
    });
  var Jc = a.document.documentElement;
  function Kc(a) {
    return o.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
  }
  (o.offset = {
    setOffset: function (b, a, m) {
      var k,
        e,
        f,
        g,
        c,
        h,
        l,
        i = o.css(b, "position"),
        j = o(b),
        d = {};
      "static" === i && (b.style.position = "relative"),
        (c = j.offset()),
        (f = o.css(b, "top")),
        (h = o.css(b, "left")),
        (l =
          ("absolute" === i || "fixed" === i) && (f + h).indexOf("auto") > -1),
        l
          ? ((g = (k = j.position()).top), (e = k.left))
          : ((g = parseFloat(f) || 0), (e = parseFloat(h) || 0)),
        o.isFunction(a) && (a = a.call(b, m, c)),
        null != a.top && (d.top = a.top - c.top + g),
        null != a.left && (d.left = a.left - c.left + e),
        "using" in a ? a.using.call(b, d) : j.css(d);
    },
  }),
    o.fn.extend({
      offset: function (f) {
        if (arguments.length)
          return void 0 === f
            ? this
            : this.each(function (a) {
                o.offset.setOffset(this, f, a);
              });
        var b,
          d,
          a = this[0],
          c = { top: 0, left: 0 },
          e = a && a.ownerDocument;
        if (e)
          return (
            (b = e.documentElement),
            o.contains(b, a)
              ? (typeof a.getBoundingClientRect !== U &&
                  (c = a.getBoundingClientRect()),
                (d = Kc(e)),
                {
                  top: c.top + d.pageYOffset - b.clientTop,
                  left: c.left + d.pageXOffset - b.clientLeft,
                })
              : c
          );
      },
      position: function () {
        if (this[0]) {
          var a,
            c,
            d = this[0],
            b = { top: 0, left: 0 };
          return (
            "fixed" === o.css(d, "position")
              ? (c = d.getBoundingClientRect())
              : ((a = this.offsetParent()),
                (c = this.offset()),
                o.nodeName(a[0], "html") || (b = a.offset()),
                (b.top += o.css(a[0], "borderTopWidth", !0)),
                (b.left += o.css(a[0], "borderLeftWidth", !0))),
            {
              top: c.top - b.top - o.css(d, "marginTop", !0),
              left: c.left - b.left - o.css(d, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var a = this.offsetParent || Jc;
            a && !o.nodeName(a, "html") && "static" === o.css(a, "position");

          )
            a = a.offsetParent;
          return a || Jc;
        });
      },
    }),
    o.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (a, b) {
        var c = "pageYOffset" === b;
        o.fn[a] = function (d) {
          return J(
            this,
            function (e, f, a) {
              var d = Kc(e);
              return void 0 === a
                ? d
                  ? d[b]
                  : e[f]
                : void (d
                    ? d.scrollTo(c ? a.pageXOffset : a, c ? a : a.pageYOffset)
                    : (e[f] = a));
            },
            a,
            d,
            arguments.length,
            null
          );
        };
      }
    ),
    o.each(["top", "left"], function (b, a) {
      o.cssHooks[a] = yb(l.pixelPosition, function (c, b) {
        return b
          ? ((b = xb(c, a)), vb.test(b) ? o(c).position()[a] + "px" : b)
          : void 0;
      });
    }),
    o.each({ Height: "height", Width: "width" }, function (a, b) {
      o.each(
        { padding: "inner" + a, content: b, "": "outer" + a },
        function (d, c) {
          o.fn[c] = function (c, f) {
            var e = arguments.length && (d || "boolean" != typeof c),
              g = d || (!0 === c || !0 === f ? "margin" : "border");
            return J(
              this,
              function (b, d, e) {
                var c;
                return o.isWindow(b)
                  ? b.document.documentElement["client" + a]
                  : 9 === b.nodeType
                  ? ((c = b.documentElement),
                    Math.max(
                      b.body["scroll" + a],
                      c["scroll" + a],
                      b.body["offset" + a],
                      c["offset" + a],
                      c["client" + a]
                    ))
                  : void 0 === e
                  ? o.css(b, d, g)
                  : o.style(b, d, e, g);
              },
              b,
              e ? c : void 0,
              e,
              null
            );
          };
        }
      );
    }),
    (o.fn.size = function () {
      return this.length;
    }),
    (o.fn.andSelf = o.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return o;
      });
  var Lc = a.jQuery,
    Mc = a.$;
  return (
    (o.noConflict = function (a) {
      return a.$ === o && (a.$ = Mc), a && a.jQuery === o && (a.jQuery = Lc), o;
    }),
    typeof b === U && (a.jQuery = a.$ = o),
    o
  );
});
