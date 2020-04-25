import React from 'react';
import Post from './Post.js';

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