"use strict";
(self["webpackChunkwebModalSideCart"] = self["webpackChunkwebModalSideCart"] || []).push([["libs_features_modal-cart_src_index_ts-_c57b0"], {
"../../libs/features/modal-cart/src/index.ts"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CartIcon: () => (/* reexport safe */ _lib_cart_icon__rspack_import_0.CartIcon)
});
/* import */ var _lib_cart_icon__rspack_import_0 = __webpack_require__("../../libs/features/modal-cart/src/lib/cart-icon.tsx");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.6.1_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");


function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


},
"../../libs/features/modal-cart/src/lib/cart-icon.tsx"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CartIcon: () => (CartIcon)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__("webpack/sharing/consume/default/react/jsx-dev-runtime/react/jsx-dev-runtime");
/* import */ var react_jsx_dev_runtime__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__rspack_import_0);
/* import */ var jotai__rspack_import_1 = __webpack_require__("webpack/sharing/consume/default/jotai/jotai");
/* import */ var jotai__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(jotai__rspack_import_1);
/* import */ var _pokemon_pet_shop_ui_primitives__rspack_import_2 = __webpack_require__("webpack/sharing/consume/default/@pokemon-pet-shop/ui-primitives/@pokemon-pet-shop/ui-primitives");
/* import */ var _pokemon_pet_shop_ui_primitives__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_pokemon_pet_shop_ui_primitives__rspack_import_2);
/* import */ var _pokemon_pet_shop_ui_components__rspack_import_3 = __webpack_require__("webpack/sharing/consume/default/@pokemon-pet-shop/ui-components/@pokemon-pet-shop/ui-components");
/* import */ var _pokemon_pet_shop_ui_components__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(_pokemon_pet_shop_ui_components__rspack_import_3);
/* import */ var _pokemon_pet_shop_service_cart__rspack_import_4 = __webpack_require__("webpack/sharing/consume/default/@pokemon-pet-shop/service-cart/@pokemon-pet-shop/service-cart");
/* import */ var _pokemon_pet_shop_service_cart__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(_pokemon_pet_shop_service_cart__rspack_import_4);
/* import */ var _cart_modal__rspack_import_5 = __webpack_require__("../../libs/features/modal-cart/src/lib/cart-modal.tsx");
/* import */ var _cart_modal_atom_state__rspack_import_6 = __webpack_require__("../../libs/features/modal-cart/src/lib/cart-modal-atom.state.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.6.1_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");
var _this = undefined;

var _s = $RefreshSig$();






var CartIcon = function() {
    _s();
    var openCartModal = (0,jotai__rspack_import_1.useSetAtom)(_cart_modal_atom_state__rspack_import_6.openSideCartModalAtom);
    var data = (0,_pokemon_pet_shop_service_cart__rspack_import_4.useGetCart)().data;
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react_jsx_dev_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_cart_modal__rspack_import_5.CartModal, {}, void 0, false, {
                fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/features/modal-cart/src/lib/cart-icon.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_pokemon_pet_shop_ui_primitives__rspack_import_2.Box, {
                className: "flex justify-center items-center relative",
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_pokemon_pet_shop_ui_primitives__rspack_import_2.Box, {
                        className: "absolute w-[51px] h-[47px] z-10 -top-[14px] cursor-pointer",
                        onClick: function() {
                            openCartModal();
                        }
                    }, void 0, false, {
                        fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/features/modal-cart/src/lib/cart-icon.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_pokemon_pet_shop_ui_components__rspack_import_3.Icon, {
                        classNameIcon: "ml-2 red",
                        size: 28,
                        color: "blue"
                    }, void 0, false, {
                        fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/features/modal-cart/src/lib/cart-icon.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, _this),
                    (data === null || data === void 0 ? void 0 : data.counter) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_pokemon_pet_shop_ui_primitives__rspack_import_2.Box, {
                        className: "rounded-circle bg-medYellow min-w-[23px] min-h-[23px] align-center inline-block p-3 absolute -top-[15px] -right-[11px] pointer",
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_pokemon_pet_shop_ui_primitives__rspack_import_2.Typography, {
                            className: "flex justify-center item-center text-primary font-bold",
                            children: data === null || data === void 0 ? void 0 : data.counter
                        }, void 0, false, {
                            fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/features/modal-cart/src/lib/cart-icon.tsx",
                            lineNumber: 30,
                            columnNumber: 13
                        }, _this)
                    }, void 0, false, {
                        fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/features/modal-cart/src/lib/cart-icon.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, _this) : null
                ]
            }, void 0, true, {
                fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/features/modal-cart/src/lib/cart-icon.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true);
};
_s(CartIcon, "p7CJPWuduQOTYytWVvPguZqOQx4=", false, function() {
    return [
        jotai__rspack_import_1.useSetAtom,
        _pokemon_pet_shop_service_cart__rspack_import_4.useGetCart
    ];
});
_c = CartIcon;
var _c;
$RefreshReg$(_c, "CartIcon");

function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


},
"../../libs/features/modal-cart/src/lib/cart-modal-atom.state.ts"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  closeSideCartModalAtom: () => (closeSideCartModalAtom),
  isSideCartModalOpenAtom: () => (isSideCartModalOpenAtom),
  openSideCartModalAtom: () => (openSideCartModalAtom)
});
/* import */ var jotai__rspack_import_0 = __webpack_require__("webpack/sharing/consume/default/jotai/jotai");
/* import */ var jotai__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(jotai__rspack_import_0);
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.6.1_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

var isSideCartModalOpenAtom = (0,jotai__rspack_import_0.atom)(false);
var openSideCartModalAtom = (0,jotai__rspack_import_0.atom)(null, function(_, set) {
    set(isSideCartModalOpenAtom, true);
});
var closeSideCartModalAtom = (0,jotai__rspack_import_0.atom)(null, function(_, set) {
    set(isSideCartModalOpenAtom, false);
});

function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


},
"../../libs/features/modal-cart/src/lib/cart-modal-item.tsx"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__rspack_default_export)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__("webpack/sharing/consume/default/react/jsx-dev-runtime/react/jsx-dev-runtime");
/* import */ var react_jsx_dev_runtime__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__rspack_import_0);
/* import */ var _pokemon_pet_shop_ui_primitives__rspack_import_1 = __webpack_require__("webpack/sharing/consume/default/@pokemon-pet-shop/ui-primitives/@pokemon-pet-shop/ui-primitives");
/* import */ var _pokemon_pet_shop_ui_primitives__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_pokemon_pet_shop_ui_primitives__rspack_import_1);
/* import */ var _pokemon_pet_shop_ui_components__rspack_import_2 = __webpack_require__("webpack/sharing/consume/default/@pokemon-pet-shop/ui-components/@pokemon-pet-shop/ui-components");
/* import */ var _pokemon_pet_shop_ui_components__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_pokemon_pet_shop_ui_components__rspack_import_2);
/* import */ var _pokemon_pet_shop_service_cart__rspack_import_3 = __webpack_require__("webpack/sharing/consume/default/@pokemon-pet-shop/service-cart/@pokemon-pet-shop/service-cart");
/* import */ var _pokemon_pet_shop_service_cart__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(_pokemon_pet_shop_service_cart__rspack_import_3);
/* import */ var _pokemon_pet_shop_util_pricing__rspack_import_4 = __webpack_require__("webpack/sharing/consume/default/@pokemon-pet-shop/util-pricing/@pokemon-pet-shop/util-pricing");
/* import */ var _pokemon_pet_shop_util_pricing__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(_pokemon_pet_shop_util_pricing__rspack_import_4);
/* import */ var _pokemon_pet_shop_util_text_transform__rspack_import_5 = __webpack_require__("webpack/sharing/consume/default/@pokemon-pet-shop/util-text-transform/@pokemon-pet-shop/util-text-transform");
/* import */ var _pokemon_pet_shop_util_text_transform__rspack_import_5_default = /*#__PURE__*/__webpack_require__.n(_pokemon_pet_shop_util_text_transform__rspack_import_5);
/* import */ var _pokemon_pet_shop_util_poke_type__rspack_import_6 = __webpack_require__("webpack/sharing/consume/default/@pokemon-pet-shop/util-poke-type/@pokemon-pet-shop/util-poke-type");
/* import */ var _pokemon_pet_shop_util_poke_type__rspack_import_6_default = /*#__PURE__*/__webpack_require__.n(_pokemon_pet_shop_util_poke_type__rspack_import_6);
/* import */ var _cart_modal_type_map_util__rspack_import_7 = __webpack_require__("../../libs/features/modal-cart/src/lib/cart-modal-type-map.util.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.6.1_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");
var _this = undefined;

var _s = $RefreshSig$();







var CartModalItem = function(param) {
    var el = param.el, currIndex = param.currIndex, lastIndex = param.lastIndex;
    var _ref;
    var _cartModalTypeMap_get;
    _s();
    var pokeTypeClass = (0,_pokemon_pet_shop_util_poke_type__rspack_import_6.getPokeTypePrefixClass)(el === null || el === void 0 ? void 0 : el.types);
    var _useUpdateCart = (0,_pokemon_pet_shop_service_cart__rspack_import_3.useUpdateCart)(), updateMutate = _useUpdateCart.mutate, updateIsPending = _useUpdateCart.isPending;
    var _useDeleteCartItem = (0,_pokemon_pet_shop_service_cart__rspack_import_3.useDeleteCartItem)(), deleteMutate = _useDeleteCartItem.mutate, deleteIsPending = _useDeleteCartItem.isPending;
    var handleRemoveCartItem = function(id) {
        deleteMutate(id);
    };
    var handleAddToCart = function(id) {
        updateMutate({
            id: id,
            addToCart: true,
            removeFromCart: false
        });
    };
    var handleRemoveFromCart = function(id) {
        updateMutate({
            id: id,
            addToCart: false,
            removeFromCart: true
        });
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_pokemon_pet_shop_ui_primitives__rspack_import_1.Box, {
        className: "flex flex-col justify-center relative",
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_pokemon_pet_shop_ui_primitives__rspack_import_1.Box, {
                className: "flex flex-row gap-md",
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_pokemon_pet_shop_ui_primitives__rspack_import_1.Box, {
                        className: "rounded-sm p-sm border-4 border-solid ".concat((_ref = (_cartModalTypeMap_get = _cart_modal_type_map_util__rspack_import_7.cartModalTypeMap.get(pokeTypeClass)) === null || _cartModalTypeMap_get === void 0 ? void 0 : _cartModalTypeMap_get["".concat(pokeTypeClass, "ImageWrapper")]) !== null && _ref !== void 0 ? _ref : ''),
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_pokemon_pet_shop_ui_primitives__rspack_import_1.Image, {
                            src: el === null || el === void 0 ? void 0 : el.image,
                            className: "w-[115px] h-[115px]",
                            alt: "".concat(el === null || el === void 0 ? void 0 : el.name, " Image")
                        }, void 0, false, {
                            fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/features/modal-cart/src/lib/cart-modal-item.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, _this)
                    }, void 0, false, {
                        fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/features/modal-cart/src/lib/cart-modal-item.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_pokemon_pet_shop_ui_primitives__rspack_import_1.Box, {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_pokemon_pet_shop_ui_primitives__rspack_import_1.Typography, {
                                className: "text-lg mb-sm",
                                variant: "h1",
                                children: (0,_pokemon_pet_shop_util_text_transform__rspack_import_5.capitalizeName)(el === null || el === void 0 ? void 0 : el.name)
                            }, void 0, false, {
                                fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/features/modal-cart/src/lib/cart-modal-item.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_pokemon_pet_shop_ui_primitives__rspack_import_1.Typography, {
                                className: "font-bold text-lg",
                                children: (0,_pokemon_pet_shop_util_pricing__rspack_import_4.pricingFormatUSD)(el === null || el === void 0 ? void 0 : el.price)
                            }, void 0, false, {
                                fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/features/modal-cart/src/lib/cart-modal-item.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_pokemon_pet_shop_ui_primitives__rspack_import_1.Box, {
                                className: "flex bg-lightGrey gap-md rounded-pill w-fit items-center p-sm mt-sm",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_pokemon_pet_shop_ui_components__rspack_import_2.Icon, {
                                        icon: "IconMinus",
                                        size: 24,
                                        color: "blue",
                                        isDisabled: (el === null || el === void 0 ? void 0 : el.quantity) === 1 || updateIsPending,
                                        onClick: function() {
                                            return handleRemoveFromCart(el === null || el === void 0 ? void 0 : el.id);
                                        }
                                    }, void 0, false, {
                                        fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/features/modal-cart/src/lib/cart-modal-item.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_pokemon_pet_shop_ui_primitives__rspack_import_1.Typography, {
                                        children: el === null || el === void 0 ? void 0 : el.quantity
                                    }, void 0, false, {
                                        fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/features/modal-cart/src/lib/cart-modal-item.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_pokemon_pet_shop_ui_components__rspack_import_2.Icon, {
                                        icon: "IconPlus",
                                        size: 24,
                                        color: "blue",
                                        isDisabled: updateIsPending,
                                        onClick: function() {
                                            return handleAddToCart(el === null || el === void 0 ? void 0 : el.id);
                                        }
                                    }, void 0, false, {
                                        fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/features/modal-cart/src/lib/cart-modal-item.tsx",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/features/modal-cart/src/lib/cart-modal-item.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/features/modal-cart/src/lib/cart-modal-item.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_pokemon_pet_shop_ui_components__rspack_import_2.Icon, {
                        icon: "IconTrash",
                        color: "red",
                        isDisabled: deleteIsPending,
                        onClick: function() {
                            return handleRemoveCartItem(el === null || el === void 0 ? void 0 : el.id);
                        }
                    }, void 0, false, {
                        fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/features/modal-cart/src/lib/cart-modal-item.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/features/modal-cart/src/lib/cart-modal-item.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, _this),
            currIndex !== lastIndex && /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_pokemon_pet_shop_ui_primitives__rspack_import_1.Box, {
                className: "w-full my-lg border-t-[1px] border-medGrey"
            }, void 0, false, {
                fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/features/modal-cart/src/lib/cart-modal-item.tsx",
                lineNumber: 90,
                columnNumber: 35
            }, _this)
        ]
    }, void 0, true, {
        fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/features/modal-cart/src/lib/cart-modal-item.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, _this);
};
_s(CartModalItem, "//cmLDGyRoWx6BBsANhVgZO3rRQ=", false, function() {
    return [
        _pokemon_pet_shop_service_cart__rspack_import_3.useUpdateCart,
        _pokemon_pet_shop_service_cart__rspack_import_3.useDeleteCartItem
    ];
});
_c = CartModalItem;
/* export default */ const __rspack_default_export = (CartModalItem);
var _c;
$RefreshReg$(_c, "CartModalItem");

function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


},
"../../libs/features/modal-cart/src/lib/cart-modal-type-map.util.ts"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  cartModalTypeMap: () => (cartModalTypeMap)
});
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.6.1_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");
var cartModalTypeMap = new Map([
    [
        'grassType',
        {
            grassTypeImageWrapper: 'border-veryDarkGrass bg-darkGrass bg-gradient-to-tr from-darkGrass to-lightGrass'
        }
    ],
    [
        'bugType',
        {
            bugTypeImageWrapper: 'border-veryDarkBug bg-darkBug bg-gradient-to-tr from-darkBug to-lightBug'
        }
    ],
    [
        'darkType',
        {
            darkTypeImageWrapper: 'border-veryDarkDark bg-darkDark bg-gradient-to-tr from-darkDatk to-lightDatk'
        }
    ],
    [
        'dragonType',
        {
            dragonTypeImageWrapper: 'border-veryDarkDragon bg-darkDragon bg-gradient-to-tr from-darkDragon to-lightDragon'
        }
    ],
    [
        'electricType',
        {
            electricTypeImageWrapper: 'border-veryDarkElectric bg-darkElectric bg-gradient-to-tr from-darkElectric to-lightElectric'
        }
    ],
    [
        'fairyType',
        {
            fairyTypeImageWrapper: 'border-veryDarkFairy bg-darkFairy bg-gradient-to-tr from-darkFairy to-lightFairy'
        }
    ],
    [
        'fightingType',
        {
            fightingTypeImageWrapper: 'border-veryDarkFighting bg-darkFighting bg-gradient-to-tr from-darkFighting to-lightFighting'
        }
    ],
    [
        'fireType',
        {
            fireTypeImageWrapper: 'border-veryDarkFire bg-darkFire bg-gradient-to-tr from-darkFire to-lightFire'
        }
    ],
    [
        'flyingType',
        {
            flyingTypeImageWrapper: 'border-veryDarkFlying bg-darkFlying bg-gradient-to-tr from-darkFlying to-lightFlying'
        }
    ],
    [
        'ghostType',
        {
            ghostTypeImageWrapper: 'border-veryDarkGhost bg-darkGhost bg-gradient-to-tr from-darkGhost to-lightGhost'
        }
    ],
    [
        'groundType',
        {
            groundTypeImageWrapper: 'border-veryDarkGround bg-darkGround bg-gradient-to-tr from-darkGround to-lightGround'
        }
    ],
    [
        'iceType',
        {
            iceTypeImageWrapper: 'border-veryDarkIce bg-darkIce bg-gradient-to-tr from-darkIce to-lightIce'
        }
    ],
    [
        'normalType',
        {
            normalTypeImageWrapper: 'border-veryDarkNormal bg-darkNormal bg-gradient-to-tr from-darkNormal to-lightNormal'
        }
    ],
    [
        'poisonType',
        {
            poisonTypeImageWrapper: 'border-veryDarkPoison bg-darkPoison bg-gradient-to-tr from-darkPoison to-lightPoison'
        }
    ],
    [
        'psychicType',
        {
            psychicTypeImageWrapper: 'border-veryDarkPsychic bg-darkPsychic bg-gradient-to-tr from-darkPsychic to-lightPsychic'
        }
    ],
    [
        'rockType',
        {
            rockTypeImageWrapper: 'border-veryDarkRock bg-darkRock bg-gradient-to-tr from-darkRock to-lightRock'
        }
    ],
    [
        'steelType',
        {
            steelTypeImageWrapper: 'border-veryDarkSteel bg-darkSteel bg-gradient-to-tr from-darkSteel to-lightSteel'
        }
    ],
    [
        'waterType',
        {
            waterTypeImageWrapper: 'border-veryDarkWater bg-darkWater bg-gradient-to-tr from-darkWater to-lightWater'
        }
    ]
]);

function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


},
"../../libs/features/modal-cart/src/lib/cart-modal.tsx"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CartModal: () => (CartModal)
});
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__("webpack/sharing/consume/default/react/jsx-dev-runtime/react/jsx-dev-runtime");
/* import */ var react_jsx_dev_runtime__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__rspack_import_0);
/* import */ var jotai__rspack_import_1 = __webpack_require__("webpack/sharing/consume/default/jotai/jotai");
/* import */ var jotai__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(jotai__rspack_import_1);
/* import */ var _pokemon_pet_shop_ui_primitives__rspack_import_2 = __webpack_require__("webpack/sharing/consume/default/@pokemon-pet-shop/ui-primitives/@pokemon-pet-shop/ui-primitives");
/* import */ var _pokemon_pet_shop_ui_primitives__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_pokemon_pet_shop_ui_primitives__rspack_import_2);
/* import */ var _pokemon_pet_shop_ui_components__rspack_import_3 = __webpack_require__("webpack/sharing/consume/default/@pokemon-pet-shop/ui-components/@pokemon-pet-shop/ui-components");
/* import */ var _pokemon_pet_shop_ui_components__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(_pokemon_pet_shop_ui_components__rspack_import_3);
/* import */ var _pokemon_pet_shop_service_cart__rspack_import_4 = __webpack_require__("webpack/sharing/consume/default/@pokemon-pet-shop/service-cart/@pokemon-pet-shop/service-cart");
/* import */ var _pokemon_pet_shop_service_cart__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(_pokemon_pet_shop_service_cart__rspack_import_4);
/* import */ var _pokemon_pet_shop_util_pricing__rspack_import_5 = __webpack_require__("webpack/sharing/consume/default/@pokemon-pet-shop/util-pricing/@pokemon-pet-shop/util-pricing");
/* import */ var _pokemon_pet_shop_util_pricing__rspack_import_5_default = /*#__PURE__*/__webpack_require__.n(_pokemon_pet_shop_util_pricing__rspack_import_5);
/* import */ var _cart_modal_item__rspack_import_6 = __webpack_require__("../../libs/features/modal-cart/src/lib/cart-modal-item.tsx");
/* import */ var _cart_modal_atom_state__rspack_import_7 = __webpack_require__("../../libs/features/modal-cart/src/lib/cart-modal-atom.state.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.6.1_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");
var _this = undefined;

var _s = $RefreshSig$();







var CartModal = function() {
    var _ref;
    _s();
    var data = (0,_pokemon_pet_shop_service_cart__rspack_import_4.useGetCart)().data;
    var isOpen = (0,jotai__rspack_import_1.useAtomValue)(_cart_modal_atom_state__rspack_import_7.isSideCartModalOpenAtom);
    var closeModal = (0,jotai__rspack_import_1.useSetAtom)(_cart_modal_atom_state__rspack_import_7.closeSideCartModalAtom);
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_pokemon_pet_shop_ui_components__rspack_import_3.Modal, {
        title: "Pokecart",
        headlineType: "relative",
        modalAlignment: "right",
        isOpen: isOpen,
        onClick: closeModal,
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_pokemon_pet_shop_ui_components__rspack_import_3.ModalScroll, {
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_pokemon_pet_shop_ui_primitives__rspack_import_2.Box, {
                    className: "pb-[150px]",
                    children: ((_ref = data === null || data === void 0 ? void 0 : data.data) !== null && _ref !== void 0 ? _ref : []).map(function(el, i) {
                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_cart_modal_item__rspack_import_6["default"], {
                            el: el,
                            currIndex: i,
                            lastIndex: (data === null || data === void 0 ? void 0 : data.data) ? (data === null || data === void 0 ? void 0 : data.data.length) - 1 : 0
                        }, i, false, {
                            fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/features/modal-cart/src/lib/cart-modal.tsx",
                            lineNumber: 31,
                            columnNumber: 15
                        }, _this);
                    })
                }, void 0, false, {
                    fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/features/modal-cart/src/lib/cart-modal.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, _this)
            }, void 0, false, {
                fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/features/modal-cart/src/lib/cart-modal.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_pokemon_pet_shop_ui_primitives__rspack_import_2.Box, {
                className: "rounded-b-sm w-full absolute bottom-[0px] flex flex-row justify-between items-center p-md bg-lightGrey",
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_pokemon_pet_shop_ui_primitives__rspack_import_2.Typography, {
                        className: "font-bold text-lg",
                        children: "Total"
                    }, void 0, false, {
                        fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/features/modal-cart/src/lib/cart-modal.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(_pokemon_pet_shop_ui_primitives__rspack_import_2.Typography, {
                        className: "font-bold text-lg",
                        children: (0,_pokemon_pet_shop_util_pricing__rspack_import_5.pricingFormatUSD)(Number(data === null || data === void 0 ? void 0 : data.total))
                    }, void 0, false, {
                        fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/features/modal-cart/src/lib/cart-modal.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/features/modal-cart/src/lib/cart-modal.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "/Users/anselmmarie/Development/GitHub/pokemon-pet-shop/libs/features/modal-cart/src/lib/cart-modal.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, _this);
};
_s(CartModal, "AHuwANw8knoKpabSY1mz3H11DlI=", false, function() {
    return [
        _pokemon_pet_shop_service_cart__rspack_import_4.useGetCart,
        jotai__rspack_import_1.useAtomValue,
        jotai__rspack_import_1.useSetAtom
    ];
});
_c = CartModal;
var _c;
$RefreshReg$(_c, "CartModal");

function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


},

}]);
//# sourceMappingURL=libs_features_modal-cart_src_index_ts-_c57b0.js.map