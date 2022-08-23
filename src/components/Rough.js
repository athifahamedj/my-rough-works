import React, { useState } from "react";

const Rough = () => {
	let [count, setCount] = useState(0);
	const clickFn = () => {
		setCount((count = 0));
	};
	const incrementFn = () => {
		count = count + 10;
		setCount(count);
	};
	const decrementFn = () => {
		count = count > 0 && count - 10;
		setCount(count);
	};
	// setTimeout(() => {
	// 	setCount(count + 50);
	// }, 1500);
	return (
		<React.Fragment>
			<p>Count</p> <p>{count}</p>
			<button onClick={incrementFn}>+</button>
			<button onClick={decrementFn}>-</button>
			<button onClick={clickFn}>Reset</button>
		</React.Fragment>
	);
};

export default Rough;
