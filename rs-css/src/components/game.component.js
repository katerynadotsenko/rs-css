import { bindGameComponentListeners } from '../helpers/listeners';

const appendChildElement = (parentNode, childNode, nodePosition) => {
  const childElement = document.createElement(`${childNode.type}`);

  if (childNode.className) {
    childElement.classList.add(...childNode.className);
  }

  if (childNode.id) {
    childElement.id = childNode.id;
  }

  if (childNode.attributeName) {
    childElement.setAttribute('name', childNode.attributeName);
  }

  bindGameComponentListeners(childElement, parentNode, childNode, nodePosition);

  parentNode.append(childElement);

  return childElement;
};

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

    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper', 'wrapper_game-container');

    const branchContainer = document.createElement('div');
    branchContainer.classList.add('game__branch__container');

    wrapper.append(branchContainer);
    branch.append(wrapper);

    this.generateNodes(branchContainer, this.nodes[1]);

    return branch;
  }

  generateNodes(parentNode, childNode) {
    if (!Array.isArray(childNode)) {
      appendChildElement(parentNode, childNode);
    } else {
      childNode.forEach((node, nodePosition) => {
        if (Array.isArray(node)) {
          const childElement = appendChildElement(parentNode, node[0], nodePosition);
          this.generateNodes(childElement, node[1]);
        } else {
          appendChildElement(parentNode, node, nodePosition);
        }
      });
    }
  }

  updateNodes(nodes) {
    this.nodes = nodes;
    const branchContainer = document.querySelector('.game__branch__container');
    while (branchContainer.hasChildNodes()) {
      branchContainer.removeChild(branchContainer.firstChild);
    }
    this.generateNodes(branchContainer, this.nodes[1]);
  }
}
