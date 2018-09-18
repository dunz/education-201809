import Observable from '../Observable.js';

export default class FoldModel extends Observable {
    constructor() {
        super();
        this.isFold = false;
    }
    
    toggleIsFold() {
        this.isFold = !this.isFold;
        this.notify(this.isFold);
    }
}