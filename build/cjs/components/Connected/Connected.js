import React from 'react';
import { classNames, variationName } from '@shopify/css-utilities';
import { ConnectedContext } from './hook';
import styles from './Connected.css';
/**
 * Connected groups inputs inline and maintains a consistent height across
 * inputs. It is commonly used for displaying a single-line TextField or Select
 * inline with a Button.
 */
export function Connected(_ref) {
  var children = _ref.children,
    spacing = _ref.spacing,
    leading = _ref.leading,
    trailing = _ref.trailing;
  return <ConnectedContext.Provider value>
      <div className={classNames(styles.Connected, leading && styles[variationName('leading', leading)], trailing && styles[variationName('trailing', trailing)], spacing && styles[variationName('spacing', spacing)])}>
        {children}
      </div>
    </ConnectedContext.Provider>;
}