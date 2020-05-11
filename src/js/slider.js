export default function sliderCommonPage() {
    let countSlide = 0,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    function showSlides(current) {

        if (current > slides.length - 1) countSlide = 0;
        if (current < 0) countSlide = slides.length - 1;

        slides.forEach((item) => item.style.display = 'none');
        dots.forEach((item) => item.classList.remove('dot-active'));
        slides[countSlide].style.display = 'block';
        slides[countSlide].classList.add('fade');

        dots[countSlide].classList.add('dot-active');
    }

    function toggleSlide(current) {
        countSlide += current;
        showSlides(countSlide);
    }

    function currentSlide(current) {
        showSlides(countSlide = current);
    }

    next.addEventListener('click', () => {
        toggleSlide(1);
    })

    prev.addEventListener('click', () => {
        toggleSlide(-1);
    })

    dotsWrap.addEventListener('click', (event) => {
        let target = event.target;
        for (let i = 0; i < dots.length; i++) {
            if (dots[i] == target) {
                currentSlide(i)
            }
        }
    })
    showSlides(countSlide);
}