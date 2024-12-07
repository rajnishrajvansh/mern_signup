import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function SignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => {console.log(result)
        navigate('/login')
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex bg-dark justify-content-center align-items-center vh-100">
      <div className="w-25 bg-white rounded p-4 shadow">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>{" "}
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="">
              <strong>Email</strong>{" "}
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="">
              <strong>Password</strong>{" "}
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className=" btn btn-success w-100 rounded-0 p-2"
          >
            Register
          </button>
        </form>
        <p>Already Have an Account</p>
        <Link to="/login">
          <button className=" btn btn-default w-100 bg-light rounded-0 p-2">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
