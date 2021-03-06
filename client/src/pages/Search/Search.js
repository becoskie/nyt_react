import React, { Component } from "react";
import SearchForm from "../../components/SearchForm";
import ArticleCard from "../../components/ArticleCard";
import API from "../../utils/api";
import "./Search.css";

class Search extends Component {
  state = {
    topic: "",
    fromYear: "",
    toYear: "",
    message: "",
    articles: []
  };

  handleTopic = event => {
    this.setState({ topic: event.target.value });
  };

  handleFromYear = event => {
    this.setState({ fromYear: event.target.value });
  };

  handleToYear = event => {
    this.setState({ toYear: event.target.value });
  };



  handleSubmit = event => {
    event.preventDefault();
    this.setState( {message:""} )
    API.searchTopic(
      this.state.topic,
      this.state.fromYear,
      this.state.toYear
    ).then(res => {
      this.setState({ articles: res.data.response.docs });
      //console.log("this.state.articles: ", this.state.articles);
      document.getElementById("create-course-form").reset();
      if(this.state.articles.length < 1) {
        this.setState( {message: `No Articles Found for "${this.state.topic}"`} );
      }
    });
  };

  handleSaveButton = id => {
    const findArticleByID = this.state.articles.find(el => el._id === id);
    //console.log("findArticleByID: ", findArticleByID);
    const userSave = {
      title: findArticleByID.headline.main,
      date: findArticleByID.pub_date,
      url: findArticleByID.web_url,
      desc: findArticleByID.snippet,
      section: findArticleByID.news_desk,
      author:findArticleByID.byline.original
    };
    API.saveArticle(userSave);
    this.setState({articles: this.state.articles.filter(id => id !== findArticleByID)});
  };

  render() {
    return (
      <div className="container col-10 offset-1">
        <div className="row">
          <SearchForm
            handleTopic={this.handleTopic}
            handleFromYear={this.handleFromYear}
            handleToYear={this.handleToYear}
            handleSubmit={this.handleSubmit}
          />
        </div>
        <div>
          <h1 id="noMessage" className="text-center">{this.state.message}</h1>
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
