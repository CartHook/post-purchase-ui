import React from 'react';
import { classNames } from '@shopify/css-utilities';
import { colorCanvas } from '../../../../utilities/legacy';
import styles from './Canvas.css';
export function Canvas(_ref) {
  var children = _ref.children;
  return <div className={classNames(styles.Canvas, colorCanvas)}>{children}</div>;
}