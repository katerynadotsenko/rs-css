export default class LevelPanelComponent {
    constructor(levelDescription) {
        this.levelDescription = levelDescription;
    }

    render() {
        const levelPanel = document.createElement('div');
        levelPanel.classList.add('level-panel');

        levelPanel.append(this.generateLevelDescriptionView(this.levelDescription));

        return levelPanel;
    }

    generateLevelDescriptionView(levelDescription) {

        const examples = document.createElement('div');
        examples.classList.add('description__examples');

        levelDescription.description.examples.forEach(example => {
            examples.innerHTML += `<div class="description__example">${example}</div>`;
        });

        const levelPanelDescription = document.createElement('div');
        levelPanelDescription.classList.add('level-panel__description');

        levelPanelDescription.innerHTML = `<h3>${levelDescription.description.selectorName}</h3>
                                            <span class="description__title">${levelDescription.description.title}</span>
                                            <span class="description__syntax"><tag>${levelDescription.description.syntax}</tag></span>
                                            <div class="description__hint">${levelDescription.description.hint}</div>
                                            <h4>Examples</h4>`;
        levelPanelDescription.append(examples);

        return levelPanelDescription;
    }

    updateLevelDescription(levelDescription) {
        this.levelDescription = levelDescription;

        const levelPanel = document.querySelector('.level-panel');
        const levelPanelDescription = document.querySelector('.level-panel__description');
        levelPanelDescription.remove();

        levelPanel.append(this.generateLevelDescriptionView(this.levelDescription));
    }
}