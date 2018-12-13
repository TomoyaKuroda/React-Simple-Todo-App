import React, { Component } from "react";
import TodoInput from './components/TodoInput';
import TodoList from "./components/TodoList";
import SimpleStorage from "react-simple-storage";
import 'bootstrap/dist/css/bootstrap.min.css'
import uuid from 'uuid'
import moment from "moment";
import "./components/style.css";
import logo from "./components/logo.png";
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
    tasks:[],
    id:uuid(),
    task:"",
    date:"",
    editTask:false
  }
    this.handleChangeTask = this.handleChangeTask.bind(this)
    this.handleChangeDate=this.handleChangeDate.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleDelete=this.handleDelete.bind(this)
    this.handleEdit=this.handleEdit.bind(this)
  }

//handle submit
handleSubmit(e){
  e.preventDefault();
const newTask={
  id:this.state.id,
  task:this.state.task,
  date:this.state.date
}
//due date validation
  let registeredDay = moment(this.state.date)
  let difference = moment().diff(registeredDay, 'days');
  if (difference > 0)
  alert("It's overdue!!")
//add task if it's not overdue
  else{
const updatedTasks =[...this.state.tasks,newTask]
this.setState({
  tasks:updatedTasks,
  task:'',
  date:'',
  id:uuid(),
  editTask:false
})
}
}
//handle task change
handleChangeTask(e){
  this.setState({
    task: e.target.value
  })
}
//handle date change
  handleChangeDate(e){
  this.setState({
    date: e.target.value
  })
}
//handle delete
handleDelete(id){
  //return tasks which are not deleted
  const filteredTasks=this.state.tasks.filter(task=>task.id!==id)
this.setState({
  tasks:filteredTasks
})
}
//handle edit
handleEdit(id){
  //return tasks which are not deleted
  const filteredTasks = this.state.tasks.filter(task => task.id !== id)
  const selectedTask=this.state.tasks.find(task=>task.id===id)
  this.setState({
    tasks:filteredTasks,
    task:selectedTask.task,
    date:selectedTask.date,
    editTask:true,
    id:id
  })
}

  render() {
    return (
      <div className="wrapper">
      {/*local storage*/}
      <SimpleStorage parent={this} />
      <img src={logo} alt="logo" className="center"/>
      {/*input component*/}
      <TodoInput task={this.state.task} date={this.state.date} handleChangeTask={this.handleChangeTask}
      handleChangeDate={this.handleChangeDate}
      handleSubmit={this.handleSubmit}
      editTask={this.state.editTask}
      />
      {/*list component*/}
        <TodoList tasks={this.state.tasks} handleDelete={this.handleDelete} handleEdit={this.handleEdit} editTask={this.state.editTask}/>
      </div>
      
    );
  }
}

export default App;
