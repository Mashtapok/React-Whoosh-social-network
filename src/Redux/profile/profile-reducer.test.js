import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 11},
        {id: 2, message: 'It\'s my first post', likesCount: 3},
    ],
};

test('length of posts should be incremented', () => {
    //1. test data
    let action = addPostActionCreator("привет мой пост!");

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(3)
});

test('message of new post should be correct', () => {
    //1. test data
    let action = addPostActionCreator("привет мой пост!");

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts[2].message).toBe("привет мой пост!")
});

test('after deleting length of posts should be decrement', () => {
    //1. test data
    let action = deletePost(1);

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(1)
});