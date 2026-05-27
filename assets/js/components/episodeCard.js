/**
 * Episode Card Component
 */

export function episodeCard(episode) {
    const totalPersonajes = episode.characters.length;
    const nombreEnMayusculas = episode.name.toUpperCase();
    const fechaFormateada = episode.air_date.replace('December', 'Diciembre'); 

    return `
        <article class="card" id="episode-${episode.id}">
            <div class="card-body">
                <h3>${nombreEnMayusculas}</h3>
                <p>
                    <strong>Date:</strong>
                    ${fechaFormateada}
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


window.handleEdit = function(id) {
    const seguro = confirm("¿Seguro que deseas realizar esta acción y EDITAR este episodio?");
    if (seguro) {
        console.log(`Abriendo formulario de edición para el episodio ID: ${id}`);
    }
}

window.handleDelete = function(id, nombre) {
    const seguro = confirm(`¿Seguro que deseas realizar esta acción? Vas a ELIMINAR el episodio: "${nombre}".`);
    if (seguro) {
        const tarjeta = document.getElementById(`episode-${id}`);
        if (tarjeta) {
            const removed = tarjeta.remove();
            localStorage.setItem("data", removed)
        }
    }
}
