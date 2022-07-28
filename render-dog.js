// a render function takes in a piece of data and returns a DOM element
// it is a pure function
// a pure function
// 1) takes in input and predictably returns the same output every time
// 2) doesn't mutate any state defined outside the function (no side effects)
export function renderDog(dog) {
    const dogEl = document.createElement('div');
    const nameEl = document.createElement('h3');
    const ageEl = document.createElement('p');

    dogEl.classList.add('dog');
    dogEl.style.backgroundColor = dog.color;
    nameEl.textContent = dog.name;
    ageEl.textContent = `is ${dog.age} years old`;

    dogEl.append(nameEl, ageEl);
    
    return dogEl;
}