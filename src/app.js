import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { editExpense, addExpense, removeExpense } from "./actions/expenses";
import {
  setEndDate,
  setStartDate,
  setTextFilter,
  sortByAmount,
  sortByDate
} from "./actions/filters";
import { getVisibleExpenses } from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

store.dispatch(
  addExpense({ description: "Water Bill", amount: 230, createdAt: 100 })
);
store.dispatch(addExpense({ description: "Gas", amount: 130, createdAt: 200 }));
store.dispatch(setTextFilter("bill"));

setTimeout(() => {
  store.dispatch(setTextFilter(""));
}, 3000);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("app")
);
