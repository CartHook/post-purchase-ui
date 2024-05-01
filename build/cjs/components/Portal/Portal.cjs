function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { createIdCreator, useId } from '../../utilities/id';
import styles from './Portal.css';
var PORTAL_HOST_ID = 'PortalHost';
var createId = createIdCreator('Portal');
export function PortalHost() {
  return <div id={PORTAL_HOST_ID} />;
}
export function Portal(_ref) {
  var children = _ref.children;
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    node = _useState2[0],
    setNode = _useState2[1];
  var id = useId(undefined, createId);
  useEffect(function () {
    var _document$getElementB;
    var portal = (_document$getElementB = document.getElementById(PORTAL_HOST_ID)) !== null && _document$getElementB !== void 0 ? _document$getElementB : document.body;
    var node = document.createElement('div');
    node.setAttribute('id', id);
    node.setAttribute('class', styles.Portal);
    portal.appendChild(node);
    setNode(node);
    return function () {
      portal.removeChild(node);
    };
  }, [id]);
  return node && createPortal(children, node);
}