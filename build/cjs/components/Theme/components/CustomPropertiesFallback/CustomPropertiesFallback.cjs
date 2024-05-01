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
import React, { memo, useMemo, useState, useEffect } from 'react';
import { useTheme } from '../../hooks';
import * as legacyStyles from '../../../../utilities/legacy';
export var CustomPropertiesFallback = memo(function CustomPropertiesFallback() {
  var theme = useTheme();
  var _useState = useState(theme.customProperties),
    _useState2 = _slicedToArray(_useState, 2),
    customProperties = _useState2[0],
    setCustomProperties = _useState2[1];
  useEffect(function () {
    return theme.on('preview', function (customProperties) {
      setCustomProperties(function (existing) {
        return _objectSpread(_objectSpread({}, existing), customProperties);
      });
    });
  }, [theme]);
  var css = useMemo(function () {
    return toCss(customProperties);
  }, [customProperties]);
  return <style dangerouslySetInnerHTML={{
    __html: css
  }} />;
});
function toCss(customProperties) {
  var _cssFromObject;
  return cssFromObject((_cssFromObject = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_cssFromObject, ".".concat(legacyStyles.button), {
    color: customProperties.colorPrimaryActionText,
    background: customProperties.colorPrimaryAction
  }), ".".concat(legacyStyles.button, ":hover"), {
    background: customProperties.colorPrimaryActionHovered
  }), ".".concat(legacyStyles.button, ":active"), {
    background: customProperties.colorPrimaryActionPressed
  }), ".".concat(legacyStyles.colorCanvas), {
    color: customProperties.colorCanvasText,
    'border-color': customProperties.colorCanvasBorder,
    'background-color': customProperties.colorCanvas
  }), ".".concat(legacyStyles.colorCanvas, " .").concat(legacyStyles.utilityDefaultBorderColor), {
    'border-color': customProperties.colorCanvasBorder
  }), ".".concat(legacyStyles.colorCanvas, " .").concat(legacyStyles.utilityDefaultTextColorSubdued), {
    color: customProperties.colorCanvasTextSubdued
  }), ".".concat(legacyStyles.colorCanvas, " .").concat(legacyStyles.utilityDefaultTextColorEmphasized), {
    color: customProperties.colorCanvasTextEmphasized
  }), ".".concat(legacyStyles.colorSurfacePrimary), {
    color: customProperties.colorSurfacePrimaryText,
    'border-color': customProperties.colorSurfacePrimaryBorder,
    'background-color': customProperties.colorSurfacePrimary
  }), ".".concat(legacyStyles.colorSurfacePrimary, " .").concat(legacyStyles.utilityDefaultBorderColor), {
    'border-color': customProperties.colorSurfacePrimaryBorder
  }), ".".concat(legacyStyles.colorSurfacePrimary, " .").concat(legacyStyles.utilityDefaultTextColorSubdued), {
    color: customProperties.colorSurfacePrimaryTextSubdued
  }), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_cssFromObject, ".".concat(legacyStyles.colorSurfacePrimary, " .").concat(legacyStyles.utilityDefaultTextColorEmphasized), {
    color: customProperties.colorSurfacePrimaryTextEmphasized
  }), ".".concat(legacyStyles.colorSurfacePrimary, " .").concat(legacyStyles.utilityDefaultColorAccent), {
    color: customProperties.colorSurfacePrimaryAccent
  }), ".".concat(legacyStyles.colorSurfaceSecondary), {
    color: customProperties.colorSurfaceSecondaryText,
    'border-color': customProperties.colorSurfaceSecondaryBorder,
    'background-color': customProperties.colorSurfaceSecondary
  }), ".".concat(legacyStyles.colorSurfaceSecondary, " .").concat(legacyStyles.utilityDefaultBorderColor), {
    'border-color': customProperties.colorSurfaceSecondaryBorder
  }), ".".concat(legacyStyles.colorSurfaceSecondary, " .").concat(legacyStyles.utilityDefaultTextColorSubdued), {
    color: customProperties.colorSurfaceSecondaryTextSubdued
  }), ".".concat(legacyStyles.colorSurfaceSecondary, " .").concat(legacyStyles.utilityDefaultTextColorEmphasized), {
    color: customProperties.colorSurfaceSecondaryTextEmphasized
  }), ".".concat(legacyStyles.colorSurfaceSecondary, " .").concat(legacyStyles.utilityDefaultColorAccent), {
    color: customProperties.colorSurfaceSecondaryAccent
  }), ".".concat(legacyStyles.colorSurfaceTertiary), {
    color: customProperties.colorSurfaceTertiaryText,
    'border-color': customProperties.colorSurfaceTertiaryBorder,
    'background-color': customProperties.colorSurfaceTertiary
  }), ".".concat(legacyStyles.colorSurfaceTertiary, " .").concat(legacyStyles.utilityDefaultBorderColor), {
    'border-color': customProperties.colorSurfaceTertiaryBorder
  }), ".".concat(legacyStyles.colorSurfaceTertiary, " .").concat(legacyStyles.utilityDefaultTextColorSubdued), {
    color: customProperties.colorSurfaceTertiaryTextSubdued
  }), _defineProperty(_defineProperty(_cssFromObject, ".".concat(legacyStyles.colorSurfaceTertiary, " .").concat(legacyStyles.utilityDefaultTextColorEmphasized), {
    color: customProperties.colorSurfaceTertiaryTextEmphasized
  }), ".".concat(legacyStyles.colorSurfaceTertiary, " .").concat(legacyStyles.utilityDefaultColorAccent), {
    color: customProperties.colorSurfaceTertiaryAccent
  })));
}
function cssFromObject(cssObject) {
  var selectors = [];
  for (var _i = 0, _Object$keys = Object.keys(cssObject); _i < _Object$keys.length; _i++) {
    var selector = _Object$keys[_i];
    var propertyValues = [];
    for (var _i2 = 0, _Object$keys2 = Object.keys(cssObject[selector]); _i2 < _Object$keys2.length; _i2++) {
      var property = _Object$keys2[_i2];
      var value = cssObject[selector][property];
      if (value) propertyValues.push("".concat(property, ": ").concat(value, " !important;"));
    }
    if (propertyValues.length > 0) selectors.push("".concat(selector, " {\n  ").concat(propertyValues.join('\n  '), "\n}"));
  }
  return selectors.join('\n');
}