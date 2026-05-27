/**
 * Episode Card Component
 */

export function episodeCard(episode) {
    return `
        <article class="card">

            <div class="card-body">
                <h3>${episode.name}</h3>
                <p>
                    <strong>Date:</strong>
                    ${episode.air_date}
                </p>
                <p>
                    <strong>Count characters:</strong>
                    ${episode.characters.length}
                </p>
            </div>
        </article>
    `;
}