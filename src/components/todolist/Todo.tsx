import React from 'react';

// material-ui components
import {
    Box,
    Input,
    Checkbox,
    InputLabel
} from '@material-ui/core';

// interfaces
import { ITodo } from '../../actions';

interface IProps {
  todo: ITodo;
  onClickComplete: () => void;
  onChangeText: (index: number, text: string) => void;
}

const Todo = ({ todo, onClickComplete, onChangeText }: IProps) => {
  const renderContent = (item: ITodo): JSX.Element => {
    if (item.onEdit) {
      return (
        <Input
          type="text"
          value={todo.text}
          onChange={(e) => onChangeText(todo.id, e.target.value)}
          autoFocus={item.onEdit}
        />
      );
    }
      return <Box component="span" mr={2} sx={{ p: 2 }}>{item.text}</Box>
  };

  return (
      <>
          <Checkbox checked={todo.completed} onChange={() => onClickComplete()} disabled={todo.onEdit}/>
          <InputLabel style={{ textDecoration: todo.completed ? 'line-through' : 'none'}} variant="standard">
              {renderContent(todo)}
          </InputLabel>
      </>
  );
};

export default Todo;
