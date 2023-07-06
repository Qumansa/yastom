function showMoreTabheaders() {
    const button = document.querySelector('.tabheader__button_show-more');
    const hiddenTabheaders = document.querySelectorAll('.tabheader__item_hidden');
    const showMoreTabheader = document.querySelector('.tabheader__item_show-more');

    button.addEventListener('click', () => {
        hiddenTabheaders.forEach((tabheader) => {
            tabheader.classList.remove('tabheader__item_hidden');
        });

        showMoreTabheader.remove();
    });
}

export default showMoreTabheaders;