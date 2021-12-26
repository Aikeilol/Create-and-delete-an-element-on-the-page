/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promoAd = document.querySelectorAll(".promo__adv img"),
    back = document.querySelector(".promo__bg"),
    genr = back.querySelector(".promo__genre"),
    filmList = document.querySelector(".promo__interactive-list"),
    input = document.querySelector('.adding__input'),
    button = document.querySelector('.add button'),
    filmListAll = document.querySelectorAll(".promo__interactive-item");

const Remove = (promo) => {
        promo.forEach(item => {
            item.remove();

        });
    },

    pageModef = () => {
        genr.textContent = "Драма";
        back.style.backgroundImage = "url('img/bg.jpg')";
    },


    arrSort = (arr) => {
        arr.sort();
    },


    FilmAdd = (add, parent) => {
        parent.innerHTML = " ";
        add.forEach((film, i) => {
            parent.innerHTML += `<li class="promo__interactive-item">${i + 1} ${film}
    <div class="delete"></div>
    </li>`;
        });
        document.querySelectorAll(".delete").forEach((btn, i) => {
            btn.addEventListener("click", (e) => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                FilmAdd(movieDB.movies, filmList);
            });
        });

    };

Remove(promoAd);

pageModef();

arrSort(movieDB.movies);

FilmAdd(movieDB.movies, filmList);

button.addEventListener('click', (e) => {
    e.preventDefault();
    if (input.value) {
        if(input.value.length > 21){
        input.value = `${input.value.substring(0, 22)}...`;
        }
        movieDB.movies.push(input.value);
        arrSort(movieDB.movies);
        FilmAdd(movieDB.movies, filmList);
        e.target.reset();
    }
});

