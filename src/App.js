import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar.js';
import PostList from './components/PostList.js';
import PostForm from './components/PostForm.js';
import ViewPost from './components/ViewPost.js';

const App = (props) => {
    
  return (

      <BrowserRouter>
  
      <div className="App">
      
        <Navbar />
        
        <Switch>
          <Route path = '/' exact> 
          <PostList/>
          </Route>
          <Route path ='/add' exact>
            <PostForm  />
          </Route>
          <Route path ='/post/:postId'>
            <ViewPost /> 
          </Route>
        </Switch>
        
      </div>
    
      </BrowserRouter>
  );
}




export default App;
