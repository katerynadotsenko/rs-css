export default class TaskComponent {
    constructor(task) {
        this.task = task;
    }

    render() {
        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper', 'wrapper_task');
        
        const task = document.createElement('div');
        task.classList.add('task');
        task.innerText = `${this.task}`;

        wrapper.append(task);

        return wrapper;
    }

    updateTask(task) {
        this.task = task;

        const taskElement = document.querySelector('.task');
        taskElement.innerText = `${this.task}`;
    }
}