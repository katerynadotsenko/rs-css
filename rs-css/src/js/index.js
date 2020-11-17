import Game from './Game.js';
import Editor from './Editor.js';
import LevelPanel from './LevelPanel.js';

window.onload = () => {
    const game = new Game();
    const editor = new Editor();
    const levelPanel = new LevelPanel();

    const leftContainer = document.querySelector('.left-container');
    const rightContainer = document.querySelector('.right-container');

    leftContainer.append(game.render());
    leftContainer.append(editor.render());
    rightContainer.append(levelPanel.render());
}