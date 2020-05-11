import React, {useEffect, useState} from 'react';
import s from "./ProfileInfo.module.css";

const ProfileStatusHooks = (props) => {
    let [ editMode, setEditMode ] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(()=> {
        setStatus(props.status)
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    };
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    };
    const enterDeactivateEditMode = (event) => {
        if (event.key === "Enter") {
            setEditMode(false);
            props.updateUserStatus(status);
        }
    };
    const onStatusChange = (event) => {
        setStatus(event.currentTarget.value)
    };
    return (
        <div className={s.statusBlock}>
            <div>
                {editMode
                    ? <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                             onKeyPress={enterDeactivateEditMode}
                             type="text" value={status}/>
                    : <p onDoubleClick={activateEditMode}
                         className={s.status}>{props.status ||
                    <span className={s.no_current_status}>изменить статус</span>}</p>
                }
            </div>
        </div>
    );
};

export default ProfileStatusHooks;