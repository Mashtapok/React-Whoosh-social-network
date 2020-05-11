import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state : {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 11},
                {id: 2, message: 'It\'s my first post', likesCount: 3},
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Stepan'},
                {id: 2, name: 'Robert'},
                {id: 3, name: 'Svetlana'},
                {id: 4, name: 'Boris'},
                {id: 5, name: 'Rustam'},
            ],
            messages: [
                {id: 1, message: 'How are you?'},
                {id: 2, message: 'Hello guys!'},
                {id: 3, message: 'Yo'},
            ],
            newMessageText: '',
        },
        sidebar: {},
    },
    _callSubscriber (){},

    getState() {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer; // наблюдатель паттерн ( то же самое, что onClick, например )
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar= sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    },
};

window.store = store;
export default store;


/*    _addPost () {
        if (this._state.profilePage.newPostText === "") return;
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
    },
    _updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },*/