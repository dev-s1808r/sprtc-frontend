import React, { useState } from 'react';
import './layout.css';
import ToggleSidebar from './components/ToggleSidebar';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

function PageWithSidebar({ children }) {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	return (
		<section className={`container ${isSidebarOpen ? 'sidebar-open' : ''}`}>
			<ToggleSidebar
				isSidebarOpen={isSidebarOpen}
				setIsSidebarOpen={setIsSidebarOpen}
			/>
			<aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
				<Sidebar
					isSidebarOpen={isSidebarOpen}
					setIsSidebarOpen={setIsSidebarOpen}
				/>
			</aside>
			<main className='content'>
				<Main>{children}</Main>
			</main>
		</section>
	);
}

export default PageWithSidebar;
