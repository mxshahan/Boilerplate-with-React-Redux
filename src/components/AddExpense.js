import React from 'react';
import {connect} from 'react-redux';
import {startAddExpense} from '../actions/expenses';
import ExpenseForm from '../components/ExpenseForm';

const AddExpense = (props) => (
  <div>
    <ExpenseForm
      onSubmit={(expense) => {
        props.startAddExpense(expense);
        props.history.push('/expenses')
      }}
    />
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expenses) => dispatch(startAddExpense(expenses))
})

export default connect(undefined, mapDispatchToProps)(AddExpense);