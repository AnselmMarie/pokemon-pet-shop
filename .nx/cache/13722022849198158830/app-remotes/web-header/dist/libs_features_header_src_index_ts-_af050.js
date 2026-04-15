"use strict";
(self["webpackChunkwebHeader"] = self["webpackChunkwebHeader"] || []).push([["libs_features_header_src_index_ts-_af050"], {
"../../libs/features/header/src/lib/header/assets/pokeshop-logo.png"(module, __unused_rspack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "pokeshop-logo.01554f66453ac39f.png";

},
"../../libs/features/header/src/index.ts"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Header: () => (/* reexport safe */ _lib_header__rspack_import_0.Header)
});
/* import */ var _lib_header__rspack_import_0 = __webpack_require__("../../libs/features/header/src/lib/header/index.tsx");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.6.1_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");
 // export * from './lib/nav.mobile';

function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


},
"../../libs/features/header/src/lib/header/header-content.tsx"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  HeaderContent: () => (HeaderContent)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__("webpack/sharing/consume/default/react/jsx-dev-runtime/react/jsx-dev-runtime");
/* import */ var react_jsx_dev_runtime__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__rspack_import_0);
/* import */ var react__rspack_import_1 = __webpack_require__("webpack/sharing/consume/default/react/react");
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _pokemon_pet_shop_ui_primitives__rspack_import_2 = __webpack_require__("webpack/sharing/consume/default/@pokemon-pet-shop/ui-primitives/@pokemon-pet-shop/ui-primitives");
/* import */ var _pokemon_pet_shop_ui_primitives__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_pokemon_pet_shop_ui_primitives__rspack_import_2);
/* import */ var _modal_mobile_nav_nav_mobile__rspack_import_3 = __webpack_require__("../../libs/features/header/src/lib/modal-mobile-nav/nav-mobile.tsx");
/* import */ var _side_nav_modal__rspack_import_4 = __webpack_require__("../../libs/features/header/src/lib/header/side-nav-modal.tsx");
/* import */ var _header_const__rspack_import_5 = __webpack_require__("../../libs/features/header/src/lib/header/header.const.ts");
/* import */ var _assets_pokeshop_logo_png__rspack_import_6 = __webpack_require__("../../libs/features/header/src/lib/header/assets/pokeshop-logo.png");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.6.1_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var _this = undefined;

var _s = $RefreshSig$();

// import { SwitchTheme } from '@pokemon-pet-shop/feature-switch-theme';

// import { Icon, HideInMobile } from '@pokemon-pet-shop/ui-components';




var HeaderContent = function() {
    _s();
    var _useState = _sliced_to_array((0,react__rspack_import_1.useState)(false), 2), isNavModalOpen = _useState[0], setIsNavModalOpen = _useState[1];
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_modal_mobile_nav_nav_mobile__rspack_import_3.NavMobileModal, {
                isOpen: isNavModalOpen,
                onCloseModal: function() {
                    return setIsNavModalOpen(false);
                }
            }, void 0, false, {
                fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/features/header/src/lib/header/header-content.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_pokemon_pet_shop_ui_primitives__rspack_import_2.Container, {
                className: "flex w-full flex-row items-center justify-between",
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_pokemon_pet_shop_ui_primitives__rspack_import_2.Box, {
                        className: "flex flex-row justify-start items-center",
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_pokemon_pet_shop_ui_primitives__rspack_import_2.Image, {
                            src: _assets_pokeshop_logo_png__rspack_import_6,
                            className: "w-[195px]",
                            alt: "Pokemon Pet Shop Logo"
                        }, void 0, false, {
                            fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/features/header/src/lib/header/header-content.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, _this)
                    }, void 0, false, {
                        fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/features/header/src/lib/header/header-content.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, _this),
                    _header_const__rspack_import_5.NAV_FEATURE_FLAG ? /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_pokemon_pet_shop_ui_primitives__rspack_import_2.Box, {
                        as: "nav",
                        className: "w-full flex my-0 mx-1 p-1 items-center rounded-sm shadow bg-white",
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_pokemon_pet_shop_ui_primitives__rspack_import_2.Box, {
                            as: "span",
                            className: "mr-1",
                            children: "PETS"
                        }, void 0, false, {
                            fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/features/header/src/lib/header/header-content.tsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, _this)
                    }, void 0, false, {
                        fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/features/header/src/lib/header/header-content.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, _this) : null,
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_pokemon_pet_shop_ui_primitives__rspack_import_2.Box, {
                        className: "flex flex-row items-center gap-sm",
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_side_nav_modal__rspack_import_4.SideNavModal, {}, void 0, false, {
                            fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/features/header/src/lib/header/header-content.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, _this)
                    }, void 0, false, {
                        fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/features/header/src/lib/header/header-content.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/features/header/src/lib/header/header-content.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true);
};
_s(HeaderContent, "B8hb4WE8djgPdG6YXfZrVF4pFs8=");
_c = HeaderContent;
var _c;
$RefreshReg$(_c, "HeaderContent");

function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


},
"../../libs/features/header/src/lib/header/header.const.ts"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  NAV_FEATURE_FLAG: () => (NAV_FEATURE_FLAG)
});
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.6.1_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");
var NAV_FEATURE_FLAG = false;

function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


},
"../../libs/features/header/src/lib/header/index.tsx"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Header: () => (Header)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__("webpack/sharing/consume/default/react/jsx-dev-runtime/react/jsx-dev-runtime");
/* import */ var react_jsx_dev_runtime__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__rspack_import_0);
/* import */ var _pokemon_pet_shop_ui_primitives__rspack_import_1 = __webpack_require__("webpack/sharing/consume/default/@pokemon-pet-shop/ui-primitives/@pokemon-pet-shop/ui-primitives");
/* import */ var _pokemon_pet_shop_ui_primitives__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_pokemon_pet_shop_ui_primitives__rspack_import_1);
/* import */ var _header_content__rspack_import_2 = __webpack_require__("../../libs/features/header/src/lib/header/header-content.tsx");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.6.1_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");
var _this = undefined;



var Header = function() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_pokemon_pet_shop_ui_primitives__rspack_import_1.Box, {
        as: "header",
        className: "space-between h-[93px] fixed w-full top-[0px] z-40 px-md py-xs shadow bg-white",
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_header_content__rspack_import_2.HeaderContent, {}, void 0, false, {
            fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/features/header/src/lib/header/index.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, _this)
    }, void 0, false, {
        fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/features/header/src/lib/header/index.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, _this);
};
_c = Header;
var _c;
$RefreshReg$(_c, "Header");

function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


},
"../../libs/features/header/src/lib/header/side-nav-modal.tsx"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SideNavModal: () => (SideNavModal)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__("webpack/sharing/consume/default/react/jsx-dev-runtime/react/jsx-dev-runtime");
/* import */ var react_jsx_dev_runtime__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__rspack_import_0);
/* import */ var react__rspack_import_1 = __webpack_require__("webpack/sharing/consume/default/react/react");
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.6.1_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");
var _this = undefined;


var SideCartModal = /*#__PURE__*/ (0,react__rspack_import_1.lazy)(function() {
    return __webpack_require__.e(/* import() */ "webpack_container_remote_webModalSideCart_Module").then(__webpack_require__.t.bind(__webpack_require__, "webpack/container/remote/webModalSideCart/Module", 23));
});
_c = SideCartModal;
var SideNavModal = function() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react__rspack_import_1.Suspense, {
        fallback: null,
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(SideCartModal, {}, void 0, false, {
            fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/features/header/src/lib/header/side-nav-modal.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, _this)
    }, void 0, false, {
        fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/features/header/src/lib/header/side-nav-modal.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, _this);
};
_c1 = SideNavModal;
var _c, _c1;
$RefreshReg$(_c, "SideCartModal");
$RefreshReg$(_c1, "SideNavModal");

function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


},
"../../libs/features/header/src/lib/modal-mobile-nav/nav-mobile.tsx"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  NavMobileModal: () => (NavMobileModal)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__("webpack/sharing/consume/default/react/jsx-dev-runtime/react/jsx-dev-runtime");
/* import */ var react_jsx_dev_runtime__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__rspack_import_0);
/* import */ var _pokemon_pet_shop_feature_switch_theme__rspack_import_1 = __webpack_require__("webpack/sharing/consume/default/@pokemon-pet-shop/feature-switch-theme/@pokemon-pet-shop/feature-switch-theme");
/* import */ var _pokemon_pet_shop_feature_switch_theme__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_pokemon_pet_shop_feature_switch_theme__rspack_import_1);
/* import */ var _pokemon_pet_shop_ui_primitives__rspack_import_2 = __webpack_require__("webpack/sharing/consume/default/@pokemon-pet-shop/ui-primitives/@pokemon-pet-shop/ui-primitives");
/* import */ var _pokemon_pet_shop_ui_primitives__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_pokemon_pet_shop_ui_primitives__rspack_import_2);
/* import */ var _pokemon_pet_shop_ui_components__rspack_import_3 = __webpack_require__("webpack/sharing/consume/default/@pokemon-pet-shop/ui-components/@pokemon-pet-shop/ui-components");
/* import */ var _pokemon_pet_shop_ui_components__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(_pokemon_pet_shop_ui_components__rspack_import_3);
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.6.1_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");
var _this = undefined;




var NavMobileModal = function(param) {
    var isOpen = param.isOpen, onCloseModal = param.onCloseModal;
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_pokemon_pet_shop_ui_components__rspack_import_3.Modal, {
        isOpen: isOpen,
        title: "Menu",
        headlineType: "relative",
        modalAlignment: "left",
        onClick: onCloseModal,
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_pokemon_pet_shop_ui_primitives__rspack_import_2.Box, {
            className: "w-full flex flex-col h-full relative",
            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_pokemon_pet_shop_ui_primitives__rspack_import_2.Box, {
                className: "flex flex-1 flex-col justify-between mt-0 mr-md mb-md",
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_pokemon_pet_shop_ui_primitives__rspack_import_2.Box, {}, void 0, false, {
                        fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/features/header/src/lib/modal-mobile-nav/nav-mobile.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, _this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_pokemon_pet_shop_ui_primitives__rspack_import_2.Box, {
                        className: "flex justify-center",
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_pokemon_pet_shop_feature_switch_theme__rspack_import_1.SwitchTheme, {}, void 0, false, {
                            fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/features/header/src/lib/modal-mobile-nav/nav-mobile.tsx",
                            lineNumber: 27,
                            columnNumber: 13
                        }, _this)
                    }, void 0, false, {
                        fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/features/header/src/lib/modal-mobile-nav/nav-mobile.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/features/header/src/lib/modal-mobile-nav/nav-mobile.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, _this)
        }, void 0, false, {
            fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/features/header/src/lib/modal-mobile-nav/nav-mobile.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, _this)
    }, void 0, false, {
        fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/features/header/src/lib/modal-mobile-nav/nav-mobile.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, _this);
};
_c = NavMobileModal;
var _c;
$RefreshReg$(_c, "NavMobileModal");

function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


},

}]);
//# sourceMappingURL=libs_features_header_src_index_ts-_af050.js.map