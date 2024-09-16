import React from 'react';
import SidebarData from '../data/SidebarData';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function SidebarNavDynamic({ pathname }) {
	const sidebarData = new SidebarData();
	const [navArray, setNavArray] = useState([]);
	const [active, setActive] = useState('');

	const returnNavArray = (pathname, sidebarData) => {
		if (pathname === 'order') {
			return sidebarData.order;
		}
		if (pathname === 'user-dashboard') {
			return sidebarData.user;
		}
		if (pathname === 'help-desk') {
			return sidebarData.help;
		}
	};

	const setActiveOnClick = (element) => {
		setActive(element);
	};

	useEffect(() => {
		setNavArray(returnNavArray(pathname, sidebarData));
	}, [pathname]);

	return (
		<>
			<h2 className='dynamicSidebarTitle'>{pathname ? pathname : null}</h2>
			<ul className='navListHolder'>
				{navArray?.map((e) => (
					<li
						key={e}
						className={`navListItem ${active === e ? 'activeLink' : ''}`}
						onClick={() => setActiveOnClick(e)}
					>
						<Link
							className={`navListItemLink ${active === e ? 'activeLink' : ''}`}
						>
							{e}
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}

export default SidebarNavDynamic;
