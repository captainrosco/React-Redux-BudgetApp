import selectExpenses from "../../selectors/expenses";

const expenses = [
  {
    id: "1",
    description: "Gum",
    note: "",
    amount: 195,
    createdAt: 100
  },
  {
    id: "1",
    description: "Rent",
    note: "",
    amount: 1955,
    createdAt: 1
  },
  {
    id: "1",
    description: "Card",
    note: "",
    amount: 2222,
    createdAt: 12
  }
];

test("should filter by text value", () => {
  const result = selectExpenses();
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
  }
  expect(result).toEqual([expenses[2], expenses[0]]);
});
