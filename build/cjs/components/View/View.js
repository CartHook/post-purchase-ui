function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["blockPadding", "inlinePadding", "padding", "children", "media"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
import React from 'react';
import { classNames } from '@shopify/css-utilities';
import { useResponsive } from '../../utilities/responsive';
import styles from './View.css';
/**
 * A View is a generic container component. Its contents will always be their
 * “natural” size, so this component can be useful in layout components (like `Layout`, `Tiles`,
 * `BlockStack`, `InlineStack`) that would otherwise stretch their children to fit.
 */
export function View(_ref) {
  var blockPadding = _ref.blockPadding,
    inlinePadding = _ref.inlinePadding,
    padding = _ref.padding,
    children = _ref.children,
    media = _ref.media,
    props = _objectWithoutProperties(_ref, _excluded);
  // Support Argo blockPadding & inlinePadding props
  var useArgoPadding = !padding && (blockPadding || inlinePadding);
  var responsiveClassNames = useResponsive(_objectSpread(_objectSpread({}, props), {}, {
    padding: useArgoPadding ? convertPadding(blockPadding, inlinePadding) : padding
  }), media);
  return <div className={classNames(styles.View, responsiveClassNames && responsiveClassNames.map(function (className) {
    return styles[className];
  }))}>
      {children}
    </div>;
}

// TODO: remove when no longer supported in favor of padding
export function convertPadding(blockPadding, inlinePadding) {
  var padding = function padding(_padding) {
    switch (_padding) {
      case 'base':
        return 'base';
      case 'tight':
        return 'tight1x';
      case 'extraTight':
        return 'tight4x';
      case 'loose':
        return 'loose1x';
      case 'extraLoose':
        return 'loose4x';
      default:
        return 'none';
    }
  };
  return [padding(blockPadding), padding(inlinePadding)];
}