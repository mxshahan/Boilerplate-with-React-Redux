import React from 'react';
import {connect} from 'react-redux';
import SelectExpenses from '../selectors/expenses';

//Components
import AddOption from './AddOption'
import Option from './Option'

class OptionsComponent extends React.Component{
    handleDelete = (item) => {
        this.props.handleDeleteItem(item);
    }

    handleEdit = (item, key) => {
        this.props.handleEditItem(item, key);
    }
    render(){
        const options = this.props.expenses.map((expense, i) => {
            return( 
                <Option 
                    {...expense}
                    key={expense.id} 
                    itemKey={expense.id}
                    handleDelete={this.handleDelete}
                    handleEdit={this.handleEdit}
                />
            )
        })
        
        return(
            <div className="options">
                <ul>{options}</ul>                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        expenses: SelectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(OptionsComponent)

