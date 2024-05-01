function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
import React from 'react';
import { classNames, variationName } from '@shopify/css-utilities';
import { pixelOrPercent } from '../../utilities/units';
import { createIdCreator } from '../../utilities/id';
import styles from './Layout.css';
var MEDIAQUERY_MAP = new Map([['small', '@media all and (max-width: 749px)'], ['medium', '@media all and (min-width: 750px) and (max-width: 1199px)'], ['large', '@media all and (min-width: 1200px)']]);
var createId = createIdCreator('Layout');
export function Layout(_ref) {
  var inlineAlignment = _ref.inlineAlignment,
    blockAlignment = _ref.blockAlignment,
    maxInlineSize = _ref.maxInlineSize,
    sizes = _ref.sizes,
    media = _ref.media,
    children = _ref.children;
  var uniqueClassName = createId();
  var CSSSelector = ".".concat(uniqueClassName, " > .").concat(styles.LayoutInner);
  var layoutClassName = classNames(styles.Layout, uniqueClassName, blockAlignment && styles[variationName('blockAlignment', blockAlignment)], inlineAlignment && styles[variationName('inlineAlignment', inlineAlignment)]);
  var layoutInnerClassName = classNames(styles.LayoutInner, inlineAlignment && styles[variationName('LayoutInner-inlineAlignment', inlineAlignment)]);
  var defaults = {
    viewportSize: 'default',
    sizes: sizes,
    maxInlineSize: maxInlineSize
  };
  var layoutStyles = media ? generateMediaStyles(CSSSelector, [defaults].concat(_toConsumableArray(media))) : generateMediaStyles(CSSSelector, [defaults]);
  return <>
      <div className={layoutClassName}>
        <style>{layoutStyles}</style>
        <div className={layoutInnerClassName}>{children}</div>
      </div>
    </>;
}
function generateSizesStyles(selector, sizes) {
  return sizes.reduce(function (acc, basicSize, index) {
    var canGrow = basicSize === 'fill';
    var canShrink = typeof basicSize !== 'number';
    var size = typeof basicSize === 'number' ? pixelOrPercent(basicSize) : 'auto';
    var inlineStyles = "\n        ".concat(selector, " > :nth-child(").concat(index + 1, ") {\n          flex: ").concat(canGrow ? '1' : '0', " ").concat(canShrink ? '1' : '0', " ").concat(size, ";\n          max-width: ").concat(size, ";\n        }\n      ");
    return [acc, inlineStyles].join(' ');
  }, '');
}
function generateMediaStyles(selector, media) {
  return media.reduce(function (acc, _ref2) {
    var viewportSize = _ref2.viewportSize,
      maxInlineSize = _ref2.maxInlineSize,
      sizes = _ref2.sizes;
    var sizesStyles = sizes && generateSizesStyles(selector, sizes);
    var wrappingStyles = sizes !== null && sizes !== void 0 && sizes.includes(1) ? "".concat(selector, " { flex-wrap: wrap; }") : '';
    var maxInlineSizeStyles = maxInlineSize ? "".concat(selector, " { max-width: ").concat(pixelOrPercent(maxInlineSize), "; }") : '';
    var mediaStyles = [sizesStyles, wrappingStyles, maxInlineSizeStyles];
    var inlineStyles = viewportSize === 'default' || typeof MEDIAQUERY_MAP.get(viewportSize) === 'undefined' ? mediaStyles : [MEDIAQUERY_MAP.get(viewportSize), '{'].concat(mediaStyles, ['}']);
    return [acc].concat(_toConsumableArray(inlineStyles)).join(' ');
  }, '');
}