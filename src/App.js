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
    const display = posts.map(post => <Post post = {post} />);

    return (
      <div className="App">
        <h1>Brainhive II</h1>
        {this.renderPosts()}
        {/* {display} */}
      </div>
    );
  }
}

export default App;
