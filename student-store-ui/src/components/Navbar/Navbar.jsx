import * as React from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"


export default function Navbar() {

  return (
    
    <nav className="navbar">  
      {/* <Link to="/" > */}
        {/* <img className="logo" src="data:image/png;base64,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" alt="codepath-logo" />     */}
      {/* </Link> */}
        
        <ul className="nav-links">
          <Link to="/" >
            <li><a href="#">Home</a></li>
          </Link>
          
          <Link to="/about" >
            <li><a href="#About">About</a></li>
          </Link>

          <Link to="/contact" >
            <li><a href="#">Contact</a></li>
          </Link>

          <Link to="/buy-now" >
            <li><a href="#">Buy Now</a></li>
          </Link>

          
          
          
        </ul>
    </nav>
    
  )
}
