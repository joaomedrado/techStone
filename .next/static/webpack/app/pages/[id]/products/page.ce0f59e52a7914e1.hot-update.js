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

/***/ "(app-pages-browser)/./src/app/pages/[id]/products/page.jsx":
/*!**********************************************!*\
  !*** ./src/app/pages/[id]/products/page.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProdutoDetalhes; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _componentes_ProdutosDetalhes_produtoDetalhes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/componentes/ProdutosDetalhes/produtoDetalhes */ \"(app-pages-browser)/./src/componentes/ProdutosDetalhes/produtoDetalhes.jsx\");\n/* harmony import */ var _Requisicoes_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Requisicoes/get */ \"(app-pages-browser)/./src/Requisicoes/get.js\");\n\nvar _s = $RefreshSig$();\n\n\nasync function ProdutoDetalhes(param) {\n    let { params } = param;\n    _s();\n    const { id } = params;\n    const { buscarProdutos } = useContext(AppContext);\n    const obtGetReque = new _Requisicoes_get__WEBPACK_IMPORTED_MODULE_2__[\"default\"]([], buscarProdutos);\n    const getData = async (query)=>{\n        const response = await fetch(\"https://api.mercadolibre.com/sites/MLB/search?q=\".concat(query)).then((res)=>res.json());\n        return response.results.find((item)=>item.id === id);\n    };\n    const data = await getData(obtGetReque.query);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_componentes_ProdutosDetalhes_produtoDetalhes__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            data: data\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\joao.medrado\\\\Documentos\\\\techStone\\\\src\\\\app\\\\pages\\\\[id]\\\\products\\\\page.jsx\",\n            lineNumber: 18,\n            columnNumber: 17\n        }, this) : \"Produto N\\xe3o encontrado\"\n    }, void 0, false);\n}\n_s(ProdutoDetalhes, \"tB3hE+T4qKNqPG8wsAgh2T+1z2E=\");\n_c = ProdutoDetalhes;\nvar _c;\n$RefreshReg$(_c, \"ProdutoDetalhes\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZXMvW2lkXS9wcm9kdWN0cy9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDdUY7QUFDcEQ7QUFDcEIsZUFBZUUsZ0JBQWdCLEtBQVU7UUFBVixFQUFFQyxNQUFNLEVBQUUsR0FBVjs7SUFDMUMsTUFBTSxFQUFDQyxFQUFFLEVBQUMsR0FBR0Q7SUFHYixNQUFNLEVBQUNFLGNBQWMsRUFBQyxHQUFHQyxXQUFXQztJQUNwQyxNQUFNQyxjQUFjLElBQUlQLHdEQUFHQSxDQUFDLEVBQUUsRUFBQ0k7SUFFL0IsTUFBTUksVUFBVSxPQUFPQztRQUNyQixNQUFNQyxXQUFXLE1BQU1DLE1BQU0sbURBQXlELE9BQU5GLFFBQVNHLElBQUksQ0FBQ0MsQ0FBQUEsTUFBT0EsSUFBSUMsSUFBSTtRQUM3RyxPQUFPSixTQUFTSyxPQUFPLENBQUNDLElBQUksQ0FBQyxDQUFDQyxPQUFTQSxLQUFLZCxFQUFFLEtBQUtBO0lBQ3JEO0lBQ0EsTUFBTWUsT0FBTyxNQUFNVixRQUFRRCxZQUFZRSxLQUFLO0lBQzVDLHFCQUNFO2tCQUNHUyxxQkFBTyw4REFBQ25CLHFGQUF5QkE7WUFBQ21CLE1BQVFBOzs7OzttQkFBVTs7QUFJN0Q7R0FsQjhCakI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlcy9baWRdL3Byb2R1Y3RzL3BhZ2UuanN4PzQ4NWMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBQcm9kdXRvRGV0YWxoZXNDb21wb25lbnRlIGZyb20gXCJAL2NvbXBvbmVudGVzL1Byb2R1dG9zRGV0YWxoZXMvcHJvZHV0b0RldGFsaGVzXCI7XHJcbmltcG9ydCBHZXQgZnJvbSBcIkAvUmVxdWlzaWNvZXMvZ2V0XCJcclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gUHJvZHV0b0RldGFsaGVzKHsgcGFyYW1zIH0pIHtcclxuICAgIGNvbnN0IHtpZH0gPSBwYXJhbXNcclxuXHJcblxyXG4gICAgY29uc3Qge2J1c2NhclByb2R1dG9zfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dClcclxuICAgIGNvbnN0IG9idEdldFJlcXVlID0gbmV3IEdldChbXSxidXNjYXJQcm9kdXRvcyk7XHJcblxyXG4gICAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jIChxdWVyeSk9PntcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkubWVyY2Fkb2xpYnJlLmNvbS9zaXRlcy9NTEIvc2VhcmNoP3E9JHtxdWVyeX1gKS50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLnJlc3VsdHMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gaWQpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERhdGEob2J0R2V0UmVxdWUucXVlcnkpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICB7ZGF0YSA/IDxQcm9kdXRvRGV0YWxoZXNDb21wb25lbnRlIGRhdGEgPSB7ZGF0YX0vPiA6IFwiUHJvZHV0byBOw6NvIGVuY29udHJhZG9cIn1cclxuICAgICAgPC8+XHJcbiAgXHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJQcm9kdXRvRGV0YWxoZXNDb21wb25lbnRlIiwiR2V0IiwiUHJvZHV0b0RldGFsaGVzIiwicGFyYW1zIiwiaWQiLCJidXNjYXJQcm9kdXRvcyIsInVzZUNvbnRleHQiLCJBcHBDb250ZXh0Iiwib2J0R2V0UmVxdWUiLCJnZXREYXRhIiwicXVlcnkiLCJyZXNwb25zZSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJyZXN1bHRzIiwiZmluZCIsIml0ZW0iLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/pages/[id]/products/page.jsx\n"));

/***/ })

});