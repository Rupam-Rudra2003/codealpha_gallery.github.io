(function() {
    const buttons = document.querySelectorAll('.btn')
    const storeItems = document.querySelectorAll('.store-item') // Changed from storeImage to storeItems
    const searchBtn = document.querySelector('.search-btn');
    const closeBtn = document.querySelector('.close-btn');
    const searchBox = document.querySelector('.search-box');

    function filterItems(filter) {
        storeItems.forEach((item) => { // Changed from storeImage to storeItems
            if (filter == 'all') {
                item.style.display = 'block'
            } else {
                if (item.classList.contains(filter)) {
                    item.style.display = 'block'
                } else {
                    item.style.display = 'none'
                }
            }
        })
    }
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault()
            const filter = e.target.dataset.filter
            filterItems(filter)
        })
    })

    searchBtn.addEventListener('click', function() {
        const query = searchBox.value.toLowerCase();

        buttons.forEach((button) => {
            const filter = button.dataset.filter;

            if (filter.includes(query)) {
                button.style.display = 'inline-block';
                filterItems(filter); // Call the filter function directly
            } else {
                button.style.display = 'none';
            }
        })
    })

    closeBtn.addEventListener('click', function() {
        searchBox.value = '';
        filterItems('all');// Show all items
    })
})()