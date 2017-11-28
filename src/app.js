import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { editExpense, addExpense, removeExpense } from "./actions/expences";
import {
  setEndDate,
  setStartDate,
  setTextFilter,
  sortByAmount,
  sortByDate
} from "./actions/filters";
import {getVisibleExpenses} from './selectors/expences'
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

store.dispatch(
  addExpense({ description: "Water Bill", amount: 230, createdAt: 100 })
);
store.dispatch(addExpense({ description: "Gas", amount: 130, createdAt: 200 }));
store.dispatch(setTextFilter("bill"))

  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expences, state.filters);
  console.log(visibleExpenses)
  


ReactDOM.render(<AppRouter />, document.getElementById("app"));
