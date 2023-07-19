import clsx from 'clsx';
import Button from '../button/Button';
import AlertIcon from './../../img/icons/alert-decagram.svg';
import CloseIcon from './../../img/icons/close.svg';

import './offers.scss';

const Offers = ({isOpen, onOpen, onClose}) => {

    return (
        <div class={clsx('offers', {'offers_active': isOpen})}>
            <div class="offers__show" onClick={onOpen}>
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
                    <div className="offers__close" onClick={onClose}>
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