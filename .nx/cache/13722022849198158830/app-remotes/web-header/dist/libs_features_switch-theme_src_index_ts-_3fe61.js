"use strict";
(self["webpackChunkwebHeader"] = self["webpackChunkwebHeader"] || []).push([["libs_features_switch-theme_src_index_ts-_3fe61"], {
"../../libs/features/switch-theme/src/index.ts"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SwitchTheme: () => (/* reexport safe */ _lib_switch_theme__rspack_import_0.SwitchTheme)
});
/* import */ var _lib_switch_theme__rspack_import_0 = __webpack_require__("../../libs/features/switch-theme/src/lib/switch-theme.tsx");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.6.1_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");


function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


},
"../../libs/features/switch-theme/src/lib/switch-theme-item.tsx"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SwitchThemeItem: () => (SwitchThemeItem)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__("webpack/sharing/consume/default/react/jsx-dev-runtime/react/jsx-dev-runtime");
/* import */ var react_jsx_dev_runtime__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__rspack_import_0);
/* import */ var _pokemon_pet_shop_ui_components__rspack_import_1 = __webpack_require__("webpack/sharing/consume/default/@pokemon-pet-shop/ui-components/@pokemon-pet-shop/ui-components");
/* import */ var _pokemon_pet_shop_ui_components__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_pokemon_pet_shop_ui_components__rspack_import_1);
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.6.1_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");
var _this = undefined;


var SwitchThemeItem = function(param) {
    var theme = param.theme, className = param.className, onToggleThemeClick = param.onToggleThemeClick;
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_pokemon_pet_shop_ui_components__rspack_import_1.Switch, {
        className: className,
        iconLeft: theme === 'light' ? 'IconSunFilled' : 'IconSun',
        iconRight: theme === 'light' ? 'IconMoon' : 'IconMoonFilled',
        val: theme === 'light' ? 'ON' : 'OFF',
        onLeftClick: onToggleThemeClick,
        onRightClick: onToggleThemeClick
    }, void 0, false, {
        fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/features/switch-theme/src/lib/switch-theme-item.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, _this);
};
_c = SwitchThemeItem;
var _c;
$RefreshReg$(_c, "SwitchThemeItem");

function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


},
"../../libs/features/switch-theme/src/lib/switch-theme.tsx"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SwitchTheme: () => (SwitchTheme)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__("webpack/sharing/consume/default/react/jsx-dev-runtime/react/jsx-dev-runtime");
/* import */ var react_jsx_dev_runtime__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__rspack_import_0);
/* import */ var jotai__rspack_import_1 = __webpack_require__("webpack/sharing/consume/default/jotai/jotai");
/* import */ var jotai__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(jotai__rspack_import_1);
/* import */ var atomTheme_State__rspack_import_2 = __webpack_require__("webpack/container/remote/atomTheme/State");
/* import */ var atomTheme_State__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(atomTheme_State__rspack_import_2);
/* import */ var _switch_theme_item__rspack_import_3 = __webpack_require__("../../libs/features/switch-theme/src/lib/switch-theme-item.tsx");
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



/**
 * SwitchTheme
 *
 * Small wrapper component that renders the UI switch bound to the global theme atom.
 * It reads the current theme value and dispatches the toggle action when the switch
 * is clicked. The component intentionally delegates visuals to the shared `Switch`
 * component and only wires up behavior.
 *
 * @param {SwitchProps} props - Component props
 * @param {string} [props.className] - Optional className passed down to the Switch
 * @returns {ReactElement} The themed Switch component
 *
 * @example
 * <SwitchTheme className="my-switch" />
 */ var SwitchTheme = function(param) {
    var className = param.className;
    _s();
    var _useAtom = _sliced_to_array((0,jotai__rspack_import_1.useAtom)(atomTheme_State__rspack_import_2.toggleThemeAtom), 2), theme = _useAtom[0], toggleTheme = _useAtom[1];
    var toggleThemeClick = function() {
        toggleTheme();
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_switch_theme_item__rspack_import_3.SwitchThemeItem, {
        theme: theme,
        className: className,
        onToggleThemeClick: toggleThemeClick
    }, void 0, false, {
        fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/features/switch-theme/src/lib/switch-theme.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, _this);
};
_s(SwitchTheme, "sLpG31ES7iFeAv5uGb+J6DTGW08=", false, function() {
    return [
        jotai__rspack_import_1.useAtom
    ];
});
_c = SwitchTheme;
var _c;
$RefreshReg$(_c, "SwitchTheme");

function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


},

}]);
//# sourceMappingURL=libs_features_switch-theme_src_index_ts-_3fe61.js.map