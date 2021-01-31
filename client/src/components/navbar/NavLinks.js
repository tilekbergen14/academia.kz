import React from "react";
import { Link } from "react-router-dom";
import { GripHorizontal } from "react-bootstrap-icons"

export default function NavLinks() {
  return (
    <div className="bg-dark-blue">
      <nav className="container navbar navbar-expand-lg navbar-light">
        <button
          style={{padding:"4px 0px"}}
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="">
             <GripHorizontal color="white" size="25px"/>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav d-flex justify-content-between w-100">
            <Link className="nav-item active nav-link white" to="">
              Басты бет
            </Link>
            <Link className="nav-item nav-link white" to="">
              Программалау
            </Link>
            <Link className="nav-item nav-link white" to="">
              Блогтар
            </Link>
            <Link className="nav-item nav-link white" to="">
              Топ туралы
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}
