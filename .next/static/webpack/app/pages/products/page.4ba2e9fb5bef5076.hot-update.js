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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Produtos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Requisicoes_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Requisicoes/get */ \"(app-pages-browser)/./src/Requisicoes/get.js\");\n/* harmony import */ var _componentes_Botao_botao__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/componentes/Botao/botao */ \"(app-pages-browser)/./src/componentes/Botao/botao.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"(app-pages-browser)/./src/app/pages/products/style.css\");\n/* harmony import */ var _componentes_Loading_loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/componentes/Loading/loading */ \"(app-pages-browser)/./src/componentes/Loading/loading.jsx\");\n/* harmony import */ var _componentes_BarraPesquisa_barraPesquisa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/componentes/BarraPesquisa/barraPesquisa */ \"(app-pages-browser)/./src/componentes/BarraPesquisa/barraPesquisa.jsx\");\n/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/context/AppContext */ \"(app-pages-browser)/./src/context/AppContext.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Produtos() {\n    _s();\n    const { produtos, setProdutos } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n    const { loading, setLoading } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n    const get = new _Requisicoes_get__WEBPACK_IMPORTED_MODULE_1__[\"default\"](setProdutos);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        get.metodoUseEffect();\n        setLoading(false);\n    }, []);\n    console.log(produtos);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flexTituloCards\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"tituloCards\",\n                        children: \"Produtos\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\app\\\\pages\\\\products\\\\page.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_componentes_BarraPesquisa_barraPesquisa__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\app\\\\pages\\\\products\\\\page.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\app\\\\pages\\\\products\\\\page.jsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flexBody\",\n                children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_componentes_Loading_loading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\app\\\\pages\\\\products\\\\page.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 28\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flexCards\",\n                    children: produtos.map((data)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flexCard\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: data.thumbnail.replace(/\\w\\.jpg/gi, \"W.jpg\"),\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\app\\\\pages\\\\products\\\\page.jsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flexDescricao\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flexText\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    children: data.title.replace(\"- Distribuidor Autorizado\", \"\")\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\app\\\\pages\\\\products\\\\page.jsx\",\n                                                    lineNumber: 38,\n                                                    columnNumber: 37\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: [\n                                                        \"R$ \",\n                                                        data.price\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\app\\\\pages\\\\products\\\\page.jsx\",\n                                                    lineNumber: 39,\n                                                    columnNumber: 37\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\app\\\\pages\\\\products\\\\page.jsx\",\n                                            lineNumber: 37,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_componentes_Botao_botao__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            classUnica: \"botaoUnico\",\n                                            text: \"Ver Detalhes\",\n                                            style: \"btn btn-outline-dark\",\n                                            rota: \"/pages/\".concat(data.id, \"/products/\")\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\app\\\\pages\\\\products\\\\page.jsx\",\n                                            lineNumber: 41,\n                                            columnNumber: 34\n                                        }, this),\n                                        console.log(data.is)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\app\\\\pages\\\\products\\\\page.jsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, data.id, true, {\n                            fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\app\\\\pages\\\\products\\\\page.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 25\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\app\\\\pages\\\\products\\\\page.jsx\",\n                    lineNumber: 32,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\app\\\\pages\\\\products\\\\page.jsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Produtos, \"1ddppbHjW5lj0YmjumJ7hKR9BHY=\");\n_c = Produtos;\nvar _c;\n$RefreshReg$(_c, \"Produtos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZXMvcHJvZHVjdHMvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ21DO0FBQ1c7QUFDUztBQUNuQztBQUNnQztBQUNrQjtBQUN4QjtBQUUvQixTQUFTUTs7SUFDcEIsTUFBTSxFQUFDQyxRQUFRLEVBQUVDLFdBQVcsRUFBQyxHQUFHUixpREFBVUEsQ0FBQ0ssMkRBQVVBO0lBQ3JELE1BQU0sRUFBQ0ksT0FBTyxFQUFDQyxVQUFVLEVBQUMsR0FBR1YsaURBQVVBLENBQUNLLDJEQUFVQTtJQUVsRCxNQUFNTSxNQUFNLElBQUliLHdEQUFHQSxDQUFDVTtJQUVwQlAsZ0RBQVNBLENBQUM7UUFDTlUsSUFBSUMsZUFBZTtRQUNuQkYsV0FBVztJQUNmLEdBQUUsRUFBRTtJQUdKRyxRQUFRQyxHQUFHLENBQUNQO0lBRVoscUJBQ0k7OzBCQUNJLDhEQUFDUTtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUFjOzs7Ozs7a0NBQzVCLDhEQUFDWixnRkFBYUE7Ozs7Ozs7Ozs7OzBCQUVsQiw4REFBQ1c7Z0JBQUlDLFdBQVU7MEJBQ1ZQLHdCQUFVLDhEQUFDTixvRUFBT0E7Ozs7eUNBQ2YsOERBQUNZO29CQUFJQyxXQUFVOzhCQUNkVCxTQUFTVyxHQUFHLENBQUMsQ0FBQ0MscUJBQ1gsOERBQUNKOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ0k7b0NBQUlDLEtBQUtGLEtBQUtHLFNBQVMsQ0FBQ0MsT0FBTyxDQUFDLGFBQWE7b0NBQVVDLEtBQUk7Ozs7Ozs4Q0FDNUQsOERBQUNUO29DQUFJQyxXQUFVOztzREFDWCw4REFBQ0Q7NENBQUlDLFdBQVU7OzhEQUNYLDhEQUFDUzs4REFBSU4sS0FBS08sS0FBSyxDQUFDSCxPQUFPLENBQUMsNkJBQTZCOzs7Ozs7OERBQ3JELDhEQUFDSTs7d0RBQUU7d0RBQUlSLEtBQUtTLEtBQUs7Ozs7Ozs7Ozs7Ozs7c0RBRXBCLDhEQUFDN0IsZ0VBQUtBOzRDQUNOOEIsWUFBYTs0Q0FDYkMsTUFBTzs0Q0FDUEMsT0FBTTs0Q0FDTkMsTUFBTSxVQUFrQixPQUFSYixLQUFLYyxFQUFFLEVBQUM7Ozs7Ozt3Q0FHdkJwQixRQUFRQyxHQUFHLENBQUNLLEtBQUtlLEVBQUU7Ozs7Ozs7OzJCQWRFZixLQUFLYyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztBQXlCOUQ7R0FqRHdCM0I7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlcy9wcm9kdWN0cy9wYWdlLmpzeD8wOTZjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBHZXQgZnJvbSBcIkAvUmVxdWlzaWNvZXMvZ2V0XCJcclxuaW1wb3J0IEJvdGFvIGZyb20gXCJAL2NvbXBvbmVudGVzL0JvdGFvL2JvdGFvXCI7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiXHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCJAL2NvbXBvbmVudGVzL0xvYWRpbmcvbG9hZGluZ1wiO1xyXG5pbXBvcnQgQmFycmFQZXNxdWlzYSBmcm9tIFwiQC9jb21wb25lbnRlcy9CYXJyYVBlc3F1aXNhL2JhcnJhUGVzcXVpc2FcIjtcclxuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIkAvY29udGV4dC9BcHBDb250ZXh0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdXRvcygpe1xyXG4gICAgY29uc3Qge3Byb2R1dG9zLCBzZXRQcm9kdXRvc30gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpXHJcbiAgICBjb25zdCB7bG9hZGluZyxzZXRMb2FkaW5nfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcblxyXG4gICAgY29uc3QgZ2V0ID0gbmV3IEdldChzZXRQcm9kdXRvcyk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgZ2V0Lm1ldG9kb1VzZUVmZmVjdCgpO1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICB9LFtdKVxyXG5cclxuXHJcbiAgICBjb25zb2xlLmxvZyhwcm9kdXRvcylcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4VGl0dWxvQ2FyZHNcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXR1bG9DYXJkc1wiPlByb2R1dG9zPC9oMT5cclxuICAgICAgICAgICAgICAgIDxCYXJyYVBlc3F1aXNhLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleEJvZHlcIj5cclxuICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gPExvYWRpbmcvPiA6IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhDYXJkc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9kdXRvcy5tYXAoKGRhdGEpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleENhcmRcIiBrZXk9e2RhdGEuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RhdGEudGh1bWJuYWlsLnJlcGxhY2UoL1xcd1xcLmpwZy9naSwgXCJXLmpwZ1wiKX0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleERlc2NyaWNhb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPntkYXRhLnRpdGxlLnJlcGxhY2UoXCItIERpc3RyaWJ1aWRvciBBdXRvcml6YWRvXCIsIFwiXCIpfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlIkIHtkYXRhLnByaWNlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJvdGFvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzVW5pY2EgPSBcImJvdGFvVW5pY29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gXCJWZXIgRGV0YWxoZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImJ0biBidG4tb3V0bGluZS1kYXJrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm90YT17YC9wYWdlcy8ke2RhdGEuaWR9L3Byb2R1Y3RzL2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29uc29sZS5sb2coZGF0YS5pcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIkdldCIsIkJvdGFvIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTG9hZGluZyIsIkJhcnJhUGVzcXVpc2EiLCJBcHBDb250ZXh0IiwiUHJvZHV0b3MiLCJwcm9kdXRvcyIsInNldFByb2R1dG9zIiwibG9hZGluZyIsInNldExvYWRpbmciLCJnZXQiLCJtZXRvZG9Vc2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJtYXAiLCJkYXRhIiwiaW1nIiwic3JjIiwidGh1bWJuYWlsIiwicmVwbGFjZSIsImFsdCIsImgyIiwidGl0bGUiLCJwIiwicHJpY2UiLCJjbGFzc1VuaWNhIiwidGV4dCIsInN0eWxlIiwicm90YSIsImlkIiwiaXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/pages/products/page.jsx\n"));

/***/ })

});