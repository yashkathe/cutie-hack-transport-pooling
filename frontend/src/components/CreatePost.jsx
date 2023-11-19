import React, { useState, useContext } from "react";

import styles from "./CreatePost.module.css";

import { AuthContext } from "../Context/auth-context";

const CreatePostForm = () => {
	const auth = useContext(AuthContext);

	const [formData, setFormData] = useState({
		title: "",
		description: "",
		travelDate: "",
		userLocation: "",
		destinationPinCode: "",
		createdBy: auth.userId,
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const url = "http://localhost:5000/api/post/create-post";
			const method = "POST";
			const headers = {
				"Content-Type": "application/json",
			};

			const response = await fetch(url, {
				method,
				headers,
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				console.log("Post created successfully!");
			} else {
				const errorData = await response.json();
				console.error("Post creation failed:", errorData);
			}
		} catch (error) {
			console.error("Error during post creation:", error);
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.parent}>
				<h2>Create a Post</h2>
				<form onSubmit={handleSubmit}>
					<div className={styles.form_element}>
						<label htmlFor='title'>Title</label>
						<input
							type='text'
							id='title'
							name='title'
							value={formData.title}
							onChange={handleInputChange}
						/>
					</div>
					<div className={styles.form_element}>
						<label htmlFor='description'>Description</label>
						<input
							type='text'
							id='description'
							name='description'
							value={formData.description}
							onChange={handleInputChange}
						/>
					</div>

					<div className={styles.form_element}>
						<label htmlFor='travelDate'>Travel Date</label>
						<input
							type='date'
							id='travelDate'
							name='travelDate'
							value={formData.travelDate}
							onChange={handleInputChange}
						/>
					</div>

					<div className={styles.form_element}>
						<label htmlFor='userLocation'>Your pin code</label>
						<input
							type='text'
							id='userLocation'
							name='userLocation'
							value={formData.userLocation}
							onChange={handleInputChange}
						/>
					</div>

					<div className={styles.form_element}>
						<label htmlFor='destinationPinCode'>Destination Pin Code</label>
						<input
							type='text'
							id='destinationPinCode'
							name='destinationPinCode'
							value={formData.destinationPinCode}
							onChange={handleInputChange}
						/>
					</div>

					<button type='submit' className={styles.post}>
						Create Post
					</button>
				</form>
			</div>
		</div>
	);
};

export default CreatePostForm;
