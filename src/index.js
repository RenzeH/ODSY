import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import FriendProfilePage from './pages/FriendProfilePage';
import ChatroomPage from './pages/ChatroomPage';
import ChatListPage from './pages/ChatList';
import ConversationPage from './pages/ConversationPage';
import SettingsPage from './pages/SettingsPage';
import Priv from './pages/Priv';

import { auth } from './firebase/firebaseConfig';
import 'firebase/compat/firestore';

import './index.css';

function Banner() {
  return (
    <Link to="/">
      <img style={{marginTop:'3rem', height:'5rem' }} src='./odyssey.svg' alt=''></img>
    </Link>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        localStorage.setItem("name", displayName);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", photoURL);
        console.log(uid);
        
        console.log("user crt");
      } else {
        localStorage.removeItem("name");
        localStorage.removeItem("email");
        localStorage.removeItem("profilePic");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <Router>
        <Banner />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/FriendProfilePage" element={<FriendProfilePage />} />
          <Route path="/chatroom" element={<ChatroomPage />} />
          <Route path="/chatlist" element={<ChatListPage />} />
          <Route path="/conversation/:id" element={<ConversationPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/Priv" element={<Priv />} />
        </Routes>
      </Router>
    </div>
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
