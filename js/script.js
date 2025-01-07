// for dropdowns
function keepOpenDropMenu(e) {
    const isDropDownButton = e.target.matches('[data-dropdown-button]');

    if (!isDropDownButton && e.target.closest('[data-dropdown]') !== null) return;

    let currentDropDown;

    if (isDropDownButton) {
        currentDropDown = e.target.closest('[data-dropdown]');
        currentDropDown.classList.toggle('active');
        currentDropDown.querySelector('.caret').classList.toggle('caret__rotate');
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
    let closestElem = e.target.closest('.language-btn:not(.language-btn.current-language)');

    if (!closestElem || e.target.classList.contains('current-language')) return;

    let target = e.target.value ? e.target : closestElem;

    const prevLanguage = document.querySelector('.current-language');
    const buttonLanguage = document.querySelector('.dropdown__button');

    prevLanguage.classList.remove('current-language');
    buttonLanguage.innerHTML = target.value + '<span class="lang-switch-btn__arrow caret caret__rotate"></span>';
    
    target.classList.add('current-language');
}

document.addEventListener('click', switchLanguage); 