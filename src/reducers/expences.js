const expencesReducerDefaultState = [];

export default (state = expencesReducerDefaultState, action) => {
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

