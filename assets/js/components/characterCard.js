export function characterCard(character, index) {
    return `
        <article class="card">
            ${character.isNew ? ` <span class="badge"> NEW </span> ` : ''}
            <img class="card-image" src="${character.image}" alt="${character.name}">
            <div class="card-body">
                <h3> ${character.name}</h3>
                <p> <strong>Gender:</strong> ${character.gender}</p>
                <div class="card-actions">
                <button type="button" class="editBtn" data-index="${index}"> Edit </button>
                <button type="button" class="deleteBtn" data-index="${index}"> Delete </button>
                </div>
            </div>
        </article>
    `;
}