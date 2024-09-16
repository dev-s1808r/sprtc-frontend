import React from 'react';
import { NavLink } from 'react-router-dom';

function SidebarNav() {
	return (
		<nav>
			<ul className='navListHolder'>
				<li className='navListItem'>
					<NavLink className='navListItemLink' to='/'>
						{' '}
						Order
					</NavLink>
				</li>
				<li className='navListItem'>
					<NavLink className='navListItemLink' to='/user-dashboard'>
						{' '}
						Profile
					</NavLink>
				</li>
				<li className='navListItem'>
					<NavLink className='navListItemLink' to='/help-desk'>
						{' '}
						Settings
					</NavLink>
				</li>
				<li className='navListItem'>
					<NavLink className='navListItemLink' to='/help-desk'>
						{' '}
						Help
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default SidebarNav;
