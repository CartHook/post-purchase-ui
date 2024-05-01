function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["viewportSize"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { variationName } from '@shopify/css-utilities';
var classNamesMap = {
  padding: ['paddingInlineStart', 'paddingInlineEnd', 'paddingBlockStart', 'paddingBlockEnd'],
  paddingInline: ['paddingInlineStart', 'paddingInlineEnd'],
  paddingInlineStart: 'paddingInlineStart',
  paddingInlineEnd: 'paddingInlineEnd',
  paddingBlock: ['paddingBlockStart', 'paddingBlockEnd'],
  paddingBlockStart: 'paddingBlockStart',
  paddingBlockEnd: 'paddingBlockEnd',
  background: 'background',
  border: ['borderInlineStart', 'borderInlineEnd', 'borderBlockStart', 'borderBlockEnd'],
  borderInline: ['borderInlineStart', 'borderInlineEnd'],
  borderInlineStart: 'borderInlineStart',
  borderInlineEnd: 'borderInlineEnd',
  borderBlock: ['borderBlockStart', 'borderBlockEnd'],
  borderBlockStart: 'borderBlockStart',
  borderBlockEnd: 'borderBlockEnd',
  borderWidth: ['borderWidthInlineStart', 'borderWidthInlineEnd', 'borderWidthBlockStart', 'borderWidthBlockEnd'],
  borderWidthInline: ['borderWidthInlineStart', 'borderWidthInlineEnd'],
  borderWidthInlineStart: 'borderWidthInlineStart',
  borderWidthInlineEnd: 'borderWidthInlineEnd',
  borderWidthBlock: ['borderWidthBlockStart', 'borderWidthBlockEnd'],
  borderWidthBlockStart: 'borderWidthBlockStart',
  borderWidthBlockEnd: 'borderWidthBlockEnd',
  borderColor: ['borderColorInlineStart', 'borderColorInlineEnd', 'borderColorBlockStart', 'borderColorBlockEnd'],
  borderRadius: ['borderRadiusInlineStart', 'borderRadiusInlineEnd', 'borderRadiusBlockStart', 'borderRadiusBlockEnd'],
  borderRadiusInline: ['borderRadiusInlineStart', 'borderRadiusInlineEnd'],
  borderRadiusInlineStart: 'borderRadiusInlineStart',
  borderRadiusInlineEnd: 'borderRadiusInlineEnd',
  borderRadiusBlock: ['borderRadiusBlockStart', 'borderRadiusBlockEnd'],
  borderRadiusBlockStart: 'borderRadiusBlockStart',
  borderRadiusBlockEnd: 'borderRadiusBlockEnd',
  spacing: 'spacing'
};
export function generateResponsiveClassnames(props, viewportSize) {
  return Object.entries(props).filter(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      prop = _ref2[0],
      value = _ref2[1];
    return classNamesMap[prop] && value;
  }).reduce(function (classNames, _ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
      prop = _ref4[0],
      value = _ref4[1];
    var property = classNamesMap[prop];
    if (Array.isArray(property)) {
      return [].concat(_toConsumableArray(classNames), _toConsumableArray(property.map(function (property) {
        return viewportSize ? variationName(variationName(viewportSize, property), value) : variationName(property, value);
      })));
    }
    return [].concat(_toConsumableArray(classNames), [viewportSize ? variationName(variationName(viewportSize, property), value) : variationName(property, value)]);
  }, []);
}
export function convertLogicalProps(props) {
  return Object.assign.apply(Object, [{}].concat(_toConsumableArray(Object.entries(props).map(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
      prop = _ref6[0],
      value = _ref6[1];
    if (Array.isArray(value)) {
      if (value.length === 2) {
        var _value = _slicedToArray(value, 2),
          block = _value[0],
          inline = _value[1];
        return _defineProperty(_defineProperty({}, "".concat(prop, "Block"), block), "".concat(prop, "Inline"), inline);
      } else if (value.length === 4) {
        var _value2 = _slicedToArray(value, 4),
          blockStart = _value2[0],
          inlineEnd = _value2[1],
          blockEnd = _value2[2],
          inlineStart = _value2[3];
        return _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prop, "BlockStart"), blockStart), "".concat(prop, "InlineEnd"), inlineEnd), "".concat(prop, "BlockEnd"), blockEnd), "".concat(prop, "InlineStart"), inlineStart);
      }
    }
    return _defineProperty({}, prop, value);
  }))));
}
export function useResponsive(props, media) {
  return [].concat(_toConsumableArray(generateResponsiveClassnames(convertLogicalProps(props))), _toConsumableArray(media ? media.map(function (_ref10) {
    var viewportSize = _ref10.viewportSize,
      props = _objectWithoutProperties(_ref10, _excluded);
    return generateResponsiveClassnames(convertLogicalProps(props), viewportSize);
  }).reduce(function (classNames, className) {
    return classNames.concat(className);
  }, []) : []));
}