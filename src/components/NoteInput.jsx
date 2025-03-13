import React from 'react';

function NoteInput(props) {

	const titlePlaceholder = "Title";
	const contentPlaceholder = "Content";

	// refs are state for things that shouldn't trigger re-renders
	const titleRef = React.useRef("");
	const contentRef = React.useRef("");


	function AddNote() {
		// these current objects contain the whole tag and then some
		const title = titleRef.current.value;
		const content = contentRef.current.value;

		props.addNote(title, content);
	}

	return (
		<div className="noteInput">
			<p>Create a New Note</p>
			<input
				type="text"
				ref={titleRef}
				placeholder={titlePlaceholder}
			/>
			<input
				type="text"
				ref={contentRef}
				placeholder={contentPlaceholder}
			/>
			<button onMouseDown={AddNote}>Add Note</button>
		</div>
	);
}

export default NoteInput;