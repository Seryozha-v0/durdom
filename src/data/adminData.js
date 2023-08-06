import projectsIcon from './../img/icons/job.svg';
import usersIcon from './../img/icons/account.svg';
import commentsIcon from './../img/icons/comments-activity.svg';
import tagsIcon from './../img/icons/tags.svg';
import categoriesIcon from './../img/icons/categories.svg';
import specsIcon from './../img/icons/specializations.svg';

import man2 from './../img/avatars/man2.jpg';
import woman from './../img/avatars/woman.jpg';

export const asideMenuData = [
    {
        icon: projectsIcon,
        title: 'Проекты',
        url: 'projects'
    },
    {
        icon: usersIcon,
        title: 'Пользователи',
        url: 'users'
    },
    {
        icon: commentsIcon,
        title: 'Комментарии',
        url: 'comments'
    },
    {
        icon: tagsIcon,
        title: 'Теги',
        url: 'tags'
    },
    {
        icon: categoriesIcon,
        title: 'Категории',
        url: 'categories'
    },
    {
        icon: specsIcon,
        title: 'Специализации',
        url: 'specs'
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
        status: 'registered'
    },
    {
        avatar: woman,
        name: 'Ирина Смирнова',
        nick: 'Irinka85',
        email: 'irka85@gmail.com',
        activity: '15.02.2019',
        status: 'blocked'
    },
    {
        avatar: woman,
        name: 'Варя Смирнова',
        nick: 'Irinka85',
        email: 'irka85@gmail.com',
        activity: '15.02.2014',
        status: 'removed'
    },
];

export const commentsData = [
    {
        user: usersAdmin[0],
        comment: 'Studies in mice have shown that tetrahydrocannabiol affects the olfactory bulb, which is responsible for the senses of taste and smell. Sensitivity to tastes and smells escalates -> you feel them much better -> they provoke an appetite, everything around you seems tastier than it really is.',
        answers: [
            {
                user: usersAdmin[1],
                comment: 'I don’t want to say that I live in a village, but in my school I have never even seen a microscope, not like a robot that can throw a bottle.',
                answers: [
                    {
                        user: usersAdmin[1],
                        comment: 'I don’t want to say that I live in a village, but in my school I have never even seen a microscope, not like a robot that can throw a bottle.',
                        answers: [],
                    },
                    {
                        user: usersAdmin[2],
                        comment: 'I don’t want to say that I live in a village, but in my school I have never even seen a microscope, not like a robot that can throw a bottle.',
                        answers: [],
                    },
                    {
                        user: usersAdmin[2],
                        comment: 'I don’t want to say that I live in a village, but in my school I have never even seen a microscope, not like a robot that can throw a bottle.',
                        answers: [],
                    }
                ]
            },
            {
                user: usersAdmin[1],
                comment: 'I don’t want to say that I live in a village, but in my school I have never even seen a microscope, not like a robot that can throw a bottle.',
                answers: [
                    {
                        user: usersAdmin[1],
                        comment: 'I don’t want to say that I live in a village, but in my school I have never even seen a microscope, not like a robot that can throw a bottle.',
                        answers: [],
                    },
                    {
                        user: usersAdmin[2],
                        comment: 'I don’t want to say that I live in a village, but in my school I have never even seen a microscope, not like a robot that can throw a bottle.',
                        answers: [],
                    },
                ]
            },
            {
                user: usersAdmin[0],
                comment: 'I don’t want to say that I live in a village, but in my school I have never even seen a microscope, not like a robot that can throw a bottle.',
                answers: [
                    {
                        user: usersAdmin[2],
                        comment: 'I don’t want to say that I live in a village, but in my school I have never even seen a microscope, not like a robot that can throw a bottle.',
                        answers: [],
                    },
                ]
            },
        ]
    },
    {
        user: usersAdmin[0],
        comment: 'Studies in mice have shown that tetrahydrocannabiol affects the olfactory bulb, which is responsible for the senses of taste and smell. Sensitivity to tastes and smells escalates -> you feel them much better -> they provoke an appetite, everything around you seems tastier than it really is.',
        answers: [
            {
                user: usersAdmin[1],
                comment: 'I don’t want to say that I live in a village, but in my school I have never even seen a microscope, not like a robot that can throw a bottle.',
                answers: [
                    {
                        user: usersAdmin[1],
                        comment: 'I don’t want to say that I live in a village, but in my school I have never even seen a microscope, not like a robot that can throw a bottle.',
                        answers: [
                            {
                                user: usersAdmin[1],
                                comment: 'I don’t want to say that I live in a village, but in my school I have never even seen a microscope, not like a robot that can throw a bottle.',
                                answers: [
                                    {
                                        user: usersAdmin[1],
                                        comment: 'I don’t want to say that I live in a village, but in my school I have never even seen a microscope, not like a robot that can throw a bottle.',
                                        answers: [],
                                    }
                                ]
                            },
                            
                            {
                                user: usersAdmin[2],
                                comment: 'I don’t want to say that I live in a village, but in my school I have never even seen a microscope, not like a robot that can throw a bottle.',
                                answers: [],
                            },
                            
                            {
                                user: usersAdmin[2],
                                comment: 'I don’t want to say that I live in a village, but in my school I have never even seen a microscope, not like a robot that can throw a bottle.',
                                answers: [],
                            }
                        ]
                    }
                ]
            }
        ]
    },
];