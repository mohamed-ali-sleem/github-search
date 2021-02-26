import React from "react";
import "./card.scss";
import defualtImage from "../../assets/images/notfound.png";

// here we can provide formated data
interface Props {
  repo: any;
}

const RepositoryCard: React.FC<Props> = ({ repo }) => {
  return (
    <div className="card">
      <a href={repo.html_url} className="card__url"> 
        <img src={repo?.owner?.avatar_url || defualtImage} className="card__img" alt="" />
        <div className="card__body">
          <h4>{repo.name}</h4>
        </div>
      </a>
    </div>
  );
};
export default RepositoryCard;
