import React from 'react';
import { classNames, variationName } from '@shopify/css-utilities';
import styles from './Truncate.css';
export function Truncate(_ref) {
  var children = _ref.children,
    _ref$variation = _ref.variation,
    variation = _ref$variation === void 0 ? 'ellipsis' : _ref$variation;
  return <span className={classNames(styles.Truncate, variation && styles[variationName('variation', variation)])}>
      {children}
    </span>;
}