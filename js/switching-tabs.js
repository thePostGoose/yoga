window.addEventListener('DOMContentLoaded', () => {
    'use stict'

    function switchigTabs() {


        let tabContents = document.querySelectorAll('.info-tabcontent'),
            infoHeader = document.querySelector('.info-header'),
            tabs = document.querySelectorAll('.info-header-tab'),
            descriptionBtn = document.querySelectorAll('.description-btn'),
            formPopup = decoratorPopup(overlay, popupCloseBtn);
        for (let btn of descriptionBtn) {
            formPopup(btn);
        }
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
    }

    function fadeInOutpopUp(openBtn, closeBtn, overlay) {

        function appearancePopup() {
            openBtn.classList.add('more-splash')
            document.body.style.overflow = 'hidden';
            let opacity = 0.01;
            overlay.style.display = 'block';
            overlay.style.opacity = opacity;
            let requestId = requestAnimationFrame(function animate() {
                overlay.style.opacity = opacity;
                opacity += 0.1 * opacity;
                if (opacity < 1) {
                    requestAnimationFrame(animate);
                } else {
                    overlay.style.opacity = 1;
                }
            })
        }

        function disappearancePopup() {
            openBtn.classList.remove('more-splash')
            let opacity = 1;
            let requestId = requestAnimationFrame(function animate() {
                overlay.style.opacity = opacity;
                opacity -= 0.05 * opacity;
                if (opacity > 0.2) {
                    requestAnimationFrame(animate);
                } else {
                    overlay.style.display = 'none';
                    overlay.style.opacity = '';
                };
            })
            document.body.style.overflow = '';
        }

        openBtn.addEventListener('click', appearancePopup);
        overlay.addEventListener('click', disappearancePopup);
        closeBtn.addEventListener('click', disappearancePopup);
    }

    function decoratorPopup(overlay, closeBtn) {
        return function (openBtn) {
            fadeInOutpopUp(openBtn, closeBtn, overlay);
        }
    }

    let moreBtn = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        popupCloseBtn = document.querySelector('.popup-close');
    switchigTabs();
    fadeInOutpopUp(moreBtn, popupCloseBtn, overlay);
})