import React from 'react';
import './Article.css';

const article = (props) => {
  return(
    <li className="Article">
      <a href={props.url} target="_blank">
        <img src={props.img} />
        <h3>{props.title}</h3>
      </a>
    </li>
  )
}

export default article;