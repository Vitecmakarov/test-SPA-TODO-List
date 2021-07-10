import {
    IAddTodo,
    IUpdateTodo,
    IDeleteTodo,
    IDeleteAllTodo,
    IToggleTodo,
    IOnEditTodo,
    ISetFilter,
} from './todolist';

export enum ActionTypes {
    ADD_TODO,
    UPDATE_TODO,
    DELETE_TODO,
    DELETE_ALL_TODO,
    TOGGLE_TODO,
    SET_FILTER,
    ON_EDIT_TODO,
}

export type Action =
    | IAddTodo
    | IUpdateTodo
    | IDeleteTodo
    | IDeleteAllTodo
    | IToggleTodo
    | IOnEditTodo
    | ISetFilter