function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { forwardRef, useCallback, useEffect, useRef, useState } from 'react';
import { classNames, variationName } from '@shopify/css-utilities';
import { Icon } from '../Icon';
import { VisuallyHidden } from '../VisuallyHidden';
import { useLabelled, Labelled } from '../Labelled';
import { Text } from '../Text';
import { Tooltip } from '../Tooltip';
import { InlineError } from '../InlineError';
import { BlockStack } from '../BlockStack';
import { useThemeConfiguration } from '../Theme';
import typographyStyles from '../../utilities/typography-styles.css';
import { isEmptyString } from '../../utilities/strings';
import { createIdCreator, useId } from '../../utilities/id';
import { errorId } from '../../utilities/errors';
import { autocompleteToHtml } from '../../utilities/autocomplete';
import styles from './TextField.css';
var createId = createIdCreator('TextField');
/**
 * A text field is an input field that merchants can type into.
 */
export var TextField = forwardRef(function (props, ref) {
  var _useThemeConfiguratio = useThemeConfiguration(),
    controlsBackground = _useThemeConfiguratio.controls.background,
    _useThemeConfiguratio2 = _useThemeConfiguratio.textFields,
    labelPosition = _useThemeConfiguratio2.labelPosition,
    textFieldsBackground = _useThemeConfiguratio2.background,
    errorIndentation = _useThemeConfiguratio2.errorIndentation,
    errorTypographyStyle = _useThemeConfiguratio2.errorTypographyStyle;
  var background = textFieldsBackground || controlsBackground || 'surfaceTertiary';
  var accessibilityDescription = props.accessibilityDescription,
    error = props.error,
    explicitId = props.id,
    label = props.label,
    tooltip = props.tooltip,
    explicitValue = props.value;
  var id = useId(explicitId, createId);
  var descriptionId = accessibilityDescription ? "".concat(id, "-description") : undefined;
  var description = descriptionId ? <VisuallyHidden>
      <Text id={descriptionId}>{accessibilityDescription}</Text>
    </VisuallyHidden> : null;
  var errorMarkup = error && <span className={classNames(errorIndentation && styles[variationName('Error-errorIndentation', errorIndentation)], errorTypographyStyle && typographyStyles[errorTypographyStyle])}>
      <InlineError controlID={id}>{error}</InlineError>
    </span>;
  var tooltipMarkup = tooltip ? <div className={styles.Tooltip}>
      <Tooltip content={tooltip.content}>
        <VisuallyHidden>{tooltip.label}</VisuallyHidden>
        <Icon source="questionFill" size="large" appearance="subdued" />
      </Tooltip>
    </div> : null;
  return <BlockStack spacing="tight">
      <Labelled label={label} htmlFor={id} isEmpty={isEmptyString(explicitValue)} position={labelPosition} background={background} subdued={props.readonly}>
        <div className={styles.Wrapper}>
          {description}
          <Field ref={ref} {...props} id={id} ariaDescribedBy={descriptionId} />
          {tooltipMarkup}
        </div>
      </Labelled>
      {errorMarkup}
    </BlockStack>;
});
export var Field = forwardRef(function Field(_ref, ref) {
  var id = _ref.id,
    min = _ref.min,
    max = _ref.max,
    step = _ref.step,
    name = _ref.name,
    label = _ref.label,
    explicitValue = _ref.value,
    controlledValue = _ref.controlledValue,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'text' : _ref$type,
    role = _ref.role,
    required = _ref.required,
    error = _ref.error,
    tooltip = _ref.tooltip,
    autocomplete = _ref.autocomplete,
    autofocus = _ref.autofocus,
    multiline = _ref.multiline,
    disabled = _ref.disabled,
    readonly = _ref.readonly,
    ariaActiveDescendant = _ref.ariaActiveDescendant,
    ariaAutocomplete = _ref.ariaAutocomplete,
    ariaControls = _ref.ariaControls,
    ariaDescribedBy = _ref.ariaDescribedBy,
    ariaExpanded = _ref.ariaExpanded,
    _onFocus = _ref.onFocus,
    _onBlur = _ref.onBlur,
    onChange = _ref.onChange,
    onInput = _ref.onInput,
    onKeyDown = _ref.onKeyDown;
  var innerRef = useRef();
  var refsSetter = useCallback(function (instance) {
    if (typeof ref === 'function') {
      ref(instance);
    } else if (ref) {
      ref.current = instance;
    }
    innerRef.current = instance;
  }, [ref]);
  useEffect(function () {
    if (autofocus) {
      var _innerRef$current;
      (_innerRef$current = innerRef.current) === null || _innerRef$current === void 0 || _innerRef$current.focus();
    }
  }, [autofocus]);
  var _useThemeConfiguratio3 = useThemeConfiguration(),
    controlsBackground = _useThemeConfiguratio3.controls.background,
    _useThemeConfiguratio4 = _useThemeConfiguratio3.textFields,
    _useThemeConfiguratio5 = _useThemeConfiguratio4.labelPosition,
    labelPosition = _useThemeConfiguratio5 === void 0 ? 'inside' : _useThemeConfiguratio5,
    textFieldsBackground = _useThemeConfiguratio4.background,
    _useThemeConfiguratio6 = _useThemeConfiguratio4.border,
    border = _useThemeConfiguratio6 === void 0 ? 'full' : _useThemeConfiguratio6,
    _useThemeConfiguratio7 = _useThemeConfiguratio4.borderColor,
    borderColor = _useThemeConfiguratio7 === void 0 ? 'base' : _useThemeConfiguratio7,
    _useThemeConfiguratio8 = _useThemeConfiguratio4.focusBorder,
    focusBorder = _useThemeConfiguratio8 === void 0 ? 'full' : _useThemeConfiguratio8,
    style = _useThemeConfiguratio4.typographyStyle,
    placeholderStyle = _useThemeConfiguratio3.label.typographyStyle;
  var background = textFieldsBackground || controlsBackground || 'surfaceTertiary';
  var labelled = useLabelled();
  var _usePartiallyControll = usePartiallyControlledState(controlledValue !== null && controlledValue !== void 0 ? controlledValue : explicitValue),
    _usePartiallyControll2 = _slicedToArray(_usePartiallyControll, 2),
    localValue = _usePartiallyControll2[0],
    setLocalValue = _usePartiallyControll2[1];
  var className = classNames(styles.Field, Boolean(error) && styles.hasError, Boolean(tooltip) && styles['Field-hasTooltip'], labelled.isFloating && labelPosition !== 'outside' && styles['Field-isFloating'], disabled && styles['Field-isDisabled'], readonly && styles['Field-isReadOnly'], styles[variationName('Field-background', background)], styles[variationName('Field-border', border)], styles[variationName('Field-borderColor', borderColor)], styles[variationName('Field-focusBorder', focusBorder)], style && typographyStyles[style], placeholderStyle && typographyStyles[variationName('placeholder', placeholderStyle)]);
  var finalDescribedBy = [ariaDescribedBy, error && errorId(id)].filter(Boolean).join(' ');
  var field = React.createElement(multiline ? 'textarea' : 'input', {
    id: id,
    min: min,
    max: max,
    step: step,
    name: name,
    placeholder: labelled.isFloating || labelPosition === 'outside' ? undefined : label,
    className: className,
    required: required,
    type: normalizeType(multiline ? undefined : type),
    disabled: disabled,
    readOnly: readonly,
    'aria-activedescendant': ariaActiveDescendant,
    'aria-autocomplete': ariaAutocomplete,
    'aria-controls': ariaControls,
    'aria-describedby': finalDescribedBy,
    'aria-expanded': ariaExpanded,
    'aria-invalid': Boolean(error),
    'aria-required': required,
    onBlur: function onBlur(_ref2) {
      var value = _ref2.currentTarget.value;
      var currentValue = explicitValue !== null && explicitValue !== void 0 ? explicitValue : '';
      if (value !== currentValue) onChange === null || onChange === void 0 || onChange(value);
      _onBlur === null || _onBlur === void 0 || _onBlur();
      labelled.onBlur();
    },
    onChange: function onChange(_ref3) {
      var value = _ref3.currentTarget.value;
      setLocalValue(value);
      onInput === null || onInput === void 0 || onInput(value);
      labelled.onChange(isEmptyString(value));
    },
    onFocus: function onFocus() {
      _onFocus === null || _onFocus === void 0 || _onFocus();
      labelled.onFocus();
    },
    onKeyDown: onKeyDown,
    ref: refsSetter,
    role: role,
    value: localValue,
    autoComplete: autocompleteToHtml(autocomplete),
    autofocus: autofocus
  });
  return field;
});
function usePartiallyControlledState(value) {
  var _useState = useState(value),
    _useState2 = _slicedToArray(_useState, 2),
    localValue = _useState2[0],
    setLocalValue = _useState2[1];
  var lastExplicitValue = useRef(value);
  var valueToReturn = localValue;
  if (lastExplicitValue.current !== value) {
    lastExplicitValue.current = value;
    setLocalValue(value);
    valueToReturn = value;
  }
  return [valueToReturn, setLocalValue];
}

// Takes the `type` we allow for a TextField props, and maps it to the
// valid type for an HTML input. Currently, the only difference is
// that we use the full word `telephone` instead of `tel`.
function normalizeType(type) {
  return type === 'telephone' ? 'tel' : type;
}