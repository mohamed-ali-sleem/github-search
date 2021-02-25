import React from "react";
import "./card.scss";

interface Props {
  user: any;
}

const UserCard: React.FC<Props> = ({ user }) => {
  return (
    <div className="card">
      <a  href={user.html_url} className="card__url">
        <img src={user.avatar_url} className="card__img" alt={user.login} />
        <div className="card__body">
          <h4>{user.login}</h4>
        </div>
      </a>
    </div>
  );
};
export default UserCard;
