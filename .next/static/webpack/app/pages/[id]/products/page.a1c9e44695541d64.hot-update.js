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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProdutoDetalhesComponente; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"(app-pages-browser)/./src/componentes/ProdutosDetalhes/style.css\");\n/* harmony import */ var _componentes_Botao_botao__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/componentes/Botao/botao */ \"(app-pages-browser)/./src/componentes/Botao/botao.jsx\");\n/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/AppContext */ \"(app-pages-browser)/./src/context/AppContext.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction ProdutoDetalhesComponente(props) {\n    _s();\n    const { carrinho, setCarrinho } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    const [verDetalhes, setVerDetalhes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const data = props.data;\n    const adicionarCarrinho = ()=>{\n        setCarrinho([\n            ...carrinho,\n            data\n        ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flexCard2\",\n        children: [\n            data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flexCardID\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flexImagem\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: data.thumbnail.replace(/\\w\\.jpg/gi, \"W.jpg\"),\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                            lineNumber: 23,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flexDescricao2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: data.title.replace(\"- Distribuidor Autorizado\", \"\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                                lineNumber: 26,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"price\",\n                                children: data.price.toLocaleString(\"pt-br\", {\n                                    style: \"currency\",\n                                    currency: \"BRL\"\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flexBotaoCardDetalhes\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_componentes_Botao_botao__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        classUnica: \"botaoUnicoAdicionarCarrinho\",\n                                        text: \"Adicionar Carrinho\",\n                                        style: \"btn btn-outline-dark\",\n                                        rota: \"/pages/carrinho\",\n                                        onClick: adicionarCarrinho\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_componentes_Botao_botao__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        classUnica: \"botaoUnicoVerDetalhes\",\n                                        text: \"Ver Detalhes\",\n                                        style: \"btn btn-outline-dark\",\n                                        rota: \"\",\n                                        onClick: ()=>setVerDetalhes(true)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                                lineNumber: 31,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, data.id, true, {\n                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                lineNumber: 21,\n                columnNumber: 17\n            }, this) : null,\n            verDetalhes ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"table-container\",\n                children: data.attributes.map((attributeSet, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                        className: \"table\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        colSpan: \"2\",\n                                        children: attributeSet.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 25\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                children: attributeSet.attributes.map((attribute, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: attribute.name\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                                                lineNumber: 63,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: attribute.value_name\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                                                lineNumber: 64,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, idx, true, {\n                                        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 25\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                                lineNumber: 60,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                lineNumber: 52,\n                columnNumber: 5\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, this);\n}\n_s(ProdutoDetalhesComponente, \"Uxs+HQjtmhefpyfVTSh1GCNl5Ok=\");\n_c = ProdutoDetalhesComponente;\nvar _c;\n$RefreshReg$(_c, \"ProdutoDetalhesComponente\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRlcy9Qcm9kdXRvc0RldGFsaGVzL3Byb2R1dG9EZXRhbGhlcy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQzZDO0FBQ3hCO0FBQ3lCO0FBQ0E7QUFFL0IsU0FBU0ksMEJBQTBCQyxLQUFLOztJQUVuRCxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsV0FBVyxFQUFFLEdBQUdQLGlEQUFVQSxDQUFDRywyREFBVUE7SUFDdkQsTUFBTSxDQUFDSyxhQUFhQyxlQUFlLEdBQUdSLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU1TLE9BQU9MLE1BQU1LLElBQUk7SUFFdkIsTUFBTUMsb0JBQW9CO1FBQ3RCSixZQUFZO2VBQUlEO1lBQVVJO1NBQUs7SUFDbkM7SUFHQSxxQkFDSSw4REFBQ0U7UUFBSUMsV0FBVTs7WUFDVkgscUJBQ0csOERBQUNFO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNDOzRCQUFJQyxLQUFLTCxLQUFLTSxTQUFTLENBQUNDLE9BQU8sQ0FBQyxhQUFhOzRCQUFVQyxLQUFJOzs7Ozs7Ozs7OztrQ0FFaEUsOERBQUNOO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ007MENBQUlULEtBQUtVLEtBQUssQ0FBQ0gsT0FBTyxDQUFDLDZCQUE2Qjs7Ozs7OzBDQUNyRCw4REFBQ0k7Z0NBQUVSLFdBQVU7MENBQVNILEtBQUtZLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLFNBQVM7b0NBQ3JEQyxPQUFPO29DQUNQQyxVQUFVO2dDQUNkOzs7Ozs7MENBQ0EsOERBQUNiO2dDQUFJQyxXQUFVOztrREFDWCw4REFBQ1gsZ0VBQUtBO3dDQUNGd0IsWUFBVzt3Q0FDWEMsTUFBSzt3Q0FDTEgsT0FBTTt3Q0FDTkksTUFBTzt3Q0FDUEMsU0FBU2xCOzs7Ozs7a0RBRWIsOERBQUNULGdFQUFLQTt3Q0FDRndCLFlBQVc7d0NBQ1hDLE1BQUs7d0NBQ0xILE9BQU07d0NBQ05JLE1BQU87d0NBQ1BDLFNBQVMsSUFBTXBCLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUF2QmJDLEtBQUtvQixFQUFFOzs7O3VCQTZCeEM7WUFDTnRCLDRCQUNOLDhEQUFDSTtnQkFBSUMsV0FBVTswQkFDVkgsS0FBS3FCLFVBQVUsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLGNBQWNDLHNCQUNoQyw4REFBQ0M7d0JBQWtCdEIsV0FBVTs7MENBQ3pCLDhEQUFDdUI7MENBQ0csNEVBQUNDOzhDQUNHLDRFQUFDQzt3Q0FBR0MsU0FBUTtrREFBS04sYUFBYU8sSUFBSTs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHMUMsOERBQUNDOzBDQUNJUixhQUFhRixVQUFVLENBQUNDLEdBQUcsQ0FBQyxDQUFDVSxXQUFXQyxvQkFDckMsOERBQUNOOzswREFDRyw4REFBQ087MERBQUlGLFVBQVVGLElBQUk7Ozs7OzswREFDbkIsOERBQUNJOzBEQUFJRixVQUFVRyxVQUFVOzs7Ozs7O3VDQUZwQkY7Ozs7Ozs7Ozs7O3VCQVJUVDs7Ozs7Ozs7O3VCQWlCdEI7Ozs7Ozs7QUFPRjtHQXZFd0I5QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50ZXMvUHJvZHV0b3NEZXRhbGhlcy9wcm9kdXRvRGV0YWxoZXMuanN4P2IzN2IiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IEJvdGFvIGZyb20gXCJAL2NvbXBvbmVudGVzL0JvdGFvL2JvdGFvXCI7XHJcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCJAL2NvbnRleHQvQXBwQ29udGV4dFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHV0b0RldGFsaGVzQ29tcG9uZW50ZShwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IHsgY2FycmluaG8sIHNldENhcnJpbmhvIH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xyXG4gICAgY29uc3QgW3ZlckRldGFsaGVzLCBzZXRWZXJEZXRhbGhlc10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IGRhdGEgPSBwcm9wcy5kYXRhO1xyXG5cclxuICAgIGNvbnN0IGFkaWNpb25hckNhcnJpbmhvID0gKCkgPT4ge1xyXG4gICAgICAgIHNldENhcnJpbmhvKFsuLi5jYXJyaW5obywgZGF0YV0pO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhDYXJkMlwiPlxyXG4gICAgICAgICAgICB7ZGF0YSA/IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleENhcmRJRFwiIGtleT17ZGF0YS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4SW1hZ2VtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLnRodW1ibmFpbC5yZXBsYWNlKC9cXHdcXC5qcGcvZ2ksIFwiVy5qcGdcIil9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4RGVzY3JpY2FvMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+e2RhdGEudGl0bGUucmVwbGFjZShcIi0gRGlzdHJpYnVpZG9yIEF1dG9yaXphZG9cIiwgXCJcIil9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpY2VcIj57ZGF0YS5wcmljZS50b0xvY2FsZVN0cmluZyhcInB0LWJyXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBcImN1cnJlbmN5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeTogXCJCUkxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleEJvdGFvQ2FyZERldGFsaGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm90YW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc1VuaWNhPVwiYm90YW9Vbmljb0FkaWNpb25hckNhcnJpbmhvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiQWRpY2lvbmFyIENhcnJpbmhvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImJ0biBidG4tb3V0bGluZS1kYXJrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3RhPXtgL3BhZ2VzL2NhcnJpbmhvYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXthZGljaW9uYXJDYXJyaW5ob31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm90YW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc1VuaWNhPVwiYm90YW9Vbmljb1ZlckRldGFsaGVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiVmVyIERldGFsaGVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImJ0biBidG4tb3V0bGluZS1kYXJrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3RhPXtgYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRWZXJEZXRhbGhlcyh0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAge3ZlckRldGFsaGVzID8gXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIHtkYXRhLmF0dHJpYnV0ZXMubWFwKChhdHRyaWJ1dGVTZXQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDx0YWJsZSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49XCIyXCI+e2F0dHJpYnV0ZVNldC5uYW1lfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAge2F0dHJpYnV0ZVNldC5hdHRyaWJ1dGVzLm1hcCgoYXR0cmlidXRlLCBpZHgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aWR4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57YXR0cmlidXRlLm5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57YXR0cmlidXRlLnZhbHVlX25hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuOiBudWxsfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkJvdGFvIiwiQXBwQ29udGV4dCIsIlByb2R1dG9EZXRhbGhlc0NvbXBvbmVudGUiLCJwcm9wcyIsImNhcnJpbmhvIiwic2V0Q2FycmluaG8iLCJ2ZXJEZXRhbGhlcyIsInNldFZlckRldGFsaGVzIiwiZGF0YSIsImFkaWNpb25hckNhcnJpbmhvIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwidGh1bWJuYWlsIiwicmVwbGFjZSIsImFsdCIsImgxIiwidGl0bGUiLCJwIiwicHJpY2UiLCJ0b0xvY2FsZVN0cmluZyIsInN0eWxlIiwiY3VycmVuY3kiLCJjbGFzc1VuaWNhIiwidGV4dCIsInJvdGEiLCJvbkNsaWNrIiwiaWQiLCJhdHRyaWJ1dGVzIiwibWFwIiwiYXR0cmlidXRlU2V0IiwiaW5kZXgiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsImNvbFNwYW4iLCJuYW1lIiwidGJvZHkiLCJhdHRyaWJ1dGUiLCJpZHgiLCJ0ZCIsInZhbHVlX25hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/componentes/ProdutosDetalhes/produtoDetalhes.jsx\n"));

/***/ })

});