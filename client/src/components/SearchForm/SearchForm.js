import React from "react";
import "./SearchForm.css";

const SearchForm = props => (
   <div className="container mb-5">
   <form className="search col-md-6 offset-md-3">
      <form>
  <div className="form-group">
    <label for="articleSearch">Article topic</label>
    <input type="text" className="form-control" id="articleSearch" aria-describedby="searchArticle" placeholder="Search Article by topic"/>
  </div>
  <div className = "row">
  <div className="form-group col-6">
    <label for="startYear">Start Year:</label>
    <input type="text" className="form-control" id="startYear" placeholder="Start year"/>
  </div>
  <div className="form-group col-6">
    <label for="endYear">End Year:</label>
    <input type="text" className="form-control" id="endYear" placeholder="End year"/>
  </div>
  </div>
  <button type="submit" className="btn btn-dark">Submit</button>
</form>
    </form>
    
    </div>
  );
  
  export default SearchForm;
  