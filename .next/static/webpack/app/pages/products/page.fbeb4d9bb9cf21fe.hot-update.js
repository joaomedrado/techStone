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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BarraPesquisa; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"(app-pages-browser)/./src/componentes/BarraPesquisa/style.css\");\n/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/AppContext */ \"(app-pages-browser)/./src/context/AppContext.js\");\n/* harmony import */ var _Requisicoes_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Requisicoes/get */ \"(app-pages-browser)/./src/Requisicoes/get.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction BarraPesquisa() {\n    _s();\n    const [buscarProdutos, setBuscarProdutos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [botaoClicado, setBotaoClicado] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { setProdutos } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n    const { setLoading } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (botaoClicado) {\n            const produtosRequisicao = new _Requisicoes_get__WEBPACK_IMPORTED_MODULE_4__[\"default\"](setProdutos, buscarProdutos);\n            produtosRequisicao.metodoUseEffect();\n            setBotaoClicado(false);\n        }\n    }, [\n        botaoClicado\n    ]);\n    const metodoBuscarProdutos = (ev)=>{\n        ev.preventDefault();\n        setBotaoClicado(true);\n        setLoading(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            action: \"\",\n            onSubmit: metodoBuscarProdutos,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"search\",\n                    value: buscarProdutos,\n                    placeholder: \"Buscar Produtos\",\n                    className: \"barraProdutos\",\n                    onChange: (ev)=>setBuscarProdutos(ev.target.value),\n                    required: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\BarraPesquisa\\\\barraPesquisa.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submmit\",\n                    children: \"Buscar\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\BarraPesquisa\\\\barraPesquisa.jsx\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\BarraPesquisa\\\\barraPesquisa.jsx\",\n            lineNumber: 33,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(BarraPesquisa, \"W0wbnGF3Z21DXlUVgRUdclQRNys=\");\n_c = BarraPesquisa;\nvar _c;\n$RefreshReg$(_c, \"BarraPesquisa\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRlcy9CYXJyYVBlc3F1aXNhL2JhcnJhUGVzcXVpc2EuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUV1RDtBQUNuQztBQUMwQjtBQUNWO0FBRXJCLFNBQVNLOztJQUNwQixNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUlMLCtDQUFRQSxDQUFDO0lBQ3RELE1BQU0sQ0FBQ00sY0FBY0MsZ0JBQWdCLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sRUFBQ1EsV0FBVyxFQUFDLEdBQUlWLGlEQUFVQSxDQUFDRywyREFBVUE7SUFDNUMsTUFBTSxFQUFDUSxVQUFVLEVBQUMsR0FBR1gsaURBQVVBLENBQUNHLDJEQUFVQTtJQUcxQ0YsZ0RBQVNBLENBQUM7UUFDTixJQUFHTyxjQUFhO1lBQ1osTUFBTUkscUJBQXFCLElBQUlSLHdEQUFHQSxDQUFDTSxhQUFhSjtZQUNoRE0sbUJBQW1CQyxlQUFlO1lBQ2xDSixnQkFBZ0I7UUFDcEI7SUFFSixHQUFFO1FBQUNEO0tBQWE7SUFDaEIsTUFBTU0sdUJBQXVCLENBQUNDO1FBQzFCQSxHQUFHQyxjQUFjO1FBQ2pCUCxnQkFBZ0I7UUFDaEJFLFdBQVc7SUFHZjtJQUVBLHFCQUNJO2tCQUNJLDRFQUFDTTtZQUFLQyxRQUFPO1lBQUdDLFVBQVVMOzs4QkFDdEIsOERBQUNNO29CQUFNQyxNQUFLO29CQUNaQyxPQUFPaEI7b0JBQ1BpQixhQUFZO29CQUNaQyxXQUFVO29CQUNWQyxVQUFVLENBQUNWLEtBQU1SLGtCQUFrQlEsR0FBR1csTUFBTSxDQUFDSixLQUFLO29CQUNsREssUUFBUTs7Ozs7OzhCQUdSLDhEQUFDQztvQkFBT1AsTUFBSzs4QkFBVTs7Ozs7Ozs7Ozs7OztBQUt2QztHQXZDd0JoQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50ZXMvQmFycmFQZXNxdWlzYS9iYXJyYVBlc3F1aXNhLmpzeD9lY2IzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxyXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiQC9jb250ZXh0L0FwcENvbnRleHRcIjtcclxuaW1wb3J0IEdldCBmcm9tIFwiQC9SZXF1aXNpY29lcy9nZXRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhcnJhUGVzcXVpc2EoKXtcclxuICAgIGNvbnN0IFtidXNjYXJQcm9kdXRvcywgc2V0QnVzY2FyUHJvZHV0b3NdID0gIHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2JvdGFvQ2xpY2Fkbywgc2V0Qm90YW9DbGljYWRvXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHtzZXRQcm9kdXRvc30gPSAgdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxuICAgIGNvbnN0IHtzZXRMb2FkaW5nfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcbiBcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYoYm90YW9DbGljYWRvKXtcclxuICAgICAgICAgICAgY29uc3QgcHJvZHV0b3NSZXF1aXNpY2FvID0gbmV3IEdldChzZXRQcm9kdXRvcywgYnVzY2FyUHJvZHV0b3MpO1xyXG4gICAgICAgICAgICBwcm9kdXRvc1JlcXVpc2ljYW8ubWV0b2RvVXNlRWZmZWN0KCk7XHJcbiAgICAgICAgICAgIHNldEJvdGFvQ2xpY2FkbyhmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9LFtib3Rhb0NsaWNhZG9dKVxyXG4gICAgY29uc3QgbWV0b2RvQnVzY2FyUHJvZHV0b3MgPSAoZXYpPT57XHJcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRCb3Rhb0NsaWNhZG8odHJ1ZSk7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIiBvblN1Ym1pdD17bWV0b2RvQnVzY2FyUHJvZHV0b3N9PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2J1c2NhclByb2R1dG9zfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJCdXNjYXIgUHJvZHV0b3NcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmFycmFQcm9kdXRvc1wiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2KT0+IHNldEJ1c2NhclByb2R1dG9zKGV2LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibW1pdFwiPkJ1c2NhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFwcENvbnRleHQiLCJHZXQiLCJCYXJyYVBlc3F1aXNhIiwiYnVzY2FyUHJvZHV0b3MiLCJzZXRCdXNjYXJQcm9kdXRvcyIsImJvdGFvQ2xpY2FkbyIsInNldEJvdGFvQ2xpY2FkbyIsInNldFByb2R1dG9zIiwic2V0TG9hZGluZyIsInByb2R1dG9zUmVxdWlzaWNhbyIsIm1ldG9kb1VzZUVmZmVjdCIsIm1ldG9kb0J1c2NhclByb2R1dG9zIiwiZXYiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm0iLCJhY3Rpb24iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwicGxhY2Vob2xkZXIiLCJjbGFzc05hbWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInJlcXVpcmVkIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/componentes/BarraPesquisa/barraPesquisa.jsx\n"));

/***/ })

});