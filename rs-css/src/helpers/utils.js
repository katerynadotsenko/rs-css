function showTooltip (element, node) {
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');

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

    document.body.append(tooltip);
}

function hideTooltip() {
    const tooltip = document.querySelector('.tooltip');
    if (tooltip) {
        tooltip.remove();
    }
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
                                    </div>`;

    const notificationButton = document.createElement('button');
    notificationButton.classList.add('notification__button');
    notificationButton.innerText = 'Cool!';

    notificationButton.addEventListener('click', () => {
        notification.remove();
    });

    notificationWindow.append(notificationButton);

    notification.append(notificationWindow);

    document.body.append(notification);
}

export {showTooltip, hideTooltip, showNotification};