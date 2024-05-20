import React, { useState } from 'react';
import Carousel from './Carousel';
import Timer from './Timer';
import Product_card from './Product_card';
import Team_card from './Team_card';
import { Link, useLoaderData } from 'react-router-dom';
import Modal from '../../Shared/Modal/Modal';

const Home = () => {
	const loadedFruites = useLoaderData();
    const [fruites, setFruites] = useState(loadedFruites);
	return (
		<div>
			<div className='mt-10'>
				<Carousel></Carousel>
			</div>

			{/* -------Display Fruites--------- */}
			<div className='relative md:max-w-[80%] mx-auto'>
				<div className='lg:absolute lg:top-[-150px] z-20 w-full bg-white shadow-xl rounded-lg px-10 lg:px-[70px] py-5 lg:py-10 flex flex-wrap items-center justify-center gap-5 md:gap-10 lg:gap-16 mt-[50px]'>
					<div className='w-fit'>
						<img src="grape.png" alt="" />
						<p className='text-center text-lg font-semibold'>Grape</p>
					</div>
					<div className='w-fit'>
						<img src="orange.png" alt="" />
						<p className='text-center text-lg font-semibold'>Orange</p>
					</div>
					<div className='w-fit'>
						<img src="mango.png" alt="" />
						<p className='text-center text-lg font-semibold'>Mango</p>
					</div>
					<div className='w-fit'>
						<img src="strowberry.png" alt="" />
						<p className='text-center text-lg font-semibold'>Strawberry</p>
					</div>
					<div className='w-fit'>
						<img src="Pomegranate.png" alt="" />
						<p className='text-center text-lg font-semibold'>Pomegranate</p>
					</div>
				</div>
			</div>
			{/* ------------Offer Section------------- */}
			<div className='mt-20 lg:mt-[24rem] xl:mt-80 flex flex-col lg:flex-row gap-10 items-center justify-between'>
				<div className="max-w-[615px] text-center lg:text-start">
					<h1 className='text-[48px] font-bold text-[#121212] mb-6'>Deal of the day</h1>
					<p className='font-medium text-base'>Contrary to popular belief, is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
				</div>
				<div>
					<Timer></Timer>
				</div>
			</div>
			{/* ------------Product section-------------- */}

			<div>
				<div className='mt-[48px] flex items-center justify-center flex-wrap gap-5'>
					{
						fruites.slice(0,4).map(fruite => <Product_card key={fruite._id} fruit={fruite}></Product_card>)
					}
				</div>
				<div className='flex justify-center mt-[48px]'>
					<Link to="/all_fruits" className='bg-[#F85559] px-8 py-3 font-bold text-xl rounded-xl text-white'>Shop All</Link>
				</div>
			</div>


			{/* ----------Team Section------------- */}

			<div className="relative bg-[url('carousel_banner3.jpg')] bg-cover h-[1000px] lg:h-[700px] mt-20 rounded-xl">
				<div className='absolute h-full bg-black w-full opacity-70 rounded-xl'></div>
				<div className='absolute h-full w-full flex flex-col gap-6 items-center justify-center'>
					<div className="max-w-[615px]">
						<h1 className='text-[48px] font-bold text-white mb-6 text-center'>Meet the team section</h1>
						<p className='font-medium text-base text-white text-center'>Contrary to popular belief, is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
					</div>
					<div className='flex flex-wrap items-center justify-center gap-6 md:gap-10 lg:gap-20'>
						<Team_card></Team_card>
						<Team_card></Team_card>
						<Team_card></Team_card>
						<Team_card></Team_card>
					</div>
				</div>
			</div>
			{/* --------------------- */}
		</div>
	);
};

export default Home;