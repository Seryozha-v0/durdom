import Button from "../button/Button";

import { ReactComponent as CreateAccIcon } from './../../img/icons/create-account.svg';

const ProfileRegistry = () => {
    return (
        <section class="registry">
            <div className="sec-title">
                Создание аккаунта
            </div>
            <form class="accountForm">
                <div className="accountForm__anyInputs">
                    <div className="accountForm__input-wrap">
                        <label htmlFor="firstName" className="accountForm__label">Имя</label>
                        <input type="text" name="firstName" placeholder="Имя" className="accountForm__input" />
                    </div>
                    <div className="accountForm__input-wrap">
                        <label htmlFor="lastName" className="accountForm__label">Фамилия</label>
                        <input type="text" name="lastName" placeholder="Фамилия" className="accountForm__input" />
                    </div>
                </div>
                <div className="accountForm__input-wrap">
                    <label htmlFor="email" className="accountForm__label">Email</label>
                    <input type="text" name="email" placeholder="Введите email" className="accountForm__input" />
                </div>
                <div className="accountForm__input-wrap">
                    <label htmlFor="password" className="accountForm__label">Пароль</label>
                    <input type="password" name="password" placeholder="Придумайте пароль" className="accountForm__input" />
                </div>
                <Button type="submit">Войти</Button>
            </form>
            <button className="googleAuth">
                <div className="googleAuth__icon">
                    <img src="" alt="Google" />
                </div>
                Войти через Google
            </button>
            <div className="registry__info">
                Регистрируясь, вы даете согласие на обработку своих <a href="#">персональных данных</a>
            </div>
        </section>
    )
}

export default ProfileRegistry;