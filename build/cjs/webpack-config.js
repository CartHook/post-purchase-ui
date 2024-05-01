function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* eslint @typescript-eslint/no-var-requires: off */

import * as path from 'path';
var SVG_ICONS_PATH_REGEX = /icons\/.*\.svg$/;
var IMAGE_PATH_REGEX = /\.(jpe?g|png|gif|svg)$/;
var LIBRARY_REGEX = /node_modules\/@shopify\/post-purchase-ui-react/;
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var _require = require('@shopify/webpack-ignore-typescript-export-warnings-plugin'),
  IgnoreTypeScriptExportWarnings = _require.IgnoreTypeScriptExportWarnings;
var postcssPresetEnv = require('postcss-preset-env');
var postcssFunctions = require('postcss-functions');
var postcssLogical = require('postcss-logical');
var postcssDirPseudoClass = require('postcss-dir-pseudo-class');
export function addWebpackConfig(config) {
  var _config$resolve$exten, _config$resolve, _ref2, _config$resolve2, _config$resolve3, _config$module$rules, _config$module, _config$plugins;
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref$preact = _ref.preact,
    preact = _ref$preact === void 0 ? true : _ref$preact,
    _ref$development = _ref.development,
    development = _ref$development === void 0 ? process.env.NODE_ENV === 'development' : _ref$development;
  return _objectSpread(_objectSpread({}, config), {}, {
    resolve: _objectSpread(_objectSpread({}, config.resolve), {}, {
      // Adds .esnext extensions, which this library uses for optimized build
      // outputs
      extensions: ['.esnext'].concat(_toConsumableArray((_config$resolve$exten = (_config$resolve = config.resolve) === null || _config$resolve === void 0 ? void 0 : _config$resolve.extensions) !== null && _config$resolve$exten !== void 0 ? _config$resolve$exten : ['.mjs', '.js', '.json'])),
      mainFields: ['esnext'].concat(_toConsumableArray((_ref2 = (_config$resolve2 = config.resolve) === null || _config$resolve2 === void 0 ? void 0 : _config$resolve2.mainFields) !== null && _ref2 !== void 0 ? _ref2 : ['browser', 'module', 'main'])),
      alias: _objectSpread(_objectSpread({}, (_config$resolve3 = config.resolve) === null || _config$resolve3 === void 0 ? void 0 : _config$resolve3.alias), preact ? {
        react: 'preact/compat',
        'react-dom': 'preact/compat'
      } : {})
    }),
    module: _objectSpread(_objectSpread({}, config.module), {}, {
      rules: [].concat(_toConsumableArray((_config$module$rules = (_config$module = config.module) === null || _config$module === void 0 ? void 0 : _config$module.rules) !== null && _config$module$rules !== void 0 ? _config$module$rules : []), [{
        test: /\.esnext$/,
        include: LIBRARY_REGEX,
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            configFile: false,
            sourceType: 'unambiguous',
            presets: [['@babel/preset-env', {
              modules: false,
              corejs: 3,
              useBuiltIns: 'usage'
            }]]
          }
        }
      }, {
        test: /\.css$/,
        include: LIBRARY_REGEX,
        use: [development ? {
          loader: require.resolve('style-loader')
        } : {
          loader: MiniCssExtractPlugin.loader,
          options: {
            esModule: true
          }
        }, {
          loader: require.resolve('css-loader'),
          options: {
            esModule: true,
            modules: {
              localIdentName: development ? '[name]-[local]_[hash:base64:5]' : '[hash:base64:5]'
            },
            importLoaders: 1,
            sourceMap: !development,
            onlyLocals: false
          }
        }, {
          loader: require.resolve('postcss-loader'),
          options: {
            ident: 'postcss-checkout-ui',
            plugins: function plugins() {
              return [
              // @see https://github.com/csstools/postcss-preset-env
              postcssPresetEnv({
                stage: 3,
                autoprefixer: {
                  grid: true
                },
                importFrom: [path.join(path.dirname(require.resolve('@shopify/post-purchase-ui-react')), 'src/style.css')],
                preserve: true,
                // @see https://preset-env.cssdb.org/features
                // @see https://github.com/csstools/postcss-preset-env/blob/master/src/lib/plugins-by-id.js#L36
                features: {
                  'nesting-rules': true,
                  'dir-pseudo-class': false,
                  'logical-properties-and-values': false
                }
              }),
              // PostCSS Preset Env uses caniuse to determine whether the plugins should run or not
              // There are currently false positives that cause PostCSS Logical not to run, so we run it independently for now
              // @see https://github.com/csstools/postcss-preset-env/issues/138
              postcssLogical({
                preserve: true
              }), postcssDirPseudoClass({
                preserve: true
              }), postcssFunctions({
                functions: {
                  rem: function rem(target) {
                    var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '10px';
                    if (target.includes('px')) {
                      return "".concat(parseFloat(target) / parseFloat(root), "rem");
                    } else {
                      throw new Error('Value must be in pixels.');
                    }
                  },
                  em: function em(target) {
                    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '14px';
                    if (target.includes('px')) {
                      return "".concat(parseFloat(target) / parseFloat(parent), "em");
                    } else {
                      throw new Error('Value must be in pixels.');
                    }
                  }
                }
              })];
            }
          }
        }]
      }, {
        include: LIBRARY_REGEX,
        test: function test(resource) {
          return SVG_ICONS_PATH_REGEX.test(resource);
        },
        use: [require.resolve('@svgr/webpack')]
      }, {
        include: LIBRARY_REGEX,
        test: function test(resource) {
          return IMAGE_PATH_REGEX.test(resource) && !SVG_ICONS_PATH_REGEX.test(resource);
        },
        use: [{
          loader: require.resolve('file-loader'),
          options: {
            emitFile: true
          }
        }, !development && {
          loader: require.resolve('image-webpack-loader')
        }].filter(Boolean)
      }])
    }),
    plugins: [].concat(_toConsumableArray((_config$plugins = config.plugins) !== null && _config$plugins !== void 0 ? _config$plugins : []), [new IgnoreTypeScriptExportWarnings(), !hasMiniCssExtractPlugin(config) && new MiniCssExtractPlugin()]).filter(Boolean)
  });
}
function hasMiniCssExtractPlugin(config) {
  if (!config.plugins) {
    return false;
  }
  return config.plugins.some(function (plugin) {
    return plugin instanceof MiniCssExtractPlugin;
  });
}