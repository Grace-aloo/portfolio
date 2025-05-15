const mobilemenu = document.querySelector('#mobile-menu');

function openMenu() {
    mobilemenu.classList.remove('translate-y-[-100%]');
    mobilemenu.classList.add('translate-y-0');
}

function closeMenu() {
    mobilemenu.classList.remove('translate-y-0');
    mobilemenu.classList.add('translate-y-[-100%]');
}
