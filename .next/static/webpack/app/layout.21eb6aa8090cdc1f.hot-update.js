"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/context/Provider.jsx":
/*!**********************************!*\
  !*** ./src/context/Provider.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Provider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppContext */ \"(app-pages-browser)/./src/context/AppContext.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Provider(param) {\n    let { children } = param;\n    _s();\n    const [carrinho, setCarrinho] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [produtos, setProdutos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [buscarProdutos, setBuscarProdutos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const carrinhoLocalStorage = JSON.parse(localStorage.getItem(\"carrinho\"));\n    });\n    const value = {\n        carrinho,\n        setCarrinho,\n        produtos,\n        setProdutos,\n        loading,\n        setLoading,\n        buscarProdutos,\n        setBuscarProdutos\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AppContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\context\\\\Provider.jsx\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, this);\n}\n_s(Provider, \"zJFa3gxWQHA04k6RlSgJjUKcdM8=\");\n_c = Provider;\nvar _c;\n$RefreshReg$(_c, \"Provider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250ZXh0L1Byb3ZpZGVyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRTJDO0FBQ0w7QUFFdkIsU0FBU0csU0FBUyxLQUFZO1FBQVosRUFBRUMsUUFBUSxFQUFFLEdBQVo7O0lBRTdCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLE1BQU0sQ0FBQ00sVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLE1BQU0sQ0FBQ1EsU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNVLGdCQUFnQkMsa0JBQWtCLEdBQUdYLCtDQUFRQSxDQUFDO0lBRXJERCxnREFBU0EsQ0FBQztRQUNOLE1BQU1hLHVCQUF1QkMsS0FBS0MsS0FBSyxDQUFDQyxhQUFhQyxPQUFPLENBQUM7SUFDakU7SUFFQSxNQUFNQyxRQUFRO1FBQ1ZiO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO1FBQ0FDO0lBQ0o7SUFHQSxxQkFDSSw4REFBQ1YsbURBQVVBLENBQUNDLFFBQVE7UUFBQ2UsT0FBT0E7a0JBQ3ZCZDs7Ozs7O0FBR2I7R0E1QndCRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dC9Qcm92aWRlci5qc3g/N2Q3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuL0FwcENvbnRleHRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG5cclxuICAgIGNvbnN0IFtjYXJyaW5obywgc2V0Q2FycmluaG9dID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3Byb2R1dG9zLCBzZXRQcm9kdXRvc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gICAgY29uc3QgW2J1c2NhclByb2R1dG9zLCBzZXRCdXNjYXJQcm9kdXRvc10gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBjb25zdCBjYXJyaW5ob0xvY2FsU3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXJyaW5ob1wiKSlcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgdmFsdWUgPSB7XHJcbiAgICAgICAgY2FycmluaG8sXHJcbiAgICAgICAgc2V0Q2FycmluaG8sXHJcbiAgICAgICAgcHJvZHV0b3MsXHJcbiAgICAgICAgc2V0UHJvZHV0b3MsXHJcbiAgICAgICAgbG9hZGluZyxcclxuICAgICAgICBzZXRMb2FkaW5nLFxyXG4gICAgICAgIGJ1c2NhclByb2R1dG9zLFxyXG4gICAgICAgIHNldEJ1c2NhclByb2R1dG9zXHJcbiAgICB9XHJcbiAgICBcclxuICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBcHBDb250ZXh0IiwiUHJvdmlkZXIiLCJjaGlsZHJlbiIsImNhcnJpbmhvIiwic2V0Q2FycmluaG8iLCJwcm9kdXRvcyIsInNldFByb2R1dG9zIiwibG9hZGluZyIsInNldExvYWRpbmciLCJidXNjYXJQcm9kdXRvcyIsInNldEJ1c2NhclByb2R1dG9zIiwiY2FycmluaG9Mb2NhbFN0b3JhZ2UiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/context/Provider.jsx\n"));

/***/ })

});