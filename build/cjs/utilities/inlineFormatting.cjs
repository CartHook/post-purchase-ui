import { useContext, createContext } from 'react';
export var InlineFormattingContext = createContext(false);
export function useInlineFormatting() {
  return useContext(InlineFormattingContext);
}