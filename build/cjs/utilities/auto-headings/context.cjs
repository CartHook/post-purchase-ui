import { createContext, useContext } from 'react';
export var AutoHeadingContext = createContext(undefined);
export function useAutoHeadingLevel() {
  return useContext(AutoHeadingContext);
}