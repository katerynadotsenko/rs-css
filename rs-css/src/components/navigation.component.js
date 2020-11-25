export default class NavigationComponent {
    constructor(level, maxLevel, changeLevel, checkIsLevelDone) {
        this.level = level;
        this.maxLevel = maxLevel;
        this.changeLevel = changeLevel;
        this.checkIsLevelDone = checkIsLevelDone;
    }

    render() {
        const navigation = document.createElement('div');
        navigation.classList.add('navigation');

        const isDone = this.checkIsLevelDone(this.level);

        const navigationTop = document.createElement('div');
        navigationTop.classList.add('navigation__top');
        navigationTop.innerHTML = `<h2 class="navigation__level">Level ${this.level} of ${this.maxLevel}
                                        <span class="level__check ${isDone ? 'done' : ''} material-icons">
                                            done
                                        </span>
                                    </h2>`;

        const navigationArrows = document.createElement('div');
        navigationArrows.classList.add('navigation__arrows');

        const buttonPrev = document.createElement('button');
        buttonPrev.classList.add('navigation__arrow');
        buttonPrev.innerHTML = `<span class="material-icons">arrow_back_ios</span>`;
        this.bindNavButtonListener('prev', buttonPrev);

        const buttonNext = document.createElement('button');
        buttonNext.classList.add('navigation__arrow');
        buttonNext.innerHTML = `<span class="material-icons">arrow_forward_ios</span>`;
        this.bindNavButtonListener('next', buttonNext);

        const menuToggle = document.createElement('div');
        menuToggle.classList.add('navigation__menu-toggle');
        menuToggle.innerHTML = '<span></span>';

        const chooseLevelButton = document.createElement('button');
        chooseLevelButton.classList.add('navigation__choose-level-button');
        chooseLevelButton.innerText = 'choose a level';

        navigationArrows.append(buttonPrev);
        navigationArrows.append(buttonNext);

        navigationTop.append(navigationArrows);
        navigationTop.append(menuToggle);

        navigation.append(navigationTop);
        navigation.append(chooseLevelButton);

        return navigation;
    }

    updateNavigationLevel(level=this.level) {
        const navigationLevel = document.querySelector('.navigation__level');
        const isDone = this.checkIsLevelDone(level);
        navigationLevel.innerHTML = `Level ${level} of ${this.maxLevel}
                                        <span class="level__check ${isDone ? 'done' : ''} material-icons">
                                            done
                                        </span>`;
    }

    bindNavButtonListener(value, buttonElement) {

        switch (value) {
            case 'prev':
                buttonElement.addEventListener('click', () => {
                    if (this.level > 1) {
                        this.level = this.level - 1;
                        this.changeLevel(this.level);
                        this.updateNavigationLevel();
                    }
                });
                break;
            case 'next':
                buttonElement.addEventListener('click', () => {
                    if (this.level < this.maxLevel) {
                        this.level = this.level + 1;
                        this.changeLevel(this.level);
                        this.updateNavigationLevel();
                    }
                });
                break;
        }
    }

}