import EditorCssPanelComponent from './editor-css-panel.component';
import EditorHtmlPanelComponent from './editor-html-panel.component';

export default class EditorComponent {
  constructor(level, nodes, answer, updateProgress, changeLevel, maxLevel,
    checkIsAllLevelsDone, findFirstNotDoneLevel) {
    this.nodes = nodes;
    this.editorCssPanelComponent = new EditorCssPanelComponent(level, answer, updateProgress,
      changeLevel, maxLevel, checkIsAllLevelsDone, findFirstNotDoneLevel,
      () => this.shakeEditorWindow());
    this.editorHtmlPanelComponent = new EditorHtmlPanelComponent(nodes);
    this.editor = '';
  }

  render() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper', 'wrapper_editor');

    this.editor = document.createElement('div');
    this.editor.classList.add('editor');

    this.editor.append(this.editorCssPanelComponent.render());
    this.editor.append(this.editorHtmlPanelComponent.render());

    wrapper.append(this.editor);

    return wrapper;
  }

  updateEditorComponents(level, nodes, answer) {
    this.editorHtmlPanelComponent.updateHtml(nodes);
    this.editorCssPanelComponent.updateCss(level, answer);
  }

  shakeEditorWindow() {
    this.editor.classList.add('shake');
    setTimeout(() => {
      this.editor.classList.remove('shake');
    }, 520);
  }

  writeAnswer() {
    return this.editorCssPanelComponent.writeAnswer();
  }

  generateCodeMirrorInput() {
    this.editorCssPanelComponent.generateCodeMirrorInput();
  }
}
