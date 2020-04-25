import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class Post extends Component {
    state = {
        clicked:false
    }
    
    handleClick = () => {
        this.props.onSelect(this.props.post.id);
        this.setState({
            clicked:true
        })
    }
    render(){
        const {post} = this.props;

    
        return(
            <div className='post' onClick = {() => this.handleClick()}>
                {this.state.clicked ? <Redirect to = '/post/id' /> : null}
                <h2>{post.title}</h2>
                <p>{post.resourceAuthor}</p>
                {post.videoLength ? <p>Length: {post.videoLength}</p> : null}
                <p className = 'comments'>Comments: {post.comments.length}</p>

            </div>
        )
    }
}

export default Post;