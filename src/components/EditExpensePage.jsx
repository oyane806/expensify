import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm.jsx";
import { editExpense, removeExpense } from "../actions/expenses.jsx";

const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
        <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
        	props.dispatch(editExpense(props.expense.id, expense));
        	props.history.push("/");
        }}
        />
        <button className="edit" onClick={() => {
			props.dispatch(removeExpense({ id: props.expense.id }));
			props.history.push("/");
		}}>Remove</button>
	</div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditExpensePage);