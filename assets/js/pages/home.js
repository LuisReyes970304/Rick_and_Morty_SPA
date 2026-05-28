import { loadHTML } from '../utils/helpers.js';
import { getCharacters as getApiCharacters } from '../services/api.js'; 
import { getCharacters as getLocalCharacters, saveCharacters as saveLocalCharacters } from '../services/localStorage.js'; 
import { characterCard } from '../components/characterCard.js';

export async function renderHome() {
    const content = document.getElementById('content');
    content.innerHTML = await loadHTML('./assets/js/views/home.html');
    
    const container = document.getElementById('characters-container');
    
    await updateHomeView(container);
}
// This function is responsible for updating the home view with the latest characters,
// including handling deletions and edits for both API and local characters.

async function updateHomeView(container) {
    if (!container) return;

    const apiResponse = await getApiCharacters();
    const apiCharacters = Array.isArray(apiResponse) ? apiResponse : (apiResponse?.results || []); 
    // Ensure we have an array of characters from the API response
    
    const localCharacters = getLocalCharacters() || [];
    const deletedApiIds = JSON.parse(localStorage.getItem('deleted_api_characters')) || [];

    const editedApiCharacters =
    JSON.parse(localStorage.getItem('edited_api_characters')) || {};

    const activeApiCharacters = apiCharacters
    .filter(char => !deletedApiIds.includes(char.id))   
    .map(char => {

        if (editedApiCharacters[char.id]) {
            return {
                ...char,
                ...editedApiCharacters[char.id]
            };
        }

        return char;
    });
    
    const allCharacters = [...localCharacters, ...activeApiCharacters];

    if (allCharacters.length === 0) {
        container.innerHTML = '<p>No characters found.</p>';
        return;
    }

    container.innerHTML = allCharacters
        .map((character, index) => characterCard(character, index))
        .join('');

    container.querySelectorAll('.deleteBtn').forEach(button => {
        button.onclick = async function (e) {
            e.preventDefault();
            
            const confirmDelete = confirm('Are you sure you want to delete this character?');
            if (!confirmDelete) return;

            const index = this.dataset.index;
            const characterToId = allCharacters[index];

            if (characterToId.isNew) {
                const currentLocals = getLocalCharacters() || [];
                const updatedLocals = currentLocals.filter(char => char.name !== characterToId.name);
                saveLocalCharacters(updatedLocals);
            } else {
                deletedApiIds.push(characterToId.id);
                localStorage.setItem('deleted_api_characters', JSON.stringify(deletedApiIds));
            }

            await updateHomeView(container);
        };
    });

    container.querySelectorAll('.editBtn').forEach(button => {

    button.onclick = async function (e) {

        e.preventDefault();

        const index = this.dataset.index;

        const characterToEdit = allCharacters[index];

        const newName = prompt(
            'Enter new name:',
            characterToEdit.name
        );

        const newGender = prompt('Enter new gender:', characterToEdit.gender);

        if (!newName || !newGender) return;

        // LOCAL CHARACTER
        if (characterToEdit.isNew) {

            const currentLocals = getLocalCharacters() || [];

            const localIndex = currentLocals.findIndex(
                char => char.name === characterToEdit.name
            );

            currentLocals[localIndex].name = newName;
            currentLocals[localIndex].gender = newGender;

            saveLocalCharacters(currentLocals);

        } 
        
        // API CHARACTER
        else {

            const editedApiCharacters =
                JSON.parse(
                    localStorage.getItem('edited_api_characters')) || {};

            editedApiCharacters[characterToEdit.id] = {
                name: newName,
                gender: newGender
            };

            localStorage.setItem('edited_api_characters', JSON.stringify(editedApiCharacters));
        }

        await updateHomeView(container);
    };
});
}