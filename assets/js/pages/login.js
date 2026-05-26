import axios, { Axios } from 'axios';
import { loadHTML } from '../utils/helpers.js';

/**
 * Renderiza Contactos
 */
export async function renderLogin() {
    const content = document.getElementById('content');
    content.innerHTML = await loadHTML(
        './assets/js/views/login.html'
    );
    initializeFormEvents();
}

function initializeFormEvents() {
    const form = document.getElementById('login-form');
    form.addEventListener('submit', handleSubmit);
}

async function handleSubmit(event) {
    event.preventDefault();
    const ADMIN_URL = 'http://localhost:3001/adminUsers'
    const response = await axios.get(ADMIN_URL);
    const data = await response.data;
    const adminPassword = document.querySelector(".adminPassword").value.trim();
    const adminEmail = document.querySelector(".adminEmail").value.trim();
    for(const user of data){
        if(user.adminEmail === adminEmail && user.adminPassword === adminPassword){
            alert("Acceso Consedido")
        } else {
            alert("Acceso Denegado")
        }
    }

}
