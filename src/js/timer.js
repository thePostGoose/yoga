export default function timerCommonPage() {
    let endOfEvent = new Date('2020-06-03').setHours(0),
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
            hoursValue.textContent = String(durationHours).padStart(2, 0);
            minutesValue.textContent = String(durationMinutes).padStart(2, 0);
            secondsValue.textContent = String(durationSeconds).padStart(2, 0);
            daysValue.textContent = durationDays;
            daysPlace.textContent = (durationDays % 10 < 5 && durationDays % 10 > 1)?
            'дня':(durationDays % 10 == 1 && durationDays != 11)?'день':'дней';
        }
    }, 1000);
}
