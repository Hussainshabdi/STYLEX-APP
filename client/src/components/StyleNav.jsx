import React from "react";
import { Outlet, Link } from "react-router-dom";
import { User, useAuth0 } from "@auth0/auth0-react";


import "../App.css";
function StyleNav() {
  // const [count, setCount] = useState(0)
  const { logout,isAuthenticated,loginWithRedirect,user } = useAuth0();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top  ">
      <div className="container">
        <a className="navbar-brand" href="#">
          <h2 className="fw-bold font-monospace">Stylex</h2>
          <p className="font-siz">Hair professional studio</p>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto m-1 mb-2 mb-lg-0 fw-bold">
            <li className="nav-item active">
              <Link className="nav-link active" aria-current="page" to={"/"}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to={"/Services"}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/About"}>
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/Contact"}>
                Contact us
              </Link>
            </li>
          </ul>
          {
            isAuthenticated &&(<li>
              <p className="text-light">{user.name}</p>
            </li>)
          }

          {
            isAuthenticated ? (
              <li>
            <button
            className="btn btn-danger fw-bold"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button></li> ) 
            : (
              <li>
            <button className="btn btn-outline-warning" onClick={() => loginWithRedirect()}>
            Log In
          </button>
          </li>)}
          
            
            
         
         
        </div>
      </div>
      <Outlet />
    </nav>
  );
}

export default StyleNav;
