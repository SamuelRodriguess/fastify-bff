import { searchSchema } from './search.schema.js';
import { searchService } from './search.service.js';

export const searchResolvers = {
  Query: {
    search: async (_: unknown, { input }: { input: { query: string; count: number } }) => {
      return searchService(input.query, input.count);
    },
  },
  Product: {
    name: (product: any) => product.productName ?? null,
    price: (product: any) => {
      const defaultSeller = product.items?.[0]?.sellers?.find(
        (s: any) => s.sellerDefault,
      );
      return defaultSeller?.commertialOffer?.Price ??
        product.items?.[0]?.sellers?.[0]?.commertialOffer?.Price ??
        product.priceRange?.sellingPrice?.lowPrice ??
        null;
    },
    imageUrl: (product: any) =>
      product.items?.[0]?.images?.[0]?.imageUrl ??
      product.images?.[0]?.imageUrl ??
      product.productImageUrl ??
      null,
    link: (product: any) => product.link ?? null,
    brand: (product: any) => product.brand ?? null,
  },
};