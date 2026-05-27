const KEY = 'characters';

export function getCharacters() {
    return JSON.parse(localStorage.getItem(KEY)) || [];
}

export function saveCharacters(characters) {
    localStorage.setItem( KEY, JSON.stringify(characters));
}