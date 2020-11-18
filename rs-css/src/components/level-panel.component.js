export default class LevelPanelComponent {
    constructor(levelDescription) {
        this.levelDescription = levelDescription;
    }

    render() {
        const levelPanel = document.createElement('div');
        levelPanel.classList.add('level-panel');

        levelPanel.append(this.generateLevelDescription());

        return levelPanel;
    }

    generateLevelDescription() {
        const fragment = document.createDocumentFragment();

        const levelPanelHeader = document.createElement('div');
        levelPanelHeader.classList.add('level-panel__header');

        levelPanelHeader.innerHTML = `<h2>Level ${this.levelDescription.level}</h2>`;

        const examples = document.createElement('div');
        examples.classList.add('description__examples');

        this.levelDescription.description.examples.forEach(example => {
            examples.innerHTML += `<div class="description__example">${example}</div>`;
        });

        const levelPanelDescription = document.createElement('div');
        levelPanelDescription.classList.add('level-panel__description');

        levelPanelDescription.innerHTML = `<h3>${this.levelDescription.description.selectorName}</h3>
                                            <span class="description__title">${this.levelDescription.description.title}</span>
                                            <span class="description__syntax"><tag>${this.levelDescription.description.syntax}</tag></span>
                                            <div class="description__hint">${this.levelDescription.description.hint}</div>
                                            <h4>Examples</h4>`;
        levelPanelDescription.append(examples);

        fragment.append(levelPanelHeader);
        fragment.append(levelPanelDescription);

        return fragment;
    }
}