import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Fruit_card = ({ fruit }) => {
	const { _id, name, category } = fruit
	const location = useLocation();
	const { user } = useContext(AuthContext);
	const [userData, setUserData] = useState([])
	useEffect(() => {
		fetch('http://localhost:5000/carts')
			.then(res => res.json())
			.then(data => {
				setUserData(data.filter(item => item.user_email === user.email))
			})
	}, [user])
	const handleAddToCart = item_id => {
		if (user) {
			const orderItem = { fruit_id: item_id, user_email: user.email }
			const isMatched = userData.filter(item => item.fruit_id === item_id);
			if (isMatched.length == 0) {
				fetch('http://localhost:5000/carts', {
					method: 'POST',
					headers: {
						'content-type': 'application/json'
					},
					body: JSON.stringify(orderItem)
				})
					.then(res => res.json())
					.then(data => {

						if (data.insertedId) {
							alert('added in Cart')
						}
					})
			}
			else{
				alert('Item already added');
			}
		}
		else {
			alert('Please Login first')
		}
	}
	return (
		<div className='flex items-center justify-between gap-10 border border-gray-200 rounded-2xl px-5 py-2 w-full'>
			<div className='flex items-center gap-10'>
				<div className='flex flex-col items-center justify-self-center gap-3 w-[150px]'>
					<div className='w-[70px] h-[70px]'>
						<img className='w-full h-full' src="apple.png" alt="" />
					</div>
					<p className='text-lg font-semibold text-[#121212]'>{name}</p>
				</div>
				<p className='text-xl font-semibold text-[#121212]'>{category}</p>
			</div>
			<div className='flex items-center gap-7'>
				<button onClick={() => handleAddToCart(_id)} className='text-[#F85559] font-bold text-lg'>Add to Cart</button>
				<Link to={`/fruit_details/${_id}`} state={{ from: location }} className='text-[#F85559] font-bold text-lg'>Detials</Link>
				<button className='text-[#F85559] font-bold text-lg'>Edit</button>
				<button className='text-[#F85559] font-bold text-lg'>Delete</button>
			</div>
		</div>
	);
};

export default Fruit_card;