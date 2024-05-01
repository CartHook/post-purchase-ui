var _excluded = ["to", "language", "children", "onPress", "underline"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
import React from 'react';
import { classNames, variationName } from '@shopify/css-utilities';
import { Button } from '../Button';
import { useThemeConfiguration } from '../Theme';
import { UnstyledLink } from './components';
import styles from './Link.css';
/**
 * Link is used to navigate the buyer to another page or section within the same page.
 */
export function Link(_ref) {
  var to = _ref.to,
    language = _ref.language,
    children = _ref.children,
    onPress = _ref.onPress,
    underline = _ref.underline,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useThemeConfiguratio = useThemeConfiguration(),
    _useThemeConfiguratio2 = _useThemeConfiguratio.link,
    colorHovered = _useThemeConfiguratio2.colorHovered,
    colorPressed = _useThemeConfiguratio2.colorPressed;
  if (!to) {
    return <Button onPress={onPress} plain underline {...rest}>
        {children}
      </Button>;
  }
  return <UnstyledLink className={classNames(styles.Link, underline && styles.underline, colorHovered && styles[variationName('colorHovered', colorHovered)], colorPressed && styles[variationName('colorPressed', colorPressed)])} to={to} onPress={onPress} language={language} {...rest}>
      {children}
    </UnstyledLink>;
}