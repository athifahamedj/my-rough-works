import React, { useState } from "react";

const Map = () => {
	const [value, setValue] = useState("");
	const numbers = [1, 2, 3, 4, 5];

	const listItems = numbers.map((number) => (
		<li key={number.toString()}>{number}</li>
	));
	const clickMapfn = () => {
		setValue(listItems);
		console.log(listItems);
	};

	// console.log(numbers);
	return (
		<React.Fragment>
			{/* <p>test</p> */}
			<p>{value}</p>
			<button onClick={clickMapfn}>array</button>
		</React.Fragment>
	);
};

export default Map;
