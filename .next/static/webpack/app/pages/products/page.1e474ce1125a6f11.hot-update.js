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

/***/ "(app-pages-browser)/./src/Requisicoes/get.js":
/*!********************************!*\
  !*** ./src/Requisicoes/get.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nclass Get {\n    async metodoFetch() {\n        const response = await fetch(\"https://api.mercadolibre.com/sites/MLB/search?q=\".concat(this.query));\n        const data = await response.json();\n        return data.results;\n    }\n    metodoUseEffect() {\n        this.metodoFetch().then((data)=>{\n            this.setDados(data);\n        });\n    }\n    constructor(setDados, query){\n        this.setDados = setDados;\n        this.query = query;\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Get);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9SZXF1aXNpY29lcy9nZXQuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BO0lBU0YsTUFBTUMsY0FBYTtRQUNmLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxtREFBOEQsT0FBWCxJQUFJLENBQUNDLEtBQUs7UUFDMUYsTUFBTUMsT0FBTyxNQUFNSCxTQUFTSSxJQUFJO1FBQ2hDLE9BQU9ELEtBQUtFLE9BQU87SUFDdkI7SUFHQUMsa0JBQWlCO1FBQ2IsSUFBSSxDQUFDUCxXQUFXLEdBQUdRLElBQUksQ0FBQyxDQUFDSjtZQUNyQixJQUFJLENBQUNLLFFBQVEsQ0FBQ0w7UUFDbEI7SUFDSjtJQWhCQU0sWUFBWUQsUUFBUSxFQUFDTixLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDTSxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ04sS0FBSyxHQUFHQTtJQUNqQjtBQWVKO0FBQ0EsK0RBQWVKLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1JlcXVpc2ljb2VzL2dldC5qcz8xMGQ0Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEdldHtcclxuICAgIHNldERhZG9zO1xyXG4gICAgcXVlcnk7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2V0RGFkb3MscXVlcnkpe1xyXG4gICAgICAgIHRoaXMuc2V0RGFkb3MgPSBzZXREYWRvcztcclxuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBtZXRvZG9GZXRjaCgpe1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm1lcmNhZG9saWJyZS5jb20vc2l0ZXMvTUxCL3NlYXJjaD9xPSR7dGhpcy5xdWVyeX1gKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBkYXRhLnJlc3VsdHM7XHJcbiAgICB9XHJcblxyXG4gICAgYVxyXG4gICAgbWV0b2RvVXNlRWZmZWN0KCl7XHJcbiAgICAgICAgdGhpcy5tZXRvZG9GZXRjaCgpLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGFkb3MoZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICBcclxufVxyXG5leHBvcnQgZGVmYXVsdCBHZXQ7Il0sIm5hbWVzIjpbIkdldCIsIm1ldG9kb0ZldGNoIiwicmVzcG9uc2UiLCJmZXRjaCIsInF1ZXJ5IiwiZGF0YSIsImpzb24iLCJyZXN1bHRzIiwibWV0b2RvVXNlRWZmZWN0IiwidGhlbiIsInNldERhZG9zIiwiY29uc3RydWN0b3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/Requisicoes/get.js\n"));

/***/ })

});