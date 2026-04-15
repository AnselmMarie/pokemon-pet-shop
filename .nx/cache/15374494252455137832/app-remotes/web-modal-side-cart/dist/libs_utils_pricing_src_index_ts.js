"use strict";
(self["webpackChunkwebModalSideCart"] = self["webpackChunkwebModalSideCart"] || []).push([["libs_utils_pricing_src_index_ts"], {
"../../libs/utils/pricing/src/index.ts"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  pricingFormat: () => (/* reexport safe */ _lib_pricing_format__rspack_import_0.pricingFormat),
  pricingFormatUSD: () => (/* reexport safe */ _lib_pricing_format_country__rspack_import_1.pricingFormatUSD)
});
/* import */ var _lib_pricing_format__rspack_import_0 = __webpack_require__("../../libs/utils/pricing/src/lib/pricing-format.ts");
/* import */ var _lib_pricing_format_country__rspack_import_1 = __webpack_require__("../../libs/utils/pricing/src/lib/pricing-format-country.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.6.1_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");



function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


},
"../../libs/utils/pricing/src/lib/pricing-format-country.ts"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  pricingFormatUSD: () => (pricingFormatUSD)
});
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.6.1_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");
var pricingFormatUSD = function(price) {
    return "$".concat(String(price).replace(/\d\d$/, function(el) {
        return ".".concat(el);
    }));
};

function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


},
"../../libs/utils/pricing/src/lib/pricing-format.ts"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  pricingFormat: () => (pricingFormat)
});
/* import */ var _pricing_format_country__rspack_import_0 = __webpack_require__("../../libs/utils/pricing/src/lib/pricing-format-country.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("../../node_modules/.pnpm/@rspack+plugin-react-refresh@1.6.1_react-refresh@0.14.2/node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

/** @todo I need to update this code to deal with possible recursive object and root array. See Eevee 215 and evolutions */ var checkChain = function(name, chainData, pricingData, i) {
    var _chainData_evolves_to__species, _chainData_evolves_to_, _chainData_evolves_to, _chainData_evolves_to1;
    var currentName = chainData === null || chainData === void 0 ? void 0 : (_chainData_evolves_to = chainData.evolves_to) === null || _chainData_evolves_to === void 0 ? void 0 : (_chainData_evolves_to_ = _chainData_evolves_to[0]) === null || _chainData_evolves_to_ === void 0 ? void 0 : (_chainData_evolves_to__species = _chainData_evolves_to_.species) === null || _chainData_evolves_to__species === void 0 ? void 0 : _chainData_evolves_to__species.name;
    var iPlus = i + 1;
    if (iPlus > 3) {
        return null;
    }
    if (name === currentName) {
        var _pricingData_stages_String, _pricingData_stages;
        return String(pricingData === null || pricingData === void 0 ? void 0 : (_pricingData_stages = pricingData.stages) === null || _pricingData_stages === void 0 ? void 0 : (_pricingData_stages_String = _pricingData_stages[String(iPlus)]) === null || _pricingData_stages_String === void 0 ? void 0 : _pricingData_stages_String.price);
    }
    return checkChain(name, chainData === null || chainData === void 0 ? void 0 : (_chainData_evolves_to1 = chainData.evolves_to) === null || _chainData_evolves_to1 === void 0 ? void 0 : _chainData_evolves_to1[0], pricingData, iPlus);
};
var pricingFormat = function(pokemonData, pricingData) {
    var returnAsNum = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    var _chainData_species;
    var name = pokemonData.name, isMythical = pokemonData.isMythical, isLegendary = pokemonData.isLegendary, chainData = pokemonData.chainData;
    var price = null;
    if (isLegendary) {
        var _pricingData_legendary;
        price = pricingData === null || pricingData === void 0 ? void 0 : (_pricingData_legendary = pricingData.legendary) === null || _pricingData_legendary === void 0 ? void 0 : _pricingData_legendary.price;
    }
    if (isMythical) {
        var _pricingData_mythical;
        price = pricingData === null || pricingData === void 0 ? void 0 : (_pricingData_mythical = pricingData.mythical) === null || _pricingData_mythical === void 0 ? void 0 : _pricingData_mythical.price;
    }
    if (name === (chainData === null || chainData === void 0 ? void 0 : (_chainData_species = chainData.species) === null || _chainData_species === void 0 ? void 0 : _chainData_species.name)) {
        var _pricingData_stages_1, _pricingData_stages;
        price = pricingData === null || pricingData === void 0 ? void 0 : (_pricingData_stages = pricingData.stages) === null || _pricingData_stages === void 0 ? void 0 : (_pricingData_stages_1 = _pricingData_stages['1']) === null || _pricingData_stages_1 === void 0 ? void 0 : _pricingData_stages_1.price;
    }
    if (price === null) {
        price = checkChain(name, chainData, pricingData, 1);
    }
    return price ? returnAsNum ? price : (0,_pricing_format_country__rspack_import_0.pricingFormatUSD)(Number(price)) : 'Price is Not Available';
};

function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


},

}]);
//# sourceMappingURL=libs_utils_pricing_src_index_ts.js.map