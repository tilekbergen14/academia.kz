import React from "react";
import { Link } from 'react-router-dom'

export default function NavHeader() {
  return (
    <nav className=" container navbar navbar-light">
      <Link className="navbar-brand bodoni" to="/">
        academy.kz
      </Link>
      <div className="prata link">Кіру</div>
    </nav>
  );
}
