import { fetcher } from '@/lib/fetcher';
import Product from '@/model/product';

class ProductService {
	async getProduct(id: number) {
		const nextOptions = { next: { revalidate: 3600 } };
		const result = await fetcher.fetch<Product>(
			`https://dummyjson.com/products/${id}`,
			nextOptions
		);

		if (!result) {
			throw new Error('404 page not found');
		}

		return result;
	}
}

export const productService = new ProductService();