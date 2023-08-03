import logo from './../../img/logo.svg';
import addProject from './../../img/icons/add-project.svg';

import Notifications from '../notifications/Notifications';
import ProfileMini from '../ProfileMini/ProfileMini';

import './header.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [notificationBarOpen, setNotificationBarOpen] = useState(false);
    const [profileMenuOpen, setProfileMenuOpen] = useState(false);

    const handleNotificationBarOpen = () => {
        if (profileMenuOpen) {
            setProfileMenuOpen(false);
        }
        setNotificationBarOpen(!notificationBarOpen);
    }

    const handleProfileMenuOpen = () => {
        if (notificationBarOpen) {
            setNotificationBarOpen(false);
        }
        setProfileMenuOpen(!profileMenuOpen);
    }

    return (
        <header class='header'>
            <div class='container'>
                <div className="header__wrap">
                    <div class='header__logo'>
                        <Link to="/" class="header__logo-wrap">
                            <img src={logo} alt="DurDom" />
                        </Link>
                        <a href="#" class='header__logo-link'>DurDom</a>
                    </div>
                    <nav class="header__nav">
                        <div class="header__links"><Link to="/projects">Projects</Link></div>
                        <div class="header__links"><Link to="/about">About</Link></div>
                    </nav>
                    <div class="header__utilities">
                        <a href="#" class='header__addProject'>
                            <img src={addProject} alt="Add Project" />
                        </a>
                        <div class="header__notifications">
                            <Notifications 
                                isChecked={true}
                                notificationBarOpen={notificationBarOpen}
                                onOpen={handleNotificationBarOpen}
                            />
                        </div>
                        <div class="header__profileMini">
                            <ProfileMini
                                name='Michael'
                                profileMenuOpen={profileMenuOpen}
                                onOpen={handleProfileMenuOpen}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;