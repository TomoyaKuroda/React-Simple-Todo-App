import React, { Component } from 'react'
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";

const myStyle = {
    height: 25,
    lineHeight: '20px',
    verticalAlign: 'middle',
    width: 36,
};

const miniSpace = {
  marginLeft:'5px',
};
export default class TodoTask extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <TableRow>
        <TableCell>{this.props.task}</TableCell>
        <TableCell>{this.props.date}</TableCell>
        <TableCell>{
          //hide edit button while editting
          !this.props.editTask && 
          <Fab color="secondary" aria-label="Edit" style={myStyle} onClick={this.props.handleEdit}>
            <EditIcon fontSize="small">edit_icon</EditIcon>
          </Fab>
          }
          <IconButton onClick={this.props.handleDelete} aria-label="Delete" style={miniSpace}>
            <DeleteIcon fontSize="small" />
          </IconButton>
        </TableCell>
      </TableRow>;
  }
}
