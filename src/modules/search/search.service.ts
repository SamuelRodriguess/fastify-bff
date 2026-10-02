/**
 * Searches VTEX Intelligent Search API for products matching the query.
 * @param query - search term
 * @param count - number of results
 * @returns array of raw VTEX product objects
 */
export async function searchService(query: string, count: number = 10) {
  const url = `https://obramax.vtexcommercestable.com.br/api/io/_v/api/intelligent-search/product_search/?query=${encodeURIComponent(query)}&page=1&count=${count}`;

  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });

  if (!res.ok) throw new Error(`VTEX search failed: ${res.status}`);
  const json = await res.json();
  return json.products ?? [];
}