import React, { Component } from 'react';
import TodoItem from './TodoItem';
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
    const {items,handleDelete,handleEdit}=this.props
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
  items.map(item => {
    return(
      <TodoItem 
      key={item.id} 
      title={item.title}
      date={item.date}
      handleDelete={()=>handleDelete(item.id)}
        handleEdit={() => handleEdit(item.id)}
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
