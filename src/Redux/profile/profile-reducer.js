import {profileAPI} from "../../api/api";
import {getAuthUserData} from "../authorization/auth-reducer";
import {stopSubmit} from "redux-form";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const PROFILE_IS_FETCHING = 'profile/PROFILE_IS_FETCHING';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST';
const UPDATE_PHOTO_SUCCESS = 'profile/UPDATE_PHOTO_SUCCESS';
const AVATAR_IS_UPDATING = 'profile/AVATAR_IS_UPDATING';

let initialState = {
    posts: [
        {id: 1, message: 'Привет, Whoosh!', likesCount: 100},
        {id: 2, message: 'Это твой первый пост', likesCount: 1},
    ],
    newPostText: '',
    profile: null,
    isFetching: false,
    status: "",
    isAvatarUpdating: false,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            if (!action.newPostText) return state;
            let newPost = {
                id: 6,
                message: action.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };

        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case PROFILE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(post => post.id !== action.postId)}
        }
        case UPDATE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        case AVATAR_IS_UPDATING: {
            return {...state, isAvatarUpdating: action.isAvatarUpdating}
        }
        default:
            return state;
    }
};
// ActionCreators
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const profileIsFetching = (isFetching) => ({type: PROFILE_IS_FETCHING, isFetching});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const updatePhotoSuccess = (photos) => ({type: UPDATE_PHOTO_SUCCESS, photos});
export const avatarIsUpdating = (isAvatarUpdating) => ({type: AVATAR_IS_UPDATING, isAvatarUpdating});

// ThunkCreators
export const getUserProfile = (userId) => async dispatch => {
    dispatch(profileIsFetching(true));

    const data = await profileAPI.getProfile(userId);
    dispatch(profileIsFetching(false));
    dispatch(setUserProfile(data));
};

export const getUserStatus = (userId) => async dispatch => {
    const data = await profileAPI.getStatus(userId);
    dispatch(setStatus(data));
};
export const updateUserStatus = (status) => async dispatch => {
    const data = await profileAPI.updateStatus(status);
    if (data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};
export const updatePhoto = (photo) => async dispatch => {
    dispatch(avatarIsUpdating(true));
    const data = await profileAPI.updatePhoto(photo);
    if (data.resultCode === 0) {
        dispatch(updatePhotoSuccess(data.data.photos));
        dispatch(avatarIsUpdating(false));
    }
};
export const updateProfile = (profile) => async (dispatch, getState) => {
    const OwnerUserId = getState().auth.userId;

    const data = await profileAPI.updateProfile(profile);
    if (data.resultCode === 0) {
        dispatch(getUserProfile(OwnerUserId));
    } else {
        let message = `(${data.messages[0]})`;
        dispatch(stopSubmit("editProfile", {_error: `Ошибка: ${message}`}));
        return Promise.reject(data.messages[0])
    }
};


export default profileReducer;