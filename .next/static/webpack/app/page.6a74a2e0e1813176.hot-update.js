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

/***/ "(app-pages-browser)/./src/Requisicoes/get.js":
/*!********************************!*\
  !*** ./src/Requisicoes/get.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nclass Get {\n    async metodoFetch() {\n        const response = await fetch(\"https://api.mercadolibre.com/sites/MLB/search?q=\".concat(thisa.query));\n        const data = await response.json();\n        return data.results;\n    }\n    metodoUseEffect() {\n        this.metodoFetch().then((data)=>{\n            this.setDados(data);\n        });\n    }\n    constructor(setDados, query){\n        this.setDados = setDados;\n        this.query = query;\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Get);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9SZXF1aXNpY29lcy9nZXQuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BO0lBU0YsTUFBTUMsY0FBYTtRQUNmLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxtREFBK0QsT0FBWkMsTUFBTUMsS0FBSztRQUMzRixNQUFNQyxPQUFPLE1BQU1KLFNBQVNLLElBQUk7UUFDaEMsT0FBT0QsS0FBS0UsT0FBTztJQUN2QjtJQUVBQyxrQkFBaUI7UUFDYixJQUFJLENBQUNSLFdBQVcsR0FBR1MsSUFBSSxDQUFDLENBQUNKO1lBQ3JCLElBQUksQ0FBQ0ssUUFBUSxDQUFDTDtRQUNsQjtJQUNKO0lBZkFNLFlBQVlELFFBQVEsRUFBQ04sS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQ00sUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNOLEtBQUssR0FBR0E7SUFDakI7QUFjSjtBQUNBLCtEQUFlTCxHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9SZXF1aXNpY29lcy9nZXQuanM/MTBkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBHZXR7XHJcbiAgICBzZXREYWRvcztcclxuICAgIHF1ZXJ5O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNldERhZG9zLHF1ZXJ5KXtcclxuICAgICAgICB0aGlzLnNldERhZG9zID0gc2V0RGFkb3M7XHJcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgbWV0b2RvRmV0Y2goKXtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5tZXJjYWRvbGlicmUuY29tL3NpdGVzL01MQi9zZWFyY2g/cT0ke3RoaXNhLnF1ZXJ5fWApO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGEucmVzdWx0cztcclxuICAgIH1cclxuXHJcbiAgICBtZXRvZG9Vc2VFZmZlY3QoKXtcclxuICAgICAgICB0aGlzLm1ldG9kb0ZldGNoKCkudGhlbigoZGF0YSk9PntcclxuICAgICAgICAgICAgdGhpcy5zZXREYWRvcyhkYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gIFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEdldDsiXSwibmFtZXMiOlsiR2V0IiwibWV0b2RvRmV0Y2giLCJyZXNwb25zZSIsImZldGNoIiwidGhpc2EiLCJxdWVyeSIsImRhdGEiLCJqc29uIiwicmVzdWx0cyIsIm1ldG9kb1VzZUVmZmVjdCIsInRoZW4iLCJzZXREYWRvcyIsImNvbnN0cnVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/Requisicoes/get.js\n"));

/***/ })

});