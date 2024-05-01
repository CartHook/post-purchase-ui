import { useContext, createContext } from 'react';
export var ConnectedContext = createContext(false);
export function useConnected() {
  var connected = useContext(ConnectedContext);
  if (connected == null) {
    throw new Error('No connected fields found in context');
  }
  return connected;
}