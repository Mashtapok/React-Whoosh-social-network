import React from 'react';
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader/Preloader";

const Profile = (props) => {
    if(props.isFetching || props.profile === null) {
        return(<Preloader/>)
    }
    return (
        <div className="content">
            <div className="container">
                <ProfileInfo profile={props.profile} isFetching={props.isFetching} status={props.status}
                             updateUserStatus={props.updateUserStatus }/>
                {props.profile.userId === props.myUserId && <MyPostsContainer />}
            </div>
        </div>
    );
};

export default Profile;