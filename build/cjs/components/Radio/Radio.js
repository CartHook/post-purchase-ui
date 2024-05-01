var _excluded = ["id", "accessibilityLabel", "children", "disabled"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
import React from 'react';
import { classNames, variationName } from '@shopify/css-utilities';
import { HiddenForAccessibility } from '../HiddenForAccessibility';
import { VisuallyHidden } from '../VisuallyHidden';
import { useThemeConfiguration } from '../Theme';
import { useId, createIdCreator } from '../../utilities/id';
import styles from './Radio.css';
var createId = createIdCreator('Radio');
export function Radio(_ref) {
  var explicitId = _ref.id,
    accessibilityLabel = _ref.accessibilityLabel,
    children = _ref.children,
    disabled = _ref.disabled,
    rest = _objectWithoutProperties(_ref, _excluded);
  var id = useId(explicitId, createId);
  var className = classNames(styles.Label, disabled && styles['Label-isDisabled']);
  return <div className={styles.Wrapper}>
      <RadioControl id={id} disabled={disabled} {...rest} />
      <label htmlFor={id} className={className}>
        {accessibilityLabel ? <>
            <VisuallyHidden>{accessibilityLabel}</VisuallyHidden>
            <HiddenForAccessibility>{children}</HiddenForAccessibility>
          </> : children}
      </label>
    </div>;
}
export var RadioControl = function RadioControl(_ref2) {
  var id = _ref2.id,
    name = _ref2.name,
    _ref2$value = _ref2.value,
    value = _ref2$value === void 0 ? false : _ref2$value,
    _ref2$checked = _ref2.checked,
    checked = _ref2$checked === void 0 ? value : _ref2$checked,
    disabled = _ref2.disabled,
    onChange = _ref2.onChange;
  var _useThemeConfiguratio = useThemeConfiguration(),
    controlsBackground = _useThemeConfiguratio.controls.background,
    _useThemeConfiguratio2 = _useThemeConfiguratio.radio,
    radioBackground = _useThemeConfiguratio2.background,
    _useThemeConfiguratio3 = _useThemeConfiguratio2.borderColor,
    borderColor = _useThemeConfiguratio3 === void 0 ? 'base' : _useThemeConfiguratio3,
    _useThemeConfiguratio4 = _useThemeConfiguratio2.checkedStyle,
    checkedStyle = _useThemeConfiguratio4 === void 0 ? 'ring' : _useThemeConfiguratio4,
    _useThemeConfiguratio5 = _useThemeConfiguratio2.checkedColor,
    checkedColor = _useThemeConfiguratio5 === void 0 ? 'interactive' : _useThemeConfiguratio5,
    _useThemeConfiguratio6 = _useThemeConfiguratio2.size,
    size = _useThemeConfiguratio6 === void 0 ? 'base' : _useThemeConfiguratio6;
  var background = radioBackground || controlsBackground || 'surfaceTertiary';
  var className = classNames(styles.Input, disabled && styles['Input-isDisabled'], styles[variationName('Input-size', size)], styles[variationName('Input-background', background)], styles[variationName('Input-borderColor', borderColor)], styles[variationName('Input-checkedStyle', checkedStyle)], styles[variationName('Input-checkedColor', checkedColor)]);
  return <div className={styles.Radio}>
      <input type="radio" id={id} name={name} checked={checked} disabled={disabled} onChange={function (_ref3) {
      var currentTarget = _ref3.currentTarget;
      onChange === null || onChange === void 0 || onChange(currentTarget.checked);
    }} className={className} />
    </div>;
};