"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.jsx":
/*!**************************!*\
  !*** ./src/app/page.jsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Requisicoes_get_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Requisicoes/get.js */ \"(app-pages-browser)/./src/Requisicoes/get.js\");\n/* harmony import */ var _componentes_Botao_botao__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/componentes/Botao/botao */ \"(app-pages-browser)/./src/componentes/Botao/botao.jsx\");\n/* harmony import */ var _app_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/style.css */ \"(app-pages-browser)/./src/app/style.css\");\n/* harmony import */ var _context_Provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/context/Provider */ \"(app-pages-browser)/./src/context/Provider.jsx\");\n/* harmony import */ var _node_modules_aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../node_modules/aos/dist/aos.css */ \"(app-pages-browser)/./node_modules/aos/dist/aos.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [dadosApi, setDadosApi] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const get = new _Requisicoes_get_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](setDadosApi);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        get.metodoUseEffect(setDadosApi);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        AOS.init({\n            duration: 1000\n        });\n    }, []);\n    const ipadApresentacao = dadosApi.length > 0 ? dadosApi[9] : null;\n    const celularIpadApresentacao = dadosApi.length > 0 ? dadosApi[7] : null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_Provider__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"sessaoOne\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flexBoxOne\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            \"data-aos\": \"fade-down\",\n                            children: \"Explore o universo da tecnologia com inova\\xe7\\xf5es incr\\xedveis e dispositivos de \\xfaltima gera\\xe7\\xe3o. Descubra produtos que elevam sua experi\\xeancia digital e simplificam seu dia a dia. Conecte-se ao futuro hoje mesmo!\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\page.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_componentes_Botao_botao__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            text: \"Saiba Mais\",\n                            style: \"btn btn-outline-dark\",\n                            rota: \"/pages/products\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\page.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\page.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\page.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"sessaoTwo\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flexBoxTwo\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"iPad Pro\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\page.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"O produto Apple mais fino at\\xe9 hoje. E mais poderoso do que nunca. Incrivelmente port\\xe1til em um design elegante. Ultra Retina XDR, a tela mais avan\\xe7ada do mundo. Desempenho absurdo e gr\\xe1ficos impressionantes com o chip M4 da Apple. E bateria para o dia todo.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\page.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_componentes_Botao_botao__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                style: \"btn btn-light\",\n                                text: \"Saiba Mais\",\n                                rota: \"/pages/products\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\page.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\page.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flexBoxThree\",\n                        children: ipadApresentacao ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"imagemSessaoTwo\",\n                                src: ipadApresentacao.imageUrlBlack,\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\page.jsx\",\n                                lineNumber: 45,\n                                columnNumber: 15\n                            }, this)\n                        }, ipadApresentacao.id, false, {\n                            fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\page.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, this) : null\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\page.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\page.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"sessaoThree\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flexBoxFor\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flexTituloSessaoThree\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: \"Veja o iPad  em  realidade  aumentada.\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\page.jsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"Abra esta p\\xe1gina no seu iPhone ou iPad usando o Safari.\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\page.jsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_componentes_Botao_botao__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    text: \"Saiba Mais\",\n                                    style: \"btn btn-outline-dark\",\n                                    rota: \"/pages/products\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\page.jsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\page.jsx\",\n                            lineNumber: 52,\n                            columnNumber: 15\n                        }, this),\n                        celularIpadApresentacao ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: celularIpadApresentacao.imagemIpad,\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\page.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 19\n                            }, this)\n                        }, celularIpadApresentacao.id, false, {\n                            fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\page.jsx\",\n                            lineNumber: 58,\n                            columnNumber: 17\n                        }, this) : null\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\page.jsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\page.jsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\page.jsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"2v1zC0+/+/e7GTIpfP+uSyNHUzE=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDNEM7QUFDTjtBQUNRO0FBQ3RCO0FBQ2tCO0FBQ0U7QUFHN0IsU0FBU0s7O0lBQ3RCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLE1BQU1PLE1BQU0sSUFBSU4sMkRBQUdBLENBQUNLO0lBRXBCUCxnREFBU0EsQ0FBQztRQUNSUSxJQUFJQyxlQUFlLENBQUNGO0lBQ3RCLEdBQUcsRUFBRTtJQUVMUCxnREFBU0EsQ0FBQztRQUNSVSxJQUFJQyxJQUFJLENBQUM7WUFDUEMsVUFBVTtRQUNaO0lBQ0YsR0FBRSxFQUFFO0lBRUosTUFBTUMsbUJBQW1CUCxTQUFTUSxNQUFNLEdBQUcsSUFBSVIsUUFBUSxDQUFDLEVBQUUsR0FBRztJQUM3RCxNQUFNUywwQkFBMEJULFNBQVNRLE1BQU0sR0FBRyxJQUFJUixRQUFRLENBQUMsRUFBRSxHQUFJO0lBR3JFLHFCQUNFLDhEQUFDRix5REFBUUE7OzBCQUNQLDhEQUFDWTtnQkFBUUMsV0FBVTswQkFDakIsNEVBQUNDO29CQUFLRCxXQUFVOztzQ0FDZCw4REFBQ0U7NEJBQUdDLFlBQVM7c0NBQWE7Ozs7OztzQ0FDMUIsOERBQUNqQixnRUFBS0E7NEJBQUNrQixNQUFPOzRCQUFhQyxPQUFNOzRCQUF1QkMsTUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR2pFLDhEQUFDUDtnQkFBUUMsV0FBVTs7a0NBQ2pCLDhEQUFDQzt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNFOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNLOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNyQixnRUFBS0E7Z0NBQUNtQixPQUFNO2dDQUFnQkQsTUFBTztnQ0FBYUUsTUFBSzs7Ozs7Ozs7Ozs7O2tDQUV4RCw4REFBQ0w7d0JBQUlELFdBQVU7a0NBQ1pKLGlDQUNDLDhEQUFDSztzQ0FDQyw0RUFBQ087Z0NBQUlSLFdBQVU7Z0NBQWtCUyxLQUFLYixpQkFBaUJjLGFBQWE7Z0NBQUVDLEtBQUk7Ozs7OzsyQkFEbEVmLGlCQUFpQmdCLEVBQUU7Ozs7bUNBRzNCOzs7Ozs7Ozs7Ozs7MEJBR1IsOERBQUNiO2dCQUFRQyxXQUFVOzBCQUNqQiw0RUFBQ0M7b0JBQUlELFdBQVU7O3NDQUNULDhEQUFDQzs0QkFBSUQsV0FBVTs7OENBQ2IsOERBQUNFOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNLOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNyQixnRUFBS0E7b0NBQUNrQixNQUFPO29DQUFhQyxPQUFNO29DQUF1QkMsTUFBSzs7Ozs7Ozs7Ozs7O3dCQUU5RFIsd0NBQ0MsOERBQUNHO3NDQUNDLDRFQUFDTztnQ0FBSUMsS0FBS1gsd0JBQXdCZSxVQUFVO2dDQUFFRixLQUFJOzs7Ozs7MkJBRDFDYix3QkFBd0JjLEVBQUU7Ozs7bUNBR3BDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLaEI7R0F4RHdCeEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLmpzeD9kNDY3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgR2V0IGZyb20gXCJAL1JlcXVpc2ljb2VzL2dldC5qc1wiXG5pbXBvcnQgQm90YW8gZnJvbSBcIkAvY29tcG9uZW50ZXMvQm90YW8vYm90YW9cIjtcbmltcG9ydCBcIkAvYXBwL3N0eWxlLmNzc1wiXG5pbXBvcnQgUHJvdmlkZXIgZnJvbSBcIkAvY29udGV4dC9Qcm92aWRlclwiO1xuaW1wb3J0IFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Fvcy9kaXN0L2Fvcy5jc3NcIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtkYWRvc0FwaSwgc2V0RGFkb3NBcGldID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBnZXQgPSBuZXcgR2V0KHNldERhZG9zQXBpKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0Lm1ldG9kb1VzZUVmZmVjdChzZXREYWRvc0FwaSk7XG4gIH0sIFtdKVxuXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIEFPUy5pbml0KHtcbiAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgIH0pO1xuICB9LFtdKVxuXG4gIGNvbnN0IGlwYWRBcHJlc2VudGFjYW8gPSBkYWRvc0FwaS5sZW5ndGggPiAwID8gZGFkb3NBcGlbOV0gOiBudWxsO1xuICBjb25zdCBjZWx1bGFySXBhZEFwcmVzZW50YWNhbyA9IGRhZG9zQXBpLmxlbmd0aCA+IDAgPyBkYWRvc0FwaVs3XSA6ICBudWxsO1xuXG5cbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXI+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZXNzYW9PbmVcIj5cbiAgICAgICAgPGRpdiAgY2xhc3NOYW1lPVwiZmxleEJveE9uZVwiPlxuICAgICAgICAgIDxoMSBkYXRhLWFvcz1cImZhZGUtZG93blwiID5FeHBsb3JlIG8gdW5pdmVyc28gZGEgdGVjbm9sb2dpYSBjb20gaW5vdmHDp8O1ZXMgaW5jcsOtdmVpcyBlIGRpc3Bvc2l0aXZvcyBkZSDDumx0aW1hIGdlcmHDp8Ojby4gRGVzY3VicmEgcHJvZHV0b3MgcXVlIGVsZXZhbSBzdWEgZXhwZXJpw6puY2lhIGRpZ2l0YWwgZSBzaW1wbGlmaWNhbSBzZXUgZGlhIGEgZGlhLiBDb25lY3RlLXNlIGFvIGZ1dHVybyBob2plIG1lc21vITwvaDE+XG4gICAgICAgICAgPEJvdGFvIHRleHQgPSBcIlNhaWJhIE1haXNcIiBzdHlsZT1cImJ0biBidG4tb3V0bGluZS1kYXJrXCIgcm90YT1cIi9wYWdlcy9wcm9kdWN0c1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2Vzc2FvVHdvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleEJveFR3b1wiPlxuICAgICAgICAgIDxoMT5pUGFkIFBybzwvaDE+XG4gICAgICAgICAgPGgyPk8gcHJvZHV0byBBcHBsZSBtYWlzIGZpbm8gYXTDqSBob2plLiBFIG1haXMgcG9kZXJvc28gZG8gcXVlIG51bmNhLiBJbmNyaXZlbG1lbnRlIHBvcnTDoXRpbCBlbSB1bSBkZXNpZ24gZWxlZ2FudGUuIFVsdHJhIFJldGluYSBYRFIsIGEgdGVsYSBtYWlzIGF2YW7Dp2FkYSBkbyBtdW5kby4gRGVzZW1wZW5obyBhYnN1cmRvIGUgZ3LDoWZpY29zIGltcHJlc3Npb25hbnRlcyBjb20gbyBjaGlwIE00IGRhIEFwcGxlLiBFIGJhdGVyaWEgcGFyYSBvIGRpYSB0b2RvLjwvaDI+XG4gICAgICAgICAgPEJvdGFvIHN0eWxlPVwiYnRuIGJ0bi1saWdodFwiIHRleHQgPSBcIlNhaWJhIE1haXNcIiByb3RhPVwiL3BhZ2VzL3Byb2R1Y3RzXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleEJveFRocmVlXCI+XG4gICAgICAgICAge2lwYWRBcHJlc2VudGFjYW8gP1xuICAgICAgICAgICAgPGRpdiBrZXk9e2lwYWRBcHJlc2VudGFjYW8uaWR9PlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltYWdlbVNlc3Nhb1R3b1wiIHNyYz17aXBhZEFwcmVzZW50YWNhby5pbWFnZVVybEJsYWNrfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2Vzc2FvVGhyZWVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4Qm94Rm9yXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFRpdHVsb1Nlc3Nhb1RocmVlXCI+XG4gICAgICAgICAgICAgICAgPGgxPlZlamEgbyBpUGFkICBlbSAgcmVhbGlkYWRlICBhdW1lbnRhZGEuPC9oMT5cbiAgICAgICAgICAgICAgICA8aDI+QWJyYSBlc3RhIHDDoWdpbmEgbm8gc2V1IGlQaG9uZSBvdSBpUGFkIHVzYW5kbyBvIFNhZmFyaS48L2gyPlxuICAgICAgICAgICAgICAgIDxCb3RhbyB0ZXh0ID0gXCJTYWliYSBNYWlzXCIgc3R5bGU9XCJidG4gYnRuLW91dGxpbmUtZGFya1wiIHJvdGE9XCIvcGFnZXMvcHJvZHVjdHNcIi8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7Y2VsdWxhcklwYWRBcHJlc2VudGFjYW8gPyBcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17Y2VsdWxhcklwYWRBcHJlc2VudGFjYW8uaWR9PlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NlbHVsYXJJcGFkQXByZXNlbnRhY2FvLmltYWdlbUlwYWR9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L1Byb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiR2V0IiwiQm90YW8iLCJQcm92aWRlciIsIkhvbWUiLCJkYWRvc0FwaSIsInNldERhZG9zQXBpIiwiZ2V0IiwibWV0b2RvVXNlRWZmZWN0IiwiQU9TIiwiaW5pdCIsImR1cmF0aW9uIiwiaXBhZEFwcmVzZW50YWNhbyIsImxlbmd0aCIsImNlbHVsYXJJcGFkQXByZXNlbnRhY2FvIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImgxIiwiZGF0YS1hb3MiLCJ0ZXh0Iiwic3R5bGUiLCJyb3RhIiwiaDIiLCJpbWciLCJzcmMiLCJpbWFnZVVybEJsYWNrIiwiYWx0IiwiaWQiLCJpbWFnZW1JcGFkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.jsx\n"));

/***/ })

});