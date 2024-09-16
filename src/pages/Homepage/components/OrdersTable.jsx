import React, { useEffect, useState } from 'react';
import Orders from '../../../data/Orders';
import { useNavigate } from 'react-router-dom';

function OrdersTable() {
	const [data, setData] = useState([]);
	useEffect(() => {
		setData(Orders[0]);
	}, []);
	let tableHeaders = Object.keys(data);
	const navigate = useNavigate();
	return (
		<table>
			<thead>
				<tr>
					{tableHeaders.map((h) => (
						<th key={h}>{h}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{Orders.map((o) => {
					return (
						<tr
							key={o.SID}
							className='tableRow'
							onClick={() => navigate(`/order/${o.SID}`)}
						>
							<td>{o.customerName}</td>
							<td>{o.SID}</td>
							<td>{o.stage}</td>
							<td>{o.inwardOn}</td>
							<td>
								{' '}
								<span className={o.action === 'open' ? 'isActive' : ''}>
									{o.action}
								</span>
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

export default OrdersTable;
