function tooltipShow(element, node) {
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

function tooltipHide() {
    const tooltip = document.querySelector('.tooltip');
    if (tooltip) {
        tooltip.remove();
    }
}

export {tooltipShow, tooltipHide};