"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/pages/[id]/products/page",{

/***/ "(app-pages-browser)/./src/componentes/ProdutosDetalhes/produtoDetalhes.jsx":
/*!**************************************************************!*\
  !*** ./src/componentes/ProdutosDetalhes/produtoDetalhes.jsx ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProdutoDetalhesComponente; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"(app-pages-browser)/./src/componentes/ProdutosDetalhes/style.css\");\n/* harmony import */ var _componentes_Botao_botao__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/componentes/Botao/botao */ \"(app-pages-browser)/./src/componentes/Botao/botao.jsx\");\n/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/AppContext */ \"(app-pages-browser)/./src/context/AppContext.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction ProdutoDetalhesComponente(props) {\n    _s();\n    const { carrinho, setCarrinho } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    const data = props.data;\n    const adicionarCarrinho = ()=>{\n        setCarrinho([\n            ...carrinho,\n            data\n        ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flexCard2\",\n        children: data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flexCard2\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flexImagem\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: data.thumbnail.replace(/\\w\\.jpg/gi, \"W.jpg\"),\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flexDescricao2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: data.title.replace(\"- Distribuidor Autorizado\", \"\")\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                            lineNumber: 23,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: data.description\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                            lineNumber: 24,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"price\",\n                            children: data.price.toLocaleString(\"pt-br\", {\n                                style: \"currency\"\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                            lineNumber: 25,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_componentes_Botao_botao__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            classUnica: \"botaoUnico\",\n                            text: \"Adicionar Carrinho\",\n                            style: \"btn btn-outline-dark\",\n                            rota: \"/pages/carrinho\",\n                            onClick: adicionarCarrinho\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                            lineNumber: 28,\n                            columnNumber: 27\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, data.id, true, {\n            fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n            lineNumber: 18,\n            columnNumber: 17\n        }, this) : null\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this);\n}\n_s(ProdutoDetalhesComponente, \"38fTV3l361wkSIiIsuPGjwsEBLk=\");\n_c = ProdutoDetalhesComponente;\nvar _c;\n$RefreshReg$(_c, \"ProdutoDetalhesComponente\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRlcy9Qcm9kdXRvc0RldGFsaGVzL3Byb2R1dG9EZXRhbGhlcy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ21DO0FBQ2Q7QUFDeUI7QUFDQTtBQUUvQixTQUFTRywwQkFBMEJDLEtBQUs7O0lBRW5ELE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxXQUFXLEVBQUUsR0FBR04saURBQVVBLENBQUNFLDJEQUFVQTtJQUN2RCxNQUFNSyxPQUFPSCxNQUFNRyxJQUFJO0lBRXZCLE1BQU1DLG9CQUFvQjtRQUN0QkYsWUFBWTtlQUFJRDtZQUFVRTtTQUFLO0lBQ25DO0lBQ0EscUJBQ0ksOERBQUNFO1FBQUlDLFdBQVU7a0JBQ1ZILHFCQUNHLDhEQUFDRTtZQUFJQyxXQUFVOzs4QkFDWCw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ1gsNEVBQUNDO3dCQUFJQyxLQUFLTCxLQUFLTSxTQUFTLENBQUNDLE9BQU8sQ0FBQyxhQUFhO3dCQUFVQyxLQUFJOzs7Ozs7Ozs7Ozs4QkFFaEUsOERBQUNOO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ007c0NBQUlULEtBQUtVLEtBQUssQ0FBQ0gsT0FBTyxDQUFDLDZCQUE2Qjs7Ozs7O3NDQUNyRCw4REFBQ0k7c0NBQUdYLEtBQUtZLFdBQVc7Ozs7OztzQ0FDcEIsOERBQUNEOzRCQUFFUixXQUFVO3NDQUFTSCxLQUFLYSxLQUFLLENBQUNDLGNBQWMsQ0FBQyxTQUFRO2dDQUNwREMsT0FBTzs0QkFDWDs7Ozs7O3NDQUNFLDhEQUFDckIsZ0VBQUtBOzRCQUNIc0IsWUFBYTs0QkFDYkMsTUFBTzs0QkFDUEYsT0FBTTs0QkFDTkcsTUFBTzs0QkFDUEMsU0FBU2xCOzs7Ozs7Ozs7Ozs7O1dBZlVELEtBQUtvQixFQUFFOzs7O21CQW1CdkM7Ozs7OztBQUdoQjtHQWpDd0J4QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50ZXMvUHJvZHV0b3NEZXRhbGhlcy9wcm9kdXRvRGV0YWxoZXMuanN4P2IzN2IiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgQm90YW8gZnJvbSBcIkAvY29tcG9uZW50ZXMvQm90YW8vYm90YW9cIjtcclxuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIkAvY29udGV4dC9BcHBDb250ZXh0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdXRvRGV0YWxoZXNDb21wb25lbnRlKHByb3BzKSB7XHJcblxyXG4gICAgY29uc3QgeyBjYXJyaW5obywgc2V0Q2FycmluaG8gfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcbiAgICBjb25zdCBkYXRhID0gcHJvcHMuZGF0YTtcclxuXHJcbiAgICBjb25zdCBhZGljaW9uYXJDYXJyaW5obyA9ICgpID0+IHtcclxuICAgICAgICBzZXRDYXJyaW5obyhbLi4uY2FycmluaG8sIGRhdGFdKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleENhcmQyXCI+XHJcbiAgICAgICAgICAgIHtkYXRhID8oXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhDYXJkMlwiIGtleT17ZGF0YS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4SW1hZ2VtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLnRodW1ibmFpbC5yZXBsYWNlKC9cXHdcXC5qcGcvZ2ksIFwiVy5qcGdcIil9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4RGVzY3JpY2FvMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+e2RhdGEudGl0bGUucmVwbGFjZShcIi0gRGlzdHJpYnVpZG9yIEF1dG9yaXphZG9cIiwgXCJcIil9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2RhdGEuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcmljZVwiPntkYXRhLnByaWNlLnRvTG9jYWxlU3RyaW5nKFwicHQtYnJcIix7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogXCJjdXJyZW5jeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm90YW8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NVbmljYSA9IFwiYm90YW9Vbmljb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA9IFwiQWRpY2lvbmFyIENhcnJpbmhvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJidG4gYnRuLW91dGxpbmUtZGFya1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGE9e2AvcGFnZXMvY2FycmluaG9gfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXthZGljaW9uYXJDYXJyaW5ob31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsIkJvdGFvIiwiQXBwQ29udGV4dCIsIlByb2R1dG9EZXRhbGhlc0NvbXBvbmVudGUiLCJwcm9wcyIsImNhcnJpbmhvIiwic2V0Q2FycmluaG8iLCJkYXRhIiwiYWRpY2lvbmFyQ2FycmluaG8iLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJ0aHVtYm5haWwiLCJyZXBsYWNlIiwiYWx0IiwiaDEiLCJ0aXRsZSIsInAiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwidG9Mb2NhbGVTdHJpbmciLCJzdHlsZSIsImNsYXNzVW5pY2EiLCJ0ZXh0Iiwicm90YSIsIm9uQ2xpY2siLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/componentes/ProdutosDetalhes/produtoDetalhes.jsx\n"));

/***/ })

});