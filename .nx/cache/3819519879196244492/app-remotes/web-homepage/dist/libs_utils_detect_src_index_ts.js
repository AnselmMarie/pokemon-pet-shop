"use strict";
(self["webpackChunkwebHomepage"] = self["webpackChunkwebHomepage"] || []).push([["libs_utils_detect_src_index_ts"], {
"../../libs/utils/detect/src/index.ts"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  isNative: () => (/* reexport safe */ _lib_detect__rspack_import_0.isNative),
  isWeb: () => (/* reexport safe */ _lib_detect__rspack_import_0.isWeb)
});
/* import */ var _lib_detect__rspack_import_0 = __webpack_require__("../../libs/utils/detect/src/lib/detect.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.6.1_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");


function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


},
"../../libs/utils/detect/src/lib/detect.ts"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  isNative: () => (isNative),
  isWeb: () => (isWeb)
});
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.6.1_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");
var isWeb = function() {
    return true;
};
var isNative = function() {
    return false;
};

function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


},

}]);
//# sourceMappingURL=libs_utils_detect_src_index_ts.js.map