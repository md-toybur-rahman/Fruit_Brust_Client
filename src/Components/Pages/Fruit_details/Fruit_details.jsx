import React from 'react';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const Fruit_details = () => {
	const loadedFruit = useLoaderData();
	const {name, price, description} = loadedFruit;
	const location = useLocation();
    const from = location.state?.from?.pathname
	return (
		<div>
			<h1 className='mt-10 text-5xl font-semibold'>Fruit name is: {name}</h1>
			<h1 className='mt-10 text-5xl font-semibold'>Price: ${price}</h1>
			<h1 className='my-10 text-5xl font-semibold'>Fruit Description: {description}</h1>

			<Link to={from} className='border text-[#F85559] font-bold text-lg'>Go back</Link>
		</div>
	);
};

export default Fruit_details;