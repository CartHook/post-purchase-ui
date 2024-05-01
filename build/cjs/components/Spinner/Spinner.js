import React from 'react';
import { classNames, variationName } from '@shopify/css-utilities';
import { usePrefersReducedMotion } from '../../utilities/media-query';
import { Icon } from '../Icon';
import styles from './Spinner.css';
export function Spinner(_ref) {
  var size = _ref.size,
    color = _ref.color,
    children = _ref.children;
  var prefersReducedMotion = usePrefersReducedMotion();
  var showAccessibleContent = Boolean(children && prefersReducedMotion);
  var className = showAccessibleContent ? undefined : classNames(styles.Spinner, size && styles[variationName('size', size)]);
  return <div className={className}>
      {showAccessibleContent ? children : <Icon source={size === 'small' ? 'spinnerSmall' : 'spinner'} appearance={color ? undefined : 'accent'} />}
    </div>;
}