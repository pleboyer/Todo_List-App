import React, {Component} from 'react';

class ToDoInput extends Component {
  render() {
    return (
      <div className="todo-header">
        <form>
          <input placeholder="ToDo"/>
          <button type="submit" class="btn btn-primary"> Add </button>
        </form>
      </div>
    )
  }
}

export default ToDoInput
