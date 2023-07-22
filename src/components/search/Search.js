import clsx from 'clsx';
import SearchIcon from './../../img/icons/search.svg';

import './search.scss';

const Search = ({ icon, short }) => {
    return (
        <form class={clsx("search", {"search_short": short})}>
            {icon && (
                <div class="search__icon">
                    <img src={icon} alt="calendar" />
                </div>
            )}
            <input class="search__input" placeholder="Поиск среди 3 274 проектов" type="text" />
            <button class="search__btn" type="submit">
                <img src={SearchIcon} alt="search" />
            </button>
        </form>
    )
}

export default Search;