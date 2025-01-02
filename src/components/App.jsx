import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
<Note></Note>

function App() {
	return (
		<div>
			<Header />
			<Note 
				title="Deep Thoughts"
				content="Baby shark doo doo doot-doot-doot"
			/>
			<Note 
				title="Idea for Film"
				content="A young boy meets a girl and it's a coming of age story"
			/>
			<Footer />
		</div>
	);
}

export default App;