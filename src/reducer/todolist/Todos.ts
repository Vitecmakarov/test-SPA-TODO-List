import {
    ITodo,
    Action,
    ActionTypes
} from '../../actions';

import todo from './Todo';

export default function todos(state: ITodo[], action: Action): ITodo[] {
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            return [
                ...state,
                {
                    completed: false,
                    id: action.id,
                    text: action.text
                }
            ];

        case ActionTypes.DELETE_TODO:
            return [...state.slice(0, action.id), ...state.slice(action.id + 1)];

        case ActionTypes.DELETE_ALL_TODO:
            return [];

        case ActionTypes.ON_EDIT_TODO:
            return state.map((t, i) => todo(t, action));

        case ActionTypes.TOGGLE_TODO:
            return state.map((t, i) => todo(t, action));

        case ActionTypes.UPDATE_TODO:
            return state.map((t, i) => todo(t, action));

        default:
            return state;
    }
}