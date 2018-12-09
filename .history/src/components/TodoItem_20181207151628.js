import React, { Component } from 'react'
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";

const myStyle = {
    height: 25,
    lineHeight: '20px',
    verticalAlign: 'middle',
    width: 36,
};

const miniSpace = {
  marginLeft:'3px',
};
export default class TodoItem extends Component {
  render() {
    const {title,date,handleDelete,handleEdit}=this.props;
    return (
<TableRow>
<TableCell>{title}</TableCell>
<TableCell>{date}</TableCell>
<TableCell>
        <Fab color="secondary" aria-label="Edit" style={myStyle} onClick={handleEdit}>
            <EditIcon fontSize="small">edit_icon</EditIcon>
          </Fab>
          <IconButton onClick={handleDelete} aria-label="Delete" style={miniSpace}>
            <DeleteIcon  fontSize="small" />
          </IconButton>
</TableCell>
</TableRow>
    );
  }
}
