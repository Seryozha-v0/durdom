import CommentsIcon from './../../img/icons/comments.svg';
import ClockIcon from './../../img/icons/time.svg';

import './cardsList.scss';

const test = [
    {name: 'Говорит физик'},
    {name: 'FurniHome'},
    {name: 'Оптическая передача энергии'},
    {name: 'Сайт знакомств с элементами соц сети'},
    {name: 'Партнер для развития мобильного приложения фитнес тематики'},
    {name: 'Сайт знакомств с элементами соц сети'},
    {name: 'Умные Контакты'},
    {name: 'Сервис аренды вещей'},
    {name: 'Говорит физик'},
    {name: 'FurniHome'},
    {name: 'Умные Контакты'},
    {name: 'Веб-студия'},
    {name: 'Партнер для развития мобильного приложения фитнес тематики'},
    {name: 'Интернет-магазин с партнёрской системой'},
    {name: 'Веб-студия'},
]

const CardsList = ({
    title
}) => {
    return (
        <div className="cardsList">
            <div className="cardsList__header">
                <div className="cardsList__title">{title || 'Untitle'}</div>
                <div className="cardsList__filters-wrap">
                    <div className="cardsList__filter cardsList__filter_active">
                        Все
                    </div>
                    <div className="cardsList__filter">
                        Обсуждаемые
                    </div>
                </div>
            </div>
            <div className="cardsList__wrap">
                {test.map((item, i) => (
                    <div className="cardsList__item" key={i}>
                        <h3 class="cardsList__name">{item?.name || 'untitle'}</h3>
                        <p class="cardsList__descr">Информационный ресурс для школьников и студентов</p>
                        <div className="cardsList__meta-wrap">
                            <div className="cardsList__meta cardsList__meta_comments">
                                <div className="cardsList__icon">
                                    <img src={CommentsIcon} alt="comments" />
                                </div>
                                32
                            </div>
                            <div className="cardsList__meta cardsList__meta_date">
                                <div className="cardsList__icon">
                                    <img src={ClockIcon} alt="comments" />
                                </div>
                                17 мая, 2019
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardsList;