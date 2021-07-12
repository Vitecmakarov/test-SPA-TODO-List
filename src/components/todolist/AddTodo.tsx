import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';

// actions
import { addTodo, deleteAllTodo } from '../../actions';

// material-ui components
import {
  Grid,
  Typography,
  IconButton,
  Paper,
  TextField,
} from '@material-ui/core';

// material-ui icons
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';

// interfaces
interface IProps {
  onClearTodo: () => void;
  onAddTodo: (input: string) => void;
}

const AddTodo = (props: IProps) => {
  const [state, setState] = useState({ text: '' });
  const history = useHistory();

  function onChange (value: string): void {
    setState({ text: value });
  }

  function handleAdd (): void {
    const { onAddTodo } = props;

    const { text } = state;

    if (text.trim().length > 0) {
      onAddTodo(text.trim());
      setState({ text: '' });
    }
  }

  function handleClear () {
    const { onClearTodo } = props;
    onClearTodo();
    history.push('/')
  }

    return (
        <Grid item xs={12} sm={12}>
          <Typography align="center" variant = "h2">Todo App:</Typography>
          <Paper style={{ paddingLeft: 16, paddingRight: 16 }} elevation={4}>
            <TextField
                id="todo"
                label="What needs to be done?"
                onChange={(e) => onChange(e.target.value)}
                fullWidth
                margin="normal"
                autoComplete="off"
            />
            <IconButton aria-label="Add" onClick={() => setTimeout(handleAdd, 3000)}>
              <AddIcon/>
              Add
            </IconButton>
            <IconButton aria-label="Clear" onClick={() => handleClear()}>
              <ClearIcon/>
              Clear all todos
            </IconButton>
          </Paper>
        </Grid >
    );
}

export default connect(null, {
  onAddTodo: addTodo,
  onClearTodo: deleteAllTodo,
})(AddTodo);
