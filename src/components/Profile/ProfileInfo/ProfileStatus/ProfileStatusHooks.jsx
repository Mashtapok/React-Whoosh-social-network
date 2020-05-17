import React, {useEffect, useState} from 'react';
import s from "./ProfileStatus.module.css";

const ProfileStatusHooks = (props) => {
    let [ editMode, setEditMode ] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(()=> {
        setStatus(props.status)
    }, [props.status]);

    const activateEditMode = () => {
        if(props.isOwner) {
            setEditMode(true);
        }
    };
    const deactivateEditMode = () => {
        if(props.isOwner) {
            setEditMode(false);
            props.updateUserStatus(status);
        }
    };
    const enterDeactivateEditMode = (event) => {
        if(props.isOwner) {
            if (event.key === "Enter") {
                setEditMode(false);
                props.updateUserStatus(status);
            }
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
                    <span className={s.no_current_status}>{props.isOwner ? "изменить статус" : "нет статуса"}</span>}</p>
                }
            </div>
        </div>
    );
};

export default ProfileStatusHooks;