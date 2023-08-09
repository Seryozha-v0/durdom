import Button from "../button/Button";
import FormTextField from "../formTextField/FormTextField";

import { ReactComponent as CreateAccIcon } from './../../img/icons/create-account.svg';

import './profileRegistry.scss';

const ProfileRegistry = () => {
    return (
        <section class="registry">
            <div className="sec-title sec-title_center">
                Создание аккаунта
            </div>
            <form class="accountForm">
                <div className="accountForm__anyInputs">
                    <FormTextField
                        type="text"
                        placeholder="Имя"
                        name="firstName"
                        label="Имя"
                    />
                    <FormTextField
                        type="text"
                        placeholder="Фамилия"
                        name="lastName"
                        label="Фамилия"
                    />
                </div>
                <FormTextField
                    type="text"
                    placeholder="Введите email"
                    name="email"
                    label="Email"
                />
                <FormTextField
                    type="password"
                    placeholder="Придумайте пароль"
                    name="password"
                    label="Пароль"
                    error="Минимум 6 символов"
                />
                <Button type="submit">Создать аккаунт</Button>
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