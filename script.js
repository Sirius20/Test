'use strict';

const titles = ['Что нового в JavaScript 2019', 'Советы по доступности интерактивных элементов намобильных устройствах'];
const authors = ['Андрей Ситник', 'Девид Нил'];
const dates = ['12 марта', '4 февраля'];
const avatarsNum = [1, 2, 3, 4];

class NewsCard {
    constructor(link, title, data, author, avatarNum, parentSelector) {
        this.link = link;
        this.title = title;
        this.data = data;
        this.author = author;
        this.avatarNum = avatarNum;
        this.parent = document.querySelector(parentSelector);
    }

    render() {
        const element = document.createElement('div');
        element.classList.add('articles__item');

        element.innerHTML = `
            <div class="articles__wrap">
                <h2 class="articles__title"><a href=${this.link}>${this.title}</a></h2>
                <div>
                    <time class="articles__qoute-date">${this.data}</time>
                    <p class="articles__qoute-author">${this.author}</p>
                </div>
            </div>
            <img class="articles__img" src="/images/Avatar-0${this.avatarNum}.png" alt="avatar">`;
        this.parent.append(element);
    }
}

function random (max) {
    return Math.round(Math.random() * (max.length - 1));
}

for (let i = 0; i < 4; i ++ ){
    new NewsCard(
        '#',
        titles[random(titles)],
        dates[random(dates)],
        authors[random(authors)],
        avatarsNum[random(avatarsNum)],
        ".articles__second-block"
    ).render();
}