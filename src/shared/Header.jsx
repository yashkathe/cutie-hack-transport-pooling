import React from "react";

import HeaderIcon from "/icons8-airport-50.png";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";

const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.img}>
				<Link to='/' className={styles.main_link}>
					<img src={HeaderIcon} alt='headerImage' />
					<h1>Commute Connect</h1>
				</Link>
			</div>
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
		</div>
	);
};

export default Header;
