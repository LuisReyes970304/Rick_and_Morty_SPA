import { loadHTML } from '../utils/helpers.js';
import { getCharacters, saveCharacters } from '../services/localStorage.js';
import { characterCard } from '../components/characterCard.js';

export async function renderCreate() {
    const content = document.getElementById('content');

    content.innerHTML = await loadHTML('./assets/js/views/create.html');

    const form = document.getElementById('character-form');
    const container =document.getElementById('characters-container');

    renderCharacters(); 

// CREATE CHARACTER 
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const gender = document.getElementById('gender').value;
        const imageInput = document.getElementById('image');
        const file = imageInput.files[0];

        if (!file) return;
            const reader = new FileReader();
            reader.onload = function () {
                const characters = getCharacters();
                characters.push({name, gender, image: reader.result, isNew: true});
                saveCharacters(characters);
                sessionStorage.setItem('message', 'Character created successfully');
                form.reset();
                renderCharacters();
            };

            reader.readAsDataURL(file);
        }
    );

// RENDER CHARACTERS
    function renderCharacters() {
        const characters = getCharacters();
        container.innerHTML = characters.map((character, index) =>
        characterCard(character,index)).join('');
// DELETE
            document.querySelectorAll('.deleteBtn') .forEach(button => {
                    button.addEventListener('click', function (e) {
                            e.preventDefault();
                            e.stopPropagation();
                            const confirmDelete = confirm('Are you sure you want to delete this character?');
                            if (!confirmDelete) {
                                return;
                            }
                            const index = this.dataset.index;
                            const characters = getCharacters();
                            characters.splice(index, 1);
                            saveCharacters(characters);
                            renderCharacters();
                        }
                    );
                });
// EDIT 
            const editBtns = document.querySelectorAll('.editBtn');
                editBtns.forEach(button => { 
                    button.addEventListener('click',
                        function () {
                            const index = this.dataset.index;
                            const characters = getCharacters();
                            const newName = prompt('Enter new name:', characters[index].name);
                            const newGender = prompt('Enter new gender:', characters[index].gender);
                            if (!newName || !newGender){
                            }{return;}
                            characters[index].name = newName;
                            characters[index].gender = newGender;
                            saveCharacters( characters);
                            renderCharacters();
                        }
                    );
            });
    }
}
