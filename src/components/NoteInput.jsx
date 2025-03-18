import React from 'react';

function NoteInput(props) {

	const formID = "addNoteInputForm";

	const titlePlaceholder = "Title";
	const contentPlaceholder = "Content";

	// refs are state for things that shouldn't trigger re-renders
	const titleRef = React.useRef("");
	const contentRef = React.useRef("");


	function addNote() {
		// these current objects contain the whole tag and then some
		const title = titleRef.current.value;
		const content = contentRef.current.value;

		props.addNote(title, content);
		
		// clear inputs
		document.getElementById(formID).reset();
	}

	function preventDefaultReload(event){
		// The default behavior of a button in a form is to change the URL and reload the page.
		// We do not want this.
		event.preventDefault();
	}

	return (
		<form id={formID} className="noteInput" onSubmit={preventDefaultReload}>
			<input
				className="title"
				type="text"
				ref={titleRef}
				placeholder={titlePlaceholder}
			/>
			<textarea
				className="content"
				type="text"
				ref={contentRef}
				placeholder={contentPlaceholder}
			/>
			<button onMouseDown={addNote}>Add</button>
		</form>
	);
}

export default NoteInput;