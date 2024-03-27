import React, { useState, useEffect } from "react";
import { useNavigate , useLocation } from "react-router-dom";
import loading from "./loading.gif";

const Spinner = () => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((preValue) => --preValue);
    }, 1000);
    count === 0 && navigate("/login",{
        state:location.pathname,
    });
    return () => clearInterval(interval);
  }, [count, navigate , location]);
  return (
    <>
      <div className="d-flex  justify-content-center align-item-center">
        <h3 className="Text-center">
          redirecting to you in {count} seconds...
        </h3>
      </div>

      <div className="d-flex  justify-content-center align-item-center">
        <img
          className="my-3  "
          style={{ padding: "35vh" }}
          src={loading}
          alt="loading"
        />
      </div>
    </>
  );
};

export default Spinner;
