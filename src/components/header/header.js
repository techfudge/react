import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
     <Link to='/'><a className="navbar-brand" >Navbar</a></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=" navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
        <Link to='/home' style={{textDecoration:'none'}} > <a className="nav-link active" aria-current="page" href=" ">Home</a></Link>
          <a className="nav-link" >Features</a>
          <a className="nav-link" >Pricing</a>
          <a className="nav-link disabled">DO NOT SHOW!!!</a>
        </div>
      </div>
    </div>
  </nav>
  </div>
  )
}

export default Header