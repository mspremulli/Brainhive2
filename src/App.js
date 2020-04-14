import React, {Component} from 'react';
import './App.css';
import Post from './components/Post.js';
import posts from './mock/posts.js';

class App extends Component {
  

  renderPosts = () => {
    const display = posts.map(post => {
      return <Post post = {post} />
    })
    return display;
  }

  render(){
    
    return (
      <div className="App">
        <h1>Brainhive II</h1>
        <div className ='postList'>
          {this.renderPosts()} 
        </div>
      </div>
    );
  }
}

export default App;
