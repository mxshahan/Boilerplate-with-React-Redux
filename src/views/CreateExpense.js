import React from 'react';
import { Link } from 'react-router-dom';
import AddExpense from '../components/AddExpense';
const Help = () => (
    <div>
        <h1>Create New Expense</h1>
        <p>Fill out the form accordingly</p>
        <AddExpense/>
    </div>
);
export default Help;