import s from "../Dialogs.module.css";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormControls/FormControls";
import React from "react";
import {maxLengthCreator} from "../../../utils/validators/validators";

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit} className={s.dContents}>
            <Field name="newMessageText" component={Textarea} validate={[maxLength100]} placeholder="Напишите сообщение"/>
            <button className={s.messages__newMessage__button}>Отправить</button>
        </form>
    );
};

export default reduxForm({form:"dialogAddMessageForm"})(AddMessageForm);