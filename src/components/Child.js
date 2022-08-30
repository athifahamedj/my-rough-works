import React from "react";

function Child(props) {
	const clickFn = () => {
		const data = "Days 30 of 100";
		props.tochildData(data);
	};
	return (
		<React.Fragment>
			<button onClick={clickFn}>CLICK</button>
		</React.Fragment>
	);
}

export default Child;
