import './homepage.css';
import OrdersTable from './components/OrdersTable';
import TableOptions from './components/TableOptions';
import { useState } from 'react';

// pass search and sort variable to both table options as well as orders table create them here

function HomePage() {
	const [showOrderDetails, setShowOrderDetails] = useState(true);
	const [orderDetails, setOrderDetails] = useState({});
	return (
		<div className='Homepage'>
			<div className='groupContainer'>
				<h3 className='groupHeader'>All Orders</h3>
				<div className='tableOptions'>
					<TableOptions />
				</div>
				<div className='tableContainer'>
					<OrdersTable />
				</div>
			</div>
			<div className='groupShift'></div>
		</div>
	);
}

export default HomePage;
