import React from 'react';
import { classNames, variationName } from '@shopify/css-utilities';
import styles from './BlockStack.css';
export function BlockStack(_ref) {
  var alignment = _ref.alignment,
    spacing = _ref.spacing,
    children = _ref.children;
  var className = classNames(styles.BlockStack, alignment && styles[variationName('alignment', alignment)], spacing && styles[variationName('spacing', spacing)]);
  return <div className={className}>{children}</div>;
}