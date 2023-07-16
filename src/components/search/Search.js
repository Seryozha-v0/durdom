import SearchIcon from './../../img/icons/search.svg';

import './search.scss';

const Search = ({type}) => {
    return (
        <form class="search">
            <input class="search__input" placeholder="Поиск среди 3 274 проектов" type="text" />
            <button class="search__btn" type="submit">
                <img src={SearchIcon} alt="search" />
            </button>
        </form>
    )
}

export default Search;