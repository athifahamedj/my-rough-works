import React, { useRef } from "react";

const State = () => {
	const refData = useRef(0);
	let getRefData;
	const clickFn = () => {
		getRefData = refData.current.value;
		console.log(getRefData);
	};

	return (
		<React.Fragment>
			{/* <h2> Day : {counter} of 100</h2> */}
			<label>Enter Data : </label>
			<input type="text" ref={refData}></input> <br />
			<label>Your Data : </label>
			<input type="text" value={getRefData}>
				{getRefData}
			</input>
			<button onClick={clickFn}>+</button>
		</React.Fragment>
	);
};
export default State;
