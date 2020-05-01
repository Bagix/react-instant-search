import React from 'react';
import './Search.css';

const search = (props) => {
  return(
    <input className="Search" type="text" onChange={props.change} placeholder="Search by title"/>
  )
}

export default search;