"use strict";
(self["webpackChunkwebHomepage"] = self["webpackChunkwebHomepage"] || []).push([["libs_services_pokemon_src_index_ts"], {
"../../libs/services/pokemon/src/index.ts"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  useGetPokemonList: () => (/* reexport safe */ _lib_list__rspack_import_2.useGetPokemonList),
  useGetPokemonPricing: () => (/* reexport safe */ _lib_pricing__rspack_import_1.useGetPokemonPricing),
  useGetPokemonSpecies: () => (/* reexport safe */ _lib_species__rspack_import_0.useGetPokemonSpecies)
});
/* import */ var _lib_species__rspack_import_0 = __webpack_require__("../../libs/services/pokemon/src/lib/species.ts");
/* import */ var _lib_pricing__rspack_import_1 = __webpack_require__("../../libs/services/pokemon/src/lib/pricing.ts");
/* import */ var _lib_list__rspack_import_2 = __webpack_require__("../../libs/services/pokemon/src/lib/list.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.6.1_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");




function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


},
"../../libs/services/pokemon/src/lib/list.ts"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  useGetPokemonList: () => (useGetPokemonList)
});
/* import */ var _tanstack_react_query__rspack_import_0 = __webpack_require__("webpack/sharing/consume/default/@tanstack/react-query/@tanstack/react-query");
/* import */ var _tanstack_react_query__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_tanstack_react_query__rspack_import_0);
/* import */ var _pokemon_pet_shop_util_api_client__rspack_import_1 = __webpack_require__("webpack/sharing/consume/default/@pokemon-pet-shop/util-api-client/@pokemon-pet-shop/util-api-client");
/* import */ var _pokemon_pet_shop_util_api_client__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_pokemon_pet_shop_util_api_client__rspack_import_1);
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.6.1_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");


var useGetPokemonList = function() {
    var queryKey = [
        'pokemon-list'
    ];
    var queryFn = function(param) {
        var pageParam = param.pageParam;
        return _pokemon_pet_shop_util_api_client__rspack_import_1.axiosInstance.get("pokemon/list?limit=50&offset=".concat(pageParam));
    };
    return (0,_tanstack_react_query__rspack_import_0.useSuspenseInfiniteQuery)({
        queryKey: queryKey,
        queryFn: queryFn,
        select: function(r) {
            return r;
        },
        initialPageParam: 0,
        getNextPageParam: function(lastPage, _, lastPageParam) {
            var _lastPage_data;
            if ((lastPage === null || lastPage === void 0 ? void 0 : (_lastPage_data = lastPage.data) === null || _lastPage_data === void 0 ? void 0 : _lastPage_data.length) === 0) {
                return undefined;
            }
            return lastPageParam + 50;
        }
    });
};

function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


},
"../../libs/services/pokemon/src/lib/pricing.ts"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  useGetPokemonPricing: () => (useGetPokemonPricing)
});
/* import */ var _tanstack_react_query__rspack_import_0 = __webpack_require__("webpack/sharing/consume/default/@tanstack/react-query/@tanstack/react-query");
/* import */ var _tanstack_react_query__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_tanstack_react_query__rspack_import_0);
/* import */ var _pokemon_pet_shop_util_api_client__rspack_import_1 = __webpack_require__("webpack/sharing/consume/default/@pokemon-pet-shop/util-api-client/@pokemon-pet-shop/util-api-client");
/* import */ var _pokemon_pet_shop_util_api_client__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_pokemon_pet_shop_util_api_client__rspack_import_1);
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.6.1_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");


var useGetPokemonPricing = function() {
    var queryFn = function() {
        return _pokemon_pet_shop_util_api_client__rspack_import_1.axiosInstance.get('pokemon/pricing');
    };
    return (0,_tanstack_react_query__rspack_import_0.useSuspenseQuery)({
        queryKey: [
            'pricing'
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
"../../libs/services/pokemon/src/lib/species.ts"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  useGetPokemonSpecies: () => (useGetPokemonSpecies)
});
/* import */ var _tanstack_react_query__rspack_import_0 = __webpack_require__("webpack/sharing/consume/default/@tanstack/react-query/@tanstack/react-query");
/* import */ var _tanstack_react_query__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(_tanstack_react_query__rspack_import_0);
/* import */ var _pokemon_pet_shop_util_api_client__rspack_import_1 = __webpack_require__("webpack/sharing/consume/default/@pokemon-pet-shop/util-api-client/@pokemon-pet-shop/util-api-client");
/* import */ var _pokemon_pet_shop_util_api_client__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_pokemon_pet_shop_util_api_client__rspack_import_1);
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.6.1_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");


var useGetPokemonSpecies = function(ids) {
    var queryFn = function(id) {
        return _pokemon_pet_shop_util_api_client__rspack_import_1.axiosInstance.get("pokemon/species/".concat(id));
    };
    return (0,_tanstack_react_query__rspack_import_0.useSuspenseQueries)({
        queries: ids.map(function(id) {
            return {
                queryKey: [
                    'species',
                    {
                        id: id
                    }
                ],
                queryFn: function() {
                    return queryFn(id);
                },
                select: function(r) {
                    return r === null || r === void 0 ? void 0 : r.data;
                }
            };
        })
    });
};

function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


},

}]);
//# sourceMappingURL=libs_services_pokemon_src_index_ts.js.map