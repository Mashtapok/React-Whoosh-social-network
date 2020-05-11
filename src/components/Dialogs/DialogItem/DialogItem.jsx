import React from "react";
import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={path}>
                <div className={s.dialog__item}>
                    <img src="https://sun9-65.userapi.com/c845418/v845418867/a090a/5dIarTfS9B8.jpg" alt=""/>
                    <div className={s.dialog__name}>{props.name}</div>
                </div>
            </NavLink>
        </div>
    );
}

export default DialogItem;
