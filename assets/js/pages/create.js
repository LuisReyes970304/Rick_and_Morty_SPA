import { loadHTML } from '../utils/helpers.js';
import { getCharacters, saveCharacters } from '../services/localStorage.js';
import { renderLocalCharacters } from '../utils/renderList.js'; 

export async function renderCreate() {
    const content = document.getElementById('content');
    content.innerHTML = await loadHTML('./assets/js/views/create.html');

    const form = document.getElementById('character-form');
    const container = document.getElementById('characters-container');

    // Render the character using the global function
    renderLocalCharacters(container); 

    // save new character
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const gender = document.getElementById('gender').value;
        const imageInput = document.getElementById('image');
        const file = imageInput.files[0];

        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = function () {
            const characters = getCharacters() || [];
            characters.push({ name, gender, image: reader.result, isNew: true });
            saveCharacters(characters);

            sessionStorage.setItem('message', 'Character created successfully');
            form.reset();
            
            renderLocalCharacters(container);
        };
        reader.readAsDataURL(file);
    });
}