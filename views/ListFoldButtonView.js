export default class ListFoldButtonView {
    constructor(todoModel, foldModel) {
        this.todoModel = todoModel;
        this.foldModel = foldModel;
        this.foldText = '';
        this.foldButton = document.querySelector('.fold');
        this.initEvents();
    }
    
    initEvents() {
        this.foldModel.subscribe(this.setFoldText.bind(this));
        this.foldButton.addEventListener('click', (e) => {
            this.foldModel.toggleIsFold();
        });
    }
    
    setFoldText(isFold) {
        this.foldText = isFold ? '펼치기' : '접기';
        this.foldButton.innerText = this.foldText;
    }
}