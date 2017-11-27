import { createStore, combineReducers } from "redux";
import uuid from "uuid";

const addExpense = ({
  description = "",
  note = "",
  amount = "",
  createdAt = 0
}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

const editExpense = (id, update) => ({
  type: "EDIT_EXPENSE",
  id,
  update
});

const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
});

const sortByDate = () => ({
  type: "SORT_BY_DATE"
});
const setStartDate = (date = undefined) => ({
  type: "SET_START_DATE",
  date
});
const setEndDate = (date = undefined) => ({
  type: "SET_END_DATE",
  date
});

const expencesReducerDefaultState = [];
const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined //date or amount
};

const expencesReducer = (state = expencesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return (state = [...state, action.expense]);
    case "REMOVE_EXPENSE":
      return state.filter(item => item.id !== action.id);
    case "EDIT_EXPENSE":
      return state.map(expence => {
        if (expence.id === action.id) {
          return { ...expence, ...action.update };
        } else {
          return expence;
        }
      });

    default:
      return state;
  }
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return { ...state, text: action.text };
    case "SORT_BY_AMOUNT":
      return { ...state, sortBy: "amount" };
    case "SORT_BY_DATE":
      return { ...state, sortBy: "date" };
    case "SET_START_DATE":
      return { ...state, startDate: action.date };
    case "SET_END_DATE":
      return { ...state, endDate: action.date };
    default:
      return state;
  }
};

const getVisibleExtensions = (
  expences,
  { text, sortBy, startDate, endDate }
) => {
  return expences.filter(expence => {
    const startDateMatch =
      typeof startDate !== 'number' || expence.createdAt >= startDate;
    const endDateMtach =
      typeof endDate !== 'number' || expence.createdAt <= endDate;
    const textMatch = expence.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMtach && textMatch;

    // return startDateMatch && endDateMatch && textMatch
  });
};

const store = createStore(
  combineReducers({
    expences: expencesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExtensions = getVisibleExtensions(state.expences, state.filters);
  console.log(visibleExtensions);
});

const expenseOne = store.dispatch(
  addExpense({ description: "rent", amount: 100, createdAt: 1000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "coffe", amount: 140, createdAt: -1000 })
);

// console.log(expenseOne)

// store.dispatch(removeExpense({ id: expenseOne.expense.id }))

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))

store.dispatch(setTextFilter("rent"));
// store.dispatch(setTextFilter())
// store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

store.dispatch(setStartDate(0));
// store.dispatch(setStartDate())
store.dispatch(setEndDate(2500))

const demoState = {
  expenses: [
    {
      id: "sdpoitr456456",
      description: "Pay a rent",
      notes: "bla bla bla bla",
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined //date or amount
  }
};
