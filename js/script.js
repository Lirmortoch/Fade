// for dropdowns
function dropContentOnMiddle(currentDropDown) {
    const button = currentDropDown.querySelector('[data-dropdown-button]');
    const content = currentDropDown.querySelector('.dropdown-content');

    const buttonPosition = button.getBoundingClientRect();

    content.style.right = `${0}px`;
}

function keepOpenDropMenu(e) {
    const isDropDownButton = e.target.matches('[data-dropdown-button]');

    if (!isDropDownButton && e.target.closest('[data-dropdown]') !== null) return;

    let currentDropDown;

    if (isDropDownButton) {
        currentDropDown = e.target.closest('[data-dropdown]');
        currentDropDown.classList.toggle('active');
        currentDropDown.querySelector('.caret').classList.toggle('caret__rotate');

        dropContentOnMiddle(currentDropDown);
    }

    document.querySelectorAll('[data-dropdown].active').forEach(dropDown => {
       if (dropDown === currentDropDown) return;
       
       dropDown.classList.remove('active');
       dropDown.querySelector('.caret').classList.toggle('caret__rotate');
    });
}

document.addEventListener('click', keepOpenDropMenu);

// Switch language 
function switchLanguage(e) {
    if (!e.target.classList.contains('language-btn') || e.target.classList.contains('current-language')) return;

    const prevLanguage = document.querySelector('.current-language');
    const buttonLanguage = document.querySelector('.dropdown__button');

    prevLanguage.classList.remove('current-language');
    
    buttonLanguage.textContent = e.target.value;
    
    e.target.classList.add('current-language');
}

document.addEventListener('click', switchLanguage);