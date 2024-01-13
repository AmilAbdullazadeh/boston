let form = document.querySelector('#appealsForm');
let message = document.querySelector('#messageDisplay')

const baseUrl = 'https://jsonplaceholder.typicode.com/posts'

let messageData = {
    img: '',
    title: '',
    content: ''
}

function visibleMessage() {
    form.reset()

    form.style.display = 'none'
    message.style.display = 'block'

    setTimeout(() => {
        form.style.display = 'block'
        message.style.display = 'none'
    }, 5000)
}

function messageDisplay(data) {
    let img = document.querySelector('.message-img')
    let title = document.querySelector('.message-title')
    let content = document.querySelector('.message-content')

    img.src = data.img
    title.textContent = data.title
    content.textContent = data.content

    visibleMessage()
}

function submit(e) {
    e.preventDefault()

    let form = this
    let formData = new FormData(form)

    fetch(baseUrl, {
        method: 'POST',
        body: formData
    }).then(response => {
        if (response.status === 201) {
            return response.json()
        } else {
            throw new Error('Server wasnt able to process your request')
        }
    })
        .then(data => {
            messageData.img = './assets/images/success_icon.svg'
            messageData.title = 'Müraciətiniz uğurla göndərildi!'
            messageData.content = 'Sizinlə tezliklə əlaqə saxlayacağıq'
            messageDisplay(messageData)
        })
        .catch(error => {
            messageData.img = './assets/images/error_icon.svg'
            messageData.title = 'Xəta baş verdi'
            messageData.content = 'Zəhmət olmasa yenidən cəhd edin'
            messageDisplay(data)
        })
}

form.addEventListener('submit', submit)