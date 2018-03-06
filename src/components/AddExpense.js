import React from 'react';
import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

const now = moment();

class AddExpense extends React.Component{
  state = {
    description: '', 
    price: '', 
    note: '',
    error: '',
    createdAt: now.format('DD-MM-YYYY'),
    date: moment()
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.createdAt)
    const {description, price} = this.state;
    if(description.length > 0 && price.length>0){
      this.props.dispatch(addExpense(this.state));
      alert('Successfully added');
      e.target.elements.description.value = ''
      e.target.elements.price.value = ''
      e.target.elements.note.value = ''
    }else{
      this.setState({error: 'Item Name & Price Should Not be empty'})
    }

  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState({description});
  }

  onPriceChange = (e) => {
    const price = e.target.value;
    if(price.match(/\d*(\.\d{0,2})?$/)){
      this.setState({price})  
    }
  } 

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState({note});
  }

  onBlurDescription = (e) => {
    if(e.target.value === ''){
      console.log('error')
    }
  }

  handleChangeDate = (date) => {
    const curDate = date.format('DD-MM-YYYY');    
    this.setState({createdAt: curDate, date})
  }

  render(){
    return (
      <div>
        {this.state.error.length > 0 && <p>{this.state.error}</p>}
        <form id="addForm" onSubmit={this.handleSubmit}>
          <div className="datePicker">
            <label>Created Date: </label>
            <DatePicker
              selected={this.state.date}
              onChange={this.handleChangeDate}
            />
          </div>
          <div id="top-item">
            <input 
              type="text" 
              name="description" 
              placeholder="item name"
              onChange={this.onDescriptionChange}
              onBlur={this.onBlurDescription}
            />
            <input 
              type="text" 
              name="price" 
              placeholder="price"
              onChange={this.onPriceChange}
            />
          </div>
          <textarea 
            type="text" 
            name="note" 
            placeholder="Add a not for your expense (optional)"
            onChange={this.onNoteChange}
          >
          </textarea>
          <input type="submit" defaultValue="Add Item"/>
        </form>
      </div>
    )
  }
}


export default connect()(AddExpense);