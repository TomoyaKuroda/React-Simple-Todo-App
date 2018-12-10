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
  constructor(props) {
    super(props);
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleChangeDate=this.handleChangeDate.bind(this)
    this.handleChangeItem=this.handleChangeItem.bind(this)
  }
  render() {
    const{item,date,editItem}=this.props
    return (
      <div className="card card-body my-3">
        <form onSubmit={this.handleSubmit}>
        <div className="input-group">
        <TextField type="text" label="Item Name" margin="normal" required className="form-control text-capitalize"
        placeholder="add a todo item"
        value={item}
        onChange={this.handleChangeItem}>
            </TextField>
            <TextField style={space} type="date" label="Due Date" margin="normal" required InputLabelProps={{ shrink: true }} className="form-control"
              placeholder="add a todo item"
              value={date}
              onChange={this.handleChangeDate}>
            </TextField>
            <Button variant="contained" size="small" margin="normal"  type="submit" value="Submit" style={saveStyle}>
        {editItem? <EditIcon>edit_icon</EditIcon>: <SaveIcon />}
        {editItem? 'Edit': 'Save'}
        </Button>
        </div>
        </form>
      </div>
    )
  }
}
