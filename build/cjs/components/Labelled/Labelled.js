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
import React, { useReducer, useMemo, useCallback, useEffect } from 'react';
import { classNames, variationName } from '@shopify/css-utilities';
import { useMounted } from '../../utilities/mounted';
import { Text } from '../Text';
import { Truncate } from '../Truncate';
import { useThemeConfiguration } from '../Theme';
import { LabelledContext } from './context';
import styles from './Labelled.css';
export function Labelled(_ref) {
  var children = _ref.children,
    label = _ref.label,
    htmlFor = _ref.htmlFor,
    _ref$isEmpty = _ref.isEmpty,
    isEmpty = _ref$isEmpty === void 0 ? true : _ref$isEmpty,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? 'inside' : _ref$position,
    _ref$background = _ref.background,
    background = _ref$background === void 0 ? 'surfaceTertiary' : _ref$background,
    subdued = _ref.subdued;
  var mounted = useMounted();
  var _useReducer = useReducer(function (state, action) {
      if (!mounted.current) return state;
      switch (action.type) {
        case 'focus':
          {
            return _objectSpread(_objectSpread({}, state), {}, {
              isFocused: true
            });
          }
        case 'blur':
          {
            return _objectSpread(_objectSpread({}, state), {}, {
              isFloating: !state.isEmpty,
              isFocused: false
            });
          }
        case 'change':
          {
            return _objectSpread(_objectSpread({}, state), {}, {
              isFloating: true,
              isEmpty: action.isEmpty
            });
          }
        case 'init':
          {
            return _objectSpread(_objectSpread({}, state), {}, {
              isFloating: !action.isEmpty,
              isEmpty: action.isEmpty
            });
          }
      }
    }, {
      isEmpty: isEmpty,
      isFloating: !isEmpty,
      isFocused: false
    }),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    state = _useReducer2[0],
    dispatch = _useReducer2[1];

  // Handle value changes that bypasses the on Change handler
  // ie. asynchronously setting the value for a children
  useEffect(function () {
    if (!state.isFocused && state.isEmpty !== isEmpty) {
      dispatch({
        type: 'init',
        isEmpty: isEmpty
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEmpty]);
  var onFocus = useCallback(function () {
    return dispatch({
      type: 'focus'
    });
  }, []);
  var onBlur = useCallback(function () {
    return dispatch({
      type: 'blur'
    });
  }, []);
  var onChange = useCallback(function (isEmpty) {
    return dispatch({
      type: 'change',
      isEmpty: isEmpty
    });
  }, []);
  var value = useMemo(function () {
    return _objectSpread(_objectSpread({}, state), {}, {
      onBlur: onBlur,
      onChange: onChange,
      onFocus: onFocus
    });
  }, [onBlur, onChange, onFocus, state]);
  var _useThemeConfiguratio = useThemeConfiguration(),
    typographyStyle = _useThemeConfiguratio.label.typographyStyle;
  return <LabelledContext.Provider value={value}>
      <div className={styles.Wrapper}>
        <div className={classNames(_defineProperty({}, styles.isFloating, state.isFloating && position === 'inside'))}>
          <label htmlFor={htmlFor} className={classNames(styles.Label, styles[variationName('Label-position', position)], subdued && styles['Label-isSubdued'], background && styles[variationName('Label-onBackground', background)])}>
            <Text size="small" subdued style={typographyStyle}>
              <Truncate>{label}</Truncate>
            </Text>
          </label>
          {children}
        </div>
      </div>
    </LabelledContext.Provider>;
}