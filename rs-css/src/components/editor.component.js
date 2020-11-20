import EditorCssPanelComponent from './editor-css-panel.component.js';
import EditorHtmlPanelComponent from './editor-html-panel.component.js';

export default class EditorComponent {
    constructor(nodes) {
        this.nodes = nodes;
        this.editorCssPanelComponent = new EditorCssPanelComponent();
        this.editorHtmlPanelComponent = new EditorHtmlPanelComponent(nodes);
    }

    render() {
        const editor = document.createElement('div');
        editor.classList.add('editor');

        editor.append(this.editorCssPanelComponent.render());
        editor.append(this.editorHtmlPanelComponent.render());

        return editor;
    }

    updateEditorComponents(nodes) {
        this.editorHtmlPanelComponent.updateHtml(nodes);
    }
}