import React, { memo, useRef, useMemo, useEffect } from 'react';
import { useTheme } from '../../hooks';
export var CustomProperties = memo(function CustomProperties(_ref) {
  var children = _ref.children;
  var theme = useTheme();
  var divRef = useRef(null);
  var customPropertiesStyle = useMemo(function () {
    return customPropertiesToStyleProp(theme.customProperties);
  }, [theme]);
  useEffect(function () {
    return theme.on('preview', function (customProperties) {
      var root = divRef.current;
      if (root == null) return;
      var normalized = customPropertiesToStyleProp(customProperties);
      for (var _i = 0, _Object$keys = Object.keys(normalized); _i < _Object$keys.length; _i++) {
        var property = _Object$keys[_i];
        root.style.setProperty(property, normalized[property]);
      }
    });
  }, [theme]);
  return <div style={customPropertiesStyle} ref={divRef}>
      {children}
    </div>;
});
function customPropertiesToStyleProp(properties) {
  var normalized = {};
  for (var _i2 = 0, _arr = Object.keys(properties); _i2 < _arr.length; _i2++) {
    var key = _arr[_i2];
    normalized["--x-pp-".concat(key.replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase())] = properties[key];
  }
  return normalized;
}