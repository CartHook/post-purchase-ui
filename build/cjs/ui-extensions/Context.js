import React, { useMemo } from 'react';
import '../style.css';
import { AppContext, Theme, createTheme } from '../components';
var defaultTranslate = function defaultTranslate(key) {
  switch (key) {
    case 'processing':
      return 'Processing';
    case 'submit':
      return 'Submit';
    case 'close':
      return 'Close';
    default:
      return '';
  }
};
export function Context(_ref) {
  var children = _ref.children,
    linkComponent = _ref.linkComponent,
    explicitTranslate = _ref.translate,
    explicitTheme = _ref.theme;
  var theme = useMemo(function () {
    return explicitTheme !== null && explicitTheme !== void 0 ? explicitTheme : createTheme();
  }, [explicitTheme]);
  var translate = useMemo(function () {
    return explicitTranslate !== null && explicitTranslate !== void 0 ? explicitTranslate : defaultTranslate;
  }, [explicitTranslate]);
  return <AppContext translate={translate} linkComponent={linkComponent}>
      <Theme theme={theme}>{children}</Theme>
    </AppContext>;
}