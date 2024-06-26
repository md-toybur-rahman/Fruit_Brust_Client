import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';

const Sign_up = () => {
	const { createUser, signIn, loading } = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';
	const [error, setError] = useState('')
	const { register, handleSubmit, watch, formState: { errors } } = useForm();
	const onSubmit = data => {
		console.log(data);
		const { email, password, confirm_password } = data;
		console.log(email)
		if(password !== confirm_password) {
			setError('Password did not matched');
			return;
		}
		createUser(email, password)
			.then(user => {
				signIn(email, password)
					.then(user => {
						console.log(user.user);
						navigate(from, { replace: true });
					})
					.catch(error => {
						console.log(error.message);
						setError(error.message);
					})
				alert('Sign up successfully')
			})
			.catch(error => {
				console.log(error.message);
				setError(error.message);
			})
	};
	return (
		<div>
			<h1 className='text-5xl font-bold mt-20 mb-10 text-center'>Sign Up</h1>
			<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center gap-5 max-w-[800px] mx-auto w-full border-2 border-gray-400 p-8 rounded-2xl'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
					<div className='flex flex-col gap-2 text-xl'>
						<label className='font-medium' htmlFor="first_name">First Name</label>
						<input {...register("first_name", { required: true })} className='border border-gray-300 px-3 py-2 rounded-xl outline-none' type="text" name='first_name' placeholder='First Name' />
						{errors.first_name && <span className="text-sm text-red-500">This field is required *</span>}
					</div>
					<div className='flex flex-col gap-2 text-xl'>
						<label className='font-medium' htmlFor="last_name">Last Name</label>
						<input {...register("last_name", { required: true })} className='border border-gray-300 px-3 py-2 rounded-xl outline-none' type="text" name='last_name' placeholder='Last Namme' />
						{errors.last_name && <span className="text-sm text-red-500">This field is required *</span>}
					</div>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
					<div className='flex flex-col gap-2 text-xl'>
						<label className='font-medium' htmlFor="email">Email</label>
						<input {...register("email", { required: true })} className='border border-gray-300 px-3 py-2 rounded-xl outline-none' type="text" name='email' placeholder='Enter your Email' />
						{errors.email && <span className="text-sm text-red-500">This field is required *</span>}
					</div>
					<div className='flex flex-col gap-2 text-xl'>
						<label className='font-medium' htmlFor="phone_Number">Phone number</label>
						<input {...register("phone_number", { required: true })} className='border border-gray-300 px-3 py-2 rounded-xl outline-none' type="text" name='phone_number' placeholder='Phone Number' />
						{errors.phone_number && <span className="text-sm text-red-500">This field is required *</span>}
					</div>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
					<div className='flex flex-col gap-2 text-xl'>
						<label className='font-medium' htmlFor="address">Address</label>
						<input {...register("address", { required: true })} className='border border-gray-300 px-3 py-2 rounded-xl outline-none' type="text" name='address' placeholder='Enter Your Adderss' />
						{errors.address && <span className="text-sm text-red-500">This field is required *</span>}
					</div>
					<div className='flex flex-col gap-2 text-xl'>
						<label className='font-medium' htmlFor="gender">Gender</label>
						<select {...register("gender", { required: true })} className='border border-gray-300 px-3 py-2 rounded-xl outline-none' name="gender" id="">
							<option value="Male">Male</option>
							<option value="Female">Female</option>
						</select>
						{errors.gender && <span className="text-sm text-red-500">This field is required *</span>}
					</div>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
					<div className='flex flex-col gap-2 text-xl'>
						<label className='font-medium' htmlFor="password">Password</label>
						<input
							{...register("password",{ 
								required: true, 
								minLength: 6, 
								maxLength: 20,
								pattern: /^(?=.*[A-Z].)(?=.*[a-z])(?=.*[0-9])$/
							})}
							className='border border-gray-300 px-3 py-2 rounded-xl outline-none' type="password" name='password' placeholder='Enter your Password' />
						{errors.password?.type === 'required' && <span className="text-sm text-red-500">This field is required *</span>}
						{errors.password?.type === 'minLength' && <span className="text-sm text-red-500">Password contain minimum 6 charecters</span>}
						{errors.password?.type === 'maxLength' && <span className="text-sm text-red-500">Password contain maximum 20 charecters</span>}
						{errors.password?.type === 'pattern' && <span className="text-sm text-red-500">Password must have a uppercase, a lower case and a number.</span>}
					</div>
					<div className='flex flex-col gap-2 text-xl'>
						<label className='font-medium' htmlFor="confirm_password">Confirm Password</label>
						<input {...register("confirm_password", { required: true })} className='border border-gray-300 px-3 py-2 rounded-xl outline-none' type="password" name='confirm_password' placeholder='Confirm your password' />
						{errors.confirm_password && <span className="text-sm text-red-500">This field is required *</span>}
						{
							error === 'Password did not matched' && <span className="text-sm text-red-500">Password did not matched</span>
						}
					</div>
				</div>
				<div className='flex flex-col gap-2 text-xl w-full'>
					<label className='font-medium' htmlFor="Profile_Picture">Profile Picture</label>
					<input className='border border-gray-300 px-3 py-2 rounded-xl outline-none' type="file" name='Profile_Picture' placeholder='Upload Image' />
				</div>
				<div className='mt-4'>
					<p className='text-lg font-medium'>Already have an account? <Link to="/sign_in" className='text-[#F85559] cursor-pointer'>Sign in</Link></p>
				</div>
				<div className='flex items-center gap-10 mt-10'>
					<p className='text-xl font-semibold text-gray-500'>Sign up with</p>
					<div className='border border-gray-300 p-4 rounded-full cursor-pointer'>
						<img src="google.png" alt="" />
					</div>
				</div>


				<input type='submit' value="Sign Up" className='bg-[#F85559] px-8 py-3 font-bold text-xl rounded-xl text-white mt-4 cursor-pointer' />
			</form>
		</div>
	);
};

export default Sign_up;