import React from "react";
import "./Search.css";

const Search = props => (
   <div className="container">
   <form className="search col-md-6 offset-md-3">
      <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <button type="submit" className="btn btn-dark">Submit</button>
</form>
    </form>
    </div>
  );
  
  export default Search;
  