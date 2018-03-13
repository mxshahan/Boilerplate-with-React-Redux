import React from 'react';
import { Link } from 'react-router-dom';
import AddExpense from '../components/AddExpense';
const CreateExpense = (props) => (
    <div>
        <h1>Create New Expense</h1>
        <p>Fill out the form accordingly</p>
        <AddExpense history={props.history}/>
    </div>
);
export default CreateExpense;