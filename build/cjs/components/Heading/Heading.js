import React from 'react';
import { classNames, variationName } from '@shopify/css-utilities';
import { useAutoHeadingLevel } from '../../utilities/auto-headings';
import { useThemeConfiguration } from '../Theme';
import { utilityDefaultTextColorEmphasized } from '../../utilities/legacy';
import typographyStyles from '../../utilities/typography-styles.css';
import styles from './Heading.css';
export function Heading(_ref) {
  var _ref2;
  var id = _ref.id,
    children = _ref.children,
    role = _ref.role,
    explicitLevel = _ref.level;
  var _useThemeConfiguratio = useThemeConfiguration(),
    headingLevel1 = _useThemeConfiguratio.headingLevel1,
    headingLevel2 = _useThemeConfiguratio.headingLevel2,
    headingLevel3 = _useThemeConfiguratio.headingLevel3;
  var semanticLevel = useAutoHeadingLevel();
  var visualLevel = (_ref2 = explicitLevel !== null && explicitLevel !== void 0 ? explicitLevel : semanticLevel) !== null && _ref2 !== void 0 ? _ref2 : 0;
  var Element = role === 'presentation' || semanticLevel == null ? 'p' : "h".concat(semanticLevel);
  var className = classNames(styles.Heading, visualLevel && styles[variationName('h', visualLevel)], visualLevel >= 2 && utilityDefaultTextColorEmphasized, visualLevel === 1 && headingLevel1.typographyStyle && typographyStyles[headingLevel1.typographyStyle], visualLevel === 2 && headingLevel2.typographyStyle && typographyStyles[headingLevel2.typographyStyle], visualLevel === 3 && headingLevel3.typographyStyle && typographyStyles[headingLevel3.typographyStyle]);
  return <Element id={id} tabIndex={id ? -1 : undefined} className={className}>
      {children}
    </Element>;
}