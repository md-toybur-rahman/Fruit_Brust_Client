import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
	return (
		<div>
			<Navbar></Navbar>
			<div className='max-w-[1500px] mx-auto px-5 mb-10'>
				<Outlet></Outlet>		
			</div>
			
		</div>
	);
};

export default Main;