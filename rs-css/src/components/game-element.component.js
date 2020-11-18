export default class GameElement {
    constructor(type) {
        this.type = type;
    }

    render() {
        const element = document.createElement(`${type}`);

        return element;
    }
}