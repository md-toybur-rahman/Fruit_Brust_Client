import React from 'react';

const Modal = () => {
	return (
		<div>
			<div className='fixed h-screen w-screen bg-black opacity-30 z-50'>
				<div className='absolute w-[600px] h-[400px] rounded-xl flex items-center justify-center z-60'>
					<h1>Sign in Successfully</h1>
				</div>
			</div>
		</div>
	);
};

export default Modal;