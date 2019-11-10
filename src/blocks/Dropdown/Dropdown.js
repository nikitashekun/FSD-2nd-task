/* global document */

const ready = require('../../js/utils/documentReady.js');

ready(function(){
    let dropdownButtons = document.getElementsByClassName("Dropdown__select");
    for (let i = 0; i < dropdownButtons.length; i++) {
        let dropdownButton = dropdownButtons[i];
        dropdownButton.onclick = ToggleDropdownMenu;
    }

    function ToggleDropdownMenu() {
        this.parentNode.parentNode.querySelector('.Dropdown__menu').classList.toggle("Dropdown__menu--visible");
        this.parentNode.parentNode.querySelector('.Dropdown__select').classList.toggle("Dropdown__select--active");
      }

    window.onclick = function(event) {
        let Dropdowns = document.querySelectorAll('.Dropdown');
        let flag = 0;
        for (let i = 0; i < Dropdowns.length; i++) {
            let Dropdown = Dropdowns[i];
            if (Dropdown.contains(event.target)) {
                flag = 1;
            }
        }

        if (!flag) {
            var menues = document.getElementsByClassName("Dropdown__menu");
            for (var i = 0; i < menues.length; i++) {
            var menu = menues[i];
            if (menu.classList.contains('Dropdown__menu--visible')) {
                menu.classList.remove('Dropdown__menu--visible');
            }
            }

            var selects = document.getElementsByClassName("Dropdown__select");
            for (var i = 0; i < selects.length; i++) {
            var select = selects[i];
            if (select.classList.contains('Dropdown__select--active')) {
                select.classList.remove('Dropdown__select--active');
            }
            }
        }
    }
});
