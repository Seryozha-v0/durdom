import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";

import './asideMenu.scss';
class AsideMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: this.props.menu,
            location: ''  
        }
    }

    componentDidMount() {
        this.setState({
            location: window.location.href
        });
    }

    render() {
        return (
            <nav class="asideMenu">
                {this.state.menu.map((item, i) => (
                    <div key={i} class={clsx('asideMenu__item', { 'asideMenu__item_active': !!this.state.location.match(item.url) })}>
                        <Link to={item?.url} class="asideMenu__icon">
                            <img src={item.icon} alt={item.title} />
                        </Link>
                        <Link to={item?.url}>{item.title}</Link>
                    </div>
                ))}
            </nav>
        )
    }
}

export default AsideMenu;