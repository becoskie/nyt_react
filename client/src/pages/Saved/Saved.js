import React, { Component } from "react";
import API from "../../utils/api";

class Saved extends Component {

    state = {
        saved: []
      };


      componentDidMount() {
        this.getSavedArticles()
      }

      getSavedArticles = () => {
        API.getArticle()
          .then((res) => {
            this.setState({ saved: res.data });
          });
      }

      render() {
        return (
          <div className="container">
            <p>From saved</p>
          </div>
        );
      }
    
}

export default Saved;
