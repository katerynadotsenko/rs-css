export default class LevelNavigationComponent {
    constructor(level, levelsData, checkIsLevelDone, checkIsUsedHelp, changeLevel, resetProgress) {
        this.level = level;
        this.levelsData = levelsData;
        this.checkIsLevelDone = checkIsLevelDone;
        this.checkIsUsedHelp = checkIsUsedHelp;
        this.changeLevel = changeLevel;
        this.resetProgress = resetProgress;
    }

    render() {
        const levelsNavigation = document.createElement('div');
        levelsNavigation.classList.add('levels-navigation');

        levelsNavigation.append(this.generateLevelsList());
        levelsNavigation.append(this.generateResetProgressButton());

        return levelsNavigation;
    }

    generateLevelsList() {
        let levelsNavigationContainer = document.createElement('div');
        levelsNavigationContainer.classList.add('levels-navigation__container');

        this.levelsData.forEach(level => {
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
            });

            levelsNavigationContainer.append(levelsNavigationItem);
        });

        return levelsNavigationContainer;
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
        const levelsNavigationItems = document.querySelector('.levels-navigation__container').childNodes;

        levelsNavigationItems[this.level - 1].classList.remove('active');
        levelsNavigationItems[level - 1].classList.add('active');

        this.level = level;
    }

    updateLevelStatus(level, isDone, isWithHelp) {
        if (isDone) {
            const levelToUpdateDone = document.querySelectorAll('.levels-navigation__container .level__check')[level - 1];
            levelToUpdateDone.classList.add('done');
        }

        if (isWithHelp) {
            const levelToUpdateWithHelp = document.querySelectorAll('.levels-navigation__container .level__with-help')[level - 1];
            levelToUpdateWithHelp.classList.add('active');
        }
    }

    resetNavigationLevelList() {
        const levelsNavigationItems = document.querySelector('.levels-navigation__container').childNodes;
        levelsNavigationItems.forEach(item => {
            item.querySelector('.level__check').classList.remove('done');
            item.querySelector('.level__with-help').classList.remove('active');
        });
    }
}