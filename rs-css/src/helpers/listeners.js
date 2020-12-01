import { showTooltip, hideTooltip } from './utils';

const bindEditorHtmlListeners = (element, parentNode, childNode, nodePosition) => {
  element.addEventListener('mouseover', (e) => {
    e.stopPropagation();
    let elementInGame;

    if (parentNode.classList.contains('html-branch')) {
      elementInGame = document.querySelectorAll('.game__branch__container > *')[nodePosition];
    } else {
      const indexOfParentNode = Array.from(parentNode.parentNode.children).filter((node) => node.tagName === 'DIV').indexOf(parentNode);
      elementInGame = document.querySelectorAll('.game__branch__container > *')[indexOfParentNode].childNodes[nodePosition];
    }

    elementInGame.classList.add('hovered');
    element.classList.add('hovered');

    showTooltip(elementInGame, childNode);
  });

  element.addEventListener('mouseout', () => {
    let elementInGame;

    if (parentNode.classList.contains('html-branch')) {
      elementInGame = document.querySelectorAll('.game__branch__container > *')[nodePosition];
    } else {
      const indexOfParentNode = Array.from(parentNode.parentNode.children).filter((node) => node.tagName === 'DIV').indexOf(parentNode);
      elementInGame = document.querySelectorAll('.game__branch__container > *')[indexOfParentNode].childNodes[nodePosition];
    }

    elementInGame.classList.remove('hovered');
    element.classList.remove('hovered');

    hideTooltip();
  });
};

const bindGameComponentListeners = (element, parentNode, childNode, nodePosition) => {
  element.addEventListener('mouseover', (e) => {
    e.stopPropagation();

    let elementInHtml;

    if (parentNode.tagName.toLowerCase() === 'div') {
      elementInHtml = document.querySelectorAll('.html-branch > div')[nodePosition];
    } else {
      const indexOfParentNode = Array.from(parentNode.parentNode.children).indexOf(parentNode);
      elementInHtml = document.querySelectorAll('.html-branch > div')[indexOfParentNode].getElementsByTagName('div')[nodePosition];
    }

    elementInHtml.classList.add('hovered');
    element.classList.add('hovered');

    showTooltip(element, childNode);
  });

  element.addEventListener('mouseout', () => {
    let elementInHtml;

    if (parentNode.tagName.toLowerCase() === 'div') {
      elementInHtml = document.querySelectorAll('.html-branch > div')[nodePosition];
    } else {
      const indexOfParentNode = Array.from(parentNode.parentNode.children).indexOf(parentNode);
      elementInHtml = document.querySelectorAll('.html-branch > div')[indexOfParentNode].getElementsByTagName('div')[nodePosition];
    }

    elementInHtml.classList.remove('hovered');
    element.classList.remove('hovered');

    hideTooltip();
  });
};

export { bindEditorHtmlListeners, bindGameComponentListeners };
