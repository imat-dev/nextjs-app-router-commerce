import { fetcher } from '@/lib/fetcher';
import Product from '@/model/product';
import { productService } from '@/services/productService';
import React from 'react';
import ProductDetail from '../components/ProductDetail';

interface ProductResult {
	products: Product[];
}

export async function generateStaticParams() {
	const { products } = await fetcher.fetch<ProductResult>(
		'https://dummyjson.com/products'
	);

	const result = products.map((product) => ({
		slug: product.id.toString(),
	}));

	return result;
}

const ProductDetailPage = async ({ params }: { params: { slug: string } }) => {
	const product = await productService.getProduct(parseInt(params.slug));

	if (!product) {
		return <>Product not found.</>;
	}

	return (
		<section className="container">
			<ProductDetail product={product}/>
		</section>
	);
};

export default ProductDetailPage;
