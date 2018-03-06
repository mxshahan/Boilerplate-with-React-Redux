import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';
import SelectExpenses from '../selectors/expenses';
import Expense from '../components/Expense';
import ExpenseFilter from '../components/ExpenseFilter';
import AddExpense from '../components/AddExpense';
import '../styles/base/expenses.scss';


const Expenses = (props) => (
  <div>
    <ExpenseFilter/>
    <ul>
      {props.expenses.map((expense) => {
        return <Expense key={expense.id} {...expense}/>
      })}
    </ul>
  </div>
)

const mapStateToProps = (state) => {
  return{
    expenses: SelectExpenses(state.expenses, state.filters)
  }
}

export default connect(mapStateToProps)(Expenses);