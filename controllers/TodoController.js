import Observable from '../Observable.js';

export default class TodoController extends Observable {
    constructor(todoModel, inputView, listView, listFoldButtonView) {
        super();
        this.todoModel = todoModel;
        this.inputView = inputView;
        this.listView = listView;
        this.listFoldButtonView = listFoldButtonView;
        this.initService();
    }
    
    initService() {
        // this.inputView.addTodoHandler = this.addTodoHandler.bind(this);
        // this.listFoldButtonView.toggleFoldHandler = this.toggleFoldHandler.bind(this);
        // this.listView.getFetchTodoList = this.getFetchTodoList.bind(this);
        // this.todoModel.subscribe(this.afterAddTodo.bind(this));
    };
    
    addTodoHandler(todoString) {
        if (!todoString) return;
        this.todoModel.addTodo.call(this.todoModel, todoString);
    }
    
    toggleFoldHandler(isFold) {
        this.listView.toggleFold(isFold);
        this.listFoldButtonView.isFold = !isFold;
        this.listFoldButtonView.setFoldText(this.listFoldButtonView.isFold);
    }
    
    async getFetchTodoList() {
        return this.todoModel.todos = await fetch('./mock.json').then(res => res.json());
    }
    
    afterAddTodo(todos) {
        this.renderInputView(todos[todos.length - 1]);
        this.renderTodo(todos[todos.length - 1]);
    }
    
    renderInputView() {
        this.inputView.render();
    }
    
    renderListView(todoArray) {
        this.listView.render(todoArray);
    }
    
    renderTodo(todo) {
        this.listView.renderTodo(todo);
    }
}