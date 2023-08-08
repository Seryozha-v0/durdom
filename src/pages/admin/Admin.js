import { asideMenuData } from '../../data/adminData';
import AsideMenu from '../../components/asideMenu/AsideMenu';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Admin = () => {
    const Location = useLocation();
    const Navigate = useNavigate();

    useEffect(() => {
        const path = Location.pathname.replace(/^\/admin/, '');
        if (path === '/' || path === '') {
            return Navigate(asideMenuData[0].url);
        }
    });
    
    return (
        <div class="container container_row">
            <div class="container__section">
                <Outlet />
            </div>
            <div class="aside-container">
                <aside>
                    <AsideMenu
                        menu={asideMenuData}
                    />
                </aside>
            </div>
        </div>
    )
}
export default Admin;