import React from 'react';

const Add_fruit = () => {

	const handleFruitSubmition = event => {
        event.preventDefault();
        const form = event.target;
		const name =form.Name.value;
		const price = form.Price.value;
		const category = form.Category.value;
		const imported_country = form.Imported_country.value;
		const ratings = form.Ratings.value;
		const available_quantity = form.Available_quantity.value;
		const description = form.Description.value;
		const allValue = {name, price, category, imported_country, ratings, available_quantity, description}
		console.log(allValue)
	}
	return (
		<div>
			<h1 className='text-5xl font-bold mt-20 mb-10 text-center'>Add New Fruit</h1>
			<form onSubmit={handleFruitSubmition} className='flex flex-col items-center gap-5 max-w-[800px] mx-auto w-full border-2 border-gray-400 p-8 rounded-2xl'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
					<div className='flex flex-col gap-2 text-xl'>
						<label className='font-medium' htmlFor="Name">Fruit Name</label>
						<input className='border border-gray-300 px-3 py-2 rounded-xl outline-none' type="text" name='Name' placeholder='Fruit Name' />
					</div>
					<div className='flex flex-col gap-2 text-xl'>
						<label className='font-medium' htmlFor="Price">Price</label>
						<input className='border border-gray-300 px-3 py-2 rounded-xl outline-none' type="text" name='Price' placeholder='Price' />
					</div>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
					<div className='flex flex-col gap-2 text-xl'>
						<label className='font-medium' htmlFor="Category">Category</label>
						<input className='border border-gray-300 px-3 py-2 rounded-xl outline-none' type="text" name='Category' placeholder='Fruit Category' />
					</div>
					<div className='flex flex-col gap-2 text-xl'>
						<label className='font-medium' htmlFor="Imported_country">Imported Country</label>
						<input className='border border-gray-300 px-3 py-2 rounded-xl outline-none' type="text" name='Imported_country' placeholder='Imported Country' />
					</div>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
					<div className='flex flex-col gap-2 text-xl'>
						<label className='font-medium' htmlFor="Ratings">Ratings</label>
						<input className='border border-gray-300 px-3 py-2 rounded-xl outline-none' type="text" name='Ratings' placeholder='Fruit Ratings' />
					</div>
					<div className='flex flex-col gap-2 text-xl'>
						<label className='font-medium' htmlFor="Available_quantity">Available Quantity</label>
						<input className='border border-gray-300 px-3 py-2 rounded-xl outline-none' type="text" name='Available_quantity' placeholder='Available Quantity' />
					</div>
				</div>
				<div className='flex flex-col gap-2 text-xl w-full'>
					<label className='font-medium' htmlFor="Description">Description</label>
					<input className='border border-gray-300 px-3 py-2 rounded-xl outline-none' type="text" name='Description' placeholder='Fruit Description' />
				</div>
				<div className='flex flex-col gap-2 text-xl w-full'>
					<label className='font-medium' htmlFor="Image">Image</label>
					<input className='border border-gray-300 px-3 py-2 rounded-xl outline-none' type="file" name='Image' placeholder='Upload Image' />
				</div>

				<input type='submit' value="Add Fruit" className='bg-[#F85559] px-8 py-3 font-bold text-xl rounded-xl text-white mt-4 cursor-pointer'/>
			</form>
		</div>
	);
};

export default Add_fruit;