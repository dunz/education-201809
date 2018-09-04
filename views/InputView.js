export default class InputView {
    constructor() {
        this.regButton = document.querySelector('button');
        this.inputElement = document.querySelector('input[name=todo]');
        this.addTodoHandler = null;
        this.initEvents();
    }
    
    initEvents() {
        this.regButton.addEventListener('click', (e) => {
            const todoText = this.getTodoValue();
            this.addTodoHandler(todoText);
        });
        
        this.inputElement.addEventListener('keydown', (e) => {
            if (e.keyCode !== 13) return;
            const todoText = this.getTodoValue();
            this.addTodoHandler(todoText);
        });
    }
    
    getTodoValue() {
        return document.querySelector('input[name=todo]').value;
    }
    
    render(inputData = '') {
        this.inputElement.value = inputData;
    }
}