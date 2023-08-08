import { useEffect, useState } from 'react';
import Button from '../../components/button/Button';
import CardsList from '../../components/cardsList/CardsList';
import Search from '../../components/search/Search';
import { ReactComponent as CreateTeamIcon } from './../../img/icons/create-team.svg';
import { ReactComponent as FindTeamIcon } from './../../img/icons/job.svg';

import art from "./../../img/pictures/Art-2.png";

import './main.scss';
import { test } from '../../data/adminData';

const Main = () => {
    const [searchText, setSearchText] = useState('');
    const [searchFindable, setSearchFindable] = useState([]);
    const [searchFocus, setSearchFocus] = useState(false);

    const handleSearchText = (e) => {
        const text = e.target.value;
        setSearchText(text);
    }

    const getProjects = () => {
        const projects = test;
        const lowerSearchText = searchText.toLowerCase();

        const result = projects.filter((item) => {
            const name = item.name.toLowerCase();
            const textProject = item.text.toLowerCase();
            return name.includes(lowerSearchText) || textProject.includes(lowerSearchText);
        });

        setSearchFindable(result);
    }
    
    const handleInputFocus = (e) => {
        const type = e.type;
        if (type === 'focus') {
            if (searchText) getProjects();
            return setSearchFocus(true)
        };
        setSearchFocus(false);
        setSearchFindable([]);
    }

    useEffect(() => {
        if (searchFocus) {
            getProjects();
        }
    }, [searchText]);

    return (
        <>
            <section class='present'>
                <div class="container">
                    <div className="present__wrap">
                        <h2 class='present__title'>Platform for<br /> team search</h2>
                        <p class='present__descr'>Here you can find a team for startup, join<br /> in an existing project, find an investor and partner</p>
                        <div className="present__btn-wrap">
                            <div className="present__btn">
                                <Button
                                    icon={<CreateTeamIcon />}
                                >Create a team</Button>
                            </div>
                            <div className="present__btn">
                                <Button
                                    icon={<FindTeamIcon />}
                                    type='white'
                                >Find a project</Button>
                            </div>
                        </div>
                        <div className="present__art">
                            <img src={art} alt="durdom" />
                        </div>
                    </div>
                </div>
            </section>
            <section class="sec-mainSearch">
                <div class="container">
                    <Search
                        short={true}
                        value={searchText}
                        onChange={handleSearchText}
                        onFocus={handleInputFocus}
                        onBlur={handleInputFocus}
                        result={searchFindable}
                    />
                </div>
            </section>
            <section class="sec-mainProjects">
                <div class="container">
                    <CardsList
                        title='Новые проекты'
                    />
                </div>
            </section>
        </>
    )
}

export default Main;