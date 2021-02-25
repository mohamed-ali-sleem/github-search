import React from "react";
import styles from "./SearchResult.module.scss";
import RepositoryCard from "../Cards/RepositoryCard";
import UserCard from "../Cards/UserCard";
import spinner from "../../assets/images/spinner-icon.gif";
import errorIcon from "../../assets/images/error-icon.png";


interface Props {
  items: any,
  loading: boolean,
  error: string,
  itemsCount: number,
  form: any
}
const SearchResult: React.FC<Props> = ({ items, loading, error, form, itemsCount }) => {

  if (error) {
    return (
      <div>
        <img src={errorIcon} width="90px" height="90px" className="icon" alt=" error message" />
        <p className={styles.Error__messge} > {error} </p>
      </div>
    )
  }
  if (loading && itemsCount <= 0) { return <img src={spinner} width="90px" height="90px" className="icon" alt="loader icon" /> }
  
  if (!items.length && form.name) {
    return <p> No reposeitories or Users match this keyword</p>
  }

  return (
    <>
      <div className={styles.CardsContainer}>
        {items.map((item: any) => {
          if (form.type === "users") {
            return <UserCard key={item.id} user={item} />;
          } else {
            return <RepositoryCard key={item.id} repo={item} />;
          }
        })}

      </div>
      <div className="mt-4 load__more">
        {loading && itemsCount ? <img src={spinner} width="45px" height="45px" className="icon" alt="loader icon" /> : ""}
      </div>
    </>
  );
};

export default SearchResult;
