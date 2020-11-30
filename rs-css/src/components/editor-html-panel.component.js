import {showTooltip, hideTooltip} from '../helpers/utils.js';

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

        this.generateFullHtml(branchTag, this.nodes[1]);

        editorHtmlWindow.append(branchTag);
        editorHtmlPanel.append(editorHtmlWindow);

        return editorHtmlPanel;
    }

    generateFullHtml(branchTag, node) {

        branchTag.append(this.highlightWrapper('<', 'text'));
        branchTag.append(this.highlightWrapper('div', 'highlight_tag'));
        branchTag.append(this.highlightWrapper(' class', 'highlight_class'));
        branchTag.append(this.highlightWrapper('="', 'text'));
        branchTag.append(this.highlightWrapper('branch', 'highlight_class-name'));
        branchTag.append(this.highlightWrapper('"', 'text'));
        branchTag.append(this.highlightWrapper('>', 'text'));

        this.generateHtml(branchTag, node);

        branchTag.append(this.highlightWrapper('</', 'text'));
        branchTag.append(this.highlightWrapper('div', 'highlight_tag'));
        branchTag.append(this.highlightWrapper('>', 'text'));
    }

    updateHtml(nodes) {
        this.nodes = nodes;
        const branchTag = document.querySelector('.html-branch');
        branchTag.innerHTML = '';

        this.generateFullHtml(branchTag, this.nodes[1]);
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

                    childElement.append(this.highlightWrapper('</', 'text'));
                    childElement.append(this.highlightWrapper(`${node[0].type}`, 'highlight_tag'));
                    childElement.append(this.highlightWrapper('>', 'text'));
                
                } else {

                    this.appendChildElement(parentNode, node, nodePosition);
                }

            });
        }
    }

    highlightWrapper(content, type) {
        if (type === 'text') {
            return document.createTextNode(content);
        } else {
            const wrapper = document.createElement('span');
            wrapper.classList.add('highlight', type);
            wrapper.textContent = content;
            return wrapper;
        }
    }

    appendChildElement(parentNode, childNode, nodePosition, isCloseTag=true) {
        const childElement = document.createElement('div');

        let fragment = document.createDocumentFragment();

        fragment.append(this.highlightWrapper('<', 'text'));
        fragment.append(this.highlightWrapper(`${childNode.type}`, 'highlight_tag'));

        if (childNode.className) {
            const classes = childNode.className.filter(item => item !== 'dance');
            if (classes.length) {

                fragment.append(this.highlightWrapper(' class', 'highlight_class'));
                fragment.append(this.highlightWrapper('="', 'text'));
                
                fragment.append(this.highlightWrapper(`${classes.join(' ')}`, 'highlight_class-name'));
                fragment.append(this.highlightWrapper('"', 'text'));
            }
        }

        if (childNode.id) {
            fragment.append(this.highlightWrapper(' id', 'highlight_id'));
            fragment.append(this.highlightWrapper('="', 'text'));
            
            fragment.append(this.highlightWrapper(`${childNode.id}`, 'highlight_id-name'));
            fragment.append(this.highlightWrapper('"', 'text'));
        }

        if (childNode.attributeName) {
            fragment.append(this.highlightWrapper(' name', 'highlight_id'));
            fragment.append(this.highlightWrapper('="', 'text'));
            
            fragment.append(this.highlightWrapper(`${childNode.attributeName}`, 'highlight_id-name'));
            fragment.append(this.highlightWrapper('"', 'text'));
        }

        const closeTag = isCloseTag ? ` />` : '>';
        fragment.append(this.highlightWrapper(closeTag, 'text'));

        childElement.append(fragment);

        this.bindListeners(childElement, parentNode, childNode, nodePosition);

        parentNode.append(childElement);

        return childElement;
    }

    bindListeners(element, parentNode, childNode, nodePosition) {
        
        element.addEventListener('mouseover', (e) => {
            e.stopPropagation();
            let elementInGame;

            if (parentNode.classList.contains('html-branch')) {
                elementInGame = document.querySelectorAll('.game__branch__container > *')[nodePosition];
            } else {
                let indexOfParentNode = Array.from(parentNode.parentNode.children).filter(node => node.tagName === 'DIV').indexOf(parentNode);
                elementInGame = document.querySelectorAll(`.game__branch__container > *`)[indexOfParentNode].childNodes[nodePosition];
            }
            
            elementInGame.classList.add('hovered');
            element.classList.add('hovered');

            showTooltip(elementInGame, childNode);

        });

        element.addEventListener('mouseout', (e) => {
            let elementInGame;

            if (parentNode.classList.contains('html-branch')) {
                elementInGame = document.querySelectorAll('.game__branch__container > *')[nodePosition];
            } else {
                let indexOfParentNode = Array.from(parentNode.parentNode.children).filter(node => node.tagName === 'DIV').indexOf(parentNode);
                elementInGame = document.querySelectorAll(`.game__branch__container > *`)[indexOfParentNode].childNodes[nodePosition];
            }
            
            elementInGame.classList.remove('hovered');
            element.classList.remove('hovered');

            hideTooltip();

        });
    }
}