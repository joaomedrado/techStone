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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Requisicoes_get_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Requisicoes/get.js */ \"(app-pages-browser)/./src/Requisicoes/get.js\");\n/* harmony import */ var _componentes_Botao_botao__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/componentes/Botao/botao */ \"(app-pages-browser)/./src/componentes/Botao/botao.jsx\");\n/* harmony import */ var _app_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/style.css */ \"(app-pages-browser)/./src/app/style.css\");\n/* harmony import */ var _context_Provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/context/Provider */ \"(app-pages-browser)/./src/context/Provider.jsx\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aos */ \"(app-pages-browser)/./node_modules/aos/dist/aos.js\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _node_modules_aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../node_modules/aos/dist/aos.css */ \"(app-pages-browser)/./node_modules/aos/dist/aos.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [dadosApi, setDadosApi] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const get = new _Requisicoes_get_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](setDadosApi);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        get.metodoUseEffect(setDadosApi);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        aos__WEBPACK_IMPORTED_MODULE_6___default().init({\n            duration: 1200\n        });\n    }, []);\n    const ipadApresentacao = dadosApi.length > 0 ? dadosApi[9] : null;\n    const celularIpadApresentacao = dadosApi.length > 0 ? dadosApi[7] : null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_Provider__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"sessaoOne\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flexBoxOne\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            \"data-aos\": \"fade-down\",\n                            children: \"Explore o universo da tecnologia com inova\\xe7\\xf5es incr\\xedveis e dispositivos de \\xfaltima gera\\xe7\\xe3o. Descubra produtos que elevam sua experi\\xeancia digital e simplificam seu dia a dia. Conecte-se ao futuro hoje mesmo!\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\page.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_componentes_Botao_botao__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            text: \"Saiba Mais\",\n                            style: \"btn btn-outline-dark\",\n                            rota: \"/pages/products\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\page.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\page.jsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\page.jsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"sessaoTwo\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flexBoxTwo\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"iPad Pro\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\page.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"O produto Apple mais fino at\\xe9 hoje. E mais poderoso do que nunca. Incrivelmente port\\xe1til em um design elegante. Ultra Retina XDR, a tela mais avan\\xe7ada do mundo. Desempenho absurdo e gr\\xe1ficos impressionantes com o chip M4 da Apple. E bateria para o dia todo.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\page.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_componentes_Botao_botao__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                style: \"btn btn-light\",\n                                text: \"Saiba Mais\",\n                                rota: \"/pages/products\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\page.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\page.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flexBoxThree\",\n                        children: ipadApresentacao ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"imagemSessaoTwo\",\n                                src: ipadApresentacao.imageUrlBlack,\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\page.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 15\n                            }, this)\n                        }, ipadApresentacao.id, false, {\n                            fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\page.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, this) : null\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\page.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\page.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"sessaoThree\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flexBoxFor\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flexTituloSessaoThree\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: \"Veja o iPad  em  realidade  aumentada.\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\page.jsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"Abra esta p\\xe1gina no seu iPhone ou iPad usando o Safari.\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\page.jsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_componentes_Botao_botao__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    text: \"Saiba Mais\",\n                                    style: \"btn btn-outline-dark\",\n                                    rota: \"/pages/products\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\page.jsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\page.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 15\n                        }, this),\n                        celularIpadApresentacao ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: celularIpadApresentacao.imagemIpad,\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\page.jsx\",\n                                lineNumber: 60,\n                                columnNumber: 19\n                            }, this)\n                        }, celularIpadApresentacao.id, false, {\n                            fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\page.jsx\",\n                            lineNumber: 59,\n                            columnNumber: 17\n                        }, this) : null\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\page.jsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\page.jsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\page.jsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"2v1zC0+/+/e7GTIpfP+uSyNHUzE=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUM0QztBQUNOO0FBQ1E7QUFDdEI7QUFDa0I7QUFDcEI7QUFDc0I7QUFHN0IsU0FBU007O0lBQ3RCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLE1BQU1RLE1BQU0sSUFBSVAsMkRBQUdBLENBQUNNO0lBRXBCUixnREFBU0EsQ0FBQztRQUNSUyxJQUFJQyxlQUFlLENBQUNGO0lBQ3RCLEdBQUcsRUFBRTtJQUVMUixnREFBU0EsQ0FBQztRQUNSSywrQ0FBUSxDQUFDO1lBQ1BPLFVBQVU7UUFDWjtJQUNGLEdBQUUsRUFBRTtJQUVKLE1BQU1DLG1CQUFtQk4sU0FBU08sTUFBTSxHQUFHLElBQUlQLFFBQVEsQ0FBQyxFQUFFLEdBQUc7SUFDN0QsTUFBTVEsMEJBQTBCUixTQUFTTyxNQUFNLEdBQUcsSUFBSVAsUUFBUSxDQUFDLEVBQUUsR0FBSTtJQUdyRSxxQkFDRSw4REFBQ0gseURBQVFBOzswQkFDUCw4REFBQ1k7Z0JBQVFDLFdBQVU7MEJBQ2pCLDRFQUFDQztvQkFBS0QsV0FBVTs7c0NBQ2QsOERBQUNFOzRCQUFHQyxZQUFTO3NDQUFhOzs7Ozs7c0NBQzFCLDhEQUFDakIsZ0VBQUtBOzRCQUFDa0IsTUFBTzs0QkFBYUMsT0FBTTs0QkFBdUJDLE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUdqRSw4REFBQ1A7Z0JBQVFDLFdBQVU7O2tDQUNqQiw4REFBQ0M7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDRTswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDSzswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDckIsZ0VBQUtBO2dDQUFDbUIsT0FBTTtnQ0FBZ0JELE1BQU87Z0NBQWFFLE1BQUs7Ozs7Ozs7Ozs7OztrQ0FFeEQsOERBQUNMO3dCQUFJRCxXQUFVO2tDQUNaSixpQ0FDQyw4REFBQ0s7c0NBQ0MsNEVBQUNPO2dDQUFJUixXQUFVO2dDQUFrQlMsS0FBS2IsaUJBQWlCYyxhQUFhO2dDQUFFQyxLQUFJOzs7Ozs7MkJBRGxFZixpQkFBaUJnQixFQUFFOzs7O21DQUczQjs7Ozs7Ozs7Ozs7OzBCQUdSLDhEQUFDYjtnQkFBUUMsV0FBVTswQkFDakIsNEVBQUNDO29CQUFJRCxXQUFVOztzQ0FDVCw4REFBQ0M7NEJBQUlELFdBQVU7OzhDQUNiLDhEQUFDRTs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDSzs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDckIsZ0VBQUtBO29DQUFDa0IsTUFBTztvQ0FBYUMsT0FBTTtvQ0FBdUJDLE1BQUs7Ozs7Ozs7Ozs7Ozt3QkFFOURSLHdDQUNDLDhEQUFDRztzQ0FDQyw0RUFBQ087Z0NBQUlDLEtBQUtYLHdCQUF3QmUsVUFBVTtnQ0FBRUYsS0FBSTs7Ozs7OzJCQUQxQ2Isd0JBQXdCYyxFQUFFOzs7O21DQUdwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2hCO0dBeER3QnZCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS5qc3g/ZDQ2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEdldCBmcm9tIFwiQC9SZXF1aXNpY29lcy9nZXQuanNcIlxuaW1wb3J0IEJvdGFvIGZyb20gXCJAL2NvbXBvbmVudGVzL0JvdGFvL2JvdGFvXCI7XG5pbXBvcnQgXCJAL2FwcC9zdHlsZS5jc3NcIlxuaW1wb3J0IFByb3ZpZGVyIGZyb20gXCJAL2NvbnRleHQvUHJvdmlkZXJcIjtcbmltcG9ydCBBT1MgZnJvbSAnYW9zJztcbmltcG9ydCBcIi4uLy4uL25vZGVfbW9kdWxlcy9hb3MvZGlzdC9hb3MuY3NzXCJcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbZGFkb3NBcGksIHNldERhZG9zQXBpXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgZ2V0ID0gbmV3IEdldChzZXREYWRvc0FwaSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldC5tZXRvZG9Vc2VFZmZlY3Qoc2V0RGFkb3NBcGkpO1xuICB9LCBbXSlcblxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBBT1MuaW5pdCh7XG4gICAgICBkdXJhdGlvbjogMTIwMCxcbiAgICB9KTtcbiAgfSxbXSlcblxuICBjb25zdCBpcGFkQXByZXNlbnRhY2FvID0gZGFkb3NBcGkubGVuZ3RoID4gMCA/IGRhZG9zQXBpWzldIDogbnVsbDtcbiAgY29uc3QgY2VsdWxhcklwYWRBcHJlc2VudGFjYW8gPSBkYWRvc0FwaS5sZW5ndGggPiAwID8gZGFkb3NBcGlbN10gOiAgbnVsbDtcblxuXG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2Vzc2FvT25lXCI+XG4gICAgICAgIDxkaXYgIGNsYXNzTmFtZT1cImZsZXhCb3hPbmVcIj5cbiAgICAgICAgICA8aDEgZGF0YS1hb3M9XCJmYWRlLWRvd25cIiA+RXhwbG9yZSBvIHVuaXZlcnNvIGRhIHRlY25vbG9naWEgY29tIGlub3Zhw6fDtWVzIGluY3LDrXZlaXMgZSBkaXNwb3NpdGl2b3MgZGUgw7psdGltYSBnZXJhw6fDo28uIERlc2N1YnJhIHByb2R1dG9zIHF1ZSBlbGV2YW0gc3VhIGV4cGVyacOqbmNpYSBkaWdpdGFsIGUgc2ltcGxpZmljYW0gc2V1IGRpYSBhIGRpYS4gQ29uZWN0ZS1zZSBhbyBmdXR1cm8gaG9qZSBtZXNtbyE8L2gxPlxuICAgICAgICAgIDxCb3RhbyB0ZXh0ID0gXCJTYWliYSBNYWlzXCIgc3R5bGU9XCJidG4gYnRuLW91dGxpbmUtZGFya1wiIHJvdGE9XCIvcGFnZXMvcHJvZHVjdHNcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlc3Nhb1R3b1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhCb3hUd29cIj5cbiAgICAgICAgICA8aDE+aVBhZCBQcm88L2gxPlxuICAgICAgICAgIDxoMj5PIHByb2R1dG8gQXBwbGUgbWFpcyBmaW5vIGF0w6kgaG9qZS4gRSBtYWlzIHBvZGVyb3NvIGRvIHF1ZSBudW5jYS4gSW5jcml2ZWxtZW50ZSBwb3J0w6F0aWwgZW0gdW0gZGVzaWduIGVsZWdhbnRlLiBVbHRyYSBSZXRpbmEgWERSLCBhIHRlbGEgbWFpcyBhdmFuw6dhZGEgZG8gbXVuZG8uIERlc2VtcGVuaG8gYWJzdXJkbyBlIGdyw6FmaWNvcyBpbXByZXNzaW9uYW50ZXMgY29tIG8gY2hpcCBNNCBkYSBBcHBsZS4gRSBiYXRlcmlhIHBhcmEgbyBkaWEgdG9kby48L2gyPlxuICAgICAgICAgIDxCb3RhbyBzdHlsZT1cImJ0biBidG4tbGlnaHRcIiB0ZXh0ID0gXCJTYWliYSBNYWlzXCIgcm90YT1cIi9wYWdlcy9wcm9kdWN0c1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhCb3hUaHJlZVwiPlxuICAgICAgICAgIHtpcGFkQXByZXNlbnRhY2FvID9cbiAgICAgICAgICAgIDxkaXYga2V5PXtpcGFkQXByZXNlbnRhY2FvLmlkfT5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWFnZW1TZXNzYW9Ud29cIiBzcmM9e2lwYWRBcHJlc2VudGFjYW8uaW1hZ2VVcmxCbGFja30gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlc3Nhb1RocmVlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleEJveEZvclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhUaXR1bG9TZXNzYW9UaHJlZVwiPlxuICAgICAgICAgICAgICAgIDxoMT5WZWphIG8gaVBhZCAgZW0gIHJlYWxpZGFkZSAgYXVtZW50YWRhLjwvaDE+XG4gICAgICAgICAgICAgICAgPGgyPkFicmEgZXN0YSBww6FnaW5hIG5vIHNldSBpUGhvbmUgb3UgaVBhZCB1c2FuZG8gbyBTYWZhcmkuPC9oMj5cbiAgICAgICAgICAgICAgICA8Qm90YW8gdGV4dCA9IFwiU2FpYmEgTWFpc1wiIHN0eWxlPVwiYnRuIGJ0bi1vdXRsaW5lLWRhcmtcIiByb3RhPVwiL3BhZ2VzL3Byb2R1Y3RzXCIvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAge2NlbHVsYXJJcGFkQXByZXNlbnRhY2FvID8gXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2NlbHVsYXJJcGFkQXByZXNlbnRhY2FvLmlkfT5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjZWx1bGFySXBhZEFwcmVzZW50YWNhby5pbWFnZW1JcGFkfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9Qcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkdldCIsIkJvdGFvIiwiUHJvdmlkZXIiLCJBT1MiLCJIb21lIiwiZGFkb3NBcGkiLCJzZXREYWRvc0FwaSIsImdldCIsIm1ldG9kb1VzZUVmZmVjdCIsImluaXQiLCJkdXJhdGlvbiIsImlwYWRBcHJlc2VudGFjYW8iLCJsZW5ndGgiLCJjZWx1bGFySXBhZEFwcmVzZW50YWNhbyIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJoMSIsImRhdGEtYW9zIiwidGV4dCIsInN0eWxlIiwicm90YSIsImgyIiwiaW1nIiwic3JjIiwiaW1hZ2VVcmxCbGFjayIsImFsdCIsImlkIiwiaW1hZ2VtSXBhZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.jsx\n"));

/***/ })

});