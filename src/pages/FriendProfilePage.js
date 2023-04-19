import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from 'antd';

const FriendProfilePage = ({ friendInfo, isFriend }) => {
  return (
    <div className="container">
      <div className="logo">
        <h1 className="logo-text">Odyssey</h1>
      </div>
      <div className="profile">
        <Avatar size="large" src={friendInfo.avatar} />
        <h2 className="profile-name">{friendInfo.name}</h2>
        <p className="profile-intro">{friendInfo.intro}</p>
        {isFriend ? (
          <Link to={`/chat/${friendInfo.id}`} className="btn-primary">
            繼續聊天
          </Link>
        ) : (
          <button className="btn-primary">開始對話</button>
        )}
      </div>
    </div>
  );
};

export default FriendProfilePage;
