function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* eslint id-length: off */

import { createContext } from 'react';
import { parseHsl, toRgb, Hsl } from '../../utilities/hsluv';
import { modularScale } from './utilities/modularScale';
export var ThemeContext = createContext(undefined);
export function createTheme() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$global = _ref.global,
    global = _ref$global === void 0 ? {} : _ref$global,
    _ref$buyerJourney = _ref.buyerJourney,
    buyerJourney = _ref$buyerJourney === void 0 ? {} : _ref$buyerJourney,
    _ref$typographyScale = _ref.typographyScale,
    typographyScale = _ref$typographyScale === void 0 ? {} : _ref$typographyScale,
    _ref$typographyPrimar = _ref.typographyPrimary,
    typographyPrimary = _ref$typographyPrimar === void 0 ? {} : _ref$typographyPrimar,
    _ref$typographySecond = _ref.typographySecondary,
    typographySecondary = _ref$typographySecond === void 0 ? {} : _ref$typographySecond,
    _ref$headingLevel = _ref.headingLevel1,
    headingLevel1 = _ref$headingLevel === void 0 ? {} : _ref$headingLevel,
    _ref$headingLevel2 = _ref.headingLevel2,
    headingLevel2 = _ref$headingLevel2 === void 0 ? {} : _ref$headingLevel2,
    _ref$headingLevel3 = _ref.headingLevel3,
    headingLevel3 = _ref$headingLevel3 === void 0 ? {} : _ref$headingLevel3,
    _ref$link = _ref.link,
    link = _ref$link === void 0 ? {} : _ref$link,
    _ref$controls = _ref.controls,
    controls = _ref$controls === void 0 ? {} : _ref$controls,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? {} : _ref$label,
    _ref$textFields = _ref.textFields,
    textFields = _ref$textFields === void 0 ? {} : _ref$textFields,
    _ref$select = _ref.select,
    select = _ref$select === void 0 ? {} : _ref$select,
    _ref$checkbox = _ref.checkbox,
    checkbox = _ref$checkbox === void 0 ? {} : _ref$checkbox,
    _ref$radio = _ref.radio,
    radio = _ref$radio === void 0 ? {} : _ref$radio,
    _ref$optionList = _ref.optionList,
    optionList = _ref$optionList === void 0 ? {} : _ref$optionList,
    _ref$reviewBlock = _ref.reviewBlock,
    reviewBlock = _ref$reviewBlock === void 0 ? {} : _ref$reviewBlock,
    _ref$lineItems = _ref.lineItems,
    lineItems = _ref$lineItems === void 0 ? {} : _ref$lineItems,
    _ref$moneyLines = _ref.moneyLines,
    moneyLines = _ref$moneyLines === void 0 ? {} : _ref$moneyLines,
    _ref$moneySummary = _ref.moneySummary,
    moneySummary = _ref$moneySummary === void 0 ? {} : _ref$moneySummary,
    _ref$primaryButton = _ref.primaryButton,
    primaryButton = _ref$primaryButton === void 0 ? {} : _ref$primaryButton,
    _ref$secondaryButton = _ref.secondaryButton,
    secondaryButton = _ref$secondaryButton === void 0 ? {} : _ref$secondaryButton,
    _ref$formLayout = _ref.formLayout,
    formLayout = _ref$formLayout === void 0 ? {} : _ref$formLayout,
    _ref$tag = _ref.tag,
    tag = _ref$tag === void 0 ? {} : _ref$tag,
    _ref$tooltip = _ref.tooltip,
    tooltip = _ref$tooltip === void 0 ? {} : _ref$tooltip,
    _ref$popover = _ref.popover,
    popover = _ref$popover === void 0 ? {} : _ref$popover,
    _ref$banner = _ref.banner,
    banner = _ref$banner === void 0 ? {} : _ref$banner,
    _ref$thumbnail = _ref.thumbnail,
    thumbnail = _ref$thumbnail === void 0 ? {} : _ref$thumbnail,
    _ref$typographyStyle = _ref.typographyStyle1,
    typographyStyle1 = _ref$typographyStyle === void 0 ? {} : _ref$typographyStyle,
    _ref$typographyStyle2 = _ref.typographyStyle2,
    typographyStyle2 = _ref$typographyStyle2 === void 0 ? {} : _ref$typographyStyle2,
    _ref$typographyStyle3 = _ref.typographyStyle3,
    typographyStyle3 = _ref$typographyStyle3 === void 0 ? {} : _ref$typographyStyle3,
    _ref$typographyStyle4 = _ref.typographyStyle4,
    typographyStyle4 = _ref$typographyStyle4 === void 0 ? {} : _ref$typographyStyle4,
    _ref$typographyStyle5 = _ref.typographyStyle5,
    typographyStyle5 = _ref$typographyStyle5 === void 0 ? {} : _ref$typographyStyle5,
    _ref$typographyStyle6 = _ref.typographyStyle6,
    typographyStyle6 = _ref$typographyStyle6 === void 0 ? {} : _ref$typographyStyle6,
    _ref$typographyStyle7 = _ref.typographyStyle7,
    typographyStyle7 = _ref$typographyStyle7 === void 0 ? {} : _ref$typographyStyle7,
    _ref$typographyStyle8 = _ref.typographyStyle8,
    typographyStyle8 = _ref$typographyStyle8 === void 0 ? {} : _ref$typographyStyle8,
    _ref$typographyStyle9 = _ref.typographyStyle9,
    typographyStyle9 = _ref$typographyStyle9 === void 0 ? {} : _ref$typographyStyle9,
    colors = _ref.colors;
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    legacy = _ref2.legacy;
  return new UiTheme({
    global: global,
    buyerJourney: buyerJourney,
    typographyScale: typographyScale,
    typographyPrimary: typographyPrimary,
    typographySecondary: typographySecondary,
    headingLevel1: headingLevel1,
    headingLevel2: headingLevel2,
    headingLevel3: headingLevel3,
    link: link,
    controls: controls,
    label: label,
    textFields: textFields,
    select: select,
    checkbox: checkbox,
    radio: radio,
    optionList: optionList,
    reviewBlock: reviewBlock,
    lineItems: lineItems,
    moneyLines: moneyLines,
    moneySummary: moneySummary,
    primaryButton: primaryButton,
    secondaryButton: secondaryButton,
    formLayout: formLayout,
    tag: tag,
    tooltip: tooltip,
    popover: popover,
    banner: banner,
    thumbnail: thumbnail,
    typographyStyle1: typographyStyle1,
    typographyStyle2: typographyStyle2,
    typographyStyle3: typographyStyle3,
    typographyStyle4: typographyStyle4,
    typographyStyle5: typographyStyle5,
    typographyStyle6: typographyStyle6,
    typographyStyle7: typographyStyle7,
    typographyStyle8: typographyStyle8,
    typographyStyle9: typographyStyle9,
    colors: colors
  }, {
    legacy: legacy
  });
}
export var UiTheme = /*#__PURE__*/function () {
  function UiTheme(configuration) {
    var _configuration$colors, _configuration$typogr;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      legacy: false
    };
    _classCallCheck(this, UiTheme);
    _defineProperty(this, "listeners", {
      change: new Set(),
      preview: new Set()
    });
    this.configuration = _objectSpread(_objectSpread({}, configuration), {}, {
      colors: colorsFromOverrides((_configuration$colors = configuration.colors) !== null && _configuration$colors !== void 0 ? _configuration$colors : {}),
      typographyScale: (_configuration$typogr = configuration.typographyScale) !== null && _configuration$typogr !== void 0 ? _configuration$typogr : {}
    });
    this.customProperties = customPropertiesFromThemeConfiguration(this.configuration, options);
    this.options = options;
  }
  return _createClass(UiTheme, [{
    key: "preview",
    value: function preview(overrides, typographyScale) {
      var _this$options$legacy;
      var colors = colorsFromOverrides(overrides);
      var colorsCustomProperties = customPropertiesFromRoleColors(colors, (_this$options$legacy = this.options.legacy) !== null && _this$options$legacy !== void 0 ? _this$options$legacy : false);
      this.configuration = _objectSpread(_objectSpread({}, this.configuration), {}, {
        colors: _objectSpread(_objectSpread({}, this.configuration.colors), colors)
      });
      var typographyScaleCustomProperties = customPropertiesFromTypographyScale(typographyScale);
      var _iterator = _createForOfIteratorHelper(this.listeners.preview),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var listener = _step.value;
          listener(_objectSpread(_objectSpread({}, colorsCustomProperties), typographyScaleCustomProperties));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "set",
    value: function set(key, value) {
      this.configuration = _objectSpread(_objectSpread({}, this.configuration), {}, _defineProperty({}, key, value));
      var _iterator2 = _createForOfIteratorHelper(this.listeners.change),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var listener = _step2.value;
          listener(this.configuration);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      var customProperties = customPropertiesFromThemeConfiguration(this.configuration, this.options);
      var _iterator3 = _createForOfIteratorHelper(this.listeners.preview),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _listener = _step3.value;
          _listener(customProperties);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }, {
    key: "on",
    value: function on(event, listener) {
      var _this = this;
      this.listeners[event].add(listener);
      return function () {
        _this.listeners[event]["delete"](listener);
      };
    }
  }]);
}();
export function colorSubdued(colorGroup) {
  var _colorGroup$backgroun;
  return colorGroup === null || colorGroup === void 0 || (_colorGroup$backgroun = colorGroup.background) === null || _colorGroup$backgroun === void 0 ? void 0 : _colorGroup$backgroun.adjust({
    l: function l(_l) {
      return _l > 50 ? _l - 1.7 : Math.max(_l - 5.2, 0);
    }
  });
}
export function colorDisabled(colorGroup) {
  var _colorGroup$backgroun2;
  return colorGroup === null || colorGroup === void 0 || (_colorGroup$backgroun2 = colorGroup.background) === null || _colorGroup$backgroun2 === void 0 ? void 0 : _colorGroup$backgroun2.adjust({
    l: function l(_l2) {
      return _l2 > 50 ? Math.min(_l2 - 2.5, 97.5) : Math.max(_l2 + 2.5, 2.5);
    }
  });
}
export function colorText(colorGroup, legacy) {
  var _colorGroup$foregroun, _colorGroup$backgroun3;
  return (_colorGroup$foregroun = colorGroup === null || colorGroup === void 0 ? void 0 : colorGroup.foreground) !== null && _colorGroup$foregroun !== void 0 ? _colorGroup$foregroun : colorGroup === null || colorGroup === void 0 || (_colorGroup$backgroun3 = colorGroup.background) === null || _colorGroup$backgroun3 === void 0 ? void 0 : _colorGroup$backgroun3.adjust({
    s: function s(_s) {
      return _s > 50 ? Math.max(_s - 55, 0) : _s;
    },
    l: function l(_l3) {
      return isLight(colorGroup === null || colorGroup === void 0 ? void 0 : colorGroup.background, legacy) ? Math.max(_l3 - 62.6, 0) : Math.min(_l3 + 82, 98.3);
    }
  });
}
export function colorTextEmphasized(colorGroup, legacy) {
  var _colorGroup$foregroun2, _colorGroup$backgroun4;
  return colorGroup !== null && colorGroup !== void 0 && colorGroup.foreground ? colorGroup === null || colorGroup === void 0 || (_colorGroup$foregroun2 = colorGroup.foreground) === null || _colorGroup$foregroun2 === void 0 ? void 0 : _colorGroup$foregroun2.adjust({
    l: function l(_l4) {
      return isLight(colorGroup === null || colorGroup === void 0 ? void 0 : colorGroup.foreground, legacy) ? Math.min(_l4 + 15, 100) : _l4 - 10;
    }
  }) : colorGroup === null || colorGroup === void 0 || (_colorGroup$backgroun4 = colorGroup.background) === null || _colorGroup$backgroun4 === void 0 ? void 0 : _colorGroup$backgroun4.adjust({
    s: function s(_s2) {
      return _s2 > 50 ? _s2 : Math.min(_s2 + 15, 100);
    },
    l: function l(_l5) {
      return isLight(colorGroup === null || colorGroup === void 0 ? void 0 : colorGroup.background, legacy) ? Math.max(_l5 - 77.5, 0) : 98.3;
    }
  });
}
export function colorTextSubdued(colorGroup, legacy) {
  var _colorGroup$foregroun3, _colorGroup$backgroun5;
  return colorGroup !== null && colorGroup !== void 0 && colorGroup.foreground ? colorGroup === null || colorGroup === void 0 || (_colorGroup$foregroun3 = colorGroup.foreground) === null || _colorGroup$foregroun3 === void 0 ? void 0 : _colorGroup$foregroun3.adjust({
    l: function l(_l6) {
      return isLight(colorGroup === null || colorGroup === void 0 ? void 0 : colorGroup.foreground, legacy) ? Math.max(_l6 - 35, 0) : _l6 + 43.2;
    }
  }) : colorGroup === null || colorGroup === void 0 || (_colorGroup$backgroun5 = colorGroup.background) === null || _colorGroup$backgroun5 === void 0 ? void 0 : _colorGroup$backgroun5.adjust({
    s: function s(_s3) {
      return _s3 > 50 ? Math.max(_s3 - 55, 0) : _s3;
    },
    l: function l(_l7) {
      return isLight(colorGroup === null || colorGroup === void 0 ? void 0 : colorGroup.background, legacy) ? Math.max(_l7 - 49.9, 10) : Math.min(_l7 + 63.2, 90);
    }
  });
}
function colorActionHovered(colorGroup) {
  var _colorGroup$backgroun6;
  return colorGroup === null || colorGroup === void 0 || (_colorGroup$backgroun6 = colorGroup.background) === null || _colorGroup$backgroun6 === void 0 ? void 0 : _colorGroup$backgroun6.adjust({
    l: function l(_l8) {
      return _l8 - 10;
    }
  });
}
function colorActionPressed(colorGroup) {
  var _colorGroup$backgroun7;
  return colorGroup === null || colorGroup === void 0 || (_colorGroup$backgroun7 = colorGroup.background) === null || _colorGroup$backgroun7 === void 0 ? void 0 : _colorGroup$backgroun7.adjust({
    l: function l(_l9) {
      return _l9 - 10;
    }
  });
}
function colorActionText(colorGroup, legacy) {
  var _colorGroup$foregroun4, _colorGroup$backgroun8;
  return (_colorGroup$foregroun4 = colorGroup === null || colorGroup === void 0 ? void 0 : colorGroup.foreground) !== null && _colorGroup$foregroun4 !== void 0 ? _colorGroup$foregroun4 : colorGroup === null || colorGroup === void 0 || (_colorGroup$backgroun8 = colorGroup.background) === null || _colorGroup$backgroun8 === void 0 ? void 0 : _colorGroup$backgroun8.adjust({
    l: function l() {
      return isLight(colorGroup === null || colorGroup === void 0 ? void 0 : colorGroup.background, legacy) ? 4 : 96;
    }
  });
}
function colorActionTextHovered(colorGroup) {
  var _colorGroup$backgroun9;
  return colorGroup === null || colorGroup === void 0 || (_colorGroup$backgroun9 = colorGroup.background) === null || _colorGroup$backgroun9 === void 0 ? void 0 : _colorGroup$backgroun9.adjust({
    l: function l(_l10) {
      return _l10 - 10;
    }
  });
}
function colorActionTextPressed(colorGroup) {
  var _colorGroup$backgroun10;
  return colorGroup === null || colorGroup === void 0 || (_colorGroup$backgroun10 = colorGroup.background) === null || _colorGroup$backgroun10 === void 0 ? void 0 : _colorGroup$backgroun10.adjust({
    l: function l(_l11) {
      return _l11 - 10;
    }
  });
}
function colorsFromOverrides(overrideColors) {
  return Object.keys(overrideColors).reduce(function (colors, key) {
    var colorOrGroup = overrideColors[key];
    if (colorOrGroup == null) return colors;
    var background = colorOrGroup.background,
      foreground = colorOrGroup.foreground,
      accent = colorOrGroup.accent;
    return _objectSpread(_objectSpread({}, colors), {}, _defineProperty({}, key, {
      background: background ? normalizeColor(background) : undefined,
      foreground: foreground ? normalizeColor(foreground) : undefined,
      accent: accent ? normalizeColor(accent) : undefined
    }));
  }, {});
}
function colorBorder(colorGroup, legacy) {
  var _colorGroup$backgroun11;
  return colorGroup === null || colorGroup === void 0 || (_colorGroup$backgroun11 = colorGroup.background) === null || _colorGroup$backgroun11 === void 0 ? void 0 : _colorGroup$backgroun11.adjust({
    s: function s(_s4) {
      return _s4 > 50 ? Math.max(_s4 - 15, 0) : _s4;
    },
    l: function l(_l12) {
      return isLight(colorGroup === null || colorGroup === void 0 ? void 0 : colorGroup.background, legacy) ? Math.max(_l12 - 8.8, 0) : Math.min(_l12 + 11.3, 90);
    }
  });
}
export function colorBorderEmphasized(colorGroup, legacy) {
  var _colorGroup$backgroun12;
  return colorGroup === null || colorGroup === void 0 || (_colorGroup$backgroun12 = colorGroup.background) === null || _colorGroup$backgroun12 === void 0 ? void 0 : _colorGroup$backgroun12.adjust({
    s: function s(_s5) {
      return _s5 > 50 ? _s5 : Math.min(_s5 + 15, 100);
    },
    l: function l(_l13) {
      return isLight(colorGroup === null || colorGroup === void 0 ? void 0 : colorGroup.background, legacy) ? Math.max(_l13 - 77.5, 0) : 98.3;
    }
  });
}
function isLight(color) {
  var legacy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (typeof color === 'undefined') return false;
  if (legacy) {
    return color.getYiqPerceivedBrightness() >= 0.65;
  }
  return color.l > 50;
}
function normalizeColor(color) {
  if (color instanceof Hsl) return color;
  if (typeof color === 'string') return parseHsl(color);
  return _construct(Hsl, _toConsumableArray(color));
}
var TYPOGRAPHY_FONT_SIZE_BASE = 14;
var COLOR_MAP = {
  /* COLOR CANVAS */
  colorCanvas: function colorCanvas(_ref3) {
    var canvas = _ref3.canvas;
    return canvas === null || canvas === void 0 ? void 0 : canvas.background;
  },
  colorCanvasSubdued: function colorCanvasSubdued(_ref4) {
    var canvas = _ref4.canvas;
    return colorSubdued(canvas);
  },
  colorCanvasText: function colorCanvasText(_ref5) {
    var canvas = _ref5.canvas;
    return colorText(canvas);
  },
  colorCanvasTextSubdued: function colorCanvasTextSubdued(_ref6) {
    var canvas = _ref6.canvas;
    return colorTextSubdued(canvas);
  },
  colorCanvasTextEmphasized: function colorCanvasTextEmphasized(_ref7) {
    var canvas = _ref7.canvas;
    return colorTextEmphasized(canvas);
  },
  colorCanvasBorder: function colorCanvasBorder(_ref8) {
    var canvas = _ref8.canvas;
    return colorBorder(canvas);
  },
  colorCanvasBorderEmphasized: function colorCanvasBorderEmphasized(_ref9) {
    var canvas = _ref9.canvas;
    return colorBorderEmphasized(canvas);
  },
  colorCanvasAccent: function colorCanvasAccent(_ref10) {
    var canvas = _ref10.canvas;
    return canvas === null || canvas === void 0 ? void 0 : canvas.accent;
  },
  /* COLOR SURFACE PRIMARY */
  colorSurfacePrimary: function colorSurfacePrimary(_ref11) {
    var surfacePrimary = _ref11.surfacePrimary;
    return surfacePrimary === null || surfacePrimary === void 0 ? void 0 : surfacePrimary.background;
  },
  colorSurfacePrimaryDisabled: function colorSurfacePrimaryDisabled(_ref12) {
    var surfacePrimary = _ref12.surfacePrimary;
    return colorDisabled(surfacePrimary);
  },
  colorSurfacePrimarySubdued: function colorSurfacePrimarySubdued(_ref13) {
    var surfacePrimary = _ref13.surfacePrimary;
    return colorSubdued(surfacePrimary);
  },
  colorSurfacePrimaryText: function colorSurfacePrimaryText(_ref14, legacy) {
    var surfacePrimary = _ref14.surfacePrimary;
    return colorText(surfacePrimary, legacy);
  },
  colorSurfacePrimaryTextSubdued: function colorSurfacePrimaryTextSubdued(_ref15, legacy) {
    var surfacePrimary = _ref15.surfacePrimary;
    return colorTextSubdued(surfacePrimary, legacy);
  },
  colorSurfacePrimaryTextEmphasized: function colorSurfacePrimaryTextEmphasized(_ref16, legacy) {
    var surfacePrimary = _ref16.surfacePrimary;
    return colorTextEmphasized(surfacePrimary, legacy);
  },
  colorSurfacePrimaryBorder: function colorSurfacePrimaryBorder(_ref17, legacy) {
    var surfacePrimary = _ref17.surfacePrimary;
    return colorBorder(surfacePrimary, legacy);
  },
  colorSurfacePrimaryBorderEmphasized: function colorSurfacePrimaryBorderEmphasized(_ref18, legacy) {
    var surfacePrimary = _ref18.surfacePrimary;
    return colorBorderEmphasized(surfacePrimary, legacy);
  },
  colorSurfacePrimaryAccent: function colorSurfacePrimaryAccent(_ref19) {
    var surfacePrimary = _ref19.surfacePrimary;
    return surfacePrimary === null || surfacePrimary === void 0 ? void 0 : surfacePrimary.accent;
  },
  /* COLOR SURFACE SECONDARY */
  colorSurfaceSecondary: function colorSurfaceSecondary(_ref20) {
    var surfaceSecondary = _ref20.surfaceSecondary;
    return surfaceSecondary === null || surfaceSecondary === void 0 ? void 0 : surfaceSecondary.background;
  },
  colorSurfaceSecondaryDisabled: function colorSurfaceSecondaryDisabled(_ref21) {
    var surfaceSecondary = _ref21.surfaceSecondary;
    return colorDisabled(surfaceSecondary);
  },
  colorSurfaceSecondarySubdued: function colorSurfaceSecondarySubdued(_ref22) {
    var surfaceSecondary = _ref22.surfaceSecondary;
    return colorSubdued(surfaceSecondary);
  },
  colorSurfaceSecondaryText: function colorSurfaceSecondaryText(_ref23, legacy) {
    var surfaceSecondary = _ref23.surfaceSecondary;
    return colorText(surfaceSecondary, legacy);
  },
  colorSurfaceSecondaryTextSubdued: function colorSurfaceSecondaryTextSubdued(_ref24, legacy) {
    var surfaceSecondary = _ref24.surfaceSecondary;
    return colorTextSubdued(surfaceSecondary, legacy);
  },
  colorSurfaceSecondaryTextEmphasized: function colorSurfaceSecondaryTextEmphasized(_ref25, legacy) {
    var surfaceSecondary = _ref25.surfaceSecondary;
    return colorTextEmphasized(surfaceSecondary, legacy);
  },
  colorSurfaceSecondaryBorder: function colorSurfaceSecondaryBorder(_ref26, legacy) {
    var surfaceSecondary = _ref26.surfaceSecondary;
    return colorBorder(surfaceSecondary, legacy);
  },
  colorSurfaceSecondaryBorderEmphasized: function colorSurfaceSecondaryBorderEmphasized(_ref27, legacy) {
    var surfaceSecondary = _ref27.surfaceSecondary;
    return colorBorderEmphasized(surfaceSecondary, legacy);
  },
  colorSurfaceSecondaryAccent: function colorSurfaceSecondaryAccent(_ref28) {
    var surfaceSecondary = _ref28.surfaceSecondary;
    return surfaceSecondary === null || surfaceSecondary === void 0 ? void 0 : surfaceSecondary.accent;
  },
  /* COLOR SURFACE TERTIARY */
  colorSurfaceTertiary: function colorSurfaceTertiary(_ref29) {
    var surfaceTertiary = _ref29.surfaceTertiary;
    return surfaceTertiary === null || surfaceTertiary === void 0 ? void 0 : surfaceTertiary.background;
  },
  colorSurfaceTertiaryDisabled: function colorSurfaceTertiaryDisabled(_ref30) {
    var surfaceTertiary = _ref30.surfaceTertiary;
    return colorDisabled(surfaceTertiary);
  },
  colorSurfaceTertiarySubdued: function colorSurfaceTertiarySubdued(_ref31) {
    var surfaceTertiary = _ref31.surfaceTertiary;
    return colorSubdued(surfaceTertiary);
  },
  colorSurfaceTertiaryText: function colorSurfaceTertiaryText(_ref32, legacy) {
    var surfaceTertiary = _ref32.surfaceTertiary;
    return colorText(surfaceTertiary, legacy);
  },
  colorSurfaceTertiaryTextSubdued: function colorSurfaceTertiaryTextSubdued(_ref33, legacy) {
    var surfaceTertiary = _ref33.surfaceTertiary;
    return colorTextSubdued(surfaceTertiary, legacy);
  },
  colorSurfaceTertiaryTextEmphasized: function colorSurfaceTertiaryTextEmphasized(_ref34, legacy) {
    var surfaceTertiary = _ref34.surfaceTertiary;
    return colorTextEmphasized(surfaceTertiary, legacy);
  },
  colorSurfaceTertiaryBorder: function colorSurfaceTertiaryBorder(_ref35, legacy) {
    var surfaceTertiary = _ref35.surfaceTertiary;
    return colorBorder(surfaceTertiary, legacy);
  },
  colorSurfaceTertiaryBorderEmphasized: function colorSurfaceTertiaryBorderEmphasized(_ref36, legacy) {
    var surfaceTertiary = _ref36.surfaceTertiary;
    return colorBorderEmphasized(surfaceTertiary, legacy);
  },
  colorSurfaceTertiaryAccent: function colorSurfaceTertiaryAccent(_ref37) {
    var surfaceTertiary = _ref37.surfaceTertiary;
    return surfaceTertiary === null || surfaceTertiary === void 0 ? void 0 : surfaceTertiary.accent;
  },
  /* COLOR STYLES */
  color1: function color1(_ref38) {
    var _color = _ref38.color1;
    return _color === null || _color === void 0 ? void 0 : _color.background;
  },
  color1Text: function color1Text(_ref39) {
    var color1 = _ref39.color1;
    return color1 === null || color1 === void 0 ? void 0 : color1.foreground;
  },
  color2: function color2(_ref40) {
    var _color2 = _ref40.color2;
    return _color2 === null || _color2 === void 0 ? void 0 : _color2.background;
  },
  color2Text: function color2Text(_ref41) {
    var color2 = _ref41.color2;
    return color2 === null || color2 === void 0 ? void 0 : color2.foreground;
  },
  /* COLOR PRIMARY ACTION */
  colorPrimaryAction: function colorPrimaryAction(_ref42) {
    var primaryAction = _ref42.primaryAction;
    return primaryAction === null || primaryAction === void 0 ? void 0 : primaryAction.background;
  },
  colorPrimaryActionHovered: function colorPrimaryActionHovered(_ref43) {
    var primaryAction = _ref43.primaryAction;
    return colorActionHovered(primaryAction);
  },
  colorPrimaryActionPressed: function colorPrimaryActionPressed(_ref44) {
    var primaryAction = _ref44.primaryAction;
    return colorActionPressed(primaryAction);
  },
  colorPrimaryActionText: function colorPrimaryActionText(_ref45, legacy) {
    var primaryAction = _ref45.primaryAction;
    return colorActionText(primaryAction, legacy);
  },
  colorPrimaryActionTextHovered: function colorPrimaryActionTextHovered(_ref46) {
    var primaryAction = _ref46.primaryAction;
    return colorActionTextHovered(primaryAction);
  },
  colorPrimaryActionTextPressed: function colorPrimaryActionTextPressed(_ref47) {
    var primaryAction = _ref47.primaryAction;
    return colorActionTextPressed(primaryAction);
  },
  /* COLOR SECONDARY ACTION */
  colorSecondaryAction: function colorSecondaryAction(_ref48) {
    var secondaryAction = _ref48.secondaryAction;
    return secondaryAction === null || secondaryAction === void 0 ? void 0 : secondaryAction.background;
  },
  colorSecondaryActionHovered: function colorSecondaryActionHovered(_ref49) {
    var secondaryAction = _ref49.secondaryAction;
    return colorActionHovered(secondaryAction);
  },
  colorSecondaryActionPressed: function colorSecondaryActionPressed(_ref50) {
    var secondaryAction = _ref50.secondaryAction;
    return colorActionPressed(secondaryAction);
  },
  colorSecondaryActionText: function colorSecondaryActionText(_ref51, legacy) {
    var secondaryAction = _ref51.secondaryAction;
    return colorActionText(secondaryAction, legacy);
  },
  colorSecondaryActionTextHovered: function colorSecondaryActionTextHovered(_ref52) {
    var secondaryAction = _ref52.secondaryAction;
    return colorActionTextHovered(secondaryAction);
  },
  colorSecondaryActionTextPressed: function colorSecondaryActionTextPressed(_ref53) {
    var secondaryAction = _ref53.secondaryAction;
    return colorActionTextPressed(secondaryAction);
  },
  /* COLOR TERTIARY ACTION */
  colorTertiaryAction: function colorTertiaryAction(_ref54) {
    var tertiaryAction = _ref54.tertiaryAction;
    return tertiaryAction === null || tertiaryAction === void 0 ? void 0 : tertiaryAction.background;
  },
  colorTertiaryActionText: function colorTertiaryActionText(_ref55) {
    var tertiaryAction = _ref55.tertiaryAction;
    return colorActionText(tertiaryAction);
  },
  colorTertiaryActionTextSubdued: function colorTertiaryActionTextSubdued(_ref56, legacy) {
    var _tertiaryAction$foreg, _tertiaryAction$backg;
    var tertiaryAction = _ref56.tertiaryAction;
    return tertiaryAction !== null && tertiaryAction !== void 0 && tertiaryAction.foreground ? tertiaryAction === null || tertiaryAction === void 0 || (_tertiaryAction$foreg = tertiaryAction.foreground) === null || _tertiaryAction$foreg === void 0 ? void 0 : _tertiaryAction$foreg.adjust({
      l: function l(_l14) {
        return Math.min(_l14 + 20, 100);
      }
    }) : tertiaryAction === null || tertiaryAction === void 0 || (_tertiaryAction$backg = tertiaryAction.background) === null || _tertiaryAction$backg === void 0 ? void 0 : _tertiaryAction$backg.adjust({
      s: function s(_s6) {
        return _s6 > 50 ? Math.max(_s6 - 55, 0) : _s6;
      },
      l: function l(_l15) {
        return isLight(tertiaryAction === null || tertiaryAction === void 0 ? void 0 : tertiaryAction.background, legacy) ? Math.max(_l15 - 49.9, 10) : Math.min(_l15 + 63.2, 90);
      }
    });
  },
  /* COLOR INTERACTIVE */
  colorInteractive: function colorInteractive(_ref57) {
    var interactive = _ref57.interactive;
    return interactive === null || interactive === void 0 ? void 0 : interactive.background;
  },
  colorInteractiveHovered: function colorInteractiveHovered(_ref58) {
    var _interactive$backgrou;
    var interactive = _ref58.interactive;
    return interactive === null || interactive === void 0 || (_interactive$backgrou = interactive.background) === null || _interactive$backgrou === void 0 ? void 0 : _interactive$backgrou.adjust({
      l: function l(_l16) {
        return _l16 + 5;
      }
    });
  },
  colorInteractivePressed: function colorInteractivePressed(_ref59) {
    var _interactive$backgrou2;
    var interactive = _ref59.interactive;
    return interactive === null || interactive === void 0 || (_interactive$backgrou2 = interactive.background) === null || _interactive$backgrou2 === void 0 ? void 0 : _interactive$backgrou2.adjust({
      l: function l(_l17) {
        return _l17 + 5;
      }
    });
  },
  colorInteractiveText: function colorInteractiveText(_ref60) {
    var interactive = _ref60.interactive;
    return interactive === null || interactive === void 0 ? void 0 : interactive.foreground;
  },
  colorInteractiveTextHovered: function colorInteractiveTextHovered(_ref61) {
    var _interactive$foregrou;
    var interactive = _ref61.interactive;
    return interactive === null || interactive === void 0 || (_interactive$foregrou = interactive.foreground) === null || _interactive$foregrou === void 0 ? void 0 : _interactive$foregrou.adjust({
      l: function l(_l18) {
        return _l18 + 10;
      }
    });
  },
  colorInteractiveTextPressed: function colorInteractiveTextPressed(_ref62) {
    var _interactive$foregrou2;
    var interactive = _ref62.interactive;
    return interactive === null || interactive === void 0 || (_interactive$foregrou2 = interactive.foreground) === null || _interactive$foregrou2 === void 0 ? void 0 : _interactive$foregrou2.adjust({
      l: function l(_l19) {
        return _l19 + 10;
      }
    });
  },
  /* COLOR INFO */
  colorInfo: function colorInfo(_ref63) {
    var info = _ref63.info;
    return info === null || info === void 0 ? void 0 : info.background;
  },
  colorInfoDisabled: function colorInfoDisabled(_ref64) {
    var info = _ref64.info;
    return colorDisabled(info);
  },
  colorInfoSubdued: function colorInfoSubdued(_ref65) {
    var info = _ref65.info;
    return colorSubdued(info);
  },
  colorInfoText: function colorInfoText(_ref66, legacy) {
    var info = _ref66.info;
    return colorText(info, legacy);
  },
  colorInfoTextSubdued: function colorInfoTextSubdued(_ref67, legacy) {
    var info = _ref67.info;
    return colorTextSubdued(info, legacy);
  },
  colorInfoTextEmphasized: function colorInfoTextEmphasized(_ref68, legacy) {
    var info = _ref68.info;
    return colorTextEmphasized(info, legacy);
  },
  colorInfoBorder: function colorInfoBorder(_ref69, legacy) {
    var info = _ref69.info;
    return colorBorder(info, legacy);
  },
  colorInfoBorderEmphasized: function colorInfoBorderEmphasized(_ref70, legacy) {
    var info = _ref70.info;
    return colorBorderEmphasized(info, legacy);
  },
  colorInfoAccent: function colorInfoAccent(_ref71) {
    var info = _ref71.info;
    return info === null || info === void 0 ? void 0 : info.accent;
  },
  /* COLOR SUCCESS */
  colorSuccess: function colorSuccess(_ref72) {
    var success = _ref72.success;
    return success === null || success === void 0 ? void 0 : success.background;
  },
  colorSuccessDisabled: function colorSuccessDisabled(_ref73) {
    var success = _ref73.success;
    return colorDisabled(success);
  },
  colorSuccessSubdued: function colorSuccessSubdued(_ref74) {
    var success = _ref74.success;
    return colorSubdued(success);
  },
  colorSuccessText: function colorSuccessText(_ref75, legacy) {
    var success = _ref75.success;
    return colorText(success, legacy);
  },
  colorSuccessTextSubdued: function colorSuccessTextSubdued(_ref76, legacy) {
    var success = _ref76.success;
    return colorTextSubdued(success, legacy);
  },
  colorSuccessTextEmphasized: function colorSuccessTextEmphasized(_ref77, legacy) {
    var success = _ref77.success;
    return colorTextEmphasized(success, legacy);
  },
  colorSuccessBorder: function colorSuccessBorder(_ref78, legacy) {
    var success = _ref78.success;
    return colorBorder(success, legacy);
  },
  colorSuccessBorderEmphasized: function colorSuccessBorderEmphasized(_ref79, legacy) {
    var success = _ref79.success;
    return colorBorderEmphasized(success, legacy);
  },
  colorSuccessAccent: function colorSuccessAccent(_ref80) {
    var success = _ref80.success;
    return success === null || success === void 0 ? void 0 : success.accent;
  },
  /* COLOR WARNING */
  colorWarning: function colorWarning(_ref81) {
    var warning = _ref81.warning;
    return warning === null || warning === void 0 ? void 0 : warning.background;
  },
  colorWarningDisabled: function colorWarningDisabled(_ref82) {
    var warning = _ref82.warning;
    return colorDisabled(warning);
  },
  colorWarningSubdued: function colorWarningSubdued(_ref83) {
    var warning = _ref83.warning;
    return colorSubdued(warning);
  },
  colorWarningText: function colorWarningText(_ref84, legacy) {
    var warning = _ref84.warning;
    return colorText(warning, legacy);
  },
  colorWarningTextSubdued: function colorWarningTextSubdued(_ref85, legacy) {
    var warning = _ref85.warning;
    return colorTextSubdued(warning, legacy);
  },
  colorWarningTextEmphasized: function colorWarningTextEmphasized(_ref86, legacy) {
    var warning = _ref86.warning;
    return colorTextEmphasized(warning, legacy);
  },
  colorWarningBorder: function colorWarningBorder(_ref87, legacy) {
    var warning = _ref87.warning;
    return colorBorder(warning, legacy);
  },
  colorWarningBorderEmphasized: function colorWarningBorderEmphasized(_ref88, legacy) {
    var warning = _ref88.warning;
    return colorBorderEmphasized(warning, legacy);
  },
  colorWarningAccent: function colorWarningAccent(_ref89) {
    var warning = _ref89.warning;
    return warning === null || warning === void 0 ? void 0 : warning.accent;
  },
  /* COLOR CRITICAL */
  colorCritical: function colorCritical(_ref90) {
    var critical = _ref90.critical;
    return critical === null || critical === void 0 ? void 0 : critical.background;
  },
  colorCriticalDisabled: function colorCriticalDisabled(_ref91) {
    var critical = _ref91.critical;
    return colorDisabled(critical);
  },
  colorCriticalSubdued: function colorCriticalSubdued(_ref92) {
    var critical = _ref92.critical;
    return colorSubdued(critical);
  },
  colorCriticalText: function colorCriticalText(_ref93, legacy) {
    var critical = _ref93.critical;
    return colorText(critical, legacy);
  },
  colorCriticalTextSubdued: function colorCriticalTextSubdued(_ref94, legacy) {
    var critical = _ref94.critical;
    return colorTextSubdued(critical, legacy);
  },
  colorCriticalTextEmphasized: function colorCriticalTextEmphasized(_ref95, legacy) {
    var critical = _ref95.critical;
    return colorTextEmphasized(critical, legacy);
  },
  colorCriticalBorder: function colorCriticalBorder(_ref96, legacy) {
    var critical = _ref96.critical;
    return colorBorder(critical, legacy);
  },
  colorCriticalBorderEmphasized: function colorCriticalBorderEmphasized(_ref97, legacy) {
    var critical = _ref97.critical;
    return colorBorderEmphasized(critical, legacy);
  },
  colorCriticalAccent: function colorCriticalAccent(_ref98) {
    var critical = _ref98.critical;
    return critical === null || critical === void 0 ? void 0 : critical.accent;
  }
};
var TYPOGRAPHY_SCALE_MAP = {
  typographySizeXSmall: function typographySizeXSmall(_ref99) {
    var base = _ref99.base,
      ratio = _ref99.ratio;
    return base ? modularScale(-1, base, ratio) : undefined;
  },
  typographySizeSmall: function typographySizeSmall(_ref100) {
    var base = _ref100.base,
      ratio = _ref100.ratio;
    return base ? modularScale(-0.5, base, ratio) : undefined;
  },
  typographySizeDefault: function typographySizeDefault(_ref101) {
    var base = _ref101.base,
      ratio = _ref101.ratio;
    return base ? modularScale(0, base, ratio) : undefined;
  },
  typographySizeMedium: function typographySizeMedium(_ref102) {
    var base = _ref102.base,
      ratio = _ref102.ratio;
    return base ? modularScale(0.5, base, ratio) : undefined;
  },
  typographySizeLarge: function typographySizeLarge(_ref103) {
    var base = _ref103.base,
      ratio = _ref103.ratio;
    return base ? modularScale(1, base, ratio) : undefined;
  },
  typographySizeXLarge: function typographySizeXLarge(_ref104) {
    var base = _ref104.base,
      ratio = _ref104.ratio;
    return base ? modularScale(2, base, ratio) : undefined;
  },
  typographySizeXXLarge: function typographySizeXXLarge(_ref105) {
    var base = _ref105.base,
      ratio = _ref105.ratio;
    return base ? modularScale(3, base, ratio) : undefined;
  }
};
var TYPOGRAPHY_SIZE_MAP = {
  xsmall: 'var(--x-pp-typography-size-xsmall)',
  small: 'var(--x-pp-typography-size-small)',
  base: 'var(--x-pp-typography-size-default)',
  medium: 'var(--x-pp-typography-size-medium)',
  large: 'var(--x-pp-typography-size-large)',
  xlarge: 'var(--x-pp-typography-size-xlarge)',
  xxlarge: 'var(--x-pp-typography-size-xxlarge)'
};
var TYPOGRAPHY_CASE_MAP = {
  none: 'none',
  title: 'capitalize',
  upper: 'uppercase',
  lower: 'lowercase'
};
var TYPOGRAPHY_FONTS_MAP = {
  primary: 'var(--x-pp-typography-primary-fonts)',
  secondary: 'var(--x-pp-typography-secondary-fonts)'
};
var TYPOGRAPHY_KERNING_MAP = {
  base: 'normal',
  loose: '0.125em',
  xloose: '0.16em'
};
var TYPOGRAPHY_LINE_SIZE_MAP = {
  base: '1.3',
  large: '1.5'
};
var TYPOGRAPHY_PRIMARY_WEIGHT_MAP = {
  base: 'var(--x-pp-typography-primary-weight-base)',
  bold: 'var(--x-pp-typography-primary-weight-bold)'
};
var TYPOGRAPHY_SECONDARY_WEIGHT_MAP = {
  base: 'var(--x-pp-typography-secondary-weight-base)',
  bold: 'var(--x-pp-typography-secondary-weight-bold)'
};
var SPACING_RATIO = 1.225;
var SPACING_MAP = {
  spacingTight4x: function spacingTight4x(_ref106) {
    var base = _ref106.base;
    return base ? modularScale(-5, base, SPACING_RATIO) : undefined;
  },
  spacingTight3x: function spacingTight3x(_ref107) {
    var base = _ref107.base;
    return base ? modularScale(-4, base, SPACING_RATIO) : undefined;
  },
  spacingTight2x: function spacingTight2x(_ref108) {
    var base = _ref108.base;
    return base ? modularScale(-3, base, SPACING_RATIO) : undefined;
  },
  spacingTight1x: function spacingTight1x(_ref109) {
    var base = _ref109.base;
    return base ? modularScale(-2, base, SPACING_RATIO) : undefined;
  },
  spacingTight: function spacingTight(_ref110) {
    var base = _ref110.base;
    return base ? modularScale(-1, base, SPACING_RATIO) : undefined;
  },
  spacingBase: function spacingBase(_ref111) {
    var base = _ref111.base;
    return base ? modularScale(0, base, SPACING_RATIO) : undefined;
  },
  spacingLoose: function spacingLoose(_ref112) {
    var base = _ref112.base;
    return base ? modularScale(1, base, SPACING_RATIO) : undefined;
  },
  spacingLoose1x: function spacingLoose1x(_ref113) {
    var base = _ref113.base;
    return base ? modularScale(2, base, SPACING_RATIO) : undefined;
  },
  spacingLoose2x: function spacingLoose2x(_ref114) {
    var base = _ref114.base;
    return base ? modularScale(3, base, SPACING_RATIO) : undefined;
  },
  spacingLoose3x: function spacingLoose3x(_ref115) {
    var base = _ref115.base;
    return base ? modularScale(4, base, SPACING_RATIO) : undefined;
  },
  spacingLoose4x: function spacingLoose4x(_ref116) {
    var base = _ref116.base;
    return base ? modularScale(5, base, SPACING_RATIO) : undefined;
  }
};
var SIMPLE_BORDER_RADIUS_MAP = {
  none: 'var(--x-pp-border-radius-none)',
  base: 'var(--x-pp-border-radius-base)'
};
var BORDER_RADIUS_MAP = _objectSpread(_objectSpread({}, SIMPLE_BORDER_RADIUS_MAP), {}, {
  tight: 'var(--x-pp-border-radius-tight)',
  fullyRounded: 'var(--x-pp-border-radius-fully-rounded)'
});
var BORDER_MAP = {
  full: 'var(--x-pp-border-full)',
  blockEnd: 'var(--x-pp-border-block-end)',
  none: 'var(--x-pp-border-none)'
};
var OPTION_LIST_GAP_MAP = {
  base: 'var(--x-pp-spacing-base)',
  tight: 'var(--x-pp-spacing-tight4x)',
  none: '0'
};
var MONEY_LINES_GAP_MAP = {
  base: 'var(--x-pp-spacing-tight)',
  tight: 'var(--x-pp-spacing-tight1x)',
  none: '0'
};
var MONEY_LINES_SEPARATOR_GAP_MAP = {
  base: 'var(--x-pp-spacing-loose1x)',
  tight: 'var(--x-pp-spacing-base)',
  none: '0'
};
var REVIEW_BLOCK_GAP_MAP = {
  base: 'var(--x-pp-spacing-base)',
  tight: 'var(--x-pp-spacing-tight4x)',
  none: '0'
};
var BUYER_JOURNEY_GAP_MAP = {
  base: 'var(--x-pp-spacing-tight1x)',
  loose: 'var(--x-pp-spacing-loose2x)'
};
var SPACING_VAR_MAP = {
  none: '0',
  tight4x: 'var(--x-pp-spacing-tight4x)',
  tight3x: 'var(--x-pp-spacing-tight3x)',
  tight2x: 'var(--x-pp-spacing-tight2x)',
  tight1x: 'var(--x-pp-spacing-tight1x)',
  tight: 'var(--x-pp-spacing-tight)',
  base: 'var(--x-pp-spacing-base)',
  loose: 'var(--x-pp-spacing-loose)',
  loose1x: 'var(--x-pp-spacing-loose1x)',
  loose2x: 'var(--x-pp-spacing-loose2x)',
  loose3x: 'var(--x-pp-spacing-loose3x)',
  loose4x: 'var(--x-pp-spacing-loose4x)'
};
var DURATION_MAP = {
  none: '0',
  fast: 'var(--x-pp-duration-fast)',
  base: 'var(--x-pp-duration-base)',
  slow: 'var(--x-pp-duration-slow)',
  slower: 'var(--x-pp-duration-slower)',
  slowest: 'var(--x-pp-duration-slowest)'
};

/**
 * This scaling factor represents the ratio of the desired size of the radio/checkbox to the base font-size of the document.
 */
var RADIO_SCALE_BASE = 18 / TYPOGRAPHY_FONT_SIZE_BASE;
var RADIO_LARGE_SCALE = 22 / TYPOGRAPHY_FONT_SIZE_BASE;
var CHECKBOX_SCALE = 18 / TYPOGRAPHY_FONT_SIZE_BASE;

/**
 * This scaling factor represents the ratio of the desired size of the icons to the base font-size of the document.
 */
var ICON_SMALL_SCALE = 10 / TYPOGRAPHY_FONT_SIZE_BASE;
var ICON_LARGE_SCALE = 18 / TYPOGRAPHY_FONT_SIZE_BASE;
function customPropertiesFromThemeConfiguration(_ref117, _ref118) {
  var _typographyPrimary$fo, _typographyPrimary$we, _typographyPrimary$we2, _typographySecondary$, _typographySecondary$2, _typographySecondary$3, _typographyScale$base;
  var global = _ref117.global,
    buyerJourney = _ref117.buyerJourney,
    colors = _ref117.colors,
    typographyScale = _ref117.typographyScale,
    typographyPrimary = _ref117.typographyPrimary,
    typographySecondary = _ref117.typographySecondary,
    controls = _ref117.controls,
    textFields = _ref117.textFields,
    select = _ref117.select,
    optionList = _ref117.optionList,
    checkbox = _ref117.checkbox,
    moneyLines = _ref117.moneyLines,
    moneySummary = _ref117.moneySummary,
    reviewBlock = _ref117.reviewBlock,
    primaryButton = _ref117.primaryButton,
    secondaryButton = _ref117.secondaryButton,
    tag = _ref117.tag,
    banner = _ref117.banner,
    thumbnail = _ref117.thumbnail,
    link = _ref117.link,
    typographyStyle1 = _ref117.typographyStyle1,
    typographyStyle2 = _ref117.typographyStyle2,
    typographyStyle3 = _ref117.typographyStyle3,
    typographyStyle4 = _ref117.typographyStyle4,
    typographyStyle5 = _ref117.typographyStyle5,
    typographyStyle6 = _ref117.typographyStyle6,
    typographyStyle7 = _ref117.typographyStyle7,
    typographyStyle8 = _ref117.typographyStyle8,
    typographyStyle9 = _ref117.typographyStyle9;
  var legacy = _ref118.legacy;
  var globalTypographyLetterCase = maybeInMap(TYPOGRAPHY_CASE_MAP)(global.typographyLetterCase);
  var globalTypographyLineSizeDefault = maybeInMap(TYPOGRAPHY_LINE_SIZE_MAP)(global.typographyLineSizeDefault);
  var globalTypographyLineSizeLarge = maybeInMap(TYPOGRAPHY_LINE_SIZE_MAP)(global.typographyLineSizeLarge);
  var globalTypographyKerning = maybeInMap(TYPOGRAPHY_KERNING_MAP)(global.typographyKerning);
  var globalBorderRadius = maybeInMap(BORDER_RADIUS_MAP)(global.borderRadius);
  var controlBorderRadius = maybeInMap(SIMPLE_BORDER_RADIUS_MAP)(controls.borderRadius);
  var textFieldBorderRadius = maybeInMap(BORDER_RADIUS_MAP)(textFields.borderRadius);
  var selectBorderRadius = maybeInMap(BORDER_RADIUS_MAP)(select.borderRadius);
  var optionListBorderRadius = maybeInMap(BORDER_RADIUS_MAP)(optionList.borderRadius);
  var checkboxBorderRadius = maybeInMap(BORDER_RADIUS_MAP)(checkbox.borderRadius);
  var reviewBlockBorderRadius = maybeInMap(BORDER_RADIUS_MAP)(reviewBlock.borderRadius);
  var _map = [textFields.border, select.border, checkbox.border].map(maybeInMap(BORDER_MAP)),
    _map2 = _slicedToArray(_map, 3),
    textFieldBorder = _map2[0],
    selectBorder = _map2[1],
    checkboxBorder = _map2[2];
  var typographyPrimaryFonts = (_typographyPrimary$fo = typographyPrimary.fonts) !== null && _typographyPrimary$fo !== void 0 ? _typographyPrimary$fo : undefined;
  var typographyPrimaryWeightBase = (_typographyPrimary$we = typographyPrimary.weightBase) !== null && _typographyPrimary$we !== void 0 ? _typographyPrimary$we : undefined;
  var typographyPrimaryWeightBold = (_typographyPrimary$we2 = typographyPrimary.weightBold) !== null && _typographyPrimary$we2 !== void 0 ? _typographyPrimary$we2 : undefined;
  var typographySecondaryFonts = (_typographySecondary$ = typographySecondary.fonts) !== null && _typographySecondary$ !== void 0 ? _typographySecondary$ : undefined;
  var typographySecondaryWeightBase = (_typographySecondary$2 = typographySecondary.weightBase) !== null && _typographySecondary$2 !== void 0 ? _typographySecondary$2 : undefined;
  var typographySecondaryWeightBold = (_typographySecondary$3 = typographySecondary.weightBold) !== null && _typographySecondary$3 !== void 0 ? _typographySecondary$3 : undefined;
  var optionListBlockGap = maybeInMap(OPTION_LIST_GAP_MAP)(optionList.gap);
  var moneyLinesBlockGap = maybeInMap(MONEY_LINES_GAP_MAP)(moneyLines.gap);
  var moneyLinesSeparatorBlockGap = maybeInMap(MONEY_LINES_SEPARATOR_GAP_MAP)(moneyLines.gap);
  var buyerJourneyInlineGap = maybeInMap(BUYER_JOURNEY_GAP_MAP)(buyerJourney.gap);
  var reviewBlockBlockGap = maybeInMap(REVIEW_BLOCK_GAP_MAP)(reviewBlock.gap);
  var reviewBlockBorder = maybeInMap(BORDER_MAP)(reviewBlock.border);
  var _map$reduce = [typographyStyle1, typographyStyle2, typographyStyle3, typographyStyle4, typographyStyle5, typographyStyle6, typographyStyle7, typographyStyle8, typographyStyle9].map(function (style) {
      return [maybeInMap(TYPOGRAPHY_SIZE_MAP)(style.size), maybeInMap(TYPOGRAPHY_CASE_MAP)(style.letterCase), maybeInMap(TYPOGRAPHY_FONTS_MAP)(style.fonts), style.weight ? typographyWeightMapping(style.fonts ? style.fonts : 'secondary', style.weight) : undefined, maybeInMap(TYPOGRAPHY_LINE_SIZE_MAP)(style.lineSize), maybeInMap(TYPOGRAPHY_KERNING_MAP)(style.kerning)];
    }).reduce(function (accumulator, array) {
      return [].concat(_toConsumableArray(accumulator), _toConsumableArray(array));
    }, []),
    _map$reduce2 = _slicedToArray(_map$reduce, 54),
    style1TypographySize = _map$reduce2[0],
    style1TypographyCase = _map$reduce2[1],
    style1TypographyFonts = _map$reduce2[2],
    style1TypographyWeight = _map$reduce2[3],
    style1TypographyLineSize = _map$reduce2[4],
    style1TypographyKerning = _map$reduce2[5],
    style2TypographySize = _map$reduce2[6],
    style2TypographyCase = _map$reduce2[7],
    style2TypographyFonts = _map$reduce2[8],
    style2TypographyWeight = _map$reduce2[9],
    style2TypographyLineSize = _map$reduce2[10],
    style2TypographyKerning = _map$reduce2[11],
    style3TypographySize = _map$reduce2[12],
    style3TypographyCase = _map$reduce2[13],
    style3TypographyFonts = _map$reduce2[14],
    style3TypographyWeight = _map$reduce2[15],
    style3TypographyLineSize = _map$reduce2[16],
    style3TypographyKerning = _map$reduce2[17],
    style4TypographySize = _map$reduce2[18],
    style4TypographyCase = _map$reduce2[19],
    style4TypographyFonts = _map$reduce2[20],
    style4TypographyWeight = _map$reduce2[21],
    style4TypographyLineSize = _map$reduce2[22],
    style4TypographyKerning = _map$reduce2[23],
    style5TypographySize = _map$reduce2[24],
    style5TypographyCase = _map$reduce2[25],
    style5TypographyFonts = _map$reduce2[26],
    style5TypographyWeight = _map$reduce2[27],
    style5TypographyLineSize = _map$reduce2[28],
    style5TypographyKerning = _map$reduce2[29],
    style6TypographySize = _map$reduce2[30],
    style6TypographyCase = _map$reduce2[31],
    style6TypographyFonts = _map$reduce2[32],
    style6TypographyWeight = _map$reduce2[33],
    style6TypographyLineSize = _map$reduce2[34],
    style6TypographyKerning = _map$reduce2[35],
    style7TypographySize = _map$reduce2[36],
    style7TypographyCase = _map$reduce2[37],
    style7TypographyFonts = _map$reduce2[38],
    style7TypographyWeight = _map$reduce2[39],
    style7TypographyLineSize = _map$reduce2[40],
    style7TypographyKerning = _map$reduce2[41],
    style8TypographySize = _map$reduce2[42],
    style8TypographyCase = _map$reduce2[43],
    style8TypographyFonts = _map$reduce2[44],
    style8TypographyWeight = _map$reduce2[45],
    style8TypographyLineSize = _map$reduce2[46],
    style8TypographyKerning = _map$reduce2[47],
    style9TypographySize = _map$reduce2[48],
    style9TypographyCase = _map$reduce2[49],
    style9TypographyFonts = _map$reduce2[50],
    style9TypographyWeight = _map$reduce2[51],
    style9TypographyLineSize = _map$reduce2[52],
    style9TypographyKerning = _map$reduce2[53];
  var primaryButtonBlockPadding = maybeInMap(SPACING_VAR_MAP)(primaryButton.blockPadding);
  var primaryButtonInlinePadding = maybeInMap(SPACING_VAR_MAP)(primaryButton.inlinePadding);
  var secondaryButtonBlockPadding = maybeInMap(SPACING_VAR_MAP)(secondaryButton.blockPadding);
  var secondaryButtonInlinePadding = maybeInMap(SPACING_VAR_MAP)(secondaryButton.inlinePadding);
  var moneyLinesBlockPadding = maybeInMap(SPACING_VAR_MAP)(moneyLines.blockPadding);
  var moneyLinesInlinePadding = maybeInMap(SPACING_VAR_MAP)(moneyLines.inlinePadding);
  var moneySummaryBlockPadding = maybeInMap(SPACING_VAR_MAP)(moneySummary.blockPadding);
  var moneySummaryInlinePadding = maybeInMap(SPACING_VAR_MAP)(moneySummary.inlinePadding);
  var optionListBlockPadding = maybeInMap(SPACING_VAR_MAP)(optionList.blockPadding);
  var optionListInlinePadding = maybeInMap(SPACING_VAR_MAP)(optionList.inlinePadding);
  var tagBorderRadius = maybeInMap(BORDER_RADIUS_MAP)(tag.borderRadius);

  /** To avoid an oval-y shape caused by subpixel rendering, we need JS to floor the size of our radio buttons. */
  var radioSizeBase = typographyScale.base ? "".concat(Math.floor(parseFloat(typographyScale.base.toString()) * RADIO_SCALE_BASE), "px") : undefined;
  var radioSizeLarge = typographyScale.base ? "".concat(Math.floor(parseFloat(typographyScale.base.toString()) * RADIO_LARGE_SCALE), "px") : undefined;

  /** To avoid an rectangular shape caused by subpixel rendering, we need JS to floor the size of our checkboxes. */
  var checkboxSize = typographyScale.base ? "".concat(Math.floor(parseFloat(typographyScale.base.toString()) * CHECKBOX_SCALE), "px") : undefined;
  var bannerBorder = maybeInMap(BORDER_MAP)(banner.border);
  var bannerBorderRadius = maybeInMap(BORDER_RADIUS_MAP)(banner.borderRadius);

  /** To avoid an oval-y/rectangular shape caused by subpixel rendering, we need JS to floor the size of our icons. */
  var iconSizeSmall = typographyScale.base ? "".concat(Math.floor(parseFloat(typographyScale.base.toString()) * ICON_SMALL_SCALE), "px") : undefined;
  var iconSizeDefault = typographyScale.base ? "".concat(typographyScale === null || typographyScale === void 0 || (_typographyScale$base = typographyScale.base) === null || _typographyScale$base === void 0 ? void 0 : _typographyScale$base.toString(), "px") : undefined;
  var iconSizeLarge = typographyScale.base ? "".concat(Math.floor(parseFloat(typographyScale.base.toString()) * ICON_LARGE_SCALE), "px") : undefined;
  var thumbnailAspectRatio = thumbnail.aspectRatio ? "".concat(thumbnail.aspectRatio) : undefined;
  var linkTransitionDuration = maybeInMap(DURATION_MAP)(link.transitionDuration);
  var customProperties = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, customPropertiesFromRoleColors(colorsFromOverrides(colors), legacy)), customPropertiesFromTypographyScale(typographyScale)), customPropertiesFromSpacing(typographyScale)), {}, {
    typographyPrimaryFonts: typographyPrimaryFonts,
    typographyPrimaryWeightBase: typographyPrimaryWeightBase,
    typographyPrimaryWeightBold: typographyPrimaryWeightBold,
    typographySecondaryFonts: typographySecondaryFonts,
    typographySecondaryWeightBase: typographySecondaryWeightBase,
    typographySecondaryWeightBold: typographySecondaryWeightBold,
    globalTypographyLetterCase: globalTypographyLetterCase,
    globalTypographyLineSizeDefault: globalTypographyLineSizeDefault,
    globalTypographyLineSizeLarge: globalTypographyLineSizeLarge,
    globalTypographyKerning: globalTypographyKerning,
    globalBorderRadius: globalBorderRadius,
    controlBorderRadius: controlBorderRadius,
    checkboxBorder: checkboxBorder,
    checkboxBorderRadius: checkboxBorderRadius,
    textFieldBorder: textFieldBorder,
    textFieldBorderRadius: textFieldBorderRadius,
    selectBorderRadius: selectBorderRadius,
    selectBorder: selectBorder,
    optionListBorderRadius: optionListBorderRadius,
    optionListBlockGap: optionListBlockGap,
    reviewBlockBorderRadius: reviewBlockBorderRadius,
    reviewBlockBlockGap: reviewBlockBlockGap,
    reviewBlockBorder: reviewBlockBorder,
    moneyLinesBlockGap: moneyLinesBlockGap,
    moneyLinesSeparatorBlockGap: moneyLinesSeparatorBlockGap,
    buyerJourneyInlineGap: buyerJourneyInlineGap,
    style1TypographySize: style1TypographySize,
    style1TypographyCase: style1TypographyCase,
    style1TypographyFonts: style1TypographyFonts,
    style1TypographyWeight: style1TypographyWeight,
    style1TypographyLineSize: style1TypographyLineSize,
    style1TypographyKerning: style1TypographyKerning,
    style2TypographySize: style2TypographySize,
    style2TypographyCase: style2TypographyCase,
    style2TypographyFonts: style2TypographyFonts,
    style2TypographyWeight: style2TypographyWeight,
    style2TypographyLineSize: style2TypographyLineSize,
    style2TypographyKerning: style2TypographyKerning,
    style3TypographySize: style3TypographySize,
    style3TypographyCase: style3TypographyCase,
    style3TypographyFonts: style3TypographyFonts,
    style3TypographyWeight: style3TypographyWeight,
    style3TypographyLineSize: style3TypographyLineSize,
    style3TypographyKerning: style3TypographyKerning,
    style4TypographySize: style4TypographySize,
    style4TypographyCase: style4TypographyCase,
    style4TypographyFonts: style4TypographyFonts,
    style4TypographyWeight: style4TypographyWeight,
    style4TypographyLineSize: style4TypographyLineSize,
    style4TypographyKerning: style4TypographyKerning,
    style5TypographySize: style5TypographySize,
    style5TypographyCase: style5TypographyCase,
    style5TypographyFonts: style5TypographyFonts,
    style5TypographyWeight: style5TypographyWeight,
    style5TypographyLineSize: style5TypographyLineSize,
    style5TypographyKerning: style5TypographyKerning,
    style6TypographySize: style6TypographySize,
    style6TypographyCase: style6TypographyCase,
    style6TypographyFonts: style6TypographyFonts,
    style6TypographyWeight: style6TypographyWeight,
    style6TypographyLineSize: style6TypographyLineSize,
    style6TypographyKerning: style6TypographyKerning,
    style7TypographySize: style7TypographySize,
    style7TypographyCase: style7TypographyCase,
    style7TypographyFonts: style7TypographyFonts,
    style7TypographyWeight: style7TypographyWeight,
    style7TypographyLineSize: style7TypographyLineSize,
    style7TypographyKerning: style7TypographyKerning,
    style8TypographySize: style8TypographySize,
    style8TypographyCase: style8TypographyCase,
    style8TypographyFonts: style8TypographyFonts,
    style8TypographyWeight: style8TypographyWeight,
    style8TypographyLineSize: style8TypographyLineSize,
    style8TypographyKerning: style8TypographyKerning,
    style9TypographySize: style9TypographySize,
    style9TypographyCase: style9TypographyCase,
    style9TypographyFonts: style9TypographyFonts,
    style9TypographyWeight: style9TypographyWeight,
    style9TypographyLineSize: style9TypographyLineSize,
    style9TypographyKerning: style9TypographyKerning,
    primaryButtonBlockPadding: primaryButtonBlockPadding,
    primaryButtonInlinePadding: primaryButtonInlinePadding,
    secondaryButtonBlockPadding: secondaryButtonBlockPadding,
    secondaryButtonInlinePadding: secondaryButtonInlinePadding,
    moneyLinesBlockPadding: moneyLinesBlockPadding,
    moneyLinesInlinePadding: moneyLinesInlinePadding,
    moneySummaryBlockPadding: moneySummaryBlockPadding,
    moneySummaryInlinePadding: moneySummaryInlinePadding,
    optionListBlockPadding: optionListBlockPadding,
    optionListInlinePadding: optionListInlinePadding,
    tagBorderRadius: tagBorderRadius,
    radioSizeBase: radioSizeBase,
    radioSizeLarge: radioSizeLarge,
    thumbnailAspectRatio: thumbnailAspectRatio,
    linkTransitionDuration: linkTransitionDuration,
    checkboxSize: checkboxSize,
    bannerBorder: bannerBorder,
    bannerBorderRadius: bannerBorderRadius,
    iconSizeSmall: iconSizeSmall,
    iconSizeDefault: iconSizeDefault,
    iconSizeLarge: iconSizeLarge
  });
  for (var _i = 0, _arr = Object.keys(customProperties); _i < _arr.length; _i++) {
    var key = _arr[_i];
    if (customProperties[key] == null) {
      delete customProperties[key];
    }
  }
  return customProperties;
}
function customPropertiesFromRoleColors(colors, legacy) {
  var customProperties = {};
  for (var _i2 = 0, _arr2 = Object.keys(COLOR_MAP); _i2 < _arr2.length; _i2++) {
    var _COLOR_MAP$property;
    var property = _arr2[_i2];
    var color = (_COLOR_MAP$property = COLOR_MAP[property]) === null || _COLOR_MAP$property === void 0 ? void 0 : _COLOR_MAP$property.call(COLOR_MAP, colors, legacy);
    if (color != null) customProperties[property] = toRgb(color);
  }
  return customProperties;
}
function customPropertiesFromTypographyScale(scale) {
  var customProperties = {};
  for (var _i3 = 0, _arr3 = Object.keys(TYPOGRAPHY_SCALE_MAP); _i3 < _arr3.length; _i3++) {
    var _TYPOGRAPHY_SCALE_MAP;
    var property = _arr3[_i3];
    var fontSize = (_TYPOGRAPHY_SCALE_MAP = TYPOGRAPHY_SCALE_MAP[property]) === null || _TYPOGRAPHY_SCALE_MAP === void 0 ? void 0 : _TYPOGRAPHY_SCALE_MAP.call(TYPOGRAPHY_SCALE_MAP, scale);
    if (fontSize != null) customProperties[property] = fontSize;
  }
  return customProperties;
}
function customPropertiesFromSpacing(scale) {
  var customProperties = {};
  for (var _i4 = 0, _arr4 = Object.keys(SPACING_MAP); _i4 < _arr4.length; _i4++) {
    var _SPACING_MAP$property;
    var property = _arr4[_i4];
    var spacing = (_SPACING_MAP$property = SPACING_MAP[property]) === null || _SPACING_MAP$property === void 0 ? void 0 : _SPACING_MAP$property.call(SPACING_MAP, scale);
    if (spacing != null) customProperties[property] = spacing;
  }
  return customProperties;
}
function typographyWeightMapping(fontStack, weight) {
  return fontStack === 'primary' ? TYPOGRAPHY_PRIMARY_WEIGHT_MAP[weight] : TYPOGRAPHY_SECONDARY_WEIGHT_MAP[weight];
}
function maybeInMap(map) {
  return function (value) {
    return value ? map[value] : undefined;
  };
}