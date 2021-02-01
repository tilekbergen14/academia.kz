import React, {useState} from "react";
import { createUser, login } from '../actions/user'
import { useDispatch } from "react-redux"

export default function Auth() {
  const [register, setRegister] = useState(false)
  const dispatch = useDispatch()
  const [user, setUser] = useState({ username: "", email: "", password: "", password2: ""})
  const handleAuth = () =>{
      setRegister((register) => !register)
  }
  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if(register){
      dispatch(createUser(user))
      }
    else{
      dispatch(login({email: user.email, password: user.password}))
    }
  }

  return (
    <div className="container d-flex justify-content-center mt-5 align-items-center auth">
      <form className="text-center" onSubmit={handleSubmit}>
        {register && <input onChange={handleChange} name="username" type="text" className="form-control m-2" placeholder="Пайдаланушы аты" required autoFocus />}
        <input
          onChange={handleChange} name="email" 
          type="email"
          className="form-control m-2"
          placeholder="Электронды почта"
          required
          autoFocus
        />
        <input
          onChange={handleChange} name="password" 
          type="password"
          id="inputPassword"
          className="form-control m-2"
          placeholder="Құпиясөз"
          required
        />
        {register && <input onChange={handleChange} name="password2" type="password" className="form-control m-2" placeholder="Құпиясөзді қайталау" required autoFocus />}
        <button className="btn btn-lg btn-primary btn-block m-2" type="submit">
            {register ? "Тіркелу" : "Кіру"}
        </button>
        <div to="/" style={{fontSize: 14}} className="m-2 link" onClick={handleAuth}>{register ? "Аккаунт бар! Кіру": "Аккаунт жоқ! Тіркелу"}</div>
      </form>
    </div>
  );
}