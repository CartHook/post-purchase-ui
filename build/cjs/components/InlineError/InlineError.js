import React from 'react';
import { errorId } from '../../utilities/errors';
import styles from './InlineError.css';
export function InlineError(_ref) {
  var children = _ref.children,
    controlID = _ref.controlID;
  return <p className={styles.InlineError} id={controlID ? errorId(controlID) : undefined}>
      {children}
    </p>;
}