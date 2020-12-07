import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar bg-transparent d-flex justify-content-between align-items-center">
        <Link to="/">
          <button className="btn btn-info btn-small ">
            Home
          </button>
        </Link>
      </nav>
    </React.Fragment>
  );
};
export default Navbar;
