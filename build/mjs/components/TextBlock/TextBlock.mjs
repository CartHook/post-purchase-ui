import React from 'react';
import { classNames, variationName } from '@shopify/css-utilities';
import { utilityDefaultTextColorSubdued, utilityDefaultTextColorEmphasized, utilityDefaultColorAccent } from '../../utilities/legacy';
import typographyStyles from '../../utilities/typography-styles.css';
import { InlineFormattingContext } from '../../utilities/inlineFormatting';
import styles from './TextBlock.css';
export function TextBlock(_ref) {
  var children = _ref.children,
    size = _ref.size,
    emphasized = _ref.emphasized,
    subdued = _ref.subdued,
    appearance = _ref.appearance,
    style = _ref.style,
    id = _ref.id;
  var className = classNames(styles.TextBlock, size && styles[variationName('size', size)], emphasized && styles.emphasized, emphasized && utilityDefaultTextColorEmphasized, subdued && styles.subdued, subdued && utilityDefaultTextColorSubdued, appearance && styles[variationName('appearance', appearance)], appearance && appearance === 'accent' && utilityDefaultColorAccent, style && typographyStyles[style]);
  var content = emphasized ? <strong>{children}</strong> : children;
  return <InlineFormattingContext.Provider value>
      <p className={className} id={id}>
        {content}
      </p>
    </InlineFormattingContext.Provider>;
}