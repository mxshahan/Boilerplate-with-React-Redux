import React from 'react';
import '../styles/base/EditOption.scss'

export default class EditOption extends React.Component{
    
    handleEdit = (e) => {
        e.preventDefault();
        const value = this.refs.item_edit.value;
        this.props.handleEdit(value, this.props.Key);
        this.refs.item_edit.value='';
    }


    render(){
        return(
            <div>
                <form id="edit" onSubmit={this.handleEdit}>
                    <input type="text" ref="item_edit" defaultValue={this.props.Text}/>
                    <input type="submit" defaultValue="Update"/>
                </form>
            </div>
        )
    }
}