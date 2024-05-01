import React from 'react';
import { classNames, variationName } from '@shopify/css-utilities';
import { Heading } from '../Heading';
import { HeadingGroup } from '../HeadingGroup';
import { TextContainer } from '../TextContainer';
import { View } from '../View';
import styles from './CalloutBanner.css';
export function CalloutBanner(_ref) {
  var title = _ref.title,
    children = _ref.children,
    _ref$border = _ref.border,
    border = _ref$border === void 0 ? 'block' : _ref$border,
    _ref$background = _ref.background,
    background = _ref$background === void 0 ? 'secondary' : _ref$background,
    _ref$alignment = _ref.alignment,
    alignment = _ref$alignment === void 0 ? 'center' : _ref$alignment,
    _ref$spacing = _ref.spacing,
    spacing = _ref$spacing === void 0 ? 'tight' : _ref$spacing;
  var titleMarkup = title && <Heading level={3}>{title}</Heading>;
  return <div className={classNames(styles.CalloutBanner, border && styles[variationName('border', border)], background && styles[variationName('background', background)])} role="status" aria-atomic="true" aria-live="polite">
      <TextContainer alignment={alignment === 'leading' ? undefined : alignment} spacing={spacing}>
        <HeadingGroup>
          {titleMarkup}
          <View>{children}</View>
        </HeadingGroup>
      </TextContainer>
    </div>;
}