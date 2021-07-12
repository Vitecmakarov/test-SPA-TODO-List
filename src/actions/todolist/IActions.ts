export enum ActionTypes {
    ADD_TODO,
    UPDATE_TODO,
    DELETE_TODO,
    DELETE_ALL_TODO,
    TOGGLE_TODO,
    SET_FILTER,
    ON_EDIT_TODO,
}

export type Action = | IAddTodo | IUpdateTodo | IDeleteTodo | IDeleteAllTodo | IToggleTodo | IOnEditTodo | ISetFilter;

// Todolist interfaces
export interface ITodo {
    id: number;
    text?: string;
    completed?: boolean;
    onEdit?: boolean;
}

export interface ITodolist {
    todos: ITodo[];
    filter: string;
}

// Action interfaces
export interface IAddTodo {
    id: number;
    text: string;
    type: typeof ActionTypes.ADD_TODO;
}

export interface IUpdateTodo {
    id: number;
    text: string;
    type: typeof ActionTypes.UPDATE_TODO;
}

export interface IDeleteTodo {
    id: number;
    type: typeof ActionTypes.DELETE_TODO;
}

export interface IDeleteAllTodo {
    type: typeof ActionTypes.DELETE_ALL_TODO;
}

export interface IToggleTodo {
    id: number;
    type: typeof ActionTypes.TOGGLE_TODO;
}

export interface ISetFilter {
    filter: string;
    type: typeof ActionTypes.SET_FILTER;
}

export interface IOnEditTodo {
    id: number;
    type: typeof ActionTypes.ON_EDIT_TODO;
}