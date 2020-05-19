import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';
import {Field, reduxForm } from "redux-form";
import {maxLengthCreator} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormControls";

const maxLength100 = maxLengthCreator(100);

const MyPosts = (props) => {
    let postElements = props.posts.map ( post => (<Post key={post.id} message={post.message} likesCount={post.likesCount}
                                                     profile={props.profile}/>) );

    const addNewPost = (value) => {
        props.addPost(value.newPostText);
    };
    return (
        <div className={s.postsBlock}>
            <h2>Все записи</h2>
            <AddNewPostReduxForm onSubmit={addNewPost}/>
                <div className={s.posts}>
                    {postElements}
                </div>
        </div>
    );
};

const AddNewPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit} className={s.postsBlock__row}>
            <Field name="newPostText" component={Textarea} placeholder="Что у вас нового?" validate={[maxLength100]}/>
            <button className={s.postsBlock__addButton}>Добавить</button>
        </form>
    );
};

const AddNewPostReduxForm = reduxForm({form:"addNewPostForm"})(AddNewPostForm);

export default MyPosts;