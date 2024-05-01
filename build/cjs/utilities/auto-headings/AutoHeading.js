var _excluded = ["accessibilityRole"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
import React from 'react';
import { useAutoHeadingLevel } from './context';
export function AutoHeading(_ref) {
  var accessibilityRole = _ref.accessibilityRole,
    props = _objectWithoutProperties(_ref, _excluded);
  var level = useAutoHeadingLevel();
  var Element = level == null || accessibilityRole === 'presentation' ? 'p' : "h".concat(level);
  return <Element {...props} />;
}