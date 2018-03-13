import React from 'react';
import {connect} from 'react-redux';
import selectExpense from '../selectors/selectExpense';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import {startEditExpense} from '../actions/expenses';
import ExpenseForm from '../components/ExpenseForm';

const EditExpenses = (props) => (
  <div>
    <ExpenseForm
      expense={props.expense}
      onSubmit={(expense) => {
        props.dispatch(startEditExpense(props.expense.id, expense));
        props.history.push('/expenses')
      }}
    />
  </div>
)

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditExpenses)