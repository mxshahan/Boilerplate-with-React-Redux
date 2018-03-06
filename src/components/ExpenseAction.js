import React from 'react';

const ExpenseAction = (props) => (
<div className="action">
  {console.log(props)}
  <span className="item-edot">&#9998;</span>                        
  <span className="item-remove">&#10008;</span>                        
</div>
)

export default ExpenseAction;