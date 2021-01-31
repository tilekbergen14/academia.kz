import React, {useState} from "react";
import { Link } from "react-router-dom"
export default function Auth() {
    const [register, setRegister] = useState(true)
    const handleAuth = () =>{
        setRegister((register) => !register)
    }
  return (
    <div className="container d-flex justify-content-center mt-5 align-items-center auth">
      <form className="text-center">
        {register && <input type="text" className="form-control m-2" placeholder="Пайдаланушы аты" required autofocus />}
        <input
          type="email"
          className="form-control m-2"
          placeholder="Электронды почта"
          required
          autofocus
        />
        <input
          type="password"
          id="inputPassword"
          className="form-control m-2"
          placeholder="Құпиясөз"
          required
        />
        {register && <input type="password" className="form-control m-2" placeholder="Құпиясөзді қайталау" required autofocus />}
        <button className="btn btn-lg btn-primary btn-block m-2" type="submit">
            {register ? "Тіркелу" : "Кіру"}
        </button>
        <Link style={{fontSize: 14}} className="m-2 link" onClick={handleAuth}>{register ? "Аккаунт бар! Кіру": "Аккаунт жоқ! Тіркелу"}</Link>
      </form>
    </div>
  );
}
