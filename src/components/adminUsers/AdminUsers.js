import { useEffect, useState } from "react";
import Filters from "../../components/filters/Filters";
import Search from "../../components/search/Search";
import { usersAdmin, usersFilter } from "../../data/adminData";

import CalendarIcon from './../../img/icons/calendar-month.svg';

import './adminUsers.scss';

const AdminUsers = () => {
    const [statusFilter, setStatusFilter] = useState('all');
    const [usersList, setUsersList] = useState([]);

    const handleStatusFilter = (el) => {
        console.log(el);
        const status = el.target.dataset.value;

        const targetActive = document.getElementsByClassName('filters__field_active')[0];
        targetActive.classList.remove('filters__field_active');
        el.target.classList.add('filters__field_active');

        setStatusFilter(status);
    }

    useEffect(() => {
        let arr = usersAdmin;

        if (statusFilter != 'all') {
            arr = usersAdmin.filter((user) => user.status === statusFilter);
        }

        setUsersList(arr);
    }, [statusFilter]);

    return (
        <section class="adminUsers">
            <div class="sec-container">
                <div class="adminUsers__filters">
                    <Filters
                        fields={usersFilter}
                        inSection={true}
                        func={handleStatusFilter}
                    />
                </div>
                <div class="adminUsers__search">
                    <Search
                        icon={CalendarIcon}
                    />
                </div>
                <div class="adminUsers__list">
                    <div className="usersList">
                        {usersList.map((item, i) => (
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
    )
}

export default AdminUsers;