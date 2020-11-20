export default class NavigationComponent {
    constructor(level, maxLevel, changeLevel) {
        this.level = level;
        this.maxLevel = maxLevel;
        this.changeLevel = changeLevel;
    }

    render() {
        const navigation = document.createElement('div');
        navigation.classList.add('navigation');

        navigation.innerHTML = `<h2>Level ${this.level}</h2>`;

        const buttonPrev = document.createElement('button');
        buttonPrev.innerText = 'prev';
        this.bindNavButtonListener('prev', buttonPrev);

        const buttonNext = document.createElement('button');
        buttonNext.innerText = 'next';
        this.bindNavButtonListener('next', buttonNext);

        navigation.append(buttonPrev);
        navigation.append(buttonNext);

        return navigation;
    }

    bindNavButtonListener(value, buttonElement) {

        switch (value) {
            case 'prev':
                buttonElement.addEventListener('click', () => {
                    if (this.level > 1) {
                        this.level = this.level - 1;
                        this.changeLevel(this.level);
                        console.log("NavigationComponent - ", this.level);
                    }
                });
                break;
            case 'next':
                buttonElement.addEventListener('click', () => {
                    if (this.level < this.maxLevel) {
                        this.level = this.level + 1;
                        this.changeLevel(this.level);
                        console.log('this.maxLevel - ', this.maxLevel);
                        console.log("NavigationComponent - ", this.level);
                    }
                });
                break;
        }
    }

}