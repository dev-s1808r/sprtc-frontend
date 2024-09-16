import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AsideNotes from './AsideNotes';
import Logo from './Logo';
import NotesModal from './NotesModal';

function Main({ children }) {
	const [showNotesModal, setShowNotesModal] = useState(false);
	return (
		<div className='mainContent'>
			<div className='header'></div>
			<div className='dashboard'>
				{children}
				<Outlet />
			</div>
			<aside className='sideNotes'>
				<AsideNotes
					showNotesModal={showNotesModal}
					setShowNotesModal={setShowNotesModal}
				/>
			</aside>
			<div className='footer'>
				<Logo />
			</div>
			{showNotesModal ? (
				<NotesModal
					showNotesModal={showNotesModal}
					setShowNotesModal={setShowNotesModal}
				/>
			) : null}
		</div>
	);
}

export default Main;
