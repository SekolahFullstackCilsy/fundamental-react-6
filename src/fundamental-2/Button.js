import React from 'react';

const Button = (props) => {
  return (
    <button onClick={props.onAddUser}>{props.children}</button>
  )
}

export default Button