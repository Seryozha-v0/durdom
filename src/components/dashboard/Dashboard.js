import clsx from 'clsx';

import './dashboard.scss';
import { useEffect, useState } from 'react';

const Dashboard = ({ spClass, children, ...props }) => {
    const [showScrollBar, setShowScrollBar] = useState(false);

    const handleScrollBar = (el) => {
        const clientHeight = el.clientHeight;
        const scrollHeight = el.scrollHeight;
        console.log(clientHeight);
        console.log(scrollHeight);
        if (scrollHeight != clientHeight) {
            return setShowScrollBar(true);
        }
        setShowScrollBar(false);
    }

    useEffect(() => {
        const el = document.getElementsByClassName("dashboard__wrap")[0];
        handleScrollBar(el);
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