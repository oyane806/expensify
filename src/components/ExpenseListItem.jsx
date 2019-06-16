import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = ({ id, description, amount, createdAt, note }) => (
	<div className="flex-table row">
		<Link to={`/edit/${id}`} className="flex-row modify-link">
		<span>{description}</span>
		</Link>
		<span className="flex-row">{note}</span>
		<span className="flex-row end">{amount}</span>
		<span className="flex-row end">{createdAt}</span>
	</div>
	);


export default ExpenseListItem;
// We export the connected component.