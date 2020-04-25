window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let tabContents = document.querySelectorAll('.info-tabcontent'),
        infoHeader = document.querySelector('.info-header'),
        tabs = document.querySelectorAll('.info-header-tab');

    function animateTabs(currentIndex = 0) {
        return (event) => {
            let target = event.target;
            if (target && target.classList.contains('info-header-tab')) {
                let index = [].indexOf.call(tabs, target);
                tabContents[currentIndex].classList.remove('show');
                tabContents[index].classList.add('show');
                currentIndex = index;
            }
        }
    }

    infoHeader.addEventListener('click', animateTabs())
})