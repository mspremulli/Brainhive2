import React from 'react';
import Post from './Post.js';


/*Postlist is in charge of displaying a list of post cards and passing along the select function */
const PostList = (props) =>{

    const renderPosts = () => {
        
        const display = props.postList.map((post) => {
        
            return (
                <Post post = {post} key = {post.id} onSelect = {props.onSelect}/>
            )
        });
            return display;
        }

    return(
        <div className ='postList'>
            {renderPosts()} 
        </div>
    )
}

export default PostList