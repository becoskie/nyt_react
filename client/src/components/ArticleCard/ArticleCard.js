import React from "react";
import "./ArticleCard.css";

const ArticleCard = props => {
  const articleCard = props.articles.map(a => (
    <div className="container col-12 mb-4" key={a._id}>
      <div className="card">
        <div className="card-body">
          <a href={a.web_url} target="_blank" className="card-link">
            <h5 className="card-title">{a.headline.main}</h5>
          </a>
          <p className="author card-text">{a.byline.original}</p>
          <p className="card-text">{a.snippet}</p>
          <button type="submit" className="btn btn-dark" onClick={() => props.handleSaveButton(a._id)} title="Click to save this article.">Save</button>
        </div>
      </div>
    </div>
  ));

  return <div className="row">{articleCard}</div>;
};

export default ArticleCard;
