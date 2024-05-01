import React, { useRef, useLayoutEffect } from 'react';
import { findFirstFocusableNode, findLastFocusableNode } from '../../utilities/focus';
import styles from './FocusTrap.css';
export var FocusTrap = function FocusTrap(_ref) {
  var children = _ref.children,
    onContainerFocus = _ref.onContainerFocus;
  var firstBumperRef = useRef(null);
  var lastBumperRef = useRef(null);
  var contentRef = useRef(null);
  useLayoutEffect(function () {
    var _contentRef$current;
    (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0 || _contentRef$current.focus({
      preventScroll: true
    });
  }, []);
  var moveFocus = function moveFocus(forward) {
    var content = contentRef.current;
    if (content) {
      var focusableNode = forward ? findFirstFocusableNode(content) : findLastFocusableNode(content);
      focusableNode ? focusableNode.focus() : content.focus();
    }
  };
  return <>
      <button className={styles.Bumper} ref={firstBumperRef} aria-hidden="true" onFocus={function () {
      return moveFocus(false);
    }} />

      {React.cloneElement(children, {
      tabIndex: -1,
      ref: contentRef,
      onFocus: onContainerFocus
    })}

      <button className={styles.Bumper} ref={lastBumperRef} aria-hidden="true" onFocus={function () {
      return moveFocus(true);
    }} />
    </>;
};