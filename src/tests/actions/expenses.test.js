import { addExpense, editExpense, removeExpense } from "../../actions/expenses.jsx";

test("should setup remove expense action object", () => {
    const action = removeExpense({ id: "123abc" });
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123abc"
    });
});

test("shouls setup edit expense action object", () => {
    const action = editExpense("123abc", { note: "new note value" });
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "123abc",
        updates: {
            note: "new note value"
        }
    });
});

test("should setup add expense action object with provided values", () => {
    const expenseData = {
        description: "flowers",
        amount: 5,
        createdAt: 1000,
        note: "blue flowers"
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

test("should setup add expense action object with default value", () => {
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