import React from "react";
import { Link } from 'react-router-dom'

export default function NavHeader() {
  return (
    <nav className=" container navbar navbar-light">
      <Link className="navbar-brand bodoni" to="/">
        academy.kz
      </Link>
      <Link className="prata link" to="/auth">Кіру</Link>
    </nav>
  );
}
