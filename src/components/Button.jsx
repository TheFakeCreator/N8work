import React from 'react';
import "./ComponentStyles/Button.css";

const Button = (props) => {
  return (
      <a to="{this.props.path}" className="btn">{props.text}</a>
  )
}

export default Button
