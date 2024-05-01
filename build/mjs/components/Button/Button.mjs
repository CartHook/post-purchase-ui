import React, { forwardRef, useCallback } from 'react';
import { classNames, variationName } from '@shopify/css-utilities';
import { useTranslate } from '../AppContext';
import { useTransition } from '../../utilities/transition';
import { Spinner } from '../Spinner';
import { UnstyledLink } from '../Link';
import { button as legacyButtonClassName } from '../../utilities/legacy';
import { usePrefersReducedMotion } from '../../utilities/media-query';
import { useConnected } from '../Connected';
import { useThemeConfiguration } from '../Theme';
import typographyStyles from '../../utilities/typography-styles.css';
import styles from './Button.css';
export var Button = forwardRef(function Button(_ref, ref) {
  var children = _ref.children,
    _ref$submit = _ref.submit,
    submit = _ref$submit === void 0 ? false : _ref$submit,
    disabled = _ref.disabled,
    onPress = _ref.onPress,
    to = _ref.to,
    subdued = _ref.subdued,
    plain = _ref.plain,
    secondary = _ref.secondary,
    tertiary = _ref.tertiary,
    _ref$loading = _ref.loading,
    loading = _ref$loading === void 0 ? false : _ref$loading,
    _ref$fill = _ref.fill,
    fill = _ref$fill === void 0 ? false : _ref$fill,
    loadingLabel = _ref.loadingLabel,
    underline = _ref.underline;
  var href = disabled ? undefined : to;
  var onClick = disabled ? undefined : function () {
    return onPress === null || onPress === void 0 ? void 0 : onPress();
  };
  var refsSetter = useCallback(function (instance) {
    if (typeof ref === 'function') {
      ref(instance);
    } else if (ref) {
      ref.current = instance;
    }
  }, [ref]);
  var translate = useTranslate();
  var prefersReducedMotion = usePrefersReducedMotion();
  var transition = useTransition(loading, {
    enter: 'slow'
  });
  var connected = useConnected();
  var _useThemeConfiguratio = useThemeConfiguration(),
    _useThemeConfiguratio2 = _useThemeConfiguratio.primaryButton,
    primaryStyle = _useThemeConfiguratio2.typographyStyle,
    _useThemeConfiguratio3 = _useThemeConfiguratio2.loadingStyle,
    primaryLoading = _useThemeConfiguratio3 === void 0 ? 'spinner' : _useThemeConfiguratio3,
    _useThemeConfiguratio4 = _useThemeConfiguratio.secondaryButton,
    secondaryStyle = _useThemeConfiguratio4.typographyStyle,
    _useThemeConfiguratio5 = _useThemeConfiguratio4.loadingStyle,
    secondaryLoading = _useThemeConfiguratio5 === void 0 ? 'spinner' : _useThemeConfiguratio5,
    _useThemeConfiguratio6 = _useThemeConfiguratio.link,
    colorHovered = _useThemeConfiguratio6.colorHovered,
    colorPressed = _useThemeConfiguratio6.colorPressed;
  var loadingStyle = secondary ? secondaryLoading : primaryLoading;
  var classes = classNames(styles.Button, legacyButtonClassName, subdued && styles.subdued, plain && styles.plain, plain && colorHovered && styles[variationName('colorHovered', colorHovered)], plain && colorPressed && styles[variationName('colorPressed', colorPressed)], plain && underline && styles.underline, disabled && styles.disabled, loading && loadingStyle === 'spinner' && styles.loading, fill && styles.fill, loading && loadingStyle === 'spinner' && styles[variationName('loading-transition', transition)], connected && styles.connected, secondary && styles.secondary, tertiary && styles.tertiary, loading && loadingStyle === 'progressBar' && styles[loadingStyle]);
  var normalizedLoadingLabel = loadingLabel ? loadingLabel : translate('processing');
  var contentTypography = secondary ? secondaryStyle && typographyStyles[secondaryStyle] : primaryStyle && typographyStyles[primaryStyle];
  var contentClassNames = classNames(styles.Content, !plain && contentTypography);
  var content = <span className={contentClassNames}>
      {loading && loadingStyle === 'progressBar' && prefersReducedMotion ? normalizedLoadingLabel : children}
    </span>;
  var type = submit ? 'submit' : 'button';
  var loadingMarkup = <span className={classNames(styles.LoadingContent, !prefersReducedMotion && styles.Spinner)}>
      <Spinner size="small" color="inherit">
        {normalizedLoadingLabel}
      </Spinner>
    </span>;
  if (href) {
    return <UnstyledLink to={href} className={classes} onPress={onPress} aria-busy={loading} aria-live={loading ? 'assertive' : 'polite'}>
        {content}
        {loading && loadingStyle === 'spinner' && loadingMarkup}
      </UnstyledLink>;
  }
  return <button type={type} className={classes} disabled={disabled || loading} onClick={onClick} aria-busy={loading} aria-live={loading ? 'assertive' : 'polite'} ref={refsSetter}>
      {content}
      {loading && loadingStyle === 'spinner' && loadingMarkup}
    </button>;
});