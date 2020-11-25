export default class LevelNavigationComponent {
    constructor(level, levelsData, checkIsLevelDone, changeLevel) {
        this.level = level;
        this.levelsData = levelsData;
        this.checkIsLevelDone = checkIsLevelDone;
        this.changeLevel = changeLevel;
    }

    render() {
        const levelsNavigation = document.createElement('div');
        levelsNavigation.classList.add('levels-navigation');

        levelsNavigation.append(this.generateLevelsList());

        return levelsNavigation;
    }

    generateLevelsList() {
        let fragment = document.createDocumentFragment();

        this.levelsData.forEach(level => {
            const isDone = this.checkIsLevelDone(level.level);
            const isActive = level.level === this.level;

            const levelsNavigationItem = document.createElement('div');
            levelsNavigationItem.classList.add('levels-navigation__item');

            if (isActive) {
                levelsNavigationItem.classList.add('active');
            }

            levelsNavigationItem.innerHTML += `<span class="level__check ${isDone ? 'done' : ''} material-icons">
                                            done
                                        </span>
                                        <span>${level.level}</span>
                                        <span>${level.description.syntax}</span>`;

            levelsNavigationItem.addEventListener('click', () => {
                this.changeLevel(level.level);
            });

            fragment.append(levelsNavigationItem);
        });

        return fragment;
    }

    updateActiveLevel(level) {
        const levelsNavigationItems = document.querySelector('.levels-navigation').childNodes;

        levelsNavigationItems[this.level - 1].classList.remove('active');
        levelsNavigationItems[level - 1].classList.add('active');

        this.level = level;
    }

    updateLevelToDone(level) {
        const levelToUpdate = document.querySelectorAll('.levels-navigation .level__check')[level - 1];

        levelToUpdate.classList.add('done');
    }
}