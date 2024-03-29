import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter.jsx";
import configureStore from "./store/configureStore.jsx";
import { addExpense } from "./actions/expenses.jsx";
import { setTextFilter } from "./actions/filters.jsx";
import getVisibleExpenses from "./selectors/expenses.jsx";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();
console.log(store.getState());

store.dispatch(addExpense({ description: "flowers", amount: 3, createdAt: 3000, note: "blabla1" }));
store.dispatch(addExpense({ description: "chocolate", amount: 5, createdAt: 1000, note: "blabla2" }));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
	<Provider store={store}>
	<AppRouter />
	</Provider>
	);

ReactDOM.render(jsx, document.getElementById("app"));