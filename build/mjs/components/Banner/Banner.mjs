function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState, useEffect, useRef } from 'react';
import { classNames, variationName } from '@shopify/css-utilities';
import { createIdCreator, useId } from '../../utilities/id';
import { useTranslate } from '../AppContext';
import { Heading } from '../Heading';
import { HeadingGroup } from '../HeadingGroup';
import { Bookend } from '../Bookend';
import { Icon } from '../Icon';
import { View } from '../View';
import { TextContainer } from '../TextContainer';
import styles from './Banner.css';
var createId = createIdCreator('Banner');
export function Banner(_ref) {
  var children = _ref.children,
    _ref$collapsible = _ref.collapsible,
    collapsible = _ref$collapsible === void 0 ? false : _ref$collapsible,
    _ref$iconHidden = _ref.iconHidden,
    iconHidden = _ref$iconHidden === void 0 ? false : _ref$iconHidden,
    _ref$status = _ref.status,
    status = _ref$status === void 0 ? 'info' : _ref$status,
    title = _ref.title,
    _ref$autofocus = _ref.autofocus,
    autofocus = _ref$autofocus === void 0 ? false : _ref$autofocus;
  var translate = useTranslate();
  var _useState = useState(true),
    _useState2 = _slicedToArray(_useState, 2),
    collapsed = _useState2[0],
    setCollapsed = _useState2[1];
  var bannerRef = useRef(null);
  useEffect(function () {
    if (autofocus === true) {
      var _bannerRef$current;
      bannerRef === null || bannerRef === void 0 || (_bannerRef$current = bannerRef.current) === null || _bannerRef$current === void 0 || _bannerRef$current.focus();
    }
  }, [autofocus]);
  var className = classNames(styles.Banner, status && styles[variationName('status', status)]);
  var id = useId(undefined, createId);
  var controlId = collapsed ? undefined : id;
  var showChildren = !collapsible || collapsible && !collapsed;
  return <div className={className} role={status === 'critical' ? 'alert' : 'status'} aria-atomic="true" aria-live="polite" {...autofocus && {
    tabIndex: -1
  }} ref={bannerRef}>
      <Bookend leading={!iconHidden} trailing={collapsible}>
        {!iconHidden && <div className={styles.Icon}>
            <Icon source={status} />
          </div>}
        <TextContainer spacing="tight">
          {title && <Heading level={3}>{title}</Heading>}
          {children && showChildren && <div className={styles.Content} id={controlId}>
              <HeadingGroup>
                <View>{children}</View>
              </HeadingGroup>
            </div>}
        </TextContainer>
        {collapsible && <View>
            <button type="button" className={styles.Button} onClick={function () {
          return setCollapsed(function (collapsed) {
            return !collapsed;
          });
        }} aria-pressed={!collapsed} aria-expanded={!collapsed} aria-controls={controlId}>
              <Icon size="small" source={collapsed ? 'chevronDown' : 'chevronUp'} accessibilityLabel={translate('expand')} />
            </button>
          </View>}
      </Bookend>
    </div>;
}