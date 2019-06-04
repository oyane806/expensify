import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter.jsx";
import configureStore from "./store/configureStore.jsx";
import { addExpense } from "./actions/expenses.jsx";
import { setTextFilter } from "./actions/filters.jsx";
import getVisibleExpenses from "./selectors/expenses.jsx";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();
console.log(store.getState());

store.dispatch(addExpense({ description: "water bill", amount: 100, createdAt: 1000 }));
store.dispatch(addExpense({ description: "gas bill", amount: 300, createdAt: -1000 }));
store.dispatch(setTextFilter("water"));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

ReactDOM.render(<AppRouter />, document.getElementById("app"));