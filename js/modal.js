import { alertError } from './alert-error.js'

// Object literal
export const modal = {
    Wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    buttonClose: document.querySelector('.modal button.close'), 

    open(){
        modal.Wrapper.classList.add('open')
    },
    close(){
        modal.Wrapper.classList.remove('open')
    }
}

// arrow function
modal.buttonClose.onclick = () => modal.close()

window.addEventListener('keydown', handKeyDown)

function handKeyDown(event) {
    if (event.key === 'Escape'){
        modal.close()
    }
    if (event) {
        alertError.close()
    }
}