import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const navigate=useNavigate()

    axios.defaults.withCredentials=true;
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/login',{email,password})
        .then(result=>{console.log(result)
            if(result.data==="Success"){
                navigate('/home')
            }   
        })
        .catch(err=>console.log(err))
    }

  return (
    <div className="d-flex bg-dark justify-content-center align-items-center vh-100">
      <div className="w-25 bg-white rounded p-4 shadow">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              name="email"
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
              name="password"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className=" btn btn-success w-100 rounded-0 p-2"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
