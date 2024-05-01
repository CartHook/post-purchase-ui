function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["maxInlineSize", "blockSize", "open", "title", "titleHidden", "source", "noMountTransition", "children"];
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
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { classNames, variationName } from '@shopify/css-utilities';
import { useResponsiveValue } from '../../utilities/responsiveValue';
import { useTranslate } from '../AppContext';
import { FocusTrap } from '../FocusTrap';
import { Portal } from '../Portal';
import { Heading } from '../Heading';
import { Icon } from '../Icon';
import { pixelOrPercent } from '../../utilities/units';
import { useTransition } from '../../utilities/transition';
import { createIdCreator, useId } from '../../utilities/id';
import styles from './Modal.css';
var createId = createIdCreator('ModalHeading');
var IFRAME_HEIGHT_NOT_ACCESSIBLE = -1;
export function Modal(_ref) {
  var maxInlineSize = _ref.maxInlineSize,
    blockSize = _ref.blockSize,
    open = _ref.open,
    title = _ref.title,
    titleHidden = _ref.titleHidden,
    source = _ref.source,
    _ref$noMountTransitio = _ref.noMountTransition,
    noMountTransition = _ref$noMountTransitio === void 0 ? false : _ref$noMountTransitio,
    children = _ref.children,
    rest = _objectWithoutProperties(_ref, _excluded);
  var blocking = rest.blocking;
  var onClose = rest.blocking ? undefined : rest.onClose;
  var translate = useTranslate();
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    iframeHeight = _useState2[0],
    setIframeHeight = _useState2[1];
  var activatorRef = useRef(null);
  var modalRef = useRef(null);
  var modalHeadingId = useId(undefined, createId);
  var transition = useTransition(open, 'fast', !noMountTransition);
  var transitionClassName = styles[variationName('transition', transition)];
  var isMobile = useResponsiveValue({
    base: true,
    medium: false
  });
  useEffect(function () {
    if (transition === 'enter') {
      document.body.style.overflow = 'hidden';
      activatorRef.current = document.activeElement;
    }
    if (transition === 'exited') {
      document.body.style.overflow = 'auto';
      if ((activatorRef === null || activatorRef === void 0 ? void 0 : activatorRef.current) instanceof HTMLElement) activatorRef.current.focus();
      setIframeHeight(undefined);
    }
  }, [transition]);
  var handleDialogFocus = function handleDialogFocus() {
    // workaround for browsers that don't support `preventScroll` for `focus`
    setTimeout(function () {
      var modal = modalRef.current;
      modal && modal.scrollTo(0, 0);
    }, 0);
  };
  useEffect(function () {
    var handleKeyDown = function handleKeyDown(event) {
      if ((event.key === 'Escape' || event.key === 'Esc') && !blocking) {
        onClose && onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown, false);
    return function () {
      document.removeEventListener('keydown', handleKeyDown, false);
    };
  }, [blocking, onClose]);
  var handleIFrameLoad = useCallback(function (evt) {
    var iframe = evt.target;
    if (iframe && iframe.contentWindow) {
      try {
        setIframeHeight(iframe.contentWindow.document.body.scrollHeight);
      } catch (_unused) {
        setIframeHeight(IFRAME_HEIGHT_NOT_ACCESSIBLE);
      }
    }
  }, []);
  function handleBackdropClick() {
    onClose && onClose();
  }
  if (transition === 'exited') return null;
  var ariaLabelOrLabelledby = titleHidden ? {
    'aria-label': title
  } : {
    'aria-labelledby': modalHeadingId
  };
  var titleMarkup = titleHidden ?
  // `null` breaks close button's right alignment
  <span /> : <Heading level={1} id={modalHeadingId}>
      {title}
    </Heading>;
  var header = (!titleHidden || !blocking) && <header className={styles.Header}>
      {titleMarkup}
      {!blocking && <button type="button" className={styles.CloseButton} onClick={onClose} aria-label={translate('close') || 'Close'}>
          <Icon source="close" size="large" />
        </button>}
    </header>;
  var content = source ? <iframe src={source} title={title} className={styles.IFrame} {...iframeHeight && iframeHeight > 0 && {
    style: {
      height: iframeHeight
    }
  }} {...!blockSize && {
    onLoad: handleIFrameLoad
  }} /> : <div className={styles.Content} {...(blockSize || isMobile) && {
    tabIndex: 0
  }}>
      {children}
    </div>;
  return <Portal>
      <div className={styles.Modal} ref={modalRef}>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
        <div className={classNames(styles.Backdrop, transitionClassName)} onClick={handleBackdropClick} />
        <FocusTrap onContainerFocus={handleDialogFocus}>
          <div className={classNames(styles.Dialog, transitionClassName, _defineProperty({}, styles['Dialog-blockSizeFill'], blockSize === 'fill' || iframeHeight === -1))} role="dialog" aria-modal style={_objectSpread({}, maxInlineSize && {
          maxWidth: pixelOrPercent(maxInlineSize === 'fill' ? 1 : maxInlineSize)
        })} {...ariaLabelOrLabelledby}>
            {header}
            {content}
          </div>
        </FocusTrap>
      </div>
    </Portal>;
}