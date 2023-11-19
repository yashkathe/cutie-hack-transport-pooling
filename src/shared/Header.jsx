import React, { useContext } from "react";

import HeaderIcon from "/icons8-airport-50.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/auth-context";

import styles from "./Header.module.css";

const Header = () => {
	const auth = useContext(AuthContext);

	let links;

	if (auth.isLoggedIn === true) {
		links = (
			<div className={styles.links}>
				<div className={styles.link}>
					<Link to='/user-home' className=' '>
						User Home
					</Link>
				</div>

				<div className={styles.link}>
					<Link to='/create-post' className=' '>
						Create Post
					</Link>
				</div>

				<div className={styles.link}>
					<button onClick={auth.logout}>
						Logout
					</button>
				</div>
			</div>
		);
	} else {
		links = (
			<div className={styles.links}>
				<div className={styles.link}>
					<Link to='/signup' className=' '>
						Sign Up
					</Link>
				</div>

				<div className={styles.link}>
					<Link to='/login' className=''>
						Login
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className={styles.header}>
			<div className={styles.img}>
				<Link to='/' className={styles.main_link}>
					<img src={HeaderIcon} alt='headerImage' />
					<h1>Commute Connect</h1>
				</Link>
			</div>
			{links}
		</div>
	);
};

export default Header;
