import * as PostUtil from '../util/post_util';

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_NEW_POST = "RECEIVE_NEW_POST";
export const RECEIVE_A_POST = "RECEIVE_A_POST";
export const REMOVE_POST = "REMOVE_POST";
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";


const receivePosts = (posts) => {
    return {
        type: RECEIVE_POSTS,
        posts
    };
};

const receiveAPost = (post) => {
    return {
        type: RECEIVE_A_POST,
        post
    };
};

const removeAPost = (post) => {
    return {
        type: REMOVE_POST,
        post
    };
};

const receivePostErrors = (errors) => {
    return {
        type: RECEIVE_POST_ERRORS,
        errors
    };
};

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
}


export const fetchPosts = () => (dispatch) => {
    return PostUtil.getPosts()
            .then((posts) => dispatch(receivePosts(posts)))
            .catch((err) => dispatch(receivePostErrors(err.response.data)));
};

export const fetchAPost = (postId) => (dispatch) => {
    return PostUtil.getAPost(postId) 
        .then((post) => dispatch(receiveAPost(post)))
        .catch((err) => dispatch(receivePostErrors(err.response.data)));
};

export const createNewPost = (data) => (dispatch)=> {
    return PostUtil.writePost(data)
            .then(post => dispatch(receiveAPost(post)))
        .catch((err) => {
            dispatch(receivePostErrors(err.response.data));
        });
};

export const deleteAPost = (postId) => (dispatch) => {
    return PostUtil.deletePost(postId)
        .then((post) => {
            dispatch(removeAPost(post));
        })
        .catch((err) => dispatch(receivePostErrors(err.response.data)));
}