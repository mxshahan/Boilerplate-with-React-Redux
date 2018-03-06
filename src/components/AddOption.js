import React from 'react';
import '../styles/base/AddOption.scss'

export default class AddOption extends React.Component{
    state = {
        error: undefined
    }

    AddOption = (e) => {
        e.preventDefault();
        const item = e.target.elements.add.value;
        const error = this.props.handleAddOption(item);
        this.setState({
            error
        })
        e.target.elements.add.value = '';
    }

    render(){
        return(
            <div>
                {this.state.error && <p className="error">{this.state.error}</p>}
                <form id="addForm" onSubmit={this.AddOption}>
                    <input type="text" name="add"/>
                    <input type="submit" defaultValue="Add Item"/>
                </form>
            </div>
        )
    }
}