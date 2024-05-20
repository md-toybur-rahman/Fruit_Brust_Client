import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';

const Sign_in = () => {
	const { signIn } = useContext(AuthContext);
	const [error, setError] = useState('');
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';
	const { register, handleSubmit, watch, formState: { errors } } = useForm();
	const onSubmit = data =>{
		const {email, password} = data;
		signIn(email, password)
			.then(user => {
				console.log(user);
				navigate(from, { replace: true });
				alert('sign in successfully')

			})
			.catch(error => {
				console.log(error.message);
				setError(error.message);
			})
	}
	const handleSignUp = event => {
		event.preventDefault();
		const form = event.target;
		const email = form.Email.value;
		const password = form.Password.value;
		const allValue = { email, password }
		console.log(allValue);
		
	}
	return (
		<div>
			<h1 className='text-5xl font-bold mt-20 mb-10 text-center'>Sign In</h1>
			<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center gap-5 max-w-[500px] mx-auto w-full border-2 border-gray-400 p-8 rounded-2xl'>
				<div className='grid grid-cols-1 gap-6 w-full'>
					<div className='flex flex-col gap-2 text-xl'>
						<label className='font-medium' htmlFor="email">Email</label>
						<input {...register("email", { required: true })} className='border border-gray-300 px-3 py-2 rounded-xl outline-none' type="text" name='email' placeholder='Enter your Email' />
						{errors.email && <span className="text-sm text-red-500">This field is required *</span>}
					</div>
				</div>
				<div className='grid grid-cols-1 gap-6 w-full'>
					<div className='flex flex-col gap-2 text-xl'>
					<label className='font-medium' htmlFor="password">Password</label>
						<input {...register("password", { required: true })} className='border border-gray-300 px-3 py-2 rounded-xl outline-none' type="password" name='password' placeholder='Enter your Password' />
						{errors.password && <span className="text-sm text-red-500">This field is required *</span>}
					</div>
				</div>
				<div className='mt-4'>
					<p className='text-lg font-medium'>Are you a new user? <Link to="/sign_up" className='text-[#F85559] cursor-pointer'>Sign up</Link></p>
				</div>
				<div className='flex items-center gap-10 mt-10'>
					<p className='text-xl font-semibold text-gray-500'>Sign in with</p>
					<div className='border border-gray-300 p-4 rounded-full cursor-pointer'>
						<img src="google.png" alt="" />
					</div>
				</div>


				<input type='submit' value="Sign In" className='bg-[#F85559] px-8 py-3 font-bold text-xl rounded-xl text-white mt-4 cursor-pointer' />
			</form>
		</div>
	);
};

export default Sign_in;