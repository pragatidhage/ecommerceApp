import React, { useState } from "react";
import axios from "axios";
import Layout from "../components/Layout/Layout";
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import "./../styles/AuthStyle.css";


const ForgotPassword = () => {
     
  const [email, setEmail] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [answer, setAnswer] = useState("");
 

  const navigate = useNavigate()

   //hadle submit
   const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,
        {  email,answer,newPassword }
      );
      if( res && res.data.success){
        toast.success( res.data && res.data.message)
        
        navigate( "/login")
      }else {
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Ecommerce App-ForgotPassword"}>
      <div className="form-container">
      
        <form onSubmit={handleSubmit}>
          <h3 className="title">RESET PASSWORD</h3>
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
            <label htmlFor="exampleInputEmail" className="form-label">
              What is name of your first school?
            </label>
            <input
              type="test"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="exampleInputEmail"
              placeholder="Enter"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword" className="form-label">
              New Password
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setnewPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword"
              placeholder="*********"
              required
            />
          </div>

         
          <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            RESET PASSWORD
          </button>
          </div>
         
         
        </form>
      </div>
    </Layout>
  )
}

export default ForgotPassword
