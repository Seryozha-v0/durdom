import { useEffect, useState } from 'react';
import CommentsIcon from './../../img/icons/comments.svg';
import ClockIcon from './../../img/icons/time.svg';

import './cardsList.scss';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Filters from '../filters/Filters';

const filters = [
    {
        name: 'Все',
        value: 'all'
    },
    {
        name: 'Обсуждаемые',
        value: 'popular'
    },
]

const test = [
    {
        name: 'Говорит физик',
        text: 'Информационный ресурс для школьников и студентов',
        comments: '32',
        date: '17 мая, 2019'
    },
    {
        name: 'Сайт знакомств с элементами соц сети',
        text: 'Сервис для знакомств на основе нейросети',
        comments: '54',
        date: '17 мая, 2019'
    },
    {
        name: 'Веб-студия',
        text: 'Ищу управляющего партнера для новой веб/студии',
        comments: '12',
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
        name: 'Партнер для развития мобильного приложения фитнес тематики',
        text: 'Ищется партнер для развития существующего мобильного приложения ',
        comments: '43',
        date: '16 мая, 2019'
    },
    {
        name: 'Оптическая передача энергии',
        text: 'Наша технология - это беспроводная передача энергии из одного места в другое, используя лазерное излучение.',
        comments: '29',
        date: '16 мая, 2019'
    },
    {
        name: 'Сервис аренды вещей',
        text: 'Сервис, аналог airbnb/booking в b2c сегменте',
        comments: '46',
        date: '16 мая, 2019'
    },
    {
        name: 'Интернет-магазин с партнёрской системой',
        text: 'Создать интернет - магазин , в котором клиенты смогут покупать товары у поставщиков',
        comments: '46',
        date: '16 мая, 2019'
    },
    {
        name: 'Сайт знакомств с элементами соц сети',
        text: 'Сервис для знакомств на основе нейросети',
        comments: '54',
        date: '17 мая, 2019'
    },
    {
        name: 'Говорит физик',
        text: 'Информационный ресурс для школьников и студентов',
        comments: '32',
        date: '17 мая, 2019'
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
]

const CardsList = ({
    title
}) => {
    const [arrCards, setArrCards] = useState([]);
    const [sortCards, setSortCards] = useState('all');

    const handleSortCards = (e) => {
        if (e.target.dataset.value === sortCards) return true;
        console.log(e.target.dataset.value);

        const currActive = document.getElementsByClassName('filters__field_active')[0];
        currActive.classList.remove('filters__field_active');

        e.target.classList.add('filters__field_active');

        setSortCards(e.target.dataset.value);
    }

    useEffect(() => {
        let arr = [];
        
        switch (sortCards) {
            case 'all':
                arr = test;
                break;

            case 'popular':
                arr = test.toSorted((a, b) => b.comments - a.comments);
                break;
        
            default:
                arr = test;
                break;
        }

        setArrCards(arr);
    }, [sortCards]);

    return (
        <div class="cardsList">
            <div class="cardsList__header">
                <div class="cardsList__title">{title || 'Untitle'}</div>
                <Filters 
                    fields={filters}
                    func={handleSortCards}
                />
                {/* <div class="cardsList__filters-wrap">
                    <div class="cardsList__filter cardsList__filter_active" onClick={handleSortCards} data-value="all">
                        Все
                    </div>
                    <div class="cardsList__filter" onClick={handleSortCards} data-value="popular">
                        Обсуждаемые
                    </div>
                </div> */}
            </div>
            <div class="cardsList__wrap">
                {arrCards.length ? (
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{ 350: 1, 768: 2, 900: 3 }}
                    >
                        <Masonry
                            gutter='22px'
                        >
                            {arrCards.map((item, i) => (
                                <div class="cardsList__item" key={i}>
                                    <h3 class="cardsList__name">{item?.name}</h3>
                                    <p class="cardsList__descr">{item?.text}</p>
                                    <div class="cardsList__meta-wrap">
                                        <div class="cardsList__meta cardsList__meta_comments">
                                            <div class="cardsList__icon">
                                                <img src={CommentsIcon} alt="comments" />
                                            </div>
                                            {item?.comments}
                                        </div>
                                        <div class="cardsList__meta cardsList__meta_date">
                                            <div class="cardsList__icon">
                                                <img src={ClockIcon} alt="comments" />
                                            </div>
                                            {item?.date}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Masonry>
                    </ResponsiveMasonry>
                ) : ('Загрузка...')}

            </div>
        </div>
    )
}

export default CardsList;