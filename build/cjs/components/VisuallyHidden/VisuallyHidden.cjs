import React from 'react';
import styles from './VisuallyHidden.css';
export function VisuallyHidden(_ref) {
  var children = _ref.children;
  return <span className={styles.VisuallyHidden}>{children}</span>;
}
export function MaybeVisuallyHidden(_ref2) {
  var children = _ref2.children,
    condition = _ref2.condition;
  return condition ? <VisuallyHidden>{children}</VisuallyHidden> : <>{children}</>;
}