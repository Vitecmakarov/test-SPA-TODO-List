import {
    ActionTypes,
    IAddTodo,
    IUpdateTodo,
    IDeleteTodo,
    IDeleteAllTodo,
    IToggleTodo,
    IOnEditTodo,
    ISetFilter
} from './IActions';

// Available filters

export const FILTERS = {
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED'
};

// Action creators
export const addTodo = (text: string): IAddTodo => {
    return {
        id: +Date.now(),
        text,
        type: ActionTypes.ADD_TODO
    };
};

export const updateTodo = (id: number, text: string): IUpdateTodo => {
    return {
        id,
        text,
        type: ActionTypes.UPDATE_TODO
    };
};

export const deleteTodo = (id: number): IDeleteTodo => {
    return {
        id,
        type: ActionTypes.DELETE_TODO
    };
};

export const deleteAllTodo = (): IDeleteAllTodo => {
    return {
        type: ActionTypes.DELETE_ALL_TODO
    };
};

export const toggleTodo = (id: number): IToggleTodo => {
    return {
        id,
        type: ActionTypes.TOGGLE_TODO
    };
};

export const onEditTodo = (id: number): IOnEditTodo => {
    return {
        id,
        type: ActionTypes.ON_EDIT_TODO
    };
};

export const setFilter = (filter: string): ISetFilter => {
    return {
        filter,
        type: ActionTypes.SET_FILTER
    };
};