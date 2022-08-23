import React, { useState } from "react";

const State = () => {
	const [counter, setCounter] = useState(0);

	const clickFn = () => {
		setCounter(counter + 1);
	};

	return (
		<React.Fragment>
			{/* <input></input> */}
			<h2> Day : {counter} of 100</h2>
			<button onClick={clickFn}>+</button>
		</React.Fragment>
	);
};
export default State;
