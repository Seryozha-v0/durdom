import { useEffect, useState } from 'react';
import UpIcon from './../../img/icons/chevron-up.svg';

import './scrollUp.scss';

const ScrollUp = () => {
    const scrolling = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }


    const [scrollTop, setScrollTop] = useState(0);
    const handleScroll = () => {
        setScrollTop(window.scrollY);
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {scrollTop > 600 && (
                <div class="scrollUp">
                    <div class="scrollUp__wrap">
                        <div class="scrollUp__icon" onClick={scrolling}>
                            <img src={UpIcon} alt="DurDom" />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ScrollUp;