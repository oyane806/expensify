import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm.jsx";
import { addExpense } from "../actions/expenses.jsx";

const AddExpensePage = (props) => (
	<div>
		<ExpenseForm
		onSubmit={(expense) => {
			props.dispatch(addExpense(expense));
			props.history.push("/");
		}} />
	</div>
	);

export default connect()(AddExpensePage);