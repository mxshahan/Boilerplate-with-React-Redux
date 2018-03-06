import React from 'react';
import '../styles/base/Options.scss';
import EditOption from './EditOption';

export default class Option extends React.Component{
    state = {
        edit: true
    }

    handleDelete = (e) => {
        this.props.handleDelete(this.props.itemKey)
    }

    toggleEdit = (e) => {
        this.setState({
            edit: false
        })
    }

    handleEdit = (option, key) => {
        if(option){
            this.setState({
                edit: true
            })
        }
        this.props.handleEdit(option, key)
    }

    render(){
        return(
            <div>
                {this.state.edit ? 
                <li>
                    <div className="items">
                        <span className="item-name"><b>{this.props.itemValue.description}</b><br/>
                            <br/>
                            <p>{this.props.itemValue.price}</p>
                        </span>
                        <div className="action">
                            <span className="item-edot" onClick={this.toggleEdit}>&#9998;</span>                        
                            <span className="item-remove" onClick={this.handleDelete}>&#10008;</span>                        
                        </div>
                    </div>
                </li>
                : 
                <EditOption 
                    Text={this.props.itemValue}
                    handleEdit={this.handleEdit}
                    Key={this.props.itemKey}
                />}
            </div> 
        )
    }
}