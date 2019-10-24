import React, {Component} from 'react';

class ToDoItem extends Component {
  constructor(props) {
    super(props);
    //this.onClickRemove = this.onClickRemove.bind(this);
  }

  //onClickRemove(event){

  //}

  render() {
    return (
      <li className="list-item">
        Value to add
        <button type="button" className="btn btn-primary btn-sm" onClick={this.onClickRemove}>DELETE</button>
      </li>
    )
  }
}

export default ToDoItem
