import { Controller } from 'stimulus';

export default class extends Controller {
    static targets = ['colorSquare'];

    connect() {
        console.log('ça marche');
    }
    selectColor(event) {
        this.colorSquareTargets.forEach((element) => {
            element.classList.remove('selected');
        });
        event.currentTarget.classList.add('selected');
    }
}
