import React from 'react';
import Rating from 'react-rating';
const Product_card = ({fruit}) => {
	const {price, name, rating} = fruit
	return (
		<div className='w-[342px] h-[477px] p-[50px] flex flex-col items-center gap-6 border border-[#121212]/[10%] rounded-xl'>
			<img className='w-[130px] h-[130px]' src="apple.png" alt="" />
			<h4 className='text-2xl text-[#121212] font-bold'>{price}</h4>
			<hr className='border border-gray-200 w-full' />
			<p className='text-lg text-[#121212] font-medium'>{name}</p>
			<div>
				<Rating
					emptySymbol={<img src="star-empty.png" className="icon" />}
					fullSymbol={<img src="star-full.png" className="icon" />}
					initialRating={ Math.floor(rating)}
					readonly />
			</div>
			<button className='text-[#F85559] font-bold text-lg'>Detials</button>
		</div>
	);
};

export default Product_card;