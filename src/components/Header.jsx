import React from 'react';

function Header() {
	const [minorVersion, setMinorVersion] = React.useState(0);
	
	function increaseMinorVersion() {
		setMinorVersion(minorVersion + 1);
	}
	function decreaseMinorVersion() {
		setMinorVersion(minorVersion > 0 ? minorVersion - 1 : 0);
	}

	return (
		<header>
			<h1>Keeper - v1.{minorVersion}</h1>
			<div>
				<button onMouseDown={decreaseMinorVersion}>-</button>
				<button onMouseDown={increaseMinorVersion}>+</button>
			</div>
		</header>
	);
}

export default Header;