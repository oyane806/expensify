import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";


const ExpenseListItem = ({ id, description, amount, createdAt, note }) => (
	<div className="flex-table row">
		<Link to={`/edit/${id}`} className="flex-row modify-link">
		<span>{description}</span>
		</Link>
		<span className="flex-row">{note}</span>
		<span className="flex-row end">{numeral(amount / 100).format("$0,0.00")}</span>
		<span className="flex-row end">{moment(createdAt).format("MMM Do")}</span>
	</div>
	);


export default ExpenseListItem;
// We export the connected component.