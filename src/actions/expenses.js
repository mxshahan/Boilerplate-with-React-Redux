import uuid from 'uuid';
import database from '../firebase/firebase';

//ADD_EXPENSE
export const addExpense = (expenses) => ({
    type: 'ADD_EXPENSE',
    expenses
});

//SET_EXPENSE
export const setExpense = (expenses) => ({
    type: 'SET_EXPENSE',
    expenses
})

//REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id,
});

export const clearExpense = () => ({
    type: 'CLEAR_EXPENSE',
})

//EDIT_EXPENSE
export const editExpense = (id, update) => ({
    type: 'EDIT_EXPENSE',
    id,
    update
});


//Start Add Expense with Thunk
export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            price = 0, 
            createdAt = '', 
            note = ''
        } = expenseData;

        const expenses = {description, price, createdAt, note};

        database.ref('expenses').push(expenses).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expenses
            }))
        }).catch((e) => {
            console.log('Error Found', e)
        })
    }
}

export const startSetExpense = () => {
    return (dispatch) => {
        return database.ref('expenses').once('value').then((snap) => {
            const expenses = [];
            snap.forEach((shot) => {
                dispatch(setExpense({
                    id: shot.key,
                    ...shot.val()
                }))
            })
            // console.log(expenses)
            // dispatch(setExpense(expenses))           
        }).catch(e => {
            console.log(e, 'Error Occure While Getting Data')
        })
    }
}

//Removing Expense Data
export const removeExpenseData = (id) => {
    return (dispatch) => {
        // console.log(id)
        database.ref('expenses').child(id).remove().then((snap) => {
            dispatch(removeExpense({id}))
        }).catch(e => {
            console.log('Error Occur While Removing')            
        })
    }
}

//Start Editing Data
export const startEditExpense = (id, update) => {
    return (dispatch) => {
        database.ref('expenses').child(id).update(update).then((snap) => {
            // console.log(snap.key, snap.val())
            dispatch(editExpense(id, update));
        }).catch(e => {
            console.log('Error Occur While Editing')
        })
    }
}

export const startClearExpense = () => {
    return (dispatch) => {
        dispatch(clearExpense());        
    }
}

