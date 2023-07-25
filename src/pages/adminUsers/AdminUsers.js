import Filters from "../../components/filters/Filters";
import Search from "../../components/search/Search";
import { asideMenu, usersAdmin, usersFilter } from "../../data/adminData";

import CalendarIcon from './../../img/icons/calendar-month.svg';

import './adminUser.scss';

const AdminUsers = () => {
    return (
        <div class="container container_row">
            <div class="container__section">
                <section class="adminUsers">
                    <div class="sec-container">
                        <div class="adminUsers__filters">
                            <Filters
                                fields={usersFilter}
                                inSection={true}
                            />
                        </div>
                        <div class="adminUsers__search">
                            <Search
                                icon={CalendarIcon}
                            />
                        </div>
                        <div class="adminUsers__list">
                            <div className="usersList">
                                {usersAdmin.map((item, i) => (
                                    <div key={`usersAdmin_${i}`} className="usersList__item">
                                        <div className="usersList__avatar">
                                            <img src={item.avatar} alt={item.name} />
                                        </div>
                                        <div className="usersList__name">
                                            {item.name + '.'}
                                        </div>
                                        <div className="usersList__nick">
                                            {item.nick}
                                        </div>
                                        <div className="usersList__email">
                                            <a href={`mailto:${item.email}`}>{item.email}</a>
                                        </div>
                                        <div className="usersList__activity">
                                            {item.activity}
                                        </div>
                                        <div className="usersList__options">

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div class="container__aside">
                <aside>
                    <nav class="asideMenu">
                        {asideMenu.map((item, i) => (
                            <div key={i} class="asideMenu__item">
                                <a href="#" class="asideMenu__icon">
                                    <img src={item.icon} alt={item.title} />
                                </a>
                                <a href="#">{item.title}</a>
                            </div>
                        ))}
                    </nav>
                </aside>
            </div>
        </div>
    )
}

export default AdminUsers;