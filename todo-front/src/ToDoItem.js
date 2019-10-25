import React, {Component} from 'react';
import './ToDoItem.css'

class ToDoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing : false,
      text : this.props.value
    }
    this.onClickDelete = this.onClickDelete.bind(this);
    this.onEditing = this.onEditing.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onKeyDownUpdate = this.onKeyDownUpdate.bind(this);
    this.onClickUpdate = this.onClickUpdate.bind(this);
  }

  onClickDelete(event){
    var deleteItem = this.props.index
    this.props.delete({deleteItem})
  }

  onEditing(event){
    this.setState({editing:true})
  }

  onEdit(event){
    this.setState({text : event.target.value})
  }

  onKeyDownUpdate(event){
    if(event.keyCode === 13){
      //var updateItem = this.props.index
      //this.props.edit({updateItem})
      this.setState({editing:false})
    }
  }

  onClickUpdate(event){
    var updateItem = this.props.index
    this.setState({editing:false})
    this.props.edit({updateItem})
  }

  render() {
    var viewItem = {};
    var editItem = {};

    if(this.state.editing){
      viewItem.display='none';
    }else{
      editItem.display ='none';
    }
    return (
      <li className="list-group-item">
          <label style={viewItem} onDoubleClick={this.onEditing}>{this.state.text}</label>
          <input style={editItem} type="text" value={this.state.text} onChange={this.onEdit} onKeyDown={this.onKeyDownUpdate}/>
          <button type="button" className="btn btn-danger float-right" onClick={this.onClickDelete}>&times;</button>
          <button type="button" className="btn btn-primary float-right" onClick={this.onClickUpdate}>Update</button>

     </li>


    )
  }
}

export default ToDoItem
