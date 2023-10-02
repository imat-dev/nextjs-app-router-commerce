import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<section className='container'>
			<h1>Ecommerce</h1>
			<br></br>
			<Link href="/users">Users</Link>
		</section>
	);
}
