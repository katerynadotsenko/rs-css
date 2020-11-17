import Game from './Game.js';
import Editor from './Editor.js';
import LevelPanel from './LevelPanel.js';
import levelsData from './levels-data.js';

window.onload = () => {
    const game = new Game(levelsData[0].nodes);
    const editor = new Editor(levelsData[0].nodes);
    const levelPanel = new LevelPanel();

    const leftContainer = document.querySelector('.left-container');
    const rightContainer = document.querySelector('.right-container');

    leftContainer.append(game.render());
    leftContainer.append(editor.render());
    rightContainer.append(levelPanel.render());
}