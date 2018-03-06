import uuid from 'uuid';

//ADD_EXPENSE
export const addExpense = ({description ,price, createdAt, note } = {}) => ({
    type: 'ADD_EXPENSE',
    expenses: {
        id: uuid(),
        description,
        price,
        createdAt, 
        note
    }
});

//REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id,
});

//EDIT_EXPENSE
export const editExpense = (id, update) => ({
    type: 'EDIT_EXPENSE',
    id,
    update
})