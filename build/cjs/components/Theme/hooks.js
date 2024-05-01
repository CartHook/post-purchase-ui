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
import { useContext, useRef, useEffect, useCallback, useState } from 'react';
import { ThemeContext } from './context';
export function useTheme() {
  var theme = useContext(ThemeContext);
  if (theme == null) {
    throw new Error('No theme found in context');
  }
  return theme;
}
export function useThemeConfiguration() {
  var theme = useTheme();
  var forceUpdate = useForceUpdate();
  var themeConfigurationRef = useRef(theme.configuration);
  themeConfigurationRef.current = theme.configuration;
  var internals = useRef();
  if (internals.current == null) {
    var watchedKeys = new Set();
    var reactiveConfiguration = {};
    var _loop = function _loop() {
      var key = _arr[_i];
      Object.defineProperty(reactiveConfiguration, key, {
        enumerable: true,
        get: function get() {
          watchedKeys.add(key);
          return themeConfigurationRef.current[key];
        }
      });
    };
    for (var _i = 0, _arr = Object.keys(theme.configuration); _i < _arr.length; _i++) {
      _loop();
    }
    internals.current = {
      watchedKeys: watchedKeys,
      reactiveConfiguration: reactiveConfiguration
    };
  }
  useEffect(function () {
    var currentConfiguration = themeConfigurationRef.current;
    themeConfigurationRef.current = theme.configuration;
    if (_toConsumableArray(internals.current.watchedKeys).some(function (key) {
      return currentConfiguration[key] !== theme.configuration[key];
    })) {
      forceUpdate();
    }
    return theme.on('change', function () {
      var currentConfiguration = themeConfigurationRef.current;
      themeConfigurationRef.current = theme.configuration;
      if (_toConsumableArray(internals.current.watchedKeys).some(function (key) {
        return currentConfiguration[key] !== theme.configuration[key];
      })) {
        forceUpdate();
      }
    });
  }, [forceUpdate, theme]);
  return internals.current.reactiveConfiguration;
}
function useForceUpdate() {
  var _useState = useState({}),
    _useState2 = _slicedToArray(_useState, 2),
    forceUpdate = _useState2[1];
  return useCallback(function () {
    return forceUpdate(function () {
      return {};
    });
  }, []);
}