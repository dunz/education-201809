import TodoModel from './models/TodoModel.js';

import InputView from './views/InputView.js';
import ListView from './views/ListView.js';
import ListFoldButtonView from './views/ListFoldButtonView.js';

import TodoController from './controllers/TodoController.js';


const todoModel = new TodoModel();
const inputView = new InputView();
const listView = new ListView();
const listFoldButtonView = new ListFoldButtonView();
const todoController = new TodoController(todoModel, inputView, listView, listFoldButtonView);