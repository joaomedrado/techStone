"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/pages/products/page",{

/***/ "(app-pages-browser)/./src/componentes/BarraPesquisa/barraPesquisa.jsx":
/*!*********************************************************!*\
  !*** ./src/componentes/BarraPesquisa/barraPesquisa.jsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BarraPesquisa; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"(app-pages-browser)/./src/componentes/BarraPesquisa/style.css\");\n/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/AppContext */ \"(app-pages-browser)/./src/context/AppContext.js\");\n/* harmony import */ var _Requisicoes_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Requisicoes/get */ \"(app-pages-browser)/./src/Requisicoes/get.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction BarraPesquisa() {\n    _s();\n    var _s1 = $RefreshSig$();\n    const [buscarProdutos, setBuscarProdutos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { setProdutos } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n    const metodoBuscarProdutos = (ev)=>{\n        _s1();\n        ev.preventDefault();\n        const produtos = new _Requisicoes_get__WEBPACK_IMPORTED_MODULE_4__[\"default\"](setProdutos, buscarProdutos);\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n            produtos.metodoUseEffect();\n        });\n    };\n    _s1(metodoBuscarProdutos, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            action: \"\",\n            onSubmit: metodoBuscarProdutos,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"search\",\n                    value: buscarProdutos,\n                    placeholder: \"Buscar Produtos\",\n                    className: \"barraProdutos\",\n                    onChange: (ev)=>setBuscarProdutos(ev.target.value),\n                    required: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\BarraPesquisa\\\\barraPesquisa.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submmit\",\n                    children: \"Buscar\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\BarraPesquisa\\\\barraPesquisa.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\BarraPesquisa\\\\barraPesquisa.jsx\",\n            lineNumber: 22,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(BarraPesquisa, \"1VXQEJ7oDwRBtFWAJX3Vy2oi3+w=\");\n_c = BarraPesquisa;\nvar _c;\n$RefreshReg$(_c, \"BarraPesquisa\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRlcy9CYXJyYVBlc3F1aXNhL2JhcnJhUGVzcXVpc2EuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF1RDtBQUNuQztBQUMwQjtBQUNWO0FBRXJCLFNBQVNLOzs7SUFDcEIsTUFBTSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFJTCwrQ0FBUUEsQ0FBQztJQUN0RCxNQUFNLEVBQUNNLFdBQVcsRUFBQyxHQUFJUixpREFBVUEsQ0FBQ0csMkRBQVVBO0lBRTVDLE1BQU1NLHVCQUF1QixDQUFDQzs7UUFDMUJBLEdBQUdDLGNBQWM7UUFFakIsTUFBTUMsV0FBVyxJQUFJUix3REFBR0EsQ0FBQ0ksYUFBYUY7UUFFdENMLGdEQUFTQSxDQUFDO1lBQ05XLFNBQVNDLGVBQWU7UUFDNUI7SUFDSjtRQVJNSjtJQVVOLHFCQUNJO2tCQUNJLDRFQUFDSztZQUFLQyxRQUFPO1lBQUdDLFVBQVVQOzs4QkFDdEIsOERBQUNRO29CQUFNQyxNQUFLO29CQUNaQyxPQUFPYjtvQkFDUGMsYUFBWTtvQkFDWkMsV0FBVTtvQkFDVkMsVUFBVSxDQUFDWixLQUFNSCxrQkFBa0JHLEdBQUdhLE1BQU0sQ0FBQ0osS0FBSztvQkFDbERLLFFBQVE7Ozs7Ozs4QkFHUiw4REFBQ0M7b0JBQU9QLE1BQUs7OEJBQVU7Ozs7Ozs7Ozs7Ozs7QUFLdkM7R0E5QndCYjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50ZXMvQmFycmFQZXNxdWlzYS9iYXJyYVBlc3F1aXNhLmpzeD9lY2IzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiXHJcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCJAL2NvbnRleHQvQXBwQ29udGV4dFwiO1xyXG5pbXBvcnQgR2V0IGZyb20gXCJAL1JlcXVpc2ljb2VzL2dldFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFycmFQZXNxdWlzYSgpe1xyXG4gICAgY29uc3QgW2J1c2NhclByb2R1dG9zLCBzZXRCdXNjYXJQcm9kdXRvc10gPSAgdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCB7c2V0UHJvZHV0b3N9ID0gIHVzZUNvbnRleHQoQXBwQ29udGV4dClcclxuXHJcbiAgICBjb25zdCBtZXRvZG9CdXNjYXJQcm9kdXRvcyA9IChldik9PntcclxuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9kdXRvcyA9IG5ldyBHZXQoc2V0UHJvZHV0b3MsIGJ1c2NhclByb2R1dG9zKTtcclxuXHJcbiAgICAgICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgICAgIHByb2R1dG9zLm1ldG9kb1VzZUVmZmVjdCgpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCIgb25TdWJtaXQ9e21ldG9kb0J1c2NhclByb2R1dG9zfT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtidXNjYXJQcm9kdXRvc31cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQnVzY2FyIFByb2R1dG9zXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJhcnJhUHJvZHV0b3NcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldik9PiBzZXRCdXNjYXJQcm9kdXRvcyhldi50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1taXRcIj5CdXNjYXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBcHBDb250ZXh0IiwiR2V0IiwiQmFycmFQZXNxdWlzYSIsImJ1c2NhclByb2R1dG9zIiwic2V0QnVzY2FyUHJvZHV0b3MiLCJzZXRQcm9kdXRvcyIsIm1ldG9kb0J1c2NhclByb2R1dG9zIiwiZXYiLCJwcmV2ZW50RGVmYXVsdCIsInByb2R1dG9zIiwibWV0b2RvVXNlRWZmZWN0IiwiZm9ybSIsImFjdGlvbiIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJwbGFjZWhvbGRlciIsImNsYXNzTmFtZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicmVxdWlyZWQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/componentes/BarraPesquisa/barraPesquisa.jsx\n"));

/***/ })

});