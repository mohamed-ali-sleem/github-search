import React, { useState, useCallback, useEffect } from "react";
import { connect } from "react-redux";
import Icon from "../../assets/images/github.png";
import debounce from "lodash.debounce";

import { ApplicationState } from "../../redux";
import { fetchRequest } from "../../redux/search/action";
import { resetStore } from "../../redux/search/action";

import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import SearchResult from "../../components/SearchResult/SearchResult";

import "./style.scss";

interface SearchOption {
  key: number,
  name: string,
  id: string
}

interface propsFromComponent {
  name: string;
  type: string;
}


const SearchComponent: React.FC<any> = ({ fetchRequest, searhResult, errors, isLoading, resetStore, itemsCount }) => {
  const searchOptions: SearchOption[] = [
    {
      key: 1,
      name: "users",
      id: "users_id"
    },
    {
      key: 2,
      name: "repositories",
      id: "repositories_id"
    }
  ]
  const [page, setPage] = useState(1);
  const [per_page, setPerPage] = useState(10);
  const [form, setForm] = useState<propsFromComponent>({ name: "", type: "users" });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    console.log(form);
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSearch = () => {
    if (form.name.length >= 3) {
      loadeMore()
    } else {
      resetStore()
    }
  };

  const loadeMore = () => {
    let size = (per_page + 10);
    fetchRequest(form.type, form.name, page, size)
  }

  const debouncedSearch = useCallback(debounce(handleSearch, 1500), [form]);
  const dataScrolled = useCallback(debounce(loadeMore, 500), [searhResult]);

  useEffect(() => {
    debouncedSearch();
  }, [form]);


  window.onscroll = function () {
    if ((window.pageYOffset + window.innerHeight) >= document.body.scrollHeight) {
      // you're at the bottom of the page
      setPerPage(c => c + 10);
      dataScrolled()
    }
  };

  return (
    <div className={`search__page ${form.name.length >= 3 ? "fixed_header" : ""}`}>
      <div className="header__container">
        <div className="container">
          <div className="search__container">
            <div className="search__head">
              <img src={Icon} className="icon" alt="github logo" />
              <div>
                <h4>Github Searcher</h4>
                <p>Search users or repositories below</p>
              </div>
            </div>

            <form className="search_form">
              <input className="form__control mr-md" placeholder="Start type to rearch ... " name="name" value={form.name} onChange={handleChange} />
              <select className="form__control custom__select" name="type" onChange={handleChange}>
                {searchOptions.map((opt) => (
                  <option value={opt.name} key={opt.id} >{opt.name}</option>
                ))}
              </select>
            </form>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="search__result">
          <SearchResult items={searhResult} error={errors} loading={isLoading} form={form} itemsCount={itemsCount} />
        </div>

      </div>
    </div>
  )
};

const mapStateToProps = ({ search }: ApplicationState) => ({
  isLoading: search.loading,
  errors: search.errors,
  searhResult: search.data,
  itemsCount: search.count
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    fetchRequest: (type: string, query: string, page: number, count: number) => { dispatch(fetchRequest(type, query, page, count)); },
    resetStore: () => { dispatch(resetStore()); },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);
