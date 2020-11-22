import TaskComponent from './task.component.js';
import GameComponent from './game.component.js';
import EditorComponent from './editor.component.js';
import LevelPanelComponent from './level-panel.component.js';
import NavigationComponent from './navigation.component.js';
import levelsData from '../data/levels.data.js';

export default class App {
    constructor() {
        this.level = 3;
        this.taskComponent = new TaskComponent(levelsData[this.level - 1].task);
        this.gameComponent = new GameComponent(levelsData[this.level - 1].nodes);
        this.editorComponent = new EditorComponent(levelsData[this.level - 1].nodes, levelsData[this.level - 1].answer);
        this.levelPanelComponent = new LevelPanelComponent(levelsData[this.level - 1]);
        this.navigationComponent = new NavigationComponent(this.level, levelsData.length, (level) => this.changeLevel(level));
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
        console.log('app - ', this.level);
        this.levelPanelComponent.updateLevelDescription(levelsData[this.level - 1]);
        this.gameComponent.updateNodes(levelsData[this.level - 1].nodes);
        this.editorComponent.updateEditorComponents(levelsData[this.level - 1].nodes, levelsData[this.level - 1].answer);
    }
}