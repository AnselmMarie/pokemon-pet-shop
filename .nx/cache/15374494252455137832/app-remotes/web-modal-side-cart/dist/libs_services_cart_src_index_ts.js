"use strict";
(self["webpackChunkwebModalSideCart"] = self["webpackChunkwebModalSideCart"] || []).push([["libs_services_cart_src_index_ts"], {
"../../libs/services/cart/src/index.ts"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  useDeleteCartItem: () => (/* reexport safe */ _lib_cart_mutate__rspack_import_0.useDeleteCartItem),
  useGetCart: () => (/* reexport safe */ _lib_cart_query__rspack_import_1.useGetCart),
  useUpdateCart: () => (/* reexport safe */ _lib_cart_mutate__rspack_import_0.useUpdateCart)
});
/* import */ var _lib_cart_mutate__rspack_import_0 = __webpack_require__("../../libs/services/cart/src/lib/cart-mutate.ts");
/* import */ var _lib_cart_query__rspack_import_1 = __webpack_require__("../../libs/services/cart/src/lib/cart-query.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.6.1_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");



function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


},
"../../libs/services/cart/src/lib/cart-mutate.ts"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  useDeleteCartItem: () => (useDeleteCartItem),
  useUpdateCart: () => (useUpdateCart)
});
/* import */ var _tanstack_react_query__rspack_import_0 = __webpack_require__("webpack/sharing/consume/default/@tanstack/react-query/@tanstack/react-query");
/* import */ var _tanstack_react_query__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_tanstack_react_query__rspack_import_0);
/* import */ var _pokemon_pet_shop_util_api_client__rspack_import_1 = __webpack_require__("webpack/sharing/consume/default/@pokemon-pet-shop/util-api-client/@pokemon-pet-shop/util-api-client");
/* import */ var _pokemon_pet_shop_util_api_client__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_pokemon_pet_shop_util_api_client__rspack_import_1);
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.6.1_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype), d = Object.defineProperty;
    return d(g, "next", {
        value: verb(0)
    }), d(g, "throw", {
        value: verb(1)
    }), d(g, "return", {
        value: verb(2)
    }), typeof Symbol === "function" && d(g, Symbol.iterator, {
        value: function() {
            return this;
        }
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}


var useUpdateCart = function() {
    var queryClient = (0,_tanstack_react_query__rspack_import_0.useQueryClient)();
    var mutationFn = function(data) {
        return _pokemon_pet_shop_util_api_client__rspack_import_1.axiosInstance.put("cart/item/".concat(data === null || data === void 0 ? void 0 : data.id), data);
    };
    return (0,_tanstack_react_query__rspack_import_0.useMutation)({
        mutationFn: mutationFn,
        onSettled: function(_, error) {
            return _async_to_generator(function() {
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            if (!!error) return [
                                3,
                                2
                            ];
                            return [
                                4,
                                queryClient.invalidateQueries({
                                    queryKey: [
                                        'cart'
                                    ]
                                })
                            ];
                        case 1:
                            _state.sent();
                            _state.label = 2;
                        case 2:
                            return [
                                2
                            ];
                    }
                });
            })();
        }
    });
};
var useDeleteCartItem = function() {
    var queryClient = (0,_tanstack_react_query__rspack_import_0.useQueryClient)();
    var mutationFn = function(id) {
        return _pokemon_pet_shop_util_api_client__rspack_import_1.axiosInstance["delete"]("cart/item/".concat(id));
    };
    return (0,_tanstack_react_query__rspack_import_0.useMutation)({
        mutationFn: mutationFn,
        onSettled: function(_, error) {
            return _async_to_generator(function() {
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            if (!!error) return [
                                3,
                                2
                            ];
                            return [
                                4,
                                queryClient.invalidateQueries({
                                    queryKey: [
                                        'cart'
                                    ]
                                })
                            ];
                        case 1:
                            _state.sent();
                            _state.label = 2;
                        case 2:
                            return [
                                2
                            ];
                    }
                });
            })();
        }
    });
};

function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


},
"../../libs/services/cart/src/lib/cart-query.ts"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  useGetCart: () => (useGetCart)
});
/* import */ var _tanstack_react_query__rspack_import_0 = __webpack_require__("webpack/sharing/consume/default/@tanstack/react-query/@tanstack/react-query");
/* import */ var _tanstack_react_query__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_tanstack_react_query__rspack_import_0);
/* import */ var _pokemon_pet_shop_util_api_client__rspack_import_1 = __webpack_require__("webpack/sharing/consume/default/@pokemon-pet-shop/util-api-client/@pokemon-pet-shop/util-api-client");
/* import */ var _pokemon_pet_shop_util_api_client__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_pokemon_pet_shop_util_api_client__rspack_import_1);
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.6.1_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");


var useGetCart = function() {
    var queryFn = function() {
        return _pokemon_pet_shop_util_api_client__rspack_import_1.axiosInstance.get('cart');
    };
    return (0,_tanstack_react_query__rspack_import_0.useQuery)({
        queryKey: [
            'cart'
        ],
        queryFn: function() {
            return queryFn();
        },
        select: function(r) {
            return r === null || r === void 0 ? void 0 : r.data;
        }
    });
};

function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


},

}]);
//# sourceMappingURL=libs_services_cart_src_index_ts.js.map