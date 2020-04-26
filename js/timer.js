function timer() {

    'use strict';

    let endOfEvent = new Date('2020-05-8').setHours(0),
        hoursValue = document.querySelector('.hours'),
        minutesValue = document.querySelector('.minutes'),
        secondsValue = document.querySelector('.seconds'),
        daysValue = document.querySelector('.days'),
        daysPlace = document.querySelector('.days-place'),
        timerContainer = document.querySelector('.timer-container');

    let intervalTimerId = setInterval(() => {
        let eventDuration = (endOfEvent - new Date()),
            durationSeconds = Math.floor((eventDuration / 1000) % 60),
            durationMinutes = Math.floor((eventDuration / 1000 / 60) % 60),
            durationHours = Math.floor(eventDuration / 1000 / 60 / 60 % 24),
            durationDays = Math.floor(eventDuration / 1000 / 60 / 60 / 24);

        if (eventDuration <= 0) {
            timerContainer.style.textAlign = 'center';
            clearInterval(intervalTimerId);
            
        } else {
            hoursValue.textContent = zeroPad(durationHours);
            minutesValue.textContent = zeroPad(durationMinutes);
            secondsValue.textContent = zeroPad(durationSeconds);
            daysValue.textContent = durationDays;
            daysPlace.textContent = (durationDays % 10 < 5 && durationDays % 10 > 1)?
            'дня':(durationDays % 10 == 1 && durationDays != 11)?'день':'дней';
        }
    }, 1000);

    function charsPad(str, count, char) {
        str += '';
        while (str.length < count) {
            str = char + str;
        }
        return str
    }

    function decoratorCharsPad(func, count, char)   {
        return function (str)   {
            return func(str, count, char)
        }
    }

    let zeroPad = decoratorCharsPad(charsPad, 2, 0);

}

window.addEventListener('DOMContentLoaded', () =>   {
    timer();
})