import notification from './../../img/icons/notifiction.svg';
import man2 from './../../img/avatars/man2.jpg';

import './notifications.scss';
import Dashboard from '../dashboard/Dashboard';

const Notification = ({
    isChecked,
    notificationBarOpen,
    setNotificationBarOpen
}) => {
    return (
        <div class="notifications">
            <div class={`notifications__icon ${!isChecked ? "notifications__icon_new" : ""}`}
                onClick={() => setNotificationBarOpen(!notificationBarOpen)}
            >
                <img src={notification} alt="Notifications" />
            </div>

            {notificationBarOpen && (
                <Dashboard spClass='notifications__bar'>
                        <div class="notifications__scrollbar">
                            <div class="notifications__scrollbar_wrap">
                                <div class="notifications__scrollbar_thumb"></div>
                            </div>
                        </div>

                        <div class="notifications__messages">
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i, item) => (
                                <div class="notifications__item" key={i}>
                                    <div class="notifications__img">
                                        <img src={item?.user?.img || man2} alt={item?.user?.name || ''} />
                                    </div>
                                    <div class="notifications__descr">
                                        <div class="notifications__text">
                                            {item?.user?.name || 'Андрей Карпов '}
                                            {item?.notification?.type || 'оставил комментарий в вашем проекте '}
                                            <a href={item?.project?.name || '#'}>
                                                {item?.project?.name || 'Говорит физик'}
                                            </a>
                                        </div>
                                        <div class="notifications__time">
                                            {item?.notification?.date || '3 часа назад'}
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </Dashboard>
            )}
        </div>
    )
}

export default Notification;