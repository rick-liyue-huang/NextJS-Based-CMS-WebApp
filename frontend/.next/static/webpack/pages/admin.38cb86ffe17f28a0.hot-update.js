"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin",{

/***/ "./components/nav/AdminNavComponent.js":
/*!*********************************************!*\
  !*** ./components/nav/AdminNavComponent.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AdminNavComponent\": function() { return /* binding */ AdminNavComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Sider = antd__WEBPACK_IMPORTED_MODULE_3__.Layout.Sider;\nvar getItem = function(label, key, icon, children, type) {\n    return {\n        key: key,\n        icon: icon,\n        children: children,\n        label: label,\n        type: type\n    };\n};\nvar items = [\n    getItem(\"Option 1\", \"1\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.PieChartOutlined, {}, void 0, false, {\n        fileName: \"/Users/rickhuang/WebstormProjects/nextjs-based-cms-project/frontend/components/nav/AdminNavComponent.js\",\n        lineNumber: 27,\n        columnNumber: 28\n    }, undefined)),\n    getItem(\"Option 2\", \"2\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.DesktopOutlined, {}, void 0, false, {\n        fileName: \"/Users/rickhuang/WebstormProjects/nextjs-based-cms-project/frontend/components/nav/AdminNavComponent.js\",\n        lineNumber: 28,\n        columnNumber: 28\n    }, undefined)),\n    getItem(\"Option 3\", \"3\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.ContainerOutlined, {}, void 0, false, {\n        fileName: \"/Users/rickhuang/WebstormProjects/nextjs-based-cms-project/frontend/components/nav/AdminNavComponent.js\",\n        lineNumber: 29,\n        columnNumber: 28\n    }, undefined)),\n    getItem(\"Navigation One\", \"sub1\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.MailOutlined, {}, void 0, false, {\n        fileName: \"/Users/rickhuang/WebstormProjects/nextjs-based-cms-project/frontend/components/nav/AdminNavComponent.js\",\n        lineNumber: 30,\n        columnNumber: 37\n    }, undefined), [\n        getItem(\"Option 5\", \"5\"),\n        getItem(\"Option 6\", \"6\"),\n        getItem(\"Option 7\", \"7\"),\n        getItem(\"Option 8\", \"8\"), \n    ]),\n    getItem(\"Navigation Two\", \"sub2\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.AppstoreOutlined, {}, void 0, false, {\n        fileName: \"/Users/rickhuang/WebstormProjects/nextjs-based-cms-project/frontend/components/nav/AdminNavComponent.js\",\n        lineNumber: 36,\n        columnNumber: 37\n    }, undefined), [\n        getItem(\"Option 9\", \"9\"),\n        getItem(\"Option 10\", \"10\"),\n        getItem(\"Submenu\", \"sub3\", null, [\n            getItem(\"Option 11\", \"11\"),\n            getItem(\"Option 12\", \"12\"), \n        ]), \n    ]), \n];\nvar AdminNavComponent = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), collapsed = ref[0], setCollapsed = ref[1];\n    var toggleCollapsed = function() {\n        setCollapsed(!collapsed);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sider, {\n        collapsible: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Menu, {\n            defaultSelectedKeys: [\n                \"1\"\n            ],\n            defaultOpenKeys: [\n                \"sub1\",\n                \"sub2\"\n            ],\n            mode: \"inline\",\n            inlineCollapsed: collapsed,\n            items: items\n        }, void 0, false, {\n            fileName: \"/Users/rickhuang/WebstormProjects/nextjs-based-cms-project/frontend/components/nav/AdminNavComponent.js\",\n            lineNumber: 55,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/rickhuang/WebstormProjects/nextjs-based-cms-project/frontend/components/nav/AdminNavComponent.js\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, _this);\n};\n_s(AdminNavComponent, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = AdminNavComponent;\nvar _c;\n$RefreshReg$(_c, \"AdminNavComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdi9BZG1pbk5hdkNvbXBvbmVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFRMkI7QUFDaUI7QUFDSjtBQUNYOztBQUU3QixJQUFNLEtBQU8sR0FBS1MsOENBQUw7QUFFYixJQUFNSyxPQUFPLEdBQUcsU0FBQ0MsS0FBSyxFQUFFQyxHQUFHLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFQyxJQUFJLEVBQUs7SUFDcEQsT0FBTztRQUNMSCxHQUFHLEVBQUhBLEdBQUc7UUFDSEMsSUFBSSxFQUFKQSxJQUFJO1FBQ0pDLFFBQVEsRUFBUkEsUUFBUTtRQUNSSCxLQUFLLEVBQUxBLEtBQUs7UUFDTEksSUFBSSxFQUFKQSxJQUFJO0tBQ0wsQ0FBQztDQUNIO0FBRUQsSUFBTUMsS0FBSyxHQUFHO0lBQ1pOLE9BQU8sQ0FBQyxVQUFVLEVBQUUsR0FBRyxnQkFBRSw4REFBQ1IsK0RBQWdCOzs7O2lCQUFHLENBQUM7SUFDOUNRLE9BQU8sQ0FBQyxVQUFVLEVBQUUsR0FBRyxnQkFBRSw4REFBQ1osOERBQWU7Ozs7aUJBQUcsQ0FBQztJQUM3Q1ksT0FBTyxDQUFDLFVBQVUsRUFBRSxHQUFHLGdCQUFFLDhEQUFDYixnRUFBaUI7Ozs7aUJBQUcsQ0FBQztJQUMvQ2EsT0FBTyxDQUFDLGdCQUFnQixFQUFFLE1BQU0sZ0JBQUUsOERBQUNYLDJEQUFZOzs7O2lCQUFHLEVBQUU7UUFDbERXLE9BQU8sQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDO1FBQ3hCQSxPQUFPLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQztRQUN4QkEsT0FBTyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUM7UUFDeEJBLE9BQU8sQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDO0tBQ3pCLENBQUM7SUFDRkEsT0FBTyxDQUFDLGdCQUFnQixFQUFFLE1BQU0sZ0JBQUUsOERBQUNkLCtEQUFnQjs7OztpQkFBRyxFQUFFO1FBQ3REYyxPQUFPLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQztRQUN4QkEsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUM7UUFDMUJBLE9BQU8sQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUMvQkEsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUM7WUFDMUJBLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDO1NBQzNCLENBQUM7S0FDSCxDQUFDO0NBQ0g7QUFFTSxJQUFNTyxpQkFBaUIsR0FBRyxXQUFNOztJQUNyQyxJQUFrQ1YsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUExQ1csU0FBUyxHQUFrQlgsR0FBZSxHQUFqQyxFQUFFWSxZQUFZLEdBQUlaLEdBQWUsR0FBbkI7SUFFOUIsSUFBTWEsZUFBZSxHQUFHLFdBQU07UUFDNUJELFlBQVksQ0FBQyxDQUFDRCxTQUFTLENBQUMsQ0FBQztLQUMxQjtJQUVELHFCQUNFLDhEQUFDVCxLQUFLO1FBQUNZLFdBQVc7a0JBQ2hCLDRFQUFDakIsc0NBQUk7WUFDSGtCLG1CQUFtQixFQUFFO2dCQUFDLEdBQUc7YUFBQztZQUMxQkMsZUFBZSxFQUFFO2dCQUFDLE1BQU07Z0JBQUUsTUFBTTthQUFDO1lBQ2pDQyxJQUFJLEVBQUMsUUFBUTtZQUNiQyxlQUFlLEVBQUVQLFNBQVM7WUFDMUJGLEtBQUssRUFBRUEsS0FBSzs7Ozs7aUJBQ1o7Ozs7O2FBQ0ksQ0FDUjtDQUNILENBQUM7R0FsQldDLGlCQUFpQjtBQUFqQkEsS0FBQUEsaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2L0FkbWluTmF2Q29tcG9uZW50LmpzP2Q5YjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQXBwc3RvcmVPdXRsaW5lZCxcbiAgQ29udGFpbmVyT3V0bGluZWQsXG4gIERlc2t0b3BPdXRsaW5lZCxcbiAgTWFpbE91dGxpbmVkLFxuICBNZW51Rm9sZE91dGxpbmVkLFxuICBNZW51VW5mb2xkT3V0bGluZWQsXG4gIFBpZUNoYXJ0T3V0bGluZWQsXG59IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcbmltcG9ydCB7IEJ1dHRvbiwgTWVudSwgTGF5b3V0IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCB7IFNpZGVyIH0gPSBMYXlvdXQ7XG5cbmNvbnN0IGdldEl0ZW0gPSAobGFiZWwsIGtleSwgaWNvbiwgY2hpbGRyZW4sIHR5cGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBrZXksXG4gICAgaWNvbixcbiAgICBjaGlsZHJlbixcbiAgICBsYWJlbCxcbiAgICB0eXBlLFxuICB9O1xufTtcblxuY29uc3QgaXRlbXMgPSBbXG4gIGdldEl0ZW0oJ09wdGlvbiAxJywgJzEnLCA8UGllQ2hhcnRPdXRsaW5lZCAvPiksXG4gIGdldEl0ZW0oJ09wdGlvbiAyJywgJzInLCA8RGVza3RvcE91dGxpbmVkIC8+KSxcbiAgZ2V0SXRlbSgnT3B0aW9uIDMnLCAnMycsIDxDb250YWluZXJPdXRsaW5lZCAvPiksXG4gIGdldEl0ZW0oJ05hdmlnYXRpb24gT25lJywgJ3N1YjEnLCA8TWFpbE91dGxpbmVkIC8+LCBbXG4gICAgZ2V0SXRlbSgnT3B0aW9uIDUnLCAnNScpLFxuICAgIGdldEl0ZW0oJ09wdGlvbiA2JywgJzYnKSxcbiAgICBnZXRJdGVtKCdPcHRpb24gNycsICc3JyksXG4gICAgZ2V0SXRlbSgnT3B0aW9uIDgnLCAnOCcpLFxuICBdKSxcbiAgZ2V0SXRlbSgnTmF2aWdhdGlvbiBUd28nLCAnc3ViMicsIDxBcHBzdG9yZU91dGxpbmVkIC8+LCBbXG4gICAgZ2V0SXRlbSgnT3B0aW9uIDknLCAnOScpLFxuICAgIGdldEl0ZW0oJ09wdGlvbiAxMCcsICcxMCcpLFxuICAgIGdldEl0ZW0oJ1N1Ym1lbnUnLCAnc3ViMycsIG51bGwsIFtcbiAgICAgIGdldEl0ZW0oJ09wdGlvbiAxMScsICcxMScpLFxuICAgICAgZ2V0SXRlbSgnT3B0aW9uIDEyJywgJzEyJyksXG4gICAgXSksXG4gIF0pLFxuXTtcblxuZXhwb3J0IGNvbnN0IEFkbWluTmF2Q29tcG9uZW50ID0gKCkgPT4ge1xuICBjb25zdCBbY29sbGFwc2VkLCBzZXRDb2xsYXBzZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHRvZ2dsZUNvbGxhcHNlZCA9ICgpID0+IHtcbiAgICBzZXRDb2xsYXBzZWQoIWNvbGxhcHNlZCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8U2lkZXIgY29sbGFwc2libGU+XG4gICAgICA8TWVudVxuICAgICAgICBkZWZhdWx0U2VsZWN0ZWRLZXlzPXtbJzEnXX1cbiAgICAgICAgZGVmYXVsdE9wZW5LZXlzPXtbJ3N1YjEnLCAnc3ViMiddfVxuICAgICAgICBtb2RlPVwiaW5saW5lXCJcbiAgICAgICAgaW5saW5lQ29sbGFwc2VkPXtjb2xsYXBzZWR9XG4gICAgICAgIGl0ZW1zPXtpdGVtc31cbiAgICAgIC8+XG4gICAgPC9TaWRlcj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiQXBwc3RvcmVPdXRsaW5lZCIsIkNvbnRhaW5lck91dGxpbmVkIiwiRGVza3RvcE91dGxpbmVkIiwiTWFpbE91dGxpbmVkIiwiTWVudUZvbGRPdXRsaW5lZCIsIk1lbnVVbmZvbGRPdXRsaW5lZCIsIlBpZUNoYXJ0T3V0bGluZWQiLCJCdXR0b24iLCJNZW51IiwiTGF5b3V0IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJTaWRlciIsImdldEl0ZW0iLCJsYWJlbCIsImtleSIsImljb24iLCJjaGlsZHJlbiIsInR5cGUiLCJpdGVtcyIsIkFkbWluTmF2Q29tcG9uZW50IiwiY29sbGFwc2VkIiwic2V0Q29sbGFwc2VkIiwidG9nZ2xlQ29sbGFwc2VkIiwiY29sbGFwc2libGUiLCJkZWZhdWx0U2VsZWN0ZWRLZXlzIiwiZGVmYXVsdE9wZW5LZXlzIiwibW9kZSIsImlubGluZUNvbGxhcHNlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/nav/AdminNavComponent.js\n"));

/***/ })

});