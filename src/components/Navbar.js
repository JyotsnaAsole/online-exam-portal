import React from 'react';
import logo from '../images/navlogo.jpg';
import {Link} from 'react-router-dom';

const  Navbar = () => {
  const style ={
    height:50,
    width:70
  }
    return (
  
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <img src={logo} style={style} alt="elogo"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Signup</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to ="/login">Login</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        
      </ul>
      
    </div>
  </div>
  
</nav>
        </div>
    )
}

export default Navbar
