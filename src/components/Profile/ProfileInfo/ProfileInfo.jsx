import React, {useState} from 'react';
import s from "./ProfileInfo.module.css";
import userPhoto from "../../../assets/images/user.svg";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusHooks from "./ProfileStatus/ProfileStatusHooks";
import ProfileDataForm from "./ProfileDataForm";
import {Gallery} from "../../common/Gallery/Gallery";

const ProfileInfo = ({profile, isFetching, status, updateUserStatus, isOwner, updatePhoto, isAvatarUpdating, updateProfile}) => {
    const [editMode, setEditMode] = useState(false);
    const [showGallery, setShowGallery] = useState(false);

    const onSubmit = (formData) => {
        updateProfile(formData).then( ()=>{
            setEditMode(false);
        })
    };

    const onAvatarSelected = (event) => {
        if (event.target.files.length) {
            updatePhoto(event.target.files[0]);
        }
    };
    const gallery = () => {
      if(profile.photos.large || profile.photos.small) setShowGallery(true);
    };

    if (isFetching || !profile) {
        return <Preloader/>
    } else return (
        <>
            <div className={s.profileBlock}>
                <div className={s.avatarBlock}>
                    <img src={profile.photos.large || userPhoto}
                         alt="фото пользователя" className={s.avatar_img}
                    onClick={gallery} />
                    <div style={isAvatarUpdating ? {display: "flex"} : {display: "none"}}
                         className={s.loaging_fogging}>Загрузка...
                    </div>

                    {isOwner && <label htmlFor="avatar" className={s.changeAvatar__container}>
                        <div>
                            <i className="fas fa-cloud-upload-alt"/>
                            <input onInput={onAvatarSelected} type="file" id="avatar" style={{display: "none"}}/>
                        </div>
                    </label>}
                </div>

                <div className={s.informationBlock}>
                    <div className={s.nameBlock}>{profile.fullName}</div>
                    <ProfileStatusHooks isOwner={isOwner} status={status} updateUserStatus={updateUserStatus}/>
                    {editMode
                        ? <ProfileDataForm initialValues={profile}
                                           profile={profile}
                                           deActivateEditMode={() => setEditMode(false)}
                                           onSubmit={onSubmit}/>
                        : <ProfileData profile={profile} isOwner={isOwner} activateEditMode={() => setEditMode(true)}/>}
                </div>

                {showGallery && <Gallery setShowGallery={setShowGallery} isOwner={isOwner} img={profile.photos.large || profile.photos.small}/>}
            </div>
        </>
    );
};

const ProfileData = ({profile, isOwner, activateEditMode}) => {
    let hasContact = false;
    for (let key in profile.contacts) {
        if (profile.contacts[key] !== null && profile.contacts[key] !== "") {
            hasContact = true;
        }
    }
    return (
        <div className={s.otherInformation}>
            {profile.aboutMe && <div className={s.aboutMe}>
                <i className="fas fa-address-card"/> {profile.aboutMe}
            </div>}
            {(profile.lookingForAJob || profile.lookingForAJobDescription) && <div className={s.job}>
                <i className="fas fa-briefcase"/> Ищу работу {`( ${profile.lookingForAJobDescription} )`}
            </div>}

            {hasContact && <div className={s.contancts}>
                Мои контакты:
                <div className={s.contacts__row}>
                    {Object.keys(profile.contacts).map((key, index) => {
                        //отображаем контакт только если он задан
                        return profile.contacts[key] &&
                            <Contact key={index} contactTitle={key} contactValue={profile.contacts[key]}/>
                    })}
                </div>
            </div>}
            {isOwner && <div className={s.showMore__block} onClick={activateEditMode}>
                <p>Редактировать</p>
            </div>}

        </div>
    );
};

const Contact = ({contactTitle, contactValue}) => {
    let nameClass = null;
    switch (contactTitle) {
        case "facebook":
            nameClass = "fab fa-facebook-f";
            break;
        case "instagram":
            nameClass = "fab fa-instagram";
            break;
        case "twitter":
            nameClass = "fab fa-twitter";
            break;
        case "vk":
            nameClass = "fab fa-vk";
            break;
        case "github":
            nameClass = "fab fa-github";
            break;
        case "youtube":
            nameClass = "fab fa-youtube";
            break;
        case "website":
            nameClass = "fas fa-globe";
            break;
        case "mainLink":
            nameClass = "fas fa-external-link-alt";
            break;
        default:
            return null;
    }
    return (
        <div className={s.icon__block}>
            <a target="_blank" href={contactValue}><i className={s.icon + " " + nameClass} rel="noopener"/></a>
        </div>
    );
};
export default ProfileInfo;




