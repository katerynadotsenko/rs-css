function tooltipShow(element, node) {
    const gameBranchContainer = document.querySelector('.game__branch__container');

    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.innerText = `<${node.type}></${node.type}>`;

    const tooltipTop = `${element.offsetTop - element.offsetHeight / 4}px`;
    const tooltipLeft = `${element.offsetLeft}px`;
    
    tooltip.style.top = tooltipTop;
    tooltip.style.left = tooltipLeft;

    gameBranchContainer.append(tooltip);
}

function tooltipHide() {
    const tooltip = document.querySelector('.tooltip');
    tooltip.remove();
}

export {tooltipShow, tooltipHide};