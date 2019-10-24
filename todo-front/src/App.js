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
    var newItem = {'value':todoItem.newItem, 'id': new Date().getTime()}
    this.setState({
      itemsList: [...this.state.itemsList, newItem]
    });
  }

  render() {
    console.log('DATE', this.state.itemsList)
    return (
      <div className="App">
        <ToDoInput addItem = {this.addItem}/>
        <ToDoList itemsList={this.state.itemsList}/>
      </div>
    )
  }
}

export default App
