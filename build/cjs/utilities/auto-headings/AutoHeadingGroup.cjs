import React from 'react';
import { AutoHeadingContext, useAutoHeadingLevel } from './context';
export function AutoHeadingGroup(_ref) {
  var children = _ref.children,
    explicitLevel = _ref.level;
  var currentLevel = useAutoHeadingLevel();
  if (currentLevel != null && explicitLevel != null && explicitLevel > currentLevel) {
    throw new Error("You are trying to nest a heading group with level ".concat(explicitLevel, " inside a context where the current heading level is ").concat(currentLevel, ". This will create a broken document outline."));
  }
  var level = explicitLevel !== null && explicitLevel !== void 0 ? explicitLevel : (currentLevel !== null && currentLevel !== void 0 ? currentLevel : 0) + 1;
  return <AutoHeadingContext.Provider value={level}>
      {children}
    </AutoHeadingContext.Provider>;
}