import clsx from "clsx";
import React from "react";
import { Link, useLocation } from "react-router-dom";

import './asideMenu.scss';

const AsideMenu = ({ menu }) => {
    const Location = useLocation();
    
    return (
        <nav class="asideMenu">
            {menu.map((item, i) => (
                <div key={i} class={clsx('asideMenu__item', { 'asideMenu__item_active': Location.pathname.match(item.url) })}>
                    <Link to={item?.url} class="asideMenu__icon">
                        <img src={item.icon} alt={item.title} />
                    </Link>
                    <Link to={item?.url}>{item.title}</Link>
                </div>
            ))}
        </nav>
    )
}


// class AsideMenu extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             menu: this.props.menu,
//             location: window.location.href  
//         }
//     }

//     componentDidMount() {
//         this.setState({
//             location: window.location.href
//         });
//     }

//     render() {
//         const {location} = this.props;
//         console.log(location);
//         return (
//             <nav class="asideMenu">
//                 {this.state.menu.map((item, i) => (
//                     <div key={i} class={clsx('asideMenu__item', { 'asideMenu__item_active': !!this.state.location.match(item.url) })}>
//                         <Link to={item?.url} class="asideMenu__icon">
//                             <img src={item.icon} alt={item.title} />
//                         </Link>
//                         <Link to={item?.url}>{item.title}</Link>
//                     </div>
//                 ))}
//             </nav>
//         )
//     }
// }

export default AsideMenu;