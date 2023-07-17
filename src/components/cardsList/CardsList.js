import CommentsIcon from './../../img/icons/comments.svg';
import ClockIcon from './../../img/icons/time.svg';

import './cardsList.scss';

const test = [
    {
        name: 'Говорит физик', 
        text: 'Информационный ресурс для школьников и студентов', 
        comments: '32', 
        date: '17 мая, 2019'
    },
    {
        name: 'FurniHome', 
        text: 'Портал мебели и товаров для дома', 
        comments: '29', 
        date: '17 мая, 2019'
    },
    {
        name: 'Оптическая передача энергии', 
        text: 'Наша технология - это беспроводная передача энергии из одного места в другое, используя лазерное излучение.', 
        comments: '29', 
        date: '16 мая, 2019'
    },
    {
        name: 'Сайт знакомств с элементами соц сети', 
        text: 'Сервис для знакомств на основе нейросети', 
        comments: '54', 
        date: '17 мая, 2019'
    },
    {
        name: 'Партнер для развития мобильного приложения фитнес тематики', 
        text: 'Ищется партнер для развития существующего мобильного приложения ', 
        comments: '43', 
        date: '16 мая, 2019'
    },
    {
        name: 'Сайт знакомств с элементами соц сети', 
        text: 'Сервис для знакомств на основе нейросети', 
        comments: '54', 
        date: '17 мая, 2019'
    },
    {
        name: 'Умные Контакты', 
        text: 'Платформа для фандрайзинга на смарт-контрактах (блокчейн)', 
        comments: '16', 
        date: '16 мая, 2019'
    },
    {
        name: 'Сервис аренды вещей', 
        text: 'Сервис, аналог airbnb/booking в b2c сегменте', 
        comments: '46', 
        date: '16 мая, 2019'
    },
    {
        name: 'Говорит физик', 
        text: 'Информационный ресурс для школьников и студентов', 
        comments: '32', 
        date: '17 мая, 2019'
    },
    {
        name: 'FurniHome', 
        text: 'Портал мебели и товаров для дома', 
        comments: '29', 
        date: '17 мая, 2019'
    },
    {
        name: 'Умные Контакты', 
        text: 'Платформа для фандрайзинга на смарт-контрактах (блокчейн)', 
        comments: '16', 
        date: '16 мая, 2019'
    },
    {
        name: 'Веб-студия', 
        text: 'Ищу управляющего партнера для новой веб/студии', 
        comments: '12', 
        date: '17 мая, 2019'
    },
    {
        name: 'Партнер для развития мобильного приложения фитнес тематики', 
        text: 'Ищется партнер для развития существующего мобильного приложения ', 
        comments: '43', 
        date: '16 мая, 2019'
    },
    {
        name: 'Интернет-магазин с партнёрской системой', 
        text: 'Создать интернет - магазин , в котором клиенты смогут покупать товары у поставщиков', 
        comments: '46', 
        date: '16 мая, 2019'
    },
    {
        name: 'Веб-студия', 
        text: 'Ищу управляющего партнера для новой веб/студии', 
        comments: '12', 
        date: '17 мая, 2019'
    },
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
                        <h3 class="cardsList__name">{item?.name}</h3>
                        <p class="cardsList__descr">{item?.text}</p>
                        <div className="cardsList__meta-wrap">
                            <div className="cardsList__meta cardsList__meta_comments">
                                <div className="cardsList__icon">
                                    <img src={CommentsIcon} alt="comments" />
                                </div>
                                {item?.comments}
                            </div>
                            <div className="cardsList__meta cardsList__meta_date">
                                <div className="cardsList__icon">
                                    <img src={ClockIcon} alt="comments" />
                                </div>
                                {item?.date}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardsList;