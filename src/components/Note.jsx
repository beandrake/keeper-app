import React from 'react';

const stateDefault = 'default';
const stateHover = 'hover';


function Note(props) {
	
	const [noteState, setNoteState] = React.useState('default');

	function setStateOver() {
		setNoteState(stateHover);
	}

	function setStateOut() {
		setNoteState(stateDefault);
	}	

	function removeNote() {
		props.removeNote(props.id);		
	}

	function swapWith(otherIndex) {
		// When the notes swap, this note will no longer be under the cursor...
		// ...but since the cursor didn't move, onMouseOut won't be triggered.
		// So remove the hover state before the swap.
		setNoteState(stateDefault);		
		props.swapNotes(props.index, otherIndex);
	}

	function moveLeft() {
		swapWith(props.index-1);
	}

	function moveRight() {
		swapWith(props.index+1);
	}

	
	const noteClasses = ['note', noteState].join(" ");
	
	return (
		<div className={noteClasses} onMouseOver={setStateOver} onMouseOut={setStateOut}>
			<h1>{props.title}</h1>
			<p>{props.content}</p>
			<div className="buttonTray" />
			{ props.noteIsFirst(props.index) ? null : <button onMouseDown={moveLeft} className="left">←</button> }
			<button onMouseDown={removeNote} className="delete">X</button>
			{ props.noteIsLast(props.index) ? null : <button onMouseDown={moveRight} className="right">→</button> }
		</div>
	);
}

export default Note;