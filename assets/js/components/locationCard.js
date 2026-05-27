/**
 * Location Card Component
 */

export function locationCard(location) {
    return `
        <article class="card">

            <div class="card-body">
                <h3>${location.name}</h3>
                <p>
                    <strong>Date:</strong>
                    ${location.air_date}
                </p>
                <p>
                    <strong>Count characters:</strong>
                    ${location.characters.length}
                </p>
            </div>
        </article>
    `;
}