import { connect } from 'react-redux';
import { createNewPost, fetchPosts } from '../../actions/post_actions';
import PostForm from './post_form';


const msp = (state) => {
    return {
        currentUser: state.session.user,
        newPost: Object.values(state.entities.posts)[Object.values(state.entities.posts).length - 1]
    };
};


const mdp = (dispatch) => ({
    createNewPost: data => dispatch(createNewPost(data)),
    fetchPosts: () => dispatch(fetchPosts()),
});

export default connect(msp, mdp)(PostForm);