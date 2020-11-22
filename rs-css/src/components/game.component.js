import {tooltipShow, tooltipHide} from '../helpers/utils.js';

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

        this.generateNodes(branchContainer, this.nodes[1]);

        return branch;
        
    }

    generateNodes(parentNode, childNode) {

        if (!Array.isArray(childNode)) {

            this.appendChildElement(parentNode, childNode);

        } else {

            childNode.forEach((node, nodePosition) => {

                if (Array.isArray(node)) {

                    const childElement = this.appendChildElement(parentNode, node[0]);
                    this.generateNodes(childElement, node[1]);

                } else {

                    this.appendChildElement(parentNode, node, nodePosition);

                }

            });
        }
    }

    appendChildElement(parentNode, childNode, nodePosition) {
        const childElement = document.createElement(`${childNode.type}`);

        if (childNode.className) {
            childElement.classList.add(...childNode.className);
        }

        this.bindListeners(childElement, childNode, nodePosition)

        parentNode.append(childElement);

        return childElement;
    }

    bindListeners(element, node, nodePosition) {
        element.addEventListener('mouseover', () => {
            const elementInHtml = document.querySelectorAll('.html-branch *')[nodePosition];
            elementInHtml.classList.add('hover');

            tooltipShow(element, node);

        });

        element.addEventListener('mouseout', () => {
            const elementInHtml = document.querySelectorAll('.html-branch *')[nodePosition];
            elementInHtml.classList.remove('hover');

            tooltipHide();

        });
    }

    updateNodes(nodes) {
        this.nodes = nodes;
        const branchContainer = document.querySelector('.game__branch__container');
        while(branchContainer.hasChildNodes()) {
            branchContainer.removeChild(branchContainer.firstChild);
        }
        this.generateNodes(branchContainer, this.nodes[1]);
    }
}