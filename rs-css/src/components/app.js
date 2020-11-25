import TaskComponent from './task.component.js';
import GameComponent from './game.component.js';
import EditorComponent from './editor.component.js';
import LevelPanelComponent from './level-panel.component.js';
import NavigationComponent from './navigation.component.js';
import levelsData from '../data/levels.data.js';

import Service from '../service.js';

export default class App {
    constructor() {
        this.service = new Service();
        this.progress = this.service.getProgress();

        this.level = this.service.getCurrentLevel();
        this.taskComponent = new TaskComponent(levelsData[this.level - 1].task);
        this.gameComponent = new GameComponent(levelsData[this.level - 1].nodes);
        this.editorComponent = new EditorComponent(this.level, levelsData[this.level - 1].nodes, levelsData[this.level - 1].answer, 
                                                        (level) => this.updateProgress(level), (level) => this.changeLevel(level));
        this.levelPanelComponent = new LevelPanelComponent(levelsData[this.level - 1]);
        this.navigationComponent = new NavigationComponent(this.level, levelsData.length, (level) => this.changeLevel(level), (level) => this.checkIsLevelDone(level));
    }

    init() {
        const leftContainer = document.querySelector('.left-container');
        const rightContainer = document.querySelector('.right-container');
    
        leftContainer.append(this.taskComponent.render());
        leftContainer.append(this.gameComponent.render());
        leftContainer.append(this.editorComponent.render());

        rightContainer.append(this.navigationComponent.render());
        rightContainer.append(this.levelPanelComponent.render());
    }

    changeLevel(level) {
        this.level = level;

        this.service.setCurrentLevel(level);

        this.levelPanelComponent.updateLevelDescription(levelsData[this.level - 1]);
        this.gameComponent.updateNodes(levelsData[this.level - 1].nodes);
        this.editorComponent.updateEditorComponents(this.level, levelsData[this.level - 1].nodes, levelsData[this.level - 1].answer);
        this.taskComponent.updateTask(levelsData[this.level - 1].task);
        this.navigationComponent.updateNavigationLevel(this.level);
    }

    saveProgress(level) {
        this.service.setProgress(level);
    }

    updateProgress(level) {
        this.saveProgress(level);
        this.progress = this.service.getProgress();
        this.navigationComponent.updateNavigationLevel(level);
    }

    checkIsLevelDone(level) {
        return this.progress.includes(level);
    }
}