import React from 'react';
import {connect} from 'react-redux';
import {removeExpenseData} from '../actions/expenses';
import '../styles/base/Options.scss';
import { Link } from 'react-router-dom'

const Expense = ({dispatch, id, description, price, createdAt, note}) => (
  <li className="expenses">
    <div className="items">
      <span className="item-name">{description}</span>
      <div className="description">
        <p> Amount: {price} - Created At: {createdAt}</p>
      </div>
      
      <div className="action">
        <span className="item-edot"><Link to={`/expenses/edit/${id}`}>&#9998;</Link></span>                        
        <span className="item-remove" id={id} onClick={(e) => {
          dispatch(removeExpenseData(id)) 
        }}>&#10008;</span>                        
      </div>      
    </div>
    {note && <p className="note">Notes: {note}</p>}
  </li>
)

export default connect()(Expense);