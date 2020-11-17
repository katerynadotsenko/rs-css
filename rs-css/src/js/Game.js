export default class Game {
    constructor(nodes) {
        this.nodes = nodes;
    }

    render() {
        const game = document.createElement('div');
        game.classList.add('game');

        game.append(this.generateDom());

        return game;
    }

    generateDom() {
        const branch = document.createElement('div');
        branch.classList.add('game__branch');
        const branchContainer = document.createElement('div');
        branchContainer.classList.add('game__branch__container');

        branch.append(branchContainer);

        this.generateNodes(branchContainer, this.nodes[1])

        return branch;
        
    }

    generateNodes(parentNode, childNode) {

        if (!Array.isArray(childNode)) {

            const childElement = document.createElement(`${childNode}`);
            parentNode.append(childElement);

        } else {

            childNode.forEach(node => {

                if (Array.isArray(node)) {
                    const childElement = document.createElement(`${node[0].name}`);
                    if (node.className) {
                        childElement.classList.add(`${node.className}`);
                    }
                    parentNode.append(childElement);
                    this.generateNodes(childElement, node[1].name)
                } else {
                    const childElement = document.createElement(`${node.name}`);
                    if (node.className) {
                        childElement.classList.add(`${node.className}`);
                    }
                    parentNode.append(childElement);
                }

            });
        }
    }
}