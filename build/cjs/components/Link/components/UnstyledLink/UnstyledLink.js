import React from 'react';
import { useLinkComponent } from '../../../AppContext';
export function UnstyledLink(_ref) {
  var children = _ref.children,
    className = _ref.className,
    to = _ref.to,
    external = _ref.external,
    id = _ref.id,
    language = _ref.language,
    onPress = _ref.onPress;
  var LinkComponent = useLinkComponent();
  var handleClick = onPress && function () {
    return onPress();
  };
  if (LinkComponent) {
    return <LinkComponent to={to} onClick={handleClick} external={external} id={id} className={className} lang={language}>
        {children}
      </LinkComponent>;
  }
  var target = external ? '_blank' : undefined;
  var rel = external ? 'noopener noreferrer' : undefined;
  return <a href={to} onClick={handleClick} target={target} rel={rel} id={id} className={className} lang={language}>
      {children}
    </a>;
}