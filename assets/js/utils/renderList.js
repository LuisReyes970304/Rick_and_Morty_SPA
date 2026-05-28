// ../utils/renderList.js
import { characterCard } from '../components/characterCard.js';
import { getCharacters, saveCharacters } from '../services/localStorage.js';

/**
 * Render the characters
 * @param {HTMLElement} container 
 */
export function renderLocalCharacters(container) {
    if (!container) return;

    const characters = getCharacters() || [];
    
    container.innerHTML = characters.map((character, index) =>
        characterCard(character, index)
    ).join('');

    // --- DETELE CHARACTER ---
    container.querySelectorAll('.deleteBtn').forEach(button => {
        button.onclick = function (e) {
            e.preventDefault();
            if (!confirm('Are you sure you want to delete this character?')) return;
            
            const index = this.dataset.index;
            const currentCharacters = getCharacters();
            currentCharacters.splice(index, 1);
            saveCharacters(currentCharacters);
            
            // Render in recursivity
            renderLocalCharacters(container);
        };
    });

    // --- EDIT CHARACTER ---
    container.querySelectorAll('.editBtn').forEach(button => {
        button.onclick = function (e) {
            e.preventDefault();
            const index = this.dataset.index;
            const currentCharacters = getCharacters();
            
            const newName = prompt('Enter new name:', currentCharacters[index].name);
            const newGender = prompt('Enter new gender:', currentCharacters[index].gender);
            
            if (!newName || !newGender) return;
            
            currentCharacters[index].name = newName;
            currentCharacters[index].gender = newGender;
            saveCharacters(currentCharacters);
            
            renderLocalCharacters(container);
        };
    });
}