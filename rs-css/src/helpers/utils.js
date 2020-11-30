function showTooltip (element, node) {

    const tooltip = document.querySelector('.tooltip');
    tooltip.style.display = 'block';

    let classesContent = '';

    if (node.className) {
        const classes = node.className.filter(item => item !== 'dance');
        classesContent += classes.length ? ` class="${classes.join(' ')}"` : '';
    }

    tooltip.innerText = `<${node.type + classesContent}></${node.type}>`;

    const coords = element.getBoundingClientRect();

    const tooltipTop = `${coords.top - 50}px`;
    const tooltipLeft = `${coords.left}px`;
    
    tooltip.style.top = tooltipTop;
    tooltip.style.left = tooltipLeft;
}

function hideTooltip() {
    const tooltip = document.querySelector('.tooltip');
    tooltip.style.display = 'none';
}

function showNotification() {
    const notification = document.createElement('div');
    notification.classList.add('notification');

    const notificationWindow = document.createElement('div');
    notificationWindow.classList.add('notification__window');

    notificationWindow.innerHTML = `<div class="notification__header">
                                        Congratulations!
                                    </div>
                                    <div class="notification__content">
                                        You have successfully completed all levels
                                    </div>
                                    <button class="notification__button">
                                        Cool!
                                    </button>`;

    notification.addEventListener('click', (e) => {
        if (e.target.classList.contains('notification') || e.target.classList.contains('notification__button')) {
            notification.remove();
        }
    });

    notification.append(notificationWindow);

    document.body.append(notification);
}

export {showTooltip, hideTooltip, showNotification};