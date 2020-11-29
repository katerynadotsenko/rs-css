export default class NavigationComponent {
    constructor(level, maxLevel, changeLevel, checkIsLevelDone, checkIsUsedHelp) {
        this.level = level;
        this.maxLevel = maxLevel;
        this.changeLevel = changeLevel;
        this.checkIsLevelDone = checkIsLevelDone;
        this.checkIsUsedHelp = checkIsUsedHelp;
    }

    render() {
        const navigation = document.createElement('div');
        navigation.classList.add('navigation');

        const isDone = this.checkIsLevelDone(this.level);
        const isWithHelp = this.checkIsUsedHelp(this.level);

        const navigationTop = document.createElement('div');
        navigationTop.classList.add('navigation__top');
        navigationTop.innerHTML = `<h2 class="navigation__level">
                                        <span>Level ${this.level} of ${this.maxLevel}</span>
                                        <span class="level__check ${isDone ? 'done' : ''} material-icons">
                                            done
                                        </span>
                                        <span class="level__with-help ${isWithHelp ? 'active' : ''} material-icons">
                                            remove_red_eye
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
        this.bindNavButtonListener('toggle-menu', menuToggle);

        const chooseLevelButton = document.createElement('button');
        chooseLevelButton.classList.add('navigation__choose-level-button');
        chooseLevelButton.innerText = 'choose a level';
        this.bindNavButtonListener('toggle-level-list', chooseLevelButton);

        navigationArrows.append(buttonPrev);
        navigationArrows.append(buttonNext);

        navigationTop.append(navigationArrows);
        document.body.append(menuToggle);

        navigation.append(navigationTop);
        navigation.append(chooseLevelButton);

        return navigation;
    }

    updateNavigationLevel(level) {
        this.level = level;
        const navigationLevel = document.querySelector('.navigation__level');
        const isDone = this.checkIsLevelDone(level);
        const isWithHelp = this.checkIsUsedHelp(this.level);

        navigationLevel.innerHTML = `<span>Level ${level} of ${this.maxLevel}</span>
                                        <span class="level__check ${isDone ? 'done' : ''} material-icons">
                                            done
                                        </span>
                                        <span class="level__with-help ${isWithHelp ? 'active' : ''} material-icons">
                                            remove_red_eye
                                        </span>`;
    }

    bindNavButtonListener(value, buttonElement) {

        switch (value) {
            case 'prev':
                buttonElement.addEventListener('click', () => {
                    if (this.level > 1) {
                        this.level = this.level - 1;
                        this.changeLevel(this.level);
                    }
                });
                break;
            case 'next':
                buttonElement.addEventListener('click', () => {
                    if (this.level < this.maxLevel) {
                        this.level = this.level + 1;
                        this.changeLevel(this.level);
                    }
                });
                break;
            case 'toggle-menu':
                buttonElement.addEventListener('click', () => {
                    const rightContainer = document.querySelector('.right-container');
                    buttonElement.classList.toggle('active');
                    rightContainer.classList.toggle('active');
                });
                break;
            case 'toggle-level-list':
                buttonElement.addEventListener('click', () => {
                    const levelsNavigation = document.querySelector('.levels-navigation');
                    const levelPanel = document.querySelector('.level-panel');

                    levelPanel.classList.toggle('active');
                    levelsNavigation.classList.toggle('active');

                    if (levelsNavigation.classList.contains('active')) {
                        buttonElement.innerText = 'show description';
                    } else {
                        buttonElement.innerText = 'choose a level';
                    }
                });
                break;
        }
    }

}