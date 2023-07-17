import Button from '../Button/Button';
import AlertIcon from './../../img/icons/alert-decagram.svg';
import CloseIcon from './../../img/icons/close.svg';

import './offers.scss';

const Offers = () => {
    return (
        <div class="offers">
            <div class="offers__show">
                <div class="offers__icon">
                    <img src={AlertIcon} alt="DurDom" />
                </div>
                <div class="offers__showTitle">
                    Предложения
                </div>
            </div>
            <div class="offers__form">
                <div class="offers__header">
                    Предложения и пожелания
                    <div className="offers__close">
                        <img src={CloseIcon} alt="Close" />
                    </div>
                </div>
                <div class="offers__subheader">Напишите нам что вы хотели бы видеть на сайте</div>
                <form>
                    <div class="offers__textarea">
                        <textarea name="offer" id="offer" placeholder='Текст сообщения...'></textarea>
                    </div>
                    <div className="offers__submit">
                        <div class="offers__captcha">google</div>
                        <Button spClass="offers__btn" type="submit">Отправить</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Offers;