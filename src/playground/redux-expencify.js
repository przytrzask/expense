import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = ({ description = "", note = "", amount = "", createdAt = 0 }) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }

})

const removeExpense = ({id} ={}) => ({
  type: "REMOVE_EXPENSE",
  id

})

const editExpense = (id, update) => ({
  type: "EDIT_EXPENSE",
  id,
  update

})

const expencesReducerDefaultState = []
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined //date or amount
}

const expencesReducer = (state = expencesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return state = [...state, action.expense]
      case "REMOVE_EXPENSE":
      return state.filter(item => item.id !== action.id )
      case "EDIT_EXPENSE":
      return state.map(expence => {
        console.log(expence)
        console.log(action)
        if (expence.id === action.id) {
          console.log(action.update)
          return {...expence, ...action.update}
        } else {
          return expence
        }
      })

    default: return state
  }
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default: return state;
  }
}

const store = createStore(combineReducers({
  expences: expencesReducer,
  filters: filtersReducer
}))

store.subscribe(() => {
  console.log(store.getState
    ())
})

const expenseOne = store.dispatch(addExpense({ description: "rent", amount: 100 }))
const expenseTwo = store.dispatch(addExpense({ description: "coffe", amount: 140 }))

console.log(expenseOne)

store.dispatch(removeExpense({ id: expenseOne.expense.id }))

store.dispatch(editExpense( expenseTwo.expense.id, {amount: 500}))



const demoState = {
  expenses: [{
    id: "sdpoitr456456",
    description: "Pay a rent",
    notes: "bla bla bla bla",
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined //date or amount
  }
}