import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Cart_card from './Cart_card';

const Carts = () => {
	const loadCart = useLoaderData();
	const { user } = useContext(AuthContext);
	const [loadedCarts, setLoadedCarts] = useState(loadCart);
	const userSelected = loadedCarts.filter(cart => cart.user_email === user.email);

	return (
		<div>
			<h1 className='text-5xl font-bold mt-20 mb-10 text-center'>Carts</h1>
			<div className='flex flex-col items-center gap-5'>
				{
					userSelected.map(item => <Cart_card key={item._id} item={item}></Cart_card>)
				}
			</div>
		</div>
	);
};

export default Carts;