import s from "./ProfileInfo.module.css";
import React, {useState} from "react";
import {Field, reduxForm} from "redux-form";
import {Checkbox, Input} from "../../common/FormControls/FormControls";
import styles from "../../Login/Login.module.css";

const ProfileDataForm = ({profile, handleSubmit, error}) => {
    const [showMore, setShowMore] = useState(false);
    return (
        <form className={s.otherInformation} onSubmit={handleSubmit} >
            <fieldset>
                {error && <div className={styles.formErorr}>
                    {error}
                </div>}
                <div>
                    <p className={s.label}>Имя:</p><Field placeholder="новое имя" name="fullName" component={Input}
                                                          type="text"/>
                </div>
                <div className={s.aboutMe}>
                    <p className={s.label}>Обо мне:</p><Field placeholder="расскажите о себе" name="aboutMe"
                                                              component={Input} type="text"/>
                </div>
                <div className={s.job}>
                    <label style={{display: "flex", alignItems: "center"}}>
                        <p style={{fontSize: "12px"} }>Ищу работу</p>
                        <Field name="lookingForAJob" component={Checkbox} style={{position: "relative", top: "2px"}}/>
                    </label>
                    <p className={s.label}>Профессиональные навыки:</p><Field placeholder="ваши профессиональные навыки"
                                                                              name="lookingForAJobDescription"
                                                                              component={Input} type="text"/>
                </div>
                {showMore
                    ? <div className={s.showMore__block} onClick={()=>setShowMore(false)}><p>Скрыть полную информацию</p></div>
                    : <div className={s.showMore__block} onClick={()=>setShowMore(true)}><p>Показать полную информацию</p></div>}
            </fieldset>
            {showMore && <fieldset>
                <div>Мои контакты: </div>
                <div className={s.editContacts}>
                    {Object.keys(profile.contacts).map(key => {
                    return <div key={key} className={s.label}>{key} : <Field placeholder={key} name={"contacts." + key}
                                                                 component={Input} type="text"/></div>
                })}

                </div>
            </fieldset>}
            <div className={s.saveButton}>
                <button className={s.btn_save}>Сохранить</button>
            </div>

        </form>
    );
};

const ProfileDataReduxForm = reduxForm({form: "editProfile"})(ProfileDataForm);

export default ProfileDataReduxForm