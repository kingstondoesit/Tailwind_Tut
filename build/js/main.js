const initApp = () =>{
    const hamburgerBtn = document.getElementById('hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        hamburgerBtn.classList.toggle('toggle-btn')
    };
    const closeMenuOnEscape = (event) => {
        if (event.key === 'Escape') {
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
                hamburgerBtn.classList.toggle('toggle-btn')
                hamburgerBtn.blur(); // Remove focus from the button
            }
        }
    };

    hamburgerBtn.addEventListener('click', toggleMenu);
    mobileMenu.addEventListener('click', toggleMenu);
    window.addEventListener('keyup', closeMenuOnEscape);
}

document.addEventListener('DOMContentLoaded', initApp)