import TodoModel from './models/TodoModel.js';
import FoldModel from './models/FoldModel.js';

import InputView from './views/InputView.js';
import ListView from './views/ListView.js';
import ListFoldButtonView from './views/ListFoldButtonView.js';



const todoModel = new TodoModel();
const foldModel = new FoldModel();
const listView = new ListView(todoModel, foldModel);
const inputView = new InputView(todoModel);
const listFoldButtonView = new ListFoldButtonView(todoModel, foldModel);
