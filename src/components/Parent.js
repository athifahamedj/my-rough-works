import React, { useState } from "react";
import Child from "./Child";

function Parent() {
	const [days, setDays] = useState("");
	const toChild = (props) => {
		setDays(props);
		// console.log(props);
	};
	return (
		<React.Fragment>
			<h2></h2>

			<Child tochildData={toChild} />
			<h3>{days}</h3>
		</React.Fragment>
	);
}

export default Parent;
