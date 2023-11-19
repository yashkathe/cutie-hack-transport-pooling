import React, { useState } from "react";
import FormLabel from "../shared/FormLabels";

import styles from "./Signup.module.css";

import { useHttpClient } from "../../Hooks/useHttpHook"

const SignupPage = () => {
	
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    const [formData, setFormData] = useState({
		username: "",
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
		try {
			await sendRequest(
				"http://localhost:5000/api/user/signup",
				"POST",
				formData
			);
			history.push("/login");
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.parent}>
				<h2>Signup Page</h2>
				<FormLabel
					label='Username'
					name='username'
					type='text'
					changeHandler={handleInputChange}
					value={formData.username}
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
