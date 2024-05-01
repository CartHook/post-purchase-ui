import React from 'react';
export function HiddenForAccessibility(_ref) {
  var children = _ref.children;
  return <span aria-hidden="true">{children}</span>;
}