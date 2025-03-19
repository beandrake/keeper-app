import React from 'react';

function Note(props) {
	
	const [noteState, setNoteState] = React.useState('default');

	function setStateOver() {
		setNoteState('hover');
	}

	function setStateOut() {
		setNoteState('default');
	}	

	function removeNote() {
		props.removeNote(props.id);		
	}

	function moveLeft() {
		props.swapNotes(props.index, props.index-1);
	}

	function moveRight() {
		props.swapNotes(props.index, props.index+1);
	}

	
	const noteClasses = ['note', noteState].join(" ");
	
	return (
		<div className={noteClasses} onMouseOver={setStateOver} onMouseOut={setStateOut}>
			<h1>{props.title}</h1>
			<p>{props.content}</p>
			{ props.noteIsFirst(props.index) ? null : <button onMouseDown={moveLeft}>←</button> }
			<button onMouseDown={removeNote}>DELETE</button>
			{ props.noteIsLast(props.index) ? null : <button onMouseDown={moveRight}>→</button> }
		</div>
	);
}

export default Note;