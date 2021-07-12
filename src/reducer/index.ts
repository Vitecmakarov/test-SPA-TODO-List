import { combineReducers } from 'redux';
import { todolist } from './todolist';
import { ITodolist } from '../actions';

export interface IStoreState {
    todolist: ITodolist;
}

export const rootReducer = combineReducers<IStoreState>({
    todolist
});