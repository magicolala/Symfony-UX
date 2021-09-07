import { Controller } from 'stimulus';

export default class extends Controller {
    count = 0;
    static targets = ['count'];

    connect() {
        console.log('connected');
    }

    increment() {
        this.count++;
        this.countTarget.innerText = this.count;
    }
}
