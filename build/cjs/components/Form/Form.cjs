import React from 'react';
import { useTranslate } from '../AppContext';
import { VisuallyHidden } from '../VisuallyHidden';
import styles from './Form.css';
export function Form(_ref) {
  var onSubmit = _ref.onSubmit,
    children = _ref.children,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$implicitSubmit = _ref.implicitSubmit,
    implicitSubmit = _ref$implicitSubmit === void 0 ? true : _ref$implicitSubmit;
  var t = useTranslate();
  var implicitSubmitContent = implicitSubmit === false ? null : <VisuallyHidden>
        <button type="submit" disabled={disabled} tabIndex={-1} aria-hidden>
          {typeof implicitSubmit === 'string' ? implicitSubmit : t('submit')}
        </button>
      </VisuallyHidden>;
  return <form action="" method="POST" noValidate onSubmit={function (event) {
    if (disabled) return;
    event.preventDefault();
    onSubmit();
  }} className={styles.Form}>
      {children}
      {implicitSubmitContent}
    </form>;
}