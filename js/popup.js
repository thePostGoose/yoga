window.addEventListener('DOMContentLoaded', () => {

    (function popup() {
        'use stict'

        function appearancePopup() {
            moreBtn.classList.add('more-splash')
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

        function disappearancePopup(event) {
            if (event.target == overlay ||event.target == popupCloseBtn) {
                moreBtn.classList.remove('more-splash')
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
        }


        let descriptionBtn = document.querySelectorAll('.description-btn');
        let moreBtn = document.querySelector('.more'),
            overlay = document.querySelector('.overlay'),
            popupCloseBtn = document.querySelector('.popup-close');

        moreBtn.addEventListener('click', appearancePopup);
        overlay.addEventListener('click', disappearancePopup);
        popupCloseBtn.addEventListener('click', disappearancePopup);

        for (let btn of descriptionBtn) {
            btn.addEventListener('click', appearancePopup);
        }
    })()
})