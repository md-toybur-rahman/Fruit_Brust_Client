import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';
import { InfinitySpin } from 'react-loader-spinner';

const PrivateRoute = ({ children }) => {
	const {user, loading} = useContext(AuthContext);
	console.log(user);

	if (loading) {
		return <div className="flex items-center justify-center h-[100vh]">
			<InfinitySpin
				visible={true}
				width="200"
				color="#4fa94d"
				ariaLabel="infinity-spin-loading"
			/>
		</div>
	}
	if(user) {
		return children 
	}

	return <Navigate to="/sign_in"></Navigate>
};

export default PrivateRoute;