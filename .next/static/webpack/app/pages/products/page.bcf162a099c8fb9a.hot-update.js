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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BarraPesquisa; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"(app-pages-browser)/./src/componentes/BarraPesquisa/style.css\");\n/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/AppContext */ \"(app-pages-browser)/./src/context/AppContext.js\");\n/* harmony import */ var _Requisicoes_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Requisicoes/get */ \"(app-pages-browser)/./src/Requisicoes/get.js\");\n/* harmony import */ var _barrel_optimize_names_CiSearch_react_icons_ci__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=CiSearch!=!react-icons/ci */ \"(app-pages-browser)/./node_modules/react-icons/ci/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction BarraPesquisa() {\n    _s();\n    const [buscarProdutos, setBuscarProdutos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { setProdutos } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n    const { setLoading } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n    const metodoBuscarProdutos = (ev)=>{\n        ev.preventDefault();\n        const produtosRequisicao = new _Requisicoes_get__WEBPACK_IMPORTED_MODULE_4__[\"default\"](setProdutos, buscarProdutos);\n        produtosRequisicao.metodoUseEffect();\n        setLoading(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            action: \"\",\n            onSubmit: metodoBuscarProdutos,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"search\",\n                    value: buscarProdutos,\n                    placeholder: \"Buscar Produtos\",\n                    className: \"barraProdutos\",\n                    onChange: (ev)=>setBuscarProdutos(ev.target.value),\n                    required: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\BarraPesquisa\\\\barraPesquisa.jsx\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submmit\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CiSearch_react_icons_ci__WEBPACK_IMPORTED_MODULE_5__.CiSearch, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\BarraPesquisa\\\\barraPesquisa.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\BarraPesquisa\\\\barraPesquisa.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\BarraPesquisa\\\\barraPesquisa.jsx\",\n            lineNumber: 26,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(BarraPesquisa, \"39KQc4TFGm4uynv3FCofEltSSsw=\");\n_c = BarraPesquisa;\nvar _c;\n$RefreshReg$(_c, \"BarraPesquisa\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRlcy9CYXJyYVBlc3F1aXNhL2JhcnJhUGVzcXVpc2EuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFdUQ7QUFDbkM7QUFDMEI7QUFDVjtBQUNNO0FBRTNCLFNBQVNNOztJQUNwQixNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUlOLCtDQUFRQSxDQUFDO0lBQ3RELE1BQU0sRUFBQ08sV0FBVyxFQUFDLEdBQUlULGlEQUFVQSxDQUFDRywyREFBVUE7SUFDNUMsTUFBTSxFQUFDTyxVQUFVLEVBQUMsR0FBR1YsaURBQVVBLENBQUNHLDJEQUFVQTtJQUcxQyxNQUFNUSx1QkFBdUIsQ0FBQ0M7UUFDMUJBLEdBQUdDLGNBQWM7UUFDakIsTUFBTUMscUJBQXFCLElBQUlWLHdEQUFHQSxDQUFDSyxhQUFhRjtRQUNoRE8sbUJBQW1CQyxlQUFlO1FBQ2xDTCxXQUFXO0lBR2Y7SUFFQSxxQkFDSTtrQkFDSSw0RUFBQ007WUFBS0MsUUFBTztZQUFHQyxVQUFVUDs7OEJBQ3RCLDhEQUFDUTtvQkFBTUMsTUFBSztvQkFDWkMsT0FBT2Q7b0JBQ1BlLGFBQVk7b0JBQ1pDLFdBQVU7b0JBQ1ZDLFVBQVUsQ0FBQ1osS0FBTUosa0JBQWtCSSxHQUFHYSxNQUFNLENBQUNKLEtBQUs7b0JBQ2xESyxRQUFROzs7Ozs7OEJBR1IsOERBQUNDO29CQUFPUCxNQUFLOzhCQUNULDRFQUFDZixvRkFBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTdCO0dBakN3QkM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudGVzL0JhcnJhUGVzcXVpc2EvYmFycmFQZXNxdWlzYS5qc3g/ZWNiMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCJcclxuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIkAvY29udGV4dC9BcHBDb250ZXh0XCI7XHJcbmltcG9ydCBHZXQgZnJvbSBcIkAvUmVxdWlzaWNvZXMvZ2V0XCI7XHJcbmltcG9ydCB7IENpU2VhcmNoIH0gZnJvbSBcInJlYWN0LWljb25zL2NpXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYXJyYVBlc3F1aXNhKCl7XHJcbiAgICBjb25zdCBbYnVzY2FyUHJvZHV0b3MsIHNldEJ1c2NhclByb2R1dG9zXSA9ICB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IHtzZXRQcm9kdXRvc30gPSAgdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxuICAgIGNvbnN0IHtzZXRMb2FkaW5nfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcbiBcclxuICAgIFxyXG4gICAgY29uc3QgbWV0b2RvQnVzY2FyUHJvZHV0b3MgPSAoZXYpPT57XHJcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBwcm9kdXRvc1JlcXVpc2ljYW8gPSBuZXcgR2V0KHNldFByb2R1dG9zLCBidXNjYXJQcm9kdXRvcyk7XHJcbiAgICAgICAgcHJvZHV0b3NSZXF1aXNpY2FvLm1ldG9kb1VzZUVmZmVjdCgpO1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCIgb25TdWJtaXQ9e21ldG9kb0J1c2NhclByb2R1dG9zfT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtidXNjYXJQcm9kdXRvc31cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQnVzY2FyIFByb2R1dG9zXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJhcnJhUHJvZHV0b3NcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldik9PiBzZXRCdXNjYXJQcm9kdXRvcyhldi50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1taXRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2lTZWFyY2ggLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFwcENvbnRleHQiLCJHZXQiLCJDaVNlYXJjaCIsIkJhcnJhUGVzcXVpc2EiLCJidXNjYXJQcm9kdXRvcyIsInNldEJ1c2NhclByb2R1dG9zIiwic2V0UHJvZHV0b3MiLCJzZXRMb2FkaW5nIiwibWV0b2RvQnVzY2FyUHJvZHV0b3MiLCJldiIsInByZXZlbnREZWZhdWx0IiwicHJvZHV0b3NSZXF1aXNpY2FvIiwibWV0b2RvVXNlRWZmZWN0IiwiZm9ybSIsImFjdGlvbiIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJwbGFjZWhvbGRlciIsImNsYXNzTmFtZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicmVxdWlyZWQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/componentes/BarraPesquisa/barraPesquisa.jsx\n"));

/***/ })

});