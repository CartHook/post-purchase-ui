function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
import React from 'react';
import { classNames, variationName } from '@shopify/css-utilities';
import { HiddenForAccessibility } from '../HiddenForAccessibility';
import styles from './Image.css';
export var MEDIA_MAP = new Map([['small', '(max-width: 600px)'], ['medium', '(max-width: 1200px)'], ['large', '(min-width: 1201px)']]);
export function Image(_ref) {
  var source = _ref.source,
    sources = _ref.sources,
    _ref$description = _ref.description,
    description = _ref$description === void 0 ? '' : _ref$description,
    fit = _ref.fit,
    bordered = _ref.bordered,
    loading = _ref.loading,
    aspectRatio = _ref.aspectRatio,
    decorative = _ref.decorative;
  var initialValue = [];
  var sourcesMarkup = sources && sources.reduce(function (sourcesProps, _ref2) {
    var source = _ref2.source,
      viewportSize = _ref2.viewportSize,
      resolution = _ref2.resolution;
    var media = viewportSize && MEDIA_MAP.get(viewportSize);
    var maybeSourceProps = sourcesProps.find(function (_ref3) {
      var mediaValue = _ref3.media;
      return media === mediaValue;
    });
    var srcSet = [source, resolution && "".concat(resolution, "x")].join(' ').trim();
    if (maybeSourceProps) {
      maybeSourceProps.srcSet += ", ".concat(srcSet);
      return sourcesProps;
    } else {
      return [].concat(_toConsumableArray(sourcesProps), [{
        media: media,
        srcSet: srcSet
      }]);
    }
  }, initialValue)
  // eslint-disable-next-line react/jsx-key
  .map(function (props) {
    return <source {...props} />;
  });
  var className = classNames(styles.Image, bordered && styles.bordered, fit && styles[variationName('fit', fit)]);
  return <MaybeHiddenForA11y condition={decorative === true}>
      <MaybeAspectRatio condition={aspectRatio != null} aspectRatio={aspectRatio}>
        <MaybePicture condition={sourcesMarkup != null}>
          {sourcesMarkup}
          <img src={source} alt={description} className={className} loading={loading} />
        </MaybePicture>
      </MaybeAspectRatio>
    </MaybeHiddenForA11y>;
}
function MaybeHiddenForA11y(_ref4) {
  var children = _ref4.children,
    condition = _ref4.condition;
  return condition ? <HiddenForAccessibility>{children}</HiddenForAccessibility> : <>{children}</>;
}
function MaybeAspectRatio(_ref5) {
  var children = _ref5.children,
    condition = _ref5.condition,
    aspectRatio = _ref5.aspectRatio;
  return condition ? <div className={styles.aspectRatio} style={{
    paddingBottom: "calc(100% / ".concat(aspectRatio, ")")
  }}>
      {children}
    </div> : <>{children}</>;
}
function MaybePicture(_ref6) {
  var children = _ref6.children,
    condition = _ref6.condition;
  return condition ? <picture>{children}</picture> : <>{children}</>;
}