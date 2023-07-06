function showMoreServices() {
    const tabcontent = document.querySelector('.services .tabcontent');

    tabcontent.addEventListener('click', (e) => {
        if (e.target && e.target.closest('.show-more')) {
            const hiddenRows = e.target.previousElementSibling.querySelectorAll('.table__body .table__row_hidden');

            hiddenRows.forEach((row) => row.classList.remove('table__row_hidden'));

            e.target.remove();
        }
    });
}

export default showMoreServices;