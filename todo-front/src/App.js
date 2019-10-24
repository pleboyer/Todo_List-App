import React, { Component } from 'react'
import './App.css'
import ToDoInput from './ToDoInput'
import ToDoList from './ToDoList'

class App extends Component {

  constructor (props) {
      super(props);
      this.addItem = this.addItem.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
      this.state = {itemsList: []};
  }

  addItem(todoItem) {
    console.log('Should print todoItem : ', todoItem);
    var newItem = {'value':todoItem.newItem, 'id': new Date().getTime()}
    this.setState({
      itemsList: [...this.state.itemsList, newItem]
    });
  }

  deleteItem(todoItem){
    console.log('Je supprime', todoItem)
    var deleteItem = todoItem.deleteItem;
    console.log('this', this)
    console.log('this.state', this.state)
    var newItemList = this.state.itemsList;
    console.log('newItemList', newItemList)
    this.state.itemsList.map((item, index)=>{
      if(item.id===deleteItem){
        newItemList.splice(index,1);
      }
      return newItemList
    })
    this.setState({
      itemsList: newItemList
    })
  }

  render() {
    console.log('DATE', this.state.itemsList);
    return (
      <div className="App">
        <ToDoInput addItem = {this.addItem}/>
        <ToDoList itemsList={this.state.itemsList} deleteItem={this.deleteItem}/>
      </div>
    )
  }
}

export default App
