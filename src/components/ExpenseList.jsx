import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem.jsx";
import selectExpenses from "../selectors/expenses.jsx";

const ExpenseList = (props) => (
	<div>
		<h1>Expense list</h1>
		{props.expenses.map((expense) => {
			return <ExpenseListItem key={expense.id} {...expense}/>
		})}
	</div>
	);

const mapStateToProps = (state) => {
	return {
		expenses: selectExpenses(state.expenses, state.filters)
		// filters: state.filters // If I want to access filters from the store
	};
};

export default connect(mapStateToProps)(ExpenseList);

// As the store changes, the component will be rerendered with the new value.
// 1. We set up provider inside of the root application.
// This let us defined the store that we want to provide to all of our components.
// 2. We create new higher order components using the connect function provided from react-redux.
// We define the things that we want to get off of the store and we define the component that we want to create the connected version of.
// The end result is a brand new component which is just our component with the props from the store.
// This is going to allow us to create simple components and scale our application.