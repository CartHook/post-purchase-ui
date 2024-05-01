import React from 'react';
import { classNames, variationName } from '@shopify/css-utilities';
import styles from './TextContainer.css';
export function TextContainer(_ref) {
  var alignment = _ref.alignment,
    spacing = _ref.spacing,
    children = _ref.children;
  var className = classNames(styles.TextContainer, alignment && styles[variationName('alignment', alignment)], spacing && styles[variationName('spacing', spacing)]);
  return <div className={className}>{children}</div>;
}