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

/***/ "(app-pages-browser)/./src/app/pages/products/page.jsx":
/*!*****************************************!*\
  !*** ./src/app/pages/products/page.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Produtos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Requisicoes_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Requisicoes/get */ \"(app-pages-browser)/./src/Requisicoes/get.js\");\n/* harmony import */ var _componentes_Botao_botao__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/componentes/Botao/botao */ \"(app-pages-browser)/./src/componentes/Botao/botao.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"(app-pages-browser)/./src/app/pages/products/style.css\");\n/* harmony import */ var _componentes_Loading_loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/componentes/Loading/loading */ \"(app-pages-browser)/./src/componentes/Loading/loading.jsx\");\n/* harmony import */ var _componentes_BarraPesquisa_barraPesquisa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/componentes/BarraPesquisa/barraPesquisa */ \"(app-pages-browser)/./src/componentes/BarraPesquisa/barraPesquisa.jsx\");\n/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/context/AppContext */ \"(app-pages-browser)/./src/context/AppContext.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Produtos() {\n    _s();\n    const { produtos, setProdutos } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n    const produtosRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)([]);\n    const { loading, setLoading } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n    const get = new _Requisicoes_get__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        get.metodoFetch(\"iphone\").then((data)=>{\n            produtosRef.current.push(data);\n            setProdutos;\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flexTituloCards\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"tituloCards\",\n                        children: \"Produtos\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\app\\\\pages\\\\products\\\\page.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_componentes_BarraPesquisa_barraPesquisa__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\app\\\\pages\\\\products\\\\page.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\app\\\\pages\\\\products\\\\page.jsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flexBody\",\n                children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_componentes_Loading_loading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\app\\\\pages\\\\products\\\\page.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 28\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flexCards\",\n                    children: produtos.map((data)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flexCard\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: data.thumbnail.replace(/\\w\\.jpg/gi, \"W.jpg\"),\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\app\\\\pages\\\\products\\\\page.jsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flexDescricao\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flexText\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    children: data.title.replace(\"- Distribuidor Autorizado\", \"\")\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\app\\\\pages\\\\products\\\\page.jsx\",\n                                                    lineNumber: 36,\n                                                    columnNumber: 37\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: data.price.toLocaleString(\"pt-br\", {\n                                                        style: \"currency\",\n                                                        currency: \"BRL\"\n                                                    })\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\app\\\\pages\\\\products\\\\page.jsx\",\n                                                    lineNumber: 37,\n                                                    columnNumber: 37\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\app\\\\pages\\\\products\\\\page.jsx\",\n                                            lineNumber: 35,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_componentes_Botao_botao__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            classUnica: \"botaoUnico\",\n                                            text: \"Ver Detalhes\",\n                                            style: \"btn btn-outline-dark\",\n                                            rota: \"/pages/\".concat(data.id, \"/products/\")\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\app\\\\pages\\\\products\\\\page.jsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 34\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\app\\\\pages\\\\products\\\\page.jsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, data.id, true, {\n                            fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\app\\\\pages\\\\products\\\\page.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 25\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\app\\\\pages\\\\products\\\\page.jsx\",\n                    lineNumber: 30,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\app\\\\pages\\\\products\\\\page.jsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Produtos, \"ihwZ+BX4bSCwLhmKuLMhfZi+MPo=\");\n_c = Produtos;\nvar _c;\n$RefreshReg$(_c, \"Produtos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZXMvcHJvZHVjdHMvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ21DO0FBQ1c7QUFDaUI7QUFDM0M7QUFDZ0M7QUFDa0I7QUFDeEI7QUFFL0IsU0FBU1M7O0lBQ3BCLE1BQU0sRUFBQ0MsUUFBUSxFQUFFQyxXQUFXLEVBQUMsR0FBR1QsaURBQVVBLENBQUNNLDJEQUFVQTtJQUNyRCxNQUFNSSxjQUFjUiw2Q0FBTUEsQ0FBQyxFQUFFO0lBQzdCLE1BQU0sRUFBQ1MsT0FBTyxFQUFDQyxVQUFVLEVBQUMsR0FBR1osaURBQVVBLENBQUNNLDJEQUFVQTtJQUNsRCxNQUFNTyxNQUFNLElBQUlmLHdEQUFHQTtJQUVuQkcsZ0RBQVNBLENBQUM7UUFDUFksSUFBSUMsV0FBVyxDQUFDLFVBQVVDLElBQUksQ0FBQyxDQUFDQztZQUMzQk4sWUFBWU8sT0FBTyxDQUFDQyxJQUFJLENBQUNGO1lBQ3pCUDtRQUNMO0lBQ0gsR0FBRSxFQUFFO0lBQ0oscUJBQ0k7OzBCQUNJLDhEQUFDVTtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUFjOzs7Ozs7a0NBQzVCLDhEQUFDZixnRkFBYUE7Ozs7Ozs7Ozs7OzBCQUVsQiw4REFBQ2M7Z0JBQUlDLFdBQVU7MEJBQ1ZULHdCQUFVLDhEQUFDUCxvRUFBT0E7Ozs7eUNBQ2YsOERBQUNlO29CQUFJQyxXQUFVOzhCQUNkWixTQUFTYyxHQUFHLENBQUMsQ0FBQ04scUJBQ1gsOERBQUNHOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ0c7b0NBQUlDLEtBQUtSLEtBQUtTLFNBQVMsQ0FBQ0MsT0FBTyxDQUFDLGFBQWE7b0NBQVVDLEtBQUk7Ozs7Ozs4Q0FDNUQsOERBQUNSO29DQUFJQyxXQUFVOztzREFDWCw4REFBQ0Q7NENBQUlDLFdBQVU7OzhEQUNYLDhEQUFDUTs4REFBSVosS0FBS2EsS0FBSyxDQUFDSCxPQUFPLENBQUMsNkJBQTZCOzs7Ozs7OERBQ3JELDhEQUFDSTs4REFBR2QsS0FBS2UsS0FBSyxDQUFDQyxjQUFjLENBQUMsU0FBUTt3REFDbENDLE9BQU87d0RBQ1BDLFVBQVU7b0RBQ2Q7Ozs7Ozs7Ozs7OztzREFFSCw4REFBQ25DLGdFQUFLQTs0Q0FDTm9DLFlBQWE7NENBQ2JDLE1BQU87NENBQ1BILE9BQU07NENBQ05JLE1BQU0sVUFBa0IsT0FBUnJCLEtBQUtzQixFQUFFLEVBQUM7Ozs7Ozs7Ozs7Ozs7MkJBZEZ0QixLQUFLc0IsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQjlEO0dBaER3Qi9CO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZXMvcHJvZHVjdHMvcGFnZS5qc3g/MDk2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgR2V0IGZyb20gXCJAL1JlcXVpc2ljb2VzL2dldFwiXHJcbmltcG9ydCBCb3RhbyBmcm9tIFwiQC9jb21wb25lbnRlcy9Cb3Rhby9ib3Rhb1wiO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiXHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCJAL2NvbXBvbmVudGVzL0xvYWRpbmcvbG9hZGluZ1wiO1xyXG5pbXBvcnQgQmFycmFQZXNxdWlzYSBmcm9tIFwiQC9jb21wb25lbnRlcy9CYXJyYVBlc3F1aXNhL2JhcnJhUGVzcXVpc2FcIjtcclxuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIkAvY29udGV4dC9BcHBDb250ZXh0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdXRvcygpe1xyXG4gICAgY29uc3Qge3Byb2R1dG9zLCBzZXRQcm9kdXRvc30gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xyXG4gICAgY29uc3QgcHJvZHV0b3NSZWYgPSB1c2VSZWYoW10pXHJcbiAgICBjb25zdCB7bG9hZGluZyxzZXRMb2FkaW5nfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcbiAgICBjb25zdCBnZXQgPSBuZXcgR2V0KClcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgIGdldC5tZXRvZG9GZXRjaChcImlwaG9uZVwiKS50aGVuKChkYXRhKT0+e1xyXG4gICAgICAgICAgICBwcm9kdXRvc1JlZi5jdXJyZW50LnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgIHNldFByb2R1dG9zXHJcbiAgICAgICB9KVxyXG4gICAgfSxbXSlcclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhUaXR1bG9DYXJkc1wiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdHVsb0NhcmRzXCI+UHJvZHV0b3M8L2gxPlxyXG4gICAgICAgICAgICAgICAgPEJhcnJhUGVzcXVpc2EvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4Qm9keVwiPlxyXG4gICAgICAgICAgICAgICAge2xvYWRpbmcgPyA8TG9hZGluZy8+IDogIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhDYXJkc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9kdXRvcy5tYXAoKGRhdGEpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleENhcmRcIiBrZXk9e2RhdGEuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RhdGEudGh1bWJuYWlsLnJlcGxhY2UoL1xcd1xcLmpwZy9naSwgXCJXLmpwZ1wiKX0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleERlc2NyaWNhb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPntkYXRhLnRpdGxlLnJlcGxhY2UoXCItIERpc3RyaWJ1aWRvciBBdXRvcml6YWRvXCIsIFwiXCIpfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntkYXRhLnByaWNlLnRvTG9jYWxlU3RyaW5nKFwicHQtYnJcIix7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogXCJjdXJyZW5jeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3k6IFwiQlJMXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm90YW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NVbmljYSA9IFwiYm90YW9Vbmljb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgPSBcIlZlciBEZXRhbGhlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiYnRuIGJ0bi1vdXRsaW5lLWRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3RhPXtgL3BhZ2VzLyR7ZGF0YS5pZH0vcHJvZHVjdHMvYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiR2V0IiwiQm90YW8iLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJMb2FkaW5nIiwiQmFycmFQZXNxdWlzYSIsIkFwcENvbnRleHQiLCJQcm9kdXRvcyIsInByb2R1dG9zIiwic2V0UHJvZHV0b3MiLCJwcm9kdXRvc1JlZiIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZ2V0IiwibWV0b2RvRmV0Y2giLCJ0aGVuIiwiZGF0YSIsImN1cnJlbnQiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJtYXAiLCJpbWciLCJzcmMiLCJ0aHVtYm5haWwiLCJyZXBsYWNlIiwiYWx0IiwiaDIiLCJ0aXRsZSIsInAiLCJwcmljZSIsInRvTG9jYWxlU3RyaW5nIiwic3R5bGUiLCJjdXJyZW5jeSIsImNsYXNzVW5pY2EiLCJ0ZXh0Iiwicm90YSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/pages/products/page.jsx\n"));

/***/ })

});