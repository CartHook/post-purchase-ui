import React from 'react';
import { variationName, classNames } from '@shopify/css-utilities';
import { View } from '../View';
import { rem } from '../../utilities/units';
import styles from './Tiles.css';
export function Tiles(_ref) {
  var children = _ref.children,
    maxPerLine = _ref.maxPerLine,
    breakAt = _ref.breakAt,
    alignment = _ref.alignment,
    spacing = _ref.spacing;
  var className = classNames(styles.Tiles, spacing && styles[variationName('spacing', spacing)], alignment && styles[variationName('alignment', alignment)], maxPerLine ? undefined : styles.doesNotWrap, breakAt ? undefined : styles.doesNotBreak);
  var tileWidth = maxPerLine ? "".concat(100 / maxPerLine, "%") : undefined;
  var tileBreakPoint = breakAt ? rem(breakAt) : undefined;
  var style = {
    '--tile-width': tileWidth /* stylelint-disable-line value-keyword-case */,
    '--tiles-breakpoint': tileBreakPoint /* stylelint-disable-line value-keyword-case */
  };
  return /* View is to avoid problems with negative margins when nested inside other layouts */(
    <View>
      <div className={className} style={style}>
        {children}
      </div>
    </View>
  );
}