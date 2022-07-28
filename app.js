import { furniture } from './array-one.js';
import { dogs } from './array-two.js';
import { books } from './array-three.js';
import { renderFurnitureItem } from './render-furniture-item.js';
import { renderDog } from './render-dog.js';
import { renderBook } from './render-book.js';

const booksListEl = document.getElementById('books-list');

for (let book of books) {
    const bookEl = renderBook(book);
    booksListEl.append(bookEl);
}

const dogListEl = document.getElementById('dogs-list');

for (let aParticularDog of dogs) {
    const dogEl = renderDog(aParticularDog);

    dogListEl.append(dogEl);
}

const furnitureListEl = document.getElementById('furniture-list');

for (let item of furniture) {
    const furnitureEl = renderFurnitureItem(item);

    furnitureListEl.append(furnitureEl);
}