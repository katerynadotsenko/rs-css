import EditorHtmlPanel from './EditorHtmlPanel.js';

export default class Editor {
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