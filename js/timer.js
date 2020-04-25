function timer() {

    'use strict';

    let endOfEvent = new Date('2020-04-26').setHours(0),
        hoursValue = document.querySelector('.hours'),
        minutesValue = document.querySelector('.minutes'),
        secondsValue = document.querySelector('.seconds');

    let intervalTimerId = setInterval(() => {
        let eventDuration = (endOfEvent - new Date()),
            durationSeconds = Math.floor((eventDuration / 1000) % 60),
            durationMinutes = Math.floor((eventDuration / 1000 / 60) % 60),
            durationHours = Math.floor(eventDuration / 1000 / 60 / 60);
        if (eventDuration <= 0) {
            clearInterval(intervalTimerId);
        } else {
            hoursValue.textContent = zeroPad(durationHours);
            minutesValue.textContent = zeroPad(durationMinutes);
            secondsValue.textContent = zeroPad(durationSeconds);
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