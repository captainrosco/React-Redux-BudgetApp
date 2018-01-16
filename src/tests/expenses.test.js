import {
  addExpense,
  editExpense,
  removeExpense
} from "../actions/expenses";

test("should setup remove expnese action object", () => {
  const action = removeExpense({ id: "123" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123"
  });
});

test("should setup edit expense action", () => {
  const action = editExpense('123', { note: "New note value" });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123',
    updates: {
      note: 'New note value'
    }
  });
});
