import React, {Component} from 'react';
import ToDoItem from './ToDoItem'

class ToDoList extends Component {
  render(){
    var items = this.props.itemsList.map((item)=>{
      return <ToDoItem ref="itemId" key={item.id} value={item.value} index={item.id} delete={this.props.deleteItem}/>
    })
    return (
      <ul className='list-group'>
        {items}
      </ul>
  )}
}

export default ToDoList
