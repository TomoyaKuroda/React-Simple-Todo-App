import React, { Component } from 'react';
import TodoTask from './TodoTask';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell>Due Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
{
  this.props.tasks.map(item => {
    return(
      <TodoTask 
      key={item.id} 
      task={item.task}
      date={item.date}
      handleEdit={() => this.props.handleEdit(item.id)}
      handleDelete={()=>this.props.handleDelete(item.id)}
      editTask={this.props.editTask}
      />
    )
  })
}
         </TableBody>
        </Table>
      </Paper>
    )
  }
}
