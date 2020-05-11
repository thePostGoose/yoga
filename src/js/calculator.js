export default function calculatorPriceCommonPage() {
    let persons = document.querySelectorAll('.counter-block-input')[0],
        days = document.querySelectorAll('.counter-block-input')[1],
        select = document.querySelector('#select'),
        total = document.querySelector('#total');

    total.textContent = 0;

    function calcTotal() {
        let personsValue = +persons.value,
            daysValue = +days.value,
            selectedValue = select.value,
            totalValue = 4000 * personsValue * daysValue * selectedValue;

        if (totalValue) total.textContent = totalValue;
        else total.textContent = 0;
    }

    persons.addEventListener('input', () => {
        calcTotal()
    })
    days.addEventListener('input', () => {
        calcTotal()
    })
    select.addEventListener('change', () => {
        calcTotal()
    })
}