"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/TopNav.js":
/*!******************************!*\
  !*** ./components/TopNav.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TopNavComponent\": function() { return /* binding */ TopNavComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ToggleTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToggleTheme */ \"./components/ToggleTheme.js\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar TopNavComponent = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"mail\"), current = ref[0], setCurrent = ref[1];\n    var handleClick = function(e) {\n        setCurrent(e.key);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Menu, {\n        mode: \"horizontal\",\n        defaultSelectedKeys: [\n            \"mail\"\n        ],\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Menu.Item, {\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.MailOutlined, {}, void 0, false, void 0, void 0),\n                children: \"HOME\"\n            }, \"mail\", false, {\n                fileName: \"/Users/rickhuang/WebstormProjects/nextjs-based-cms-project/frontend/components/TopNav.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Menu.Item, {\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.AppstoreOutlined, {}, void 0, false, void 0, void 0),\n                children: \"REGISTER\"\n            }, \"register\", false, {\n                fileName: \"/Users/rickhuang/WebstormProjects/nextjs-based-cms-project/frontend/components/TopNav.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Menu.Item, {\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.AppstoreOutlined, {}, void 0, false, void 0, void 0),\n                children: \"LOGIN\"\n            }, \"login\", false, {\n                fileName: \"/Users/rickhuang/WebstormProjects/nextjs-based-cms-project/frontend/components/TopNav.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Menu.SubMenu, {\n                title: \"Navigation Two - Submenu\",\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.SettingOutlined, {}, void 0, false, void 0, void 0),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Menu.Item, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.AppstoreOutlined, {}, void 0, false, void 0, void 0),\n                        children: \"Navigation Two\"\n                    }, \"two\", false, {\n                        fileName: \"/Users/rickhuang/WebstormProjects/nextjs-based-cms-project/frontend/components/TopNav.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Menu.Item, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.AppstoreOutlined, {}, void 0, false, void 0, void 0),\n                        children: \"Navigation Three\"\n                    }, \"three\", false, {\n                        fileName: \"/Users/rickhuang/WebstormProjects/nextjs-based-cms-project/frontend/components/TopNav.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Menu.ItemGroup, {\n                        title: \"Item Group\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Menu.Item, {\n                                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.AppstoreOutlined, {}, void 0, false, void 0, void 0),\n                                children: \"Navigation Four\"\n                            }, \"four\", false, {\n                                fileName: \"/Users/rickhuang/WebstormProjects/nextjs-based-cms-project/frontend/components/TopNav.js\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Menu.Item, {\n                                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.AppstoreOutlined, {}, void 0, false, void 0, void 0),\n                                children: \"Navigation Five\"\n                            }, \"five\", false, {\n                                fileName: \"/Users/rickhuang/WebstormProjects/nextjs-based-cms-project/frontend/components/TopNav.js\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rickhuang/WebstormProjects/nextjs-based-cms-project/frontend/components/TopNav.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, \"SubMenu\", true, {\n                fileName: \"/Users/rickhuang/WebstormProjects/nextjs-based-cms-project/frontend/components/TopNav.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Menu.Item, {\n                style: {\n                    marginLeft: \"auto\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ToggleTheme__WEBPACK_IMPORTED_MODULE_2__.ToggleThemeComponent, {}, void 0, false, {\n                    fileName: \"/Users/rickhuang/WebstormProjects/nextjs-based-cms-project/frontend/components/TopNav.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, _this)\n            }, \"alipay\", false, {\n                fileName: \"/Users/rickhuang/WebstormProjects/nextjs-based-cms-project/frontend/components/TopNav.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rickhuang/WebstormProjects/nextjs-based-cms-project/frontend/components/TopNav.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, _this);\n};\n_s(TopNavComponent, \"Sqwv+bLVbya+rs+WHuSPhnqczvM=\");\n_c = TopNavComponent;\nvar _c;\n$RefreshReg$(_c, \"TopNavComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvcE5hdi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUE0QjtBQUtEO0FBQ007QUFDb0I7O0FBRTlDLElBQU1NLGVBQWUsR0FBRyxXQUFNOztJQUNuQyxJQUE4QkYsR0FBZ0IsR0FBaEJBLCtDQUFRLENBQUMsTUFBTSxDQUFDLEVBQXZDRyxPQUFPLEdBQWdCSCxHQUFnQixHQUFoQyxFQUFFSSxVQUFVLEdBQUlKLEdBQWdCLEdBQXBCO0lBRTFCLElBQU1LLFdBQVcsR0FBRyxTQUFDQyxDQUFDLEVBQUs7UUFDekJGLFVBQVUsQ0FBQ0UsQ0FBQyxDQUFDQyxHQUFHLENBQUMsQ0FBQztLQUNuQjtJQUNELHFCQUNFLDhEQUFDWCxzQ0FBSTtRQUFDWSxJQUFJLEVBQUMsWUFBWTtRQUFDQyxtQkFBbUIsRUFBRTtZQUFDLE1BQU07U0FBQzs7MEJBQ25ELDhEQUFDYiwyQ0FBUztnQkFBWWUsSUFBSSxnQkFBRSw4REFBQ2QsMkRBQVksb0NBQUc7MEJBQUUsTUFFOUM7ZUFGZSxNQUFNOzs7O3FCQUVUOzBCQUNaLDhEQUFDRCwyQ0FBUztnQkFBZ0JlLElBQUksZ0JBQUUsOERBQUNiLCtEQUFnQixvQ0FBRzswQkFBRSxVQUV0RDtlQUZlLFVBQVU7Ozs7cUJBRWI7MEJBQ1osOERBQUNGLDJDQUFTO2dCQUFhZSxJQUFJLGdCQUFFLDhEQUFDYiwrREFBZ0Isb0NBQUc7MEJBQUUsT0FFbkQ7ZUFGZSxPQUFPOzs7O3FCQUVWOzBCQUNaLDhEQUFDRiw4Q0FBWTtnQkFFWGlCLEtBQUssRUFBQywwQkFBMEI7Z0JBQ2hDRixJQUFJLGdCQUFFLDhEQUFDWiw4REFBZSxvQ0FBRzs7a0NBRXpCLDhEQUFDSCwyQ0FBUzt3QkFBV2UsSUFBSSxnQkFBRSw4REFBQ2IsK0RBQWdCLG9DQUFHO2tDQUFFLGdCQUVqRDt1QkFGZSxLQUFLOzs7OzZCQUVSO2tDQUNaLDhEQUFDRiwyQ0FBUzt3QkFBYWUsSUFBSSxnQkFBRSw4REFBQ2IsK0RBQWdCLG9DQUFHO2tDQUFFLGtCQUVuRDt1QkFGZSxPQUFPOzs7OzZCQUVWO2tDQUNaLDhEQUFDRixnREFBYzt3QkFBQ2lCLEtBQUssRUFBQyxZQUFZOzswQ0FDaEMsOERBQUNqQiwyQ0FBUztnQ0FBWWUsSUFBSSxnQkFBRSw4REFBQ2IsK0RBQWdCLG9DQUFHOzBDQUFFLGlCQUVsRDsrQkFGZSxNQUFNOzs7O3FDQUVUOzBDQUNaLDhEQUFDRiwyQ0FBUztnQ0FBWWUsSUFBSSxnQkFBRSw4REFBQ2IsK0RBQWdCLG9DQUFHOzBDQUFFLGlCQUVsRDsrQkFGZSxNQUFNOzs7O3FDQUVUOzs7Ozs7NkJBQ0c7O2VBakJiLFNBQVM7Ozs7cUJBa0JBOzBCQUNmLDhEQUFDRiwyQ0FBUztnQkFBY21CLEtBQUssRUFBRTtvQkFBRUMsVUFBVSxFQUFFLE1BQU07aUJBQUU7MEJBQ25ELDRFQUFDZiw4REFBb0I7Ozs7eUJBQUc7ZUFEWCxRQUFROzs7O3FCQUVYOzs7Ozs7YUFDUCxDQUNQO0NBQ0gsQ0FBQztHQTFDV0MsZUFBZTtBQUFmQSxLQUFBQSxlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVG9wTmF2LmpzPzllOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVudSB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHtcbiAgTWFpbE91dGxpbmVkLFxuICBBcHBzdG9yZU91dGxpbmVkLFxuICBTZXR0aW5nT3V0bGluZWQsXG59IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVG9nZ2xlVGhlbWVDb21wb25lbnQgfSBmcm9tICcuL1RvZ2dsZVRoZW1lJztcblxuZXhwb3J0IGNvbnN0IFRvcE5hdkNvbXBvbmVudCA9ICgpID0+IHtcbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoJ21haWwnKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgc2V0Q3VycmVudChlLmtleSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPE1lbnUgbW9kZT1cImhvcml6b250YWxcIiBkZWZhdWx0U2VsZWN0ZWRLZXlzPXtbJ21haWwnXX0+XG4gICAgICA8TWVudS5JdGVtIGtleT1cIm1haWxcIiBpY29uPXs8TWFpbE91dGxpbmVkIC8+fT5cbiAgICAgICAgSE9NRVxuICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICA8TWVudS5JdGVtIGtleT1cInJlZ2lzdGVyXCIgaWNvbj17PEFwcHN0b3JlT3V0bGluZWQgLz59PlxuICAgICAgICBSRUdJU1RFUlxuICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICA8TWVudS5JdGVtIGtleT1cImxvZ2luXCIgaWNvbj17PEFwcHN0b3JlT3V0bGluZWQgLz59PlxuICAgICAgICBMT0dJTlxuICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICA8TWVudS5TdWJNZW51XG4gICAgICAgIGtleT1cIlN1Yk1lbnVcIlxuICAgICAgICB0aXRsZT1cIk5hdmlnYXRpb24gVHdvIC0gU3VibWVudVwiXG4gICAgICAgIGljb249ezxTZXR0aW5nT3V0bGluZWQgLz59XG4gICAgICA+XG4gICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwidHdvXCIgaWNvbj17PEFwcHN0b3JlT3V0bGluZWQgLz59PlxuICAgICAgICAgIE5hdmlnYXRpb24gVHdvXG4gICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICA8TWVudS5JdGVtIGtleT1cInRocmVlXCIgaWNvbj17PEFwcHN0b3JlT3V0bGluZWQgLz59PlxuICAgICAgICAgIE5hdmlnYXRpb24gVGhyZWVcbiAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgIDxNZW51Lkl0ZW1Hcm91cCB0aXRsZT1cIkl0ZW0gR3JvdXBcIj5cbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImZvdXJcIiBpY29uPXs8QXBwc3RvcmVPdXRsaW5lZCAvPn0+XG4gICAgICAgICAgICBOYXZpZ2F0aW9uIEZvdXJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cImZpdmVcIiBpY29uPXs8QXBwc3RvcmVPdXRsaW5lZCAvPn0+XG4gICAgICAgICAgICBOYXZpZ2F0aW9uIEZpdmVcbiAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgPC9NZW51Lkl0ZW1Hcm91cD5cbiAgICAgIDwvTWVudS5TdWJNZW51PlxuICAgICAgPE1lbnUuSXRlbSBrZXk9XCJhbGlwYXlcIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnYXV0bycgfX0+XG4gICAgICAgIDxUb2dnbGVUaGVtZUNvbXBvbmVudCAvPlxuICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgPC9NZW51PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJNZW51IiwiTWFpbE91dGxpbmVkIiwiQXBwc3RvcmVPdXRsaW5lZCIsIlNldHRpbmdPdXRsaW5lZCIsInVzZVN0YXRlIiwiVG9nZ2xlVGhlbWVDb21wb25lbnQiLCJUb3BOYXZDb21wb25lbnQiLCJjdXJyZW50Iiwic2V0Q3VycmVudCIsImhhbmRsZUNsaWNrIiwiZSIsImtleSIsIm1vZGUiLCJkZWZhdWx0U2VsZWN0ZWRLZXlzIiwiSXRlbSIsImljb24iLCJTdWJNZW51IiwidGl0bGUiLCJJdGVtR3JvdXAiLCJzdHlsZSIsIm1hcmdpbkxlZnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TopNav.js\n"));

/***/ })

});