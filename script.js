const mobilemenu = document.querySelector('#mobile-menu');
const navBar = document.querySelector('nav')
const navLinks = document.querySelector('nav ul')


function openMenu() {
    mobilemenu.classList.remove('translate-y-[-100%]');
    mobilemenu.classList.add('translate-y-0');
}

function closeMenu() {
    mobilemenu.classList.remove('translate-y-0');
    mobilemenu.classList.add('translate-y-[-100%]');
}
window.addEventListener('scroll',()=>{
    if(scrollY > 50){
navBar.classList.add('bg-white/50', 'backdrop-blur-lg',
    'shadow-sm'
);
navLinks.classList.remove('bg-white/50', 'shadow-sm')
    }else{
navBar.classList.remove('bg-white/50', 'backdrop-blur-lg',
    'shadow-sm'
);
navLinks.classList.add('bg-white/50', 'shadow-sm')

    }
})
