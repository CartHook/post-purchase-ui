function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
export function isFocused(element) {
  return document.activeElement === element;
}
export var FOCUSABLE_SELECTOR = "\n  a[href],\n  area[href],\n  input:not([type=\"hidden\"]):not([disabled]):not([tabindex=\"-1\"]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]):not([tabindex=\"-1\"]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls]";

/* https://github.com/Shopify/javascript-utilities/blob/master/src/focus.ts */
export function findFirstFocusableNode(element) {
  var onlyDescendants = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (!onlyDescendants && element.matches(FOCUSABLE_SELECTOR)) {
    return element;
  }
  return element.querySelector(FOCUSABLE_SELECTOR);
}
export function findLastFocusableNode(element) {
  var onlyDescendants = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (!onlyDescendants && element.matches(FOCUSABLE_SELECTOR)) {
    return element;
  }
  var allFocusable = element.querySelectorAll(FOCUSABLE_SELECTOR);
  return allFocusable[allFocusable.length - 1];
}
export function findNextFocusableNode(node) {
  var allFocusableElements = _toConsumableArray(document.querySelectorAll(FOCUSABLE_SELECTOR));
  var nodeIndex = allFocusableElements.findIndex(function (currentNode) {
    return node === currentNode;
  });
  if (nodeIndex) {
    return allFocusableElements[nodeIndex + 1];
  }
  return null;
}