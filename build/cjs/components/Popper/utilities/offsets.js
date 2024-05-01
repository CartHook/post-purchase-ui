function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var SPACING = 10;

// Round the offsets to the nearest suitable subpixel
// based on the device pixel ratio.
export function roundOffsets(_ref) {
  var x = _ref.x,
    y = _ref.y;
  var dpr = window.devicePixelRatio || 1;
  return {
    x: Math.round(x * dpr) / dpr || 0,
    y: Math.round(y * dpr) / dpr || 0
  };
}
export function computeOffsets(placement, popperRect, referenceRect) {
  var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
    _ref2$offset = _ref2.offset,
    offset = _ref2$offset === void 0 ? 0 : _ref2$offset,
    _ref2$preventOverflow = _ref2.preventOverflow,
    preventOverflow = _ref2$preventOverflow === void 0 ? false : _ref2$preventOverflow,
    _ref2$sameInlineSize = _ref2.sameInlineSize,
    sameInlineSize = _ref2$sameInlineSize === void 0 ? false : _ref2$sameInlineSize;
  var offsets = {
    x: 0,
    y: 0
  };
  var clipping = {
    left: 0,
    right: 0
  };
  var spacing = 0;
  if (!popperRect || !referenceRect) {
    return {
      offsets: offsets,
      clipping: clipping,
      spacing: spacing
    };
  }
  var commonX = sameInlineSize ? referenceRect.left : referenceRect.left + referenceRect.width / 2 - popperRect.width / 2;
  var commonY = referenceRect.top + referenceRect.height / 2 - popperRect.height / 2;
  switch (placement) {
    case 'blockStart':
      offsets = {
        x: commonX,
        y: referenceRect.top - popperRect.height - offset
      };
      break;
    case 'blockEnd':
      offsets = {
        x: commonX,
        y: referenceRect.bottom + offset
      };
      break;
    case 'inlineStart':
      offsets = {
        x: referenceRect.left - popperRect.width - offset,
        y: commonY
      };
      break;
    case 'inlineEnd':
      offsets = {
        x: referenceRect.right + offset,
        y: commonY
      };
      break;
  }
  if (preventOverflow) {
    clipping = getClipping(offsets, popperRect);
    if (clipping.right && !clipping.left) {
      offsets.x += clipping.right;
      spacing = -SPACING;
    }
    if (!clipping.right && clipping.left) {
      offsets.x = 0;
      spacing = SPACING;
    }
  }
  return {
    offsets: offsets,
    clipping: clipping,
    spacing: spacing
  };
}
function getClipping(offsets, popperRect) {
  var viewportWidth = document.documentElement.clientWidth;
  var elementWidth = offsets.x + popperRect.width;
  var clipping = {
    left: 0,
    right: 0
  };
  if (elementWidth > viewportWidth) {
    clipping = _objectSpread(_objectSpread({}, clipping), {}, {
      right: viewportWidth - elementWidth
    });
  }
  if (offsets.x < 0) {
    clipping = _objectSpread(_objectSpread({}, clipping), {}, {
      left: -offsets.x
    });
  }
  return clipping;
}