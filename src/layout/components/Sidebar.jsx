import React from 'react';
import CloseSidebar from './CloseSidebar';
import { useLocation } from 'react-router-dom';
import SidebarNavStatic from './SidebarNavStatic';
import SidebarNavDynamic from './SidebarNavDynamic';

function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
	let location = useLocation();
	let pathname = location.pathname.split('/')[1];
	return (
		<>
			<CloseSidebar
				isSidebarOpen={isSidebarOpen}
				setIsSidebarOpen={setIsSidebarOpen}
			/>
			<div className='sidebarDynamic'>
				<SidebarNavDynamic pathname={pathname} className='sidebarDynamic' />
			</div>
			<div className='sidebarStatic'>
				<SidebarNavStatic />
			</div>
		</>
	);
}

export default Sidebar;
