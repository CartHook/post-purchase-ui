function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React from 'react';
import faker from 'faker';
import { mountWithContext } from '../../test-utilities';
import { Heading } from '../Heading';
import { Modal } from './Modal';
var Child = function Child() {
  return <div />;
};
describe('<Modal />', function () {
  var defaultProps = {
    title: faker.random.words(2),
    children: <Child />,
    open: true,
    onClose: function onClose() {}
  };
  var defaultPropsWithSource = _objectSpread(_objectSpread({}, defaultProps), {}, {
    children: undefined,
    source: faker.internet.url()
  });
  var defaultPropsWithBlocking = _objectSpread(_objectSpread({}, defaultProps), {}, {
    onClose: undefined
  });
  describe('open prop', function () {
    it('renders the modal when the open prop is true', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var modal;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return mountWithContext(<Modal {...defaultProps} />);
          case 2:
            modal = _context.sent;
            expect(modal).toContainReactComponent(Child);
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    })));
    it("doesn't render the modal when the open prop is false", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var modal;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return mountWithContext(<Modal {...defaultProps} open={false} />);
          case 2:
            modal = _context2.sent;
            expect(modal).not.toContainReactComponent(Child);
          case 4:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    })));
  });
  it('renders an iframe is the src prop is passed', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var modal;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return mountWithContext(<Modal {...defaultPropsWithSource} />);
        case 2:
          modal = _context3.sent;
          expect(modal).toContainReactComponent('iframe', {
            src: defaultPropsWithSource.source,
            title: defaultPropsWithSource.title
          });
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  })));
  it('renders its children if no src prop is passed', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var modal;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return mountWithContext(<Modal {...defaultProps} />);
        case 2:
          modal = _context4.sent;
          expect(modal).not.toContainReactComponent('iframe');
          expect(modal).toContainReactComponent(Child);
        case 5:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  })));
  it('renders a header with Heading if the title prop is passed', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var modal;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return mountWithContext(<Modal {...defaultProps} />);
        case 2:
          modal = _context5.sent;
          expect(modal).toContainReactComponent('header');
          expect(modal).toContainReactComponent(Heading);
          expect(modal).toContainReactText(defaultProps.title);
        case 6:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  })));
  it('does not render a Heading if titleHidden', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    var modal;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return mountWithContext(<Modal {...defaultProps} titleHidden />);
        case 2:
          modal = _context6.sent;
          expect(modal).not.toContainReactComponent(Heading);
        case 4:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  })));
  it('still renders a close button if titleHidden', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
    var modal, header;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return mountWithContext(<Modal {...defaultProps} titleHidden />);
        case 2:
          modal = _context7.sent;
          header = modal.find('header');
          expect(header).toContainReactComponent('button');
        case 5:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  })));
  describe('when the escape key is pressed', function () {
    it('calls onClose callback', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      var onCloseSpy, modal, event;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            onCloseSpy = jest.fn();
            _context8.next = 3;
            return mountWithContext(<Modal {...defaultProps} onClose={onCloseSpy} />);
          case 3:
            modal = _context8.sent;
            event = new KeyboardEvent('keydown', {
              key: 'Escape'
            });
            modal.act(function () {
              return document.dispatchEvent(event);
            });
            expect(onCloseSpy).toHaveBeenCalledTimes(1);
          case 7:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    })));
  });
  describe('when the close button is clicked', function () {
    it('calls onClose callback', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
      var _header$find;
      var onCloseSpy, modal, header;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            onCloseSpy = jest.fn();
            _context9.next = 3;
            return mountWithContext(<Modal {...defaultProps} onClose={onCloseSpy} />);
          case 3:
            modal = _context9.sent;
            header = modal.find('header');
            header === null || header === void 0 || (_header$find = header.find('button')) === null || _header$find === void 0 || _header$find.trigger('onClick');
            expect(onCloseSpy).toHaveBeenCalledTimes(1);
          case 7:
          case "end":
            return _context9.stop();
        }
      }, _callee9);
    })));

    // Skipped until we figure out how to test async events
    // as the `iframeHeight` is reset on `transitionend`
    // eslint-disable-next-line jest/no-disabled-tests
    it.skip('resets the iFrameHeight', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
      var _modal$find, _modal$find2;
      var expectedHeight, fakeEvent, modal;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            expectedHeight = 100;
            fakeEvent = {
              target: {
                contentWindow: {
                  document: {
                    body: {
                      scrollHeight: expectedHeight
                    }
                  }
                }
              }
            };
            _context10.next = 4;
            return mountWithContext(<Modal {...defaultPropsWithSource} />);
          case 4:
            modal = _context10.sent;
            (_modal$find = modal.find('iframe')) === null || _modal$find === void 0 || _modal$find.trigger('onLoad', fakeEvent);
            expect(modal.find('iframe').prop('style')).toMatchObject({
              height: expectedHeight
            });
            (_modal$find2 = modal.find('header button')) === null || _modal$find2 === void 0 || _modal$find2.trigger('onClick');
            modal.setProps({
              open: false
            });
            modal.setProps({
              open: true
            });
            expect(modal.find('iframe').prop('style')).toBeUndefined();
          case 11:
          case "end":
            return _context10.stop();
        }
      }, _callee10);
    })));
  });
  describe('when the backdrop is clicked', function () {
    it('calls onClose callback', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
      var onCloseSpy, modal, backdrop;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            onCloseSpy = jest.fn();
            _context11.next = 3;
            return mountWithContext(<Modal {...defaultProps} onClose={onCloseSpy} />);
          case 3:
            modal = _context11.sent;
            backdrop = modal.findWhere(function (node) {
              var _node$props$className;
              return node === null || node === void 0 || (_node$props$className = node.props.className) === null || _node$props$className === void 0 ? void 0 : _node$props$className.includes('Backdrop');
            });
            backdrop === null || backdrop === void 0 || backdrop.trigger('onClick');
            expect(onCloseSpy).toHaveBeenCalledTimes(1);
          case 7:
          case "end":
            return _context11.stop();
        }
      }, _callee11);
    })));
  });
  describe('blocking prop', function () {
    it("doesn't render the close button", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
      var modal;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return mountWithContext(<Modal {...defaultPropsWithBlocking} blocking />);
          case 2:
            modal = _context12.sent;
            expect(modal).not.toContainReactComponent('header button');
          case 4:
          case "end":
            return _context12.stop();
        }
      }, _callee12);
    })));
    it("doesn't close the modal when the escape key is pressed", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
      var modal, event;
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return mountWithContext(<Modal {...defaultPropsWithBlocking} blocking />);
          case 2:
            modal = _context13.sent;
            event = new KeyboardEvent('keydown', {
              key: 'Escape'
            });
            modal.act(function () {
              return document.dispatchEvent(event);
            });
            expect(modal).toContainReactComponent(Child);
          case 6:
          case "end":
            return _context13.stop();
        }
      }, _callee13);
    })));
  });
  describe('blockSize prop', function () {
    it("doesn't add the onLoad prop when present", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
      var modal, iframe;
      return _regeneratorRuntime().wrap(function _callee14$(_context14) {
        while (1) switch (_context14.prev = _context14.next) {
          case 0:
            _context14.next = 2;
            return mountWithContext(<Modal blockSize="fill" {...defaultPropsWithSource} />);
          case 2:
            modal = _context14.sent;
            iframe = modal.find('iframe');
            expect(iframe === null || iframe === void 0 ? void 0 : iframe.prop('onLoad')).toBeUndefined();
          case 5:
          case "end":
            return _context14.stop();
        }
      }, _callee14);
    })));
    it('adds the onLoad prop when absent', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
      var modal, iframe;
      return _regeneratorRuntime().wrap(function _callee15$(_context15) {
        while (1) switch (_context15.prev = _context15.next) {
          case 0:
            _context15.next = 2;
            return mountWithContext(<Modal {...defaultPropsWithSource} />);
          case 2:
            modal = _context15.sent;
            iframe = modal.find('iframe');
            expect(iframe === null || iframe === void 0 ? void 0 : iframe.prop('onLoad')).not.toBeUndefined();
          case 5:
          case "end":
            return _context15.stop();
        }
      }, _callee15);
    })));
  });
  describe('maxInlineSize prop', function () {
    it('sets a max-width to the dialog', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
      var modal;
      return _regeneratorRuntime().wrap(function _callee16$(_context16) {
        while (1) switch (_context16.prev = _context16.next) {
          case 0:
            _context16.next = 2;
            return mountWithContext(<Modal maxInlineSize={0.9} {...defaultProps} />);
          case 2:
            modal = _context16.sent;
            expect(modal).toContainReactComponent('div', {
              style: {
                maxWidth: '90%'
              }
            });
          case 4:
          case "end":
            return _context16.stop();
        }
      }, _callee16);
    })));
  });
});