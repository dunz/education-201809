export default class ListFoldButtonView {
    constructor() {
        this.isFold = false;
        this.foldText = '';
        this.foldButton = document.querySelector('.fold');
        this.toggleFoldHandler = function () {
        };
        this.initEvents();
    }
    
    initEvents() {
        this.foldButton.addEventListener('click', (e) => {
            this.toggleFoldHandler(this.isFold);
        });
    }
    
    setFoldText(isFold) {
        this.foldText = isFold ? '펼치기' : '접기';
        this.foldButton.innerText = this.foldText;
    }
}