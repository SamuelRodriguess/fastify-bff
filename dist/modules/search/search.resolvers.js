"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchResolvers = void 0;
const search_service_js_1 = require("./search.service.js");
exports.searchResolvers = {
    Query: {
        search: async (_, { input }) => {
            return (0, search_service_js_1.searchService)(input.query, input.count);
        },
    },
    Product: {
        name: (product) => product.productName ?? null,
        price: (product) => {
            const defaultSeller = product.items?.[0]?.sellers?.find((s) => s.sellerDefault);
            return defaultSeller?.commertialOffer?.Price ??
                product.items?.[0]?.sellers?.[0]?.commertialOffer?.Price ??
                product.priceRange?.sellingPrice?.lowPrice ??
                null;
        },
        imageUrl: (product) => product.items?.[0]?.images?.[0]?.imageUrl ??
            product.images?.[0]?.imageUrl ??
            product.productImageUrl ??
            null,
        link: (product) => product.link ?? null,
        brand: (product) => product.brand ?? null,
    },
};
