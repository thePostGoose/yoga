export default function postFormsCommonPage() {
    let message = {
        loading: 'Загрузка',
        success: 'Скоро мы с вами свяжемся!',
        failyre: 'Что-то пошло не так :( Попробуйте позже!'
    }

    let formAtModal = document.querySelector('.main-form'),
        inputs = formAtModal.querySelectorAll('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    formAtModal.addEventListener('submit', async (event) => {
        event.preventDefault();

        formAtModal.appendChild(statusMessage);

        let formData = new FormData(formAtModal);
        let json = {};
        formData.forEach((value, key) => {
            json[key] = value;
        })
        json = JSON.stringify(json);

        let response = await fetch('server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: json
        })

        if (response.status == 200) {
            statusMessage.innerHTML = message.success;
        } else {
            statusMessage.innerHTML = message.failyre;
        }

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
        }
    })
}