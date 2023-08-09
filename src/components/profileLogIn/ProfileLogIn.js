import { Link } from "react-router-dom";
import Button from "../button/Button";

import { ReactComponent as CreateAccIcon } from './../../img/icons/create-account.svg';
import FormTextField from "../formTextField/FormTextField";

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
                <FormTextField
                    type="text"
                    placeholder="Введите email"
                    name="email"
                    label="Email"
                />
                <FormTextField
                    type="password"
                    placeholder="Ваш пароль"
                    name="password"
                    label="Пароль"
                />
                <Button type="submit">Войти</Button>
            </form>
            <Button variant="white" icon={<CreateAccIcon />}>
                <Link to='/profile/registry'>Создать аккаунт</Link>
            </Button>
            <Button variant="outline">Восстановить пароль</Button>
        </section>
    )
}

export default ProfileLogIn;