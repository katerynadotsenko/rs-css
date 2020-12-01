import { highlightWrapper } from '../helpers/utils';
import { bindEditorHtmlListeners } from '../helpers/listeners';

const appendChildElement = (parentNode, childNode, nodePosition, isCloseTag = true) => {
  const childElement = document.createElement('div');

  const fragment = document.createDocumentFragment();

  fragment.append(highlightWrapper('<', 'text'));
  fragment.append(highlightWrapper(`${childNode.type}`, 'highlight_tag'));

  if (childNode.className) {
    const classes = childNode.className.filter((item) => item !== 'dance');
    if (classes.length) {
      fragment.append(highlightWrapper(' class', 'highlight_class'));
      fragment.append(highlightWrapper('="', 'text'));

      fragment.append(highlightWrapper(`${classes.join(' ')}`, 'highlight_class-name'));
      fragment.append(highlightWrapper('"', 'text'));
    }
  }

  if (childNode.id) {
    fragment.append(highlightWrapper(' id', 'highlight_id'));
    fragment.append(highlightWrapper('="', 'text'));

    fragment.append(highlightWrapper(`${childNode.id}`, 'highlight_id-name'));
    fragment.append(highlightWrapper('"', 'text'));
  }

  if (childNode.attributeName) {
    fragment.append(highlightWrapper(' name', 'highlight_id'));
    fragment.append(highlightWrapper('="', 'text'));

    fragment.append(highlightWrapper(`${childNode.attributeName}`, 'highlight_id-name'));
    fragment.append(highlightWrapper('"', 'text'));
  }

  const closeTag = isCloseTag ? ' />' : '>';
  fragment.append(highlightWrapper(closeTag, 'text'));

  childElement.append(fragment);

  bindEditorHtmlListeners(childElement, parentNode, childNode, nodePosition);

  parentNode.append(childElement);

  return childElement;
};

export default class EditorHtmlPanelComponent {
  constructor(nodes) {
    this.nodes = nodes;
  }

  render() {
    const editorHtmlPanel = document.createElement('div');
    editorHtmlPanel.classList.add('html-panel');

    const editorHtmlWindow = document.createElement('div');
    editorHtmlWindow.classList.add('html-panel__window');
    editorHtmlWindow.innerHTML = '<div class="html-panel__line-numbers">1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15</div>';

    editorHtmlPanel.innerHTML = '<div class="html-panel__header"><span>HTML Viewer</span><span>branch.html</span></div>';

    const branchTag = document.createElement('div');
    branchTag.classList.add('html-branch');

    this.generateFullHtml(branchTag, this.nodes[1]);

    editorHtmlWindow.append(branchTag);
    editorHtmlPanel.append(editorHtmlWindow);

    return editorHtmlPanel;
  }

  generateFullHtml(branchTag, node) {
    branchTag.append(highlightWrapper('<', 'text'));
    branchTag.append(highlightWrapper('div', 'highlight_tag'));
    branchTag.append(highlightWrapper(' class', 'highlight_class'));
    branchTag.append(highlightWrapper('="', 'text'));
    branchTag.append(highlightWrapper('branch', 'highlight_class-name'));
    branchTag.append(highlightWrapper('"', 'text'));
    branchTag.append(highlightWrapper('>', 'text'));

    this.generateHtml(branchTag, node);

    branchTag.append(highlightWrapper('</', 'text'));
    branchTag.append(highlightWrapper('div', 'highlight_tag'));
    branchTag.append(highlightWrapper('>', 'text'));
  }

  updateHtml(nodes) {
    this.nodes = nodes;
    const branchTag = document.querySelector('.html-branch');
    branchTag.innerHTML = '';

    this.generateFullHtml(branchTag, this.nodes[1]);
  }

  generateHtml(parentNode, childNode) {
    if (!Array.isArray(childNode)) {
      appendChildElement(parentNode, childNode);
    } else {
      childNode.forEach((node, nodePosition) => {
        if (Array.isArray(node)) {
          const isCloseTag = false;
          const childElement = appendChildElement(parentNode, node[0], nodePosition, isCloseTag);
          this.generateHtml(childElement, node[1]);

          childElement.append(highlightWrapper('</', 'text'));
          childElement.append(highlightWrapper(`${node[0].type}`, 'highlight_tag'));
          childElement.append(highlightWrapper('>', 'text'));
        } else {
          appendChildElement(parentNode, node, nodePosition);
        }
      });
    }
  }
}
