import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { user, logOut } = useContext(AuthContext);
	const [cart, setCart] = useState([])
	const navigate = useNavigate();
	const handleLogOut = () => {
		logOut()
			.then(() => {
				navigate('/')
			})
	}
	useEffect(() => {
		fetch('http://localhost:5000/carts')
			.then(res => res.json())
			.then(data => setCart(data))
	}, [cart])
	return (
		<nav className="fixed z-20 w-full top-0 bg-[#F85559] px-10 py-3 text-white ">
			<div className='max-w-[1500px] mx-auto flex justify-between items-start md:items-center relative'>
				<div className="flex items-center justify-between">
					<div className="text-xl font-bold"><img className='w-[150px]' src="logo.svg" alt="" /></div>
					<div className='absolute right-0'>
						{/* Hamburger menu for mobile */}
						<input
							type="checkbox"
							id="nav-toggle"
							className="hidden md:hidden"
							checked={isOpen}
							onChange={() => setIsOpen(!isOpen)}
						/>
						<label htmlFor="nav-toggle" className="md:hidden ml-2 cursor-pointer">&#9776;</label>
					</div>
				</div>
				{/* Menu items */}
				<div className={`md:flex space-x-4 ${isOpen ? 'flex flex-col items-center gap-5 text-lg font-semibold text-white mt-8 md:mt-0' : 'hidden'}`}>
					<Link to="/">Home</Link>
					<Link to="/add_fruit">Add Fruit</Link>
					<Link to="/shop">Shop</Link>
					<Link to="/all_fruits">All Fruits</Link>
					<Link to="/carts" className='flex gap-1'>Cart
						<span className="relative flex h-5 w-8">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full border border-white opacity-75"></span>
							<span className="relative inline-flex rounded-full h-5 w-8 border-2 border-white items-center justify-center">{cart.length}</span>
						</span>
					</Link>
				</div>
				{/* Search form */}
				<div className='hidden md:flex items-center gap-5'>
					<div className='bg-white rounded-full py-2 px-6 hidden lg:flex items-center justify-between gap-4'>
						<form>
							<input className='outline-none' placeholder='Search here' type="text" />
						</form>
						<img src="search.svg" alt="" />
					</div>
					{
						user ?
							<div onClick={handleLogOut}>
								<Link to="/sign_up" className='border border-white px-6 py-2 font-semibold text-lg rounded-xl text-white'>Log Out</Link>
							</div> :
							<div>
								<Link to="/sign_up" className='border border-white px-6 py-2 font-semibold text-lg rounded-xl text-white'>Sign Up</Link>
							</div>
					}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;