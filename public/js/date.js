document.addEventListener('DOMContentLoaded', function () {
    const createLink = document.querySelector('.create');
    const updateLink = document.querySelector('.update');

    const createDate = new Date(createLink.getAttribute('data-date'));
    const updateDate = new Date(updateLink.getAttribute('data-date'));

    createLink.innerHTML = '<span><strong>Created at</strong></span>: ' + formatDate(createDate);
    updateLink.innerHTML = '<span><strong>Last update</strong></span>: ' + formatDate(updateDate);

    function formatDate(date) {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
        return date.toLocaleDateString('en-US', options).replace(',', ' ');
    }
});