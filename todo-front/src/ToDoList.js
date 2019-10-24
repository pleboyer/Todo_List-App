import React, {Component} from 'react';
import ToDoItem from './ToDoItem'

class ToDoList extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    var items = this.props.itemsList.map((item)=>{
      return <li>{item}</li>
    })
    console.log('ICI', items);
    return (
      <ul className='todo-list'>
        {items}
      </ul>
  )}
}

export default ToDoList
