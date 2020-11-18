export default class EditorCssPanelComponent {
    constructor() {

    }

    render() {
        const editorCssPanel = document.createElement('div');
        editorCssPanel.classList.add('css-panel');

        const editorCssWindow = document.createElement('div');
        editorCssWindow.classList.add('css-panel__window');
        editorCssWindow.innerHTML = `<div class="css-panel__line-numbers">1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15</div>
                                    <input class="css-panel__input" placeholder="Type in a CSS selector">`;

        editorCssPanel.innerHTML = `<div class="css-panel__header"><span>CSS Editor</span><span>style.css</span></div>`;


        const editorCssButton = document.createElement('button');
        editorCssButton.classList.add('css-panel__button');
        editorCssButton.innerText = 'enter';

        editorCssWindow.append(editorCssButton);

        editorCssPanel.append(editorCssWindow);

        return editorCssPanel;

    }
}