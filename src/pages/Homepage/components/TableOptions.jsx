import React from 'react';

function TableOptions() {
	return (
		<>
			<div className='tableOptionsSearch'>
				<label htmlFor='searchTable'>Search </label>
				<input id='searchTable' />
			</div>
			<div className='tableOptionsDrop'>
				<label htmlFor='cars'>Sort by </label>
				<select id='cars' name='cars'>
					<option value='customerName'>Customer Name</option>
					<option value='SID'>SID</option>
					<option value='stage'>stage</option>
					<option value='inwardOn'>Inward On</option>
					<option value='action'>Action</option>
				</select>
			</div>
		</>
	);
}

export default TableOptions;
