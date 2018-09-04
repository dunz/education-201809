export default class ListView {
    constructor(listElement) {
        this.listElement = document.querySelector('.todolist');
        this._ = {
            displayClassName: 'visible'
        };
        this.todoList = null;
        this.getFetchTodoList = function () {
        };
        this.initEvent();
    }
    
    toggleFold(isFold) {
        isFold ?
            this.listElement.classList.remove('hidden') :
            this.listElement.classList.add('hidden');
    }
    
    initEvent() {
        document.addEventListener('DOMContentLoaded', async () => {
            this.todoList = await this.getFetchTodoList();
            this.render(this.todoList);
        });
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