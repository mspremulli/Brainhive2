import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import Button from './common/Button.js';

/*displays a single post*/

class ViewPost extends Component{
    state = {
        showComments:false
    };

    clickHandler = () => {
        // console.log("clicked");
        this.setState({
            showComments: !this.state.showComments
        });
        // console.log(this.state.showComments);

    }

    renderComments = (post) => {
        // console.log("post",post);
        return post.comments.map(comment =>{
            return(
                <div className = 'box' key = {Math.random()}>
                    <p>{comment.commenter}</p>
                    <p>{comment.text}</p>
                </div>
            )
        })
    }

    render(){
        const props = this.props ;
        // const {postId} = props.match.params;
              
        const linkRegex = /^https?:\/\//;
        const link = props.post.link.match(linkRegex) ?
        props.post.link
        : `https://${props.post.link}`;

        return(
            <div className = 'singlePost'>
                <h3 >{props.post.title}</h3>
                            
                <h5>{props.post.summary}</h5>
                <h5> Rating: {props.post.rating}</h5>
                <a  href = {link}>
                    <h5> View the : {props.post.resourceType}</h5>
                </a>
               
                <Button onClick = {this.clickHandler}>
                    {this.state.showComments ? "Hide Comments": "Show Comments"}
                </Button> 
                {this.state.showComments ? this.renderComments(props.post) : null}
            
            </div>
        )
    }
}

// const mapStateToProps = (store) => {
//   return{
//     posts:store.posts
//   }
// }

export default withRouter(ViewPost);