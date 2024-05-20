import React, { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { createContext } from "react";

export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(false);
	const [loading, setLoading] = useState(true);

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	}

	const signIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	}

	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	}

	useEffect(() => {
		const userActivity = onAuthStateChanged(auth, loggedUser => {
			console.log(loggedUser);
			setUser(loggedUser);
			setLoading(false);
		})
		return userActivity;
	}, [user ])

	const authCollection = {
		createUser,
		signIn,
		logOut,
		loading,
		user,
	}
	return (
		<AuthContext.Provider value={authCollection}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;