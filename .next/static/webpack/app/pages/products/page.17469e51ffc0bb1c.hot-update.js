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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BarraPesquisa; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"(app-pages-browser)/./src/componentes/BarraPesquisa/style.css\");\n/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/AppContext */ \"(app-pages-browser)/./src/context/AppContext.js\");\n/* harmony import */ var _Requisicoes_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Requisicoes/get */ \"(app-pages-browser)/./src/Requisicoes/get.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction BarraPesquisa() {\n    _s();\n    const [buscarProdutos, setBuscarProdutos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [botaoClicado, setBotaoClicado] = use;\n    const { setProdutos } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const produtosRequisicao = new _Requisicoes_get__WEBPACK_IMPORTED_MODULE_4__[\"default\"](setProdutos, buscarProdutos);\n        produtosRequisicao.metodoUseEffect();\n    }, []);\n    const metodoBuscarProdutos = (ev)=>{\n        ev.preventDefault();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            action: \"\",\n            onSubmit: metodoBuscarProdutos,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"search\",\n                    value: buscarProdutos,\n                    placeholder: \"Buscar Produtos\",\n                    className: \"barraProdutos\",\n                    onChange: (ev)=>setBuscarProdutos(ev.target.value),\n                    required: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\BarraPesquisa\\\\barraPesquisa.jsx\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submmit\",\n                    children: \"Buscar\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\BarraPesquisa\\\\barraPesquisa.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\BarraPesquisa\\\\barraPesquisa.jsx\",\n            lineNumber: 26,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(BarraPesquisa, \"nGFGK1lBfSEi+rWnIAbu7bEhfIo=\");\n_c = BarraPesquisa;\nvar _c;\n$RefreshReg$(_c, \"BarraPesquisa\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRlcy9CYXJyYVBlc3F1aXNhL2JhcnJhUGVzcXVpc2EuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUV1RDtBQUNuQztBQUMwQjtBQUNWO0FBRXJCLFNBQVNLOztJQUNwQixNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUlMLCtDQUFRQSxDQUFDO0lBQ3RELE1BQU0sQ0FBQ00sY0FBY0MsZ0JBQWdCLEdBQUdDO0lBQ3hDLE1BQU0sRUFBQ0MsV0FBVyxFQUFDLEdBQUlYLGlEQUFVQSxDQUFDRywyREFBVUE7SUFHNUNGLGdEQUFTQSxDQUFDO1FBQ04sTUFBTVcscUJBQXFCLElBQUlSLHdEQUFHQSxDQUFDTyxhQUFhTDtRQUNoRE0sbUJBQW1CQyxlQUFlO0lBQ3RDLEdBQUUsRUFBRTtJQUNKLE1BQU1DLHVCQUF1QixDQUFDQztRQUMxQkEsR0FBR0MsY0FBYztJQUdyQjtJQUVBLHFCQUNJO2tCQUNJLDRFQUFDQztZQUFLQyxRQUFPO1lBQUdDLFVBQVVMOzs4QkFDdEIsOERBQUNNO29CQUFNQyxNQUFLO29CQUNaQyxPQUFPaEI7b0JBQ1BpQixhQUFZO29CQUNaQyxXQUFVO29CQUNWQyxVQUFVLENBQUNWLEtBQU1SLGtCQUFrQlEsR0FBR1csTUFBTSxDQUFDSixLQUFLO29CQUNsREssUUFBUTs7Ozs7OzhCQUdSLDhEQUFDQztvQkFBT1AsTUFBSzs4QkFBVTs7Ozs7Ozs7Ozs7OztBQUt2QztHQWhDd0JoQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50ZXMvQmFycmFQZXNxdWlzYS9iYXJyYVBlc3F1aXNhLmpzeD9lY2IzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxyXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiQC9jb250ZXh0L0FwcENvbnRleHRcIjtcclxuaW1wb3J0IEdldCBmcm9tIFwiQC9SZXF1aXNpY29lcy9nZXRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhcnJhUGVzcXVpc2EoKXtcclxuICAgIGNvbnN0IFtidXNjYXJQcm9kdXRvcywgc2V0QnVzY2FyUHJvZHV0b3NdID0gIHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2JvdGFvQ2xpY2Fkbywgc2V0Qm90YW9DbGljYWRvXSA9IHVzZVxyXG4gICAgY29uc3Qge3NldFByb2R1dG9zfSA9ICB1c2VDb250ZXh0KEFwcENvbnRleHQpXHJcbiBcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgY29uc3QgcHJvZHV0b3NSZXF1aXNpY2FvID0gbmV3IEdldChzZXRQcm9kdXRvcywgYnVzY2FyUHJvZHV0b3MpO1xyXG4gICAgICAgIHByb2R1dG9zUmVxdWlzaWNhby5tZXRvZG9Vc2VFZmZlY3QoKTtcclxuICAgIH0sW10pXHJcbiAgICBjb25zdCBtZXRvZG9CdXNjYXJQcm9kdXRvcyA9IChldik9PntcclxuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIG9uU3VibWl0PXttZXRvZG9CdXNjYXJQcm9kdXRvc30+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17YnVzY2FyUHJvZHV0b3N9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJ1c2NhciBQcm9kdXRvc1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiYXJyYVByb2R1dG9zXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXYpPT4gc2V0QnVzY2FyUHJvZHV0b3MoZXYudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtbWl0XCI+QnVzY2FyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXBwQ29udGV4dCIsIkdldCIsIkJhcnJhUGVzcXVpc2EiLCJidXNjYXJQcm9kdXRvcyIsInNldEJ1c2NhclByb2R1dG9zIiwiYm90YW9DbGljYWRvIiwic2V0Qm90YW9DbGljYWRvIiwidXNlIiwic2V0UHJvZHV0b3MiLCJwcm9kdXRvc1JlcXVpc2ljYW8iLCJtZXRvZG9Vc2VFZmZlY3QiLCJtZXRvZG9CdXNjYXJQcm9kdXRvcyIsImV2IiwicHJldmVudERlZmF1bHQiLCJmb3JtIiwiYWN0aW9uIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwiY2xhc3NOYW1lIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/componentes/BarraPesquisa/barraPesquisa.jsx\n"));

/***/ })

});