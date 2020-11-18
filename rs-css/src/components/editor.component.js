import EditorHtmlPanel from './editor-html-panel.component.js';

export default class EditorComponent {
    constructor(nodes) {
        this.nodes = nodes;
        this.editorHtmlPanel = new EditorHtmlPanel(nodes);
    }

    render() {
        const editor = document.createElement('div');
        editor.classList.add('editor');

        return editor;
    }
}