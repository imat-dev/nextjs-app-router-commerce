import { fetcher } from '@/lib/fetcher';
import React from 'react';
import Product from '@/model/product';
import Products from './components/Products';

interface ProductResult {
	products: Product[];
}

const ProductsPage = async () => {
	//server rendering, cache is true

	const { products } = await fetcher.fetch<ProductResult>(
		'https://dummyjson.com/products'
	);

	return (
		<section className="container mx-auto">
			<Products products={products} />
		</section>
	);
};

export default ProductsPage;
