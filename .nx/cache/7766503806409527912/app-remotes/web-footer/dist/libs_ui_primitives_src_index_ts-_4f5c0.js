"use strict";
(self["webpackChunkwebFooter"] = self["webpackChunkwebFooter"] || []).push([["libs_ui_primitives_src_index_ts-_4f5c0"], {
"../../libs/ui/primitives/src/index.ts"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Box: () => (/* reexport safe */ _lib_box__rspack_import_0.Box),
  Card: () => (/* reexport safe */ _lib_card__rspack_import_4.Card),
  Container: () => (/* reexport safe */ _lib_container__rspack_import_3.Container),
  Image: () => (/* reexport safe */ _lib_image__rspack_import_2.Image),
  Link: () => (/* reexport safe */ _lib_link__rspack_import_5.Link),
  Typography: () => (/* reexport safe */ _lib_typography__rspack_import_1.Typography)
});
/* import */ var _lib_box__rspack_import_0 = __webpack_require__("../../libs/ui/primitives/src/lib/box/index.ts");
/* import */ var _lib_typography__rspack_import_1 = __webpack_require__("../../libs/ui/primitives/src/lib/typography/index.ts");
/* import */ var _lib_image__rspack_import_2 = __webpack_require__("../../libs/ui/primitives/src/lib/image/index.ts");
/* import */ var _lib_container__rspack_import_3 = __webpack_require__("../../libs/ui/primitives/src/lib/container/index.ts");
/* import */ var _lib_card__rspack_import_4 = __webpack_require__("../../libs/ui/primitives/src/lib/card/index.ts");
/* import */ var _lib_link__rspack_import_5 = __webpack_require__("../../libs/ui/primitives/src/lib/link/index.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.6.1_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");
// Box

// Typography

// Image

// Container

// Card

// Link


function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


},
"../../libs/ui/primitives/src/lib/box/box.tsx"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Box: () => (Box)
});
/* import */ var react__rspack_import_0 = __webpack_require__("webpack/sharing/consume/default/react/react");
/* import */ var react__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_0);
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.6.1_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

var Box = function(param) {
    var _param_as = param.as, as = _param_as === void 0 ? 'div' : _param_as, _param_className = param.className, className = _param_className === void 0 ? '' : _param_className, _param_children = param.children, children = _param_children === void 0 ? null : _param_children, _param_onClick = param.onClick, onClick = _param_onClick === void 0 ? undefined : _param_onClick;
    return /*#__PURE__*/ (0,react__rspack_import_0.createElement)(as, {
        className: className,
        onClick: onClick
    }, children);
};
_c = Box;
var _c;
$RefreshReg$(_c, "Box");

function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


},
"../../libs/ui/primitives/src/lib/box/index.ts"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Box: () => (/* reexport safe */ _box__rspack_import_0.Box)
});
/* import */ var _box__rspack_import_0 = __webpack_require__("../../libs/ui/primitives/src/lib/box/box.tsx");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.6.1_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");


function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


},
"../../libs/ui/primitives/src/lib/card/card.tsx"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Card: () => (Card)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__("webpack/sharing/consume/default/react/jsx-dev-runtime/react/jsx-dev-runtime");
/* import */ var react_jsx_dev_runtime__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__rspack_import_0);
/* import */ var _box__rspack_import_1 = __webpack_require__("../../libs/ui/primitives/src/lib/box/index.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.6.1_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");
var _this = undefined;


var Card = function(param) {
    var _param_className = param.className, className = _param_className === void 0 ? '' : _param_className, children = param.children;
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_box__rspack_import_1.Box, {
        className: "rounded-sm ".concat(className),
        children: children
    }, void 0, false, {
        fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/ui/primitives/src/lib/card/card.tsx",
        lineNumber: 8,
        columnNumber: 10
    }, _this);
};
_c = Card;
var _c;
$RefreshReg$(_c, "Card");

function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


},
"../../libs/ui/primitives/src/lib/card/index.ts"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Card: () => (/* reexport safe */ _card__rspack_import_0.Card)
});
/* import */ var _card__rspack_import_0 = __webpack_require__("../../libs/ui/primitives/src/lib/card/card.tsx");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.6.1_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");


function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


},
"../../libs/ui/primitives/src/lib/container/container.tsx"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Container: () => (Container)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__("webpack/sharing/consume/default/react/jsx-dev-runtime/react/jsx-dev-runtime");
/* import */ var react_jsx_dev_runtime__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__rspack_import_0);
/* import */ var _box__rspack_import_1 = __webpack_require__("../../libs/ui/primitives/src/lib/box/index.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.6.1_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");
var _this = undefined;


var Container = function(param) {
    var _param_className = param.className, className = _param_className === void 0 ? '' : _param_className, _param_children = param.children, children = _param_children === void 0 ? null : _param_children;
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_box__rspack_import_1.Box, {
        className: "mx-auto ".concat(className),
        children: children
    }, void 0, false, {
        fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/ui/primitives/src/lib/container/container.tsx",
        lineNumber: 11,
        columnNumber: 10
    }, _this);
};
_c = Container;
var _c;
$RefreshReg$(_c, "Container");

function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


},
"../../libs/ui/primitives/src/lib/container/index.ts"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Container: () => (/* reexport safe */ _container__rspack_import_0.Container)
});
/* import */ var _container__rspack_import_0 = __webpack_require__("../../libs/ui/primitives/src/lib/container/container.tsx");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.6.1_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");


function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


},
"../../libs/ui/primitives/src/lib/image/image.tsx"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Image: () => (Image)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__("webpack/sharing/consume/default/react/jsx-dev-runtime/react/jsx-dev-runtime");
/* import */ var react_jsx_dev_runtime__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__rspack_import_0);
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.6.1_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");
var _this = undefined;

var Image = function(param) {
    var _param_src = param.src, src = _param_src === void 0 ? '' : _param_src, _param_alt = param.alt, alt = _param_alt === void 0 ? '' : _param_alt, _param_width = param.width, width = _param_width === void 0 ? 90 : _param_width, _param_height = param.height, height = _param_height === void 0 ? 90 : _param_height, _param_className = param.className, className = _param_className === void 0 ? '' : _param_className, iconSize = param.iconSize, _param_fallbackClassName = param.fallbackClassName, fallbackClassName = _param_fallbackClassName === void 0 ? '' : _param_fallbackClassName, _param_contentFit = param.contentFit, contentFit = _param_contentFit === void 0 ? 'contain' : _param_contentFit, _param_isLoading = param.isLoading, isLoading = _param_isLoading === void 0 ? false : _param_isLoading, _param_isCircle = param.isCircle, isCircle = _param_isCircle === void 0 ? false : _param_isCircle;
    // if (isLoading) {
    //   return <UiSkeleton height="100%" circle />;
    // }
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("img", {
        src: src,
        alt: alt,
        // width={width}
        // height={height}
        className: className
    }, void 0, false, {
        fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/ui/primitives/src/lib/image/image.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, _this);
};
_c = Image;
var _c;
$RefreshReg$(_c, "Image");

function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


},
"../../libs/ui/primitives/src/lib/image/index.ts"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Image: () => (/* reexport safe */ _image__rspack_import_0.Image)
});
/* import */ var _image__rspack_import_0 = __webpack_require__("../../libs/ui/primitives/src/lib/image/image.tsx");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.6.1_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");


function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


},
"../../libs/ui/primitives/src/lib/link/index.ts"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Link: () => (/* reexport safe */ _link__rspack_import_0.Link)
});
/* import */ var _link__rspack_import_0 = __webpack_require__("../../libs/ui/primitives/src/lib/link/link.tsx");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.6.1_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");


function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


},
"../../libs/ui/primitives/src/lib/link/link.tsx"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Link: () => (Link)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__("webpack/sharing/consume/default/react/jsx-dev-runtime/react/jsx-dev-runtime");
/* import */ var react_jsx_dev_runtime__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__rspack_import_0);
/* import */ var _box__rspack_import_1 = __webpack_require__("../../libs/ui/primitives/src/lib/box/index.ts");
/* import */ var _open_link_util__rspack_import_2 = __webpack_require__("../../libs/ui/primitives/src/lib/link/open-link.util.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.6.1_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");
var _this = undefined;



var Link = function(param) {
    var _param_link = param.link, link = _param_link === void 0 ? null : _param_link, _param_className = param.className, className = _param_className === void 0 ? '' : _param_className, children = param.children;
    var goToLink = function() {
        if (link) {
            (0,_open_link_util__rspack_import_2.openLinkUtil)(link);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_box__rspack_import_1.Box, {
        className: "cursor-pointer ".concat(className),
        onClick: goToLink,
        children: children
    }, void 0, false, {
        fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/ui/primitives/src/lib/link/link.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, _this);
};
_c = Link;
var _c;
$RefreshReg$(_c, "Link");

function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


},
"../../libs/ui/primitives/src/lib/link/open-link.util.ts"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  openLinkUtil: () => (openLinkUtil)
});
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.6.1_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");
var openLinkUtil = function(link) {
    if (typeof window !== 'undefined') {
        window.open(link, '_blank');
    }
};

function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


},
"../../libs/ui/primitives/src/lib/typography/index.ts"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Typography: () => (/* reexport safe */ _typography__rspack_import_0.Typography)
});
/* import */ var _typography__rspack_import_0 = __webpack_require__("../../libs/ui/primitives/src/lib/typography/typography.tsx");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.6.1_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");


function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


},
"../../libs/ui/primitives/src/lib/typography/typography.tsx"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Typography: () => (Typography)
});
/* import */ var react__rspack_import_0 = __webpack_require__("webpack/sharing/consume/default/react/react");
/* import */ var react__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_0);
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.6.1_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

var Typography = function(param) {
    var _param_variant = param.variant, variant = _param_variant === void 0 ? 'p' : _param_variant, _param_className = param.className, className = _param_className === void 0 ? '' : _param_className, onClick = param.onClick, _param_children = param.children, children = _param_children === void 0 ? null : _param_children;
    return /*#__PURE__*/ (0,react__rspack_import_0.createElement)(variant, {
        className: className,
        onClick: onClick
    }, children);
};
_c = Typography;
var _c;
$RefreshReg$(_c, "Typography");

function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


},

}]);
//# sourceMappingURL=libs_ui_primitives_src_index_ts-_4f5c0.js.map