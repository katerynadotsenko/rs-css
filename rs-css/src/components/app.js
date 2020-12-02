import TaskComponent from './task.component';
import GameComponent from './game.component';
import EditorComponent from './editor.component';
import LevelPanelComponent from './level-panel.component';
import NavigationComponent from './navigation.component';
import LevelNavigationComponent from './level-navigation.component';
import footerComponent from './footer.component';

import levelsData from '../data/levels.data';

import Service from '../service';

const setRightPanelMode = () => {
  const windowSize = window.innerWidth;

  return windowSize > 768;
};

export default class App {
  constructor() {
    this.service = new Service();

    this.isRightPanelActive = setRightPanelMode();

    this.progress = this.service.getProgress();
    this.level = this.service.getCurrentLevel();
    this.maxLevel = levelsData.length;

    this.taskComponent = new TaskComponent(levelsData[this.level - 1].task);
    this.gameComponent = new GameComponent(levelsData[this.level - 1].nodes);
    this.editorComponent = new EditorComponent(this.level, levelsData[this.level - 1].nodes,
      levelsData[this.level - 1].answer,
      (level, isDone, isWithHelp) => this.updateProgress(level, isDone, isWithHelp),
      (level) => this.changeLevel(level), this.maxLevel,
      () => this.checkIsAllLevelsDone(), () => this.findFirstNotDoneLevel());
    this.levelPanelComponent = new LevelPanelComponent(levelsData[this.level - 1],
      () => this.writeAnswer());
    this.navigationComponent = new NavigationComponent(this.level, this.maxLevel,
      (level) => this.changeLevel(level),
      (level) => this.checkIsLevelDone(level), (level) => this.checkIsUsedHelp(level),
      () => this.toggleLevelNavigation());
    this.levelNavigationComponent = new LevelNavigationComponent(this.level, levelsData,
      (level) => this.checkIsLevelDone(level),
      (level) => this.checkIsUsedHelp(level), (level) => this.changeLevel(level),
      () => this.resetProgress(), () => this.toggleLevelNavigation());
  }

  init() {
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');

    document.body.append(tooltip);

    const appContainer = document.querySelector('.app-container');

    const leftContainer = document.createElement('div');
    leftContainer.classList.add('left-container');

    const rightContainer = document.createElement('div');
    rightContainer.classList.add('right-container');

    const shadowContainer = document.createElement('div');
    shadowContainer.classList.add('shadow-container');

    appContainer.append(leftContainer);
    appContainer.append(rightContainer);
    appContainer.append(shadowContainer);

    leftContainer.append(this.taskComponent.render());
    leftContainer.append(this.gameComponent.render());
    leftContainer.append(this.editorComponent.render());
    leftContainer.append(footerComponent());

    rightContainer.append(this.navigationComponent.render());
    rightContainer.append(this.levelNavigationComponent.render());
    rightContainer.append(this.levelPanelComponent.render());

    this.editorComponent.generateCodeMirrorInput();

    if (this.isRightPanelActive) {
      const menuToggle = document.querySelector('.navigation__menu-toggle');
      menuToggle.classList.add('active');

      rightContainer.classList.add('active');
    }
  }

  resetProgress() {
    this.service.clearData();
    const currentLevel = 1;
    this.progress = [];

    this.changeLevel(currentLevel);
    this.levelNavigationComponent.resetNavigationLevelList();
    this.navigationComponent.updateNavigationLevel(currentLevel);
  }

  toggleLevelNavigation() {
    this.navigationComponent.toggleLevelListButton();
    this.levelPanelComponent.toggleLevelPanel();
    this.levelNavigationComponent.toggleLevelNavigationPanel();
  }

  changeLevel(level) {
    this.level = level;

    this.service.setCurrentLevel(level);

    this.levelPanelComponent.updateLevelDescription(levelsData[this.level - 1]);
    this.gameComponent.updateNodes(levelsData[this.level - 1].nodes);
    // eslint-disable-next-line max-len
    this.editorComponent.updateEditorComponents(this.level, levelsData[this.level - 1].nodes, levelsData[this.level - 1].answer);
    this.taskComponent.updateTask(levelsData[this.level - 1].task);
    this.navigationComponent.updateNavigationLevel(this.level);
    this.levelNavigationComponent.updateActiveLevel(this.level);
  }

  saveProgress(level, isDone, isWithHelp) {
    this.service.setProgress(level, isDone, isWithHelp);
  }

  updateProgress(level, isDone, isWithHelp) {
    this.saveProgress(level, isDone, isWithHelp);
    this.progress = this.service.getProgress();
    this.navigationComponent.updateNavigationLevel(level);
    this.levelNavigationComponent.updateLevelStatus(isDone, isWithHelp);
  }

  checkIsAllLevelsDone() {
    const levelsDone = this.progress.filter((level) => level.isDone === true);

    return levelsDone.length === levelsData.length;
  }

  checkIsLevelDone(level) {
    let isDone = false;

    this.progress.forEach((item) => {
      if (item.id === level) {
        isDone = item.isDone;
      }
    });

    return isDone;
  }

  checkIsUsedHelp(level) {
    let isWithHelp = false;

    this.progress.forEach((item) => {
      if (item.id === level) {
        isWithHelp = item.isWithHelp;
      }
    });

    return isWithHelp;
  }

  getLevelInProgress() {
    return this.progress.filter((level) => level.id === this.level);
  }

  findFirstNotDoneLevel() {
    let level = [];

    for (let i = 0; i < this.maxLevel; i += 1) {
      level = this.progress.filter((lev) => lev.id === i + 1 && lev.isDone === true);

      if (!level.length) {
        return i + 1;
      }
    }
    return 0;
  }

  async writeAnswer() {
    await this.editorComponent.writeAnswer();

    const isWithHelp = true;
    let isDone = false;
    const levelData = this.getLevelInProgress();

    if (levelData.length) {
      isDone = levelData[0].isDone;
    }

    if (!isDone) {
      this.updateProgress(this.level, isDone, isWithHelp);
    }
  }
}
