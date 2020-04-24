let h = document.querySelector("h1");
console.log(h);

// получить потомка
let menu = document.querySelector(".menu");
console.log(menu);
console.log(menu.firstChild);
console.log(menu.firstElementChild);

// получить родителя
let item = document.querySelector(".menu__item");
console.log(item);
console.log(item.parentElement);
console.log(item.parentNode);

// выбрать все элементы и вернуть массив из них
let link = document.querySelectorAll(".menu__link");
console.log(link);
console.log(Array.from(link));
console.log([...link]);

// вывести список классов
console.log(menu.classList);
console.log(menu.className);

// добавить класс
menu.classList.add('class__1', 'calss__2');
console.log(menu.classList);

// удалить класс
menu.classList.remove('menu');
console.log(menu.classList);

//проверить наличие класс
console.log(menu.classList.contains('menu')); // false or true

// toggle
//Если класса нет добавить
menu.classList.toggle('toggle');
console.log(menu.classList);
// Если класс есть удалить
menu.classList.toggle('toggle');
console.log(menu.classList);

