import React from 'react';
import { connect } from 'react-redux';

// components
import ActButton from './ActButton';
import Todo from './Todo';

// actions
import {
  FILTERS,
  updateTodo,
  toggleTodo,
  deleteTodo,
  onEditTodo,
} from '../../actions';

// material-ui components
import {
  Box,
  ButtonGroup, Paper,
} from '@material-ui/core';

// interfaces
import { ITodo } from '../../actions';
import { IStoreState } from '../../reducer';

interface IProps {
  todos: ITodo[];
  onClickComplete: (id: number) => void;
  onClickDelete: (index: number) => void;
  onClickEdit: (id: number) => void;
  onChangeText: (id: number, text: string) => void;
}

const Todolist = ({
  todos,
  onClickComplete,
  onClickDelete,
  onClickEdit,
  onChangeText,
}: IProps) => {
  return (
      <>
        {todos.length ? todos.map((todo, idx) => (
            <Paper style={{ marginTop: 10, marginBottom: 10 }} elevation={4}>
              <Box display="flex" key={idx} >

                <Box  flexGrow={1}>
                  <Todo todo={todo} onChangeText={onChangeText} onClickComplete={() => onClickComplete(todo.id)}/>
                </Box>

                <Box>
                  <ButtonGroup>

                    <ActButton actType="edit" todo={todo} onClickEdit={() => onClickEdit(todo.id)}/>
                    <ActButton actType="delete" todo={todo} onClickDelete={() => onClickDelete(idx)}/>

                  </ButtonGroup>
                </Box>

              </Box >
            </Paper>
        )) : (<Box>No Todos</Box>)}
      </>
  );
};

const getFiltedTodos = (todos: ITodo[], filter: string): ITodo[] => {
  const { SHOW_COMPLETED, SHOW_ACTIVE, SHOW_ALL } = FILTERS;
  switch (filter) {
    case SHOW_COMPLETED:
      return todos.filter((t) => t.completed);
    case SHOW_ACTIVE:
      return todos.filter((t) => !t.completed);
    case SHOW_ALL:
    default:
      return todos;
  }
};

const mapStateToProps = (state: IStoreState): { todos: ITodo[] } => {
  return {
    todos: getFiltedTodos(state.todolist.todos, state.todolist.filter),
  };
};

export default connect(mapStateToProps, {
  onChangeText: updateTodo,
  onClickComplete: toggleTodo,
  onClickDelete: deleteTodo,
  onClickEdit: onEditTodo,
})(Todolist);
