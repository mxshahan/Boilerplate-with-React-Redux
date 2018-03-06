import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => (
    <div>
        <h3>{props.filters.text}</h3>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        filters: state.filters
    }
}

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

export default ConnectedExpenseList;