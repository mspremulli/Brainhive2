import React from 'react';
import Post from './Post.js';

const PostList = (props) =>{

    const renderPosts = () => {
        
        const display = props.posts.map((post) => {
        
            return (
                <Post post = {post}/>
            )
           // handleSelect={props.handleSelect}
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