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

    updateTask(task) {
        this.task = task;

        const taskElement = document.querySelector('.task');
        taskElement.innerText = `${this.task}`;
    }
}