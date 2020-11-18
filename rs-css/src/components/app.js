import TaskComponent from './task.component.js';
import GameComponent from './game.component.js';
import EditorComponent from './editor.component.js';
import LevelPanelComponent from './level-panel.component.js';
import levelsData from '../data/levels.data.js';

export default class App {
    constructor() {
        this.taskComponent = new TaskComponent(levelsData[0].task);
        this.gameComponent = new GameComponent(levelsData[0].nodes);
        this.editorComponent = new EditorComponent(levelsData[0].nodes);
        this.levelPanelComponent = new LevelPanelComponent(levelsData[0]);
    }

    init() {
        const leftContainer = document.querySelector('.left-container');
        const rightContainer = document.querySelector('.right-container');
    
        leftContainer.append(this.taskComponent.render());
        leftContainer.append(this.gameComponent.render());
        leftContainer.append(this.editorComponent.render());
        rightContainer.append(this.levelPanelComponent.render());
    }
}