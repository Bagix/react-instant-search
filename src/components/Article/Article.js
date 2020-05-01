import React from 'react';

const article = (props) => {
  return(
    <li>
      <a href={props.url} target="_blank">
        <img src={props.img} />
        <h3>{props.title}</h3>
      </a>
    </li>
  )
}

export default article;