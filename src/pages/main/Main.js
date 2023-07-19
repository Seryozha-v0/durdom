import Button from '../../components/button/Button';
import CardsList from '../../components/cardsList/CardsList';
import Search from '../../components/search/Search';
import { ReactComponent as CreateTeamIcon } from './../../img/icons/create-team.svg';
import { ReactComponent as FindTeamIcon } from './../../img/icons/job.svg';

import art from "./../../img/pictures/Art-2.png";

import './main.scss';

const Main = () => {
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
                    <Search />
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