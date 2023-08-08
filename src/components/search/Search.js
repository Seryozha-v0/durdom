import clsx from 'clsx';
import SearchIcon from './../../img/icons/search.svg';

import './search.scss';

const Search = ({ icon, short, result, value, onChange, onFocus, onBlur }) => {
    return (
        <div class={clsx("search", { "search_short": short })}>
            <form class={clsx("search__form", { "search__form_active": result?.length })}>
                {icon && (
                    <div class="search__icon">
                        <img src={icon} alt="calendar" />
                    </div>
                )}
                <input
                    class="search__input"
                    placeholder="Поиск среди 3 274 проектов"
                    type="text"
                    value={value}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
                <button class="search__btn" type="submit">
                    <img src={SearchIcon} alt="search" />
                </button>
            </form>
            {!!result?.length && (
                <div class="search__result">
                    {result.map((item, i) => (
                        <div key={i} className="search__resultItem">
                            {item.name} - {item.date}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Search;