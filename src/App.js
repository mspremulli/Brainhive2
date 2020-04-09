import React, {Component} from 'react';
import './App.css';
import Post from './components/Post.js';

class App extends Component {
  post = {
    posterName: 'Arnell Millhouse',
    resourceAuthor: 'Albert Einstein',
    skillLevel: 'Advanced',
    cohort: '0',
    title: 'Universal Equation',
    categories: ['FORTRAN','redux'],
    summary: 'This was a great article about blending Fortran and redux',
    link: 'www.google.com/search?q=Albert20Einstein',
    resourceType: 'Article',
    datePublished: '1943-10-03.00:00:00z',
    videoLength: null,
    timeToComplete: 3,
    rating: 5,
    comments: [{poster: 'Cliff', text: 'Nice Post'}]

  }

  render(){
    return (
      <div className="App">
        <h1>Brainhive II</h1>
        <Post post = {this.post}/>
      </div>
    );
  }
}

export default App;
