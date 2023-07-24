import clsx from 'clsx';

import './dashboard.scss';
import { useEffect, useState } from 'react';

const Dashboard = ({ spClass, children, ...props }) => {
    const [showScrollBar, setShowScrollBar] = useState(false);

    const handleScrollBar = (el) => {
        const clientHeight = el.clientHeight;
        const scrollHeight = el.scrollHeight;
        
        if (scrollHeight != clientHeight) {
            return setShowScrollBar(true);
        }

        setShowScrollBar(false);
    }

    const handleScroll = (e) => {
        const top = e.target.scrollTop;
        const height = e.target.scrollHeight;
        const wrapHeight = e.target.offsetHeight;

        const thumb = document.getElementsByClassName("dashboard__scrollbar_thumb")[0];
        thumb.setAttribute('style', `height: ${wrapHeight / height * 100}%;transform: translate(-50%,${top / wrapHeight * 100}%)`)
    }
    
    useEffect(() => {
        const el = document.getElementsByClassName("dashboard__scroll")[0];
        
        if (el) {
            console.log(el.scrollTop);
            const height = el.scrollHeight;
            const wrapHeight = el.offsetHeight;
            const thumb = document.getElementsByClassName("dashboard__scrollbar_thumb")[0];
            thumb.setAttribute('style', `height: ${wrapHeight / height * 100}%`);

            el.addEventListener('scroll', handleScroll);
        }
    }, [showScrollBar]);

    useEffect(() => {
        const wrap = document.getElementsByClassName("dashboard__wrap")[0];
        handleScrollBar(wrap);
    }, []);

    return (
        <div class={clsx("dashboard", spClass)} {...props}>
            <div class="dashboard__wrap">
                {showScrollBar ? (
                    <div class="dashboard__scroll">
                        {children}
                    </div>
                ) : (
                    <>
                        {children}
                    </>
                )}

            </div>
            {showScrollBar && (
                <div class="dashboard__scrollbar">
                    <div class="dashboard__scrollbar_wrap">
                        <div class="dashboard__scrollbar_thumb"></div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Dashboard;