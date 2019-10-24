import React, {Component} from 'react';

class ToDoItem extends Component {
  constructor(props) {
    super(props);
    this.onClickDelete = this.onClickDelete.bind(this);
  }

  onClickDelete(event){
    var deleteItem = this.props.index
    this.props.delete({deleteItem})
  }

  render() {
    return (
      <li className="list-group-item">
        {this.props.value}
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary">Update</button>
          <button type="button" className="btn btn-danger" onClick={this.onClickDelete}>&times;</button>
        </div>
     </li>
    )
  }
}

export default ToDoItem
