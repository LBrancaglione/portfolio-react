(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function km(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ff = { exports: {} },
  Vo = {},
  zf = { exports: {} },
  F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ni = Symbol.for("react.element"),
  Pm = Symbol.for("react.portal"),
  Cm = Symbol.for("react.fragment"),
  Tm = Symbol.for("react.strict_mode"),
  Em = Symbol.for("react.profiler"),
  Lm = Symbol.for("react.provider"),
  Vm = Symbol.for("react.context"),
  Mm = Symbol.for("react.forward_ref"),
  jm = Symbol.for("react.suspense"),
  Dm = Symbol.for("react.memo"),
  Am = Symbol.for("react.lazy"),
  pu = Symbol.iterator;
function Rm(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (pu && e[pu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var If = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Bf = Object.assign,
  Uf = {};
function tr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Uf),
    (this.updater = n || If);
}
tr.prototype.isReactComponent = {};
tr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
tr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function $f() {}
$f.prototype = tr.prototype;
function Zl(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Uf),
    (this.updater = n || If);
}
var ql = (Zl.prototype = new $f());
ql.constructor = Zl;
Bf(ql, tr.prototype);
ql.isPureReactComponent = !0;
var mu = Array.isArray,
  Hf = Object.prototype.hasOwnProperty,
  Jl = { current: null },
  Wf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Gf(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Hf.call(t, r) && !Wf.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: ni,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Jl.current,
  };
}
function Nm(e, t) {
  return {
    $$typeof: ni,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function bl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ni;
}
function _m(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var gu = /\/+/g;
function rs(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? _m("" + e.key)
    : t.toString(36);
}
function Ni(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ni:
          case Pm:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + rs(s, 0) : r),
      mu(i)
        ? ((n = ""),
          e != null && (n = e.replace(gu, "$&/") + "/"),
          Ni(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (bl(i) &&
            (i = Nm(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(gu, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), mu(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var a = r + rs(o, l);
      s += Ni(o, t, n, a, i);
    }
  else if (((a = Rm(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + rs(o, l++)), (s += Ni(o, t, n, a, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function di(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Ni(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function Om(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var we = { current: null },
  _i = { transition: null },
  Fm = {
    ReactCurrentDispatcher: we,
    ReactCurrentBatchConfig: _i,
    ReactCurrentOwner: Jl,
  };
F.Children = {
  map: di,
  forEach: function (e, t, n) {
    di(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      di(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      di(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!bl(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
F.Component = tr;
F.Fragment = Cm;
F.Profiler = Em;
F.PureComponent = Zl;
F.StrictMode = Tm;
F.Suspense = jm;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fm;
F.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Bf({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = Jl.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      Hf.call(t, a) &&
        !Wf.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: ni, type: e.type, key: i, ref: o, props: r, _owner: s };
};
F.createContext = function (e) {
  return (
    (e = {
      $$typeof: Vm,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Lm, _context: e }),
    (e.Consumer = e)
  );
};
F.createElement = Gf;
F.createFactory = function (e) {
  var t = Gf.bind(null, e);
  return (t.type = e), t;
};
F.createRef = function () {
  return { current: null };
};
F.forwardRef = function (e) {
  return { $$typeof: Mm, render: e };
};
F.isValidElement = bl;
F.lazy = function (e) {
  return { $$typeof: Am, _payload: { _status: -1, _result: e }, _init: Om };
};
F.memo = function (e, t) {
  return { $$typeof: Dm, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function (e) {
  var t = _i.transition;
  _i.transition = {};
  try {
    e();
  } finally {
    _i.transition = t;
  }
};
F.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
F.useCallback = function (e, t) {
  return we.current.useCallback(e, t);
};
F.useContext = function (e) {
  return we.current.useContext(e);
};
F.useDebugValue = function () {};
F.useDeferredValue = function (e) {
  return we.current.useDeferredValue(e);
};
F.useEffect = function (e, t) {
  return we.current.useEffect(e, t);
};
F.useId = function () {
  return we.current.useId();
};
F.useImperativeHandle = function (e, t, n) {
  return we.current.useImperativeHandle(e, t, n);
};
F.useInsertionEffect = function (e, t) {
  return we.current.useInsertionEffect(e, t);
};
F.useLayoutEffect = function (e, t) {
  return we.current.useLayoutEffect(e, t);
};
F.useMemo = function (e, t) {
  return we.current.useMemo(e, t);
};
F.useReducer = function (e, t, n) {
  return we.current.useReducer(e, t, n);
};
F.useRef = function (e) {
  return we.current.useRef(e);
};
F.useState = function (e) {
  return we.current.useState(e);
};
F.useSyncExternalStore = function (e, t, n) {
  return we.current.useSyncExternalStore(e, t, n);
};
F.useTransition = function () {
  return we.current.useTransition();
};
F.version = "18.2.0";
zf.exports = F;
var M = zf.exports;
const ea = km(M);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zm = M,
  Im = Symbol.for("react.element"),
  Bm = Symbol.for("react.fragment"),
  Um = Object.prototype.hasOwnProperty,
  $m = zm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Hm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Kf(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Um.call(t, r) && !Hm.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Im,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: $m.current,
  };
}
Vo.Fragment = Bm;
Vo.jsx = Kf;
Vo.jsxs = Kf;
Ff.exports = Vo;
var w = Ff.exports,
  $s = {},
  Qf = { exports: {} },
  _e = {},
  Yf = { exports: {} },
  Xf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(L, N) {
    var O = L.length;
    L.push(N);
    e: for (; 0 < O; ) {
      var A = (O - 1) >>> 1,
        W = L[A];
      if (0 < i(W, N)) (L[A] = N), (L[O] = W), (O = A);
      else break e;
    }
  }
  function n(L) {
    return L.length === 0 ? null : L[0];
  }
  function r(L) {
    if (L.length === 0) return null;
    var N = L[0],
      O = L.pop();
    if (O !== N) {
      L[0] = O;
      e: for (var A = 0, W = L.length, Zt = W >>> 1; A < Zt; ) {
        var tt = 2 * (A + 1) - 1,
          Sn = L[tt],
          Me = tt + 1,
          qt = L[Me];
        if (0 > i(Sn, O))
          Me < W && 0 > i(qt, Sn)
            ? ((L[A] = qt), (L[Me] = O), (A = Me))
            : ((L[A] = Sn), (L[tt] = O), (A = tt));
        else if (Me < W && 0 > i(qt, O)) (L[A] = qt), (L[Me] = O), (A = Me);
        else break e;
      }
    }
    return N;
  }
  function i(L, N) {
    var O = L.sortIndex - N.sortIndex;
    return O !== 0 ? O : L.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    m = !1,
    y = !1,
    v = !1,
    E = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(L) {
    for (var N = n(u); N !== null; ) {
      if (N.callback === null) r(u);
      else if (N.startTime <= L)
        r(u), (N.sortIndex = N.expirationTime), t(a, N);
      else break;
      N = n(u);
    }
  }
  function x(L) {
    if (((v = !1), p(L), !y))
      if (n(a) !== null) (y = !0), Fe(S);
      else {
        var N = n(u);
        N !== null && et(x, N.startTime - L);
      }
  }
  function S(L, N) {
    (y = !1), v && ((v = !1), g(P), (P = -1)), (m = !0);
    var O = d;
    try {
      for (
        p(N), f = n(a);
        f !== null && (!(f.expirationTime > N) || (L && !J()));

      ) {
        var A = f.callback;
        if (typeof A == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var W = A(f.expirationTime <= N);
          (N = e.unstable_now()),
            typeof W == "function" ? (f.callback = W) : f === n(a) && r(a),
            p(N);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var Zt = !0;
      else {
        var tt = n(u);
        tt !== null && et(x, tt.startTime - N), (Zt = !1);
      }
      return Zt;
    } finally {
      (f = null), (d = O), (m = !1);
    }
  }
  var T = !1,
    C = null,
    P = -1,
    R = 5,
    D = -1;
  function J() {
    return !(e.unstable_now() - D < R);
  }
  function ke() {
    if (C !== null) {
      var L = e.unstable_now();
      D = L;
      var N = !0;
      try {
        N = C(!0, L);
      } finally {
        N ? Pe() : ((T = !1), (C = null));
      }
    } else T = !1;
  }
  var Pe;
  if (typeof h == "function")
    Pe = function () {
      h(ke);
    };
  else if (typeof MessageChannel < "u") {
    var b = new MessageChannel(),
      ee = b.port2;
    (b.port1.onmessage = ke),
      (Pe = function () {
        ee.postMessage(null);
      });
  } else
    Pe = function () {
      E(ke, 0);
    };
  function Fe(L) {
    (C = L), T || ((T = !0), Pe());
  }
  function et(L, N) {
    P = E(function () {
      L(e.unstable_now());
    }, N);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (L) {
      L.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || m || ((y = !0), Fe(S));
    }),
    (e.unstable_forceFrameRate = function (L) {
      0 > L || 125 < L
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (R = 0 < L ? Math.floor(1e3 / L) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (L) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = d;
      }
      var O = d;
      d = N;
      try {
        return L();
      } finally {
        d = O;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (L, N) {
      switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          L = 3;
      }
      var O = d;
      d = L;
      try {
        return N();
      } finally {
        d = O;
      }
    }),
    (e.unstable_scheduleCallback = function (L, N, O) {
      var A = e.unstable_now();
      switch (
        (typeof O == "object" && O !== null
          ? ((O = O.delay), (O = typeof O == "number" && 0 < O ? A + O : A))
          : (O = A),
        L)
      ) {
        case 1:
          var W = -1;
          break;
        case 2:
          W = 250;
          break;
        case 5:
          W = 1073741823;
          break;
        case 4:
          W = 1e4;
          break;
        default:
          W = 5e3;
      }
      return (
        (W = O + W),
        (L = {
          id: c++,
          callback: N,
          priorityLevel: L,
          startTime: O,
          expirationTime: W,
          sortIndex: -1,
        }),
        O > A
          ? ((L.sortIndex = O),
            t(u, L),
            n(a) === null &&
              L === n(u) &&
              (v ? (g(P), (P = -1)) : (v = !0), et(x, O - A)))
          : ((L.sortIndex = W), t(a, L), y || m || ((y = !0), Fe(S))),
        L
      );
    }),
    (e.unstable_shouldYield = J),
    (e.unstable_wrapCallback = function (L) {
      var N = d;
      return function () {
        var O = d;
        d = N;
        try {
          return L.apply(this, arguments);
        } finally {
          d = O;
        }
      };
    });
})(Xf);
Yf.exports = Xf;
var Wm = Yf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zf = M,
  Re = Wm;
function k(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var qf = new Set(),
  _r = {};
function yn(e, t) {
  Kn(e, t), Kn(e + "Capture", t);
}
function Kn(e, t) {
  for (_r[e] = t, e = 0; e < t.length; e++) qf.add(t[e]);
}
var yt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Hs = Object.prototype.hasOwnProperty,
  Gm =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  yu = {},
  vu = {};
function Km(e) {
  return Hs.call(vu, e)
    ? !0
    : Hs.call(yu, e)
    ? !1
    : Gm.test(e)
    ? (vu[e] = !0)
    : ((yu[e] = !0), !1);
}
function Qm(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Ym(e, t, n, r) {
  if (t === null || typeof t > "u" || Qm(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
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
function Se(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    fe[e] = new Se(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  fe[t] = new Se(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  fe[e] = new Se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  fe[e] = new Se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    fe[e] = new Se(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  fe[e] = new Se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  fe[e] = new Se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  fe[e] = new Se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  fe[e] = new Se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ta = /[\-:]([a-z])/g;
function na(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ta, na);
    fe[t] = new Se(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ta, na);
    fe[t] = new Se(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ta, na);
  fe[t] = new Se(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  fe[e] = new Se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
fe.xlinkHref = new Se(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  fe[e] = new Se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ra(e, t, n, r) {
  var i = fe.hasOwnProperty(t) ? fe[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Ym(t, n, i, r) && (n = null),
    r || i === null
      ? Km(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var St = Zf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  hi = Symbol.for("react.element"),
  Cn = Symbol.for("react.portal"),
  Tn = Symbol.for("react.fragment"),
  ia = Symbol.for("react.strict_mode"),
  Ws = Symbol.for("react.profiler"),
  Jf = Symbol.for("react.provider"),
  bf = Symbol.for("react.context"),
  oa = Symbol.for("react.forward_ref"),
  Gs = Symbol.for("react.suspense"),
  Ks = Symbol.for("react.suspense_list"),
  sa = Symbol.for("react.memo"),
  Tt = Symbol.for("react.lazy"),
  ed = Symbol.for("react.offscreen"),
  xu = Symbol.iterator;
function ir(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (xu && e[xu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var X = Object.assign,
  is;
function mr(e) {
  if (is === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      is = (t && t[1]) || "";
    }
  return (
    `
` +
    is +
    e
  );
}
var os = !1;
function ss(e, t) {
  if (!e || os) return "";
  os = !0;
  var n = Error.prepareStackTrace;
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
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          l = o.length - 1;
        1 <= s && 0 <= l && i[s] !== o[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (i[s] !== o[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || i[s] !== o[l])) {
                var a =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (os = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? mr(e) : "";
}
function Xm(e) {
  switch (e.tag) {
    case 5:
      return mr(e.type);
    case 16:
      return mr("Lazy");
    case 13:
      return mr("Suspense");
    case 19:
      return mr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ss(e.type, !1)), e;
    case 11:
      return (e = ss(e.type.render, !1)), e;
    case 1:
      return (e = ss(e.type, !0)), e;
    default:
      return "";
  }
}
function Qs(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Tn:
      return "Fragment";
    case Cn:
      return "Portal";
    case Ws:
      return "Profiler";
    case ia:
      return "StrictMode";
    case Gs:
      return "Suspense";
    case Ks:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case bf:
        return (e.displayName || "Context") + ".Consumer";
      case Jf:
        return (e._context.displayName || "Context") + ".Provider";
      case oa:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case sa:
        return (
          (t = e.displayName || null), t !== null ? t : Qs(e.type) || "Memo"
        );
      case Tt:
        (t = e._payload), (e = e._init);
        try {
          return Qs(e(t));
        } catch {}
    }
  return null;
}
function Zm(e) {
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
      return Qs(t);
    case 8:
      return t === ia ? "StrictMode" : "Mode";
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
function $t(e) {
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
function td(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function qm(e) {
  var t = td(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function pi(e) {
  e._valueTracker || (e._valueTracker = qm(e));
}
function nd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = td(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Zi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ys(e, t) {
  var n = t.checked;
  return X({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function wu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = $t(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function rd(e, t) {
  (t = t.checked), t != null && ra(e, "checked", t, !1);
}
function Xs(e, t) {
  rd(e, t);
  var n = $t(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Zs(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Zs(e, t.type, $t(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Su(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Zs(e, t, n) {
  (t !== "number" || Zi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var gr = Array.isArray;
function Bn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + $t(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function qs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return X({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ku(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if (gr(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: $t(n) };
}
function id(e, t) {
  var n = $t(t.value),
    r = $t(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Pu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function od(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Js(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? od(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var mi,
  sd = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        mi = mi || document.createElement("div"),
          mi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = mi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Or(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var wr = {
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
  Jm = ["Webkit", "ms", "Moz", "O"];
Object.keys(wr).forEach(function (e) {
  Jm.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (wr[t] = wr[e]);
  });
});
function ld(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (wr.hasOwnProperty(e) && wr[e])
    ? ("" + t).trim()
    : t + "px";
}
function ad(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = ld(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var bm = X(
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
function bs(e, t) {
  if (t) {
    if (bm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function el(e, t) {
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
var tl = null;
function la(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var nl = null,
  Un = null,
  $n = null;
function Cu(e) {
  if ((e = oi(e))) {
    if (typeof nl != "function") throw Error(k(280));
    var t = e.stateNode;
    t && ((t = Ro(t)), nl(e.stateNode, e.type, t));
  }
}
function ud(e) {
  Un ? ($n ? $n.push(e) : ($n = [e])) : (Un = e);
}
function cd() {
  if (Un) {
    var e = Un,
      t = $n;
    if ((($n = Un = null), Cu(e), t)) for (e = 0; e < t.length; e++) Cu(t[e]);
  }
}
function fd(e, t) {
  return e(t);
}
function dd() {}
var ls = !1;
function hd(e, t, n) {
  if (ls) return e(t, n);
  ls = !0;
  try {
    return fd(e, t, n);
  } finally {
    (ls = !1), (Un !== null || $n !== null) && (dd(), cd());
  }
}
function Fr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ro(n);
  if (r === null) return null;
  n = r[t];
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(k(231, t, typeof n));
  return n;
}
var rl = !1;
if (yt)
  try {
    var or = {};
    Object.defineProperty(or, "passive", {
      get: function () {
        rl = !0;
      },
    }),
      window.addEventListener("test", or, or),
      window.removeEventListener("test", or, or);
  } catch {
    rl = !1;
  }
function eg(e, t, n, r, i, o, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Sr = !1,
  qi = null,
  Ji = !1,
  il = null,
  tg = {
    onError: function (e) {
      (Sr = !0), (qi = e);
    },
  };
function ng(e, t, n, r, i, o, s, l, a) {
  (Sr = !1), (qi = null), eg.apply(tg, arguments);
}
function rg(e, t, n, r, i, o, s, l, a) {
  if ((ng.apply(this, arguments), Sr)) {
    if (Sr) {
      var u = qi;
      (Sr = !1), (qi = null);
    } else throw Error(k(198));
    Ji || ((Ji = !0), (il = u));
  }
}
function vn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function pd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Tu(e) {
  if (vn(e) !== e) throw Error(k(188));
}
function ig(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = vn(e)), t === null)) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Tu(i), e;
        if (o === r) return Tu(i), t;
        o = o.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, l = i.child; l; ) {
        if (l === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (l === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = o.child; l; ) {
          if (l === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (l === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function md(e) {
  return (e = ig(e)), e !== null ? gd(e) : null;
}
function gd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = gd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var yd = Re.unstable_scheduleCallback,
  Eu = Re.unstable_cancelCallback,
  og = Re.unstable_shouldYield,
  sg = Re.unstable_requestPaint,
  ne = Re.unstable_now,
  lg = Re.unstable_getCurrentPriorityLevel,
  aa = Re.unstable_ImmediatePriority,
  vd = Re.unstable_UserBlockingPriority,
  bi = Re.unstable_NormalPriority,
  ag = Re.unstable_LowPriority,
  xd = Re.unstable_IdlePriority,
  Mo = null,
  st = null;
function ug(e) {
  if (st && typeof st.onCommitFiberRoot == "function")
    try {
      st.onCommitFiberRoot(Mo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ze = Math.clz32 ? Math.clz32 : dg,
  cg = Math.log,
  fg = Math.LN2;
function dg(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((cg(e) / fg) | 0)) | 0;
}
var gi = 64,
  yi = 4194304;
function yr(e) {
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
function eo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~i;
    l !== 0 ? (r = yr(l)) : ((o &= s), o !== 0 && (r = yr(o)));
  } else (s = n & ~i), s !== 0 ? (r = yr(s)) : o !== 0 && (r = yr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ze(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function hg(e, t) {
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
function pg(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - Ze(o),
      l = 1 << s,
      a = i[s];
    a === -1
      ? (!(l & n) || l & r) && (i[s] = hg(l, t))
      : a <= t && (e.expiredLanes |= l),
      (o &= ~l);
  }
}
function ol(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function wd() {
  var e = gi;
  return (gi <<= 1), !(gi & 4194240) && (gi = 64), e;
}
function as(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ri(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ze(t)),
    (e[t] = n);
}
function mg(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Ze(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function ua(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ze(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var B = 0;
function Sd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var kd,
  ca,
  Pd,
  Cd,
  Td,
  sl = !1,
  vi = [],
  At = null,
  Rt = null,
  Nt = null,
  zr = new Map(),
  Ir = new Map(),
  Vt = [],
  gg =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Lu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      At = null;
      break;
    case "dragenter":
    case "dragleave":
      Rt = null;
      break;
    case "mouseover":
    case "mouseout":
      Nt = null;
      break;
    case "pointerover":
    case "pointerout":
      zr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ir.delete(t.pointerId);
  }
}
function sr(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = oi(t)), t !== null && ca(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function yg(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (At = sr(At, e, t, n, r, i)), !0;
    case "dragenter":
      return (Rt = sr(Rt, e, t, n, r, i)), !0;
    case "mouseover":
      return (Nt = sr(Nt, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return zr.set(o, sr(zr.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Ir.set(o, sr(Ir.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Ed(e) {
  var t = sn(e.target);
  if (t !== null) {
    var n = vn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = pd(n)), t !== null)) {
          (e.blockedOn = t),
            Td(e.priority, function () {
              Pd(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Oi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ll(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (tl = r), n.target.dispatchEvent(r), (tl = null);
    } else return (t = oi(n)), t !== null && ca(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Vu(e, t, n) {
  Oi(e) && n.delete(t);
}
function vg() {
  (sl = !1),
    At !== null && Oi(At) && (At = null),
    Rt !== null && Oi(Rt) && (Rt = null),
    Nt !== null && Oi(Nt) && (Nt = null),
    zr.forEach(Vu),
    Ir.forEach(Vu);
}
function lr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    sl ||
      ((sl = !0),
      Re.unstable_scheduleCallback(Re.unstable_NormalPriority, vg)));
}
function Br(e) {
  function t(i) {
    return lr(i, e);
  }
  if (0 < vi.length) {
    lr(vi[0], e);
    for (var n = 1; n < vi.length; n++) {
      var r = vi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    At !== null && lr(At, e),
      Rt !== null && lr(Rt, e),
      Nt !== null && lr(Nt, e),
      zr.forEach(t),
      Ir.forEach(t),
      n = 0;
    n < Vt.length;
    n++
  )
    (r = Vt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Vt.length && ((n = Vt[0]), n.blockedOn === null); )
    Ed(n), n.blockedOn === null && Vt.shift();
}
var Hn = St.ReactCurrentBatchConfig,
  to = !0;
function xg(e, t, n, r) {
  var i = B,
    o = Hn.transition;
  Hn.transition = null;
  try {
    (B = 1), fa(e, t, n, r);
  } finally {
    (B = i), (Hn.transition = o);
  }
}
function wg(e, t, n, r) {
  var i = B,
    o = Hn.transition;
  Hn.transition = null;
  try {
    (B = 4), fa(e, t, n, r);
  } finally {
    (B = i), (Hn.transition = o);
  }
}
function fa(e, t, n, r) {
  if (to) {
    var i = ll(e, t, n, r);
    if (i === null) vs(e, t, r, no, n), Lu(e, r);
    else if (yg(i, e, t, n, r)) r.stopPropagation();
    else if ((Lu(e, r), t & 4 && -1 < gg.indexOf(e))) {
      for (; i !== null; ) {
        var o = oi(i);
        if (
          (o !== null && kd(o),
          (o = ll(e, t, n, r)),
          o === null && vs(e, t, r, no, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else vs(e, t, r, null, n);
  }
}
var no = null;
function ll(e, t, n, r) {
  if (((no = null), (e = la(r)), (e = sn(e)), e !== null))
    if (((t = vn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = pd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (no = e), null;
}
function Ld(e) {
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
      switch (lg()) {
        case aa:
          return 1;
        case vd:
          return 4;
        case bi:
        case ag:
          return 16;
        case xd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var jt = null,
  da = null,
  Fi = null;
function Vd() {
  if (Fi) return Fi;
  var e,
    t = da,
    n = t.length,
    r,
    i = "value" in jt ? jt.value : jt.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (Fi = i.slice(e, 1 < r ? 1 - r : void 0));
}
function zi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function xi() {
  return !0;
}
function Mu() {
  return !1;
}
function Oe(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? xi
        : Mu),
      (this.isPropagationStopped = Mu),
      this
    );
  }
  return (
    X(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = xi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = xi));
      },
      persist: function () {},
      isPersistent: xi,
    }),
    t
  );
}
var nr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ha = Oe(nr),
  ii = X({}, nr, { view: 0, detail: 0 }),
  Sg = Oe(ii),
  us,
  cs,
  ar,
  jo = X({}, ii, {
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
    getModifierState: pa,
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
        : (e !== ar &&
            (ar && e.type === "mousemove"
              ? ((us = e.screenX - ar.screenX), (cs = e.screenY - ar.screenY))
              : (cs = us = 0),
            (ar = e)),
          us);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : cs;
    },
  }),
  ju = Oe(jo),
  kg = X({}, jo, { dataTransfer: 0 }),
  Pg = Oe(kg),
  Cg = X({}, ii, { relatedTarget: 0 }),
  fs = Oe(Cg),
  Tg = X({}, nr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Eg = Oe(Tg),
  Lg = X({}, nr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Vg = Oe(Lg),
  Mg = X({}, nr, { data: 0 }),
  Du = Oe(Mg),
  jg = {
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
  Dg = {
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
  Ag = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Rg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Ag[e]) ? !!t[e] : !1;
}
function pa() {
  return Rg;
}
var Ng = X({}, ii, {
    key: function (e) {
      if (e.key) {
        var t = jg[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = zi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Dg[e.keyCode] || "Unidentified"
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
    getModifierState: pa,
    charCode: function (e) {
      return e.type === "keypress" ? zi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? zi(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  _g = Oe(Ng),
  Og = X({}, jo, {
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
  Au = Oe(Og),
  Fg = X({}, ii, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: pa,
  }),
  zg = Oe(Fg),
  Ig = X({}, nr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Bg = Oe(Ig),
  Ug = X({}, jo, {
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
  $g = Oe(Ug),
  Hg = [9, 13, 27, 32],
  ma = yt && "CompositionEvent" in window,
  kr = null;
yt && "documentMode" in document && (kr = document.documentMode);
var Wg = yt && "TextEvent" in window && !kr,
  Md = yt && (!ma || (kr && 8 < kr && 11 >= kr)),
  Ru = String.fromCharCode(32),
  Nu = !1;
function jd(e, t) {
  switch (e) {
    case "keyup":
      return Hg.indexOf(t.keyCode) !== -1;
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
function Dd(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var En = !1;
function Gg(e, t) {
  switch (e) {
    case "compositionend":
      return Dd(t);
    case "keypress":
      return t.which !== 32 ? null : ((Nu = !0), Ru);
    case "textInput":
      return (e = t.data), e === Ru && Nu ? null : e;
    default:
      return null;
  }
}
function Kg(e, t) {
  if (En)
    return e === "compositionend" || (!ma && jd(e, t))
      ? ((e = Vd()), (Fi = da = jt = null), (En = !1), e)
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
      return Md && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Qg = {
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
function _u(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Qg[e.type] : t === "textarea";
}
function Ad(e, t, n, r) {
  ud(r),
    (t = ro(t, "onChange")),
    0 < t.length &&
      ((n = new ha("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Pr = null,
  Ur = null;
function Yg(e) {
  Hd(e, 0);
}
function Do(e) {
  var t = Mn(e);
  if (nd(t)) return e;
}
function Xg(e, t) {
  if (e === "change") return t;
}
var Rd = !1;
if (yt) {
  var ds;
  if (yt) {
    var hs = "oninput" in document;
    if (!hs) {
      var Ou = document.createElement("div");
      Ou.setAttribute("oninput", "return;"),
        (hs = typeof Ou.oninput == "function");
    }
    ds = hs;
  } else ds = !1;
  Rd = ds && (!document.documentMode || 9 < document.documentMode);
}
function Fu() {
  Pr && (Pr.detachEvent("onpropertychange", Nd), (Ur = Pr = null));
}
function Nd(e) {
  if (e.propertyName === "value" && Do(Ur)) {
    var t = [];
    Ad(t, Ur, e, la(e)), hd(Yg, t);
  }
}
function Zg(e, t, n) {
  e === "focusin"
    ? (Fu(), (Pr = t), (Ur = n), Pr.attachEvent("onpropertychange", Nd))
    : e === "focusout" && Fu();
}
function qg(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Do(Ur);
}
function Jg(e, t) {
  if (e === "click") return Do(t);
}
function bg(e, t) {
  if (e === "input" || e === "change") return Do(t);
}
function e0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Je = typeof Object.is == "function" ? Object.is : e0;
function $r(e, t) {
  if (Je(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Hs.call(t, i) || !Je(e[i], t[i])) return !1;
  }
  return !0;
}
function zu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Iu(e, t) {
  var n = zu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = zu(n);
  }
}
function _d(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? _d(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Od() {
  for (var e = window, t = Zi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Zi(e.document);
  }
  return t;
}
function ga(e) {
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
function t0(e) {
  var t = Od(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    _d(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ga(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Iu(n, o));
        var s = Iu(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var n0 = yt && "documentMode" in document && 11 >= document.documentMode,
  Ln = null,
  al = null,
  Cr = null,
  ul = !1;
function Bu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ul ||
    Ln == null ||
    Ln !== Zi(r) ||
    ((r = Ln),
    "selectionStart" in r && ga(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Cr && $r(Cr, r)) ||
      ((Cr = r),
      (r = ro(al, "onSelect")),
      0 < r.length &&
        ((t = new ha("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ln))));
}
function wi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Vn = {
    animationend: wi("Animation", "AnimationEnd"),
    animationiteration: wi("Animation", "AnimationIteration"),
    animationstart: wi("Animation", "AnimationStart"),
    transitionend: wi("Transition", "TransitionEnd"),
  },
  ps = {},
  Fd = {};
yt &&
  ((Fd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Vn.animationend.animation,
    delete Vn.animationiteration.animation,
    delete Vn.animationstart.animation),
  "TransitionEvent" in window || delete Vn.transitionend.transition);
function Ao(e) {
  if (ps[e]) return ps[e];
  if (!Vn[e]) return e;
  var t = Vn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Fd) return (ps[e] = t[n]);
  return e;
}
var zd = Ao("animationend"),
  Id = Ao("animationiteration"),
  Bd = Ao("animationstart"),
  Ud = Ao("transitionend"),
  $d = new Map(),
  Uu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Kt(e, t) {
  $d.set(e, t), yn(t, [e]);
}
for (var ms = 0; ms < Uu.length; ms++) {
  var gs = Uu[ms],
    r0 = gs.toLowerCase(),
    i0 = gs[0].toUpperCase() + gs.slice(1);
  Kt(r0, "on" + i0);
}
Kt(zd, "onAnimationEnd");
Kt(Id, "onAnimationIteration");
Kt(Bd, "onAnimationStart");
Kt("dblclick", "onDoubleClick");
Kt("focusin", "onFocus");
Kt("focusout", "onBlur");
Kt(Ud, "onTransitionEnd");
Kn("onMouseEnter", ["mouseout", "mouseover"]);
Kn("onMouseLeave", ["mouseout", "mouseover"]);
Kn("onPointerEnter", ["pointerout", "pointerover"]);
Kn("onPointerLeave", ["pointerout", "pointerover"]);
yn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
yn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
yn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
yn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
yn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
yn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var vr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  o0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(vr));
function $u(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), rg(r, t, void 0, e), (e.currentTarget = null);
}
function Hd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== o && i.isPropagationStopped())) break e;
          $u(i, l, u), (o = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== o && i.isPropagationStopped())
          )
            break e;
          $u(i, l, u), (o = a);
        }
    }
  }
  if (Ji) throw ((e = il), (Ji = !1), (il = null), e);
}
function $(e, t) {
  var n = t[pl];
  n === void 0 && (n = t[pl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Wd(t, e, 2, !1), n.add(r));
}
function ys(e, t, n) {
  var r = 0;
  t && (r |= 4), Wd(n, e, r, t);
}
var Si = "_reactListening" + Math.random().toString(36).slice(2);
function Hr(e) {
  if (!e[Si]) {
    (e[Si] = !0),
      qf.forEach(function (n) {
        n !== "selectionchange" && (o0.has(n) || ys(n, !1, e), ys(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Si] || ((t[Si] = !0), ys("selectionchange", !1, t));
  }
}
function Wd(e, t, n, r) {
  switch (Ld(t)) {
    case 1:
      var i = xg;
      break;
    case 4:
      i = wg;
      break;
    default:
      i = fa;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !rl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function vs(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = sn(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = o = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  hd(function () {
    var u = o,
      c = la(n),
      f = [];
    e: {
      var d = $d.get(e);
      if (d !== void 0) {
        var m = ha,
          y = e;
        switch (e) {
          case "keypress":
            if (zi(n) === 0) break e;
          case "keydown":
          case "keyup":
            m = _g;
            break;
          case "focusin":
            (y = "focus"), (m = fs);
            break;
          case "focusout":
            (y = "blur"), (m = fs);
            break;
          case "beforeblur":
          case "afterblur":
            m = fs;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            m = ju;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = Pg;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = zg;
            break;
          case zd:
          case Id:
          case Bd:
            m = Eg;
            break;
          case Ud:
            m = Bg;
            break;
          case "scroll":
            m = Sg;
            break;
          case "wheel":
            m = $g;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = Vg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = Au;
        }
        var v = (t & 4) !== 0,
          E = !v && e === "scroll",
          g = v ? (d !== null ? d + "Capture" : null) : d;
        v = [];
        for (var h = u, p; h !== null; ) {
          p = h;
          var x = p.stateNode;
          if (
            (p.tag === 5 &&
              x !== null &&
              ((p = x),
              g !== null && ((x = Fr(h, g)), x != null && v.push(Wr(h, x, p)))),
            E)
          )
            break;
          h = h.return;
        }
        0 < v.length &&
          ((d = new m(d, y, null, n, c)), f.push({ event: d, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (m = e === "mouseout" || e === "pointerout"),
          d &&
            n !== tl &&
            (y = n.relatedTarget || n.fromElement) &&
            (sn(y) || y[vt]))
        )
          break e;
        if (
          (m || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          m
            ? ((y = n.relatedTarget || n.toElement),
              (m = u),
              (y = y ? sn(y) : null),
              y !== null &&
                ((E = vn(y)), y !== E || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((m = null), (y = u)),
          m !== y)
        ) {
          if (
            ((v = ju),
            (x = "onMouseLeave"),
            (g = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = Au),
              (x = "onPointerLeave"),
              (g = "onPointerEnter"),
              (h = "pointer")),
            (E = m == null ? d : Mn(m)),
            (p = y == null ? d : Mn(y)),
            (d = new v(x, h + "leave", m, n, c)),
            (d.target = E),
            (d.relatedTarget = p),
            (x = null),
            sn(c) === u &&
              ((v = new v(g, h + "enter", y, n, c)),
              (v.target = p),
              (v.relatedTarget = E),
              (x = v)),
            (E = x),
            m && y)
          )
            t: {
              for (v = m, g = y, h = 0, p = v; p; p = kn(p)) h++;
              for (p = 0, x = g; x; x = kn(x)) p++;
              for (; 0 < h - p; ) (v = kn(v)), h--;
              for (; 0 < p - h; ) (g = kn(g)), p--;
              for (; h--; ) {
                if (v === g || (g !== null && v === g.alternate)) break t;
                (v = kn(v)), (g = kn(g));
              }
              v = null;
            }
          else v = null;
          m !== null && Hu(f, d, m, v, !1),
            y !== null && E !== null && Hu(f, E, y, v, !0);
        }
      }
      e: {
        if (
          ((d = u ? Mn(u) : window),
          (m = d.nodeName && d.nodeName.toLowerCase()),
          m === "select" || (m === "input" && d.type === "file"))
        )
          var S = Xg;
        else if (_u(d))
          if (Rd) S = bg;
          else {
            S = qg;
            var T = Zg;
          }
        else
          (m = d.nodeName) &&
            m.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (S = Jg);
        if (S && (S = S(e, u))) {
          Ad(f, S, n, c);
          break e;
        }
        T && T(e, d, u),
          e === "focusout" &&
            (T = d._wrapperState) &&
            T.controlled &&
            d.type === "number" &&
            Zs(d, "number", d.value);
      }
      switch (((T = u ? Mn(u) : window), e)) {
        case "focusin":
          (_u(T) || T.contentEditable === "true") &&
            ((Ln = T), (al = u), (Cr = null));
          break;
        case "focusout":
          Cr = al = Ln = null;
          break;
        case "mousedown":
          ul = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ul = !1), Bu(f, n, c);
          break;
        case "selectionchange":
          if (n0) break;
        case "keydown":
        case "keyup":
          Bu(f, n, c);
      }
      var C;
      if (ma)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        En
          ? jd(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (Md &&
          n.locale !== "ko" &&
          (En || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && En && (C = Vd())
            : ((jt = c),
              (da = "value" in jt ? jt.value : jt.textContent),
              (En = !0))),
        (T = ro(u, P)),
        0 < T.length &&
          ((P = new Du(P, e, null, n, c)),
          f.push({ event: P, listeners: T }),
          C ? (P.data = C) : ((C = Dd(n)), C !== null && (P.data = C)))),
        (C = Wg ? Gg(e, n) : Kg(e, n)) &&
          ((u = ro(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Du("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = C)));
    }
    Hd(f, t);
  });
}
function Wr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ro(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Fr(e, n)),
      o != null && r.unshift(Wr(e, o, i)),
      (o = Fr(e, t)),
      o != null && r.push(Wr(e, o, i))),
      (e = e.return);
  }
  return r;
}
function kn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Hu(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((a = Fr(n, o)), a != null && s.unshift(Wr(n, a, l)))
        : i || ((a = Fr(n, o)), a != null && s.push(Wr(n, a, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var s0 = /\r\n?/g,
  l0 = /\u0000|\uFFFD/g;
function Wu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      s0,
      `
`
    )
    .replace(l0, "");
}
function ki(e, t, n) {
  if (((t = Wu(t)), Wu(e) !== t && n)) throw Error(k(425));
}
function io() {}
var cl = null,
  fl = null;
function dl(e, t) {
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
var hl = typeof setTimeout == "function" ? setTimeout : void 0,
  a0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Gu = typeof Promise == "function" ? Promise : void 0,
  u0 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Gu < "u"
      ? function (e) {
          return Gu.resolve(null).then(e).catch(c0);
        }
      : hl;
function c0(e) {
  setTimeout(function () {
    throw e;
  });
}
function xs(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Br(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Br(t);
}
function _t(e) {
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
function Ku(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var rr = Math.random().toString(36).slice(2),
  ot = "__reactFiber$" + rr,
  Gr = "__reactProps$" + rr,
  vt = "__reactContainer$" + rr,
  pl = "__reactEvents$" + rr,
  f0 = "__reactListeners$" + rr,
  d0 = "__reactHandles$" + rr;
function sn(e) {
  var t = e[ot];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[vt] || n[ot])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ku(e); e !== null; ) {
          if ((n = e[ot])) return n;
          e = Ku(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function oi(e) {
  return (
    (e = e[ot] || e[vt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Mn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function Ro(e) {
  return e[Gr] || null;
}
var ml = [],
  jn = -1;
function Qt(e) {
  return { current: e };
}
function H(e) {
  0 > jn || ((e.current = ml[jn]), (ml[jn] = null), jn--);
}
function U(e, t) {
  jn++, (ml[jn] = e.current), (e.current = t);
}
var Ht = {},
  me = Qt(Ht),
  Ee = Qt(!1),
  dn = Ht;
function Qn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ht;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Le(e) {
  return (e = e.childContextTypes), e != null;
}
function oo() {
  H(Ee), H(me);
}
function Qu(e, t, n) {
  if (me.current !== Ht) throw Error(k(168));
  U(me, t), U(Ee, n);
}
function Gd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(k(108, Zm(e) || "Unknown", i));
  return X({}, n, r);
}
function so(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ht),
    (dn = me.current),
    U(me, e),
    U(Ee, Ee.current),
    !0
  );
}
function Yu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n
    ? ((e = Gd(e, t, dn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      H(Ee),
      H(me),
      U(me, e))
    : H(Ee),
    U(Ee, n);
}
var ft = null,
  No = !1,
  ws = !1;
function Kd(e) {
  ft === null ? (ft = [e]) : ft.push(e);
}
function h0(e) {
  (No = !0), Kd(e);
}
function Yt() {
  if (!ws && ft !== null) {
    ws = !0;
    var e = 0,
      t = B;
    try {
      var n = ft;
      for (B = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (ft = null), (No = !1);
    } catch (i) {
      throw (ft !== null && (ft = ft.slice(e + 1)), yd(aa, Yt), i);
    } finally {
      (B = t), (ws = !1);
    }
  }
  return null;
}
var Dn = [],
  An = 0,
  lo = null,
  ao = 0,
  Ie = [],
  Be = 0,
  hn = null,
  dt = 1,
  ht = "";
function tn(e, t) {
  (Dn[An++] = ao), (Dn[An++] = lo), (lo = e), (ao = t);
}
function Qd(e, t, n) {
  (Ie[Be++] = dt), (Ie[Be++] = ht), (Ie[Be++] = hn), (hn = e);
  var r = dt;
  e = ht;
  var i = 32 - Ze(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Ze(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (dt = (1 << (32 - Ze(t) + i)) | (n << i) | r),
      (ht = o + e);
  } else (dt = (1 << o) | (n << i) | r), (ht = e);
}
function ya(e) {
  e.return !== null && (tn(e, 1), Qd(e, 1, 0));
}
function va(e) {
  for (; e === lo; )
    (lo = Dn[--An]), (Dn[An] = null), (ao = Dn[--An]), (Dn[An] = null);
  for (; e === hn; )
    (hn = Ie[--Be]),
      (Ie[Be] = null),
      (ht = Ie[--Be]),
      (Ie[Be] = null),
      (dt = Ie[--Be]),
      (Ie[Be] = null);
}
var Ae = null,
  De = null,
  G = !1,
  Ye = null;
function Yd(e, t) {
  var n = Ue(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Xu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ae = e), (De = _t(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ae = e), (De = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = hn !== null ? { id: dt, overflow: ht } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ue(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ae = e),
            (De = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function gl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function yl(e) {
  if (G) {
    var t = De;
    if (t) {
      var n = t;
      if (!Xu(e, t)) {
        if (gl(e)) throw Error(k(418));
        t = _t(n.nextSibling);
        var r = Ae;
        t && Xu(e, t)
          ? Yd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (G = !1), (Ae = e));
      }
    } else {
      if (gl(e)) throw Error(k(418));
      (e.flags = (e.flags & -4097) | 2), (G = !1), (Ae = e);
    }
  }
}
function Zu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ae = e;
}
function Pi(e) {
  if (e !== Ae) return !1;
  if (!G) return Zu(e), (G = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !dl(e.type, e.memoizedProps))),
    t && (t = De))
  ) {
    if (gl(e)) throw (Xd(), Error(k(418)));
    for (; t; ) Yd(e, t), (t = _t(t.nextSibling));
  }
  if ((Zu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              De = _t(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      De = null;
    }
  } else De = Ae ? _t(e.stateNode.nextSibling) : null;
  return !0;
}
function Xd() {
  for (var e = De; e; ) e = _t(e.nextSibling);
}
function Yn() {
  (De = Ae = null), (G = !1);
}
function xa(e) {
  Ye === null ? (Ye = [e]) : Ye.push(e);
}
var p0 = St.ReactCurrentBatchConfig;
function Ke(e, t) {
  if (e && e.defaultProps) {
    (t = X({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var uo = Qt(null),
  co = null,
  Rn = null,
  wa = null;
function Sa() {
  wa = Rn = co = null;
}
function ka(e) {
  var t = uo.current;
  H(uo), (e._currentValue = t);
}
function vl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Wn(e, t) {
  (co = e),
    (wa = Rn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Te = !0), (e.firstContext = null));
}
function He(e) {
  var t = e._currentValue;
  if (wa !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Rn === null)) {
      if (co === null) throw Error(k(308));
      (Rn = e), (co.dependencies = { lanes: 0, firstContext: e });
    } else Rn = Rn.next = e;
  return t;
}
var ln = null;
function Pa(e) {
  ln === null ? (ln = [e]) : ln.push(e);
}
function Zd(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Pa(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    xt(e, r)
  );
}
function xt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Et = !1;
function Ca(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function qd(e, t) {
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
function mt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ot(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), z & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      xt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Pa(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    xt(e, n)
  );
}
function Ii(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ua(e, n);
  }
}
function qu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function fo(e, t, n, r) {
  var i = e.updateQueue;
  Et = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), s === null ? (o = u) : (s.next = u), (s = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== s &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var f = i.baseState;
    (s = 0), (c = u = a = null), (l = o);
    do {
      var d = l.lane,
        m = l.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: m,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var y = e,
            v = l;
          switch (((d = t), (m = n), v.tag)) {
            case 1:
              if (((y = v.payload), typeof y == "function")) {
                f = y.call(m, f, d);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = v.payload),
                (d = typeof y == "function" ? y.call(m, f, d) : y),
                d == null)
              )
                break e;
              f = X({}, f, d);
              break e;
            case 2:
              Et = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [l]) : d.push(l));
      } else
        (m = {
          eventTime: m,
          lane: d,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = m), (a = f)) : (c = c.next = m),
          (s |= d);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (d = l),
          (l = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (a = f),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (mn |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function Ju(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(k(191, i));
        i.call(r);
      }
    }
}
var Jd = new Zf.Component().refs;
function xl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : X({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var _o = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? vn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = xe(),
      i = zt(e),
      o = mt(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Ot(e, o, i)),
      t !== null && (qe(t, e, i, r), Ii(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = xe(),
      i = zt(e),
      o = mt(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Ot(e, o, i)),
      t !== null && (qe(t, e, i, r), Ii(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = xe(),
      r = zt(e),
      i = mt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Ot(e, i, r)),
      t !== null && (qe(t, e, r, n), Ii(t, e, r));
  },
};
function bu(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !$r(n, r) || !$r(i, o)
      : !0
  );
}
function bd(e, t, n) {
  var r = !1,
    i = Ht,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = He(o))
      : ((i = Le(t) ? dn : me.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Qn(e, i) : Ht)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = _o),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function ec(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && _o.enqueueReplaceState(t, t.state, null);
}
function wl(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = Jd), Ca(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = He(o))
    : ((o = Le(t) ? dn : me.current), (i.context = Qn(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (xl(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && _o.enqueueReplaceState(i, i.state, null),
      fo(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function ur(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var l = i.refs;
            l === Jd && (l = i.refs = {}),
              s === null ? delete l[o] : (l[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function Ci(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      k(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function tc(e) {
  var t = e._init;
  return t(e._payload);
}
function eh(e) {
  function t(g, h) {
    if (e) {
      var p = g.deletions;
      p === null ? ((g.deletions = [h]), (g.flags |= 16)) : p.push(h);
    }
  }
  function n(g, h) {
    if (!e) return null;
    for (; h !== null; ) t(g, h), (h = h.sibling);
    return null;
  }
  function r(g, h) {
    for (g = new Map(); h !== null; )
      h.key !== null ? g.set(h.key, h) : g.set(h.index, h), (h = h.sibling);
    return g;
  }
  function i(g, h) {
    return (g = It(g, h)), (g.index = 0), (g.sibling = null), g;
  }
  function o(g, h, p) {
    return (
      (g.index = p),
      e
        ? ((p = g.alternate),
          p !== null
            ? ((p = p.index), p < h ? ((g.flags |= 2), h) : p)
            : ((g.flags |= 2), h))
        : ((g.flags |= 1048576), h)
    );
  }
  function s(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function l(g, h, p, x) {
    return h === null || h.tag !== 6
      ? ((h = Ls(p, g.mode, x)), (h.return = g), h)
      : ((h = i(h, p)), (h.return = g), h);
  }
  function a(g, h, p, x) {
    var S = p.type;
    return S === Tn
      ? c(g, h, p.props.children, x, p.key)
      : h !== null &&
        (h.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === Tt &&
            tc(S) === h.type))
      ? ((x = i(h, p.props)), (x.ref = ur(g, h, p)), (x.return = g), x)
      : ((x = Gi(p.type, p.key, p.props, null, g.mode, x)),
        (x.ref = ur(g, h, p)),
        (x.return = g),
        x);
  }
  function u(g, h, p, x) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== p.containerInfo ||
      h.stateNode.implementation !== p.implementation
      ? ((h = Vs(p, g.mode, x)), (h.return = g), h)
      : ((h = i(h, p.children || [])), (h.return = g), h);
  }
  function c(g, h, p, x, S) {
    return h === null || h.tag !== 7
      ? ((h = fn(p, g.mode, x, S)), (h.return = g), h)
      : ((h = i(h, p)), (h.return = g), h);
  }
  function f(g, h, p) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = Ls("" + h, g.mode, p)), (h.return = g), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case hi:
          return (
            (p = Gi(h.type, h.key, h.props, null, g.mode, p)),
            (p.ref = ur(g, null, h)),
            (p.return = g),
            p
          );
        case Cn:
          return (h = Vs(h, g.mode, p)), (h.return = g), h;
        case Tt:
          var x = h._init;
          return f(g, x(h._payload), p);
      }
      if (gr(h) || ir(h))
        return (h = fn(h, g.mode, p, null)), (h.return = g), h;
      Ci(g, h);
    }
    return null;
  }
  function d(g, h, p, x) {
    var S = h !== null ? h.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return S !== null ? null : l(g, h, "" + p, x);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case hi:
          return p.key === S ? a(g, h, p, x) : null;
        case Cn:
          return p.key === S ? u(g, h, p, x) : null;
        case Tt:
          return (S = p._init), d(g, h, S(p._payload), x);
      }
      if (gr(p) || ir(p)) return S !== null ? null : c(g, h, p, x, null);
      Ci(g, p);
    }
    return null;
  }
  function m(g, h, p, x, S) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (g = g.get(p) || null), l(h, g, "" + x, S);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case hi:
          return (g = g.get(x.key === null ? p : x.key) || null), a(h, g, x, S);
        case Cn:
          return (g = g.get(x.key === null ? p : x.key) || null), u(h, g, x, S);
        case Tt:
          var T = x._init;
          return m(g, h, p, T(x._payload), S);
      }
      if (gr(x) || ir(x)) return (g = g.get(p) || null), c(h, g, x, S, null);
      Ci(h, x);
    }
    return null;
  }
  function y(g, h, p, x) {
    for (
      var S = null, T = null, C = h, P = (h = 0), R = null;
      C !== null && P < p.length;
      P++
    ) {
      C.index > P ? ((R = C), (C = null)) : (R = C.sibling);
      var D = d(g, C, p[P], x);
      if (D === null) {
        C === null && (C = R);
        break;
      }
      e && C && D.alternate === null && t(g, C),
        (h = o(D, h, P)),
        T === null ? (S = D) : (T.sibling = D),
        (T = D),
        (C = R);
    }
    if (P === p.length) return n(g, C), G && tn(g, P), S;
    if (C === null) {
      for (; P < p.length; P++)
        (C = f(g, p[P], x)),
          C !== null &&
            ((h = o(C, h, P)), T === null ? (S = C) : (T.sibling = C), (T = C));
      return G && tn(g, P), S;
    }
    for (C = r(g, C); P < p.length; P++)
      (R = m(C, g, P, p[P], x)),
        R !== null &&
          (e && R.alternate !== null && C.delete(R.key === null ? P : R.key),
          (h = o(R, h, P)),
          T === null ? (S = R) : (T.sibling = R),
          (T = R));
    return (
      e &&
        C.forEach(function (J) {
          return t(g, J);
        }),
      G && tn(g, P),
      S
    );
  }
  function v(g, h, p, x) {
    var S = ir(p);
    if (typeof S != "function") throw Error(k(150));
    if (((p = S.call(p)), p == null)) throw Error(k(151));
    for (
      var T = (S = null), C = h, P = (h = 0), R = null, D = p.next();
      C !== null && !D.done;
      P++, D = p.next()
    ) {
      C.index > P ? ((R = C), (C = null)) : (R = C.sibling);
      var J = d(g, C, D.value, x);
      if (J === null) {
        C === null && (C = R);
        break;
      }
      e && C && J.alternate === null && t(g, C),
        (h = o(J, h, P)),
        T === null ? (S = J) : (T.sibling = J),
        (T = J),
        (C = R);
    }
    if (D.done) return n(g, C), G && tn(g, P), S;
    if (C === null) {
      for (; !D.done; P++, D = p.next())
        (D = f(g, D.value, x)),
          D !== null &&
            ((h = o(D, h, P)), T === null ? (S = D) : (T.sibling = D), (T = D));
      return G && tn(g, P), S;
    }
    for (C = r(g, C); !D.done; P++, D = p.next())
      (D = m(C, g, P, D.value, x)),
        D !== null &&
          (e && D.alternate !== null && C.delete(D.key === null ? P : D.key),
          (h = o(D, h, P)),
          T === null ? (S = D) : (T.sibling = D),
          (T = D));
    return (
      e &&
        C.forEach(function (ke) {
          return t(g, ke);
        }),
      G && tn(g, P),
      S
    );
  }
  function E(g, h, p, x) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === Tn &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case hi:
          e: {
            for (var S = p.key, T = h; T !== null; ) {
              if (T.key === S) {
                if (((S = p.type), S === Tn)) {
                  if (T.tag === 7) {
                    n(g, T.sibling),
                      (h = i(T, p.props.children)),
                      (h.return = g),
                      (g = h);
                    break e;
                  }
                } else if (
                  T.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === Tt &&
                    tc(S) === T.type)
                ) {
                  n(g, T.sibling),
                    (h = i(T, p.props)),
                    (h.ref = ur(g, T, p)),
                    (h.return = g),
                    (g = h);
                  break e;
                }
                n(g, T);
                break;
              } else t(g, T);
              T = T.sibling;
            }
            p.type === Tn
              ? ((h = fn(p.props.children, g.mode, x, p.key)),
                (h.return = g),
                (g = h))
              : ((x = Gi(p.type, p.key, p.props, null, g.mode, x)),
                (x.ref = ur(g, h, p)),
                (x.return = g),
                (g = x));
          }
          return s(g);
        case Cn:
          e: {
            for (T = p.key; h !== null; ) {
              if (h.key === T)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === p.containerInfo &&
                  h.stateNode.implementation === p.implementation
                ) {
                  n(g, h.sibling),
                    (h = i(h, p.children || [])),
                    (h.return = g),
                    (g = h);
                  break e;
                } else {
                  n(g, h);
                  break;
                }
              else t(g, h);
              h = h.sibling;
            }
            (h = Vs(p, g.mode, x)), (h.return = g), (g = h);
          }
          return s(g);
        case Tt:
          return (T = p._init), E(g, h, T(p._payload), x);
      }
      if (gr(p)) return y(g, h, p, x);
      if (ir(p)) return v(g, h, p, x);
      Ci(g, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        h !== null && h.tag === 6
          ? (n(g, h.sibling), (h = i(h, p)), (h.return = g), (g = h))
          : (n(g, h), (h = Ls(p, g.mode, x)), (h.return = g), (g = h)),
        s(g))
      : n(g, h);
  }
  return E;
}
var Xn = eh(!0),
  th = eh(!1),
  si = {},
  lt = Qt(si),
  Kr = Qt(si),
  Qr = Qt(si);
function an(e) {
  if (e === si) throw Error(k(174));
  return e;
}
function Ta(e, t) {
  switch ((U(Qr, t), U(Kr, e), U(lt, si), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Js(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Js(t, e));
  }
  H(lt), U(lt, t);
}
function Zn() {
  H(lt), H(Kr), H(Qr);
}
function nh(e) {
  an(Qr.current);
  var t = an(lt.current),
    n = Js(t, e.type);
  t !== n && (U(Kr, e), U(lt, n));
}
function Ea(e) {
  Kr.current === e && (H(lt), H(Kr));
}
var K = Qt(0);
function ho(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
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
var Ss = [];
function La() {
  for (var e = 0; e < Ss.length; e++)
    Ss[e]._workInProgressVersionPrimary = null;
  Ss.length = 0;
}
var Bi = St.ReactCurrentDispatcher,
  ks = St.ReactCurrentBatchConfig,
  pn = 0,
  Y = null,
  oe = null,
  le = null,
  po = !1,
  Tr = !1,
  Yr = 0,
  m0 = 0;
function de() {
  throw Error(k(321));
}
function Va(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Je(e[n], t[n])) return !1;
  return !0;
}
function Ma(e, t, n, r, i, o) {
  if (
    ((pn = o),
    (Y = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Bi.current = e === null || e.memoizedState === null ? x0 : w0),
    (e = n(r, i)),
    Tr)
  ) {
    o = 0;
    do {
      if (((Tr = !1), (Yr = 0), 25 <= o)) throw Error(k(301));
      (o += 1),
        (le = oe = null),
        (t.updateQueue = null),
        (Bi.current = S0),
        (e = n(r, i));
    } while (Tr);
  }
  if (
    ((Bi.current = mo),
    (t = oe !== null && oe.next !== null),
    (pn = 0),
    (le = oe = Y = null),
    (po = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function ja() {
  var e = Yr !== 0;
  return (Yr = 0), e;
}
function rt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return le === null ? (Y.memoizedState = le = e) : (le = le.next = e), le;
}
function We() {
  if (oe === null) {
    var e = Y.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = oe.next;
  var t = le === null ? Y.memoizedState : le.next;
  if (t !== null) (le = t), (oe = e);
  else {
    if (e === null) throw Error(k(310));
    (oe = e),
      (e = {
        memoizedState: oe.memoizedState,
        baseState: oe.baseState,
        baseQueue: oe.baseQueue,
        queue: oe.queue,
        next: null,
      }),
      le === null ? (Y.memoizedState = le = e) : (le = le.next = e);
  }
  return le;
}
function Xr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ps(e) {
  var t = We(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = oe,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var l = (s = null),
      a = null,
      u = o;
    do {
      var c = u.lane;
      if ((pn & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = f), (s = r)) : (a = a.next = f),
          (Y.lanes |= c),
          (mn |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    a === null ? (s = r) : (a.next = l),
      Je(r, t.memoizedState) || (Te = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (Y.lanes |= o), (mn |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Cs(e) {
  var t = We(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    Je(o, t.memoizedState) || (Te = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function rh() {}
function ih(e, t) {
  var n = Y,
    r = We(),
    i = t(),
    o = !Je(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Te = !0)),
    (r = r.queue),
    Da(lh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (le !== null && le.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Zr(9, sh.bind(null, n, r, i, t), void 0, null),
      ae === null)
    )
      throw Error(k(349));
    pn & 30 || oh(n, t, i);
  }
  return i;
}
function oh(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Y.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Y.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function sh(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), ah(t) && uh(e);
}
function lh(e, t, n) {
  return n(function () {
    ah(t) && uh(e);
  });
}
function ah(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Je(e, n);
  } catch {
    return !0;
  }
}
function uh(e) {
  var t = xt(e, 1);
  t !== null && qe(t, e, 1, -1);
}
function nc(e) {
  var t = rt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Xr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = v0.bind(null, Y, e)),
    [t.memoizedState, e]
  );
}
function Zr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Y.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Y.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function ch() {
  return We().memoizedState;
}
function Ui(e, t, n, r) {
  var i = rt();
  (Y.flags |= e),
    (i.memoizedState = Zr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Oo(e, t, n, r) {
  var i = We();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (oe !== null) {
    var s = oe.memoizedState;
    if (((o = s.destroy), r !== null && Va(r, s.deps))) {
      i.memoizedState = Zr(t, n, o, r);
      return;
    }
  }
  (Y.flags |= e), (i.memoizedState = Zr(1 | t, n, o, r));
}
function rc(e, t) {
  return Ui(8390656, 8, e, t);
}
function Da(e, t) {
  return Oo(2048, 8, e, t);
}
function fh(e, t) {
  return Oo(4, 2, e, t);
}
function dh(e, t) {
  return Oo(4, 4, e, t);
}
function hh(e, t) {
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
function ph(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Oo(4, 4, hh.bind(null, t, e), n)
  );
}
function Aa() {}
function mh(e, t) {
  var n = We();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Va(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function gh(e, t) {
  var n = We();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Va(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function yh(e, t, n) {
  return pn & 21
    ? (Je(n, t) || ((n = wd()), (Y.lanes |= n), (mn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Te = !0)), (e.memoizedState = n));
}
function g0(e, t) {
  var n = B;
  (B = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ks.transition;
  ks.transition = {};
  try {
    e(!1), t();
  } finally {
    (B = n), (ks.transition = r);
  }
}
function vh() {
  return We().memoizedState;
}
function y0(e, t, n) {
  var r = zt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    xh(e))
  )
    wh(t, n);
  else if (((n = Zd(e, t, n, r)), n !== null)) {
    var i = xe();
    qe(n, e, r, i), Sh(n, t, r);
  }
}
function v0(e, t, n) {
  var r = zt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (xh(e)) wh(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), Je(l, s))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), Pa(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Zd(e, t, i, r)),
      n !== null && ((i = xe()), qe(n, e, r, i), Sh(n, t, r));
  }
}
function xh(e) {
  var t = e.alternate;
  return e === Y || (t !== null && t === Y);
}
function wh(e, t) {
  Tr = po = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Sh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ua(e, n);
  }
}
var mo = {
    readContext: He,
    useCallback: de,
    useContext: de,
    useEffect: de,
    useImperativeHandle: de,
    useInsertionEffect: de,
    useLayoutEffect: de,
    useMemo: de,
    useReducer: de,
    useRef: de,
    useState: de,
    useDebugValue: de,
    useDeferredValue: de,
    useTransition: de,
    useMutableSource: de,
    useSyncExternalStore: de,
    useId: de,
    unstable_isNewReconciler: !1,
  },
  x0 = {
    readContext: He,
    useCallback: function (e, t) {
      return (rt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: He,
    useEffect: rc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ui(4194308, 4, hh.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ui(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ui(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = rt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = rt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = y0.bind(null, Y, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = rt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: nc,
    useDebugValue: Aa,
    useDeferredValue: function (e) {
      return (rt().memoizedState = e);
    },
    useTransition: function () {
      var e = nc(!1),
        t = e[0];
      return (e = g0.bind(null, e[1])), (rt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Y,
        i = rt();
      if (G) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), ae === null)) throw Error(k(349));
        pn & 30 || oh(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        rc(lh.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Zr(9, sh.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = rt(),
        t = ae.identifierPrefix;
      if (G) {
        var n = ht,
          r = dt;
        (n = (r & ~(1 << (32 - Ze(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Yr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = m0++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  w0 = {
    readContext: He,
    useCallback: mh,
    useContext: He,
    useEffect: Da,
    useImperativeHandle: ph,
    useInsertionEffect: fh,
    useLayoutEffect: dh,
    useMemo: gh,
    useReducer: Ps,
    useRef: ch,
    useState: function () {
      return Ps(Xr);
    },
    useDebugValue: Aa,
    useDeferredValue: function (e) {
      var t = We();
      return yh(t, oe.memoizedState, e);
    },
    useTransition: function () {
      var e = Ps(Xr)[0],
        t = We().memoizedState;
      return [e, t];
    },
    useMutableSource: rh,
    useSyncExternalStore: ih,
    useId: vh,
    unstable_isNewReconciler: !1,
  },
  S0 = {
    readContext: He,
    useCallback: mh,
    useContext: He,
    useEffect: Da,
    useImperativeHandle: ph,
    useInsertionEffect: fh,
    useLayoutEffect: dh,
    useMemo: gh,
    useReducer: Cs,
    useRef: ch,
    useState: function () {
      return Cs(Xr);
    },
    useDebugValue: Aa,
    useDeferredValue: function (e) {
      var t = We();
      return oe === null ? (t.memoizedState = e) : yh(t, oe.memoizedState, e);
    },
    useTransition: function () {
      var e = Cs(Xr)[0],
        t = We().memoizedState;
      return [e, t];
    },
    useMutableSource: rh,
    useSyncExternalStore: ih,
    useId: vh,
    unstable_isNewReconciler: !1,
  };
function qn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Xm(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Ts(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Sl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var k0 = typeof WeakMap == "function" ? WeakMap : Map;
function kh(e, t, n) {
  (n = mt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      yo || ((yo = !0), (Dl = r)), Sl(e, t);
    }),
    n
  );
}
function Ph(e, t, n) {
  (n = mt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Sl(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Sl(e, t),
          typeof r != "function" &&
            (Ft === null ? (Ft = new Set([this])) : Ft.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function ic(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new k0();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = O0.bind(null, e, t, n)), t.then(e, e));
}
function oc(e) {
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
function sc(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = mt(-1, 1)), (t.tag = 2), Ot(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var P0 = St.ReactCurrentOwner,
  Te = !1;
function ve(e, t, n, r) {
  t.child = e === null ? th(t, null, n, r) : Xn(t, e.child, n, r);
}
function lc(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Wn(t, i),
    (r = Ma(e, t, n, r, o, i)),
    (n = ja()),
    e !== null && !Te
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        wt(e, t, i))
      : (G && n && ya(t), (t.flags |= 1), ve(e, t, r, i), t.child)
  );
}
function ac(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Ba(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Ch(e, t, o, r, i))
      : ((e = Gi(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : $r), n(s, r) && e.ref === t.ref)
    )
      return wt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = It(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ch(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if ($r(o, r) && e.ref === t.ref)
      if (((Te = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Te = !0);
      else return (t.lanes = e.lanes), wt(e, t, i);
  }
  return kl(e, t, n, r, i);
}
function Th(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        U(_n, je),
        (je |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          U(_n, je),
          (je |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        U(_n, je),
        (je |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      U(_n, je),
      (je |= r);
  return ve(e, t, i, n), t.child;
}
function Eh(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function kl(e, t, n, r, i) {
  var o = Le(n) ? dn : me.current;
  return (
    (o = Qn(t, o)),
    Wn(t, i),
    (n = Ma(e, t, n, r, o, i)),
    (r = ja()),
    e !== null && !Te
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        wt(e, t, i))
      : (G && r && ya(t), (t.flags |= 1), ve(e, t, n, i), t.child)
  );
}
function uc(e, t, n, r, i) {
  if (Le(n)) {
    var o = !0;
    so(t);
  } else o = !1;
  if ((Wn(t, i), t.stateNode === null))
    $i(e, t), bd(t, n, r), wl(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var a = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = He(u))
      : ((u = Le(n) ? dn : me.current), (u = Qn(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && ec(t, s, r, u)),
      (Et = !1);
    var d = t.memoizedState;
    (s.state = d),
      fo(t, r, s, i),
      (a = t.memoizedState),
      l !== r || d !== a || Ee.current || Et
        ? (typeof c == "function" && (xl(t, n, c, r), (a = t.memoizedState)),
          (l = Et || bu(t, n, l, r, d, a, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      qd(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : Ke(t.type, l)),
      (s.props = u),
      (f = t.pendingProps),
      (d = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = He(a))
        : ((a = Le(n) ? dn : me.current), (a = Qn(t, a)));
    var m = n.getDerivedStateFromProps;
    (c =
      typeof m == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== f || d !== a) && ec(t, s, r, a)),
      (Et = !1),
      (d = t.memoizedState),
      (s.state = d),
      fo(t, r, s, i);
    var y = t.memoizedState;
    l !== f || d !== y || Ee.current || Et
      ? (typeof m == "function" && (xl(t, n, m, r), (y = t.memoizedState)),
        (u = Et || bu(t, n, u, r, d, y, a) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, y, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, y, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (s.props = r),
        (s.state = y),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Pl(e, t, n, r, o, i);
}
function Pl(e, t, n, r, i, o) {
  Eh(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && Yu(t, n, !1), wt(e, t, o);
  (r = t.stateNode), (P0.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Xn(t, e.child, null, o)), (t.child = Xn(t, null, l, o)))
      : ve(e, t, l, o),
    (t.memoizedState = r.state),
    i && Yu(t, n, !0),
    t.child
  );
}
function Lh(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Qu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Qu(e, t.context, !1),
    Ta(e, t.containerInfo);
}
function cc(e, t, n, r, i) {
  return Yn(), xa(i), (t.flags |= 256), ve(e, t, n, r), t.child;
}
var Cl = { dehydrated: null, treeContext: null, retryLane: 0 };
function Tl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Vh(e, t, n) {
  var r = t.pendingProps,
    i = K.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    U(K, i & 1),
    e === null)
  )
    return (
      yl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = Io(s, r, 0, null)),
              (e = fn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Tl(n)),
              (t.memoizedState = Cl),
              e)
            : Ra(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return C0(e, t, s, r, l, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (l = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = It(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (o = It(l, o)) : ((o = fn(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Tl(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Cl),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = It(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ra(e, t) {
  return (
    (t = Io({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ti(e, t, n, r) {
  return (
    r !== null && xa(r),
    Xn(t, e.child, null, n),
    (e = Ra(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function C0(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ts(Error(k(422)))), Ti(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Io({ mode: "visible", children: r.children }, i, 0, null)),
        (o = fn(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Xn(t, e.child, null, s),
        (t.child.memoizedState = Tl(s)),
        (t.memoizedState = Cl),
        o);
  if (!(t.mode & 1)) return Ti(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (o = Error(k(419))), (r = Ts(o, r, void 0)), Ti(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), Te || l)) {
    if (((r = ae), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), xt(e, i), qe(r, e, i, -1));
    }
    return Ia(), (r = Ts(Error(k(421)))), Ti(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = F0.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (De = _t(i.nextSibling)),
      (Ae = t),
      (G = !0),
      (Ye = null),
      e !== null &&
        ((Ie[Be++] = dt),
        (Ie[Be++] = ht),
        (Ie[Be++] = hn),
        (dt = e.id),
        (ht = e.overflow),
        (hn = t)),
      (t = Ra(t, r.children)),
      (t.flags |= 4096),
      t);
}
function fc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), vl(e.return, t, n);
}
function Es(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Mh(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((ve(e, t, r.children, n), (r = K.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && fc(e, n, t);
        else if (e.tag === 19) fc(e, n, t);
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
    r &= 1;
  }
  if ((U(K, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && ho(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Es(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && ho(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Es(t, !0, n, null, o);
        break;
      case "together":
        Es(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function $i(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function wt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (mn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (
      e = t.child, n = It(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = It(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function T0(e, t, n) {
  switch (t.tag) {
    case 3:
      Lh(t), Yn();
      break;
    case 5:
      nh(t);
      break;
    case 1:
      Le(t.type) && so(t);
      break;
    case 4:
      Ta(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      U(uo, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (U(K, K.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Vh(e, t, n)
          : (U(K, K.current & 1),
            (e = wt(e, t, n)),
            e !== null ? e.sibling : null);
      U(K, K.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Mh(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        U(K, K.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Th(e, t, n);
  }
  return wt(e, t, n);
}
var jh, El, Dh, Ah;
jh = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
El = function () {};
Dh = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), an(lt.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Ys(e, i)), (r = Ys(e, r)), (o = []);
        break;
      case "select":
        (i = X({}, i, { value: void 0 })),
          (r = X({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = qs(e, i)), (r = qs(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = io);
    }
    bs(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var l = i[u];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (_r.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else n || (o || (o = []), o.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (o = o || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (o = o || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (_r.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && $("scroll", e),
                  o || l === a || (o = []))
                : (o = o || []).push(u, a));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Ah = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function cr(e, t) {
  if (!G)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function he(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function E0(e, t, n) {
  var r = t.pendingProps;
  switch ((va(t), t.tag)) {
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
      return he(t), null;
    case 1:
      return Le(t.type) && oo(), he(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Zn(),
        H(Ee),
        H(me),
        La(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Pi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ye !== null && (Nl(Ye), (Ye = null)))),
        El(e, t),
        he(t),
        null
      );
    case 5:
      Ea(t);
      var i = an(Qr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Dh(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return he(t), null;
        }
        if (((e = an(lt.current)), Pi(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[ot] = t), (r[Gr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              $("cancel", r), $("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              $("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < vr.length; i++) $(vr[i], r);
              break;
            case "source":
              $("error", r);
              break;
            case "img":
            case "image":
            case "link":
              $("error", r), $("load", r);
              break;
            case "details":
              $("toggle", r);
              break;
            case "input":
              wu(r, o), $("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                $("invalid", r);
              break;
            case "textarea":
              ku(r, o), $("invalid", r);
          }
          bs(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var l = o[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 &&
                      ki(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (o.suppressHydrationWarning !== !0 &&
                      ki(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : _r.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  $("scroll", r);
            }
          switch (n) {
            case "input":
              pi(r), Su(r, o, !0);
              break;
            case "textarea":
              pi(r), Pu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = io);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = od(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[ot] = t),
            (e[Gr] = r),
            jh(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = el(n, r)), n)) {
              case "dialog":
                $("cancel", e), $("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                $("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < vr.length; i++) $(vr[i], e);
                i = r;
                break;
              case "source":
                $("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                $("error", e), $("load", e), (i = r);
                break;
              case "details":
                $("toggle", e), (i = r);
                break;
              case "input":
                wu(e, r), (i = Ys(e, r)), $("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = X({}, r, { value: void 0 })),
                  $("invalid", e);
                break;
              case "textarea":
                ku(e, r), (i = qs(e, r)), $("invalid", e);
                break;
              default:
                i = r;
            }
            bs(n, i), (l = i);
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var a = l[o];
                o === "style"
                  ? ad(e, a)
                  : o === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && sd(e, a))
                  : o === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Or(e, a)
                    : typeof a == "number" && Or(e, "" + a)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (_r.hasOwnProperty(o)
                      ? a != null && o === "onScroll" && $("scroll", e)
                      : a != null && ra(e, o, a, s));
              }
            switch (n) {
              case "input":
                pi(e), Su(e, r, !1);
                break;
              case "textarea":
                pi(e), Pu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + $t(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Bn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Bn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = io);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return he(t), null;
    case 6:
      if (e && t.stateNode != null) Ah(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (((n = an(Qr.current)), an(lt.current), Pi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[ot] = t),
            (o = r.nodeValue !== n) && ((e = Ae), e !== null))
          )
            switch (e.tag) {
              case 3:
                ki(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ki(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[ot] = t),
            (t.stateNode = r);
      }
      return he(t), null;
    case 13:
      if (
        (H(K),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (G && De !== null && t.mode & 1 && !(t.flags & 128))
          Xd(), Yn(), (t.flags |= 98560), (o = !1);
        else if (((o = Pi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(k(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(k(317));
            o[ot] = t;
          } else
            Yn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          he(t), (o = !1);
        } else Ye !== null && (Nl(Ye), (Ye = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || K.current & 1 ? se === 0 && (se = 3) : Ia())),
          t.updateQueue !== null && (t.flags |= 4),
          he(t),
          null);
    case 4:
      return (
        Zn(), El(e, t), e === null && Hr(t.stateNode.containerInfo), he(t), null
      );
    case 10:
      return ka(t.type._context), he(t), null;
    case 17:
      return Le(t.type) && oo(), he(t), null;
    case 19:
      if ((H(K), (o = t.memoizedState), o === null)) return he(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) cr(o, !1);
        else {
          if (se !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = ho(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    cr(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return U(K, (K.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ne() > Jn &&
            ((t.flags |= 128), (r = !0), cr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ho(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              cr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !G)
            )
              return he(t), null;
          } else
            2 * ne() - o.renderingStartTime > Jn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), cr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ne()),
          (t.sibling = null),
          (n = K.current),
          U(K, r ? (n & 1) | 2 : n & 1),
          t)
        : (he(t), null);
    case 22:
    case 23:
      return (
        za(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? je & 1073741824 && (he(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : he(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function L0(e, t) {
  switch ((va(t), t.tag)) {
    case 1:
      return (
        Le(t.type) && oo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Zn(),
        H(Ee),
        H(me),
        La(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ea(t), null;
    case 13:
      if ((H(K), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        Yn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return H(K), null;
    case 4:
      return Zn(), null;
    case 10:
      return ka(t.type._context), null;
    case 22:
    case 23:
      return za(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ei = !1,
  pe = !1,
  V0 = typeof WeakSet == "function" ? WeakSet : Set,
  V = null;
function Nn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Z(e, t, r);
      }
    else n.current = null;
}
function Ll(e, t, n) {
  try {
    n();
  } catch (r) {
    Z(e, t, r);
  }
}
var dc = !1;
function M0(e, t) {
  if (((cl = to), (e = Od()), ga(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var m;
              f !== n || (i !== 0 && f.nodeType !== 3) || (l = s + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (a = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (m = f.firstChild) !== null;

            )
              (d = f), (f = m);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === i && (l = s),
                d === o && ++c === r && (a = s),
                (m = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = m;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (fl = { focusedElem: e, selectionRange: n }, to = !1, V = t; V !== null; )
    if (((t = V), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (V = e);
    else
      for (; V !== null; ) {
        t = V;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var v = y.memoizedProps,
                    E = y.memoizedState,
                    g = t.stateNode,
                    h = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : Ke(t.type, v),
                      E
                    );
                  g.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (x) {
          Z(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (V = e);
          break;
        }
        V = t.return;
      }
  return (y = dc), (dc = !1), y;
}
function Er(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Ll(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Fo(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Vl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Rh(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Rh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[ot], delete t[Gr], delete t[pl], delete t[f0], delete t[d0])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Nh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function hc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Nh(e.return)) return null;
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
function Ml(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = io));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ml(e, t, n), e = e.sibling; e !== null; ) Ml(e, t, n), (e = e.sibling);
}
function jl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (jl(e, t, n), e = e.sibling; e !== null; ) jl(e, t, n), (e = e.sibling);
}
var ue = null,
  Qe = !1;
function kt(e, t, n) {
  for (n = n.child; n !== null; ) _h(e, t, n), (n = n.sibling);
}
function _h(e, t, n) {
  if (st && typeof st.onCommitFiberUnmount == "function")
    try {
      st.onCommitFiberUnmount(Mo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      pe || Nn(n, t);
    case 6:
      var r = ue,
        i = Qe;
      (ue = null),
        kt(e, t, n),
        (ue = r),
        (Qe = i),
        ue !== null &&
          (Qe
            ? ((e = ue),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ue.removeChild(n.stateNode));
      break;
    case 18:
      ue !== null &&
        (Qe
          ? ((e = ue),
            (n = n.stateNode),
            e.nodeType === 8
              ? xs(e.parentNode, n)
              : e.nodeType === 1 && xs(e, n),
            Br(e))
          : xs(ue, n.stateNode));
      break;
    case 4:
      (r = ue),
        (i = Qe),
        (ue = n.stateNode.containerInfo),
        (Qe = !0),
        kt(e, t, n),
        (ue = r),
        (Qe = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !pe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && Ll(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      kt(e, t, n);
      break;
    case 1:
      if (
        !pe &&
        (Nn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          Z(n, t, l);
        }
      kt(e, t, n);
      break;
    case 21:
      kt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((pe = (r = pe) || n.memoizedState !== null), kt(e, t, n), (pe = r))
        : kt(e, t, n);
      break;
    default:
      kt(e, t, n);
  }
}
function pc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new V0()),
      t.forEach(function (r) {
        var i = z0.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Ge(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (ue = l.stateNode), (Qe = !1);
              break e;
            case 3:
              (ue = l.stateNode.containerInfo), (Qe = !0);
              break e;
            case 4:
              (ue = l.stateNode.containerInfo), (Qe = !0);
              break e;
          }
          l = l.return;
        }
        if (ue === null) throw Error(k(160));
        _h(o, s, i), (ue = null), (Qe = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        Z(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Oh(t, e), (t = t.sibling);
}
function Oh(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ge(t, e), nt(e), r & 4)) {
        try {
          Er(3, e, e.return), Fo(3, e);
        } catch (v) {
          Z(e, e.return, v);
        }
        try {
          Er(5, e, e.return);
        } catch (v) {
          Z(e, e.return, v);
        }
      }
      break;
    case 1:
      Ge(t, e), nt(e), r & 512 && n !== null && Nn(n, n.return);
      break;
    case 5:
      if (
        (Ge(t, e),
        nt(e),
        r & 512 && n !== null && Nn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Or(i, "");
        } catch (v) {
          Z(e, e.return, v);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && o.type === "radio" && o.name != null && rd(i, o),
              el(l, s);
            var u = el(l, o);
            for (s = 0; s < a.length; s += 2) {
              var c = a[s],
                f = a[s + 1];
              c === "style"
                ? ad(i, f)
                : c === "dangerouslySetInnerHTML"
                ? sd(i, f)
                : c === "children"
                ? Or(i, f)
                : ra(i, c, f, u);
            }
            switch (l) {
              case "input":
                Xs(i, o);
                break;
              case "textarea":
                id(i, o);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var m = o.value;
                m != null
                  ? Bn(i, !!o.multiple, m, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Bn(i, !!o.multiple, o.defaultValue, !0)
                      : Bn(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Gr] = o;
          } catch (v) {
            Z(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Ge(t, e), nt(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (v) {
          Z(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (Ge(t, e), nt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Br(t.containerInfo);
        } catch (v) {
          Z(e, e.return, v);
        }
      break;
    case 4:
      Ge(t, e), nt(e);
      break;
    case 13:
      Ge(t, e),
        nt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Oa = ne())),
        r & 4 && pc(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((pe = (u = pe) || c), Ge(t, e), (pe = u)) : Ge(t, e),
        nt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (V = e, c = e.child; c !== null; ) {
            for (f = V = c; V !== null; ) {
              switch (((d = V), (m = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Er(4, d, d.return);
                  break;
                case 1:
                  Nn(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (v) {
                      Z(r, n, v);
                    }
                  }
                  break;
                case 5:
                  Nn(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    gc(f);
                    continue;
                  }
              }
              m !== null ? ((m.return = d), (V = m)) : gc(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((l = f.stateNode),
                      (a = f.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = ld("display", s)));
              } catch (v) {
                Z(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (v) {
                Z(e, e.return, v);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Ge(t, e), nt(e), r & 4 && pc(e);
      break;
    case 21:
      break;
    default:
      Ge(t, e), nt(e);
  }
}
function nt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Nh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Or(i, ""), (r.flags &= -33));
          var o = hc(e);
          jl(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = hc(e);
          Ml(e, l, s);
          break;
        default:
          throw Error(k(161));
      }
    } catch (a) {
      Z(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function j0(e, t, n) {
  (V = e), Fh(e);
}
function Fh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; V !== null; ) {
    var i = V,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Ei;
      if (!s) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || pe;
        l = Ei;
        var u = pe;
        if (((Ei = s), (pe = a) && !u))
          for (V = i; V !== null; )
            (s = V),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? yc(i)
                : a !== null
                ? ((a.return = s), (V = a))
                : yc(i);
        for (; o !== null; ) (V = o), Fh(o), (o = o.sibling);
        (V = i), (Ei = l), (pe = u);
      }
      mc(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (V = o)) : mc(e);
  }
}
function mc(e) {
  for (; V !== null; ) {
    var t = V;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              pe || Fo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !pe)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ke(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Ju(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ju(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
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
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && Br(f);
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
              throw Error(k(163));
          }
        pe || (t.flags & 512 && Vl(t));
      } catch (d) {
        Z(t, t.return, d);
      }
    }
    if (t === e) {
      V = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (V = n);
      break;
    }
    V = t.return;
  }
}
function gc(e) {
  for (; V !== null; ) {
    var t = V;
    if (t === e) {
      V = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (V = n);
      break;
    }
    V = t.return;
  }
}
function yc(e) {
  for (; V !== null; ) {
    var t = V;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Fo(4, t);
          } catch (a) {
            Z(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Z(t, i, a);
            }
          }
          var o = t.return;
          try {
            Vl(t);
          } catch (a) {
            Z(t, o, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Vl(t);
          } catch (a) {
            Z(t, s, a);
          }
      }
    } catch (a) {
      Z(t, t.return, a);
    }
    if (t === e) {
      V = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (V = l);
      break;
    }
    V = t.return;
  }
}
var D0 = Math.ceil,
  go = St.ReactCurrentDispatcher,
  Na = St.ReactCurrentOwner,
  $e = St.ReactCurrentBatchConfig,
  z = 0,
  ae = null,
  ie = null,
  ce = 0,
  je = 0,
  _n = Qt(0),
  se = 0,
  qr = null,
  mn = 0,
  zo = 0,
  _a = 0,
  Lr = null,
  Ce = null,
  Oa = 0,
  Jn = 1 / 0,
  ct = null,
  yo = !1,
  Dl = null,
  Ft = null,
  Li = !1,
  Dt = null,
  vo = 0,
  Vr = 0,
  Al = null,
  Hi = -1,
  Wi = 0;
function xe() {
  return z & 6 ? ne() : Hi !== -1 ? Hi : (Hi = ne());
}
function zt(e) {
  return e.mode & 1
    ? z & 2 && ce !== 0
      ? ce & -ce
      : p0.transition !== null
      ? (Wi === 0 && (Wi = wd()), Wi)
      : ((e = B),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ld(e.type))),
        e)
    : 1;
}
function qe(e, t, n, r) {
  if (50 < Vr) throw ((Vr = 0), (Al = null), Error(k(185)));
  ri(e, n, r),
    (!(z & 2) || e !== ae) &&
      (e === ae && (!(z & 2) && (zo |= n), se === 4 && Mt(e, ce)),
      Ve(e, r),
      n === 1 && z === 0 && !(t.mode & 1) && ((Jn = ne() + 500), No && Yt()));
}
function Ve(e, t) {
  var n = e.callbackNode;
  pg(e, t);
  var r = eo(e, e === ae ? ce : 0);
  if (r === 0)
    n !== null && Eu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Eu(n), t === 1))
      e.tag === 0 ? h0(vc.bind(null, e)) : Kd(vc.bind(null, e)),
        u0(function () {
          !(z & 6) && Yt();
        }),
        (n = null);
    else {
      switch (Sd(r)) {
        case 1:
          n = aa;
          break;
        case 4:
          n = vd;
          break;
        case 16:
          n = bi;
          break;
        case 536870912:
          n = xd;
          break;
        default:
          n = bi;
      }
      n = Gh(n, zh.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function zh(e, t) {
  if (((Hi = -1), (Wi = 0), z & 6)) throw Error(k(327));
  var n = e.callbackNode;
  if (Gn() && e.callbackNode !== n) return null;
  var r = eo(e, e === ae ? ce : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = xo(e, r);
  else {
    t = r;
    var i = z;
    z |= 2;
    var o = Bh();
    (ae !== e || ce !== t) && ((ct = null), (Jn = ne() + 500), cn(e, t));
    do
      try {
        N0();
        break;
      } catch (l) {
        Ih(e, l);
      }
    while (1);
    Sa(),
      (go.current = o),
      (z = i),
      ie !== null ? (t = 0) : ((ae = null), (ce = 0), (t = se));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = ol(e)), i !== 0 && ((r = i), (t = Rl(e, i)))), t === 1)
    )
      throw ((n = qr), cn(e, 0), Mt(e, r), Ve(e, ne()), n);
    if (t === 6) Mt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !A0(i) &&
          ((t = xo(e, r)),
          t === 2 && ((o = ol(e)), o !== 0 && ((r = o), (t = Rl(e, o)))),
          t === 1))
      )
        throw ((n = qr), cn(e, 0), Mt(e, r), Ve(e, ne()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          nn(e, Ce, ct);
          break;
        case 3:
          if (
            (Mt(e, r), (r & 130023424) === r && ((t = Oa + 500 - ne()), 10 < t))
          ) {
            if (eo(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              xe(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = hl(nn.bind(null, e, Ce, ct), t);
            break;
          }
          nn(e, Ce, ct);
          break;
        case 4:
          if ((Mt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - Ze(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = ne() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * D0(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = hl(nn.bind(null, e, Ce, ct), r);
            break;
          }
          nn(e, Ce, ct);
          break;
        case 5:
          nn(e, Ce, ct);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return Ve(e, ne()), e.callbackNode === n ? zh.bind(null, e) : null;
}
function Rl(e, t) {
  var n = Lr;
  return (
    e.current.memoizedState.isDehydrated && (cn(e, t).flags |= 256),
    (e = xo(e, t)),
    e !== 2 && ((t = Ce), (Ce = n), t !== null && Nl(t)),
    e
  );
}
function Nl(e) {
  Ce === null ? (Ce = e) : Ce.push.apply(Ce, e);
}
function A0(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Je(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
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
function Mt(e, t) {
  for (
    t &= ~_a,
      t &= ~zo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ze(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function vc(e) {
  if (z & 6) throw Error(k(327));
  Gn();
  var t = eo(e, 0);
  if (!(t & 1)) return Ve(e, ne()), null;
  var n = xo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ol(e);
    r !== 0 && ((t = r), (n = Rl(e, r)));
  }
  if (n === 1) throw ((n = qr), cn(e, 0), Mt(e, t), Ve(e, ne()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    nn(e, Ce, ct),
    Ve(e, ne()),
    null
  );
}
function Fa(e, t) {
  var n = z;
  z |= 1;
  try {
    return e(t);
  } finally {
    (z = n), z === 0 && ((Jn = ne() + 500), No && Yt());
  }
}
function gn(e) {
  Dt !== null && Dt.tag === 0 && !(z & 6) && Gn();
  var t = z;
  z |= 1;
  var n = $e.transition,
    r = B;
  try {
    if ((($e.transition = null), (B = 1), e)) return e();
  } finally {
    (B = r), ($e.transition = n), (z = t), !(z & 6) && Yt();
  }
}
function za() {
  (je = _n.current), H(_n);
}
function cn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), a0(n)), ie !== null))
    for (n = ie.return; n !== null; ) {
      var r = n;
      switch ((va(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && oo();
          break;
        case 3:
          Zn(), H(Ee), H(me), La();
          break;
        case 5:
          Ea(r);
          break;
        case 4:
          Zn();
          break;
        case 13:
          H(K);
          break;
        case 19:
          H(K);
          break;
        case 10:
          ka(r.type._context);
          break;
        case 22:
        case 23:
          za();
      }
      n = n.return;
    }
  if (
    ((ae = e),
    (ie = e = It(e.current, null)),
    (ce = je = t),
    (se = 0),
    (qr = null),
    (_a = zo = mn = 0),
    (Ce = Lr = null),
    ln !== null)
  ) {
    for (t = 0; t < ln.length; t++)
      if (((n = ln[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    ln = null;
  }
  return e;
}
function Ih(e, t) {
  do {
    var n = ie;
    try {
      if ((Sa(), (Bi.current = mo), po)) {
        for (var r = Y.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        po = !1;
      }
      if (
        ((pn = 0),
        (le = oe = Y = null),
        (Tr = !1),
        (Yr = 0),
        (Na.current = null),
        n === null || n.return === null)
      ) {
        (se = 1), (qr = t), (ie = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          l = n,
          a = t;
        if (
          ((t = ce),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = l,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var m = oc(s);
          if (m !== null) {
            (m.flags &= -257),
              sc(m, s, l, o, t),
              m.mode & 1 && ic(o, u, t),
              (t = m),
              (a = u);
            var y = t.updateQueue;
            if (y === null) {
              var v = new Set();
              v.add(a), (t.updateQueue = v);
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              ic(o, u, t), Ia();
              break e;
            }
            a = Error(k(426));
          }
        } else if (G && l.mode & 1) {
          var E = oc(s);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              sc(E, s, l, o, t),
              xa(qn(a, l));
            break e;
          }
        }
        (o = a = qn(a, l)),
          se !== 4 && (se = 2),
          Lr === null ? (Lr = [o]) : Lr.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var g = kh(o, a, t);
              qu(o, g);
              break e;
            case 1:
              l = a;
              var h = o.type,
                p = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (Ft === null || !Ft.has(p))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var x = Ph(o, l, t);
                qu(o, x);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      $h(n);
    } catch (S) {
      (t = S), ie === n && n !== null && (ie = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Bh() {
  var e = go.current;
  return (go.current = mo), e === null ? mo : e;
}
function Ia() {
  (se === 0 || se === 3 || se === 2) && (se = 4),
    ae === null || (!(mn & 268435455) && !(zo & 268435455)) || Mt(ae, ce);
}
function xo(e, t) {
  var n = z;
  z |= 2;
  var r = Bh();
  (ae !== e || ce !== t) && ((ct = null), cn(e, t));
  do
    try {
      R0();
      break;
    } catch (i) {
      Ih(e, i);
    }
  while (1);
  if ((Sa(), (z = n), (go.current = r), ie !== null)) throw Error(k(261));
  return (ae = null), (ce = 0), se;
}
function R0() {
  for (; ie !== null; ) Uh(ie);
}
function N0() {
  for (; ie !== null && !og(); ) Uh(ie);
}
function Uh(e) {
  var t = Wh(e.alternate, e, je);
  (e.memoizedProps = e.pendingProps),
    t === null ? $h(e) : (ie = t),
    (Na.current = null);
}
function $h(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = L0(n, t)), n !== null)) {
        (n.flags &= 32767), (ie = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (se = 6), (ie = null);
        return;
      }
    } else if (((n = E0(n, t, je)), n !== null)) {
      ie = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ie = t;
      return;
    }
    ie = t = e;
  } while (t !== null);
  se === 0 && (se = 5);
}
function nn(e, t, n) {
  var r = B,
    i = $e.transition;
  try {
    ($e.transition = null), (B = 1), _0(e, t, n, r);
  } finally {
    ($e.transition = i), (B = r);
  }
  return null;
}
function _0(e, t, n, r) {
  do Gn();
  while (Dt !== null);
  if (z & 6) throw Error(k(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (mg(e, o),
    e === ae && ((ie = ae = null), (ce = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Li ||
      ((Li = !0),
      Gh(bi, function () {
        return Gn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = $e.transition), ($e.transition = null);
    var s = B;
    B = 1;
    var l = z;
    (z |= 4),
      (Na.current = null),
      M0(e, n),
      Oh(n, e),
      t0(fl),
      (to = !!cl),
      (fl = cl = null),
      (e.current = n),
      j0(n),
      sg(),
      (z = l),
      (B = s),
      ($e.transition = o);
  } else e.current = n;
  if (
    (Li && ((Li = !1), (Dt = e), (vo = i)),
    (o = e.pendingLanes),
    o === 0 && (Ft = null),
    ug(n.stateNode),
    Ve(e, ne()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (yo) throw ((yo = !1), (e = Dl), (Dl = null), e);
  return (
    vo & 1 && e.tag !== 0 && Gn(),
    (o = e.pendingLanes),
    o & 1 ? (e === Al ? Vr++ : ((Vr = 0), (Al = e))) : (Vr = 0),
    Yt(),
    null
  );
}
function Gn() {
  if (Dt !== null) {
    var e = Sd(vo),
      t = $e.transition,
      n = B;
    try {
      if ((($e.transition = null), (B = 16 > e ? 16 : e), Dt === null))
        var r = !1;
      else {
        if (((e = Dt), (Dt = null), (vo = 0), z & 6)) throw Error(k(331));
        var i = z;
        for (z |= 4, V = e.current; V !== null; ) {
          var o = V,
            s = o.child;
          if (V.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (V = u; V !== null; ) {
                  var c = V;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Er(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (V = f);
                  else
                    for (; V !== null; ) {
                      c = V;
                      var d = c.sibling,
                        m = c.return;
                      if ((Rh(c), c === u)) {
                        V = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = m), (V = d);
                        break;
                      }
                      V = m;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var v = y.child;
                if (v !== null) {
                  y.child = null;
                  do {
                    var E = v.sibling;
                    (v.sibling = null), (v = E);
                  } while (v !== null);
                }
              }
              V = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (V = s);
          else
            e: for (; V !== null; ) {
              if (((o = V), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Er(9, o, o.return);
                }
              var g = o.sibling;
              if (g !== null) {
                (g.return = o.return), (V = g);
                break e;
              }
              V = o.return;
            }
        }
        var h = e.current;
        for (V = h; V !== null; ) {
          s = V;
          var p = s.child;
          if (s.subtreeFlags & 2064 && p !== null) (p.return = s), (V = p);
          else
            e: for (s = h; V !== null; ) {
              if (((l = V), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Fo(9, l);
                  }
                } catch (S) {
                  Z(l, l.return, S);
                }
              if (l === s) {
                V = null;
                break e;
              }
              var x = l.sibling;
              if (x !== null) {
                (x.return = l.return), (V = x);
                break e;
              }
              V = l.return;
            }
        }
        if (
          ((z = i), Yt(), st && typeof st.onPostCommitFiberRoot == "function")
        )
          try {
            st.onPostCommitFiberRoot(Mo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (B = n), ($e.transition = t);
    }
  }
  return !1;
}
function xc(e, t, n) {
  (t = qn(n, t)),
    (t = kh(e, t, 1)),
    (e = Ot(e, t, 1)),
    (t = xe()),
    e !== null && (ri(e, 1, t), Ve(e, t));
}
function Z(e, t, n) {
  if (e.tag === 3) xc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        xc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Ft === null || !Ft.has(r)))
        ) {
          (e = qn(n, e)),
            (e = Ph(t, e, 1)),
            (t = Ot(t, e, 1)),
            (e = xe()),
            t !== null && (ri(t, 1, e), Ve(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function O0(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = xe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ae === e &&
      (ce & n) === n &&
      (se === 4 || (se === 3 && (ce & 130023424) === ce && 500 > ne() - Oa)
        ? cn(e, 0)
        : (_a |= n)),
    Ve(e, t);
}
function Hh(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = yi), (yi <<= 1), !(yi & 130023424) && (yi = 4194304))
      : (t = 1));
  var n = xe();
  (e = xt(e, t)), e !== null && (ri(e, t, n), Ve(e, n));
}
function F0(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Hh(e, n);
}
function z0(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  r !== null && r.delete(t), Hh(e, n);
}
var Wh;
Wh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ee.current) Te = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Te = !1), T0(e, t, n);
      Te = !!(e.flags & 131072);
    }
  else (Te = !1), G && t.flags & 1048576 && Qd(t, ao, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      $i(e, t), (e = t.pendingProps);
      var i = Qn(t, me.current);
      Wn(t, n), (i = Ma(null, t, r, e, i, n));
      var o = ja();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Le(r) ? ((o = !0), so(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Ca(t),
            (i.updater = _o),
            (t.stateNode = i),
            (i._reactInternals = t),
            wl(t, r, e, n),
            (t = Pl(null, t, r, !0, o, n)))
          : ((t.tag = 0), G && o && ya(t), ve(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          ($i(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = B0(r)),
          (e = Ke(r, e)),
          i)
        ) {
          case 0:
            t = kl(null, t, r, e, n);
            break e;
          case 1:
            t = uc(null, t, r, e, n);
            break e;
          case 11:
            t = lc(null, t, r, e, n);
            break e;
          case 14:
            t = ac(null, t, r, Ke(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ke(r, i)),
        kl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ke(r, i)),
        uc(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Lh(t), e === null)) throw Error(k(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          qd(e, t),
          fo(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = qn(Error(k(423)), t)), (t = cc(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = qn(Error(k(424)), t)), (t = cc(e, t, r, n, i));
            break e;
          } else
            for (
              De = _t(t.stateNode.containerInfo.firstChild),
                Ae = t,
                G = !0,
                Ye = null,
                n = th(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Yn(), r === i)) {
            t = wt(e, t, n);
            break e;
          }
          ve(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        nh(t),
        e === null && yl(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        dl(r, i) ? (s = null) : o !== null && dl(r, o) && (t.flags |= 32),
        Eh(e, t),
        ve(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && yl(t), null;
    case 13:
      return Vh(e, t, n);
    case 4:
      return (
        Ta(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Xn(t, null, r, n)) : ve(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ke(r, i)),
        lc(e, t, r, i, n)
      );
    case 7:
      return ve(e, t, t.pendingProps, n), t.child;
    case 8:
      return ve(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ve(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          U(uo, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (Je(o.value, s)) {
            if (o.children === i.children && !Ee.current) {
              t = wt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies;
              if (l !== null) {
                s = o.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = mt(-1, n & -n)), (a.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      vl(o.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(k(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  vl(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        ve(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Wn(t, n),
        (i = He(i)),
        (r = r(i)),
        (t.flags |= 1),
        ve(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Ke(r, t.pendingProps)),
        (i = Ke(r.type, i)),
        ac(e, t, r, i, n)
      );
    case 15:
      return Ch(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ke(r, i)),
        $i(e, t),
        (t.tag = 1),
        Le(r) ? ((e = !0), so(t)) : (e = !1),
        Wn(t, n),
        bd(t, r, i),
        wl(t, r, i, n),
        Pl(null, t, r, !0, e, n)
      );
    case 19:
      return Mh(e, t, n);
    case 22:
      return Th(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function Gh(e, t) {
  return yd(e, t);
}
function I0(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
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
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ue(e, t, n, r) {
  return new I0(e, t, n, r);
}
function Ba(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function B0(e) {
  if (typeof e == "function") return Ba(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === oa)) return 11;
    if (e === sa) return 14;
  }
  return 2;
}
function It(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ue(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Gi(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) Ba(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Tn:
        return fn(n.children, i, o, t);
      case ia:
        (s = 8), (i |= 8);
        break;
      case Ws:
        return (
          (e = Ue(12, n, t, i | 2)), (e.elementType = Ws), (e.lanes = o), e
        );
      case Gs:
        return (e = Ue(13, n, t, i)), (e.elementType = Gs), (e.lanes = o), e;
      case Ks:
        return (e = Ue(19, n, t, i)), (e.elementType = Ks), (e.lanes = o), e;
      case ed:
        return Io(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Jf:
              s = 10;
              break e;
            case bf:
              s = 9;
              break e;
            case oa:
              s = 11;
              break e;
            case sa:
              s = 14;
              break e;
            case Tt:
              (s = 16), (r = null);
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ue(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function fn(e, t, n, r) {
  return (e = Ue(7, e, r, t)), (e.lanes = n), e;
}
function Io(e, t, n, r) {
  return (
    (e = Ue(22, e, r, t)),
    (e.elementType = ed),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ls(e, t, n) {
  return (e = Ue(6, e, null, t)), (e.lanes = n), e;
}
function Vs(e, t, n) {
  return (
    (t = Ue(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function U0(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = as(0)),
    (this.expirationTimes = as(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = as(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Ua(e, t, n, r, i, o, s, l, a) {
  return (
    (e = new U0(e, t, n, l, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ue(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ca(o),
    e
  );
}
function $0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Cn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Kh(e) {
  if (!e) return Ht;
  e = e._reactInternals;
  e: {
    if (vn(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Le(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Le(n)) return Gd(e, n, t);
  }
  return t;
}
function Qh(e, t, n, r, i, o, s, l, a) {
  return (
    (e = Ua(n, r, !0, e, i, o, s, l, a)),
    (e.context = Kh(null)),
    (n = e.current),
    (r = xe()),
    (i = zt(n)),
    (o = mt(r, i)),
    (o.callback = t ?? null),
    Ot(n, o, i),
    (e.current.lanes = i),
    ri(e, i, r),
    Ve(e, r),
    e
  );
}
function Bo(e, t, n, r) {
  var i = t.current,
    o = xe(),
    s = zt(i);
  return (
    (n = Kh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = mt(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ot(i, t, s)),
    e !== null && (qe(e, i, s, o), Ii(e, i, s)),
    s
  );
}
function wo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function wc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function $a(e, t) {
  wc(e, t), (e = e.alternate) && wc(e, t);
}
function H0() {
  return null;
}
var Yh =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ha(e) {
  this._internalRoot = e;
}
Uo.prototype.render = Ha.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  Bo(e, t, null, null);
};
Uo.prototype.unmount = Ha.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    gn(function () {
      Bo(null, e, null, null);
    }),
      (t[vt] = null);
  }
};
function Uo(e) {
  this._internalRoot = e;
}
Uo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Cd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Vt.length && t !== 0 && t < Vt[n].priority; n++);
    Vt.splice(n, 0, e), n === 0 && Ed(e);
  }
};
function Wa(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function $o(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Sc() {}
function W0(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = wo(s);
        o.call(u);
      };
    }
    var s = Qh(t, r, e, 0, null, !1, !1, "", Sc);
    return (
      (e._reactRootContainer = s),
      (e[vt] = s.current),
      Hr(e.nodeType === 8 ? e.parentNode : e),
      gn(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = wo(a);
      l.call(u);
    };
  }
  var a = Ua(e, 0, !1, null, null, !1, !1, "", Sc);
  return (
    (e._reactRootContainer = a),
    (e[vt] = a.current),
    Hr(e.nodeType === 8 ? e.parentNode : e),
    gn(function () {
      Bo(t, a, n, r);
    }),
    a
  );
}
function Ho(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var a = wo(s);
        l.call(a);
      };
    }
    Bo(t, s, e, i);
  } else s = W0(n, t, e, i, r);
  return wo(s);
}
kd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = yr(t.pendingLanes);
        n !== 0 &&
          (ua(t, n | 1), Ve(t, ne()), !(z & 6) && ((Jn = ne() + 500), Yt()));
      }
      break;
    case 13:
      gn(function () {
        var r = xt(e, 1);
        if (r !== null) {
          var i = xe();
          qe(r, e, 1, i);
        }
      }),
        $a(e, 1);
  }
};
ca = function (e) {
  if (e.tag === 13) {
    var t = xt(e, 134217728);
    if (t !== null) {
      var n = xe();
      qe(t, e, 134217728, n);
    }
    $a(e, 134217728);
  }
};
Pd = function (e) {
  if (e.tag === 13) {
    var t = zt(e),
      n = xt(e, t);
    if (n !== null) {
      var r = xe();
      qe(n, e, t, r);
    }
    $a(e, t);
  }
};
Cd = function () {
  return B;
};
Td = function (e, t) {
  var n = B;
  try {
    return (B = e), t();
  } finally {
    B = n;
  }
};
nl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Xs(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Ro(r);
            if (!i) throw Error(k(90));
            nd(r), Xs(r, i);
          }
        }
      }
      break;
    case "textarea":
      id(e, n);
      break;
    case "select":
      (t = n.value), t != null && Bn(e, !!n.multiple, t, !1);
  }
};
fd = Fa;
dd = gn;
var G0 = { usingClientEntryPoint: !1, Events: [oi, Mn, Ro, ud, cd, Fa] },
  fr = {
    findFiberByHostInstance: sn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  K0 = {
    bundleType: fr.bundleType,
    version: fr.version,
    rendererPackageName: fr.rendererPackageName,
    rendererConfig: fr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: St.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = md(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: fr.findFiberByHostInstance || H0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Vi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Vi.isDisabled && Vi.supportsFiber)
    try {
      (Mo = Vi.inject(K0)), (st = Vi);
    } catch {}
}
_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = G0;
_e.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Wa(t)) throw Error(k(200));
  return $0(e, t, null, n);
};
_e.createRoot = function (e, t) {
  if (!Wa(e)) throw Error(k(299));
  var n = !1,
    r = "",
    i = Yh;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Ua(e, 1, !1, null, null, n, !1, r, i)),
    (e[vt] = t.current),
    Hr(e.nodeType === 8 ? e.parentNode : e),
    new Ha(t)
  );
};
_e.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(k(188))
      : ((e = Object.keys(e).join(",")), Error(k(268, e)));
  return (e = md(t)), (e = e === null ? null : e.stateNode), e;
};
_e.flushSync = function (e) {
  return gn(e);
};
_e.hydrate = function (e, t, n) {
  if (!$o(t)) throw Error(k(200));
  return Ho(null, e, t, !0, n);
};
_e.hydrateRoot = function (e, t, n) {
  if (!Wa(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = Yh;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Qh(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[vt] = t.current),
    Hr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Uo(t);
};
_e.render = function (e, t, n) {
  if (!$o(t)) throw Error(k(200));
  return Ho(null, e, t, !1, n);
};
_e.unmountComponentAtNode = function (e) {
  if (!$o(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (gn(function () {
        Ho(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[vt] = null);
        });
      }),
      !0)
    : !1;
};
_e.unstable_batchedUpdates = Fa;
_e.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!$o(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return Ho(e, t, n, !1, r);
};
_e.version = "18.2.0-next-9e3b772b8-20220608";
function Xh() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xh);
    } catch (e) {
      console.error(e);
    }
}
Xh(), (Qf.exports = _e);
var Q0 = Qf.exports,
  kc = Q0;
($s.createRoot = kc.createRoot), ($s.hydrateRoot = kc.hydrateRoot);
const Wo = M.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  Go = M.createContext({}),
  Ga = M.createContext(null),
  Ko = typeof document < "u",
  Qo = Ko ? M.useLayoutEffect : M.useEffect,
  Zh = M.createContext({ strict: !1 });
function Y0(e, t, n, r) {
  const { visualElement: i } = M.useContext(Go),
    o = M.useContext(Zh),
    s = M.useContext(Ga),
    l = M.useContext(Wo).reducedMotion,
    a = M.useRef();
  (r = r || o.renderer),
    !a.current &&
      r &&
      (a.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: l,
      }));
  const u = a.current;
  M.useInsertionEffect(() => {
    u && u.update(n, s);
  });
  const c = M.useRef(!!window.HandoffAppearAnimations);
  return (
    Qo(() => {
      u &&
        (u.render(),
        c.current && u.animationState && u.animationState.animateChanges());
    }),
    M.useEffect(() => {
      u &&
        (u.updateFeatures(),
        !c.current && u.animationState && u.animationState.animateChanges(),
        (window.HandoffAppearAnimations = void 0),
        (c.current = !1));
    }),
    u
  );
}
function On(e) {
  return (
    typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function X0(e, t, n) {
  return M.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : On(n) && (n.current = r));
    },
    [t]
  );
}
function Jr(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Yo(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const Ka = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Qa = ["initial", ...Ka];
function Xo(e) {
  return Yo(e.animate) || Qa.some((t) => Jr(e[t]));
}
function qh(e) {
  return !!(Xo(e) || e.variants);
}
function Z0(e, t) {
  if (Xo(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Jr(n) ? n : void 0,
      animate: Jr(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function q0(e) {
  const { initial: t, animate: n } = Z0(e, M.useContext(Go));
  return M.useMemo(() => ({ initial: t, animate: n }), [Pc(t), Pc(n)]);
}
function Pc(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Cc = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  br = {};
for (const e in Cc) br[e] = { isEnabled: (t) => Cc[e].some((n) => !!t[n]) };
function J0(e) {
  for (const t in e) br[t] = { ...br[t], ...e[t] };
}
const Jh = M.createContext({}),
  bh = M.createContext({}),
  b0 = Symbol.for("motionComponentSymbol");
function ey({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && J0(e);
  function o(l, a) {
    let u;
    const c = { ...M.useContext(Wo), ...l, layoutId: ty(l) },
      { isStatic: f } = c,
      d = q0(l),
      m = r(l, f);
    if (!f && Ko) {
      d.visualElement = Y0(i, m, c, t);
      const y = M.useContext(bh),
        v = M.useContext(Zh).strict;
      d.visualElement && (u = d.visualElement.loadFeatures(c, v, e, y));
    }
    return M.createElement(
      Go.Provider,
      { value: d },
      u && d.visualElement
        ? M.createElement(u, { visualElement: d.visualElement, ...c })
        : null,
      n(i, l, X0(m, d.visualElement, a), m, f, d.visualElement)
    );
  }
  const s = M.forwardRef(o);
  return (s[b0] = i), s;
}
function ty({ layoutId: e }) {
  const t = M.useContext(Jh).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function ny(e) {
  function t(r, i = {}) {
    return ey(e(r, i));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)),
  });
}
const ry = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Ya(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(ry.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const So = {};
function iy(e) {
  Object.assign(So, e);
}
const li = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  xn = new Set(li);
function ep(e, { layout: t, layoutId: n }) {
  return (
    xn.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!So[e] || e === "opacity"))
  );
}
const ge = (e) => !!(e && e.getVelocity),
  oy = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  sy = li.length;
function ly(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  i
) {
  let o = "";
  for (let s = 0; s < sy; s++) {
    const l = li[s];
    if (e[l] !== void 0) {
      const a = oy[l] || l;
      o += `${a}(${e[l]}) `;
    }
  }
  return (
    t && !e.z && (o += "translateZ(0)"),
    (o = o.trim()),
    i ? (o = i(e, r ? "" : o)) : n && r && (o = "none"),
    o
  );
}
const tp = (e) => (t) => typeof t == "string" && t.startsWith(e),
  np = tp("--"),
  _l = tp("var(--"),
  ay =
    /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
  uy = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  Wt = (e, t, n) => Math.min(Math.max(n, e), t),
  wn = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Mr = { ...wn, transform: (e) => Wt(0, 1, e) },
  Mi = { ...wn, default: 1 },
  jr = (e) => Math.round(e * 1e5) / 1e5,
  Zo = /(-)?([\d]*\.?[\d])+/g,
  rp =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  cy =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function ai(e) {
  return typeof e == "string";
}
const ui = (e) => ({
    test: (t) => ai(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Pt = ui("deg"),
  at = ui("%"),
  j = ui("px"),
  fy = ui("vh"),
  dy = ui("vw"),
  Tc = {
    ...at,
    parse: (e) => at.parse(e) / 100,
    transform: (e) => at.transform(e * 100),
  },
  Ec = { ...wn, transform: Math.round },
  ip = {
    borderWidth: j,
    borderTopWidth: j,
    borderRightWidth: j,
    borderBottomWidth: j,
    borderLeftWidth: j,
    borderRadius: j,
    radius: j,
    borderTopLeftRadius: j,
    borderTopRightRadius: j,
    borderBottomRightRadius: j,
    borderBottomLeftRadius: j,
    width: j,
    maxWidth: j,
    height: j,
    maxHeight: j,
    size: j,
    top: j,
    right: j,
    bottom: j,
    left: j,
    padding: j,
    paddingTop: j,
    paddingRight: j,
    paddingBottom: j,
    paddingLeft: j,
    margin: j,
    marginTop: j,
    marginRight: j,
    marginBottom: j,
    marginLeft: j,
    rotate: Pt,
    rotateX: Pt,
    rotateY: Pt,
    rotateZ: Pt,
    scale: Mi,
    scaleX: Mi,
    scaleY: Mi,
    scaleZ: Mi,
    skew: Pt,
    skewX: Pt,
    skewY: Pt,
    distance: j,
    translateX: j,
    translateY: j,
    translateZ: j,
    x: j,
    y: j,
    z: j,
    perspective: j,
    transformPerspective: j,
    opacity: Mr,
    originX: Tc,
    originY: Tc,
    originZ: j,
    zIndex: Ec,
    fillOpacity: Mr,
    strokeOpacity: Mr,
    numOctaves: Ec,
  };
function Xa(e, t, n, r) {
  const { style: i, vars: o, transform: s, transformOrigin: l } = e;
  let a = !1,
    u = !1,
    c = !0;
  for (const f in t) {
    const d = t[f];
    if (np(f)) {
      o[f] = d;
      continue;
    }
    const m = ip[f],
      y = uy(d, m);
    if (xn.has(f)) {
      if (((a = !0), (s[f] = y), !c)) continue;
      d !== (m.default || 0) && (c = !1);
    } else f.startsWith("origin") ? ((u = !0), (l[f] = y)) : (i[f] = y);
  }
  if (
    (t.transform ||
      (a || r
        ? (i.transform = ly(e.transform, n, c, r))
        : i.transform && (i.transform = "none")),
    u)
  ) {
    const { originX: f = "50%", originY: d = "50%", originZ: m = 0 } = l;
    i.transformOrigin = `${f} ${d} ${m}`;
  }
}
const Za = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function op(e, t, n) {
  for (const r in t) !ge(t[r]) && !ep(r, n) && (e[r] = t[r]);
}
function hy({ transformTemplate: e }, t, n) {
  return M.useMemo(() => {
    const r = Za();
    return (
      Xa(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function py(e, t, n) {
  const r = e.style || {},
    i = {};
  return (
    op(i, r, e),
    Object.assign(i, hy(e, t, n)),
    e.transformValues ? e.transformValues(i) : i
  );
}
function my(e, t, n) {
  const r = {},
    i = py(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
      (i.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = i),
    r
  );
}
const gy = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "ignoreStrict",
  "viewport",
]);
function ko(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    gy.has(e)
  );
}
let sp = (e) => !ko(e);
function yy(e) {
  e && (sp = (t) => (t.startsWith("on") ? !ko(t) : e(t)));
}
try {
  yy(require("@emotion/is-prop-valid").default);
} catch {}
function vy(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((sp(i) ||
        (n === !0 && ko(i)) ||
        (!t && !ko(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function Lc(e, t, n) {
  return typeof e == "string" ? e : j.transform(t + n * e);
}
function xy(e, t, n) {
  const r = Lc(t, e.x, e.width),
    i = Lc(n, e.y, e.height);
  return `${r} ${i}`;
}
const wy = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  Sy = { offset: "strokeDashoffset", array: "strokeDasharray" };
function ky(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? wy : Sy;
  e[o.offset] = j.transform(-r);
  const s = j.transform(t),
    l = j.transform(n);
  e[o.array] = `${s} ${l}`;
}
function qa(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: l = 1,
    pathOffset: a = 0,
    ...u
  },
  c,
  f,
  d
) {
  if ((Xa(e, u, c, d), f)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: m, style: y, dimensions: v } = e;
  m.transform && (v && (y.transform = m.transform), delete m.transform),
    v &&
      (i !== void 0 || o !== void 0 || y.transform) &&
      (y.transformOrigin = xy(
        v,
        i !== void 0 ? i : 0.5,
        o !== void 0 ? o : 0.5
      )),
    t !== void 0 && (m.x = t),
    n !== void 0 && (m.y = n),
    r !== void 0 && (m.scale = r),
    s !== void 0 && ky(m, s, l, a, !1);
}
const lp = () => ({ ...Za(), attrs: {} }),
  Ja = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function Py(e, t, n, r) {
  const i = M.useMemo(() => {
    const o = lp();
    return (
      qa(o, t, { enableHardwareAcceleration: !1 }, Ja(r), e.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    const o = {};
    op(o, e.style, e), (i.style = { ...o, ...i.style });
  }
  return i;
}
function Cy(e = !1) {
  return (n, r, i, { latestValues: o }, s) => {
    const a = (Ya(n) ? Py : my)(r, o, s, n),
      c = { ...vy(r, typeof n == "string", e), ...a, ref: i },
      { children: f } = r,
      d = M.useMemo(() => (ge(f) ? f.get() : f), [f]);
    return M.createElement(n, { ...c, children: d });
  };
}
const ba = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function ap(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const o in n) e.style.setProperty(o, n[o]);
}
const up = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function cp(e, t, n, r) {
  ap(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(up.has(i) ? i : ba(i), t.attrs[i]);
}
function eu(e, t) {
  const { style: n } = e,
    r = {};
  for (const i in n)
    (ge(n[i]) || (t.style && ge(t.style[i])) || ep(i, e)) && (r[i] = n[i]);
  return r;
}
function fp(e, t) {
  const n = eu(e, t);
  for (const r in e)
    if (ge(e[r]) || ge(t[r])) {
      const i =
        li.indexOf(r) !== -1
          ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
          : r;
      n[i] = e[r];
    }
  return n;
}
function tu(e, t, n, r = {}, i = {}) {
  return (
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    t
  );
}
function qo(e) {
  const t = M.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Po = (e) => Array.isArray(e),
  Ty = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  Ey = (e) => (Po(e) ? e[e.length - 1] || 0 : e);
function Ki(e) {
  const t = ge(e) ? e.get() : e;
  return Ty(t) ? t.toValue() : t;
}
function Ly(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  i,
  o
) {
  const s = { latestValues: Vy(r, i, o, e), renderState: t() };
  return n && (s.mount = (l) => n(r, l, s)), s;
}
const dp = (e) => (t, n) => {
  const r = M.useContext(Go),
    i = M.useContext(Ga),
    o = () => Ly(e, t, r, i);
  return n ? o() : qo(o);
};
function Vy(e, t, n, r) {
  const i = {},
    o = r(e, {});
  for (const d in o) i[d] = Ki(o[d]);
  let { initial: s, animate: l } = e;
  const a = Xo(e),
    u = qh(e);
  t &&
    u &&
    !a &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), l === void 0 && (l = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const f = c ? l : s;
  return (
    f &&
      typeof f != "boolean" &&
      !Yo(f) &&
      (Array.isArray(f) ? f : [f]).forEach((m) => {
        const y = tu(e, m);
        if (!y) return;
        const { transitionEnd: v, transition: E, ...g } = y;
        for (const h in g) {
          let p = g[h];
          if (Array.isArray(p)) {
            const x = c ? p.length - 1 : 0;
            p = p[x];
          }
          p !== null && (i[h] = p);
        }
        for (const h in v) i[h] = v[h];
      }),
    i
  );
}
const q = (e) => e;
class Vc {
  constructor() {
    (this.order = []), (this.scheduled = new Set());
  }
  add(t) {
    if (!this.scheduled.has(t))
      return this.scheduled.add(t), this.order.push(t), !0;
  }
  remove(t) {
    const n = this.order.indexOf(t);
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t));
  }
  clear() {
    (this.order.length = 0), this.scheduled.clear();
  }
}
function My(e) {
  let t = new Vc(),
    n = new Vc(),
    r = 0,
    i = !1,
    o = !1;
  const s = new WeakSet(),
    l = {
      schedule: (a, u = !1, c = !1) => {
        const f = c && i,
          d = f ? t : n;
        return u && s.add(a), d.add(a) && f && i && (r = t.order.length), a;
      },
      cancel: (a) => {
        n.remove(a), s.delete(a);
      },
      process: (a) => {
        if (i) {
          o = !0;
          return;
        }
        if (((i = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length), r))
          for (let u = 0; u < r; u++) {
            const c = t.order[u];
            c(a), s.has(c) && (l.schedule(c), e());
          }
        (i = !1), o && ((o = !1), l.process(a));
      },
    };
  return l;
}
const ji = ["prepare", "read", "update", "preRender", "render", "postRender"],
  jy = 40;
function Dy(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = ji.reduce((f, d) => ((f[d] = My(() => (n = !0))), f), {}),
    s = (f) => o[f].process(i),
    l = () => {
      const f = performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(f - i.timestamp, jy), 1)),
        (i.timestamp = f),
        (i.isProcessing = !0),
        ji.forEach(s),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(l));
    },
    a = () => {
      (n = !0), (r = !0), i.isProcessing || e(l);
    };
  return {
    schedule: ji.reduce((f, d) => {
      const m = o[d];
      return (f[d] = (y, v = !1, E = !1) => (n || a(), m.schedule(y, v, E))), f;
    }, {}),
    cancel: (f) => ji.forEach((d) => o[d].cancel(f)),
    state: i,
    steps: o,
  };
}
const {
    schedule: I,
    cancel: be,
    state: te,
    steps: Ms,
  } = Dy(typeof requestAnimationFrame < "u" ? requestAnimationFrame : q, !0),
  Ay = {
    useVisualState: dp({
      scrapeMotionValuesFromProps: fp,
      createRenderState: lp,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        I.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          I.render(() => {
            qa(
              n,
              r,
              { enableHardwareAcceleration: !1 },
              Ja(t.tagName),
              e.transformTemplate
            ),
              cp(t, n);
          });
      },
    }),
  },
  Ry = {
    useVisualState: dp({
      scrapeMotionValuesFromProps: eu,
      createRenderState: Za,
    }),
  };
function Ny(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(Ya(e) ? Ay : Ry),
    preloadedFeatures: n,
    useRender: Cy(t),
    createVisualElement: r,
    Component: e,
  };
}
function pt(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const hp = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function Jo(e, t = "page") {
  return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
const _y = (e) => (t) => hp(t) && e(t, Jo(t));
function gt(e, t, n, r) {
  return pt(e, t, _y(n), r);
}
const Oy = (e, t) => (n) => t(e(n)),
  Bt = (...e) => e.reduce(Oy);
function pp(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const Mc = pp("dragHorizontal"),
  jc = pp("dragVertical");
function mp(e) {
  let t = !1;
  if (e === "y") t = jc();
  else if (e === "x") t = Mc();
  else {
    const n = Mc(),
      r = jc();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function gp() {
  const e = mp(!0);
  return e ? (e(), !1) : !0;
}
class Xt {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function Dc(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"),
    r = "onHover" + (t ? "Start" : "End"),
    i = (o, s) => {
      if (o.type === "touch" || gp()) return;
      const l = e.getProps();
      e.animationState &&
        l.whileHover &&
        e.animationState.setActive("whileHover", t),
        l[r] && I.update(() => l[r](o, s));
    };
  return gt(e.current, n, i, { passive: !e.getProps()[r] });
}
class Fy extends Xt {
  mount() {
    this.unmount = Bt(Dc(this.node, !0), Dc(this.node, !1));
  }
  unmount() {}
}
class zy extends Xt {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Bt(
      pt(this.node.current, "focus", () => this.onFocus()),
      pt(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const yp = (e, t) => (t ? (e === t ? !0 : yp(e, t.parentElement)) : !1);
function js(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, Jo(n));
}
class Iy extends Xt {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = q),
      (this.removeEndListeners = q),
      (this.removeAccessibleListeners = q),
      (this.startPointerPress = (t, n) => {
        if ((this.removeEndListeners(), this.isPressing)) return;
        const r = this.node.getProps(),
          o = gt(
            window,
            "pointerup",
            (l, a) => {
              if (!this.checkPressEnd()) return;
              const { onTap: u, onTapCancel: c } = this.node.getProps();
              I.update(() => {
                yp(this.node.current, l.target) ? u && u(l, a) : c && c(l, a);
              });
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          s = gt(window, "pointercancel", (l, a) => this.cancelPress(l, a), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = Bt(o, s)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (o) => {
            if (o.key !== "Enter" || this.isPressing) return;
            const s = (l) => {
              l.key !== "Enter" ||
                !this.checkPressEnd() ||
                js("up", (a, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && I.update(() => c(a, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = pt(this.node.current, "keyup", s)),
              js("down", (l, a) => {
                this.startPress(l, a);
              });
          },
          n = pt(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && js("cancel", (o, s) => this.cancelPress(o, s));
          },
          i = pt(this.node.current, "blur", r);
        this.removeAccessibleListeners = Bt(n, i);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && I.update(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !gp()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && I.update(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = gt(this.node.current, "pointerdown", this.startPointerPress, {
        passive: !(t.onTapStart || t.onPointerStart),
      }),
      r = pt(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Bt(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const Ol = new WeakMap(),
  Ds = new WeakMap(),
  By = (e) => {
    const t = Ol.get(e.target);
    t && t(e);
  },
  Uy = (e) => {
    e.forEach(By);
  };
function $y({ root: e, ...t }) {
  const n = e || document;
  Ds.has(n) || Ds.set(n, {});
  const r = Ds.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(Uy, { root: e, ...t })), r[i];
}
function Hy(e, t, n) {
  const r = $y(t);
  return (
    Ol.set(e, n),
    r.observe(e),
    () => {
      Ol.delete(e), r.unobserve(e);
    }
  );
}
const Wy = { some: 0, all: 1 };
class Gy extends Xt {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: o } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : Wy[i],
      },
      l = (a) => {
        const { isIntersecting: u } = a;
        if (
          this.isInView === u ||
          ((this.isInView = u), o && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
          d = u ? c : f;
        d && d(a);
      };
    return Hy(this.node.current, s, l);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Ky(t, n)) && this.startObserver();
  }
  unmount() {}
}
function Ky({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Qy = {
  inView: { Feature: Gy },
  tap: { Feature: Iy },
  focus: { Feature: zy },
  hover: { Feature: Fy },
};
function vp(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function Yy(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function Xy(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function bo(e, t, n) {
  const r = e.getProps();
  return tu(r, t, n !== void 0 ? n : r.custom, Yy(e), Xy(e));
}
const Zy = "framerAppearId",
  qy = "data-" + ba(Zy);
let xp = q,
  es = q;
const Ut = (e) => e * 1e3,
  ut = (e) => e / 1e3,
  Jy = { current: !1 },
  wp = (e) => Array.isArray(e) && typeof e[0] == "number";
function Sp(e) {
  return !!(
    !e ||
    (typeof e == "string" && kp[e]) ||
    wp(e) ||
    (Array.isArray(e) && e.every(Sp))
  );
}
const xr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  kp = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: xr([0, 0.65, 0.55, 1]),
    circOut: xr([0.55, 0, 1, 0.45]),
    backIn: xr([0.31, 0.01, 0.66, -0.59]),
    backOut: xr([0.33, 1.53, 0.69, 0.99]),
  };
function Pp(e) {
  if (e) return wp(e) ? xr(e) : Array.isArray(e) ? e.map(Pp) : kp[e];
}
function by(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i,
    repeat: o = 0,
    repeatType: s = "loop",
    ease: l,
    times: a,
  } = {}
) {
  const u = { [t]: n };
  a && (u.offset = a);
  const c = Pp(l);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: o + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
function ev(e, { repeat: t, repeatType: n = "loop" }) {
  const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
const Cp = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  tv = 1e-7,
  nv = 12;
function rv(e, t, n, r, i) {
  let o,
    s,
    l = 0;
  do (s = t + (n - t) / 2), (o = Cp(s, r, i) - e), o > 0 ? (n = s) : (t = s);
  while (Math.abs(o) > tv && ++l < nv);
  return s;
}
function ci(e, t, n, r) {
  if (e === t && n === r) return q;
  const i = (o) => rv(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : Cp(i(o), t, r));
}
const iv = ci(0.42, 0, 1, 1),
  ov = ci(0, 0, 0.58, 1),
  Tp = ci(0.42, 0, 0.58, 1),
  sv = (e) => Array.isArray(e) && typeof e[0] != "number",
  Ep = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  Lp = (e) => (t) => 1 - e(1 - t),
  Vp = (e) => 1 - Math.sin(Math.acos(e)),
  nu = Lp(Vp),
  lv = Ep(nu),
  Mp = ci(0.33, 1.53, 0.69, 0.99),
  ru = Lp(Mp),
  av = Ep(ru),
  uv = (e) =>
    (e *= 2) < 1 ? 0.5 * ru(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  cv = {
    linear: q,
    easeIn: iv,
    easeInOut: Tp,
    easeOut: ov,
    circIn: Vp,
    circInOut: lv,
    circOut: nu,
    backIn: ru,
    backInOut: av,
    backOut: Mp,
    anticipate: uv,
  },
  Ac = (e) => {
    if (Array.isArray(e)) {
      es(e.length === 4);
      const [t, n, r, i] = e;
      return ci(t, n, r, i);
    } else if (typeof e == "string") return cv[e];
    return e;
  },
  iu = (e, t) => (n) =>
    !!(
      (ai(n) && cy.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  jp = (e, t, n) => (r) => {
    if (!ai(r)) return r;
    const [i, o, s, l] = r.match(Zo);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: l !== void 0 ? parseFloat(l) : 1,
    };
  },
  fv = (e) => Wt(0, 255, e),
  As = { ...wn, transform: (e) => Math.round(fv(e)) },
  un = {
    test: iu("rgb", "red"),
    parse: jp("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      As.transform(e) +
      ", " +
      As.transform(t) +
      ", " +
      As.transform(n) +
      ", " +
      jr(Mr.transform(r)) +
      ")",
  };
function dv(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const Fl = { test: iu("#"), parse: dv, transform: un.transform },
  Fn = {
    test: iu("hsl", "hue"),
    parse: jp("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      at.transform(jr(t)) +
      ", " +
      at.transform(jr(n)) +
      ", " +
      jr(Mr.transform(r)) +
      ")",
  },
  ye = {
    test: (e) => un.test(e) || Fl.test(e) || Fn.test(e),
    parse: (e) =>
      un.test(e) ? un.parse(e) : Fn.test(e) ? Fn.parse(e) : Fl.parse(e),
    transform: (e) =>
      ai(e) ? e : e.hasOwnProperty("red") ? un.transform(e) : Fn.transform(e),
  },
  Q = (e, t, n) => -n * e + n * t + e;
function Rs(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function hv({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    const l = n < 0.5 ? n * (1 + t) : n + t - n * t,
      a = 2 * n - l;
    (i = Rs(a, l, e + 1 / 3)), (o = Rs(a, l, e)), (s = Rs(a, l, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
const Ns = (e, t, n) => {
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r));
  },
  pv = [Fl, un, Fn],
  mv = (e) => pv.find((t) => t.test(e));
function Rc(e) {
  const t = mv(e);
  let n = t.parse(e);
  return t === Fn && (n = hv(n)), n;
}
const Dp = (e, t) => {
  const n = Rc(e),
    r = Rc(t),
    i = { ...n };
  return (o) => (
    (i.red = Ns(n.red, r.red, o)),
    (i.green = Ns(n.green, r.green, o)),
    (i.blue = Ns(n.blue, r.blue, o)),
    (i.alpha = Q(n.alpha, r.alpha, o)),
    un.transform(i)
  );
};
function gv(e) {
  var t, n;
  return (
    isNaN(e) &&
    ai(e) &&
    (((t = e.match(Zo)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(rp)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const Ap = { regex: ay, countKey: "Vars", token: "${v}", parse: q },
  Rp = { regex: rp, countKey: "Colors", token: "${c}", parse: ye.parse },
  Np = { regex: Zo, countKey: "Numbers", token: "${n}", parse: wn.parse };
function _s(e, { regex: t, countKey: n, token: r, parse: i }) {
  const o = e.tokenised.match(t);
  o &&
    ((e["num" + n] = o.length),
    (e.tokenised = e.tokenised.replace(t, r)),
    e.values.push(...o.map(i)));
}
function Co(e) {
  const t = e.toString(),
    n = {
      value: t,
      tokenised: t,
      values: [],
      numVars: 0,
      numColors: 0,
      numNumbers: 0,
    };
  return n.value.includes("var(--") && _s(n, Ap), _s(n, Rp), _s(n, Np), n;
}
function _p(e) {
  return Co(e).values;
}
function Op(e) {
  const { values: t, numColors: n, numVars: r, tokenised: i } = Co(e),
    o = t.length;
  return (s) => {
    let l = i;
    for (let a = 0; a < o; a++)
      a < r
        ? (l = l.replace(Ap.token, s[a]))
        : a < r + n
        ? (l = l.replace(Rp.token, ye.transform(s[a])))
        : (l = l.replace(Np.token, jr(s[a])));
    return l;
  };
}
const yv = (e) => (typeof e == "number" ? 0 : e);
function vv(e) {
  const t = _p(e);
  return Op(e)(t.map(yv));
}
const Gt = {
    test: gv,
    parse: _p,
    createTransformer: Op,
    getAnimatableNone: vv,
  },
  Fp = (e, t) => (n) => `${n > 0 ? t : e}`;
function zp(e, t) {
  return typeof e == "number"
    ? (n) => Q(e, t, n)
    : ye.test(e)
    ? Dp(e, t)
    : e.startsWith("var(")
    ? Fp(e, t)
    : Bp(e, t);
}
const Ip = (e, t) => {
    const n = [...e],
      r = n.length,
      i = e.map((o, s) => zp(o, t[s]));
    return (o) => {
      for (let s = 0; s < r; s++) n[s] = i[s](o);
      return n;
    };
  },
  xv = (e, t) => {
    const n = { ...e, ...t },
      r = {};
    for (const i in n)
      e[i] !== void 0 && t[i] !== void 0 && (r[i] = zp(e[i], t[i]));
    return (i) => {
      for (const o in r) n[o] = r[o](i);
      return n;
    };
  },
  Bp = (e, t) => {
    const n = Gt.createTransformer(t),
      r = Co(e),
      i = Co(t);
    return r.numVars === i.numVars &&
      r.numColors === i.numColors &&
      r.numNumbers >= i.numNumbers
      ? Bt(Ip(r.values, i.values), n)
      : Fp(e, t);
  },
  bn = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  Nc = (e, t) => (n) => Q(e, t, n);
function wv(e) {
  return typeof e == "number"
    ? Nc
    : typeof e == "string"
    ? ye.test(e)
      ? Dp
      : Bp
    : Array.isArray(e)
    ? Ip
    : typeof e == "object"
    ? xv
    : Nc;
}
function Sv(e, t, n) {
  const r = [],
    i = n || wv(e[0]),
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let l = i(e[s], e[s + 1]);
    if (t) {
      const a = Array.isArray(t) ? t[s] || q : t;
      l = Bt(a, l);
    }
    r.push(l);
  }
  return r;
}
function ts(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if ((es(o === t.length), o === 1)) return () => t[0];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = Sv(t, r, i),
    l = s.length,
    a = (u) => {
      let c = 0;
      if (l > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const f = bn(e[c], e[c + 1], u);
      return s[c](f);
    };
  return n ? (u) => a(Wt(e[0], e[o - 1], u)) : a;
}
function kv(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = bn(0, t, r);
    e.push(Q(n, 1, i));
  }
}
function Up(e) {
  const t = [0];
  return kv(t, e.length - 1), t;
}
function Pv(e, t) {
  return e.map((n) => n * t);
}
function Cv(e, t) {
  return e.map(() => t || Tp).splice(0, e.length - 1);
}
function To({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = sv(r) ? r.map(Ac) : Ac(r),
    o = { done: !1, value: t[0] },
    s = Pv(n && n.length === t.length ? n : Up(t), e),
    l = ts(s, t, { ease: Array.isArray(i) ? i : Cv(t, i) });
  return {
    calculatedDuration: e,
    next: (a) => ((o.value = l(a)), (o.done = a >= e), o),
  };
}
function ou(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Tv = 5;
function $p(e, t, n) {
  const r = Math.max(t - Tv, 0);
  return ou(n - e(r), t - r);
}
const Os = 0.001,
  Ev = 0.01,
  _c = 10,
  Lv = 0.05,
  Vv = 1;
function Mv({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i, o;
  xp(e <= Ut(_c));
  let s = 1 - t;
  (s = Wt(Lv, Vv, s)),
    (e = Wt(Ev, _c, ut(e))),
    s < 1
      ? ((i = (u) => {
          const c = u * s,
            f = c * e,
            d = c - n,
            m = zl(u, s),
            y = Math.exp(-f);
          return Os - (d / m) * y;
        }),
        (o = (u) => {
          const f = u * s * e,
            d = f * n + n,
            m = Math.pow(s, 2) * Math.pow(u, 2) * e,
            y = Math.exp(-f),
            v = zl(Math.pow(u, 2), s);
          return ((-i(u) + Os > 0 ? -1 : 1) * ((d - m) * y)) / v;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -Os + c * f;
        }),
        (o = (u) => {
          const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return c * f;
        }));
  const l = 5 / e,
    a = Dv(i, o, l);
  if (((e = Ut(e)), isNaN(a)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(a, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const jv = 12;
function Dv(e, t, n) {
  let r = n;
  for (let i = 1; i < jv; i++) r = r - e(r) / t(r);
  return r;
}
function zl(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Av = ["duration", "bounce"],
  Rv = ["stiffness", "damping", "mass"];
function Oc(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Nv(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Oc(e, Rv) && Oc(e, Av)) {
    const n = Mv(e);
    (t = { ...t, ...n, velocity: 0, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function Hp({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0],
    o = e[e.length - 1],
    s = { done: !1, value: i },
    {
      stiffness: l,
      damping: a,
      mass: u,
      velocity: c,
      duration: f,
      isResolvedFromDuration: d,
    } = Nv(r),
    m = c ? -ut(c) : 0,
    y = a / (2 * Math.sqrt(l * u)),
    v = o - i,
    E = ut(Math.sqrt(l / u)),
    g = Math.abs(v) < 5;
  n || (n = g ? 0.01 : 2), t || (t = g ? 0.005 : 0.5);
  let h;
  if (y < 1) {
    const p = zl(E, y);
    h = (x) => {
      const S = Math.exp(-y * E * x);
      return (
        o - S * (((m + y * E * v) / p) * Math.sin(p * x) + v * Math.cos(p * x))
      );
    };
  } else if (y === 1) h = (p) => o - Math.exp(-E * p) * (v + (m + E * v) * p);
  else {
    const p = E * Math.sqrt(y * y - 1);
    h = (x) => {
      const S = Math.exp(-y * E * x),
        T = Math.min(p * x, 300);
      return (
        o - (S * ((m + y * E * v) * Math.sinh(T) + p * v * Math.cosh(T))) / p
      );
    };
  }
  return {
    calculatedDuration: (d && f) || null,
    next: (p) => {
      const x = h(p);
      if (d) s.done = p >= f;
      else {
        let S = m;
        p !== 0 && (y < 1 ? (S = $p(h, p, x)) : (S = 0));
        const T = Math.abs(S) <= n,
          C = Math.abs(o - x) <= t;
        s.done = T && C;
      }
      return (s.value = s.done ? o : x), s;
    },
  };
}
function Fc({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: l,
  max: a,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const f = e[0],
    d = { done: !1, value: f },
    m = (P) => (l !== void 0 && P < l) || (a !== void 0 && P > a),
    y = (P) =>
      l === void 0
        ? a
        : a === void 0 || Math.abs(l - P) < Math.abs(a - P)
        ? l
        : a;
  let v = n * t;
  const E = f + v,
    g = s === void 0 ? E : s(E);
  g !== E && (v = g - f);
  const h = (P) => -v * Math.exp(-P / r),
    p = (P) => g + h(P),
    x = (P) => {
      const R = h(P),
        D = p(P);
      (d.done = Math.abs(R) <= u), (d.value = d.done ? g : D);
    };
  let S, T;
  const C = (P) => {
    m(d.value) &&
      ((S = P),
      (T = Hp({
        keyframes: [d.value, y(d.value)],
        velocity: $p(p, P, d.value),
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    C(0),
    {
      calculatedDuration: null,
      next: (P) => {
        let R = !1;
        return (
          !T && S === void 0 && ((R = !0), x(P), C(P)),
          S !== void 0 && P > S ? T.next(P - S) : (!R && x(P), d)
        );
      },
    }
  );
}
const _v = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => I.update(t, !0),
      stop: () => be(t),
      now: () => (te.isProcessing ? te.timestamp : performance.now()),
    };
  },
  zc = 2e4;
function Ic(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < zc; ) (t += n), (r = e.next(t));
  return t >= zc ? 1 / 0 : t;
}
const Ov = { decay: Fc, inertia: Fc, tween: To, keyframes: To, spring: Hp };
function ei({
  autoplay: e = !0,
  delay: t = 0,
  driver: n = _v,
  keyframes: r,
  type: i = "keyframes",
  repeat: o = 0,
  repeatDelay: s = 0,
  repeatType: l = "loop",
  onPlay: a,
  onStop: u,
  onComplete: c,
  onUpdate: f,
  ...d
}) {
  let m = 1,
    y = !1,
    v,
    E;
  const g = () => {
    E = new Promise((A) => {
      v = A;
    });
  };
  g();
  let h;
  const p = Ov[i] || To;
  let x;
  p !== To &&
    typeof r[0] != "number" &&
    ((x = ts([0, 100], r, { clamp: !1 })), (r = [0, 100]));
  const S = p({ ...d, keyframes: r });
  let T;
  l === "mirror" &&
    (T = p({
      ...d,
      keyframes: [...r].reverse(),
      velocity: -(d.velocity || 0),
    }));
  let C = "idle",
    P = null,
    R = null,
    D = null;
  S.calculatedDuration === null && o && (S.calculatedDuration = Ic(S));
  const { calculatedDuration: J } = S;
  let ke = 1 / 0,
    Pe = 1 / 0;
  J !== null && ((ke = J + s), (Pe = ke * (o + 1) - s));
  let b = 0;
  const ee = (A) => {
      if (R === null) return;
      m > 0 && (R = Math.min(R, A)),
        m < 0 && (R = Math.min(A - Pe / m, R)),
        P !== null ? (b = P) : (b = Math.round(A - R) * m);
      const W = b - t * (m >= 0 ? 1 : -1),
        Zt = m >= 0 ? W < 0 : W > Pe;
      (b = Math.max(W, 0)), C === "finished" && P === null && (b = Pe);
      let tt = b,
        Sn = S;
      if (o) {
        const ns = b / ke;
        let fi = Math.floor(ns),
          Jt = ns % 1;
        !Jt && ns >= 1 && (Jt = 1),
          Jt === 1 && fi--,
          (fi = Math.min(fi, o + 1));
        const du = !!(fi % 2);
        du &&
          (l === "reverse"
            ? ((Jt = 1 - Jt), s && (Jt -= s / ke))
            : l === "mirror" && (Sn = T));
        let hu = Wt(0, 1, Jt);
        b > Pe && (hu = l === "reverse" && du ? 1 : 0), (tt = hu * ke);
      }
      const Me = Zt ? { done: !1, value: r[0] } : Sn.next(tt);
      x && (Me.value = x(Me.value));
      let { done: qt } = Me;
      !Zt && J !== null && (qt = m >= 0 ? b >= Pe : b <= 0);
      const Sm = P === null && (C === "finished" || (C === "running" && qt));
      return f && f(Me.value), Sm && L(), Me;
    },
    Fe = () => {
      h && h.stop(), (h = void 0);
    },
    et = () => {
      (C = "idle"), Fe(), v(), g(), (R = D = null);
    },
    L = () => {
      (C = "finished"), c && c(), Fe(), v();
    },
    N = () => {
      if (y) return;
      h || (h = n(ee));
      const A = h.now();
      a && a(),
        P !== null ? (R = A - P) : (!R || C === "finished") && (R = A),
        C === "finished" && g(),
        (D = R),
        (P = null),
        (C = "running"),
        h.start();
    };
  e && N();
  const O = {
    then(A, W) {
      return E.then(A, W);
    },
    get time() {
      return ut(b);
    },
    set time(A) {
      (A = Ut(A)),
        (b = A),
        P !== null || !h || m === 0 ? (P = A) : (R = h.now() - A / m);
    },
    get duration() {
      const A = S.calculatedDuration === null ? Ic(S) : S.calculatedDuration;
      return ut(A);
    },
    get speed() {
      return m;
    },
    set speed(A) {
      A === m || !h || ((m = A), (O.time = ut(b)));
    },
    get state() {
      return C;
    },
    play: N,
    pause: () => {
      (C = "paused"), (P = b);
    },
    stop: () => {
      (y = !0), C !== "idle" && ((C = "idle"), u && u(), et());
    },
    cancel: () => {
      D !== null && ee(D), et();
    },
    complete: () => {
      C = "finished";
    },
    sample: (A) => ((R = 0), ee(A)),
  };
  return O;
}
function Fv(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const zv = Fv(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Iv = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor",
  ]),
  Di = 10,
  Bv = 2e4,
  Uv = (e, t) => t.type === "spring" || e === "backgroundColor" || !Sp(t.ease);
function $v(e, t, { onUpdate: n, onComplete: r, ...i }) {
  if (
    !(
      zv() &&
      Iv.has(t) &&
      !i.repeatDelay &&
      i.repeatType !== "mirror" &&
      i.damping !== 0 &&
      i.type !== "inertia"
    )
  )
    return !1;
  let s = !1,
    l,
    a;
  const u = () => {
    a = new Promise((h) => {
      l = h;
    });
  };
  u();
  let { keyframes: c, duration: f = 300, ease: d, times: m } = i;
  if (Uv(t, i)) {
    const h = ei({ ...i, repeat: 0, delay: 0 });
    let p = { done: !1, value: c[0] };
    const x = [];
    let S = 0;
    for (; !p.done && S < Bv; ) (p = h.sample(S)), x.push(p.value), (S += Di);
    (m = void 0), (c = x), (f = S - Di), (d = "linear");
  }
  const y = by(e.owner.current, t, c, { ...i, duration: f, ease: d, times: m });
  i.syncStart &&
    (y.startTime = te.isProcessing
      ? te.timestamp
      : document.timeline
      ? document.timeline.currentTime
      : performance.now());
  const v = () => y.cancel(),
    E = () => {
      I.update(v), l(), u();
    };
  return (
    (y.onfinish = () => {
      e.set(ev(c, i)), r && r(), E();
    }),
    {
      then(h, p) {
        return a.then(h, p);
      },
      attachTimeline(h) {
        return (y.timeline = h), (y.onfinish = null), q;
      },
      get time() {
        return ut(y.currentTime || 0);
      },
      set time(h) {
        y.currentTime = Ut(h);
      },
      get speed() {
        return y.playbackRate;
      },
      set speed(h) {
        y.playbackRate = h;
      },
      get duration() {
        return ut(f);
      },
      play: () => {
        s || (y.play(), be(v));
      },
      pause: () => y.pause(),
      stop: () => {
        if (((s = !0), y.playState === "idle")) return;
        const { currentTime: h } = y;
        if (h) {
          const p = ei({ ...i, autoplay: !1 });
          e.setWithVelocity(p.sample(h - Di).value, p.sample(h).value, Di);
        }
        E();
      },
      complete: () => y.finish(),
      cancel: E,
    }
  );
}
function Hv({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
  const i = () => (
    n && n(e[e.length - 1]),
    r && r(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: q,
      pause: q,
      stop: q,
      then: (o) => (o(), Promise.resolve()),
      cancel: q,
      complete: q,
    }
  );
  return t
    ? ei({ keyframes: [0, 1], duration: 0, delay: t, onComplete: i })
    : i();
}
const Wv = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  Gv = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Kv = { type: "keyframes", duration: 0.8 },
  Qv = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Yv = (e, { keyframes: t }) =>
    t.length > 2
      ? Kv
      : xn.has(e)
      ? e.startsWith("scale")
        ? Gv(t[1])
        : Wv
      : Qv,
  Il = (e, t) =>
    e === "zIndex"
      ? !1
      : !!(
          typeof t == "number" ||
          Array.isArray(t) ||
          (typeof t == "string" &&
            (Gt.test(t) || t === "0") &&
            !t.startsWith("url("))
        ),
  Xv = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Zv(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Zo) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let o = Xv.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const qv = /([a-z-]*)\(.*?\)/g,
  Bl = {
    ...Gt,
    getAnimatableNone: (e) => {
      const t = e.match(qv);
      return t ? t.map(Zv).join(" ") : e;
    },
  },
  Jv = {
    ...ip,
    color: ye,
    backgroundColor: ye,
    outlineColor: ye,
    fill: ye,
    stroke: ye,
    borderColor: ye,
    borderTopColor: ye,
    borderRightColor: ye,
    borderBottomColor: ye,
    borderLeftColor: ye,
    filter: Bl,
    WebkitFilter: Bl,
  },
  su = (e) => Jv[e];
function Wp(e, t) {
  let n = su(e);
  return (
    n !== Bl && (n = Gt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const Gp = (e) => /^0[^.\s]+$/.test(e);
function bv(e) {
  if (typeof e == "number") return e === 0;
  if (e !== null) return e === "none" || e === "0" || Gp(e);
}
function e1(e, t, n, r) {
  const i = Il(t, n);
  let o;
  Array.isArray(n) ? (o = [...n]) : (o = [null, n]);
  const s = r.from !== void 0 ? r.from : e.get();
  let l;
  const a = [];
  for (let u = 0; u < o.length; u++)
    o[u] === null && (o[u] = u === 0 ? s : o[u - 1]),
      bv(o[u]) && a.push(u),
      typeof o[u] == "string" && o[u] !== "none" && o[u] !== "0" && (l = o[u]);
  if (i && a.length && l)
    for (let u = 0; u < a.length; u++) {
      const c = a[u];
      o[c] = Wp(t, l);
    }
  return o;
}
function t1({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: l,
  from: a,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
function Kp(e, t) {
  return e[t] || e.default || e;
}
const lu =
  (e, t, n, r = {}) =>
  (i) => {
    const o = Kp(r, e) || {},
      s = o.delay || r.delay || 0;
    let { elapsed: l = 0 } = r;
    l = l - Ut(s);
    const a = e1(t, e, n, o),
      u = a[0],
      c = a[a.length - 1],
      f = Il(e, u),
      d = Il(e, c);
    let m = {
      keyframes: a,
      velocity: t.getVelocity(),
      ease: "easeOut",
      ...o,
      delay: -l,
      onUpdate: (y) => {
        t.set(y), o.onUpdate && o.onUpdate(y);
      },
      onComplete: () => {
        i(), o.onComplete && o.onComplete();
      },
    };
    if (
      (t1(o) || (m = { ...m, ...Yv(e, m) }),
      m.duration && (m.duration = Ut(m.duration)),
      m.repeatDelay && (m.repeatDelay = Ut(m.repeatDelay)),
      !f || !d || Jy.current || o.type === !1)
    )
      return Hv(m);
    if (
      t.owner &&
      t.owner.current instanceof HTMLElement &&
      !t.owner.getProps().onUpdate
    ) {
      const y = $v(t, e, m);
      if (y) return y;
    }
    return ei(m);
  };
function Eo(e) {
  return !!(ge(e) && e.add);
}
const Qp = (e) => /^\-?\d*\.?\d+$/.test(e);
function au(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function uu(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class cu {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return au(this.subscriptions, t), () => uu(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const n1 = (e) => !isNaN(parseFloat(e)),
  Dr = { current: void 0 };
class r1 {
  constructor(t, n = {}) {
    (this.version = "10.16.4"),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        (this.prev = this.current), (this.current = r);
        const { delta: o, timestamp: s } = te;
        this.lastUpdated !== s &&
          ((this.timeDelta = o),
          (this.lastUpdated = s),
          I.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.events.change &&
            this.events.change.notify(this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.scheduleVelocityCheck = () => I.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: r }) => {
        r !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()));
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = t),
      (this.canTrackVelocity = n1(this.current)),
      (this.owner = n.owner);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new cu());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            I.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), (this.prev = t), (this.timeDelta = r);
  }
  jump(t) {
    this.updateAndNotify(t),
      (this.prev = t),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return Dr.current && Dr.current.push(this), this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity
      ? ou(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      : 0;
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Xe(e, t) {
  return new r1(e, t);
}
const Yp = (e) => (t) => t.test(e),
  i1 = { test: (e) => e === "auto", parse: (e) => e },
  Xp = [wn, j, at, Pt, dy, fy, i1],
  dr = (e) => Xp.find(Yp(e)),
  o1 = [...Xp, ye, Gt],
  s1 = (e) => o1.find(Yp(e));
function l1(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Xe(n));
}
function a1(e, t) {
  const n = bo(e, t);
  let {
    transitionEnd: r = {},
    transition: i = {},
    ...o
  } = n ? e.makeTargetAnimatable(n, !1) : {};
  o = { ...o, ...r };
  for (const s in o) {
    const l = Ey(o[s]);
    l1(e, s, l);
  }
}
function u1(e, t, n) {
  var r, i;
  const o = Object.keys(t).filter((l) => !e.hasValue(l)),
    s = o.length;
  if (s)
    for (let l = 0; l < s; l++) {
      const a = o[l],
        u = t[a];
      let c = null;
      Array.isArray(u) && (c = u[0]),
        c === null &&
          (c =
            (i = (r = n[a]) !== null && r !== void 0 ? r : e.readValue(a)) !==
              null && i !== void 0
              ? i
              : t[a]),
        c != null &&
          (typeof c == "string" && (Qp(c) || Gp(c))
            ? (c = parseFloat(c))
            : !s1(c) && Gt.test(u) && (c = Wp(a, u)),
          e.addValue(a, Xe(c, { owner: e })),
          n[a] === void 0 && (n[a] = c),
          c !== null && e.setBaseTarget(a, c));
    }
}
function c1(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function f1(e, t, n) {
  const r = {};
  for (const i in e) {
    const o = c1(i, t);
    if (o !== void 0) r[i] = o;
    else {
      const s = n.getValue(i);
      s && (r[i] = s.get());
    }
  }
  return r;
}
function d1({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function Zp(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let {
    transition: o = e.getDefaultTransition(),
    transitionEnd: s,
    ...l
  } = e.makeTargetAnimatable(t);
  const a = e.getValue("willChange");
  r && (o = r);
  const u = [],
    c = i && e.animationState && e.animationState.getState()[i];
  for (const f in l) {
    const d = e.getValue(f),
      m = l[f];
    if (!d || m === void 0 || (c && d1(c, f))) continue;
    const y = { delay: n, elapsed: 0, ...o };
    if (window.HandoffAppearAnimations && !d.hasAnimated) {
      const E = e.getProps()[qy];
      E &&
        ((y.elapsed = window.HandoffAppearAnimations(E, f, d, I)),
        (y.syncStart = !0));
    }
    d.start(lu(f, d, m, e.shouldReduceMotion && xn.has(f) ? { type: !1 } : y));
    const v = d.animation;
    Eo(a) && (a.add(f), v.then(() => a.remove(f))), u.push(v);
  }
  return (
    s &&
      Promise.all(u).then(() => {
        s && a1(e, s);
      }),
    u
  );
}
function Ul(e, t, n = {}) {
  const r = bo(e, t, n.custom);
  let { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = r ? () => Promise.all(Zp(e, r, n)) : () => Promise.resolve(),
    s =
      e.variantChildren && e.variantChildren.size
        ? (a = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: c,
              staggerDirection: f,
            } = i;
            return h1(e, t, u + a, c, f, n);
          }
        : () => Promise.resolve(),
    { when: l } = i;
  if (l) {
    const [a, u] = l === "beforeChildren" ? [o, s] : [s, o];
    return a().then(() => u());
  } else return Promise.all([o(), s(n.delay)]);
}
function h1(e, t, n = 0, r = 0, i = 1, o) {
  const s = [],
    l = (e.variantChildren.size - 1) * r,
    a = i === 1 ? (u = 0) => u * r : (u = 0) => l - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(p1)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          s.push(
            Ul(u, t, { ...o, delay: n + a(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(s)
  );
}
function p1(e, t) {
  return e.sortNodePosition(t);
}
function m1(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => Ul(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = Ul(e, t, n);
  else {
    const i = typeof t == "function" ? bo(e, t, n.custom) : t;
    r = Promise.all(Zp(e, i, n));
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
const g1 = [...Ka].reverse(),
  y1 = Ka.length;
function v1(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => m1(e, n, r)));
}
function x1(e) {
  let t = v1(e);
  const n = S1();
  let r = !0;
  const i = (a, u) => {
    const c = bo(e, u);
    if (c) {
      const { transition: f, transitionEnd: d, ...m } = c;
      a = { ...a, ...m, ...d };
    }
    return a;
  };
  function o(a) {
    t = a(e);
  }
  function s(a, u) {
    const c = e.getProps(),
      f = e.getVariantContext(!0) || {},
      d = [],
      m = new Set();
    let y = {},
      v = 1 / 0;
    for (let g = 0; g < y1; g++) {
      const h = g1[g],
        p = n[h],
        x = c[h] !== void 0 ? c[h] : f[h],
        S = Jr(x),
        T = h === u ? p.isActive : null;
      T === !1 && (v = g);
      let C = x === f[h] && x !== c[h] && S;
      if (
        (C && r && e.manuallyAnimateOnMount && (C = !1),
        (p.protectedKeys = { ...y }),
        (!p.isActive && T === null) ||
          (!x && !p.prevProp) ||
          Yo(x) ||
          typeof x == "boolean")
      )
        continue;
      const P = w1(p.prevProp, x);
      let R = P || (h === u && p.isActive && !C && S) || (g > v && S);
      const D = Array.isArray(x) ? x : [x];
      let J = D.reduce(i, {});
      T === !1 && (J = {});
      const { prevResolvedValues: ke = {} } = p,
        Pe = { ...ke, ...J },
        b = (ee) => {
          (R = !0), m.delete(ee), (p.needsAnimating[ee] = !0);
        };
      for (const ee in Pe) {
        const Fe = J[ee],
          et = ke[ee];
        y.hasOwnProperty(ee) ||
          (Fe !== et
            ? Po(Fe) && Po(et)
              ? !vp(Fe, et) || P
                ? b(ee)
                : (p.protectedKeys[ee] = !0)
              : Fe !== void 0
              ? b(ee)
              : m.add(ee)
            : Fe !== void 0 && m.has(ee)
            ? b(ee)
            : (p.protectedKeys[ee] = !0));
      }
      (p.prevProp = x),
        (p.prevResolvedValues = J),
        p.isActive && (y = { ...y, ...J }),
        r && e.blockInitialAnimation && (R = !1),
        R &&
          !C &&
          d.push(
            ...D.map((ee) => ({ animation: ee, options: { type: h, ...a } }))
          );
    }
    if (m.size) {
      const g = {};
      m.forEach((h) => {
        const p = e.getBaseTarget(h);
        p !== void 0 && (g[h] = p);
      }),
        d.push({ animation: g });
    }
    let E = !!d.length;
    return (
      r && c.initial === !1 && !e.manuallyAnimateOnMount && (E = !1),
      (r = !1),
      E ? t(d) : Promise.resolve()
    );
  }
  function l(a, u, c) {
    var f;
    if (n[a].isActive === u) return Promise.resolve();
    (f = e.variantChildren) === null ||
      f === void 0 ||
      f.forEach((m) => {
        var y;
        return (y = m.animationState) === null || y === void 0
          ? void 0
          : y.setActive(a, u);
      }),
      (n[a].isActive = u);
    const d = s(c, a);
    for (const m in n) n[m].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: s,
    setActive: l,
    setAnimateFunction: o,
    getState: () => n,
  };
}
function w1(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !vp(t, e) : !1;
}
function bt(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function S1() {
  return {
    animate: bt(!0),
    whileInView: bt(),
    whileHover: bt(),
    whileTap: bt(),
    whileDrag: bt(),
    whileFocus: bt(),
    exit: bt(),
  };
}
class k1 extends Xt {
  constructor(t) {
    super(t), t.animationState || (t.animationState = x1(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Yo(t) && (this.unmount = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let P1 = 0;
class C1 extends Xt {
  constructor() {
    super(...arguments), (this.id = P1++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
        isPresent: t,
        onExitComplete: n,
        custom: r,
      } = this.node.presenceContext,
      { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === i) return;
    const o = this.node.animationState.setActive("exit", !t, {
      custom: r ?? this.node.getProps().custom,
    });
    n && !t && o.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const T1 = { animation: { Feature: k1 }, exit: { Feature: C1 } },
  Bc = (e, t) => Math.abs(e - t);
function E1(e, t) {
  const n = Bc(e.x, t.x),
    r = Bc(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class qp {
  constructor(t, n, { transformPagePoint: r } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const u = zs(this.lastMoveEventInfo, this.history),
          c = this.startEvent !== null,
          f = E1(u.offset, { x: 0, y: 0 }) >= 3;
        if (!c && !f) return;
        const { point: d } = u,
          { timestamp: m } = te;
        this.history.push({ ...d, timestamp: m });
        const { onStart: y, onMove: v } = this.handlers;
        c ||
          (y && y(this.lastMoveEvent, u),
          (this.startEvent = this.lastMoveEvent)),
          v && v(this.lastMoveEvent, u);
      }),
      (this.handlePointerMove = (u, c) => {
        (this.lastMoveEvent = u),
          (this.lastMoveEventInfo = Fs(c, this.transformPagePoint)),
          I.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (u, c) => {
        if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
          return;
        const { onEnd: f, onSessionEnd: d } = this.handlers,
          m = zs(
            u.type === "pointercancel"
              ? this.lastMoveEventInfo
              : Fs(c, this.transformPagePoint),
            this.history
          );
        this.startEvent && f && f(u, m), d && d(u, m);
      }),
      !hp(t))
    )
      return;
    (this.handlers = n), (this.transformPagePoint = r);
    const i = Jo(t),
      o = Fs(i, this.transformPagePoint),
      { point: s } = o,
      { timestamp: l } = te;
    this.history = [{ ...s, timestamp: l }];
    const { onSessionStart: a } = n;
    a && a(t, zs(o, this.history)),
      (this.removeListeners = Bt(
        gt(window, "pointermove", this.handlePointerMove),
        gt(window, "pointerup", this.handlePointerUp),
        gt(window, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), be(this.updatePoint);
  }
}
function Fs(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Uc(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function zs({ point: e }, t) {
  return {
    point: e,
    delta: Uc(e, Jp(t)),
    offset: Uc(e, L1(t)),
    velocity: V1(t, 0.1),
  };
}
function L1(e) {
  return e[0];
}
function Jp(e) {
  return e[e.length - 1];
}
function V1(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = Jp(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Ut(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const o = ut(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function Ne(e) {
  return e.max - e.min;
}
function $l(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function $c(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = Q(t.min, t.max, e.origin)),
    (e.scale = Ne(n) / Ne(t)),
    ($l(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = Q(n.min, n.max, e.origin) - e.originPoint),
    ($l(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Ar(e, t, n, r) {
  $c(e.x, t.x, n.x, r ? r.originX : void 0),
    $c(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Hc(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Ne(t));
}
function M1(e, t, n) {
  Hc(e.x, t.x, n.x), Hc(e.y, t.y, n.y);
}
function Wc(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Ne(t));
}
function Rr(e, t, n) {
  Wc(e.x, t.x, n.x), Wc(e.y, t.y, n.y);
}
function j1(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? Q(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? Q(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Gc(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function D1(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: Gc(e.x, n, i), y: Gc(e.y, t, r) };
}
function Kc(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function A1(e, t) {
  return { x: Kc(e.x, t.x), y: Kc(e.y, t.y) };
}
function R1(e, t) {
  let n = 0.5;
  const r = Ne(e),
    i = Ne(t);
  return (
    i > r
      ? (n = bn(t.min, t.max - r, e.min))
      : r > i && (n = bn(e.min, e.max - i, t.min)),
    Wt(0, 1, n)
  );
}
function N1(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Hl = 0.35;
function _1(e = Hl) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Hl),
    { x: Qc(e, "left", "right"), y: Qc(e, "top", "bottom") }
  );
}
function Qc(e, t, n) {
  return { min: Yc(e, t), max: Yc(e, n) };
}
function Yc(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Xc = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  zn = () => ({ x: Xc(), y: Xc() }),
  Zc = () => ({ min: 0, max: 0 }),
  re = () => ({ x: Zc(), y: Zc() });
function it(e) {
  return [e("x"), e("y")];
}
function bp({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function O1({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function F1(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Is(e) {
  return e === void 0 || e === 1;
}
function Wl({ scale: e, scaleX: t, scaleY: n }) {
  return !Is(e) || !Is(t) || !Is(n);
}
function rn(e) {
  return Wl(e) || em(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function em(e) {
  return qc(e.x) || qc(e.y);
}
function qc(e) {
  return e && e !== "0%";
}
function Lo(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function Jc(e, t, n, r, i) {
  return i !== void 0 && (e = Lo(e, i, r)), Lo(e, n, r) + t;
}
function Gl(e, t = 0, n = 1, r, i) {
  (e.min = Jc(e.min, t, n, r, i)), (e.max = Jc(e.max, t, n, r, i));
}
function tm(e, { x: t, y: n }) {
  Gl(e.x, t.translate, t.scale, t.originPoint),
    Gl(e.y, n.translate, n.scale, n.originPoint);
}
function z1(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let l = 0; l < i; l++) {
    (o = n[l]), (s = o.projectionDelta);
    const a = o.instance;
    (a && a.style && a.style.display === "contents") ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        In(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), tm(e, s)),
      r && rn(o.latestValues) && In(e, o.latestValues));
  }
  (t.x = bc(t.x)), (t.y = bc(t.y));
}
function bc(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function Lt(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function ef(e, t, [n, r, i]) {
  const o = t[i] !== void 0 ? t[i] : 0.5,
    s = Q(e.min, e.max, o);
  Gl(e, t[n], t[r], s, t.scale);
}
const I1 = ["x", "scaleX", "originX"],
  B1 = ["y", "scaleY", "originY"];
function In(e, t) {
  ef(e.x, t, I1), ef(e.y, t, B1);
}
function nm(e, t) {
  return bp(F1(e.getBoundingClientRect(), t));
}
function U1(e, t, n) {
  const r = nm(e, n),
    { scroll: i } = t;
  return i && (Lt(r.x, i.offset.x), Lt(r.y, i.offset.y)), r;
}
const $1 = new WeakMap();
class H1 {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = re()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (a) => {
        this.stopAnimation(), n && this.snapToCursor(Jo(a, "page").point);
      },
      o = (a, u) => {
        const { drag: c, dragPropagation: f, onDragStart: d } = this.getProps();
        if (
          c &&
          !f &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = mp(c)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          it((y) => {
            let v = this.getAxisMotionValue(y).get() || 0;
            if (at.test(v)) {
              const { projection: E } = this.visualElement;
              if (E && E.layout) {
                const g = E.layout.layoutBox[y];
                g && (v = Ne(g) * (parseFloat(v) / 100));
              }
            }
            this.originPoint[y] = v;
          }),
          d && I.update(() => d(a, u), !1, !0);
        const { animationState: m } = this.visualElement;
        m && m.setActive("whileDrag", !0);
      },
      s = (a, u) => {
        const {
          dragPropagation: c,
          dragDirectionLock: f,
          onDirectionLock: d,
          onDrag: m,
        } = this.getProps();
        if (!c && !this.openGlobalLock) return;
        const { offset: y } = u;
        if (f && this.currentDirection === null) {
          (this.currentDirection = W1(y)),
            this.currentDirection !== null && d && d(this.currentDirection);
          return;
        }
        this.updateAxis("x", u.point, y),
          this.updateAxis("y", u.point, y),
          this.visualElement.render(),
          m && m(a, u);
      },
      l = (a, u) => this.stop(a, u);
    this.panSession = new qp(
      t,
      { onSessionStart: i, onStart: o, onMove: s, onSessionEnd: l },
      { transformPagePoint: this.visualElement.getTransformPagePoint() }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && I.update(() => o(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !Ai(t, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (s = j1(s, this.constraints[t], this.elastic[t])),
      o.set(s);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: n } = this.getProps(),
      { layout: r } = this.visualElement.projection || {},
      i = this.constraints;
    t && On(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && r
      ? (this.constraints = D1(r.layoutBox, t))
      : (this.constraints = !1),
      (this.elastic = _1(n)),
      i !== this.constraints &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        it((o) => {
          this.getAxisMotionValue(o) &&
            (this.constraints[o] = N1(r.layoutBox[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !On(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = U1(r, i.root, this.visualElement.getTransformPagePoint());
    let s = A1(i.layout.layoutBox, o);
    if (n) {
      const l = n(O1(s));
      (this.hasMutatedConstraints = !!l), l && (s = bp(l));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: s,
        onDragTransitionEnd: l,
      } = this.getProps(),
      a = this.constraints || {},
      u = it((c) => {
        if (!Ai(c, n, this.currentDirection)) return;
        let f = (a && a[c]) || {};
        s && (f = { min: 0, max: 0 });
        const d = i ? 200 : 1e6,
          m = i ? 40 : 1e7,
          y = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: d,
            bounceDamping: m,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...f,
          };
        return this.startAxisValueAnimation(c, y);
      });
    return Promise.all(u).then(l);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(lu(t, r, 0, n));
  }
  stopAnimation() {
    it((t) => this.getAxisMotionValue(t).stop());
  }
  getAxisMotionValue(t) {
    const n = "_drag" + t.toUpperCase(),
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    it((n) => {
      const { drag: r } = this.getProps();
      if (!Ai(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: l } = i.layout.layoutBox[n];
        o.set(t[n] - Q(s, l, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!On(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    it((s) => {
      const l = this.getAxisMotionValue(s);
      if (l) {
        const a = l.get();
        i[s] = R1({ min: a, max: a }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      it((s) => {
        if (!Ai(s, t, null)) return;
        const l = this.getAxisMotionValue(s),
          { min: a, max: u } = this.constraints[s];
        l.set(Q(a, u, i[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    $1.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = gt(t, "pointerdown", (a) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(a);
      }),
      r = () => {
        const { dragConstraints: a } = this.getProps();
        On(a) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
    const s = pt(window, "resize", () => this.scalePositionWithinConstraints()),
      l = i.addEventListener(
        "didUpdate",
        ({ delta: a, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (it((c) => {
              const f = this.getAxisMotionValue(c);
              f &&
                ((this.originPoint[c] += a[c].translate),
                f.set(f.get() + a[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      s(), n(), o(), l && l();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: s = Hl,
        dragMomentum: l = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: l,
    };
  }
}
function Ai(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function W1(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class G1 extends Xt {
  constructor(t) {
    super(t),
      (this.removeGroupControls = q),
      (this.removeListeners = q),
      (this.controls = new H1(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || q);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const tf = (e) => (t, n) => {
  e && I.update(() => e(t, n));
};
class K1 extends Xt {
  constructor() {
    super(...arguments), (this.removePointerDownListener = q);
  }
  onPointerDown(t) {
    this.session = new qp(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: tf(t),
      onStart: tf(n),
      onMove: r,
      onEnd: (o, s) => {
        delete this.session, i && I.update(() => i(o, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = gt(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function Q1() {
  const e = M.useContext(Ga);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = M.useId();
  return M.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
}
const Qi = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function nf(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const hr = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (j.test(e)) e = parseFloat(e);
        else return e;
      const n = nf(e, t.target.x),
        r = nf(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  Y1 = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = Gt.parse(e);
      if (i.length > 5) return r;
      const o = Gt.createTransformer(e),
        s = typeof i[0] != "number" ? 1 : 0,
        l = n.x.scale * t.x,
        a = n.y.scale * t.y;
      (i[0 + s] /= l), (i[1 + s] /= a);
      const u = Q(l, a, 0.5);
      return (
        typeof i[2 + s] == "number" && (i[2 + s] /= u),
        typeof i[3 + s] == "number" && (i[3 + s] /= u),
        o(i)
      );
    },
  };
class X1 extends ea.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: o } = t;
    iy(Z1),
      o &&
        (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        o.setOptions({
          ...o.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Qi.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: o,
      } = this.props,
      s = r.projection;
    return (
      s &&
        ((s.isPresent = o),
        i || t.layoutDependency !== n || n === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== o &&
          (o
            ? s.promote()
            : s.relegate() ||
              I.postRender(() => {
                const l = s.getStack();
                (!l || !l.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      queueMicrotask(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function rm(e) {
  const [t, n] = Q1(),
    r = M.useContext(Jh);
  return ea.createElement(X1, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: M.useContext(bh),
    isPresent: t,
    safeToRemove: n,
  });
}
const Z1 = {
    borderRadius: {
      ...hr,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: hr,
    borderTopRightRadius: hr,
    borderBottomLeftRadius: hr,
    borderBottomRightRadius: hr,
    boxShadow: Y1,
  },
  im = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  q1 = im.length,
  rf = (e) => (typeof e == "string" ? parseFloat(e) : e),
  of = (e) => typeof e == "number" || j.test(e);
function J1(e, t, n, r, i, o) {
  i
    ? ((e.opacity = Q(0, n.opacity !== void 0 ? n.opacity : 1, b1(r))),
      (e.opacityExit = Q(t.opacity !== void 0 ? t.opacity : 1, 0, ex(r))))
    : o &&
      (e.opacity = Q(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let s = 0; s < q1; s++) {
    const l = `border${im[s]}Radius`;
    let a = sf(t, l),
      u = sf(n, l);
    if (a === void 0 && u === void 0) continue;
    a || (a = 0),
      u || (u = 0),
      a === 0 || u === 0 || of(a) === of(u)
        ? ((e[l] = Math.max(Q(rf(a), rf(u), r), 0)),
          (at.test(u) || at.test(a)) && (e[l] += "%"))
        : (e[l] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = Q(t.rotate || 0, n.rotate || 0, r));
}
function sf(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const b1 = om(0, 0.5, nu),
  ex = om(0.5, 0.95, q);
function om(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(bn(e, t, r)));
}
function lf(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function ze(e, t) {
  lf(e.x, t.x), lf(e.y, t.y);
}
function af(e, t, n, r, i) {
  return (
    (e -= t), (e = Lo(e, 1 / n, r)), i !== void 0 && (e = Lo(e, 1 / i, r)), e
  );
}
function tx(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (
    (at.test(t) &&
      ((t = parseFloat(t)), (t = Q(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let l = Q(o.min, o.max, r);
  e === o && (l -= t),
    (e.min = af(e.min, t, n, l, i)),
    (e.max = af(e.max, t, n, l, i));
}
function uf(e, t, [n, r, i], o, s) {
  tx(e, t[n], t[r], t[i], t.scale, o, s);
}
const nx = ["x", "scaleX", "originX"],
  rx = ["y", "scaleY", "originY"];
function cf(e, t, n, r) {
  uf(e.x, t, nx, n ? n.x : void 0, r ? r.x : void 0),
    uf(e.y, t, rx, n ? n.y : void 0, r ? r.y : void 0);
}
function ff(e) {
  return e.translate === 0 && e.scale === 1;
}
function sm(e) {
  return ff(e.x) && ff(e.y);
}
function ix(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function lm(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function df(e) {
  return Ne(e.x) / Ne(e.y);
}
class ox {
  constructor() {
    this.members = [];
  }
  add(t) {
    au(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (uu(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function hf(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    o = e.y.translate / t.y;
  if (
    ((i || o) && (r = `translate3d(${i}px, ${o}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const { rotate: a, rotateX: u, rotateY: c } = n;
    a && (r += `rotate(${a}deg) `),
      u && (r += `rotateX(${u}deg) `),
      c && (r += `rotateY(${c}deg) `);
  }
  const s = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (s !== 1 || l !== 1) && (r += `scale(${s}, ${l})`), r || "none";
}
const sx = (e, t) => e.depth - t.depth;
class lx {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    au(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    uu(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(sx),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function ax(e, t) {
  const n = performance.now(),
    r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (be(r), e(o - t));
    };
  return I.read(r, !0), () => be(r);
}
function ux(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function cx(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function fx(e, t, n) {
  const r = ge(e) ? e : Xe(e);
  return r.start(lu("", r, t, n)), r.animation;
}
const pf = ["", "X", "Y", "Z"],
  mf = 1e3;
let dx = 0;
const on = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function am({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(s = {}, l = t == null ? void 0 : t()) {
      (this.id = dx++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (on.totalNodes =
            on.resolvedTargetDeltas =
            on.recalculatedProjection =
              0),
            this.nodes.forEach(mx),
            this.nodes.forEach(wx),
            this.nodes.forEach(Sx),
            this.nodes.forEach(gx),
            ux(on);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = l ? l.root || l : this),
        (this.path = l ? [...l.path, l] : []),
        (this.parent = l),
        (this.depth = l ? l.depth + 1 : 0);
      for (let a = 0; a < this.path.length; a++)
        this.path[a].shouldResetTransform = !0;
      this.root === this && (this.nodes = new lx());
    }
    addEventListener(s, l) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new cu()),
        this.eventHandlers.get(s).add(l)
      );
    }
    notifyListeners(s, ...l) {
      const a = this.eventHandlers.get(s);
      a && a.notify(...l);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, l = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = cx(s)), (this.instance = s);
      const { layoutId: a, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        l && (u || a) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const d = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = ax(d, 250)),
            Qi.hasAnimatedSinceResize &&
              ((Qi.hasAnimatedSinceResize = !1), this.nodes.forEach(yf));
        });
      }
      a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          c &&
          (a || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: m,
              layout: y,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const v =
                  this.options.transition || c.getDefaultTransition() || Ex,
                { onLayoutAnimationStart: E, onLayoutAnimationComplete: g } =
                  c.getProps(),
                h = !this.targetLayout || !lm(this.targetLayout, y) || m,
                p = !d && m;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                p ||
                (d && (h || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, p);
                const x = { ...Kp(v, "layout"), onPlay: E, onComplete: g };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((x.delay = 0), (x.type = !1)),
                  this.startAnimation(x);
              } else
                d || yf(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = y;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        be(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(kx),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        (f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: l, layout: a } = this.options;
      if (l === void 0 && !a) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(gf);
        return;
      }
      this.isUpdating || this.nodes.forEach(vx),
        (this.isUpdating = !1),
        this.nodes.forEach(xx),
        this.nodes.forEach(hx),
        this.nodes.forEach(px),
        this.clearAllSnapshots();
      const l = performance.now();
      (te.delta = Wt(0, 1e3 / 60, l - te.timestamp)),
        (te.timestamp = l),
        (te.isProcessing = !0),
        Ms.update.process(te),
        Ms.preRender.process(te),
        Ms.render.process(te),
        (te.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(yx), this.sharedNodes.forEach(Px);
    }
    scheduleUpdateProjection() {
      I.preRender(this.updateProjection, !1, !0);
    }
    scheduleCheckAfterUnmount() {
      I.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let a = 0; a < this.path.length; a++) this.path[a].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = re()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: l } = this.options;
      l &&
        l.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        );
    }
    updateScroll(s = "measure") {
      let l = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === s &&
        (l = !1),
        l &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: s,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!i) return;
      const s = this.isLayoutDirty || this.shouldResetTransform,
        l = this.projectionDelta && !sm(this.projectionDelta),
        a = this.getTransformTemplate(),
        u = a ? a(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        (l || rn(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const l = this.measurePageBox();
      let a = this.removeElementScroll(l);
      return (
        s && (a = this.removeTransform(a)),
        Lx(a),
        {
          animationId: this.root.animationId,
          measuredBox: l,
          layoutBox: a,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: s } = this.options;
      if (!s) return re();
      const l = s.measureViewportBox(),
        { scroll: a } = this.root;
      return a && (Lt(l.x, a.offset.x), Lt(l.y, a.offset.y)), l;
    }
    removeElementScroll(s) {
      const l = re();
      ze(l, s);
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a],
          { scroll: c, options: f } = u;
        if (u !== this.root && c && f.layoutScroll) {
          if (c.isRoot) {
            ze(l, s);
            const { scroll: d } = this.root;
            d && (Lt(l.x, -d.offset.x), Lt(l.y, -d.offset.y));
          }
          Lt(l.x, c.offset.x), Lt(l.y, c.offset.y);
        }
      }
      return l;
    }
    applyTransform(s, l = !1) {
      const a = re();
      ze(a, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !l &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          In(a, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          rn(c.latestValues) && In(a, c.latestValues);
      }
      return rn(this.latestValues) && In(a, this.latestValues), a;
    }
    removeTransform(s) {
      const l = re();
      ze(l, s);
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a];
        if (!u.instance || !rn(u.latestValues)) continue;
        Wl(u.latestValues) && u.updateSnapshot();
        const c = re(),
          f = u.measurePageBox();
        ze(c, f),
          cf(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return rn(this.latestValues) && cf(l, this.latestValues), l;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== te.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var l;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== a;
      if (
        !(
          s ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((l = this.parent) === null || l === void 0) &&
            l.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (
          ((this.resolvedRelativeTargetAt = te.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const m = this.getClosestProjectingParent();
          m && m.layout && this.animationProgress !== 1
            ? ((this.relativeParent = m),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = re()),
              (this.relativeTargetOrigin = re()),
              Rr(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                m.layout.layoutBox
              ),
              ze(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = re()), (this.targetWithTransforms = re())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                M1(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : ze(this.target, this.layout.layoutBox),
                tm(this.target, this.targetDelta))
              : ze(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const m = this.getClosestProjectingParent();
            m &&
            !!m.resumingFrom == !!this.resumingFrom &&
            !m.options.layoutScroll &&
            m.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = m),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = re()),
                (this.relativeTargetOrigin = re()),
                Rr(this.relativeTargetOrigin, this.target, m.target),
                ze(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          on.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Wl(this.parent.latestValues) ||
          em(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      const l = this.getLead(),
        a = !!this.resumingFrom || this !== l;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (u = !1),
        a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === te.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || f))
      )
        return;
      ze(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        m = this.treeScale.y;
      z1(this.layoutCorrected, this.treeScale, this.path, a),
        l.layout &&
          !l.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          (l.target = l.layout.layoutBox);
      const { target: y } = l;
      if (!y) {
        this.projectionTransform &&
          ((this.projectionDelta = zn()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = zn()),
        (this.projectionDeltaWithTransform = zn()));
      const v = this.projectionTransform;
      Ar(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
        (this.projectionTransform = hf(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== v ||
          this.treeScale.x !== d ||
          this.treeScale.y !== m) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", y)),
        on.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), s)) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(s, l = !1) {
      const a = this.snapshot,
        u = a ? a.latestValues : {},
        c = { ...this.latestValues },
        f = zn();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !l);
      const d = re(),
        m = a ? a.source : void 0,
        y = this.layout ? this.layout.source : void 0,
        v = m !== y,
        E = this.getStack(),
        g = !E || E.members.length <= 1,
        h = !!(v && !g && this.options.crossfade === !0 && !this.path.some(Tx));
      this.animationProgress = 0;
      let p;
      (this.mixTargetDelta = (x) => {
        const S = x / 1e3;
        vf(f.x, s.x, S),
          vf(f.y, s.y, S),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Rr(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            Cx(this.relativeTarget, this.relativeTargetOrigin, d, S),
            p && ix(this.relativeTarget, p) && (this.isProjectionDirty = !1),
            p || (p = re()),
            ze(p, this.relativeTarget)),
          v &&
            ((this.animationValues = c), J1(c, u, this.latestValues, S, h, g)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = S);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (be(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = I.update(() => {
          (Qi.hasAnimatedSinceResize = !0),
            (this.currentAnimation = fx(0, mf, {
              ...s,
              onUpdate: (l) => {
                this.mixTargetDelta(l), s.onUpdate && s.onUpdate(l);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(mf),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: l,
        target: a,
        layout: u,
        latestValues: c,
      } = s;
      if (!(!l || !a || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          um(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          a = this.target || re();
          const f = Ne(this.layout.layoutBox.x);
          (a.x.min = s.target.x.min), (a.x.max = a.x.min + f);
          const d = Ne(this.layout.layoutBox.y);
          (a.y.min = s.target.y.min), (a.y.max = a.y.min + d);
        }
        ze(l, a),
          In(l, c),
          Ar(this.projectionDeltaWithTransform, this.layoutCorrected, l, c);
      }
    }
    registerSharedNode(s, l) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new ox()),
        this.sharedNodes.get(s).add(l);
      const u = l.options.initialPromotionConfig;
      l.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(l)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: l } = this.options;
      return l
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: l } = this.options;
      return l
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: l, preserveFollowOpacity: a } = {}) {
      const u = this.getStack();
      u && u.promote(this, a),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        l && this.setOptions({ transition: l });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let l = !1;
      const { latestValues: a } = s;
      if (((a.rotate || a.rotateX || a.rotateY || a.rotateZ) && (l = !0), !l))
        return;
      const u = {};
      for (let c = 0; c < pf.length; c++) {
        const f = "rotate" + pf[c];
        a[f] && ((u[f] = a[f]), s.setStaticValue(f, 0));
      }
      s.render();
      for (const c in u) s.setStaticValue(c, u[c]);
      s.scheduleRender();
    }
    getProjectionStyles(s = {}) {
      var l, a;
      const u = {};
      if (!this.instance || this.isSVG) return u;
      if (this.isVisible) u.visibility = "";
      else return { visibility: "hidden" };
      const c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = Ki(s.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const v = {};
        return (
          this.options.layoutId &&
            ((v.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (v.pointerEvents = Ki(s.pointerEvents) || "")),
          this.hasProjected &&
            !rn(this.latestValues) &&
            ((v.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          v
        );
      }
      const d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = hf(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d
        )),
        c && (u.transform = c(d, u.transform));
      const { x: m, y } = this.projectionDelta;
      (u.transformOrigin = `${m.origin * 100}% ${y.origin * 100}% 0`),
        f.animationValues
          ? (u.opacity =
              f === this
                ? (a =
                    (l = d.opacity) !== null && l !== void 0
                      ? l
                      : this.latestValues.opacity) !== null && a !== void 0
                  ? a
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : d.opacityExit)
          : (u.opacity =
              f === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ""
                : d.opacityExit !== void 0
                ? d.opacityExit
                : 0);
      for (const v in So) {
        if (d[v] === void 0) continue;
        const { correct: E, applyTo: g } = So[v],
          h = u.transform === "none" ? d[v] : E(d[v], f);
        if (g) {
          const p = g.length;
          for (let x = 0; x < p; x++) u[g[x]] = h;
        } else u[v] = h;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents = f === this ? Ki(s.pointerEvents) || "" : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var l;
        return (l = s.currentAnimation) === null || l === void 0
          ? void 0
          : l.stop();
      }),
        this.root.nodes.forEach(gf),
        this.root.sharedNodes.clear();
    }
  };
}
function hx(e) {
  e.updateLayout();
}
function px(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = n.source !== e.layout.source;
    o === "size"
      ? it((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            m = Ne(d);
          (d.min = r[f].min), (d.max = d.min + m);
        })
      : um(o, n.layoutBox, r) &&
        it((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            m = Ne(r[f]);
          (d.max = d.min + m),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + m));
        });
    const l = zn();
    Ar(l, r, n.layoutBox);
    const a = zn();
    s ? Ar(a, e.applyTransform(i, !0), n.measuredBox) : Ar(a, r, n.layoutBox);
    const u = !sm(l);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: m } = f;
        if (d && m) {
          const y = re();
          Rr(y, n.layoutBox, d.layoutBox);
          const v = re();
          Rr(v, r, m.layoutBox),
            lm(y, v) || (c = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = v),
              (e.relativeTargetOrigin = y),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: a,
      layoutDelta: l,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function mx(e) {
  on.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function gx(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function yx(e) {
  e.clearSnapshot();
}
function gf(e) {
  e.clearMeasurements();
}
function vx(e) {
  e.isLayoutDirty = !1;
}
function xx(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function yf(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function wx(e) {
  e.resolveTargetDelta();
}
function Sx(e) {
  e.calcProjection();
}
function kx(e) {
  e.resetRotation();
}
function Px(e) {
  e.removeLeadSnapshot();
}
function vf(e, t, n) {
  (e.translate = Q(t.translate, 0, n)),
    (e.scale = Q(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function xf(e, t, n, r) {
  (e.min = Q(t.min, n.min, r)), (e.max = Q(t.max, n.max, r));
}
function Cx(e, t, n, r) {
  xf(e.x, t.x, n.x, r), xf(e.y, t.y, n.y, r);
}
function Tx(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const Ex = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  wf = (e) =>
    typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e),
  Sf = wf("applewebkit/") && !wf("chrome/") ? Math.round : q;
function kf(e) {
  (e.min = Sf(e.min)), (e.max = Sf(e.max));
}
function Lx(e) {
  kf(e.x), kf(e.y);
}
function um(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !$l(df(t), df(n), 0.2))
  );
}
const Vx = am({
    attachResizeListener: (e, t) => pt(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Bs = { current: void 0 },
  cm = am({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Bs.current) {
        const e = new Vx({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Bs.current = e);
      }
      return Bs.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  Mx = {
    pan: { Feature: K1 },
    drag: { Feature: G1, ProjectionNode: cm, MeasureLayout: rm },
  },
  jx = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function Dx(e) {
  const t = jx.exec(e);
  if (!t) return [,];
  const [, n, r] = t;
  return [n, r];
}
function Kl(e, t, n = 1) {
  const [r, i] = Dx(e);
  if (!r) return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    const s = o.trim();
    return Qp(s) ? parseFloat(s) : s;
  } else return _l(i) ? Kl(i, t, n + 1) : i;
}
function Ax(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element)) return { target: t, transitionEnd: n };
  n && (n = { ...n }),
    e.values.forEach((i) => {
      const o = i.get();
      if (!_l(o)) return;
      const s = Kl(o, r);
      s && i.set(s);
    });
  for (const i in t) {
    const o = t[i];
    if (!_l(o)) continue;
    const s = Kl(o, r);
    s && ((t[i] = s), n || (n = {}), n[i] === void 0 && (n[i] = o));
  }
  return { target: t, transitionEnd: n };
}
const Rx = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  fm = (e) => Rx.has(e),
  Nx = (e) => Object.keys(e).some(fm),
  Pf = (e) => e === wn || e === j,
  Cf = (e, t) => parseFloat(e.split(", ")[t]),
  Tf =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/);
      if (i) return Cf(i[1], t);
      {
        const o = r.match(/^matrix\((.+)\)$/);
        return o ? Cf(o[1], e) : 0;
      }
    },
  _x = new Set(["x", "y", "z"]),
  Ox = li.filter((e) => !_x.has(e));
function Fx(e) {
  const t = [];
  return (
    Ox.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t.length && e.render(),
    t
  );
}
const er = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Tf(4, 13),
  y: Tf(5, 14),
};
er.translateX = er.x;
er.translateY = er.y;
const zx = (e, t, n) => {
    const r = t.measureViewportBox(),
      i = t.current,
      o = getComputedStyle(i),
      { display: s } = o,
      l = {};
    s === "none" && t.setStaticValue("display", e.display || "block"),
      n.forEach((u) => {
        l[u] = er[u](r, o);
      }),
      t.render();
    const a = t.measureViewportBox();
    return (
      n.forEach((u) => {
        const c = t.getValue(u);
        c && c.jump(l[u]), (e[u] = er[u](a, o));
      }),
      e
    );
  },
  Ix = (e, t, n = {}, r = {}) => {
    (t = { ...t }), (r = { ...r });
    const i = Object.keys(t).filter(fm);
    let o = [],
      s = !1;
    const l = [];
    if (
      (i.forEach((a) => {
        const u = e.getValue(a);
        if (!e.hasValue(a)) return;
        let c = n[a],
          f = dr(c);
        const d = t[a];
        let m;
        if (Po(d)) {
          const y = d.length,
            v = d[0] === null ? 1 : 0;
          (c = d[v]), (f = dr(c));
          for (let E = v; E < y && d[E] !== null; E++)
            m ? es(dr(d[E]) === m) : (m = dr(d[E]));
        } else m = dr(d);
        if (f !== m)
          if (Pf(f) && Pf(m)) {
            const y = u.get();
            typeof y == "string" && u.set(parseFloat(y)),
              typeof d == "string"
                ? (t[a] = parseFloat(d))
                : Array.isArray(d) && m === j && (t[a] = d.map(parseFloat));
          } else
            f != null &&
            f.transform &&
            m != null &&
            m.transform &&
            (c === 0 || d === 0)
              ? c === 0
                ? u.set(m.transform(c))
                : (t[a] = f.transform(d))
              : (s || ((o = Fx(e)), (s = !0)),
                l.push(a),
                (r[a] = r[a] !== void 0 ? r[a] : t[a]),
                u.jump(d));
      }),
      l.length)
    ) {
      const a = l.indexOf("height") >= 0 ? window.pageYOffset : null,
        u = zx(t, e, l);
      return (
        o.length &&
          o.forEach(([c, f]) => {
            e.getValue(c).set(f);
          }),
        e.render(),
        Ko && a !== null && window.scrollTo({ top: a }),
        { target: u, transitionEnd: r }
      );
    } else return { target: t, transitionEnd: r };
  };
function Bx(e, t, n, r) {
  return Nx(t) ? Ix(e, t, n, r) : { target: t, transitionEnd: r };
}
const Ux = (e, t, n, r) => {
    const i = Ax(e, t, r);
    return (t = i.target), (r = i.transitionEnd), Bx(e, t, n, r);
  },
  Ql = { current: null },
  dm = { current: !1 };
function $x() {
  if (((dm.current = !0), !!Ko))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Ql.current = e.matches);
      e.addListener(t), t();
    } else Ql.current = !1;
}
function Hx(e, t, n) {
  const { willChange: r } = t;
  for (const i in t) {
    const o = t[i],
      s = n[i];
    if (ge(o)) e.addValue(i, o), Eo(r) && r.add(i);
    else if (ge(s)) e.addValue(i, Xe(o, { owner: e })), Eo(r) && r.remove(i);
    else if (s !== o)
      if (e.hasValue(i)) {
        const l = e.getValue(i);
        !l.hasAnimated && l.set(o);
      } else {
        const l = e.getStaticValue(i);
        e.addValue(i, Xe(l !== void 0 ? l : o, { owner: e }));
      }
  }
  for (const i in n) t[i] === void 0 && e.removeValue(i);
  return t;
}
const Ef = new WeakMap(),
  hm = Object.keys(br),
  Wx = hm.length,
  Lf = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  Gx = Qa.length;
class Kx {
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      visualState: o,
    },
    s = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.scheduleRender = () => I.render(this.render, !1, !0));
    const { latestValues: l, renderState: a } = o;
    (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = a),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = s),
      (this.isControllingVariants = Xo(n)),
      (this.isVariantNode = qh(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
    for (const f in c) {
      const d = c[f];
      l[f] !== void 0 && ge(d) && (d.set(l[f], !1), Eo(u) && u.add(f));
    }
  }
  scrapeMotionValuesFromProps(t, n) {
    return {};
  }
  mount(t) {
    (this.current = t),
      Ef.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      dm.current || $x(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : Ql.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    Ef.delete(this.current),
      this.projection && this.projection.unmount(),
      be(this.notifyUpdate),
      be(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = xn.has(t),
      i = n.on("change", (s) => {
        (this.latestValues[t] = s),
          this.props.onUpdate && I.update(this.notifyUpdate, !1, !0),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      o = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      i(), o();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, i, o) {
    let s, l;
    for (let a = 0; a < Wx; a++) {
      const u = hm[a],
        {
          isEnabled: c,
          Feature: f,
          ProjectionNode: d,
          MeasureLayout: m,
        } = br[u];
      d && (s = d),
        c(n) &&
          (!this.features[u] && f && (this.features[u] = new f(this)),
          m && (l = m));
    }
    if (!this.projection && s) {
      this.projection = new s(
        this.latestValues,
        this.parent && this.parent.projection
      );
      const {
        layoutId: a,
        layout: u,
        drag: c,
        dragConstraints: f,
        layoutScroll: d,
        layoutRoot: m,
      } = n;
      this.projection.setOptions({
        layoutId: a,
        layout: u,
        alwaysMeasureLayout: !!c || (f && On(f)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: o,
        layoutScroll: d,
        layoutRoot: m,
      });
    }
    return l;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : re();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  makeTargetAnimatable(t, n = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, n);
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < Lf.length; r++) {
      const i = Lf[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const o = t["on" + i];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    (this.prevMotionValues = Hx(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < Gx; r++) {
      const i = Qa[r],
        o = this.props[i];
      (Jr(o) || o === !1) && (n[i] = o);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    n !== this.values.get(t) &&
      (this.removeValue(t), this.bindToMotionValue(t, n)),
      this.values.set(t, n),
      (this.latestValues[t] = n.get());
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Xe(n, { owner: this })), this.addValue(t, r)),
      r
    );
  }
  readValue(t) {
    var n;
    return this.latestValues[t] !== void 0 || !this.current
      ? this.latestValues[t]
      : (n = this.getBaseTargetFromProps(this.props, t)) !== null &&
        n !== void 0
      ? n
      : this.readValueFromInstance(this.current, t, this.options);
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props,
      i =
        typeof r == "string" || typeof r == "object"
          ? (n = tu(this.props, r)) === null || n === void 0
            ? void 0
            : n[t]
          : void 0;
    if (r && i !== void 0) return i;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !ge(o)
      ? o
      : this.initialValues[t] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new cu()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class pm extends Kx {
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  makeTargetAnimatableFromInstance(
    { transition: t, transitionEnd: n, ...r },
    { transformValues: i },
    o
  ) {
    let s = f1(r, t || {}, this);
    if ((i && (n && (n = i(n)), r && (r = i(r)), s && (s = i(s))), o)) {
      u1(this, r, s);
      const l = Ux(this, r, s, n);
      (n = l.transitionEnd), (r = l.target);
    }
    return { transition: t, transitionEnd: n, ...r };
  }
}
function Qx(e) {
  return window.getComputedStyle(e);
}
class Yx extends pm {
  readValueFromInstance(t, n) {
    if (xn.has(n)) {
      const r = su(n);
      return (r && r.default) || 0;
    } else {
      const r = Qx(t),
        i = (np(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return nm(t, n);
  }
  build(t, n, r, i) {
    Xa(t, n, r, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return eu(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    ge(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, r, i) {
    ap(t, n, r, i);
  }
}
class Xx extends pm {
  constructor() {
    super(...arguments), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (xn.has(n)) {
      const r = su(n);
      return (r && r.default) || 0;
    }
    return (n = up.has(n) ? n : ba(n)), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return re();
  }
  scrapeMotionValuesFromProps(t, n) {
    return fp(t, n);
  }
  build(t, n, r, i) {
    qa(t, n, r, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    cp(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = Ja(t.tagName)), super.mount(t);
  }
}
const Zx = (e, t) =>
    Ya(e)
      ? new Xx(t, { enableHardwareAcceleration: !1 })
      : new Yx(t, { enableHardwareAcceleration: !0 }),
  qx = { layout: { ProjectionNode: cm, MeasureLayout: rm } },
  Jx = { ...T1, ...Qy, ...Mx, ...qx },
  _ = ny((e, t) => Ny(e, t, Jx, Zx));
function mm(e) {
  const t = qo(() => Xe(e)),
    { isStatic: n } = M.useContext(Wo);
  if (n) {
    const [, r] = M.useState(e);
    M.useEffect(() => t.on("change", r), []);
  }
  return t;
}
const bx = (e) => typeof e == "object" && e.mix,
  ew = (e) => (bx(e) ? e.mix : void 0);
function tw(...e) {
  const t = !Array.isArray(e[0]),
    n = t ? 0 : -1,
    r = e[0 + n],
    i = e[1 + n],
    o = e[2 + n],
    s = e[3 + n],
    l = ts(i, o, { mixer: ew(o[0]), ...s });
  return t ? l(r) : l;
}
function gm(e, t) {
  const n = mm(t()),
    r = () => n.set(t());
  return (
    r(),
    Qo(() => {
      const i = () => I.update(r, !1, !0),
        o = e.map((s) => s.on("change", i));
      return () => {
        o.forEach((s) => s()), be(r);
      };
    }),
    n
  );
}
function nw(e) {
  (Dr.current = []), e();
  const t = gm(Dr.current, e);
  return (Dr.current = void 0), t;
}
function Yl(e, t, n, r) {
  if (typeof e == "function") return nw(e);
  const i = typeof t == "function" ? t : tw(t, n, r);
  return Array.isArray(e) ? Vf(e, i) : Vf([e], ([o]) => i(o));
}
function Vf(e, t) {
  const n = qo(() => []);
  return gm(e, () => {
    n.length = 0;
    const r = e.length;
    for (let i = 0; i < r; i++) n[i] = e[i].get();
    return t(n);
  });
}
function rw(e, t = {}) {
  const { isStatic: n } = M.useContext(Wo),
    r = M.useRef(null),
    i = mm(ge(e) ? e.get() : e),
    o = () => {
      r.current && r.current.stop();
    };
  return (
    M.useInsertionEffect(
      () =>
        i.attach((s, l) => {
          if (n) return l(s);
          if (
            (o(),
            (r.current = ei({
              keyframes: [i.get(), s],
              velocity: i.getVelocity(),
              type: "spring",
              restDelta: 0.001,
              restSpeed: 0.01,
              ...t,
              onUpdate: l,
            })),
            !te.isProcessing)
          ) {
            const a = performance.now() - te.timestamp;
            a < 30 && (r.current.time = ut(a));
          }
          return i.get();
        }, o),
      [JSON.stringify(t)]
    ),
    Qo(() => {
      if (ge(e)) return e.on("change", (s) => i.set(parseFloat(s)));
    }, [i]),
    i
  );
}
function ym(e, t, n) {
  var r;
  if (typeof e == "string") {
    let i = document;
    t && (es(!!t.current), (i = t.current)),
      n
        ? (((r = n[e]) !== null && r !== void 0) ||
            (n[e] = i.querySelectorAll(e)),
          (e = n[e]))
        : (e = i.querySelectorAll(e));
  } else e instanceof Element && (e = [e]);
  return Array.from(e || []);
}
const Yi = new WeakMap();
let Ct;
function iw(e, t) {
  if (t) {
    const { inlineSize: n, blockSize: r } = t[0];
    return { width: n, height: r };
  } else
    return e instanceof SVGElement && "getBBox" in e
      ? e.getBBox()
      : { width: e.offsetWidth, height: e.offsetHeight };
}
function ow({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = Yi.get(e)) === null ||
    r === void 0 ||
    r.forEach((i) => {
      i({
        target: e,
        contentSize: t,
        get size() {
          return iw(e, n);
        },
      });
    });
}
function sw(e) {
  e.forEach(ow);
}
function lw() {
  typeof ResizeObserver > "u" || (Ct = new ResizeObserver(sw));
}
function aw(e, t) {
  Ct || lw();
  const n = ym(e);
  return (
    n.forEach((r) => {
      let i = Yi.get(r);
      i || ((i = new Set()), Yi.set(r, i)),
        i.add(t),
        Ct == null || Ct.observe(r);
    }),
    () => {
      n.forEach((r) => {
        const i = Yi.get(r);
        i == null || i.delete(t),
          (i != null && i.size) || Ct == null || Ct.unobserve(r);
      });
    }
  );
}
const Xi = new Set();
let Nr;
function uw() {
  (Nr = () => {
    const e = { width: window.innerWidth, height: window.innerHeight },
      t = { target: window, size: e, contentSize: e };
    Xi.forEach((n) => n(t));
  }),
    window.addEventListener("resize", Nr);
}
function cw(e) {
  return (
    Xi.add(e),
    Nr || uw(),
    () => {
      Xi.delete(e), !Xi.size && Nr && (Nr = void 0);
    }
  );
}
function fw(e, t) {
  return typeof e == "function" ? cw(e) : aw(e, t);
}
const dw = 50,
  Mf = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  hw = () => ({ time: 0, x: Mf(), y: Mf() }),
  pw = {
    x: { length: "Width", position: "Left" },
    y: { length: "Height", position: "Top" },
  };
function jf(e, t, n, r) {
  const i = n[t],
    { length: o, position: s } = pw[t],
    l = i.current,
    a = n.time;
  (i.current = e["scroll" + s]),
    (i.scrollLength = e["scroll" + o] - e["client" + o]),
    (i.offset.length = 0),
    (i.offset[0] = 0),
    (i.offset[1] = i.scrollLength),
    (i.progress = bn(0, i.scrollLength, i.current));
  const u = r - a;
  i.velocity = u > dw ? 0 : ou(i.current - l, u);
}
function mw(e, t, n) {
  jf(e, "x", t, n), jf(e, "y", t, n), (t.time = n);
}
function gw(e, t) {
  const n = { x: 0, y: 0 };
  let r = e;
  for (; r && r !== t; )
    if (r instanceof HTMLElement)
      (n.x += r.offsetLeft), (n.y += r.offsetTop), (r = r.offsetParent);
    else if (r.tagName === "svg") {
      const i = r.getBoundingClientRect();
      r = r.parentElement;
      const o = r.getBoundingClientRect();
      (n.x += i.left - o.left), (n.y += i.top - o.top);
    } else if (r instanceof SVGGraphicsElement) {
      const { x: i, y: o } = r.getBBox();
      (n.x += i), (n.y += o);
      let s = null,
        l = r.parentNode;
      for (; !s; ) l.tagName === "svg" && (s = l), (l = r.parentNode);
      r = s;
    } else break;
  return n;
}
const yw = {
    Enter: [
      [0, 1],
      [1, 1],
    ],
    Exit: [
      [0, 0],
      [1, 0],
    ],
    Any: [
      [1, 0],
      [0, 1],
    ],
    All: [
      [0, 0],
      [1, 1],
    ],
  },
  Xl = { start: 0, center: 0.5, end: 1 };
function Df(e, t, n = 0) {
  let r = 0;
  if ((Xl[e] !== void 0 && (e = Xl[e]), typeof e == "string")) {
    const i = parseFloat(e);
    e.endsWith("px")
      ? (r = i)
      : e.endsWith("%")
      ? (e = i / 100)
      : e.endsWith("vw")
      ? (r = (i / 100) * document.documentElement.clientWidth)
      : e.endsWith("vh")
      ? (r = (i / 100) * document.documentElement.clientHeight)
      : (e = i);
  }
  return typeof e == "number" && (r = t * e), n + r;
}
const vw = [0, 0];
function xw(e, t, n, r) {
  let i = Array.isArray(e) ? e : vw,
    o = 0,
    s = 0;
  return (
    typeof e == "number"
      ? (i = [e, e])
      : typeof e == "string" &&
        ((e = e.trim()),
        e.includes(" ") ? (i = e.split(" ")) : (i = [e, Xl[e] ? e : "0"])),
    (o = Df(i[0], n, r)),
    (s = Df(i[1], t)),
    o - s
  );
}
const ww = { x: 0, y: 0 };
function Sw(e) {
  return "getBBox" in e && e.tagName !== "svg"
    ? e.getBBox()
    : { width: e.clientWidth, height: e.clientHeight };
}
function kw(e, t, n) {
  let { offset: r = yw.All } = n;
  const { target: i = e, axis: o = "y" } = n,
    s = o === "y" ? "height" : "width",
    l = i !== e ? gw(i, e) : ww,
    a = i === e ? { width: e.scrollWidth, height: e.scrollHeight } : Sw(i),
    u = { width: e.clientWidth, height: e.clientHeight };
  t[o].offset.length = 0;
  let c = !t[o].interpolate;
  const f = r.length;
  for (let d = 0; d < f; d++) {
    const m = xw(r[d], u[s], a[s], l[o]);
    !c && m !== t[o].interpolatorOffsets[d] && (c = !0), (t[o].offset[d] = m);
  }
  c &&
    ((t[o].interpolate = ts(t[o].offset, Up(r))),
    (t[o].interpolatorOffsets = [...t[o].offset])),
    (t[o].progress = t[o].interpolate(t[o].current));
}
function Pw(e, t = e, n) {
  if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), t !== e)) {
    let r = t;
    for (; r && r !== e; )
      (n.x.targetOffset += r.offsetLeft),
        (n.y.targetOffset += r.offsetTop),
        (r = r.offsetParent);
  }
  (n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
    (n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
    (n.x.containerLength = e.clientWidth),
    (n.y.containerLength = e.clientHeight);
}
function Cw(e, t, n, r = {}) {
  return {
    measure: () => Pw(e, r.target, n),
    update: (i) => {
      mw(e, n, i), (r.offset || r.target) && kw(e, n, r);
    },
    notify: () => t(n),
  };
}
const pr = new WeakMap(),
  Af = new WeakMap(),
  Us = new WeakMap(),
  Rf = (e) => (e === document.documentElement ? window : e);
function Tw(e, { container: t = document.documentElement, ...n } = {}) {
  let r = Us.get(t);
  r || ((r = new Set()), Us.set(t, r));
  const i = hw(),
    o = Cw(t, e, i, n);
  if ((r.add(o), !pr.has(t))) {
    const l = () => {
        for (const d of r) d.measure();
      },
      a = () => {
        for (const d of r) d.update(te.timestamp);
      },
      u = () => {
        for (const d of r) d.notify();
      },
      c = () => {
        I.read(l, !1, !0), I.update(a, !1, !0), I.update(u, !1, !0);
      };
    pr.set(t, c);
    const f = Rf(t);
    window.addEventListener("resize", c, { passive: !0 }),
      t !== document.documentElement && Af.set(t, fw(t, c)),
      f.addEventListener("scroll", c, { passive: !0 });
  }
  const s = pr.get(t);
  return (
    I.read(s, !1, !0),
    () => {
      var l;
      be(s);
      const a = Us.get(t);
      if (!a || (a.delete(o), a.size)) return;
      const u = pr.get(t);
      pr.delete(t),
        u &&
          (Rf(t).removeEventListener("scroll", u),
          (l = Af.get(t)) === null || l === void 0 || l(),
          window.removeEventListener("resize", u));
    }
  );
}
function Nf(e, t) {
  xp(!!(!t || t.current));
}
const Ew = () => ({
  scrollX: Xe(0),
  scrollY: Xe(0),
  scrollXProgress: Xe(0),
  scrollYProgress: Xe(0),
});
function fu({ container: e, target: t, layoutEffect: n = !0, ...r } = {}) {
  const i = qo(Ew);
  return (
    (n ? Qo : M.useEffect)(
      () => (
        Nf("target", t),
        Nf("container", e),
        Tw(
          ({ x: s, y: l }) => {
            i.scrollX.set(s.current),
              i.scrollXProgress.set(s.progress),
              i.scrollY.set(l.current),
              i.scrollYProgress.set(l.progress);
          },
          {
            ...r,
            container: (e == null ? void 0 : e.current) || void 0,
            target: (t == null ? void 0 : t.current) || void 0,
          }
        )
      ),
      [e, t, JSON.stringify(r.offset)]
    ),
    i
  );
}
const Lw = { some: 0, all: 1 };
function Vw(e, t, { root: n, margin: r, amount: i = "some" } = {}) {
  const o = ym(e),
    s = new WeakMap(),
    l = (u) => {
      u.forEach((c) => {
        const f = s.get(c.target);
        if (c.isIntersecting !== !!f)
          if (c.isIntersecting) {
            const d = t(c);
            typeof d == "function" ? s.set(c.target, d) : a.unobserve(c.target);
          } else f && (f(c), s.delete(c.target));
      });
    },
    a = new IntersectionObserver(l, {
      root: n,
      rootMargin: r,
      threshold: typeof i == "number" ? i : Lw[i],
    });
  return o.forEach((u) => a.observe(u)), () => a.disconnect();
}
function vm(e, { root: t, margin: n, amount: r, once: i = !1 } = {}) {
  const [o, s] = M.useState(!1);
  return (
    M.useEffect(() => {
      if (!e.current || (i && o)) return;
      const l = () => (s(!0), i ? void 0 : () => s(!1)),
        a = { root: (t && t.current) || void 0, margin: n, amount: r };
      return Vw(e.current, l, a);
    }, [t, e, n, i]),
    o
  );
}
const Mw = ({ setOpen: e }) =>
    w.jsx("button", {
      onClick: () => e((t) => !t),
      children: w.jsxs("svg", {
        width: "23",
        height: "23",
        viewBox: "0 0 23 23",
        children: [
          w.jsx(_.path, {
            strokeWidth: "3",
            stroke: "black",
            strokeLinecap: "round",
            variants: {
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            },
          }),
          w.jsx(_.path, {
            strokeWidth: "3",
            stroke: "black",
            strokeLinecap: "round",
            d: "M 2 9.423 L 20 9.423",
            variants: { closed: { opacity: 1 }, open: { opacity: 0 } },
          }),
          w.jsx(_.path, {
            strokeWidth: "3",
            stroke: "black",
            strokeLinecap: "round",
            variants: {
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            },
          }),
        ],
      }),
    }),
  jw = {
    open: { transition: { staggerChildrem: 0.1 } },
    closed: { transition: { staggerChildrem: 0.05, staggerDirection: -1 } },
  },
  Dw = { open: { y: 0, opacity: 1 }, closed: { y: 50, opacity: 0 } },
  Aw = () => {
    const e = ["Inicio", "Sobre", "Projetos", "Contato"];
    return w.jsx(_.div, {
      className: "links",
      variants: jw,
      children: e.map((t) =>
        w.jsx(
          _.a,
          {
            href: `#${t}`,
            variants: Dw,
            whileHover: { scale: 1.1 },
            whileTap: { scale: 0.95 },
            children: t,
          },
          t
        )
      ),
    });
  },
  Rw = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: { type: "spring", stiffness: 20 },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: { delay: 0.5, type: "spring", stiffness: 400, damping: 40 },
    },
  },
  Nw = () => {
    const [e, t] = M.useState(!1);
    return w.jsxs(_.div, {
      className: "sidebar",
      animate: e ? "open" : "closed",
      children: [
        w.jsx(_.div, {
          className: "bg",
          variants: Rw,
          children: w.jsx(Aw, {}),
        }),
        w.jsx(Mw, { setOpen: t }),
      ],
    });
  },
  _w = () =>
    w.jsxs("div", {
      className: "navbar",
      children: [
        w.jsx(Nw, {}),
        w.jsxs("div", {
          className: "wrapper",
          children: [
            w.jsx(_.span, {
              initial: { opacity: 0, scale: 0.5 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 0.5 },
              children: "Leonardo Brancaglione",
            }),
            w.jsxs("div", {
              className: "social",
              children: [
                w.jsx("a", {
                  href: "https://github.com/LBrancaglione",
                  children: w.jsx("img", { src: "/github.png", alt: "" }),
                }),
                w.jsx("a", {
                  href: "https://www.instagram.com/leonardobrancaglione/",
                  children: w.jsx("img", { src: "/instagram.png", alt: "" }),
                }),
                w.jsx("a", {
                  href: "https://www.linkedin.com/in/leonardo-brancaglione",
                  children: w.jsx("img", { src: "/linkdin.png", alt: "" }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
const en = {
    initial: { x: -500, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, staggerChildren: 0.1 },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: { duration: 2, repeat: 1 / 0 },
    },
  },
  Ow = {
    initial: { x: 0 },
    animate: {
      x: "-820%",
      transition: { repeat: 1 / 0, repeatType: "mirror", duration: 60 },
    },
  },
  Fw = () => {
    const e = ["Inicio", "Sobre", "Projetos", "Contato"];
    return w.jsxs("div", {
      className: "hero",
      children: [
        w.jsx("div", {
          className: "wrapper",
          children: w.jsxs(_.div, {
            className: "textContainer",
            variants: en,
            initial: "initial",
            animate: "animate",
            children: [
              w.jsx(_.h2, { variants: en, children: "LEONARDO BRANCAGLIONE" }),
              w.jsx(_.h1, { variants: en, children: "Desenvolvedor Web" }),
              w.jsxs(_.div, {
                variants: en,
                className: "buttons",
                children: [
                  w.jsx(_.button, {
                    variants: en,
                    children: w.jsx("a", {
                      href: `#${e[2]}`,
                      children: "Veja meus ultimos trabalhos",
                    }),
                  }),
                  w.jsx(_.button, {
                    variants: en,
                    children: w.jsx("a", {
                      href: `#${e[3]}`,
                      children: "Entre em contato",
                    }),
                  }),
                ],
              }),
              w.jsx(_.img, {
                variants: en,
                animate: "scrollButton",
                src: "/scroll.png",
                alt: "",
              }),
            ],
          }),
        }),
        w.jsx(_.div, {
          className: "slidingTextContainer",
          variants: Ow,
          initial: "initial",
          animate: "animate",
          children: "React SCSS Typescript ReactNative PHP",
        }),
        w.jsx("div", {
          className: "imageContainer",
          children: w.jsx("img", { src: "/hero.png", alt: "" }),
        }),
      ],
    });
  };
const _f = ({ type: e }) => {
  const t = M.useRef(),
    { scrollYProgress: n } = fu({
      target: t,
      offset: ["start start", "end start"],
    }),
    r = Yl(n, [0, 1], ["0%", "500%"]),
    i = Yl(n, [0, 1], ["0%", "100%"]);
  return w.jsxs("div", {
    className: "parallax",
    ref: t,
    style: {
      background:
        e === "services"
          ? "linear-gradient(180deg, #111132, #0c0c1d"
          : "linear-gradient(180deg, #111132, #505064",
    },
    children: [
      w.jsx(_.h1, {
        style: { y: r },
        children: e === "services" ? "O que eu faço?" : "O que desenvolvi?",
      }),
      w.jsx(_.div, { className: "mountains" }),
      w.jsx(_.div, {
        className: "planets",
        style: {
          y: i,
          backgroundImage: `url(${
            e === "services" ? "/planets.png" : "/sun.png"
          })`,
        },
      }),
      w.jsx(_.div, { style: { x: i }, className: "stars" }),
    ],
  });
};
const Ri = {
    initial: { x: -500, y: 100, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: { duration: 1, staggerChildren: 0.1 },
    },
  },
  zw = () => {
    const e = M.useRef(),
      t = vm(e, { margin: "-100px" });
    return w.jsxs(_.div, {
      className: "services",
      variants: Ri,
      initial: "initial",
      ref: e,
      animate: t && "animate",
      children: [
        w.jsxs(_.div, {
          className: "textContainer",
          variants: Ri,
          children: [
            w.jsxs("p", {
              children: [
                "Analista e desenvolvedor de ",
                w.jsx("br", {}),
                " sistemas.",
              ],
            }),
            w.jsx("hr", {}),
          ],
        }),
        w.jsxs(_.div, {
          className: "titleContainer",
          variants: Ri,
          children: [
            w.jsxs("div", {
              className: "title",
              children: [
                w.jsx("img", { src: "/people.webp", alt: "" }),
                w.jsxs("h1", {
                  children: [
                    w.jsx(_.b, {
                      whileHover: { color: "orange" },
                      children: "Front-end ",
                    }),
                    "ideias",
                  ],
                }),
              ],
            }),
            w.jsxs("div", {
              className: "title",
              children: [
                w.jsxs("h1", {
                  children: [
                    w.jsx(_.b, {
                      whileHover: { color: "orange" },
                      children: "em interfaces ",
                    }),
                    " ",
                    "incríveis!",
                  ],
                }),
                w.jsx("button", { children: "O que eu faço?" }),
              ],
            }),
          ],
        }),
        w.jsxs(_.div, {
          className: "listContainer",
          variants: Ri,
          children: [
            w.jsxs(_.div, {
              className: "box",
              whileHover: { background: "lightgray", color: "black" },
              children: [
                w.jsx("h2", { children: "Front-End" }),
                w.jsx("p", {
                  children:
                    "Interface visual, interatividade, essencial para boa experiência do usuário, impactando diretamente no sucesso de plataformas digitais.",
                }),
                w.jsx("button", { children: "Go" }),
              ],
            }),
            w.jsxs(_.div, {
              className: "box",
              whileHover: { background: "lightgray", color: "black" },
              children: [
                w.jsx("h2", { children: "Minha formação" }),
                w.jsx("p", {
                  children:
                    "Sou Técnico e Tecnólogo em análise e desenvolvimento de sistemas, e tenho diversos cursos de especialização.",
                }),
                w.jsx("button", { children: "Go" }),
              ],
            }),
            w.jsxs(_.div, {
              className: "box",
              whileHover: { background: "lightgray", color: "black" },
              children: [
                w.jsx("h2", { children: "Quem eu sou ?" }),
                w.jsx("p", {
                  children:
                    "Hoje tenho 21 anos dediquei a maior parte da minha vida ao estudo, buscando conhecimento e desenvolvimento pessoal. Minha jornada foi marcada pelo comprometimento com o aprendizado acadêmico, consolidando uma base sólida para enfrentar os desafios futuros.",
                }),
                w.jsx("button", { children: "Go" }),
              ],
            }),
            w.jsxs(_.div, {
              className: "box",
              whileHover: { background: "lightgray", color: "black" },
              children: [
                w.jsx("h2", { children: "Experiência" }),
                w.jsx("p", {
                  children:
                    "Hoje sou jovem aprendiz, já desenvolvi diversos projetos práticos e funcionais de sistemas que poderiam ser implementados. Tenho dominio sob SCSS, React/React Native, PHP.",
                }),
                w.jsx("button", { children: "Go" }),
              ],
            }),
          ],
        }),
      ],
    });
  };
const Iw = [
    {
      id: 1,
      title: "Todo List",
      img: "./todo-list.png",
      desc: "Uma lista de tarefas, com as funções create e delete",
      link: "https://lbrancaglione.github.io/TodoList/",
    },
    {
      id: 2,
      title: "Galeria de Imagens",
      img: "./gallery.png",
      desc: "Inseri e consome dados do firebase, possibilitando a exibição e adição de imagem dentro do banco de dados.",
      link: "https://lbrancaglione.github.io/expense-tracker/",
    },
    {
      id: 3,
      title: "Netflix Clone",
      img: "./Netflix-Clone.png",
      desc: "Consome dados da API Themoviedb.org e os estiliza de acordo com o padrão da Netflix.",
      link: "https://lbrancaglione.github.io/NetflixClone/",
    },
    {
      id: 4,
      title: "Sistema de Finanças",
      img: "./expanse-tracker.png",
      desc: "Calcula rentabilidade a partir dos dados obtidos por meio de prompts.",
      link: "https://lbrancaglione.github.io/expense-tracker/",
    },
  ],
  Bw = ({ item: e }) => {
    const t = M.useRef(),
      { scrollYProgress: n } = fu({ target: t }),
      r = Yl(n, [0, 1], [-300, 300]);
    return w.jsx("section", {
      children: w.jsx("div", {
        className: "container",
        children: w.jsxs("div", {
          className: "wrapper",
          children: [
            w.jsx("div", {
              className: "imageContainer",
              ref: t,
              children: w.jsx("img", { src: e.img, alt: "" }),
            }),
            w.jsxs(_.div, {
              className: "textContainer",
              style: { y: r },
              children: [
                w.jsx("h2", { children: e.title }),
                w.jsx("p", { children: e.desc }),
                w.jsx("button", {
                  children: w.jsx("a", { href: e.link, children: "Visitar" }),
                }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  Uw = () => {
    const e = M.useRef(),
      { scrollYProgress: t } = fu({
        target: e,
        offset: ["end end", "start start"],
      }),
      n = rw(t, { stiffness: 100, damping: 30 });
    return w.jsxs("div", {
      className: "portfolio",
      ref: e,
      children: [
        w.jsxs("div", {
          className: "progress",
          children: [
            w.jsx("h1", { children: "Projetos" }),
            w.jsx(_.div, { style: { scaleX: n }, className: "progressBar" }),
          ],
        }),
        Iw.map((r) => w.jsx(Bw, { item: r }, r.id)),
      ],
    });
  };
const ti = { _origin: "https://api.emailjs.com" },
  $w = (e, t = "https://api.emailjs.com") => {
    (ti._userID = e), (ti._origin = t);
  },
  xm = (e, t, n) => {
    if (!e)
      throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
    if (!t)
      throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
    if (!n)
      throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
    return !0;
  };
class Of {
  constructor(t) {
    (this.status = t ? t.status : 0),
      (this.text = t ? t.responseText : "Network Error");
  }
}
const wm = (e, t, n = {}) =>
    new Promise((r, i) => {
      const o = new XMLHttpRequest();
      o.addEventListener("load", ({ target: s }) => {
        const l = new Of(s);
        l.status === 200 || l.text === "OK" ? r(l) : i(l);
      }),
        o.addEventListener("error", ({ target: s }) => {
          i(new Of(s));
        }),
        o.open("POST", ti._origin + e, !0),
        Object.keys(n).forEach((s) => {
          o.setRequestHeader(s, n[s]);
        }),
        o.send(t);
    }),
  Hw = (e, t, n, r) => {
    const i = r || ti._userID;
    return (
      xm(i, e, t),
      wm(
        "/api/v1.0/email/send",
        JSON.stringify({
          lib_version: "3.11.0",
          user_id: i,
          service_id: e,
          template_id: t,
          template_params: n,
        }),
        { "Content-type": "application/json" }
      )
    );
  },
  Ww = (e) => {
    let t;
    if (
      (typeof e == "string" ? (t = document.querySelector(e)) : (t = e),
      !t || t.nodeName !== "FORM")
    )
      throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
    return t;
  },
  Gw = (e, t, n, r) => {
    const i = r || ti._userID,
      o = Ww(n);
    xm(i, e, t);
    const s = new FormData(o);
    return (
      s.append("lib_version", "3.11.0"),
      s.append("service_id", e),
      s.append("template_id", t),
      s.append("user_id", i),
      wm("/api/v1.0/email/send-form", s)
    );
  },
  Kw = { init: $w, send: Hw, sendForm: Gw },
  Pn = {
    initial: { y: 500, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    },
  },
  Qw = () => {
    const e = M.useRef(),
      t = M.useRef(),
      [n, r] = M.useState(!1),
      [i, o] = M.useState(!1),
      s = vm(e, { margin: "-100px" }),
      l = (a) => {
        a.preventDefault(),
          Kw.sendForm(
            "service_i1gdzqj",
            "template_0k4n1xt",
            t.current,
            "GO13m9WBY8cCuUXMH"
          ).then(
            (u) => {
              o(!0);
            },
            (u) => {
              r(!0);
            }
          );
      };
    return w.jsxs(_.div, {
      ref: e,
      className: "contact",
      variants: Pn,
      initial: "initial",
      whileInView: "animate",
      children: [
        w.jsxs(_.div, {
          className: "textContainer",
          variants: Pn,
          children: [
            w.jsx(_.h1, { variants: Pn, children: "Vamos tabalhar juntos" }),
            w.jsxs(_.div, {
              className: "item",
              variants: Pn,
              children: [
                w.jsx("h2", { children: "Email" }),
                w.jsx("span", { children: "leonardobrancaglione@hotmail.com" }),
              ],
            }),
            w.jsxs(_.div, {
              className: "item",
              variants: Pn,
              children: [
                w.jsx("h2", { children: "Endereço" }),
                w.jsx("span", {
                  children: "Rua Quatorze de dezembro, Barra Bonita",
                }),
              ],
            }),
            w.jsxs(_.div, {
              className: "item",
              variants: Pn,
              children: [
                w.jsx("h2", { children: "Telefone" }),
                w.jsx("span", { children: "+55 14 991575793" }),
              ],
            }),
          ],
        }),
        w.jsxs("div", {
          className: "formContainer",
          children: [
            w.jsx(_.div, {
              className: "phoneSvg",
              initial: { opacity: 1 },
              whileInView: { opacity: 0 },
              transition: { delay: 3, duration: 1 },
              children: w.jsx("svg", {
                width: "450px",
                height: "450px",
                viewBox: "0 0 32.666 32.666",
                children: w.jsx(_.path, {
                  strokeWidth: 0.2,
                  fill: "none",
                  initial: { pathLength: 0 },
                  animate: s && { pathLength: 1 },
                  transition: { duration: 3 },
                  d: `M28.189,16.504h-1.666c0-5.437-4.422-9.858-9.856-9.858l-0.001-1.664C23.021,4.979,28.189,10.149,28.189,16.504z\r
            M16.666,7.856L16.665,9.52c3.853,0,6.983,3.133,6.981,6.983l1.666-0.001C25.312,11.735,21.436,7.856,16.666,7.856z M16.333,0\r
            C7.326,0,0,7.326,0,16.334c0,9.006,7.326,16.332,16.333,16.332c0.557,0,1.007-0.45,1.007-1.006c0-0.559-0.45-1.01-1.007-1.01\r
            c-7.896,0-14.318-6.424-14.318-14.316c0-7.896,6.422-14.319,14.318-14.319c7.896,0,14.317,6.424,14.317,14.319\r
            c0,3.299-1.756,6.568-4.269,7.954c-0.913,0.502-1.903,0.751-2.959,0.761c0.634-0.377,1.183-0.887,1.591-1.529\r
            c0.08-0.121,0.186-0.228,0.238-0.359c0.328-0.789,0.357-1.684,0.555-2.518c0.243-1.064-4.658-3.143-5.084-1.814\r
            c-0.154,0.492-0.39,2.048-0.699,2.458c-0.275,0.366-0.953,0.192-1.377-0.168c-1.117-0.952-2.364-2.351-3.458-3.457l0.002-0.001\r
            c-0.028-0.029-0.062-0.061-0.092-0.092c-0.031-0.029-0.062-0.062-0.093-0.092v0.002c-1.106-1.096-2.506-2.34-3.457-3.459\r
            c-0.36-0.424-0.534-1.102-0.168-1.377c0.41-0.311,1.966-0.543,2.458-0.699c1.326-0.424-0.75-5.328-1.816-5.084\r
            c-0.832,0.195-1.727,0.227-2.516,0.553c-0.134,0.057-0.238,0.16-0.359,0.24c-2.799,1.774-3.16,6.082-0.428,9.292\r
            c1.041,1.228,2.127,2.416,3.245,3.576l-0.006,0.004c0.031,0.031,0.063,0.06,0.095,0.09c0.03,0.031,0.059,0.062,0.088,0.095\r
            l0.006-0.006c1.16,1.118,2.535,2.765,4.769,4.255c4.703,3.141,8.312,2.264,10.438,1.098c3.67-2.021,5.312-6.338,5.312-9.719\r
            C32.666,7.326,25.339,0,16.333,0z`,
                }),
              }),
            }),
            w.jsxs(_.form, {
              ref: t,
              onSubmit: l,
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              transition: { delay: 4, duration: 1 },
              children: [
                w.jsx("input", {
                  type: "text",
                  required: !0,
                  placeholder: "Nome",
                  name: "from_name",
                }),
                w.jsx("input", {
                  type: "email",
                  required: !0,
                  placeholder: "Email",
                  name: "email",
                }),
                w.jsx("textarea", {
                  rows: 8,
                  placeholder: "Menssagem",
                  name: "message",
                }),
                w.jsx("button", { children: "Enviar" }),
                n && "Error",
                i && "Success",
              ],
            }),
          ],
        }),
      ],
    });
  };
const Yw = () => {
    const [e, t] = M.useState({ x: 0, y: 0 });
    return (
      M.useEffect(() => {
        const n = (r) => {
          t({ x: r.clientX, y: r.clientY });
        };
        return (
          window.addEventListener("mousemove", n),
          () => {
            window.removeEventListener("mousemove", n);
          }
        );
      }, []),
      w.jsx(_.div, {
        className: "cursor",
        animate: { x: e.x + 10, y: e.y + 10 },
      })
    );
  },
  Xw = () =>
    w.jsxs("div", {
      children: [
        w.jsx(Yw, {}),
        w.jsxs("section", {
          id: "Inicio",
          children: [w.jsx(_w, {}), w.jsx(Fw, {})],
        }),
        w.jsx("section", {
          id: "Sobre",
          children: w.jsx(_f, { type: "services" }),
        }),
        w.jsx("section", { children: w.jsx(zw, {}) }),
        w.jsx("section", {
          id: "Projetos",
          children: w.jsx(_f, { type: "portfolio" }),
        }),
        w.jsx(Uw, {}),
        w.jsx("section", { id: "Contato", children: w.jsx(Qw, {}) }),
      ],
    });
$s.createRoot(document.getElementById("root")).render(
  w.jsx(ea.StrictMode, { children: w.jsx(Xw, {}) })
);
