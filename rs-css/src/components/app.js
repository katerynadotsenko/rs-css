import TaskComponent from './task.component.js';
import GameComponent from './game.component.js';
import EditorComponent from './editor.component.js';
import LevelPanelComponent from './level-panel.component.js';
import NavigationComponent from './navigation.component.js';
import LevelNavigationComponent from './levels-navigation.component.js';
import FooterComponent from './footer.component.js';

import levelsData from '../data/levels.data.js';

import Service from '../service.js';

//TODO shadow bg (menu) for devices

export default class App {
    constructor() {
        this.service = new Service();

        this.isRightPanelActive = this.setRightPanelMode();

        this.progress = this.service.getProgress();
        this.level = this.service.getCurrentLevel();
        this.maxLevel = levelsData.length;

        this.taskComponent = new TaskComponent(levelsData[this.level - 1].task);
        this.gameComponent = new GameComponent(levelsData[this.level - 1].nodes);
        this.editorComponent = new EditorComponent(this.level, levelsData[this.level - 1].nodes, levelsData[this.level - 1].answer, 
                                                        (level, isDone, isWithHelp) => this.updateProgress(level, isDone, isWithHelp), 
                                                        (level) => this.changeLevel(level), this.maxLevel,
                                                        () => this.checkIsAllLevelsDone());
        this.levelPanelComponent = new LevelPanelComponent(levelsData[this.level - 1], () => this.writeAnswer());
        this.navigationComponent = new NavigationComponent(this.level, this.maxLevel, (level) => this.changeLevel(level), 
                                                                (level) => this.checkIsLevelDone(level), (level) => this.checkIsUsedHelp(level));
        this.levelNavigationComponent = new LevelNavigationComponent(this.level, levelsData, (level) => this.checkIsLevelDone(level), 
                                                                    (level) => this.checkIsUsedHelp(level), (level) => this.changeLevel(level),
                                                                    () => this.resetProgress());
        this.footerComponent = new FooterComponent();
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

        appContainer.append(leftContainer);
        appContainer.append(rightContainer);
    
        leftContainer.append(this.taskComponent.render());
        leftContainer.append(this.gameComponent.render());
        leftContainer.append(this.editorComponent.render());
        leftContainer.append(this.footerComponent.render());

        rightContainer.append(this.navigationComponent.render());
        rightContainer.append(this.levelNavigationComponent.render());
        rightContainer.append(this.levelPanelComponent.render());

        if (this.isRightPanelActive) {
            const menuToggle = document.querySelector('.navigation__menu-toggle');
            menuToggle.classList.add('active');

            rightContainer.classList.add('active');
        }

        const cssPanelInput = document.querySelector('.css-panel__input');
        cssPanelInput.focus();
    }

    resetProgress() {
        this.service.clearData();
        const currentLevel = 1;
        this.progress = [];
        
        this.changeLevel(currentLevel);
        this.levelNavigationComponent.resetNavigationLevelList();
        this.navigationComponent.updateNavigationLevel(currentLevel);
    }

    setRightPanelMode() {
        const windowSize = window.innerWidth;

        return windowSize > 768;
    }

    changeLevel(level) {
        this.level = level;

        this.service.setCurrentLevel(level);

        this.levelPanelComponent.updateLevelDescription(levelsData[this.level - 1]);
        this.gameComponent.updateNodes(levelsData[this.level - 1].nodes);
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
        this.levelNavigationComponent.updateLevelStatus(level, isDone, isWithHelp);
    }

    checkIsAllLevelsDone() {
        const levelsDone = this.progress.filter(level => level.isDone === true);

        return levelsDone.length === levelsData.length ? true : false;
    }

    checkIsLevelDone(level) {
        let isDone = false;

        for(let i in this.progress) {
            if (this.progress[i].id === level) {
                isDone = this.progress[i].isDone;
            }
        }
        return isDone;
    }

    checkIsUsedHelp(level) {
        let isWithHelp = false;

        for(let i in this.progress) {
            if (this.progress[i].id === level) {
                isWithHelp = this.progress[i].isWithHelp;
            }
        }
        return isWithHelp;
    }

    getLevelInProgress() {
        return this.progress.filter(level => level.id === this.level);
    }

    writeAnswer() {
        this.editorComponent.writeAnswer();
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