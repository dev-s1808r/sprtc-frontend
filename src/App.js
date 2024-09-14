import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	// Function to toggle the sidebar
	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	return (
		<div className={`container ${isSidebarOpen ? 'sidebar-open' : ''}`}>
			{/* Toggle button */}
			<button className='toggle-button' onClick={toggleSidebar}>
				☰
			</button>
			<aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
				{/* Sidebar content */}
				<button className='close-button' onClick={toggleSidebar}>
					&times;
				</button>
				<h2>Sidebar</h2>
				<ul>
					<li>Menu Item 1</li>
					<li>Menu Item 2</li>
					<li>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem
						ipsum dolor sit amet, consectetur adipiscing elit.. Lorem ipsum
						dolor sit amet, consectetur adipiscing elit.. Lorem ipsum dolor sit
						amet, consectetur adipiscing elit.. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit.. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit..
					</li>
				</ul>
			</aside>
			<main className='content'>
				{/* Main content */}
				<h1>Main Content</h1>
				<p style={{ fontSize: '48px' }}>
					{/* Long content to demonstrate scrolling */}
					Lorem ipsum dolor sit amet, consectetur adipiscing elit..Lorem ipsum
					dolor sit amet, consectetur adipiscing elit.. Lorem ipsum dolor sit
					amet, consectetur adipiscing elit.. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit.. Lorem ipsum dolor sit amet, consectetur
					adipiscing elit.. Lorem ipsum dolor sit amet, consectetur adipiscing
					elit.. Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem
					ipsum dolor sit amet, consectetur adipiscing elit.. Lorem ipsum dolor
					sit amet, consectetur adipiscing elit.. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit.. Lorem ipsum dolor sit amet, consectetur
					adipiscing elit.. Lorem ipsum dolor sit amet, consectetur adipiscing
					elit.. Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem
					ipsum dolor sit amet, consectetur adipiscing elit.. Lorem ipsum dolor
					sit amet, consectetur adipiscing elit.. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit.. Lorem ipsum dolor sit amet, consectetur
					adipiscing elit.. Lorem ipsum dolor sit amet, consectetur adipiscing
					elit.. Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem
					ipsum dolor sit amet, consectetur adipiscing elit.. Lorem ipsum dolor
					sit amet, consectetur adipiscing elit.. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit.. Lorem ipsum dolor sit amet, consectetur
					adipiscing elit.. Lorem ipsum dolor sit amet, consectetur adipiscing
					elit.. Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem
					ipsum dolor sit amet, consectetur adipiscing elit.. Lorem ipsum dolor
					sit amet, consectetur adipiscing elit.. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit.. Lorem ipsum dolor sit amet, consectetur
					adipiscing elit.. Lorem ipsum dolor sit amet, consectetur adipiscing
					elit.. Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem
					ipsum dolor sit amet, consectetur adipiscing elit.. Lorem ipsum dolor
					sit amet, consectetur adipiscing elit.. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit.. Lorem ipsum dolor sit amet, consectetur
					adipiscing elit.. Lorem ipsum dolor sit amet, consectetur adipiscing
					elit.. Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem
					ipsum dolor sit amet, consectetur adipiscing elit.. Lorem ipsum dolor
					sit amet, consectetur adipiscing elit.. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit.. Lorem ipsum dolor sit amet, consectetur
					adipiscing elit.. Lorem ipsum dolor sit amet, consectetur adipiscing
					elit.. Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem
					ipsum dolor sit amet, consectetur adipiscing elit.. Lorem ipsum dolor
					sit amet, consectetur adipiscing elit.. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit.. Lorem ipsum dolor sit amet, consectetur
					adipiscing elit.. Lorem ipsum dolor sit amet, consectetur adipiscing
					elit.. Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem
					ipsum dolor sit amet, consectetur adipiscing elit.. Lorem ipsum dolor
					sit amet, consectetur adipiscing elit.. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit.. Lorem ipsum dolor sit amet, consectetur
					adipiscing elit..
				</p>
				{/* Repeat or add more content to ensure overflow */}
			</main>
		</div>
	);
}

export default App;
