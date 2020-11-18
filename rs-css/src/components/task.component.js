export default class TaskComponent {
    constructor(task) {
        this.task = task;
    }

    render() {
        const task = document.createElement('div');
        task.classList.add('task');
        task.innerText = `${this.task}`;

        return task;
    }
}