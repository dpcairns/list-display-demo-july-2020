export function renderFurnitureItem(pieceOfFurniture) {
    const pTag = document.createElement('p');
    pTag.textContent = pieceOfFurniture;
    pTag.classList.add('furniture-item');

    return pTag;
}