import React, { Component } from 'react'
import './App.css'
import ToDoInput from './ToDoInput'
import ToDoList from './ToDoList'

class App extends Component {

  constructor (props) {
      super(props);
      this.addItem = this.addItem.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
      this.editItem = this.editItem.bind(this);
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
    var deleteItem = todoItem.deleteItem;
    var newItemList = this.state.itemsList;
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

  editItem(todoItem){
    console.log('La', todoItem)
    var updateItem = todoItem.updateItem;
    var newItemList = this.state.itemsList;
    this.state.itemsList.map((item, index)=>{
      if(item.id===updateItem.id){
        newItemList.splice(index,1,updateItem);
      }
      return newItemList
    })
    this.setState({
      itemsList: newItemList
    })
  }

  render() {
    console.log('ItemsList', this.state.itemsList)
    return (
      <div className="App container">
        <ToDoInput addItem = {this.addItem}/>
        <ToDoList itemsList={this.state.itemsList} deleteItem={this.deleteItem} editItem={this.editItem}/>
      </div>
    )
  }
}

export default App
