import { loadHTML } from '../utils/helpers.js';
import { getCharacters } from '../services/api.js';
import { characterCard } from '../components/characterCard.js';

const allCharacter = document.querySelectorAll("card")

/**
 * Renderiza Home
 */
export async function renderHome() {
    const content = document.getElementById('content');
    content.innerHTML = await loadHTML(
        './assets/js/views/home.html'
    );
    const container = document.getElementById(
        'characters-container'
    );
    const characters = await getCharacters();
    container.innerHTML = characters
        .map(character => characterCard(character))
        .join('');
}

document.addEventListener("DOMContentLoaded", () => {
    const metadata = localStorage.getItem("data");
    
    if (metadata) {
        document.body.innerHTML = metadata;
    }
});

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("deleteBtn")) {
        let charToDelete = e.target.closest(".card");
        
        if (charToDelete) {
            charToDelete.classList.add("hidden");
            localStorage.setItem("data", document.body.innerHTML);
        }
    }
});
