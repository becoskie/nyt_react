import React, { Component } from "react";
import SavedCard from "../../components/SavedCard";
import API from "../../utils/api";
import "./Saved.css";

class Saved extends Component {

    state = {
        saved: [],
        message: "You don't have anything saved yet."
      };


      componentDidMount() {
        this.getSavedArticles()
      }

      getSavedArticles = () => {
        API.getArticle()
          .then((res) => {
            this.setState({ saved: res.data });
            if(this.state.saved.length > 0) {
              this.setState( {message: "Your Saved Articles"} );
            }
          });
      }

      handleDelete = (id) => {
        API.deleteArticle(id)
          .then(this.getSavedArticles());
      }

      render() {
        return (
          <div className="container savedCard col-8 offset-2">
          <h1 id = "message" className = "text-center mb-5">{this.state.message}</h1>
          <SavedCard 
          saved={this.state.saved}
          handleDelete={this.handleDelete}
          />
          </div>
        );
      }
    
}

export default Saved;
