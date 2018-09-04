export default class Observable {
    constructor() {
        this._observers = new Set();
    }
    subscribe(observer) {
        this._observers.add(observer);
    }
    unsubscribe(observer) {
        this._observers = [...this._observers].filter(subscriber => subscriber !== observer);
    }
    notify(data) {
        this._observers.forEach(observer => observer(data));
    }
}


//observable
// const source$ = new Observable();
//
// //구독 (subscribe)
// source$.subscribe((data)=> {
//     console.log(`movie is ${data}`);
// });
//
// //알림 (notify)
// document.body.addEventListener("click", () => source$.notify("어벤져스 인피니티워"));