/* eslint id-length: off */

import React, { useMemo } from 'react';
import { ThemeContext } from './context';
import { Canvas, CustomProperties, CustomPropertiesFallback, MaybeWebFonts } from './components';
export function Theme(_ref) {
  var children = _ref.children,
    theme = _ref.theme,
    shouldLoadFonts = _ref.shouldLoadFonts;
  var supportsCustomProperties = useSupportsCustomProperties();
  return <ThemeContext.Provider value={theme}>
      <MaybeWebFonts condition={Boolean(shouldLoadFonts)}>
        {supportsCustomProperties ? <CustomProperties>
            <Canvas>{children}</Canvas>
          </CustomProperties> : <>
            <CustomPropertiesFallback />
            <Canvas>{children}</Canvas>
          </>}
      </MaybeWebFonts>
    </ThemeContext.Provider>;
}

// TODO: if we ever do server rendering, this will need to be based on UA
// string on the server to avoid server/ client mismatches.
function useSupportsCustomProperties() {
  return useMemo(function () {
    return typeof CSS !== 'undefined' && CSS.supports('color', 'var(--test)');
  }, []);
}