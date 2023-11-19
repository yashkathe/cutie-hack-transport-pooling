import React, { useState } from "react";
import FormLabel from "../shared/FormLabels";

import styles from "./Signup.module.css";

import { useHttpClient } from "../../Hooks/useHttpHook";

const SignupPage = () => {
	const { isLoading, error, sendRequest, clearError } = useHttpClient();

	const [formData, setFormData] = useState({
		name: "",
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

	const handleSignup = async () => {
		const url = "http://localhost:5000/api/user/signup";
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
				console.log("Signup successful:", responseData);
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
				<h2>Signup Page</h2>
				<FormLabel
					label='Username'
					name='name'
					type='text'
					changeHandler={handleInputChange}
					value={formData.name}
				/>
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
				<button onClick={handleSignup}>Signup</button>
			</div>
		</div>
	);
};

export default SignupPage;
