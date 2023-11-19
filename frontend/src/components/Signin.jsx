import React, { useState } from "react";
import FormLabel from "../shared/FormLabels";

import { useHttpClient } from "../../Hooks/useHttpHook";
import { AuthContext } from "../Context/auth-context";

import styles from "./Signin.module.css";

const LoginPage = () => {
	const { isLoading, error, sendRequest, clearError } = useHttpClient();

	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const handleInputChange = (e) => {
		const { id, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[id]: value,
		}));
	};

	const handleLogin = async () => {
		try {
			const responseData = await sendRequest(
				"http://localhost:5000/api/user/login",
				"POST",
				JSON.stringify(formData),
				{ "Content-Type": "application/json" }
			);
			auth.login(responseData.userId, responseData.token);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.parent}>
				<h2 className={styles.parent}>Login Page</h2>
				<FormLabel
					label='Email'
					name='email'
					type='email'
					changeHandler={handleInputChange}
					value={formData.email}
				/>
				<FormLabel
					label='Password'
					name='password'
					type='password'
					changeHandler={handleInputChange}
					value={formData.password}
				/>
				<button onClick={handleLogin}>Login</button>
			</div>
		</div>
	);
};

export default LoginPage;
