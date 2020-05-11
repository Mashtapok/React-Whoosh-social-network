import React from 'react';
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.header__container}>
                <div className={s.header__row}>
                    <div className={s.header__logo}>
                        <img src="https://tlgrm.ru/img/top-logo-icon_monochrome.svg" alt=""/>
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