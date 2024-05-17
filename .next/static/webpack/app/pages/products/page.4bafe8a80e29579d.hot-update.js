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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Produtos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Requisicoes_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Requisicoes/get */ \"(app-pages-browser)/./src/Requisicoes/get.js\");\n/* harmony import */ var _componentes_Botao_botao__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/componentes/Botao/botao */ \"(app-pages-browser)/./src/componentes/Botao/botao.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"(app-pages-browser)/./src/app/pages/products/style.css\");\n/* harmony import */ var _componentes_Loading_loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/componentes/Loading/loading */ \"(app-pages-browser)/./src/componentes/Loading/loading.jsx\");\n/* harmony import */ var _componentes_BarraPesquisa_barraPesquisa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/componentes/BarraPesquisa/barraPesquisa */ \"(app-pages-browser)/./src/componentes/BarraPesquisa/barraPesquisa.jsx\");\n/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/context/AppContext */ \"(app-pages-browser)/./src/context/AppContext.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Produtos() {\n    _s();\n    const { produtos, setProdutos } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n    const produtosRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)([]);\n    const { loading, setLoading } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n    const get = new _Requisicoes_get__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        get.metodoFetch(\"iphone\").then((data)=>{\n            produtosRef.current.push(data);\n            setProdutos([\n                ...produtosRef.current\n            ]);\n            loading(false);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flexTituloCards\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"tituloCards\",\n                        children: \"Produtos\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\app\\\\pages\\\\products\\\\page.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_componentes_BarraPesquisa_barraPesquisa__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\app\\\\pages\\\\products\\\\page.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\app\\\\pages\\\\products\\\\page.jsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flexBody\",\n                children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_componentes_Loading_loading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\app\\\\pages\\\\products\\\\page.jsx\",\n                    lineNumber: 30,\n                    columnNumber: 28\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flexCards\",\n                    children: produtos.map((data)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flexCard\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: data.thumbnail.replace(/\\w\\.jpg/gi, \"W.jpg\"),\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\app\\\\pages\\\\products\\\\page.jsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flexDescricao\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flexText\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                    children: data.title.replace(\"- Distribuidor Autorizado\", \"\")\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\app\\\\pages\\\\products\\\\page.jsx\",\n                                                    lineNumber: 37,\n                                                    columnNumber: 37\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: data.price.toLocaleString(\"pt-br\", {\n                                                        style: \"currency\",\n                                                        currency: \"BRL\"\n                                                    })\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\app\\\\pages\\\\products\\\\page.jsx\",\n                                                    lineNumber: 38,\n                                                    columnNumber: 37\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\app\\\\pages\\\\products\\\\page.jsx\",\n                                            lineNumber: 36,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_componentes_Botao_botao__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            classUnica: \"botaoUnico\",\n                                            text: \"Ver Detalhes\",\n                                            style: \"btn btn-outline-dark\",\n                                            rota: \"/pages/\".concat(data.id, \"/products/\")\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\app\\\\pages\\\\products\\\\page.jsx\",\n                                            lineNumber: 43,\n                                            columnNumber: 34\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\app\\\\pages\\\\products\\\\page.jsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, data.id, true, {\n                            fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\app\\\\pages\\\\products\\\\page.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 25\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\app\\\\pages\\\\products\\\\page.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\app\\\\pages\\\\products\\\\page.jsx\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Produtos, \"ihwZ+BX4bSCwLhmKuLMhfZi+MPo=\");\n_c = Produtos;\nvar _c;\n$RefreshReg$(_c, \"Produtos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZXMvcHJvZHVjdHMvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ21DO0FBQ1c7QUFDaUI7QUFDM0M7QUFDZ0M7QUFDa0I7QUFDeEI7QUFFL0IsU0FBU1M7O0lBQ3BCLE1BQU0sRUFBQ0MsUUFBUSxFQUFFQyxXQUFXLEVBQUMsR0FBR1QsaURBQVVBLENBQUNNLDJEQUFVQTtJQUNyRCxNQUFNSSxjQUFjUiw2Q0FBTUEsQ0FBQyxFQUFFO0lBQzdCLE1BQU0sRUFBQ1MsT0FBTyxFQUFDQyxVQUFVLEVBQUMsR0FBR1osaURBQVVBLENBQUNNLDJEQUFVQTtJQUNsRCxNQUFNTyxNQUFNLElBQUlmLHdEQUFHQTtJQUVuQkcsZ0RBQVNBLENBQUM7UUFDUFksSUFBSUMsV0FBVyxDQUFDLFVBQVVDLElBQUksQ0FBQyxDQUFDQztZQUMzQk4sWUFBWU8sT0FBTyxDQUFDQyxJQUFJLENBQUNGO1lBQ3pCUCxZQUFZO21CQUFJQyxZQUFZTyxPQUFPO2FBQUM7WUFDcENOLFFBQVE7UUFDYjtJQUNILEdBQUUsRUFBRTtJQUNKLHFCQUNJOzswQkFDSSw4REFBQ1E7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDQzt3QkFBR0QsV0FBVTtrQ0FBYzs7Ozs7O2tDQUM1Qiw4REFBQ2YsZ0ZBQWFBOzs7Ozs7Ozs7OzswQkFFbEIsOERBQUNjO2dCQUFJQyxXQUFVOzBCQUNWVCx3QkFBVSw4REFBQ1Asb0VBQU9BOzs7O3lDQUNmLDhEQUFDZTtvQkFBSUMsV0FBVTs4QkFDZFosU0FBU2MsR0FBRyxDQUFDLENBQUNOLHFCQUNYLDhEQUFDRzs0QkFBSUMsV0FBVTs7OENBQ1gsOERBQUNHO29DQUFJQyxLQUFLUixLQUFLUyxTQUFTLENBQUNDLE9BQU8sQ0FBQyxhQUFhO29DQUFVQyxLQUFJOzs7Ozs7OENBQzVELDhEQUFDUjtvQ0FBSUMsV0FBVTs7c0RBQ1gsOERBQUNEOzRDQUFJQyxXQUFVOzs4REFDWCw4REFBQ1E7OERBQUlaLEtBQUthLEtBQUssQ0FBQ0gsT0FBTyxDQUFDLDZCQUE2Qjs7Ozs7OzhEQUNyRCw4REFBQ0k7OERBQUdkLEtBQUtlLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLFNBQVE7d0RBQ2xDQyxPQUFPO3dEQUNQQyxVQUFVO29EQUNkOzs7Ozs7Ozs7Ozs7c0RBRUgsOERBQUNuQyxnRUFBS0E7NENBQ05vQyxZQUFhOzRDQUNiQyxNQUFPOzRDQUNQSCxPQUFNOzRDQUNOSSxNQUFNLFVBQWtCLE9BQVJyQixLQUFLc0IsRUFBRSxFQUFDOzs7Ozs7Ozs7Ozs7OzJCQWRGdEIsS0FBS3NCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEI5RDtHQWpEd0IvQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2VzL3Byb2R1Y3RzL3BhZ2UuanN4PzA5NmMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IEdldCBmcm9tIFwiQC9SZXF1aXNpY29lcy9nZXRcIlxyXG5pbXBvcnQgQm90YW8gZnJvbSBcIkAvY29tcG9uZW50ZXMvQm90YW8vYm90YW9cIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiQC9jb21wb25lbnRlcy9Mb2FkaW5nL2xvYWRpbmdcIjtcclxuaW1wb3J0IEJhcnJhUGVzcXVpc2EgZnJvbSBcIkAvY29tcG9uZW50ZXMvQmFycmFQZXNxdWlzYS9iYXJyYVBlc3F1aXNhXCI7XHJcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCJAL2NvbnRleHQvQXBwQ29udGV4dFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHV0b3MoKXtcclxuICAgIGNvbnN0IHtwcm9kdXRvcywgc2V0UHJvZHV0b3N9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxuICAgIGNvbnN0IHByb2R1dG9zUmVmID0gdXNlUmVmKFtdKVxyXG4gICAgY29uc3Qge2xvYWRpbmcsc2V0TG9hZGluZ30gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xyXG4gICAgY29uc3QgZ2V0ID0gbmV3IEdldCgpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICBnZXQubWV0b2RvRmV0Y2goXCJpcGhvbmVcIikudGhlbigoZGF0YSk9PntcclxuICAgICAgICAgICAgcHJvZHV0b3NSZWYuY3VycmVudC5wdXNoKGRhdGEpO1xyXG4gICAgICAgICAgICBzZXRQcm9kdXRvcyhbLi4ucHJvZHV0b3NSZWYuY3VycmVudF0pO1xyXG4gICAgICAgICAgICBsb2FkaW5nKGZhbHNlKTtcclxuICAgICAgIH0pXHJcbiAgICB9LFtdKVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFRpdHVsb0NhcmRzXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0dWxvQ2FyZHNcIj5Qcm9kdXRvczwvaDE+XHJcbiAgICAgICAgICAgICAgICA8QmFycmFQZXNxdWlzYS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhCb2R5XCI+XHJcbiAgICAgICAgICAgICAgICB7bG9hZGluZyA/IDxMb2FkaW5nLz4gOiAgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleENhcmRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb2R1dG9zLm1hcCgoZGF0YSk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4Q2FyZFwiIGtleT17ZGF0YS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS50aHVtYm5haWwucmVwbGFjZSgvXFx3XFwuanBnL2dpLCBcIlcuanBnXCIpfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4RGVzY3JpY2FvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4VGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+e2RhdGEudGl0bGUucmVwbGFjZShcIi0gRGlzdHJpYnVpZG9yIEF1dG9yaXphZG9cIiwgXCJcIil9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2RhdGEucHJpY2UudG9Mb2NhbGVTdHJpbmcoXCJwdC1iclwiLHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBcImN1cnJlbmN5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeTogXCJCUkxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3Rhb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc1VuaWNhID0gXCJib3Rhb1VuaWNvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA9IFwiVmVyIERldGFsaGVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJidG4gYnRuLW91dGxpbmUtZGFya1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGE9e2AvcGFnZXMvJHtkYXRhLmlkfS9wcm9kdWN0cy9gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJHZXQiLCJCb3RhbyIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkxvYWRpbmciLCJCYXJyYVBlc3F1aXNhIiwiQXBwQ29udGV4dCIsIlByb2R1dG9zIiwicHJvZHV0b3MiLCJzZXRQcm9kdXRvcyIsInByb2R1dG9zUmVmIiwibG9hZGluZyIsInNldExvYWRpbmciLCJnZXQiLCJtZXRvZG9GZXRjaCIsInRoZW4iLCJkYXRhIiwiY3VycmVudCIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm1hcCIsImltZyIsInNyYyIsInRodW1ibmFpbCIsInJlcGxhY2UiLCJhbHQiLCJoMiIsInRpdGxlIiwicCIsInByaWNlIiwidG9Mb2NhbGVTdHJpbmciLCJzdHlsZSIsImN1cnJlbmN5IiwiY2xhc3NVbmljYSIsInRleHQiLCJyb3RhIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/pages/products/page.jsx\n"));

/***/ })

});