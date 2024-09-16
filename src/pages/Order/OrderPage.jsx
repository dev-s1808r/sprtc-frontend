import React from 'react';
import { useNavigate } from 'react-router-dom';

function OrderPage() {
	const navigate = useNavigate();
	return (
		<div>
			<h3 className='groupHeader'>Order Incoming Details</h3>
			<h3 className='groupHeader'>Report and Status form</h3>
		</div>
	);
}

export default OrderPage;
