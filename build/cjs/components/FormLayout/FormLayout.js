import React from 'react';
import { classNames, variationName } from '@shopify/css-utilities';
import { BlockStack } from '../BlockStack';
import { useThemeConfiguration } from '../Theme';
import styles from './FormLayout.css';
export function FormLayout(_ref) {
  var children = _ref.children;
  var _useThemeConfiguratio = useThemeConfiguration(),
    spacing = _useThemeConfiguratio.formLayout.spacing;
  var normalizedSpacing = spacing === 'base' ? undefined : spacing;
  return <BlockStack spacing={normalizedSpacing}>{children}</BlockStack>;
}
export function FormLayoutGroup(_ref2) {
  var children = _ref2.children;
  var _useThemeConfiguratio2 = useThemeConfiguration(),
    spacing = _useThemeConfiguratio2.formLayout.spacing;
  return <div className={classNames(styles.Group, spacing && spacing !== 'base' && styles[variationName('spacing', spacing)])}>
      {children}
    </div>;
}