import { connect } from 'react-redux';
import { createNewPost, fetchPosts, clearErrors } from '../../actions/post_actions';
import PostForm from './post_form';
import { uploadImage } from '../../actions/image_actions';

const msp = (state) => {
    return {
        currentUser: state.session.user,
        newPost: Object.values(state.entities.posts)[Object.values(state.entities.posts).length - 1],
        errors: Object.values(state.errors.post)
    };
};


const mdp = (dispatch) => ({
    createNewPost: data => dispatch(createNewPost(data)),
    fetchPosts: () => dispatch(fetchPosts()),
    uploadImage: image => dispatch(uploadImage(image)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(msp, mdp)(PostForm);
