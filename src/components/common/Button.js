import React from 'react';

const Button = (props) => {
    return(
        <button {...props}  >
         {props.children}
        </button>
    )
}

const myStyles = {}

export default Button;