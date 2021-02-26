webpackHotUpdate_N_E("pages/index",{

/***/ "./src/contexts/CountdownContext.tsx":
/*!*******************************************!*\
  !*** ./src/contexts/CountdownContext.tsx ***!
  \*******************************************/
/*! exports provided: CountdownContext, CountdownProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CountdownContext\", function() { return CountdownContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CountdownProvider\", function() { return CountdownProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChallengesContext */ \"./src/contexts/ChallengesContext.tsx\");\n\n\nvar _jsxFileName = \"/home/leal/Documentos/MeusProjetos/moveit-next/src/contexts/CountdownContext.tsx\",\n    _s = $RefreshSig$();\n\n\n\nvar CountdownContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nvar countdownTimeout;\nfunction CountdownProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__[\"ChallengesContext\"]),\n      startNewChallenge = _useContext.startNewChallenge;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0.1 * 60),\n      time = _useState[0],\n      setTime = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isActive = _useState2[0],\n      setIsActive = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      hasFinished = _useState3[0],\n      setHasFinished = _useState3[1];\n\n  var minutes = Math.floor(time / 60);\n  var seconds = time % 60;\n\n  function startCountdown() {\n    setIsActive(true);\n  }\n\n  function resetCountdown() {\n    clearTimeout(countdownTimeout);\n    setIsActive(false);\n    setTime(0.1 * 60);\n    setHasFinished(false);\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (isActive && time > 0) {\n      countdownTimeout = setTimeout(function () {\n        setTime(time - 1);\n      }, 1000);\n    } else if (isActive && time === 0) {\n      setHasFinished(true);\n      setIsActive(false);\n      startNewChallenge();\n    }\n  }, [isActive, time]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CountdownContext.Provider, {\n    value: {\n      minutes: minutes,\n      seconds: seconds,\n      hasFinished: hasFinished,\n      isActive: isActive,\n      startCountdown: startCountdown,\n      resetCountdown: resetCountdown\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 61,\n    columnNumber: 7\n  }, this);\n}\n\n_s(CountdownProvider, \"cVu0hsDf1rnm10+qbfS96WIdEJo=\");\n\n_c = CountdownProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"CountdownProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NvdW50ZG93bkNvbnRleHQudHN4P2ZlOWQiXSwibmFtZXMiOlsiQ291bnRkb3duQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJjb3VudGRvd25UaW1lb3V0IiwiQ291bnRkb3duUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZUNvbnRleHQiLCJDaGFsbGVuZ2VzQ29udGV4dCIsInN0YXJ0TmV3Q2hhbGxlbmdlIiwidXNlU3RhdGUiLCJ0aW1lIiwic2V0VGltZSIsImlzQWN0aXZlIiwic2V0SXNBY3RpdmUiLCJoYXNGaW5pc2hlZCIsInNldEhhc0ZpbmlzaGVkIiwibWludXRlcyIsIk1hdGgiLCJmbG9vciIsInNlY29uZHMiLCJzdGFydENvdW50ZG93biIsInJlc2V0Q291bnRkb3duIiwiY2xlYXJUaW1lb3V0IiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBT0U7QUFlTyxJQUFNQSxnQkFBZ0IsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUF0QztBQUVQLElBQUlDLGdCQUFKO0FBRU8sU0FBU0MsaUJBQVQsT0FBaUU7QUFBQTs7QUFBQSxNQUFwQ0MsUUFBb0MsUUFBcENBLFFBQW9DOztBQUFBLG9CQUN4Q0Msd0RBQVUsQ0FBQ0Msb0VBQUQsQ0FEOEI7QUFBQSxNQUM5REMsaUJBRDhELGVBQzlEQSxpQkFEOEQ7O0FBQUEsa0JBRzlDQyxzREFBUSxDQUFDLE1BQU0sRUFBUCxDQUhzQztBQUFBLE1BRy9EQyxJQUgrRDtBQUFBLE1BR3pEQyxPQUh5RDs7QUFBQSxtQkFJdENGLHNEQUFRLENBQUMsS0FBRCxDQUo4QjtBQUFBLE1BSS9ERyxRQUorRDtBQUFBLE1BSXJEQyxXQUpxRDs7QUFBQSxtQkFLaENKLHNEQUFRLENBQUMsS0FBRCxDQUx3QjtBQUFBLE1BSy9ESyxXQUwrRDtBQUFBLE1BS2xEQyxjQUxrRDs7QUFPdEUsTUFBTUMsT0FBTyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1IsSUFBSSxHQUFHLEVBQWxCLENBQWhCO0FBQ0EsTUFBTVMsT0FBTyxHQUFHVCxJQUFJLEdBQUcsRUFBdkI7O0FBRUEsV0FBU1UsY0FBVCxHQUEwQjtBQUN4QlAsZUFBVyxDQUFDLElBQUQsQ0FBWDtBQUNEOztBQUVELFdBQVNRLGNBQVQsR0FBMEI7QUFDeEJDLGdCQUFZLENBQUNuQixnQkFBRCxDQUFaO0FBQ0FVLGVBQVcsQ0FBQyxLQUFELENBQVg7QUFDQUYsV0FBTyxDQUFDLE1BQU0sRUFBUCxDQUFQO0FBQ0FJLGtCQUFjLENBQUMsS0FBRCxDQUFkO0FBQ0Q7O0FBRURRLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlYLFFBQVEsSUFBSUYsSUFBSSxHQUFHLENBQXZCLEVBQTBCO0FBQ3hCUCxzQkFBZ0IsR0FBR3FCLFVBQVUsQ0FBQyxZQUFNO0FBQ2xDYixlQUFPLENBQUNELElBQUksR0FBRyxDQUFSLENBQVA7QUFDRCxPQUY0QixFQUUxQixJQUYwQixDQUE3QjtBQUdELEtBSkQsTUFJTyxJQUFJRSxRQUFRLElBQUlGLElBQUksS0FBSyxDQUF6QixFQUE0QjtBQUNqQ0ssb0JBQWMsQ0FBQyxJQUFELENBQWQ7QUFDQUYsaUJBQVcsQ0FBQyxLQUFELENBQVg7QUFDQUwsdUJBQWlCO0FBQ2xCO0FBQ0YsR0FWUSxFQVVOLENBQUNJLFFBQUQsRUFBV0YsSUFBWCxDQVZNLENBQVQ7QUFZQSxzQkFDRSxxRUFBQyxnQkFBRCxDQUFrQixRQUFsQjtBQUNFLFNBQUssRUFBRTtBQUNMTSxhQUFPLEVBQVBBLE9BREs7QUFFTEcsYUFBTyxFQUFQQSxPQUZLO0FBR0xMLGlCQUFXLEVBQVhBLFdBSEs7QUFJTEYsY0FBUSxFQUFSQSxRQUpLO0FBS0xRLG9CQUFjLEVBQWRBLGNBTEs7QUFNTEMsb0JBQWMsRUFBZEE7QUFOSyxLQURUO0FBQUEsY0FVR2hCO0FBVkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBY0Q7O0dBL0NlRCxpQjs7S0FBQUEsaUIiLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQ291bnRkb3duQ29udGV4dC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIGNyZWF0ZUNvbnRleHQsXG4gICAgUmVhY3ROb2RlLFxuICAgIHVzZUNvbnRleHQsXG4gICAgdXNlRWZmZWN0LFxuICAgIHVzZVN0YXRlLFxuICB9IGZyb20gJ3JlYWN0JztcbiAgaW1wb3J0IHsgQ2hhbGxlbmdlc0NvbnRleHQgfSBmcm9tICcuL0NoYWxsZW5nZXNDb250ZXh0JztcbiAgXG4gIGludGVyZmFjZSBDb3VudGRvd25Db250ZXh0RGF0YSB7XG4gICAgbWludXRlczogbnVtYmVyO1xuICAgIHNlY29uZHM6IG51bWJlcjtcbiAgICBoYXNGaW5pc2hlZDogYm9vbGVhbjtcbiAgICBpc0FjdGl2ZTogYm9vbGVhbjtcbiAgICBzdGFydENvdW50ZG93bjogKCkgPT4gdm9pZDtcbiAgICByZXNldENvdW50ZG93bjogKCkgPT4gdm9pZDtcbiAgfVxuICBcbiAgaW50ZXJmYWNlIENvdW50ZG93blByb3ZpZGVyUHJvcHMge1xuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG4gIH1cbiAgXG4gIGV4cG9ydCBjb25zdCBDb3VudGRvd25Db250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBDb3VudGRvd25Db250ZXh0RGF0YSk7XG4gIFxuICBsZXQgY291bnRkb3duVGltZW91dDogTm9kZUpTLlRpbWVvdXQ7XG4gIFxuICBleHBvcnQgZnVuY3Rpb24gQ291bnRkb3duUHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBDb3VudGRvd25Qcm92aWRlclByb3BzKSB7XG4gICAgY29uc3QgeyBzdGFydE5ld0NoYWxsZW5nZSB9ID0gdXNlQ29udGV4dChDaGFsbGVuZ2VzQ29udGV4dCk7XG4gIFxuICAgIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKDAuMSAqIDYwKTtcbiAgICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbaGFzRmluaXNoZWQsIHNldEhhc0ZpbmlzaGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgXG4gICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IodGltZSAvIDYwKTtcbiAgICBjb25zdCBzZWNvbmRzID0gdGltZSAlIDYwO1xuICBcbiAgICBmdW5jdGlvbiBzdGFydENvdW50ZG93bigpIHtcbiAgICAgIHNldElzQWN0aXZlKHRydWUpO1xuICAgIH1cbiAgXG4gICAgZnVuY3Rpb24gcmVzZXRDb3VudGRvd24oKSB7XG4gICAgICBjbGVhclRpbWVvdXQoY291bnRkb3duVGltZW91dCk7XG4gICAgICBzZXRJc0FjdGl2ZShmYWxzZSk7XG4gICAgICBzZXRUaW1lKDAuMSAqIDYwKTtcbiAgICAgIHNldEhhc0ZpbmlzaGVkKGZhbHNlKTtcbiAgICB9XG4gIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpZiAoaXNBY3RpdmUgJiYgdGltZSA+IDApIHtcbiAgICAgICAgY291bnRkb3duVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHNldFRpbWUodGltZSAtIDEpO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNBY3RpdmUgJiYgdGltZSA9PT0gMCkge1xuICAgICAgICBzZXRIYXNGaW5pc2hlZCh0cnVlKTtcbiAgICAgICAgc2V0SXNBY3RpdmUoZmFsc2UpO1xuICAgICAgICBzdGFydE5ld0NoYWxsZW5nZSgpO1xuICAgICAgfVxuICAgIH0sIFtpc0FjdGl2ZSwgdGltZV0pO1xuICBcbiAgICByZXR1cm4gKFxuICAgICAgPENvdW50ZG93bkNvbnRleHQuUHJvdmlkZXJcbiAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICBtaW51dGVzLFxuICAgICAgICAgIHNlY29uZHMsXG4gICAgICAgICAgaGFzRmluaXNoZWQsXG4gICAgICAgICAgaXNBY3RpdmUsXG4gICAgICAgICAgc3RhcnRDb3VudGRvd24sXG4gICAgICAgICAgcmVzZXRDb3VudGRvd24sXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvQ291bnRkb3duQ29udGV4dC5Qcm92aWRlcj5cbiAgICApO1xuICB9XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/CountdownContext.tsx\n");

/***/ })

})