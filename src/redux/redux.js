import { createStore } from 'redux';
import book from './data.json';

const editBook = () => ({
    type: 'EDIT',
    id: 1
});

const dataReducer = ((state=book, action) => {
    switch(action.type){
        default:
            return state;
    }
});


const store = createStore(dataReducer)


const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
});

store.dispatch(editBook())


