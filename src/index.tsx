import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';


// components
import App from './App';
import Home from './components/homepage';
import TodoApp from './components/todolist';

import { rootReducer } from './reducer';

const middlewares: never[] = [];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

store.subscribe(() => {
    const { todolist } = store.getState();
    localStorage.setItem('todolist', JSON.stringify(todolist));
});

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App>
                <Switch>
                    <Route path="/todo" component={TodoApp} />
                    <Route path="/" component={Home} />
                </Switch>
            </App>
        </HashRouter>
    </Provider>,
    document.querySelector('#root')
);