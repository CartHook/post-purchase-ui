import React from 'react';
import { classNames, variationName } from '@shopify/css-utilities';
import styles from './Bookend.css';
export function Bookend(_ref) {
  var children = _ref.children,
    spacing = _ref.spacing,
    alignment = _ref.alignment,
    leading = _ref.leading,
    trailing = _ref.trailing;
  return <div className={classNames(styles.Bookend, leading && styles.leading, trailing && styles.trailing, spacing && styles[variationName('spacing', spacing)], alignment && styles[variationName('alignment', alignment)])}>
      {children}
    </div>;
}