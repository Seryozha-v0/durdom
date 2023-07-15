import logo from './../../img/logo.svg';
import addProject from './../../img/icons/add-project.svg';

import Notifications from '../notifications/Notifications';
import ProfileMini from '../ProfileMini/ProfileMini';

import './header.scss';
import { useState } from 'react';

const Header = () => {
    const [notificationBarOpen, setNotificationBarOpen] = useState(false);
    const [profileMenuOpen, setProfileMenuOpen] = useState(false);

    return (
        <header class='header'>
            <div class='container'>
                <div className="header__wrap">
                    <div class='header__logo'>
                        <a class="header__logo-wrap">
                            <img src={logo} alt="DurDom" />
                        </a>
                        <a href="#" class='header__logo-link'>DurDom</a>
                    </div>
                    <nav class="header__nav">
                        <div class="header__links"><a href="#">Projects</a></div>
                        <div class="header__links"><a href="#">About</a></div>
                    </nav>
                    <div class="header__utilities">
                        <a href="#" class='header__addProject'>
                            <img src={addProject} alt="Add Project" />
                        </a>
                        <div class="header__notifications">
                            <Notifications 
                                isChecked={true}
                                notificationBarOpen={notificationBarOpen}
                                setNotificationBarOpen={setNotificationBarOpen}
                            />
                        </div>
                        <div class="header__profileMini">
                            <ProfileMini
                                name='Michael'
                                profileMenuOpen={profileMenuOpen}
                                setProfileMenuOpen={setProfileMenuOpen}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;