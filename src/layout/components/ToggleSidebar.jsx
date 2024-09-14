import React from 'react';

function ToggleSidebar({ isSidebarOpen, setIsSidebarOpen }) {
	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};
	return (
		<button className='toggle-button' onClick={toggleSidebar}>
			☰
		</button>
	);
}

export default ToggleSidebar;
