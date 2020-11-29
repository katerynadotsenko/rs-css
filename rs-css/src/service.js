export default class Service {

    setProgress(id, isDone, isWithHelp) {
        const progressBirds = this.getProgress();
        const data = {
            id: id,
            isDone: isDone,
            isWithHelp: isWithHelp
        }

        let isExist = false;
        for (let i in progressBirds) {
            if (progressBirds[i].id === id) {
                progressBirds[i] = data;
                isExist = true;
            }
        }
        
        if (!isExist) {
            progressBirds.push(data);
        }
        
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

    clearData() {
        localStorage.removeItem("currentLevelBirds");
        localStorage.removeItem("progressBirds");
    }
}