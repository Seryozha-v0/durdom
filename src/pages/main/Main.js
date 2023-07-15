import Button from '../../components/button/Button';
import { ReactComponent as CreateTeamIcon } from './../../img/icons/create-team.svg';
import { ReactComponent as FindTeamIcon } from './../../img/icons/job.svg';

import art from "./../../img/pictures/Art-2.png";

import './main.scss';

const Main = () => {
    return (
        <section class='present'>
            <div class="container">
                <div className="present__wrap">
                    <h2 class='present__title'>Platform for<br /> team search</h2>
                    <p class='present__descr'>Here you can find a team for startup, join<br /> in an existing project, find an investor and partner</p>
                    <div className="present__btn-wrap">
                        <div className="present__btn">
                            <Button
                                icon={<CreateTeamIcon />}
                                name='Create a team'
                            />
                        </div>
                        <div className="present__btn">
                            <Button
                                icon={<FindTeamIcon />}
                                name='Find a project'
                                type='white'
                            />
                        </div>
                    </div>
                    <div className="present__art">
                        <img src={art} alt="durdom" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main;