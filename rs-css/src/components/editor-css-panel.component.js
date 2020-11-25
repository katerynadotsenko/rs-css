export default class EditorCssPanelComponent {
    constructor(level, answer, saveProgress) {
        this.level = level;
        this.answer = answer;
        this.saveProgress = saveProgress;
    }

    render() {
        const editorCssPanel = document.createElement('div');
        editorCssPanel.classList.add('css-panel');

        const editorCssWindow = document.createElement('div');
        editorCssWindow.classList.add('css-panel__window');
        editorCssWindow.innerHTML = `<div class="css-panel__line-numbers">1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15</div>`;

        const input = document.createElement('input');
        input.classList.add('css-panel__input');
        input.placeholder = 'Type in a CSS selector';

        input.addEventListener('keyup', (e) => {
            if (e.code === 'Enter') {
                this.checkSelector();
            }
        })

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

    checkSelector() {
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

            if (selectorResultWithDance.length == this.answer && selectorResult.length == this.answer) {
                [...selectorResult].forEach(item => {
                    item.classList.remove('dance');
                    item.classList.add('fly');
                });

                this.saveProgress(this.level);

            } else {
                this.shakeElements(selectorResult);

            }
        }
    }
}