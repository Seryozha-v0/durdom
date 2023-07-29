import Button from "../button/Button";

import {ReactComponent as CreateAccIcon} from './../../img/icons/create-account.svg';

const ProfileLogIn = () => {
    return (
        <section class="logIn">
            <div className="sec-title">
                Вход в профиль
            </div>
            <button className="googleAuth">
                <div className="googleAuth__icon">
                    <img src="" alt="Google" />
                </div>
                Войти через Google
            </button>
            <form class="accountForm">
                <div className="accountForm__input-wrap">
                    <label htmlFor="email" className="accountForm__label">Email</label>
                    <input type="text" name="email" placeholder="Введите email" className="accountForm__input" />
                </div>
                <div className="accountForm__input-wrap">
                    <label htmlFor="password" className="accountForm__label">Пароль</label>
                    <input type="password" name="password" placeholder="Ваш пароль" className="accountForm__input" />
                </div>
                <Button type="submit">Войти</Button>
            </form>
            <Button variant="white" icon={<CreateAccIcon />}>Создать аккаунт</Button>
            <Button variant="outline">Восстановить пароль</Button>
        </section>
    )
}

export default ProfileLogIn;