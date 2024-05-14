"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/pages/carrinho/page",{

/***/ "(app-pages-browser)/./src/app/pages/carrinho/page.jsx":
/*!*****************************************!*\
  !*** ./src/app/pages/carrinho/page.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Carrinho; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../context/AppContext */ \"(app-pages-browser)/./src/context/AppContext.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"(app-pages-browser)/./src/app/pages/carrinho/style.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Carrinho() {\n    _s();\n    const { carrinho, setCarrinho } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    const metodoExcluirProduto = (id)=>{\n        const atualizarItems = carrinho.filter((item)=>item.id != id);\n        setCarrinho(atualizarItems);\n    };\n    const valorTotal = carrinho.reduce((acc, item)=>item.price + acc, 0);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flexCarrinho\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    className: \"tabelaCarrinho\",\n                    class: \"table\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        children: \"#\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\pages\\\\carrinho\\\\page.jsx\",\n                                        lineNumber: 23,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        children: \"Produto\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\pages\\\\carrinho\\\\page.jsx\",\n                                        lineNumber: 24,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        children: \"Quantidade em Estoque\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\pages\\\\carrinho\\\\page.jsx\",\n                                        lineNumber: 25,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        children: \"Pre\\xe7o\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\pages\\\\carrinho\\\\page.jsx\",\n                                        lineNumber: 26,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\pages\\\\carrinho\\\\page.jsx\",\n                                lineNumber: 22,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\pages\\\\carrinho\\\\page.jsx\",\n                            lineNumber: 21,\n                            columnNumber: 21\n                        }, this),\n                        carrinho.map((data)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            scope: \"row\",\n                                            children: data.id\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\pages\\\\carrinho\\\\page.jsx\",\n                                            lineNumber: 32,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            scope: \"col\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                        className: \"imagemProdutoTabela\",\n                                                        src: data.imageUrl,\n                                                        alt: \"\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\pages\\\\carrinho\\\\page.jsx\",\n                                                        lineNumber: 33,\n                                                        columnNumber: 55\n                                                    }, this),\n                                                    data.name\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\pages\\\\carrinho\\\\page.jsx\",\n                                                lineNumber: 33,\n                                                columnNumber: 49\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\pages\\\\carrinho\\\\page.jsx\",\n                                            lineNumber: 33,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            scope: \"col\",\n                                            children: data.inStock\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\pages\\\\carrinho\\\\page.jsx\",\n                                            lineNumber: 34,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            scope: \"col\",\n                                            children: [\n                                                \"R$ \",\n                                                data.price\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\pages\\\\carrinho\\\\page.jsx\",\n                                            lineNumber: 35,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            scope: \"col\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                class: \"btn-group\",\n                                                role: \"group\",\n                                                \"aria-label\": \"Basic mixed styles example\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    type: \"button\",\n                                                    class: \"btn btn-danger\",\n                                                    onClick: ()=>metodoExcluirProduto(data.id),\n                                                    children: \"Excluir\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\pages\\\\carrinho\\\\page.jsx\",\n                                                    lineNumber: 38,\n                                                    columnNumber: 41\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\pages\\\\carrinho\\\\page.jsx\",\n                                                lineNumber: 37,\n                                                columnNumber: 37\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\pages\\\\carrinho\\\\page.jsx\",\n                                            lineNumber: 36,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\pages\\\\carrinho\\\\page.jsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 29\n                                }, this)\n                            }, data.id, false, {\n                                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\pages\\\\carrinho\\\\page.jsx\",\n                                lineNumber: 30,\n                                columnNumber: 25\n                            }, this))\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\pages\\\\carrinho\\\\page.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flexValorTotal\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"valorTotal\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Total\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\pages\\\\carrinho\\\\page.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: valorTotal\n                            }, void 0, false)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\pages\\\\carrinho\\\\page.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\pages\\\\carrinho\\\\page.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\pages\\\\carrinho\\\\page.jsx\",\n            lineNumber: 19,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Carrinho, \"38fTV3l361wkSIiIsuPGjwsEBLk=\");\n_c = Carrinho;\nvar _c;\n$RefreshReg$(_c, \"Carrinho\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZXMvY2FycmluaG8vcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDcUQ7QUFDbEI7QUFDZjtBQUNMLFNBQVNFOztJQUVwQixNQUFNLEVBQUVDLFFBQVEsRUFBRUMsV0FBVyxFQUFFLEdBQUdILGlEQUFVQSxDQUFDRCwyREFBVUE7SUFHdkQsTUFBTUssdUJBQXVCLENBQUNDO1FBQzFCLE1BQU1DLGlCQUFpQkosU0FBU0ssTUFBTSxDQUFDLENBQUNDLE9BQVNBLEtBQUtILEVBQUUsSUFBSUE7UUFDNURGLFlBQVlHO0lBQ2hCO0lBRUEsTUFBTUcsYUFBYVAsU0FBU1EsTUFBTSxDQUFDLENBQUNDLEtBQUtILE9BQVNBLEtBQUtJLEtBQUssR0FBR0QsS0FBSztJQUVwRSxxQkFDSTtrQkFDSSw0RUFBQ0U7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNDO29CQUFNRCxXQUFVO29CQUFpQkUsT0FBTTs7c0NBQ3BDLDhEQUFDQztzQ0FDRyw0RUFBQ0M7O2tEQUNHLDhEQUFDQzt3Q0FBR0MsT0FBTTtrREFBTTs7Ozs7O2tEQUNoQiw4REFBQ0Q7d0NBQUdDLE9BQU07a0RBQU07Ozs7OztrREFDaEIsOERBQUNEO3dDQUFHQyxPQUFNO2tEQUFNOzs7Ozs7a0RBQ2hCLDhEQUFDRDt3Q0FBR0MsT0FBTTtrREFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBR3ZCbEIsU0FBU21CLEdBQUcsQ0FBQyxDQUFDQyxxQkFDWCw4REFBQ0M7MENBQ0csNEVBQUNMOztzREFDRyw4REFBQ0M7NENBQUdDLE9BQU07c0RBQU9FLEtBQUtqQixFQUFFOzs7Ozs7c0RBQ3hCLDhEQUFDYzs0Q0FBR0MsT0FBTTtzREFBTSw0RUFBQ0k7O2tFQUFLLDhEQUFDQzt3REFBSVgsV0FBVTt3REFBc0JZLEtBQUtKLEtBQUtLLFFBQVE7d0RBQUVDLEtBQUk7Ozs7OztvREFBTU4sS0FBS08sSUFBSTs7Ozs7Ozs7Ozs7O3NEQUNsRyw4REFBQ1Y7NENBQUdDLE9BQU07c0RBQU9FLEtBQUtRLE9BQU87Ozs7OztzREFDN0IsOERBQUNYOzRDQUFHQyxPQUFNOztnREFBTTtnREFBSUUsS0FBS1YsS0FBSzs7Ozs7OztzREFDOUIsOERBQUNPOzRDQUFHQyxPQUFNO3NEQUNOLDRFQUFDSTtnREFBS1IsT0FBTTtnREFBWWUsTUFBSztnREFBUUMsY0FBVzswREFDNUMsNEVBQUNDO29EQUFPQyxNQUFLO29EQUFTbEIsT0FBTTtvREFBaUJtQixTQUFTLElBQU0vQixxQkFBcUJrQixLQUFLakIsRUFBRTs4REFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkFSL0ZpQixLQUFLakIsRUFBRTs7Ozs7Ozs7Ozs7OEJBaUIzQiw4REFBQ1E7b0JBQUlDLFdBQVU7OEJBQ1gsNEVBQUNVO3dCQUFLVixXQUFVOzswQ0FDWiw4REFBQ3NCOzBDQUFFOzs7Ozs7MENBQ0g7MENBQUczQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRM0I7R0FyRHdCUjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2VzL2NhcnJpbmhvL3BhZ2UuanN4PzA2Y2EiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4uLy4uLy4uL2NvbnRleHQvQXBwQ29udGV4dFwiO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FycmluaG8oKSB7XHJcblxyXG4gICAgY29uc3QgeyBjYXJyaW5obywgc2V0Q2FycmluaG8gfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcblxyXG5cclxuICAgIGNvbnN0IG1ldG9kb0V4Y2x1aXJQcm9kdXRvID0gKGlkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYXR1YWxpemFySXRlbXMgPSBjYXJyaW5oby5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT0gaWQpXHJcbiAgICAgICAgc2V0Q2FycmluaG8oYXR1YWxpemFySXRlbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHZhbG9yVG90YWwgPSBjYXJyaW5oby5yZWR1Y2UoKGFjYywgaXRlbSkgPT4gaXRlbS5wcmljZSArIGFjYywgMCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhDYXJyaW5ob1wiPlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmVsYUNhcnJpbmhvXCIgY2xhc3M9XCJ0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+IzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Qcm9kdXRvPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlF1YW50aWRhZGUgZW0gRXN0b3F1ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5QcmXDp288L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAge2NhcnJpbmhvLm1hcCgoZGF0YSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHkga2V5PXtkYXRhLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj57ZGF0YS5pZH08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPjxzcGFuPjxpbWcgY2xhc3NOYW1lPVwiaW1hZ2VtUHJvZHV0b1RhYmVsYVwiIHNyYz17ZGF0YS5pbWFnZVVybH0gYWx0PVwiXCIgLz57ZGF0YS5uYW1lfTwvc3Bhbj48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPntkYXRhLmluU3RvY2t9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5SJCB7ZGF0YS5wcmljZX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ0bi1ncm91cFwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJCYXNpYyBtaXhlZCBzdHlsZXMgZXhhbXBsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiIG9uQ2xpY2s9eygpID0+IG1ldG9kb0V4Y2x1aXJQcm9kdXRvKGRhdGEuaWQpfT5FeGNsdWlyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFZhbG9yVG90YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ2YWxvclRvdGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRvdGFsPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Pnt2YWxvclRvdGFsfTwvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkFwcENvbnRleHQiLCJ1c2VDb250ZXh0IiwiQ2FycmluaG8iLCJjYXJyaW5obyIsInNldENhcnJpbmhvIiwibWV0b2RvRXhjbHVpclByb2R1dG8iLCJpZCIsImF0dWFsaXphckl0ZW1zIiwiZmlsdGVyIiwiaXRlbSIsInZhbG9yVG90YWwiLCJyZWR1Y2UiLCJhY2MiLCJwcmljZSIsImRpdiIsImNsYXNzTmFtZSIsInRhYmxlIiwiY2xhc3MiLCJ0aGVhZCIsInRyIiwidGgiLCJzY29wZSIsIm1hcCIsImRhdGEiLCJ0Ym9keSIsInNwYW4iLCJpbWciLCJzcmMiLCJpbWFnZVVybCIsImFsdCIsIm5hbWUiLCJpblN0b2NrIiwicm9sZSIsImFyaWEtbGFiZWwiLCJidXR0b24iLCJ0eXBlIiwib25DbGljayIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/pages/carrinho/page.jsx\n"));

/***/ })

});