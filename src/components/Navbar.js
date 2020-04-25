import React from 'react';

const Navbar = (props) => {
    return(
        <div className = "header">
            <h1 id ='brand'>Welcome to Brainhive</h1>
            <div id= 'navigation'>
              <a href=''>Add Post</a>
            </div>
        </div>
    )
}

export default Navbar;