/* global document */

const ready = require('../../js/utils/documentReady.js');

ready(function(){
    let dropdownButtons = document.getElementsByClassName("Dropdown__select");
    for (let i = 0; i < dropdownButtons.length; i++) {
        let dropdownButton = dropdownButtons[i];
        dropdownButton.onclick = toggleDropdownMenu;
    }

    function toggleDropdownMenu() {
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

    let dropDownMenuButtons = document.getElementsByClassName("Dropdown__minus-button");
    for (let i = 0; i < dropDownMenuButtons.length; i++) {
        let dropdownButton = dropDownMenuButtons[i];
        dropdownButton.onclick = minusButton;
    }

    dropDownMenuButtons = document.getElementsByClassName("Dropdown__plus-button");
    for (let i = 0; i < dropDownMenuButtons.length; i++) {
        let dropdownButton = dropDownMenuButtons[i];
        dropdownButton.onclick = plusButton;
    }

    let dropDownMenuNumbers = document.getElementsByClassName("Dropdown__number");
    for (let i = 0; i < dropDownMenuNumbers.length; i++) {
        let dropDownMenuNumber = dropDownMenuNumbers[i];
        dropDownMenuNumber.onchange = numberButton;
    }

    function minusButton() {
        let x = this.parentNode.querySelector(".Dropdown__number");
        if (Number(x.getAttribute("value")) > 0) {
            x.setAttribute("value", Number(x.getAttribute("value")) - 1);
        }
        let event = new Event ("change");
        x.dispatchEvent(event);
    }

    function plusButton() {
        let x = this.parentNode.querySelector(".Dropdown__number");
        x.setAttribute("value", Number(x.getAttribute("value")) + 1);
        let event = new Event ("change");
        x.dispatchEvent(event);
    }

    function numberButton() {
        if (Number(this.getAttribute("value")) !== 0) {
            this.parentNode.querySelector(".Dropdown__minus-button").classList.remove("Dropdown__minus-button--disabled");
            this.parentNode.parentNode.parentNode.querySelector(".Dropdown__reset-button").classList.remove("Dropdown__reset-button--disabled");
        }
        else {
            console.log(this.parentNode.parentNode.parentNode.querySelector(".Dropdown__reset-button"));
            this.parentNode.querySelector(".Dropdown__minus-button").classList.add("Dropdown__minus-button--disabled");
            this.parentNode.parentNode.parentNode.querySelector(".Dropdown__reset-button").classList.add("Dropdown__reset-button--disabled");
        }

        let values = this.parentNode.parentNode.parentNode.querySelectorAll(".Dropdown__number");
        let value = 0;

        for (let i = 0; i < values.length; i++) {
            value += Number(values[i].getAttribute("value"));
        }

        if (value === 0) {
            this.parentNode.parentNode.parentNode.parentNode.querySelector(".Dropdown__select-text").innerHTML = "Сколько гостей";
        }
        else if (value === 1) {
            this.parentNode.parentNode.parentNode.parentNode.querySelector(".Dropdown__select-text").innerHTML = "1 гость";
        }
        else if ((value > 1)&&(value < 5)) {
            this.parentNode.parentNode.parentNode.parentNode.querySelector(".Dropdown__select-text").innerHTML = value + " гостя";
        }
        else {
            this.parentNode.parentNode.parentNode.parentNode.querySelector(".Dropdown__select-text").innerHTML = value + " гостей";
        }
    }

    let dropDownResetButtons = document.getElementsByClassName("Dropdown__reset-button");
    for (let i = 0; i < dropDownResetButtons.length; i++) {
        let dropDownResetButton = dropDownResetButtons[i];
        dropDownResetButton.onclick = resetButton;
    }

    let dropDownApplyButtons = document.getElementsByClassName("Dropdown__apply-button");
    for (let i = 0; i < dropDownApplyButtons.length; i++) {
        let ropDownApplyButton = dropDownApplyButtons[i];
        ropDownApplyButton.onclick = applyButton;
    }

    function resetButton() {
        let inputs = this.parentNode.parentNode.querySelectorAll(".Dropdown__number");
        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            input.setAttribute("value", 0);
            let event = new Event ("change");
            input.dispatchEvent(event);
        }
    }

    function applyButton() {

    }
});
