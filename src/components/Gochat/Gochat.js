
import './Gochat.css';
import React from 'react';
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div style={{marginTop:'3rem'}}>
      <Link to="/chatlist">
        <button type="button" >
        GoChat!
        </button>
      </Link>
      
      
    </div>
    
  )
}

export default Login;