function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { useEffect, useMemo, useCallback, useState } from 'react';
export var BREAKPOINTS = {
  base: 0,
  small: 750,
  medium: 1000,
  large: 1200
};
export function createMediaQueries() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      addMaxWidth: true
    },
    addMaxWidth = _ref.addMaxWidth;
  return Object.entries(BREAKPOINTS).map(function (_ref2, index, breakpoints) {
    var _ref3 = _slicedToArray(_ref2, 2),
      breakpoint = _ref3[0],
      minWidth = _ref3[1];
    var nextBreakpoint = breakpoints[index + 1];
    var _ref4 = nextBreakpoint ? nextBreakpoint : [],
      _ref5 = _slicedToArray(_ref4, 2),
      maxWidth = _ref5[1];
    var query = maxWidth && addMaxWidth ? "(min-width: ".concat(minWidth, "px) and (max-width: ").concat(maxWidth - 1, "px)") : "(min-width: ".concat(minWidth, "px)");
    return {
      breakpoint: breakpoint,
      query: query
    };
  });
}
export function useBreakpoint() {
  var mediaQueries = useMemo(function () {
    return createMediaQueries();
  }, []);
  var getBreakpoint = useCallback(function () {
    var media = mediaQueries.find(function (_ref6) {
      var query = _ref6.query;
      return window.matchMedia(query).matches;
    });
    return media ? media.breakpoint : undefined;
  }, [mediaQueries]);
  var _useState = useState(getBreakpoint()),
    _useState2 = _slicedToArray(_useState, 2),
    breakpoint = _useState2[0],
    setBreakpoint = _useState2[1];
  useEffect(function () {
    var onResize = function onResize() {
      var newBreakpoint = getBreakpoint();
      if (breakpoint !== newBreakpoint) {
        setBreakpoint(newBreakpoint);
      }
    };
    onResize();
    window.addEventListener('resize', onResize);
    return function () {
      return window.removeEventListener('resize', onResize);
    };
  }, [breakpoint, getBreakpoint, mediaQueries]);
  return breakpoint;
}