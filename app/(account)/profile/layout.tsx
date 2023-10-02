import React from 'react';
import SideBar from './components/SideBar';

const AccountLayout = ({ children }: { children: React.ReactNode }) => {
	
	return (
		<section className="container">
			<div className="flex gap-16">
				<SideBar />
				<div className="mt-5">{children}</div>
			</div>
		</section>
	);
};

export default AccountLayout;
