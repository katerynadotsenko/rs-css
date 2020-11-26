export default class EditorCssPanelComponent {
    constructor(level, answer, updateProgress, changeLevel) {
        this.level = level;
        this.answer = answer;
        this.updateProgress = updateProgress;
        this.changeLevel = changeLevel;
    }

    render() {
        const editorCssPanel = document.createElement('div');
        editorCssPanel.classList.add('css-panel');

        const editorCssWindow = document.createElement('div');
        editorCssWindow.classList.add('css-panel__window');
        editorCssWindow.innerHTML = `<div class="css-panel__line-numbers">1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15</div>`;

        const input = document.createElement('input');
        input.classList.add('css-panel__input', 'highlighting');
        input.placeholder = 'Type in a CSS selector';

        input.addEventListener('keyup', (e) => {
            if (e.code === 'Enter') {
                this.checkSelector();
            }
            if (input.value) {
                input.classList.remove('highlighting');
            } else {
                input.classList.add('highlighting');
            }
        });

        input.addEventListener('focusout', (e) => {
            input.focus();
        });

        editorCssPanel.innerHTML = `<div class="css-panel__header"><span>CSS Editor</span><span>style.css</span></div>`;

        const editorCssButton = document.createElement('button');
        editorCssButton.classList.add('css-panel__button');
        editorCssButton.innerText = 'enter';

        editorCssButton.addEventListener('click', this.checkSelector.bind(this));

        editorCssWindow.append(input);
        editorCssWindow.append(editorCssButton);

        editorCssPanel.append(editorCssWindow);

        return editorCssPanel;

    }

    updateCss(level, answer) {
        this.level = level;
        this.answer = answer;
    }

    shakeEditorWindow() {
        const editor = document.querySelector('.editor');
        editor.classList.add('shake');
        setTimeout(() => {
            editor.classList.remove('shake');
        }, 520);
    }

    shakeElements(selectorResult) {
        [...selectorResult].forEach(item => {
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
    }

    writeAnswer() {
        const cssPanelInput = document.querySelector('.css-panel__input');
        cssPanelInput.value = '';

        [...this.answer[1]].forEach((letter, i) => {
            setTimeout(() => {
                cssPanelInput.value += letter;
            }, 200 * i);
        });
    }

    checkSelector() {
        try {
            const cssPanelInput = document.querySelector('.css-panel__input');

            if (!cssPanelInput.value) {
                this.shakeEditorWindow();
                return;
            }

            const selectorResult = document.querySelector('.game__branch__container').querySelectorAll(cssPanelInput.value);

            if (selectorResult.length == 0) {
                this.shakeEditorWindow();

            } else {
                const selectorResultWithDance = [...selectorResult].filter(node => node.classList.contains('dance'));

                if (selectorResultWithDance.length == this.answer[0] && selectorResult.length == this.answer[0]) {
                    [...selectorResult].forEach(item => {
                        item.classList.remove('dance');
                        item.classList.add('fly');
                    });

                    this.updateProgress(this.level);
                    cssPanelInput.value = '';

                    setTimeout(() => {
                        this.changeLevel(this.level + 1);
                        cssPanelInput.classList.add('highlighting');
                    }, 1000)
                

                } else {
                    this.shakeElements(selectorResult);

                }
            }
        } catch {
            this.shakeEditorWindow();
        }
    }
}