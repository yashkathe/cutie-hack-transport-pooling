import React, { useState, useEffect } from "react";

import styles from "./UserHome.module.css";

const PostList = () => {
	const [posts, setPosts] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		fetchDefaultPosts();
	}, []);

	const fetchDefaultPosts = async () => {
		try {
			const response = await fetch(
				"http://localhost:5000/api/post/get-all-posts"
			); 
			if (response.ok) {
				const defaultPosts = await response.json();
				setPosts(defaultPosts);
			} else {
				console.error("Error fetching default posts");
			}
		} catch (error) {
			console.error("Error fetching default posts:", error);
		}
	};

	const handleSearch = (e) => {
		setSearchTerm(e.target.value);
	};

	const filteredPosts = posts.filter((post) =>
		post.title.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div className={styles.parent}>
			<h2>Post List</h2>
			<input
				type='text'
				placeholder='Search posts...'
				value={searchTerm}
				onChange={handleSearch}
                className={styles.input}
			/>
			<ul>
				{filteredPosts.map((post) => (
					<li key={post.id}>
						<strong>{post.title}</strong>: {post.description}
					</li>
				))}
			</ul>
		</div>
	);
};

export default PostList;
