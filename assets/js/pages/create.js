import { loadHTML } from '../utils/helpers.js';
import { getCreate } from '../services/api.js';
import {createCard} from '../components/createCard.js';

function initializeFormEvents() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', handleSubmit);
}

function handleSubmit(event) {
    event.preventDefault();
    alert('Formulario enviado correctamente');
}
