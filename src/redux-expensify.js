import { createStore, combineReducers } from "redux";
import uuid from "uuid";

//Actions
const addExpense = ({
  description = "",
  note = ("".amount = 0),
  createdAt = 0
} = {}) => {
  return {
    type: "ADD_EXPENSE",
    expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
    }
  };
};

const removeExpense = ({id}={}) => ({
  type: 'REMOVE_EXPENSE'
})

//Reducers

const expensesReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [
        ...state, action.expense
      ];
      case 'REMOVE_EXPNSE':
       return [
         state.filter((id)=> {
            return id !== action.id;
         })
       ];
    default:
      return state;
  }
};

const filtersReducerDefaultstate = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultstate, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    expneses: expensesReducer,
    fitlers: filterReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addExpnese({ description: "rent", amount = 100 }));
store.dispatch(removeExpense({}))