import React, {Component} from 'react';
import ToDoItem from './ToDoItem'

class ToDoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <ul className='todo-list'>
          <ToDoItem/>
        </ul>
    )
  }
}

export default ToDoList
