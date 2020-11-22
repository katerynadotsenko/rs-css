function tooltipShow(element, node) {
    const gameBranchContainer = document.querySelector('.game__branch__container');

    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');

    let classesContent = '';

    if (node.className) {
        const classes = node.className.filter(item => item !== 'dance');
        classesContent += ` class="${classes.join(' ')}"`;
    }

    tooltip.innerText = `<${node.type + classesContent}></${node.type}>`;

    const tooltipTop = `${element.offsetTop - element.offsetHeight / 4}px`;
    const tooltipLeft = `${element.offsetLeft}px`;
    
    tooltip.style.top = tooltipTop;
    tooltip.style.left = tooltipLeft;

    gameBranchContainer.append(tooltip);
}

function tooltipHide() {
    const tooltip = document.querySelector('.tooltip');
    if (tooltip) {
        tooltip.remove();
    }
}

export {tooltipShow, tooltipHide};