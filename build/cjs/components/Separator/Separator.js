import React from 'react';
import { classNames, variationName } from '@shopify/css-utilities';
import styles from './Separator.css';
var WIDTH_MAP = {
  thin: '1px',
  medium: '3px',
  thick: '5px',
  xthick: '10px'
};
export function Separator(_ref) {
  var _ref$width = _ref.width,
    width = _ref$width === void 0 ? 'thin' : _ref$width,
    _ref$direction = _ref.direction,
    direction = _ref$direction === void 0 ? 'horizontal' : _ref$direction;
  var border = {
    horizontal: {
      borderBottomWidth: WIDTH_MAP[width]
    },
    vertical: {
      borderRightWidth: WIDTH_MAP[width]
    }
  };
  return <div className={classNames(styles.Separator, styles[variationName('direction', direction)])} style={border[direction]} />;
}