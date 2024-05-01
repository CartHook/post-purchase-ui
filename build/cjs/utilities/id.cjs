import { useRef } from 'react';
export function createIdCreator(prefix) {
  var index = 0;
  return function () {
    return "".concat(prefix).concat(index++);
  };
}
export function useId(explicitId, createId) {
  var _ref;
  var idRef = useRef(explicitId);
  idRef.current = (_ref = explicitId !== null && explicitId !== void 0 ? explicitId : idRef.current) !== null && _ref !== void 0 ? _ref : createId();
  return idRef.current;
}