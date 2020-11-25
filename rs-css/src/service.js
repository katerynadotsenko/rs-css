export default class Service {

    setProgress(id) {
        const progressBirds = this.getProgress();
        progressBirds.push(id);
        localStorage.setItem('progressBirds', JSON.stringify(progressBirds));

    }

    getProgress() {
        const progressBirds = JSON.parse(localStorage.getItem('progressBirds')) || [];
        return progressBirds;
    }

    getCurrentLevel() {
        const currentLevelBirds = JSON.parse(localStorage.getItem('currentLevelBirds')) || 1;
        return currentLevelBirds;
    }

    setCurrentLevel(currentLevel) {
        localStorage.setItem('currentLevelBirds', currentLevel);
    }
}