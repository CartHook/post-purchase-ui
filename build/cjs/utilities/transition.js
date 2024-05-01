function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { useState, useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from './media-query';

// Following implementation from React Transition Group
// @see http://reactcommunity.org/react-transition-group/transition

export var durations = new Map([['none', 0], ['fast', 100], ['base', 200], ['slow', 300], ['slower', 400], ['slowest', 500]]);
export function useTransition(transitionIn) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'slow';
  var transitionOnMount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var _useState = useState(transitionOnMount ? false : transitionIn),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    transitioning = _useState4[0],
    setTransitioning = _useState4[1];
  var transitionInRef = useRef(transitionOnMount ? false : transitionIn);
  var endTransitionRef = useRef(function () {
    setTransitioning(false);
    setState(transitionInRef.current);
  });
  var prefersReducedMotion = usePrefersReducedMotion();
  useEffect(function () {
    var _enterDuration, _exitDuration;
    if (transitionIn !== transitionInRef.current) setTransitioning(true);
    transitionInRef.current = transitionIn;
    var enterDuration = typeof duration === 'string' ? duration : duration.enter;
    var exitDuration = typeof duration === 'string' ? duration : duration.exit;
    if (prefersReducedMotion) {
      enterDuration = 'none';
      exitDuration = 'none';
    }
    var timeout = setTimeout(endTransitionRef.current, transitionIn ? durations.get((_enterDuration = enterDuration) !== null && _enterDuration !== void 0 ? _enterDuration : 'none') : durations.get((_exitDuration = exitDuration) !== null && _exitDuration !== void 0 ? _exitDuration : 'none'));
    return function () {
      clearTimeout(timeout);
    };
  }, [duration, prefersReducedMotion, transitionIn]);
  if (transitioning) {
    return transitionIn ? 'entering' : 'exiting';
  }
  if (transitionIn === state) {
    return transitionIn ? 'entered' : 'exited';
  }
  return transitionIn ? 'enter' : 'exit';
}