import React, { Component } from 'react'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from "@material-ui/icons/Edit";
const space = {
  marginLeft: "30px"
};


const saveStyle={
  marginLeft: "30px",
  marginTop: "24px"
}

export default class TodoInput extends Component {
  render() {
    const{task,date,handleChangeTask,handleChangeDate,handleSubmit,editTask}=this.props
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
        <div className="input-group">
        <TextField type="text" label="Task Name" margin="normal" required className="form-control text-capitalize"
        placeholder="add a todo item"
        value={task}
        onChange={handleChangeTask}>
            </TextField>
            <TextField style={space} type="date" label="Due Date" margin="normal" required InputLabelProps={{ shrink: true }} className="form-control"
              value={date}
              onChange={handleChangeDate}>
            </TextField>
            <Button variant="contained" size="small" margin="normal"  type="submit" value="Submit" style={saveStyle}>
        {editTask? <EditIcon>edit_icon</EditIcon>: <SaveIcon />}
        {editTask? 'Edit': 'Save'}
        </Button>
        </div>
        </form>
      </div>
    )
  }
}
