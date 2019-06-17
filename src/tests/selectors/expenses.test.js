import selectExpenses from "../../selectors/expenses";

const expenses = [{
    id: "1",
    description: "gum",
    note: "",
    amount: 195,
    createdAt: 0
}, {
    id: "2",
    description: "tea",
    note: "",
    amount: 600,
    createdAt: -1000
}, {
    id: "1",
    description: "cream",
    note: "",
    amount: 4500,
    createdAt: 1000
}]

test("should filter by text value", () => {
	const filters = {
		text: "e",
		sortBy: "date",
		startDate: undefined,
		endDate: undefined
	};
	const result = selectExpenses(expenses, filters);
	expect(result).toEqual([expenses[2], expenses[1]]);
});