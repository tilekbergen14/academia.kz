import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom'
import { Avatar } from '@material-ui/core'

export default function NavHeader() {
  const location = useLocation()
  const [result, setResult] = useState(JSON.parse(localStorage.getItem('profile')))
  useEffect(() => {
    setResult(JSON.parse(localStorage.getItem('profile')))
  }, [location])
  return (
    <nav className=" container navbar navbar-light">
      <Link className="navbar-brand bodoni" to="/">
        academy.kz
      </Link>
        {result ?  <Link className="prata link d-flex align-items-center" to="/profile/"><Avatar src={result.img ? result.img : null} className="mr-3"/>{result.user.username}</Link>: <Link className="prata link" to="/auth">Кіру</Link>}
    </nav>
  );
}
