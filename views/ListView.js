export default class ListView {
    constructor(todoModel, foldModel) {
        this.todoModel = todoModel;
        this.foldModel = foldModel;
        this.listElement = document.querySelector('.todolist');
        this._ = {
            displayClassName: 'visible'
        };
        this.todoList = null;
        this.initEvent();
    }
    
    initEvent() {
        this.todoModel.subscribe(todos => {
            this.renderTodo(todos[todos.length - 1])
        });
        this.foldModel.subscribe(this.toggleFold.bind(this));
        
        document.addEventListener('DOMContentLoaded', async () => {
            this.todoList = await this.getFetchTodoList();
            this.render(this.todoList);
        });
    }
    
    async getFetchTodoList() {
        return this.todoModel.todos = await fetch('./mock.json').then(res => res.json());
    }
    
    toggleFold(isFold) {
        isFold ?
            this.listElement.classList.add('hidden') :
            this.listElement.classList.remove('hidden');
    }
    
    getTodoTemplate(todo){
        return `<li id="1233"> ${todo} <span class="deleteX"> X </span></li>`
    }
    
    renderTodo(todo) {
        this.listElement.insertAdjacentHTML('beforeend', this.getTodoTemplate(todo));
    }
    
    render(list) {
        const listHtml = list.reduce((html, todo) => (
            `${html}${this.getTodoTemplate(todo)}`
        ), '');
        this.listElement.insertAdjacentHTML('beforeend', listHtml);
    }
}