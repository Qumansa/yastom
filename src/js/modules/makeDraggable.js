function makeDraggable(elementSelector) {
    const element = document.querySelector(elementSelector);
    let isScrolling = false;
    let clientX = 0;
    let scrollLeft = element.scrollLeft;

    element.addEventListener('touchstart', (e) => {
        if (e.target) {
            isScrolling = true;
            clientX = e.clientX;
        }
    }, {passive: true});

    element.addEventListener('touchend', (e) => {
        if (e.target) {
            isScrolling = false;
        }        
    });

    element.addEventListener('touchmove', (e) => {
        if (e.target && isScrolling) {
            scrollLeft = scrollLeft + e.clientX - clientX;
            clientX = e.clientX;
        }
    }, {passive: true});
}

export default makeDraggable;