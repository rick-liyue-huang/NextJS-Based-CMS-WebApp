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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TopNavComponent\": function() { return /* binding */ TopNavComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar TopNavComponent = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"mail\"), current = ref[0], setCurrent = ref[1];\n    var handleClick = function(e) {\n        setCurrent(e.key);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Menu, {\n        mode: \"horizontal\",\n        defaultSelectedKeys: [\n            \"mail\"\n        ],\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.MailOutlined, {}, void 0, false, void 0, void 0),\n                children: \"Navigation One\"\n            }, \"mail\", false, {\n                fileName: \"/Users/rickhuang/WebstormProjects/nextjs-based-cms-project/frontend/components/TopNav.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Menu.SubMenu, {\n                title: \"Navigation Two - Submenu\",\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.SettingOutlined, {}, void 0, false, void 0, void 0),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.AppstoreOutlined, {}, void 0, false, void 0, void 0),\n                        children: \"Navigation Two\"\n                    }, \"two\", false, {\n                        fileName: \"/Users/rickhuang/WebstormProjects/nextjs-based-cms-project/frontend/components/TopNav.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.AppstoreOutlined, {}, void 0, false, void 0, void 0),\n                        children: \"Navigation Three\"\n                    }, \"three\", false, {\n                        fileName: \"/Users/rickhuang/WebstormProjects/nextjs-based-cms-project/frontend/components/TopNav.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Menu.ItemGroup, {\n                        title: \"Item Group\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {\n                                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.AppstoreOutlined, {}, void 0, false, void 0, void 0),\n                                children: \"Navigation Four\"\n                            }, \"four\", false, {\n                                fileName: \"/Users/rickhuang/WebstormProjects/nextjs-based-cms-project/frontend/components/TopNav.js\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {\n                                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.AppstoreOutlined, {}, void 0, false, void 0, void 0),\n                                children: \"Navigation Five\"\n                            }, \"five\", false, {\n                                fileName: \"/Users/rickhuang/WebstormProjects/nextjs-based-cms-project/frontend/components/TopNav.js\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/rickhuang/WebstormProjects/nextjs-based-cms-project/frontend/components/TopNav.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, \"SubMenu\", true, {\n                fileName: \"/Users/rickhuang/WebstormProjects/nextjs-based-cms-project/frontend/components/TopNav.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.MailOutlined, {}, void 0, false, void 0, void 0),\n                children: \"Navigation One\"\n            }, \"mail\", false, {\n                fileName: \"/Users/rickhuang/WebstormProjects/nextjs-based-cms-project/frontend/components/TopNav.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rickhuang/WebstormProjects/nextjs-based-cms-project/frontend/components/TopNav.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, _this);\n};\n_s(TopNavComponent, \"Sqwv+bLVbya+rs+WHuSPhnqczvM=\");\n_c = TopNavComponent;\nvar _c;\n$RefreshReg$(_c, \"TopNavComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvcE5hdi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQTRCO0FBS0Q7QUFDTTs7QUFFMUIsSUFBTUssZUFBZSxHQUFHLFdBQU07O0lBQ25DLElBQThCRCxHQUFnQixHQUFoQkEsK0NBQVEsQ0FBQyxNQUFNLENBQUMsRUFBdkNFLE9BQU8sR0FBZ0JGLEdBQWdCLEdBQWhDLEVBQUVHLFVBQVUsR0FBSUgsR0FBZ0IsR0FBcEI7SUFFMUIsSUFBTUksV0FBVyxHQUFHLFNBQUNDLENBQUMsRUFBSztRQUN6QkYsVUFBVSxDQUFDRSxDQUFDLENBQUNDLEdBQUcsQ0FBQyxDQUFDO0tBQ25CO0lBQ0QscUJBQ0UsOERBQUNWLHNDQUFJO1FBQUNXLElBQUksRUFBQyxZQUFZO1FBQUNDLG1CQUFtQixFQUFFO1lBQUMsTUFBTTtTQUFDOzswQkFDbkQsOERBQUNaLDJDQUFTO2dCQUFZYyxJQUFJLGdCQUFFLDhEQUFDYiwyREFBWSxvQ0FBRzswQkFBRSxnQkFFOUM7ZUFGZSxNQUFNOzs7O3FCQUVUOzBCQUNaLDhEQUFDRCw4Q0FBWTtnQkFFWGdCLEtBQUssRUFBQywwQkFBMEI7Z0JBQ2hDRixJQUFJLGdCQUFFLDhEQUFDWCw4REFBZSxvQ0FBRzs7a0NBRXpCLDhEQUFDSCwyQ0FBUzt3QkFBV2MsSUFBSSxnQkFBRSw4REFBQ1osK0RBQWdCLG9DQUFHO2tDQUFFLGdCQUVqRDt1QkFGZSxLQUFLOzs7OzZCQUVSO2tDQUNaLDhEQUFDRiwyQ0FBUzt3QkFBYWMsSUFBSSxnQkFBRSw4REFBQ1osK0RBQWdCLG9DQUFHO2tDQUFFLGtCQUVuRDt1QkFGZSxPQUFPOzs7OzZCQUVWO2tDQUNaLDhEQUFDRixnREFBYzt3QkFBQ2dCLEtBQUssRUFBQyxZQUFZOzswQ0FDaEMsOERBQUNoQiwyQ0FBUztnQ0FBWWMsSUFBSSxnQkFBRSw4REFBQ1osK0RBQWdCLG9DQUFHOzBDQUFFLGlCQUVsRDsrQkFGZSxNQUFNOzs7O3FDQUVUOzBDQUNaLDhEQUFDRiwyQ0FBUztnQ0FBWWMsSUFBSSxnQkFBRSw4REFBQ1osK0RBQWdCLG9DQUFHOzBDQUFFLGlCQUVsRDsrQkFGZSxNQUFNOzs7O3FDQUVUOzs7Ozs7NkJBQ0c7O2VBakJiLFNBQVM7Ozs7cUJBa0JBOzBCQUNmLDhEQUFDRiwyQ0FBUztnQkFBWWMsSUFBSSxnQkFBRSw4REFBQ2IsMkRBQVksb0NBQUc7MEJBQUUsZ0JBRTlDO2VBRmUsTUFBTTs7OztxQkFFVDs7Ozs7O2FBQ1AsQ0FDUDtDQUNILENBQUM7R0FwQ1dJLGVBQWU7QUFBZkEsS0FBQUEsZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RvcE5hdi5qcz85ZThiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lbnUgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7XG4gIE1haWxPdXRsaW5lZCxcbiAgQXBwc3RvcmVPdXRsaW5lZCxcbiAgU2V0dGluZ091dGxpbmVkLFxufSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IFRvcE5hdkNvbXBvbmVudCA9ICgpID0+IHtcbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoJ21haWwnKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgc2V0Q3VycmVudChlLmtleSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPE1lbnUgbW9kZT1cImhvcml6b250YWxcIiBkZWZhdWx0U2VsZWN0ZWRLZXlzPXtbJ21haWwnXX0+XG4gICAgICA8TWVudS5JdGVtIGtleT1cIm1haWxcIiBpY29uPXs8TWFpbE91dGxpbmVkIC8+fT5cbiAgICAgICAgTmF2aWdhdGlvbiBPbmVcbiAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgPE1lbnUuU3ViTWVudVxuICAgICAgICBrZXk9XCJTdWJNZW51XCJcbiAgICAgICAgdGl0bGU9XCJOYXZpZ2F0aW9uIFR3byAtIFN1Ym1lbnVcIlxuICAgICAgICBpY29uPXs8U2V0dGluZ091dGxpbmVkIC8+fVxuICAgICAgPlxuICAgICAgICA8TWVudS5JdGVtIGtleT1cInR3b1wiIGljb249ezxBcHBzdG9yZU91dGxpbmVkIC8+fT5cbiAgICAgICAgICBOYXZpZ2F0aW9uIFR3b1xuICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJ0aHJlZVwiIGljb249ezxBcHBzdG9yZU91dGxpbmVkIC8+fT5cbiAgICAgICAgICBOYXZpZ2F0aW9uIFRocmVlXG4gICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICA8TWVudS5JdGVtR3JvdXAgdGl0bGU9XCJJdGVtIEdyb3VwXCI+XG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJmb3VyXCIgaWNvbj17PEFwcHN0b3JlT3V0bGluZWQgLz59PlxuICAgICAgICAgICAgTmF2aWdhdGlvbiBGb3VyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJmaXZlXCIgaWNvbj17PEFwcHN0b3JlT3V0bGluZWQgLz59PlxuICAgICAgICAgICAgTmF2aWdhdGlvbiBGaXZlXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgIDwvTWVudS5JdGVtR3JvdXA+XG4gICAgICA8L01lbnUuU3ViTWVudT5cbiAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibWFpbFwiIGljb249ezxNYWlsT3V0bGluZWQgLz59PlxuICAgICAgICBOYXZpZ2F0aW9uIE9uZVxuICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgPC9NZW51PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJNZW51IiwiTWFpbE91dGxpbmVkIiwiQXBwc3RvcmVPdXRsaW5lZCIsIlNldHRpbmdPdXRsaW5lZCIsInVzZVN0YXRlIiwiVG9wTmF2Q29tcG9uZW50IiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJoYW5kbGVDbGljayIsImUiLCJrZXkiLCJtb2RlIiwiZGVmYXVsdFNlbGVjdGVkS2V5cyIsIkl0ZW0iLCJpY29uIiwiU3ViTWVudSIsInRpdGxlIiwiSXRlbUdyb3VwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TopNav.js\n"));

/***/ })

});