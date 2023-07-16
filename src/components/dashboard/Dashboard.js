import clsx from 'clsx';

import './dashboard.scss';

const Dashboard = ({ spClass, children, ...props }) => {
    return (
        <div class={clsx("dashboard", spClass)} {...props}>
            <div class="dashboard__wrap">

                {/* <div class="notifications__scrollbar">
                    <div class="notifications__scrollbar_wrap">
                        <div class="notifications__scrollbar_thumb"></div>
                    </div>
                </div> */}

                {children}
            </div>
        </div>
    )
}

export default Dashboard;