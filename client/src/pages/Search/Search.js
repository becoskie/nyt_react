import React, { Component } from "react";
import SearchForm from "../../components/SearchForm";
import ArticleCard from "../../components/ArticleCard";
import API from "../../utils/api";

class Search extends Component {
    state = {
        topic: "",
        fromYear: "",
        toYear: "",
        articles: [],
        saved: []
      };


      handleTopic = (event) => {
        this.setState({ topic: event.target.value });
      }

      handleFromYear = (event) => {
        this.setState({ fromYear: event.target.value });
      }

      handleToYear = (event) => {
        this.setState({ toYear: event.target.value });
      }

      handleSubmit = (event) => {
        event.preventDefault();
        API.searchTopic(this.state.topic, this.state.fromYear, this.state.toYear)
          .then((res) => {
            this.setState({ articles: res.data.response.docs });
            console.log("this.state.articles: ", this.state.articles);
          });
      }

      handleSaveButton = (id) => {
        const findArticleByID = this.state.articles.find((el) => el._id === id);
        console.log("findArticleByID: ", findArticleByID);
        // const newSave = {title: findArticleByID.headline.main, date: findArticleByID.pub_date, url: findArticleByID.web_url};
        // API.saveArticle(newSave)
        // .then(this.getSavedArticles());
      }



  render() {
    return (
      <div className="container">
        <div className="row">
          <SearchForm 
          handleTopic={this.handleTopic}
          handleFromYear={this.handleFromYear}
          handleToYear={this.handleToYear}
          handleSubmit={this.handleSubmit}
          />
        </div>
          <ArticleCard 
          articles={this.state.articles}
          handleSaveButton={this.handleSaveButton}
          />
      </div>
    );
  }
}

export default Search;
