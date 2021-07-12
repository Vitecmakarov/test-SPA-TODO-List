import React from 'react';
import AddTodo from './AddTodo';
import FilterLinkSet from './FilterLinkSet';
import Todolist from './Todolist';

// material-ui components
import { Grid } from "@material-ui/core";

const TodoApp = () => (
  <>
      <Grid item xs={12} sm={12}>
      <AddTodo />
      <FilterLinkSet />
      <Todolist />
    </Grid>
</>
);

export default TodoApp;
