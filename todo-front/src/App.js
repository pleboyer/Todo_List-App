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
    var newItem = {
      'value':todoItem.newItem,
      'id': new Date().getTime()
    };
    fetch('/todos/',
    {
      method: 'post',
      headers: {
        'Content-Type':'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newItem)
    })
    .then(res => res.text())          // convert to plain text
    .then(text => console.log(text))  // then log it out
    .catch((error) => console.error(error));
    this.setState({
      itemsList: [...this.state.itemsList, {
        'value':todoItem.newItem,
        'id': new Date().getTime()
      }]
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
    var pView={};
    if(this.state.itemsList.length ===0){
      pView.display='none';
    }

    return (
      <div className="App container">
        <h1>TO DO APP</h1>
        <ToDoInput addItem = {this.addItem}/>
        <ToDoList itemsList={this.state.itemsList} deleteItem={this.deleteItem} editItem={this.editItem}/>
        <br/><p style={pView}>Double click on the item to edit</p>
      </div>
    )
  }
}

export default App
