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

	function swapNotes(index1, index2) {
		// for readability, let's adjust the names
		const first=index1;
		const second=index2;

		// make a temporary list that's safe to mutate
		const tList = [...noteList];

		// swap, then apply the state change
		[ tList[first], tList[second] ] = [ tList[second], tList[first] ];			
		setNoteList(tList);
	}

	function noteIsFirst(index) {
		return index == 0;
	}

	function noteIsLast(index) {
		return index == noteList.length-1;
	}


	// view-ish
	function displayNote(note, index) {
		return (
			<Note 
				key={note.id}
				id={note.id}
				index={index}
				title={note.title}
				content={note.content}
				removeNote={removeNote}
				swapNotes={swapNotes}
				noteIsFirst={noteIsFirst}
				noteIsLast={noteIsLast}
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