import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Button from './common/Button.js';

/*displays a single post*/

class ViewPost extends Component{
  state = {
    showComments:false
  };

  clickHandler = () => {
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
    //gets the id from the url
    let {postId} = this.props.match.params;
    postId = parseInt(postId);

    //take one post out of the list that matches the id from the url
    const post = this.props.posts.list.filter(item=>{return item.id === postId})[0];
    // console.log('postid',postId,'postindex',postIndex);
    let postLink = post.link;
    
    //adds https if its not there
    const linkRegex = /^https?:\/\//;  
    postLink = postLink.match(linkRegex) ?
    postLink : `https://${postLink}`;
    // console.log(postLink);
    
    return(
        <div className = 'singlePost'>
          <h3 >{post.title}</h3>
                      
          <h5>{post.summary}</h5>
          <h5> Rating: {post.rating}</h5>
          <a  href = {postLink}>
            <h5> View the : {post.resourceType}</h5>
          </a>
          
          <Button onClick = {this.clickHandler}>
            {this.state.showComments ? "Hide Comments": "Show Comments"}
          </Button> 
          {this.state.showComments ? this.renderComments(post) : null}
        
        </div>
    )
  }
}

const mapStateToProps = (store) => {
  return{
    posts:store.posts
  };
};

export default connect(mapStateToProps)(withRouter(ViewPost));