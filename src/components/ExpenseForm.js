import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
// import data from '../data.json';
// console.log(data)

const now = moment();
export default class ExpenseForm extends React.Component{
  state = {
    description: this.props.expense ? this.props.expense.description: '', 
    price: this.props.expense ? this.props.expense.price: '', 
    note: this.props.expense ? this.props.expense.note: '', 
    err: false,
    createdAt: this.props.expense ? moment(this.props.expense.createdAt) : moment(),
    date: moment()
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {description, price} = e.target.elements;

    if(!description.value && !price.value){
        this.setState({error: 'Item Name & Price Should Not be empty', err: true})
    }else{
      this.props.onSubmit({
          description: this.state.description,
          price: this.state.price,
          createdAt: this.state.createdAt.valueOf(),
          note: this.state.note
      })
      this.setState({error: 'Expense Successfully Submitted... :)', err: false})    
    }

  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState({description});
  }

  onPriceChange = (e) => {
    const price = e.target.value;
    if(!price || price.match(/\d{1,}(\.\d{0,2})?$/)){
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
    this.setState({createdAt: date})
  }

  render(){
    return (
      <div>        
        <form id="addForm" onSubmit={this.handleSubmit}>
        {this.state.err && <p className={this.state.err ? "errMsg err": "errMsg"}>{this.state.error}</p>}
        <div className="datePicker">
          <label>Created Date: </label>
          <DatePicker
            selected={this.state.createdAt}
            onChange={this.handleChangeDate}
          />
        </div>
        <div id="top-item">
          <input 
            type="text" 
            name="description" 
            value={this.state.description}
            placeholder="item name"
            onChange={this.onDescriptionChange}
            onBlur={this.onBlurDescription}
          />
          <input 
            type="text" 
            name="price" 
            value={this.state.price}
            placeholder="price"
            onChange={this.onPriceChange}
          />
        </div>
        <textarea 
          type="text" 
          name="note" 
          value={this.state.note}
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
