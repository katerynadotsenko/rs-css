export default class LevelNavigationComponent {
  constructor(level, levelsData, checkIsLevelDone, checkIsUsedHelp,
    changeLevel, resetProgress, toggleLevelNavigation) {
    this.level = level;
    this.levelsData = levelsData;
    this.checkIsLevelDone = checkIsLevelDone;
    this.checkIsUsedHelp = checkIsUsedHelp;
    this.changeLevel = changeLevel;
    this.resetProgress = resetProgress;
    this.toggleLevelNavigation = toggleLevelNavigation;
    this.levelsNavigationContainer = '';
    this.levelsNavigation = '';
  }

  render() {
    this.levelsNavigation = document.createElement('div');
    this.levelsNavigation.classList.add('levels-navigation');

    this.levelsNavigation.append(this.generateLevelsList());
    this.levelsNavigation.append(this.generateResetProgressButton());

    return this.levelsNavigation;
  }

  toggleLevelNavigationPanel() {
    this.levelsNavigation.classList.toggle('active');
  }

  generateLevelsList() {
    this.levelsNavigationContainer = document.createElement('div');
    this.levelsNavigationContainer.classList.add('levels-navigation__container');

    this.levelsData.forEach((level) => {
      const isDone = this.checkIsLevelDone(level.level);
      const isWithHelp = this.checkIsUsedHelp(level.level);

      const isActive = level.level === this.level;

      const levelsNavigationItem = document.createElement('div');
      levelsNavigationItem.classList.add('levels-navigation__item');

      if (isActive) {
        levelsNavigationItem.classList.add('active');
      }

      levelsNavigationItem.innerHTML += `<span class="level__check ${isDone ? 'done' : ''} material-icons">
                                            done
                                        </span>
                                        <span class="level__with-help ${isWithHelp ? 'active' : ''} material-icons">
                                            remove_red_eye
                                        </span>
                                        <span>${level.level}</span>
                                        <span>${level.description.syntax}</span>`;

      levelsNavigationItem.addEventListener('click', () => {
        this.changeLevel(level.level);
        this.toggleLevelNavigation();
      });

      this.levelsNavigationContainer.append(levelsNavigationItem);
    });

    return this.levelsNavigationContainer;
  }

  generateResetProgressButton() {
    const resetProgressButton = document.createElement('button');
    resetProgressButton.classList.add('button');
    resetProgressButton.innerText = 'Reset Progress';

    resetProgressButton.addEventListener('click', () => {
      this.resetProgress();
    });

    return resetProgressButton;
  }

  updateActiveLevel(level) {
    const levelsNavigationItems = this.levelsNavigationContainer.childNodes;

    levelsNavigationItems[this.level - 1].classList.remove('active');
    levelsNavigationItems[level - 1].classList.add('active');

    this.level = level;
  }

  updateLevelStatus(isDone, isWithHelp) {
    if (isDone) {
      const levelToUpdateDone = this.levelsNavigationContainer.querySelectorAll('.level__check')[this.level - 1];
      levelToUpdateDone.classList.add('done');
    }

    if (isWithHelp) {
      const levelToUpdateWithHelp = this.levelsNavigationContainer.querySelectorAll('.level__with-help')[this.level - 1];
      levelToUpdateWithHelp.classList.add('active');
    }
  }

  resetNavigationLevelList() {
    const levelsNavigationItems = this.levelsNavigationContainer.childNodes;
    levelsNavigationItems.forEach((item) => {
      item.querySelector('.level__check').classList.remove('done');
      item.querySelector('.level__with-help').classList.remove('active');
    });
  }
}
