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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProdutoDetalhesComponente; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"(app-pages-browser)/./src/componentes/ProdutosDetalhes/style.css\");\n/* harmony import */ var _componentes_Botao_botao__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/componentes/Botao/botao */ \"(app-pages-browser)/./src/componentes/Botao/botao.jsx\");\n/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/AppContext */ \"(app-pages-browser)/./src/context/AppContext.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction ProdutoDetalhesComponente(props) {\n    _s();\n    const { carrinho, setCarrinho } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    const [verDetalhes, setVerDetalhes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const data = props.data;\n    const adicionarCarrinho = ()=>{\n        setCarrinho([\n            ...carrinho,\n            data\n        ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flexCard2\",\n        children: [\n            data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flexCardID\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flexImagem\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: data.thumbnail.replace(/\\w\\.jpg/gi, \"W.jpg\"),\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                            lineNumber: 23,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flexDescricao2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: data.title.replace(\"- Distribuidor Autorizado\", \"\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                                lineNumber: 26,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_componentes_Botao_botao__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                classUnica: \"botaoUnico\",\n                                text: \"Adicionar Carrinho\",\n                                style: \"btn btn-outline-dark\",\n                                rota: \"/pages/carrinho\",\n                                onClick: adicionarCarrinho\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_componentes_Botao_botao__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                classUnica: \"botaoUnico\",\n                                text: \"Ver Deta\\xe7hes\",\n                                style: \"btn btn-outline-dark\",\n                                rota: \"\",\n                                onClick: ()=>set\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"price\",\n                                children: data.price.toLocaleString(\"pt-br\", {\n                                    style: \"currency\",\n                                    currency: \"BRL\"\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, data.id, true, {\n                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                lineNumber: 21,\n                columnNumber: 17\n            }, this) : null,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                class: \"table\",\n                children: data.attributes.map((attributes)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        children: attributes.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 36\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 34\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 32\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: attributes.value_name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 36\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 34\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 32\n                            }, this)\n                        ]\n                    }, void 0, true))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                lineNumber: 48,\n                columnNumber: 14\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, this);\n}\n_s(ProdutoDetalhesComponente, \"6eIXv3zbu9oSXiYyYRHjr2005yc=\");\n_c = ProdutoDetalhesComponente;\nvar _c;\n$RefreshReg$(_c, \"ProdutoDetalhesComponente\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRlcy9Qcm9kdXRvc0RldGFsaGVzL3Byb2R1dG9EZXRhbGhlcy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQzZDO0FBQ3hCO0FBQ3lCO0FBQ0E7QUFFL0IsU0FBU0ksMEJBQTBCQyxLQUFLOztJQUVuRCxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsV0FBVyxFQUFFLEdBQUdQLGlEQUFVQSxDQUFDRywyREFBVUE7SUFDdkQsTUFBTSxDQUFDSyxhQUFZQyxlQUFlLEdBQUdSLCtDQUFRQSxDQUFDO0lBQzlDLE1BQU1TLE9BQU9MLE1BQU1LLElBQUk7SUFFdkIsTUFBTUMsb0JBQW9CO1FBQ3RCSixZQUFZO2VBQUlEO1lBQVVJO1NBQUs7SUFDbkM7SUFHQSxxQkFDSSw4REFBQ0U7UUFBSUMsV0FBVTs7WUFDVkgscUJBQ0csOERBQUNFO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNDOzRCQUFJQyxLQUFLTCxLQUFLTSxTQUFTLENBQUNDLE9BQU8sQ0FBQyxhQUFhOzRCQUFVQyxLQUFJOzs7Ozs7Ozs7OztrQ0FFaEUsOERBQUNOO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ007MENBQUlULEtBQUtVLEtBQUssQ0FBQ0gsT0FBTyxDQUFDLDZCQUE2Qjs7Ozs7OzBDQUNyRCw4REFBQ2YsZ0VBQUtBO2dDQUNEbUIsWUFBYTtnQ0FDYkMsTUFBTztnQ0FDUEMsT0FBTTtnQ0FDTkMsTUFBTztnQ0FDUEMsU0FBU2Q7Ozs7OzswQ0FFZCw4REFBQ1QsZ0VBQUtBO2dDQUNEbUIsWUFBYTtnQ0FDYkMsTUFBTztnQ0FDUEMsT0FBTTtnQ0FDTkMsTUFBTztnQ0FDUEMsU0FBUyxJQUFLQzs7Ozs7OzBDQUVuQiw4REFBQ0M7Z0NBQUVkLFdBQVU7MENBQVNILEtBQUtrQixLQUFLLENBQUNDLGNBQWMsQ0FBQyxTQUFRO29DQUNwRE4sT0FBTztvQ0FDUE8sVUFBVTtnQ0FDZDs7Ozs7Ozs7Ozs7OztlQXZCeUJwQixLQUFLcUIsRUFBRTs7Ozt1QkEwQnhDOzBCQUNILDhEQUFDQztnQkFBTUMsT0FBTTswQkFDRHZCLEtBQUt3QixVQUFVLENBQUNDLEdBQUcsQ0FBQyxDQUFDRCwyQkFDbkI7OzBDQUNJLDhEQUFDRTswQ0FDQyw0RUFBQ0M7OENBQ0MsNEVBQUNDO3dDQUFHQyxPQUFNO2tEQUFPTCxXQUFXTSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OzBDQUdwQyw4REFBQ0M7MENBQ0MsNEVBQUNKOzhDQUNDLDRFQUFDSztrREFBSVIsV0FBV1MsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRN0Q7R0EzRHdCdkM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudGVzL1Byb2R1dG9zRGV0YWxoZXMvcHJvZHV0b0RldGFsaGVzLmpzeD9iMzdiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBCb3RhbyBmcm9tIFwiQC9jb21wb25lbnRlcy9Cb3Rhby9ib3Rhb1wiO1xyXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiQC9jb250ZXh0L0FwcENvbnRleHRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1dG9EZXRhbGhlc0NvbXBvbmVudGUocHJvcHMpIHtcclxuXHJcbiAgICBjb25zdCB7IGNhcnJpbmhvLCBzZXRDYXJyaW5obyB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxuICAgIGNvbnN0IFt2ZXJEZXRhbGhlcyxzZXRWZXJEZXRhbGhlc10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IGRhdGEgPSBwcm9wcy5kYXRhO1xyXG5cclxuICAgIGNvbnN0IGFkaWNpb25hckNhcnJpbmhvID0gKCkgPT4ge1xyXG4gICAgICAgIHNldENhcnJpbmhvKFsuLi5jYXJyaW5obywgZGF0YV0pO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhDYXJkMlwiPlxyXG4gICAgICAgICAgICB7ZGF0YSA/KFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4Q2FyZElEXCIga2V5PXtkYXRhLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhJbWFnZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RhdGEudGh1bWJuYWlsLnJlcGxhY2UoL1xcd1xcLmpwZy9naSwgXCJXLmpwZ1wiKX0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhEZXNjcmljYW8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57ZGF0YS50aXRsZS5yZXBsYWNlKFwiLSBEaXN0cmlidWlkb3IgQXV0b3JpemFkb1wiLCBcIlwiKX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm90YW8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NVbmljYSA9IFwiYm90YW9Vbmljb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA9IFwiQWRpY2lvbmFyIENhcnJpbmhvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJidG4gYnRuLW91dGxpbmUtZGFya1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGE9e2AvcGFnZXMvY2FycmluaG9gfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXthZGljaW9uYXJDYXJyaW5ob31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm90YW8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NVbmljYSA9IFwiYm90YW9Vbmljb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA9IFwiVmVyIERldGHDp2hlc1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiYnRuIGJ0bi1vdXRsaW5lLWRhcmtcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3RhPXtgYH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PiBzZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpY2VcIj57ZGF0YS5wcmljZS50b0xvY2FsZVN0cmluZyhcInB0LWJyXCIse1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IFwiY3VycmVuY3lcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5OiBcIkJSTFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmF0dHJpYnV0ZXMubWFwKChhdHRyaWJ1dGVzKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+e2F0dHJpYnV0ZXMubmFtZX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57YXR0cmlidXRlcy52YWx1ZV9uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJCb3RhbyIsIkFwcENvbnRleHQiLCJQcm9kdXRvRGV0YWxoZXNDb21wb25lbnRlIiwicHJvcHMiLCJjYXJyaW5obyIsInNldENhcnJpbmhvIiwidmVyRGV0YWxoZXMiLCJzZXRWZXJEZXRhbGhlcyIsImRhdGEiLCJhZGljaW9uYXJDYXJyaW5obyIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsInRodW1ibmFpbCIsInJlcGxhY2UiLCJhbHQiLCJoMSIsInRpdGxlIiwiY2xhc3NVbmljYSIsInRleHQiLCJzdHlsZSIsInJvdGEiLCJvbkNsaWNrIiwic2V0IiwicCIsInByaWNlIiwidG9Mb2NhbGVTdHJpbmciLCJjdXJyZW5jeSIsImlkIiwidGFibGUiLCJjbGFzcyIsImF0dHJpYnV0ZXMiLCJtYXAiLCJ0aGVhZCIsInRyIiwidGgiLCJzY29wZSIsIm5hbWUiLCJ0Ym9keSIsInRkIiwidmFsdWVfbmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/componentes/ProdutosDetalhes/produtoDetalhes.jsx\n"));

/***/ })

});