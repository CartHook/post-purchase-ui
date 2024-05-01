import React, { createContext, useMemo, useContext } from 'react';
import { HeadingGroup } from '../HeadingGroup';
export var AppContextContext = createContext(null);
export function AppContext(_ref) {
  var children = _ref.children,
    translate = _ref.translate,
    linkComponent = _ref.linkComponent;
  var context = useMemo(function () {
    return {
      translate: translate,
      linkComponent: linkComponent
    };
  }, [translate, linkComponent]);
  return <AppContextContext.Provider value={context}>
      <HeadingGroup>{children}</HeadingGroup>
    </AppContextContext.Provider>;
}
export function useAppContext() {
  var context = useContext(AppContextContext);
  if (context == null) {
    throw new Error('No app context available');
  }
  return context;
}
export function useTranslate() {
  return useAppContext().translate;
}
export function useLinkComponent() {
  return useAppContext().linkComponent;
}