import React, { Component } from 'react'
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SaveIcon from '@material-ui/icons/Save';

export default class TodoInput extends Component {
  render() {
    const{item,date,handleChangeItem,handleChangeDate,handleSubmit,editItem}=this.props
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
        <div className="input-group">
        <TextField type="text" label="Item Name" margin="normal" required className="form-control text-capitalize"
        placeholder="add a todo item"
        value={item}
        onChange={handleChangeItem}>
            </TextField>
            <TextField type="date" label="Due Date" margin="normal" required InputLabelProps={{ shrink: true }} className="form-control"
              placeholder="add a todo item"
              value={date}
              onChange={handleChangeDate}>
            </TextField>
        </div>
        <button type="submit" 
        className={
          editItem ? 
          "btn btn-block btn-success mt-3"
            :"btn btn-block btn-primary mt-3"
        }>
        {editItem? 'edit  item': 'add item'}</button>
        </form>
      </div>
    )
  }
}
