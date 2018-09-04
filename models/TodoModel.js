import Observable from '../Observable.js';

export default class TodoModel extends Observable {
    constructor() {
        super();
        this.todos = [];
    }
    
    addTodo(todo, fnAfter) {
        this.todos = [...this.todos, todo];
        // fnAfter(this.todos);
        this.notify(this.todos);
    }
    
    get todoList() {
        return this.todos;
    }
}