import React from "react";
import "./Header.css";
import {Link} from "react-router-dom"
 import logo from './logo.jpg'
 function Header(){
    return(
<div className="header">
    <div className="hraderLeft">
      <Link className="link" to="/"><img className="header_icon" src={logo} alt= "logo"/></Link>
      <Link className="link" to="/movies/popular"> Popular</Link>
      <Link className="link" to="/movies/top_rated"> Top Rated</Link>
      <Link className="link" to="/movies/upcoming"> Upcoming</Link>


    </div>
</div>
    )
 }
 export default Header; 