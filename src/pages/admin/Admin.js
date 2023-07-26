import CalendarIcon from './../../img/icons/calendar-month.svg';
import OptionsIcon from './../../img/icons/kebab-menu.svg';

import Filters from "../../components/filters/Filters";
import Search from "../../components/search/Search";

import './admin.scss';
import { useEffect, useState } from 'react';
import Dashboard from '../../components/dashboard/Dashboard';

import { filters, test, asideMenuData } from '../../data/adminData';
import AsideMenu from '../../components/asideMenu/AsideMenu';

const Admin = () => {
    const [arrProjects, setArrProjects] = useState([]);
    const [statusFilter, setStatusFilter] = useState('all');

    const [projectOptionOpen, setProjectOptionsOpen] = useState({ isOpen: false, index: '' });
    const handleProjectOptionsOpen = (i) => {
        setProjectOptionsOpen({ isOpen: !projectOptionOpen.isOpen, index: i });
    }

    const handleStatusFilter = (el) => {
        const status = el.target.dataset.value;

        const targetActive = document.getElementsByClassName('filters__field_active')[0];
        targetActive.classList.remove('filters__field_active');
        el.target.classList.add('filters__field_active');

        setStatusFilter(status);
    };

    useEffect(() => {
        let arr = test;

        if (statusFilter != 'all') {
            arr = test.filter((project) => project.status === statusFilter);
        }

        setArrProjects(arr);
    }, [statusFilter])

    return (
        <div class="container container_row">
            <div class="container__section">
                <section class="adminProjects">
                    <div class="sec-container">
                        <div class="adminProjects__filters">
                            <Filters
                                fields={filters}
                                inSection={true}
                                func={handleStatusFilter}
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
                    <AsideMenu 
                        menu={asideMenuData}
                    />
                </aside>
            </div>
        </div>
    )
}
export default Admin;