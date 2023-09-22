import React from 'react';
import ProductCard from './components/ProductCard';
import axios from 'axios';
import { fetcher } from '@/lib/fetcher';

interface User {
	id: number;
	name: string;
}

const UsersPage = async () => {
	// this is the default option, no need to put this
	// const nextOptions = { cache: 'force-cache' };

	//do not cache data
	// const nextOptions = { cache: 'no-store' };

	// revalidate or purge cache every 1hour
	const nextOptions = { next: { revalidate: 3600 } };

	const users: User[] = await fetcher.fetch<User[]>(
		'https://jsonplaceholder.typicode.com/users',
		nextOptions
	);

	if (!users) {
		return <>No users found.</>;
	}

	return (
		<div>
			<h1 className="text-slate-200 text-2xl">Users: </h1>
			<p>{new Date().toLocaleDateString()}</p>
			<ul>
				{users.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>

			<ProductCard />
		</div>
	);
};

export default UsersPage;
