function toggleServicesTabs() {
    const tabheader = document.querySelector('.services .tabheader');
    const tabheaderItems = Array.from(document.querySelectorAll('.services .tabheader__item'))
            .filter((tabheader) => {
                return !tabheader.classList.contains('tabheader__item_show-more');
            });
    const tabcontentItems = document.querySelectorAll('.services .tabcontent__item');
    const tabheaderItemActiveClass = 'tabheader__item_active';
    const tabcontentItemActiveClass = 'tabcontent__item_active';

    tabheader.addEventListener('click', (e) => {
        const isValidTabheaderItem = e.target && e.target.closest('.tabheader__item') && !e.target.closest('.tabheader__button_show-more');

        if (isValidTabheaderItem) {
            tabheaderItems.forEach((tabheaderItem) => tabheaderItem.classList.remove(tabheaderItemActiveClass));
            tabcontentItems.forEach((tabcontentItem) => tabcontentItem.classList.remove(tabcontentItemActiveClass));

            e.target.closest('.tabheader__item').classList.add(tabheaderItemActiveClass);

            const indexOfActiveTabContentItem = tabheaderItems.findIndex((tabheaderItem) => tabheaderItem.classList.contains(tabheaderItemActiveClass))

            tabcontentItems[indexOfActiveTabContentItem].classList.add(tabcontentItemActiveClass);
        }
    });
}

export default toggleServicesTabs;