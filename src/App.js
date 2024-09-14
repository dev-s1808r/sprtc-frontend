import { Route, Routes } from 'react-router-dom';
import './App.css';
import PageWithSidebar from './layout/PageWithSidebar';

function App() {
	return (
		<PageWithSidebar>
			<Routes>
				<Route path='/' element={<h1>Main application</h1>} />
				<Route path='/user-dashboard' element={<h1>User dashboard</h1>} />
				<Route path='/admin-console' element={<h1>Admin console</h1>} />
				<Route path='/help-desk' element={<h1>Help desk</h1>} />
				<Route path='/request-report' element={<h1>Request Report</h1>} />
			</Routes>
		</PageWithSidebar>
	);
}

export default App;
