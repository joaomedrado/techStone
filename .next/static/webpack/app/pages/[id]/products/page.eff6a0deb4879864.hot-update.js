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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProdutoDetalhesComponente; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"(app-pages-browser)/./src/componentes/ProdutosDetalhes/style.css\");\n/* harmony import */ var _componentes_Botao_botao__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/componentes/Botao/botao */ \"(app-pages-browser)/./src/componentes/Botao/botao.jsx\");\n/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/AppContext */ \"(app-pages-browser)/./src/context/AppContext.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction ProdutoDetalhesComponente(props) {\n    _s();\n    const { carrinho, setCarrinho } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    const data = props.data;\n    const adicionarCarrinho = ()=>{\n        setCarrinho([\n            ...carrinho,\n            data\n        ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flexCard2\",\n        children: [\n            data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flexCard2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flexImagem\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: data.thumbnail.replace(/\\w\\.jpg/gi, \"W.jpg\"),\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                            lineNumber: 20,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flexDescricao2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: data.title.replace(\"- Distribuidor Autorizado\", \"\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                                lineNumber: 23,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_componentes_Botao_botao__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                classUnica: \"botaoUnico\",\n                                text: \"Adicionar Carrinho\",\n                                style: \"btn btn-outline-dark\",\n                                rota: \"/pages/carrinho\",\n                                onClick: adicionarCarrinho\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                                lineNumber: 24,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"price\",\n                                children: data.price.toLocaleString(\"pt-br\", {\n                                    style: \"currency\",\n                                    currency: \"BRL\"\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                                lineNumber: 31,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, data.id, true, {\n                fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n                lineNumber: 18,\n                columnNumber: 17\n            }, this) : null,\n            data.at\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\componentes\\\\ProdutosDetalhes\\\\produtoDetalhes.jsx\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this);\n}\n_s(ProdutoDetalhesComponente, \"38fTV3l361wkSIiIsuPGjwsEBLk=\");\n_c = ProdutoDetalhesComponente;\nvar _c;\n$RefreshReg$(_c, \"ProdutoDetalhesComponente\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRlcy9Qcm9kdXRvc0RldGFsaGVzL3Byb2R1dG9EZXRhbGhlcy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ21DO0FBQ2Q7QUFDeUI7QUFDQTtBQUUvQixTQUFTRywwQkFBMEJDLEtBQUs7O0lBRW5ELE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxXQUFXLEVBQUUsR0FBR04saURBQVVBLENBQUNFLDJEQUFVQTtJQUN2RCxNQUFNSyxPQUFPSCxNQUFNRyxJQUFJO0lBRXZCLE1BQU1DLG9CQUFvQjtRQUN0QkYsWUFBWTtlQUFJRDtZQUFVRTtTQUFLO0lBQ25DO0lBQ0EscUJBQ0ksOERBQUNFO1FBQUlDLFdBQVU7O1lBQ1ZILHFCQUNHLDhEQUFDRTtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNYLDRFQUFDQzs0QkFBSUMsS0FBS0wsS0FBS00sU0FBUyxDQUFDQyxPQUFPLENBQUMsYUFBYTs0QkFBVUMsS0FBSTs7Ozs7Ozs7Ozs7a0NBRWhFLDhEQUFDTjt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNNOzBDQUFJVCxLQUFLVSxLQUFLLENBQUNILE9BQU8sQ0FBQyw2QkFBNkI7Ozs7OzswQ0FDckQsOERBQUNiLGdFQUFLQTtnQ0FDRGlCLFlBQWE7Z0NBQ2JDLE1BQU87Z0NBQ1BDLE9BQU07Z0NBQ05DLE1BQU87Z0NBQ1BDLFNBQVNkOzs7Ozs7MENBRWQsOERBQUNlO2dDQUFFYixXQUFVOzBDQUFTSCxLQUFLaUIsS0FBSyxDQUFDQyxjQUFjLENBQUMsU0FBUTtvQ0FDcERMLE9BQU87b0NBQ1BNLFVBQVU7Z0NBQ2Q7Ozs7Ozs7Ozs7Ozs7ZUFoQndCbkIsS0FBS29CLEVBQUU7Ozs7dUJBbUJ2QztZQUNIcEIsS0FBS3FCLEVBQUU7Ozs7Ozs7QUFHcEI7R0FsQ3dCekI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudGVzL1Byb2R1dG9zRGV0YWxoZXMvcHJvZHV0b0RldGFsaGVzLmpzeD9iMzdiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IEJvdGFvIGZyb20gXCJAL2NvbXBvbmVudGVzL0JvdGFvL2JvdGFvXCI7XHJcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCJAL2NvbnRleHQvQXBwQ29udGV4dFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHV0b0RldGFsaGVzQ29tcG9uZW50ZShwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IHsgY2FycmluaG8sIHNldENhcnJpbmhvIH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xyXG4gICAgY29uc3QgZGF0YSA9IHByb3BzLmRhdGE7XHJcblxyXG4gICAgY29uc3QgYWRpY2lvbmFyQ2FycmluaG8gPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0Q2FycmluaG8oWy4uLmNhcnJpbmhvLCBkYXRhXSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhDYXJkMlwiPlxyXG4gICAgICAgICAgICB7ZGF0YSA/KFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4Q2FyZDJcIiBrZXk9e2RhdGEuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleEltYWdlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS50aHVtYm5haWwucmVwbGFjZSgvXFx3XFwuanBnL2dpLCBcIlcuanBnXCIpfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleERlc2NyaWNhbzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPntkYXRhLnRpdGxlLnJlcGxhY2UoXCItIERpc3RyaWJ1aWRvciBBdXRvcml6YWRvXCIsIFwiXCIpfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3RhbyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc1VuaWNhID0gXCJib3Rhb1VuaWNvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gXCJBZGljaW9uYXIgQ2FycmluaG9cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImJ0biBidG4tb3V0bGluZS1kYXJrXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm90YT17YC9wYWdlcy9jYXJyaW5ob2B9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FkaWNpb25hckNhcnJpbmhvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaWNlXCI+e2RhdGEucHJpY2UudG9Mb2NhbGVTdHJpbmcoXCJwdC1iclwiLHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBcImN1cnJlbmN5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeTogXCJCUkxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgIHtkYXRhLmF0fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsIkJvdGFvIiwiQXBwQ29udGV4dCIsIlByb2R1dG9EZXRhbGhlc0NvbXBvbmVudGUiLCJwcm9wcyIsImNhcnJpbmhvIiwic2V0Q2FycmluaG8iLCJkYXRhIiwiYWRpY2lvbmFyQ2FycmluaG8iLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJ0aHVtYm5haWwiLCJyZXBsYWNlIiwiYWx0IiwiaDEiLCJ0aXRsZSIsImNsYXNzVW5pY2EiLCJ0ZXh0Iiwic3R5bGUiLCJyb3RhIiwib25DbGljayIsInAiLCJwcmljZSIsInRvTG9jYWxlU3RyaW5nIiwiY3VycmVuY3kiLCJpZCIsImF0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/componentes/ProdutosDetalhes/produtoDetalhes.jsx\n"));

/***/ })

});