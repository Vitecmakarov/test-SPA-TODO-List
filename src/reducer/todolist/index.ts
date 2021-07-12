import { ITodolist, Action, FILTERS } from '../../actions';
import filter from './Filter';
import todos from './Todos';

const dataLocalStorage = JSON.parse(localStorage.getItem('todolist') as string);

const iniState = dataLocalStorage || {
    filter: FILTERS.SHOW_ALL,
    todos: []
};

export function todolist(state: ITodolist = iniState, action: Action): ITodolist {
    return {
        filter: filter(state.filter, action),
        todos: todos(state.todos, action)
    };
}