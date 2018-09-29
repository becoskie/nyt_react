import React from "react";
import "./SearchForm.css";

const SearchForm = props => (
  <div className="container mb-5">
    <form className="search col-md-6 offset-md-3">
      <div className="form-group">
        <label htmlFor="articleSearch">Article topic</label>
        <input
          onChange={props.handleTopic}
          type="text"
          className="form-control"
          id="articleSearch"
          aria-describedby="searchArticle"
          placeholder="Search Article by topic"
        />
      </div>
      <div className="row">
        <div className="form-group col-6">
          <label htmlFor="fromYear">Start Year:</label>
          <input
            onChange={props.handleFromYear}
            type="text"
            className="form-control"
            id="fromYear"
            placeholder="From year"
          />
        </div>
        <div className="form-group col-6">
          <label htmlFor="toYear">To Year:</label>
          <input
            onChange={props.handleToYear}
            type="text"
            className="form-control"
            id="toYear"
            placeholder="To year"
          />
        </div>
      </div>
      <button
        onClick={props.handleSubmit}
        type="submit"
        className="btn btn-dark"
      >
        Submit
      </button>
    </form>
  </div>
);

export default SearchForm;
