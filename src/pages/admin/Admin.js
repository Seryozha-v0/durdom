import CalendarIcon from './../../img/icons/calendar-month.svg';
import OptionsIcon from './../../img/icons/kebab-menu.svg';

import Filters from "../../components/filters/Filters";
import Search from "../../components/search/Search";

import './admin.scss';
import { useEffect, useState } from 'react';
import Dashboard from '../../components/dashboard/Dashboard';

const filters = [
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

const test = [
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
        status: 'waiting',
    },
    {
        name: 'Говорит физик',
        text: 'Информационный ресурс для школьников и студентов',
        comments: '32',
        date: '17 мая, 2019',
        status: 'reject',
    },
]

const Admin = () => {
    const [arrProjects, setArrProjects] = useState([]);
    const [statusFilter, setStatusFilter] = useState('all');

    const [projectOptionOpen, setProjectOptionsOpen] = useState({isOpen: false, index: ''});
    const handleProjectOptionsOpen = (i) => {
        setProjectOptionsOpen({isOpen: !projectOptionOpen.isOpen, index: i});
    }

    useEffect(() => {
        setArrProjects(test);
    })

    return (
        <div class="container container_row">
            <div class="container__section">
                <section class="adminProjects">
                    <div class="sec-container">
                        <div class="adminProjects__filters">
                            <Filters
                                fields={filters}
                                inSection={true}
                            />
                        </div>
                        <div class="adminProjects__search">
                            <Search
                                icon={CalendarIcon}
                            />
                        </div>
                        <div class="adminProjects__list">
                            {arrProjects.length ? (
                                <div class="projectsList">
                                    {arrProjects.map((item, i) => (
                                        <div key={i} class="projectsList__item">
                                            <div class="projectsList__title">{item.name}</div>
                                            <div class="projectsList__descr">{item.text}</div>
                                            <div class="projectsList__options">
                                                <div class="projectsList__optionsIcon" onClick={() => handleProjectOptionsOpen(i)}>
                                                    <img src={OptionsIcon} alt="options" />
                                                </div>
                                                {projectOptionOpen.index === i && projectOptionOpen.isOpen && (
                                                    <Dashboard spClass="projectsList__options-wrap">
                                                        <div className="projectsList__option">Отклонить</div>
                                                        <div className="projectsList__option">Одобрить</div>
                                                        <div className="projectsList__option">Изменить</div>
                                                        <div className="projectsList__option">Удалить</div>
                                                        <div className="projectsList__option">Сообщение</div>
                                                    </Dashboard>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : ('Загрузка...')}
                        </div>
                    </div>
                </section>
            </div>
            <div class="container__aside">
                <aside>
                    <nav className="asideMenu">
                        123
                    </nav>
                </aside>
            </div>
        </div>
    )
}
export default Admin;