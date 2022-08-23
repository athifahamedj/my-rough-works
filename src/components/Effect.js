import React, { useEffect, useState } from "react";
import axios from "axios";

function Effect() {
	const [data, setData] = useState("");
	const [count, setCount] = useState(0);

	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/posts/1")
			.then((response) => {
				setData(response.data["body"]);
				// console.log(response.data["body"]);
			});
	}, []);

	return (
		<div>
			Hello World
			<h1>{data}</h1>
			<h1>{count}</h1>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				Click
			</button>
		</div>
	);
}

export default Effect;
