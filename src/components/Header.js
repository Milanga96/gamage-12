import React from 'react';
//import "Header.css";
import {Link} from 'react-router-dom'

const Header =()=>{
  return (
    <header>
    <div className="logo">
      <h1><Link to="/Aaa">Shopping cart</Link></h1>
    </div>
    <ul>
      <li></li>
      <li></li>
      <li>
        <input type="name" placeholder="search"/>
      </li>
      <li></li>
      <li><Link to="/login/register">LOGIN/REGISTER</Link></li>
    
    <li>
      <img src="" alt=""/>
    </li>
    </ul>
  </header>
)
}

export default Header;