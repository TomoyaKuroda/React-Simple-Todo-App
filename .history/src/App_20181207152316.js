import React, { Component } from 'react';

import TodoInput from './components/TodoInput';
import TodoList from "./components/TodoList";
import SimpleStorage from "react-simple-storage";
import 'bootstrap/dist/css/bootstrap.min.css'
import uuid from 'uuid'
import "./components/style.css";
class App extends Component {
  state={
    items:[],
    id:uuid(),
    item:"",
    date:"",
    editItem:false
  }

  handleChangeItem=(e)=>{
    this.setState({
      item: e.target.value
    })
  }
    handleChangeDate=(e)=>{
    this.setState({
      date: e.target.value
    })
  }

handleSubmit=(e)=>{
e.preventDefault();

const newItem={
  id:this.state.id,
  title:this.state.item,
  date:this.state.date
}
console.log(newItem)
const updatedItems =[...this.state.items,newItem]
this.setState({
  items:updatedItems,
  item:'',
  date:'',
  id:uuid(),
  editItem:false
})
}

clearList=()=>{
  this.setState({
    items:[]
  })
}
handleDelete=(id)=>{
  const filteredItems=this.state.items.filter(item=>item.id!==id)
this.setState({
  items:filteredItems
})
}

handleEdit=id=>{
  const filteredItems = this.state.items.filter(item => item.id !== id)

  const selectedItem=this.state.items.find(item=>item.id===id)
  console.log(selectedItem)
  this.setState({
    items:filteredItems,
    item:selectedItem.title,
    date:selectedItem.date,
    editItem:true,
    id:id
  })
}

  render() {
    return (
<div className="wrapper">
      <h1 className="text-capitalize text-center">
      Todo List
      </h1>
      <TodoInput item={this.state.item} date={this.state.date} handleChangeItem={this.handleChangeItem}
      handleChangeDate={this.handleChangeDate}
      handleSubmit={this.handleSubmit}
      editItem={this.state.editItem}
      />
      <TodoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}/>
      </div>
      
    );
  }
}

export default App;
