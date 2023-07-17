import UpIcon from './../../img/icons/chevron-up.svg';

import './scrollUp.scss';

const ScrollUp = () => {
    return (
        <div class="scrollUp">
            <div className="scrollUp__wrap">
                <div class="scrollUp__icon">
                    <img src={UpIcon} alt="DurDom" />
                </div>
            </div>
        </div>
    )
}

export default ScrollUp;