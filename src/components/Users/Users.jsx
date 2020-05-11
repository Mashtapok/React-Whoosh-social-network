import styles from "./users.module.css";
import React from "react";
import Preloader from "../common/Preloader/Preloader";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({totalUsersCount, currentPage, onPageChanged, pageSize, ...props}) => {
    return (
        <div className="content">
            <div className="container">
                <div className={styles.pageTitle}>
                    Поиск пользователей
                </div>
                <Paginator currentPage={currentPage}
                           onPageChanged={onPageChanged} totalItemsCount={totalUsersCount} pageSize={pageSize}/>

                {props.isFetching
                    ? <Preloader/>
                    : <div className={styles.body}>
                        {props.users.map(user => <User user={user} key={user.id}
                                                       unfollow={props.unfollow} isFollowing={props.isFollowing}
                                                       follow={props.follow}/>)
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default Users;