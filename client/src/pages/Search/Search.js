import React, { Component } from "react";
import SearchForm from "../../components/SearchForm";
import ArticleCard from "../../components/ArticleCard";

class Search extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <SearchForm />
        </div>
        <div className="row">
          <ArticleCard />
        </div>
      </div>
    );
  }
}

export default Search;
