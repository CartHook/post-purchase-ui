import React from 'react';
import { createMount } from '@quilted/react-testing/dom';
import { ThemeContext, createTheme, AppContext } from '../components';
var defaultTranslate = function defaultTranslate() {
  return 'NO_TRANSLATIONS_PROVIDED';
};
export var mountWithContext = createMount({
  context: function context(_ref) {
    var _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? createTheme() : _ref$theme;
    return {
      theme: theme
    };
  },
  render: function render(element, _ref2, _ref3) {
    var theme = _ref2.theme;
    var _ref3$translate = _ref3.translate,
      translate = _ref3$translate === void 0 ? defaultTranslate : _ref3$translate,
      linkComponent = _ref3.linkComponent;
    return <AppContext translate={translate} linkComponent={linkComponent}>
        <ThemeContext.Provider value={theme}>{element}</ThemeContext.Provider>
      </AppContext>;
  }
});