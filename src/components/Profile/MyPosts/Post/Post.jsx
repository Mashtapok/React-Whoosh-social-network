import React from 'react';
import s from "./Post.module.css";
import userPhoto from "../../../../assets/images/user.svg";

const Post = (props) => {
    return (
        <div className={s.post}>
            <div className={s.post__header}>
                <img src={props.profile.photos.small === null ? userPhoto : props.profile.photos.small} alt="avatar"/>
                <div>
                    <h2>{props.profile.fullName}</h2>
                    <div className={s.post__date}>15:30:12</div>
                </div>
            </div>
            <div className={s.post__content}>
                <span>{props.message}</span>
            </div>
            <div className={s.post__activity}>
                <div className={s.activities}>
                    <i className="far fa-heart"/> {props.likesCount}
                </div>
                &nbsp;
                <div className={s.activities}>
                    <i className="far fa-comment"/> 0
                </div>
                &nbsp;
                <div className={s.activities}>
                    <i className="fas fa-share"/> 0
                </div>
            </div>
        </div>
    );
}

export default Post;