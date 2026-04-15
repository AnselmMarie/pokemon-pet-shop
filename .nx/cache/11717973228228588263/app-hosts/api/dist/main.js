/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const app_1 = __webpack_require__(2);
const config_1 = __webpack_require__(5);
const port = config_1.env.port;
const server = app_1.app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.app = void 0;
const tslib_1 = __webpack_require__(3);
const express_1 = tslib_1.__importDefault(__webpack_require__(4));
const config_1 = __webpack_require__(5);
const middleware_1 = __webpack_require__(9);
const routes_1 = __webpack_require__(13);
const app = (0, express_1.default)();
exports.app = app;
// Middleware
app.set('trust proxy', true);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(config_1.corsConfig);
app.use(middleware_1.cacheMiddleware);
// Routes
(0, routes_1.registerRoutes)(app);
// Error Handling Middleware
app.use(middleware_1.errorMiddleware);


/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(3);
tslib_1.__exportStar(__webpack_require__(6), exports);
tslib_1.__exportStar(__webpack_require__(7), exports);


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.env = void 0;
exports.env = {
    port: process.env.PORT || 3333,
    nodeEnv: process.env.NODE_ENV || 'development',
};


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.corsConfig = void 0;
const tslib_1 = __webpack_require__(3);
const cors_1 = tslib_1.__importDefault(__webpack_require__(8));
const whitelist = ['http://localhost:4200', 'http://localhost:80', 'http://localhost:3333'];
exports.corsConfig = (0, cors_1.default)({
    origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    },
});


/***/ }),
/* 8 */
/***/ ((module) => {

module.exports = require("cors");

/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(3);
tslib_1.__exportStar(__webpack_require__(10), exports);
tslib_1.__exportStar(__webpack_require__(12), exports);


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cacheMiddleware = void 0;
const tslib_1 = __webpack_require__(3);
const node_cache_1 = tslib_1.__importDefault(__webpack_require__(11));
const cache = new node_cache_1.default({ stdTTL: 100, checkperiod: 120 });
const cacheMiddleware = (req, res, next) => {
    const noCaching = req.originalUrl.includes('cart');
    const key = req.originalUrl;
    const cachedResponse = !noCaching ? cache.get(key) : null;
    if (cachedResponse) {
        res.send(cachedResponse);
        return;
    }
    const resWithSendResponse = res;
    resWithSendResponse.sendResponse = res.send;
    res.send = (body) => {
        if (!noCaching) {
            cache.set(key, body);
        }
        return resWithSendResponse.sendResponse(body);
    };
    next();
};
exports.cacheMiddleware = cacheMiddleware;


/***/ }),
/* 11 */
/***/ ((module) => {

module.exports = require("node-cache");

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.errorMiddleware = exports.errFormat500ResponseUtil = exports.errFormatResponseUtil = void 0;
const errFormatResponseUtil = (err) => {
    const appErr = err;
    return {
        message: appErr?.message,
        statusText: appErr?.statusText,
        status: appErr?.status,
    };
};
exports.errFormatResponseUtil = errFormatResponseUtil;
const errFormat500ResponseUtil = () => {
    return {
        message: 'The server was unable to complete your request.',
        statusText: '',
        status: 500,
    };
};
exports.errFormat500ResponseUtil = errFormat500ResponseUtil;
const errorMiddleware = (err, req, res) => {
    const appErr = err;
    const status = appErr?.status || 500;
    res.status(status).json((0, exports.errFormatResponseUtil)(appErr));
};
exports.errorMiddleware = errorMiddleware;


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registerRoutes = void 0;
const pokemon_routes_1 = __webpack_require__(14);
const cart_routes_1 = __webpack_require__(28);
const registerRoutes = (app) => {
    app.use('/api/pokemon', pokemon_routes_1.pokemonRoute);
    app.use('/api/cart', cart_routes_1.cartRoute);
};
exports.registerRoutes = registerRoutes;


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pokemonRoute = void 0;
const tslib_1 = __webpack_require__(3);
const express_1 = tslib_1.__importDefault(__webpack_require__(4));
const pokemon_details_controller_1 = __webpack_require__(15);
const pokemon_list_controller_1 = __webpack_require__(17);
const pokemon_species_controller_1 = __webpack_require__(20);
const pricing_controller_1 = __webpack_require__(23);
const pokemonRoute = express_1.default.Router();
exports.pokemonRoute = pokemonRoute;
pokemonRoute.get('/list', pokemon_list_controller_1.getPokemonListController);
pokemonRoute.get('/details/:id', pokemon_details_controller_1.getPokemonDetailsController);
pokemonRoute.get('/species/:id', pokemon_species_controller_1.getPokemonSpeciesController);
pokemonRoute.get('/pricing', pricing_controller_1.getPricingController);


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getPokemonDetailsController = void 0;
const middleware_1 = __webpack_require__(9);
const pokemon_detail_service_1 = __webpack_require__(16);
const getPokemonDetailsController = async (req, res) => {
    const { params } = req;
    try {
        const pokemonDetail = await (0, pokemon_detail_service_1.getPokemonDetailService)({
            id: params?.id,
        }).catch(() => {
            throw (0, middleware_1.errFormat500ResponseUtil)();
        });
        res.status(200).json(pokemonDetail);
    }
    catch (err) {
        res.status(err?.status || 500).json((0, middleware_1.errFormatResponseUtil)(err));
    }
};
exports.getPokemonDetailsController = getPokemonDetailsController;


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getPokemonDetailService = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
const middleware_1 = __webpack_require__(9);
const getPokemonDetailService = async ({ id }) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).catch(() => {
        throw (0, middleware_1.errFormat500ResponseUtil)();
    });
    if (res.ok) {
        const { cries, forms, game_indices, held_items, moves, sprites, past_abilities, past_types, location_area_encounters, ...args } = (await res.json());
        return {
            ...args,
            sprites: {
                other: {
                    ['official-artwork']: sprites?.other?.['official-artwork'],
                },
            },
        };
    }
    throw res;
};
exports.getPokemonDetailService = getPokemonDetailService;


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getPokemonListController = void 0;
const middleware_1 = __webpack_require__(9);
const constants_1 = __webpack_require__(18);
const pokemon_detail_service_1 = __webpack_require__(16);
const pokemon_list_service_1 = __webpack_require__(19);
const combineListAndDetailDataUtil = (pokemonList, detailPromisesRes) => {
    return (pokemonList?.results ?? []).map((el, i) => {
        return {
            ...el,
            ...detailPromisesRes[i + 1],
        };
    });
};
const getPokemonListController = async (req, res) => {
    try {
        const limitQuery = req?.query?.limit || constants_1.DEFAULT_LIMIT;
        const offset = req?.query?.offset || constants_1.DEFAULT_OFFSET;
        const pokemonList = await (0, pokemon_list_service_1.getPokemonListService)({
            offset,
            limit: limitQuery,
        }).catch(() => {
            throw (0, middleware_1.errFormat500ResponseUtil)();
        });
        const limitNumberQuery = Number(limitQuery) + 1 + Number(offset);
        const detailPromises = [];
        for (let loop = Number(offset); loop < limitNumberQuery; loop++) {
            const id = String(loop);
            detailPromises.push(await (0, pokemon_detail_service_1.getPokemonDetailService)({
                id,
            }).catch((err) => ({ id, err })));
        }
        const detailPromisesRes = await Promise.all(detailPromises).then((values) => {
            return values;
        });
        const finalRes = combineListAndDetailDataUtil(pokemonList, detailPromisesRes);
        res.status(200).json(finalRes);
    }
    catch (err) {
        res.status(err?.status || 500).json((0, middleware_1.errFormatResponseUtil)(err));
    }
};
exports.getPokemonListController = getPokemonListController;


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DEFAULT_OFFSET = exports.DEFAULT_LIMIT = void 0;
exports.DEFAULT_LIMIT = '50';
exports.DEFAULT_OFFSET = '0';


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getPokemonListService = void 0;
const middleware_1 = __webpack_require__(9);
const constants_1 = __webpack_require__(18);
const getPokemonListService = async ({ limit = constants_1.DEFAULT_LIMIT, offset = constants_1.DEFAULT_OFFSET, }) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).catch(() => {
        throw (0, middleware_1.errFormat500ResponseUtil)();
    });
    if (res.ok) {
        return (await res.json());
    }
    throw res;
};
exports.getPokemonListService = getPokemonListService;


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getPokemonSpeciesController = void 0;
const middleware_1 = __webpack_require__(9);
const pokemon_evolution_chain_service_1 = __webpack_require__(21);
const pokemon_species_service_1 = __webpack_require__(22);
const getPokemonSpeciesController = async (req, res) => {
    const { params } = req;
    try {
        const finalRes = await (0, pokemon_species_service_1.getPokemonSpeciesService)({
            id: params?.id,
        }).catch(() => {
            throw (0, middleware_1.errFormat500ResponseUtil)();
        });
        const evolutionChainSplit = finalRes?.evolution_chain?.url?.split('/');
        const finalEvolutionRes = await (0, pokemon_evolution_chain_service_1.getPokemonEvolutionChainService)({
            id: evolutionChainSplit[evolutionChainSplit.length - 2],
        }).catch(() => {
            throw (0, middleware_1.errFormat500ResponseUtil)();
        });
        res.status(200).json({
            ...finalRes,
            evolution_chain: {
                ...finalRes?.evolution_chain,
                ...finalEvolutionRes,
            },
        });
    }
    catch (err) {
        res.status(err?.status || 500).json((0, middleware_1.errFormatResponseUtil)(err));
    }
};
exports.getPokemonSpeciesController = getPokemonSpeciesController;


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getPokemonEvolutionChainService = void 0;
const middleware_1 = __webpack_require__(9);
const getPokemonEvolutionChainService = async ({ id, }) => {
    const res = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}`).catch(() => {
        throw (0, middleware_1.errFormat500ResponseUtil)();
    });
    if (res.ok) {
        return (await res.json());
    }
    throw res;
};
exports.getPokemonEvolutionChainService = getPokemonEvolutionChainService;


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getPokemonSpeciesService = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
const middleware_1 = __webpack_require__(9);
const getPokemonSpeciesService = async ({ id }) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`).catch(() => {
        throw (0, middleware_1.errFormat500ResponseUtil)();
    });
    if (res.ok) {
        const { genera, pokedex_numbers, form_descriptions, pal_park_encounters, flavor_text_entries, names, ...args } = (await res.json());
        return {
            ...args,
            flavor_text_entries: flavor_text_entries.find((el) => el?.language?.name === 'en'),
            genera: genera.find((el) => el?.language?.name === 'en'),
        };
    }
    throw res;
};
exports.getPokemonSpeciesService = getPokemonSpeciesService;


/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getPricingController = void 0;
const error_1 = __webpack_require__(12);
const pricing_service_1 = __webpack_require__(24);
const getPricingController = async (req, res) => {
    try {
        const finalRes = await (0, pricing_service_1.getPricingService)().catch(() => {
            throw (0, error_1.errFormat500ResponseUtil)();
        });
        res.status(200).json(finalRes);
    }
    catch (err) {
        res.status(err?.status || 500).json((0, error_1.errFormatResponseUtil)(err));
    }
};
exports.getPricingController = getPricingController;


/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getPricingService = void 0;
const middleware_1 = __webpack_require__(9);
const repositories_1 = __webpack_require__(25);
const getPricingService = async () => {
    return await (0, repositories_1.getPricingDataCall)().catch(() => {
        throw (0, middleware_1.errFormat500ResponseUtil)();
    });
};
exports.getPricingService = getPricingService;


/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(3);
tslib_1.__exportStar(__webpack_require__(26), exports);
tslib_1.__exportStar(__webpack_require__(27), exports);


/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.updateCartDataCall = exports.getCartDataCall = exports.cartDatabase = void 0;
exports.cartDatabase = { data: [], total: 0, counter: 0 };
const getCartDataCall = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(exports.cartDatabase);
        }, 500);
    });
};
exports.getCartDataCall = getCartDataCall;
const updateCartDataCall = async (data) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            exports.cartDatabase.data = data.data;
            exports.cartDatabase.total = data.total;
            exports.cartDatabase.counter = data.counter;
            resolve(data);
        }, 500);
    });
};
exports.updateCartDataCall = updateCartDataCall;


/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getPricingDataCall = exports.pricingDatabase = void 0;
exports.pricingDatabase = {
    stages: {
        '1': { price: 49999 },
        '2': { price: 99999 },
        '3': { price: 149999 },
    },
    legendary: { price: 15000000 },
    mythical: { price: 15000000 },
};
const getPricingDataCall = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(exports.pricingDatabase);
        }, 500);
    });
};
exports.getPricingDataCall = getPricingDataCall;


/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cartRoute = void 0;
const tslib_1 = __webpack_require__(3);
const express_1 = tslib_1.__importDefault(__webpack_require__(4));
const update_cart_controller_1 = __webpack_require__(29);
const get_cart_controller_1 = __webpack_require__(35);
const delete_cart_controller_1 = __webpack_require__(37);
const cartRoute = express_1.default.Router();
exports.cartRoute = cartRoute;
cartRoute.get('/', get_cart_controller_1.getCartController);
cartRoute.put('/item/:id', update_cart_controller_1.updateCartItemController);
cartRoute.delete('/item/:id', delete_cart_controller_1.deleteCartItemController);


/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.updateCartItemController = void 0;
const middleware_1 = __webpack_require__(9);
const update_cart_service_1 = __webpack_require__(30);
const updateCartItemController = async (req, res) => {
    const { body } = req;
    try {
        const pokemonUpdate = await (0, update_cart_service_1.updateCartItemService)(body).catch(() => {
            throw (0, middleware_1.errFormat500ResponseUtil)();
        });
        res.status(200).json(pokemonUpdate);
    }
    catch (err) {
        res.status(err?.status || 500).json((0, middleware_1.errFormatResponseUtil)(err));
    }
};
exports.updateCartItemController = updateCartItemController;


/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.updateCartItemService = void 0;
const lodash_1 = __webpack_require__(31);
const util_pricing_1 = __webpack_require__(32);
const middleware_1 = __webpack_require__(9);
const repositories_1 = __webpack_require__(25);
const pokemon_species_service_1 = __webpack_require__(22);
const pokemon_detail_service_1 = __webpack_require__(16);
const pricing_service_1 = __webpack_require__(24);
const pokemon_evolution_chain_service_1 = __webpack_require__(21);
const doesItemExistKeyFn = (data, id) => {
    const cartLength = data.length;
    let key = null;
    let counter = 0;
    let total = 0;
    for (let loop = 0; loop < cartLength; loop++) {
        const el = data[loop];
        if (el?.id === id) {
            key = loop;
        }
        counter = counter + el?.quantity;
        total = el?.price * el?.quantity + total;
    }
    return {
        key,
        counter,
        total,
    };
};
const getSpeciesDetail = async (id) => {
    const [speciesResult, detailResult] = await Promise.all([
        (0, pokemon_species_service_1.getPokemonSpeciesService)({ id }).catch(() => 'err'),
        (0, pokemon_detail_service_1.getPokemonDetailService)({ id }).catch(() => 'err'),
    ]);
    if (speciesResult === 'err' || detailResult === 'err') {
        return 'err';
    }
    return { ...speciesResult, ...detailResult };
};
const updateCartItemService = async (payload) => {
    const currentCartData = (0, lodash_1.clone)(await (0, repositories_1.getCartDataCall)().catch(() => {
        throw (0, middleware_1.errFormat500ResponseUtil)();
    }));
    const data = (0, lodash_1.clone)(currentCartData.data);
    const { key, counter, total } = doesItemExistKeyFn(data, payload?.id);
    const currentObj = typeof key === 'number' && data[key];
    if (currentObj && payload.removeFromCart && currentObj.quantity === 1) {
        throw (0, middleware_1.errFormatResponseUtil)({
            status: 400,
            statusText: `This action can't be completed with this endpoint.`,
            message: 'We cannot complete this cart action at this moment.',
        });
    }
    const pricingData = await (0, pricing_service_1.getPricingService)().catch(() => {
        throw (0, middleware_1.errFormat500ResponseUtil)();
    });
    const speciesData = await getSpeciesDetail(payload?.id).catch(() => {
        throw (0, middleware_1.errFormat500ResponseUtil)();
    });
    if (speciesData === 'err') {
        throw (0, middleware_1.errFormat500ResponseUtil)();
    }
    const evolutionChainSplit = speciesData?.evolution_chain?.url?.split('/');
    const evolutionData = await (0, pokemon_evolution_chain_service_1.getPokemonEvolutionChainService)({
        id: evolutionChainSplit[evolutionChainSplit.length - 2],
    }).catch(() => {
        throw (0, middleware_1.errFormat500ResponseUtil)();
    });
    const pokemonPrice = Number((0, util_pricing_1.pricingFormat)({
        name: speciesData?.name,
        isLegendary: speciesData?.is_legendary,
        isMythical: speciesData?.is_mythical,
        chainData: evolutionData?.chain,
    }, pricingData, true));
    if (key !== null) {
        if (currentObj) {
            currentObj.quantity = payload.addToCart ? currentObj.quantity + 1 : currentObj.quantity - 1;
        }
        currentCartData.counter = payload.addToCart ? counter + 1 : counter - 1;
        currentCartData.total = payload.addToCart ? total + pokemonPrice : total - pokemonPrice;
        await (0, repositories_1.updateCartDataCall)(currentCartData).catch(() => {
            throw (0, middleware_1.errFormat500ResponseUtil)();
        });
        return currentObj;
    }
    if (payload.removeFromCart) {
        throw (0, middleware_1.errFormatResponseUtil)({
            status: 400,
            statusText: `This action can't be completed with this endpoint.`,
            message: 'We cannot complete this cart action at this moment.',
        });
    }
    const finalPayload = {
        id: payload?.id,
        name: speciesData?.name,
        price: pokemonPrice,
        quantity: 1,
        image: speciesData?.sprites?.other?.['official-artwork']?.front_default ?? '',
        isLegendary: speciesData?.is_legendary,
        isMythical: speciesData?.is_mythical,
        types: speciesData?.types,
    };
    currentCartData.counter = counter + 1;
    currentCartData.total = total + pokemonPrice;
    currentCartData.data.push(finalPayload);
    await (0, repositories_1.updateCartDataCall)(currentCartData).catch(() => {
        throw (0, middleware_1.errFormat500ResponseUtil)();
    });
    return finalPayload;
};
exports.updateCartItemService = updateCartItemService;


/***/ }),
/* 31 */
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(3);
tslib_1.__exportStar(__webpack_require__(33), exports);
tslib_1.__exportStar(__webpack_require__(34), exports);


/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pricingFormat = void 0;
const pricing_format_country_1 = __webpack_require__(34);
/** @todo I need to update this code to deal with possible recursive object and root array. See Eevee 215 and evolutions */
const checkChain = (name, chainData, pricingData, i) => {
    const currentName = chainData?.evolves_to?.[0]?.species?.name;
    const iPlus = i + 1;
    if (iPlus > 3) {
        return null;
    }
    if (name === currentName) {
        return String(pricingData?.stages?.[String(iPlus)]?.price);
    }
    return checkChain(name, chainData?.evolves_to?.[0], pricingData, iPlus);
};
const pricingFormat = (pokemonData, pricingData, returnAsNum = false) => {
    const { name, isMythical, isLegendary, chainData } = pokemonData;
    let price = null;
    if (isLegendary) {
        price = pricingData?.legendary?.price;
    }
    if (isMythical) {
        price = pricingData?.mythical?.price;
    }
    if (name === chainData?.species?.name) {
        price = pricingData?.stages?.['1']?.price;
    }
    if (price === null) {
        price = checkChain(name, chainData, pricingData, 1);
    }
    return price ? (returnAsNum ? price : (0, pricing_format_country_1.pricingFormatUSD)(Number(price))) : 'Price is Not Available';
};
exports.pricingFormat = pricingFormat;


/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pricingFormatUSD = void 0;
const pricingFormatUSD = (price) => {
    return `$${String(price).replace(/\d\d$/, (el) => {
        return `.${el}`;
    })}`;
};
exports.pricingFormatUSD = pricingFormatUSD;


/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getCartController = void 0;
const error_1 = __webpack_require__(12);
const get_cart_service_1 = __webpack_require__(36);
const getCartController = async (req, res) => {
    try {
        const pokemonDetail = await (0, get_cart_service_1.getCartService)().catch(() => {
            throw (0, error_1.errFormat500ResponseUtil)();
        });
        res.status(200).json(pokemonDetail);
    }
    catch (err) {
        res.status(err?.status || 500).json((0, error_1.errFormatResponseUtil)(err));
    }
};
exports.getCartController = getCartController;


/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getCartService = void 0;
const middleware_1 = __webpack_require__(9);
const repositories_1 = __webpack_require__(25);
const getCartService = async () => {
    return await (0, repositories_1.getCartDataCall)().catch(() => {
        throw (0, middleware_1.errFormat500ResponseUtil)();
    });
};
exports.getCartService = getCartService;


/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deleteCartItemController = void 0;
const error_1 = __webpack_require__(12);
const delete_cart_service_1 = __webpack_require__(38);
const deleteCartItemController = async (req, res) => {
    const { params } = req;
    try {
        await (0, delete_cart_service_1.deleteCartItemService)(params?.id).catch(() => {
            throw (0, error_1.errFormat500ResponseUtil)();
        });
        res.status(204).json();
    }
    catch (err) {
        res.status(err?.status || 500).json((0, error_1.errFormatResponseUtil)(err));
    }
};
exports.deleteCartItemController = deleteCartItemController;


/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deleteCartItemService = void 0;
const lodash_1 = __webpack_require__(31);
const middleware_1 = __webpack_require__(9);
const repositories_1 = __webpack_require__(25);
const deleteCartItemService = async (id) => {
    const currentCartData = (0, lodash_1.clone)(await (0, repositories_1.getCartDataCall)().catch(() => {
        throw (0, middleware_1.errFormat500ResponseUtil)();
    }));
    const data = (0, lodash_1.clone)(currentCartData.data);
    let keySplice = null;
    const dataToRemove = data.filter((data, i) => {
        if (data?.id == id) {
            keySplice = i;
            return true;
        }
        return false;
    });
    const totalPrice = dataToRemove[0]?.quantity * dataToRemove[0]?.price;
    currentCartData.counter = currentCartData.counter - dataToRemove[0]?.quantity;
    currentCartData.total = currentCartData.total - totalPrice;
    if (keySplice !== null) {
        data.splice(keySplice, 1);
    }
    currentCartData.data = data;
    await (0, repositories_1.updateCartDataCall)(currentCartData).catch(() => {
        throw (0, middleware_1.errFormat500ResponseUtil)();
    });
    return;
};
exports.deleteCartItemService = deleteCartItemService;


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(1);

})();

/******/ })()
;