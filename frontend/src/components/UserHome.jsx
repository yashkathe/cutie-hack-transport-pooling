import React, { useState, useEffect } from "react";

const SearchComponent = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			if (searchQuery.trim() === "") {
				setSearchResults([]);
				return;
			}

			try {
				setLoading(true);

				// Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
				console.log(searchQuery);
				const response = await fetch(
					`http://localhost:5000/api/post/get-posts-by-query/query?query=${searchQuery}`
				);
				const data = await response.json();
                console.log(data)
				setSearchResults(data); // Assuming the API response is an array of results

				setLoading(false);
			} catch (error) {
				console.error("Error fetching data:", error);
				setLoading(false);
			}
		};

		fetchData();
	}, [searchQuery]);

	const handleSearchChange = (e) => {
		setSearchQuery(e.target.value);
	};

	return (
		<div>
			<h2>Search Component</h2>
			<input
				type='text'
				placeholder='Search...'
				value={searchQuery}
				onChange={handleSearchChange}
			/>

			{loading && <p>Loading...</p>}

			<ul>
				{searchResults.length ? (
					searchResults.map((result) => (
						<li key={result.id}>{result.title}</li>
						// Adjust 'id' and 'name' based on the structure of your API response
					))
				) : (
					<div> No such data </div>
				)}
			</ul>
		</div>
	);
};

export default SearchComponent;
