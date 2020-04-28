import React from 'react'
import {useParams} from 'react-router-dom';
/*display a single post*/

const ViewPost = (props) => {
    const {postId} = useParams();
    const commentList = props.post.comments.map(comment => {
        return(
            <li>{comment.commenter} says '{comment.text}'</li>
        )
    })
    
    const linkRegex = /^https?:\/\//;
    const link = props.post.link.match(linkRegex) ?
     props.post.link
    : `https://${props.post.link}`;

    console.log("link")
    console.log(link);
    return(
        <div className = 'singlePost'>
            <h3 >{props.post.title}</h3>
                        
            <h5>{props.post.summary}</h5>
            <h5> Rating: {props.post.rating}</h5>
            <a target = '_blank' href = {link}>
                <h5> View the : {props.post.resourceType}</h5>
            </a>
            <ul> Comments:
             {commentList}
            </ul>
            
        </div>
    )
}

export default ViewPost;