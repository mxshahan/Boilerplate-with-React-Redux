import {createStore, combineReducers} from 'redux';
import {expenses, filters} from './data.json';
import uuid from 'uuid';





store.subscribe( () => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

// store.dispatch({
//     type: 'cutOut'
// });

const storeOne = store.dispatch(addExpense({description: 'Rent', price: 1000, createdAt: 2100}));
const storeTwo = store.dispatch(addExpense({description: 'Bus', price: 2100, createdAt: 100}));
const storeThree = store.dispatch(addExpense({description: 'Truck', price: 3200, createdAt: 300}));

// store.dispatch(removeExpense({id: storeOne.expenses.id}));
// store.dispatch(editExpense(storeTwo.expenses.id, {description: 'Bus Rent', price: '101010'}));

// store.dispatch(setTextFilter())

// store.dispatch(setStartDate(-1000))
// store.dispatch(setEndDate(1200))

store.dispatch(sortByDate());
store.dispatch(sortByAmount());
 
// store.dispatch(setTextFilter('shop'))
