import React,{ useState } from "react";
import Layout from "../components/Layout/Layout";
import { toast } from "react-toastify"

const Register = () => {
   const [name,setName] = useState("");
   const [email,setEmail] = useState("");
   const [password,setPassword] = useState("");
   const [phone,setPhone] = useState("");
   const [address,setAddress] = useState("");
  
   //hadle submit
   const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(name,email,password,phone,address)
    toast.success('Registered Successfully')
   }

  return (
    <Layout title={"Ecommerce App-Register"}>
      <div className="register">
        <h3>Register Page</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
               Name
            </label>
            <input
              type="text"
              value={name}
              onChange = {(e) => setName(e.target.value)}
              className="form-control"
              id="exampleInputName" 
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail" className="form-label">
               Email
            </label>
            <input
              type="email"
              value={email}
              onChange = {(e) => setEmail(e.target.value)}
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
              onChange = {(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword"
              placeholder="*********"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPhone" className="form-label">
               Phone
            </label>
            <input
              type="text"
              value={phone}
              onChange = {(e) => setPhone(e.target.value)}
              className="form-control"
              id="exampleInputPhone" 
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputAddress" className="form-label">
               Address
            </label>
            <input
              type="text"
              value={address}
              onChange = {(e) => setAddress(e.target.value)}
              className="form-control"
              id="exampleInputAddress" 
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
