import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className={s.nav}>
                <div className="container">
                    <div className="nav__column">
                        <div className="nav__list">
                            <div className={s.nav__link}>
                                <NavLink to="/profile" activeClassName={s.activeLink}>Профиль</NavLink>
                            </div>
                            <div className={s.nav__link}>
                                <NavLink to="/dialogs" activeClassName={s.activeLink}>Сообщения</NavLink>
                            </div>
                            <div className={s.nav__link}>
                                <NavLink to="/users" activeClassName={s.activeLink}>Пользователи</NavLink>
                            </div>
                            <div className={s.nav__link}>
                                <NavLink to="/music" activeClassName={s.activeLink}>Музыка</NavLink>
                            </div>
                            <div className={s.nav__link}>
                                <NavLink to="/news" activeClassName={s.activeLink}>Новости</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <AdaptiveNavbar/>
        </>
    );
};

const AdaptiveNavbar = (props) => {
    return (
        <div className={s.adaptive__container}>
            <div className={s.adaptive__block}>
                <NavLink to="/profile" activeClassName={s.adaptive_activeLink}>
                    <i className="fas fa-house-user"/>
                </NavLink>
            </div>
            <div className={s.adaptive__block}>
                <NavLink to="/dialogs" activeClassName={s.adaptive_activeLink}>
                    <i className="fas fa-comments"/>
                </NavLink>
            </div>
            <div className={s.adaptive__block}>
                <NavLink to="/users" activeClassName={s.adaptive_activeLink}>
                    <i className="fas fa-users"/>
                </NavLink>
            </div>
            <div className={s.adaptive__block}>
                <NavLink to="/music" activeClassName={s.adaptive_activeLink}>
                    <i className="fas fa-music"/>
                </NavLink>
            </div>
            <div className={s.adaptive__block}>
                <NavLink to="/news" activeClassName={s.adaptive_activeLink}>
                    <i className="fas fa-newspaper"/>
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;