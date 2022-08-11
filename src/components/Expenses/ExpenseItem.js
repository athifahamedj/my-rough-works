import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
	// console.log(props.title);
	const [title, setTitle] = useState(props.title);
	const changeTitle = () => {
		setTitle("updated");
	};
	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">${props.amount}</div>
				<button onClick={changeTitle}>update</button>
			</div>
		</Card>
	);
};

export default ExpenseItem;
