import React from 'react';
import '../styles/base/Options.scss';
// import EditOption from './EditOption';

const Option = (props) => (
  <div>
    <li>
      <div className="items">
        <span className="item-name"><b>{props.description}</b>
          <p>{props.price} - {props.createdAt}</p>
        </span>
        {/* <div className="action">
          <span className="item-edot" onClick={this.toggleEdit}>&#9998;</span>                        
          <span className="item-remove" onClick={this.handleDelete}>&#10008;</span>                        
        </div> */}
      </div>
    </li>
  </div> 
  )

  export default Option;