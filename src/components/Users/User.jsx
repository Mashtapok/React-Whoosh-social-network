import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.svg";
import React from "react";
import {NavLink} from "react-router-dom";

const User = ({user, isFollowing, follow, unfollow, ...props}) => {
    return (
        <div className={styles.userBlock} key={user.id}>
            <div className={styles.avatar_follow_block}>
                <NavLink to={'/profile/' + user.id}>
                    <div><img src={user.photos.large != null ? user.photos.large : userPhoto}
                              alt="Фото"
                              className={styles.avatar_img}/>
                    </div>
                </NavLink>
                {user.followed
                    ? <button disabled={isFollowing.some(id => id === user.id)}
                              onClick={() => {
                                  unfollow(user.id)
                              }}
                              className={styles.unfollowButton}>Отписаться</button>
                    : <button disabled={isFollowing.some(id => id === user.id)}
                              onClick={() => {
                                  follow(user.id)
                              }}
                              className={styles.followButton}>Подписаться</button>
                }
            </div>
            <div className={styles.aboutUser_block}>
                <div className={styles.name_block}>
                    <div className={styles.name}>{user.name}</div>
                </div>
                <div className={styles.status_block}>
                    {user.status ? <p>Статус: {user.status}</p> : <p>Статуса нет</p>} 
                </div>
            </div>
        </div>
    );
};

export default User;