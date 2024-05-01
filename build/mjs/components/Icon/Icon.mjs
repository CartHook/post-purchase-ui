import React from 'react';
import { classNames, variationName } from '@shopify/css-utilities';
import { utilityDefaultColorAccent } from '../../utilities/legacy';
import { camera, cancelCircle, caretDown, cart, checkmark, checkmarkCircle, chevronDown, chevronUp, chevronRight, chevronLeft, close, critical, discount, delivered, delivery, disabled, errorFill, info, lock, mobile, questionFill, ship, spinner, spinnerSmall, success, warning, warningCircle, warningFill, giftFill } from '../../icons';
import styles from './Icon.css';
var BUNDLED_ICONS = {
  camera: camera,
  cancelCircle: cancelCircle,
  caretDown: caretDown,
  cart: cart,
  checkmark: checkmark,
  checkmarkCircle: checkmarkCircle,
  chevronDown: chevronDown,
  chevronUp: chevronUp,
  chevronRight: chevronRight,
  chevronLeft: chevronLeft,
  close: close,
  critical: critical,
  discount: discount,
  delivered: delivered,
  delivery: delivery,
  disabled: disabled,
  errorFill: errorFill,
  info: info,
  lock: lock,
  mobile: mobile,
  questionFill: questionFill,
  spinner: spinner,
  spinnerSmall: spinnerSmall,
  success: success,
  ship: ship,
  warning: warning,
  warningCircle: warningCircle,
  warningFill: warningFill,
  giftFill: giftFill
};
export function Icon(_ref) {
  var source = _ref.source,
    appearance = _ref.appearance,
    size = _ref.size,
    accessibilityLabel = _ref.accessibilityLabel;
  var className = classNames(styles.Icon, appearance && styles[variationName('appearance', appearance)], appearance && appearance === 'accent' && utilityDefaultColorAccent, size && styles[variationName('size', size)]);
  var contentMarkup;
  if (source === 'placeholder') {
    contentMarkup = <div className={styles.Placeholder} />;
  } else {
    var SourceComponent = BUNDLED_ICONS[source];
    contentMarkup = <SourceComponent className={styles.Svg} focusable="false" aria-hidden="true" role="presentation" />;
  }
  return <span className={className} aria-label={accessibilityLabel}>
      {contentMarkup}
    </span>;
}