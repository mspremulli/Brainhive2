import React, {Component} from 'react';
import {BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import posts from './mock/posts.js';
import Navbar from './components/Navbar.js';
import PostList from './components/PostList.js';
import PostForm from './components/PostForm.js';
import ViewPost from './components/ViewPost.js';

class App extends Component {
  state = {
    posts: [...posts],
  }

  addPost = (postData) => {
    this.setState({
      posts: [...this.state.posts, postData],
    })
  }


  render(){
    
    return (
       <BrowserRouter>
   
        <div className="App">
          <Navbar />
          <PostList posts = {this.state.posts}/>
          <PostForm addPost = {this.addPost} />
        </div>
     
       </BrowserRouter>
    );
  }
}



export default App;
