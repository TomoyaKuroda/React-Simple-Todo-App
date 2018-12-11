import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from "./components/TodoList";
import SimpleStorage from "react-simple-storage";
import 'bootstrap/dist/css/bootstrap.min.css'
import uuid from 'uuid'
import "./components/style.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
    tasks:[],
    id:uuid(),
    item:"",
    date:"",
    editItem:false
  }
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

const updatedTasks =[...this.state.tasks,newItem]
this.setState({
  tasks:updatedTasks,
  item:'',
  date:'',
  id:uuid(),
  editItem:false
})
}


handleDelete=(id)=>{
  const filteredTasks=this.state.tasks.filter(item=>item.id!==id)
this.setState({
  tasks:filteredTasks
})
}

handleEdit=id=>{
  const filteredTasks = this.state.tasks.filter(item => item.id !== id)
  const selectedItem=this.state.tasks.find(item=>item.id===id)
  this.setState({
    tasks:filteredTasks,
    item:selectedItem.title,
    date:selectedItem.date,
    editItem:true,
    id:id
  })
}

  render() {
    return (
<div className="wrapper">
      <SimpleStorage parent={this} />
      <h1 className="text-capitalize text-center">
      Todo List
      </h1>
      <TodoInput item={this.state.item} date={this.state.date} handleChangeItem={this.handleChangeItem}
      handleChangeDate={this.handleChangeDate}
      handleSubmit={this.handleSubmit}
      editItem={this.state.editItem}
      />
      <TodoList tasks={this.state.tasks} clearList={this.clearList} handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}/>
      </div>
      
    );
  }
}

export default App;
