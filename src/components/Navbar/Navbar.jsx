import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
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
    );
}

export default Navbar;