import React, { useState } from "react";
import axios from "axios";
import Layout from "../components/Layout/Layout";
import { useNavigate , useLocation } from "react-router-dom"
import toast from "react-hot-toast"
import "./../styles/AuthStyle.css";
import { useAuth } from "../context/auth"

const Login = () => {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth,setAuth] = useAuth()

  const navigate = useNavigate()
  const location = useLocation()
   //hadle submit
   const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        {  email, password }
      );
      if( res && res.data.success){
        toast.success( res.data && res.data.message)
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem('auth',JSON.stringify(res.data))
        navigate(location.state || "/")
      }else {
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Ecommerce App-Login"}>
      <div className="form-container">
      
        <form onSubmit={handleSubmit}>
          <h3 className="title">LOGIN FORM</h3>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail" className="form-label">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword"
              placeholder="*********"
              required
            />
          </div>
          {/* <div className="mb-3">
          <button type="button" className="btn btn-primary" onClick={()=>{navigate('/forgot-password')}}>
            Forgot Password
          </button>
          </div> */}
          <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            LOGIN
          </button>
          </div>
         
          <div className="mb-3">
          <a href="/forgot-password" style={{color:"black"}} > Forgot Password</a>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Login
