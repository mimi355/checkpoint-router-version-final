import React from "react";
import { Link } from "react-router-dom";
function Nav({ isAuth, login, logout }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Navbar
      </a>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <Link className="nav-link active" to="/">
            Home{" "}
          </Link>
          <Link className="nav-link" to="/category">
            Category
          </Link>
          <Link className="nav-link" to="/products">
            Products
          </Link>
          <Link className="nav-link" to="/admin">
            Admin Area
          </Link>
          <button onClick={() => (isAuth ? logout() : login())}>
 {" "}
 {isAuth ? "Logout" : "Login"}{" "}
</button>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
