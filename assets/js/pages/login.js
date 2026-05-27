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
    const adminPassword = document.querySelector(".adminPassword").value.trim();
    const adminEmail = document.querySelector(".adminEmail").value.trim();

    const userExists = data.find(user => user.userEmail === "admin@gmeil.com" && user.password === "12345");
    if(userExists){
        alert("Autorizado")
    }else{
        alert("Denegado")
    }
}
