import Codemirror from 'codemirror/lib/codemirror';
import 'codemirror/mode/css/css';
import 'codemirror/lib/codemirror.css';
import '../helpers/monokai.css';

import { showNotification } from '../helpers/utils';

const shakeElements = (selectorResult) => {
  [...selectorResult].forEach((item) => {
    const isDance = item.classList.contains('dance');

    if (isDance) {
      item.classList.remove('dance');
    }

    item.classList.add('shake');
    setTimeout(() => {
      item.classList.remove('shake');

      if (isDance) {
        item.classList.add('dance');
      }
    }, 520);
  });
};

export default class EditorCssPanelComponent {
  constructor(level, answer, updateProgress, changeLevel,
    maxLevel, checkIsAllLevelsDone, findFirstNotDoneLevel, shakeEditorWindow) {
    this.level = level;
    this.maxLevel = maxLevel;
    this.answer = answer;
    this.updateProgress = updateProgress;
    this.changeLevel = changeLevel;
    this.checkIsAllLevelsDone = checkIsAllLevelsDone;
    this.findFirstNotDoneLevel = findFirstNotDoneLevel;
    this.shakeEditorWindow = shakeEditorWindow;
    this.isWithHelp = false;
    this.codeMirrorInput = '';
  }

  render() {
    const editorCssPanel = document.createElement('div');
    editorCssPanel.classList.add('css-panel');

    const editorCssWindow = document.createElement('div');
    editorCssWindow.classList.add('css-panel__window');
    editorCssWindow.innerHTML = '<div class="css-panel__line-numbers">1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15</div>';

    const input = document.createElement('textarea');
    input.classList.add('css-panel__input');

    editorCssPanel.innerHTML = '<div class="css-panel__header"><span>CSS Editor</span><span>style.css</span></div>';

    const editorCssButton = document.createElement('button');
    editorCssButton.classList.add('css-panel__button');
    editorCssButton.innerText = 'enter';

    editorCssButton.addEventListener('click', this.checkSelector.bind(this));

    editorCssWindow.append(input);
    editorCssWindow.append(editorCssButton);

    editorCssPanel.append(editorCssWindow);

    return editorCssPanel;
  }

  generateCodeMirrorInput() {
    const cssPanelInput = document.querySelector('.css-panel__input');

    this.codeMirrorInput = Codemirror.fromTextArea(cssPanelInput, {
      lineNumbers: false,
      styleActiveLine: true,
      matchBrackets: true,
      enterMode: 'flat',
      theme: 'monokai',
      smartIndent: false,
      mode: 'css',
    });

    this.codeMirrorInput.focus();

    this.codeMirrorInput.on('beforeChange', (instance, changeObj) => {
      const text = changeObj.text.join('').replace(/\n/g, '');
      changeObj.update(changeObj.from, changeObj.to, [text]);
      return true;
    });

    const mirrorWrapper = document.querySelector('.CodeMirror-lines');
    mirrorWrapper.classList.add('highlighting');

    this.codeMirrorInput.on('change', (instance) => {
      if (instance.getValue()) {
        mirrorWrapper.classList.remove('highlighting');
      } else {
        mirrorWrapper.classList.add('highlighting');
      }
      this.codeMirrorInput.save();
    });

    this.codeMirrorInput.on('keyHandled', (instance, name, event) => {
      if (event.code === 'Enter') {
        this.checkSelector();
      }
    });
  }

  updateCss(level, answer, isFocusOnCssInput) {
    this.level = level;
    this.answer = answer;
    this.isWithHelp = false;
    this.codeMirrorInput.setValue('');
    if (isFocusOnCssInput) {
      this.codeMirrorInput.focus();
    }
  }

  writeAnswer() {
    this.isWithHelp = true;

    const cssPanelInput = document.querySelector('.css-panel__input');
    cssPanelInput.value = this.answer;
    this.codeMirrorInput.setValue('');

    this.codeMirrorInput.focus();

    const promises = [...this.answer[1]].map((letter, i) => new Promise(
      (resolve) => {
        setTimeout(() => {
          this.codeMirrorInput.setValue(this.codeMirrorInput.getValue() + letter);
          this.codeMirrorInput.setCursor({
            line: 0,
            ch: i + 1,
          });
          resolve();
        }, 100 * i);
      },
    ));

    return Promise.all(promises);
  }

  checkSelector() {
    try {
      const cssPanelInput = document.querySelector('.css-panel__input');

      if (!cssPanelInput.value) {
        this.shakeEditorWindow();
        return;
      }

      const selectorResult = document.querySelector('.game__branch__container').querySelectorAll(cssPanelInput.value);

      if (selectorResult.length === 0) {
        this.shakeEditorWindow();
      } else {
        const selectorResultWithDance = [...selectorResult].filter((node) => node.classList.contains('dance'));

        if (selectorResultWithDance.length === this.answer[0]
            && selectorResult.length === this.answer[0]) {
          [...selectorResult].forEach((item) => {
            item.classList.remove('dance');
            item.classList.add('fly');
          });

          const isDone = true;

          this.updateProgress(this.level, isDone, this.isWithHelp);
          cssPanelInput.value = '';
          this.codeMirrorInput.setValue('');

          setTimeout(() => {
            const isAllLevelsDone = this.checkIsAllLevelsDone();

            if (this.level < this.maxLevel && !isAllLevelsDone) {
              this.changeLevel(this.level + 1);
            } else if (isAllLevelsDone) {
              showNotification();
            } else {
              this.level = this.findFirstNotDoneLevel();
              this.changeLevel(this.level);
            }
          }, 1000);
        } else {
          shakeElements(selectorResult);
        }
      }
    } catch {
      this.shakeEditorWindow();
    }
  }
}
