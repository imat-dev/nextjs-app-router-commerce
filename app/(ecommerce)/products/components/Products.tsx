import Product  from '@/model/product';
import React from 'react';
import ProductItem from './ProductItem';

const Products: React.FC<{ products: Product[] }> = (props) => {
	return (
		<ul className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
			{props.products.map((product) => (
				<ProductItem
					key={product.id}
					item={product}
				/>
			))}
		</ul>
	);
};

export default Products;
