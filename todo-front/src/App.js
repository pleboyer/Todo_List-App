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
    //var newItems = []
    //newItems.push({value: todoItem.newItem});
    //console.log('Should print newItems : ', newItems);
    this.setState({
      itemsList: [...this.state.itemsList, todoItem.newItem]
    });
    console.log('Should print itemList : ', this.state.itemsList);
  }

  render() {
    return (
      <div className="App">
        <ToDoInput addItem = {this.addItem}/>
        {this.state.itemsList}
      </div>
    )
  }
}

export default App
