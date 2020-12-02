export default class LevelPanelComponent {
  constructor(levelDescription, writeAnswer) {
    this.levelDescription = levelDescription;
    this.writeAnswer = writeAnswer;
    this.levelPanel = '';
  }

  render() {
    this.levelPanel = document.createElement('div');
    this.levelPanel.classList.add('level-panel');
    this.levelPanel.classList.add('active');

    this.levelPanel.append(this.generateLevelDescriptionView());
    this.levelPanel.append(this.generateHelpButton());

    return this.levelPanel;
  }

  toggleLevelPanel() {
    this.levelPanel.classList.toggle('active');
  }

  generateHelpButton() {
    const helpButton = document.createElement('button');
    helpButton.classList.add('button');
    helpButton.innerText = 'Help';

    helpButton.addEventListener('click', async (e) => {
      e.target.disabled = true;
      await this.writeAnswer();
      e.target.disabled = false;
    });

    return helpButton;
  }

  generateLevelDescriptionView() {
    const examples = document.createElement('div');
    examples.classList.add('description__examples');

    this.levelDescription.description.examples.forEach((example) => {
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

    return levelPanelDescription;
  }

  updateLevelDescription(levelDescription) {
    this.levelDescription = levelDescription;

    const levelPanel = document.querySelector('.level-panel');
    const levelPanelDescription = document.querySelector('.level-panel__description');
    levelPanelDescription.remove();

    levelPanel.insertBefore(this.generateLevelDescriptionView(), levelPanel.lastChild);
  }
}
