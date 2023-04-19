import React from 'react';
import Login from '../components/Login/Login';
import Gochat from '../components/Gochat/Gochat';
import { Link } from "react-router-dom";
import { useAuth } from "../firebase/firebaseConfig";

const LoginPage = () => {
  const user = useAuth();

  return (
    <div style={{display:'flex', flexDirection:'column', marginTop:'2rem', alignItems: 'center'}} className="login-page">
      {user ?
        <>
          <img style={{marginTop:'3rem', width:'3rem' }} src={localStorage.getItem("profilePic")} alt=''></img>
          <h3>{localStorage.getItem("name")}</h3>
          <h3>{localStorage.getItem("email")}</h3>
          
                  <Gochat />
                  <h5>哈囉 {localStorage.getItem("name")}！ 歡迎回來！</h5>
        </>
        :
        <>
          <Login />
          <Link style={{marginTop:'2rem', color: 'black', textDecoration: 'none'}} to='/Priv' >隱私宣告</Link>
        </>
      }
    </div>
  );
};

export default LoginPage;
