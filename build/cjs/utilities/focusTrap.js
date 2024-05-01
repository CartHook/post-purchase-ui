import { useEffect, useCallback, useRef } from 'react';
var FOCUSABLE_ELEMENTS = "\n  a[href],\n  area[href],\n  input:not([type=\"hidden\"]):not([disabled]):not([tabindex=\"-1\"]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]):not([tabindex=\"-1\"]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls]";
export function useFocusTrap() {
  var ref = useRef(null);
  var findFocusableElements = useCallback(function (ref) {
    var _ref$current;
    var focusableElements = ref === null || ref === void 0 || (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.querySelectorAll(FOCUSABLE_ELEMENTS);
    if (focusableElements && focusableElements.length > 0) {
      var firstElement = focusableElements[0],
        lastElement = focusableElements[focusableElements.length - 1];
      return {
        firstElement: firstElement,
        lastElement: lastElement
      };
    }
    return {
      firstElement: null,
      lastElement: null
    };
  }, []);
  var setRef = useCallback(function (node) {
    if (node) {
      if (!ref.current) {
        ref.current = node;
        setTimeout(function () {
          var _ref$current2;
          ref === null || ref === void 0 || (_ref$current2 = ref.current) === null || _ref$current2 === void 0 || _ref$current2.focus();
        });
      }
    } else {
      ref.current = null;
    }
  }, []);
  useEffect(function () {
    var handleKeyDown = function handleKeyDown(event) {
      var _findFocusableElement = findFocusableElements(ref),
        firstElement = _findFocusableElement.firstElement,
        lastElement = _findFocusableElement.lastElement;
      switch (event.key) {
        case 'Tab':
          if (event.shiftKey) {
            if (lastElement && document.activeElement === firstElement) {
              event.preventDefault();
              lastElement.focus();
            }
          } else if (!event.shiftKey) {
            if (firstElement && document.activeElement === lastElement) {
              event.preventDefault();
              firstElement.focus();
            }
          }
          break;
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return function () {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [findFocusableElements]);
  return setRef;
}