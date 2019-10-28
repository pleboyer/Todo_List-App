import React, { Component } from 'react'
import './App.css'
import ToDoInput from './ToDoInput'
import ToDoList from './ToDoList'
import {getItemAPI, postItemAPI, deleteItemAPI, putItemAPI} from './API'

class App extends Component {

  constructor (props) {
      super(props);
      this.addItem = this.addItem.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
      this.editItem = this.editItem.bind(this);
      //this.getListItem = this.getListItem.bind(this);
      this.state = {itemsList: []};
  }

  componentDidMount() {
    getItemAPI()
    .then(listItem => {
      this.setState({
        itemsList: listItem
      })
    })
  }

  addItem(todoItem) {
    console.log('Should print todoItem : ', todoItem);
    var newItem = {
      'value':todoItem.newItem,
      'id': new Date().getTime()
    };
    postItemAPI(newItem)
    .then(this.componentDidMount())
  }

  deleteItem(todoItem){
    var deleteItem = todoItem.deleteItem;
    deleteItemAPI(deleteItem)
    .then(this.componentDidMount())
  }

  editItem(todoItem){
    console.log('La', todoItem.updateItem)
    var updateItem = todoItem.updateItem;
    putItemAPI(updateItem.id, updateItem.value)
    .then(this.componentDidMount())
    /*var newItemList = this.state.itemsList;
    this.state.itemsList.map((item, index)=>{
      if(item.id===updateItem.id){
        newItemList.splice(index,1,updateItem);
      }
      return newItemList
    })
    this.setState({
      itemsList: newItemList
    })*/
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
