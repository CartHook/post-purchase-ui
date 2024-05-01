function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _wrapRegExp() { _wrapRegExp = function _wrapRegExp(e, r) { return new BabelRegExp(e, void 0, r); }; var e = RegExp.prototype, r = new WeakMap(); function BabelRegExp(e, t, p) { var o = RegExp(e, t); return r.set(o, p || r.get(e)), _setPrototypeOf(o, BabelRegExp.prototype); } function buildGroups(e, t) { var p = r.get(t); return Object.keys(p).reduce(function (r, t) { var o = p[t]; if ("number" == typeof o) r[t] = e[o];else { for (var i = 0; void 0 === e[o[i]] && i + 1 < o.length;) i++; r[t] = e[o[i]]; } return r; }, Object.create(null)); } return _inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function (r) { var t = e.exec.call(this, r); if (t) { t.groups = buildGroups(t, this); var p = t.indices; p && (p.groups = buildGroups(p, this)); } return t; }, BabelRegExp.prototype[Symbol.replace] = function (t, p) { if ("string" == typeof p) { var o = r.get(this); return e[Symbol.replace].call(this, t, p.replace(/\$<([^>]+)>/g, function (e, r) { var t = o[r]; return "$" + (Array.isArray(t) ? t.join("$") : t); })); } if ("function" == typeof p) { var i = this; return e[Symbol.replace].call(this, t, function () { var e = arguments; return "object" != _typeof(e[e.length - 1]) && (e = [].slice.call(e)).push(buildGroups(e, i)), p.apply(this, e); }); } return e[Symbol.replace].call(this, t, p); }, _wrapRegExp.apply(this, arguments); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* eslint id-length: off */

// A minimal re-implementation of https://classic.yarnpkg.com/en/package/hsluv with
// minimal bloat and some helpful types

var REF_Y = 1.0;
var REF_U = 0.19783000664283;
var REF_V = 0.46831999493879;
var MATRIX = [[3.240969941904521, -1.537383177570093, -0.498610760293], [-0.96924363628087, 1.87596750150772, 0.041555057407175], [0.055630079696993, -0.20397695888897, 1.056971514242878]];
var KAPPA = 903.2962962;
var EPSILON = 0.0088564516;
export var Hsl = /*#__PURE__*/function () {
  function Hsl(h, s, l) {
    _classCallCheck(this, Hsl);
    this.h = h;
    this.s = s;
    this.l = l;
  }
  return _createClass(Hsl, [{
    key: "adjust",
    value: function adjust(_ref) {
      var _h, _s, _l;
      var h = _ref.h,
        s = _ref.s,
        l = _ref.l;
      return new Hsl((_h = h === null || h === void 0 ? void 0 : h(this.h)) !== null && _h !== void 0 ? _h : this.h, (_s = s === null || s === void 0 ? void 0 : s(this.s)) !== null && _s !== void 0 ? _s : this.s, (_l = l === null || l === void 0 ? void 0 : l(this.l)) !== null && _l !== void 0 ? _l : this.l);
    }
  }, {
    key: "toRgb",
    value: function toRgb() {
      return _toRgb(this);
    }
  }, {
    key: "getYiqPerceivedBrightness",
    value: function getYiqPerceivedBrightness() {
      return _getYiqPerceivedBrightness(this);
    }
  }]);
}();
var HSL_REGEX = /*#__PURE__*/_wrapRegExp(/hsl\(\s*(\d+),\s*(\d+)%,\s(\d+)%\)/, {
  h: 1,
  s: 2,
  l: 3
});
export function parseHsl(color) {
  var match = color.match(HSL_REGEX);
  if (match == null) throw new Error("Invalid HSL value: ".concat(color));
  var _ref2 = match.groups,
    h = _ref2.h,
    s = _ref2.s,
    l = _ref2.l;
  var parsedHue = h ? parseInt(h, 10) : NaN;
  var parsedSaturation = s ? parseInt(s, 10) : NaN;
  var parsedLightness = l ? parseInt(l, 10) : NaN;
  if (Number.isNaN(parsedHue) || Number.isNaN(parsedSaturation) || Number.isNaN(parsedLightness)) {
    throw new Error("Invalid HSL value: ".concat(color));
  }
  return new Hsl(parsedHue, parsedSaturation, parsedLightness);
}
function _toRgb(_ref3) {
  var h = _ref3.h,
    s = _ref3.s,
    l = _ref3.l;
  return "rgb(".concat(lchToRgb.apply(void 0, _toConsumableArray(hsluvToLch(h, s, l))).join(','), ")");
}
export { _toRgb as toRgb };
function _getYiqPerceivedBrightness(_ref4) {
  var h = _ref4.h,
    s = _ref4.s,
    l = _ref4.l;
  var _hsluvToYiq = hsluvToYiq(h, s, l),
    _hsluvToYiq2 = _slicedToArray(_hsluvToYiq, 1),
    y = _hsluvToYiq2[0];
  return y;
}

/*
YIQ is the suggested color mode to determine sufficient contrast
between background and foreground colors. This is what is used
in Checkout Core (or C0).
- Core code: https://github.com/Shopify/shopify/blob/master/app/assets/stylesheets/checkout/helpers/_colors.scss#L88-L97
- W3 suggestion: https://www.w3.org/TR/AERT/#color-contrast
- RGB to YIQ: https://en.wikipedia.org/wiki/YIQ#From_RGB_to_YIQ
*/
export { _getYiqPerceivedBrightness as getYiqPerceivedBrightness };
function hsluvToYiq(h, s, l) {
  var _lchToRgb = lchToRgb.apply(void 0, _toConsumableArray(hsluvToLch(h, s, l))),
    _lchToRgb2 = _slicedToArray(_lchToRgb, 3),
    r = _lchToRgb2[0],
    g = _lchToRgb2[1],
    b = _lchToRgb2[2];
  return [(r * 0.299 + g * 0.587 + b * 0.114) / 255, (r * 0.596 - g * 0.275 - b * 0.321) / 255, (r * 0.212 - g * 0.523 + b * 0.311) / 255];
}
function lchToRgb(l, c, h) {
  return xyzToRgb.apply(void 0, _toConsumableArray(luvToXyz.apply(void 0, _toConsumableArray(lchToLuv(l, c, h)))));
}
function xyzToRgb() {
  for (var _len = arguments.length, xyz = new Array(_len), _key = 0; _key < _len; _key++) {
    xyz[_key] = arguments[_key];
  }
  return [toRgbChannel(fromLinear(dotProduct(MATRIX[0], xyz))), toRgbChannel(fromLinear(dotProduct(MATRIX[1], xyz))), toRgbChannel(fromLinear(dotProduct(MATRIX[2], xyz)))];
}
function toRgbChannel(percentage) {
  return Math.round(percentage * 255);
}
function dotProduct(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
function fromLinear(c) {
  if (c <= 0.0031308) {
    return 12.92 * c;
  } else {
    return 1.055 * Math.pow(c, 0.416666666666666685) - 0.055;
  }
}
function lchToLuv(l, c, h) {
  var hrad = h / 360.0 * 2 * Math.PI;
  return [l, Math.cos(hrad) * c, Math.sin(hrad) * c];
}
function luvToXyz(l, u, v) {
  if (l === 0) {
    return [0, 0, 0];
  }
  var varU = u / (13 * l) + REF_U;
  var varV = v / (13 * l) + REF_V;
  var y = lToY(l);
  var x = 0 - 9 * y * varU / ((varU - 4) * varV - varU * varV);
  return [x, y, (9 * y - 15 * varV * y - varV * x) / (3 * varV)];
}
function lToY(l) {
  if (l <= 8) {
    return REF_Y * l / KAPPA;
  } else {
    return REF_Y * Math.pow((l + 16) / 116, 3);
  }
}
function hsluvToLch(h, s, l) {
  if (l > 99.9999999) {
    return [100, 0, h];
  }
  if (l < 0.00000001) {
    return [0, 0, h];
  }
  var max = maxChromaForLH(l, h);
  var c = max / 100 * s;
  return [l, c, h];
}
function maxChromaForLH(l, h) {
  var hrad = h / 360 * Math.PI * 2;
  var bounds = getBounds(l);
  return Math.min.apply(Math, _toConsumableArray(bounds.map(function (bound) {
    return lengthOfRayUntilIntersect(hrad, bound);
  }).filter(function (length) {
    return length > 0;
  })));
}
function lengthOfRayUntilIntersect(theta, line) {
  return line.intercept / (Math.sin(theta) - line.slope * Math.cos(theta));
}
function getBounds(l) {
  var bounds = [];
  var sub1 = Math.pow(l + 16, 3) / 1560896;
  var sub2 = sub1 > EPSILON ? sub1 : l / KAPPA;
  for (var _i = 0, _MATRIX = MATRIX; _i < _MATRIX.length; _i++) {
    var _MATRIX$_i = _slicedToArray(_MATRIX[_i], 3),
      m1 = _MATRIX$_i[0],
      m2 = _MATRIX$_i[1],
      m3 = _MATRIX$_i[2];
    for (var _i2 = 0, _arr = [0, 1]; _i2 < _arr.length; _i2++) {
      var t = _arr[_i2];
      var top1 = (284517 * m1 - 94839 * m3) * sub2;
      var top2 = (838422 * m3 + 769860 * m2 + 731718 * m1) * l * sub2 - 769860 * t * l;
      var bottom = (632260 * m3 - 126452 * m2) * sub2 + 126452 * t;
      bounds.push({
        slope: top1 / bottom,
        intercept: top2 / bottom
      });
    }
  }
  return bounds;
}