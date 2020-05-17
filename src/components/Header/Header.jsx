import React from 'react';
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
import logo from "../../assets/images/header-logo.svg";

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.header__container}>
                <div className={s.header__row}>
                    <div className={s.header__logo}>
                        <img src={logo} alt="самолётик"/>
                        <span className={s.logo_name}>Whoosh</span>
                    </div>
                    <NavLink to={`/profile`}>
                        <div className={s.header__nameBlock}>
                            {props.isAuth ? <div className={s.header__afterAuthBlock}>{props.login}</div> : null}
                        </div>
                    </NavLink>
                    <NavLink to="/login">
                        <div className={s.header__loginBlock}>
                            {props.isAuth ? <div onClick={props.logout}>Выйти</div> : <div>Войти</div>}
                        </div>
                    </NavLink>
                </div>
            </div>
        </header>
    );
}

export default Header;