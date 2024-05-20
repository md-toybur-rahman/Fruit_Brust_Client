import React from 'react';

const Team_card = () => {
	return (
		<div className='w-fit p-6'>
			<div className="h-[140px] w-[140px] rounded-full overflow-hidden bg-[url('profile.jpg')] bg-cover bg-center">
				{/* <img className='h-full w-full' src="profile.jpg" alt="" /> */}
			</div>
			<h4 className='text-2xl text-white font-bold mt-8 text-center'>Name</h4>
			<p className='text-base text-white font-medium mt-2 text-center'>Designation</p>
			<div className='flex items-center gap-4 justify-center mt-3'>
				<img src="facebook.svg" alt="" />
				<img src="twitter.svg" alt="" />
				<img src="linkedin.svg" alt="" />
			</div>
		</div>
	);
};

export default Team_card;