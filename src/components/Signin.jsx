import React, { useState, useContext } from "react";
import FormLabel from "../shared/FormLabels";

import styles from "./Signin.module.css";

import { AuthContext } from "../Context/auth-context";

const LoginPage = () => {
	const auth = useContext(AuthContext);

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
		const url = "http://localhost:5000/api/user/login";
		const method = "POST";
		const headers = {
			"Content-Type": "application/json",
		};

		try {
			const response = await fetch(url, {
				method,
				headers,
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				const responseData = await response.json();
				auth.login(responseData.userId, responseData.token);
			} else {
				const errorData = await response.json();
				console.error("Signup failed:", errorData);
			}
		} catch (error) {
			console.error("Error during signup:", error);
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
