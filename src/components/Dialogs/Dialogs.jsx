import React, {useEffect} from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm/AddMessageForm";


const Dialogs = (props) => {
    useEffect(() => {document.title = "Диалоги"},[]);

    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} />);        // Маппим данные диалогов в элементы
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />);               // Маппим данные сообщений в элементы

    const addNewMessage = (formData) => {
        props.sendMessage(formData.newMessageText);
        formData.newMessageText = "";
    };

    return (
        <div className="content content__dialogs">
            <div className="container">
                <div className={s.dialogs}>
                    <div className={s.dialogs__items}>
                        <div className={s.dialogs__heading}>Диалоги</div>
                        {dialogsElements}
                    </div>

                    <div className={s.messages}>
                        <div className={s.messages__chat}>
                            {messagesElements}
                        </div>
                        <div className={s.messages__newMessage}>
                            <AddMessageForm onSubmit={addNewMessage}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Dialogs;