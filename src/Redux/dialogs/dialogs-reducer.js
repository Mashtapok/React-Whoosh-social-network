const SEND_NEW_MESSAGE = "dialogs/SEND-NEW-MESSAGE";

let initialState = {
    dialogs: [
        {id: 1, name: 'Степан'},
        {id: 2, name: 'Mashtapok'},
        {id: 3, name: 'Пётр'},
        {id: 4, name: 'Борис'},
    ],
    messages: [
        {id: 1, message: 'Привет! Как твои дела?'},
        {id: 2, message: 'Всё понятно...'},
        {id: 3, message: 'ну и молчи дальше'},
    ],
    newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_NEW_MESSAGE:
            if (!action.newMessageText) return state;
            let body = action.newMessageText;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body} ],
            };
        default:
            return state;
    }
};

export const sendNewMessageActionCreator = (newMessageText) => ({type: SEND_NEW_MESSAGE, newMessageText });

export default dialogsReducer;