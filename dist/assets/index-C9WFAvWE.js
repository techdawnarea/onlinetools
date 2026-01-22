function Sy(r, n) {
  for (var i = 0; i < n.length; i++) {
    const l = n[i];
    if (typeof l != "string" && !Array.isArray(l)) {
      for (const s in l)
        if (s !== "default" && !(s in r)) {
          const c = Object.getOwnPropertyDescriptor(l, s);
          c && Object.defineProperty(r, s, c.get ? c : { enumerable: !0, get: () => l[s] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) l(s);
  new MutationObserver((s) => {
    for (const c of s)
      if (c.type === "childList")
        for (const f of c.addedNodes) f.tagName === "LINK" && f.rel === "modulepreload" && l(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(s) {
    const c = {};
    return (
      s.integrity && (c.integrity = s.integrity),
      s.referrerPolicy && (c.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (c.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (c.credentials = "omit")
        : (c.credentials = "same-origin"),
      c
    );
  }
  function l(s) {
    if (s.ep) return;
    s.ep = !0;
    const c = i(s);
    fetch(s.href, c);
  }
})();
function ui(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
function Cy(r) {
  if (Object.prototype.hasOwnProperty.call(r, "__esModule")) return r;
  var n = r.default;
  if (typeof n == "function") {
    var i = function l() {
      var s = !1;
      try {
        s = this instanceof l;
      } catch {}
      return s ? Reflect.construct(n, arguments, this.constructor) : n.apply(this, arguments);
    };
    i.prototype = n.prototype;
  } else i = {};
  return (
    Object.defineProperty(i, "__esModule", { value: !0 }),
    Object.keys(r).forEach(function (l) {
      var s = Object.getOwnPropertyDescriptor(r, l);
      Object.defineProperty(
        i,
        l,
        s.get
          ? s
          : {
              enumerable: !0,
              get: function () {
                return r[l];
              },
            }
      );
    }),
    i
  );
}
var wp = { exports: {} },
  Bs = {},
  kp = { exports: {} },
  Qe = {};
var Fm;
function $y() {
  if (Fm) return Qe;
  Fm = 1;
  var r = Symbol.for("react.element"),
    n = Symbol.for("react.portal"),
    i = Symbol.for("react.fragment"),
    l = Symbol.for("react.strict_mode"),
    s = Symbol.for("react.profiler"),
    c = Symbol.for("react.provider"),
    f = Symbol.for("react.context"),
    m = Symbol.for("react.forward_ref"),
    v = Symbol.for("react.suspense"),
    x = Symbol.for("react.memo"),
    w = Symbol.for("react.lazy"),
    k = Symbol.iterator;
  function E(R) {
    return R === null || typeof R != "object"
      ? null
      : ((R = (k && R[k]) || R["@@iterator"]), typeof R == "function" ? R : null);
  }
  var j = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    z = Object.assign,
    b = {};
  function O(R, H, ve) {
    (this.props = R), (this.context = H), (this.refs = b), (this.updater = ve || j);
  }
  (O.prototype.isReactComponent = {}),
    (O.prototype.setState = function (R, H) {
      if (typeof R != "object" && typeof R != "function" && R != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, R, H, "setState");
    }),
    (O.prototype.forceUpdate = function (R) {
      this.updater.enqueueForceUpdate(this, R, "forceUpdate");
    });
  function q() {}
  q.prototype = O.prototype;
  function K(R, H, ve) {
    (this.props = R), (this.context = H), (this.refs = b), (this.updater = ve || j);
  }
  var X = (K.prototype = new q());
  (X.constructor = K), z(X, O.prototype), (X.isPureReactComponent = !0);
  var V = Array.isArray,
    D = Object.prototype.hasOwnProperty,
    A = { current: null },
    Q = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ae(R, H, ve) {
    var Me,
      be = {},
      Oe = null,
      pe = null;
    if (H != null)
      for (Me in (H.ref !== void 0 && (pe = H.ref), H.key !== void 0 && (Oe = "" + H.key), H))
        D.call(H, Me) && !Q.hasOwnProperty(Me) && (be[Me] = H[Me]);
    var je = arguments.length - 2;
    if (je === 1) be.children = ve;
    else if (1 < je) {
      for (var Re = Array(je), He = 0; He < je; He++) Re[He] = arguments[He + 2];
      be.children = Re;
    }
    if (R && R.defaultProps)
      for (Me in ((je = R.defaultProps), je)) be[Me] === void 0 && (be[Me] = je[Me]);
    return { $$typeof: r, type: R, key: Oe, ref: pe, props: be, _owner: A.current };
  }
  function xe(R, H) {
    return { $$typeof: r, type: R.type, key: H, ref: R.ref, props: R.props, _owner: R._owner };
  }
  function he(R) {
    return typeof R == "object" && R !== null && R.$$typeof === r;
  }
  function Te(R) {
    var H = { "=": "=0", ":": "=2" };
    return (
      "$" +
      R.replace(/[=:]/g, function (ve) {
        return H[ve];
      })
    );
  }
  var ue = /\/+/g;
  function fe(R, H) {
    return typeof R == "object" && R !== null && R.key != null ? Te("" + R.key) : H.toString(36);
  }
  function ye(R, H, ve, Me, be) {
    var Oe = typeof R;
    (Oe === "undefined" || Oe === "boolean") && (R = null);
    var pe = !1;
    if (R === null) pe = !0;
    else
      switch (Oe) {
        case "string":
        case "number":
          pe = !0;
          break;
        case "object":
          switch (R.$$typeof) {
            case r:
            case n:
              pe = !0;
          }
      }
    if (pe)
      return (
        (pe = R),
        (be = be(pe)),
        (R = Me === "" ? "." + fe(pe, 0) : Me),
        V(be)
          ? ((ve = ""),
            R != null && (ve = R.replace(ue, "$&/") + "/"),
            ye(be, H, ve, "", function (He) {
              return He;
            }))
          : be != null &&
            (he(be) &&
              (be = xe(
                be,
                ve +
                  (!be.key || (pe && pe.key === be.key)
                    ? ""
                    : ("" + be.key).replace(ue, "$&/") + "/") +
                  R
              )),
            H.push(be)),
        1
      );
    if (((pe = 0), (Me = Me === "" ? "." : Me + ":"), V(R)))
      for (var je = 0; je < R.length; je++) {
        Oe = R[je];
        var Re = Me + fe(Oe, je);
        pe += ye(Oe, H, ve, Re, be);
      }
    else if (((Re = E(R)), typeof Re == "function"))
      for (R = Re.call(R), je = 0; !(Oe = R.next()).done; )
        (Oe = Oe.value), (Re = Me + fe(Oe, je++)), (pe += ye(Oe, H, ve, Re, be));
    else if (Oe === "object")
      throw (
        ((H = String(R)),
        Error(
          "Objects are not valid as a React child (found: " +
            (H === "[object Object]" ? "object with keys {" + Object.keys(R).join(", ") + "}" : H) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return pe;
  }
  function me(R, H, ve) {
    if (R == null) return R;
    var Me = [],
      be = 0;
    return (
      ye(R, Me, "", "", function (Oe) {
        return H.call(ve, Oe, be++);
      }),
      Me
    );
  }
  function ce(R) {
    if (R._status === -1) {
      var H = R._result;
      (H = H()),
        H.then(
          function (ve) {
            (R._status === 0 || R._status === -1) && ((R._status = 1), (R._result = ve));
          },
          function (ve) {
            (R._status === 0 || R._status === -1) && ((R._status = 2), (R._result = ve));
          }
        ),
        R._status === -1 && ((R._status = 0), (R._result = H));
    }
    if (R._status === 1) return R._result.default;
    throw R._result;
  }
  var se = { current: null },
    J = { transition: null },
    de = { ReactCurrentDispatcher: se, ReactCurrentBatchConfig: J, ReactCurrentOwner: A };
  return (
    (Qe.Children = {
      map: me,
      forEach: function (R, H, ve) {
        me(
          R,
          function () {
            H.apply(this, arguments);
          },
          ve
        );
      },
      count: function (R) {
        var H = 0;
        return (
          me(R, function () {
            H++;
          }),
          H
        );
      },
      toArray: function (R) {
        return (
          me(R, function (H) {
            return H;
          }) || []
        );
      },
      only: function (R) {
        if (!he(R))
          throw Error("React.Children.only expected to receive a single React element child.");
        return R;
      },
    }),
    (Qe.Component = O),
    (Qe.Fragment = i),
    (Qe.Profiler = s),
    (Qe.PureComponent = K),
    (Qe.StrictMode = l),
    (Qe.Suspense = v),
    (Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = de),
    (Qe.cloneElement = function (R, H, ve) {
      if (R == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " + R + "."
        );
      var Me = z({}, R.props),
        be = R.key,
        Oe = R.ref,
        pe = R._owner;
      if (H != null) {
        if (
          (H.ref !== void 0 && ((Oe = H.ref), (pe = A.current)),
          H.key !== void 0 && (be = "" + H.key),
          R.type && R.type.defaultProps)
        )
          var je = R.type.defaultProps;
        for (Re in H)
          D.call(H, Re) &&
            !Q.hasOwnProperty(Re) &&
            (Me[Re] = H[Re] === void 0 && je !== void 0 ? je[Re] : H[Re]);
      }
      var Re = arguments.length - 2;
      if (Re === 1) Me.children = ve;
      else if (1 < Re) {
        je = Array(Re);
        for (var He = 0; He < Re; He++) je[He] = arguments[He + 2];
        Me.children = je;
      }
      return { $$typeof: r, type: R.type, key: be, ref: Oe, props: Me, _owner: pe };
    }),
    (Qe.createContext = function (R) {
      return (
        (R = {
          $$typeof: f,
          _currentValue: R,
          _currentValue2: R,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (R.Provider = { $$typeof: c, _context: R }),
        (R.Consumer = R)
      );
    }),
    (Qe.createElement = ae),
    (Qe.createFactory = function (R) {
      var H = ae.bind(null, R);
      return (H.type = R), H;
    }),
    (Qe.createRef = function () {
      return { current: null };
    }),
    (Qe.forwardRef = function (R) {
      return { $$typeof: m, render: R };
    }),
    (Qe.isValidElement = he),
    (Qe.lazy = function (R) {
      return { $$typeof: w, _payload: { _status: -1, _result: R }, _init: ce };
    }),
    (Qe.memo = function (R, H) {
      return { $$typeof: x, type: R, compare: H === void 0 ? null : H };
    }),
    (Qe.startTransition = function (R) {
      var H = J.transition;
      J.transition = {};
      try {
        R();
      } finally {
        J.transition = H;
      }
    }),
    (Qe.unstable_act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }),
    (Qe.useCallback = function (R, H) {
      return se.current.useCallback(R, H);
    }),
    (Qe.useContext = function (R) {
      return se.current.useContext(R);
    }),
    (Qe.useDebugValue = function () {}),
    (Qe.useDeferredValue = function (R) {
      return se.current.useDeferredValue(R);
    }),
    (Qe.useEffect = function (R, H) {
      return se.current.useEffect(R, H);
    }),
    (Qe.useId = function () {
      return se.current.useId();
    }),
    (Qe.useImperativeHandle = function (R, H, ve) {
      return se.current.useImperativeHandle(R, H, ve);
    }),
    (Qe.useInsertionEffect = function (R, H) {
      return se.current.useInsertionEffect(R, H);
    }),
    (Qe.useLayoutEffect = function (R, H) {
      return se.current.useLayoutEffect(R, H);
    }),
    (Qe.useMemo = function (R, H) {
      return se.current.useMemo(R, H);
    }),
    (Qe.useReducer = function (R, H, ve) {
      return se.current.useReducer(R, H, ve);
    }),
    (Qe.useRef = function (R) {
      return se.current.useRef(R);
    }),
    (Qe.useState = function (R) {
      return se.current.useState(R);
    }),
    (Qe.useSyncExternalStore = function (R, H, ve) {
      return se.current.useSyncExternalStore(R, H, ve);
    }),
    (Qe.useTransition = function () {
      return se.current.useTransition();
    }),
    (Qe.version = "18.2.0"),
    Qe
  );
}
var Wm;
function bl() {
  return Wm || ((Wm = 1), (kp.exports = $y())), kp.exports;
}
var Bm;
function Ey() {
  if (Bm) return Bs;
  Bm = 1;
  var r = bl(),
    n = Symbol.for("react.element"),
    i = Symbol.for("react.fragment"),
    l = Object.prototype.hasOwnProperty,
    s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(m, v, x) {
    var w,
      k = {},
      E = null,
      j = null;
    x !== void 0 && (E = "" + x),
      v.key !== void 0 && (E = "" + v.key),
      v.ref !== void 0 && (j = v.ref);
    for (w in v) l.call(v, w) && !c.hasOwnProperty(w) && (k[w] = v[w]);
    if (m && m.defaultProps) for (w in ((v = m.defaultProps), v)) k[w] === void 0 && (k[w] = v[w]);
    return { $$typeof: n, type: m, key: E, ref: j, props: k, _owner: s.current };
  }
  return (Bs.Fragment = i), (Bs.jsx = f), (Bs.jsxs = f), Bs;
}
var Um;
function vu() {
  return Um || ((Um = 1), (wp.exports = Ey())), wp.exports;
}
var M = vu(),
  N = bl();
const Hn = ui(N),
  Yp = Sy({ __proto__: null, default: Hn }, [N]);
var rf = {},
  Sp = { exports: {} },
  kr = {},
  Cp = { exports: {} },
  $p = {};
var Vm;
function Ry() {
  return (
    Vm ||
      ((Vm = 1),
      (function (r) {
        function n(J, de) {
          var R = J.length;
          J.push(de);
          e: for (; 0 < R; ) {
            var H = (R - 1) >>> 1,
              ve = J[H];
            if (0 < s(ve, de)) (J[H] = de), (J[R] = ve), (R = H);
            else break e;
          }
        }
        function i(J) {
          return J.length === 0 ? null : J[0];
        }
        function l(J) {
          if (J.length === 0) return null;
          var de = J[0],
            R = J.pop();
          if (R !== de) {
            J[0] = R;
            e: for (var H = 0, ve = J.length, Me = ve >>> 1; H < Me; ) {
              var be = 2 * (H + 1) - 1,
                Oe = J[be],
                pe = be + 1,
                je = J[pe];
              if (0 > s(Oe, R))
                pe < ve && 0 > s(je, Oe)
                  ? ((J[H] = je), (J[pe] = R), (H = pe))
                  : ((J[H] = Oe), (J[be] = R), (H = be));
              else if (pe < ve && 0 > s(je, R)) (J[H] = je), (J[pe] = R), (H = pe);
              else break e;
            }
          }
          return de;
        }
        function s(J, de) {
          var R = J.sortIndex - de.sortIndex;
          return R !== 0 ? R : J.id - de.id;
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
          var c = performance;
          r.unstable_now = function () {
            return c.now();
          };
        } else {
          var f = Date,
            m = f.now();
          r.unstable_now = function () {
            return f.now() - m;
          };
        }
        var v = [],
          x = [],
          w = 1,
          k = null,
          E = 3,
          j = !1,
          z = !1,
          b = !1,
          O = typeof setTimeout == "function" ? setTimeout : null,
          q = typeof clearTimeout == "function" ? clearTimeout : null,
          K = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function X(J) {
          for (var de = i(x); de !== null; ) {
            if (de.callback === null) l(x);
            else if (de.startTime <= J) l(x), (de.sortIndex = de.expirationTime), n(v, de);
            else break;
            de = i(x);
          }
        }
        function V(J) {
          if (((b = !1), X(J), !z))
            if (i(v) !== null) (z = !0), ce(D);
            else {
              var de = i(x);
              de !== null && se(V, de.startTime - J);
            }
        }
        function D(J, de) {
          (z = !1), b && ((b = !1), q(ae), (ae = -1)), (j = !0);
          var R = E;
          try {
            for (X(de), k = i(v); k !== null && (!(k.expirationTime > de) || (J && !Te())); ) {
              var H = k.callback;
              if (typeof H == "function") {
                (k.callback = null), (E = k.priorityLevel);
                var ve = H(k.expirationTime <= de);
                (de = r.unstable_now()),
                  typeof ve == "function" ? (k.callback = ve) : k === i(v) && l(v),
                  X(de);
              } else l(v);
              k = i(v);
            }
            if (k !== null) var Me = !0;
            else {
              var be = i(x);
              be !== null && se(V, be.startTime - de), (Me = !1);
            }
            return Me;
          } finally {
            (k = null), (E = R), (j = !1);
          }
        }
        var A = !1,
          Q = null,
          ae = -1,
          xe = 5,
          he = -1;
        function Te() {
          return !(r.unstable_now() - he < xe);
        }
        function ue() {
          if (Q !== null) {
            var J = r.unstable_now();
            he = J;
            var de = !0;
            try {
              de = Q(!0, J);
            } finally {
              de ? fe() : ((A = !1), (Q = null));
            }
          } else A = !1;
        }
        var fe;
        if (typeof K == "function")
          fe = function () {
            K(ue);
          };
        else if (typeof MessageChannel < "u") {
          var ye = new MessageChannel(),
            me = ye.port2;
          (ye.port1.onmessage = ue),
            (fe = function () {
              me.postMessage(null);
            });
        } else
          fe = function () {
            O(ue, 0);
          };
        function ce(J) {
          (Q = J), A || ((A = !0), fe());
        }
        function se(J, de) {
          ae = O(function () {
            J(r.unstable_now());
          }, de);
        }
        (r.unstable_IdlePriority = 5),
          (r.unstable_ImmediatePriority = 1),
          (r.unstable_LowPriority = 4),
          (r.unstable_NormalPriority = 3),
          (r.unstable_Profiling = null),
          (r.unstable_UserBlockingPriority = 2),
          (r.unstable_cancelCallback = function (J) {
            J.callback = null;
          }),
          (r.unstable_continueExecution = function () {
            z || j || ((z = !0), ce(D));
          }),
          (r.unstable_forceFrameRate = function (J) {
            0 > J || 125 < J
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (xe = 0 < J ? Math.floor(1e3 / J) : 5);
          }),
          (r.unstable_getCurrentPriorityLevel = function () {
            return E;
          }),
          (r.unstable_getFirstCallbackNode = function () {
            return i(v);
          }),
          (r.unstable_next = function (J) {
            switch (E) {
              case 1:
              case 2:
              case 3:
                var de = 3;
                break;
              default:
                de = E;
            }
            var R = E;
            E = de;
            try {
              return J();
            } finally {
              E = R;
            }
          }),
          (r.unstable_pauseExecution = function () {}),
          (r.unstable_requestPaint = function () {}),
          (r.unstable_runWithPriority = function (J, de) {
            switch (J) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                J = 3;
            }
            var R = E;
            E = J;
            try {
              return de();
            } finally {
              E = R;
            }
          }),
          (r.unstable_scheduleCallback = function (J, de, R) {
            var H = r.unstable_now();
            switch (
              (typeof R == "object" && R !== null
                ? ((R = R.delay), (R = typeof R == "number" && 0 < R ? H + R : H))
                : (R = H),
              J)
            ) {
              case 1:
                var ve = -1;
                break;
              case 2:
                ve = 250;
                break;
              case 5:
                ve = 1073741823;
                break;
              case 4:
                ve = 1e4;
                break;
              default:
                ve = 5e3;
            }
            return (
              (ve = R + ve),
              (J = {
                id: w++,
                callback: de,
                priorityLevel: J,
                startTime: R,
                expirationTime: ve,
                sortIndex: -1,
              }),
              R > H
                ? ((J.sortIndex = R),
                  n(x, J),
                  i(v) === null && J === i(x) && (b ? (q(ae), (ae = -1)) : (b = !0), se(V, R - H)))
                : ((J.sortIndex = ve), n(v, J), z || j || ((z = !0), ce(D))),
              J
            );
          }),
          (r.unstable_shouldYield = Te),
          (r.unstable_wrapCallback = function (J) {
            var de = E;
            return function () {
              var R = E;
              E = de;
              try {
                return J.apply(this, arguments);
              } finally {
                E = R;
              }
            };
          });
      })($p)),
    $p
  );
}
var Hm;
function _y() {
  return Hm || ((Hm = 1), (Cp.exports = Ry())), Cp.exports;
}
var Gm;
function Py() {
  if (Gm) return kr;
  Gm = 1;
  var r = bl(),
    n = _y();
  function i(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, o = 1;
      o < arguments.length;
      o++
    )
      t += "&args[]=" + encodeURIComponent(arguments[o]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var l = new Set(),
    s = {};
  function c(e, t) {
    f(e, t), f(e + "Capture", t);
  }
  function f(e, t) {
    for (s[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
  }
  var m = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    v = Object.prototype.hasOwnProperty,
    x =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    w = {},
    k = {};
  function E(e) {
    return v.call(k, e) ? !0 : v.call(w, e) ? !1 : x.test(e) ? (k[e] = !0) : ((w[e] = !0), !1);
  }
  function j(e, t, o, a) {
    if (o !== null && o.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return a
          ? !1
          : o !== null
          ? !o.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function z(e, t, o, a) {
    if (t === null || typeof t > "u" || j(e, t, o, a)) return !0;
    if (a) return !1;
    if (o !== null)
      switch (o.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function b(e, t, o, a, u, p, y) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = a),
      (this.attributeNamespace = u),
      (this.mustUseProperty = o),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = p),
      (this.removeEmptyString = y);
  }
  var O = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      O[e] = new b(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      O[t] = new b(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
      O[e] = new b(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (
      e
    ) {
      O[e] = new b(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        O[e] = new b(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      O[e] = new b(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      O[e] = new b(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      O[e] = new b(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      O[e] = new b(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var q = /[\-:]([a-z])/g;
  function K(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(q, K);
      O[t] = new b(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(q, K);
        O[t] = new b(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(q, K);
      O[t] = new b(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      O[e] = new b(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (O.xlinkHref = new b("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1)),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      O[e] = new b(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function X(e, t, o, a) {
    var u = O.hasOwnProperty(t) ? O[t] : null;
    (u !== null
      ? u.type !== 0
      : a || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
      (z(t, o, u, a) && (o = null),
      a || u === null
        ? E(t) && (o === null ? e.removeAttribute(t) : e.setAttribute(t, "" + o))
        : u.mustUseProperty
        ? (e[u.propertyName] = o === null ? (u.type === 3 ? !1 : "") : o)
        : ((t = u.attributeName),
          (a = u.attributeNamespace),
          o === null
            ? e.removeAttribute(t)
            : ((u = u.type),
              (o = u === 3 || (u === 4 && o === !0) ? "" : "" + o),
              a ? e.setAttributeNS(a, t, o) : e.setAttribute(t, o))));
  }
  var V = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    D = Symbol.for("react.element"),
    A = Symbol.for("react.portal"),
    Q = Symbol.for("react.fragment"),
    ae = Symbol.for("react.strict_mode"),
    xe = Symbol.for("react.profiler"),
    he = Symbol.for("react.provider"),
    Te = Symbol.for("react.context"),
    ue = Symbol.for("react.forward_ref"),
    fe = Symbol.for("react.suspense"),
    ye = Symbol.for("react.suspense_list"),
    me = Symbol.for("react.memo"),
    ce = Symbol.for("react.lazy"),
    se = Symbol.for("react.offscreen"),
    J = Symbol.iterator;
  function de(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (J && e[J]) || e["@@iterator"]), typeof e == "function" ? e : null);
  }
  var R = Object.assign,
    H;
  function ve(e) {
    if (H === void 0)
      try {
        throw Error();
      } catch (o) {
        var t = o.stack.trim().match(/\n( *(at )?)/);
        H = (t && t[1]) || "";
      }
    return (
      `
` +
      H +
      e
    );
  }
  var Me = !1;
  function be(e, t) {
    if (!e || Me) return "";
    Me = !0;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (G) {
            var a = G;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (G) {
            a = G;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (G) {
          a = G;
        }
        e();
      }
    } catch (G) {
      if (G && a && typeof G.stack == "string") {
        for (
          var u = G.stack.split(`
`),
            p = a.stack.split(`
`),
            y = u.length - 1,
            C = p.length - 1;
          1 <= y && 0 <= C && u[y] !== p[C];

        )
          C--;
        for (; 1 <= y && 0 <= C; y--, C--)
          if (u[y] !== p[C]) {
            if (y !== 1 || C !== 1)
              do
                if ((y--, C--, 0 > C || u[y] !== p[C])) {
                  var T =
                    `
` + u[y].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      T.includes("<anonymous>") &&
                      (T = T.replace("<anonymous>", e.displayName)),
                    T
                  );
                }
              while (1 <= y && 0 <= C);
            break;
          }
      }
    } finally {
      (Me = !1), (Error.prepareStackTrace = o);
    }
    return (e = e ? e.displayName || e.name : "") ? ve(e) : "";
  }
  function Oe(e) {
    switch (e.tag) {
      case 5:
        return ve(e.type);
      case 16:
        return ve("Lazy");
      case 13:
        return ve("Suspense");
      case 19:
        return ve("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = be(e.type, !1)), e;
      case 11:
        return (e = be(e.type.render, !1)), e;
      case 1:
        return (e = be(e.type, !0)), e;
      default:
        return "";
    }
  }
  function pe(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Q:
        return "Fragment";
      case A:
        return "Portal";
      case xe:
        return "Profiler";
      case ae:
        return "StrictMode";
      case fe:
        return "Suspense";
      case ye:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Te:
          return (e.displayName || "Context") + ".Consumer";
        case he:
          return (e._context.displayName || "Context") + ".Provider";
        case ue:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case me:
          return (t = e.displayName || null), t !== null ? t : pe(e.type) || "Memo";
        case ce:
          (t = e._payload), (e = e._init);
          try {
            return pe(e(t));
          } catch {}
      }
    return null;
  }
  function je(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return pe(t);
      case 8:
        return t === ae ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function Re(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function He(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function dr(e) {
    var t = He(e) ? "checked" : "value",
      o = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      a = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof o < "u" &&
      typeof o.get == "function" &&
      typeof o.set == "function"
    ) {
      var u = o.get,
        p = o.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (y) {
            (a = "" + y), p.call(this, y);
          },
        }),
        Object.defineProperty(e, t, { enumerable: o.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (y) {
            a = "" + y;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Ht(e) {
    e._valueTracker || (e._valueTracker = dr(e));
  }
  function bo(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var o = t.getValue(),
      a = "";
    return (
      e && (a = He(e) ? (e.checked ? "true" : "false") : e.value),
      (e = a),
      e !== o ? (t.setValue(e), !0) : !1
    );
  }
  function an(e) {
    if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function ln(e, t) {
    var o = t.checked;
    return R({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: o ?? e._wrapperState.initialChecked,
    });
  }
  function wo(e, t) {
    var o = t.defaultValue == null ? "" : t.defaultValue,
      a = t.checked != null ? t.checked : t.defaultChecked;
    (o = Re(t.value != null ? t.value : o)),
      (e._wrapperState = {
        initialChecked: a,
        initialValue: o,
        controlled:
          t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
      });
  }
  function Yn(e, t) {
    (t = t.checked), t != null && X(e, "checked", t, !1);
  }
  function _n(e, t) {
    Yn(e, t);
    var o = Re(t.value),
      a = t.type;
    if (o != null)
      a === "number"
        ? ((o === 0 && e.value === "") || e.value != o) && (e.value = "" + o)
        : e.value !== "" + o && (e.value = "" + o);
    else if (a === "submit" || a === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? Qn(e, t.type, o)
      : t.hasOwnProperty("defaultValue") && Qn(e, t.type, Re(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Pn(e, t, o) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var a = t.type;
      if (!((a !== "submit" && a !== "reset") || (t.value !== void 0 && t.value !== null))) return;
      (t = "" + e._wrapperState.initialValue),
        o || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (o = e.name),
      o !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      o !== "" && (e.name = o);
  }
  function Qn(e, t, o) {
    (t !== "number" || an(e.ownerDocument) !== e) &&
      (o == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + o && (e.defaultValue = "" + o));
  }
  var Mt = Array.isArray;
  function Ft(e, t, o, a) {
    if (((e = e.options), t)) {
      t = {};
      for (var u = 0; u < o.length; u++) t["$" + o[u]] = !0;
      for (o = 0; o < e.length; o++)
        (u = t.hasOwnProperty("$" + e[o].value)),
          e[o].selected !== u && (e[o].selected = u),
          u && a && (e[o].defaultSelected = !0);
    } else {
      for (o = "" + Re(o), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === o) {
          (e[u].selected = !0), a && (e[u].defaultSelected = !0);
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function sn(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(i(91));
    return R({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Tn(e, t) {
    var o = t.value;
    if (o == null) {
      if (((o = t.children), (t = t.defaultValue), o != null)) {
        if (t != null) throw Error(i(92));
        if (Mt(o)) {
          if (1 < o.length) throw Error(i(93));
          o = o[0];
        }
        t = o;
      }
      t == null && (t = ""), (o = t);
    }
    e._wrapperState = { initialValue: Re(o) };
  }
  function pr(e, t) {
    var o = Re(t.value),
      a = Re(t.defaultValue);
    o != null &&
      ((o = "" + o),
      o !== e.value && (e.value = o),
      t.defaultValue == null && e.defaultValue !== o && (e.defaultValue = o)),
      a != null && (e.defaultValue = "" + a);
  }
  function hr(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function On(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Fr(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? On(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var Wr,
    Fe = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, o, a, u) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, o, a, u);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
      else {
        for (
          Wr = Wr || document.createElement("div"),
            Wr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Wr.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function un(e, t) {
    if (t) {
      var o = e.firstChild;
      if (o && o === e.lastChild && o.nodeType === 3) {
        o.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Zn = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    ta = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Zn).forEach(function (e) {
    ta.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Zn[t] = Zn[e]);
    });
  });
  function ra(e, t, o) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : o || typeof t != "number" || t === 0 || (Zn.hasOwnProperty(e) && Zn[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function $l(e, t) {
    e = e.style;
    for (var o in t)
      if (t.hasOwnProperty(o)) {
        var a = o.indexOf("--") === 0,
          u = ra(o, t[o], a);
        o === "float" && (o = "cssFloat"), a ? e.setProperty(o, u) : (e[o] = u);
      }
  }
  var Jf = R(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function El(e, t) {
    if (t) {
      if (Jf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(i(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(i(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(i(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(i(62));
    }
  }
  function na(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var oa = null;
  function Rl(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var _l = null,
    ko = null,
    So = null;
  function $u(e) {
    if ((e = Vr(e))) {
      if (typeof _l != "function") throw Error(i(280));
      var t = e.stateNode;
      t && ((t = Ei(t)), _l(e.stateNode, e.type, t));
    }
  }
  function Eu(e) {
    ko ? (So ? So.push(e) : (So = [e])) : (ko = e);
  }
  function Ru() {
    if (ko) {
      var e = ko,
        t = So;
      if (((So = ko = null), $u(e), t)) for (e = 0; e < t.length; e++) $u(t[e]);
    }
  }
  function _u(e, t) {
    return e(t);
  }
  function Pu() {}
  var Pl = !1;
  function Tu(e, t, o) {
    if (Pl) return e(t, o);
    Pl = !0;
    try {
      return _u(e, t, o);
    } finally {
      (Pl = !1), (ko !== null || So !== null) && (Pu(), Ru());
    }
  }
  function fi(e, t) {
    var o = e.stateNode;
    if (o === null) return null;
    var a = Ei(o);
    if (a === null) return null;
    o = a[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) ||
          ((e = e.type),
          (a = !(e === "button" || e === "input" || e === "select" || e === "textarea"))),
          (e = !a);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (o && typeof o != "function") throw Error(i(231, t, typeof o));
    return o;
  }
  var Tl = !1;
  if (m)
    try {
      var Co = {};
      Object.defineProperty(Co, "passive", {
        get: function () {
          Tl = !0;
        },
      }),
        window.addEventListener("test", Co, Co),
        window.removeEventListener("test", Co, Co);
    } catch {
      Tl = !1;
    }
  function Ou(e, t, o, a, u, p, y, C, T) {
    var G = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(o, G);
    } catch (ne) {
      this.onError(ne);
    }
  }
  var di = !1,
    ia = null,
    aa = !1,
    $o = null,
    ed = {
      onError: function (e) {
        (di = !0), (ia = e);
      },
    };
  function Mu(e, t, o, a, u, p, y, C, T) {
    (di = !1), (ia = null), Ou.apply(ed, arguments);
  }
  function td(e, t, o, a, u, p, y, C, T) {
    if ((Mu.apply(this, arguments), di)) {
      if (di) {
        var G = ia;
        (di = !1), (ia = null);
      } else throw Error(i(198));
      aa || ((aa = !0), ($o = G));
    }
  }
  function Jn(e) {
    var t = e,
      o = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (o = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? o : null;
  }
  function zu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function Ol(e) {
    if (Jn(e) !== e) throw Error(i(188));
  }
  function rd(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Jn(e)), t === null)) throw Error(i(188));
      return t !== e ? null : e;
    }
    for (var o = e, a = t; ; ) {
      var u = o.return;
      if (u === null) break;
      var p = u.alternate;
      if (p === null) {
        if (((a = u.return), a !== null)) {
          o = a;
          continue;
        }
        break;
      }
      if (u.child === p.child) {
        for (p = u.child; p; ) {
          if (p === o) return Ol(u), e;
          if (p === a) return Ol(u), t;
          p = p.sibling;
        }
        throw Error(i(188));
      }
      if (o.return !== a.return) (o = u), (a = p);
      else {
        for (var y = !1, C = u.child; C; ) {
          if (C === o) {
            (y = !0), (o = u), (a = p);
            break;
          }
          if (C === a) {
            (y = !0), (a = u), (o = p);
            break;
          }
          C = C.sibling;
        }
        if (!y) {
          for (C = p.child; C; ) {
            if (C === o) {
              (y = !0), (o = p), (a = u);
              break;
            }
            if (C === a) {
              (y = !0), (a = p), (o = u);
              break;
            }
            C = C.sibling;
          }
          if (!y) throw Error(i(189));
        }
      }
      if (o.alternate !== a) throw Error(i(190));
    }
    if (o.tag !== 3) throw Error(i(188));
    return o.stateNode.current === o ? e : t;
  }
  function Ml(e) {
    return (e = rd(e)), e !== null ? Nu(e) : null;
  }
  function Nu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Nu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var zl = n.unstable_scheduleCallback,
    Lu = n.unstable_cancelCallback,
    nd = n.unstable_shouldYield,
    ju = n.unstable_requestPaint,
    bt = n.unstable_now,
    od = n.unstable_getCurrentPriorityLevel,
    Nl = n.unstable_ImmediatePriority,
    Iu = n.unstable_UserBlockingPriority,
    la = n.unstable_NormalPriority,
    id = n.unstable_LowPriority,
    sa = n.unstable_IdlePriority,
    cn = null,
    mr = null;
  function Eo(e) {
    if (mr && typeof mr.onCommitFiberRoot == "function")
      try {
        mr.onCommitFiberRoot(cn, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Rr = Math.clz32 ? Math.clz32 : sd,
    ad = Math.log,
    ld = Math.LN2;
  function sd(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((ad(e) / ld) | 0)) | 0;
  }
  var ua = 64,
    pi = 4194304;
  function Ro(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function ca(e, t) {
    var o = e.pendingLanes;
    if (o === 0) return 0;
    var a = 0,
      u = e.suspendedLanes,
      p = e.pingedLanes,
      y = o & 268435455;
    if (y !== 0) {
      var C = y & ~u;
      C !== 0 ? (a = Ro(C)) : ((p &= y), p !== 0 && (a = Ro(p)));
    } else (y = o & ~u), y !== 0 ? (a = Ro(y)) : p !== 0 && (a = Ro(p));
    if (a === 0) return 0;
    if (
      t !== 0 &&
      t !== a &&
      (t & u) === 0 &&
      ((u = a & -a), (p = t & -t), u >= p || (u === 16 && (p & 4194240) !== 0))
    )
      return t;
    if (((a & 4) !== 0 && (a |= o & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= a; 0 < t; )
        (o = 31 - Rr(t)), (u = 1 << o), (a |= e[o]), (t &= ~u);
    return a;
  }
  function ud(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function cd(e, t) {
    for (
      var o = e.suspendedLanes, a = e.pingedLanes, u = e.expirationTimes, p = e.pendingLanes;
      0 < p;

    ) {
      var y = 31 - Rr(p),
        C = 1 << y,
        T = u[y];
      T === -1
        ? ((C & o) === 0 || (C & a) !== 0) && (u[y] = ud(C, t))
        : T <= t && (e.expiredLanes |= C),
        (p &= ~C);
    }
  }
  function Ll(e) {
    return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function jl() {
    var e = ua;
    return (ua <<= 1), (ua & 4194240) === 0 && (ua = 64), e;
  }
  function fa(e) {
    for (var t = [], o = 0; 31 > o; o++) t.push(e);
    return t;
  }
  function hi(e, t, o) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Rr(t)),
      (e[t] = o);
  }
  function fd(e, t) {
    var o = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var a = e.eventTimes;
    for (e = e.expirationTimes; 0 < o; ) {
      var u = 31 - Rr(o),
        p = 1 << u;
      (t[u] = 0), (a[u] = -1), (e[u] = -1), (o &= ~p);
    }
  }
  function Il(e, t) {
    var o = (e.entangledLanes |= t);
    for (e = e.entanglements; o; ) {
      var a = 31 - Rr(o),
        u = 1 << a;
      (u & t) | (e[a] & t) && (e[a] |= t), (o &= ~u);
    }
  }
  var lt = 0;
  function Du(e) {
    return (e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1;
  }
  var Au,
    Dl,
    Fu,
    Wu,
    Bu,
    Al = !1,
    da = [],
    Mn = null,
    fn = null,
    dn = null,
    mi = new Map(),
    zn = new Map(),
    ir = [],
    dd =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function Fl(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Mn = null;
        break;
      case "dragenter":
      case "dragleave":
        fn = null;
        break;
      case "mouseover":
      case "mouseout":
        dn = null;
        break;
      case "pointerover":
      case "pointerout":
        mi.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        zn.delete(t.pointerId);
    }
  }
  function vi(e, t, o, a, u, p) {
    return e === null || e.nativeEvent !== p
      ? ((e = {
          blockedOn: t,
          domEventName: o,
          eventSystemFlags: a,
          nativeEvent: p,
          targetContainers: [u],
        }),
        t !== null && ((t = Vr(t)), t !== null && Dl(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        e);
  }
  function Wl(e, t, o, a, u) {
    switch (t) {
      case "focusin":
        return (Mn = vi(Mn, e, t, o, a, u)), !0;
      case "dragenter":
        return (fn = vi(fn, e, t, o, a, u)), !0;
      case "mouseover":
        return (dn = vi(dn, e, t, o, a, u)), !0;
      case "pointerover":
        var p = u.pointerId;
        return mi.set(p, vi(mi.get(p) || null, e, t, o, a, u)), !0;
      case "gotpointercapture":
        return (p = u.pointerId), zn.set(p, vi(zn.get(p) || null, e, t, o, a, u)), !0;
    }
    return !1;
  }
  function pa(e) {
    var t = Ln(e.target);
    if (t !== null) {
      var o = Jn(t);
      if (o !== null) {
        if (((t = o.tag), t === 13)) {
          if (((t = zu(o)), t !== null)) {
            (e.blockedOn = t),
              Bu(e.priority, function () {
                Fu(o);
              });
            return;
          }
        } else if (t === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function ha(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var o = Hl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (o === null) {
        o = e.nativeEvent;
        var a = new o.constructor(o.type, o);
        (oa = a), o.target.dispatchEvent(a), (oa = null);
      } else return (t = Vr(o)), t !== null && Dl(t), (e.blockedOn = o), !1;
      t.shift();
    }
    return !0;
  }
  function Bl(e, t, o) {
    ha(e) && o.delete(t);
  }
  function _o() {
    (Al = !1),
      Mn !== null && ha(Mn) && (Mn = null),
      fn !== null && ha(fn) && (fn = null),
      dn !== null && ha(dn) && (dn = null),
      mi.forEach(Bl),
      zn.forEach(Bl);
  }
  function gi(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Al || ((Al = !0), n.unstable_scheduleCallback(n.unstable_NormalPriority, _o)));
  }
  function yi(e) {
    function t(u) {
      return gi(u, e);
    }
    if (0 < da.length) {
      gi(da[0], e);
      for (var o = 1; o < da.length; o++) {
        var a = da[o];
        a.blockedOn === e && (a.blockedOn = null);
      }
    }
    for (
      Mn !== null && gi(Mn, e),
        fn !== null && gi(fn, e),
        dn !== null && gi(dn, e),
        mi.forEach(t),
        zn.forEach(t),
        o = 0;
      o < ir.length;
      o++
    )
      (a = ir[o]), a.blockedOn === e && (a.blockedOn = null);
    for (; 0 < ir.length && ((o = ir[0]), o.blockedOn === null); )
      pa(o), o.blockedOn === null && ir.shift();
  }
  var Po = V.ReactCurrentBatchConfig,
    To = !0;
  function Ul(e, t, o, a) {
    var u = lt,
      p = Po.transition;
    Po.transition = null;
    try {
      (lt = 1), Vl(e, t, o, a);
    } finally {
      (lt = u), (Po.transition = p);
    }
  }
  function Uu(e, t, o, a) {
    var u = lt,
      p = Po.transition;
    Po.transition = null;
    try {
      (lt = 4), Vl(e, t, o, a);
    } finally {
      (lt = u), (Po.transition = p);
    }
  }
  function Vl(e, t, o, a) {
    if (To) {
      var u = Hl(e, t, o, a);
      if (u === null) hs(e, t, a, ma, o), Fl(e, a);
      else if (Wl(u, e, t, o, a)) a.stopPropagation();
      else if ((Fl(e, a), t & 4 && -1 < dd.indexOf(e))) {
        for (; u !== null; ) {
          var p = Vr(u);
          if (
            (p !== null && Au(p), (p = Hl(e, t, o, a)), p === null && hs(e, t, a, ma, o), p === u)
          )
            break;
          u = p;
        }
        u !== null && a.stopPropagation();
      } else hs(e, t, a, null, o);
    }
  }
  var ma = null;
  function Hl(e, t, o, a) {
    if (((ma = null), (e = Rl(a)), (e = Ln(e)), e !== null))
      if (((t = Jn(e)), t === null)) e = null;
      else if (((o = t.tag), o === 13)) {
        if (((e = zu(t)), e !== null)) return e;
        e = null;
      } else if (o === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (ma = e), null;
  }
  function Gl(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (od()) {
          case Nl:
            return 1;
          case Iu:
            return 4;
          case la:
          case id:
            return 16;
          case sa:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var pn = null,
    ql = null,
    va = null;
  function Vu() {
    if (va) return va;
    var e,
      t = ql,
      o = t.length,
      a,
      u = "value" in pn ? pn.value : pn.textContent,
      p = u.length;
    for (e = 0; e < o && t[e] === u[e]; e++);
    var y = o - e;
    for (a = 1; a <= y && t[o - a] === u[p - a]; a++);
    return (va = u.slice(e, 1 < a ? 1 - a : void 0));
  }
  function ga(e) {
    var t = e.keyCode;
    return (
      "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function ya() {
    return !0;
  }
  function Hu() {
    return !1;
  }
  function ar(e) {
    function t(o, a, u, p, y) {
      (this._reactName = o),
        (this._targetInst = u),
        (this.type = a),
        (this.nativeEvent = p),
        (this.target = y),
        (this.currentTarget = null);
      for (var C in e) e.hasOwnProperty(C) && ((o = e[C]), (this[C] = o ? o(p) : p[C]));
      return (
        (this.isDefaultPrevented = (
          p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1
        )
          ? ya
          : Hu),
        (this.isPropagationStopped = Hu),
        this
      );
    }
    return (
      R(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var o = this.nativeEvent;
          o &&
            (o.preventDefault
              ? o.preventDefault()
              : typeof o.returnValue != "unknown" && (o.returnValue = !1),
            (this.isDefaultPrevented = ya));
        },
        stopPropagation: function () {
          var o = this.nativeEvent;
          o &&
            (o.stopPropagation
              ? o.stopPropagation()
              : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0),
            (this.isPropagationStopped = ya));
        },
        persist: function () {},
        isPersistent: ya,
      }),
      t
    );
  }
  var eo = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Kl = ar(eo),
    xi = R({}, eo, { view: 0, detail: 0 }),
    pd = ar(xi),
    Xl,
    Yl,
    bi,
    xa = R({}, xi, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: ba,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== bi &&
              (bi && e.type === "mousemove"
                ? ((Xl = e.screenX - bi.screenX), (Yl = e.screenY - bi.screenY))
                : (Yl = Xl = 0),
              (bi = e)),
            Xl);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Yl;
      },
    }),
    Gu = ar(xa),
    hd = R({}, xa, { dataTransfer: 0 }),
    md = ar(hd),
    qu = R({}, xi, { relatedTarget: 0 }),
    Ql = ar(qu),
    vd = R({}, eo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    gd = ar(vd),
    yd = R({}, eo, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Ku = ar(yd),
    xd = R({}, eo, { data: 0 }),
    Xu = ar(xd),
    bd = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    wd = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    kd = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Sd(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = kd[e]) ? !!t[e] : !1;
  }
  function ba() {
    return Sd;
  }
  var wa = R({}, xi, {
      key: function (e) {
        if (e.key) {
          var t = bd[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = ga(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? wd[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ba,
      charCode: function (e) {
        return e.type === "keypress" ? ga(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? ga(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    Zl = ar(wa),
    Yu = R({}, xa, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Qu = ar(Yu),
    Zu = R({}, xi, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ba,
    }),
    Cd = ar(Zu),
    Ju = R({}, eo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    $d = ar(Ju),
    wi = R({}, xa, {
      deltaX: function (e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Ed = ar(wi),
    Rd = [9, 13, 27, 32],
    Jl = m && "CompositionEvent" in window,
    ki = null;
  m && "documentMode" in document && (ki = document.documentMode);
  var _d = m && "TextEvent" in window && !ki,
    ec = m && (!Jl || (ki && 8 < ki && 11 >= ki)),
    tc = " ",
    rc = !1;
  function nc(e, t) {
    switch (e) {
      case "keyup":
        return Rd.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function es(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var to = !1;
  function Pd(e, t) {
    switch (e) {
      case "compositionend":
        return es(t);
      case "keypress":
        return t.which !== 32 ? null : ((rc = !0), tc);
      case "textInput":
        return (e = t.data), e === tc && rc ? null : e;
      default:
        return null;
    }
  }
  function Td(e, t) {
    if (to)
      return e === "compositionend" || (!Jl && nc(e, t))
        ? ((e = Vu()), (va = ql = pn = null), (to = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return ec && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Od = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function ka(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Od[e.type] : t === "textarea";
  }
  function ts(e, t, o, a) {
    Eu(a),
      (t = Oa(t, "onChange")),
      0 < t.length &&
        ((o = new Kl("onChange", "change", null, o, a)), e.push({ event: o, listeners: t }));
  }
  var Oo = null,
    Mo = null;
  function oc(e) {
    xc(e, 0);
  }
  function ro(e) {
    var t = Io(e);
    if (bo(t)) return e;
  }
  function Md(e, t) {
    if (e === "change") return t;
  }
  var rs = !1;
  if (m) {
    var ns;
    if (m) {
      var os = "oninput" in document;
      if (!os) {
        var ic = document.createElement("div");
        ic.setAttribute("oninput", "return;"), (os = typeof ic.oninput == "function");
      }
      ns = os;
    } else ns = !1;
    rs = ns && (!document.documentMode || 9 < document.documentMode);
  }
  function ac() {
    Oo && (Oo.detachEvent("onpropertychange", lc), (Mo = Oo = null));
  }
  function lc(e) {
    if (e.propertyName === "value" && ro(Mo)) {
      var t = [];
      ts(t, Mo, e, Rl(e)), Tu(oc, t);
    }
  }
  function is(e, t, o) {
    e === "focusin"
      ? (ac(), (Oo = t), (Mo = o), Oo.attachEvent("onpropertychange", lc))
      : e === "focusout" && ac();
  }
  function Sa(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return ro(Mo);
  }
  function as(e, t) {
    if (e === "click") return ro(t);
  }
  function zd(e, t) {
    if (e === "input" || e === "change") return ro(t);
  }
  function Nd(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var lr = typeof Object.is == "function" ? Object.is : Nd;
  function Si(e, t) {
    if (lr(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var o = Object.keys(e),
      a = Object.keys(t);
    if (o.length !== a.length) return !1;
    for (a = 0; a < o.length; a++) {
      var u = o[a];
      if (!v.call(t, u) || !lr(e[u], t[u])) return !1;
    }
    return !0;
  }
  function sc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function uc(e, t) {
    var o = sc(e);
    e = 0;
    for (var a; o; ) {
      if (o.nodeType === 3) {
        if (((a = e + o.textContent.length), e <= t && a >= t)) return { node: o, offset: t - e };
        e = a;
      }
      e: {
        for (; o; ) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break e;
          }
          o = o.parentNode;
        }
        o = void 0;
      }
      o = sc(o);
    }
  }
  function ls(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? ls(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function Ca() {
    for (var e = window, t = an(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var o = typeof t.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o) e = t.contentWindow;
      else break;
      t = an(e.document);
    }
    return t;
  }
  function ss(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function $a(e) {
    var t = Ca(),
      o = e.focusedElem,
      a = e.selectionRange;
    if (t !== o && o && o.ownerDocument && ls(o.ownerDocument.documentElement, o)) {
      if (a !== null && ss(o)) {
        if (((t = a.start), (e = a.end), e === void 0 && (e = t), "selectionStart" in o))
          (o.selectionStart = t), (o.selectionEnd = Math.min(e, o.value.length));
        else if (
          ((e = ((t = o.ownerDocument || document) && t.defaultView) || window), e.getSelection)
        ) {
          e = e.getSelection();
          var u = o.textContent.length,
            p = Math.min(a.start, u);
          (a = a.end === void 0 ? p : Math.min(a.end, u)),
            !e.extend && p > a && ((u = a), (a = p), (p = u)),
            (u = uc(o, p));
          var y = uc(o, a);
          u &&
            y &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== u.node ||
              e.anchorOffset !== u.offset ||
              e.focusNode !== y.node ||
              e.focusOffset !== y.offset) &&
            ((t = t.createRange()),
            t.setStart(u.node, u.offset),
            e.removeAllRanges(),
            p > a
              ? (e.addRange(t), e.extend(y.node, y.offset))
              : (t.setEnd(y.node, y.offset), e.addRange(t)));
        }
      }
      for (t = [], e = o; (e = e.parentNode); )
        e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < t.length; o++)
        (e = t[o]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
    }
  }
  var Ld = m && "documentMode" in document && 11 >= document.documentMode,
    zo = null,
    Ea = null,
    no = null,
    us = !1;
  function cc(e, t, o) {
    var a = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    us ||
      zo == null ||
      zo !== an(a) ||
      ((a = zo),
      "selectionStart" in a && ss(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = ((a.ownerDocument && a.ownerDocument.defaultView) || window).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (no && Si(no, a)) ||
        ((no = a),
        (a = Oa(Ea, "onSelect")),
        0 < a.length &&
          ((t = new Kl("onSelect", "select", null, t, o)),
          e.push({ event: t, listeners: a }),
          (t.target = zo))));
  }
  function Ra(e, t) {
    var o = {};
    return (
      (o[e.toLowerCase()] = t.toLowerCase()),
      (o["Webkit" + e] = "webkit" + t),
      (o["Moz" + e] = "moz" + t),
      o
    );
  }
  var oo = {
      animationend: Ra("Animation", "AnimationEnd"),
      animationiteration: Ra("Animation", "AnimationIteration"),
      animationstart: Ra("Animation", "AnimationStart"),
      transitionend: Ra("Transition", "TransitionEnd"),
    },
    _a = {},
    fc = {};
  m &&
    ((fc = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete oo.animationend.animation,
      delete oo.animationiteration.animation,
      delete oo.animationstart.animation),
    "TransitionEvent" in window || delete oo.transitionend.transition);
  function Pa(e) {
    if (_a[e]) return _a[e];
    if (!oo[e]) return e;
    var t = oo[e],
      o;
    for (o in t) if (t.hasOwnProperty(o) && o in fc) return (_a[e] = t[o]);
    return e;
  }
  var dc = Pa("animationend"),
    pc = Pa("animationiteration"),
    hc = Pa("animationstart"),
    mc = Pa("transitionend"),
    vc = new Map(),
    gc =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function Nn(e, t) {
    vc.set(e, t), c(t, [e]);
  }
  for (var cs = 0; cs < gc.length; cs++) {
    var fs = gc[cs],
      jd = fs.toLowerCase(),
      Id = fs[0].toUpperCase() + fs.slice(1);
    Nn(jd, "on" + Id);
  }
  Nn(dc, "onAnimationEnd"),
    Nn(pc, "onAnimationIteration"),
    Nn(hc, "onAnimationStart"),
    Nn("dblclick", "onDoubleClick"),
    Nn("focusin", "onFocus"),
    Nn("focusout", "onBlur"),
    Nn(mc, "onTransitionEnd"),
    f("onMouseEnter", ["mouseout", "mouseover"]),
    f("onMouseLeave", ["mouseout", "mouseover"]),
    f("onPointerEnter", ["pointerout", "pointerover"]),
    f("onPointerLeave", ["pointerout", "pointerover"]),
    c("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    c(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    c("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    c("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    c(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    c(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Ci =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    yc = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ci));
  function ds(e, t, o) {
    var a = e.type || "unknown-event";
    (e.currentTarget = o), td(a, t, void 0, e), (e.currentTarget = null);
  }
  function xc(e, t) {
    t = (t & 4) !== 0;
    for (var o = 0; o < e.length; o++) {
      var a = e[o],
        u = a.event;
      a = a.listeners;
      e: {
        var p = void 0;
        if (t)
          for (var y = a.length - 1; 0 <= y; y--) {
            var C = a[y],
              T = C.instance,
              G = C.currentTarget;
            if (((C = C.listener), T !== p && u.isPropagationStopped())) break e;
            ds(u, C, G), (p = T);
          }
        else
          for (y = 0; y < a.length; y++) {
            if (
              ((C = a[y]),
              (T = C.instance),
              (G = C.currentTarget),
              (C = C.listener),
              T !== p && u.isPropagationStopped())
            )
              break e;
            ds(u, C, G), (p = T);
          }
      }
    }
    if (aa) throw ((e = $o), (aa = !1), ($o = null), e);
  }
  function pt(e, t) {
    var o = t[gs];
    o === void 0 && (o = t[gs] = new Set());
    var a = e + "__bubble";
    o.has(a) || (bc(t, e, 2, !1), o.add(a));
  }
  function ps(e, t, o) {
    var a = 0;
    t && (a |= 4), bc(o, e, a, t);
  }
  var Ta = "_reactListening" + Math.random().toString(36).slice(2);
  function _r(e) {
    if (!e[Ta]) {
      (e[Ta] = !0),
        l.forEach(function (o) {
          o !== "selectionchange" && (yc.has(o) || ps(o, !1, e), ps(o, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ta] || ((t[Ta] = !0), ps("selectionchange", !1, t));
    }
  }
  function bc(e, t, o, a) {
    switch (Gl(t)) {
      case 1:
        var u = Ul;
        break;
      case 4:
        u = Uu;
        break;
      default:
        u = Vl;
    }
    (o = u.bind(null, t, o, e)),
      (u = void 0),
      !Tl || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (u = !0),
      a
        ? u !== void 0
          ? e.addEventListener(t, o, { capture: !0, passive: u })
          : e.addEventListener(t, o, !0)
        : u !== void 0
        ? e.addEventListener(t, o, { passive: u })
        : e.addEventListener(t, o, !1);
  }
  function hs(e, t, o, a, u) {
    var p = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (;;) {
        if (a === null) return;
        var y = a.tag;
        if (y === 3 || y === 4) {
          var C = a.stateNode.containerInfo;
          if (C === u || (C.nodeType === 8 && C.parentNode === u)) break;
          if (y === 4)
            for (y = a.return; y !== null; ) {
              var T = y.tag;
              if (
                (T === 3 || T === 4) &&
                ((T = y.stateNode.containerInfo),
                T === u || (T.nodeType === 8 && T.parentNode === u))
              )
                return;
              y = y.return;
            }
          for (; C !== null; ) {
            if (((y = Ln(C)), y === null)) return;
            if (((T = y.tag), T === 5 || T === 6)) {
              a = p = y;
              continue e;
            }
            C = C.parentNode;
          }
        }
        a = a.return;
      }
    Tu(function () {
      var G = p,
        ne = Rl(o),
        ie = [];
      e: {
        var re = vc.get(e);
        if (re !== void 0) {
          var ke = Kl,
            $e = e;
          switch (e) {
            case "keypress":
              if (ga(o) === 0) break e;
            case "keydown":
            case "keyup":
              ke = Zl;
              break;
            case "focusin":
              ($e = "focus"), (ke = Ql);
              break;
            case "focusout":
              ($e = "blur"), (ke = Ql);
              break;
            case "beforeblur":
            case "afterblur":
              ke = Ql;
              break;
            case "click":
              if (o.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ke = Gu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ke = md;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ke = Cd;
              break;
            case dc:
            case pc:
            case hc:
              ke = gd;
              break;
            case mc:
              ke = $d;
              break;
            case "scroll":
              ke = pd;
              break;
            case "wheel":
              ke = Ed;
              break;
            case "copy":
            case "cut":
            case "paste":
              ke = Ku;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ke = Qu;
          }
          var _e = (t & 4) !== 0,
            Tt = !_e && e === "scroll",
            W = _e ? (re !== null ? re + "Capture" : null) : re;
          _e = [];
          for (var L = G, B; L !== null; ) {
            B = L;
            var le = B.stateNode;
            if (
              (B.tag === 5 &&
                le !== null &&
                ((B = le), W !== null && ((le = fi(L, W)), le != null && _e.push(Br(L, le, B)))),
              Tt)
            )
              break;
            L = L.return;
          }
          0 < _e.length &&
            ((re = new ke(re, $e, null, o, ne)), ie.push({ event: re, listeners: _e }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((re = e === "mouseover" || e === "pointerover"),
            (ke = e === "mouseout" || e === "pointerout"),
            re && o !== oa && ($e = o.relatedTarget || o.fromElement) && (Ln($e) || $e[Qt]))
          )
            break e;
          if (
            (ke || re) &&
            ((re =
              ne.window === ne
                ? ne
                : (re = ne.ownerDocument)
                ? re.defaultView || re.parentWindow
                : window),
            ke
              ? (($e = o.relatedTarget || o.toElement),
                (ke = G),
                ($e = $e ? Ln($e) : null),
                $e !== null &&
                  ((Tt = Jn($e)), $e !== Tt || ($e.tag !== 5 && $e.tag !== 6)) &&
                  ($e = null))
              : ((ke = null), ($e = G)),
            ke !== $e)
          ) {
            if (
              ((_e = Gu),
              (le = "onMouseLeave"),
              (W = "onMouseEnter"),
              (L = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((_e = Qu), (le = "onPointerLeave"), (W = "onPointerEnter"), (L = "pointer")),
              (Tt = ke == null ? re : Io(ke)),
              (B = $e == null ? re : Io($e)),
              (re = new _e(le, L + "leave", ke, o, ne)),
              (re.target = Tt),
              (re.relatedTarget = B),
              (le = null),
              Ln(ne) === G &&
                ((_e = new _e(W, L + "enter", $e, o, ne)),
                (_e.target = B),
                (_e.relatedTarget = Tt),
                (le = _e)),
              (Tt = le),
              ke && $e)
            )
              t: {
                for (_e = ke, W = $e, L = 0, B = _e; B; B = No(B)) L++;
                for (B = 0, le = W; le; le = No(le)) B++;
                for (; 0 < L - B; ) (_e = No(_e)), L--;
                for (; 0 < B - L; ) (W = No(W)), B--;
                for (; L--; ) {
                  if (_e === W || (W !== null && _e === W.alternate)) break t;
                  (_e = No(_e)), (W = No(W));
                }
                _e = null;
              }
            else _e = null;
            ke !== null && wc(ie, re, ke, _e, !1),
              $e !== null && Tt !== null && wc(ie, Tt, $e, _e, !0);
          }
        }
        e: {
          if (
            ((re = G ? Io(G) : window),
            (ke = re.nodeName && re.nodeName.toLowerCase()),
            ke === "select" || (ke === "input" && re.type === "file"))
          )
            var Pe = Md;
          else if (ka(re))
            if (rs) Pe = zd;
            else {
              Pe = Sa;
              var Ne = is;
            }
          else
            (ke = re.nodeName) &&
              ke.toLowerCase() === "input" &&
              (re.type === "checkbox" || re.type === "radio") &&
              (Pe = as);
          if (Pe && (Pe = Pe(e, G))) {
            ts(ie, Pe, o, ne);
            break e;
          }
          Ne && Ne(e, re, G),
            e === "focusout" &&
              (Ne = re._wrapperState) &&
              Ne.controlled &&
              re.type === "number" &&
              Qn(re, "number", re.value);
        }
        switch (((Ne = G ? Io(G) : window), e)) {
          case "focusin":
            (ka(Ne) || Ne.contentEditable === "true") && ((zo = Ne), (Ea = G), (no = null));
            break;
          case "focusout":
            no = Ea = zo = null;
            break;
          case "mousedown":
            us = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (us = !1), cc(ie, o, ne);
            break;
          case "selectionchange":
            if (Ld) break;
          case "keydown":
          case "keyup":
            cc(ie, o, ne);
        }
        var Le;
        if (Jl)
          e: {
            switch (e) {
              case "compositionstart":
                var Ae = "onCompositionStart";
                break e;
              case "compositionend":
                Ae = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ae = "onCompositionUpdate";
                break e;
            }
            Ae = void 0;
          }
        else
          to
            ? nc(e, o) && (Ae = "onCompositionEnd")
            : e === "keydown" && o.keyCode === 229 && (Ae = "onCompositionStart");
        Ae &&
          (ec &&
            o.locale !== "ko" &&
            (to || Ae !== "onCompositionStart"
              ? Ae === "onCompositionEnd" && to && (Le = Vu())
              : ((pn = ne), (ql = "value" in pn ? pn.value : pn.textContent), (to = !0))),
          (Ne = Oa(G, Ae)),
          0 < Ne.length &&
            ((Ae = new Xu(Ae, e, null, o, ne)),
            ie.push({ event: Ae, listeners: Ne }),
            Le ? (Ae.data = Le) : ((Le = es(o)), Le !== null && (Ae.data = Le)))),
          (Le = _d ? Pd(e, o) : Td(e, o)) &&
            ((G = Oa(G, "onBeforeInput")),
            0 < G.length &&
              ((ne = new Xu("onBeforeInput", "beforeinput", null, o, ne)),
              ie.push({ event: ne, listeners: G }),
              (ne.data = Le)));
      }
      xc(ie, t);
    });
  }
  function Br(e, t, o) {
    return { instance: e, listener: t, currentTarget: o };
  }
  function Oa(e, t) {
    for (var o = t + "Capture", a = []; e !== null; ) {
      var u = e,
        p = u.stateNode;
      u.tag === 5 &&
        p !== null &&
        ((u = p),
        (p = fi(e, o)),
        p != null && a.unshift(Br(e, p, u)),
        (p = fi(e, t)),
        p != null && a.push(Br(e, p, u))),
        (e = e.return);
    }
    return a;
  }
  function No(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function wc(e, t, o, a, u) {
    for (var p = t._reactName, y = []; o !== null && o !== a; ) {
      var C = o,
        T = C.alternate,
        G = C.stateNode;
      if (T !== null && T === a) break;
      C.tag === 5 &&
        G !== null &&
        ((C = G),
        u
          ? ((T = fi(o, p)), T != null && y.unshift(Br(o, T, C)))
          : u || ((T = fi(o, p)), T != null && y.push(Br(o, T, C)))),
        (o = o.return);
    }
    y.length !== 0 && e.push({ event: t, listeners: y });
  }
  var Dd = /\r\n?/g,
    Ad = /\u0000|\uFFFD/g;
  function Ma(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Dd,
        `
`
      )
      .replace(Ad, "");
  }
  function Wt(e, t, o) {
    if (((t = Ma(t)), Ma(e) !== t && o)) throw Error(i(425));
  }
  function $i() {}
  var za = null,
    Lo = null;
  function Na(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var La = typeof setTimeout == "function" ? setTimeout : void 0,
    Fd = typeof clearTimeout == "function" ? clearTimeout : void 0,
    ms = typeof Promise == "function" ? Promise : void 0,
    vs =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof ms < "u"
        ? function (e) {
            return ms.resolve(null).then(e).catch(Wd);
          }
        : La;
  function Wd(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ja(e, t) {
    var o = t,
      a = 0;
    do {
      var u = o.nextSibling;
      if ((e.removeChild(o), u && u.nodeType === 8))
        if (((o = u.data), o === "/$")) {
          if (a === 0) {
            e.removeChild(u), yi(t);
            return;
          }
          a--;
        } else (o !== "$" && o !== "$?" && o !== "$!") || a++;
      o = u;
    } while (o);
    yi(t);
  }
  function hn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function kc(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var o = e.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (t === 0) return e;
          t--;
        } else o === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var jo = Math.random().toString(36).slice(2),
    Ur = "__reactFiber$" + jo,
    io = "__reactProps$" + jo,
    Qt = "__reactContainer$" + jo,
    gs = "__reactEvents$" + jo,
    Bd = "__reactListeners$" + jo,
    Ud = "__reactHandles$" + jo;
  function Ln(e) {
    var t = e[Ur];
    if (t) return t;
    for (var o = e.parentNode; o; ) {
      if ((t = o[Qt] || o[Ur])) {
        if (((o = t.alternate), t.child !== null || (o !== null && o.child !== null)))
          for (e = kc(e); e !== null; ) {
            if ((o = e[Ur])) return o;
            e = kc(e);
          }
        return t;
      }
      (e = o), (o = e.parentNode);
    }
    return null;
  }
  function Vr(e) {
    return (
      (e = e[Ur] || e[Qt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    );
  }
  function Io(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(i(33));
  }
  function Ei(e) {
    return e[io] || null;
  }
  var ys = [],
    Do = -1;
  function jn(e) {
    return { current: e };
  }
  function vt(e) {
    0 > Do || ((e.current = ys[Do]), (ys[Do] = null), Do--);
  }
  function ht(e, t) {
    Do++, (ys[Do] = e.current), (e.current = t);
  }
  var In = {},
    Bt = jn(In),
    Zt = jn(!1),
    ao = In;
  function Ao(e, t) {
    var o = e.type.contextTypes;
    if (!o) return In;
    var a = e.stateNode;
    if (a && a.__reactInternalMemoizedUnmaskedChildContext === t)
      return a.__reactInternalMemoizedMaskedChildContext;
    var u = {},
      p;
    for (p in o) u[p] = t[p];
    return (
      a &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      u
    );
  }
  function Jt(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Ia() {
    vt(Zt), vt(Bt);
  }
  function Sc(e, t, o) {
    if (Bt.current !== In) throw Error(i(168));
    ht(Bt, t), ht(Zt, o);
  }
  function Cc(e, t, o) {
    var a = e.stateNode;
    if (((t = t.childContextTypes), typeof a.getChildContext != "function")) return o;
    a = a.getChildContext();
    for (var u in a) if (!(u in t)) throw Error(i(108, je(e) || "Unknown", u));
    return R({}, o, a);
  }
  function Fo(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || In),
      (ao = Bt.current),
      ht(Bt, e),
      ht(Zt, Zt.current),
      !0
    );
  }
  function $c(e, t, o) {
    var a = e.stateNode;
    if (!a) throw Error(i(169));
    o
      ? ((e = Cc(e, t, ao)),
        (a.__reactInternalMemoizedMergedChildContext = e),
        vt(Zt),
        vt(Bt),
        ht(Bt, e))
      : vt(Zt),
      ht(Zt, o);
  }
  var Pr = null,
    Wo = !1,
    Ri = !1;
  function xs(e) {
    Pr === null ? (Pr = [e]) : Pr.push(e);
  }
  function Ec(e) {
    (Wo = !0), xs(e);
  }
  function Dn() {
    if (!Ri && Pr !== null) {
      Ri = !0;
      var e = 0,
        t = lt;
      try {
        var o = Pr;
        for (lt = 1; e < o.length; e++) {
          var a = o[e];
          do a = a(!0);
          while (a !== null);
        }
        (Pr = null), (Wo = !1);
      } catch (u) {
        throw (Pr !== null && (Pr = Pr.slice(e + 1)), zl(Nl, Dn), u);
      } finally {
        (lt = t), (Ri = !1);
      }
    }
    return null;
  }
  var Bo = [],
    Uo = 0,
    er = null,
    mn = 0,
    vr = [],
    tr = 0,
    lo = null,
    sr = 1,
    vn = "";
  function so(e, t) {
    (Bo[Uo++] = mn), (Bo[Uo++] = er), (er = e), (mn = t);
  }
  function Rc(e, t, o) {
    (vr[tr++] = sr), (vr[tr++] = vn), (vr[tr++] = lo), (lo = e);
    var a = sr;
    e = vn;
    var u = 32 - Rr(a) - 1;
    (a &= ~(1 << u)), (o += 1);
    var p = 32 - Rr(t) + u;
    if (30 < p) {
      var y = u - (u % 5);
      (p = (a & ((1 << y) - 1)).toString(32)),
        (a >>= y),
        (u -= y),
        (sr = (1 << (32 - Rr(t) + u)) | (o << u) | a),
        (vn = p + e);
    } else (sr = (1 << p) | (o << u) | a), (vn = e);
  }
  function bs(e) {
    e.return !== null && (so(e, 1), Rc(e, 1, 0));
  }
  function _i(e) {
    for (; e === er; ) (er = Bo[--Uo]), (Bo[Uo] = null), (mn = Bo[--Uo]), (Bo[Uo] = null);
    for (; e === lo; )
      (lo = vr[--tr]),
        (vr[tr] = null),
        (vn = vr[--tr]),
        (vr[tr] = null),
        (sr = vr[--tr]),
        (vr[tr] = null);
  }
  var yt = null,
    Ct = null,
    rt = !1,
    Tr = null;
  function _c(e, t) {
    var o = Qr(5, null, null, 0);
    (o.elementType = "DELETED"),
      (o.stateNode = t),
      (o.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [o]), (e.flags |= 16)) : t.push(o);
  }
  function Pc(e, t) {
    switch (e.tag) {
      case 5:
        var o = e.type;
        return (
          (t = t.nodeType !== 1 || o.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (yt = e), (Ct = hn(t.firstChild)), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (yt = e), (Ct = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((o = lo !== null ? { id: sr, overflow: vn } : null),
              (e.memoizedState = { dehydrated: t, treeContext: o, retryLane: 1073741824 }),
              (o = Qr(18, null, null, 0)),
              (o.stateNode = t),
              (o.return = e),
              (e.child = o),
              (yt = e),
              (Ct = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function ws(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function ks(e) {
    if (rt) {
      var t = Ct;
      if (t) {
        var o = t;
        if (!Pc(e, t)) {
          if (ws(e)) throw Error(i(418));
          t = hn(o.nextSibling);
          var a = yt;
          t && Pc(e, t) ? _c(a, o) : ((e.flags = (e.flags & -4097) | 2), (rt = !1), (yt = e));
        }
      } else {
        if (ws(e)) throw Error(i(418));
        (e.flags = (e.flags & -4097) | 2), (rt = !1), (yt = e);
      }
    }
  }
  function Tc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    yt = e;
  }
  function Da(e) {
    if (e !== yt) return !1;
    if (!rt) return Tc(e), (rt = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== "head" && t !== "body" && !Na(e.type, e.memoizedProps))),
      t && (t = Ct))
    ) {
      if (ws(e)) throw (Oc(), Error(i(418)));
      for (; t; ) _c(e, t), (t = hn(t.nextSibling));
    }
    if ((Tc(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(i(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var o = e.data;
            if (o === "/$") {
              if (t === 0) {
                Ct = hn(e.nextSibling);
                break e;
              }
              t--;
            } else (o !== "$" && o !== "$!" && o !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        Ct = null;
      }
    } else Ct = yt ? hn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Oc() {
    for (var e = Ct; e; ) e = hn(e.nextSibling);
  }
  function Vo() {
    (Ct = yt = null), (rt = !1);
  }
  function Pi(e) {
    Tr === null ? (Tr = [e]) : Tr.push(e);
  }
  var Vd = V.ReactCurrentBatchConfig;
  function Or(e, t) {
    if (e && e.defaultProps) {
      (t = R({}, t)), (e = e.defaultProps);
      for (var o in e) t[o] === void 0 && (t[o] = e[o]);
      return t;
    }
    return t;
  }
  var Aa = jn(null),
    Fa = null,
    Ho = null,
    Wa = null;
  function Ss() {
    Wa = Ho = Fa = null;
  }
  function Cs(e) {
    var t = Aa.current;
    vt(Aa), (e._currentValue = t);
  }
  function $s(e, t, o) {
    for (; e !== null; ) {
      var a = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        e === o)
      )
        break;
      e = e.return;
    }
  }
  function Go(e, t) {
    (Fa = e),
      (Wa = Ho = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (xr = !0), (e.firstContext = null));
  }
  function gr(e) {
    var t = e._currentValue;
    if (Wa !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Ho === null)) {
        if (Fa === null) throw Error(i(308));
        (Ho = e), (Fa.dependencies = { lanes: 0, firstContext: e });
      } else Ho = Ho.next = e;
    return t;
  }
  var uo = null;
  function Ti(e) {
    uo === null ? (uo = [e]) : uo.push(e);
  }
  function Es(e, t, o, a) {
    var u = t.interleaved;
    return (
      u === null ? ((o.next = o), Ti(t)) : ((o.next = u.next), (u.next = o)),
      (t.interleaved = o),
      gn(e, a)
    );
  }
  function gn(e, t) {
    e.lanes |= t;
    var o = e.alternate;
    for (o !== null && (o.lanes |= t), o = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (o = e.alternate),
        o !== null && (o.childLanes |= t),
        (o = e),
        (e = e.return);
    return o.tag === 3 ? o.stateNode : null;
  }
  var An = !1;
  function Rs(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function _s(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function Hr(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function yn(e, t, o) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (ot & 2) !== 0)) {
      var u = a.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)), (a.pending = t), gn(e, o)
      );
    }
    return (
      (u = a.interleaved),
      u === null ? ((t.next = t), Ti(a)) : ((t.next = u.next), (u.next = t)),
      (a.interleaved = t),
      gn(e, o)
    );
  }
  function Oi(e, t, o) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (o & 4194240) !== 0))) {
      var a = t.lanes;
      (a &= e.pendingLanes), (o |= a), (t.lanes = o), Il(e, o);
    }
  }
  function Mc(e, t) {
    var o = e.updateQueue,
      a = e.alternate;
    if (a !== null && ((a = a.updateQueue), o === a)) {
      var u = null,
        p = null;
      if (((o = o.firstBaseUpdate), o !== null)) {
        do {
          var y = {
            eventTime: o.eventTime,
            lane: o.lane,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null,
          };
          p === null ? (u = p = y) : (p = p.next = y), (o = o.next);
        } while (o !== null);
        p === null ? (u = p = t) : (p = p.next = t);
      } else u = p = t;
      (o = {
        baseState: a.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: p,
        shared: a.shared,
        effects: a.effects,
      }),
        (e.updateQueue = o);
      return;
    }
    (e = o.lastBaseUpdate),
      e === null ? (o.firstBaseUpdate = t) : (e.next = t),
      (o.lastBaseUpdate = t);
  }
  function Mi(e, t, o, a) {
    var u = e.updateQueue;
    An = !1;
    var p = u.firstBaseUpdate,
      y = u.lastBaseUpdate,
      C = u.shared.pending;
    if (C !== null) {
      u.shared.pending = null;
      var T = C,
        G = T.next;
      (T.next = null), y === null ? (p = G) : (y.next = G), (y = T);
      var ne = e.alternate;
      ne !== null &&
        ((ne = ne.updateQueue),
        (C = ne.lastBaseUpdate),
        C !== y && (C === null ? (ne.firstBaseUpdate = G) : (C.next = G), (ne.lastBaseUpdate = T)));
    }
    if (p !== null) {
      var ie = u.baseState;
      (y = 0), (ne = G = T = null), (C = p);
      do {
        var re = C.lane,
          ke = C.eventTime;
        if ((a & re) === re) {
          ne !== null &&
            (ne = ne.next =
              {
                eventTime: ke,
                lane: 0,
                tag: C.tag,
                payload: C.payload,
                callback: C.callback,
                next: null,
              });
          e: {
            var $e = e,
              _e = C;
            switch (((re = t), (ke = o), _e.tag)) {
              case 1:
                if ((($e = _e.payload), typeof $e == "function")) {
                  ie = $e.call(ke, ie, re);
                  break e;
                }
                ie = $e;
                break e;
              case 3:
                $e.flags = ($e.flags & -65537) | 128;
              case 0:
                if (
                  (($e = _e.payload),
                  (re = typeof $e == "function" ? $e.call(ke, ie, re) : $e),
                  re == null)
                )
                  break e;
                ie = R({}, ie, re);
                break e;
              case 2:
                An = !0;
            }
          }
          C.callback !== null &&
            C.lane !== 0 &&
            ((e.flags |= 64), (re = u.effects), re === null ? (u.effects = [C]) : re.push(C));
        } else
          (ke = {
            eventTime: ke,
            lane: re,
            tag: C.tag,
            payload: C.payload,
            callback: C.callback,
            next: null,
          }),
            ne === null ? ((G = ne = ke), (T = ie)) : (ne = ne.next = ke),
            (y |= re);
        if (((C = C.next), C === null)) {
          if (((C = u.shared.pending), C === null)) break;
          (re = C),
            (C = re.next),
            (re.next = null),
            (u.lastBaseUpdate = re),
            (u.shared.pending = null);
        }
      } while (!0);
      if (
        (ne === null && (T = ie),
        (u.baseState = T),
        (u.firstBaseUpdate = G),
        (u.lastBaseUpdate = ne),
        (t = u.shared.interleaved),
        t !== null)
      ) {
        u = t;
        do (y |= u.lane), (u = u.next);
        while (u !== t);
      } else p === null && (u.shared.lanes = 0);
      (Ai |= y), (e.lanes = y), (e.memoizedState = ie);
    }
  }
  function Gr(e, t, o) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var a = e[t],
          u = a.callback;
        if (u !== null) {
          if (((a.callback = null), (a = o), typeof u != "function")) throw Error(i(191, u));
          u.call(a);
        }
      }
  }
  var wt = new r.Component().refs;
  function Ps(e, t, o, a) {
    (t = e.memoizedState),
      (o = o(a, t)),
      (o = o == null ? t : R({}, t, o)),
      (e.memoizedState = o),
      e.lanes === 0 && (e.updateQueue.baseState = o);
  }
  var Ba = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Jn(e) === e : !1;
    },
    enqueueSetState: function (e, t, o) {
      e = e._reactInternals;
      var a = cr(),
        u = Jo(e),
        p = Hr(a, u);
      (p.payload = t),
        o != null && (p.callback = o),
        (t = yn(e, p, u)),
        t !== null && (Sn(t, e, u, a), Oi(t, e, u));
    },
    enqueueReplaceState: function (e, t, o) {
      e = e._reactInternals;
      var a = cr(),
        u = Jo(e),
        p = Hr(a, u);
      (p.tag = 1),
        (p.payload = t),
        o != null && (p.callback = o),
        (t = yn(e, p, u)),
        t !== null && (Sn(t, e, u, a), Oi(t, e, u));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var o = cr(),
        a = Jo(e),
        u = Hr(o, a);
      (u.tag = 2),
        t != null && (u.callback = t),
        (t = yn(e, u, a)),
        t !== null && (Sn(t, e, a, o), Oi(t, e, a));
    },
  };
  function Ts(e, t, o, a, u, p, y) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(a, p, y)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Si(o, a) || !Si(u, p)
        : !0
    );
  }
  function Os(e, t, o) {
    var a = !1,
      u = In,
      p = t.contextType;
    return (
      typeof p == "object" && p !== null
        ? (p = gr(p))
        : ((u = Jt(t) ? ao : Bt.current),
          (a = t.contextTypes),
          (p = (a = a != null) ? Ao(e, u) : In)),
      (t = new t(o, p)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Ba),
      (e.stateNode = t),
      (t._reactInternals = e),
      a &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = u),
        (e.__reactInternalMemoizedMaskedChildContext = p)),
      t
    );
  }
  function zi(e, t, o, a) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(o, a),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(o, a),
      t.state !== e && Ba.enqueueReplaceState(t, t.state, null);
  }
  function Ua(e, t, o, a) {
    var u = e.stateNode;
    (u.props = o), (u.state = e.memoizedState), (u.refs = wt), Rs(e);
    var p = t.contextType;
    typeof p == "object" && p !== null
      ? (u.context = gr(p))
      : ((p = Jt(t) ? ao : Bt.current), (u.context = Ao(e, p))),
      (u.state = e.memoizedState),
      (p = t.getDerivedStateFromProps),
      typeof p == "function" && (Ps(e, t, p, o), (u.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function" ||
        (typeof u.UNSAFE_componentWillMount != "function" &&
          typeof u.componentWillMount != "function") ||
        ((t = u.state),
        typeof u.componentWillMount == "function" && u.componentWillMount(),
        typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(),
        t !== u.state && Ba.enqueueReplaceState(u, u.state, null),
        Mi(e, o, u, a),
        (u.state = e.memoizedState)),
      typeof u.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Ni(e, t, o) {
    if (((e = o.ref), e !== null && typeof e != "function" && typeof e != "object")) {
      if (o._owner) {
        if (((o = o._owner), o)) {
          if (o.tag !== 1) throw Error(i(309));
          var a = o.stateNode;
        }
        if (!a) throw Error(i(147, e));
        var u = a,
          p = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === p
          ? t.ref
          : ((t = function (y) {
              var C = u.refs;
              C === wt && (C = u.refs = {}), y === null ? delete C[p] : (C[p] = y);
            }),
            (t._stringRef = p),
            t);
      }
      if (typeof e != "string") throw Error(i(284));
      if (!o._owner) throw Error(i(290, e));
    }
    return e;
  }
  function Li(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)
      ))
    );
  }
  function zc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Ms(e) {
    function t(W, L) {
      if (e) {
        var B = W.deletions;
        B === null ? ((W.deletions = [L]), (W.flags |= 16)) : B.push(L);
      }
    }
    function o(W, L) {
      if (!e) return null;
      for (; L !== null; ) t(W, L), (L = L.sibling);
      return null;
    }
    function a(W, L) {
      for (W = new Map(); L !== null; )
        L.key !== null ? W.set(L.key, L) : W.set(L.index, L), (L = L.sibling);
      return W;
    }
    function u(W, L) {
      return (W = ti(W, L)), (W.index = 0), (W.sibling = null), W;
    }
    function p(W, L, B) {
      return (
        (W.index = B),
        e
          ? ((B = W.alternate),
            B !== null ? ((B = B.index), B < L ? ((W.flags |= 2), L) : B) : ((W.flags |= 2), L))
          : ((W.flags |= 1048576), L)
      );
    }
    function y(W) {
      return e && W.alternate === null && (W.flags |= 2), W;
    }
    function C(W, L, B, le) {
      return L === null || L.tag !== 6
        ? ((L = mp(B, W.mode, le)), (L.return = W), L)
        : ((L = u(L, B)), (L.return = W), L);
    }
    function T(W, L, B, le) {
      var Pe = B.type;
      return Pe === Q
        ? ne(W, L, B.props.children, le, B.key)
        : L !== null &&
          (L.elementType === Pe ||
            (typeof Pe == "object" && Pe !== null && Pe.$$typeof === ce && zc(Pe) === L.type))
        ? ((le = u(L, B.props)), (le.ref = Ni(W, L, B)), (le.return = W), le)
        : ((le = Kc(B.type, B.key, B.props, null, W.mode, le)),
          (le.ref = Ni(W, L, B)),
          (le.return = W),
          le);
    }
    function G(W, L, B, le) {
      return L === null ||
        L.tag !== 4 ||
        L.stateNode.containerInfo !== B.containerInfo ||
        L.stateNode.implementation !== B.implementation
        ? ((L = vp(B, W.mode, le)), (L.return = W), L)
        : ((L = u(L, B.children || [])), (L.return = W), L);
    }
    function ne(W, L, B, le, Pe) {
      return L === null || L.tag !== 7
        ? ((L = Ui(B, W.mode, le, Pe)), (L.return = W), L)
        : ((L = u(L, B)), (L.return = W), L);
    }
    function ie(W, L, B) {
      if ((typeof L == "string" && L !== "") || typeof L == "number")
        return (L = mp("" + L, W.mode, B)), (L.return = W), L;
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case D:
            return (
              (B = Kc(L.type, L.key, L.props, null, W.mode, B)),
              (B.ref = Ni(W, null, L)),
              (B.return = W),
              B
            );
          case A:
            return (L = vp(L, W.mode, B)), (L.return = W), L;
          case ce:
            var le = L._init;
            return ie(W, le(L._payload), B);
        }
        if (Mt(L) || de(L)) return (L = Ui(L, W.mode, B, null)), (L.return = W), L;
        Li(W, L);
      }
      return null;
    }
    function re(W, L, B, le) {
      var Pe = L !== null ? L.key : null;
      if ((typeof B == "string" && B !== "") || typeof B == "number")
        return Pe !== null ? null : C(W, L, "" + B, le);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case D:
            return B.key === Pe ? T(W, L, B, le) : null;
          case A:
            return B.key === Pe ? G(W, L, B, le) : null;
          case ce:
            return (Pe = B._init), re(W, L, Pe(B._payload), le);
        }
        if (Mt(B) || de(B)) return Pe !== null ? null : ne(W, L, B, le, null);
        Li(W, B);
      }
      return null;
    }
    function ke(W, L, B, le, Pe) {
      if ((typeof le == "string" && le !== "") || typeof le == "number")
        return (W = W.get(B) || null), C(L, W, "" + le, Pe);
      if (typeof le == "object" && le !== null) {
        switch (le.$$typeof) {
          case D:
            return (W = W.get(le.key === null ? B : le.key) || null), T(L, W, le, Pe);
          case A:
            return (W = W.get(le.key === null ? B : le.key) || null), G(L, W, le, Pe);
          case ce:
            var Ne = le._init;
            return ke(W, L, B, Ne(le._payload), Pe);
        }
        if (Mt(le) || de(le)) return (W = W.get(B) || null), ne(L, W, le, Pe, null);
        Li(L, le);
      }
      return null;
    }
    function $e(W, L, B, le) {
      for (
        var Pe = null, Ne = null, Le = L, Ae = (L = 0), Vt = null;
        Le !== null && Ae < B.length;
        Ae++
      ) {
        Le.index > Ae ? ((Vt = Le), (Le = null)) : (Vt = Le.sibling);
        var at = re(W, Le, B[Ae], le);
        if (at === null) {
          Le === null && (Le = Vt);
          break;
        }
        e && Le && at.alternate === null && t(W, Le),
          (L = p(at, L, Ae)),
          Ne === null ? (Pe = at) : (Ne.sibling = at),
          (Ne = at),
          (Le = Vt);
      }
      if (Ae === B.length) return o(W, Le), rt && so(W, Ae), Pe;
      if (Le === null) {
        for (; Ae < B.length; Ae++)
          (Le = ie(W, B[Ae], le)),
            Le !== null &&
              ((L = p(Le, L, Ae)), Ne === null ? (Pe = Le) : (Ne.sibling = Le), (Ne = Le));
        return rt && so(W, Ae), Pe;
      }
      for (Le = a(W, Le); Ae < B.length; Ae++)
        (Vt = ke(Le, W, Ae, B[Ae], le)),
          Vt !== null &&
            (e && Vt.alternate !== null && Le.delete(Vt.key === null ? Ae : Vt.key),
            (L = p(Vt, L, Ae)),
            Ne === null ? (Pe = Vt) : (Ne.sibling = Vt),
            (Ne = Vt));
      return (
        e &&
          Le.forEach(function (ri) {
            return t(W, ri);
          }),
        rt && so(W, Ae),
        Pe
      );
    }
    function _e(W, L, B, le) {
      var Pe = de(B);
      if (typeof Pe != "function") throw Error(i(150));
      if (((B = Pe.call(B)), B == null)) throw Error(i(151));
      for (
        var Ne = (Pe = null), Le = L, Ae = (L = 0), Vt = null, at = B.next();
        Le !== null && !at.done;
        Ae++, at = B.next()
      ) {
        Le.index > Ae ? ((Vt = Le), (Le = null)) : (Vt = Le.sibling);
        var ri = re(W, Le, at.value, le);
        if (ri === null) {
          Le === null && (Le = Vt);
          break;
        }
        e && Le && ri.alternate === null && t(W, Le),
          (L = p(ri, L, Ae)),
          Ne === null ? (Pe = ri) : (Ne.sibling = ri),
          (Ne = ri),
          (Le = Vt);
      }
      if (at.done) return o(W, Le), rt && so(W, Ae), Pe;
      if (Le === null) {
        for (; !at.done; Ae++, at = B.next())
          (at = ie(W, at.value, le)),
            at !== null &&
              ((L = p(at, L, Ae)), Ne === null ? (Pe = at) : (Ne.sibling = at), (Ne = at));
        return rt && so(W, Ae), Pe;
      }
      for (Le = a(W, Le); !at.done; Ae++, at = B.next())
        (at = ke(Le, W, Ae, at.value, le)),
          at !== null &&
            (e && at.alternate !== null && Le.delete(at.key === null ? Ae : at.key),
            (L = p(at, L, Ae)),
            Ne === null ? (Pe = at) : (Ne.sibling = at),
            (Ne = at));
      return (
        e &&
          Le.forEach(function (ky) {
            return t(W, ky);
          }),
        rt && so(W, Ae),
        Pe
      );
    }
    function Tt(W, L, B, le) {
      if (
        (typeof B == "object" &&
          B !== null &&
          B.type === Q &&
          B.key === null &&
          (B = B.props.children),
        typeof B == "object" && B !== null)
      ) {
        switch (B.$$typeof) {
          case D:
            e: {
              for (var Pe = B.key, Ne = L; Ne !== null; ) {
                if (Ne.key === Pe) {
                  if (((Pe = B.type), Pe === Q)) {
                    if (Ne.tag === 7) {
                      o(W, Ne.sibling), (L = u(Ne, B.props.children)), (L.return = W), (W = L);
                      break e;
                    }
                  } else if (
                    Ne.elementType === Pe ||
                    (typeof Pe == "object" &&
                      Pe !== null &&
                      Pe.$$typeof === ce &&
                      zc(Pe) === Ne.type)
                  ) {
                    o(W, Ne.sibling),
                      (L = u(Ne, B.props)),
                      (L.ref = Ni(W, Ne, B)),
                      (L.return = W),
                      (W = L);
                    break e;
                  }
                  o(W, Ne);
                  break;
                } else t(W, Ne);
                Ne = Ne.sibling;
              }
              B.type === Q
                ? ((L = Ui(B.props.children, W.mode, le, B.key)), (L.return = W), (W = L))
                : ((le = Kc(B.type, B.key, B.props, null, W.mode, le)),
                  (le.ref = Ni(W, L, B)),
                  (le.return = W),
                  (W = le));
            }
            return y(W);
          case A:
            e: {
              for (Ne = B.key; L !== null; ) {
                if (L.key === Ne)
                  if (
                    L.tag === 4 &&
                    L.stateNode.containerInfo === B.containerInfo &&
                    L.stateNode.implementation === B.implementation
                  ) {
                    o(W, L.sibling), (L = u(L, B.children || [])), (L.return = W), (W = L);
                    break e;
                  } else {
                    o(W, L);
                    break;
                  }
                else t(W, L);
                L = L.sibling;
              }
              (L = vp(B, W.mode, le)), (L.return = W), (W = L);
            }
            return y(W);
          case ce:
            return (Ne = B._init), Tt(W, L, Ne(B._payload), le);
        }
        if (Mt(B)) return $e(W, L, B, le);
        if (de(B)) return _e(W, L, B, le);
        Li(W, B);
      }
      return (typeof B == "string" && B !== "") || typeof B == "number"
        ? ((B = "" + B),
          L !== null && L.tag === 6
            ? (o(W, L.sibling), (L = u(L, B)), (L.return = W), (W = L))
            : (o(W, L), (L = mp(B, W.mode, le)), (L.return = W), (W = L)),
          y(W))
        : o(W, L);
    }
    return Tt;
  }
  var qo = Ms(!0),
    Nc = Ms(!1),
    ji = {},
    Mr = jn(ji),
    Ko = jn(ji),
    Ii = jn(ji);
  function qr(e) {
    if (e === ji) throw Error(i(174));
    return e;
  }
  function Di(e, t) {
    switch ((ht(Ii, t), ht(Ko, e), ht(Mr, ji), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Fr(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Fr(t, e));
    }
    vt(Mr), ht(Mr, t);
  }
  function co() {
    vt(Mr), vt(Ko), vt(Ii);
  }
  function zs(e) {
    qr(Ii.current);
    var t = qr(Mr.current),
      o = Fr(t, e.type);
    t !== o && (ht(Ko, e), ht(Mr, o));
  }
  function Ns(e) {
    Ko.current === e && (vt(Mr), vt(Ko));
  }
  var Be = jn(0);
  function Va(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var o = t.memoizedState;
        if (o !== null && ((o = o.dehydrated), o === null || o.data === "$?" || o.data === "$!"))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var d = [];
  function h() {
    for (var e = 0; e < d.length; e++) d[e]._workInProgressVersionPrimary = null;
    d.length = 0;
  }
  var g = V.ReactCurrentDispatcher,
    S = V.ReactCurrentBatchConfig,
    _ = 0,
    P = null,
    $ = null,
    I = null,
    F = !1,
    Z = !1,
    te = 0,
    ge = 0;
  function ee() {
    throw Error(i(321));
  }
  function Se(e, t) {
    if (t === null) return !1;
    for (var o = 0; o < t.length && o < e.length; o++) if (!lr(e[o], t[o])) return !1;
    return !0;
  }
  function we(e, t, o, a, u, p) {
    if (
      ((_ = p),
      (P = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (g.current = e === null || e.memoizedState === null ? Kg : Xg),
      (e = o(a, u)),
      Z)
    ) {
      p = 0;
      do {
        if (((Z = !1), (te = 0), 25 <= p)) throw Error(i(301));
        (p += 1), (I = $ = null), (t.updateQueue = null), (g.current = Yg), (e = o(a, u));
      } while (Z);
    }
    if (
      ((g.current = Lc),
      (t = $ !== null && $.next !== null),
      (_ = 0),
      (I = $ = P = null),
      (F = !1),
      t)
    )
      throw Error(i(300));
    return e;
  }
  function We() {
    var e = te !== 0;
    return (te = 0), e;
  }
  function Ie() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return I === null ? (P.memoizedState = I = e) : (I = I.next = e), I;
  }
  function De() {
    if ($ === null) {
      var e = P.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = $.next;
    var t = I === null ? P.memoizedState : I.next;
    if (t !== null) (I = t), ($ = e);
    else {
      if (e === null) throw Error(i(310));
      ($ = e),
        (e = {
          memoizedState: $.memoizedState,
          baseState: $.baseState,
          baseQueue: $.baseQueue,
          queue: $.queue,
          next: null,
        }),
        I === null ? (P.memoizedState = I = e) : (I = I.next = e);
    }
    return I;
  }
  function Ye(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Pt(e) {
    var t = De(),
      o = t.queue;
    if (o === null) throw Error(i(311));
    o.lastRenderedReducer = e;
    var a = $,
      u = a.baseQueue,
      p = o.pending;
    if (p !== null) {
      if (u !== null) {
        var y = u.next;
        (u.next = p.next), (p.next = y);
      }
      (a.baseQueue = u = p), (o.pending = null);
    }
    if (u !== null) {
      (p = u.next), (a = a.baseState);
      var C = (y = null),
        T = null,
        G = p;
      do {
        var ne = G.lane;
        if ((_ & ne) === ne)
          T !== null &&
            (T = T.next =
              {
                lane: 0,
                action: G.action,
                hasEagerState: G.hasEagerState,
                eagerState: G.eagerState,
                next: null,
              }),
            (a = G.hasEagerState ? G.eagerState : e(a, G.action));
        else {
          var ie = {
            lane: ne,
            action: G.action,
            hasEagerState: G.hasEagerState,
            eagerState: G.eagerState,
            next: null,
          };
          T === null ? ((C = T = ie), (y = a)) : (T = T.next = ie), (P.lanes |= ne), (Ai |= ne);
        }
        G = G.next;
      } while (G !== null && G !== p);
      T === null ? (y = a) : (T.next = C),
        lr(a, t.memoizedState) || (xr = !0),
        (t.memoizedState = a),
        (t.baseState = y),
        (t.baseQueue = T),
        (o.lastRenderedState = a);
    }
    if (((e = o.interleaved), e !== null)) {
      u = e;
      do (p = u.lane), (P.lanes |= p), (Ai |= p), (u = u.next);
      while (u !== e);
    } else u === null && (o.lanes = 0);
    return [t.memoizedState, o.dispatch];
  }
  function $t(e) {
    var t = De(),
      o = t.queue;
    if (o === null) throw Error(i(311));
    o.lastRenderedReducer = e;
    var a = o.dispatch,
      u = o.pending,
      p = t.memoizedState;
    if (u !== null) {
      o.pending = null;
      var y = (u = u.next);
      do (p = e(p, y.action)), (y = y.next);
      while (y !== u);
      lr(p, t.memoizedState) || (xr = !0),
        (t.memoizedState = p),
        t.baseQueue === null && (t.baseState = p),
        (o.lastRenderedState = p);
    }
    return [p, a];
  }
  function Gt() {}
  function Xe(e, t) {
    var o = P,
      a = De(),
      u = t(),
      p = !lr(a.memoizedState, u);
    if (
      (p && ((a.memoizedState = u), (xr = !0)),
      (a = a.queue),
      Kr(Ge.bind(null, o, a, e), [e]),
      a.getSnapshot !== t || p || (I !== null && I.memoizedState.tag & 1))
    ) {
      if (((o.flags |= 2048), qe(9, ze.bind(null, o, a, u, t), void 0, null), Ut === null))
        throw Error(i(349));
      (_ & 30) !== 0 || oe(o, t, u);
    }
    return u;
  }
  function oe(e, t, o) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: o }),
      (t = P.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (P.updateQueue = t), (t.stores = [e]))
        : ((o = t.stores), o === null ? (t.stores = [e]) : o.push(e));
  }
  function ze(e, t, o, a) {
    (t.value = o), (t.getSnapshot = a), Ue(t) && zt(e);
  }
  function Ge(e, t, o) {
    return o(function () {
      Ue(t) && zt(e);
    });
  }
  function Ue(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var o = t();
      return !lr(e, o);
    } catch {
      return !0;
    }
  }
  function zt(e) {
    var t = gn(e, 1);
    t !== null && Sn(t, e, 1, -1);
  }
  function dt(e) {
    var t = Ie();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ye,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = qg.bind(null, P, e)),
      [t.memoizedState, e]
    );
  }
  function qe(e, t, o, a) {
    return (
      (e = { tag: e, create: t, destroy: o, deps: a, next: null }),
      (t = P.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (P.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((o = t.lastEffect),
          o === null
            ? (t.lastEffect = e.next = e)
            : ((a = o.next), (o.next = e), (e.next = a), (t.lastEffect = e))),
      e
    );
  }
  function nt() {
    return De().memoizedState;
  }
  function Ze(e, t, o, a) {
    var u = Ie();
    (P.flags |= e), (u.memoizedState = qe(1 | t, o, void 0, a === void 0 ? null : a));
  }
  function Je(e, t, o, a) {
    var u = De();
    a = a === void 0 ? null : a;
    var p = void 0;
    if ($ !== null) {
      var y = $.memoizedState;
      if (((p = y.destroy), a !== null && Se(a, y.deps))) {
        u.memoizedState = qe(t, o, p, a);
        return;
      }
    }
    (P.flags |= e), (u.memoizedState = qe(1 | t, o, p, a));
  }
  function yr(e, t) {
    return Ze(8390656, 8, e, t);
  }
  function Kr(e, t) {
    return Je(2048, 8, e, t);
  }
  function xn(e, t) {
    return Je(4, 2, e, t);
  }
  function fo(e, t) {
    return Je(4, 4, e, t);
  }
  function po(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Xr(e, t, o) {
    return (o = o != null ? o.concat([e]) : null), Je(4, 4, po.bind(null, t, e), o);
  }
  function bn() {}
  function Xo(e, t) {
    var o = De();
    t = t === void 0 ? null : t;
    var a = o.memoizedState;
    return a !== null && t !== null && Se(t, a[1]) ? a[0] : ((o.memoizedState = [e, t]), e);
  }
  function Fn(e, t) {
    var o = De();
    t = t === void 0 ? null : t;
    var a = o.memoizedState;
    return a !== null && t !== null && Se(t, a[1])
      ? a[0]
      : ((e = e()), (o.memoizedState = [e, t]), e);
  }
  function Ha(e, t, o) {
    return (_ & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (xr = !0)), (e.memoizedState = o))
      : (lr(o, t) || ((o = jl()), (P.lanes |= o), (Ai |= o), (e.baseState = !0)), t);
  }
  function Ls(e, t) {
    var o = lt;
    (lt = o !== 0 && 4 > o ? o : 4), e(!0);
    var a = S.transition;
    S.transition = {};
    try {
      e(!1), t();
    } finally {
      (lt = o), (S.transition = a);
    }
  }
  function Hh() {
    return De().memoizedState;
  }
  function Gg(e, t, o) {
    var a = Jo(e);
    if (((o = { lane: a, action: o, hasEagerState: !1, eagerState: null, next: null }), Gh(e)))
      qh(t, o);
    else if (((o = Es(e, t, o, a)), o !== null)) {
      var u = cr();
      Sn(o, e, a, u), Kh(o, t, a);
    }
  }
  function qg(e, t, o) {
    var a = Jo(e),
      u = { lane: a, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (Gh(e)) qh(t, u);
    else {
      var p = e.alternate;
      if (
        e.lanes === 0 &&
        (p === null || p.lanes === 0) &&
        ((p = t.lastRenderedReducer), p !== null)
      )
        try {
          var y = t.lastRenderedState,
            C = p(y, o);
          if (((u.hasEagerState = !0), (u.eagerState = C), lr(C, y))) {
            var T = t.interleaved;
            T === null ? ((u.next = u), Ti(t)) : ((u.next = T.next), (T.next = u)),
              (t.interleaved = u);
            return;
          }
        } catch {}
      (o = Es(e, t, u, a)), o !== null && ((u = cr()), Sn(o, e, a, u), Kh(o, t, a));
    }
  }
  function Gh(e) {
    var t = e.alternate;
    return e === P || (t !== null && t === P);
  }
  function qh(e, t) {
    Z = F = !0;
    var o = e.pending;
    o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)), (e.pending = t);
  }
  function Kh(e, t, o) {
    if ((o & 4194240) !== 0) {
      var a = t.lanes;
      (a &= e.pendingLanes), (o |= a), (t.lanes = o), Il(e, o);
    }
  }
  var Lc = {
      readContext: gr,
      useCallback: ee,
      useContext: ee,
      useEffect: ee,
      useImperativeHandle: ee,
      useInsertionEffect: ee,
      useLayoutEffect: ee,
      useMemo: ee,
      useReducer: ee,
      useRef: ee,
      useState: ee,
      useDebugValue: ee,
      useDeferredValue: ee,
      useTransition: ee,
      useMutableSource: ee,
      useSyncExternalStore: ee,
      useId: ee,
      unstable_isNewReconciler: !1,
    },
    Kg = {
      readContext: gr,
      useCallback: function (e, t) {
        return (Ie().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: gr,
      useEffect: yr,
      useImperativeHandle: function (e, t, o) {
        return (o = o != null ? o.concat([e]) : null), Ze(4194308, 4, po.bind(null, t, e), o);
      },
      useLayoutEffect: function (e, t) {
        return Ze(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Ze(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var o = Ie();
        return (t = t === void 0 ? null : t), (e = e()), (o.memoizedState = [e, t]), e;
      },
      useReducer: function (e, t, o) {
        var a = Ie();
        return (
          (t = o !== void 0 ? o(t) : t),
          (a.memoizedState = a.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (a.queue = e),
          (e = e.dispatch = Gg.bind(null, P, e)),
          [a.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Ie();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: dt,
      useDebugValue: bn,
      useDeferredValue: function (e) {
        return (Ie().memoizedState = e);
      },
      useTransition: function () {
        var e = dt(!1),
          t = e[0];
        return (e = Ls.bind(null, e[1])), (Ie().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, o) {
        var a = P,
          u = Ie();
        if (rt) {
          if (o === void 0) throw Error(i(407));
          o = o();
        } else {
          if (((o = t()), Ut === null)) throw Error(i(349));
          (_ & 30) !== 0 || oe(a, t, o);
        }
        u.memoizedState = o;
        var p = { value: o, getSnapshot: t };
        return (
          (u.queue = p),
          yr(Ge.bind(null, a, p, e), [e]),
          (a.flags |= 2048),
          qe(9, ze.bind(null, a, p, o, t), void 0, null),
          o
        );
      },
      useId: function () {
        var e = Ie(),
          t = Ut.identifierPrefix;
        if (rt) {
          var o = vn,
            a = sr;
          (o = (a & ~(1 << (32 - Rr(a) - 1))).toString(32) + o),
            (t = ":" + t + "R" + o),
            (o = te++),
            0 < o && (t += "H" + o.toString(32)),
            (t += ":");
        } else (o = ge++), (t = ":" + t + "r" + o.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Xg = {
      readContext: gr,
      useCallback: Xo,
      useContext: gr,
      useEffect: Kr,
      useImperativeHandle: Xr,
      useInsertionEffect: xn,
      useLayoutEffect: fo,
      useMemo: Fn,
      useReducer: Pt,
      useRef: nt,
      useState: function () {
        return Pt(Ye);
      },
      useDebugValue: bn,
      useDeferredValue: function (e) {
        var t = De();
        return Ha(t, $.memoizedState, e);
      },
      useTransition: function () {
        var e = Pt(Ye)[0],
          t = De().memoizedState;
        return [e, t];
      },
      useMutableSource: Gt,
      useSyncExternalStore: Xe,
      useId: Hh,
      unstable_isNewReconciler: !1,
    },
    Yg = {
      readContext: gr,
      useCallback: Xo,
      useContext: gr,
      useEffect: Kr,
      useImperativeHandle: Xr,
      useInsertionEffect: xn,
      useLayoutEffect: fo,
      useMemo: Fn,
      useReducer: $t,
      useRef: nt,
      useState: function () {
        return $t(Ye);
      },
      useDebugValue: bn,
      useDeferredValue: function (e) {
        var t = De();
        return $ === null ? (t.memoizedState = e) : Ha(t, $.memoizedState, e);
      },
      useTransition: function () {
        var e = $t(Ye)[0],
          t = De().memoizedState;
        return [e, t];
      },
      useMutableSource: Gt,
      useSyncExternalStore: Xe,
      useId: Hh,
      unstable_isNewReconciler: !1,
    };
  function Ga(e, t) {
    try {
      var o = "",
        a = t;
      do (o += Oe(a)), (a = a.return);
      while (a);
      var u = o;
    } catch (p) {
      u =
        `
Error generating stack: ` +
        p.message +
        `
` +
        p.stack;
    }
    return { value: e, source: t, stack: u, digest: null };
  }
  function Hd(e, t, o) {
    return { value: e, source: null, stack: o ?? null, digest: t ?? null };
  }
  function Gd(e, t) {
    try {
      console.error(t.value);
    } catch (o) {
      setTimeout(function () {
        throw o;
      });
    }
  }
  var Qg = typeof WeakMap == "function" ? WeakMap : Map;
  function Xh(e, t, o) {
    (o = Hr(-1, o)), (o.tag = 3), (o.payload = { element: null });
    var a = t.value;
    return (
      (o.callback = function () {
        Bc || ((Bc = !0), (lp = a)), Gd(e, t);
      }),
      o
    );
  }
  function Yh(e, t, o) {
    (o = Hr(-1, o)), (o.tag = 3);
    var a = e.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var u = t.value;
      (o.payload = function () {
        return a(u);
      }),
        (o.callback = function () {
          Gd(e, t);
        });
    }
    var p = e.stateNode;
    return (
      p !== null &&
        typeof p.componentDidCatch == "function" &&
        (o.callback = function () {
          Gd(e, t), typeof a != "function" && (Qo === null ? (Qo = new Set([this])) : Qo.add(this));
          var y = t.stack;
          this.componentDidCatch(t.value, { componentStack: y !== null ? y : "" });
        }),
      o
    );
  }
  function Qh(e, t, o) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Qg();
      var u = new Set();
      a.set(t, u);
    } else (u = a.get(t)), u === void 0 && ((u = new Set()), a.set(t, u));
    u.has(o) || (u.add(o), (e = fy.bind(null, e, t, o)), t.then(e, e));
  }
  function Zh(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Jh(e, t, o, a, u) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (o.flags |= 131072),
            (o.flags &= -52805),
            o.tag === 1 &&
              (o.alternate === null ? (o.tag = 17) : ((t = Hr(-1, 1)), (t.tag = 2), yn(o, t, 1))),
            (o.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = u), e);
  }
  var Zg = V.ReactCurrentOwner,
    xr = !1;
  function ur(e, t, o, a) {
    t.child = e === null ? Nc(t, null, o, a) : qo(t, e.child, o, a);
  }
  function em(e, t, o, a, u) {
    o = o.render;
    var p = t.ref;
    return (
      Go(t, u),
      (a = we(e, t, o, a, p, u)),
      (o = We()),
      e !== null && !xr
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~u), ho(e, t, u))
        : (rt && o && bs(t), (t.flags |= 1), ur(e, t, a, u), t.child)
    );
  }
  function tm(e, t, o, a, u) {
    if (e === null) {
      var p = o.type;
      return typeof p == "function" &&
        !hp(p) &&
        p.defaultProps === void 0 &&
        o.compare === null &&
        o.defaultProps === void 0
        ? ((t.tag = 15), (t.type = p), rm(e, t, p, a, u))
        : ((e = Kc(o.type, null, a, t, t.mode, u)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((p = e.child), (e.lanes & u) === 0)) {
      var y = p.memoizedProps;
      if (((o = o.compare), (o = o !== null ? o : Si), o(y, a) && e.ref === t.ref))
        return ho(e, t, u);
    }
    return (t.flags |= 1), (e = ti(p, a)), (e.ref = t.ref), (e.return = t), (t.child = e);
  }
  function rm(e, t, o, a, u) {
    if (e !== null) {
      var p = e.memoizedProps;
      if (Si(p, a) && e.ref === t.ref)
        if (((xr = !1), (t.pendingProps = a = p), (e.lanes & u) !== 0))
          (e.flags & 131072) !== 0 && (xr = !0);
        else return (t.lanes = e.lanes), ho(e, t, u);
    }
    return qd(e, t, o, a, u);
  }
  function nm(e, t, o) {
    var a = t.pendingProps,
      u = a.children,
      p = e !== null ? e.memoizedState : null;
    if (a.mode === "hidden")
      if ((t.mode & 1) === 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          ht(Ka, zr),
          (zr |= o);
      else {
        if ((o & 1073741824) === 0)
          return (
            (e = p !== null ? p.baseLanes | o : o),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            ht(Ka, zr),
            (zr |= e),
            null
          );
        (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (a = p !== null ? p.baseLanes : o),
          ht(Ka, zr),
          (zr |= a);
      }
    else
      p !== null ? ((a = p.baseLanes | o), (t.memoizedState = null)) : (a = o),
        ht(Ka, zr),
        (zr |= a);
    return ur(e, t, u, o), t.child;
  }
  function om(e, t) {
    var o = t.ref;
    ((e === null && o !== null) || (e !== null && e.ref !== o)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function qd(e, t, o, a, u) {
    var p = Jt(o) ? ao : Bt.current;
    return (
      (p = Ao(t, p)),
      Go(t, u),
      (o = we(e, t, o, a, p, u)),
      (a = We()),
      e !== null && !xr
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~u), ho(e, t, u))
        : (rt && a && bs(t), (t.flags |= 1), ur(e, t, o, u), t.child)
    );
  }
  function im(e, t, o, a, u) {
    if (Jt(o)) {
      var p = !0;
      Fo(t);
    } else p = !1;
    if ((Go(t, u), t.stateNode === null)) Ic(e, t), Os(t, o, a), Ua(t, o, a, u), (a = !0);
    else if (e === null) {
      var y = t.stateNode,
        C = t.memoizedProps;
      y.props = C;
      var T = y.context,
        G = o.contextType;
      typeof G == "object" && G !== null
        ? (G = gr(G))
        : ((G = Jt(o) ? ao : Bt.current), (G = Ao(t, G)));
      var ne = o.getDerivedStateFromProps,
        ie = typeof ne == "function" || typeof y.getSnapshotBeforeUpdate == "function";
      ie ||
        (typeof y.UNSAFE_componentWillReceiveProps != "function" &&
          typeof y.componentWillReceiveProps != "function") ||
        ((C !== a || T !== G) && zi(t, y, a, G)),
        (An = !1);
      var re = t.memoizedState;
      (y.state = re),
        Mi(t, a, y, u),
        (T = t.memoizedState),
        C !== a || re !== T || Zt.current || An
          ? (typeof ne == "function" && (Ps(t, o, ne, a), (T = t.memoizedState)),
            (C = An || Ts(t, o, C, a, re, T, G))
              ? (ie ||
                  (typeof y.UNSAFE_componentWillMount != "function" &&
                    typeof y.componentWillMount != "function") ||
                  (typeof y.componentWillMount == "function" && y.componentWillMount(),
                  typeof y.UNSAFE_componentWillMount == "function" &&
                    y.UNSAFE_componentWillMount()),
                typeof y.componentDidMount == "function" && (t.flags |= 4194308))
              : (typeof y.componentDidMount == "function" && (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = T)),
            (y.props = a),
            (y.state = T),
            (y.context = G),
            (a = C))
          : (typeof y.componentDidMount == "function" && (t.flags |= 4194308), (a = !1));
    } else {
      (y = t.stateNode),
        _s(e, t),
        (C = t.memoizedProps),
        (G = t.type === t.elementType ? C : Or(t.type, C)),
        (y.props = G),
        (ie = t.pendingProps),
        (re = y.context),
        (T = o.contextType),
        typeof T == "object" && T !== null
          ? (T = gr(T))
          : ((T = Jt(o) ? ao : Bt.current), (T = Ao(t, T)));
      var ke = o.getDerivedStateFromProps;
      (ne = typeof ke == "function" || typeof y.getSnapshotBeforeUpdate == "function") ||
        (typeof y.UNSAFE_componentWillReceiveProps != "function" &&
          typeof y.componentWillReceiveProps != "function") ||
        ((C !== ie || re !== T) && zi(t, y, a, T)),
        (An = !1),
        (re = t.memoizedState),
        (y.state = re),
        Mi(t, a, y, u);
      var $e = t.memoizedState;
      C !== ie || re !== $e || Zt.current || An
        ? (typeof ke == "function" && (Ps(t, o, ke, a), ($e = t.memoizedState)),
          (G = An || Ts(t, o, G, a, re, $e, T) || !1)
            ? (ne ||
                (typeof y.UNSAFE_componentWillUpdate != "function" &&
                  typeof y.componentWillUpdate != "function") ||
                (typeof y.componentWillUpdate == "function" && y.componentWillUpdate(a, $e, T),
                typeof y.UNSAFE_componentWillUpdate == "function" &&
                  y.UNSAFE_componentWillUpdate(a, $e, T)),
              typeof y.componentDidUpdate == "function" && (t.flags |= 4),
              typeof y.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
            : (typeof y.componentDidUpdate != "function" ||
                (C === e.memoizedProps && re === e.memoizedState) ||
                (t.flags |= 4),
              typeof y.getSnapshotBeforeUpdate != "function" ||
                (C === e.memoizedProps && re === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = $e)),
          (y.props = a),
          (y.state = $e),
          (y.context = T),
          (a = G))
        : (typeof y.componentDidUpdate != "function" ||
            (C === e.memoizedProps && re === e.memoizedState) ||
            (t.flags |= 4),
          typeof y.getSnapshotBeforeUpdate != "function" ||
            (C === e.memoizedProps && re === e.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return Kd(e, t, o, a, p, u);
  }
  function Kd(e, t, o, a, u, p) {
    om(e, t);
    var y = (t.flags & 128) !== 0;
    if (!a && !y) return u && $c(t, o, !1), ho(e, t, p);
    (a = t.stateNode), (Zg.current = t);
    var C = y && typeof o.getDerivedStateFromError != "function" ? null : a.render();
    return (
      (t.flags |= 1),
      e !== null && y
        ? ((t.child = qo(t, e.child, null, p)), (t.child = qo(t, null, C, p)))
        : ur(e, t, C, p),
      (t.memoizedState = a.state),
      u && $c(t, o, !0),
      t.child
    );
  }
  function am(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Sc(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Sc(e, t.context, !1),
      Di(e, t.containerInfo);
  }
  function lm(e, t, o, a, u) {
    return Vo(), Pi(u), (t.flags |= 256), ur(e, t, o, a), t.child;
  }
  var Xd = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Yd(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function sm(e, t, o) {
    var a = t.pendingProps,
      u = Be.current,
      p = !1,
      y = (t.flags & 128) !== 0,
      C;
    if (
      ((C = y) || (C = e !== null && e.memoizedState === null ? !1 : (u & 2) !== 0),
      C ? ((p = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (u |= 1),
      ht(Be, u & 1),
      e === null)
    )
      return (
        ks(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824),
            null)
          : ((y = a.children),
            (e = a.fallback),
            p
              ? ((a = t.mode),
                (p = t.child),
                (y = { mode: "hidden", children: y }),
                (a & 1) === 0 && p !== null
                  ? ((p.childLanes = 0), (p.pendingProps = y))
                  : (p = Xc(y, a, 0, null)),
                (e = Ui(e, a, o, null)),
                (p.return = t),
                (e.return = t),
                (p.sibling = e),
                (t.child = p),
                (t.child.memoizedState = Yd(o)),
                (t.memoizedState = Xd),
                e)
              : Qd(t, y))
      );
    if (((u = e.memoizedState), u !== null && ((C = u.dehydrated), C !== null)))
      return Jg(e, t, y, a, C, u, o);
    if (p) {
      (p = a.fallback), (y = t.mode), (u = e.child), (C = u.sibling);
      var T = { mode: "hidden", children: a.children };
      return (
        (y & 1) === 0 && t.child !== u
          ? ((a = t.child), (a.childLanes = 0), (a.pendingProps = T), (t.deletions = null))
          : ((a = ti(u, T)), (a.subtreeFlags = u.subtreeFlags & 14680064)),
        C !== null ? (p = ti(C, p)) : ((p = Ui(p, y, o, null)), (p.flags |= 2)),
        (p.return = t),
        (a.return = t),
        (a.sibling = p),
        (t.child = a),
        (a = p),
        (p = t.child),
        (y = e.child.memoizedState),
        (y =
          y === null
            ? Yd(o)
            : { baseLanes: y.baseLanes | o, cachePool: null, transitions: y.transitions }),
        (p.memoizedState = y),
        (p.childLanes = e.childLanes & ~o),
        (t.memoizedState = Xd),
        a
      );
    }
    return (
      (p = e.child),
      (e = p.sibling),
      (a = ti(p, { mode: "visible", children: a.children })),
      (t.mode & 1) === 0 && (a.lanes = o),
      (a.return = t),
      (a.sibling = null),
      e !== null &&
        ((o = t.deletions), o === null ? ((t.deletions = [e]), (t.flags |= 16)) : o.push(e)),
      (t.child = a),
      (t.memoizedState = null),
      a
    );
  }
  function Qd(e, t) {
    return (
      (t = Xc({ mode: "visible", children: t }, e.mode, 0, null)), (t.return = e), (e.child = t)
    );
  }
  function jc(e, t, o, a) {
    return (
      a !== null && Pi(a),
      qo(t, e.child, null, o),
      (e = Qd(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Jg(e, t, o, a, u, p, y) {
    if (o)
      return t.flags & 256
        ? ((t.flags &= -257), (a = Hd(Error(i(422)))), jc(e, t, y, a))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((p = a.fallback),
          (u = t.mode),
          (a = Xc({ mode: "visible", children: a.children }, u, 0, null)),
          (p = Ui(p, u, y, null)),
          (p.flags |= 2),
          (a.return = t),
          (p.return = t),
          (a.sibling = p),
          (t.child = a),
          (t.mode & 1) !== 0 && qo(t, e.child, null, y),
          (t.child.memoizedState = Yd(y)),
          (t.memoizedState = Xd),
          p);
    if ((t.mode & 1) === 0) return jc(e, t, y, null);
    if (u.data === "$!") {
      if (((a = u.nextSibling && u.nextSibling.dataset), a)) var C = a.dgst;
      return (a = C), (p = Error(i(419))), (a = Hd(p, a, void 0)), jc(e, t, y, a);
    }
    if (((C = (y & e.childLanes) !== 0), xr || C)) {
      if (((a = Ut), a !== null)) {
        switch (y & -y) {
          case 4:
            u = 2;
            break;
          case 16:
            u = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            u = 32;
            break;
          case 536870912:
            u = 268435456;
            break;
          default:
            u = 0;
        }
        (u = (u & (a.suspendedLanes | y)) !== 0 ? 0 : u),
          u !== 0 && u !== p.retryLane && ((p.retryLane = u), gn(e, u), Sn(a, e, u, -1));
      }
      return pp(), (a = Hd(Error(i(421)))), jc(e, t, y, a);
    }
    return u.data === "$?"
      ? ((t.flags |= 128), (t.child = e.child), (t = dy.bind(null, e)), (u._reactRetry = t), null)
      : ((e = p.treeContext),
        (Ct = hn(u.nextSibling)),
        (yt = t),
        (rt = !0),
        (Tr = null),
        e !== null &&
          ((vr[tr++] = sr),
          (vr[tr++] = vn),
          (vr[tr++] = lo),
          (sr = e.id),
          (vn = e.overflow),
          (lo = t)),
        (t = Qd(t, a.children)),
        (t.flags |= 4096),
        t);
  }
  function um(e, t, o) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), $s(e.return, t, o);
  }
  function Zd(e, t, o, a, u) {
    var p = e.memoizedState;
    p === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: o,
          tailMode: u,
        })
      : ((p.isBackwards = t),
        (p.rendering = null),
        (p.renderingStartTime = 0),
        (p.last = a),
        (p.tail = o),
        (p.tailMode = u));
  }
  function cm(e, t, o) {
    var a = t.pendingProps,
      u = a.revealOrder,
      p = a.tail;
    if ((ur(e, t, a.children, o), (a = Be.current), (a & 2) !== 0))
      (a = (a & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && um(e, o, t);
          else if (e.tag === 19) um(e, o, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      a &= 1;
    }
    if ((ht(Be, a), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (u) {
        case "forwards":
          for (o = t.child, u = null; o !== null; )
            (e = o.alternate), e !== null && Va(e) === null && (u = o), (o = o.sibling);
          (o = u),
            o === null ? ((u = t.child), (t.child = null)) : ((u = o.sibling), (o.sibling = null)),
            Zd(t, !1, u, o, p);
          break;
        case "backwards":
          for (o = null, u = t.child, t.child = null; u !== null; ) {
            if (((e = u.alternate), e !== null && Va(e) === null)) {
              t.child = u;
              break;
            }
            (e = u.sibling), (u.sibling = o), (o = u), (u = e);
          }
          Zd(t, !0, o, null, p);
          break;
        case "together":
          Zd(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Ic(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function ho(e, t, o) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (Ai |= t.lanes), (o & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (e = t.child, o = ti(e, e.pendingProps), t.child = o, o.return = t; e.sibling !== null; )
        (e = e.sibling), (o = o.sibling = ti(e, e.pendingProps)), (o.return = t);
      o.sibling = null;
    }
    return t.child;
  }
  function ey(e, t, o) {
    switch (t.tag) {
      case 3:
        am(t), Vo();
        break;
      case 5:
        zs(t);
        break;
      case 1:
        Jt(t.type) && Fo(t);
        break;
      case 4:
        Di(t, t.stateNode.containerInfo);
        break;
      case 10:
        var a = t.type._context,
          u = t.memoizedProps.value;
        ht(Aa, a._currentValue), (a._currentValue = u);
        break;
      case 13:
        if (((a = t.memoizedState), a !== null))
          return a.dehydrated !== null
            ? (ht(Be, Be.current & 1), (t.flags |= 128), null)
            : (o & t.child.childLanes) !== 0
            ? sm(e, t, o)
            : (ht(Be, Be.current & 1), (e = ho(e, t, o)), e !== null ? e.sibling : null);
        ht(Be, Be.current & 1);
        break;
      case 19:
        if (((a = (o & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (a) return cm(e, t, o);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null && ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          ht(Be, Be.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), nm(e, t, o);
    }
    return ho(e, t, o);
  }
  var fm, Jd, dm, pm;
  (fm = function (e, t) {
    for (var o = t.child; o !== null; ) {
      if (o.tag === 5 || o.tag === 6) e.appendChild(o.stateNode);
      else if (o.tag !== 4 && o.child !== null) {
        (o.child.return = o), (o = o.child);
        continue;
      }
      if (o === t) break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === t) return;
        o = o.return;
      }
      (o.sibling.return = o.return), (o = o.sibling);
    }
  }),
    (Jd = function () {}),
    (dm = function (e, t, o, a) {
      var u = e.memoizedProps;
      if (u !== a) {
        (e = t.stateNode), qr(Mr.current);
        var p = null;
        switch (o) {
          case "input":
            (u = ln(e, u)), (a = ln(e, a)), (p = []);
            break;
          case "select":
            (u = R({}, u, { value: void 0 })), (a = R({}, a, { value: void 0 })), (p = []);
            break;
          case "textarea":
            (u = sn(e, u)), (a = sn(e, a)), (p = []);
            break;
          default:
            typeof u.onClick != "function" && typeof a.onClick == "function" && (e.onclick = $i);
        }
        El(o, a);
        var y;
        o = null;
        for (G in u)
          if (!a.hasOwnProperty(G) && u.hasOwnProperty(G) && u[G] != null)
            if (G === "style") {
              var C = u[G];
              for (y in C) C.hasOwnProperty(y) && (o || (o = {}), (o[y] = ""));
            } else
              G !== "dangerouslySetInnerHTML" &&
                G !== "children" &&
                G !== "suppressContentEditableWarning" &&
                G !== "suppressHydrationWarning" &&
                G !== "autoFocus" &&
                (s.hasOwnProperty(G) ? p || (p = []) : (p = p || []).push(G, null));
        for (G in a) {
          var T = a[G];
          if (((C = u?.[G]), a.hasOwnProperty(G) && T !== C && (T != null || C != null)))
            if (G === "style")
              if (C) {
                for (y in C)
                  !C.hasOwnProperty(y) ||
                    (T && T.hasOwnProperty(y)) ||
                    (o || (o = {}), (o[y] = ""));
                for (y in T) T.hasOwnProperty(y) && C[y] !== T[y] && (o || (o = {}), (o[y] = T[y]));
              } else o || (p || (p = []), p.push(G, o)), (o = T);
            else
              G === "dangerouslySetInnerHTML"
                ? ((T = T ? T.__html : void 0),
                  (C = C ? C.__html : void 0),
                  T != null && C !== T && (p = p || []).push(G, T))
                : G === "children"
                ? (typeof T != "string" && typeof T != "number") || (p = p || []).push(G, "" + T)
                : G !== "suppressContentEditableWarning" &&
                  G !== "suppressHydrationWarning" &&
                  (s.hasOwnProperty(G)
                    ? (T != null && G === "onScroll" && pt("scroll", e), p || C === T || (p = []))
                    : (p = p || []).push(G, T));
        }
        o && (p = p || []).push("style", o);
        var G = p;
        (t.updateQueue = G) && (t.flags |= 4);
      }
    }),
    (pm = function (e, t, o, a) {
      o !== a && (t.flags |= 4);
    });
  function js(e, t) {
    if (!rt)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var o = null; t !== null; ) t.alternate !== null && (o = t), (t = t.sibling);
          o === null ? (e.tail = null) : (o.sibling = null);
          break;
        case "collapsed":
          o = e.tail;
          for (var a = null; o !== null; ) o.alternate !== null && (a = o), (o = o.sibling);
          a === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function rr(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      o = 0,
      a = 0;
    if (t)
      for (var u = e.child; u !== null; )
        (o |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags & 14680064),
          (a |= u.flags & 14680064),
          (u.return = e),
          (u = u.sibling);
    else
      for (u = e.child; u !== null; )
        (o |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags),
          (a |= u.flags),
          (u.return = e),
          (u = u.sibling);
    return (e.subtreeFlags |= a), (e.childLanes = o), t;
  }
  function ty(e, t, o) {
    var a = t.pendingProps;
    switch ((_i(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return rr(t), null;
      case 1:
        return Jt(t.type) && Ia(), rr(t), null;
      case 3:
        return (
          (a = t.stateNode),
          co(),
          vt(Zt),
          vt(Bt),
          h(),
          a.pendingContext && ((a.context = a.pendingContext), (a.pendingContext = null)),
          (e === null || e.child === null) &&
            (Da(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Tr !== null && (cp(Tr), (Tr = null)))),
          Jd(e, t),
          rr(t),
          null
        );
      case 5:
        Ns(t);
        var u = qr(Ii.current);
        if (((o = t.type), e !== null && t.stateNode != null))
          dm(e, t, o, a, u), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(i(166));
            return rr(t), null;
          }
          if (((e = qr(Mr.current)), Da(t))) {
            (a = t.stateNode), (o = t.type);
            var p = t.memoizedProps;
            switch (((a[Ur] = t), (a[io] = p), (e = (t.mode & 1) !== 0), o)) {
              case "dialog":
                pt("cancel", a), pt("close", a);
                break;
              case "iframe":
              case "object":
              case "embed":
                pt("load", a);
                break;
              case "video":
              case "audio":
                for (u = 0; u < Ci.length; u++) pt(Ci[u], a);
                break;
              case "source":
                pt("error", a);
                break;
              case "img":
              case "image":
              case "link":
                pt("error", a), pt("load", a);
                break;
              case "details":
                pt("toggle", a);
                break;
              case "input":
                wo(a, p), pt("invalid", a);
                break;
              case "select":
                (a._wrapperState = { wasMultiple: !!p.multiple }), pt("invalid", a);
                break;
              case "textarea":
                Tn(a, p), pt("invalid", a);
            }
            El(o, p), (u = null);
            for (var y in p)
              if (p.hasOwnProperty(y)) {
                var C = p[y];
                y === "children"
                  ? typeof C == "string"
                    ? a.textContent !== C &&
                      (p.suppressHydrationWarning !== !0 && Wt(a.textContent, C, e),
                      (u = ["children", C]))
                    : typeof C == "number" &&
                      a.textContent !== "" + C &&
                      (p.suppressHydrationWarning !== !0 && Wt(a.textContent, C, e),
                      (u = ["children", "" + C]))
                  : s.hasOwnProperty(y) && C != null && y === "onScroll" && pt("scroll", a);
              }
            switch (o) {
              case "input":
                Ht(a), Pn(a, p, !0);
                break;
              case "textarea":
                Ht(a), hr(a);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof p.onClick == "function" && (a.onclick = $i);
            }
            (a = u), (t.updateQueue = a), a !== null && (t.flags |= 4);
          } else {
            (y = u.nodeType === 9 ? u : u.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = On(o)),
              e === "http://www.w3.org/1999/xhtml"
                ? o === "script"
                  ? ((e = y.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof a.is == "string"
                  ? (e = y.createElement(o, { is: a.is }))
                  : ((e = y.createElement(o)),
                    o === "select" &&
                      ((y = e), a.multiple ? (y.multiple = !0) : a.size && (y.size = a.size)))
                : (e = y.createElementNS(e, o)),
              (e[Ur] = t),
              (e[io] = a),
              fm(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((y = na(o, a)), o)) {
                case "dialog":
                  pt("cancel", e), pt("close", e), (u = a);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  pt("load", e), (u = a);
                  break;
                case "video":
                case "audio":
                  for (u = 0; u < Ci.length; u++) pt(Ci[u], e);
                  u = a;
                  break;
                case "source":
                  pt("error", e), (u = a);
                  break;
                case "img":
                case "image":
                case "link":
                  pt("error", e), pt("load", e), (u = a);
                  break;
                case "details":
                  pt("toggle", e), (u = a);
                  break;
                case "input":
                  wo(e, a), (u = ln(e, a)), pt("invalid", e);
                  break;
                case "option":
                  u = a;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!a.multiple }),
                    (u = R({}, a, { value: void 0 })),
                    pt("invalid", e);
                  break;
                case "textarea":
                  Tn(e, a), (u = sn(e, a)), pt("invalid", e);
                  break;
                default:
                  u = a;
              }
              El(o, u), (C = u);
              for (p in C)
                if (C.hasOwnProperty(p)) {
                  var T = C[p];
                  p === "style"
                    ? $l(e, T)
                    : p === "dangerouslySetInnerHTML"
                    ? ((T = T ? T.__html : void 0), T != null && Fe(e, T))
                    : p === "children"
                    ? typeof T == "string"
                      ? (o !== "textarea" || T !== "") && un(e, T)
                      : typeof T == "number" && un(e, "" + T)
                    : p !== "suppressContentEditableWarning" &&
                      p !== "suppressHydrationWarning" &&
                      p !== "autoFocus" &&
                      (s.hasOwnProperty(p)
                        ? T != null && p === "onScroll" && pt("scroll", e)
                        : T != null && X(e, p, T, y));
                }
              switch (o) {
                case "input":
                  Ht(e), Pn(e, a, !1);
                  break;
                case "textarea":
                  Ht(e), hr(e);
                  break;
                case "option":
                  a.value != null && e.setAttribute("value", "" + Re(a.value));
                  break;
                case "select":
                  (e.multiple = !!a.multiple),
                    (p = a.value),
                    p != null
                      ? Ft(e, !!a.multiple, p, !1)
                      : a.defaultValue != null && Ft(e, !!a.multiple, a.defaultValue, !0);
                  break;
                default:
                  typeof u.onClick == "function" && (e.onclick = $i);
              }
              switch (o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a = !!a.autoFocus;
                  break e;
                case "img":
                  a = !0;
                  break e;
                default:
                  a = !1;
              }
            }
            a && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return rr(t), null;
      case 6:
        if (e && t.stateNode != null) pm(e, t, e.memoizedProps, a);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(i(166));
          if (((o = qr(Ii.current)), qr(Mr.current), Da(t))) {
            if (
              ((a = t.stateNode),
              (o = t.memoizedProps),
              (a[Ur] = t),
              (p = a.nodeValue !== o) && ((e = yt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Wt(a.nodeValue, o, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Wt(a.nodeValue, o, (e.mode & 1) !== 0);
              }
            p && (t.flags |= 4);
          } else
            (a = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(a)),
              (a[Ur] = t),
              (t.stateNode = a);
        }
        return rr(t), null;
      case 13:
        if (
          (vt(Be),
          (a = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (rt && Ct !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            Oc(), Vo(), (t.flags |= 98560), (p = !1);
          else if (((p = Da(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!p) throw Error(i(318));
              if (((p = t.memoizedState), (p = p !== null ? p.dehydrated : null), !p))
                throw Error(i(317));
              p[Ur] = t;
            } else Vo(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4);
            rr(t), (p = !1);
          } else Tr !== null && (cp(Tr), (Tr = null)), (p = !0);
          if (!p) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = o), t)
          : ((a = a !== null),
            a !== (e !== null && e.memoizedState !== null) &&
              a &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Be.current & 1) !== 0 ? It === 0 && (It = 3) : pp())),
            t.updateQueue !== null && (t.flags |= 4),
            rr(t),
            null);
      case 4:
        return co(), Jd(e, t), e === null && _r(t.stateNode.containerInfo), rr(t), null;
      case 10:
        return Cs(t.type._context), rr(t), null;
      case 17:
        return Jt(t.type) && Ia(), rr(t), null;
      case 19:
        if ((vt(Be), (p = t.memoizedState), p === null)) return rr(t), null;
        if (((a = (t.flags & 128) !== 0), (y = p.rendering), y === null))
          if (a) js(p, !1);
          else {
            if (It !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((y = Va(e)), y !== null)) {
                  for (
                    t.flags |= 128,
                      js(p, !1),
                      a = y.updateQueue,
                      a !== null && ((t.updateQueue = a), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      a = o,
                      o = t.child;
                    o !== null;

                  )
                    (p = o),
                      (e = a),
                      (p.flags &= 14680066),
                      (y = p.alternate),
                      y === null
                        ? ((p.childLanes = 0),
                          (p.lanes = e),
                          (p.child = null),
                          (p.subtreeFlags = 0),
                          (p.memoizedProps = null),
                          (p.memoizedState = null),
                          (p.updateQueue = null),
                          (p.dependencies = null),
                          (p.stateNode = null))
                        : ((p.childLanes = y.childLanes),
                          (p.lanes = y.lanes),
                          (p.child = y.child),
                          (p.subtreeFlags = 0),
                          (p.deletions = null),
                          (p.memoizedProps = y.memoizedProps),
                          (p.memoizedState = y.memoizedState),
                          (p.updateQueue = y.updateQueue),
                          (p.type = y.type),
                          (e = y.dependencies),
                          (p.dependencies =
                            e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                      (o = o.sibling);
                  return ht(Be, (Be.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            p.tail !== null &&
              bt() > Xa &&
              ((t.flags |= 128), (a = !0), js(p, !1), (t.lanes = 4194304));
          }
        else {
          if (!a)
            if (((e = Va(y)), e !== null)) {
              if (
                ((t.flags |= 128),
                (a = !0),
                (o = e.updateQueue),
                o !== null && ((t.updateQueue = o), (t.flags |= 4)),
                js(p, !0),
                p.tail === null && p.tailMode === "hidden" && !y.alternate && !rt)
              )
                return rr(t), null;
            } else
              2 * bt() - p.renderingStartTime > Xa &&
                o !== 1073741824 &&
                ((t.flags |= 128), (a = !0), js(p, !1), (t.lanes = 4194304));
          p.isBackwards
            ? ((y.sibling = t.child), (t.child = y))
            : ((o = p.last), o !== null ? (o.sibling = y) : (t.child = y), (p.last = y));
        }
        return p.tail !== null
          ? ((t = p.tail),
            (p.rendering = t),
            (p.tail = t.sibling),
            (p.renderingStartTime = bt()),
            (t.sibling = null),
            (o = Be.current),
            ht(Be, a ? (o & 1) | 2 : o & 1),
            t)
          : (rr(t), null);
      case 22:
      case 23:
        return (
          dp(),
          (a = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== a && (t.flags |= 8192),
          a && (t.mode & 1) !== 0
            ? (zr & 1073741824) !== 0 && (rr(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : rr(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function ry(e, t) {
    switch ((_i(t), t.tag)) {
      case 1:
        return (
          Jt(t.type) && Ia(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          co(),
          vt(Zt),
          vt(Bt),
          h(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return Ns(t), null;
      case 13:
        if ((vt(Be), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(i(340));
          Vo();
        }
        return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
      case 19:
        return vt(Be), null;
      case 4:
        return co(), null;
      case 10:
        return Cs(t.type._context), null;
      case 22:
      case 23:
        return dp(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Dc = !1,
    nr = !1,
    ny = typeof WeakSet == "function" ? WeakSet : Set,
    Ce = null;
  function qa(e, t) {
    var o = e.ref;
    if (o !== null)
      if (typeof o == "function")
        try {
          o(null);
        } catch (a) {
          Et(e, t, a);
        }
      else o.current = null;
  }
  function ep(e, t, o) {
    try {
      o();
    } catch (a) {
      Et(e, t, a);
    }
  }
  var hm = !1;
  function oy(e, t) {
    if (((za = To), (e = Ca()), ss(e))) {
      if ("selectionStart" in e) var o = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          o = ((o = e.ownerDocument) && o.defaultView) || window;
          var a = o.getSelection && o.getSelection();
          if (a && a.rangeCount !== 0) {
            o = a.anchorNode;
            var u = a.anchorOffset,
              p = a.focusNode;
            a = a.focusOffset;
            try {
              o.nodeType, p.nodeType;
            } catch {
              o = null;
              break e;
            }
            var y = 0,
              C = -1,
              T = -1,
              G = 0,
              ne = 0,
              ie = e,
              re = null;
            t: for (;;) {
              for (
                var ke;
                ie !== o || (u !== 0 && ie.nodeType !== 3) || (C = y + u),
                  ie !== p || (a !== 0 && ie.nodeType !== 3) || (T = y + a),
                  ie.nodeType === 3 && (y += ie.nodeValue.length),
                  (ke = ie.firstChild) !== null;

              )
                (re = ie), (ie = ke);
              for (;;) {
                if (ie === e) break t;
                if (
                  (re === o && ++G === u && (C = y),
                  re === p && ++ne === a && (T = y),
                  (ke = ie.nextSibling) !== null)
                )
                  break;
                (ie = re), (re = ie.parentNode);
              }
              ie = ke;
            }
            o = C === -1 || T === -1 ? null : { start: C, end: T };
          } else o = null;
        }
      o = o || { start: 0, end: 0 };
    } else o = null;
    for (Lo = { focusedElem: e, selectionRange: o }, To = !1, Ce = t; Ce !== null; )
      if (((t = Ce), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (Ce = e);
      else
        for (; Ce !== null; ) {
          t = Ce;
          try {
            var $e = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if ($e !== null) {
                    var _e = $e.memoizedProps,
                      Tt = $e.memoizedState,
                      W = t.stateNode,
                      L = W.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? _e : Or(t.type, _e),
                        Tt
                      );
                    W.__reactInternalSnapshotBeforeUpdate = L;
                  }
                  break;
                case 3:
                  var B = t.stateNode.containerInfo;
                  B.nodeType === 1
                    ? (B.textContent = "")
                    : B.nodeType === 9 && B.documentElement && B.removeChild(B.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(i(163));
              }
          } catch (le) {
            Et(t, t.return, le);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (Ce = e);
            break;
          }
          Ce = t.return;
        }
    return ($e = hm), (hm = !1), $e;
  }
  function Is(e, t, o) {
    var a = t.updateQueue;
    if (((a = a !== null ? a.lastEffect : null), a !== null)) {
      var u = (a = a.next);
      do {
        if ((u.tag & e) === e) {
          var p = u.destroy;
          (u.destroy = void 0), p !== void 0 && ep(t, o, p);
        }
        u = u.next;
      } while (u !== a);
    }
  }
  function Ac(e, t) {
    if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
      var o = (t = t.next);
      do {
        if ((o.tag & e) === e) {
          var a = o.create;
          o.destroy = a();
        }
        o = o.next;
      } while (o !== t);
    }
  }
  function tp(e) {
    var t = e.ref;
    if (t !== null) {
      var o = e.stateNode;
      e.tag, (e = o), typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function mm(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), mm(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[Ur], delete t[io], delete t[gs], delete t[Bd], delete t[Ud])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function vm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function gm(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || vm(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function rp(e, t, o) {
    var a = e.tag;
    if (a === 5 || a === 6)
      (e = e.stateNode),
        t
          ? o.nodeType === 8
            ? o.parentNode.insertBefore(e, t)
            : o.insertBefore(e, t)
          : (o.nodeType === 8
              ? ((t = o.parentNode), t.insertBefore(e, o))
              : ((t = o), t.appendChild(e)),
            (o = o._reactRootContainer),
            o != null || t.onclick !== null || (t.onclick = $i));
    else if (a !== 4 && ((e = e.child), e !== null))
      for (rp(e, t, o), e = e.sibling; e !== null; ) rp(e, t, o), (e = e.sibling);
  }
  function np(e, t, o) {
    var a = e.tag;
    if (a === 5 || a === 6) (e = e.stateNode), t ? o.insertBefore(e, t) : o.appendChild(e);
    else if (a !== 4 && ((e = e.child), e !== null))
      for (np(e, t, o), e = e.sibling; e !== null; ) np(e, t, o), (e = e.sibling);
  }
  var qt = null,
    wn = !1;
  function Yo(e, t, o) {
    for (o = o.child; o !== null; ) ym(e, t, o), (o = o.sibling);
  }
  function ym(e, t, o) {
    if (mr && typeof mr.onCommitFiberUnmount == "function")
      try {
        mr.onCommitFiberUnmount(cn, o);
      } catch {}
    switch (o.tag) {
      case 5:
        nr || qa(o, t);
      case 6:
        var a = qt,
          u = wn;
        (qt = null),
          Yo(e, t, o),
          (qt = a),
          (wn = u),
          qt !== null &&
            (wn
              ? ((e = qt),
                (o = o.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(o) : e.removeChild(o))
              : qt.removeChild(o.stateNode));
        break;
      case 18:
        qt !== null &&
          (wn
            ? ((e = qt),
              (o = o.stateNode),
              e.nodeType === 8 ? ja(e.parentNode, o) : e.nodeType === 1 && ja(e, o),
              yi(e))
            : ja(qt, o.stateNode));
        break;
      case 4:
        (a = qt),
          (u = wn),
          (qt = o.stateNode.containerInfo),
          (wn = !0),
          Yo(e, t, o),
          (qt = a),
          (wn = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!nr && ((a = o.updateQueue), a !== null && ((a = a.lastEffect), a !== null))) {
          u = a = a.next;
          do {
            var p = u,
              y = p.destroy;
            (p = p.tag),
              y !== void 0 && ((p & 2) !== 0 || (p & 4) !== 0) && ep(o, t, y),
              (u = u.next);
          } while (u !== a);
        }
        Yo(e, t, o);
        break;
      case 1:
        if (!nr && (qa(o, t), (a = o.stateNode), typeof a.componentWillUnmount == "function"))
          try {
            (a.props = o.memoizedProps), (a.state = o.memoizedState), a.componentWillUnmount();
          } catch (C) {
            Et(o, t, C);
          }
        Yo(e, t, o);
        break;
      case 21:
        Yo(e, t, o);
        break;
      case 22:
        o.mode & 1
          ? ((nr = (a = nr) || o.memoizedState !== null), Yo(e, t, o), (nr = a))
          : Yo(e, t, o);
        break;
      default:
        Yo(e, t, o);
    }
  }
  function xm(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var o = e.stateNode;
      o === null && (o = e.stateNode = new ny()),
        t.forEach(function (a) {
          var u = py.bind(null, e, a);
          o.has(a) || (o.add(a), a.then(u, u));
        });
    }
  }
  function kn(e, t) {
    var o = t.deletions;
    if (o !== null)
      for (var a = 0; a < o.length; a++) {
        var u = o[a];
        try {
          var p = e,
            y = t,
            C = y;
          e: for (; C !== null; ) {
            switch (C.tag) {
              case 5:
                (qt = C.stateNode), (wn = !1);
                break e;
              case 3:
                (qt = C.stateNode.containerInfo), (wn = !0);
                break e;
              case 4:
                (qt = C.stateNode.containerInfo), (wn = !0);
                break e;
            }
            C = C.return;
          }
          if (qt === null) throw Error(i(160));
          ym(p, y, u), (qt = null), (wn = !1);
          var T = u.alternate;
          T !== null && (T.return = null), (u.return = null);
        } catch (G) {
          Et(u, t, G);
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) bm(t, e), (t = t.sibling);
  }
  function bm(e, t) {
    var o = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((kn(t, e), Wn(e), a & 4)) {
          try {
            Is(3, e, e.return), Ac(3, e);
          } catch (_e) {
            Et(e, e.return, _e);
          }
          try {
            Is(5, e, e.return);
          } catch (_e) {
            Et(e, e.return, _e);
          }
        }
        break;
      case 1:
        kn(t, e), Wn(e), a & 512 && o !== null && qa(o, o.return);
        break;
      case 5:
        if ((kn(t, e), Wn(e), a & 512 && o !== null && qa(o, o.return), e.flags & 32)) {
          var u = e.stateNode;
          try {
            un(u, "");
          } catch (_e) {
            Et(e, e.return, _e);
          }
        }
        if (a & 4 && ((u = e.stateNode), u != null)) {
          var p = e.memoizedProps,
            y = o !== null ? o.memoizedProps : p,
            C = e.type,
            T = e.updateQueue;
          if (((e.updateQueue = null), T !== null))
            try {
              C === "input" && p.type === "radio" && p.name != null && Yn(u, p), na(C, y);
              var G = na(C, p);
              for (y = 0; y < T.length; y += 2) {
                var ne = T[y],
                  ie = T[y + 1];
                ne === "style"
                  ? $l(u, ie)
                  : ne === "dangerouslySetInnerHTML"
                  ? Fe(u, ie)
                  : ne === "children"
                  ? un(u, ie)
                  : X(u, ne, ie, G);
              }
              switch (C) {
                case "input":
                  _n(u, p);
                  break;
                case "textarea":
                  pr(u, p);
                  break;
                case "select":
                  var re = u._wrapperState.wasMultiple;
                  u._wrapperState.wasMultiple = !!p.multiple;
                  var ke = p.value;
                  ke != null
                    ? Ft(u, !!p.multiple, ke, !1)
                    : re !== !!p.multiple &&
                      (p.defaultValue != null
                        ? Ft(u, !!p.multiple, p.defaultValue, !0)
                        : Ft(u, !!p.multiple, p.multiple ? [] : "", !1));
              }
              u[io] = p;
            } catch (_e) {
              Et(e, e.return, _e);
            }
        }
        break;
      case 6:
        if ((kn(t, e), Wn(e), a & 4)) {
          if (e.stateNode === null) throw Error(i(162));
          (u = e.stateNode), (p = e.memoizedProps);
          try {
            u.nodeValue = p;
          } catch (_e) {
            Et(e, e.return, _e);
          }
        }
        break;
      case 3:
        if ((kn(t, e), Wn(e), a & 4 && o !== null && o.memoizedState.isDehydrated))
          try {
            yi(t.containerInfo);
          } catch (_e) {
            Et(e, e.return, _e);
          }
        break;
      case 4:
        kn(t, e), Wn(e);
        break;
      case 13:
        kn(t, e),
          Wn(e),
          (u = e.child),
          u.flags & 8192 &&
            ((p = u.memoizedState !== null),
            (u.stateNode.isHidden = p),
            !p || (u.alternate !== null && u.alternate.memoizedState !== null) || (ap = bt())),
          a & 4 && xm(e);
        break;
      case 22:
        if (
          ((ne = o !== null && o.memoizedState !== null),
          e.mode & 1 ? ((nr = (G = nr) || ne), kn(t, e), (nr = G)) : kn(t, e),
          Wn(e),
          a & 8192)
        ) {
          if (
            ((G = e.memoizedState !== null),
            (e.stateNode.isHidden = G) && !ne && (e.mode & 1) !== 0)
          )
            for (Ce = e, ne = e.child; ne !== null; ) {
              for (ie = Ce = ne; Ce !== null; ) {
                switch (((re = Ce), (ke = re.child), re.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Is(4, re, re.return);
                    break;
                  case 1:
                    qa(re, re.return);
                    var $e = re.stateNode;
                    if (typeof $e.componentWillUnmount == "function") {
                      (a = re), (o = re.return);
                      try {
                        (t = a),
                          ($e.props = t.memoizedProps),
                          ($e.state = t.memoizedState),
                          $e.componentWillUnmount();
                      } catch (_e) {
                        Et(a, o, _e);
                      }
                    }
                    break;
                  case 5:
                    qa(re, re.return);
                    break;
                  case 22:
                    if (re.memoizedState !== null) {
                      Sm(ie);
                      continue;
                    }
                }
                ke !== null ? ((ke.return = re), (Ce = ke)) : Sm(ie);
              }
              ne = ne.sibling;
            }
          e: for (ne = null, ie = e; ; ) {
            if (ie.tag === 5) {
              if (ne === null) {
                ne = ie;
                try {
                  (u = ie.stateNode),
                    G
                      ? ((p = u.style),
                        typeof p.setProperty == "function"
                          ? p.setProperty("display", "none", "important")
                          : (p.display = "none"))
                      : ((C = ie.stateNode),
                        (T = ie.memoizedProps.style),
                        (y = T != null && T.hasOwnProperty("display") ? T.display : null),
                        (C.style.display = ra("display", y)));
                } catch (_e) {
                  Et(e, e.return, _e);
                }
              }
            } else if (ie.tag === 6) {
              if (ne === null)
                try {
                  ie.stateNode.nodeValue = G ? "" : ie.memoizedProps;
                } catch (_e) {
                  Et(e, e.return, _e);
                }
            } else if (
              ((ie.tag !== 22 && ie.tag !== 23) || ie.memoizedState === null || ie === e) &&
              ie.child !== null
            ) {
              (ie.child.return = ie), (ie = ie.child);
              continue;
            }
            if (ie === e) break e;
            for (; ie.sibling === null; ) {
              if (ie.return === null || ie.return === e) break e;
              ne === ie && (ne = null), (ie = ie.return);
            }
            ne === ie && (ne = null), (ie.sibling.return = ie.return), (ie = ie.sibling);
          }
        }
        break;
      case 19:
        kn(t, e), Wn(e), a & 4 && xm(e);
        break;
      case 21:
        break;
      default:
        kn(t, e), Wn(e);
    }
  }
  function Wn(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var o = e.return; o !== null; ) {
            if (vm(o)) {
              var a = o;
              break e;
            }
            o = o.return;
          }
          throw Error(i(160));
        }
        switch (a.tag) {
          case 5:
            var u = a.stateNode;
            a.flags & 32 && (un(u, ""), (a.flags &= -33));
            var p = gm(e);
            np(e, p, u);
            break;
          case 3:
          case 4:
            var y = a.stateNode.containerInfo,
              C = gm(e);
            rp(e, C, y);
            break;
          default:
            throw Error(i(161));
        }
      } catch (T) {
        Et(e, e.return, T);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function iy(e, t, o) {
    (Ce = e), wm(e);
  }
  function wm(e, t, o) {
    for (var a = (e.mode & 1) !== 0; Ce !== null; ) {
      var u = Ce,
        p = u.child;
      if (u.tag === 22 && a) {
        var y = u.memoizedState !== null || Dc;
        if (!y) {
          var C = u.alternate,
            T = (C !== null && C.memoizedState !== null) || nr;
          C = Dc;
          var G = nr;
          if (((Dc = y), (nr = T) && !G))
            for (Ce = u; Ce !== null; )
              (y = Ce),
                (T = y.child),
                y.tag === 22 && y.memoizedState !== null
                  ? Cm(u)
                  : T !== null
                  ? ((T.return = y), (Ce = T))
                  : Cm(u);
          for (; p !== null; ) (Ce = p), wm(p), (p = p.sibling);
          (Ce = u), (Dc = C), (nr = G);
        }
        km(e);
      } else (u.subtreeFlags & 8772) !== 0 && p !== null ? ((p.return = u), (Ce = p)) : km(e);
    }
  }
  function km(e) {
    for (; Ce !== null; ) {
      var t = Ce;
      if ((t.flags & 8772) !== 0) {
        var o = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                nr || Ac(5, t);
                break;
              case 1:
                var a = t.stateNode;
                if (t.flags & 4 && !nr)
                  if (o === null) a.componentDidMount();
                  else {
                    var u =
                      t.elementType === t.type ? o.memoizedProps : Or(t.type, o.memoizedProps);
                    a.componentDidUpdate(u, o.memoizedState, a.__reactInternalSnapshotBeforeUpdate);
                  }
                var p = t.updateQueue;
                p !== null && Gr(t, p, a);
                break;
              case 3:
                var y = t.updateQueue;
                if (y !== null) {
                  if (((o = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        o = t.child.stateNode;
                        break;
                      case 1:
                        o = t.child.stateNode;
                    }
                  Gr(t, y, o);
                }
                break;
              case 5:
                var C = t.stateNode;
                if (o === null && t.flags & 4) {
                  o = C;
                  var T = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      T.autoFocus && o.focus();
                      break;
                    case "img":
                      T.src && (o.src = T.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var G = t.alternate;
                  if (G !== null) {
                    var ne = G.memoizedState;
                    if (ne !== null) {
                      var ie = ne.dehydrated;
                      ie !== null && yi(ie);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(i(163));
            }
          nr || (t.flags & 512 && tp(t));
        } catch (re) {
          Et(t, t.return, re);
        }
      }
      if (t === e) {
        Ce = null;
        break;
      }
      if (((o = t.sibling), o !== null)) {
        (o.return = t.return), (Ce = o);
        break;
      }
      Ce = t.return;
    }
  }
  function Sm(e) {
    for (; Ce !== null; ) {
      var t = Ce;
      if (t === e) {
        Ce = null;
        break;
      }
      var o = t.sibling;
      if (o !== null) {
        (o.return = t.return), (Ce = o);
        break;
      }
      Ce = t.return;
    }
  }
  function Cm(e) {
    for (; Ce !== null; ) {
      var t = Ce;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var o = t.return;
            try {
              Ac(4, t);
            } catch (T) {
              Et(t, o, T);
            }
            break;
          case 1:
            var a = t.stateNode;
            if (typeof a.componentDidMount == "function") {
              var u = t.return;
              try {
                a.componentDidMount();
              } catch (T) {
                Et(t, u, T);
              }
            }
            var p = t.return;
            try {
              tp(t);
            } catch (T) {
              Et(t, p, T);
            }
            break;
          case 5:
            var y = t.return;
            try {
              tp(t);
            } catch (T) {
              Et(t, y, T);
            }
        }
      } catch (T) {
        Et(t, t.return, T);
      }
      if (t === e) {
        Ce = null;
        break;
      }
      var C = t.sibling;
      if (C !== null) {
        (C.return = t.return), (Ce = C);
        break;
      }
      Ce = t.return;
    }
  }
  var ay = Math.ceil,
    Fc = V.ReactCurrentDispatcher,
    op = V.ReactCurrentOwner,
    Yr = V.ReactCurrentBatchConfig,
    ot = 0,
    Ut = null,
    Nt = null,
    Kt = 0,
    zr = 0,
    Ka = jn(0),
    It = 0,
    Ds = null,
    Ai = 0,
    Wc = 0,
    ip = 0,
    As = null,
    br = null,
    ap = 0,
    Xa = 1 / 0,
    mo = null,
    Bc = !1,
    lp = null,
    Qo = null,
    Uc = !1,
    Zo = null,
    Vc = 0,
    Fs = 0,
    sp = null,
    Hc = -1,
    Gc = 0;
  function cr() {
    return (ot & 6) !== 0 ? bt() : Hc !== -1 ? Hc : (Hc = bt());
  }
  function Jo(e) {
    return (e.mode & 1) === 0
      ? 1
      : (ot & 2) !== 0 && Kt !== 0
      ? Kt & -Kt
      : Vd.transition !== null
      ? (Gc === 0 && (Gc = jl()), Gc)
      : ((e = lt), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Gl(e.type))), e);
  }
  function Sn(e, t, o, a) {
    if (50 < Fs) throw ((Fs = 0), (sp = null), Error(i(185)));
    hi(e, o, a),
      ((ot & 2) === 0 || e !== Ut) &&
        (e === Ut && ((ot & 2) === 0 && (Wc |= o), It === 4 && ei(e, Kt)),
        wr(e, a),
        o === 1 && ot === 0 && (t.mode & 1) === 0 && ((Xa = bt() + 500), Wo && Dn()));
  }
  function wr(e, t) {
    var o = e.callbackNode;
    cd(e, t);
    var a = ca(e, e === Ut ? Kt : 0);
    if (a === 0) o !== null && Lu(o), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = a & -a), e.callbackPriority !== t)) {
      if ((o != null && Lu(o), t === 1))
        e.tag === 0 ? Ec(Em.bind(null, e)) : xs(Em.bind(null, e)),
          vs(function () {
            (ot & 6) === 0 && Dn();
          }),
          (o = null);
      else {
        switch (Du(a)) {
          case 1:
            o = Nl;
            break;
          case 4:
            o = Iu;
            break;
          case 16:
            o = la;
            break;
          case 536870912:
            o = sa;
            break;
          default:
            o = la;
        }
        o = Nm(o, $m.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = o);
    }
  }
  function $m(e, t) {
    if (((Hc = -1), (Gc = 0), (ot & 6) !== 0)) throw Error(i(327));
    var o = e.callbackNode;
    if (Ya() && e.callbackNode !== o) return null;
    var a = ca(e, e === Ut ? Kt : 0);
    if (a === 0) return null;
    if ((a & 30) !== 0 || (a & e.expiredLanes) !== 0 || t) t = qc(e, a);
    else {
      t = a;
      var u = ot;
      ot |= 2;
      var p = _m();
      (Ut !== e || Kt !== t) && ((mo = null), (Xa = bt() + 500), Wi(e, t));
      do
        try {
          uy();
          break;
        } catch (C) {
          Rm(e, C);
        }
      while (!0);
      Ss(), (Fc.current = p), (ot = u), Nt !== null ? (t = 0) : ((Ut = null), (Kt = 0), (t = It));
    }
    if (t !== 0) {
      if ((t === 2 && ((u = Ll(e)), u !== 0 && ((a = u), (t = up(e, u)))), t === 1))
        throw ((o = Ds), Wi(e, 0), ei(e, a), wr(e, bt()), o);
      if (t === 6) ei(e, a);
      else {
        if (
          ((u = e.current.alternate),
          (a & 30) === 0 &&
            !ly(u) &&
            ((t = qc(e, a)),
            t === 2 && ((p = Ll(e)), p !== 0 && ((a = p), (t = up(e, p)))),
            t === 1))
        )
          throw ((o = Ds), Wi(e, 0), ei(e, a), wr(e, bt()), o);
        switch (((e.finishedWork = u), (e.finishedLanes = a), t)) {
          case 0:
          case 1:
            throw Error(i(345));
          case 2:
            Bi(e, br, mo);
            break;
          case 3:
            if ((ei(e, a), (a & 130023424) === a && ((t = ap + 500 - bt()), 10 < t))) {
              if (ca(e, 0) !== 0) break;
              if (((u = e.suspendedLanes), (u & a) !== a)) {
                cr(), (e.pingedLanes |= e.suspendedLanes & u);
                break;
              }
              e.timeoutHandle = La(Bi.bind(null, e, br, mo), t);
              break;
            }
            Bi(e, br, mo);
            break;
          case 4:
            if ((ei(e, a), (a & 4194240) === a)) break;
            for (t = e.eventTimes, u = -1; 0 < a; ) {
              var y = 31 - Rr(a);
              (p = 1 << y), (y = t[y]), y > u && (u = y), (a &= ~p);
            }
            if (
              ((a = u),
              (a = bt() - a),
              (a =
                (120 > a
                  ? 120
                  : 480 > a
                  ? 480
                  : 1080 > a
                  ? 1080
                  : 1920 > a
                  ? 1920
                  : 3e3 > a
                  ? 3e3
                  : 4320 > a
                  ? 4320
                  : 1960 * ay(a / 1960)) - a),
              10 < a)
            ) {
              e.timeoutHandle = La(Bi.bind(null, e, br, mo), a);
              break;
            }
            Bi(e, br, mo);
            break;
          case 5:
            Bi(e, br, mo);
            break;
          default:
            throw Error(i(329));
        }
      }
    }
    return wr(e, bt()), e.callbackNode === o ? $m.bind(null, e) : null;
  }
  function up(e, t) {
    var o = As;
    return (
      e.current.memoizedState.isDehydrated && (Wi(e, t).flags |= 256),
      (e = qc(e, t)),
      e !== 2 && ((t = br), (br = o), t !== null && cp(t)),
      e
    );
  }
  function cp(e) {
    br === null ? (br = e) : br.push.apply(br, e);
  }
  function ly(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var o = t.updateQueue;
        if (o !== null && ((o = o.stores), o !== null))
          for (var a = 0; a < o.length; a++) {
            var u = o[a],
              p = u.getSnapshot;
            u = u.value;
            try {
              if (!lr(p(), u)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((o = t.child), t.subtreeFlags & 16384 && o !== null)) (o.return = t), (t = o);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function ei(e, t) {
    for (
      t &= ~ip, t &= ~Wc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;

    ) {
      var o = 31 - Rr(t),
        a = 1 << o;
      (e[o] = -1), (t &= ~a);
    }
  }
  function Em(e) {
    if ((ot & 6) !== 0) throw Error(i(327));
    Ya();
    var t = ca(e, 0);
    if ((t & 1) === 0) return wr(e, bt()), null;
    var o = qc(e, t);
    if (e.tag !== 0 && o === 2) {
      var a = Ll(e);
      a !== 0 && ((t = a), (o = up(e, a)));
    }
    if (o === 1) throw ((o = Ds), Wi(e, 0), ei(e, t), wr(e, bt()), o);
    if (o === 6) throw Error(i(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Bi(e, br, mo),
      wr(e, bt()),
      null
    );
  }
  function fp(e, t) {
    var o = ot;
    ot |= 1;
    try {
      return e(t);
    } finally {
      (ot = o), ot === 0 && ((Xa = bt() + 500), Wo && Dn());
    }
  }
  function Fi(e) {
    Zo !== null && Zo.tag === 0 && (ot & 6) === 0 && Ya();
    var t = ot;
    ot |= 1;
    var o = Yr.transition,
      a = lt;
    try {
      if (((Yr.transition = null), (lt = 1), e)) return e();
    } finally {
      (lt = a), (Yr.transition = o), (ot = t), (ot & 6) === 0 && Dn();
    }
  }
  function dp() {
    (zr = Ka.current), vt(Ka);
  }
  function Wi(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var o = e.timeoutHandle;
    if ((o !== -1 && ((e.timeoutHandle = -1), Fd(o)), Nt !== null))
      for (o = Nt.return; o !== null; ) {
        var a = o;
        switch ((_i(a), a.tag)) {
          case 1:
            (a = a.type.childContextTypes), a != null && Ia();
            break;
          case 3:
            co(), vt(Zt), vt(Bt), h();
            break;
          case 5:
            Ns(a);
            break;
          case 4:
            co();
            break;
          case 13:
            vt(Be);
            break;
          case 19:
            vt(Be);
            break;
          case 10:
            Cs(a.type._context);
            break;
          case 22:
          case 23:
            dp();
        }
        o = o.return;
      }
    if (
      ((Ut = e),
      (Nt = e = ti(e.current, null)),
      (Kt = zr = t),
      (It = 0),
      (Ds = null),
      (ip = Wc = Ai = 0),
      (br = As = null),
      uo !== null)
    ) {
      for (t = 0; t < uo.length; t++)
        if (((o = uo[t]), (a = o.interleaved), a !== null)) {
          o.interleaved = null;
          var u = a.next,
            p = o.pending;
          if (p !== null) {
            var y = p.next;
            (p.next = u), (a.next = y);
          }
          o.pending = a;
        }
      uo = null;
    }
    return e;
  }
  function Rm(e, t) {
    do {
      var o = Nt;
      try {
        if ((Ss(), (g.current = Lc), F)) {
          for (var a = P.memoizedState; a !== null; ) {
            var u = a.queue;
            u !== null && (u.pending = null), (a = a.next);
          }
          F = !1;
        }
        if (
          ((_ = 0),
          (I = $ = P = null),
          (Z = !1),
          (te = 0),
          (op.current = null),
          o === null || o.return === null)
        ) {
          (It = 1), (Ds = t), (Nt = null);
          break;
        }
        e: {
          var p = e,
            y = o.return,
            C = o,
            T = t;
          if (
            ((t = Kt),
            (C.flags |= 32768),
            T !== null && typeof T == "object" && typeof T.then == "function")
          ) {
            var G = T,
              ne = C,
              ie = ne.tag;
            if ((ne.mode & 1) === 0 && (ie === 0 || ie === 11 || ie === 15)) {
              var re = ne.alternate;
              re
                ? ((ne.updateQueue = re.updateQueue),
                  (ne.memoizedState = re.memoizedState),
                  (ne.lanes = re.lanes))
                : ((ne.updateQueue = null), (ne.memoizedState = null));
            }
            var ke = Zh(y);
            if (ke !== null) {
              (ke.flags &= -257), Jh(ke, y, C, p, t), ke.mode & 1 && Qh(p, G, t), (t = ke), (T = G);
              var $e = t.updateQueue;
              if ($e === null) {
                var _e = new Set();
                _e.add(T), (t.updateQueue = _e);
              } else $e.add(T);
              break e;
            } else {
              if ((t & 1) === 0) {
                Qh(p, G, t), pp();
                break e;
              }
              T = Error(i(426));
            }
          } else if (rt && C.mode & 1) {
            var Tt = Zh(y);
            if (Tt !== null) {
              (Tt.flags & 65536) === 0 && (Tt.flags |= 256), Jh(Tt, y, C, p, t), Pi(Ga(T, C));
              break e;
            }
          }
          (p = T = Ga(T, C)), It !== 4 && (It = 2), As === null ? (As = [p]) : As.push(p), (p = y);
          do {
            switch (p.tag) {
              case 3:
                (p.flags |= 65536), (t &= -t), (p.lanes |= t);
                var W = Xh(p, T, t);
                Mc(p, W);
                break e;
              case 1:
                C = T;
                var L = p.type,
                  B = p.stateNode;
                if (
                  (p.flags & 128) === 0 &&
                  (typeof L.getDerivedStateFromError == "function" ||
                    (B !== null &&
                      typeof B.componentDidCatch == "function" &&
                      (Qo === null || !Qo.has(B))))
                ) {
                  (p.flags |= 65536), (t &= -t), (p.lanes |= t);
                  var le = Yh(p, C, t);
                  Mc(p, le);
                  break e;
                }
            }
            p = p.return;
          } while (p !== null);
        }
        Tm(o);
      } catch (Pe) {
        (t = Pe), Nt === o && o !== null && (Nt = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function _m() {
    var e = Fc.current;
    return (Fc.current = Lc), e === null ? Lc : e;
  }
  function pp() {
    (It === 0 || It === 3 || It === 2) && (It = 4),
      Ut === null || ((Ai & 268435455) === 0 && (Wc & 268435455) === 0) || ei(Ut, Kt);
  }
  function qc(e, t) {
    var o = ot;
    ot |= 2;
    var a = _m();
    (Ut !== e || Kt !== t) && ((mo = null), Wi(e, t));
    do
      try {
        sy();
        break;
      } catch (u) {
        Rm(e, u);
      }
    while (!0);
    if ((Ss(), (ot = o), (Fc.current = a), Nt !== null)) throw Error(i(261));
    return (Ut = null), (Kt = 0), It;
  }
  function sy() {
    for (; Nt !== null; ) Pm(Nt);
  }
  function uy() {
    for (; Nt !== null && !nd(); ) Pm(Nt);
  }
  function Pm(e) {
    var t = zm(e.alternate, e, zr);
    (e.memoizedProps = e.pendingProps), t === null ? Tm(e) : (Nt = t), (op.current = null);
  }
  function Tm(e) {
    var t = e;
    do {
      var o = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((o = ty(o, t, zr)), o !== null)) {
          Nt = o;
          return;
        }
      } else {
        if (((o = ry(o, t)), o !== null)) {
          (o.flags &= 32767), (Nt = o);
          return;
        }
        if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (It = 6), (Nt = null);
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Nt = t;
        return;
      }
      Nt = t = e;
    } while (t !== null);
    It === 0 && (It = 5);
  }
  function Bi(e, t, o) {
    var a = lt,
      u = Yr.transition;
    try {
      (Yr.transition = null), (lt = 1), cy(e, t, o, a);
    } finally {
      (Yr.transition = u), (lt = a);
    }
    return null;
  }
  function cy(e, t, o, a) {
    do Ya();
    while (Zo !== null);
    if ((ot & 6) !== 0) throw Error(i(327));
    o = e.finishedWork;
    var u = e.finishedLanes;
    if (o === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), o === e.current)) throw Error(i(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var p = o.lanes | o.childLanes;
    if (
      (fd(e, p),
      e === Ut && ((Nt = Ut = null), (Kt = 0)),
      ((o.subtreeFlags & 2064) === 0 && (o.flags & 2064) === 0) ||
        Uc ||
        ((Uc = !0),
        Nm(la, function () {
          return Ya(), null;
        })),
      (p = (o.flags & 15990) !== 0),
      (o.subtreeFlags & 15990) !== 0 || p)
    ) {
      (p = Yr.transition), (Yr.transition = null);
      var y = lt;
      lt = 1;
      var C = ot;
      (ot |= 4),
        (op.current = null),
        oy(e, o),
        bm(o, e),
        $a(Lo),
        (To = !!za),
        (Lo = za = null),
        (e.current = o),
        iy(o),
        ju(),
        (ot = C),
        (lt = y),
        (Yr.transition = p);
    } else e.current = o;
    if (
      (Uc && ((Uc = !1), (Zo = e), (Vc = u)),
      (p = e.pendingLanes),
      p === 0 && (Qo = null),
      Eo(o.stateNode),
      wr(e, bt()),
      t !== null)
    )
      for (a = e.onRecoverableError, o = 0; o < t.length; o++)
        (u = t[o]), a(u.value, { componentStack: u.stack, digest: u.digest });
    if (Bc) throw ((Bc = !1), (e = lp), (lp = null), e);
    return (
      (Vc & 1) !== 0 && e.tag !== 0 && Ya(),
      (p = e.pendingLanes),
      (p & 1) !== 0 ? (e === sp ? Fs++ : ((Fs = 0), (sp = e))) : (Fs = 0),
      Dn(),
      null
    );
  }
  function Ya() {
    if (Zo !== null) {
      var e = Du(Vc),
        t = Yr.transition,
        o = lt;
      try {
        if (((Yr.transition = null), (lt = 16 > e ? 16 : e), Zo === null)) var a = !1;
        else {
          if (((e = Zo), (Zo = null), (Vc = 0), (ot & 6) !== 0)) throw Error(i(331));
          var u = ot;
          for (ot |= 4, Ce = e.current; Ce !== null; ) {
            var p = Ce,
              y = p.child;
            if ((Ce.flags & 16) !== 0) {
              var C = p.deletions;
              if (C !== null) {
                for (var T = 0; T < C.length; T++) {
                  var G = C[T];
                  for (Ce = G; Ce !== null; ) {
                    var ne = Ce;
                    switch (ne.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Is(8, ne, p);
                    }
                    var ie = ne.child;
                    if (ie !== null) (ie.return = ne), (Ce = ie);
                    else
                      for (; Ce !== null; ) {
                        ne = Ce;
                        var re = ne.sibling,
                          ke = ne.return;
                        if ((mm(ne), ne === G)) {
                          Ce = null;
                          break;
                        }
                        if (re !== null) {
                          (re.return = ke), (Ce = re);
                          break;
                        }
                        Ce = ke;
                      }
                  }
                }
                var $e = p.alternate;
                if ($e !== null) {
                  var _e = $e.child;
                  if (_e !== null) {
                    $e.child = null;
                    do {
                      var Tt = _e.sibling;
                      (_e.sibling = null), (_e = Tt);
                    } while (_e !== null);
                  }
                }
                Ce = p;
              }
            }
            if ((p.subtreeFlags & 2064) !== 0 && y !== null) (y.return = p), (Ce = y);
            else
              e: for (; Ce !== null; ) {
                if (((p = Ce), (p.flags & 2048) !== 0))
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Is(9, p, p.return);
                  }
                var W = p.sibling;
                if (W !== null) {
                  (W.return = p.return), (Ce = W);
                  break e;
                }
                Ce = p.return;
              }
          }
          var L = e.current;
          for (Ce = L; Ce !== null; ) {
            y = Ce;
            var B = y.child;
            if ((y.subtreeFlags & 2064) !== 0 && B !== null) (B.return = y), (Ce = B);
            else
              e: for (y = L; Ce !== null; ) {
                if (((C = Ce), (C.flags & 2048) !== 0))
                  try {
                    switch (C.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ac(9, C);
                    }
                  } catch (Pe) {
                    Et(C, C.return, Pe);
                  }
                if (C === y) {
                  Ce = null;
                  break e;
                }
                var le = C.sibling;
                if (le !== null) {
                  (le.return = C.return), (Ce = le);
                  break e;
                }
                Ce = C.return;
              }
          }
          if (((ot = u), Dn(), mr && typeof mr.onPostCommitFiberRoot == "function"))
            try {
              mr.onPostCommitFiberRoot(cn, e);
            } catch {}
          a = !0;
        }
        return a;
      } finally {
        (lt = o), (Yr.transition = t);
      }
    }
    return !1;
  }
  function Om(e, t, o) {
    (t = Ga(o, t)),
      (t = Xh(e, t, 1)),
      (e = yn(e, t, 1)),
      (t = cr()),
      e !== null && (hi(e, 1, t), wr(e, t));
  }
  function Et(e, t, o) {
    if (e.tag === 3) Om(e, e, o);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Om(t, e, o);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" && (Qo === null || !Qo.has(a)))
          ) {
            (e = Ga(o, e)),
              (e = Yh(t, e, 1)),
              (t = yn(t, e, 1)),
              (e = cr()),
              t !== null && (hi(t, 1, e), wr(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function fy(e, t, o) {
    var a = e.pingCache;
    a !== null && a.delete(t),
      (t = cr()),
      (e.pingedLanes |= e.suspendedLanes & o),
      Ut === e &&
        (Kt & o) === o &&
        (It === 4 || (It === 3 && (Kt & 130023424) === Kt && 500 > bt() - ap)
          ? Wi(e, 0)
          : (ip |= o)),
      wr(e, t);
  }
  function Mm(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = pi), (pi <<= 1), (pi & 130023424) === 0 && (pi = 4194304)));
    var o = cr();
    (e = gn(e, t)), e !== null && (hi(e, t, o), wr(e, o));
  }
  function dy(e) {
    var t = e.memoizedState,
      o = 0;
    t !== null && (o = t.retryLane), Mm(e, o);
  }
  function py(e, t) {
    var o = 0;
    switch (e.tag) {
      case 13:
        var a = e.stateNode,
          u = e.memoizedState;
        u !== null && (o = u.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      default:
        throw Error(i(314));
    }
    a !== null && a.delete(t), Mm(e, o);
  }
  var zm;
  zm = function (e, t, o) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Zt.current) xr = !0;
      else {
        if ((e.lanes & o) === 0 && (t.flags & 128) === 0) return (xr = !1), ey(e, t, o);
        xr = (e.flags & 131072) !== 0;
      }
    else (xr = !1), rt && (t.flags & 1048576) !== 0 && Rc(t, mn, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var a = t.type;
        Ic(e, t), (e = t.pendingProps);
        var u = Ao(t, Bt.current);
        Go(t, o), (u = we(null, t, a, e, u, o));
        var p = We();
        return (
          (t.flags |= 1),
          typeof u == "object" &&
          u !== null &&
          typeof u.render == "function" &&
          u.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Jt(a) ? ((p = !0), Fo(t)) : (p = !1),
              (t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null),
              Rs(t),
              (u.updater = Ba),
              (t.stateNode = u),
              (u._reactInternals = t),
              Ua(t, a, e, o),
              (t = Kd(null, t, a, !0, p, o)))
            : ((t.tag = 0), rt && p && bs(t), ur(null, t, u, o), (t = t.child)),
          t
        );
      case 16:
        a = t.elementType;
        e: {
          switch (
            (Ic(e, t),
            (e = t.pendingProps),
            (u = a._init),
            (a = u(a._payload)),
            (t.type = a),
            (u = t.tag = my(a)),
            (e = Or(a, e)),
            u)
          ) {
            case 0:
              t = qd(null, t, a, e, o);
              break e;
            case 1:
              t = im(null, t, a, e, o);
              break e;
            case 11:
              t = em(null, t, a, e, o);
              break e;
            case 14:
              t = tm(null, t, a, Or(a.type, e), o);
              break e;
          }
          throw Error(i(306, a, ""));
        }
        return t;
      case 0:
        return (
          (a = t.type),
          (u = t.pendingProps),
          (u = t.elementType === a ? u : Or(a, u)),
          qd(e, t, a, u, o)
        );
      case 1:
        return (
          (a = t.type),
          (u = t.pendingProps),
          (u = t.elementType === a ? u : Or(a, u)),
          im(e, t, a, u, o)
        );
      case 3:
        e: {
          if ((am(t), e === null)) throw Error(i(387));
          (a = t.pendingProps), (p = t.memoizedState), (u = p.element), _s(e, t), Mi(t, a, null, o);
          var y = t.memoizedState;
          if (((a = y.element), p.isDehydrated))
            if (
              ((p = {
                element: a,
                isDehydrated: !1,
                cache: y.cache,
                pendingSuspenseBoundaries: y.pendingSuspenseBoundaries,
                transitions: y.transitions,
              }),
              (t.updateQueue.baseState = p),
              (t.memoizedState = p),
              t.flags & 256)
            ) {
              (u = Ga(Error(i(423)), t)), (t = lm(e, t, a, o, u));
              break e;
            } else if (a !== u) {
              (u = Ga(Error(i(424)), t)), (t = lm(e, t, a, o, u));
              break e;
            } else
              for (
                Ct = hn(t.stateNode.containerInfo.firstChild),
                  yt = t,
                  rt = !0,
                  Tr = null,
                  o = Nc(t, null, a, o),
                  t.child = o;
                o;

              )
                (o.flags = (o.flags & -3) | 4096), (o = o.sibling);
          else {
            if ((Vo(), a === u)) {
              t = ho(e, t, o);
              break e;
            }
            ur(e, t, a, o);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          zs(t),
          e === null && ks(t),
          (a = t.type),
          (u = t.pendingProps),
          (p = e !== null ? e.memoizedProps : null),
          (y = u.children),
          Na(a, u) ? (y = null) : p !== null && Na(a, p) && (t.flags |= 32),
          om(e, t),
          ur(e, t, y, o),
          t.child
        );
      case 6:
        return e === null && ks(t), null;
      case 13:
        return sm(e, t, o);
      case 4:
        return (
          Di(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = qo(t, null, a, o)) : ur(e, t, a, o),
          t.child
        );
      case 11:
        return (
          (a = t.type),
          (u = t.pendingProps),
          (u = t.elementType === a ? u : Or(a, u)),
          em(e, t, a, u, o)
        );
      case 7:
        return ur(e, t, t.pendingProps, o), t.child;
      case 8:
        return ur(e, t, t.pendingProps.children, o), t.child;
      case 12:
        return ur(e, t, t.pendingProps.children, o), t.child;
      case 10:
        e: {
          if (
            ((a = t.type._context),
            (u = t.pendingProps),
            (p = t.memoizedProps),
            (y = u.value),
            ht(Aa, a._currentValue),
            (a._currentValue = y),
            p !== null)
          )
            if (lr(p.value, y)) {
              if (p.children === u.children && !Zt.current) {
                t = ho(e, t, o);
                break e;
              }
            } else
              for (p = t.child, p !== null && (p.return = t); p !== null; ) {
                var C = p.dependencies;
                if (C !== null) {
                  y = p.child;
                  for (var T = C.firstContext; T !== null; ) {
                    if (T.context === a) {
                      if (p.tag === 1) {
                        (T = Hr(-1, o & -o)), (T.tag = 2);
                        var G = p.updateQueue;
                        if (G !== null) {
                          G = G.shared;
                          var ne = G.pending;
                          ne === null ? (T.next = T) : ((T.next = ne.next), (ne.next = T)),
                            (G.pending = T);
                        }
                      }
                      (p.lanes |= o),
                        (T = p.alternate),
                        T !== null && (T.lanes |= o),
                        $s(p.return, o, t),
                        (C.lanes |= o);
                      break;
                    }
                    T = T.next;
                  }
                } else if (p.tag === 10) y = p.type === t.type ? null : p.child;
                else if (p.tag === 18) {
                  if (((y = p.return), y === null)) throw Error(i(341));
                  (y.lanes |= o),
                    (C = y.alternate),
                    C !== null && (C.lanes |= o),
                    $s(y, o, t),
                    (y = p.sibling);
                } else y = p.child;
                if (y !== null) y.return = p;
                else
                  for (y = p; y !== null; ) {
                    if (y === t) {
                      y = null;
                      break;
                    }
                    if (((p = y.sibling), p !== null)) {
                      (p.return = y.return), (y = p);
                      break;
                    }
                    y = y.return;
                  }
                p = y;
              }
          ur(e, t, u.children, o), (t = t.child);
        }
        return t;
      case 9:
        return (
          (u = t.type),
          (a = t.pendingProps.children),
          Go(t, o),
          (u = gr(u)),
          (a = a(u)),
          (t.flags |= 1),
          ur(e, t, a, o),
          t.child
        );
      case 14:
        return (a = t.type), (u = Or(a, t.pendingProps)), (u = Or(a.type, u)), tm(e, t, a, u, o);
      case 15:
        return rm(e, t, t.type, t.pendingProps, o);
      case 17:
        return (
          (a = t.type),
          (u = t.pendingProps),
          (u = t.elementType === a ? u : Or(a, u)),
          Ic(e, t),
          (t.tag = 1),
          Jt(a) ? ((e = !0), Fo(t)) : (e = !1),
          Go(t, o),
          Os(t, a, u),
          Ua(t, a, u, o),
          Kd(null, t, a, !0, e, o)
        );
      case 19:
        return cm(e, t, o);
      case 22:
        return nm(e, t, o);
    }
    throw Error(i(156, t.tag));
  };
  function Nm(e, t) {
    return zl(e, t);
  }
  function hy(e, t, o, a) {
    (this.tag = e),
      (this.key = o),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Qr(e, t, o, a) {
    return new hy(e, t, o, a);
  }
  function hp(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function my(e) {
    if (typeof e == "function") return hp(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === ue)) return 11;
      if (e === me) return 14;
    }
    return 2;
  }
  function ti(e, t) {
    var o = e.alternate;
    return (
      o === null
        ? ((o = Qr(e.tag, t, e.key, e.mode)),
          (o.elementType = e.elementType),
          (o.type = e.type),
          (o.stateNode = e.stateNode),
          (o.alternate = e),
          (e.alternate = o))
        : ((o.pendingProps = t),
          (o.type = e.type),
          (o.flags = 0),
          (o.subtreeFlags = 0),
          (o.deletions = null)),
      (o.flags = e.flags & 14680064),
      (o.childLanes = e.childLanes),
      (o.lanes = e.lanes),
      (o.child = e.child),
      (o.memoizedProps = e.memoizedProps),
      (o.memoizedState = e.memoizedState),
      (o.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (o.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (o.sibling = e.sibling),
      (o.index = e.index),
      (o.ref = e.ref),
      o
    );
  }
  function Kc(e, t, o, a, u, p) {
    var y = 2;
    if (((a = e), typeof e == "function")) hp(e) && (y = 1);
    else if (typeof e == "string") y = 5;
    else
      e: switch (e) {
        case Q:
          return Ui(o.children, u, p, t);
        case ae:
          (y = 8), (u |= 8);
          break;
        case xe:
          return (e = Qr(12, o, t, u | 2)), (e.elementType = xe), (e.lanes = p), e;
        case fe:
          return (e = Qr(13, o, t, u)), (e.elementType = fe), (e.lanes = p), e;
        case ye:
          return (e = Qr(19, o, t, u)), (e.elementType = ye), (e.lanes = p), e;
        case se:
          return Xc(o, u, p, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case he:
                y = 10;
                break e;
              case Te:
                y = 9;
                break e;
              case ue:
                y = 11;
                break e;
              case me:
                y = 14;
                break e;
              case ce:
                (y = 16), (a = null);
                break e;
            }
          throw Error(i(130, e == null ? e : typeof e, ""));
      }
    return (t = Qr(y, o, t, u)), (t.elementType = e), (t.type = a), (t.lanes = p), t;
  }
  function Ui(e, t, o, a) {
    return (e = Qr(7, e, a, t)), (e.lanes = o), e;
  }
  function Xc(e, t, o, a) {
    return (
      (e = Qr(22, e, a, t)),
      (e.elementType = se),
      (e.lanes = o),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function mp(e, t, o) {
    return (e = Qr(6, e, null, t)), (e.lanes = o), e;
  }
  function vp(e, t, o) {
    return (
      (t = Qr(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = o),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function vy(e, t, o, a, u) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = fa(0)),
      (this.expirationTimes = fa(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = fa(0)),
      (this.identifierPrefix = a),
      (this.onRecoverableError = u),
      (this.mutableSourceEagerHydrationData = null);
  }
  function gp(e, t, o, a, u, p, y, C, T) {
    return (
      (e = new vy(e, t, o, C, T)),
      t === 1 ? ((t = 1), p === !0 && (t |= 8)) : (t = 0),
      (p = Qr(3, null, null, t)),
      (e.current = p),
      (p.stateNode = e),
      (p.memoizedState = {
        element: a,
        isDehydrated: o,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Rs(p),
      e
    );
  }
  function gy(e, t, o) {
    var a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: A,
      key: a == null ? null : "" + a,
      children: e,
      containerInfo: t,
      implementation: o,
    };
  }
  function Lm(e) {
    if (!e) return In;
    e = e._reactInternals;
    e: {
      if (Jn(e) !== e || e.tag !== 1) throw Error(i(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Jt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(i(171));
    }
    if (e.tag === 1) {
      var o = e.type;
      if (Jt(o)) return Cc(e, o, t);
    }
    return t;
  }
  function jm(e, t, o, a, u, p, y, C, T) {
    return (
      (e = gp(o, a, !0, e, u, p, y, C, T)),
      (e.context = Lm(null)),
      (o = e.current),
      (a = cr()),
      (u = Jo(o)),
      (p = Hr(a, u)),
      (p.callback = t ?? null),
      yn(o, p, u),
      (e.current.lanes = u),
      hi(e, u, a),
      wr(e, a),
      e
    );
  }
  function Yc(e, t, o, a) {
    var u = t.current,
      p = cr(),
      y = Jo(u);
    return (
      (o = Lm(o)),
      t.context === null ? (t.context = o) : (t.pendingContext = o),
      (t = Hr(p, y)),
      (t.payload = { element: e }),
      (a = a === void 0 ? null : a),
      a !== null && (t.callback = a),
      (e = yn(u, t, y)),
      e !== null && (Sn(e, u, y, p), Oi(e, u, y)),
      y
    );
  }
  function Qc(e) {
    return (e = e.current), e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function Im(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var o = e.retryLane;
      e.retryLane = o !== 0 && o < t ? o : t;
    }
  }
  function yp(e, t) {
    Im(e, t), (e = e.alternate) && Im(e, t);
  }
  function yy() {
    return null;
  }
  var Dm =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function xp(e) {
    this._internalRoot = e;
  }
  (Zc.prototype.render = xp.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(i(409));
      Yc(e, t, null, null);
    }),
    (Zc.prototype.unmount = xp.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          Fi(function () {
            Yc(null, e, null, null);
          }),
            (t[Qt] = null);
        }
      });
  function Zc(e) {
    this._internalRoot = e;
  }
  Zc.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Wu();
      e = { blockedOn: null, target: e, priority: t };
      for (var o = 0; o < ir.length && t !== 0 && t < ir[o].priority; o++);
      ir.splice(o, 0, e), o === 0 && pa(e);
    }
  };
  function bp(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Jc(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Am() {}
  function xy(e, t, o, a, u) {
    if (u) {
      if (typeof a == "function") {
        var p = a;
        a = function () {
          var G = Qc(y);
          p.call(G);
        };
      }
      var y = jm(t, a, e, 0, null, !1, !1, "", Am);
      return (
        (e._reactRootContainer = y),
        (e[Qt] = y.current),
        _r(e.nodeType === 8 ? e.parentNode : e),
        Fi(),
        y
      );
    }
    for (; (u = e.lastChild); ) e.removeChild(u);
    if (typeof a == "function") {
      var C = a;
      a = function () {
        var G = Qc(T);
        C.call(G);
      };
    }
    var T = gp(e, 0, !1, null, null, !1, !1, "", Am);
    return (
      (e._reactRootContainer = T),
      (e[Qt] = T.current),
      _r(e.nodeType === 8 ? e.parentNode : e),
      Fi(function () {
        Yc(t, T, o, a);
      }),
      T
    );
  }
  function ef(e, t, o, a, u) {
    var p = o._reactRootContainer;
    if (p) {
      var y = p;
      if (typeof u == "function") {
        var C = u;
        u = function () {
          var T = Qc(y);
          C.call(T);
        };
      }
      Yc(t, y, e, u);
    } else y = xy(o, t, e, u, a);
    return Qc(y);
  }
  (Au = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var o = Ro(t.pendingLanes);
          o !== 0 && (Il(t, o | 1), wr(t, bt()), (ot & 6) === 0 && ((Xa = bt() + 500), Dn()));
        }
        break;
      case 13:
        Fi(function () {
          var a = gn(e, 1);
          if (a !== null) {
            var u = cr();
            Sn(a, e, 1, u);
          }
        }),
          yp(e, 1);
    }
  }),
    (Dl = function (e) {
      if (e.tag === 13) {
        var t = gn(e, 134217728);
        if (t !== null) {
          var o = cr();
          Sn(t, e, 134217728, o);
        }
        yp(e, 134217728);
      }
    }),
    (Fu = function (e) {
      if (e.tag === 13) {
        var t = Jo(e),
          o = gn(e, t);
        if (o !== null) {
          var a = cr();
          Sn(o, e, t, a);
        }
        yp(e, t);
      }
    }),
    (Wu = function () {
      return lt;
    }),
    (Bu = function (e, t) {
      var o = lt;
      try {
        return (lt = e), t();
      } finally {
        lt = o;
      }
    }),
    (_l = function (e, t, o) {
      switch (t) {
        case "input":
          if ((_n(e, o), (t = o.name), o.type === "radio" && t != null)) {
            for (o = e; o.parentNode; ) o = o.parentNode;
            for (
              o = o.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                t = 0;
              t < o.length;
              t++
            ) {
              var a = o[t];
              if (a !== e && a.form === e.form) {
                var u = Ei(a);
                if (!u) throw Error(i(90));
                bo(a), _n(a, u);
              }
            }
          }
          break;
        case "textarea":
          pr(e, o);
          break;
        case "select":
          (t = o.value), t != null && Ft(e, !!o.multiple, t, !1);
      }
    }),
    (_u = fp),
    (Pu = Fi);
  var by = { usingClientEntryPoint: !1, Events: [Vr, Io, Ei, Eu, Ru, fp] },
    Ws = {
      findFiberByHostInstance: Ln,
      bundleType: 0,
      version: "18.2.0",
      rendererPackageName: "react-dom",
    },
    wy = {
      bundleType: Ws.bundleType,
      version: Ws.version,
      rendererPackageName: Ws.rendererPackageName,
      rendererConfig: Ws.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: V.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Ml(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Ws.findFiberByHostInstance || yy,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var tf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!tf.isDisabled && tf.supportsFiber)
      try {
        (cn = tf.inject(wy)), (mr = tf);
      } catch {}
  }
  return (
    (kr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = by),
    (kr.createPortal = function (e, t) {
      var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!bp(t)) throw Error(i(200));
      return gy(e, t, null, o);
    }),
    (kr.createRoot = function (e, t) {
      if (!bp(e)) throw Error(i(299));
      var o = !1,
        a = "",
        u = Dm;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (o = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (u = t.onRecoverableError)),
        (t = gp(e, 1, !1, null, null, o, !1, a, u)),
        (e[Qt] = t.current),
        _r(e.nodeType === 8 ? e.parentNode : e),
        new xp(t)
      );
    }),
    (kr.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(i(188))
          : ((e = Object.keys(e).join(",")), Error(i(268, e)));
      return (e = Ml(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (kr.flushSync = function (e) {
      return Fi(e);
    }),
    (kr.hydrate = function (e, t, o) {
      if (!Jc(t)) throw Error(i(200));
      return ef(null, e, t, !0, o);
    }),
    (kr.hydrateRoot = function (e, t, o) {
      if (!bp(e)) throw Error(i(405));
      var a = (o != null && o.hydratedSources) || null,
        u = !1,
        p = "",
        y = Dm;
      if (
        (o != null &&
          (o.unstable_strictMode === !0 && (u = !0),
          o.identifierPrefix !== void 0 && (p = o.identifierPrefix),
          o.onRecoverableError !== void 0 && (y = o.onRecoverableError)),
        (t = jm(t, null, e, 1, o ?? null, u, !1, p, y)),
        (e[Qt] = t.current),
        _r(e),
        a)
      )
        for (e = 0; e < a.length; e++)
          (o = a[e]),
            (u = o._getVersion),
            (u = u(o._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [o, u])
              : t.mutableSourceEagerHydrationData.push(o, u);
      return new Zc(t);
    }),
    (kr.render = function (e, t, o) {
      if (!Jc(t)) throw Error(i(200));
      return ef(null, e, t, !1, o);
    }),
    (kr.unmountComponentAtNode = function (e) {
      if (!Jc(e)) throw Error(i(40));
      return e._reactRootContainer
        ? (Fi(function () {
            ef(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[Qt] = null);
            });
          }),
          !0)
        : !1;
    }),
    (kr.unstable_batchedUpdates = fp),
    (kr.unstable_renderSubtreeIntoContainer = function (e, t, o, a) {
      if (!Jc(o)) throw Error(i(200));
      if (e == null || e._reactInternals === void 0) throw Error(i(38));
      return ef(e, t, o, !1, a);
    }),
    (kr.version = "18.2.0-next-9e3b772b8-20220608"),
    kr
  );
}
var qm;
function W0() {
  if (qm) return Sp.exports;
  qm = 1;
  function r() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (n) {
        console.error(n);
      }
  }
  return r(), (Sp.exports = Py()), Sp.exports;
}
var Km;
function Ty() {
  if (Km) return rf;
  Km = 1;
  var r = W0();
  return (rf.createRoot = r.createRoot), (rf.hydrateRoot = r.hydrateRoot), rf;
}
var Oy = Ty();
function su() {
  return (
    (su = Object.assign
      ? Object.assign.bind()
      : function (r) {
          for (var n = 1; n < arguments.length; n++) {
            var i = arguments[n];
            for (var l in i) Object.prototype.hasOwnProperty.call(i, l) && (r[l] = i[l]);
          }
          return r;
        }),
    su.apply(this, arguments)
  );
}
var ai;
(function (r) {
  (r.Pop = "POP"), (r.Push = "PUSH"), (r.Replace = "REPLACE");
})(ai || (ai = {}));
const Xm = "popstate";
function My(r) {
  r === void 0 && (r = {});
  function n(l, s) {
    let { pathname: c, search: f, hash: m } = l.location;
    return Qp(
      "",
      { pathname: c, search: f, hash: m },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || "default"
    );
  }
  function i(l, s) {
    return typeof s == "string" ? s : xf(s);
  }
  return Ny(n, i, null, r);
}
function jt(r, n) {
  if (r === !1 || r === null || typeof r > "u") throw new Error(n);
}
function mh(r, n) {
  if (!r) {
    typeof console < "u" && console.warn(n);
    try {
      throw new Error(n);
    } catch {}
  }
}
function zy() {
  return Math.random().toString(36).substr(2, 8);
}
function Ym(r, n) {
  return { usr: r.state, key: r.key, idx: n };
}
function Qp(r, n, i, l) {
  return (
    i === void 0 && (i = null),
    su(
      { pathname: typeof r == "string" ? r : r.pathname, search: "", hash: "" },
      typeof n == "string" ? wl(n) : n,
      { state: i, key: (n && n.key) || l || zy() }
    )
  );
}
function xf(r) {
  let { pathname: n = "/", search: i = "", hash: l = "" } = r;
  return (
    i && i !== "?" && (n += i.charAt(0) === "?" ? i : "?" + i),
    l && l !== "#" && (n += l.charAt(0) === "#" ? l : "#" + l),
    n
  );
}
function wl(r) {
  let n = {};
  if (r) {
    let i = r.indexOf("#");
    i >= 0 && ((n.hash = r.substr(i)), (r = r.substr(0, i)));
    let l = r.indexOf("?");
    l >= 0 && ((n.search = r.substr(l)), (r = r.substr(0, l))), r && (n.pathname = r);
  }
  return n;
}
function Ny(r, n, i, l) {
  l === void 0 && (l = {});
  let { window: s = document.defaultView, v5Compat: c = !1 } = l,
    f = s.history,
    m = ai.Pop,
    v = null,
    x = w();
  x == null && ((x = 0), f.replaceState(su({}, f.state, { idx: x }), ""));
  function w() {
    return (f.state || { idx: null }).idx;
  }
  function k() {
    m = ai.Pop;
    let O = w(),
      q = O == null ? null : O - x;
    (x = O), v && v({ action: m, location: b.location, delta: q });
  }
  function E(O, q) {
    m = ai.Push;
    let K = Qp(b.location, O, q);
    x = w() + 1;
    let X = Ym(K, x),
      V = b.createHref(K);
    try {
      f.pushState(X, "", V);
    } catch {
      s.location.assign(V);
    }
    c && v && v({ action: m, location: b.location, delta: 1 });
  }
  function j(O, q) {
    m = ai.Replace;
    let K = Qp(b.location, O, q);
    x = w();
    let X = Ym(K, x),
      V = b.createHref(K);
    f.replaceState(X, "", V), c && v && v({ action: m, location: b.location, delta: 0 });
  }
  function z(O) {
    let q = s.location.origin !== "null" ? s.location.origin : s.location.href,
      K = typeof O == "string" ? O : xf(O);
    return (
      jt(q, "No window.location.(origin|href) available to create URL for href: " + K),
      new URL(K, q)
    );
  }
  let b = {
    get action() {
      return m;
    },
    get location() {
      return r(s, f);
    },
    listen(O) {
      if (v) throw new Error("A history only accepts one active listener");
      return (
        s.addEventListener(Xm, k),
        (v = O),
        () => {
          s.removeEventListener(Xm, k), (v = null);
        }
      );
    },
    createHref(O) {
      return n(s, O);
    },
    createURL: z,
    encodeLocation(O) {
      let q = z(O);
      return { pathname: q.pathname, search: q.search, hash: q.hash };
    },
    push: E,
    replace: j,
    go(O) {
      return f.go(O);
    },
  };
  return b;
}
var Qm;
(function (r) {
  (r.data = "data"), (r.deferred = "deferred"), (r.redirect = "redirect"), (r.error = "error");
})(Qm || (Qm = {}));
function Ly(r, n, i) {
  i === void 0 && (i = "/");
  let l = typeof n == "string" ? wl(n) : n,
    s = vh(l.pathname || "/", i);
  if (s == null) return null;
  let c = B0(r);
  jy(c);
  let f = null;
  for (let m = 0; f == null && m < c.length; ++m) f = Hy(c[m], Ky(s));
  return f;
}
function B0(r, n, i, l) {
  n === void 0 && (n = []), i === void 0 && (i = []), l === void 0 && (l = "");
  let s = (c, f, m) => {
    let v = {
      relativePath: m === void 0 ? c.path || "" : m,
      caseSensitive: c.caseSensitive === !0,
      childrenIndex: f,
      route: c,
    };
    v.relativePath.startsWith("/") &&
      (jt(
        v.relativePath.startsWith(l),
        'Absolute route path "' +
          v.relativePath +
          '" nested under path ' +
          ('"' + l + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (v.relativePath = v.relativePath.slice(l.length)));
    let x = si([l, v.relativePath]),
      w = i.concat(v);
    c.children &&
      c.children.length > 0 &&
      (jt(
        c.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + x + '".')
      ),
      B0(c.children, n, w, x)),
      !(c.path == null && !c.index) && n.push({ path: x, score: Uy(x, c.index), routesMeta: w });
  };
  return (
    r.forEach((c, f) => {
      var m;
      if (c.path === "" || !((m = c.path) != null && m.includes("?"))) s(c, f);
      else for (let v of U0(c.path)) s(c, f, v);
    }),
    n
  );
}
function U0(r) {
  let n = r.split("/");
  if (n.length === 0) return [];
  let [i, ...l] = n,
    s = i.endsWith("?"),
    c = i.replace(/\?$/, "");
  if (l.length === 0) return s ? [c, ""] : [c];
  let f = U0(l.join("/")),
    m = [];
  return (
    m.push(...f.map((v) => (v === "" ? c : [c, v].join("/")))),
    s && m.push(...f),
    m.map((v) => (r.startsWith("/") && v === "" ? "/" : v))
  );
}
function jy(r) {
  r.sort((n, i) =>
    n.score !== i.score
      ? i.score - n.score
      : Vy(
          n.routesMeta.map((l) => l.childrenIndex),
          i.routesMeta.map((l) => l.childrenIndex)
        )
  );
}
const Iy = /^:\w+$/,
  Dy = 3,
  Ay = 2,
  Fy = 1,
  Wy = 10,
  By = -2,
  Zm = (r) => r === "*";
function Uy(r, n) {
  let i = r.split("/"),
    l = i.length;
  return (
    i.some(Zm) && (l += By),
    n && (l += Ay),
    i.filter((s) => !Zm(s)).reduce((s, c) => s + (Iy.test(c) ? Dy : c === "" ? Fy : Wy), l)
  );
}
function Vy(r, n) {
  return r.length === n.length && r.slice(0, -1).every((l, s) => l === n[s])
    ? r[r.length - 1] - n[n.length - 1]
    : 0;
}
function Hy(r, n) {
  let { routesMeta: i } = r,
    l = {},
    s = "/",
    c = [];
  for (let f = 0; f < i.length; ++f) {
    let m = i[f],
      v = f === i.length - 1,
      x = s === "/" ? n : n.slice(s.length) || "/",
      w = Gy({ path: m.relativePath, caseSensitive: m.caseSensitive, end: v }, x);
    if (!w) return null;
    Object.assign(l, w.params);
    let k = m.route;
    c.push({
      params: l,
      pathname: si([s, w.pathname]),
      pathnameBase: Zy(si([s, w.pathnameBase])),
      route: k,
    }),
      w.pathnameBase !== "/" && (s = si([s, w.pathnameBase]));
  }
  return c;
}
function Gy(r, n) {
  typeof r == "string" && (r = { path: r, caseSensitive: !1, end: !0 });
  let [i, l] = qy(r.path, r.caseSensitive, r.end),
    s = n.match(i);
  if (!s) return null;
  let c = s[0],
    f = c.replace(/(.)\/+$/, "$1"),
    m = s.slice(1);
  return {
    params: l.reduce((x, w, k) => {
      if (w === "*") {
        let E = m[k] || "";
        f = c.slice(0, c.length - E.length).replace(/(.)\/+$/, "$1");
      }
      return (x[w] = Xy(m[k] || "", w)), x;
    }, {}),
    pathname: c,
    pathnameBase: f,
    pattern: r,
  };
}
function qy(r, n, i) {
  n === void 0 && (n = !1),
    i === void 0 && (i = !0),
    mh(
      r === "*" || !r.endsWith("*") || r.endsWith("/*"),
      'Route path "' +
        r +
        '" will be treated as if it were ' +
        ('"' + r.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + r.replace(/\*$/, "/*") + '".')
    );
  let l = [],
    s =
      "^" +
      r
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (f, m) => (l.push(m), "/([^\\/]+)"));
  return (
    r.endsWith("*")
      ? (l.push("*"), (s += r === "*" || r === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : i
      ? (s += "\\/*$")
      : r !== "" && r !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s, n ? void 0 : "i"), l]
  );
}
function Ky(r) {
  try {
    return decodeURI(r);
  } catch (n) {
    return (
      mh(
        !1,
        'The URL path "' +
          r +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + n + ").")
      ),
      r
    );
  }
}
function Xy(r, n) {
  try {
    return decodeURIComponent(r);
  } catch (i) {
    return (
      mh(
        !1,
        'The value for the URL param "' +
          n +
          '" will not be decoded because' +
          (' the string "' + r + '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + i + ").")
      ),
      r
    );
  }
}
function vh(r, n) {
  if (n === "/") return r;
  if (!r.toLowerCase().startsWith(n.toLowerCase())) return null;
  let i = n.endsWith("/") ? n.length - 1 : n.length,
    l = r.charAt(i);
  return l && l !== "/" ? null : r.slice(i) || "/";
}
function Yy(r, n) {
  n === void 0 && (n = "/");
  let { pathname: i, search: l = "", hash: s = "" } = typeof r == "string" ? wl(r) : r;
  return { pathname: i ? (i.startsWith("/") ? i : Qy(i, n)) : n, search: Jy(l), hash: e1(s) };
}
function Qy(r, n) {
  let i = n.replace(/\/+$/, "").split("/");
  return (
    r.split("/").forEach((s) => {
      s === ".." ? i.length > 1 && i.pop() : s !== "." && i.push(s);
    }),
    i.length > 1 ? i.join("/") : "/"
  );
}
function Ep(r, n, i, l) {
  return (
    "Cannot include a '" +
    r +
    "' character in a manually specified " +
    ("`to." + n + "` field [" + JSON.stringify(l) + "].  Please separate it out to the ") +
    ("`to." + i + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function V0(r) {
  return r.filter((n, i) => i === 0 || (n.route.path && n.route.path.length > 0));
}
function H0(r, n, i, l) {
  l === void 0 && (l = !1);
  let s;
  typeof r == "string"
    ? (s = wl(r))
    : ((s = su({}, r)),
      jt(!s.pathname || !s.pathname.includes("?"), Ep("?", "pathname", "search", s)),
      jt(!s.pathname || !s.pathname.includes("#"), Ep("#", "pathname", "hash", s)),
      jt(!s.search || !s.search.includes("#"), Ep("#", "search", "hash", s)));
  let c = r === "" || s.pathname === "",
    f = c ? "/" : s.pathname,
    m;
  if (l || f == null) m = i;
  else {
    let k = n.length - 1;
    if (f.startsWith("..")) {
      let E = f.split("/");
      for (; E[0] === ".."; ) E.shift(), (k -= 1);
      s.pathname = E.join("/");
    }
    m = k >= 0 ? n[k] : "/";
  }
  let v = Yy(s, m),
    x = f && f !== "/" && f.endsWith("/"),
    w = (c || f === ".") && i.endsWith("/");
  return !v.pathname.endsWith("/") && (x || w) && (v.pathname += "/"), v;
}
const si = (r) => r.join("/").replace(/\/\/+/g, "/"),
  Zy = (r) => r.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Jy = (r) => (!r || r === "?" ? "" : r.startsWith("?") ? r : "?" + r),
  e1 = (r) => (!r || r === "#" ? "" : r.startsWith("#") ? r : "#" + r);
function t1(r) {
  return (
    r != null &&
    typeof r.status == "number" &&
    typeof r.statusText == "string" &&
    typeof r.internal == "boolean" &&
    "data" in r
  );
}
const G0 = ["post", "put", "patch", "delete"];
new Set(G0);
const r1 = ["get", ...G0];
new Set(r1);
const q0 = N.createContext(null),
  gh = N.createContext(null),
  gu = N.createContext(null),
  _f = N.createContext(null),
  kl = N.createContext({ outlet: null, matches: [] }),
  K0 = N.createContext(null);
function Zp() {
  return (
    (Zp = Object.assign
      ? Object.assign.bind()
      : function (r) {
          for (var n = 1; n < arguments.length; n++) {
            var i = arguments[n];
            for (var l in i) Object.prototype.hasOwnProperty.call(i, l) && (r[l] = i[l]);
          }
          return r;
        }),
    Zp.apply(this, arguments)
  );
}
function n1(r, n) {
  let { relative: i } = n === void 0 ? {} : n;
  Sl() || jt(!1);
  let { basename: l, navigator: s } = N.useContext(gu),
    { hash: c, pathname: f, search: m } = Y0(r, { relative: i }),
    v = f;
  return (
    l !== "/" && (v = f === "/" ? l : si([l, f])), s.createHref({ pathname: v, search: m, hash: c })
  );
}
function Sl() {
  return N.useContext(_f) != null;
}
function yu() {
  return Sl() || jt(!1), N.useContext(_f).location;
}
function X0() {
  Sl() || jt(!1);
  let { basename: r, navigator: n } = N.useContext(gu),
    { matches: i } = N.useContext(kl),
    { pathname: l } = yu(),
    s = JSON.stringify(V0(i).map((m) => m.pathnameBase)),
    c = N.useRef(!1);
  return (
    N.useEffect(() => {
      c.current = !0;
    }),
    N.useCallback(
      function (m, v) {
        if ((v === void 0 && (v = {}), !c.current)) return;
        if (typeof m == "number") {
          n.go(m);
          return;
        }
        let x = H0(m, JSON.parse(s), l, v.relative === "path");
        r !== "/" && (x.pathname = x.pathname === "/" ? r : si([r, x.pathname])),
          (v.replace ? n.replace : n.push)(x, v.state, v);
      },
      [r, n, s, l]
    )
  );
}
function Y0(r, n) {
  let { relative: i } = n === void 0 ? {} : n,
    { matches: l } = N.useContext(kl),
    { pathname: s } = yu(),
    c = JSON.stringify(V0(l).map((f) => f.pathnameBase));
  return N.useMemo(() => H0(r, JSON.parse(c), s, i === "path"), [r, c, s, i]);
}
function o1(r, n) {
  Sl() || jt(!1);
  let { navigator: i } = N.useContext(gu),
    l = N.useContext(gh),
    { matches: s } = N.useContext(kl),
    c = s[s.length - 1],
    f = c ? c.params : {};
  c && c.pathname;
  let m = c ? c.pathnameBase : "/";
  c && c.route;
  let v = yu(),
    x;
  if (n) {
    var w;
    let b = typeof n == "string" ? wl(n) : n;
    m === "/" || ((w = b.pathname) != null && w.startsWith(m)) || jt(!1), (x = b);
  } else x = v;
  let k = x.pathname || "/",
    E = m === "/" ? k : k.slice(m.length) || "/",
    j = Ly(r, { pathname: E }),
    z = s1(
      j &&
        j.map((b) =>
          Object.assign({}, b, {
            params: Object.assign({}, f, b.params),
            pathname: si([
              m,
              i.encodeLocation ? i.encodeLocation(b.pathname).pathname : b.pathname,
            ]),
            pathnameBase:
              b.pathnameBase === "/"
                ? m
                : si([
                    m,
                    i.encodeLocation ? i.encodeLocation(b.pathnameBase).pathname : b.pathnameBase,
                  ]),
          })
        ),
      s,
      l || void 0
    );
  return n && z
    ? N.createElement(
        _f.Provider,
        {
          value: {
            location: Zp({ pathname: "/", search: "", hash: "", state: null, key: "default" }, x),
            navigationType: ai.Pop,
          },
        },
        z
      )
    : z;
}
function i1() {
  let r = d1(),
    n = t1(r) ? r.status + " " + r.statusText : r instanceof Error ? r.message : JSON.stringify(r),
    i = r instanceof Error ? r.stack : null,
    s = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return N.createElement(
    N.Fragment,
    null,
    N.createElement("h2", null, "Unexpected Application Error!"),
    N.createElement("h3", { style: { fontStyle: "italic" } }, n),
    i ? N.createElement("pre", { style: s }, i) : null,
    null
  );
}
class a1 extends N.Component {
  constructor(n) {
    super(n), (this.state = { location: n.location, error: n.error });
  }
  static getDerivedStateFromError(n) {
    return { error: n };
  }
  static getDerivedStateFromProps(n, i) {
    return i.location !== n.location
      ? { error: n.error, location: n.location }
      : { error: n.error || i.error, location: i.location };
  }
  componentDidCatch(n, i) {
    console.error("React Router caught the following error during render", n, i);
  }
  render() {
    return this.state.error
      ? N.createElement(
          kl.Provider,
          { value: this.props.routeContext },
          N.createElement(K0.Provider, { value: this.state.error, children: this.props.component })
        )
      : this.props.children;
  }
}
function l1(r) {
  let { routeContext: n, match: i, children: l } = r,
    s = N.useContext(q0);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (i.route.errorElement || i.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = i.route.id),
    N.createElement(kl.Provider, { value: n }, l)
  );
}
function s1(r, n, i) {
  if ((n === void 0 && (n = []), r == null))
    if (i != null && i.errors) r = i.matches;
    else return null;
  let l = r,
    s = i?.errors;
  if (s != null) {
    let c = l.findIndex((f) => f.route.id && s?.[f.route.id]);
    c >= 0 || jt(!1), (l = l.slice(0, Math.min(l.length, c + 1)));
  }
  return l.reduceRight((c, f, m) => {
    let v = f.route.id ? s?.[f.route.id] : null,
      x = null;
    i &&
      (f.route.ErrorBoundary
        ? (x = N.createElement(f.route.ErrorBoundary, null))
        : f.route.errorElement
        ? (x = f.route.errorElement)
        : (x = N.createElement(i1, null)));
    let w = n.concat(l.slice(0, m + 1)),
      k = () => {
        let E = c;
        return (
          v
            ? (E = x)
            : f.route.Component
            ? (E = N.createElement(f.route.Component, null))
            : f.route.element && (E = f.route.element),
          N.createElement(l1, { match: f, routeContext: { outlet: c, matches: w }, children: E })
        );
      };
    return i && (f.route.ErrorBoundary || f.route.errorElement || m === 0)
      ? N.createElement(a1, {
          location: i.location,
          component: x,
          error: v,
          children: k(),
          routeContext: { outlet: null, matches: w },
        })
      : k();
  }, null);
}
var Jm;
(function (r) {
  (r.UseBlocker = "useBlocker"), (r.UseRevalidator = "useRevalidator");
})(Jm || (Jm = {}));
var bf;
(function (r) {
  (r.UseBlocker = "useBlocker"),
    (r.UseLoaderData = "useLoaderData"),
    (r.UseActionData = "useActionData"),
    (r.UseRouteError = "useRouteError"),
    (r.UseNavigation = "useNavigation"),
    (r.UseRouteLoaderData = "useRouteLoaderData"),
    (r.UseMatches = "useMatches"),
    (r.UseRevalidator = "useRevalidator");
})(bf || (bf = {}));
function u1(r) {
  let n = N.useContext(gh);
  return n || jt(!1), n;
}
function c1(r) {
  let n = N.useContext(kl);
  return n || jt(!1), n;
}
function f1(r) {
  let n = c1(),
    i = n.matches[n.matches.length - 1];
  return i.route.id || jt(!1), i.route.id;
}
function d1() {
  var r;
  let n = N.useContext(K0),
    i = u1(bf.UseRouteError),
    l = f1(bf.UseRouteError);
  return n || ((r = i.errors) == null ? void 0 : r[l]);
}
function p1(r) {
  let { to: n, replace: i, state: l, relative: s } = r;
  Sl() || jt(!1);
  let c = N.useContext(gh),
    f = X0();
  return (
    N.useEffect(() => {
      (c && c.navigation.state !== "idle") || f(n, { replace: i, state: l, relative: s });
    }),
    null
  );
}
function go(r) {
  jt(!1);
}
function h1(r) {
  let {
    basename: n = "/",
    children: i = null,
    location: l,
    navigationType: s = ai.Pop,
    navigator: c,
    static: f = !1,
  } = r;
  Sl() && jt(!1);
  let m = n.replace(/^\/*/, "/"),
    v = N.useMemo(() => ({ basename: m, navigator: c, static: f }), [m, c, f]);
  typeof l == "string" && (l = wl(l));
  let { pathname: x = "/", search: w = "", hash: k = "", state: E = null, key: j = "default" } = l,
    z = N.useMemo(() => {
      let b = vh(x, m);
      return b == null
        ? null
        : { location: { pathname: b, search: w, hash: k, state: E, key: j }, navigationType: s };
    }, [m, x, w, k, E, j, s]);
  return z == null
    ? null
    : N.createElement(
        gu.Provider,
        { value: v },
        N.createElement(_f.Provider, { children: i, value: z })
      );
}
function m1(r) {
  let { children: n, location: i } = r,
    l = N.useContext(q0),
    s = l && !n ? l.router.routes : Jp(n);
  return o1(s, i);
}
var ev;
(function (r) {
  (r[(r.pending = 0)] = "pending"), (r[(r.success = 1)] = "success"), (r[(r.error = 2)] = "error");
})(ev || (ev = {}));
new Promise(() => {});
function Jp(r, n) {
  n === void 0 && (n = []);
  let i = [];
  return (
    N.Children.forEach(r, (l, s) => {
      if (!N.isValidElement(l)) return;
      let c = [...n, s];
      if (l.type === N.Fragment) {
        i.push.apply(i, Jp(l.props.children, c));
        return;
      }
      l.type !== go && jt(!1), !l.props.index || !l.props.children || jt(!1);
      let f = {
        id: l.props.id || c.join("-"),
        caseSensitive: l.props.caseSensitive,
        element: l.props.element,
        Component: l.props.Component,
        index: l.props.index,
        path: l.props.path,
        loader: l.props.loader,
        action: l.props.action,
        errorElement: l.props.errorElement,
        ErrorBoundary: l.props.ErrorBoundary,
        hasErrorBoundary: l.props.ErrorBoundary != null || l.props.errorElement != null,
        shouldRevalidate: l.props.shouldRevalidate,
        handle: l.props.handle,
        lazy: l.props.lazy,
      };
      l.props.children && (f.children = Jp(l.props.children, c)), i.push(f);
    }),
    i
  );
}
function eh() {
  return (
    (eh = Object.assign
      ? Object.assign.bind()
      : function (r) {
          for (var n = 1; n < arguments.length; n++) {
            var i = arguments[n];
            for (var l in i) Object.prototype.hasOwnProperty.call(i, l) && (r[l] = i[l]);
          }
          return r;
        }),
    eh.apply(this, arguments)
  );
}
function v1(r, n) {
  if (r == null) return {};
  var i = {},
    l = Object.keys(r),
    s,
    c;
  for (c = 0; c < l.length; c++) (s = l[c]), !(n.indexOf(s) >= 0) && (i[s] = r[s]);
  return i;
}
function g1(r) {
  return !!(r.metaKey || r.altKey || r.ctrlKey || r.shiftKey);
}
function y1(r, n) {
  return r.button === 0 && (!n || n === "_self") && !g1(r);
}
const x1 = [
  "onClick",
  "relative",
  "reloadDocument",
  "replace",
  "state",
  "target",
  "to",
  "preventScrollReset",
];
function b1(r) {
  let { basename: n, children: i, window: l } = r,
    s = N.useRef();
  s.current == null && (s.current = My({ window: l, v5Compat: !0 }));
  let c = s.current,
    [f, m] = N.useState({ action: c.action, location: c.location });
  return (
    N.useLayoutEffect(() => c.listen(m), [c]),
    N.createElement(h1, {
      basename: n,
      children: i,
      location: f.location,
      navigationType: f.action,
      navigator: c,
    })
  );
}
const w1 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  k1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Cn = N.forwardRef(function (n, i) {
    let {
        onClick: l,
        relative: s,
        reloadDocument: c,
        replace: f,
        state: m,
        target: v,
        to: x,
        preventScrollReset: w,
      } = n,
      k = v1(n, x1),
      { basename: E } = N.useContext(gu),
      j,
      z = !1;
    if (typeof x == "string" && k1.test(x) && ((j = x), w1)) {
      let K = new URL(window.location.href),
        X = x.startsWith("//") ? new URL(K.protocol + x) : new URL(x),
        V = vh(X.pathname, E);
      X.origin === K.origin && V != null ? (x = V + X.search + X.hash) : (z = !0);
    }
    let b = n1(x, { relative: s }),
      O = S1(x, { replace: f, state: m, target: v, preventScrollReset: w, relative: s });
    function q(K) {
      l && l(K), K.defaultPrevented || O(K);
    }
    return N.createElement(
      "a",
      eh({}, k, { href: j || b, onClick: z || c ? l : q, ref: i, target: v })
    );
  });
var tv;
(function (r) {
  (r.UseScrollRestoration = "useScrollRestoration"),
    (r.UseSubmitImpl = "useSubmitImpl"),
    (r.UseFetcher = "useFetcher");
})(tv || (tv = {}));
var rv;
(function (r) {
  (r.UseFetchers = "useFetchers"), (r.UseScrollRestoration = "useScrollRestoration");
})(rv || (rv = {}));
function S1(r, n) {
  let {
      target: i,
      replace: l,
      state: s,
      preventScrollReset: c,
      relative: f,
    } = n === void 0 ? {} : n,
    m = X0(),
    v = yu(),
    x = Y0(r, { relative: f });
  return N.useCallback(
    (w) => {
      if (y1(w, i)) {
        w.preventDefault();
        let k = l !== void 0 ? l : xf(v) === xf(x);
        m(r, { replace: k, state: s, preventScrollReset: c, relative: f });
      }
    },
    [v, m, x, l, s, i, r, c, f]
  );
}
function Y() {
  return (
    (Y = Object.assign
      ? Object.assign.bind()
      : function (r) {
          for (var n = 1; n < arguments.length; n++) {
            var i = arguments[n];
            for (var l in i) ({}).hasOwnProperty.call(i, l) && (r[l] = i[l]);
          }
          return r;
        }),
    Y.apply(null, arguments)
  );
}
function ii(r) {
  if (typeof r != "object" || r === null) return !1;
  const n = Object.getPrototypeOf(r);
  return (
    (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) &&
    !(Symbol.toStringTag in r) &&
    !(Symbol.iterator in r)
  );
}
function Q0(r) {
  if (N.isValidElement(r) || !ii(r)) return r;
  const n = {};
  return (
    Object.keys(r).forEach((i) => {
      n[i] = Q0(r[i]);
    }),
    n
  );
}
function yo(r, n, i = { clone: !0 }) {
  const l = i.clone ? Y({}, r) : r;
  return (
    ii(r) &&
      ii(n) &&
      Object.keys(n).forEach((s) => {
        N.isValidElement(n[s])
          ? (l[s] = n[s])
          : ii(n[s]) && Object.prototype.hasOwnProperty.call(r, s) && ii(r[s])
          ? (l[s] = yo(r[s], n[s], i))
          : i.clone
          ? (l[s] = ii(n[s]) ? Q0(n[s]) : n[s])
          : (l[s] = n[s]);
      }),
    l
  );
}
var Rp = { exports: {} },
  _p,
  nv;
function C1() {
  if (nv) return _p;
  nv = 1;
  var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return (_p = r), _p;
}
var Pp, ov;
function $1() {
  if (ov) return Pp;
  ov = 1;
  var r = C1();
  function n() {}
  function i() {}
  return (
    (i.resetWarningCache = n),
    (Pp = function () {
      function l(f, m, v, x, w, k) {
        if (k !== r) {
          var E = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
          );
          throw ((E.name = "Invariant Violation"), E);
        }
      }
      l.isRequired = l;
      function s() {
        return l;
      }
      var c = {
        array: l,
        bigint: l,
        bool: l,
        func: l,
        number: l,
        object: l,
        string: l,
        symbol: l,
        any: l,
        arrayOf: s,
        element: l,
        elementType: l,
        instanceOf: s,
        node: l,
        objectOf: s,
        oneOf: s,
        oneOfType: s,
        shape: s,
        exact: s,
        checkPropTypes: i,
        resetWarningCache: n,
      };
      return (c.PropTypes = c), c;
    }),
    Pp
  );
}
var iv;
function E1() {
  return iv || ((iv = 1), (Rp.exports = $1()())), Rp.exports;
}
var R1 = E1();
const Ee = ui(R1);
function fl(r) {
  let n = "https://mui.com/production-error/?code=" + r;
  for (let i = 1; i < arguments.length; i += 1) n += "&args[]=" + encodeURIComponent(arguments[i]);
  return "Minified MUI error #" + r + "; visit " + n + " for the full message.";
}
function mt(r) {
  if (typeof r != "string") throw new Error(fl(7));
  return r.charAt(0).toUpperCase() + r.slice(1);
}
function _1(...r) {
  return r.reduce(
    (n, i) =>
      i == null
        ? n
        : function (...s) {
            n.apply(this, s), i.apply(this, s);
          },
    () => {}
  );
}
function P1(r, n = 166) {
  let i;
  function l(...s) {
    const c = () => {
      r.apply(this, s);
    };
    clearTimeout(i), (i = setTimeout(c, n));
  }
  return (
    (l.clear = () => {
      clearTimeout(i);
    }),
    l
  );
}
function T1(r, n) {
  return () => null;
}
function O1(r, n) {
  var i, l;
  return (
    N.isValidElement(r) &&
    n.indexOf(
      (i = r.type.muiName) != null
        ? i
        : (l = r.type) == null || (l = l._payload) == null || (l = l.value) == null
        ? void 0
        : l.muiName
    ) !== -1
  );
}
function wf(r) {
  return (r && r.ownerDocument) || document;
}
function M1(r) {
  return wf(r).defaultView || window;
}
function z1(r, n) {
  return () => null;
}
function kf(r, n) {
  typeof r == "function" ? r(n) : r && (r.current = n);
}
const Qi = typeof window < "u" ? N.useLayoutEffect : N.useEffect;
let av = 0;
function N1(r) {
  const [n, i] = N.useState(r),
    l = r || n;
  return (
    N.useEffect(() => {
      n == null && ((av += 1), i(`mui-${av}`));
    }, [n]),
    l
  );
}
const lv = Yp.useId;
function Z0(r) {
  if (lv !== void 0) {
    const n = lv();
    return r ?? n;
  }
  return N1(r);
}
function L1(r, n, i, l, s) {
  return null;
}
function j1({ controlled: r, default: n, name: i, state: l = "value" }) {
  const { current: s } = N.useRef(r !== void 0),
    [c, f] = N.useState(n),
    m = s ? r : c,
    v = N.useCallback((x) => {
      s || f(x);
    }, []);
  return [m, v];
}
function nu(r) {
  const n = N.useRef(r);
  return (
    Qi(() => {
      n.current = r;
    }),
    N.useRef((...i) => (0, n.current)(...i)).current
  );
}
function $n(...r) {
  return N.useMemo(
    () =>
      r.every((n) => n == null)
        ? null
        : (n) => {
            r.forEach((i) => {
              kf(i, n);
            });
          },
    r
  );
}
class yh {
  constructor() {
    (this.currentId = null),
      (this.clear = () => {
        this.currentId !== null && (clearTimeout(this.currentId), (this.currentId = null));
      }),
      (this.disposeEffect = () => this.clear);
  }
  static create() {
    return new yh();
  }
  start(n, i) {
    this.clear(),
      (this.currentId = setTimeout(() => {
        (this.currentId = null), i();
      }, n));
  }
}
let Pf = !0,
  th = !1;
const I1 = new yh(),
  D1 = {
    text: !0,
    search: !0,
    url: !0,
    tel: !0,
    email: !0,
    password: !0,
    number: !0,
    date: !0,
    month: !0,
    week: !0,
    time: !0,
    datetime: !0,
    "datetime-local": !0,
  };
function A1(r) {
  const { type: n, tagName: i } = r;
  return !!(
    (i === "INPUT" && D1[n] && !r.readOnly) ||
    (i === "TEXTAREA" && !r.readOnly) ||
    r.isContentEditable
  );
}
function F1(r) {
  r.metaKey || r.altKey || r.ctrlKey || (Pf = !0);
}
function Tp() {
  Pf = !1;
}
function W1() {
  this.visibilityState === "hidden" && th && (Pf = !0);
}
function B1(r) {
  r.addEventListener("keydown", F1, !0),
    r.addEventListener("mousedown", Tp, !0),
    r.addEventListener("pointerdown", Tp, !0),
    r.addEventListener("touchstart", Tp, !0),
    r.addEventListener("visibilitychange", W1, !0);
}
function U1(r) {
  const { target: n } = r;
  try {
    return n.matches(":focus-visible");
  } catch {}
  return Pf || A1(n);
}
function xh() {
  const r = N.useCallback((s) => {
      s != null && B1(s.ownerDocument);
    }, []),
    n = N.useRef(!1);
  function i() {
    return n.current
      ? ((th = !0),
        I1.start(100, () => {
          th = !1;
        }),
        (n.current = !1),
        !0)
      : !1;
  }
  function l(s) {
    return U1(s) ? ((n.current = !0), !0) : !1;
  }
  return { isFocusVisibleRef: n, onFocus: l, onBlur: i, ref: r };
}
function bh(r, n) {
  const i = Y({}, n);
  return (
    Object.keys(r).forEach((l) => {
      if (l.toString().match(/^(components|slots)$/)) i[l] = Y({}, r[l], i[l]);
      else if (l.toString().match(/^(componentsProps|slotProps)$/)) {
        const s = r[l] || {},
          c = n[l];
        (i[l] = {}),
          !c || !Object.keys(c)
            ? (i[l] = s)
            : !s || !Object.keys(s)
            ? (i[l] = c)
            : ((i[l] = Y({}, c)),
              Object.keys(s).forEach((f) => {
                i[l][f] = bh(s[f], c[f]);
              }));
      } else i[l] === void 0 && (i[l] = r[l]);
    }),
    i
  );
}
function Dr(r, n, i = void 0) {
  const l = {};
  return (
    Object.keys(r).forEach((s) => {
      l[s] = r[s]
        .reduce((c, f) => {
          if (f) {
            const m = n(f);
            m !== "" && c.push(m), i && i[f] && c.push(i[f]);
          }
          return c;
        }, [])
        .join(" ");
    }),
    l
  );
}
const sv = (r) => r,
  V1 = () => {
    let r = sv;
    return {
      configure(n) {
        r = n;
      },
      generate(n) {
        return r(n);
      },
      reset() {
        r = sv;
      },
    };
  },
  wh = V1(),
  H1 = {
    active: "active",
    checked: "checked",
    completed: "completed",
    disabled: "disabled",
    error: "error",
    expanded: "expanded",
    focused: "focused",
    focusVisible: "focusVisible",
    open: "open",
    readOnly: "readOnly",
    required: "required",
    selected: "selected",
  };
function Er(r, n, i = "Mui") {
  const l = H1[n];
  return l ? `${i}-${l}` : `${wh.generate(r)}-${n}`;
}
function Ar(r, n, i = "Mui") {
  const l = {};
  return (
    n.forEach((s) => {
      l[s] = Er(r, s, i);
    }),
    l
  );
}
function G1(r, n = Number.MIN_SAFE_INTEGER, i = Number.MAX_SAFE_INTEGER) {
  return Math.max(n, Math.min(r, i));
}
function tt(r, n) {
  if (r == null) return {};
  var i = {};
  for (var l in r)
    if ({}.hasOwnProperty.call(r, l)) {
      if (n.indexOf(l) !== -1) continue;
      i[l] = r[l];
    }
  return i;
}
const Zi = "$$material";
function J0(r) {
  var n = Object.create(null);
  return function (i) {
    return n[i] === void 0 && (n[i] = r(i)), n[i];
  };
}
var q1 =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  K1 = J0(function (r) {
    return (
      q1.test(r) || (r.charCodeAt(0) === 111 && r.charCodeAt(1) === 110 && r.charCodeAt(2) < 91)
    );
  });
function X1(r) {
  if (r.sheet) return r.sheet;
  for (var n = 0; n < document.styleSheets.length; n++)
    if (document.styleSheets[n].ownerNode === r) return document.styleSheets[n];
}
function Y1(r) {
  var n = document.createElement("style");
  return (
    n.setAttribute("data-emotion", r.key),
    r.nonce !== void 0 && n.setAttribute("nonce", r.nonce),
    n.appendChild(document.createTextNode("")),
    n.setAttribute("data-s", ""),
    n
  );
}
var Q1 = (function () {
    function r(i) {
      var l = this;
      (this._insertTag = function (s) {
        var c;
        l.tags.length === 0
          ? l.insertionPoint
            ? (c = l.insertionPoint.nextSibling)
            : l.prepend
            ? (c = l.container.firstChild)
            : (c = l.before)
          : (c = l.tags[l.tags.length - 1].nextSibling),
          l.container.insertBefore(s, c),
          l.tags.push(s);
      }),
        (this.isSpeedy = i.speedy === void 0 ? !0 : i.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = i.nonce),
        (this.key = i.key),
        (this.container = i.container),
        (this.prepend = i.prepend),
        (this.insertionPoint = i.insertionPoint),
        (this.before = null);
    }
    var n = r.prototype;
    return (
      (n.hydrate = function (l) {
        l.forEach(this._insertTag);
      }),
      (n.insert = function (l) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Y1(this));
        var s = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var c = X1(s);
          try {
            c.insertRule(l, c.cssRules.length);
          } catch {}
        } else s.appendChild(document.createTextNode(l));
        this.ctr++;
      }),
      (n.flush = function () {
        this.tags.forEach(function (l) {
          var s;
          return (s = l.parentNode) == null ? void 0 : s.removeChild(l);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      r
    );
  })(),
  or = "-ms-",
  Sf = "-moz-",
  st = "-webkit-",
  eg = "comm",
  kh = "rule",
  Sh = "decl",
  Z1 = "@import",
  tg = "@keyframes",
  J1 = "@layer",
  e2 = Math.abs,
  Tf = String.fromCharCode,
  t2 = Object.assign;
function r2(r, n) {
  return Yt(r, 0) ^ 45
    ? (((((((n << 2) ^ Yt(r, 0)) << 2) ^ Yt(r, 1)) << 2) ^ Yt(r, 2)) << 2) ^ Yt(r, 3)
    : 0;
}
function rg(r) {
  return r.trim();
}
function n2(r, n) {
  return (r = n.exec(r)) ? r[0] : r;
}
function ut(r, n, i) {
  return r.replace(n, i);
}
function rh(r, n) {
  return r.indexOf(n);
}
function Yt(r, n) {
  return r.charCodeAt(n) | 0;
}
function uu(r, n, i) {
  return r.slice(n, i);
}
function Un(r) {
  return r.length;
}
function Ch(r) {
  return r.length;
}
function nf(r, n) {
  return n.push(r), r;
}
function o2(r, n) {
  return r.map(n).join("");
}
var Of = 1,
  dl = 1,
  ng = 0,
  $r = 0,
  Lt = 0,
  Cl = "";
function Mf(r, n, i, l, s, c, f) {
  return {
    value: r,
    root: n,
    parent: i,
    type: l,
    props: s,
    children: c,
    line: Of,
    column: dl,
    length: f,
    return: "",
  };
}
function Us(r, n) {
  return t2(Mf("", null, null, "", null, null, 0), r, { length: -r.length }, n);
}
function i2() {
  return Lt;
}
function a2() {
  return (Lt = $r > 0 ? Yt(Cl, --$r) : 0), dl--, Lt === 10 && ((dl = 1), Of--), Lt;
}
function jr() {
  return (Lt = $r < ng ? Yt(Cl, $r++) : 0), dl++, Lt === 10 && ((dl = 1), Of++), Lt;
}
function qn() {
  return Yt(Cl, $r);
}
function df() {
  return $r;
}
function xu(r, n) {
  return uu(Cl, r, n);
}
function cu(r) {
  switch (r) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function og(r) {
  return (Of = dl = 1), (ng = Un((Cl = r))), ($r = 0), [];
}
function ig(r) {
  return (Cl = ""), r;
}
function pf(r) {
  return rg(xu($r - 1, nh(r === 91 ? r + 2 : r === 40 ? r + 1 : r)));
}
function l2(r) {
  for (; (Lt = qn()) && Lt < 33; ) jr();
  return cu(r) > 2 || cu(Lt) > 3 ? "" : " ";
}
function s2(r, n) {
  for (; --n && jr() && !(Lt < 48 || Lt > 102 || (Lt > 57 && Lt < 65) || (Lt > 70 && Lt < 97)); );
  return xu(r, df() + (n < 6 && qn() == 32 && jr() == 32));
}
function nh(r) {
  for (; jr(); )
    switch (Lt) {
      case r:
        return $r;
      case 34:
      case 39:
        r !== 34 && r !== 39 && nh(Lt);
        break;
      case 40:
        r === 41 && nh(r);
        break;
      case 92:
        jr();
        break;
    }
  return $r;
}
function u2(r, n) {
  for (; jr() && r + Lt !== 57; ) if (r + Lt === 84 && qn() === 47) break;
  return "/*" + xu(n, $r - 1) + "*" + Tf(r === 47 ? r : jr());
}
function c2(r) {
  for (; !cu(qn()); ) jr();
  return xu(r, $r);
}
function f2(r) {
  return ig(hf("", null, null, null, [""], (r = og(r)), 0, [0], r));
}
function hf(r, n, i, l, s, c, f, m, v) {
  for (
    var x = 0,
      w = 0,
      k = f,
      E = 0,
      j = 0,
      z = 0,
      b = 1,
      O = 1,
      q = 1,
      K = 0,
      X = "",
      V = s,
      D = c,
      A = l,
      Q = X;
    O;

  )
    switch (((z = K), (K = jr()))) {
      case 40:
        if (z != 108 && Yt(Q, k - 1) == 58) {
          rh((Q += ut(pf(K), "&", "&\f")), "&\f") != -1 && (q = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        Q += pf(K);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        Q += l2(z);
        break;
      case 92:
        Q += s2(df() - 1, 7);
        continue;
      case 47:
        switch (qn()) {
          case 42:
          case 47:
            nf(d2(u2(jr(), df()), n, i), v);
            break;
          default:
            Q += "/";
        }
        break;
      case 123 * b:
        m[x++] = Un(Q) * q;
      case 125 * b:
      case 59:
      case 0:
        switch (K) {
          case 0:
          case 125:
            O = 0;
          case 59 + w:
            q == -1 && (Q = ut(Q, /\f/g, "")),
              j > 0 &&
                Un(Q) - k &&
                nf(j > 32 ? cv(Q + ";", l, i, k - 1) : cv(ut(Q, " ", "") + ";", l, i, k - 2), v);
            break;
          case 59:
            Q += ";";
          default:
            if ((nf((A = uv(Q, n, i, x, w, s, m, X, (V = []), (D = []), k)), c), K === 123))
              if (w === 0) hf(Q, n, A, A, V, c, k, m, D);
              else
                switch (E === 99 && Yt(Q, 3) === 110 ? 100 : E) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    hf(
                      r,
                      A,
                      A,
                      l && nf(uv(r, A, A, 0, 0, s, m, X, s, (V = []), k), D),
                      s,
                      D,
                      k,
                      m,
                      l ? V : D
                    );
                    break;
                  default:
                    hf(Q, A, A, A, [""], D, 0, m, D);
                }
        }
        (x = w = j = 0), (b = q = 1), (X = Q = ""), (k = f);
        break;
      case 58:
        (k = 1 + Un(Q)), (j = z);
      default:
        if (b < 1) {
          if (K == 123) --b;
          else if (K == 125 && b++ == 0 && a2() == 125) continue;
        }
        switch (((Q += Tf(K)), K * b)) {
          case 38:
            q = w > 0 ? 1 : ((Q += "\f"), -1);
            break;
          case 44:
            (m[x++] = (Un(Q) - 1) * q), (q = 1);
            break;
          case 64:
            qn() === 45 && (Q += pf(jr())), (E = qn()), (w = k = Un((X = Q += c2(df())))), K++;
            break;
          case 45:
            z === 45 && Un(Q) == 2 && (b = 0);
        }
    }
  return c;
}
function uv(r, n, i, l, s, c, f, m, v, x, w) {
  for (var k = s - 1, E = s === 0 ? c : [""], j = Ch(E), z = 0, b = 0, O = 0; z < l; ++z)
    for (var q = 0, K = uu(r, k + 1, (k = e2((b = f[z])))), X = r; q < j; ++q)
      (X = rg(b > 0 ? E[q] + " " + K : ut(K, /&\f/g, E[q]))) && (v[O++] = X);
  return Mf(r, n, i, s === 0 ? kh : m, v, x, w);
}
function d2(r, n, i) {
  return Mf(r, n, i, eg, Tf(i2()), uu(r, 2, -2), 0);
}
function cv(r, n, i, l) {
  return Mf(r, n, i, Sh, uu(r, 0, l), uu(r, l + 1, -1), l);
}
function ll(r, n) {
  for (var i = "", l = Ch(r), s = 0; s < l; s++) i += n(r[s], s, r, n) || "";
  return i;
}
function p2(r, n, i, l) {
  switch (r.type) {
    case J1:
      if (r.children.length) break;
    case Z1:
    case Sh:
      return (r.return = r.return || r.value);
    case eg:
      return "";
    case tg:
      return (r.return = r.value + "{" + ll(r.children, l) + "}");
    case kh:
      r.value = r.props.join(",");
  }
  return Un((i = ll(r.children, l))) ? (r.return = r.value + "{" + i + "}") : "";
}
function h2(r) {
  var n = Ch(r);
  return function (i, l, s, c) {
    for (var f = "", m = 0; m < n; m++) f += r[m](i, l, s, c) || "";
    return f;
  };
}
function m2(r) {
  return function (n) {
    n.root || ((n = n.return) && r(n));
  };
}
var v2 = function (n, i, l) {
    for (var s = 0, c = 0; (s = c), (c = qn()), s === 38 && c === 12 && (i[l] = 1), !cu(c); ) jr();
    return xu(n, $r);
  },
  g2 = function (n, i) {
    var l = -1,
      s = 44;
    do
      switch (cu(s)) {
        case 0:
          s === 38 && qn() === 12 && (i[l] = 1), (n[l] += v2($r - 1, i, l));
          break;
        case 2:
          n[l] += pf(s);
          break;
        case 4:
          if (s === 44) {
            (n[++l] = qn() === 58 ? "&\f" : ""), (i[l] = n[l].length);
            break;
          }
        default:
          n[l] += Tf(s);
      }
    while ((s = jr()));
    return n;
  },
  y2 = function (n, i) {
    return ig(g2(og(n), i));
  },
  fv = new WeakMap(),
  x2 = function (n) {
    if (!(n.type !== "rule" || !n.parent || n.length < 1)) {
      for (
        var i = n.value, l = n.parent, s = n.column === l.column && n.line === l.line;
        l.type !== "rule";

      )
        if (((l = l.parent), !l)) return;
      if (!(n.props.length === 1 && i.charCodeAt(0) !== 58 && !fv.get(l)) && !s) {
        fv.set(n, !0);
        for (var c = [], f = y2(i, c), m = l.props, v = 0, x = 0; v < f.length; v++)
          for (var w = 0; w < m.length; w++, x++)
            n.props[x] = c[v] ? f[v].replace(/&\f/g, m[w]) : m[w] + " " + f[v];
      }
    }
  },
  b2 = function (n) {
    if (n.type === "decl") {
      var i = n.value;
      i.charCodeAt(0) === 108 && i.charCodeAt(2) === 98 && ((n.return = ""), (n.value = ""));
    }
  };
function ag(r, n) {
  switch (r2(r, n)) {
    case 5103:
      return st + "print-" + r + r;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return st + r + r;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return st + r + Sf + r + or + r + r;
    case 6828:
    case 4268:
      return st + r + or + r + r;
    case 6165:
      return st + r + or + "flex-" + r + r;
    case 5187:
      return st + r + ut(r, /(\w+).+(:[^]+)/, st + "box-$1$2" + or + "flex-$1$2") + r;
    case 5443:
      return st + r + or + "flex-item-" + ut(r, /flex-|-self/, "") + r;
    case 4675:
      return st + r + or + "flex-line-pack" + ut(r, /align-content|flex-|-self/, "") + r;
    case 5548:
      return st + r + or + ut(r, "shrink", "negative") + r;
    case 5292:
      return st + r + or + ut(r, "basis", "preferred-size") + r;
    case 6060:
      return st + "box-" + ut(r, "-grow", "") + st + r + or + ut(r, "grow", "positive") + r;
    case 4554:
      return st + ut(r, /([^-])(transform)/g, "$1" + st + "$2") + r;
    case 6187:
      return ut(ut(ut(r, /(zoom-|grab)/, st + "$1"), /(image-set)/, st + "$1"), r, "") + r;
    case 5495:
    case 3959:
      return ut(r, /(image-set\([^]*)/, st + "$1$`$1");
    case 4968:
      return (
        ut(
          ut(r, /(.+:)(flex-)?(.*)/, st + "box-pack:$3" + or + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        st +
        r +
        r
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ut(r, /(.+)-inline(.+)/, st + "$1$2") + r;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Un(r) - 1 - n > 6)
        switch (Yt(r, n + 1)) {
          case 109:
            if (Yt(r, n + 4) !== 45) break;
          case 102:
            return (
              ut(
                r,
                /(.+:)(.+)-([^]+)/,
                "$1" + st + "$2-$3$1" + Sf + (Yt(r, n + 3) == 108 ? "$3" : "$2-$3")
              ) + r
            );
          case 115:
            return ~rh(r, "stretch") ? ag(ut(r, "stretch", "fill-available"), n) + r : r;
        }
      break;
    case 4949:
      if (Yt(r, n + 1) !== 115) break;
    case 6444:
      switch (Yt(r, Un(r) - 3 - (~rh(r, "!important") && 10))) {
        case 107:
          return ut(r, ":", ":" + st) + r;
        case 101:
          return (
            ut(
              r,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                st +
                (Yt(r, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                st +
                "$2$3$1" +
                or +
                "$2box$3"
            ) + r
          );
      }
      break;
    case 5936:
      switch (Yt(r, n + 11)) {
        case 114:
          return st + r + or + ut(r, /[svh]\w+-[tblr]{2}/, "tb") + r;
        case 108:
          return st + r + or + ut(r, /[svh]\w+-[tblr]{2}/, "tb-rl") + r;
        case 45:
          return st + r + or + ut(r, /[svh]\w+-[tblr]{2}/, "lr") + r;
      }
      return st + r + or + r + r;
  }
  return r;
}
var w2 = function (n, i, l, s) {
    if (n.length > -1 && !n.return)
      switch (n.type) {
        case Sh:
          n.return = ag(n.value, n.length);
          break;
        case tg:
          return ll([Us(n, { value: ut(n.value, "@", "@" + st) })], s);
        case kh:
          if (n.length)
            return o2(n.props, function (c) {
              switch (n2(c, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return ll([Us(n, { props: [ut(c, /:(read-\w+)/, ":" + Sf + "$1")] })], s);
                case "::placeholder":
                  return ll(
                    [
                      Us(n, { props: [ut(c, /:(plac\w+)/, ":" + st + "input-$1")] }),
                      Us(n, { props: [ut(c, /:(plac\w+)/, ":" + Sf + "$1")] }),
                      Us(n, { props: [ut(c, /:(plac\w+)/, or + "input-$1")] }),
                    ],
                    s
                  );
              }
              return "";
            });
      }
  },
  k2 = [w2],
  S2 = function (n) {
    var i = n.key;
    if (i === "css") {
      var l = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(l, function (b) {
        var O = b.getAttribute("data-emotion");
        O.indexOf(" ") !== -1 && (document.head.appendChild(b), b.setAttribute("data-s", ""));
      });
    }
    var s = n.stylisPlugins || k2,
      c = {},
      f,
      m = [];
    (f = n.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + i + ' "]'),
        function (b) {
          for (var O = b.getAttribute("data-emotion").split(" "), q = 1; q < O.length; q++)
            c[O[q]] = !0;
          m.push(b);
        }
      );
    var v,
      x = [x2, b2];
    {
      var w,
        k = [
          p2,
          m2(function (b) {
            w.insert(b);
          }),
        ],
        E = h2(x.concat(s, k)),
        j = function (O) {
          return ll(f2(O), E);
        };
      v = function (O, q, K, X) {
        (w = K), j(O ? O + "{" + q.styles + "}" : q.styles), X && (z.inserted[q.name] = !0);
      };
    }
    var z = {
      key: i,
      sheet: new Q1({
        key: i,
        container: f,
        nonce: n.nonce,
        speedy: n.speedy,
        prepend: n.prepend,
        insertionPoint: n.insertionPoint,
      }),
      nonce: n.nonce,
      inserted: c,
      registered: {},
      insert: v,
    };
    return z.sheet.hydrate(m), z;
  },
  Op = { exports: {} },
  ft = {};
var dv;
function C2() {
  if (dv) return ft;
  dv = 1;
  var r = typeof Symbol == "function" && Symbol.for,
    n = r ? Symbol.for("react.element") : 60103,
    i = r ? Symbol.for("react.portal") : 60106,
    l = r ? Symbol.for("react.fragment") : 60107,
    s = r ? Symbol.for("react.strict_mode") : 60108,
    c = r ? Symbol.for("react.profiler") : 60114,
    f = r ? Symbol.for("react.provider") : 60109,
    m = r ? Symbol.for("react.context") : 60110,
    v = r ? Symbol.for("react.async_mode") : 60111,
    x = r ? Symbol.for("react.concurrent_mode") : 60111,
    w = r ? Symbol.for("react.forward_ref") : 60112,
    k = r ? Symbol.for("react.suspense") : 60113,
    E = r ? Symbol.for("react.suspense_list") : 60120,
    j = r ? Symbol.for("react.memo") : 60115,
    z = r ? Symbol.for("react.lazy") : 60116,
    b = r ? Symbol.for("react.block") : 60121,
    O = r ? Symbol.for("react.fundamental") : 60117,
    q = r ? Symbol.for("react.responder") : 60118,
    K = r ? Symbol.for("react.scope") : 60119;
  function X(D) {
    if (typeof D == "object" && D !== null) {
      var A = D.$$typeof;
      switch (A) {
        case n:
          switch (((D = D.type), D)) {
            case v:
            case x:
            case l:
            case c:
            case s:
            case k:
              return D;
            default:
              switch (((D = D && D.$$typeof), D)) {
                case m:
                case w:
                case z:
                case j:
                case f:
                  return D;
                default:
                  return A;
              }
          }
        case i:
          return A;
      }
    }
  }
  function V(D) {
    return X(D) === x;
  }
  return (
    (ft.AsyncMode = v),
    (ft.ConcurrentMode = x),
    (ft.ContextConsumer = m),
    (ft.ContextProvider = f),
    (ft.Element = n),
    (ft.ForwardRef = w),
    (ft.Fragment = l),
    (ft.Lazy = z),
    (ft.Memo = j),
    (ft.Portal = i),
    (ft.Profiler = c),
    (ft.StrictMode = s),
    (ft.Suspense = k),
    (ft.isAsyncMode = function (D) {
      return V(D) || X(D) === v;
    }),
    (ft.isConcurrentMode = V),
    (ft.isContextConsumer = function (D) {
      return X(D) === m;
    }),
    (ft.isContextProvider = function (D) {
      return X(D) === f;
    }),
    (ft.isElement = function (D) {
      return typeof D == "object" && D !== null && D.$$typeof === n;
    }),
    (ft.isForwardRef = function (D) {
      return X(D) === w;
    }),
    (ft.isFragment = function (D) {
      return X(D) === l;
    }),
    (ft.isLazy = function (D) {
      return X(D) === z;
    }),
    (ft.isMemo = function (D) {
      return X(D) === j;
    }),
    (ft.isPortal = function (D) {
      return X(D) === i;
    }),
    (ft.isProfiler = function (D) {
      return X(D) === c;
    }),
    (ft.isStrictMode = function (D) {
      return X(D) === s;
    }),
    (ft.isSuspense = function (D) {
      return X(D) === k;
    }),
    (ft.isValidElementType = function (D) {
      return (
        typeof D == "string" ||
        typeof D == "function" ||
        D === l ||
        D === x ||
        D === c ||
        D === s ||
        D === k ||
        D === E ||
        (typeof D == "object" &&
          D !== null &&
          (D.$$typeof === z ||
            D.$$typeof === j ||
            D.$$typeof === f ||
            D.$$typeof === m ||
            D.$$typeof === w ||
            D.$$typeof === O ||
            D.$$typeof === q ||
            D.$$typeof === K ||
            D.$$typeof === b))
      );
    }),
    (ft.typeOf = X),
    ft
  );
}
var pv;
function $2() {
  return pv || ((pv = 1), (Op.exports = C2())), Op.exports;
}
var Mp, hv;
function E2() {
  if (hv) return Mp;
  hv = 1;
  var r = $2(),
    n = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    i = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
    l = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
    s = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
    c = {};
  (c[r.ForwardRef] = l), (c[r.Memo] = s);
  function f(z) {
    return r.isMemo(z) ? s : c[z.$$typeof] || n;
  }
  var m = Object.defineProperty,
    v = Object.getOwnPropertyNames,
    x = Object.getOwnPropertySymbols,
    w = Object.getOwnPropertyDescriptor,
    k = Object.getPrototypeOf,
    E = Object.prototype;
  function j(z, b, O) {
    if (typeof b != "string") {
      if (E) {
        var q = k(b);
        q && q !== E && j(z, q, O);
      }
      var K = v(b);
      x && (K = K.concat(x(b)));
      for (var X = f(z), V = f(b), D = 0; D < K.length; ++D) {
        var A = K[D];
        if (!i[A] && !(O && O[A]) && !(V && V[A]) && !(X && X[A])) {
          var Q = w(b, A);
          try {
            m(z, A, Q);
          } catch {}
        }
      }
    }
    return z;
  }
  return (Mp = j), Mp;
}
E2();
var R2 = !0;
function _2(r, n, i) {
  var l = "";
  return (
    i.split(" ").forEach(function (s) {
      r[s] !== void 0 ? n.push(r[s] + ";") : s && (l += s + " ");
    }),
    l
  );
}
var lg = function (n, i, l) {
    var s = n.key + "-" + i.name;
    (l === !1 || R2 === !1) && n.registered[s] === void 0 && (n.registered[s] = i.styles);
  },
  sg = function (n, i, l) {
    lg(n, i, l);
    var s = n.key + "-" + i.name;
    if (n.inserted[i.name] === void 0) {
      var c = i;
      do n.insert(i === c ? "." + s : "", c, n.sheet, !0), (c = c.next);
      while (c !== void 0);
    }
  };
function P2(r) {
  for (var n = 0, i, l = 0, s = r.length; s >= 4; ++l, s -= 4)
    (i =
      (r.charCodeAt(l) & 255) |
      ((r.charCodeAt(++l) & 255) << 8) |
      ((r.charCodeAt(++l) & 255) << 16) |
      ((r.charCodeAt(++l) & 255) << 24)),
      (i = (i & 65535) * 1540483477 + (((i >>> 16) * 59797) << 16)),
      (i ^= i >>> 24),
      (n =
        ((i & 65535) * 1540483477 + (((i >>> 16) * 59797) << 16)) ^
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)));
  switch (s) {
    case 3:
      n ^= (r.charCodeAt(l + 2) & 255) << 16;
    case 2:
      n ^= (r.charCodeAt(l + 1) & 255) << 8;
    case 1:
      (n ^= r.charCodeAt(l) & 255), (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16));
  }
  return (
    (n ^= n >>> 13),
    (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
    ((n ^ (n >>> 15)) >>> 0).toString(36)
  );
}
var T2 = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  O2 = /[A-Z]|^ms/g,
  M2 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  ug = function (n) {
    return n.charCodeAt(1) === 45;
  },
  mv = function (n) {
    return n != null && typeof n != "boolean";
  },
  zp = J0(function (r) {
    return ug(r) ? r : r.replace(O2, "-$&").toLowerCase();
  }),
  vv = function (n, i) {
    switch (n) {
      case "animation":
      case "animationName":
        if (typeof i == "string")
          return i.replace(M2, function (l, s, c) {
            return (Vn = { name: s, styles: c, next: Vn }), s;
          });
    }
    return T2[n] !== 1 && !ug(n) && typeof i == "number" && i !== 0 ? i + "px" : i;
  };
function fu(r, n, i) {
  if (i == null) return "";
  var l = i;
  if (l.__emotion_styles !== void 0) return l;
  switch (typeof i) {
    case "boolean":
      return "";
    case "object": {
      var s = i;
      if (s.anim === 1) return (Vn = { name: s.name, styles: s.styles, next: Vn }), s.name;
      var c = i;
      if (c.styles !== void 0) {
        var f = c.next;
        if (f !== void 0)
          for (; f !== void 0; ) (Vn = { name: f.name, styles: f.styles, next: Vn }), (f = f.next);
        var m = c.styles + ";";
        return m;
      }
      return z2(r, n, i);
    }
    case "function": {
      if (r !== void 0) {
        var v = Vn,
          x = i(r);
        return (Vn = v), fu(r, n, x);
      }
      break;
    }
  }
  var w = i;
  if (n == null) return w;
  var k = n[w];
  return k !== void 0 ? k : w;
}
function z2(r, n, i) {
  var l = "";
  if (Array.isArray(i)) for (var s = 0; s < i.length; s++) l += fu(r, n, i[s]) + ";";
  else
    for (var c in i) {
      var f = i[c];
      if (typeof f != "object") {
        var m = f;
        n != null && n[m] !== void 0
          ? (l += c + "{" + n[m] + "}")
          : mv(m) && (l += zp(c) + ":" + vv(c, m) + ";");
      } else if (Array.isArray(f) && typeof f[0] == "string" && (n == null || n[f[0]] === void 0))
        for (var v = 0; v < f.length; v++) mv(f[v]) && (l += zp(c) + ":" + vv(c, f[v]) + ";");
      else {
        var x = fu(r, n, f);
        switch (c) {
          case "animation":
          case "animationName": {
            l += zp(c) + ":" + x + ";";
            break;
          }
          default:
            l += c + "{" + x + "}";
        }
      }
    }
  return l;
}
var gv = /label:\s*([^\s;{]+)\s*(;|$)/g,
  Vn;
function zf(r, n, i) {
  if (r.length === 1 && typeof r[0] == "object" && r[0] !== null && r[0].styles !== void 0)
    return r[0];
  var l = !0,
    s = "";
  Vn = void 0;
  var c = r[0];
  if (c == null || c.raw === void 0) (l = !1), (s += fu(i, n, c));
  else {
    var f = c;
    s += f[0];
  }
  for (var m = 1; m < r.length; m++)
    if (((s += fu(i, n, r[m])), l)) {
      var v = c;
      s += v[m];
    }
  gv.lastIndex = 0;
  for (var x = "", w; (w = gv.exec(s)) !== null; ) x += "-" + w[1];
  var k = P2(s) + x;
  return { name: k, styles: s, next: Vn };
}
var N2 = function (n) {
    return n();
  },
  cg = Yp.useInsertionEffect ? Yp.useInsertionEffect : !1,
  L2 = cg || N2,
  yv = cg || N.useLayoutEffect,
  fg = N.createContext(typeof HTMLElement < "u" ? S2({ key: "css" }) : null);
fg.Provider;
var dg = function (n) {
    return N.forwardRef(function (i, l) {
      var s = N.useContext(fg);
      return n(i, s, l);
    });
  },
  Nf = N.createContext({}),
  j2 = dg(function (r, n) {
    var i = r.styles,
      l = zf([i], void 0, N.useContext(Nf)),
      s = N.useRef();
    return (
      yv(
        function () {
          var c = n.key + "-global",
            f = new n.sheet.constructor({
              key: c,
              nonce: n.sheet.nonce,
              container: n.sheet.container,
              speedy: n.sheet.isSpeedy,
            }),
            m = !1,
            v = document.querySelector('style[data-emotion="' + c + " " + l.name + '"]');
          return (
            n.sheet.tags.length && (f.before = n.sheet.tags[0]),
            v !== null && ((m = !0), v.setAttribute("data-emotion", c), f.hydrate([v])),
            (s.current = [f, m]),
            function () {
              f.flush();
            }
          );
        },
        [n]
      ),
      yv(
        function () {
          var c = s.current,
            f = c[0],
            m = c[1];
          if (m) {
            c[1] = !1;
            return;
          }
          if ((l.next !== void 0 && sg(n, l.next, !0), f.tags.length)) {
            var v = f.tags[f.tags.length - 1].nextElementSibling;
            (f.before = v), f.flush();
          }
          n.insert("", l, f, !1);
        },
        [n, l.name]
      ),
      null
    );
  });
function I2() {
  for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i];
  return zf(n);
}
var $h = function () {
    var n = I2.apply(void 0, arguments),
      i = "animation-" + n.name;
    return {
      name: i,
      styles: "@keyframes " + i + "{" + n.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  },
  D2 = K1,
  A2 = function (n) {
    return n !== "theme";
  },
  xv = function (n) {
    return typeof n == "string" && n.charCodeAt(0) > 96 ? D2 : A2;
  },
  bv = function (n, i, l) {
    var s;
    if (i) {
      var c = i.shouldForwardProp;
      s =
        n.__emotion_forwardProp && c
          ? function (f) {
              return n.__emotion_forwardProp(f) && c(f);
            }
          : c;
    }
    return typeof s != "function" && l && (s = n.__emotion_forwardProp), s;
  },
  F2 = function (n) {
    var i = n.cache,
      l = n.serialized,
      s = n.isStringTag;
    return (
      lg(i, l, s),
      L2(function () {
        return sg(i, l, s);
      }),
      null
    );
  },
  W2 = function r(n, i) {
    var l = n.__emotion_real === n,
      s = (l && n.__emotion_base) || n,
      c,
      f;
    i !== void 0 && ((c = i.label), (f = i.target));
    var m = bv(n, i, l),
      v = m || xv(s),
      x = !v("as");
    return function () {
      var w = arguments,
        k = l && n.__emotion_styles !== void 0 ? n.__emotion_styles.slice(0) : [];
      if ((c !== void 0 && k.push("label:" + c + ";"), w[0] == null || w[0].raw === void 0))
        k.push.apply(k, w);
      else {
        k.push(w[0][0]);
        for (var E = w.length, j = 1; j < E; j++) k.push(w[j], w[0][j]);
      }
      var z = dg(function (b, O, q) {
        var K = (x && b.as) || s,
          X = "",
          V = [],
          D = b;
        if (b.theme == null) {
          D = {};
          for (var A in b) D[A] = b[A];
          D.theme = N.useContext(Nf);
        }
        typeof b.className == "string"
          ? (X = _2(O.registered, V, b.className))
          : b.className != null && (X = b.className + " ");
        var Q = zf(k.concat(V), O.registered, D);
        (X += O.key + "-" + Q.name), f !== void 0 && (X += " " + f);
        var ae = x && m === void 0 ? xv(K) : v,
          xe = {};
        for (var he in b) (x && he === "as") || (ae(he) && (xe[he] = b[he]));
        return (
          (xe.className = X),
          (xe.ref = q),
          N.createElement(
            N.Fragment,
            null,
            N.createElement(F2, { cache: O, serialized: Q, isStringTag: typeof K == "string" }),
            N.createElement(K, xe)
          )
        );
      });
      return (
        (z.displayName =
          c !== void 0
            ? c
            : "Styled(" +
              (typeof s == "string" ? s : s.displayName || s.name || "Component") +
              ")"),
        (z.defaultProps = n.defaultProps),
        (z.__emotion_real = z),
        (z.__emotion_base = s),
        (z.__emotion_styles = k),
        (z.__emotion_forwardProp = m),
        Object.defineProperty(z, "toString", {
          value: function () {
            return "." + f;
          },
        }),
        (z.withComponent = function (b, O) {
          return r(b, Y({}, i, O, { shouldForwardProp: bv(z, O, !0) })).apply(void 0, k);
        }),
        z
      );
    };
  },
  B2 = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  oh = W2.bind();
B2.forEach(function (r) {
  oh[r] = oh(r);
});
function U2(r) {
  return r == null || Object.keys(r).length === 0;
}
function V2(r) {
  const { styles: n, defaultTheme: i = {} } = r,
    l = typeof n == "function" ? (s) => n(U2(s) ? i : s) : n;
  return M.jsx(j2, { styles: l });
}
function pg(r, n) {
  return oh(r, n);
}
const H2 = (r, n) => {
    Array.isArray(r.__emotion_styles) && (r.__emotion_styles = n(r.__emotion_styles));
  },
  wv = [];
function ih(r) {
  return (wv[0] = r), zf(wv);
}
const G2 = ["values", "unit", "step"],
  q2 = (r) => {
    const n = Object.keys(r).map((i) => ({ key: i, val: r[i] })) || [];
    return n.sort((i, l) => i.val - l.val), n.reduce((i, l) => Y({}, i, { [l.key]: l.val }), {});
  };
function K2(r) {
  const {
      values: n = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: i = "px",
      step: l = 5,
    } = r,
    s = tt(r, G2),
    c = q2(n),
    f = Object.keys(c);
  function m(E) {
    return `@media (min-width:${typeof n[E] == "number" ? n[E] : E}${i})`;
  }
  function v(E) {
    return `@media (max-width:${(typeof n[E] == "number" ? n[E] : E) - l / 100}${i})`;
  }
  function x(E, j) {
    const z = f.indexOf(j);
    return `@media (min-width:${typeof n[E] == "number" ? n[E] : E}${i}) and (max-width:${
      (z !== -1 && typeof n[f[z]] == "number" ? n[f[z]] : j) - l / 100
    }${i})`;
  }
  function w(E) {
    return f.indexOf(E) + 1 < f.length ? x(E, f[f.indexOf(E) + 1]) : m(E);
  }
  function k(E) {
    const j = f.indexOf(E);
    return j === 0
      ? m(f[1])
      : j === f.length - 1
      ? v(f[j])
      : x(E, f[f.indexOf(E) + 1]).replace("@media", "@media not all and");
  }
  return Y({ keys: f, values: c, up: m, down: v, between: x, only: w, not: k, unit: i }, s);
}
const X2 = { borderRadius: 4 };
function iu(r, n) {
  return n ? yo(r, n, { clone: !1 }) : r;
}
const Eh = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  kv = { keys: ["xs", "sm", "md", "lg", "xl"], up: (r) => `@media (min-width:${Eh[r]}px)` };
function tn(r, n, i) {
  const l = r.theme || {};
  if (Array.isArray(n)) {
    const c = l.breakpoints || kv;
    return n.reduce((f, m, v) => ((f[c.up(c.keys[v])] = i(n[v])), f), {});
  }
  if (typeof n == "object") {
    const c = l.breakpoints || kv;
    return Object.keys(n).reduce((f, m) => {
      if (Object.keys(c.values || Eh).indexOf(m) !== -1) {
        const v = c.up(m);
        f[v] = i(n[m], m);
      } else {
        const v = m;
        f[v] = n[v];
      }
      return f;
    }, {});
  }
  return i(n);
}
function Y2(r = {}) {
  var n;
  return (
    ((n = r.keys) == null
      ? void 0
      : n.reduce((l, s) => {
          const c = r.up(s);
          return (l[c] = {}), l;
        }, {})) || {}
  );
}
function Sv(r, n) {
  return r.reduce((i, l) => {
    const s = i[l];
    return (!s || Object.keys(s).length === 0) && delete i[l], i;
  }, n);
}
function Q2(r, n) {
  if (typeof r != "object") return {};
  const i = {},
    l = Object.keys(n);
  return (
    Array.isArray(r)
      ? l.forEach((s, c) => {
          c < r.length && (i[s] = !0);
        })
      : l.forEach((s) => {
          r[s] != null && (i[s] = !0);
        }),
    i
  );
}
function Lf({ values: r, breakpoints: n, base: i }) {
  const l = i || Q2(r, n),
    s = Object.keys(l);
  if (s.length === 0) return r;
  let c;
  return s.reduce(
    (f, m, v) => (
      Array.isArray(r)
        ? ((f[m] = r[v] != null ? r[v] : r[c]), (c = v))
        : typeof r == "object"
        ? ((f[m] = r[m] != null ? r[m] : r[c]), (c = m))
        : (f[m] = r),
      f
    ),
    {}
  );
}
function pl(r, n, i = !0) {
  if (!n || typeof n != "string") return null;
  if (r && r.vars && i) {
    const l = `vars.${n}`.split(".").reduce((s, c) => (s && s[c] ? s[c] : null), r);
    if (l != null) return l;
  }
  return n.split(".").reduce((l, s) => (l && l[s] != null ? l[s] : null), r);
}
function Cf(r, n, i, l = i) {
  let s;
  return (
    typeof r == "function" ? (s = r(i)) : Array.isArray(r) ? (s = r[i] || l) : (s = pl(r, i) || l),
    n && (s = n(s, l, r)),
    s
  );
}
function Ot(r) {
  const { prop: n, cssProperty: i = r.prop, themeKey: l, transform: s } = r,
    c = (f) => {
      if (f[n] == null) return null;
      const m = f[n],
        v = f.theme,
        x = pl(v, l) || {};
      return tn(f, m, (k) => {
        let E = Cf(x, s, k);
        return (
          k === E &&
            typeof k == "string" &&
            (E = Cf(x, s, `${n}${k === "default" ? "" : mt(k)}`, k)),
          i === !1 ? E : { [i]: E }
        );
      });
    };
  return (c.propTypes = {}), (c.filterProps = [n]), c;
}
function Z2(r) {
  const n = {};
  return (i) => (n[i] === void 0 && (n[i] = r(i)), n[i]);
}
const J2 = { m: "margin", p: "padding" },
  ex = { t: "Top", r: "Right", b: "Bottom", l: "Left", x: ["Left", "Right"], y: ["Top", "Bottom"] },
  Cv = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  tx = Z2((r) => {
    if (r.length > 2)
      if (Cv[r]) r = Cv[r];
      else return [r];
    const [n, i] = r.split(""),
      l = J2[n],
      s = ex[i] || "";
    return Array.isArray(s) ? s.map((c) => l + c) : [l + s];
  }),
  Rh = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  _h = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ];
[...Rh, ..._h];
function bu(r, n, i, l) {
  var s;
  const c = (s = pl(r, n, !1)) != null ? s : i;
  return typeof c == "number"
    ? (f) => (typeof f == "string" ? f : c * f)
    : Array.isArray(c)
    ? (f) => (typeof f == "string" ? f : c[f])
    : typeof c == "function"
    ? c
    : () => {};
}
function hg(r) {
  return bu(r, "spacing", 8);
}
function wu(r, n) {
  if (typeof n == "string" || n == null) return n;
  const i = Math.abs(n),
    l = r(i);
  return n >= 0 ? l : typeof l == "number" ? -l : `-${l}`;
}
function rx(r, n) {
  return (i) => r.reduce((l, s) => ((l[s] = wu(n, i)), l), {});
}
function nx(r, n, i, l) {
  if (n.indexOf(i) === -1) return null;
  const s = tx(i),
    c = rx(s, l),
    f = r[i];
  return tn(r, f, c);
}
function mg(r, n) {
  const i = hg(r.theme);
  return Object.keys(r)
    .map((l) => nx(r, n, l, i))
    .reduce(iu, {});
}
function Rt(r) {
  return mg(r, Rh);
}
Rt.propTypes = {};
Rt.filterProps = Rh;
function _t(r) {
  return mg(r, _h);
}
_t.propTypes = {};
_t.filterProps = _h;
function ox(r = 8) {
  if (r.mui) return r;
  const n = hg({ spacing: r }),
    i = (...l) =>
      (l.length === 0 ? [1] : l)
        .map((c) => {
          const f = n(c);
          return typeof f == "number" ? `${f}px` : f;
        })
        .join(" ");
  return (i.mui = !0), i;
}
function jf(...r) {
  const n = r.reduce(
      (l, s) => (
        s.filterProps.forEach((c) => {
          l[c] = s;
        }),
        l
      ),
      {}
    ),
    i = (l) => Object.keys(l).reduce((s, c) => (n[c] ? iu(s, n[c](l)) : s), {});
  return (i.propTypes = {}), (i.filterProps = r.reduce((l, s) => l.concat(s.filterProps), [])), i;
}
function Jr(r) {
  return typeof r != "number" ? r : `${r}px solid`;
}
function on(r, n) {
  return Ot({ prop: r, themeKey: "borders", transform: n });
}
const ix = on("border", Jr),
  ax = on("borderTop", Jr),
  lx = on("borderRight", Jr),
  sx = on("borderBottom", Jr),
  ux = on("borderLeft", Jr),
  cx = on("borderColor"),
  fx = on("borderTopColor"),
  dx = on("borderRightColor"),
  px = on("borderBottomColor"),
  hx = on("borderLeftColor"),
  mx = on("outline", Jr),
  vx = on("outlineColor"),
  If = (r) => {
    if (r.borderRadius !== void 0 && r.borderRadius !== null) {
      const n = bu(r.theme, "shape.borderRadius", 4),
        i = (l) => ({ borderRadius: wu(n, l) });
      return tn(r, r.borderRadius, i);
    }
    return null;
  };
If.propTypes = {};
If.filterProps = ["borderRadius"];
jf(ix, ax, lx, sx, ux, cx, fx, dx, px, hx, If, mx, vx);
const Df = (r) => {
  if (r.gap !== void 0 && r.gap !== null) {
    const n = bu(r.theme, "spacing", 8),
      i = (l) => ({ gap: wu(n, l) });
    return tn(r, r.gap, i);
  }
  return null;
};
Df.propTypes = {};
Df.filterProps = ["gap"];
const Af = (r) => {
  if (r.columnGap !== void 0 && r.columnGap !== null) {
    const n = bu(r.theme, "spacing", 8),
      i = (l) => ({ columnGap: wu(n, l) });
    return tn(r, r.columnGap, i);
  }
  return null;
};
Af.propTypes = {};
Af.filterProps = ["columnGap"];
const Ff = (r) => {
  if (r.rowGap !== void 0 && r.rowGap !== null) {
    const n = bu(r.theme, "spacing", 8),
      i = (l) => ({ rowGap: wu(n, l) });
    return tn(r, r.rowGap, i);
  }
  return null;
};
Ff.propTypes = {};
Ff.filterProps = ["rowGap"];
const gx = Ot({ prop: "gridColumn" }),
  yx = Ot({ prop: "gridRow" }),
  xx = Ot({ prop: "gridAutoFlow" }),
  bx = Ot({ prop: "gridAutoColumns" }),
  wx = Ot({ prop: "gridAutoRows" }),
  kx = Ot({ prop: "gridTemplateColumns" }),
  Sx = Ot({ prop: "gridTemplateRows" }),
  Cx = Ot({ prop: "gridTemplateAreas" }),
  $x = Ot({ prop: "gridArea" });
jf(Df, Af, Ff, gx, yx, xx, bx, wx, kx, Sx, Cx, $x);
function sl(r, n) {
  return n === "grey" ? n : r;
}
const Ex = Ot({ prop: "color", themeKey: "palette", transform: sl }),
  Rx = Ot({ prop: "bgcolor", cssProperty: "backgroundColor", themeKey: "palette", transform: sl }),
  _x = Ot({ prop: "backgroundColor", themeKey: "palette", transform: sl });
jf(Ex, Rx, _x);
function Nr(r) {
  return r <= 1 && r !== 0 ? `${r * 100}%` : r;
}
const Px = Ot({ prop: "width", transform: Nr }),
  Ph = (r) => {
    if (r.maxWidth !== void 0 && r.maxWidth !== null) {
      const n = (i) => {
        var l, s;
        const c =
          ((l = r.theme) == null || (l = l.breakpoints) == null || (l = l.values) == null
            ? void 0
            : l[i]) || Eh[i];
        return c
          ? ((s = r.theme) == null || (s = s.breakpoints) == null ? void 0 : s.unit) !== "px"
            ? { maxWidth: `${c}${r.theme.breakpoints.unit}` }
            : { maxWidth: c }
          : { maxWidth: Nr(i) };
      };
      return tn(r, r.maxWidth, n);
    }
    return null;
  };
Ph.filterProps = ["maxWidth"];
const Tx = Ot({ prop: "minWidth", transform: Nr }),
  Ox = Ot({ prop: "height", transform: Nr }),
  Mx = Ot({ prop: "maxHeight", transform: Nr }),
  zx = Ot({ prop: "minHeight", transform: Nr });
Ot({ prop: "size", cssProperty: "width", transform: Nr });
Ot({ prop: "size", cssProperty: "height", transform: Nr });
const Nx = Ot({ prop: "boxSizing" });
jf(Px, Ph, Tx, Ox, Mx, zx, Nx);
const Wf = {
  border: { themeKey: "borders", transform: Jr },
  borderTop: { themeKey: "borders", transform: Jr },
  borderRight: { themeKey: "borders", transform: Jr },
  borderBottom: { themeKey: "borders", transform: Jr },
  borderLeft: { themeKey: "borders", transform: Jr },
  borderColor: { themeKey: "palette" },
  borderTopColor: { themeKey: "palette" },
  borderRightColor: { themeKey: "palette" },
  borderBottomColor: { themeKey: "palette" },
  borderLeftColor: { themeKey: "palette" },
  outline: { themeKey: "borders", transform: Jr },
  outlineColor: { themeKey: "palette" },
  borderRadius: { themeKey: "shape.borderRadius", style: If },
  color: { themeKey: "palette", transform: sl },
  bgcolor: { themeKey: "palette", cssProperty: "backgroundColor", transform: sl },
  backgroundColor: { themeKey: "palette", transform: sl },
  p: { style: _t },
  pt: { style: _t },
  pr: { style: _t },
  pb: { style: _t },
  pl: { style: _t },
  px: { style: _t },
  py: { style: _t },
  padding: { style: _t },
  paddingTop: { style: _t },
  paddingRight: { style: _t },
  paddingBottom: { style: _t },
  paddingLeft: { style: _t },
  paddingX: { style: _t },
  paddingY: { style: _t },
  paddingInline: { style: _t },
  paddingInlineStart: { style: _t },
  paddingInlineEnd: { style: _t },
  paddingBlock: { style: _t },
  paddingBlockStart: { style: _t },
  paddingBlockEnd: { style: _t },
  m: { style: Rt },
  mt: { style: Rt },
  mr: { style: Rt },
  mb: { style: Rt },
  ml: { style: Rt },
  mx: { style: Rt },
  my: { style: Rt },
  margin: { style: Rt },
  marginTop: { style: Rt },
  marginRight: { style: Rt },
  marginBottom: { style: Rt },
  marginLeft: { style: Rt },
  marginX: { style: Rt },
  marginY: { style: Rt },
  marginInline: { style: Rt },
  marginInlineStart: { style: Rt },
  marginInlineEnd: { style: Rt },
  marginBlock: { style: Rt },
  marginBlockStart: { style: Rt },
  marginBlockEnd: { style: Rt },
  displayPrint: { cssProperty: !1, transform: (r) => ({ "@media print": { display: r } }) },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  gap: { style: Df },
  rowGap: { style: Ff },
  columnGap: { style: Af },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  position: {},
  zIndex: { themeKey: "zIndex" },
  top: {},
  right: {},
  bottom: {},
  left: {},
  boxShadow: { themeKey: "shadows" },
  width: { transform: Nr },
  maxWidth: { style: Ph },
  minWidth: { transform: Nr },
  height: { transform: Nr },
  maxHeight: { transform: Nr },
  minHeight: { transform: Nr },
  boxSizing: {},
  fontFamily: { themeKey: "typography" },
  fontSize: { themeKey: "typography" },
  fontStyle: { themeKey: "typography" },
  fontWeight: { themeKey: "typography" },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: { cssProperty: !1, themeKey: "typography" },
};
function Lx(...r) {
  const n = r.reduce((l, s) => l.concat(Object.keys(s)), []),
    i = new Set(n);
  return r.every((l) => i.size === Object.keys(l).length);
}
function jx(r, n) {
  return typeof r == "function" ? r(n) : r;
}
function Ix() {
  function r(i, l, s, c) {
    const f = { [i]: l, theme: s },
      m = c[i];
    if (!m) return { [i]: l };
    const { cssProperty: v = i, themeKey: x, transform: w, style: k } = m;
    if (l == null) return null;
    if (x === "typography" && l === "inherit") return { [i]: l };
    const E = pl(s, x) || {};
    return k
      ? k(f)
      : tn(f, l, (z) => {
          let b = Cf(E, w, z);
          return (
            z === b &&
              typeof z == "string" &&
              (b = Cf(E, w, `${i}${z === "default" ? "" : mt(z)}`, z)),
            v === !1 ? b : { [v]: b }
          );
        });
  }
  function n(i) {
    var l;
    const { sx: s, theme: c = {}, nested: f } = i || {};
    if (!s) return null;
    const m = (l = c.unstable_sxConfig) != null ? l : Wf;
    function v(x) {
      let w = x;
      if (typeof x == "function") w = x(c);
      else if (typeof x != "object") return x;
      if (!w) return null;
      const k = Y2(c.breakpoints),
        E = Object.keys(k);
      let j = k;
      return (
        Object.keys(w).forEach((z) => {
          const b = jx(w[z], c);
          if (b != null)
            if (typeof b == "object")
              if (m[z]) j = iu(j, r(z, b, c, m));
              else {
                const O = tn({ theme: c }, b, (q) => ({ [z]: q }));
                Lx(O, b) ? (j[z] = n({ sx: b, theme: c, nested: !0 })) : (j = iu(j, O));
              }
            else j = iu(j, r(z, b, c, m));
        }),
        !f && c.modularCssLayers ? { "@layer sx": Sv(E, j) } : Sv(E, j)
      );
    }
    return Array.isArray(s) ? s.map(v) : v(s);
  }
  return n;
}
const ku = Ix();
ku.filterProps = ["sx"];
function Dx(r, n) {
  const i = this;
  return i.vars && typeof i.getColorSchemeSelector == "function"
    ? { [i.getColorSchemeSelector(r).replace(/(\[[^\]]+\])/, "*:where($1)")]: n }
    : i.palette.mode === r
    ? n
    : {};
}
const Ax = ["breakpoints", "palette", "spacing", "shape"];
function Bf(r = {}, ...n) {
  const { breakpoints: i = {}, palette: l = {}, spacing: s, shape: c = {} } = r,
    f = tt(r, Ax),
    m = K2(i),
    v = ox(s);
  let x = yo(
    {
      breakpoints: m,
      direction: "ltr",
      components: {},
      palette: Y({ mode: "light" }, l),
      spacing: v,
      shape: Y({}, X2, c),
    },
    f
  );
  return (
    (x.applyStyles = Dx),
    (x = n.reduce((w, k) => yo(w, k), x)),
    (x.unstable_sxConfig = Y({}, Wf, f?.unstable_sxConfig)),
    (x.unstable_sx = function (k) {
      return ku({ sx: k, theme: this });
    }),
    x
  );
}
function Fx(r) {
  return Object.keys(r).length === 0;
}
function Uf(r = null) {
  const n = N.useContext(Nf);
  return !n || Fx(n) ? r : n;
}
const Wx = Bf();
function Vf(r = Wx) {
  return Uf(r);
}
function Np(r) {
  const n = ih(r);
  return r !== n && n.styles
    ? (n.styles.match(/^@layer\s+[^{]*$/) || (n.styles = `@layer global{${n.styles}}`), n)
    : r;
}
function vg({ styles: r, themeId: n, defaultTheme: i = {} }) {
  const l = Vf(i),
    s = (n && l[n]) || l;
  let c = typeof r == "function" ? r(s) : r;
  return (
    s.modularCssLayers &&
      (Array.isArray(c) ? (c = c.map((f) => Np(typeof f == "function" ? f(s) : f))) : (c = Np(c))),
    M.jsx(V2, { styles: c })
  );
}
const Bx = ["sx"],
  Ux = (r) => {
    var n, i;
    const l = { systemProps: {}, otherProps: {} },
      s = (n = r == null || (i = r.theme) == null ? void 0 : i.unstable_sxConfig) != null ? n : Wf;
    return (
      Object.keys(r).forEach((c) => {
        s[c] ? (l.systemProps[c] = r[c]) : (l.otherProps[c] = r[c]);
      }),
      l
    );
  };
function Th(r) {
  const { sx: n } = r,
    i = tt(r, Bx),
    { systemProps: l, otherProps: s } = Ux(i);
  let c;
  return (
    Array.isArray(n)
      ? (c = [l, ...n])
      : typeof n == "function"
      ? (c = (...f) => {
          const m = n(...f);
          return ii(m) ? Y({}, l, m) : l;
        })
      : (c = Y({}, l, n)),
    Y({}, s, { sx: c })
  );
}
function gg(r) {
  var n,
    i,
    l = "";
  if (typeof r == "string" || typeof r == "number") l += r;
  else if (typeof r == "object")
    if (Array.isArray(r)) {
      var s = r.length;
      for (n = 0; n < s; n++) r[n] && (i = gg(r[n])) && (l && (l += " "), (l += i));
    } else for (i in r) r[i] && (l && (l += " "), (l += i));
  return l;
}
function yg() {
  for (var r, n, i = 0, l = "", s = arguments.length; i < s; i++)
    (r = arguments[i]) && (n = gg(r)) && (l && (l += " "), (l += n));
  return l;
}
const Vx = ["className", "component"];
function Hx(r = {}) {
  const {
      themeId: n,
      defaultTheme: i,
      defaultClassName: l = "MuiBox-root",
      generateClassName: s,
    } = r,
    c = pg("div", { shouldForwardProp: (m) => m !== "theme" && m !== "sx" && m !== "as" })(ku);
  return N.forwardRef(function (v, x) {
    const w = Vf(i),
      k = Th(v),
      { className: E, component: j = "div" } = k,
      z = tt(k, Vx);
    return M.jsx(
      c,
      Y({ as: j, ref: x, className: yg(E, s ? s(l) : l), theme: (n && w[n]) || w }, z)
    );
  });
}
const Gx = ["ownerState"],
  qx = ["variants"],
  Kx = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function Xx(r) {
  return Object.keys(r).length === 0;
}
function Yx(r) {
  return typeof r == "string" && r.charCodeAt(0) > 96;
}
function mf(r) {
  return r !== "ownerState" && r !== "theme" && r !== "sx" && r !== "as";
}
function $v(r, n) {
  return (
    n &&
      r &&
      typeof r == "object" &&
      r.styles &&
      !r.styles.startsWith("@layer") &&
      (r.styles = `@layer ${n}{${String(r.styles)}}`),
    r
  );
}
const Qx = Bf(),
  Zx = (r) => r && r.charAt(0).toLowerCase() + r.slice(1);
function of({ defaultTheme: r, theme: n, themeId: i }) {
  return Xx(n) ? r : n[i] || n;
}
function Jx(r) {
  return r ? (n, i) => i[r] : null;
}
function vf(r, n, i) {
  let { ownerState: l } = n,
    s = tt(n, Gx);
  const c = typeof r == "function" ? r(Y({ ownerState: l }, s)) : r;
  if (Array.isArray(c)) return c.flatMap((f) => vf(f, Y({ ownerState: l }, s), i));
  if (c && typeof c == "object" && Array.isArray(c.variants)) {
    const { variants: f = [] } = c;
    let v = tt(c, qx);
    return (
      f.forEach((x) => {
        let w = !0;
        if (
          (typeof x.props == "function"
            ? (w = x.props(Y({ ownerState: l }, s, l)))
            : Object.keys(x.props).forEach((k) => {
                l?.[k] !== x.props[k] && s[k] !== x.props[k] && (w = !1);
              }),
          w)
        ) {
          Array.isArray(v) || (v = [v]);
          const k = typeof x.style == "function" ? x.style(Y({ ownerState: l }, s, l)) : x.style;
          v.push(i ? $v(ih(k), i) : k);
        }
      }),
      v
    );
  }
  return i ? $v(ih(c), i) : c;
}
function xg(r = {}) {
  const {
      themeId: n,
      defaultTheme: i = Qx,
      rootShouldForwardProp: l = mf,
      slotShouldForwardProp: s = mf,
    } = r,
    c = (f) => ku(Y({}, f, { theme: of(Y({}, f, { defaultTheme: i, themeId: n })) }));
  return (
    (c.__mui_systemSx = !0),
    (f, m = {}) => {
      H2(f, (A) => A.filter((Q) => !(Q != null && Q.__mui_systemSx)));
      const {
          name: v,
          slot: x,
          skipVariantsResolver: w,
          skipSx: k,
          overridesResolver: E = Jx(Zx(x)),
        } = m,
        j = tt(m, Kx),
        z = (v && v.startsWith("Mui")) || x ? "components" : "custom",
        b = w !== void 0 ? w : (x && x !== "Root" && x !== "root") || !1,
        O = k || !1;
      let q,
        K = mf;
      x === "Root" || x === "root" ? (K = l) : x ? (K = s) : Yx(f) && (K = void 0);
      const X = pg(f, Y({ shouldForwardProp: K, label: q }, j)),
        V = (A) =>
          (typeof A == "function" && A.__emotion_real !== A) || ii(A)
            ? (Q) => {
                const ae = of({ theme: Q.theme, defaultTheme: i, themeId: n });
                return vf(A, Y({}, Q, { theme: ae }), ae.modularCssLayers ? z : void 0);
              }
            : A,
        D = (A, ...Q) => {
          let ae = V(A);
          const xe = Q ? Q.map(V) : [];
          v &&
            E &&
            xe.push((ue) => {
              const fe = of(Y({}, ue, { defaultTheme: i, themeId: n }));
              if (!fe.components || !fe.components[v] || !fe.components[v].styleOverrides)
                return null;
              const ye = fe.components[v].styleOverrides,
                me = {};
              return (
                Object.entries(ye).forEach(([ce, se]) => {
                  me[ce] = vf(se, Y({}, ue, { theme: fe }), fe.modularCssLayers ? "theme" : void 0);
                }),
                E(ue, me)
              );
            }),
            v &&
              !b &&
              xe.push((ue) => {
                var fe;
                const ye = of(Y({}, ue, { defaultTheme: i, themeId: n })),
                  me =
                    ye == null || (fe = ye.components) == null || (fe = fe[v]) == null
                      ? void 0
                      : fe.variants;
                return vf(
                  { variants: me },
                  Y({}, ue, { theme: ye }),
                  ye.modularCssLayers ? "theme" : void 0
                );
              }),
            O || xe.push(c);
          const he = xe.length - Q.length;
          if (Array.isArray(A) && he > 0) {
            const ue = new Array(he).fill("");
            (ae = [...A, ...ue]), (ae.raw = [...A.raw, ...ue]);
          }
          const Te = X(ae, ...xe);
          return f.muiName && (Te.muiName = f.muiName), Te;
        };
      return X.withConfig && (D.withConfig = X.withConfig), D;
    }
  );
}
const eb = xg();
function tb(r) {
  const { theme: n, name: i, props: l } = r;
  return !n || !n.components || !n.components[i] || !n.components[i].defaultProps
    ? l
    : bh(n.components[i].defaultProps, l);
}
function bg({ props: r, name: n, defaultTheme: i, themeId: l }) {
  let s = Vf(i);
  return l && (s = s[l] || s), tb({ theme: s, name: n, props: r });
}
function Oh(r, n = 0, i = 1) {
  return G1(r, n, i);
}
function rb(r) {
  r = r.slice(1);
  const n = new RegExp(`.{1,${r.length >= 6 ? 2 : 1}}`, "g");
  let i = r.match(n);
  return (
    i && i[0].length === 1 && (i = i.map((l) => l + l)),
    i
      ? `rgb${i.length === 4 ? "a" : ""}(${i
          .map((l, s) =>
            s < 3 ? parseInt(l, 16) : Math.round((parseInt(l, 16) / 255) * 1e3) / 1e3
          )
          .join(", ")})`
      : ""
  );
}
function Ji(r) {
  if (r.type) return r;
  if (r.charAt(0) === "#") return Ji(rb(r));
  const n = r.indexOf("("),
    i = r.substring(0, n);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(i) === -1) throw new Error(fl(9, r));
  let l = r.substring(n + 1, r.length - 1),
    s;
  if (i === "color") {
    if (
      ((l = l.split(" ")),
      (s = l.shift()),
      l.length === 4 && l[3].charAt(0) === "/" && (l[3] = l[3].slice(1)),
      ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(s) === -1)
    )
      throw new Error(fl(10, s));
  } else l = l.split(",");
  return (l = l.map((c) => parseFloat(c))), { type: i, values: l, colorSpace: s };
}
function Hf(r) {
  const { type: n, colorSpace: i } = r;
  let { values: l } = r;
  return (
    n.indexOf("rgb") !== -1
      ? (l = l.map((s, c) => (c < 3 ? parseInt(s, 10) : s)))
      : n.indexOf("hsl") !== -1 && ((l[1] = `${l[1]}%`), (l[2] = `${l[2]}%`)),
    n.indexOf("color") !== -1 ? (l = `${i} ${l.join(" ")}`) : (l = `${l.join(", ")}`),
    `${n}(${l})`
  );
}
function nb(r) {
  r = Ji(r);
  const { values: n } = r,
    i = n[0],
    l = n[1] / 100,
    s = n[2] / 100,
    c = l * Math.min(s, 1 - s),
    f = (x, w = (x + i / 30) % 12) => s - c * Math.max(Math.min(w - 3, 9 - w, 1), -1);
  let m = "rgb";
  const v = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
  return r.type === "hsla" && ((m += "a"), v.push(n[3])), Hf({ type: m, values: v });
}
function Ev(r) {
  r = Ji(r);
  let n = r.type === "hsl" || r.type === "hsla" ? Ji(nb(r)).values : r.values;
  return (
    (n = n.map(
      (i) => (
        r.type !== "color" && (i /= 255), i <= 0.03928 ? i / 12.92 : ((i + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * n[0] + 0.7152 * n[1] + 0.0722 * n[2]).toFixed(3))
  );
}
function ob(r, n) {
  const i = Ev(r),
    l = Ev(n);
  return (Math.max(i, l) + 0.05) / (Math.min(i, l) + 0.05);
}
function li(r, n) {
  return (
    (r = Ji(r)),
    (n = Oh(n)),
    (r.type === "rgb" || r.type === "hsl") && (r.type += "a"),
    r.type === "color" ? (r.values[3] = `/${n}`) : (r.values[3] = n),
    Hf(r)
  );
}
function ib(r, n) {
  if (((r = Ji(r)), (n = Oh(n)), r.type.indexOf("hsl") !== -1)) r.values[2] *= 1 - n;
  else if (r.type.indexOf("rgb") !== -1 || r.type.indexOf("color") !== -1)
    for (let i = 0; i < 3; i += 1) r.values[i] *= 1 - n;
  return Hf(r);
}
function ab(r, n) {
  if (((r = Ji(r)), (n = Oh(n)), r.type.indexOf("hsl") !== -1))
    r.values[2] += (100 - r.values[2]) * n;
  else if (r.type.indexOf("rgb") !== -1)
    for (let i = 0; i < 3; i += 1) r.values[i] += (255 - r.values[i]) * n;
  else if (r.type.indexOf("color") !== -1)
    for (let i = 0; i < 3; i += 1) r.values[i] += (1 - r.values[i]) * n;
  return Hf(r);
}
const wg = N.createContext(null);
function kg() {
  return N.useContext(wg);
}
const lb = typeof Symbol == "function" && Symbol.for,
  sb = lb ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function ub(r, n) {
  return typeof n == "function" ? n(r) : Y({}, r, n);
}
function cb(r) {
  const { children: n, theme: i } = r,
    l = kg(),
    s = N.useMemo(() => {
      const c = l === null ? i : ub(l, i);
      return c != null && (c[sb] = l !== null), c;
    }, [i, l]);
  return M.jsx(wg.Provider, { value: s, children: n });
}
const fb = ["value"],
  db = N.createContext();
function pb(r) {
  let { value: n } = r,
    i = tt(r, fb);
  return M.jsx(db.Provider, Y({ value: n ?? !0 }, i));
}
const hb = N.createContext(void 0);
function mb({ value: r, children: n }) {
  return M.jsx(hb.Provider, { value: r, children: n });
}
function vb(r) {
  const n = Uf(),
    i = Z0() || "",
    { modularCssLayers: l } = r;
  let s = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return (
    !l || n !== null
      ? (s = "")
      : typeof l == "string"
      ? (s = l.replace(/mui(?!\.)/g, s))
      : (s = `@layer ${s};`),
    Qi(() => {
      const c = document.querySelector("head");
      if (!c) return;
      const f = c.firstChild;
      if (s) {
        var m;
        if (
          f &&
          (m = f.hasAttribute) != null &&
          m.call(f, "data-mui-layer-order") &&
          f.getAttribute("data-mui-layer-order") === i
        )
          return;
        const x = document.createElement("style");
        x.setAttribute("data-mui-layer-order", i), (x.textContent = s), c.prepend(x);
      } else {
        var v;
        (v = c.querySelector(`style[data-mui-layer-order="${i}"]`)) == null || v.remove();
      }
    }, [s, i]),
    s ? M.jsx(vg, { styles: s }) : null
  );
}
const Rv = {};
function _v(r, n, i, l = !1) {
  return N.useMemo(() => {
    const s = (r && n[r]) || n;
    if (typeof i == "function") {
      const c = i(s),
        f = r ? Y({}, n, { [r]: c }) : c;
      return l ? () => f : f;
    }
    return r ? Y({}, n, { [r]: i }) : Y({}, n, i);
  }, [r, n, i, l]);
}
function gb(r) {
  const { children: n, theme: i, themeId: l } = r,
    s = Uf(Rv),
    c = kg() || Rv,
    f = _v(l, s, i),
    m = _v(l, c, i, !0),
    v = f.direction === "rtl",
    x = vb(f);
  return M.jsx(cb, {
    theme: m,
    children: M.jsx(Nf.Provider, {
      value: f,
      children: M.jsx(pb, {
        value: v,
        children: M.jsxs(mb, { value: f?.components, children: [x, n] }),
      }),
    }),
  });
}
const yb = ["className", "component", "disableGutters", "fixed", "maxWidth", "classes"],
  xb = Bf(),
  bb = eb("div", {
    name: "MuiContainer",
    slot: "Root",
    overridesResolver: (r, n) => {
      const { ownerState: i } = r;
      return [
        n.root,
        n[`maxWidth${mt(String(i.maxWidth))}`],
        i.fixed && n.fixed,
        i.disableGutters && n.disableGutters,
      ];
    },
  }),
  wb = (r) => bg({ props: r, name: "MuiContainer", defaultTheme: xb }),
  kb = (r, n) => {
    const i = (v) => Er(n, v),
      { classes: l, fixed: s, disableGutters: c, maxWidth: f } = r,
      m = { root: ["root", f && `maxWidth${mt(String(f))}`, s && "fixed", c && "disableGutters"] };
    return Dr(m, i, l);
  };
function Sb(r = {}) {
  const {
      createStyledComponent: n = bb,
      useThemeProps: i = wb,
      componentName: l = "MuiContainer",
    } = r,
    s = n(
      ({ theme: f, ownerState: m }) =>
        Y(
          {
            width: "100%",
            marginLeft: "auto",
            boxSizing: "border-box",
            marginRight: "auto",
            display: "block",
          },
          !m.disableGutters && {
            paddingLeft: f.spacing(2),
            paddingRight: f.spacing(2),
            [f.breakpoints.up("sm")]: { paddingLeft: f.spacing(3), paddingRight: f.spacing(3) },
          }
        ),
      ({ theme: f, ownerState: m }) =>
        m.fixed &&
        Object.keys(f.breakpoints.values).reduce((v, x) => {
          const w = x,
            k = f.breakpoints.values[w];
          return k !== 0 && (v[f.breakpoints.up(w)] = { maxWidth: `${k}${f.breakpoints.unit}` }), v;
        }, {}),
      ({ theme: f, ownerState: m }) =>
        Y(
          {},
          m.maxWidth === "xs" && {
            [f.breakpoints.up("xs")]: { maxWidth: Math.max(f.breakpoints.values.xs, 444) },
          },
          m.maxWidth &&
            m.maxWidth !== "xs" && {
              [f.breakpoints.up(m.maxWidth)]: {
                maxWidth: `${f.breakpoints.values[m.maxWidth]}${f.breakpoints.unit}`,
              },
            }
        )
    );
  return N.forwardRef(function (m, v) {
    const x = i(m),
      {
        className: w,
        component: k = "div",
        disableGutters: E = !1,
        fixed: j = !1,
        maxWidth: z = "lg",
      } = x,
      b = tt(x, yb),
      O = Y({}, x, { component: k, disableGutters: E, fixed: j, maxWidth: z }),
      q = kb(O, l);
    return M.jsx(s, Y({ as: k, ownerState: O, className: yg(q.root, w), ref: v }, b));
  });
}
function Cb(r, n) {
  return Y(
    {
      toolbar: {
        minHeight: 56,
        [r.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
        [r.up("sm")]: { minHeight: 64 },
      },
    },
    n
  );
}
const du = { black: "#000", white: "#fff" },
  $b = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
  Qa = {
    50: "#f3e5f5",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    700: "#7b1fa2",
  },
  Za = { 300: "#e57373", 400: "#ef5350", 500: "#f44336", 700: "#d32f2f", 800: "#c62828" },
  Vs = { 300: "#ffb74d", 400: "#ffa726", 500: "#ff9800", 700: "#f57c00", 900: "#e65100" },
  Ja = { 50: "#e3f2fd", 200: "#90caf9", 400: "#42a5f5", 700: "#1976d2", 800: "#1565c0" },
  el = { 300: "#4fc3f7", 400: "#29b6f6", 500: "#03a9f4", 700: "#0288d1", 900: "#01579b" },
  tl = {
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
  },
  Eb = ["mode", "contrastThreshold", "tonalOffset"],
  Pv = {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: du.white, default: du.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  Lp = {
    text: {
      primary: du.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: du.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
function Tv(r, n, i, l) {
  const s = l.light || l,
    c = l.dark || l * 1.5;
  r[n] ||
    (r.hasOwnProperty(i)
      ? (r[n] = r[i])
      : n === "light"
      ? (r.light = ab(r.main, s))
      : n === "dark" && (r.dark = ib(r.main, c)));
}
function Rb(r = "light") {
  return r === "dark"
    ? { main: Ja[200], light: Ja[50], dark: Ja[400] }
    : { main: Ja[700], light: Ja[400], dark: Ja[800] };
}
function _b(r = "light") {
  return r === "dark"
    ? { main: Qa[200], light: Qa[50], dark: Qa[400] }
    : { main: Qa[500], light: Qa[300], dark: Qa[700] };
}
function Pb(r = "light") {
  return r === "dark"
    ? { main: Za[500], light: Za[300], dark: Za[700] }
    : { main: Za[700], light: Za[400], dark: Za[800] };
}
function Tb(r = "light") {
  return r === "dark"
    ? { main: el[400], light: el[300], dark: el[700] }
    : { main: el[700], light: el[500], dark: el[900] };
}
function Ob(r = "light") {
  return r === "dark"
    ? { main: tl[400], light: tl[300], dark: tl[700] }
    : { main: tl[800], light: tl[500], dark: tl[900] };
}
function Mb(r = "light") {
  return r === "dark"
    ? { main: Vs[400], light: Vs[300], dark: Vs[700] }
    : { main: "#ed6c02", light: Vs[500], dark: Vs[900] };
}
function zb(r) {
  const { mode: n = "light", contrastThreshold: i = 3, tonalOffset: l = 0.2 } = r,
    s = tt(r, Eb),
    c = r.primary || Rb(n),
    f = r.secondary || _b(n),
    m = r.error || Pb(n),
    v = r.info || Tb(n),
    x = r.success || Ob(n),
    w = r.warning || Mb(n);
  function k(b) {
    return ob(b, Lp.text.primary) >= i ? Lp.text.primary : Pv.text.primary;
  }
  const E = ({
      color: b,
      name: O,
      mainShade: q = 500,
      lightShade: K = 300,
      darkShade: X = 700,
    }) => {
      if (((b = Y({}, b)), !b.main && b[q] && (b.main = b[q]), !b.hasOwnProperty("main")))
        throw new Error(fl(11, O ? ` (${O})` : "", q));
      if (typeof b.main != "string")
        throw new Error(fl(12, O ? ` (${O})` : "", JSON.stringify(b.main)));
      return (
        Tv(b, "light", K, l), Tv(b, "dark", X, l), b.contrastText || (b.contrastText = k(b.main)), b
      );
    },
    j = { dark: Lp, light: Pv };
  return yo(
    Y(
      {
        common: Y({}, du),
        mode: n,
        primary: E({ color: c, name: "primary" }),
        secondary: E({
          color: f,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: E({ color: m, name: "error" }),
        warning: E({ color: w, name: "warning" }),
        info: E({ color: v, name: "info" }),
        success: E({ color: x, name: "success" }),
        grey: $b,
        contrastThreshold: i,
        getContrastText: k,
        augmentColor: E,
        tonalOffset: l,
      },
      j[n]
    ),
    s
  );
}
const Nb = [
  "fontFamily",
  "fontSize",
  "fontWeightLight",
  "fontWeightRegular",
  "fontWeightMedium",
  "fontWeightBold",
  "htmlFontSize",
  "allVariants",
  "pxToRem",
];
function Lb(r) {
  return Math.round(r * 1e5) / 1e5;
}
const Ov = { textTransform: "uppercase" },
  Mv = '"Roboto", "Helvetica", "Arial", sans-serif';
function jb(r, n) {
  const i = typeof n == "function" ? n(r) : n,
    {
      fontFamily: l = Mv,
      fontSize: s = 14,
      fontWeightLight: c = 300,
      fontWeightRegular: f = 400,
      fontWeightMedium: m = 500,
      fontWeightBold: v = 700,
      htmlFontSize: x = 16,
      allVariants: w,
      pxToRem: k,
    } = i,
    E = tt(i, Nb),
    j = s / 14,
    z = k || ((q) => `${(q / x) * j}rem`),
    b = (q, K, X, V, D) =>
      Y(
        { fontFamily: l, fontWeight: q, fontSize: z(K), lineHeight: X },
        l === Mv ? { letterSpacing: `${Lb(V / K)}em` } : {},
        D,
        w
      ),
    O = {
      h1: b(c, 96, 1.167, -1.5),
      h2: b(c, 60, 1.2, -0.5),
      h3: b(f, 48, 1.167, 0),
      h4: b(f, 34, 1.235, 0.25),
      h5: b(f, 24, 1.334, 0),
      h6: b(m, 20, 1.6, 0.15),
      subtitle1: b(f, 16, 1.75, 0.15),
      subtitle2: b(m, 14, 1.57, 0.1),
      body1: b(f, 16, 1.5, 0.15),
      body2: b(f, 14, 1.43, 0.15),
      button: b(m, 14, 1.75, 0.4, Ov),
      caption: b(f, 12, 1.66, 0.4),
      overline: b(f, 12, 2.66, 1, Ov),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return yo(
    Y(
      {
        htmlFontSize: x,
        pxToRem: z,
        fontFamily: l,
        fontSize: s,
        fontWeightLight: c,
        fontWeightRegular: f,
        fontWeightMedium: m,
        fontWeightBold: v,
      },
      O
    ),
    E,
    { clone: !1 }
  );
}
const Ib = 0.2,
  Db = 0.14,
  Ab = 0.12;
function xt(...r) {
  return [
    `${r[0]}px ${r[1]}px ${r[2]}px ${r[3]}px rgba(0,0,0,${Ib})`,
    `${r[4]}px ${r[5]}px ${r[6]}px ${r[7]}px rgba(0,0,0,${Db})`,
    `${r[8]}px ${r[9]}px ${r[10]}px ${r[11]}px rgba(0,0,0,${Ab})`,
  ].join(",");
}
const Fb = [
    "none",
    xt(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    xt(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    xt(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    xt(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    xt(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    xt(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    xt(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    xt(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    xt(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    xt(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    xt(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    xt(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    xt(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    xt(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    xt(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    xt(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    xt(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    xt(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    xt(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    xt(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    xt(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    xt(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    xt(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    xt(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  Wb = ["duration", "easing", "delay"],
  Bb = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  Sg = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function zv(r) {
  return `${Math.round(r)}ms`;
}
function Ub(r) {
  if (!r) return 0;
  const n = r / 36;
  return Math.round((4 + 15 * n ** 0.25 + n / 5) * 10);
}
function Vb(r) {
  const n = Y({}, Bb, r.easing),
    i = Y({}, Sg, r.duration);
  return Y(
    {
      getAutoHeightDuration: Ub,
      create: (s = ["all"], c = {}) => {
        const { duration: f = i.standard, easing: m = n.easeInOut, delay: v = 0 } = c;
        return (
          tt(c, Wb),
          (Array.isArray(s) ? s : [s])
            .map(
              (x) =>
                `${x} ${typeof f == "string" ? f : zv(f)} ${m} ${typeof v == "string" ? v : zv(v)}`
            )
            .join(",")
        );
      },
    },
    r,
    { easing: n, duration: i }
  );
}
const Hb = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  Gb = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Mh(r = {}, ...n) {
  const { mixins: i = {}, palette: l = {}, transitions: s = {}, typography: c = {} } = r,
    f = tt(r, Gb);
  if (r.vars) throw new Error(fl(18));
  const m = zb(l),
    v = Bf(r);
  let x = yo(v, {
    mixins: Cb(v.breakpoints, i),
    palette: m,
    shadows: Fb.slice(),
    typography: jb(m, c),
    transitions: Vb(s),
    zIndex: Y({}, Hb),
  });
  return (
    (x = yo(x, f)),
    (x = n.reduce((w, k) => yo(w, k), x)),
    (x.unstable_sxConfig = Y({}, Wf, f?.unstable_sxConfig)),
    (x.unstable_sx = function (k) {
      return ku({ sx: k, theme: this });
    }),
    x
  );
}
const Gf = Mh();
function qf() {
  const r = Vf(Gf);
  return r[Zi] || r;
}
function fr({ props: r, name: n }) {
  return bg({ props: r, name: n, defaultTheme: Gf, themeId: Zi });
}
const Cg = (r) => mf(r) && r !== "classes",
  St = xg({ themeId: Zi, defaultTheme: Gf, rootShouldForwardProp: Cg }),
  qb = ["theme"];
function Kb(r) {
  let { theme: n } = r,
    i = tt(r, qb);
  const l = n[Zi];
  return M.jsx(gb, Y({}, i, { themeId: l ? Zi : void 0, theme: l || n }));
}
const Nv = (r) => {
  let n;
  return r < 1 ? (n = 5.11916 * r ** 2) : (n = 4.5 * Math.log(r + 1) + 2), (n / 100).toFixed(2);
};
function Xb(r) {
  return M.jsx(vg, Y({}, r, { defaultTheme: Gf, themeId: Zi }));
}
const Yb = (r, n) =>
    Y(
      {
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        boxSizing: "border-box",
        WebkitTextSizeAdjust: "100%",
      },
      n && !r.vars && { colorScheme: r.palette.mode }
    ),
  Qb = (r) =>
    Y({ color: (r.vars || r).palette.text.primary }, r.typography.body1, {
      backgroundColor: (r.vars || r).palette.background.default,
      "@media print": { backgroundColor: (r.vars || r).palette.common.white },
    }),
  Zb = (r, n = !1) => {
    var i, l;
    const s = {};
    n &&
      r.colorSchemes &&
      Object.entries(r.colorSchemes).forEach(([m, v]) => {
        var x;
        s[r.getColorSchemeSelector(m).replace(/\s*&/, "")] = {
          colorScheme: (x = v.palette) == null ? void 0 : x.mode,
        };
      });
    let c = Y(
      {
        html: Yb(r, n),
        "*, *::before, *::after": { boxSizing: "inherit" },
        "strong, b": { fontWeight: r.typography.fontWeightBold },
        body: Y({ margin: 0 }, Qb(r), {
          "&::backdrop": { backgroundColor: (r.vars || r).palette.background.default },
        }),
      },
      s
    );
    const f =
      (i = r.components) == null || (l = i.MuiCssBaseline) == null ? void 0 : l.styleOverrides;
    return f && (c = [c, f]), c;
  };
function Jb(r) {
  const n = fr({ props: r, name: "MuiCssBaseline" }),
    { children: i, enableColorScheme: l = !1 } = n;
  return M.jsxs(N.Fragment, { children: [M.jsx(Xb, { styles: (s) => Zb(s, l) }), i] });
}
const Ke = {
    background: { default: "#f0f2f5" },
    text: { main: "#7b809a", focus: "#7b809a" },
    transparent: { main: "transparent" },
    white: { main: "#ffffff", focus: "#ffffff" },
    black: { light: "#000000", main: "#000000", focus: "#000000" },
    primary: { main: "#e91e63", focus: "#e91e63" },
    secondary: { main: "#7b809a", focus: "#8f93a9" },
    info: { main: "#1A73E8", focus: "#1662C4" },
    success: { main: "#4CAF50", focus: "#67bb6a" },
    warning: { main: "#fb8c00", focus: "#fc9d26" },
    error: { main: "#F44335", focus: "#f65f53" },
    light: { main: "#f0f2f5", focus: "#f0f2f5" },
    dark: { main: "#344767", focus: "#2c3c58" },
    grey: {
      100: "#f8f9fa",
      200: "#f0f2f5",
      300: "#dee2e6",
      400: "#ced4da",
      500: "#adb5bd",
      600: "#6c757d",
      700: "#495057",
      800: "#343a40",
      900: "#212529",
    },
    gradients: {
      primary: { main: "#EC407A", state: "#D81B60" },
      secondary: { main: "#747b8a", state: "#495361" },
      info: { main: "#49a3f1", state: "#1A73E8" },
      success: { main: "#66BB6A", state: "#43A047" },
      warning: { main: "#FFA726", state: "#FB8C00" },
      error: { main: "#EF5350", state: "#E53935" },
      light: { main: "#EBEFF4", state: "#CED4DA" },
      dark: { main: "#42424a", state: "#191919" },
    },
    socialMediaColors: {
      facebook: { main: "#3b5998", dark: "#344e86" },
      twitter: { main: "#55acee", dark: "#3ea1ec" },
      instagram: { main: "#125688", dark: "#0e456d" },
      linkedin: { main: "#0077b5", dark: "#00669c" },
      pinterest: { main: "#cc2127", dark: "#b21d22" },
      youtube: { main: "#e52d27", dark: "#d41f1a" },
      vimeo: { main: "#1ab7ea", dark: "#13a3d2" },
      slack: { main: "#3aaf85", dark: "#329874" },
      dribbble: { main: "#ea4c89", dark: "#e73177" },
      github: { main: "#24292e", dark: "#171a1d" },
      reddit: { main: "#ff4500", dark: "#e03d00" },
      tumblr: { main: "#35465c", dark: "#2a3749" },
    },
    badgeColors: {
      primary: { background: "#f8b3ca", text: "#cc084b" },
      secondary: { background: "#d7d9e1", text: "#6c757d" },
      info: { background: "#aecef7", text: "#095bc6" },
      success: { background: "#bce2be", text: "#339537" },
      warning: { background: "#ffd59f", text: "#c87000" },
      error: { background: "#fcd3d0", text: "#f61200" },
      light: { background: "#ffffff", text: "#c7d3de" },
      dark: { background: "#8097bf", text: "#1e2e4a" },
    },
    coloredShadows: {
      primary: "#e91e62",
      secondary: "#110e0e",
      info: "#00bbd4",
      success: "#4caf4f",
      warning: "#ff9900",
      error: "#f44336",
      light: "#adb5bd",
      dark: "#404040",
    },
    inputBorderColor: "#d2d6da",
    tabs: { indicator: { boxShadow: "#ddd" } },
  },
  zh = { values: { xs: 0, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400 } };
function U(r, n = 16) {
  return `${r / n}rem`;
}
const { dark: $g } = Ke,
  Ve = {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontFamily2: '"Roboto Slab", sans-serif',
    fontWeightLighter: 100,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    fontSizeXXS: U(10.4),
    fontSizeXS: U(12),
    fontSizeSM: U(14),
    fontSizeMD: U(16),
    fontSizeLG: U(18),
    fontSizeXL: U(20),
    fontSize2XL: U(24),
    fontSize3XL: U(30),
  },
  rl = { color: $g.main, fontWeight: Ve.fontWeightBold },
  nl = {
    fontFamily: Ve.fontFamily,
    color: $g.main,
    fontWeight: Ve.fontWeightLight,
    lineHeight: 1.2,
  },
  At = {
    fontFamily: Ve.fontFamily,
    fontWeightLighter: Ve.fontWeightLighter,
    fontWeightLight: Ve.fontWeightLight,
    fontWeightRegular: Ve.fontWeightRegular,
    fontWeightMedium: Ve.fontWeightMedium,
    fontWeightBold: Ve.fontWeightBold,
    h1: { fontFamily: Ve.fontFamily2, fontSize: U(48), lineHeight: 1.25, ...rl },
    h2: { fontFamily: Ve.fontFamily2, fontSize: U(36), lineHeight: 1.3, ...rl },
    h3: { fontFamily: Ve.fontFamily2, fontSize: U(30), lineHeight: 1.375, ...rl },
    h4: { fontFamily: Ve.fontFamily, fontSize: U(24), lineHeight: 1.375, ...rl },
    h5: { fontFamily: Ve.fontFamily, fontSize: U(20), lineHeight: 1.375, ...rl },
    h6: { fontFamily: Ve.fontFamily, fontSize: U(16), lineHeight: 1.625, ...rl },
    subtitle1: {
      fontFamily: Ve.fontFamily,
      fontSize: Ve.fontSizeXL,
      fontWeight: Ve.fontWeightLight,
      lineHeight: 1.625,
    },
    subtitle2: {
      fontFamily: Ve.fontFamily,
      fontSize: Ve.fontSizeMD,
      fontWeight: Ve.fontWeightLight,
      lineHeight: 1.6,
    },
    body1: {
      fontFamily: Ve.fontFamily,
      fontSize: Ve.fontSizeXL,
      fontWeight: Ve.fontWeightRegular,
      lineHeight: 1.625,
    },
    body2: {
      fontFamily: Ve.fontFamily,
      fontSize: Ve.fontSizeMD,
      fontWeight: Ve.fontWeightLight,
      lineHeight: 1.6,
    },
    button: {
      fontFamily: Ve.fontFamily,
      fontSize: Ve.fontSizeSM,
      fontWeight: Ve.fontWeightLight,
      lineHeight: 1.5,
      textTransform: "uppercase",
    },
    caption: {
      fontFamily: Ve.fontFamily,
      fontSize: Ve.fontSizeXS,
      fontWeight: Ve.fontWeightLight,
      lineHeight: 1.25,
    },
    overline: { fontFamily: Ve.fontFamily },
    d1: { fontSize: U(80), ...nl },
    d2: { fontSize: U(72), ...nl },
    d3: { fontSize: U(64), ...nl },
    d4: { fontSize: U(56), ...nl },
    d5: { fontSize: U(48), ...nl },
    d6: { fontSize: U(40), ...nl },
    size: {
      xxs: Ve.fontSizeXXS,
      xs: Ve.fontSizeXS,
      sm: Ve.fontSizeSM,
      md: Ve.fontSizeMD,
      lg: Ve.fontSizeLG,
      xl: Ve.fontSizeXL,
      "2xl": Ve.fontSize2XL,
      "3xl": Ve.fontSize3XL,
    },
    lineHeight: { sm: 1.25, md: 1.5, lg: 2 },
  };
var gf = { exports: {} };
var ew = gf.exports,
  Lv;
function tw() {
  return (
    Lv ||
      ((Lv = 1),
      (function (r, n) {
        (function (i, l) {
          r.exports = l();
        })(ew, function () {
          for (
            var i = function (d, h, g) {
                return h === void 0 && (h = 0), g === void 0 && (g = 1), d < h ? h : d > g ? g : d;
              },
              l = i,
              s = function (d) {
                (d._clipped = !1), (d._unclipped = d.slice(0));
                for (var h = 0; h <= 3; h++)
                  h < 3
                    ? ((d[h] < 0 || d[h] > 255) && (d._clipped = !0), (d[h] = l(d[h], 0, 255)))
                    : h === 3 && (d[h] = l(d[h], 0, 1));
                return d;
              },
              c = {},
              f = 0,
              m = [
                "Boolean",
                "Number",
                "String",
                "Function",
                "Array",
                "Date",
                "RegExp",
                "Undefined",
                "Null",
              ];
            f < m.length;
            f += 1
          ) {
            var v = m[f];
            c["[object " + v + "]"] = v.toLowerCase();
          }
          var x = function (d) {
              return c[Object.prototype.toString.call(d)] || "object";
            },
            w = x,
            k = function (d, h) {
              return (
                h === void 0 && (h = null),
                d.length >= 3
                  ? Array.prototype.slice.call(d)
                  : w(d[0]) == "object" && h
                  ? h
                      .split("")
                      .filter(function (g) {
                        return d[0][g] !== void 0;
                      })
                      .map(function (g) {
                        return d[0][g];
                      })
                  : d[0]
              );
            },
            E = x,
            j = function (d) {
              if (d.length < 2) return null;
              var h = d.length - 1;
              return E(d[h]) == "string" ? d[h].toLowerCase() : null;
            },
            z = Math.PI,
            b = {
              clip_rgb: s,
              limit: i,
              type: x,
              unpack: k,
              last: j,
              TWOPI: z * 2,
              PITHIRD: z / 3,
              DEG2RAD: z / 180,
              RAD2DEG: 180 / z,
            },
            O = { format: {}, autodetect: [] },
            q = b.last,
            K = b.clip_rgb,
            X = b.type,
            V = O,
            D = function () {
              for (var h = [], g = arguments.length; g--; ) h[g] = arguments[g];
              var S = this;
              if (X(h[0]) === "object" && h[0].constructor && h[0].constructor === this.constructor)
                return h[0];
              var _ = q(h),
                P = !1;
              if (!_) {
                (P = !0),
                  V.sorted ||
                    ((V.autodetect = V.autodetect.sort(function (te, ge) {
                      return ge.p - te.p;
                    })),
                    (V.sorted = !0));
                for (var $ = 0, I = V.autodetect; $ < I.length; $ += 1) {
                  var F = I[$];
                  if (((_ = F.test.apply(F, h)), _)) break;
                }
              }
              if (V.format[_]) {
                var Z = V.format[_].apply(null, P ? h : h.slice(0, -1));
                S._rgb = K(Z);
              } else throw new Error("unknown format: " + h);
              S._rgb.length === 3 && S._rgb.push(1);
            };
          D.prototype.toString = function () {
            return X(this.hex) == "function" ? this.hex() : "[" + this._rgb.join(",") + "]";
          };
          var A = D,
            Q = function () {
              for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
              return new (Function.prototype.bind.apply(Q.Color, [null].concat(d)))();
            };
          (Q.Color = A), (Q.version = "2.4.2");
          var ae = Q,
            xe = b.unpack,
            he = Math.max,
            Te = function () {
              for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
              var g = xe(d, "rgb"),
                S = g[0],
                _ = g[1],
                P = g[2];
              (S = S / 255), (_ = _ / 255), (P = P / 255);
              var $ = 1 - he(S, he(_, P)),
                I = $ < 1 ? 1 / (1 - $) : 0,
                F = (1 - S - $) * I,
                Z = (1 - _ - $) * I,
                te = (1 - P - $) * I;
              return [F, Z, te, $];
            },
            ue = Te,
            fe = b.unpack,
            ye = function () {
              for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
              d = fe(d, "cmyk");
              var g = d[0],
                S = d[1],
                _ = d[2],
                P = d[3],
                $ = d.length > 4 ? d[4] : 1;
              return P === 1
                ? [0, 0, 0, $]
                : [
                    g >= 1 ? 0 : 255 * (1 - g) * (1 - P),
                    S >= 1 ? 0 : 255 * (1 - S) * (1 - P),
                    _ >= 1 ? 0 : 255 * (1 - _) * (1 - P),
                    $,
                  ];
            },
            me = ye,
            ce = ae,
            se = A,
            J = O,
            de = b.unpack,
            R = b.type,
            H = ue;
          (se.prototype.cmyk = function () {
            return H(this._rgb);
          }),
            (ce.cmyk = function () {
              for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
              return new (Function.prototype.bind.apply(se, [null].concat(d, ["cmyk"])))();
            }),
            (J.format.cmyk = me),
            J.autodetect.push({
              p: 2,
              test: function () {
                for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
                if (((d = de(d, "cmyk")), R(d) === "array" && d.length === 4)) return "cmyk";
              },
            });
          var ve = b.unpack,
            Me = b.last,
            be = function (d) {
              return Math.round(d * 100) / 100;
            },
            Oe = function () {
              for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
              var g = ve(d, "hsla"),
                S = Me(d) || "lsa";
              return (
                (g[0] = be(g[0] || 0)),
                (g[1] = be(g[1] * 100) + "%"),
                (g[2] = be(g[2] * 100) + "%"),
                S === "hsla" || (g.length > 3 && g[3] < 1)
                  ? ((g[3] = g.length > 3 ? g[3] : 1), (S = "hsla"))
                  : (g.length = 3),
                S + "(" + g.join(",") + ")"
              );
            },
            pe = Oe,
            je = b.unpack,
            Re = function () {
              for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
              d = je(d, "rgba");
              var g = d[0],
                S = d[1],
                _ = d[2];
              (g /= 255), (S /= 255), (_ /= 255);
              var P = Math.min(g, S, _),
                $ = Math.max(g, S, _),
                I = ($ + P) / 2,
                F,
                Z;
              return (
                $ === P
                  ? ((F = 0), (Z = Number.NaN))
                  : (F = I < 0.5 ? ($ - P) / ($ + P) : ($ - P) / (2 - $ - P)),
                g == $
                  ? (Z = (S - _) / ($ - P))
                  : S == $
                  ? (Z = 2 + (_ - g) / ($ - P))
                  : _ == $ && (Z = 4 + (g - S) / ($ - P)),
                (Z *= 60),
                Z < 0 && (Z += 360),
                d.length > 3 && d[3] !== void 0 ? [Z, F, I, d[3]] : [Z, F, I]
              );
            },
            He = Re,
            dr = b.unpack,
            Ht = b.last,
            bo = pe,
            an = He,
            ln = Math.round,
            wo = function () {
              for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
              var g = dr(d, "rgba"),
                S = Ht(d) || "rgb";
              return S.substr(0, 3) == "hsl"
                ? bo(an(g), S)
                : ((g[0] = ln(g[0])),
                  (g[1] = ln(g[1])),
                  (g[2] = ln(g[2])),
                  (S === "rgba" || (g.length > 3 && g[3] < 1)) &&
                    ((g[3] = g.length > 3 ? g[3] : 1), (S = "rgba")),
                  S + "(" + g.slice(0, S === "rgb" ? 3 : 4).join(",") + ")");
            },
            Yn = wo,
            _n = b.unpack,
            Pn = Math.round,
            Qn = function () {
              for (var d, h = [], g = arguments.length; g--; ) h[g] = arguments[g];
              h = _n(h, "hsl");
              var S = h[0],
                _ = h[1],
                P = h[2],
                $,
                I,
                F;
              if (_ === 0) $ = I = F = P * 255;
              else {
                var Z = [0, 0, 0],
                  te = [0, 0, 0],
                  ge = P < 0.5 ? P * (1 + _) : P + _ - P * _,
                  ee = 2 * P - ge,
                  Se = S / 360;
                (Z[0] = Se + 1 / 3), (Z[1] = Se), (Z[2] = Se - 1 / 3);
                for (var we = 0; we < 3; we++)
                  Z[we] < 0 && (Z[we] += 1),
                    Z[we] > 1 && (Z[we] -= 1),
                    6 * Z[we] < 1
                      ? (te[we] = ee + (ge - ee) * 6 * Z[we])
                      : 2 * Z[we] < 1
                      ? (te[we] = ge)
                      : 3 * Z[we] < 2
                      ? (te[we] = ee + (ge - ee) * (2 / 3 - Z[we]) * 6)
                      : (te[we] = ee);
                (d = [Pn(te[0] * 255), Pn(te[1] * 255), Pn(te[2] * 255)]),
                  ($ = d[0]),
                  (I = d[1]),
                  (F = d[2]);
              }
              return h.length > 3 ? [$, I, F, h[3]] : [$, I, F, 1];
            },
            Mt = Qn,
            Ft = Mt,
            sn = O,
            Tn = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
            pr = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
            hr = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
            On =
              /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
            Fr = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
            Wr =
              /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
            Fe = Math.round,
            un = function (d) {
              d = d.toLowerCase().trim();
              var h;
              if (sn.format.named)
                try {
                  return sn.format.named(d);
                } catch {}
              if ((h = d.match(Tn))) {
                for (var g = h.slice(1, 4), S = 0; S < 3; S++) g[S] = +g[S];
                return (g[3] = 1), g;
              }
              if ((h = d.match(pr))) {
                for (var _ = h.slice(1, 5), P = 0; P < 4; P++) _[P] = +_[P];
                return _;
              }
              if ((h = d.match(hr))) {
                for (var $ = h.slice(1, 4), I = 0; I < 3; I++) $[I] = Fe($[I] * 2.55);
                return ($[3] = 1), $;
              }
              if ((h = d.match(On))) {
                for (var F = h.slice(1, 5), Z = 0; Z < 3; Z++) F[Z] = Fe(F[Z] * 2.55);
                return (F[3] = +F[3]), F;
              }
              if ((h = d.match(Fr))) {
                var te = h.slice(1, 4);
                (te[1] *= 0.01), (te[2] *= 0.01);
                var ge = Ft(te);
                return (ge[3] = 1), ge;
              }
              if ((h = d.match(Wr))) {
                var ee = h.slice(1, 4);
                (ee[1] *= 0.01), (ee[2] *= 0.01);
                var Se = Ft(ee);
                return (Se[3] = +h[4]), Se;
              }
            };
          un.test = function (d) {
            return Tn.test(d) || pr.test(d) || hr.test(d) || On.test(d) || Fr.test(d) || Wr.test(d);
          };
          var Zn = un,
            ta = ae,
            ra = A,
            $l = O,
            Jf = b.type,
            El = Yn,
            na = Zn;
          (ra.prototype.css = function (d) {
            return El(this._rgb, d);
          }),
            (ta.css = function () {
              for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
              return new (Function.prototype.bind.apply(ra, [null].concat(d, ["css"])))();
            }),
            ($l.format.css = na),
            $l.autodetect.push({
              p: 5,
              test: function (d) {
                for (var h = [], g = arguments.length - 1; g-- > 0; ) h[g] = arguments[g + 1];
                if (!h.length && Jf(d) === "string" && na.test(d)) return "css";
              },
            });
          var oa = A,
            Rl = ae,
            _l = O,
            ko = b.unpack;
          (_l.format.gl = function () {
            for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
            var g = ko(d, "rgba");
            return (g[0] *= 255), (g[1] *= 255), (g[2] *= 255), g;
          }),
            (Rl.gl = function () {
              for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
              return new (Function.prototype.bind.apply(oa, [null].concat(d, ["gl"])))();
            }),
            (oa.prototype.gl = function () {
              var d = this._rgb;
              return [d[0] / 255, d[1] / 255, d[2] / 255, d[3]];
            });
          var So = b.unpack,
            $u = function () {
              for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
              var g = So(d, "rgb"),
                S = g[0],
                _ = g[1],
                P = g[2],
                $ = Math.min(S, _, P),
                I = Math.max(S, _, P),
                F = I - $,
                Z = (F * 100) / 255,
                te = ($ / (255 - F)) * 100,
                ge;
              return (
                F === 0
                  ? (ge = Number.NaN)
                  : (S === I && (ge = (_ - P) / F),
                    _ === I && (ge = 2 + (P - S) / F),
                    P === I && (ge = 4 + (S - _) / F),
                    (ge *= 60),
                    ge < 0 && (ge += 360)),
                [ge, Z, te]
              );
            },
            Eu = $u,
            Ru = b.unpack,
            _u = Math.floor,
            Pu = function () {
              for (var d, h, g, S, _, P, $ = [], I = arguments.length; I--; ) $[I] = arguments[I];
              $ = Ru($, "hcg");
              var F = $[0],
                Z = $[1],
                te = $[2],
                ge,
                ee,
                Se;
              te = te * 255;
              var we = Z * 255;
              if (Z === 0) ge = ee = Se = te;
              else {
                F === 360 && (F = 0), F > 360 && (F -= 360), F < 0 && (F += 360), (F /= 60);
                var We = _u(F),
                  Ie = F - We,
                  De = te * (1 - Z),
                  Ye = De + we * (1 - Ie),
                  Pt = De + we * Ie,
                  $t = De + we;
                switch (We) {
                  case 0:
                    (d = [$t, Pt, De]), (ge = d[0]), (ee = d[1]), (Se = d[2]);
                    break;
                  case 1:
                    (h = [Ye, $t, De]), (ge = h[0]), (ee = h[1]), (Se = h[2]);
                    break;
                  case 2:
                    (g = [De, $t, Pt]), (ge = g[0]), (ee = g[1]), (Se = g[2]);
                    break;
                  case 3:
                    (S = [De, Ye, $t]), (ge = S[0]), (ee = S[1]), (Se = S[2]);
                    break;
                  case 4:
                    (_ = [Pt, De, $t]), (ge = _[0]), (ee = _[1]), (Se = _[2]);
                    break;
                  case 5:
                    (P = [$t, De, Ye]), (ge = P[0]), (ee = P[1]), (Se = P[2]);
                    break;
                }
              }
              return [ge, ee, Se, $.length > 3 ? $[3] : 1];
            },
            Pl = Pu,
            Tu = b.unpack,
            fi = b.type,
            Tl = ae,
            Co = A,
            Ou = O,
            di = Eu;
          (Co.prototype.hcg = function () {
            return di(this._rgb);
          }),
            (Tl.hcg = function () {
              for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
              return new (Function.prototype.bind.apply(Co, [null].concat(d, ["hcg"])))();
            }),
            (Ou.format.hcg = Pl),
            Ou.autodetect.push({
              p: 1,
              test: function () {
                for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
                if (((d = Tu(d, "hcg")), fi(d) === "array" && d.length === 3)) return "hcg";
              },
            });
          var ia = b.unpack,
            aa = b.last,
            $o = Math.round,
            ed = function () {
              for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
              var g = ia(d, "rgba"),
                S = g[0],
                _ = g[1],
                P = g[2],
                $ = g[3],
                I = aa(d) || "auto";
              $ === void 0 && ($ = 1),
                I === "auto" && (I = $ < 1 ? "rgba" : "rgb"),
                (S = $o(S)),
                (_ = $o(_)),
                (P = $o(P));
              var F = (S << 16) | (_ << 8) | P,
                Z = "000000" + F.toString(16);
              Z = Z.substr(Z.length - 6);
              var te = "0" + $o($ * 255).toString(16);
              switch (((te = te.substr(te.length - 2)), I.toLowerCase())) {
                case "rgba":
                  return "#" + Z + te;
                case "argb":
                  return "#" + te + Z;
                default:
                  return "#" + Z;
              }
            },
            Mu = ed,
            td = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
            Jn = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
            zu = function (d) {
              if (d.match(td)) {
                (d.length === 4 || d.length === 7) && (d = d.substr(1)),
                  d.length === 3 &&
                    ((d = d.split("")), (d = d[0] + d[0] + d[1] + d[1] + d[2] + d[2]));
                var h = parseInt(d, 16),
                  g = h >> 16,
                  S = (h >> 8) & 255,
                  _ = h & 255;
                return [g, S, _, 1];
              }
              if (d.match(Jn)) {
                (d.length === 5 || d.length === 9) && (d = d.substr(1)),
                  d.length === 4 &&
                    ((d = d.split("")),
                    (d = d[0] + d[0] + d[1] + d[1] + d[2] + d[2] + d[3] + d[3]));
                var P = parseInt(d, 16),
                  $ = (P >> 24) & 255,
                  I = (P >> 16) & 255,
                  F = (P >> 8) & 255,
                  Z = Math.round(((P & 255) / 255) * 100) / 100;
                return [$, I, F, Z];
              }
              throw new Error("unknown hex color: " + d);
            },
            Ol = zu,
            rd = ae,
            Ml = A,
            Nu = b.type,
            zl = O,
            Lu = Mu;
          (Ml.prototype.hex = function (d) {
            return Lu(this._rgb, d);
          }),
            (rd.hex = function () {
              for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
              return new (Function.prototype.bind.apply(Ml, [null].concat(d, ["hex"])))();
            }),
            (zl.format.hex = Ol),
            zl.autodetect.push({
              p: 4,
              test: function (d) {
                for (var h = [], g = arguments.length - 1; g-- > 0; ) h[g] = arguments[g + 1];
                if (!h.length && Nu(d) === "string" && [3, 4, 5, 6, 7, 8, 9].indexOf(d.length) >= 0)
                  return "hex";
              },
            });
          var nd = b.unpack,
            ju = b.TWOPI,
            bt = Math.min,
            od = Math.sqrt,
            Nl = Math.acos,
            Iu = function () {
              for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
              var g = nd(d, "rgb"),
                S = g[0],
                _ = g[1],
                P = g[2];
              (S /= 255), (_ /= 255), (P /= 255);
              var $,
                I = bt(S, _, P),
                F = (S + _ + P) / 3,
                Z = F > 0 ? 1 - I / F : 0;
              return (
                Z === 0
                  ? ($ = NaN)
                  : (($ = (S - _ + (S - P)) / 2),
                    ($ /= od((S - _) * (S - _) + (S - P) * (_ - P))),
                    ($ = Nl($)),
                    P > _ && ($ = ju - $),
                    ($ /= ju)),
                [$ * 360, Z, F]
              );
            },
            la = Iu,
            id = b.unpack,
            sa = b.limit,
            cn = b.TWOPI,
            mr = b.PITHIRD,
            Eo = Math.cos,
            Rr = function () {
              for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
              d = id(d, "hsi");
              var g = d[0],
                S = d[1],
                _ = d[2],
                P,
                $,
                I;
              return (
                isNaN(g) && (g = 0),
                isNaN(S) && (S = 0),
                g > 360 && (g -= 360),
                g < 0 && (g += 360),
                (g /= 360),
                g < 1 / 3
                  ? ((I = (1 - S) / 3),
                    (P = (1 + (S * Eo(cn * g)) / Eo(mr - cn * g)) / 3),
                    ($ = 1 - (I + P)))
                  : g < 2 / 3
                  ? ((g -= 1 / 3),
                    (P = (1 - S) / 3),
                    ($ = (1 + (S * Eo(cn * g)) / Eo(mr - cn * g)) / 3),
                    (I = 1 - (P + $)))
                  : ((g -= 2 / 3),
                    ($ = (1 - S) / 3),
                    (I = (1 + (S * Eo(cn * g)) / Eo(mr - cn * g)) / 3),
                    (P = 1 - ($ + I))),
                (P = sa(_ * P * 3)),
                ($ = sa(_ * $ * 3)),
                (I = sa(_ * I * 3)),
                [P * 255, $ * 255, I * 255, d.length > 3 ? d[3] : 1]
              );
            },
            ad = Rr,
            ld = b.unpack,
            sd = b.type,
            ua = ae,
            pi = A,
            Ro = O,
            ca = la;
          (pi.prototype.hsi = function () {
            return ca(this._rgb);
          }),
            (ua.hsi = function () {
              for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
              return new (Function.prototype.bind.apply(pi, [null].concat(d, ["hsi"])))();
            }),
            (Ro.format.hsi = ad),
            Ro.autodetect.push({
              p: 2,
              test: function () {
                for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
                if (((d = ld(d, "hsi")), sd(d) === "array" && d.length === 3)) return "hsi";
              },
            });
          var ud = b.unpack,
            cd = b.type,
            Ll = ae,
            jl = A,
            fa = O,
            hi = He;
          (jl.prototype.hsl = function () {
            return hi(this._rgb);
          }),
            (Ll.hsl = function () {
              for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
              return new (Function.prototype.bind.apply(jl, [null].concat(d, ["hsl"])))();
            }),
            (fa.format.hsl = Mt),
            fa.autodetect.push({
              p: 2,
              test: function () {
                for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
                if (((d = ud(d, "hsl")), cd(d) === "array" && d.length === 3)) return "hsl";
              },
            });
          var fd = b.unpack,
            Il = Math.min,
            lt = Math.max,
            Du = function () {
              for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
              d = fd(d, "rgb");
              var g = d[0],
                S = d[1],
                _ = d[2],
                P = Il(g, S, _),
                $ = lt(g, S, _),
                I = $ - P,
                F,
                Z,
                te;
              return (
                (te = $ / 255),
                $ === 0
                  ? ((F = Number.NaN), (Z = 0))
                  : ((Z = I / $),
                    g === $ && (F = (S - _) / I),
                    S === $ && (F = 2 + (_ - g) / I),
                    _ === $ && (F = 4 + (g - S) / I),
                    (F *= 60),
                    F < 0 && (F += 360)),
                [F, Z, te]
              );
            },
            Au = Du,
            Dl = b.unpack,
            Fu = Math.floor,
            Wu = function () {
              for (var d, h, g, S, _, P, $ = [], I = arguments.length; I--; ) $[I] = arguments[I];
              $ = Dl($, "hsv");
              var F = $[0],
                Z = $[1],
                te = $[2],
                ge,
                ee,
                Se;
              if (((te *= 255), Z === 0)) ge = ee = Se = te;
              else {
                F === 360 && (F = 0), F > 360 && (F -= 360), F < 0 && (F += 360), (F /= 60);
                var we = Fu(F),
                  We = F - we,
                  Ie = te * (1 - Z),
                  De = te * (1 - Z * We),
                  Ye = te * (1 - Z * (1 - We));
                switch (we) {
                  case 0:
                    (d = [te, Ye, Ie]), (ge = d[0]), (ee = d[1]), (Se = d[2]);
                    break;
                  case 1:
                    (h = [De, te, Ie]), (ge = h[0]), (ee = h[1]), (Se = h[2]);
                    break;
                  case 2:
                    (g = [Ie, te, Ye]), (ge = g[0]), (ee = g[1]), (Se = g[2]);
                    break;
                  case 3:
                    (S = [Ie, De, te]), (ge = S[0]), (ee = S[1]), (Se = S[2]);
                    break;
                  case 4:
                    (_ = [Ye, Ie, te]), (ge = _[0]), (ee = _[1]), (Se = _[2]);
                    break;
                  case 5:
                    (P = [te, Ie, De]), (ge = P[0]), (ee = P[1]), (Se = P[2]);
                    break;
                }
              }
              return [ge, ee, Se, $.length > 3 ? $[3] : 1];
            },
            Bu = Wu,
            Al = b.unpack,
            da = b.type,
            Mn = ae,
            fn = A,
            dn = O,
            mi = Au;
          (fn.prototype.hsv = function () {
            return mi(this._rgb);
          }),
            (Mn.hsv = function () {
              for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
              return new (Function.prototype.bind.apply(fn, [null].concat(d, ["hsv"])))();
            }),
            (dn.format.hsv = Bu),
            dn.autodetect.push({
              p: 2,
              test: function () {
                for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
                if (((d = Al(d, "hsv")), da(d) === "array" && d.length === 3)) return "hsv";
              },
            });
          var zn = {
              Kn: 18,
              Xn: 0.95047,
              Yn: 1,
              Zn: 1.08883,
              t0: 0.137931034,
              t1: 0.206896552,
              t2: 0.12841855,
              t3: 0.008856452,
            },
            ir = zn,
            dd = b.unpack,
            Fl = Math.pow,
            vi = function () {
              for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
              var g = dd(d, "rgb"),
                S = g[0],
                _ = g[1],
                P = g[2],
                $ = ha(S, _, P),
                I = $[0],
                F = $[1],
                Z = $[2],
                te = 116 * F - 16;
              return [te < 0 ? 0 : te, 500 * (I - F), 200 * (F - Z)];
            },
            Wl = function (d) {
              return (d /= 255) <= 0.04045 ? d / 12.92 : Fl((d + 0.055) / 1.055, 2.4);
            },
            pa = function (d) {
              return d > ir.t3 ? Fl(d, 1 / 3) : d / ir.t2 + ir.t0;
            },
            ha = function (d, h, g) {
              (d = Wl(d)), (h = Wl(h)), (g = Wl(g));
              var S = pa((0.4124564 * d + 0.3575761 * h + 0.1804375 * g) / ir.Xn),
                _ = pa((0.2126729 * d + 0.7151522 * h + 0.072175 * g) / ir.Yn),
                P = pa((0.0193339 * d + 0.119192 * h + 0.9503041 * g) / ir.Zn);
              return [S, _, P];
            },
            Bl = vi,
            _o = zn,
            gi = b.unpack,
            yi = Math.pow,
            Po = function () {
              for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
              d = gi(d, "lab");
              var g = d[0],
                S = d[1],
                _ = d[2],
                P,
                $,
                I,
                F,
                Z,
                te;
              return (
                ($ = (g + 16) / 116),
                (P = isNaN(S) ? $ : $ + S / 500),
                (I = isNaN(_) ? $ : $ - _ / 200),
                ($ = _o.Yn * Ul($)),
                (P = _o.Xn * Ul(P)),
                (I = _o.Zn * Ul(I)),
                (F = To(3.2404542 * P - 1.5371385 * $ - 0.4985314 * I)),
                (Z = To(-0.969266 * P + 1.8760108 * $ + 0.041556 * I)),
                (te = To(0.0556434 * P - 0.2040259 * $ + 1.0572252 * I)),
                [F, Z, te, d.length > 3 ? d[3] : 1]
              );
            },
            To = function (d) {
              return 255 * (d <= 0.00304 ? 12.92 * d : 1.055 * yi(d, 1 / 2.4) - 0.055);
            },
            Ul = function (d) {
              return d > _o.t1 ? d * d * d : _o.t2 * (d - _o.t0);
            },
            Uu = Po,
            Vl = b.unpack,
            ma = b.type,
            Hl = ae,
            Gl = A,
            pn = O,
            ql = Bl;
          (Gl.prototype.lab = function () {
            return ql(this._rgb);
          }),
            (Hl.lab = function () {
              for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
              return new (Function.prototype.bind.apply(Gl, [null].concat(d, ["lab"])))();
            }),
            (pn.format.lab = Uu),
            pn.autodetect.push({
              p: 2,
              test: function () {
                for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
                if (((d = Vl(d, "lab")), ma(d) === "array" && d.length === 3)) return "lab";
              },
            });
          var va = b.unpack,
            Vu = b.RAD2DEG,
            ga = Math.sqrt,
            ya = Math.atan2,
            Hu = Math.round,
            ar = function () {
              for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
              var g = va(d, "lab"),
                S = g[0],
                _ = g[1],
                P = g[2],
                $ = ga(_ * _ + P * P),
                I = (ya(P, _) * Vu + 360) % 360;
              return Hu($ * 1e4) === 0 && (I = Number.NaN), [S, $, I];
            },
            eo = ar,
            Kl = b.unpack,
            xi = Bl,
            pd = eo,
            Xl = function () {
              for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
              var g = Kl(d, "rgb"),
                S = g[0],
                _ = g[1],
                P = g[2],
                $ = xi(S, _, P),
                I = $[0],
                F = $[1],
                Z = $[2];
              return pd(I, F, Z);
            },
            Yl = Xl,
            bi = b.unpack,
            xa = b.DEG2RAD,
            Gu = Math.sin,
            hd = Math.cos,
            md = function () {
              for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
              var g = bi(d, "lch"),
                S = g[0],
                _ = g[1],
                P = g[2];
              return isNaN(P) && (P = 0), (P = P * xa), [S, hd(P) * _, Gu(P) * _];
            },
            qu = md,
            Ql = b.unpack,
            vd = qu,
            gd = Uu,
            yd = function () {
              for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
              d = Ql(d, "lch");
              var g = d[0],
                S = d[1],
                _ = d[2],
                P = vd(g, S, _),
                $ = P[0],
                I = P[1],
                F = P[2],
                Z = gd($, I, F),
                te = Z[0],
                ge = Z[1],
                ee = Z[2];
              return [te, ge, ee, d.length > 3 ? d[3] : 1];
            },
            Ku = yd,
            xd = b.unpack,
            Xu = Ku,
            bd = function () {
              for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
              var g = xd(d, "hcl").reverse();
              return Xu.apply(void 0, g);
            },
            wd = bd,
            kd = b.unpack,
            Sd = b.type,
            ba = ae,
            wa = A,
            Zl = O,
            Yu = Yl;
          (wa.prototype.lch = function () {
            return Yu(this._rgb);
          }),
            (wa.prototype.hcl = function () {
              return Yu(this._rgb).reverse();
            }),
            (ba.lch = function () {
              for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
              return new (Function.prototype.bind.apply(wa, [null].concat(d, ["lch"])))();
            }),
            (ba.hcl = function () {
              for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
              return new (Function.prototype.bind.apply(wa, [null].concat(d, ["hcl"])))();
            }),
            (Zl.format.lch = Ku),
            (Zl.format.hcl = wd),
            ["lch", "hcl"].forEach(function (d) {
              return Zl.autodetect.push({
                p: 2,
                test: function () {
                  for (var h = [], g = arguments.length; g--; ) h[g] = arguments[g];
                  if (((h = kd(h, d)), Sd(h) === "array" && h.length === 3)) return d;
                },
              });
            });
          var Qu = {
              aliceblue: "#f0f8ff",
              antiquewhite: "#faebd7",
              aqua: "#00ffff",
              aquamarine: "#7fffd4",
              azure: "#f0ffff",
              beige: "#f5f5dc",
              bisque: "#ffe4c4",
              black: "#000000",
              blanchedalmond: "#ffebcd",
              blue: "#0000ff",
              blueviolet: "#8a2be2",
              brown: "#a52a2a",
              burlywood: "#deb887",
              cadetblue: "#5f9ea0",
              chartreuse: "#7fff00",
              chocolate: "#d2691e",
              coral: "#ff7f50",
              cornflower: "#6495ed",
              cornflowerblue: "#6495ed",
              cornsilk: "#fff8dc",
              crimson: "#dc143c",
              cyan: "#00ffff",
              darkblue: "#00008b",
              darkcyan: "#008b8b",
              darkgoldenrod: "#b8860b",
              darkgray: "#a9a9a9",
              darkgreen: "#006400",
              darkgrey: "#a9a9a9",
              darkkhaki: "#bdb76b",
              darkmagenta: "#8b008b",
              darkolivegreen: "#556b2f",
              darkorange: "#ff8c00",
              darkorchid: "#9932cc",
              darkred: "#8b0000",
              darksalmon: "#e9967a",
              darkseagreen: "#8fbc8f",
              darkslateblue: "#483d8b",
              darkslategray: "#2f4f4f",
              darkslategrey: "#2f4f4f",
              darkturquoise: "#00ced1",
              darkviolet: "#9400d3",
              deeppink: "#ff1493",
              deepskyblue: "#00bfff",
              dimgray: "#696969",
              dimgrey: "#696969",
              dodgerblue: "#1e90ff",
              firebrick: "#b22222",
              floralwhite: "#fffaf0",
              forestgreen: "#228b22",
              fuchsia: "#ff00ff",
              gainsboro: "#dcdcdc",
              ghostwhite: "#f8f8ff",
              gold: "#ffd700",
              goldenrod: "#daa520",
              gray: "#808080",
              green: "#008000",
              greenyellow: "#adff2f",
              grey: "#808080",
              honeydew: "#f0fff0",
              hotpink: "#ff69b4",
              indianred: "#cd5c5c",
              indigo: "#4b0082",
              ivory: "#fffff0",
              khaki: "#f0e68c",
              laserlemon: "#ffff54",
              lavender: "#e6e6fa",
              lavenderblush: "#fff0f5",
              lawngreen: "#7cfc00",
              lemonchiffon: "#fffacd",
              lightblue: "#add8e6",
              lightcoral: "#f08080",
              lightcyan: "#e0ffff",
              lightgoldenrod: "#fafad2",
              lightgoldenrodyellow: "#fafad2",
              lightgray: "#d3d3d3",
              lightgreen: "#90ee90",
              lightgrey: "#d3d3d3",
              lightpink: "#ffb6c1",
              lightsalmon: "#ffa07a",
              lightseagreen: "#20b2aa",
              lightskyblue: "#87cefa",
              lightslategray: "#778899",
              lightslategrey: "#778899",
              lightsteelblue: "#b0c4de",
              lightyellow: "#ffffe0",
              lime: "#00ff00",
              limegreen: "#32cd32",
              linen: "#faf0e6",
              magenta: "#ff00ff",
              maroon: "#800000",
              maroon2: "#7f0000",
              maroon3: "#b03060",
              mediumaquamarine: "#66cdaa",
              mediumblue: "#0000cd",
              mediumorchid: "#ba55d3",
              mediumpurple: "#9370db",
              mediumseagreen: "#3cb371",
              mediumslateblue: "#7b68ee",
              mediumspringgreen: "#00fa9a",
              mediumturquoise: "#48d1cc",
              mediumvioletred: "#c71585",
              midnightblue: "#191970",
              mintcream: "#f5fffa",
              mistyrose: "#ffe4e1",
              moccasin: "#ffe4b5",
              navajowhite: "#ffdead",
              navy: "#000080",
              oldlace: "#fdf5e6",
              olive: "#808000",
              olivedrab: "#6b8e23",
              orange: "#ffa500",
              orangered: "#ff4500",
              orchid: "#da70d6",
              palegoldenrod: "#eee8aa",
              palegreen: "#98fb98",
              paleturquoise: "#afeeee",
              palevioletred: "#db7093",
              papayawhip: "#ffefd5",
              peachpuff: "#ffdab9",
              peru: "#cd853f",
              pink: "#ffc0cb",
              plum: "#dda0dd",
              powderblue: "#b0e0e6",
              purple: "#800080",
              purple2: "#7f007f",
              purple3: "#a020f0",
              rebeccapurple: "#663399",
              red: "#ff0000",
              rosybrown: "#bc8f8f",
              royalblue: "#4169e1",
              saddlebrown: "#8b4513",
              salmon: "#fa8072",
              sandybrown: "#f4a460",
              seagreen: "#2e8b57",
              seashell: "#fff5ee",
              sienna: "#a0522d",
              silver: "#c0c0c0",
              skyblue: "#87ceeb",
              slateblue: "#6a5acd",
              slategray: "#708090",
              slategrey: "#708090",
              snow: "#fffafa",
              springgreen: "#00ff7f",
              steelblue: "#4682b4",
              tan: "#d2b48c",
              teal: "#008080",
              thistle: "#d8bfd8",
              tomato: "#ff6347",
              turquoise: "#40e0d0",
              violet: "#ee82ee",
              wheat: "#f5deb3",
              white: "#ffffff",
              whitesmoke: "#f5f5f5",
              yellow: "#ffff00",
              yellowgreen: "#9acd32",
            },
            Zu = Qu,
            Cd = A,
            Ju = O,
            $d = b.type,
            wi = Zu,
            Ed = Ol,
            Rd = Mu;
          (Cd.prototype.name = function () {
            for (var d = Rd(this._rgb, "rgb"), h = 0, g = Object.keys(wi); h < g.length; h += 1) {
              var S = g[h];
              if (wi[S] === d) return S.toLowerCase();
            }
            return d;
          }),
            (Ju.format.named = function (d) {
              if (((d = d.toLowerCase()), wi[d])) return Ed(wi[d]);
              throw new Error("unknown color name: " + d);
            }),
            Ju.autodetect.push({
              p: 5,
              test: function (d) {
                for (var h = [], g = arguments.length - 1; g-- > 0; ) h[g] = arguments[g + 1];
                if (!h.length && $d(d) === "string" && wi[d.toLowerCase()]) return "named";
              },
            });
          var Jl = b.unpack,
            ki = function () {
              for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
              var g = Jl(d, "rgb"),
                S = g[0],
                _ = g[1],
                P = g[2];
              return (S << 16) + (_ << 8) + P;
            },
            _d = ki,
            ec = b.type,
            tc = function (d) {
              if (ec(d) == "number" && d >= 0 && d <= 16777215) {
                var h = d >> 16,
                  g = (d >> 8) & 255,
                  S = d & 255;
                return [h, g, S, 1];
              }
              throw new Error("unknown num color: " + d);
            },
            rc = tc,
            nc = ae,
            es = A,
            to = O,
            Pd = b.type,
            Td = _d;
          (es.prototype.num = function () {
            return Td(this._rgb);
          }),
            (nc.num = function () {
              for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
              return new (Function.prototype.bind.apply(es, [null].concat(d, ["num"])))();
            }),
            (to.format.num = rc),
            to.autodetect.push({
              p: 5,
              test: function () {
                for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
                if (d.length === 1 && Pd(d[0]) === "number" && d[0] >= 0 && d[0] <= 16777215)
                  return "num";
              },
            });
          var Od = ae,
            ka = A,
            ts = O,
            Oo = b.unpack,
            Mo = b.type,
            oc = Math.round;
          (ka.prototype.rgb = function (d) {
            return (
              d === void 0 && (d = !0),
              d === !1 ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(oc)
            );
          }),
            (ka.prototype.rgba = function (d) {
              return (
                d === void 0 && (d = !0),
                this._rgb.slice(0, 4).map(function (h, g) {
                  return g < 3 ? (d === !1 ? h : oc(h)) : h;
                })
              );
            }),
            (Od.rgb = function () {
              for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
              return new (Function.prototype.bind.apply(ka, [null].concat(d, ["rgb"])))();
            }),
            (ts.format.rgb = function () {
              for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
              var g = Oo(d, "rgba");
              return g[3] === void 0 && (g[3] = 1), g;
            }),
            ts.autodetect.push({
              p: 3,
              test: function () {
                for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
                if (
                  ((d = Oo(d, "rgba")),
                  Mo(d) === "array" &&
                    (d.length === 3 ||
                      (d.length === 4 && Mo(d[3]) == "number" && d[3] >= 0 && d[3] <= 1)))
                )
                  return "rgb";
              },
            });
          var ro = Math.log,
            Md = function (d) {
              var h = d / 100,
                g,
                S,
                _;
              return (
                h < 66
                  ? ((g = 255),
                    (S =
                      h < 6
                        ? 0
                        : -155.25485562709179 -
                          0.44596950469579133 * (S = h - 2) +
                          104.49216199393888 * ro(S)),
                    (_ =
                      h < 20
                        ? 0
                        : -254.76935184120902 +
                          0.8274096064007395 * (_ = h - 10) +
                          115.67994401066147 * ro(_)))
                  : ((g =
                      351.97690566805693 +
                      0.114206453784165 * (g = h - 55) -
                      40.25366309332127 * ro(g)),
                    (S =
                      325.4494125711974 +
                      0.07943456536662342 * (S = h - 50) -
                      28.0852963507957 * ro(S)),
                    (_ = 255)),
                [g, S, _, 1]
              );
            },
            rs = Md,
            ns = rs,
            os = b.unpack,
            ic = Math.round,
            ac = function () {
              for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
              for (
                var g = os(d, "rgb"), S = g[0], _ = g[2], P = 1e3, $ = 4e4, I = 0.4, F;
                $ - P > I;

              ) {
                F = ($ + P) * 0.5;
                var Z = ns(F);
                Z[2] / Z[0] >= _ / S ? ($ = F) : (P = F);
              }
              return ic(F);
            },
            lc = ac,
            is = ae,
            Sa = A,
            as = O,
            zd = lc;
          (Sa.prototype.temp =
            Sa.prototype.kelvin =
            Sa.prototype.temperature =
              function () {
                return zd(this._rgb);
              }),
            (is.temp =
              is.kelvin =
              is.temperature =
                function () {
                  for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
                  return new (Function.prototype.bind.apply(Sa, [null].concat(d, ["temp"])))();
                }),
            (as.format.temp = as.format.kelvin = as.format.temperature = rs);
          var Nd = b.unpack,
            lr = Math.cbrt,
            Si = Math.pow,
            sc = Math.sign,
            uc = function () {
              for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
              var g = Nd(d, "rgb"),
                S = g[0],
                _ = g[1],
                P = g[2],
                $ = [Ca(S / 255), Ca(_ / 255), Ca(P / 255)],
                I = $[0],
                F = $[1],
                Z = $[2],
                te = lr(0.4122214708 * I + 0.5363325363 * F + 0.0514459929 * Z),
                ge = lr(0.2119034982 * I + 0.6806995451 * F + 0.1073969566 * Z),
                ee = lr(0.0883024619 * I + 0.2817188376 * F + 0.6299787005 * Z);
              return [
                0.2104542553 * te + 0.793617785 * ge - 0.0040720468 * ee,
                1.9779984951 * te - 2.428592205 * ge + 0.4505937099 * ee,
                0.0259040371 * te + 0.7827717662 * ge - 0.808675766 * ee,
              ];
            },
            ls = uc;
          function Ca(d) {
            var h = Math.abs(d);
            return h < 0.04045 ? d / 12.92 : (sc(d) || 1) * Si((h + 0.055) / 1.055, 2.4);
          }
          var ss = b.unpack,
            $a = Math.pow,
            Ld = Math.sign,
            zo = function () {
              for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
              d = ss(d, "lab");
              var g = d[0],
                S = d[1],
                _ = d[2],
                P = $a(g + 0.3963377774 * S + 0.2158037573 * _, 3),
                $ = $a(g - 0.1055613458 * S - 0.0638541728 * _, 3),
                I = $a(g - 0.0894841775 * S - 1.291485548 * _, 3);
              return [
                255 * no(4.0767416621 * P - 3.3077115913 * $ + 0.2309699292 * I),
                255 * no(-1.2684380046 * P + 2.6097574011 * $ - 0.3413193965 * I),
                255 * no(-0.0041960863 * P - 0.7034186147 * $ + 1.707614701 * I),
                d.length > 3 ? d[3] : 1,
              ];
            },
            Ea = zo;
          function no(d) {
            var h = Math.abs(d);
            return h > 0.0031308 ? (Ld(d) || 1) * (1.055 * $a(h, 1 / 2.4) - 0.055) : d * 12.92;
          }
          var us = b.unpack,
            cc = b.type,
            Ra = ae,
            oo = A,
            _a = O,
            fc = ls;
          (oo.prototype.oklab = function () {
            return fc(this._rgb);
          }),
            (Ra.oklab = function () {
              for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
              return new (Function.prototype.bind.apply(oo, [null].concat(d, ["oklab"])))();
            }),
            (_a.format.oklab = Ea),
            _a.autodetect.push({
              p: 3,
              test: function () {
                for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
                if (((d = us(d, "oklab")), cc(d) === "array" && d.length === 3)) return "oklab";
              },
            });
          var Pa = b.unpack,
            dc = ls,
            pc = eo,
            hc = function () {
              for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
              var g = Pa(d, "rgb"),
                S = g[0],
                _ = g[1],
                P = g[2],
                $ = dc(S, _, P),
                I = $[0],
                F = $[1],
                Z = $[2];
              return pc(I, F, Z);
            },
            mc = hc,
            vc = b.unpack,
            gc = qu,
            Nn = Ea,
            cs = function () {
              for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
              d = vc(d, "lch");
              var g = d[0],
                S = d[1],
                _ = d[2],
                P = gc(g, S, _),
                $ = P[0],
                I = P[1],
                F = P[2],
                Z = Nn($, I, F),
                te = Z[0],
                ge = Z[1],
                ee = Z[2];
              return [te, ge, ee, d.length > 3 ? d[3] : 1];
            },
            fs = cs,
            jd = b.unpack,
            Id = b.type,
            Ci = ae,
            yc = A,
            ds = O,
            xc = mc;
          (yc.prototype.oklch = function () {
            return xc(this._rgb);
          }),
            (Ci.oklch = function () {
              for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
              return new (Function.prototype.bind.apply(yc, [null].concat(d, ["oklch"])))();
            }),
            (ds.format.oklch = fs),
            ds.autodetect.push({
              p: 3,
              test: function () {
                for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
                if (((d = jd(d, "oklch")), Id(d) === "array" && d.length === 3)) return "oklch";
              },
            });
          var pt = A,
            ps = b.type;
          pt.prototype.alpha = function (d, h) {
            return (
              h === void 0 && (h = !1),
              d !== void 0 && ps(d) === "number"
                ? h
                  ? ((this._rgb[3] = d), this)
                  : new pt([this._rgb[0], this._rgb[1], this._rgb[2], d], "rgb")
                : this._rgb[3]
            );
          };
          var Ta = A;
          Ta.prototype.clipped = function () {
            return this._rgb._clipped || !1;
          };
          var _r = A,
            bc = zn;
          (_r.prototype.darken = function (d) {
            d === void 0 && (d = 1);
            var h = this,
              g = h.lab();
            return (g[0] -= bc.Kn * d), new _r(g, "lab").alpha(h.alpha(), !0);
          }),
            (_r.prototype.brighten = function (d) {
              return d === void 0 && (d = 1), this.darken(-d);
            }),
            (_r.prototype.darker = _r.prototype.darken),
            (_r.prototype.brighter = _r.prototype.brighten);
          var hs = A;
          hs.prototype.get = function (d) {
            var h = d.split("."),
              g = h[0],
              S = h[1],
              _ = this[g]();
            if (S) {
              var P = g.indexOf(S) - (g.substr(0, 2) === "ok" ? 2 : 0);
              if (P > -1) return _[P];
              throw new Error("unknown channel " + S + " in mode " + g);
            } else return _;
          };
          var Br = A,
            Oa = b.type,
            No = Math.pow,
            wc = 1e-7,
            Dd = 20;
          Br.prototype.luminance = function (d) {
            if (d !== void 0 && Oa(d) === "number") {
              if (d === 0) return new Br([0, 0, 0, this._rgb[3]], "rgb");
              if (d === 1) return new Br([255, 255, 255, this._rgb[3]], "rgb");
              var h = this.luminance(),
                g = "rgb",
                S = Dd,
                _ = function ($, I) {
                  var F = $.interpolate(I, 0.5, g),
                    Z = F.luminance();
                  return Math.abs(d - Z) < wc || !S-- ? F : Z > d ? _($, F) : _(F, I);
                },
                P = (h > d ? _(new Br([0, 0, 0]), this) : _(this, new Br([255, 255, 255]))).rgb();
              return new Br(P.concat([this._rgb[3]]));
            }
            return Ad.apply(void 0, this._rgb.slice(0, 3));
          };
          var Ad = function (d, h, g) {
              return (d = Ma(d)), (h = Ma(h)), (g = Ma(g)), 0.2126 * d + 0.7152 * h + 0.0722 * g;
            },
            Ma = function (d) {
              return (d /= 255), d <= 0.03928 ? d / 12.92 : No((d + 0.055) / 1.055, 2.4);
            },
            Wt = {},
            $i = A,
            za = b.type,
            Lo = Wt,
            Na = function (d, h, g) {
              g === void 0 && (g = 0.5);
              for (var S = [], _ = arguments.length - 3; _-- > 0; ) S[_] = arguments[_ + 3];
              var P = S[0] || "lrgb";
              if ((!Lo[P] && !S.length && (P = Object.keys(Lo)[0]), !Lo[P]))
                throw new Error("interpolation mode " + P + " is not defined");
              return (
                za(d) !== "object" && (d = new $i(d)),
                za(h) !== "object" && (h = new $i(h)),
                Lo[P](d, h, g).alpha(d.alpha() + g * (h.alpha() - d.alpha()))
              );
            },
            La = A,
            Fd = Na;
          La.prototype.mix = La.prototype.interpolate = function (d, h) {
            h === void 0 && (h = 0.5);
            for (var g = [], S = arguments.length - 2; S-- > 0; ) g[S] = arguments[S + 2];
            return Fd.apply(void 0, [this, d, h].concat(g));
          };
          var ms = A;
          ms.prototype.premultiply = function (d) {
            d === void 0 && (d = !1);
            var h = this._rgb,
              g = h[3];
            return d
              ? ((this._rgb = [h[0] * g, h[1] * g, h[2] * g, g]), this)
              : new ms([h[0] * g, h[1] * g, h[2] * g, g], "rgb");
          };
          var vs = A,
            Wd = zn;
          (vs.prototype.saturate = function (d) {
            d === void 0 && (d = 1);
            var h = this,
              g = h.lch();
            return (
              (g[1] += Wd.Kn * d), g[1] < 0 && (g[1] = 0), new vs(g, "lch").alpha(h.alpha(), !0)
            );
          }),
            (vs.prototype.desaturate = function (d) {
              return d === void 0 && (d = 1), this.saturate(-d);
            });
          var ja = A,
            hn = b.type;
          ja.prototype.set = function (d, h, g) {
            g === void 0 && (g = !1);
            var S = d.split("."),
              _ = S[0],
              P = S[1],
              $ = this[_]();
            if (P) {
              var I = _.indexOf(P) - (_.substr(0, 2) === "ok" ? 2 : 0);
              if (I > -1) {
                if (hn(h) == "string")
                  switch (h.charAt(0)) {
                    case "+":
                      $[I] += +h;
                      break;
                    case "-":
                      $[I] += +h;
                      break;
                    case "*":
                      $[I] *= +h.substr(1);
                      break;
                    case "/":
                      $[I] /= +h.substr(1);
                      break;
                    default:
                      $[I] = +h;
                  }
                else if (hn(h) === "number") $[I] = h;
                else throw new Error("unsupported value for Color.set");
                var F = new ja($, _);
                return g ? ((this._rgb = F._rgb), this) : F;
              }
              throw new Error("unknown channel " + P + " in mode " + _);
            } else return $;
          };
          var kc = A,
            jo = function (d, h, g) {
              var S = d._rgb,
                _ = h._rgb;
              return new kc(
                S[0] + g * (_[0] - S[0]),
                S[1] + g * (_[1] - S[1]),
                S[2] + g * (_[2] - S[2]),
                "rgb"
              );
            };
          Wt.rgb = jo;
          var Ur = A,
            io = Math.sqrt,
            Qt = Math.pow,
            gs = function (d, h, g) {
              var S = d._rgb,
                _ = S[0],
                P = S[1],
                $ = S[2],
                I = h._rgb,
                F = I[0],
                Z = I[1],
                te = I[2];
              return new Ur(
                io(Qt(_, 2) * (1 - g) + Qt(F, 2) * g),
                io(Qt(P, 2) * (1 - g) + Qt(Z, 2) * g),
                io(Qt($, 2) * (1 - g) + Qt(te, 2) * g),
                "rgb"
              );
            };
          Wt.lrgb = gs;
          var Bd = A,
            Ud = function (d, h, g) {
              var S = d.lab(),
                _ = h.lab();
              return new Bd(
                S[0] + g * (_[0] - S[0]),
                S[1] + g * (_[1] - S[1]),
                S[2] + g * (_[2] - S[2]),
                "lab"
              );
            };
          Wt.lab = Ud;
          var Ln = A,
            Vr = function (d, h, g, S) {
              var _, P, $, I;
              S === "hsl"
                ? (($ = d.hsl()), (I = h.hsl()))
                : S === "hsv"
                ? (($ = d.hsv()), (I = h.hsv()))
                : S === "hcg"
                ? (($ = d.hcg()), (I = h.hcg()))
                : S === "hsi"
                ? (($ = d.hsi()), (I = h.hsi()))
                : S === "lch" || S === "hcl"
                ? ((S = "hcl"), ($ = d.hcl()), (I = h.hcl()))
                : S === "oklch" && (($ = d.oklch().reverse()), (I = h.oklch().reverse()));
              var F, Z, te, ge, ee, Se;
              (S.substr(0, 1) === "h" || S === "oklch") &&
                ((_ = $),
                (F = _[0]),
                (te = _[1]),
                (ee = _[2]),
                (P = I),
                (Z = P[0]),
                (ge = P[1]),
                (Se = P[2]));
              var we, We, Ie, De;
              return (
                !isNaN(F) && !isNaN(Z)
                  ? (Z > F && Z - F > 180
                      ? (De = Z - (F + 360))
                      : Z < F && F - Z > 180
                      ? (De = Z + 360 - F)
                      : (De = Z - F),
                    (We = F + g * De))
                  : isNaN(F)
                  ? isNaN(Z)
                    ? (We = Number.NaN)
                    : ((We = Z), (ee == 1 || ee == 0) && S != "hsv" && (we = ge))
                  : ((We = F), (Se == 1 || Se == 0) && S != "hsv" && (we = te)),
                we === void 0 && (we = te + g * (ge - te)),
                (Ie = ee + g * (Se - ee)),
                S === "oklch" ? new Ln([Ie, we, We], S) : new Ln([We, we, Ie], S)
              );
            },
            Io = Vr,
            Ei = function (d, h, g) {
              return Io(d, h, g, "lch");
            };
          (Wt.lch = Ei), (Wt.hcl = Ei);
          var ys = A,
            Do = function (d, h, g) {
              var S = d.num(),
                _ = h.num();
              return new ys(S + g * (_ - S), "num");
            };
          Wt.num = Do;
          var jn = Vr,
            vt = function (d, h, g) {
              return jn(d, h, g, "hcg");
            };
          Wt.hcg = vt;
          var ht = Vr,
            In = function (d, h, g) {
              return ht(d, h, g, "hsi");
            };
          Wt.hsi = In;
          var Bt = Vr,
            Zt = function (d, h, g) {
              return Bt(d, h, g, "hsl");
            };
          Wt.hsl = Zt;
          var ao = Vr,
            Ao = function (d, h, g) {
              return ao(d, h, g, "hsv");
            };
          Wt.hsv = Ao;
          var Jt = A,
            Ia = function (d, h, g) {
              var S = d.oklab(),
                _ = h.oklab();
              return new Jt(
                S[0] + g * (_[0] - S[0]),
                S[1] + g * (_[1] - S[1]),
                S[2] + g * (_[2] - S[2]),
                "oklab"
              );
            };
          Wt.oklab = Ia;
          var Sc = Vr,
            Cc = function (d, h, g) {
              return Sc(d, h, g, "oklch");
            };
          Wt.oklch = Cc;
          var Fo = A,
            $c = b.clip_rgb,
            Pr = Math.pow,
            Wo = Math.sqrt,
            Ri = Math.PI,
            xs = Math.cos,
            Ec = Math.sin,
            Dn = Math.atan2,
            Bo = function (d, h, g) {
              h === void 0 && (h = "lrgb"), g === void 0 && (g = null);
              var S = d.length;
              g ||
                (g = Array.from(new Array(S)).map(function () {
                  return 1;
                }));
              var _ =
                S /
                g.reduce(function (We, Ie) {
                  return We + Ie;
                });
              if (
                (g.forEach(function (We, Ie) {
                  g[Ie] *= _;
                }),
                (d = d.map(function (We) {
                  return new Fo(We);
                })),
                h === "lrgb")
              )
                return Uo(d, g);
              for (
                var P = d.shift(), $ = P.get(h), I = [], F = 0, Z = 0, te = 0;
                te < $.length;
                te++
              )
                if (
                  (($[te] = ($[te] || 0) * g[0]),
                  I.push(isNaN($[te]) ? 0 : g[0]),
                  h.charAt(te) === "h" && !isNaN($[te]))
                ) {
                  var ge = ($[te] / 180) * Ri;
                  (F += xs(ge) * g[0]), (Z += Ec(ge) * g[0]);
                }
              var ee = P.alpha() * g[0];
              d.forEach(function (We, Ie) {
                var De = We.get(h);
                ee += We.alpha() * g[Ie + 1];
                for (var Ye = 0; Ye < $.length; Ye++)
                  if (!isNaN(De[Ye]))
                    if (((I[Ye] += g[Ie + 1]), h.charAt(Ye) === "h")) {
                      var Pt = (De[Ye] / 180) * Ri;
                      (F += xs(Pt) * g[Ie + 1]), (Z += Ec(Pt) * g[Ie + 1]);
                    } else $[Ye] += De[Ye] * g[Ie + 1];
              });
              for (var Se = 0; Se < $.length; Se++)
                if (h.charAt(Se) === "h") {
                  for (var we = (Dn(Z / I[Se], F / I[Se]) / Ri) * 180; we < 0; ) we += 360;
                  for (; we >= 360; ) we -= 360;
                  $[Se] = we;
                } else $[Se] = $[Se] / I[Se];
              return (ee /= S), new Fo($, h).alpha(ee > 0.99999 ? 1 : ee, !0);
            },
            Uo = function (d, h) {
              for (var g = d.length, S = [0, 0, 0, 0], _ = 0; _ < d.length; _++) {
                var P = d[_],
                  $ = h[_] / g,
                  I = P._rgb;
                (S[0] += Pr(I[0], 2) * $),
                  (S[1] += Pr(I[1], 2) * $),
                  (S[2] += Pr(I[2], 2) * $),
                  (S[3] += I[3] * $);
              }
              return (
                (S[0] = Wo(S[0])),
                (S[1] = Wo(S[1])),
                (S[2] = Wo(S[2])),
                S[3] > 0.9999999 && (S[3] = 1),
                new Fo($c(S))
              );
            },
            er = ae,
            mn = b.type,
            vr = Math.pow,
            tr = function (d) {
              var h = "rgb",
                g = er("#ccc"),
                S = 0,
                _ = [0, 1],
                P = [],
                $ = [0, 0],
                I = !1,
                F = [],
                Z = !1,
                te = 0,
                ge = 1,
                ee = !1,
                Se = {},
                we = !0,
                We = 1,
                Ie = function (oe) {
                  if (
                    ((oe = oe || ["#fff", "#000"]),
                    oe &&
                      mn(oe) === "string" &&
                      er.brewer &&
                      er.brewer[oe.toLowerCase()] &&
                      (oe = er.brewer[oe.toLowerCase()]),
                    mn(oe) === "array")
                  ) {
                    oe.length === 1 && (oe = [oe[0], oe[0]]), (oe = oe.slice(0));
                    for (var ze = 0; ze < oe.length; ze++) oe[ze] = er(oe[ze]);
                    P.length = 0;
                    for (var Ge = 0; Ge < oe.length; Ge++) P.push(Ge / (oe.length - 1));
                  }
                  return Gt(), (F = oe);
                },
                De = function (oe) {
                  if (I != null) {
                    for (var ze = I.length - 1, Ge = 0; Ge < ze && oe >= I[Ge]; ) Ge++;
                    return Ge - 1;
                  }
                  return 0;
                },
                Ye = function (oe) {
                  return oe;
                },
                Pt = function (oe) {
                  return oe;
                },
                $t = function (oe, ze) {
                  var Ge, Ue;
                  if ((ze == null && (ze = !1), isNaN(oe) || oe === null)) return g;
                  if (ze) Ue = oe;
                  else if (I && I.length > 2) {
                    var zt = De(oe);
                    Ue = zt / (I.length - 2);
                  } else ge !== te ? (Ue = (oe - te) / (ge - te)) : (Ue = 1);
                  (Ue = Pt(Ue)),
                    ze || (Ue = Ye(Ue)),
                    We !== 1 && (Ue = vr(Ue, We)),
                    (Ue = $[0] + Ue * (1 - $[0] - $[1])),
                    (Ue = Math.min(1, Math.max(0, Ue)));
                  var dt = Math.floor(Ue * 1e4);
                  if (we && Se[dt]) Ge = Se[dt];
                  else {
                    if (mn(F) === "array")
                      for (var qe = 0; qe < P.length; qe++) {
                        var nt = P[qe];
                        if (Ue <= nt) {
                          Ge = F[qe];
                          break;
                        }
                        if (Ue >= nt && qe === P.length - 1) {
                          Ge = F[qe];
                          break;
                        }
                        if (Ue > nt && Ue < P[qe + 1]) {
                          (Ue = (Ue - nt) / (P[qe + 1] - nt)),
                            (Ge = er.interpolate(F[qe], F[qe + 1], Ue, h));
                          break;
                        }
                      }
                    else mn(F) === "function" && (Ge = F(Ue));
                    we && (Se[dt] = Ge);
                  }
                  return Ge;
                },
                Gt = function () {
                  return (Se = {});
                };
              Ie(d);
              var Xe = function (oe) {
                var ze = er($t(oe));
                return Z && ze[Z] ? ze[Z]() : ze;
              };
              return (
                (Xe.classes = function (oe) {
                  if (oe != null) {
                    if (mn(oe) === "array") (I = oe), (_ = [oe[0], oe[oe.length - 1]]);
                    else {
                      var ze = er.analyze(_);
                      oe === 0 ? (I = [ze.min, ze.max]) : (I = er.limits(ze, "e", oe));
                    }
                    return Xe;
                  }
                  return I;
                }),
                (Xe.domain = function (oe) {
                  if (!arguments.length) return _;
                  (te = oe[0]), (ge = oe[oe.length - 1]), (P = []);
                  var ze = F.length;
                  if (oe.length === ze && te !== ge)
                    for (var Ge = 0, Ue = Array.from(oe); Ge < Ue.length; Ge += 1) {
                      var zt = Ue[Ge];
                      P.push((zt - te) / (ge - te));
                    }
                  else {
                    for (var dt = 0; dt < ze; dt++) P.push(dt / (ze - 1));
                    if (oe.length > 2) {
                      var qe = oe.map(function (Ze, Je) {
                          return Je / (oe.length - 1);
                        }),
                        nt = oe.map(function (Ze) {
                          return (Ze - te) / (ge - te);
                        });
                      nt.every(function (Ze, Je) {
                        return qe[Je] === Ze;
                      }) ||
                        (Pt = function (Ze) {
                          if (Ze <= 0 || Ze >= 1) return Ze;
                          for (var Je = 0; Ze >= nt[Je + 1]; ) Je++;
                          var yr = (Ze - nt[Je]) / (nt[Je + 1] - nt[Je]),
                            Kr = qe[Je] + yr * (qe[Je + 1] - qe[Je]);
                          return Kr;
                        });
                    }
                  }
                  return (_ = [te, ge]), Xe;
                }),
                (Xe.mode = function (oe) {
                  return arguments.length ? ((h = oe), Gt(), Xe) : h;
                }),
                (Xe.range = function (oe, ze) {
                  return Ie(oe), Xe;
                }),
                (Xe.out = function (oe) {
                  return (Z = oe), Xe;
                }),
                (Xe.spread = function (oe) {
                  return arguments.length ? ((S = oe), Xe) : S;
                }),
                (Xe.correctLightness = function (oe) {
                  return (
                    oe == null && (oe = !0),
                    (ee = oe),
                    Gt(),
                    ee
                      ? (Ye = function (ze) {
                          for (
                            var Ge = $t(0, !0).lab()[0],
                              Ue = $t(1, !0).lab()[0],
                              zt = Ge > Ue,
                              dt = $t(ze, !0).lab()[0],
                              qe = Ge + (Ue - Ge) * ze,
                              nt = dt - qe,
                              Ze = 0,
                              Je = 1,
                              yr = 20;
                            Math.abs(nt) > 0.01 && yr-- > 0;

                          )
                            (function () {
                              return (
                                zt && (nt *= -1),
                                nt < 0
                                  ? ((Ze = ze), (ze += (Je - ze) * 0.5))
                                  : ((Je = ze), (ze += (Ze - ze) * 0.5)),
                                (dt = $t(ze, !0).lab()[0]),
                                (nt = dt - qe)
                              );
                            })();
                          return ze;
                        })
                      : (Ye = function (ze) {
                          return ze;
                        }),
                    Xe
                  );
                }),
                (Xe.padding = function (oe) {
                  return oe != null ? (mn(oe) === "number" && (oe = [oe, oe]), ($ = oe), Xe) : $;
                }),
                (Xe.colors = function (oe, ze) {
                  arguments.length < 2 && (ze = "hex");
                  var Ge = [];
                  if (arguments.length === 0) Ge = F.slice(0);
                  else if (oe === 1) Ge = [Xe(0.5)];
                  else if (oe > 1) {
                    var Ue = _[0],
                      zt = _[1] - Ue;
                    Ge = lo(0, oe).map(function (Je) {
                      return Xe(Ue + (Je / (oe - 1)) * zt);
                    });
                  } else {
                    d = [];
                    var dt = [];
                    if (I && I.length > 2)
                      for (
                        var qe = 1, nt = I.length, Ze = 1 <= nt;
                        Ze ? qe < nt : qe > nt;
                        Ze ? qe++ : qe--
                      )
                        dt.push((I[qe - 1] + I[qe]) * 0.5);
                    else dt = _;
                    Ge = dt.map(function (Je) {
                      return Xe(Je);
                    });
                  }
                  return (
                    er[ze] &&
                      (Ge = Ge.map(function (Je) {
                        return Je[ze]();
                      })),
                    Ge
                  );
                }),
                (Xe.cache = function (oe) {
                  return oe != null ? ((we = oe), Xe) : we;
                }),
                (Xe.gamma = function (oe) {
                  return oe != null ? ((We = oe), Xe) : We;
                }),
                (Xe.nodata = function (oe) {
                  return oe != null ? ((g = er(oe)), Xe) : g;
                }),
                Xe
              );
            };
          function lo(d, h, g) {
            for (var S = [], _ = d < h, P = h, $ = d; _ ? $ < P : $ > P; _ ? $++ : $--) S.push($);
            return S;
          }
          var sr = A,
            vn = tr,
            so = function (d) {
              for (var h = [1, 1], g = 1; g < d; g++) {
                for (var S = [1], _ = 1; _ <= h.length; _++) S[_] = (h[_] || 0) + h[_ - 1];
                h = S;
              }
              return h;
            },
            Rc = function (d) {
              var h, g, S, _, P, $, I;
              if (
                ((d = d.map(function (ee) {
                  return new sr(ee);
                })),
                d.length === 2)
              )
                (h = d.map(function (ee) {
                  return ee.lab();
                })),
                  (P = h[0]),
                  ($ = h[1]),
                  (_ = function (ee) {
                    var Se = [0, 1, 2].map(function (we) {
                      return P[we] + ee * ($[we] - P[we]);
                    });
                    return new sr(Se, "lab");
                  });
              else if (d.length === 3)
                (g = d.map(function (ee) {
                  return ee.lab();
                })),
                  (P = g[0]),
                  ($ = g[1]),
                  (I = g[2]),
                  (_ = function (ee) {
                    var Se = [0, 1, 2].map(function (we) {
                      return (
                        (1 - ee) * (1 - ee) * P[we] + 2 * (1 - ee) * ee * $[we] + ee * ee * I[we]
                      );
                    });
                    return new sr(Se, "lab");
                  });
              else if (d.length === 4) {
                var F;
                (S = d.map(function (ee) {
                  return ee.lab();
                })),
                  (P = S[0]),
                  ($ = S[1]),
                  (I = S[2]),
                  (F = S[3]),
                  (_ = function (ee) {
                    var Se = [0, 1, 2].map(function (we) {
                      return (
                        (1 - ee) * (1 - ee) * (1 - ee) * P[we] +
                        3 * (1 - ee) * (1 - ee) * ee * $[we] +
                        3 * (1 - ee) * ee * ee * I[we] +
                        ee * ee * ee * F[we]
                      );
                    });
                    return new sr(Se, "lab");
                  });
              } else if (d.length >= 5) {
                var Z, te, ge;
                (Z = d.map(function (ee) {
                  return ee.lab();
                })),
                  (ge = d.length - 1),
                  (te = so(ge)),
                  (_ = function (ee) {
                    var Se = 1 - ee,
                      we = [0, 1, 2].map(function (We) {
                        return Z.reduce(function (Ie, De, Ye) {
                          return Ie + te[Ye] * Math.pow(Se, ge - Ye) * Math.pow(ee, Ye) * De[We];
                        }, 0);
                      });
                    return new sr(we, "lab");
                  });
              } else throw new RangeError("No point in running bezier with only one color.");
              return _;
            },
            bs = function (d) {
              var h = Rc(d);
              return (
                (h.scale = function () {
                  return vn(h);
                }),
                h
              );
            },
            _i = ae,
            yt = function (d, h, g) {
              if (!yt[g]) throw new Error("unknown blend mode " + g);
              return yt[g](d, h);
            },
            Ct = function (d) {
              return function (h, g) {
                var S = _i(g).rgb(),
                  _ = _i(h).rgb();
                return _i.rgb(d(S, _));
              };
            },
            rt = function (d) {
              return function (h, g) {
                var S = [];
                return (S[0] = d(h[0], g[0])), (S[1] = d(h[1], g[1])), (S[2] = d(h[2], g[2])), S;
              };
            },
            Tr = function (d) {
              return d;
            },
            _c = function (d, h) {
              return (d * h) / 255;
            },
            Pc = function (d, h) {
              return d > h ? h : d;
            },
            ws = function (d, h) {
              return d > h ? d : h;
            },
            ks = function (d, h) {
              return 255 * (1 - (1 - d / 255) * (1 - h / 255));
            },
            Tc = function (d, h) {
              return h < 128 ? (2 * d * h) / 255 : 255 * (1 - 2 * (1 - d / 255) * (1 - h / 255));
            },
            Da = function (d, h) {
              return 255 * (1 - (1 - h / 255) / (d / 255));
            },
            Oc = function (d, h) {
              return d === 255 ? 255 : ((d = (255 * (h / 255)) / (1 - d / 255)), d > 255 ? 255 : d);
            };
          (yt.normal = Ct(rt(Tr))),
            (yt.multiply = Ct(rt(_c))),
            (yt.screen = Ct(rt(ks))),
            (yt.overlay = Ct(rt(Tc))),
            (yt.darken = Ct(rt(Pc))),
            (yt.lighten = Ct(rt(ws))),
            (yt.dodge = Ct(rt(Oc))),
            (yt.burn = Ct(rt(Da)));
          for (
            var Vo = yt,
              Pi = b.type,
              Vd = b.clip_rgb,
              Or = b.TWOPI,
              Aa = Math.pow,
              Fa = Math.sin,
              Ho = Math.cos,
              Wa = ae,
              Ss = function (d, h, g, S, _) {
                d === void 0 && (d = 300),
                  h === void 0 && (h = -1.5),
                  g === void 0 && (g = 1),
                  S === void 0 && (S = 1),
                  _ === void 0 && (_ = [0, 1]);
                var P = 0,
                  $;
                Pi(_) === "array" ? ($ = _[1] - _[0]) : (($ = 0), (_ = [_, _]));
                var I = function (F) {
                  var Z = Or * ((d + 120) / 360 + h * F),
                    te = Aa(_[0] + $ * F, S),
                    ge = P !== 0 ? g[0] + F * P : g,
                    ee = (ge * te * (1 - te)) / 2,
                    Se = Ho(Z),
                    we = Fa(Z),
                    We = te + ee * (-0.14861 * Se + 1.78277 * we),
                    Ie = te + ee * (-0.29227 * Se - 0.90649 * we),
                    De = te + ee * (1.97294 * Se);
                  return Wa(Vd([We * 255, Ie * 255, De * 255, 1]));
                };
                return (
                  (I.start = function (F) {
                    return F == null ? d : ((d = F), I);
                  }),
                  (I.rotations = function (F) {
                    return F == null ? h : ((h = F), I);
                  }),
                  (I.gamma = function (F) {
                    return F == null ? S : ((S = F), I);
                  }),
                  (I.hue = function (F) {
                    return F == null
                      ? g
                      : ((g = F),
                        Pi(g) === "array" ? ((P = g[1] - g[0]), P === 0 && (g = g[1])) : (P = 0),
                        I);
                  }),
                  (I.lightness = function (F) {
                    return F == null
                      ? _
                      : (Pi(F) === "array" ? ((_ = F), ($ = F[1] - F[0])) : ((_ = [F, F]), ($ = 0)),
                        I);
                  }),
                  (I.scale = function () {
                    return Wa.scale(I);
                  }),
                  I.hue(g),
                  I
                );
              },
              Cs = A,
              $s = "0123456789abcdef",
              Go = Math.floor,
              gr = Math.random,
              uo = function () {
                for (var d = "#", h = 0; h < 6; h++) d += $s.charAt(Go(gr() * 16));
                return new Cs(d, "hex");
              },
              Ti = x,
              Es = Math.log,
              gn = Math.pow,
              An = Math.floor,
              Rs = Math.abs,
              _s = function (d, h) {
                h === void 0 && (h = null);
                var g = {
                  min: Number.MAX_VALUE,
                  max: Number.MAX_VALUE * -1,
                  sum: 0,
                  values: [],
                  count: 0,
                };
                return (
                  Ti(d) === "object" && (d = Object.values(d)),
                  d.forEach(function (S) {
                    h && Ti(S) === "object" && (S = S[h]),
                      S != null &&
                        !isNaN(S) &&
                        (g.values.push(S),
                        (g.sum += S),
                        S < g.min && (g.min = S),
                        S > g.max && (g.max = S),
                        (g.count += 1));
                  }),
                  (g.domain = [g.min, g.max]),
                  (g.limits = function (S, _) {
                    return Hr(g, S, _);
                  }),
                  g
                );
              },
              Hr = function (d, h, g) {
                h === void 0 && (h = "equal"),
                  g === void 0 && (g = 7),
                  Ti(d) == "array" && (d = _s(d));
                var S = d.min,
                  _ = d.max,
                  P = d.values.sort(function (Ha, Ls) {
                    return Ha - Ls;
                  });
                if (g === 1) return [S, _];
                var $ = [];
                if ((h.substr(0, 1) === "c" && ($.push(S), $.push(_)), h.substr(0, 1) === "e")) {
                  $.push(S);
                  for (var I = 1; I < g; I++) $.push(S + (I / g) * (_ - S));
                  $.push(_);
                } else if (h.substr(0, 1) === "l") {
                  if (S <= 0)
                    throw new Error("Logarithmic scales are only possible for values > 0");
                  var F = Math.LOG10E * Es(S),
                    Z = Math.LOG10E * Es(_);
                  $.push(S);
                  for (var te = 1; te < g; te++) $.push(gn(10, F + (te / g) * (Z - F)));
                  $.push(_);
                } else if (h.substr(0, 1) === "q") {
                  $.push(S);
                  for (var ge = 1; ge < g; ge++) {
                    var ee = ((P.length - 1) * ge) / g,
                      Se = An(ee);
                    if (Se === ee) $.push(P[Se]);
                    else {
                      var we = ee - Se;
                      $.push(P[Se] * (1 - we) + P[Se + 1] * we);
                    }
                  }
                  $.push(_);
                } else if (h.substr(0, 1) === "k") {
                  var We,
                    Ie = P.length,
                    De = new Array(Ie),
                    Ye = new Array(g),
                    Pt = !0,
                    $t = 0,
                    Gt = null;
                  (Gt = []), Gt.push(S);
                  for (var Xe = 1; Xe < g; Xe++) Gt.push(S + (Xe / g) * (_ - S));
                  for (Gt.push(_); Pt; ) {
                    for (var oe = 0; oe < g; oe++) Ye[oe] = 0;
                    for (var ze = 0; ze < Ie; ze++)
                      for (
                        var Ge = P[ze], Ue = Number.MAX_VALUE, zt = void 0, dt = 0;
                        dt < g;
                        dt++
                      ) {
                        var qe = Rs(Gt[dt] - Ge);
                        qe < Ue && ((Ue = qe), (zt = dt)), Ye[zt]++, (De[ze] = zt);
                      }
                    for (var nt = new Array(g), Ze = 0; Ze < g; Ze++) nt[Ze] = null;
                    for (var Je = 0; Je < Ie; Je++)
                      (We = De[Je]), nt[We] === null ? (nt[We] = P[Je]) : (nt[We] += P[Je]);
                    for (var yr = 0; yr < g; yr++) nt[yr] *= 1 / Ye[yr];
                    Pt = !1;
                    for (var Kr = 0; Kr < g; Kr++)
                      if (nt[Kr] !== Gt[Kr]) {
                        Pt = !0;
                        break;
                      }
                    (Gt = nt), $t++, $t > 200 && (Pt = !1);
                  }
                  for (var xn = {}, fo = 0; fo < g; fo++) xn[fo] = [];
                  for (var po = 0; po < Ie; po++) (We = De[po]), xn[We].push(P[po]);
                  for (var Xr = [], bn = 0; bn < g; bn++)
                    Xr.push(xn[bn][0]), Xr.push(xn[bn][xn[bn].length - 1]);
                  (Xr = Xr.sort(function (Ha, Ls) {
                    return Ha - Ls;
                  })),
                    $.push(Xr[0]);
                  for (var Xo = 1; Xo < Xr.length; Xo += 2) {
                    var Fn = Xr[Xo];
                    !isNaN(Fn) && $.indexOf(Fn) === -1 && $.push(Fn);
                  }
                }
                return $;
              },
              yn = { analyze: _s, limits: Hr },
              Oi = A,
              Mc = function (d, h) {
                (d = new Oi(d)), (h = new Oi(h));
                var g = d.luminance(),
                  S = h.luminance();
                return g > S ? (g + 0.05) / (S + 0.05) : (S + 0.05) / (g + 0.05);
              },
              Mi = A,
              Gr = Math.sqrt,
              wt = Math.pow,
              Ps = Math.min,
              Ba = Math.max,
              Ts = Math.atan2,
              Os = Math.abs,
              zi = Math.cos,
              Ua = Math.sin,
              Ni = Math.exp,
              Li = Math.PI,
              zc = function (d, h, g, S, _) {
                g === void 0 && (g = 1), S === void 0 && (S = 1), _ === void 0 && (_ = 1);
                var P = function (Fn) {
                    return (360 * Fn) / (2 * Li);
                  },
                  $ = function (Fn) {
                    return (2 * Li * Fn) / 360;
                  };
                (d = new Mi(d)), (h = new Mi(h));
                var I = Array.from(d.lab()),
                  F = I[0],
                  Z = I[1],
                  te = I[2],
                  ge = Array.from(h.lab()),
                  ee = ge[0],
                  Se = ge[1],
                  we = ge[2],
                  We = (F + ee) / 2,
                  Ie = Gr(wt(Z, 2) + wt(te, 2)),
                  De = Gr(wt(Se, 2) + wt(we, 2)),
                  Ye = (Ie + De) / 2,
                  Pt = 0.5 * (1 - Gr(wt(Ye, 7) / (wt(Ye, 7) + wt(25, 7)))),
                  $t = Z * (1 + Pt),
                  Gt = Se * (1 + Pt),
                  Xe = Gr(wt($t, 2) + wt(te, 2)),
                  oe = Gr(wt(Gt, 2) + wt(we, 2)),
                  ze = (Xe + oe) / 2,
                  Ge = P(Ts(te, $t)),
                  Ue = P(Ts(we, Gt)),
                  zt = Ge >= 0 ? Ge : Ge + 360,
                  dt = Ue >= 0 ? Ue : Ue + 360,
                  qe = Os(zt - dt) > 180 ? (zt + dt + 360) / 2 : (zt + dt) / 2,
                  nt =
                    1 -
                    0.17 * zi($(qe - 30)) +
                    0.24 * zi($(2 * qe)) +
                    0.32 * zi($(3 * qe + 6)) -
                    0.2 * zi($(4 * qe - 63)),
                  Ze = dt - zt;
                (Ze = Os(Ze) <= 180 ? Ze : dt <= zt ? Ze + 360 : Ze - 360),
                  (Ze = 2 * Gr(Xe * oe) * Ua($(Ze) / 2));
                var Je = ee - F,
                  yr = oe - Xe,
                  Kr = 1 + (0.015 * wt(We - 50, 2)) / Gr(20 + wt(We - 50, 2)),
                  xn = 1 + 0.045 * ze,
                  fo = 1 + 0.015 * ze * nt,
                  po = 30 * Ni(-wt((qe - 275) / 25, 2)),
                  Xr = 2 * Gr(wt(ze, 7) / (wt(ze, 7) + wt(25, 7))),
                  bn = -Xr * Ua(2 * $(po)),
                  Xo = Gr(
                    wt(Je / (g * Kr), 2) +
                      wt(yr / (S * xn), 2) +
                      wt(Ze / (_ * fo), 2) +
                      bn * (yr / (S * xn)) * (Ze / (_ * fo))
                  );
                return Ba(0, Ps(100, Xo));
              },
              Ms = A,
              qo = function (d, h, g) {
                g === void 0 && (g = "lab"), (d = new Ms(d)), (h = new Ms(h));
                var S = d.get(g),
                  _ = h.get(g),
                  P = 0;
                for (var $ in S) {
                  var I = (S[$] || 0) - (_[$] || 0);
                  P += I * I;
                }
                return Math.sqrt(P);
              },
              Nc = A,
              ji = function () {
                for (var d = [], h = arguments.length; h--; ) d[h] = arguments[h];
                try {
                  return new (Function.prototype.bind.apply(Nc, [null].concat(d)))(), !0;
                } catch {
                  return !1;
                }
              },
              Mr = ae,
              Ko = tr,
              Ii = {
                cool: function () {
                  return Ko([Mr.hsl(180, 1, 0.9), Mr.hsl(250, 0.7, 0.4)]);
                },
                hot: function () {
                  return Ko(["#000", "#f00", "#ff0", "#fff"]).mode("rgb");
                },
              },
              qr = {
                OrRd: [
                  "#fff7ec",
                  "#fee8c8",
                  "#fdd49e",
                  "#fdbb84",
                  "#fc8d59",
                  "#ef6548",
                  "#d7301f",
                  "#b30000",
                  "#7f0000",
                ],
                PuBu: [
                  "#fff7fb",
                  "#ece7f2",
                  "#d0d1e6",
                  "#a6bddb",
                  "#74a9cf",
                  "#3690c0",
                  "#0570b0",
                  "#045a8d",
                  "#023858",
                ],
                BuPu: [
                  "#f7fcfd",
                  "#e0ecf4",
                  "#bfd3e6",
                  "#9ebcda",
                  "#8c96c6",
                  "#8c6bb1",
                  "#88419d",
                  "#810f7c",
                  "#4d004b",
                ],
                Oranges: [
                  "#fff5eb",
                  "#fee6ce",
                  "#fdd0a2",
                  "#fdae6b",
                  "#fd8d3c",
                  "#f16913",
                  "#d94801",
                  "#a63603",
                  "#7f2704",
                ],
                BuGn: [
                  "#f7fcfd",
                  "#e5f5f9",
                  "#ccece6",
                  "#99d8c9",
                  "#66c2a4",
                  "#41ae76",
                  "#238b45",
                  "#006d2c",
                  "#00441b",
                ],
                YlOrBr: [
                  "#ffffe5",
                  "#fff7bc",
                  "#fee391",
                  "#fec44f",
                  "#fe9929",
                  "#ec7014",
                  "#cc4c02",
                  "#993404",
                  "#662506",
                ],
                YlGn: [
                  "#ffffe5",
                  "#f7fcb9",
                  "#d9f0a3",
                  "#addd8e",
                  "#78c679",
                  "#41ab5d",
                  "#238443",
                  "#006837",
                  "#004529",
                ],
                Reds: [
                  "#fff5f0",
                  "#fee0d2",
                  "#fcbba1",
                  "#fc9272",
                  "#fb6a4a",
                  "#ef3b2c",
                  "#cb181d",
                  "#a50f15",
                  "#67000d",
                ],
                RdPu: [
                  "#fff7f3",
                  "#fde0dd",
                  "#fcc5c0",
                  "#fa9fb5",
                  "#f768a1",
                  "#dd3497",
                  "#ae017e",
                  "#7a0177",
                  "#49006a",
                ],
                Greens: [
                  "#f7fcf5",
                  "#e5f5e0",
                  "#c7e9c0",
                  "#a1d99b",
                  "#74c476",
                  "#41ab5d",
                  "#238b45",
                  "#006d2c",
                  "#00441b",
                ],
                YlGnBu: [
                  "#ffffd9",
                  "#edf8b1",
                  "#c7e9b4",
                  "#7fcdbb",
                  "#41b6c4",
                  "#1d91c0",
                  "#225ea8",
                  "#253494",
                  "#081d58",
                ],
                Purples: [
                  "#fcfbfd",
                  "#efedf5",
                  "#dadaeb",
                  "#bcbddc",
                  "#9e9ac8",
                  "#807dba",
                  "#6a51a3",
                  "#54278f",
                  "#3f007d",
                ],
                GnBu: [
                  "#f7fcf0",
                  "#e0f3db",
                  "#ccebc5",
                  "#a8ddb5",
                  "#7bccc4",
                  "#4eb3d3",
                  "#2b8cbe",
                  "#0868ac",
                  "#084081",
                ],
                Greys: [
                  "#ffffff",
                  "#f0f0f0",
                  "#d9d9d9",
                  "#bdbdbd",
                  "#969696",
                  "#737373",
                  "#525252",
                  "#252525",
                  "#000000",
                ],
                YlOrRd: [
                  "#ffffcc",
                  "#ffeda0",
                  "#fed976",
                  "#feb24c",
                  "#fd8d3c",
                  "#fc4e2a",
                  "#e31a1c",
                  "#bd0026",
                  "#800026",
                ],
                PuRd: [
                  "#f7f4f9",
                  "#e7e1ef",
                  "#d4b9da",
                  "#c994c7",
                  "#df65b0",
                  "#e7298a",
                  "#ce1256",
                  "#980043",
                  "#67001f",
                ],
                Blues: [
                  "#f7fbff",
                  "#deebf7",
                  "#c6dbef",
                  "#9ecae1",
                  "#6baed6",
                  "#4292c6",
                  "#2171b5",
                  "#08519c",
                  "#08306b",
                ],
                PuBuGn: [
                  "#fff7fb",
                  "#ece2f0",
                  "#d0d1e6",
                  "#a6bddb",
                  "#67a9cf",
                  "#3690c0",
                  "#02818a",
                  "#016c59",
                  "#014636",
                ],
                Viridis: [
                  "#440154",
                  "#482777",
                  "#3f4a8a",
                  "#31678e",
                  "#26838f",
                  "#1f9d8a",
                  "#6cce5a",
                  "#b6de2b",
                  "#fee825",
                ],
                Spectral: [
                  "#9e0142",
                  "#d53e4f",
                  "#f46d43",
                  "#fdae61",
                  "#fee08b",
                  "#ffffbf",
                  "#e6f598",
                  "#abdda4",
                  "#66c2a5",
                  "#3288bd",
                  "#5e4fa2",
                ],
                RdYlGn: [
                  "#a50026",
                  "#d73027",
                  "#f46d43",
                  "#fdae61",
                  "#fee08b",
                  "#ffffbf",
                  "#d9ef8b",
                  "#a6d96a",
                  "#66bd63",
                  "#1a9850",
                  "#006837",
                ],
                RdBu: [
                  "#67001f",
                  "#b2182b",
                  "#d6604d",
                  "#f4a582",
                  "#fddbc7",
                  "#f7f7f7",
                  "#d1e5f0",
                  "#92c5de",
                  "#4393c3",
                  "#2166ac",
                  "#053061",
                ],
                PiYG: [
                  "#8e0152",
                  "#c51b7d",
                  "#de77ae",
                  "#f1b6da",
                  "#fde0ef",
                  "#f7f7f7",
                  "#e6f5d0",
                  "#b8e186",
                  "#7fbc41",
                  "#4d9221",
                  "#276419",
                ],
                PRGn: [
                  "#40004b",
                  "#762a83",
                  "#9970ab",
                  "#c2a5cf",
                  "#e7d4e8",
                  "#f7f7f7",
                  "#d9f0d3",
                  "#a6dba0",
                  "#5aae61",
                  "#1b7837",
                  "#00441b",
                ],
                RdYlBu: [
                  "#a50026",
                  "#d73027",
                  "#f46d43",
                  "#fdae61",
                  "#fee090",
                  "#ffffbf",
                  "#e0f3f8",
                  "#abd9e9",
                  "#74add1",
                  "#4575b4",
                  "#313695",
                ],
                BrBG: [
                  "#543005",
                  "#8c510a",
                  "#bf812d",
                  "#dfc27d",
                  "#f6e8c3",
                  "#f5f5f5",
                  "#c7eae5",
                  "#80cdc1",
                  "#35978f",
                  "#01665e",
                  "#003c30",
                ],
                RdGy: [
                  "#67001f",
                  "#b2182b",
                  "#d6604d",
                  "#f4a582",
                  "#fddbc7",
                  "#ffffff",
                  "#e0e0e0",
                  "#bababa",
                  "#878787",
                  "#4d4d4d",
                  "#1a1a1a",
                ],
                PuOr: [
                  "#7f3b08",
                  "#b35806",
                  "#e08214",
                  "#fdb863",
                  "#fee0b6",
                  "#f7f7f7",
                  "#d8daeb",
                  "#b2abd2",
                  "#8073ac",
                  "#542788",
                  "#2d004b",
                ],
                Set2: [
                  "#66c2a5",
                  "#fc8d62",
                  "#8da0cb",
                  "#e78ac3",
                  "#a6d854",
                  "#ffd92f",
                  "#e5c494",
                  "#b3b3b3",
                ],
                Accent: [
                  "#7fc97f",
                  "#beaed4",
                  "#fdc086",
                  "#ffff99",
                  "#386cb0",
                  "#f0027f",
                  "#bf5b17",
                  "#666666",
                ],
                Set1: [
                  "#e41a1c",
                  "#377eb8",
                  "#4daf4a",
                  "#984ea3",
                  "#ff7f00",
                  "#ffff33",
                  "#a65628",
                  "#f781bf",
                  "#999999",
                ],
                Set3: [
                  "#8dd3c7",
                  "#ffffb3",
                  "#bebada",
                  "#fb8072",
                  "#80b1d3",
                  "#fdb462",
                  "#b3de69",
                  "#fccde5",
                  "#d9d9d9",
                  "#bc80bd",
                  "#ccebc5",
                  "#ffed6f",
                ],
                Dark2: [
                  "#1b9e77",
                  "#d95f02",
                  "#7570b3",
                  "#e7298a",
                  "#66a61e",
                  "#e6ab02",
                  "#a6761d",
                  "#666666",
                ],
                Paired: [
                  "#a6cee3",
                  "#1f78b4",
                  "#b2df8a",
                  "#33a02c",
                  "#fb9a99",
                  "#e31a1c",
                  "#fdbf6f",
                  "#ff7f00",
                  "#cab2d6",
                  "#6a3d9a",
                  "#ffff99",
                  "#b15928",
                ],
                Pastel2: [
                  "#b3e2cd",
                  "#fdcdac",
                  "#cbd5e8",
                  "#f4cae4",
                  "#e6f5c9",
                  "#fff2ae",
                  "#f1e2cc",
                  "#cccccc",
                ],
                Pastel1: [
                  "#fbb4ae",
                  "#b3cde3",
                  "#ccebc5",
                  "#decbe4",
                  "#fed9a6",
                  "#ffffcc",
                  "#e5d8bd",
                  "#fddaec",
                  "#f2f2f2",
                ],
              },
              Di = 0,
              co = Object.keys(qr);
            Di < co.length;
            Di += 1
          ) {
            var zs = co[Di];
            qr[zs.toLowerCase()] = qr[zs];
          }
          var Ns = qr,
            Be = ae;
          (Be.average = Bo),
            (Be.bezier = bs),
            (Be.blend = Vo),
            (Be.cubehelix = Ss),
            (Be.mix = Be.interpolate = Na),
            (Be.random = uo),
            (Be.scale = tr),
            (Be.analyze = yn.analyze),
            (Be.contrast = Mc),
            (Be.deltaE = zc),
            (Be.distance = qo),
            (Be.limits = yn.limits),
            (Be.valid = ji),
            (Be.scales = Ii),
            (Be.colors = Zu),
            (Be.brewer = Ns);
          var Va = Be;
          return Va;
        });
      })(gf)),
    gf.exports
  );
}
var rw = tw();
const nw = ui(rw);
function Eg(r) {
  return nw(r).rgb().join(", ");
}
function Gn(r, n) {
  return `rgba(${Eg(r)}, ${n})`;
}
function et(r = [], n = [], i, l, s = "") {
  const [c, f] = r,
    [m, v] = n;
  return `${s} ${U(c)} ${U(f)} ${U(m)} ${U(v)} ${Gn(i, l)}`;
}
const { black: Dt, white: jv, tabs: ow, coloredShadows: ni } = Ke,
  En = {
    xs: et([0, 2], [9, -5], Dt.main, 0.15),
    sm: et([0, 5], [10, 0], Dt.main, 0.12),
    md: `${et([0, 4], [6, -1], Dt.main, 0.1)}, ${et([0, 2], [4, -1], Dt.main, 0.06)}`,
    lg: `${et([0, 10], [15, -3], Dt.main, 0.1)}, ${et([0, 4], [6, -2], Dt.main, 0.05)}`,
    xl: `${et([0, 20], [25, -5], Dt.main, 0.1)}, ${et([0, 10], [10, -5], Dt.main, 0.04)}`,
    xxl: et([0, 20], [27, 0], Dt.main, 0.05),
    inset: et([0, 1], [2, 0], Dt.main, 0.075, "inset"),
    colored: {
      primary: `${et([0, 4], [20, 0], Dt.main, 0.14)}, ${et([0, 7], [10, -5], ni.primary, 0.4)}`,
      secondary: `${et([0, 4], [20, 0], Dt.main, 0.14)}, ${et(
        [0, 7],
        [10, -5],
        ni.secondary,
        0.4
      )}`,
      info: `${et([0, 4], [20, 0], Dt.main, 0.14)}, ${et([0, 7], [10, -5], ni.info, 0.4)}`,
      success: `${et([0, 4], [20, 0], Dt.main, 0.14)}, ${et([0, 7], [10, -5], ni.success, 0.4)}`,
      warning: `${et([0, 4], [20, 0], Dt.main, 0.14)}, ${et([0, 7], [10, -5], ni.warning, 0.4)}`,
      error: `${et([0, 4], [20, 0], Dt.main, 0.14)}, ${et([0, 7], [10, -5], ni.error, 0.4)}`,
      light: `${et([0, 4], [20, 0], Dt.main, 0.14)}, ${et([0, 7], [10, -5], ni.light, 0.4)}`,
      dark: `${et([0, 4], [20, 0], Dt.main, 0.14)}, ${et([0, 7], [10, -5], ni.dark, 0.4)}`,
      white: `${et([0, 4], [20, 0], jv.main, 0.14)}, ${et([0, 7], [10, -5], jv.main, 0.4)}`,
    },
    sliderBoxShadow: { thumb: et([0, 1], [13, 0], Dt.main, 0.2) },
    tabsBoxShadow: { indicator: et([0, 1], [5, 1], ow.indicator.boxShadow, 1) },
  },
  { grey: iw } = Ke,
  gt = {
    borderColor: iw[300],
    borderWidth: { 0: 0, 1: U(1), 2: U(2), 3: U(3), 4: U(4), 5: U(5) },
    borderRadius: {
      xs: U(1.6),
      sm: U(2),
      md: U(6),
      lg: U(8),
      xl: U(12),
      xxl: U(16),
      section: U(160),
    },
  },
  { info: aw, dark: lw } = Ke,
  sw = {
    html: { scrollBehavior: "smooth" },
    "*, *::before, *::after": { margin: 0, padding: 0 },
    "a, a:link, a:visited": { textDecoration: "none !important" },
    "a.link, .link, a.link:link, .link:link, a.link:visited, .link:visited": {
      color: `${lw.main} !important`,
      transition: "color 150ms ease-in !important",
    },
    "a.link:hover, .link:hover, a.link:focus, .link:focus": { color: `${aw.main} !important` },
  };
function hl(r, n, i = 195) {
  return `linear-gradient(${i}deg, ${r}, ${n})`;
}
const uw = { styleOverrides: { padding: { paddingTop: 0, paddingBottom: 0 } } },
  cw = {
    defaultProps: { disableGutters: !0 },
    styleOverrides: { root: { paddingTop: 0, paddingBottom: 0 } },
  },
  fw = { styleOverrides: { root: { marginTop: 0, marginBottom: 0 } } },
  { black: dw, white: pw } = Ke,
  { borderWidth: hw, borderRadius: mw } = gt,
  { md: vw } = En,
  gw = {
    styleOverrides: {
      root: {
        display: "flex",
        flexDirection: "column",
        position: "relative",
        minWidth: 0,
        wordWrap: "break-word",
        backgroundColor: pw.main,
        backgroundClip: "border-box",
        border: `${hw[0]} solid ${Gn(dw.main, 0.125)}`,
        borderRadius: mw.xl,
        boxShadow: vw,
        overflow: "visible",
      },
    },
  },
  { borderRadius: yw } = gt,
  xw = {
    styleOverrides: {
      root: { borderRadius: yw.xl, margin: `${U(16)} ${U(16)} 0` },
      media: { width: "auto" },
    },
  },
  bw = {
    styleOverrides: {
      root: { marginTop: 0, marginBottom: 0, padding: `${U(8)} ${U(24)} ${U(24)}` },
    },
  },
  { fontWeightBold: ww, size: kw } = At,
  { borderRadius: Sw } = gt,
  Cw = {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: kw.xs,
    fontWeight: ww,
    borderRadius: Sw.lg,
    padding: `${U(6.302)} ${U(16.604)}`,
    lineHeight: 1.4,
    textAlign: "center",
    textTransform: "uppercase",
    userSelect: "none",
    backgroundSize: "150% !important",
    backgroundPositionX: "25% !important",
    transition: "all 150ms ease-in",
    "&:disabled": { pointerEvent: "none", opacity: 0.65 },
    "& .material-icons": { fontSize: U(15), marginTop: U(-2) },
  },
  { white: Iv, text: $w, info: jp, secondary: Ip } = Ke,
  { size: Dv } = At,
  Hs = {
    base: {
      backgroundColor: Iv.main,
      minHeight: U(40),
      color: $w.main,
      padding: `${U(10)} ${U(24)}`,
      "&:hover": { backgroundColor: Iv.main },
      "&:active, &:active:focus, &:active:hover": { opacity: 0.85 },
      "& .material-icon, .material-icons-round, svg": { fontSize: `${U(16)} !important` },
    },
    small: {
      minHeight: U(32),
      padding: `${U(6)} ${U(16)}`,
      fontSize: Dv.xs,
      "& .material-icon, .material-icons-round, svg": { fontSize: `${U(12)} !important` },
    },
    large: {
      minHeight: U(47),
      padding: `${U(12)} ${U(28)}`,
      fontSize: Dv.sm,
      "& .material-icon, .material-icons-round, svg": { fontSize: `${U(22)} !important` },
    },
    primary: {
      backgroundColor: jp.main,
      "&:hover": { backgroundColor: jp.main },
      "&:focus:not(:hover)": { backgroundColor: jp.focus },
    },
    secondary: {
      backgroundColor: Ip.main,
      "&:hover": { backgroundColor: Ip.main },
      "&:focus:not(:hover)": { backgroundColor: Ip.focus },
    },
  },
  { transparent: Gs, light: Av, info: Ew, secondary: Rw } = Ke,
  { size: Fv } = At,
  qs = {
    base: {
      minHeight: U(40),
      color: Av.main,
      borderColor: Av.main,
      padding: `${U(10)} ${U(24)}`,
      "&:hover": { opacity: 0.75, backgroundColor: Gs.main },
      "& .material-icon, .material-icons-round, svg": { fontSize: `${U(16)} !important` },
    },
    small: {
      minHeight: U(32),
      padding: `${U(6)} ${U(16)}`,
      fontSize: Fv.xs,
      "& .material-icon, .material-icons-round, svg": { fontSize: `${U(12)} !important` },
    },
    large: {
      minHeight: U(47),
      padding: `${U(12)} ${U(28)}`,
      fontSize: Fv.sm,
      "& .material-icon, .material-icons-round, svg": { fontSize: `${U(22)} !important` },
    },
    primary: {
      backgroundColor: Gs.main,
      borderColor: Ew.main,
      "&:hover": { backgroundColor: Gs.main },
    },
    secondary: {
      backgroundColor: Gs.main,
      borderColor: Rw.main,
      "&:hover": { backgroundColor: Gs.main },
    },
  },
  { text: _w, info: Dp, secondary: Ap, transparent: Wv } = Ke,
  { size: Bv } = At,
  Ks = {
    base: {
      backgroundColor: Wv.main,
      minHeight: U(40),
      color: _w.main,
      boxShadow: "none",
      padding: `${U(10)} ${U(24)}`,
      "&:hover": { backgroundColor: Wv.main, boxShadow: "none" },
      "&:focus": { boxShadow: "none" },
      "&:active, &:active:focus, &:active:hover": { opacity: 0.85, boxShadow: "none" },
      "&:disabled": { boxShadow: "none" },
      "& .material-icon, .material-icons-round, svg": { fontSize: `${U(16)} !important` },
    },
    small: {
      minHeight: U(32),
      padding: `${U(6)} ${U(16)}`,
      fontSize: Bv.xs,
      "& .material-icon, .material-icons-round, svg": { fontSize: `${U(12)} !important` },
    },
    large: {
      minHeight: U(47),
      padding: `${U(12)} ${U(28)}`,
      fontSize: Bv.sm,
      "& .material-icon, .material-icons-round, svg": { fontSize: `${U(22)} !important` },
    },
    primary: {
      color: Dp.main,
      "&:hover": { color: Dp.main },
      "&:focus:not(:hover)": { color: Dp.focus, boxShadow: "none" },
    },
    secondary: {
      color: Ap.main,
      "&:hover": { color: Ap.main },
      "&:focus:not(:hover)": { color: Ap.focus, boxShadow: "none" },
    },
  },
  Pw = {
    defaultProps: { disableRipple: !1 },
    styleOverrides: {
      root: { ...Cw },
      contained: { ...Hs.base },
      containedSizeSmall: { ...Hs.small },
      containedSizeLarge: { ...Hs.large },
      containedPrimary: { ...Hs.primary },
      containedSecondary: { ...Hs.secondary },
      outlined: { ...qs.base },
      outlinedSizeSmall: { ...qs.small },
      outlinedSizeLarge: { ...qs.large },
      outlinedPrimary: { ...qs.primary },
      outlinedSecondary: { ...qs.secondary },
      text: { ...Ks.base },
      textSizeSmall: { ...Ks.small },
      textSizeLarge: { ...Ks.large },
      textPrimary: { ...Ks.primary },
      textSecondary: { ...Ks.secondary },
    },
  },
  { transparent: Tw } = Ke,
  Ow = { styleOverrides: { root: { "&:hover": { backgroundColor: Tw.main } } } },
  { info: Mw, inputBorderColor: Uv, dark: zw } = Ke,
  { size: Nw } = At,
  { borderWidth: Lw } = gt,
  jw = {
    styleOverrides: {
      root: {
        fontSize: Nw.sm,
        color: zw.main,
        "&:hover:not(.Mui-disabled):before": { borderBottom: `${Lw[1]} solid ${Uv}` },
        "&:before": { borderColor: Uv },
        "&:after": { borderColor: Mw.main },
      },
    },
  },
  { text: Iw, info: Dw } = Ke,
  { size: af } = At,
  Aw = {
    styleOverrides: {
      root: {
        fontSize: af.sm,
        color: Iw.main,
        lineHeight: 0.9,
        "&.Mui-focused": { color: Dw.main },
        "&.MuiInputLabel-shrink": {
          lineHeight: 1.5,
          fontSize: af.md,
          "~ .MuiInputBase-root .MuiOutlinedInput-notchedOutline legend": { fontSize: "0.85em" },
        },
      },
      sizeSmall: {
        fontSize: af.xs,
        lineHeight: 1.625,
        "&.MuiInputLabel-shrink": {
          lineHeight: 1.6,
          fontSize: af.sm,
          "~ .MuiInputBase-root .MuiOutlinedInput-notchedOutline legend": { fontSize: "0.72em" },
        },
      },
    },
  },
  { inputBorderColor: Vv, info: Fw, grey: Hv, transparent: Gv } = Ke,
  { borderRadius: Ww } = gt,
  { size: qv } = At,
  Bw = {
    styleOverrides: {
      root: {
        backgroundColor: Gv.main,
        fontSize: qv.sm,
        borderRadius: Ww.md,
        "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: Vv },
        "&.Mui-focused": { "& .MuiOutlinedInput-notchedOutline": { borderColor: Fw.main } },
      },
      notchedOutline: { borderColor: Vv },
      input: { color: Hv[700], padding: U(12), backgroundColor: Gv.main },
      inputSizeSmall: { fontSize: qv.xs, padding: U(10) },
      multiline: { color: Hv[700], padding: 0 },
    },
  },
  { transparent: Uw } = Ke,
  Vw = { styleOverrides: { root: { backgroundColor: Uw.main } } },
  { lg: Hw } = En,
  { size: Gw } = At,
  { text: qw, white: Kw } = Ke,
  { borderRadius: Xw } = gt,
  Yw = {
    defaultProps: { disableAutoFocusItem: !0 },
    styleOverrides: {
      paper: {
        minWidth: U(160),
        boxShadow: Hw,
        padding: `${U(16)} ${U(8)}`,
        fontSize: Gw.sm,
        color: qw.main,
        textAlign: "left",
        backgroundColor: `${Kw.main} !important`,
        borderRadius: Xw.md,
      },
    },
  },
  { light: Qw, text: Zw, dark: Jw } = Ke,
  { borderRadius: ek } = gt,
  { size: tk } = At,
  rk = {
    styleOverrides: {
      root: {
        minWidth: U(160),
        minHeight: "unset",
        padding: `${U(4.8)} ${U(16)}`,
        borderRadius: ek.md,
        fontSize: tk.sm,
        color: Zw.main,
        transition: "background-color 300ms ease, color 300ms ease",
        "&:hover, &:focus, &.Mui-selected, &.Mui-selected:hover, &.Mui-selected:focus": {
          backgroundColor: Qw.main,
          color: Jw.main,
        },
      },
    },
  },
  { white: nk, gradients: Vi, grey: Fp, transparent: Kv } = Ke,
  { borderWidth: Xv } = gt,
  { md: ok } = En,
  ik = {
    defaultProps: { disableRipple: !1 },
    styleOverrides: {
      switchBase: {
        color: Vi.dark.main,
        "&:hover": { backgroundColor: Kv.main },
        "&.Mui-checked": {
          color: Vi.dark.main,
          "&:hover": { backgroundColor: Kv.main },
          "& .MuiSwitch-thumb": { borderColor: `${Vi.dark.main} !important` },
          "& + .MuiSwitch-track": {
            backgroundColor: `${Vi.dark.main} !important`,
            borderColor: `${Vi.dark.main} !important`,
            opacity: 1,
          },
        },
        "&.Mui-disabled + .MuiSwitch-track": { opacity: "0.3 !important" },
        "&.Mui-focusVisible .MuiSwitch-thumb": { backgroundImage: hl(Vi.info.main, Vi.info.state) },
      },
      thumb: { backgroundColor: nk.main, boxShadow: ok, border: `${Xv[1]} solid ${Fp[400]}` },
      track: {
        width: U(32),
        height: U(15),
        backgroundColor: Fp[400],
        border: `${Xv[1]} solid ${Fp[400]}`,
        opacity: 1,
      },
      checked: {},
    },
  },
  { dark: Yv, white: Qv } = Ke,
  ak = {
    styleOverrides: {
      root: {
        background: Gn(Yv.main, 0.2),
        height: U(1),
        margin: `${U(16)} 0`,
        borderBottom: "none",
        opacity: 0.25,
      },
      vertical: {
        background: Gn(Yv.main, 0.2),
        width: U(1),
        height: "100%",
        margin: `0 ${U(16)}`,
        borderRight: "none",
      },
      light: {
        background: Gn(Qv.main, 0.2),
        "&.MuiDivider-vertical": { background: Gn(Qv.main, 0.2) },
      },
    },
  },
  { white: lk } = Ke,
  { md: sk } = En,
  { borderRadius: uk } = gt,
  ck = {
    styleOverrides: { root: { backgroundColor: lk.main, boxShadow: sk, borderRadius: uk.xl } },
  },
  { borderRadius: Zv } = gt,
  fk = {
    styleOverrides: {
      root: {
        display: "block",
        padding: `${U(16)} ${U(16)} 0  ${U(16)}`,
        borderRadius: `${Zv.xl} ${Zv.xl} 0 0`,
      },
    },
  },
  { borderWidth: dk } = gt,
  { light: pk } = Ke,
  hk = {
    styleOverrides: {
      root: { padding: `${U(12)} ${U(16)}`, borderBottom: `${dk[1]} solid ${pk.main}` },
    },
  },
  { borderRadius: Jv } = gt,
  { light: e0 } = Ke,
  mk = {
    styleOverrides: {
      root: { height: U(6), borderRadius: Jv.md, overflow: "visible", position: "relative" },
      colorPrimary: { backgroundColor: e0.main },
      colorSecondary: { backgroundColor: e0.main },
      bar: {
        height: U(6),
        borderRadius: Jv.sm,
        position: "absolute",
        transform: "translate(0, 0) !important",
        transition: "width 0.6s ease !important",
      },
    },
  },
  { grey: vk } = Ke,
  { size: gk } = At,
  yk = {
    styleOverrides: { li: { lineHeight: 0 }, separator: { fontSize: gk.sm, color: vk[600] } },
  },
  { grey: xk, white: bk, black: wk, info: Wp } = Ke,
  { borderRadius: t0, borderWidth: kk } = gt,
  { sliderBoxShadow: Sk } = En,
  Ck = {
    styleOverrides: {
      root: {
        width: "100%",
        "& .MuiSlider-active, & .Mui-focusVisible": { boxShadow: "none !important" },
        "& .MuiSlider-valueLabel": { color: wk.main },
      },
      rail: { height: U(2), background: xk[200], borderRadius: t0.sm, opacity: 1 },
      track: {
        background: Wp.main,
        height: U(2),
        position: "relative",
        border: "none",
        borderRadius: t0.lg,
        zIndex: 1,
      },
      thumb: {
        width: U(14),
        height: U(14),
        backgroundColor: bk.main,
        zIndex: 10,
        boxShadow: Sk.thumb,
        border: `${kk[1]} solid ${Wp.main}`,
        transition: "all 200ms linear",
        "&:hover": { boxShadow: "none" },
        "&:active": { transform: "translate(-50%, -50%) scale(1.4)" },
        "&.Mui-active": { boxShadow: et([0, 0], [0, 14], Wp.main, 0.16) },
      },
    },
  },
  { borderRadius: $k } = gt,
  Ek = {
    styleOverrides: {
      root: { transition: "all 200ms ease-in-out" },
      rounded: { borderRadius: $k.lg },
      img: { height: "auto" },
    },
  };
function ah(r, n) {
  return (
    (ah = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (i, l) {
          return (i.__proto__ = l), i;
        }),
    ah(r, n)
  );
}
function Rg(r, n) {
  (r.prototype = Object.create(n.prototype)), (r.prototype.constructor = r), ah(r, n);
}
var _g = W0();
const lf = ui(_g),
  r0 = { disabled: !1 },
  $f = Hn.createContext(null);
var Rk = function (n) {
    return n.scrollTop;
  },
  ou = "unmounted",
  qi = "exited",
  Ki = "entering",
  il = "entered",
  lh = "exiting",
  Rn = (function (r) {
    Rg(n, r);
    function n(l, s) {
      var c;
      c = r.call(this, l, s) || this;
      var f = s,
        m = f && !f.isMounting ? l.enter : l.appear,
        v;
      return (
        (c.appearStatus = null),
        l.in
          ? m
            ? ((v = qi), (c.appearStatus = Ki))
            : (v = il)
          : l.unmountOnExit || l.mountOnEnter
          ? (v = ou)
          : (v = qi),
        (c.state = { status: v }),
        (c.nextCallback = null),
        c
      );
    }
    n.getDerivedStateFromProps = function (s, c) {
      var f = s.in;
      return f && c.status === ou ? { status: qi } : null;
    };
    var i = n.prototype;
    return (
      (i.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (i.componentDidUpdate = function (s) {
        var c = null;
        if (s !== this.props) {
          var f = this.state.status;
          this.props.in ? f !== Ki && f !== il && (c = Ki) : (f === Ki || f === il) && (c = lh);
        }
        this.updateStatus(!1, c);
      }),
      (i.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (i.getTimeouts = function () {
        var s = this.props.timeout,
          c,
          f,
          m;
        return (
          (c = f = m = s),
          s != null &&
            typeof s != "number" &&
            ((c = s.exit), (f = s.enter), (m = s.appear !== void 0 ? s.appear : f)),
          { exit: c, enter: f, appear: m }
        );
      }),
      (i.updateStatus = function (s, c) {
        if ((s === void 0 && (s = !1), c !== null))
          if ((this.cancelNextCallback(), c === Ki)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var f = this.props.nodeRef ? this.props.nodeRef.current : lf.findDOMNode(this);
              f && Rk(f);
            }
            this.performEnter(s);
          } else this.performExit();
        else this.props.unmountOnExit && this.state.status === qi && this.setState({ status: ou });
      }),
      (i.performEnter = function (s) {
        var c = this,
          f = this.props.enter,
          m = this.context ? this.context.isMounting : s,
          v = this.props.nodeRef ? [m] : [lf.findDOMNode(this), m],
          x = v[0],
          w = v[1],
          k = this.getTimeouts(),
          E = m ? k.appear : k.enter;
        if ((!s && !f) || r0.disabled) {
          this.safeSetState({ status: il }, function () {
            c.props.onEntered(x);
          });
          return;
        }
        this.props.onEnter(x, w),
          this.safeSetState({ status: Ki }, function () {
            c.props.onEntering(x, w),
              c.onTransitionEnd(E, function () {
                c.safeSetState({ status: il }, function () {
                  c.props.onEntered(x, w);
                });
              });
          });
      }),
      (i.performExit = function () {
        var s = this,
          c = this.props.exit,
          f = this.getTimeouts(),
          m = this.props.nodeRef ? void 0 : lf.findDOMNode(this);
        if (!c || r0.disabled) {
          this.safeSetState({ status: qi }, function () {
            s.props.onExited(m);
          });
          return;
        }
        this.props.onExit(m),
          this.safeSetState({ status: lh }, function () {
            s.props.onExiting(m),
              s.onTransitionEnd(f.exit, function () {
                s.safeSetState({ status: qi }, function () {
                  s.props.onExited(m);
                });
              });
          });
      }),
      (i.cancelNextCallback = function () {
        this.nextCallback !== null && (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (i.safeSetState = function (s, c) {
        (c = this.setNextCallback(c)), this.setState(s, c);
      }),
      (i.setNextCallback = function (s) {
        var c = this,
          f = !0;
        return (
          (this.nextCallback = function (m) {
            f && ((f = !1), (c.nextCallback = null), s(m));
          }),
          (this.nextCallback.cancel = function () {
            f = !1;
          }),
          this.nextCallback
        );
      }),
      (i.onTransitionEnd = function (s, c) {
        this.setNextCallback(c);
        var f = this.props.nodeRef ? this.props.nodeRef.current : lf.findDOMNode(this),
          m = s == null && !this.props.addEndListener;
        if (!f || m) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var v = this.props.nodeRef ? [this.nextCallback] : [f, this.nextCallback],
            x = v[0],
            w = v[1];
          this.props.addEndListener(x, w);
        }
        s != null && setTimeout(this.nextCallback, s);
      }),
      (i.render = function () {
        var s = this.state.status;
        if (s === ou) return null;
        var c = this.props,
          f = c.children;
        c.in,
          c.mountOnEnter,
          c.unmountOnExit,
          c.appear,
          c.enter,
          c.exit,
          c.timeout,
          c.addEndListener,
          c.onEnter,
          c.onEntering,
          c.onEntered,
          c.onExit,
          c.onExiting,
          c.onExited,
          c.nodeRef;
        var m = tt(c, [
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "enter",
          "exit",
          "timeout",
          "addEndListener",
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "nodeRef",
        ]);
        return Hn.createElement(
          $f.Provider,
          { value: null },
          typeof f == "function" ? f(s, m) : Hn.cloneElement(Hn.Children.only(f), m)
        );
      }),
      n
    );
  })(Hn.Component);
Rn.contextType = $f;
Rn.propTypes = {};
function ol() {}
Rn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: ol,
  onEntering: ol,
  onEntered: ol,
  onExit: ol,
  onExiting: ol,
  onExited: ol,
};
Rn.UNMOUNTED = ou;
Rn.EXITED = qi;
Rn.ENTERING = Ki;
Rn.ENTERED = il;
Rn.EXITING = lh;
function _k(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function Nh(r, n) {
  var i = function (c) {
      return n && N.isValidElement(c) ? n(c) : c;
    },
    l = Object.create(null);
  return (
    r &&
      N.Children.map(r, function (s) {
        return s;
      }).forEach(function (s) {
        l[s.key] = i(s);
      }),
    l
  );
}
function Pk(r, n) {
  (r = r || {}), (n = n || {});
  function i(w) {
    return w in n ? n[w] : r[w];
  }
  var l = Object.create(null),
    s = [];
  for (var c in r) c in n ? s.length && ((l[c] = s), (s = [])) : s.push(c);
  var f,
    m = {};
  for (var v in n) {
    if (l[v])
      for (f = 0; f < l[v].length; f++) {
        var x = l[v][f];
        m[l[v][f]] = i(x);
      }
    m[v] = i(v);
  }
  for (f = 0; f < s.length; f++) m[s[f]] = i(s[f]);
  return m;
}
function Xi(r, n, i) {
  return i[n] != null ? i[n] : r.props[n];
}
function Tk(r, n) {
  return Nh(r.children, function (i) {
    return N.cloneElement(i, {
      onExited: n.bind(null, i),
      in: !0,
      appear: Xi(i, "appear", r),
      enter: Xi(i, "enter", r),
      exit: Xi(i, "exit", r),
    });
  });
}
function Ok(r, n, i) {
  var l = Nh(r.children),
    s = Pk(n, l);
  return (
    Object.keys(s).forEach(function (c) {
      var f = s[c];
      if (N.isValidElement(f)) {
        var m = c in n,
          v = c in l,
          x = n[c],
          w = N.isValidElement(x) && !x.props.in;
        v && (!m || w)
          ? (s[c] = N.cloneElement(f, {
              onExited: i.bind(null, f),
              in: !0,
              exit: Xi(f, "exit", r),
              enter: Xi(f, "enter", r),
            }))
          : !v && m && !w
          ? (s[c] = N.cloneElement(f, { in: !1 }))
          : v &&
            m &&
            N.isValidElement(x) &&
            (s[c] = N.cloneElement(f, {
              onExited: i.bind(null, f),
              in: x.props.in,
              exit: Xi(f, "exit", r),
              enter: Xi(f, "enter", r),
            }));
      }
    }),
    s
  );
}
var Mk =
    Object.values ||
    function (r) {
      return Object.keys(r).map(function (n) {
        return r[n];
      });
    },
  zk = {
    component: "div",
    childFactory: function (n) {
      return n;
    },
  },
  Lh = (function (r) {
    Rg(n, r);
    function n(l, s) {
      var c;
      c = r.call(this, l, s) || this;
      var f = c.handleExited.bind(_k(c));
      return (c.state = { contextValue: { isMounting: !0 }, handleExited: f, firstRender: !0 }), c;
    }
    var i = n.prototype;
    return (
      (i.componentDidMount = function () {
        (this.mounted = !0), this.setState({ contextValue: { isMounting: !1 } });
      }),
      (i.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (n.getDerivedStateFromProps = function (s, c) {
        var f = c.children,
          m = c.handleExited,
          v = c.firstRender;
        return { children: v ? Tk(s, m) : Ok(s, f, m), firstRender: !1 };
      }),
      (i.handleExited = function (s, c) {
        var f = Nh(this.props.children);
        s.key in f ||
          (s.props.onExited && s.props.onExited(c),
          this.mounted &&
            this.setState(function (m) {
              var v = Y({}, m.children);
              return delete v[s.key], { children: v };
            }));
      }),
      (i.render = function () {
        var s = this.props,
          c = s.component,
          f = s.childFactory,
          m = tt(s, ["component", "childFactory"]),
          v = this.state.contextValue,
          x = Mk(this.state.children).map(f);
        return (
          delete m.appear,
          delete m.enter,
          delete m.exit,
          c === null
            ? Hn.createElement($f.Provider, { value: v }, x)
            : Hn.createElement($f.Provider, { value: v }, Hn.createElement(c, m, x))
        );
      }),
      n
    );
  })(Hn.Component);
Lh.propTypes = {};
Lh.defaultProps = zk;
const Pg = (r) => r.scrollTop;
function ml(r, n) {
  var i, l;
  const { timeout: s, easing: c, style: f = {} } = r;
  return {
    duration: (i = f.transitionDuration) != null ? i : typeof s == "number" ? s : s[n.mode] || 0,
    easing: (l = f.transitionTimingFunction) != null ? l : typeof c == "object" ? c[n.mode] : c,
    delay: f.transitionDelay,
  };
}
const Nk = [
    "addEndListener",
    "appear",
    "children",
    "easing",
    "in",
    "onEnter",
    "onEntered",
    "onEntering",
    "onExit",
    "onExited",
    "onExiting",
    "style",
    "timeout",
    "TransitionComponent",
  ],
  Lk = { entering: { opacity: 1 }, entered: { opacity: 1 } },
  jk = N.forwardRef(function (n, i) {
    const l = qf(),
      s = {
        enter: l.transitions.duration.enteringScreen,
        exit: l.transitions.duration.leavingScreen,
      },
      {
        addEndListener: c,
        appear: f = !0,
        children: m,
        easing: v,
        in: x,
        onEnter: w,
        onEntered: k,
        onEntering: E,
        onExit: j,
        onExited: z,
        onExiting: b,
        style: O,
        timeout: q = s,
        TransitionComponent: K = Rn,
      } = n,
      X = tt(n, Nk),
      V = N.useRef(null),
      D = $n(V, m.ref, i),
      A = (ye) => (me) => {
        if (ye) {
          const ce = V.current;
          me === void 0 ? ye(ce) : ye(ce, me);
        }
      },
      Q = A(E),
      ae = A((ye, me) => {
        Pg(ye);
        const ce = ml({ style: O, timeout: q, easing: v }, { mode: "enter" });
        (ye.style.webkitTransition = l.transitions.create("opacity", ce)),
          (ye.style.transition = l.transitions.create("opacity", ce)),
          w && w(ye, me);
      }),
      xe = A(k),
      he = A(b),
      Te = A((ye) => {
        const me = ml({ style: O, timeout: q, easing: v }, { mode: "exit" });
        (ye.style.webkitTransition = l.transitions.create("opacity", me)),
          (ye.style.transition = l.transitions.create("opacity", me)),
          j && j(ye);
      }),
      ue = A(z),
      fe = (ye) => {
        c && c(V.current, ye);
      };
    return M.jsx(
      K,
      Y(
        {
          appear: f,
          in: x,
          nodeRef: V,
          onEnter: ae,
          onEntered: xe,
          onEntering: Q,
          onExit: Te,
          onExited: ue,
          onExiting: he,
          addEndListener: fe,
          timeout: q,
        },
        X,
        {
          children: (ye, me) =>
            N.cloneElement(
              m,
              Y(
                {
                  style: Y(
                    { opacity: 0, visibility: ye === "exited" && !x ? "hidden" : void 0 },
                    Lk[ye],
                    O,
                    m.props.style
                  ),
                  ref: D,
                },
                me
              )
            ),
        }
      )
    );
  }),
  { black: n0, light: Ik } = Ke,
  { size: Dk, fontWeightRegular: Ak } = At,
  { borderRadius: Fk } = gt,
  Wk = {
    defaultProps: { arrow: !0, TransitionComponent: jk },
    styleOverrides: {
      tooltip: {
        maxWidth: U(200),
        backgroundColor: n0.main,
        color: Ik.main,
        fontSize: Dk.sm,
        fontWeight: Ak,
        textAlign: "center",
        borderRadius: Fk.md,
        opacity: 0.7,
        padding: `${U(5)} ${U(8)} ${U(4)}`,
      },
      arrow: { color: n0.main },
    },
  },
  Bk = { defaultProps: { color: "transparent" }, styleOverrides: { root: { boxShadow: "none" } } },
  { grey: Uk, white: Vk } = Ke,
  { borderRadius: o0 } = gt,
  { tabsBoxShadow: Hk } = En,
  Gk = {
    styleOverrides: {
      root: {
        position: "relative",
        backgroundColor: Uk[100],
        borderRadius: o0.xl,
        minHeight: "unset",
        padding: U(4),
      },
      flexContainer: { height: "100%", position: "relative", zIndex: 10 },
      fixed: { overflow: "unset !important", overflowX: "unset !important" },
      vertical: { "& .MuiTabs-indicator": { width: "100%" } },
      indicator: {
        height: "100%",
        borderRadius: o0.lg,
        backgroundColor: Vk.main,
        boxShadow: Hk.indicator,
        transition: "all 500ms ease",
      },
    },
  },
  { size: qk, fontWeightRegular: Kk } = At,
  { borderRadius: Xk } = gt,
  { dark: Yk } = Ke,
  Qk = {
    styleOverrides: {
      root: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        flex: "1 1 auto",
        textAlign: "center",
        maxWidth: "unset !important",
        minWidth: "unset !important",
        minHeight: "unset !important",
        fontSize: qk.md,
        fontWeight: Kk,
        textTransform: "none",
        lineHeight: "inherit",
        padding: U(4),
        borderRadius: Xk.lg,
        color: `${Yk.main} !important`,
        opacity: "1 !important",
        "& .material-icons, .material-icons-round": {
          marginBottom: "0 !important",
          marginRight: U(6),
        },
        "& svg": { marginBottom: "0 !important", marginRight: U(6) },
        "& i.MuiTab-iconWrapper": { marginBottom: 0 },
      },
      labelIcon: { paddingTop: U(4) },
    },
  },
  { transparent: Zk, gradients: i0 } = Ke,
  { borderRadius: Jk } = gt,
  { colored: eS } = En,
  tS = {
    styleOverrides: {
      root: {
        background: hl(i0.info.main, i0.info.state),
        padding: `${U(24)} 0 ${U(16)}`,
        borderRadius: Jk.lg,
        boxShadow: eS.info,
        "&.MuiPaper-root": { backgroundColor: Zk.main },
      },
    },
  },
  rS = { styleOverrides: { root: { padding: `0 ${U(6)}` } } },
  { white: a0 } = Ke,
  { borderWidth: nS } = gt,
  oS = {
    styleOverrides: {
      root: {
        color: "#9fc9ff",
        transition: "all 200ms linear",
        "&.Mui-active": { color: a0.main },
        "&.Mui-completed": { color: a0.main },
      },
      alternativeLabel: { top: "14%", left: "-50%", right: "50%" },
      line: { borderWidth: `${nS[2]} !important`, borderColor: "currentColor", opacity: 0.5 },
    },
  },
  { size: iS, fontWeightRegular: Bp } = At,
  { white: l0 } = Ke,
  aS = {
    styleOverrides: {
      label: {
        marginTop: `${U(8)} !important`,
        fontWeight: Bp,
        fontSize: iS.xs,
        color: "#9fc9ff",
        textTransform: "uppercase",
        "&.Mui-active": { fontWeight: `${Bp} !important`, color: `${Gn(l0.main, 0.8)} !important` },
        "&.Mui-completed": {
          fontWeight: `${Bp} !important`,
          color: `${Gn(l0.main, 0.8)} !important`,
        },
      },
    },
  },
  { white: Bn } = Ke,
  lS = {
    styleOverrides: {
      root: {
        background: "#9fc9ff",
        fill: "#9fc9ff",
        stroke: "#9fc9ff",
        strokeWidth: U(10),
        width: U(13),
        height: U(13),
        borderRadius: "50%",
        zIndex: 99,
        transition: "all 200ms linear",
        "&.Mui-active": {
          background: Bn.main,
          fill: Bn.main,
          stroke: Bn.main,
          borderColor: Bn.main,
          boxShadow: et([0, 0], [0, 2], Bn.main, 1),
        },
        "&.Mui-completed": {
          background: Bn.main,
          fill: Bn.main,
          stroke: Bn.main,
          borderColor: Bn.main,
          boxShadow: et([0, 0], [0, 2], Bn.main, 1),
        },
      },
    },
  },
  { transparent: sS } = Ke,
  uS = {
    styleOverrides: {
      select: {
        display: "grid",
        alignItems: "center",
        padding: `0 ${U(12)} !important`,
        "& .Mui-selected": { backgroundColor: sS.main },
      },
      selectMenu: { background: "none", height: "none", minHeight: "none", overflow: "unset" },
      icon: { display: "none" },
    },
  },
  { dark: s0 } = Ke,
  { size: cS, fontWeightBold: fS } = At,
  dS = {
    styleOverrides: {
      root: { display: "block", minHeight: U(24), marginBottom: U(2) },
      label: {
        display: "inline-block",
        fontSize: cS.sm,
        fontWeight: fS,
        color: s0.main,
        lineHeight: 1,
        transform: `translateY(${U(1)})`,
        marginLeft: U(4),
        "&.Mui-disabled": { color: s0.main },
      },
    },
  },
  { text: pS } = Ke,
  hS = { styleOverrides: { root: { color: pS.main } } },
  { borderWidth: u0, borderColor: Up } = gt,
  { transparent: c0, info: vo } = Ke,
  mS = {
    styleOverrides: {
      root: {
        "& .MuiSvgIcon-root": {
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          width: U(20),
          height: U(20),
          color: c0.main,
          border: `${u0[1]} solid ${Up}`,
          borderRadius: U(5.6),
        },
        "&:hover": { backgroundColor: c0.main },
        "&.Mui-focusVisible": { border: `${u0[2]} solid ${vo.main} !important` },
      },
      colorPrimary: {
        color: Up,
        "&.Mui-checked": {
          color: vo.main,
          "& .MuiSvgIcon-root": {
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 -1 22 22'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' d='M6 10l3 3l6-6'/%3e%3c/svg%3e"), ${hl(
              vo.main,
              vo.main
            )}`,
            borderColor: vo.main,
          },
        },
      },
      colorSecondary: {
        color: Up,
        "& .MuiSvgIcon-root": {
          color: vo.main,
          "&.Mui-checked": {
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 -1 22 22'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' d='M6 10l3 3l6-6'/%3e%3c/svg%3e"), ${hl(
              vo.main,
              vo.main
            )}`,
            borderColor: vo.main,
          },
        },
      },
    },
  },
  { borderWidth: f0, borderColor: Vp } = gt,
  { transparent: d0, info: Hi } = Ke,
  vS = {
    styleOverrides: {
      root: {
        "& .MuiSvgIcon-root": {
          width: U(20),
          height: U(20),
          color: d0.main,
          border: `${f0[1]} solid ${Vp}`,
          borderRadius: "50%",
        },
        "&:after": {
          transition: "opacity 250ms ease-in-out",
          content: '""',
          position: "absolute",
          width: U(14),
          height: U(14),
          borderRadius: "50%",
          backgroundImage: hl(Hi.main, Hi.main),
          opacity: 0,
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          margin: "auto",
        },
        "&:hover": { backgroundColor: d0.main },
        "&.Mui-focusVisible": { border: `${f0[2]} solid ${Hi.main} !important` },
      },
      colorPrimary: {
        color: Vp,
        "&.Mui-checked": {
          color: Hi.main,
          "& .MuiSvgIcon-root": { borderColor: Hi.main },
          "&:after": { opacity: 1 },
        },
      },
      colorSecondary: {
        color: Vp,
        "&.Mui-checked": {
          color: Hi.main,
          "& .MuiSvgIcon-root": { borderColor: Hi.main },
          "&:after": { opacity: 1 },
        },
      },
    },
  },
  { lg: gS } = En,
  { size: sf } = At,
  { text: uf, white: Hp, transparent: yS, light: p0, dark: Gp, gradients: xS } = Ke,
  { borderRadius: h0 } = gt,
  bS = {
    styleOverrides: {
      popper: {
        boxShadow: gS,
        padding: U(8),
        fontSize: sf.sm,
        color: uf.main,
        textAlign: "left",
        backgroundColor: `${Hp.main} !important`,
        borderRadius: h0.md,
      },
      paper: { boxShadow: "none", backgroundColor: yS.main },
      option: {
        padding: `${U(4.8)} ${U(16)}`,
        borderRadius: h0.md,
        fontSize: sf.sm,
        color: uf.main,
        transition: "background-color 300ms ease, color 300ms ease",
        "&:hover, &:focus, &.Mui-selected, &.Mui-selected:hover, &.Mui-selected:focus": {
          backgroundColor: p0.main,
          color: Gp.main,
        },
        '&[aria-selected="true"]': {
          backgroundColor: `${p0.main} !important`,
          color: `${Gp.main} !important`,
        },
      },
      noOptions: { fontSize: sf.sm, color: uf.main },
      groupLabel: { color: Gp.main },
      loading: { fontSize: sf.sm, color: uf.main },
      tag: {
        display: "flex",
        alignItems: "center",
        height: "auto",
        padding: U(4),
        backgroundColor: xS.dark.state,
        color: Hp.main,
        "& .MuiChip-label": { lineHeight: 1.2, padding: `0 ${U(10)} 0 ${U(4)}` },
        "& .MuiSvgIcon-root, & .MuiSvgIcon-root:hover, & .MuiSvgIcon-root:focus": {
          color: Hp.main,
          marginRight: 0,
        },
      },
    },
  },
  { info: Xs, white: m0, gradients: wS } = Ke,
  kS = {
    ".flatpickr-day:hover, .flatpickr-day:focus, .flatpickr-day.nextMonthDay:hover, .flatpickr-day.nextMonthDay:focus":
      { background: Gn(Xs.main, 0.28), border: "none" },
    ".flatpickr-day.today": {
      background: Xs.main,
      color: m0.main,
      border: "none",
      "&:hover, &:focus": { background: `${Xs.focus} !important` },
    },
    ".flatpickr-day.selected, .flatpickr-day.selected:hover, .flatpickr-day.nextMonthDay.selected, .flatpickr-day.nextMonthDay.selected:hover, .flatpickr-day.nextMonthDay.selected:focus":
      { background: `${wS.info.state} !important`, color: m0.main, border: "none" },
    ".flatpickr-months .flatpickr-next-month:hover svg, .flatpickr-months .flatpickr-prev-month:hover svg":
      { color: `${Xs.main} !important`, fill: `${Xs.main} !important` },
  },
  {
    values: { sm: SS, md: CS, lg: $S, xl: ES, xxl: RS },
  } = zh,
  _S = `@media (min-width: ${SS}px)`,
  PS = `@media (min-width: ${CS}px)`,
  TS = `@media (min-width: ${$S}px)`,
  OS = `@media (min-width: ${ES}px)`,
  MS = `@media (min-width: ${RS}px)`,
  Ys = {
    paddingRight: `${U(24)} !important`,
    paddingLeft: `${U(24)} !important`,
    marginRight: "auto !important",
    marginLeft: "auto !important",
    width: "100% !important",
    position: "relative",
  },
  zS = {
    [_S]: { ".MuiContainer-root": { ...Ys, maxWidth: "540px !important" } },
    [PS]: { ".MuiContainer-root": { ...Ys, maxWidth: "720px !important" } },
    [TS]: { ".MuiContainer-root": { ...Ys, maxWidth: "960px !important" } },
    [OS]: { ".MuiContainer-root": { ...Ys, maxWidth: "1140px !important" } },
    [MS]: { ".MuiContainer-root": { ...Ys, maxWidth: "1320px !important" } },
  },
  { transparent: NS } = Ke,
  { lg: LS } = En,
  { borderRadius: jS } = gt,
  IS = {
    styleOverrides: { paper: { backgroundColor: NS.main, boxShadow: LS, borderRadius: jS.md } },
  },
  DS = { defaultProps: { disableRipple: !1 } },
  AS = {
    defaultProps: { baseClassName: "material-icons-round", fontSize: "inherit" },
    styleOverrides: {
      fontSizeInherit: { fontSize: "inherit !important" },
      fontSizeSmall: { fontSize: `${U(20)} !important` },
      fontSizeLarge: { fontSize: `${U(36)} !important` },
    },
  },
  FS = {
    defaultProps: { fontSize: "inherit" },
    styleOverrides: {
      fontSizeInherit: { fontSize: "inherit !important" },
      fontSizeSmall: { fontSize: `${U(20)} !important` },
      fontSizeLarge: { fontSize: `${U(36)} !important` },
    },
  },
  WS = { defaultProps: { underline: "none", color: "inherit" } },
  { borderRadius: BS } = gt,
  { xxl: US } = En,
  VS = {
    styleOverrides: {
      paper: { borderRadius: BS.lg, boxShadow: US },
      paperFullScreen: { borderRadius: 0 },
    },
  },
  { size: HS } = At,
  GS = { styleOverrides: { root: { padding: U(16), fontSize: HS.xl } } },
  { size: qS } = At,
  { text: KS } = Ke,
  { borderWidth: v0, borderColor: g0 } = gt,
  XS = {
    styleOverrides: {
      root: { padding: U(16), fontSize: qS.md, color: KS.main },
      dividers: { borderTop: `${v0[1]} solid ${g0}`, borderBottom: `${v0[1]} solid ${g0}` },
    },
  },
  { size: YS } = At,
  { text: QS } = Ke,
  ZS = { styleOverrides: { root: { fontSize: YS.md, color: QS.main } } },
  JS = { styleOverrides: { root: { padding: U(16) } } },
  e5 = Mh({
    breakpoints: { ...zh },
    palette: { ...Ke },
    typography: { ...At },
    boxShadows: { ...En },
    borders: { ...gt },
    functions: { boxShadow: et, hexToRgb: Eg, linearGradient: hl, pxToRem: U, rgba: Gn },
    components: {
      MuiCssBaseline: { styleOverrides: { ...sw, ...kS, ...zS } },
      MuiList: { ...uw },
      MuiListItem: { ...cw },
      MuiListItemText: { ...fw },
      MuiCard: { ...gw },
      MuiCardMedia: { ...xw },
      MuiCardContent: { ...bw },
      MuiButton: { ...Pw },
      MuiIconButton: { ...Ow },
      MuiInput: { ...jw },
      MuiInputLabel: { ...Aw },
      MuiOutlinedInput: { ...Bw },
      MuiTextField: { ...Vw },
      MuiMenu: { ...Yw },
      MuiMenuItem: { ...rk },
      MuiSwitch: { ...ik },
      MuiDivider: { ...ak },
      MuiTableContainer: { ...ck },
      MuiTableHead: { ...fk },
      MuiTableCell: { ...hk },
      MuiLinearProgress: { ...mk },
      MuiBreadcrumbs: { ...yk },
      MuiSlider: { ...Ck },
      MuiAvatar: { ...Ek },
      MuiTooltip: { ...Wk },
      MuiAppBar: { ...Bk },
      MuiTabs: { ...Gk },
      MuiTab: { ...Qk },
      MuiStepper: { ...tS },
      MuiStep: { ...rS },
      MuiStepConnector: { ...oS },
      MuiStepLabel: { ...aS },
      MuiStepIcon: { ...lS },
      MuiSelect: { ...uS },
      MuiFormControlLabel: { ...dS },
      MuiFormLabel: { ...hS },
      MuiCheckbox: { ...mS },
      MuiRadio: { ...vS },
      MuiAutocomplete: { ...bS },
      MuiPopover: { ...IS },
      MuiButtonBase: { ...DS },
      MuiIcon: { ...AS },
      MuiSvgIcon: { ...FS },
      MuiLink: { ...WS },
      MuiDialog: { ...VS },
      MuiDialogTitle: { ...GS },
      MuiDialogContent: { ...XS },
      MuiDialogContentText: { ...ZS },
      MuiDialogActions: { ...JS },
    },
  }),
  al = Sb({
    createStyledComponent: St("div", {
      name: "MuiContainer",
      slot: "Root",
      overridesResolver: (r, n) => {
        const { ownerState: i } = r;
        return [
          n.root,
          n[`maxWidth${mt(String(i.maxWidth))}`],
          i.fixed && n.fixed,
          i.disableGutters && n.disableGutters,
        ];
      },
    }),
    useThemeProps: (r) => fr({ props: r, name: "MuiContainer" }),
  });
function Tg(r) {
  var n,
    i,
    l = "";
  if (typeof r == "string" || typeof r == "number") l += r;
  else if (typeof r == "object")
    if (Array.isArray(r))
      for (n = 0; n < r.length; n++) r[n] && (i = Tg(r[n])) && (l && (l += " "), (l += i));
    else for (n in r) r[n] && (l && (l += " "), (l += n));
  return l;
}
function kt() {
  for (var r, n, i = 0, l = ""; i < arguments.length; )
    (r = arguments[i++]) && (n = Tg(r)) && (l && (l += " "), (l += n));
  return l;
}
function t5(r) {
  return typeof r == "string";
}
function r5(r, n, i) {
  return r === void 0 || t5(r) ? n : Y({}, n, { ownerState: Y({}, n.ownerState, i) });
}
const n5 = { disableDefaultClasses: !1 },
  o5 = N.createContext(n5);
function i5(r) {
  const { disableDefaultClasses: n } = N.useContext(o5);
  return (i) => (n ? "" : r(i));
}
function a5(r, n = []) {
  if (r === void 0) return {};
  const i = {};
  return (
    Object.keys(r)
      .filter((l) => l.match(/^on[A-Z]/) && typeof r[l] == "function" && !n.includes(l))
      .forEach((l) => {
        i[l] = r[l];
      }),
    i
  );
}
function l5(r, n) {
  return typeof r == "function" ? r(n) : r;
}
function y0(r) {
  if (r === void 0) return {};
  const n = {};
  return (
    Object.keys(r)
      .filter((i) => !(i.match(/^on[A-Z]/) && typeof r[i] == "function"))
      .forEach((i) => {
        n[i] = r[i];
      }),
    n
  );
}
function s5(r) {
  const {
    getSlotProps: n,
    additionalProps: i,
    externalSlotProps: l,
    externalForwardedProps: s,
    className: c,
  } = r;
  if (!n) {
    const j = kt(s?.className, l?.className, c, i?.className),
      z = Y({}, i?.style, s?.style, l?.style),
      b = Y({}, i, s, l);
    return (
      j.length > 0 && (b.className = j),
      Object.keys(z).length > 0 && (b.style = z),
      { props: b, internalRef: void 0 }
    );
  }
  const f = a5(Y({}, s, l)),
    m = y0(l),
    v = y0(s),
    x = n(f),
    w = kt(x?.className, i?.className, c, s?.className, l?.className),
    k = Y({}, x?.style, i?.style, s?.style, l?.style),
    E = Y({}, x, i, v, m);
  return (
    w.length > 0 && (E.className = w),
    Object.keys(k).length > 0 && (E.style = k),
    { props: E, internalRef: x.ref }
  );
}
const u5 = ["elementType", "externalSlotProps", "ownerState"];
function c5(r) {
  var n;
  const { elementType: i, externalSlotProps: l, ownerState: s } = r,
    c = tt(r, u5),
    f = l5(l, s),
    { props: m, internalRef: v } = s5(Y({}, c, { externalSlotProps: f })),
    x = $n(v, f?.ref, (n = r.additionalProps) == null ? void 0 : n.ref);
  return r5(i, Y({}, m, { ref: x }), s);
}
var Sr = "top",
  rn = "bottom",
  nn = "right",
  Cr = "left",
  jh = "auto",
  Su = [Sr, rn, nn, Cr],
  vl = "start",
  pu = "end",
  f5 = "clippingParents",
  Og = "viewport",
  Qs = "popper",
  d5 = "reference",
  x0 = Su.reduce(function (r, n) {
    return r.concat([n + "-" + vl, n + "-" + pu]);
  }, []),
  Mg = [].concat(Su, [jh]).reduce(function (r, n) {
    return r.concat([n, n + "-" + vl, n + "-" + pu]);
  }, []),
  p5 = "beforeRead",
  h5 = "read",
  m5 = "afterRead",
  v5 = "beforeMain",
  g5 = "main",
  y5 = "afterMain",
  x5 = "beforeWrite",
  b5 = "write",
  w5 = "afterWrite",
  k5 = [p5, h5, m5, v5, g5, y5, x5, b5, w5];
function Xn(r) {
  return r ? (r.nodeName || "").toLowerCase() : null;
}
function Ir(r) {
  if (r == null) return window;
  if (r.toString() !== "[object Window]") {
    var n = r.ownerDocument;
    return (n && n.defaultView) || window;
  }
  return r;
}
function ea(r) {
  var n = Ir(r).Element;
  return r instanceof n || r instanceof Element;
}
function en(r) {
  var n = Ir(r).HTMLElement;
  return r instanceof n || r instanceof HTMLElement;
}
function Ih(r) {
  if (typeof ShadowRoot > "u") return !1;
  var n = Ir(r).ShadowRoot;
  return r instanceof n || r instanceof ShadowRoot;
}
function S5(r) {
  var n = r.state;
  Object.keys(n.elements).forEach(function (i) {
    var l = n.styles[i] || {},
      s = n.attributes[i] || {},
      c = n.elements[i];
    !en(c) ||
      !Xn(c) ||
      (Object.assign(c.style, l),
      Object.keys(s).forEach(function (f) {
        var m = s[f];
        m === !1 ? c.removeAttribute(f) : c.setAttribute(f, m === !0 ? "" : m);
      }));
  });
}
function C5(r) {
  var n = r.state,
    i = {
      popper: { position: n.options.strategy, left: "0", top: "0", margin: "0" },
      arrow: { position: "absolute" },
      reference: {},
    };
  return (
    Object.assign(n.elements.popper.style, i.popper),
    (n.styles = i),
    n.elements.arrow && Object.assign(n.elements.arrow.style, i.arrow),
    function () {
      Object.keys(n.elements).forEach(function (l) {
        var s = n.elements[l],
          c = n.attributes[l] || {},
          f = Object.keys(n.styles.hasOwnProperty(l) ? n.styles[l] : i[l]),
          m = f.reduce(function (v, x) {
            return (v[x] = ""), v;
          }, {});
        !en(s) ||
          !Xn(s) ||
          (Object.assign(s.style, m),
          Object.keys(c).forEach(function (v) {
            s.removeAttribute(v);
          }));
      });
    }
  );
}
const $5 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: S5,
  effect: C5,
  requires: ["computeStyles"],
};
function Kn(r) {
  return r.split("-")[0];
}
var Yi = Math.max,
  Ef = Math.min,
  gl = Math.round;
function sh() {
  var r = navigator.userAgentData;
  return r != null && r.brands && Array.isArray(r.brands)
    ? r.brands
        .map(function (n) {
          return n.brand + "/" + n.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function zg() {
  return !/^((?!chrome|android).)*safari/i.test(sh());
}
function yl(r, n, i) {
  n === void 0 && (n = !1), i === void 0 && (i = !1);
  var l = r.getBoundingClientRect(),
    s = 1,
    c = 1;
  n &&
    en(r) &&
    ((s = (r.offsetWidth > 0 && gl(l.width) / r.offsetWidth) || 1),
    (c = (r.offsetHeight > 0 && gl(l.height) / r.offsetHeight) || 1));
  var f = ea(r) ? Ir(r) : window,
    m = f.visualViewport,
    v = !zg() && i,
    x = (l.left + (v && m ? m.offsetLeft : 0)) / s,
    w = (l.top + (v && m ? m.offsetTop : 0)) / c,
    k = l.width / s,
    E = l.height / c;
  return { width: k, height: E, top: w, right: x + k, bottom: w + E, left: x, x, y: w };
}
function Dh(r) {
  var n = yl(r),
    i = r.offsetWidth,
    l = r.offsetHeight;
  return (
    Math.abs(n.width - i) <= 1 && (i = n.width),
    Math.abs(n.height - l) <= 1 && (l = n.height),
    { x: r.offsetLeft, y: r.offsetTop, width: i, height: l }
  );
}
function Ng(r, n) {
  var i = n.getRootNode && n.getRootNode();
  if (r.contains(n)) return !0;
  if (i && Ih(i)) {
    var l = n;
    do {
      if (l && r.isSameNode(l)) return !0;
      l = l.parentNode || l.host;
    } while (l);
  }
  return !1;
}
function xo(r) {
  return Ir(r).getComputedStyle(r);
}
function E5(r) {
  return ["table", "td", "th"].indexOf(Xn(r)) >= 0;
}
function ci(r) {
  return ((ea(r) ? r.ownerDocument : r.document) || window.document).documentElement;
}
function Kf(r) {
  return Xn(r) === "html" ? r : r.assignedSlot || r.parentNode || (Ih(r) ? r.host : null) || ci(r);
}
function b0(r) {
  return !en(r) || xo(r).position === "fixed" ? null : r.offsetParent;
}
function R5(r) {
  var n = /firefox/i.test(sh()),
    i = /Trident/i.test(sh());
  if (i && en(r)) {
    var l = xo(r);
    if (l.position === "fixed") return null;
  }
  var s = Kf(r);
  for (Ih(s) && (s = s.host); en(s) && ["html", "body"].indexOf(Xn(s)) < 0; ) {
    var c = xo(s);
    if (
      c.transform !== "none" ||
      c.perspective !== "none" ||
      c.contain === "paint" ||
      ["transform", "perspective"].indexOf(c.willChange) !== -1 ||
      (n && c.willChange === "filter") ||
      (n && c.filter && c.filter !== "none")
    )
      return s;
    s = s.parentNode;
  }
  return null;
}
function Cu(r) {
  for (var n = Ir(r), i = b0(r); i && E5(i) && xo(i).position === "static"; ) i = b0(i);
  return i && (Xn(i) === "html" || (Xn(i) === "body" && xo(i).position === "static"))
    ? n
    : i || R5(r) || n;
}
function Ah(r) {
  return ["top", "bottom"].indexOf(r) >= 0 ? "x" : "y";
}
function au(r, n, i) {
  return Yi(r, Ef(n, i));
}
function _5(r, n, i) {
  var l = au(r, n, i);
  return l > i ? i : l;
}
function Lg() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function jg(r) {
  return Object.assign({}, Lg(), r);
}
function Ig(r, n) {
  return n.reduce(function (i, l) {
    return (i[l] = r), i;
  }, {});
}
var P5 = function (n, i) {
  return (
    (n = typeof n == "function" ? n(Object.assign({}, i.rects, { placement: i.placement })) : n),
    jg(typeof n != "number" ? n : Ig(n, Su))
  );
};
function T5(r) {
  var n,
    i = r.state,
    l = r.name,
    s = r.options,
    c = i.elements.arrow,
    f = i.modifiersData.popperOffsets,
    m = Kn(i.placement),
    v = Ah(m),
    x = [Cr, nn].indexOf(m) >= 0,
    w = x ? "height" : "width";
  if (!(!c || !f)) {
    var k = P5(s.padding, i),
      E = Dh(c),
      j = v === "y" ? Sr : Cr,
      z = v === "y" ? rn : nn,
      b = i.rects.reference[w] + i.rects.reference[v] - f[v] - i.rects.popper[w],
      O = f[v] - i.rects.reference[v],
      q = Cu(c),
      K = q ? (v === "y" ? q.clientHeight || 0 : q.clientWidth || 0) : 0,
      X = b / 2 - O / 2,
      V = k[j],
      D = K - E[w] - k[z],
      A = K / 2 - E[w] / 2 + X,
      Q = au(V, A, D),
      ae = v;
    i.modifiersData[l] = ((n = {}), (n[ae] = Q), (n.centerOffset = Q - A), n);
  }
}
function O5(r) {
  var n = r.state,
    i = r.options,
    l = i.element,
    s = l === void 0 ? "[data-popper-arrow]" : l;
  s != null &&
    ((typeof s == "string" && ((s = n.elements.popper.querySelector(s)), !s)) ||
      (Ng(n.elements.popper, s) && (n.elements.arrow = s)));
}
const M5 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: T5,
  effect: O5,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function xl(r) {
  return r.split("-")[1];
}
var z5 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function N5(r, n) {
  var i = r.x,
    l = r.y,
    s = n.devicePixelRatio || 1;
  return { x: gl(i * s) / s || 0, y: gl(l * s) / s || 0 };
}
function w0(r) {
  var n,
    i = r.popper,
    l = r.popperRect,
    s = r.placement,
    c = r.variation,
    f = r.offsets,
    m = r.position,
    v = r.gpuAcceleration,
    x = r.adaptive,
    w = r.roundOffsets,
    k = r.isFixed,
    E = f.x,
    j = E === void 0 ? 0 : E,
    z = f.y,
    b = z === void 0 ? 0 : z,
    O = typeof w == "function" ? w({ x: j, y: b }) : { x: j, y: b };
  (j = O.x), (b = O.y);
  var q = f.hasOwnProperty("x"),
    K = f.hasOwnProperty("y"),
    X = Cr,
    V = Sr,
    D = window;
  if (x) {
    var A = Cu(i),
      Q = "clientHeight",
      ae = "clientWidth";
    if (
      (A === Ir(i) &&
        ((A = ci(i)),
        xo(A).position !== "static" &&
          m === "absolute" &&
          ((Q = "scrollHeight"), (ae = "scrollWidth"))),
      (A = A),
      s === Sr || ((s === Cr || s === nn) && c === pu))
    ) {
      V = rn;
      var xe = k && A === D && D.visualViewport ? D.visualViewport.height : A[Q];
      (b -= xe - l.height), (b *= v ? 1 : -1);
    }
    if (s === Cr || ((s === Sr || s === rn) && c === pu)) {
      X = nn;
      var he = k && A === D && D.visualViewport ? D.visualViewport.width : A[ae];
      (j -= he - l.width), (j *= v ? 1 : -1);
    }
  }
  var Te = Object.assign({ position: m }, x && z5),
    ue = w === !0 ? N5({ x: j, y: b }, Ir(i)) : { x: j, y: b };
  if (((j = ue.x), (b = ue.y), v)) {
    var fe;
    return Object.assign(
      {},
      Te,
      ((fe = {}),
      (fe[V] = K ? "0" : ""),
      (fe[X] = q ? "0" : ""),
      (fe.transform =
        (D.devicePixelRatio || 1) <= 1
          ? "translate(" + j + "px, " + b + "px)"
          : "translate3d(" + j + "px, " + b + "px, 0)"),
      fe)
    );
  }
  return Object.assign(
    {},
    Te,
    ((n = {}), (n[V] = K ? b + "px" : ""), (n[X] = q ? j + "px" : ""), (n.transform = ""), n)
  );
}
function L5(r) {
  var n = r.state,
    i = r.options,
    l = i.gpuAcceleration,
    s = l === void 0 ? !0 : l,
    c = i.adaptive,
    f = c === void 0 ? !0 : c,
    m = i.roundOffsets,
    v = m === void 0 ? !0 : m,
    x = {
      placement: Kn(n.placement),
      variation: xl(n.placement),
      popper: n.elements.popper,
      popperRect: n.rects.popper,
      gpuAcceleration: s,
      isFixed: n.options.strategy === "fixed",
    };
  n.modifiersData.popperOffsets != null &&
    (n.styles.popper = Object.assign(
      {},
      n.styles.popper,
      w0(
        Object.assign({}, x, {
          offsets: n.modifiersData.popperOffsets,
          position: n.options.strategy,
          adaptive: f,
          roundOffsets: v,
        })
      )
    )),
    n.modifiersData.arrow != null &&
      (n.styles.arrow = Object.assign(
        {},
        n.styles.arrow,
        w0(
          Object.assign({}, x, {
            offsets: n.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: v,
          })
        )
      )),
    (n.attributes.popper = Object.assign({}, n.attributes.popper, {
      "data-popper-placement": n.placement,
    }));
}
const j5 = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: L5, data: {} };
var cf = { passive: !0 };
function I5(r) {
  var n = r.state,
    i = r.instance,
    l = r.options,
    s = l.scroll,
    c = s === void 0 ? !0 : s,
    f = l.resize,
    m = f === void 0 ? !0 : f,
    v = Ir(n.elements.popper),
    x = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return (
    c &&
      x.forEach(function (w) {
        w.addEventListener("scroll", i.update, cf);
      }),
    m && v.addEventListener("resize", i.update, cf),
    function () {
      c &&
        x.forEach(function (w) {
          w.removeEventListener("scroll", i.update, cf);
        }),
        m && v.removeEventListener("resize", i.update, cf);
    }
  );
}
const D5 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: I5,
  data: {},
};
var A5 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function yf(r) {
  return r.replace(/left|right|bottom|top/g, function (n) {
    return A5[n];
  });
}
var F5 = { start: "end", end: "start" };
function k0(r) {
  return r.replace(/start|end/g, function (n) {
    return F5[n];
  });
}
function Fh(r) {
  var n = Ir(r),
    i = n.pageXOffset,
    l = n.pageYOffset;
  return { scrollLeft: i, scrollTop: l };
}
function Wh(r) {
  return yl(ci(r)).left + Fh(r).scrollLeft;
}
function W5(r, n) {
  var i = Ir(r),
    l = ci(r),
    s = i.visualViewport,
    c = l.clientWidth,
    f = l.clientHeight,
    m = 0,
    v = 0;
  if (s) {
    (c = s.width), (f = s.height);
    var x = zg();
    (x || (!x && n === "fixed")) && ((m = s.offsetLeft), (v = s.offsetTop));
  }
  return { width: c, height: f, x: m + Wh(r), y: v };
}
function B5(r) {
  var n,
    i = ci(r),
    l = Fh(r),
    s = (n = r.ownerDocument) == null ? void 0 : n.body,
    c = Yi(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
    f = Yi(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
    m = -l.scrollLeft + Wh(r),
    v = -l.scrollTop;
  return (
    xo(s || i).direction === "rtl" && (m += Yi(i.clientWidth, s ? s.clientWidth : 0) - c),
    { width: c, height: f, x: m, y: v }
  );
}
function Bh(r) {
  var n = xo(r),
    i = n.overflow,
    l = n.overflowX,
    s = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(i + s + l);
}
function Dg(r) {
  return ["html", "body", "#document"].indexOf(Xn(r)) >= 0
    ? r.ownerDocument.body
    : en(r) && Bh(r)
    ? r
    : Dg(Kf(r));
}
function lu(r, n) {
  var i;
  n === void 0 && (n = []);
  var l = Dg(r),
    s = l === ((i = r.ownerDocument) == null ? void 0 : i.body),
    c = Ir(l),
    f = s ? [c].concat(c.visualViewport || [], Bh(l) ? l : []) : l,
    m = n.concat(f);
  return s ? m : m.concat(lu(Kf(f)));
}
function uh(r) {
  return Object.assign({}, r, {
    left: r.x,
    top: r.y,
    right: r.x + r.width,
    bottom: r.y + r.height,
  });
}
function U5(r, n) {
  var i = yl(r, !1, n === "fixed");
  return (
    (i.top = i.top + r.clientTop),
    (i.left = i.left + r.clientLeft),
    (i.bottom = i.top + r.clientHeight),
    (i.right = i.left + r.clientWidth),
    (i.width = r.clientWidth),
    (i.height = r.clientHeight),
    (i.x = i.left),
    (i.y = i.top),
    i
  );
}
function S0(r, n, i) {
  return n === Og ? uh(W5(r, i)) : ea(n) ? U5(n, i) : uh(B5(ci(r)));
}
function V5(r) {
  var n = lu(Kf(r)),
    i = ["absolute", "fixed"].indexOf(xo(r).position) >= 0,
    l = i && en(r) ? Cu(r) : r;
  return ea(l)
    ? n.filter(function (s) {
        return ea(s) && Ng(s, l) && Xn(s) !== "body";
      })
    : [];
}
function H5(r, n, i, l) {
  var s = n === "clippingParents" ? V5(r) : [].concat(n),
    c = [].concat(s, [i]),
    f = c[0],
    m = c.reduce(function (v, x) {
      var w = S0(r, x, l);
      return (
        (v.top = Yi(w.top, v.top)),
        (v.right = Ef(w.right, v.right)),
        (v.bottom = Ef(w.bottom, v.bottom)),
        (v.left = Yi(w.left, v.left)),
        v
      );
    }, S0(r, f, l));
  return (
    (m.width = m.right - m.left), (m.height = m.bottom - m.top), (m.x = m.left), (m.y = m.top), m
  );
}
function Ag(r) {
  var n = r.reference,
    i = r.element,
    l = r.placement,
    s = l ? Kn(l) : null,
    c = l ? xl(l) : null,
    f = n.x + n.width / 2 - i.width / 2,
    m = n.y + n.height / 2 - i.height / 2,
    v;
  switch (s) {
    case Sr:
      v = { x: f, y: n.y - i.height };
      break;
    case rn:
      v = { x: f, y: n.y + n.height };
      break;
    case nn:
      v = { x: n.x + n.width, y: m };
      break;
    case Cr:
      v = { x: n.x - i.width, y: m };
      break;
    default:
      v = { x: n.x, y: n.y };
  }
  var x = s ? Ah(s) : null;
  if (x != null) {
    var w = x === "y" ? "height" : "width";
    switch (c) {
      case vl:
        v[x] = v[x] - (n[w] / 2 - i[w] / 2);
        break;
      case pu:
        v[x] = v[x] + (n[w] / 2 - i[w] / 2);
        break;
    }
  }
  return v;
}
function hu(r, n) {
  n === void 0 && (n = {});
  var i = n,
    l = i.placement,
    s = l === void 0 ? r.placement : l,
    c = i.strategy,
    f = c === void 0 ? r.strategy : c,
    m = i.boundary,
    v = m === void 0 ? f5 : m,
    x = i.rootBoundary,
    w = x === void 0 ? Og : x,
    k = i.elementContext,
    E = k === void 0 ? Qs : k,
    j = i.altBoundary,
    z = j === void 0 ? !1 : j,
    b = i.padding,
    O = b === void 0 ? 0 : b,
    q = jg(typeof O != "number" ? O : Ig(O, Su)),
    K = E === Qs ? d5 : Qs,
    X = r.rects.popper,
    V = r.elements[z ? K : E],
    D = H5(ea(V) ? V : V.contextElement || ci(r.elements.popper), v, w, f),
    A = yl(r.elements.reference),
    Q = Ag({ reference: A, element: X, placement: s }),
    ae = uh(Object.assign({}, X, Q)),
    xe = E === Qs ? ae : A,
    he = {
      top: D.top - xe.top + q.top,
      bottom: xe.bottom - D.bottom + q.bottom,
      left: D.left - xe.left + q.left,
      right: xe.right - D.right + q.right,
    },
    Te = r.modifiersData.offset;
  if (E === Qs && Te) {
    var ue = Te[s];
    Object.keys(he).forEach(function (fe) {
      var ye = [nn, rn].indexOf(fe) >= 0 ? 1 : -1,
        me = [Sr, rn].indexOf(fe) >= 0 ? "y" : "x";
      he[fe] += ue[me] * ye;
    });
  }
  return he;
}
function G5(r, n) {
  n === void 0 && (n = {});
  var i = n,
    l = i.placement,
    s = i.boundary,
    c = i.rootBoundary,
    f = i.padding,
    m = i.flipVariations,
    v = i.allowedAutoPlacements,
    x = v === void 0 ? Mg : v,
    w = xl(l),
    k = w
      ? m
        ? x0
        : x0.filter(function (z) {
            return xl(z) === w;
          })
      : Su,
    E = k.filter(function (z) {
      return x.indexOf(z) >= 0;
    });
  E.length === 0 && (E = k);
  var j = E.reduce(function (z, b) {
    return (z[b] = hu(r, { placement: b, boundary: s, rootBoundary: c, padding: f })[Kn(b)]), z;
  }, {});
  return Object.keys(j).sort(function (z, b) {
    return j[z] - j[b];
  });
}
function q5(r) {
  if (Kn(r) === jh) return [];
  var n = yf(r);
  return [k0(r), n, k0(n)];
}
function K5(r) {
  var n = r.state,
    i = r.options,
    l = r.name;
  if (!n.modifiersData[l]._skip) {
    for (
      var s = i.mainAxis,
        c = s === void 0 ? !0 : s,
        f = i.altAxis,
        m = f === void 0 ? !0 : f,
        v = i.fallbackPlacements,
        x = i.padding,
        w = i.boundary,
        k = i.rootBoundary,
        E = i.altBoundary,
        j = i.flipVariations,
        z = j === void 0 ? !0 : j,
        b = i.allowedAutoPlacements,
        O = n.options.placement,
        q = Kn(O),
        K = q === O,
        X = v || (K || !z ? [yf(O)] : q5(O)),
        V = [O].concat(X).reduce(function (be, Oe) {
          return be.concat(
            Kn(Oe) === jh
              ? G5(n, {
                  placement: Oe,
                  boundary: w,
                  rootBoundary: k,
                  padding: x,
                  flipVariations: z,
                  allowedAutoPlacements: b,
                })
              : Oe
          );
        }, []),
        D = n.rects.reference,
        A = n.rects.popper,
        Q = new Map(),
        ae = !0,
        xe = V[0],
        he = 0;
      he < V.length;
      he++
    ) {
      var Te = V[he],
        ue = Kn(Te),
        fe = xl(Te) === vl,
        ye = [Sr, rn].indexOf(ue) >= 0,
        me = ye ? "width" : "height",
        ce = hu(n, { placement: Te, boundary: w, rootBoundary: k, altBoundary: E, padding: x }),
        se = ye ? (fe ? nn : Cr) : fe ? rn : Sr;
      D[me] > A[me] && (se = yf(se));
      var J = yf(se),
        de = [];
      if (
        (c && de.push(ce[ue] <= 0),
        m && de.push(ce[se] <= 0, ce[J] <= 0),
        de.every(function (be) {
          return be;
        }))
      ) {
        (xe = Te), (ae = !1);
        break;
      }
      Q.set(Te, de);
    }
    if (ae)
      for (
        var R = z ? 3 : 1,
          H = function (Oe) {
            var pe = V.find(function (je) {
              var Re = Q.get(je);
              if (Re)
                return Re.slice(0, Oe).every(function (He) {
                  return He;
                });
            });
            if (pe) return (xe = pe), "break";
          },
          ve = R;
        ve > 0;
        ve--
      ) {
        var Me = H(ve);
        if (Me === "break") break;
      }
    n.placement !== xe && ((n.modifiersData[l]._skip = !0), (n.placement = xe), (n.reset = !0));
  }
}
const X5 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: K5,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function C0(r, n, i) {
  return (
    i === void 0 && (i = { x: 0, y: 0 }),
    {
      top: r.top - n.height - i.y,
      right: r.right - n.width + i.x,
      bottom: r.bottom - n.height + i.y,
      left: r.left - n.width - i.x,
    }
  );
}
function $0(r) {
  return [Sr, nn, rn, Cr].some(function (n) {
    return r[n] >= 0;
  });
}
function Y5(r) {
  var n = r.state,
    i = r.name,
    l = n.rects.reference,
    s = n.rects.popper,
    c = n.modifiersData.preventOverflow,
    f = hu(n, { elementContext: "reference" }),
    m = hu(n, { altBoundary: !0 }),
    v = C0(f, l),
    x = C0(m, s, c),
    w = $0(v),
    k = $0(x);
  (n.modifiersData[i] = {
    referenceClippingOffsets: v,
    popperEscapeOffsets: x,
    isReferenceHidden: w,
    hasPopperEscaped: k,
  }),
    (n.attributes.popper = Object.assign({}, n.attributes.popper, {
      "data-popper-reference-hidden": w,
      "data-popper-escaped": k,
    }));
}
const Q5 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Y5,
};
function Z5(r, n, i) {
  var l = Kn(r),
    s = [Cr, Sr].indexOf(l) >= 0 ? -1 : 1,
    c = typeof i == "function" ? i(Object.assign({}, n, { placement: r })) : i,
    f = c[0],
    m = c[1];
  return (
    (f = f || 0), (m = (m || 0) * s), [Cr, nn].indexOf(l) >= 0 ? { x: m, y: f } : { x: f, y: m }
  );
}
function J5(r) {
  var n = r.state,
    i = r.options,
    l = r.name,
    s = i.offset,
    c = s === void 0 ? [0, 0] : s,
    f = Mg.reduce(function (w, k) {
      return (w[k] = Z5(k, n.rects, c)), w;
    }, {}),
    m = f[n.placement],
    v = m.x,
    x = m.y;
  n.modifiersData.popperOffsets != null &&
    ((n.modifiersData.popperOffsets.x += v), (n.modifiersData.popperOffsets.y += x)),
    (n.modifiersData[l] = f);
}
const e3 = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: J5 };
function t3(r) {
  var n = r.state,
    i = r.name;
  n.modifiersData[i] = Ag({
    reference: n.rects.reference,
    element: n.rects.popper,
    placement: n.placement,
  });
}
const r3 = { name: "popperOffsets", enabled: !0, phase: "read", fn: t3, data: {} };
function n3(r) {
  return r === "x" ? "y" : "x";
}
function o3(r) {
  var n = r.state,
    i = r.options,
    l = r.name,
    s = i.mainAxis,
    c = s === void 0 ? !0 : s,
    f = i.altAxis,
    m = f === void 0 ? !1 : f,
    v = i.boundary,
    x = i.rootBoundary,
    w = i.altBoundary,
    k = i.padding,
    E = i.tether,
    j = E === void 0 ? !0 : E,
    z = i.tetherOffset,
    b = z === void 0 ? 0 : z,
    O = hu(n, { boundary: v, rootBoundary: x, padding: k, altBoundary: w }),
    q = Kn(n.placement),
    K = xl(n.placement),
    X = !K,
    V = Ah(q),
    D = n3(V),
    A = n.modifiersData.popperOffsets,
    Q = n.rects.reference,
    ae = n.rects.popper,
    xe = typeof b == "function" ? b(Object.assign({}, n.rects, { placement: n.placement })) : b,
    he =
      typeof xe == "number"
        ? { mainAxis: xe, altAxis: xe }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, xe),
    Te = n.modifiersData.offset ? n.modifiersData.offset[n.placement] : null,
    ue = { x: 0, y: 0 };
  if (A) {
    if (c) {
      var fe,
        ye = V === "y" ? Sr : Cr,
        me = V === "y" ? rn : nn,
        ce = V === "y" ? "height" : "width",
        se = A[V],
        J = se + O[ye],
        de = se - O[me],
        R = j ? -ae[ce] / 2 : 0,
        H = K === vl ? Q[ce] : ae[ce],
        ve = K === vl ? -ae[ce] : -Q[ce],
        Me = n.elements.arrow,
        be = j && Me ? Dh(Me) : { width: 0, height: 0 },
        Oe = n.modifiersData["arrow#persistent"]
          ? n.modifiersData["arrow#persistent"].padding
          : Lg(),
        pe = Oe[ye],
        je = Oe[me],
        Re = au(0, Q[ce], be[ce]),
        He = X ? Q[ce] / 2 - R - Re - pe - he.mainAxis : H - Re - pe - he.mainAxis,
        dr = X ? -Q[ce] / 2 + R + Re + je + he.mainAxis : ve + Re + je + he.mainAxis,
        Ht = n.elements.arrow && Cu(n.elements.arrow),
        bo = Ht ? (V === "y" ? Ht.clientTop || 0 : Ht.clientLeft || 0) : 0,
        an = (fe = Te?.[V]) != null ? fe : 0,
        ln = se + He - an - bo,
        wo = se + dr - an,
        Yn = au(j ? Ef(J, ln) : J, se, j ? Yi(de, wo) : de);
      (A[V] = Yn), (ue[V] = Yn - se);
    }
    if (m) {
      var _n,
        Pn = V === "x" ? Sr : Cr,
        Qn = V === "x" ? rn : nn,
        Mt = A[D],
        Ft = D === "y" ? "height" : "width",
        sn = Mt + O[Pn],
        Tn = Mt - O[Qn],
        pr = [Sr, Cr].indexOf(q) !== -1,
        hr = (_n = Te?.[D]) != null ? _n : 0,
        On = pr ? sn : Mt - Q[Ft] - ae[Ft] - hr + he.altAxis,
        Fr = pr ? Mt + Q[Ft] + ae[Ft] - hr - he.altAxis : Tn,
        Wr = j && pr ? _5(On, Mt, Fr) : au(j ? On : sn, Mt, j ? Fr : Tn);
      (A[D] = Wr), (ue[D] = Wr - Mt);
    }
    n.modifiersData[l] = ue;
  }
}
const i3 = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: o3,
  requiresIfExists: ["offset"],
};
function a3(r) {
  return { scrollLeft: r.scrollLeft, scrollTop: r.scrollTop };
}
function l3(r) {
  return r === Ir(r) || !en(r) ? Fh(r) : a3(r);
}
function s3(r) {
  var n = r.getBoundingClientRect(),
    i = gl(n.width) / r.offsetWidth || 1,
    l = gl(n.height) / r.offsetHeight || 1;
  return i !== 1 || l !== 1;
}
function u3(r, n, i) {
  i === void 0 && (i = !1);
  var l = en(n),
    s = en(n) && s3(n),
    c = ci(n),
    f = yl(r, s, i),
    m = { scrollLeft: 0, scrollTop: 0 },
    v = { x: 0, y: 0 };
  return (
    (l || (!l && !i)) &&
      ((Xn(n) !== "body" || Bh(c)) && (m = l3(n)),
      en(n) ? ((v = yl(n, !0)), (v.x += n.clientLeft), (v.y += n.clientTop)) : c && (v.x = Wh(c))),
    {
      x: f.left + m.scrollLeft - v.x,
      y: f.top + m.scrollTop - v.y,
      width: f.width,
      height: f.height,
    }
  );
}
function c3(r) {
  var n = new Map(),
    i = new Set(),
    l = [];
  r.forEach(function (c) {
    n.set(c.name, c);
  });
  function s(c) {
    i.add(c.name);
    var f = [].concat(c.requires || [], c.requiresIfExists || []);
    f.forEach(function (m) {
      if (!i.has(m)) {
        var v = n.get(m);
        v && s(v);
      }
    }),
      l.push(c);
  }
  return (
    r.forEach(function (c) {
      i.has(c.name) || s(c);
    }),
    l
  );
}
function f3(r) {
  var n = c3(r);
  return k5.reduce(function (i, l) {
    return i.concat(
      n.filter(function (s) {
        return s.phase === l;
      })
    );
  }, []);
}
function d3(r) {
  var n;
  return function () {
    return (
      n ||
        (n = new Promise(function (i) {
          Promise.resolve().then(function () {
            (n = void 0), i(r());
          });
        })),
      n
    );
  };
}
function p3(r) {
  var n = r.reduce(function (i, l) {
    var s = i[l.name];
    return (
      (i[l.name] = s
        ? Object.assign({}, s, l, {
            options: Object.assign({}, s.options, l.options),
            data: Object.assign({}, s.data, l.data),
          })
        : l),
      i
    );
  }, {});
  return Object.keys(n).map(function (i) {
    return n[i];
  });
}
var E0 = { placement: "bottom", modifiers: [], strategy: "absolute" };
function R0() {
  for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i];
  return !n.some(function (l) {
    return !(l && typeof l.getBoundingClientRect == "function");
  });
}
function h3(r) {
  r === void 0 && (r = {});
  var n = r,
    i = n.defaultModifiers,
    l = i === void 0 ? [] : i,
    s = n.defaultOptions,
    c = s === void 0 ? E0 : s;
  return function (m, v, x) {
    x === void 0 && (x = c);
    var w = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, E0, c),
        modifiersData: {},
        elements: { reference: m, popper: v },
        attributes: {},
        styles: {},
      },
      k = [],
      E = !1,
      j = {
        state: w,
        setOptions: function (q) {
          var K = typeof q == "function" ? q(w.options) : q;
          b(),
            (w.options = Object.assign({}, c, w.options, K)),
            (w.scrollParents = {
              reference: ea(m) ? lu(m) : m.contextElement ? lu(m.contextElement) : [],
              popper: lu(v),
            });
          var X = f3(p3([].concat(l, w.options.modifiers)));
          return (
            (w.orderedModifiers = X.filter(function (V) {
              return V.enabled;
            })),
            z(),
            j.update()
          );
        },
        forceUpdate: function () {
          if (!E) {
            var q = w.elements,
              K = q.reference,
              X = q.popper;
            if (R0(K, X)) {
              (w.rects = {
                reference: u3(K, Cu(X), w.options.strategy === "fixed"),
                popper: Dh(X),
              }),
                (w.reset = !1),
                (w.placement = w.options.placement),
                w.orderedModifiers.forEach(function (he) {
                  return (w.modifiersData[he.name] = Object.assign({}, he.data));
                });
              for (var V = 0; V < w.orderedModifiers.length; V++) {
                if (w.reset === !0) {
                  (w.reset = !1), (V = -1);
                  continue;
                }
                var D = w.orderedModifiers[V],
                  A = D.fn,
                  Q = D.options,
                  ae = Q === void 0 ? {} : Q,
                  xe = D.name;
                typeof A == "function" &&
                  (w = A({ state: w, options: ae, name: xe, instance: j }) || w);
              }
            }
          }
        },
        update: d3(function () {
          return new Promise(function (O) {
            j.forceUpdate(), O(w);
          });
        }),
        destroy: function () {
          b(), (E = !0);
        },
      };
    if (!R0(m, v)) return j;
    j.setOptions(x).then(function (O) {
      !E && x.onFirstUpdate && x.onFirstUpdate(O);
    });
    function z() {
      w.orderedModifiers.forEach(function (O) {
        var q = O.name,
          K = O.options,
          X = K === void 0 ? {} : K,
          V = O.effect;
        if (typeof V == "function") {
          var D = V({ state: w, name: q, instance: j, options: X }),
            A = function () {};
          k.push(D || A);
        }
      });
    }
    function b() {
      k.forEach(function (O) {
        return O();
      }),
        (k = []);
    }
    return j;
  };
}
var m3 = [D5, r3, j5, $5, e3, X5, i3, M5, Q5],
  v3 = h3({ defaultModifiers: m3 });
function g3(r) {
  return typeof r == "function" ? r() : r;
}
const y3 = N.forwardRef(function (n, i) {
  const { children: l, container: s, disablePortal: c = !1 } = n,
    [f, m] = N.useState(null),
    v = $n(N.isValidElement(l) ? l.ref : null, i);
  if (
    (Qi(() => {
      c || m(g3(s) || document.body);
    }, [s, c]),
    Qi(() => {
      if (f && !c)
        return (
          kf(i, f),
          () => {
            kf(i, null);
          }
        );
    }, [i, f, c]),
    c)
  ) {
    if (N.isValidElement(l)) {
      const x = { ref: v };
      return N.cloneElement(l, x);
    }
    return M.jsx(N.Fragment, { children: l });
  }
  return M.jsx(N.Fragment, { children: f && _g.createPortal(l, f) });
});
function x3(r) {
  return Er("MuiPopper", r);
}
Ar("MuiPopper", ["root"]);
const b3 = [
    "anchorEl",
    "children",
    "component",
    "direction",
    "disablePortal",
    "modifiers",
    "open",
    "placement",
    "popperOptions",
    "popperRef",
    "slotProps",
    "slots",
    "TransitionProps",
    "ownerState",
  ],
  w3 = [
    "anchorEl",
    "children",
    "container",
    "direction",
    "disablePortal",
    "keepMounted",
    "modifiers",
    "open",
    "placement",
    "popperOptions",
    "popperRef",
    "style",
    "transition",
    "slotProps",
    "slots",
  ];
function k3(r, n) {
  if (n === "ltr") return r;
  switch (r) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return r;
  }
}
function ch(r) {
  return typeof r == "function" ? r() : r;
}
function S3(r) {
  return r.nodeType !== void 0;
}
const C3 = () => Dr({ root: ["root"] }, i5(x3)),
  $3 = {},
  E3 = N.forwardRef(function (n, i) {
    var l;
    const {
        anchorEl: s,
        children: c,
        component: f,
        direction: m,
        disablePortal: v,
        modifiers: x,
        open: w,
        placement: k,
        popperOptions: E,
        popperRef: j,
        slotProps: z = {},
        slots: b = {},
        TransitionProps: O,
      } = n,
      q = tt(n, b3),
      K = N.useRef(null),
      X = $n(K, i),
      V = N.useRef(null),
      D = $n(V, j),
      A = N.useRef(D);
    Qi(() => {
      A.current = D;
    }, [D]),
      N.useImperativeHandle(j, () => V.current, []);
    const Q = k3(k, m),
      [ae, xe] = N.useState(Q),
      [he, Te] = N.useState(ch(s));
    N.useEffect(() => {
      V.current && V.current.forceUpdate();
    }),
      N.useEffect(() => {
        s && Te(ch(s));
      }, [s]),
      Qi(() => {
        if (!he || !w) return;
        const ce = (de) => {
          xe(de.placement);
        };
        let se = [
          { name: "preventOverflow", options: { altBoundary: v } },
          { name: "flip", options: { altBoundary: v } },
          {
            name: "onUpdate",
            enabled: !0,
            phase: "afterWrite",
            fn: ({ state: de }) => {
              ce(de);
            },
          },
        ];
        x != null && (se = se.concat(x)), E && E.modifiers != null && (se = se.concat(E.modifiers));
        const J = v3(he, K.current, Y({ placement: Q }, E, { modifiers: se }));
        return (
          A.current(J),
          () => {
            J.destroy(), A.current(null);
          }
        );
      }, [he, v, x, w, E, Q]);
    const ue = { placement: ae };
    O !== null && (ue.TransitionProps = O);
    const fe = C3(),
      ye = (l = f ?? b.root) != null ? l : "div",
      me = c5({
        elementType: ye,
        externalSlotProps: z.root,
        externalForwardedProps: q,
        additionalProps: { role: "tooltip", ref: X },
        ownerState: n,
        className: fe.root,
      });
    return M.jsx(ye, Y({}, me, { children: typeof c == "function" ? c(ue) : c }));
  }),
  R3 = N.forwardRef(function (n, i) {
    const {
        anchorEl: l,
        children: s,
        container: c,
        direction: f = "ltr",
        disablePortal: m = !1,
        keepMounted: v = !1,
        modifiers: x,
        open: w,
        placement: k = "bottom",
        popperOptions: E = $3,
        popperRef: j,
        style: z,
        transition: b = !1,
        slotProps: O = {},
        slots: q = {},
      } = n,
      K = tt(n, w3),
      [X, V] = N.useState(!0),
      D = () => {
        V(!1);
      },
      A = () => {
        V(!0);
      };
    if (!v && !w && (!b || X)) return null;
    let Q;
    if (c) Q = c;
    else if (l) {
      const he = ch(l);
      Q = he && S3(he) ? wf(he).body : wf(null).body;
    }
    const ae = !w && v && (!b || X) ? "none" : void 0,
      xe = b ? { in: w, onEnter: D, onExited: A } : void 0;
    return M.jsx(y3, {
      disablePortal: m,
      container: Q,
      children: M.jsx(
        E3,
        Y(
          {
            anchorEl: l,
            direction: f,
            disablePortal: m,
            modifiers: x,
            ref: i,
            open: b ? !X : w,
            placement: k,
            popperOptions: E,
            popperRef: j,
            slotProps: O,
            slots: q,
          },
          K,
          {
            style: Y({ position: "fixed", top: 0, left: 0, display: ae }, z),
            TransitionProps: xe,
            children: s,
          }
        )
      ),
    });
  }),
  _0 = N.createContext();
function _3(r) {
  return Er("MuiGrid", r);
}
const P3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  T3 = ["column-reverse", "column", "row-reverse", "row"],
  O3 = ["nowrap", "wrap-reverse", "wrap"],
  Zs = ["auto", !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  mu = Ar("MuiGrid", [
    "root",
    "container",
    "item",
    "zeroMinWidth",
    ...P3.map((r) => `spacing-xs-${r}`),
    ...T3.map((r) => `direction-xs-${r}`),
    ...O3.map((r) => `wrap-xs-${r}`),
    ...Zs.map((r) => `grid-xs-${r}`),
    ...Zs.map((r) => `grid-sm-${r}`),
    ...Zs.map((r) => `grid-md-${r}`),
    ...Zs.map((r) => `grid-lg-${r}`),
    ...Zs.map((r) => `grid-xl-${r}`),
  ]),
  M3 = [
    "className",
    "columns",
    "columnSpacing",
    "component",
    "container",
    "direction",
    "item",
    "rowSpacing",
    "spacing",
    "wrap",
    "zeroMinWidth",
  ];
function ul(r) {
  const n = parseFloat(r);
  return `${n}${String(r).replace(String(n), "") || "px"}`;
}
function z3({ theme: r, ownerState: n }) {
  let i;
  return r.breakpoints.keys.reduce((l, s) => {
    let c = {};
    if ((n[s] && (i = n[s]), !i)) return l;
    if (i === !0) c = { flexBasis: 0, flexGrow: 1, maxWidth: "100%" };
    else if (i === "auto")
      c = { flexBasis: "auto", flexGrow: 0, flexShrink: 0, maxWidth: "none", width: "auto" };
    else {
      const f = Lf({ values: n.columns, breakpoints: r.breakpoints.values }),
        m = typeof f == "object" ? f[s] : f;
      if (m == null) return l;
      const v = `${Math.round((i / m) * 1e8) / 1e6}%`;
      let x = {};
      if (n.container && n.item && n.columnSpacing !== 0) {
        const w = r.spacing(n.columnSpacing);
        if (w !== "0px") {
          const k = `calc(${v} + ${ul(w)})`;
          x = { flexBasis: k, maxWidth: k };
        }
      }
      c = Y({ flexBasis: v, flexGrow: 0, maxWidth: v }, x);
    }
    return r.breakpoints.values[s] === 0 ? Object.assign(l, c) : (l[r.breakpoints.up(s)] = c), l;
  }, {});
}
function N3({ theme: r, ownerState: n }) {
  const i = Lf({ values: n.direction, breakpoints: r.breakpoints.values });
  return tn({ theme: r }, i, (l) => {
    const s = { flexDirection: l };
    return l.indexOf("column") === 0 && (s[`& > .${mu.item}`] = { maxWidth: "none" }), s;
  });
}
function Fg({ breakpoints: r, values: n }) {
  let i = "";
  Object.keys(n).forEach((s) => {
    i === "" && n[s] !== 0 && (i = s);
  });
  const l = Object.keys(r).sort((s, c) => r[s] - r[c]);
  return l.slice(0, l.indexOf(i));
}
function L3({ theme: r, ownerState: n }) {
  const { container: i, rowSpacing: l } = n;
  let s = {};
  if (i && l !== 0) {
    const c = Lf({ values: l, breakpoints: r.breakpoints.values });
    let f;
    typeof c == "object" && (f = Fg({ breakpoints: r.breakpoints.values, values: c })),
      (s = tn({ theme: r }, c, (m, v) => {
        var x;
        const w = r.spacing(m);
        return w !== "0px"
          ? { marginTop: `-${ul(w)}`, [`& > .${mu.item}`]: { paddingTop: ul(w) } }
          : (x = f) != null && x.includes(v)
          ? {}
          : { marginTop: 0, [`& > .${mu.item}`]: { paddingTop: 0 } };
      }));
  }
  return s;
}
function j3({ theme: r, ownerState: n }) {
  const { container: i, columnSpacing: l } = n;
  let s = {};
  if (i && l !== 0) {
    const c = Lf({ values: l, breakpoints: r.breakpoints.values });
    let f;
    typeof c == "object" && (f = Fg({ breakpoints: r.breakpoints.values, values: c })),
      (s = tn({ theme: r }, c, (m, v) => {
        var x;
        const w = r.spacing(m);
        return w !== "0px"
          ? {
              width: `calc(100% + ${ul(w)})`,
              marginLeft: `-${ul(w)}`,
              [`& > .${mu.item}`]: { paddingLeft: ul(w) },
            }
          : (x = f) != null && x.includes(v)
          ? {}
          : { width: "100%", marginLeft: 0, [`& > .${mu.item}`]: { paddingLeft: 0 } };
      }));
  }
  return s;
}
function I3(r, n, i = {}) {
  if (!r || r <= 0) return [];
  if ((typeof r == "string" && !Number.isNaN(Number(r))) || typeof r == "number")
    return [i[`spacing-xs-${String(r)}`]];
  const l = [];
  return (
    n.forEach((s) => {
      const c = r[s];
      Number(c) > 0 && l.push(i[`spacing-${s}-${String(c)}`]);
    }),
    l
  );
}
const D3 = St("div", {
  name: "MuiGrid",
  slot: "Root",
  overridesResolver: (r, n) => {
    const { ownerState: i } = r,
      {
        container: l,
        direction: s,
        item: c,
        spacing: f,
        wrap: m,
        zeroMinWidth: v,
        breakpoints: x,
      } = i;
    let w = [];
    l && (w = I3(f, x, n));
    const k = [];
    return (
      x.forEach((E) => {
        const j = i[E];
        j && k.push(n[`grid-${E}-${String(j)}`]);
      }),
      [
        n.root,
        l && n.container,
        c && n.item,
        v && n.zeroMinWidth,
        ...w,
        s !== "row" && n[`direction-xs-${String(s)}`],
        m !== "wrap" && n[`wrap-xs-${String(m)}`],
        ...k,
      ]
    );
  },
})(
  ({ ownerState: r }) =>
    Y(
      { boxSizing: "border-box" },
      r.container && { display: "flex", flexWrap: "wrap", width: "100%" },
      r.item && { margin: 0 },
      r.zeroMinWidth && { minWidth: 0 },
      r.wrap !== "wrap" && { flexWrap: r.wrap }
    ),
  N3,
  L3,
  j3,
  z3
);
function A3(r, n) {
  if (!r || r <= 0) return [];
  if ((typeof r == "string" && !Number.isNaN(Number(r))) || typeof r == "number")
    return [`spacing-xs-${String(r)}`];
  const i = [];
  return (
    n.forEach((l) => {
      const s = r[l];
      if (Number(s) > 0) {
        const c = `spacing-${l}-${String(s)}`;
        i.push(c);
      }
    }),
    i
  );
}
const F3 = (r) => {
    const {
      classes: n,
      container: i,
      direction: l,
      item: s,
      spacing: c,
      wrap: f,
      zeroMinWidth: m,
      breakpoints: v,
    } = r;
    let x = [];
    i && (x = A3(c, v));
    const w = [];
    v.forEach((E) => {
      const j = r[E];
      j && w.push(`grid-${E}-${String(j)}`);
    });
    const k = {
      root: [
        "root",
        i && "container",
        s && "item",
        m && "zeroMinWidth",
        ...x,
        l !== "row" && `direction-xs-${String(l)}`,
        f !== "wrap" && `wrap-xs-${String(f)}`,
        ...w,
      ],
    };
    return Dr(k, _3, n);
  },
  Xt = N.forwardRef(function (n, i) {
    const l = fr({ props: n, name: "MuiGrid" }),
      { breakpoints: s } = qf(),
      c = Th(l),
      {
        className: f,
        columns: m,
        columnSpacing: v,
        component: x = "div",
        container: w = !1,
        direction: k = "row",
        item: E = !1,
        rowSpacing: j,
        spacing: z = 0,
        wrap: b = "wrap",
        zeroMinWidth: O = !1,
      } = c,
      q = tt(c, M3),
      K = j || z,
      X = v || z,
      V = N.useContext(_0),
      D = w ? m || 12 : V,
      A = {},
      Q = Y({}, q);
    s.keys.forEach((he) => {
      q[he] != null && ((A[he] = q[he]), delete Q[he]);
    });
    const ae = Y(
        {},
        c,
        {
          columns: D,
          container: w,
          direction: k,
          item: E,
          rowSpacing: K,
          columnSpacing: X,
          wrap: b,
          zeroMinWidth: O,
          spacing: z,
        },
        A,
        { breakpoints: s.keys }
      ),
      xe = F3(ae);
    return M.jsx(_0.Provider, {
      value: D,
      children: M.jsx(D3, Y({ ownerState: ae, className: kt(xe.root, f), as: x, ref: i }, Q)),
    });
  });
function W3(r) {
  return Er("MuiPaper", r);
}
Ar("MuiPaper", [
  "root",
  "rounded",
  "outlined",
  "elevation",
  "elevation0",
  "elevation1",
  "elevation2",
  "elevation3",
  "elevation4",
  "elevation5",
  "elevation6",
  "elevation7",
  "elevation8",
  "elevation9",
  "elevation10",
  "elevation11",
  "elevation12",
  "elevation13",
  "elevation14",
  "elevation15",
  "elevation16",
  "elevation17",
  "elevation18",
  "elevation19",
  "elevation20",
  "elevation21",
  "elevation22",
  "elevation23",
  "elevation24",
]);
const B3 = ["className", "component", "elevation", "square", "variant"],
  U3 = (r) => {
    const { square: n, elevation: i, variant: l, classes: s } = r,
      c = { root: ["root", l, !n && "rounded", l === "elevation" && `elevation${i}`] };
    return Dr(c, W3, s);
  },
  V3 = St("div", {
    name: "MuiPaper",
    slot: "Root",
    overridesResolver: (r, n) => {
      const { ownerState: i } = r;
      return [
        n.root,
        n[i.variant],
        !i.square && n.rounded,
        i.variant === "elevation" && n[`elevation${i.elevation}`],
      ];
    },
  })(({ theme: r, ownerState: n }) => {
    var i;
    return Y(
      {
        backgroundColor: (r.vars || r).palette.background.paper,
        color: (r.vars || r).palette.text.primary,
        transition: r.transitions.create("box-shadow"),
      },
      !n.square && { borderRadius: r.shape.borderRadius },
      n.variant === "outlined" && { border: `1px solid ${(r.vars || r).palette.divider}` },
      n.variant === "elevation" &&
        Y(
          { boxShadow: (r.vars || r).shadows[n.elevation] },
          !r.vars &&
            r.palette.mode === "dark" && {
              backgroundImage: `linear-gradient(${li("#fff", Nv(n.elevation))}, ${li(
                "#fff",
                Nv(n.elevation)
              )})`,
            },
          r.vars && { backgroundImage: (i = r.vars.overlays) == null ? void 0 : i[n.elevation] }
        )
    );
  }),
  H3 = N.forwardRef(function (n, i) {
    const l = fr({ props: n, name: "MuiPaper" }),
      {
        className: s,
        component: c = "div",
        elevation: f = 1,
        square: m = !1,
        variant: v = "elevation",
      } = l,
      x = tt(l, B3),
      w = Y({}, l, { component: c, elevation: f, square: m, variant: v }),
      k = U3(w);
    return M.jsx(V3, Y({ as: c, ownerState: w, className: kt(k.root, s), ref: i }, x));
  });
function G3(r) {
  return Er("MuiCard", r);
}
Ar("MuiCard", ["root"]);
const q3 = ["className", "raised"],
  K3 = (r) => {
    const { classes: n } = r;
    return Dr({ root: ["root"] }, G3, n);
  },
  X3 = St(H3, { name: "MuiCard", slot: "Root", overridesResolver: (r, n) => n.root })(() => ({
    overflow: "hidden",
  })),
  Y3 = N.forwardRef(function (n, i) {
    const l = fr({ props: n, name: "MuiCard" }),
      { className: s, raised: c = !1 } = l,
      f = tt(l, q3),
      m = Y({}, l, { raised: c }),
      v = K3(m);
    return M.jsx(
      X3,
      Y({ className: kt(v.root, s), elevation: c ? 8 : void 0, ref: i, ownerState: m }, f)
    );
  }),
  Q3 = Mh(),
  Z3 = Hx({
    themeId: Zi,
    defaultTheme: Q3,
    defaultClassName: "MuiBox-root",
    generateClassName: wh.generate,
  }),
  J3 = St(Z3)(({ theme: r, ownerState: n }) => {
    const { palette: i, functions: l, borders: s, boxShadows: c } = r,
      {
        variant: f,
        bgColor: m,
        color: v,
        opacity: x,
        borderRadius: w,
        shadow: k,
        coloredShadow: E,
      } = n,
      { gradients: j, grey: z, white: b } = i,
      { linearGradient: O } = l,
      { borderRadius: q } = s,
      { colored: K } = c,
      X = {
        "grey-100": z[100],
        "grey-200": z[200],
        "grey-300": z[300],
        "grey-400": z[400],
        "grey-500": z[500],
        "grey-600": z[600],
        "grey-700": z[700],
        "grey-800": z[800],
        "grey-900": z[900],
      },
      V = ["primary", "secondary", "info", "success", "warning", "error", "dark", "light"],
      D = [
        "transparent",
        "white",
        "black",
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "light",
        "dark",
        "text",
        "grey-100",
        "grey-200",
        "grey-300",
        "grey-400",
        "grey-500",
        "grey-600",
        "grey-700",
        "grey-800",
        "grey-900",
      ],
      A = ["xs", "sm", "md", "lg", "xl", "xxl", "section"],
      Q = ["xs", "sm", "md", "lg", "xl", "xxl", "inset"];
    let ae = m;
    f === "gradient"
      ? (ae = V.find((ue) => ue === m) ? O(j[m].main, j[m].state) : b.main)
      : D.find((ue) => ue === m)
      ? (ae = i[m] ? i[m].main : X[m])
      : (ae = m);
    let xe = v;
    D.find((ue) => ue === v) && (xe = i[v] ? i[v].main : X[v]);
    let he = w;
    A.find((ue) => ue === w) && (he = q[w]);
    let Te = "none";
    return (
      Q.find((ue) => ue === k) ? (Te = c[k]) : E && (Te = K[E] ? K[E] : "none"),
      { opacity: x, background: ae, color: xe, borderRadius: he, boxShadow: Te }
    );
  }),
  ct = N.forwardRef(
    (
      {
        variant: r,
        bgColor: n,
        color: i,
        opacity: l,
        borderRadius: s,
        shadow: c,
        coloredShadow: f,
        ...m
      },
      v
    ) =>
      M.jsx(J3, {
        ...m,
        ref: v,
        ownerState: {
          variant: r,
          bgColor: n,
          color: i,
          opacity: l,
          borderRadius: s,
          shadow: c,
          coloredShadow: f,
        },
      })
  );
ct.defaultProps = {
  variant: "contained",
  bgColor: "transparent",
  color: "dark",
  opacity: 1,
  borderRadius: "none",
  shadow: "none",
  coloredShadow: "none",
};
ct.propTypes = {
  variant: Ee.oneOf(["contained", "gradient"]),
  bgColor: Ee.string,
  color: Ee.string,
  opacity: Ee.number,
  borderRadius: Ee.string,
  shadow: Ee.string,
  coloredShadow: Ee.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
    "none",
  ]),
};
function eC(r) {
  return Er("MuiTypography", r);
}
Ar("MuiTypography", [
  "root",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "subtitle1",
  "subtitle2",
  "body1",
  "body2",
  "inherit",
  "button",
  "caption",
  "overline",
  "alignLeft",
  "alignRight",
  "alignCenter",
  "alignJustify",
  "noWrap",
  "gutterBottom",
  "paragraph",
]);
const tC = [
    "align",
    "className",
    "component",
    "gutterBottom",
    "noWrap",
    "paragraph",
    "variant",
    "variantMapping",
  ],
  rC = (r) => {
    const { align: n, gutterBottom: i, noWrap: l, paragraph: s, variant: c, classes: f } = r,
      m = {
        root: [
          "root",
          c,
          r.align !== "inherit" && `align${mt(n)}`,
          i && "gutterBottom",
          l && "noWrap",
          s && "paragraph",
        ],
      };
    return Dr(m, eC, f);
  },
  nC = St("span", {
    name: "MuiTypography",
    slot: "Root",
    overridesResolver: (r, n) => {
      const { ownerState: i } = r;
      return [
        n.root,
        i.variant && n[i.variant],
        i.align !== "inherit" && n[`align${mt(i.align)}`],
        i.noWrap && n.noWrap,
        i.gutterBottom && n.gutterBottom,
        i.paragraph && n.paragraph,
      ];
    },
  })(({ theme: r, ownerState: n }) =>
    Y(
      { margin: 0 },
      n.variant && r.typography[n.variant],
      n.align !== "inherit" && { textAlign: n.align },
      n.noWrap && { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
      n.gutterBottom && { marginBottom: "0.35em" },
      n.paragraph && { marginBottom: 16 }
    )
  ),
  P0 = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle1: "h6",
    subtitle2: "h6",
    body1: "p",
    body2: "p",
    inherit: "p",
  },
  oC = {
    primary: "primary.main",
    textPrimary: "text.primary",
    secondary: "secondary.main",
    textSecondary: "text.secondary",
    error: "error.main",
  },
  iC = (r) => oC[r] || r,
  Wg = N.forwardRef(function (n, i) {
    const l = fr({ props: n, name: "MuiTypography" }),
      s = iC(l.color),
      c = Th(Y({}, l, { color: s })),
      {
        align: f = "inherit",
        className: m,
        component: v,
        gutterBottom: x = !1,
        noWrap: w = !1,
        paragraph: k = !1,
        variant: E = "body1",
        variantMapping: j = P0,
      } = c,
      z = tt(c, tC),
      b = Y({}, c, {
        align: f,
        color: s,
        className: m,
        component: v,
        gutterBottom: x,
        noWrap: w,
        paragraph: k,
        variant: E,
        variantMapping: j,
      }),
      O = v || (k ? "p" : j[E] || P0[E]) || "span",
      q = rC(b);
    return M.jsx(nC, Y({ as: O, ref: i, ownerState: b, className: kt(q.root, m) }, z));
  }),
  aC = St(Wg)(({ theme: r, ownerState: n }) => {
    const { palette: i, typography: l, functions: s } = r,
      {
        color: c,
        textTransform: f,
        verticalAlign: m,
        fontWeight: v,
        opacity: x,
        textGradient: w,
      } = n,
      { gradients: k, transparent: E } = i,
      { fontWeightLight: j, fontWeightRegular: z, fontWeightMedium: b, fontWeightBold: O } = l,
      { linearGradient: q } = s,
      K = { light: j, regular: z, medium: b, bold: O },
      X = () => ({
        backgroundImage:
          c !== "inherit" && c !== "text" && c !== "white" && k[c]
            ? q(k[c].main, k[c].state)
            : q(k.dark.main, k.dark.state),
        display: "inline-block",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: E.main,
        position: "relative",
        zIndex: 1,
      }),
      V = c === "inherit" || !i[c] ? "inherit" : i[c].main;
    return {
      opacity: x,
      textTransform: f,
      verticalAlign: m,
      textDecoration: "none",
      color: V,
      letterSpacing: "-0.125px",
      fontWeight: K[v] && K[v],
      ...(w && X()),
    };
  }),
  it = N.forwardRef(
    (
      {
        color: r,
        fontWeight: n,
        textTransform: i,
        verticalAlign: l,
        textGradient: s,
        opacity: c,
        children: f,
        ...m
      },
      v
    ) =>
      M.jsx(aC, {
        ...m,
        ref: v,
        ownerState: {
          color: r,
          textTransform: i,
          verticalAlign: l,
          fontWeight: n,
          opacity: c,
          textGradient: s,
        },
        children: f,
      })
  );
it.defaultProps = {
  color: "dark",
  fontWeight: !1,
  textTransform: "none",
  verticalAlign: "unset",
  textGradient: !1,
  opacity: 1,
};
it.propTypes = {
  color: Ee.oneOf([
    "inherit",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
    "text",
    "white",
  ]),
  fontWeight: Ee.oneOf([!1, "light", "regular", "medium", "bold"]),
  textTransform: Ee.oneOf(["none", "capitalize", "uppercase", "lowercase"]),
  verticalAlign: Ee.oneOf([
    "unset",
    "baseline",
    "sub",
    "super",
    "text-top",
    "text-bottom",
    "middle",
    "top",
    "bottom",
  ]),
  textGradient: Ee.bool,
  children: Ee.node.isRequired,
  opacity: Ee.number,
};
function lC(r) {
  return Er("MuiIcon", r);
}
Ar("MuiIcon", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "colorAction",
  "colorError",
  "colorDisabled",
  "fontSizeInherit",
  "fontSizeSmall",
  "fontSizeMedium",
  "fontSizeLarge",
]);
const sC = ["baseClassName", "className", "color", "component", "fontSize"],
  uC = (r) => {
    const { color: n, fontSize: i, classes: l } = r,
      s = { root: ["root", n !== "inherit" && `color${mt(n)}`, `fontSize${mt(i)}`] };
    return Dr(s, lC, l);
  },
  cC = St("span", {
    name: "MuiIcon",
    slot: "Root",
    overridesResolver: (r, n) => {
      const { ownerState: i } = r;
      return [
        n.root,
        i.color !== "inherit" && n[`color${mt(i.color)}`],
        n[`fontSize${mt(i.fontSize)}`],
      ];
    },
  })(({ theme: r, ownerState: n }) => ({
    userSelect: "none",
    width: "1em",
    height: "1em",
    overflow: "hidden",
    display: "inline-block",
    textAlign: "center",
    flexShrink: 0,
    fontSize: {
      inherit: "inherit",
      small: r.typography.pxToRem(20),
      medium: r.typography.pxToRem(24),
      large: r.typography.pxToRem(36),
    }[n.fontSize],
    color: {
      primary: (r.vars || r).palette.primary.main,
      secondary: (r.vars || r).palette.secondary.main,
      info: (r.vars || r).palette.info.main,
      success: (r.vars || r).palette.success.main,
      warning: (r.vars || r).palette.warning.main,
      action: (r.vars || r).palette.action.active,
      error: (r.vars || r).palette.error.main,
      disabled: (r.vars || r).palette.action.disabled,
      inherit: void 0,
    }[n.color],
  })),
  Lr = N.forwardRef(function (n, i) {
    const l = fr({ props: n, name: "MuiIcon" }),
      {
        baseClassName: s = "material-icons",
        className: c,
        color: f = "inherit",
        component: m = "span",
        fontSize: v = "medium",
      } = l,
      x = tt(l, sC),
      w = Y({}, l, { baseClassName: s, color: f, component: m, fontSize: v }),
      k = uC(w);
    return M.jsx(
      cC,
      Y(
        {
          as: m,
          className: kt(s, "notranslate", k.root, c),
          ownerState: w,
          "aria-hidden": !0,
          ref: i,
        },
        x
      )
    );
  });
Lr.muiName = "Icon";
const fC = ["components", "componentsProps", "slots", "slotProps"],
  dC = St(R3, { name: "MuiPopper", slot: "Root", overridesResolver: (r, n) => n.root })({}),
  T0 = N.forwardRef(function (n, i) {
    var l;
    const s = Uf(),
      c = fr({ props: n, name: "MuiPopper" }),
      { components: f, componentsProps: m, slots: v, slotProps: x } = c,
      w = tt(c, fC),
      k = (l = v?.root) != null ? l : f?.Root;
    return M.jsx(
      dC,
      Y({ direction: s?.direction, slots: { root: k }, slotProps: x ?? m }, w, { ref: i })
    );
  }),
  pC = [
    "addEndListener",
    "appear",
    "children",
    "easing",
    "in",
    "onEnter",
    "onEntered",
    "onEntering",
    "onExit",
    "onExited",
    "onExiting",
    "style",
    "timeout",
    "TransitionComponent",
  ];
function fh(r) {
  return `scale(${r}, ${r ** 2})`;
}
const hC = {
    entering: { opacity: 1, transform: fh(1) },
    entered: { opacity: 1, transform: "none" },
  },
  qp =
    typeof navigator < "u" &&
    /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
    /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
  dh = N.forwardRef(function (n, i) {
    const {
        addEndListener: l,
        appear: s = !0,
        children: c,
        easing: f,
        in: m,
        onEnter: v,
        onEntered: x,
        onEntering: w,
        onExit: k,
        onExited: E,
        onExiting: j,
        style: z,
        timeout: b = "auto",
        TransitionComponent: O = Rn,
      } = n,
      q = tt(n, pC),
      K = N.useRef(),
      X = N.useRef(),
      V = qf(),
      D = N.useRef(null),
      A = $n(D, c.ref, i),
      Q = (me) => (ce) => {
        if (me) {
          const se = D.current;
          ce === void 0 ? me(se) : me(se, ce);
        }
      },
      ae = Q(w),
      xe = Q((me, ce) => {
        Pg(me);
        const {
          duration: se,
          delay: J,
          easing: de,
        } = ml({ style: z, timeout: b, easing: f }, { mode: "enter" });
        let R;
        b === "auto"
          ? ((R = V.transitions.getAutoHeightDuration(me.clientHeight)), (X.current = R))
          : (R = se),
          (me.style.transition = [
            V.transitions.create("opacity", { duration: R, delay: J }),
            V.transitions.create("transform", {
              duration: qp ? R : R * 0.666,
              delay: J,
              easing: de,
            }),
          ].join(",")),
          v && v(me, ce);
      }),
      he = Q(x),
      Te = Q(j),
      ue = Q((me) => {
        const {
          duration: ce,
          delay: se,
          easing: J,
        } = ml({ style: z, timeout: b, easing: f }, { mode: "exit" });
        let de;
        b === "auto"
          ? ((de = V.transitions.getAutoHeightDuration(me.clientHeight)), (X.current = de))
          : (de = ce),
          (me.style.transition = [
            V.transitions.create("opacity", { duration: de, delay: se }),
            V.transitions.create("transform", {
              duration: qp ? de : de * 0.666,
              delay: qp ? se : se || de * 0.333,
              easing: J,
            }),
          ].join(",")),
          (me.style.opacity = 0),
          (me.style.transform = fh(0.75)),
          k && k(me);
      }),
      fe = Q(E),
      ye = (me) => {
        b === "auto" && (K.current = setTimeout(me, X.current || 0)), l && l(D.current, me);
      };
    return (
      N.useEffect(
        () => () => {
          clearTimeout(K.current);
        },
        []
      ),
      M.jsx(
        O,
        Y(
          {
            appear: s,
            in: m,
            nodeRef: D,
            onEnter: xe,
            onEntered: he,
            onEntering: ae,
            onExit: ue,
            onExited: fe,
            onExiting: Te,
            addEndListener: ye,
            timeout: b === "auto" ? null : b,
          },
          q,
          {
            children: (me, ce) =>
              N.cloneElement(
                c,
                Y(
                  {
                    style: Y(
                      {
                        opacity: 0,
                        transform: fh(0.75),
                        visibility: me === "exited" && !m ? "hidden" : void 0,
                      },
                      hC[me],
                      z,
                      c.props.style
                    ),
                    ref: A,
                  },
                  ce
                )
              ),
          }
        )
      )
    );
  });
dh.muiSupportAuto = !0;
function mC(r) {
  return Er("MuiDivider", r);
}
Ar("MuiDivider", [
  "root",
  "absolute",
  "fullWidth",
  "inset",
  "middle",
  "flexItem",
  "light",
  "vertical",
  "withChildren",
  "withChildrenVertical",
  "textAlignRight",
  "textAlignLeft",
  "wrapper",
  "wrapperVertical",
]);
const vC = [
    "absolute",
    "children",
    "className",
    "component",
    "flexItem",
    "light",
    "orientation",
    "role",
    "textAlign",
    "variant",
  ],
  gC = (r) => {
    const {
      absolute: n,
      children: i,
      classes: l,
      flexItem: s,
      light: c,
      orientation: f,
      textAlign: m,
      variant: v,
    } = r;
    return Dr(
      {
        root: [
          "root",
          n && "absolute",
          v,
          c && "light",
          f === "vertical" && "vertical",
          s && "flexItem",
          i && "withChildren",
          i && f === "vertical" && "withChildrenVertical",
          m === "right" && f !== "vertical" && "textAlignRight",
          m === "left" && f !== "vertical" && "textAlignLeft",
        ],
        wrapper: ["wrapper", f === "vertical" && "wrapperVertical"],
      },
      mC,
      l
    );
  },
  yC = St("div", {
    name: "MuiDivider",
    slot: "Root",
    overridesResolver: (r, n) => {
      const { ownerState: i } = r;
      return [
        n.root,
        i.absolute && n.absolute,
        n[i.variant],
        i.light && n.light,
        i.orientation === "vertical" && n.vertical,
        i.flexItem && n.flexItem,
        i.children && n.withChildren,
        i.children && i.orientation === "vertical" && n.withChildrenVertical,
        i.textAlign === "right" && i.orientation !== "vertical" && n.textAlignRight,
        i.textAlign === "left" && i.orientation !== "vertical" && n.textAlignLeft,
      ];
    },
  })(
    ({ theme: r, ownerState: n }) =>
      Y(
        {
          margin: 0,
          flexShrink: 0,
          borderWidth: 0,
          borderStyle: "solid",
          borderColor: (r.vars || r).palette.divider,
          borderBottomWidth: "thin",
        },
        n.absolute && { position: "absolute", bottom: 0, left: 0, width: "100%" },
        n.light && {
          borderColor: r.vars
            ? `rgba(${r.vars.palette.dividerChannel} / 0.08)`
            : li(r.palette.divider, 0.08),
        },
        n.variant === "inset" && { marginLeft: 72 },
        n.variant === "middle" &&
          n.orientation === "horizontal" && { marginLeft: r.spacing(2), marginRight: r.spacing(2) },
        n.variant === "middle" &&
          n.orientation === "vertical" && { marginTop: r.spacing(1), marginBottom: r.spacing(1) },
        n.orientation === "vertical" && {
          height: "100%",
          borderBottomWidth: 0,
          borderRightWidth: "thin",
        },
        n.flexItem && { alignSelf: "stretch", height: "auto" }
      ),
    ({ theme: r, ownerState: n }) =>
      Y(
        {},
        n.children && {
          display: "flex",
          whiteSpace: "nowrap",
          textAlign: "center",
          border: 0,
          "&::before, &::after": {
            position: "relative",
            width: "100%",
            borderTop: `thin solid ${(r.vars || r).palette.divider}`,
            top: "50%",
            content: '""',
            transform: "translateY(50%)",
          },
        }
      ),
    ({ theme: r, ownerState: n }) =>
      Y(
        {},
        n.children &&
          n.orientation === "vertical" && {
            flexDirection: "column",
            "&::before, &::after": {
              height: "100%",
              top: "0%",
              left: "50%",
              borderTop: 0,
              borderLeft: `thin solid ${(r.vars || r).palette.divider}`,
              transform: "translateX(0%)",
            },
          }
      ),
    ({ ownerState: r }) =>
      Y(
        {},
        r.textAlign === "right" &&
          r.orientation !== "vertical" && {
            "&::before": { width: "90%" },
            "&::after": { width: "10%" },
          },
        r.textAlign === "left" &&
          r.orientation !== "vertical" && {
            "&::before": { width: "10%" },
            "&::after": { width: "90%" },
          }
      )
  ),
  xC = St("span", {
    name: "MuiDivider",
    slot: "Wrapper",
    overridesResolver: (r, n) => {
      const { ownerState: i } = r;
      return [n.wrapper, i.orientation === "vertical" && n.wrapperVertical];
    },
  })(({ theme: r, ownerState: n }) =>
    Y(
      {
        display: "inline-block",
        paddingLeft: `calc(${r.spacing(1)} * 1.2)`,
        paddingRight: `calc(${r.spacing(1)} * 1.2)`,
      },
      n.orientation === "vertical" && {
        paddingTop: `calc(${r.spacing(1)} * 1.2)`,
        paddingBottom: `calc(${r.spacing(1)} * 1.2)`,
      }
    )
  ),
  bC = N.forwardRef(function (n, i) {
    const l = fr({ props: n, name: "MuiDivider" }),
      {
        absolute: s = !1,
        children: c,
        className: f,
        component: m = c ? "div" : "hr",
        flexItem: v = !1,
        light: x = !1,
        orientation: w = "horizontal",
        role: k = m !== "hr" ? "separator" : void 0,
        textAlign: E = "center",
        variant: j = "fullWidth",
      } = l,
      z = tt(l, vC),
      b = Y({}, l, {
        absolute: s,
        component: m,
        flexItem: v,
        light: x,
        orientation: w,
        role: k,
        textAlign: E,
        variant: j,
      }),
      O = gC(b);
    return M.jsx(
      yC,
      Y({ as: m, className: kt(O.root, f), role: k, ref: i, ownerState: b }, z, {
        children: c ? M.jsx(xC, { className: O.wrapper, ownerState: b, children: c }) : null,
      })
    );
  });
function wC(r) {
  return Er("MuiLink", r);
}
const kC = Ar("MuiLink", [
    "root",
    "underlineNone",
    "underlineHover",
    "underlineAlways",
    "button",
    "focusVisible",
  ]),
  Bg = {
    primary: "primary.main",
    textPrimary: "text.primary",
    secondary: "secondary.main",
    textSecondary: "text.secondary",
    error: "error.main",
  },
  SC = (r) => Bg[r] || r,
  CC = ({ theme: r, ownerState: n }) => {
    const i = SC(n.color),
      l = pl(r, `palette.${i}`, !1) || n.color,
      s = pl(r, `palette.${i}Channel`);
    return "vars" in r && s ? `rgba(${s} / 0.4)` : li(l, 0.4);
  },
  $C = [
    "className",
    "color",
    "component",
    "onBlur",
    "onFocus",
    "TypographyClasses",
    "underline",
    "variant",
    "sx",
  ],
  EC = (r) => {
    const { classes: n, component: i, focusVisible: l, underline: s } = r,
      c = { root: ["root", `underline${mt(s)}`, i === "button" && "button", l && "focusVisible"] };
    return Dr(c, wC, n);
  },
  RC = St(Wg, {
    name: "MuiLink",
    slot: "Root",
    overridesResolver: (r, n) => {
      const { ownerState: i } = r;
      return [n.root, n[`underline${mt(i.underline)}`], i.component === "button" && n.button];
    },
  })(({ theme: r, ownerState: n }) =>
    Y(
      {},
      n.underline === "none" && { textDecoration: "none" },
      n.underline === "hover" && {
        textDecoration: "none",
        "&:hover": { textDecoration: "underline" },
      },
      n.underline === "always" &&
        Y(
          { textDecoration: "underline" },
          n.color !== "inherit" && { textDecorationColor: CC({ theme: r, ownerState: n }) },
          { "&:hover": { textDecorationColor: "inherit" } }
        ),
      n.component === "button" && {
        position: "relative",
        WebkitTapHighlightColor: "transparent",
        backgroundColor: "transparent",
        outline: 0,
        border: 0,
        margin: 0,
        borderRadius: 0,
        padding: 0,
        cursor: "pointer",
        userSelect: "none",
        verticalAlign: "middle",
        MozAppearance: "none",
        WebkitAppearance: "none",
        "&::-moz-focus-inner": { borderStyle: "none" },
        [`&.${kC.focusVisible}`]: { outline: "auto" },
      }
    )
  ),
  cl = N.forwardRef(function (n, i) {
    const l = fr({ props: n, name: "MuiLink" }),
      {
        className: s,
        color: c = "primary",
        component: f = "a",
        onBlur: m,
        onFocus: v,
        TypographyClasses: x,
        underline: w = "always",
        variant: k = "inherit",
        sx: E,
      } = l,
      j = tt(l, $C),
      { isFocusVisibleRef: z, onBlur: b, onFocus: O, ref: q } = xh(),
      [K, X] = N.useState(!1),
      V = $n(i, q),
      D = (xe) => {
        b(xe), z.current === !1 && X(!1), m && m(xe);
      },
      A = (xe) => {
        O(xe), z.current === !0 && X(!0), v && v(xe);
      },
      Q = Y({}, l, { color: c, component: f, focusVisible: K, underline: w, variant: k }),
      ae = EC(Q);
    return M.jsx(
      RC,
      Y(
        {
          color: c,
          className: kt(ae.root, s),
          classes: x,
          component: f,
          onBlur: D,
          onFocus: A,
          ref: V,
          ownerState: Q,
          variant: k,
          sx: [
            ...(Object.keys(Bg).includes(c) ? [] : [{ color: c }]),
            ...(Array.isArray(E) ? E : [E]),
          ],
        },
        j
      )
    );
  });
function _C(r) {
  const {
      className: n,
      classes: i,
      pulsate: l = !1,
      rippleX: s,
      rippleY: c,
      rippleSize: f,
      in: m,
      onExited: v,
      timeout: x,
    } = r,
    [w, k] = N.useState(!1),
    E = kt(n, i.ripple, i.rippleVisible, l && i.ripplePulsate),
    j = { width: f, height: f, top: -(f / 2) + c, left: -(f / 2) + s },
    z = kt(i.child, w && i.childLeaving, l && i.childPulsate);
  return (
    !m && !w && k(!0),
    N.useEffect(() => {
      if (!m && v != null) {
        const b = setTimeout(v, x);
        return () => {
          clearTimeout(b);
        };
      }
    }, [v, m, x]),
    M.jsx("span", { className: E, style: j, children: M.jsx("span", { className: z }) })
  );
}
const Zr = Ar("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate",
  ]),
  PC = ["center", "classes", "className"];
let Xf = (r) => r,
  O0,
  M0,
  z0,
  N0;
const ph = 550,
  TC = 80,
  OC = $h(
    O0 ||
      (O0 = Xf`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)
  ),
  MC = $h(
    M0 ||
      (M0 = Xf`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)
  ),
  zC = $h(
    z0 ||
      (z0 = Xf`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)
  ),
  NC = St("span", { name: "MuiTouchRipple", slot: "Root" })({
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit",
  }),
  LC = St(_C, { name: "MuiTouchRipple", slot: "Ripple" })(
    N0 ||
      (N0 = Xf`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),
    Zr.rippleVisible,
    OC,
    ph,
    ({ theme: r }) => r.transitions.easing.easeInOut,
    Zr.ripplePulsate,
    ({ theme: r }) => r.transitions.duration.shorter,
    Zr.child,
    Zr.childLeaving,
    MC,
    ph,
    ({ theme: r }) => r.transitions.easing.easeInOut,
    Zr.childPulsate,
    zC,
    ({ theme: r }) => r.transitions.easing.easeInOut
  ),
  jC = N.forwardRef(function (n, i) {
    const l = fr({ props: n, name: "MuiTouchRipple" }),
      { center: s = !1, classes: c = {}, className: f } = l,
      m = tt(l, PC),
      [v, x] = N.useState([]),
      w = N.useRef(0),
      k = N.useRef(null);
    N.useEffect(() => {
      k.current && (k.current(), (k.current = null));
    }, [v]);
    const E = N.useRef(!1),
      j = N.useRef(null),
      z = N.useRef(null),
      b = N.useRef(null);
    N.useEffect(
      () => () => {
        clearTimeout(j.current);
      },
      []
    );
    const O = N.useCallback(
        (V) => {
          const { pulsate: D, rippleX: A, rippleY: Q, rippleSize: ae, cb: xe } = V;
          x((he) => [
            ...he,
            M.jsx(
              LC,
              {
                classes: {
                  ripple: kt(c.ripple, Zr.ripple),
                  rippleVisible: kt(c.rippleVisible, Zr.rippleVisible),
                  ripplePulsate: kt(c.ripplePulsate, Zr.ripplePulsate),
                  child: kt(c.child, Zr.child),
                  childLeaving: kt(c.childLeaving, Zr.childLeaving),
                  childPulsate: kt(c.childPulsate, Zr.childPulsate),
                },
                timeout: ph,
                pulsate: D,
                rippleX: A,
                rippleY: Q,
                rippleSize: ae,
              },
              w.current
            ),
          ]),
            (w.current += 1),
            (k.current = xe);
        },
        [c]
      ),
      q = N.useCallback(
        (V = {}, D = {}, A = () => {}) => {
          const { pulsate: Q = !1, center: ae = s || D.pulsate, fakeElement: xe = !1 } = D;
          if (V?.type === "mousedown" && E.current) {
            E.current = !1;
            return;
          }
          V?.type === "touchstart" && (E.current = !0);
          const he = xe ? null : b.current,
            Te = he ? he.getBoundingClientRect() : { width: 0, height: 0, left: 0, top: 0 };
          let ue, fe, ye;
          if (
            ae ||
            V === void 0 ||
            (V.clientX === 0 && V.clientY === 0) ||
            (!V.clientX && !V.touches)
          )
            (ue = Math.round(Te.width / 2)), (fe = Math.round(Te.height / 2));
          else {
            const { clientX: me, clientY: ce } =
              V.touches && V.touches.length > 0 ? V.touches[0] : V;
            (ue = Math.round(me - Te.left)), (fe = Math.round(ce - Te.top));
          }
          if (ae)
            (ye = Math.sqrt((2 * Te.width ** 2 + Te.height ** 2) / 3)), ye % 2 === 0 && (ye += 1);
          else {
            const me = Math.max(Math.abs((he ? he.clientWidth : 0) - ue), ue) * 2 + 2,
              ce = Math.max(Math.abs((he ? he.clientHeight : 0) - fe), fe) * 2 + 2;
            ye = Math.sqrt(me ** 2 + ce ** 2);
          }
          V != null && V.touches
            ? z.current === null &&
              ((z.current = () => {
                O({ pulsate: Q, rippleX: ue, rippleY: fe, rippleSize: ye, cb: A });
              }),
              (j.current = setTimeout(() => {
                z.current && (z.current(), (z.current = null));
              }, TC)))
            : O({ pulsate: Q, rippleX: ue, rippleY: fe, rippleSize: ye, cb: A });
        },
        [s, O]
      ),
      K = N.useCallback(() => {
        q({}, { pulsate: !0 });
      }, [q]),
      X = N.useCallback((V, D) => {
        if ((clearTimeout(j.current), V?.type === "touchend" && z.current)) {
          z.current(),
            (z.current = null),
            (j.current = setTimeout(() => {
              X(V, D);
            }));
          return;
        }
        (z.current = null), x((A) => (A.length > 0 ? A.slice(1) : A)), (k.current = D);
      }, []);
    return (
      N.useImperativeHandle(i, () => ({ pulsate: K, start: q, stop: X }), [K, q, X]),
      M.jsx(
        NC,
        Y({ className: kt(Zr.root, c.root, f), ref: b }, m, {
          children: M.jsx(Lh, { component: null, exit: !0, children: v }),
        })
      )
    );
  });
function IC(r) {
  return Er("MuiButtonBase", r);
}
const DC = Ar("MuiButtonBase", ["root", "disabled", "focusVisible"]),
  AC = [
    "action",
    "centerRipple",
    "children",
    "className",
    "component",
    "disabled",
    "disableRipple",
    "disableTouchRipple",
    "focusRipple",
    "focusVisibleClassName",
    "LinkComponent",
    "onBlur",
    "onClick",
    "onContextMenu",
    "onDragLeave",
    "onFocus",
    "onFocusVisible",
    "onKeyDown",
    "onKeyUp",
    "onMouseDown",
    "onMouseLeave",
    "onMouseUp",
    "onTouchEnd",
    "onTouchMove",
    "onTouchStart",
    "tabIndex",
    "TouchRippleProps",
    "touchRippleRef",
    "type",
  ],
  FC = (r) => {
    const { disabled: n, focusVisible: i, focusVisibleClassName: l, classes: s } = r,
      f = Dr({ root: ["root", n && "disabled", i && "focusVisible"] }, IC, s);
    return i && l && (f.root += ` ${l}`), f;
  },
  WC = St("button", { name: "MuiButtonBase", slot: "Root", overridesResolver: (r, n) => n.root })({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    WebkitAppearance: "none",
    textDecoration: "none",
    color: "inherit",
    "&::-moz-focus-inner": { borderStyle: "none" },
    [`&.${DC.disabled}`]: { pointerEvents: "none", cursor: "default" },
    "@media print": { colorAdjust: "exact" },
  }),
  BC = N.forwardRef(function (n, i) {
    const l = fr({ props: n, name: "MuiButtonBase" }),
      {
        action: s,
        centerRipple: c = !1,
        children: f,
        className: m,
        component: v = "button",
        disabled: x = !1,
        disableRipple: w = !1,
        disableTouchRipple: k = !1,
        focusRipple: E = !1,
        LinkComponent: j = "a",
        onBlur: z,
        onClick: b,
        onContextMenu: O,
        onDragLeave: q,
        onFocus: K,
        onFocusVisible: X,
        onKeyDown: V,
        onKeyUp: D,
        onMouseDown: A,
        onMouseLeave: Q,
        onMouseUp: ae,
        onTouchEnd: xe,
        onTouchMove: he,
        onTouchStart: Te,
        tabIndex: ue = 0,
        TouchRippleProps: fe,
        touchRippleRef: ye,
        type: me,
      } = l,
      ce = tt(l, AC),
      se = N.useRef(null),
      J = N.useRef(null),
      de = $n(J, ye),
      { isFocusVisibleRef: R, onFocus: H, onBlur: ve, ref: Me } = xh(),
      [be, Oe] = N.useState(!1);
    x && be && Oe(!1),
      N.useImperativeHandle(
        s,
        () => ({
          focusVisible: () => {
            Oe(!0), se.current.focus();
          },
        }),
        []
      );
    const [pe, je] = N.useState(!1);
    N.useEffect(() => {
      je(!0);
    }, []);
    const Re = pe && !w && !x;
    N.useEffect(() => {
      be && E && !w && pe && J.current.pulsate();
    }, [w, E, be, pe]);
    function He(Fe, un, Zn = k) {
      return nu((ta) => (un && un(ta), !Zn && J.current && J.current[Fe](ta), !0));
    }
    const dr = He("start", A),
      Ht = He("stop", O),
      bo = He("stop", q),
      an = He("stop", ae),
      ln = He("stop", (Fe) => {
        be && Fe.preventDefault(), Q && Q(Fe);
      }),
      wo = He("start", Te),
      Yn = He("stop", xe),
      _n = He("stop", he),
      Pn = He(
        "stop",
        (Fe) => {
          ve(Fe), R.current === !1 && Oe(!1), z && z(Fe);
        },
        !1
      ),
      Qn = nu((Fe) => {
        se.current || (se.current = Fe.currentTarget),
          H(Fe),
          R.current === !0 && (Oe(!0), X && X(Fe)),
          K && K(Fe);
      }),
      Mt = () => {
        const Fe = se.current;
        return v && v !== "button" && !(Fe.tagName === "A" && Fe.href);
      },
      Ft = N.useRef(!1),
      sn = nu((Fe) => {
        E &&
          !Ft.current &&
          be &&
          J.current &&
          Fe.key === " " &&
          ((Ft.current = !0),
          J.current.stop(Fe, () => {
            J.current.start(Fe);
          })),
          Fe.target === Fe.currentTarget && Mt() && Fe.key === " " && Fe.preventDefault(),
          V && V(Fe),
          Fe.target === Fe.currentTarget &&
            Mt() &&
            Fe.key === "Enter" &&
            !x &&
            (Fe.preventDefault(), b && b(Fe));
      }),
      Tn = nu((Fe) => {
        E &&
          Fe.key === " " &&
          J.current &&
          be &&
          !Fe.defaultPrevented &&
          ((Ft.current = !1),
          J.current.stop(Fe, () => {
            J.current.pulsate(Fe);
          })),
          D && D(Fe),
          b &&
            Fe.target === Fe.currentTarget &&
            Mt() &&
            Fe.key === " " &&
            !Fe.defaultPrevented &&
            b(Fe);
      });
    let pr = v;
    pr === "button" && (ce.href || ce.to) && (pr = j);
    const hr = {};
    pr === "button"
      ? ((hr.type = me === void 0 ? "button" : me), (hr.disabled = x))
      : (!ce.href && !ce.to && (hr.role = "button"), x && (hr["aria-disabled"] = x));
    const On = $n(i, Me, se),
      Fr = Y({}, l, {
        centerRipple: c,
        component: v,
        disabled: x,
        disableRipple: w,
        disableTouchRipple: k,
        focusRipple: E,
        tabIndex: ue,
        focusVisible: be,
      }),
      Wr = FC(Fr);
    return M.jsxs(
      WC,
      Y(
        {
          as: pr,
          className: kt(Wr.root, m),
          ownerState: Fr,
          onBlur: Pn,
          onClick: b,
          onContextMenu: Ht,
          onFocus: Qn,
          onKeyDown: sn,
          onKeyUp: Tn,
          onMouseDown: dr,
          onMouseLeave: ln,
          onMouseUp: an,
          onDragLeave: bo,
          onTouchEnd: Yn,
          onTouchMove: _n,
          onTouchStart: wo,
          ref: On,
          tabIndex: x ? -1 : ue,
          type: me,
        },
        hr,
        ce,
        { children: [f, Re ? M.jsx(jC, Y({ ref: de, center: c }, fe)) : null] }
      )
    );
  });
function UC(r) {
  return Er("MuiButton", r);
}
const ff = Ar("MuiButton", [
    "root",
    "text",
    "textInherit",
    "textPrimary",
    "textSecondary",
    "textSuccess",
    "textError",
    "textInfo",
    "textWarning",
    "outlined",
    "outlinedInherit",
    "outlinedPrimary",
    "outlinedSecondary",
    "outlinedSuccess",
    "outlinedError",
    "outlinedInfo",
    "outlinedWarning",
    "contained",
    "containedInherit",
    "containedPrimary",
    "containedSecondary",
    "containedSuccess",
    "containedError",
    "containedInfo",
    "containedWarning",
    "disableElevation",
    "focusVisible",
    "disabled",
    "colorInherit",
    "textSizeSmall",
    "textSizeMedium",
    "textSizeLarge",
    "outlinedSizeSmall",
    "outlinedSizeMedium",
    "outlinedSizeLarge",
    "containedSizeSmall",
    "containedSizeMedium",
    "containedSizeLarge",
    "sizeMedium",
    "sizeSmall",
    "sizeLarge",
    "fullWidth",
    "startIcon",
    "endIcon",
    "iconSizeSmall",
    "iconSizeMedium",
    "iconSizeLarge",
  ]),
  VC = N.createContext({}),
  HC = [
    "children",
    "color",
    "component",
    "className",
    "disabled",
    "disableElevation",
    "disableFocusRipple",
    "endIcon",
    "focusVisibleClassName",
    "fullWidth",
    "size",
    "startIcon",
    "type",
    "variant",
  ],
  GC = (r) => {
    const { color: n, disableElevation: i, fullWidth: l, size: s, variant: c, classes: f } = r,
      m = {
        root: [
          "root",
          c,
          `${c}${mt(n)}`,
          `size${mt(s)}`,
          `${c}Size${mt(s)}`,
          n === "inherit" && "colorInherit",
          i && "disableElevation",
          l && "fullWidth",
        ],
        label: ["label"],
        startIcon: ["startIcon", `iconSize${mt(s)}`],
        endIcon: ["endIcon", `iconSize${mt(s)}`],
      },
      v = Dr(m, UC, f);
    return Y({}, f, v);
  },
  Ug = (r) =>
    Y(
      {},
      r.size === "small" && { "& > *:nth-of-type(1)": { fontSize: 18 } },
      r.size === "medium" && { "& > *:nth-of-type(1)": { fontSize: 20 } },
      r.size === "large" && { "& > *:nth-of-type(1)": { fontSize: 22 } }
    ),
  qC = St(BC, {
    shouldForwardProp: (r) => Cg(r) || r === "classes",
    name: "MuiButton",
    slot: "Root",
    overridesResolver: (r, n) => {
      const { ownerState: i } = r;
      return [
        n.root,
        n[i.variant],
        n[`${i.variant}${mt(i.color)}`],
        n[`size${mt(i.size)}`],
        n[`${i.variant}Size${mt(i.size)}`],
        i.color === "inherit" && n.colorInherit,
        i.disableElevation && n.disableElevation,
        i.fullWidth && n.fullWidth,
      ];
    },
  })(
    ({ theme: r, ownerState: n }) => {
      var i, l;
      return Y(
        {},
        r.typography.button,
        {
          minWidth: 64,
          padding: "6px 16px",
          borderRadius: (r.vars || r).shape.borderRadius,
          transition: r.transitions.create(
            ["background-color", "box-shadow", "border-color", "color"],
            { duration: r.transitions.duration.short }
          ),
          "&:hover": Y(
            {
              textDecoration: "none",
              backgroundColor: r.vars
                ? `rgba(${r.vars.palette.text.primaryChannel} / ${r.vars.palette.action.hoverOpacity})`
                : li(r.palette.text.primary, r.palette.action.hoverOpacity),
              "@media (hover: none)": { backgroundColor: "transparent" },
            },
            n.variant === "text" &&
              n.color !== "inherit" && {
                backgroundColor: r.vars
                  ? `rgba(${r.vars.palette[n.color].mainChannel} / ${
                      r.vars.palette.action.hoverOpacity
                    })`
                  : li(r.palette[n.color].main, r.palette.action.hoverOpacity),
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
            n.variant === "outlined" &&
              n.color !== "inherit" && {
                border: `1px solid ${(r.vars || r).palette[n.color].main}`,
                backgroundColor: r.vars
                  ? `rgba(${r.vars.palette[n.color].mainChannel} / ${
                      r.vars.palette.action.hoverOpacity
                    })`
                  : li(r.palette[n.color].main, r.palette.action.hoverOpacity),
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
            n.variant === "contained" && {
              backgroundColor: (r.vars || r).palette.grey.A100,
              boxShadow: (r.vars || r).shadows[4],
              "@media (hover: none)": {
                boxShadow: (r.vars || r).shadows[2],
                backgroundColor: (r.vars || r).palette.grey[300],
              },
            },
            n.variant === "contained" &&
              n.color !== "inherit" && {
                backgroundColor: (r.vars || r).palette[n.color].dark,
                "@media (hover: none)": { backgroundColor: (r.vars || r).palette[n.color].main },
              }
          ),
          "&:active": Y({}, n.variant === "contained" && { boxShadow: (r.vars || r).shadows[8] }),
          [`&.${ff.focusVisible}`]: Y(
            {},
            n.variant === "contained" && { boxShadow: (r.vars || r).shadows[6] }
          ),
          [`&.${ff.disabled}`]: Y(
            { color: (r.vars || r).palette.action.disabled },
            n.variant === "outlined" && {
              border: `1px solid ${(r.vars || r).palette.action.disabledBackground}`,
            },
            n.variant === "contained" && {
              color: (r.vars || r).palette.action.disabled,
              boxShadow: (r.vars || r).shadows[0],
              backgroundColor: (r.vars || r).palette.action.disabledBackground,
            }
          ),
        },
        n.variant === "text" && { padding: "6px 8px" },
        n.variant === "text" &&
          n.color !== "inherit" && { color: (r.vars || r).palette[n.color].main },
        n.variant === "outlined" && { padding: "5px 15px", border: "1px solid currentColor" },
        n.variant === "outlined" &&
          n.color !== "inherit" && {
            color: (r.vars || r).palette[n.color].main,
            border: r.vars
              ? `1px solid rgba(${r.vars.palette[n.color].mainChannel} / 0.5)`
              : `1px solid ${li(r.palette[n.color].main, 0.5)}`,
          },
        n.variant === "contained" && {
          color: r.vars
            ? r.vars.palette.text.primary
            : (i = (l = r.palette).getContrastText) == null
            ? void 0
            : i.call(l, r.palette.grey[300]),
          backgroundColor: (r.vars || r).palette.grey[300],
          boxShadow: (r.vars || r).shadows[2],
        },
        n.variant === "contained" &&
          n.color !== "inherit" && {
            color: (r.vars || r).palette[n.color].contrastText,
            backgroundColor: (r.vars || r).palette[n.color].main,
          },
        n.color === "inherit" && { color: "inherit", borderColor: "currentColor" },
        n.size === "small" &&
          n.variant === "text" && { padding: "4px 5px", fontSize: r.typography.pxToRem(13) },
        n.size === "large" &&
          n.variant === "text" && { padding: "8px 11px", fontSize: r.typography.pxToRem(15) },
        n.size === "small" &&
          n.variant === "outlined" && { padding: "3px 9px", fontSize: r.typography.pxToRem(13) },
        n.size === "large" &&
          n.variant === "outlined" && { padding: "7px 21px", fontSize: r.typography.pxToRem(15) },
        n.size === "small" &&
          n.variant === "contained" && { padding: "4px 10px", fontSize: r.typography.pxToRem(13) },
        n.size === "large" &&
          n.variant === "contained" && { padding: "8px 22px", fontSize: r.typography.pxToRem(15) },
        n.fullWidth && { width: "100%" }
      );
    },
    ({ ownerState: r }) =>
      r.disableElevation && {
        boxShadow: "none",
        "&:hover": { boxShadow: "none" },
        [`&.${ff.focusVisible}`]: { boxShadow: "none" },
        "&:active": { boxShadow: "none" },
        [`&.${ff.disabled}`]: { boxShadow: "none" },
      }
  ),
  KC = St("span", {
    name: "MuiButton",
    slot: "StartIcon",
    overridesResolver: (r, n) => {
      const { ownerState: i } = r;
      return [n.startIcon, n[`iconSize${mt(i.size)}`]];
    },
  })(({ ownerState: r }) =>
    Y(
      { display: "inherit", marginRight: 8, marginLeft: -4 },
      r.size === "small" && { marginLeft: -2 },
      Ug(r)
    )
  ),
  XC = St("span", {
    name: "MuiButton",
    slot: "EndIcon",
    overridesResolver: (r, n) => {
      const { ownerState: i } = r;
      return [n.endIcon, n[`iconSize${mt(i.size)}`]];
    },
  })(({ ownerState: r }) =>
    Y(
      { display: "inherit", marginRight: -4, marginLeft: 8 },
      r.size === "small" && { marginRight: -2 },
      Ug(r)
    )
  ),
  YC = N.forwardRef(function (n, i) {
    const l = N.useContext(VC),
      s = bh(l, n),
      c = fr({ props: s, name: "MuiButton" }),
      {
        children: f,
        color: m = "primary",
        component: v = "button",
        className: x,
        disabled: w = !1,
        disableElevation: k = !1,
        disableFocusRipple: E = !1,
        endIcon: j,
        focusVisibleClassName: z,
        fullWidth: b = !1,
        size: O = "medium",
        startIcon: q,
        type: K,
        variant: X = "text",
      } = c,
      V = tt(c, HC),
      D = Y({}, c, {
        color: m,
        component: v,
        disabled: w,
        disableElevation: k,
        disableFocusRipple: E,
        fullWidth: b,
        size: O,
        type: K,
        variant: X,
      }),
      A = GC(D),
      Q = q && M.jsx(KC, { className: A.startIcon, ownerState: D, children: q }),
      ae = j && M.jsx(XC, { className: A.endIcon, ownerState: D, children: j });
    return M.jsxs(
      qC,
      Y(
        {
          ownerState: D,
          className: kt(l.className, A.root, x),
          component: v,
          disabled: w,
          focusRipple: !E,
          focusVisibleClassName: kt(A.focusVisible, z),
          ref: i,
          type: K,
        },
        V,
        { classes: A, children: [Q, f, ae] }
      )
    );
  }),
  QC = St(YC)(({ theme: r, ownerState: n }) => {
    const { palette: i, functions: l, borders: s, boxShadows: c } = r,
      { color: f, variant: m, size: v, circular: x, iconOnly: w } = n,
      { white: k, text: E, transparent: j, gradients: z, dark: b } = i,
      { boxShadow: O, linearGradient: q, pxToRem: K, rgba: X } = l,
      { borderRadius: V } = s,
      { colored: D } = c,
      A = () => {
        const ue = i[f] ? i[f].main : k.main,
          fe = i[f] ? i[f].focus : k.focus,
          ye = D[f]
            ? `${O([0, 3], [3, 0], i[f].main, 0.15)}, ${O([0, 3], [1, -2], i[f].main, 0.2)}, ${O(
                [0, 1],
                [5, 0],
                i[f].main,
                0.15
              )}`
            : "none",
          me = D[f]
            ? `${O([0, 14], [26, -12], i[f].main, 0.4)}, ${O(
                [0, 4],
                [23, 0],
                i[f].main,
                0.15
              )}, ${O([0, 8], [10, -5], i[f].main, 0.2)}`
            : "none";
        let ce = k.main;
        f === "default" || !i[f]
          ? (ce = E.main)
          : (f === "white" || f === "light") && (ce = b.main);
        let se = k.main;
        return (
          f === "darfault"
            ? (se = E.main)
            : f === "white"
            ? (se = b.main)
            : (f === "primary" || f === "error" || f === "dark") && (se = k.main),
          {
            background: ue,
            color: ce,
            boxShadow: ye,
            "&:hover": { backgroundColor: ue, boxShadow: me },
            "&:focus:not(:hover)": {
              backgroundColor: fe,
              boxShadow: i[f]
                ? O([0, 0], [0, 3.2], i[f].main, 0.5)
                : O([0, 0], [0, 3.2], k.main, 0.5),
            },
            "&:disabled": { backgroundColor: ue, color: se },
          }
        );
      },
      Q = () => {
        const ue = f === "white" ? X(k.main, 0.1) : j.main,
          fe = i[f] ? i[f].main : k.main,
          ye = i[f] ? O([0, 0], [0, 3.2], i[f].main, 0.5) : O([0, 0], [0, 3.2], k.main, 0.5);
        let me = i[f] ? i[f].main : X(k.main, 0.75);
        return (
          f === "white" && (me = X(k.main, 0.75)),
          {
            background: ue,
            color: fe,
            borderColor: me,
            "&:hover": { background: j.main, borderColor: fe },
            "&:focus:not(:hover)": { background: j.main, boxShadow: ye },
            "&:active:not(:hover)": { backgroundColor: fe, color: k.main, opacity: 0.85 },
            "&:disabled": { color: fe, borderColor: fe },
          }
        );
      },
      ae = () => {
        const ue = f === "white" || !z[f] ? k.main : q(z[f].main, z[f].state),
          fe = D[f]
            ? `${O([0, 3], [3, 0], i[f].main, 0.15)}, ${O([0, 3], [1, -2], i[f].main, 0.2)}, ${O(
                [0, 1],
                [5, 0],
                i[f].main,
                0.15
              )}`
            : "none",
          ye = D[f]
            ? `${O([0, 14], [26, -12], i[f].main, 0.4)}, ${O(
                [0, 4],
                [23, 0],
                i[f].main,
                0.15
              )}, ${O([0, 8], [10, -5], i[f].main, 0.2)}`
            : "none";
        let me = k.main;
        return (
          f === "white" ? (me = E.main) : f === "light" && (me = z.dark.state),
          {
            background: ue,
            color: me,
            boxShadow: fe,
            "&:hover": { backgroundColor: k.main, boxShadow: ye },
            "&:focus:not(:hover)": { boxShadow: fe },
            "&:disabled": { background: ue, color: me },
          }
        );
      },
      xe = () => {
        const ue = i[f] ? i[f].main : k.main,
          fe = i[f] ? i[f].focus : k.focus;
        return { color: ue, "&:hover": { color: fe }, "&:focus:not(:hover)": { color: fe } };
      },
      he = () => ({ borderRadius: V.section }),
      Te = () => {
        let ue = K(38);
        v === "small" ? (ue = K(25.4)) : v === "large" && (ue = K(52));
        let fe = `${K(11)} ${K(11)} ${K(10)}`;
        return (
          v === "small" ? (fe = K(4.5)) : v === "large" && (fe = K(16)),
          {
            width: ue,
            minWidth: ue,
            height: ue,
            minHeight: ue,
            padding: fe,
            "& .material-icons": { marginTop: 0 },
            "&:hover, &:focus, &:active": { transform: "none" },
          }
        );
      };
    return {
      ...(m === "contained" && A()),
      ...(m === "outlined" && Q()),
      ...(m === "gradient" && ae()),
      ...(m === "text" && xe()),
      ...(x && he()),
      ...(w && Te()),
    };
  }),
  Rf = N.forwardRef(
    ({ color: r, variant: n, size: i, circular: l, iconOnly: s, children: c, ...f }, m) =>
      M.jsx(QC, {
        ...f,
        ref: m,
        color: "primary",
        variant: n === "gradient" ? "contained" : n,
        size: i,
        ownerState: { color: r, variant: n, size: i, circular: l, iconOnly: s },
        children: c,
      })
  );
Rf.defaultProps = {
  size: "medium",
  variant: "contained",
  color: "white",
  circular: !1,
  iconOnly: !1,
};
Rf.propTypes = {
  size: Ee.oneOf(["small", "medium", "large"]),
  variant: Ee.oneOf(["text", "contained", "outlined", "gradient"]),
  color: Ee.oneOf([
    "default",
    "white",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  circular: Ee.bool,
  iconOnly: Ee.bool,
  children: Ee.node.isRequired,
};
function ZC(r) {
  return Er("MuiSvgIcon", r);
}
Ar("MuiSvgIcon", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "colorAction",
  "colorError",
  "colorDisabled",
  "fontSizeInherit",
  "fontSizeSmall",
  "fontSizeMedium",
  "fontSizeLarge",
]);
const JC = [
    "children",
    "className",
    "color",
    "component",
    "fontSize",
    "htmlColor",
    "inheritViewBox",
    "titleAccess",
    "viewBox",
  ],
  e4 = (r) => {
    const { color: n, fontSize: i, classes: l } = r,
      s = { root: ["root", n !== "inherit" && `color${mt(n)}`, `fontSize${mt(i)}`] };
    return Dr(s, ZC, l);
  },
  t4 = St("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (r, n) => {
      const { ownerState: i } = r;
      return [
        n.root,
        i.color !== "inherit" && n[`color${mt(i.color)}`],
        n[`fontSize${mt(i.fontSize)}`],
      ];
    },
  })(({ theme: r, ownerState: n }) => {
    var i, l, s, c, f, m, v, x, w, k, E, j, z, b, O, q, K;
    return {
      userSelect: "none",
      width: "1em",
      height: "1em",
      display: "inline-block",
      fill: "currentColor",
      flexShrink: 0,
      transition:
        (i = r.transitions) == null || (l = i.create) == null
          ? void 0
          : l.call(i, "fill", {
              duration:
                (s = r.transitions) == null || (c = s.duration) == null ? void 0 : c.shorter,
            }),
      fontSize: {
        inherit: "inherit",
        small:
          ((f = r.typography) == null || (m = f.pxToRem) == null ? void 0 : m.call(f, 20)) ||
          "1.25rem",
        medium:
          ((v = r.typography) == null || (x = v.pxToRem) == null ? void 0 : x.call(v, 24)) ||
          "1.5rem",
        large:
          ((w = r.typography) == null || (k = w.pxToRem) == null ? void 0 : k.call(w, 35)) ||
          "2.1875rem",
      }[n.fontSize],
      color:
        (E = (j = (r.vars || r).palette) == null || (z = j[n.color]) == null ? void 0 : z.main) !=
        null
          ? E
          : {
              action:
                (b = (r.vars || r).palette) == null || (O = b.action) == null ? void 0 : O.active,
              disabled:
                (q = (r.vars || r).palette) == null || (K = q.action) == null ? void 0 : K.disabled,
              inherit: void 0,
            }[n.color],
    };
  }),
  hh = N.forwardRef(function (n, i) {
    const l = fr({ props: n, name: "MuiSvgIcon" }),
      {
        children: s,
        className: c,
        color: f = "inherit",
        component: m = "svg",
        fontSize: v = "medium",
        htmlColor: x,
        inheritViewBox: w = !1,
        titleAccess: k,
        viewBox: E = "0 0 24 24",
      } = l,
      j = tt(l, JC),
      z = Y({}, l, {
        color: f,
        component: m,
        fontSize: v,
        instanceFontSize: n.fontSize,
        inheritViewBox: w,
        viewBox: E,
      }),
      b = {};
    w || (b.viewBox = E);
    const O = e4(z);
    return M.jsxs(
      t4,
      Y(
        {
          as: m,
          className: kt(O.root, c),
          focusable: "false",
          color: x,
          "aria-hidden": k ? void 0 : !0,
          role: k ? "img" : void 0,
          ref: i,
        },
        b,
        j,
        { ownerState: z, children: [s, k ? M.jsx("title", { children: k }) : null] }
      )
    );
  });
hh.muiName = "SvgIcon";
function r4(r, n) {
  function i(l, s) {
    return M.jsx(hh, Y({ "data-testid": `${n}Icon`, ref: s }, l, { children: r }));
  }
  return (i.muiName = hh.muiName), N.memo(N.forwardRef(i));
}
const n4 = {
    configure: (r) => {
      wh.configure(r);
    },
  },
  o4 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        capitalize: mt,
        createChainedFunction: _1,
        createSvgIcon: r4,
        debounce: P1,
        deprecatedPropType: T1,
        isMuiElement: O1,
        ownerDocument: wf,
        ownerWindow: M1,
        requirePropFactory: z1,
        setRef: kf,
        unstable_ClassNameGenerator: n4,
        unstable_useEnhancedEffect: Qi,
        unstable_useId: Z0,
        unsupportedProp: L1,
        useControlled: j1,
        useEventCallback: nu,
        useForkRef: $n,
        useIsFocusVisible: xh,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function i4(r) {
  return Er("MuiCollapse", r);
}
Ar("MuiCollapse", [
  "root",
  "horizontal",
  "vertical",
  "entered",
  "hidden",
  "wrapper",
  "wrapperInner",
]);
const a4 = [
    "addEndListener",
    "children",
    "className",
    "collapsedSize",
    "component",
    "easing",
    "in",
    "onEnter",
    "onEntered",
    "onEntering",
    "onExit",
    "onExited",
    "onExiting",
    "orientation",
    "style",
    "timeout",
    "TransitionComponent",
  ],
  l4 = (r) => {
    const { orientation: n, classes: i } = r,
      l = {
        root: ["root", `${n}`],
        entered: ["entered"],
        hidden: ["hidden"],
        wrapper: ["wrapper", `${n}`],
        wrapperInner: ["wrapperInner", `${n}`],
      };
    return Dr(l, i4, i);
  },
  s4 = St("div", {
    name: "MuiCollapse",
    slot: "Root",
    overridesResolver: (r, n) => {
      const { ownerState: i } = r;
      return [
        n.root,
        n[i.orientation],
        i.state === "entered" && n.entered,
        i.state === "exited" && !i.in && i.collapsedSize === "0px" && n.hidden,
      ];
    },
  })(({ theme: r, ownerState: n }) =>
    Y(
      { height: 0, overflow: "hidden", transition: r.transitions.create("height") },
      n.orientation === "horizontal" && {
        height: "auto",
        width: 0,
        transition: r.transitions.create("width"),
      },
      n.state === "entered" &&
        Y(
          { height: "auto", overflow: "visible" },
          n.orientation === "horizontal" && { width: "auto" }
        ),
      n.state === "exited" && !n.in && n.collapsedSize === "0px" && { visibility: "hidden" }
    )
  ),
  u4 = St("div", { name: "MuiCollapse", slot: "Wrapper", overridesResolver: (r, n) => n.wrapper })(
    ({ ownerState: r }) =>
      Y(
        { display: "flex", width: "100%" },
        r.orientation === "horizontal" && { width: "auto", height: "100%" }
      )
  ),
  c4 = St("div", {
    name: "MuiCollapse",
    slot: "WrapperInner",
    overridesResolver: (r, n) => n.wrapperInner,
  })(({ ownerState: r }) =>
    Y({ width: "100%" }, r.orientation === "horizontal" && { width: "auto", height: "100%" })
  ),
  Uh = N.forwardRef(function (n, i) {
    const l = fr({ props: n, name: "MuiCollapse" }),
      {
        addEndListener: s,
        children: c,
        className: f,
        collapsedSize: m = "0px",
        component: v,
        easing: x,
        in: w,
        onEnter: k,
        onEntered: E,
        onEntering: j,
        onExit: z,
        onExited: b,
        onExiting: O,
        orientation: q = "vertical",
        style: K,
        timeout: X = Sg.standard,
        TransitionComponent: V = Rn,
      } = l,
      D = tt(l, a4),
      A = Y({}, l, { orientation: q, collapsedSize: m }),
      Q = l4(A),
      ae = qf(),
      xe = N.useRef(),
      he = N.useRef(null),
      Te = N.useRef(),
      ue = typeof m == "number" ? `${m}px` : m,
      fe = q === "horizontal",
      ye = fe ? "width" : "height";
    N.useEffect(
      () => () => {
        clearTimeout(xe.current);
      },
      []
    );
    const me = N.useRef(null),
      ce = $n(i, me),
      se = (pe) => (je) => {
        if (pe) {
          const Re = me.current;
          je === void 0 ? pe(Re) : pe(Re, je);
        }
      },
      J = () => (he.current ? he.current[fe ? "clientWidth" : "clientHeight"] : 0),
      de = se((pe, je) => {
        he.current && fe && (he.current.style.position = "absolute"),
          (pe.style[ye] = ue),
          k && k(pe, je);
      }),
      R = se((pe, je) => {
        const Re = J();
        he.current && fe && (he.current.style.position = "");
        const { duration: He, easing: dr } = ml(
          { style: K, timeout: X, easing: x },
          { mode: "enter" }
        );
        if (X === "auto") {
          const Ht = ae.transitions.getAutoHeightDuration(Re);
          (pe.style.transitionDuration = `${Ht}ms`), (Te.current = Ht);
        } else pe.style.transitionDuration = typeof He == "string" ? He : `${He}ms`;
        (pe.style[ye] = `${Re}px`), (pe.style.transitionTimingFunction = dr), j && j(pe, je);
      }),
      H = se((pe, je) => {
        (pe.style[ye] = "auto"), E && E(pe, je);
      }),
      ve = se((pe) => {
        (pe.style[ye] = `${J()}px`), z && z(pe);
      }),
      Me = se(b),
      be = se((pe) => {
        const je = J(),
          { duration: Re, easing: He } = ml({ style: K, timeout: X, easing: x }, { mode: "exit" });
        if (X === "auto") {
          const dr = ae.transitions.getAutoHeightDuration(je);
          (pe.style.transitionDuration = `${dr}ms`), (Te.current = dr);
        } else pe.style.transitionDuration = typeof Re == "string" ? Re : `${Re}ms`;
        (pe.style[ye] = ue), (pe.style.transitionTimingFunction = He), O && O(pe);
      }),
      Oe = (pe) => {
        X === "auto" && (xe.current = setTimeout(pe, Te.current || 0)), s && s(me.current, pe);
      };
    return M.jsx(
      V,
      Y(
        {
          in: w,
          onEnter: de,
          onEntered: H,
          onEntering: R,
          onExit: ve,
          onExited: Me,
          onExiting: be,
          addEndListener: Oe,
          nodeRef: me,
          timeout: X === "auto" ? null : X,
        },
        D,
        {
          children: (pe, je) =>
            M.jsx(
              s4,
              Y(
                {
                  as: v,
                  className: kt(
                    Q.root,
                    f,
                    { entered: Q.entered, exited: !w && ue === "0px" && Q.hidden }[pe]
                  ),
                  style: Y({ [fe ? "minWidth" : "minHeight"]: ue }, K),
                  ownerState: Y({}, A, { state: pe }),
                  ref: ce,
                },
                je,
                {
                  children: M.jsx(u4, {
                    ownerState: Y({}, A, { state: pe }),
                    className: Q.wrapper,
                    ref: he,
                    children: M.jsx(c4, {
                      ownerState: Y({}, A, { state: pe }),
                      className: Q.wrapperInner,
                      children: c,
                    }),
                  }),
                }
              )
            ),
        }
      )
    );
  });
Uh.muiSupportAuto = !0;
function Yf({
  name: r,
  icon: n,
  children: i,
  collapseStatus: l,
  light: s,
  href: c,
  route: f,
  collapse: m,
  ...v
}) {
  const x = { component: "a", href: c, target: "_blank", rel: "noreferrer" },
    w = { component: Cn, to: f };
  return M.jsxs(M.Fragment, {
    children: [
      M.jsxs(ct, {
        ...v,
        mx: 1,
        p: 1,
        display: "flex",
        alignItems: "baseline",
        color: s ? "white" : "dark",
        opacity: s ? 1 : 0.6,
        sx: { cursor: "pointer", userSelect: "none" },
        ...(f && w),
        ...(c && x),
        children: [
          M.jsx(it, {
            variant: "body2",
            lineHeight: 1,
            color: "inherit",
            sx: { alignSelf: "center", "& *": { verticalAlign: "middle" } },
            children: n,
          }),
          M.jsx(it, {
            variant: "button",
            fontWeight: "regular",
            textTransform: "capitalize",
            color: s ? "white" : "dark",
            sx: { fontWeight: "100%", ml: 1, mr: 0.25 },
            children: r,
          }),
          M.jsx(it, {
            variant: "body2",
            color: s ? "white" : "dark",
            ml: "auto",
            children: M.jsx(Lr, {
              sx: { fontWeight: "normal", verticalAlign: "middle" },
              children: m && "keyboard_arrow_down",
            }),
          }),
        ],
      }),
      i && M.jsx(Uh, { in: !!l, timeout: 400, unmountOnExit: !0, children: i }),
    ],
  });
}
Yf.defaultProps = { children: !1, collapseStatus: !1, light: !1, href: "", route: "" };
Yf.propTypes = {
  name: Ee.string.isRequired,
  icon: Ee.node.isRequired,
  children: Ee.node,
  collapseStatus: Ee.bool,
  light: Ee.bool,
  href: Ee.string,
  route: Ee.string,
  collapse: Ee.bool.isRequired,
};
function Vg({ routes: r, open: n }) {
  const [i, l] = N.useState(""),
    s = (f) => l(i === f ? !1 : f),
    c = r.map(({ name: f, icon: m, collapse: v, href: x, route: w, collapse: k }) =>
      M.jsx(
        Yf,
        {
          name: f,
          icon: m,
          collapseStatus: f === i,
          onClick: () => s(f),
          href: x,
          route: w,
          collapse: !!k,
          children: M.jsx(ct, {
            sx: { height: "15rem", maxHeight: "15rem", overflowY: "scroll" },
            children:
              v &&
              v.map((E) =>
                M.jsx(
                  ct,
                  {
                    px: 2,
                    children: E.collapse
                      ? M.jsxs(M.Fragment, {
                          children: [
                            M.jsx(it, {
                              display: "block",
                              variant: "button",
                              fontWeight: "bold",
                              textTransform: "capitalize",
                              py: 1,
                              px: 0.5,
                              children: E.name,
                            }),
                            E.collapse.map((j) =>
                              M.jsx(
                                it,
                                {
                                  component: j.route ? Cn : cl,
                                  to: j.route ? j.route : "",
                                  href: j.href ? j.href : "",
                                  target: j.href ? "_blank" : "",
                                  rel: (j.href, "noreferrer"),
                                  minWidth: "11.25rem",
                                  display: "block",
                                  variant: "button",
                                  color: "text",
                                  textTransform: "capitalize",
                                  fontWeight: "regular",
                                  py: 0.625,
                                  px: 2,
                                  sx: ({
                                    palette: { grey: z, dark: b },
                                    borders: { borderRadius: O },
                                  }) => ({
                                    borderRadius: O.md,
                                    cursor: "pointer",
                                    transition: "all 300ms linear",
                                    "&:hover": { backgroundColor: z[200], color: b.main },
                                  }),
                                  children: j.name,
                                },
                                j.name
                              )
                            ),
                          ],
                        })
                      : M.jsxs(
                          ct,
                          {
                            display: "block",
                            component: E.route ? Cn : cl,
                            to: E.route ? E.route : "",
                            href: E.href ? E.href : "",
                            target: E.href ? "_blank" : "",
                            rel: (E.href, "noreferrer"),
                            sx: ({
                              palette: { grey: j, dark: z },
                              borders: { borderRadius: b },
                            }) => ({
                              borderRadius: b.md,
                              cursor: "pointer",
                              transition: "all 300ms linear",
                              py: 1,
                              px: 1.625,
                              "&:hover": {
                                backgroundColor: j[200],
                                color: z.main,
                                "& *": { color: z.main },
                              },
                            }),
                            children: [
                              M.jsx(it, {
                                display: "block",
                                variant: "button",
                                fontWeight: "bold",
                                textTransform: "capitalize",
                                children: E.name,
                              }),
                              M.jsx(it, {
                                display: "block",
                                variant: "button",
                                color: "text",
                                fontWeight: "regular",
                                sx: { transition: "all 300ms linear" },
                                children: E.description,
                              }),
                            ],
                          },
                          E.key
                        ),
                  },
                  E.name
                )
              ),
          }),
        },
        f
      )
    );
  return M.jsx(Uh, {
    in: !!n,
    timeout: "auto",
    unmountOnExit: !0,
    children: M.jsx(ct, { width: "calc(100% + 1.625rem)", my: 2, ml: -2, children: c }),
  });
}
Vg.propTypes = {
  routes: Ee.arrayOf(Ee.oneOfType([Ee.object])).isRequired,
  open: Ee.oneOfType([Ee.bool, Ee.object]).isRequired,
};
function Vh({
  brand: r,
  routes: n,
  transparent: i,
  light: l,
  action: s,
  sticky: c,
  relative: f,
  center: m,
}) {
  const [v, x] = N.useState(""),
    [w, k] = N.useState(""),
    [E, j] = N.useState(""),
    [z, b] = N.useState(""),
    [O, q] = N.useState(""),
    [K, X] = N.useState(""),
    [V, D] = N.useState(null),
    [A, Q] = N.useState(!1),
    [ae, xe] = N.useState(!1),
    he = () => Q(!A);
  N.useEffect(() => {
    function ce() {
      window.innerWidth < zh.values.lg ? (xe(!0), Q(!1)) : (xe(!1), Q(!1));
    }
    return (
      window.addEventListener("resize", ce), ce(), () => window.removeEventListener("resize", ce)
    );
  }, []);
  const Te = n.map(({ name: ce, icon: se, href: J, route: de, collapse: R }) =>
      M.jsx(
        Yf,
        {
          name: ce,
          icon: se,
          href: J,
          route: de,
          collapse: !!R,
          onMouseEnter: ({ currentTarget: H }) => {
            R && (x(H), k(H), j(ce));
          },
          onMouseLeave: () => R && x(null),
          light: l,
        },
        ce
      )
    ),
    ue = n.map(({ name: ce, collapse: se, columns: J, rowsPerColumn: de }) => {
      let R;
      if (se && J && ce === E) {
        const H = se.reduce((ve, Me, be) => {
          const Oe = Math.floor(be / de);
          return ve[Oe] || (ve[Oe] = []), ve[Oe].push(Me), ve;
        }, []);
        R = M.jsx(
          Xt,
          {
            container: !0,
            spacing: 3,
            py: 1,
            px: 1.5,
            children: H.map((ve, Me) => {
              const be = `grid-${Me}`,
                Oe = `divider-${Me}`;
              return M.jsxs(
                Xt,
                {
                  item: !0,
                  xs: 12 / J,
                  sx: { position: "relative" },
                  children: [
                    ve.map((pe, je) =>
                      M.jsxs(
                        N.Fragment,
                        {
                          children: [
                            M.jsx(it, {
                              display: "block",
                              variant: "button",
                              fontWeight: "bold",
                              textTransform: "capitalize",
                              py: 1,
                              px: 0.5,
                              mt: je !== 0 ? 2 : 0,
                              children: pe.name,
                            }),
                            pe.collapse.map((Re) =>
                              M.jsx(
                                it,
                                {
                                  component: Re.route ? Cn : cl,
                                  to: Re.route ? Re.route : "",
                                  href: Re.href ? Re.href : (He) => He.preventDefault(),
                                  target: Re.href ? "_blank" : "",
                                  rel: (Re.href, "noreferrer"),
                                  minWidth: "11.25rem",
                                  display: "block",
                                  variant: "button",
                                  color: "text",
                                  textTransform: "capitalize",
                                  fontWeight: "regular",
                                  py: 0.625,
                                  px: 2,
                                  sx: ({
                                    palette: { grey: He, dark: dr },
                                    borders: { borderRadius: Ht },
                                  }) => ({
                                    borderRadius: Ht.md,
                                    cursor: "pointer",
                                    transition: "all 300ms linear",
                                    "&:hover": { backgroundColor: He[200], color: dr.main },
                                  }),
                                  children: Re.name,
                                },
                                Re.name
                              )
                            ),
                          ],
                        },
                        pe.name
                      )
                    ),
                    Me !== 0 &&
                      M.jsx(
                        bC,
                        {
                          orientation: "vertical",
                          sx: {
                            position: "absolute",
                            top: "50%",
                            left: "-4px",
                            transform: "translateY(-45%)",
                            height: "90%",
                          },
                        },
                        Oe
                      ),
                  ],
                },
                be
              );
            }),
          },
          ce
        );
      } else
        se &&
          ce === E &&
          (R = se.map((H) => {
            const ve = { component: cl, href: H.href, target: "_blank", rel: "noreferrer" },
              Me = { component: Cn, to: H.route };
            return M.jsxs(
              it,
              {
                ...(H.route ? Me : ve),
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                variant: "button",
                textTransform: "capitalize",
                minWidth: H.description ? "14rem" : "12rem",
                color: H.description ? "dark" : "text",
                fontWeight: H.description ? "bold" : "regular",
                py: H.description ? 1 : 0.625,
                px: 2,
                sx: ({ palette: { grey: be, dark: Oe }, borders: { borderRadius: pe } }) => ({
                  borderRadius: pe.md,
                  cursor: "pointer",
                  transition: "all 300ms linear",
                  "&:hover": {
                    backgroundColor: be[200],
                    color: Oe.main,
                    "& *": { color: Oe.main },
                  },
                }),
                onMouseEnter: ({ currentTarget: be }) => {
                  H.dropdown && (b(be), q(be), X(H.name));
                },
                onMouseLeave: () => {
                  H.dropdown && b(null);
                },
                children: [
                  H.description
                    ? M.jsxs(ct, {
                        children: [
                          H.name,
                          M.jsx(it, {
                            display: "block",
                            variant: "button",
                            color: "text",
                            fontWeight: "regular",
                            sx: { transition: "all 300ms linear" },
                            children: H.description,
                          }),
                        ],
                      })
                    : H.name,
                  H.collapse &&
                    M.jsx(Lr, {
                      fontSize: "small",
                      sx: { fontWeight: "normal", verticalAlign: "middle", mr: -0.5 },
                      children: "keyboard_arrow_right",
                    }),
                ],
              },
              H.name
            );
          }));
      return R;
    }),
    fe = M.jsx(T0, {
      anchorEl: v,
      popperRef: null,
      open: !!v,
      placement: "top-start",
      transition: !0,
      style: { zIndex: 10 },
      modifiers: [{ name: "arrow", enabled: !0, options: { element: V } }],
      onMouseEnter: () => x(w),
      onMouseLeave: () => {
        z || (x(null), j(""));
      },
      children: ({ TransitionProps: ce }) =>
        M.jsx(dh, {
          ...ce,
          sx: { transformOrigin: "left top", background: ({ palette: { white: se } }) => se.main },
          children: M.jsxs(ct, {
            borderRadius: "lg",
            children: [
              M.jsx(it, {
                variant: "h1",
                color: "white",
                children: M.jsx(Lr, { ref: D, sx: { mt: -3 }, children: "arrow_drop_up" }),
              }),
              M.jsx(ct, { shadow: "lg", borderRadius: "lg", p: 2, mt: 2, children: ue }),
            ],
          }),
        }),
    }),
    ye = n.map(({ collapse: ce, columns: se }) =>
      ce && !se
        ? ce.map(({ name: J, collapse: de }) => {
            let R;
            return (
              J === K &&
                (R =
                  de &&
                  de.map((H) => {
                    const ve = { component: cl, href: H.href, target: "_blank", rel: "noreferrer" },
                      Me = { component: Cn, to: H.route };
                    return M.jsxs(
                      it,
                      {
                        ...(H.route ? Me : ve),
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        variant: "button",
                        textTransform: "capitalize",
                        minWidth: H.description ? "14rem" : "12rem",
                        color: H.description ? "dark" : "text",
                        fontWeight: H.description ? "bold" : "regular",
                        py: H.description ? 1 : 0.625,
                        px: 2,
                        sx: ({
                          palette: { grey: be, dark: Oe },
                          borders: { borderRadius: pe },
                        }) => ({
                          borderRadius: pe.md,
                          cursor: "pointer",
                          transition: "all 300ms linear",
                          "&:hover": {
                            backgroundColor: be[200],
                            color: Oe.main,
                            "& *": { color: Oe.main },
                          },
                        }),
                        children: [
                          H.description
                            ? M.jsxs(ct, {
                                children: [
                                  H.name,
                                  M.jsx(it, {
                                    display: "block",
                                    variant: "button",
                                    color: "text",
                                    fontWeight: "regular",
                                    sx: { transition: "all 300ms linear" },
                                    children: H.description,
                                  }),
                                ],
                              })
                            : H.name,
                          H.collapse &&
                            M.jsx(Lr, {
                              fontSize: "small",
                              sx: { fontWeight: "normal", verticalAlign: "middle", mr: -0.5 },
                              children: "keyboard_arrow_right",
                            }),
                        ],
                      },
                      H.name
                    );
                  })),
              R
            );
          })
        : null
    ),
    me = M.jsx(T0, {
      anchorEl: z,
      popperRef: null,
      open: !!z,
      placement: "right-start",
      transition: !0,
      style: { zIndex: 10 },
      onMouseEnter: () => {
        b(O);
      },
      onMouseLeave: () => {
        b(null), X(""), x(null);
      },
      children: ({ TransitionProps: ce }) =>
        M.jsx(dh, {
          ...ce,
          sx: { transformOrigin: "left top", background: ({ palette: { white: se } }) => se.main },
          children: M.jsx(ct, {
            ml: 2.5,
            mt: -2.5,
            borderRadius: "lg",
            children: M.jsx(ct, {
              shadow: "lg",
              borderRadius: "lg",
              py: 1.5,
              px: 1,
              mt: 2,
              children: ye,
            }),
          }),
        }),
    });
  return M.jsxs(al, {
    sx: c ? { position: "sticky", top: 0, zIndex: 10 } : null,
    children: [
      M.jsxs(ct, {
        py: 1,
        px: { xs: 4, sm: i ? 2 : 3, lg: i ? 0 : 2 },
        my: f ? 0 : 2,
        mx: f ? 0 : 3,
        width: f ? "100%" : "calc(100% - 48px)",
        borderRadius: "xl",
        shadow: i ? "none" : "md",
        color: l ? "white" : "dark",
        position: f ? "relative" : "absolute",
        left: 0,
        zIndex: 3,
        sx: ({ palette: { transparent: ce, white: se }, functions: { rgba: J } }) => ({
          backgroundColor: i ? ce.main : J(se.main, 0.8),
          backdropFilter: i ? "none" : "saturate(200%) blur(30px)",
        }),
        children: [
          M.jsxs(ct, {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            children: [
              M.jsx(ct, {
                component: Cn,
                to: "/",
                lineHeight: 1,
                py: i ? 1.5 : 0.75,
                pl: f || i ? 0 : { xs: 0, lg: 1 },
                children: M.jsx(it, {
                  variant: "button",
                  fontWeight: "bold",
                  color: l ? "white" : "dark",
                  children: r,
                }),
              }),
              M.jsx(ct, {
                color: "inherit",
                display: { xs: "none", lg: "flex" },
                ml: "auto",
                mr: m ? "auto" : 0,
                children: Te,
              }),
              M.jsx(ct, {
                ml: { xs: "auto", lg: 0 },
                children:
                  s &&
                  (s.type === "internal"
                    ? M.jsx(Rf, {
                        component: Cn,
                        to: s.route,
                        variant:
                          s.color === "white" || s.color === "default" ? "contained" : "gradient",
                        color: s.color ? s.color : "info",
                        size: "small",
                        children: s.label,
                      })
                    : M.jsx(Rf, {
                        component: "a",
                        href: s.route,
                        target: "_blank",
                        rel: "noreferrer",
                        variant:
                          s.color === "white" || s.color === "default" ? "contained" : "gradient",
                        color: s.color ? s.color : "info",
                        size: "small",
                        children: s.label,
                      })),
              }),
              M.jsx(ct, {
                display: { xs: "inline-block", lg: "none" },
                lineHeight: 0,
                py: 1.5,
                pl: 1.5,
                color: i ? "white" : "inherit",
                sx: { cursor: "pointer" },
                onClick: he,
                children: M.jsx(Lr, { fontSize: "default", children: A ? "close" : "menu" }),
              }),
            ],
          }),
          M.jsx(ct, {
            bgColor: i ? "white" : "transparent",
            shadow: i ? "lg" : "none",
            borderRadius: "xl",
            px: i ? 2 : 0,
            children: ae && M.jsx(Vg, { routes: n, open: A }),
          }),
        ],
      }),
      fe,
      me,
    ],
  });
}
Vh.defaultProps = {
  brand: "Techdawn.Online",
  transparent: !1,
  light: !1,
  action: !1,
  sticky: !1,
  relative: !1,
  center: !1,
};
Vh.propTypes = {
  brand: Ee.string,
  routes: Ee.arrayOf(Ee.shape).isRequired,
  transparent: Ee.bool,
  light: Ee.bool,
  action: Ee.oneOfType([
    Ee.bool,
    Ee.shape({
      type: Ee.oneOf(["external", "internal"]).isRequired,
      route: Ee.string.isRequired,
      color: Ee.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
        "light",
        "default",
        "white",
      ]),
      label: Ee.string.isRequired,
    }),
  ]),
  sticky: Ee.bool,
  relative: Ee.bool,
  center: Ee.bool,
};
function Hg({ content: r }) {
  const { brand: n, socials: i, menus: l, copyright: s } = r;
  return M.jsx(ct, {
    component: "footer",
    children: M.jsx(al, {
      children: M.jsxs(Xt, {
        container: !0,
        spacing: 3,
        children: [
          M.jsxs(Xt, {
            item: !0,
            xs: 12,
            md: 3,
            sx: { ml: "auto", mb: 3 },
            children: [
              M.jsxs(ct, {
                children: [
                  M.jsx(Cn, {
                    to: n.route,
                    children: M.jsx(ct, {
                      component: "img",
                      src: n.image,
                      alt: n.name,
                      maxWidth: "2rem",
                      mb: 2,
                    }),
                  }),
                  M.jsx(it, { variant: "h6", children: n.name }),
                ],
              }),
              M.jsx(ct, {
                display: "flex",
                alignItems: "center",
                mt: 3,
                children: i.map(({ icon: c, link: f }, m) =>
                  M.jsx(
                    it,
                    {
                      component: "a",
                      href: f,
                      target: "_blank",
                      rel: "noreferrer",
                      variant: "h5",
                      color: "dark",
                      opacity: 0.8,
                      mr: m === i.length - 1 ? 0 : 2.5,
                      children: c,
                    },
                    f
                  )
                ),
              }),
            ],
          }),
          l.map(({ name: c, items: f }) =>
            M.jsxs(
              Xt,
              {
                item: !0,
                xs: 6,
                md: 2,
                sx: { mb: 3 },
                children: [
                  M.jsx(it, {
                    display: "block",
                    variant: "button",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                    mb: 1,
                    children: c,
                  }),
                  M.jsx(ct, {
                    component: "ul",
                    p: 0,
                    m: 0,
                    sx: { listStyle: "none" },
                    children: f.map(({ name: m, route: v, href: x }) =>
                      M.jsx(
                        ct,
                        {
                          component: "li",
                          p: 0,
                          m: 0,
                          lineHeight: 1.25,
                          children: x
                            ? M.jsx(it, {
                                component: "a",
                                href: x,
                                target: "_blank",
                                rel: "noreferrer",
                                variant: "button",
                                fontWeight: "regular",
                                textTransform: "capitalize",
                                children: m,
                              })
                            : M.jsx(it, {
                                component: Cn,
                                to: v,
                                variant: "button",
                                fontWeight: "regular",
                                textTransform: "capitalize",
                                children: m,
                              }),
                        },
                        m
                      )
                    ),
                  }),
                ],
              },
              c
            )
          ),
          M.jsx(Xt, { item: !0, xs: 12, sx: { textAlign: "center", my: 3 }, children: s }),
        ],
      }),
    }),
  });
}
Hg.propTypes = { content: Ee.objectOf(Ee.oneOfType([Ee.object, Ee.array])).isRequired };
function oi({ variant: r, color: n, icon: i, title: l, description: s, action: c }) {
  const f = {
    width: "max-content",
    display: "flex",
    alignItems: "center",
    "& .material-icons-round": {
      fontSize: "1.125rem",
      transform: "translateX(3px)",
      transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
    },
    "&:hover .material-icons-round, &:focus .material-icons-round": {
      transform: "translateX(6px)",
    },
  };
  let m = n;
  return (
    r === "gradient" && n !== "light"
      ? (m = "white")
      : r === "gradient" && n === "light" && (m = "dark"),
    M.jsxs(ct, {
      display: { xs: "block", md: "flex" },
      variant: r,
      bgColor: r === "contained" ? "grey-100" : n,
      borderRadius: "xl",
      pt: 3.5,
      pb: 3,
      px: 3,
      children: [
        M.jsx(it, {
          display: "block",
          variant: "h3",
          color: m,
          textGradient: r === "contained",
          mt: -0.625,
          children: typeof i == "string" ? M.jsx(Lr, { children: i }) : i,
        }),
        M.jsxs(ct, {
          pt: { xs: 3, md: 0 },
          pl: { xs: 0, md: 2 },
          lineHeight: 1,
          children: [
            M.jsx(it, {
              display: "block",
              variant: "5",
              color: r === "contained" || n === "light" ? "dark" : "white",
              fontWeight: "bold",
              mb: 1,
              children: l,
            }),
            M.jsx(it, {
              display: "block",
              variant: "body2",
              color: r === "contained" || n === "light" ? "text" : "white",
              mb: 2,
              children: s,
            }),
            c && c.type === "external"
              ? M.jsxs(it, {
                  component: cl,
                  href: c.route,
                  target: "_blank",
                  rel: "noreferrer",
                  variant: "body2",
                  fontWeight: "regular",
                  color: r === "contained" ? n : "white",
                  sx: f,
                  children: [
                    c.label,
                    " ",
                    M.jsx(Lr, { sx: { fontWeight: "bold" }, children: "arrow_forward" }),
                  ],
                })
              : null,
            c && c.type === "internal"
              ? M.jsxs(it, {
                  component: Cn,
                  to: c.route,
                  variant: "body2",
                  fontWeight: "regular",
                  color: r === "contained" ? n : "white",
                  sx: f,
                  children: [
                    c.label,
                    " ",
                    M.jsx(Lr, { sx: { fontWeight: "bold" }, children: "arrow_forward" }),
                  ],
                })
              : null,
          ],
        }),
      ],
    })
  );
}
oi.defaultProps = { variant: "contained", color: "info", action: !1 };
oi.propTypes = {
  variant: Ee.oneOf(["contained", "gradient"]),
  color: Ee.oneOf(["primary", "secondary", "info", "success", "warning", "error", "light", "dark"]),
  icon: Ee.node.isRequired,
  title: Ee.string.isRequired,
  description: Ee.string.isRequired,
  action: Ee.oneOfType([
    Ee.bool,
    Ee.shape({
      type: Ee.oneOf(["external", "internal"]).isRequired,
      route: Ee.string.isRequired,
      label: Ee.string.isRequired,
    }),
  ]),
};
const f4 = [
  { name: "home", icon: M.jsx(Lr, { children: "home" }), route: "/" },
  {
    name: "tools",
    icon: M.jsx(Lr, { children: "build" }),
    collapse: [
      { name: "text tools", description: "Text manipulation tools", route: "/tools/text" },
      { name: "converters", description: "Convert between formats", route: "/tools/converters" },
      { name: "generators", description: "Generate content", route: "/tools/generators" },
      { name: "calculators", description: "Online calculators", route: "/tools/calculators" },
    ],
  },
  { name: "about", icon: M.jsx(Lr, { children: "info" }), route: "/about" },
  { name: "contact", icon: M.jsx(Lr, { children: "mail" }), route: "/contact" },
];
var Js = {},
  Kp = { exports: {} },
  L0;
function Qf() {
  return (
    L0 ||
      ((L0 = 1),
      (function (r) {
        function n(i) {
          return i && i.__esModule ? i : { default: i };
        }
        (r.exports = n), (r.exports.__esModule = !0), (r.exports.default = r.exports);
      })(Kp)),
    Kp.exports
  );
}
var Xp = {};
const d4 = Cy(o4);
var j0;
function Zf() {
  return (
    j0 ||
      ((j0 = 1),
      (function (r) {
        Object.defineProperty(r, "__esModule", { value: !0 }),
          Object.defineProperty(r, "default", {
            enumerable: !0,
            get: function () {
              return n.createSvgIcon;
            },
          });
        var n = d4;
      })(Xp)),
    Xp
  );
}
var I0;
function p4() {
  if (I0) return Js;
  I0 = 1;
  var r = Qf();
  Object.defineProperty(Js, "__esModule", { value: !0 }), (Js.default = void 0), s(bl());
  var n = r(Zf()),
    i = vu();
  function l(f) {
    if (typeof WeakMap != "function") return null;
    var m = new WeakMap(),
      v = new WeakMap();
    return (l = function (x) {
      return x ? v : m;
    })(f);
  }
  function s(f, m) {
    if (f && f.__esModule) return f;
    if (f === null || (typeof f != "object" && typeof f != "function")) return { default: f };
    var v = l(m);
    if (v && v.has(f)) return v.get(f);
    var x = {},
      w = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var k in f)
      if (k !== "default" && Object.prototype.hasOwnProperty.call(f, k)) {
        var E = w ? Object.getOwnPropertyDescriptor(f, k) : null;
        E && (E.get || E.set) ? Object.defineProperty(x, k, E) : (x[k] = f[k]);
      }
    return (x.default = f), v && v.set(f, x), x;
  }
  var c = (0, n.default)(
    (0, i.jsx)("path", {
      d: "M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z",
    }),
    "Facebook"
  );
  return (Js.default = c), Js;
}
var h4 = p4();
const m4 = ui(h4);
var eu = {},
  D0;
function v4() {
  if (D0) return eu;
  D0 = 1;
  var r = Qf();
  Object.defineProperty(eu, "__esModule", { value: !0 }), (eu.default = void 0), s(bl());
  var n = r(Zf()),
    i = vu();
  function l(f) {
    if (typeof WeakMap != "function") return null;
    var m = new WeakMap(),
      v = new WeakMap();
    return (l = function (x) {
      return x ? v : m;
    })(f);
  }
  function s(f, m) {
    if (f && f.__esModule) return f;
    if (f === null || (typeof f != "object" && typeof f != "function")) return { default: f };
    var v = l(m);
    if (v && v.has(f)) return v.get(f);
    var x = {},
      w = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var k in f)
      if (k !== "default" && Object.prototype.hasOwnProperty.call(f, k)) {
        var E = w ? Object.getOwnPropertyDescriptor(f, k) : null;
        E && (E.get || E.set) ? Object.defineProperty(x, k, E) : (x[k] = f[k]);
      }
    return (x.default = f), v && v.set(f, x), x;
  }
  var c = (0, n.default)(
    (0, i.jsx)("path", {
      d: "M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z",
    }),
    "Twitter"
  );
  return (eu.default = c), eu;
}
var g4 = v4();
const y4 = ui(g4);
var tu = {},
  A0;
function x4() {
  if (A0) return tu;
  A0 = 1;
  var r = Qf();
  Object.defineProperty(tu, "__esModule", { value: !0 }), (tu.default = void 0), s(bl());
  var n = r(Zf()),
    i = vu();
  function l(f) {
    if (typeof WeakMap != "function") return null;
    var m = new WeakMap(),
      v = new WeakMap();
    return (l = function (x) {
      return x ? v : m;
    })(f);
  }
  function s(f, m) {
    if (f && f.__esModule) return f;
    if (f === null || (typeof f != "object" && typeof f != "function")) return { default: f };
    var v = l(m);
    if (v && v.has(f)) return v.get(f);
    var x = {},
      w = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var k in f)
      if (k !== "default" && Object.prototype.hasOwnProperty.call(f, k)) {
        var E = w ? Object.getOwnPropertyDescriptor(f, k) : null;
        E && (E.get || E.set) ? Object.defineProperty(x, k, E) : (x[k] = f[k]);
      }
    return (x.default = f), v && v.set(f, x), x;
  }
  var c = (0, n.default)(
    (0, i.jsx)("path", {
      d: "M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27",
    }),
    "GitHub"
  );
  return (tu.default = c), tu;
}
var b4 = x4();
const w4 = ui(b4);
var ru = {},
  F0;
function k4() {
  if (F0) return ru;
  F0 = 1;
  var r = Qf();
  Object.defineProperty(ru, "__esModule", { value: !0 }), (ru.default = void 0);
  var n = r(Zf()),
    i = vu(),
    l = (0, n.default)(
      (0, i.jsx)("path", {
        d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z",
      }),
      "Language"
    );
  return (ru.default = l), ru;
}
var S4 = k4();
const C4 = ui(S4),
  $4 = new Date().getFullYear(),
  E4 = {
    brand: { name: "TechDawn.online", route: "/" },
    socials: [
      { icon: M.jsx(C4, {}), link: "https://techdawn.online" },
      { icon: M.jsx(y4, {}), link: "#" },
      { icon: M.jsx(w4, {}), link: "#" },
      { icon: M.jsx(m4, {}), link: "#" },
    ],
    menus: [
      {
        name: "tools",
        items: [
          { name: "text tools", route: "/tools/text" },
          { name: "converters", route: "/tools/converters" },
          { name: "generators", route: "/tools/generators" },
          { name: "calculators", route: "/tools/calculators" },
        ],
      },
      {
        name: "company",
        items: [
          { name: "about us", route: "/about" },
          { name: "contact us", route: "/contact" },
        ],
      },
      {
        name: "legal",
        items: [
          { name: "terms & conditions", route: "/terms" },
          { name: "privacy policy", route: "/privacy" },
        ],
      },
    ],
    copyright: M.jsxs(it, {
      variant: "button",
      fontWeight: "regular",
      children: [
        "All rights reserved. Copyright © ",
        $4,
        " ",
        M.jsx(it, {
          component: "a",
          href: "https://techdawn.online",
          target: "_blank",
          rel: "noreferrer",
          variant: "button",
          fontWeight: "regular",
          children: "TechDawn.online",
        }),
      ],
    }),
  },
  R4 = "/assets/bg-presentation-CkzQNRSI.jpg";
function Gi() {
  return M.jsxs(M.Fragment, {
    children: [
      M.jsx(Vh, { routes: f4, sticky: !0 }),
      M.jsx(ct, {
        minHeight: "75vh",
        width: "100%",
        sx: {
          backgroundImage: `url(${R4})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        },
        children: M.jsx(al, {
          children: M.jsxs(Xt, {
            container: !0,
            item: !0,
            xs: 12,
            lg: 7,
            justifyContent: "center",
            mx: "auto",
            children: [
              M.jsx(it, {
                variant: "h1",
                color: "white",
                mt: -6,
                mb: 1,
                sx: ({ breakpoints: r, typography: { size: n } }) => ({
                  [r.down("md")]: { fontSize: n["3xl"] },
                }),
                children: "TechDawn.online",
              }),
              M.jsx(it, {
                variant: "body1",
                color: "white",
                textAlign: "center",
                px: { xs: 6, lg: 12 },
                mt: 1,
                children:
                  "Free Online Tools for Developers & Everyone. Text tools, converters, generators, calculators and more - all in one place.",
              }),
            ],
          }),
        }),
      }),
      M.jsxs(Y3, {
        sx: {
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white: r }, functions: { rgba: n } }) => n(r.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl: r } }) => r,
        },
        children: [
          M.jsx(al, {
            sx: { mt: 6 },
            children: M.jsxs(Xt, {
              container: !0,
              spacing: 3,
              children: [
                M.jsx(Xt, {
                  item: !0,
                  xs: 12,
                  lg: 4,
                  children: M.jsx(oi, {
                    variant: "gradient",
                    color: "info",
                    icon: "text_fields",
                    title: "Text Tools",
                    description:
                      "Text manipulation tools - case converter, word counter, string utilities and more.",
                    action: { type: "internal", route: "/tools/text", label: "Explore" },
                  }),
                }),
                M.jsx(Xt, {
                  item: !0,
                  xs: 12,
                  lg: 4,
                  children: M.jsx(oi, {
                    color: "info",
                    icon: "swap_horiz",
                    title: "Converters",
                    description:
                      "Convert between different formats - JSON, XML, CSV, Base64, and more.",
                    action: { type: "internal", route: "/tools/converters", label: "Explore" },
                  }),
                }),
                M.jsx(Xt, {
                  item: !0,
                  xs: 12,
                  lg: 4,
                  children: M.jsx(oi, {
                    color: "info",
                    icon: "auto_awesome",
                    title: "Generators",
                    description:
                      "Generate passwords, UUIDs, lorem ipsum, QR codes and other content.",
                    action: { type: "internal", route: "/tools/generators", label: "Explore" },
                  }),
                }),
              ],
            }),
          }),
          M.jsx(al, {
            sx: { mt: 4 },
            children: M.jsxs(Xt, {
              container: !0,
              spacing: 3,
              children: [
                M.jsx(Xt, {
                  item: !0,
                  xs: 12,
                  lg: 4,
                  children: M.jsx(oi, {
                    color: "info",
                    icon: "calculate",
                    title: "Calculators",
                    description:
                      "Online calculators for math, percentages, dates, and unit conversions.",
                    action: { type: "internal", route: "/tools/calculators", label: "Explore" },
                  }),
                }),
                M.jsx(Xt, {
                  item: !0,
                  xs: 12,
                  lg: 4,
                  children: M.jsx(oi, {
                    color: "info",
                    icon: "code",
                    title: "Developer Tools",
                    description:
                      "Code formatters, minifiers, validators and other developer utilities.",
                    action: { type: "internal", route: "/tools/dev", label: "Explore" },
                  }),
                }),
                M.jsx(Xt, {
                  item: !0,
                  xs: 12,
                  lg: 4,
                  children: M.jsx(oi, {
                    color: "info",
                    icon: "image",
                    title: "Image Tools",
                    description:
                      "Image compression, resizing, format conversion and editing tools.",
                    action: { type: "internal", route: "/tools/image", label: "Explore" },
                  }),
                }),
              ],
            }),
          }),
          M.jsx(ct, {
            pt: 12,
            pb: 6,
            children: M.jsx(al, {
              children: M.jsx(Xt, {
                container: !0,
                justifyContent: "center",
                children: M.jsxs(Xt, {
                  item: !0,
                  xs: 12,
                  lg: 8,
                  textAlign: "center",
                  children: [
                    M.jsx(it, {
                      variant: "h4",
                      fontWeight: "bold",
                      mb: 0.5,
                      children: "All Tools. Free. Forever.",
                    }),
                    M.jsx(it, {
                      variant: "body1",
                      color: "text",
                      children:
                        "TechDawn.online provides free online tools with no registration required.",
                    }),
                  ],
                }),
              }),
            }),
          }),
        ],
      }),
      M.jsx(ct, { pt: 6, px: 1, mt: 6, children: M.jsx(Hg, { content: E4 }) }),
    ],
  });
}
function _4() {
  const { pathname: r } = yu();
  return (
    N.useEffect(() => {
      (document.documentElement.scrollTop = 0), (document.scrollingElement.scrollTop = 0);
    }, [r]),
    M.jsxs(Kb, {
      theme: e5,
      children: [
        M.jsx(Jb, {}),
        M.jsxs(m1, {
          children: [
            M.jsx(go, { path: "/", element: M.jsx(Gi, {}) }),
            M.jsx(go, { path: "/tools/text", element: M.jsx(Gi, {}) }),
            M.jsx(go, { path: "/tools/converters", element: M.jsx(Gi, {}) }),
            M.jsx(go, { path: "/tools/generators", element: M.jsx(Gi, {}) }),
            M.jsx(go, { path: "/tools/calculators", element: M.jsx(Gi, {}) }),
            M.jsx(go, { path: "/about", element: M.jsx(Gi, {}) }),
            M.jsx(go, { path: "/contact", element: M.jsx(Gi, {}) }),
            M.jsx(go, { path: "*", element: M.jsx(p1, { to: "/" }) }),
          ],
        }),
      ],
    })
  );
}
const P4 = document.getElementById("root"),
  T4 = Oy.createRoot(P4);
T4.render(M.jsx(b1, { children: M.jsx(_4, {}) }));
