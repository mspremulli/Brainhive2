import React from 'react'
import {useParams} from 'react-router-dom';

const ViewPost = (props) => {
    const {postId} = useParams();

    return(
        <div>
            <h3>{props.post.title}</h3>
        </div>
    )
}

export default ViewPost;