import React from 'react';
import { classNames, variationName } from '@shopify/css-utilities';
import styles from './InlineStack.css';
export function InlineStack(_ref) {
  var spacing = _ref.spacing,
    alignment = _ref.alignment,
    children = _ref.children;
  var className = classNames(styles.InlineStack, spacing && styles[variationName('spacing', spacing)], alignment && styles[variationName('alignment', alignment)]);
  return <div className={className}>{children}</div>;
}