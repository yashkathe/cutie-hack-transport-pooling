import { Routes, Route } from "react-router-dom";
import Header from "./shared/Header";
import { useState, useEffect, useCallback } from "react";

import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import UserHome from "./components/UserHome";


import { AuthContext } from "../src/Context/auth-context";

let logoutTimer;

function App() {
	const [token, setToken] = useState(null);
	const [tokenExpirationTime, setTokenExpirationTime] = useState();
	const [userId, setUserId] = useState(false);

	const login = useCallback((uid, token, expirationDate) => {
		setToken(token);
		const tokenExpirationDate =
			expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
		setTokenExpirationTime(tokenExpirationDate);
		localStorage.setItem(
			"userData",
			JSON.stringify({
				userId: uid,
				token: token,
				expiration: tokenExpirationDate.toISOString(),
			})
		);
		setUserId(uid);
	}, []);

	const logout = useCallback(() => {
		setToken(null);
		setTokenExpirationTime(null);
		setUserId(null);
		localStorage.removeItem("userData");
	}, []);

	useEffect(() => {
		if (token && tokenExpirationTime) {
			const remainingTime =
				tokenExpirationTime.getTime() - new Date().getTime();
			logoutTimer = setTimeout(logout, remainingTime);
		} else {
			clearTimeout(logoutTimer);
		}
	}, [token, logout, tokenExpirationTime]);

	useEffect(() => {
		const storedData = JSON.parse(localStorage.getItem("userData"));
		if (
			storedData &&
			storedData.token &&
			new Date(storedData.expiration) > new Date()
		) {
			login(storedData.userId, storedData.token);
		}
	}, [login]);

	let routes;

	if (token) {
		routes = (
			<Routes>
				<Route path='/' element={<UserHome />} />
			</Routes>
		);
	} else {
		routes = (
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Signin />} />
				<Route path='/signup' element={<Signup />} />
			</Routes>
		);
	}

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn: !!token,
				token: token,
				userId,
				login,
				logout,
			}}>
			<header>
				<Header />
			</header>
			<main>{routes}</main>
		</AuthContext.Provider>
	);
}

export default App;
