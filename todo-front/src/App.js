import React, { Component } from 'react'
import './App.css'
import ToDoInput from './ToDoInput'
import ToDoList from './ToDoList'

class App extends Component {

  constructor (props) {
      super(props);
      this.addItem = this.addItem.bind(this);
      this.state = {itemsList: []};
  }

  addItem(todoItem) {
    console.log('Should print todoItem : ', todoItem);
    this.setState({
      itemsList: [...this.state.itemsList, todoItem.newItem]
    });
  }

  render() {
    return (
      <div className="App">
        <ToDoInput addItem = {this.addItem}/>
        <ToDoList itemsList={this.state.itemsList}/>
      </div>
    )
  }
}

export default App
