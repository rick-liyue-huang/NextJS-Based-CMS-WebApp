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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AdminNavComponent\": function() { return /* binding */ AdminNavComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Sider = antd__WEBPACK_IMPORTED_MODULE_2__.Layout.Sider;\nvar getItem = function(label, key, icon, children, type) {\n    return {\n        key: key,\n        icon: icon,\n        children: children,\n        label: label,\n        type: type\n    };\n};\nvar items = [\n    getItem(\"Option 1\", \"1\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.PieChartOutlined, {}, void 0, false, {\n        fileName: \"/Users/rickhuang/WebstormProjects/nextjs-based-cms-project/frontend/components/nav/AdminNavComponent.js\",\n        lineNumber: 26,\n        columnNumber: 28\n    }, undefined)),\n    getItem(\"Option 2\", \"2\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.DesktopOutlined, {}, void 0, false, {\n        fileName: \"/Users/rickhuang/WebstormProjects/nextjs-based-cms-project/frontend/components/nav/AdminNavComponent.js\",\n        lineNumber: 27,\n        columnNumber: 28\n    }, undefined)),\n    getItem(\"Option 3\", \"3\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.ContainerOutlined, {}, void 0, false, {\n        fileName: \"/Users/rickhuang/WebstormProjects/nextjs-based-cms-project/frontend/components/nav/AdminNavComponent.js\",\n        lineNumber: 28,\n        columnNumber: 28\n    }, undefined)),\n    getItem(\"Navigation One\", \"sub1\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.MailOutlined, {}, void 0, false, {\n        fileName: \"/Users/rickhuang/WebstormProjects/nextjs-based-cms-project/frontend/components/nav/AdminNavComponent.js\",\n        lineNumber: 29,\n        columnNumber: 37\n    }, undefined), [\n        getItem(\"Option 5\", \"5\"),\n        getItem(\"Option 6\", \"6\"),\n        getItem(\"Option 7\", \"7\"),\n        getItem(\"Option 8\", \"8\"), \n    ]),\n    getItem(\"Navigation Two\", \"sub2\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.AppstoreOutlined, {}, void 0, false, {\n        fileName: \"/Users/rickhuang/WebstormProjects/nextjs-based-cms-project/frontend/components/nav/AdminNavComponent.js\",\n        lineNumber: 35,\n        columnNumber: 37\n    }, undefined), [\n        getItem(\"Option 9\", \"9\"),\n        getItem(\"Option 10\", \"10\"),\n        getItem(\"Submenu\", \"sub3\", null, [\n            getItem(\"Option 11\", \"11\"),\n            getItem(\"Option 12\", \"12\"), \n        ]), \n    ]), \n];\nvar AdminNavComponent = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), collapsed = ref[0], setCollapsed = ref[1];\n    var toggleCollapsed = function() {\n        setCollapsed(!collapsed);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sider, {\n        collapsible: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Menu, {\n            defaultSelectedKeys: [\n                \"1\"\n            ],\n            defaultOpenKeys: [\n                \"sub1\",\n                \"sub2\"\n            ],\n            mode: \"inline\",\n            theme: \"dark\",\n            inlineCollapsed: collapsed,\n            items: items\n        }, void 0, false, {\n            fileName: \"/Users/rickhuang/WebstormProjects/nextjs-based-cms-project/frontend/components/nav/AdminNavComponent.js\",\n            lineNumber: 54,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/rickhuang/WebstormProjects/nextjs-based-cms-project/frontend/components/nav/AdminNavComponent.js\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, _this);\n};\n_s(AdminNavComponent, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = AdminNavComponent;\nvar _c;\n$RefreshReg$(_c, \"AdminNavComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdi9BZG1pbk5hdkNvbXBvbmVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBUTJCO0FBQ2lCO0FBQ0o7O0FBRXhDLElBQU0sS0FBTyxHQUFLUyw4Q0FBTDtBQUViLElBQU1JLE9BQU8sR0FBRyxTQUFDQyxLQUFLLEVBQUVDLEdBQUcsRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUVDLElBQUksRUFBSztJQUNwRCxPQUFPO1FBQ0xILEdBQUcsRUFBSEEsR0FBRztRQUNIQyxJQUFJLEVBQUpBLElBQUk7UUFDSkMsUUFBUSxFQUFSQSxRQUFRO1FBQ1JILEtBQUssRUFBTEEsS0FBSztRQUNMSSxJQUFJLEVBQUpBLElBQUk7S0FDTCxDQUFDO0NBQ0g7QUFFRCxJQUFNQyxLQUFLLEdBQUc7SUFDWk4sT0FBTyxDQUFDLFVBQVUsRUFBRSxHQUFHLGdCQUFFLDhEQUFDUCwrREFBZ0I7Ozs7aUJBQUcsQ0FBQztJQUM5Q08sT0FBTyxDQUFDLFVBQVUsRUFBRSxHQUFHLGdCQUFFLDhEQUFDWCw4REFBZTs7OztpQkFBRyxDQUFDO0lBQzdDVyxPQUFPLENBQUMsVUFBVSxFQUFFLEdBQUcsZ0JBQUUsOERBQUNaLGdFQUFpQjs7OztpQkFBRyxDQUFDO0lBQy9DWSxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBRSw4REFBQ1YsMkRBQVk7Ozs7aUJBQUcsRUFBRTtRQUNsRFUsT0FBTyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUM7UUFDeEJBLE9BQU8sQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDO1FBQ3hCQSxPQUFPLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQztRQUN4QkEsT0FBTyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUM7S0FDekIsQ0FBQztJQUNGQSxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxnQkFBRSw4REFBQ2IsK0RBQWdCOzs7O2lCQUFHLEVBQUU7UUFDdERhLE9BQU8sQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDO1FBQ3hCQSxPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQztRQUMxQkEsT0FBTyxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBQy9CQSxPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQztZQUMxQkEsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUM7U0FDM0IsQ0FBQztLQUNILENBQUM7Q0FDSDtBQUVNLElBQU1PLGlCQUFpQixHQUFHLFdBQU07O0lBQ3JDLElBQWtDVCxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQTFDVSxTQUFTLEdBQWtCVixHQUFlLEdBQWpDLEVBQUVXLFlBQVksR0FBSVgsR0FBZSxHQUFuQjtJQUU5QixJQUFNWSxlQUFlLEdBQUcsV0FBTTtRQUM1QkQsWUFBWSxDQUFDLENBQUNELFNBQVMsQ0FBQyxDQUFDO0tBQzFCO0lBRUQscUJBQ0UsOERBQUNULEtBQUs7UUFBQ1ksV0FBVztrQkFDaEIsNEVBQUNoQixzQ0FBSTtZQUNIaUIsbUJBQW1CLEVBQUU7Z0JBQUMsR0FBRzthQUFDO1lBQzFCQyxlQUFlLEVBQUU7Z0JBQUMsTUFBTTtnQkFBRSxNQUFNO2FBQUM7WUFDakNDLElBQUksRUFBQyxRQUFRO1lBQ2JDLEtBQUssRUFBQyxNQUFNO1lBQ1pDLGVBQWUsRUFBRVIsU0FBUztZQUMxQkYsS0FBSyxFQUFFQSxLQUFLOzs7OztpQkFDWjs7Ozs7YUFDSSxDQUNSO0NBQ0gsQ0FBQztHQW5CV0MsaUJBQWlCO0FBQWpCQSxLQUFBQSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYvQWRtaW5OYXZDb21wb25lbnQuanM/ZDliNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBcHBzdG9yZU91dGxpbmVkLFxuICBDb250YWluZXJPdXRsaW5lZCxcbiAgRGVza3RvcE91dGxpbmVkLFxuICBNYWlsT3V0bGluZWQsXG4gIE1lbnVGb2xkT3V0bGluZWQsXG4gIE1lbnVVbmZvbGRPdXRsaW5lZCxcbiAgUGllQ2hhcnRPdXRsaW5lZCxcbn0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xuaW1wb3J0IHsgQnV0dG9uLCBNZW51LCBMYXlvdXQgfSBmcm9tICdhbnRkJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgeyBTaWRlciB9ID0gTGF5b3V0O1xuXG5jb25zdCBnZXRJdGVtID0gKGxhYmVsLCBrZXksIGljb24sIGNoaWxkcmVuLCB0eXBlKSA9PiB7XG4gIHJldHVybiB7XG4gICAga2V5LFxuICAgIGljb24sXG4gICAgY2hpbGRyZW4sXG4gICAgbGFiZWwsXG4gICAgdHlwZSxcbiAgfTtcbn07XG5cbmNvbnN0IGl0ZW1zID0gW1xuICBnZXRJdGVtKCdPcHRpb24gMScsICcxJywgPFBpZUNoYXJ0T3V0bGluZWQgLz4pLFxuICBnZXRJdGVtKCdPcHRpb24gMicsICcyJywgPERlc2t0b3BPdXRsaW5lZCAvPiksXG4gIGdldEl0ZW0oJ09wdGlvbiAzJywgJzMnLCA8Q29udGFpbmVyT3V0bGluZWQgLz4pLFxuICBnZXRJdGVtKCdOYXZpZ2F0aW9uIE9uZScsICdzdWIxJywgPE1haWxPdXRsaW5lZCAvPiwgW1xuICAgIGdldEl0ZW0oJ09wdGlvbiA1JywgJzUnKSxcbiAgICBnZXRJdGVtKCdPcHRpb24gNicsICc2JyksXG4gICAgZ2V0SXRlbSgnT3B0aW9uIDcnLCAnNycpLFxuICAgIGdldEl0ZW0oJ09wdGlvbiA4JywgJzgnKSxcbiAgXSksXG4gIGdldEl0ZW0oJ05hdmlnYXRpb24gVHdvJywgJ3N1YjInLCA8QXBwc3RvcmVPdXRsaW5lZCAvPiwgW1xuICAgIGdldEl0ZW0oJ09wdGlvbiA5JywgJzknKSxcbiAgICBnZXRJdGVtKCdPcHRpb24gMTAnLCAnMTAnKSxcbiAgICBnZXRJdGVtKCdTdWJtZW51JywgJ3N1YjMnLCBudWxsLCBbXG4gICAgICBnZXRJdGVtKCdPcHRpb24gMTEnLCAnMTEnKSxcbiAgICAgIGdldEl0ZW0oJ09wdGlvbiAxMicsICcxMicpLFxuICAgIF0pLFxuICBdKSxcbl07XG5cbmV4cG9ydCBjb25zdCBBZG1pbk5hdkNvbXBvbmVudCA9ICgpID0+IHtcbiAgY29uc3QgW2NvbGxhcHNlZCwgc2V0Q29sbGFwc2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB0b2dnbGVDb2xsYXBzZWQgPSAoKSA9PiB7XG4gICAgc2V0Q29sbGFwc2VkKCFjb2xsYXBzZWQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFNpZGVyIGNvbGxhcHNpYmxlPlxuICAgICAgPE1lbnVcbiAgICAgICAgZGVmYXVsdFNlbGVjdGVkS2V5cz17WycxJ119XG4gICAgICAgIGRlZmF1bHRPcGVuS2V5cz17WydzdWIxJywgJ3N1YjInXX1cbiAgICAgICAgbW9kZT1cImlubGluZVwiXG4gICAgICAgIHRoZW1lPVwiZGFya1wiXG4gICAgICAgIGlubGluZUNvbGxhcHNlZD17Y29sbGFwc2VkfVxuICAgICAgICBpdGVtcz17aXRlbXN9XG4gICAgICAvPlxuICAgIDwvU2lkZXI+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIkFwcHN0b3JlT3V0bGluZWQiLCJDb250YWluZXJPdXRsaW5lZCIsIkRlc2t0b3BPdXRsaW5lZCIsIk1haWxPdXRsaW5lZCIsIk1lbnVGb2xkT3V0bGluZWQiLCJNZW51VW5mb2xkT3V0bGluZWQiLCJQaWVDaGFydE91dGxpbmVkIiwiQnV0dG9uIiwiTWVudSIsIkxheW91dCIsIlJlYWN0IiwidXNlU3RhdGUiLCJTaWRlciIsImdldEl0ZW0iLCJsYWJlbCIsImtleSIsImljb24iLCJjaGlsZHJlbiIsInR5cGUiLCJpdGVtcyIsIkFkbWluTmF2Q29tcG9uZW50IiwiY29sbGFwc2VkIiwic2V0Q29sbGFwc2VkIiwidG9nZ2xlQ29sbGFwc2VkIiwiY29sbGFwc2libGUiLCJkZWZhdWx0U2VsZWN0ZWRLZXlzIiwiZGVmYXVsdE9wZW5LZXlzIiwibW9kZSIsInRoZW1lIiwiaW5saW5lQ29sbGFwc2VkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/nav/AdminNavComponent.js\n"));

/***/ })

});