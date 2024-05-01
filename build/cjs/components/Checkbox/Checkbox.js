var _excluded = ["id", "name", "accessibilityLabel", "error", "disabled", "children"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
import React from 'react';
import { classNames, variationName } from '@shopify/css-utilities';
import { Icon } from '../Icon';
import { VisuallyHidden } from '../VisuallyHidden';
import { HiddenForAccessibility } from '../HiddenForAccessibility';
import { InlineError } from '../InlineError';
import { useThemeConfiguration } from '../Theme';
import { useId, createIdCreator } from '../../utilities/id';
import { errorId } from '../../utilities/errors';
import typographyStyles from '../../utilities/typography-styles.css';
import styles from './Checkbox.css';
var createId = createIdCreator('Checkbox');
export function Checkbox(_ref) {
  var explicitId = _ref.id,
    name = _ref.name,
    accessibilityLabel = _ref.accessibilityLabel,
    error = _ref.error,
    disabled = _ref.disabled,
    children = _ref.children,
    rest = _objectWithoutProperties(_ref, _excluded);
  var id = useId(explicitId, createId);
  var _useThemeConfiguratio = useThemeConfiguration(),
    _useThemeConfiguratio2 = _useThemeConfiguratio.checkbox,
    errorIndentation = _useThemeConfiguratio2.errorIndentation,
    errorTypographyStyle = _useThemeConfiguratio2.errorTypographyStyle;
  var errorMarkup = error ? <div className={classNames(styles.Error, errorTypographyStyle && typographyStyles[errorTypographyStyle])}>
      <InlineError controlID={id}>{error}</InlineError>
    </div> : null;
  var labelClassName = classNames(styles.Label, disabled && styles['Label-isDisabled']);
  var hasError = Boolean(error);
  return <div className={classNames(styles.Wrapper, hasError && styles.hasError, hasError && errorIndentation && styles[variationName('errorIndentation', errorIndentation)])}>
      <CheckboxControl id={id} name={name} error={Boolean(error)} disabled={disabled} {...rest} />
      <label htmlFor={id} className={labelClassName}>
        {accessibilityLabel ? <>
            <VisuallyHidden>{accessibilityLabel}</VisuallyHidden>
            <HiddenForAccessibility>{children}</HiddenForAccessibility>
          </> : children}
      </label>
      {errorMarkup}
    </div>;
}
export function CheckboxControl(_ref2) {
  var id = _ref2.id,
    name = _ref2.name,
    _ref2$value = _ref2.value,
    value = _ref2$value === void 0 ? false : _ref2$value,
    _ref2$checked = _ref2.checked,
    checked = _ref2$checked === void 0 ? value : _ref2$checked,
    disabled = _ref2.disabled,
    _ref2$error = _ref2.error,
    error = _ref2$error === void 0 ? false : _ref2$error,
    onChange = _ref2.onChange;
  var _useThemeConfiguratio3 = useThemeConfiguration(),
    controlsBackground = _useThemeConfiguratio3.controls.background,
    _useThemeConfiguratio4 = _useThemeConfiguratio3.checkbox,
    checkboxBackground = _useThemeConfiguratio4.background,
    _useThemeConfiguratio5 = _useThemeConfiguratio4.borderColor,
    borderColor = _useThemeConfiguratio5 === void 0 ? 'base' : _useThemeConfiguratio5;
  var background = checkboxBackground || controlsBackground || 'surfaceTertiary';
  var className = classNames(styles.Input, error && styles['Input-hasError'], disabled && styles['Input-isDisabled'], styles[variationName('Input-background', background)], styles[variationName('Input-borderColor', borderColor)]);
  return <div className={styles.Checkbox}>
      <input type="checkbox" id={id} name={name} checked={checked} disabled={disabled} onChange={function (_ref3) {
      var currentTarget = _ref3.currentTarget;
      onChange === null || onChange === void 0 || onChange(currentTarget.checked);
    }} className={className} aria-describedby={error ? errorId(id) : undefined} aria-invalid={error} />
      <div className={styles.Icon}>
        <Icon source="checkmark" size="small" />
      </div>
    </div>;
}