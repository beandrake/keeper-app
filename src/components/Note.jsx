import React from 'react';

function Note(props) {
	
	const [noteState, setNoteState] = React.useState('default');

	function setStateOver() {
		setNoteState('hover');
	}

	function setStateOut() {
		setNoteState('default');
	}	
	
	const noteClasses = ['note', noteState].join(" ");

	return (
		<div className={noteClasses} onMouseOver={setStateOver} onMouseOut={setStateOut}>
			<h1>{props.title}</h1>
			<p>{props.content}</p>
		</div>
	);
}

export default Note;