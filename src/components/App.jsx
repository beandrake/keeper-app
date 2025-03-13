import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import NoteInput from './NoteInput';
import defaultNoteList from '../notes';


function App() {

	// model-ish
	const nextNoteListIndexRef = React.useRef(100);
	const [noteList, setNoteList] = React.useState(defaultNoteList);

	function addNote(title, content) {
		
		const newNote = {
			id: nextNoteListIndexRef.current,				// to do: generate unique ids in a real way
			title: title,
			content: content,
		};
		
		nextNoteListIndexRef.current+=1;

		setNoteList(
			[ ...noteList,	newNote ]
		);
	}

	function removeNote(id) {
		setNoteList(
			noteList.filter( note => note.id !== id)
		);	
	}


	// view-ish
	function displayNote(note) {
		return (
			<Note 
				key={note.id}
				title={note.title}
				content={note.content}
			/>
		);
	}
	
	return (
		<div>
			<Header />
			<NoteInput addNote={addNote} />
			{noteList.map(displayNote)}
			<Footer />
		</div>
	);
}

export default App;