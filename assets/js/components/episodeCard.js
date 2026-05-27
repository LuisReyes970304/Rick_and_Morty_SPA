/**
 * Episode Card Component
 */

export function episodeCard(episode) {
    const totalPersonajes = episode.characters.length;
    const nombreEnMayusculas = episode.name.toUpperCase();

    return `
        <article class="card" id="episode-${episode.id}">
            <div class="card-body">
                <h3>${nombreEnMayusculas}</h3>
                <p>
                    <strong>Date:</strong>
                    ${episode.air_date}
                </p>
                <p>
                    <strong>Count characters:</strong>
                    ${totalPersonajes}
                </p>
                
                <!-- Botones de acción con atributos data para identificar el ID del episodio -->
                <div class="card-actions">
                    <button class="btn-edit" onclick="handleEdit(${episode.id})">Editar</button>
                    <button class="btn-delete" onclick="handleDelete(${episode.id}, '${episode.name}')">Eliminar</button>
                </div>
            </div>
        </article>
    `;
}

