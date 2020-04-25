import React, {Component} from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import posts from './mock/posts.js';
import Navbar from './components/Navbar.js';
import PostList from './components/PostList.js';
import PostForm from './components/PostForm.js';
import ViewPost from './components/ViewPost.js';

class App extends Component {
  state = {
    ...this.state,
    posts: [...posts],
    selected: 1
  }

  addPost = (postData) => {
    postData.id = this.state.posts.length + 1 ;
    this.setState({
      posts: [...this.state.posts, postData],
    })
  }

  onSelect = (id) => {
    console.log(id)
    this.setState({
      ...this.state,
      selected: id
    })
  }

  render(){
    
    return (
       <BrowserRouter>
   
        <div className="App">
          <Navbar />
          <Switch>
            <Route path = '/' exact> 
            <PostList postList = {this.state.posts}
                      onSelect = {this.onSelect}/>
            </Route>
            <Route path ='/add' exact>
              <PostForm addPost = {this.addPost} />
            </Route>
            <Route path ='/post/:postId'>
              <ViewPost post = {this.state.posts[this.state.selected -1] }/>
            </Route>
          </Switch>
        </div>
     
       </BrowserRouter>
    );
  }
}



export default App;
