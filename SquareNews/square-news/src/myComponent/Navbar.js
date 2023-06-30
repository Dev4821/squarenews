import React, { Component } from 'react'
import { Link } from "react-router-dom"

export class Navbar extends Component {
  render() {
    return (
      <div >
        <nav className="navbar navbar-expand-lg navbar-dark "  style={{background:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(70,70,175,1) 40%, rgba(0,212,255,1) 100%)"}}>
  <div className="container-fluid" style={{textShadow:"5px 5px 5px black"}}>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Link className="navbar-brand" to={"/"}>Square News</Link>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         <li className="nav-item"><Link className="nav-link active" aria-current="page" to={"/"}>Home</Link></li>
         <li className="nav-item"><Link className="nav-link" to={"/business"}>Business</Link></li>
         <li className="nav-item"><Link className="nav-link" to={"/entertainment"}>Entertainment</Link></li>
         <li className="nav-item"><Link className="nav-link" to={"/general"}>General</Link></li>
         <li className="nav-item"><Link className="nav-link" to={"/health"}>Health</Link></li>
         <li className="nav-item"><Link className="nav-link" to={"/science"}>Science</Link></li>
         <li className="nav-item"><Link className="nav-link" to={"/sports"}>Sports</Link></li>
         <li className="nav-item"><Link className="nav-link" to={"/technology"}>Technology</Link></li>
       
      </ul>
      
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar
