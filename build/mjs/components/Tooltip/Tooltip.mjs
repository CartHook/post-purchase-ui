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
import React, { useRef, useState } from 'react';
import { classNames, variationName } from '@shopify/css-utilities';
import { createIdCreator, useId } from '../../utilities/id';
import { useTransition } from '../../utilities/transition';
import { Popper, usePopper } from '../Popper';
import { TextBlock } from '../TextBlock';
import { TextContainer } from '../TextContainer';
import { useThemeConfiguration } from '../Theme';
import styles from './Tooltip.css';
var createId = createIdCreator('Tooltip');
export function Tooltip(_ref) {
  var content = _ref.content,
    children = _ref.children;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    active = _useState2[0],
    setActive = _useState2[1];
  var buttonRef = useRef(null);
  var ignoreNonTouchEvents = useRef(false);
  var transition = useTransition(active, {
    exit: 'base'
  });
  function handleKeyDown(event) {
    switch (event.key) {
      case 'Enter':
      case 'Space':
        event.preventDefault();
        setActive(!active);
        break;
      case 'Escape':
      case 'Esc':
        event.preventDefault();
        setActive(false);
        break;
    }
  }
  var id = useId(undefined, createId);
  var controlId = active ? id : undefined;
  return <div className={styles.Wrapper}>
      <button type="button" className={styles.Button} aria-pressed={active} aria-controls={controlId} aria-describedby={controlId} onFocus={function () {
      if (ignoreNonTouchEvents.current) {
        return;
      }
      setActive(true);
    }} onBlur={function () {
      if (ignoreNonTouchEvents.current) {
        return;
      }
      setActive(false);
    }} onMouseEnter={function () {
      if (ignoreNonTouchEvents.current) {
        return;
      }
      setActive(true);
    }} onMouseLeave={function () {
      setActive(false);
    }} onTouchStart={function () {
      ignoreNonTouchEvents.current = true;
    }} onClick={function () {
      setActive(!active);
    }} onKeyDown={handleKeyDown} ref={buttonRef}>
        {children}
      </button>
      {transition !== 'exited' && <Popper activator={buttonRef.current} preventOverflow>
          <TooltipContent content={content} id={controlId} onMouseEnter={function () {
        if (ignoreNonTouchEvents.current) {
          return;
        }
        setActive(true);
      }} onMouseLeave={function () {
        setActive(false);
      }} transition={transition} />
        </Popper>}
    </div>;
}
export function TooltipContent(_ref2) {
  var content = _ref2.content,
    id = _ref2.id,
    onMouseEnter = _ref2.onMouseEnter,
    onMouseLeave = _ref2.onMouseLeave,
    transition = _ref2.transition;
  var _usePopper = usePopper(),
    clipping = _usePopper.clipping,
    spacing = _usePopper.spacing;
  var _useThemeConfiguratio = useThemeConfiguration(),
    _useThemeConfiguratio2 = _useThemeConfiguratio.tooltip,
    background = _useThemeConfiguratio2.background,
    _useThemeConfiguratio3 = _useThemeConfiguratio2.opacity,
    opacity = _useThemeConfiguratio3 === void 0 ? 'translucent' : _useThemeConfiguratio3,
    _useThemeConfiguratio4 = _useThemeConfiguratio2.borderRadius,
    borderRadius = _useThemeConfiguratio4 === void 0 ? 'base' : _useThemeConfiguratio4,
    _useThemeConfiguratio5 = _useThemeConfiguratio2.textAlignment,
    textAlignment = _useThemeConfiguratio5 === void 0 ? 'center' : _useThemeConfiguratio5;
  var offsetX = (clipping.right || clipping.left) && "calc(50% - ".concat((clipping.right || clipping.left) + spacing, "px)");
  var className = classNames(styles.Tooltip, styles[variationName('transition', transition)], styles[variationName('Tooltip-opacity', opacity)], styles[variationName('Tooltip-borderRadius', borderRadius)], background && styles[variationName('Tooltip-background', background)]);
  var alignment = textAlignment === 'start' ? 'leading' : textAlignment;
  return /* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */(
    <div id={id} role="tooltip" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={className} style={_objectSpread({}, offsetX && {
      transformOrigin: "".concat(offsetX, " 120%")
    })}>
      <TextContainer alignment={alignment}>
        <TextBlock size="small">{content}</TextBlock>
      </TextContainer>
      <TooltipArrow />
    </div>
  );
}
export function TooltipArrow() {
  var _usePopper2 = usePopper(),
    clipping = _usePopper2.clipping,
    spacing = _usePopper2.spacing;
  var offsetX = (clipping.right || clipping.left) && "calc(".concat(document.dir === 'ltr' ? '-50' : '50', "% - ").concat((clipping.right || clipping.left) + spacing, "px)");
  var transform = (window.devicePixelRatio || 1) < 2 ? "translate(".concat(offsetX, ", 0)") : "translate3d(".concat(offsetX, ", 0, 0)");
  return <div className={styles.Arrow} style={_objectSpread({}, offsetX && {
    transform: transform,
    MozTransform: transform,
    webkitTransform: transform
  })} />;
}