function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { useState, useCallback, useLayoutEffect, useContext } from 'react';
import { PopperContext } from './context';
export function usePopper() {
  var context = useContext(PopperContext);
  if (context === null) {
    throw new Error('No Popper in context');
  }
  return context;
}
export function useRect() {
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    rect = _useState2[0],
    setRect = _useState2[1];
  var ref = useCallback(function (node) {
    if (node !== null) {
      setRect(node.getBoundingClientRect());
    }
  }, []);
  return [rect, ref];
}
export function useEffectRect(ref) {
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    rect = _useState4[0],
    setRect = _useState4[1];
  var setBoundingRect = useCallback(function () {
    if (ref !== null) {
      setRect(ref.getBoundingClientRect());
    }
  }, [ref]);
  useLayoutEffect(function () {
    setBoundingRect();
    window.addEventListener('resize', setBoundingRect);
    window.addEventListener('scroll', setBoundingRect);
    return function () {
      window.removeEventListener('resize', setBoundingRect);
      window.removeEventListener('scroll', setBoundingRect);
    };
  }, [setBoundingRect]);
  return rect;
}