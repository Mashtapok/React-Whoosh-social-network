import React from 'react';
import s from "./ProfileInfo.module.css";
import userPhoto from "../../../assets/images/user.svg";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusHooks from "./ProfileStatusHooks";

const ProfileInfo = ({profile, isFetching, status, updateUserStatus, isOwner, updatePhoto, isAvatarUpdating}) => {
    const onAvatarSelected = (event) => {
        if (event.target.files.length) {
            updatePhoto(event.target.files[0]);
        }
    };
    if (!profile) {
        return <Preloader/>
    }
    if (isFetching) {
        return <Preloader/>
    }
    else return (
        <>
            <div className={s.profileBlock}>
                <div className={s.avatarBlock}>
                    <img src={profile.photos.large || userPhoto }
                         alt="фото пользователя" className={s.avatar_img}/>
                         <div style={isAvatarUpdating ? {display : "flex"} : {display : "none"}} className={s.loaging_fogging}>Загрузка...</div>

                    {isOwner && <label htmlFor="avatar" className={s.changeAvatar__container}>
                        <div>
                            <i className="fas fa-cloud-upload-alt"/>
                            <input onInput={onAvatarSelected} type="file" id="avatar" style={{display: "none"}} />
                        </div>
                    </label>}

                </div>
                
                
                <div className={s.informationBlock}>
                    <div className={s.nameBlock}>{profile.fullName}</div>
                    <ProfileStatusHooks isOwner={isOwner} status={status} updateUserStatus={updateUserStatus }/>
                </div>
            </div>
        </>
    );
};

export default ProfileInfo;

/*
{props.isFetching ? <Preloader/> :
    <div className={s.profileBlock}>
        <div className={s.avatarBlock}>
            {props.profile.photos.large
                ? <img src={props.profile.photos.large} alt="avatar" className={s.avatar_img}/>
                : <img src={userPhoto} alt="avatar" className={s.avatar_img}/>}
        </div>
        <div className={s.informationBlock}>
            <div className={s.nameBlock}>{props.profile.fullName}</div>
            <div>
                <div>Статус: {props.profile.aboutMe}</div>
                <div>Город</div>
                <div>Ссылки</div>
            </div>
        </div>
    </div>
}*/
