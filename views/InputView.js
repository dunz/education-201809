export default class InputView {
    constructor(todoModel) {
        this.todoModel = todoModel;
        this.regButton = document.querySelector('button');
        this.inputElement = document.querySelector('input[name=todo]');
        this.initEvents();
    }
    
    initEvents() {
        this.todoModel.subscribe(todos => {
            this.render();
        });
        this.regButton.addEventListener('click', (e) => {
            const todoText = this.getTodoValue();
            todoText && this.addTodoHandler(todoText);
        });
        
        this.inputElement.addEventListener('keydown', (e) => {
            if (e.keyCode !== 13) return;
            const todoText = this.getTodoValue();
            todoText && this.addTodoHandler(todoText);
        });
    }
    
    addTodoHandler(todoString) {
        if (!todoString) return;
        this.todoModel.addTodo.call(this.todoModel, todoString);
    }
    
    getTodoValue() {
        return document.querySelector('input[name=todo]').value.trim();
    }
    
    render(inputData = '') {
        this.inputElement.value = inputData;
    }
}