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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProdutoDetalhesComponente; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"(app-pages-browser)/./src/componentes/ProdutosDetalhes/style.css\");\n/* harmony import */ var _componentes_Botao_botao__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/componentes/Botao/botao */ \"(app-pages-browser)/./src/componentes/Botao/botao.jsx\");\n/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/AppContext */ \"(app-pages-browser)/./src/context/AppContext.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction ProdutoDetalhesComponente(props) {\n    _s();\n    const { carrinho, setCarrinho } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    const [verDetalhes, setVerDetalhes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const data = props.data;\n    const adicionarCarrinho = ()=>{\n        setCarrinho([\n            ...carrinho,\n            data\n        ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flexCard2\",\n        children: [\n            data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flexCardID\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flexImagem\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: data.thumbnail.replace(/\\w\\.jpg/gi, \"W.jpg\"),\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                            lineNumber: 23,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flexDescricao2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: data.title.replace(\"- Distribuidor Autorizado\", \"\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                                lineNumber: 26,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"price\",\n                                children: data.price.toLocaleString(\"pt-br\", {\n                                    style: \"currency\",\n                                    currency: \"BRL\"\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flexBotaoCardDetalhes\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_componentes_Botao_botao__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        classUnica: \"botaoUnicoAdicionarCarrinho\",\n                                        text: \"Adicionar Carrinho\",\n                                        style: \"btn btn-outline-dark\",\n                                        rota: \"/pages/carrinho\",\n                                        onClick: adicionarCarrinho\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_componentes_Botao_botao__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        classUnica: \"botaoUnicoVerDetalhes\",\n                                        text: \"Ver Detalhes\",\n                                        style: \"btn btn-outline-dark\",\n                                        rota: \"\",\n                                        onClick: ()=>setVerDetalhes(true)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                                lineNumber: 31,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, data.id, true, {\n                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                lineNumber: 21,\n                columnNumber: 17\n            }, this) : null,\n            verDetalhes ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"table-container\",\n                children: data.attributes.map((attribute)=>{\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                        className: \"table\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        colSpan: \"2\",\n                                        children: attributeSet.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 33\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: data.attributes.map((attribute, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: attribute.value_name\n                                        }, index, false, {\n                                            fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 41\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 33\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                                lineNumber: 60,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 25\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                lineNumber: 52,\n                columnNumber: 17\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, this);\n}\n_s(ProdutoDetalhesComponente, \"Uxs+HQjtmhefpyfVTSh1GCNl5Ok=\");\n_c = ProdutoDetalhesComponente;\nvar _c;\n$RefreshReg$(_c, \"ProdutoDetalhesComponente\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRlcy9Qcm9kdXRvc0RldGFsaGVzL3Byb2R1dG9EZXRhbGhlcy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQzZDO0FBQ3hCO0FBQ3lCO0FBQ0E7QUFFL0IsU0FBU0ksMEJBQTBCQyxLQUFLOztJQUVuRCxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsV0FBVyxFQUFFLEdBQUdQLGlEQUFVQSxDQUFDRywyREFBVUE7SUFDdkQsTUFBTSxDQUFDSyxhQUFhQyxlQUFlLEdBQUdSLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU1TLE9BQU9MLE1BQU1LLElBQUk7SUFFdkIsTUFBTUMsb0JBQW9CO1FBQ3RCSixZQUFZO2VBQUlEO1lBQVVJO1NBQUs7SUFDbkM7SUFHQSxxQkFDSSw4REFBQ0U7UUFBSUMsV0FBVTs7WUFDVkgscUJBQ0csOERBQUNFO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNDOzRCQUFJQyxLQUFLTCxLQUFLTSxTQUFTLENBQUNDLE9BQU8sQ0FBQyxhQUFhOzRCQUFVQyxLQUFJOzs7Ozs7Ozs7OztrQ0FFaEUsOERBQUNOO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ007MENBQUlULEtBQUtVLEtBQUssQ0FBQ0gsT0FBTyxDQUFDLDZCQUE2Qjs7Ozs7OzBDQUNyRCw4REFBQ0k7Z0NBQUVSLFdBQVU7MENBQVNILEtBQUtZLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLFNBQVM7b0NBQ3JEQyxPQUFPO29DQUNQQyxVQUFVO2dDQUNkOzs7Ozs7MENBQ0EsOERBQUNiO2dDQUFJQyxXQUFVOztrREFDWCw4REFBQ1gsZ0VBQUtBO3dDQUNGd0IsWUFBVzt3Q0FDWEMsTUFBSzt3Q0FDTEgsT0FBTTt3Q0FDTkksTUFBTzt3Q0FDUEMsU0FBU2xCOzs7Ozs7a0RBRWIsOERBQUNULGdFQUFLQTt3Q0FDRndCLFlBQVc7d0NBQ1hDLE1BQUs7d0NBQ0xILE9BQU07d0NBQ05JLE1BQU87d0NBQ1BDLFNBQVMsSUFBTXBCLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUF2QmJDLEtBQUtvQixFQUFFOzs7O3VCQTZCeEM7WUFDSHRCLDRCQUNHLDhEQUFDSTtnQkFBSUMsV0FBVTswQkFDVkgsS0FBS3FCLFVBQVUsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDO2tDQUNsQiw4REFBQ0M7d0JBQU1yQixXQUFVOzswQ0FDYiw4REFBQ3NCOzBDQUNHLDRFQUFDQzs4Q0FDRCw0RUFBQ0M7d0NBQUdDLFNBQVE7a0RBQUtDLGFBQWFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7MENBR3RDLDhEQUFDQzswQ0FDRyw0RUFBQ0w7OENBQ0kxQixLQUFLcUIsVUFBVSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsV0FBV1Msc0JBQzdCLDhEQUFDQztzREFBZ0JWLFVBQVVXLFVBQVU7MkNBQTVCRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQU03Qjs7Ozs7dUJBRUY7Ozs7Ozs7QUFLbEI7R0FyRXdCdEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudGVzL1Byb2R1dG9zRGV0YWxoZXMvcHJvZHV0b0RldGFsaGVzLmpzeD9iMzdiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBCb3RhbyBmcm9tIFwiQC9jb21wb25lbnRlcy9Cb3Rhby9ib3Rhb1wiO1xyXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiQC9jb250ZXh0L0FwcENvbnRleHRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1dG9EZXRhbGhlc0NvbXBvbmVudGUocHJvcHMpIHtcclxuXHJcbiAgICBjb25zdCB7IGNhcnJpbmhvLCBzZXRDYXJyaW5obyB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxuICAgIGNvbnN0IFt2ZXJEZXRhbGhlcywgc2V0VmVyRGV0YWxoZXNdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBkYXRhID0gcHJvcHMuZGF0YTtcclxuXHJcbiAgICBjb25zdCBhZGljaW9uYXJDYXJyaW5obyA9ICgpID0+IHtcclxuICAgICAgICBzZXRDYXJyaW5obyhbLi4uY2FycmluaG8sIGRhdGFdKTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4Q2FyZDJcIj5cclxuICAgICAgICAgICAge2RhdGEgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhDYXJkSURcIiBrZXk9e2RhdGEuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleEltYWdlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS50aHVtYm5haWwucmVwbGFjZSgvXFx3XFwuanBnL2dpLCBcIlcuanBnXCIpfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleERlc2NyaWNhbzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPntkYXRhLnRpdGxlLnJlcGxhY2UoXCItIERpc3RyaWJ1aWRvciBBdXRvcml6YWRvXCIsIFwiXCIpfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaWNlXCI+e2RhdGEucHJpY2UudG9Mb2NhbGVTdHJpbmcoXCJwdC1iclwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogXCJjdXJyZW5jeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3k6IFwiQlJMXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhCb3Rhb0NhcmREZXRhbGhlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJvdGFvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NVbmljYT1cImJvdGFvVW5pY29BZGljaW9uYXJDYXJyaW5ob1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cIkFkaWNpb25hciBDYXJyaW5ob1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJidG4gYnRuLW91dGxpbmUtZGFya1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm90YT17YC9wYWdlcy9jYXJyaW5ob2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17YWRpY2lvbmFyQ2FycmluaG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJvdGFvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NVbmljYT1cImJvdGFvVW5pY29WZXJEZXRhbGhlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cIlZlciBEZXRhbGhlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJidG4gYnRuLW91dGxpbmUtZGFya1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm90YT17YGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VmVyRGV0YWxoZXModHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgIHt2ZXJEZXRhbGhlcyA/XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLmF0dHJpYnV0ZXMubWFwKChhdHRyaWJ1dGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj1cIjJcIj57YXR0cmlidXRlU2V0Lm5hbWV9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLmF0dHJpYnV0ZXMubWFwKChhdHRyaWJ1dGUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtpbmRleH0+e2F0dHJpYnV0ZS52YWx1ZV9uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgOiBudWxsfVxyXG5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJCb3RhbyIsIkFwcENvbnRleHQiLCJQcm9kdXRvRGV0YWxoZXNDb21wb25lbnRlIiwicHJvcHMiLCJjYXJyaW5obyIsInNldENhcnJpbmhvIiwidmVyRGV0YWxoZXMiLCJzZXRWZXJEZXRhbGhlcyIsImRhdGEiLCJhZGljaW9uYXJDYXJyaW5obyIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsInRodW1ibmFpbCIsInJlcGxhY2UiLCJhbHQiLCJoMSIsInRpdGxlIiwicCIsInByaWNlIiwidG9Mb2NhbGVTdHJpbmciLCJzdHlsZSIsImN1cnJlbmN5IiwiY2xhc3NVbmljYSIsInRleHQiLCJyb3RhIiwib25DbGljayIsImlkIiwiYXR0cmlidXRlcyIsIm1hcCIsImF0dHJpYnV0ZSIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwiY29sU3BhbiIsImF0dHJpYnV0ZVNldCIsIm5hbWUiLCJ0Ym9keSIsImluZGV4IiwidGQiLCJ2YWx1ZV9uYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/componentes/ProdutosDetalhes/produtoDetalhes.jsx\n"));

/***/ })

});