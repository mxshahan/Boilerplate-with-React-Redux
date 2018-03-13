import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter, {history} from './routers/Router';
import configureStore from './store/configureStore';
import { startSetExpense, startAddExpense, addExpense, startClearExpense} from './actions/expenses';
import { setTextFilter, sortByDate, sortByAmount } from './actions/filters';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import './styles/style.scss';
import { firebase } from './firebase/firebase';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);


let hasRender = false;
const renderApp = () => {
    if(!hasRender){
        render(jsx, document.getElementById('app'));
        hasRender = true;
    }
}

render(<p>Loading...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if(user){
        console.log('User', user)
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpense()).then(()=> {
            renderApp();
            if(history.location.pathname === '/login'){
                history.push('/')
            }
        });
    }else{
        store.dispatch(logout())
        store.dispatch(startClearExpense())
        renderApp();        
        history.push('/login')
    }
});