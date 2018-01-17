import { addExpense, editExpense, removeExpense } from "../actions/expenses";

test("should setup remove expnese action object", () => {
  const action = removeExpense({ id: "123" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123"
  });
});

test("should setup edit expense action", () => {
  const action = editExpense("123", { note: "New note value" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123",
    updates: {
      note: "New note value"
    }
  });
});

test("Should setup app expense action object with provided values", () => {
  const expenseData = {
    description: "rent",
    amount: 109500,
    createdAt: 1000,
    note: "This was last months rent"
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

text("Should setup add expnese action object default values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0
    }
  });
});
