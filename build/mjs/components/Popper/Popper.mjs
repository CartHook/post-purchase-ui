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
import React, { useMemo } from 'react';
import { Portal } from '../Portal';
import { rem } from '../../utilities/units';
import { useEffectRect, useRect } from './hooks';
import { PopperContext } from './context';
import { computeOffsets, roundOffsets } from './utilities/offsets';
import styles from './Popper.css';
export function Popper(_ref) {
  var children = _ref.children,
    offset = _ref.offset,
    _ref$placement = _ref.placement,
    placement = _ref$placement === void 0 ? 'blockStart' : _ref$placement,
    preventOverflow = _ref.preventOverflow,
    activator = _ref.activator,
    sameInlineSize = _ref.sameInlineSize,
    minInlineSize = _ref.minInlineSize;
  var referenceRect = useEffectRect(activator);
  var _useRect = useRect(),
    _useRect2 = _slicedToArray(_useRect, 2),
    popperRect = _useRect2[0],
    popperRef = _useRect2[1];
  var _useMemo = useMemo(function () {
      return computeOffsets(placement, popperRect, referenceRect, {
        offset: offset,
        preventOverflow: preventOverflow,
        sameInlineSize: sameInlineSize
      });
    }, [offset, placement, popperRect, preventOverflow, referenceRect, sameInlineSize]),
    clipping = _useMemo.clipping,
    offsets = _useMemo.offsets,
    spacing = _useMemo.spacing;
  var contextValue = useMemo(function () {
    return {
      clipping: clipping,
      offsets: offsets,
      placement: placement,
      popperRect: popperRect,
      referenceRect: referenceRect,
      spacing: spacing
    };
  }, [clipping, offsets, placement, popperRect, referenceRect, spacing]);
  var _roundOffsets = roundOffsets({
      x: offsets.x + spacing + (window.scrollX || window.pageXOffset),
      y: offsets.y + (window.scrollY || window.pageYOffset)
    }),
    x = _roundOffsets.x,
    y = _roundOffsets.y;
  var transform = (window.devicePixelRatio || 1) < 2 ? "translate(".concat(x, "px, ").concat(y, "px)") : "translate3d(".concat(x, "px, ").concat(y, "px, 0)");
  return <PopperContext.Provider value={contextValue}>
      <Portal>
        <div className={styles.Popper} style={_objectSpread({}, referenceRect && _objectSpread(_objectSpread({
        transform: transform,
        MozTransform: transform,
        webkitTransform: transform
      }, sameInlineSize && {
        width: referenceRect.width
      }), minInlineSize && {
        minWidth: rem(minInlineSize)
      }))} ref={popperRef}>
          {children}
        </div>
      </Portal>
    </PopperContext.Provider>;
}