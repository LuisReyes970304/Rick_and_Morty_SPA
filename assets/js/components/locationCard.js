/**
 * Location Card Component
 */

export function locationCard(location) {
    return `
        <article class="card">
            <div class="card-body">
                <h3>${location.name}</h3>
                <p><strong>Type:</strong>${location.type}</p>
                <p><strong>Dimension:</strong>${location.dimension}</p>
                <p><strong>Residents quantity:</strong>${location.residents.length}</p>
                <button type="button" class="editBtn" data-index="${location.id}"> Edit </button>
                <button type="button" class="deleteBtn" data-index="${location.id}"> Delete </button>
            </div>
        </article>
    `;
}