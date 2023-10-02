import React from 'react';
import ProductRating from './ProductRating';
import Link from 'next/link';
import ProductAddToCartBtn from './ProductAddToCartBtn';
import Product from '@/model/product';

const ProductItem: React.FC<{ item: Product }> = (props) => {
	return (
		<div className="w-full bg-white border border-gray-200 rounded-lg shadow">
			<Link href={`/products/${props.item.id}`}>
				<img
					className="p-8 rounded-t-lg w-full h-80 object-contain"
					src={props.item.thumbnail}
					alt="product image"
				/>
			</Link>
			<div className="px-5 pb-5">
				<Link href={`/product/${props.item.id}`}>
					<h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
						{props.item.title}
					</h5>
				</Link>
				<div className="flex items-center mt-2.5 mb-5">
					<ProductRating rating={props.item.rating} />
				</div>

				<div className="flex items-center justify-between">
					<span className="text-3xl font-bold text-gray-900 ">
						${props.item.price}
					</span>
					<ProductAddToCartBtn
						product={props.item}
					/>
				</div>
			</div>
		</div>
	);
};

export default ProductItem;
