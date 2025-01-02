import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import noteList from '../notes';

function createNote(note) {
	return (
		<Note 
			key={note.id}
			title={note.title}
			content={note.content}
		/>
	);
}


function App() {
	return (
		<div>
			<Header />
			{noteList.map(createNote)}
			<Footer />
		</div>
	);
}

export default App;