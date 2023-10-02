'use client';
import Product from '@/model/product';
import { useAppDispatch } from '@/store';
import { cartActions } from '@/store/cartSlice';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const ProductAddToCartBtn: React.FC<{product : Product}> = (props) => {
	const dispatch = useAppDispatch();

	const addToCartHandler = () => {
		console.log(props);
		dispatch(cartActions.showCartDrawer());
		const product = {
			id: props.product.id,
			title: props.product.title,
			price: props.product.price,
			quantity: 1,
			image: props.product.thumbnail,
		};

		dispatch(cartActions.addToCart(product));
	};

	return (
		<button
			onClick={addToCartHandler}
			className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
		>
			Add to cart
		</button>
	);
};

export default ProductAddToCartBtn;
