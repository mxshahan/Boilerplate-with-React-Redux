import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/Router';
import configureStore from './store/configureStore';
import {addExpense, removeExpense, editExpense} from './actions/expenses';
import { setTextFilter, sortByDate, sortByAmount } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './styles/style.scss';

const store = configureStore();

// store.subscribe(() => {
//     console.log(store.getState())
// })

//addExpense
store.dispatch(addExpense({description: 'Water Bill', price: '6300', createdAt: 2017, note: 'Not available'}));
store.dispatch(addExpense({description: 'Gas Bill', price: '3400', createdAt: 2018}));
store.dispatch(addExpense({description: 'Home Rent', price: '32400', createdAt: 2013, note: 'Note available'}));
// store.dispatch(setTextFilter('bill'));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters); 


const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);



ReactDOM.render(jsx, document.getElementById('app'));