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

/***/ "(app-pages-browser)/./src/app/pages/carrinho/style.css":
/*!******************************************!*\
  !*** ./src/app/pages/carrinho/style.css ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"c55adbe28c8d\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZXMvY2FycmluaG8vc3R5bGUuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2VzL2NhcnJpbmhvL3N0eWxlLmNzcz9iYTU5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiYzU1YWRiZTI4YzhkXCJcbmlmIChtb2R1bGUuaG90KSB7IG1vZHVsZS5ob3QuYWNjZXB0KCkgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/pages/carrinho/style.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/pages/carrinho/page.jsx":
/*!*****************************************!*\
  !*** ./src/app/pages/carrinho/page.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Carrinho; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../context/AppContext */ \"(app-pages-browser)/./src/context/AppContext.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"(app-pages-browser)/./src/app/pages/carrinho/style.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Carrinho() {\n    _s();\n    const { carrinho } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    const quantidadeProdutos = (carrinhoelement)=>{\n        let quantidadeProdutosObj = {};\n        if (!Array.isArray(carrinhoelement)) {\n            console.error(\"O par\\xe2metro carrinhoelement n\\xe3o \\xe9 um array.\");\n            return quantidadeProdutosObj;\n        }\n        carrinhoelement.forEach((element)=>{\n            const { id } = element;\n            if (quantidadeProdutosObj[id]) {\n                quantidadeProdutosObj[id]++;\n            } else {\n                quantidadeProdutosObj[id] = 1;\n            }\n        });\n        return quantidadeProdutosObj;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            class: \"table\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                children: \"#\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\pages\\\\carrinho\\\\page.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                children: \"Produto\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\pages\\\\carrinho\\\\page.jsx\",\n                                lineNumber: 35,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                children: \"Quantidade\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\pages\\\\carrinho\\\\page.jsx\",\n                                lineNumber: 36,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                children: \"Pre\\xe7o\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\pages\\\\carrinho\\\\page.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\pages\\\\carrinho\\\\page.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\pages\\\\carrinho\\\\page.jsx\",\n                    lineNumber: 32,\n                    columnNumber: 17\n                }, this),\n                carrinho.map((data)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    scope: \"row\",\n                                    children: data.id\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\pages\\\\carrinho\\\\page.jsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    scope: \"col\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                className: \"imagemProdutoTabela\",\n                                                src: data.imageUrl,\n                                                alt: \"\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\pages\\\\carrinho\\\\page.jsx\",\n                                                lineNumber: 44,\n                                                columnNumber: 51\n                                            }, this),\n                                            data.name\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\pages\\\\carrinho\\\\page.jsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 45\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\pages\\\\carrinho\\\\page.jsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    scope: \"col\",\n                                    children: quantidadeProdutos(data)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\pages\\\\carrinho\\\\page.jsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    scope: \"col\",\n                                    children: [\n                                        \"R$ \",\n                                        data.price\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\pages\\\\carrinho\\\\page.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\pages\\\\carrinho\\\\page.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 25\n                        }, this)\n                    }, data.id, false, {\n                        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\pages\\\\carrinho\\\\page.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 21\n                    }, this))\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\estudos-next-v2\\\\src\\\\app\\\\pages\\\\carrinho\\\\page.jsx\",\n            lineNumber: 31,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Carrinho, \"OsjOweCnEKtCBfPPSWd+uXjZu2E=\");\n_c = Carrinho;\nvar _c;\n$RefreshReg$(_c, \"Carrinho\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZXMvY2FycmluaG8vcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDcUQ7QUFDbEI7QUFDZjtBQUNMLFNBQVNFOztJQUVwQixNQUFNLEVBQUVDLFFBQVEsRUFBRSxHQUFHRixpREFBVUEsQ0FBQ0QsMkRBQVVBO0lBRTFDLE1BQU1JLHFCQUFxQixDQUFDQztRQUN4QixJQUFJQyx3QkFBd0IsQ0FBQztRQUU3QixJQUFJLENBQUNDLE1BQU1DLE9BQU8sQ0FBQ0gsa0JBQWtCO1lBQ2pDSSxRQUFRQyxLQUFLLENBQUM7WUFDZCxPQUFPSjtRQUNYO1FBRUFELGdCQUFnQk0sT0FBTyxDQUFDQyxDQUFBQTtZQUNwQixNQUFNLEVBQUNDLEVBQUUsRUFBQyxHQUFHRDtZQUViLElBQUlOLHFCQUFxQixDQUFDTyxHQUFHLEVBQUU7Z0JBQzNCUCxxQkFBcUIsQ0FBQ08sR0FBRztZQUM3QixPQUFPO2dCQUNIUCxxQkFBcUIsQ0FBQ08sR0FBRyxHQUFHO1lBQ2hDO1FBQ0o7UUFFQSxPQUFPUDtJQUNYO0lBQ0EscUJBQ0k7a0JBQ0ksNEVBQUNRO1lBQU1DLE9BQU07OzhCQUNULDhEQUFDQzs4QkFDRyw0RUFBQ0M7OzBDQUNHLDhEQUFDQztnQ0FBR0MsT0FBTTswQ0FBTTs7Ozs7OzBDQUNoQiw4REFBQ0Q7Z0NBQUdDLE9BQU07MENBQU07Ozs7OzswQ0FDaEIsOERBQUNEO2dDQUFHQyxPQUFNOzBDQUFNOzs7Ozs7MENBQ2hCLDhEQUFDRDtnQ0FBR0MsT0FBTTswQ0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBR3ZCaEIsU0FBU2lCLEdBQUcsQ0FBQyxDQUFDQyxxQkFDWCw4REFBQ0M7a0NBQ0csNEVBQUNMOzs4Q0FDRyw4REFBQ0M7b0NBQUdDLE9BQU07OENBQU9FLEtBQUtSLEVBQUU7Ozs7Ozs4Q0FDeEIsOERBQUNLO29DQUFHQyxPQUFNOzhDQUFNLDRFQUFDSTs7MERBQUssOERBQUNDO2dEQUFJQyxXQUFVO2dEQUFzQkMsS0FBS0wsS0FBS00sUUFBUTtnREFBRUMsS0FBSTs7Ozs7OzRDQUFNUCxLQUFLUSxJQUFJOzs7Ozs7Ozs7Ozs7OENBQ2xHLDhEQUFDWDtvQ0FBR0MsT0FBTTs4Q0FBT2YsbUJBQW1CaUI7Ozs7Ozs4Q0FDcEMsOERBQUNIO29DQUFHQyxPQUFNOzt3Q0FBTTt3Q0FBSUUsS0FBS1MsS0FBSzs7Ozs7Ozs7Ozs7Ozt1QkFMMUJULEtBQUtSLEVBQUU7Ozs7Ozs7Ozs7OztBQWF2QztHQWpEd0JYO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZXMvY2FycmluaG8vcGFnZS5qc3g/MDZjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi4vLi4vLi4vY29udGV4dC9BcHBDb250ZXh0XCI7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJyaW5obygpIHtcclxuXHJcbiAgICBjb25zdCB7IGNhcnJpbmhvIH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xyXG5cclxuICAgIGNvbnN0IHF1YW50aWRhZGVQcm9kdXRvcyA9IChjYXJyaW5ob2VsZW1lbnQpID0+IHtcclxuICAgICAgICBsZXQgcXVhbnRpZGFkZVByb2R1dG9zT2JqID0ge307XHJcbiAgICBcclxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoY2FycmluaG9lbGVtZW50KSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTyBwYXLDom1ldHJvIGNhcnJpbmhvZWxlbWVudCBuw6NvIMOpIHVtIGFycmF5LlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHF1YW50aWRhZGVQcm9kdXRvc09iajtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBjYXJyaW5ob2VsZW1lbnQuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc3Qge2lkfSA9IGVsZW1lbnQ7XHJcbiAgICBcclxuICAgICAgICAgICAgaWYgKHF1YW50aWRhZGVQcm9kdXRvc09ialtpZF0pIHtcclxuICAgICAgICAgICAgICAgIHF1YW50aWRhZGVQcm9kdXRvc09ialtpZF0rKztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHF1YW50aWRhZGVQcm9kdXRvc09ialtpZF0gPSAxOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIHF1YW50aWRhZGVQcm9kdXRvc09iajtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGVcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Qcm9kdXRvPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+UXVhbnRpZGFkZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlByZcOnbzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICB7Y2FycmluaG8ubWFwKChkYXRhKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5IGtleT17ZGF0YS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPntkYXRhLmlkfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj48c3Bhbj48aW1nIGNsYXNzTmFtZT1cImltYWdlbVByb2R1dG9UYWJlbGFcIiBzcmM9e2RhdGEuaW1hZ2VVcmx9IGFsdD1cIlwiIC8+e2RhdGEubmFtZX08L3NwYW4+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPntxdWFudGlkYWRlUHJvZHV0b3MoZGF0YSl9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlIkIHtkYXRhLnByaWNlfTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkFwcENvbnRleHQiLCJ1c2VDb250ZXh0IiwiQ2FycmluaG8iLCJjYXJyaW5obyIsInF1YW50aWRhZGVQcm9kdXRvcyIsImNhcnJpbmhvZWxlbWVudCIsInF1YW50aWRhZGVQcm9kdXRvc09iaiIsIkFycmF5IiwiaXNBcnJheSIsImNvbnNvbGUiLCJlcnJvciIsImZvckVhY2giLCJlbGVtZW50IiwiaWQiLCJ0YWJsZSIsImNsYXNzIiwidGhlYWQiLCJ0ciIsInRoIiwic2NvcGUiLCJtYXAiLCJkYXRhIiwidGJvZHkiLCJzcGFuIiwiaW1nIiwiY2xhc3NOYW1lIiwic3JjIiwiaW1hZ2VVcmwiLCJhbHQiLCJuYW1lIiwicHJpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/pages/carrinho/page.jsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/context/AppContext.js":
/*!***********************************!*\
  !*** ./src/context/AppContext.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nconst { createContext } = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\nconst AppContext = createContext();\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppContext);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250ZXh0L0FwcENvbnRleHQuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU0sRUFBRUEsYUFBYSxFQUFFLEdBQUdDLG1CQUFPQSxDQUFDLG1GQUFPO0FBR3pDLE1BQU1DLGFBQWFGO0FBRW5CLCtEQUFlRSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0L0FwcENvbnRleHQuanM/NzY5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNyZWF0ZUNvbnRleHQgfSA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcclxuXHJcblxyXG5jb25zdCBBcHBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwQ29udGV4dDsiXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInJlcXVpcmUiLCJBcHBDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/context/AppContext.js\n"));

/***/ })

});