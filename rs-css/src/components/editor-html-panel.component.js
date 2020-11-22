import {tooltipShow, tooltipHide} from '../helpers/utils.js';

export default class EditorHtmlPanelComponent {
    constructor(nodes) {
        this.nodes = nodes;
    }

    render() {
        const editorHtmlPanel = document.createElement('div');
        editorHtmlPanel.classList.add('html-panel');

        const editorHtmlWindow = document.createElement('div');
        editorHtmlWindow.classList.add('html-panel__window');
        editorHtmlWindow.innerHTML = `<div class="html-panel__line-numbers">1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15</div>`;

        editorHtmlPanel.innerHTML = `<div class="html-panel__header"><span>HTML Viewer</span><span>branch.html</span></div>`;

        const branchTag = document.createElement('div');
        branchTag.classList.add('html-branch');
        branchTag.appendChild(document.createTextNode('<div class="branch">'));

        this.generateHtml(branchTag, this.nodes[1]);

        branchTag.appendChild(document.createTextNode('</div>'));

        editorHtmlWindow.append(branchTag);
        editorHtmlPanel.append(editorHtmlWindow);

        return editorHtmlPanel;
    }

    updateHtml(nodes) {
        this.nodes = nodes;
        const branchTag = document.querySelector('.html-branch');

        branchTag.innerHTML = '';
        branchTag.appendChild(document.createTextNode('<div class="branch">'));

        this.generateHtml(branchTag, this.nodes[1]);
        branchTag.appendChild(document.createTextNode('</div>'));
    }

    generateHtml(parentNode, childNode) {

        if (!Array.isArray(childNode)) {

            this.appendChildElement(parentNode, childNode, nodePosition);

        } else {

        childNode.forEach((node, nodePosition) => {

                if (Array.isArray(node)) {

                    const isCloseTag = false;
                    const childElement = this.appendChildElement(parentNode, node[0], nodePosition, isCloseTag);
                    this.generateHtml(childElement, node[1]);

                    childElement.appendChild(document.createTextNode(`</${node[0].type}>`));
                
                } else {

                    this.appendChildElement(parentNode, node, nodePosition);
                }

            });
        }
    }

    appendChildElement(parentNode, childNode, nodePosition, isCloseTag=true) {
        const childElement = document.createElement('div');

        let tagContent =  childNode.type;
        const closeTag = isCloseTag ? ` />` : '>';

        if (childNode.className) {
            const classes = childNode.className.filter(item => item !== 'dance');
            if (classes.length) {
                tagContent += ` class="${classes.join(' ')}"`;
            }
        }

        childElement.innerText = `<${tagContent + closeTag}`;

        this.bindListeners(childElement, childNode, nodePosition);

        parentNode.append(childElement);

        return childElement;
    }

    bindListeners(element, node, nodePosition) {
        element.addEventListener('mouseover', (e) => {
            e.stopPropagation();
            const elementInGame = document.querySelectorAll('.game__branch__container *')[nodePosition];
            elementInGame.classList.add('hovered');
            element.classList.add('hovered');

            tooltipShow(elementInGame, node);
            //console.log('mouseover');
            //console.log(elementInGame);
        });

        element.addEventListener('mouseout', (e) => {
            const elementInGame = document.querySelectorAll('.game__branch__container *')[nodePosition];
            elementInGame.classList.remove('hovered');
            element.classList.remove('hovered');

            tooltipHide();
            //console.log('mouseout');
            //console.log(elementInGame);
        });
    }
}