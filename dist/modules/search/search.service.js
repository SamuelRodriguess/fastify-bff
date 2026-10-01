"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchService = searchService;
async function searchService(query, count) {
    const url = `https://obramax.vtexcommercestable.com.br/api/io/_v/api/intelligent-search/product_search/?query=${encodeURIComponent(query)}&page=1&count=${count}`;
    const res = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    });
    if (!res.ok)
        throw new Error(`VTEX search failed: ${res.status}`);
    const json = await res.json();
    return json.products ?? [];
}
