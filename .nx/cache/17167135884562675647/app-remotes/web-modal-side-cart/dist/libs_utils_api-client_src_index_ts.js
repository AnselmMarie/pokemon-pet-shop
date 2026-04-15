"use strict";
(self["webpackChunkwebModalSideCart"] = self["webpackChunkwebModalSideCart"] || []).push([["libs_utils_api-client_src_index_ts"], {
"../../libs/utils/api-client/src/index.ts"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  axiosInstance: () => (/* reexport safe */ _lib_api_client__rspack_import_0.axiosInstance)
});
/* import */ var _lib_api_client__rspack_import_0 = __webpack_require__("../../libs/utils/api-client/src/lib/api-client.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.6.1_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");


function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


},
"../../libs/utils/api-client/src/lib/api-client.const.ts"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BASE_URL: () => (BASE_URL)
});
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.6.1_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");
var BASE_URL = "http://localhost:3333/api/";

function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


},
"../../libs/utils/api-client/src/lib/api-client.ts"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  axiosInstance: () => (axiosInstance)
});
/* import */ var axios__rspack_import_0 = __webpack_require__("webpack/sharing/consume/default/axios/axios");
/* import */ var axios__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(axios__rspack_import_0);
/* import */ var _api_client_const__rspack_import_1 = __webpack_require__("../../libs/utils/api-client/src/lib/api-client.const.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.6.1_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");


var axiosInstance = axios__rspack_import_0_default().create({
    baseURL: _api_client_const__rspack_import_1.BASE_URL
});

function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


},

}]);
//# sourceMappingURL=libs_utils_api-client_src_index_ts.js.map