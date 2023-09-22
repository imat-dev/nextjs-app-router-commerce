import { fetcher } from '@/lib/fetcher';
import Product from '@/model/product';
import React from 'react';

interface ProductResult {
	products: Product[];
}

export async function generateStaticParams() {
	const { products } = await fetcher.fetch<ProductResult>(
		'https://dummyjson.com/products'
	);

	// const result = products.map((product) => ({
	// 	slug: product.id,
	// }));

	// console.log(result);
	return [{slug : "1"}]
}

const ProductDetailPage = ({ params }: { params: { slug: string } }) => {
	console.log(params)
    return (
		<div>
			<div>My Post: {params.slug}</div>
		</div>
	);
};

export default ProductDetailPage;
