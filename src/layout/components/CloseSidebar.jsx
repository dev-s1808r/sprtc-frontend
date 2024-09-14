import React from 'react';

function CloseSidebar({ isSidebarOpen, setIsSidebarOpen }) {
	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};
	return (
		<button className='close-button' onClick={toggleSidebar}>
			&times;
		</button>
	);
}

export default CloseSidebar;
