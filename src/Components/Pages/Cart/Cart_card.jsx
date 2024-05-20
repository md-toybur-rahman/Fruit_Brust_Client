import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Cart_card = ({ item }) => {
	const { fruit_id, _id } = item;
	const [fruit, setFruit] = useState({})
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		fetch(`http://localhost:5000/fruit/${fruit_id}`)
			.then(res => res.json())
			.then(data => {
				setFruit(data);
				setLoading(false)
			})
	}, [])

	const handleDelete = (id) => {
		fetch(`http://localhost:5000/cart/${id}`, {
			method: 'DELETE'
		})
			.then(res => res.json())
			.then(data => {
				console.log(data)
				if (data.deletedCount > 0) {
					alert('Item Deleted')
					location.replace(location.href);
				}
			})
	}

	return (
		<div className='flex items-center justify-between gap-10 border border-gray-200 rounded-2xl px-5 py-2 w-full'>
			<div className='flex items-center gap-10'>
				<div className='flex flex-col items-center justify-self-center gap-3 w-[150px]'>
					<div className='w-[70px] h-[70px]'>
						<img className='w-full h-full' src="apple.png" alt="" />
					</div>
					{
						loading ? <div className="loader"></div> :
							<p className='text-lg font-semibold text-[#121212]'>{fruit.name}</p>
					}
				</div>
				<p className='text-xl font-semibold text-[#121212]'>{fruit.category}</p>
			</div>
			<div className='flex items-center gap-7'>
				<Link to={`/fruit_details/${fruit_id}`} state={{ from: location }} className='text-[#F85559] font-bold text-lg'>Detials</Link>
				<button onClick={() => handleDelete(_id)} className='text-[#F85559] font-bold text-lg'>Delete</button>
			</div>
		</div>
	);
};

export default Cart_card;