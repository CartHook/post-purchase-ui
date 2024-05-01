function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { BREAKPOINTS, useBreakpoint } from './breakpoint';
export function useResponsiveValue(values) {
  var breakpoint = useBreakpoint();
  return getResponsiveValue(values, breakpoint);
}
/**
 * Returns a style object matching the passed one, where each property value
 * is the one that applies to the current viewport size.
 *
 * @param options
 */
export function useResponsiveStyle(options) {
  var currentBreakpoint = useBreakpoint();
  return Object.entries(options).reduce(function (styleObject, _ref) {
    var _getResponsiveValue;
    var _ref2 = _slicedToArray(_ref, 2),
      cssProperty = _ref2[0],
      _ref2$ = _ref2[1],
      value = _ref2$.value,
      transform = _ref2$.transform;
    return _objectSpread(_objectSpread({}, styleObject), {}, _defineProperty({}, cssProperty, (_getResponsiveValue = getResponsiveValue(maybeResponsiveToArray(value).reduce(function (values, _ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
        breakpoint = _ref4[0],
        breakpointValue = _ref4[1];
      if (breakpointValue) {
        return _objectSpread(_objectSpread({}, values), {}, _defineProperty({}, breakpoint, transform ? transform(breakpointValue) : breakpointValue));
      }
      return values;
    }, {}), currentBreakpoint)) !== null && _getResponsiveValue !== void 0 ? _getResponsiveValue : {}));
  }, {});
}
export function maybeResponsiveToArray(maybeResponsive) {
  if (isResponsiveValue(maybeResponsive)) {
    return Object.entries(maybeResponsive);
  }
  return [['base', maybeResponsive]];
}
export function isResponsiveValue(obj) {
  if (_typeof(obj) !== 'object' || !obj) {
    return false;
  }
  var hasBreakpoint = false;
  for (var _i = 0, _Object$keys = Object.keys(obj); _i < _Object$keys.length; _i++) {
    var prop = _Object$keys[_i];
    if (prop in BREAKPOINTS) {
      hasBreakpoint = true;
    } else {
      return false;
    }
  }
  return hasBreakpoint;
}
function getResponsiveValue(values, breakpoint) {
  if (!breakpoint) {
    return undefined;
  }
  if (values[breakpoint] !== undefined) {
    return values[breakpoint];
  }
  var breakpoints = Object.keys(BREAKPOINTS);
  var breakpointIndex = breakpoints.indexOf(breakpoint);
  for (var i = breakpointIndex; i >= 0; i--) {
    var _breakpoint = breakpoints[i];
    if (values[_breakpoint] !== undefined) {
      return values[_breakpoint];
    }
  }
}