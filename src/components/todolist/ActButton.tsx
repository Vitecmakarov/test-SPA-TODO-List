import React from 'react';

// material-ui components
import { IconButton } from '@material-ui/core';

// material-ui icons
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

// interfaces
import { ITodo } from '../../actions';

interface IProps {
    actType: string;
    onClickDelete?: () => void;
    onClickEdit?: () => void;
    todo: ITodo;
}

const ActButton = ({ actType, onClickEdit, onClickDelete, todo }: IProps) => {
  switch (actType) {
    case 'delete':
      return (
          <IconButton aria-label="Delete" disabled={todo.completed || todo.onEdit} onClick={onClickDelete}>
            <DeleteIcon/>
            Delete
          </IconButton>
      );
    case 'edit':
    default:
      return (
          <IconButton aria-label="Edit" disabled={todo.completed} onClick={onClickEdit}>
            <EditIcon/>
            {todo.onEdit ? 'Update' : 'Edit'}
          </IconButton>
      );
  }
};

export default ActButton;
