import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Fruite_card from './Fruit_card';

const All_fruites = () => {
	const loadFruits = useLoaderData();
	const [allFruits, setAllFruits] = useState(loadFruits);
	return (
		<div>
			<h1 className='text-5xl font-bold mt-20 mb-10 text-center'>All Fruits</h1>
			<div className='flex flex-col items-center gap-5'>
				{
					allFruits.map(fruit => <Fruite_card key={fruit._id} fruit={fruit}></Fruite_card>)
				}
			</div>
		</div>
	);
};

export default All_fruites;