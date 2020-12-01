/* eslint-disable class-methods-use-this */
export default class Service {
  constructor() {
    this.progressBirds = [];
    this.currentLevelBirds = 1;
  }

  setProgress(id, isDone, isWithHelp) {
    this.progressBirds = this.getProgress();
    const data = {
      id,
      isDone,
      isWithHelp,
    };

    let isExist = false;

    const updatedProgress = this.progressBirds.map((item) => {
      if (item.id === id) {
        isExist = true;
        return data;
      }
      return item;
    });

    if (!isExist) {
      updatedProgress.push(data);
    }

    localStorage.setItem('progressBirds', JSON.stringify(updatedProgress));
  }

  getProgress() {
    this.progressBirds = JSON.parse(localStorage.getItem('progressBirds')) || [];
    return this.progressBirds;
  }

  getCurrentLevel() {
    this.currentLevelBirds = JSON.parse(localStorage.getItem('currentLevelBirds')) || 1;
    return this.currentLevelBirds;
  }

  setCurrentLevel(currentLevel) {
    this.currentLevelBirds = currentLevel;
    localStorage.setItem('currentLevelBirds', this.currentLevelBirds);
  }

  clearData() {
    localStorage.removeItem('currentLevelBirds');
    localStorage.removeItem('progressBirds');
  }
}
