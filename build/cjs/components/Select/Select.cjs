function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React from 'react';
import { classNames, variationName } from '@shopify/css-utilities';
import { InlineError } from '../InlineError';
import { Text } from '../Text';
import { Icon } from '../Icon';
import { Truncate } from '../Truncate';
import { BlockStack } from '../BlockStack';
import { useThemeConfiguration } from '../Theme';
import { autocompleteToHtml } from '../../utilities/autocomplete';
import { useId, createIdCreator } from '../../utilities/id';
import { errorId } from '../../utilities/errors';
import typographyStyles from '../../utilities/typography-styles.css';
import styles from './Select.css';
export var PLACEHOLDER_VALUE = '';
var createId = createIdCreator('Select');
export function Select(_ref) {
  var explicitId = _ref.id,
    name = _ref.name,
    label = _ref.label,
    options = _ref.options,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? PLACEHOLDER_VALUE : _ref$value,
    disabled = _ref.disabled,
    readonly = _ref.readonly,
    required = _ref.required,
    error = _ref.error,
    autocomplete = _ref.autocomplete,
    placeholder = _ref.placeholder,
    onChange = _ref.onChange;
  var _useThemeConfiguratio = useThemeConfiguration(),
    controlsBackground = _useThemeConfiguratio.controls.background,
    _useThemeConfiguratio2 = _useThemeConfiguratio.select,
    _useThemeConfiguratio3 = _useThemeConfiguratio2.labelPosition,
    labelPosition = _useThemeConfiguratio3 === void 0 ? 'inside' : _useThemeConfiguratio3,
    selectBackground = _useThemeConfiguratio2.background,
    _useThemeConfiguratio4 = _useThemeConfiguratio2.border,
    border = _useThemeConfiguratio4 === void 0 ? 'full' : _useThemeConfiguratio4,
    _useThemeConfiguratio5 = _useThemeConfiguratio2.borderColor,
    borderColor = _useThemeConfiguratio5 === void 0 ? 'base' : _useThemeConfiguratio5,
    _useThemeConfiguratio6 = _useThemeConfiguratio2.focusBorder,
    focusBorder = _useThemeConfiguratio6 === void 0 ? 'full' : _useThemeConfiguratio6,
    _useThemeConfiguratio7 = _useThemeConfiguratio2.disclosureIcon,
    disclosureIcon = _useThemeConfiguratio7 === void 0 ? 'caretDown' : _useThemeConfiguratio7,
    _useThemeConfiguratio8 = _useThemeConfiguratio2.disclosureIconSeparator,
    disclosureIconSeparator = _useThemeConfiguratio8 === void 0 ? true : _useThemeConfiguratio8,
    typographyStyle = _useThemeConfiguratio2.typographyStyle,
    errorIndentation = _useThemeConfiguratio2.errorIndentation,
    errorTypographyStyle = _useThemeConfiguratio2.errorTypographyStyle,
    labelTypographyStyle = _useThemeConfiguratio.label.typographyStyle;
  var id = useId(explicitId, createId);
  var background = selectBackground || controlsBackground || 'surfaceTertiary';
  var errorMarkup = error && <span className={(errorIndentation && styles[variationName('Error-errorIndentation', errorIndentation)], errorTypographyStyle && typographyStyles[errorTypographyStyle])}>
      <InlineError controlID={id}>{error}</InlineError>
    </span>;
  var className = classNames(styles.Select, Boolean(error) && styles.hasError, disabled && styles['Select-isDisabled'], readonly && styles['Select-isReadOnly'], styles[variationName('Select-label', labelPosition)], styles[variationName('Select-background', background)], styles[variationName('Select-border', border)], styles[variationName('Select-borderColor', borderColor)], styles[variationName('Select-focusBorder', focusBorder)], typographyStyle && typographyStyles[typographyStyle]);
  var labelMarkup = <label className={classNames(styles.Label, styles[variationName('Label-position', labelPosition)], _defineProperty({}, styles['Label-isPlaceholder'], value === PLACEHOLDER_VALUE && placeholder === label), styles[variationName('Label-onBackground', background)])} htmlFor={id}>
      <Text size={!(value === PLACEHOLDER_VALUE && placeholder === label) || labelPosition === 'inside' ? 'small' : undefined} subdued style={labelTypographyStyle}>
        <Truncate>{label}</Truncate>
      </Text>
    </label>;
  var view = /* eslint-disable-next-line @shopify/jsx-prefer-fragment-wrappers */
  <div>
      {labelPosition === 'outside' ? labelMarkup : null}
      <div className={styles.Wrapper}>
        {labelPosition === 'inside' && labelMarkup}
        <select name={name} id={id} disabled={disabled} onChange={function (event) {
        return onChange === null || onChange === void 0 ? void 0 : onChange(event.target.value);
      }} required={required} value={value} className={className} aria-describedby={error ? errorId(id) : undefined} aria-invalid={Boolean(error)} autoComplete={autocompleteToHtml(autocomplete)}>
          {placeholder && (value === PLACEHOLDER_VALUE || placeholder !== label) && <option value={PLACEHOLDER_VALUE} hidden={placeholder === label} disabled>
                {placeholder === label ? <>&nbsp;</> : placeholder}
              </option>}
          {options.map(function (option) {
          return <option key={option.value} value={option.value} disabled={option.disabled || readonly}>
              {option.label}
            </option>;
        })}
        </select>
        <div className={classNames(styles.Selector, disclosureIconSeparator && styles['Selector-separated'], disclosureIconSeparator && styles[variationName('Selector-borderColor', borderColor)])}>
          <Icon source={disclosureIcon} size="small" />
        </div>
      </div>
    </div>;
  return <BlockStack spacing="tight">
      {view}
      {errorMarkup}
    </BlockStack>;
}