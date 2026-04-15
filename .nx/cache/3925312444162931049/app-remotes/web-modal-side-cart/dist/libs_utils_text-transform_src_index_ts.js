"use strict";
(self["webpackChunkwebModalSideCart"] = self["webpackChunkwebModalSideCart"] || []).push([["libs_utils_text-transform_src_index_ts"], {
"../../libs/utils/text-transform/src/index.ts"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  capitalizeContent: () => (/* reexport safe */ _lib_capitalize_content__rspack_import_0.capitalizeContent),
  capitalizeName: () => (/* reexport safe */ _lib_capitalize_name__rspack_import_1.capitalizeName),
  removeHtmlCodeInString: () => (/* reexport safe */ _lib_remove_html_code_in_string__rspack_import_2.removeHtmlCodeInString)
});
/* import */ var _lib_capitalize_content__rspack_import_0 = __webpack_require__("../../libs/utils/text-transform/src/lib/capitalize-content.ts");
/* import */ var _lib_capitalize_name__rspack_import_1 = __webpack_require__("../../libs/utils/text-transform/src/lib/capitalize-name.ts");
/* import */ var _lib_remove_html_code_in_string__rspack_import_2 = __webpack_require__("../../libs/utils/text-transform/src/lib/remove-html-code-in-string.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.6.1_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");




function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


},
"../../libs/utils/text-transform/src/lib/capitalize-content.ts"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  capitalizeContent: () => (capitalizeContent)
});
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.6.1_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");
var capitalizeContent = function(str) {
    if (!str) {
        return '';
    }
    return str.replace(/\b[a-z]/, function(el) {
        return el.toUpperCase();
    });
};

function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


},
"../../libs/utils/text-transform/src/lib/capitalize-name.ts"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  capitalizeName: () => (capitalizeName)
});
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.6.1_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");
var capitalizeName = function(name) {
    if (!name) {
        return '';
    }
    return name.replace(/^\w/, function(el) {
        return el.toUpperCase();
    });
};

function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


},
"../../libs/utils/text-transform/src/lib/remove-html-code-in-string.ts"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  removeHtmlCodeInString: () => (removeHtmlCodeInString)
});
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.6.1_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");
var removeHtmlCodeInString = function() {
    var str = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
    if (!str) {
        return '';
    }
    return str.replace(/\n|\f/g, ' ');
};

function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


},

}]);
//# sourceMappingURL=libs_utils_text-transform_src_index_ts.js.map