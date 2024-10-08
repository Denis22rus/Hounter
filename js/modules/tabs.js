function tabs() {
    // Получаем кнопки
    const tabsBtn = document.querySelectorAll('.featured__btn');
    const TabsItems = document.querySelectorAll('.featured__card');

    tabsBtn.forEach(onTabClick);

    function onTabClick(item) {
        item.addEventListener('click', function() {
            let currentBtn = item;
            let tabIds = currentBtn.getAttribute('data-tab').split(',');

            tabsBtn.forEach(function(btn) {
                btn.classList.remove('_active');
            });

            TabsItems.forEach(function(tab) {
                tab.classList.remove('_active');
            });

            currentBtn.classList.add('_active');

            tabIds.forEach(function(tabId) {
                let currentTab = document.querySelector(tabId.trim());
                if (currentTab) {
                    currentTab.classList.add('_active');
                }
            });
        });
    }
    document.querySelector('.featured__btn').click();
}

module.exports = tabs;