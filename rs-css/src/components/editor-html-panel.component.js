export default class EditorHtmlPanelComponent {
    constructor(nodes) {
        this.nodes = nodes;
    }

    render() {
        const editorHtmlPanel = document.createElement('div');
        editorHtmlPanel.classList.add('html-panel');

        editorHtmlPanel.innerHTML = `<div class="html-panel__header"><span>HTML Viewer</span><span>branch.html</span></div>
                                    <div class="html-panel__window">
                                        <div class="html-panel__line-numbers">1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>11<br>12<br>13<br>14<br>15</div>
                                    </div>`;

        return editorHtmlPanel;
    }

    generateHtml() {
        this.nodes.forEach(node => {
            
        })
    }
}