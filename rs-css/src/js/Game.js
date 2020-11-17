export default class Game {
    constructor(nodes) {
        this.nodes = nodes;
    }

    render() {
        const game = document.createElement('div');
        game.classList.add('game');

        console.log(this.generateDom());

        return game;
    }

    generateDom() {
        const branch = document.createElement('div');
        branch.classList.add('branch');
        this.generateNodes(branch, this.nodes[1])

        return branch;
        
    }

    generateNodes(parentNode, childNode) {

        if (!Array.isArray(childNode)) {

            const childElement = document.createElement(`${childNode}`);
            parentNode.append(childElement);

        } else {
            
            childNode.forEach(node => {

                if (Array.isArray(node)) {
                    const childElement = document.createElement(`${node[0]}`);
                    parentNode.append(childElement);
                    this.generateNodes(childElement, node[1])
                } else {
                    const childElement = document.createElement(`${node}`);
                    parentNode.append(childElement);
                }

            });
        }
    }
}