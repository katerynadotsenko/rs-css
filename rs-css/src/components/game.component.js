export default class GameComponent {
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

            this.appendChildElement(parentNode, childNode);

        } else {

            childNode.forEach(node => {

                if (Array.isArray(node)) {

                    const childElement = this.appendChildElement(parentNode, node[0]);
                    this.generateNodes(childElement, node[1]);

                } else {

                    this.appendChildElement(parentNode, node);

                }

            });
        }
    }

    appendChildElement(parentNode, childNode) {
        const childElement = document.createElement(`${childNode.type}`);

        if (childNode.className) {
            childElement.classList.add(...childNode.className);
        }

        parentNode.append(childElement);

        return childElement;
    }
}