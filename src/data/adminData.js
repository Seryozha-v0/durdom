import projectsIcon from './../img/icons/job.svg';
import usersIcon from './../img/icons/account.svg';
import commentsIcon from './../img/icons/comments-activity.svg';
import tagsIcon from './../img/icons/tags.svg';
import categoriesIcon from './../img/icons/categories.svg';
import specsIcon from './../img/icons/specializations.svg';

import man2 from './../img/avatars/man2.jpg';
import woman from './../img/avatars/woman.jpg';

export const asideMenu = [
    {
        icon: projectsIcon,
        title: 'Проекты'
    },
    {
        icon: usersIcon,
        title: 'Пользователи'
    },
    {
        icon: commentsIcon,
        title: 'Комментарии'
    },
    {
        icon: tagsIcon,
        title: 'Теги'
    },
    {
        icon: categoriesIcon,
        title: 'Категории'
    },
    {
        icon: specsIcon,
        title: 'Специализации'
    },
];

export const filters = [
    {
        name: 'Все',
        value: 'all'
    },
    {
        name: 'Опубликованые',
        value: 'published'
    },
    {
        name: 'Ожидают публикации',
        value: 'waiting'
    },
    {
        name: 'Отклоненные',
        value: 'reject'
    },
];

export const test = [
    {
        name: 'Говорит физик',
        text: 'Информационный ресурс для школьников и студентов',
        comments: '32',
        date: '17 мая, 2019',
        status: 'published',
    },
    {
        name: 'FurniHome',
        text: 'Портал мебели и товаров для дома',
        comments: '29',
        date: '17 мая, 2019',
        status: 'waiting',
    },
    {
        name: 'Оптическая передача энергии',
        text: 'Наша технология - это беспроводная передача энергии из одного места в другое, используя лазерное излучение.',
        comments: '29',
        date: '16 мая, 2019',
        status: 'reject',
    },
    {
        name: 'Говорит физик',
        text: 'Информационный ресурс для школьников и студентов',
        comments: '32',
        date: '17 мая, 2019',
        status: 'waiting',
    },
];

export const usersFilter = [
    {
        name: 'Все',
        value: 'all'
    },
    {
        name: 'Зарегистрированые',
        value: 'registered'
    },
    {
        name: 'Заблокированые',
        value: 'blocked'
    },
    {
        name: 'Удаленные',
        value: 'removed'
    },
];
export const usersAdmin = [
    {
        avatar: man2,
        name: 'Андрей Карпов',
        nick: 'Goodwind',
        email: 'goodwind@gmail.com',
        activity: '3 часа назад',
    },
    {
        avatar: woman,
        name: 'Ирина Смирнова',
        nick: 'Irinka85',
        email: 'irka85@gmail.com',
        activity: '15.02.219',
    },
];