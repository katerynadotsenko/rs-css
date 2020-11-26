import EditorCssPanelComponent from './editor-css-panel.component.js';
import EditorHtmlPanelComponent from './editor-html-panel.component.js';

export default class EditorComponent {
    constructor(level, nodes, answer, updateProgress, changeLevel) {
        this.nodes = nodes;
        this.editorCssPanelComponent = new EditorCssPanelComponent(level, answer, updateProgress, changeLevel);
        this.editorHtmlPanelComponent = new EditorHtmlPanelComponent(nodes);
    }

    render() {
        const editor = document.createElement('div');
        editor.classList.add('editor');

        editor.append(this.editorCssPanelComponent.render());
        editor.append(this.editorHtmlPanelComponent.render());

        return editor;
    }

    updateEditorComponents(level, nodes, answer) {
        this.editorHtmlPanelComponent.updateHtml(nodes);
        this.editorCssPanelComponent.updateCss(level, answer);
    }

    writeAnswer() {
        this.editorCssPanelComponent.writeAnswer();
    }
}