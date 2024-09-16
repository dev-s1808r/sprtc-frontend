import { useCallback, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import PageWithSidebar from './layout/PageWithSidebar';
import HomePage from './pages/Homepage/HomePage';
import OrderPage from './pages/Order/OrderPage';

function App() {
	const handleKeyPress = useCallback((event) => {
		console.log(`Key pressed: ${event.key}`);
	}, []);

	useEffect(() => {
		document.addEventListener('keydown', handleKeyPress);
		return () => {
			document.removeEventListener('keydown', handleKeyPress);
		};
	}, [handleKeyPress]);

	return (
		<PageWithSidebar>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/order/:id' element={<OrderPage />}>
					<Route path='incoming' element={'Incoming'} />
					<Route path='checksheet' element={'checkSheet'} />
					<Route path='damagereport' element={'damageReport'} />
					<Route path='inspectionreport' element={'inspectionReport'} />
					<Route path='oldBearing' element={'oldBearing'} />
					<Route path='newBearing' element={'newBearing'} />
					<Route path='electricaltest' element={'electricalTest'} />
					<Route path='finalinspection' element={'finalInspection'} />
					<Route path='testingtalance' element={'testingBalance'} />
				</Route>
				<Route path='/user-dashboard' element={<h1>User dashboard</h1>} />
				<Route path='/admin-console' element={<h1>Admin console</h1>} />
				<Route path='/help-desk' element={<h1>Help desk</h1>} />
				<Route path='/request-report' element={<h1>Request Report</h1>} />
			</Routes>
		</PageWithSidebar>
	);
}

export default App;
