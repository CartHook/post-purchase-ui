function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
import React from 'react';
import { classNames, variationName } from '@shopify/css-utilities';
import { utilityDefaultTextColorSubdued, utilityDefaultTextColorEmphasized, utilityDefaultColorAccent } from '../../utilities/legacy';
import typographyStyles from '../../utilities/typography-styles.css';
import styles from './Text.css';
export function Text(_ref) {
  var children = _ref.children,
    size = _ref.size,
    emphasized = _ref.emphasized,
    subdued = _ref.subdued,
    appearance = _ref.appearance,
    role = _ref.role,
    style = _ref.style,
    id = _ref.id;
  var className = classNames(styles.Text, emphasized && styles.emphasized, emphasized && utilityDefaultTextColorEmphasized, subdued && styles.subdued, subdued && utilityDefaultTextColorSubdued, size && styles[variationName('size', size)], appearance && styles[variationName('appearance', appearance)], appearance && appearance === 'accent' && utilityDefaultColorAccent, style && typographyStyles[style]);
  var content = emphasized ? <strong>{children}</strong> : children;
  var defaultProps = {
    className: className,
    id: id
  };
  if (typeof role === 'string') {
    switch (role) {
      case 'address':
        return <address {...defaultProps}>{content}</address>;
      case 'deletion':
        return <del {...defaultProps}>{content}</del>;
      default:
        throw new Error('Invalid Text’s role');
    }
  }
  if (_typeof(role) === 'object') {
    switch (role.type) {
      case 'abbreviation':
        return <abbr {...{
          defaultProps: defaultProps,
          className: classNames(className, styles.Abbr)
        }} title={role["for"]}>
            {content}
          </abbr>;
      case 'directional-override':
        return <bdo {...defaultProps} dir={role.direction}>
            {content}
          </bdo>;
      case 'datetime':
        return <time {...defaultProps} dateTime={role.machineReadable}>
            {content}
          </time>;
      default:
        throw new Error('Invalid Text’s role');
    }
  }
  var Component = emphasized ? 'strong' : 'span';
  return <Component {...defaultProps}>{children}</Component>;
}