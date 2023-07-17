import noAvatar from './../../img/avatars/No-avatar@48.jpg';
import dropDown from './../../img/icons/arrow-dropdown.svg';

import { ReactComponent as MyProfileIcon } from './../../img/icons/account.svg';
import { ReactComponent as MyProjectsIcon } from './../../img/icons/job.svg';
import { ReactComponent as DraftsIcon } from './../../img/icons/draft.svg';
import { ReactComponent as BoockmarkIcon } from './../../img/icons/boockmark-star.svg';
import { ReactComponent as ProfileSettingsIcon } from './../../img/icons/edit-profile.svg';

import './profileMini.scss';
import Dashboard from '../Dashboard/Dashboard';

const ProfileMini = ({
    avatar,
    name,
    profileMenuOpen,
    setProfileMenuOpen
}) => {
    return (
        <div class='profileMini'>
            <div className="profileMini__img">
                <img src={avatar ? avatar : noAvatar} alt={name} />
            </div>
            <div className="profileMini__name">
                {name ? name : 'none'}
            </div>
            <div className="profileMini__menu">
                <div className={`profileMini__toggle ${profileMenuOpen ? 'profileMini__toggle_open' : ''}`}
                    onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                >
                    <img src={dropDown} alt="Profile menu" />
                </div>

                {profileMenuOpen && (
                    <Dashboard spClass='profileMini__optionsBar'>
                        <div className="profileMini__option">
                            <div className="profileMini__icons">
                                <MyProfileIcon />
                            </div>
                            <a href="#">Мой профиль</a>
                        </div>
                        <div className="profileMini__option">
                            <div className="profileMini__icons">
                                <MyProjectsIcon />
                            </div>
                            <a href="#">Мои проекты</a>
                        </div>
                        <div className="profileMini__option">
                            <div className="profileMini__icons">
                                <DraftsIcon />
                            </div>
                            <a href="#">Черновики</a>
                        </div>
                        <div className="profileMini__option">
                            <div className="profileMini__icons">
                                <BoockmarkIcon />
                            </div>
                            <a href="#">Закладки</a>
                        </div>
                        <div className="profileMini__option">
                            <div className="profileMini__icons">
                                <ProfileSettingsIcon />
                            </div>
                            <a href="#">Настройки профиля</a>
                        </div>
                        <div className="profileMini__option">
                            <a href="#">Выйти</a>
                        </div>
                    </Dashboard>
                )}
            </div>
        </div>
    )
}

export default ProfileMini;