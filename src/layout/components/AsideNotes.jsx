import React from 'react';

function AsideNotes({ showNotesModal, setShowNotesModal }) {
	return (
		<>
			<button
				className='buttonAddNotes'
				onClick={() => setShowNotesModal(!showNotesModal)}
			>
				Add Note
			</button>
			<div className='notesContainer'>
				<p className='note'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
					ipsam ab debitis vel corporis numquam, voluptates nobis pariatur.
				</p>
				<p className='note'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
					ipsam ab debitis vel corporis numquam, voluptates nobis pariatur.
				</p>
				<p className='note'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
					ipsam ab debitis vel corporis numquam, voluptates nobis pariatur.
				</p>
				<p className='note'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
					ipsam ab debitis vel corporis numquam, voluptates nobis pariatur.
				</p>
				<p className='note'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
					ipsam ab debitis vel corporis numquam, voluptates nobis pariatur.
				</p>
				<p className='note'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
					ipsam ab debitis vel corporis numquam, voluptates nobis pariatur.
				</p>
				<p className='note'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
					ipsam ab debitis vel corporis numquam, voluptates nobis pariatur.
				</p>
			</div>
		</>
	);
}

export default AsideNotes;
