import React from 'react';
import CloseSidebar from './CloseSidebar';

function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
	return (
		<>
			<CloseSidebar
				isSidebarOpen={isSidebarOpen}
				setIsSidebarOpen={setIsSidebarOpen}
			/>
			<h2>Sidebar</h2>
			<ul>
				<li>Menu Item 1</li>
				<li>Menu Item 2</li>
			</ul>
		</>
	);
}

export default Sidebar;
