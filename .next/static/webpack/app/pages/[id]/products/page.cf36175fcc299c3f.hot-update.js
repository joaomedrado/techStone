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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProdutoDetalhesComponente; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"(app-pages-browser)/./src/componentes/ProdutosDetalhes/style.css\");\n/* harmony import */ var _componentes_Botao_botao__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/componentes/Botao/botao */ \"(app-pages-browser)/./src/componentes/Botao/botao.jsx\");\n/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/AppContext */ \"(app-pages-browser)/./src/context/AppContext.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction ProdutoDetalhesComponente(props) {\n    _s();\n    const { carrinho, setCarrinho } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    const [verDetalhes, setVerDetalhes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const data = props.data;\n    const adicionarCarrinho = ()=>{\n        setCarrinho([\n            ...carrinho,\n            data\n        ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flexCard2\",\n        children: [\n            data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flexCardID\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flexImagem\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: data.thumbnail.replace(/\\w\\.jpg/gi, \"W.jpg\"),\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                            lineNumber: 23,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flexDescricao2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: data.title.replace(\"- Distribuidor Autorizado\", \"\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                                lineNumber: 26,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"price\",\n                                children: data.price.toLocaleString(\"pt-br\", {\n                                    style: \"currency\",\n                                    currency: \"BRL\"\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 26\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flexBotaoCardDetalhes\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_componentes_Botao_botao__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        classUnica: \"botaoUnicoAdicionarCarrinho\",\n                                        text: \"Adicionar Carrinho\",\n                                        style: \"btn btn-outline-dark\",\n                                        rota: \"/pages/carrinho\",\n                                        onClick: adicionarCarrinho\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_componentes_Botao_botao__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        classUnica: \"botaoUnicoVerDetalhes\",\n                                        text: \"Ver Detalhes\",\n                                        style: \"btn btn-outline-dark\",\n                                        rota: \"\",\n                                        onClick: ()=>setVerDetalhes(true)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                                lineNumber: 31,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, data.id, true, {\n                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                lineNumber: 21,\n                columnNumber: 17\n            }, this) : null,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flexTableDescricao\",\n                children: verDetalhes ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    class: \"table\",\n                    children: data.attributes.map((attributes)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            scope: \"col\",\n                                            children: attributes.name\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: attributes.value_name\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                    lineNumber: 53,\n                    columnNumber: 17\n                }, this) : null\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, this);\n}\n_s(ProdutoDetalhesComponente, \"6eIXv3zbu9oSXiYyYRHjr2005yc=\");\n_c = ProdutoDetalhesComponente;\nvar _c;\n$RefreshReg$(_c, \"ProdutoDetalhesComponente\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRlcy9Qcm9kdXRvc0RldGFsaGVzL3Byb2R1dG9EZXRhbGhlcy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQzZDO0FBQ3hCO0FBQ3lCO0FBQ0E7QUFFL0IsU0FBU0ksMEJBQTBCQyxLQUFLOztJQUVuRCxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsV0FBVyxFQUFFLEdBQUdQLGlEQUFVQSxDQUFDRywyREFBVUE7SUFDdkQsTUFBTSxDQUFDSyxhQUFZQyxlQUFlLEdBQUdSLCtDQUFRQSxDQUFDO0lBQzlDLE1BQU1TLE9BQU9MLE1BQU1LLElBQUk7SUFFdkIsTUFBTUMsb0JBQW9CO1FBQ3RCSixZQUFZO2VBQUlEO1lBQVVJO1NBQUs7SUFDbkM7SUFHQSxxQkFDSSw4REFBQ0U7UUFBSUMsV0FBVTs7WUFDVkgscUJBQ0csOERBQUNFO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNDOzRCQUFJQyxLQUFLTCxLQUFLTSxTQUFTLENBQUNDLE9BQU8sQ0FBQyxhQUFhOzRCQUFVQyxLQUFJOzs7Ozs7Ozs7OztrQ0FFaEUsOERBQUNOO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ007MENBQUlULEtBQUtVLEtBQUssQ0FBQ0gsT0FBTyxDQUFDLDZCQUE2Qjs7Ozs7OzBDQUNwRCw4REFBQ0k7Z0NBQUVSLFdBQVU7MENBQVNILEtBQUtZLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLFNBQVE7b0NBQ3JEQyxPQUFPO29DQUNQQyxVQUFVO2dDQUNkOzs7Ozs7MENBQ0EsOERBQUNiO2dDQUFJQyxXQUFVOztrREFDWCw4REFBQ1gsZ0VBQUtBO3dDQUNEd0IsWUFBYTt3Q0FDYkMsTUFBTzt3Q0FDUEgsT0FBTTt3Q0FDTkksTUFBTzt3Q0FDUEMsU0FBU2xCOzs7Ozs7a0RBRWQsOERBQUNULGdFQUFLQTt3Q0FDRHdCLFlBQWE7d0NBQ2JDLE1BQU87d0NBQ1BILE9BQU07d0NBQ05JLE1BQU87d0NBQ1BDLFNBQVMsSUFBS3BCLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUF2QmJDLEtBQUtvQixFQUFFOzs7O3VCQTZCeEM7MEJBQ0osOERBQUNsQjtnQkFBSUMsV0FBVTswQkFDVkwsNEJBQ0QsOERBQUN1QjtvQkFBTUMsT0FBTTs4QkFDUnRCLEtBQUt1QixVQUFVLENBQUNDLEdBQUcsQ0FBQyxDQUFDRCwyQkFDbEI7c0NBQ0ksNEVBQUNFOzBDQUNELDRFQUFDQzs7c0RBQ0csOERBQUNDOzRDQUFHQyxPQUFNO3NEQUFPTCxXQUFXTSxJQUFJOzs7Ozs7c0RBQ2hDLDhEQUFDQztzREFBSVAsV0FBV1EsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkFNcEM7Ozs7Ozs7Ozs7OztBQUt0QjtHQS9Ed0JyQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50ZXMvUHJvZHV0b3NEZXRhbGhlcy9wcm9kdXRvRGV0YWxoZXMuanN4P2IzN2IiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IEJvdGFvIGZyb20gXCJAL2NvbXBvbmVudGVzL0JvdGFvL2JvdGFvXCI7XHJcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCJAL2NvbnRleHQvQXBwQ29udGV4dFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHV0b0RldGFsaGVzQ29tcG9uZW50ZShwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IHsgY2FycmluaG8sIHNldENhcnJpbmhvIH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xyXG4gICAgY29uc3QgW3ZlckRldGFsaGVzLHNldFZlckRldGFsaGVzXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgZGF0YSA9IHByb3BzLmRhdGE7XHJcblxyXG4gICAgY29uc3QgYWRpY2lvbmFyQ2FycmluaG8gPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0Q2FycmluaG8oWy4uLmNhcnJpbmhvLCBkYXRhXSk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleENhcmQyXCI+XHJcbiAgICAgICAgICAgIHtkYXRhID8oXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhDYXJkSURcIiBrZXk9e2RhdGEuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleEltYWdlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS50aHVtYm5haWwucmVwbGFjZSgvXFx3XFwuanBnL2dpLCBcIlcuanBnXCIpfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleERlc2NyaWNhbzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPntkYXRhLnRpdGxlLnJlcGxhY2UoXCItIERpc3RyaWJ1aWRvciBBdXRvcml6YWRvXCIsIFwiXCIpfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcmljZVwiPntkYXRhLnByaWNlLnRvTG9jYWxlU3RyaW5nKFwicHQtYnJcIix7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogXCJjdXJyZW5jeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3k6IFwiQlJMXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhCb3Rhb0NhcmREZXRhbGhlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJvdGFvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzVW5pY2EgPSBcImJvdGFvVW5pY29BZGljaW9uYXJDYXJyaW5ob1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgPSBcIkFkaWNpb25hciBDYXJyaW5ob1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiYnRuIGJ0bi1vdXRsaW5lLWRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3RhPXtgL3BhZ2VzL2NhcnJpbmhvYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17YWRpY2lvbmFyQ2FycmluaG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm90YW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NVbmljYSA9IFwiYm90YW9Vbmljb1ZlckRldGFsaGVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA9IFwiVmVyIERldGFsaGVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJidG4gYnRuLW91dGxpbmUtZGFya1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGE9e2BgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+IHNldFZlckRldGFsaGVzKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4VGFibGVEZXNjcmljYW9cIj5cclxuICAgICAgICAgICAgICAgIHt2ZXJEZXRhbGhlcyA/XHJcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLmF0dHJpYnV0ZXMubWFwKChhdHRyaWJ1dGVzKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPnthdHRyaWJ1dGVzLm5hbWV9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2F0dHJpYnV0ZXMudmFsdWVfbmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA6IG51bGx9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiQm90YW8iLCJBcHBDb250ZXh0IiwiUHJvZHV0b0RldGFsaGVzQ29tcG9uZW50ZSIsInByb3BzIiwiY2FycmluaG8iLCJzZXRDYXJyaW5obyIsInZlckRldGFsaGVzIiwic2V0VmVyRGV0YWxoZXMiLCJkYXRhIiwiYWRpY2lvbmFyQ2FycmluaG8iLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJ0aHVtYm5haWwiLCJyZXBsYWNlIiwiYWx0IiwiaDEiLCJ0aXRsZSIsInAiLCJwcmljZSIsInRvTG9jYWxlU3RyaW5nIiwic3R5bGUiLCJjdXJyZW5jeSIsImNsYXNzVW5pY2EiLCJ0ZXh0Iiwicm90YSIsIm9uQ2xpY2siLCJpZCIsInRhYmxlIiwiY2xhc3MiLCJhdHRyaWJ1dGVzIiwibWFwIiwidGhlYWQiLCJ0ciIsInRoIiwic2NvcGUiLCJuYW1lIiwidGQiLCJ2YWx1ZV9uYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/componentes/ProdutosDetalhes/produtoDetalhes.jsx\n"));

/***/ })

});