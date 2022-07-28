export function renderBook(book) {
    const bookEl = document.createElement('div');
    const topEl = document.createElement('div');
    const nameEl = document.createElement('h2');
    const authorEl = document.createElement('h3');
    const bottomEl = document.createElement('div');
    const leftEl = document.createElement('div');
    const rightEl = document.createElement('div');
    const genresEl = document.createElement('ul');
    const publicationEl = document.createElement('p');
    const coverEl = document.createElement('img');

    nameEl.textContent = book.title;
    authorEl.textContent = `By ${book.author}`;
    publicationEl.textContent = `Published by ${book.publication.publisher} in ${book.publication.year}`;
    coverEl.src = book.cover;

    for (let genre of book.genres) {
        const genreEl = document.createElement('li');

        genreEl.textContent = `📚 ${genre}`;

        genresEl.append(genreEl);
    }

    bookEl.classList.add('book');
    bottomEl.classList.add('bottom');
    leftEl.classList.add('left');
    rightEl.classList.add('right');
    bookEl.append(topEl, bottomEl);
    topEl.append(nameEl, authorEl);
    bottomEl.append(leftEl, rightEl);
    leftEl.append(genresEl, publicationEl);
    rightEl.append(coverEl);

    return bookEl;
}